import React, { Component } from 'react';
import styled from '@emotion/styled';
import { darken } from 'polished';
import Feather from 'feathered';


class ScrollToTop extends Component {
    state = {
        visible: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {
        const threshold = 100;
        const scrollTop = e.pageY;
        if (scrollTop > threshold && !this.state.visible) {
            this.setState({
                visible: true
            });
        } else if (scrollTop < threshold && this.state.visible) {
            this.setState({
                visible: false
            });
        }
    }
    
    render() {
        return (
            <ScrollButton
                visible={this.state.visible}
                onClick={() => window.scrollTo(0,0)}
                title='Scroll to top'
            >
                <Feather icon='chevron-up' />
            </ScrollButton>
        );
    }
}

const ScrollButton = styled('button')`
    height: 60px;
    width: 60px;
    border: none;
    border-radius: 50%;
    background-color: ${props => props.theme.color.primary};
    color: white;
    position: sticky;
    margin: 0em 0em 20px calc(100% - 60px);
    bottom: 20px;
    box-shadow: 0px 2px 10px rgba(0,0,0,.3);
    opacity: ${props => props.visible ? '1' : '0'};

    transition: opacity .25s ease;

    &:hover {
        cursor: pointer;
        box-shadow: 0px 2px 15px rgba(0,0,0,.3);
    }
    &:active {
        background-color: ${props => darken(0.05, props.theme.color.primary)};
    }

    @media (max-width: ${props => props.theme.size.width.page + props.theme.size.unit}) {
        margin: 10px 0em 10px calc(100% - 60px);
    }
`;

export default ScrollToTop;