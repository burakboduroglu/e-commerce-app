import { Button } from '@material-tailwind/react';
import React from 'react'
import { useNavigate } from "react-router-dom";
import { NavbarWithMegaMenu } from "../components/Header";
import Footer from "../components/Footer";

export default function SignUpPage() {
    const navigate = useNavigate();
    return (
        <div className='mt-3'>
            <NavbarWithMegaMenu />	
            <div className='flex justify-center mt-3 mb-3'>
                <div className="wrapper">
                    <h2>Registration</h2>
                    <form action="#">
                        <div className="input-box">
                            <input type="text" placeholder="Name & Surname" required />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Email" required />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Address" required />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Phone" required />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Confirm password" required />
                        </div>
                        
                        <div className="policy">
                            <input type="checkbox" />
                            <h3>I accept all terms & condition</h3>
                        </div>
                        <div className="input-box button">
                            <input type="Submit" value="Register Now" onClick={() => {navigate('/')}} />
                        </div>
                        <div className="text">
                            <h3>
                                Already have an account? <Button className="p-2 ml-2 bg-cyan-900" onClick={() => {navigate('/signin')}}>Login Now</Button>
                            </h3>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container m-auto mt-3 tile col-span-3 md:col-span-5 lg:col-span-8">
				<div className="mt-3">
					<Footer />
				</div>
			</div>
        </div>
  )
}
