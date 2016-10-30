import {attr} from './attr'
import {closest} from './closest'

export default {
	attr,
	closest,
	get:function(eid){
		return document.getElementById(eid);
	}
}
