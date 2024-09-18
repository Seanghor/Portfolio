<template>
  <section class="text-white max-w-[1440px] mx-auto px-6 md:px-6 lg:px-6 large:px-0">
    <div class="flex flex-col justify-center items-center text-white">
      <div class="inline-block">
        <h1 class="text-sm-title md:text-md-title lg:text-lg-title font-bold">Experience</h1>
        <div class="space-y-1 md:space-y-1 lg:space-y-1.5">
          <div class="h-[2px] md:h-[3px] lg:h-[4px] rounded-md bg-orange w-full" />
          <div class="h-[2px] md:h-[3px] lg:h-[4px] mx-2 rounded-md bg-orange" />
        </div>
      </div>
      <ProjectSlider />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectSlider from '../ProjectSlider.vue'

</script>