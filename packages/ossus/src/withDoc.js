import React, { Component } from 'react';
import tocUtil from './utils/tableofcontents';

// HOC to manage the state required for the base doc component
// Expects to be wrapped by withConfig HOC
function withDocRouting(WrappedComponent) {
  return class ComponentWithDocRouting extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeHeader: '',
        prevDoc: undefined,
        nextDoc: undefined,
        menu: undefined
      };
    }

    static getInitialProps = async (context) => {
      let props = {};
      // Call the wrapped components getInitialProps and add to props passed down
      if (WrappedComponent.hasOwnProperty('getInitialProps')) {
        return { ...props, ...WrappedComponent.getInitialProps(context) };
      }
      return props;
    };

    componentDidMount() {
      this.setPaging();
    }

    componentDidUpdate(prevProps) {
      if (prevProps.content !== this.props.content) {
        this.setPaging();
      }
    }

    setPaging() {
      const { doc, page, config } = this.props;
      this.setState({ ...tocUtil(config.toc).getSurroundingDocs(page, doc) });
    }

    watchScroll = id => this.setState({ activeHeader: id });

    watchMenu = menu => this.setState({ menu });

    watchFront = front => this.setState({ front });

    render() {
      const {
        menu,
        front,
        prevDoc,
        nextDoc,
        activeHeader,
      } = this.state;
      
      return (
        <WrappedComponent
          menu={menu}
          front={front}
          prevDoc={prevDoc}
          nextDoc={nextDoc}
          activeHeader={activeHeader}
          watchScroll={this.watchScroll}
          watchFront={this.watchFront}
          watchMenu={this.watchMenu}
          {...this.props}
        />
      );
    }
  };
}

export default withDocRouting;