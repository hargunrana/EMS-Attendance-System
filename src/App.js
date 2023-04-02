import "./App.css";
import "./components/SideBar/SideBar.css";
import "./components/Content.css";
import "./components/Punch/Punch.css";
import "./components/Modal/Modal.css";
import SideBar from "./components/SideBar/SideBar";
import Content from "./components/Content";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import userData from "./components/getData";

function App() {
    const [showModal, setShowModal] = useState(false);
    const [dataIndex, setDataIndex] = useState(1);

    return (
        <div className="App">
            <SideBar
                name={userData[dataIndex].name}
                empId={userData[dataIndex].empId}
                phoneNo={userData[dataIndex].phoneNo}
                dataSize={userData.length}
                setIndexState={setDataIndex}
            />

            <Content userData={userData[dataIndex].dates[1]} />

            {showModal ? <Modal /> : <div />}
        </div>
    );
}

export default App;
