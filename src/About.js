import React from 'react';
import Bruchetta from "/Users/sumersinghkang/Desktop/Final Project/littleleomon/src/restauranfood.jpg"
const About = () => {
    return (
        <>
        <div className="about">
        <div class="textMain">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, <br></br>focused on traditional recipes served with a modern twist. <br></br>We are a family owned Mediterranean restaurant, <br></br> focused on traditional recipes served with a modern twist.</p>

            </div>
            <img id='mainPic' src={Bruchetta} alt="Bruchetta" width= '430px' height= '440px' style={{borderRadius: '10px', margin:'1rem', border:'2px solid #000'}}/>
            </div>
        </>
    );
};

export default About;