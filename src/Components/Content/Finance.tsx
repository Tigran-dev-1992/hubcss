import React from "react"
import { Note } from "../../commons/Note"
import financeImg from "../../img/financeImg.gif"

const Finance = () => {
    return (
        <div className="finance">
            <div className="finance__describe d-flex justify-content-between">
                <div className="finance__head align-self-end">
                    <div className="finance__title">
                        Your finances on auto-pilot
                    </div>
                    <div className="finance__info">
                        With Qonto, admin hassle are over! Unlimited history,
                        auto-categorised transactions, simplified transfers entries, budgets,
                        history exportable for accounting... and the list goes on!
                      </div>
                    <div className="finance__saveTime saveTime">
                        <div className="saveTime__title">
                            Save Time
                        </div>
                        <div className="saveTime__body">
                            {Note("Intuitive process and simple interface")}
                            {Note("Online and paperless")}
                            {Note("Real-time notifications")}
                        </div>
                    </div>
                </div>
                <div className="finance__img">
                    <img src={financeImg} alt="" />
                </div>
            </div>
            <div className="finance__body d-flex justify-content-between sideContainer">
                <div className="finance__block financeBlock">
                    <div className="financeBlock__title">
                        Monitor your expenses
                    </div>
                    <div className="financeBlock__body">
                        {Note("Specific access/rights by users")}
                        {Note("Physical and virtual Mastercards with adjustable payment limits")}
                        {Note("Dashboards to follow-up on your expenses")}
                    </div>
                </div>
                <div className="finance__block financeBlock">
                    <div className="financeBlock__title">
                        Make accounting easier
                    </div>
                    <div className="financeBlock__body">
                        {Note("Unlimited history")}
                        {Note("Read-only access for your accountant.")}
                        {Note("Plug-and-play exports for accounting tools")}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Finance