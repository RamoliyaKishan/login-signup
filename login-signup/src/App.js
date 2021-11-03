import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import Navbar from './components/Navbar';
import About from './components/about/About';
import PrivateRoute from './utils/privateRoute';
import Dashboard from './components/dashboard/Dashboard';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path='/login' exact component={Login} />
				<Route path='/signup' exact component={SignUp} />
				<PrivateRoute path='/about' exact component={About} />
				<PrivateRoute path='/dashboard' exact component={Dashboard} />
				<PrivateRoute path='/' exact component={Dashboard} />
			</Switch>
		</Router>
	);
}

export default App;
