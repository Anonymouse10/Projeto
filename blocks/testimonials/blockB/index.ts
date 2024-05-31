export const testimonialsBlockBProps = {
  props: [
    {
      name: 'testimonials',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: '3',
      values: ['number'],
    },
    {
      name: 'squared',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const testimonialsBlockB = `
<script setup lang="ts">
import { boxedTestimonials2 } from '/@src/data/blocks/testimonials'
</script>

<template>
  <TestimonialBlockB :testimonials="boxedTestimonials2" squared />
</template>
`

export const testimonialsBlockBSample = `
export const baseTestimonials = [
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/assets/demo/img/avatars/25.jpg',
    name: 'Henry Statterman',
    position: 'Sales Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/assets/demo/img/avatars/19.jpg',
    name: 'Joey Bagara',
    position: 'Project Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/assets/demo/img/avatars/21.jpg',
    name: 'Linda Stinson',
    position: 'Art Director',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/assets/demo/img/avatars/17.jpg',
    name: 'Anika Geller',
    position: 'Business Analyst',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/assets/demo/img/avatars/35.jpg',
    name: 'Ross Martin',
    position: 'Product Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/assets/demo/img/avatars/30.jpg',
    name: 'Miranda Wallace',
    position: 'UX Designer',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/assets/demo/img/avatars/42.jpg',
    name: 'Anna Klecenszki',
    position: 'Project Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/assets/demo/img/avatars/43.jpg',
    name: 'Taha El Maliki',
    position: 'Business Developer',
  },
]
`
