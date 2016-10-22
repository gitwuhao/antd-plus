import methods, {each} from 'scripts/3rd/methods/index'

import * as types from 'scripts/design/constants/ActionTypes'

let rootKey = 'root';

let initialState = {
  map: null,
  data: null
};

function dataToMap(data) {
  let structureMap = {};
  let rootChildren = [];
  each(data, function(index, firstItem) {
    each(firstItem.children, function(i, subItem) {
      let type = subItem.type;
      if (subItem.children) {
        rootChildren.push(type);
      }
      firstItem[type]=1;
      structureMap[type] = subItem.children||[];
    });
  });
  structureMap[rootKey] = rootChildren;

  each([rootKey].concat(rootChildren),function(i,key){
    let array=structureMap[key];
    each(array, function(i, item) {
      array[item]=i;
    });
  });

  return structureMap;
}

function initData(data) {
  initialState.map = dataToMap(data);
  initialState.data = data;
  return initialState;
};

export default function tool(state=initialState, action) {
  switch (action.type) {
    case types.INIT_STORE:
      return initData(state);
  }
  return state;

}
