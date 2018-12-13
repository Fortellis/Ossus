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
    FrontMatter,
    ScrollToTop,
    Paging,
    Menu
} from 'ossus-components';
// Components
import getDoc from '../src/getDoc';

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
                        components={Components.primatives}
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