import React from 'react';

const Todos = ({todos}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
            <div className="collecion-item" key={todo.id}>
                <span>{todos.content}</span>
            </div>
            )
        })
    ) : (
        <p className="center">You have no todos left</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos