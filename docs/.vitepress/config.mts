// 配置智能提示
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './',
  ignoreDeadLinks: true,
  lastUpdated: true,

  markdown: {
    lineNumbers: true,
    math: true,
  },

  themeConfig: {
    logo: "/magicsquash.jpg",
    siteTitle: "魔法窝瓜",
    externalLinkIcon: true,
    footer: {
      message: "基于 MIT 许可发布",
      copyright: "版权所有 © 2024-2025 魔法窝瓜",
    },
    search: {
      provider: 'algolia',
      options: {
        appId: "P321X8CK4H",
        apiKey: "f1d2025f594cfcad4dfef90f36a9495c",
        indexName: "stupeter12138io",
        locales: {
          zh: {
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
          }
        }
      },
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '来一起学习吧', link: 'studying/index' },
      { text: '感受头脑风暴吗', link: 'thinking/index' },
    ],

    sidebar: {
      '/studying/': [
        {
          text: '来一起学习吧',
          items: [
            {
              text: '人工智能基础',
              items: [
                { text: 'Agent', link: '/studying/ai/agent' },
                { text: 'RAG', link: '/studying/ai/rag' },
                { text: 'IL', link: '/studying/ai/IL_survey' },
              ]
            },
            {
              text: '写作指北',
              items: [
                { text: 'Markdown 指北', link: '/studying/markdown/learningmd' },
                { text: 'Latex 指北', link: '/studying/markdown/latex' },
                { text: 'VIM 基础', link: '/studying/markdown/vim' },
              ]
            }
          ],
        }
      ],
      'thinking': [
        {
          text: '感受头脑风暴吗',
          items: [
            { text: 'AI_Oscars', link: '/thinking/AI_Oscars' },
            { text: 'DS-MoE', link: '/thinking/DS-MoE' },
            { text: 'Marco1', link: '/thinking/Marco1' },
          ],
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/stuPETER12138' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/671429743'},
    ]
  }
})
