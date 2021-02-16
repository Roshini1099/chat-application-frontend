import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../actions';
import './login.css';
const Login = (props) => {
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	});
	const [submitted, setSubmitted] = useState(false);
	const { email, password } = inputs;
	const loggingIn = useSelector((state) => state.authentication.loggedIn);
	const dispatch = useDispatch();
	const location = useLocation();

	// reset login status
	useEffect(() => {
		dispatch(userActions.logout());
	}, []);
	useEffect(()=>{
		if(loggingIn){
			props.history.push('/chat');
		}
	},loggingIn);

	function handleChange(e) {
		const { name, value } = e.target;
		setInputs((inputs) => ({ ...inputs, [name]: value }));
	}

	function handleSubmit (e) {
		e.preventDefault();

		setSubmitted(true);
		if (email && password) {
			// get return url from location state or default to home page
			// const { from } = location.state || { from: { pathname: '/' } };
			dispatch(userActions.login(email, password));
			
		}
	}

	return (
		<div className="container my-5">
			<div className="row">
				<div className="col-md-6 my-5 offset-md-3">
					<div className="card shadow p-5">
						<form onSubmit={handleSubmit}>
							<h3 className="text-center text-uppercase mb-4">
								Login
							</h3>
							<hr></hr>
							<div className="form-group">
								<label>Email</label>
								<input
									type="email"
									name="email"
									placeholder="Email"
									class="form-control"
									value={email}
									onChange={handleChange}
									className={
										'form-control' +
										(submitted && !email
											? ' is-invalid'
											: '')
									}
								></input>
								{submitted && !email && (
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
									value={password}
									onChange={handleChange}
									className={
										'form-control' +
										(submitted && !password
											? ' is-invalid'
											: '')
									}
								></input>
								{submitted && !password && (
									<div className="invalid-feedback">
										Password is required
									</div>
								)}
							</div>

							<div className="mx-auto text-center">
								<button className="btn btn-secondary">
									{loggingIn && (
										<span className="spinner-border spinner-border-sm mr-1"></span>
									)}
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

export default Login;
