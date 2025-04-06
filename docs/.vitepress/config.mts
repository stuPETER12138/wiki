// 配置智能提示
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '魔法窝瓜',

  lang: 'zh-Hans',

  srcDir: './',

  ignoreDeadLinks: true,

  markdown: {
    lineNumbers: true,
    math: true,
  },

  head: [
    ['link', { rel: 'icon', type:"image/jpg", href: '/magicsquash.jpg' }],
  ],

  themeConfig: {
    logo: "/magicsquash.jpg",

    siteTitle: "魔法窝瓜",

    externalLinkIcon: true,

    editLink: {
      pattern: 'https://github.com/stuPETER12138/stuPETER12138.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} 魔法窝瓜`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '本页目录',
      level: 'deep',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      },
    },

    returnToTopLabel: '回到顶部',

    sidebarMenuLabel: '菜单',

    darkModeSwitchLabel: '主题',

    lightModeSwitchTitle: '切换到浅色模式',

    darkModeSwitchTitle: '切换到深色模式',

    skipToContentLabel: '跳转到内容',

    search: {
      provider: 'algolia',
      options: {
        appId: "P321X8CK4H",
        apiKey: "f1d2025f594cfcad4dfef90f36a9495c",
        indexName: "stupeter12138io",
        placeholder: '搜索文档',
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询条件',
              resetButtonAriaLabel: '清除查询条件',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消'
            },
            startScreen: {
              recentSearchesTitle: '搜索历史',
              noRecentSearchesText: '没有搜索历史',
              saveRecentSearchButtonTitle: '保存至搜索历史',
              removeRecentSearchButtonTitle: '从搜索历史中移除',
              favoriteSearchesTitle: '收藏',
              removeFavoriteSearchButtonTitle: '从收藏中移除'
            },
            errorScreen: {
              titleText: '无法获取结果',
              helpText: '你可能需要检查你的网络连接'
            },
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
              searchByText: '搜索提供者'
            },
            noResultsScreen: {
              noResultsText: '无法找到相关结果',
              suggestedQueryText: '你可以尝试查询',
              reportMissingResultsText: '你认为该查询应该有结果？',
              reportMissingResultsLinkText: '点击反馈'
            }
          }
        }
      },
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '技能与工具', link: 'skills/hello' },
      { text: '机器学习', link: 'ml/hello' },
      { text: '自由探索', link: 'explore/basic/math' },
      { text: '归途思语', link: 'thoughts/hello' },
    ],

    sidebar: {
      '/skills/': [
        {
          text: '工具与技能',
          link: '/skills/hello',
          items: [
            {
              text: '写作指北',
              items: [
                { text: 'Markdown 指北', link: '/skills/markdown/learningmd' },
                { text: 'Latex 指北', link: '/skills/markdown/latex' },
                { text: 'VIM 基础', link: '/skills/markdown/vim' },
              ]
            },
            {
              text: '工科软件',
              items: [
                { text: 'orCAD', link: '/skills/eda/orcad' },
              ],
            },
            {
              text: '自动化工具',
              items: [
                { text: 'GitHub Action', link: '/skills/automation/action' },
                { text: 'Docker', link: '/skills/automation/docker' },
                { text: 'toml', link: '/skills/automation/toml' },
                { text: 'GPU 服务器命令', link: '/skills/automation/server' },
              ],
            },
          ],
        }
      ],

      'ml': [
        {
          text: '机器学习',
          link: '/ml/hello',
          items: [
            {
              text: '人工智能基础',
              items: [
                { text: 'Agent', link: '/ml/ai/agent' },
                { text: 'RAG', link: '/ml/ai/rag' },
              ]
            },
            {
              text: '论文精读',
              items: [
                { text: '初识论文', link: '/ml/papers/papers' },
                { text: 'AI_Oscars', link: '/ml/papers/AI_Oscars' },
                { text: 'DS-MoE', link: '/ml/papers/DS-MoE' },
                { text: 'Marco1', link: '/ml/papers/Marco1' },
                { text: 'GRPO', link: '/ml/papers/GRPO' },
                { text: 'Optimus-2', link: '/ml/papers/optimus2' },
              ],
            },
            {
              text: '强化学习',
              items: [
                { text: '初识 RL', link: '/ml/rl/rl' },
                { text: '马尔可夫决策过程', link: '/ml/rl/mdp' },
                { text: '贝尔曼方程', link: '/ml/rl/bellman' },
                { text: '动态规划', link: '/ml/rl/dp' },
                { text: '蒙特卡洛方法', link: '/ml/rl/mc' },
                { text: 'TD 方法', link: '/ml/rl/td' },
                { text: 'DQN', link: '/ml/rl/dqn' },
                { text: '策略梯度法', link: '/ml/rl/pg' },
                { text: 'PPO', link: '/ml/rl/ppo' },
                { text: '大模型中的强化学习', link: '/ml/rl/rl4llm' },
              ],
            },
          ],
        }
      ],

      'explore': [
        {
          text: '数理知识',
          // collapsed: false,
          items: [
            { text: '了解数学', link: '/explore/basic/math' },
            { text: '对数概率', link: '/explore/basic/logits' },
            { text: '挂谷猜想', link: '/explore/basic/kakeya' },
            { text: '黎曼', link: '/explore/basic/riemann' },
            {
              text: '弦理论',
              items: [
              ],
            },
          ],
        },
        {
          text: '航天工程',
          // collapsed: false,
          items: [
          ],
        },
        {
          text: '一些好玩儿的',
          // collapsed: false,
          items: [
            { text: '窝瓜表情包', link: '/explore/interesting/memes' },
          ],
        },
      ],

      'thoughts': [
        {
          text: '归途思语',
          link: '/thoughts/hello',
          items: [
            { text: '从死亡、疯狂、自恋、创伤至情色', link: '/thoughts/2024' },
            { text: '友谊', link: '/thoughts/friendship' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/stuPETER12138' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/671429743'},
    ]
  }
})
