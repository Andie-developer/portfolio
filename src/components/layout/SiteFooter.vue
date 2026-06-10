<script setup>
import { Mail, Phone, MapPin } from 'lucide-vue-next'
import { SITE } from '../../utils/constants.js'
</script>

<template>
  <footer id="contact" class="site-footer">
    <div class="site-footer__inner">
      <a :href="`mailto:${SITE.email}`" class="site-footer__item">
        <Mail :size="17" />
        <span>{{ SITE.email }}</span>
      </a>
      <a :href="`tel:${SITE.phone.replace(/\s/g, '')}`" class="site-footer__item">
        <Phone :size="17" />
        <span>{{ SITE.phone }}</span>
      </a>
      <div class="site-footer__item">
        <MapPin :size="17" />
        <span>{{ SITE.location }}</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--navy);
  border-top: 1px solid rgba(108, 99, 255, 0.12);
  padding: 1.25rem clamp(1rem, 4vw, 2rem);
}

.site-footer__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.25rem 2.5rem;
}

.site-footer__item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  transition: color 0.2s;
}

a.site-footer__item:hover {
  color: var(--purple-light);
}

.site-footer__item svg {
  color: var(--purple);
  flex-shrink: 0;
}

@media (max-width: 600px) {
  .site-footer__inner {
    flex-direction: column;
    gap: 0.85rem;
    text-align: center;
  }
}
</style>
