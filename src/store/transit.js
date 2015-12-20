import moment from 'moment';
import { Promise } from 'es6-promise'
import $ from 'jquery'

const transit = {};

export default transit;

transit.apiKey = 'gHl1WJ7Qk4qdQPLrWd';
transit.baseUrl = 'https://likxhbkvuk.execute-api.us-west-2.amazonaws.com/beta';

const stops = {};

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

			window.console.log(cacheMoment);

			if (cacheMoment.isValid() && cacheMoment.isAfter(moment().subtract(30, 'seconds'))) {
				console.log('cached', cachedStop);
				resolve(cachedStop);
				return;
			}
		}

		let self = this;

		let url = this.getUrl(['stops', stopNumber, 'schedule'], {});

		let ajaxOptions = {
			//data: {
			//	usage: 'long'
			//}
		};

		$.ajax(url, ajaxOptions).done((result) => {

			const stop = stops[stopNumber] = result;
			console.log(stop);
			resolve(stop);

		}).fail((xhr, status, request) => {

			reject(status)
		});

	})
};