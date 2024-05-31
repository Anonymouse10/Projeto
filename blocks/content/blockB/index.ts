export const contentBlockBProps = {
  props: [
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'subtitle',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'text',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'images',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'link',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'linkLabel',
      type: 'string',
      required: 'false',
      default: 'Learn More',
      values: ['string'],
    },
    {
      name: 'squared',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'inverted',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const contentBlockB = `
<script setup lang="ts">
import { content3 } from '/@src/data/blocks/content'
</script>

<template>
  <ContentBlockB
    :title="content3.title"
    :subtitle="content3.subtitle"
    :text="content3.text"
    :images="content3.images"
    link="index"
  />
</template>
`

export const contentBlockBSample = `
export const content3 = {
  title: 'Our Decision Board',
  subtitle: 'Meet our advisors',
  text: [
    {
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia, quae actiones. Ita prorsus, inquam.',
    },
    {
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia, quae actiones. Ita prorsus, inquam.',
    },
  ],
  images: [
    {
      url: '/assets/demo/img/avatars/21.jpg',
      name: 'Mila Jensen',
      position: 'UX Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      url: '/assets/demo/img/avatars/19.jpg',
      name: 'Rob Carlyle',
      position: 'Web Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      url: '/assets/demo/img/avatars/57.jpg',
      name: 'Danny Spitz',
      position: 'Software Engineer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      url: '/assets/demo/img/avatars/42.jpg',
      name: 'Melany Cambell',
      position: 'Business Analyst',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      url: '/assets/demo/img/avatars/41.jpg',
      name: 'Navad Prasad',
      position: 'Sales Manager',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ],
}
`
