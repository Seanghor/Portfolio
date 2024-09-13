<template>
  <section class="flex flex-row items-center justify-between space-x-8 max-w-[1440px] mx-auto">
    <!-- Ellipse-shaped image container (height 10% longer than width) -->
    <div class="w-[40%] h-auto">
      <div class="w-[500px] h-auto rounded-[60%_/_60%] overflow-hidden">
        <img src="../../public/main.jpg" alt="Placeholder" class="w-full h-full object-cover" />
      </div>
    </div>
    <div class="text-white w-[60%]">
      <h1 class="text-4xl font-semibold">Hi, it's <span class="text-orange">Seanghor</span></h1>
      <h3 class="text-2xl mb-4 font-medium">
        I am a <span class="text-orange">Full Stack Developer</span>
      </h3>
      <p class="mb-6">
        I am a dedicated full-stack developer with strong technical skills in both backend and
        frontend technologies for web applications. Passionate about building seamless,
        user-friendly solutions, I thrive in fast-paced environments and adapt quickly to new
        technologies. My expertise in backend and frontend frameworks drives my commitment to
        delivering exceptional technology solutions.
      </p>

      <!-- Social Blocks -->
      <div class="flex flex-col space-y-2">
        <h3>Facebook</h3>
        <h3>Github</h3>
        <h3>Telegram</h3>
        <h3>LinkedIn</h3>
      </div>
      <a href="" class="mt-6 inline-block text-blue-500">Hire Me</a>
      hello
      <div>
        <font-awesome-icon :icon="['fas', 'coffee']" /> <!-- Solid icon -->
        <font-awesome-icon :icon="['far', 'address-book']" /> <!-- Regular icon -->
        <font-awesome-icon :icon="['fab', 'github']" /> <!-- Brand icon -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>