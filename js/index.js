$(function () {
  // hamburger
  $("#toggle-btn").click(function () {
    $(this).toggleClass("off");
    $(".header nav").toggleClass("slide-in");
    $(".nav-mask").toggleClass("on");
  });

  $(".header nav a").click(function () {
    if ($(window).width() < 1280) {
      $("#toggle-btn").toggleClass("off");
      $(".header nav").toggleClass("slide-in");
      $(".nav-mask").toggleClass("on");
    }
  });

  // header
  $(".header nav button").click(function () {
    if (window.innerWidth <= 1279) {
      if ($(this).closest("li").hasClass("active")) {
        $(this).closest("li").removeClass("active");
      } else {
        $(this).closest("li").siblings("li").removeClass("active");
        $(this).closest("li").addClass("active");
      }
    }
  });

  // #link卷軸滑動動畫
  $('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html,body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top + 1,
          },
          1000
        );
    }
  });

  // kv slick-slider
  $("#kv-slider").slick({
    appendDots: $("#kv"),
    dots: true,
    autoplay: true,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 500,
    autoplaySpeed: 9500,
  });

  // 信貸產品 tags
  $("#section1 .sec1-tags .tag-container").click(function () {
    $(this).addClass("now").siblings().removeClass("now");
    var $index = $(this).index("#section1 .sec1-tags .tag-container");
    $("#section1 .sec1-cards-wrapper .card")
      .eq($index)
      .addClass("show")
      .siblings()
      .removeClass("show");

    if (window.innerWidth < 768) {
      $("#section1 .bottom-area").slick("slickGoTo", 0);
      $(".sec1-cards-wrapper").insertAfter($("#section1 .tag-container.now"));
      var $tagTop = $(this).offset().top;
      $("html,body")
        .stop()
        .animate(
          {
            scrollTop: $tagTop - 100,
          },
          500
        );
    }
  });

  // 信貸產品slick
  $("#section1 .bottom-area").slick({
    slidesToShow: 1,
    variableWidth: true,
    slidesToScroll: 1,
    centerMode: true,
    dots: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: "unslick",
      },
    ],
  });
  if (window.innerWidth >= 768) {
    $(".sec1-cards-wrapper").insertAfter($("#section1 .sec1-tags"));
  } else {
    $(".sec1-cards-wrapper").insertAfter($("#section1 .tag-container.now"));
  }
  $(window).resize(function () {
    if (window.innerWidth >= 768) {
      $(".sec1-cards-wrapper").insertAfter($("#section1 .sec1-tags"));
    } else {
      $("#section1 .bottom-area").slick({
        slidesToShow: 1,
        variableWidth: true,
        slidesToScroll: 1,
        centerMode: true,
        dots: true,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 767,
            settings: "unslick",
          },
        ],
      });
      $(".sec1-cards-wrapper").insertAfter($("#section1 .tag-container.now"));
    }
  });

  // 常見問題開關
  $("#section2 .card-wrapper").click(function () {
    $(this).toggleClass("show");
    if ($(this).hasClass("show")) {
      $(this).find(".card-answer").slideDown();
    } else {
      $(this).find(".card-answer").slideUp();
    }
  });

  // cookie提醒關閉
  $("#cookie-btn").click(function () {
    $(".cookie-wrapper").hide();
  });

  // sidebar控制 手機版-隱藏於KV前 & footer後
  var $section1Top = $("#section1").offset().top;
  var $footerTop = $("footer").offset().top - window.innerHeight;
  var currentTop = 0;
  if ($section1Top <= 0) {
    $section1Top = 0;
  }
  $(window).resize(function () {
    $section1Top = $("#section1").offset().top;
    $footerTop = $("footer").offset().top - window.innerHeight;
    currentTop = 0;
    if ($section1Top <= 0) {
      $section1Top = 0;
    }
  });
  $(window).scroll(function () {
    if (window.innerWidth <= 767) {
      currentTop = $(window).scrollTop();
      if (currentTop <= $section1Top || currentTop >= $footerTop) {
        $(".fix-link-wrapper").removeClass("show");
      } else {
        $(".fix-link-wrapper").addClass("show");
      }
    } else {
      return false;
    }
  });

  // 信貸產品 下方內容卡片 mobile版本去除aos
  if (window.innerWidth < 768) {
    $(".sec1-tags li").attr("data-aos-once", "true");
    $(".sec1-cards-wrapper").removeAttr("data-aos data-aos-delay");
  }

  // aos
  $('*[data-aos|="nojs"]').each(function () {
    var $this = $(this);
    $this.attr("data-aos", $this.attr("data-aos").replace("nojs-", ""));
  });
  AOS.init({
    // startEvent: 'load',
  });

  // document.addEventListener('aos:in:icon1', function() {
  //   $('#icon1').addClass('slide');
  // });
  // document.addEventListener('aos:in:icon2', function() {
  //   $('#icon2').addClass('slide');
  // });
});
