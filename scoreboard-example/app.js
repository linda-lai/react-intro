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
                <button className="remove-player" onClick={ () => props.removePlayer(props.id)}>x</button>
                { props.name }
            </span>

            <Counter />
        </div>
    );
}

// Create a stateful component by first defining an initial state inside the Counter class
// Refactored score into a state object, instead of getting this from props
class Counter extends React.Component {
    state = {
        score: 0
    };

    // Whenever the click event handler is triggered, the score will be increment/decremented
    // State is never modified directly - the only way React allows is using its inbuilt setState() method to indicate state has changed
    // State updates may be asynchronous, so it may not always lead to the component re-rendering with new data, and could cause state inconsistency.
    // setState() accepts a callback function that produces state based on the previous state in a more reliable way
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
    // Create an event handler that updates state, using React's inbuilt setState() method
    // Give the button an onclick event that calls the event handler when clicked
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

// Initialize a players state in the App component, then create and wire up an event handler that removes a player onClick
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
    // Use the filter() array iteration method to remove an object from the players array in state
    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            };
        });
    }
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
                        id={ player.id }
                        key={ player.id.toString() }
                        removePlayer={this.handleRemovePlayer}
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