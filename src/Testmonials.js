import React from 'react';
import Bruchetta from "/Users/sumersinghkang/Desktop/Final Project/littleleomon/src/restauranfood.jpg"
import Salad from '/Users/sumersinghkang/Desktop/Final Project/littleleomon/src/greek salad.jpg';
import Bruchet from '/Users/sumersinghkang/Desktop/Final Project/littleleomon/src/bruchetta.svg';
import Des from '/Users/sumersinghkang/Desktop/Final Project/littleleomon/src/lemon dessert.jpg';


const Testmonials = () => {
    return (
        <>
        <div className='whole-test'>
        <h1 className='test-tag'>Testimonials</h1>
            <div className="testimonials-container">
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <div className="rating">Rating</div>
          <div className='img-review'>
          <img src={Salad} alt="salad" width='150px' height='150px' style={{objectFit:'cover', border:'2px solid #000'}}/>
          <p>The pasta was cooked to perfection, with a rich sauce that burst with flavor. I could eat this every day!</p>
          </div>
          <div className="stars">Stars</div>
        </div>
        <div className="testimonial-card">
          <div className="rating">Rating</div>
          <div className='img-review'>
          <img src={Salad} alt="salad" width='150px' height='150px' style={{objectFit:'cover', border:'2px solid #000'}}/>
          <p>The burger looked great, but it was dry and lacked seasoning. I expected more from this place.</p>
          </div>
          <div className="stars">Stars</div>
        </div>
        <div className="testimonial-card">
          <div className="rating">Rating</div>
          <div className='img-review'>
          <img src={Bruchet} alt="bruchet" width='150px' height='150px' style={{objectFit:'cover', border:'2px solid #000'}}/>
          <p>The sushi was incredible! Fresh ingredients and unique combinations made every bite a delightful surprise</p>
          </div>
          <div className="stars">Stars</div>
        </div>
        <div className="testimonial-card">
          <div className="rating">Rating</div>
          <div className='img-review'>
          <img src={Des} alt="des" width='150px' height='150px' style={{objectFit:'cover', border:'2px solid #000'}}/>
          <p>The mac and cheese was creamy and comforting, just like my grandma used to make. A true comfort food that hits the spot!</p>
          </div>
          <div className="stars">Stars</div>
        </div>
      </div>
    </div>
    </div>
        </>
    );
};

export default Testmonials;