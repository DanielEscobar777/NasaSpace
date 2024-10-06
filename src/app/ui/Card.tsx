type CardProps = {
  title: string;
  subtitle: string;
  bgColor?: string; // Color de fondo opcional, con un valor por defecto
};
const Card = ({ title, subtitle, bgColor = "bg-emerald-400" }: CardProps) => {
  return (
    <div
      className={`${bgColor} w-full shadow-lg rounded-lg overflow-hidden p-10`}
    >
      <div className="lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 text-center mx-4 sm:mx-6 lg:mx-12">
          <h2 className="text-4xl font-bold text-stone-100">{title}</h2>
          <div className="p-8">
            <hr className="w-full max-w-xs h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
          </div>

          <p className="text-stone-100 text-2xl">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
