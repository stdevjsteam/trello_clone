import React from 'react'
import { Field, reduxForm } from 'redux-form'

let EditItemForm = props => {
  const { handleSubmit, users} = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="title">Description</label>
        <Field name="description" component="textarea" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

EditItemForm = reduxForm({
  form: 'editItem'
})(EditItemForm);

export default EditItemForm;