<template>
  <section class="text-white max-w-[1440px] mx-auto px-6 md:px-6 lg:px-6 large:px-0">
    <!-- content -->
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-y-10 lg:gap-10">
      <!-- Image Section -->
      <div class="col-span-ful md:col-span-1 lg:col-span-1 row-span-full lg:row-span-7">
        <img
          src="../../../public/aboutme.JPG"
          alt="About Me"
          class="shadow-lg rounded-md h-auto object-contain"
        />
      </div>

      <!-- Header Section (moves below the image on small screens) -->
      <div
        data-aos="zoom-in"
        class="col-span-full md:col-span-3 lg:col-span-2 inline-block mx-auto mt-10 md:mt-10 lg:mt-0"
      >
        <div class="">
          <h1 class="text-sm-title md:text-md-title lg:text-lg-title font-bold">About Me</h1>
          <div class="space-y-1 md:space-y-1 lg:space-y-1.5">
            <div class="h-[2px] md:h-[3px] lg:h-[4px] rounded-md bg-orange w-full" />
            <div class="h-[2px] md:h-[3px] lg:h-[4px] mx-2 rounded-md bg-orange" />
          </div>
        </div>
      </div>

      <!-- Paragraph Section -->
      <div class="col-span-full md:col-span-full lg:col-span-2">
        <div>
          <h6 class="text-h3-sm md:text-h3-md lg:text-h3-lg font-semibold text-primary">
            Coding is my passion
          </h6>
          <div class="whitespace-normal mt-2 text-wrap w-full text-left">
            <p class="leading-relaxed md:leading-relaxed lg:leading-relaxed">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
              McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
              through the cites of the word in classical literature, discovered the undoubtable
              source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero. BC.
            </p>
          </div>
        </div>
      </div>

      <!-- Contact Section (moves to the right of the image on medium screens) -->
      <div
        class="col-span-full md:col-span-2 lg:col-span-2 md:row-start-1 lg:row-start-auto pl-0 md:pl-10 lg:pl-0"
      >
        <div
          class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 flex-col text-xs md:text-base lg:text-lg"
        >
          <!-- DOB -->
          <div
            class="flex items-center gap-2 md:gap-3 lg:gap-4 p-2 md:p-3 lg:p-4 rounded-lg shadow-md"
          >
            <Icon icon="lets-icons:date-range-light" class="text-orange w-7 h-7" />
            <p class="text-gray-200">
              <span class="font-medium text-white">Date of Birth:</span>
              <span class="ml-2">23 November 2001</span>
            </p>
          </div>

          <!-- Address -->
          <div
            class="flex items-center gap-2 md:gap-3 lg:gap-4 p-2 md:p-3 lg:p-4 rounded-lg shadow-md"
          >
            <Icon icon="mdi:location" class="text-orange w-7 h-7" />
            <p class="text-gray-200">
              <span class="font-semibold text-white">Address:</span>
              <span class="ml-2">Phnom Penh, Cambodia</span>
            </p>
          </div>

          <!-- Email -->
          <div
            class="flex items-center gap-2 md:gap-3 lg:gap-4 p-2 md:p-3 lg:p-4 rounded-lg shadow-md"
          >
            <Icon icon="ic:outline-email" class="text-orange w-7 h-7" />
            <p class="text-gray-200">
              <span class="font-semibold text-white">Email:</span>
              <span class="ml-2">hsh.haiseanghor@gmail.com</span>
            </p>
          </div>

          <!-- Phone -->
          <div
            class="flex items-center gap-2 md:gap-3 lg:gap-4 p-2 md:p-3 lg:p-4 rounded-lg shadow-md"
          >
            <Icon icon="majesticons:phone-dial-line" class="text-orange w-7 h-7" />
            <p class="text-gray-200">
              <span class="font-semibold text-white">Phone:</span>
              <span class="ml-2">+855 96 782 7020</span>
            </p>
          </div>

          <!-- language -->
          <div
            class="flex items-center gap-2 md:gap-3 lg:gap-4 p-2 md:p-3 lg:p-4 rounded-lg shadow-md"
          >
            <Icon icon="mdi:spoken-language" class="text-orange w-7 h-7" />
            <p class="text-gray-200">
              <span class="font-semibold text-white">language:</span>
              <span class="ml-2">Khmer, English</span>
            </p>
          </div>

          <!-- Example -->
          <div
            class="flex items-center gap-2 md:gap-3 lg:gap-4 p-2 md:p-3 lg:p-4 rounded-lg shadow-md"
          >
            <Icon icon="mdi:spoken-language" class="text-orange w-7 h-7" />
            <p class="text-gray-200">
              <span class="font-semibold text-white">language:</span>
              <span class="ml-2">Khmer, English</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
