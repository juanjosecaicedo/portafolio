<template>
  <section class="education-skill-section" id="education-skill">
    <div class="container">
      <div class="section-name" data-aos="fade-up">
        <p class="above-title">Learning Path</p>
        <h4 class="title">Education & Skills</h4>
      </div>
      <div class="education-skill-wrapper">
        <div class="education">
          <div class="education-item" data-aos="fade-up" data-aos-delay="100">
            <h4 class="school">Kingston University</h4>
            <p class="degree-field">Master's degree - Software Engineering</p>
            <p class="date">2019 - 2021</p>
          </div>
          <div class="education-item" data-aos="fade-up" data-aos-delay="150">
            <h4 class="school">Kingston University</h4>
            <p class="degree-field">Bachelor's degree - Computer Engineering</p>
            <p class="date">2015 - 2019</p>
          </div>
          <div class="education-item" data-aos="fade-up" data-aos-delay="200">
            <h4 class="school">Westminster School</h4>
            <p class="degree-field">Diploma's degree - Mathematics</p>
            <p class="date">2013 - 2015</p>
          </div>
        </div>
        <div class="skill">
          <p class="description" data-aos="fade-up" data-aos-delay="50">For 5+ years, I have been continuously learning in
            the field of front-end and experimenting with new technologies and frameworks, and here you can see a summary
            of my skills.</p>
          <div class="progress-bar-wrapper" data-aos="fade-up" data-aos-delay="50">
            <div class="progress-bar">
              <p class="label">React</p>
              <div class="main-bar">
                <div class="fill" data-width="70"></div>
              </div>
            </div>
            <div class="progress-bar">
              <p class="label">Angular</p>
              <div class="main-bar">
                <div class="fill" data-width="60"></div>
              </div>
            </div>
            <div class="progress-bar">
              <p class="label">JavaScript</p>
              <div class="main-bar">
                <div class="fill" data-width="55"></div>
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
}</style>