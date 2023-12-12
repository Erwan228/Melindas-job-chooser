import { useState, useEffect } from "react";

const Result = ({ changeView, msg }) => {
    const [previousMsg, setPreviousMsg] = useState(null)
    const [displayMsg, setDisplayMsg] = useState(null)
    const newJob = () => {
        makeMessage();
    }
    const makeMessage = () => {
        setPreviousMsg(displayMsg);
        if (!previousMsg) {
            let rng = Math.floor(Math.random() * msg.length);
            setDisplayMsg(msg[rng]);
        } else {
            let newMsg = msg.filter(x => x !== previousMsg);
            let rng = Math.floor(Math.random() * newMsg.length);
            setDisplayMsg(newMsg[rng]);
        }
    }

    useEffect(() => {
        newJob()
    }, []);
    return (
        <div className="Result">
            <button className="upperResButton">Filter</button> <p className="rndMsgP">{displayMsg}</p>
            <h1></h1>
            <br /><p className="resultInfoP"></p>
            <div>
                <button className="jobButton" onClick={newJob}>Another job</button>
            </div>
        </div>
    )
}

export default Result;