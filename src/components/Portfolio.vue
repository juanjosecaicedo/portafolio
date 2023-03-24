<script setup>
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";
import 'swiper/css';
import sprite from '../assets/img/sprite.svg';
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
          <div class="prev">
            <svg viewBox="0 0 24 24">
              <use :xlink:href="sprite+'#arrow-left'"></use>
            </svg>
          </div>
          <div class="next">
            <svg viewBox="0 0 24 24">
              <use :xlink:href="sprite+'#arrow-right'"></use>
            </svg>
          </div>
        </div>
      </div>
      <div class="portfolio-item-wrapper">
        <!-- swiper  -->
        <swiper :slides-per-view="3" :space-between="10">
          <swiper-slide>
            <article class="portfolio-item">
              <figure>
                <img src="assets/img/portfolio-item-1.jpg">
              </figure>
              <div class="detail">
                <h4 class="title">Agency Website.</h4>
                <div class="bottom">
                  <span class="tag">WordPress</span>
                  <a class="link" href="#">
                    <svg viewBox="0 0 24 24">
                      <use xlink:href="assets/img/sprite.svg#link"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </swiper-slide>
          <swiper-slide>
            <article class="portfolio-item">
              <figure>
                <img src="assets/img/portfolio-item-2.jpg">
              </figure>
              <div class="detail">
                <h4 class="title">Dashboard Website.</h4>
                <div class="bottom">
                  <span class="tag">React</span>
                  <a class="link" href="#">
                    <svg viewBox="0 0 24 24">
                      <use xlink:href="assets/img/sprite.svg#link"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </swiper-slide>
          <swiper-slide>
            <article class="portfolio-item">
              <figure>
                <img src="assets/img/portfolio-item-3.jpg">
              </figure>
              <div class="detail">
                <h4 class="title">Support Center Website.</h4>
                <div class="bottom">
                  <span class="tag">PHP</span>
                  <a class="link" href="#">
                    <svg viewBox="0 0 24 24">
                      <use xlink:href="assets/img/sprite.svg#link"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </swiper-slide>
          <swiper-slide>
            <article class="portfolio-item">
              <figure>
                <img src="assets/img/portfolio-item-4.jpg">
              </figure>
              <div class="detail">
                <h4 class="title">Blog Website.</h4>
                <div class="bottom">
                  <span class="tag">Jekyll</span>
                  <a class="link" href="#">
                    <svg viewBox="0 0 24 24">
                      <use xlink:href="assets/img/sprite.svg#link"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </swiper-slide>
        </swiper>

        <!--<div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" data-aos="fade-up" data-aos-delay="200">
              <article class="portfolio-item">
                <figure>
                  <img src="assets/img/portfolio-item-1.jpg">
                </figure>
                <div class="detail">
                  <h4 class="title">Agency Website.</h4>
                  <div class="bottom">
                    <span class="tag">WordPress</span>
                    <a class="link" href="#">
                      <svg viewBox="0 0 24 24">
                        <use xlink:href="assets/img/sprite.svg#link"></use>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div class="swiper-slide" data-aos="fade-up" data-aos-delay="300">
              <article class="portfolio-item">
                <figure>
                  <img src="assets/img/portfolio-item-2.jpg">
                </figure>
                <div class="detail">
                  <h4 class="title">Dashboard Website.</h4>
                  <div class="bottom">
                    <span class="tag">React</span>
                    <a class="link" href="#">
                      <svg viewBox="0 0 24 24">
                        <use xlink:href="assets/img/sprite.svg#link"></use>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div class="swiper-slide" data-aos="fade-up" data-aos-delay="400">
              <article class="portfolio-item">
                <figure>
                  <img src="assets/img/portfolio-item-3.jpg">
                </figure>
                <div class="detail">
                  <h4 class="title">Support Center Website.</h4>
                  <div class="bottom">
                    <span class="tag">PHP</span>
                    <a class="link" href="#">
                      <svg viewBox="0 0 24 24">
                        <use xlink:href="assets/img/sprite.svg#link"></use>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div class="swiper-slide" data-aos="fade-up" data-aos-delay="200">
              <article class="portfolio-item">
                <figure>
                  <img src="assets/img/portfolio-item-4.jpg">
                </figure>
                <div class="detail">
                  <h4 class="title">Blog Website.</h4>
                  <div class="bottom">
                    <span class="tag">Jekyll</span>
                    <a class="link" href="#">
                      <svg viewBox="0 0 24 24">
                        <use xlink:href="assets/img/sprite.svg#link"></use>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
        -->
        <!-- swiper  -->
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
</style>