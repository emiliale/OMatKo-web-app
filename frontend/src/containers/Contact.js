import React, {Component} from 'react';
import {Input} from "antd";
import TextArea from "antd/es/input/TextArea";
import Button from "antd/es/button";
import {sendContact} from "../utils/RestConnector";

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            content: "",
            email: ""
        }
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    sendRequest = () => {
        const {title, content, email} = this.state
        sendContact(title, content, email).then( res =>{
            //daj tu wiadomosc jakas albo sprawdz czy jest status 200 i dopiero wtedy daj
            window.alert("Wysłano wiadomość.")
            this.setState({
                title: "",
                content: "",
                email: ""
            })
        })
    }

    render() {
        const {title, content, email} = this.state
        return (
            <div>

                <label>tytuł:</label>
                <Input name="title" onChange={this.onChange} value={title}/>
                <br/>
                <br/>
                <label>treść:</label>
                <TextArea name="content" onChange={this.onChange} value={content}/>
                <br/>
                <br/>
                <label>email:</label>
                <Input name="email" onChange={this.onChange} value={email}/>
                <br/>
                <br/>
                <Button type="primary" style={{marginRight: '10px'}} onClick={this.sendRequest}>wyślij</Button>
            </div>
        );
    }
}

export default Contact;
