import React from 'react';
import { Field, reduxForm } from 'redux-form';

let NewUserForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">username</label>
        <Field name="username" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">e-mail</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

NewUserForm = reduxForm({
  form: 'newUser'
})(NewUserForm);

export default NewUserForm;