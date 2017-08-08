//css Map  
var cssHash = {  
	common: [{href:"css/common.css", version: "2017072002"}],
    index: [{href:"css/index.css", version: "2017072502"}]
}
//js Map  
var jsHash = {  
	jquery: [{url:"js/jquery-1.7.2.min.js", version: "2017072002"}],  
    common:  [{url:"js/common.js", version: "2017072002"}]
} 
//根据传入的key，动态生成css加载语句  
function loadCss(sKey) {  
    var node = cssHash[sKey];  
    for(var i =0;i < node.length; i ++) {  
        document.writeln('<link rel="stylesheet" type="text/css" href="'+node[i].href+'?version='+node[i].version+'">');  
    }  
}
//根据传入的key，动态生成js加载语句  
function loadJs(sKey) {  
    var node = jsHash[sKey];
    for(var i =0;i < node.length; i ++) {
        document.writeln('<script type="text/javascript" src="'+node[i].url+'?version='+node[i].version+'"></script>');
    } 
}  