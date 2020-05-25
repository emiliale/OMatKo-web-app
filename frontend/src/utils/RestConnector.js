import {DayPilot} from "daypilot-pro-react";
import axios from "axios";
import React from 'react';

const env = process.env.NODE_ENV || "development";
const serverUrl =
    env === "development"
        ? "http://127.0.0.1:8000"
        : "https://omatko-app-backend.herokuapp.com";


export const getAllEvents = (callback) => {


    axios.get(`${serverUrl}/apiEvent/`).then(res => {
        callback(parseEvents(res.data))


    })
    //poki co mock, bo nie ma backendu. potem trzeba bedzie je wyciagnac z backendu i pewnie sparsowac
    /*return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    html: "tak",
                    start: DayPilot.Date.today().addHours(10).addMinutes(18),
                    end: DayPilot.Date.today().addHours(14),
                    backColor: "#123456"
                },
                {
                    id: 2,
                    text: "Event 2",
                    start: "2020-05-09T10:00:00",
                    end: "2020-05-09T11:20:00",
                    barColor: "#38761d",
                    barBackColor: "#93c47d",
                    backColor: "#515161"
                }
            ])
        }, 300)
    })*/
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
    return ("<div><b style='font-size: 16px'>"+event.title+"</b><br/>"+event.description+"<br/>"+event.presenter+"</div>")
}
