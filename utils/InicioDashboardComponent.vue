<script setup lang="ts">
  import {ref} from 'vue'
  import axios from 'axios'
  import { customerLogos } from '/@src/data/pages/logos'
  const whatsapp = ref()
  const nome = ref()
  const numeroSorteado = ref()
  const rodando = ref(false)
  const cadastrado = ref(false)

  const cadastrar = async () => {
    try{
      rodando.value = true
      const numero = whatsapp.value.replace("(", "").replace(')', '').replace('-', '').replace(' ', '').replace(' ', '').replace('+', '')
      const data = (await axios.post('https://backend-okm94.ondigitalocean.app/api/v1/sorteio/add', {
        nome: nome.value,
        whatsapp: numero
      })).data
      
      rodando.value = false
      if(data.error == 1) {
        return alert(data.message)
      }
      cadastrado.value = true
      numeroSorteado.value = data.numero
    }catch(er){
      alert('Erro ao cadastrar, contate a equipe do sistema.')
      rodando.value = false
      console.log(er)
    }
  }
</script>
    
    <template>
      <Hero
        class="car-hero"
        alignment="left"
        size="fullheight"
        mask="slant"
        shape="/assets/shapes/hero-shape-reverse.svg"
        shape-orientation="left"
      >
        <template #body>
          <div class="columns is-vcentered">
            <div class="column is-5">
              <div class="hero-form-container">
                <div class="hero-form" v-if="!cadastrado">
                  <Title tag="h2" :size="4" weight="semi">Pegue o pipa premiado dia 11 e ganhe R$100,00</Title>
                  <label>Caso você pegue o pipa premiado no domingo (11/12), se você estiver inscrito aqui, você ganha R$100,00</label>
                  <!-- <form> -->
                    <Field>
                      <FieldLabel label="Nome/Vulgo" />
                      <Control icon="ph:user-duotone">
                        <VInput placeholder=""  v-model="nome"/>
                      </Control>
                    </Field>
                    <Field>
                      <FieldLabel label="Whatsapp" />
                      <Control icon="ph:whatsapp-logo">
                        <VInput v-model="whatsapp" v-maska="['+55 (##) #####-####', '+55 (##) #####-####']" placeholder="" />
                      </Control>
                    </Field>
                    <Field>
                      <Control>
                        <div class="py-2">
                          <Checkbox
                            name="checkbox-1"
                            label="Eu aceito receber novidades do PIPAS BR pelo Whatsapp"
                            color="default"
                          />
                        </div>
                      </Control>
                    </Field>
                    <Field>
                      <Control>
                        <div class="py-2">
                          <Button :loading="rodando" color="primary" fullwidth bold raised @click="cadastrar">
                            <span>CADASTRAR</span>
                          </Button>
                        </div>
                      </Control>
                    </Field>
                  <!-- </form> -->
                </div>
                <div class="hero-form" v-else>
                  <Title tag="h2" :size="4" weight="semi">BOA! CADASTRADO COM SUCESSO, AGORA SÓ CHEPAR O PIPA PREMIADO ☘️</Title>
                  <p>Agora basta seguir os perfís ao lado, clica na imagem</p>
                  <br>
                  <h2> <strong>NÚMERO DE IDENTIFICAÇÃO: </strong></h2>
                  <label>Esse número que você precisa falar quando pegar o pipa e for receber seu R$100,00</label>
                  <br>
                  <Title tag="h1" :size="4" weight="semi">{{numeroSorteado}}</Title>
                  <a href="https://instagram.com/pipasbr_ofc"> @PIPASBR_OFC </a><br>
                  <a href="https://instagram.com/ads_pipas_zs"> @ADS_PIPAS_ZS </a><br>
                  <a href="https://instagram.com/relodasul"> @RELODASUL </a>


                </div>
              </div>
            </div>
            <div class="column is-7">
              

              <div class="tabs is-centered pb-2">
                <HeroClients :logos="customerLogos" />
              </div>
            </div>
          </div>
        </template>
      </Hero>
    </template>
    
    <style lang="scss" scoped>
    .car-hero-solo {
      position: relative;
      top: 2rem;
    
      img {
        display: block;
        max-width: 580px;
        margin: 0 auto;
      }
    }
    
    .hero-form-container {
      position: relative;
      top: 2rem;
    
      .hero-form {
        background: var(--card-bg-color);
        border: 1px solid var(--card-border-color);
        box-shadow: var(--light-box-shadow);
        border-radius: 1rem;
        padding: 2.5rem;
        width: 100%;
        max-width: 420px;
        margin: 0 auto;
      }
    }
    
    @media only screen and (max-width: 767px) {
      .car-hero {
        text-align: center;
    
        :deep(.title) {
          &.is-2 {
            font-size: 2rem;
          }
        }
    
        .buttons {
          justify-content: center;
        }
      }
    
      .hero-form-container {
        margin-top: 3rem;
      }
    
      .car-hero-solo {
        img {
          max-width: 100%;
        }
      }
    }
    
    @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
      .car-hero {
        text-align: center;
    
        :deep(.title) {
          font-size: 2.25rem;
          margin-left: auto;
          margin-right: auto;
          max-width: 580px;
        }
    
        :deep(.subtitle) {
          margin-left: auto;
          margin-right: auto;
          max-width: 580px;
        }
    
        .buttons {
          justify-content: center;
        }
      }
    
      .hero-form-container {
        margin-top: 3rem;
      }
    }
    </style>
    