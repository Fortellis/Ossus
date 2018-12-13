import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const DEFAULT_OPTIONS = {
    title: true,
    author: true,
    lastUpdated: true,
    readTime: true
}

function FrontMatter ({ frontMatter, options }) {
    if (!frontMatter) return null;

    const opts = {
        ...DEFAULT_OPTIONS,
        ...options,
    }
    
    return (
        <React.Fragment>
            {
                opts.title && (
                    <DocTitle>{frontMatter.title || ''}</DocTitle>
                )
            }
            <MetaData>
                <span className='meta-data'>
                    {opts.lastUpdated ? `Last Updated: ${frontMatter.update}` : ''}
                    {opts.lastUpdated && opts.author ? ` by ${frontMatter.author}` : ''}
                    {!opts.lastUpdated && opts.author ? `By ${frontMatter.author}` : ''}
                </span>
                {
                    opts.readTime && (
                        <span className='meta-data'>
                            { window.innerWidth > 720 ? '• ' : '' }
                            {frontMatter.readTime || 0} minute read
                        </span>
                    )
                }
            </MetaData>
        </React.Fragment>
    );
}

FrontMatter.propTypes = {
    frontMatter: PropTypes.object,
    options: PropTypes.object
}

const DocTitle = styled('h1')`
    margin: 15px 0px 10px 0px;
`;

const MetaData = styled('div')`
    color: #999;
    font-size: .85rem;
    display: flex;
    align-items: center;
    padding-bottom: 15px;
    border-bottom: 1px solid #ddd;

    @media (max-width: 720px) {
        flex-direction: column;
        padding-left: .5em;
    }

    .meta-data:first-of-type {
        margin: 0px;
    }

    .meta-data {
        display: flex;
        align-items: center;
        margin-left: .5em;

        @media (max-width: 720px) {
            width: 100%;
            margin-bottom: 3px;
        }

        @media (max-width: 720px) {
            margin: 0px;
        }

    }
`;

export default FrontMatter;