import React from "react"
import { ButtonGroup } from "../../commons/ButtonGroup"
import safetyImg from "../../img/safetyImg.gif"


const Safety = () => {
    return (
        <div className="safety d-flex justify-content-between sideContainer">
            <div className="safety__content">
                <div className="safety__title">
                    Your safety is always
                    a top priority
            </div>
                <div className="safety__info">
                    We’re committed to helping drivers and riders get where they want to go with confidence.
            </div>
                <div className="safety__transports d-flex justify-content-between">
                    <div className="safety__transport transport">
                        <div className="transport__kind">
                            Drive
                    </div>
                        <div className="transport__info">
                            Drive when you want. Find opportunities around you.
                    </div>
                    </div>
                    <div className="safety__transport">
                        <div className="safety__transport transport">
                            <div className="transport__kind">
                                Ride
                    </div>
                            <div className="transport__info">
                                Tap your phone. Get where you're headed.
                    </div>
                        </div>
                    </div>
                </div>
                <div className="safety__button">
                    <ButtonGroup />
                </div>
            </div>
            <div className="safety__img">
                <img src={safetyImg} alt="" />
            </div>
        </div>
    )
}

export default Safety