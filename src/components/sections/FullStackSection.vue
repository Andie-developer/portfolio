<script setup>
import { Code2, Server, Database } from 'lucide-vue-next'
import SectionDecor from '../ui/SectionDecor.vue'
</script>

<template>
  <section id="fullstack" class="section section--dark fullstack">
    <SectionDecor variant="dark" />

    <div class="section__inner section__center fade-up">
      <h2 class="section__title">
        Full Stack <span class="accent">Development</span>
      </h2>
      <p class="section__text fullstack__text">
        From front-end design to back-end logic, I build complete end-to-end solutions.
      </p>

      <div class="iso-stack">
        <div class="iso-stack__layer iso-stack__layer--1">
          <Code2 :size="28" />
          <span>Front-End</span>
        </div>
        <div class="iso-stack__layer iso-stack__layer--2">
          <Server :size="28" />
          <span>Back-End</span>
        </div>
        <div class="iso-stack__layer iso-stack__layer--3">
          <Database :size="28" />
          <span>Database</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fullstack__text {
  margin-bottom: 3rem;
  text-align: center;
}

.iso-stack {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 0;
  perspective: 800px;
  transform-style: preserve-3d;
}

.iso-stack__layer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 130px;
  height: 110px;
  border-radius: 14px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--white);
  transform: rotateX(55deg) rotateZ(-30deg);
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);
  margin-left: -20px;
}

.iso-stack__layer:first-child {
  margin-left: 0;
}

.iso-stack__layer--1 {
  background: linear-gradient(135deg, var(--purple), #5548e0);
  z-index: 3;
}

.iso-stack__layer--2 {
  background: linear-gradient(135deg, var(--teal), #0d9488);
  z-index: 2;
  height: 120px;
}

.iso-stack__layer--3 {
  background: linear-gradient(135deg, #3d4459, #252a3a);
  z-index: 1;
  height: 130px;
}

@media (max-width: 600px) {
  .iso-stack {
    flex-direction: column;
    align-items: center;
    transform: none;
    perspective: none;
    gap: 0.75rem;
  }

  .iso-stack__layer {
    transform: none;
    margin-left: 0;
    width: 200px;
    height: auto;
    padding: 1.25rem;
    flex-direction: row;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
}
</style>
