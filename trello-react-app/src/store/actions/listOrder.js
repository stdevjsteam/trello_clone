export const GET_LIST_ORDER = 'GET_LIST_ORDER';
export const UPDATE_LIST_ORDER = 'UPDATE_LIST_ORDER';
export const ADD_LIST_ORDER = 'ADD_LIST_ORDER';

export const getListOrder = async () => {
  const listOrder = await fetch('http://localhost:3004/listOrder')
    .then(response => response.json());
  return listOrder;
}

export const updateListOrder = (listOrder, source, destination) => async dispatch => {
  const [removed] = listOrder.splice(source, 1);
  listOrder.splice(destination, 0, removed);
  const newArray = await fetch('http://localhost:3004/listorder/', {
    method: 'PUT',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(
      { listPositions: listOrder }
    )
  })
    .then(response => response.json())
  console.log(newArray);
  return dispatch({ type: UPDATE_LIST_ORDER, data: { listPositions: listOrder } });
}

export const addInOrder = (value) => {
  fetch('http://localhost:3004/listorder/', {
    method: 'PUT',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(
      value
    )
  })
    .then(response => response.json())
}