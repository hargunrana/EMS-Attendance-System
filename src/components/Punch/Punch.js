import React from "react";

function Punch() {
    return (
        <div className="punch">
            <span>{"09:50 AM"}</span>
            <div className="circle" style={{ backgroundColor: "green" }}></div>

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
