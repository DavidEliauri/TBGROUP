<template>
  <main class="page consult-page">
    <h4 class="consult-page__title">
      Напишите нам, если вам нужна консультация
    </h4>
    <form @submit.prevent="send" class="consult-page__form">
      <div class="consult-page__form__row">
        <input class="consult-page__form__input body" type="text" placeholder="Ваше имя"/>
        <input class="consult-page__form__input body" type="text" placeholder="Компания"/>
      </div>
      <div class="consult-page__form__row">
        <input class="consult-page__form__input body" type="text" placeholder="????????"/>
        <input class="consult-page__form__input body" type="email" placeholder="Email"/>
      </div>
      <textarea class="consult-page__form__input consult-page__form__textarea body" placeholder="Сообщение"/>
      <SecondaryButton type="submit" class="consult-page__form__submit">Отправить</SecondaryButton>
    </form>
    {{ success_modal_properties.show }}
    <!--    --------------------------------------------------------------------   -->
    <!--    ---------------------Модалка успешного сообщения-----------------------------   -->
    <!--    --------------------------------------------------------------------   -->
    <transition name="opacity">
      <ModalsWrapper v-if="success_modal_properties.show">
        <div class="consult-page__success-message modal__content">
        <span class="consult-page__success-message__icon__wrapper">
        <svg width="27" height="19" class="consult-page__success-message__icon">
          <use xlink:href="@/assets/sprites.svg#galka"></use>
        </svg>
        </span>
          <p class="consult-page__success-message__text body_1">!Спасибо! Мы получили ваше сообщение. В ближайшее время
            мы
            свяжемся с вами по указанным контактам!</p>
        </div>
      </ModalsWrapper>
    </transition>
  </main>
</template>

<script setup>
import SecondaryButton from '@/components/Buttons/Secondary.vue';
import ModalsWrapper from '@/components/Modals/Wrapper.vue';
import {reactive} from 'vue';

const success_modal_properties = reactive({show: false, timer: null});
const send = () => {
  success_modal_properties.show = true;
  clearTimeout(success_modal_properties.timer);
  success_modal_properties.timer = setTimeout(() => success_modal_properties.show = false, 3000);
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
    color: $BRIGHT_GREEN_100;
  }

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-shrink: 0;
    flex-grow: 1;
    grid-gap: 20px;

    &__input {
      border: 1.5px solid $BRIGHT_GREEN_60;
      color: $BRIGHT_GREEN_60;
      flex-grow: 1;
      height: 48px;
      border-radius: 2px;
      padding: 14px 24px 12px;
      transition: $TRANSITION;
      outline: none;

      &::placeholder {
        color: $BRIGHT_GREEN_60;
      }

      &:disabled {
        &::placeholder {
          color: $BRIGHT_GREEN_30;
        }

        color: $BRIGHT_GREEN_30;
        border-color: $BRIGHT_GREEN_30;
      }

      &:not(&:disabled):hover {
        border-color: $BRIGHT_GREEN_75;
        color: $BRIGHT_GREEN_75;
      }

      &:not(&:disabled):focus {
        border: 1.5px solid $BRIGHT_GREEN_100;
        color: $BRIGHT_GREEN_100;
      }
    }

    &__textarea {
      height: 374px;
      max-height: 374px;
      width: 100%;
    }


    &__row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      grid-gap: 20px;
      width: 100%;
    }

    &__submit {
      align-self: flex-end;
    }
  }

  &__success-message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 24px;
    background-color: white;
    width: 100%;
    max-width: 980px;
    padding: 58px 20px 64px;
    border-radius: 2px;

    &__icon {
      fill: $IVORY_100;

      &__wrapper {
        width: 64px;
        height: 64px;
        background-color: $BRIGHT_GREEN_100;
        border-radius: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}


.opacity {
  &-enter-from, &-leave-to {
    opacity: 0;
  }


  &-enter-active,
  &-leave-active {
    transition: .3s;
  }
}

</style>