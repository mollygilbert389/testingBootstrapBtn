import React, { Component } from 'react'
import { Button } from 'reactstrap'
// import ButtonHolder from "./ButtonHolder"


export default class BSBtn extends Component {

 handleClick = () => {
    let BtnArray = ["red", "blue", "green"]
    
    BtnArray.map((btn) => {
            React.createElement(
            Button,
            BtnArray,
          )
          return btn
    })


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
