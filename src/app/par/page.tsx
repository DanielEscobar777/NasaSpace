import dynamic from 'next/dynamic'; 

// Cargar los componentes dinámicamente para que solo se carguen en el cliente
const Slide3 = dynamic(() => import('../ui/Slide3'), { ssr: false });


export default function MapPage() {
  return (
    <div>
      
       {/* Renderizar ambos slides */}
      <Slide3 />
     
  
    </div>
    
  );
}
