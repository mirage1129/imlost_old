const Home = require('home');
const React = require('react');

class Layout extends React.Component {
	render(){
		return (
			<html>
			  <head />
			  <body>
			  	<Home name={this.props.name}/>
			  </body>
			</html>		
		)
	}
}

