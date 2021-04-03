
<template>
  <section class="testimonials">

    <Carousel
      class="testimonials__wrapper testimonials__wrapper--desktop container"
      :per-page="3"
      :paginationPadding="10"
      paginationPosition=""
      paginationColor="#9F9F9F"
      paginationActiveColor="#DB420F"
    >
      <Slide 
        v-for="(testimonial, i) in $frontmatter.testimonials"
        class="testimonials__single"
        :key="i"
      >
      <a  clss="testimonials__link" :href="'/newsroom#' + testimonial.articleLink">

        <img :src="$withBase(testimonial.logo)" alt="">
        <p>
          {{ testimonial.text }}
          
        </p>
              </a>
      </Slide>
    </Carousel>


  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  }
}
</script>
<style lang="stylus" scoped>
.testimonials
  display none
  @media (min-width $MQlg)
    display block
    padding 95px 0
    background $darkBeige
    text-align center
    &__link
      display: block
    &__wrapper
      display flex

    &__single
      color $darkGrey
      font-style italic
      width 33%
      padding 0 65px
      font-size 19px
      line-height 26px

      p
        margin 10px 0 0
        text-align center

      img 
        height 25px
</style>