const Home = ({ changeView, currentView }) => {


    return (
        <div className="home">
            <button className="topButton" onclick="filterView()" style="height: 75px; width: 100px; font-size: large;">Filter</button>
            <h1>Choose a random FFXIV job!</h1>
            <div>
                <button class="jobButton" onClick={() => changeView('result')}>Find a job</button>
            </div>
        </div>
    )
}