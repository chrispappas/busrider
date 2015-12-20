import Vue from 'vue';
import VueResource from 'vue-resource';

import App from './components/App.vue';
import transit from './store/transit';

Vue.config.debug = true;

Vue.use(VueResource);
Vue.http.options.root = 'http://api.winnipegtransit.com/v2/';
Vue.http.options.params = {
	'api-key': transit.apiKey
};

new Vue({
	el: 'body',
	components: {
		App
	}
});
