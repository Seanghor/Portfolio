<template>
  <section class="text-white max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <!-- Left side -->
      <div class="w-full text-lg leading-relaxed">
        <h2 class="text-3xl md:text-4xl text-center md:text-left lg:text-left font-semibold mb-8 md:mb-8 lg:mb-14">
          Get in Touch
        </h2>
        <p class="mb-4 md:mb-6 lg:mb-10 text-gray-300 pr-0 md:pr-8 lg:pr-10">
          Feel free to reach out by filling in the form on the right. We’re here to help and answer
          any questions you may have!
        </p>
        <div class="flex flex-row space-x-4">
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
      </div>

      <!-- Form -->
      <div class="rounded-lg">
        <form class="space-y-5">
          <!-- Email -->
          <div class="flex items-center border-b border-orange py-2">
            <input
              class="appearance-none focus:ring-black bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              id="user_subject"
              name="user_subject"
              placeholder="Email"
              aria-label="Email Address"
              required
            />
          </div>

          <!-- Subject -->
          <div class="flex items-center border-b border-orange py-2">
            <input
              class="appearance-none focus:ring-black bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              id="user_subject"
              name="user_subject"
              placeholder="Subject"
              aria-label="Subject"
              required
            />
          </div>

          <!-- Message -->
          <div class="flex items-center border-b border-orange py-2">
            <textarea
              id="message"
              name="user_message"
              rows="6"
              class="appearance-none focus:ring-black bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div class="text-center flex justify-end items-end">
            <button
              type="submit"
              class="text-whiteLight text-sm-btn md:text-md-btn lg:text-lg-btn uppercase bg-orange hover:bg-orange-600 flex justify-center items-center rounded-sm py-2 px-5 md:py-3 md:px-7 lg:py-3 transition-all duration-500 transform hover:scale-105 shadow-lg"
            >
              Submiit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

  <script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
  
  