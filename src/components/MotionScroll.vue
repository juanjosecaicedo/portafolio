<template>
  <div class="box">
    <div class="slide-out-top"></div>
  </div>
</template>

<style scoped>
.box {
  width: 30px;
  height: 60px;
  border: solid 2px;
  margin: 0 auto;
  position: relative;
  bottom: -90px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box .slide-out-top {
  width: 8px;
  height: 8px;
  background-color: var(--cinder);
  border-radius: 50%;
  -webkit-animation: slide-out-top 1.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) infinite alternate-reverse both;
  animation: slide-out-top 1.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) infinite alternate-reverse both;
}

@-webkit-keyframes slide-out-top {
  0% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
    opacity: 1;
  }
}

@keyframes slide-out-top {
  0% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
    opacity: 1;
  }
}
</style>