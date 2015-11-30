const store = {};

export default store;

store.state = {
	currentLanguage: 'en',
	user: {
		name: '',
		email: ''
	},
	stops: [
		10704,
		10545,
		10881,
		60557,
		10562
	],
	setUser: function(user) {
		this.user = user;
	}
};
