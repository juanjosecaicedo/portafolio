<script setup>
import { ref } from 'vue';
import sprite from '../assets/img/sprite.svg';
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import emailjs from "@emailjs/browser";

const showSuccessMessage = ref(false);
const failSubmitMessage = ref(false);

function onSubmit(values, { resetForm }) {
  console.log(values);

  //console.log(JSON.stringify(values, null, 2));
  emailjs
    .send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
        to_name: "Juan Jose",
        to_email: "juanjosecaicedo6@gmail.com",
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        showSuccessMessage.value = true;
        resetForm()
        setTimeout(() => showSuccessMessage.value = false, 5000);
      },
      (error) => {
        console.error(error);
        failSubmitMessage.value = true;
        setTimeout(() => failSubmitMessage.value = false, 5000);
        resetForm()
      }
    );
}

const schema = yup.object({
  name: yup.string().required().label('El nombre es un campo requerido'),
  email: yup.string().required().email().label('El correo es un campo requerido'),
  message: yup.string().required().min(8).label('El mensaje es un campo requerido')
})

</script>

<template>
  <section class="contact-section" id="contact">
    <div class="container">
      <div class="contact-wrapper">
        <div class="contact-form">
          <Form @submit="onSubmit" :validation-schema="schema" name="contactForm">
            <p class="success-submit-message" v-if="showSuccessMessage">Su mensaje ha sido enviado con éxito.</p>
            <p class="fail-submit-message" v-if="failSubmitMessage">Se produjo un error al enviar el mensaje.</p>
            <div class="form-control">
              <Field name="name" class="mb-16" type="text" placeholder="Nombre" data-aos="fade-up" data-aos-delay="50" />
              <ErrorMessage name="name" as="p" />
            </div>
            <div class="form-control">
              <Field name="email" class="mb-24" type="text" placeholder="Correo" data-aos="fade-up"
                data-aos-delay="100" />
              <p class="validation-error email">Please enter a valid email address.</p>
              <ErrorMessage name="email" as="p" />
            </div>
            <div class="form-control">
              <Field name="message" rows="8" as="textarea" placeholder="Mensaje" data-aos="fade-up"
                data-aos-delay="150" />
              <ErrorMessage name="message" as="p" />
            </div>
            <button class="btn btn-primary submit-btn" data-aos="fade-up" data-aos-delay="200">
              Enviar
              <span class="loading"></span>
            </button>
          </Form>
        </div>
        <div class="contact-info">
          <div class="contact-info-item" data-aos="fade-up" data-aos-delay="200">
            <div class="icon">
              <svg viewBox="0 0 24 24">
                <use :xlink:href="sprite + '#email-icon'"></use>
              </svg>
            </div>
            <div class="content">
              <h4 class="title">Correo</h4>
              <p class="body">juanjosecaicedo6@gmail.com</p>
            </div>
          </div>
          <div class="contact-info-item" data-aos="fade-up" data-aos-delay="150">
            <div class="icon">
              <svg viewBox="0 0 24 24">
                <use :xlink:href="sprite + '#phone-icon'"></use>
              </svg>
            </div>
            <div class="content">
              <h4 class="title">Whatsapp</h4>
              <p class="body">(+57) 3235121557</p>
            </div>
          </div>
          <div class="contact-info-item" data-aos="fade-up" data-aos-delay="50">
            <div class="icon">
              <svg viewBox="0 0 24 24">
                <use :xlink:href="sprite + '#address-icon'"></use>
              </svg>
            </div>
            <div class="content">
              <h4 class="title">Dirección</h4>
              <p class="body">Cl 9a #3-22, Jamundi, Colombia</p>
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

@media only screen and (max-width: 1150px) {
  .contact-section .contact-wrapper .contact-form {
    margin-right: 88px;
  }
}

@media only screen and (max-width: 992px) {
  .contact-section {
    padding: 72px 0 88px;
  }

  .contact-section .contact-wrapper .contact-form {
    margin-right: 40px;
  }
}

@media only screen and (max-width: 768px) {
  .contact-section .contact-wrapper {
    flex-wrap: wrap;
  }

  .contact-section .contact-wrapper .contact-form {
    margin-right: 0;
    max-width: initial;
    order: 2;
  }

  .contact-section .contact-wrapper .contact-info {
    margin-bottom: 32px;
  }
}

@media only screen and (max-width: 576px) {
  .contact-section .contact-wrapper .contact-info .contact-info-item {
    margin-bottom: 32px;
  }
}
</style>