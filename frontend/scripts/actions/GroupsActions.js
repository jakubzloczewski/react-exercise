import alt from './../alt.js';

class GroupsActions {
    add(group) {
        this.dispatch(_.extend({id: _.uniqueId()}, group));
    }
    remove(groupId){
        this.dispatch(groupId);
    }
}

export default alt.createActions(GroupsActions);
