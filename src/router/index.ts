import {createRouter, createWebHistory} from 'vue-router';

import boards from '@/pages/boards.vue';
import settings from '@/pages/settings.vue';
import templates from '@/pages/templates.vue';

const routes = [
	{
		path: '/boards',
		name: 'Boards',
		component: boards,
	},
	{
		path: '/templates',
		name: 'Templates',
		component: templates,
	},
	{
		path: '/settings',
		name: 'Settings',
		component: settings,
	},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
