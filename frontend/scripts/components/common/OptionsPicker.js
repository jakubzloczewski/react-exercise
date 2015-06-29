import React from 'react';
import _ from 'lodash';

class OptionPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedOption: _.first(this.props.options)};
    }

    render() {
        const {options} = this.props;


        return (
            <div>
                <select onChange={this.onChange.bind(this)}>
                    {options.map(g => {
                        return <option key={g.id} value={g.id}>{g.name}</option>
                    })}
                </select>
                <input type="button" value="add" onClick={this.onClick.bind(this)}/>
            </div>
        );
    }

    onChange(ev) {
        const selectedOption = _.findWhere(this.props.options, {id: ev.target.value});
        this.setState({selectedOption});
    }

    onClick() {
        this.props.onSelect(this.state.selectedOption.id);
    }
}

export default OptionPicker;