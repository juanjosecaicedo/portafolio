<script setup>
import sprite from './../assets/img/sprite.svg';
import { socials } from '../constants';
</script>

<template>
  <ul class="social-icons">
    <li v-for="(item, index) in socials" :key="index">
      <a :href="item.href" target="_blank">
        <svg viewBox="0 0 24 24">
          <use :xlink:href="sprite + item.icon"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>