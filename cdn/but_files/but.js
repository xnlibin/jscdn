
(function ($) {
	$.extend({
		tipsBox: function (options) {
			options = $.extend({
				obj: null,  //jq对象，要在那个html标签上显示
				str: "+1",  //字符串，要显示的内容;也可以传一段html，如: "<b style='font-family:Microsoft YaHei;'>+1</b>"
				startSize: "12px",  //动画开始的文字大小
				endSize: "30px",    //动画结束的文字大小
				interval: 600,  //动画时间间隔
				color: "red",    //文字颜色
				callback: function () { }    //回调函数
			}, options);
			$("body").append("<span class='num'>" + options.str + "</span>");
			var box = $(".num");
			var left = options.obj.offset().left + options.obj.width() / 2;
			var top = options.obj.offset().top - options.obj.height();
			box.css({
				"position": "absolute",
				"left": left + "px",
				"top": top + "px",
				"z-index": 9999,
				"font-size": options.startSize,
				"line-height": options.endSize,
				"color": options.color
			});
			box.animate({
				"font-size": options.endSize,
				"opacity": "0",
				"top": top - parseInt(options.endSize) + "px"
			}, options.interval, function () {
				box.remove();
				options.callback();
			});
		}
	});
})(jQuery);
  
function niceIn(prop){
	prop.find('i').addClass('niceIn');
	setTimeout(function(){
		prop.find('i').removeClass('niceIn');	
	},1000);		
}
$(function () {
	$("#btn").click(function () {
		
		var num1=parseInt($("#num1").html());
		var num2=num1+1;
		$("#num1").html(num2);
		$.tipsBox({
			obj: $(this),
			str: "+1",
			callback: function () {
			}
		});
		
		niceIn($(this));
	
});
});
$(function () {
	$("#btn2").click(function () {
		
		var num1=parseInt($("#num2").html());
		var num2=num1+1;
		$("#num2").html(num2);
		$.tipsBox({
			obj: $(this),
			str: "+1",
			callback: function () {
			}
		});
		
		niceIn($(this));
	
});
});

$(function () {
	$("#btn3").click(function () {
		
		var num1=parseInt($("#num3").html());
		var num2=num1+1;
		$("#num3").html(num2);
		$.tipsBox({
			obj: $(this),
			str: "+1",
			callback: function () {
			}
		});
		
		niceIn($(this));
	
});
});

$(function () {
	$("#btn4").click(function () {
		
		var num1=parseInt($("#num4").html());
		var num2=num1+1;
		$("#num4").html(num2);
		$.tipsBox({
			obj: $(this),
			str: "+1",
			callback: function () {
			}
		});
		
		niceIn($(this));
	
});
});
$(function () {
	$("#btn5").click(function () {
		
		var num1=parseInt($("#num5").html());
		var num2=num1+1;
		$("#num5").html(num2);
		$.tipsBox({
			obj: $(this),
			str: "+1",
			callback: function () {
			}
		});
		
		niceIn($(this));
	
});
});
$(function () {
	$("#btn6").click(function () {
		
		var num1=parseInt($("#num6").html());
		var num2=num1+1;
		$("#num6").html(num2);
		$.tipsBox({
			obj: $(this),
			str: "+1",
			callback: function () {
			}
		});
		
		niceIn($(this));
	
});
});
$(function () {
	$("#btn7").click(function () {
		
		var num1=parseInt($("#num7").html());
		var num2=num1+1;
		$("#num7").html(num2);
		$.tipsBox({
			obj: $(this),
			str: "+1",
			callback: function () {
			}
		});
		
		niceIn($(this));
	
});
});
$(function () {
	$("#btn8").click(function () {
		
		var num1=parseInt($("#num8").html());
		var num2=num1+1;
		$("#num8").html(num2);
		$.tipsBox({
			obj: $(this),
			str: "+1",
			callback: function () {
			}
		});
		
		niceIn($(this));
	
});
});

$(function () {
	$("#btn9").click(function () {
		
		var num1=parseInt($("#num9").html());
		var num2=num1+1;
		$("#num9").html(num2);
		$.tipsBox({
			obj: $(this),
			str: "+1",
			callback: function () {
			}
		});
		
		niceIn($(this));
	
});
});
$(function () {
	$("#btn10").click(function () {
		
		var num1=parseInt($("#num10").html());
		var num2=num1+1;
		$("#num10").html(num2);
		$.tipsBox({
			obj: $(this),
			str: "+1",
			callback: function () {
			}
		});
		
		niceIn($(this));
	
});
});

$(function () {
	$("#btn11").click(function () {
		
		var num1=parseInt($("#num11").html());
		var num2=num1+1;
		$("#num11").html(num2);
		$.tipsBox({
			obj: $(this),
			str: "+1",
			callback: function () {
			}
		});
		
		niceIn($(this));
	
});
});

$(function () {
	$("#btn12").click(function () {
		
		var num1=parseInt($("#num12").html());
		var num2=num1+1;
		$("#num12").html(num2);
		$.tipsBox({
			obj: $(this),
			str: "+1",
			callback: function () {
			}
		});
		
		niceIn($(this));
	
});
});

$(function () {
	$("#btn13").click(function () {
		
		var num1=parseInt($("#num13").html());
		var num2=num1+1;
		$("#num13").html(num2);
		$.tipsBox({
			obj: $(this),
			str: "+1",
			callback: function () {
			}
		});
		
		niceIn($(this));
	
});
});


$(function () {
	$("#btn14").click(function () {
		
		var num1=parseInt($("#num14").html());
		var num2=num1+1;
		$("#num14").html(num2);
		$.tipsBox({
			obj: $(this),
			str: "+1",
			callback: function () {
			}
		});
		
		niceIn($(this));
	
});
});


$(function () {
	$("#btn15").click(function () {
		
		var num1=parseInt($("#num15").html());
		var num2=num1+1;
		$("#num15").html(num2);
		$.tipsBox({
			obj: $(this),
			str: "+1",
			callback: function () {
			}
		});
		
		niceIn($(this));
	
});
});


$(function () {
	$("#btn16").click(function () {
		
		var num1=parseInt($("#num16").html());
		var num2=num1+1;
		$("#num16").html(num2);
		$.tipsBox({
			obj: $(this),
			str: "+1",
			callback: function () {
			}
		});
		
		niceIn($(this));
	
});
});

$(function () {
	$("#btn17").click(function () {
		
		var num1=parseInt($("#num17").html());
		var num2=num1+1;
		$("#num17").html(num2);
		$.tipsBox({
			obj: $(this),
			str: "+1",
			callback: function () {
			}
		});
		
		niceIn($(this));
	
});
});

$(function () {
	$("#btn18").click(function () {
		
		var num1=parseInt($("#num18").html());
		var num2=num1+1;
		$("#num18").html(num2);
		$.tipsBox({
			obj: $(this),
			str: "+1",
			callback: function () {
			}
		});
		
		niceIn($(this));
	
});
});

$(function () {
	$("#btn19").click(function () {
		
		var num1=parseInt($("#num19").html());
		var num2=num1+1;
		$("#num19").html(num2);
		$.tipsBox({
			obj: $(this),
			str: "+1",
			callback: function () {
			}
		});
		
		niceIn($(this));
	
});
});



