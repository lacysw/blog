
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
    path: '/blog/tags/about-me/',
    component: ComponentCreator('/blog/tags/about-me/','cf9'),
    exact: true
  },
  {
    path: '/blog/tags/welcome/',
    component: ComponentCreator('/blog/tags/welcome/','10b'),
    exact: true
  },
  {
    path: '/search/',
    component: ComponentCreator('/search/','1e3'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/','739'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/','c5e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/automation/',
        component: ComponentCreator('/docs/automation/','8ab'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/automation/linux/basic-linux-security-report/',
        component: ComponentCreator('/docs/automation/linux/basic-linux-security-report/','265'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/extended-tutorials/how-i-made-this-website/bonus/',
        component: ComponentCreator('/docs/extended-tutorials/how-i-made-this-website/bonus/','784'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/extended-tutorials/how-i-made-this-website/deploy-to-firebase/',
        component: ComponentCreator('/docs/extended-tutorials/how-i-made-this-website/deploy-to-firebase/','613'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/extended-tutorials/how-i-made-this-website/development-environment/',
        component: ComponentCreator('/docs/extended-tutorials/how-i-made-this-website/development-environment/','d47'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/extended-tutorials/how-i-made-this-website/edit-defaults/',
        component: ComponentCreator('/docs/extended-tutorials/how-i-made-this-website/edit-defaults/','657'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/extended-tutorials/how-i-made-this-website/introduction/',
        component: ComponentCreator('/docs/extended-tutorials/how-i-made-this-website/introduction/','1b8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/extended-tutorials/how-i-made-this-website/register-domain/',
        component: ComponentCreator('/docs/extended-tutorials/how-i-made-this-website/register-domain/','0e2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/reports/previse/',
        component: ComponentCreator('/docs/reports/previse/','18a'),
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
