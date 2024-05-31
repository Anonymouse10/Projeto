<script setup lang="ts">
import {
  avatarGroupProps,
  avatarGroup,
  avatarSimpleSample,
} from '/@src/data/docs/base/avatar'

const avatars = [
  {
    picture: '/assets/demo/img/avatars/43.jpg',
  },
  {
    picture: '/assets/demo/img/avatars/42.jpg',
  },
  {
    picture: '/assets/demo/img/avatars/57.jpg',
  },
  {
    picture: '/assets/demo/img/avatars/19.jpg',
  },
  {
    picture: '/assets/demo/img/avatars/25.jpg',
  },
  {
    picture: '/assets/demo/img/avatars/39.jpg',
  },
  {
    picture: '/assets/demo/img/avatars/41.jpg',
  },
]
</script>

<template>
  <Section id="avatar-group-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="py-6">
          <DemoTitle title="Group" subtitle="Avatar groups" />
          <div
            class="is-flex is-align-items-flex-end is-justify-content-center"
          >
            <AvatarGroup
              size="medium"
              :avatars="avatars"
              :limit="5"
              compact
              counter
            />
          </div>

          <div class="py-4"></div>

          <div
            class="is-flex is-align-items-flex-end is-justify-content-center"
          >
            <AvatarGroup size="small" :avatars="avatars" :limit="3" />
          </div>

          <div class="py-4"></div>

          <div
            class="
              is-flex is-align-items-flex-end is-justify-content-center
              pt-4
            "
          >
            <AvatarGroup
              :avatars="avatars"
              :limit="5"
              squared
              counter
              compact
            />
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="avatarGroup" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="avatarGroupProps" />
          </template>
          <template #sample>
            <PrismCode language="javascript" :code="avatarSimpleSample" />
          </template>
          <template #usage>
            <p class="paragraph rem-95">
              Avatars have become a central component in almost all web and
              mobile application. Vulk avatars come in different flavors.
              Avatars can be grouped using the
              <code>&#x3C;AvatarGroup /&#x3E;</code>
              component. It waits for an
              <code>Array</code>
              of avatars. You can also control the size, the shape, the number
              of rendered avatars and if you wish to display a counter for the
              remaining unshown avatars.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
