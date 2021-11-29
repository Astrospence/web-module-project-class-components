import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }

    //form input handler
    handleInput = e => {
        this.setState({
            ...this.state,
            input: e.target.value
        });
    };

    //button click handler
    handleClick = e => {
        e.preventDefault();
        this.props.handleAddItem(this.state.input);
    };

    render() {
        return (
            <form>
                <input 
                    type="text"
                    name="task"
                    placeholder="enter new task"
                    onChange={this.handleInput}
                />
                <button onClick={this.handleClick}>Add</button>
            </form>
        )
    }
}

export default TodoForm;