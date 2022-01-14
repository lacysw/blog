
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
    component: ComponentCreator('/blog/','6e6'),
    exact: true
  },
  {
    path: '/blog/archive/',
    component: ComponentCreator('/blog/archive/','38a'),
    exact: true
  },
  {
    path: '/blog/documenting-my-network/',
    component: ComponentCreator('/blog/documenting-my-network/','eda'),
    exact: true
  },
  {
    path: '/blog/first-post/',
    component: ComponentCreator('/blog/first-post/','c85'),
    exact: true
  },
  {
    path: '/blog/fishing-for-malware/',
    component: ComponentCreator('/blog/fishing-for-malware/','8d4'),
    exact: true
  },
  {
    path: '/blog/macos-cybersecurity-student/',
    component: ComponentCreator('/blog/macos-cybersecurity-student/','9d6'),
    exact: true
  },
  {
    path: '/blog/tags/',
    component: ComponentCreator('/blog/tags/','0ff'),
    exact: true
  },
  {
    path: '/blog/tags/analysis/',
    component: ComponentCreator('/blog/tags/analysis/','84c'),
    exact: true
  },
  {
    path: '/blog/tags/homelab/',
    component: ComponentCreator('/blog/tags/homelab/','7af'),
    exact: true
  },
  {
    path: '/blog/tags/macos/',
    component: ComponentCreator('/blog/tags/macos/','3e5'),
    exact: true
  },
  {
    path: '/blog/tags/networking/',
    component: ComponentCreator('/blog/tags/networking/','8a7'),
    exact: true
  },
  {
    path: '/blog/tags/projects/',
    component: ComponentCreator('/blog/tags/projects/','c1d'),
    exact: true
  },
  {
    path: '/blog/tags/student/',
    component: ComponentCreator('/blog/tags/student/','a3c'),
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
