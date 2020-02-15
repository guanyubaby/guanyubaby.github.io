//随机小写字母
var cha;
//表示正确的次数
 var okCount = 0;
//错误的次数
 var errorCount = 0;
 //掠过次数；
 var ignoreCount=0
 //对应ascall码值
 var char;
//获取显示结果的div
 var result;
 //input对象
 var key1;
 //div对象
 var charBox;
function show(){
	//获取显示字符的div
	charBox = document.getElementById('char');
    var chi=['a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    cha=chi[Math.floor(Math.random()*26)];
    charBox.innerHTML = cha;
    char=cha.toUpperCase().charCodeAt();
    
} 
// function clearAnimated() { 
//     charBox.className = '';
// }
function showResult() {
    result = document.getElementById('result');
    var rate = 100 * okCount / (okCount + errorCount);
    var rate1=100 * okCount / (okCount + errorCount+ignoreCount);
    //显示正确个数 错误个数 及正确率
    result.innerHTML = '正确' + okCount + '个' + '错误' + errorCount + '个'
    + '正确率' + rate.toFixed(2) + '%'+'打字速度'+rate1.toFixed(2) + '%';//toFixed(2)保留两位小数
} 
var i; 
function go(){
   show();
   charBox.style.color="lightgreen";
   ignoreCount++;
    var h=document.getElementById('hi');
    key1=document.getElementById('sho');
     //i=h.getElementsByTagName('i')[0];获得数组
    key1.onkeydown=function(event){        
        //判断按键字母所对应的数字和随机获取的数字是否相等
        if (event.keyCode==char) {
            charBox.style.color="lightgreen";
        //  //按键正确，正确次数+1
          okCount++;
        //  //当按键正确时，重新显示新的字符
        h.insertAdjacentHTML("beforeend",'<i id="nom">'+cha+'</i>');//在span最后一个元素后面插入字母
          //show();
        //  //添加正确的动画 通过js给div添加类名
         //  charBox.className = 'animated zoomIn';
          } else {
        //  //按键错误，错误次数+1
           errorCount++;
           charBox.style.color="red";
           h.insertAdjacentHTML("beforeend",'<i id="er">'+cha+'</i>');
        //  //添加按键错误的动画
          //charBox.className = 'animated shake error';
        //js改变字体颜色；
          //show();
         }
         showResult();//显示结果；
        //0.5秒之后清除，动画
        
         //红色颜色消失
         }
         setTimeout(go, 1000);//一段时间后显示；
}


   