<template>
  <div
    class="shadow-md shadow-orange rounded-xl bg-black flex flex-col justify-center items-center w-32 md:w-36 lg:w-44 py-1 md:py-2 lg:py-2"
  >
    <div class="px-3 md:px-5 lg:px-6 items-center justify-center">
      <img
       :src="icon"
        alt="Skill"
        class="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 object-cover p-3 md:p-3 lg:p-4"
      />
    </div>
    <h3 class="text-orange font-bold text-xs md:text-base lg:text-lg font-Fasthand">{{ title }}</h3>
    <!-- Display the skillName prop -->
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'
  defineProps({
    title: String,
    icon : String
  })

  

</script>

