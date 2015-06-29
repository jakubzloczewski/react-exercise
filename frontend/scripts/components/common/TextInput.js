import React from 'react';

class TextInput extends React.Component {
    render() {
        const {onChange, placeholder} = this.props;
        const style = this.getStyle();

        return (<input style={style}
            type="text"
            placeholder={placeholder}
            onChange={onChange}/>);
    }

    getStyle() {
        return {
            padding: '0.5em 1em',
            margin: '0.5em',
            fontSize: '0.7em'
        };
    }
}

export default TextInput;