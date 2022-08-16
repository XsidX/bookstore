const CHECK = 'bookstore/categories/CHECK';

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case CHECK:
      return 'Under construction';

    default:
      return state;
  }
}

export function checkStatus() {
  return { type: CHECK };
}
