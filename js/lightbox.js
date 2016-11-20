$(document).ready(function() {
  $('.fancybox').fancybox({
        helpers: {
            title : {
                type : 'float'
            }
        }
    });


  $("#image2").fancybox({
    openEffect	: 'elastic',
    closeEffect	: 'elastic',

    helpers : {
      title : {
        type : 'inside'
      }
    }
  });

  $("#single_3").fancybox({
    openEffect : 'none',
    closeEffect	: 'none',
    helpers : {
      title : {
        type : 'outside'
      }
    }
  });

  $("#single_4").fancybox({
    helpers : {
      title : {
        type : 'over'
      }
    }
  });
});
