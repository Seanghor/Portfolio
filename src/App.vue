

<template>
  <NavigationBar />

  <!-- <VueWriter :array="['Hello World']" /> -->
</template>

<script setup lang="ts">
import NavigationBar from '@/components/NavigationBar.vue'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
onMounted(() => {
  initFlowbite()
})

// import { VueWriter } from 'vue-writer'
</script>