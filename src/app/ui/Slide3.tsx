import React from 'react';
import Image from 'next/image';

const Slide3 = () => {
  return (
    <div style={{ backgroundColor: '#f0f4f8', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2  style={{ color: '#2c3e50', fontSize: '28px', marginBottom: '20px' }}>Impacto del pH y Niveles de CO2 en Animales</h2>

      {/* Tabla de pH del agua */}
      <h3 style={{ color: '#2980b9', fontSize: '24px', marginTop: '20px' }}>Valores de Acidez del Agua</h3>
      <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', marginTop: '10px', backgroundColor: '#ffffff', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
        <thead>
          <tr style={{ backgroundColor: '#3498db', color: 'white' }}>
            <th style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Tipo de Animal</th>
            <th style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Rango de pH</th>
            <th style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Efecto</th>
            <th style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Ejemplos de Líquidos</th>
          </tr>
        </thead>
        <tbody>
          {/* Animales pequeños */}
          <tr>
            <td rowSpan={4} style={{ border: '1px solid #bdc3c7', padding: '10px', position: 'relative' }}>
              <Image
                src="/2.png"
                alt="Animales pequeños"
                width={150}
                height={100}
                style={{ objectFit: 'cover' }}
              />
              <div style={{ color: 'black', textAlign: 'center' }}>
                Animales pequeños (ej. peces, ranas, etc.)
              </div>
            </td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>pH &lt; 4.2</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Letalidad alta. Este nivel de acidez mata a todos los peces y muchos otros organismos acuáticos pequeños.</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Ácido de baterías (pH 0), ácido sulfúrico (pH 1), jugo de limón/vinagre (pH 2), jugo de naranja/bebida gaseosa (pH 3)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>pH 4.2 - 5.5</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Letalidad moderada. En este rango se encuentran la lluvia ácida (pH 4.2-4.4) y los lagos ácidos (pH 4.5).</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Lluvia ácida (pH 4.2-4.4), lagos ácidos (pH 4.5)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>pH 5.6 - 6.5</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Baja toxicidad. Líquidos como la lluvia limpia (pH 5.6) son generalmente seguros.</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Lluvia limpia (pH 5.6), agua de un lago saludable (pH 6.5)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>pH &gt; 9</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Letalidad alta. Los líquidos como el bicarbonato de soda (pH 9) pueden ser letales.</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Bicarbonato de soda (pH 9), agua con jabón (pH 12)</td>
          </tr>

          {/* Animales medianos */}
          <tr>
            <td rowSpan={4} style={{ border: '1px solid #bdc3c7', padding: '10px', position: 'relative' }}>
              <Image
                src="/3.png"
                alt="Animales medianos"
                width={150}
                height={100}
                style={{ objectFit: 'cover' }}
              />
              <div style={{ color: 'black', textAlign: 'center' }}>
                Animales medianos (ej. perros, gatos)
              </div>
            </td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>pH &lt; 3.5</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Letalidad alta. El consumo de líquidos con un pH similar al ácido de baterías puede ser fatal.</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Ácido de baterías (pH 0), ácido sulfúrico (pH 1), jugo de limón (pH 2)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>pH 4.2 - 5.5</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Letalidad moderada. Consumir líquidos como lluvia ácida puede ser muy irritante.</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Lluvia ácida (pH 4.2), jugo de naranja</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>pH 6.5 - 8.5</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Rango seguro. Similar al pH de líquidos como la leche o el agua potable.</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Leche (pH 6.5), agua potable (pH 7)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>pH &gt; 9</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Letalidad moderada a alta. Pueden causar problemas gastrointestinales graves.</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Bicarbonato de soda (pH 9), agua jabonosa (pH 12)</td>
          </tr>

          {/* Animales grandes */}
          <tr>
            <td rowSpan={4} style={{ border: '1px solid #bdc3c7', padding: '10px', position: 'relative' }}>
              <Image
                src="/4.png"
                alt="Animales grandes"
                width={150}
                height={100}
                style={{ objectFit: 'cover' }}
              />
              <div style={{ color: 'black', textAlign: 'center' }}>
                Animales grandes (ej. vacas)
              </div>
            </td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>pH &lt; 3.5</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Letalidad alta. Líquidos extremadamente ácidos pueden ser fatales.</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Ácido de baterías (pH 0), ácido sulfúrico (pH 1)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>pH 4.2 - 5.5</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Letalidad baja a moderada. La exposición constante puede causar problemas a largo plazo.</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Lluvia ácida (pH 4.2), jugo de naranja</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>pH 6.5 - 8.5</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Rango seguro. Líquidos como la leche y agua potable son seguros.</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Leche (pH 6.5), agua potable (pH 7)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>pH &gt; 9</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Letalidad moderada. Líquidos jabonosos pueden causar daños severos.</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Bicarbonato de soda (pH 9), agua jabonosa (pH 12)</td>
          </tr>
        </tbody>
      </table>

      {/* Tabla de Niveles de CO2 */}
      <h3 style={{ color: '#2980b9', fontSize: '24px', marginTop: '20px' }}>Niveles de CO2 en Diferentes Tipos de Animales</h3>
      <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', marginTop: '10px', backgroundColor: '#ffffff', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
        <thead>
          <tr style={{ backgroundColor: '#3498db', color: 'white' }}>
            <th style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Tipo de Animal</th>
            <th style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Concentración de CO2 (ppm)</th>
            <th style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Efectos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Peces</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>0 - 400</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Saludable. Aceptable para la mayoría de los peces.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Anfibios</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>300 - 1000</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Puede causar estrés y alteraciones en el comportamiento.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Reptiles</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>600 - 2000</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Puede causar hipoxia y afectar la salud.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Mamíferos</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>1000 - 5000</td>
            <td style={{ border: '1px solid #bdc3c7', padding: '10px' }}>Puede causar mareos y síntomas similares a los de intoxicación.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Slide3;
