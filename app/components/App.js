import React from 'react'
import Popular from './Popular'
let ReactRouter = require('react-router-dom')
let Router = ReactRouter.BrowserRouter
let Route = ReactRouter.Route
let Switch = ReactRouter.Switch
import Nav from './Nav'
import Home from './Home'
import Battle from './Battle'
import Results from './Results'

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="container">
					<Nav />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/battle" component={Battle} />
						<Route path="/battle/results" component={Results} />
						<Route path="/popular" component={Popular} />
						<Route
							render={() => {
								return <p>Page Not Found!</p>
							}}
						/>
					</Switch>
				</div>
			</Router>
		)
	}
}

module.exports = App
