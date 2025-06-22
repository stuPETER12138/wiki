import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'

export default defineConfig({
  title: '魔法窝瓜',

  lang: 'zh-Hans',

  srcDir: './',

  ignoreDeadLinks: true,

  markdown: {
    lineNumbers: true,
    math: true,
    config: (md) => {
      md.use(footnote);
    },
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
      { text: '🏠首页', link: '/' },
      { text: '🛠️技能与工具', link: 'skills/hello' },
      { text: '🤓知识探索', link: 'explore/aerospace/apod' },
      { text: '🤔归途思语', link: 'thoughts/hello' },
    ],

    sidebar: {
      '/skills/': [
        {
          text: '有趣的工具',
          link: '/skills/hello',
          items: [
            { text: 'Markdown 指北', link: '/skills/tools/learningmd' },
            { text: 'Latex 指北', link: '/skills/tools/latex' },
            { text: 'VIM 基础', link: '/skills/tools/vim' },
            { text: 'orCAD', link: '/skills/tools/orcad' },
            { text: 'GitHub Action', link: '/skills/tools/action' },
            { text: 'Docker', link: '/skills/tools/docker' },
          ],
        },
        {
          text: 'Python是最好的语言',
          items: [
            { text: 'uv', link: '/skills/python/uv' },
            { text: 'toml', link: '/skills/python/toml' },
            { text: 'GPU 服务器命令', link: '/skills/python/server' },
          ],
        },
        {
          text: '强化学习',
          items: [
            { text: '初识 RL', link: '/skills/rl/rl' },
            { text: '马尔可夫决策过程', link: '/skills/rl/mdp' },
            { text: '贝尔曼方程', link: '/skills/rl/bellman' },
            { text: '动态规划', link: '/skills/rl/dp' },
            { text: '蒙特卡洛方法', link: '/skills/rl/mc' },
            { text: 'TD 方法', link: '/skills/rl/td' },
            { text: 'DQN', link: '/skills/rl/dqn' },
            { text: '策略梯度法', link: '/skills/rl/pg' },
            { text: 'PPO', link: '/skills/rl/ppo' },
            { text: '大模型中的强化学习', link: '/skills/rl/rl4llm' },
          ],
        },
      ],

      'explore': [
        {
          text: '数学',
          items: [
            { text: '对数概率', link: '/explore/math/logits' },
            { text: '挂谷猜想', link: '/explore/math/kakeya' },
            { text: '黎曼', link: '/explore/math/riemann' },
          ],
        },
        {
          text: '航天工程',
          items: [
            { text: '每日一图', link: '/explore/aerospace/apod' },
            { text: '齐奥尔科夫斯基公式', link: '/explore/aerospace/tsiolkovsky' },
          ],
        },
        {
          text: '人工智能',
          items: [
            { text: '大模型的后训练', link: '/explore/ai/fine-tuning' },
          ],
        },
        {
          text: '一些好玩儿的',
          items: [
            { text: '窝瓜表情包', link: '/explore/interesting/memes' },
            { text: '海参崴游记', link: '/explore/interesting/Vladivostok' },
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
            { text: '下一顿吃什么', link: '/thoughts/next' },
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
