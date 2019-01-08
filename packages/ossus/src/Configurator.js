import React, { createContext, Component } from 'react';

const Config = createContext({
    site: {},
    toc: {},
});

function ConfigProvider({ site, toc, theme, children }) {
    return (
        <Config.Provider value={{ site, toc, theme }}>
            {children}
        </Config.Provider>
    );
}

function withConfig(WrappedComponent) {
    return class WithConfigComponent extends Component {
        static getInitialProps(context) {
            if (WrappedComponent.hasOwnProperty('getInitialProps')) {
                return WrappedComponent.getInitialProps(context);
            }
            return {}
        }

        render() {
            return (
                <Config.Consumer>
                    {config => (
                        <WrappedComponent config={config} {...this.props} />
                    )}
                </Config.Consumer>
            )
        }
    }
}

export {
    ConfigProvider,
    withConfig
}