import React from 'react';
import styled from '@emotion/styled';
import { lighten } from 'polished';

const A = styled('a')`
    text-decoration: none;
    color: ${p => p.theme.type.a.color};
    font-size: ${p => p.theme.type.a.font.size};
    font-family: ${p => p.theme.type.a.font.family};
    font-weight: ${p => p.theme.type.a.font.weight};
    &:hover {
        cursor: pointer;
        text-decoration: underline;
        color: ${p => lighten(0.1, p.theme.type.a.color)};
    }
`;

const P = styled('p')`
    color: ${p => p.theme.type.p.color};
    font-size: ${p => p.theme.type.p.font.size};
    font-family: ${p => p.theme.type.p.font.family};
    font-weight: ${p => p.theme.type.p.font.weight};
    line-height: 1.5;
    padding: .25em 0em;

    code {
        background-color: ${p => p.theme.code.color.inlineBg};
        font-family: ${p => p.theme.code.font.family};
        font-size: ${p => p.theme.code.font.size};
        border-radius: 2px;
        padding: 3px;
    }
`;

const Pre = styled('pre')`
    background-color: ${p => p.theme.code.color.blockBg};
    font-family: ${p => p.theme.code.font.family};
    font-size: ${p => p.theme.code.font.size};
    box-shadow: ${p => p.theme.shadow};
    border-radius: 4px;
    padding: 1.5em;
    color: white;
    white-space: pre-wrap;
    word-wrap: break-word;
    max-height: 400px;
    overflow: auto;
`;

const Table = styled('table')`
    max-width: 100%;
    border: none;
    font-family: Raleway, sans-serif;
    font-size: .85rem;
    margin: 2em 0em;
    box-shadow: ${p => p.theme.shadow};
    padding: 0;
    border-collapse: collapse;
    border-radius: 4px;

    th,
    td {
        padding: 1.25em;
        text-align: left;
    }

    th {
        font-size: .75rem;
    }

    td {
        border-bottom: 1px solid #ddd;
    }
`;

const Ul = styled('ul')`
    padding-left: 25px;

    li {
        color: ${p => p.theme.type.list.color};
        font-family: ${p => p.theme.type.list.font.family};
        font-weight: ${p => p.theme.type.list.font.weight};
        font-size: ${p => p.theme.type.list.font.size};
        line-height: 1.5;
        padding: .25em 0em;

        code {
            background-color: ${p => p.theme.code.color.inlineBg};
            border-radius: 2px;
            padding: 3px;
        }

        p {
            margin: 0px;
        }
    }
`;

const Ol = styled('ol')`
    padding-left: 15px;

    li {
        color: ${p => p.theme.type.list.color};
        font-family: ${p => p.theme.type.list.font.family};
        font-weight: ${p => p.theme.type.list.font.weight};
        font-size: ${p => p.theme.type.list.font.size};
        line-height: 1.5;
        padding: .25em 0em;

        code {
            background-color: ${p => p.theme.code.color.inlineBg};
            border-radius: 2px;
            padding: 3px;
        }

        p {
            margin: 0px;
        }
    }
`;

const H1 = styled('h1')`
    font-size: ${p => p.theme.type.heading.one.font.size};
    font-family: ${p => p.theme.type.heading.one.font.family};
    font-weight: ${p => p.theme.type.heading.one.font.weight};
    color: ${p => p.theme.type.heading.one.color};
`;

const H2 = styled('h2')`
     font-size: ${p => p.theme.type.heading.two.font.size};
    font-family: ${p => p.theme.type.heading.two.font.family};
    font-weight: ${p => p.theme.type.heading.two.font.weight};
    color: ${p => p.theme.type.heading.one.color};

    &:before {
        content: ' ';
        display: block;
        margin-top: -${p => p.theme.size.height.header + p.theme.size.height.breadcrumbs + p.theme.size.unit};
        height: ${p => p.theme.size.height.header + p.theme.size.height.breadcrumbs + p.theme.size.unit};
        visibility: hidden;
        pointer-events: none;
    }
`;

const H3 = styled('h3')`
    font-size: ${p => p.theme.type.heading.three.font.size};
    font-family: ${p => p.theme.type.heading.three.font.family};
    font-weight: ${p => p.theme.type.heading.three.font.weight};
    color: ${p => p.theme.type.heading.three.color};
    
    &:before {
        content: ' ';
        display: block;
        margin-top: -${p => p.theme.size.height.header + p.theme.size.height.breadcrumbs + p.theme.size.unit};
        height: ${p => p.theme.size.height.header + p.theme.size.height.breadcrumbs + p.theme.size.unit};
        visibility: hidden;
        pointer-events: none;
    }
`;

const H4 = styled('h4')`
     font-size: ${p => p.theme.type.heading.four.font.size};
    font-family: ${p => p.theme.type.heading.four.font.family};
    font-weight: ${p => p.theme.type.heading.four.font.weight};
    color: ${p => p.theme.type.heading.four.color};

    &:before {
        content: ' ';
        display: block;
        margin-top: -${p => p.theme.size.height.header + p.theme.size.height.breadcrumbs + p.theme.size.unit};
        height: ${p => p.theme.size.height.header + p.theme.size.height.breadcrumbs + p.theme.size.unit};
        visibility: hidden;
        pointer-events: none;
    }
`;

const Blockquote = styled('blockquote')`

`;

export {
    A,
    P,
    Ul,
    Ol,
    H1,
    H2,
    H3,
    H4,
    Pre,
    Table,
}