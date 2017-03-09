import React from "react"
import ReactDOM from "react-dom"

let outputs = []

const onFocus = (e) => {
  outputs = []
  outputs.push('typeof event = ' + typeof(e))
  outputs.push('type = ' + e.type)
  outputs.push('typeof FocusEvent = ' + typeof(window.FocusEvent))
  outputs.push('typeof MouseEvent = ' + typeof(window.MouseEvent))

  render()
}

const onClick = onFocus

const Component = props =>
  <div>
    <button style={{ display: "block" }} {...{onFocus}}>focus</button>
    <button style={{ display: "block" }} {...{onClick}}>click</button>
    {outputs.map((t, ix) => <div key={ix}>{t}</div>)}
  </div>

const render = () =>
  ReactDOM.render(
    <Component/>,
    document.getElementById('root')
  )

render()
