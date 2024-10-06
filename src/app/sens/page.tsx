import dynamic from 'next/dynamic'; 

// Cargar los componentes dinámicamente para que solo se carguen en el cliente
const Slide5 = dynamic(() => import('../ui/Slide5'), { ssr: false });


export default function MapPage() {
  return (
    <div>
       {/* Renderizar ambos slides */}
      <Slide5 />
     
  
    </div>
    
  );
}
