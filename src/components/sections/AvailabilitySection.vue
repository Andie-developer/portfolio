<script setup>
import { Briefcase, Globe, Handshake, Send } from 'lucide-vue-next'
import SectionDecor from '../ui/SectionDecor.vue'
import { AVAILABILITY, SITE } from '../../utils/constants.js'

const iconMap = {
  briefcase: Briefcase,
  globe: Globe,
  handshake: Handshake,
}
</script>

<template>
  <section id="availability" class="section section--dark availability">
    <SectionDecor variant="dark" />

    <div class="section__inner section__center fade-up">
      <h2 class="section__title">
        Available <span class="accent">For</span>
      </h2>

      <div class="availability__row">
        <div
          v-for="item in AVAILABILITY"
          :key="item.label"
          class="availability__card"
        >
          <div class="availability__icon">
            <component :is="iconMap[item.icon]" :size="26" />
          </div>
          <span>{{ item.label }}</span>
        </div>
      </div>

      <a :href="`mailto:${SITE.email}`" class="btn-primary">
        <Send :size="18" />
        Let's turn your ideas into reality.
      </a>
    </div>
  </section>
</template>

<style scoped>
.availability__row {
  display: flex;
  gap: 1.25rem;
  margin: 2.5rem 0;
  flex-wrap: wrap;
  justify-content: center;
}

.availability__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  background: rgba(108, 99, 255, 0.08);
  border: 1px solid rgba(108, 99, 255, 0.22);
  border-radius: 16px;
  padding: 1.5rem 1.75rem;
  min-width: 155px;
  font-weight: 600;
  font-size: 0.88rem;
  transition: transform 0.2s, background 0.2s;
}

.availability__card:hover {
  transform: translateY(-4px);
  background: rgba(108, 99, 255, 0.15);
}

.availability__icon {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(108, 99, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--purple-light);
}
</style>
