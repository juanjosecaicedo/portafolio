<script setup>
  import sprite from '../assets/img/sprite.svg';
</script>

<template>
  <section class="contact-section" id="contact">
    <div class="container">
      <div class="contact-wrapper">
        <div class="contact-form">
          <form name="contactForm">
            <p class="success-submit-message">Your message has been successfully sent.</p>
            <p class="fail-submit-message">An error occurred while sending the message.</p>
            <div class="form-control">
              <input name="name" class="mb-16" type="text" placeholder="Name" data-aos="fade-up" data-aos-delay="50">
              <p class="validation-error name">Please enter your name.</p>
            </div>
            <div class="form-control">
              <input name="email" class="mb-24" type="text" placeholder="Email" data-aos="fade-up" data-aos-delay="100">
              <p class="validation-error email">Please enter a valid email address.</p>
            </div>
            <div class="form-control">
              <textarea name="message" rows="8" placeholder="Message" data-aos="fade-up" data-aos-delay="150"></textarea>
              <p class="validation-error message">Please enter your message.</p>
            </div>
            <button class="btn btn-primary submit-btn" data-aos="fade-up" data-aos-delay="200">
              Submit
              <span class="loading"></span>
            </button>
          </form>
        </div>
        <div class="contact-info">
          <div class="contact-info-item" data-aos="fade-up" data-aos-delay="50">
            <div class="icon">
              <svg viewBox="0 0 24 24">
                <use :xlink:href="sprite+'#address-icon'"></use>
              </svg>
            </div>
            <div class="content">
              <h4 class="title">Dirección</h4>
              <p class="body">Cl 9a #3-22, Jamundi, Colombia</p>
            </div>
          </div>
          <div class="contact-info-item" data-aos="fade-up" data-aos-delay="150">
            <div class="icon">
              <svg viewBox="0 0 24 24">
                <use :xlink:href="sprite+'#phone-icon'"></use>
              </svg>
            </div>
            <div class="content">
              <h4 class="title">Whatsapp</h4>
              <p class="body">(+57) 3235121557</p>
            </div>
          </div>
          <div class="contact-info-item" data-aos="fade-up" data-aos-delay="200">
            <div class="icon">
              <svg viewBox="0 0 24 24">
                <use :xlink:href="sprite+'#email-icon'"></use>
              </svg>
            </div>
            <div class="content">
              <h4 class="title">Correo</h4>
              <p class="body">juanjosecaicedo6@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 104px 0 134px;
  background: var(--light);
}

.contact-section .contact-wrapper {
  display: flex;
  align-items: center;
}

.contact-section .contact-wrapper .contact-form {
  margin-right: 104px;
  width: 100%;
  max-width: 600px;
}

.contact-section .contact-wrapper .contact-form .submit-btn {
  width: 100%;
  margin-top: 48px;
}

.success-submit-message {
  background: #e9f3e9;
  font-size: 14px;
  color: #4caf50;
  border-radius: 4px;
  padding: 6px 20px;
  margin-bottom: 16px;
  display: none;
}

[data-theme="dark"] .success-submit-message {
  background: #314548;
  font-size: 14px;
  color: #9db79e;
}

.success-submit-message.active {
  display: block;
}

.fail-submit-message {
  padding: 6px 20px;
}

.contact-section .contact-wrapper .contact-info .contact-info-item {
  margin-bottom: 48px;
  display: flex;
  align-items: center;
}

.contact-section .contact-wrapper .contact-info .contact-info-item .icon {
  width: 56px;
  height: 56px;
  padding: 16px;
  background: var(--purple-light-2);
  border-radius: 16px;
  margin-right: 24px;
}

.contact-section .contact-wrapper .contact-info .contact-info-item .icon svg {
  fill: var(--purple);
}

.contact-section .contact-wrapper .contact-info .contact-info-item .content .title {
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  padding-bottom: 4px;
}

.contact-section .contact-wrapper .contact-info .contact-info-item .content .body {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--cinder-light);
}
</style>