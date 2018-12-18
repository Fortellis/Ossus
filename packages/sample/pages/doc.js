import React, { Component } from 'react';
import ErrorPage from 'next/error';
import {
    MarkdownRenderer,
    withConfig,
    withDoc
} from 'ossus';
import Components, {
    DocumentLayout,
    DocumentContent,
    TableOfContents,
    CodeHighlight,
    FrontMatter,
    ScrollToTop,
    Paging,
    Menu
} from 'ossus-components';
// Components
import getDoc from '../src/getDoc';

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
}

class Doc extends Component {

    render() {
        const {
            content,
            statusCode,
            // Paging props
            page,
            prevDoc,
            nextDoc,
            // Menu Props
            menu,
            activeHeader,
            // Update props
            watchMenu,
            watchScroll,
        } = this.props;

        // Handle 404 errors for unknown doc links
        if (statusCode === 404) {
            return <ErrorPage statusCode={statusCode} />
        }
        // Standard layout of a Ossus project UI
        return (
            <DocumentLayout>
                <TableOfContents page={page} />
                <DocumentContent>
                    <MarkdownRenderer
                        content={content}
                        menuCallback={watchMenu}
                        watchScroll={watchScroll}
                        components={componentMap}
                        FrontMatter={FrontMatter}
                    />
                    <Paging
                        nextDoc={nextDoc}
                        prevDoc={prevDoc}
                        page={page}
                    />
                </DocumentContent>
                <Menu
                    menu={menu}
                    activeHeader={activeHeader}
                />
            </DocumentLayout>
        );
    }
}

export default withConfig(getDoc(withDoc(Doc)));