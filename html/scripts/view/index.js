/*
 *
 * @authors H君 (qq:262281610)
 * @date    2014-10-23 19:54:33
 * @version $Id$
 */
define(['zepto','underscore','backbone','text!../../template/main.html','shake','../collection/collection','../model/model'],function ($,_,Backbone,indexViewTmp,Carousel,appCollection,appModel){
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

						_.each(response.data.site_hot,function(elem,i){
							console.log(elem);

						})
						//实现搜索某个值返回数据
						var aaa=_.filter(response.data.site_hot,function(elem,i){
							// console.log(elem)
							return elem.description.match(/新/); 
						});
					
						$(_this.el).html(_this.template({data:response}));
					}
				})
			},
			touchstart:function(e){
				var _left=$(e.currentTarget),
					isedit=_left.data('isedit');
				if (isedit === false) {
					var _html='<a href="javascript:;" class="btn btn-negative delete" >移除</a>';
					$('.table-view li').append(_html);
					_left.data('isedit','true').text('完成');

				}else{
					$('.table-view li').find('.delete').remove();
					_left.data('isedit','false').text('编辑');
				};
			},	
			del:function(e){
				var _left=$(e.currentTarget);
				// _left.parent().remove();
				var sid=_left.parent().data('id');
				var appModele=new appModel({id:sid})
				appModele.url=appModele.url+'delete';
				appModele.destroy({
		            success: function (model, response) {
		             	console.log(model)
		            },
		            error: function (error) {
		                console.log("删除数据出现异常");
		            },
		            wait:true
		        });

				// $.getJSON('http://www.iice.com/ice/frontend/web/index.php/rest/delete/3?callback=', function(data){
				//   alert('删除成功')
				// })
				
			}
		
		})
		return new indexView;
});