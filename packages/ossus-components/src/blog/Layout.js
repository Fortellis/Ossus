import styled from '@emotion/styled';

const BlogLayout = styled('div')`
  display: flex;
  position: relative;
  max-width: ${props => props.theme.size.width.page + props.theme.size.unit};
  margin-top: calc(${props => {
    if (props.theme.header.sticky) return props.theme.size.height.header + props.theme.size.unit;
    return '0em';
  }} + 2em);
  margin-bottom: 2em;

  @media (max-width: ${props => props.theme.size.responsive.mobile + props.theme.size.responsive.unit}) {
      flex-direction: column;
      margin-top: calc(${props => props.theme.size.height.headerMobile + props.theme.size.height.breadcrumbs + props.theme.size.unit} + 1em);
  }
`;

const BlogContent = styled('section')`
  flex: 1;
  overflow-x: hidden;

  max-width: ${p => p.theme.size.width.blog + p.theme.size.unit};

  margin: ${p => {
    if (p.centered) return '0 auto';
    return p.margin || '0';
  }};
`;

export { BlogLayout, BlogContent };