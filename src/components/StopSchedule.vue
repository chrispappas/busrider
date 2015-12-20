<script type="text/babel">
	import transit from '../store/transit';

	export default {
		name: 'StopSchedule',
		props: [
			'currentStop'
		],
		data() {
			return {
				stopData: {}
			}
		},
		ready() {
			this.$log('currentStop');
		},
		watch: {
			currentStop() {
				this.$log('currentStop');
				if (this.currentStop !== null) {
					transit.getStop(this.currentStop).then(function (stopData) {
						this.stopData = stopData;
					}).fail(function (error) {
						alert(error);
					});
				}
			}
		}
	}
</script>

<template>
	<div class="stop-schedule">
		<p>Stop ID: {{currentStop}}</p>
	</div>
</template>