<template>
  <header class="font-navigation bg-black flex flex-row justify-between items-center mx-auto  max-w-[1440px]">
    <a href="#" class="text-orange text-start font-extrabold text-base md:text-lg lg:text-3xl font-poppins ">Seanghor</a>
    <nav class="text-base md:text-lg lg:text-2xl text-white  py-2 md:py-4 lg:py-8 space-x-2 md:space-x-3 lg:space-x-8 ">
      <RouterLink to="/" class="text-orange ">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/service">Service</RouterLink>
      <RouterLink to="/skill">Skills</RouterLink>
      <RouterLink to="/about">Education</RouterLink>
      <RouterLink to="/about">Experience</RouterLink>
      <RouterLink to="/about">Contact</RouterLink>
    </nav>
  </header>



  <RouterView />
</template>


<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>