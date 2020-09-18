// var fixed_url="https://www.baidu.com/";
   
// 测试地址
var fixed_url="https://www.baidu.cn/";

// 公共参数
var authtoken="",
    client="app";

// 加载动画
var circle_html="";
circle_html+='<div class="mask-wrap">;';
// circle_html+='    <img src="images/circle.gif" alt="" width="32" height="32" style="padding:4px;background:#fff;border-radius:50%;"/>;';
circle_html+='<div id="circle_img"  style="width:80px;height:100px;font-size: .8rem;color: #fff;position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;display:inline-block;z-index: 99999999;">';
circle_html+='    <img src="images/bear.gif?2017042002" width="80" height="80"/>';
circle_html+='    <p style="text-align:center;">数据处理中</p>';
circle_html+='</div>';
circle_html+='</div>;';

// 信息框居中
function boxCenter(doc){
    var $doc=$(doc);
    var windowWidth = ($("body").width()-$doc.width())*0.5;
    var windowHeight = $(window).height(),      //获取当前窗口高度
    scrollHeight = $("body").scrollTop(),    //相对滚动条上侧的偏移值
    dialogBoxHeight = $doc.height() + 2,
    dialogBoxTop = windowHeight/2,      //动态top值
    dialogBoxMarTOP = 0 - (dialogBoxHeight/2) +  dialogBoxTop;   //动态margin-top值
    $doc.css({"left" : windowWidth + "px","top" : scrollHeight + "px", "margin-top":dialogBoxMarTOP + "px"  });
}

// ajaxRequest(url, 'GET',true, data, callback);//调用
function ajaxRequest(url, method,async, data, callback) {
    var this_url=fixed_url+url;
    var request = $.ajax({
        type: method,
        url: this_url,
        async:async,
        dataType: 'json',
        data:data,
        success: callback
    });
}

// 获取URL参数
function GetRequest() { 
    var url = location.search; //获取url中"?"符后的字串 
    var theRequest = new Object(); 
    if (url.indexOf("?") != -1) { 
        var str = url.substr(1); 
        strs = str.split("&"); 
        for(var i = 0; i < strs.length; i ++) { 
            theRequest[strs[i].split("=")[0]]=decodeURIComponent(strs[i].split("=")[1]); 
        } 
    } 
    return theRequest; 
}
// 提示框信息
function tipInformation(message, successCallback,color) {
    
    var html_mask="";
    var html="";
    var close_tip_html="";
    if(!color){
        color="#f0b20c";
    }
    html_mask+='<div class="mask" style="width: 100%;height: 100%;background-color: rgba(0,0,0,0.6);position: fixed;top: 0;left:0;z-index: 99999999;display: box;display: -webkit-box;display: -moz-box;display: -ms-flexbox;display: -webkit-flex;display: flex;-webkit-box-align: center;-webkit-align-items: center;-moz-align-items: center;-ms-align-items: center;-o-align-items: center;align-items: center;-webkit-box-pack: center;-webkit-justify-content: center;-moz-justify-content: center;-ms-justify-content: center;-o-justify-content: center;justify-content: center;"></div>';
    html+='<div id="tip" style="width:200px;height:auto;padding:10px;background:#fff;border-radius:6px;text-align: center;">';
    html+='    <p style="font-size: 1rem;color: #000;line-height: 36px;">提示</p>';
    html+='    <p class="message" style="font-size: 1rem;color: '+color+';line-height: 24px;">'+message+'</p>';
    html+='</div>';
    close_tip_html='<input type="button" value="确定" style="width:142px;height:26px;margin:10px 0px 6px;background: #24c890;border-radius: 6px;font-size: 0.75rem;color: #fff;"/>';

    var $html_mask = $(html_mask);
    var $html = $(html);
    var $closeTipHtml = $(close_tip_html);

    $html.append($closeTipHtml);
    $html_mask.append($html);
    $("body").append($html_mask);
   
    // 点击确定按钮
    $closeTipHtml.on("click", function(){
        $(".mask").remove();
        successCallback&&successCallback();
    })
}

// alert(ismobile(1)); 1表示Android，0表示ios
function ismobile(test){
    var u = navigator.userAgent, app = navigator.appVersion;
    if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
        if(window.location.href.indexOf("?mobile")<0){
            try{
                if(/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)){
                    return '0';
                }else{
                    return '1';
               }
            }catch(e){}
        }
    }else if( u.indexOf('iPad') > -1){
        return '0';
    }else{
        return '1';
    }
}

// 获取服务器系统当前时间
function getSystemTime(){
    var systemtime="";
    var url="app/mapmer/getSystemTime";
    var data={}
    ajaxRequest('GET',url,false, data, callback);
    function callback(result) {
        if(result.code==200){
            systemtime=result.data.systemtime;
        }
    }
    return systemtime;
}







 


