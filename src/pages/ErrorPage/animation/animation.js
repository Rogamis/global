import React from "react";
import styled, { keyframes } from "styled-components";

const Card = ({img, alt, animationType, children}) => {

    const animation = keyframes`${animationType}`;
    const animationDiv = styled.div`
            animation: 1s ${animation};
    ;`

    return (
        <animationDiv>
            <div className="card">
                <div className="card-image">
                    <figure className="image">
                        <img src={img}></img>
                    </figure>
                </div>
            </div>
        </animationDiv>
    )
}

export default Card