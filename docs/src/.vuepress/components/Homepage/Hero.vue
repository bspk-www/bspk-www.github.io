<template>
  <section class="hero" data-scroll>
    <div class="hero__container container">
      <div class="hero__video">
        <div class="video-container" data-scroll data-scroll-speed="1">
          <video
            :autoplay="true"
            :defaultMuted="true"
            :loop="true"
            :muted="true"
            :playsinline="true"
            :controls="false"
            preload="metadata"
            ref="heroVideo"
          >
            <source :src="isMobile ? $withBase($frontmatter.hero.videoMobile) : $withBase($frontmatter.hero.video)" type="video/mp4">
          </video>
        </div>
      </div>
      <div class="hero__copy">
        <Heading
          :firstPartHeadlines="$frontmatter.hero.headlines.mobile"
          :highlighted="$frontmatter.hero.highlighted"
          :breakLine="true"
          tag="h1"
          tagStyle="hero"
          class="hero__title--mobile"
        />
        <Heading
          :firstPartHeadlines="$frontmatter.hero.headlines.desktop"
          :highlighted="$frontmatter.hero.highlighted"
          :breakLine="true"
          tag="h1"
          tagStyle="hero"
          class="hero__title--desktop"
        />
        <p class="hero__content">
          {{ $frontmatter.hero.content }}
        </p>
        <Button 
          :link="$frontmatter.hero.ctaLink"
          size="large"
        >
          {{ $frontmatter.hero.ctaCopy }}
        </Button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    isMobile: false
  }),
  mounted() {
    this.isMobile = window.innerWidth < 500
    this.$refs['heroVideo'].play()
  }
}
</script>

<style lang="stylus" scoped>
.hero
  &__title
    &--desktop
      display none

  &__copy
    padding 35px 41px 55px 
    text-align center
    width 100%

  &__content
    width 100%
    padding 20px 0
    line-height 22px

  &__video
    width 100%

    .video-container
      overflow hidden
      width 100%

      video 
        width 140%

  @media (max-width 360px)
    &__copy
      padding 35px 20px 55px 

  @media (min-width 420px)
    &__title
      &--mobile
        display none
        
      &--desktop
        display block

  @media (min-width $MQlg)
    &__content
      width 80%
      margin 30px auto
  
  @media (min-width $MQxl)
    overflow hidden
    position relative

    &__container
      display flex
      padding 100px 15px 120px

    &__content
      font-size 20px
      line-height 26px
      color $darkGrey
      padding 10px 0
      max-width 490px
      width 100%
      margin 30px 0

    &__copy
      max-width 620px
      text-align left
      padding 0
      order 1
      display flex
      flex-direction column
      justify-content center
      align-items start

    &__video
      order 2
      height 511px
      width auto

      .video-container
        width 620px
        height 511px
        overflow hidden
        position absolute
        right 0
        border-top-left-radius 200px

        video
          width auto
          height 100%
          position absolute
          left 0
          transform none

    &::before
      content ''
      position absolute
      right 15%
      top -65%
      display block
      width 300px
      height 200%
      transform rotate(-55deg)
      background alpha($white, 0.17)

    &::after
      content ''
      position absolute
      bottom 80px
      right 530px
      background alpha($accentColor, 0.16)
      width 160px
      height 160px
      border-radius 50%
      z-index -1

  @media (min-width 1800px)
    &__video
      order 2
      height 600px

      .video-container
        width 720px
        height 600px
        overflow hidden
        position absolute
        right 20px
        border-top-left-radius 200px

        video
          height 100%
          position absolute
          left 0
          transform none

    &::after
      right 650px
</style>