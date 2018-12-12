import React, { Fragment } from 'react';
import { ConfigContext } from 'ossus-components';

function Index() {
    return (
        <ConfigContext.Consumer>
            {({ site }) => (
                <Fragment>
                    <h1>{site.name}</h1>
                    <h2>{site.tagline}</h2>
                </Fragment>
            )}
        </ConfigContext.Consumer>
    );
}

export default Index;