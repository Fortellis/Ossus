import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import styled from 'react-emotion';
import { Routes, docs, withConfig } from 'ossus';

import { A } from './MarkdownComponents';

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
        this.docs = docs(toc);
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
        const { router } = this.props;
        const { firstDoc, currentDoc, currentPageName } = this.state;

        /* THIS NEEDS SOME WORK, WE SHOULD WHITELIST DOCS, NOT BLACKLIST INDEX */
        return (
            <React.Fragment>
                {
                    (router.route !== '/' && currentDoc !== undefined && firstDoc !== undefined) ? (
                        <OuterContainer>
                            <BreadCrumbsContainer>
                                <BreadCrumb>
                                    <Routes.Link route='/'>
                                        <A>Home</A>
                                    </Routes.Link>
                                </BreadCrumb>
                                <BreadCrumb>
                                    <Routes.Link route='docs' params={{ page: router.query.page, section: firstDoc.section,  doc: firstDoc.doc }}>
                                        <A>{currentPageName}</A>
                                    </Routes.Link>
                                </BreadCrumb>
                                <BreadCrumb>
                                    <Routes.Link route='docs' params={{ page: router.query.page, section: currentDoc.section, doc: currentDoc.doc }}>
                                        <A>{currentDoc.label}</A>
                                    </Routes.Link>
                                </BreadCrumb>
                            </BreadCrumbsContainer>
                        </OuterContainer>
                    ) : null
                }
            </React.Fragment>
        );
    }
}

BreadCrumbs.propTypes = {
    router: PropTypes.object.isRequired,   // BreadCrumbs depends on the router to define it's own state
    config: PropTypes.shape({
        site: PropTypes.object,
        toc: PropTypes.object
    }).isRequired     // BreadCrumbs needs the toc structure to create links
};

const OuterContainer = styled('div')`
    background-color: white;
    width: 100%;
    max-width: 100%;
    position: fixed;
    top: ${props => props.theme.size.height.header}px;
    z-index: 99;
    box-shadow: 0px 2px 5px rgba(0,0,0,.2);

    @media (max-width: 720px) {
        display: flex;
        justify-content: center;
    }
`

const BreadCrumbsContainer = styled('div')`
    margin: 0px auto;
    height: ${props => props.theme.size.height.breadcrumbs}px;
    width: ${props => props.theme.size.width.page}px;
    display: flex;
    align-items: center;
    overflow: auto;

    @media (max-width: ${props => props.theme.size.width.page}px) {
        padding: 0em 2em;
    }

    @media (max-width: 720px) {
        justify-content: center;
        width: 90%;
        max-width: 90%;
        margin: 0;
        padding: 0;
    }

    div:last-child {
        &:after {
            content: '';
            margin: 0px;
        }
    }
`;

const BreadCrumb = styled('div')`
    &:after {
        content: '/';
        margin: 0px 8px;
    }

    a {
        color: #000;
        font-size: .9rem;
        white-space: nowrap;
    }
`;
 
export default withConfig(withRouter(BreadCrumbs));