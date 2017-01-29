import React from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

ReactDOM.render(
    <div>
        <h1>Fixed</h1>
        <ReactTooltip delayHide={1000} effect="solid" />
        <button
            style={{ display: "block", marginBottom: "20px" }}
            onClick={() => ReactTooltip.rebuild()}>
            Rebuild
        </button>
        <button style={{ display: "block" }} data-tip="one">SampleText1</button>
    </div>,
    document.getElementById('root')
);
