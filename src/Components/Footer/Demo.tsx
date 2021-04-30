import React from "react"
import demoImg from "../../img/demoImg.gif"
import buttonImg from "../../img/buttonImg.gif"


const Demo = () => {
    return (
        <div className="demo sideContainer d-flex justify-content-between align-items-center">
            <div className="demo__body">
                <div className="demo__img">
                    <img src={demoImg} alt="" />
                </div>
                <div className="demo__title">
                    Ready to get started?
            </div>
                <div className="demo__info">
                    Get a guided demo with an OKR expert.
            </div>
            </div>
            <div className="demo__form d-flex justify-content-between align-items-center">
                <input type="text" placeholder="Email address" />
                <button>
                    get started
                    <img src={buttonImg} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Demo