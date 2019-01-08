import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import { ConfigProvider } from 'ossus';
import {
    generateDefaultTheme,
    mergeThemes,
    color,
    font
} from '../defaultTheme';

function Layout({ config, toc, children }) {
    const c = mergeThemes(color, config.theme.color);
    const f = mergeThemes(font, config.theme.font);
    const defaultTheme = generateDefaultTheme(c, f);
    const t = mergeThemes(defaultTheme, config.theme);

    return (
        <>
            <Global styles={css`
                * {
                    box-sizing: border-box;
                }
                body {
                    margin: 0px;
                }
            `}/>
            <ThemeProvider theme={t}>
                <ConfigProvider site={config.site} theme={t} toc={toc}>
                    {children}
                </ConfigProvider>
            </ThemeProvider>
        </>
    );
}

Layout.propTypes = {
    config: PropTypes.object.isRequired,    // Layout implements the emotion theme provider and therefore needs the theme to define the site layout
}


const ContentLayout = styled('div')`
    max-width: ${props => props.theme.size.width.page + props.theme.size.unit};
    margin: 0 auto;

    @media (max-width: ${props => props.theme.size.width.page + props.theme.size.unit}) {
        width: 100%;
        padding: 0em 1em;
    }
`;

const DocumentLayout = styled('div')`
    display: flex;
    position: relative;
    max-width: ${props => props.theme.size.width.page + props.theme.size.unit};
    margin-top: calc(${props => props.theme.size.height.header + props.theme.size.height.breadcrumbs + props.theme.size.unit} + 2em);
    
    @media (max-width: ${props => props.theme.size.responsive.mobile + props.theme.size.responsive.unit}) {
        flex-direction: column;
        margin-top: calc(${props => props.theme.size.height.headerMobile + props.theme.size.height.breadcrumbs + props.theme.size.unit} + 1em);
    }
`;

const DocumentContent = styled('div')`
    padding: 0em 4em 5em 2em;
    overflow-x: hidden;
    font-family: ${props => props.theme.font.family.body};
    min-width: ${props => ((props.theme.size.width.page - props.theme.size.width.menu) - props.theme.size.width.toc) + props.theme.size.unit};

    @media (max-width: ${props => props.theme.size.width.page + props.theme.size.unit}) {
        margin-right: 0;
        min-width: auto;
    }

    @media (max-width: ${props => props.theme.size.responsive.mobile + props.theme.size.responsive.unit}) {
        margin-left: 0;
        padding: 1em 0em 0em;
        width: 100%;
        min-width: auto;
    }
`;

export {
    Layout,
    ContentLayout,
    DocumentLayout,
    DocumentContent
};