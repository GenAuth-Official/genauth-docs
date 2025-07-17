const sidebar = require("./sidebar");
const plugins = require("./plugins");
const { basePath, config } = require("./env");
const path = require("path");
const webpack = require("webpack");

const gaEnabled = config && config.ga && config.ga.enabled;
const gTrackingId = config && config.ga && config.ga.gTrackingId;

const head = [
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "https://genauth.ai/favicon.ico",
    },
  ],
  [
    "script",
    {},
    `!function(){var e=window.Cohere=window.Cohere||[];if(e.invoked)console.error("Tried to load Cohere twice");else{e.invoked=!0,e.snippet="0.2",e.methods=["init","identify","stop","showCode","getSessionUrl","makeCall","addCallStatusListener","removeCallStatusListener","widget","addSessionUrlListener","removeSessionUrlListener",],e.methods.forEach(function(o){e[o]=function(){var t=Array.prototype.slice.call(arguments);t.unshift(o),e.push(t)}});var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src="https://static.cohere.so/main.js",o.crossOrigin="anonymous";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(o,t)}}();`,
  ],
  [
    "script",
    {},
    `if(window.location.hostname === "docs.genauth.ai"){window.Cohere.init("PUkf845sOZgDd59V6aTJCsuJ");}`,
  ],
];

if (gaEnabled) {
  head.push([
    "script",
    {
      async: true,
      src: `https://www.googletagmanager.com/gtag/js?id=${gTrackingId}`,
    },
  ]);
  head.push([
    "script",
    {},
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${gTrackingId}');`,
  ]);
}

module.exports = {
  base: basePath,
  shouldPreload: () => false,
  shouldPrefetch: () => false,
  title: "文档",
  description: "GenAuth 文档",
  plugins,
  feedbackUrl: `https://open.feishu.cn/open-apis/bot/hook/f5e7517d-07cb-4519-ab6c-577ad8653ca2`,
  markdown: {
    // lineNumbers: true,
    anchor: {
      permalinkSymbol: "¶",
    },
    toc: {
      includeLevel: [2, 3, 4, 5],
    },
    extractHeaders: ["h2", "h3", "h4", "h5"],
    extendMarkdown: (md) => {
      // 使用更多的 markdown-it 插件!
      md.use(require("markdown-it-include"), "docs");
    },
  },
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    // "/": {
    //   lang: "zh-CN", // this will be set as the lang attribute on <html>
    //   title: "GenAuth 文档",
    //   description: "GenAuth 文档",
    //   navbarTitle: "文档",
    //   relatedDocText: "相关文档",
    //   devDocText: "开发文档",
    //   apiDocText: "API 文档",
    //   githubFeedback: "在 Github 上反馈",
    //   githubEdit: "编辑",
    //   brandName: sidebar.BRAND_NAME_ZH_CN,
    //   brandNameLowerCase: sidebar.BRAND_NAME_ZH_CN_LOWER_CASE,
    //   back: "回到列表",
    //   next: "下一步",
    //   previous: "上一步",
    //   lastStep: "我知道了，返回列表",
    // },
    "/": {
      lang: "en-US",
      title: "GenAuth Docs",
      description: "GenAuth Docs",
      navbarTitle: "Documents",
      relatedDocText: "Related documents",
      devDocText: "Development documents",
      apiDocText: "API documents",
      githubFeedback: "Feedback on Github",
      githubEdit: "Edit",
      brandName: sidebar.BRAND_NAME_EN_US,
      brandNameLowerCase: sidebar.BRAND_NAME_EN_US_LOWER_CASE,
      back: "Back to list",
      next: "Next",
      previous: "Previous",
      lastStep: "I know, return to the list",
    },
  },
  head,
  themeConfig: {
    logo: "https://authing-cdn-cn-prod.oss-cn-beijing.aliyuncs.com/genauth/logo-transparent.png",
    officeSiteDomain: "genauth.ai",
    officeSiteUrl: "https://genauth.ai",
    consoleDomain: "https://console.genauth.ai",
    sampleAppDomain: "sample-sso.genauth.ai",
    apiDomain: "https://core.genauth.ai",
    oldDocUrl: "https://old-docs.genauth.ai",
    smoothScroll: true,
    activeHeaderLinks: false,
    lastUpdated: "Last Updated",
    sidebarDepth: 0,
    locales: {
      "/": {
        logoTooltip: "Go to GenAuth official website",
        selectText: "中文 / EN",
        label: "简体中文",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Update time",
        prevDoc: "Previous article",
        nextDoc: "Next article",
        submitImmediate: "Submit immediately",
        knowMore: "Learn more",
        company: "Company",
        sdkAccess: "SDK access",
        search: "Search title",
        searchInDoc: "Search in the document",
        oldVersion: "Old version",
        nav: [
          { text: "Concepts", link: "/concepts/" },
          { text: "User Guide", link: "/guides/" },
          {
            text: "Development Integration",
            link: "/reference/",
            // tag: "V2",
            // links: [
            // {
            // text: "V2 Documentation",
            // link: "/reference/",
            // isRouter: true,
            // },
            // {
            // text: "V3 Documentation",
            // link: "https://docs.genauth.ai/v3",
            // },
            // ],
          },
          {
            text: "AgentAuth",
            link: "/agent/",
          },
          {
            text: "Metadata",
            link: "/metadata/",
            hidden: true,
          },
          // {
          //   text: "Application Integration",
          //   link: "/integration/",
          // },
          // {
          //   text: "Join APN",
          //   link: "/apn/",
          // },
          {
            link: "/reference-new/",
            text: "Development Integration",
            hidden: true,
          },
          {
            link: "/tenant/",
            text: "Multi-tenant (beta)",
            hidden: true,
          },
          {
            link: "/console-using/",
            text: "Console Documentation",
            hidden: true,
          },
          {
            link: "/multi-tenant-console/",
            text: "Multi-tenant Console",
            hidden: true,
          },
          {
            link: "/tenant-console/",
            text: "Tenant Console",
            hidden: true,
          },
          {
            link: "/tenant-app-demo/",
            text: "Saas Application Demo",
            hidden: true,
          },
        ],
        sidebar: sidebar.zhCnNavBar,
        feedback: {
          title: "Evaluate this document",
          useful: "Helpful",
          useless: "Useless",
          editTip: "If you have suggestions or errors, you can directly",
          editLink:
            "If you have suggestions or errors, you can directly feedback on Github",
          help: `If you encounter other problems, immediately <a href="https://forum.genauth.ai/" target="_blank">Contact us</a>`,
          successTip: `Submission successful, thank you for your feedback`,
          uselessConfig: {
            title: "Did you encounter the following problems",
            reasons: [
              {
                value: "Content error",
                label: "Content error",
              },
              {
                value: "Missing code/image examples",
                label: "Missing code/image examples",
              },
              {
                value: "Not updated in time",
                label: "Not updated in time",
              },
              {
                value: "Too simple/steps to be improved",
                label: "Too simple/steps to be improved",
              },
              {
                value: "Link error",
                label: "Link error",
              },
              {
                value: "Other",
                label: "Other",
              },
            ],
            customReasonPlaceholder:
              "Please describe in detail the problems encountered in using the document or suggestions for improvement (optional)",
          },
        },
        footer: {
          sections: [
            {
              title: "User identity management",
              links: [
                {
                  text: "Integrated third-party login",
                  link: "/guides/connections/",
                },
                // {
                //   text: "Mobile phone number flash verification",
                //   link: "https://genauth.ai/verify",
                // },
                // {
                //   text: "Universal login form component",
                //   link: "/reference/ui-components/",
                // },
                {
                  text: "Customized authentication process",
                  link: "/guides/pipeline/",
                },
              ],
            },
            {
              title: "Enterprise internal management",
              links: [
                {
                  text: "Single sign-on",
                  link: "/guides/app-new/sso/",
                },
                {
                  text: "Multi-factor authentication",
                  link: "/guides/security/mfa/",
                },
                {
                  text: "Permission management",
                  link: "/guides/access-control/",
                },
              ],
            },
            {
              title: "Developer",
              links: [
                {
                  text: "Development Documentation",
                  link: "/reference/",
                },
                {
                  text: "GitHub",
                  link: "https://github.com/GenAuth-Official",
                },
                // {
                //   text: "Community User Center",
                //   link: "https://forum.genauth.ai/",
                // },
              ],
            },
          ],
          socials: [
            {
              icon: "authing-github",
              link: "https://github.com/GenAuth-Official",
              title: "GitHub",
            },
            {
              icon: "authing-chat-smile-line",
              // link: "https://forum.genauth.ai/",
              title: "Forum",
            },
            // {
            //   icon: "authing-zhihu",
            //   link: "https://www.zhihu.com/org/authing",
            //   title: "知乎",
            // },
          ],
          // serviceStatus: "Service Status",
          // contactPhone: "400 888 2106",
          contactEmail: "official@genauth.ai",
          contactAddress:
            "16th Floor, Building B, Beichen Century Center, Chaoyang District, Beijing (Total)",
          contactChenduAddress:
            "Room 406, 4th Floor, Block B, No. 200, Tianfu Fifth Street, High-tech Zone, Chengdu (Branch)",
          companyName: "© Beijing Steamory Technology Co., Ltd.",
        },
      },
      // "/en/": {
      //   logoTooltip: "Visit genauth.ai",
      //   // text for the language dropdown
      //   selectText: "中文 / EN",
      //   // label for this locale in the language dropdown
      //   label: "English",
      //   // Aria Label for locale in the dropdown
      //   ariaLabel: "中文 / EN",
      //   // text for the edit-on-github link
      //   editLinkText: "Edit this page on GitHub",
      //   lastUpdated: "Update Time",
      //   prevDoc: "Prev",
      //   nextDoc: "Next",
      //   submitImmediate: "Submit",
      //   knowMore: "Know More",
      //   company: "Company",
      //   sdkAccess: "SDK Access",
      //   search: "Search",
      //   searchInDoc: "Search in Docs",
      //   oldVersion: "Old Version",
      //   nav: [
      //     { text: "Concept", link: "/en/concepts/" },
      //     { text: "workflow", link: "/en/workflow/" },
      //     { text: "Guides", link: "/en/guides/" },
      //     { text: "Development Integration", link: "/en/reference/" },
      //     {
      //       text: "Application integration",
      //       link: "/en/integration/"
      //     }
      //   ],
      //   sidebar: sidebar.enUsNavBar,
      //   feedback: {
      //     title: "Does this article solve your problem?",
      //     useful: "Useful",
      //     useless: "Useless",
      //     editTip: "",
      //     editLink: "Edit on github",
      //     help: `If you encounter other problems, you can contact us at <a href="https://forum.genauth.ai/" target="_blank">authing-chat/community</a>.`,
      //     successTip: `Submitted successfully! Thank you very much for your feedback, we will continue to work hard to do better!`,
      //     uselessConfig: {
      //       title: "Does this article solve your problem?",
      //       reasons: [
      //         {
      //           value: "内容错误",
      //           label: "Content error"
      //         },
      //         {
      //           value: "缺少代码/图片示例",
      //           label: "Missing code/image example"
      //         },
      //         {
      //           value: "更新不及时",
      //           label: "Update is not timely"
      //         },
      //         {
      //           value: "太简单/步骤待完善",
      //           label: "Too simple/steps to be perfected"
      //         },
      //         {
      //           value: "链接错误",
      //           label: "Link error"
      //         },
      //         {
      //           value: "其他",
      //           label: "Other"
      //         }
      //       ],
      //       customReasonPlaceholder:
      //         "Please describe in detail the problems encountered in the use of the document or suggestions for improvement (optional)"
      //     }
      //   },
      //   footer: {
      //     sections: [
      //       {
      //         title: "User identity management",
      //         links: [
      //           {
      //             text: "Integrated third-party login",
      //             link: "/en/guides/connections/"
      //           },
      //           {
      //             text: "Mobile phone number flash check",
      //             link: "https://genauth.ai/verify"
      //           },
      //           {
      //             text: "Universal login form component",
      //             link: "/en/reference/ui-components/"
      //           },
      //           {
      //             text: "Custom authentication process",
      //             link: "/en/guides/pipeline/"
      //           }
      //         ]
      //       },
      //       {
      //         title: "Enterprise internal management",
      //         links: [
      //           {
      //             text: "Single Sign On",
      //             link: "/en/guides/authentication/sso/"
      //           },
      //           {
      //             text: "Multi-factor Authentication",
      //             link: "/en/guides/authentication/mfa/"
      //           },
      //           {
      //             text: "Authority Management",
      //             link: "/en/guides/access-control/"
      //           }
      //         ]
      //       },
      //       {
      //         title: "Developers",
      //         links: [
      //           {
      //             text: "Development Document",
      //             link: "/en/reference/"
      //           },
      //           {
      //             text: "Framework Integration",
      //             link: "/en/reference/frameworks"
      //           },
      //           {
      //             text: "Blog",
      //             link: "https://genauth.ai/blog"
      //           },
      //           {
      //             text: "GitHub",
      //             link: "https://github.com/authing"
      //           },
      //           {
      //             text: "Community User Center",
      //             link: "https://forum.genauth.ai/"
      //           }
      //         ]
      //       }
      //     ],
      //     socials: [
      //       {
      //         icon: "authing-github",
      //         link: "https://github.com/Authing",
      //         title: "GitHub"
      //       },
      //       {
      //         icon: "authing-chat-smile-line",
      //         link: "https://forum.genauth.ai/",
      //         title: "Forum"
      //       },
      //       {
      //         icon: "authing-zhihu",
      //         link: "https://www.zhihu.com/org/authing",
      //         title: "ZhiHu"
      //       }
      //     ],
      //     // serviceStatus: "Service Status",
      //     contactPhone: "400 888 2106",
      //     contactEmail: "sales@genauth.ai",
      //     contactAddress:
      //       "16 / F, Block B, NORTH STAR CENTURY CENTER, Beijing(Total)",
      //     contactChenduAddress:
      //       "room 406, 4th floor, zone B, building 1, No. 200, Tianfu Fifth Street, Chengdu(branch)",
      //     icp: "Beijing ICP No.19051205-1",
      //     companyName: "© Beijing Steamory Technology Co."
      //   }
      // }
    },
  },
  configureWebpack: (config, isServer) => {
    return {
      // optimization: {
      //   splitChunks: isServer
      //     ? undefined
      //     : {
      //         minSize: 5000000,
      //         maxSize: 8000000,
      //         maxInitialRequests: 5,
      //       },
      // },
      output: {
        publicPath: process.env.PUBLIC_URL || basePath,
      },
      resolve: {
        alias: {
          "@imagesZhCn": path.resolve(__dirname, "../images"),
          // "@imagesEnUs": path.resolve(__dirname, "../en/images")
        },
      },
      plugins: [
        process.env.npm_lifecycle_event !== "docs:dev" &&
          new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 50,
          }),
        // new webpack.optimize.MinChunkSizePlugin({
        //   minChunkSize: 500000, // Minimum number of characters
        // }),
      ].filter(Boolean),
    };
  },
  extraWatchFiles: [
    ".vuepress/enhanceApp.js",
    ".vuepress/env.js",
    ".vuepress/sidebar.js",
    "README.md",
  ],
};
