<script setup>
import SectionDecor from '../ui/SectionDecor.vue'
import TechBadge from '../ui/TechBadge.vue'
import { TECH_STACK } from '../../utils/constants.js'
</script>

<template>
  <section id="tech" class="section section--light tech">
    <SectionDecor variant="light" />

    <div class="section__inner section__center fade-up">
      <h2 class="section__title">
        Tech <span class="accent">I Work With</span>
      </h2>

      <div class="tech-grid">
        <TechBadge v-for="tech in TECH_STACK" :key="tech" :name="tech" />
      </div>

      <p class="tech__footer accent-text">
        And more modern tools &amp; technologies.
      </p>
    </div>
  </section>
</template>

<style scoped>
.tech-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 2rem 0 1.75rem;
  width: 100%;
  max-width: 680px;
}

.tech__footer {
  font-size: 0.95rem;
  font-weight: 600;
}

@media (max-width: 600px) {
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
