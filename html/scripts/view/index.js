/*
 *
 * @authors H君 (qq:262281610)
 * @date    2014-10-23 19:54:33
 * @version $Id$
 */
define(['zepto','underscore','backbone','text!../../template/main.html','shake','../collection/collection'],function ($,_,Backbone,indexViewTmp,Carousel,appCollection){
		var indexView=Backbone.View.extend({
			el:'#main',
			template:_.template(indexViewTmp),
			events: {
				'click .body':'open'
			},
			rander:function(){ 
				var _this=this;
				appCollection.fetch({
					success:function(model,response,option){
						console.log(response)
						$(_this.el).html(_this.template({data:model.toJSON()}));
					}
				})
			}
		
		})
		return new indexView;
});