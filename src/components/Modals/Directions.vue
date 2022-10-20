<template>
  <div class="direction-modal modal__content">
    <div class="direction-modal__row">
      <p class="direction-modal__count body"><span class="direction-modal__count__pre">Выбрано:</span> 2 направления</p>
      <CloseButton @click="$emit('close')" class="direction-modal__close green"/>
    </div>
    <Form class="direction-modal__form" @submit="direction-modalSubmit" :is_with_title="false">
      <template #inputs>
        <div class="direction-modal__form__row form__row">
          <input class="direction-modal__form__input form__input" type="text" placeholder="ФИО" name="name"
                 id="direction-modal-name">
          <input class="direction-modal__form__input form__input" type="text" placeholder="Компания" name="company"
                 id="direction-modal-company">
        </div>
        <div class="direction-modal__form__row form__row">
          <input class="direction-modal__form__input form__input" type="text" placeholder='Номер телефона'
                 name="phone" id="direction-modal-phone">
          <input class="direction-modal__form__input form__input" type="text" placeholder="E-mail" name="email"
                 id="direction-modal-email">
        </div>
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
.direction-modal {
  margin: auto 0;
  background-color: $IVORY;
  border-radius: 2px;
  color: $GREEN;
  display: flex;
  flex-direction: column;
  padding: 40px 40px 60px;
  @media screen and (max-width: $notebook_start) {
    padding: auto-calculate($notebook_start, $tablet, 40px, 20px) auto-calculate($notebook_start, $tablet, 40px, 20px) auto-calculate($notebook_start, $tablet, 60px, 30px);
  }
  @media screen and (max-width: $tablet) {
    width:100%;
    padding: 20px 20px 30px;
  }


  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 48px;
    @media screen and (max-width: $notebook_start) {
      margin-bottom: auto-calculate($notebook_start, $tablet, 48px, 24px);
    }
    @media screen and (max-width: $tablet) {
      margin-bottom: 20px;
    }
  }

  &__count {
    &__pre {
      color: rgba($GREEN, 0.6);
    }
  }
  &__form{
    width: 820px;
    @media screen and (max-width: $notebook) {
      width: 600px;
    }
    @media screen and (max-width: $tablet) {
      width: 100%;
    }
  }
}
</style>