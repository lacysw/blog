
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
    component: ComponentCreator('/docs','c9a'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs','1fc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/automation',
        component: ComponentCreator('/docs/automation','24c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/automation/linux/basic-linux-security-report',
        component: ComponentCreator('/docs/automation/linux/basic-linux-security-report','8a8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/extended-tutorials/how-i-made-this-website/bonus',
        component: ComponentCreator('/docs/extended-tutorials/how-i-made-this-website/bonus','a1a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/extended-tutorials/how-i-made-this-website/deploy-to-firebase',
        component: ComponentCreator('/docs/extended-tutorials/how-i-made-this-website/deploy-to-firebase','902'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/extended-tutorials/how-i-made-this-website/dev-env',
        component: ComponentCreator('/docs/extended-tutorials/how-i-made-this-website/dev-env','d09'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/extended-tutorials/how-i-made-this-website/edit-defaults',
        component: ComponentCreator('/docs/extended-tutorials/how-i-made-this-website/edit-defaults','6fb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/extended-tutorials/how-i-made-this-website/introduction',
        component: ComponentCreator('/docs/extended-tutorials/how-i-made-this-website/introduction','0ca'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/extended-tutorials/how-i-made-this-website/register-domain',
        component: ComponentCreator('/docs/extended-tutorials/how-i-made-this-website/register-domain','355'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/reports/previse',
        component: ComponentCreator('/docs/reports/previse','5cb'),
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
