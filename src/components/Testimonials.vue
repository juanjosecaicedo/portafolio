<script setup lang="ts">
import yeider from "../assets/img/yeider.jpeg";
import andres from "../assets/img/andres.jpeg";
import jose from "../assets/img/jose.jpeg";
</script>

<template>
  <section class="testimonial-section" id="testimonials">
    <div class="container">
      <div class="section-name" data-aos="fade-up">
        <p class="above-title">Mis clientes</p>
        <h4 class="title">Testimonios</h4>
      </div>
      <div class="testimonial-item-wrapper">
        <div class="testimonial-item" data-aos="fade-up" data-aos-delay="50">
          <img class="avatar" :src="andres" alt="Andres Solies">
          <p class="text">Nos complació mucho saber cómo resolvió los problemas y desafíos de la interfaz de usuario de nuestros sitios web.</p>
          <p class="name">Andres Solis</p>
          <p class="tag job-title">Diseñador</p>
        </div>
        <div class="testimonial-item" data-aos="fade-up" data-aos-delay="100">
          <img class="avatar" :src="yeider" alt="Yeider Mina">
          <p class="text">Me alegro de haber decidido trabajar contigo. El proyecto fue entregado a tiempo con todos los requisitos.</p>
          <p class="name">Yeider Adrian Mina</p>
          <p class="tag job-title">Developer <span class="hid">(full-stack)</span></p>
        </div>
        <div class="testimonial-item" data-aos="fade-up" data-aos-delay="150">
          <img class="avatar" :src="jose" alt="Jose Mera">
          <p class="text">El desarrollo de los proyectos siempre se enfrentó a dificultades, pero las manejaste bien.
          </p>
          <p class="name">Jose Mera</p>
          <p class="tag job-title">Developer</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-section {
  padding: 104px 0 152px;
}

.testimonial-section .testimonial-item-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 136px;
}

.testimonial-section .testimonial-item-wrapper .testimonial-item {
  background: var(--white);
  border-radius: 8px;
  padding: 83px 52px 25px 32px;
  position: relative;
  min-width: 357px;
}

[data-theme="dark"] .testimonial-section .testimonial-item-wrapper .testimonial-item {
  background: var(--licorice);
}

.testimonial-section .testimonial-item-wrapper .testimonial-item:not(:last-of-type) {
  margin-right: 48px;
}

.testimonial-section .testimonial-item-wrapper .testimonial-item .avatar {
  border-radius: 100px;
  border: 2px solid var(--white);
  position: absolute;
  top: -48px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
}

[data-theme="dark"] .testimonial-section .testimonial-item-wrapper .testimonial-item .avatar {
  border: 2px solid var(--midnight-express);
}

.testimonial-section .testimonial-item-wrapper .testimonial-item .text {
  padding-bottom: 48px;
}

.testimonial-section .testimonial-item-wrapper .testimonial-item .name {
  font-family: 'Plus Jakarta Sans', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  padding-bottom: 8px;
}

.testimonial-section .testimonial-item-wrapper .testimonial-item .job-title {
  background: var(--light);
  border: none;
  display: inline-block;
}
.testimonial-section .testimonial-item-wrapper .testimonial-item .hid {
  color: var(--purple);
}

@media only screen and (max-width: 1150px) {
  .testimonial-section .testimonial-item-wrapper {
    flex-wrap: wrap;
  }

  .testimonial-section .testimonial-item-wrapper .testimonial-item {
    min-width: initial;
    width: calc(50% - 16px);
  }

  .testimonial-section .testimonial-item-wrapper .testimonial-item:not(:last-of-type) {
    margin-right: 0;
    margin-bottom: 80px;
  }

  .testimonial-section .testimonial-item-wrapper .testimonial-item:first-of-type {
    margin-right: 32px;
  }
}

@media only screen and (max-width: 1280px) {
  .testimonial-section .testimonial-item-wrapper .testimonial-item {
    min-width: initial;
  }

  .testimonial-section .testimonial-item-wrapper .testimonial-item:not(:last-of-type) {
    margin-right: 32px;
  }
}

@media only screen and (max-width: 992px) {
  .testimonial-section {
    padding: 80px 0 88px;
  }

  .testimonial-section .testimonial-item-wrapper {
    padding-top: 104px;
  }
}

@media only screen and (max-width: 768px) {
  .testimonial-section .testimonial-item-wrapper .testimonial-item {
    width: 100%;
  }

  .testimonial-section .testimonial-item-wrapper .testimonial-item:first-of-type {
    margin-right: 0;
  }
}
</style>