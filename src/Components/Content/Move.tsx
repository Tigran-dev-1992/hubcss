import React from "react"
import { ButtonGroup } from "../../commons/ButtonGroup"
import moveImg from "../../img/moveImg.gif"


const Move = () => {
    return (
        <div className="move d-flex justify-content-between sideContainer">
            <div className="move__img">
                <img src={moveImg} alt="" />
            </div>
            <div className="move__content">
                <div className="move__title">
                    Move the way you want
                    Doors are always opening
            </div>
                <div className="move__info">
                Opportunity is everywhere. Get out there and find it with Uber.
            </div>
                <div className="move__transports d-flex justify-content-between">
                    <div className="move__transport transport">
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
                <div className="move__button">
                    <ButtonGroup />
                </div>
            </div>
        </div>
    )
}

export default Move