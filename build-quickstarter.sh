#!/bin/bash
PROJECT=$1
TAG=$2

if [ -z $PROJECT ] 
then
  echo "<project> missing"
  echo "Usage: ${0} <project> <tag>"
  exit 1
fi

if [ -z $TAG ] 
then
  echo "<tag> missing"
  echo "Usage: ${0} <project> <tag>"
  exit 1
fi

set -xe


# remove build artifacts and pages/layouts
rm -rf \
  src/pages \
  src/layouts \
  dist
  
# swap quickstart pages
mv \
  src/pages-quickstart \
  src/pages

# swap quickstart layouts
mv \
  src/layouts-quickstart \
  src/layouts

# NavbarA
# BackToTop
# DemoLayoutComponent
# ErrorHero
# Hero
# HeroCircleMask
# HeroWaveMask
# ErrorAnimated
# ThemeToggle
# Title
# Section
# WaveOne
# WaveTwo
# TongueOne
# TongueTwo
# Container
# PlaceloadText
# PlaceloadParagraph
# DarkImage

# remove unncecessary components for the quickstart
find src/components/{advanced,blocks,form,layout,misc,navigation} -type f -not \( \
  -name 'NavbarA.vue' \
  -or -name 'BackToTop.vue' \
  -or -name 'Hamburger.vue' \
  -or -name 'NavbarDropdown.vue' \
  -or -name 'DemoLayoutComponent.vue' \
  -or -name 'ErrorHero.vue' \
  -or -name 'Hero.vue' \
  -or -name 'HeroCircleMask.vue' \
  -or -name 'HeroWaveMask.vue' \
  -or -name 'ErrorAnimated.vue' \
  -or -name 'ThemeToggle.vue' \
  -or -name 'Title.vue' \
  -or -name 'Section.vue' \
  -or -name 'WaveOne.vue' \
  -or -name 'WaveTwo.vue' \
  -or -name 'TongueOne.vue' \
  -or -name 'TongueTwo.vue' \
  -or -name 'Container.vue' \
  -or -name 'PlaceloadText.vue' \
  -or -name 'PlaceloadParagraph.vue' \
  -or -name 'DarkImage.vue' \
  \) -delete

find src/components/{advanced,blocks,form,layout,misc,navigation} -type d -empty -delete

# /assets/logo/logo.png
# /assets/illustrations/demo/demo-char-1.svg
# /assets/illustrations/demo/demo-char-2.svg
# /assets/illustrations/demo/demo-char-3.svg
# /assets/illustrations/demo/demo-char-4.svg
# /assets/illustrations/demo/demo-char-4-hands.svg
# /assets/illustrations/demo/demo-char-5.svg
# /assets/illustrations/demo/demo-char-6.svg
# /assets/illustrations/demo/demo-char-6-hands.svg
# /assets/illustrations/demo/demo-char-7.svg

# remove unncecessary assets for the quickstart
find public/assets -type f -not \( \
  -name 'logo.png' \
  -or -name 'demo-char-1.svg' \
  -or -name 'demo-char-2.svg' \
  -or -name 'demo-char-3.svg' \
  -or -name 'demo-char-4.svg' \
  -or -name 'demo-char-4-hands.svg' \
  -or -name 'demo-char-5.svg' \
  -or -name 'demo-char-6.svg' \
  -or -name 'demo-char-6-hands.svg' \
  -or -name 'demo-char-7.svg' \
  \) -delete

find public/assets -type d -empty -delete

## build without artifacts and with quickstarter content
SILENT=true OPTIMIZE_IMG=false yarn build

# zip sources quickstarter-${PROJECT}-${TAG}.zip
zip -r .release/quickstarter-${PROJECT}-${TAG}.zip . \
  -x "*.zip" \
  -x "node_modules/*" \
  -x ".release/*" \
  -x ".git/*" \
  -x ".github/*" \
  -x "docker-compose.yml"

# remove build artifacts and pages/layouts
rm -rf \
  src/pages \
  src/layouts \
  dist

# reset index
git checkout \
  src \
  public \
  components.d.ts
