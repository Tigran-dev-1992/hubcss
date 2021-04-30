import React, { useState } from "react"
import logo from "../../img/logo.gif"






const Navigation = () => {
    const [activity, setActivity] = useState(false)
    let body = document.body
    activity?body.classList.add("noScroll"):body.classList.remove('noScroll') 
    

    return (
        <div>
            <div className={`burger__bg ${activity ? "active" : ""} `} ></div>
            <div className="nav d-flex justify-content-between align-items-center">
                <div className="nav__logo">
                    <img src={logo} alt="" />
                </div>
                <div className={`menu__burger ${activity ? "active" : ""} `} onClick={() => { setActivity(!activity) }}>
                    <span className={` ${activity ? "active" : ""} `}></span>
                </div>
                <div className={`nav__menu ${activity ? "active" : ""} `}>
                    <nav>
                        <div className="nav__items d-flex justify-content-around">
                            <div className="nav__item">Product</div>
                            <div className="nav__item">Costumers</div>
                            <div className="nav__item">Pricing</div>
                            <div className="nav__item">Docs</div>
                            <div className="nav__item active">Sign in</div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    )
}

export default Navigation