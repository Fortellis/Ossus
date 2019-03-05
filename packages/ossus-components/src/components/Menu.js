import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

function toTop() {
  window.scrollTo(0, 0);
}

function Menu({ menu, title, hasTitle, activeHeader }) {
  return (
    <div>
      {
        (menu && menu.length) ? (
          <List>
            {hasTitle && (
              <ListItem
                onClick={toTop}
                title='Return to top'
              >
                {title}
              </ListItem>
            )}
            {
              menu.map(item => (
                <ListItem
                  key={item.id}
                  active={item.id === activeHeader}
                  depth={item.depth}
                >
                  <a href={`#${item.id}`} >
                    {item.value}
                  </a>
                </ListItem>
              )
              )
            }
          </List>
        ) : (<List empty></List>)
      }
    </div>
  );
}

Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object), // Requires the array of headings output from remark-outer-toc
  title: PropTypes.string,
  hasTitle: PropTypes.bool,
  activeHeader: PropTypes.string
};

Menu.defaultProps = {
  title: 'Contents',
  hasTitle: true
};

const List = styled('ul')`
  list-style: none;
  position: sticky;
  margin-top: 0px;
  padding:${p => p.theme.menu.space.padding};
  max-height: 500px;
  overflow: auto;

  border-radius: ${p => p.theme.menu.borderRadius};
  background-color: ${p => p.empty ? 'transparent' : p.theme.menu.color.bg};
  max-width: ${p => p.theme.size.width.menu + p.theme.size.unit};
  min-width: ${p => p.theme.size.width.menu + p.theme.size.unit};
  left: ${p => (p.theme.size.width.page - p.theme.size.width.menu) + p.theme.size.unit};
  top: calc(${p => {
    if (p.theme.header.sticky) return (p.theme.size.height.header + p.theme.size.height.breadcrumbs) + p.theme.size.unit;
    return '0em';
  }} + 1em);

  ${p => {
    return p.theme.menu.divider
      ? `border-left: ${p.theme.menu.divider.width} solid ${p.theme.menu.color.divider};`
      : '';
  }}

  @media (max-width: ${p => p.theme.size.width.page + p.theme.size.unit}) {
    display: none;
  }

  li:first-of-type {
    padding-top: 0px;
  }

  li:last-child {
    padding-bottom: 0px;
  }
`;

const ListItem = styled('li')`
  padding: 5px 0px;
  padding-left: ${p => ((p.depth - 2) * p.theme.menu.space.tab) + p.theme.size.unit};

  color: ${p => p.active ? p.theme.menu.color.fgActive : p.theme.menu.color.fg};
  font-size: ${p => p.theme.menu.font.size};
  font-family: ${p => p.theme.menu.font.family};
  font-weight: ${p => p.theme.menu.font.weight};

  &:hover {
    cursor: pointer;
    color: ${p => p.theme.menu.color.fgHover};
  }
  
  a {
    text-decoration: none;

    color: ${p => p.active ? p.theme.menu.color.fgActive : p.theme.menu.color.fg};
    font-size: ${p => p.theme.menu.font.size};
    font-family: ${p => p.theme.menu.font.family};
    font-weight: ${p => p.theme.menu.font.weight};

    &:hover {
      cursor: pointer;
      color: ${p => p.theme.menu.color.fgHover};
    }
  }
`;

export default Menu;