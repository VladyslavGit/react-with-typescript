import React from "react";

export const TodoForm: React.FC = () => {
  return (
    <div className="input-field mt2">
      <input type="text" id="title" placeholder="Enter your task" />
      <label htmlFor="title" className="active">
        Enter your task
      </label>
    </div>
  );
};
