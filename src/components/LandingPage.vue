<template>
  <section
    class="w-full flex flex-col md:flex-row items-center justify-center md:justify-between space-y-6 md:space-y-0 space-x-0 md:space-x-8 lg:space-x-10"
  >
    <!-- Ellipse-shaped image container (height 10% longer than width) -->
    <div
      v-motion="motionSlideVisibleLeft"
      class="w-full md:w-2/5 lg:w-2/5 flex items-center justify-center px-0 md:px-6 lg:px-10"
    >
      <div
        v-motion="motionCover"
        class="w-[200px] md:w-[500px] h-auto rounded-[60%_/_60%] overflow-hidden"
      >
        <img src="../../public/main.jpg" alt="Placeholder" class="w-full h-full object-cover" />
      </div>
    </div>
    <!-- <div class="w-[100%] md:w-[40%] lg:w-[40%] h-auto flex items-center justify-center">
      <div class="w-[500px] h-auto rounded-[60%_/_60%] overflow-hidden">
        <img src="../../public/main.jpg" alt="Placeholder" class="w-full h-full object-cover" />
      </div>
    </div> -->
    <div class="text-white w-full md:w-3/5 lg:w-3/5">
      <div class="space-y-2 md:space-y-5 lg:space-y-6">
        <h1 v-motion="motionSlideRight" class="text-2xl md:text-4xl lg:text-5xl font-semibold">
          Hi, it's <span class="text-orange">Seanghor</span>
        </h1>
        <h3 v-motion="motionSlideLeft" class="text-xl md:text-2xl lg:text-3xl font-medium">
          I am a <span class="text-orange">Full Stack Developer</span>
        </h3>
        <p
          v-motion="motionParagraph"
          class="text-sm-p md:text-md-p lg:text-lg-p leading-relaxed md:leading-relaxed lg:leading-relaxed"
        >
          I am a dedicated full-stack developer with strong technical skills in both backend and
          frontend technologies for web applications. Passionate about building seamless,
          user-friendly solutions, I thrive in fast-paced environments and adapt quickly to new
          technologies. My expertise in backend and frontend frameworks drives my commitment to
          delivering exceptional technology solutions.
        </p>
      </div>

      <div>
        <!-- Social Blocks -->
        <div
          class="my-4 md:my-5 lg:my-6 flex flex-row items-center justify-start space-x-3 md:space-x-3 lg:space-x-6 pl-2 md:pl-3 lg:pl-3"
        >
          <font-awesome-icon
            v-motion="motionIconFromTop"
            :icon="['fab', 'linkedin']"
            class="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 text-orange flex items-center justify-center rounded-full border border-orange p-1.5 md:p-2 lg:p-2"
          />
          <font-awesome-icon
          v-motion="motionIconFromBot"
            :icon="['fab', 'github']"
            class="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 text-orange flex items-center justify-center rounded-full border border-orange p-1.5 md:p-2 lg:p-2"
          />
          <font-awesome-icon
            v-motion="motionIconFromTop"
            :icon="['fab', 'telegram']"
            class="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 text-orange flex items-center justify-center rounded-full border border-orange p-1.5 md:p-2 lg:p-2"
          />
          <font-awesome-icon
            v-motion="motionIconFromBot"
            :icon="['fab', 'facebook']"
            class="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 text-orange flex items-center justify-center rounded-full border border-orange p-1.5 md:p-2 lg:p-2"
          />
        </div>
        <!-- <a href="" class="mt-6 inline-block text-blue-500">Hire Me</a> -->
        <button
        v-motion="motionHiringButton"
          class="text-sm md:text-sm lg:text-lg px-6 md:px-8 lg:px-10 py-2 md:py-2 lg:py-2 bg-orange rounded-sm font-normal"
        >
          Hire Me
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { motionCover } from '../config/motions/custom'
import {
  motionSlideVisibleLeft,
  motionPopSlowly,
} from '../config/motions/custom'
import { motionSlideVisibleOfX } from '../config/motions/motionSlideVisibleOfX'
const motionSlideLeft = motionSlideVisibleOfX('-10%')
const motionSlideRight = motionSlideVisibleOfX('20%')

// -- motion of paragraph
const motionParagraph = motionPopSlowly(20, 1000, 500)

// --icon
const motionIconFromTop = motionPopSlowly(10, 1000, 700) // (y, duration, delay)
const motionIconFromBot = motionPopSlowly(-10, 1000, 700) 

// -- hiring button
const motionHiringButton = motionSlideVisibleOfX('100%')
</script>
../config/motions/custom../config/motions/custom