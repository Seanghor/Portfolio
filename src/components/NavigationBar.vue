<template>
  <header class="font-navigation flex justify-between items-center mx-auto max-w-[1440px] p-4">
    <!-- Logo -->
    <a href="#" class="text-orange font-extrabold text-base md:text-lg lg:text-3xl font-poppins">
      Seanghor
    </a>

    <!-- Hamburger Menu Icon (shown on small screens) -->
    <div class="md:hidden flex items-center">
      <button @click="toggleMenu" class="text-white focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>

    <!-- Navigation Links (hidden on small screens) -->
    <nav
      class="hidden md:flex text-base md:text-lg lg:text-2xl text-white py-2 md:py-4 lg:py-8 space-x-2 md:space-x-3 lg:space-x-8"
    >
      <RouterLink to="/" class="text-orange font-semibold">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/service">Service</RouterLink>
      <RouterLink to="/skill">Skills</RouterLink>
      <RouterLink to="/education">Education</RouterLink>
      <RouterLink to="/experience">Experience</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>

    <!-- Dropdown Menu (visible on small screens when toggled) -->
    <nav v-if="isMenuOpen" class="md:hidden flex flex-col bg-gray-800 text-white space-y-2 p-4 absolute top-16 left-0 right-0 z-10">
      <RouterLink to="/" class="text-orange font-semibold" @click="closeMenu">Home</RouterLink>
      <RouterLink to="/about" @click="closeMenu">About</RouterLink>
      <RouterLink to="/service" @click="closeMenu">Service</RouterLink>
      <RouterLink to="/skill" @click="closeMenu">Skills</RouterLink>
      <RouterLink to="/education" @click="closeMenu">Education</RouterLink>
      <RouterLink to="/experience" @click="closeMenu">Experience</RouterLink>
      <RouterLink to="/contact" @click="closeMenu">Contact</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

// State to manage the dropdown menu
const isMenuOpen = ref(false);

// Toggle the hamburger menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Close the menu when a link is clicked
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
/* Optional: Add some transition effects for the dropdown menu */
nav {
  transition: all 0.3s ease;
}
</style>
