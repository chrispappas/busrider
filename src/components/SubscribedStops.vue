<script type="text/babel">
	import NewStop from './NewStop.vue';
	import store from '../store/index';

	export default {
		name: 'SubscribedStops',
		data() {
			return {
				subscribedStops: store.state.stops
			}
		},
		components: {
			NewStop
		},
		ready() {
			this.$log('subscribedStops');
		}
	}
</script>

<template>
	<div class="stops-subscribed">
		<h3>Subscribed Stops</h3>
		<ul class="stops-list stops-list--subscribed">
			<li class="stop" v-for="stop in subscribedStops">
				<!--<span>{{stop}}</span>-->
				<new-stop :stop="stop" :index="$index"></new-stop>
			</li>
		</ul>
	</div>
</template>