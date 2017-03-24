import React from "react"
import ReactDOM from "react-dom"
import ReactTooltip from "react-tooltip"

ReactDOM.render(
    <div>
        <ReactTooltip id="first" event="click" globalEventOff="click"/>
        <button data-for="first" data-tip="one" style={{ display: "block", marginBottom: "20px" }}>
            Button1-1
        </button>
        <button data-for="first" data-tip="two" style={{ display: "block", marginBottom: "20px" }}>
            Button1-2
        </button>
        <ReactTooltip id="second" globalEventOff="click"/>
        <button data-for="second" data-tip="three" data-event="click" style={{ display: "block", marginBottom: "20px" }}>
            Button1-2
        </button>
    </div>,
    document.getElementById('root')
)
