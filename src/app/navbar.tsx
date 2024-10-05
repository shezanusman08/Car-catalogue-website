export default function Navbar() {
    return (
      <nav className="bg-blue-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Car Catalogue</h1>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-gray-200">Home</a></li>
            <li><a href="#cars" className="hover:text-gray-200">Cars</a></li>
            <li><a href="#about" className="hover:text-gray-200">About</a></li>
            <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  