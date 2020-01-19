import React, { Component } from 'react';
import '../scss/App.scss';

import Header from './components/Header';
import Footer from './components/Footer';

import HelloPage from './components/HelloPage';
import Users from './containers/Users';
import User from './components/User';

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";


class App extends Component {
	state = {
		
	}
	render() {
		return (
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<HelloPage title='Welcome page'/>
					</Route>
					<Route exact path="/users" component={Users} />
					<Route path="/users/:id" component={User} />
				</Switch>
				<Footer />
			</Router>
		)

	}
}

export default App;
