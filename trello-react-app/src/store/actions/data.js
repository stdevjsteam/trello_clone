import { getLists, GET_LISTS, addNewList, UPDATE_LISTS } from "./lists";
import { getCards, GET_CARDS, addNewCard, ADD_CARD } from "./cards";
import { addCardInPositions, getCardsPositions, GET_CARDS_POSITIONS, addNewProductsList, ADD_NEW_ARRAY, UPDATE_CARDS_POSITIONS } from "./products";
import { GET_LIST_ORDER, getListOrder, ADD_LIST_ORDER, addInOrder } from './listOrder';
import { ADD_CARD_USERS_ARRAY, addNewCardUsersArray, getCardsUsers, GET_CARD_USERS } from './cardUsers';
import { getUsers, GET_USERS } from './users';
import { batchActions } from 'redux-batched-actions';

export const getData = () => async dispatch => {
  const lists = await getLists();
  console.log(lists);
  const cards = await getCards();
  console.log(cards);
  const positions = await getCardsPositions();
  console.log(positions);
  const listOrder = await getListOrder();
  console.log(listOrder);
  const users = await getUsers();
  console.log(users);
  const cardUsers = await getCardsUsers();
  console.log(cardUsers);
  return dispatch(batchActions([
    { type: GET_LISTS, data: lists },
    { type: GET_CARDS, data: cards },
    { type: GET_CARDS_POSITIONS, data: positions },
    { type: GET_LIST_ORDER, data: listOrder },
    { type: GET_USERS, data: users },
    { type: GET_CARD_USERS, data: cardUsers }
  ])
  );
}

export const updateData = (value, reason) => async dispatch => {
  switch (reason) {
    case 'LIST':
      {
        const newList = await addNewList(value);
        console.log(newList);
        const newArrayOfCards = await addNewProductsList(newList.id);
        console.log(newArrayOfCards);
        const newListOrder = await getListOrder();
        newListOrder.listPositions.push(newList.id);
        addInOrder(newListOrder);
        return dispatch(batchActions([
          { type: UPDATE_LISTS, data: newList },
          { type: ADD_NEW_ARRAY, data: newArrayOfCards },
          { type: ADD_LIST_ORDER, data: newListOrder }
        ])
        );
      }
    case 'CARD':
      {
        const newCard = await addNewCard(value);
        console.log(newCard);
        const updatedArrayOfCards = await addCardInPositions(newCard.listId, newCard.id)
        console.log(updatedArrayOfCards);
        const newCardUsersArray = await addNewCardUsersArray(newCard.id);
        return dispatch(batchActions([
          { type: ADD_CARD, data: newCard },
          { type: UPDATE_CARDS_POSITIONS, data: updatedArrayOfCards },
          { type: ADD_CARD_USERS_ARRAY, data: newCardUsersArray },
        ])
        );
      }
    default:
      return;
  }
}