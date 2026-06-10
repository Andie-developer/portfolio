<script setup>
defineProps({
  variant: { type: String, default: 'dark' },
})
</script>

<template>
  <div class="section-decor" :class="`section-decor--${variant}`" aria-hidden="true">
    <template v-if="variant === 'dark'">
      <svg class="section-decor__line section-decor__line--1" viewBox="0 0 800 400" preserveAspectRatio="none">
        <path d="M0,200 Q200,50 400,200 T800,200" fill="none" stroke="url(#purpleGrad)" stroke-width="2" opacity="0.35"/>
        <defs>
          <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#6C63FF" stop-opacity="0"/>
            <stop offset="50%" stop-color="#6C63FF"/>
            <stop offset="100%" stop-color="#6C63FF" stop-opacity="0"/>
          </linearGradient>
        </defs>
      </svg>
      <svg class="section-decor__line section-decor__line--2" viewBox="0 0 800 400" preserveAspectRatio="none">
        <path d="M0,250 Q300,100 600,280 T800,150" fill="none" stroke="#6C63FF" stroke-width="1.5" opacity="0.2"/>
      </svg>
      <svg class="section-decor__line section-decor__line--3" viewBox="0 0 800 400" preserveAspectRatio="none">
        <path d="M0,100 Q400,300 800,80" fill="none" stroke="#9b87ff" stroke-width="1" opacity="0.15"/>
      </svg>
    </template>

    <template v-else>
      <svg class="section-decor__arc section-decor__arc--tl" viewBox="0 0 200 200">
        <path d="M0,200 Q0,0 200,0" fill="none" stroke="#6C63FF" stroke-width="2" opacity="0.12"/>
      </svg>
      <svg class="section-decor__arc section-decor__arc--br" viewBox="0 0 200 200">
        <path d="M200,0 Q200,200 0,200" fill="none" stroke="#6C63FF" stroke-width="2" opacity="0.1"/>
      </svg>
      <svg class="section-decor__arc section-decor__arc--tr" viewBox="0 0 150 150">
        <path d="M0,0 Q150,0 150,150" fill="none" stroke="#6C63FF" stroke-width="1.5" opacity="0.08"/>
      </svg>
    </template>
  </div>
</template>

<style scoped>
.section-decor {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.section-decor__line {
  position: absolute;
  width: 120%;
  height: 60%;
}

.section-decor__line--1 {
  top: 20%;
  left: -10%;
  animation: drift-line 18s ease-in-out infinite;
}

.section-decor__line--2 {
  top: 50%;
  left: -10%;
  animation: drift-line 22s ease-in-out infinite reverse;
}

.section-decor__line--3 {
  top: 10%;
  left: -10%;
  animation: drift-line 26s ease-in-out infinite;
}

.section-decor__arc {
  position: absolute;
  width: 200px;
  height: 200px;
}

.section-decor__arc--tl { top: -40px; left: -40px; }
.section-decor__arc--br { bottom: -40px; right: -40px; }
.section-decor__arc--tr { top: -20px; right: 10%; width: 150px; height: 150px; }

@keyframes drift-line {
  0%, 100% { transform: translateX(0) translateY(0); }
  50% { transform: translateX(20px) translateY(-10px); }
}
</style>
