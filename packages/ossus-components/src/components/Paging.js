import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Routes } from 'ossus';
// Components
import Feather from 'feathered';
// Variables
const dirs = ['left', 'right'];

const Paging = ({ nextDoc, prevDoc, page, buttonAs }) => {
  const LinkComp = buttonAs || PageLink;
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
              <LinkComp dir={dirs[0]} label={prevDoc.label} />
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
              <LinkComp dir={dirs[1]} label={nextDoc.label} />
            </Routes.Link>
          </div>
        ) : null
      }
    </StyledPaging>
  );
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
};

function PageLink({ dir, label, ...rest }) {
  return (
    <PageLinkStyled dir={dir} {...rest}>
      {dir === dirs[0] && <Feather icon='chevron-left' />}
      <span>{label}</span>
      {dir === dirs[1] && <Feather icon='chevron-right' />}
    </PageLinkStyled>
  );
}

PageLink.propTypes = {
  dir: PropTypes.oneOf(dirs),
  label: PropTypes.string
};

const PageLinkStyled = styled('a')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  padding: 1em;
  height: 100%;

  border-radius: ${p => p.theme.paging.borderRadius};
  border: ${p => `${p.theme.paging.borderWidth} solid ${p.theme.paging.color.border}`};
  background-color: ${p => p.theme.paging.color.bg};
  color: ${p => p.theme.paging.color.fg};
  font-size: ${p => p.theme.paging.font.size};
  font-weight: ${p => p.theme.paging.font.weight};
  font-family: ${p => p.theme.paging.font.family};
  
  transition: background-color .25s ease, color .2s ease;

  ${p => {
    if (p.dir === dirs[0]) {
      return 'text-align: right;';
    }
    return '';
  }}

  &:hover {
    cursor: pointer;
    border: ${p => `${p.theme.paging.borderWidth} solid ${p.theme.paging.color.borderHover}`};
    background-color: ${p => p.theme.paging.color.bgHover};
    color: ${p => p.theme.paging.color.fgHover};
  }
`;

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
    }

    &.right {
      margin: 0em 0em 0em 1em;
    }
  }
`;

export default Paging;