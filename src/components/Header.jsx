    import React from "react";
    
    import Grid from '@mui/material/Grid';
    import Paper from '@mui/material/Paper';
    import MainLogo from '../styles/mainLogo.png';
    import MButton from '@mui/material/Button';
    export default function Header(){
        return(
            <div className="mainBox">
{/* 
                <div className="ulElems">
                
                <ul className="LeftSideMenu">
                    <li className="TextUl">Benefits</li>
                    <li className="TextUl">How it Works</li>
                    <li className="TextUl">Contacts</li>
                </ul>
                    <ul>
                    <li className="LogoPosition"><img src={MainLogo} alt="Logo"  className="Logo"/></li>
                    </ul>
                    <ul className="RightSideMenu"> */}
                    {/* <li><MButton
                        sx={{
                            position:'absolute',

                        }}
                    >Login</MButton></li> */}
                    {/* <li className="TextUlRight">Tel:+49 1234 56</li>
                    <li className="TextUlRight">FR</li>
                </ul>
                 */}
                {/* </div> */}
                <Grid container spacing={1} sx={{
                    color:'white',
                    fontSize:'25px',
                    fontWeight:'300',
                    width:'100%',
                    justifyContent:'center',
                    textAlign:'center',

                    
                }}>
                    <Grid item xs={4} sx={{}}>
                    <ul className="UlProps">
                        <li>Benefits</li>
                        <li>How it works</li>
                        <li>Contacts</li>

                    </ul>
                    </Grid>
                    <Grid item xs={4} sx={{
                        paddingTop:'2px',
                    }}>
                    <img src={MainLogo} alt="Logo"  className="Logo"/>
                    </Grid>
                    <Grid item xs={4} sx={{
                        
                        
                    }}>
                    <ul className="UlRight">
                        <li>Tel:+49 1234 56</li>
                        <li><div className="LoginButton">
                            
                            

                        Login</div></li>
                        <li>FR</li>
                    </ul>
                    </Grid>
                </Grid>
            </div>
        );
    }
