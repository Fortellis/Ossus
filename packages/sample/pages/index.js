import React from 'react';
import { withConfig, Routes, tocUtil } from 'ossus';
import {
    DocumentLayout,
    Title,
    Subtitle,
    Button,
    Flex
} from 'ossus-components';
import toc from '../config/tableOfContents';

// Get all pages in the table of contents
const homeButtonLinks = tocUtil(toc).getTopPages();

function Index({ config }) {
    return (
        <DocumentLayout>
            <Flex
                dir='column'
                margin='1em 0em 3em 0em'
                fill
            >
                <Title>{config.site.name}</Title>
                <Subtitle>{config.site.tagline}</Subtitle>
                <Flex margin='2em 0em 1em 0em'>
                    {homeButtonLinks.map(button => (
                        <ButtonLink link={button.link} key={button.link}>{button.title}</ButtonLink>
                    ))}
                </Flex>
            </Flex>
        </DocumentLayout>
    );
}

function ButtonLink({ children, link, ...rest }) {
    return (
        <Routes.Link route={link.route} params={link.params} {...rest}>
            <Button as='a' margin='0em .5em'>{ children }</Button>
        </Routes.Link>
    );
}

export default withConfig(Index);