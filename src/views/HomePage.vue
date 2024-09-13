<template >
  <div class="flex justify-center items-center">
    <HOCPadding>
      <LandingPage />
      <AboutComponent />
      <SkillComponent />
    </HOCPadding>
  </div>
</template>
<script setup lang="ts">
import LandingPage from '@/components/LandingPage.vue'
import HOCPadding from '@/components/HOC/HOCPadding.vue'
import AboutComponent from '@/components/AboutComponent.vue'
import SkillComponent from '@/components/SkillComponent.vue'
</script>