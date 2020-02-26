import React, { useState } from "react";
import { TaskContainer } from "./TaskContainer";

import { connect } from "react-redux";

import {
  createListItem,
  deleteListItem,
  setCurrentListItem,
  createTaskItem,
  deleteTaskItem,
  updateTaskItem
} from "../redux/action";

function ListContainer(props) {
  const toDoList = props.state.todos;
  const listItems = toDoList.map(item => {
    return (
      <li key={item.listID}>
        <span onClick={() => props.setCurrentListItem(item.listID)}>
          {item.listName}
        </span>
        <button onClick={() => props.deleteListItem(item.listID)}>
          Remove
        </button>
      </li>
    );
  });

  let [inputListName, setListNameHooks] = useState('');

  let setListName = e => {
    setListNameHooks(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputListName}
          onChange={e => setListName(e)}
        />
        <button onClick={() => props.createListItem(inputListName)}>
          Add New List
        </button>
        <ul>{listItems}</ul>
      </div>
      <div>
        <TaskContainer state={props} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createListItem: newListName => dispatch(createListItem(newListName)),
    deleteListItem: listID => dispatch(deleteListItem(listID)),
    setCurrentListItem: listID => dispatch(setCurrentListItem(listID)),
    createTaskItem: newTaskName => dispatch(createTaskItem(newTaskName)),
    deleteTaskItem: taskID => dispatch(deleteTaskItem(taskID)),
    updateTaskItem: taskID => dispatch(updateTaskItem(taskID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
