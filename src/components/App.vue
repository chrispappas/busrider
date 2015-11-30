<script type="text/babel">
	import Header from './Header.vue'
	import Login from './Login.vue'
	import Stops from './Stops.vue'
	export default {
		name: 'App',
		components: {
			'app-header': Header,
			Login,
			Stops
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

				<div></div>
			</div>
		</div>
	</div>
</template>