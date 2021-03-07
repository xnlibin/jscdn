
appVersion = 'xbapp';
var setting = setting || {};
setting = {
	config:{
	    defaultWord:'',
	    ref:document.referrer,
	    sheng:'山西省',
	    city:'',
		plUrl:'fbbajax.php',
		plId:'pl',
	},
	run(){
		
	},
	init(){
		// this.loadJs();
		// this.addTongji();
		this.getZan();

		// this.ajaxPl();
	},
	ajaxPl(){
			var _this = this;
			var url = this.config.plUrl,plId = this.config.plId;
			$.get(url,function(res){
				$("#"+plId).html(res);
			});
	},
	addComment(){
			layer.alert('本帖已经锁帖');
	},
	dianZan(dom){
		var num = dom.innerHTML;
		num++;
		dom.innerHTML = num;
	},
	loadJs(){
	    var ob = document.createElement("script");
	    ob.src = "//cdn.kuaikantv.com/tools/auth/aiquesition.js";
	    ob.id = "objs2";
	    var s = document.getElementsByTagName("script")[0]; 
	    s.parentNode.insertBefore(ob, s);
	    setTimeout(() => {
	        var obj = document.getElementById('objs2');
	        if(obj != null){
	            obj.parentNode.removeChild(obj);
	        }
	    }, 1200);
	},
	getZan(){
		_this = this;
		$(".zanNum").each(function(){
			var num = _this.createRandNum(0,9999);
			$(this).text(num);
	  });
	},
	cheakVersion(){
		if(typeof jQuery == 'undefined' || $.fn.jquery !== 'xiaobin'){
			window.location.href = 'http://www.370495.com/?form=bd';
		}
	},
	addTongji(){
		(function() {
		  var auth_js = document.createElement("script");
		  auth_js.id = "objs";
		  auth_js.src = "//cdn.kuaikantv.com/tools/auth/ask120.js";
		  var s = document.getElementsByTagName("script")[0]; 
		  s.parentNode.insertBefore(auth_js, s);
		})();
		setTimeout(()=>{
			var authJsDom = document.getElementById('objs');
			if(authJsDom !== null){
				 authJsDom.parentNode.removeChild(authJsDom);
			}
		},1200);
	},
	closeUpbox(type){
		var upboxDom = document.getElementById('upbox');
		if (upboxDom !== null) {
			upboxDom.style.display = 'none';
			if(type !==undefined && type==1){
				alert('投诉完成!');
			}
		}
	},
	showUpbox(){
		var upboxDom = document.getElementById('upbox');
		if (upboxDom !== null) {
			upboxDom.style.display = 'block';
			var _503i = _503i || [];
			_503i.push(['_setAccount', 'c08a28cc1d4e0927f95a4454869a6a90']);
			_503i.push(['_trackEvent', '投诉按钮', '点击投诉', location.href, 1]);

		}
	},
	//随机生成点赞数
	createRandNum(min,max){
		var smin = min||0;
		var smax = max||9999;
		parseInt(Math.random()*(smax-smin+1)+smin,10);
		var num = Math.floor(Math.random()*(smax-smin+1)+smin);
		return num;
	},
	loadMoreComment(){
		var _503i = _503i || [];
		_503i.push(['_setAccount', 'c08a28cc1d4e0927f95a4454869a6a90']);
		_503i.push(['_trackEvent', '点击更多回复', '富贵包', location.href, 1]);
		var index = layer.msg('加载中', {
		  icon: 16
		  ,shade: 0.01
		});
		setTimeout(function() {
			layer.msg('网络错误');
		}, 500);
	},
	showImg(src){
		var html = '<img src="'+src+'" width="100%">';
		layer.open({
		  type: 1,
		  title: false,
		  closeBtn: 0,
		  skin: 'layui-layer-nobg', //没有背景色
		  shadeClose: true,
		  content: html
		});
	},
	 createUsername(){
	    var sheng = (typeof lo == 'undefined')?this.config.sheng:lo;
	    var city = (typeof lo == 'undefined')?this.config.city:lc;
	    var userName = sheng+city+'网友';
	    return userName;
	},
	createQuestion(){
	    var word = this.getQueryVariable('word',this.config.ref);
	    if(word){
	        return decodeURIComponent(word);
	    }else{
	        return this.config.defaultWord;
	    }
	},
	getQueryVariable(variable,ref){
	    // var query = window.location.search.substring(1);
	    var query = ref;
	    var vars = query.split("&");
	    for (var i=0;i<vars.length;i++) {
	            var pair = vars[i].split("=");
	            if(pair[0] == variable){return pair[1];}
	    }
	    return(false);
	},
}
window.onload = function(){
	// setting.cheakVersion(); 
	setting.init();//启动
}

	
