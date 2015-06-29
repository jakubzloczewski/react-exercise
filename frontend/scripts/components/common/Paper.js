import Radium from 'radium';
import React from 'react';
import theme from './theme.js';

@Radium
class Button extends React.Component {
    render() {
        const style = this.getStyle();

        return (<div style={[this.props.style, this.getStyle()]}>{this.props.children}</div>);
    }

    getStyle() {
        return {
            backgroundColor: theme.colors.paper.background,
            padding: '1em',
            boxShadow: '0px 1px 2px rgba(0,0,0,0.3)',
            margin: '0.5em'
        };
    }
}

export default Button;