import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withRouter } from 'next/router';

import { tocUtil, withConfig } from 'ossus';

import TocSection from '../components/TOCSection';

const TableOfContents = ({ config, page }) => {
  const contents = tocUtil(config.toc).getPage(page);

  if (!contents || !page) {
    return null;
  }

  return (
    <div>
      <TocContainer>
        {
          contents.sections.map(section => (
            <TocSection
              key={section.route}
              title={section.label}
              links={section.children.map(doc => ({
                ...doc,
                route: 'docs',
                params: {
                  page,
                  section: section.route,
                  doc: doc.doc
                }
              }))}
            />
          ))
        }
      </TocContainer>
    </div>
  );
};

TableOfContents.propTypes = {
  config: PropTypes.shape({
    site: PropTypes.object,
    toc: PropTypes.object
  }),
  page: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired
};

const TocContainer = styled('div')`
  left: 0px;
  position: sticky;
  margin-bottom: 1em;
  background-color: white;
  overflow-x: hidden;
  overflow-y: scroll;

  min-width: ${p => p.theme.size.width.toc + p.theme.size.unit};
  max-width: ${p => p.theme.size.width.toc + p.theme.size.unit};

  top: calc(${p => {
    if (p.theme.header.sticky) return p.theme.size.height.header + p.theme.size.height.breadcrumbs + p.theme.size.unit;
    return '0em';
  }} + 1em);

  max-height: calc(100vh - (${p => {
    if (p.theme.header.sticky) return p.theme.size.height.header + p.theme.size.height.breadcrumbs + p.theme.size.unit;
    return '0em';
  }} + 1em));

  @media (max-width: ${p => p.theme.size.responsive.mobile + p.theme.size.responsive.unit}) {
    position: static;
    min-width: 100%;
    max-width: 100%;
  }
`;

export default withConfig(withRouter(TableOfContents));