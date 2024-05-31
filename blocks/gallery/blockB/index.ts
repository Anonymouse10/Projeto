export const galleryBlockBProps = {
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

export const galleryBlockB = `
<script setup lang="ts">
import { advancedGallery } from '/@src/data/blocks/gallery'
</script>

<template>
  <GalleryBlockB :items="advancedGallery" squared />
</template>
`

export const galleryBlockBSample = `
import type { GalleryBlockBRow } from '/@src/components/blocks/gallery-blocks/GalleryBlockB.vue'

export const advancedGallery: GalleryBlockBRow[] = [
  {
    items: [
      {
        image: '/assets/demo/img/gallery/15.jpg',
        size: 1,
        date: 'Nov 11, 2021',
        liked: false,
        owner: {
          avatar: '/assets/demo/img/avatars/11.jpg',
          name: 'Jane Mitchells',
        },
      },
      {
        image: '/assets/demo/img/gallery/16.jpg',
        size: 1,
        date: 'Nov 11, 2021',
        liked: true,
        owner: {
          avatar: '/assets/demo/img/avatars/32.jpg',
          name: 'Chiara Simoni',
        },
      },
      {
        image: '/assets/demo/img/gallery/17.jpg',
        size: 2,
        date: 'Nov 13, 2021',
        liked: true,
        owner: {
          avatar: '/assets/demo/img/avatars/51.jpg',
          name: 'Ben Wilson',
        },
      },
    ],
  },
  {
    items: [
      {
        image: '/assets/demo/img/gallery/18.jpg',
        size: 1,
        date: 'Nov 14, 2021',
        liked: false,
        owner: {
          avatar: '/assets/demo/img/avatars/25.jpg',
          name: 'Terry Spitz',
        },
      },
      {
        image: '/assets/demo/img/gallery/19.jpg',
        size: 2,
        date: 'Nov 14, 2021',
        liked: false,
        owner: {
          avatar: '/assets/demo/img/avatars/17.jpg',
          name: 'Anya Sykorsky',
        },
      },
      {
        image: '/assets/demo/img/gallery/20.jpg',
        size: 2,
        date: 'Nov 15, 2021',
        liked: true,
        owner: {
          avatar: '/assets/demo/img/avatars/57.jpg',
          name: 'Yoni Fuller',
        },
      },
    ],
  },
  {
    items: [
      {
        image: '/assets/demo/img/gallery/21.jpg',
        size: 2,
        date: 'Nov 17, 2021',
        liked: false,
        owner: {
          avatar: '/assets/demo/img/avatars/43.jpg',
          name: 'Jaime Escudero',
        },
      },
      {
        image: '/assets/demo/img/gallery/22.jpg',
        size: 3,
        date: 'Nov 18, 2021',
        liked: true,
        owner: {
          avatar: '/assets/demo/img/avatars/58.jpg',
          name: 'Lakisha Jackson',
        },
      },
      {
        image: '/assets/demo/img/gallery/23.jpg',
        size: 2,
        date: 'Nov 18, 2021',
        liked: true,
        owner: {
          avatar: '/assets/demo/img/avatars/41.jpg',
          name: 'Vishnu Prasad',
        },
      },
    ],
  },
  {
    items: [
      {
        image: '/assets/demo/img/gallery/24.jpg',
        size: 1,
        date: 'Nov 18, 2021',
        liked: false,
        owner: {
          avatar: '/assets/demo/img/avatars/19.jpg',
          name: 'Erik Smith',
        },
      },
      {
        image: '/assets/demo/img/gallery/25.jpg',
        size: 1,
        date: 'Nov 20, 2021',
        liked: true,
        owner: {
          avatar: '/assets/demo/img/avatars/7.jpg',
          name: 'Daniel Walder',
        },
      },
      {
        image: '/assets/demo/img/gallery/26.jpg',
        size: 1,
        date: 'Nov 21, 2021',
        liked: false,
        owner: {
          avatar: '/assets/demo/img/avatars/21.jpg',
          name: 'Trisha Haze',
        },
      },
    ],
  },
  {
    items: [
      {
        image: '/assets/demo/img/gallery/30.jpg',
        size: 2,
        date: 'Nov 23, 2021',
        liked: false,
        owner: {
          avatar: '/assets/demo/img/avatars/22.jpg',
          name: 'Robert Caradine',
        },
      },
      {
        image: '/assets/demo/img/gallery/28.jpg',
        size: 1,
        date: 'Nov 24, 2021',
        liked: true,
        owner: {
          avatar: '/assets/demo/img/avatars/18.jpg',
          name: 'Malik Shahid',
        },
      },
    ],
  },
  {
    items: [
      {
        image: '/assets/demo/img/gallery/29.jpg',
        size: 2,
        date: 'Nov 26, 2021',
        liked: false,
        owner: {
          avatar: '/assets/demo/img/avatars/30.jpg',
          name: 'Yasmine Gunei',
        },
      },
      {
        image: '/assets/demo/img/gallery/27.jpg',
        size: 3,
        date: 'Nov 30, 2021',
        liked: false,
        owner: {
          avatar: '/assets/demo/img/avatars/55.jpg',
          name: 'Anthony Tether',
        },
      },
      {
        image: '/assets/demo/img/gallery/31.jpg',
        size: 2,
        date: 'Dec 2, 2021',
        liked: true,
        owner: {
          avatar: '/assets/demo/img/avatars/42.jpg',
          name: 'Mia Schultz',
        },
      },
    ],
  },
  {
    items: [
      {
        image: '/assets/demo/img/gallery/32.jpg',
        size: 2,
        date: 'Dec 2, 2021',
        liked: true,
        owner: {
          avatar: '/assets/demo/img/avatars/28.jpg',
          name: 'Catarina Kolovskaya',
        },
      },
      {
        image: '/assets/demo/img/gallery/33.jpg',
        size: 1,
        date: 'Dec 5, 2021',
        liked: true,
        owner: {
          avatar: '/assets/demo/img/avatars/35.jpg',
          name: 'Robert Plant',
        },
      },
      {
        image: '/assets/demo/img/gallery/34.jpg',
        size: 1,
        date: 'Dec 6, 2021',
        liked: false,
        owner: {
          avatar: '/assets/demo/img/avatars/29.jpg',
          name: 'Christina Yang',
        },
      },
    ],
  },
]
`
