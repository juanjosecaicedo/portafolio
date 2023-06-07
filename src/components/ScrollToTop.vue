<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
const showButton = ref<boolean>(false);

const handleScroll = () => {
  if (window.pageYOffset > 300) {
    showButton.value = true;
  } else {
    showButton.value = false;
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollToTop = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <button @click="scrollToTop" v-show="showButton" class="scroll-to-top" data-aos="in-up" data-aos-delay="800">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-up" width="24" height="24"
      viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
      stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 5l0 14"></path>
      <path d="M16 9l-4 -4"></path>
      <path d="M8 9l4 -4"></path>
    </svg>
  </button>
</template>
<style scoped lang="css">
.scroll-to-top {
  position: fixed;
  bottom: 60px;
  right: 60px;
  padding: 0;
  width: 40px;
  height: 40px;
  border: solid 2px var(--cinder);
  border-radius: 50%;
  color:  var(--cinder);
  cursor: pointer;
  box-shadow: 0px 24px 40px 24px rgba(0,0,0,0.1);

}
</style>