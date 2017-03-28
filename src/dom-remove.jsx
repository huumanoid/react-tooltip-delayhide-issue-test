import React, {createElement} from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

import {ReactTooltipStand} from "./stand.jsx"

let remove = false

const component = (props) =>
  <ReactTooltipStand
    header={'"SampleText1" button will be removed in 5 seconds'}
    reactTooltipProps={{ effect: "solid" }}
  >
    <button style={{ display: "block" }} data-tip="two">This button will NOT be removed</button>
    {
      !props.remove &&
        <button style={{ display: "block" }} data-tip="one">This button will be removed</button>
    }
  </ReactTooltipStand>

const render = () =>
  ReactDOM.render(createElement(component, {remove}), document.getElementById('root'));

render(false)

setTimeout(() => {
  remove = true
  render()
}, 5000)
