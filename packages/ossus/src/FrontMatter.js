import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const DEFAULT_OPTIONS = {
    title: true,
    author: true,
    lastUpdated: true,
    readTime: true
}

function FrontMatter ({ frontMatter, options, H1 }) {
    if (!frontMatter) return null;

    const opts = {
        ...DEFAULT_OPTIONS,
        ...options,
    }
    
    return (
        <React.Fragment>
            {
                opts.title && (
                    <H1>{front.title || ''}</H1>
                )
            }
            <MetaData>
                <span className='meta-data'>
                    {opts.lastUpdated ? `Last Updated: ${front.update}` : ''}
                    {opts.lastUpdated && opts.author ? ' by ${front.author}' : ''}
                    {!opts.lastUpdated && opts.author ? `By ${front.author}` : ''}
                </span>
                {
                    opts.readTime && (
                        <span className='meta-data'>
                            { window.innerWidth > 720 ? '•' : '' }
                            <i className='material-icons'>access_time</i>
                            {front.readTime || 0} minute read
                        </span>
                    )
                }
            </MetaData>
        </React.Fragment>
    );
}

FrontMatter.propTypes = {
    frontMatter: PropTypes.object.required,
    options: PropTypes.shape({
        title: PropTypes.bool,
        author: PropTypes.bool,
        lastUpdated: PropTypes.bool,
        readTime: PropTypes.bool
    }),
    H1: PropTypes.element
}

FrontMatter.defaultProps = {
    H1: DocTitle
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

    .meta-data:first-child {
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

        i {
            font-size: 1.1rem;
            margin: 0em .25em;
        }

        @media (max-width: 720px) {
            margin: 0px;

            i {
                margin-left: 0px;
            }
        }

    }
`;

export default FrontMatter;