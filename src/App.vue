<script setup>
import SiteHeader from './components/layout/SiteHeader.vue'
import HeroSection from './components/sections/HeroSection.vue'
import IntroSection from './components/sections/IntroSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import FullStackSection from './components/sections/FullStackSection.vue'
import TechStackSection from './components/sections/TechStackSection.vue'
import WhatIBuildSection from './components/sections/WhatIBuildSection.vue'
import FocusSection from './components/sections/FocusSection.vue'
import SeoSection from './components/sections/SeoSection.vue'
import PhilosophySection from './components/sections/PhilosophySection.vue'
import CtaSection from './components/sections/CtaSection.vue'
import AvailabilitySection from './components/sections/AvailabilitySection.vue'
import OutroSection from './components/sections/OutroSection.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <div class="portfolio">
    <HeroSection />
    <IntroSection />
    <ServicesSection />
    <FullStackSection />
    <TechStackSection />
    <WhatIBuildSection />
    <FocusSection />
    <SeoSection />
    <PhilosophySection />
    <CtaSection />
    <AvailabilitySection />
    <OutroSection />
    <SiteFooter />
  </div>
</template>
