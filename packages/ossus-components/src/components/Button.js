import styled from '@emotion/styled';

const Button = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: background-color .25s ease, color .2s ease;

  padding: ${p => p.padding || '1em 2em'};
  margin: ${p => p.margin || '0em'};
  width: ${p => p.width || 'auto'};
  height: ${p => p.height || 'auto'};
  font-size: ${p => p.fontSize || p.theme.button.font.size};

  color: ${p => p.theme.button.color.fg};
  background-color: ${p => p.theme.button.color.bg};
  border:${p => `${p.theme.button.borderWidth} solid ${p.theme.button.color.border}`};
  border-radius: ${p => p.theme.button.borderRadius};
  font-family: ${p => p.theme.button.font.family};
  font-weight: ${p => p.theme.button.font.weight};

  &:hover {
    cursor: pointer;

    color: ${p => p.theme.button.color.fgHover};
    background-color: ${p => p.theme.button.color.bgHover};
    border:${p => `${p.theme.button.borderWidth} solid ${p.theme.button.color.borderHover}`};
  }
`;

export default Button;