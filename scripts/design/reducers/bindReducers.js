export default function bindReducers(handles) {
  return function(state={}, action) {
    let handle = handles[action.type];
    return handle && handle(state, action) || state;
  }
}




