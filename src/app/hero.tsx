import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-80 flex items-center justify-center">
      <Image 
        src="/images/herocar.jpg" 
        alt="Hero Car" 
        layout="fill" 
        objectFit="cover" 
        className="absolute inset-0 w-full h-full z-0" 
      />
      <div className="relative z-10 text-center text-white bg-black bg-opacity-50 p-4 rounded-lg">
        <h1 className="text-4xl font-bold">Explore Our Top Cars</h1>
        <p className="mt-2 text-xl">Drive your dream car today!</p>
      </div>
    </section>
  );
}
