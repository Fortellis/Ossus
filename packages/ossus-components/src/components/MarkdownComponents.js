import styled from 'react-emotion';

const A = styled('a')`
    color: ${props => props.theme.color.primary};
    text-decoration: none;
    font-family: ${props => props.theme.font.family.body};

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

const P = styled('p')`
    color: ${props => props.theme.color.text.body};
    font-family: ${props => props.theme.font.family.body};
    font-weight: ${props => props.theme.font.weight.regular};
    line-height: 1.5;
    font-size: ${props => props.theme.font.size.body + props.theme.font.size.unit};
    padding: .25em 0em;

    code {
        background-color: #efefef;
        border-radius: 2px;
        padding: 3px;
    }
`;

const Pre = styled('pre')`
    background-color: ${props => props.theme.color.backgroundDark};
    box-shadow: 0px 2px 5px rgba(0,0,0,.3);
    border-radius: 4px;
    padding: 1.5em;
    color: white;
    white-space: pre-wrap;
    word-wrap: break-word;
    font-weight: ${props => props.theme.font.weight.regular};
    max-height: 400px;
    overflow: auto;
`;

const Table = styled('table')`
    max-width: 100%;
    border: none;
    font-family: Raleway, sans-serif;
    font-size: .85rem;
    margin: 2em 0em;
    box-shadow: 0px 2px 5px rgba(0,0,0,.3);
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
        color: ${props => props.theme.color.text.body};
        font-family: ${props => props.theme.font.family.body};
        font-weight: ${props => props.theme.font.weight.regular};
        line-height: 1.5;
        font-size: ${props => props.theme.font.size.body + props.theme.font.size.unit};
        padding: .25em 0em;

        code {
            background-color: #efefef;
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
        color: ${props => props.theme.color.text.body};
        font-family: ${props => props.theme.font.family.body};
        font-weight: ${props => props.theme.font.weight.regular};
        line-height: 1.5;
        font-size: ${props => props.theme.font.size.body + props.theme.font.size.unit};
        padding: .25em 0em;

        code {
            background-color: #efefef;
            border-radius: 2px;
            padding: 3px;
        }

        p {
            margin: 0px;
        }
    }
`

export {
    A,
    P,
    Ul,
    Ol,
    Pre,
    Table,
}