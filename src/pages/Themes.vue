<template>
  <main class="page themes-page">
    <div class="themes-page__information">
      <h1 class="themes-page__title heading_3">
        Что хотите прокачать?
      </h1>
      <p class="themes-page__text lead_1">
        Здесь вы видите набор направлений, по которым можно развивать креативное мышление. Эти решения можно применять
        точечно, а можно комбинировать друг с другом в любом порядке.
      </p>
    </div>
    <div class="themes-page__viewport non-scrollbar">
      <div class="themes-page__viewport__before"></div>
      <div class="themes-page__content non-scrollbar">
        <div v-for="item in 10" class="themes-page__content__item">
          <div class="themes-page__content__item__visible">
            <p class="themes-page__content__item__visible__title subheader_1">
              {{
                item % 3 === 0 ? 'Личный креативный потенциал' : item % 3 === 1 ? 'Формулирование качественных креативных задач' : 'Поиск вдохновения через что-то там'
              }}
            </p>
            <button @click.prevent="itemClickHandler" class="themes-page__content__item__visible__show-button">
              <svg class="themes-page__content__item__visible__show-button__icon"
                   width="10"
                   height="10">
                <use xlink:href="@/assets/sprites.svg#plus-small"></use>
              </svg>
            </button>
            <button class="themes-page__content__item__visible__add-button">Добавить</button>
          </div>
          <div class="themes-page__content__item__content body">
            {{
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam architecto consectetur cum dignissimos dolor dolore dolores ducimus eligendi eos laudantium modi nemo nisi perspiciatis porro, quaerat quam ratione repellat, saepe sed sit temporibus ullam voluptatibus. At, cumque ex, explicabo hic ipsam iste laudantium molestias non optio qui quos totam unde vel voluptate voluptates? At atque in iusto libero non quas. Accusantium doloremque earum labore maxime sunt! Architecto at nemo optio quo, veniam voluptatem! Aperiam asperiores at blanditiis dolorem ducimus eius est harum id ipsam itaque labore laborum magnam maxime minima modi molestias nam nemo nesciunt nostrum numquam perferendis perspiciatis possimus provident quas qui quia quisquam quo, reprehenderit saepe sequi similique sunt temporibus voluptate! Accusantium dolores eos fugiat provident! A adipisci animi, cupiditate dignissimos doloremque est exercitationem facilis fugit inventore iusto maiores perferendis placeat provident quam quibusdam quod rem repellat sapiente soluta sunt temporibus totam vero vitae. Atque eius expedita explicabo fugiat, iste iure ratione totam. A accusantium ad aut corporis delectus dolor ducimus enim error esse et expedita fugiat illo illum impedit in ipsam iusto libero magni, nihil, numquam officiis possimus quam quis repudiandae sed suscipit, tempora voluptatum? Id laboriosam nisi qui reiciendis unde? Aperiam commodi explicabo fugiat vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam architecto consectetur cum dignissimos dolor dolore dolores ducimus eligendi eos laudantium modi nemo nisi perspiciatis porro, quaerat quam ratione repellat, saepe sed sit temporibus ullam voluptatibus. At, cumque ex, explicabo hic ipsam iste laudantium molestias non optio qui quos totam unde vel voluptate voluptates? At atque in iusto libero non quas. Accusantium doloremque earum labore maxime sunt! Architecto at nemo optio quo, veniam voluptatem! Aperiam asperiores at blanditiis dolorem ducimus eius est harum id ipsam itaque labore laborum magnam maxime minima modi molestias nam nemo nesciunt nostrum numquam perferendis perspiciatis possimus provident quas qui quia quisquam quo, reprehenderit saepe sequi similique sunt temporibus voluptate! Accusantium dolores eos fugiat provident! A adipisci animi, cupiditate dignissimos doloremque est exercitationem facilis fugit inventore iusto maiores perferendis placeat provident quam quibusdam quod rem repellat sapiente soluta sunt temporibus totam vero vitae. Atque eius expedita explicabo fugiat, iste iure ratione totam. A accusantium ad aut corporis delectus dolor ducimus enim error esse et expedita fugiat illo illum impedit in ipsam iusto libero magni, nihil, numquam officiis possimus quam quis repudiandae sed suscipit, tempora voluptatum? Id laboriosam nisi qui reiciendis unde? Aperiam commodi explicabo fugiat vel.'.substring(0, Math.floor(Math.random() * 1000 + 1))
            }}
          </div>
        </div>
      </div>
      <div class="themes-page__viewport__after"></div>
    </div>
  </main>
</template>

<script setup>
import {onMounted} from 'vue';
import {gsap} from 'gsap';
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import ScrollBooster from "scrollbooster";

gsap.registerPlugin(ScrollToPlugin);
let SCROLL_BOOSTER = null;
let is_item_click_allowed = true;
onMounted(() => SCROLL_BOOSTER = new ScrollBooster({
  viewport: document.querySelector('.themes-page__viewport'),
  content: document.querySelector('.themes-page__content'),
  scrollMode: 'native',
  direction: 'vertical'
}));

const closeItem = target => {
  gsap.to(`${target} .themes-page__content__item__visible__show-button`, {opacity: 1, display: 'flex', duration: .2});
  gsap.to(`${target}  .themes-page__content__item__content`, {
    marginTop: 0, height: 0, duration: .2
  });
}

const openItem = target => {
  is_item_click_allowed = false;
  gsap.to(`${target} .themes-page__content__item__visible__show-button`, {opacity: 0, display: 'none', duration: .2});
  gsap.to(`${target}  .themes-page__content__item__content`, {
    marginTop: 20,
    height: 'auto',
    duration: .2,
    onComplete: () => is_item_click_allowed = true,
    onUpdate: () => {
      gsap.to('.themes-page__viewport', {scrollTo: document.querySelector(target).offsetTop - document.querySelector('.themes-page__content').offsetTop})
      SCROLL_BOOSTER.updateMetrics();
    }
  });
}

const itemClickHandler = event => {
  if (!is_item_click_allowed) return;
  const clicked_item = event.target.closest('.themes-page__content__item');
  if (clicked_item.classList.contains('open')) return;
  const previous_active_item = document.querySelector('.themes-page__content__item.open');
  if (previous_active_item) {
    closeItem('.themes-page__content__item.open');
    previous_active_item.classList.remove('open');
  }
  clicked_item.classList.add('open');
  openItem('.themes-page__content__item.open');
}

</script>

<style lang='scss'>
@import '@/assets/scss/adaptive_fonts.scss';
body {
  background-color: $GREEN;
}

.themes-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: $IVORY;
  margin: 81px auto 0;
  max-width: $maxwidth;

  &__information {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    grid-gap: 46px;
    margin-bottom: 71px;
  }

  &__viewport {
    width: 100%;
    max-width: 100%;
    max-height: 400px;
    overflow-y: auto;
    position: relative;

    &__before {
      background: linear-gradient(0deg, rgba($GREEN, 0) 0%, $GREEN 100%);
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      height: 31px;
    }

    &__after {
      background: linear-gradient(180deg, rgba($GREEN, 0) 0%, $GREEN 100%);
      position: sticky;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 31px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding-bottom: 62px;

    //scroll-behavior: smooth;
    height: 100%;
    width: 100%;
    max-width: 100%;
    overflow-y: auto;
    //scroll-behavior: smooth;


    &__item {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      border-top: 1px solid $IVORY;
      padding: 24px 0;

      &:last-child {
        border-bottom: 1px solid $IVORY;
      }

      &__visible {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        &__title {
          width: 500px;
          text-align: left;
        }

        &__show-button {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 21px;
          width: 24px;
          height: 24px;
          border-radius: 90px;
          background-color: transparent;
          color: inherit;
          border: 2px solid $IVORY;

          &__icon {
            stroke: white;
          }
        }

        &__add-button {
          margin-left: auto;
          flex-shrink: 0;
          background-color: transparent;
          color: inherit;
          font-family: 'Stratos LC Regular', sans-serif;
          font-style: normal;
          font-weight: 400;
          @extend .adaptive_20px;

          line-height: 110%;
          border: none;
          padding: 3px 0;
          border-bottom: 1px solid $IVORY;
        }
      }

      &__content {
        margin-top: 0;
        max-width: 505px;
        height: 0;
        overflow: hidden;
      }

    }
  }
}
</style>