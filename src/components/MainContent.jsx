import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Timka from '../styles/timka.png';
export default function MainContent(){
    return(
        
            <Box sx={{
                height:'700px',
                
                position:'relative',
            }}>
            <Grid container spacing={0} sx={{
                color:'white',
                position:'relative',
            }}>
                <Grid item xs={6}>
                    <div className="mainItemsRight">
                    <h1>Cash-free tips platform</h1>
                    <p>You provide great service, we provide the means of getting rewarded for it</p>
                    <ul className="buttonsUL">
                        <div className="buttonBox1">
                    <li>Connect my business</li>
                    </div>
                    <div className="buttonBox2">
                    <li>Leave a tip</li>
                    </div>
                    </ul>
                    </div>
                </Grid>
                <Grid item xs={6}>
                <img src={Timka} alt="Timka"  className="timka"></img>
                </Grid>
            </Grid>
            </Box>
        
    );
}