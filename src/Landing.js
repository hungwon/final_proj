import React from "react";
import "./App.css";
import "./styleguide.css";
import { DailyBtn, PracticeBtn } from "./Buttons";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "./userAuth"; // Import your Firebase authentication function
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Import necessary Firebase authentication functions

export const Landing = () => {
    const handleGoogleLogin = async () => {
        try {
            const auth = getAuth(); // Get the authentication instance
            const provider = new GoogleAuthProvider(); // Create a GoogleAuthProvider instance
            await signInWithPopup(auth, provider); // Call signInWithPopup with auth and provider
            // Redirect or handle login success
        } catch (error) {
            // Handle error
            console.error("Google sign-in error:", error);
        }
    };

    return (
        <div className="landing_page">
            <div className="landing_page_wrapper">
                <div className="title">
                    <p className="title_left">CalFood</p><p className="title_right">Guesser</p>
                </div>
                <p className="txt_detail">a daily Berkeley restaurant guessing game based on <a href="https://www.foodguessr.com/">FoodGuessr</a></p>
                <Link to="daily"><DailyBtn /></Link>
                <PracticeBtn />
                <button onClick={handleGoogleLogin}>Sign in with Google</button> {/* Google login button */}
            </div>
        </div>
    )
}
