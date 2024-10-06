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
        <Card
          title="NUESTRO RETO FUE..."
          subtitle="Mapeo para la comunidad"
          bgColor="bg-orange-500"
        />
       
        <div
      className={`bg-indigo-500 w-full shadow-lg rounded-lg overflow-hidden p-10`}
    >
      <div className="lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 text-center mx-4 sm:mx-6 lg:mx-12">
          <h2 className="text-4xl font-bold text-stone-100">Cumplimos con:</h2>
          <div className="p-8">
            <hr className="w-full max-w-xs h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
          </div>

          <p className="text-stone-100 text-2xl">1. Uso de herramientas SIG</p>
          <p className="text-stone-100 text-2xl">2. Aplicación matematica y razonamiento científico</p>
          <p className="text-stone-100 text-2xl">3. Empleo de información de la NASA</p>
          <p className="text-stone-100 text-2xl">4. INFORMAR A NUESTRA COMUNIDAD</p>
        </div>
      </div>
    </div>
        
      </div>
    </>
  );
}
