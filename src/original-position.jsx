import React from "react"
import ReactDOM from "react-dom"
import ReactTooltip from "react-tooltip"

ReactDOM.render(
    <div>
        <ReactTooltip />
        <div style={{ background: 'green', display: "block", width: '100%', height: '20px'}} data-tip="one two three"></div>
    </div>,
    document.getElementById('root')
)
