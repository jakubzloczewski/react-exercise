import Radium from 'radium';
import color from 'color';
import React from 'react';
import theme from './theme.js';

@Radium
class Button extends React.Component {
    render() {
        const {label, onClick, disabled} = this.props;
        const style = this.getStyle();


        return (<input style={[style]}
            type="button"
            value={label}
            onClick={onClick}
            disabled={disabled}/>);
    }

    getStyle() {
        const {disabled, primary, secondary} = this.props;

        const style = {
            display : 'inline-block',
            border: 0,
            backgroundColor: '#fff',
            padding: '0.5em 1em',
            margin: '0.5em',
            borderRadius : '2px',
            fontSize: '0.7em',
            transition: 'all 0.25s ease',
            boxShadow: '0px 1px 2px rgba(0,0,0,0.3)',
            cursor: 'pointer'
        };

        if (disabled) {
            style.color = theme.colors.disabled.text;
            style.backgroundColor = theme.colors.disabled.background;
        } else {
            if (primary) {
                style.color = theme.colors.primary.text;
                style[':hover'] = {
                    backgroundColor: theme.colors.primary.background
                }
            } else if (secondary) {
                style.color = theme.colors.secondary.text;

                style[':hover'] = {
                    backgroundColor: theme.colors.secondary.background
                }
            } else {
                style.color = theme.colors.def.text;

                style[':hover'] = {
                    backgroundColor: theme.colors.def.background
                }
            }
        }

        return style;
    }
}

export default Button;