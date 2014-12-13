<!DOCTYPE html>
<html class="<?php echo $class ?>">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title><?php echo $title ?> - <?php echo $name ?></title>
  <meta name="author" content="Steven" />
  <meta name="keywords" content="<?php echo $keywords ?>" />
  <meta name="description" content="<?php echo $description ?>" />
  <link rel="stylesheet" href="css/main-debug.css" />
  <!-- <script src="js/cssrefresh.js"></script> -->
  <!-- <script src="js/live.js"></script> -->
  <!--[if lt IE 9]>
  <script src="js/ie/html5shiv.js"></script>
  <script src="js/ie/nwmatcher.js"></script>
  <script src="js/ie/selectivizr.js"></script>
  <![endif]-->
  <!--[if IE 6]>
  <script src="js/ie/pngfix.js"></script>
  <![endif]-->
  <script src="js/jquery.js"></script>
  <script src="js/jquery-address.js"></script>
  <script src="js/jquery-switchable.js"></script>
  <script src="js/main-debug.js"></script>
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
</head>

<body>
  <!--[if lt IE 6]>
  <div class="browsehappy">似乎您正在使用一个旧版本的 Internet Explorer。为了获得最佳的浏览体验，我们建议您<a href="http://browsehappy.com/" target="_blank">升级你的浏览器</a>。</div>
  <![endif]-->
  <header id="header">
    <div class="wrapper">
      <h1 class="logo"><a href="/"><img src="img/logo-1.png" alt="<?php echo $name ?>" /></a></h1>
      <h2 class="subtitle fn-hide">自立利他  诚信为本<br>为中小型企业发展助力</h2>
      <nav>
        <ul class="clearfix">
          <li><a class="<?php if ($class === 'home') { echo 'on'; } ?>" href="index.php"><span>首页</span></a></li>
          <li><a class="<?php if (preg_match('/\babout\-us\b/', $class)) { echo 'on'; } ?>" href="about-us.php"><span>关于立信</span></a></li>
          <li><a class="<?php if (preg_match('/\bxmxg\b/', $class)) { echo 'on'; } ?>" href="xmxg.php"><span>项目效果</span></a></li>
          <li><a class="<?php if (preg_match('/\bkczx\b/', $class)) { echo 'on'; } ?>" href="kczx.php"><span>课程中心</span></a></li>
          <li><a class="<?php if (preg_match('/\bsztd\b/', $class)) { echo 'on'; } ?>" href="sztd.php"><span>师资团队</span></a></li>
          <li><a class="<?php if (preg_match('/\blxfx\b/', $class)) { echo 'on'; } ?>" href="lxfx.php"><span>立信分享</span></a></li>
          <li><a class="<?php if (preg_match('/\bjszx\b/', $class)) { echo 'on'; } ?>" href="jszx.php"><span>技术中心</span></a></li>
          <li><a class="<?php if (preg_match('/\bkhjz\b/', $class)) { echo 'on'; } ?>" href="khjz.php"><span>客户见证</span></a></li>
          <li><a class="<?php if (preg_match('/\brczp\b/', $class)) { echo 'on'; } ?>" href="rczp.php"><span>人才招聘</span></a></li>
          <li><a class="<?php if (preg_match('/\bhzlc\b/', $class)) { echo 'on'; } ?>" href="hzlc.php"><span>合作流程</span></a></li>
        </ul>
      </nav>
    </div>
  </header>
