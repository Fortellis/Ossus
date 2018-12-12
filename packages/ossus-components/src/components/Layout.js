import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import { ConfigProvider } from 'ossus';

function Layout({ config, toc, children }) {
    return (
        <ThemeProvider theme={config.theme}>
            <ConfigProvider site={config.site} toc={toc}>
                {children}
            </ConfigProvider>
        </ThemeProvider>
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