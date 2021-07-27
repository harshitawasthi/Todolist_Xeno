import React, { useState } from "react";
import { Button, Dropdown, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/ViewTask.css";
import { addtodo } from "../../Constants/Addtodo";
import { AiOutlineSearch } from "react-icons/ai";
import { GrDrag } from "react-icons/gr";
import { FiCircle } from "react-icons/fi";
import { GiPlainCircle } from "react-icons/gi";
import styled from "styled-components";

const DisplayColor = styled(GiPlainCircle)`
  color: ${(props) => props.bg};
  font-size: 0.8rem;
`;

const ViewTask = () => {
  const [todolist, settodolist] = useState(addtodo);

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

          <div className="Todolist">
            <h1 className="TodolistName">To Do</h1>
            <div className="Line"></div>

            {todolist.map((value, index) =>
              value.isSelected ? (
                <div className="ListTodo" key={index}>
                  <div className="AllWrapper">
                    <div className="IconWrapper">
                      <div className="SixDots">
                        <GrDrag />
                      </div>
                      <div>
                        <FiCircle />
                      </div>
                    </div>
                    <div className="dataWrapper">
                      <h1 className="dataHeading">{value.heading}</h1>
                      <h2 className="dataPara">
                        {value.cont}
                        <span className="dataSpan">{value.span}</span>
                      </h2>
                      <div className="date">
                        <DisplayColor bg={value.color} />
                        <p className="datePara">{value.date}</p>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Dropdown as={ButtonGroup}>
                        <Button className="Drop">Edit</Button>
                        <Dropdown.Toggle split id="dropdown-split-basic" />
                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={() => {
                              let myarr = [...todolist];
                              myarr.splice(0, 1);
                              console.log(myarr);
                              settodolist(myarr);
                            }}
                          >
                            Delete
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => {}}>
                            Duplicate
                          </Dropdown.Item>
                          <Dropdown.Item>Add Reminder</Dropdown.Item>
                          <Dropdown.Item>Add Comment</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="ListLine"></div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewTask;
