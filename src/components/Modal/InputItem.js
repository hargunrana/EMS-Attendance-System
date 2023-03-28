import React from "react";

function InputItem({title}) {
    return (
        <div className="input-item">
            <span>{title}</span>
            <input className="input-bar"></input>
        </div>
    );
}

export default InputItem;
