import React,  { Component } from 'react';
import {Container,Jumbotron,Row,Col} from 'react-bootstrap';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
require('dotenv').config();

class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            translatedText: '',
            textToTranslate: ''
        };
    }

    render() {
        return(
            <div className="chat-container" style={{marginTop:"450px",height:200}}>
                <Row fluid>
                    <Col sm={1}></Col>
                    <Col sm={2}>
                        <p1 style={{color:'#ff7d05'}}>Rate the translation:</p1>
                        <div>
                        <button class="btn" type="submit">
                            <i class="bi bi-emoji-smile"></i>
                        </button>
                        <button class="btn" type="submit">
                            <i class="bi bi-emoji-frown"></i>
                        </button>
                        </div>
                    </Col>
                    <Col sm={6}id="chat-window">
                        <div id="chat-panel" style={{backgroundColor:'#eee',position:'static',height:150,overflowY:"scroll"}}>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <p1 style={{color:'#01119e'}}>Rate the translation:</p1>
                        <div>
                        <button class="btn" type="submit">
                            <i class="bi bi-emoji-smile"></i>
                        </button>
                        <button class="btn" type="submit">
                            <i class="bi bi-emoji-frown"></i>
                        </button>
                        </div>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
                <Row style={{marginTop:'25px'}}>
                    <Col>
                        <div id="chat-form-left">
                            <input style={{width:'80%'}} id="typing-left" type="text" placeholder="Type message in English here"/>
                            <button class="btn" style={{backgroundColor:'#01119e',color:'#ffff'}} id = "chat-button-left" onClick={(e) => this.translateTextLeft(document.getElementById('typing-left').value,'en','es',false)}>Send</button>
                        </div>
                    </Col>
                    <Col>
                        <div id="chat-form-right">
                            <input style={{width:'80%'}} id="typing-right" type="text" placeholder="Type message in Spanish here"/>
                            <button class="btn" style={{backgroundColor:'#ff7d05',color:'#ffff'}} onClick={(e) => this.translateTextRight(document.getElementById('typing-right').value,'es','en')}>Send</button>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }

    translateTextRight = (textToTranslate,fromLang,toLang) => {
        
        let text = textToTranslate;

        let API_KEY = process.env.API_KEY;
        
        let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
        url += '&q=' + encodeURI(text);
        url += `&source=${fromLang}`;
        url += `&target=${toLang}`;
        
        fetch(url, { 
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        })
        .then(res => res.json())
        .then((response,side) => {
                var html = '<div style=\'display:grid;grid-template-columns:70%;margin-top:10px;margin-bottom:10px;justify-content:end;justify-items:end\'}>'+'<div style=\'background:#ff7d05;color:#ffff;border:4px solid #ff7d05;border-radius:14px 14px 0 14px\'>'+response.data.translations[0].translatedText+'</div>'+'</div>';
                document.getElementById('chat-panel').innerHTML = document.getElementById('chat-panel').innerHTML + html;
                document.getElementById('typing-right').value = "";
                let chatWindow = document.getElementById('chat-panel'); 
                var xH = chatWindow.scrollHeight; 
                chatWindow.scrollTo(0, xH);
        })
        .catch(error => {
          console.log("There was an error with the translation request: ", error);
        });

    };

    translateTextLeft = (textToTranslate,fromLang,toLang) => {
        
        let text = textToTranslate;
        let API_KEY = process.env.API_KEY;
        
        let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
        url += '&q=' + encodeURI(text);
        url += `&source=${fromLang}`;
        url += `&target=${toLang}`;
        
        fetch(url, { 
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        })
        .then(res => res.json())
        .then((response,side) => {
            var html = '<div style=\'display:grid;grid-template-columns:70%;margin-top:10px;margin-bottom:10px;justify-content:start;justify-items:start\'}>'+'<div style=\'background:#01119e;color:#ffff;border:4px solid #01119e;border-radius:14px 14px 14px 0\'>'+response.data.translations[0].translatedText+'</div>'+'</div>';
            document.getElementById('chat-panel').innerHTML = document.getElementById('chat-panel').innerHTML + html;
            document.getElementById('typing-left').value = "";
            let chatWindow = document.getElementById('chat-panel'); 
            var xH = chatWindow.scrollHeight;                
            chatWindow.scrollTo(0, xH);
        })
        .catch(error => {
          console.log("There was an error with the translation request: ", error);
        });

    };
}

export default Landing;
