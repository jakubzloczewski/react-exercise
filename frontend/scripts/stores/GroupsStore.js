import alt from './../alt.js';
import _ from 'lodash';
import GroupsActions from './../actions/GroupsActions.js';

class GroupsStore {
    constructor() {
        this.bindActions(GroupsActions);
        this.fetching = null;
        this.groups = [{id: _.uniqueId(), name: 'Group 1'}, {id: _.uniqueId(), name: 'Group 2'}];
    }

    add(group) {
        this.groups.push(group);
    }
    remove(groupId) {
        this.groups = _.select(this.groups, g => g.id !== groupId);
    }
}

export default alt.createStore(GroupsStore, 'GroupsStore');
