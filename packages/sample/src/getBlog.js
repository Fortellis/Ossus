import React, { Component } from 'react';

function getBlog(WrappedComponent) {
    return class ComponentWithDocRouting extends Component {
        static getInitialProps = async context => {
            const { post } = context.query;
            let props = {};
            try {
                const content = await require(`../blog/${post}.md`);
                props = { statusCode: 200, content, post };
            } catch (err) {
                props = { statusCode: 404, content: '', post };
            }
            // Call the wrapped components getInitialProps and add to props passed down
            if (WrappedComponent.hasOwnProperty('getInitialProps')) {
                return { ...props, ...WrappedComponent.getInitialProps(context) };
            }
            return props;
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
}

export default getBlog;