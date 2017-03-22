import React, {createElement} from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

const remove = () => render(true)

const component = (props) =>
    <div>
        <ReactTooltip effect="solid" />
        <button
            style={{ display: "block", marginBottom: "40px" }}
            onClick={() => ReactTooltip.rebuild()}>
            Rebuild
        </button>
        <button
            style={{ display: "block", marginBottom: "40px" }}
            onClick={remove}>
            Remove Tip
        </button>
        {
          (props.remove &&
            <button style={{ display: "block" }}>Tip is removed</button>)
            || <button style={{ display: "block" }} data-tip="one">Hover me</button>
        }
    </div>

const render = (shouldRemove) =>
  ReactDOM.render(createElement(component, { remove:shouldRemove }), document.getElementById('root'));

render(false)
