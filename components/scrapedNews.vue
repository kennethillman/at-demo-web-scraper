<template>

  <section class="slice-one-text-image site-grid" :class="[ {'-no-image -bg-pattern-light': !image, '-first': index === 0}]"  >
    <div>

    <div class="teaser-image col" v-if="image">
      <figure style="background-color: red;" :style="{ 'background-image': 'url(' + image + ')' }">
        <div class="triangel"></div>
      </figure>
    </div>

    <div class="teaser-text col">
      <div class="col-body">
        <div class="header-primary">
          <div class="anchor">CNN</div> <div class="label">Scraped</div>
        </div>
        <div class="header">{{ item.name }}</div>
        <div class="from">{{ item.from }}</div>

      </div>
    </div>

    </div>

  </section>

</template>

<script>

export default {
  props: ["item", "index"],
  data () {
    return {
      header: this.item,
      from: this.item,
      image: this.item.image
    }
  },
  methods: {

  },
  computed: {

  },
}
</script>

<style lang="scss">



  .slice-one-text-image {

    display: block;
    padding:0;

    &.-no-image {
        .col-body {
          padding-top: 5vh;
          padding-bottom: 5vh;
        }
    }


    // - - - LAYOUT / FLEX

    .col {
      flex: 1;
      box-sizing: border-box;
    }

    .col-body {
      padding: 32px;
    }


    // - - - IMAGE

    figure {
      background-size: cover;
      background-position: center center;
    }


    // - - - TYPOGRAPY

    .header-primary {
      text-align: left;
      margin-bottom: 16px;
    }

    .header {
      text-transform: uppercase;
      font-weight: 300;
      font-size: 24px;
      letter-spacing: .06em;
      margin-bottom: 24px;
      line-height: 1.14;
    }

    // - - - TRIANGLE

    .triangel {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
      width: 0;
      height: 0;
      border-left: 1em solid transparent;
      border-right: 1em solid transparent;
      border-bottom: 1em solid $white;
    }

    .teaser-image {
      position: relative;
      overflow: hidden;
      z-index: 0;
      figure {
        @include aspect-ratio-img(2.3,1);
      }
    }

    &.-theme-light {
     .triangel {
        border-left: 1em solid transparent;
        border-right: 1em solid transparent;
        border-bottom: 1em solid #f3f3f3;
      }
    }
    &.-theme-gray {
      .triangel {
        border-left: 1em solid transparent;
        border-right: 1em solid transparent;
        border-bottom: 1em solid #666;
      }
    }
    &.-theme-dark {
      .triangel {
        border-left: 1em solid transparent;
        border-right: 1em solid transparent;
        border-bottom: 1em solid #313131;
      }
    }

// - - - RESPONSIVE

    // 600px
    @media screen and (min-width: 600px)  {
      .header {
        font-size: 32px;
        line-height: 1.14;
      }
    }


    // 768px
    @media screen and (min-width: 768px)  {

      > div {
        display: flex;
        align-items: center;
        flex-direction: row;
        max-width: 1280px;
        margin: 0 auto;
      }

      &.-first {
         .col-body {
          // margin-top: 5vh;
          // margin-bottom: 5vh;
        }
        > div {
          display: block;
        }
      }


      .header {
        font-size: 24px;
      }
      .col-body {
        padding: 6px 24px;
      }

      .triangel {
        bottom: 50%;
        left: auto;
        right: 0;
        border-right: 1em solid $white;
        border-top: 1em solid transparent;
        border-bottom: 1em solid transparent;
        transform: translate(0, 50%);
      }

      &.-theme-light {
        background-color: #ffffff;
       .triangel {
          border-top: 1em solid transparent;
          border-bottom: 1em solid transparent;
          border-right: 1em solid #f3f3f3;
        }
      }
      &.-theme-gray {
        .triangel {
          border-top: 1em solid transparent;
          border-bottom: 1em solid transparent;
          border-right: 1em solid #666;
        }
      }
      &.-theme-dark {
        .triangel {
          border-top: 1em solid transparent;
          border-bottom: 1em solid transparent;
          border-right: 1em solid #313131;
        }
      }

      &.-image-right {
        > div {
          flex-direction: row-reverse;
          text-align: right;
        }
        .header-primary {
          text-align: right;
        }
        .triangel {
          position: absolute;
          bottom: 50%;
          right: auto;
          transform: rotate(180deg) translate(0, -50%);
        }

        .teaser-image {
          figure {

          }
        }

      }


      .teaser-image {
        figure {
          @include aspect-ratio-img(14,9);
        }
      }

    }

    // 1024px
    @media screen and (min-width: 1024px)  {
      .header {
        font-size: 32px;
      }
      .col-body {
        padding: 6px 32px;
      }
      .triangel {
        font-size: 24px;
      }

    }

    // 1280px
    @media screen and (min-width: 1280px)  {

      .header {
        font-size: 40px;
        margin-bottom: 40px
      }
      .col-body {
        padding: 6px 56px;
      }

    }



  }

</style>
