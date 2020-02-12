<template>
  <section class="container">

    <home/>

    <div class="sgd-s-hero -cover -bg-pattern-light">
      <div>
        <logo/>
        <h2 class="title">Web Scraper</h2>
        <h6 class="title -sub">Demo</h6>
        <h6 class="title -sub -small"><a :href="url" target="_blank">SCRAPED URL</a></h6>
        <h6 class="title -sub -small"><a href="https://github.com/kennethillman/at-demo-web-scraper" target="_blank">Github</a></h6>
      </div>
    </div>

    <div class="news-item" v-for="(item,index) in news" :key="index">
      <news :item="item,index" />
    </div>

    <div class="sgd-s-hero -footer">
      <div>
        <logo/>
        <h2 class="title">Demo page</h2>
        <h6 class="title -sub">by Active Talents</h6>

      </div>
    </div>

  </section>
</template>

<script>

import Logo from '~/components/Logo.vue'
import Home from '~/components/Home.vue'
import news   from '~/components/scrapedNews.vue'


export default {
  components: {
    Logo,
    Home,
    news
  },
   data () {
    return {
      news: this.$store.getters.getScrape,
      url: this.$store.getters.getUrl,
    };
  },

}
</script>

<style lang="scss">

  @import "~/assets/scss/styleguide/styleguide-imports.scss";

  .news-item + .news-item {
    margin-top: 12px;
  }

  

</style>
