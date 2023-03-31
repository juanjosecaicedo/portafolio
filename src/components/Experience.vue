<script setup>
import { experience } from '../constants';
import { ref } from 'vue';
import sprite from '../assets/img/sprite.svg';

const active = ref('apple');
const topSelector = ref(0)

function setActive($event, tab) {
  $event.preventDefault();
  window.innerWidth > 999 ? topSelector.value = $event.target.offsetTop + 'px' : topSelector.value = null;
  topSelector.value = $event.target.offsetTop + 'px';
  active.value = tab;
}

</script>
<template>
  <section class="experience-section" id="experience">
    <div class="container">
      <div class="side">
        <div class="section-name" data-aos="fade-up">
          <p class="above-title">Trayectoria</p>
          <h4 class="title">Experiencia laboral</h4>
        </div>
        <div class="companies-list">
          <div class="selector" :style="{top: topSelector}">
            <svg viewBox="0 0 24 24">
              <use :xlink:href="sprite + '#arrow-right'"></use>
            </svg>
          </div>
          <ul data-aos="fade-up" data-aos-delay="50">
            <li v-for="(item, index) in experience" :key="index" :data-tab="item.tab"
              :class="[active === item.tab ? 'active' : '']" @click="setActive($event, item.tab)">{{ item.title }}</li>
          </ul>
        </div>
      </div>
      <div v-for="(item, index) in experience" :key="index" :class="[active === item.tab ? 'active' : '', 'content']"
        id="apple">
        <div class="headline" data-aos-delay="50" data-aos="fade-up">
          <h4 class="job-title">{{ item.jobTitle }} <a :href="item.link" target="_blank"><span class="company-name">{{ item.title }}</span></a></h4>
          <p class="location">{{ item.location }}</p>
          <p class="period">{{ item.date }}</p>
          <ul class="stack-list">
            <li v-for="(tag, indexTag) in item.stackList" :key="indexTag" class="tag">{{ tag }}</li>        
          </ul>
        </div>
        <div class="line"></div>
        <ul class="responsibilities" data-aos-delay="50" data-aos="fade-up">
          <li v-for="(responsibilite, indexRes) in item.responsibilities" :key="indexRes" >{{ responsibilite }}</li>         
        </ul>
      </div>
      <div class="content" id="microsoft">
        <div class="headline" data-aos-delay="50" data-aos="fade-up">
          <h4 class="job-title">Front-end developer <span class="company-name"> Microsoft</span></h4>
          <p class="location">Washington, United States</p>
          <p class="period">Nov 2018 - Feb 2020 · Full-time</p>
          <ul class="stack-list">
            <li class="tag">ASP.NET</li>
            <li class="tag">Python</li>
          </ul>
        </div>
        <div class="line"></div>
        <ul class="responsibilities">
          <li>Vivamus quis dolor rutrum, mattis elit eu, cursus erat. Nunc vulputate ex </li>
          <li>Praesent venenatis a quam at mollis. Aliquam erat volutpat.</li>
          <li>Maecenas egestas elit eget enim mattis aliquet eget vitae felis..</li>
          <li>Nam sodales ultrices nisl sed dictum. Vestibulum ante ipsum primis in faucibus ...</li>
        </ul>
      </div>
      <div class="content" id="facebook">
        <div class="headline" data-aos-delay="50" data-aos="fade-up">
          <h4 class="job-title">Front-end developer <span class="company-name"> Facebook</span></h4>
          <p class="location">California, United States</p>
          <p class="period">Feb 2018 - Feb 2020 · Full-time</p>
          <ul class="stack-list">
            <li class="tag">PHP</li>
            <li class="tag">React</li>
          </ul>
        </div>
        <div class="line"></div>
        <ul class="responsibilities">
          <li>Vivamus quis dolor rutrum, mattis elit eu, cursus erat. Nunc vulputate ex </li>
          <li>Praesent venenatis a quam at mollis. Aliquam erat volutpat.</li>
          <li>Maecenas egestas elit eget enim mattis aliquet eget vitae felis..</li>
          <li>Nam sodales ultrices nisl sed dictum. Vestibulum ante ipsum primis in faucibus ...</li>
        </ul>
      </div>
      <div class="content" id="slack">
        <div class="headline" data-aos-delay="50" data-aos="fade-up">
          <h4 class="job-title">Front-end developer <span class="company-name">Slack</span></h4>
          <p class="location">Irvine, United States</p>
          <p class="period">Nov 2014 - Nov 2017 · Full-time</p>
          <ul class="stack-list">
            <li class="tag">Angular</li>
            <li class="tag">Node.js</li>
          </ul>
        </div>
        <div class="line"></div>
        <ul class="responsibilities">
          <li>Vivamus quis dolor rutrum, mattis elit eu, cursus erat. Nunc vulputate ex </li>
          <li>Praesent venenatis a quam at mollis. Aliquam erat volutpat.</li>
          <li>Maecenas egestas elit eget enim mattis aliquet eget vitae felis..</li>
          <li>Nam sodales ultrices nisl sed dictum. Vestibulum ante ipsum primis in faucibus ...</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  padding: 104px 0 120px;
  background: var(--light);
}

.experience-section .container {
  display: flex;
}

.experience-section .side {
  width: 100%;
  max-width: 300px;
  margin-right: 144px;
  position: relative;
}

.experience-section .side .companies-list {
  position: relative;
}

.experience-section .side .companies-list ul {
  margin-top: 80px;
  position: relative;
}

.experience-section .side .companies-list ul li {
  margin-bottom: 8px;
  cursor: pointer;
  padding: 14px 24px;
}

.experience-section .side .companies-list ul li.active {
  font-weight: 500;
  color: var(--purple);
}

.experience-section .side .companies-list .selector {
  background: var(--white);
  width: 300px;
  height: 56px;
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  transition: all .2s;
  z-index: 0;
  border-radius: 4px;
}

[data-theme="dark"] .experience-section .side .companies-list .selector {
  background: var(--purple-light-2);
}

.experience-section .side .companies-list .selector svg {
  width: 24px;
  height: 24px;
  fill: var(--purple);
  position: absolute;
  right: 16px;
  top: 16px;
}

.experience-section .content {
  padding-top: 32px;
  visibility: hidden;
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  transform: translateY(40px);
}

.experience-section .content.active {
  position: initial;
  visibility: visible;
  opacity: 1;
  width: auto;
  height: auto;
  transform: translateY(0);
  transition: all .4s;
}

.experience-section .content .headline .job-title {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  padding-bottom: 12px;
}

.experience-section .content .headline .company-name {
  padding-bottom: 6px;
  border-bottom: 1px solid var(--cinder-light);
}

.experience-section .content .headline .location {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  padding-bottom: 16px;
}

.experience-section .content .headline .period {
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: var(--cinder-light);
}

.experience-section .content .headline .stack-list {
  display: flex;
  align-items: center;
  padding: 16px 0;
}

.experience-section .content .headline .stack-list li {
  margin-right: 16px;
  color: var(--cinder);
}

.experience-section .content .line {
  display: inline-block;
  border-bottom: 1px solid var(--light-2);
  width: 100%;
  margin: 16px 0 28px;
}

.experience-section .content .responsibilities {
  padding-left: 28px;
}

.experience-section .content .responsibilities li {
  padding-bottom: 12px;
  position: relative;
}

.experience-section .content .responsibilities li:after {
  content: '';
  position: absolute;
  left: -28px;
  top: 11px;
  width: 10px;
  height: 2px;
  background: var(--light-4);
}
</style>