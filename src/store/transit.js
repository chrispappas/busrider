import moment from 'moment';
import { Promise } from 'es6-promise'
import $ from 'jquery'

const transit = {};

export default transit;

transit.apiKey = 'gHl1WJ7Qk4qdQPLrWd';
transit.baseUrl = 'http://api.winnipegtransit.com/home/api/v2/';

let stops = {};

transit.getUrl = function (pathParts, params) {
	console.log(pathParts, params);
	let combinedParams = params === 'string' ? params : $.param(params);
	let path = typeof pathParts === 'string' ? pathParts : pathParts.join('/');
	let url = [path, combinedParams].join('?');
	return [
		transit.baseUrl.replace(/\/+$/, ""),
		url
	].join('/');
};

// this should be a promise so we can catch failures
transit.getStop = function (stopNumber) {
	return new Promise((resolve, reject) => {
		if (stops[stopNumber] && stops[stopNumber]['query-time']) {

			let cachedStop = stops[stopNumber];
			let cacheMoment = moment(cachedStop['query-time']);

			if (cacheMoment.isValid() && cacheMoment.isAfter(moment().subtract(30, 'seconds'))) {
				console.log('cached', cachedStop);
				resolve(cachedStop);
			}
		}

		let self = this;

		let url = this.getUrl(['stops', '10704'], {
			'usage': 'long',
			'api-key': 'gHl1WJ7Qk4qdQPLrWd'
		});

		console.log('in getstop', url);

		$.ajax(url, {
			data: {
				usage: 'long'
			}
		}).done((result) => {

			const stop = stops[stopNumber] = data;
			console.log(stop);
			resolve(stop);

		}).error((data, status, request) => {

			reject()
		});

		//// with a promise, we would return this and then consume it in the component
		//this.$http.get(`/stops/${stopNumber}?callback=handle_data&usage=long`, (data, status, request) => {
		//	const stop = stops[stopNumber] = data;
		//	this.$log(stop);
		//	resolve(stop);
		//}).error((data, status, request) => {
		//	reject()
		//});
	})
};