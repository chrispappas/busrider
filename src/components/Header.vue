<script type="text/babel">
	import store from '../store/index';
	import lang from '../lang/index';

	export default {
		name: 'Header',
		data() {
			return {
				state: store.state
			}
		}
	}
</script>

<template>
	<header>
		<h1>Bus Rider</h1>
		<p v-if="state.user.name">Logged in as {{state.user.name}} &lt;{{state.user.email}}&gt;</p>
	</header>
</template>