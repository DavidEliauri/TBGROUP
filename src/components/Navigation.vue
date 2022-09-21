<template>
  <header class="navigation">
    <router-link class='navigation__menu' to="#">Меню</router-link>
    <button class="navigation__button caption_1 uppercase">Связяться с нами</button>
  </header>
</template>
<style lang="scss">
.navigation {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 0 100px;
  height: 88px;
  border: 1px solid black;

  &__menu {
    margin: 0 auto;
    position: absolute;
    left: 50%;
    bottom: 9px;
    transform: translateX(-50%);
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $IVORY_100;
    background-color: $BRIGHT_GREEN_100;
    border: none;
    padding: 0 20px;
    height: 48px;
    gap: 10px;
    letter-spacing: 0.1em;
    border-radius: 2px;
  }
}
</style>