import React, { useState } from 'react';
import Header from './Header';


const MenuItem = ({ item, addToOrder }) => {
  return (
    <>
    <div className="menu-item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price.toFixed(2)}</p>
      <button onClick={() => addToOrder(item)}>Add to Order</button>
    </div>
    </>
  );
};

const OrderOnline = () => {
  const [order, setOrder] = useState([]);

  const menuItems = [
    { id: 1, name: 'Margherita Pizza', description: 'Classic pizza with fresh mozzarella and basil.', price: 12.99 },
    { id: 2, name: 'Spaghetti Carbonara', description: 'Pasta with eggs, cheese, pancetta, and pepper.', price: 14.99 },
    { id: 3, name: 'Lasagna', description: 'Layers of pasta with meat, cheese, and tomato sauce.', price: 15.99 },
    { id: 4, name: 'Fettuccine Alfredo', description: 'Creamy pasta dish with parmesan cheese.', price: 13.99 },
    { id: 5, name: 'Pesto Pasta', description: 'Pasta tossed with fresh basil pesto.', price: 11.99 },
    { id: 6, name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic.', price: 9.99 },
    { id: 7, name: 'Tiramisu', description: 'Classic Italian dessert with layers of coffee-soaked cake.', price: 6.99 },
    { id: 8, name: 'Bruschetta', description: 'Grilled bread topped with tomatoes, garlic, and basil.', price: 7.99 },
    { id: 9, name: 'Ravioli', description: 'Stuffed pasta with ricotta cheese and spinach.', price: 13.49 },
    { id: 10, name: 'Chicken Parmesan', description: 'Breaded chicken with marinara sauce and cheese.', price: 16.99 },
  ];

  const addToOrder = (item) => {
    setOrder([...order, item]);
    alert(`${item.name} has been added to your order!`);
  };

  return (
    <>
    <Header/>
    <div className="order-online">
      <h1 style={{ textAlign: "center", paddingTop:'7rem'}}>Order Online</h1>
      <div className="menu" style={{ textAlign: "center", paddingTop:'7rem'}}>
        {menuItems.map(item => (
          <MenuItem key={item.id} item={item} addToOrder={addToOrder} />
        ))}
      </div >
      <h2 style={{ textAlign: "center", paddingTop:'7rem'}}>Your Order:</h2>
      <ul>
        {order.map((item, index) => (
          <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default OrderOnline;
