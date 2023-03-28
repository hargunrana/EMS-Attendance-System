import "./App.css";
import "./components/SideBar/SideBar.css";
import "./components/Content.css";
import "./components/Punch/Punch.css";
import "./components/Modal/Modal.css";
import SideBar from "./components/SideBar/SideBar";
import Content from "./components/Content";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="App">
            <SideBar />
            <Content />

            {showModal ? <Modal /> : <div />}
        </div>
    );
}

export default App;
