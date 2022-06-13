import { useReducer, useRef } from 'react';
import AuthContext from './Auth-Context';

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      newState = [action.data, ...state];
      break;
    }
    case 'REMOVE': {
      newState = state.filter((item) => item.id !== action.targetId);
      break;
    }
    case 'EDIT': {
      newState = state.map((item) =>
        item.id === action.data.id ? { ...action.data } : item
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: '오늘의 일기 1번',
    date: 1654626890083
  },
  {
    id: 2,
    emotion: 2,
    content: '오늘의 일기 2번',
    date: 1654626890086
  },
  {
    id: 3,
    emotion: 3,
    content: '오늘의 일기 3번',
    date: 1654626890088
  },
  {
    id: 4,
    emotion: 4,
    content: '오늘의 일기 4번',
    date: 1654626890089
  }
];

const AuthProvider = (props) => {
  const [data, dispatch] = useReducer(reducer, dummyData);

  const dataId = useRef(0);

  const onCreate = (date, content, emotion) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion
      }
    });
    dataId.current += 1;
  };

  const onRemove = (targetId) => {
    dispatch({ type: 'REMOVE', targetId });
  };

  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: 'EDIT',
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion
      }
    });
  };

  const authContext = {
    data: data,
    create: onCreate,
    remove: onRemove,
    edit: onEdit
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
