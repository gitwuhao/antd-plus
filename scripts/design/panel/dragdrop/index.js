import './index.scss'

import dragula from 'scripts/3rd/plugins/dragula'
import dom from 'scripts/3rd/methods/dom'

import {isEmptyValue,isArray,isFunction} from 'scripts/3rd/methods'

import store  from 'scripts/design/store'


import debug from 'scripts/3rd/debug'
const log = debug('dragdrop');

// log.disable();

let initialOptions = {
  componentInstance: null,
  element: null
};
let sourceOptions;
let targetOptions;
let drake;

export function initSourceContainer(options = initialOptions) {
  sourceOptions = options;
}

export function initTargetContainer(options = initialOptions) {
  targetOptions = options;
 	
 	function handle(event){
  		//log(event.type,event.target);
  	 event.stopPropagation();
  	 event.preventDefault();
  };
  bindDragScroll(targetOptions.element);
 	initDragDrop();
};

function bindDragScroll(element){
	let lastScreenX;
  let lastScreenY;
	document.documentElement.onmousemove = function(event) {
	  let rect = element.getBoundingClientRect();
	  let {scrollTop,scrollLeft} = element;
	  let {screenX,screenY,clientX,clientY} = event;
	  let boundary=10;
	  if (drake.isDraging && lastScreenX > 0) {
	    let x = screenX - lastScreenX + 10;
	    let y = screenY - lastScreenY + 10;

	    if (rect.top > clientY-boundary) {
	      //log('move', [rect.top, clientY, event]);
	      scrollTop = scrollTop - y;
	    }else if (rect.bottom < clientY+boundary) {
	      //log('move', [rect.bottom, clientY, event]);
	      scrollTop = scrollTop + y;
	    }else if (rect.left > clientX-boundary) {
	      //log('move', [rect.left, clientX, event]);
	      scrollLeft = scrollLeft - x;
	    }else if (rect.right < clientX+boundary) {
	      //log('move', [rect.right, clientX, event]);
	      scrollLeft = scrollLeft + x;
	    }

	    if(scrollLeft!==element.scrollLeft || scrollTop!==element.scrollTop){
	    	element.scrollLeft = scrollLeft;
	    	element.scrollTop = scrollTop;
	    	hiddenAnchor();
	    }
	  }
	  lastScreenX = screenX;
	  lastScreenY = screenY;
	};

}

function getTypeList(type) {
  let state = store.getState();
  let typeList = state.tool.map[type];
  return typeList;
};


function isAccept(source, target) {
  let sourceType = dom.attr(source, 'data-type');
  let targetType = dom.attr(target, 'data-type');
  let typeList = getTypeList(targetType || '-');
  return typeList && !isEmptyValue(typeList[sourceType]);
};



function isComponentContainer(type) {
  let list = getTypeList(type);
  return isArray(list) && list.length > 0;
};

function getComponentType(element){
  return dom.attr(element, 'data-type');
};

function isComponent(element) {
  return isArray(getTypeList(getComponentType(element)));
};

let anchorElementId = 'dragula-anchor';

function insertAnchor() {
  let anchor = dom.get(anchorElementId);
  if (!anchor) {
    anchor = document.createElement('div');
    anchor.id = 'dragula-anchor';
  }
  document.body.appendChild(anchor);
  return anchor;
};

function hiddenAnchor() {
  //log('hiddenAnchor');
  let anchor = dom.get(anchorElementId);
  if (anchor) {
    anchor.style.display = 'none';
  }
};

function showAnchor() {
  //log('showAnchor');
  let anchor = dom.get(anchorElementId);
  if (anchor) {
    anchor.style.display = '';
  }
};

function removeAnchor() {
	drake.dropAction = null;
  //log('removeAnchor');
  let anchor = dom.get(anchorElementId);
  anchor && anchor.parentElement.removeChild(anchor);
};


function getReference(reference, dropTarget) {
  if (!reference) {
    let lastElementChild = dropTarget.lastElementChild;
    reference = lastElementChild ? lastElementChild : dropTarget;
  }
  if (!isComponent(reference)) {
    reference = dom.closest(reference, function(element) {
      return !isComponent(element);
    });
  }
  return reference;
};

function initDragDrop() {
	if(drake && drake.destroy){
		drake.destroy();
	}

  let left = sourceOptions.element;
  let right = targetOptions.element;

  drake = dragula([left, right], {
    revertOnSpill: true,
    cloneMirrorImage: function(el) {
      let mirror = document.createElement('div');
      mirror.className = 'gu-mirror';
      return mirror;
    },
    copy: function(el, source) {
      return left.contains(el) || right.contains(el);
    },
    isContainer: function(el) {
      //log('isContainer');
      if (left.contains(el)) {
        return el.classList.contains('handle');
      }
      return right.contains(el) && isComponent(el);
    },
    accepts: function(el, target, source, reference) {
      //log('accepts');
      if (isAccept(source, target)) {
        return true;
      }
      hiddenAnchor();
      return false;
    },
    insertBefore: function(item, dropTarget, source, reference) {
      let target = getReference(reference, dropTarget);
      let isLastChild = false;

      let anchor = insertAnchor();

      

      if (isAccept(source, target)) {
        target = target.lastElementChild;
        isLastChild = true;
      }

      let rect = target.getBoundingClientRect();
      let left = rect.left - 2;
      let top = rect.top;
      let height = rect.height;
      let width = 2;
      let dropAction = {
	      type: getComponentType(source),
	      actionType: 'onInsert',
	      position: dom.attr(target, 'data-position')
	    };



      if (isLastChild) {
      	let parentElement=target.parentElement;
        let parentRect = parentElement.getBoundingClientRect();
        if (parentRect.right > rect.right + 10) {
          left = rect.right;
        }else {
          top = rect.bottom + 2;
          left = parentRect.left;
          height = 2;
          width = parentRect.width;
        }
        dropAction.actionType = 'onAppend';
	      dropAction.position= dom.attr(parentElement, 'data-position');
      }



      if(right.contains(source)){
	      dropAction.actionType='onSort';
	      if(isComponent(target)){
	      	dropAction.targetPosition = dom.attr(target, 'data-position');
	      }else{
	      	//插入空容器
	      	dropAction.targetPosition =dropAction.position+'-0';
	      }
	      dropAction.sourcePosition = dom.attr(source, 'data-position');
	      if(isLastChild){
	      	dropAction.isInsertLast=true;
	      }
	      log('sort',[dropAction.targetPosition,dropAction.sourcePosition]);
      }

      drake.dropAction=dropAction;

      anchor.style.left = left + 'px';
      anchor.style.top = top + 'px';
      anchor.style.height = height + 'px';
      anchor.style.width = width + 'px';
      showAnchor();
    }
  });

  drake.on("drag", function(el, source) {
	  drake.isDraging=true;
  }).on("dragend", function(el) {
		drake.isDraging=false;
    removeAnchor();
  }).on("drop", function(el, parent, source, reference) {
    if (parent !== null) {
    	let componentProps=targetOptions.componentInstance.props;
    	let action=drake.dropAction;
    	let handle=componentProps[action.actionType];
    	if(isFunction(handle)){
    		//无效排序
    		if(action.actionType==='onSort' && action.targetPosition===action.sourcePosition){
    			return;
    		}
    		handle(action);
    	}
    }
  });
}

