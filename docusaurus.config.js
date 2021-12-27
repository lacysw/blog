// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hi, my name is Sid.',
  tagline: 'I write about computer security.',
  url: 'https://swlacy.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'lacysw', // Usually your GitHub org/user name.
  projectName: 'swlacy.com', // Usually your repo name.
  trailingSlash: false,
  plugins: [
    // ... Your other plugins.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        highlightSearchTermsOnTargetPage: true,
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Sid\'s Blog',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/docs/welcome', label: 'Docs & Tutorials', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/blog/about-me', label: 'About Me', position: 'left'},
          {href: 'mailto:contact@swlacy.com?subject=Hello!', label: 'Email Me', position: 'right'},
          {href: 'https://www.linkedin.com/in/lacysw/', label: 'LinkedIn', position: 'right'},
          {href: 'https://github.com/lacysw', label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Sid Lacy • Generated with <a href="https://docusaurus.io"> Docusaurus </a> • Last Built ${new Date().toJSON().slice(0,10).replace(/-/g,'.')} UTC`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
        switchConfig: {
          darkIcon: '🔅',
          darkIconStyle: {
            marginLeft: '2px',
          },
          // Unicode icons such as '\u2600' will work
          // Unicode with 5 chars require brackets: '\u{1F602}'
          lightIcon: '🔆',
          lightIconStyle: {
            marginLeft: '0px',
          },
        },
      },
      "hideableSidebar": true,
    }),
};

module.exports = config;
