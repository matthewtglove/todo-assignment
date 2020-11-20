import React from 'react';

export const TodoList = (props: {}) => {
    return (
        <div>
            <TodoItem text='A'/>
            <TodoItem text='B'/>
            <TodoItem text='C'/>
        </div>
    );
};

const TodoItem = (props: {text: string}) => {
    return (
        <div>{props.text}</div>
    );
};