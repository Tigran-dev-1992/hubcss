import React from "react"
import serviceImg1 from "../../img/serviceImg1.gif"
import serviceImg3 from "../../img/serviceImg3.gif"
import serviceImg2 from "../../img/serviceImg2.gif"
import serviceImg4 from "../../img/serviceImg4.gif"
import serviceImg5 from "../../img/serviceImg5.gif"
import serviceImg6 from "../../img/serviceImg6.gif"
import serviceImg7 from "../../img/serviceImg7.gif"
import serviceImg8 from "../../img/serviceImg8.gif"
import serviceImg9 from "../../img/serviceImg9.gif"
import serviceImg10 from "../../img/serviceImg10.gif"
import serviceImg11 from "../../img/serviceImg11.gif"
import serviceImg12 from "../../img/serviceImg12.gif"
import serviceBg from "../../img/servicesBg.gif"
import { Service } from "../../commons/Service"


const Services = () => {
    return (
        <div className="content__services">
            <div className="services__bg">
                <img src={serviceBg} alt="" />
            </div>
            <div className="services sideContainer">
                <div className="services__title">
                    Proof makes increasing conversions simple
            </div>
                <div className="services__info">
                    Getting a conversion boost didn’t used to be this easy.
                    Luckily, you found Proof.
                    Now you have the tools to let your customer do the selling for you.
            </div>
                <div className="services__items d-flex justify-content-between">
                    {Service({ imagePath: serviceImg1, title: "Higher Conversions", info: "Convert more website visitors into signups and purchases." })}
                    {Service({ imagePath: serviceImg2, title: "Save on Acquisition", info: "Your advertising spend will go further than ever before." })}
                    {Service({ imagePath: serviceImg3, title: "Increase Visitor Trust", info: "People trust companies they see other people buy from as well." })}
                    {Service({ imagePath: serviceImg4, title: "Social Influence", info: "Seeing other visitors taking action creates fear of missing out." })}
                    {Service({ imagePath: serviceImg5, title: "Activity Notifications", info: "Display recent sales and opt-ins on your pages and drive visitors to " })}
                    {Service({ imagePath: serviceImg6, title: "Customer Journeys", info: "Your advertising spend will go further than ever before." })}
                    {Service({ imagePath: serviceImg7, title: "Custom Timing", info: "Control when, how long and how fast notifications display on your site." })}
                    {Service({ imagePath: serviceImg8, title: "Live Visitor Count", info: "Show how many visitors are browsing your site - '28 people are viewing this page'" })}
                    {Service({ imagePath: serviceImg9, title: "Visitor Identification", info: "We'll show you detailed profiles of every visitor who enters their email" })}
                    {Service({ imagePath: serviceImg10, title: "Custom Rule", info: "Granular control over how and when notifications display on your pages." })}
                    {Service({ imagePath: serviceImg11, title: "Mobile Optimized", info: "With mobile traffic approaching 70%, Proof looks amazing on mobile." })}
                    {Service({ imagePath: serviceImg12, title: "Language Translation", info: "anslate Recent Activity notification into any language you want. We're global." })}
                </div>
            </div>
        </div>
    )
}

export default Services