import React from "react"
import { GSButton } from "./GSButton"


export const ButtonGroup = () => {
    return (
        <div className="team__buttonGroup d-flex justify-content-between align-items-center">
            <GSButton />
            <div className="team__quistion">
                Questions? Talk to our team →
            </div>
        </div>
    )
}