const Filter = ({ changeView, currentView }) => {


    return (
        <div className="filter">
            <button className="topButton" onClick={() => changeView('result')}>Find job</button>
            <h2>Specify which role you want to choose from</h2>
            <p></p>
        </div>
    )
}

export default Filter;