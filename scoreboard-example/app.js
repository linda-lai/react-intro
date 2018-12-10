const players = [
    {
        id: 1,
        name: "Linda",
        score: 50
    },
    {
        id: 2,
        name: "Winter",
        score: 85
    },
    {
        id: 3,
        name: "Alden",
        score: 40
    },
    {
        id: 4,
        name: "Britta",
        score: 20
    }
];

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

            <Counter score={props.score}/>
        </div>
    );
}

class Counter extends React.Component {

    constructor() {
        super()
        this.state = {
            score: 0
        }
    }
    // If either props or state changes, React executes the render() method to update what gets displayed to user
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment"> + </button>
            </div>
        );
    }
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header
                title="Scoreboard"
                totalPlayers={ props.initialPlayers.length }
            />
            {/* Players List */}
            { props.initialPlayers.map( player =>
                <Player
                    name={ player.name }
                    key={ player.id.toString() }
                />
            )}
        </div>
    );
}

ReactDOM.render(
    <App initialPlayers={players} />,
    document.getElementById('root')
);