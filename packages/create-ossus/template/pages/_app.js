import App, { Container } from 'next/app';
import React from 'react';
import {
    Layout,
    ContentLayout,
    Header,
    Footer
} from 'ossus-components';

import config from '../config/config';
import toc from '../config/tableOfContents.js'

export default class MyApp extends App {
    static async getInitialProps ({ Component, router, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

  render () {
    const { Component, pageProps } = this.props;
    return (
        <Container>
            <Layout config={config} toc={toc}>
                <Header />
                <ContentLayout>
                    <Component {...pageProps} />
                </ContentLayout>
                <Footer />
            </Layout>
        </Container>
    )
  }
}