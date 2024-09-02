import React from 'react';
import Salad from '/Users/sumersinghkang/Desktop/Final Project/littleleomon/src/Asset/greek salad.jpg';
import Bruchet from '/Users/sumersinghkang/Desktop/Final Project/littleleomon/src/Asset/bruchetta.svg';
import Des from '/Users/sumersinghkang/Desktop/Final Project/littleleomon/src/Asset/lemon dessert.jpg';
import IconDish from '/Users/sumersinghkang/Desktop/Final Project/littleleomon/src/Asset/Dish icon.svg';
import {Link} from 'react-router-dom';

const Cards = () => {
    return (
        <>
        <div className='order'>
        <h1>This weeks specials</h1>
        <button className="button-yellow" style={{marginLeft:'27rem'}}> <Link to="/menu" className='link'>Online Menu </Link></button>
        </div>

        <div className="cards-container">
        <div className="card">
          <img src={Salad} alt="Greek Salad" />

          <div className='price-name'>
          <h3>Greek Salad</h3>
          <p style={{color:'red', fontWeight: 'bold', fontSize:'22px'}}>$12.99</p>
          </div>
          <p>Greek salad combines tomatoes, cucumbers, onions, olives, and feta cheese, dressed with olive oil and oregano. It's a refreshing colorful dish.</p>

          <div className='bot-btn'>
          <button className='order-btn'>Order a Delivery</button>
          <h4 style={{paddingLeft:'1rem'}}>🚘</h4>
          </div>
        </div>

        <div className="card">
          <img src={Bruchet} alt="Brochette" />
          <div className='price-name'>
          <h3>Brochette</h3>
          <p style={{color:'red', fontWeight: 'bold', fontSize:'22px'}}>$10.99</p>
          </div>
          <p>Greek salad combines tomatoes, onions, olives, and feta cheese, dressed with olive oil and oregano. It's a refreshing colorful dish.</p>

          <div className='bot-btn'>
          <button className='order-btn'>Order a Delivery</button>
          <h4 style={{paddingLeft:'1rem'}}>🚘</h4>
          </div>
        </div>

        <div className="card">
          <img src={Des} alt="Lemon Dessert" />
          <div className='price-name'>
          <h3>Lemon Dessert</h3>
          <p style={{color:'red', fontWeight: 'bold', fontSize:'22px'}}>$4.99</p>
          </div>
          <p>Greek salad combines tomatoes, cucumbers, onions, olives, and feta cheese, dressed with olive oil and oregano. It's a refreshing colorful dish.</p>

          <div className='bot-btn'>
          <button className='order-btn'>Order a Delivery </button>
          <h4 style={{paddingLeft:'1rem'}}>🚘</h4>
          </div>
        </div>
      </div>
      </>
    );
};

export default Cards;