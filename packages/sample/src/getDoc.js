import React, { Component } from 'react';

function getDoc(WrappedComponent) {
    return class ComponentWithDocRouting extends Component {
        static getInitialProps = async context => {
            const { page, section, doc } = context.query;
            let props = {};
            try {
                const content = await require(`../documentation/${page}/${section}/${doc}.md`);
                props = { statusCode: 200, content, page, section, doc };
            } catch (err) {
                props = { statusCode: 404, content: '', page };
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

export default getDoc;