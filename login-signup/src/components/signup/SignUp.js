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
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import { signUpStyles } from './style';

const SignUp = () => {
	const classes = signUpStyles();
	const history = useHistory();

	const userValidationSchema = yup.object({
		name: yup
			.string()
			.required('Username is required')
			.max(100, 'maximum 100 character is required'),
		contact: yup
			.string()
			.matches(
				/^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/,
				'Enter a valid phone number'
			)
			.required('Contact number is required'),
		email: yup
			.string()
			.email('Enter a valid email')
			.max(60, 'Email address must not be more than 100 characters')
			.matches(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+$/, 'Enter a valid email')
			.required('Email is required'),
		password: yup
			.string()
			.min(8, 'Password should be of minimum 8 characters length')
			.required('Password is required'),
	});

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			name: '',
			email: '',
			contact: '',
			password: '',
		},
		validationSchema: userValidationSchema,
		onSubmit: (values) => {
			values = { ...values, id: uuid() };
			const data = JSON.parse(localStorage.getItem('usersList')) || [];

			const findUser = data.find((u) => u.email === values.email);
			if (findUser) {
				alert('This Email Id is already exist!!!');
			} else {
				axios
					.post('http://localhost:8000/auth/register', values)
					.then((response) => {
						data.push(values);
						localStorage.setItem('usersList', JSON.stringify(data));
						formik.handleReset();
						history.push('/login');
					})
					.catch((err) => {
						console.log('user error', err);
					});
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
								SignUp
							</Typography>
							<div className='form-wrapper'>
								<form
									noValidate
									autoComplete='off'
									onSubmit={formik.handleSubmit}
								>
									<TextField
										type='text'
										id='name'
										name='name'
										label='UserName'
										placeholder='Enter your userName'
										fullWidth
										margin='normal'
										InputProps={{
											startAdornment: (
												<InputAdornment position='start'>
													<AccountCircleIcon color='secondary' />
												</InputAdornment>
											),
										}}
										onChange={formik.handleChange}
										value={formik.values.name}
										error={formik.touched.name && Boolean(formik.errors.name)}
										helperText={formik.touched.name && formik.errors.name}
									/>
									<TextField
										type='number'
										id='contact'
										name='contact'
										label='Contact Number'
										placeholder='Enter Contact Number'
										fullWidth
										margin='normal'
										InputProps={{
											startAdornment: (
												<InputAdornment position='start'>
													<PhoneIcon color='secondary' />
												</InputAdornment>
											),
										}}
										onChange={formik.handleChange}
										value={formik.values.contact}
										error={
											formik.touched.contact && Boolean(formik.errors.contact)
										}
										helperText={formik.touched.contact && formik.errors.contact}
									/>
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
													<VisibilityIcon color='secondary' />
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
									<Box align='center'>
										<Button
											color='primary'
											variant='contained'
											// fullWidth
											className='custom-btn'
											type='submit'
											align='end'
										>
											SignUp
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

export default SignUp;
