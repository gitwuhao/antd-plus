import methods,{getGuid,each,isEmptyValue} from 'scripts/3rd/methods/index'

export function getPosition(position) {
  return position.replace(/\-/g, '-children-').split('-');
};

export function toPosition(positionArray) {
  return positionArray.join('-').replace(/\-children\-/ig, '-');
};
export function loopArray(array,handle){
  each(array,function(index,item){
    handle(index,item);
    loopArray(item.children,handle) ;
  });
};

export function setItemId(item){
  item.__guid__= getGuid();
  return item;
}
export function getItemId(item){
  return item.__guid__;
};

let pathToguidMap={};

export function setViewItemDataPath(path,item){
	let guid=getItemId(item);
	pathToguidMap[path]=guid;
	pathToguidMap[guid]=path;
};

export function initViewDataPathMap(){
	pathToguidMap={};
};

export function getViewItemDataPath(pathORguid){
	return pathToguidMap[pathORguid];
};