import { defineConfig } from 'vitepress'

//命令集：npm add -D vitepress vue less sass @mdit-vue/shared vitepress-markdown-timeline medium-zoom vitepress-plugin-comment-with-giscus

import timeline from "vitepress-markdown-timeline";

export default defineConfig({
  lang: 'zh-CN',
  title: "jasvtfvan",
  description: "我的文档博客",

  // #region fav
  head: [
    ['link', { rel: 'icon', href: '/blog/logo.png' }],
  ],
  // #endregion fav

  base: '/blog/', //网站部署到github的vitepress这个仓库里

  //cleanUrls:true, //开启纯净链接无html

  //启用深色模式
  // appearance:'dark',

  //多语言
  locales: {
    root: {
      label: '简体中文',
      lang: 'Zh_CN',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
    }
  },

  //markdown配置
  markdown: {
    //行号显示
    lineNumbers: true,

    //时间线 
    config: (md) => {
      md.use(timeline);
    },

    // 开启图片懒加载
    image: {
      lazyLoading: true
    },

  },


  lastUpdated: true, //此配置不会立即生效，需git提交后爬取时间戳，本地报错可以先注释

  //主题配置
  themeConfig: {
    //上次更新时间
    lastUpdated: {
      text: '更新于',
      formatOptions: {
        dateStyle: 'full',
      },
    },
    //左上角logo
    // logo: '/blog/logo.png',
    //logo: 'https://vitejs.cn/vite3-cn/logo-with-shadow.png', //远程引用
    //siteTitle: false, //标题隐藏

    //设置站点标题 会覆盖title
    // siteTitle: 'jasvtfvan-blog',

    //导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: '目录',
        items: [
          {
            text: '开发工具',
            items: [
              { text: 'git', link: '/devtools/git/' },
              { text: '前言', link: '/preface' },
            ],
          },
          {
            text: '基础设置',
            items: [
              { text: '快速上手', link: '/getting-started' },
              { text: '配置', link: '/configuration' },
              { text: '页面', link: '/page' },
              { text: 'Frontmatter', link: '/frontmatter' },
            ],
          },
          {
            // 分组标题3
            text: '进阶玩法',
            items: [
              { text: 'Markdown', link: '/markdown' },
              { text: '团队', link: '/team' },
              { text: '静态部署', link: '/assets' },
              { text: '样式美化', link: '/style' },
              { text: '组件', link: '/components' },
              { text: '布局插槽', link: '/layout' },
              { text: '插件', link: '/plugin' },
              { text: '更新及卸载', link: '/update' },
              { text: '搭建导航', link: '/nav/' },
            ],
          },
        ],
      },
      { text: '原博客', link: 'https://jasvtfvan.github.io/fe-blog/', noIcon: true },
    ],


    //侧边栏
    sidebar: [
      {
        text: '开发工具',
        collapsed: false,
        items: [
          { text: 'git', link: '/devtools/git/' },
          { text: '前言', link: '/preface' },
        ],
      },
      {
        text: '基础配置',
        collapsed: false,
        items: [
          { text: '快速上手', link: '/getting-started' },
          { text: '配置', link: '/configuration' },
          { text: '页面', link: '/page' },
          { text: 'Frontmatter', link: '/frontmatter' },
        ],
      },
      {
        text: '进阶玩法',
        collapsed: false,
        items: [
          { text: 'Markdown', link: '/markdown' },
          { text: '团队', link: '/team' },
          { text: '静态部署', link: '/assets' },
          { text: '样式美化', link: '/style' },
          { text: '组件', link: '/components' },
          { text: '布局插槽', link: '/layout' },
          { text: '插件', link: '/plugin' },
          { text: '更新及卸载', link: '/update' },
          { text: '搭建导航', link: '/nav/' },
        ],
      },
    ],

    //本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },


    //社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jasvtfvan/blog' },
    ],

    //手机端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式',


    //页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 by jasvtfvan',
    },


    //侧边栏文字更改(移动端)
    sidebarMenuLabel: '目录',

    //返回顶部文字修改(移动端)
    returnToTopLabel: '返回顶部',


    //大纲显示2-3级标题
    outline: {
      level: [2, 3],
      label: '当前页大纲'
    },


    //编辑本页
    //editLink: {
    //  pattern: 'https://github.com/账户名/仓库名/edit/main/docs/:path',
    //  text: '在GitHub编辑本页'
    //},


    //自定义上下页名
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

  },


})
