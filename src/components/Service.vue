<script setup lang="ts">
import { services } from '../constants';
import sprite from './../assets/img/sprite.svg';
</script>


<template>
  <section class="service-section" id="services">
    <div class="container">
      <div class="section-name center" data-aos="fade-up">
        <div class="content">
          <p class="above-title">Servicios</p>
          <h4 class="title">Especializado en</h4>
        </div>
      </div>
      <div class="service-item-wrapper">
        <div class="service-item" v-for="(item, index) in services" :key="index" data-aos="fade-up" data-aos-delay="200">
          <div class="icon">
            <svg viewBox="0 0 25 24">
              <use :xlink:href="sprite + item.icon"></use>
            </svg>
          </div>
          <h4 class="title" v-text="item.title"></h4>
          <p class="body">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-section {
  background: var(--light);
  padding: 114px 0 184px;
  margin: 196px 0 0;
}

.service-section .service-item-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 104px 0 0;
}

.service-section .service-item {
  background: var(--white);
  border-radius: 8px;
  padding: 56px 48px;
  text-align: center;
  min-width: 357px;
}

[data-theme="dark"] .service-section .service-item {
  background: var(--licorice);
}

.service-section .service-item:not(:last-of-type) {
  margin-right: 48px;
}

.service-section .service-item .icon {
  width: 56px;
  height: 56px;
  padding: 16px;
  background: var(--purple-light-2);
  border-radius: 16px;
  margin: 0 auto 24px;
}

.service-section .service-item .icon svg {
  fill: var(--purple);
}

.service-section .service-item .title {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 16px;
}

.service-section .service-item .body {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

@media only screen and (max-width: 1150px) {
  .service-section .service-item-wrapper {
    flex-wrap: wrap;
  }

  .service-section .service-item {
    min-width: initial;
    width: calc(50% - 16px);
    margin-bottom: 32px;
  }

  .service-section .service-item:not(:last-of-type) {
    margin-right: 0;
  }

  .service-section .service-item:first-of-type {
    margin-right: 32px;
  }
}

@media only screen and (max-width: 1280px) {
  .service-section .service-item {
    min-width: 325px;
  }

  .service-section .service-item:not(:last-of-type) {
    margin-right: 32px;
  }
}

@media only screen and (max-width: 992px) {
  .service-section {
    padding: 82px 0 88px;
    margin: 164px 0 0;
  }
}

@media only screen and (max-width: 768px) {
  .service-section .service-item {
    width: 100%;
  }

  .service-section .service-item:first-of-type {
    margin-right: 0;
  }
}

@media only screen and (max-width: 576px) {
  .service-section {
    margin: 96px 0 0;
  }

  .service-section .service-item-wrapper {
    padding: 80px 0 0;
  }
}
</style>