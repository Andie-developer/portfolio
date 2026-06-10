<script setup>
import {
  Boxes, Layout, Briefcase, Landmark, Smartphone, Search, Laptop,
} from 'lucide-vue-next'
import SectionDecor from '../ui/SectionDecor.vue'
import { WHAT_I_BUILD } from '../../utils/constants.js'

const iconMap = {
  boxes: Boxes,
  layout: Layout,
  briefcase: Briefcase,
  landmark: Landmark,
  smartphone: Smartphone,
  search: Search,
}

const positions = [
  { top: '2%', left: '2%' },
  { top: '2%', right: '2%' },
  { top: '42%', left: '-2%' },
  { top: '42%', right: '-2%' },
  { bottom: '4%', left: '8%' },
  { bottom: '4%', right: '8%' },
]
</script>

<template>
  <section id="build" class="section section--dark build">
    <SectionDecor variant="dark" />

    <div class="section__inner section__center fade-up">
      <h2 class="section__title">
        What <span class="accent">I Build</span>
      </h2>

      <div class="build-hub">
        <div class="build-hub__center">
          <div class="build-hub__laptop-wrap">
            <Laptop :size="52" />
          </div>
          <div class="build-hub__code">
            <span /><span /><span /><span />
          </div>
        </div>

        <div
          v-for="(item, i) in WHAT_I_BUILD"
          :key="item.label"
          class="build-hub__item"
          :style="positions[i]"
        >
          <component :is="iconMap[item.icon]" :size="16" />
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.build-hub {
  position: relative;
  width: 100%;
  max-width: 620px;
  height: 360px;
  margin-top: 2rem;
}

.build-hub__center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.build-hub__laptop-wrap {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(108, 99, 255, 0.12);
  border: 2px solid rgba(108, 99, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--purple-light);
  box-shadow: 0 0 40px var(--purple-glow);
}

.build-hub__code {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 90px;
}

.build-hub__code span {
  height: 3px;
  border-radius: 2px;
  background: rgba(108, 99, 255, 0.45);
}

.build-hub__code span:nth-child(1) { width: 100%; }
.build-hub__code span:nth-child(2) { width: 75%; }
.build-hub__code span:nth-child(3) { width: 90%; }
.build-hub__code span:nth-child(4) { width: 55%; }

.build-hub__item {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  background: rgba(108, 99, 255, 0.1);
  border: 1px solid rgba(108, 99, 255, 0.28);
  border-radius: 999px;
  padding: 0.45rem 0.9rem;
  font-size: 0.78rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  white-space: nowrap;
}

.build-hub__item svg {
  color: var(--purple-light);
  flex-shrink: 0;
}

@media (max-width: 700px) {
  .build-hub {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
  }

  .build-hub__center {
    position: static;
    transform: none;
    margin-bottom: 0.5rem;
  }

  .build-hub__item {
    position: static;
  }
}
</style>
