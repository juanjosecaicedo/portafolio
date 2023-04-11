<script setup lang="ts">
import { ref, onMounted, computed, Ref } from 'vue';

const xChild: Ref<number> = ref(0);
const yChild: Ref<number> = ref(0);
const xParent: Ref<number> = ref(0);
const yParent: Ref<number> = ref(0);
const hover: Ref<Boolean> = ref(false);
const hideCursor: Ref<Boolean> = ref(true);

const cursorCircle = computed(() => {
  return `transform: translateX(${xParent.value}px) translateY(${yParent.value}px) translateZ(0) translate3d(0, 0, 0);`;
})

const cursorPoint = computed(() => {
  return `transform: translateX(${xChild.value - 3}px) translateY(${yChild.value - 3}px) translateZ(0) translate3d(0, 0, 0);`
});

function moveCursor(e: MouseEvent) {
  xChild.value = e.clientX;
  yChild.value = e.clientY;
  setTimeout(() => {
    xParent.value = e.clientX - 15;
    yParent.value = e.clientY - 15;
  }, 100);
}

onMounted(() => {
  document.addEventListener('mousemove', moveCursor);
  document.addEventListener('mouseleave', () => {
    hideCursor.value = true;
  });

  document.addEventListener('mouseenter', () => {
    hideCursor.value = false;
  });
})


</script>

<template>
  <div :class="['g-cursor', { 'g-cursor_hover': hover }, { 'g-cursor_hide': hideCursor }]">
    <div :style="cursorCircle" class="g-cursor__circle"></div>
    <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
  </div>
</template>

<style>
.g-cursor_hide {
  position: fixed;
  opacity: 0;
  width: 50px;
  height: 50px;
  transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
}

.g-cursor__circle {
  pointer-events: none;
  user-select: none;
  top: 0;
  left: 0;
  position: fixed;
  width: 40px;
  height: 40px;
  border: 1px solid #028090;
  border-radius: 100%;
  z-index: 5555;
  backface-visibility: hidden;
  transition: opacity 0.6s ease;
}

.g-cursor__point {
  top: 0;
  left: 0;
  position: fixed;
  width: 8px;
  height: 8px;
  pointer-events: none;
  user-select: none;
  border-radius: 100%;
  background: #028090;
  z-index: 55555555;
  backface-visibility: hidden;
  will-change: transform;
}

.g-cursor_hover .g-cursor__circle {
  opacity: 0;
  width: 70px;
  height: 70px;
  transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
}
</style>