import { useState } from "react";
import React from "react";

const Filter = ({ changeView, currentView, jobs, handleFilterData, shoutToggleAllOn, shoutToggleAllOff, filteredJobs }) => {
    const tankFilter = () => { handleFilterData('tank') };
    const healerFilter = () => { handleFilterData('healer') };
    const regenFilter = () => { handleFilterData('regen') };
    const barrierFilter = () => { handleFilterData('barrier') };
    const DPSFilter = () => { handleFilterData('DPS') };
    const meleeFilter = () => { handleFilterData('melee') };
    const rangeFilter = () => { handleFilterData('range') };
    const magicFilter = () => { handleFilterData('magic') };

    const tankJobs = jobs.filter(job => job.role === 'tank')
    const healerJobs = jobs.filter(job => job.role === 'healer')
    const regenJobs = jobs.filter(job => job.sub_role === 'regen')
    const barrierJobs = jobs.filter(job => job.sub_role === 'barrier')
    const DPSJobs = jobs.filter(job => job.role === 'DPS')
    const meleeJobs = jobs.filter(job => job.sub_role === 'melee')
    const rangeJobs = jobs.filter(job => job.sub_role === 'range')
    const magicJobs = jobs.filter(job => job.sub_role === 'magic')

    const toggleAllOn = () => { shoutToggleAllOn() }
    const toggleAllOff = () => { shoutToggleAllOff() }


    return (
        <div className="filter">
            <button className="topButton" onClick={() => changeView('result')}>Find job</button>
            <h2>Specify which role you want to choose from</h2>
            <p></p><br />
            <hr />
            <button className="tankButton biggerButton" onClick={tankFilter}>Tank</button><br />
            <button className="healerButton biggerButton" onClick={healerFilter}>Healer</button><br />
            <button className="regenButton healerButton biggerButton" onClick={regenFilter}>Regen</button>
            <button className="barrierButton healerButton biggerButton" onClick={barrierFilter}>Barrier</button><br />
            <button className="DPSButton biggerButton" onClick={DPSFilter}>DPS</button><br />
            <button className="meleeButton DPSButton biggerButton" onClick={meleeFilter}>Melee</button>
            <button className="rangeButton DPSButton biggerButton" onClick={rangeFilter}>Range</button>
            <button className="magicButton DPSButton biggerButton" onClick={magicFilter}>Magic</button>
            <hr />
            {/* <button className="biggerButton" onClick={() => toggleAllOn()}>Toggle all on/off</button> */}
            {filteredJobs.length === 0 && <button className="biggerButton" onClick={() => toggleAllOn()}>Toggle all on</button>}
            {filteredJobs.length > 0 && <button className="biggerButton" onClick={() => toggleAllOff()}>Toggle all off</button>}
            <hr />
            <h2>Check off the jobs individually</h2>
            <ul className="Checks">
                <div className="tanks">
                    {tankJobs.map((job, index) => (
                        <span key={index}><div>
                            <input type="checkBox" ></input>{job.jobName}
                        </div></span>
                    ))}
                </div>
                <br />
                <br />
                <div className="DPS">
                    <div className="melee">
                        {meleeJobs.map((job, index) => (
                            <span key={index}><div>
                                <input type="checkBox" ></input>{job.jobName}
                            </div></span>
                        ))}
                    </div>
                    <br />
                    <div className="range">
                        {rangeJobs.map((job, index) => (
                            <span key={index}><div>
                                <input type="checkBox" ></input>{job.jobName}
                            </div></span>
                        ))}
                    </div>
                    <br />
                    <div className="magic">
                        {magicJobs.map((job, index) => (
                            <span key={index}><div>
                                <input type="checkBox" ></input>{job.jobName}
                            </div></span>
                        ))}
                    </div>
                    <br />
                </div>
                <br />
                <div className="healer">
                    <div className="regen">
                        {regenJobs.map((job, index) => (
                            <span key={index}><div>
                                <input type="checkBox"></input>{job.jobName}
                            </div></span>
                        ))}
                    </div>
                    <br />
                    <div className="barrier">
                        {barrierJobs.map((job, index) => (
                            <span key={index}><div>
                                <input type="checkBox"></input>{job.jobName}
                            </div></span>
                        ))}
                    </div>
                    <br />
                </div>
            </ul>
        </div >
    )
}

export default Filter;