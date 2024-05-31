<script setup lang="ts">
import { computed } from 'vue'
export interface HeroClient {
  logo: string
  link?: string
}

export interface HeroClientsProps {
  logos: HeroClient[]
  limit?: number
  inverted?: boolean
}

const props = withDefaults(defineProps<HeroClientsProps>(), {
  logos: () => [],
  limit: 5,
  inverted: false,
})

const listClasses = computed(() => [props.inverted && 'is-inverted'])
</script>

<template>
  <ul :class="listClasses">
    <li v-for="(logo, index) in props.logos.slice(0, props.limit)" :key="index">
      <a :href="logo.link"><img :src="logo.logo" alt="Logo Patrocinadores" style="height: 100%; width:90px" /></a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  margin: 0 auto;
}

.is-inverted {
  li img {
    filter: brightness(0) invert(1);
  }
}

.is-dark {
  ul li img {
    filter: invert(1);
  }
}
</style>
