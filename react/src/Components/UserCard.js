import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const UserCard = ({ user, children }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src="https://via.placeholder.com/600/92c952" />
      <Card.Body>
        <Card.Title>{children}</Card.Title>
        <Card.Text>
          <ul>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.phone}</li>
            <li>{user.website}</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
