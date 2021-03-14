import React, {Component} from 'react';
import './App.css';
import Landing from './components/landing';
import MapContainer from './map';
import 'bootstrap/dist/css/bootstrap.min.css';
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-dark" style={{background:'#01119e',width:'100%'}}>
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">TranslatorGator</span>
            <span class="d-flex">
              <div class="p-2 w-100" style={{color:'#ffff'}}>Download Conversation</div>
                <button class="btn" type="submit" style={{backgroundColor:'#ff7d05',margin:5,color:'#ffff'}}>English</button>
                <button class="btn" type="submit" style={{backgroundColor:'#ff7d05',margin:5,color:'#ffff'}}>Spanish</button>
            </span>
        </div>
      </nav>
      <MapContainer/>
      <Landing/>
    </div>
  );
}

export default App;
