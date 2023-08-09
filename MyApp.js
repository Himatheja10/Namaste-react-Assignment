
import React from "react"
import ReactDOM from "react-dom/client"


let parentEl = React.createElement("div",{id : "parent"},
                 React.createElement("div",{id : "child"},
                [React.createElement("h1",{id : "heading1"},"Nested Element 1"),
                React.createElement("h2",{},"Nested Element 2"),
                React.createElement("button",{id : "submit"},"Submit")]  ))

let Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(parentEl);