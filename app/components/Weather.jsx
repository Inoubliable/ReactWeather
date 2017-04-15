var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

class Weather extends React.Component {

	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this);
		this.state = {
			isLoading: false
		};
	}

	handleSearch(location) {
		var _this = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined
		});

		openWeatherMap.getTemp(location).then(function(data) {
			var weather = data.weather[0].description;
			var temp = data.main.temp;

			_this.setState({
				location: location,
				weather: weather,
				temp: temp,
				isLoading: false
			});

		}, function(error) {

			_this.setState({
				isLoading: false,
				errorMessage: error.message
			});
		});
	}

	render() {
		var {location, weather, temp, isLoading, errorMessage} = this.state;

		function renderMessage() {
			if(isLoading) {
				return <h4 className="text-center">Fetching weather...</h4>
			} else if(location && weather && temp) {
				return <WeatherMessage location={location} weather={weather} temp={temp}></WeatherMessage>;
			}
		}

		function renderError() {
			if(typeof errorMessage === 'string') {
				return (
					<ErrorModal message={errorMessage}></ErrorModal>
				)
			}
		}

		return (
			<div>
				<h3 className="text-center page-title">Get Weather</h3>
				<WeatherForm onSearch={this.handleSearch}></WeatherForm>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}

}

module.exports = Weather;