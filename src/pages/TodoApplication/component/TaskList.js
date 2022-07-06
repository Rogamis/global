import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addTasks, removeTask, modifyTask } from "../../../redux/actions/tasksAction";

const TaskList = (props) => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then((res) => res.json())
      .then((data) => {
        props.addTasks(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {props.taskList.map((element) => {
        return (
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              checked={element.completed}
              onChange={(event) => {
                props.modifyTask(element.id, event.target.checked);
              }}
            ></input>
            <span>{element.title}</span>
            <button
              disabled={!element.completed}
              onClick={() => {
                props.removeTask(element);
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    taskList: state.tasks.tasks,
  };
};

const mapDispatchToProps = {
  addTasks: addTasks,
  removeTask: removeTask,
  modifyTask: modifyTask,
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
