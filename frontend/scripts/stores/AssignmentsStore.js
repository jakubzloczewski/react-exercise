import alt from './../alt.js';
import _ from 'lodash';
import AssignmentsActions from './../actions/AssignmentsActions.js';

class AssignmentsStore {
    constructor() {
        this.bindActions(AssignmentsActions);
        this.fetching = null;
        this.assignments = [];
    }

    add(assignment) {
        if (!_.findWhere(this.assignments, assignment)) {
            this.assignments.push(assignment)
        }
    }

    remove(assignment) {
        this.assignments = _.without(this.assignments, _.findWhere(this.assignments, assignment));
    }
}

export default alt.createStore(AssignmentsStore, 'AssignmentsStore');
