import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../actions';
import './register.css';
const Register = (props) => {
	const [user, setUser] = useState({
		userName: '',
		emailId: '',
		password: '',
	});
	const [submitted, setSubmitted] = useState(false);
	const registering = useSelector((state) => state.registration.registering);
	const dispatch = useDispatch();

	function handleChange(e) {
		const { name, value } = e.target;
		setUser((user) => ({ ...user, [name]: value }));
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(user.emailId);
		setSubmitted(true);
		if (user.emailId && user.userName && user.password) {
			dispatch(userActions.register(user));
		}
		props.history.push('/login');
	}

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
									type="text"
									name="userName"
									placeholder="Enter name"
									class="form-control"
									value={user.userName}
									onChange={handleChange}
									className={
										'form-control' +
										(submitted && !user.userName
											? ' is-invalid'
											: '')
									}
								></input>
								{submitted && !user.userName && (
									<div className="invalid-feedback">
										Username is required
									</div>
								)}
							</div>
							<label for="name">Email</label>
							<div className="input-group mb-3">
								<input
									type="email"
									name="emailId"
									class="form-control"
									placeholder="Enter email"
									value={user.emailId}
									onChange={handleChange}
									className={
										'form-control' +
										(submitted && !user.emailId
											? ' is-invalid'
											: '')
									}
								></input>
								{submitted && !user.email && (
									<div className="invalid-feedback">
										Email is required
									</div>
								)}
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
									value={user.password}
									onChange={handleChange}
									className={
										'form-control' +
										(submitted && !user.password
											? ' is-invalid'
											: '')
									}
								></input>
							</div>

							<div className="mx-auto text-center">
								<Button onClick={handleSubmit}>
									{registering && (
										<span className="spinner-border spinner-border-sm mr-1"></span>
									)}
									Register
								</Button>
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
