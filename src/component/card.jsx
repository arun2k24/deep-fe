import React from 'react';

function Footer() {
  return (
    <footer className="w-full py-6 bg-black border-t border-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-stretch px-6 gap-6">
  
        <div className="w-full md:w-1/3 px-4">
          <div className="bg-black border border-white p-6 rounded-lg shadow-md text-center h-full flex flex-col justify-center">
            <h3 className="text-blue-500 text-lg font-semibold mb-2">CONNECT WITH US</h3>
            <p className="text-gray-600 flex items-center justify-center gap-2">
              📞 <span>+91 9567843340</span>
            </p>
            <p className="text-gray-600 flex items-center justify-center gap-2">
              ✉️ <span>info@deepnetsoft.com</span>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <div className="bg-black border border-white p-6 rounded-lg shadow-md text-center h-full flex flex-col justify-center">
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">D</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold">
              <span className="text-blue-500">DEEP</span> NET <span className="text-gray-600">SOFT</span>
            </h2>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <img src="https://via.placeholder.com/20" alt="Facebook" className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <img src="https://via.placeholder.com/20" alt="Twitter" className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <img src="https://via.placeholder.com/20" alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        
        <div className="w-full md:w-1/3 px-4">
          <div className="bg-black border border-white p-6 rounded-lg shadow-md text-center h-full flex flex-col justify-center">
            <h3 className="text-blue-500 text-lg font-semibold mb-2">FIND US</h3>
            <p className="text-gray-600">
              📍 First floor, Geo Infopark, <br /> Infopark EXPY, Kakkanad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
