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
  width: ${p => p.theme.size.width.blogSidebar + p.theme.size.unit};
  max-width: ${p => p.theme.size.width.blogSidebar + p.theme.size.unit};
`;

const SectionTitle = styled('h1')`
  width: 100%;
  margin: 0;
  font-size: 1.1rem;
  padding: .25em 1em .25em 0em;

  color: ${p => p.theme.color.primary};
  font-family: ${p => p.theme.font.family.body};
  font-weight: ${p => p.theme.font.weight.semibold};
`;

const SectionItems = styled('ul')`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SectionItem = styled('li')`
  padding: 0em;
  margin: .25em 0em;

  a {
    display: block;
    text-decoration: none;
    padding: .75em 1em;

    color: ${p => p.theme.color.fg};
    font-size: ${p => p.theme.font.size.body + p.theme.font.size.unit};
    font-family: ${p => p.theme.font.family.body};
    font-weight: ${p => p.theme.font.weight.regular};

    &:hover {
      color: ${p => p.theme.color.primary}
    }

    ${p => p.highlight && `
      color: ${p.theme.color.fgOnPrimary};
      background-color: ${p.theme.color.primary};

      &:hover {
        color: ${p.theme.color.fgOnPrimary};
      }
    `}
  }
`;

export default withRouter(TocSection);