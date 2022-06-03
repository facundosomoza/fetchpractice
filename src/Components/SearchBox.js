import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const SearchBox = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const callBack = () => {
    onSearch(searchText);
  };

  const message = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <>
      <input onChange={message} type="text"></input>
      <Button onClick={callBack} variant="primary">
        Search
      </Button>
    </>
  );
};

export default SearchBox;
