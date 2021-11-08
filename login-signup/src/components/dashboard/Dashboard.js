import { Container, Paper, Typography, Box, Button } from '@material-ui/core';
import api from '../../utils/axios';
import { useStyles } from './style';

const Dashboard = () => {
	const classes = useStyles();
	const user = JSON.parse(localStorage.getItem('user'));

	const handleGetUsers = () => {
		api
			.get('http://localhost:8000/api/users')
			.then((res) => {
				alert(res.data);
				// console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<Container className={classes.root}>
			<Paper component={Box} width='50%' p={5} mx='auto'>
				<Typography align='center' color='primary'>
					<h1>Welcom {user.name}</h1>
					<h2>💜💛💚💙</h2>
				</Typography>
				<Button onClick={() => handleGetUsers()}>get users</Button>
			</Paper>
		</Container>
	);
};

export default Dashboard;
