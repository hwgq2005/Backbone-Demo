/*
 *
 * @authors H君 (qq:262281610)
 * @date    2014-10-23 19:54:33
 * @version $Id$
 */
define(['zepto','underscore','backbone','text!../../template/shake.html','shake'],function ($,_,Backbone,shakeViewTmp,shake){
		var indexView=Backbone.View.extend({
			el:'#main',
			template:_.template(shakeViewTmp),
			rander:function(){ 
				$(this.el).html(this.template());
				$(this.el).shake();
			}
		})
		return new indexView;
});