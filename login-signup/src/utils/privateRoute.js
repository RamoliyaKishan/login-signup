import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAccessible } from './commonFunctions';

const PrivateRoute = ({ component: Component, path, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isAccessible() ? <Component {...props} /> : <Redirect to='/login' />
		}
	/>
);

export default PrivateRoute;
