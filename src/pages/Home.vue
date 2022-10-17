<template>
  <main class="page home-page wrapper-padding">
    <!--        <TrainingsScreen class="trainings-screen screen"/>-->
    <!--    <MainScreen class="screen"/>-->
    <!--    <Filters class="Filters wrapper-maxwidth"/>-->
    <!--    <BlogScreen class="screen blog-screen"/>-->
    <!--        <WorkersSlider class="workers-slider screen"/>-->
    <Form @submit="formSubmit" :checks="form_checks" :is_with_checks="true">
      <template #title>
        <h3 class="form__title">Ваши контакты для связи</h3>
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
      <template #checks>
        <p class="form__checks__title">{{ form_checks.title }}</p>
        <div class="form__checks__content">
          <label class="form__checkbox" :for="`form-checkbox-${check.id}`" v-for="check in form_checks.values">
            <SecondaryCheckbox class="form__checkbox__input" :id="`form-checkbox-${check.id}`" v-model="check.value"
                               :value="!check.value"/>
            <span class="form__checkbox__name">{{ check.title }}</span>
          </label>
        </div>
      </template>
      <template #button-text>Отправить</template>
    </Form>
  </main>
</template>
<script setup>
// import MainScreen from '@/components/Screens/Main.vue';
// import TrainingsScreen from '@/components/Screens/Trainings.vue';
// import Filters from '@/components/Filters.vue';
// import BlogScreen from '@/components/Screens/Blog.vue';
// import WorkersSlider from '@/components/Screens/WorkersSlider.vue';
import Form from '@/components/Form.vue';
import SecondaryCheckbox from "@/components/Checkbox/Secondary.vue";
import {reactive} from "vue";


const formSubmit = () => console.log("Form submit function");

const form_checks = reactive({
      title: 'На какие мероприятия хотели бы зарегистрироваться?',
      values: [
        {id: 1, title: 'Мероприятие 1', value: false},
        {id: 2, title: 'Мероприятие 2', value: false},
        {id: 3, title: 'Мероприятие 3', value: false}
      ]
    }
);
</script>

<style lang="scss">
.home-page {
  width: 100%;
  margin: 0;
}
</style>