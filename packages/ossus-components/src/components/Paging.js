import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Routes } from 'ossus';

const Paging = ({ nextDoc, prevDoc, page }) => {
    return (
        <StyledPaging>
            {
                (prevDoc !== null && prevDoc !== undefined) ? (
                    <div className='page-button left'>
                        <Routes.Link prefetch route='docs' params={{
                            page: page,
                            section: prevDoc.section,
                            doc: prevDoc.doc
                        }}>
                            <a>
                                <i className='material-icons'>chevron_left</i>
                                <span className='link-info'>
                                    {prevDoc.label}
                                </span>
                            </a>
                        </Routes.Link>
                    </div>
                ) : null
            }
            {
                (nextDoc !== null && nextDoc !== undefined) ? (
                    <div className='page-button right'>
                        <Routes.Link prefetch route='docs' params={{
                            page: page,
                            section: nextDoc.section,
                            doc: nextDoc.doc
                        }}>
                            <a>
                                <span className='link-info'>
                                    {nextDoc.label}
                                </span>
                                <i className='material-icons'>chevron_right</i>
                            </a>
                        </Routes.Link>
                    </div>
                ) : null
            }
        </StyledPaging>
    )
};

Paging.propTypes = {
    nextDoc: PropTypes.shape({
        section: PropTypes.string,
        doc: PropTypes.string,
        label: PropTypes.string,
    }),
    prevDoc: PropTypes.shape({
        section: PropTypes.string,
        doc: PropTypes.string,
        label: PropTypes.string,
    }),
    page: PropTypes.string,
}

const StyledPaging = styled('div')`
    padding-top: 2em;
    display: flex;
    width: 100%;
    max-width: 100%;

    .page-button:first-of-type {
        &.left {
            margin: 0px;
        }
        &.right {
            margin: 0px;
        }
    }

    .page-button {
        flex-grow: 1;
        flex-basis: 0;

        @media (max-width: 720px) {
            a {
                font-size: .8rem;
            }
        }

        &.left {
            margin: 0em 1em 0em 0em;
            text-align: right;
        }

        &.right {
            margin: 0em 0em 0em 1em;
        }

        a {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1.5px solid #ccc;
            border-radius: 4px;
            padding: 1em;
            text-decoration: none;
            color: #888;
            transition: background-color .25s ease, color .2s ease;
            height: 100%;

            .link-info {
                font-weight: ${props => props.theme.font.weight.semibold};
                font-family: ${props => props.theme.font.family.title};
                color: ${props => props.theme.color.fg};
            }

            &:hover {
                background-color: ${props => props.theme.color.primary};
                color: ${props => props.theme.color.fgOnPrimary};
                border: 1.5px solid ${props => props.theme.color.primary};

                .link-info {
                    color: ${props => props.theme.color.fgOnPrimary};
                }
            }
        }
    }
`;

export default Paging;