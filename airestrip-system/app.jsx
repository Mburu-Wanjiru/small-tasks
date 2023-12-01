class AirstripApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            runways: [
                { id: 1, length: 3000, width: 50 },
                // Add more runways as needed
            ],
        };
    }

    render() {
        return (
            <div className="container">
                <h1>Airstrip Management System</h1>
                <RunwayList runways={this.state.runways} />
            </div>
        );
    }
}

class RunwayList extends React.Component {
    render() {
        return (
            <div>
                <h2>Runways</h2>
                <ul>
                    {this.props.runways.map(runway => (
                        <li key={runway.id}>
                            {`Runway ${runway.id} - Length: ${runway.length}, Width: ${runway.width}`}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<AirstripApp />, document.getElementById('root'));
