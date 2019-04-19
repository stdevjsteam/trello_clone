import React from 'react'
import { Field, reduxForm } from 'redux-form'

let SearchForm = props => {
  const { handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="board-search">
        <Field name='search' type="search" className="board-search-input" aria-label="Board Search" component='input' />
      </div>
      {/* <button type="submit">Submit</button> */}
    </form>
  );
}

SearchForm = reduxForm({
  form: 'searchForm'
})(SearchForm);

export default SearchForm;