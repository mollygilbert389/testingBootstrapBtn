import React, { Component } from 'react'
import { Button } from 'reactstrap'
// import ButtonHolder from "./ButtonHolder"


export default class BSBtn extends Component {

 handleClick = () => {
    let BtnArray = ["red", "blue", "green"].map((btn) => {
        return React.createElement(
            Button,
            {variant: 'primary'},
            btn,
          )
    })
    return BtnArray
 }
    
    render() {
        return (
            <div>
              <Button onClick={this.handleClick}>Click Me</Button>
              <div id="newBtnSpace">

              </div>
            </div>
        )
    }
}
