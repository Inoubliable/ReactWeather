var React = require('react');

var WeatherMessage = ({location, weather, temp}) => {

	return (
		<div>
			<p>Currently in {location} there is {weather}.</p>
			<p>Temperature is standing at {temp}°C.</p>
		</div>
	);
}

module.exports = WeatherMessage;