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
				'click .list .bar .isedit':'touchstart',
				'click #table-list .table-view-cell .delete':'del'
			},
			rander:function(){ 
				var _this=this;
				appCollection.fetch({
					success:function(model,response,option){
						console.log(response)
						$(_this.el).html(_this.template({data:model.toJSON()}));
					}
				})
			},
			touchstart:function(e){
				var _left=$(e.currentTarget),
					isedit=_left.data('isedit');
				if (isedit === false) {
					var _html='<a href="#" class="btn btn-negative delete" >移除</a>';
					$('.table-view li').append(_html);
					_left.data('isedit','true').text('完成');

				}else{
					$('.table-view li').find('.delete').remove();
					_left.data('isedit','false').text('编辑');
				};
			},
			del:function(e){
				var _left=$(e.currentTarget);
				_left.parent().remove();
				// $.getJSON('destory.json',{data:val}, function(data){
				//   console.log(data)
				// })
			}
		
		})
		return new indexView;
});