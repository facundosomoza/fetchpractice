import React from "react";

import UserCard from "./UserCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ClientsList = ({ users }) => {
  return (
    <>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        {users.map((user) => (
          <Col className="my-2">
            <UserCard user={user}>Client {user.id}</UserCard>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ClientsList;
