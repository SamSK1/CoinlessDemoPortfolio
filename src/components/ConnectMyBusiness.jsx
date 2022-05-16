import React from "react";
import TextField from '@mui/material/TextField';


export default function ConnectMyBusiness(){
    return(
        <div className="CMBSection">
            <h1 className="connectmybusiness">Connect my business</h1>
            <p className="pleaseP">Please fill in the form below if you wish to connect your business. Our specialist will contact you and set everything up absolutely hassle-free for you!</p>
            <div>
                <ul className="ULForms">
                    <li>
                    <li className="formHeaders">Email</li>
                <TextField placeholder="Email"  sx={{
                    backgroundColor:'white',
                    borderRadius:'15px',
                    width:'700px',

                    
                }}></TextField>
                </li>
                <li>
                <li className="formHeaders">Full Name</li>
                <TextField placeholder="Full Name"  sx={{
                    backgroundColor:'white',
                    borderRadius:'15px',
                    width:'700px',

                    
                }}></TextField>
                </li>
                <li>
                <li className="formHeaders">Phone</li>
                <TextField placeholder="Phone"  sx={{
                    backgroundColor:'white',
                    borderRadius:'15px',
                    width:'700px',

                    
                }}>Phone</TextField>
                </li>
                <li>
                <li className="formHeaders">Job title</li>
                <TextField placeholder="Job title"  sx={{
                    backgroundColor:'white',
                    borderRadius:'15px',
                    width:'700px',

                    
                }}></TextField>
                </li>
                </ul>
                
                <div className="ConnectMeButton">Connect me</div>
            </div>
        </div>
    );
}