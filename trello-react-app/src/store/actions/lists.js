export const GET_LISTS = 'GET_LISTS';
export const UPDATE_LISTS = 'UPDATE_LISTS';

export const getLists = async () => {
  const lists = await fetch('http://localhost:3004/lists')
    .then(responce => responce.json());
  return lists;
}

export const addNewList = async (value) => {
  const newList = await fetch('http://localhost:3004/lists', {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(value)
  })
    .then((response) => response.json());
  return newList;
}