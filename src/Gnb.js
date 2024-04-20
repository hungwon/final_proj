import React from "react";
import "./App.css";
import "./styleguide.css";

export const GNB = () => {
    return (
        <div className="gnb">
            var round = 1;
            var score = 0;
            <div className="gnb_wrapper">
                <div className="title">
                    <p className="title_left">CalFood</p><p className="title_right">Guesser</p>
                </div>
                <div className="navbar">
                    <div className="round">
                        <p className="round_txt">Round :</p><p className="round_num">{round}</p>
                    </div>
                    <div className="score">
                        <p className="score_txt">Score :</p><p className="score_num">{score}</p>
                    </div>
                    <img src="https://img.icons8.com/ios/452/user--v1.png" alt="home" className="home_btn" />
                    <img src="https://img.icons8.com/ios/452/exit.png" alt="info" className="info_btn" />
                </div>
            </div>
        </div>
    )
}
