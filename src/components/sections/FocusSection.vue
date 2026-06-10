<script setup>
import { Rocket, Shield, User, BarChart3, Target } from 'lucide-vue-next'
import SectionDecor from '../ui/SectionDecor.vue'
import { FOCUS_AREAS } from '../../utils/constants.js'

const iconMap = {
  rocket: Rocket,
  shield: Shield,
  user: User,
  'bar-chart': BarChart3,
}
</script>

<template>
  <section id="focus" class="section section--light focus">
    <SectionDecor variant="light" />

    <div class="section__inner section__center fade-up">
      <h2 class="section__title">
        <span class="accent">I Focus</span> On
      </h2>

      <div class="focus-hub">
        <div class="focus-hub__target">
          <div class="focus-hub__rings">
            <span class="ring ring--1" />
            <span class="ring ring--2" />
            <span class="ring ring--3" />
          </div>
          <Target :size="48" class="focus-hub__icon" />
        </div>

        <div
          v-for="(area, i) in FOCUS_AREAS"
          :key="area.label"
          class="focus-hub__item"
          :class="`focus-hub__item--${i}`"
        >
          <div class="focus-hub__item-icon">
            <component :is="iconMap[area.icon]" :size="20" />
          </div>
          <span>{{ area.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.focus-hub {
  position: relative;
  width: 100%;
  max-width: 480px;
  height: 340px;
  margin-top: 2rem;
}

.focus-hub__target {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 110px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.focus-hub__rings {
  position: absolute;
  inset: 0;
}

.ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid var(--purple);
  opacity: 0.25;
}

.ring--1 { inset: 0; }
.ring--2 { inset: -18px; opacity: 0.15; }
.ring--3 { inset: -36px; opacity: 0.08; }

.focus-hub__icon {
  color: var(--purple);
  position: relative;
  z-index: 1;
}

.focus-hub__item {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-dark);
}

.focus-hub__item-icon {
  width: 50px;
  height: 50px;
  border-radius: 14px;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--purple);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

.focus-hub__item--0 { top: 0; left: 50%; transform: translateX(-50%); }
.focus-hub__item--1 { top: 50%; right: 0; transform: translateY(-50%); }
.focus-hub__item--2 { bottom: 0; left: 50%; transform: translateX(-50%); }
.focus-hub__item--3 { top: 50%; left: 0; transform: translateY(-50%); }

@media (max-width: 600px) {
  .focus-hub {
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    padding-top: 1rem;
  }

  .focus-hub__target {
    position: static;
    transform: none;
    grid-column: 1 / -1;
    margin: 0 auto;
  }

  .focus-hub__item {
    position: static;
    transform: none !important;
  }
}
</style>
