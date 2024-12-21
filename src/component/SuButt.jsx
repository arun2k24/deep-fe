import React, { useState } from 'react';

function App() {
  const [selectedMenu, setSelectedMenu] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const foodItems = [
    { name: 'Burger', description: 'Delicious beef burger', price: '5.99', image: '/burger.png' },
    { name: 'Pizza', description: 'Cheesy and savory pizza', price: '8.99', image: '/piza.png' },
  ];

  const drinkItems = [
    { name: 'Coke', description: 'Refreshing soda', price: '1.99', image: '/cocktail.png' },
    { name: 'Juice', description: 'Freshly squeezed juice', price: '2.99', image: '/pin.png' },
  ];

  const brunchItems = [
    { name: 'Pancakes', description: 'Fluffy pancakes with syrup', price: '7.99', image: '/pancake.png' },
    { name: 'Omelette', description: 'Delicious omelette with veggies', price: '6.99', image: '/ome.png' },
  ];

  const getMenuItems = () => {
    if (selectedMenu === 'FOOD') return foodItems;
    if (selectedMenu === 'DRINK') return drinkItems;
    if (selectedMenu === 'BRUNCH') return brunchItems;
    return [];
  };

  const toggleDropdown = (menu) => {
    if (selectedMenu === menu && isDropdownOpen) {
      // Close the dropdown if the same menu is clicked again
      setIsDropdownOpen(false);
    } else {
      // Open the dropdown with the selected menu
      setSelectedMenu(menu);
      setIsDropdownOpen(true);
    }
  };

  const renderMenuItems = (itemsToRender) => {
    return (
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {itemsToRender.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center space-y-2 bg-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-48 h-48 object-cover rounded"
            />
            <h3 className="font-bold text-sm text-center">{item.name}</h3>
            <p className="text-sm text-center">{item.description}</p>
            <p className="text-lg font-bold text-green-600">${item.price}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div
        className="flex justify-center items-center space-x-4 p-4"
        style={{
          backgroundImage: 'url("/min.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '80px',
        }}
      >
        <button
          className="btn btn-outline btn-info"
          onClick={() => toggleDropdown('FOOD')}
        >
          FOOD
        </button>
        <button
          className="btn btn-outline btn-success"
          onClick={() => toggleDropdown('DRINK')}
        >
          DRINK
        </button>
        <button
          className="btn btn-outline btn-warning"
          onClick={() => toggleDropdown('BRUNCH')}
        >
          BRUNCH
        </button>
      </div>

      {isDropdownOpen && (
        <div className="mt-4 p-4">
          {selectedMenu && (
            <>
              <h2 className="text-xl font-bold mb-4">{selectedMenu} Menu</h2>
              {renderMenuItems(getMenuItems())}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
