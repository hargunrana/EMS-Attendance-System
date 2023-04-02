import React from "react";

function Punch({ color, time, type }) {
    return (
        <div className="punch">
            <span>{time}</span>

            {type == "in" ? (
                <div
                    className="circle"
                    style={{ backgroundColor: "green" }}
                ></div>
            ) : (
                <div
                    className="circle"
                    style={{ backgroundColor: "red" }}
                ></div>
            )}
            <div
                className="circle"
                style={{ backgroundColor: { color } }}
            ></div>

            <div className="punch-btn">
                <span>{`Punch - ${"In"}`}</span>
                <span style={{ fontSize: "x-small", color: "gray" }}>
                    {"Edit"}
                </span>
            </div>
        </div>
    );
}

export default Punch;
