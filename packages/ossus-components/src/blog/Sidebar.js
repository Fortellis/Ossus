import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { withConfig } from 'ossus';

import Link from '../components/Link';

function BlogSidebar({ config, title, limit }) {
    const blogs = config.toc.blog.slice(0, limit);
    return (
        <Sidebar>
            <SidebarTitle>{title}</SidebarTitle>
            <SidebarItems>
                { blogs.map(post => (
                    <SidebarItem key={post.doc}>
                        <Link route='blog' params={{ post: post.doc }}>{post.label}</Link>
                    </SidebarItem>
                ))}
            </SidebarItems>
        </Sidebar>
    );
}

BlogSidebar.propTypes = {
    config: PropTypes.shape({
        site: PropTypes.object,
        toc: PropTypes.object
    }).isRequired,
    title: PropTypes.string,
    limit: PropTypes.number,
};

BlogSidebar.defaultProps = {
    title: 'Recent Posts',
    limit: 10,
}

const Sidebar = styled('nav')`
    width: ${p => p.theme.size.width.blogSidebar + p.theme.size.unit};
    max-width: ${p => p.theme.size.width.blogSidebar + p.theme.size.unit};
`;

const SidebarTitle = styled('h1')`
    width: 100%;
    margin: 0;
    font-size: 1.1rem;
    padding: .25em 1em .25em 0em;

    color: ${p => p.theme.color.primary};
    font-family: ${p => p.theme.font.family.body};
    font-weight: ${p => p.theme.font.weight.semibold};
`;

const SidebarItems = styled('ul')`
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
`;

const SidebarItem = styled('li')`
    padding: 0em 0em 0em 1em;
    margin: 1em 0em;

    a {
        text-decoration: none;

        color: ${p => p.theme.color.fg};
        font-size: ${p => p.theme.font.size.body + p.theme.font.size.unit};
        font-family: ${p => p.theme.font.family.body};
        font-weight: ${p => p.theme.font.weight.regular};
    }
`;

export default withConfig(BlogSidebar);