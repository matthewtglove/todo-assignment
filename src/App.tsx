import React from 'react';

export const TodoList = (props: {}) => {
  return (
    <span>Todo List!</span>
  );
};


export const App = (probs: {}) => {
  return(
    <TodoList />
  );
};


const TodoItem = (props: {text: string}) => {
  return (
    <div>{props.text}</div>
  );
};

