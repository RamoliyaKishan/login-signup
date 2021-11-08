import { useHistory } from 'react-router';
import {
	TextField,
	Button,
	Container,
	Box,
	Paper,
	Typography,
	InputAdornment,
	Grid,
	FormControlLabel,
	Checkbox,
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { signUpStyles } from '../signup/style';
import { setAccess } from '../../utils/commonFunctions';
import api from '../../utils/axios';

const Login = () => {
	const classes = signUpStyles();
	const history = useHistory();

	const userValidationSchema = yup.object({
		email: yup.string().required('Enter Username'),
		password: yup.string().required('Enter Password'),
	});

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			email: '',
			password: '',
			remember: false,
		},
		validationSchema: userValidationSchema,
		onSubmit: (values) => {
			const data = JSON.parse(localStorage.getItem('usersList')) || [];
			var oneUser = data.filter((u) => u.email === values.email);

			if (oneUser.length > 0) {
				for (let val of oneUser.values()) {
					oneUser = val;
				}

				if (oneUser.password === values.password) {
					api
						.post('http://localhost:8000/auth/login', values)
						.then((response) => {
							localStorage.setItem('user', JSON.stringify(oneUser));
							localStorage.setItem('token', response.data.access_token);
							setAccess();
							history.push('/dashboard');
							window.location.reload();
						})
						.catch((err) => {
							console.log('user error', err.response.data.message);
						});
				} else {
					alert('Password is not matched with this user id!!! 🔐🔐');
				}
			} else {
				alert('This Email is not Registered ☹☹☹!!!');
			}
		},
	});

	return (
		<Container className={classes.root} disableGutters>
			<Paper component={Box} className='main-container'>
				<Grid container>
					<Grid item sm={12} md={6}>
						<Box className='left-side'>
							<Typography variant='h3' align='center' color='primary'>
								LogIn
							</Typography>
							<div className='form-wrapper'>
								<form
									noValidate
									autoComplete='off'
									onSubmit={formik.handleSubmit}
								>
									<TextField
										type='email'
										id='email'
										name='email'
										label='Email'
										placeholder='Enter your emailId'
										fullWidth
										margin='normal'
										InputProps={{
											startAdornment: (
												<InputAdornment position='start'>
													<EmailIcon color='secondary' />
												</InputAdornment>
											),
										}}
										onChange={formik.handleChange}
										value={formik.values.email}
										error={formik.touched.email && Boolean(formik.errors.email)}
										helperText={formik.touched.email && formik.errors.email}
									/>

									<TextField
										type='password'
										id='password'
										name='password'
										label='Password'
										placeholder='Enter your password'
										fullWidth
										margin='normal'
										InputProps={{
											startAdornment: (
												<InputAdornment position='start'>
													<LockIcon color='secondary' />
												</InputAdornment>
											),
										}}
										onChange={formik.handleChange}
										value={formik.values.password}
										error={
											formik.touched.password && Boolean(formik.errors.password)
										}
										helperText={
											formik.touched.password && formik.errors.password
										}
									/>

									<FormControlLabel
										name='remember'
										control={<Checkbox color='primary' />}
										label='Remember Me'
										labelPlacement='end'
										onChange={formik.handleChange}
										value={formik.values.password}
									/>
									<Box align='center'>
										<Button
											color='primary'
											variant='contained'
											// fullWidth
											className='custom-btn'
											type='submit'
											align='end'
										>
											Log In
										</Button>
									</Box>
								</form>
							</div>
						</Box>
					</Grid>
					<Grid item sm={12} md={6} className='image'></Grid>
				</Grid>
			</Paper>
		</Container>
	);
};

export default Login;
