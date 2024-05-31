<script setup lang="ts">
import { ctaBlockF, ctaBlockFProps } from '/@src/data/docs/blocks/cta/blockF'
</script>

<template>
  <Section id="block-f-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block F"
        subtitle="Block F variation 2"
        link="block-f-props"
      />

      <CtaBlockF
        title="Ready to Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est
              tam dissimile homini quae cum dixisset."
        background="/assets/demo/img/color/1.jpg"
        cta="Get Started"
        cta-link="index"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block F"
        subtitle="Block F variation 3"
        link="block-f-props"
      />

      <CtaBlockF
        title="Ready to Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est
              tam dissimile homini quae cum dixisset."
        background="/assets/demo/img/color/2.jpg"
        cta="Get Started"
        cta-link="index"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block F"
        subtitle="Block F variation 4"
        link="block-f-props"
      />

      <CtaBlockF
        title="Ready to Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est
              tam dissimile homini quae cum dixisset."
        background="/assets/demo/img/color/6.jpg"
        overlay
        cta="Get Started"
        cta-link="index"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block F"
        subtitle="Block F variation 5"
        link="block-f-props"
      />

      <CtaBlockF
        title="Ready to Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est
              tam dissimile homini quae cum dixisset."
        background="/assets/demo/img/color/5.jpg"
        alignment="centered"
        cta="Get Started"
        cta-link="index"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block F"
        subtitle="Block F variation 6"
        link="block-f-props"
      />

      <CtaBlockF
        title="Ready to Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est
              tam dissimile homini quae cum dixisset."
        background="/assets/demo/img/color/3.jpg"
        overlay
        alignment="centered"
        cta="Get Started"
        cta-link="index"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block F"
        subtitle="Block F variation 7"
        link="block-f-props"
      />

      <CtaBlockF
        title="Ready to Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est
              tam dissimile homini quae cum dixisset."
        background="/assets/demo/img/color/4.jpg"
        alignment="right"
        cta="Get Started"
        cta-link="index"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block F"
        subtitle="Block F variation 8"
        link="block-f-props"
      />

      <CtaBlockF
        title="Ready to Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est
              tam dissimile homini quae cum dixisset."
        background="/assets/demo/img/color/7.jpg"
        overlay
        alignment="right"
        cta="Get Started"
        cta-link="index"
      />
    </Container>
  </Section>

  <Section id="block-f-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block F Props" subtitle="Available props for block F" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="ctaBlockF" />
        </template>
        <template #props>
          <DemoProps :props="ctaBlockFProps.props" />
        </template>
        <template #sample>
          <div class="empty-text">
            <p class="paragraph rem-95">
              No data sample available for this component
            </p>
          </div>
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk ships with highly customizable and versatile CTA blocks that
            you can use in any page. Each block comes with it's own styles and
            props. Use the props to build your own examples or use one of the
            prebuilt examples. Every block is natively supporting dark mode.
            However, there are some cases when even in light mode, the section
            background is dark or colored. In that case, you can use the
            <code>inverted</code>
            prop to invert the component when in light mode. See markup and
            props tab for more details about usage.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
