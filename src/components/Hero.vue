
<script setup lang="ts">
import sprite from '../assets/img/sprite.svg'
import { socials } from '../constants';
import avatar from '../assets/img/avatar.png'
</script>


<template>
  <section class="hero-section">
    <div class="container">
      <div class="content" data-aos="fade-up">
        <p class="above-title mb-16">Mi nombre es</p>
        <h1 class="full-name">Juan Jose <span class="primary">Caicedo.</span></h1>
        <p class="about">Durante más de 6 años, he estado aprendiendo
          continuamente en el campo del <span class="hid">desarrollo web (full-stack)</span> y experimentando con nuevas
          tecnologías. Aquí puedes ver un
          resumen de mis habilidades.</p>
        <a href="assets/resume.pdf" target="_blank" class="btn btn-outline-light download-resume-mobile">Download
          Resume</a>
        <ul class="social-icons">
          <li v-for="(item, index) in socials" :key="index">
            <a :href="item.href" target="_blank">
              <svg viewBox="0 0 24 24">
                <use :xlink:href="sprite + item.icon"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div class="image" data-aos="fade-up">
        <div class="cover">
          <svg class="lines-vector" viewBox="0 0 199 210">
            <use :xlink:href="sprite + '#lines-vector'"></use>
          </svg>
          <img class="avatar" :src="avatar" alt="Juan Jose">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 181px;
}

.hero-section .content {
  padding-top: 64px;
}

.hero-section .content .full-name {
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 55px;
  margin: 0 0 32px;
}

.hero-section .content .about {
  max-width: 538px;
  line-height: 32px;
  margin: 0 0 40px;
}

.hero-section .content .about .hid {
  color: var(--purple);
}

.hero-section .content .social-icons svg {
  fill: var(--cinder);
  transition: all .3s;
}

.hero-section .content .social-icons svg:hover {
  opacity: .7;
}

.hero-section .content .download-resume-mobile {
  display: none;
  text-align: center;
  margin-bottom: 32px;
}

.hero-section .image {
  position: relative;
  width: 100%;
  max-width: 341px;
  height: 398px;
}

.hero-section .image .cover {
  background: var(--purple-light-1);
  position: absolute;
  width: 100%;
  max-width: 341px;
  height: 398px;
  border-radius: 16px 16px 16px 20px;
}

.hero-section .image .cover svg {
  position: absolute;
  right: 0;
  top: 0;
  stroke: var(--white);
  width: 199px;
  height: 210px;
  border-top-right-radius: 16px;
}

.hero-section .image .cover:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: var(--purple);
  right: 0;
  z-index: -1;
  transform: rotate(350deg);
  animation: enter-hero-cover .8s cubic-bezier(0.42, 0, 0.12, 1.28);
  transition: all .2s;
}

.hero-section .image:hover .cover:after {
  transform: rotate(353deg);
}

.hero-section .image .avatar {
  position: relative;
  left: 0;
  top: 103px;
  border-bottom-left-radius: 16px;
}

@keyframes enter-hero-cover {
  from {
    transform: rotate(360deg)
  }

  to {
    transform: rotate(350deg)
  }
}

@media only screen and (max-width: 1050px) {
  .hero-section .content .about {
    margin: 0 64px 40px 0;
  }

  .hero-section .image {
    max-width: 308px;
    height: 370px;
  }

  .hero-section .image .cover {
    max-width: 308px;
    height: 370px;
  }

  .hero-section .image .avatar {
    top: 75px;
  }
}

@media only screen and (max-width: 1280px) {
  .hero-section .container {
    margin-top: 125px;
  }
}

@media only screen and (max-width: 992px) {
  .hero-section .content {
    padding-top: 48px;
  }

  .hero-section .content .full-name {
    font-size: 40px;
    margin: 0 0 16px;
  }

  .hero-section .image {
    max-width: 272px;
    height: 350px;
    left: 16px;
  }

  .hero-section .image .cover {
    max-width: 272px;
    height: 350px;
    right: 0;
  }

  .hero-section .image .avatar {
    top: 104px;
    width: 213px;
  }
}

@media only screen and (max-width: 768px) {
  .hero-section .container {
    flex-wrap: wrap;
    margin-top: 93px;
    padding: 0 56px;
  }

  .hero-section .content {
    order: 1;
    padding-top: 80px;
  }
}

@media only screen and (max-width: 576px) {
  .hero-section .content .full-name {
    font-size: 36px;
    margin: 0 0 8px;
  }

  .hero-section .content .about {
    margin: 0 0 32px 0;
  }

  .hero-section .content .download-resume-mobile {
    display: inline-block;
  }

  .hero-section .content .social-icons {
    margin-left: 2px;
  }
}

@media only screen and (max-width: 480px) {
  .hero-section .container {
    padding: 0 32px;
  }
}
</style>