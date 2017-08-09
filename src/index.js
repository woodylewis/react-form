import React from 'react';
import ReactDOM from 'react-dom';
import ajax from 'superagent';
const theUrl = "http://localhost:3100";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.text} />
                    <button>{'submit'}</button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.doPost(this.state.text);
    }

    doPost(payload) {
        console.log('POST ' + this.state);

        ajax.post(theUrl)
            .send({payload})
            .end((error, response) => {
                if(!error && response) {
                    console.log(response.body);
                } else {
                    console.log('error ', error);
                }
            });

    }
}

    ReactDOM.render(<Form />, document.getElementById('root'));