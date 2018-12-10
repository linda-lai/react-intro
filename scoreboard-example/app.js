function Header(props) {
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

            <Counter />
        </div>
    );
}

class Counter extends React.Component {
    // Moved score into a state object, instead of getting this from props
    state = {
        score: 0
    };

    // Whenever the click event handler is triggered, the score will be increment/decremented
    // State is never modified directly - only by using setState() method to indicate state has changed
    // .setState function also takes a callback for async code
    incrementScore = () => {
        this.setState( prevState => ({
            score: prevState.score + 1
        }));
    }
    
    decrementScore = () => {
        this.setState( prevState => ({
          score: prevState.score - 1
        }));
    }

    // If either props or state changes, React executes the render() method to update what gets displayed to user
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={ this.decrementScore }> - </button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment" onClick={ this.incrementScore }> + </button>
            </div>
        );
    }
}

class App extends React.Component {

    state = {
        players: [
            {
                id: 1,
                name: "Linda",
            },
            {
                id: 2,
                name: "Winter",
            },
            {
                id: 3,
                name: "Alden",
            },
            {
                id: 4,
                name: "Britta",
            }
        ]
    };

    render() {
        return (
            <div className="scoreboard">
                <Header
                    title="Scoreboard"
                    totalPlayers={ this.state.players.length }
                />
                {/* Players List */}
                { this.state.players.map( player =>
                    <Player
                        name={ player.name }
                        key={ player.id.toString() }
                    />
                )}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);