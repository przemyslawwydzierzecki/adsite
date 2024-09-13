<script setup lang="ts">

import { ref, onMounted } from "vue";
import { ListSlickMethods, VueSlickCarousel } from "vue-slick-ts";
import type { SlickInstance } from "vue-slick-ts";
import "vue-slick-ts/dist/css/slick.css";
import "vue-slick-ts/dist/css/slick-theme.css";

const carousel = ref<SlickInstance | null>(null);

const handleInit = (e: JQuery.Event, instance: SlickInstance) => {
  console.log(e, instance);
};


</script>

<template>
  <section id="gallery">
    <div class="mt-[250px]">
      <p class="text-[21.5px] leading-[32.25px] text-[#0147FF] font-robotoCondensed">
        Prezentacja firmy
      </p>
      <p class="font-bebas text-[40px] leading-[48px] text-mainColor">
        Zobacz naszą Galerię zdjęć
      </p>
    </div>

    <div class="mt-[25px]">
      <span id="first" class="underline cursor-pointer text-[#0147FF] font-roboto text-[15px] leading-[22.5px] font-semibold mr-[50px]">Samochody osobowe</span>   
      <span id="second" class="cursor-pointer font-roboto text-[15px] leading-[22.5px]">Samochody dostawcze</span>
    </div>

    <div class="carousel mt-[25px] 2xl:mt-[80px] text-center">
      <VueSlickCarousel ref="carousel" @init="handleInit" :draggable="true" :fade="true" :arrows="false" :autoplay="true" :autoplay-speed="4000" :animating="true" :cssTransitions="true" :slides-per-row="2" :swipeToSlide="true" :slides-to-show="1" :dots="true" :center-mode="true">
        <div><img src="../assets/images/slides/Images-2.png" /></div>
        <div><img src="../assets/images/slides/Images-1.png" /></div>
        <div><img src="../assets/images/slides/Images.png" /></div>
        <div><img src="../assets/images/slides/Images-2.png" /></div>
        <div><img src="../assets/images/slides/Images-1.png" /></div>
        <div><img src="../assets/images/slides/Images.png" /></div>
        <div><img src="../assets/images/slides/Images-2.png" /></div>
        <div><img src="../assets/images/slides/Images-1.png" /></div>
        <div><img src="../assets/images/slides/Images.png" /></div>
        <div><img src="../assets/images/slides/Images-2.png" /></div>
        <div><img src="../assets/images/slides/Images-1.png" /></div>
        <div><img src="../assets/images/slides/Images.png" /></div>
      </VueSlickCarousel>
    </div>
    
  </section>
</template>

<style scoped>  
</style>
