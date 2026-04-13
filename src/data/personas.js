/**
 * 8种人格定义 + SVG卡通头像
 */
export const PERSONAS = {
  信息猎人: {
    label: '信息猎人',
    subLabel: '你就是行走的百科全书，搜索达人本人！',
    traits: ['主动搜索型', '高专注', '研究型'],
    traitStyles: [
      { bg: 'linear-gradient(135deg,#EDE9FE,#D4C4FC)', color: '#6B3FD4' },
      { bg: 'linear-gradient(135deg,#D1FAE5,#6EE7B7)', color: '#065F46' },
      { bg: 'linear-gradient(135deg,#FEF3C7,#FDE68A)', color: '#92400E' },
    ],
    avatarType: 'hunter',
    searchScore: 88,
    dimensions: [
      { label: '注意力专注度', score: 75 },
      { label: '社交活跃度', score: 45 },
      { label: '表达创作度', score: 62 },
      { label: '沉浸体验度', score: 58 },
    ],
    report: [
      '你就是那种<span class="report-highlight">遇到问题立刻打开搜索框</span>的人！别人还在犹豫，你已经找到了三篇测评和两个攻略。',
      '你的数字人格属于<span class="report-highlight">"主动出击型"</span>——不靠算法喂饭，自己动手丰衣足食。收藏夹是你的军火库，搜索记录是你的知识图谱。',
      '🎯 <b>小建议</b>：试试偶尔"被动"一下？被算法推荐的惊喜感，也是数字生活的一部分哦！',
    ],
  },

  社交蝴蝶: {
    label: '社交蝴蝶',
    subLabel: '你就是人群中最闪亮的社牛担当！',
    traits: ['高社交', '活跃分享型', '关系驱动'],
    traitStyles: [
      { bg: 'linear-gradient(135deg,#FFD6E8,#FFB3D1)', color: '#BE2A6D' },
      { bg: 'linear-gradient(135deg,#E0E7FF,#A5B4FC)', color: '#3B45A8' },
      { bg: 'linear-gradient(135deg,#D1FAE5,#6EE7B7)', color: '#065F46' },
    ],
    avatarType: 'butterfly',
    searchScore: 42,
    dimensions: [
      { label: '注意力专注度', score: 55 },
      { label: '社交活跃度', score: 92 },
      { label: '表达创作度', score: 78 },
      { label: '沉浸体验度', score: 48 },
    ],
    report: [
      '你就是那种在群里<span class="report-highlight">冲在前面、表情包带节奏</span>的人！别人还在潜水，你已经发了三条消息组织了团建。',
      '你的数字人格属于<span class="report-highlight">"社交驱动型"</span>——在互动中获取信息，在分享中获得满足。你的点赞和评论，是互联网最温暖的流动。',
      '🦋 <b>小建议</b>：偶尔也给自己一些"不社交"的独处时光？数字隐士的快乐，你值得拥有。',
    ],
  },

  数字达人: {
    label: '数字达人',
    subLabel: '搜索又快又准，分享还贼有品！',
    traits: ['全能型', '搜索+社交双强', '影响力强'],
    traitStyles: [
      { bg: 'linear-gradient(135deg,#FFE0E0,#FFAAAA)', color: '#991B1B' },
      { bg: 'linear-gradient(135deg,#EDE9FE,#D4C4FC)', color: '#6B3FD4' },
      { bg: 'linear-gradient(135deg,#FEF3C7,#FDE68A)', color: '#92400E' },
    ],
    avatarType: 'master',
    searchScore: 78,
    dimensions: [
      { label: '注意力专注度', score: 70 },
      { label: '社交活跃度', score: 80 },
      { label: '表达创作度', score: 75 },
      { label: '沉浸体验度', score: 62 },
    ],
    report: [
      '你是那种<span class="report-highlight">既能深度研究，又会社交传播</span>的全能型选手！搜索起来是学霸，聊起天来是社牛，两种模式无缝切换。',
      '你的数字人格属于<span class="report-highlight">"精准影响力型"</span>——知道什么时候该自己找答案，什么时候该借助群体的智慧。你是互联网的信息枢纽！',
      '🚀 <b>小建议</b>：保持这种平衡已经很厉害了，如果能再多一点"沉浸式发呆"时间，就更完美啦~',
    ],
  },

  虚拟隐士: {
    label: '虚拟隐士',
    subLabel: '真正的数字世界独行侠，安静而深邃',
    traits: ['被动获取型', '高沉浸', '内省型'],
    traitStyles: [
      { bg: 'linear-gradient(135deg,#B8F3FF,#7DD3FC)', color: '#0369A1' },
      { bg: 'linear-gradient(135deg,#E0E7FF,#A5B4FC)', color: '#3B45A8' },
      { bg: 'linear-gradient(135deg,#F3F4F6,#D1D5DB)', color: '#374151' },
    ],
    avatarType: 'hermit',
    searchScore: 30,
    dimensions: [
      { label: '注意力专注度', score: 65 },
      { label: '社交活跃度', score: 28 },
      { label: '表达创作度', score: 45 },
      { label: '沉浸体验度', score: 90 },
    ],
    report: [
      '你是那种<span class="report-highlight">默默刷完一部剧，默默收藏一百篇文章</span>的人！表面波澜不惊，内心已经完成了无数次知识宇宙的探索。',
      '你的数字人格属于<span class="report-highlight">"深度沉浸型"</span>——不喜欢碎片，更偏爱系统性沉浸。你是那种"我知道，但我不想说"的神秘存在。',
      '🏔️ <b>小建议</b>：偶尔也把你的宝藏发现分享出来？你的收藏，值得被世界看见一点点。',
    ],
  },

  全能玩家: {
    label: '全能玩家',
    subLabel: '各种模式自由切换，数字世界全能选手！',
    traits: ['均衡全能型', '适应力强', '多面手'],
    traitStyles: [
      { bg: 'linear-gradient(135deg,#EDE9FE,#D4C4FC)', color: '#6B3FD4' },
      { bg: 'linear-gradient(135deg,#FFD6E8,#FFB3D1)', color: '#BE2A6D' },
      { bg: 'linear-gradient(135deg,#D1FAE5,#6EE7B7)', color: '#065F46' },
    ],
    avatarType: 'player',
    searchScore: 62,
    dimensions: [
      { label: '注意力专注度', score: 68 },
      { label: '社交活跃度', score: 68 },
      { label: '表达创作度', score: 65 },
      { label: '沉浸体验度', score: 68 },
    ],
    report: [
      '你是那种<span class="report-highlight">该主动时主动，该躺平时躺平</span>的超级均衡型选手！数字世界里，你是那个最灵活、最会切换模式的人。',
      '你的数字人格属于<span class="report-highlight">"智能适应型"</span>——根据场景选择最优策略，从不被单一模式绑定。你是互联网的原住民，真正的大师级玩家！',
      '🎮 <b>小建议</b>：你可以尝试在某个维度更深入探索，也许会发现更大的乐趣！',
    ],
  },

  围观群众: {
    label: '围观群众',
    subLabel: '数字世界的佛系路人甲，吃瓜一级选手',
    traits: ['被动型', '低搜索', '佛系冲浪'],
    traitStyles: [
      { bg: 'linear-gradient(135deg,#F3F4F6,#D1D5DB)', color: '#374151' },
      { bg: 'linear-gradient(135deg,#FFE0E0,#FFAAAA)', color: '#991B1B' },
      { bg: 'linear-gradient(135deg,#FFF3B0,#FDE68A)', color: '#92400E' },
    ],
    avatarType: 'spectator',
    searchScore: 22,
    dimensions: [
      { label: '注意力专注度', score: 42 },
      { label: '社交活跃度', score: 35 },
      { label: '表达创作度', score: 30 },
      { label: '沉浸体验度', score: 55 },
    ],
    report: [
      '你是那种<span class="report-highlight">热闘追得飞起，但永远在评论区之外</span>的超级观众！你的浏览记录比谁都长，你的存在感比谁都低调。',
      '你的数字人格属于<span class="report-highlight">"佛系围观型"</span>——网络世界的吃瓜达人，追热点小能手，却不爱亲自动手。这也是一种很舒服的数字生存方式！',
      '🍉 <b>小建议</b>：下次遇到喜欢的，不妨也发个声？这个世界会因为你的一个赞而变得稍微不同一点点。',
    ],
  },

  领航探索者: {
    label: '领航探索者',
    subLabel: '主动探索未知领域，数字时代的探险家',
    traits: ['探索型', '主动+均衡', '好奇心旺盛'],
    traitStyles: [
      { bg: 'linear-gradient(135deg,#FFF3B0,#FDE68A)', color: '#92400E' },
      { bg: 'linear-gradient(135deg,#EDE9FE,#D4C4FC)', color: '#6B3FD4' },
      { bg: 'linear-gradient(135deg,#D1FAE5,#6EE7B7)', color: '#065F46' },
    ],
    avatarType: 'explorer',
    searchScore: 72,
    dimensions: [
      { label: '注意力专注度', score: 72 },
      { label: '社交活跃度', score: 55 },
      { label: '表达创作度', score: 70 },
      { label: '沉浸体验度', score: 65 },
    ],
    report: [
      '你是那种<span class="report-highlight">永远在探索新领域，永远在问"为什么"</span>的人！搜索对你来说不是工具，是通向未知世界的传送门。',
      '你的数字人格属于<span class="report-highlight">"主动探索型"</span>——充满好奇心，讨厌被动接受，喜欢自己挖掘真相。你是互联网时代的领航者，永远在寻找下一片新大陆！',
      '🧭 <b>小建议</b>：记得偶尔停下来，享受一下已经发现的世界，而不只是追逐下一个目标~',
    ],
  },

  内容创客: {
    label: '内容创客',
    subLabel: '搜索是为了创作，创作是一种表达',
    traits: ['创作驱动型', '高表达', '搜索辅助创作'],
    traitStyles: [
      { bg: 'linear-gradient(135deg,#FFD6E8,#FFB3D1)', color: '#BE2A6D' },
      { bg: 'linear-gradient(135deg,#FFE0E0,#FFAAAA)', color: '#991B1B' },
      { bg: 'linear-gradient(135deg,#B8F3FF,#7DD3FC)', color: '#0369A1' },
    ],
    avatarType: 'creator',
    searchScore: 65,
    dimensions: [
      { label: '注意力专注度', score: 68 },
      { label: '社交活跃度', score: 62 },
      { label: '表达创作度', score: 88 },
      { label: '沉浸体验度', score: 58 },
    ],
    report: [
      '你是那种<span class="report-highlight">搜索是为了找到更好的表达方式，创作是为了被看见</span>的人！你的搜索不是终点，是创作的起点。',
      '你的数字人格属于<span class="report-highlight">"创作者驱动型"</span>——有观点想输出，有审美想展示，有故事想讲述。你是互联网的内容发动机！',
      '🎨 <b>小建议</b>：继续保持创作的激情！你的内容，正在成为别人搜索时发现的宝藏~',
    ],
  },
}

/**
 * SVG 卡通头像地图
 */
export const AVATAR_SVGS = {
  hunter: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
  <circle cx="70" cy="70" r="65" fill="#EDE9FE"/>
  <circle cx="70" cy="70" r="60" fill="#FFF9E6"/>
  <circle cx="70" cy="70" r="60" fill="none" stroke="#FDE68A" stroke-width="3"/>
  <circle cx="70" cy="70" r="60" fill="none" stroke="#F59E0B" stroke-width="1" stroke-dasharray="4,8"/>
  <circle cx="72" cy="62" r="22" fill="none" stroke="#7C6EFA" stroke-width="4"/>
  <line x1="87" y1="77" x2="100" y2="92" stroke="#7C6EFA" stroke-width="5" stroke-linecap="round"/>
  <circle cx="70" cy="62" r="32" fill="#FFE0C0"/>
  <circle cx="58" cy="55" r="5" fill="#3D2B1F"/>
  <circle cx="82" cy="55" r="5" fill="#3D2B1F"/>
  <circle cx="60" cy="53" r="2" fill="white"/>
  <circle cx="84" cy="53" r="2" fill="white"/>
  <path d="M63 68 Q70 74 77 68" fill="none" stroke="#E07070" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="52" cy="65" rx="7" ry="4" fill="#FFB3B3" opacity="0.5"/>
  <ellipse cx="88" cy="65" rx="7" ry="4" fill="#FFB3B3" opacity="0.5"/>
  <path d="M42 50 Q50 28 70 25 Q90 28 98 50" fill="#4A3728"/>
  <ellipse cx="70" cy="28" rx="20" ry="10" fill="#4A3728"/>
  <text x="70" y="110" text-anchor="middle" font-size="20">🔍</text>
  <text x="70" y="128" text-anchor="middle" font-size="10" fill="#7C6EFA" font-weight="bold">信息猎人</text>
</svg>`,

  butterfly: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
  <circle cx="70" cy="70" r="65" fill="#FFD6E8"/>
  <circle cx="70" cy="70" r="60" fill="#FFF0F5"/>
  <circle cx="70" cy="70" r="60" fill="none" stroke="#FFB3D1" stroke-width="3"/>
  <ellipse cx="42" cy="65" rx="25" ry="20" fill="#FFB3D1" opacity="0.7" transform="rotate(-20,42,65)"/>
  <ellipse cx="98" cy="65" rx="25" ry="20" fill="#FFB3D1" opacity="0.7" transform="rotate(20,98,65)"/>
  <ellipse cx="48" cy="90" rx="18" ry="14" fill="#FF80AB" opacity="0.5" transform="rotate(-10,48,90)"/>
  <ellipse cx="92" cy="90" rx="18" ry="14" fill="#FF80AB" opacity="0.5" transform="rotate(10,92,90)"/>
  <circle cx="40" cy="62" r="4" fill="white" opacity="0.7"/>
  <circle cx="100" cy="62" r="4" fill="white" opacity="0.7"/>
  <circle cx="70" cy="58" r="28" fill="#FFE0C0"/>
  <circle cx="62" cy="52" r="5" fill="#3D2B1F"/>
  <circle cx="78" cy="52" r="5" fill="#3D2B1F"/>
  <circle cx="64" cy="50" r="2" fill="white"/>
  <circle cx="80" cy="50" r="2" fill="white"/>
  <path d="M63 64 Q70 72 77 64" fill="none" stroke="#E07070" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M46 45 Q55 25 70 23 Q85 25 94 45" fill="#8B4513"/>
  <ellipse cx="70" cy="26" rx="18" ry="9" fill="#8B4513"/>
  <path d="M50 35 Q60 28 70 26 Q80 28 90 35" fill="#8B4513"/>
  <line x1="62" y1="30" x2="55" y2="18" stroke="#8B4513" stroke-width="2" stroke-linecap="round"/>
  <line x1="78" y1="30" x2="85" y2="18" stroke="#8B4513" stroke-width="2" stroke-linecap="round"/>
  <circle cx="55" cy="17" r="3" fill="#FFB3D1"/>
  <circle cx="85" cy="17" r="3" fill="#FFB3D1"/>
</svg>`,

  master: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
  <circle cx="70" cy="70" r="65" fill="#EDE9FE"/>
  <circle cx="70" cy="70" r="60" fill="#F0ECFF"/>
  <circle cx="70" cy="70" r="60" fill="none" stroke="#A69BFC" stroke-width="3"/>
  <text x="25" y="35" font-size="14" opacity="0.6">✦</text>
  <text x="105" y="30" font-size="10" opacity="0.5">✦</text>
  <text x="118" y="80" font-size="12" opacity="0.4">✦</text>
  <polygon points="50,20 56,8 70,18 84,8 90,20" fill="#FFD700" stroke="#F59E0B" stroke-width="1"/>
  <circle cx="56" cy="9" r="3" fill="#FF6B6B"/>
  <circle cx="70" cy="18" r="3" fill="#7C6EFA"/>
  <circle cx="84" cy="9" r="3" fill="#6EE7B7"/>
  <circle cx="70" cy="60" r="30" fill="#FFE0C0"/>
  <circle cx="60" cy="54" r="5.5" fill="#3D2B1F"/>
  <circle cx="80" cy="54" r="5.5" fill="#3D2B1F"/>
  <circle cx="62" cy="52" r="2" fill="white"/>
  <circle cx="82" cy="52" r="2" fill="white"/>
  <path d="M64 68 Q73 73 78 66" fill="none" stroke="#E07070" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="52" cy="64" rx="7" ry="4" fill="#FFB3B3" opacity="0.4"/>
  <ellipse cx="88" cy="64" rx="7" ry="4" fill="#FFB3B3" opacity="0.4"/>
  <path d="M44 48 Q52 28 70 26 Q88 28 96 48" fill="#1A1A2E"/>
  <ellipse cx="70" cy="29" rx="20" ry="10" fill="#1A1A2E"/>
  <path d="M50 40 Q65 30 80 40" fill="#1A1A2E"/>
  <circle cx="105" cy="100" r="16" fill="#FFD700" stroke="white" stroke-width="2"/>
  <text x="105" y="105" text-anchor="middle" font-size="16">★</text>
</svg>`,

  hermit: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
  <circle cx="70" cy="70" r="65" fill="#E0F2FE"/>
  <circle cx="70" cy="70" r="60" fill="#F0F9FF"/>
  <circle cx="70" cy="70" r="60" fill="none" stroke="#7DD3FC" stroke-width="3" stroke-dasharray="6,6"/>
  <path d="M100 30 A22 22 0 1 1 100 74 A16 16 0 1 0 100 30" fill="#FDE68A" opacity="0.8"/>
  <circle cx="70" cy="65" r="28" fill="#FFE0C0"/>
  <path d="M56 60 Q60 56 64 60" fill="none" stroke="#3D2B1F" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M76 60 Q80 56 84 60" fill="none" stroke="#3D2B1F" stroke-width="2.5" stroke-linecap="round"/>
  <ellipse cx="70" cy="72" rx="4" ry="2.5" fill="#E07070" opacity="0.5"/>
  <path d="M38 55 Q40 20 70 18 Q100 20 102 55" fill="#6B7280"/>
  <ellipse cx="70" cy="22" rx="28" ry="14" fill="#6B7280"/>
  <path d="M40 50 Q50 30 70 28 Q90 30 100 50" fill="#4B5563"/>
  <text x="20" y="90" font-size="10" opacity="0.5" fill="#FDE68A">✦</text>
  <text x="28" y="110" font-size="8" opacity="0.4" fill="#FDE68A">✦</text>
  <text x="110" y="105" font-size="9" opacity="0.5" fill="#FDE68A">✦</text>
  <path d="M40 55 Q40 35 70 32 Q100 35 100 55" fill="none" stroke="#93C5FD" stroke-width="4" stroke-linecap="round"/>
  <rect x="36" y="50" width="8" height="16" rx="4" fill="#60A5FA"/>
  <rect x="96" y="50" width="8" height="16" rx="4" fill="#60A5FA"/>
</svg>`,

  player: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
  <circle cx="70" cy="70" r="65" fill="#EDE9FE"/>
  <circle cx="70" cy="70" r="60" fill="#F8F4FF"/>
  <circle cx="70" cy="70" r="60" fill="none" stroke="#C4B5FD" stroke-width="3"/>
  <rect x="40" y="95" width="60" height="22" rx="11" fill="#7C6EFA"/>
  <circle cx="55" cy="106" r="6" fill="#5A4ED4"/>
  <circle cx="85" cy="106" r="4" fill="#5A4ED4"/>
  <rect x="65" y="104" width="10" height="4" rx="2" fill="#5A4ED4"/>
  <circle cx="70" cy="62" r="28" fill="#FFE0C0"/>
  <path d="M58 58 Q61 54 64 58" fill="none" stroke="#3D2B1F" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M76 58 Q79 54 82 58" fill="none" stroke="#3D2B1F" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M63 70 Q70 78 77 70" fill="none" stroke="#E07070" stroke-width="2.5" stroke-linecap="round"/>
  <ellipse cx="53" cy="66" rx="6" ry="4" fill="#FFB3B3" opacity="0.5"/>
  <ellipse cx="87" cy="66" rx="6" ry="4" fill="#FFB3B3" opacity="0.5"/>
  <path d="M44 50 Q52 28 70 26 Q88 28 96 50" fill="#D97706"/>
  <ellipse cx="70" cy="29" rx="20" ry="10" fill="#D97706"/>
  <text x="98" y="42" font-size="14" opacity="0.7">⭐</text>
</svg>`,

  spectator: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
  <circle cx="70" cy="70" r="65" fill="#F3F4F6"/>
  <circle cx="70" cy="70" r="60" fill="#FAFAFA"/>
  <circle cx="70" cy="70" r="60" fill="none" stroke="#D1D5DB" stroke-width="3"/>
  <ellipse cx="55" cy="100" rx="18" ry="12" fill="#FDE68A"/>
  <ellipse cx="70" cy="98" rx="15" ry="10" fill="#FCD34D"/>
  <ellipse cx="85" cy="100" rx="18" ry="12" fill="#FDE68A"/>
  <circle cx="50" cy="96" r="3" fill="#F59E0B"/>
  <circle cx="62" cy="93" r="3" fill="#F59E0B"/>
  <circle cx="78" cy="93" r="3" fill="#F59E0B"/>
  <circle cx="90" cy="96" r="3" fill="#F59E0B"/>
  <circle cx="70" cy="60" r="26" fill="#FFE0C0"/>
  <circle cx="60" cy="55" r="7" fill="white"/>
  <circle cx="80" cy="55" r="7" fill="white"/>
  <circle cx="60" cy="55" r="4" fill="#3D2B1F"/>
  <circle cx="80" cy="55" r="4" fill="#3D2B1F"/>
  <circle cx="61.5" cy="53.5" r="1.5" fill="white"/>
  <circle cx="81.5" cy="53.5" r="1.5" fill="white"/>
  <line x1="64" y1="70" x2="76" y2="70" stroke="#C4A07A" stroke-width="2" stroke-linecap="round"/>
  <path d="M46 48 Q54 28 70 26 Q86 28 94 48" fill="#6B7280"/>
  <ellipse cx="70" cy="29" rx="18" ry="9" fill="#6B7280"/>
  <rect x="48" y="47" width="44" height="16" rx="4" fill="#1F2937" opacity="0.15"/>
</svg>`,

  explorer: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
  <circle cx="70" cy="70" r="65" fill="#FEF9C3"/>
  <circle cx="70" cy="70" r="60" fill="#FFFBEB"/>
  <circle cx="70" cy="70" r="60" fill="none" stroke="#FDE68A" stroke-width="3"/>
  <circle cx="85" cy="100" r="20" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
  <polygon points="85,84 88,98 85,100 82,98" fill="#EF4444"/>
  <polygon points="85,116 88,102 85,100 82,102" fill="#1F2937"/>
  <circle cx="85" cy="100" r="3" fill="#F59E0B"/>
  <circle cx="70" cy="58" r="28" fill="#FFE0C0"/>
  <circle cx="60" cy="52" r="6" fill="white"/>
  <circle cx="80" cy="52" r="6" fill="white"/>
  <circle cx="61" cy="52" r="3.5" fill="#3D2B1F"/>
  <circle cx="81" cy="52" r="3.5" fill="#3D2B1F"/>
  <circle cx="62" cy="51" r="1.5" fill="white"/>
  <circle cx="82" cy="51" r="1.5" fill="white"/>
  <ellipse cx="70" cy="68" rx="5" ry="3.5" fill="#E07070" opacity="0.7"/>
  <ellipse cx="50" cy="60" rx="6" ry="4" fill="#FFB3B3" opacity="0.5"/>
  <ellipse cx="90" cy="60" rx="6" ry="4" fill="#FFB3B3" opacity="0.5"/>
  <ellipse cx="70" cy="34" rx="28" ry="8" fill="#92400E"/>
  <rect x="52" y="14" width="36" height="22" rx="4" fill="#B45309"/>
  <rect x="52" y="30" width="36" height="6" fill="#92400E"/>
  <circle cx="70" cy="14" r="4" fill="#FDE68A"/>
  <text x="20" y="40" font-size="12" opacity="0.5">✦</text>
  <text x="112" y="45" font-size="10" opacity="0.4">✦</text>
</svg>`,

  creator: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
  <circle cx="70" cy="70" r="65" fill="#FDF2F8"/>
  <circle cx="70" cy="70" r="60" fill="#FFF5F7"/>
  <circle cx="70" cy="70" r="60" fill="none" stroke="#FBCFE8" stroke-width="3"/>
  <rect x="15" y="85" width="8" height="40" rx="4" fill="#B45309" transform="rotate(-30, 19, 105)"/>
  <polygon points="10,110 28,110 19,130" fill="#7C6EFA" transform="rotate(-30, 19, 120)"/>
  <circle cx="25" cy="70" r="5" fill="#FF6B6B" opacity="0.6"/>
  <circle cx="115" cy="75" r="6" fill="#7C6EFA" opacity="0.5"/>
  <circle cx="110" cy="60" r="4" fill="#FFD700" opacity="0.5"/>
  <circle cx="70" cy="60" r="28" fill="#FFE0C0"/>
  <circle cx="60" cy="54" r="6" fill="white"/>
  <circle cx="80" cy="54" r="6" fill="white"/>
  <circle cx="60" cy="54" r="3.5" fill="#7C6EFA"/>
  <circle cx="80" cy="54" r="3.5" fill="#7C6EFA"/>
  <circle cx="61" cy="53" r="1.5" fill="white"/>
  <circle cx="81" cy="53" r="1.5" fill="white"/>
  <path d="M62 68 Q70 76 78 68" fill="#E07070"/>
  <path d="M62 68 Q70 74 78 68" fill="none" stroke="#FFE0C0" stroke-width="2"/>
  <ellipse cx="50" cy="62" rx="7" ry="4" fill="#FFB3B3" opacity="0.5"/>
  <ellipse cx="90" cy="62" rx="7" ry="4" fill="#FFB3B3" opacity="0.5"/>
  <path d="M42 50 Q52 22 70 20 Q88 22 98 50" fill="#C084FC"/>
  <ellipse cx="70" cy="23" rx="22" ry="11" fill="#C084FC"/>
  <path d="M50 38 Q60 28 70 25 Q80 28 90 38" fill="#A855F7"/>
  <text x="105" y="40" font-size="14" opacity="0.7">✦</text>
  <text x="20" y="45" font-size="10" opacity="0.5">✦</text>
</svg>`,
}
