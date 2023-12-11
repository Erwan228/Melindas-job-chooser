import { useState, useEffect } from "react";

const Result = ({ changeView, msg }) => {
    const [previousMsg, setPreviousMsg] = useState(null)
    const [displayMsg, setDisplayMsg] = useState(null)
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
        makeMessage()
    }, []);
    return (
        <div className="Result">
            <button className="upperResButton">Filter</button> <p className="rndMsgP">{displayMsg}</p>
            <h1>that in terms of</h1>
            <br /><p className="resultInfoP">male human and </p>
            <div>
                <button className="jobButton" onClick={makeMessage}>female pokemon</button>
            </div>
        </div>
    )
}

export default Result;