import React from 'react';
import ReactDOM from 'react-dom';
//import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './components/App.js';
import Profile from './components/profile.js';
import TopArtists from './components/topArtists.js';
import TopTracks from './components/topTracks.js';
import Header from './components/Header.js';
import Login from "./components/login";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
	<Router>
		<Route exact path = '/' component = {Login} />
		<Route path ='/login' component = {Login} />
		<Route path = '/home' component = {App} />
		<Route path = '/profile' component = {Profile} />
		<Route path = '/top-artists' component = {TopArtists} />
		<Route path = '/top-tracks' component = {TopTracks} />
	</Router>
)

//ReactDOM.render(<Header />, document.getElementById('App-header'));
ReactDOM.render(routing, document.getElementById('content'));
