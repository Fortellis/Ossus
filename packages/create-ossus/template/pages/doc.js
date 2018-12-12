import React, { Component } from 'react';
import ErrorPage from 'next/error';
import {
    MarkdownRenderer,
    withConfig,
    withDoc,
    docs
} from 'ossus';
import {
    DocumentLayout,
    DocumentContent,
    TableOfContents,
    ScrollToTop,
    Paging,
    Menu,
    A, P, Ul, Ol, Pre, Table
} from 'ossus-components';

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
                        components={{
                            a: A,
                            p: P,
                            ul: Ul,
                            ol: Ol,
                            pre: Pre,
                            table: Table,
                        }}
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
                <ScrollToTop />
            </DocumentLayout>
        );
    }
}

export default withConfig(withDoc(Doc));