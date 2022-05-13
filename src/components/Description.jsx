import React from "react";
import Grid from '@mui/material/Grid';
export default function Description(){
    return(
        <div className="section2">
            <p className="OurServices">Our service is designed for</p>
            <div className="stripe"></div>
        <div className="HeaderDesc">

           <h1>Who is our service helpful for?</h1>
           <p>COINLESS benefits everyone in the ecosystem</p>
           <Grid container spacing={2} sx={{
                color:'white',
                position:'relative',
            }}>
                <Grid item xs={3}>
                    <ul>

                    </ul>
                </Grid>
                <Grid item xs={3}>
                    <ul>
                        
                    </ul>
                </Grid>
                <ul>
                        
                    </ul>
                <Grid item xs={3}>

                </Grid>
            </Grid>
        </div>
        </div>
    );
}