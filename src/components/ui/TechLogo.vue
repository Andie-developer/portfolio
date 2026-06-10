<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  size: { type: Number, default: 56 },
})

const ICON_FILES = {
  HTML: '/icons/html5.svg',
  CSS: '/icons/css3.svg',
  JavaScript: '/icons/javascript.svg',
  'Vue.js': '/icons/vuejs.svg',
  'Node.js': '/icons/nodejs.svg',
  'C#': '/icons/csharp.svg',
  'ASP.NET': '/icons/dotnet.svg',
  Firebase: '/icons/firebase.svg',
}

const src = computed(() => ICON_FILES[props.name] || '')
const isWide = computed(() => props.name === 'Node.js' || props.name === 'ASP.NET')
</script>

<template>
  <img
    v-if="src"
    :src="src"
    :alt="`${name} logo`"
    class="tech-logo"
    :class="{ 'tech-logo--wide': isWide }"
    :style="{ height: size + 'px' }"
    draggable="false"
    loading="lazy"
  />
</template>

<style scoped>
.tech-logo {
  display: block;
  width: auto;
  object-fit: contain;
}

.tech-logo--wide {
  max-width: 100%;
}
</style>
