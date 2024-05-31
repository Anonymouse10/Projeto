<route lang="yaml">
meta:
  layout: default
</route>
    
<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import { socialLinks } from '/@src/data/blocks/advanced/social'
import { posts, pipeiros, linhas } from '/@src/data/pages/blog'
</script>
    
<template>
  <div>
    <InicioResumoComponent />

    <LogoMarquee :logos="customerLogos" compact />

    <Section color="grey" overflown>
      <Container>
        <div class="columns">
          <div class="column is-8">
            <BlogGrid :posts="posts" side-grid upside-down />

            <div class="load-more py-6">
              <div class="buttons is-centered">
                <Button color="primary" :long="3" raised bold>Ver Mais</Button>
              </div>
            </div>
          </div>

          <div class="column is-4">
            <BlogStickySide>
              <!-- <BlogSearch /> -->

              <InicioDestaqueComponent :pipeiros="pipeiros"  :linhas="linhas"/>

            </BlogStickySide>
          </div>
        </div>
      </Container>
    </Section>
    <FooterD text="Pipas BR é a sua central de informação e gerencia de equipes/campeonatos" color="dark"
      :social-links="socialLinks" />
  </div>
</template>
    