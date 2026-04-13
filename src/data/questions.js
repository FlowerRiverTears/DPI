/**
 * 题库数据 — 32道题目，涵盖4个维度
 * search: 主动搜索程度
 * social: 社交活跃程度
 * expression: 表达创作程度
 * immersion: 沉浸体验程度
 */
export const QUESTION_BANK = [
  {
    id: 'q1',
    dimension: '信息获取',
    emoji: '🔍',
    text: '想找一部电影看，你通常会？',
    options: [
      { label: '打开搜索框，输入关键词精准搜索', scores: { search: 10, social: 2, expression: 3, immersion: 2 } },
      { label: '打开推荐流/热搜榜，随便刷刷', scores: { search: 4, social: 4, expression: 1, immersion: 5 } },
      { label: '问问朋友最近在看什么', scores: { search: 2, social: 9, expression: 2, immersion: 1 } },
      { label: '随便打开一个 App，看它推什么', scores: { search: 1, social: 1, expression: 0, immersion: 8 } },
    ],
  },
  {
    id: 'q2',
    dimension: '信息获取',
    emoji: '🧠',
    text: '遇到不懂的问题时，你的第一个反应是？',
    options: [
      { label: '打开搜索引擎，输入问题找答案', scores: { search: 10, social: 1, expression: 2, immersion: 1 } },
      { label: '翻翻朋友圈或群聊，看有没有人聊过', scores: { search: 3, social: 9, expression: 1, immersion: 2 } },
      { label: '刷短视频平台，看能不能刷到相关内容', scores: { search: 5, social: 3, expression: 1, immersion: 7 } },
      { label: '算了，不懂就不懂了，无所谓~', scores: { search: 1, social: 1, expression: 1, immersion: 4 } },
    ],
  },
  {
    id: 'q3',
    dimension: '信息获取',
    emoji: '💡',
    text: '你在网上搜集信息时，一般会？',
    options: [
      { label: '打开多个网页/标签页，全面对比研究', scores: { search: 10, social: 1, expression: 4, immersion: 3 } },
      { label: '只点开排名最靠前的一两个结果', scores: { search: 5, social: 1, expression: 1, immersion: 4 } },
      { label: '在社群里发问，等人回答', scores: { search: 2, social: 10, expression: 3, immersion: 1 } },
      { label: '被推送内容带跑，看完都不知道当初想搜什么', scores: { search: 2, social: 2, expression: 1, immersion: 10 } },
    ],
  },
  {
    id: 'q4',
    dimension: '社交行为',
    emoji: '💬',
    text: '在微信群里看到一条有趣的内容，你通常会？',
    options: [
      { label: '直接转发到群里，跟大家一起嗨', scores: { search: 3, social: 10, expression: 5, immersion: 2 } },
      { label: '默默保存，但不发出去', scores: { search: 5, social: 2, expression: 3, immersion: 5 } },
      { label: '截图发朋友圈，配个表情包', scores: { search: 3, social: 8, expression: 9, immersion: 3 } },
      { label: '看一眼，假装没看见（其实已经收藏了）', scores: { search: 4, social: 1, expression: 2, immersion: 8 } },
    ],
  },
  {
    id: 'q5',
    dimension: '社交行为',
    emoji: '🫣',
    text: '群里聊得热火朝天，你的状态是？',
    options: [
      { label: '冲在前面，发表情包、带节奏、抢沙发', scores: { search: 3, social: 10, expression: 10, immersion: 2 } },
      { label: '偶尔插一句，主要围观', scores: { search: 4, social: 6, expression: 4, immersion: 5 } },
      { label: '默默看完，觉得有意思但不说话', scores: { search: 5, social: 2, expression: 2, immersion: 9 } },
      { label: '潜水到底，但每次都会偷偷看群消息', scores: { search: 3, social: 1, expression: 1, immersion: 10 } },
    ],
  },
  {
    id: 'q6',
    dimension: '社交行为',
    emoji: '📱',
    text: '你朋友圈更新频率大概是？',
    options: [
      { label: '每天都发，内容丰富得像个小博主', scores: { search: 4, social: 10, expression: 10, immersion: 3 } },
      { label: '偶尔发几条，记录生活', scores: { search: 5, social: 6, expression: 6, immersion: 4 } },
      { label: '几个月发一条，基本不发了', scores: { search: 4, social: 2, expression: 2, immersion: 7 } },
      { label: '朋友圈入口都没点开过几次', scores: { search: 3, social: 1, expression: 1, immersion: 8 } },
    ],
  },
  {
    id: 'q7',
    dimension: '表达创作',
    emoji: '✍️',
    text: '看完一部超喜欢的剧/书，你会？',
    options: [
      { label: '写长评/发视频，认真安利给所有人', scores: { search: 5, social: 8, expression: 10, immersion: 6 } },
      { label: '在网上疯狂搜索相关讨论、彩蛋解析', scores: { search: 10, social: 5, expression: 6, immersion: 8 } },
      { label: '在朋友圈发一句"太好看了！"配个表情包', scores: { search: 3, social: 9, expression: 5, immersion: 4 } },
      { label: '内心激动，但不发出来，自己慢慢回味', scores: { search: 4, social: 1, expression: 3, immersion: 10 } },
    ],
  },
  {
    id: 'q8',
    dimension: '表达创作',
    emoji: '🎨',
    text: '你平时会主动创作内容吗（写文章/拍视频/做图）？',
    options: [
      { label: '经常！创作已经成为日常习惯', scores: { search: 5, social: 7, expression: 10, immersion: 5 } },
      { label: '偶尔心血来潮会创作一下', scores: { search: 4, social: 5, expression: 6, immersion: 4 } },
      { label: '收藏很多，但从来不自己动手', scores: { search: 5, social: 3, expression: 2, immersion: 7 } },
      { label: '创作是什么？我只是个读者/观众', scores: { search: 3, social: 2, expression: 1, immersion: 6 } },
    ],
  },
  {
    id: 'q9',
    dimension: '注意力沉浸',
    emoji: '🌀',
    text: '刷短视频时，你经常的状态是？',
    options: [
      { label: '刷完一个马上划走，很难停下来', scores: { search: 2, social: 3, expression: 2, immersion: 7 } },
      { label: '遇到喜欢的会停下来看完，甚至反复看', scores: { search: 5, social: 4, expression: 5, immersion: 10 } },
      { label: '刷了一会儿觉得无聊，主动关掉', scores: { search: 6, social: 3, expression: 3, immersion: 4 } },
      { label: '能一直刷到手机没电，沉浸式冲浪', scores: { search: 2, social: 3, expression: 2, immersion: 9 } },
    ],
  },
  {
    id: 'q10',
    dimension: '注意力沉浸',
    emoji: '⏰',
    text: '用手机时，你最长能连续专注多久？',
    options: [
      { label: '1-2小时轻松无压力，时间不知不觉就没了', scores: { search: 3, social: 4, expression: 3, immersion: 10 } },
      { label: '30分钟左右，会主动放下休息一下', scores: { search: 6, social: 5, expression: 4, immersion: 5 } },
      { label: '15分钟就忍不住想换 App 看看有没有新消息', scores: { search: 4, social: 9, expression: 3, immersion: 4 } },
      { label: '只有5分钟，就会被各种推送打断', scores: { search: 5, social: 6, expression: 3, immersion: 3 } },
    ],
  },
  {
    id: 'q11',
    dimension: '数字生活',
    emoji: '🔔',
    text: '收到新消息通知时，你的反应是？',
    options: [
      { label: '必须秒回，一有新消息就立刻看', scores: { search: 3, social: 10, expression: 3, immersion: 3 } },
      { label: '有空时批量回复，不追着通知看', scores: { search: 6, social: 4, expression: 4, immersion: 6 } },
      { label: '先标记未读，等忙完再处理', scores: { search: 7, social: 3, expression: 3, immersion: 5 } },
      { label: '经常忘记回，有时候几天后才看到', scores: { search: 5, social: 2, expression: 2, immersion: 7 } },
    ],
  },
  {
    id: 'q12',
    dimension: '数字生活',
    emoji: '📁',
    text: '你的收藏夹/书签/笔记是什么状态？',
    options: [
      { label: '分类清晰，收藏了还会定期回看整理', scores: { search: 10, social: 4, expression: 7, immersion: 5 } },
      { label: '疯狂收藏，但基本不会再看一眼', scores: { search: 8, social: 3, expression: 2, immersion: 6 } },
      { label: '从不收藏，看到就用，用完就忘', scores: { search: 3, social: 4, expression: 2, immersion: 5 } },
      { label: '什么 App 里都有收藏，但从来没找到过', scores: { search: 5, social: 3, expression: 2, immersion: 8 } },
    ],
  },
  {
    id: 'q13',
    dimension: '信息获取',
    emoji: '🔎',
    text: '想了解某个话题，你最常用的方式是？',
    options: [
      { label: '搜索引擎 + 多篇文章交叉验证', scores: { search: 10, social: 2, expression: 3, immersion: 3 } },
      { label: '刷热搜/热门，看大家在讨论什么', scores: { search: 4, social: 7, expression: 2, immersion: 7 } },
      { label: '关注的专业博主/KOL有没有相关内容', scores: { search: 5, social: 8, expression: 5, immersion: 5 } },
      { label: '随便刷刷，推什么看什么，不主动找', scores: { search: 1, social: 3, expression: 1, immersion: 9 } },
    ],
  },
  {
    id: 'q14',
    dimension: '社交行为',
    emoji: '👀',
    text: '你关注陌生博主的频率高吗？',
    options: [
      { label: '经常刷到好看的就关注，列表很长', scores: { search: 5, social: 8, expression: 4, immersion: 6 } },
      { label: '只关注认识的人，朋友列表比博主多', scores: { search: 3, social: 10, expression: 3, immersion: 3 } },
      { label: '很少关注，宁可每次搜索找内容', scores: { search: 9, social: 2, expression: 3, immersion: 4 } },
      { label: '几乎不关注，只看系统推送', scores: { search: 2, social: 2, expression: 1, immersion: 8 } },
    ],
  },
  {
    id: 'q15',
    dimension: '表达创作',
    emoji: '📸',
    text: '拍照/拍视频后，你会怎么处理？',
    options: [
      { label: '认真修图/剪辑，加上文案发布出去', scores: { search: 4, social: 8, expression: 10, immersion: 4 } },
      { label: '简单修一下，发朋友圈或私藏', scores: { search: 3, social: 8, expression: 6, immersion: 3 } },
      { label: '拍完就存相册，基本不发', scores: { search: 4, social: 2, expression: 2, immersion: 7 } },
      { label: '很少拍照/拍视频，手机里没什么存货', scores: { search: 3, social: 1, expression: 1, immersion: 6 } },
    ],
  },
  {
    id: 'q16',
    dimension: '注意力沉浸',
    emoji: '🎧',
    text: '工作时，你会同时开几个 App？',
    options: [
      { label: '一个，专注干完再换', scores: { search: 8, social: 3, expression: 5, immersion: 6 } },
      { label: '两三个，边聊边干是常态', scores: { search: 4, social: 9, expression: 4, immersion: 5 } },
      { label: '一堆！工作5分钟，冲浪2小时', scores: { search: 2, social: 5, expression: 3, immersion: 9 } },
      { label: '经常被消息打断，根本无法专注', scores: { search: 3, social: 8, expression: 3, immersion: 4 } },
    ],
  },
  {
    id: 'q17',
    dimension: '信息获取',
    emoji: '📰',
    text: '你获取新闻的主要渠道是？',
    options: [
      { label: '主动搜索，用关键词找可靠来源', scores: { search: 10, social: 2, expression: 3, immersion: 2 } },
      { label: '系统推送/热搜，刷到什么看什么', scores: { search: 3, social: 5, expression: 2, immersion: 8 } },
      { label: '朋友圈转发和朋友推荐', scores: { search: 2, social: 10, expression: 3, immersion: 3 } },
      { label: '不太关心新闻，觉得跟自己关系不大', scores: { search: 2, social: 2, expression: 2, immersion: 6 } },
    ],
  },
  {
    id: 'q18',
    dimension: '社交行为',
    emoji: '❤️',
    text: '看到喜欢的内容，你会点赞吗？',
    options: [
      { label: '经常点赞，还会顺手评论互动', scores: { search: 3, social: 10, expression: 5, immersion: 4 } },
      { label: '默默点赞，但不发声', scores: { search: 4, social: 4, expression: 2, immersion: 7 } },
      { label: '收藏了，点赞是什么不知道', scores: { search: 6, social: 2, expression: 3, immersion: 6 } },
      { label: '看完了就是看完了，什么都不做', scores: { search: 4, social: 1, expression: 1, immersion: 7 } },
    ],
  },
  {
    id: 'q19',
    dimension: '表达创作',
    emoji: '💭',
    text: '你在评论区活跃吗？',
    options: [
      { label: '经常神评论，金句频出，评论区比正文精彩', scores: { search: 4, social: 10, expression: 10, immersion: 5 } },
      { label: '偶尔评论，一般是回应别人', scores: { search: 4, social: 7, expression: 5, immersion: 4 } },
      { label: '只看热评，很少自己发言', scores: { search: 5, social: 4, expression: 3, immersion: 8 } },
      { label: '评论区？那个区域是给别人的', scores: { search: 3, social: 1, expression: 1, immersion: 8 } },
    ],
  },
  {
    id: 'q20',
    dimension: '数字生活',
    emoji: '🌙',
    text: '睡前最后一件事通常是？',
    options: [
      { label: '设定好明天的闹钟，关灯睡觉', scores: { search: 6, social: 3, expression: 2, immersion: 4 } },
      { label: '再刷一会儿手机，不知不觉就睡着了', scores: { search: 3, social: 4, expression: 2, immersion: 10 } },
      { label: '回完最后几条消息才安心', scores: { search: 3, social: 9, expression: 3, immersion: 5 } },
      { label: '躺在床上回忆今天看过的内容', scores: { search: 6, social: 2, expression: 4, immersion: 8 } },
    ],
  },
  {
    id: 'q21',
    dimension: '信息获取',
    emoji: '🎯',
    text: '网上买东西前，你会？',
    options: [
      { label: '搜索+看测评+比价，研究半小时以上', scores: { search: 10, social: 1, expression: 3, immersion: 3 } },
      { label: '看直播时被主播推荐，直接下单', scores: { search: 3, social: 7, expression: 2, immersion: 7 } },
      { label: '问朋友推荐，然后跟着买', scores: { search: 3, social: 10, expression: 2, immersion: 2 } },
      { label: '平台推什么就买什么，不挑', scores: { search: 1, social: 2, expression: 1, immersion: 8 } },
    ],
  },
  {
    id: 'q22',
    dimension: '社交行为',
    emoji: '🤝',
    text: '你在社交媒体上有多少"点赞之交"？',
    options: [
      { label: '几百个，很多都没说过话', scores: { search: 4, social: 8, expression: 4, immersion: 5 } },
      { label: '主要是真实朋友，数量不多', scores: { search: 4, social: 9, expression: 4, immersion: 4 } },
      { label: '很少社交媒体，基本没有', scores: { search: 6, social: 1, expression: 2, immersion: 6 } },
      { label: '朋友列表空空，账号像个小号', scores: { search: 3, social: 1, expression: 1, immersion: 8 } },
    ],
  },
  {
    id: 'q23',
    dimension: '注意力沉浸',
    emoji: '📺',
    text: '追剧/追综艺时，你是哪种观众？',
    options: [
      { label: '倍速刷完，快速获取剧情满足感', scores: { search: 8, social: 3, expression: 3, immersion: 5 } },
      { label: '原速看，边看边发弹幕跟网友讨论', scores: { search: 4, social: 10, expression: 7, immersion: 8 } },
      { label: '沉浸式追剧，完全进入剧情，停不下来', scores: { search: 3, social: 3, expression: 4, immersion: 10 } },
      { label: '看5分钟就放弃了，注意力撑不住', scores: { search: 4, social: 3, expression: 2, immersion: 3 } },
    ],
  },
  {
    id: 'q24',
    dimension: '数字生活',
    emoji: '🔐',
    text: '你对个人隐私数据（位置/搜索记录）的态度是？',
    options: [
      { label: '很在意，会手动关闭各种权限', scores: { search: 9, social: 3, expression: 4, immersion: 4 } },
      { label: '偶尔在意，大平台的基本会管一管', scores: { search: 6, social: 5, expression: 3, immersion: 5 } },
      { label: '无所谓的，反正大家都是这样', scores: { search: 3, social: 6, expression: 2, immersion: 7 } },
      { label: '隐私是什么？从来没关注过', scores: { search: 1, social: 5, expression: 1, immersion: 9 } },
    ],
  },
  {
    id: 'q25',
    dimension: '信息获取',
    emoji: '🎓',
    text: '想学一门新技能，你会从哪里开始？',
    options: [
      { label: '列好学习计划，搜索教程，系统学习', scores: { search: 10, social: 2, expression: 6, immersion: 5 } },
      { label: '找博主跟学，边做边问边调整', scores: { search: 5, social: 8, expression: 7, immersion: 6 } },
      { label: '刷视频刷到就算学过了', scores: { search: 3, social: 4, expression: 2, immersion: 8 } },
      { label: '收藏夹吃灰，计划永远在"明天"开始', scores: { search: 5, social: 2, expression: 2, immersion: 7 } },
    ],
  },
  {
    id: 'q26',
    dimension: '表达创作',
    emoji: '🗣️',
    text: '你愿意在网上实名发表观点吗？',
    options: [
      { label: '愿意！有观点就要大声说出来', scores: { search: 5, social: 9, expression: 10, immersion: 3 } },
      { label: '用昵称可以，真名绝对不行', scores: { search: 5, social: 6, expression: 6, immersion: 4 } },
      { label: '只点赞支持，不发表自己看法', scores: { search: 4, social: 5, expression: 3, immersion: 7 } },
      { label: '默默潜水，观点都是内心戏', scores: { search: 4, social: 1, expression: 2, immersion: 9 } },
    ],
  },
  {
    id: 'q27',
    dimension: '注意力沉浸',
    emoji: '🎮',
    text: '玩游戏时，你是哪种类型？',
    options: [
      { label: '竞技型：研究攻略、打法，追求高分/段位', scores: { search: 10, social: 5, expression: 5, immersion: 6 } },
      { label: '社交型：组队开黑，聊天比游戏好玩', scores: { search: 4, social: 10, expression: 5, immersion: 5 } },
      { label: '休闲型：随便玩玩放松，不肝不卷', scores: { search: 4, social: 4, expression: 3, immersion: 8 } },
      { label: '很少玩游戏，手机里没有游戏 App', scores: { search: 4, social: 2, expression: 2, immersion: 4 } },
    ],
  },
  {
    id: 'q28',
    dimension: '信息获取',
    emoji: '🤖',
    text: '你会主动使用 AI 工具（如 ChatGPT）来搜索/获取信息吗？',
    options: [
      { label: '经常用，已经成为主要搜索方式之一', scores: { search: 10, social: 3, expression: 5, immersion: 4 } },
      { label: '偶尔用，关键时刻会试试', scores: { search: 6, social: 4, expression: 4, immersion: 4 } },
      { label: '听说过但没用过，不知道怎么用', scores: { search: 3, social: 3, expression: 2, immersion: 5 } },
      { label: 'AI是什么？没兴趣了解', scores: { search: 1, social: 2, expression: 1, immersion: 6 } },
    ],
  },
  {
    id: 'q29',
    dimension: '数字生活',
    emoji: '📊',
    text: '你平均每天花多少时间在手机上？',
    options: [
      { label: '2小时以内，能控制住自己', scores: { search: 7, social: 5, expression: 4, immersion: 3 } },
      { label: '3-5小时，日常必需时间', scores: { search: 5, social: 7, expression: 4, immersion: 6 } },
      { label: '5-8小时，手机是主要娱乐工具', scores: { search: 3, social: 6, expression: 4, immersion: 8 } },
      { label: '8小时以上，不是在玩手机就是在找手机', scores: { search: 2, social: 5, expression: 3, immersion: 10 } },
    ],
  },
  {
    id: 'q30',
    dimension: '社交行为',
    emoji: '🌐',
    text: '在网上遇到不同意见时，你会？',
    options: [
      { label: '理性辩论，用论据说服对方', scores: { search: 8, social: 7, expression: 9, immersion: 3 } },
      { label: '拉黑/屏蔽，眼不见为净', scores: { search: 5, social: 4, expression: 3, immersion: 6 } },
      { label: '默默划过，不参与争吵', scores: { search: 4, social: 3, expression: 2, immersion: 9 } },
      { label: '直接无视，从来不跟人网上吵架', scores: { search: 3, social: 1, expression: 1, immersion: 8 } },
    ],
  },
  {
    id: 'q31',
    dimension: '注意力沉浸',
    emoji: '🎧',
    text: '你使用音乐/播客类 App 的频率是？',
    options: [
      { label: '每天必听，已经是不可或缺的生活方式', scores: { search: 5, social: 4, expression: 4, immersion: 10 } },
      { label: '偶尔听，主要在学习/运动时', scores: { search: 5, social: 4, expression: 4, immersion: 6 } },
      { label: '很少用，更喜欢看视频类内容', scores: { search: 4, social: 4, expression: 3, immersion: 5 } },
      { label: '几乎不用，手机里没有这类 App', scores: { search: 3, social: 2, expression: 2, immersion: 3 } },
    ],
  },
  {
    id: 'q32',
    dimension: '表达创作',
    emoji: '📌',
    text: '你会把自己的数字足迹（收藏/笔记/记录）整理成体系吗？',
    options: [
      { label: '有完整的数字管理系统，定期整理', scores: { search: 10, social: 4, expression: 8, immersion: 5 } },
      { label: '有时候会整理，但经常半途而废', scores: { search: 6, social: 4, expression: 5, immersion: 5 } },
      { label: '从来不整理，收藏就是"收藏"而不是"记住"', scores: { search: 5, social: 3, expression: 2, immersion: 8 } },
      { label: '不需要整理，需要什么再搜索就好', scores: { search: 8, social: 2, expression: 2, immersion: 4 } },
    ],
  },
]

/**
 * 根据测试模式抽取题目
 * quick: 6题（均衡覆盖各维度）
 * standard: 16题（随机打乱）
 * deep: 全部32题
 */
export function getQuestionsForMode(mode) {
  if (mode === 'quick') {
    const indices = [0, 3, 6, 8, 12, 17]
    return indices.map(i => QUESTION_BANK[i])
  }
  if (mode === 'standard') {
    const shuffled = [...QUESTION_BANK].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 16)
  }
  return [...QUESTION_BANK]
}
