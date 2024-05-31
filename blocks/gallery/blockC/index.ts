export const galleryBlockCProps = {
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

export const galleryBlockC = `
<script setup lang="ts">
import { boxedGallery } from '/@src/data/blocks/gallery'
</script>

<template>
  <GalleryBlockC :items="boxedGallery" />
</template>
`

export const galleryBlockCSample = `
import type { GalleryBlockCItem } from '/@src/components/blocks/gallery-blocks/GalleryBlockC.vue'

export const boxedGallery: GalleryBlockCItem[] = [
  {
    image: '/assets/demo/img/gallery/35.jpg',
    size: 1,
  },
  {
    image: '/assets/demo/img/gallery/36.jpg',
    size: 2,
  },
  {
    image: '/assets/demo/img/gallery/37.jpg',
    size: 1,
  },
  {
    image: '/assets/demo/img/gallery/38.jpg',
    size: 3,
  },
  {
    image: '/assets/demo/img/gallery/39.jpg',
    size: 3,
  },
  {
    image: '/assets/demo/img/gallery/40.jpg',
    size: 3,
  },
]
`
