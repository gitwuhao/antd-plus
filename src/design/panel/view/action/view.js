import * as ActionTypes from 'src/design/constants/ActionTypes'

import debug from 'src/3rd/debug'

const log=debug('ViewAction');
log.disable();
// export const DIRECTION = {
//   default: ActionTypes.VIEW_INSERT_AFTER,
//   append: ActionTypes.VIEW_INSERT_APPEND,
//   before: ActionTypes.VIEW_INSERT_BEFORE,
//   after: ActionTypes.VIEW_INSERT_AFTER
// };


export function onInsert(data) {
  log('insert', data);
  return {
    type: ActionTypes.VIEW_INSERT,
    data: data
  };
}

export function onAppend(data) {
  log('onAppend', data);
  return {
    type: ActionTypes.VIEW_APPEND,
    data: data
  };
}

export function onSort(data){
log('onSort', data);
  return {
    type: ActionTypes.VIEW_SORT,
    data: data
  };
}

export function onSelect(data){
log('onSelect', data);
  return {
    type: ActionTypes.VIEW_SELECT,
    data: data
  };
}
