jQuery(document).ready(function() {
        "use strict";
        /* Mega Menu Title */
        jQuery("#mega-menu-title").on("click", function() {
                jQuery("#mega-menu-category").is(":visible") ?
                    jQuery("#mega-menu-category").slideUp() :
                    jQuery("#mega-menu-category").slideDown()
            }),
            /* Bestsell Products Slider */
            jQuery("#bestsell-slider .slider-items").owlCarousel({
                items: 3,
                itemsDesktop: [1024, 3],
                itemsDesktopSmall: [768, 3],
                itemsTablet: [767, 2],
                itemsMobile: [360, 1],
                navigation: !0,
                navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
                slideSpeed: 500,
                pagination: !1
            }),
            /* Featured Products Slider */
            jQuery("#featured-slider .slider-items").owlCarousel({
                items: 4,
                itemsDesktop: [1024, 3],
                itemsDesktopSmall: [900, 3],
                itemsTablet: [768, 2],
                itemsMobile: [360, 1],
                navigation: !0,
                navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
                slideSpeed: 500,
                pagination: !1
            }),
            /* New Arrivals Slider */
            jQuery("#new-arrivals-slider .slider-items").owlCarousel({
                items: 4,
                itemsDesktop: [1024, 3],
                itemsDesktopSmall: [768, 3],
                itemsTablet: [767, 2],
                itemsMobile: [360, 1],
                navigation: !0,
                navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
                slideSpeed: 500,
                pagination: !1
            }),
            /* Brand Logo slider */
            jQuery("#brand-logo-slider .slider-items").owlCarousel({
                autoPlay: !0,
                items: 6,
                itemsDesktop: [1024, 4],
                itemsDesktopSmall: [900, 3],
                itemsTablet: [600, 2],
                itemsMobile: [320, 1],
                navigation: !0,
                navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
                slideSpeed: 500,
                pagination: !1
            }),
            /* category slider */
            jQuery("#category-desc-slider .slider-items").owlCarousel({
                autoPlay: !0,
                items: 1,
                itemsDesktop: [1024, 1],
                itemsDesktopSmall: [900, 1],
                itemsTablet: [600, 1],
                itemsMobile: [320, 1],
                navigation: !0,
                navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
                slideSpeed: 500,
                pagination: !1
            }),
            /* Related Products slider */
            jQuery("#related-products-slider .slider-items").owlCarousel({
                items: 4,
                itemsDesktop: [1024, 4],
                itemsDesktopSmall: [900, 3],
                itemsTablet: [600, 2],
                itemsMobile: [360, 1],
                navigation: !0,
                navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
                slideSpeed: 500,
                pagination: !1
            }),
            /* Upsell Products slider */
            jQuery("#upsell-products-slider .slider-items").owlCarousel({
                items: 4,
                itemsDesktop: [1024, 4],
                itemsDesktopSmall: [900, 3],
                itemsTablet: [600, 2],
                itemsMobile: [360, 1],
                navigation: !0,
                navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
                slideSpeed: 500,
                pagination: !1
            }),
            /* testimonials slider */
            jQuery("#testimonials-slider .slider-items").owlCarousel({
                autoPlay: !0,
                items: 1,
                itemsDesktop: [1024, 1],
                itemsDesktopSmall: [900, 1],
                itemsTablet: [640, 1],
                itemsMobile: [390, 1],
                navigation: !1,
                navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
                slideSpeed: 500,
                pagination: !1
            }),
            /* mobile menu */
            jQuery("#mobile-menu").mobileMenu({
                MenuWidth: 250,
                SlideSpeed: 300,
                WindowsMaxWidth: 767,
                PagePush: !0,
                FromLeft: !0,
                Overlay: !0,
                CollapseMenu: !0,
                ClassName: "mobile-menu"
            }), jQuery("#top-cart-contain").mouseenter(function() {
                jQuery(this).find("#top-cart-content").stop(!0, !0).slideDown()
            }), jQuery("#top-cart-contain").mouseleave(function() {
                jQuery(this).find("#top-cart-content").stop(!0, !0).slideUp()
            })

        /* timer */
        jQuery(".timer-grid").each(function() {
                var e = jQuery(this).attr("data-time");
                jQuery(this).countdown(e, function(e) {
                    jQuery(this).html('<div class="day box-time-date"><span class="number">' + e.strftime("%D") + ' </span>days</div> <div class="hour box-time-date"><span class="number">' + e.strftime("%H") + '</span>hrs</div><div class="min box-time-date"><span class="number">' + e.strftime("%M") + '</span> mins</div> <div class="sec box-time-date"><span class="number">' + e.strftime("%S") + " </span>sec</div>")
                })
            }),
            /* Zoom js */

            "function" != typeof Object.create && (Object.create = function(e) {
                function o() {}
                return o.prototype = e, new o
            }),
            function(e, o, t, i) {
                var n = {
                    init: function(o, t) {
                        var i = this;
                        i.elem = t, i.jQueryelem = e(t), i.imageSrc = i.jQueryelem.data("zoom-image") ? i.jQueryelem.data("zoom-image") : i.jQueryelem.attr("src"), i.options = e.extend({}, e.fn.elevateZoom.options, o), i.options.tint && (i.options.lensColour = "none", i.options.lensOpacity = "1"), "inner" == i.options.zoomType && (i.options.showLens = !1), i.jQueryelem.parent().removeAttr("title").removeAttr("alt"), i.zoomImage = i.imageSrc, i.refresh(1), e("#" + i.options.gallery + " a").click(function(o) {
                            return i.options.galleryActiveClass && (e("#" + i.options.gallery + " a").removeClass(i.options.galleryActiveClass), e(this).addClass(i.options.galleryActiveClass)), o.preventDefault(), e(this).data("zoom-image") ? i.zoomImagePre = e(this).data("zoom-image") : i.zoomImagePre = e(this).data("image"), i.swaptheimage(e(this).data("image"), i.zoomImagePre), !1
                        })
                    },
                    refresh: function(e) {
                        var o = this;
                        setTimeout(function() {
                            o.fetch(o.imageSrc)
                        }, e || o.options.refresh)
                    },
                    fetch: function(e) {
                        var o = this,
                            t = new Image;
                        t.onload = function() {
                            o.largeWidth = t.width, o.largeHeight = t.height, o.startZoom(), o.currentImage = o.imageSrc, o.options.onZoomedImageLoaded(o.jQueryelem)
                        }, t.src = e
                    },
                    startZoom: function() {
                        var o = this;
                        if (o.nzWidth = o.jQueryelem.width(), o.nzHeight = o.jQueryelem.height(), o.isWindowActive = !1, o.isLensActive = !1, o.isTintActive = !1, o.overWindow = !1, o.options.imageCrossfade && (o.zoomWrap = o.jQueryelem.wrap('<div style="height:' + o.nzHeight + "px;width:" + o.nzWidth + 'px;" class="zoomWrapper" />'), o.jQueryelem.css("position", "absolute")), o.zoomLock = 1, o.scrollingLock = !1, o.changeBgSize = !1, o.currentZoomLevel = o.options.zoomLevel, o.nzOffset = o.jQueryelem.offset(), o.widthRatio = o.largeWidth / o.currentZoomLevel / o.nzWidth, o.heightRatio = o.largeHeight / o.currentZoomLevel / o.nzHeight, "window" == o.options.zoomType && (o.zoomWindowStyle = "overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " + String(o.options.zoomWindowBgColour) + ";width: " + String(o.options.zoomWindowWidth) + "px;height: " + String(o.options.zoomWindowHeight) + "px;float: left;background-size: " + o.largeWidth / o.currentZoomLevel + "px " + o.largeHeight / o.currentZoomLevel + "px;display: none;z-index:100;border: " + String(o.options.borderSize) + "px solid " + o.options.borderColour + ";background-repeat: no-repeat;position: absolute;"), "inner" == o.options.zoomType) {
                            var t = o.jQueryelem.css("border-left-width");
                            o.zoomWindowStyle = "overflow: hidden;margin-left: " + String(t) + ";margin-top: " + String(t) + ";background-position: 0px 0px;width: " + String(o.nzWidth) + "px;height: " + String(o.nzHeight) + "px;float: left;display: none;cursor:" + o.options.cursor + ";px solid " + o.options.borderColour + ";background-repeat: no-repeat;position: absolute;"
                        }
                        "window" == o.options.zoomType && (o.nzHeight < o.options.zoomWindowWidth / o.widthRatio ? lensHeight = o.nzHeight : lensHeight = String(o.options.zoomWindowHeight / o.heightRatio), o.largeWidth < o.options.zoomWindowWidth ? lensWidth = o.nzWidth : lensWidth = o.options.zoomWindowWidth / o.widthRatio, o.lensStyle = "background-position: 0px 0px;width: " + String(o.options.zoomWindowWidth / o.widthRatio) + "px;height: " + String(o.options.zoomWindowHeight / o.heightRatio) + "px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" + o.options.lensOpacity + ";filter: alpha(opacity = " + 100 * o.options.lensOpacity + "); zoom:1;width:" + lensWidth + "px;height:" + lensHeight + "px;background-color:" + o.options.lensColour + ";cursor:" + o.options.cursor + ";border: " + o.options.lensBorderSize + "px solid " + o.options.lensBorderColour + ";background-repeat: no-repeat;position: absolute;"), o.tintStyle = "display: block;position: absolute;background-color: " + o.options.tintColour + ";filter:alpha(opacity=0);opacity: 0;width: " + o.nzWidth + "px;height: " + o.nzHeight + "px;", o.lensRound = "", "lens" == o.options.zoomType && (o.lensStyle = "background-position: 0px 0px;float: left;display: none;border: " + String(o.options.borderSize) + "px solid " + o.options.borderColour + ";width:" + String(o.options.lensSize) + "px;height:" + String(o.options.lensSize) + "px;background-repeat: no-repeat;position: absolute;"), "round" == o.options.lensShape && (o.lensRound = "border-top-left-radius: " + String(o.options.lensSize / 2 + o.options.borderSize) + "px;border-top-right-radius: " + String(o.options.lensSize / 2 + o.options.borderSize) + "px;border-bottom-left-radius: " + String(o.options.lensSize / 2 + o.options.borderSize) + "px;border-bottom-right-radius: " + String(o.options.lensSize / 2 + o.options.borderSize) + "px;"), o.zoomContainer = e('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' + o.nzOffset.left + "px;top:" + o.nzOffset.top + "px;height:" + o.nzHeight + "px;width:" + o.nzWidth + 'px;"></div>'), e("body").append(o.zoomContainer), o.options.containLensZoom && "lens" == o.options.zoomType && o.zoomContainer.css("overflow", "hidden"), "inner" != o.options.zoomType && (o.zoomLens = e("<div class='zoomLens' style='" + o.lensStyle + o.lensRound + "'>&nbsp;</div>").appendTo(o.zoomContainer).click(function() {
                            o.jQueryelem.trigger("click")
                        }), o.options.tint && (o.tintContainer = e("<div/>").addClass("tintContainer"), o.zoomTint = e("<div class='zoomTint' style='" + o.tintStyle + "'></div>"), o.zoomLens.wrap(o.tintContainer), o.zoomTintcss = o.zoomLens.after(o.zoomTint), o.zoomTintImage = e('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' + o.nzWidth + "px; height: " + o.nzHeight + 'px;" src="' + o.imageSrc + '">').appendTo(o.zoomLens).click(function() {
                            o.jQueryelem.trigger("click")
                        }))), isNaN(o.options.zoomWindowPosition) ? o.zoomWindow = e("<div style='z-index:999;left:" + o.windowOffsetLeft + "px;top:" + o.windowOffsetTop + "px;" + o.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function() {
                            o.jQueryelem.trigger("click")
                        }) : o.zoomWindow = e("<div style='z-index:999;left:" + o.windowOffsetLeft + "px;top:" + o.windowOffsetTop + "px;" + o.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo(o.zoomContainer).click(function() {
                            o.jQueryelem.trigger("click")
                        }), o.zoomWindowContainer = e("<div/>").addClass("zoomWindowContainer").css("width", o.options.zoomWindowWidth), o.zoomWindow.wrap(o.zoomWindowContainer), "lens" == o.options.zoomType && o.zoomLens.css({
                            backgroundImage: "url('" + o.imageSrc + "')"
                        }), "window" == o.options.zoomType && o.zoomWindow.css({
                            backgroundImage: "url('" + o.imageSrc + "')"
                        }), "inner" == o.options.zoomType && o.zoomWindow.css({
                            backgroundImage: "url('" + o.imageSrc + "')"
                        }), o.jQueryelem.bind("touchmove", function(e) {
                            e.preventDefault();
                            var t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                            o.setPosition(t)
                        }), o.zoomContainer.bind("touchmove", function(e) {
                            "inner" == o.options.zoomType && o.showHideWindow("show"), e.preventDefault();
                            var t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                            o.setPosition(t)
                        }), o.zoomContainer.bind("touchend", function(e) {
                            o.showHideWindow("hide"), o.options.showLens && o.showHideLens("hide"), o.options.tint && "inner" != o.options.zoomType && o.showHideTint("hide")
                        }), o.jQueryelem.bind("touchend", function(e) {
                            o.showHideWindow("hide"), o.options.showLens && o.showHideLens("hide"), o.options.tint && "inner" != o.options.zoomType && o.showHideTint("hide")
                        }), o.options.showLens && (o.zoomLens.bind("touchmove", function(e) {
                            e.preventDefault();
                            var t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                            o.setPosition(t)
                        }), o.zoomLens.bind("touchend", function(e) {
                            o.showHideWindow("hide"), o.options.showLens && o.showHideLens("hide"), o.options.tint && "inner" != o.options.zoomType && o.showHideTint("hide")
                        })), o.jQueryelem.bind("mousemove", function(e) {
                            0 == o.overWindow && o.setElements("show"), o.lastX === e.clientX && o.lastY === e.clientY || (o.setPosition(e), o.currentLoc = e), o.lastX = e.clientX, o.lastY = e.clientY
                        }), o.zoomContainer.bind("mousemove", function(e) {
                            0 == o.overWindow && o.setElements("show"), o.lastX === e.clientX && o.lastY === e.clientY || (o.setPosition(e), o.currentLoc = e), o.lastX = e.clientX, o.lastY = e.clientY
                        }), "inner" != o.options.zoomType && o.zoomLens.bind("mousemove", function(e) {
                            o.lastX === e.clientX && o.lastY === e.clientY || (o.setPosition(e), o.currentLoc = e), o.lastX = e.clientX, o.lastY = e.clientY
                        }), o.options.tint && "inner" != o.options.zoomType && o.zoomTint.bind("mousemove", function(e) {
                            o.lastX === e.clientX && o.lastY === e.clientY || (o.setPosition(e), o.currentLoc = e), o.lastX = e.clientX, o.lastY = e.clientY
                        }), "inner" == o.options.zoomType && o.zoomWindow.bind("mousemove", function(e) {
                            o.lastX === e.clientX && o.lastY === e.clientY || (o.setPosition(e), o.currentLoc = e), o.lastX = e.clientX, o.lastY = e.clientY
                        }), o.zoomContainer.add(o.jQueryelem).mouseenter(function() {
                            0 == o.overWindow && o.setElements("show")
                        }).mouseleave(function() {
                            o.scrollLock || o.setElements("hide")
                        }), "inner" != o.options.zoomType && o.zoomWindow.mouseenter(function() {
                            o.overWindow = !0, o.setElements("hide")
                        }).mouseleave(function() {
                            o.overWindow = !1
                        }), o.options.zoomLevel, o.options.minZoomLevel ? o.minZoomLevel = o.options.minZoomLevel : o.minZoomLevel = 2 * o.options.scrollZoomIncrement, o.options.scrollZoom && o.zoomContainer.add(o.jQueryelem).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(t) {
                            o.scrollLock = !0, clearTimeout(e.data(this, "timer")), e.data(this, "timer", setTimeout(function() {
                                o.scrollLock = !1
                            }, 250));
                            var i = t.originalEvent.wheelDelta || -1 * t.originalEvent.detail;
                            return t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault(), i / 120 > 0 ? o.currentZoomLevel >= o.minZoomLevel && o.changeZoomLevel(o.currentZoomLevel - o.options.scrollZoomIncrement) : o.options.maxZoomLevel ? o.currentZoomLevel <= o.options.maxZoomLevel && o.changeZoomLevel(parseFloat(o.currentZoomLevel) + o.options.scrollZoomIncrement) : o.changeZoomLevel(parseFloat(o.currentZoomLevel) + o.options.scrollZoomIncrement), !1
                        })
                    },
                    setElements: function(e) {
                        var o = this;
                        if (!o.options.zoomEnabled) return !1;
                        "show" == e && o.isWindowSet && ("inner" == o.options.zoomType && o.showHideWindow("show"), "window" == o.options.zoomType && o.showHideWindow("show"), o.options.showLens && o.showHideLens("show"), o.options.tint && "inner" != o.options.zoomType && o.showHideTint("show")), "hide" == e && ("window" == o.options.zoomType && o.showHideWindow("hide"), o.options.tint || o.showHideWindow("hide"), o.options.showLens && o.showHideLens("hide"), o.options.tint && o.showHideTint("hide"))
                    },
                    setPosition: function(e) {
                        var o = this;
                        if (!o.options.zoomEnabled) return !1;
                        o.nzHeight = o.jQueryelem.height(), o.nzWidth = o.jQueryelem.width(), o.nzOffset = o.jQueryelem.offset(), o.options.tint && "inner" != o.options.zoomType && (o.zoomTint.css({
                            top: 0
                        }), o.zoomTint.css({
                            left: 0
                        })), o.options.responsive && !o.options.scrollZoom && o.options.showLens && (o.nzHeight < o.options.zoomWindowWidth / o.widthRatio ? lensHeight = o.nzHeight : lensHeight = String(o.options.zoomWindowHeight / o.heightRatio), o.largeWidth < o.options.zoomWindowWidth ? lensWidth = o.nzWidth : lensWidth = o.options.zoomWindowWidth / o.widthRatio, o.widthRatio = o.largeWidth / o.nzWidth, o.heightRatio = o.largeHeight / o.nzHeight, "lens" != o.options.zoomType && (o.nzHeight < o.options.zoomWindowWidth / o.widthRatio ? lensHeight = o.nzHeight : lensHeight = String(o.options.zoomWindowHeight / o.heightRatio), o.options.zoomWindowWidth < o.options.zoomWindowWidth ? lensWidth = o.nzWidth : lensWidth = o.options.zoomWindowWidth / o.widthRatio, o.zoomLens.css("width", lensWidth), o.zoomLens.css("height", lensHeight), o.options.tint && (o.zoomTintImage.css("width", o.nzWidth), o.zoomTintImage.css("height", o.nzHeight))), "lens" == o.options.zoomType && o.zoomLens.css({
                            width: String(o.options.lensSize) + "px",
                            height: String(o.options.lensSize) + "px"
                        })), o.zoomContainer.css({
                            top: o.nzOffset.top
                        }), o.zoomContainer.css({
                            left: o.nzOffset.left
                        }), o.mouseLeft = parseInt(e.pageX - o.nzOffset.left), o.mouseTop = parseInt(e.pageY - o.nzOffset.top), "window" == o.options.zoomType && (o.Etoppos = o.mouseTop < o.zoomLens.height() / 2, o.Eboppos = o.mouseTop > o.nzHeight - o.zoomLens.height() / 2 - 2 * o.options.lensBorderSize, o.Eloppos = o.mouseLeft < 0 + o.zoomLens.width() / 2, o.Eroppos = o.mouseLeft > o.nzWidth - o.zoomLens.width() / 2 - 2 * o.options.lensBorderSize), "inner" == o.options.zoomType && (o.Etoppos = o.mouseTop < o.nzHeight / 2 / o.heightRatio, o.Eboppos = o.mouseTop > o.nzHeight - o.nzHeight / 2 / o.heightRatio, o.Eloppos = o.mouseLeft < 0 + o.nzWidth / 2 / o.widthRatio, o.Eroppos = o.mouseLeft > o.nzWidth - o.nzWidth / 2 / o.widthRatio - 2 * o.options.lensBorderSize), o.mouseLeft <= 0 || o.mouseTop < 0 || o.mouseLeft > o.nzWidth || o.mouseTop > o.nzHeight ? o.setElements("hide") : (o.options.showLens && (o.lensLeftPos = String(o.mouseLeft - o.zoomLens.width() / 2), o.lensTopPos = String(o.mouseTop - o.zoomLens.height() / 2)), o.Etoppos && (o.lensTopPos = 0), o.Eloppos && (o.windowLeftPos = 0, o.lensLeftPos = 0, o.tintpos = 0), "window" == o.options.zoomType && (o.Eboppos && (o.lensTopPos = Math.max(o.nzHeight - o.zoomLens.height() - 2 * o.options.lensBorderSize, 0)), o.Eroppos && (o.lensLeftPos = o.nzWidth - o.zoomLens.width() - 2 * o.options.lensBorderSize)), "inner" == o.options.zoomType && (o.Eboppos && (o.lensTopPos = Math.max(o.nzHeight - 2 * o.options.lensBorderSize, 0)), o.Eroppos && (o.lensLeftPos = o.nzWidth - o.nzWidth - 2 * o.options.lensBorderSize)), "lens" == o.options.zoomType && (o.windowLeftPos = String(-1 * ((e.pageX - o.nzOffset.left) * o.widthRatio - o.zoomLens.width() / 2)), o.windowTopPos = String(-1 * ((e.pageY - o.nzOffset.top) * o.heightRatio - o.zoomLens.height() / 2)), o.zoomLens.css({
                            backgroundPosition: o.windowLeftPos + "px " + o.windowTopPos + "px"
                        }), o.changeBgSize && (o.nzHeight > o.nzWidth ? ("lens" == o.options.zoomType && o.zoomLens.css({
                            "background-size": o.largeWidth / o.newvalueheight + "px " + o.largeHeight / o.newvalueheight + "px"
                        }), o.zoomWindow.css({
                            "background-size": o.largeWidth / o.newvalueheight + "px " + o.largeHeight / o.newvalueheight + "px"
                        })) : ("lens" == o.options.zoomType && o.zoomLens.css({
                            "background-size": o.largeWidth / o.newvaluewidth + "px " + o.largeHeight / o.newvaluewidth + "px"
                        }), o.zoomWindow.css({
                            "background-size": o.largeWidth / o.newvaluewidth + "px " + o.largeHeight / o.newvaluewidth + "px"
                        })), o.changeBgSize = !1), o.setWindowPostition(e)), o.options.tint && "inner" != o.options.zoomType && o.setTintPosition(e), "window" == o.options.zoomType && o.setWindowPostition(e), "inner" == o.options.zoomType && o.setWindowPostition(e), o.options.showLens && (o.fullwidth && "lens" != o.options.zoomType && (o.lensLeftPos = 0), o.zoomLens.css({
                            left: o.lensLeftPos + "px",
                            top: o.lensTopPos + "px"
                        })))
                    },
                    showHideWindow: function(e) {
                        var o = this;
                        "show" == e && (o.isWindowActive || (o.options.zoomWindowFadeIn ? o.zoomWindow.stop(!0, !0, !1).fadeIn(o.options.zoomWindowFadeIn) : o.zoomWindow.show(), o.isWindowActive = !0)), "hide" == e && o.isWindowActive && (o.options.zoomWindowFadeOut ? o.zoomWindow.stop(!0, !0).fadeOut(o.options.zoomWindowFadeOut) : o.zoomWindow.hide(), o.isWindowActive = !1)
                    },
                    showHideLens: function(e) {
                        var o = this;
                        "show" == e && (o.isLensActive || (o.options.lensFadeIn ? o.zoomLens.stop(!0, !0, !1).fadeIn(o.options.lensFadeIn) : o.zoomLens.show(), o.isLensActive = !0)), "hide" == e && o.isLensActive && (o.options.lensFadeOut ? o.zoomLens.stop(!0, !0).fadeOut(o.options.lensFadeOut) : o.zoomLens.hide(), o.isLensActive = !1)
                    },
                    showHideTint: function(e) {
                        var o = this;
                        "show" == e && (o.isTintActive || (o.options.zoomTintFadeIn ? o.zoomTint.css({
                            opacity: o.options.tintOpacity
                        }).animate().stop(!0, !0).fadeIn("slow") : (o.zoomTint.css({
                            opacity: o.options.tintOpacity
                        }).animate(), o.zoomTint.show()), o.isTintActive = !0)), "hide" == e && o.isTintActive && (o.options.zoomTintFadeOut ? o.zoomTint.stop(!0, !0).fadeOut(o.options.zoomTintFadeOut) : o.zoomTint.hide(), o.isTintActive = !1)
                    },
                    setLensPostition: function(e) {},
                    setWindowPostition: function(o) {
                        var t = this;
                        if (isNaN(t.options.zoomWindowPosition)) t.externalContainer = e("#" + t.options.zoomWindowPosition), t.externalContainerWidth = t.externalContainer.width(), t.externalContainerHeight = t.externalContainer.height(), t.externalContainerOffset = t.externalContainer.offset(), t.windowOffsetTop = t.externalContainerOffset.top, t.windowOffsetLeft = t.externalContainerOffset.left;
                        else switch (t.options.zoomWindowPosition) {
                            case 1:
                                t.windowOffsetTop = t.options.zoomWindowOffety, t.windowOffsetLeft = +t.nzWidth;
                                break;
                            case 2:
                                t.options.zoomWindowHeight > t.nzHeight && (t.windowOffsetTop = -1 * (t.options.zoomWindowHeight / 2 - t.nzHeight / 2), t.windowOffsetLeft = t.nzWidth);
                                break;
                            case 3:
                                t.windowOffsetTop = t.nzHeight - t.zoomWindow.height() - 2 * t.options.borderSize, t.windowOffsetLeft = t.nzWidth;
                                break;
                            case 4:
                                t.windowOffsetTop = t.nzHeight, t.windowOffsetLeft = t.nzWidth;
                                break;
                            case 5:
                                t.windowOffsetTop = t.nzHeight, t.windowOffsetLeft = t.nzWidth - t.zoomWindow.width() - 2 * t.options.borderSize;
                                break;
                            case 6:
                                t.options.zoomWindowHeight > t.nzHeight && (t.windowOffsetTop = t.nzHeight, t.windowOffsetLeft = -1 * (t.options.zoomWindowWidth / 2 - t.nzWidth / 2 + 2 * t.options.borderSize));
                                break;
                            case 7:
                                t.windowOffsetTop = t.nzHeight, t.windowOffsetLeft = 0;
                                break;
                            case 8:
                                t.windowOffsetTop = t.nzHeight, t.windowOffsetLeft = -1 * (t.zoomWindow.width() + 2 * t.options.borderSize);
                                break;
                            case 9:
                                t.windowOffsetTop = t.nzHeight - t.zoomWindow.height() - 2 * t.options.borderSize, t.windowOffsetLeft = -1 * (t.zoomWindow.width() + 2 * t.options.borderSize);
                                break;
                            case 10:
                                t.options.zoomWindowHeight > t.nzHeight && (t.windowOffsetTop = -1 * (t.options.zoomWindowHeight / 2 - t.nzHeight / 2), t.windowOffsetLeft = -1 * (t.zoomWindow.width() + 2 * t.options.borderSize));
                                break;
                            case 11:
                                t.windowOffsetTop = t.options.zoomWindowOffety, t.windowOffsetLeft = -1 * (t.zoomWindow.width() + 2 * t.options.borderSize);
                                break;
                            case 12:
                                t.windowOffsetTop = -1 * (t.zoomWindow.height() + 2 * t.options.borderSize), t.windowOffsetLeft = -1 * (t.zoomWindow.width() + 2 * t.options.borderSize);
                                break;
                            case 13:
                                t.windowOffsetTop = -1 * (t.zoomWindow.height() + 2 * t.options.borderSize), t.windowOffsetLeft = 0;
                                break;
                            case 14:
                                t.options.zoomWindowHeight > t.nzHeight && (t.windowOffsetTop = -1 * (t.zoomWindow.height() + 2 * t.options.borderSize), t.windowOffsetLeft = -1 * (t.options.zoomWindowWidth / 2 - t.nzWidth / 2 + 2 * t.options.borderSize));
                                break;
                            case 15:
                                t.windowOffsetTop = -1 * (t.zoomWindow.height() + 2 * t.options.borderSize), t.windowOffsetLeft = t.nzWidth - t.zoomWindow.width() - 2 * t.options.borderSize;
                                break;
                            case 16:
                                t.windowOffsetTop = -1 * (t.zoomWindow.height() + 2 * t.options.borderSize), t.windowOffsetLeft = t.nzWidth;
                                break;
                            default:
                                t.windowOffsetTop = t.options.zoomWindowOffety, t.windowOffsetLeft = t.nzWidth
                        }
                        t.isWindowSet = !0, t.windowOffsetTop = t.windowOffsetTop + t.options.zoomWindowOffety, t.windowOffsetLeft = t.windowOffsetLeft + t.options.zoomWindowOffetx, t.zoomWindow.css({
                            top: t.windowOffsetTop
                        }), t.zoomWindow.css({
                            left: t.windowOffsetLeft
                        }), "inner" == t.options.zoomType && (t.zoomWindow.css({
                            top: 0
                        }), t.zoomWindow.css({
                            left: 0
                        })), t.windowLeftPos = String(-1 * ((o.pageX - t.nzOffset.left) * t.widthRatio - t.zoomWindow.width() / 2)), t.windowTopPos = String(-1 * ((o.pageY - t.nzOffset.top) * t.heightRatio - t.zoomWindow.height() / 2)), t.Etoppos && (t.windowTopPos = 0), t.Eloppos && (t.windowLeftPos = 0), t.Eboppos && (t.windowTopPos = -1 * (t.largeHeight / t.currentZoomLevel - t.zoomWindow.height())), t.Eroppos && (t.windowLeftPos = -1 * (t.largeWidth / t.currentZoomLevel - t.zoomWindow.width())), t.fullheight && (t.windowTopPos = 0), t.fullwidth && (t.windowLeftPos = 0), "window" != t.options.zoomType && "inner" != t.options.zoomType || (1 == t.zoomLock && (t.widthRatio <= 1 && (t.windowLeftPos = 0), t.heightRatio <= 1 && (t.windowTopPos = 0)), t.largeHeight < t.options.zoomWindowHeight && (t.windowTopPos = 0), t.largeWidth < t.options.zoomWindowWidth && (t.windowLeftPos = 0), t.options.easing ? (t.xp || (t.xp = 0), t.yp || (t.yp = 0), t.loop || (t.loop = setInterval(function() {
                            t.xp += (t.windowLeftPos - t.xp) / t.options.easingAmount, t.yp += (t.windowTopPos - t.yp) / t.options.easingAmount, t.scrollingLock ? (clearInterval(t.loop), t.xp = t.windowLeftPos, t.yp = t.windowTopPos, t.xp = -1 * ((o.pageX - t.nzOffset.left) * t.widthRatio - t.zoomWindow.width() / 2), t.yp = -1 * ((o.pageY - t.nzOffset.top) * t.heightRatio - t.zoomWindow.height() / 2), t.changeBgSize && (t.nzHeight > t.nzWidth ? ("lens" == t.options.zoomType && t.zoomLens.css({
                                "background-size": t.largeWidth / t.newvalueheight + "px " + t.largeHeight / t.newvalueheight + "px"
                            }), t.zoomWindow.css({
                                "background-size": t.largeWidth / t.newvalueheight + "px " + t.largeHeight / t.newvalueheight + "px"
                            })) : ("lens" != t.options.zoomType && t.zoomLens.css({
                                "background-size": t.largeWidth / t.newvaluewidth + "px " + t.largeHeight / t.newvalueheight + "px"
                            }), t.zoomWindow.css({
                                "background-size": t.largeWidth / t.newvaluewidth + "px " + t.largeHeight / t.newvaluewidth + "px"
                            })), t.changeBgSize = !1), t.zoomWindow.css({
                                backgroundPosition: t.windowLeftPos + "px " + t.windowTopPos + "px"
                            }), t.scrollingLock = !1, t.loop = !1) : (t.changeBgSize && (t.nzHeight > t.nzWidth ? ("lens" == t.options.zoomType && t.zoomLens.css({
                                "background-size": t.largeWidth / t.newvalueheight + "px " + t.largeHeight / t.newvalueheight + "px"
                            }), t.zoomWindow.css({
                                "background-size": t.largeWidth / t.newvalueheight + "px " + t.largeHeight / t.newvalueheight + "px"
                            })) : ("lens" != t.options.zoomType && t.zoomLens.css({
                                "background-size": t.largeWidth / t.newvaluewidth + "px " + t.largeHeight / t.newvaluewidth + "px"
                            }), t.zoomWindow.css({
                                "background-size": t.largeWidth / t.newvaluewidth + "px " + t.largeHeight / t.newvaluewidth + "px"
                            })), t.changeBgSize = !1), t.zoomWindow.css({
                                backgroundPosition: t.xp + "px " + t.yp + "px"
                            }))
                        }, 16))) : (t.changeBgSize && (t.nzHeight > t.nzWidth ? ("lens" == t.options.zoomType && t.zoomLens.css({
                            "background-size": t.largeWidth / t.newvalueheight + "px " + t.largeHeight / t.newvalueheight + "px"
                        }), t.zoomWindow.css({
                            "background-size": t.largeWidth / t.newvalueheight + "px " + t.largeHeight / t.newvalueheight + "px"
                        })) : ("lens" == t.options.zoomType && t.zoomLens.css({
                            "background-size": t.largeWidth / t.newvaluewidth + "px " + t.largeHeight / t.newvaluewidth + "px"
                        }), t.largeHeight / t.newvaluewidth < t.options.zoomWindowHeight ? t.zoomWindow.css({
                            "background-size": t.largeWidth / t.newvaluewidth + "px " + t.largeHeight / t.newvaluewidth + "px"
                        }) : t.zoomWindow.css({
                            "background-size": t.largeWidth / t.newvalueheight + "px " + t.largeHeight / t.newvalueheight + "px"
                        })), t.changeBgSize = !1), t.zoomWindow.css({
                            backgroundPosition: t.windowLeftPos + "px " + t.windowTopPos + "px"
                        })))
                    },
                    setTintPosition: function(e) {
                        var o = this;
                        o.nzOffset = o.jQueryelem.offset(), o.tintpos = String(-1 * (e.pageX - o.nzOffset.left - o.zoomLens.width() / 2)), o.tintposy = String(-1 * (e.pageY - o.nzOffset.top - o.zoomLens.height() / 2)), o.Etoppos && (o.tintposy = 0), o.Eloppos && (o.tintpos = 0), o.Eboppos && (o.tintposy = -1 * (o.nzHeight - o.zoomLens.height() - 2 * o.options.lensBorderSize)), o.Eroppos && (o.tintpos = -1 * (o.nzWidth - o.zoomLens.width() - 2 * o.options.lensBorderSize)), o.options.tint && (o.fullheight && (o.tintposy = 0), o.fullwidth && (o.tintpos = 0), o.zoomTintImage.css({
                            left: o.tintpos + "px"
                        }), o.zoomTintImage.css({
                            top: o.tintposy + "px"
                        }))
                    },
                    swaptheimage: function(o, t) {
                        var i = this,
                            n = new Image;
                        i.options.loadingIcon && (i.spinner = e("<div style=\"background: url('" + i.options.loadingIcon + "') no-repeat center;height:" + i.nzHeight + "px;width:" + i.nzWidth + 'px;z-index: 2000;position: absolute; background-position: center center;"></div>'), i.jQueryelem.after(i.spinner)), i.options.onImageSwap(i.jQueryelem), n.onload = function() {
                            i.largeWidth = n.width, i.largeHeight = n.height, i.zoomImage = t, i.zoomWindow.css({
                                "background-size": i.largeWidth + "px " + i.largeHeight + "px"
                            }), i.zoomWindow.css({
                                "background-size": i.largeWidth + "px " + i.largeHeight + "px"
                            }), i.swapAction(o, t)
                        }, n.src = t
                    },
                    swapAction: function(o, t) {
                        var i = this,
                            n = new Image;
                        if (n.onload = function() {
                                i.nzHeight = n.height, i.nzWidth = n.width, i.options.onImageSwapComplete(i.jQueryelem), i.doneCallback()
                            }, n.src = o, i.currentZoomLevel = i.options.zoomLevel, i.options.maxZoomLevel = !1, "lens" == i.options.zoomType && i.zoomLens.css({
                                backgroundImage: "url('" + t + "')"
                            }), "window" == i.options.zoomType && i.zoomWindow.css({
                                backgroundImage: "url('" + t + "')"
                            }), "inner" == i.options.zoomType && i.zoomWindow.css({
                                backgroundImage: "url('" + t + "')"
                            }), i.currentImage = t, i.options.imageCrossfade) {
                            var s = i.jQueryelem,
                                a = s.clone();
                            if (i.jQueryelem.attr("src", o), i.jQueryelem.after(a), a.stop(!0).fadeOut(i.options.imageCrossfade, function() {
                                    e(this).remove()
                                }), i.jQueryelem.width("auto").removeAttr("width"), i.jQueryelem.height("auto").removeAttr("height"), s.fadeIn(i.options.imageCrossfade), i.options.tint && "inner" != i.options.zoomType) {
                                var l = i.zoomTintImage,
                                    h = l.clone();
                                i.zoomTintImage.attr("src", t), i.zoomTintImage.after(h), h.stop(!0).fadeOut(i.options.imageCrossfade, function() {
                                    e(this).remove()
                                }), l.fadeIn(i.options.imageCrossfade), i.zoomTint.css({
                                    height: i.jQueryelem.height()
                                }), i.zoomTint.css({
                                    width: i.jQueryelem.width()
                                })
                            }
                            i.zoomContainer.css("height", i.jQueryelem.height()), i.zoomContainer.css("width", i.jQueryelem.width()), "inner" == i.options.zoomType && (i.options.constrainType || (i.zoomWrap.parent().css("height", i.jQueryelem.height()), i.zoomWrap.parent().css("width", i.jQueryelem.width()), i.zoomWindow.css("height", i.jQueryelem.height()), i.zoomWindow.css("width", i.jQueryelem.width()))), i.options.imageCrossfade && (i.zoomWrap.css("height", i.jQueryelem.height()), i.zoomWrap.css("width", i.jQueryelem.width()))
                        } else i.jQueryelem.attr("src", o), i.options.tint && (i.zoomTintImage.attr("src", t), i.zoomTintImage.attr("height", i.jQueryelem.height()), i.zoomTintImage.css({
                            height: i.jQueryelem.height()
                        }), i.zoomTint.css({
                            height: i.jQueryelem.height()
                        })), i.zoomContainer.css("height", i.jQueryelem.height()), i.zoomContainer.css("width", i.jQueryelem.width()), i.options.imageCrossfade && (i.zoomWrap.css("height", i.jQueryelem.height()), i.zoomWrap.css("width", i.jQueryelem.width()));
                        i.options.constrainType && ("height" == i.options.constrainType && (i.zoomContainer.css("height", i.options.constrainSize), i.zoomContainer.css("width", "auto"), i.options.imageCrossfade ? (i.zoomWrap.css("height", i.options.constrainSize), i.zoomWrap.css("width", "auto"), i.constwidth = i.zoomWrap.width()) : (i.jQueryelem.css("height", i.options.constrainSize), i.jQueryelem.css("width", "auto"), i.constwidth = i.jQueryelem.width()), "inner" == i.options.zoomType && (i.zoomWrap.parent().css("height", i.options.constrainSize), i.zoomWrap.parent().css("width", i.constwidth), i.zoomWindow.css("height", i.options.constrainSize), i.zoomWindow.css("width", i.constwidth)), i.options.tint && (i.tintContainer.css("height", i.options.constrainSize), i.tintContainer.css("width", i.constwidth), i.zoomTint.css("height", i.options.constrainSize), i.zoomTint.css("width", i.constwidth), i.zoomTintImage.css("height", i.options.constrainSize), i.zoomTintImage.css("width", i.constwidth))), "width" == i.options.constrainType && (i.zoomContainer.css("height", "auto"), i.zoomContainer.css("width", i.options.constrainSize), i.options.imageCrossfade ? (i.zoomWrap.css("height", "auto"), i.zoomWrap.css("width", i.options.constrainSize), i.constheight = i.zoomWrap.height()) : (i.jQueryelem.css("height", "auto"), i.jQueryelem.css("width", i.options.constrainSize), i.constheight = i.jQueryelem.height()), "inner" == i.options.zoomType && (i.zoomWrap.parent().css("height", i.constheight), i.zoomWrap.parent().css("width", i.options.constrainSize), i.zoomWindow.css("height", i.constheight), i.zoomWindow.css("width", i.options.constrainSize)), i.options.tint && (i.tintContainer.css("height", i.constheight), i.tintContainer.css("width", i.options.constrainSize), i.zoomTint.css("height", i.constheight), i.zoomTint.css("width", i.options.constrainSize), i.zoomTintImage.css("height", i.constheight), i.zoomTintImage.css("width", i.options.constrainSize))))
                    },
                    doneCallback: function() {
                        var e = this;
                        e.options.loadingIcon && e.spinner.hide(), e.nzOffset = e.jQueryelem.offset(), e.nzWidth = e.jQueryelem.width(), e.nzHeight = e.jQueryelem.height(), e.currentZoomLevel = e.options.zoomLevel, e.widthRatio = e.largeWidth / e.nzWidth, e.heightRatio = e.largeHeight / e.nzHeight, "window" == e.options.zoomType && (e.nzHeight < e.options.zoomWindowWidth / e.widthRatio ? lensHeight = e.nzHeight : lensHeight = String(e.options.zoomWindowHeight / e.heightRatio), e.options.zoomWindowWidth < e.options.zoomWindowWidth ? lensWidth = e.nzWidth : lensWidth = e.options.zoomWindowWidth / e.widthRatio, e.zoomLens && (e.zoomLens.css("width", lensWidth), e.zoomLens.css("height", lensHeight)))
                    },
                    getCurrentImage: function() {
                        return this.zoomImage
                    },
                    getGalleryList: function() {
                        var o = this;
                        return o.gallerylist = [], o.options.gallery ? e("#" + o.options.gallery + " a").each(function() {
                            var t = "";
                            e(this).data("zoom-image") ? t = e(this).data("zoom-image") : e(this).data("image") && (t = e(this).data("image")), t == o.zoomImage ? o.gallerylist.unshift({
                                href: "" + t,
                                title: e(this).find("img").attr("title")
                            }) : o.gallerylist.push({
                                href: "" + t,
                                title: e(this).find("img").attr("title")
                            })
                        }) : o.gallerylist.push({
                            href: "" + o.zoomImage,
                            title: e(this).find("img").attr("title")
                        }), o.gallerylist
                    },
                    changeZoomLevel: function(e) {
                        var o = this;
                        o.scrollingLock = !0, o.newvalue = parseFloat(e).toFixed(2), newvalue = parseFloat(e).toFixed(2), maxheightnewvalue = o.largeHeight / (o.options.zoomWindowHeight / o.nzHeight * o.nzHeight), maxwidthtnewvalue = o.largeWidth / (o.options.zoomWindowWidth / o.nzWidth * o.nzWidth), "inner" != o.options.zoomType && (maxheightnewvalue <= newvalue ? (o.heightRatio = o.largeHeight / maxheightnewvalue / o.nzHeight, o.newvalueheight = maxheightnewvalue, o.fullheight = !0) : (o.heightRatio = o.largeHeight / newvalue / o.nzHeight, o.newvalueheight = newvalue, o.fullheight = !1), maxwidthtnewvalue <= newvalue ? (o.widthRatio = o.largeWidth / maxwidthtnewvalue / o.nzWidth, o.newvaluewidth = maxwidthtnewvalue, o.fullwidth = !0) : (o.widthRatio = o.largeWidth / newvalue / o.nzWidth, o.newvaluewidth = newvalue, o.fullwidth = !1), "lens" == o.options.zoomType && (maxheightnewvalue <= newvalue ? (o.fullwidth = !0, o.newvaluewidth = maxheightnewvalue) : (o.widthRatio = o.largeWidth / newvalue / o.nzWidth, o.newvaluewidth = newvalue, o.fullwidth = !1))), "inner" == o.options.zoomType && (maxheightnewvalue = parseFloat(o.largeHeight / o.nzHeight).toFixed(2), maxwidthtnewvalue = parseFloat(o.largeWidth / o.nzWidth).toFixed(2), newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue), newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue), maxheightnewvalue <= newvalue ? (o.heightRatio = o.largeHeight / newvalue / o.nzHeight, newvalue > maxheightnewvalue ? o.newvalueheight = maxheightnewvalue : o.newvalueheight = newvalue, o.fullheight = !0) : (o.heightRatio = o.largeHeight / newvalue / o.nzHeight, newvalue > maxheightnewvalue ? o.newvalueheight = maxheightnewvalue : o.newvalueheight = newvalue, o.fullheight = !1), maxwidthtnewvalue <= newvalue ? (o.widthRatio = o.largeWidth / newvalue / o.nzWidth, newvalue > maxwidthtnewvalue ? o.newvaluewidth = maxwidthtnewvalue : o.newvaluewidth = newvalue, o.fullwidth = !0) : (o.widthRatio = o.largeWidth / newvalue / o.nzWidth, o.newvaluewidth = newvalue, o.fullwidth = !1)), scrcontinue = !1, "inner" == o.options.zoomType && (o.nzWidth >= o.nzHeight && (o.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, o.fullheight = !0, o.fullwidth = !0)), o.nzHeight > o.nzWidth && (o.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, o.fullheight = !0, o.fullwidth = !0))), "inner" != o.options.zoomType && (scrcontinue = !0), scrcontinue && (o.zoomLock = 0, o.changeZoom = !0, o.options.zoomWindowHeight / o.heightRatio <= o.nzHeight && (o.currentZoomLevel = o.newvalueheight, "lens" != o.options.zoomType && "inner" != o.options.zoomType && (o.changeBgSize = !0, o.zoomLens.css({
                            height: String(o.options.zoomWindowHeight / o.heightRatio) + "px"
                        })), "lens" != o.options.zoomType && "inner" != o.options.zoomType || (o.changeBgSize = !0)), o.options.zoomWindowWidth / o.widthRatio <= o.nzWidth && ("inner" != o.options.zoomType && o.newvaluewidth > o.newvalueheight && (o.currentZoomLevel = o.newvaluewidth), "lens" != o.options.zoomType && "inner" != o.options.zoomType && (o.changeBgSize = !0, o.zoomLens.css({
                            width: String(o.options.zoomWindowWidth / o.widthRatio) + "px"
                        })), "lens" != o.options.zoomType && "inner" != o.options.zoomType || (o.changeBgSize = !0)), "inner" == o.options.zoomType && (o.changeBgSize = !0, o.nzWidth > o.nzHeight && (o.currentZoomLevel = o.newvaluewidth), o.nzHeight > o.nzWidth && (o.currentZoomLevel = o.newvaluewidth))), o.setPosition(o.currentLoc)
                    },
                    closeAll: function() {
                        self.zoomWindow && self.zoomWindow.hide(), self.zoomLens && self.zoomLens.hide(), self.zoomTint && self.zoomTint.hide()
                    },
                    changeState: function(e) {
                        "enable" == e && (this.options.zoomEnabled = !0), "disable" == e && (this.options.zoomEnabled = !1)
                    }
                };
                e.fn.elevateZoom = function(o) {
                    return this.each(function() {
                        var t = Object.create(n);
                        t.init(o, this), e.data(this, "elevateZoom", t)

                    })
                }, e.fn.elevateZoom.options = {
                    zoomActivation: "hover",
                    zoomEnabled: !0,
                    preloading: 1,
                    zoomLevel: 1,
                    scrollZoom: !1,
                    scrollZoomIncrement: .1,
                    minZoomLevel: !1,
                    maxZoomLevel: !1,
                    easing: !1,
                    easingAmount: 12,
                    lensSize: 200,
                    zoomWindowWidth: 400,
                    zoomWindowHeight: 400,
                    zoomWindowOffetx: 0,
                    zoomWindowOffety: 0,
                    zoomWindowPosition: 1,
                    zoomWindowBgColour: "#fff",
                    lensFadeIn: !1,
                    lensFadeOut: !1,
                    debug: !1,
                    zoomWindowFadeIn: !1,
                    zoomWindowFadeOut: !1,
                    zoomWindowAlwaysShow: !1,
                    zoomTintFadeIn: !1,
                    zoomTintFadeOut: !1,
                    borderSize: 4,
                    showLens: !0,
                    borderColour: "#888",
                    lensBorderSize: 1,
                    lensBorderColour: "#000",
                    lensShape: "square",
                    zoomType: "window",
                    containLensZoom: !1,
                    lensColour: "white",
                    lensOpacity: .4,
                    lenszoom: !1,
                    tint: !1,
                    tintColour: "#333",
                    tintOpacity: .4,
                    gallery: !1,
                    galleryActiveClass: "zoomGalleryActive",
                    imageCrossfade: !1,
                    constrainType: !1,
                    constrainSize: !1,
                    loadingIcon: !1,
                    cursor: "default",
                    responsive: !0,
                    onComplete: e.noop,
                    onZoomedImageLoaded: function() {},
                    onImageSwap: e.noop,
                    onImageSwapComplete: e.noop
                }
            }

        (jQuery, window, document),
        jQuery("#product-zoom").length > 0 && jQuery("#product-zoom").elevateZoom({
                zoomType: "inner",
                cursor: "crosshair",
                zoomWindowFadeIn: 500,
                zoomWindowFadeOut: 750,
                gallery: "gallery_01"
            }),
            jQuery("#gallery_01 .slider-items").owlCarousel({
                autoplay: !1,
                items: 4,
                itemsDesktop: [1024, 3],
                itemsDesktopSmall: [900, 2],
                itemsTablet: [600, 3],
                itemsMobile: [320, 2],
                navigation: !0,
                navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
                slideSpeed: 500,
                pagination: !1
            })


    }),
    /* Countdown Timer */

    ! function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function(e) {
        "use strict";
        var o = [],
            t = [],
            i = {
                precision: 100,
                elapse: !1
            };
        t.push(/^[0-9]*$/.source), t.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), t.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), t = new RegExp(t.join("|"));
        var n = {
                Y: "years",
                m: "months",
                n: "daysToMonth",
                w: "weeks",
                d: "daysToWeek",
                D: "totalDays",
                H: "hours",
                M: "minutes",
                S: "seconds"
            },
            s = function(t, n, s) {
                this.el = t, this.$el = e(t), this.interval = null, this.offset = {}, this.options = e.extend({}, i), this.instanceNumber = o.length, o.push(this), this.$el.data("countdown-instance", this.instanceNumber), s && ("function" == typeof s ? (this.$el.on("update.countdown", s), this.$el.on("stoped.countdown", s), this.$el.on("finish.countdown", s)) : this.options = e.extend({}, i, s)), this.setFinalDate(n), this.start()
            };
        e.extend(s.prototype, {
            start: function() {
                null !== this.interval && clearInterval(this.interval);
                var e = this;
                this.update(), this.interval = setInterval(function() {
                    e.update.call(e)
                }, this.options.precision)
            },
            stop: function() {
                clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
            },
            toggle: function() {
                this.interval ? this.stop() : this.start()
            },
            pause: function() {
                this.stop()
            },
            resume: function() {
                this.start()
            },
            remove: function() {
                this.stop.call(this), o[this.instanceNumber] = null, delete this.$el.data().countdownInstance
            },
            setFinalDate: function(e) {
                this.finalDate = function(e) {
                    if (e instanceof Date) return e;
                    if (String(e).match(t)) return String(e).match(/^[0-9]*$/) && (e = Number(e)), String(e).match(/\-/) && (e = String(e).replace(/\-/g, "/")), new Date(e);
                    throw new Error("Couldn't cast `" + e + "` to a date object.")
                }(e)
            },
            update: function() {
                if (0 !== this.$el.closest("html").length) {
                    var o, t = void 0 !== e._data(this.el, "events"),
                        i = new Date;
                    o = this.finalDate.getTime() - i.getTime(), o = Math.ceil(o / 1e3), o = !this.options.elapse && o < 0 ? 0 : Math.abs(o), this.totalSecsLeft !== o && t && (this.totalSecsLeft = o, this.elapsed = i >= this.finalDate, this.offset = {
                        seconds: this.totalSecsLeft % 60,
                        minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                        hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                        days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                        daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                        daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                        totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                        weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                        months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                        years: Math.abs(this.finalDate.getFullYear() - i.getFullYear())
                    }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
                } else this.remove()
            },
            dispatchEvent: function(o) {
                var t, i = e.Event(o + ".countdown");
                i.finalDate = this.finalDate, i.elapsed = this.elapsed, i.offset = e.extend({}, this.offset), i.strftime = (t = this.offset, function(e) {
                    var o, i, s, a, l, h = e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                    if (h)
                        for (var r = 0, d = h.length; r < d; ++r) {
                            var p = h[r].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                                m = (o = p[0].toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), new RegExp(o)),
                                c = p[1] || "",
                                w = p[3] || "",
                                g = null;
                            p = p[2], n.hasOwnProperty(p) && (g = n[p], g = Number(t[g])), null !== g && ("!" === c && (s = g, a = void 0, l = void 0, a = "s", l = "", (i = w) && (1 === (i = i.replace(/(:|;|\s)/gi, "").split(/\,/)).length ? a = i[0] : (l = i[0], a = i[1])), g = 1 === Math.abs(s) ? l : a), "" === c && g < 10 && (g = "0" + g.toString()), e = e.replace(m, g.toString()))
                        }
                    return e.replace(/%%/, "%")
                }), this.$el.trigger(i)
            }
        }), e.fn.countdown = function() {
            var t = Array.prototype.slice.call(arguments, 0);
            return this.each(function() {
                var i = e(this).data("countdown-instance");
                if (void 0 !== i) {
                    var n = o[i],
                        a = t[0];
                    s.prototype.hasOwnProperty(a) ? n[a].apply(n, t.slice(1)) : null === String(a).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (n.setFinalDate.call(n, a), n.start()) : e.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, a))
                } else new s(this, t[0], t[1])
            })
        }
    }),


    /* Mobile Menu */

    function(e) {
        "use strict";
        e.fn.mobileMenu = function(o) {
            var t = {
                MenuWidth: 250,
                SlideSpeed: 300,
                WindowsMaxWidth: 767,
                PagePush: !0,
                FromLeft: !0,
                Overlay: !0,
                CollapseMenu: !0,
                ClassName: "mobile-menu"
            };
            return this.each(function() {
                function i() {
                    var o = 0,
                        t = e(document).height();
                    return l.find("." + g + " > li").each(function() {
                        var t = e(this).height();
                        o += t
                    }), t >= o && (o = t), o
                }

                function n(o) {
                    w = e("." + g + " span.expand").height(), 1 === o && l.find("." + g + " > li:has(span)").each(function() {
                        var o = (e(this).height() - w) / 2;
                        e(this).find("span").css({
                            "padding-bottom": o,
                            "padding-top": o
                        })
                    }), 2 === o && l.find("." + g + " > li > ul > li:has(span)").each(function() {
                        var o = (e(this).height() - w) / 2;
                        e(this).find("span").css({
                            "padding-bottom": o,
                            "padding-top": o
                        })
                    })
                }

                function s() {
                    1 == a.FromLeft ? (1 == a.PagePush && d.animate({
                        left: "0"
                    }, a.SlideSpeed, "linear"), l.animate({
                        left: -a.MenuWidth
                    }, a.SlideSpeed, "linear", function() {
                        r.removeClass("mmPushBody"), h.css("height", 0).removeClass("overlay"), l.css("display", "none"), p = !1
                    })) : (1 == a.PagePush && d.animate({
                        left: "0"
                    }, a.SlideSpeed, "linear"), l.animate({
                        right: -a.MenuWidth
                    }, a.SlideSpeed, "linear", function() {
                        r.removeClass("mmPushBody"), h.css("height", 0).removeClass("overlay"), l.css("display", "none"), p = !1
                    }))
                }
                var a = e.extend({}, t, o),
                    l = e(this),
                    h = e("#overlay"),
                    r = e("body"),
                    d = e("#page"),
                    p = !1,
                    m = !1,
                    c = !1,
                    w = 0,
                    g = "";
                1 == a.FromLeft ? l.css("left", -a.MenuWidth) : l.css("right", -a.MenuWidth), l.find("ul:first").addClass(a.ClassName), g = a.ClassName, l.css("width", a.MenuWidth), l.find("." + g + " ul").css("display", "none"), l.find("li ul").parent().prepend('<span class="expand fa fa-plus"></span>'), e("." + g).append('<li style="height: 2px;"></li>'), e("." + g + " li:has(span)").each(function() {
                    e(this).find("a:first").css("padding-right", 55)
                }), e(".mm-toggle").click(function() {
                    l.css("height", e(document).height()), 1 == a.Overlay && h.css("height", e(document).height()), p ? s() : (r.addClass("mmPushBody"), 1 == a.Overlay ? h.addClass("overlay") : h.addClass("overlay").css("opacity", 0), l.css({
                        display: "block",
                        overflow: "hidden"
                    }), 1 == a.FromLeft ? (1 == a.PagePush && d.animate({
                        left: a.MenuWidth
                    }, a.SlideSpeed, "linear"), l.animate({
                        left: "0"
                    }, a.SlideSpeed, "linear", function() {
                        l.css("height", i()), p = !0
                    })) : (1 == a.PagePush && d.animate({
                        left: -a.MenuWidth
                    }, a.SlideSpeed, "linear"), l.animate({
                        right: "0"
                    }, a.SlideSpeed, "linear", function() {
                        l.css("height", i()), p = !0
                    })), m || (n(1), m = !0))
                }), e(window).resize(function() {
                    e(window).width() >= a.WindowsMaxWidth && p && l.css("left") != -a.MenuWidth && s()
                }), e("." + g + " > li > span.expand").click(function() {
                    if (1 == a.CollapseMenu) {
                        var o = e("." + g + " li span");
                        o.hasClass("open") && "none" === e(this).next().next().css("display") && (e("." + g + " li ul").slideUp(), o.hasClass("open") ? o.removeClass("fa fa-minus").addClass("fa fa-plus") : o.removeClass("fa fa-plus").addClass("fa fa-minus"), o.removeClass("open"))
                    }
                    e(this).nextAll("." + g + " ul").slideToggle(function() {
                        1 == a.CollapseMenu ? e(this).promise().done(function() {
                            l.css("height", i())
                        }) : l.css("height", i())
                    }), e(this).hasClass("fa fa-plus") ? e(this).removeClass("fa fa-plus").addClass("fa fa-minus") : e(this).removeClass("fa fa-minus").addClass("fa fa-plus"), e(this).toggleClass("open"), c || (n(2), c = !0)
                }), e("." + g + " > li > ul > li > span.expand").click(function() {
                    if (1 == a.CollapseMenu) {
                        var o = e("." + g + " li ul li span");
                        o.hasClass("open") && "none" === e(this).next().next().css("display") && (e("." + g + " li ul ul").slideUp(), o.hasClass("open") ? o.removeClass("fa fa-minus").addClass("fa fa-plus") : o.removeClass("fa fa-plus").addClass("fa fa-minus"), o.removeClass("open"))
                    }
                    e(this).nextAll("." + g + " ul ul").slideToggle(function() {
                        1 == a.CollapseMenu ? e(this).promise().done(function() {
                            l.css("height", i())
                        }) : l.css("height", i())
                    }), e(this).hasClass("fa fa-plus") ? e(this).removeClass("fa fa-plus").addClass("fa fa-minus") : e(this).removeClass("fa fa-minus").addClass("fa fa-plus"), e(this).toggleClass("open")
                }), e("." + g + " li a").click(function() {
                    e("." + g + " li a").removeClass("active"), e(this).addClass("active"), s()
                }), h.click(function() {
                    s()
                }), e("." + g + " li a.active").parent().children(".expand").removeClass("fa fa-plus").addClass("fa fa-minus open"), e("." + g + " li a.active").parent().children("ul").css("display", "block")
            })
        }
    }(jQuery);

/*  UItoTop */
jQuery.fn.UItoTop = function(options) {
    var defaults = {
        text: '',
        min: 200,
        inDelay: 600,
        outDelay: 400,
        containerID: 'toTop',
        containerHoverID: 'toTopHover',
        scrollSpeed: 1200,
        easingType: 'linear'
    };
    var settings = jQuery.extend(defaults, options);
    var containerIDhash = '#' + settings.containerID;
    var containerHoverIDHash = '#' + settings.containerHoverID;
    jQuery('body').append('<a href="#" id="' + settings.containerID + '">' + settings.text + '</a>');
    jQuery(containerIDhash).hide().on("click", function() {
        jQuery('html, body').animate({
            scrollTop: 0
        }, settings.scrollSpeed, settings.easingType);
        jQuery('#' + settings.containerHoverID, this).stop().animate({
            'opacity': 0
        }, settings.inDelay, settings.easingType);
        return false;
    }).prepend('<span id="' + settings.containerHoverID + '"></span>').hover(function() {
        jQuery(containerHoverIDHash, this).stop().animate({
            'opacity': 1
        }, 600, 'linear');
    }, function() {
        jQuery(containerHoverIDHash, this).stop().animate({
            'opacity': 0
        }, 700, 'linear');
    });
    jQuery(window).on("scroll", function() {
        var sd = jQuery(window).scrollTop();
        if (typeof document.body.style.maxHeight === "undefined") {
            jQuery(containerIDhash).css({
                'position': 'absolute',
                'top': jQuery(window).scrollTop() + jQuery(window).height() - 50
            });
        }
        if (sd > settings.min) jQuery(containerIDhash).fadeIn(settings.inDelay);
        else jQuery(containerIDhash).fadeOut(settings.Outdelay);
    });
};
var isTouchDevice = ('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0);
jQuery(window).on("load", function() {
    if (isTouchDevice) {}
    jQuery().UItoTop();
});