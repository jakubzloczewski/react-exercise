import React from 'react';

class Button extends React.Component {
    render() {
        const {label, onClick, disabled} = this.props;
        const style = this.getStyle();


        return (<input style={style}
            type="button"
            value={label}
            onClick={onClick}
            disabled={disabled}/>);
    }

    getStyle() {
        return {};
    }
}

export default Button;