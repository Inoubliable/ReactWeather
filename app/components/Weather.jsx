var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

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

		this.setState({isLoading: true});

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
			alert(error);

			_this.setState({
				isLoading: false
			});
		});
	}

	render() {
		var {isLoading, location, weather, temp} = this.state;

		function renderMessage() {
			if(isLoading) {
				return <h3>Fetching weather...</h3>
			} else if(location && weather && temp) {
				return <WeatherMessage location={location} weather={weather} temp={temp}></WeatherMessage>;
			}
		}

		return (
			<div>
				<h3>Get Weather</h3>
				<WeatherForm onSearch={this.handleSearch}></WeatherForm>
				{renderMessage()}
			</div>
		);
	}

}

module.exports = Weather;