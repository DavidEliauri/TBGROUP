<template>
  <div class="program-modal modal__content">
    <NavigationModal @close="close" logo_color="white" close_color="white" class="program-modal__navigation-modal"/>
    <div class="program-modal__header">
      <div class="program-modal__header__image__wrapper">
        <img src="@/assets/images/TwoDogs.png" alt="Program modal image" class="program-modal__header__image"/>
      </div>
      <div class="program-modal__header__info">
        <p class="program-modal__header__info__type body">Мероприятие</p>
        <div class="program-modal__header__info__content">
          <p class="program-modal__header__info__content__dates body">2 сентября 11:00–11:45</p>
          <h1 class="program-modal__header__info__content__title heading_4">Метод морфологического ящика</h1>
        </div>
      </div>
    </div>
    <div class="program-modal__content">
      <div class="program-modal__content__speakers">
        <p class="program-modal__content__speakers__title">Спикеры</p>
        <div class="program-modal__content__speakers__content">
          <div v-for="(speaker,index) in 2" :key="`program-modal-speaker-${index}`"
               class="program-modal__content__speakers__content__item">
            <img src="@/assets/images/Anna.png" alt="Speaker image"
                 class="program-modal__content__speakers__content__item__image">
            <p class="program-modal__content__speakers__content__item__name">
              АННА
              СИМАКОВА
            </p>
            <p class="program-modal__content__speakers__content__item__job-level body">Ведущий тренер-консультант</p>
          </div>
        </div>
      </div>
      <div class="program-modal__content__main">
        <p class="program-modal__content__main__pre lead_1">
          Модульная программа комплексного развития руководителей
          Яндекс.Маркет на основе skill set, охватывающая блоки развития управленческих навыков, личностного развития,
          развития аналитических способностей коммуникации.
        </p>
        <div class="program-modal__content__main__program">
          <div class="program-modal__content__main__program__title">Программа</div>
          <p class="program-modal__content__main__program__text body">
            • Участник получает mystery box со всем необходимым для прохождения программы
            • Участник проходит тестирование / решает кейсы для оценки текущего уровня развития
            навыков
            • По результатам оценки участник видит текущий уровень развития своих навыков и индивидуальные рекомендации
            по прохождению программы
            • Вне зависимости от рекомендаций участник может выбрать персональный трек развития — пройти любое
            количество модулей из любого кластера
          </p>
        </div>
        <PrimaryButton class="program-modal__content__main__button">узнать больше</PrimaryButton>
      </div>
    </div>
    <div class="program-modal__contacts">
      <h4 class="program-modal__contacts__title heading_4">контакты для связи</h4>
      <form @submit.prevent="formSubmit" class="program-modal__contacts__form">
      <div class="program-modal__contacts__form__row">
        <input class="standard-input program-modal__contacts__form__input" type="text" placeholder="ФИО" name="name"
               id="digest-name">
        <input class="standard-input program-modal__contacts__form__input" type="text" placeholder="Компания" name="company"
               id="digest-company">
      </div>
      <div class="program-modal__contacts__form__row">
        <input class="standard-input program-modal__contacts__form__input" type="text" placeholder='Номер телефона'
               name="phone" id="digest-phone">
        <input class="standard-input program-modal__contacts__form__input" type="text" placeholder="E-mail" name="email"
               id="digest-email">
      </div>
      <SecondaryButton class="program-modal__contacts__form__submit">Получить</SecondaryButton>
      </form>
    </div>
  </div>
</template>

<script setup>
import NavigationModal from '@/components/NavigationModal.vue';
import PrimaryButton from '@/components/Buttons/Primary.vue';
import SecondaryButton from '@/components/Buttons/Secondary.vue';
const close = () => console.log("close function");
const formSubmit = () => console.log('Form submit function');
</script>

<style lang='scss'>
$z_navigation_modal: 10;
$program_modal_inner_padding: 73px;
.program-modal {
  margin: 28px !important;
  width: 1440px;
  max-width: calc(100% - 28px * 2);
  background-color: $IVORY;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 100px;
  border-radius: 2px;
  padding-bottom: 120px;
  position: relative;

  &__navigation-modal {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    z-index: $z_navigation_modal;
    padding: 0 100px;
  }

  &__header {
    position: relative;
    width: 100%;
    &__image {
      &__wrapper {
        min-width: 100%;
        width: 100%;
        max-width: 100%;
        height: auto;
        left: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
      }
      width: 100%;
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }

    &__info {
      position: absolute;
      bottom: 60px;
      padding: 0 100px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      grid-gap: 44px;
      color: $IVORY;
      &__type{
        height:max-content;
      }
      &__content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        grid-gap: 22px;

        &__title {
          margin: 0;
          width: 476px;
        }
      }
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    grid-gap: 157px;
    padding: 0 $program_modal_inner_padding;

    &__speakers {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      grid-gap: 44px;
      width: 262px;
      flex-shrink: 0;
      flex-grow: 0;

      &__title {
        font-family: 'Stratos LC Bold', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 100%;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      &__content {
        width: 100%;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        grid-gap: 40px;

        &__item {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          width: 100%;
          max-width: 100%;

          &__image {
            width: 82px;
            height: 82px;
            border-radius: 50%;
            margin-bottom: 28px;
          }

          &__name {
            font-family: 'Stratos LC Black Italic', sans-serif;
            font-style: normal;
            font-weight: 900;
            font-size: 16px;
            line-height: 100%;
            text-transform: uppercase;
            margin-bottom: 8px;
          }

          //&__job-level{}
        }
      }
    }

    &__main {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      grid-gap: 60px;

      &__program {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        grid-gap: 32px;

        &__title {
          font-family: 'Stratos LC Bold', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 100%;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
      }
    }
  }

  &__contacts {
    margin-top: 240px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    grid-gap: 20px;
    width: 100%;
    padding: 0 $program_modal_inner_padding;

    &__title {
      width: 399px;
      flex-shrink: 0;
      flex-grow: 0;
      color: $GREEN;
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