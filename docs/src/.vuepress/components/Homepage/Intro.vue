<template>
  <section 
    class="intro container"
    data-scroll
    data-scroll-speed="1.5"
    data-scroll-delay="1"
  >
    <h2 class="intro__title">
      {{ $frontmatter.intro.text }}
    </h2>
    <div class="intro__icons">
      <div
        v-for="(icon,index) of $frontmatter.intro.icons"
        :key="index"
        class="intro__icon"
      >
        <img-lazy
          :src="icon.src"
          :alt="icon.alt"
        />
        {{ icon.text }}
      </div>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
.intro
  padding 65px 35px
  font-weight 400
  text-align center
  color $darkGrey

  &__title
    font-size 28px
    line-height 1.2

  &__icons
    margin-top 50px

  &__icon
    font-size 18px
    display flex
    justify-content start
    align-items center
    margin-bottom 25px

    img
      margin-right 20px
      width 30px

  @media (min-width 360px)
    padding 65px 45px

    &__icon
      padding 0 0 0 15px

  @media (min-width $MQsm)
    max-width 500px
    margin 0 auto

    &__icon
      justify-content center
      padding 0

  @media (min-width $MQlg)
    &__title
      font-size 48px
      line-height 56px
      color $black

    &__icons
      display flex
      justify-content center
      margin-top 50px

    &__icon
      background $darkBeige
      border-radius 50%
      display flex
      flex-direction column
      align-items center
      justify-content center
      font-size 22px
      line-height 1.2
      width 200px
      height 200px
      padding 30px
      margin 0 25px

      img
        width 40px
        margin-bottom 10px
        margin-right 0

    padding 185px 45px 280px
    max-width 780px 
    box-sizing content-box
    margin 0 auto
</style>