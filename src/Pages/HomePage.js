import React from 'react';
import logo from "../logo.svg";
import "./HomePage.css";
function HomePage() {
    return (
        <div className="Homepage">
            <header className="Homepage-header">
                <img src={logo} className="Homepage-logo" alt="logo" />
                <p>
                    <font size="32">
                        <b>Bohnanza</b>
                    </font>
                </p>
            </header>
            <NameForm />
        </div>
    );
}

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form className="Username-form"
                onSubmit={this.handleSubmit}>
                <label>
                    Enter Username:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input className="Submit-button" type="submit" value="Submit" />
            </form>
        );
    }
}

export default HomePage;