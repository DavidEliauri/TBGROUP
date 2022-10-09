<template>
  <footer class="footer">
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
.footer {
  margin: 0 auto;
  padding: 0;
  width: 100%;
  max-width: $maxwidth;
  height: 166px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
    fill: $BRIGHT_GREEN_100;
  }

  &__socials {
    display: flex;
    grid-gap: 16px;

    &__item {
      width: 44px;
      height: 44px;
      background-color: $BRIGHT_GREEN_100;
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      fill: $IVORY_100;
    }
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    grid-gap: 6px;

    &__item {
      font-family: 'Stratos LC Bold';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      text-align: right;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      text-decoration: none;
      color: $BRIGHT_GREEN_100;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>