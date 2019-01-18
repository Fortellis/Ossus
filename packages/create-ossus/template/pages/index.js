import React from 'react';
import { withConfig, tocUtil } from 'ossus';
import {
    DocumentLayout,
    Subtitle,
    Button,
    Title,
    Link,
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
                fillParent
            >
                <Title>{config.site.name}</Title>
                <Subtitle>{config.site.tagline}</Subtitle>
                <Flex margin='2em 0em 1em 0em'>
                    {homeButtonLinks.map(button => (
                        <Link
                            route={button.link.route}
                            params={button.link.params}
                            margin='0em .5em'
                            key={button.link}
                            as={Button}
                        >
                            {button.title}
                        </Link>
                    ))}
                </Flex>
            </Flex>
        </DocumentLayout>
    );
}

export default withConfig(Index);