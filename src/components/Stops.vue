<script type="text/babel">
	import SubscribedStops from './SubscribedStops.vue';

	export default {
		name: 'Stops',
		components: {
			SubscribedStops
		}
	}
</script>

<template>
	<div class="stops-container">
		<p>Search box here</p>
		<subscribed-stops></subscribed-stops>
	</div>
</template>