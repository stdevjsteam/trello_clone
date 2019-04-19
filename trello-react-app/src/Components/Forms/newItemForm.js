import React from 'react'
import { Field, reduxForm } from 'redux-form'

let NewItemForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <Field name="name" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

NewItemForm = reduxForm({
  form: 'newItem'
})(NewItemForm);

export default NewItemForm;