import React from 'react';
import Bruchetta from "/Users/sumersinghkang/Desktop/Final Project/littleleomon/src/restauranfood.jpg"

const Main = () => {
    return (
        <main>
            <div>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button>Reserve a Table</button>
            </div>
            <img id='mainPic' src={Bruchetta} alt="Bruchetta" width= '427px' height= '463px' style={{borderRadius: '10px'}}/>
        </main>

    );
};



export default Main;