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
              <Translate
                id="theme.NotFound.title"
                description="The title of the 404 page">
                That's a 404...
              </Translate>
            </h1>
            <p>
              <Translate
                id="theme.NotFound.p1"
                description="The first paragraph of the 404 page">
                Sorry, the linked resource could not be found.
              </Translate>
            </p>
            <p>
              <Translate
                id="theme.NotFound.p2"
                description="The 2nd paragraph of the 404 page">
                If you believe you have received this message in error, please send me an email at
                contact@swlacy.com and I will investigate the issue as soon as possible.
              </Translate>
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
