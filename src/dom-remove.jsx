import React, {createElement} from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

let unmount = false
let remove = false

const toggleMount = () => {
  unmount = !unmount
  render()
}

const component = (props) =>
    <div>
        {!props.unmount && <ReactTooltip effect="solid" />}
        <h3>{'"SampleText1" button will be removed in 5 seconds'}</h3>
        <button
            style={{ display: "block"}}
            onClick={() => ReactTooltip.rebuild()}>
            Rebuild
        </button>
        <button
            style={{ display: "block", marginBottom: "40px" }}
            onClick={toggleMount}>
            Unmount
        </button>
        <button style={{ display: "block" }} data-tip="two">This button will NOT be removed</button>
        {
          !props.remove &&
            <button style={{ display: "block" }} data-tip="one">This button will be removed</button>
        }
    </div>

const render = () =>
  ReactDOM.render(createElement(component, {remove, unmount}), document.getElementById('root'));

render(false)

setTimeout(() => {
  remove = true
  render()
}, 5000)
