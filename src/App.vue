<template>
  <div id="app-root">
    <IntroPage
      v-if="page === 'intro'"
      @start="startQuiz"
    />
    <QuizPage
      v-if="page === 'quiz'"
      :questions="currentQuestions"
      @finish="onQuizFinish"
      @back="page = 'intro'"
    />
    <ResultPage
      v-if="page === 'result'"
      :result="result"
      @retry="page = 'intro'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IntroPage from './components/IntroPage.vue'
import QuizPage from './components/QuizPage.vue'
import ResultPage from './components/ResultPage.vue'
import { getQuestionsForMode } from './data/questions.js'
import { computeResult } from './utils/compute.js'

const page = ref('intro')
const currentQuestions = ref([])
const result = ref(null)

function startQuiz(mode) {
  currentQuestions.value = getQuestionsForMode(mode)
  result.value = null
  page.value = 'quiz'
}

function onQuizFinish(answers) {
  result.value = computeResult(answers, currentQuestions.value)
  page.value = 'result'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style>
#app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
