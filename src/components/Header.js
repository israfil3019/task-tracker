import React from "react";
import Button from "./Button";

const Header = ({ title, showAddTask, toggleShow }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "red" : "purple"}
        text={showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}
        toggleShow={toggleShow}
      />
    </header>
  );
};

export default Header;
