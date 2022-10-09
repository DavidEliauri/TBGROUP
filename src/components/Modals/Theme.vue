<template>
  <div class="theme-modal__wrapper modal__content">
    <div class="theme-modal">
      <header class="theme-modal__header">
        <router-link class="theme-modal__header__logo" to="/">
          <svg class="theme-modal__header__logo__icon"
               width="53" height="19">
            <use xlink:href="@/assets/sprites.svg#logo"></use>
          </svg>
        </router-link>
        <button class="theme-modal__header__close-button" type="button" @click="close">
          <svg
              class="theme-modal__header__close-button__icon"
              width="26" height="26">
            <use xlink:href="@/assets/sprites.svg#close-modal"></use>
          </svg>
        </button>
      </header>
      <h2 class="theme-modal__title heading_2">НЕЙРОФИ-ЗИОЛОГИЯ КРЕАТИВНОСТИ</h2>
      <p class="theme-modal__epilogue lead_1">
        Чтобы решить творческую задачу, все системы мозга должны работать когерентно – то есть слаженно и согласованно.
      </p>
      <img src="@/assets/images/popup-image.png" alt="Theme popup image" class="theme-modal__image">
      <div class="theme-modal__content">
        <div class="theme-modal__content__sidebar">
          <article class="theme-modal__content__sidebar__block__wrapper" v-for="item in 3">
            <router-link to="#" class="theme-modal__content__sidebar__block">
              <p class="theme-modal__content__sidebar__block__title">Источник: источник</p>
              <img src="@/assets/images/sidebar-image.png" alt="Theme modal sidebar image"
                   class="theme-modal__content__sidebar__block__image">
            </router-link>
            <p class="theme-modal__content__sidebar__block__image-name body">Иллюстрация 1</p>
          </article>
        </div>
        <div class="theme-modal__content__info">
          <h3 class="theme-modal__content__info__title lead_1">В таком состоянии мы обретаем «супер-силу» и можем
            продуктивно
            решать
            стоящие перед нами вызовы.</h3>
            <p class="theme-modal__content__info__text body">
              Когда мы достигаем состояния инсайта в процессе работы над задачей, наш мозг буквально озаряет вспышка, а
              все области мозга работают ритмично. <br>

              Как достичь такого состояния? В программах по прокачке креативности вы получите целый набор инструментов.
              <br>
              Почему командам вообще нужна помощь в развитии креативности?
              <br>
              Пребывать в креативном процессе — сложно, это дискомфортный и энергозатратный процесс для мозга, ведь он
              представляет из себя хаос. Мы предлагаем методы и подходы, которые помогают преобразовать хаос в пользу
              для
              бизнеса.
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close'])
const close = () => emit('close');
</script>

<style lang="scss">
.theme-modal {
  &__wrapper {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: $IVORY_100;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: $modal_z;
    overflow-y: auto;
    overflow-y: overlay;
  }

  width: 100%;
  max-width: 1440px;
  padding: 0px 100px 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &__header {
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    margin: 29px 0 72px;

    &__logo {
      fill: $BRIGHT_GREEN_100;
    }

    &__close-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      outline: none;
      border: none;
      width: 40px;
      height: 40px;
    }
  }

  &__title {
    text-align: center;
    align-items: center;
    margin-bottom: 83px;
  }

  &__epilogue {
    max-width: 802px;
    align-self: flex-end;
    margin-bottom: 40px;
  }

  &__image {
    align-self: flex-end;
    width: 1135px;
    max-width: 100%;
    margin-bottom: 72px;
  }

  &__content {
    width: 100%;
    display: flex;
    flex-direction: row;
    grid-gap: 125px;

    &__sidebar {
      width: 295px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      grid-gap: 45px;

      &__block {
        width: 295px;
        background-color: $BLACK_100;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        text-decoration: none;
        color: $IVORY_100;
        border-radius: 4px;
        padding: 18px 20px 14px 30px;
        grid-gap: 7px;

        &__title {
          width: 100%;
          font-family: 'Stratos LC Regular', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 110%;
        }

        &__image-name {
          margin-top: 21px;
          color: $BRIGHT_GREEN_100;
        }
      }
    }

    &__info {
      &__title {
        margin-bottom: 43px;
      }

      &__share {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin-top: 60px;
        grid-gap: 100px;
        &__socials {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;

          button:first-of-type {
            margin-right: 8px;
          }

          button:last-of-type {
            margin-right: 20px;
          }
        }
      &__linked{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        grid-gap: 20px;
        button{
          fill: none;
          stroke: $IVORY_100;
        }
      }
        &__button {
          width: 48px;
          height: 48px;
          background-color: $BLACK_60;
          border: none;
          outline: none;
          display: flex;
          align-items: center;
          justify-content: center;
          fill: $IVORY_100;
          border-radius: 2px;
        }

        &__text {
          font-family: 'Stratos LC Medium';
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 135%;
          color: $BLACK_30;
        }
      }
    }
  }
}
</style>