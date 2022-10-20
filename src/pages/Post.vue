<template>
  <main class="page post-page wrapper-padding">
    <header class="post-page__header">
      <router-link to="/blog" class="post-page__header__back-button">
        <ArrowButton class="post-page__header__back-button__button left"/>
        <p class="post-page__header__back-button__text">Все статьи</p>
      </router-link>
      <div class="post-page__header__main">

        <div class="post-page__header__tags">
          <Tag v-for="tag in 10" class="post-page__header__tags__tag">Креативность</Tag>
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
<!--        <PostArticle class="post-page__content__sidebar__article" v-for="article in 4"/>-->
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
    <Form class="post-page__form" @submit="digestSubmit">
      <template #title>
        <h3 class="form__title">Получите весь дайджест</h3>
      </template>
      <template #inputs>
        <div class="form__row">
          <input class="form__input" type="text" placeholder="ФИО" name="name"
                 id="digest-name">
          <input class="form__input" type="text" placeholder="Компания" name="company"
                 id="digest-company">
        </div>
        <div class="form__row">
          <input class="form__input" type="text" placeholder='Номер телефона'
                 name="phone" id="digest-phone">
          <input class="form__input" type="text" placeholder="E-mail" name="email"
                 id="digest-email">
        </div>
        <textarea class="form__input" placeholder=Сообщение
                  name="phone" id="digest-phone"/>
      </template>
      <template #button-text>Отправить</template>
    </Form>


    <PostsSlider class="post-page__posts-slider"/>





    <!--      <template #checks>-->
    <!--        <p class="form__checks__title">{{ form_checks.title }}</p>-->
    <!--        <div class="form__checks__content">-->
    <!--          <label class="form__checkbox" :for="`form-checkbox-${check.id}`" v-for="check in form_checks.values">-->
    <!--            <SecondaryCheckbox class="form__checkbox__input" :id="`form-checkbox-${check.id}`" v-model="check.value"-->
    <!--                               :value="!check.value"/>-->
    <!--            <span class="form__checkbox__name">{{ check.title }}</span>-->
    <!--          </label>-->
    <!--        </div>-->
    <!--      </template>-->


  </main>
</template>

<script setup>
import Tag from '@/components/Buttons/Tag.vue';
import PostArticle from '@/components/PostArticle.vue';
import ArrowButton from '@/components/Buttons/Arrow.vue';
import Form from '@/components/Form.vue';
import PostsSlider from '@/components/Posts/Slider.vue';

const digestSubmit = () => console.log("Submit digest form");
</script>

<style lang='scss'>
@import '@/assets/scss/adaptive_fonts.scss';

.post-page {
  width: 100%;
  margin-top: 140px;
  padding-bottom: 140px;
  @media screen and (max-width: $notebook_start) {
    margin-top: auto-calculate($notebook_start, $notebook, 140px, 70px);
  }
  @media screen and (max-width: $notebook) {
    margin-top: 70px;
  }

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    grid-gap: 86px;
    @media screen and (max-width: $notebook) {
      flex-direction: column;
      grid-gap: 32px;
    }

    &__back-button {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      grid-gap: 8px;
      text-decoration: none;
      color: $BLACK;
      flex-shrink: 0;

      &__button {
        flex-shrink: 0;
        border-radius: 90px;
        border: 2px solid rgba($BLACK, .75);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &__text {
        font-family: 'Stratos LC Medium', sans-serif;
        font-style: normal;
        font-weight: 500;
        @extend .adaptive_16px;

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
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      grid-gap: 8px;
    }

    &__title {
      font-family: 'Stratos LC Bold', sans-serif;
      font-style: normal;
      font-weight: 900;
      @extend .adaptive_112px;

      line-height: 100%;
      text-transform: uppercase;
      margin: 60px 0 30px;
      @media screen and (max-width: $notebook) {
        margin: 40px 0;
      }
    }

    &__post-info {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      grid-gap: 29px;
      @media screen and (max-width: $notebook_start) {
        grid-gap: auto-calculate($notebook_start, $notebook, 29px, 14.5px);
      }
      @media screen and (max-width: $notebook) {
        grid-gap: 10px;
      }
      @media screen and (max-width: $phone_start) {
        flex-direction: column;
        align-items: flex-start;
      }

      &__item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: nowrap;
        grid-gap: 5px;
        white-space: nowrap;

        font-family: 'Stratos LC Medium', sans-serif;
        font-style: normal;
        font-weight: 500;
        @extend .adaptive_16px;
        line-height: 135%;

        &:nth-child(1) {
          fill: $BLACK;
        }

        &:nth-child(2), &:nth-child(3) {
          fill: transparent;
          stroke: rgba($BLACK, .75);
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
    @media screen and (max-width: $notebook_start) {
      margin: auto-calculate($notebook_start, $notebook, 80px, 40px) 0;
    }
    @media screen and (max-width: $notebook_start) {
      margin: 40px 0;
    }
  }

  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    grid-gap: 125px;
    max-width: 100%;
    @media screen and (max-width: $notebook_start) {
      grid-gap: auto-calculate($notebook_start, $notebook, 125px, 62px);
    }
    @media screen and (max-width: $notebook) {
      grid-gap: auto-calculate($notebook, $tablet, 50px, 20px);
    }
    @media screen and (max-width: $tablet) {
      grid-gap: 60px;
      flex-direction: column-reverse;
    }

    &__sidebar {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: flex-start;
      flex-shrink: 0;
      width: 295px;
      grid-gap: 45px;

      @media screen and (max-width: $notebook_start) {
        grid-gap: auto-calculate($notebook_start, $notebook, 45px, 22.5px);
        width: auto-calculate($notebook_start, $notebook, 295px, 110px);
      }
      @media screen and (max-width: $notebook) {
        width: 200px;
        grid-gap: auto-calculate($notebook, $tablet, 22.5px, 15px);
      }
      @media screen and (max-width: $tablet) {
        width: 100%;
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
      }

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
    @media screen and (max-width: $notebook_start) {
      grid-gap: auto-calculate($notebook_start, $notebook, 100px, 50px);
    }
    @media screen and (max-width: $notebook) {
      grid-gap: auto-calculate($notebook, $tablet, 50px, 25px);
    }
    @media screen and (max-width: $tablet) {
      grid-gap: 25px;

    }
    @media screen and (max-width: $phone) {
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-end;
    }


    &__socials {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      @media screen and (max-width: $phone) {
        flex-direction: row-reverse;
      }

      button:first-of-type {
        margin-right: 8px;
        @media screen and (max-width: $phone) {
          margin: 0;
        }
      }

      button:last-of-type {
        margin-right: 20px;
        @media screen and (max-width: $phone) {
          margin-left: 20px;
        }
      }
    }

    &__linked {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      grid-gap: 20px;
      @media screen and (max-width: $phone) {
        flex-direction: row-reverse;
      }

      button {
        fill: none;
        stroke: $IVORY;
      }
    }

    &__button {
      width: 48px;
      height: 48px;
      background-color: rgba($BLACK, .60);
      border: none;
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
      fill: $IVORY;
      border-radius: 2px;
      @media screen and (max-width: $tablet) {
        width: 40px;
        height: 40px;
        &__icon {
          transform: scale(0.8);
        }
      }
    }

    &__text {
      font-family: 'Stratos LC Medium', sans-serif;
      font-style: normal;
      font-weight: 500;
      @extend .adaptive_16px;

      line-height: 135%;
      color: rgba($BLACK, .30);
    }
  }

  &__digest {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin: 280px 0 180px;

    &__title {
      width: 399px;
      flex-shrink: 0;
      flex-grow: 0;
      color: $GREEN;
    }

    &__form {
      width: 820px;
    }
  }

  &__form {
    margin: 280px 0 296px;
    @media screen and (max-width: $notebook_start) {
      margin: auto-calculate($notebook_start, $notebook, 280px, 140px) 0 auto-calculate($notebook_start, $notebook, 296px, 148px);
    }
    @media screen and (max-width: $notebook) {
      margin: auto-calculate($notebook, $tablet, 140px, 70px) 0;
    }
    @media screen and (max-width: $tablet) {
      margin: 50px 0;
    }
  }
}
</style>