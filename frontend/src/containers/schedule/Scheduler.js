import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DayPilot, DayPilotCalendar} from "daypilot-pro-react";
import PropTypes from 'prop-types';

export const GENERAL = "GENERAL"
export const OWN = "OWN"

class Scheduler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: "2020-05-10",
            viewType: "Days",
            days: 4,
            dayBeginsHour: 9,
            dayEndsHour: 20,
            cellHeight: 30,
            eventHoverHandling: "Bubble",
            eventMoveHandling: "Disabled",
            timeRangeSelectedHandling: "Disabled",
            onBeforeEventRender: args => {
                args.data.bubbleHtml = props.type === GENERAL ? "Dodaj do własnego harmonogramu" : "Usuń";
                args.data.backColor = args.data.backColor || "#93c47d";
                args.data.barHidden = true;
                args.data.fontColor = "white";
                args.data.borderColor = "darker";

            }
        };
    }

    showDetails(e) {
        DayPilot.Modal.alert(e.data.text);
    }

    componentDidMount(props) {



    }

    render() {
        var {...config} = this.state;
        config.events = this.props.events
        return (
            <div>
                <DayPilotCalendar
                    {...config}
                    ref={component => {
                        this.calendar = component && component.control;
                    }}
                />
            </div>
        );
    }
}


Scheduler.propTypes = {
        type: PropTypes.string.isRequired,
        events: PropTypes.array.isRequired
}
export default Scheduler;
