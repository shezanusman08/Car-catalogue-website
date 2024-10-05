import Header from "./header";
import Navbar from "./navbar";
import HeroSection from "./hero";
import CarsList from "./cars";
import Footer from "./footer";
import About from "./about";
import Contact from "./contact";

export default function Home() {
  const cars = [
    {
      name: 'Tesla Model S',
      description: 'A luxury electric sedan with impressive range and acceleration.',
      image: '/images/tesla.jpg',
    },
    {
      name: 'Ford Mustang',
      description: 'An iconic American muscle car with a powerful engine and aggressive design.',
      image: '/images/mustang.jpg',
    },
    {
      name: 'BMW i8',
      description: 'A hybrid sports car with sleek design and cutting-edge technology.',
      image: '/images/bmw.jpg',
    },
    {
      name: 'Audi R8',
      description: 'A powerful sports car known for its speed and performance.',
      image: '/images/audi.jpg',
    },
    {
      name: 'Porsche 911',
      description: 'A legendary high-performance sports car with timeless design.',
      image: '/images/porsche.jpg',
    },
  ];

  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
      <CarsList cars={cars} />
      <About/>
      <Contact/>
      <Footer />
    </div>
  );
}
