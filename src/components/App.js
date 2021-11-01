import React, {Component, useState} from "react";

import ButtonDisplay from './ButtonDisplay.js'

import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	};

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
			<ButtonDisplay />
    		</div>
    	);
    }
}


export default App;

