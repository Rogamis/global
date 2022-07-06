export const ADD_TASK = "TASK::ADD_TASK";
export const REMOVE_TASK = "TASKS::REMOVE_TASK";
export const ADD_TASKS = "TASKS::ADD_TASKS";
export const REMOVE_TASKS = "TASKS::REMOVE_TASKS";
export const MODIFY_TASK = "TASK::MODIFY_TASK";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const removeTask = (task) => {
  return {
    type: REMOVE_TASK,
    payload: task,
  };
};

export const addTasks = (tasks) => {
  return {
    type: ADD_TASKS,
    payload: tasks,
  };
};

export const removeTasks = () => {
  return {
    type: REMOVE_TASKS,
  };
};

export const modifyTask = (id, completed) => {
  return {
    type: MODIFY_TASK,
    payload: {
      completed,
      id,
    },
  };
};
