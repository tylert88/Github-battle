import React from 'react'
let Popular = require('./Popular')

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Popular />
			</div>
		)
	}
}

module.exports = App
