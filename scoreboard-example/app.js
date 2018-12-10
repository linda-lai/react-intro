function Header(props) {
    // console.log(props)
    return (
      <header>
        <h1>{ props.title }</h1>
        <span className="stats">{ props.totalPlayers }</span>
      </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                { props.name }
            </span>

            <Counter score={props.score}/>
        </div>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{ props.score }</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header
                title="Scoreboard"
                totalPlayers={ 1 }
            />
            {/* Start of Players List */}
            <Player name="Linda" score={50}/>
            <Player name="Winter" score={45}/>
            <Player name="Alden" score={40}/>
            <Player name="Abed" score={20}/>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);