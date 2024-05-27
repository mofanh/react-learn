import React, { useState } from 'react';

interface FormProps {
  addTask: (name: string) => void;
}

function Form(props: FormProps) {
  const [name, setName] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log('event.target.value', event.target.value);
    setName(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    props.addTask(name);
    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
       <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
     <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        onChange={handleChange}
      />
     <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;