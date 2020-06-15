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
