<template>
  <main class="page worker-page">
    <router-link to="#" class="worker-page__back-button">
      <ArrowButton class="worker-page__back-button__button left green"/>
      <p class="worker-page__back-button__text">Назад</p>
    </router-link>
    <div class="worker-page__sides">
      <div class="worker-page__about">
        <img class="worker-page__about__image" src="@/assets/images/TwoWomans.png" alt="Worker image"/>
        <div class="worker-page__about__personal-information">
          <router-link to="#" class="worker-page__about__personal-information__video link">Видеовизитка</router-link>
          <h1 class="worker-page__about__personal-information__name heading_3">Анна <br> Симакова</h1>
          <p class="worker-page__about__personal-information__job-level body_1">Тренер-методолог</p>
        </div>
      </div>
      <div class="worker-page__portfolio">
        <p class="worker-page__portfolio__main lead_1">
          Тренер-методолог, фасилитатор, член Российской Ассоциации фасилитаторов, дипломированный игротехник.
          Ведущий фасилитационных сессий и бизнес-игр, сессий в формате LEGO Serious Play.
        </p>
        <div class="worker-page__portfolio__block worker-page__portfolio__experience">
          <h3 class="worker-page__portfolio__label">Опыт</h3>
          <div class="worker-page__portfolio__content">
            ???????
          </div>
        </div>
        <div class="worker-page__portfolio__block worker-page__portfolio__education">
          <h3 class="worker-page__portfolio__label">Образование</h3>
          <div class="worker-page__portfolio__content">
            ???????
          </div>
        </div>
        <div class="worker-page__portfolio__block worker-page__portfolio__publications">
          <h3 class="worker-page__portfolio__label">Публикации</h3>
          <div class="worker-page__portfolio__content">
            ???????
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import ArrowButton from '@/components/Buttons/Arrow.vue';
</script>

<style lang='scss'>
.worker-page {
  max-width: $maxwidth;
  grid-gap: 44px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  &__back-button{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    grid-gap: 8px;
    font-family: 'Stratos LC Regular',sans-serif;
    font-style: normal;
    font-weight: 400;
    @extend .adaptive_16px;

    line-height: 135%;
    color: $GREEN;
    text-decoration: none;
  }
  &__sides {
    width: 100%;
    border: 1px solid black;
    max-width: $maxwidth;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    grid-gap: 85px;
  }
  &__about {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: $GREEN;
    grid-gap: 60px;

    &__image {
      width: 315px;
      height: 315px;
      border-radius: 50%;
      object-fit: cover;
    }

    &__personal-information {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      grid-gap: 27px;

      &__video {
        font-family: 'Stratos LC Bold';
        font-style: normal;
        font-weight: 700;
        @extend .adaptive_18px;

        line-height: 100%;
        letter-spacing: 0.1em;
        text-decoration-line: underline;
        text-transform: uppercase;
        color: $GREEN
      }

      &__job-level {

      }
    }
  }
}
</style>