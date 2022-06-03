import React from "react";
import Card from "react-bootstrap/Card";

const TodoListCard = ({ list }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src="https://via.placeholder.com/600/92c952" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          <ul>
            <li>{list.title}</li>
            <li>{list.completed ? "Completed" : "Pending"}</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TodoListCard;
