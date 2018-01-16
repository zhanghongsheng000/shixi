jQuery.fn.extend({
	autoHeight: function() {
		return this.each(function() {
			var $this = jQuery(this);
			if(!$this.attr('_initAdjustHeight')) {
				$this.attr('_initAdjustHeight', $this.outerHeight());
			}
			_adjustH(this).on('input', function() {
				_adjustH(this);
			});
		});
		/**
		 * 重置高度 
		 * @param {Object} elem
		 */
		function _adjustH(elem) {
			var $obj = jQuery(elem);
			return $obj.css({
					height: $obj.attr('_initAdjustHeight'),
					'overflow-y': 'hidden'
				})
				.height(elem.scrollHeight);
		}
	}
});
// 使用
$(function() {
	$('#W_input').autoHeight();
});
var Height=$('textarea').height();
$(function() {
	$('.emotion').qqFace({
		id: 'facebox',
		assign: 'W_input',
		path: 'arclist/' //表情存放的路径
	});
	/*发布*/
	$('#send_btn').click(function() {
		var str_con = $("#W_input").val();
		if(str_con !== '') {
			/*************获取当前时间****************/
			var date = new Date();
			var seperator1 = "-";
			var seperator2 = ":";
			var month = date.getMonth() + 1;
			var strDate = date.getDate();
			var getMin = date.getMinutes();
			if(getMin >= 1 && getMin <= 9) {
				getMin = "0" + getMin;
			}
			if(month >= 1 && month <= 9) {
				month = "0" + month;
			}
			if(strDate >= 0 && strDate <= 9) {
				strDate = "0" + strDate;
			}
			var currentdate = month + '月' + strDate + "日 " + date.getHours() + seperator2 + getMin;
			/******************************************/
			var str = '<div class="repeat_item">' +
			'<div class="rp_touXiang">' +
			'<img src="../img/user_img.gif" alt="" />' +
			'</div>' +
			'<div class="rp_con">' +
			'<div class="rp_from">' +
			'<a class="userName" href="javascript:void(0)">李先生</a>发布' +
			'<span>' + str_con + '</span>' +
			'</div>' +
			'<div class="dc_huiFu">' +
			'<ul class="clearfix_handle">' +
			'<li>' +
			'<span class="line">' +
			'<a onclick="HuiFu(this)" href="javascript:void(0);" class="S_txt1 " >回复</a>' +
			'</span>' +
			'</li>' +
			'<li>' +
			'<span class="line">' +
			'<a onclick="dele_item(this)" href="javascript:void(0)" class="S_txt1">' +
			'<span class="">删除</span>' +
			'</a>' +
			'</span>' +
			'</li>' +
			'</ul>' +
			'<div class="rp_time">' + currentdate + '</div>' +
			'<div class="huiFu_pl">' +
			'<div class="huiFu_push">' +
			'<textarea id="huiFu_in" name="" rows="" cols=""></textarea>' +
			'<div>' +
			'<a class="huiFu_btn" onclick="HuiFu_pl(this)" href="javascript:void(0)">评论</a>' +
			'<div class="clear"></div>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'<div class="list_box_in">'+
			'</div>' +
			'</div>' +
			'</div>';
			$('.msg_content .repeat_list').prepend(str);
			$('#W_input').val('');
			$('#W_input').css('height',Height+'px');
		} else {
			alert('内容不能为空!');
		}
	})
});

//查看结果

function replace_em(str) {

	str = str.replace(/\</g, '&lt;');

	str = str.replace(/\>/g, '&gt;');

	str = str.replace(/\n/g, '<br/>');

	str = str.replace(/\[em_([0-9]*)\]/g, '<img src="arclist/$1.gif" border="0" />');

	return str;

}

/*选择范围（下拉选择）*/
$('#range_sel').click(function() {
	$(this).parents('.func').siblings('.layer_menu_list ').toggleClass('active');
	$('.layer_menu_list ul li').click(function() {
		$(this).parent().parent().removeClass('active');
		var inner = $(this).find('a').html();
		$(this).parents('.layer_menu_list').siblings('.func').find('#range_sel').find('span').html(inner);
	})
	$(document).click(function(e) {
		if($(e.target).closest('#range_sel').length == 0) {
			$('.layer_menu_list').removeClass('active');
		}
	})
})

/*评论输入框显示与隐藏*/
function PingLun(e) {
	$(e).parents('.msg_handle').siblings('.msg_repeat').toggleClass('active');
	$('#p_input').autoHeight();
}

/*评论*/
function send_pl(e) {
	var text_pl = $(e).parent().siblings().val();
	var user = $(e).parents('.repeat_item').find('.rp_from').find('a').html();
	if(text_pl !== '') {
		/*************获取当前时间****************/
		var date = new Date();
		var seperator1 = "-";
		var seperator2 = ":";
		var month = date.getMonth() + 1;
		var strDate = date.getDate();
		var getMin = date.getMinutes();
		if(getMin >= 1 && getMin <= 9) {
			getMin = "0" + getMin;
		}
		if(month >= 1 && month <= 9) {
			month = "0" + month;
		}
		if(strDate >= 0 && strDate <= 9) {
			strDate = "0" + strDate;
		}
		var currentdate = month + '月' + strDate + "日 " + date.getHours() + seperator2 + getMin;
		/******************************************/
		var html = '<div class="repeat_item">' +
			'<div class="rp_touXiang">' +
			'<img src="../img/user_img.gif" alt="" />' +
			'</div>' +
			'<div class="rp_con">' +
			'<div class="rp_from">' +
			'<a href="javascript:void(0)">' + user + '</a>回复' +
			'<a href="javascript:void(0)">' + user + '</a>' +
			'<span>' + text_pl + '</span>' +
			'</div>' +
			'<div class="dc_huiFu">' +
			'<ul class="clearfix_handle">' +
			'<li>' +
			'<span class="line">' +
			'<a onclick="HuiFu(this)" href="javascript:void(0);" class="S_txt1 " >回复</a>' +
			'</span>' +
			'</li>' +
			'<li>' +
			'<span class="line">' +
			'<a onclick="dele_item(this)" href="javascript:void(0)" class="S_txt1">' +
			'<span class="">删除</span>' +
			'</a>' +
			'</span>' +
			'</li>' +
			'</ul>' +
			'<div class="rp_time">' + currentdate + '</div>' +
			'<div class="huiFu_pl">' +
			'<div class="huiFu_push">' +
			'<textarea id="huiFu_in" name="" rows="" cols=""></textarea>' +
			'<div>' +
			'<a class="huiFu_btn" onclick="HuiFu_pl(this)" href="javascript:void(0)">评论</a>' +
			'<div class="clear"></div>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'<div class="list_box_in">'+
			'</div>' +
			'</div>' +
			'</div>';
		$(e).parents('.repeat_input').siblings().prepend(html);
		$(e).parent().siblings().val('');
	} else {
		alert('评论内容不能为空！');
	}
}

/*删除评论的内容*/
function dele_item(e) {
	$(e).parents('.repeat_item').remove();
}
/*底层回复输入框显示与隐藏*/
function HuiFu(e) {
	$(e).parents('.clearfix_handle').siblings('.huiFu_pl').toggleClass('active');
}
/*底层回复*/
function HuiFu_pl(e) {
	var dc_hf = $(e).parent().siblings('#huiFu_in').val();
	var user = $(e).parents('.repeat_item').find('.rp_from').find('a').html();
	if(dc_hf !== '') {
		/*************获取当前时间****************/
		var date = new Date();
		var seperator1 = "-";
		var seperator2 = ":";
		var month = date.getMonth() + 1;
		var strDate = date.getDate();
		var getMin = date.getMinutes();
		if(getMin >= 1 && getMin <= 9) {
			getMin = "0" + getMin;
		}
		if(month >= 1 && month <= 9) {
			month = "0" + month;
		}
		if(strDate >= 0 && strDate <= 9) {
			strDate = "0" + strDate;
		}
		var currentdate = month + '月' + strDate + "日 " + date.getHours() + seperator2 + getMin;
		/******************************************/
		var dom = '<div class="repeat_item">' +
			'<div class="rp_touXiang">' +
			'<img src="../img/user_img.gif" alt="" />' +
			'</div>' +
			'<div class="rp_con">' +
			'<div class="rp_from">' +
			'<a href="javascript:void(0)">' + user + '</a>回复' +
			'<a href="javascript:void(0)">' + user + '</a>' +
			'<span>' + dc_hf + '</span>' +
			'</div>' +
			'<div class="dc_huiFu">' +
			'<ul class="clearfix_handle">' +
			'<li>' +
			'<span class="line">' +
			'<a onclick="HuiFu(this)" href="javascript:void(0);" class="S_txt1 " >回复</a>' +
			'</span>' +
			'</li>' +
			'<li>' +
			'<span class="line">' +
			'<a onclick="dele_item(this)" href="javascript:void(0)" class="S_txt1">' +
			'<span class="">删除</span>' +
			'</a>' +
			'</span>' +
			'</li>' +
			'</ul>' +
			'<div class="rp_time">' + currentdate + '</div>' +
			'<div class="huiFu_pl">' +
			'<div class="huiFu_push">' +
			'<textarea id="huiFu_in" name="" rows="" cols=""></textarea>' +
			'<div>' +
			'<a class="huiFu_btn" onclick="HuiFu_pl(this)" href="javascript:void(0)">评论</a>' +
			'<div class="clear"></div>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'<div class="list_box_in">'+
			'</div>' +
			'</div>' +
			'</div>';
			
		$(e).parents('.repeat_list').prepend(dom);
		$(e).parent().siblings('#huiFu_in').val('');
	} else {
		alert('回复内容不能为空！');
	}
}
/******查看更多*********/
$('#look_more').click(function(){
	$(this).html('加载中...');
	setTimeout("lookMore()",1000);
})
function lookMore(){
	$('#look_more').html('查看更多');
	
}
/*删除主题*/
function theme_delete(e){
	$(e).parents('.msg_item').remove();
}
