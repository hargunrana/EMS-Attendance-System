import React from "react";
import Punch from "./Punch/Punch";

function Timeline() {
    return (
        <div className="timeline">
            <div className="timeline-title">{"Timeline"}</div>

            <Punch/>
            <Punch/>
            <Punch/>
            <Punch/>
        </div>
    );
}

export default Timeline;
