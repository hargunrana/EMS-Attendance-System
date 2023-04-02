import React, { useState } from "react";

function SideBar({ name, empId, phoneNo, dataSize, setIndexState }) {
    const [dataIndex, setDataIndex] = useState(0);

    const handleInc = () => {
        if (dataIndex === dataSize - 1) {
            setDataIndex(0);
            setIndexState(0);
        } else {
            setDataIndex(dataIndex + 1);
            setIndexState(dataIndex + 1);
        }
    };
    const handleDec = () => {
        if (dataIndex === 0) {
            setDataIndex(dataSize - 1);
            setIndexState(dataSize - 1);
        } else {
            setDataIndex(dataIndex - 1);
            setIndexState(dataIndex - 1);
        }
        setIndexState(dataIndex);
    };

    return (
        <div className="sidebar">
            <div className="title">EMS</div>

            <div className="arrow-btns">
                <div className="btn" onClick={handleDec}>
                    <span>{"<"}</span>
                </div>
                <div className="btn" onClick={handleInc}>
                    <span>{">"}</span>
                </div>
            </div>

            <div className="profile-picture"></div>

            <div className="info">
                <span>{`Name : ${name}`}</span>
                <span>{`ID : ${empId}`}</span>
                <span>{`Phone No.: ${phoneNo}`}</span>
            </div>

            <div className="info timestamp">
                <span>{`Day : ${"Monday"}`}</span>{" "}
                <span>{`Date : ${"13/12/2023"}`}</span>
            </div>
        </div>
    );
}

export default SideBar;
