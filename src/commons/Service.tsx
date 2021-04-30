import React from "react"

type PropsType = {
    imagePath:string
    title:string
    info:string

}
export const Service:React.FC<PropsType> = ({imagePath,title,info})=>{
    return(
        <div className="service__item">
            <div className="service__img"><img src={imagePath} alt=""/></div>
            <div className="service__title">{title}</div>
            <div className="service__info">{info}</div>
        </div>
    )
}