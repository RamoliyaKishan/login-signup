import React from 'react';
// import { Route } from 'react-router-dom';
import { Redirect, Route } from 'react-router-dom';
import { getToken } from './commonFunctions';

const PublicRoute = ({ component: Component, path, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			getToken() ? <Redirect to='/' /> : <Component {...props} />
		}
	/>
);

export default PublicRoute;
