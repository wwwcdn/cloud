document.writeln("<table  cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">");
document.writeln("  <tbody>");
document.writeln("  <tr>");
document.writeln("  <td style=\"text-align: center;\">");
document.writeln("<div class=\"toolbar clearfix\">");
document.writeln("	<div id=\"mark_bar\">");
document.writeln('		<div class=\"mark\"  onClick=\"vote('+bookid+');\" onmouseout=\"this.style.backgroundPosition=\'-189px 0\'\" onmouseover=\"this.style.backgroundPosition=\'0 0\'\">');
document.writeln("		<div>��ϲ���ⱾС˵&nbsp;<span>�Ƽ�</span></div>");
document.writeln("		</div>");
document.writeln('		<div class=\"mark\" onClick=\"addbookcase('+bookid+','+contentid+');\" onmouseout=\"this.style.backgroundPosition=\'-189px 0\'\" onmouseover=\"this.style.backgroundPosition=\'0 0\'\">');
document.writeln("		<div id=\"lastcp\">��ʱ�ȿ�������&nbsp;<span>��ǩ</span></div>");
document.writeln("		</div>");
document.writeln("		<div class=\"mark\" onclick=\"window.open('http://www.qiuwu.net/\')\" onmouseout=\"this.style.backgroundPosition=\'-189px 0\'\" onmouseover=\"this.style.backgroundPosition=\'0 0\'\">");
document.writeln("		<div>����&nbsp;<span>��ҳ</span></div>");
document.writeln("		</div>");
document.writeln("	</div>");
document.writeln("</div>");
document.writeln(" </td>");
document.writeln("  </tbody>");
document.writeln("  <tr>");
document.writeln("</table>");

nextpage= next_page ;
	if(nextpage.indexOf('lastchapter')>0||nextpage=="index.shtml")
	{
	document.getElementById("lastcp").innerHTML="<font color=#009000>�Ѿ������һ��&nbsp;<span>��ǩ</span></font>";

	}
nextpage= next_page ;
	if(nextpage.indexOf('lastchapter')>0||nextpage=="./")
	{
	document.getElementById("lastcp").innerHTML="<font color=#009000>�Ѿ������һ��&nbsp;<span>��ǩ</span></font>";

	}