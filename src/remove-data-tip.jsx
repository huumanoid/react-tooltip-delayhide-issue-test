import React, {createElement, Component} from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

import {ReactTooltipStand} from "./stand.jsx"

class TipRemove extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      tip: true,
    }
  }
  render() {
    return <ReactTooltipStand
      reactTooltipChildren={
        <p>hello, world!</p>
      }
      tools={[
        <button onClick={() => this.setState({ tip: false })}>Remove data-tip</button>
      ]}
    >
      {
        this.state.tip
          ? <button data-tip >Element with data-tip</button>
          : <button>Element without data-tip</button>
      }
    </ReactTooltipStand>
  }
}

ReactDOM.render(createElement(TipRemove), document.getElementById('root'));
