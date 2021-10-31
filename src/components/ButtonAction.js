import React, {Component} from 'react';

class ButtonAction extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  ButtonChange = () =>{
    return <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
  }


  render() {
    return(
      <button id= "click" onClick={this.ButtonChange}>
        Click Here
      </button>

    );
  }
}

export default ButtonAction;
