import React, {FunctionComponent} from 'react'
import logo from "../assets/logo.svg"

const Header: FunctionComponent<{score: number}> = (props: {score: number}) => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <div className="score">
                <div className="scoretitle">Score</div>
                <div className="scorevalue">{props["score"]}</div>
            </div>
        </div>
    )
}

export default Header
