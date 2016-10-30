import * as ActionTypes from 'src/design/constants/ActionTypes'
import { Immutable } from 'src/3rd/plugins'

import methods,{getGuid,each,isEmptyValue} from 'methods'

import * as util from 'src/design/util'

import bindReducers from './bindReducers'
import debug from 'src/3rd/debug'

const log = debug('reducers.view');

let initialState = {
  selectId: null,
  data: null
};
let table;

function initData(state, action) {
  util.loopArray(state.data, function(i, item) {
    util.setItemId(item);
  });
  table = Immutable.fromJS(state.data);
  initialState.data = table.toJSON();
  initialState.active = initialState.data[0];
  return Object.assign({}, initialState);
}

function insert(state, action) {
  let data = action.data;
  let position = util.getPosition(data.position);
  let item = util.setItemId({
    type: data.type
  });

  table = Immutable.insertIn(table, position, item);

  initialState.data = table.toJSON();
  initialState.active = item;
  return Object.assign({}, initialState);
};

function append(state, action) {
  let data = action.data;
  let position = util.getPosition(data.position);
  position.push('children');
  let item = util.setItemId({
    type: data.type
  });

  table = Immutable.pushIn(table, position, item);
  initialState.data = table.toJSON();
  initialState.active = item;
  return Object.assign({}, initialState);
}


function sort(state, action) {
  let data = action.data;
  let targetPosition = util.getPosition(data.targetPosition);
  let sourcePosition = util.getPosition(data.sourcePosition);

  let item = table.getIn(sourcePosition).toJSON();

  let targetIndex = +targetPosition[targetPosition.length - 1];
  let sourceIndex = +sourcePosition[sourcePosition.length - 1];
  if (data.isInsertLast) {
    targetPosition[targetPosition.length - 1] = '' + (targetIndex + 1);
  }
  else if (targetIndex > sourceIndex) {
    targetPosition[targetPosition.length - 1] = '' + (targetIndex - 1);
  }
  table = Immutable.sortIn(table, sourcePosition, targetPosition);
  initialState.data = table.toJSON();
  initialState.active = item;
  return Object.assign({}, initialState);
}

function select(state, action) {
  initialState.active = action.data;
  return Object.assign({}, initialState);
}


function change(state, action) {
  let data = action.data;
  let targetPosition = util.getPosition(data.position);
  table = table.mergeIn(targetPosition, data.property);
  initialState.data = table.toJSON();
  initialState.active = table.getIn(targetPosition).toJSON();
  return Object.assign({}, initialState);
}



export default bindReducers({
  [ActionTypes.VIEW_INSERT]: insert,
  [ActionTypes.VIEW_APPEND]: append,
  [ActionTypes.VIEW_SORT]: sort,
  [ActionTypes.VIEW_SELECT]: select,
  [ActionTypes.INIT_STORE]: initData,
  [ActionTypes.PROPERTY_CHANGE]: change
});
