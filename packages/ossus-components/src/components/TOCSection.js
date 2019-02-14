import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import Link from '../components/Link';

function objEq(obj1, obj2) {
  return Object.keys(obj1).every(key => obj1[key] === obj2[key]);
}

function TocSection({ router, title, links }) {
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <SectionItems>
        {links.map(link => (
          <SectionItem key={link.label + link.route} highlight={objEq(router.query, link.params)}>
            <Link route={link.route} params={link.params}>{link.label}</Link>
          </SectionItem>
        ))}
      </SectionItems>
    </Section>
  );
}

TocSection.propTypes = {
  router: PropTypes.object.isRequired,
  title: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    route: PropTypes.string,
    params: PropTypes.object
  })),
};

const Section = styled('nav')`
  width: 100%;
  
  background-color: ${p => p.theme.toc.color.bg};
`;

const SectionTitle = styled('h1')`
  width: 100%;
  
  color: ${p => p.theme.toc.title.color.fg};
  font-size: ${p => p.theme.toc.title.font.size};
  font-family: ${p => p.theme.toc.title.font.family};
  font-weight: ${p => p.theme.toc.title.font.weight};
  background-color: ${p => p.theme.toc.title.color.bg};
  margin: ${p => p.theme.toc.title.space.margin};
  padding: ${p => p.theme.toc.title.space.padding};
`;

const SectionItems = styled('ul')`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SectionItem = styled('li')`
  padding: 0em;
  margin: ${p => p.theme.toc.item.space.margin};

  a {
    display: block;
    text-decoration: none;
    
    padding: ${p => p.theme.toc.item.space.padding};
    color: ${p => p.theme.toc.item.color.fg};
    font-size: ${p => p.theme.toc.item.font.size};
    font-family: ${p => p.theme.toc.item.font.family};
    font-weight: ${p => p.theme.toc.item.font.weight};
    background-color: ${p => p.theme.toc.item.color.bg};

    &:hover {
      cursor: pointer;
      color: ${p => p.theme.toc.item.color.fgHover};
    }

    ${p => p.highlight ? `
      color: ${p => p.theme.toc.item.color.fgActive};
      background-color: ${p => p.theme.toc.item.color.bgActive};

      &:hover {
        color: ${p => p.theme.toc.item.color.fgActive};
      }
    `: ''}
  }
`;

export default withRouter(TocSection);