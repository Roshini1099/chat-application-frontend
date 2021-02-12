import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
const Register = () => {
	return (
		<div className="container my-5">
			<div className="row">
				<div className="col-md-6 my-5 offset-md-3">
					<div className="card shadow p-5">
						<form>
							<h3 className="text-center text-uppercase mb-4">
								Login
							</h3>
							<hr></hr>
							<div className="form-group">
								<label>Email</label>
								<input
									type="email"
									placeholder="Email"
									class="form-control"
								></input>
							</div>
							<label for="Password">Password</label>
							<div className="input-group mb-3">
								<input
									type="password"
									name="password"
									id="password"
									class="form-control"
									placeholder="Enter Password"
									aria-label="Enter Password"
								></input>
							</div>

							<div className="mx-auto text-center">
								<button className="btn btn-secondary">
									Login
								</button>
							</div>
							<p className="mt-4">
								Don't have an account?
								<Link to="/"> Register</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
