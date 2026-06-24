<script setup>
import {
  LayoutTemplate,
  ShoppingCart,
  Rocket,
  AppWindow,
  TrendingUp,
  ShieldCheck,
} from 'lucide-vue-next'
import ServicesStackSvg from '../ui/ServicesStackSvg.vue'
import { SERVICE_ITEMS, SERVICES_INTRO } from '../../utils/constants.js'

const iconMap = {
  layout: LayoutTemplate,
  cart: ShoppingCart,
  rocket: Rocket,
  app: AppWindow,
  chart: TrendingUp,
  shield: ShieldCheck,
}

const layerColors = {
  'Front-End': { bg: 'rgba(108, 99, 255, 0.1)', text: '#6C63FF' },
  'Full Stack': { bg: 'rgba(45, 212, 191, 0.12)', text: '#0d9488' },
  'Back-End': { bg: 'rgba(61, 68, 89, 0.1)', text: '#3D4459' },
  Analytics: { bg: 'rgba(108, 99, 255, 0.08)', text: '#6C63FF' },
}
</script>

<template>
  <section id="services" class="section section--light services">
    <div class="section__inner services__inner fade-up">
      <!-- Header -->
      <header class="services__header">
        <p class="section__eyebrow">What I Do</p>
        <h2 class="section__title">
          Services <span class="accent">I Offer</span>
        </h2>
        <p class="section__text services__intro">{{ SERVICES_INTRO }}</p>
      </header>

      <!-- Main: visual + cards -->
      <div class="services__body">
        <div class="services__visual">
          <div class="services__visual-card">
            <ServicesStackSvg />
          </div>
        </div>

        <div class="services__grid">
          <article
            v-for="service in SERVICE_ITEMS"
            :key="service.title"
            class="services__card"
          >
            <div class="services__card-top">
              <div class="services__card-icon">
                <component :is="iconMap[service.icon]" :size="22" stroke-width="1.75" />
              </div>
              <span
                class="services__card-layer"
                :style="{
                  background: layerColors[service.layer].bg,
                  color: layerColors[service.layer].text,
                }"
              >
                {{ service.layer }}
              </span>
            </div>
            <h3 class="services__card-title">{{ service.title }}</h3>
            <p class="services__card-desc">{{ service.desc }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services__inner {
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, 5vw, 3.5rem);
}

.services__header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
}

.services__intro {
  margin: 0 auto;
  color: var(--text-muted);
}

.services__body {
  display: grid;
  grid-template-columns: minmax(280px, 360px) 1fr;
  gap: clamp(2rem, 4vw, 3rem);
  align-items: start;
}

.services__visual {
  display: flex;
  justify-content: center;
  position: sticky;
  top: calc(var(--header-height) + 2rem);
}

.services__visual-card {
  background: linear-gradient(165deg, #07090f 0%, #0f1320 50%, #12162a 100%);
  border: 1px solid rgba(108, 99, 255, 0.25);
  border-radius: 16px;
  padding: 1.25rem 1rem 1rem;
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    0 0 60px rgba(108, 99, 255, 0.12);
  width: 100%;
  max-width: 360px;
  overflow: hidden;
  position: relative;
}

.services__visual-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 30%, rgba(108, 99, 255, 0.08) 0%, transparent 55%);
  pointer-events: none;
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.services__card {
  background: var(--white);
  border: 1px solid #e4e7ee;
  border-radius: 14px;
  padding: 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.services__card:hover {
  border-color: rgba(108, 99, 255, 0.3);
  box-shadow: 0 8px 24px rgba(108, 99, 255, 0.1);
}

.services__card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.services__card-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(108, 99, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--purple);
  flex-shrink: 0;
}

.services__card-layer {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  white-space: nowrap;
}

.services__card-title {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--text-dark);
  line-height: 1.3;
}

.services__card-desc {
  font-size: 0.8rem;
  line-height: 1.6;
  color: var(--text-muted);
}

@media (max-width: 900px) {
  .services__body {
    grid-template-columns: 1fr;
  }

  .services__visual {
    position: static;
  }

  .services__visual-card {
    max-width: 100%;
  }
}

@media (max-width: 560px) {
  .services__grid {
    grid-template-columns: 1fr;
  }
}
</style>
