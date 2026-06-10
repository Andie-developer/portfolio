<script setup>
import SectionDecor from '../ui/SectionDecor.vue'
</script>

<template>
  <section id="cta" class="section section--light cta">
    <SectionDecor variant="light" />

    <div class="section__inner section__center fade-up">
      <h2 class="cta__title">
        Let's Build <span class="accent-text">Something Amazing</span> Together!
      </h2>

      <div class="high-five">
        <div class="hand hand--left" aria-hidden="true">🤚</div>
        <div class="sparkles" aria-hidden="true">
          <span>✦</span><span>✦</span><span>✦</span>
        </div>
        <div class="hand hand--right" aria-hidden="true">🙌</div>
      </div>

      <p class="cta__tagline">
        Your idea. My code. <strong>Powerful results.</strong>
      </p>
    </div>
  </section>
</template>

<style scoped>
.cta__title {
  font-size: clamp(1.6rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: var(--text-dark);
  line-height: 1.25;
  margin-bottom: 2rem;
  max-width: 600px;
}

.high-five {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin: 1.5rem 0 2rem;
}

.hand {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  font-size: 2.2rem;
  line-height: 1;
}

.hand--left {
  background: linear-gradient(135deg, #fbbf24, #d97706);
  transform: rotate(-15deg) translateX(8px);
}

.hand--right {
  background: linear-gradient(135deg, var(--purple), #5548e0);
  transform: rotate(15deg) translateX(-8px);
}

.sparkles {
  display: flex;
  flex-direction: column;
  gap: 2px;
  color: var(--purple);
  font-size: 1rem;
  animation: twinkle 1.5s ease-in-out infinite;
}

.cta__tagline {
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: var(--text-muted);
}

.cta__tagline strong {
  color: var(--text-dark);
}
</style>
