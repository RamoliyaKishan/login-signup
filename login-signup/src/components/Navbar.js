import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core';
import { getToken, getAccess, removeAccess } from '../utils/commonFunctions';

const Navbar = () => {
	const history = useHistory();
	const handleLogout = () => {
		if (window.confirm('Are you sure to logout ???')) {
			localStorage.removeItem('token');
			localStorage.removeItem('user');
			removeAccess();
			history.push('/login');
			window.location.reload();
		}
	};

	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography variant='h5' style={{ flexGrow: '1' }}>
					LOGIN-SIGNUP
				</Typography>

				{getToken() && getAccess() ? (
					<Box>
						<Button color='inherit' component={Link} to='/dashboard'>
							Dashboard
						</Button>
						<Button color='inherit' component={Link} to='/about'>
							About Us
						</Button>
						<Button color='inherit' onClick={handleLogout}>
							Log Out
						</Button>
					</Box>
				) : (
					<Box>
						<Button color='inherit' component={Link} to='/login'>
							LogIn
						</Button>
						<Button color='inherit' component={Link} to='/signup'>
							SignUp
						</Button>
					</Box>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
