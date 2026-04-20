<script setup>
import {ref} from "vue";
import {Button as PvButton, Menubar as PvMenubar} from "primevue";

const drawerVisible = ref(false);
const toogleDrawer = () => {
  drawerVisible.value = !drawerVisible.value;
};
</script>

<template>
<div>
  <div>
    <pv-menubar>
      <template #start>
        <pv-button icon = "pi pi-bars" label="CatchUp" text @click="toogleDrawer"/>
      <!--TODO: Add source list -->
      </template>
      <template #end>
        <language-switcher></language-switcher>
      </template>
    </pv-menubar>
  </div>
</div>
  <div>
    <!--TODO: Arch source list -->
  </div>
</template>

<style scoped>

</style>