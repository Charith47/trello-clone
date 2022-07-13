<template>
  <div class="k-card lg:w-2">
    <div class="k-card-header">
      <AppImage :image="image"></AppImage>
      <h5 class="k-card-title">{{ title }}</h5>
    </div>
  </div>
</template>

<script>
import AppImage from "@/components/AppImage.vue";

export default {
  name: 'Board',
  components: {AppImage},
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

</style>
