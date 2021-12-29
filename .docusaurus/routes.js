
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/about-me/',
    component: ComponentCreator('/about-me/','945'),
    exact: true
  },
  {
    path: '/blog/',
    component: ComponentCreator('/blog/','1e8'),
    exact: true
  },
  {
    path: '/blog/archive/',
    component: ComponentCreator('/blog/archive/','38a'),
    exact: true
  },
  {
    path: '/blog/first-post/',
    component: ComponentCreator('/blog/first-post/','c85'),
    exact: true
  },
  {
    path: '/blog/tags/',
    component: ComponentCreator('/blog/tags/','0ff'),
    exact: true
  },
  {
    path: '/blog/tags/about/',
    component: ComponentCreator('/blog/tags/about/','c33'),
    exact: true
  },
  {
    path: '/search/',
    component: ComponentCreator('/search/','1e3'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/','c87'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/','c5e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/development/',
        component: ComponentCreator('/docs/development/','4cd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/development/how-i-made-this-website/bonus/',
        component: ComponentCreator('/docs/development/how-i-made-this-website/bonus/','06c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/development/how-i-made-this-website/deploy-to-firebase/',
        component: ComponentCreator('/docs/development/how-i-made-this-website/deploy-to-firebase/','801'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/development/how-i-made-this-website/development-environment/',
        component: ComponentCreator('/docs/development/how-i-made-this-website/development-environment/','d94'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/development/how-i-made-this-website/edit-defaults/',
        component: ComponentCreator('/docs/development/how-i-made-this-website/edit-defaults/','ce2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/development/how-i-made-this-website/introduction/',
        component: ComponentCreator('/docs/development/how-i-made-this-website/introduction/','152'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/development/how-i-made-this-website/register-domain/',
        component: ComponentCreator('/docs/development/how-i-made-this-website/register-domain/','6a0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/reports/',
        component: ComponentCreator('/docs/reports/','b43'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/reports/previse/',
        component: ComponentCreator('/docs/reports/previse/','18a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/scripts/',
        component: ComponentCreator('/docs/scripts/','a77'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/scripts/linux/basic-linux-security-report/',
        component: ComponentCreator('/docs/scripts/linux/basic-linux-security-report/','c0c'),
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
