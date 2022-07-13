<template>
  <Drawer
      :expanded="expanded"
      :items="items"
      :mini="true"
      class="h-[90vh]"
      mode="push"
      position="start"
      @select="onSelect"
  >
    <DrawerContent>
      <div class="px-5">
        <router-view/>
      </div>
    </DrawerContent>
  </Drawer>
</template>

<script>
import {useLocalStorage} from "@vueuse/core";

import {computed, ref} from "vue";

// const router = useRouter();
const selectedId = ref(0);

const expanded = useLocalStorage("vue-forge-drawer-expanded", true);
const expandedIcon = computed(() =>
    expanded.value ? "k-i-arrow-chevron-left" : "k-i-arrow-chevron-right"
);

export default {
  name: "TheDrawer"
}
</script>

<style scoped>

</style>