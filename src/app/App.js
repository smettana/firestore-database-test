import React, { Component } from 'react';
import '../scss/App.scss';

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
					
				</Switch>
				<Footer />
			</Router>
		)

	}
}

export default App;
