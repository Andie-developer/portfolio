<script setup>
import { Code2 } from 'lucide-vue-next'
import SectionDecor from '../ui/SectionDecor.vue'
import { SITE } from '../../utils/constants.js'

const stars = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: `${Math.random() * 4}s`,
  size: `${2 + Math.random() * 2}px`,
}))
</script>

<template>
  <section id="outro" class="section section--dark outro">
    <SectionDecor variant="dark" />
    <div class="stars">
      <span
        v-for="star in stars"
        :key="star.id"
        class="star"
        :style="{
          left: star.left,
          top: star.top,
          animationDelay: star.delay,
          width: star.size,
          height: star.size,
        }"
      />
    </div>

    <div class="section__inner section__center fade-up">
      <div class="outro__icon">
        <Code2 :size="36" />
      </div>
      <h2 class="outro__name">{{ SITE.name }}</h2>
      <p class="outro__role accent-teal">{{ SITE.title }}</p>
      <p class="outro__tagline">
        Building digital solutions that make a difference.
        <span class="accent-text">Let's Connect!</span>
      </p>
    </div>
  </section>
</template>

<style scoped>
.outro {
  min-height: 60vh;
}

.outro__icon {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: var(--purple);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  margin-bottom: 1.25rem;
  box-shadow: 0 0 40px var(--purple-glow);
}

.outro__name {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 800;
  letter-spacing: 0.04em;
}

.outro__role {
  margin: 0.35rem 0 1.25rem;
}

.outro__tagline {
  font-size: clamp(0.9rem, 1.8vw, 1.05rem);
  opacity: 0.75;
  max-width: 420px;
  line-height: 1.65;
}
</style>
