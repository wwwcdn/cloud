var sina={$:function(objName){if(document.getElementById){return eval('document.getElementById("'+objName+'")')}else{return eval('document.all.'+objName)}},isIE:navigator.appVersion.indexOf("MSIE")!=-1?true:false,addEvent:function(l,i,I){if(l.attachEvent){l.attachEvent("on"+i,I)}else{l.addEventListener(i,I,false)}},delEvent:function(l,i,I){if(l.detachEvent){l.detachEvent("on"+i,I)}else{l.removeEventListener(i,I,false)}},readCookie:function(O){var o="",l=O+"=";if(document.cookie.length>0){var i=document.cookie.indexOf(l);if(i!=-1){i+=l.length;var I=document.cookie.indexOf(";",i);if(I==-1)I=document.cookie.length;o=document.cookie.substring(i,I)}};return o},writeCookie:function(i,l,o,c){var O="",I="";if(o!=null){O=new Date((new Date).getTime()+o*3600000);O="; expires="+O.toGMTString()};if(c!=null){I=";domain="+c};document.cookie=i+"="+escape(l)+O+I},readStyle:function(I,l){if(I.style[l]){return I.style[l]}else if(I.currentStyle){return I.currentStyle[l]}else if(document.defaultView&&document.defaultView.getComputedStyle){var i=document.defaultView.getComputedStyle(I,null);return i.getPropertyValue(l)}else{return null}},absPosition:function(o,I){var l=o.offsetLeft,O=o.offsetTop,i=o.offsetParent,c="";try{while(i.id!=document.body&&i.id!=document.documentElement&&i!=I&&i!=null){c+=i.tagName+" , ";i=i.offsetParent;l+=i.offsetLeft;O+=i.offsetTop}}catch(e){};return{left:l,top:O}},cutString:function(I,o){if(typeof(I)!="string"){return null};if(!(/^[0-9]*[1-9][0-9]*$/).test(o)){return I};if(o==0){return I};var l=0,i="";for(var O=0;O<I.length;O++){if(I.charCodeAt(O)>255){l+=2}else{l++};if(l<=o-2){i+=I.charAt(O)}else{if(O==I.length-1){i+=I.charAt(O)}else{i+=".."};break}};return i}};
//ģ��Select mengjia 081105
function DivSelect(o,I){var c=this;c.id=o;c.divId=I;c.selectObj=sina.$(c.id);if(!c.selectObj){return};var l=c;c.status="close";c.parentObj=c.selectObj.parentNode;while(sina.readStyle(c.parentObj,"display")!="block"){if(c.parentObj.parentNode){c.parentObj=c.parentObj.parentNode}else{break}};c.parentObj.style.position="relative";c.selectObjWidth=c.selectObj.offsetWidth;c.selectObjHeight=c.selectObj.offsetHeight;c.selectPosition=sina.absPosition(c.selectObj,c.parentObj);c.selectObj.style.visibility="hidden";c.divObj=document.createElement("div");c.divObj.id=c.divId;c.parentObj.appendChild(c.divObj);c.divObj.style.width=c.selectObjWidth+"px";c.divObj.style.position="absolute";c.divObj.style.left=c.selectPosition.left+"px";c.divObj.style.top=c.selectPosition.top+"px";c.divObj.onclick=function(){l.click()};c.divObj_count=document.createElement("div");c.divObj.appendChild(c.divObj_count);c.divObj_count.className="ds_cont";c.divObj_title=document.createElement("div");c.divObj_count.appendChild(c.divObj_title);c.divObj_title.className="ds_title";c.divObj_button=document.createElement("div");c.divObj_count.appendChild(c.divObj_button);c.divObj_button.className="ds_button";c.divObj_list=document.createElement("div");c.divObj.appendChild(c.divObj_list);c.divObj_list.className="ds_list";c.divObj_list.style.display="none";c.list=[];var i;for(var O=0;O<c.selectObj.options.length;O++){i=document.createElement("p");c.list.push(i);c.divObj_list.appendChild(i);i.innerHTML=c.selectObj.options[O].innerHTML;if(c.selectObj.selectedIndex==O){c.divObj_title.innerHTML=i.innerHTML};i.onmouseover=function(){this.className="selected"};i.onmouseout=function(){this.className=""};i.onclick=function(){l.select(this.innerHTML)}};c.select=function(i){var l=this;for(var I=0;I<l.selectObj.options.length;I++){if(l.selectObj.options[I].innerHTML==i){l.selectObj.selectedIndex=I;l.divObj_title.innerHTML=i;break}}};c.clickClose=function(I){var i=I.target?I.target:event.srcElement;do{if(i==l.divObj){return};if(i.tagName=="BODY"){break};i=i.parentNode}while(i.parentNode);l.close()};c.open=function(){var i=this;i.divObj_list.style.display="block";i.status="open";sina.addEvent(document,"click",i.clickClose)};c.close=function(){var i=this;i.divObj_list.style.display="none";i.status="close";sina.delEvent(document,"click",i.clickClose)};c.click=function(){var i=this;if(i.status=="open"){i.close()}else{i.open()}}};
var s_select_01 = new DivSelect("searchType","s_select_01");