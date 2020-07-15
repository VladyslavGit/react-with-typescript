import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>About</h1>
      <p>
        A task manager is a utility that provides a view of active processes or
        tasks, as well as related information, and may also allow users to enter
        commands that will manipulate those tasks in various ways.
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Back to To-Do list
      </button>
    </>
  );
};
