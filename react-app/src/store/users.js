// constants
const GET_USER = "users/GET_USER"
const GET_USERS = "users/GET_USERS"

const getUser = user => ({
  type: GET_USER,
  payload: user
})

const getUsers = users => ({
  type: GET_USERS,
  payload: users
})

const initialState = { users: {} };

export const fetchUsers = () => async (dispatch) => {
  const response = await fetch('/api/users', {
    headers: { 'Content-Type': 'application/json'}
  });
  const data = await response.json();
  if (data.errors) return;
  dispatch(getUsers(data));
}

export const fetchUser = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}`, {
    headers: { 'Content-Type': 'application/json'}
  });
  const data = await response.json();
  if (data.errors) return;
  dispatch(getUser(data));
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case GET_USER:
      return { users: {...state.users, [action.payload.id]: action.payload}}
    case GET_USERS:
      return { users: action.payload }
    default:
      return state;
  }
}