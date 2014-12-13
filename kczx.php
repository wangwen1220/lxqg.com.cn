<?php
require_once 'config.php';

$class = 'subpage kczx';
$title = '课程中心';
$keywords = '课程中心,立信企管,企业管理';
$description = '课程中心-东莞立信企业管理';

include 'header.php';
?>

  <div id="main">
    <div class="wrapper">
      <div class="w-fly-mr">
        <div class="w-fly-cnt">
          <div id="ajaxdata">
            <div class="w-cntbox syxxk">
              <div class="w-cntbox-hd">
                <h2 class="title">“三一”学习卡</h2>
                <div class="position"><a class="home" href="/">首页</a> <i>&gt;</i> <strong><?php echo $title ?></strong></div>
              </div>
              <div class="w-cntbox-bd">
                <article>
                  <h4>"知、行、习"三一模式</h4>
                  <p>“知”-- 外训内训：企业中高层、基层思想转变、观念革新；</p>
                  <p>“行”-- 现场辅导：解决企业内部实际发生的技术、管理难题；</p>
                  <p>“习”-- 体系控制：依据每家企业自身不同特点、在辅导的过程中量身定制一套适合企业自身的体系与控制流程。</p>
                </article>
              </div>
            </div>

            <div class="w-cntbox kclb fn-hide">
              <div class="w-cntbox-hd">
                <h2 class="title">课程类别</h2>
                <div class="position"><a class="home" href="/">首页</a> <i>&gt;</i> <strong><?php echo $title ?></strong></div>
              </div>
              <div class="w-cntbox-bd">
                <article>
                  <p><img src="img/pic-kclb.png" alt="课程类别" /></p>
                </article>
              </div>
            </div>

            <div class="w-cntbox nxkc fn-hide">
              <div class="w-cntbox-hd">
                <h2 class="title">内训课程</h2>
                <div class="position"><a class="home" href="/">首页</a> <i>&gt;</i> <strong><?php echo $title ?></strong></div>
              </div>
              <div class="w-cntbox-bd">
                <article>
                  <p>
                    <img src="img/pic-nxkc1.png" alt="内训课程" />
                    <img src="img/pic-nxkc2.png" alt="内训课程" />
                    <img src="img/pic-nxkc3.png" alt="内训课程" />
                    <img src="img/pic-nxkc4.png" alt="内训课程" />
                  </p>
                </article>
              </div>
            </div>

            <div class="w-cntbox wxkc fn-hide">
              <div class="w-cntbox-hd">
                <h2 class="title">外训课程</h2>
                <div class="position"><a class="home" href="/">首页</a> <i>&gt;</i> <strong><?php echo $title ?></strong></div>
              </div>
              <div class="w-cntbox-bd">
                <article>
                  <p><img class="lightbox" src="img/pic-wxkc.png" alt="外训课程" /></p>
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
              <li class="on"><a href="#syxxk">“三一”学习卡</a></li>
              <li><a href="#kclb">课程类别</a></li>
              <li><a href="#nxkc">内训课程</a></li>
              <li><a href="#wxkc">外训课程</a></li>
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