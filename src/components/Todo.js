import React from 'react';

class Todo extends React.Component {

    //task toggle handler
    handleToggle = () => {
        this.props.handleToggle(this.props.task);
    };

    render() {
        return (
            <div>
                <h4 onClick={this.handleToggle}>{this.props.task}</h4>
            </div>
        )
    }
}

export default Todo;