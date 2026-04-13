import { PERSONAS, AVATAR_SVGS } from '../data/personas.js'

/**
 * 根据用户作答计算人格结果
 * @param {Object} answers - { qId: selectedIndex }
 * @param {Array} questions - 当前测试的题目列表
 * @returns {Object} 人格结果对象
 */
export function computeResult(answers, questions) {
  let search = 0
  let social = 0
  let expression = 0
  let immersion = 0
  let count = 0

  questions.forEach(q => {
    const ans = answers[q.id]
    if (ans !== undefined) {
      const s = q.options[ans].scores
      search += s.search
      social += s.social
      expression += s.expression
      immersion += s.immersion
      count++
    }
  })

  if (count === 0) {
    return buildResult(PERSONAS['全能玩家'], search, social, expression, immersion, count)
  }

  // 基于两个核心维度判定人格
  const isHighSearch = search > 50
  const isHighSocial = social > 50
  const isHighExpr = expression > 50
  const isHighImm = immersion > 70
  const total = search + social

  let personaKey
  if (isHighSearch && isHighSocial) {
    personaKey = '数字达人'
  } else if (!isHighSearch && isHighSocial) {
    personaKey = '社交蝴蝶'
  } else if (isHighSearch && !isHighSocial) {
    personaKey = '信息猎人'
  } else if (isHighImm && expression > 40) {
    personaKey = '内容创客'
  } else if (isHighSearch) {
    personaKey = '领航探索者'
  } else if (total < 40) {
    personaKey = '围观群众'
  } else if (immersion > 70) {
    personaKey = '虚拟隐士'
  } else {
    personaKey = '全能玩家'
  }

  return buildResult(PERSONAS[personaKey], search, social, expression, immersion, count)
}

function buildResult(base, search, social, expression, immersion, count) {
  const factor = Math.max(0.7, Math.min(1.3, count / 16))

  return {
    ...base,
    searchScore: Math.round(Math.min(100, base.searchScore * factor)),
    dimensions: base.dimensions.map((d, i) => {
      let baseScore
      if (i === 0) baseScore = Math.min(100, Math.round(Math.max(search, immersion) / count * 12))
      if (i === 1) baseScore = Math.min(100, Math.round(social / count * 12))
      if (i === 2) baseScore = Math.min(100, Math.round(expression / count * 12))
      if (i === 3) baseScore = Math.min(100, Math.round(immersion / count * 12))
      return { label: d.label, score: baseScore }
    }),
    tags: base.traits.slice(0, 3).map((t, i) => ({
      text: t,
      ...base.traitStyles[i % base.traitStyles.length],
    })),
    avatarSvg: AVATAR_SVGS[base.avatarType] || AVATAR_SVGS.player,
  }
}

/**
 * 获取分享文案
 */
export function getShareText(result) {
  const label = result ? result.label : '神秘人格'
  return `我的数字人格是【${label}】！
你也来测一测自己是哪种"数字人"吧～
👇 点击链接开始测试
#数字人格测试 #你是哪种数字人`
}
