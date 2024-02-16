import React, { useState } from 'react';
import styles from './fooditem.css'; // Import CSS module

const YourOrders = () => {
  const foodItems = [
    { id: 1, name: 'MASALA DOSA', price: 40, image: './img/Masala-Dosa.jpg' },
    { id: 2, name: 'IDLI', price: 40, image: './img/Idli-with-sambar-and-chutney.jpg' },
    { id: 3, name: 'VEG GRIED RICE', price: 60, image: './img/Veg-Fried-Rice.jpg' },
  ];

  const handleQuantityChange = (index, e) => {
    let value = parseInt(e.target.value);
    if (!value || value < 0) value = 0;

    let newQuantities = [...quantities];
    newQuantities[index] = value;

    setQuantities(newQuantities);
    
    let newTotal = newQuantities.reduce((acc, quantity, i) => {
        return acc + (quantity * foodItems[i].price);
    }, 0);

    setTotal(newTotal);
};

const orderTime = new Date();
const deliveryTime = new Date(orderTime.getTime() + (60 * 60000)); // Adding 60 minutes

return (
  <div className={styles.foodItems}>
    <section>
      {foodItems.map((item, index) => (
          <div key={index} className={styles.foodItem}>
              <img src={item.image} alt={item.name} />
              <p>Name: {item.name}</p>
              <p>Price: {item.price} INR</p>
              <input 
                  type="number" 
                  value={quantities[index]} 
                  onChange={(e) => handleQuantityChange(index,e)} 
              />
          </div>
      ))}
      </section>
      <div className={styles.orderSummary}>
          <h2>Order Summary:</h2>
          <p>Your Total Bill Summary is {total} INR</p>
          <p>Order Time: {orderTime.toLocaleTimeString()}</p>
          <p>Expected Delivery Time: {deliveryTime.toLocaleTimeString()}</p>
      </div>
  </div>
);
};

export default YourOrders;