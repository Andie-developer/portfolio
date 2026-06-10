<script setup>
import { computed } from 'vue'

const props = defineProps({
  mouseX: { type: Number, default: 0.5 },
  mouseY: { type: Number, default: 0.5 },
  active: { type: Boolean, default: false },
})

const nodes = [
  { x: 8, y: 18, label: '{ }' },
  { x: 92, y: 22, label: '</>' },
  { x: 15, y: 78, label: '=>' },
  { x: 85, y: 72, label: 'git' },
  { x: 50, y: 12, label: 'API' },
  { x: 6, y: 48, label: 'Vue' },
  { x: 94, y: 50, label: 'SEO' },
  { x: 72, y: 88, label: 'npm' },
  { x: 28, y: 90, label: 'DB' },
]

const cursorCx = computed(() => props.mouseX * 100)
const cursorCy = computed(() => props.mouseY * 100)

function nodePull(n) {
  const dx = cursorCx.value - n.x
  const dy = cursorCy.value - n.y
  const dist = Math.sqrt(dx * dx + dy * dy) || 1
  const pull = Math.min(12, 80 / dist)
  return {
    x: n.x + (dx / dist) * pull,
    y: n.y + (dy / dist) * pull,
  }
}
</script>

<template>
  <svg
    class="dev-life-svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="cursorGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#6C63FF" stop-opacity="0.35" />
        <stop offset="100%" stop-color="#6C63FF" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#6C63FF" stop-opacity="0.5" />
        <stop offset="100%" stop-color="#2DD4BF" stop-opacity="0.3" />
      </linearGradient>
    </defs>

    <!-- Grid -->
    <g class="dev-life-svg__grid" opacity="0.12">
      <line
        v-for="i in 11"
        :key="`h-${i}`"
        :x1="0"
        :y1="i * 10"
        :x2="100"
        :y2="i * 10"
        stroke="#6C63FF"
        stroke-width="0.15"
      />
      <line
        v-for="i in 11"
        :key="`v-${i}`"
        :x1="i * 10"
        :y1="0"
        :x2="i * 10"
        :y2="100"
        stroke="#6C63FF"
        stroke-width="0.15"
      />
    </g>

    <!-- Circuit paths -->
    <path
      class="dev-life-svg__path"
      d="M5,30 Q30,10 50,25 T95,35"
      fill="none"
      stroke="url(#lineGrad)"
      stroke-width="0.4"
      opacity="0.4"
    />
    <path
      class="dev-life-svg__path dev-life-svg__path--2"
      d="M10,70 Q40,90 60,65 T90,55"
      fill="none"
      stroke="#2DD4BF"
      stroke-width="0.35"
      opacity="0.25"
    />

    <!-- Cursor glow -->
    <circle
      :cx="cursorCx"
      :cy="cursorCy"
      r="18"
      fill="url(#cursorGlow)"
      class="dev-life-svg__glow"
    />

    <!-- Lines from cursor to nodes -->
    <line
      v-for="(node, i) in nodes"
      :key="`line-${i}`"
      :x1="cursorCx"
      :y1="cursorCy"
      :x2="nodePull(node).x"
      :y2="nodePull(node).y"
      stroke="#6C63FF"
      stroke-width="0.2"
      :opacity="active ? 0.35 : 0.12"
    />

    <!-- Nodes -->
    <g v-for="(node, i) in nodes" :key="`node-${i}`">
      <circle
        :cx="nodePull(node).x"
        :cy="nodePull(node).y"
        r="2.2"
        fill="#6C63FF"
        :opacity="active ? 0.8 : 0.4"
      />
      <text
        :x="nodePull(node).x"
        :y="nodePull(node).y - 3.5"
        text-anchor="middle"
        fill="#9b87ff"
        font-size="2.8"
        font-family="monospace"
        :opacity="active ? 0.9 : 0.45"
      >
        {{ node.label }}
      </text>
    </g>

    <!-- Laptop silhouette (developer life) -->
    <g class="dev-life-svg__laptop" transform="translate(78, 8) scale(0.9)" opacity="0.2">
      <rect x="0" y="0" width="18" height="12" rx="1.5" fill="none" stroke="#6C63FF" stroke-width="0.5" />
      <rect x="1.5" y="1.5" width="15" height="8" rx="0.5" fill="#6C63FF" opacity="0.3" />
      <path d="M-2,12 L20,12 L18,14 L0,14 Z" fill="#6C63FF" opacity="0.4" />
    </g>

    <!-- Coffee mug -->
    <g transform="translate(4, 62)" opacity="0.18">
      <rect x="0" y="2" width="8" height="9" rx="1" fill="none" stroke="#2DD4BF" stroke-width="0.5" />
      <path d="M8,4 Q11,6 8,10" fill="none" stroke="#2DD4BF" stroke-width="0.5" />
      <path d="M2,0 Q4,-2 6,0" fill="none" stroke="#2DD4BF" stroke-width="0.4" class="dev-life-svg__steam" />
    </g>

    <!-- Scan ring at cursor -->
    <circle
      v-if="active"
      :cx="cursorCx"
      :cy="cursorCy"
      r="6"
      fill="none"
      stroke="#2DD4BF"
      stroke-width="0.3"
      class="dev-life-svg__scan"
    />
  </svg>
</template>

<style scoped>
.dev-life-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.dev-life-svg__path {
  animation: path-drift 12s ease-in-out infinite;
}

.dev-life-svg__path--2 {
  animation-delay: -4s;
  animation-direction: reverse;
}

.dev-life-svg__glow {
  transition: cx 0.15s ease-out, cy 0.15s ease-out;
}

.dev-life-svg__scan {
  animation: scan-pulse 2s ease-in-out infinite;
}

.dev-life-svg__steam {
  animation: steam-rise 3s ease-in-out infinite;
}

@keyframes path-drift {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 0.5; }
}

@keyframes scan-pulse {
  0%, 100% { r: 5; opacity: 0.6; }
  50% { r: 9; opacity: 0.2; }
}

@keyframes steam-rise {
  0%, 100% { transform: translateY(0); opacity: 0.3; }
  50% { transform: translateY(-2px); opacity: 0.7; }
}
</style>
