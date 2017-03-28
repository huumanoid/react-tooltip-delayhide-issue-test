import React, {createElement, Component} from "react";
import ReactDOM from "react-dom";

import {ReactTooltipStand} from "./stand.jsx"

class RemoveFromDom extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      remove: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        remove: true,
      })
    }, this.props.timeout || 5000)
  }

  render() {
    const {remove} = this.state

    return <ReactTooltipStand
      header={'"SampleText1" button will be removed in 5 seconds'}
      reactTooltipProps={{ effect: "solid" }}
    >
      <button style={{ display: "block" }} data-tip="two">This button will NOT be removed</button>
      {
        !remove &&
          <button style={{ display: "block" }} data-tip="one">This button will be removed</button>
      }
    </ReactTooltipStand>
  }
}

ReactDOM.render(createElement(RemoveFromDom), document.getElementById('root'));
