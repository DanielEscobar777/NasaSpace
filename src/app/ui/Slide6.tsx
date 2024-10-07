'use client';

import React, { useEffect, useState } from 'react';
import mapaHidicoData from './logos/mapa_hidico.json'; // Ajusta la ruta según sea necesario

interface Feature {
  osm_id: number;
  osm_type: string;
  water: string;
  waterway: string | null;
  natural: string;
  latitude: number;
  longitude: number;
}

declare global {
  interface Window {
    initMap: () => void;
  }
}

const Map: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAet6BC3A-TE6toXKEFBxLcFYscszuNKFw&libraries=visualization,geometry&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);

    window.initMap = initMap;

    return () => {
      document.head.removeChild(script);
    };
  }, [selectedDate]);

  const calculateCO2 = (frp: number, activeTime: number) => {
    const factor = 0.068; // Ajuste del factor de emisión por MJ
    return frp * factor * activeTime; // toneladas de CO₂
  };

  const calculatePH = (co2: number, nearbyHeatPoints: number) => {
    const basePH = 7.4; // pH neutro en condiciones estándar
    const co2Impact = 0.08 * Math.log10(co2); // Ajuste del impacto logarítmico del CO₂
    const proximityImpact = nearbyHeatPoints * 0.15; // Impacto ajustado por focos cercanos
    const finalPH = basePH - co2Impact - proximityImpact;

    return Math.max(4, Math.min(finalPH, 7)).toFixed(2); // Límite entre 4 y 7
  };

  const initMap = () => {
    const heatmapMap = new google.maps.Map(document.getElementById('heatmap') as HTMLElement, {
      zoom: 6,
      center: { lat: -16.2902, lng: -63.5887 },
    });

    const currentDate = new Date();
    const selected = new Date(selectedDate);
    const diffInMonths = (currentDate.getFullYear() - selected.getFullYear()) * 12 + (currentDate.getMonth() - selected.getMonth());
    const satellite = diffInMonths >= 6 ? 'MODIS_SP' : 'VIIRS_SNPP_NRT';

    const apiUrl = `https://firms.modaps.eosdis.nasa.gov/api/country/csv/f6ea1d1bcf4de909a846c078e9b22adc/${satellite}/BOL/2/${selectedDate}`;

    fetch(apiUrl)
      .then((response) => response.text())
      .then((data) => {
        const lines = data.split('\n');
        const heatPoints: google.maps.LatLng[] = [];

        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(',');
          if (values.length >= 14) {
            const lat = parseFloat(values[1]);
            const lng = parseFloat(values[2]);
            const frp = parseFloat(values[13]);
            const activeTime = 1; // Suposición de 1 hora de actividad

            heatPoints.push(new google.maps.LatLng(lat, lng));

            const co2 = calculateCO2(frp, activeTime);

            const nearbyHeatPoints = heatPoints.filter((point) =>
              google.maps.geometry.spherical.computeDistanceBetween(point, new google.maps.LatLng(lat, lng)) < 5000
            ).length;

            const pH = calculatePH(co2, nearbyHeatPoints);

            const marker = new google.maps.Marker({
              position: { lat, lng },
              map: heatmapMap,
              title: `OSM ID: ${values[0]}`,
              icon: {
                url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                scaledSize: new google.maps.Size(5, 5),
              },
            });

            const infoWindow = new google.maps.InfoWindow({
              content: `Estimación de CO2: ${co2.toFixed(2)} toneladas<br>Estimación del pH del agua: ${pH}<br>Ubicación: ${lat.toFixed(4)}, ${lng.toFixed(4)}`,
            });

            marker.addListener('click', () => {
              infoWindow.open(heatmapMap, marker);
            });
          }
        }

        new google.maps.visualization.HeatmapLayer({
          data: heatPoints,
          map: heatmapMap,
          radius: 20,
        });

        const features = mapaHidicoData as Feature[];
        features.forEach((feature) => {
          if (feature.latitude && feature.longitude) {
            new google.maps.Marker({
              position: { lat: feature.latitude, lng: feature.longitude },
              map: heatmapMap,
              title: `OSM ID: ${feature.osm_id}`,
              icon: {
                url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                scaledSize: new google.maps.Size(5, 5),
              },
            });
          }
        });
      });
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f4f8', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ fontSize: '24px', color: '#2980b9', textAlign: 'center', marginBottom: '20px' }}>
        Mapa de Focos de Calor y Estimación de CO2
      </h2>
      <p style={{ textAlign: 'center', marginBottom: '10px', fontSize: '16px', color: '#555' }}>
        Selecciona la fecha que deseas saber el dato:
      </p>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        style={{
          padding: '10px',
          border: '1px solid #bdc3c7',
          borderRadius: '5px',
          marginBottom: '20px',
          width: '100%',
          maxWidth: '300px',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        }}
      />
      <p style={{ textAlign: 'center', marginBottom: '20px', fontSize: '16px', color: '#555' }}>
        Presiona un punto del marcador azul para saber la estimación del pH y del CO₂ de ese punto.
      </p>
      <div id="heatmap" style={{ width: '100%', height: '70vh', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} />
    </div>
  );
};

export default Map;
