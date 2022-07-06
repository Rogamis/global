import React from "react";
import { useNavigate } from "react-router-dom";
import "./ErrorPage.css"
import img from "./animation/img/404.png"
// import { bounceIn } from "react-animations";


const ErrorPage  = () => {
    const navigate = useNavigate();
    const goHomePage = () => {
        navigate("/");
    }
    return (
        <div>
            <div className="error">
             <img src={img}></img>
             <error className="errorText">Oops ...</error>
             <text>Page not found</text>
             <button className="buttonError" onClick={goHomePage}> CHANGE TO HOME PAGE </button> 
            </div>
        </div>
    );
}

export default ErrorPage




