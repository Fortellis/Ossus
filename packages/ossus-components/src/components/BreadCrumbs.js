import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withRouter } from 'next/router';
import { tocUtil, withConfig } from 'ossus';
import Feather from 'feathered';

import { A } from './MarkdownComponents';
import Link from './Link';

class BreadCrumbs extends Component {
    constructor(props) {
        super(props);
        this.docs;
        this.state = {
            currentPageName: '',
            currentDoc: undefined,
            firstDoc: undefined,
        }
    }

    componentDidMount() {
        const { router: { query }, config: { toc } } = this.props;
        this.docs = tocUtil(toc);
        if (query.page && query.doc) {
            const currentPage = this.docs.getPage(query.page);
            this.setState({
                currentPageName: currentPage ? currentPage.label : '',
                currentDoc: this.docs.getDoc(query.page, query.doc),
                firstDoc: this.docs.getFirstDoc(query.page)
            });
        }
    }

    componentDidUpdate(prevProps) {
        const { router: { query } } = this.props;
        if (prevProps.router.query !== query) {
            this.setState({
                currentDoc: this.docs.getDoc(query.page, query.doc),
                firstDoc: this.docs.getFirstDoc(query.page)
            });
        }
    }

    render() {
        const { router, divider } = this.props;
        const { firstDoc, currentDoc, currentPageName } = this.state;

        const dividerElement = divider ? divider : <Feather icon='chevron-right' />;

        if (router.route !== '/doc' || currentDoc === undefined || firstDoc === undefined) return null;
        
        return (
            <OuterContainer>
                <BreadCrumbsContainer>
                    <BreadCrumb>
                        <Link route='/' as={A}>Home</Link>
                    </BreadCrumb>
                    <Divider>{ dividerElement }</Divider>
                    <BreadCrumb>
                        <Link
                            route='docs'
                            params={{ page: router.query.page, section: firstDoc.section,  doc: firstDoc.doc }}
                            as={A}
                        >
                            {currentPageName}
                        </Link>
                    </BreadCrumb>
                    <Divider>{ dividerElement }</Divider>
                    <BreadCrumb>
                        <Link
                            route='docs'
                            params={{ page: router.query.page, section: currentDoc.section, doc: currentDoc.doc }}
                            as={A}
                        >
                            {currentDoc.label}
                        </Link>
                    </BreadCrumb>
                </BreadCrumbsContainer>
            </OuterContainer>
        );
    }
}

BreadCrumbs.propTypes = {
    divider: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    router: PropTypes.object.isRequired,   // BreadCrumbs depends on the router to define it's own state
    config: PropTypes.shape({
        site: PropTypes.object,
        toc: PropTypes.object
    }).isRequired     // BreadCrumbs needs the toc structure to create links
};

const OuterContainer = styled('div')`
    width: 100%;
    max-width: 100%;
    z-index: 99;
    box-shadow: ${p => p.theme.shadow};
    top: 0;

    background-color: ${p => p.theme.breadcrumbs.color.bg};
    position: ${p => p.theme.header.sticky ? 'fixed' : 'static'};
    margin-top: calc(${props => {
        if (props.theme.header.sticky) return props.theme.size.height.header + props.theme.size.unit;
        return '0em';
    }});

    @media (max-width: ${p => p.theme.size.responsive.mobile + p.theme.size.responsive.unit}) {
        display: flex;
        justify-content: center;
    }
`

const BreadCrumbsContainer = styled('div')`
    margin: 0px auto;
    display: flex;
    align-items: center;
    overflow: auto;

    height: ${props => props.theme.size.height.breadcrumbs + props.theme.size.unit};
    width: ${props => props.theme.size.width.page + props.theme.size.unit};

    .feather {
        height: ${p => p.theme.breadcrumbs.font.size};
        font-size: ${p => p.theme.breadcrumbs.font.size};
        color: ${p => p.theme.breadcrumbs.color.fg};
    }

    @media (max-width: ${props => props.theme.size.width.page + props.theme.size.unit}) {
        padding: 0em 2em;
    }

    @media (max-width: ${p => p.theme.size.responsive.mobile + p.theme.size.responsive.unit}) {
        justify-content: center;
        width: 90%;
        max-width: 90%;
        margin: 0;
        padding: 0;
    }
`;

const BreadCrumb = styled('div')`
    a {
        white-space: nowrap;

        color: ${p => p.theme.breadcrumbs.color.fg};
        font-size: ${p => p.theme.breadcrumbs.font.size};
        font-family: ${p => p.theme.breadcrumbs.font.family};
        font-weight: ${p => p.theme.breadcrumbs.font.weight};
    }
`;

const Divider = styled('span')`
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin: ${p => `0em ${p.theme.breadcrumbs.spacing}`};
`;
 
export default withConfig(withRouter(BreadCrumbs));