<template>
  <footer class="footer  wrapper-padding">
    <router-link class="footer__logo" to="/">
      <svg class="footer__logo__icon"
           width="53" height="19">
        <use xlink:href="@/assets/sprites.svg#logo"></use>
      </svg>
    </router-link>

    <div class="footer__socials">
      <router-link to="#" class="footer__socials__item">
        <svg class="footer__socials__item__icon"
             width="53" height="19">
          <use xlink:href="@/assets/sprites.svg#vk"></use>
        </svg>
      </router-link>
      <router-link to="#" class="footer__socials__item">
        <svg class="footer__socials__item__icon"
             width="25" height="22">
          <use xlink:href="@/assets/sprites.svg#tg"></use>
        </svg>
      </router-link>

      <router-link to="#" class="footer__socials__item">
        <svg width="22" height="22" class="footer__socials__item__icon">
          <use xlink:href="@/assets/sprites.svg#ig"></use>
        </svg>
      </router-link>
    </div>

    <div class="footer__contacts">
      <a href="mailto:hello@training.ru" class="footer__contacts__item">hello@training.ru</a>
      <a href="tel:+74957281877" class="footer__contacts__item">+7 (495) 728-18-77</a>
    </div>
  </footer>
</template>

<script setup>
</script>

<style lang='scss'>
@import '@/assets/scss/headings.scss';
.footer {
  padding: 0;
  width: 100%;
  height: 166px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width:$notebook) {
    height: 110px;
  }
  @media screen and (max-width: $phone_start) {
    height: 150px;

    grid-gap: 10px;
    flex-wrap: wrap;
  }
  &__logo {
    display: flex;
    fill: $GREEN;
  }

  &__socials {
    display: flex;
    grid-gap: 16px;
    @media screen and (max-width: $notebook) {
      grid-gap: 10px;
    }
    &__item {
      width: 44px;
      height: 44px;
      background-color: $GREEN;
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      fill: $IVORY;
      @media screen and (max-width: $notebook) {
        width: 40px;
        height: 40px;
        &__icon{
          transform: scale(0.8);
        }
      }
      @media screen and (max-width: $tablet) {
        width: 35px;
        height: 35px;
        &__icon{
          transform: scale(0.7);
        }
      }
      @media screen and (max-width: $phone_start) {
        width: 32px;
        height: 32px;
        &__icon{
          transform: scale(0.72);
        }
      }
    }
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    grid-gap: 6px;

    &__item {
      font-family: 'Stratos LC Bold',sans-serif;
      font-style: normal;
      font-weight: 700;
      line-height: 110%;
      white-space: nowrap;
      @extend .adaptive_16px;
      text-align: right;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      text-decoration: none;
      color: $GREEN;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>