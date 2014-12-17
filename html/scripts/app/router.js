/*
 *
 * @authors H君 (qq:262281610)
 * @date    2014-10-23 19:54:33
 * @version $Id$
 */

define(['zepto','underscore','backbone','../view/index','../view/addsite','../view/shake'],function ($,_,Backbone,index,addsite,shake){
		var Router=Backbone.Router.extend({
			routes:{
						'':'index',
					 'addsite':'addsite',
				'activity':'activity'
			},
			index:function(){
				this.change(index);
			},
			addsite:function(){
				this.change(addsite);
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


