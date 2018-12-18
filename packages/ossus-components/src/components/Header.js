import React from 'react';
import { Routes, withConfig } from 'ossus';
import styled from '@emotion/styled';
import { darken } from 'polished';

const Header = ({ config }) => (
    <header>
        <HeaderContainer>
            <div className='content'>
                <div>
                    <Routes.Link route="/">
                        <PageTitle>{config.site.name}</PageTitle>
                    </Routes.Link>
                </div>
                <div className='links'>
                    {
                        config.site.headerLinks.map(link => (
                            <Routes.Link
                                key={link.label}
                                route={link.route}
                                params={link.params}
                                prefetch>
                                <HeaderLink>{link.label}</HeaderLink>
                            </Routes.Link>
                        ))
                    }
                </div>
            </div>
        </HeaderContainer>
    </header>
);

const HeaderContainer = styled('div')`
    position: fixed;
    width: 100%;
    height: ${props => props.theme.size.height.header + props.theme.size.unit};
    background-color: ${props => props.theme.color.primary};
    padding: 1em 2em;
    top: 0;
    z-index: 99;

    .content {
        display: flex;
        align-items: center;
        max-width: ${props => props.theme.size.width.page}px;
        margin: 0 auto;
        height: 100%;

        .links {
            margin-left: auto;
        }

        @media (max-width: 720px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .links {
                width: 100%;
            }
        }
    }

    
`;

const PageTitle = styled('a')`
    font-family: ${props => props.theme.font.family.title};
    font-weight: ${props => props.theme.font.weight.bold};
    font-size: 1.5rem;
    color: ${props => props.theme.color.fgOnPrimary};
    margin: 0;

    &:hover {
        cursor: pointer;
    }
`;

const HeaderLink = styled('a')`
    color: ${props => props.theme.color.fgOnPrimary};
    font-family: ${props => props.theme.font.family.body};
    font-size: .9rem;
    text-decoration: none;
    padding: .5em 1em;

    &:hover {
        cursor: pointer;
        color: ${props => darken(0.1, props.theme.color.fgOnPrimary)};
    }
`;

export default withConfig(Header);