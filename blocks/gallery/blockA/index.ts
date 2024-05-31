export const galleryBlockAProps = {
  props: [
    {
      name: 'items',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
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

export const galleryBlockA = `
<script setup lang="ts">
import { masonryGallery } from '/@src/data/blocks/gallery'
</script>

<template>
  <GalleryBlockA :items="masonryGallery" squared />
</template>
`

export const galleryBlockASample = `
import type { GalleryBlockAItem } from '/@src/components/blocks/gallery-blocks/GalleryBlockA.vue'

export const masonryGallery: GalleryBlockAItem[] = [
  {
    image: '/assets/demo/img/gallery/3.jpg',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: '/assets/demo/img/gallery/2.jpg',
    size: '800x600',
    frame: '2x2',
  },
  {
    image: '/assets/demo/img/gallery/1.jpg',
    size: '800x600',
    frame: '1x2',
  },
  {
    image: '/assets/demo/img/gallery/4.jpg',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: '/assets/demo/img/gallery/6.jpg',
    size: '800x600',
    frame: '2x1',
  },
  {
    image: '/assets/demo/img/gallery/5.jpg',
    size: '800x600',
    frame: '3x1',
  },
  {
    image: '/assets/demo/img/gallery/7.jpg',
    size: '800x600',
    frame: '2x1',
  },
  {
    image: '/assets/demo/img/gallery/8.jpg',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: '/assets/demo/img/gallery/9.jpg',
    size: '800x600',
    frame: '2x2',
  },
  {
    image: '/assets/demo/img/gallery/10.jpg',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: '/assets/demo/img/gallery/11.jpg',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: '/assets/demo/img/gallery/12.jpg',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: '/assets/demo/img/gallery/14.jpg',
    size: '800x600',
    frame: '2x1',
  },
  {
    image: '/assets/demo/img/gallery/13.jpg',
    size: '800x600',
    frame: '1x1',
  },
]
`
