$(".boxa_left_nav").load("My_Center.html",function(){
	$(".my_center_box_left a").click(function(){
	
  $(".my_center_box_left a").removeClass("my_center_nav_hover");
  $(this).addClass("my_center_nav_hover");
  var index = $(this).index();
  switch(index)
  {
    case 0:
    $(".my_center_box_right").load("enroll.html");
    break;

    case 1:
    $(".my_center_box_right").load("forgetpassword.html");
    break;
  }
});
});




