function getDate(){
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
    return currentdate;
}
/*顶部发送部分tab切换标签*/
$('.ui-items li').click(function(){
    var index=$(this).index();
    $(this).addClass('sel').siblings().removeClass('sel');
    var left=(index*55.0625);
    console.log(left+13);
    $(this).parent().siblings().animate({ left: (13+left)}, "100" )
})
/*发送列表部分tab切换标签*/
$('.w-tab li').click(function(){
    $(this).addClass('state-active').siblings().removeClass('state-active');
})
/*****显示顶部输入框*****/
$('.ui-content .form-thumb').click(function(){
    $(this).css('display','none');
    $(this).siblings().css('display','block');
    $('.ui-content .close').click(function(){
        $(this).css('display','none');
        $(this).siblings('.input_form').css('display','none');
        $(this).siblings('.form-thumb').css('display','block');
    })
})
/*****发布主题***/
$('#faBu').click(function(){
    var inner=$(this).parents('.input_form').find('.publish-input').val();
    if(inner!==''){
        var html='<div class="list_item">' +
            '       <div class="item_main">' +
            '           <div class="item_top">' +
            '               <div class="item_face">' +
            '                   <a href="javascript:void(0)">' +
            '                       <img src="img/user.png" alt="">' +
            '                   </a>' +
            '               </div>' +
            '               <div class="item_info">' +
            '                   <div class="item_name">' +
            '                       <a href="javascript:void(0)">张三</a>' +
            '                   </div>' +
            '                   <div class="item_time">' +
            '                       <span class="create_time">'+getDate()+'</span>' +
            '                       <span>-</span>' +
            '                       <span>全公司</span>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="clear"></div>' +
            '           </div>' +
            '           <div class="item_detail">' +
            '               <div class="info_content">'+inner+'</div>' +
            '               <div class="item-func">' +
            '                   <div class="handle">' +
            '                       <div class="fl_btn more">' +
            '                           <a href="javascript:void(0)" class="more_icon"></a>' +
            '                       </div>' +
            '                       <div class="fl_btn">' +
            '                           <i class="S_txt3">|</i>' +
            '                           <a href="javascript:void(0);" class="zhuanFa">转发</a>' +
            '                       </div>' +
            '                       <div class="fl_btn">' +
            '                           <i class="S_txt3">|</i>' +
            '                           <a href="javascript:void(0);" class="tiXing">提醒</a>' +
            '                       </div>' +
            '                       <div class="fl_btn">' +
            '                           <i class="S_txt3">|</i>' +
            '                           <a href="javascript:void(0);" class="renWu">任务</a>' +
            '                       </div>' +
            '                       <div class="fl_btn">' +
            '                           <i class="S_txt3">|</i>' +
            '                           <a href="javascript:void(0);" class="shang">赏</a>' +
            '                       </div>' +
            '                       <div class="fl_btn islike">' +
            '                           <i class="S_txt3">|</i>' +
            '                           <a href="javascript:void(0);"><b></b></a>' +
            '                       </div>' +
            '                       <div class="fl_btn select-cur">' +
            '                           <i class="S_txt3">|</i>' +
            '                           <a onclick="show_reply_input(this)" href="javascript:void(0);">回复(<span>2</span>)</a>' +
            '                       </div>' +
            '                   </div>' +
            '               </div>' +
            '           </div>' +
            '       </div>' +
            '       <!-- 底部回复部分 -->' +
            '       <div class="bottom_wrapper">' +
            '           <div class="list_repeat">' +
            '               <div class="reply_header_wrapper">' +
            '                   <div class="input_show_box">' +
            '                       <div class="reply_user_img">' +
            '                           <img src="img/user.png" alt="">' +
            '                       </div>' +
            '                       <div class="box_r">' +
            '                           <div class="input-wrapper">' +
            '                               <fieldset>' +
            '                                   <textarea placeholder="添加回复..."></textarea>' +
            '                               </fieldset>' +
            '                           </div>' +
            '                           <div class="media">' +
            '                               <a href="javascript:void(0)" style="background-position: -151px 2px;"></a>' +
            '                               <a href="javascript:void(0)" style="background-position: -195px 2px;"></a>' +
            '                               <a href="javascript:void(0)" style="background-position: -62px 2px;"></a>' +
            '                               <a href="javascript:void(0)" style="background-position: 1px 2px;"></a>' +
            '                               <a href="javascript:void(0)" style="background-position: -20px 1px;"></a>' +
            '                               <a href="javascript:void(0)" style="background-position: -218px 1px;"></a>' +
            '                           </div>' +
            '                           <div class="f-actions">' +
            '                               <button onclick="reply_content(this)" type="button" class="huiFu">回复</button>' +
            '                               <button onclick="hideInput(this)" type="button" class="quXiao">取消</button>' +
            '                           </div>' +
            '                       </div>' +
            '                   </div>' +
            '                   <div onclick="show_rtr(this)" class="input-box-hidden">' +
            '                       <span>添加回复&nbsp;…</span>' +
            '                   </div>' +
            '                 </div>' +
            '                 <div class="reply_body">' +
            '                     <ul class="reply_list"></ul>' +
            '                 </div>' +
            '             </div>' +
            '         </div>' +
            '     </div>';
        $('.feed-list-inner').prepend(html);
        $(this).parents('.input_form').find('.publish-input').val('');
    }else{
        alert('发布内容不能为空！');
    }
})
/*显示回复输入框*/
function show_reply_input(e){
    $(e).parents('.item_main').siblings().toggleClass('active');
}
/*显示回复后回复输入框*/
function show_rtr(e){
    $(e).css('display','none');
    $(e).siblings().css('display','block');
}
/*隐藏回复后回复输入框*/
function hideInput(e){
    $(e).parents('.input_show_box').css('display','none');
    $(e).parents('.input_show_box').siblings().css('display','block');
}
/*回复后回复*/
function reply_content(e){
    var con=$(e).parent().siblings('.input-wrapper').find('textarea').val();
    if(con!==''){
        var dom='<li class="reply_item">' +
            '       <div class="reply_touXiang">' +
            '           <a href="javascript:void(0)">' +
            '               <img src="img/user.png" alt="">' +
            '           </a>' +
            '       </div>' +
            '       <div class="reply_content_inner">' +
            '           <div class="reply_content_text">' +
            '               <a href="javascript:void(0)">李四</a>' +
            '               <span>' +
            '                   :回复' +
            '                   <a href="javascript:void(0)">张三</a>:' +con+
            '               </span>' +
            '           </div>' +
            '           <div class="reply_time">' +
            '               <span>'+getDate()+'</span>' +
            '                   <span class="reply-btn">' +
            '                   <span title="赞" class="islike-btn">' +
            '                       <b></b>' +
            '                   </span>' +
            '                   <i class="S_txt3">|</i>' +
            '                   <a onclick="show_last_reply(this)" href="javascript:;" class="open-reply-btn">回复</a>' +
            '               </span>' +
            '           </div>' +
            '       </div>' +
            '       <div class="reply-to-reply-wrapper">' +
            '           <div class="input-box">' +
            '               <div class="r-to-r-img">' +
            '                   <img src="img/user.png" alt="">' +
            '               </div>' +
            '               <div class="box_r">' +
            '                   <div class="input-wrapper">' +
            '                       <fieldset>' +
            '                           <textarea placeholder="添加回复..." ></textarea>' +
            '                        </fieldset>' +
            '                   </div>' +
            '                   <div class="media">' +
            '                       <a href="javascript:void(0)" style="background-position: -151px 2px;"></a>' +
            '                       <a href="javascript:void(0)" style="background-position: -195px 2px;"></a>' +
            '                       <a href="javascript:void(0)" style="background-position: -62px 2px;"></a>' +
            '                       <a href="javascript:void(0)" style="background-position: 1px 2px;"></a>' +
            '                       <a href="javascript:void(0)" style="background-position: -20px 1px;"></a>' +
            '                       <a href="javascript:void(0)" style="background-position: -218px 1px;"></a>' +
            '                   </div>' +
            '                   <div class="f-actions">' +
            '                       <button onclick="last_reply(this)" type="button" class="huiFu">回复</button>' +
            '                       <button onclick="hideThis(this)" type="button" class="quXiao">取消</button>' +
            '                   </div>' +
            '               </div>' +
            '           </div>' +
            '       </div>' +
            '   </li>';
        $(e).parents('.reply_header_wrapper').siblings('.reply_body').find('.reply_list').prepend(dom);
        $(e).parent().siblings('.input-wrapper').find('textarea').val('');
    }else{
        alert('回复内容不能为空！');
    }
}
function show_last_reply(e){
    $(e).parents('.reply_content_inner').siblings('.reply-to-reply-wrapper').addClass('active');
}
function hideThis(e){
    $(e).parents('.reply-to-reply-wrapper').removeClass('active');
}
function last_reply(e){
    var value=$(e).parent().siblings('.input-wrapper').find('textarea').val();
    if(value!==''){
        var str='<li class="reply_item">' +
            '       <div class="reply_touXiang">' +
            '           <a href="javascript:void(0)">' +
            '               <img src="img/user.png" alt="">' +
            '           </a>' +
            '       </div>' +
            '       <div class="reply_content_inner">' +
            '           <div class="reply_content_text">' +
            '               <a href="javascript:void(0)">李四</a>' +
            '               <span>' +
            '                   :回复' +
            '                   <a href="javascript:void(0)">张三</a>:' +value+
            '               </span>' +
            '           </div>' +
            '           <div class="reply_time">' +
            '               <span>'+getDate()+'</span>' +
            '               <span class="reply-btn">' +
            '                   <a onclick="delete_last_reply(this)" href="javascript:;" class="open-reply-btn">删除</a>' +
            '                   <i class="S_txt3">|</i>' +
            '                   <span title="赞" class="islike-btn">' +
            '                       <b></b>' +
            '                   </span>' +
            '                   <i class="S_txt3">|</i>' +
            '                   <a onclick="show_last_reply(this)" href="javascript:;" class="open-reply-btn">回复</a>' +
            '               </span>' +

            '           </div>' +
            '       </div>' +
            '       <div class="reply-to-reply-wrapper">' +
            '           <div class="input-box">' +
            '               <div class="r-to-r-img">' +
            '                   <img src="img/user.png" alt="">' +
            '               </div>' +
            '               <div class="box_r">' +
            '                   <div class="input-wrapper">' +
            '                       <fieldset>' +
            '                           <textarea placeholder="添加回复..." ></textarea>' +
            '                        </fieldset>' +
            '                   </div>' +
            '                   <div class="media">' +
            '                       <a href="javascript:void(0)" style="background-position: -151px 2px;"></a>' +
            '                       <a href="javascript:void(0)" style="background-position: -195px 2px;"></a>' +
            '                       <a href="javascript:void(0)" style="background-position: -62px 2px;"></a>' +
            '                       <a href="javascript:void(0)" style="background-position: 1px 2px;"></a>' +
            '                       <a href="javascript:void(0)" style="background-position: -20px 1px;"></a>' +
            '                       <a href="javascript:void(0)" style="background-position: -218px 1px;"></a>' +
            '                   </div>' +
            '                   <div class="f-actions">' +
            '                       <button onclick="last_reply(this)" type="button" class="huiFu">回复</button>' +
            '                       <button onclick="hideThis(this)" type="button" class="quXiao">取消</button>' +
            '                   </div>' +
            '               </div>' +
            '           </div>' +
            '       </div>' +
            '   </li>';
        $(e).parents('.reply_list').prepend(str);
        $(e).parent().siblings('.input-wrapper').find('textarea').val('');
    }else{
        alert('请填写回复内容！');
    }
}
/*筛选*/
$('.btn-filter').click(function(){
    $(this).parent().siblings().toggleClass('active');
})
/*筛选条件（时间）*/
$('.date_select a').click(function(){
    $(this).siblings().toggleClass('active');
})
$('.date_select .select_box ul li').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    var inner=$(this).find('.name').html();
    $(this).parent().parent().siblings().html(inner);
    $(this).parent().parent().removeClass('active');
})
$('.mn-select-box a').click(function(){
    $(this).siblings().toggleClass('active');
})
$('.mn-select-box .select_box ul li').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    var inner=$(this).find('.name').html();
    $(this).parent().parent().siblings().html(inner);
    $(this).parent().parent().removeClass('active');
})
/*添加发送范围*/
$('.select_wrapper').click(function(){
    $(this).find('.dialog-wrapper').addClass('active');
})
$(document).click(function(e){
    if($(e.target).closest('.select_wrapper').length==0){
        $('.dialog-wrapper').removeClass('active');
    }
})

$('.select_wrapper .range-tab-title li').click(function(){
    var index=$(this).index();
    $(this).addClass('state-active').siblings().removeClass('state-active');
    $('.tab_con_wrapper>div:eq('+index+')').addClass('active').siblings().removeClass('active');
})

/*删除回复的回复*/
function delete_last_reply(e){
    $(e).parents('.reply_item').remove();
}


$(function(){
    var scrollTop2 = 0;
    if (document.documentElement && document.documentElement.scrollTop)	{
        scrollTop2 = document.documentElement.scrollTop;
    }else if (document.body) {
        scrollTop2 = document.body.scrollTop;
    }





    $(window).scroll(function(){
        if($('.target_menu').attr('IsClick')=="1"){
            return false;
        }
        var divs=$('.feed-list-inner>.list_item');
        for(var i=0;i<divs.length;i++){
            if($(this).scrollTop()>=$(divs[i]).offset().top&&$(this).scrollTop()<=$(divs[i]).offset().top+$(divs[i]).height()){
                var id=$(divs[i]).attr('id');
                $('a[href="#'+id+'"]').parent().addClass('active');
                $('a[href="#'+id+'"]').parent().siblings().removeClass('active');
            }
        }
    });
    /*左侧时间轴关联内容*/
    $('.target_menu dl dd.target_item2').click(function(){
        $('.target_menu dl dd.target_item2').removeClass('active');
        $('.target_menu').attr('IsClick','1');
        $(this).addClass('active');
        var href=$(this).find('a').attr('href');
        var Height=$(href).offset().top;
        $("html,body").animate({scrollTop: Height}, "fast",function(){
            $('.target_menu').attr('IsClick','0');
        });
    })
    $('#popup').popup({
        ifDrag: true,
        dragLimit: true
    });

    $.datetimepicker.setLocale('ch');
    $('#datetimepicker').datetimepicker({
        inline:true
    });
})