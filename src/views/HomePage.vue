<template >
  <div class="overflow-hidden flex flex-col h-full w-full items-center justify-center mx-auto">
    <LandingPage />
    <AboutSection />
    <SkillSection />
    <ExperienceSection />
    <ContactSection />
    <FooterSection />
    <!-- <SkillSection />
    <ExperienceSection /> -->
    <!-- <HOCPadding>
      <LandingPage />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
    </HOCPadding> -->
  </div>
</template>
<script setup lang="ts">
import LandingPage from '@/components/sections/LandingPage.vue'
import HOCPadding from '@/components/HOC/HOCPadding.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillSection from '@/components/sections/SkillSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
</script>