import "../App.css";
// import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ImageOverlay,
} from "react-leaflet";
import { client } from "../supabase"; // Importar el cliente de Supabase

import { useEffect, useState } from "react";
import "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon.png";

function MyMap({ opacity }) {
  const [data, setData] = useState([]);

  let myIcon = L.icon({
    iconUrl: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Usar HTTPS
    iconSize: [30, 30], // Tamaño del ícono
    iconAnchor: [15, 30], // Punto del ícono que se ancla al mapa (centro inferior)
    popupAnchor: [0, -30], // Posición del popup relativo al ícono
    // Si tienes una imagen de sombra válida, descomenta y actualiza la siguiente línea
    // shadowUrl: "https://ruta_a_tu_imagen_de_sombra.png",
    // shadowSize: [68, 95], // Tamaño de la sombra
    // shadowAnchor: [22, 94], // Punto de anclaje de la sombra
  });
  // L.marker([50, 10], { icon: myIcon }).addTo(this.map);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data, error } = await client
      .from("estaciones")
      .select("*, datos_interpolacion(*)");
    if (error) {
      console.error("Error fetching data:", error);
    } else {
      console.log("Fetched data:", data); // Para verificar los datos
      setData(data);
    }
  };

  const LaPazLocation = [-16.489689, -68.119293];

  return (
    <MapContainer zoom={12} center={LaPazLocation}>
      {data.length === 0 ? (
        <div className="no-data-message">No data available</div>
      ) : (
        data.map((estacion) => {
          // Asegurarse de que las coordenadas están disponibles
          if (!estacion.latitude || !estacion.longitude) {
            console.warn(
              `Estación con ID ${estacion.id} no tiene coordenadas válidas.`
            );
            return null; // No renderizar el marcador si las coordenadas son inválidas
          }

          return (
            <Marker
              icon={myIcon}
              key={estacion.id}
              position={[Number(estacion.latitude), Number(estacion.longitude)]}
            >
              <Popup className="popup-custom">
                <div className="p-4">
                  <h3 className="text-lg font-bold text-blue-600">
                    {estacion.name}
                  </h3>
                  {/* Título más grande y con color destacado */}

                  <div className="mt-2">
                    <h4 className="text-md font-semibold text-gray-800">
                      Información General
                    </h4>
                    <p className="text-sm text-gray-600">
                      Última Actualización:{" "}
                      <strong>
                        {new Date(estacion.created_at).toLocaleDateString()}
                      </strong>
                    </p>
                  </div>

                  <div className="mt-2">
                    <h4 className="text-md font-semibold text-gray-800">
                      Datos de Calidad
                    </h4>
                    {estacion.datos_interpolacion.length > 0 ? (
                      <p className="text-sm text-gray-600">
                        Nivel de pH:{" "}
                        <strong>{estacion.datos_interpolacion[0].PH}</strong>
                      </p>
                    ) : (
                      <p className="text-sm text-gray-600">No data available</p>
                    )}
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })
      )}

      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ImageOverlay
        url="/idw_v2.jpg"
        opacity={opacity}
        bounds={[
          [-16.52853197, -68.092855649],
          [-16.541760207, -68.080000265],
        ]}
      />
    </MapContainer>
  );
}

export default MyMap;
