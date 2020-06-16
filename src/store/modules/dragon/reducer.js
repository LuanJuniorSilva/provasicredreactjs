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
      case '@dragon/DELETE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@dragon/DELETE_SUCCESS': {
        draft.dragons = state.dragons.filter(
          dragon => dragon.id !== action.payload.id
        );
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
