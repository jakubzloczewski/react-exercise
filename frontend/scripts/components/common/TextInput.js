import React from 'react';

class TextInput extends React.Component {
    render() {
        const {onChange} = this.props;
        const style = this.getStyle();

        return (<input style={style}
            type="text"
            onChange={onChange}/>);
    }

    getStyle() {
        return {};
    }
}

export default TextInput;