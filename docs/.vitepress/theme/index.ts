import DefaultTheme from 'vitepress/theme'
import './custom.css'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { useData, useRoute } from 'vitepress'

export default {
    extends: DefaultTheme,

    setup()  {
        // Get frontmatter and route
        const { frontmatter } = useData();
        const route = useRoute();   
        // giscus配置
        giscusTalk({
            repo: 'stuPETER12138/stuPETER12138.github.io', //仓库
            repoId: 'R_kgDOMtP1yA', //仓库ID
            category: 'General', // 讨论分类
            categoryId: 'DIC_kwDOMtP1yM4CnLZR', //讨论分类ID
            mapping: 'pathname',
            inputPosition: 'bottom',
            lang: 'zh-CN',
        }, 
        {
          frontmatter, route
        },
        //默认值为true，表示已启用，此参数可以忽略；
        //如果为false，则表示未启用
        //您可以使用“comment:true”序言在页面上单独启用它
        true
      );
    }
}
