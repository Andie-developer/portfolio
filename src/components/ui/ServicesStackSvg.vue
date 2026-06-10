<script setup>
import { ref } from 'vue'

const isActive = ref(false)

const steps = [
  { id: 'fe', label: 'Front-End', desc: 'UI & experience' },
  { id: 'be', label: 'Back-End', desc: 'Logic & APIs' },
  { id: 'db', label: 'Database', desc: 'Store & retrieve' },
]
</script>

<template>
  <div
    class="stack-visual"
    :class="{ 'stack-visual--active': isActive }"
    tabindex="0"
    role="img"
    aria-label="Animated full stack: Front-End, Back-End, Database"
    @mouseenter="isActive = true"
    @mouseleave="isActive = false"
    @focusin="isActive = true"
    @focusout="isActive = false"
  >
    <svg
      class="stack-svg"
      viewBox="0 0 200 300"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dbGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#6C63FF" />
          <stop offset="50%" stop-color="#2DD4BF" />
          <stop offset="100%" stop-color="#6C63FF" />
        </linearGradient>
        <linearGradient id="platTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e2440" />
          <stop offset="100%" stop-color="#141829" />
        </linearGradient>
        <filter id="glowPurple" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glowTeal" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <!-- Corner connectors (dashed pillars) -->
      <g class="stack-connectors">
        <line class="stack-connector stack-connector--1" x1="52" y1="72" x2="52" y2="128" />
        <line class="stack-connector stack-connector--2" x1="148" y1="72" x2="148" y2="128" />
        <line class="stack-connector stack-connector--3" x1="52" y1="138" x2="52" y2="194" />
        <line class="stack-connector stack-connector--4" x1="148" y1="138" x2="148" y2="194" />
      </g>

      <!-- Flow particles down the pillars -->
      <g class="stack-flow">
        <g class="stack-particle stack-particle--1"><circle cx="52" cy="72" r="3" fill="#9b87ff" /></g>
        <g class="stack-particle stack-particle--2"><circle cx="148" cy="72" r="3" fill="#9b87ff" /></g>
        <g class="stack-particle stack-particle--3"><circle cx="52" cy="138" r="3" fill="#2dd4bf" /></g>
        <g class="stack-particle stack-particle--4"><circle cx="148" cy="138" r="3" fill="#2dd4bf" /></g>
      </g>

      <!-- ── Layer 1: Front-End ── -->
      <g class="stack-layer stack-layer--fe">
        <!-- Platform -->
        <path class="stack-plat-side" d="M52,72 L100,96 L100,108 L52,84 Z" />
        <path class="stack-plat-side" d="M148,72 L100,96 L100,108 L148,84 Z" />
        <path class="stack-plat-top" d="M52,72 L100,48 L148,72 L100,96 Z" />
        <!-- Code icon -->
        <g class="stack-icon stack-icon--code" filter="url(#glowPurple)">
          <text x="100" y="78" text-anchor="middle" fill="#9b87ff" font-size="22" font-weight="bold" font-family="monospace">&lt;/&gt;</text>
        </g>
      </g>

      <!-- ── Layer 2: Back-End ── -->
      <g class="stack-layer stack-layer--be">
        <path class="stack-plat-side" d="M52,138 L100,162 L100,174 L52,150 Z" />
        <path class="stack-plat-side" d="M148,138 L100,162 L100,174 L148,150 Z" />
        <path class="stack-plat-top" d="M52,138 L100,114 L148,138 L100,162 Z" />
        <!-- Server chips -->
        <g class="stack-icon stack-icon--server">
          <rect x="78" y="142" width="18" height="10" rx="2" fill="#2a3050" stroke="#6C63FF" stroke-width="0.8" opacity="0.9" />
          <rect x="104" y="142" width="18" height="10" rx="2" fill="#2a3050" stroke="#6C63FF" stroke-width="0.8" opacity="0.9" />
          <rect x="91" y="128" width="18" height="10" rx="2" fill="#2a3050" stroke="#2DD4BF" stroke-width="0.8" opacity="0.7" />
          <circle cx="84" cy="147" r="1.5" fill="#2DD4BF" />
          <circle cx="111" cy="147" r="1.5" fill="#2DD4BF" />
          <circle cx="97" cy="133" r="1.5" fill="#6C63FF" />
        </g>
      </g>

      <!-- ── Layer 3: Database ── -->
      <g class="stack-layer stack-layer--db">
        <path class="stack-plat-side" d="M52,204 L100,228 L100,240 L52,216 Z" />
        <path class="stack-plat-side" d="M148,204 L100,228 L100,240 L148,216 Z" />
        <path class="stack-plat-top" d="M52,204 L100,180 L148,204 L100,228 Z" />
        <!-- Cylinder database -->
        <g class="stack-icon stack-icon--db" filter="url(#glowTeal)">
          <ellipse cx="100" cy="198" rx="22" ry="7" fill="url(#dbGrad)" opacity="0.95" />
          <path d="M78,198 L78,218 Q100,228 122,218 L122,198 Q100,208 78,198" fill="url(#dbGrad)" />
          <ellipse cx="100" cy="218" rx="22" ry="7" fill="#4a3f9f" opacity="0.8" />
          <ellipse cx="100" cy="198" rx="22" ry="7" fill="none" stroke="#9b87ff" stroke-width="1" opacity="0.5" />
          <line x1="78" y1="206" x2="122" y2="206" stroke="rgba(255,255,255,0.15)" stroke-width="0.8" />
          <line x1="78" y1="212" x2="122" y2="212" stroke="rgba(255,255,255,0.1)" stroke-width="0.8" />
        </g>
      </g>

      <!-- End-to-end path overlay -->
      <path
        class="stack-e2e-path"
        d="M100,60 L100,155 L100,210"
        fill="none"
        stroke="#6C63FF"
        stroke-width="1.5"
        stroke-dasharray="160"
        stroke-dashoffset="160"
        opacity="0"
      />
    </svg>

    <!-- Step labels -->
    <div class="stack-steps">
      <div
        v-for="(step, i) in steps"
        :key="step.id"
        class="stack-step"
        :class="`stack-step--${step.id}`"
        :style="{ animationDelay: `${i * 0.6}s` }"
      >
        <span class="stack-step__num">{{ i + 1 }}</span>
        <div>
          <p class="stack-step__label">{{ step.label }}</p>
          <p class="stack-step__desc">{{ step.desc }}</p>
        </div>
      </div>
    </div>

    <p class="stack-hint">
      <span class="stack-hint__icon">↕</span>
      Hover to see end-to-end flow
    </p>
  </div>
</template>

<style scoped>
.stack-visual {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: default;
  outline: none;
}

.stack-svg {
  width: 100%;
  max-width: 260px;
  height: auto;
  display: block;
}

/* Platform surfaces */
.stack-plat-top {
  fill: url(#platTop);
  stroke: rgba(108, 99, 255, 0.25);
  stroke-width: 0.8;
  transition: stroke 0.4s, filter 0.4s;
}

.stack-plat-side {
  fill: #0f1320;
  stroke: rgba(108, 99, 255, 0.12);
  stroke-width: 0.5;
}

/* Corner connectors */
.stack-connector {
  stroke: rgba(108, 99, 255, 0.25);
  stroke-width: 1;
  stroke-dasharray: 4 4;
  transition: stroke 0.3s;
}

.stack-particle {
  opacity: 0;
}

/* Layer defaults */
.stack-layer {
  transition: filter 0.4s;
}

.stack-icon--code text {
  transition: fill 0.3s;
}

/* ── Hover / active animations ── */
.stack-visual--active .stack-connector {
  stroke: rgba(108, 99, 255, 0.55);
  animation: connector-march 0.8s linear infinite;
}

.stack-visual--active .stack-particle {
  opacity: 1;
  animation: particle-down 2.4s ease-in-out infinite;
}

.stack-visual--active .stack-particle--1 { animation-delay: 0s; }
.stack-visual--active .stack-particle--2 { animation-delay: 0.15s; }
.stack-visual--active .stack-particle--3 { animation-delay: 0.8s; }
.stack-visual--active .stack-particle--4 { animation-delay: 0.95s; }

.stack-visual--active .stack-layer--fe {
  animation: layer-pulse-fe 2.4s ease-in-out infinite;
}

.stack-visual--active .stack-layer--be {
  animation: layer-pulse-be 2.4s ease-in-out infinite;
}

.stack-visual--active .stack-layer--db {
  animation: layer-pulse-db 2.4s ease-in-out infinite;
}

.stack-visual--active .stack-e2e-path {
  opacity: 0.5;
  animation: e2e-draw 2.4s ease-in-out infinite;
}

.stack-visual--active .stack-icon--code text {
  fill: #c4b5fd;
}

.stack-visual--active .stack-step {
  animation: step-highlight 2.4s ease-in-out infinite;
}

.stack-visual--active .stack-step--fe { animation-delay: 0s; }
.stack-visual--active .stack-step--be { animation-delay: 0.8s; }
.stack-visual--active .stack-step--db { animation-delay: 1.6s; }

.stack-visual--active .stack-hint {
  opacity: 0;
}

/* Step labels */
.stack-steps {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  width: 100%;
}

.stack-step {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 0.65rem;
  border-radius: 8px;
  background: rgba(108, 99, 255, 0.06);
  border: 1px solid transparent;
  transition: background 0.3s, border-color 0.3s;
}

.stack-step__num {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(108, 99, 255, 0.15);
  color: #9b87ff;
  font-size: 0.7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stack-step__label {
  font-size: 0.75rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.2;
}

.stack-step__desc {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.2;
}

.stack-hint {
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.35);
  display: flex;
  align-items: center;
  gap: 0.35rem;
  transition: opacity 0.3s;
  margin-top: -0.25rem;
}

.stack-hint__icon {
  color: #6C63FF;
  animation: hint-bounce 2s ease-in-out infinite;
}

/* Keyframes */
@keyframes connector-march {
  to { stroke-dashoffset: -16; }
}

@keyframes particle-down {
  0% { transform: translateY(0); opacity: 0; }
  8% { opacity: 1; }
  42% { transform: translateY(66px); opacity: 1; }
  52% { transform: translateY(66px); opacity: 0.4; }
  88% { transform: translateY(126px); opacity: 1; }
  100% { transform: translateY(126px); opacity: 0; }
}

@keyframes layer-pulse-fe {
  0%, 100% { filter: none; }
  5%, 30% { filter: drop-shadow(0 0 10px rgba(108, 99, 255, 0.7)); }
  35% { filter: none; }
}

@keyframes layer-pulse-be {
  0%, 30%, 100% { filter: none; }
  38%, 58% { filter: drop-shadow(0 0 10px rgba(45, 212, 191, 0.6)); }
}

@keyframes layer-pulse-db {
  0%, 60%, 100% { filter: none; }
  68%, 88% { filter: drop-shadow(0 0 12px rgba(108, 99, 255, 0.8)); }
}

@keyframes e2e-draw {
  0% { stroke-dashoffset: 160; opacity: 0; }
  10% { opacity: 0.5; }
  90% { stroke-dashoffset: 0; opacity: 0.5; }
  100% { stroke-dashoffset: 0; opacity: 0; }
}

@keyframes step-highlight {
  0%, 100% {
    background: rgba(108, 99, 255, 0.06);
    border-color: transparent;
  }
  5%, 30% {
    background: rgba(108, 99, 255, 0.18);
    border-color: rgba(108, 99, 255, 0.4);
  }
}

@keyframes hint-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(3px); }
}
</style>
