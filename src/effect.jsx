import React from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

ReactDOM.render(
    <div>
        <ReactTooltip delayHide={1000} />
        <button
            style={{ display: "block", marginBottom: "20px" }}
            onClick={() => ReactTooltip.rebuild()}>
            Rebuild
        </button>
        <button style={{ display: "block" }} data-tip="one">SampleText1</button>
        <button style={{ display: "block" }} data-effect="solid" data-tip="two">SampleText2</button>
    </div>,
    document.getElementById('root')
);
