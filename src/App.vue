<script setup>
import { onMounted, onBeforeMount } from 'vue';

import HeaderComponent from './components/Header.vue';
import Cursor from './components/Cursor.vue';
import Hero from './components/Hero.vue';
import Service from './components/Service.vue';
import Portfolio from './components/Portfolio.vue';
import Experience from './components/Experience.vue';
import Testimonials from './components/Testimonials.vue'
import EducationSkill from './components/EducationSkill.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import AOS from 'aos';

// AOS config
AOS.init({
  once: true,
  offset: 10,
  duration: 600,
  easing: 'cubic-bezier(0.42, 0, 0.12, 1.28)'
});

</script>

<template >
  <Cursor />
  <HeaderComponent />
  <main>
    <Hero />
    <Service />
    <Portfolio />
    <Experience />
    <Testimonials />
    <EducationSkill />
    <Contact />
  </main>
  <Footer />
</template>
