import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Visit Documentation & Tutorials',
    Svg: require('../../static/img/laptop-svgrepo-com.svg').default,
    description: (
      <>
        The <a href="docs/welcome">Docs & Tutorials</a> section hosts a growing number
        of technical tutorials, mostly focused on infosec and Linux.
      </>
    ),
  },
  {
    title: 'Read My Blog',
    Svg: require('../../static/img/documentation-svgrepo-com.svg').default,
    description: (
      <>
        I also host <a href="blog">my personal blog</a> here and I'd be humbled if you
        read an entry.
      </>
    ),
  },
  {
    title: 'Contact Me',
    Svg: require('../../static/img/chat-svgrepo-com.svg').default,
    description: (
      <>
        You can reach me via <a href="mailto:contact@swlacy.com?subject=Hello!">email</a> and <a href="https://www.linkedin.com/in/lacysw/">LinkedIn</a>. Alternatively,
        view my work hosted on <a href="https://github.com/lacysw">GitHub</a>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
