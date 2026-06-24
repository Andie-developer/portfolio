<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const pipelinePhase = ref(0)
const phases = ['UI Request', 'API Logic', 'Data Store', 'Response']

let interval = null

onMounted(() => {
  interval = setInterval(() => {
    pipelinePhase.value = (pipelinePhase.value + 1) % phases.length
  }, 2200)
})

onUnmounted(() => {
  clearInterval(interval)
})

const uid = 'svc'
</script>

<template>
  <div class="stack-scene" role="img" aria-label="Animated full stack pipeline: Front-End, Back-End, Database">
    <!-- Ambient glow -->
    <div class="stack-scene__ambient" aria-hidden="true" />

    <svg
      class="stack-scene__svg"
      viewBox="0 0 320 380"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient :id="`${uid}-plat`" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#252d4a" />
          <stop offset="100%" stop-color="#141829" />
        </linearGradient>
        <linearGradient :id="`${uid}-side`" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1a2038" />
          <stop offset="100%" stop-color="#0c0f1a" />
        </linearGradient>
        <linearGradient :id="`${uid}-db`" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#8b83ff">
            <animate attributeName="stop-color" values="#8b83ff;#2dd4bf;#8b83ff" dur="4s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stop-color="#6C63FF">
            <animate attributeName="stop-color" values="#6C63FF;#14b8a6;#6C63FF" dur="4s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stop-color="#4a3f9f">
            <animate attributeName="stop-color" values="#4a3f9f;#0d9488;#4a3f9f" dur="4s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient :id="`${uid}-beam`" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#6C63FF" stop-opacity="0" />
          <stop offset="50%" stop-color="#2dd4bf" stop-opacity="1" />
          <stop offset="100%" stop-color="#6C63FF" stop-opacity="0" />
        </linearGradient>
        <filter :id="`${uid}-glow`" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter :id="`${uid}-soft`" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="b" />
          <feMerge><feMergeNode in="b" /></feMerge>
        </filter>

        <!-- Motion paths for data packets -->
        <path :id="`${uid}-p1`" d="M 78 88 L 78 168" />
        <path :id="`${uid}-p2`" d="M 242 88 L 242 168" />
        <path :id="`${uid}-p3`" d="M 78 188 L 78 268" />
        <path :id="`${uid}-p4`" d="M 242 188 L 242 268" />
        <path :id="`${uid}-p5`" d="M 160 70 L 160 290" />
        <path :id="`${uid}-p6`" d="M 160 290 L 160 70" />
      </defs>

      <!-- Background grid -->
      <g class="stack-grid" opacity="0.15">
        <line v-for="i in 9" :key="`gh-${i}`" :x1="i * 36" y1="0" :x2="i * 36" y2="380" stroke="#6C63FF" stroke-width="0.5" />
        <line v-for="i in 11" :key="`gv-${i}`" x1="0" :y1="i * 36" x2="320" :y2="i * 36" stroke="#6C63FF" stroke-width="0.5" />
      </g>

      <!-- Orbital ring -->
      <ellipse
        cx="160" cy="190" rx="130" ry="48"
        fill="none" stroke="#6C63FF" stroke-width="0.8" opacity="0.2"
        stroke-dasharray="8 12"
      >
        <animateTransform attributeName="transform" type="rotate" from="0 160 190" to="360 160 190" dur="24s" repeatCount="indefinite" />
      </ellipse>

      <!-- Soft center glow -->
      <ellipse cx="160" cy="190" rx="70" ry="90" :fill="`url(#${uid}-beam)`" opacity="0.12" :filter="`url(#${uid}-soft)`">
        <animate attributeName="opacity" values="0.08;0.18;0.08" dur="3s" repeatCount="indefinite" />
        <animate attributeName="ry" values="85;95;85" dur="3s" repeatCount="indefinite" />
      </ellipse>

      <!-- Floating stack group -->
      <g class="stack-float">
        <!-- Corner pillars -->
        <g class="stack-pillars">
          <line x1="78" y1="88" x2="78" y2="168" class="stack-pillar" />
          <line x1="242" y1="88" x2="242" y2="168" class="stack-pillar" />
          <line x1="78" y1="188" x2="78" y2="268" class="stack-pillar" />
          <line x1="242" y1="188" x2="242" y2="268" class="stack-pillar" />
        </g>

        <!-- Data packets — always moving -->
        <g class="stack-packets">
          <circle r="4" fill="#9b87ff" filter="url(#svc-glow)">
            <animateMotion dur="2.2s" repeatCount="indefinite" :href="`#${uid}-p1`" />
            <animate attributeName="opacity" values="0;1;1;0" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle r="3.5" fill="#2dd4bf" filter="url(#svc-glow)">
            <animateMotion dur="2.2s" begin="0.4s" repeatCount="indefinite" :href="`#${uid}-p2`" />
            <animate attributeName="opacity" values="0;1;1;0" dur="2.2s" begin="0.4s" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill="#6C63FF" filter="url(#svc-glow)">
            <animateMotion dur="2.4s" begin="0.8s" repeatCount="indefinite" :href="`#${uid}-p3`" />
            <animate attributeName="opacity" values="0;1;1;0" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
          </circle>
          <circle r="3.5" fill="#2dd4bf" filter="url(#svc-glow)">
            <animateMotion dur="2.4s" begin="1.2s" repeatCount="indefinite" :href="`#${uid}-p4`" />
            <animate attributeName="opacity" values="0;1;1;0" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
          </circle>
          <!-- Center spine down -->
          <circle r="5" fill="#c4b5fd" filter="url(#svc-glow)">
            <animateMotion dur="3s" repeatCount="indefinite" :href="`#${uid}-p5`" />
            <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />
          </circle>
          <!-- Response traveling back up -->
          <circle r="4" fill="#2dd4bf" opacity="0.9" filter="url(#svc-glow)">
            <animateMotion dur="3.5s" begin="1.5s" repeatCount="indefinite" :href="`#${uid}-p6`" />
          </circle>
          <circle r="2.5" fill="#fff" opacity="0.7">
            <animateMotion dur="1.8s" begin="0.6s" repeatCount="indefinite" :href="`#${uid}-p1`" />
          </circle>
          <circle r="2.5" fill="#fff" opacity="0.7">
            <animateMotion dur="1.8s" begin="1.1s" repeatCount="indefinite" :href="`#${uid}-p3`" />
          </circle>
        </g>

        <!-- Scan line -->
        <line x1="60" y1="80" x2="260" y2="80" stroke="#2dd4bf" stroke-width="1" opacity="0">
          <animate attributeName="y1" values="80;280;80" dur="4s" repeatCount="indefinite" />
          <animate attributeName="y2" values="80;280;80" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.35;0" dur="4s" repeatCount="indefinite" />
        </line>

        <!-- ═══ LAYER 1: Front-End ═══ -->
        <g class="stack-layer stack-layer--fe">
          <path :fill="`url(#${uid}-side)`" d="M78,88 L160,128 L160,142 L78,102 Z" stroke="rgba(108,99,255,0.2)" stroke-width="0.6" />
          <path :fill="`url(#${uid}-side)`" d="M242,88 L160,128 L160,142 L242,102 Z" stroke="rgba(108,99,255,0.2)" stroke-width="0.6" />
          <path :fill="`url(#${uid}-plat)`" d="M78,88 L160,48 L242,88 L160,128 Z" stroke="#6C63FF" stroke-width="1" class="stack-plat-glow" />
          <!-- Code brackets animated -->
          <g :filter="`url(#${uid}-glow)`">
            <text x="160" y="92" text-anchor="middle" fill="#c4b5fd" font-size="28" font-weight="bold" font-family="monospace" class="stack-code">
              &lt;/&gt;
            </text>
          </g>
          <!-- Mini UI bars -->
          <rect x="130" y="100" width="24" height="3" rx="1.5" fill="#6C63FF" opacity="0.6">
            <animate attributeName="width" values="16;28;16" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="138" y="108" width="16" height="2" rx="1" fill="rgba(255,255,255,0.2)">
            <animate attributeName="opacity" values="0.1;0.4;0.1" dur="1.5s" repeatCount="indefinite" />
          </rect>
        </g>

        <!-- ═══ LAYER 2: Back-End ═══ -->
        <g class="stack-layer stack-layer--be">
          <path :fill="`url(#${uid}-side)`" d="M78,188 L160,228 L160,242 L78,202 Z" stroke="rgba(45,212,191,0.15)" stroke-width="0.6" />
          <path :fill="`url(#${uid}-side)`" d="M242,188 L160,228 L160,242 L242,202 Z" stroke="rgba(45,212,191,0.15)" stroke-width="0.6" />
          <path :fill="`url(#${uid}-plat)`" d="M78,188 L160,148 L242,188 L160,228 Z" stroke="#2dd4bf" stroke-width="0.8" class="stack-plat-glow stack-plat-glow--teal" />
          <!-- Server rack -->
          <g class="stack-server">
            <rect x="118" y="168" width="36" height="14" rx="3" fill="#1a2038" stroke="#6C63FF" stroke-width="0.8" />
            <rect x="118" y="186" width="36" height="14" rx="3" fill="#1a2038" stroke="#2dd4bf" stroke-width="0.8" />
            <rect x="148" y="177" width="28" height="12" rx="2" fill="#1a2038" stroke="#6C63FF" stroke-width="0.6" opacity="0.85" />
            <!-- Blinking LEDs -->
            <circle cx="124" cy="175" r="2" fill="#2dd4bf">
              <animate attributeName="opacity" values="1;0.2;1" dur="0.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="132" cy="175" r="2" fill="#6C63FF">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="0.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="124" cy="193" r="2" fill="#fbbf24">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite" />
            </circle>
            <!-- Activity bars -->
            <rect x="152" y="181" width="4" height="6" fill="#2dd4bf" opacity="0.7">
              <animate attributeName="height" values="3;8;3" dur="0.6s" repeatCount="indefinite" />
              <animate attributeName="y" values="184;179;184" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <rect x="159" y="181" width="4" height="6" fill="#6C63FF" opacity="0.7">
              <animate attributeName="height" values="5;9;5" dur="0.5s" begin="0.1s" repeatCount="indefinite" />
              <animate attributeName="y" values="182;178;182" dur="0.5s" begin="0.1s" repeatCount="indefinite" />
            </rect>
            <rect x="166" y="181" width="4" height="6" fill="#2dd4bf" opacity="0.7">
              <animate attributeName="height" values="2;7;2" dur="0.7s" begin="0.2s" repeatCount="indefinite" />
              <animate attributeName="y" values="185;180;185" dur="0.7s" begin="0.2s" repeatCount="indefinite" />
            </rect>
          </g>
        </g>

        <!-- ═══ LAYER 3: Database ═══ -->
        <g class="stack-layer stack-layer--db">
          <path :fill="`url(#${uid}-side)`" d="M78,268 L160,308 L160,322 L78,282 Z" stroke="rgba(108,99,255,0.15)" stroke-width="0.6" />
          <path :fill="`url(#${uid}-side)`" d="M242,268 L160,308 L160,322 L242,282 Z" stroke="rgba(108,99,255,0.15)" stroke-width="0.6" />
          <path :fill="`url(#${uid}-plat)`" d="M78,268 L160,228 L242,268 L160,308 Z" stroke="#6C63FF" stroke-width="0.8" class="stack-plat-glow" />
          <!-- Database cylinder -->
          <g :filter="`url(#${uid}-glow)`" class="stack-db-cylinder">
            <ellipse cx="160" cy="258" rx="32" ry="10" :fill="`url(#${uid}-db)`" />
            <path :d="`M128,258 L128,288 Q160,302 192,288 L192,258 Q160,272 128,258`" :fill="`url(#${uid}-db)`" />
            <ellipse cx="160" cy="288" rx="32" ry="10" fill="#3d3480" opacity="0.9" />
            <ellipse cx="160" cy="258" rx="32" ry="10" fill="none" stroke="#c4b5fd" stroke-width="1" opacity="0.6">
              <animate attributeName="stroke-opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" />
            </ellipse>
            <line x1="128" y1="268" x2="192" y2="268" stroke="rgba(255,255,255,0.12)" stroke-width="0.8" />
            <line x1="128" y1="278" x2="192" y2="278" stroke="rgba(255,255,255,0.08)" stroke-width="0.8" />
            <!-- Data ring -->
            <ellipse cx="160" cy="273" rx="38" ry="14" fill="none" stroke="#2dd4bf" stroke-width="0.6" opacity="0.4" stroke-dasharray="4 6">
              <animateTransform attributeName="transform" type="rotate" from="0 160 273" to="360 160 273" dur="8s" repeatCount="indefinite" />
            </ellipse>
          </g>
        </g>

        <!-- Center spine -->
        <line x1="160" y1="70" x2="160" y2="300" stroke="url(#svc-beam)" stroke-width="2" stroke-dasharray="6 8" opacity="0.5">
          <animate attributeName="stroke-dashoffset" values="0;-28" dur="1s" repeatCount="indefinite" />
        </line>
      </g>

      <!-- Floating ambient particles -->
      <g class="stack-ambient-dots">
        <circle v-for="(d, i) in 12" :key="i" :cx="30 + (i * 23) % 260" :cy="40 + (i * 31) % 300" r="1.5" fill="#6C63FF" opacity="0.3">
          <animate attributeName="cy" :values="`${40 + (i * 31) % 300};${30 + (i * 31) % 300};${40 + (i * 31) % 300}`" :dur="`${3 + i * 0.4}s`" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.1;0.5;0.1" :dur="`${2 + i * 0.3}s`" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>

    <!-- Live pipeline status -->
    <div class="stack-pipeline">
      <span class="stack-pipeline__dot" />
      <span class="stack-pipeline__label">Live pipeline</span>
      <span class="stack-pipeline__phase">{{ phases[pipelinePhase] }}</span>
    </div>

    <div class="stack-flow-labels">
      <span class="stack-flow-label stack-flow-label--1">Front-End</span>
      <span class="stack-flow-label stack-flow-label--2">Back-End</span>
      <span class="stack-flow-label stack-flow-label--3">Database</span>
    </div>
  </div>
</template>

<style scoped>
.stack-scene {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
}

.stack-scene__ambient {
  position: absolute;
  inset: 10% 5%;
  background: radial-gradient(ellipse at 50% 45%, rgba(108, 99, 255, 0.2) 0%, transparent 65%);
  animation: ambient-pulse 4s ease-in-out infinite;
  pointer-events: none;
}

.stack-scene__svg {
  width: 100%;
  max-width: 300px;
  height: auto;
  display: block;
  position: relative;
  z-index: 1;
}

.stack-float {
  animation: stack-float 5s ease-in-out infinite;
  transform-origin: 160px 190px;
}

.stack-pillar {
  stroke: rgba(108, 99, 255, 0.35);
  stroke-width: 1.2;
  stroke-dasharray: 6 6;
  animation: pillar-march 1.2s linear infinite;
}

.stack-plat-glow {
  animation: plat-pulse-purple 3s ease-in-out infinite;
}

.stack-plat-glow--teal {
  animation: plat-pulse-teal 3s ease-in-out infinite;
  animation-delay: 1s;
}

.stack-code {
  animation: code-glow 2s ease-in-out infinite;
}

.stack-layer--fe {
  animation: layer-glow-fe 4s ease-in-out infinite;
}

.stack-layer--be {
  animation: layer-glow-be 4s ease-in-out infinite;
  animation-delay: 1.3s;
}

.stack-layer--db {
  animation: layer-glow-db 4s ease-in-out infinite;
  animation-delay: 2.6s;
}

.stack-db-cylinder {
  animation: db-breathe 3s ease-in-out infinite;
  transform-origin: 160px 273px;
}

/* Pipeline status bar */
.stack-pipeline {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.85rem;
  background: rgba(108, 99, 255, 0.12);
  border: 1px solid rgba(108, 99, 255, 0.25);
  border-radius: 999px;
  font-size: 0.68rem;
  z-index: 2;
}

.stack-pipeline__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #2dd4bf;
  box-shadow: 0 0 8px #2dd4bf;
  animation: live-blink 1s ease-in-out infinite;
}

.stack-pipeline__label {
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.stack-pipeline__phase {
  color: #c4b5fd;
  font-weight: 700;
  font-family: 'Courier New', monospace;
  min-width: 90px;
  animation: phase-fade 0.4s ease;
}

.stack-flow-labels {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 280px;
  padding: 0 0.25rem;
}

.stack-flow-label {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
  animation: label-cycle 4s ease-in-out infinite;
}

.stack-flow-label--1 { animation-delay: 0s; }
.stack-flow-label--2 { animation-delay: 1.3s; }
.stack-flow-label--3 { animation-delay: 2.6s; }

@keyframes stack-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@keyframes pillar-march {
  to { stroke-dashoffset: -24; }
}

@keyframes plat-pulse-purple {
  0%, 100% { stroke-opacity: 0.4; }
  50% { stroke-opacity: 1; }
}

@keyframes plat-pulse-teal {
  0%, 100% { stroke-opacity: 0.4; }
  50% { stroke-opacity: 1; }
}

@keyframes code-glow {
  0%, 100% { opacity: 0.85; }
  50% { opacity: 1; }
}

@keyframes layer-glow-fe {
  0%, 100% { filter: drop-shadow(0 0 4px rgba(108, 99, 255, 0.2)); }
  25% { filter: drop-shadow(0 0 16px rgba(108, 99, 255, 0.7)); }
  50%, 100% { filter: drop-shadow(0 0 4px rgba(108, 99, 255, 0.2)); }
}

@keyframes layer-glow-be {
  0%, 100% { filter: drop-shadow(0 0 4px rgba(45, 212, 191, 0.2)); }
  25% { filter: drop-shadow(0 0 16px rgba(45, 212, 191, 0.6)); }
}

@keyframes layer-glow-db {
  0%, 100% { filter: drop-shadow(0 0 4px rgba(108, 99, 255, 0.2)); }
  25% { filter: drop-shadow(0 0 18px rgba(139, 131, 255, 0.8)); }
}

@keyframes db-breathe {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(1.04); }
}

@keyframes ambient-pulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}

@keyframes live-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

@keyframes label-cycle {
  0%, 100% { color: rgba(255, 255, 255, 0.35); }
  20%, 35% { color: #c4b5fd; }
}

@keyframes phase-fade {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .stack-float,
  .stack-pillar,
  .stack-plat-glow,
  .stack-layer--fe,
  .stack-layer--be,
  .stack-layer--db,
  .stack-db-cylinder,
  .stack-scene__ambient,
  .stack-pipeline__dot,
  .stack-flow-label {
    animation: none !important;
  }
}
</style>
