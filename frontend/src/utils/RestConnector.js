import axios from "axios";

const env = process.env.NODE_ENV || "development";
const serverUrl =
    env === "development"
        ? "http://127.0.0.1:8000"
        : "https://omatko-app-backend.herokuapp.com";


export const sendContact = (title, content, email) => {
     return axios.post(`${serverUrl}/contact/`, {
        subject: title,
        message: content,
        email
    })
}

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
    const typeToColorMap = {
        TEO: "#93c47d",
        APP: "#125284",
        OTHER: "#38761d"
    }
    data.forEach(event => {
        var parsedEvent = {
            id: event.lecture_code,
            html: createHtmlForEvent(event),
            start: event.start_date,
            end: event.end_date,
            barColor: "#38761d",
            barBackColor: "#93c47d",
            backColor: typeToColorMap[event.type]
        }
        events.push(parsedEvent)
    })
    return events
}

const createHtmlForEvent = event => {
    return ("<div><b style='font-size: 16px'>" + event.title + "</b><br/>" + event.presenter + "</div>")
}
