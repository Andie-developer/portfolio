<script setup>
import {
  GraduationCap,
  Layers,
  Cloud,
  TrendingUp,
  CheckCircle2,
  MapPin,
  Mail,
  ArrowRight,
} from 'lucide-vue-next'
import TechBadge from '../ui/TechBadge.vue'
import AboutTechBg from '../ui/AboutTechBg.vue'
import { SITE, ABOUT, INTRO_TECH } from '../../utils/constants.js'

const iconMap = {
  graduation: GraduationCap,
  layers: Layers,
  cloud: Cloud,
  chart: TrendingUp,
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="intro" class="section section--light about">
    <div class="section__inner about__inner">
      <div class="about__grid fade-up">
        <!-- Profile photo -->
        <div class="about__photo-col">
          <div class="about__photo-card">
            <div class="about__photo-frame">
              <img
                src="/images/profile.png"
                :alt="`${SITE.shortName} — Software Developer`"
                class="about__photo"
                width="380"
                height="480"
                loading="lazy"
              />
            </div>
            <div class="about__photo-badge">
              <span class="about__photo-dot" />
              Available for opportunities
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="about__content">
          <p class="section__eyebrow">About Me</p>
          <h2 class="about__headline">
            I build modern, <span class="accent-text">responsive</span> and scalable web solutions.
          </h2>
          <p class="about__subline">{{ ABOUT.subline }}</p>
          <p class="about__bio">{{ SITE.bio }}</p>

          <!-- Employer highlights -->
          <div class="about__highlights">
            <div
              v-for="item in ABOUT.highlights"
              :key="item.title"
              class="about__highlight"
            >
              <div class="about__highlight-icon">
                <component :is="iconMap[item.icon]" :size="20" stroke-width="2" />
              </div>
              <div>
                <p class="about__highlight-title">{{ item.title }}</p>
                <p class="about__highlight-desc">{{ item.desc }}</p>
              </div>
            </div>
          </div>

          <!-- Strengths -->
          <ul class="about__strengths">
            <li v-for="s in ABOUT.strengths" :key="s">
              <CheckCircle2 :size="16" class="about__check" />
              {{ s }}
            </li>
          </ul>

          <!-- CTAs for employers -->
          <div class="about__actions">
            <a :href="`mailto:${SITE.email}`" class="btn-primary about__btn">
              <Mail :size="17" />
              Hire Me
            </a>
            <button class="about__btn-secondary" @click="scrollTo('build')">
              View My Work
              <ArrowRight :size="16" />
            </button>
          </div>

          <div class="about__contact-row">
            <span class="about__contact-item">
              <MapPin :size="14" />
              {{ SITE.location }}
            </span>
          </div>
        </div>
      </div>

      <!-- Tech stack strip -->
      <div class="about__tech fade-up">
        <AboutTechBg />
        <p class="about__tech-label">Core Technologies</p>
        <div class="about__tech-grid">
          <TechBadge v-for="tech in INTRO_TECH" :key="tech" :name="tech" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--light-bg);
}

.about__inner {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.about__grid {
  display: grid;
  grid-template-columns: minmax(300px, 400px) 1fr;
  gap: clamp(2rem, 5vw, 3.5rem);
  align-items: center;
}

/* Photo */
.about__photo-col {
  display: flex;
  justify-content: center;
}

.about__photo-card {
  position: relative;
  width: 100%;
  max-width: 380px;
}

.about__photo-frame {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: #0a0a0a;
  box-shadow:
    0 24px 56px rgba(0, 0, 0, 0.18),
    0 0 0 3px rgba(108, 99, 255, 0.2);
}

.about__photo {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center top;
}

.about__photo-badge {
  position: absolute;
  bottom: -14px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: var(--white);
  border: 1px solid #e8ebf2;
  border-radius: 999px;
  padding: 0.45rem 1rem;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-dark);
  white-space: nowrap;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  z-index: 2;
}

.about__photo-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--teal);
  box-shadow: 0 0 8px var(--teal);
  animation: pulse-dot 2s ease-in-out infinite;
}

/* Content */
.about__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about__headline {
  font-size: clamp(1.5rem, 3vw, 2.1rem);
  font-weight: 800;
  line-height: 1.3;
  color: var(--text-dark);
}

.about__subline {
  font-size: clamp(0.95rem, 1.6vw, 1.05rem);
  color: var(--text-muted);
  line-height: 1.65;
  max-width: 560px;
}

.about__bio {
  font-size: 0.92rem;
  line-height: 1.75;
  color: var(--text-dark);
  opacity: 0.85;
  max-width: 600px;
  padding: 1rem 1.15rem;
  background: var(--white);
  border-left: 3px solid var(--purple);
  border-radius: 0 10px 10px 0;
}

.about__highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
  margin-top: 0.5rem;
}

.about__highlight {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  padding: 0.85rem;
  background: var(--white);
  border: 1px solid #eceef3;
  border-radius: 12px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.about__highlight:hover {
  border-color: rgba(108, 99, 255, 0.3);
  box-shadow: 0 4px 16px rgba(108, 99, 255, 0.08);
}

.about__highlight-icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(108, 99, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--purple);
  flex-shrink: 0;
}

.about__highlight-title {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-dark);
  line-height: 1.3;
}

.about__highlight-desc {
  font-size: 0.75rem;
  color: var(--text-muted);
  line-height: 1.4;
  margin-top: 0.15rem;
}

.about__strengths {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 1rem;
  margin-top: 0.25rem;
}

.about__strengths li {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text-dark);
}

.about__check {
  color: var(--purple);
  flex-shrink: 0;
}

.about__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.about__btn {
  font-size: 0.88rem;
}

.about__btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.9rem 1.5rem;
  background: transparent;
  border: 2px solid var(--purple);
  border-radius: 999px;
  color: var(--purple);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.2s;
}

.about__btn-secondary:hover {
  background: var(--purple);
  color: var(--white);
  transform: translateY(-1px);
}

.about__contact-row {
  margin-top: 0.25rem;
}

.about__contact-item {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.78rem;
  color: var(--text-muted);
}

.about__contact-item svg {
  color: var(--purple);
}

/* Tech strip */
.about__tech {
  position: relative;
  padding: 2.5rem 1.5rem 1.5rem;
  border-top: 1px solid #e4e7ee;
  text-align: center;
  overflow: hidden;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.5);
}

.about__tech-label {
  position: relative;
  z-index: 1;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #5a6278;
  margin-bottom: 1.5rem;
}

.about__tech-grid {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@media (max-width: 900px) {
  .about__grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .about__photo-col {
    order: -1;
  }

  .about__subline,
  .about__bio {
    margin: 0 auto;
  }

  .about__bio {
    text-align: left;
  }

  .about__highlights {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }

  .about__strengths {
    grid-template-columns: 1fr;
    max-width: 320px;
    margin: 0 auto;
    text-align: left;
  }

  .about__actions {
    justify-content: center;
  }

  .about__contact-row {
    text-align: center;
  }
}

@media (max-width: 500px) {
  .about__highlights {
    grid-template-columns: 1fr;
  }
}
</style>
