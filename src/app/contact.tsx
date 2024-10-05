export default function Contact() {
    return (
      <section id="contact" className="py-16 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Contact Us</h2>
          <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea 
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                  rows={4}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-blue-700 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-800 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  