<template>
  <main class="page consult-page">
    <h4 class="consult-page__title heading_4">
      Напишите нам, если вам нужна консультация
    </h4>
    <form @submit.prevent="send" class="consult-page__form">
      <div class="consult-page__form__row">
        <label for="consult-name" class="consult-page__form__field">
          <input v-model="form.name.value" class="consult-page__form__input standard-input body" id='consult-name'
                 type="text"
                 placeholder="Ваше имя"/>
          <span v-if="form.name.mistake" class="consult-page__form__mistake body_2"
                id='consult-name-mistake'>{{ form.name.mistake }}</span>
        </label>
        <label for="consult-company" class="consult-page__form__field">
          <input v-model="form.company.value" class="consult-page__form__input standard-input body" id='consult-company'
                 type="text"
                 placeholder="Компания"/>
          <span v-if="form.company.mistake" class="consult-page__form__mistake body_2"
                id='consult-company-mistake'>{{ form.company.mistake }}</span>
        </label>
      </div>
      <div class="consult-page__form__row">
        <label for="consult-phone" class="consult-page__form__field">
          <input v-model="form.phone.value" class="consult-page__form__input standard-input body" id='consult-phone'
                 type="text"
                 placeholder="????????"/>
          <span v-if="form.phone.mistake" class="consult-page__form__mistake body_2"
                id='consult-phone-mistake'>{{ form.phone.mistake }}</span>
        </label>
        <label for="consult-email" class="consult-page__form__field">
          <input v-model="form.email.value" class="consult-page__form__input standard-input body" id='consult-email'
                 type="text"
                 placeholder="Email"/>
          <span v-if="form.email.mistake" class="consult-page__form__mistake body_2"
                id='consult-email-mistake'>{{ form.email.mistake }}</span>
        </label>
      </div>
      <textarea class="consult-page__form__input standard-input consult-page__form__textarea body"
                placeholder="Сообщение"/>
      <SecondaryButton :disabled="loading" type="submit" class="consult-page__form__submit">Отправить</SecondaryButton>
    </form>
  </main>
</template>

<script setup>
import SecondaryButton from '@/components/Buttons/Secondary.vue';
import {openModal, closeAnyModal} from "@/logics/modals.js";
import {nextTick, reactive, ref} from 'vue';
import {gsap} from 'gsap';

const consult_modal_timer = ref(null);

let loading = false;
const send = () => {
  if (!validation()) return;
  loading = true;
  console.log(1);
  openModal('consult');
  clearTimeout(consult_modal_timer.value);
  consult_modal_timer.value = setTimeout(() => {
    loading = false;
    closeAnyModal();
  }, 3000);
}

const form = reactive({
  name: {
    value: null,
    mistake: null
  },
  company: {
    value: null,
    mistake: null
  },
  phone: {
    value: null,
    mistake: null
  },
  email: {
    value: null,
    mistake: null
  },
});

const mistake_animation = key => gsap.fromTo(`#consult-${key}-mistake`, {height: 0, opacity: 0}, {
  height: 'auto',
  opacity: 1,
  duration: 1,
  ease: 'power3',
  paused: true
});

const validation = () => {
  let is_success = true;


  for (let [key, {value}] of Object.entries(form)) {
    form[key].mistake = null;
    if (!value) {
      is_success = false;
      form[key].mistake = 'Поле обязательно для заполнения';
    }

    if (key === 'email')
      if (form.email.value && !String(form.email.value).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        is_success = false;
        form.email.mistake = 'Введеный адрес электронной почты невалиден';
      }

    nextTick(() => {
      if (form[key].mistake) {
        const animation = mistake_animation(key);
        animation.play();
        setTimeout(() => animation.reverse(), 4000)
      }
    });
  }


  console.log("is_success,", is_success);
  return is_success;
}


</script>

<style lang='scss'>
.consult-page {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 20px;
  max-width: 1240px;
  margin: 0 auto;

  &__title {
    display: block;
    width: 399px;
    flex-grow: 0;
    flex-shrink: 0;
    color: $GREEN;
  }

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-shrink: 0;
    flex-grow: 1;
    grid-gap: 20px;
    overflow: hidden;

    &__field {
      flex-grow: 1;
      flex-shrink: 0;
      max-width: calc(50% - 10px);
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      grid-gap: 3px;
      transition: $TRANSITION;
    }

    &__input {
      display: block;
      width: 100%;
      max-width: 400px;
      border: 1px solid rgba($GREEN, .60);
      color: rgba($GREEN, .60);
      height: 48px;
      border-radius: 2px;
      padding: 14px 24px 12px;
      transition: $TRANSITION;
      outline: none;

      &::placeholder {
        color: rgba($GREEN, .60);
      }

      &:disabled {
        &::placeholder {
          color: rgba($GREEN, .30);
        }

        color: rgba($GREEN, .30);
        border-color: rgba($GREEN, .30);
      }

      &:not(&:disabled):hover {
        border-color: rgba($GREEN, .75);
        color: rgba($GREEN, .75);
      }

      &:not(&:disabled):focus {
        border: 1.5px solid $GREEN;
        color: $GREEN;
      }
    }

    &__textarea {
      max-width: 100%;
      height: 374px;
      max-height: 374px;
      width: 100%;
      transition: height 0s;
    }

    &__mistake {
      color: $RED;
    }

    &__row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      grid-gap: 20px;
      width: 100%;
    }

    &__submit {
      align-self: flex-end;
    }
  }
}
</style>