<script lang="ts" setup>
import {useAlerts} from "@/stores/alerts";
import {storeToRefs} from "pinia";

const store = useAlerts();
const {notify, remove} = store;

const {items} = storeToRefs(store);
</script>

<template>
  <div class="z-10">
    <NotificationGroup
        :style="{
        right: '10px',
        bottom: '10px',
        alignItems: 'flex-start',
        flexWrap: 'wrap-reverse',
      }"
    >
      <Fade v-for="alert in items" :key="alert.id" appear>
        <Notification
            :closable="alert.closable"
            :type="{
            style: alert.style,
            icon: true,
          }"
            @close="remove(alert.id)"
        >
          <div v-if="alert.html" v-html="alert.message"></div>
          <span v-else>{{ alert.message }}</span>
        </Notification>
      </Fade>
    </NotificationGroup>
  </div>
</template>
