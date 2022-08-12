const CHANGE_NAME = 'cat/CHANGE_NAME';

const initial_state = { name: '고양이', age: 5 };

export const changeName = (name) => {
  return { type: CHANGE_NAME, name };
};

export default function reducer(state = initial_state, action = {}) {
  switch (action.type) {
    case 'cat/CHANGE_NAME': {
      return { ...state, name: action.name };
    }
    default:
      return state;
  }
}
