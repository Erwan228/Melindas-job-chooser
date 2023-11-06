const Home = ({ changeView, currentView }) => {


    return (
        <div className="home">
            <button className="topButton">Filter</button>
            <h1>Choose a random FFXIV job!</h1>
            <button className="jobButton" onClick={() => changeView('result')}>Find a job</button>
        </div>
    )
}

export default Home;