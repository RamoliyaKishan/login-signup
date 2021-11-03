import { Container, Paper, Typography, Box } from '@material-ui/core';
import { useStyles } from './style';

const Dashboard = () => {
	const classes = useStyles();
	const user = JSON.parse(localStorage.getItem('user'));
	console.log(user);
	return (
		<Container className={classes.root}>
			<Paper component={Box} width='50%' p={5} mx='auto'>
				<Typography align='center' color='primary'>
					<h1>Welcom {user.name}</h1>
					<h2>💜💛💚💙</h2>
				</Typography>
			</Paper>
		</Container>
	);
};

export default Dashboard;
