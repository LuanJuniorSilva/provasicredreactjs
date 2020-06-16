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

export function getDragonRequest(id) {
  return {
    type: '@dragon/GET_REQUEST',
    id,
  };
}

export function getDragonSuccess(dragon) {
  return {
    type: '@dragon/GET_SUCCESS',
    payload: { dragon },
  };
}
