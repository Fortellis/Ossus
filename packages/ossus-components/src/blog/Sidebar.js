import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { withConfig } from 'ossus';

import TocSection from '../components/TOCSection';

function BlogSidebar({ config, title, limit }) {
  const blogs = config.toc.blog.slice(0, limit).map(blog => ({
    ...blog,
    route: 'blog',
    params: {
      post: blog.doc
    }
  }));

  return (
    <BlogSideBarContainer>
      <TocSection title={title} links={blogs} />
    </BlogSideBarContainer>
  );
}

const BlogSideBarContainer = styled('div')`
  width: ${p => p.theme.size.width.blogSidebar + p.theme.size.unit};
  max-width: ${p => p.theme.size.width.blogSidebar + p.theme.size.unit};
`;

BlogSidebar.propTypes = {
  config: PropTypes.shape({
    site: PropTypes.object,
    toc: PropTypes.object
  }).isRequired,
  title: PropTypes.string,
  limit: PropTypes.number
};

BlogSidebar.defaultProps = {
  title: 'Recent Posts',
  limit: 10
};

export default withConfig(BlogSidebar);
