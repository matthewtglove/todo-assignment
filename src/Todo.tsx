import React from 'react';

export const TodoList = (props: {}) => {
    return (
        <div>
            <TodoItem text='B'/>
            <TodoItem text='A'/>
            <TodoItem text='B'/>
        </div>
    );
};

const TodoItem = (props: {text: string}) => {
    return (
        <div>{props.text}</div>
    );
};