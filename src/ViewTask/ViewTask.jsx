import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/ViewTask.css";
import { AiOutlineSearch } from "react-icons/ai";
const ViewTask = () => {
  return (
    <>
      <div className="Wrapper">
        <div className="NavWrapper">
          <nav className="navbar navbar-light  justify-content-between ">
            <h1 className="navbar-brand brand">To Do List</h1>

            <Button className="ButtonPadding">Add To Do</Button>
          </nav>

          <form className="search searchform">
            <input
              type="text"
              className="search-input"
              placeholder="Search To Do"
            />
            <AiOutlineSearch className="search-btn" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ViewTask;
