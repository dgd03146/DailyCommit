// bucket.js

// Actions

const CREATE = 'bucket/CREATE';
const REMOVE = 'bucket/REMOVE';

const initialState = {
  list: ['영화관 가기', '매일 책읽기', '수영 배우기']
};

// Action Creators
export function createBucket(bucket) {
  return { type: CREATE, bucket: bucket };
}
export function removeBucket(bucket) {
  return { type: REMOVE, bucket: bucket };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case 'bucket/CREATE': {
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }
    case 'bucket/REMOVE': {
      const new_bucket_list = state.list.filter((it) => it !== action.bucket);
      return { list: new_bucket_list };
    }
    default:
      return state;
  }
}
