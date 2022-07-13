<template>
  <div>
    <img :src="image" class="k-card-image"/>
  </div>
</template>

<script>
export default {
  name: "AppImage",
  props: {
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.k-card > img {
  height: 100px;
}
</style>