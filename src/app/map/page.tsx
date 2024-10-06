import dynamic from 'next/dynamic'; 

// Cargar los componentes dinámicamente para que solo se carguen en el cliente

const Slide6 = dynamic(() => import('../ui/Slide6'), { ssr: false });

export default function MapPage() {
  return (
    <div>

      {/* Renderizar ambos slides */}
      <Slide6 />
    </div>
    
  );
}
