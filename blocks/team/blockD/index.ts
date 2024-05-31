export const teamBlockDProps = {
  props: [
    {
      name: 'items',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'columns',
      type: 'number',
      required: 'false',
      default: '3',
      values: ['3', '4'],
    },
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: '32',
      values: ['number'],
    },
    {
      name: 'bubbles',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'squared',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'grayscale',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const teamBlockD = `
<script setup lang="ts">
import { cardTeam } from '/@src/data/blocks/team'
</script>

<template>
  <TeamBlockD :items="cardTeam" bubbles animated squared />
</template>
`

export const teamBlockDSample = `
export const cardTeam = [
  {
    image: '/assets/demo/img/people/2a.jpg',
    name: 'Daniel Abikzer',
    position: 'CEO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/assets/demo/img/people/13a.jpg',
    name: 'Basile Olembe',
    position: 'General Manager',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/assets/demo/img/people/3a.jpg',
    name: 'Irina Smirkova',
    position: 'Sales Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'Facebook',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: '/assets/demo/img/people/6a.jpg',
    name: 'Aymeric Boulard',
    position: 'Technical Lead',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/assets/demo/img/people/15a.jpg',
    name: 'Roland Fournier',
    position: 'AI Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/assets/demo/img/people/11a.jpg',
    name: 'Edwin Miller',
    position: 'Data Scientist',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/assets/demo/img/people/8a.jpg',
    name: 'Kim Li Seung',
    position: 'Software Architect',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'Facebook',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: '/assets/demo/img/people/12a.jpg',
    name: 'Hakeem Elba',
    position: 'Fullstack Developer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
]
`
