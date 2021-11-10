import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getToken } from './commonFunctions';

const PublicRoute = ({ component: Component, path, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			getToken() ? <Redirect to='/' /> : <Redirect to='/login' />
		}
	/>
);

export default PublicRoute;
