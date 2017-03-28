import React, {createElement, Component} from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

let unmount = false
let remove = false

const toggleMount = () => {
  unmount = !unmount
  render()
}

export class ReactTooltipStand extends Component {
  constructor(...args) {
    super(...args)

    this.state = {
      mount: true,
    }
  }

  toggleMount() {
    this.setState({
      mount: !this.state.mount
    })
  }

  renderTools() {
    return <div>
      <button
      style={{ display: "block"}}
      onClick={() => ReactTooltip.rebuild()}
      >
        Rebuild
      </button>
      <button
        style={{ display: "block" }}
        onClick={this.toggleMount.bind(this)}
      >
        {this.state.mount ? "Unmount" : "Mount"}
      </button>
    </div>
  }

  render() {
    const {
      reactTooltipProps,
      reactTooltipChildren,
      header,
      children,
    } = this.props
    return <div>
      <h3>{header}</h3>
      <div style={{marginBottom: "20px"}}>
        {this.renderTools()}
      </div>
      {this.state.mount &&
          <ReactTooltip {...reactTooltipProps}>
            {reactTooltipChildren}
          </ReactTooltip>}
      <div>
        {children}
      </div>
    </div>
  }
}
