export const ADD_CARD_USERS_ARRAY = 'ADD_CARD_USERS_ARRAY';
export const GET_CARD_USERS = 'GET_CARD_USERS';
export const UPDATE_CARD_USERS = 'UPDATE_CARD_USERS';

export const getCardsUsers = async () => {
  const cards = await fetch('http://localhost:3004/cardUsers')
    .then(response => response.json())
  return cards;
}

export const addNewCardUsersArray = (userId) => async dispatch =>{
  const newCardUsersArray = await fetch('http://localhost:3004/cardUsers', {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify({
      "userId": userId,
      "users": [],
    })
  })
  .then((response) => response.json());
  return dispatch({type:ADD_CARD_USERS_ARRAY, data: newCardUsersArray})
}

export const updateUsersInCard = (value,cardUsers) => async dispatch => {
  const index = cardUsers.users.indexOf(value.id);
  console.log(index);
  console.log(cardUsers);
  if(index !== -1) {
    cardUsers.users.splice(index,1);
    const result = await fetch('http://localhost:3004/cardUsers/' + cardUsers.cardId, {
      method: 'PATCH',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({
        users: cardUsers.users
      })
    })
    .then(response => response.json())
    console.log(result);
    return dispatch({ type: UPDATE_CARD_USERS, data: result });
  } else {
    cardUsers.users.push(value.id);
    const result = await fetch('http://localhost:3004/cardUsers/' + cardUsers.cardId, {
      method: 'PATCH',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({
        users: cardUsers.users
      })
    })
    .then(response => response.json())
    console.log(result);
    return dispatch({ type: UPDATE_CARD_USERS, data: result });
  }
}