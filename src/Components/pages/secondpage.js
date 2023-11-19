import "./pagestyle.css";
import React, { useState } from 'react';
import apart1 from 'C:/Users/Chin/Desktop/app/src/Components/images/apartment.png';
import apart2 from 'C:/Users/Chin/Desktop/app/src/Components/images/aparment2.png';
import apart3 from 'C:/Users/Chin/Desktop/app/src/Components/images/apartment3.png';
import apart4 from 'C:/Users/Chin/Desktop/app/src/Components/images/apartment4.png';
import apart5 from 'C:/Users/Chin/Desktop/app/src/Components/images/aparment5.png';
import apart6 from 'C:/Users/Chin/Desktop/app/src/Components/images/aparment6.png';
import place1 from 'C:/Users/Chin/Desktop/app/src/Components/images/place1.png';
import place2 from 'C:/Users/Chin/Desktop/app/src/Components/images/place2.png';
import place3 from 'C:/Users/Chin/Desktop/app/src/Components/images/place3.png';
import place4 from 'C:/Users/Chin/Desktop/app/src/Components/images/place4.png';
import place5 from 'C:/Users/Chin/Desktop/app/src/Components/images/place5.jpg';

// import { FaLocationDot } from 'react-icons/fa';


 export function SecondPage() {
  return (
    <div className="secondpage-main">
    <div className="secondpage-content1">
      <p>Our Properties</p>
      <h6>Our Featured Properties</h6>
    </div>
    <div className="secondpage-content2">
      <CustomCard
          title="Tribble Story Dorm"
          price="₱35,000.00/Month"
          imageUrl={apart1}
          location=" "
          bed=" "
          bath=""
        />
        <CustomCard
          title="Brand New Apartment"
          price="₱35,000.00/Month"
          imageUrl={apart2}
          location=" "
          bed=" "
          bath=""
        />
        <CustomCard
          title="Luxurious Villa Room"
          price="₱35,000.00/Month"
          imageUrl={apart3}
          location=" "
          bed=" "
          bath=""
       />
        <CustomCard
          title="Diamond Manco Apartment"
          price="₱35,000.00/Month"
          imageUrl={apart4}
          location=" "
          bed=" "
          bath=""
        />
        <CustomCard
          title="Affordable Green House"
          price="₱35,000.00/Month"
          imageUrl={apart5}
          location=" "
          bed=" "
          bath=""
        />
        <CustomCard
          title="Spaceios 2 Story Bunglow"
          price="₱35,000.00/Month"
          imageUrl={apart6}
          location=" "
          bed=" "
          bath=""
        />
      </div>
      <div className="secondpage-content3">
        <p>More</p>
        <h6>More Choices For You</h6>
      </div>
      <div className="secondpage-content3">
        <Place imageUrl={place2} location="Labangon" containerStyle={{ width: '400px', height: '300px' }} />
        <Place imageUrl={place1} location="Tisa" containerStyle={{ width: '800px', height: '300px' }} />
        <Place imageUrl={place5} location="Banawa" containerStyle={{ width: '400px', height: '300px' }} />
        <Place imageUrl={place3} location="Colon" containerStyle={{ width: '400px', height: '300px' }} />
        <Place imageUrl={place4} location="Carbon" containerStyle={{ width: '400px', height: '300px' }} />
      </div>
    </div>
  );
}

  export const CustomCard = ({ title, price, location, bed, bath, imageUrl }) => {
    return (
      <div className="card">
        <div className="card-image-container">
          <img src={imageUrl} alt={title} className="card-image" />
        </div>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-price">{price}</p>
          {/* <FaLocationDot /> */}
          <p className="card-location">{location}</p>
          <p className="card-bed">{bed}</p>
          <p className="card-bath">{bath}</p>
        </div>
      </div>
    );
  };

  export const Place = ({ imageUrl, location, containerStyle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="place-container"
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageUrl} alt={location} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      {isHovered && <div className="caption">{location}</div>}
    </div>
  );
};

  
