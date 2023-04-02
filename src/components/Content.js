import React, { useEffect, useState } from "react";
import DayDetails from "./DayDetails.js";
import Timeline from "./Timeline.js";

function Content({ userData }) {
    const [totalPresentTime, setTotalPresentTime] = useState("");
    const [totalAbsentTime, setTotalAbsentTime] = useState("");
    const [totalDeductions, setTotalDeduction] = useState(0);
    const [status, setStatus] = useState("");

    const handleDifference = (inTime, outTime) => {
        inTime = new Date(`01/01/2000 ${inTime}`);
        outTime = new Date(`01/01/2000 ${outTime}`);
        const timeDiff = Math.abs(outTime - inTime);
        const hours = timeDiff / 36e5;

        return hours;
    };

    const handleIntToTime = (hours) => {
        // convert hours to minutes
        var minutes = hours * 60;

        // get hours and minutes as separate values
        var hoursPart = Math.floor(minutes / 60);
        var minutesPart = Math.floor(minutes % 60);

        // format as string with leading zeros
        var hoursStr = hoursPart.toString().padStart(2, "0");
        var minutesStr = minutesPart.toString().padStart(2, "0");

        // combine hours and minutes with a colon separator
        var timeStr = hoursStr + ":" + minutesStr;

        return timeStr;
    };

    const getAbsenceTime = (deductions) => {
        let absenceTime = 0;
        for (let deduction of deductions) {
            // console.log(deduction);

            if (deduction.inTime && deduction.outTime) {
                absenceTime += handleDifference(
                    deduction.inTime,
                    deduction.outTime
                );
            }
        }
        return absenceTime;
    };

    const getDeductions = (deductions) => {
        let count = 0;
        for (let deduction of deductions) {
            count += parseInt(deduction.deduction);
        }
        return count;
    };
    
    useEffect(() => {
        const totalWorkingHours =
            userData.inTime && userData.outTime
                ? handleDifference(userData.inTime, userData.outTime)
                : 0;

        let absenceTime = getAbsenceTime(userData.deductions);
        let presentTime =
            totalWorkingHours === 0 ? 0 : totalWorkingHours - absenceTime;
        let deductionCount = getDeductions(userData.deductions);

        setTotalAbsentTime(handleIntToTime(absenceTime));
        setTotalPresentTime(handleIntToTime(presentTime));
        setTotalDeduction(deductionCount);

        // console.log("USE EFFECT");

        let currStatus =
            !userData.inconclusive && !userData.incomplete
                ? "Present"
                : userData.inconclusive
                ? "Inconclusive"
                : "Incomplete";

        setStatus(currStatus);
    });

    return (
        <div className="content">
            <div className="links">
                <span>{`Admin/Employees/Tech Inject`}</span>
            </div>

            <div className="content-body">
                <Timeline deductions={userData.deductions} />

                <div className="side-content">
                    <DayDetails
                        totalAbsentTime={totalAbsentTime}
                        totalPresentTime={totalPresentTime}
                        totalDeductions={totalDeductions}
                    />

                    <div className="status">
                        <span> {`Status : ${status}`}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
