import React from "react";

function DayDetails() {
    return (
        <div className="day-details">
            <div className="timeline-title" style={{ marginTop: "1rem" }}>
                {"Day Details"}
            </div>

            <div className="day-details-info">
                <span>{`Total Present Time : ${"08:30"}`}</span>
                <span>{`Total Absent Time : ${"00:30"}`}</span>
                <span>{`Total Exemption : ${"00:00"}`}</span>
                <span>{`Total Deduction : ${"00:00"}`}</span>
            </div>
        </div>
    );
}

export default DayDetails;
