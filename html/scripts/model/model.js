/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-12-15 10:47:42
 * @version $Id$
 */

define(['zepto','underscore','backbone'],function ($,_,Backbone){
		var appModel=Backbone.Model.extend({
			url:''
		})
		return new appModel;
});