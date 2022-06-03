import React from "react";

import TodoListCard from "./TodoListCard";
import Row from "react-bootstrap/Row";

const TodoList = ({ todoList }) => {
  return (
    <>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg4 row-cols-xl-6">
        {todoList.map((list) => (
          <TodoListCard list={list}></TodoListCard>
        ))}
      </Row>
    </>
  );
};

export default TodoList;
