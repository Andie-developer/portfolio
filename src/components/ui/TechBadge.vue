<script setup>
import TechLogo from './TechLogo.vue'

defineProps({
  name: { type: String, required: true },
})
</script>

<template>
  <div class="tech-badge">
    <span class="tech-badge__name">{{ name }}</span>
    <div class="tech-badge__logo">
      <TechLogo :name="name" :size="52" />
    </div>
  </div>
</template>

<style scoped>
.tech-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem 1.1rem 1.1rem;
  background: #ffffff;
  border: 1px solid #e4e7ee;
  border-radius: 14px;
  min-width: 110px;
  min-height: 130px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.tech-badge:hover {
  border-color: rgba(108, 99, 255, 0.35);
  box-shadow: 0 8px 24px rgba(108, 99, 255, 0.12);
}

.tech-badge__name {
  font-size: 0.72rem;
  font-weight: 700;
  color: #1a1a2e;
  text-align: center;
  line-height: 1.2;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.tech-badge__logo {
  width: 72px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
</style>
