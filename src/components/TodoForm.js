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

    //add button click handler
    handleClick = e => {
        e.preventDefault();
        this.props.handleAddItem(this.state.input);
    };

    //clear button click handler
    handleClear = e => {
        e.preventDefault();
        this.props.handleClear();
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
                <button onClick={this.handleClear}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;