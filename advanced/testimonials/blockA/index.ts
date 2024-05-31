export const testimonialsBlockAProps = {
  props: [
    {
      name: 'testimonials',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'blobs',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const testimonialsBlockA = `
<script setup lang="ts">
import { testimonials2 } from '/@src/data/blocks/advanced/testimonials'
</script>

<template>
  <TestimonialsGrid :testimonials="testimonials2" blobs />
</template>
`

export const testimonialsBlockASample = `
export const testimonials2 = [
  {
    id: 0,
    customer: {
      name: 'Mike Williams',
      photo: '/assets/demo/img/avatars/1.jpg',
      position: 'Founder @Covenant',
    },
    logo: '/assets/brands/covenant.svg',
    content:
      'Vulk software is notably robust, and their analysts have helped us both maximize profitability and truly understand the incremental value of our web Ads.',
  },
  {
    id: 1,
    customer: {
      name: 'Tara Reed',
      photo: '/assets/demo/img/avatars/2.jpg',
      position: 'CFO @Kromo',
    },
    logo: '/assets/brands/kromo.svg',
    content:
      'Not only are our metrics and performance up and exceeding expectations, but I’ve been really impressed with the way that they manage our business.',
  },
  {
    id: 2,
    customer: {
      name: 'Nelly Olsen',
      photo: '/assets/demo/img/avatars/21.jpg',
      position: 'Founder @Infinite',
    },
    logo: '/assets/brands/infinite.svg',
    content:
      'Vulk has definitely made the management of our web advertising better. By combining the convenience of managing keywords and bids, along with being able to.',
  },
  {
    id: 3,
    customer: {
      name: 'Adrian Felks',
      photo: '/assets/demo/img/avatars/19.jpg',
      position: 'Founder @Grubspot',
    },
    logo: '/assets/brands/grubspot.svg',
    content:
      'Bringing on Vulk has been a tremendous asset to our web business. NatureWise’s sales velocity has increased substantially, and we’re excited to.',
  },
  {
    id: 4,
    customer: {
      name: 'Barry Wilks',
      photo: '/assets/demo/img/avatars/24.jpg',
      position: 'CEO @Phasekit',
    },
    logo: '/assets/brands/phasekit.svg',
    content:
      "Within three months of starting with Vulk, we had our best month ever in terms of both profits and sales. We're definitely not changing tools as this is the real deal!",
  },
  {
    id: 5,
    customer: {
      name: 'Emma Spencer',
      photo: '/assets/demo/img/avatars/17.jpg',
      position: 'Marketing Associate @Tribe',
    },
    logo: '/assets/brands/tribe.svg',
    content:
      'Not only are our metrics and performance up and exceeding expectations, but I’ve been really impressed with the way that they manage our business.',
  },
  {
    id: 6,
    customer: {
      name: 'Alan Smith',
      photo: '/assets/demo/img/avatars/23.jpg',
      position: 'Manager @Proactive',
    },
    logo: '/assets/brands/proactive.svg',
    content:
      "Once you see the algorithm in action, you see how awesome Vulk and their technology really are! I can't wait to get back working on my project!",
  },
  {
    id: 7,
    customer: {
      name: 'Lana Henriks',
      photo: '/assets/demo/img/avatars/14.jpg',
      position: 'Founder @Live Talk',
    },
    logo: '/assets/brands/livetalk.svg',
    content:
      'Vulk has definitely made the management of our web advertising better. By combining the convenience of managing keywords and bids, along with being able to.',
  },
  {
    id: 8,
    customer: {
      name: 'Helen Watts',
      photo: '/assets/demo/img/avatars/12.jpg',
      position: 'Founder @Gutwork',
    },
    logo: '/assets/brands/gutwork.svg',
    content:
      'Vulk came in with a very clear perspective on how to drive brand growth on web, powerful AI systems and a strong managed services team.',
  },
]
`
