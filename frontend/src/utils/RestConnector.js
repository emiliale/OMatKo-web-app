import {DayPilot} from "daypilot-pro-react";
import axios from "axios";
import React from 'react';


const env = process.env.NODE_ENV || "development";
const serverUrl =
    env === "development"
        ? "http://127.0.0.1:8000"
        : "https://omatko-app-backend.herokuapp.com";


export const getAllEvents = (callback) => {


    axios.get(serverUrl + "/apiEvent/").then(res => {
        callback(parseEvents(res.data))


    })
}


const parseEvents = data => {
    const events = []
    data.forEach(event => {
        var parsedEvent = {
            id: event.lecture_code,
            html: createHtmlForEvent(event),
            start: event.start_date,
            end: event.end_date,
            barColor: "#38761d",
            barBackColor: "#93c47d",
            //backColor: event.id_potoku === 1 ? "#515161" : "#125284"
        }
        events.push(parsedEvent)
    })
    return events
}

const createHtmlForEvent = event => {
    return ("<div><b style='font-size: 16px'>"+event.title+"</b><br/>"+event.presenter+"</div>")
}
