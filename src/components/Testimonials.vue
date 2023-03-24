<template>
  <section class="testimonial-section" id="testimonials">
    <div class="container">
      <div class="section-name" data-aos="fade-up">
        <p class="above-title">My clients</p>
        <h4 class="title">Testimonials</h4>
      </div>
      <div class="testimonial-item-wrapper">
        <div class="testimonial-item" data-aos="fade-up" data-aos-delay="50">
          <img class="avatar" src="assets/img/testimonial-avatar-1.jpg" alt="Amelia Miller">
          <p class="text">We were very pleased to hear how you resolved our website's user interface issues and
            challenges.</p>
          <p class="name">Amelia Miller</p>
          <p class="tag job-title">Designer</p>
        </div>
        <div class="testimonial-item" data-aos="fade-up" data-aos-delay="100">
          <img class="avatar" src="assets/img/testimonial-avatar-2.jpg" alt="Amelia Miller">
          <p class="text">I’m glad I decided to work with you. The project was delivered on time with all the
            requirements.</p>
          <p class="name">James Delaney</p>
          <p class="tag job-title">Developer</p>
        </div>
        <div class="testimonial-item" data-aos="fade-up" data-aos-delay="150">
          <img class="avatar" src="assets/img/testimonial-avatar-3.jpg" alt="Amelia Miller">
          <p class="text">The management of our projects was always faced with difficulties, but you handled these well.
          </p>
          <p class="name">Isabella Bennett</p>
          <p class="tag job-title">Manager</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-section {
  padding: 104px 0 152px;
}

.testimonial-section .testimonial-item-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 136px;
}

.testimonial-section .testimonial-item-wrapper .testimonial-item {
  background: var(--white);
  border-radius: 8px;
  padding: 83px 52px 25px 32px;
  position: relative;
  min-width: 357px;
}

[data-theme="dark"] .testimonial-section .testimonial-item-wrapper .testimonial-item {
  background: var(--licorice);
}

.testimonial-section .testimonial-item-wrapper .testimonial-item:not(:last-of-type) {
  margin-right: 48px;
}

.testimonial-section .testimonial-item-wrapper .testimonial-item .avatar {
  border-radius: 100px;
  border: 2px solid var(--white);
  position: absolute;
  top: -48px;
  left: 50%;
  transform: translateX(-50%);
}

[data-theme="dark"] .testimonial-section .testimonial-item-wrapper .testimonial-item .avatar {
  border: 2px solid var(--midnight-express);
}

.testimonial-section .testimonial-item-wrapper .testimonial-item .text {
  padding-bottom: 48px;
}

.testimonial-section .testimonial-item-wrapper .testimonial-item .name {
  font-family: 'Plus Jakarta Sans', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  padding-bottom: 8px;
}

.testimonial-section .testimonial-item-wrapper .testimonial-item .job-title {
  background: var(--light);
  border: none;
  display: inline-block;
}</style>