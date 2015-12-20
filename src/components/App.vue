<script type="text/babel">
	import Header from './Header.vue'
	import Login from './Login.vue'
	import Stops from './Stops.vue'
	import StopSchedule from './StopSchedule.vue'
	export default {
		name: 'App',
		components: {
			'app-header': Header,
			Login,
			Stops,
			StopSchedule
		},
		data() {
			return {
				currentStop: null
			}
		},
		events: {
			'setStop': function(stopNumber) {
				window.console.log('setting stop number: ' + stopNumber)
				this.currentStop = stopNumber;
			}
		}
	}
</script>

<template>
	<div class="appContainer">
		<app-header></app-header>
		<div class="grid-frame">
			<div class="grid-content medium-3">
				<stops></stops>
			</div>
			<div class="grid-content">
				<!--<login></login>-->
				<h3>Hello Bus Rider!</h3>

				<stop-schedule :currentStop="currentStop"></stop-schedule>
			</div>
		</div>
	</div>
</template>