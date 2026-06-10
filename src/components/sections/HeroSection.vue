<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Code2 } from 'lucide-vue-next'
import DeveloperLifeSvg from '../ui/DeveloperLifeSvg.vue'
import { SITE } from '../../utils/constants.js'

const heroRef = ref(null)
const nameRef = ref(null)

const mouseX = ref(0.5)
const mouseY = ref(0.5)
const sweepIndex = ref(-1)
const isHovering = ref(false)
const showBio = ref(false)

const letters = computed(() => SITE.name.split(''))

function letterStyle(index) {
  if (sweepIndex.value < 0) {
    return {
      color: '#ffffff',
      textShadow: '0 0 20px rgba(108, 99, 255, 0.3)',
    }
  }

  const dist = Math.abs(index - sweepIndex.value)
  if (dist === 0) {
    return {
      color: '#2dd4bf',
      textShadow: '0 0 24px rgba(45, 212, 191, 0.8)',
      transform: 'translateY(-4px) scale(1.08)',
    }
  }
  if (dist === 1) {
    return {
      color: '#8b83ff',
      textShadow: '0 0 14px rgba(108, 99, 255, 0.5)',
    }
  }
  if (dist === 2) {
    return {
      color: '#6c63ff',
      textShadow: '0 0 8px rgba(108, 99, 255, 0.3)',
    }
  }
  return { color: 'rgba(255, 255, 255, 0.4)' }
}

function handleMouseMove(e) {
  if (!heroRef.value) return

  const rect = heroRef.value.getBoundingClientRect()
  mouseX.value = (e.clientX - rect.left) / rect.width
  mouseY.value = (e.clientY - rect.top) / rect.height
  isHovering.value = true

  if (nameRef.value) {
    const nameRect = nameRef.value.getBoundingClientRect()
    const overName =
      e.clientX >= nameRect.left &&
      e.clientX <= nameRect.right &&
      e.clientY >= nameRect.top &&
      e.clientY <= nameRect.bottom

    if (overName) {
      const relX = (e.clientX - nameRect.left) / nameRect.width
      sweepIndex.value = Math.floor(relX * letters.value.length)
      showBio.value = relX > 0.55
    } else {
      const centerDist = Math.hypot(mouseX.value - 0.5, mouseY.value - 0.5)
      showBio.value = centerDist < 0.22
      sweepIndex.value = Math.floor(mouseX.value * letters.value.length)
    }
  }
}

function handleMouseLeave() {
  isHovering.value = false
  sweepIndex.value = -1
  showBio.value = false
  mouseX.value = 0.5
  mouseY.value = 0.5
}

function handleTouch(e) {
  if (!heroRef.value || !e.touches[0]) return
  handleMouseMove({
    clientX: e.touches[0].clientX,
    clientY: e.touches[0].clientY,
  })
  showBio.value = true
}

onMounted(() => {
  heroRef.value?.addEventListener('touchstart', handleTouch, { passive: true })
})

onUnmounted(() => {
  heroRef.value?.removeEventListener('touchstart', handleTouch)
})
</script>

<template>
  <section
    id="hero"
    ref="heroRef"
    class="section section--dark hero"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <DeveloperLifeSvg
      :mouse-x="mouseX"
      :mouse-y="mouseY"
      :active="isHovering"
    />

    <div class="section__inner hero__inner">
      <p class="hero__greeting">Hi, I'm</p>

      <!-- Interactive name / bio swap -->
      <div
        ref="nameRef"
        class="hero__identity"
        :class="{ 'hero__identity--bio': showBio }"
      >
        <h1 class="hero__name" :aria-hidden="showBio">
          <span
            v-for="(char, i) in letters"
            :key="i"
            class="hero__letter"
            :style="letterStyle(i)"
          >{{ char }}</span>
        </h1>

        <div class="hero__bio" :aria-hidden="!showBio">
          <p class="hero__bio-label">
            <span class="hero__bio-dot" /> Detail-Oriented Developer
          </p>
          <p class="hero__bio-text">{{ SITE.bio }}</p>
        </div>
      </div>

      <p class="hero__role accent-teal" :class="{ 'hero__role--hidden': showBio }">
        {{ SITE.title }}
      </p>

      <div class="hero__icon" :class="{ 'hero__icon--pulse': isHovering }">
        <Code2 :size="44" stroke-width="1.5" />
      </div>

      <p class="hero__tagline">
        <template v-if="!showBio">{{ SITE.tagline }}</template>
        <template v-else>
          <span class="hero__hint">Move across my name to explore who I am</span>
        </template>
      </p>

      <p v-if="!isHovering" class="hero__cta-hint">
        <span class="hero__cta-arrow">→</span> Hover &amp; move across my name
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  text-align: center;
  cursor: crosshair;
  overflow: hidden;
}

.hero__inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  max-width: 820px;
}

.hero__greeting {
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  font-weight: 500;
  opacity: 0.85;
}

.hero__identity {
  position: relative;
  width: 100%;
  min-height: clamp(3.5rem, 12vw, 5.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.25rem 0;
  transition: min-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero__identity--bio {
  min-height: clamp(10rem, 28vw, 14rem);
}

.hero__name {
  font-size: clamp(1.8rem, 6.5vw, 3.8rem);
  font-weight: 800;
  letter-spacing: 0.04em;
  line-height: 1.1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.02em;
  transition: opacity 0.45s ease, transform 0.45s ease, filter 0.45s ease;
}

.hero__identity--bio .hero__name {
  opacity: 0;
  transform: scale(0.92) translateY(-12px);
  filter: blur(4px);
  pointer-events: none;
  position: absolute;
}

.hero__letter {
  display: inline-block;
  transition: color 0.2s ease, transform 0.2s ease, text-shadow 0.2s ease;
}

.hero__bio {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  padding: 0 1rem;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  pointer-events: none;
}

.hero__identity--bio .hero__bio {
  opacity: 1;
  transform: translateY(0);
}

.hero__bio-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--teal);
}

.hero__bio-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--teal);
  box-shadow: 0 0 12px var(--teal);
  animation: pulse-dot 1.5s ease-in-out infinite;
}

.hero__bio-text {
  font-size: clamp(0.82rem, 1.6vw, 0.98rem);
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.82);
  max-width: 680px;
  text-align: center;
  font-weight: 400;
}

.hero__role {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.hero__role--hidden {
  opacity: 0;
  transform: translateY(-8px);
}

.hero__icon {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: rgba(108, 99, 255, 0.12);
  border: 2px solid var(--purple);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--purple);
  margin: 0.75rem 0 0.5rem;
  animation: float 4s ease-in-out infinite;
  box-shadow: 0 0 50px var(--purple-glow);
  transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s;
}

.hero__icon--pulse {
  border-color: var(--teal);
  box-shadow: 0 0 60px rgba(45, 212, 191, 0.35), 0 0 30px var(--purple-glow);
  transform: scale(1.05);
}

.hero__tagline {
  font-size: clamp(0.85rem, 1.6vw, 1rem);
  opacity: 0.7;
  max-width: 420px;
  min-height: 1.5em;
}

.hero__hint {
  color: var(--purple-light);
  font-size: 0.85rem;
}

.hero__cta-hint {
  margin-top: 0.75rem;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.35);
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  animation: fade-hint 2.5s ease-in-out infinite;
}

.hero__cta-arrow {
  color: var(--purple);
  animation: nudge 1.5s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.85); }
}

@keyframes fade-hint {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 0.65; }
}

@keyframes nudge {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(4px); }
}

@media (max-width: 600px) {
  .hero {
    cursor: default;
  }

  .hero__identity--bio {
    min-height: 16rem;
  }
}
</style>
