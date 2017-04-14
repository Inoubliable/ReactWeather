var React = require('react');

class WeatherForm extends React.Component {

	constructor(props) {
		super(props);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(e) {
		e.preventDefault();

		var location = this.refs.location.value;

		if(location.length > 0) {
			this.props.onSearch(location);
		}
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="location"/><br/>
				<button type="submit">Get Weather</button>
			</form>
		);
	}

}

module.exports = WeatherForm;