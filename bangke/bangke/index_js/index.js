
$(".classa_a").css("background","#2b6e8f");//左侧公告咨询
// $(".classa_a>div").css("opacity","1");
$(".niti_right_title>div:first").addClass("borde_bot_169");
$(".bk_noti_l ul li").hover(function(){
  $(".bk_noti_l ul li").css("background","none");
  $(".nk_boti_list_class").removeClass("nk_boti_list_class_hover");
  $(this).css("background","#2b6e8f");
  $(this).find('.nk_boti_list_class').addClass("nk_boti_list_class_hover");
});

$(".niti_right_title>div").hover(function(){//右侧发标预告
  var index_ = $(this).index();
  $(".niti_right_title>div").removeClass("borde_bot_169");
  $(this).addClass("borde_bot_169");
  if(index_ == '0'){
    $(".bk_fabiao").fadeIn();
    $(".bk_touzi").fadeOut();
  }else{
    $(".bk_fabiao").fadeOut();
    $(".bk_touzi").fadeIn();
  }
});

//链接到页面
$("#bk_head").load('head.html');
$("#bk_foot").load('foot.html');
$("#bk_head_in").load('head_inside.html');
$("#bk_head_ina").load('head_inside.html');

$(".closehd").click(function () {//右下角红包图标点击变小
  $(this).hide();
      $('.bk_foot_redbag a').animate({
        width:'80px',
        height:'100px'
      });
})

$(".bk_refund").click(function(){//点击展开ul元素并添加经过样式
  $(this).addClass("border_poolblue");
  $(".bk_refund_list").animate({"height":"90px"});
  $(".bk_refund_list").addClass("border_poolblue");
});
$(".bk_refund_list li").click(function(){
  var index = $(this).index();//获取当前下标
  var aa = $(".bk_refund_list li");//获取元素的li标签
  var bb = aa.eq(index).text();//给获取下标赋值内容
  $(".bk_refund").text(bb);//给元素赋值
  $(".bk_refund_list").animate({"height":"0",});
  $(".bk_refund").removeClass("border_poolblue");
  $(".bk_refund_list").removeClass("border_poolblue");
});

$('.bk_go_top').bind('click', function() {//返回顶部
      $("html, body").animate({
          scrollTop: 0
      }, 500);
  });

  $(".bk_debark_pc_click").click(function(){//点击返回帐号密码登录
    $(".bk_debark_click1").animate({
      width:'468px'
    });
    $(".bk_debark_click2").animate({
      width:'0'
    });
  });
  $(".bk_debark_cut_weixin").click(function(){//点击返回扫码登录
    $(".bk_debark_click1").animate({
      width:'0'
    });
    $(".bk_debark_click2").animate({
      width:'468px'
    });
  });
  $(".bk_landing").click(function(){
      var user_name = $(".user_name").val();
      console.log(user_name);
      if(user_name == ""){
        $(".bk_debark_slip p ").text("用户名不能为空！");
      }else{
        alert(111);
      }
  });
  $(".bk_input_choice").click(function(){//用户注册帐号信息协议同意
    var check = $(this).attr("data-check");
    if(check == 'true'){
      $(this).attr('data-check','false').removeClass("bk_input_choice_ico");
      $('.bk_enroll_next').attr('disabled',"true");
    }else{
      $(this).attr('data-check','true').addClass("bk_input_choice_ico");
      $('.bk_enroll_next').removeAttr("disabled");
    }
  });
  $(".bk_enroll_next").click(function(){

  });
  function dianji(){//开户成功倒计时方法 在提示开户成功后执行
    var numa = $(".info_win_b span").text()
  var num = $(".info_win_b span").text();
  name = setInterval(function() {
        $(".info_win_b span").html(num);// 你倒计时显示的地方元素
          num--;
       if(num==0){
        clearInterval(name);
        self.location='http://www.jb51.net/article/25403.htm';
      }
  }, 1000);
}
$(".info_win_b").click(function(){//测试倒计时方法
  dianji();
});

function xiayibu(){//注册点击下一步上方进度更改
  $(".top_a").removeClass("title_top1")
  $(".top_a").addClass("title_top3");
  $(".top_c").addClass("title_top1");
}
function kaitong_next(){//开通存管下一步上方进度更改
  $(".top_c").removeClass("title_top1");
  $(".top_e").addClass("title_top1");
}
$(".continue").click(function(){//注册点击下一步
    //$(".bk_erroll_account_info").animate({width:'0px'});
    $(".bk_erroll_account_info_two_box").animate({width:'1070px'});
    xiayibu();
});
$(".dredge_nra").click(function(){
  //$(".bk_erroll_account_info_two").animate({width:'0px'});
  $(".bk_erroll_account_info_three").animate({width:'1070px'});
  kaitong_next();
  dianji();
});

function forget_xiayibu(){//忘记密码身份验证第一步上方进度方法
  $(".word_titlea").removeClass("password_titlea");
  $(".word_titlea").addClass("password_titleb");
  $(".word_titleb").addClass("password_titlea");
}
function forget_save(){//忘记密码身份验证第二步上方进度方法
  $(".word_titleb").removeClass("password_titlea");
  $(".word_titleb").addClass("password_titleb");
  $(".word_titlec").addClass("password_titlea");
}
$(".forget_xiayibu").click(function(){//忘记密码点击下一步执行
  $(".forget_form_boxb").animate({
    height:'360px'
  },1000,function(){//动画执行完在执行方法
    forget_xiayibu();
  });

});
$(".forget_save").click(function(){//忘记密码点击第二部执行
  $(".forget_form_boxc").animate({
    height:'360px'
  },1000,function(){//动画执行完在执行方法
    forget_save();
  });
});
