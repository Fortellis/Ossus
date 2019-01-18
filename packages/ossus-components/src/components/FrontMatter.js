import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Feather from 'feathered';

const DEFAULT_OPTIONS = {
  title: true,
  author: true,
  lastUpdated: true,
  readTime: true
};

function FrontMatter({ frontMatter, options }) {
  if (!frontMatter) return null;

  const opts = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

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
              <Feather icon='clock' width={16} className='icon' />
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
};

const DocTitle = styled('h1')`
    margin: 15px 0px 10px 0px;

    font-size: ${p => p.theme.type.heading.one.font.size};
    font-family: ${p => p.theme.type.heading.one.font.family};
    font-weight: ${p => p.theme.type.heading.one.font.weight};
    color: ${p => p.theme.type.heading.one.color};
`;

const MetaData = styled('div')`
  color: ${p => p.theme.type.frontmatter.color};
  font-size: ${p => p.theme.type.frontmatter.font.size};
  font-family: ${p => p.theme.type.frontmatter.font.family};
  font-weight: ${p => p.theme.type.frontmatter.font.weight};
  border-bottom: 1px solid ${p => p.theme.type.frontmatter.borderColor};

  display: flex;
  align-items: center;
  padding-bottom: 15px;

  @media (max-width: ${p => p.theme.size.responsive.mobile + p.theme.size.responsive.unit}) {
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

    .icon {
      margin-right: 5px;
    }

    @media (max-width: ${p => p.theme.size.responsive.mobile + p.theme.size.responsive.unit}) {
      width: 100%;
      margin-bottom: 3px;
    }

    @media (max-width: ${p => p.theme.size.responsive.mobile + p.theme.size.responsive.unit}) {
      margin: 0px;
    }
  }
`;

export default FrontMatter;