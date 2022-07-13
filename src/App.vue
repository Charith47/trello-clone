<template>
	<div class="top-bar border-b-2">
		<img
			class="main-logo"
			src="https://vuejsforge.com/images/logo.svg"
			alt="Vue.js Forge"
		/>

		<div class="align">
			<span class="wrapper">
				<kbutton :size="'medium'">Logout</kbutton>
			</span>
		</div>
	</div>
	<Drawer
		:expanded="expanded"
		:position="position"
		:mode="mode"
		:mini="true"
		:items="
			items.map((item, index) => ({
				...item,
				selected: index === selectedId,
			}))
		"
		@select="onLinkClick"
	>
		<DrawerContent class="m-8">
			<RouterView />
		</DrawerContent>
	</Drawer>
</template>

<script>
import { Drawer, DrawerContent } from '@progress/kendo-vue-layout';
import { Button } from '@progress/kendo-vue-buttons';

export default {
	name: 'App',
	components: { Drawer, DrawerContent, kbutton: Button },
	mounted() {
		this.$router.push(this.items[0].data);
	},
	data() {
		return {
			items: [
				{
					text: 'Boards',
					icon: 'k-i-layout',
					selected: true,
					data: {
						path: '/boards',
					},
				},
				{
					text: 'Templates',
					icon: 'k-i-border-left',
					data: {
						path: '/templates',
					},
				},
				{
					text: 'Settings',
					icon: 'k-i-gear',
					data: {
						path: '/settings',
					},
				},
			],
			expanded: true,
			selectedId: 0,
			position: 'start',
			mode: 'push',
		};
	},
	methods: {
		onLinkClick(e) {
			this.selectedId = e.itemIndex;
			this.$router.push(this.items[e.itemIndex].data);
		},
	},
};
</script>

<style scoped>
.k-drawer-container {
	position: fixed;
	width: 100%;
	height: 100%;
}
.k-drawer-item {
	user-select: none;
}
.main-logo {
	transform: scale(0.45);
}

.top-bar {
	display: flex;
	justify-content: space-between;
}

.align {
	display: flex;
}
</style>
