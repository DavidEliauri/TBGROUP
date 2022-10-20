<template>
  <main class="formats-page page wrapper-maxwidth wrapper-padding">
    <div class="formats-page__information">
      <h1 class="formats-page__title heading_3">
        Форматы
      </h1>
      <p class="formats-page__text">
        Выбирайте формат для
        развития креативности в
        зависимости от целей и
        задач, которые вы ставите
        перед командой. Важно
        помнить, что
        универсального формата
        для развития
        креативности не
        существует, а разные
        форматы могут дополнять
        друг друга и
        комбинироваться.
      </p>
    </div>
    <div class="formats-page__table__wrapper">
      <table class="formats-page__table">
        <tbody>
        <tr>
          <th></th>
          <th>
            <p class="formats-page__table__subheader subheader_1">марафон</p>
            <p class="formats-page__table__after-text body_3">online</p>
          </th>
          <th>
            <p class="formats-page__table__subheader subheader_1">тренинг</p>
            <p class="formats-page__table__after-text body_3">Online / offline</p>
          </th>
          <th>
            <p class="formats-page__table__subheader subheader_1">игра</p>
            <p class="formats-page__table__after-text body_3">Online / offline</p>
          </th>
          <th>
            <p class="formats-page__table__subheader subheader_1">сессия</p>
            <p class="formats-page__table__after-text body_3">Online / offline</p>
          </th>
        </tr>
        <tr>
          <td><p class="body_3">Решение кейсов</p></td>
          <td>
            <CheckboxPrimary :modelValue="false"/>
          </td>
          <td>
            <CheckboxPrimary :modelValue="false"/>
          </td>
          <td>
            <CheckboxPrimary :modelValue="false"/>
          </td>
          <td>
            <CheckboxPrimary :modelValue="true"/>
          </td>
        </tr>
        <tr>
          <td><p class="body_3">Знания</p></td>
          <td>
            <CheckboxPrimary :modelValue="true"/>
          </td>
          <td>
            <CheckboxPrimary :modelValue="true"/>
          </td>
          <td>
            <CheckboxPrimary :modelValue="false"/>
          </td>
          <td>
            <CheckboxPrimary :modelValue="false"/>
          </td>
        </tr>
        <tr>
          <td><p class="body_3">Навыки</p></td>
          <td>
            <CheckboxPrimary :modelValue="false"/>
          </td>
          <td>
            <CheckboxPrimary :modelValue="true"/>
          </td>
          <td>
            <CheckboxPrimary :modelValue="true"/>
          </td>
          <td>
            <CheckboxPrimary :modelValue="false"/>
          </td>
        </tr>
        <tr>
          <td><p class="body_3">Расширение кругозора</p></td>
          <td>
            <CheckboxPrimary :modelValue="true"/>
          </td>
          <td>
            <CheckboxPrimary :modelValue="false"/>
          </td>
          <td>
            <CheckboxPrimary :modelValue="false"/>
          </td>
          <td>
            <CheckboxPrimary :modelValue="false"/>
          </td>
        </tr>
        <tr>
          <td><p class="body_3">Глубина применения инструментов</p></td>
          <td>
            <CheckboxPrimary :modelValue="false"/>
          </td>
          <td>
            <CheckboxPrimary :modelValue="false"/>
          </td>
          <td>
            <CheckboxPrimary :modelValue="false"/>
          </td>
          <td>
            <CheckboxPrimary :modelValue="true"/>
          </td>
        </tr>
        <tr>
          <td><p class="body_3">Продолжительность</p></td>
          <td class="body_3">
            4-21 дней

          </td>
          <td class="body_3">
            1-2 дня

          </td>
          <td class="body_3">
            4 часа
          </td>
          <td class="body_3">
            от 4 часов
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="formats-page__additional">
      <div class="formats-page__notes">
        <div class="formats-page__notes__row body_3">
          <CheckboxPrimary disabled class="formats-page__notes__checkbox"/>
          — Хорошо
        </div>
        <div class="formats-page__notes__row body_3">
          <CheckboxPrimary disabled class="formats-page__notes__checkbox"/>
          — Отлично
        </div>
      </div>
      <SecondaryButton class="formats-page__button">Запросить пример программ</SecondaryButton>
    </div>
  </main>
</template>

<script setup>
import CheckboxPrimary from '@/components/Checkbox/Primary.vue';
import SecondaryButton from "@/components/Buttons/Secondary.vue";
</script>

<style lang='scss'>
@import '@/assets/scss/adaptive_fonts.scss';

.formats-page {
  overflow: visible;

  &__information {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    grid-gap: 103px;
    width:100%;
    @media screen and (max-width: $maxwidth) {
      grid-gap: 20px;
    }
    @media screen and (max-width: $notebook) {
      flex-direction: column;
      justify-content: flex-start;
    }
  }

  &__text {
    font-family: 'Stratos LC Regular', sans-serif;
    font-style: normal;
    font-weight: 400;
    @extend .adaptive_20px;
    line-height: 135%;
    max-width: 782px;
  }

  &__table {
    width: 100%;
    table-layout: fixed;
    min-width: 650px;

    &__wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      overflow-x: auto;
      width: 100%;
      margin: 72px 0 32px;
      @media screen and (max-width: $notebook) {
        margin: 40px 0 20px;
      }

    }

    &__subheader, &__after-text {
      text-align: left;
    }

    th {
      padding: 12px 20px 0;
      text-align: left;

      @media screen and (max-width: $maxwidth) {
        padding: 10px;
      }
    }

    th:not(:last-child) {
      border-right: 2px solid black;
    }

    th:not(:first-child) {
      max-width: 210px;
    }

    th:first-child {
      width: 400px;
      @media screen and (max-width: $maxwidth) {
        width: 25%;
      }
    }

    tr:first-child {
      height: 75px;
      border-bottom: 2px solid black;
    }

    tr > td:first-of-type {
      border-left: none;
      padding-left: 0;
    }

    tr > td:last-of-type {
      border-right: none;
      padding-right: 0;
    }

    td:not(:last-child) {
      border-right: 2px solid black;
    }

    tr:last-child {
      :not(:first-child) {
        color: rgba($BLACK, .60);
      }
    }

    td {
      padding: 11px 22px;
      vertical-align: middle;
      @media screen and (max-width: $maxwidth) {
        padding: 10px;
      }
    }
  }

  &__additional {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (max-width: $tablet) {
      grid-gap: 20px;
      flex-direction: column;
    }
  }

  &__notes {
    display: flex;
    flex-direction: column;
    grid-gap: 4px;

    &__row {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      color: rgba($BLACK, .30);

      &:first-child {
        label {
          background-color: rgba($BLACK, .60);
        }
      }
    }

    &__checkbox {
      transform: scale(calc(16 / 24));
    }
  }

  &__button {
    margin-top: 28px;
    @media screen and (max-width: $tablet) {
      align-self:flex-end;
      margin-top: 0;
    }
    @media screen and (max-width: $phone) {
      align-self: center;
    }
  }
}
</style>