import {
  CREATE_LIST_ITEM,
  DELETE_LIST_ITEM,
  SET_CURRENT_LIST_ITEM,
  CREATE_TASK_ITEM,
  DELETE_TASK_ITEM,
  UPDATE_TASK_ITEM
} from "./action";

const initialState = {
  todos: [
    {
      listID: 1,
      listName: "List-1",
      listTasks: [
        {
          taskID: 1,
          taskName: "Task-1",
          isCompleted: true
        },
        {
          taskID: 2,
          taskName: "Task-2",
          isCompleted: false
        }
      ]
    },
    {
      listID: 2,
      listName: "List-2",
      listTasks: [
        {
          taskID: 3,
          taskName: "Task-1",
          isCompleted: true
        },
        {
          taskID: 4,
          taskName: "Task-2",
          isCompleted: false
        },
        {
          taskID: 5,
          taskName: "Task-3",
          isCompleted: true
        }
      ]
    }
  ],
  selectedListItem: ""
};

export const reducer = (state = initialState, action) => {
  let listIndex;
  switch (action.type) {
    case CREATE_LIST_ITEM:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            listID: new Date().valueOf(),
            listName: action.newListName,
            listTasks: []
          }
        ]
      };
    case DELETE_LIST_ITEM:
      return {
        ...state,
        todos: state.todos.filter(item => item.listID !== action.listID)
      };
    case SET_CURRENT_LIST_ITEM:
      console.log('SET_CURRENT_LIST_ITEM', action.currentListID);
      return {
        ...state,
        selectedListItem: action.currentListID
      };
    case CREATE_TASK_ITEM:
      listIndex = state.todos.findIndex(
        item => item.listID === state.selectedListItem
      );

      let targetList = state.todos[listIndex];

      targetList = {
        ...targetList,
        listTasks: [
          ...targetList.listTasks,
          {
            taskID: new Date().valueOf(),
            taskName: action.newTaskName,
            isCompleted: false
          }
        ]
      };

      state.todos.splice(listIndex, 1, targetList);
      return {
        ...state
      }
    case DELETE_TASK_ITEM:
      listIndex = state.todos.findIndex(
        item => item.listID === state.selectedListItem
      );
      let targetListTaskArray = state.todos[listIndex].listTasks.filter(item => item.taskID !== action.taskID);
      state.todos[listIndex].listTasks = targetListTaskArray;

      return {
        ...state
      }
    case UPDATE_TASK_ITEM:
      listIndex = state.todos.findIndex(
        item => item.listID === state.selectedListItem
      );

      let taskIndex = state.todos[listIndex].listTasks.findIndex(
        item => item.taskID === action.taskID
      )
      state.todos[listIndex].listTasks[taskIndex].isCompleted = !state.todos[listIndex].listTasks[taskIndex].isCompleted;
      return {
        ...state
      }
    default:
      return state;
  }
};
