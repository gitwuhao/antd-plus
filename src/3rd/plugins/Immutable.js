import Immutable from 'immutable'


import debug from 'src/3rd/debug'
const log = debug('dragdrop');


Object.assign(Immutable, {
  insertIn: function(table, pathArray, value) {
    let len=pathArray.length-1;
		let index=pathArray[len];
    let parentPath = pathArray.slice(0, len);
    let list = table.getIn(parentPath);
    let newList;
    if(list){
      newList = list.insert(index, Immutable.fromJS(value));
    }else{
      newList=Immutable.fromJS([value]);
    }
    table = table.setIn(parentPath, newList);
    return table;
  },
  pushIn:function(table, pathArray, value){
    let len=pathArray.length-1;
    let index=pathArray[len];
    let list = table.getIn(pathArray);
    let newList;
    if(list){
      newList = list.push(Immutable.fromJS(value));
    }else{
      newList=Immutable.fromJS([value]);
    }
    table = table.setIn(pathArray, newList);
    return table;
  },
  sortIn:function(table, sourcePathArray,targetPathArray){
    let sourceValue = table.getIn(sourcePathArray);
    table = table.deleteIn(sourcePathArray);
    return Immutable.insertIn(table,targetPathArray,sourceValue.toJSON());
  }

});



Immutable.helper = {
  insertIn: function(data, pathArray, value) {
    let table = Immutable.insertIn(Immutable.fromJS(data),pathArray,value);
    return table.toJSON();
  },
  pushIn: function(data, pathArray, value) {
    let table = Immutable.pushIn(Immutable.fromJS(data),pathArray,value);
    return table.toJSON();
  },
  pushIn: function(data, sourcePathArray,targetPathArray){
    let table = Immutable.pushIn(Immutable.fromJS(data),sourcePathArray,targetPathArray);
    return table.toJSON();
  }
};

export default Immutable;