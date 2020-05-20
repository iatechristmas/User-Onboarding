import React from "react";

const Form = (props) => {
  const {
    values,
    onInputChange,
    onSubmit,
    disabled,
    errors,
    onCheckboxChange,
  } = props;

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h2>Add a user</h2>
        <button disabled={disabled}>submit</button>
        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
        </div>
      </div>
      <div>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter name"
            maxLength="30"
            name="name"
            value={values.name}
            onChange={onInputChange}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            placeholder="Enter email address"
            maxLength="30"
            name="email"
            value={values.email}
            onChange={onInputChange}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            placeholder="Enter password"
            maxLength="30"
            name="password"
            value={values.password}
            onChange={onInputChange}
          />
        </label>
        <label>
          TOS
          <input
            type="checkbox"
            name="tos"
            checked={values.tos}
            onChange={onCheckboxChange}
          />
        </label>
      </div>
    </form>
  );
};

export default Form;
