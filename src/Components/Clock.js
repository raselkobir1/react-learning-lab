import React from "react";
//#8 React Event Handling & Control Re Rendering - React Tutorial Bangla Series
class Clock extends React.Component {
    state = { date: new Date(), local: 'en-US' };
    componentDidMount() {
        this.clockTimer = setInterval(() =>
            this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }
    tick() {
        this.setState({ date: new Date() });
    }
    handleClick = (locle) => {
        console.log("Clock Clicked!");
        this.setState({local: locle});
    }

    render() {
        return (
            <div>
                <h1 className="heading">
                    <span className="clock-text">The current time is {this.state.date
                        .toLocaleTimeString(this.state.local)}.</span>
                </h1>
                <button onClick={() => this.handleClick('bn-BD')}>Click Me</button>
            </div>
        );
    }
}

export default Clock;