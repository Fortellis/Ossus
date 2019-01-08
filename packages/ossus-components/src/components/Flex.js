import styled from '@emotion/styled';

const Flex = styled('div')`
    display: flex;

    flex-direction: ${p => p.dir || 'row'};
    justify-content: ${p => p.justify || 'center'};
    align-items: ${p => p.align || 'center'};
    flex-wrap: ${p => p.wrap || 'nowrap'};
    padding: ${p => p.padding || '0em'};
    margin: ${p => p.margin || '0em'};

    ${p => p.fill ? `
        width: 100%;
        height: 100%;
    `: ''}
`;

export default Flex;