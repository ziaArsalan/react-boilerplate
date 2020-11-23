import React from 'react'
import Header from '../../components/Header'
import { ColorScheme } from '../../enums'
import CustomizedInput from '../../components/CutomTextField'
import CustomButton from '../../components/CustomButton'

function SignUp() {
    return (
        <div id="SignUp">
            <Header />
            <div className="ml-md-219 ml-xs-20 mr-xs-20">
                <div className="row">
                    <div className="col-lg-6">
                        <form className="signup-form">
                            <div className="main-heading color-text">Welcome to Walletly</div>
                            <div className="content mt-10 color-subText">
                                Find your people. Engage your customers. Build your brand.
                                Do it all with Walletly. Already have a account? Log in
                            </div>

                            <div className="container px-0 mt-8">
                                <div className="row">
                                    <div className="col-md-6 pr-md-8">
                                        <CustomizedInput 
                                            className="w-100 mt-30"
                                            id="firstname"
                                            label="First name"
                                            name="firstname"
                                            autoComplete="firstname"
                                            required
                                            autoFocus
                                        />
                                    </div>
                                    <div className="col-md-6 pl-md-8">
                                        <CustomizedInput 
                                            className="w-100 mt-30"
                                            id="firstname"
                                            label="First name"
                                            name="firstname"
                                            autoComplete="firstname"
                                            required
                                            autoFocus
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="container px-0">
                                <div className="row">
                                    <div className="col">
                                        <CustomizedInput 
                                            className="w-100 mt-30"
                                            id="firstname"
                                            label="First name"
                                            name="firstname"
                                            autoComplete="firstname"
                                            required
                                            autoFocus
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="container px-0">
                                <div className="row">
                                    <div className="col">
                                        <CustomizedInput 
                                            className="w-100 mt-30"
                                            id="firstname"
                                            label="Password"
                                            name="firstname"
                                            autoComplete="firstname"
                                            required
                                            autoFocus
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="container side-menu px-0 mt-30">
                                <div className="row">
                                    <div className="col-md-5 opacity-5 color-text">
                                        • One lowercase character<br/>
                                        • One uppercase character<br/>
                                        • One number
                                    </div>
                                    <div className="col-md-5 opacity-5 color-text">
                                        • One special character<br/>
                                        • 8 characters minimum
                                    </div>
                                </div>
                            </div>

                            <CustomButton 
                                className="w-100 mt-40 mb-60"
                                color={ ColorScheme.ColorSchemeCode.signupBtn }
                                btnText="Signup"
                            />
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
