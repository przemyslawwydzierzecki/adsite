<script setup lang="ts">
import Header from './components/Header.vue'
import FooterTop from './components/FooterTop.vue'
import FooterBottom from './components/FooterBottom.vue'
import Main from './components/Main.vue'

import { onMounted, onUnmounted, ref } from "vue";
import debounce from "lodash.debounce"; 

  let scrollTopButton = ref(null);
  let handleDebouncedScroll = ref(null);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      scrollTopButton.value.classList.remove("invisible");
    } else {
      scrollTopButton.value.classList.add("invisible");
    }
  };

  onMounted(() => {
    handleDebouncedScroll = debounce(handleScroll, 100); 
    window.addEventListener('scroll', handleDebouncedScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleDebouncedScroll);; 
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

</script>

<template>

  <div class="fixed-item container mx-auto relative">
    <img class="absolute right-0 z-0 hidden sm:hidde md:block lg:block xl:block 2xl:block top-0 md:top-[-90px] 2xl:top-0" src="./assets/images/lines.png" />
  </div>

  <header class="container mx-auto py-[16px] relative z-10">
    <Header />
  </header>

  <main class="2xl:pb-[80px]">
    <div class="pb-[20px] sm:pb-[40px] 2xl:pb-[120px] fixed-item mx-auto">
      <img class="absolute right-0 bottom-[40%] sm:bottom-[30%] md:bottom-[230px] 2xl:bottom-[150px] z-0" src="./assets/images/cars.png" />
    </div>
    <div class="container mx-auto">
      <Main></Main>
    </div>
  </main>

  

  <footer class="bg-[#282828]">
    <div class="border-0 border-b border-solid border-[#fff]">
      <div class="container mx-auto">
        <FooterTop />
      </div>
    </div>
    
    <div class="container mx-auto">
      <FooterBottom />
    </div>    
  </footer>

  <div ref="scrollTopButton" class="invisible fixed flex justify-end bottom-[10px] right-[10px] pr-3 lg:pr-5 transition">
    <div class="text-gray-400 transition">
      <button @click="scrollToTop()" role="button" aria-label="scroll to top of the page">
        <svg class="w-8 h-8 bg-[#0147ff8f] hover:bg-[#0147ff] rounded-full p-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 10 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
        </svg>
      </button>
    </div>
  </div>

</template>

<style scoped>

</style>
