<script setup>
import { Code2 } from 'lucide-vue-next'
import SectionDecor from '../ui/SectionDecor.vue'
</script>

<template>
  <section id="philosophy" class="section section--dark philosophy">
    <SectionDecor variant="dark" />

    <div class="section__inner section__split fade-up">
      <div class="section__col--text">
        <h2 class="philosophy__headline">
          Clean Code. Smart Solutions. <span class="accent">Real Impact.</span>
        </h2>
        <p class="section__text">
          I write clean, maintainable code that solves real business problems.
        </p>
      </div>

      <div class="section__col--visual">
        <div class="philosophy__visual">
          <div class="code-window">
            <div class="code-window__bar">
              <span /><span /><span />
            </div>
            <div class="code-window__body">
              <div class="code-line"><span class="kw">const</span> solution = <span class="fn">build</span>(idea);</div>
              <div class="code-line"><span class="kw">return</span> solution.<span class="fn">deploy</span>();</div>
              <div class="code-line code-line--comment">// Real impact delivered</div>
            </div>
          </div>
          <div class="philosophy__badge">
            <Code2 :size="42" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.philosophy__headline {
  font-size: clamp(1.4rem, 3vw, 2.1rem);
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 1rem;
  text-align: left;
}

.philosophy__visual {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.code-window {
  background: var(--navy-light);
  border: 1px solid rgba(108, 99, 255, 0.2);
  border-radius: 12px;
  overflow: hidden;
  width: 280px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
}

.code-window__bar {
  display: flex;
  gap: 6px;
  padding: 0.55rem 0.8rem;
  background: rgba(0, 0, 0, 0.35);
}

.code-window__bar span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.code-window__bar span:nth-child(1) { background: #ff5f57; }
.code-window__bar span:nth-child(2) { background: #febc2e; }
.code-window__bar span:nth-child(3) { background: #28c840; }

.code-window__body {
  padding: 1rem 1.2rem;
  font-family: 'Courier New', monospace;
  font-size: 0.82rem;
  line-height: 1.9;
}

.code-line .kw { color: var(--purple-light); }
.code-line .fn { color: var(--teal); }
.code-line--comment { color: rgba(255, 255, 255, 0.3); font-style: italic; }

.philosophy__badge {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: rgba(108, 99, 255, 0.12);
  border: 2px solid var(--purple);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--purple);
  flex-shrink: 0;
  box-shadow: 0 0 30px var(--purple-glow);
}

@media (max-width: 900px) {
  .philosophy__headline {
    text-align: center;
  }

  .philosophy__visual {
    flex-direction: column;
  }
}
</style>
