export const galleryBlockDProps = {
  props: [
    {
      name: 'items',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
  ],
  slots: [],
}

export const galleryBlockD = `
<script setup lang="ts">
import { simpleGallery } from '/@src/data/blocks/gallery'
</script>

<template>
  <GalleryBlockD :items="simpleGallery" gap="xs" :columns="4" :limit="6" />
</template>
`

export const galleryBlockDSample = `
import type { GalleryBlockDItem } from '/@src/components/blocks/gallery-blocks/GalleryBlockD.vue'

export const simpleGallery: GalleryBlockDItem[] = [
  {
    image: '/assets/demo/img/gallery/41.jpg',
  },
  {
    image: '/assets/demo/img/gallery/42.jpg',
  },
  {
    image: '/assets/demo/img/gallery/43.jpg',
  },
  {
    image: '/assets/demo/img/gallery/44.jpg',
  },
  {
    image: '/assets/demo/img/gallery/45.jpg',
  },
  {
    image: '/assets/demo/img/gallery/46.jpg',
  },
  {
    image: '/assets/demo/img/gallery/47.jpg',
  },
  {
    image: '/assets/demo/img/gallery/48.jpg',
  },
]
`
