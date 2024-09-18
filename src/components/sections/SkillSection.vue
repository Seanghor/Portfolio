<template>
  <section class="text-white max-w-[1440px] mx-auto px-6 md:px-6 lg:px-6 large:px-0">
    <div class="w-full text-white flex flex-col justify-center py-6 md:py-14 lg:py-16">
      <div data-aos="zoom-in" class="inline-block flex-col items-center mx-auto">
        <h1 class="text-sm-title md:text-md-title lg:text-lg-title font-bold">My Skills</h1>
        <div class="space-y-1 md:space-y-1 lg:space-y-1.5">
          <div class="h-[2px] md:h-[3px] lg:h-[4px] rounded-md bg-orange w-full" />
          <div class="h-[2px] md:h-[3px] lg:h-[4px] mx-2 rounded-md bg-orange" />
        </div>
      </div>

      <!-- text -->
      <div class="mt-8 md:mt-10 lg:mt-12">
        <h3 data-aos="fade-up" class="text-h3-sm md:text-h3-md lg:text-h3-lg font-semibold">
          Skills Reflects Our Knowledge
        </h3>
        <p
          data-aos="fade-up"
          class="mt-4 md:mt-6 lg:mt-8 leading-relaxed md:leading-relaxed lg:leading-relaxed"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-delay="200"
        class="overflow-hidden mt-8 md:mt-10 lg:mt-12 rounded-xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-4 md:gap-y-6 lg:gap-y-8 gap-x-3 md:gap-x-4 lg:gap-x-5 bg-red-950 px-3 md:px-4 lg:px-5 py-4 md:py-6 lg:py-8"
      >
        <SkillCard
          v-for="(skill, index) in mySkills"
          :key="index"
          data-aos="fade-left"
          :data-aos-delay="index * 150"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          :icon="skill.icon"
          :title="skill.name"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SkillCard from '../SkillCard.vue'
import { ref } from 'vue'
import type { skillType } from '../../types/skill.dto'
import { skillData } from '../../data/skill'
import { onMounted } from 'vue'

const mySkills = ref<skillType[]>([])

const setDataForLoad = () => {
  mySkills.value = skillData
}

onMounted(() => {
  setDataForLoad()
})
</script>
