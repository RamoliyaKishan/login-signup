import { Link } from 'react-router-dom';
import { Container, Paper, Typography, Box } from '@material-ui/core';
import { useStyles } from './style';

const About = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Paper component={Box} width='50%' p={5} mx='auto'>
				<Typography component='div' align='center' color='primary'>
					<h3>Version 1.0.0</h3>
					<h4>Thanks for your support🙏🙏🙏</h4>
					<Link to='/'>Go Back</Link>
				</Typography>
			</Paper>
		</Container>
	);
};

export default About;
