const CHECK = 'bookstore/categories/CHECK';

export default function booksReducer(state = null, action) {
  switch (action.type) {
    case CHECK:
      return action.status;

    default:
      return state;
  }
}

export function checkStatus(status) {
  return { type: CHECK, status };
}
