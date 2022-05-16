    import React , {useRef} from "react";
    import Scroll from 'react-scroll';
    import Grid from '@mui/material/Grid';
    import Paper from '@mui/material/Paper';
    import { Link, DirectLink, Element, Events, animateScroll} from 'react-scroll';
    import MainLogo from '../styles/images/mainLogo.png';
    
    import MButton from '@mui/material/Button';
    export default function Header(){
      
        return(
            <div className="mainBox">

                <Grid container spacing={1} sx={{
                    color:'white',
                    fontSize:'125%',
                    fontWeight:'300',
                    width:'100%',
                    justifyContent:'center',
                    textAlign:'center',

                    
                }}>
                    <Grid item xs={4} sx={{}}>
                    <ul className="UlProps">
                        <li><Link to="Benefits" spy={true} smooth={true}  duration={1500} >Benefits</Link></li>
                        {/* Benefits */}
                        <li><Link to="HowItWorks" spy={true} smooth={true}  duration={1500} >How it works</Link></li>
                        <li><Link to="ContactsPart" spy={true} smooth={true}  duration={1500} >Contacts</Link></li>

                    </ul>
                    </Grid>
                    <Grid item xs={4} sx={{

                    }}>
                    <img src={MainLogo} alt="Logo"  className="Logo"/>
                    </Grid>
                    <Grid item xs={4} sx={{
                        
                        
                    }}>
                    <ul className="UlRight">
                        <li>Tel:+49 1234 56</li>
                        <li><div className="LoginButton">
                            Login
                        </div></li>
                        <li>FR</li>
                    </ul>
                    </Grid>
                </Grid>
            </div>
        );
    }
