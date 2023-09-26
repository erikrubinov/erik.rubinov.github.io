(function ($) {
    $(function () {
  
  
      $(window).on('scroll', function () {
        fnOnScroll();
      });
  
      $(window).on('resize', function () {
        fnOnResize();
      });
  
  
      var agTimeline = $('.js-timeline'),
        agTimelineLine = $('.js-timeline_line'),
        agTimelineLineProgress = $('.js-timeline_line-progress'),
        agTimelinePoint = $('.js-timeline-card_point-box'),
        agTimelineItem = $('.js-timeline_item'),
        agOuterHeight = $(window).outerHeight(),
        agHeight = $(window).height(),
        f = -1,
        agFlag = false;
  
      function fnOnScroll() {
        agPosY = $(window).scrollTop();
  
        fnUpdateFrame();
      }
  
      function fnOnResize() {
        agPosY = $(window).scrollTop();
        agHeight = $(window).height();
  
        fnUpdateFrame();
      }
  
      function fnUpdateWindow() {
        agFlag = false;
  
        agTimelineLine.css({
          top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
          bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
        });
  
        f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
      }
  
      function fnUpdateProgress() {
        var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
  
        i = agTop + agPosY - $(window).scrollTop();
        a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
        n = agPosY - a + agOuterHeight / 2;
        i <= agPosY + agOuterHeight / 2 && (n = i - a);
        agTimelineLineProgress.css({height: n + "px"});
  
        agTimelineItem.each(function () {
          var agTop = $(this).find(agTimelinePoint).offset().top;
  
          (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
        })
      }
  
      function fnUpdateFrame() {
        agFlag || requestAnimationFrame(fnUpdateWindow);
        agFlag = true;
      }
  
  
    });
  })(jQuery);




function startAutoSwitch() {
    if (switchInterval) {
        clearInterval(switchInterval);
    }

    switchInterval = setInterval(function() {
        switchImage(1);
    }, 8000);
}

function switch_t_i(direction, imgID,sliderType, text_bool, textID){

  if (text_bool === 'true') {
      switchText(direction, textID) //das muss geändert werden
  }
  switchImage(direction, imgID, sliderType)  
 

}

var imagesFirstSlider = [
  "https://mikrocontroller.bplaced.net/wordpress/wp-content/uploads/2013/02/myAVR_MK3.jpg",
];

var imagesSecondSlider = [
  "recog.png",
  "model.png",
  "test.jpg",
];


var imagesThirdSlider = [
"IMG_4247.png",
"IMG_4242.png",
];

var imagesFourthSlider = [
  "soulmate_first.png",
  "soulmate_second.png",
];
  


var currentImageIndex = 0;
var switchInterval;


var currentIndexFirstSlider = 0;
var currentIndexSecondSlider = 0;
var currentIndexThirdSlider = 0;
var currentIndexFourthSlider = 0;





function switchImage(direction, imgID, sliderType) {
  var imagesArray, currentIndex;

  if (sliderType === 'first') {
      imagesArray = imagesFirstSlider;
      currentIndex = currentIndexFirstSlider;
      currentIndexFirstSlider = (currentIndex + direction + imagesArray.length) % imagesArray.length;
      currentIndex= currentIndexFirstSlider
  } else if (sliderType === 'second') {
      imagesArray = imagesSecondSlider;
      currentIndex = currentIndexSecondSlider;
      currentIndexSecondSlider = (currentIndex + direction + imagesArray.length) % imagesArray.length;
      currentIndex= currentIndexSecondSlider
  }
  else if (sliderType === 'third') {
    imagesArray = imagesThirdSlider;
    currentIndex = currentIndexThirdSlider;
    currentIndexThirdSlider = (currentIndex + direction + imagesArray.length) % imagesArray.length;
    currentIndex= currentIndexThirdSlider
  }
  else if (sliderType === 'fourth') {
    imagesArray = imagesFourthSlider;
    currentIndex = currentIndexFourthSlider;
    currentIndexFourthSlider = (currentIndex + direction + imagesArray.length) % imagesArray.length;
    currentIndex= currentIndexFourthSlider
  }

  

  document.getElementById(imgID).src = imagesArray[currentIndex];
}



var Textarray = [
  "In this thesis, I implemented a software tool for detection and segementation of solar panels on aerial imagery via deep learning for estimating their power capacity",
  "The model consists of a classification module and segmentation module. If the classification module detects a solar module the picture is send to the segmentation module where the respective solar module is segmentated. Based on the size of the solad moudule its power capacity is estimated. ",
  "The training data was semi automatically generated via OpenStreetMap. The Segmentation masks were automatically created using coordinates of registered solar modules in OpenStreetMap.",
];

var currentTextIndex = 0;


function switchText(direction, textID) {
  var currentIndex;

  currentIndex = (currentTextIndex + direction + Textarray.length) % Textarray.length;
  currentTextIndex = currentIndex; // Store the new index for subsequent calls

  document.getElementById(textID).textContent = Textarray[currentTextIndex];
}




// Start the automatic switching when the script loads
startAutoSwitch();
