/*! Lixin main app | Steven <wangwen1220#gmail.com> */
!function(a){{var b=!!window.ActiveXObject,c=b&&!window.XMLHttpRequest;"placeholder"in document.createElement("input")}a.fn.extend({maxHeight:function(a){return a?this.each(function(){this.style.height=this.scrollHeight>a-1?a+"px":"auto"}):this.css("max-height")},maxWidth:function(a){return a?this.each(function(){this.style.height=this.clientWidth>a-1?a+"px":"auto"}):this.css("max-width")},minWidth:function(a){return a?this.each(function(){this.style.height=this.clientWidth<a?a+"px":"auto"}):this.css("min-width")}}),a(function(){var b=a("#gotop");a("#header").on("click","nav a",function(){a(this).addClass("on").parent().siblings().find("a").removeClass("on")}),b.click(function(){a("body, html").animate({scrollTop:0},600)}),a(".goto").click(function(){return a("body, html").animate({scrollTop:a(a(this).attr("href")).offset().top},{duration:500,easing:"swing"}),!1}),a.address.strict(!1);var c=a.address.title(),d=a("#ajaxdata");a.address.init(function(){a("#js-menu").find("a").address(function(){return a(this).attr("href").replace(/^#/,"")}),d.show()}),a.address.change(function(b){var e=b.value;""===e?(d.children().hide().removeAttr("style"),a.address.title(c)):(d.children().hide().filter("."+e).show(),a.address.title(c)),a("a[href=#"+e+"]","#js-menu").parent().addClass("on").siblings().removeClass("on")}),a("#banner").switchable({triggers:"&bull;",putTriggers:"appendTo",panels:".switchable-panel",effect:"fade",duration:1.2,end2end:!0,autoplay:!0}),a("#js-switchable-logo").switchable({triggers:null,panels:".switchable-panel",easing:"ease-in-out",effect:"scrollLeft",steps:4,visible:4,end2end:!0,autoplay:!0}),a("#js-switchable-pic").switchable({triggers:null,panels:".switchable-panel",easing:"ease-in-out",effect:"scrollLeft",steps:3,visible:3,interval:4,duration:.6,end2end:!0,autoplay:!0}),a("#js-switchable-vscroll").switchable({triggers:null,panels:".switchable-panel",easing:"ease-in-out",effect:"scrollUp",steps:2,visible:2,interval:4,duration:.8,end2end:!0,autoplay:!0});var e=null;a("#js-scroller").hover(function(){clearInterval(e)},function(){var b=a("ul",this);e=setInterval(function(){var a=5*b.children("li").outerHeight(!0),c=parseInt(b.css("margin-top"));b.animate({marginTop:c-a},600,function(){b.append(b.children("li:lt(5)")).css("margin-top",c)})},5e3)}).trigger("mouseleave")}),a(window).load(function(){function b(){a(document.body).outerHeight()<d.height()?e.css({position:"absolute",top:g}):e.css("position","static")}var d=a(window),e=a("#footer"),f=e.outerHeight(!0),g=d.scrollTop()+d.height()-f;if(b(),d.scroll(b).resize(b),c)try{document.execCommand("BackgroundImageCache",!1,!0)}catch(h){}})}(jQuery);