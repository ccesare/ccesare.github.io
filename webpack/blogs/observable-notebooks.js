import React from "react"
import ReactDOM from "react-dom"
import { Runtime, Inspector } from "@observablehq/notebook-runtime"
import notebook from "observable-notebook"

class ObservableNotebook extends React.Component {

    componentDidMount() {
        Runtime.load(notebook, (cell) => {
            if (cell.name === "site_org") {
                return new Inspector(document.getElementById("cell").appendChild(document.createElement("div")))
            }
        })
    }

    render() {
        return (
            <div id="cell" className="flex justify-center">

            </div>
        )
    }
}


ReactDOM.render((
    <ObservableNotebook />
), document.getElementById("cell1"))