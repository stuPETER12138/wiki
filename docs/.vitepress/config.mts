// 配置智能提示
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',

  srcDir: './',

  ignoreDeadLinks: true,

  markdown: {
    lineNumbers: true,
    math: true,
  },

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
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
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

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '工具与技能', link: 'skills/index' },
      { text: '机器学习', link: 'ml/index' },
      { text: '论生活', link: 'life/index' },
    ],

    sidebar: {
      '/skills/': [
        {
          text: '工具与技能',
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
                { text: 'orCAD', link: '/skills/eda/hello_cad' },
              ],
            },
          ],
        }
      ],

      'ml': [
        {
          text: '机器学习',
          items: [
            {
              text: '人工智能基础',
              items: [
                { text: 'Agent', link: '/ml/ai/agent' },
                { text: 'RAG', link: '/ml/ai/rag' },
                { text: 'IL', link: '/ml/ai/IL_survey' },
              ]
            },
            {
              text: '论文精读',
              items: [
                { text: '初识论文', link: '/ml/papers/index' },
                { text: 'AI_Oscars', link: '/ml/papers/AI_Oscars' },
                { text: 'DS-MoE', link: '/ml/papers/DS-MoE' },
                { text: 'Marco1', link: '/ml/papers/Marco1' },
              ],
            },
            {
              text: '强化学习',
              items: [
                { text: '初识 RL', link: '/ml/rl/hello_rl' },
                { text: '马尔可夫决策过程', link: '/ml/rl/mdp' },
              ],
            },
          ],
        }
      ],

      'life': [
        {
          text: '生活作息',
          items: [
            { text: '', link: '' },
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
