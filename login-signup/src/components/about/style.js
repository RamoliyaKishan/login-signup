import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: '100vw',
		backgroundImage:
			'url(https://www.wns.com/Portals/0/Images/HeaderBanner/desktop/2403/118/utilities_HD.jpg)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'bottom',
		minHeight: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'@media (max-height: 550px)': {
			minHeight: 600,
		},
	},
}));

export { useStyles };
