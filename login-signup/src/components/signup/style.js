import { makeStyles } from '@material-ui/core/styles';
import Img from '../../assets/rocket.png';

const signUpStyles = makeStyles((theme) => ({
	root: {
		minWidth: '100vw',
		backgroundImage:
			'url(https://www.wns.com/Portals/0/Images/HeaderBanner/desktop/2403/118/utilities_HD.jpg)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'bottom',
		minHeight: 'calc(100vh - 64px)',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'@media (max-height: 550px)': {
			minHeight: 600,
		},
		'& .main-container': {
			margin: 'auto',
			// minWidth: '60vw',
			// maxWidth: '60%',
			// padding: '40px',
			'@media (max-width: 550px)': {
				margin: '20px',
				padding: '30px',
			},
			'& .left-side': {
				padding: '40px 10px 40px 40px',
				backgroundColor: theme.palette.grey[200],
			},
			'& .image': {
				backgroundImage: `url(${Img})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				minHeight: '100%',
				// minWidth: '150%',
				// maxWidth: '100%',
			},
		},

		'& form': {
			marginTop: '30px',

			'@media (max-width: 575px)': {
				marginTop: '15px',
			},
			'& .MuiInputBase-input': {
				height: '20px',
				'@media (max-width: 575px)': {
					height: '10px',
				},
			},
		},

		'& .custom-btn': {
			marginTop: '20px',
			fontSize: '18px',
			height: '40px',

			'@media (max-width: 575px)': {
				marginTop: '15px',
				height: '40px',
			},
		},
	},
}));

export { signUpStyles };
