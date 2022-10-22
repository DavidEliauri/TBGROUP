<template>
  <div class="post-modal modal__content wrapper-maxwidth">
    <CloseButton @click="$emit('close')" class="post-modal__close-button" :class="post_type=='theme'?'green':'white'"/>
    <header class="post-modal__header" :class="{'post-modal__header_large':post_type!=='theme'}">
      <img src="@/assets/images/TwoDogs.png"
           alt="Post modal image" class="post-modal__header__image">
      <div class="post-modal__header__info">
        <p class="post-modal__header__info__pre body">
          мероприятие
        </p>
        <div class="post-modal__header__info__content">
          <p class="post-modal__header__info__date body" v-if="post_type==='event'">2 сентября 11:00–11:45</p>
          <h2 class="post-modal__header__info__title heading_4">Нейрофизиология креативности</h2>
        </div>
      </div>
    </header>
    <div class="post-modal__content">
      <div class="post-modal__main">
        <p class="post-modal__nutshell lead_1">Чтобы решить творческую задачу, все системы мозга должны работать
          когерентно – то есть слаженно и согласованно. Почему командам вообще нужна помощь в развитии креативности?</p>
        <div class="post-modal__blocks">
          <div class="post-modal__block post-modal__grid-block">
            <h3 class="post-modal__grid-block__title subheader_2 uppercase">Спикеры</h3>
            <div class="post-modal__grid-block__content">
              <div class="post-modal__grid-block__item" v-for="(more_block_item, more_block_item_index) in 4">
                <h4 class="post-modal__grid-block__item__title subheader_2 ">Автор</h4>
                <p class="post-modal__grid-block__item__text body">Альбина Залилова</p>
              </div>
            </div>
          </div>
          <div class="post-modal__block post-modal__detail-block">
            <h3 class="post-modal__detail-block__title subheader_2 uppercase">Задачи</h3>
            <p class="post-modal__detail-block__content body">
              Обмен знаниями и опытом между участниками программы обучения из различных подразделений и регионов
              Осмысление полученных на программе знаний и навыков, роли руководителя в процессе
              Моделирование процесса управления сервисом: “как есть сейчас” и “как должно быть”
              Знакомство и общение участников программы в неформальной обстановке
            </p>
          </div>
        </div>
      </div>
    </div>
    <Form class="post-modal__form" @submit="digestSubmit">
      <template #title>
        <h3 class="form__title">Ваши контакты для cвязи</h3>
      </template>
      <template #inputs>
        <div class="form__row">
          <input class="form__input" type="text" placeholder="ФИО" name="name"
                 id="post-modal-name">
          <input class="form__input" type="text" placeholder="Компания" name="company"
                 id="post-modal-company">
        </div>
        <div class="form__row">
          <input class="form__input" type="text" placeholder='Номер телефона'
                 name="phone" id="post-modal-phone">
          <input class="form__input" type="text" placeholder="E-mail" name="email"
                 id="post-modal-email">
        </div>
        <textarea class="form__input" placeholder=Сообщение
                  name="phone" id="digest-phone"/>
      </template>
      <template #button-text>Отправить</template>
    </Form>
  </div>
</template>

<script setup>
import CloseButton from '@/components/Buttons/Close.vue';
import Form from '@/components/Form.vue';

const post_type = 'event';
</script>

<style lang='scss'>

@mixin post-modal-paddinged {
  padding-left: 72px;
  padding-right: 72px;
  @media screen and (max-width: $notebook_start) {
    padding-left: auto-calculate($notebook_start, $notebook, 72px, 36px);
    padding-right: auto-calculate($notebook_start, $notebook, 72px, 36px)
  }
  @media screen and (max-width: $notebook) {
    padding-left: auto-calculate($notebook, $tablet, 36px, 18px);
    padding-right: auto-calculate($notebook, $tablet, 36px, 18px);
  }
  @media screen and (max-width: $tablet) {
    padding-left: 18px;
    padding-right: 18px;
  }
}

.post-modal {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border-radius: 2px;
  background-color: $IVORY;
  padding-bottom: 120px;
  @media screen and (max-width: $notebook_start) {
    padding-bottom: auto-calculate($notebook_start, $notebook, 120px, 60px);
  }
  @media screen and (max-width: $notebook) {
    padding-bottom: auto-calculate($notebook, $phone_start, 60px, 30px);
  }
  @media screen and (max-width: $phone_start) {
    padding-bottom: 30px;
  }

  &__close-button {
    position: absolute;
    top: 40px;
    right: 100px;
    z-index: 10;
    @media screen and (max-width: $notebook_start) {
      top: auto-calculate($notebook_start, $tablet, 40px, 20px);
      right: auto-calculate($notebook_start, $tablet, 100px, 60px);
    }
    @media screen and (max-width: $tablet) {
      top: 20px;
      right: 20px;
    }
  }


  &__header {
    position: relative;
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 172px;
    padding-bottom: 137px;
    @media screen and (max-width: $notebook_start) {
      padding-top: auto-calculate($notebook_start, $notebook, 172px, 86px);
      padding-bottom: auto-calculate($notebook_start, $notebook, 137px, 73.5px);
    }
    @media screen and (max-width: $notebook) {
      padding-top: auto-calculate($notebook, $tablet, 86px, 43px);
      padding-bottom: auto-calculate($notebook, $tablet, 70px, 35px);
    }

    &_large {
      padding-top: 0;
      padding-bottom: 0;
    }

    &_large &__image {
      width: 100%;
    }

    &__image {
      display: block;
    }

    &__info {
      position: absolute;
      width: 100%;
      bottom: 44px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      @include post-modal-paddinged;

      @media screen and (max-width: $tablet) {
        flex-direction: column;
        grid-gap: 10px;
      }

      &__pre {
        width: 305px;
        @media screen and (max-width: $notebook_start) {
          width: auto-calculate($notebook_start, $notebook, 305px, 152.5px);
        }
        @media screen and (max-width: $notebook) {
          width: auto-calculate($notebook, $tablet, 200px, 100px);
        }
        @media screen and (max-width: $tablet) {
          width: max-content;
        }
        color: $IVORY;
      }

      &__title {
        width: 100%;
        max-width: 500px;
        color: $IVORY;
      }

      &__date {
        margin-bottom: 24px;
        color: $IVORY;

        @media screen and (max-width: $notebook_start) {
          margin-bottom: auto-calculate($notebook_start, $tablet, 24px, 12px);
        }
        @media screen and (max-width: $tablet) {
          margin-bottom: 12px;
        }
      }
    }
  }


  &__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    grid-gap: 235px;
    margin-top: 100px;
    margin-left: 305px;
    @include post-modal-paddinged;


    @media screen and (max-width: $notebook_start) {
      margin-left: auto-calculate($notebook_start, $notebook, 305px, 152.5px);
      margin-top: auto-calculate($notebook_start, $notebook, 100px, 50px);
      grid-gap: auto-calculate($notebook_start, $notebook, 235px, 117.5px);
    }
    @media screen and (max-width: $notebook) {
      margin-top: auto-calculate($notebook, $tablet, 50px, 25px);
      grid-gap: auto-calculate($notebook, $tablet, 117.5px, 60px);
      margin-left: auto-calculate($notebook, $tablet, 200px, 100px);
    }
    @media screen and (max-width: $tablet) {
      margin-left: 0;
      margin-top: 25px;
      flex-direction: column;
      grid-gap: 40px;
    }
  }


  &__blocks {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    grid-gap: 56px;
  }

  &__main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    grid-gap: 56px;
  }

  &__grid-block {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    grid-gap: 32px;
    width: 100%;
    max-width: 818px;
    @media screen and (max-width: $notebook_start) {
      grid-gap: auto-calculate($notebook_start, $tablet, 32px, 16px);
    }

    &__title {
      letter-spacing: 0.1em;
    }

    &__content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 16px 20px;
    }

    &__item {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      grid-gap: 4px;
    }
  }

  &__detail-block {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    grid-gap: 32px;
    width: 100%;
    max-width: 750px;
    @media screen and (max-width: $notebook_start) {
      grid-gap: auto-calculate($notebook_start, $tablet, 32px, 16px);
    }

    &__title {
      letter-spacing: 0.1em;
    }

  }

  &__form {
    margin-top: 220px;
    @include post-modal-paddinged;

    @media screen and (max-width: $notebook_start) {
      margin-top: auto-calculate($notebook_start, $notebook, 220px, 110px);
    }
    @media screen and (max-width: $notebook) {
      margin-top: auto-calculate($notebook, $tablet, 110px, 55px);
    }
    @media screen and (max-width: $tablet) {
      margin-top: 50px;
    }
  }
}
</style>