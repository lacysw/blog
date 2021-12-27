
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/about-me',
    component: ComponentCreator('/about-me','23c'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','a84'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-post',
    component: ComponentCreator('/blog/first-post','a4a'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/about-me',
    component: ComponentCreator('/blog/tags/about-me','44e'),
    exact: true
  },
  {
    path: '/blog/tags/welcome',
    component: ComponentCreator('/blog/tags/welcome','916'),
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
