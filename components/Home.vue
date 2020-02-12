<template>

  <a href="https://activetalents.se/" target="_blank" class="site-home">
    <svg-icon class="logo" name="activetalents-filled" />
  </a>


</template>

<style lang="scss">

  .site-home {
    border-radius: 400px;
    width: 64px;
    height: 64px;
    background-color: $pink;
    position: fixed;
    top: 16px;
    left: 16px;
    z-index: 222;
    transition: all .275s ease;

    svg {
      fill: $white;
      height: 40px;
      width: 40px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -56%);
    }

    &:hover{
      background-color: $purple;
    }

  }



</style>
