<template>
  <div class="quiz-page">
    <!-- 顶部导航 -->
    <div class="quiz-header">
      <button class="quiz-back" @click="handleBack">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C6EFA" stroke-width="2.5" stroke-linecap="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>

      <div class="quiz-progress-wrap">
        <div class="quiz-progress-text">{{ currentIndex + 1 }} / {{ questions.length }}</div>
        <div class="quiz-progress-bar">
          <div
            class="quiz-progress-fill"
            :style="{ width: ((currentIndex + 1) / questions.length * 100) + '%' }"
          ></div>
        </div>
      </div>

      <div style="width:40px"></div>
    </div>

    <!-- 问题主体 -->
    <div class="quiz-body">
      <div class="question-card" :key="currentIndex">
        <!-- 维度标签 -->
        <div class="question-dim-badge">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="var(--primary)">
            <circle cx="12" cy="12" r="10"/>
          </svg>
          {{ currentQ.dimension }}
        </div>

        <!-- 题目 emoji -->
        <div class="question-emoji">{{ currentQ.emoji }}</div>

        <!-- 题目文本 -->
        <div class="question-text">{{ currentQ.text }}</div>

        <!-- 选项列表 -->
        <div class="options-list">
          <button
            v-for="(opt, i) in currentQ.options"
            :key="i"
            class="option-btn"
            :class="{ selected: localAnswers[currentQ.id] === i }"
            @click="selectOption(currentQ.id, i)"
          >
            <span class="option-letter">{{ ['A','B','C','D'][i] }}</span>
            {{ opt.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- 底部按钮 -->
    <div class="quiz-footer">
      <button
        class="next-btn primary"
        :disabled="localAnswers[currentQ.id] === undefined"
        @click="handleNext"
      >
        {{ isLast ? '🎉 生成我的数字人格' : '下一题 →' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  questions: { type: Array, required: true },
})

const emit = defineEmits(['finish', 'back'])

// 组件内部管理当前题目索引和作答状态
const currentIndex = ref(0)
const localAnswers = ref({})

const currentQ = computed(() => props.questions[currentIndex.value] || {})
const isLast = computed(() => currentIndex.value === props.questions.length - 1)

function selectOption(qId, optIndex) {
  localAnswers.value = { ...localAnswers.value, [qId]: optIndex }
}

function handleNext() {
  if (localAnswers.value[currentQ.value.id] === undefined) return

  if (!isLast.value) {
    currentIndex.value++
  } else {
    // 最后一题答完，触发结束
    emit('finish', { ...localAnswers.value })
  }
}

function handleBack() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
  emit('back')
}
</script>

<style scoped>
.quiz-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #F0ECFF 0%, var(--bg) 100px);
}

.quiz-header {
  width: 100%;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(245, 240, 255, 0.9);
  backdrop-filter: blur(12px);
}

.quiz-back {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s;
}

.quiz-back:hover {
  transform: scale(1.1);
}

.quiz-progress-wrap {
  flex: 1;
  margin: 0 12px;
}

.quiz-progress-text {
  font-size: 12px;
  color: var(--text-light);
  text-align: center;
  margin-bottom: 6px;
}

.quiz-progress-bar {
  height: 8px;
  background: rgba(124, 110, 250, 0.15);
  border-radius: 4px;
  overflow: hidden;
}

.quiz-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), #B57BEE);
  border-radius: 4px;
  transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.quiz-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 20px 40px;
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
}

.question-card {
  width: 100%;
  background: white;
  border-radius: 28px;
  padding: 32px 28px;
  box-shadow: var(--shadow);
  animation: rotateIn 0.5s ease;
}

@keyframes rotateIn {
  from { opacity: 0; transform: rotate(-10deg) scale(0.9); }
  to { opacity: 1; transform: rotate(0deg) scale(1); }
}

.question-dim-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 20px;
  background: var(--bg);
  color: var(--primary);
}

.question-emoji {
  font-size: 32px;
  margin-bottom: 20px;
}

.question-text {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 28px;
  color: var(--text);
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.option-btn {
  width: 100%;
  padding: 16px 20px;
  border: 2px solid #EDE9FE;
  border-radius: 16px;
  background: white;
  cursor: pointer;
  text-align: left;
  font-size: 15px;
  color: var(--text);
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Noto Sans SC', sans-serif;
}

.option-btn:hover {
  border-color: var(--primary-light);
  background: #F5F0FF;
  transform: translateX(4px);
}

.option-btn.selected {
  border-color: var(--primary);
  background: linear-gradient(135deg, #F0ECFF, #E8E0FF);
  box-shadow: 0 4px 16px rgba(124, 110, 250, 0.2);
  color: var(--primary-dark);
  font-weight: 600;
}

.option-letter {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: var(--text-light);
  flex-shrink: 0;
  transition: all 0.2s;
}

.option-btn.selected .option-letter {
  background: var(--primary);
  color: white;
}

.quiz-footer {
  width: 100%;
  max-width: 520px;
  padding: 0 20px 32px;
  margin: 0 auto;
}

.next-btn {
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 16px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  font-family: 'Noto Sans SC', sans-serif;
}

.next-btn.primary {
  background: linear-gradient(135deg, var(--primary), #B57BEE);
  color: white;
  box-shadow: 0 6px 24px rgba(124, 110, 250, 0.4);
}

.next-btn.primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(124, 110, 250, 0.5);
}

.next-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none !important;
}

@media (max-width: 380px) {
  .question-card { padding: 24px 20px; }
}
</style>
