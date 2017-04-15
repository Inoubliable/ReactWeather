var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?appid=b09adec331bbb7e103dea484b39e9a01&units=metric';

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res) {
			var list = res.data.list[0];
			var city = '';
			
			if(list) {
				city = res.data.list[0].name;
			}
			
			if(city !== location) {
				throw new Error("City not found");
			} else {
				return list;
			}
		}, function(res) {
			throw new Error(res.data.message);
		});
	}
}