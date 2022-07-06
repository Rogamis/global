import React from "react";
import TaskInput from "./component/TaskInput";
import TaskList from "./component/TaskList";
import "./TodoApp.css";
import BIRDS from "vanta/dist/vanta.cells.min";

const TodoApp = () => {
  return (
    <div className="">
      <header className="">
        <div className="">
          <TaskInput />
          <TaskList />
        </div>
      </header>
    </div>
  );
};

const ToDoAppContainer = () => {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const vantaRef = React.useRef(null);

  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="toDoAppContainer" ref={vantaRef}>
      <TodoApp />
    </div>
  );
};

export default ToDoAppContainer;
