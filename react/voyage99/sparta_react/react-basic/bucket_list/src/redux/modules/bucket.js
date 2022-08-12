// bucket.js

// Actions

const CREATE = 'bucket/CREATE';
const REMOVE = 'bucket/REMOVE';
const UPDATE = 'bucket/UPDATE';

const initialState = {
  list: [
    { text: '영화관 가기', completed: false },
    { text: '매일 책읽기', completed: false },
    { text: '수영 배우기', completed: false },
    { text: '코딩 하기', completed: false }
  ]
};

// Action Creators
export function createBucket(bucket) {
  return { type: CREATE, bucket: bucket };
}
export function removeBucket(bucket_index) {
  return { type: REMOVE, bucket_index };
}

export function updateBucket(bucket_index) {
  return { type: UPDATE, bucket_index };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case 'bucket/CREATE': {
      const new_bucket_list = [
        ...state.list,
        { text: action.bucket, completed: false }
      ];

      return { list: new_bucket_list };
    }
    case 'bucket/REMOVE': {
      const new_bucket_list = state.list.filter(
        (it, index) => index !== parseInt(action.bucket_index)
      );
      console.log(new_bucket_list, 'new_bucket_lsit임');
      return { list: new_bucket_list };
    }
    case 'bucket/UPDATE': {
      const new_bucket_list = state.list.map((it, index) => {
        if (parseInt(action.bucket_index) === index) {
          return { ...it, completed: true };
        } else {
          return it;
        }
      });

      return { list: new_bucket_list };
    }

    default:
      return state;
  }
}
