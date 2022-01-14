// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sid\'s Blog',
  tagline: 'I write about computer security.',
  url: 'https://swlacy.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'lacysw', // Usually your GitHub org/user name.
  projectName: 'swlacy.com', // Usually your repo name.
  trailingSlash: true,
  plugins: [
    // ... Your other plugins.
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-DRHYH7YG6P',
        anonymizeIP: true,
      },
    ],
    'plugin-image-zoom',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        highlightSearchTermsOnTargetPage: true,
        indexPages: true,
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        language: ["en"],
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
      metadata: [{name: 'keywords', content: 'security, cybersecurity, infosec, Sid, Lacy, swlacy, swlacy.com, blog, WWU, student, hackthebox, htb, tryhackme, thm, walkthrough, tutorial'}],
      zoomSelector: '.markdown img',
      navbar: {
        title: 'Sid\'s Blog',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/docs', label: 'Documents', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/about-me', label: 'About Me', position: 'left'},
          {href: 'mailto:contact@swlacy.com?subject=Hello!', className: 'header-email-link', position: 'right',},
          {href: 'https://discordapp.com/users/796071665154129931/', className: 'header-discord-link', position: 'right',},
          {href: 'https://www.linkedin.com/in/lacysw/', className: 'header-linkedin-link', position: 'right',},
          {href: 'https://github.com/lacysw', className: 'header-github-link', position: 'right',},
          {type: 'dropdown', label: 'Pages', position: 'left',
            items: [
              {label: 'WWU Cybersecurity Club', href: 'https://wwucyber.com'},
              {label: 'Resources', to: '/resources'},

            ],
          },
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
