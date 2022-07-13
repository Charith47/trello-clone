<template>
	<div class="k-card lg:w-2">
		<img class="k-card-image" :src="image" />
		<div class="k-card-header">
			<h5 class="k-card-title">{{ title }}</h5>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Board',
	components: {},
	props: {
		title: {
			type: String,
			required: true,
		},
		order: {
			type: [String, Array],
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		tasks: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style scoped>
.k-card {
	width: 285px;
	height: fit-content;
}
.k-card > img {
	height: 100px;
}
</style>
