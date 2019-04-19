export const ADD_NEW_USER = 'ADD_NEW_USER';
export const GET_USERS = 'GET_USERS';

export const getUsers = async () => {
  const users = await fetch('http://localhost:3005/users')
    .then(response => response.json());
  const usersForSelect = users.map(user => {
    return {
      value: user.username,
      label: user.username,
      id: user.id,
    }
  })
  return usersForSelect;
}

export const addNewUser = (value) => async dispatch => {
  const user = await fetch('http://localhost:3005/users',{
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(value)
  })
  .then((response) => response.json());
  return dispatch({ type:ADD_NEW_USER, data:user });
}