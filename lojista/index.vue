<route lang="yaml">
meta:
  layout: default
</route>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
//import { allNfts } from '/@src/data/pages/nft/all'
// import { vulkBenefits } from '/@src/data/demo'
import axios from 'axios'
const loja = ref([])
const router = useRouter()

const lojista = async () => {
  const id = Number(router.currentRoute.value.query.id)
  const data = await axios.get('https://backend-okm94.ondigitalocean.app/api/v1/loja/public/get/' + id)
  
  loja.value = data.data
  return lojista
}

onMounted(async () => {
  await lojista()
})
</script>

<template>
  <div style="margin-top: 5%">
    <LojistaComponent
    />
    <!-- <Section>
      <Container>
        <SectionTitle
          title="Conheça Nosso Projeto"
          subtitle="O maior e único sistema de pipa do mundo! Acompanhem novidades pelo Instagram: @pipasbr_ofc"
        />

        <DemoFeatures :features="vulkBenefits" />
      </Container>
    </Section> -->
    <FooterD
      text="Pipas BR é a sua central de informação e gerencia de equipes/campeonatos"
      color="dark"
      :social-links="socialLinks"
    />
  </div>
</template>
