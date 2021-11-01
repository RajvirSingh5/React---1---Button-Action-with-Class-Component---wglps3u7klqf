import React from 'react';

class ButtonDisplay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      textToDisplay: ""
    }
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState({
      textToDisplay : "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    })
  }

  render() {
    return(
      <div>
        <button id="click" onClick={this.handleClick}>Click Here</button>
        <p>{this.state.textToDisplay}</p>
      </div>
    );
  }
}


export default ButtonDisplay;
