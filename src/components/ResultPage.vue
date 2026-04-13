<template>
  <div class="result-page">
    <!-- 头部 -->
    <div class="result-header">
      <div class="result-award">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        人格觉醒完成
      </div>
      <div class="result-label-main">{{ result.label }}</div>
      <div class="result-label-sub">{{ result.subLabel }}</div>
    </div>

    <!-- 人格头像卡片 -->
    <div class="result-card" style="animation: fadeInUp 0.6s ease 0.1s both">
      <div class="avatar-section">
        <div class="avatar-container" v-html="result.avatarSvg"></div>
        <div class="avatar-badges">
          <span
            v-for="tag in result.tags"
            :key="tag.text"
            class="avatar-badge"
            :style="{ background: tag.bg, color: tag.color }"
          >
            {{ tag.text }}
          </span>
        </div>
      </div>
    </div>

    <!-- 雷达图 + 条形图 -->
    <div class="result-card" style="animation: fadeInUp 0.6s ease 0.2s both">
      <div style="font-weight:700;font-size:16px;margin-bottom:20px">📊 多维能力雷达</div>

      <!-- 雷达图 -->
      <div class="radar-container">
        <svg class="radar-svg" viewBox="0 0 240 240">
          <!-- 背景网格 -->
          <polygon v-for="r in [0.25, 0.5, 0.75, 1]" :key="r"
            :points="getRadarPoints(r).join(' ')"
            fill="none" stroke="#EDE9FE" stroke-width="1"/>
          <!-- 轴线 -->
          <line v-for="(pt, i) in axisPoints" :key="'ax'+i"
            x1="120" y1="120" :x2="pt.x" :y2="pt.y"
            stroke="#EDE9FE" stroke-width="1"/>
          <!-- 数据多边形 -->
          <polygon
            :points="radarDataPoints.join(' ')"
            fill="rgba(124,110,250,0.25)"
            stroke="var(--primary)"
            stroke-width="2.5"/>
          <!-- 节点 & 标签 -->
          <g v-for="(pt, i) in radarDots" :key="'dot'+i">
            <circle :cx="pt.x" :cy="pt.y" r="5" fill="var(--primary)"/>
            <text class="radar-label" :x="pt.lx" :y="pt.ly" text-anchor="middle">
              {{ result.dimensions[i].label }}
            </text>
            <text class="radar-score" :x="pt.x" :y="pt.y - 10" text-anchor="middle">
              {{ result.dimensions[i].score }}
            </text>
          </g>
        </svg>
      </div>

      <!-- 条形图 -->
      <div class="score-bars">
        <div v-for="(dim, i) in result.dimensions" :key="dim.label" class="score-bar-item">
          <div class="score-bar-label">
            <span>{{ dim.label }}</span>
            <span style="color:var(--primary);font-weight:700">{{ dim.score }}分</span>
          </div>
          <div class="score-bar-track">
            <div
              class="score-bar-fill"
              :style="{ width: dim.score + '%', background: dimColors[i] }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 主动搜索强度 -->
    <div class="result-card" style="animation: fadeInUp 0.6s ease 0.3s both">
      <div style="font-weight:700;font-size:16px;margin-bottom:16px">🔍 主动搜索强度</div>
      <div class="score-bar-item">
        <div class="score-bar-label">
          <span>搜索主动度</span>
          <span style="color:var(--coral);font-weight:700">{{ result.searchScore }}分</span>
        </div>
        <div class="score-bar-track">
          <div
            class="score-bar-fill"
            :style="{ width: result.searchScore + '%', background: 'linear-gradient(90deg, #FF8A80, #FF6B6B)' }"
          ></div>
        </div>
      </div>
    </div>

    <!-- 人格解读报告 -->
    <div class="result-card" style="animation: fadeInUp 0.6s ease 0.4s both">
      <div style="font-weight:700;font-size:16px;margin-bottom:4px">📝 人格解读报告</div>
      <div class="report-text">
        <p v-for="(para, i) in result.report" :key="i" v-html="para"></p>
      </div>
    </div>

    <!-- 金句 -->
    <div class="golden-quote" style="animation: bounceIn 0.8s ease 0.5s both">
      <p>你不是"数字人"，你是"数字你" 💜</p>
    </div>

    <!-- 分享区 -->
    <div class="share-section">
      <div style="font-weight:700;font-size:15px;margin-bottom:4px">分享你的数字人格</div>
      <div class="share-btn-row">
        <button class="share-platform-btn share-wechat" @click="shareTo('wechat')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM15.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 2C6.477 2 2 6.026 2 11c0 2.824 1.373 5.343 3.535 7.042l-.697 2.79A.5.5 0 005.5 21a.5.5 0 00.258-.95l-.832-2.51A10.96 10.96 0 0012 20c5.523 0 10-4.026 10-9s-4.477-9-10-9z"/>
          </svg>
          微信
        </button>
        <button class="share-platform-btn share-weibo" @click="shareTo('weibo')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.098 20c-4.612 0-8.348-2.557-8.348-5.715 0-1.65.985-3.41 2.65-4.834C3.175 7.926 2 6.484 2 4.977 2 2.235 4.66 0 7.82 0c2.297 0 4.258 1.212 5.277 3.022.38-.12.776-.185 1.183-.185 2.64 0 4.78 1.985 4.78 4.435 0 .96-.36 1.845-.965 2.533a4.78 4.78 0 002.04 3.98c.345.222.72.418 1.113.585-.03.18-.055.36-.055.55 0 2.05 1.91 3.71 4.26 3.71.36 0 .71-.04 1.04-.12-.18-.54-.71-.95-1.34-.95-.85 0-1.54.65-1.54 1.45 0 .63.43 1.15.98 1.32-.01 0-.03.01-.04.01H17.9c.42 0 .76-.3.76-.67 0-.36-.34-.65-.76-.65H10.1z"/>
          </svg>
          微博
        </button>
        <button class="share-platform-btn share-red" @click="shareTo('xiaohongshu')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          小红书
        </button>
      </div>
      <button class="copy-btn" :class="{ copied }" @click="copyShareText">
        <svg v-if="!copied" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2"/>
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
        </svg>
        <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        {{ copied ? '已复制到剪贴板！' : '复制分享文案' }}
      </button>
    </div>

    <!-- 重试 -->
    <button class="retry-btn" @click="$emit('retry')">
      🔄 重新测试
    </button>

    <!-- Toast -->
    <div v-if="toast" class="toast">{{ toast }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { getShareText } from '../utils/compute.js'

const props = defineProps({
  result: { type: Object, required: true },
})

defineEmits(['retry'])

const copied = ref(false)
const toast = ref('')

const dimColors = ['#7C6EFA', '#FF8A80', '#6EE7B7', '#FDE68A']

// 雷达图计算
function getRadarPoints(factor) {
  const cx = 120, cy = 120, r = 90 * factor
  const angles = [-Math.PI / 2, -Math.PI / 4, Math.PI / 4, Math.PI / 2]
  return angles.map(a => `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`)
}

const axisPoints = (() => {
  const cx = 120, cy = 120, r = 90
  const angles = [-Math.PI / 2, -Math.PI / 4, Math.PI / 4, Math.PI / 2]
  return angles.map(a => ({ x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) }))
})()

const radarDataPoints = computed(() => {
  const cx = 120, cy = 120, r = 90
  const angles = [-Math.PI / 2, -Math.PI / 4, Math.PI / 4, Math.PI / 2]
  return props.result.dimensions.map((d, i) => {
    const a = angles[i]
    const s = d.score / 100
    return `${cx + r * s * Math.cos(a)},${cy + r * s * Math.sin(a)}`
  })
})

const radarDots = computed(() => {
  const cx = 120, cy = 120, r = 90
  const angles = [-Math.PI / 2, -Math.PI / 4, Math.PI / 4, Math.PI / 2]
  const ldist = 18
  return props.result.dimensions.map((d, i) => {
    const a = angles[i]
    const s = d.score / 100
    return {
      x: cx + r * s * Math.cos(a),
      y: cy + r * s * Math.sin(a),
      lx: cx + (r + ldist) * Math.cos(a),
      ly: cy + (r + ldist) * Math.sin(a) + 4,
    }
  })
})

function shareTo(platform) {
  const names = { wechat: '微信', weibo: '微博', xiaohongshu: '小红书' }
  showToast(`长按复制文案分享到${names[platform] || platform}`)
}

function copyShareText() {
  const text = getShareText(props.result)
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      copied.value = true
      setTimeout(() => { copied.value = false }, 2000)
    })
  } else {
    const ta = document.createElement('textarea')
    ta.value = text
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }
}

function showToast(msg) {
  toast.value = msg
  setTimeout(() => { toast.value = '' }, 2000)
}
</script>

<style scoped>
.result-page {
  min-height: 100vh;
  padding: 20px 16px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
}

.result-header {
  text-align: center;
  margin-bottom: 32px;
  animation: fadeInUp 0.6s ease;
}

.result-award {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, #FFF3B0, #FFE57A);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  color: #8B6914;
  margin-bottom: 16px;
}

.result-label-main {
  font-family: 'ZCOOL KuaiLe', cursive;
  font-size: clamp(36px, 8vw, 52px);
  background: linear-gradient(135deg, var(--primary), #B57BEE, var(--coral));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

.result-label-sub {
  font-size: 15px;
  color: var(--text-light);
}

.result-card {
  background: white;
  border-radius: var(--radius);
  padding: 24px;
  width: 100%;
  max-width: 480px;
  box-shadow: var(--shadow);
  margin-bottom: 20px;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes bounceIn {
  0% { opacity: 0; transform: scale(0.3); }
  50% { transform: scale(1.05); }
  70% { transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
}

.avatar-section {
  text-align: center;
  margin: 24px 0;
}

.avatar-container {
  width: 140px;
  height: 140px;
  margin: 0 auto 16px;
  animation: bounceIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both;
}

.avatar-container :deep(svg) {
  width: 100%;
  height: 100%;
}

.avatar-badges {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
}

.avatar-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
}

.radar-container {
  position: relative;
  width: 240px;
  height: 240px;
  margin: 0 auto 24px;
}

.radar-svg {
  width: 100%;
  height: 100%;
}

.radar-label {
  font-size: 11px;
  fill: var(--text-light);
  font-weight: 500;
}

.radar-score {
  font-size: 10px;
  fill: var(--primary);
  font-weight: 700;
}

.score-bars {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;
}

.score-bar-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.score-bar-label {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 500;
}

.score-bar-track {
  height: 10px;
  background: var(--bg);
  border-radius: 5px;
  overflow: hidden;
}

.score-bar-fill {
  height: 100%;
  border-radius: 5px;
  transition: width 1s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes barGrow {
  from { height: 0; }
}

.report-text {
  font-size: 15px;
  line-height: 1.8;
  color: var(--text);
  margin-top: 16px;
}

.report-text p {
  margin-bottom: 12px;
}

:deep(.report-highlight) {
  display: inline-block;
  background: linear-gradient(135deg, rgba(124,110,250,0.1), rgba(181,123,238,0.1));
  padding: 2px 6px;
  border-radius: 6px;
  color: var(--primary-dark);
  font-weight: 600;
}

.golden-quote {
  background: linear-gradient(135deg, var(--primary), #B57BEE);
  color: white;
  text-align: center;
  padding: 24px;
  border-radius: var(--radius);
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  max-width: 480px;
  width: 100%;
}

.golden-quote::before {
  content: '"';
  position: absolute;
  top: -10px;
  left: 16px;
  font-size: 80px;
  opacity: 0.2;
  font-family: Georgia, serif;
}

.golden-quote p {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  position: relative;
  z-index: 1;
}

.share-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  max-width: 480px;
  width: 100%;
}

.share-btn-row {
  display: flex;
  gap: 10px;
}

.share-platform-btn {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.2s;
  font-family: 'Noto Sans SC', sans-serif;
}

.share-platform-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.1);
}

.share-wechat { background: #07C160; }
.share-weibo { background: #E6162D; }
.share-red { background: #FF2442; }

.copy-btn {
  width: 100%;
  padding: 14px;
  border: 2px solid var(--primary);
  border-radius: 14px;
  background: white;
  color: var(--primary);
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s;
  font-family: 'Noto Sans SC', sans-serif;
}

.copy-btn:hover {
  background: var(--primary);
  color: white;
}

.copy-btn.copied {
  background: #07C160;
  border-color: #07C160;
  color: white;
}

.retry-btn {
  width: 100%;
  max-width: 480px;
  padding: 14px;
  background: var(--bg);
  border: none;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-light);
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Noto Sans SC', sans-serif;
}

.retry-btn:hover {
  color: var(--primary);
}

.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,0.8);
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 14px;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
  pointer-events: none;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
