import React from "react";

export class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskInputText: ""
    };
  }

  setTaskName = e => {
    this.setState({taskInputText: e.target.value});
  }

  addNewListItem = () => {
    this.props.state.createTaskItem(this.state.taskInputText);
    this.setState({taskInputText: ''});
  }

  render() {
    let props = this.props.state;
    let todoList = props.state;
    let taskItems;
    if (
      this.props.state.selectedListItem !== "" &&
      todoList.todos.length > 0
    ) {
      const listItem = todoList.todos.find(
        itemList => itemList.listID === todoList.selectedListItem
      );

      if (listItem) {
        taskItems = listItem.listTasks.map(itemTask => {
          return (
            <li key={itemTask.taskID}>
              <input type="checkbox" checked={itemTask.isCompleted} onChange={() => props.updateTaskItem(itemTask.taskID)} />
              {itemTask.taskName}
              <button onClick={() => props.deleteTaskItem(itemTask.taskID)}>Remove</button>
            </li>
          );
        });
      }
    }

    return (
      <div>
        <input type="text" value={this.state.taskInputText} onChange={(e) => this.setTaskName(e)} />
        <button onClick={this.addNewListItem}>Add New Task</button>
        <ul>{taskItems}</ul>
      </div>
    );
  }
}
