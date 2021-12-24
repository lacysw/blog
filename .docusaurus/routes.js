
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','b8a'),
    exact: true
  },
  {
    path: '/blog/about-me',
    component: ComponentCreator('/blog/about-me','f6f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/about-me',
    component: ComponentCreator('/blog/tags/about-me','5be'),
    exact: true
  },
  {
    path: '/blog/tags/welcome',
    component: ComponentCreator('/blog/tags/welcome','006'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search','79a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','757'),
    routes: [
      {
        path: '/docs/Reports/hack-the-box/previse',
        component: ComponentCreator('/docs/Reports/hack-the-box/previse','52e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/website-hosting/bonus',
        component: ComponentCreator('/docs/website-hosting/bonus','761'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/website-hosting/deploy-to-firebase',
        component: ComponentCreator('/docs/website-hosting/deploy-to-firebase','2ce'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/website-hosting/dev-env',
        component: ComponentCreator('/docs/website-hosting/dev-env','6c5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/website-hosting/edit-defaults',
        component: ComponentCreator('/docs/website-hosting/edit-defaults','452'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/website-hosting/introduction',
        component: ComponentCreator('/docs/website-hosting/introduction','3ad'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/website-hosting/register-domain',
        component: ComponentCreator('/docs/website-hosting/register-domain','c0e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/welcome',
        component: ComponentCreator('/docs/welcome','a64'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
