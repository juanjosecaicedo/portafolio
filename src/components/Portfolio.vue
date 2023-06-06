<script setup lang="ts">

import { register } from "swiper/element"

import 'swiper/css';
import 'swiper/element/css/navigation';
import sprite from '../assets/img/sprite.svg';
import { portfolio } from '../constants/index';
import { Ref, onMounted, ref } from 'vue';

const swiper: Ref = ref(null);
const obj  = {
  swiper: {}
};

register();
onMounted(() => {
  const swiperEl = swiper.value;
  const swiperParams = {
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      1151: {
        slidesPerView: 3,
        spaceBetween: 56,
      }
    }
  }

  Object.assign(swiperEl, swiperParams);
  swiperEl.initialize();
  obj.swiper = swiperEl.swiper;

  document.querySelector('.slider-navigation .next')?.addEventListener('click', function () {
    swiperEl.swiper.slideNext();
  })
  document.querySelector('.slider-navigation .prev')?.addEventListener('click', function () {
    swiperEl.swiper.slidePrev();
  })
})

</script>

<template>
  <section class="portfolio-section" id="portfolios">
    <div class="container">
      <div class="section-name" data-aos="fade-up" data-aos-delay="200">
        <div class="content">
          <p class="above-title">Mis trabajos</p>
          <h4 class="title">Portafolios</h4>
        </div>
        <div class="slider-navigation">
          <div class="prev" ref="prev">
            <svg viewBox="0 0 24 24">
              <use :xlink:href="sprite + '#arrow-left'"></use>
            </svg>
          </div>
          <div class="next" ref="next">
            <svg viewBox="0 0 24 24">
              <use :xlink:href="sprite + '#arrow-right'"></use>
            </svg>
          </div>
        </div>
      </div>
      <div class="portfolio-item-wrapper">
        <!-- swiper  -->
        <swiper-container ref="swiper" init="false" :slides-per-view="3" :space-between="10" navigation="true">
          <swiper-slide v-for="(item, index) in portfolio" :key="index">
            <article class="portfolio-item">
              <figure>
                <img :src="item.img">
              </figure>
              <div class="detail">
                <h4 class="title">{{ item.title }}</h4>
                <div class="bottom">
                  <span class="tag" v-for="(tag, i) in item.tag" :key="i">{{ tag }}</span>
                  <a class="link" :href="item.link" target="_blank">
                    <svg viewBox="0 0 24 24">
                      <use :xlink:href="sprite + '#link'"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </section>
</template>
<style scoped>
.portfolio-section {
  padding: 104px 0 176px;
}

.portfolio-section .section-name {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.portfolio-section .slider-navigation {
  display: flex;
  align-items: center;
}

.portfolio-section .slider-navigation .prev {
  margin-right: 16px;
}

.portfolio-section .slider-navigation .prev,
.portfolio-section .slider-navigation .next {
  width: 40px;
  height: 40px;
  background: var(--purple-light-2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

[data-theme="dark"] .portfolio-section .slider-navigation .prev,
[data-theme="dark"] .portfolio-section .slider-navigation .next {
  background: var(--licorice);
}

.portfolio-section .slider-navigation .prev.swiper-button-disabled,
.portfolio-section .slider-navigation .next.swiper-button-disabled {
  opacity: .5;
}

.portfolio-section .slider-navigation .prev svg,
.portfolio-section .slider-navigation .next svg {
  width: 24px;
  height: 24px;
  fill: var(--purple);
}

.portfolio-section .portfolio-item-wrapper {
  margin-top: 144px;
}

.portfolio-section .portfolio-item {
  height: 410px;
  position: relative;
}

.portfolio-section .portfolio-item figure {
  overflow: hidden;
  height: calc(100% - 8px);
}

.portfolio-section .portfolio-item figure img {
  opacity: .5;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 8px 10px 10px;
  transition: all .3s;
}

.portfolio-section .portfolio-item:hover img {
  opacity: 1;
}

.portfolio-section .portfolio-item:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(35, 46, 53, .10);
  border-radius: 8px 8px 10px 10px;
}

[data-theme="dark"] .portfolio-section .portfolio-item:after {
  background: rgba(255, 255, 255, .15);
}

.portfolio-section .portfolio-item .detail {
  background: var(--white);
  width: 100%;
  padding: 24px;
  transition: all .2s;
  position: absolute;
  bottom: 0;
  left: 0;
  box-shadow: 0 1px 20px rgba(0, 0, 0, .02);
  z-index: 2;
  border: 1px solid var(--light-3);
  border-top-color: transparent;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

[data-theme="dark"] .portfolio-section .portfolio-item .detail {
  background: var(--midnight-express);
  border-color: var(--light-2);
}

.portfolio-section .portfolio-item .detail .title {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin: 0 0 16px;
}

.portfolio-section .portfolio-item .detail .bottom {
  display: flex;
  align-items: center;
}

.portfolio-section .portfolio-item .detail .bottom .tag {
  margin-right: 16px;
}

.portfolio-section .portfolio-item .detail .bottom .link {
  display: inline-flex;
}

.portfolio-section .portfolio-item .detail .bottom .link svg {
  width: 24px;
  height: 24px;
  fill: var(--cinder-light);
}

@media only screen and (max-width: 992px) {
  .portfolio-section {
    padding: 80px 0 104px;
  }

  .portfolio-section .portfolio-item-wrapper {
    margin-top: 96px;
  }
}

@media only screen and (max-width: 576px) {
  .portfolio-section .section-name {
    flex-wrap: wrap;
  }

  .portfolio-section .section-name .content {
    margin: 0 24px 24px 0;
  }

  .portfolio-section .slider-navigation .prev {
    margin-right: 8px;
  }
}

@media only screen and (max-width: 480px) {
  .portfolio-section .portfolio-item-wrapper {
    margin-top: 80px;
  }
}
</style>