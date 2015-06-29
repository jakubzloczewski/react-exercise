import React from 'react';
import _ from 'lodash';

class GroupPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedGroup: _.first(this.props.groups)};
    }

    render() {
        const {groups} = this.props;

        const options = groups.map(g => {
            return <option key={g.id} value={g.id}>{g.name}</option>
        });

        return (
            <div>
                <select onChange={this.onChange.bind(this)}>
               {options}
                </select>
                <input type="button" value="add to group" onClick={this.onClick.bind(this)}/>
            </div>
        );
    }

    onChange(ev) {
        const selectedGroup = _.findWhere(this.props.groups, {id: ev.target.value});
        this.setState({selectedGroup});
    }

    onClick() {
        this.props.onSelect(this.state.selectedGroup.id);
    }
}

export default GroupPicker;