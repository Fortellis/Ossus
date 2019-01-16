import React from 'react';
import { withConfig } from 'ossus';
import styled from '@emotion/styled';
import { darken } from 'polished';
import Link from './Link';

const Header = ({ config }) => (
    <header>
        <HeaderContainer>
            <div className='content'>
                <div className='title'>
                    <Link route="/" as={PageTitle}>{config.site.name}</Link>
                </div>
                <div className='links'>
                    {
                        config.site.headerLinks.map(link => (
                            <Link
                                key={link.label}
                                href={link.href}
                                route={link.route}
                                params={link.params}
                                as={HeaderLink}
                                prefetch
                            >
                                {link.label}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </HeaderContainer>
    </header>
);

const HeaderContainer = styled('div')`
    position: ${p => p.theme.header.sticky ? 'fixed' : 'static'};
    width: 100%;
    height: ${p => p.theme.size.height.header + p.theme.size.unit};
    background-color: ${p => p.theme.header.color};
    padding: 1em 2em;
    top: 0;
    z-index: 99;

    @media (max-width: 720px) {
        height: auto;
        padding: 0px;
    }

    .content {
        display: flex;
        align-items: center;
        max-width: ${p => p.theme.size.width.page + p.theme.size.unit};
        margin: 0 auto;
        height: 100%;

        .links {
            margin-left: auto;
        }

        @media (max-width: ${p => p.theme.size.responsive.mobile + p.theme.size.responsive.unit}) {
            flex-direction: column;

            .title {
                width: 100%;
                height: ${p => p.theme.size.height.headerMobile / 2 + p.theme.size.unit};
                display: flex;
                align-items: center;
                justify-content: flex-start;
                background-color: ${p => p.theme.header.color};
                padding: .5em 1em;
            }

            .links {
                width: 100%;
                height: ${p => p.theme.size.height.headerMobile / 2 + p.theme.size.unit};
                overflow-x: auto;
                display: flex;
                align-items: center;
                background-color: ${p => darken(0.1, p.theme.header.color)};
                padding: .5em 0em;
            }
        }
    }

    
`;

const PageTitle = styled('a')`
    font-family: ${p => p.theme.header.title.font.family};
    font-weight: ${p => p.theme.header.title.font.weight};
    font-size: ${p => p.theme.header.title.font.size};
    color: ${p => p.theme.header.title.color};
    margin: 0;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: ${p => p.theme.size.responsive.mobile + p.theme.size.responsive.unit}) {
        font-size: ${p => p.theme.header.title.font.sizeMobile};
    }
`;

const HeaderLink = styled('a')`
    font-family: ${p => p.theme.header.link.font.family};
    font-weight: ${p => p.theme.header.link.font.weight};
    font-size: ${p => p.theme.header.link.font.size};
    color: ${p => p.theme.header.link.color};
    text-decoration: none;
    padding: .5em 1em;
    white-space: nowrap;

    &:hover {
        cursor: pointer;
        color: ${p => darken(0.1, p.theme.header.link.color)};
    }
`;

export default withConfig(Header);