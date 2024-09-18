<template>
  <section class="max-w-[1440px] mx-auto px-6 md:px-6 lg:px-6 large:px-0 h-screen">
    <div
      class="h-full flex flex-col md:flex-row items-start justify-center md:justify-between space-y-6 md:space-y-0 lg:space-y-0 space-x-0 md:space-x-8 lg:space-x-10"
    >
      <!-- Ellipse-shaped image container (height 10% longer than width) -->
      <div
        data-aos="zoom-in-down"
        class="z-10 w-full md:w-2/5 lg:w-2/5 flex items-center justify-center px-0 md:px-6 lg:px-10"
      >
        <div
          v-motion="motionCover"
          class="w-[200px] md:w-[500px] h-auto rounded-[60%_/_60%] overflow-hidden"
        >
          <img
            src="../../../public/main.jpg"
            alt="Placeholder"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      <div class="text-white w-full md:w-3/5 lg:w-3/5 h-[600px] flex flex-col justify-center">
        <div class="space-y-2 md:space-y-5 lg:space-y-6">
          <h1
            data-aos="fade-left"
            class="text-whiteLight text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold"
          >
            Hi, it's <span class="text-orange">Seanghor</span>
          </h1>
          <div
            data-aos="fade-right"
            class="flex flex-row text-xl md:text-2xl lg:text-3xl font-medium"
          >
            <h1 class="text-whiteLight flex items-center">I am a&nbsp;</h1>

            <vue-writer
              class="flex items-center text-orange"
              :array="['Full Stack Developer|']"
              :eraseSpeed="50"
              :typeSpeed="100"
              :delay="1000"
            />
          </div>

          <p data-aos="flip-up" class="leading-relaxed md:leading-relaxed lg:leading-relaxed">
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
              data-aos="fade-left"
              data-aos-delay="0"
              :icon="['fab', 'linkedin']"
              class="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 text-orange flex items-center justify-center rounded-full border border-orange p-1.5 md:p-2 lg:p-2"
            />
            <font-awesome-icon
              data-aos="fade-left"
              data-aos-delay="200"
              :icon="['fab', 'github']"
              class="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 text-orange flex items-center justify-center rounded-full border border-orange p-1.5 md:p-2 lg:p-2"
            />
            <font-awesome-icon
              data-aos="fade-left"
              data-aos-delay="400"
              :icon="['fab', 'telegram']"
              class="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 text-orange flex items-center justify-center rounded-full border border-orange p-1.5 md:p-2 lg:p-2"
            />
            <font-awesome-icon
              data-aos="fade-left"
              data-aos-delay="600"
              :icon="['fab', 'facebook']"
              class="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 text-orange flex items-center justify-center rounded-full border border-orange p-1.5 md:p-2 lg:p-2"
            />
          </div>
          <!-- <a href="" class="mt-6 inline-block text-blue-500">Hire Me</a> -->
          <button
            data-aos="fade-up"
            data-aos-delay="650"
            class="text-white text-sm md:text-sm lg:text-lg px-6 md:px-8 lg:px-10 py-2 md:py-2 lg:py-2 bg-orange rounded-sm font-normal"
          >
            Hire Me
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { motionCover } from '../../config/motions/custom'
import { VueWriter } from 'vue-writer'
</script>
