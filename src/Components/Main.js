import React from 'react';
import Bruchetta from "/Users/sumersinghkang/Desktop/Final Project/littleleomon/src/Asset/restauranfood.jpg"
import {Link} from 'react-router-dom';
const Main = () => {
    return (
        <main>
            <div class="textMain">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean <br></br>restaurant,focused on traditional recipes <br></br>served with a modern twist.</p>
            <button className='button-yellow'> <Link to="/booking" className='link'>Reserve a Table </Link></button>
            </div>
            <img id='mainPic' src={Bruchetta} alt="Bruchetta" width= '430px' height= '440px' style={{borderRadius: '10px', margin:'1rem', border:'2px solid #000', objectFit:'cover'}}/>
        </main>

    );
};

/*position:'absolute', top:'20px', left:'900px',*/

export default Main;