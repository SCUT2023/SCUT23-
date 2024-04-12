window.onload = function(){
var year = new Date().getFullYear();
var month = new Date().getMonth() + 1;
var date = new Date().getDate();
var hour = new Date().getHours();
var minute = new Date().getMinutes();
var day = new Date().getDay();
var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
var arr_2 =['结束亦是开始','不要忘记自己的初心','周二得吃塔斯汀','梦……你会有怎样一个梦呢？','疯狂疯狂星期四','再坚持一天','我们只需要进化就好。'];
if(minute < 10){
minute = '0' + minute;
}
document.getElementById("time").innerHTML = '今天是 '+ year + '年' + month + '月' + date + '日 ' + hour +':' + minute + ' ' + arr[day];
document.getElementById("tips").innerHTML = 'tips: '+ arr_2[day];
}
var temp = 0;
function replaceimgamiya(){
    if(temp == 0){
        document.getElementById("amiyaimg").src="./img/amiya2.gif";
        temp = 1;
        setTimeout (replaceimgamiya2, 60000)
    }
}
function replaceimgamiya2(){
    document.getElementById("amiyaimg").src="./img/amiya.gif";
    temp = 0;
}