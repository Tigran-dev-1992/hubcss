import React from "react"
import pointImg from "../img/pointImg.gif"


export const Note = (text:string) => {
    return (
        <div className="note">
            <img src={pointImg} alt="" />{text}
        </div>
    )
}