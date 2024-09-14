<template>
  <div class="text-white flex flex-col justify-center py-6 md:py-14 lg:py-16">
    <div v-motion="motionTitle" class="inline-block flex-col items-center mx-auto">
      <h1 ref="animatedElement"  class="text-sm-title md:text-md-title lg:text-lg-title font-bold">My Skills</h1>
      <div class="space-y-1 md:space-y-1 lg:space-y-1.5">
        <div class="h-[2px] md:h-[3px] lg:h-[4px] rounded-md bg-orange w-full" />
        <div class="h-[2px] md:h-[3px] lg:h-[4px] mx-2 rounded-md bg-orange" />
      </div>
    </div>

    <!-- text -->
    <div class="mt-8 md:mt-10 lg:mt-12">
      <h3 class="text-sm-h3 md:text-md-h3 lg:text-lg-h3 font-semibold">
        Skills Reflects Our Knowledge
      </h3>
      <p
        class="mt-4 md:mt-6 lg:mt-8 text-sm-p md:text-md-p lg:text-lg-p leading-relaxed md:leading-relaxed lg:leading-relaxed"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>

    <!-- Year of Experience -->
    <div
      v-motion-roll-visible-right
      class="my-4 md:my-6 lg:my-8 flex flex-row items- text-left space-x-2 md:space-x-3 lg:space-x-3"
    >
      <h2 class="text-5xl md:text-7xl lg:text-8xl">3</h2>
      <span
        class="flex flex-col justify-center text-sm md:text-base lg:text-xl space-y-0 md:space-y-1 lg:space-y-2"
      >
        <h4>Year Of</h4>
        <h4>Experience</h4>
      </span>
    </div>

    <!-- Skill element -->
    <div>
      <i>Skil 1</i>
      <i>Skil 1</i>
      <i>Skil 1</i>
      <i>Skil 1</i>
      <i>Skil 1</i>
    </div>
  </div>
</template>


<script setup lang="ts">
import { motionSlideVisibleOfX } from '../config/motions/motionSlideVisibleOfX'
import { ref, onMounted, onUnmounted, computed, watchEffect } from 'vue'
//-- motion title
const motionTitle = motionSlideVisibleOfX('100%')
const animatedElement = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const motionConfig = motionSlideVisibleOfX('10%')

const motionStyle = computed(() => {
  return isVisible.value ? motionConfig.enter : motionConfig.initial
})

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target) // Stop observing after the element becomes visible
      } else {
        isVisible.value = false
      }
    })
  },
  { threshold: 0.1 }
)

onMounted(() => {
  if (animatedElement.value) {
    observer.observe(animatedElement.value)
  }
})

onUnmounted(() => {
  observer.disconnect()
})

watchEffect(() => {
  if (animatedElement.value) {
    observer.observe(animatedElement.value)
  }
})
</script>