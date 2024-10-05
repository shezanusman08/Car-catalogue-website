import Image from 'next/image';

interface Car {
  name: string;
  description: string;
  image: string;
}

interface CarsListProps {
  cars: Car[];
}

export default function CarsList({ cars }: CarsListProps) {
  return (
    <section id="cars" className="py-16 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Our Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image src={car.image} alt={car.name} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-900">{car.name}</h3>
                <p className="mt-2 text-gray-600">{car.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
