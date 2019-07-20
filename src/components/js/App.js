import React, { Component } from 'react';
import '../css/App.css';
import Spotify from 'spotify-web-api-js';
import { Redirect, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import background from '../../static/background.jpg'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Header from "./Header";
import Login from './login';
import Recent from "./recent";
import TopArtists from "./topArtists";
import TopTracks from "./topTracks";
import { createBrowserHistory } from "history";
const history = createBrowserHistory()

const spotifyApi = new Spotify();

class App extends Component {
    constructor() {
        console.log("constructor");
        super();
        this.state = {
            loggedIn: false,
        }
    }
    componentWillMount() {
        console.log("will mount");
        const params = this.getHashParams();
        const token = params.access_token;
        console.log("TOKEN", token);
        if(token) {
            console.log("Received Token");
            this.setState({
                loggedIn: true,
            });
            spotifyApi.setAccessToken(token);
            window.sessionStorage.setItem("jwt", token);
            console.log(this.state)
        }
    }
    getHashParams() {
        let hashParams = {};
        let e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        console.log(window.location.hash);
        while ( e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }
    render() {
        console.log(this.state)
        if (!this.state.loggedIn) {
            console.log("NOT LOGGED IN SO REDIRECTING")
            return <Redirect to='/login'/>
        } else {
            console.log("LOGGED IN");
            return (
                <div className="App">
                    <header id="App-header">
                        <p> HELLLLLO </p>
                        <Redirect to ='/top-tracks' />
                    </header>
                </div>
            );
        }
        //return setTimeout(this.loginHandler, 1000);
    }
}

export default App; 
