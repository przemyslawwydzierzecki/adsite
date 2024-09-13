<script setup lang="ts">

function openMenu() {
  const MENU = document.getElementById('mobile-menu');
  MENU.style.display = 'block';
}

function closeMenu() {
  const MENU = document.getElementById('mobile-menu');
  MENU.style.display = 'none';
}

</script>

<template>
  <div class="flex flex-wrap justify-between items-center">
    <div class="logo">
      <a href="../"><img src="../assets/images/logo.png" /></a>
    </div>
    <nav class="hidden sm:hidden md:block lg:block xl:block 2xl:block">
      <ul class="flex justify-between font-roboto font-normal	text-base text-mainColor">
        <li class="px-[12px]"><a href="#gallery">Galeria zdjęć</a></li>
        <li class="px-[12px]"><a href="#">FaQ</a></li>
      </ul>
    </nav>
    <button type="button" class="hidden sm:hidden md:block lg:block xl:block 2xl:block font-roboto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      <a href="tel:+48111222555" class="text-[15px]">Zadzwoń do nas</a>
    </button>

    <!-- mobile -->
    <div class="flex sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden flex-wrap justify-end items-center relative z-50">
      <a href="tel:+48111222555" class="pr-[20px] text-[15px] block sm:block md:hidden lg:hidden xl:block 2xl:hidden">
        <svg class="h-8 w-8 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="#282828">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      </a>

      <nav class="block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        <svg @click='openMenu()' class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#282828" viewBox="0 0 17 14">
          <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z"/>
        </svg>

        <ul id="mobile-menu" class="font-roboto font-normal	text-[20px] text-mainColor hidden fixed pt-[60px] top-0 right-0 text-right bg-white w-screen z-20 h-screen">
          <li @click='closeMenu()' class="px-[12px] absolute top-[10px] right-[-5px]">
            <svg class="h-10 w-10 text-red-500"  width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <line x1="18" y1="6" x2="6" y2="18" /> <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </li>
          <li @click='closeMenu()' class="px-[12px] border-0 border-b-[1px] py-[5px] border-neutral-9500"><a href="#gallery">Galeria zdjęć</a></li>
          <li class="px-[12px] border-0 border-b-[1px] py-[5px] border-neutral-9500"><a href="#">FaQ</a></li>
          <div class="logo absolute bottom-[20px] right-[10px]">
            <a href="../"><img src="../assets/images/logo.png" /></a>
          </div>
        </ul>
      </nav>
    </div>
    
  </div>

  
</template>

<style scoped>

</style>
