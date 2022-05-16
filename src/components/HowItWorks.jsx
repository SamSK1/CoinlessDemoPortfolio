import React from "react";
import Grid from '@mui/material/Grid';

import qrCode from '../styles/images/qrCode.png';
import phone from '../styles/images/phone.png';
import screens from '../styles/images/screens.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function HowItWorks(){
    return(
        <div className="HowItWorks" id="HowItWorks">
            <h1 >How it works</h1>
            <div className="threeImages">
            <Grid container spacing={10} sx={{
                alignContent:'center',
                alignItems:'center',
                justifyContent:'center',
                
                
            }}>
                <Grid item xs={4} sx={{
                    
                }}>
                <img src={qrCode} alt="qrCode"  className="Img1" />
                <div className="text">Guests scan the staff members QR code</div>
                </Grid>
                {/* <ArrowForwardIosIcon></ArrowForwardIosIcon> */}
                <Grid item xs={4} sx={{

                }}>
                <img src={phone} alt="Staff" className="Img2"  />
                <div className="text">Guests choose the amount to be tipped to the staff member and rate their experience</div>
                </Grid>
                {/* <ArrowForwardIosIcon></ArrowForwardIosIcon> */}
                <Grid item xs={4}
                    sx={{
                       
                    }}
                >
                <div className="GridItem3">
                <img src={screens} alt="Staff" className="Img3"  />
                <div className="text" id="text3">Tips and reviews appear in staff member’s and owner’s accounts</div>
                </div>
                </Grid>
                </Grid>
                </div> 
        </div>
    );
}