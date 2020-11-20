import React from 'react'
import '../../global.scss'
import { ThemeProvider, makeStyles, Typography, Container, TextField, Grid, Link, Box, Button, createMuiTheme } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <div id="login-page">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6" id="div1">
                        <br/>
                        
                        <div class="row">
                            <img id="logo" src="/images/walletlyLogo.png" /><h3>Walletly</h3>
                        </div>
                        <br/><br/>
                        <h1 id="login-h1">Log In</h1>
                        <Box id="box1" mt={8} >
                            <Typography variant="body2" color="textSecondary" align="center">
                                {"Need a walletly agency account? "}
                                <Link color="primary" href="#">
                                    Create an account
                                </Link>
                            </Typography>
                        </Box>
                        <br/>
                        <TextField
                            className="my-4"
                            id="email"
                            label="Email Address"
                            variant="outlined"
                            margin="normal"
                            required
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <br/>
                        <TextField
                            className="my-4"
                            id="password"
                            label="Password"
                            variant="outlined"
                            margin="normal"
                            required
                            name="password"
                            autoFocus
                        />
                        <br/><br/>
                        <Button
                            id="btn"    
                            type="submit"
                        >
                            Log In
                        </Button>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <Box mt={8} >
                            <Typography variant="body2" color="textSecondary" align="center">
                                {"® 2020 Walletly Business, All rights reserved. "}
                                <Link color="primary" href="#">
                                    Terms of Service
                                </Link>
                                {" and "}
                                <Link color="primary" href="#">
                                    Privacy Policy
                                </Link>
                            </Typography>
                        </Box>
                    </div>

                    <div class="col-lg-6" id="div2">
                        <center>
                        <img id="frame1" src="/images/Group1.png"/>
                        {/* <img id="frame1" src="/images/Frame 1.png"/> */}
                        <br/>
                        <img id="shadow" src="/images/Group.png"/>
                        <h4>Build awesome business for your customers</h4>
                        <p>Connect your customers with a mobile wallet experience they'll remember—and come back for. Start your own Loyalty Platform.</p>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
