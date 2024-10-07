import Card from "./ui/Card";
import Slide1 from "./ui/Slide";

export default function Home() {
  return (
    <>
    <Slide1></ Slide1>
      <div>
        <Card
          title="¿Quiénes somos?"
          subtitle="Veedores del estado ambiental para la protección y preservación ayudados por la tecnología."
          bgColor="bg-emerald-400"
        />
        
        <Card
          title="Lideres"
          subtitle="Innovación en tecnologias."
          bgColor="bg-blue-600"
        />

        <Card
          title="Valores"
          subtitle="Responsabilidad de información. Responsabilidad ambiental"
          bgColor="bg-yellow-500"
        />
   
       
        
      </div>
    </>
  );
}
