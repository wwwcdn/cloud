$(function(){
	$widthwindow = $(window).width();
	if($widthwindow < 350){	$("#zjgx .zjgxjj").fadeOut(500);}
	if($("#xinxi").width()-$("#xinxi .xx ul li").width() <110){$("#xinxi .xx ul li").width($("#xinxi").width()-110)}
	$("#zjlb .spage").click(function(){$("#zjlb .showpage").show(300);	$("#spagebg").css("opacity","0.7").fadeIn(500).height($("body").height());	});
	$("#spagebg").click(function(){$(this).fadeOut(700);$("#zjlb .showpage").hide(300);});
	$tjImgHight = $("#tj img").width();
	$("#tj img").height($tjImgHight*1.25);
});
$(function(){
	$("#header .you .search").click(function(){$("#search").slideToggle();	});
	$("#type").click(function(){if($("#type").text() == "����"){$(this).shtml("����");$("#searchType").val("author");}else{	$(this).shtml("����");$("#searchType").val("articlename");}	});
	$("#formsearch").submit(function(){if($("#s_key").val() == "����������" || !$("#s_key").val()){alert("�����������ʣ�");return false;}});
})
$(function(){
	var b = "20px";var m = "16px"; var s = "12px";
	if($.cookie("fontSise")){font($.cookie("type"),$.cookie("fontSise"));}
	if($.cookie("light")){light($.cookie("light"));}	
	$("#b").click(function(){font("#b",b);});
	$("#m").click(function(){font("#m",m);});
	$("#s").click(function(){font("#s",s);});
	$("#light").click(function(){if($("#light").html() == "�ص�"){light("off")}else{light("on");}});
});
function font(type,fontSize){
	$(type).addClass("fc").siblings().removeClass("fc");
	$.cookie("type",type,{path:'/',expires:365});
	$.cookie("fontSise",fontSize,{path:'/',expires:365});
	$("#nr").css("font-size",fontSize);
}
function light(type){
	if(type == "off"){$("#zj #light").html("����");$("#zj").addClass("gd");$("#zj .dise").removeClass("dise").removeClass("header").addClass("gddise").addClass("tmpc");$.cookie("light","off",{path:'/',expires:365});}
	else{$("#zj #light").html("�ص�");$("#zj").removeClass("gd");$("#zj .tmpc").removeClass("gddise").addClass("dise");$("header").addClass("header");$.cookie("light","on",{path:'/',expires:365});}
}
function zuoyoufy(url){
	window.location.href = url;
}
document.writeln("<script src='\/\/cssjs.lisawuwa.com\/m\/js\/ajax.js'><\/script>");
function login(){//������¼
	uname = document.getElementById("username").value;
	upass = document.getElementById("userpass").value;
	_17mb_code = document.getElementById("_17mb_code").value;
	_17mb_login_save = document.getElementById("login_save").checked;
    doAjax("/login_go.php", "chname=" + uname + "&chpass=" + upass + "&_17mb_code=" + _17mb_code + "&_17mb_login_save=" + _17mb_login_save, "go_login", "POST", 0);
}
function go_login(t){
	t = t.replace(/\s/g,'');
	logintips = document.getElementById("logintips");
	if(t == "nocode"){
		logintips.innerHTML = "��������֤��";
		reloadcode();
	}
	if(t == "err_code"){
		logintips.innerHTML = "��֤�����";
		reloadcode();
	}
	if(t == "nodata" ){
		logintips.innerHTML = "�������ʺź�����";
		reloadcode();
	}
	if(t == "nologin" ){
		logintips.innerHTML = "�ʺŻ�������󣬵�¼ʧ��";
		reloadcode();
	}
	if(t == "yeslogin" ){
		doAjax("/ajax.php", "is_login=1", "is_login", "GET", 0);
	}
}

function is_login(t){
	var t = t.replace(/\s/g,'');
	if(t == "right"){
		document.getElementById("logintips").innerHTML = "��¼�ɹ���";
		var urlarray= new Array(); //����һ����
		urlarray = document.URL.split("?url="); //�ַ��ָ�
		url = urlarray[1]; 
		if(url){
			url = url.replace(/\%2F/g,"/");
			url = url.replace(/\%3A/g,":");
			url = url.replace(/\%23/g,"");
			url = url.replace(/\%3F/g,"?");
			url = url.replace(/\%3D/g,"=");
			url = url.replace(/\%26/g,"&");
			window.location.href = url;	
		}
		else{
			window.location.href = "/";	
		}
	}
	else{
		document.getElementById("logintips").innerHTML = "�ʺŻ�������󣬵�¼ʧ�ܣ�";	
	}
}

function register(){
	uname = document.getElementById("regname").value;
	upass = document.getElementById("regpass").value;
	uemail = document.getElementById("regemail").value;
	_17mb_code = document.getElementById("_17mb_code").value;
	doAjax("/register_go.php", "uname=" + uname + "&upass=" + upass + "&uemail=" + uemail + "&_17mb_code=" + _17mb_code, "go_register", "POST", 0);
}
function go_register(t){
	var t = t.replace(/\s/g,'');
	var tips = document.getElementById("logintips");
	if(t == "nocode"){
		tips.innerHTML = "��������֤��";
	}
	if(t == "err_code"){
		tips.innerHTML = "��֤�����";
	}
	if(t == "nodata"){
		tips.innerHTML = "������Ϣ����������";	
	}
	if(t == "bigname"){
		tips.innerHTML = "�û���̫����10�����ʻ���30��Ӣ�����ڣ�";	
	}	
	if(t == "bigpass"){
		tips.innerHTML = "����̫����16λ���ڣ�";	
	}	
	if(t == "bigemail"){
		tips.innerHTML = "����̫����";	
	}	
	if(t == "emailerror"){
		tips.innerHTML = "�����ʽ����";	
	}
	if(t == "havename"){
		tips.innerHTML = "�û����ѱ�ע�ᣡ";	
	}
	if(t == "haveemial"){
		tips.innerHTML = "�����ѱ�ע�ᣡ";	
	}
	if(t == "yesregister"){
		tips.innerHTML = "ע��ɹ����Ѿ���¼��";
		window.location.href = "/";	
	}		
}

function shuqian(aid,cid,urlchapter){
	//alert("shuqian");	
	doAjax("/ajax.php", "addmark=1&urlchapter="+urlchapter+"&aid=" + aid + "&cid=" + cid, "shuqian2", "GET", 0);
}
function shuqian2(t){
	var t = t.replace(/\s/g,'');
	//alert(t);
	var a = t.split("|");
	if(a[0]==1){
		$("#shuqian").shtml("<span class=red>�Ѵ���ǩ</span>");
	}
	if(a[0]==0){
		window.location.href = "/login.php?url="+a[1];
	}
}
function addbookcase(urlinfo,aid){
	$.get('/ajax.php',{'addbookcase':'1','urlinfo':urlinfo,'aid':aid},
		function(data){
			data=data.replace(/\s/g,'');data=data.split("|");
			if(data[0]==1){
				$('.sj').animate({left:"-5px"},20).animate({left:"10px"},20).animate({left:"-10px"},20).animate({left:"0px"},20).shtml('�ɹ��������');
			}
			else{
				window.location.href = "/login.php?url="+data[1];
			}
		});
}
function case_del(aid){
	$.post("/ajax.php",{"aid":aid,"case_del":"1"},function(data){
		$("#"+aid).shtml("<tr><td class='del1'>ɾ���У����Ժ�...</td></tr>");if(data != ""){
			$("#"+aid).shtml("<tr><td class='del1'>�Ѵ����ɾ����</td></tr>");
		}
	});
}

//��濪ʼ
function _17mb_top(){//�������
	document.writeln("");
}

function _17mb_middle(){//�м���
	document.writeln("");
}

function _17mb_bottom(){//�׶˹��
	document.writeln("");
}
function _17mb_tj(){//ͳ�ƴ���
	//baidu tj
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?fca0265a475f9219a1db2d7ee8e9bf2f";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


//baidu zz
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
}