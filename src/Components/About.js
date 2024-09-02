import React from 'react';
import Header from './Header';
import PicA from "/Users/sumersinghkang/Desktop/Final Project/littleleomon/src/Asset/restaurant chef B.jpg";
import PicB from "/Users/sumersinghkang/Desktop/Final Project/littleleomon/src/Asset/Mario and Adrian b.jpg";
const About = () => {
    return (
        <>
        <div className="about">
        <div class="textMain">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, <br></br>focused on traditional recipes <br></br> served with a modern twist. <br></br>We are a family owned Mediterranean restaurant, <br></br> focused on traditional recipes <br></br>served with a modern twist.</p>

           </div>
           <div className="image-container">
                <img src={PicA} alt="Image 1" className="image-base" width= '430px' height= '440px' style={{margin:'1rem', border:'3px solid #000'}}/>
                <img src={PicB} alt="Image 2" className="image-overlay" width= '430px' height= '440px' style={{margin:'1rem', border:'3px solid #000'}}/>
            </div>
            </div>
        </>
    );
};

export default About;

/* <img id='mainPic' src={Bruchetta} alt="Bruchetta" width= '430px' height= '440px' style={{borderRadius: '10px', margin:'1rem', border:'2px solid #000'}}/>*/