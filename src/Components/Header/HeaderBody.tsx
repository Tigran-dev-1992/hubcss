import React from "react"
import headerImg1 from "../../img/headerBody__img1.gif"
import headerImg2 from "../../img/headerBody__img2.gif"
import headerImg3 from "../../img/headerBody__img3.gif"


const HeaderBody = () => {
    return (
        <div className="header__body headerBody d-flex justify-content-between">
            <div className="headerBody__block stability">
                <div className="stability__title">
                    Improve the stability of
                    your application
                    </div>
                <div className="stability__info">
                    Bugsnag monitors application stability, so you can make data-driven
                    decisions on whether you should be building new features, or fixing bugs.
                    </div>
            </div>
            <div className="headerBody__block">
                <div className="headerBody__img">
                    <img src={headerImg2} alt="" />
                </div>
                <div className="headerBody__title">
                    Monitor online
                    </div>
                <div className="headerBody__info">
                    The platform has multiple functionalities and key features. With our intelligent system,
                    you can approve bookings and monitor everything in your business online.
                    </div>
            </div>
            <div className="headerBody__block">
                <div className="headerBody__img">
                    <img src={headerImg1} alt="" />
                </div>
                <div className="headerBody__title">
                    Be visible to “like”
                    </div>
                <div className="headerBody__info">
                    Strengthen your digital visibility in a universe where everyone is interested in travelling and renting gears.
                    We help you build your presence  and make you relevant without you having to lift a finger!
                    </div>
            </div>
            <div className="headerBody__block">
                <div className="headerBody__img">
                    <img src={headerImg3} alt="" />
                </div>
                <div className="headerBody__title">
                    More income
                    </div>
                <div className="headerBody__info">
                    Being on a digital platform is another sales channel added to strengthen your business.
                    More work, in your hands. With our insights tools, we analyze your gear's performance in any season
                    </div>
            </div>
        </div>
    )
}


export default HeaderBody