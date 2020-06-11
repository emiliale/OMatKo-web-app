import React, {Component} from 'react';
import {connect} from 'react-redux';
import Scheduler, {GENERAL} from "./Scheduler";
import {getAllEvents} from "../../utils/RestConnector";

class SchedulerController extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: []
        }

    }

    componentDidMount(props) {
        getAllEvents(events => this.setState({events: events}))
    }

    render() {
        return (<div><Scheduler type={GENERAL} events={this.state.events}/></div>);
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(SchedulerController);
