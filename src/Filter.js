import { useState } from "react";
import React from "react";

const Filter = ({ changeView, currentView, jobs }) => {
    const tankFilter = () => { };
    const healerFilter = () => { };
    const regenFilter = () => { };
    const barrierFilter = () => { };
    const DPSFilter = () => { };
    const meleeFilter = () => { };
    const rangeFilter = () => { };
    const magicFilter = () => { };

    const tankJobs = jobs.filter(job => job.role === 'tank')
    const healerJobs = jobs.filter(job => job.role === 'healer')
    const regenJobs = jobs.filter(job => job.sub_role === 'regenerative')
    const barrierJobs = jobs.filter(job => job.sub_role === 'protective')
    const DPSJobs = jobs.filter(job => job.role === 'DPS')
    const meleeJobs = jobs.filter(job => job.sub_role === 'melee')
    const rangeJobs = jobs.filter(job => job.sub_role === 'physicalrange')
    const magicJobs = jobs.filter(job => job.sub_role === 'magicrange')
    console.log(
        'Tanks' + JSON.stringify(tankJobs),
        'Healers' + JSON.stringify(healerJobs),
        'DPS' + JSON.stringify(DPSJobs),
        'Regen' + JSON.stringify(regenJobs),
        'Barrier' + JSON.stringify(barrierJobs),
        'Melee' + JSON.stringify(meleeJobs),
        'Range' + JSON.stringify(rangeJobs),
        'Magic' + JSON.stringify(magicJobs),
    )

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
                    {tankJobs.map((job, index) => (
                        <li key={index}>   <div><input type="checkBox" ></input>{job.jobName} </div></li>
                    ))}
                </div>

            </div>
        </div >
    )
}

export default Filter;