import React from 'react';
import FootPic from "/Users/sumersinghkang/Desktop/Final Project/littleleomon/src/LitLemonLogo.png";

const Footer = () => {
    return (
        <>
        <div className="container-foot">
      <div className="image-column-foot">
        <img src={FootPic} alt="Image"  style={{marginLeft:'10rem'}}/>
      </div>
      <div className="text-column">
        <ul style={{listStyleType: 'none'}}>
          <li style={{fontWeight: 'bold'}}>Doormat</li>
          <br></br>
          <li>Navigation</li>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="text-column">
        <ul style={{listStyleType: 'none'}}>
          <li style={{fontWeight:'bold'}}>Contact</li>
          <br></br>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </div>
      <div className="text-column">
            <ul style={{listStyleType: 'none'}}>
                <li style={{fontWeight: 'bold'}}>Social Media Links</li>
                <br></br>
                <li>Insta</li>
                <li>Snap</li>
            </ul>
      </div>
    </div>
        <footer>
            <p>&copy; 2024 Little Lemon. All rights reserved.</p>
        </footer>

        </>
    );
};

export default Footer;