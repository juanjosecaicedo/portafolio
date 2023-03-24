
<script setup>
  import sprite from '../assets/img/sprite.svg'
</script>


<template>
  <section class="hero-section">
    <div class="container">
      <div class="content" data-aos="fade-up">
        <p class="above-title mb-16">Mi nombre es</p>
        <h1 class="full-name">Juan Jose <span class="primary">Caicedo.</span></h1>
        <p class="about">Creative front-end developer with more than +5 years of experience in enterprise companies
          and startups. Proficient in JavaScript, Angular, and React. Passionate about UI/UX</p>
        <a href="assets/resume.pdf" target="_blank" class="btn btn-outline-light download-resume-mobile">Download
          Resume</a>
        <ul class="social-icons">
          <li>
            <a href="#">
              <svg viewBox="0 0 24 24">
                <use :xlink:href="sprite+'#instagram-icon'"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg viewBox="0 0 24 24">
                <use :xlink:href="sprite+'#github-icon'"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg viewBox="0 0 24 24">
                <use :xlink:href="sprite+'#twitter-icon'"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg viewBox="0 0 24 24">
                <use :xlink:href="sprite+'#linkedin-icon'"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div class="image" data-aos="fade-up">
        <div class="cover">
          <svg class="lines-vector" viewBox="0 0 199 210">
            <use :xlink:href="sprite+'#lines-vector'"></use>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 181px;
}

.hero-section .content {
  padding-top: 64px;
}

.hero-section .content .full-name {
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 55px;
  margin: 0 0 32px;
}

.hero-section .content .about {
  max-width: 538px;
  line-height: 32px;
  margin: 0 0 40px;
}

.hero-section .content .social-icons svg {
  fill: var(--cinder);
  transition: all .3s;
}

.hero-section .content .social-icons svg:hover {
  opacity: .7;
}

.hero-section .content .download-resume-mobile {
  display: none;
  text-align: center;
  margin-bottom: 32px;
}

.hero-section .image {
  position: relative;
  width: 100%;
  max-width: 341px;
  height: 398px;
}

.hero-section .image .cover {
  background: var(--purple-light-1);
  position: absolute;
  width: 100%;
  max-width: 341px;
  height: 398px;
  border-radius: 16px 16px 16px 20px;
}

.hero-section .image .cover svg {
  position: absolute;
  right: 0;
  top: 0;
  stroke: var(--white);
  width: 199px;
  height: 210px;
  border-top-right-radius: 16px;
}

.hero-section .image .cover:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: var(--purple);
  right: 0;
  z-index: -1;
  transform: rotate(350deg);
  animation: enter-hero-cover .8s cubic-bezier(0.42, 0, 0.12, 1.28);
  transition: all .2s;
}

.hero-section .image:hover .cover:after {
  transform: rotate(353deg);
}

.hero-section .image .avatar {
  position: relative;
  left: 0;
  top: 103px;
  border-bottom-left-radius: 16px;
}

@keyframes enter-hero-cover {
  from {
    transform: rotate(360deg)
  }

  to {
    transform: rotate(350deg)
  }
}
</style>