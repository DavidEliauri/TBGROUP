<template>
  <main class="page consult-page">
    <h4 class="consult-page__title">
      Напишите нам, если вам нужна консультация
    </h4>
    <form @submit="send" class="consult-page__form">
      <div class="consult-page__form__row">
        <input class="consult-page__form__input body" type="text" placeholder="Ваше имя"/>
        <input class="consult-page__form__input body" type="text" placeholder="Компания"/>
      </div>
      <div class="consult-page__form__row">
        <input class="consult-page__form__input body" type="text" placeholder="????????"/>
        <input class="consult-page__form__input body" type="email" placeholder="Email"/>
      </div>
      <textarea class="consult-page__form__input consult-page__form__textarea body" placeholder="Сообщение"/>
      <SecondaryButton class="consult-page__form__submit">Отправить</SecondaryButton>
    </form>
  </main>
  <div class="message-accept-modal">
    <dialog class="message-accept-modal__content"></dialog>
  </div>
</template>

<script setup>
import SecondaryButton from '@/components/Buttons/Secondary.vue';
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
}
</style>