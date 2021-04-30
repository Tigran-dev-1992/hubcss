import React from "react"
import Finance from "./Finance"
import Move from "./Move"
import Safety from "./Safety"
import Services from "./Services"

const Content = () => {
    return (
        <div className="content">
            <Services />
            <Safety/>
            <Move/>
            <Finance/>
        </div>
    )
}

export default Content