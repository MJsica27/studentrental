import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import TimeToLeaveOutlinedIcon from '@mui/icons-material/TimeToLeaveOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import RestaurantMenuSharpIcon from '@mui/icons-material/RestaurantMenuSharp';
import TvIcon from '@mui/icons-material/Tv';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import BalconyOutlinedIcon from '@mui/icons-material/BalconyOutlined';
import StarIcon from '@mui/icons-material/Star';
// import { deepOrange, deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

import "./pagedetails.css"
export function PictureDetails(){
    return(
        <section className="imageSection">
            <div className="imagesContainer">
                <div className="leftImageContainer">
                    <img src="./pic1.jpg" alt="Large" className="largeImage" />
                </div>
                <div className="rightImageGrid">
                    <img src="./pic2.jpg" alt="Small" className="smallImage" />
                    <img src="./pic2.jpg" alt="Small" className="smallImage" />
                    <img src="./pic2.jpg" alt="Small" className="smallImage" />
                    <img src="./pic2.jpg" alt="Small" className="smallImage" />
                </div>
                <div className="imageInfo">
                    <div className="title">
                        <h2>Well Furnished Apartment</h2>
                        <p>Labangon, Tisa, Cebu City</p> 
                    </div>
                    
                    <div className="icons">
                        <FavoriteBorderIcon fontSize="large"/>
                        <ShareIcon fontSize="large"/>
                    </div>
                    <div className="cards-container">
                    <Card>
                        <CardContent className="cards">
                        <BedOutlinedIcon />
                            <Typography variant="body2" component="div">
                                3 Bedrooms
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="cards">
                            <BathtubOutlinedIcon />
                            <Typography variant="body2" component="div">
                                2 Bathrooms
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="cards">
                            <TimeToLeaveOutlinedIcon />
                            <Typography variant="body2" component="div">
                                3 Cars / 2 Bikes
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="cards">
                            <PetsOutlinedIcon />
                            <Typography variant="body2" component="div">
                                0 Pets Allowed
                            </Typography>
                        </CardContent>
                    </Card>
                    </div>

                    <div className="description">
                        <h2>Apartment Description</h2>
                        <p style={{ textAlign: 'justify' }}>The apartment consists of a large bright bedroom with a comfy king-sized bed, a modern fully-equipped kitchen and a sunlit living room with Apple TV and free Netflix account. 
                            It is the perfect place to stay for couples looking for a romantic location in the historic centre, within walking distance of some of the most beautiful sceneries you can 
                            find in the city and all famous landmarks. The sofa in the living room can also serve as an additional bed for a 3rd guest. 
                            Located in a side street between the ___ river bank and the leafy ___ hill park, the apartment is very quiet at night. 
                            Please note, my apartment is on the 3rd floor with no elevator. I am more than happy to help you with your luggage!</p> 
                    </div>

                    <div className="amenities-container"> 
                        <h2>Offered Amenities</h2>
                        <div className="amenity">
                            <RestaurantMenuSharpIcon fontSize="medium" />
                            <Typography variant="body2" component="div" >
                                Kitchen
                            </Typography>
                            <TvIcon fontSize="medium" />
                            <Typography variant="body2" component="div">
                                Television with Netflix
                            </Typography>
                            <AcUnitIcon fontSize="medium"/>
                            <Typography variant="body2" component="div">
                                Air Conditioner
                            </Typography>
                            <WifiIcon fontSize="medium"/>
                            <Typography variant="body2" component="div">
                                Free Wireless Internet
                            </Typography>
                            <LocalLaundryServiceOutlinedIcon fontSize="medium"/>
                            <Typography variant="body2" component="div">
                                Washer
                            </Typography>
                            <BalconyOutlinedIcon fontSize="medium"/>
                            <Typography variant="body2" component="div">
                                Balcony or Patio
                            </Typography>     
                        </div>
                        <div className="button-amenity">
                        <Stack spacing={2} direction="row">
                            <Button variant="outlined" sx={{ color: 'orange', borderColor: 'orange'}}>Outlined</Button>
                        </Stack>
                        </div>
                        <h2>Safety and Hygiene</h2>
                        <div className="amenity">
                            <img src= './health.svg' alt="health kit" />
                            <p >
                                Daily Cleaning
                            </p>
                            <img src= './health.svg' alt="health kit" />
                            <p>
                                Fire Extinguishers
                            </p>
                            <img src= './health.svg' alt="health kit" />
                            <p>
                                Disinfections and Sterilizations
                            </p>
                            <img src= './health.svg' alt="health kit" />
                            <p>
                                Smoke Detectors
                            </p>   
                        </div>
                    </div>

                    <div className="reviews-container">
                        <div className="review-rate">
                            <h2 style={{ marginRight: '20px' }}>Reviews</h2>
                            <StarIcon style={{ marginRight: '20px' }}/>
                            <h2>5.0</h2>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', border: '1px solid #000'}}>
                            <p>Amenities</p>
                            <div className="rectangle1"></div>
                            <p style={{ margin: '0 30px' }}>5.0</p>
                            <p>Hygiene</p>
                            <div className="rectangle2"></div>
                            <p style={{ margin: '0 30px' }}>5.0</p>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', border: '1px solid #000'}}>
                            <p>Communication</p>
                            <div className="rectangle3"></div>
                            <p style={{ margin: '0 30px' }}>5.0</p>
                            <p>Value for Money</p>
                            <div className="rectangle4"></div>
                            <p style={{ margin: '0 30px' }}>5.0</p>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', border: '1px solid #000'}}>
                            <p>Location of Property</p>
                            <div className="rectangle5"></div>
                            <p style={{ margin: '0 20px' }}>5.0</p>
                        </div>

                        <div className="person-review">
                            <div className="person1">
                                <Stack direction="row" spacing={1} alignItems="center">
                                {/* Avatar */}
                                <Avatar>H</Avatar>

                                {/* Heading and Date */}
                                <Stack direction="column" spacing={0}>
                                    <Typography variant="h5">John Doeberman</Typography>
                                    <Typography variant="body1">November 1, 2023</Typography>
                                </Stack>
                                </Stack>
                            </div>
                            </div>      
                    </div>

                    
                </div> 

                <div className="parent-card-container">
                    <div className="card-container">
                        <Card className="custom-card" elevation={3}>
                            <CardContent>
                            <Typography variant="h5" component="div" style={{ fontSize: '22px', marginLeft: '20px'}}>
                                ₱ 5,000 - 10,000
                            </Typography>
                            <Divider style={{ width: '90%', margin: '10px auto' }} />
                            <div style={{ marginBottom: '25px', marginTop: '25px', marginLeft: '20px' }}> 
                                <Typography variant="body2" component="div" style={{ marginBottom: '8px', fontSize: '16px' }}>
                                    Short Period: ₱5,000      
                                </Typography>
                                <Typography variant="body2" component="div" style={{ marginBottom: '8px', fontSize: '16px' }}>
                                    Medium Period: ₱7,500
                                </Typography>
                                <Typography variant="body2" component="div" style={{ marginBottom: '8px', fontSize: '16px', fontFamily: 'Montserrat' }}>
                                    Long Period: ₱10,000
                                </Typography>
                            </div>
                            <div style={{ marginBottom: '25px', marginTop: '25px' }}>
                                <Button Button variant="contained" component={Link} to="/reservation" sx={{ backgroundColor: '#F28500', '&:hover': {backgroundColor: '#FFA733'}}} style={{ height: '60px', borderRadius: '30px', width: '90%', margin: '20px auto', marginLeft: '20px'}}> {/* Add Button inside the Card */}
                                    Book now
                                </Button>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{ width: '25px' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                </svg>
                                <p style={{ marginLeft: '8px', marginRight: '8px' }}>Property Inquiry</p>
                                <PhoneRoundedIcon />
                                <p style={{ marginLeft: '8px' }}>Call Owner</p>
                            </div>

                            </CardContent>
                        </Card>
                    </div>
                    
                </div>

                

                
            </div>
            
        </section>
    );
}