/*
 *
 * @authors H君 (qq:262281610)
 * @date    2014-10-23 19:54:33
 * @version $Id$
 */
define(['zepto','underscore','backbone','text!../../template/add.html','shake','../collection/collection','../model/model'],function ($,_,Backbone,addSiteTmp,Carousel,appCollection,appModel){
		var addView=Backbone.View.extend({
			el:'#main',
			template:_.template(addSiteTmp),
			events: {
				
			},
			rander:function(){ 
				$(this.el).html(this.template());
			},
			saveSite:function(e){
				var _left=$(e.currentTarget);
				// _left.parent().remove();
				var appModele=new appModel({
					id:'3'
				})
				appModele.destroy({
		            success: function (model, response) {
		             	console.log(model)
		            },
		            error: function (error) {
		                console.log("删除数据出现异常");
		            },
		            wait:true
		        });
				
			}
		
		})
		return new addView;
});