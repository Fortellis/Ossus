import React, { Fragment } from 'react';
import { withConfig } from 'ossus';
import { H1, H2, DocumentLayout, DocumentContent } from 'ossus-components';

function Index({ config }) {
    return (
        <DocumentLayout>
            <H1>{config.site.name}</H1>
            <H2>{config.site.tagline}</H2>
        </DocumentLayout>
    );
}

export default withConfig(Index);