<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Code2, Menu, X } from 'lucide-vue-next'
import { NAV_ITEMS, SITE } from '../../utils/constants.js'

const isScrolled = ref(false)
const activeSection = ref('hero')
const menuOpen = ref(false)
const typedText = ref('')
const showCursor = ref(true)

const prompt = '~/dev-life $'

function handleScroll() {
  isScrolled.value = window.scrollY > 40
}

function scrollTo(id) {
  menuOpen.value = false
  const el = document.getElementById(id)
  if (el) {
    const offset = 80
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

let observer = null
let typeInterval = null
let cursorInterval = null

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  let i = 0
  typeInterval = setInterval(() => {
    if (i <= prompt.length) {
      typedText.value = prompt.slice(0, i)
      i++
    } else {
      clearInterval(typeInterval)
    }
  }, 80)

  cursorInterval = setInterval(() => {
    showCursor.value = !showCursor.value
  }, 530)

  const ids = NAV_ITEMS.map((item) => item.id)
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
  )

  ids.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  observer?.disconnect()
  clearInterval(typeInterval)
  clearInterval(cursorInterval)
})
</script>

<template>
  <header class="site-header" :class="{ 'site-header--scrolled': isScrolled }">
    <div class="site-header__inner">
      <button class="site-header__brand" @click="scrollTo('hero')">
        <span class="site-header__logo">
          <Code2 :size="20" stroke-width="2.5" />
        </span>
        <span class="site-header__brand-text">
          <span class="site-header__name">{{ SITE.shortName }}</span>
          <span class="site-header__prompt">
            <span class="site-header__prompt-text">{{ typedText }}</span>
            <span class="site-header__cursor" :class="{ 'site-header__cursor--off': !showCursor }">|</span>
          </span>
        </span>
      </button>

      <div class="site-header__status">
        <span class="site-header__status-dot" />
        <span>Open to work</span>
      </div>

      <nav class="site-header__nav" :class="{ 'site-header__nav--open': menuOpen }">
        <button
          v-for="item in NAV_ITEMS"
          :key="item.id"
          class="site-header__link"
          :class="{ 'site-header__link--active': activeSection === item.id }"
          @click="scrollTo(item.id)"
        >
          <span class="site-header__link-hash">#</span>{{ item.label }}
        </button>
      </nav>

      <div class="site-header__actions">
        <a :href="`mailto:${SITE.email}`" class="site-header__cta">
          <Code2 :size="14" />
          Get In Touch
        </a>
        <button
          class="site-header__toggle"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          @click="menuOpen = !menuOpen"
        >
          <X v-if="menuOpen" :size="22" />
          <Menu v-else :size="22" />
        </button>
      </div>
    </div>

    <div class="site-header__progress" :style="{ transform: `scaleX(${isScrolled ? 1 : 0})` }" />
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 clamp(1rem, 4vw, 2rem);
  transition: background 0.3s, box-shadow 0.3s, backdrop-filter 0.3s;
}

.site-header--scrolled {
  background: rgba(11, 13, 23, 0.94);
  backdrop-filter: blur(14px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.35);
}

.site-header__inner {
  max-width: 1200px;
  margin: 0 auto;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.site-header__brand {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--white);
  flex-shrink: 0;
  text-align: left;
}

.site-header__logo {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--purple);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  box-shadow: 0 0 22px rgba(108, 99, 255, 0.45);
  transition: transform 0.3s, box-shadow 0.3s;
  flex-shrink: 0;
}

.site-header__brand:hover .site-header__logo {
  transform: rotate(-8deg) scale(1.05);
  box-shadow: 0 0 30px rgba(108, 99, 255, 0.6);
}

.site-header__brand-text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.site-header__name {
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  line-height: 1.2;
}

.site-header__prompt {
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  color: var(--teal);
  opacity: 0.75;
  display: flex;
  align-items: center;
}

.site-header__cursor {
  color: var(--purple-light);
  margin-left: 1px;
}

.site-header__cursor--off {
  opacity: 0;
}

.site-header__status {
  display: none;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.72rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 0.04em;
  padding: 0.35rem 0.75rem;
  border: 1px solid rgba(45, 212, 191, 0.2);
  border-radius: 999px;
  background: rgba(45, 212, 191, 0.06);
}

.site-header__status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--teal);
  box-shadow: 0 0 8px var(--teal);
  animation: pulse-dot 2s ease-in-out infinite;
}

.site-header__nav {
  display: flex;
  align-items: center;
  gap: 0.15rem;
}

.site-header__link {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.82rem;
  font-weight: 500;
  padding: 0.45rem 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  transition: color 0.2s, background 0.2s;
  white-space: nowrap;
  font-family: 'Courier New', monospace;
}

.site-header__link-hash {
  color: var(--purple);
  opacity: 0.6;
  margin-right: 2px;
}

.site-header__link:hover {
  color: var(--white);
  background: rgba(108, 99, 255, 0.1);
}

.site-header__link:hover .site-header__link-hash {
  opacity: 1;
}

.site-header__link--active {
  color: var(--white);
  background: rgba(108, 99, 255, 0.18);
}

.site-header__link--active .site-header__link-hash {
  opacity: 1;
  color: var(--teal);
}

.site-header__actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.site-header__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1.2rem;
  background: var(--purple);
  color: var(--white);
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
  white-space: nowrap;
}

.site-header__cta:hover {
  background: var(--purple-light);
  transform: translateY(-1px);
  box-shadow: 0 4px 20px var(--purple-glow);
}

.site-header__toggle {
  display: none;
  background: none;
  border: none;
  color: var(--white);
  cursor: pointer;
  padding: 0.4rem;
}

.site-header__progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--purple), var(--teal));
  transform-origin: left;
  transition: transform 0.4s ease;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@media (min-width: 1100px) {
  .site-header__status {
    display: flex;
  }
}

@media (max-width: 900px) {
  .site-header__prompt {
    display: none;
  }

  .site-header__nav {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    background: rgba(11, 13, 23, 0.97);
    backdrop-filter: blur(14px);
    flex-direction: column;
    padding: 1rem;
    gap: 0.25rem;
    transform: translateY(-120%);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.3s, opacity 0.3s;
    border-bottom: 1px solid rgba(108, 99, 255, 0.15);
  }

  .site-header__nav--open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .site-header__link {
    width: 100%;
    text-align: left;
    padding: 0.75rem 1rem;
  }

  .site-header__toggle {
    display: flex;
  }

  .site-header__cta {
    display: none;
  }
}
</style>
