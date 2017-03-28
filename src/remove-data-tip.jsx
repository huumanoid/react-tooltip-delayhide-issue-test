import React, {createElement, Component} from "react";
import ReactDOM from "react-dom";

import {ReactTooltipStand} from "./stand.jsx"

class TipRemove extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      tip: this.props.tip != null
        ? this.props.tip
        : true,
    }
  }
  render() {
    return <ReactTooltipStand
      reactTooltipChildren={
        <p>hello, world!</p>
      }
      tools={[
        <button
          onClick={() => this.setState({ tip: !this.state.tip })}
        >
          {this.state.tip ? 'Remove data-tip' : 'Add data-tip'}
        </button>
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
