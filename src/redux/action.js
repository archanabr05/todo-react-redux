export const CREATE_LIST_ITEM = "CREATE_LIST_ITEM";
export const DELETE_LIST_ITEM = "DELETE_LIST_ITEM";
export const SET_CURRENT_LIST_ITEM = "SET_CURRENT_LIST_ITEM";

export const CREATE_TASK_ITEM = "CREATE_TASK_ITEM";
export const DELETE_TASK_ITEM = "DELETE_TASK_ITEM";
export const UPDATE_TASK_ITEM = "UPDATE_TASK_ITEM";

export const createListItem = newListName => {
  return {
    type: CREATE_LIST_ITEM,
    newListName: newListName
  };
};

export const deleteListItem = listItemToDelete => {
  return {
    type: DELETE_LIST_ITEM,
    listID: listItemToDelete
  };
};

export const setCurrentListItem = listID => {
  return {
    type: SET_CURRENT_LIST_ITEM,
    currentListID: listID
  };
};

export const createTaskItem = newTaskName => {
  return {
    type: CREATE_TASK_ITEM,
    newTaskName: newTaskName
  };
};

export const deleteTaskItem = (taskToDelete) => {
  return {
    type: DELETE_TASK_ITEM,
    taskID: taskToDelete
  };
};

export const updateTaskItem = (taskIDToUpdate) => {
  return {
    type: UPDATE_TASK_ITEM,
    taskID: taskIDToUpdate
  };
};
