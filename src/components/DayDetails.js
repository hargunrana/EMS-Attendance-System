import React from "react";

function DayDetails({ totalAbsentTime, totalPresentTime,totalDeductions }) {
    return (
        <div className="day-details">
            <div className="timeline-title" style={{ marginTop: "1rem" }}>
                {"Day Details"}
            </div>

            <div className="day-details-info">
                <span>{`Total Present Time : ${totalPresentTime}`}</span>
                <span>{`Total Absent Time : ${totalAbsentTime}`}</span>
                <span>{`Total Exemption : ${totalDeductions}`}</span>
                <span>{`Total Deduction : ${totalDeductions}`}</span>
            </div>
        </div>
    );
}

export default DayDetails;
