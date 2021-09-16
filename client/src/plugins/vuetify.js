import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				background: '#FFDAB9', // Not automatically applied
			},
			dark: {
				background: 'indigo', // If not using lighten/darken, use base to return hex
			},
		},
	},
});
