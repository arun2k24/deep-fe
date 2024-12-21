import React from 'react';

function Menu() {
  return (
    <div 
      className="bg-cover bg-center h-[80vh] relative" 
      style={{ backgroundImage: "url('/Bottle.png')" }}
    >
      <div className="container mx-auto p-8 bg-black border-2 border-white rounded-lg shadow-lg m-8 relative z-10">
      
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center z-20 mt-8">
          <h2 className="text-4xl font-bold text-white">--BRUNCH COCKTAILS--</h2>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative mt-24">
    
          <div className="space-y-8 md:order-1">
            <div className="mt-8">
              <h2 className="text-xl text-white mb-1">CINNAMON TOAST CRUNCH..............$16</h2>
              <h4 className="text-gray-400 leading-5 mt-2">
                Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon
              </h4>
            </div>
            <div className="mt-8">
              <h2 className="text-xl text-white mb-1">BAR 42 MARY.........................$14</h2>
              <h5 className="text-gray-400 leading-5 mt-2">
                Titos, tomato juice, worcestershire, celery salt, black pepper, tabasco, fully loaded
              </h5>
            </div>
          </div>

        
          <div className="space-y-8 md:order-2">
            <div className="mt-8">
              <h2 className="text-xl text-white mb-1">MOET SPRITZ.........................$20</h2>
              <h5 className="text-gray-400 leading-5 mt-2">
                Aperol, St. Germain, botanical liquor, fresh lime juice, mini brut Moet topper
              </h5>
            </div>
          </div>
        </div>

      
        <div className="absolute top-0 left-0 m-4">
          <img
            src="/cup.png"
            alt="Cup Logo"
            className="w-12 h-12"
          />
        </div>

        <div className="absolute bottom-0 right-0 m-2">
          <img
            src="/cocktail.png"
            alt="Cocktail Logo"
            className="w-12 h-12"
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
