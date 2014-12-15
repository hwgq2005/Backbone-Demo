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
				'click .container':'open'
			},
			rander:function(){ 
				$(this.el).html(this.template());
				$(this.el).shake();
			},
			open:function(){
				// appCollection.url='html/scripts/text.json';
				appCollection.fetch({
					success:function(msg,data){
						console.log(data)
					}
				})
			}
		})
		return new indexView;
});