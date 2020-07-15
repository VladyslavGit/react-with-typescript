import React, { useRef } from "react";

// interface TodoFormProps {
//   onAdd(title: string): void;
// }

export const TodoForm: React.FC = () => {
  // const [title, setTitle] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null);

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      //   props.onAdd(ref.current!.value);
      ref.current!.value = "";
      // console.log(title)
      // setTitle('')
    }
  };
  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        // onChange={changeHandler}
        // value={title}
        type="text"
        id="title"
        placeholder="Enter your task"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Enter your task
      </label>
    </div>
  );
};
