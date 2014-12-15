/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-12-15 12:20:48
 * @version $Id$
 */

define(['zepto','underscore','backbone','../model/model'],function ($,_,Backbone,appModel){
	var appCollection=Backbone.Model.extend({
			model: appModel,
			url:'html/scripts/data.json'
		})
		return new appCollection;
		
});