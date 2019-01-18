import styled from '@emotion/styled';

const Title = styled('h1')`
  margin: .25em 0em;

  color: ${p => p.theme.color.fg};
  font-family: ${p => p.theme.font.family.title};
  font-weight: ${p => p.theme.font.weight.bold};

  font-size: ${p => p.fontSize || '3.5rem'};
`;

const Subtitle = styled('h2')`
  margin: 0em;

  color: ${p => p.theme.color.fg};
  font-family: ${p => p.theme.font.family.title};
  font-weight: ${p => p.theme.font.weight.semibold};

  font-size: ${p => p.fontSize || '1.25rem'};
`;

export { Title, Subtitle };