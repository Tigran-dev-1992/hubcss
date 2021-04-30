import React from "react"
import headerBg from "../../img/headerBg.gif"
import HeaderBody from "./HeaderBody"
import HeaderContent from "./HeaderContent"
import Navigation from "./Navigation"




const Header = () => {
    return (
        <div className="header">
            <img src={headerBg} alt="jh9o8" className="header__bg" />
            <div className="header__info sideContainer">
                <Navigation />
                <HeaderContent/>
                <HeaderBody/>
            </div>
        </div>
    )
}

export default Header