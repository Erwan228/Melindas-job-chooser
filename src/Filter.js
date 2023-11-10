const Filter = ({ changeView, currentView, jobs }) => {
    const tankFilter = () => { };
    const healerFilter = () => { };
    const regenFilter = () => { };
    const barrierFilter = () => { };
    const DPSFilter = () => { };
    const meleeFilter = () => { };
    const rangeFilter = () => { };
    const magicFilter = () => { };

    return (
        <div className="filter">
            <button className="topButton" onClick={() => changeView('result')}>Find job</button>
            <h2>Specify which role you want to choose from</h2>
            <p></p><br />
            <hr />
            <button className="tankButton biggerButton" onClick={tankFilter}>Tank</button><br />
            <button className="healerButton biggerButton" onClick={healerFilter}>Healer</button><br />
            <button className="regenButton healerButton biggerButton" onClick={regenFilter}>Regen</button>
            <button className="barrierButton healerButton biggerButton" onClick={barrierFilter}>Tank</button><br />
            <button className="DPSButton biggerButton" onClick={DPSFilter}>Tank</button><br />
            <button className="meleeButton DPSButton biggerButton" onClick={meleeFilter}>Tank</button>
            <button className="rangeButton DPSButton biggerButton" onClick={rangeFilter}>Tank</button>
            <button className="magicButton DPSButton biggerButton" onClick={magicFilter}>Tank</button>
            <div className="checks">
                <div className="tanks">
                    <input type="checkbox" checked></input><label>{jobs[0].jobName}</label>
                    <input type="checkbox" checked></input><label>{jobs[1].jobName}</label>
                    <input type="checkbox" checked></input><label>{jobs[2].jobName}</label>
                    <input type="checkbox" checked></input><label>{jobs[3].jobName}</label>
                </div>
                <div className="DPS">
                    <div className="melee">
                        <input type="checkbox" checked></input><label>{jobs[4].jobName}</label>
                        <input type="checkbox" checked></input><label>{jobs[5].jobName}</label>
                        <input type="checkbox" checked></input><label>{jobs[6].jobName}</label>
                        <input type="checkbox" checked></input><label>{jobs[7].jobName}</label>
                        <input type="checkbox" checked></input><label>{jobs[8].jobName}</label>
                    </div>
                    <div className="range">
                        <input type="checkbox" checked></input><label>{jobs[9].jobName}</label>
                        <input type="checkbox" checked></input><label>{jobs[10].jobName}</label>
                        <input type="checkbox" checked></input><label>{jobs[11].jobName}</label>
                    </div>
                    <div className="magic">
                        <input type="checkbox" checked></input><label>{jobs[12].jobName}</label>
                        <input type="checkbox" checked></input><label>{jobs[13].jobName}</label>
                        <input type="checkbox" checked></input><label>{jobs[14].jobName}</label>
                    </div>
                </div>
                <div className="healer">
                    <div className="regen">
                        <input type="checkbox" checked></input><label>{jobs[15].jobName}</label>
                        <input type="checkbox" checked></input><label>{jobs[16].jobName}</label>
                    </div>
                    <div className="barrier">
                        <input type="checkbox" checked></input><label>{jobs[17].jobName}</label>
                        <input type="checkbox" checked></input><label>{jobs[18].jobName}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;