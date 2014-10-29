/*
 *
 * @authors H君 (qq:262281610)
 * @date    2014-10-23 19:54:33
 * @version $Id$
 */

define(['zepto','underscore','backbone','../view/index'],function ($,_,Backbone,index){
		var Router=Backbone.Router.extend({
			routes:{
				'':'Index'
			},
			Index:function(){
				this.change(index);
			},
			change:function(page){
				page.rander(page);
			}
		})
		var init=function(){
			var router=new Router;
			Backbone.history.start();
		};
		return{
			initlalize:init
		}
});


