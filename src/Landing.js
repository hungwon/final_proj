import React, { useState, useEffect } from "react";
import "./App.css";
import "./styleguide.css";
import { DailyBtn, PracticeBtn } from "./Buttons";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "./userAuth"; // Import your Firebase authentication function
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth"; // Import necessary Firebase authentication functions

export const Landing = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // State variable to track authentication status
    const [userName, setUserName] = useState(""); // State variable to store the user's name

    useEffect(() => {
        const auth = getAuth(); // Get the authentication instance
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true); // Update authentication status
                // Extract user's display name
                const userDisplayName = user.displayName;
                setUserName(userDisplayName); // Set user's name in state
            } else {
                setIsAuthenticated(false); // Update authentication status
                setUserName(""); // Clear user's name
            }
        });
        return () => unsubscribe(); // Unsubscribe from the auth state listener
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    const handleGoogleLogin = async () => {
        try {
            const auth = getAuth(); // Get the authentication instance
            const provider = new GoogleAuthProvider(); // Create a GoogleAuthProvider instance
            const result = await signInWithPopup(auth, provider); // Call signInWithPopup with auth and provider
            // Update authentication status and user's name
            setIsAuthenticated(true);
            const userDisplayName = result.user.displayName;
            setUserName(userDisplayName);
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
                {!isAuthenticated && <button onClick={handleGoogleLogin}>Sign in with Google</button>} {/* Google login button */}
                {isAuthenticated && (
                    <>
                        <Link to="daily"><DailyBtn /></Link>
                        <PracticeBtn />
                        <p>Hello {userName}. Your current total score is 0.</p> {/* Greeting with user's name */}
                    </>
                )}
            </div>
        </div>
    )
}
