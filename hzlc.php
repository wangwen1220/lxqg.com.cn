<?php
require_once 'config.php';

$class = 'subpage hzlc';
$title = '合作流程';
$keywords = '合作流程,立信企管,企业管理';
$description = '合作流程-东莞立信企业管理';

include 'header.php';
?>

  <div id="main">
    <div class="wrapper">
      <div class="w-fly-mr">
        <div class="w-fly-cnt">
          <div id="ajaxdata">
            <div class="w-cntbox zxpx">
              <div class="w-cntbox-hd">
                <h2 class="title">咨询培训</h2>
                <div class="position"><a class="home" href="/">首页</a> <i>&gt;</i> <strong><?php echo $title ?></strong></div>
              </div>
              <div class="w-cntbox-bd">
                <article>
                  <p>
                    <img class="lightbox" src="img/pic-zxpx1.png" />
                    <img class="lightbox" src="img/pic-zxpx2.png" />
                    <img class="lightbox" src="img/pic-zxpx3.png" />
                  </p>
                </article>
              </div>
            </div>

            <div class="w-cntbox zcfd fn-hide">
              <div class="w-cntbox-hd">
                <h2 class="title">驻厂辅导</h2>
                <div class="position"><a class="home" href="/">首页</a> <i>&gt;</i> <strong><?php echo $title ?></strong></div>
              </div>
              <div class="w-cntbox-bd">
                <article>
                  <p><img src="img/pic-zcfd.png" /></p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside class="w-fly-l">
        <div class="sidebar">
          <div id="js-menu" class="menu">
            <h2><?php echo $title ?></h2>
            <ul>
              <li class="on"><a href="#zxpx">咨询培训</a></li>
              <li><a href="#zcfd">驻厂辅导</a></li>
            </ul>
          </div>
          <div class="w-box">
            <div class="w-box-hd">
              <h2>联系我们</h2>
            </div>
            <div class="w-box-bd">
              <address>
                <strong>东莞总部：</strong>东莞市长安镇沙头社区建安路630号金汇大厦3F<br />
                <strong>电话：</strong>0769-33892905<br />
                <strong>邮箱：</strong>lixinDG001@126.com<br />
                <strong>深圳分公司：</strong>深圳市宝安区沙井镇西环路盈耀楼6栋2F207室<br />
                <strong>电话：</strong>0755-29888064<br />
                <strong>邮箱：</strong>lixinSZ002@126.com<br />
                <strong>郴州分公司：</strong>郴州市苏仙区白露塘镇高新区委大楼5F<br />
                <strong>电话：</strong>0735-6629702<br />
                <strong>邮箱：</strong>lixinCZ003@126.com
              </address>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>

<?php include 'footer.php'; ?>