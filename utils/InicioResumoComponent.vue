<script setup lang="ts">
import { nftAvatars } from '/@src/data/pages/nft'
</script>

<template>
  <Hero
    color="grey"
    class="nft-hero"
    size="fullheight"
    shape="/assets/shapes/hero-shape.svg"
    shape-orientation="right"
  >
    <template #body>
      <div class="columns is-vcentered">
        <div class="column is-5">
          <div class="hero-caption">
            <p
              class="paragraph is-uppercase rem-100 weight-6 text-primary mb-2"
            >
              Próximos Festivais
            </p>
            <Title tag="h1" :size="2" weight="bold">
              Fique por dentro do mundo da
              <span class="text-primary">PIPA</span>
            </Title>
            <Subtitle
              tag="p"
              :size="5"
              classes="b-centered-tablet-p text-medium"
            >
              Acompanhe as notícias, dicas, anuncios de festivais, monte sua equipe e busque seus titulos
            </Subtitle>
            <!--Buttons-->
            <div class="buttons is-relative z-1">
              <Button color="primary" :long="2" raised bold>Ver Noticias</Button>
              
              <a href="https://app.pipasbr.com.br/auth">
              <Button
                elevated
                bold
                :long="2"
                icon-left="teenyicons:wallet-alt-outline"
              >
                Acessar Painel
              </Button>
            </a>
            </div>
            <!--Authors-->
            <div class="authors">
              <AvatarGroup :avatars="nftAvatars" :limit="5" compact counter />
              <div class="meta">
                <h3>100+</h3>
                <p class="paragraph rem-85">Pipeiros</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-7">
          <div class="hero-composition-container">
            <div class="columns b-columns-half-tablet-p">
              <div class="column is-6">
                <!-- <div class="panel-card authors-card">
                  <Title tag="h3" :size="5" weight="bold">
                    Top Autores do Blog
                    <span>🎉</span>
                  </Title>
                  <AvatarGroup
                    size="medium"
                    :avatars="nftAvatars"
                    :limit="5"
                    compact
                    counter
                  />
                </div> -->
                <!--NFT card-->
                <div class="nft-card">
                  <DarkImage
                    src="/assets/festival/7setembro.jpeg"
                    alt="NFT image"
                    width="600"
                    height="510"
                  />
                  <div class="card-head">
                    <AvatarSimple picture="/assets/logo/logo.png" />
                    <Title tag="h3" :size="6" weight="semi">
                      FESTIVAL 7 SETEMBRO
                    </Title>
                  </div>
                  <div class="card-foot">
                    <div class="price">
                      <span>08/10/2022</span>
                    </div>
                    <div class="likes">
                      <i-bi-heart-fill class="rem-80 text-danger" />
                      <span>RIO DE JANERO</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-6">
                <!--NFT card-->
                <div class="nft-card">
                  <DarkImage
                    src="/assets/festival/noturno.jpeg"
                    alt="NFT image"
                    width="600"
                    height="510"
                  />
                  <div class="card-head">
                    <AvatarSimple picture="/assets/logo/logo.png" />
                    <Title tag="h3" :size="6" weight="semi">
                      FESTIVAL DE PIPA NOTURNO, TODAS TERÇAS E QUINTA
                    </Title>
                  </div>
                  <div class="card-foot">
                    <div class="price">
                      <span>07/09/2022</span>
                    </div>
                    <div class="likes">
                      <i-bi-heart-fill class="rem-80 text-danger" />
                      <span>RIO DE JANEIRO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
.nft-hero {
  .authors {
    display: flex;
    align-items: center;
    text-align: left;

    .meta {
      margin-left: 0.5rem;
      line-height: 1.2;

      h3 {
        font-family: var(--font-alt);
        font-weight: 600;
        color: var(--title-color);
      }
    }
  }
}

.hero-composition-container {
  position: relative;
  right: -2rem;
  margin-top: 3rem;
  text-align: left;

  .panel-card {
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 1.25rem;
    padding: 1.5rem;
    box-shadow: var(--spread-shadow);

    &.authors-card {
      max-width: 280px;
      margin-left: auto;
      margin-bottom: 1rem;
      margin-top: -3rem;
    }

    &.popular-card {
      display: flex;
      align-items: center;
      max-width: 280px;
      margin-right: auto;

      .meta {
        margin-left: 0.5rem;

        h3 {
          font-family: var(--font-alt);
          font-weight: 600;
          color: var(--title-color);
        }
      }
    }
  }

  .nft-card {
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 1.25rem;
    padding: 0.75rem;
    box-shadow: var(--spread-shadow);

    > img {
      display: block;
      border-radius: 1rem;
      margin-bottom: 0.75rem;
    }

    .card-head {
      display: flex;
      align-items: center;
      padding: 0 0.25rem;

      :deep(.avatar) {
        margin-right: 0.5rem;
      }
    }

    .card-foot {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0.25rem 0.5rem;

      .price,
      .likes {
        display: flex;
        align-items: center;

        svg {
          vertical-align: middle;
          margin-right: 0.25rem;
        }

        span {
          font-size: 0.95rem;
          font-family: var(--font-alt);
          font-weight: 600;
          color: var(--title-color);
        }
      }
    }

    &:first-child {
      margin-top: 3rem;
    }

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
}

@media only screen and (max-width: 767px) {
  .nft-hero {
    text-align: center;

    .hero-caption {
      :deep(.title) {
        margin-top: 3rem;

        &.is-2 {
          font-size: 2rem;
        }
      }

      .buttons {
        justify-content: center;
      }
    }

    .authors {
      justify-content: center;
    }
  }

  .hero-composition-container {
    right: 0;
    margin-top: 1rem;

    .nft-card {
      margin-top: 0 !important;
    }

    .columns {
      .column {
        &:first-child {
          display: none;

          .panel-card {
            position: relative;
            top: -4rem;
            right: -7rem;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .nft-hero {
    text-align: center;

    .hero-caption {
      :deep(.title) {
        margin-top: 3rem;
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

    .authors {
      justify-content: center;
    }
  }

  .hero-composition-container {
    right: 0;

    .panel-card {
      padding: 1.25rem;

      :deep(.title) {
        font-size: 1.1rem;
      }
    }

    .nft-card {
      :deep(.title) {
        font-size: 1.1rem;
      }
    }
  }
}

/* stylelint-disable */

//IPad Air
@media only screen and (min-device-width: 820px) and (max-device-height: 1180px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .hero {
    &.is-fullheight {
      .hero-composition-container .columns {
        display: flex !important;

        .column {
          width: initial !important;
          margin: 0 !important;
        }
      }
    }
  }
}

//IPad pro
@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .hero {
    &.is-fullheight {
      .hero-composition-container .columns {
        display: flex !important;

        .column {
          width: initial !important;
          margin: 0 !important;
        }
      }
    }
  }
}

/* stylelint-enable */
</style>
