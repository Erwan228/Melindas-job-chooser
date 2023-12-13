import { useState, useEffect } from "react";

const Result = ({ changeView, msg, filteredJobs }) => {
    const [jobNumber, setJobNumber] = useState(null)
    const [previousMsg, setPreviousMsg] = useState(null)
    const [displayMsg, setDisplayMsg] = useState(null)
    const newJob = () => {
        makeMessage();
        chooseJob();
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

    const chooseJob = () => {
        setJobNumber(Math.floor(Math.random() * filteredJobs.length));

    }

    useEffect(() => {
        newJob()
    }, []);
    return (
        <div className="Result">
            <button className="upperResButton" onClick={() => changeView('filter')}>Filter</button> <p className="rndMsgP">{displayMsg}</p>
            <h1>{filteredJobs[jobNumber].title}</h1>
            <br /><p className="resultInfoP"></p>
            <div>
                <button className="jobButton" onClick={newJob}>Another job</button>
            </div>
        </div>
    )
}

export default Result;