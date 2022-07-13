<template>
  <TheNavbar/>
  <Drawer
      :expanded="expanded"
      :items="
			items.map((item, index) => ({
				...item,
				selected: index === selectedId,
			}))
		"
      :mini="true"
      :mode="mode"
      :position="position"
      @select="onLinkClick"
  >
    <DrawerContent class="m-8">
      <RouterView/>
    </DrawerContent>
  </Drawer>
</template>

<script>
import {Drawer, DrawerContent} from '@progress/kendo-vue-layout';
import {Button} from '@progress/kendo-vue-buttons';
import TheNavbar from "@/components/TheNavbar.vue";

export default {
  name: 'App',
  components: {TheNavbar, Drawer, DrawerContent, kbutton: Button},
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
