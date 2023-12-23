import React from "react";

function Todolist(props) {
  return (
    <li className="list-item">
      {props.item}
      <span className="icons">
        <i
          className="fa-solid fa-trash-can icon-delete"
          onClick={(e) => {
            props.deleteItem(props.index);
          }}
        ></i>
        <i
          class="fa-regular fa-pen-to-square"
          onClick={(e) => {
            props.editdItem(props.index);
          }}
        ></i>

        <i
          className="fa-regular fa-check"
          onClick={(e) => {
            props.markedItem(props.index);
          }}
        ></i>
      </span>
    </li>
  );
}

export default Todolist;
