<template>
  <div class="post-modal modal__content">
    <CloseButton @click="$emit('close')" class="post-modal__close-button"/>
    <img src="@/assets/images/WaterJumper.png" alt="Post modal image" class="post-modal__image">
    <div class="post-modal__content">
      <p class="post-modal__pre body">
        кейс
      </p>
      <div class="post-modal__main">
        <h2 class="post-modal__title heading_4">Нейрофизиология креативности</h2>
        <p class="post-modal__nutshell lead_1">Чтобы решить творческую задачу, все системы мозга должны работать
          когерентно – то есть слаженно и согласованно. Почему командам вообще нужна помощь в развитии креативности?</p>
        <div class="post-modal__blocks">
          <div class="post-modal__block post-modal__more-block">
            <h3 class="post-modal__more-block__title subheader_2 uppercase">Подробнее</h3>
            <div class="post-modal__more-block__content">
              <div class="post-modal__more-block__item" v-for="(more_block_item, more_block_item_index) in 4">
                <h4 class="post-modal__more-block__item__title subheader_2">Автор</h4>
                <p class="post-modal__more-block__item__text body">Альбина Залилова</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Form class="post-modal__form" @submit="digestSubmit">
      <template #title>
        <h3 class="form__title">Ваши контакты для связи</h3>
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
</script>

<style lang='scss'>
.post-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border-radius: 2px;
  background-color: $IVORY;
  padding: 172px 72px 120px;
  @media screen and (max-width: $notebook_start) {
    padding: auto-calculate($notebook_start, $notebook, 172px, 86px) auto-calculate($notebook_start, $notebook, 72px, 36px) auto-calculate($notebook_start, $notebook, 120px, 60px);
  }
  @media screen and (max-width: $notebook) {
    padding: auto-calculate($notebook, $tablet, 86px, 43px) auto-calculate($notebook_start, $notebook, 36px, 18px) auto-calculate($notebook_start, $notebook, 60px, 30px);
  }
  @media screen and (max-width: $tablet) {
    padding: 43px 18px 30px;
  }

  &__close-button {
    position: absolute;
    top: 40px;
    right: 100px;
  }

  &__image {
    height: auto;
    width: auto;
    max-width: 100%;
    object-fit: contain;
    margin-bottom: 30px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    grid-gap: 235px;
    @media screen and (max-width: $notebook_start) {
      grid-gap: auto-calculate($notebook_start, $notebook, 235px, 117.5px);
    }
    @media screen and (max-width: $notebook) {
      grid-gap: auto-calculate($notebook, $tablet, 117.5px, 60px);
    }
    @media screen and (max-width: $tablet) {
      flex-direction: column;
      grid-gap: 40px;
    }
  }

  &__pre {
    color: $GREEN;
  }

  &__title {
    max-width: 610px;
    color: $GREEN;
    margin-bottom: 144px;
    @media screen and (max-width: $notebook_start) {
      margin-bottom: auto-calculate($notebook_start, $notebook, 144px, 72px);
    }
    @media screen and (max-width: $notebook) {
      max-width: 100%;
      margin-bottom: auto-calculate($notebook, $tablet, 72px, 36px);
    }
    @media screen and (max-width: $tablet) {
      margin-bottom: 36px;
    }
  }

  &__nutshell {
    margin-bottom: 56px;
  }

  &__blocks {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
  }

  &__more-block {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    grid-gap: 32px;
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

  &__form {
    margin-top: 220px;
    @media screen and (max-width: $notebook_start) {
      margin-top: auto-calculate($notebook_start, $tablet, 220px, 110px);
    }
    @media screen and (max-width: $tablet) {
      margin-top: 110px;
    }
  }
}
</style>