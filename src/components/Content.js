import React from "react";
import DayDetails from "./DayDetails.js";
import Timeline from "./Timeline.js";

function Content() {
    return (
        <div className="content">
            <div className="links">
                <span>{`Admin/Employees/Tech Inject`}</span>
            </div>

            <div className="content-body">
                <Timeline />

                <div className="side-content">
                    <DayDetails />

                    <div className="status">
                        <span> {`Status : ${"Present"}`}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
