////////////////////////////////////////////////////////////////////////////////
// 名称: 主程序
// 作者: Steven
// 链接: http://wangwen1220.github.io/
// 说明: Require jQuery
// 更新: 2014-5-28
////////////////////////////////////////////////////////////////////////////////
// Main
(function($) {
  // Helpers
  var isIE = !!window.ActiveXObject;
  var isIE6 = isIE && !window.XMLHttpRequest;

  var supportPlaceholder = 'placeholder' in document.createElement('input');

  function log(msg) {
    window.console && console.log(msg);
  }

  function isString(val) {
    return Object.prototype.toString.call(val) === '[object String]';
  }

  // 检测文字是否为中文
  function isChinese(txt) {
    return /[\u4E00-\uFA29]+|[\uE7C7-\uE7F3]+/.test(txt);
  }

  function $$(id) {
    return 'string' === typeof id ? document.getElementById(id) : id;
    // return isString(id) ? document.getElementById(id) : id;
  }

  // jQuery Plugins
  $.fn.extend({
    // Max Height
    maxHeight: function(value) {
      if (!value) {
        return this.css('max-height');
      } else {
        return this.each(function() {
          this.style.height = this.scrollHeight > value - 1 ? value + 'px' : 'auto';
        });
      }
    },

    // Max Width
    maxWidth: function(value) {
      if (!value) {
        return this.css('max-width');
      } else {
        return this.each(function() {
          this.style.height = this.clientWidth > value - 1 ? value + 'px' : 'auto';
        });
      }
    },

    // Min Width
    minWidth: function(value) {
      if (!value) {
        return this.css('min-width');
      } else {
        return this.each(function() {
          this.style.height = this.clientWidth < value ? value + 'px' : 'auto';
        });
      }
    }
  });

  // 文档加载完执行
  $(function() {
    // log('jQury version: ' + jQuery.fn.jquery);

    // 通用变量
    var $gotop = $('#gotop');

    // 搜索框获得或失去焦点
    // if (!supportPlaceholder) {
    //   $(document).on({
    //     focus: function() {
    //       var $ths = $(this);
    //       var defaultval = this.placeholder || this.defaultValue;
    //       $ths.addClass('focus').removeClass('placeholder');
    //       if (this.value === defaultval) {
    //        this.value = '';
    //       }
    //     },
    //     blur: function() {
    //       var $ths = $(this);
    //       var defaultval = this.placeholder || this.defaultValue;
    //       $ths.removeClass('focus');

    //       if (this.value === '') {
    //         this.value = defaultval;
    //       }
    //       if (defaultval === this.value) {
    //         $ths.addClass('placeholder');
    //       }
    //     }
    //   }, '.js-placeholder').find('.js-placeholder').trigger('blur');
    // }

    // 导航效果
    $('#header').on('click', 'nav a', function() {
      $(this).addClass('on').parent().siblings().find('a').removeClass('on');
    });

    // 智能浮动
    // $('#smartfloat').smartFloat();

    // 返回顶部
    $gotop.click(function() {
      $('body, html').animate({
        scrollTop: 0
      }, 600);
    });

    // 转到
    $('.goto').click(function() {
      $('body, html').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, {
        duration: 500,
        easing: 'swing'
      });
      return false;
    });

    // JS 历史导航
    // Initializes plugin features
    // $.address.strict(false).wrap(true);
    $.address.strict(false);

    //alert($.address.value())
    // if ($.address.value() ==＝ '') {
    //   $.address.history(false).value('home').history(true);
    // }

    // 页面默认标题
    var defaultTitle = $.address.title();
    var $ajaxdata = $('#ajaxdata');

    // 初始化 $.address
    $.address.init(function(e) {
      // Enables the plugin for all the content links
      $('#js-menu').find('a').address(function() {
        return $(this).attr('href').replace(/^#/, '');
      });

      $ajaxdata.show();
    });

    // 设置 $.address.change 事件
    $.address.change(function(e) {
      var val = e.value;

      // Sets the page content
      if (val === '') { // 主页
        $ajaxdata.children().hide().removeAttr('style');
        $.address.title(defaultTitle);
      } else { // 内页
        $ajaxdata.children().hide().filter('.' + val).show();
        // $.address.title($('a[href=#' + val + ']').attr('title') + ' - ' + defaultTitle);
        $.address.title(defaultTitle);
      }

      // 导航切换
      $('a[href=#' + val + ']', '#js-menu').parent().addClass('on').siblings().removeClass('on');

      // Sets the page title
      // $.address.title($.address.title().split(' - ')[0] + ' - ' + $('a[href=' + val + ']').attr('title'));
    });

    // 触发 $.address.change 事件
    // $(document).on('click', 'a.ajaxlink', function() {
    //   $.address.value($(this).attr('href').replace(/^#/, ''));
    //   $(document.body).scrollTop(356);
    //   return false;
    // });

    // 大图滑动效果
    $('#banner').switchable({
      triggers: '&bull;',
      putTriggers: 'appendTo',
      panels: '.switchable-panel',
      // easing: 'ease-in-out',
      effect: 'fade',
      duration: 1.2,
      end2end: true,
      autoplay: true
    });

    // 水平图片滚动动画
    $('#js-switchable-logo').switchable({
      triggers: null,
      // triggers: '&bull;',
      panels: '.switchable-panel',
      easing: 'ease-in-out',
      effect: 'scrollLeft',
      steps: 4,
      visible: 4,
      // delay: 2,
      end2end: true,
      autoplay: true
    });

    $('#js-switchable-pic').switchable({
      triggers: null,
      // triggers: '&bull;',
      panels: '.switchable-panel',
      easing: 'ease-in-out',
      effect: 'scrollLeft',
      steps: 3,
      visible: 3,
      interval: 4,
      // delay: 3,
      duration: .6,
      end2end: true,
      autoplay: true
    });

    // 垂直图片滚动动画
    $('#js-switchable-vscroll').switchable({
      triggers: null,
      // triggers: '&bull;',
      panels: '.switchable-panel',
      easing: 'ease-in-out',
      effect: 'scrollUp',
      steps: 2,
      visible: 2,
      interval: 4,
      // delay: 3,
      duration: .8,
      end2end: true,
      autoplay: true
    });

    // 垂直滚动文字列表
    var scrollTimer = null;
    $('#js-scroller').hover(function() {
      clearInterval(scrollTimer);
    }, function() {
      var $ul = $('ul', this);
      scrollTimer = setInterval(function() {
        var scrollHeiht = $ul.children('li').outerHeight(true)*5;
        var marginTop = parseInt($ul.css('margin-top'));
        $ul.animate({marginTop: marginTop - scrollHeiht}, 600, function() {
          $ul.append($ul.children('li:lt(5)')).css('margin-top', marginTop);
        });
      }, 5000);
    }).trigger('mouseleave');

    // IE6 兼容性处理
    // if (isIE6) {
    //   // 产品标题和描述最大高度
    //   $('#main .proshow-bd .prolist-item .title').maxHeight(54);
    //   $('#main .proshow-bd .prolist-item .description').maxHeight(70);
    // }
  });

  // 页面加载完执行
  $(window).load(function() {
    var $window = $(window);
    var $footer = $('#footer');
    var footerHeight = $footer.outerHeight(true);
    var footerTop = $window.scrollTop() + $window.height() - footerHeight;

    positionFooter();
    $window.scroll(positionFooter).resize(positionFooter);

    function positionFooter() {
      // 如果页面内容高度小于屏幕高度，#footer 将绝对定位到屏幕底部
      // 否则div#footer保留它的正常静态定位
      if ($(document.body).outerHeight() < $window.height()) {
        $footer.css({
          position: 'absolute',
          top: footerTop
        });
        // $footer.css({
        //   position: 'absolute'
        // }).stop().animate({
        //   top: footerTop + 'px'
        // }, 300);
      } else {
        $footer.css('position', 'static');
      }
    }

    if (isIE6) {
      // 让 IE6 缓存背景图片
      // TredoSoft Multiple IE doesn't like this, so try{} it
      try {
        document.execCommand("BackgroundImageCache", false, true);
      } catch(r) {}
    }
  });
})(jQuery);