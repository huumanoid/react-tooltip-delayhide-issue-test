import React from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

ReactDOM.render(
    <div>
        <ReactTooltip effect="solid" />
        <h3>{'"SampleText1" button will be removed in 5 seconds'}</h3>
        <button
            style={{ display: "block", marginBottom: "40px" }}
            onClick={() => ReactTooltip.rebuild()}>
            Rebuild
        </button>
        <button id="btnToRemove" style={{ display: "block" }} data-tip="one">SampleText1</button>
    </div>,
    document.getElementById('root')
);

setTimeout(() => {
  const btn = document.getElementById('btnToRemove')
  btn.parentNode.removeChild(btn)
}, 5000)
