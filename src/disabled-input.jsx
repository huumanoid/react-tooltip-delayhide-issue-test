import React from "react"
import ReactDOM from "react-dom"
import ReactTooltip from "react-tooltip"

ReactDOM.render(
    <div>
        <ReactTooltip />
        <input disabled={true} data-tip="one" type="text" style={{ display: "block", marginBottom: "20px" }}/>
        <input data-tip="two" type="text" style={{ display: "block", marginBottom: "20px" }} />
        <span data-tip="three">
          <input type="text" style={{ marginBottom: "20px" }} disabled={true}/>
        </span>
    </div>,
    document.getElementById('root')
)
