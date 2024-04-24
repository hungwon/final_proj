import React, { useState } from "react";
import "./Gnb.css";
import "../styleguide.css";
import { Link } from "react-router-dom";
import { PlayInfo } from "./PlayInfo";

export const Gnb = ({ round, totalScore }) => {
    const [showInfo, setShowInfo] = useState(false);

    const toggleInfo = () => {
        setShowInfo(!showInfo);
    };

    return (
        <>
            {showInfo && <PlayInfo onClose={toggleInfo} />}
            <div className="gnb">
                <p className="title_gnb">
                    <span className="title_left">CalFood</span>
                    <span className="title_right">Guesser</span>
                </p>

                <div className="navbar">
                    <div className="round">
                        <p className="round_wrapper">
                            <span className="txt">round : </span>
                            <span className="num">{round}</span>
                        </p>
                    </div>
                    <div className="score">
                        <p className="score_wrapper">
                            <span className="txt">score : </span>
                            <span className="num">{totalScore}</span>
                        </p>
                    </div>
                    <Link to="/" className="a"><img className="home_btn" alt="Home btn" src="/img/home-btn.png" /></Link>
                    <img className="info_btn" alt="Info btn" src="/img/info-btn.png" onClick={toggleInfo} />
                </div>
            </div>
        </>
    )
}
