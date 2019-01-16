import React, { Component } from 'react';
import ErrorPage from 'next/error';
import {
    MarkdownRenderer,
    withConfig,
} from 'ossus';
import Components, {
    CodeHighlight,
    FrontMatter,
    BlogLayout,
    BlogContent,
    BlogSidebar
} from 'ossus-components';

import getBlog from '../src/getBlog';

const componentMap = {
    a: Components.primatives.A,
    p: Components.primatives.P,
    pre: CodeHighlight,
    table: Components.primatives.Table,
    ul: Components.primatives.Ul,
    ol: Components.primatives.Ol,
    h1: Components.primatives.H1,
    h2: Components.primatives.H2,
    h3: Components.primatives.H3,
    h4: Components.primatives.H4,
    blockquote: Components.primatives.Blockquote,
}

class Blog extends Component {
    render() {
        const {
            content,
            statusCode,
        } = this.props;

        if (statusCode === 404) return <ErrorPage statusCode={statusCode} />;

        return (
            <BlogLayout>
                <BlogSidebar limit={5} />
                <BlogContent centered>
                    <MarkdownRenderer
                        content={content}
                        components={componentMap}
                        FrontMatter={FrontMatter}
                    />
                </BlogContent>
            </BlogLayout>
        );
    }
}

export default withConfig(getBlog(Blog));