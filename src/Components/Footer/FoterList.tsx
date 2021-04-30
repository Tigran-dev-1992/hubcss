import React from "react"
import iconImage from "../../img/iconImg.gif"
import socialIcon1 from "../../img/socialIcon1.gif"
import socialIcon2 from "../../img/socialIcon2.gif"
import socialIcon3 from "../../img/socialIcon3.gif"
import socialIcon4 from "../../img/socialIcon4.gif"


const FooterList = () => {
    return (
        <div className="footerBlock">
            <    div className="footerBlock__footerlist d-flex justify-content-between sideContainer">
                <div className="footerList__iconBlock iconBlock">
                    <div className="iconBlock__icon">
                        <img src={iconImage} alt="" />
                    </div>
                    <div className="iconBlock__numbers">
                        EU: +49 30 555 7322 77
                        US: +1-415-800-4497
                </div>
                    <div className="iconBloc__goHub">
                        info@gohub.ee
                </div>
                    <div className="iconBlocks__socialIcons d-flex justify-content-between">
                        <img src={socialIcon1} alt="" />
                        <img src={socialIcon2} alt="" />
                        <img src={socialIcon3} alt="" />
                        <img src={socialIcon4} alt="" />
                    </div>
                </div>
                <div className="footerList__items">
                    <div className="footerList__Item">About us</div>
                    <div className="footerList__Item">Newsroom</div>
                    <div className="footerList__Item">Blog</div>
                    <div className="footerList__Item">GohubAPI</div>
                    <div className="footerList__Item">Gift cards</div>
                    <div className="footerList__Item">Careers</div>
                    <div className="footerList__Item">Go hub vs. drive jobs</div>
                </div>
                <div className="footerList__items">
                    <div className="footerList__Item">Offerings</div>
                    <div className="footerList__Item">Gohub Eats for food delivery</div>
                    <div className="footerList__Item">Gohub for buisness</div>
                    <div className="footerList__Item">Gohub Freight</div>
                    <div className="footerList__Item">Gohub health</div>
                </div>
                <div className="footerList__items">
                    <div className="footerList__Item">Support</div>
                    <div className="footerList__Item">Terminos y conditionos</div>
                    <div className="footerList__Item">Privacidad</div>
                    <div className="footerList__Item">Ayuda</div>
                    <div className="footerList__Item">Conect</div>
                </div>
            </div>
            <div className="block1 d-flex justify-content-between sideContainer">
                <div className="block1__data">
                    © 2018 Uber Technologies Inc.
                </div>
                <div className="block1__items d-flex justify-content-between">
                    <div className="block1__item">Privacy</div>
                    <div className="block1__item">Accesbility</div>
                    <div className="block1__item">Terms</div>
                </div>
            </div>
        </div>
    )
}

export default FooterList