<script setup lang="ts">
import { table } from '/@src/data/blocks/table'

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
//import { allNfts } from '/@src/data/pages/nft/all'
// import { vulkBenefits } from '/@src/data/demo'
import axios from 'axios'
const nft:any = ref([])
const router = useRouter()

const lojista = async () => {
  const id = Number(router.currentRoute.value.query.id)
  const data = await axios.get('https://backend-okm94.ondigitalocean.app/api/v1/loja/public/get/' + id)
  
  nft.value = data.data
  return lojista
}

// const nft = ref({})

onMounted(async () => {
  await lojista()
})

// export interface NftDetailsProps {
//   nft: any
// }
// const props = defineProps<NftDetailsProps>()

const modalBaseOpen = ref(false)
const comentario = ref('')
const pipeiro = ref('')

const comentar = async () => {
  modalBaseOpen.value = false
  const payload = {
    comentario: comentario.value,
    reacao: 'Comentario',
    loja_id: nft.value.loja.id,
    nome: pipeiro.value,
    pn: options.value,
  }

  const data = await axios.post('https://backend-okm94.ondigitalocean.app/api/v1/loja/public/reacao/add', payload)
  if(data.data.error == 0){
    alert('Comentário enviado com sucesso!')
  }

  lojista()
}

const options = ref(['positiva'])

const curtido = ref(false)
const curtir = async () => {
  const payload = {
    reacao: 'Curtida',
    loja_id: nft.value.loja.id,
  }

  const data = await axios.post('https://backend-okm94.ondigitalocean.app/api/v1/loja/public/reacao/add', payload)
  if(data.data.error == 0){
    alert('Curtida adicionada com sucesso!')
  }

  lojista()
  curtido.value = true
}

const openWaze = () => {
  const destination = nft.value.loja.latitude +','+ nft.value.loja.longitude
console.log(destination)
  window.open(`https://waze.com/ul?ll=${destination}&navigate=yes&z=10`, '_blank')
}

</script>

<template>
  <div class="nft-details-wrapper" v-if="nft.posicao">
    <div class="nft-details-inner">
      <div class="columns">
        <div class="column is-7">
          <!-- <div class="nft-preview-holder" style="margin-left: 10%; width: 100%"> -->
          <div style="height: 600px">
            <div
              class="nft-preview-holder"
              style="height: 100%"
            >
              <MapBox
                :lng="nft.loja.longitude"
                :lat="nft.loja.latitude"
                :zoom="12"
                absolute
              />
            </div>
          </div>
          <!--  </div> -->
        </div>
        <div class="column is-6">
          <div class="nft-info">
            <div class="nft-info-head">
              
              <AvatarSimple :picture="nft.loja.logo" />
              <Title tag="h2" :size="4" weight="bold" narrow>
                <span>{{nft.loja.nome}}</span>
              </Title>
              <div class="actions">
                <button class="action" @click="curtir" :disabled="curtido" style="background-color: #330a0a">
                  <i-ph-heart-duotone />
                </button>
              </div>
            </div>
            <div class="nft-info-price">
              <span class="eth-price text-gradient">{{nft.loja.telefone}}</span>
            </div>
            <div class="nft-info-description">
              <p class="paragraph rem-95">{{nft.loja.descricao}}</p>
            </div>
            <div class="nft-info-links">
              <RouterLink to="/" class="nft-info-link">
                <span>DONO DA LOJA</span>
                <div class="nft-info-link-inner">
                  <AvatarSimple :picture="nft.dono.foto" />
                  <span>{{nft.dono.usuario}}</span>
                </div>
              </RouterLink>
              <RouterLink to="/" class="nft-info-link">
                <span>POSIÇÃO NO RANKING</span>
                <div class="nft-info-link-inner">
                  <span v-if="nft.posicao == 1" class="tag is-success is-rounded">1º</span>
                      <span v-else-if="nft.posicao == 2" class="tag is-warning is-rounded">2º</span>
                      <span v-else-if="nft.posicao == 3" class="tag is-danger is-rounded">3º</span>
                      <span v-else>{{nft.posicao}}º</span>
                </div>
              </RouterLink>
            </div>
            <div class="nft-info-tabs">
              <div class="nft-info-tabs-inner">
                <Tabs
                  selected="bids"
                  :tabs="[
                    { label: 'Produtos', value: 'bids' },
                    { label: 'Comentários', value: 'comments' },
                    { label: 'Fotos da Loja', value: 'photos' },

                  ]"
                >
                  <template #tab="{ activeValue }">
                    <div v-if="activeValue === 'bids'">
                      <div class="active-bids">
                        <div
                          v-for="item in JSON.parse(nft.loja.tags)"
                          :key="item.id"
                          style="display: inline; margin-left: 1%"
                        >
                          <Tag color="primary" :label="item.name"></Tag>
                        </div>
                      </div>
                      <!-- <div class="current-bid">
                        <div class="highest-bid">
                          <span class="small-label">Highest bid</span>
                          <span class="highest-bid-value">
                            <span class="highest-bid-eth text-gradient">
                              {{ props.nft.loja.currentBid.eth }} ETH
                            </span>
                            <span class="highest-bid-dollar">
                              (${{ props.nft.loja.currentBid.dollar }})
                            </span>
                          </span>
                        </div>
                        <div class="bid-countdown">
                          <span class="small-label">Auction ends in:</span>
                          <div class="auction-timer">
                            <div class="timer-block">
                              <span>{{ currentDays }}</span>
                              <span>days</span>
                            </div>
                            <div class="timer-block is-separator">:</div>
                            <div class="timer-block">
                              <span>{{ currentHours }}</span>
                              <span>hours</span>
                            </div>
                            <div class="timer-block is-separator">:</div>
                            <div class="timer-block">
                              <span>{{ currentMinutes }}</span>
                              <span>min</span>
                            </div>
                            <div class="timer-block is-separator">:</div>
                            <div class="timer-block">
                              <span>{{ currentSeconds }}</span>
                              <span>sec</span>
                            </div>
                          </div>
                        </div>
                      </div>-->
                    </div>
                    <div v-else-if="activeValue === 'comments'">
                      <div class="active-comments">
                      <div v-if="nft.loja.reacoes">
                        <div v-if="(nft.loja.reacoes.filter(x => x.reacao == 'Comentario')).length > 0">
                          <SimpleTable :bordered="false" striped>
                            <SimpleTableRow>
                              <SimpleTableHeader>Reação</SimpleTableHeader>
                              <SimpleTableHeader>Pipeiro</SimpleTableHeader>
                              <SimpleTableHeader>Comentário</SimpleTableHeader>
                            </SimpleTableRow>
                            <SimpleTableRow
                              v-for="(item, index) in (nft.loja.reacoes.filter(x => x.reacao == 'Comentario'))"
                              :key="index"
                            >
                              <SimpleTableCell>
                                <SimpleTableCellFlex>
                                  <template #content>
                                    <Tag color="success" label="" v-if="item.pn == 'positiva'"></Tag>
                                    <Tag color="danger" label="" v-else></Tag>
                                  </template>
                                </SimpleTableCellFlex>
                              </SimpleTableCell>
                              <SimpleTableCell>
                                <SimpleTableCellFlex>
                                  <template #content>
                                    <Title
                                      tag="h3"
                                      :size="7"
                                      weight="semi"
                                      narrow
                                    >
                                      {{item.nome}}
                                    </Title>
                                  </template>
                                </SimpleTableCellFlex>
                              </SimpleTableCell>
                              <SimpleTableCell>
                                <SimpleTableCellFlex>
                                  <template #content>
                                    <p class="paragraph rem-85">
                                      {{ item.comentario }}
                                    </p>
                                  </template>
                                </SimpleTableCellFlex>
                              </SimpleTableCell>
                            </SimpleTableRow>
                          </SimpleTable>
                        </div>
                        <div v-else>
                          <div class="py-4">
                            <PlaceholderSection
                              title="Nenhum Comentário"
                              subtitle="Ajude outros pipeiros com seu comentário."
                            >
                              <template #image>
                                <i-ph-chat-circle-dots-duotone
                                  class="text-primary rem-175"
                                />
                              </template>
                            </PlaceholderSection>
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div v-else-if="activeValue === 'photos'">
                      <div class="active-comments">
                      <div>
                        <div v-if="nft.loja.imagens && JSON.parse(nft.loja.imagens).length > 0">
                          <div v-for="(img, index) in JSON.parse(nft.loja.imagens)" :key="index">
                            <img :src="img" alt="" />
                        </div>
                        </div>
                        <div v-else>
                          <div class="py-4">
                            <PlaceholderSection
                              title="O lojista não adicionou nenhuma foto."
                              subtitle="Contate o lojista e peça para ele adicionar fotos."
                            >
                            </PlaceholderSection>
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                  </template>
                </Tabs>
              </div>
            </div>
            <div class="nft-info-action">
              <Buttons>
                <Button color="primary" raised bold @click="openWaze">
                  Abrir no Waze
                </Button>
                <Button
                  icon-right="feather:message-square"
                  @click="modalBaseOpen = true"
                >
                  Deixar um comentário
                </Button>
              </Buttons>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Modal
    title="Adicionar um novo comentário"
    :open="modalBaseOpen"
    actions="center"
    noscroll
    @close="modalBaseOpen = false"
  >
    <template #content>
      <Tag color="solid" label="É TOTALMENTE PROÍBIDO PROPAGAR ÓDIO!"></Tag>
      <Field>
        <FieldLabel label="Seu nome/vulgo"></FieldLabel>
        <Control>
          <VInput v-model="pipeiro" />
        </Control>
      </Field>
      <Field>
        <FieldLabel label="Digite seu comentário"></FieldLabel>
        <Control>
          <VTextarea
            v-model="comentario"
            placeholder="Essa loja é muito boa, encontrei tudo que eu precisava..."
          />
        </Control>
      </Field>
      <Field>
        <FieldLabel label="Como você considera essa reação?"></FieldLabel>
        <Control>
          <radio
            v-model="options"
            name="radio-1"
            label="Positiva"
            group="radio-group-1"
            color="success"
            value="positiva"
          />
          <Radio
            v-model="options"
            name="radio-2"
            label="Negativa"
            group="radio-group-1"
            color="danger"
            value="negativa"
          />
        </Control>
      </Field>
    </template>
    <template #action>
      <Button color="primary" :long="2" raised @click="comentar">
        Comentar
      </Button>
    </template>
  </Modal>
</template>

<style scoped lang="scss">
.side-contact {
  position: relative;

  .contact-card {
    padding: 2.5rem;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 0.85rem;
    max-width: 440px;
    margin: 0 auto;
    transition: box-shadow 0.3s;

    &:focus-within {
      box-shadow: var(--spread-shadow);
    }
  }

  .contact-map {
    height: 10%;
    min-height: 480px;
    border-radius: 0.85rem;
    top: 110px;
    width: 10%;
  }
}

.nft-details-wrapper {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.nft-preview-holder {
  position: sticky;
  top: 110px;
  width: 100%;
  margin-left: 0%;
  height: 100%;
  display: block;
  border-radius: 0.85rem;
}

.nft-info {
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  border-radius: 1rem;
  max-width: 480px;
  transition: box-shadow 0.3s;

  .nft-info-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.75rem 1.75rem 0;

    .action {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      background: var(--wrap-bg-color);
      border: 1px solid var(--wrap-border-color);
      height: 36px;
      width: 36px;
      border-radius: 50%;
      margin-left: 0.5rem;
      color: var(--primary);
      cursor: pointer;
      transition: box-shadow 0.3s;

      &:hover {
        box-shadow: var(--spread-shadow);
      }
    }
  }

  .nft-info-price {
    padding: 1rem 1.75rem;
    font-family: var(--font);

    .eth-price {
      font-size: 1.1rem;
      font-weight: 600;
    }

    .dollar-price,
    .collection-rank {
      font-size: 0.9rem;
      color: var(--light-text);
    }
  }

  .nft-info-description {
    padding: 0 1.75rem;
  }

  .nft-info-links {
    display: flex;
    align-items: center;
    padding: 2rem 1.75rem;

    .nft-info-link {
      flex: 1 1 0;

      > span {
        font-family: var(--font);
        font-size: 0.85rem;
        color: var(--light-text);
      }

      .nft-info-link-inner {
        display: flex;
        align-items: center;

        > span {
          color: var(--title-color);
          font-weight: 500;
          font-size: 0.9rem;
          font-family: var(--font);
          margin-left: 0.5rem;
        }
      }
    }
  }

  .nft-info-tabs {
    padding: 0 1.75rem 1.75rem;

    .nft-info-tabs-inner {
      background: var(--wrap-muted-color);
      border-radius: 0.85rem;
      padding: 1rem;

      :deep(.tabs) {
        font-size: 0.9rem;
      }

      .active-bids {
        .active-bid {
          display: flex;
          align-items: center;

          .meta {
            margin-left: 0.5rem;

            span {
              display: block;
              font-family: var(--font);

              &:first-child {
                font-size: 0.9rem;
                color: var(--title-color);
                font-weight: 500;
              }

              &:nth-child(2) {
                font-size: 0.8rem;
                color: var(--light-text);
              }
            }
          }

          &:not(:last-child) {
            margin-bottom: 0.75rem;
          }
        }
      }

      .current-bid {
        display: flex;
        background: var(--card-bg-color);
        border-radius: 0.75rem;
        margin-top: 1.5rem;
        font-family: var(--font);
        box-shadow: var(--light-box-shadow);

        .small-label {
          font-size: 0.85rem;
          color: var(--light-text);
        }

        .highest-bid {
          flex: 1 1 0;
          border-right: 1px solid var(--card-border-color);
          padding: 1rem;
          font-family: var(--font);

          .highest-bid-value {
            display: block;

            .highest-bid-eth,
            .highest-bid-dollar {
              display: block;
            }

            .highest-bid-eth {
              font-weight: 700;
              font-size: 1.25rem;
            }

            .highest-bid-dollar {
              color: var(--medium-text);
              font-size: 0.9rem;
            }
          }
        }

        .bid-countdown {
          flex: 1 1 0;
          padding: 1rem;

          .auction-timer {
            display: flex;

            .timer-block {
              text-align: center;

              span {
                display: block;
                font-family: var(--font);

                &:first-child {
                  font-size: 1.1rem;
                  font-weight: 500;
                  color: var(--title-color);
                }

                &:nth-child(2) {
                  font-size: 0.7rem;
                  color: var(--light-text);
                }
              }

              &:not(.is-separator) {
                flex: 1 1 0;
              }
            }
          }
        }
      }
    }
  }

  .nft-info-action {
    padding: 0 1.75rem 1.75rem;

    :deep(.button) {
      flex: 1 1 0;
    }
  }

  &:hover {
    box-shadow: var(--spread-shadow);
  }
}

@media (max-width: 767px) {
  .nft-info {
    .nft-info-head {
      flex-direction: column-reverse;
      align-items: flex-start;
      padding: 1.25rem 1.25rem 0;

      .actions {
        margin-left: auto;
      }

      .action {
        margin: 0 0.25rem 0.75rem;
      }
    }

    .nft-info-price,
    .nft-info-description,
    .nft-info-links,
    .nft-info-tabs,
    .nft-info-action {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }

    .nft-info-tabs {
      .nft-info-tabs-inner .current-bid {
        flex-direction: column;

        .highest-bid {
          border-right: none;
          border-bottom: 1px solid var(--card-border-color);
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .nft-info {
    width: 100%;
    max-width: 100%;
    margin: 0;
  }

  .nft-preview-holder {
    img {
      width: 100%;
    }
  }
}
</style>
