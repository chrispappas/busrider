<script type="text/babel">
	import store from '../store/index';
	import lang from '../lang/index';

	export default {
		name: 'Login',
		data() {
			return {
				lang: lang[store.state.currentLanguage],
				user: {
					name: '',
					email: ''
				}
			}
		},
		methods: {
			setUserData() {
				this.$log('user');
				store.state.setUser(this.user);
				return true;
			}
		}
	}
</script>

<template>
	<form v-on:submit.prevent="setUserData">
		<fieldset>
			<legend>Log In</legend>
			<dl>
				<dt><label for="name">{{lang.user.name}}</label></dt>
				<dd><input type="text" name="name" id="name" v-model="user.name"></dd>
				<dt><label for="email">{{lang.user.email}}</label></dt>
				<dd><input type="text" name="email" id="email" v-model="user.email"></dd>
			</dl>
			<button type="submit">Log In</button>
		</fieldset>
	</form>
</template>