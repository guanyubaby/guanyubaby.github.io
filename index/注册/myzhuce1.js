
var  texttime=60;
var  zhucevalue1=0;
var  zhucevalue2=0;
var  zhucevalue3=0;
var  zhucevalue4=0;
var  zhucevalue5=1;//奇偶数判断
var  zhucevalue6=0;
function set()//改变计时器函数
{
	if(texttime==60)
		gotime();
	if(texttime==0)
	{
		texttime=60;
		gotime();
	}
}
function gotime()
{
	
	if(texttime>=1){
	var starttime=document.getElementById("starttime");
	starttime.innerHTML=texttime;
	texttime--;
	starttime.innerHTML="已发送"+texttime;
	t=setTimeout("gotime()",1000);
	};
	 if(texttime==0)
	{
		var starttime=document.getElementById("starttime");
		starttime.innerHTML="点击重新发送";
		
	}
}
function myonchange()
{
	var warning=document.getElementById("warning1");
	var name=document.getElementById("user");
	if(name.value=="")
	{warning.innerHTML="*昵称不能为空";zhucevalue1=0}
	else {warning.innerHTML="输入正确";zhucevalue1=1;}
}
function myonchange1()
{
	var warning1=document.getElementById("warning2");
	var warning2=document.getElementById("warning3");
	var userpassword=document.getElementById("userpassword");
	var userpassword1=document.getElementById("userpassword1");
	if(userpassword.value=="")
	{warning1.innerHTML="*密码不能为空";zhucevalue2=0}
	else 
	{
		warning1.innerHTML="输入正确";
		zhucevalue2=1;
			if(userpassword.value==userpassword1.value)
			{warning2.innerHTML="密码正确";zhucevalue3=1;}
				else {warning2.innerHTML="两次密码输入不正确";zhucevalue3=0}
	
	
	}
}
function myonchange2()
{	var inputyanzhengma=document.getElementById("inputyanzhengma");
	var yanzhengma=docucment.getElementById("yanzhengma");
	if(yanzhengma.value==inputyanzhengma)
		zhucevalue6=1;
	else zhucevalue6=0;
	
}
function shifttext()//改变验证码函数
{
	var i=Math.floor(Math.random()*10);
	var j=Math.floor(Math.random()*10);
	var m=Math.floor(Math.random()*10);
	var n=Math.floor(Math.random()*10);
	var yanzhengma=document.getElementById("yanzhengma");
	var yanzheng=['A','b','C','3','0','O','9','1','m','M'];
		
	var newyanzhengma=yanzheng[i]+yanzheng[j]+yanzheng[m]+yanzheng[n];//共有n的四次方种排列组合
	//for(i=0;i<yanzheng.length;i++)
		
		yanzhengma.innerHTML=newyanzhengma;
	
}
function tongyi()
{
	alert("这是协议书\n本公司致力于大众人群的社交，开发此项目帮助人们实现梦想\n同意本协议即遵循本公司之规则");
	
}
function gouxuan()//同意协议框
{
	zhucevalue5++;
}
function zhucetijiao()
{
	//myonchange2();
	if(zhucevalue1==1&&zhucevalue2==1&&zhucevalue3==1&&(zhucevalue5%2!=0))
				alert("注册成功");
	//else if(zhucevalue6==0)
				//alert("验证码错误");
}
$(document).ready(function jixu(){

    $("#giftu").css("left","1000px");
	$("#giftu").animate({left:"500px"},5000,jixu);
	//$("#giftu").animate({right:"300px"},5000,jixu);
	


});

