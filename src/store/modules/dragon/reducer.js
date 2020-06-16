import produce from 'immer';

const INITIAL_STATE = {
  dragons: [],
  dragon: {},
  loading: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@dragon/REQUEST_GET_ALL': {
        draft.loading = true;
        break;
      }
      case '@dragon/GET_ALL_SUCCESS': {
        draft.dragons = action.payload.dragons;
        draft.loading = false;
        break;
      }
      case '@dragon/REQUEST_ALL': {
        draft.loading = true;
        break;
      }
      case '@dragon/GET_SUCCESS': {
        draft.dragon = action.payload.dragon;
        draft.loading = false;
        break;
      }
      case '@dragon/DRAGON_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}
