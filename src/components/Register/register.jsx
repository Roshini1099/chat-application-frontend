import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './register.css';
const Register = () => {
	return (
		<div className="container my-5">
			<div className="row">
				<div className="col-md-6 my-5 offset-md-3">
					<div className="card shadow p-5">
						<form>
							<h3 className="text-center text-uppercase mb-4">
								Register
							</h3>
							<hr></hr>
							<div className="form-group">
								<label>Name</label>
								<input
									type="name"
									placeholder="Enter name"
									class="form-control"
								></input>
							</div>
							<label for="name">Email</label>
							<div className="input-group mb-3">
								<input
									type="email"
									name="email"
									class="form-control"
									placeholder="Enter email"
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
							<label for="cf_password">Confirm Password</label>
							<div className="input-group mb-3">
								<input
									type="password"
									name="password"
									id="password"
									class="form-control"
									placeholder="Confirm Password"
									aria-label="Confirm Password"
								></input>
							</div>

							<div className="mx-auto text-center">
								<Button>Register</Button>
							</div>
							<p className="mt-4">
								Don't have an account?
								<Link to="/login"> Login</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
