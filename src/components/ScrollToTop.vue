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

  <a href="#pageTop" @click="scrollToTop" v-show="showButton" class="scroll-to-top">
    <div class="sc-57f8a02e-1 bAYgte">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-up" width="24" height="24"
        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 5l0 14"></path>
        <path d="M16 9l-4 -4"></path>
        <path d="M8 9l4 -4"></path>
      </svg>
    </div>
    <span class="sc-57f8a02e-2 ieLNnR">¡Subir!</span>
  </a>
</template>
<style scoped lang="css">
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 3;
  background-color: var(--purple);  
  color: rgb(255, 255, 255);    
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: 9999px;
  transition: all 0.3s ease 0s;
  width: 3rem;
  height: 2rem;
  box-shadow: rgba(38, 26, 25, 0.1) 0px 7.57px 11.35px, rgba(38, 26, 25, 0.05) 0px 3.03px 4.54px;
}


@media (min-width: 42rem) {
  .scroll-to-top {
    bottom: 0px;
    right: 50%;
    transform: translate(50%, 64px);
    width: 128px;
    height: auto;
    border-radius: 9999px 9999px 0px 0px;
    padding: 2rem;
    box-shadow: unset;
  }

  .scroll-to-top:hover {
    transform: translate(50%, 0px);
    background-color: var(--cinder);
  }
}
</style>