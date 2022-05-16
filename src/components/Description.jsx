import React from "react";
import Grid from '@mui/material/Grid';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

//pics

import Guests from '../styles/images/guests.png';
import Staff from '../styles/images/staff.png';
import Owners from '../styles/images/owners.png';


export default function Description(){
    return(
        <div className="section2">
            
            <p className="OurServices">Our service is designed for</p>
            <div className="stripe" id="Benefits">
                <ul className="stripeContent">
                    <li>Bars</li>
                    <li>Restaurants</li>
                    <li>Hotels</li>
                    <li>Barbershops</li>
                    <li>Parking</li>
                    <li>Bars</li>
                    <li>Restaurants</li>
                    <li>Barbershops</li>
                    

                </ul>
            </div>
        <div className="HeaderDesc">
            <div className="HeaderSubheader" >
           <h1>Who is our service helpful for?</h1>
           <p>COINLESS benefits everyone in the ecosystem</p>
           </div>
           <Element name="DescriptionSection" id="DescriptionSection">
           <Grid container spacing={15} sx={{
                color:'white',
                position:'relative',
                paddingTop:'5%',
               
                
            }}>
                <Grid item xs={4}>
                    <ul className="UlProperties" >
                    <img src={Guests} alt="Guests"  className="images" id="Guests"/>
                    <li className="LiH1Props">Guests</li>
                    <li className="descriptionsP">Easy and registration-free way to show gratitude by leaving a tip and rate your experience</li>
                    <li className="descriptionsP">Contactless tipping method</li>
                    </ul>
                </Grid>
                <Grid item xs={4}>
                    <ul className="UlProperties">
                    <img src={Staff} alt="Staff"  className="images" id="Staff"/>
                    <li className="LiH1Props">Staff</li>
                    <li className="descriptionsP">Increases average amount and frequency of tips from guests</li>
                    <li className="descriptionsP">Allows to withdraw tips any day</li>
                    </ul>
                </Grid>
               
                <Grid item xs={4}>
                    <ul className="UlProperties">
                    <img src={Owners} alt="Owners"  className="images" id="Owners"/>
                    <li className="LiH1Props">Owners</li>
                    <li className="descriptionsP">Helps to evaluate business performance in real-time by providing insights from guests</li>
                    <li className="descriptionsP">Free and easy-to-use tool which our specialists will set up for you</li>
                    </ul>
                </Grid>
            </Grid>
            </Element>
        </div>
        </div>
    );
}