<template>
  <main class="page home-page wrapper-padding">
        <MainScreen class="screen"/>
<!--            <TrainingsScreen class="trainings-screen screen"/>-->
    <!--    <Filters class="Filters wrapper-maxwidth"/>-->
    <!--    <BlogScreen class="screen blog-screen"/>-->
<!--            <WorkersSlider class="workers-slider screen"/>-->
    <!--    <Form @submit="formSubmit">-->
    <!--      <template #title>-->
    <!--        <h3 class="form__title">Напишите нам, если вам нужна консультация</h3>-->
    <!--      </template>-->
    <!--      <template #inputs>-->
    <!--        <div class="form__row">-->
    <!--          <input class="form__input" type="text" placeholder="ФИО" name="name"-->
    <!--                 id="digest-name">-->
    <!--          <input class="form__input" type="text" placeholder="Компания" name="company"-->
    <!--                 id="digest-company">-->
    <!--        </div>-->
    <!--        <div class="form__row">-->
    <!--          <input class="form__input" type="text" placeholder='Номер телефона'-->
    <!--                 name="phone" id="digest-phone">-->
    <!--          <input class="form__input" type="text" placeholder="E-mail" name="email"-->
    <!--                 id="digest-email">-->
    <!--        </div>-->
    <!--        <textarea class="form__input" placeholder=Сообщение-->
    <!--                  name="phone" id="digest-phone"/>-->
    <!--      </template>-->
    <!--      <template #button-text>Отправить</template>-->
    <!--    </Form>-->
<!--    <button @click="openModal('directions')">Directions modal</button>-->
    <!--    <button @click="openModal('post')">Post modal</button>-->
  </main>
</template>
<script setup>
import MainScreen from '@/components/Screens/Main.vue';
// import TrainingsScreen from '@/components/Screens/Trainings.vue';
// import Filters from '@/components/Filters.vue';
// import BlogScreen from '@/components/Screens/Blog.vue';
// import WorkersSlider from '@/components/Screens/WorkersSlider.vue';
// import Form from '@/components/Form.vue';
// import SecondaryCheckbox from "@/components/Checkbox/Secondary.vue";
import {openModal} from "@/logics/modals.js";

const formSubmit = () => console.log("Form submit function");
</script>

<style lang="scss">
.home-page {
  width: 100%;
  margin: 0;
}
</style>