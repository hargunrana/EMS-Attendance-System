import React from "react";

function SideBar() {
    return (
        <div className="sidebar">
            <div className="title">EMS</div>

            <div className="arrow-btns">
                <div className="btn">
                    <span>{"<"}</span>
                </div>
                <div className="btn">
                    <span>{">"}</span>
                </div>
            </div>

            <div className="profile-picture"></div>

            <div className="info">
                <span>{`Name : ${"Mandeep Singh"}`}</span>
                <span>{`ID : ${"006873"}`}</span>
                <span>{`Phone No.: ${" 0011001100"}`}</span>
            </div>

            <div className="info timestamp">
                <span>{`Day : ${"Monday"}`}</span>{" "}
                <span>{`Date : ${"13/12/2023"}`}</span>
            </div>
        </div>
    );
}

export default SideBar;
