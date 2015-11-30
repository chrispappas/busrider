<script type="text/babel">
	import transit from '../store/transit';
	import { Promise } from 'es6-promise';

	export default {
		name: 'NewStop',
		props: ['stop', 'index'],
		data() {
			return {
				times: []
			}
		},
		ready() {
			this.$log('stop');
		},
		$http: {
			root: 'http://api.winnipegtransit.com/home/api/v2/'
		},
		methods: {
			updateTimes() {
				window.console.log('updating times');

//				this.$http.get(`http://api.winnipegtransit.com/v2/stops/10704?usage=long`, function(data, status, request) {
//					const stop = stops[10704] = data;
//					this.$log(stop);
//					resolve(stop);
//				});
//
				transit.getStop(this.stop).then(function(data) {
					this.times = data;
					console.log(data)
				});
			}
		}
	}
</script>

<template>
	<div class="stop-new">
		<button class="stop-number" v-on:click="updateTimes">{{index}}: {{stop}}</button>
		<ul v-if="times.length">
			<li v-for="time in times">
				{{time}}
			</li>
		</ul>
	</div>
</template>