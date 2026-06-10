<template>
  <svg
    class="about-tech-bg"
    viewBox="0 0 800 200"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <defs>
      <pattern id="codeDots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#6C63FF" opacity="0.15" />
      </pattern>
    </defs>
    <rect width="800" height="200" fill="url(#codeDots)" opacity="0.4" />
    <text x="60" y="110" fill="#6C63FF" font-size="72" font-family="monospace" opacity="0.04">&lt;/&gt;</text>
    <text x="620" y="150" fill="#6C63FF" font-size="56" font-family="monospace" opacity="0.035">{ }</text>
    <path
      d="M0,100 Q200,60 400,100 T800,100"
      fill="none"
      stroke="#6C63FF"
      stroke-width="1"
      opacity="0.06"
    />
  </svg>
</template>

<style scoped>
.about-tech-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
</style>
