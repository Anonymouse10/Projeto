<route lang="yaml">
    meta:
      layout: default
    </route>
    
    <script setup lang="ts">
    import { customerLogos } from '/@src/data/pages/logos'
    import {
      vehicleFeatures,
    } from '/@src/data/pages/vehicle'
    import { socialLinks } from '/@src/data/blocks/advanced/social'
    </script>
    
    <template>
      <div>
        <InicioDashboardComponent />
    
        <!-- <Section>
          <Container>
            <SectionTitle
              title="Conheça Nosso Projeto"
              subtitle="Fique por dentro de atualizações, siga no Instagram: @pipasbr_ofc"
            />
    
            <FeatureBlockM
              :features="vehicleFeatures"
              :columns="3"
              :limit="8"
              size="medium"
            />
          </Container>
        </Section> -->
    
        <FooterD
          text=""
          color="light"
          :social-links="socialLinks"
        />
      </div>
    </template>
    