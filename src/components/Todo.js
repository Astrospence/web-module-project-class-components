import React from 'react';

class Todo extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.task}</h4>
            </div>
        )
    }
}

export default Todo;