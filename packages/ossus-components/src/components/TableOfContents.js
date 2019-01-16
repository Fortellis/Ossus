import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import styled from '@emotion/styled';

import { tocUtil, withConfig } from 'ossus';
import { Routes } from 'ossus';

const TableOfContents = ({ config, page, router: { query } }) => {
    const contents = tocUtil(config.toc).getPage(page);

    if (!contents || !page) {
        return null;
    }

    return (
        <div>
            <TocContainer>
                {
                    contents.sections.map(section => (
                        <React.Fragment key={section.label}>
                            <SectionTitle>{section.label}</SectionTitle>
                            <SectionList>
                                {
                                    section.children.map(doc => (
                                        <li key={doc.label}>
                                            <Routes.Link
                                                route='docs'
                                                params={{
                                                    page,
                                                    section: section.route,
                                                    doc: doc.doc
                                                }}
                                            >
                                                <a className={`${doc.doc === query.doc ? 'highlight' : ''}`}>
                                                    {doc.label}
                                                </a>
                                            </Routes.Link>
                                        </li>
                                    ))
                                }
                            </SectionList>
                        </React.Fragment>
                    ))
                }
            </TocContainer>
        </div>
    )
};

TableOfContents.propTypes = {
    config: PropTypes.shape({
        site: PropTypes.object,
        toc: PropTypes.object
    }),
    page: PropTypes.string.isRequired,
    router: PropTypes.object.isRequired
}

const TocContainer = styled('div')`
    min-width: ${props => props.theme.size.width.toc}px;
    max-width: ${props => props.theme.size.width.toc}px;
    background-color: white;
    position: sticky;
    top: calc(${props => {
        if (props.theme.header.sticky) return props.theme.size.height.header + props.theme.size.height.breadcrumbs + props.theme.size.unit;
        return '0em';
    }} + 1em);
    left: 0px;
    margin-bottom: 1em;

    @media (max-width: 720px) {
        position: static;
        min-width: 100%;
        max-width: 100%;
    }
`;

const SectionTitle = styled('div')`
    width: 100%;
    color: ${props => props.theme.color.primary};
    font-family: ${props => props.theme.font.family.body};
    font-weight: ${props => props.theme.font.weight.semibold};
    font-size: 1.1rem;
    margin: 0;
    padding: .25em 1em .25em 0em;
`;

const SectionList = styled('ul')`
    margin: 0;
    list-style: none;
    width: 100%;
    padding-left: 0px;
    margin: .5em 0em .5em .2em;

    li {
        a {
            display: block;
            color: ${props => props.theme.type.p.color};
            font-family: ${props => props.theme.type.a.font.family};
            font-weight: ${props => props.theme.type.a.font.weight};
            font-size: .85rem;
            text-decoration: none;
            padding: .75em 1em;
            margin: .1em 0em;
            transform: translateX(-1px);

            &.highlight {
                color: ${props => props.theme.color.fgOnPrimary};
                background-color: ${props => props.theme.color.primary};

                &:hover {
                    color: ${props => props.theme.color.fgOnPrimary};
                }
            }

            &:hover {
                color: ${props => props.theme.color.primary}
            }
        }
    }
    
`;

export default withConfig(withRouter(TableOfContents));