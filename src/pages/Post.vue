<template>
  <main class="page post-page">
    <header class="post-page__header">
      <router-link to="/blog" class="post-page__header__back-button">
        <ArrowButton class="post-page__header__back-button__button left"/>
        <p class="post-page__header__back-button__text">Все статьи</p>
      </router-link>
      <div class="post-page__header__main">

        <div class="post-page__header__tags">
          <Tag v-for="tag in 2" class="post-page__header__tags__tag">Креативность</Tag>
        </div>
        <h1 class="post-page__header__title post-page__title blog-post__header">НЕЙРОФИЗИОЛОГИЯ КРЕАТИВНОСТИ</h1>
        <div class="post-page__header__post-info">
          <div class="post-page__header__post-info__item">
            <svg
                class="post-page__header__post-info__item__icon"
                width="16" height="15">
              <use xlink:href="@/assets/sprites.svg#author"></use>
            </svg>
            <p class="post-page__header__post-info__item__text">Альбина Залилова</p>
          </div>
          <div class="post-page__header__post-info__item">
            <svg
                class="post-page__header__post-info__item__icon"
                width="21" height="10">
              <use xlink:href="@/assets/sprites.svg#two-checks"></use>
            </svg>
            <p class="post-page__header__post-info__item__text">570 человек</p>
          </div>
          <div class="post-page__header__post-info__item">
            <svg
                class="post-page__header__post-info__item__icon"
                width="16" height="16"
            >
              <use xlink:href="@/assets/sprites.svg#watch"></use>
            </svg>
            <p class="post-page__header__post-info__item__text">13 минут</p>
          </div>
        </div>
      </div>
    </header>
    <img src="@/assets/images/popup-image.png" alt="Post image" class="post-page__image">
    <div class="post-page__content">
      <div class="post-page__content__sidebar">
        <PostArticle class="post-page__content__sidebar__article" v-for="article in 3"/>
      </div>
      <div class="post-page__content__info">
        <div class="post-page__content__info__html">
          <h2 class="post-page__content__info__title lead_1">Чтобы решить творческую задачу, все системы мозга должны
            работать когерентно – то есть слаженно и согласованно.
          </h2>
          <p class="post-page__content__info__text body">
            Когда мы достигаем состояния инсайта в процессе работы над задачей, наш мозг буквально озаряет вспышка, а
            все области мозга работают ритмично.

            Как достичь такого состояния? В программах по прокачке креативности вы получите целый набор инструментов.

            Почему командам вообще нужна помощь в развитии креативности?

            Пребывать в креативном процессе — сложно, это дискомфортный и энергозатратный процесс для мозга, ведь он
            представляет из себя хаос. Мы предлагаем методы и подходы, которые помогают преобразовать хаос в пользу для
            бизнеса.

            Когда мы достигаем состояния инсайта в процессе работы над задачей, наш мозг буквально озаряет вспышка, а
            все области мозга работают ритмично.

            Как достичь такого состояния? В программах по прокачке креативности вы получите целый набор инструментов.

            Почему командам вообще нужна помощь в развитии креативности?

            Пребывать в креативном процессе — сложно, это дискомфортный и энергозатратный процесс для мозга, ведь он
            представляет из себя хаос. Мы предлагаем методы и подходы, которые помогают преобразовать хаос в пользу для
            бизнеса.
          </p>
        </div>
        <div class="post-page__share">
          <div class="post-page__share__socials">
            <button class="post-page__share__button">
              <svg class="post-page__share__button__icon"
                   width="29" height="18">
                <use xlink:href="@/assets/sprites.svg#vk"></use>
              </svg>
            </button>
            <button class="post-page__share__button">
              <svg class="post-page__share__button__icon"
                   width="25" height="22">
                <use xlink:href="@/assets/sprites.svg#tg"></use>
              </svg>
            </button>
            <p class="post-page__share__text">Поделиться</p>
          </div>
          <div class="post-page__share__linked">
            <button class="post-page__share__button">
              <svg class="post-page__share__button__icon"
                   width="31" height="30">
                <use xlink:href="@/assets/sprites.svg#chain"></use>
              </svg>
            </button>
            <p class="post-page__share__text">Скопировать</p>

          </div>

        </div>
      </div>
    </div>
    <div class="post-page__digest">
      <h3 class="post-page__digest__title heading_4">Получите весь дайджест</h3>
      <form @submit.prevent="digestSubmit" class="post-page__digest__form">
        <div class="post-page__digest__form__row">
          <input class="standard-input post-page__digest__form__input" type="text" placeholder="ФИО" name="name"
                 id="digest-name">
          <input class="standard-input post-page__digest__form__input" type="text" placeholder="Компания" name="company"
                 id="digest-company">
        </div>
        <div class="post-page__digest__form__row">
          <input class="standard-input post-page__digest__form__input" type="text" placeholder='Номер телефона'
                 name="phone" id="digest-phone">
          <input class="standard-input post-page__digest__form__input" type="text" placeholder="E-mail" name="email"
                 id="digest-email">
        </div>
        <SecondaryButton class="post-page__digest__form__submit">Получить</SecondaryButton>
      </form>
    </div>
  </main>
</template>

<script setup>
import Tag from '@/components/Buttons/Tag.vue';
import PostArticle from '@/components/PostArticle.vue';
import SecondaryButton from '@/components/Buttons/Secondary.vue';
import ArrowButton from '@/components/Buttons/Arrow.vue';

const digestSubmit = () => console.log("Submit digest form");
</script>

<style lang='scss'>
.post-page {
  width: 100%;
  max-width: $maxwidth;
  margin: 140px auto 0;
  padding-bottom: 140px;

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    grid-gap: 86px;

    &__back-button {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      grid-gap: 8px;
      text-decoration: none;
      color: $BLACK_100;
      flex-shrink: 0;

      &__button {
        flex-shrink: 0;
        width: 34px;
        height: 34px;
        border-radius: 90px;
        border: 2px solid $BLACK_75;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &__text {
        font-family: 'Stratos LC Medium';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 135%;
      }
    }

    &__main {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

    }

    &__tags {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      grid-gap: 8px;
    }

    &__title {
      font-family: 'Stratos LC Bold', sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 112px;
      line-height: 100%;
      text-transform: uppercase;
      margin: 60px 0 30px;
    }

    &__post-info {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      grid-gap: 29px;

      &__item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        grid-gap: 5px;
        &:nth-child(1){
          fill: $BLACK_100;
        }
        &:nth-child(2), &:nth-child(3) {
          fill: transparent;
          stroke: $BLACK_75;
        }
      }
    }
  }

  &__image {
    width: 100%;
    height: auto;
    max-width: 100%;
    object-fit: contain;
    margin: 80px 0;
  }

  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    grid-gap: 125px;

    &__sidebar {
      width: 295px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: flex-start;
      grid-gap: 45px;
      flex-shrink: 0;
    }

    &__info {
      flex-grow: 0;

      &__title {
        margin-bottom: 32px;
      }
    }
  }

  &__share {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 75px;
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

    &__linked {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      grid-gap: 20px;

      button {
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

  &__digest {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin: 280px 0px 180px;

    &__title {
      width: 399px;
      flex-shrink: 0;
      flex-grow: 0;
      color: $BRIGHT_GREEN_100;
    }

    &__form {
      width: 820px;
      flex-shrink: 0;
      flex-grow: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      grid-gap: 20px;

      &__row {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1 0 auto;
      }

      &__submit {
        align-self: flex-end;
        margin-top: 20px;
      }
    }
  }
}
</style>