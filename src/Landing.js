import React from "react";
import "./App.css";
import "./styleguide.css";
import { DailyBtn, PracticeBtn } from "./Buttons";
import { Link } from "react-router-dom";

export const Landing = () => {
    return (
        <div className="landing_page">
            <div className="landing_page_wrapper">
                <div className="title">
                    <p className="title_left">CalFood</p><p className="title_right">Guesser</p>
                </div>
                <p className="txt_detail">a daily Berkeley restaurant guessing game based on <a href="https://www.foodguessr.com/">FoodGuessr</a></p>
                <Link to="daily"><DailyBtn /></Link>
                <PracticeBtn />
            </div>
        </div>
    )
}