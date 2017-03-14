import React from "react"
import ReactDOM from "react-dom"
import ReactTooltip from "react-tooltip"

ReactDOM.render(
    <div>
        <ReactTooltip />
        <div data-tip="first sample">
          <button>Hello</button>
        </div>
        <div data-tip="second sample">
          <button data-tip="seconds sample nested">Second</button>
        </div>
    </div>,
    document.getElementById('root')
)

