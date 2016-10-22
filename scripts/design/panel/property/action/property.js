import * as ActionTypes from 'scripts/design/constants/ActionTypes'

import debug from 'scripts/3rd/debug'

const log=debug('PropertyAction');


export function onChangeProperty(data) {
  log('onChangeProperty',data);	
  return {
    type: ActionTypes.PROPERTY_CHANGE,
    data: data
  };
}
