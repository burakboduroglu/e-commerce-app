import React from 'react'

export default function SignUpPage() {
  return (
    <div className='flex justify-center mt-3'>
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
                        <input type="Submit" value="Register Now" />
                    </div>
                    <div className="text">
                        <h3>Already have an account? <a href="#">Login now</a></h3>
                    </div>
                </form>
            </div>
    </div>
  )
}
