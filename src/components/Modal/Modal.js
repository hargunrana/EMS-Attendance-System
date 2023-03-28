import React from "react";
import InputItem from "./InputItem";

function Modal() {
    return (
        <div className="modal">
            <div className="modal-body">
                <InputItem title={"Scan Type"} />
                <InputItem title={"Machine ID"} />
                <InputItem title={"Total Time"} />
                <InputItem title={"Deductions"} />
                <div style={{ marginBottom: "1rem" }}>
                    <InputItem title={"Exemptions"} />
                </div>
            </div>
        </div>
    );
}

export default Modal;
