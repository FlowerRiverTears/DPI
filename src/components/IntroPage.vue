<template>
  <div class="page intro-page">
    <!-- 背景气泡 -->
    <div class="intro-bg">
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
    </div>

    <div class="intro-content">
      <!-- 徽章 -->
      <div class="intro-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        趣味心理测试
      </div>

      <!-- 吉祥物 -->
      <div class="intro-mascot">
        <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="65" fill="#FFE0C0"/>
          <circle cx="80" cy="80" r="65" fill="none" stroke="#E8C8A8" stroke-width="2"/>
          <ellipse cx="50" cy="92" rx="12" ry="8" fill="#FFB3B3" opacity="0.5"/>
          <ellipse cx="110" cy="92" rx="12" ry="8" fill="#FFB3B3" opacity="0.5"/>
          <circle cx="58" cy="72" r="10" fill="#3D2B1F"/>
          <circle cx="102" cy="72" r="10" fill="#3D2B1F"/>
          <circle cx="61" cy="69" r="4" fill="white"/>
          <circle cx="105" cy="69" r="4" fill="white"/>
          <circle cx="58" cy="72" r="16" fill="none" stroke="#7C6EFA" stroke-width="2.5"/>
          <circle cx="102" cy="72" r="16" fill="none" stroke="#7C6EFA" stroke-width="2.5"/>
          <line x1="74" y1="72" x2="86" y2="72" stroke="#7C6EFA" stroke-width="2.5"/>
          <path d="M65 100 Q80 115 95 100" fill="none" stroke="#E07070" stroke-width="3" stroke-linecap="round"/>
          <rect x="110" y="115" width="22" height="36" rx="4" fill="#7C6EFA" transform="rotate(-15, 121, 133)"/>
          <rect x="113" y="119" width="16" height="26" rx="2" fill="#A69BFC" transform="rotate(-15, 121, 132)"/>
          <path d="M40 50 Q50 20 80 18 Q110 20 120 50" fill="#5D4037"/>
          <ellipse cx="80" cy="22" rx="25" ry="12" fill="#5D4037"/>
          <text x="20" y="40" font-size="20" opacity="0.6">✦</text>
          <text x="130" y="35" font-size="16" opacity="0.5">✦</text>
          <text x="145" y="90" font-size="14" opacity="0.4">✦</text>
        </svg>
      </div>

      <h1 class="intro-title">你的数字人格是什么？</h1>
      <p class="intro-subtitle">
        测一测你在数字世界里的真实模样！<br>
        3分钟快测 · 看看你是哪种「数字人」✨
      </p>

      <!-- 模式选择卡片 -->
      <div class="mode-cards">
        <div class="mode-card" @click="$emit('start', 'quick')">
          <div class="mode-icon">⚡</div>
          <div class="mode-info">
            <h3>快测模式</h3>
            <p>6道题 · 约3分钟 · 快速定位</p>
          </div>
          <span class="mode-tag">快速</span>
        </div>

        <div class="mode-card" @click="$emit('start', 'standard')">
          <div class="mode-icon">🎯</div>
          <div class="mode-info">
            <h3>标准模式</h3>
            <p>16道题 · 约5-8分钟 · 精准画像</p>
          </div>
          <span class="mode-tag">推荐</span>
        </div>

        <div class="mode-card" @click="$emit('start', 'deep')">
          <div class="mode-icon">🔮</div>
          <div class="mode-info">
            <h3>深度模式</h3>
            <p>全部32道题 · 10-15分钟 · 全景解析</p>
          </div>
          <span class="mode-tag">深度</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['start'])
</script>

<style scoped>
.intro-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: var(--bg);
}

.intro-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.bubble {
  position: absolute;
  border-radius: 50%;
  animation: float 4s ease-in-out infinite;
}

.bubble:nth-child(1) { width: 120px; height: 120px; background: rgba(124,110,250,0.12); top: 10%; left: 5%; animation-delay: 0s; }
.bubble:nth-child(2) { width: 80px; height: 80px; background: rgba(255,214,232,0.5); top: 60%; left: 80%; animation-delay: 1s; }
.bubble:nth-child(3) { width: 60px; height: 60px; background: rgba(184,243,255,0.5); top: 30%; right: 10%; animation-delay: 2s; }
.bubble:nth-child(4) { width: 100px; height: 100px; background: rgba(255,243,176,0.4); bottom: 20%; left: 15%; animation-delay: 0.5s; }
.bubble:nth-child(5) { width: 50px; height: 50px; background: rgba(124,110,250,0.08); top: 5%; right: 30%; animation-delay: 1.5s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

.intro-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 480px;
  width: 100%;
  padding: 24px 16px;
  margin: 0 auto;
}

.intro-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 24px;
  animation: scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.6); }
  to { opacity: 1; transform: scale(1); }
}

.intro-mascot {
  width: 160px;
  height: 160px;
  margin: 0 auto 40px;
  animation: floatSlow 3s ease-in-out infinite;
}

@keyframes floatSlow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(3deg); }
}

.intro-mascot svg {
  width: 100%;
  height: 100%;
}

.intro-title {
  font-family: 'ZCOOL KuaiLe', cursive;
  font-size: clamp(42px, 10vw, 64px);
  line-height: 1.2;
  background: linear-gradient(135deg, var(--primary), #B57BEE, var(--coral));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
  animation: fadeInUp 0.8s ease 0.3s both;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.intro-subtitle {
  font-size: 16px;
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 40px;
  animation: fadeInUp 0.8s ease 0.5s both;
}

.mode-cards {
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: fadeInUp 0.8s ease 0.7s both;
}

.mode-card {
  background: var(--card);
  border-radius: var(--radius);
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: var(--shadow-sm);
  border: 2px solid transparent;
  text-align: left;
}

.mode-card:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: var(--shadow);
  border-color: var(--primary-light);
}

.mode-card:active {
  transform: scale(0.98);
}

.mode-icon {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
}

.mode-card:nth-child(1) .mode-icon { background: linear-gradient(135deg, #FFE0E0, #FFAAAA); }
.mode-card:nth-child(2) .mode-icon { background: linear-gradient(135deg, #E0E7FF, #A5B4FC); }
.mode-card:nth-child(3) .mode-icon { background: linear-gradient(135deg, #D1FAE5, #6EE7B7); }

.mode-info h3 {
  font-family: 'ZCOOL KuaiLe', cursive;
  font-size: 18px;
  margin-bottom: 4px;
  color: var(--text);
}

.mode-info p {
  font-size: 13px;
  color: var(--text-light);
}

.mode-tag {
  margin-left: auto;
  background: var(--bg);
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 12px;
  color: var(--primary);
  font-weight: 500;
  flex-shrink: 0;
}
</style>
