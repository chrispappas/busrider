<script type="text/babel">
	import transit from '../store/transit';
	import { Promise } from 'es6-promise';

	export default {
		name: 'NewStop',
		props: ['stop', 'index'],
		ready() {
			this.$log('stop');
		},
		methods: {
			updateTimes() {
				window.console.log('updating times for stop: ' + this.stop);
				this.$dispatch('setStop', this.stop);
			}
		}
	}
</script>

<template>
	<div class="stop-new">
		<button class="stop-number" v-on:click="updateTimes">{{index}}: {{stop}}</button>
	</div>
</template>