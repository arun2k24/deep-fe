import React from 'react';

function Header() {
  return (
    <div 
      className="hero bg-cover bg-center h-60 relative" 
      style={{ backgroundImage: 'url(/bin.png)' }}
    >
    

    
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-white">MENU</h1>
          <p className="py-10 text-white">
            Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an
            order, use the "Order Online" button located below the menu.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
