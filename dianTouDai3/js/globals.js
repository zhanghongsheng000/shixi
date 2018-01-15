//ajax请求，后端的类/对象
var global_ajaxObject = {
	newsList: "news/newsList", //获取新闻列表
	newsDetail: "news/newsDetail", //获取新闻详情
	banners: "index/banners", //获取轮播图
	platformInfo: "index/platformInfo", //获取平台信息
	investProjList: "product/investProjList", //投资列表
	investProjDetail: "product/investProjDetail", //投资项目详情
	investProjDetailAdvanced: "product/investProjDetailAdvanced", //投资项目详情(高级)
	login: "user/login", //登陆
	UserInfo: "user/userDetail", //获取用户信息
	register: "user/register", //注册
	verifyPerson: "user/verifyPerson", //实名认证
	getProvince: "user/getProvince", //获取省份
	getCity: "user/getCity", //获取市区
	letterList: "user/letterList", //站内信列表
	invest: "product/invest", //投资
	myInvestProjList: "user/myInvestProjList", //我的投资项目列表
	transactionList: "user/transactionList", //交易明细列表
	showBankCard: "user/showBankCard", //银行卡
	withdrawal: "user/withdrawal", //提现申请
	recharge: "user/recharge", //充值验证
	payAction: "fuiou/payAction", //充值
	moreList:"index/more",//更多
	nextMenu:"index/nextMenu",//更多下一级
	autoInvestInfo:"user/autoInvestInfo",//获取自动投标数据
	autoInvestOpenClose:"user/autoInvestOpenClose",//关闭自动投标
	autoInvestSetting:"user/autoInvestSetting",//自动投标设置
	addFinance:"user/addFinance",//借款
	redpackage:"user/redpackage",//红包
	explain:"news/explain",//配置文字说明
	agreement:"index/agreement",//服务协议
	checkPhone:"user/checkPhone",//找回密码第一步
	checkPhoneCode:"user/checkPhoneCode",//找回密码第二步
	forgetPassword:"user/forgetPassword",//最后修改密码
	sendPhoneCode:"/sendPhoneCode",//注册的短信验证码
	changeUserPwd:"user/changeUserPwd"//修改密码
};

//var ApiUrl = "http://139.129.230.14:1102/"; //接口地址
//var ImgUrl = "http://139.129.230.14:1102"; //图片地址
//var ApiUrl = "http://shop.woyaojiemeng.com:88/"; //接口地址
/*测试地址*/
//var ApiUrl = "http://139.129.230.14:820/appInterface/"; //接口地址
//var ImgUrl = "http://139.129.230.14:820"; //图片地址
/*正式地址*/
var ApiUrl = "http://www.nmgdiantoudai.com/appInterface/"; //接口地址
var ImgUrl = "http://www.nmgdiantoudai.com"; //图片地址
var global_localStorage = {
	UserName: "loc_UserName", //用户名
	UserId: "loc_UserId", //用户编号
	NewsTypeId: "loc_NewsTypeId", //新闻类型编号
	NewsTypeName: "loc_NewsTypeName", //新闻类型名称
	NewsItemId: "loc_NewsItemId", //单个新闻编号
	BidItemId: "loc_BidItemId", //单个标编号
	RechargeMoney: "loc_RechargeMoney", //充值金额
	IsSignPassword: "loc_IsSignPassword", //是否启动手势
	SignPassword: "loc_SignPassword", //手势密码
};

//字符串
var global_stringObject = {
	servicePhone: "4008637377",
	serviceTelephone: "4008637377"
};

//验证手机号
function checkPhone(Iphone) {
	var phone = Iphone;
	if(!(/^1[34578]\d{9}$/.test(phone))) {
		//alert("手机号码有误，请重填");  
		return false;
	}
}
/*
 * 退出账户
 */
function util_logOut() {

	localStorage.removeItem(global_localStorage.UserId);
	localStorage.removeItem(global_localStorage.UserName);

	mui.openWindow({
		id: "login.html",
		url: "login.html",
		show: {
			aniShow: "slide-in-bottom"
		},
		waiting: {
			autoShow: false
		}
	});
}

//判断图片是否存在  
function CheckImgExists(imgurl) {
	//	var ImgObj = new Image(); //判断图片是否存在  
	//	ImgObj.src = imgurl;
	//	//没有图片，则返回-1  
	//	if(ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {
	//		return true;
	//	} else {
	//		return false;
	//	}
	var xmlHttp;
	if(window.ActiveXObject) {
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	} else if(window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	}
	xmlHttp.open("Get", imgurl, false);
	xmlHttp.send();
	if(xmlHttp.status == 404)
		return false;
	else
		return true;
}