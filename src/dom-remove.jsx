import React, {createElement} from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

const component = (props) =>
    <div>
        <ReactTooltip effect="solid" />
        <h3>{'"SampleText1" button will be removed in 5 seconds'}</h3>
        <button
            style={{ display: "block", marginBottom: "40px" }}
            onClick={() => ReactTooltip.rebuild()}>
            Rebuild
        </button>
        <button style={{ display: "block" }} data-tip="two">This button will NOT be removed</button>
        {
          !props.remove &&
            <button style={{ display: "block" }} data-tip="one">This button will be removed</button>
        }
    </div>

const render = (shouldRemove) =>
  ReactDOM.render(createElement(component, { remove:shouldRemove }), document.getElementById('root'));

render(false)

setTimeout(() => {
  render(true)
}, 5000)
