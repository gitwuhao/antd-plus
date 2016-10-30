import * as ActionTypes from 'src/design/constants/ActionTypes'

import debug from 'src/3rd/debug'

const log=debug('PropertyAction');


export function onChangeProperty(data) {
  log('onChangeProperty',data);	
  return {
    type: ActionTypes.PROPERTY_CHANGE,
    data: data
  };
}
