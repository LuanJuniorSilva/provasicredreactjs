export function getDragonsRequest() {
  return {
    type: '@dragon/GET_ALL_REQUEST',
  };
}

export function getDragonsSuccess(dragons) {
  return {
    type: '@dragon/GET_ALL_SUCCESS',
    payload: { dragons },
  };
}

export function dragonFailure() {
  return {
    type: '@dragon/DRAGON_FAILURE',
  };
}

export function deleteDragonRequest(id) {
  return {
    type: '@dragon/DELETE_REQUEST',
    id,
  };
}

export function deleteDragonSuccess(id) {
  return {
    type: '@dragon/DELETE_SUCCESS',
    payload: { id },
  };
}
