<script setup lang="ts">
import HeaderComponent from './components/Header.vue';
import Cursor from './components/Cursor.vue';
import Hero from './components/Hero.vue';
import Service from './components/Service.vue';
import Portfolio from './components/Portfolio.vue';
import Experience from './components/Experience.vue';
import Testimonials from './components/Testimonials.vue'
import EducationSkill from './components/EducationSkill.vue';
import Contact from './components/Contact.vue';
import FooterComponent from './components/Footer.vue';
import MotionScroll from './components/MotionScroll.vue';
import AOS from 'aos';
import ScrollToTop from './components/ScrollToTop.vue';

// AOS config
AOS.init({
  once: true,
  offset: 10,
  duration: 600,
  easing: 'ease-out'
});
</script>

<template >
  <Cursor />
  <HeaderComponent />
  <main>
    <Hero />
    <MotionScroll />
    <Service />
    <Portfolio />
    <Experience />
    <Testimonials />
    <EducationSkill />
    <Contact />
  </main>
  <ScrollToTop />
  <FooterComponent />
</template>
