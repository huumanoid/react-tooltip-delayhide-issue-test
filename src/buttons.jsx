import React from "react"
import ReactDOM from "react-dom"
import ReactTooltip from "react-tooltip"

ReactDOM.render(
    <div>
        <ReactTooltip event="focus" />
        <button data-tip="one" style={{ display: "block", marginBottom: "20px" }}>
            Button1
        </button>
        <button data-tip="two" style={{ display: "block", marginBottom: "20px" }}>
            Button2
        </button>
    </div>,
    document.getElementById('root')
)
