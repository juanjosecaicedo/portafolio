<script setup>
import { educationAndSkills } from '../constants';
import { ref, onMounted } from 'vue';


function isInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const progressBar = ref(null);
/*
onMounted(() => {
  const bars = progressBar.value.querySelectorAll('.main-bar .fill')
  window.addEventListener('scroll', () => {
    console.log(progressBar.value);
    if (isInViewport(progressBar.value)) {
      console.log(bars);
      bars.forEach(item => {
        if (isInViewport(item)) {
          item.style.width = item.getAttribute('data-width') + '%';
          console.log(item.style.width);
        }
      });
    }
  })
})*/


</script>
<template>
  <section class="education-skill-section" id="education-skill">
    <div class="container">
      <div class="section-name" data-aos="fade-up">
        <p class="above-title">Ruta de aprendizaje</p>
        <h4 class="title">Educación & Skills</h4>
      </div>
      <div class="education-skill-wrapper">
        <div class="education">
          <div v-for="(item, index) in educationAndSkills.education" :key="index" class="education-item"
            data-aos="fade-up" data-aos-delay="100">
            <h4 class="school">{{ item.text }}</h4>
            <p class="degree-field">{{ item.degreeField }}</p>
            <p class="date">{{ item.date }}</p>
          </div>
        </div>
        <div class="skill">
          <p class="description" data-aos="fade-up" data-aos-delay="50">Durante más de 6 años, he estado aprendiendo
            continuamente en el campo del <span class="hid">desarrollo web (full-stack)</span> y experimentando con nuevas
            tecnologías. Aquí puedes ver un
            resumen de mis habilidades.</p>
          <div class="progress-bar-wrapper" ref="progressBar" data-aos="fade-up" data-aos-delay="50">
            <div v-for="(item, index) in educationAndSkills.skills" :key="index" class="progress-bar">
              <p class="label">{{ item.label }}</p>
              <div class="main-bar">
                <div class="fill" :data-width="item.dataWidth" :style="{ width: item.dataWidth + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.education-skill-section {
  padding: 104px 0 176px;
}

.education-skill-section .education-skill-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.education-skill-section .education-skill-wrapper .education {
  padding-top: 112px;
  position: relative;
  min-width: 410px;
  margin-right: 144px;
}

.education-skill-section .education-skill-wrapper .education .education-item {
  padding-bottom: 64px;
  padding-left: 40px;
  position: relative;
}

.education-skill-section .education-skill-wrapper .education .education-item:after {
  content: '';
  position: absolute;
  left: 2px;
  top: 0;
  width: 20px;
  height: 20px;
  background: var(--light-2);
  border: 2px solid var(--white);
  border-radius: 100px;
}

[data-theme="dark"] .education-skill-section .education-skill-wrapper .education .education-item:after {
  background: var(--licorice);
  border: 2px solid var(--midnight-express);
}

.education-skill-section .education-skill-wrapper .education .education-item:not(:last-of-type):before {
  content: '';
  position: absolute;
  left: 12px;
  top: 2px;
  width: 1px;
  height: 100%;
  background: var(--light-2);
}

.education-skill-section .education-skill-wrapper .education .education-item .school {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 10px;
}

.education-skill-section .education-skill-wrapper .education .education-item .degree-field {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--cinder-light);
  padding-bottom: 24px;
}

.education-skill-section .education-skill-wrapper .education .education-item .date {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
}

.education-skill-section .education-skill-wrapper .skill .description {
  color: var(--cinder-light);
  line-height: 32px;
}

.education-skill-section .education-skill-wrapper .skill .progress-bar-wrapper {
  padding-top: 64px;
  max-width: 551px;
}

.education-skill-section .education-skill-wrapper .skill .progress-bar {
  padding-bottom: 40px;
}

.education-skill-section .education-skill-wrapper .skill .progress-bar .label {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  padding-bottom: 16px;
}

.education-skill-section .education-skill-wrapper .skill .progress-bar .main-bar {
  width: 100%;
  background: var(--purple-light-2);
  border-radius: 2px;
}

.education-skill-section .education-skill-wrapper .skill .progress-bar .fill {
  display: block;
  height: 8px;
  background-color: var(--purple);
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  transition: width .500s ease-in-out;
  width: 0;
}

.education-skill-section .hid {
  color: var(--purple);
}

@media only screen and (max-width: 1150px) {
  .education-skill-section .education-skill-wrapper .education {
    margin-right: 80px;
  }

  .education-skill-section .education-skill-wrapper .skill .description {
    padding-top: 40px;
  }
}

@media only screen and (max-width: 992px) {
  .education-skill-section {
    padding: 80px 0 64px;
  }

  .education-skill-section .education-skill-wrapper .education {
    margin-right: 40px;
    min-width: initial;
    flex: 0 0 calc(50% - 40px);
    padding-top: 88px;
  }

  .education-skill-section .education-skill-wrapper .skill .description {
    padding-top: 24px;
  }
}

@media only screen and (max-width: 768px) {
  .education-skill-section .education-skill-wrapper {
    flex-wrap: wrap;
  }

  .education-skill-section .education-skill-wrapper .education {
    flex: 0 0 100%;
    margin-right: 0;
  }
}
</style>