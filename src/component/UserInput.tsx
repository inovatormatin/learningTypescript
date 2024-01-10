import React from "react";
type Props = {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  addHandler: (e: React.FormEvent) => void;
};

const UserInput: React.FC<Props> = ({
  userInput,
  setUserInput,
  addHandler,
}) => {
  return (
    <form className="user__input" onSubmit={addHandler}>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button type="submit" className="to__add">
        +
      </button>
    </form>
  );
};

export default UserInput;
