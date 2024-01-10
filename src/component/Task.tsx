import React from "react";

type Props = {
  id: string;
  title: string;
  done: boolean;
};

const Task: React.FC<Props> = ({ id, title, done }) => {
  return (
    <span className="task">
      <input
        type="checkbox"
        checked={done}
        name=""
        id={id}
        className="radioInput"
      />
      {title}
      <button className="to__delete">x</button>
    </span>
  );
};

export default Task;
