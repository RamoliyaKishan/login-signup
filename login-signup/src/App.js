import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import Navbar from './components/Navbar';
import About from './components/about/About';
import PrivateRoute from './utils/privateRoute';
import Dashboard from './components/dashboard/Dashboard';
import PublicRoute from './utils/PublicRoute';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<PublicRoute path='/login' exact component={Login} />
				<PublicRoute path='/signup' exact component={SignUp} />
				<PrivateRoute path='/about' exact component={About} />
				<PrivateRoute path='/dashboard' exact component={Dashboard} />
				<PrivateRoute path='/' exact component={Dashboard} />
			</Switch>
		</Router>
	);
}

export default App;
