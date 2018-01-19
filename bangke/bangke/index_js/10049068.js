















if(typeof doyoo=='undefined' || !doyoo){
var d_genId=function(){
var id ='',ids='0123456789abcdef';
for(var i=0;i<34;i++){ id+=ids.charAt(Math.floor(Math.random()*16)); } return id;
};

var doyoo={
env:{
secure:true,
mon:'https://m8101.talk99.cn/monitor',
chat:'https://chat7622.talk99.cn/chat',
file:'https://yun-static.soperson.com/131221',
compId:20000566,
confId:10049068,
workDomain:'',
vId:d_genId(),
lang:'',
fixFlash:0,
fixMobileScale:0,
subComp:0,
_mark:'f1c744ffdc95edd91d9e8e90698d4eac50f6e3efcc4e964e1d53dd441c7333b07420d93743a43648'
},
chat:{
mobileColor:'',
mobileHeight:80,
mobileChatHintBottom:0,
mobileChatHintMode:0,
mobileChatHintColor:'',
mobileChatHintSize:0
}

, monParam:{
index:1,
preferConfig:0,

title:'',
text:'',
auto:-1,
group:'10053644',
start:'00:00',
end:'24:00',
mask:false,
status:true,
fx:0,
mini:1,
pos:0,
offShow:1,
loop:0,
autoHide:0,
hidePanel:0,
miniStyle:'#0680b2',
miniWidth:'340',
miniHeight:'490',
showPhone:0,
monHideStatus:[0,0,0],
monShowOnly:'',
autoDirectChat:-1,
allowMobileDirect:0,
minBallon:1,
chatFollow:1,
backCloseChat:0
}




,sniffer:{
ids:'\u5ba2\u670d',
gids:'10053644'
}

};

if(typeof talk99Init == 'function'){
talk99Init(doyoo);
}
if(!document.getElementById('doyoo_panel')){
var supportJquery=typeof jQuery!='undefined';
var doyooWrite=function(html){
document.writeln(html);
}

doyooWrite('<div id="doyoo_panel"></div>');


doyooWrite('<div id="doyoo_monitor"></div>');


doyooWrite('<div id="talk99_message"></div>')

doyooWrite('<div id="doyoo_share" style="display:none;"></div>');
doyooWrite('<lin'+'k rel="stylesheet" type="text/css" href="https://yun-static.soperson.com/131221/oms.css?171107"></li'+'nk>');
doyooWrite('<scr'+'ipt type="text/javascript" src="https://yun-static.soperson.com/131221/oms.js?171117" charset="utf-8"></scr'+'ipt>');
}
}
