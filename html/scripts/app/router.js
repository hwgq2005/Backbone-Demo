/*
 *
 * @authors H君 (qq:262281610)
 * @date    2014-10-23 19:54:33
 * @version $Id$
 */

define(['zepto','underscore','backbone','../view/index','../view/shake'],function ($,_,Backbone,index,shake){
		var Router=Backbone.Router.extend({
			routes:{
						'':'index',
				'activity':'activity'
			},
			index:function(){
				this.change(index);
			},
			activity:function(){
				this.change(shake);
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


