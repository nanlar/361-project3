/* 
   Javascript code for the SlideShow
   File Name: sliderdogs.js
*/

// Runs when the document starts
jQuery(function($) {
  var slideshowLength = $("#image-list li").length - 1;
  var slideshowIndex = 0;

  $("#slideshow-leftbtn").click(function(){
    goLeft();
  })

  $("#slideshow-rightbtn").click(function(){
    goRight();
  })

  function goRight(){
    hideCurrent();
    if(slideshowIndex<slideshowLength){ ++slideshowIndex;} 
    else { slideshowIndex = 0;}
    showNext();
  }

  function goLeft(){
    hideCurrent();
    if(slideshowIndex>0){ --slideshowIndex;} 
    else { slideshowIndex = slideshowLength;}
    showNext();
  }

  function hideCurrent(){
    $('#image-list li').eq(slideshowIndex).removeClass("image-is-visible");
    $('#image-list li').eq(slideshowIndex).addClass("image");
    $('#dots-list li').eq(slideshowIndex).removeClass("dot-is-selected");
    $('#dots-list li').eq(slideshowIndex).addClass("dot");
  }

  function showNext(){
    $('#image-list li').eq(slideshowIndex).addClass("image-is-visible");
    $('#image-list li').eq(slideshowIndex).removeClass("image");
    $('#dots-list li').eq(slideshowIndex).addClass("dot-is-selected");
    $('#dots-list li').eq(slideshowIndex).removeClass("dot");
  }

})(jQuery);

