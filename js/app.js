// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    var $body, $window;
    $window = $(window);
    $body = $(document.body);
    $body.scrollspy({
      target: ".sidebar"
    });
    $window.on("load", function() {
      return $body.scrollspy("refresh");
    });
    $(".sidenav [href=#]").click(function(e) {
      return e.preventDefault();
    });
    setTimeout((function() {
      var $sideBar;
      $sideBar = $(".sidebar");
      return $sideBar.affix({
        offset: {
          top: function() {
            var navOuterHeight, offsetTop, sideBarMargin;
            offsetTop = $sideBar.offset().top;
            sideBarMargin = parseInt($sideBar.children(0).css("margin-top"), 10);
            navOuterHeight = $(".nav").height();
            return this.top = offsetTop - navOuterHeight - sideBarMargin;
          },
          bottom: function() {
            return this.bottom = $(".footer").outerHeight(true);
          }
        }
      });
    }), 100);
    return $('.sidebar').on('activate.bs.scrollspy', function() {
      return console.log('scroll spyed');
    });
  });

}).call(this);

//# sourceMappingURL=app.map
