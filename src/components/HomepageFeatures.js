import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Explore Documentation',
    Svg: require('/img/docs.svg').default,
    description: (
      <>
        The <a href="docs"><b>Docs & Tutorials</b></a> section contains a growing number of
        security and development-focused technical articles.
      </>
    ),
  },
  {
    title: 'Read My Blog',
    Svg: require('/img/blog.svg').default,
    description: (
      <>
        I also host <a href="blog"><b>my personal blog</b></a> here, where I highlight the less-technical
        elements of my other posts — I'd be humbled if you read an entry.
      </>
    ),
  },
  {
    title: 'Contact Me',
    Svg: require('/img/inbox.svg').default,
    description: (
      <>
        You can reach me for any reason via <a href="mailto:contact@swlacy.com?subject=Hello!"><b>email</b></a> or
        at <a href="https://www.linkedin.com/in/lacysw/"><b>LinkedIn</b></a>.
        Alternatively, view or add to my work on <a href="https://github.com/lacysw"><b>GitHub</b></a>.
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
