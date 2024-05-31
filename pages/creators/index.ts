import type { SimpleFeature, IconFeature } from '/@src/types'

export const creatorFeatures: IconFeature[] = [
  {
    title: 'Campaigns',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'primary',
    icon: 'feather:mail',
    link: '/',
  },
  {
    title: 'Task Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'green',
    icon: 'feather:briefcase',
    link: '/',
  },
  {
    title: 'Personal Dashboard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'info',
    icon: 'feather:grid',
    link: '/',
  },
  {
    title: 'Payment Gateways',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'purple',
    icon: 'feather:credit-card',
    link: '/',
  },
  {
    title: 'Time Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'yellow',
    icon: 'feather:clock',
    link: '/',
  },
  {
    title: 'Notifications',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'red',
    icon: 'feather:bell',
    link: '/',
  },
  {
    title: 'Social Integrations',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'success',
    icon: 'feather:facebook',
    link: '/',
  },
  {
    title: 'Instant Messaging',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'orange',
    icon: 'feather:message-circle',
    link: '/',
  },
]

export const successFeatures: SimpleFeature[] = [
  {
    title: 'Memberships',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Coaching',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Microschools',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Products',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
]

export const featuredCreators = {
  title: 'Our Featured Creators',
  subtitle: 'Meet our Creators',
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
      url: '/assets/demo/img/tiles/2a.jpg',
      name: 'Mila Jensen',
      position: 'Influencer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      url: '/assets/demo/img/tiles/5.png',
      name: 'Rob Carlyle',
      position: 'Influencer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      url: '/assets/demo/img/tiles/6.jpg',
      name: 'Danny Spitz',
      position: 'Youtuber',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      url: '/assets/demo/img/tiles/1a.jpg',
      name: 'Tommy Lee',
      position: 'Youtuber',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      url: '/assets/demo/img/tiles/9.jpg',
      name: 'Nagisa Foller',
      position: 'Influencer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ],
}

export const testimonials = [
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
      'Vulk has definitely made the management of our web advertising better. By combining the convenience of managing keywords and bids, along with being able to track our ongoing results, Vulk has given us more control over our web advertising than we’ve ever had before.',
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
      'Bringing on Vulk has been a tremendous asset to our web business. NatureWise’s sales velocity has increased substantially, and we’re excited to continue on that path with web DSP.',
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
      'Within three months of starting with Vulk, we had our best month ever in terms of both profits and sales.',
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
      'Once you see the algorithm in action, you see how awesome Vulk and their technology really are!',
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
      'Vulk has definitely made the management of our web advertising better. By combining the convenience of managing keywords and bids, along with being able to track our ongoing results, Vulk has given us more control over our web advertising than we’ve ever had before.',
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
  {
    id: 9,
    customer: {
      name: 'John Bigsby',
      photo: '/assets/demo/img/avatars/22.jpg',
      position: 'Founder @Bitbreaker',
    },
    logo: '/assets/brands/bitbreaker.svg',
    content:
      'Within three months of starting with Vulk, we had our best month ever in terms of both profits and sales.',
  },
]
