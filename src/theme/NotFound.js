/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';

function NotFound() {
  return (
    <Layout
      title={translate({
        id: 'theme.NotFound.title',
        message: 'Page Not Found',
      })}>
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">
              That's a 404...
            </h1>
            <p>
              Sorry, the linked resource could not be found.
            </p>
            <p>
              If you believe you have received this message in error,
              please <a href="mailto:contact@swlacy.com?subject=404">send me an email </a> and
              I will investigate the issue as soon as possible.
            </p>
            <p>
              <Translate
                id="theme.NotFound.p3"
                description="The 3rd paragraph of the 404 page">
                Thank you.
              </Translate>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default NotFound;
