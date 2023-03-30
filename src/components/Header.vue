
<script setup>
import { onMounted, reactive, ref } from "vue";

import resume from "../assets/resume.pdf";
import sprite from "../assets/img/sprite.svg";
import { headerLink } from "../constants"

const active = ref('#services');

// Dark theme
onMounted(() => {
  let prevActiveTheme = localStorage.getItem('theme-color');
  document.documentElement.setAttribute("data-theme", prevActiveTheme ? prevActiveTheme : "light");

});

function themeToggle() {
  let currentTheme = document.documentElement.getAttribute("data-theme");
  let switchToTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("theme-color", switchToTheme)
  document.documentElement.setAttribute("data-theme", switchToTheme);
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="logo" data-aos-delay="200" data-aos="fade-down">
        <svg viewBox="0 0 114 41">
          <use :xlink:href="sprite + '#logo'"></use>
        </svg>
      </div>
      <nav class="nav">
        <ul class="nav-links">

          <li v-for="(item, index) in headerLink.link" :key="index"
            :class="[active === item.link ? 'active' : '', item.class]" :data-aos-delay="item.aosDelay"
            data-aos="fade-down" @click="active = item.link">
            <a :href=item.link>{{ item.text }}</a>
          </li>
          <li data-aos-delay="400" data-aos="fade-down" class="more-links">
            <svg viewBox="0 0 12 3">
              <use :xlink:href="sprite + '#more-links'"></use>
            </svg>
            <ul class="menu-list">
              <li v-for="(item, index) in headerLink.moreLink" :key="index" :class="item.class">
                <a :href="item.href">{{ item.text }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="right-content" data-aos-delay="500" data-aos="fade-down">
        <div class="theme-color-toggle" @click="themeToggle">
          <svg class="moon" viewBox="0 0 24 24">
            <use :xlink:href="sprite + '#moon-icon'"></use>
          </svg>
          <svg class="sun" viewBox="0 0 24 24">
            <use :xlink:href="sprite + '#sun-icon'"></use>
          </svg>
        </div>
        <a :href="resume" target="_blank" class="btn btn-outline-light download-resume">Resumen</a>
        <svg class="mobile-menu-toggle" viewBox="0 0 24 24">
          <use :xlink:href="sprite + '#menu'"></use>
        </svg>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 10;
  margin-top: 25px;
}

.header.sticky {
  background: rgba(255, 255, 255, .85);
  backdrop-filter: blur(5px);
  border-bottom: 1px solid var(--light-2);
}

[data-theme="dark"] .header.sticky {
  background: rgba(40, 45, 63, .85);
}

.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header .logo {
  width: 113px;
  height: 40px;
  fill: var(--cinder);
  cursor: pointer;
}

.header .nav .nav-links {
  display: flex;
  align-items: center;
  line-height: 19px;
}

.header .nav .nav-links li:not(:last-of-type) {
  margin-right: 56px;
}

.header .nav .nav-links li.active {
  color: var(--purple);
}

.header .nav .nav-links li.mobile-link {
  display: none;
}

.header .nav .nav-links li.more-links {
  position: relative;
  cursor: pointer;
}

.header .nav .nav-links li.more-links svg {
  width: 12px;
  height: 3px;
  fill: var(--cinder);
}

.header .nav .nav-links li.more-links .menu-list {
  position: absolute;
  background: var(--white);
  border: 1px solid var(--light-2);
  top: 60px;
  left: -3px;
  padding: 20px;
  border-radius: 8px;
  visibility: hidden;
  opacity: 0;
  transition: all .2s;
}

[data-theme="dark"] .header .nav .nav-links li.more-links .menu-list {
  background: var(--midnight-express);
}

/* Fix hover issue */
.header .nav .nav-links li.more-links .menu-list:after {
  content: '';
  position: absolute;
  top: -100%;
  left: -32px;
  width: 100px;
  height: 129px;
}

.header.sticky .nav .nav-links li.more-links .menu-list {
  border-radius: 0 0 8px 8px;
  box-shadow: 0 1px 20px rgba(0, 0, 0, .02);
}

.header .nav .nav-links li.more-links .menu-list li:not(:last-of-type) {
  padding-bottom: 16px;
}

.header .nav .nav-links li.more-links:hover .menu-list {
  top: 50px;
  opacity: 1;
  visibility: visible;
}

.header .right-content {
  display: flex;
  align-items: center;
}

.header .theme-color-toggle {
  margin-right: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header .theme-color-toggle svg {
  width: 24px;
  height: 24px;
  fill: var(--cinder);
  cursor: pointer;
  transition: all .2s;
}

.header .theme-color-toggle .sun {
  visibility: hidden;
  opacity: 0;
  transform: scale(0);
  position: absolute;
}

.header .mobile-menu-toggle {
  width: 24px;
  height: 24px;
  fill: var(--cinder);
  cursor: pointer;
  display: none;
}

[data-theme="dark"] .header .theme-color-toggle .sun {
  visibility: visible;
  opacity: 1;
  transform: scale(1);
  position: initial;
}

[data-theme="dark"] .header .theme-color-toggle .moon {
  visibility: hidden;
  opacity: 0;
  transform: scale(0);
  position: absolute;
}

[data-theme="dark"] .header .mobile-menu-toggle {
  fill: var(--white);
}
</style>