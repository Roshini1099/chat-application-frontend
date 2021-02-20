import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom'

const Privateroute = Component => ({ ...props }) =>
{

	return (props.user ? <Component {...props} /> : <Redirect to="/login" />)

};

export { Privateroute };
