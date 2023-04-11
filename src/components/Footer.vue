<script setup lang="ts">
import sprite from '../assets/img/sprite.svg';
import { socials } from '../constants';
</script>

<template>
  <footer class="footer">
    <ul class="social-icons" data-aos="fade-up" data-aos-delay="50">
      <li v-for="(item, index) in socials" :key="index">
        <a :href="item.href" target="_blank">
          <svg viewBox="0 0 24 24">
            <use :xlink:href="sprite + item.icon"></use>
          </svg>
        </a>
      </li>
    </ul>
    <p class="copyright" data-aos="fade-up" data-aos-delay="100">© <span class="year">{{ new Date().getFullYear()
    }}</span> - Juan Jose<span class="bold">
        Caicedo</span></p>
  </footer>
</template>

<style scoped>
.footer {
  padding: 88px 0;
  text-align: center;
}

.footer .social-icons {
  justify-content: center;
  margin-bottom: 24px;
}

.footer .social-icons svg {
  fill: var(--cinder-light);
}

.footer .copyright {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--cinder-light);
}

.footer .copyright .bold {
  font-weight: 500;
}

@media only screen and (max-width: 992px) {
  .footer {
    padding: 72px 0;
  }
}
</style>