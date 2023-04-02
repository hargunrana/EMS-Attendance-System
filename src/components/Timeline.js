import React from "react";
import Punch from "./Punch/Punch";

function Timeline({ deductions }) {
    return (
        <div className="timeline">
            <div className="timeline-title">{"Timeline"}</div>

            {console.log(deductions[1])}

            <div className="list-punch">
                {deductions.map((obj, index) => (
                    <div>
                        {obj.outTime ? (
                            <div>
                                <Punch time={obj.outTime} type={"out"} />

                                {obj.inTime ? (
                                    <div className="edge"></div>
                                ) : index !== deductions.length - 1 ? (
                                    <div className="edge"></div>
                                ) : null}
                            </div>
                        ) : null}

                        {obj.inTime ? (
                            <div>
                                <Punch time={obj.inTime} type={"in"} />

                                {index !== deductions.length - 1 ? (
                                    <div className="edge"></div>
                                ) : null}
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Timeline;
