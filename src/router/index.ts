import { createRouter, createWebHistory } from 'vue-router';

// this works with the vite plugin to support file based routing
import boards from '@/pages/boards.vue';

const routes = [
	{
		path: '/boards',
		name: 'Boards',
		component: boards,
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
