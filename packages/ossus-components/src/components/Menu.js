import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

function toTop() {
    window.scrollTo(0,0);
}

function Menu({ menu, activeHeader }) {
    return (
        <div>
            {
                (menu && menu.length) ? (
                    <List>
                        <ListItem
                            active={title === activeHeader}
                            onClick={toTop}
                            title='Return to top'
                        >
                            CONTENTS
                        </ListItem>
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
                ) : ( <List></List> )
            }
        </div>
    )
};

Menu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.object).isRequired, // Requires the array of headings output from remark-outer-toc
    activeHeader: PropTypes.string
}

const List = styled('ul')`
    max-width: ${props => props.theme.size.width.menu + props.theme.size.unit};
    min-width: ${props => props.theme.size.width.menu + props.theme.size.unit};
    list-style: none;
    border-left: 2px solid ${props => props.theme.color.secondary};
    position: sticky;
    margin-top: 0px;
    left: ${props => (props.theme.size.width.page - props.theme.size.width.menu) + props.theme.size.unit};
    top: calc(${props => (props.theme.size.height.header + props.theme.size.height.breadcrumbs) + props.theme.size.unit} + 1em);
    padding-left: 15px;
    max-height: 500px;
    overflow: auto;

    @media (max-width: ${props => props.theme.size.width.page + props.theme.size.unit}) {
        display: none;
    }

    li:first-child {
        padding-top: 0px;
    }

    li:last-child {
        padding-bottom: 0px;
    }
`;

const ListItem = styled('li')`
    font-size: .8rem;
    font-family: ${props => props.theme.font.family.body};
    font-weight: ${p => p.theme.font.weight.semibold};
    padding: 5px 0px;
    color: ${props => props.theme.color.text.body};
    padding-left: ${p => (p.depth - 2) * 15}px;
    ${p => p.active ? `
    font-weight: ${p.theme.font.weight.bold};
    color: ${p.theme.color.primary};
    ` : ''}

    &:hover {
        cursor: pointer;
        color: ${props => props.theme.color.primary};
        font-weight: ${p => p.theme.font.weight.semibold};
    }
    
    a {
        text-decoration: none;
        color: ${props => props.theme.color.text.body};
        ${p => p.active ? `
        font-weight: ${p.theme.font.weight.bold};
        color: ${p.theme.color.primary};
        ` : ''}

        &:hover {
            color: ${props => props.theme.color.primary};
            font-weight: 500;
        }
    }
`;

export default Menu;