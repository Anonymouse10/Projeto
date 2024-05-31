export const testimonialsBlockGProps = {
  props: [
    {
      name: 'slides',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
  ],
  slots: [],
}

export const testimonialsBlockG = `
<script setup lang="ts">
import { workoutTestimonials } from '/@src/data/pages/workout'
</script>

<template>
  <TestimonialsCarouselColor :slides="workoutTestimonials" />
</template>
`

export const testimonialsBlockGSample = `
export const workoutTestimonials = [
  {
    id: 0,
    name: 'Greg Norton',
    picture: '/assets/demo/img/bg/greg-avatar.png',
    cover: '/assets/demo/img/bg/greg-cover-night.png',
    quote: 'This app changed my life',
    subquote: 'Greg lost 35lbs using our app daily',
  },
  {
    id: 1,
    name: 'Jane Smith',
    picture: '/assets/demo/img/bg/jane-avatar.png',
    cover: '/assets/demo/img/bg/jane-cover-teal.png',
    quote: 'It feel so much better now',
    subquote: 'Jane lost 10lbs using our app daily',
  },
  {
    id: 2,
    name: 'Andres Cabeza',
    picture: '/assets/demo/img/bg/andres-avatar.png',
    cover: '/assets/demo/img/bg/andres-cover-yellow.png',
    quote: 'I simply love my new lifestyle',
    subquote: 'Jane lost 5lbs using our app daily',
  },
  {
    id: 3,
    name: 'Yuko Maeba',
    picture: '/assets/demo/img/bg/yuko-avatar.png',
    cover: '/assets/demo/img/bg/yuko-cover-orange.png',
    quote: 'It is a pleasure to use this service',
    subquote: 'Jane lost 3lbs using our app daily',
  },
]
`
