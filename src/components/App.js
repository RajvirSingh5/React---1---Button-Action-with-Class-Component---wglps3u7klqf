import React, {Component, useState} from "react";

import ButtonAction from "./ButtonAction";

import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	};

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
			<ButtonAction />
    		</div>
    	);
    }
}


export default App;

