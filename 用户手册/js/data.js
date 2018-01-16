//var menu = '{"data": [{"name": "学生信息管理","img": "images/menu01.png","source": [{"name": "测试"},{"name": "照片采集补录","img": "images/menu02.png","source": [{"name": "测试"},{"name": "数据导出管理","img": "images/menu03.png","source": [{"name": "测试"}]}]}';
//
//var menu = {
//	yingyong: {
//		name: "应用程序",
//		content: '<p>新华社BS管理软件。</p><img src="images/mangage.png" /><p>图像采集程序分为外拍采集客户端和门店采集客户端。</p><img src="images/mangage.png" />'
//	}
//}

var menu = [
{
	url: "quanxian",
	name: "权限管理",
	content: '<p>支持多个角色的设置，分配系统的多种操作权限。维护系统和数据安全。</p><img src="images/mangage.png" /><p>各个角色的权限设置</p><img src="images/mangage1.png" />'
},{
	url: "yingyong",
	name: "应用程序",
	content: '<p>新华社BS管理软件。</p><img src="images/glrj.png" /><p>图像采集程序分为外拍采集客户端和门店采集客户端。</p><img src="images/cjxt1.png" />'
}, {
	url: "xueshengxinxidaoru",
	name: "学生信息导入",
	content: '<p>将需要进行图像信息采集的学生信息批量录入系统。</p><img src="images/d1.png" />'
}, {
	url: "xueshengxinxichaxun",
	name: "学生信息查询",
	content: '<p>查询在系统中的学生信息，支持身份证，学号，院校代码，学生姓名四种方式</p><img src="images/d2.png" />'
}, {
	url: "xueshengxinxibianji",
	name: "学生信息编辑",
	content: '<p>修改学生中的各项信息。</p><img src="images/d3.png" />'
}, {
	url: "xueshengxinxiluru",
	name: "学生信息录入",
	content: '<p>添加单个学生信息和照片。</p><img src="images/d4.png" />'
}, {
	url: "xueshengxuehaobulu",
	name: "学生学号补录",
	content: '<p>通过Excel文档，将一个班级甚至整个学校学生的学号批量补全。</p><img src="images/d5.png" />'
}, {
	url: "kuaididanhaobulu",
	name: "快递单号补录",
	content: '<p>通过Excel文档，将给学生发送照片的快递单号批量补全。</p><img src="images/d6.png" />'
}, {
	url: "zhaopianruku",
	name: "照片入库",
	content: '<p>选择Excel文档，选择对应的学生照片压缩包，点击导入。学生照片会自动核对数据库中学生信息，添加到对应的照片位置。</p><img src="images/r1.png" />'
}, {
	url: "zhaopianshenhe",
	name: "照片审核",
	content: '<p>对于任何申请上传进入数据库的照片数据，都要进行数据管理员的审核操作，才能正式入库。</p><img src="images/r2.png" /><p>审核通过则照片直接进入系统数据库，照片有问题可以店家审核拒绝，并在审核意见中备注拒绝原因，方便上传人员修改。</p><img src="images/r3.png" />'
}, {
	url: "zhaopiantihuan",
	name: "照片替换",
	content: '<p>支持单个学生的照片替换。替换的照片直接进入数据库中。</p><img src="images/r4.png" />'
}, {
	url: "shangbaopici",
	name: "上报批次",
	content: '<p>用来记录上报给教育部的学生照片的信息。防止同批次重复上报。</p><img src="images/h1.png" />'
}, {
	url: "shangchuanjiaoyubu",
	name: "上传教育部",
	content: '<p>将照片打包导出，上传教育部备案，每张照片都会有状态显示是否已经上报过。如果已经上报过的照片，不能导出，防止重复上报。</p><img src="images/h2.png" />'
}, {
	url: "yuanxiaodaochu",
	name: "院校导出",
	content: '<p>通过搜索身份证、院校代码、学号、学生姓名来导出学生照片，有可以通过Excel文档导出文档中对应学生的照片。</p><img src="images/h6.png" /><img src="images/h3.png" /><img src="images/h4.png" />'
}, {
	url: "paishejiludaochu",
	name: "拍摄记录导出",
	content: '<p>记录和显示学生图像信息采集的时间，方便学生查询何时拍摄的照片。支持批量导出数据。</p><img src="images/h5.png" />'
}, {
	url: "xuexiaoxinxi",
	name: "学校信息",
	content: '<p>收录全国各大院校的院校代码，对应的学校名称，方便设置各种学校的照片输出要求。</p><img src="images/x1.jpg" /><img src="images/x2.jpg" />'
}]

function getMsg(value) {
	for(var i = 0; i < menu.length; i++) {
		var Item = menu[i];
		if(Item.url == value) {
			return Item;
		}
	}
}

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}