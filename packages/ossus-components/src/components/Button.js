import styled from '@emotion/styled';

const Button = styled('button')`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: ${p => p.padding || '1em 2em'};
    margin: ${p => p.margin || '0em'};

    transition: background-color .25s ease, color .2s ease;

    color: ${p => p.theme.color.primary};
    background-color: ${p => p.theme.color.bg};
    border: 1.5px solid ${p => p.theme.color.primary};
    border-radius: ${p => p.theme.size.radius + p.theme.size.unit};
    font-family: ${p => p.theme.font.family.body};
    font-size: ${p => p.fontSize || p.theme.font.size.body + p.theme.font.size.unit};

    &:hover {
        cursor: pointer;

        background-color: ${p => p.theme.color.primary};
        color: ${p => p.theme.color.fgOnPrimary};
    }
`;

export default Button;