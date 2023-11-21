import React from "react";
import trust from '../../Components/images/trust.png';
import home from '../../Components/images/home.png';
import money from '../../Components/images/money.png';
import clock from '../../Components/images/clock.png';

export function Service({ id }) {
  return (
    <div id={id} className="thirdpage-main">
      <div className="thirdpage-content1">
        <p>Our Features</p>
        <h6>Why Choose Us?</h6>
      </div>
      <div className='thirdpage-content2'>
        <ImageTopCard
          imageUrl={trust}
          title="Trusted by Thousands"
          description="Users have had positive experiences,
                        found what they were looking for, and 
                        had a smooth process from booking to check-out.
                        Look for reviews and testimonials to get feel for
                        other user's experiences."
          linkTo="trusted"
        />
        <ImageTopCard
          imageUrl={home}
          title="Wide Range of Properties"
          description="Our website is like having a buffet of options—choose
                        what suits your taste, budget, and style! It's a
                        one-stop-shop for all you accommodation needs."
          linkTo="properties"
        />
        <ImageTopCard
          imageUrl={money}
          title="Finance Made Easy"
          description="A rental website that simplifies finances is a game-changer.
                        Our website makes budgeting a breeze, giving you more time and peace 
                        of mind"
          linkTo="finance"
        />
        <ImageTopCard
          imageUrl={clock}
          title="Life Time Assistance"
          description="A rental dormitory website with lifetime assistance is like having 
                        a dependable roommate for all your accommodation needs—support that lasts
                        from move-in to move-out, making your stay hassle-free."
          linkTo="assistance"
        />
      </div>
    </div>
  );
}

export const ImageTopCard = ({ imageUrl, title, description }) => {
  return (
    <div className="image-top-card">
      <div className="image-container">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card3-content">
        <h2 className="card3-title">{title}</h2>
        <p className="card3-description">{description}</p>
      </div>
    </div>
  );
};
