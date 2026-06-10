<script setup>
import { PieChart, TrendingUp, Search } from 'lucide-vue-next'
import SectionDecor from '../ui/SectionDecor.vue'
</script>

<template>
  <section id="seo" class="section section--light seo">
    <SectionDecor variant="light" />

    <div class="section__inner section__split fade-up">
      <div class="section__col--text">
        <h2 class="section__title">
          <span class="accent">SEO</span> &amp; Analytics
        </h2>
        <p class="section__text">
          Improving visibility, driving traffic and growing your online presence.
        </p>
      </div>

      <div class="section__col--visual">
        <div class="seo-visual">
          <div class="seo-card seo-card--side">
            <PieChart :size="30" />
            <span>Insights</span>
          </div>
          <div class="seo-card seo-card--center iso-card">
            <div class="seo-browser">
              <div class="seo-browser__bar" />
              <TrendingUp :size="36" class="seo-browser__chart" />
            </div>
            <span>Growth</span>
          </div>
          <div class="seo-card seo-card--side">
            <Search :size="30" />
            <span>SEO</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.seo-visual {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 1rem;
}

.seo-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  padding: 1.1rem 1.3rem;
  border-radius: 16px;
  font-weight: 600;
  font-size: 0.82rem;
  color: var(--purple);
  transition: transform 0.2s;
}

.seo-card--side {
  background: var(--white);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.07);
}

.seo-card--center {
  padding: 1.5rem 1.5rem 1.1rem;
  transform: translateY(-16px);
  color: var(--text-dark);
}

.seo-browser {
  width: 120px;
  height: 90px;
  background: var(--navy);
  border-radius: 10px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.seo-browser__bar {
  height: 5px;
  width: 40%;
  background: var(--purple);
  border-radius: 3px;
}

.seo-browser__chart {
  color: var(--teal);
  margin: auto;
}

.seo-card:hover {
  transform: translateY(-6px);
}

.seo-card--center:hover {
  transform: translateY(-22px);
}
</style>
