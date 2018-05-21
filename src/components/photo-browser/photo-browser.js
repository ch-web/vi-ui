var photoBrowser = function (swiper) {
  var pb = {};
  pb.params = {
    zoom: true,
    maxZoom: 3,
    minZoom: 1,
    speed: 300,
    swiper: swiper,
    support: {
      touch: !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch),
      gestures: !!('ongesturestart' in window)
    }
  };
  pb.params.touchEvents={
      start: pb.params.support.touch? 'touchstart' : 'mousedown',
      move: pb.params.support.touch? 'touchmove' : 'mousemove',
      end: pb.params.support.touch? 'touchend' : 'mouseup'
  };
  /**
   * 设备判断
   */
  pb.device=function () {
    var device = "";
    var ua = navigator.userAgent;
    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
    // Android
    if (android) {
      device = 'android';
    }
    if (ipad || iphone || ipod) {
      device = 'ios';
    }
    return device;
  };
  pb.attachEvents = function () {
    if (pb.params.zoom) {
      var target = pb.params.swiper.slides;
      for (var i = 0; i < target.length; i++) {
        // Scale image
        if (pb.params.support.gestures) {
          target[i].addEventListener('gesturestart', pb.onSlideGestureStart);
          target[i].addEventListener('gesturechange', pb.onSlideGestureChange);
          target[i].addEventListener('gestureend', pb.onSlideGestureEnd);
        } else if (pb.params.touchEvents.start === 'touchstart') {
          target[i].addEventListener(pb.params.touchEvents.start, pb.onSlideGestureStart);
          target[i].addEventListener(pb.params.touchEvents.move, pb.onSlideGestureChange);
          target[i].addEventListener(pb.params.touchEvents.end, pb.onSlideGestureEnd);
        }
        target[i].addEventListener(pb.params.touchEvents.start, pb.onSlideTouchStart);
        target[i].addEventListener(pb.params.touchEvents.move, pb.onSlideTouchMove);
        target[i].addEventListener(pb.params.touchEvents.end, pb.onSlideTouchEnd);

        target[i].addEventListener('ondblclick', pb.toggleZoom);


        // target[i].addEventListener('pointerdown', pb.onSlideTouchStart);
        // target[i].addEventListener('pointermove', pb.onSlideTouchMove);
        // target[i].addEventListener('pointerend', pb.onSlideTouchEnd);
      }
    }
  };
  // Gestures
  var gestureSlide, gestureImg, gestureImgWrap, scale = 1, currentScale = 1, isScaling = false;
  var scaleStart, scaleMove;
  pb.onSlideGestureStart = function (e) {
    if (!pb.params.support.gestures) {
      if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
        return;
      }
      scaleStart = pb.getDistanceBetweenTouches(e);
    }
    if (!gestureSlide || !gestureSlide.length) {
      gestureSlide = pb.params.swiper.slides.eq(pb.params.swiper.activeIndex);
      gestureImg = gestureSlide.find('img, svg, canvas');
      gestureImgWrap = gestureImg.parent('.photo-browser-zoom-container');
      if (gestureImgWrap.length === 0) {
        gestureImg = undefined;
        return;
      }
    }
    gestureImg.transition(0);
    isScaling = true;
  };
  pb.onSlideGestureChange = function (e) {
    if (!pb.params.support.gestures) {
      if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
        return;
      }
      scaleMove = pb.getDistanceBetweenTouches(e);
    }
    if (!gestureImg || gestureImg.length === 0) return;
    if (pb.params.support.gestures) {
      scale = e.scale * currentScale;
    }
    else {
      scale = (scaleMove / scaleStart) * currentScale;
    }
    if (scale > pb.params.maxZoom) {
      scale = pb.params.maxZoom - 1 + Math.pow((scale - pb.params.maxZoom + 1), 0.5);
    }
    if (scale < pb.params.minZoom) {
      scale = pb.params.minZoom + 1 - Math.pow((pb.params.minZoom - scale + 1), 0.5);
    }
    gestureImg.transform('translate3d(0,0,0) scale(' + scale + ')');
  };
  pb.onSlideGestureEnd = function (e) {
    if (!gestureImg || gestureImg.length === 0) return;
    scale = Math.max(Math.min(scale, pb.params.maxZoom), pb.params.minZoom);
    gestureImg.transition(pb.params.speed).transform('translate3d(0,0,0) scale(' + scale + ')');
    currentScale = scale;
    isScaling = false;
    if (scale === 1) gestureSlide = undefined;
  };

  // Calc Scale From Multi-touches
  pb.getDistanceBetweenTouches = function (e) {
    if (e.targetTouches.length < 2) return 1;
    var x1 = e.targetTouches[0].pageX,
      y1 = e.targetTouches[0].pageY,
      x2 = e.targetTouches[1].pageX,
      y2 = e.targetTouches[1].pageY;
    var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
  };
  pb.toggleZoom = function (e) {
    pb.container = document.getElementsByClassName("photo-browser");
    if (!gestureSlide) {
      gestureSlide = pb.params.swiper.slides.eq(pb.params.swiper.activeIndex);
      gestureImg = gestureSlide.find('img, svg, canvas');
      gestureImgWrap = gestureImg.parent('.photo-browser-zoom-container');
    }
    if (!gestureImg || gestureImg.length === 0) return;

    var touchX, touchY, offsetX, offsetY, diffX, diffY, translateX, translateY, imageWidth, imageHeight,
      scaledWidth, scaledHeight, translateMinX, translateMinY, translateMaxX, translateMaxY;

    if (typeof imageTouchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    }
    else {
      touchX = imageTouchesStart.x;
      touchY = imageTouchesStart.y;
    }

    if (scale && scale !== 1) {
      // Zoom Out
      scale = currentScale = 1;
      gestureImgWrap.transition(300).transform('translate3d(0,0,0)');
      gestureImg.transition(300).transform('translate3d(0,0,0) scale(1)');
      gestureSlide = undefined;
    }
    else {
      // Zoom In
      scale = currentScale = pb.params.maxZoom;
      if (e) {
        offsetX = pb.container[0].offsetLeft;
        offsetY = pb.container[0].offsetTop;
        diffX = offsetX + pb.container[0].offsetWidth / 2 - touchX;
        diffY = offsetY + pb.container[0].offsetHeight / 2 - touchY;

        imageWidth = gestureImg[0].offsetWidth;
        imageHeight = gestureImg[0].offsetHeight;
        scaledWidth = imageWidth * scale;
        scaledHeight = imageHeight * scale;

        translateMinX = Math.min((pb.params.swiper.width / 2 - scaledWidth / 2), 0);
        translateMinY = Math.min((pb.params.swiper.height / 2 - scaledHeight / 2), 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;

        translateX = diffX * scale;
        translateY = diffY * scale;

        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }

        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      }
      else {
        translateX = 0;
        translateY = 0;
      }
      gestureImgWrap.transition(300).transform('translate3d(' + translateX + 'px, ' + translateY + 'px,0)');
      gestureImg.transition(300).transform('translate3d(0,0,0) scale(' + scale + ')');
    }
  };

  var imageIsTouched, imageIsMoved, imageCurrentX, imageCurrentY, imageMinX, imageMinY, imageMaxX, imageMaxY,
    imageWidth, imageHeight, imageTouchesStart = {}, imageTouchesCurrent = {}, imageStartX, imageStartY,
    velocityPrevPositionX, velocityPrevTime, velocityX, velocityPrevPositionY, velocityY;
  pb.onSlideTouchStart = function (e) {
    if (!gestureImg || gestureImg.length === 0) return;
    if (imageIsTouched) return;
    if (pb.params.device === 'android') e.preventDefault();
    imageIsTouched = true;
    imageTouchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    imageTouchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  };
  pb.onSlideTouchMove = function (e) {
    function yytranslate(el, axis) {
      var matrix, curTransform, curStyle, transformMatrix;

      // automatic axis detection
      if (typeof axis === 'undefined') {
        axis = 'x';
      }

      curStyle = window.getComputedStyle(el, null);
      if (window.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(',').length > 6) {
          curTransform = curTransform.split(', ').map(function (a) {
            return a.replace(',', '.');
          }).join(', ');
        }
        // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }

      if (axis === 'x') {
        //Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix)
          curTransform = transformMatrix.m41;
        //Crazy IE10 Matrix
        else if (matrix.length === 16)
          curTransform = parseFloat(matrix[12]);
        //Normal Browsers
        else
          curTransform = parseFloat(matrix[4]);
      }
      if (axis === 'y') {
        //Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix)
          curTransform = transformMatrix.m42;
        //Crazy IE10 Matrix
        else if (matrix.length === 16)
          curTransform = parseFloat(matrix[13]);
        //Normal Browsers
        else
          curTransform = parseFloat(matrix[5]);
      }
      return curTransform || 0;
    }

    if (!gestureImg || gestureImg.length === 0) return;
    pb.params.swiper.allowClick = false;
    if (!imageIsTouched || !gestureSlide) return;

    if (!imageIsMoved) {
      imageWidth = gestureImg[0].offsetWidth;
      imageHeight = gestureImg[0].offsetHeight;
      imageStartX = yytranslate(gestureImgWrap[0], 'x') || 0;
      imageStartY = yytranslate(gestureImgWrap[0], 'y') || 0;
      gestureImgWrap.transition(0);
    }
    // Define if we need image drag
    var scaledWidth = imageWidth * scale;
    var scaledHeight = imageHeight * scale;

    if (scaledWidth < pb.params.swiper.width && scaledHeight < pb.params.swiper.height) return;

    imageMinX = Math.min((pb.params.swiper.width / 2 - scaledWidth / 2), 0);
    imageMaxX = -imageMinX;
    imageMinY = Math.min((pb.params.swiper.height / 2 - scaledHeight / 2), 0);
    imageMaxY = -imageMinY;

    imageTouchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    imageTouchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

    if (!imageIsMoved && !isScaling) {
      if (
        (Math.floor(imageMinX) === Math.floor(imageStartX) && imageTouchesCurrent.x < imageTouchesStart.x) ||
        (Math.floor(imageMaxX) === Math.floor(imageStartX) && imageTouchesCurrent.x > imageTouchesStart.x)
      ) {
        imageIsTouched = false;
        return;
      }
    }
    e.preventDefault();
    e.stopPropagation();
    imageIsMoved = true;
    imageCurrentX = imageTouchesCurrent.x - imageTouchesStart.x + imageStartX;
    imageCurrentY = imageTouchesCurrent.y - imageTouchesStart.y + imageStartY;

    if (imageCurrentX < imageMinX) {
      imageCurrentX = imageMinX + 1 - Math.pow((imageMinX - imageCurrentX + 1), 0.8);
    }
    if (imageCurrentX > imageMaxX) {
      imageCurrentX = imageMaxX - 1 + Math.pow((imageCurrentX - imageMaxX + 1), 0.8);
    }

    if (imageCurrentY < imageMinY) {
      imageCurrentY = imageMinY + 1 - Math.pow((imageMinY - imageCurrentY + 1), 0.8);
    }
    if (imageCurrentY > imageMaxY) {
      imageCurrentY = imageMaxY - 1 + Math.pow((imageCurrentY - imageMaxY + 1), 0.8);
    }

    //Velocity
    if (!velocityPrevPositionX) velocityPrevPositionX = imageTouchesCurrent.x;
    if (!velocityPrevPositionY) velocityPrevPositionY = imageTouchesCurrent.y;
    if (!velocityPrevTime) velocityPrevTime = Date.now();
    velocityX = (imageTouchesCurrent.x - velocityPrevPositionX) / (Date.now() - velocityPrevTime) / 2;
    velocityY = (imageTouchesCurrent.y - velocityPrevPositionY) / (Date.now() - velocityPrevTime) / 2;
    if (Math.abs(imageTouchesCurrent.x - velocityPrevPositionX) < 2) velocityX = 0;
    if (Math.abs(imageTouchesCurrent.y - velocityPrevPositionY) < 2) velocityY = 0;
    velocityPrevPositionX = imageTouchesCurrent.x;
    velocityPrevPositionY = imageTouchesCurrent.y;
    velocityPrevTime = Date.now();

    gestureImgWrap.transform('translate3d(' + imageCurrentX + 'px, ' + imageCurrentY + 'px,0)');
  };
  pb.onSlideTouchEnd = function (e) {
    if (!gestureImg || gestureImg.length === 0) return;
    if (!imageIsTouched || !imageIsMoved) {
      imageIsTouched = false;
      imageIsMoved = false;
      return;
    }
    imageIsTouched = false;
    imageIsMoved = false;
    var momentumDurationX = 300;
    var momentumDurationY = 300;
    var momentumDistanceX = velocityX * momentumDurationX;
    var newPositionX = imageCurrentX + momentumDistanceX;
    var momentumDistanceY = velocityY * momentumDurationY;
    var newPositionY = imageCurrentY + momentumDistanceY;

    //Fix duration
    if (velocityX !== 0) momentumDurationX = Math.abs((newPositionX - imageCurrentX) / velocityX);
    if (velocityY !== 0) momentumDurationY = Math.abs((newPositionY - imageCurrentY) / velocityY);
    var momentumDuration = Math.max(momentumDurationX, momentumDurationY);

    imageCurrentX = newPositionX;
    imageCurrentY = newPositionY;

    // Define if we need image drag
    var scaledWidth = imageWidth * scale;
    var scaledHeight = imageHeight * scale;
    imageMinX = Math.min((pb.params.swiper.width / 2 - scaledWidth / 2), 0);
    imageMaxX = -imageMinX;
    imageMinY = Math.min((pb.params.swiper.height / 2 - scaledHeight / 2), 0);
    imageMaxY = -imageMinY;
    imageCurrentX = Math.max(Math.min(imageCurrentX, imageMaxX), imageMinX);
    imageCurrentY = Math.max(Math.min(imageCurrentY, imageMaxY), imageMinY);

    gestureImgWrap.transition(momentumDuration).transform('translate3d(' + imageCurrentX + 'px, ' + imageCurrentY + 'px,0)');
  };
  pb.onSliderTransitionEnd = function () {
    // Reset zoom
    if (pb.params.zoom && gestureSlide && pb.params.swiper.previousIndex !== pb.params.swiper.activeIndex) {
      gestureImg.transform('translate3d(0,0,0) scale(1)');
      gestureImgWrap.transform('translate3d(0,0,0)');
      gestureSlide = gestureImg = gestureImgWrap = undefined;
      scale = currentScale = 1;
    }
  };
  pb.attachEvents();

  return pb;
}

export default  photoBrowser
