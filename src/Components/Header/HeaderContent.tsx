import React from "react"
import { ButtonGroup } from "../../commons/ButtonGroup"
import { GSButton } from "../../commons/GSButton"


const HeaderContent = () => {
    return (
        <div className="header__content">
            <div className="header__title">
                Balance agility with stability!
            </div>
            <div className="header__text">
                Gohub monitors application stability, so you can make data-driven
                decisions on whether you should be building new features, or fixing bugs.
            </div>
            <ButtonGroup/>
        </div>
    )
}
export default HeaderContent