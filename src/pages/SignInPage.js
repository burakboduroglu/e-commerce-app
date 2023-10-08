import React from "react";
import { useNavigate } from "react-router-dom";
import { NavbarWithMegaMenu } from "../components/Header";

export default function SingInPage() {
	const navigate = useNavigate();
	return (
		<div className="mt-3">
			<NavbarWithMegaMenu />	
			<div className="login-form">
				<form>
					<h1>Login</h1>
					<div className="content">
						<div className="input-field">
							<input type="email" placeholder="Email" autocomplete="nope" required />
						</div>
						<div className="input-field">
							<input type="password" placeholder="Password" autocomplete="new-password" required />
						</div>
						<a href="#" className="link">
							Forgot Your Password?
						</a>
					</div>
					<div className="action">
						<button onClick={() => {navigate("/signup")}}>Register</button>
						<button>Sign in</button>
					</div>
				</form>
			</div>
		</div>	
	);
}
