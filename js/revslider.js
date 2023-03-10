function revslider_showDoubleJqueryError(t) {
    var e = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    e += "<br> This includes make eliminates the revolution slider libraries, and make it not work.", e += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.", e = "<span style='font-size:16px;color:#BC0C06;'>" + (e += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.") + "</span>", jQuery(t).show().html(e)
}
jQuery(document).ready(function() {
        jQuery("#rev_slider_4").show().revolution({
            dottedOverlay: "none",
            delay: 5e3,
            startwidth: 850,
            startheight: 445,
            hideThumbs: 200,
            thumbWidth: 200,
            thumbHeight: 50,
            thumbAmount: 2,
            navigationType: "thumb",
            navigationArrows: "solo",
            navigationStyle: "round",
            touchenabled: "on",
            onHoverStop: "on",
            swipe_velocity: .7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: !1,
            spinner: "spinner0",
            keyboardNavigation: "off",
            navigationHAlign: "center",
            navigationVAlign: "bottom",
            navigationHOffset: 0,
            navigationVOffset: 20,
            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 20,
            soloArrowLeftVOffset: 0,
            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 20,
            soloArrowRightVOffset: 0,
            shadow: 0,
            fullWidth: "on",
            fullScreen: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            forceFullWidth: "on",
            fullScreenAlignForce: "off",
            minFullScreenHeight: 0,
            hideNavDelayOnMobile: 1500,
            hideThumbsOnMobile: "off",
            hideBulletsOnMobile: "off",
            hideArrowsOnMobile: "off",
            hideThumbsUnderResolution: 0,
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0,
            fullScreenOffsetContainer: ""
        })
    }),
    function(t, e) {
        "use strict";
        var i = function(t, e) {
            return new i.Instance(t, e || {})
        };
        i.defaults = {
            stop_browser_behavior: {
                userSelect: "none",
                touchAction: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        }, i.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, i.HAS_TOUCHEVENTS = "ontouchstart" in t, i.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i, i.NO_MOUSEEVENTS = i.HAS_TOUCHEVENTS && navigator.userAgent.match(i.MOBILE_REGEX), i.EVENT_TYPES = {}, i.DIRECTION_DOWN = "down", i.DIRECTION_LEFT = "left", i.DIRECTION_UP = "up", i.DIRECTION_RIGHT = "right", i.POINTER_MOUSE = "mouse", i.POINTER_TOUCH = "touch", i.POINTER_PEN = "pen", i.EVENT_START = "start", i.EVENT_MOVE = "move", i.EVENT_END = "end", i.DOCUMENT = document, i.plugins = {}, i.READY = !1, i.Instance = function(t, e) {
            var a = this;
            return function() {
                if (!i.READY) {
                    i.event.determineEventTypes();
                    for (var t in i.gestures) i.gestures.hasOwnProperty(t) && i.detection.register(i.gestures[t]);
                    i.event.onTouch(i.DOCUMENT, i.EVENT_MOVE, i.detection.detect), i.event.onTouch(i.DOCUMENT, i.EVENT_END, i.detection.detect), i.READY = !0
                }
            }(), this.element = t, this.enabled = !0, this.options = i.utils.extend(i.utils.extend({}, i.defaults), e || {}), this.options.stop_browser_behavior && i.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), i.event.onTouch(t, i.EVENT_START, function(t) {
                a.enabled && i.detection.startDetect(a, t)
            }), this
        }, i.Instance.prototype = {
            on: function(t, e) {
                for (var i = t.split(" "), a = 0; i.length > a; a++) this.element.addEventListener(i[a], e, !1);
                return this
            },
            off: function(t, e) {
                for (var i = t.split(" "), a = 0; i.length > a; a++) this.element.removeEventListener(i[a], e, !1);
                return this
            },
            trigger: function(t, e) {
                var a = i.DOCUMENT.createEvent("Event");
                a.initEvent(t, !0, !0), a.gesture = e;
                var n = this.element;
                return i.utils.hasParent(e.target, n) && (n = e.target), n.dispatchEvent(a), this
            },
            enable: function(t) {
                return this.enabled = t, this
            }
        };
        var a = null,
            n = !1,
            r = !1;
        i.event = {
            bindDom: function(t, e, i) {
                for (var a = e.split(" "), n = 0; a.length > n; n++) t.addEventListener(a[n], i, !1)
            },
            onTouch: function(t, e, s) {
                var o = this;
                this.bindDom(t, i.EVENT_TYPES[e], function(l) {
                    var d = l.type.toLowerCase();
                    if (!d.match(/mouse/) || !r) {
                        (d.match(/touch/) || d.match(/pointerdown/) || d.match(/mouse/) && 1 === l.which) && (n = !0), d.match(/touch|pointer/) && (r = !0);
                        var h = 0;
                        n && (i.HAS_POINTEREVENTS && e != i.EVENT_END ? h = i.PointerEvent.updatePointer(e, l) : d.match(/touch/) ? h = l.touches.length : r || (h = d.match(/up/) ? 0 : 1), h > 0 && e == i.EVENT_END ? e = i.EVENT_MOVE : h || (e = i.EVENT_END), h || null === a ? a = l : l = a, s.call(i.detection, o.collectEventData(t, e, l)), i.HAS_POINTEREVENTS && e == i.EVENT_END && (h = i.PointerEvent.updatePointer(e, l))), h || (a = null, n = !1, r = !1, i.PointerEvent.reset())
                    }
                })
            },
            determineEventTypes: function() {
                var t;
                t = i.HAS_POINTEREVENTS ? i.PointerEvent.getEvents() : i.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], i.EVENT_TYPES[i.EVENT_START] = t[0], i.EVENT_TYPES[i.EVENT_MOVE] = t[1], i.EVENT_TYPES[i.EVENT_END] = t[2]
            },
            getTouchList: function(t) {
                return i.HAS_POINTEREVENTS ? i.PointerEvent.getTouchList() : t.touches ? t.touches : [{
                    identifier: 1,
                    pageX: t.pageX,
                    pageY: t.pageY,
                    target: t.target
                }]
            },
            collectEventData: function(t, e, a) {
                var n = this.getTouchList(a, e),
                    r = i.POINTER_TOUCH;
                return (a.type.match(/mouse/) || i.PointerEvent.matchType(i.POINTER_MOUSE, a)) && (r = i.POINTER_MOUSE), {
                    center: i.utils.getCenter(n),
                    timeStamp: (new Date).getTime(),
                    target: a.target,
                    touches: n,
                    eventType: e,
                    pointerType: r,
                    srcEvent: a,
                    preventDefault: function() {
                        this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault && this.srcEvent.preventDefault()
                    },
                    stopPropagation: function() {
                        this.srcEvent.stopPropagation()
                    },
                    stopDetect: function() {
                        return i.detection.stopDetect()
                    }
                }
            }
        }, i.PointerEvent = {
            pointers: {},
            getTouchList: function() {
                var t = this,
                    e = [];
                return Object.keys(t.pointers).sort().forEach(function(i) {
                    e.push(t.pointers[i])
                }), e
            },
            updatePointer: function(t, e) {
                return t == i.EVENT_END ? this.pointers = {} : (e.identifier = e.pointerId, this.pointers[e.pointerId] = e), Object.keys(this.pointers).length
            },
            matchType: function(t, e) {
                if (!e.pointerType) return !1;
                var a = {};
                return a[i.POINTER_MOUSE] = e.pointerType == e.MSPOINTER_TYPE_MOUSE || e.pointerType == i.POINTER_MOUSE, a[i.POINTER_TOUCH] = e.pointerType == e.MSPOINTER_TYPE_TOUCH || e.pointerType == i.POINTER_TOUCH, a[i.POINTER_PEN] = e.pointerType == e.MSPOINTER_TYPE_PEN || e.pointerType == i.POINTER_PEN, a[t]
            },
            getEvents: function() {
                return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
            },
            reset: function() {
                this.pointers = {}
            }
        }, i.utils = {
            extend: function(t, i, a) {
                for (var n in i) t[n] !== e && a || (t[n] = i[n]);
                return t
            },
            hasParent: function(t, e) {
                for (; t;) {
                    if (t == e) return !0;
                    t = t.parentNode
                }
                return !1
            },
            getCenter: function(t) {
                for (var e = [], i = [], a = 0, n = t.length; n > a; a++) e.push(t[a].pageX), i.push(t[a].pageY);
                return {
                    pageX: (Math.min.apply(Math, e) + Math.max.apply(Math, e)) / 2,
                    pageY: (Math.min.apply(Math, i) + Math.max.apply(Math, i)) / 2
                }
            },
            getVelocity: function(t, e, i) {
                return {
                    x: Math.abs(e / t) || 0,
                    y: Math.abs(i / t) || 0
                }
            },
            getAngle: function(t, e) {
                var i = e.pageY - t.pageY,
                    a = e.pageX - t.pageX;
                return 180 * Math.atan2(i, a) / Math.PI
            },
            getDirection: function(t, e) {
                return Math.abs(t.pageX - e.pageX) >= Math.abs(t.pageY - e.pageY) ? t.pageX - e.pageX > 0 ? i.DIRECTION_LEFT : i.DIRECTION_RIGHT : t.pageY - e.pageY > 0 ? i.DIRECTION_UP : i.DIRECTION_DOWN
            },
            getDistance: function(t, e) {
                var i = e.pageX - t.pageX,
                    a = e.pageY - t.pageY;
                return Math.sqrt(i * i + a * a)
            },
            getScale: function(t, e) {
                return t.length >= 2 && e.length >= 2 ? this.getDistance(e[0], e[1]) / this.getDistance(t[0], t[1]) : 1
            },
            getRotation: function(t, e) {
                return t.length >= 2 && e.length >= 2 ? this.getAngle(e[1], e[0]) - this.getAngle(t[1], t[0]) : 0
            },
            isVertical: function(t) {
                return t == i.DIRECTION_UP || t == i.DIRECTION_DOWN
            },
            stopDefaultBrowserBehavior: function(t, e) {
                var i, a = ["webkit", "khtml", "moz", "ms", "o", ""];
                if (e && t.style) {
                    for (var n = 0; a.length > n; n++)
                        for (var r in e) e.hasOwnProperty(r) && (i = r, a[n] && (i = a[n] + i.substring(0, 1).toUpperCase() + i.substring(1)), t.style[i] = e[r]);
                    "none" == e.userSelect && (t.onselectstart = function() {
                        return !1
                    })
                }
            }
        }, i.detection = {
            gestures: [],
            current: null,
            previous: null,
            stopped: !1,
            startDetect: function(t, e) {
                this.current || (this.stopped = !1, this.current = {
                    inst: t,
                    startEvent: i.utils.extend({}, e),
                    lastEvent: !1,
                    name: ""
                }, this.detect(e))
            },
            detect: function(t) {
                if (this.current && !this.stopped) {
                    t = this.extendEventData(t);
                    for (var e = this.current.inst.options, a = 0, n = this.gestures.length; n > a; a++) {
                        var r = this.gestures[a];
                        if (!this.stopped && !1 !== e[r.name] && !1 === r.handler.call(r, t, this.current.inst)) {
                            this.stopDetect();
                            break
                        }
                    }
                    return this.current && (this.current.lastEvent = t), t.eventType == i.EVENT_END && !t.touches.length - 1 && this.stopDetect(), t
                }
            },
            stopDetect: function() {
                this.previous = i.utils.extend({}, this.current), this.current = null, this.stopped = !0
            },
            extendEventData: function(t) {
                var e = this.current.startEvent;
                if (e && (t.touches.length != e.touches.length || t.touches === e.touches)) {
                    e.touches = [];
                    for (var a = 0, n = t.touches.length; n > a; a++) e.touches.push(i.utils.extend({}, t.touches[a]))
                }
                var r = t.timeStamp - e.timeStamp,
                    s = t.center.pageX - e.center.pageX,
                    o = t.center.pageY - e.center.pageY,
                    l = i.utils.getVelocity(r, s, o);
                return i.utils.extend(t, {
                    deltaTime: r,
                    deltaX: s,
                    deltaY: o,
                    velocityX: l.x,
                    velocityY: l.y,
                    distance: i.utils.getDistance(e.center, t.center),
                    angle: i.utils.getAngle(e.center, t.center),
                    direction: i.utils.getDirection(e.center, t.center),
                    scale: i.utils.getScale(e.touches, t.touches),
                    rotation: i.utils.getRotation(e.touches, t.touches),
                    startEvent: e
                }), t
            },
            register: function(t) {
                var a = t.defaults || {};
                return a[t.name] === e && (a[t.name] = !0), i.utils.extend(i.defaults, a, !0), t.index = t.index || 1e3, this.gestures.push(t), this.gestures.sort(function(t, e) {
                    return t.index < e.index ? -1 : t.index > e.index ? 1 : 0
                }), this.gestures
            }
        }, i.gestures = i.gestures || {}, i.gestures.Hold = {
            name: "hold",
            index: 10,
            defaults: {
                hold_timeout: 500,
                hold_threshold: 1
            },
            timer: null,
            handler: function(t, e) {
                switch (t.eventType) {
                    case i.EVENT_START:
                        clearTimeout(this.timer), i.detection.current.name = this.name, this.timer = setTimeout(function() {
                            "hold" == i.detection.current.name && e.trigger("hold", t)
                        }, e.options.hold_timeout);
                        break;
                    case i.EVENT_MOVE:
                        t.distance > e.options.hold_threshold && clearTimeout(this.timer);
                        break;
                    case i.EVENT_END:
                        clearTimeout(this.timer)
                }
            }
        }, i.gestures.Tap = {
            name: "tap",
            index: 100,
            defaults: {
                tap_max_touchtime: 250,
                tap_max_distance: 10,
                tap_always: !0,
                doubletap_distance: 20,
                doubletap_interval: 300
            },
            handler: function(t, e) {
                if (t.eventType == i.EVENT_END) {
                    var a = i.detection.previous,
                        n = !1;
                    if (t.deltaTime > e.options.tap_max_touchtime || t.distance > e.options.tap_max_distance) return;
                    a && "tap" == a.name && t.timeStamp - a.lastEvent.timeStamp < e.options.doubletap_interval && t.distance < e.options.doubletap_distance && (e.trigger("doubletap", t), n = !0), (!n || e.options.tap_always) && (i.detection.current.name = "tap", e.trigger(i.detection.current.name, t))
                }
            }
        }, i.gestures.Swipe = {
            name: "swipe",
            index: 40,
            defaults: {
                swipe_max_touches: 1,
                swipe_velocity: .7
            },
            handler: function(t, e) {
                if (t.eventType == i.EVENT_END) {
                    if (e.options.swipe_max_touches > 0 && t.touches.length > e.options.swipe_max_touches) return;
                    (t.velocityX > e.options.swipe_velocity || t.velocityY > e.options.swipe_velocity) && (e.trigger(this.name, t), e.trigger(this.name + t.direction, t))
                }
            }
        }, i.gestures.Drag = {
            name: "drag",
            index: 50,
            defaults: {
                drag_min_distance: 10,
                drag_max_touches: 1,
                drag_block_horizontal: !1,
                drag_block_vertical: !1,
                drag_lock_to_axis: !1,
                drag_lock_min_distance: 25
            },
            triggered: !1,
            handler: function(t, a) {
                if (i.detection.current.name != this.name && this.triggered) return a.trigger(this.name + "end", t), this.triggered = !1, e;
                if (!(a.options.drag_max_touches > 0 && t.touches.length > a.options.drag_max_touches)) switch (t.eventType) {
                    case i.EVENT_START:
                        this.triggered = !1;
                        break;
                    case i.EVENT_MOVE:
                        if (t.distance < a.options.drag_min_distance && i.detection.current.name != this.name) return;
                        i.detection.current.name = this.name, (i.detection.current.lastEvent.drag_locked_to_axis || a.options.drag_lock_to_axis && a.options.drag_lock_min_distance <= t.distance) && (t.drag_locked_to_axis = !0);
                        var n = i.detection.current.lastEvent.direction;
                        t.drag_locked_to_axis && n !== t.direction && (t.direction = i.utils.isVertical(n) ? 0 > t.deltaY ? i.DIRECTION_UP : i.DIRECTION_DOWN : 0 > t.deltaX ? i.DIRECTION_LEFT : i.DIRECTION_RIGHT), this.triggered || (a.trigger(this.name + "start", t), this.triggered = !0), a.trigger(this.name, t), a.trigger(this.name + t.direction, t), (a.options.drag_block_vertical && i.utils.isVertical(t.direction) || a.options.drag_block_horizontal && !i.utils.isVertical(t.direction)) && t.preventDefault();
                        break;
                    case i.EVENT_END:
                        this.triggered && a.trigger(this.name + "end", t), this.triggered = !1
                }
            }
        }, i.gestures.Transform = {
            name: "transform",
            index: 45,
            defaults: {
                transform_min_scale: .01,
                transform_min_rotation: 1,
                transform_always_block: !1
            },
            triggered: !1,
            handler: function(t, a) {
                if (i.detection.current.name != this.name && this.triggered) return a.trigger(this.name + "end", t), this.triggered = !1, e;
                if (!(2 > t.touches.length)) switch (a.options.transform_always_block && t.preventDefault(), t.eventType) {
                    case i.EVENT_START:
                        this.triggered = !1;
                        break;
                    case i.EVENT_MOVE:
                        var n = Math.abs(1 - t.scale),
                            r = Math.abs(t.rotation);
                        if (a.options.transform_min_scale > n && a.options.transform_min_rotation > r) return;
                        i.detection.current.name = this.name, this.triggered || (a.trigger(this.name + "start", t), this.triggered = !0), a.trigger(this.name, t), r > a.options.transform_min_rotation && a.trigger("rotate", t), n > a.options.transform_min_scale && (a.trigger("pinch", t), a.trigger("pinch" + (1 > t.scale ? "in" : "out"), t));
                        break;
                    case i.EVENT_END:
                        this.triggered && a.trigger(this.name + "end", t), this.triggered = !1
                }
            }
        }, i.gestures.Touch = {
            name: "touch",
            index: -1 / 0,
            defaults: {
                prevent_default: !1,
                prevent_mouseevents: !1
            },
            handler: function(t, a) {
                return a.options.prevent_mouseevents && t.pointerType == i.POINTER_MOUSE ? (t.stopDetect(), e) : (a.options.prevent_default && t.preventDefault(), t.eventType == i.EVENT_START && a.trigger(this.name, t), e)
            }
        }, i.gestures.Release = {
            name: "release",
            index: 1 / 0,
            handler: function(t, e) {
                t.eventType == i.EVENT_END && e.trigger(this.name, t)
            }
        }, "object" == typeof module && "object" == typeof module.exports ? module.exports = i : (t.Hammer = i, "function" == typeof t.define && t.define.amd && t.define("hammer", [], function() {
            return i
        }))
    }(this),
    function(t, e) {
        "use strict";
        t !== e && (Hammer.event.bindDom = function(i, a, n) {
            t(i).on(a, function(t) {
                var i = t.originalEvent || t;
                i.pageX === e && (i.pageX = t.pageX, i.pageY = t.pageY), i.target || (i.target = t.target), i.which === e && (i.which = i.button), i.preventDefault || (i.preventDefault = t.preventDefault), i.stopPropagation || (i.stopPropagation = t.stopPropagation), n.call(this, i)
            })
        }, Hammer.Instance.prototype.on = function(e, i) {
            return t(this.element).on(e, i)
        }, Hammer.Instance.prototype.off = function(e, i) {
            return t(this.element).off(e, i)
        }, Hammer.Instance.prototype.trigger = function(e, i) {
            var a = t(this.element);
            return a.has(i.target).length && (a = t(i.target)), a.trigger({
                type: e,
                gesture: i
            })
        }, t.fn.hammer = function(e) {
            return this.each(function() {
                var i = t(this),
                    a = i.data("hammer");
                a ? a && e && Hammer.utils.extend(a.options, e) : i.data("hammer", new Hammer(this, e || {}))
            })
        })
    }(window.jQuery || window.Zepto),
    function(t) {
        "use strict";
        var e, i, a = t.GreenSockGlobals || t;
        if (!a.TweenLite) {
            var n, r, s, o, l, d = function(t) {
                    var e, i = t.split("."),
                        n = a;
                    for (e = 0; i.length > e; e++) n[i[e]] = n = n[i[e]] || {};
                    return n
                },
                h = d("com.greensock"),
                p = 1e-10,
                c = [].slice,
                f = function() {},
                u = (e = Object.prototype.toString, i = e.call([]), function(t) {
                    return null != t && (t instanceof Array || "object" == typeof t && !!t.push && e.call(t) === i)
                }),
                m = {},
                g = function(e, i, n, r) {
                    this.sc = m[e] ? m[e].sc : [], m[e] = this, this.gsClass = null, this.func = n;
                    var s = [];
                    this.check = function(o) {
                        for (var l, h, p, c, f = i.length, u = f; --f > -1;)(l = m[i[f]] || new g(i[f], [])).gsClass ? (s[f] = l.gsClass, u--) : o && l.sc.push(this);
                        if (0 === u && n)
                            for (h = ("com.greensock." + e).split("."), p = h.pop(), c = d(h.join("."))[p] = this.gsClass = n.apply(n, s), r && (a[p] = c, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + e.split(".").join("/"), [], function() {
                                    return c
                                }) : "undefined" != typeof module && module.exports && (module.exports = c)), f = 0; this.sc.length > f; f++) this.sc[f].check()
                    }, this.check(!0)
                },
                v = t._gsDefine = function(t, e, i, a) {
                    return new g(t, e, i, a)
                },
                _ = h._class = function(t, e, i) {
                    return e = e || function() {}, v(t, [], function() {
                        return e
                    }, i), e
                };
            v.globals = a;
            var w = [0, 0, 1, 1],
                y = [],
                b = _("easing.Ease", function(t, e, i, a) {
                    this._func = t, this._type = i || 0, this._power = a || 0, this._params = e ? w.concat(e) : w
                }, !0),
                x = b.map = {},
                T = b.register = function(t, e, i, a) {
                    for (var n, r, s, o, l = e.split(","), d = l.length, p = (i || "easeIn,easeOut,easeInOut").split(","); --d > -1;)
                        for (r = l[d], n = a ? _("easing." + r, null, !0) : h.easing[r] || {}, s = p.length; --s > -1;) o = p[s], x[r + "." + o] = x[o + r] = n[o] = t.getRatio ? t : t[o] || new t
                };
            for ((s = b.prototype)._calcEnd = !1, s.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        a = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? a *= a : 2 === i ? a *= a * a : 3 === i ? a *= a * a * a : 4 === i && (a *= a * a * a * a), 1 === e ? 1 - a : 2 === e ? a : .5 > t ? a / 2 : 1 - a / 2
                }, r = (n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --r > -1;) s = n[r] + ",Power" + r, T(new b(null, null, 1, r), s, "easeOut", !0), T(new b(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")), T(new b(null, null, 3, r), s, "easeInOut");
            x.linear = h.easing.Linear.easeIn, x.swing = h.easing.Quad.easeInOut;
            var C = _("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            (s = C.prototype).addEventListener = function(t, e, i, a, n) {
                n = n || 0;
                var r, s, d = this._listeners[t],
                    h = 0;
                for (null == d && (this._listeners[t] = d = []), s = d.length; --s > -1;) r = d[s], r.c === e && r.s === i ? d.splice(s, 1) : 0 === h && n > r.pr && (h = s + 1);
                d.splice(h, 0, {
                    c: e,
                    s: i,
                    up: a,
                    pr: n
                }), this !== o || l || o.wake()
            }, s.removeEventListener = function(t, e) {
                var i, a = this._listeners[t];
                if (a)
                    for (i = a.length; --i > -1;)
                        if (a[i].c === e) return void a.splice(i, 1)
            }, s.dispatchEvent = function(t) {
                var e, i, a, n = this._listeners[t];
                if (n)
                    for (e = n.length, i = this._eventTarget; --e > -1;) a = n[e], a.up ? a.c.call(a.s || i, {
                        type: t,
                        target: i
                    }) : a.c.call(a.s || i)
            };
            var P = t.requestAnimationFrame,
                k = t.cancelAnimationFrame,
                O = Date.now || function() {
                    return (new Date).getTime()
                },
                E = O();
            for (r = (n = ["ms", "moz", "webkit", "o"]).length; --r > -1 && !P;) P = t[n[r] + "RequestAnimationFrame"], k = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
            _("Ticker", function(t, e) {
                var i, a, n, r, s, d = this,
                    h = O(),
                    p = !1 !== e && P,
                    c = function(t) {
                        E = O(), d.time = (E - h) / 1e3;
                        var e, o = d.time - s;
                        (!i || o > 0 || !0 === t) && (d.frame++, s += o + (o >= r ? .004 : r - o), e = !0), !0 !== t && (n = a(c)), e && d.dispatchEvent("tick")
                    };
                C.call(d), d.time = d.frame = 0, d.tick = function() {
                    c(!0)
                }, d.sleep = function() {
                    null != n && (p && k ? k(n) : clearTimeout(n), a = f, n = null, d === o && (l = !1))
                }, d.wake = function() {
                    null !== n && d.sleep(), a = 0 === i ? f : p && P ? P : function(t) {
                        return setTimeout(t, 0 | 1e3 * (s - d.time) + 1)
                    }, d === o && (l = !0), c(2)
                }, d.fps = function(t) {
                    return arguments.length ? (r = 1 / ((i = t) || 60), s = this.time + r, void d.wake()) : i
                }, d.useRAF = function(t) {
                    return arguments.length ? (d.sleep(), p = t, void d.fps(i)) : p
                }, d.fps(t), setTimeout(function() {
                    p && (!n || 5 > d.frame) && d.useRAF(!1)
                }, 1500)
            }), (s = h.Ticker.prototype = new h.events.EventDispatcher).constructor = h.Ticker;
            var S = _("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, V) {
                    l || o.wake();
                    var i = this.vars.useFrames ? H : V;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            o = S.ticker = new h.Ticker, (s = S.prototype)._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
            var A = function() {
                l && O() - E > 2e3 && o.wake(), setTimeout(A, 2e3)
            };
            A(), s.play = function(t, e) {
                return arguments.length && this.seek(t, e), this.reversed(!1).paused(!1)
            }, s.pause = function(t, e) {
                return arguments.length && this.seek(t, e), this.paused(!0)
            }, s.resume = function(t, e) {
                return arguments.length && this.seek(t, e), this.paused(!1)
            }, s.seek = function(t, e) {
                return this.totalTime(Number(t), !1 !== e)
            }, s.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
            }, s.reverse = function(t, e) {
                return arguments.length && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, s.render = function() {}, s.invalidate = function() {
                return this
            }, s.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, s._enabled = function(t, e) {
                return l || o.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, s._kill = function() {
                return this._enabled(!1, !1)
            }, s.kill = function(t, e) {
                return this._kill(t, e), this
            }, s._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, s._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, s.eventCallback = function(t, e, i, a) {
                if ("on" === (t || "").substr(0, 2)) {
                    var n = this.vars;
                    if (1 === arguments.length) return n[t];
                    null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = u(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = a), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, s.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, s.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, s.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, s.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, s.totalTime = function(t, e, i) {
                if (l || o.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var a = this._totalDuration,
                            n = this._timeline;
                        if (t > a && !i && (t = a), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? a - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                            for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && this.render(t, e, !1)
                }
                return this
            }, s.progress = s.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, s.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, s.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || p, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, s.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, s.paused = function(t) {
                if (!arguments.length) return this._paused;
                if (t != this._paused && this._timeline) {
                    l || t || o.wake();
                    var e = this._timeline,
                        i = e.rawTime(),
                        a = i - this._pauseTime;
                    !t && e.smoothChildTiming && (this._startTime += a, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== a && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !t && this._enabled(!0, !1), this
            };
            var L = _("core.SimpleTimeline", function(t) {
                S.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            (s = L.prototype = new S).constructor = L, s.kill()._gc = !1, s._first = s._last = null, s._sortChildren = !1, s.add = s.insert = function(t, e) {
                var i, a;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (a = t._startTime; i && i._startTime > a;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
            }, s._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t.timeline = null, t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), this._timeline && this._uncache(!0)), this
            }, s.render = function(t, e, i) {
                var a, n = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; n;) a = n._next, (n._active || t >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = a
            }, s.rawTime = function() {
                return l || o.wake(), this._totalTime
            };
            var M = _("TweenLite", function(e, i, a) {
                    if (S.call(this, i, a), this.render = M.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : M.selector(e) || e;
                    var n, r, s, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? X[M.defaultOverwrite] : "number" == typeof l ? l >> 0 : X[l], (o || e instanceof Array || e.push && u(e)) && "number" != typeof e[0])
                        for (this._targets = s = c.call(e, 0), this._propLookup = [], this._siblings = [], n = 0; s.length > n; n++) r = s[n], r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (s.splice(n--, 1), this._targets = s = s.concat(c.call(r, 0))) : (this._siblings[n] = F(r, this, !1), 1 === l && this._siblings[n].length > 1 && W(r, this, null, 1, this._siblings[n])) : (r = s[n--] = M.selector(r), "string" == typeof r && s.splice(n + 1, 1)) : s.splice(n--, 1);
                    else this._propLookup = {}, this._siblings = F(e, this, !1), 1 === l && this._siblings.length > 1 && W(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && this.render(-this._delay, !1, !0)
                }, !0),
                I = function(e) {
                    return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                };
            (s = M.prototype = new S).constructor = M, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = !1, M.version = "1.11.5", M.defaultEase = s._ease = new b(null, null, 1, 1), M.defaultOverwrite = "auto", M.ticker = o, M.autoSleep = !0, M.selector = t.$ || t.jQuery || function(e) {
                return t.$ ? (M.selector = t.$, t.$(e)) : t.document ? t.document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
            };
            var z = M._internals = {
                    isArray: u,
                    isSelector: I
                },
                R = M._plugins = {},
                N = M._tweenLookup = {},
                D = 0,
                Y = z.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1
                },
                X = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                H = S._rootFramesTimeline = new L,
                V = S._rootTimeline = new L;
            V._startTime = o.time, H._startTime = o.frame, V._active = H._active = !0, S._updateRoot = function() {
                if (V.render((o.time - V._startTime) * V._timeScale, !1, !1), H.render((o.frame - H._startTime) * H._timeScale, !1, !1), !(o.frame % 120)) {
                    var t, e, i;
                    for (i in N) {
                        for (t = (e = N[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete N[i]
                    }
                    if ((!(i = V._first) || i._paused) && M.autoSleep && !H._first && 1 === o._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || o.sleep()
                    }
                }
            }, o.addEventListener("tick", S._updateRoot);
            var F = function(t, e, i) {
                    var a, n, r = t._gsTweenID;
                    if (N[r || (t._gsTweenID = r = "t" + D++)] || (N[r] = {
                            target: t,
                            tweens: []
                        }), e && ((a = N[r].tweens)[n = a.length] = e, i))
                        for (; --n > -1;) a[n] === e && a.splice(n, 1);
                    return N[r].tweens
                },
                W = function(t, e, i, a, n) {
                    var r, s, o, l;
                    if (1 === a || a >= 4) {
                        for (l = n.length, r = 0; l > r; r++)
                            if ((o = n[r]) !== e) o._gc || o._enabled(!1, !1) && (s = !0);
                            else if (5 === a) break;
                        return s
                    }
                    var d, h = e._startTime + p,
                        c = [],
                        f = 0,
                        u = 0 === e._duration;
                    for (r = n.length; --r > -1;)(o = n[r]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (d = d || j(e, 0, u), 0 === j(o, d, u) && (c[f++] = o)) : h >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > h && ((u || !o._initted) && 2e-10 >= h - o._startTime || (c[f++] = o)));
                    for (r = f; --r > -1;) o = c[r], 2 === a && o._kill(i, t) && (s = !0), (2 !== a || !o._firstPT && o._initted) && o._enabled(!1, !1) && (s = !0);
                    return s
                },
                j = function(t, e, i) {
                    for (var a = t._timeline, n = a._timeScale, r = t._startTime; a._timeline;) {
                        if (r += a._startTime, n *= a._timeScale, a._paused) return -100;
                        a = a._timeline
                    }
                    return (r /= n) > e ? r - e : i && r === e || !t._initted && 2 * p > r - e ? p : (r += t.totalDuration() / t._timeScale / n) > e + p ? 0 : r - e - p
                };
            s._init = function() {
                var t, e, i, a, n = this.vars,
                    r = this._overwrittenProps,
                    s = this._duration,
                    o = n.immediateRender,
                    l = n.ease;
                if (n.startAt) {
                    if (this._startAt && this._startAt.render(-1, !0), n.startAt.overwrite = 0, n.startAt.immediateRender = !0, this._startAt = M.to(this.target, 0, n.startAt), o)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== s) return
                } else if (n.runBackwards && 0 !== s)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                    else {
                        i = {};
                        for (a in n) Y[a] && "autoCSS" !== a || (i[a] = n[a]);
                        if (i.overwrite = 0, i.data = "isFromStart", this._startAt = M.to(this.target, 0, i), n.immediateRender) {
                            if (0 === this._time) return
                        } else this._startAt.render(-1, !0)
                    }
                if (this._ease = l ? l instanceof b ? n.easeParams instanceof Array ? l.config.apply(l, n.easeParams) : l : "function" == typeof l ? new b(l, n.easeParams) : x[l] || M.defaultEase : M.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], r ? r[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, r);
                if (e && M._onPluginEvent("_onInitAllProps", this), r && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = n.onUpdate, this._initted = !0
            }, s._initProps = function(e, i, a, n) {
                var r, s, o, l, d, h;
                if (null == e) return !1;
                this.vars.css || e.style && e !== t && e.nodeType && R.css && !1 !== this.vars.autoCSS && function(t, e) {
                    var i, a = {};
                    for (i in t) Y[i] || i in e && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!R[i] || R[i] && R[i]._autoCSS) || (a[i] = t[i], delete t[i]);
                    t.css = a
                }(this.vars, e);
                for (r in this.vars) {
                    if (h = this.vars[r], Y[r]) h && (h instanceof Array || h.push && u(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[r] = h = this._swapSelfInParams(h, this));
                    else if (R[r] && (l = new R[r])._onInitTween(e, this.vars[r], this)) {
                        for (this._firstPT = d = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: r,
                                pg: !0,
                                pr: l._priority
                            }, s = l._overwriteProps.length; --s > -1;) i[l._overwriteProps[s]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[r] = d = {
                        _next: this._firstPT,
                        t: e,
                        p: r,
                        f: "function" == typeof e[r],
                        n: r,
                        pg: !1,
                        pr: 0
                    }, d.s = d.f ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), d.c = "string" == typeof h && "=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * Number(h.substr(2)) : Number(h) - d.s || 0;
                    d && d._next && (d._next._prev = d)
                }
                return n && this._kill(n, e) ? this._initProps(e, i, a, n) : this._overwrite > 1 && this._firstPT && a.length > 1 && W(e, this, i, this._overwrite, a) ? (this._kill(i, e), this._initProps(e, i, a, n)) : o
            }, s.render = function(t, e, i) {
                var a, n, r, s, o = this._time,
                    l = this._duration;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (a = !0, n = "onComplete"), 0 === l && (s = this._rawPrevTime, (0 === t || 0 > s || s === p) && s !== t && (i = !0, s > p && (n = "onReverseComplete")), this._rawPrevTime = s = !e || t || 0 === s ? t : p);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && this._rawPrevTime > p) && (n = "onReverseComplete", a = this._reversed), 0 > t ? (this._active = !1, 0 === l && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = s = !e || t || 0 === this._rawPrevTime ? t : p)) : this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var d = t / l,
                        h = this._easeType,
                        c = this._easePower;
                    (1 === h || 3 === h && d >= .5) && (d = 1 - d), 3 === h && (d *= 2), 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), this.ratio = 1 === h ? 1 - d : 2 === h ? d : .5 > t / l ? d / 2 : 1 - d / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        this._time && !a ? this.ratio = this._ease.getRatio(this._time / l) : a && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._time !== o || a) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), n && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), a && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this.vars[n].apply(this.vars[n + "Scope"] || this, this.vars[n + "Params"] || y), 0 === l && this._rawPrevTime === p && s !== p && (this._rawPrevTime = 0)))
                }
            }, s._kill = function(t, e) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._enabled(!1, !1);
                var i, a, n, r, s, o, l, d;
                if (e = "string" != typeof e ? e || this._targets || this.target : M.selector(e) || e, (u(e) || I(e)) && "number" != typeof e[0])
                    for (i = e.length; --i > -1;) this._kill(t, e[i]) && (o = !0);
                else {
                    if (this._targets) {
                        for (i = this._targets.length; --i > -1;)
                            if (e === this._targets[i]) {
                                s = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], a = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        s = this._propLookup, a = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (s) {
                        l = t || s, d = t !== a && "all" !== a && t !== s && ("object" != typeof t || !t._tempKill);
                        for (n in l)(r = s[n]) && (r.pg && r.t._kill(l) && (o = !0), r.pg && 0 !== r.t._overwriteProps.length || (r._prev ? r._prev._next = r._next : r === this._firstPT && (this._firstPT = r._next), r._next && (r._next._prev = r._prev), r._next = r._prev = null), delete s[n]), d && (a[n] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return o
            }, s.invalidate = function() {
                return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
            }, s._enabled = function(t, e) {
                if (l || o.wake(), t && this._gc) {
                    var i, a = this._targets;
                    if (a)
                        for (i = a.length; --i > -1;) this._siblings[i] = F(a[i], this, !0);
                    else this._siblings = F(this.target, this, !0)
                }
                return S.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && M._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, M.to = function(t, e, i) {
                return new M(t, e, i)
            }, M.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new M(t, e, i)
            }, M.fromTo = function(t, e, i, a) {
                return a.startAt = i, a.immediateRender = 0 != a.immediateRender && 0 != i.immediateRender, new M(t, e, a)
            }, M.delayedCall = function(t, e, i, a, n) {
                return new M(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    onCompleteScope: a,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: a,
                    immediateRender: !1,
                    useFrames: n,
                    overwrite: 0
                })
            }, M.set = function(t, e) {
                return new M(t, 0, e)
            }, M.getTweensOf = function(t, e) {
                if (null == t) return [];
                var i, a, n, r;
                if (t = "string" != typeof t ? t : M.selector(t) || t, (u(t) || I(t)) && "number" != typeof t[0]) {
                    for (i = t.length, a = []; --i > -1;) a = a.concat(M.getTweensOf(t[i], e));
                    for (i = a.length; --i > -1;)
                        for (r = a[i], n = i; --n > -1;) r === a[n] && a.splice(i, 1)
                } else
                    for (a = F(t).concat(), i = a.length; --i > -1;)(a[i]._gc || e && !a[i].isActive()) && a.splice(i, 1);
                return a
            }, M.killTweensOf = M.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var a = M.getTweensOf(t, e), n = a.length; --n > -1;) a[n]._kill(i, t)
            };
            var B = _("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = B.prototype
            }, !0);
            if (s = B.prototype, B.version = "1.10.1", B.API = 2, s._firstPT = null, s._addTween = function(t, e, i, a, n, r) {
                    var s, o;
                    return null != a && (s = "number" == typeof a || "=" !== a.charAt(1) ? Number(a) - i : parseInt(a.charAt(0) + "1", 10) * Number(a.substr(2))) ? (this._firstPT = o = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: s,
                        f: "function" == typeof t[e],
                        n: n || e,
                        r: r
                    }, o._next && (o._next._prev = o), o) : void 0
                }, s.setRatio = function(t) {
                    for (var e, i = this._firstPT; i;) e = i.c * t + i.s, i.r ? e = 0 | e + (e > 0 ? .5 : -.5) : 1e-6 > e && e > -1e-6 && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, s._kill = function(t) {
                    var e, i = this._overwriteProps,
                        a = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; a;) null != t[a.n] && (a._next && (a._next._prev = a._prev), a._prev ? (a._prev._next = a._next, a._prev = null) : this._firstPT === a && (this._firstPT = a._next)), a = a._next;
                    return !1
                }, s._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, M._onPluginEvent = function(t, e) {
                    var i, a, n, r, s, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (s = o._next, a = n; a && a.pr > o.pr;) a = a._next;
                            (o._prev = a ? a._prev : r) ? o._prev._next = o: n = o, (o._next = a) ? a._prev = o : r = o, o = s
                        }
                        o = e._firstPT = n
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, B.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === B.API && (R[(new t[e])._propName] = t[e]);
                    return !0
                }, v.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        a = t.priority || 0,
                        n = t.overwriteProps,
                        r = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        s = _("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            B.call(this, i, a), this._overwriteProps = n || []
                        }, !0 === t.global),
                        o = s.prototype = new B(i);
                    o.constructor = s, s.API = t.API;
                    for (e in r) "function" == typeof t[e] && (o[r[e]] = t[e]);
                    return s.version = t.version, B.activate([s]), s
                }, n = t._gsQueue) {
                for (r = 0; n.length > r; r++) n[r]();
                for (s in m) m[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
            }
            l = !1
        }
    }(window), (window._gsQueue || (window._gsQueue = [])).push(function() {
        "use strict";
        window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var a = function(t) {
                    e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var i, a, n = this.vars;
                    for (a in n) i = n[a], s(i) && -1 !== i.join("").indexOf("{self}") && (n[a] = this._swapSelfInParams(i));
                    s(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
                },
                n = 1e-10,
                r = i._internals.isSelector,
                s = i._internals.isArray,
                o = [],
                l = function(t) {
                    var e, i = {};
                    for (e in t) i[e] = t[e];
                    return i
                },
                d = function(t, e, i, a) {
                    t._timeline.pause(t._startTime), e && e.apply(a || t._timeline, i || o)
                },
                h = o.slice,
                p = a.prototype = new e;
            return a.version = "1.11.5", p.constructor = a, p.kill()._gc = !1, p.to = function(t, e, a, n) {
                return e ? this.add(new i(t, e, a), n) : this.set(t, a, n)
            }, p.from = function(t, e, a, n) {
                return this.add(i.from(t, e, a), n)
            }, p.fromTo = function(t, e, a, n, r) {
                return e ? this.add(i.fromTo(t, e, a, n), r) : this.set(t, n, r)
            }, p.staggerTo = function(t, e, n, s, o, d, p, c) {
                var f, u = new a({
                    onComplete: d,
                    onCompleteParams: p,
                    onCompleteScope: c,
                    smoothChildTiming: this.smoothChildTiming
                });
                for ("string" == typeof t && (t = i.selector(t) || t), r(t) && (t = h.call(t, 0)), s = s || 0, f = 0; t.length > f; f++) n.startAt && (n.startAt = l(n.startAt)), u.to(t[f], e, l(n), f * s);
                return this.add(u, o)
            }, p.staggerFrom = function(t, e, i, a, n, r, s, o) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, a, n, r, s, o)
            }, p.staggerFromTo = function(t, e, i, a, n, r, s, o, l) {
                return a.startAt = i, a.immediateRender = 0 != a.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, a, n, r, s, o, l)
            }, p.call = function(t, e, a, n) {
                return this.add(i.delayedCall(0, t, e, a), n)
            }, p.set = function(t, e, a) {
                return a = this._parseTimeOrLabel(a, 0, !0), null == e.immediateRender && (e.immediateRender = a === this._time && !this._paused), this.add(new i(t, 0, e), a)
            }, a.exportRoot = function(t, e) {
                null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                var n, r, s = new a(t),
                    o = s._timeline;
                for (null == e && (e = !0), o._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = o._time, n = o._first; n;) r = n._next, e && n instanceof i && n.target === n.vars.onComplete || s.add(n, n._startTime - n._delay), n = r;
                return o.add(s, 0), s
            }, p.add = function(n, r, o, l) {
                var d, h, p, c, f, u;
                if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, n)), !(n instanceof t)) {
                    if (n instanceof Array || n && n.push && s(n)) {
                        for (o = o || "normal", l = l || 0, d = r, h = n.length, p = 0; h > p; p++) s(c = n[p]) && (c = new a({
                            tweens: c
                        })), this.add(c, d), "string" != typeof c && "function" != typeof c && ("sequence" === o ? d = c._startTime + c.totalDuration() / c._timeScale : "start" === o && (c._startTime -= c.delay())), d += l;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof n) return this.addLabel(n, r);
                    if ("function" != typeof n) throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                    n = i.delayedCall(0, n)
                }
                if (e.prototype.add.call(this, n, r), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (f = this, u = f.rawTime() > n._startTime; f._timeline;) u && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
                return this
            }, p.remove = function(e) {
                if (e instanceof t) return this._remove(e, !1);
                if (e instanceof Array || e && e.push && s(e)) {
                    for (var i = e.length; --i > -1;) this.remove(e[i]);
                    return this
                }
                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
            }, p._remove = function(t, i) {
                e.prototype._remove.call(this, t, i);
                var a = this._last;
                return a ? this._time > a._startTime + a._totalDuration / a._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, p.append = function(t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, p.insert = p.insertMultiple = function(t, e, i, a) {
                return this.add(t, e || 0, i, a)
            }, p.appendMultiple = function(t, e, i, a) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, a)
            }, p.addLabel = function(t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this
            }, p.addPause = function(t, e, i, a) {
                return this.call(d, ["{self}", e, i, a], this, t)
            }, p.removeLabel = function(t) {
                return delete this._labels[t], this
            }, p.getLabelTime = function(t) {
                return null != this._labels[t] ? this._labels[t] : -1
            }, p._parseTimeOrLabel = function(e, i, a, n) {
                var r;
                if (n instanceof t && n.timeline === this) this.remove(n);
                else if (n && (n instanceof Array || n.push && s(n)))
                    for (r = n.length; --r > -1;) n[r] instanceof t && n[r].timeline === this && this.remove(n[r]);
                if ("string" == typeof i) return this._parseTimeOrLabel(i, a && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, a);
                if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                else {
                    if (-1 === (r = e.indexOf("="))) return null == this._labels[e] ? a ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                    i = parseInt(e.charAt(r - 1) + "1", 10) * Number(e.substr(r + 1)), e = r > 1 ? this._parseTimeOrLabel(e.substr(0, r - 1), 0, a) : this.duration()
                }
                return Number(e) + i
            }, p.seek = function(t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
            }, p.stop = function() {
                return this.paused(!0)
            }, p.gotoAndPlay = function(t, e) {
                return this.play(t, e)
            }, p.gotoAndStop = function(t, e) {
                return this.pause(t, e)
            }, p.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var a, r, s, l, d, h = this._dirty ? this.totalDuration() : this._totalDuration,
                    p = this._time,
                    c = this._startTime,
                    f = this._timeScale,
                    u = this._paused;
                if (t >= h ? (this._totalTime = this._time = h, this._reversed || this._hasPausedChild() || (r = !0, l = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === n) && this._rawPrevTime !== t && this._first && (d = !0, this._rawPrevTime > n && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || 0 === this._rawPrevTime ? t : n, t = h + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && (this._rawPrevTime > n || 0 > t && this._rawPrevTime >= 0)) && (l = "onReverseComplete", r = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (d = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || 0 === this._rawPrevTime ? t : n, t = 0, this._initted || (d = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== p && this._first || i || d) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || o)), this._time >= p)
                        for (a = this._first; a && (s = a._next, !this._paused || u);)(a._active || a._startTime <= this._time && !a._paused && !a._gc) && (a._reversed ? a.render((a._dirty ? a.totalDuration() : a._totalDuration) - (t - a._startTime) * a._timeScale, e, i) : a.render((t - a._startTime) * a._timeScale, e, i)), a = s;
                    else
                        for (a = this._last; a && (s = a._prev, !this._paused || u);)(a._active || p >= a._startTime && !a._paused && !a._gc) && (a._reversed ? a.render((a._dirty ? a.totalDuration() : a._totalDuration) - (t - a._startTime) * a._timeScale, e, i) : a.render((t - a._startTime) * a._timeScale, e, i)), a = s;
                    this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)), l && (this._gc || (c === this._startTime || f !== this._timeScale) && (0 === this._time || h >= this.totalDuration()) && (r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this.vars[l].apply(this.vars[l + "Scope"] || this, this.vars[l + "Params"] || o)))
                }
            }, p._hasPausedChild = function() {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof a && t._hasPausedChild()) return !0;
                    t = t._next
                }
                return !1
            }, p.getChildren = function(t, e, a, n) {
                n = n || -9999999999;
                for (var r = [], s = this._first, o = 0; s;) n > s._startTime || (s instanceof i ? !1 !== e && (r[o++] = s) : (!1 !== a && (r[o++] = s), !1 !== t && (r = r.concat(s.getChildren(!0, e, a)), o = r.length))), s = s._next;
                return r
            }, p.getTweensOf = function(t, e) {
                for (var a = i.getTweensOf(t), n = a.length, r = [], s = 0; --n > -1;)(a[n].timeline === this || e && this._contains(a[n])) && (r[s++] = a[n]);
                return r
            }, p._contains = function(t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline
                }
                return !1
            }, p.shiftChildren = function(t, e, i) {
                i = i || 0;
                for (var a, n = this._first, r = this._labels; n;) n._startTime >= i && (n._startTime += t), n = n._next;
                if (e)
                    for (a in r) r[a] >= i && (r[a] += t);
                return this._uncache(!0)
            }, p._kill = function(t, e) {
                if (!t && !e) return this._enabled(!1, !1);
                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), a = i.length, n = !1; --a > -1;) i[a]._kill(t, e) && (n = !0);
                return n
            }, p.clear = function(t) {
                var e = this.getChildren(!1, !0, !0),
                    i = e.length;
                for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                return !1 !== t && (this._labels = {}), this._uncache(!0)
            }, p.invalidate = function() {
                for (var t = this._first; t;) t.invalidate(), t = t._next;
                return this
            }, p._enabled = function(t, i) {
                if (t === this._gc)
                    for (var a = this._first; a;) a._enabled(t, !0), a = a._next;
                return e.prototype._enabled.call(this, t, i)
            }, p.duration = function(t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, p.totalDuration = function(t) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var e, i, a = 0, n = this._last, r = 999999999999; n;) e = n._prev, n._dirty && n.totalDuration(), n._startTime > r && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) : r = n._startTime, 0 > n._startTime && !n._paused && (a -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale), this.shiftChildren(-n._startTime, !1, -9999999999), r = 0), i = n._startTime + n._totalDuration / n._timeScale, i > a && (a = i), n = e;
                        this._duration = this._totalDuration = a, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
            }, p.usesFrames = function() {
                for (var e = this._timeline; e._timeline;) e = e._timeline;
                return e === t._rootFramesTimeline
            }, p.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }, a
        }, !0)
    }), window._gsDefine && window._gsQueue.pop()(), (window._gsQueue || (window._gsQueue = [])).push(function() {
        "use strict";
        window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
            var i, a, n, r, s = function() {
                    t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
                },
                o = {},
                l = s.prototype = new t("css");
            l.constructor = s, s.version = "1.11.5", s.API = 2, s.defaultTransformPerspective = 0, l = "px", s.suffixMap = {
                top: l,
                right: l,
                bottom: l,
                left: l,
                width: l,
                height: l,
                fontSize: l,
                padding: l,
                margin: l,
                perspective: l,
                lineHeight: ""
            };
            var d, h, p, c, f, u, m, g, v, _ = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                w = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                b = /[^\d\-\.]/g,
                x = /(?:\d|\-|\+|=|#|\.)*/g,
                T = /opacity *= *([^)]*)/,
                C = /opacity:([^;]*)/,
                P = /alpha\(opacity *=.+?\)/i,
                k = /^(rgb|hsl)/,
                O = /([A-Z])/g,
                E = /-([a-z])/gi,
                S = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                A = function(t, e) {
                    return e.toUpperCase()
                },
                L = /(?:Left|Right|Width)/i,
                M = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                I = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                z = /,(?=[^\)]*(?:\(|$))/gi,
                R = Math.PI / 180,
                N = 180 / Math.PI,
                D = {},
                Y = document,
                X = Y.createElement("div"),
                H = Y.createElement("img"),
                V = s._internals = {
                    _specialProps: o
                },
                F = navigator.userAgent,
                W = (g = F.indexOf("Android"), v = Y.createElement("div"), p = -1 !== F.indexOf("Safari") && -1 === F.indexOf("Chrome") && (-1 === g || Number(F.substr(g + 8, 1)) > 3), f = p && 6 > Number(F.substr(F.indexOf("Version/") + 8, 1)), c = -1 !== F.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(F) && (u = parseFloat(RegExp.$1)), v.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", !!(m = v.getElementsByTagName("a")[0]) && /^0.55/.test(m.style.opacity)),
                j = function(t) {
                    return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                B = "",
                U = "",
                q = function(t, e) {
                    var i, a, n = (e = e || X).style;
                    if (void 0 !== n[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], a = 5; --a > -1 && void 0 === n[i[a] + t];);
                    return a >= 0 ? (B = "-" + (U = 3 === a ? "ms" : i[a]).toLowerCase() + "-", U + t) : null
                },
                Z = Y.defaultView ? Y.defaultView.getComputedStyle : function() {},
                $ = s.getStyle = function(t, e, i, a, n) {
                    var r;
                    return W || "opacity" !== e ? (!a && t.style[e] ? r = t.style[e] : (i = i || Z(t, null)) ? r = (t = i.getPropertyValue(e.replace(O, "-$1").toLowerCase())) || i.length ? t : i[e] : t.currentStyle && (r = t.currentStyle[e]), null == n || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : n) : j(t)
                },
                Q = function(t, e, i, a, n) {
                    if ("px" === a || !a) return i;
                    if ("auto" === a || !i) return 0;
                    var r, s = L.test(e),
                        o = t,
                        l = X.style,
                        d = 0 > i;
                    return d && (i = -i), "%" === a && -1 !== e.indexOf("border") ? r = i / 100 * (s ? t.clientWidth : t.clientHeight) : (l.cssText = "border:0 solid red;position:" + $(t, "position") + ";line-height:0;", "%" !== a && o.appendChild ? l[s ? "borderLeftWidth" : "borderTopWidth"] = i + a : (o = t.parentNode || Y.body, l[s ? "width" : "height"] = i + a), o.appendChild(X), r = parseFloat(X[s ? "offsetWidth" : "offsetHeight"]), o.removeChild(X), 0 !== r || n || (r = Q(t, e, i, a, !0))), d ? -r : r
                },
                G = function(t, e, i) {
                    if ("absolute" !== $(t, "position", i)) return 0;
                    var a = "left" === e ? "Left" : "Top",
                        n = $(t, "margin" + a, i);
                    return t["offset" + a] - (Q(t, e, parseFloat(n), n.replace(x, "")) || 0)
                },
                J = function(t, e) {
                    var i, a, n = {};
                    if (e = e || Z(t, null))
                        if (i = e.length)
                            for (; --i > -1;) n[e[i].replace(E, A)] = e.getPropertyValue(e[i]);
                        else
                            for (i in e) n[i] = e[i];
                    else if (e = t.currentStyle || t.style)
                        for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(E, A)] = e[i]);
                    return W || (n.opacity = j(t)), a = Pt(t, e, !1), n.rotation = a.rotation, n.skewX = a.skewX, n.scaleX = a.scaleX, n.scaleY = a.scaleY, n.x = a.x, n.y = a.y, Ct && (n.z = a.z, n.rotationX = a.rotationX, n.rotationY = a.rotationY, n.scaleZ = a.scaleZ), n.filters && delete n.filters, n
                },
                K = function(t, e, i, a, n) {
                    var r, s, o, l = {},
                        d = t.style;
                    for (s in i) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (r = i[s]) || n && n[s]) && -1 === s.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[s] = "auto" !== r || "left" !== s && "top" !== s ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[s] || "" === e[s].replace(b, "") ? r : 0 : G(t, s), void 0 !== d[s] && (o = new ft(d, s, d[s], o)));
                    if (a)
                        for (s in a) "className" !== s && (l[s] = a[s]);
                    return {
                        difs: l,
                        firstMPT: o
                    }
                },
                tt = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                it = function(t, e, i) {
                    var a = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        n = tt[e],
                        r = n.length;
                    for (i = i || Z(t, null); --r > -1;) a -= parseFloat($(t, "padding" + n[r], i, !0)) || 0, a -= parseFloat($(t, "border" + n[r] + "Width", i, !0)) || 0;
                    return a
                },
                at = function(t, e) {
                    (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                    var i = t.split(" "),
                        a = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                        n = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                    return null == n ? n = "0" : "center" === n && (n = "50%"), ("center" === a || isNaN(parseFloat(a)) && -1 === (a + "").indexOf("=")) && (a = "50%"), e && (e.oxp = -1 !== a.indexOf("%"), e.oyp = -1 !== n.indexOf("%"), e.oxr = "=" === a.charAt(1), e.oyr = "=" === n.charAt(1), e.ox = parseFloat(a.replace(b, "")), e.oy = parseFloat(n.replace(b, ""))), a + " " + n + (i.length > 2 ? " " + i[2] : "")
                },
                nt = function(t, e) {
                    return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                },
                rt = function(t, e) {
                    return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t)
                },
                st = function(t, e, i, a) {
                    var n, r, s, o;
                    return null == t ? o = e : "number" == typeof t ? o = t : (n = 360, r = t.split("_"), s = Number(r[0].replace(b, "")) * (-1 === t.indexOf("rad") ? 1 : N) - ("=" === t.charAt(1) ? 0 : e), r.length && (a && (a[i] = e + s), -1 !== t.indexOf("short") && ((s %= n) !== s % (n / 2) && (s = 0 > s ? s + n : s - n)), -1 !== t.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * n) % n - (0 | s / n) * n : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * n) % n - (0 | s / n) * n)), o = e + s), 1e-6 > o && o > -1e-6 && (o = 0), o
                },
                ot = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                lt = function(t, e, i) {
                    return 0 | 255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                },
                dt = function(t) {
                    var e, i, a, n, r, s;
                    return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ot[t] ? ot[t] : "#" === t.charAt(0) ? (4 === t.length && (t = "#" + (e = t.charAt(1)) + e + (i = t.charAt(2)) + i + (a = t.charAt(3)) + a), [(t = parseInt(t.substr(1), 16)) >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(_), n = Number(t[0]) % 360 / 360, r = Number(t[1]) / 100, e = 2 * (s = Number(t[2]) / 100) - (i = .5 >= s ? s * (r + 1) : s + r - s * r), t.length > 3 && (t[3] = Number(t[3])), t[0] = lt(n + 1 / 3, e, i), t[1] = lt(n, e, i), t[2] = lt(n - 1 / 3, e, i), t) : ((t = t.match(_) || ot.transparent)[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ot.black
                },
                ht = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
            for (l in ot) ht += "|" + l + "\\b";
            ht = RegExp(ht + ")", "gi");
            var pt = function(t, e, i, a) {
                    if (null == t) return function(t) {
                        return t
                    };
                    var n, r = e ? (t.match(ht) || [""])[0] : "",
                        s = t.split(r).join("").match(y) || [],
                        o = t.substr(0, t.indexOf(s[0])),
                        l = ")" === t.charAt(t.length - 1) ? ")" : "",
                        d = -1 !== t.indexOf(" ") ? " " : ",",
                        h = s.length,
                        p = h > 0 ? s[0].replace(_, "") : "";
                    return h ? n = e ? function(t) {
                        var e, c, f, u;
                        if ("number" == typeof t) t += p;
                        else if (a && z.test(t)) {
                            for (u = t.replace(z, "|").split("|"), f = 0; u.length > f; f++) u[f] = n(u[f]);
                            return u.join(",")
                        }
                        if (e = (t.match(ht) || [r])[0], f = (c = t.split(e).join("").match(y) || []).length, h > f--)
                            for (; h > ++f;) c[f] = i ? c[0 | (f - 1) / 2] : s[f];
                        return o + c.join(d) + d + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function(t) {
                        var e, r, c;
                        if ("number" == typeof t) t += p;
                        else if (a && z.test(t)) {
                            for (r = t.replace(z, "|").split("|"), c = 0; r.length > c; c++) r[c] = n(r[c]);
                            return r.join(",")
                        }
                        if (c = (e = t.match(y) || []).length, h > c--)
                            for (; h > ++c;) e[c] = i ? e[0 | (c - 1) / 2] : s[c];
                        return o + e.join(d) + l
                    } : function(t) {
                        return t
                    }
                },
                ct = function(t) {
                    return t = t.split(","),
                        function(e, i, a, n, r, s, o) {
                            var l, d = (i + "").split(" ");
                            for (o = {}, l = 0; 4 > l; l++) o[t[l]] = d[l] = d[l] || d[(l - 1) / 2 >> 0];
                            return n.parse(e, o, r, s)
                        }
                },
                ft = (V._setPluginRatio = function(t) {
                    this.plugin.setRatio(t);
                    for (var e, i, a, n, r = this.data, s = r.proxy, o = r.firstMPT; o;) e = s[o.v], o.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : 1e-6 > e && e > -1e-6 && (e = 0), o.t[o.p] = e, o = o._next;
                    if (r.autoRotate && (r.autoRotate.rotation = s.rotation), 1 === t)
                        for (o = r.firstMPT; o;) {
                            if ((i = o.t).type) {
                                if (1 === i.type) {
                                    for (n = i.xs0 + i.s + i.xs1, a = 1; i.l > a; a++) n += i["xn" + a] + i["xs" + (a + 1)];
                                    i.e = n
                                }
                            } else i.e = i.s + i.xs0;
                            o = o._next
                        }
                }, function(t, e, i, a, n) {
                    this.t = t, this.p = e, this.v = i, this.r = n, a && (a._prev = this, this._next = a)
                }),
                ut = (V._parseToProxy = function(t, e, i, a, n, r) {
                    var s, o, l, d, h, p = a,
                        c = {},
                        f = {},
                        u = i._transform,
                        m = D;
                    for (i._transform = null, D = e, a = h = i.parse(t, e, a, n), D = m, r && (i._transform = u, p && (p._prev = null, p._prev && (p._prev._next = null))); a && a !== p;) {
                        if (1 >= a.type && (f[o = a.p] = a.s + a.c, c[o] = a.s, r || (d = new ft(a, "s", o, d, a.r), a.c = 0), 1 === a.type))
                            for (s = a.l; --s > 0;) l = "xn" + s, o = a.p + "_" + l, f[o] = a.data[l], c[o] = a[l], r || (d = new ft(a, l, o, d, a.rxp[l]));
                        a = a._next
                    }
                    return {
                        proxy: c,
                        end: f,
                        firstMPT: d,
                        pt: h
                    }
                }, V.CSSPropTween = function(t, e, a, n, s, o, l, d, h, p, c) {
                    this.t = t, this.p = e, this.s = a, this.c = n, this.n = l || e, t instanceof ut || r.push(this.n), this.r = d, this.type = o || 0, h && (this.pr = h, i = !0), this.b = void 0 === p ? a : p, this.e = void 0 === c ? a + n : c, s && (this._next = s, s._prev = this)
                }),
                mt = s.parseComplex = function(t, e, i, a, n, r, s, o, l, h) {
                    i = i || r || "", s = new ut(t, e, 0, 0, s, h ? 2 : 1, null, !1, o, i, a), a += "";
                    var p, c, f, u, m, g, v, y, b, x, T, C, P = i.split(", ").join(",").split(" "),
                        O = a.split(", ").join(",").split(" "),
                        E = P.length,
                        S = !1 !== d;
                    for ((-1 !== a.indexOf(",") || -1 !== i.indexOf(",")) && (P = P.join(" ").replace(z, ", ").split(" "), O = O.join(" ").replace(z, ", ").split(" "), E = P.length), E !== O.length && (E = (P = (r || "").split(" ")).length), s.plugin = l, s.setRatio = h, p = 0; E > p; p++)
                        if (u = P[p], m = O[p], y = parseFloat(u), y || 0 === y) s.appendXtra("", y, nt(m, y), m.replace(w, ""), S && -1 !== m.indexOf("px"), !0);
                        else if (n && ("#" === u.charAt(0) || ot[u] || k.test(u))) C = "," === m.charAt(m.length - 1) ? ")," : ")", u = dt(u), m = dt(m), b = u.length + m.length > 6, b && !W && 0 === m[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(O[p]).join("transparent")) : (W || (b = !1), s.appendXtra(b ? "rgba(" : "rgb(", u[0], m[0] - u[0], ",", !0, !0).appendXtra("", u[1], m[1] - u[1], ",", !0).appendXtra("", u[2], m[2] - u[2], b ? "," : C, !0), b && (u = 4 > u.length ? 1 : u[3], s.appendXtra("", u, (4 > m.length ? 1 : m[3]) - u, C, !1)));
                    else if (g = u.match(_)) {
                        if (!(v = m.match(w)) || v.length !== g.length) return s;
                        for (f = 0, c = 0; g.length > c; c++) T = g[c], x = u.indexOf(T, f), s.appendXtra(u.substr(f, x - f), Number(T), nt(v[c], T), "", S && "px" === u.substr(x + T.length, 2), 0 === c), f = x + T.length;
                        s["xs" + s.l] += u.substr(f)
                    } else s["xs" + s.l] += s.l ? " " + u : u;
                    if (-1 !== a.indexOf("=") && s.data) {
                        for (C = s.xs0 + s.data.s, p = 1; s.l > p; p++) C += s["xs" + p] + s.data["xn" + p];
                        s.e = C + s["xs" + p]
                    }
                    return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
                },
                gt = 9;
            for ((l = ut.prototype).l = l.pr = 0; --gt > 0;) l["xn" + gt] = 0, l["xs" + gt] = "";
            l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, a, n, r) {
                var s = this,
                    o = s.l;
                return s["xs" + o] += r && o ? " " + t : t || "", i || 0 === o || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = a || "", o > 0 ? (s.data["xn" + o] = e + i, s.rxp["xn" + o] = n, s["xn" + o] = e, s.plugin || (s.xfirst = new ut(s, "xn" + o, e, i, s.xfirst || s, 0, s.n, n, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                    s: e + i
                }, s.rxp = {}, s.s = e, s.c = i, s.r = n, s)) : (s["xs" + o] += e + (a || ""), s)
            };
            var vt = function(t, e) {
                    e = e || {}, this.p = e.prefix && q(t) || t, o[t] = o[this.p] = this, this.format = e.formatter || pt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                },
                _t = V._registerComplexSpecialProp = function(t, e, i) {
                    "object" != typeof e && (e = {
                        parser: i
                    });
                    var a, n = t.split(","),
                        r = e.defaultValue;
                    for (i = i || [r], a = 0; n.length > a; a++) e.prefix = 0 === a && e.prefix, e.defaultValue = i[a] || r, new vt(n[a], e)
                },
                wt = function(t) {
                    if (!o[t]) {
                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        _t(t, {
                            parser: function(t, i, a, n, r, s, l) {
                                var d = (window.GreenSockGlobals || window).com.greensock.plugins[e];
                                return d ? (d._cssRegister(), o[a].parse(t, i, a, n, r, s, l)) : r
                            }
                        })
                    }
                };
            (l = vt.prototype).parseComplex = function(t, e, i, a, n, r) {
                var s, o, l, d, h, p, c = this.keyword;
                if (this.multi && (z.test(i) || z.test(e) ? (o = e.replace(z, "|").split("|"), l = i.replace(z, "|").split("|")) : c && (o = [e], l = [i])), l) {
                    for (d = l.length > o.length ? l.length : o.length, s = 0; d > s; s++) e = o[s] = o[s] || this.dflt, i = l[s] = l[s] || this.dflt, c && (h = e.indexOf(c), p = i.indexOf(c), h !== p && (i = -1 === p ? l : o, i[s] += " " + c));
                    e = o.join(", "), i = l.join(", ")
                }
                return mt(t, this.p, e, i, this.clrs, this.dflt, a, this.pr, n, r)
            }, l.parse = function(t, e, i, a, r, s) {
                return this.parseComplex(t.style, this.format($(t, this.p, n, !1, this.dflt)), this.format(e), r, s)
            }, s.registerSpecialProp = function(t, e, i) {
                _t(t, {
                    parser: function(t, a, n, r, s, o) {
                        var l = new ut(t, n, 0, 0, s, 2, n, !1, i);
                        return l.plugin = o, l.setRatio = e(t, a, r._tween, n), l
                    },
                    priority: i
                })
            };
            var yt = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
                bt = q("transform"),
                xt = B + "transform",
                Tt = q("transformOrigin"),
                Ct = null !== q("perspective"),
                Pt = function(t, e, i, a) {
                    if (t._gsTransform && i && !a) return t._gsTransform;
                    var n, r, o, l, d, h, p, c, f, u, m, g, v, _ = i && t._gsTransform || {
                            skewY: 0
                        },
                        w = 0 > _.scaleX,
                        y = 2e-5,
                        b = 1e5,
                        x = 179.99,
                        T = x * R,
                        C = Ct && (parseFloat($(t, Tt, e, !1, "0 0 0").split(" ")[2]) || _.zOrigin) || 0;
                    for (bt ? n = $(t, xt, e, !0) : t.currentStyle && (n = (n = t.currentStyle.filter.match(M)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), _.x || 0, _.y || 0].join(",") : ""), o = (r = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || []).length; --o > -1;) l = Number(r[o]), r[o] = (d = l - (l |= 0)) ? (0 | d * b + (0 > d ? -.5 : .5)) / b + l : l;
                    if (16 === r.length) {
                        var P = r[8],
                            k = r[9],
                            O = r[10],
                            E = r[12],
                            S = r[13],
                            A = r[14];
                        if (_.zOrigin && (E = P * (A = -_.zOrigin) - r[12], S = k * A - r[13], A = O * A + _.zOrigin - r[14]), !i || a || null == _.rotationX) {
                            var L, I, z, D, Y, X, H, V = r[0],
                                F = r[1],
                                W = r[2],
                                j = r[3],
                                B = r[4],
                                U = r[5],
                                q = r[6],
                                Z = r[7],
                                Q = r[11],
                                G = Math.atan2(q, O),
                                J = -T > G || G > T;
                            _.rotationX = G * N, G && (L = B * (D = Math.cos(-G)) + P * (Y = Math.sin(-G)), I = U * D + k * Y, z = q * D + O * Y, P = B * -Y + P * D, k = U * -Y + k * D, O = q * -Y + O * D, Q = Z * -Y + Q * D, B = L, U = I, q = z), G = Math.atan2(P, V), _.rotationY = G * N, G && (X = -T > G || G > T, I = F * (D = Math.cos(-G)) - k * (Y = Math.sin(-G)), z = W * D - O * Y, k = F * Y + k * D, O = W * Y + O * D, Q = j * Y + Q * D, V = L = V * D - P * Y, F = I, W = z), G = Math.atan2(F, U), _.rotation = G * N, G && (H = -T > G || G > T, V = V * (D = Math.cos(-G)) + B * (Y = Math.sin(-G)), I = F * D + U * Y, U = F * -Y + U * D, q = W * -Y + q * D, F = I), H && J ? _.rotation = _.rotationX = 0 : H && X ? _.rotation = _.rotationY = 0 : X && J && (_.rotationY = _.rotationX = 0), _.scaleX = (0 | Math.sqrt(V * V + F * F) * b + .5) / b, _.scaleY = (0 | Math.sqrt(U * U + k * k) * b + .5) / b, _.scaleZ = (0 | Math.sqrt(q * q + O * O) * b + .5) / b, _.skewX = 0, _.perspective = Q ? 1 / (0 > Q ? -Q : Q) : 0, _.x = E, _.y = S, _.z = A
                        }
                    } else if (!(Ct && !a && r.length && _.x === r[4] && _.y === r[5] && (_.rotationX || _.rotationY) || void 0 !== _.x && "none" === $(t, "display", e))) {
                        var K = r.length >= 6,
                            tt = K ? r[0] : 1,
                            et = r[1] || 0,
                            it = r[2] || 0,
                            at = K ? r[3] : 1;
                        _.x = r[4] || 0, _.y = r[5] || 0, h = Math.sqrt(tt * tt + et * et), p = Math.sqrt(at * at + it * it), c = tt || et ? Math.atan2(et, tt) * N : _.rotation || 0, f = it || at ? Math.atan2(it, at) * N + c : _.skewX || 0, u = h - Math.abs(_.scaleX || 0), m = p - Math.abs(_.scaleY || 0), Math.abs(f) > 90 && 270 > Math.abs(f) && (w ? (h *= -1, f += 0 >= c ? 180 : -180, c += 0 >= c ? 180 : -180) : (p *= -1, f += 0 >= f ? 180 : -180)), g = (c - _.rotation) % 180, v = (f - _.skewX) % 180, (void 0 === _.skewX || u > y || -y > u || m > y || -y > m || g > -x && x > g && !1 | g * b || v > -x && x > v && !1 | v * b) && (_.scaleX = h, _.scaleY = p, _.rotation = c, _.skewX = f), Ct && (_.rotationX = _.rotationY = _.z = 0, _.perspective = parseFloat(s.defaultTransformPerspective) || 0, _.scaleZ = 1)
                    }
                    _.zOrigin = C;
                    for (o in _) y > _[o] && _[o] > -y && (_[o] = 0);
                    return i && (t._gsTransform = _), _
                },
                kt = function(t) {
                    var e, i, a = this.data,
                        n = -a.rotation * R,
                        r = n + a.skewX * R,
                        s = 1e5,
                        o = (0 | Math.cos(n) * a.scaleX * s) / s,
                        l = (0 | Math.sin(n) * a.scaleX * s) / s,
                        d = (0 | Math.sin(r) * -a.scaleY * s) / s,
                        h = (0 | Math.cos(r) * a.scaleY * s) / s,
                        p = this.t.style,
                        c = this.t.currentStyle;
                    if (c) {
                        i = l, l = -d, d = -i, e = c.filter, p.filter = "";
                        var f, m, g = this.t.offsetWidth,
                            v = this.t.offsetHeight,
                            _ = "absolute" !== c.position,
                            w = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + d + ", M22=" + h,
                            y = a.x,
                            b = a.y;
                        if (null != a.ox && (y += (f = (a.oxp ? .01 * g * a.ox : a.ox) - g / 2) - (f * o + (m = (a.oyp ? .01 * v * a.oy : a.oy) - v / 2) * l), b += m - (f * d + m * h)), _ ? w += ", Dx=" + ((f = g / 2) - (f * o + (m = v / 2) * l) + y) + ", Dy=" + (m - (f * d + m * h) + b) + ")" : w += ", sizingMethod='auto expand')", p.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(I, w) : w + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === d && 1 === h && (_ && -1 === w.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && p.removeAttribute("filter")), !_) {
                            var C, P, k, O = 8 > u ? 1 : -1;
                            for (f = a.ieOffsetX || 0, m = a.ieOffsetY || 0, a.ieOffsetX = Math.round((g - ((0 > o ? -o : o) * g + (0 > l ? -l : l) * v)) / 2 + y), a.ieOffsetY = Math.round((v - ((0 > h ? -h : h) * v + (0 > d ? -d : d) * g)) / 2 + b), gt = 0; 4 > gt; gt++) P = et[gt], C = c[P], i = -1 !== C.indexOf("px") ? parseFloat(C) : Q(this.t, P, parseFloat(C), C.replace(x, "")) || 0, k = i !== a[P] ? 2 > gt ? -a.ieOffsetX : -a.ieOffsetY : 2 > gt ? f - a.ieOffsetX : m - a.ieOffsetY, p[P] = (a[P] = Math.round(i - k * (0 === gt || 2 === gt ? 1 : O))) + "px"
                        }
                    }
                },
                Ot = function() {
                    var t, e, i, a, n, r, s, o, l, d, h, p, f, u, m, g, v, _, w, y, b, x, T, C = this.data,
                        P = this.t.style,
                        k = C.rotation * R,
                        O = C.scaleX,
                        E = C.scaleY,
                        S = C.scaleZ,
                        A = C.perspective;
                    if (c) {
                        1e-4 > O && O > -1e-4 && (O = S = 2e-5), 1e-4 > E && E > -1e-4 && (E = S = 2e-5), !A || C.z || C.rotationX || C.rotationY || (A = 0)
                    }
                    if (k || C.skewX) _ = Math.cos(k), w = Math.sin(k), t = _, n = w, C.skewX && (k -= C.skewX * R, _ = Math.cos(k), w = Math.sin(k)), e = -w, r = _;
                    else {
                        if (!(C.rotationY || C.rotationX || 1 !== S || A)) return void(P[bt] = "translate3d(" + C.x + "px," + C.y + "px," + C.z + "px)" + (1 !== O || 1 !== E ? " scale(" + O + "," + E + ")" : ""));
                        t = r = 1, e = n = 0
                    }
                    h = 1, i = a = s = o = l = d = p = f = u = 0, m = A ? -1 / A : 0, g = C.zOrigin, v = 1e5, (k = C.rotationY * R) && (_ = Math.cos(k), l = h * -(w = Math.sin(k)), f = m * -w, i = t * w, s = n * w, h *= _, m *= _, t *= _, n *= _), (k = C.rotationX * R) && (y = e * (_ = Math.cos(k)) + i * (w = Math.sin(k)), b = r * _ + s * w, x = d * _ + h * w, T = u * _ + m * w, i = e * -w + i * _, s = r * -w + s * _, h = d * -w + h * _, m = u * -w + m * _, e = y, r = b, d = x, u = T), 1 !== S && (i *= S, s *= S, h *= S, m *= S), 1 !== E && (e *= E, r *= E, d *= E, u *= E), 1 !== O && (t *= O, n *= O, l *= O, f *= O), g && (a = i * (p -= g), o = s * p, p = h * p + g), a = (y = (a += C.x) - (a |= 0)) ? (0 | y * v + (0 > y ? -.5 : .5)) / v + a : a, o = (y = (o += C.y) - (o |= 0)) ? (0 | y * v + (0 > y ? -.5 : .5)) / v + o : o, p = (y = (p += C.z) - (p |= 0)) ? (0 | y * v + (0 > y ? -.5 : .5)) / v + p : p, P[bt] = "matrix3d(" + [(0 | t * v) / v, (0 | n * v) / v, (0 | l * v) / v, (0 | f * v) / v, (0 | e * v) / v, (0 | r * v) / v, (0 | d * v) / v, (0 | u * v) / v, (0 | i * v) / v, (0 | s * v) / v, (0 | h * v) / v, (0 | m * v) / v, a, o, p, A ? 1 + -p / A : 1].join(",") + ")"
                },
                Et = function(t) {
                    var e, i, a, n, r, s = this.data,
                        o = this.t.style;
                    return s.rotationX || s.rotationY || s.z || s.force3D ? (this.setRatio = Ot, void Ot.call(this, t)) : void(s.rotation || s.skewX ? (e = s.rotation * R, i = e - s.skewX * R, a = 1e5, n = s.scaleX * a, r = s.scaleY * a, o[bt] = "matrix(" + (0 | Math.cos(e) * n) / a + "," + (0 | Math.sin(e) * n) / a + "," + (0 | Math.sin(i) * -r) / a + "," + (0 | Math.cos(i) * r) / a + "," + s.x + "," + s.y + ")") : o[bt] = "matrix(" + s.scaleX + ",0,0," + s.scaleY + "," + s.x + "," + s.y + ")")
                };
            _t("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
                parser: function(t, e, i, a, r, s, o) {
                    if (a._transform) return r;
                    var l, d, h, p, c, f, u, m = a._transform = Pt(t, n, !0, o.parseTransform),
                        g = t.style,
                        v = yt.length,
                        _ = o,
                        w = {};
                    if ("string" == typeof _.transform && bt) h = g.cssText, g[bt] = _.transform, g.display = "block", l = Pt(t, null, !1), g.cssText = h;
                    else if ("object" == typeof _) {
                        if (l = {
                                scaleX: rt(null != _.scaleX ? _.scaleX : _.scale, m.scaleX),
                                scaleY: rt(null != _.scaleY ? _.scaleY : _.scale, m.scaleY),
                                scaleZ: rt(_.scaleZ, m.scaleZ),
                                x: rt(_.x, m.x),
                                y: rt(_.y, m.y),
                                z: rt(_.z, m.z),
                                perspective: rt(_.transformPerspective, m.perspective)
                            }, null != (u = _.directionalRotation))
                            if ("object" == typeof u)
                                for (h in u) _[h] = u[h];
                            else _.rotation = u;
                        l.rotation = st("rotation" in _ ? _.rotation : "shortRotation" in _ ? _.shortRotation + "_short" : "rotationZ" in _ ? _.rotationZ : m.rotation, m.rotation, "rotation", w), Ct && (l.rotationX = st("rotationX" in _ ? _.rotationX : "shortRotationX" in _ ? _.shortRotationX + "_short" : m.rotationX || 0, m.rotationX, "rotationX", w), l.rotationY = st("rotationY" in _ ? _.rotationY : "shortRotationY" in _ ? _.shortRotationY + "_short" : m.rotationY || 0, m.rotationY, "rotationY", w)), l.skewX = null == _.skewX ? m.skewX : st(_.skewX, m.skewX), l.skewY = null == _.skewY ? m.skewY : st(_.skewY, m.skewY), (d = l.skewY - m.skewY) && (l.skewX += d, l.rotation += d)
                    }
                    for (Ct && null != _.force3D && (m.force3D = _.force3D, f = !0), (c = m.force3D || m.z || m.rotationX || m.rotationY || l.z || l.rotationX || l.rotationY || l.perspective) || null == _.scale || (l.scaleZ = 1); --v > -1;) i = yt[v], p = l[i] - m[i], (p > 1e-6 || -1e-6 > p || null != D[i]) && (f = !0, r = new ut(m, i, m[i], p, r), i in w && (r.e = w[i]), r.xs0 = 0, r.plugin = s, a._overwriteProps.push(r.n));
                    return ((p = _.transformOrigin) || Ct && c && m.zOrigin) && (bt ? (f = !0, i = Tt, p = (p || $(t, i, n, !1, "50% 50%")) + "", (r = new ut(g, i, 0, 0, r, -1, "transformOrigin")).b = g[i], r.plugin = s, Ct ? (h = m.zOrigin, p = p.split(" "), m.zOrigin = (p.length > 2 && (0 === h || "0px" !== p[2]) ? parseFloat(p[2]) : h) || 0, r.xs0 = r.e = g[i] = p[0] + " " + (p[1] || "50%") + " 0px", (r = new ut(m, "zOrigin", 0, 0, r, -1, r.n)).b = h, r.xs0 = r.e = m.zOrigin) : r.xs0 = r.e = g[i] = p) : at(p + "", m)), f && (a._transformType = c || 3 === this._transformType ? 3 : 2), r
                },
                prefix: !0
            }), _t("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), _t("borderRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, r, s) {
                    e = this.format(e);
                    var o, l, d, h, p, c, f, u, m, g, v, _, w, y, b, x, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        C = t.style;
                    for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; T.length > l; l++) this.p.indexOf("border") && (T[l] = q(T[l])), p = h = $(t, T[l], n, !1, "0px"), -1 !== p.indexOf(" ") && (h = p.split(" "), p = h[0], h = h[1]), c = d = o[l], f = parseFloat(p), _ = p.substr((f + "").length), w = "=" === c.charAt(1), w ? (u = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), u *= parseFloat(c), v = c.substr((u + "").length - (0 > u ? 1 : 0)) || "") : (u = parseFloat(c), v = c.substr((u + "").length)), "" === v && (v = a[i] || _), v !== _ && (y = Q(t, "borderLeft", f, _), b = Q(t, "borderTop", f, _), "%" === v ? (p = y / m * 100 + "%", h = b / g * 100 + "%") : "em" === v ? (x = Q(t, "borderLeft", 1, "em"), p = y / x + "em", h = b / x + "em") : (p = y + "px", h = b + "px"), w && (c = parseFloat(p) + u + v, d = parseFloat(h) + u + v)), s = mt(C, T[l], p + " " + h, c + " " + d, !1, "0px", s);
                    return s
                },
                prefix: !0,
                formatter: pt("0px 0px 0px 0px", !1, !0)
            }), _t("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(t, e, i, a, r, s) {
                    var o, l, d, h, p, c, f = "background-position",
                        m = n || Z(t, null),
                        g = this.format((m ? u ? m.getPropertyValue(f + "-x") + " " + m.getPropertyValue(f + "-y") : m.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        v = this.format(e);
                    if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && ((c = $(t, "backgroundImage").replace(S, "")) && "none" !== c)) {
                        for (o = g.split(" "), l = v.split(" "), H.setAttribute("src", c), d = 2; --d > -1;) g = o[d], h = -1 !== g.indexOf("%"), h !== (-1 !== l[d].indexOf("%")) && (p = 0 === d ? t.offsetWidth - H.width : t.offsetHeight - H.height, o[d] = h ? parseFloat(g) / 100 * p + "px" : parseFloat(g) / p * 100 + "%");
                        g = o.join(" ")
                    }
                    return this.parseComplex(t.style, g, v, r, s)
                },
                formatter: at
            }), _t("backgroundSize", {
                defaultValue: "0 0",
                formatter: at
            }), _t("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), _t("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), _t("transformStyle", {
                prefix: !0
            }), _t("backfaceVisibility", {
                prefix: !0
            }), _t("userSelect", {
                prefix: !0
            }), _t("margin", {
                parser: ct("marginTop,marginRight,marginBottom,marginLeft")
            }), _t("padding", {
                parser: ct("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), _t("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(t, e, i, a, r, s) {
                    var o, l, d;
                    return 9 > u ? (l = t.currentStyle, d = 8 > u ? " " : ",", o = "rect(" + l.clipTop + d + l.clipRight + d + l.clipBottom + d + l.clipLeft + ")", e = this.format(e).split(",").join(d)) : (o = this.format($(t, this.p, n, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, r, s)
                }
            }), _t("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), _t("autoRound,strictUnits", {
                parser: function(t, e, i, a, n) {
                    return n
                }
            }), _t("border", {
                defaultValue: "0px solid #000",
                parser: function(t, e, i, a, r, s) {
                    return this.parseComplex(t.style, this.format($(t, "borderTopWidth", n, !1, "0px") + " " + $(t, "borderTopStyle", n, !1, "solid") + " " + $(t, "borderTopColor", n, !1, "#000")), this.format(e), r, s)
                },
                color: !0,
                formatter: function(t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(ht) || ["#000"])[0]
                }
            }), _t("borderWidth", {
                parser: ct("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), _t("float,cssFloat,styleFloat", {
                parser: function(t, e, i, a, n) {
                    var r = t.style,
                        s = "cssFloat" in r ? "cssFloat" : "styleFloat";
                    return new ut(r, s, 0, 0, n, -1, i, !1, 0, r[s], e)
                }
            });
            var St = function(t) {
                var e, i = this.t,
                    a = i.filter || $(this.data, "filter"),
                    n = 0 | this.s + this.c * t;
                100 === n && (-1 === a.indexOf("atrix(") && -1 === a.indexOf("radient(") && -1 === a.indexOf("oader(") ? (i.removeAttribute("filter"), e = !$(this.data, "filter")) : (i.filter = a.replace(P, ""), e = !0)), e || (this.xn1 && (i.filter = a = a || "alpha(opacity=" + n + ")"), -1 === a.indexOf("opacity") ? 0 === n && this.xn1 || (i.filter = a + " alpha(opacity=" + n + ")") : i.filter = a.replace(T, "opacity=" + n))
            };
            _t("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(t, e, i, a, r, s) {
                    var o = parseFloat($(t, "opacity", n, !1, "1")),
                        l = t.style,
                        d = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), d && 1 === o && "hidden" === $(t, "visibility", n) && 0 !== e && (o = 0), W ? r = new ut(l, "opacity", o, e - o, r) : ((r = new ut(l, "opacity", 100 * o, 100 * (e - o), r)).xn1 = d ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = s, r.setRatio = St), d && ((r = new ut(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", a._overwriteProps.push(r.n), a._overwriteProps.push(i)), r
                }
            });
            var At = function(t, e) {
                    e && (t.removeProperty ? t.removeProperty(e.replace(O, "-$1").toLowerCase()) : t.removeAttribute(e))
                },
                Lt = function(t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                        this.t.className = 0 === t ? this.b : this.e;
                        for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : At(i, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.className !== this.e && (this.t.className = this.e)
                };
            _t("className", {
                parser: function(t, e, a, r, s, o, l) {
                    var d, h, p, c, f, u = t.className,
                        m = t.style.cssText;
                    if ((s = r._classNamePT = new ut(t, a, 0, 0, s, 2)).setRatio = Lt, s.pr = -11, i = !0, s.b = u, h = J(t, n), p = t._gsClassPT) {
                        for (c = {}, f = p.data; f;) c[f.p] = 1, f = f._next;
                        p.setRatio(1)
                    }
                    return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : u.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), r._tween._duration && (t.className = s.e, d = K(t, h, J(t), l, c), t.className = u, s.data = d.firstMPT, t.style.cssText = m, s = s.xfirst = r.parse(t, d.difs, s, o)), s
                }
            });
            var Mt = function(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, a, n, r = this.t.style,
                        s = o.transform.parse;
                    if ("all" === this.e) r.cssText = "", n = !0;
                    else
                        for (e = this.e.split(","), a = e.length; --a > -1;) i = e[a], o[i] && (o[i].parse === s ? n = !0 : i = "transformOrigin" === i ? Tt : o[i].p), At(r, i);
                    n && (At(r, bt), this.t._gsTransform && delete this.t._gsTransform)
                }
            };
            for (_t("clearProps", {
                    parser: function(t, e, a, n, r) {
                        return (r = new ut(t, a, 0, 0, r, 2)).setRatio = Mt, r.e = e, r.pr = -10, r.data = n._tween, i = !0, r
                    }
                }), l = "bezier,throwProps,physicsProps,physics2D".split(","), gt = l.length; gt--;) wt(l[gt]);
            (l = s.prototype)._firstPT = null, l._onInitTween = function(t, e, o) {
                if (!t.nodeType) return !1;
                this._target = t, this._tween = o, this._vars = e, d = e.autoRound, i = !1, a = e.suffixMap || s.suffixMap, n = Z(t, ""), r = this._overwriteProps;
                var l, c, u, m, g, v, _, w, y, b = t.style;
                if (h && "" === b.zIndex && (("auto" === (l = $(t, "zIndex", n)) || "" === l) && (b.zIndex = 0)), "string" == typeof e && (m = b.cssText, l = J(t, n), b.cssText = m + ";" + e, l = K(t, l, J(t)).difs, !W && C.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, b.cssText = m), this._firstPT = c = this.parse(t, e, null), this._transformType) {
                    for (y = 3 === this._transformType, bt ? p && (h = !0, "" === b.zIndex && (("auto" === (_ = $(t, "zIndex", n)) || "" === _) && (b.zIndex = 0)), f && (b.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (y ? "visible" : "hidden"))) : b.zoom = 1, u = c; u && u._next;) u = u._next;
                    w = new ut(t, "transform", 0, 0, null, 2), this._linkCSSP(w, null, u), w.setRatio = y && Ct ? Ot : bt ? Et : kt, w.data = this._transform || Pt(t, n, !0), r.pop()
                }
                if (i) {
                    for (; c;) {
                        for (v = c._next, u = m; u && u.pr > c.pr;) u = u._next;
                        (c._prev = u ? u._prev : g) ? c._prev._next = c: m = c, (c._next = u) ? u._prev = c : g = c, c = v
                    }
                    this._firstPT = m
                }
                return !0
            }, l.parse = function(t, e, i, r) {
                var s, l, h, p, c, f, u, m, g, v, _ = t.style;
                for (s in e) f = e[s], l = o[s], l ? i = l.parse(t, f, s, this, i, r, e) : (c = $(t, s, n) + "", g = "string" == typeof f, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || g && k.test(f) ? (g || (f = dt(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = mt(_, s, c, f, !0, "transparent", i, 0, r)) : !g || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (h = parseFloat(c), u = h || 0 === h ? c.substr((h + "").length) : "", ("" === c || "auto" === c) && ("width" === s || "height" === s ? (h = it(t, s, n), u = "px") : "left" === s || "top" === s ? (h = G(t, s, n), u = "px") : (h = "opacity" !== s ? 0 : 1, u = "")), v = g && "=" === f.charAt(1), v ? (p = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), p *= parseFloat(f), m = f.replace(x, "")) : (p = parseFloat(f), m = g && f.substr((p + "").length) || ""), "" === m && (m = s in a ? a[s] : u), f = p || 0 === p ? (v ? p + h : p) + m : e[s], u !== m && "" !== m && (p || 0 === p) && (h || 0 === h) && (h = Q(t, s, h, u), "%" === m ? (h /= Q(t, s, 100, "%") / 100, !0 !== e.strictUnits && (c = h + "%")) : "em" === m ? h /= Q(t, s, 1, "em") : (p = Q(t, s, p, m), m = "px"), v && (p || 0 === p) && (f = p + h + m)), v && (p += h), !h && 0 !== h || !p && 0 !== p ? void 0 !== _[s] && (f || "NaN" != f + "" && null != f) ? (i = new ut(_, s, p || h || 0, 0, i, -1, s, !1, 0, c, f), i.xs0 = "none" !== f || "display" !== s && -1 === s.indexOf("Style") ? f : c) : e[s] : (i = new ut(_, s, h, p - h, i, 0, s, !1 !== d && ("px" === m || "zIndex" === s), 0, c, f), i.xs0 = m)) : i = mt(_, s, c, f, !0, null, i, 0, r)), r && i && !i.plugin && (i.plugin = r);
                return i
            }, l.setRatio = function(t) {
                var e, i, a, n = this._firstPT;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; n;) {
                            if (e = n.c * t + n.s, n.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : 1e-6 > e && e > -1e-6 && (e = 0), n.type)
                                if (1 === n.type)
                                    if (a = n.l, 2 === a) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                                    else if (3 === a) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                            else if (4 === a) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                            else if (5 === a) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                            else {
                                for (i = n.xs0 + e + n.xs1, a = 1; n.l > a; a++) i += n["xn" + a] + n["xs" + (a + 1)];
                                n.t[n.p] = i
                            } else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(t);
                            else n.t[n.p] = e + n.xs0;
                            n = n._next
                        } else
                            for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(t), n = n._next;
                    else
                        for (; n;) 2 !== n.type ? n.t[n.p] = n.e : n.setRatio(t), n = n._next
            }, l._enableTransforms = function(t) {
                this._transformType = t || 3 === this._transformType ? 3 : 2, this._transform = this._transform || Pt(this._target, n, !0)
            }, l._linkCSSP = function(t, e, i, a) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, a = !0), i ? i._next = t : a || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
            }, l._kill = function(e) {
                var i, a, n, r = e;
                if (e.autoAlpha || e.alpha) {
                    r = {};
                    for (a in e) r[a] = e[a];
                    r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                }
                return e.className && (i = this._classNamePT) && ((n = i.xfirst) && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, n._prev), this._classNamePT = null), t.prototype._kill.call(this, r)
            };
            var It = function(t, e, i) {
                var a, n, r, s;
                if (t.slice)
                    for (n = t.length; --n > -1;) It(t[n], e, i);
                else
                    for (a = t.childNodes, n = a.length; --n > -1;) r = a[n], s = r.type, r.style && (e.push(J(r)), i && i.push(r)), 1 !== s && 9 !== s && 11 !== s || !r.childNodes.length || It(r, e, i)
            };
            return s.cascadeTo = function(t, i, a) {
                var n, r, s, o = e.to(t, i, a),
                    l = [o],
                    d = [],
                    h = [],
                    p = [],
                    c = e._internals.reservedProps;
                for (t = o._targets || o.target, It(t, d, p), o.render(i, !0), It(t, h), o.render(0, !0), o._enabled(!0), n = p.length; --n > -1;)
                    if (r = K(p[n], d[n], h[n]), r.firstMPT) {
                        r = r.difs;
                        for (s in a) c[s] && (r[s] = a[s]);
                        l.push(e.to(p[n], i, r))
                    }
                return l
            }, t.activate([s]), s
        }, !0)
    }), window._gsDefine && window._gsQueue.pop()(),
    function(t, e) {
        function a(i, n) {
            try {
                0 != n.hideThumbsUnderResoluition && "thumb" == n.navigationType && (n.hideThumbsUnderResoluition > t(window).width() ? t(".tp-bullets").css({
                    display: "none"
                }) : t(".tp-bullets").css({
                    display: "block"
                }))
            } catch (t) {}
            i.find(".defaultimg").each(function(e) {
                h(t(this), n)
            });
            var r = i.parent();
            t(window).width() < n.hideSliderAtLimit ? (i.trigger("stoptimer"), "none" != r.css("display") && r.data("olddisplay", r.css("display")), r.css({
                display: "none"
            })) : i.is(":hidden") && (r.data("olddisplay") != e && "undefined" != r.data("olddisplay") && "none" != r.data("olddisplay") ? r.css({
                display: r.data("olddisplay")
            }) : r.css({
                display: "block"
            }), i.trigger("restarttimer"), setTimeout(function() {
                a(i, n)
            }, 150));
            var s = 0;
            "on" == n.forceFullWidth && (s = 0 - n.container.parent().offset().left);
            try {
                i.parent().find(".tp-bannershadow").css({
                    width: n.width,
                    left: s
                })
            } catch (t) {}
            var o = i.find(">ul >li:eq(" + n.act + ") .slotholder"),
                l = i.find(">ul >li:eq(" + n.next + ") .slotholder");
            u(i, n), l.find(".defaultimg").css({
                opacity: 0
            }), o.find(".defaultimg").css({
                opacity: 1
            }), l.find(".defaultimg").each(function() {
                var i = t(this);
                i.data("kenburn") != e && i.data("kenburn").restart()
            }), k(i.find(">ul >li:eq(" + n.next + ")"), n, !0), d(i, n)
        }

        function n() {
            var t = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                e = !1;
            for (i in t) navigator.userAgent.split(t[i]).length > 1 && (e = !0);
            return e
        }

        function r(e, i) {
            var a = t('<div style="display:none;"/>').appendTo(t("body"));
            a.html("\x3c!--[if " + (i || "") + " IE " + (e || "") + "]><a>&nbsp;</a><![endif]--\x3e");
            var n = a.find("a").length;
            return a.remove(), n
        }

        function s(t, e) {
            v(e, t)
        }

        function o(t) {
            var e = t.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer").parent(),
                i = (e.offset(), e.find(".bullet:first").outerWidth(!0)),
                a = e.find(".bullet.selected").index() * i,
                n = e.width(),
                r = (i = e.find(".bullet:first").outerWidth(!0)) * t.find(">ul:first >li").length,
                s = 0 - a;
            s > 0 && (s = 0), s < 0 - r + n && (s = 0 - r + n), e.hasClass("over") || l(e, s, 200)
        }

        function l(t, e, i) {
            TweenLite.to(t.find(".tp-thumbcontainer"), .2, {
                left: e,
                ease: Power3.easeOut,
                overwrite: "auto"
            })
        }

        function d(e, i) {
            var a = e.parent(),
                n = a.find(".tp-bullets");
            if ("thumb" == i.navigationType) {
                n.find(".thumb").each(function(e) {
                    t(this).css({
                        width: i.thumbWidth * i.bw + "px",
                        height: i.thumbHeight * i.bh + "px"
                    })
                });
                var r = n.find(".tp-mask");
                r.width(i.thumbWidth * i.thumbAmount * i.bw), r.height(i.thumbHeight * i.bh), r.parent().width(i.thumbWidth * i.thumbAmount * i.bw), r.parent().height(i.thumbHeight * i.bh)
            }
            var s = a.find(".tp-leftarrow"),
                o = a.find(".tp-rightarrow");
            "thumb" == i.navigationType && "nexttobullets" == i.navigationArrows && (i.navigationArrows = "solo"), "nexttobullets" == i.navigationArrows && (s.prependTo(n).css({
                float: "left"
            }), o.insertBefore(n.find(".tpclear")).css({
                float: "left"
            }));
            var l = 0;
            "on" == i.forceFullWidth && (l = 0 - i.container.parent().offset().left), "none" != i.navigationArrows && "nexttobullets" != i.navigationArrows && (s.css({
                position: "absolute"
            }), o.css({
                position: "absolute"
            }), "center" == i.soloArrowLeftValign && s.css({
                top: "50%",
                marginTop: i.soloArrowLeftVOffset - Math.round(s.innerHeight() / 2) + "px"
            }), "bottom" == i.soloArrowLeftValign && s.css({
                top: "auto",
                bottom: 0 + i.soloArrowLeftVOffset + "px"
            }), "top" == i.soloArrowLeftValign && s.css({
                bottom: "auto",
                top: 0 + i.soloArrowLeftVOffset + "px"
            }), "center" == i.soloArrowLeftHalign && s.css({
                left: "50%",
                marginLeft: l + i.soloArrowLeftHOffset - Math.round(s.innerWidth() / 2) + "px"
            }), "left" == i.soloArrowLeftHalign && s.css({
                left: 0 + i.soloArrowLeftHOffset + l + "px"
            }), "right" == i.soloArrowLeftHalign && s.css({
                right: 0 + i.soloArrowLeftHOffset - l + "px"
            }), "center" == i.soloArrowRightValign && o.css({
                top: "50%",
                marginTop: i.soloArrowRightVOffset - Math.round(o.innerHeight() / 2) + "px"
            }), "bottom" == i.soloArrowRightValign && o.css({
                top: "auto",
                bottom: 0 + i.soloArrowRightVOffset + "px"
            }), "top" == i.soloArrowRightValign && o.css({
                bottom: "auto",
                top: 0 + i.soloArrowRightVOffset + "px"
            }), "center" == i.soloArrowRightHalign && o.css({
                left: "50%",
                marginLeft: l + i.soloArrowRightHOffset - Math.round(o.innerWidth() / 2) + "px"
            }), "left" == i.soloArrowRightHalign && o.css({
                left: 0 + i.soloArrowRightHOffset + l + "px"
            }), "right" == i.soloArrowRightHalign && o.css({
                right: 0 + i.soloArrowRightHOffset - l + "px"
            }), null != s.position() && s.css({
                top: Math.round(parseInt(s.position().top, 0)) + "px"
            }), null != o.position() && o.css({
                top: Math.round(parseInt(o.position().top, 0)) + "px"
            })), "none" == i.navigationArrows && (s.css({
                visibility: "hidden"
            }), o.css({
                visibility: "hidden"
            })), "center" == i.navigationVAlign && n.css({
                top: "50%",
                marginTop: i.navigationVOffset - Math.round(n.innerHeight() / 2) + "px"
            }), "bottom" == i.navigationVAlign && n.css({
                bottom: 0 + i.navigationVOffset + "px"
            }), "top" == i.navigationVAlign && n.css({
                top: 0 + i.navigationVOffset + "px"
            }), "center" == i.navigationHAlign && n.css({
                left: "50%",
                marginLeft: l + i.navigationHOffset - Math.round(n.innerWidth() / 2) + "px"
            }), "left" == i.navigationHAlign && n.css({
                left: 0 + i.navigationHOffset + l + "px"
            }), "right" == i.navigationHAlign && n.css({
                right: 0 + i.navigationHOffset - l + "px"
            })
        }

        function h(i, a) {
            if (a.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({
                    height: a.container.height()
                }), a.container.closest(".rev_slider_wrapper").css({
                    height: a.container.height()
                }), a.width = parseInt(a.container.width(), 0), a.height = parseInt(a.container.height(), 0), a.bw = a.width / a.startwidth, a.bh = a.height / a.startheight, a.bh > a.bw && (a.bh = a.bw), a.bh < a.bw && (a.bw = a.bh), a.bw < a.bh && (a.bh = a.bw), a.bh > 1 && (a.bw = 1, a.bh = 1), a.bw > 1 && (a.bw = 1, a.bh = 1), a.height = Math.round(a.startheight * (a.width / a.startwidth)), a.height > a.startheight && "on" != a.autoHeight && (a.height = a.startheight), "on" == a.fullScreen) {
                a.height = a.bw * a.startheight;
                a.container.parent().width();
                var n = t(window).height();
                if (a.fullScreenOffsetContainer != e) try {
                    var r = a.fullScreenOffsetContainer.split(",");
                    t.each(r, function(e, i) {
                        (n -= t(i).outerHeight(!0)) < a.minFullScreenHeight && (n = a.minFullScreenHeight)
                    })
                } catch (t) {}
                a.container.parent().height(n), a.container.css({
                    height: "100%"
                }), a.height = n
            } else a.container.height(a.height);
            a.slotw = Math.ceil(a.width / a.slots), "on" == a.fullSreen ? a.sloth = Math.ceil(t(window).height() / a.slots) : a.sloth = Math.ceil(a.height / a.slots), "on" == a.autoHeight && (a.sloth = Math.ceil(i.height() / a.slots))
        }

        function p(t, i, a, n) {
            var s = t,
                o = s.find(".defaultimg"),
                l = s.data("zoomstart"),
                d = s.data("rotationstart");
            o.data("currotate") != e && (d = o.data("currotate")), o.data("curscale") != e && (l = o.data("curscale")), h(o, i);
            var p = o.data("src"),
                c = o.css("background-color"),
                u = i.width,
                m = i.height;
            "on" == i.autoHeight && (m = i.container.height());
            var g = o.data("fxof");
            g == e && (g = 0), fullyoff = 0;
            var v = 0,
                _ = o.data("bgfit"),
                w = o.data("bgrepeat"),
                b = o.data("bgposition");
            if (_ == e && (_ = "cover"), w == e && (w = "no-repeat"), b == e && (b = "center center"), "on" == s.data("kenburns") && (_ = l).toString().length < 4 && (_ = y(_, s, i)), r(8)) {
                var x = p;
                p = ""
            }
            if ("horizontal" == n) {
                if (!a) v = 0 - i.slotw;
                for (var T = 0; T < i.slots; T++) s.append('<div class="slot" style="position:absolute;top:' + (0 + fullyoff) + "px;left:" + (g + T * i.slotw) + "px;overflow:hidden;width:" + i.slotw + "px;height:" + m + 'px"><div class="slotslide" style="position:absolute;top:0px;left:' + v + "px;width:" + i.slotw + "px;height:" + m + 'px;overflow:hidden;"><div style="background-color:' + c + ";position:absolute;top:0px;left:" + (0 - T * i.slotw) + "px;width:" + u + "px;height:" + m + "px;background-image:url(" + p + ");background-repeat:" + w + ";background-size:" + _ + ";background-position:" + b + ';"></div></div></div>'), l != e && d != e && TweenLite.set(s.find(".slot").last(), {
                    rotationZ: d
                }), r(8) && (s.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + x + '" style="width:100%;height:auto">'), f(s, i))
            } else {
                if (!a) v = 0 - i.sloth;
                for (T = 0; T < i.slots + 2; T++) s.append('<div class="slot" style="position:absolute;top:' + (fullyoff + T * i.sloth) + "px;left:" + g + "px;overflow:hidden;width:" + u + "px;height:" + i.sloth + 'px"><div class="slotslide" style="position:absolute;top:' + v + "px;left:0px;width:" + u + "px;height:" + i.sloth + 'px;overflow:hidden;"><div style="background-color:' + c + ";position:absolute;top:" + (0 - T * i.sloth) + "px;left:0px;width:" + u + "px;height:" + m + "px;background-image:url(" + p + ");background-repeat:" + w + ";background-size:" + _ + ";background-position:" + b + ';"></div></div></div>'), l != e && d != e && TweenLite.set(s.find(".slot").last(), {
                    rotationZ: d
                }), r(8) && (s.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + x + '" style="width:100%;height:auto;">'), f(s, i))
            }
        }

        function c(t, i, a) {
            var n = t,
                s = n.find(".defaultimg"),
                o = n.data("zoomstart"),
                l = n.data("rotationstart");
            s.data("currotate") != e && (l = s.data("currotate")), s.data("curscale") != e && (o = 100 * s.data("curscale")), h(s, i);
            var d = s.data("src"),
                p = s.css("backgroundColor"),
                c = i.width,
                u = i.height;
            "on" == i.autoHeight && (u = i.container.height());
            var m = s.data("fxof");
            m == e && (m = 0), fullyoff = 0;
            if (r(8)) {
                var g = d;
                d = ""
            }
            var v = 0;
            if (v = i.sloth > i.slotw ? i.sloth : i.slotw, !a);
            i.slotw = v, i.sloth = v;
            var _ = 0,
                w = 0,
                b = s.data("bgfit"),
                x = s.data("bgrepeat"),
                T = s.data("bgposition");
            b == e && (b = "cover"), x == e && (x = "no-repeat"), T == e && (T = "center center"), "on" == n.data("kenburns") && (b = o).toString().length < 4 && (b = y(b, n, i));
            for (var C = 0; C < i.slots; C++) {
                w = 0;
                for (var P = 0; P < i.slots; P++) n.append('<div class="slot" style="position:absolute;top:' + (fullyoff + w) + "px;left:" + (m + _) + "px;width:" + v + "px;height:" + v + 'px;overflow:hidden;"><div class="slotslide" data-x="' + _ + '" data-y="' + w + '" style="position:absolute;top:0px;left:0px;width:' + v + "px;height:" + v + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - w) + "px;left:" + (0 - _) + "px;width:" + c + "px;height:" + u + "px;background-color:" + p + ";background-image:url(" + d + ");background-repeat:" + x + ";background-size:" + b + ";background-position:" + T + ';"></div></div></div>'), w += v, r(8) && (n.find(".slot ").last().find(".slotslide").append('<img src="' + g + '">'), f(n, i)), o != e && l != e && TweenLite.set(n.find(".slot").last(), {
                    rotationZ: l
                });
                _ += v
            }
        }

        function f(t, e) {
            if (r(8)) {
                var i = t.find(".ieeightfallbackimage");
                i.width(), i.height();
                e.startwidth / e.startheight < t.data("owidth") / t.data("oheight") ? i.css({
                    width: "auto",
                    height: "100%"
                }) : i.css({
                    width: "100%",
                    height: "auto"
                }), setTimeout(function() {
                    var a = i.width(),
                        n = i.height();
                    "center center" == t.data("bgposition") && i.css({
                        position: "absolute",
                        top: e.height / 2 - n / 2 + "px",
                        left: e.width / 2 - a / 2 + "px"
                    }), "center top" != t.data("bgposition") && "top center" != t.data("bgposition") || i.css({
                        position: "absolute",
                        top: "0px",
                        left: e.width / 2 - a / 2 + "px"
                    }), "center bottom" != t.data("bgposition") && "bottom center" != t.data("bgposition") || i.css({
                        position: "absolute",
                        bottom: "0px",
                        left: e.width / 2 - a / 2 + "px"
                    }), "right top" != t.data("bgposition") && "top right" != t.data("bgposition") || i.css({
                        position: "absolute",
                        top: "0px",
                        right: "0px"
                    }), "right bottom" != t.data("bgposition") && "bottom right" != t.data("bgposition") || i.css({
                        position: "absolute",
                        bottom: "0px",
                        right: "0px"
                    }), "right center" != t.data("bgposition") && "center right" != t.data("bgposition") || i.css({
                        position: "absolute",
                        top: e.height / 2 - n / 2 + "px",
                        right: "0px"
                    }), "left bottom" != t.data("bgposition") && "bottom left" != t.data("bgposition") || i.css({
                        position: "absolute",
                        bottom: "0px",
                        left: "0px"
                    }), "left center" != t.data("bgposition") && "center left" != t.data("bgposition") || i.css({
                        position: "absolute",
                        top: e.height / 2 - n / 2 + "px",
                        left: "0px"
                    })
                }, 20)
            }
        }

        function u(e, i, a) {
            setTimeout(function() {
                e.find(".slotholder .slot").each(function() {
                    clearTimeout(t(this).data("tout")), t(this).remove()
                }), i.transition = 0
            }, a)
        }

        function m(i, a) {
            i.find("img, .defaultimg").each(function(i) {
                var n, r = t(this);
                r.data("lazyload") != r.attr("src") && a < 3 && r.data("lazyload") != e && "undefined" != r.data("lazyload") ? r.data("lazyload") != e && "undefined" != r.data("lazyload") && (r.attr("src", r.data("lazyload")), (n = new Image).onload = function(t) {
                    r.data("lazydone", 1), r.hasClass("defaultimg") && g(r, n)
                }, n.error = function() {
                    r.data("lazydone", 1)
                }, n.src = r.attr("src"), n.complete && (r.hasClass("defaultimg") && g(r, n), r.data("lazydone", 1))) : r.data("lazyload") !== e && "undefined" !== r.data("lazyload") || 1 == r.data("lazydone") || ((n = new Image).onload = function() {
                    r.hasClass("defaultimg") && g(r, n), r.data("lazydone", 1)
                }, n.error = function() {
                    r.data("lazydone", 1)
                }, r.attr("src") != e && "undefined" != r.attr("src") ? n.src = r.attr("src") : n.src = r.data("src"), n.complete && (r.hasClass("defaultimg") && g(r, n), r.data("lazydone", 1)))
            })
        }

        function g(t, e) {
            var i = t.closest("li"),
                a = e.width,
                n = e.height;
            i.data("owidth", a), i.data("oheight", n), i.find(".slotholder").data("owidth", a), i.find(".slotholder").data("oheight", n), i.data("loadeddone", 1)
        }

        function v(t, i) {
            try {
                t.find(">ul:first-child >li:eq(" + i.act + ")")
            } catch (e) {
                t.find(">ul:first-child >li:eq(1)")
            }
            i.lastslide = i.act;
            var a = t.find(">ul:first-child >li:eq(" + i.next + ")"),
                n = a.find(".defaultimg");
            i.bannertimeronpause = !0, t.trigger("stoptimer"), i.cd = 0, n.data("lazyload") != e && "undefined" != n.data("lazyload") && 1 != n.data("lazydone") ? (r(8) ? n.attr("src", a.find(".defaultimg").data("lazyload")) : n.css({
                backgroundImage: 'url("' + a.find(".defaultimg").data("lazyload") + '")'
            }), n.data("src", a.find(".defaultimg").data("lazyload")), n.data("lazydone", 1), n.data("orgw", 0), a.data("loadeddone", 1), TweenLite.set(t.find(".tp-loader"), {
                display: "block",
                opacity: 0
            }), TweenLite.to(t.find(".tp-loader"), .3, {
                autoAlpha: 1
            }), A(a, function() {
                _(i, n, t)
            }, i)) : a.data("loadeddone") === e ? (a.data("loadeddone", 1), A(a, function() {
                _(i, n, t)
            }, i)) : _(i, n, t)
        }

        function _(i, a, n) {
            i.bannertimeronpause = !1, i.cd = 0, n.trigger("nulltimer"), TweenLite.to(n.find(".tp-loader"), .3, {
                    autoAlpha: 0
                }), h(a, i), d(n, i), h(a, i),
                function(i, a) {
                    function n() {
                        t.each(v, function(t, e) {
                            e[0] != m && e[8] != m || (h = e[1], g = e[2], y = x), x += 1
                        })
                    }
                    i.trigger("revolution.slide.onbeforeswap"), a.transition = 1, a.videoplaying = !1;
                    try {
                        var s = i.find(">ul:first-child >li:eq(" + a.act + ")")
                    } catch (t) {
                        var s = i.find(">ul:first-child >li:eq(1)")
                    }
                    a.lastslide = a.act;
                    var o = i.find(">ul:first-child >li:eq(" + a.next + ")"),
                        l = s.find(".slotholder"),
                        d = o.find(".slotholder");
                    s.css({
                        visibility: "visible"
                    }), o.css({
                        visibility: "visible"
                    }), "on" == d.data("kenburns") && function(i, a) {
                        try {
                            var n = i.find(">ul:first-child >li:eq(" + a.act + ")")
                        } catch (t) {
                            var n = i.find(">ul:first-child >li:eq(1)")
                        }
                        a.lastslide = a.act;
                        var r = i.find(">ul:first-child >li:eq(" + a.next + ")"),
                            s = (n.find(".slotholder"), r.find(".slotholder"));
                        s.find(".defaultimg").each(function() {
                            var i = t(this);
                            i.data("kenburn") != e && i.data("kenburn").restart(), TweenLite.killTweensOf(i, !1), TweenLite.set(i, {
                                scale: 1,
                                rotationZ: 0
                            }), i.data("bgposition", s.data("bgposition")), i.data("currotate", s.data("rotationstart")), i.data("curscale", s.data("bgfit"))
                        })
                    }(i, a);
                    a.ie && ("boxfade" == m && (m = "boxslide"), "slotfade-vertical" == m && (m = "slotzoom-vertical"), "slotfade-horizontal" == m && (m = "slotzoom-horizontal"));
                    o.data("delay") != e ? (a.cd = 0, a.delay = o.data("delay")) : a.delay = a.origcd;
                    i.trigger("restarttimer"), s.css({
                        left: "0px",
                        top: "0px"
                    }), o.css({
                        left: "0px",
                        top: "0px"
                    }), "prepared" == o.data("differentissplayed") && (o.data("differentissplayed", "done"), o.data("transition", o.data("savedtransition")), o.data("slotamount", o.data("savedslotamount")), o.data("masterspeed", o.data("savedmasterspeed")));
                    o.data("fstransition") != e && "done" != o.data("differentissplayed") && (o.data("savedtransition", o.data("transition")), o.data("savedslotamount", o.data("slotamount")), o.data("savedmasterspeed", o.data("masterspeed")), o.data("transition", o.data("fstransition")), o.data("slotamount", o.data("fsslotamount")), o.data("masterspeed", o.data("fsmasterspeed")), o.data("differentissplayed", "prepared"));
                    var h = 0,
                        f = o.data("transition").split(","),
                        u = o.data("nexttransid");
                    u == e ? (u = 0, o.data("nexttransid", u)) : ((u += 1) == f.length && (u = 0), o.data("nexttransid", u));
                    var m = f[u],
                        g = 0;
                    "slidehorizontal" == m && (m = "slideleft", 1 == a.leftarrowpressed && (m = "slideright"));
                    "slidevertical" == m && (m = "slideup", 1 == a.leftarrowpressed && (m = "slidedown"));
                    var v = [
                            ["boxslide", 0, 1, 10, 0, "box", !1, null, 0],
                            ["boxfade", 1, 0, 10, 0, "box", !1, null, 1],
                            ["slotslide-horizontal", 2, 0, 0, 200, "horizontal", !0, !1, 2],
                            ["slotslide-vertical", 3, 0, 0, 200, "vertical", !0, !1, 3],
                            ["curtain-1", 4, 3, 0, 0, "horizontal", !0, !0, 4],
                            ["curtain-2", 5, 3, 0, 0, "horizontal", !0, !0, 5],
                            ["curtain-3", 6, 3, 25, 0, "horizontal", !0, !0, 6],
                            ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", !0, !0, 7],
                            ["slotzoom-vertical", 8, 0, 0, 0, "vertical", !0, !0, 8],
                            ["slotfade-horizontal", 9, 0, 0, 500, "horizontal", !0, null, 9],
                            ["slotfade-vertical", 10, 0, 0, 500, "vertical", !0, null, 10],
                            ["fade", 11, 0, 1, 300, "horizontal", !0, null, 11],
                            ["slideleft", 12, 0, 1, 0, "horizontal", !0, !0, 12],
                            ["slideup", 13, 0, 1, 0, "horizontal", !0, !0, 13],
                            ["slidedown", 14, 0, 1, 0, "horizontal", !0, !0, 14],
                            ["slideright", 15, 0, 1, 0, "horizontal", !0, !0, 15],
                            ["papercut", 16, 0, 0, 600, "", null, null, 16],
                            ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", !1, !0, 17],
                            ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", !1, !0, 18],
                            ["cubic", 19, 0, 20, 600, "horizontal", !1, !0, 19],
                            ["cube", 19, 0, 20, 600, "horizontal", !1, !0, 20],
                            ["flyin", 20, 0, 4, 600, "vertical", !1, !0, 21],
                            ["turnoff", 21, 0, 1, 1600, "horizontal", !1, !0, 22],
                            ["incube", 22, 0, 20, 600, "horizontal", !1, !0, 23],
                            ["cubic-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 24],
                            ["cube-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 25],
                            ["incube-horizontal", 24, 0, 20, 500, "vertical", !1, !0, 26],
                            ["turnoff-vertical", 25, 0, 1, 1600, "horizontal", !1, !0, 27],
                            ["fadefromright", 12, 1, 1, 0, "horizontal", !0, !0, 28],
                            ["fadefromleft", 15, 1, 1, 0, "horizontal", !0, !0, 29],
                            ["fadefromtop", 14, 1, 1, 0, "horizontal", !0, !0, 30],
                            ["fadefrombottom", 13, 1, 1, 0, "horizontal", !0, !0, 31],
                            ["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", !0, !0, 32],
                            ["fadetorightfadetoleft", 15, 2, 1, 0, "horizontal", !0, !0, 33],
                            ["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", !0, !0, 34],
                            ["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", !0, !0, 35],
                            ["parallaxtoright", 12, 3, 1, 0, "horizontal", !0, !0, 36],
                            ["parallaxtoleft", 15, 3, 1, 0, "horizontal", !0, !0, 37],
                            ["parallaxtotop", 14, 3, 1, 0, "horizontal", !0, !0, 38],
                            ["parallaxtobottom", 13, 3, 1, 0, "horizontal", !0, !0, 39],
                            ["scaledownfromright", 12, 4, 1, 0, "horizontal", !0, !0, 40],
                            ["scaledownfromleft", 15, 4, 1, 0, "horizontal", !0, !0, 41],
                            ["scaledownfromtop", 14, 4, 1, 0, "horizontal", !0, !0, 42],
                            ["scaledownfrombottom", 13, 4, 1, 0, "horizontal", !0, !0, 43],
                            ["zoomout", 13, 5, 1, 0, "horizontal", !0, !0, 44],
                            ["zoomin", 13, 6, 1, 0, "horizontal", !0, !0, 45],
                            ["notransition", 26, 0, 1, 0, "horizontal", !0, null, 46]
                        ],
                        _ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
                        w = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                        h = 0,
                        g = 1,
                        y = 0,
                        x = 0,
                        T = new Array;
                    "random" == m && (m = Math.round(Math.random() * v.length - 1)) > v.length - 1 && (m = v.length - 1);
                    "random-static" == m && ((m = Math.round(Math.random() * _.length - 1)) > _.length - 1 && (m = _.length - 1), m = _[m]);
                    "random-premium" == m && ((m = Math.round(Math.random() * w.length - 1)) > w.length - 1 && (m = w.length - 1), m = w[m]);
                    1 == a.isJoomla && 16 == m && ((m = Math.round(Math.random() * w.length - 2) + 1) > w.length - 1 && (m = w.length - 1), m = w[m]);
                    n(), r(8) && h > 15 && h < 28 && ((m = Math.round(Math.random() * _.length - 1)) > _.length - 1 && (m = _.length - 1), m = _[m], x = 0, n());
                    var C = -1;
                    (1 == a.leftarrowpressed || a.act > a.next) && (C = 1);
                    a.leftarrowpressed = 0, h > 26 && (h = 26);
                    h < 0 && (h = 0);
                    var P = 300;
                    o.data("masterspeed") != e && o.data("masterspeed") > 99 && o.data("masterspeed") < 4001 && (P = o.data("masterspeed"));
                    T = v[y], i.parent().find(".bullet").each(function() {
                        var e = t(this);
                        e.removeClass("selected"), "withbullet" == a.navigationArrows || "nexttobullets" == a.navigationArrows ? e.index() - 1 == a.next && e.addClass("selected") : e.index() == a.next && e.addClass("selected")
                    }), i.find(">li").each(function() {
                        var e = t(this);
                        e.index != a.act && e.index != a.next && e.css({
                            "z-index": 16
                        })
                    }), s.css({
                        "z-index": 18
                    }), o.css({
                        "z-index": 20
                    }), o.css({
                        opacity: 0
                    }), s.index() != o.index() && 1 != a.firststart && s.find(".tp-caption").each(function(e) {
                        var i = t(this);
                        if (i.find("iframe").length > 0) {
                            try {
                                var a = i.find("iframe"),
                                    n = a.attr("id"),
                                    r = $f(n);
                                r.api("pause"), clearTimeout(i.data("timerplay"))
                            } catch (t) {}
                            try {
                                var s = i.data("player");
                                s.stopVideo(), clearTimeout(i.data("timerplay"))
                            } catch (t) {}
                        }
                        if (i.find("video").length > 0) try {
                            i.find("video").each(function(e) {
                                var i = t(this).parent();
                                i.attr("id"), clearTimeout(i.data("timerplay")), this.pause()
                            })
                        } catch (t) {}
                        try {
                            var o = i.data("timeline"),
                                l = o.getLabelTime("frame99"),
                                d = o.time();
                            if (l > d) {
                                var h = o.getTweensOf(i);
                                t.each(h, function(t, e) {
                                    0 != t && e.pause()
                                }), 0 != i.css("opacity") ? o.play("frame99") : o.progress(1, !1)
                            }
                        } catch (t) {}
                    });
                    k(o, a), o.data("slotamount") == e || o.data("slotamount") < 1 ? (a.slots = Math.round(12 * Math.random() + 4), "boxslide" == m ? a.slots = Math.round(6 * Math.random() + 3) : "flyin" == m && (a.slots = Math.round(4 * Math.random() + 1))) : a.slots = o.data("slotamount");
                    o.data("rotate") == e ? a.rotate = 0 : 999 == o.data("rotate") ? a.rotate = Math.round(360 * Math.random()) : a.rotate = o.data("rotate");
                    (!t.support.transition || a.ie || a.ie9) && (a.rotate = 0);
                    1 == a.firststart && (s.css({
                        opacity: 0
                    }), a.firststart = 0);
                    P += T[4], (4 == h || 5 == h || 6 == h) && a.slots < 3 && (a.slots = 3);
                    0 != T[3] && (a.slots = Math.min(a.slots, T[3]));
                    9 == h && (a.slots = a.width / 20);
                    10 == h && (a.slots = a.height / 20);
                    "box" == T[5] ? (null != T[7] && c(l, a, T[7]), null != T[6] && c(d, a, T[6])) : "vertical" != T[5] && "horizontal" != T[5] || (null != T[7] && p(l, a, T[7], T[5]), null != T[6] && p(d, a, T[6], T[5]));
                    (h < 12 || h > 16) && o.css({
                        opacity: 1
                    });
                    if (0 == h) {
                        d.find(".defaultimg").css({
                            opacity: 0
                        });
                        var O = Math.ceil(a.height / a.sloth),
                            E = 0;
                        d.find(".slotslide").each(function(e) {
                            var n = t(this);
                            (E += 1) == O && (E = 0), TweenLite.fromTo(n, P / 600, {
                                opacity: 0,
                                top: 0 - a.sloth,
                                left: 0 - a.slotw,
                                rotation: a.rotate
                            }, {
                                opacity: 1,
                                transformPerspective: 600,
                                top: 0,
                                left: 0,
                                scale: 1,
                                rotation: 0,
                                delay: (15 * e + 30 * E) / 1500,
                                ease: Power2.easeOut,
                                onComplete: function() {
                                    e == a.slots * a.slots - 1 && b(i, a, d, l, o, s)
                                }
                            })
                        })
                    }
                    if (1 == h) {
                        var S;
                        d.find(".defaultimg").css({
                            opacity: 0
                        }), d.find(".slotslide").each(function(e) {
                            var i = t(this);
                            rand = Math.random() * P + 300, rand2 = 500 * Math.random() + 200, rand + rand2 > S && (S = rand2 + rand2), TweenLite.fromTo(i, rand / 1e3, {
                                opacity: 0,
                                transformPerspective: 600,
                                rotation: a.rotate
                            }, {
                                opacity: 1,
                                ease: Power2.easeInOut,
                                rotation: 0,
                                delay: rand2 / 1e3
                            })
                        }), setTimeout(function() {
                            b(i, a, d, l, o, s)
                        }, P + 300)
                    }
                    2 == h && (d.find(".defaultimg").css({
                        opacity: 0
                    }), l.find(".slotslide").each(function() {
                        var e = t(this);
                        TweenLite.to(e, P / 1e3, {
                            left: a.slotw,
                            rotation: 0 - a.rotate,
                            onComplete: function() {
                                b(i, a, d, l, o, s)
                            }
                        })
                    }), d.find(".slotslide").each(function() {
                        var e = t(this);
                        TweenLite.fromTo(e, P / 1e3, {
                            left: 0 - a.slotw,
                            rotation: a.rotate,
                            transformPerspective: 600
                        }, {
                            left: 0,
                            rotation: 0,
                            ease: Power2.easeOut,
                            onComplete: function() {
                                b(i, a, d, l, o, s)
                            }
                        })
                    }));
                    3 == h && (d.find(".defaultimg").css({
                        opacity: 0
                    }), l.find(".slotslide").each(function() {
                        var e = t(this);
                        TweenLite.to(e, P / 1e3, {
                            top: a.sloth,
                            rotation: a.rotate,
                            transformPerspective: 600,
                            onComplete: function() {
                                b(i, a, d, l, o, s)
                            }
                        })
                    }), d.find(".slotslide").each(function() {
                        var e = t(this);
                        TweenLite.fromTo(e, P / 1e3, {
                            top: 0 - a.sloth,
                            rotation: a.rotate,
                            transformPerspective: 600
                        }, {
                            top: 0,
                            rotation: 0,
                            ease: Power2.easeOut,
                            onComplete: function() {
                                b(i, a, d, l, o, s)
                            }
                        })
                    }));
                    if (4 == h || 5 == h) {
                        d.find(".defaultimg").css({
                            opacity: 0
                        }), setTimeout(function() {
                            l.find(".defaultimg").css({
                                opacity: 0
                            })
                        }, 100);
                        var A = P / 1e3;
                        l.find(".slotslide").each(function(e) {
                            var i = t(this),
                                n = e * A / a.slots;
                            5 == h && (n = (a.slots - e - 1) * A / a.slots / 1.5), TweenLite.to(i, 3 * A, {
                                transformPerspective: 600,
                                top: 0 + a.height,
                                opacity: .5,
                                rotation: a.rotate,
                                ease: Power2.easeInOut,
                                delay: n
                            })
                        }), d.find(".slotslide").each(function(e) {
                            var n = t(this),
                                r = e * A / a.slots;
                            5 == h && (r = (a.slots - e - 1) * A / a.slots / 1.5), TweenLite.fromTo(n, 3 * A, {
                                top: 0 - a.height,
                                opacity: .5,
                                rotation: a.rotate,
                                transformPerspective: 600
                            }, {
                                top: 0,
                                opacity: 1,
                                rotation: 0,
                                ease: Power2.easeInOut,
                                delay: r,
                                onComplete: function() {
                                    e == a.slots - 1 && b(i, a, d, l, o, s)
                                }
                            })
                        })
                    }
                    6 == h && (a.slots < 2 && (a.slots = 2), d.find(".defaultimg").css({
                        opacity: 0
                    }), setTimeout(function() {
                        l.find(".defaultimg").css({
                            opacity: 0
                        })
                    }, 100), l.find(".slotslide").each(function(e) {
                        var i = t(this);
                        if (e < a.slots / 2) var n = 60 * (e + 2);
                        else var n = 60 * (2 + a.slots - e);
                        TweenLite.to(i, (P + n) / 1e3, {
                            top: 0 + a.height,
                            opacity: 1,
                            rotation: a.rotate,
                            transformPerspective: 600,
                            ease: Power2.easeInOut
                        })
                    }), d.find(".slotslide").each(function(e) {
                        var n = t(this);
                        if (e < a.slots / 2) var r = 60 * (e + 2);
                        else var r = 60 * (2 + a.slots - e);
                        TweenLite.fromTo(n, (P + r) / 1e3, {
                            top: 0 - a.height,
                            opacity: 1,
                            rotation: a.rotate,
                            transformPerspective: 600
                        }, {
                            top: 0,
                            opacity: 1,
                            rotation: 0,
                            ease: Power2.easeInOut,
                            onComplete: function() {
                                e == Math.round(a.slots / 2) && b(i, a, d, l, o, s)
                            }
                        })
                    }));
                    7 == h && (P *= 2, d.find(".defaultimg").css({
                        opacity: 0
                    }), setTimeout(function() {
                        l.find(".defaultimg").css({
                            opacity: 0
                        })
                    }, 100), l.find(".slotslide").each(function() {
                        var e = t(this).find("div");
                        TweenLite.to(e, P / 1e3, {
                            left: 0 - a.slotw / 2 + "px",
                            top: 0 - a.height / 2 + "px",
                            width: 2 * a.slotw + "px",
                            height: 2 * a.height + "px",
                            opacity: 0,
                            rotation: a.rotate,
                            transformPerspective: 600,
                            ease: Power2.easeOut
                        })
                    }), d.find(".slotslide").each(function(e) {
                        var n = t(this).find("div");
                        TweenLite.fromTo(n, P / 1e3, {
                            left: 0,
                            top: 0,
                            opacity: 0,
                            transformPerspective: 600
                        }, {
                            left: 0 - e * a.slotw + "px",
                            ease: Power2.easeOut,
                            top: "0px",
                            width: a.width,
                            height: a.height,
                            opacity: 1,
                            rotation: 0,
                            delay: .1,
                            onComplete: function() {
                                b(i, a, d, l, o, s)
                            }
                        })
                    }));
                    8 == h && (P *= 3, d.find(".defaultimg").css({
                        opacity: 0
                    }), l.find(".slotslide").each(function() {
                        var e = t(this).find("div");
                        TweenLite.to(e, P / 1e3, {
                            left: 0 - a.width / 2 + "px",
                            top: 0 - a.sloth / 2 + "px",
                            width: 2 * a.width + "px",
                            height: 2 * a.sloth + "px",
                            transformPerspective: 600,
                            opacity: 0,
                            rotation: a.rotate
                        })
                    }), d.find(".slotslide").each(function(e) {
                        var n = t(this).find("div");
                        TweenLite.fromTo(n, P / 1e3, {
                            left: 0,
                            top: 0,
                            opacity: 0,
                            transformPerspective: 600
                        }, {
                            left: "0px",
                            top: 0 - e * a.sloth + "px",
                            width: d.find(".defaultimg").data("neww") + "px",
                            height: d.find(".defaultimg").data("newh") + "px",
                            opacity: 1,
                            rotation: 0,
                            onComplete: function() {
                                b(i, a, d, l, o, s)
                            }
                        })
                    }));
                    if (9 == h || 10 == h) {
                        d.find(".defaultimg").css({
                            opacity: 0
                        });
                        var L = 0;
                        d.find(".slotslide").each(function(e) {
                            var i = t(this);
                            L++, TweenLite.fromTo(i, P / 1e3, {
                                opacity: 0,
                                transformPerspective: 600,
                                left: 0,
                                top: 0
                            }, {
                                opacity: 1,
                                ease: Power2.easeInOut,
                                delay: 4 * e / 1e3
                            })
                        }), setTimeout(function() {
                            b(i, a, d, l, o, s)
                        }, P + 4 * L)
                    }
                    if (11 == h || 26 == h) {
                        d.find(".defaultimg").css({
                            opacity: 0,
                            position: "relative"
                        });
                        var L = 0;
                        26 == h && (P = 0), d.find(".slotslide").each(function(e) {
                            var i = t(this);
                            TweenLite.fromTo(i, P / 1e3, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                ease: Power2.easeInOut
                            })
                        }), setTimeout(function() {
                            b(i, a, d, l, o, s)
                        }, P + 15)
                    }
                    if (12 == h || 13 == h || 14 == h || 15 == h) {
                        setTimeout(function() {
                            l.find(".defaultimg").css({
                                opacity: 0
                            })
                        }, 100), d.find(".defaultimg").css({
                            opacity: 0
                        });
                        var M = a.width,
                            I = a.height,
                            z = d.find(".slotslide");
                        "on" != a.fullWidth && "on" != a.fullSreen || (M = z.width(), I = z.height());
                        var R = 0,
                            N = 0;
                        12 == h ? R = M : 15 == h ? R = 0 - M : 13 == h ? N = I : 14 == h && (N = 0 - I);
                        var D = 1,
                            Y = 1,
                            X = 1,
                            H = Power2.easeInOut,
                            V = Power2.easeInOut,
                            F = P / 1e3,
                            W = F;
                        1 == g && (D = 0), 2 == g && (D = 0), 3 == g && (H = Power2.easeInOut, V = Power1.easeInOut, s.css({
                            position: "absolute",
                            "z-index": 20
                        }), o.css({
                            position: "absolute",
                            "z-index": 15
                        }), F = P / 1200), 4 != g && 5 != g || (Y = .6), 6 == g && (Y = 1.4), 5 != g && 6 != g || (X = 1.4, D = 0, M = 0, I = 0, R = 0, N = 0), 6 == g && (X = .6), TweenLite.fromTo(z, F, {
                            left: R,
                            top: N,
                            scale: X,
                            opacity: D,
                            rotation: a.rotate
                        }, {
                            opacity: 1,
                            rotation: 0,
                            left: 0,
                            top: 0,
                            scale: 1,
                            ease: V,
                            onComplete: function() {
                                b(i, a, d, l, o, s), s.css({
                                    position: "absolute",
                                    "z-index": 18
                                }), o.css({
                                    position: "absolute",
                                    "z-index": 20
                                })
                            }
                        });
                        var j = l.find(".slotslide");
                        4 != g && 5 != g || (M = 0, I = 0), 1 != g && (12 == h ? TweenLite.to(j, W, {
                            left: 0 - M + "px",
                            scale: Y,
                            opacity: D,
                            rotation: a.rotate,
                            ease: H
                        }) : 15 == h ? TweenLite.to(j, W, {
                            left: M + "px",
                            scale: Y,
                            opacity: D,
                            rotation: a.rotate,
                            ease: H
                        }) : 13 == h ? TweenLite.to(j, W, {
                            top: 0 - I + "px",
                            scale: Y,
                            opacity: D,
                            rotation: a.rotate,
                            ease: H
                        }) : 14 == h && TweenLite.to(j, W, {
                            top: I + "px",
                            scale: Y,
                            opacity: D,
                            rotation: a.rotate,
                            ease: H
                        })), o.css({
                            opacity: 1
                        })
                    }
                    if (16 == h) {
                        s.css({
                            position: "absolute",
                            "z-index": 20
                        }), o.css({
                            position: "absolute",
                            "z-index": 15
                        }), s.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'), s.find(".tp-half-one").clone(!0).appendTo(s).addClass("tp-half-two"), s.find(".tp-half-two").removeClass("tp-half-one");
                        var M = a.width,
                            I = a.height;
                        "on" == a.autoHeight && (I = i.height()), s.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + M + "px;height:" + I + 'px;"></div>'), s.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + M + "px;height:" + I + 'px;"></div>'), s.find(".tp-half-two .defaultimg").css({
                            position: "absolute",
                            top: "-50%"
                        }), s.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px"></div>'), TweenLite.set(s.find(".tp-half-two"), {
                            width: M,
                            height: I,
                            overflow: "hidden",
                            zIndex: 15,
                            position: "absolute",
                            top: I / 2,
                            left: "0px",
                            transformPerspective: 600,
                            transformOrigin: "center bottom"
                        }), TweenLite.set(s.find(".tp-half-one"), {
                            width: M,
                            height: I / 2,
                            overflow: "visible",
                            zIndex: 10,
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            transformPerspective: 600,
                            transformOrigin: "center top"
                        });
                        s.find(".defaultimg");
                        var B = Math.round(20 * Math.random() - 10),
                            U = Math.round(20 * Math.random() - 10),
                            q = Math.round(20 * Math.random() - 10),
                            Z = .4 * Math.random() - .2,
                            $ = .4 * Math.random() - .2,
                            Q = 1 * Math.random() + 1,
                            G = 1 * Math.random() + 1;
                        TweenLite.fromTo(s.find(".tp-half-one"), P / 1e3, {
                            width: M,
                            height: I / 2,
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            transformPerspective: 600,
                            transformOrigin: "center top"
                        }, {
                            scale: Q,
                            rotation: B,
                            y: 0 - I - I / 4,
                            ease: Power2.easeInOut
                        }), setTimeout(function() {
                            TweenLite.set(s.find(".tp-half-one"), {
                                overflow: "hidden"
                            })
                        }, 50), TweenLite.fromTo(s.find(".tp-half-one"), P / 2e3, {
                            opacity: 1,
                            transformPerspective: 600,
                            transformOrigin: "center center"
                        }, {
                            opacity: 0,
                            delay: P / 2e3
                        }), TweenLite.fromTo(s.find(".tp-half-two"), P / 1e3, {
                            width: M,
                            height: I,
                            overflow: "hidden",
                            position: "absolute",
                            top: I / 2,
                            left: "0px",
                            transformPerspective: 600,
                            transformOrigin: "center bottom"
                        }, {
                            scale: G,
                            rotation: U,
                            y: I + I / 4,
                            ease: Power2.easeInOut
                        }), TweenLite.fromTo(s.find(".tp-half-two"), P / 2e3, {
                            opacity: 1,
                            transformPerspective: 600,
                            transformOrigin: "center center"
                        }, {
                            opacity: 0,
                            delay: P / 2e3
                        }), null != s.html() && TweenLite.fromTo(o, (P - 200) / 1e3, {
                            opacity: 0,
                            scale: .8,
                            x: a.width * Z,
                            y: I * $,
                            rotation: q,
                            transformPerspective: 600,
                            transformOrigin: "center center"
                        }, {
                            rotation: 0,
                            scale: 1,
                            x: 0,
                            y: 0,
                            opacity: 1,
                            ease: Power2.easeInOut
                        }), d.find(".defaultimg").css({
                            opacity: 1
                        }), setTimeout(function() {
                            s.css({
                                position: "absolute",
                                "z-index": 18
                            }), o.css({
                                position: "absolute",
                                "z-index": 20
                            }), d.find(".defaultimg").css({
                                opacity: 1
                            }), l.find(".defaultimg").css({
                                opacity: 0
                            }), s.find(".tp-half-one").length > 0 && (s.find(".tp-half-one .defaultimg").unwrap(), s.find(".tp-half-one .slotholder").unwrap()), s.find(".tp-half-two").remove(), a.transition = 0, a.act = a.next
                        }, P), o.css({
                            opacity: 1
                        })
                    }
                    17 == h && (d.find(".defaultimg").css({
                        opacity: 0
                    }), d.find(".slotslide").each(function(e) {
                        var n = t(this);
                        TweenLite.fromTo(n, P / 800, {
                            opacity: 0,
                            rotationY: 0,
                            scale: .9,
                            rotationX: -110,
                            transformPerspective: 600,
                            transformOrigin: "center center"
                        }, {
                            opacity: 1,
                            top: 0,
                            left: 0,
                            scale: 1,
                            rotation: 0,
                            rotationX: 0,
                            rotationY: 0,
                            ease: Power3.easeOut,
                            delay: .06 * e,
                            onComplete: function() {
                                e == a.slots - 1 && b(i, a, d, l, o, s)
                            }
                        })
                    }));
                    18 == h && (d.find(".defaultimg").css({
                        opacity: 0
                    }), d.find(".slotslide").each(function(e) {
                        var n = t(this);
                        TweenLite.fromTo(n, P / 500, {
                            opacity: 0,
                            rotationY: 310,
                            scale: .9,
                            rotationX: 10,
                            transformPerspective: 600,
                            transformOrigin: "center center"
                        }, {
                            opacity: 1,
                            top: 0,
                            left: 0,
                            scale: 1,
                            rotation: 0,
                            rotationX: 0,
                            rotationY: 0,
                            ease: Power3.easeOut,
                            delay: .06 * e,
                            onComplete: function() {
                                e == a.slots - 1 && b(i, a, d, l, o, s)
                            }
                        })
                    }));
                    if (19 == h || 22 == h) {
                        d.find(".defaultimg").css({
                            opacity: 0
                        }), setTimeout(function() {
                            l.find(".defaultimg").css({
                                opacity: 0
                            })
                        }, 100);
                        o.css("z-index"), s.css("z-index");
                        var J = 90,
                            D = 1;
                        if (1 == C && (J = -90), 19 == h) {
                            var K = "center center -" + a.height / 2;
                            D = 0
                        } else var K = "center center " + a.height / 2;
                        TweenLite.fromTo(d, P / 2e3, {
                            transformPerspective: 600,
                            z: 0,
                            x: 0,
                            rotationY: 0
                        }, {
                            rotationY: 1,
                            ease: Power1.easeInOut,
                            z: -40
                        }), TweenLite.fromTo(d, P / 2e3, {
                            transformPerspective: 600,
                            z: -40,
                            rotationY: 1
                        }, {
                            rotationY: 0,
                            z: 0,
                            ease: Power1.easeInOut,
                            x: 0,
                            delay: P / 4e3 * 3
                        }), TweenLite.fromTo(l, P / 2e3, {
                            transformPerspective: 600,
                            z: 0,
                            x: 0,
                            rotationY: 0
                        }, {
                            rotationY: 1,
                            x: 0,
                            ease: Power1.easeInOut,
                            z: -40
                        }), TweenLite.fromTo(l, P / 2e3, {
                            transformPerspective: 600,
                            z: -40,
                            x: 0,
                            rotationY: 1
                        }, {
                            rotationY: 0,
                            z: 0,
                            x: 0,
                            ease: Power1.easeInOut,
                            delay: P / 4e3 * 3
                        }), d.find(".slotslide").each(function(e) {
                            var n = t(this);
                            TweenLite.fromTo(n, P / 1e3, {
                                left: 0,
                                rotationY: a.rotate,
                                opacity: D,
                                top: 0,
                                scale: .8,
                                transformPerspective: 600,
                                transformOrigin: K,
                                rotationX: J
                            }, {
                                left: 0,
                                rotationY: 0,
                                opacity: 1,
                                top: 0,
                                z: 0,
                                scale: 1,
                                rotationX: 0,
                                delay: 50 * e / 1e3,
                                ease: Power2.easeInOut,
                                onComplete: function() {
                                    e == a.slots - 1 && b(i, a, d, l, o, s)
                                }
                            }), TweenLite.to(n, .1, {
                                opacity: 1,
                                delay: 50 * e / 1e3 + P / 3e3
                            })
                        }), l.find(".slotslide").each(function(e) {
                            var n = t(this),
                                r = -90;
                            1 == C && (r = 90), TweenLite.fromTo(n, P / 1e3, {
                                opacity: 1,
                                rotationY: 0,
                                top: 0,
                                z: 0,
                                scale: 1,
                                transformPerspective: 600,
                                transformOrigin: K,
                                rotationX: 0
                            }, {
                                opacity: 1,
                                rotationY: a.rotate,
                                top: 0,
                                scale: .8,
                                rotationX: r,
                                delay: 50 * e / 1e3,
                                ease: Power2.easeInOut,
                                onComplete: function() {
                                    e == a.slots - 1 && b(i, a, d, l, o, s)
                                }
                            }), TweenLite.to(n, .1, {
                                opacity: 0,
                                delay: 50 * e / 1e3 + (P / 1e3 - P / 1e4)
                            })
                        })
                    }
                    if (20 == h) {
                        d.find(".defaultimg").css({
                            opacity: 0
                        }), setTimeout(function() {
                            l.find(".defaultimg").css({
                                opacity: 0
                            })
                        }, 100);
                        o.css("z-index"), s.css("z-index");
                        if (1 == C) var tt = -a.width,
                            J = 70,
                            K = "left center -" + a.height / 2;
                        else var tt = a.width,
                            J = -70,
                            K = "right center -" + a.height / 2;
                        d.find(".slotslide").each(function(e) {
                            var n = t(this);
                            TweenLite.fromTo(n, P / 1500, {
                                left: tt,
                                rotationX: 40,
                                z: -600,
                                opacity: D,
                                top: 0,
                                transformPerspective: 600,
                                transformOrigin: K,
                                rotationY: J
                            }, {
                                left: 0,
                                delay: 50 * e / 1e3,
                                ease: Power2.easeInOut
                            }), TweenLite.fromTo(n, P / 1e3, {
                                rotationX: 40,
                                z: -600,
                                opacity: D,
                                top: 0,
                                scale: 1,
                                transformPerspective: 600,
                                transformOrigin: K,
                                rotationY: J
                            }, {
                                rotationX: 0,
                                opacity: 1,
                                top: 0,
                                z: 0,
                                scale: 1,
                                rotationY: 0,
                                delay: 50 * e / 1e3,
                                ease: Power2.easeInOut,
                                onComplete: function() {
                                    e == a.slots - 1 && b(i, a, d, l, o, s)
                                }
                            }), TweenLite.to(n, .1, {
                                opacity: 1,
                                delay: 50 * e / 1e3 + P / 2e3
                            })
                        }), l.find(".slotslide").each(function(e) {
                            var n = t(this);
                            if (1 != C) var r = -a.width,
                                h = 70,
                                p = "left center -" + a.height / 2;
                            else var r = a.width,
                                h = -70,
                                p = "right center -" + a.height / 2;
                            TweenLite.fromTo(n, P / 1e3, {
                                opacity: 1,
                                rotationX: 0,
                                top: 0,
                                z: 0,
                                scale: 1,
                                left: 0,
                                transformPerspective: 600,
                                transformOrigin: p,
                                rotationY: 0
                            }, {
                                opacity: 1,
                                rotationX: 40,
                                top: 0,
                                z: -600,
                                left: r,
                                scale: .8,
                                rotationY: h,
                                delay: 50 * e / 1e3,
                                ease: Power2.easeInOut,
                                onComplete: function() {
                                    e == a.slots - 1 && b(i, a, d, l, o, s)
                                }
                            }), TweenLite.to(n, .1, {
                                opacity: 0,
                                delay: 50 * e / 1e3 + (P / 1e3 - P / 1e4)
                            })
                        })
                    }
                    if (21 == h || 25 == h) {
                        d.find(".defaultimg").css({
                            opacity: 0
                        }), setTimeout(function() {
                            l.find(".defaultimg").css({
                                opacity: 0
                            })
                        }, 100);
                        o.css("z-index"), s.css("z-index");
                        if (1 == C) {
                            var tt = -a.width,
                                J = 110;
                            if (25 == h) {
                                var K = "center top 0";
                                rot2 = -J, J = a.rotate
                            } else {
                                var K = "left center 0";
                                rot2 = a.rotate
                            }
                        } else {
                            var tt = a.width,
                                J = -110;
                            if (25 == h) {
                                var K = "center bottom 0";
                                rot2 = -J, J = a.rotate
                            } else {
                                var K = "right center 0";
                                rot2 = a.rotate
                            }
                        }
                        if (d.find(".slotslide").each(function(e) {
                                var n = t(this);
                                TweenLite.fromTo(n, P / 1500, {
                                    left: 0,
                                    rotationX: rot2,
                                    z: 0,
                                    opacity: 0,
                                    top: 0,
                                    scale: 1,
                                    transformPerspective: 600,
                                    transformOrigin: K,
                                    rotationY: J
                                }, {
                                    left: 0,
                                    rotationX: 0,
                                    top: 0,
                                    z: 0,
                                    scale: 1,
                                    rotationY: 0,
                                    delay: 100 * e / 1e3 + P / 1e4,
                                    ease: Power2.easeInOut,
                                    onComplete: function() {
                                        e == a.slots - 1 && b(i, a, d, l, o, s)
                                    }
                                }), TweenLite.to(n, .3, {
                                    opacity: 1,
                                    delay: 100 * e / 1e3 + .2 * P / 2e3 + P / 1e4
                                })
                            }), 1 != C) {
                            var tt = -a.width,
                                J = 90;
                            if (25 == h) {
                                var K = "center top 0";
                                rot2 = -J, J = a.rotate
                            } else {
                                var K = "left center 0";
                                rot2 = a.rotate
                            }
                        } else {
                            var tt = a.width,
                                J = -90;
                            if (25 == h) {
                                var K = "center bottom 0";
                                rot2 = -J, J = a.rotate
                            } else {
                                var K = "right center 0";
                                rot2 = a.rotate
                            }
                        }
                        l.find(".slotslide").each(function(e) {
                            var i = t(this);
                            TweenLite.fromTo(i, P / 3e3, {
                                left: 0,
                                rotationX: 0,
                                z: 0,
                                opacity: 1,
                                top: 0,
                                scale: 1,
                                transformPerspective: 600,
                                transformOrigin: K,
                                rotationY: 0
                            }, {
                                left: 0,
                                rotationX: rot2,
                                top: 0,
                                z: 0,
                                scale: 1,
                                rotationY: J,
                                delay: 100 * e / 1e3,
                                ease: Power1.easeInOut
                            }), TweenLite.to(i, .2, {
                                opacity: 0,
                                delay: 50 * e / 1e3 + (P / 3e3 - P / 1e4)
                            })
                        })
                    }
                    if (23 == h || 24 == h) {
                        d.find(".defaultimg").css({
                            opacity: 0
                        }), setTimeout(function() {
                            l.find(".defaultimg").css({
                                opacity: 0
                            })
                        }, 100);
                        o.css("z-index"), s.css("z-index");
                        var J = -90;
                        1 == C && (J = 90);
                        var D = 1;
                        if (23 == h) {
                            var K = "center center -" + a.width / 2;
                            D = 0
                        } else var K = "center center " + a.width / 2;
                        TweenLite.fromTo(d, P / 2e3, {
                            transformPerspective: 600,
                            z: 0,
                            x: 0,
                            rotationY: 0
                        }, {
                            rotationY: 1,
                            ease: Power1.easeInOut,
                            z: -90
                        }), TweenLite.fromTo(d, P / 2e3, {
                            transformPerspective: 600,
                            z: -90,
                            rotationY: 1
                        }, {
                            rotationY: 0,
                            z: 0,
                            ease: Power1.easeInOut,
                            x: 0,
                            delay: P / 4e3 * 3
                        }), TweenLite.fromTo(l, P / 2e3, {
                            transformPerspective: 600,
                            z: 0,
                            x: 0,
                            rotationY: 0
                        }, {
                            rotationY: 1,
                            x: 0,
                            ease: Power1.easeInOut,
                            z: -90
                        }), TweenLite.fromTo(l, P / 2e3, {
                            transformPerspective: 600,
                            z: -90,
                            x: 0,
                            rotationY: 1
                        }, {
                            rotationY: 0,
                            z: 0,
                            x: 0,
                            ease: Power1.easeInOut,
                            delay: P / 4e3 * 3
                        }), d.find(".slotslide").each(function(e) {
                            var n = t(this);
                            TweenLite.fromTo(n, P / 1e3, {
                                left: 0,
                                rotationX: a.rotate,
                                opacity: D,
                                top: 0,
                                scale: 1,
                                transformPerspective: 600,
                                transformOrigin: K,
                                rotationY: J
                            }, {
                                left: 0,
                                rotationX: 0,
                                opacity: 1,
                                top: 0,
                                z: 0,
                                scale: 1,
                                rotationY: 0,
                                delay: 50 * e / 1e3,
                                ease: Power2.easeInOut,
                                onComplete: function() {
                                    e == a.slots - 1 && b(i, a, d, l, o, s)
                                }
                            }), TweenLite.to(n, .1, {
                                opacity: 1,
                                delay: 50 * e / 1e3 + P / 3e3
                            })
                        }), J = 90, 1 == C && (J = -90), l.find(".slotslide").each(function(e) {
                            var n = t(this);
                            TweenLite.fromTo(n, P / 1e3, {
                                left: 0,
                                opacity: 1,
                                rotationX: 0,
                                top: 0,
                                z: 0,
                                scale: 1,
                                transformPerspective: 600,
                                transformOrigin: K,
                                rotationY: 0
                            }, {
                                left: 0,
                                opacity: 1,
                                rotationX: a.rotate,
                                top: 0,
                                scale: 1,
                                rotationY: J,
                                delay: 50 * e / 1e3,
                                ease: Power2.easeInOut,
                                onComplete: function() {
                                    e == a.slots - 1 && b(i, a, d, l, o, s)
                                }
                            }), TweenLite.to(n, .1, {
                                opacity: 0,
                                delay: 50 * e / 1e3 + (P / 1e3 - P / 1e4)
                            })
                        })
                    }
                    var et = {};
                    et.slideIndex = a.next + 1, i.trigger("revolution.slide.onchange", et), setTimeout(function() {
                        i.trigger("revolution.slide.onafterswap")
                    }, P), i.trigger("revolution.slide.onvideostop")
                }(n, i)
        }

        function w(i, a) {
            try {
                var n = i.find(">ul:first-child >li:eq(" + a.act + ")")
            } catch (t) {
                n = i.find(">ul:first-child >li:eq(1)")
            }
            a.lastslide = a.act;
            var s = i.find(">ul:first-child >li:eq(" + a.next + ")"),
                o = (n.find(".slotholder"), s.find(".slotholder")),
                l = o.data("bgposition"),
                d = o.data("bgpositionend"),
                h = o.data("zoomstart") / 100,
                p = o.data("zoomend") / 100,
                c = o.data("rotationstart"),
                f = o.data("rotationend"),
                u = o.data("bgfit"),
                m = o.data("bgfitend"),
                g = o.data("easeme"),
                v = o.data("duration") / 1e3;
            u == e && (u = 100), m == e && (m = 100), u = y(u, o, a), m = y(m, o, a), h == e && (h = 1), p == e && (p = 1), c == e && (c = 0), f == e && (f = 0), h < 1 && (h = 1), p < 1 && (p = 1), o.find(".defaultimg").each(function() {
                var e = t(this);
                e.data("kenburn", TweenLite.fromTo(e, v, {
                    transformPerspective: 1200,
                    backgroundSize: u,
                    z: 0,
                    backgroundPosition: l,
                    rotationZ: c
                }, {
                    yoyo: 2,
                    rotationZ: f,
                    ease: g,
                    backgroundSize: m,
                    backgroundPosition: d,
                    onUpdate: function() {
                        e.data("bgposition", e.css("backgroundPosition")), r(8) || e.data("currotate", function(t) {
                            var e = t.css("-webkit-transform") || t.css("-moz-transform") || t.css("-ms-transform") || t.css("-o-transform") || t.css("transform");
                            if ("none" !== e) var i = e.split("(")[1].split(")")[0].split(","),
                                a = i[0],
                                n = i[1],
                                r = Math.round(Math.atan2(n, a) * (180 / Math.PI));
                            else var r = 0;
                            return r < 0 ? r += 360 : r
                        }(e)), r(8) || e.data("curscale", e.css("backgroundSize"))
                    }
                }))
            })
        }

        function y(t, e, i) {
            var a = e.data("owidth");
            return t + "% " + e.data("oheight") * (i.container.width() / a) / i.container.height() * t + "%"
        }

        function b(t, e, i, a, n, r) {
            u(t, e), i.find(".defaultimg").css({
                opacity: 1
            }), n.index() != r.index() && a.find(".defaultimg").css({
                opacity: 0
            }), e.act = e.next, o(t), "on" == i.data("kenburns") && w(t, e)
        }

        function x(e) {
            var i = e.target.getVideoEmbedCode(),
                a = t("#" + i.split('id="')[1].split('"')[0]),
                n = a.closest(".tp-simpleresponsive"),
                r = a.parent().data("player");
            if (e.data == YT.PlayerState.PLAYING) {
                var s = n.find(".tp-bannertimer").data("opt");
                "mute" == a.closest(".tp-caption").data("volume") && r.mute(), s.videoplaying = !0, n.trigger("stoptimer"), n.trigger("revolution.slide.onvideoplay")
            } else {
                s = n.find(".tp-bannertimer").data("opt"); - 1 != e.data && (s.videoplaying = !1, n.trigger("playtimer"), n.trigger("revolution.slide.onvideostop"))
            }
            0 == e.data && 1 == s.nextslideatend && s.container.revnext()
        }

        function T(t, e) {
            var i = e.width(),
                a = e.height(),
                n = t.data("mediaAspect"),
                r = i / a;
            t.css({
                position: "absolute"
            });
            t.find("video");
            r < n ? (t.width(a * n).height(a), t.css("top", 0).css("left", -(a * n - i) / 2).css("height", a)) : (t.width(i).height(i / n), t.css("top", -(i / n - a) / 2).css("left", 0).css("height", i / n))
        }

        function C() {
            var t = new Object;
            return t.x = 0, t.y = 0, t.rotationX = 0, t.rotationY = 0, t.rotationZ = 0, t.scale = 1, t.scaleX = 1, t.scaleY = 1, t.skewX = 0, t.skewY = 0, t.opacity = 0, t.transformOrigin = "center, center", t.transformPerspective = 400, t.rotation = 0, t
        }

        function P(e, i) {
            var a = i.split(";");
            return t.each(a, function(t, i) {
                var a = (i = i.split(":"))[0],
                    n = i[1];
                "rotationX" == a && (e.rotationX = parseInt(n, 0)), "rotationY" == a && (e.rotationY = parseInt(n, 0)), "rotationZ" == a && (e.rotationZ = parseInt(n, 0)), "rotationZ" == a && (e.rotation = parseInt(n, 0)), "scaleX" == a && (e.scaleX = parseFloat(n)), "scaleY" == a && (e.scaleY = parseFloat(n)), "opacity" == a && (e.opacity = parseFloat(n)), "skewX" == a && (e.skewX = parseInt(n, 0)), "skewY" == a && (e.skewY = parseInt(n, 0)), "x" == a && (e.x = parseInt(n, 0)), "y" == a && (e.y = parseInt(n, 0)), "z" == a && (e.z = parseInt(n, 0)), "transformOrigin" == a && (e.transformOrigin = n.toString()), "transformPerspective" == a && (e.transformPerspective = parseInt(n, 0))
            }), e
        }

        function k(i, a, r) {
            var s = 0,
                o = 0;
            i.find(".tp-caption").each(function(i) {
                s = a.width / 2 - a.startwidth * a.bw / 2;
                var l = a.bw;
                a.bh;
                "on" == a.fullScreen && (o = a.height / 2 - a.startheight * a.bh / 2), "on" == a.autoHeight && (o = a.container.height() / 2 - a.startheight * a.bh / 2), o < 0 && (o = 0);
                var d = t(this),
                    h = 0;
                if (a.width < a.hideCaptionAtLimit && "on" == d.data("captionhidden") ? (d.addClass("tp-hidden-caption"), h = 1) : a.width < a.hideAllCaptionAtLimit || a.width < a.hideAllCaptionAtLilmit ? (d.addClass("tp-hidden-caption"), h = 1) : d.removeClass("tp-hidden-caption"), 0 == h) {
                    d.data("linktoslide") == e || d.hasClass("hasclicklistener") || (d.addClass("hasclicklistener"), d.css({
                        cursor: "pointer"
                    }), "no" != d.data("linktoslide") && d.click(function() {
                        var e = t(this).data("linktoslide");
                        "next" != e && "prev" != e ? (a.container.data("showus", e), a.container.parent().find(".tp-rightarrow").click()) : "next" == e ? a.container.parent().find(".tp-rightarrow").click() : "prev" == e && a.container.parent().find(".tp-leftarrow").click()
                    })), s < 0 && (s = 0);
                    var p = "iframe" + Math.round(1e3 * Math.random() + 1);
                    if ((d.find("iframe").length > 0 || d.find("video").length > 0) && (1 != d.data("autoplayonlyfirsttime") && "true" != d.data("autoplayonlyfirsttime") || d.data("autoplay", !0), d.find("iframe").each(function() {
                            var i = t(this);
                            if (n()) {
                                var s = i.attr("src");
                                i.attr("src", ""), i.attr("src", s)
                            }
                            if (a.nextslideatend = d.data("nextslideatend"), d.data("thumbimage") != e && d.data("thumbimage").length > 2 && 1 != d.data("autoplay") && !r && (d.find(".tp-thumb-image").remove(), d.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url(' + d.data("thumbimage") + '); background-size:cover"></div>')), i.attr("src").toLowerCase().indexOf("youtube") >= 0) {
                                if (i.hasClass("HasListener")) {
                                    if (1 == d.data("autoplay")) {
                                        g = d.data("player");
                                        d.data("timerplay", setTimeout(function() {
                                            "on" == d.data("forcerewind") && g.seekTo(0), g.playVideo()
                                        }, d.data("start")))
                                    }
                                } else try {
                                    i.attr("id", p);
                                    var o = setInterval(function() {
                                        YT != e && typeof YT.Player != e && void 0 !== YT.Player && (g = 1 == d.data("autoplay") ? new YT.Player(p, {
                                            events: {
                                                onStateChange: x,
                                                onReady: function(t) {
                                                    t.target.playVideo()
                                                }
                                            }
                                        }) : new YT.Player(p, {
                                            events: {
                                                onStateChange: x
                                            }
                                        }), i.addClass("HasListener"), d.data("player", g), clearInterval(o))
                                    }, 100)
                                } catch (t) {}
                                d.find(".tp-thumb-image").click(function() {
                                    TweenLite.to(t(this), .3, {
                                        opacity: 0,
                                        ease: Power3.easeInOut,
                                        onComplete: function() {
                                            d.find(".tp-thumb-image").remove()
                                        }
                                    }), d.data("player").playVideo()
                                })
                            } else if (i.attr("src").toLowerCase().indexOf("vimeo") >= 0) {
                                if (i.hasClass("HasListener")) {
                                    if (1 == d.data("autoplay")) {
                                        var l = (i = d.find("iframe")).attr("id");
                                        v = setInterval(function() {
                                            if ($f != e && typeof $f(l).api != e && void 0 !== $f(l).api) {
                                                var t = $f(l);
                                                d.data("timerplay", setTimeout(function() {
                                                    "on" == d.data("forcerewind") && t.api("seekTo", 0), t.api("play")
                                                }, d.data("start"))), clearInterval(v)
                                            }
                                        }, 100)
                                    }
                                } else {
                                    i.addClass("HasListener"), i.attr("id", p);
                                    for (var h, c = i.attr("src"), f = {}, u = c, m = /([^&=]+)=([^&]*)/g; h = m.exec(u);) f[decodeURIComponent(h[1])] = decodeURIComponent(h[2]);
                                    c = f.player_id != e ? c.replace(f.player_id, p) : c + "&player_id=" + p;
                                    try {
                                        c = c.replace("api=0", "api=1")
                                    } catch (t) {}
                                    c += "&api=1", i.attr("src", c);
                                    var g = d.find("iframe")[0],
                                        v = setInterval(function() {
                                            $f != e && typeof $f(p).api != e && void 0 !== $f(p).api && ($f(g).addEvent("ready", function() {
                                                var e, i, a, n, r;
                                                e = p, i = d.data("autoplay"), a = $f(e), n = t("#" + e), r = n.closest(".tp-simpleresponsive"), a.addEvent("ready", function(t) {
                                                    i && a.api("play"), a.addEvent("play", function(t) {
                                                        r.find(".tp-bannertimer").data("opt").videoplaying = !0, r.trigger("stoptimer"), "mute" == n.closest(".tp-caption").data("volume") && a.api("setVolume", "0")
                                                    }), a.addEvent("finish", function(t) {
                                                        var e = r.find(".tp-bannertimer").data("opt");
                                                        e.videoplaying = !1, r.trigger("playtimer"), r.trigger("revolution.slide.onvideoplay"), 1 == e.nextslideatend && e.container.revnext()
                                                    }), a.addEvent("pause", function(t) {
                                                        r.find(".tp-bannertimer").data("opt").videoplaying = !1, r.trigger("playtimer"), r.trigger("revolution.slide.onvideostop")
                                                    })
                                                })
                                            }), clearInterval(v))
                                        }, 100)
                                }
                                d.find(".tp-thumb-image").click(function() {
                                    TweenLite.to(t(this), .3, {
                                        opacity: 0,
                                        ease: Power3.easeInOut,
                                        onComplete: function() {
                                            d.find(".tp-thumb-image").remove()
                                        }
                                    });
                                    var i = d.find("iframe").attr("id"),
                                        a = setInterval(function() {
                                            $f != e && typeof $f(i).api != e && void 0 !== $f(i).api && ($f(i).api("play"), clearInterval(a))
                                        }, 100)
                                })
                            }
                        }), d.find("video").length > 0 && d.find("video").each(function(i) {
                            var n = t(this),
                                r = this;
                            n.parent().hasClass("html5vid") || n.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:auto;height:auto"></div>');
                            var s = t(this).parent();
                            r.addEventListener ? r.addEventListener("loadedmetadata", function() {
                                s.data("metaloaded", 1)
                            }) : r.attachEvent("loadedmetadata", function() {
                                s.data("metaloaded", 1)
                            }), n.hasClass("HasListener") || (n.addClass("HasListener"), r.addEventListener("play", function() {
                                s.addClass("videoisplaying"), s.find(".tp-poster").remove(), "mute" == d.data("volume") && (r.muted = !0), a.container.trigger("revolution.slide.onvideoplay"), a.videoplaying = !0, a.container.trigger("stoptimer")
                            }), r.addEventListener("pause", function() {
                                s.removeClass("videoisplaying"), a.videoplaying = !1, a.container.trigger("playtimer"), a.container.trigger("revolution.slide.onvideostop")
                            }), r.addEventListener("ended", function() {
                                s.removeClass("videoisplaying"), a.videoplaying = !1, a.container.trigger("playtimer"), a.container.trigger("revolution.slide.onvideostop"), 1 == a.nextslideatend && a.container.revnext()
                            })), n.attr("poster") != e && 0 == s.find(".tp-poster").length && s.append('<div class="tp-poster" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;background:url(' + n.attr("poster") + '); background-position:center center;background-size:100%;background-repeat:no-repeat;"></div>'), n.attr("control") == e && 0 == s.find(".tp-video-play-button").length && (s.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><div class="tp-revstop"></div></div>'), s.find(".tp-video-play-button").click(function() {
                                s.hasClass("videoisplaying") ? r.pause() : r.play()
                            })), n.attr("control") == e && s.find("video, .tp-poster").click(function() {
                                s.hasClass("videoisplaying") ? r.pause() : r.play()
                            }), 1 == d.data("forcecover") && (T(s, a.container), s.addClass("fullcoveredvideo"), d.addClass("fullcoveredvideo")), (1 == d.data("forcecover") || d.hasClass("fullscreenvideo")) && s.css({
                                width: "100%",
                                height: "100%"
                            });
                            var o = !1;
                            1 != d.data("autoplayonlyfirsttime") && "true" != d.data("autoplayonlyfirsttime") || (o = !0), clearInterval(s.data("interval")), s.data("interval", setInterval(function() {
                                if (1 == s.data("metaloaded") || NaN != r.duration) {
                                    clearInterval(s.data("interval")), "none" != d.data("dottedoverlay") && d.data("dottedoverlay") != e && 1 != d.find(".tp-dottedoverlay").length && s.append('<div class="tp-dottedoverlay ' + d.data("dottedoverlay") + '"></div>');
                                    var i = 16 / 9;
                                    if ("4:3" == d.data("aspectratio") && (i = 4 / 3), s.data("mediaAspect", i), 1 == s.closest(".tp-caption").data("forcecover") && (T(s, a.container), s.addClass("fullcoveredvideo")), n.css({
                                            display: "block"
                                        }), a.nextslideatend = d.data("nextslideatend"), 1 == d.data("autoplay") || 1 == o) {
                                        t("body").find("#" + a.container.attr("id")).find(".tp-bannertimer");
                                        setTimeout(function() {
                                            a.videoplaying = !0, a.container.trigger("stoptimer")
                                        }, 200), "on" != d.data("forcerewind") || s.hasClass("videoisplaying") || r.currentTime > 0 && (r.currentTime = 0), "mute" == d.data("volume") && (r.muted = !0), s.data("timerplay", setTimeout(function() {
                                            "on" != d.data("forcerewind") || s.hasClass("videoisplaying") || r.currentTime > 0 && (r.currentTime = 0), "mute" == d.data("volume") && (r.muted = !0), setTimeout(function() {
                                                r.play()
                                            }, 500)
                                        }, 10 + d.data("start")))
                                    }
                                    if (s.data("ww") == e && s.data("ww", n.attr("width")), s.data("hh") == e && s.data("hh", n.attr("height")), !d.hasClass("fullscreenvideo") && 1 == d.data("forcecover")) try {
                                        s.width(s.data("ww") * a.bw), s.height(s.data("hh") * a.bh)
                                    } catch (t) {}
                                    clearInterval(s.data("interval"))
                                }
                            }), 100)
                        }), 1 == d.data("autoplay"))) {
                        t("body").find("#" + a.container.attr("id")).find(".tp-bannertimer");
                        setTimeout(function() {
                            a.videoplaying = !0, a.container.trigger("stoptimer")
                        }, 200), a.videoplaying = !0, a.container.trigger("stoptimer"), 1 != d.data("autoplayonlyfirsttime") && "true" != d.data("autoplayonlyfirsttime") || (d.data("autoplay", !1), d.data("autoplayonlyfirsttime", !1))
                    }
                    var c = 0,
                        f = 0;
                    if (d.find("img").length > 0) {
                        (g = d.find("img")).data("ww") == e && g.data("ww", g.width()), g.data("hh") == e && g.data("hh", g.height());
                        var u = g.data("ww"),
                            m = g.data("hh");
                        g.width(u * a.bw), g.height(m * a.bh), c = g.width(), f = g.height()
                    } else if (d.find("iframe").length > 0 || d.find("video").length > 0) {
                        var g, v = !1;
                        0 == (g = d.find("iframe")).length && (g = d.find("video"), v = !0), g.css({
                            display: "block"
                        }), d.data("ww") == e && d.data("ww", g.width()), d.data("hh") == e && d.data("hh", g.height());
                        u = d.data("ww"), m = d.data("hh");
                        var _ = d;
                        _.data("fsize") == e && _.data("fsize", parseInt(_.css("font-size"), 0) || 0), _.data("pt") == e && _.data("pt", parseInt(_.css("paddingTop"), 0) || 0), _.data("pb") == e && _.data("pb", parseInt(_.css("paddingBottom"), 0) || 0), _.data("pl") == e && _.data("pl", parseInt(_.css("paddingLeft"), 0) || 0), _.data("pr") == e && _.data("pr", parseInt(_.css("paddingRight"), 0) || 0), _.data("mt") == e && _.data("mt", parseInt(_.css("marginTop"), 0) || 0), _.data("mb") == e && _.data("mb", parseInt(_.css("marginBottom"), 0) || 0), _.data("ml") == e && _.data("ml", parseInt(_.css("marginLeft"), 0) || 0), _.data("mr") == e && _.data("mr", parseInt(_.css("marginRight"), 0) || 0), _.data("bt") == e && _.data("bt", parseInt(_.css("borderTop"), 0) || 0), _.data("bb") == e && _.data("bb", parseInt(_.css("borderBottom"), 0) || 0), _.data("bl") == e && _.data("bl", parseInt(_.css("borderLeft"), 0) || 0), _.data("br") == e && _.data("br", parseInt(_.css("borderRight"), 0) || 0), _.data("lh") == e && _.data("lh", parseInt(_.css("lineHeight"), 0) || 0);
                        var w = a.width,
                            y = a.height;
                        if (w > a.startwidth && (w = a.startwidth), y > a.startheight && (y = a.startheight), d.hasClass("fullscreenvideo")) {
                            s = 0, o = 0, d.data("x", 0), d.data("y", 0);
                            var b = a.height;
                            "on" == a.autoHeight && (b = a.container.height()), d.css({
                                width: a.width,
                                height: b
                            })
                        } else d.css({
                            "font-size": _.data("fsize") * a.bw + "px",
                            "padding-top": _.data("pt") * a.bh + "px",
                            "padding-bottom": _.data("pb") * a.bh + "px",
                            "padding-left": _.data("pl") * a.bw + "px",
                            "padding-right": _.data("pr") * a.bw + "px",
                            "margin-top": _.data("mt") * a.bh + "px",
                            "margin-bottom": _.data("mb") * a.bh + "px",
                            "margin-left": _.data("ml") * a.bw + "px",
                            "margin-right": _.data("mr") * a.bw + "px",
                            "border-top": _.data("bt") * a.bh + "px",
                            "border-bottom": _.data("bb") * a.bh + "px",
                            "border-left": _.data("bl") * a.bw + "px",
                            "border-right": _.data("br") * a.bw + "px",
                            "line-height": _.data("lh") * a.bh + "px",
                            height: m * a.bh + "px"
                        });
                        0 == v ? (g.width(u * a.bw), g.height(m * a.bh)) : 1 == d.data("forcecover") || d.hasClass("fullscreenvideo") || (g.width(u * a.bw), g.height(m * a.bh)), c = g.width(), f = g.height()
                    } else {
                        d.find(".tp-resizeme, .tp-resizeme *").each(function() {
                            O(t(this), a)
                        }), d.hasClass("tp-resizeme") && d.find("*").each(function() {
                            O(t(this), a)
                        }), O(d, a), f = d.outerHeight(!0), c = d.outerWidth(!0);
                        var k = d.outerHeight(),
                            S = d.css("backgroundColor");
                        d.find(".frontcorner").css({
                            borderWidth: k + "px",
                            left: 0 - k + "px",
                            borderRight: "0px solid transparent",
                            borderTopColor: S
                        }), d.find(".frontcornertop").css({
                            borderWidth: k + "px",
                            left: 0 - k + "px",
                            borderRight: "0px solid transparent",
                            borderBottomColor: S
                        }), d.find(".backcorner").css({
                            borderWidth: k + "px",
                            right: 0 - k + "px",
                            borderLeft: "0px solid transparent",
                            borderBottomColor: S
                        }), d.find(".backcornertop").css({
                            borderWidth: k + "px",
                            right: 0 - k + "px",
                            borderLeft: "0px solid transparent",
                            borderTopColor: S
                        })
                    }
                    "on" == a.fullScreenAlignForce && (s = 0, o = 0), d.data("voffset") == e && d.data("voffset", 0), d.data("hoffset") == e && d.data("hoffset", 0);
                    var A = d.data("voffset") * l,
                        L = d.data("hoffset") * l,
                        M = a.startwidth * l,
                        I = a.startheight * l;
                    "on" == a.fullScreenAlignForce && (M = a.container.width(), I = a.container.height()), "center" != d.data("x") && "center" != d.data("xcenter") || (d.data("xcenter", "center"), d.data("x", M / 2 - d.outerWidth(!0) / 2 + L)), "left" != d.data("x") && "left" != d.data("xleft") || (d.data("xleft", "left"), d.data("x", 0 / l + L)), "right" != d.data("x") && "right" != d.data("xright") || (d.data("xright", "right"), d.data("x", (M - d.outerWidth(!0) + L) / l)), "center" != d.data("y") && "center" != d.data("ycenter") || (d.data("ycenter", "center"), d.data("y", I / 2 - d.outerHeight(!0) / 2 + A)), "top" != d.data("y") && "top" != d.data("ytop") || (d.data("ytop", "top"), d.data("y", 0 / a.bh + A)), "bottom" != d.data("y") && "bottom" != d.data("ybottom") || (d.data("ybottom", "bottom"), d.data("y", (I - d.outerHeight(!0) + A) / l)), d.data("start") == e && d.data("start", 1e3);
                    var z = d.data("easing");
                    z == e && (z = "Power1.easeOut");
                    var R = d.data("start") / 1e3,
                        N = d.data("speed") / 1e3;
                    if ("center" == d.data("x") || "center" == d.data("xcenter")) var D = d.data("x") + s;
                    else D = l * d.data("x") + s;
                    if ("center" == d.data("y") || "center" == d.data("ycenter")) var Y = d.data("y") + o;
                    else Y = a.bh * d.data("y") + o;
                    if (TweenLite.set(d, {
                            top: Y,
                            left: D,
                            overwrite: "auto"
                        }), !r) {
                        function X() {
                            setTimeout(function() {
                                d.css({
                                    transform: "none",
                                    "-moz-transform": "none",
                                    "-webkit-transform": "none"
                                })
                            }, 100)
                        }
                        d.data("timeline") != e && d.data("timeline").clear();
                        var H = new TimelineLite({
                            smoothChildTiming: !0,
                            onStart: function() {
                                d.data("timer", setTimeout(function() {
                                    d.hasClass("fullscreenvideo") && d.css({
                                        display: "block"
                                    })
                                }, d.data("start")))
                            }
                        });
                        a.fullScreenAlignForce;
                        var V = d;
                        d.data("mySplitText") != e && d.data("mySplitText").revert(), "chars" != d.data("splitin") && "words" != d.data("splitin") && "lines" != d.data("splitin") && "chars" != d.data("splitout") && "words" != d.data("splitout") && "lines" != d.data("splitout") || (d.find("a").length > 0 ? d.data("mySplitText", new SplitText(d.find("a"), {
                            type: "lines,words,chars",
                            charsClass: "tp-splitted",
                            wordsClass: "tp-splitted",
                            linesClass: "tp-splitted"
                        })) : d.data("mySplitText", new SplitText(d, {
                            type: "lines,words,chars",
                            charsClass: "tp-splitted",
                            wordsClass: "tp-splitted",
                            linesClass: "tp-splitted"
                        })), d.addClass("splitted")), "chars" == d.data("splitin") && (V = d.data("mySplitText").chars), "words" == d.data("splitin") && (V = d.data("mySplitText").words), "lines" == d.data("splitin") && (V = d.data("mySplitText").lines);
                        var F = C(),
                            W = C();
                        d.data("repeat") != e && (repeatV = d.data("repeat")), d.data("yoyo") != e && (yoyoV = d.data("yoyo")), d.data("repeatdelay") != e && (repeatdelayV = d.data("repeatdelay")), d.hasClass("customin") ? F = P(F, d.data("customin")) : d.hasClass("randomrotate") ? (F.scale = 3 * Math.random() + 1, F.rotation = Math.round(200 * Math.random() - 100), F.x = Math.round(200 * Math.random() - 100), F.y = Math.round(200 * Math.random() - 100)) : d.hasClass("lfr") || d.hasClass("skewfromright") ? F.x = 15 + a.width : d.hasClass("lfl") || d.hasClass("skewfromleft") ? F.x = -15 - c : d.hasClass("sfl") || d.hasClass("skewfromleftshort") ? F.x = -50 : d.hasClass("sfr") || d.hasClass("skewfromrightshort") ? F.x = 50 : d.hasClass("lft") ? F.y = -25 - f : d.hasClass("lfb") ? F.y = 25 + a.height : d.hasClass("sft") ? F.y = -50 : d.hasClass("sfb") && (F.y = 50), d.hasClass("skewfromright") || d.hasClass("skewfromrightshort") ? F.skewX = -85 : (d.hasClass("skewfromleft") || d.hasClass("skewfromleftshort")) && (F.skewX = 85), (d.hasClass("fade") || d.hasClass("sft") || d.hasClass("sfl") || d.hasClass("sfb") || d.hasClass("skewfromleftshort") || d.hasClass("sfr") || d.hasClass("skewfromrightshort")) && (F.opacity = 0), "safari" == function() {
                            var t, e = navigator.appName,
                                i = navigator.userAgent,
                                a = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
                            a && null != (t = i.match(/version\/([\.\d]+)/i)) && (a[2] = t[1]);
                            return (a = a ? [a[1], a[2]] : [e, navigator.appVersion, "-?"])[0]
                        }().toLowerCase() && (F.rotationX = 0, F.rotationY = 0);
                        var j = d.data("elementdelay") == e ? 0 : d.data("elementdelay");
                        W.ease = F.ease = d.data("easing") == e ? Power1.easeInOut : d.data("easing"), F.data = new Object, F.data.oldx = F.x, F.data.oldy = F.y, W.data = new Object, W.data.oldx = W.x, W.data.oldy = W.y, F.x = F.x * l, F.y = F.y * l;
                        var B = new TimelineLite;
                        if (d.hasClass("customin")) V != d && H.add(TweenLite.set(d, {
                            opacity: 1,
                            scaleX: 1,
                            scaleY: 1,
                            rotationX: 0,
                            rotationY: 0,
                            rotationZ: 0,
                            skewX: 0,
                            skewY: 0,
                            z: 0,
                            x: 0,
                            y: 0,
                            visibility: "visible",
                            opacity: 1,
                            delay: 0,
                            overwrite: "all"
                        })), F.visibility = "hidden", W.visibility = "visible", W.overwrite = "all", W.opacity = 1, W.onComplete = X(), W.delay = R, H.add(B.staggerFromTo(V, N, F, W, j), "frame0");
                        else if (F.visibility = "visible", F.transformPerspective = 600, V != d && H.add(TweenLite.set(d, {
                                opacity: 1,
                                scaleX: 1,
                                scaleY: 1,
                                rotationX: 0,
                                rotationY: 0,
                                rotationZ: 0,
                                skewX: 0,
                                skewY: 0,
                                z: 0,
                                x: 0,
                                y: 0,
                                visibility: "visible",
                                opacity: 1,
                                delay: 0,
                                overwrite: "all"
                            })), W.visibility = "visible", W.delay = R, W.onComplete = X(), W.opacity = 1, d.hasClass("randomrotate") && V != d)
                            for (i = 0; i < V.length; i++) {
                                var U = new Object,
                                    q = new Object;
                                t.extend(U, F), t.extend(q, W), F.scale = 3 * Math.random() + 1, F.rotation = Math.round(200 * Math.random() - 100), F.x = Math.round(200 * Math.random() - 100), F.y = Math.round(200 * Math.random() - 100), 0 != i && (q.delay = R + i * j), H.append(TweenLite.fromTo(V[i], N, U, q), "frame0")
                            } else H.add(B.staggerFromTo(V, N, F, W, j), "frame0");
                        d.data("timeline", H);
                        new Array;
                        if (d.data("frames") != e) {
                            var Z = d.data("frames"),
                                $ = (Z = (Z = Z.replace(/\s+/g, "")).replace("{", "")).split("}");
                            t.each($, function(i, a) {
                                if (a.length > 0) {
                                    var n = function(e) {
                                        var i = e.split("animation:"),
                                            a = new Object;
                                        a.animation = P(C(), i[1]);
                                        var n = i[0].split(";");
                                        return t.each(n, function(t, e) {
                                            var i = (e = e.split(":"))[0],
                                                n = e[1];
                                            "typ" == i && (a.typ = n), "speed" == i && (a.speed = parseInt(n, 0) / 1e3), "start" == i && (a.start = parseInt(n, 0) / 1e3), "elementdelay" == i && (a.elementdelay = parseFloat(n)), "ease" == i && (a.ease = n)
                                        }), a
                                    }(a);
                                    ! function(t, i, a, n, r) {
                                        var s = t.data("timeline"),
                                            o = new TimelineLite,
                                            l = t;
                                        "chars" == a.typ ? l = t.data("mySplitText").chars : "words" == a.typ ? l = t.data("mySplitText").words : "lines" == a.typ && (l = t.data("mySplitText").lines);
                                        a.animation.ease = a.ease, a.animation.rotationZ != e && (a.animation.rotation = a.animation.rotationZ);
                                        a.animation.data = new Object, a.animation.data.oldx = a.animation.x, a.animation.data.oldy = a.animation.y, a.animation.x = a.animation.x * r, a.animation.y = a.animation.y * r, s.add(o.staggerTo(l, a.speed, a.animation, a.elementdelay), a.start), s.addLabel(n, a.start), t.data("timeline", s)
                                    }(d, 0, n, "frame" + (i + 10), l)
                                }
                            })
                        }
                        H = d.data("timeline"), d.data("end") != e ? E(d, a, d.data("end") / 1e3, F, "frame99", l) : E(d, a, 999999, F, "frame99", l), H = d.data("timeline"), d.data("timeline", H)
                    }
                }
                if (r && d.data("timeline") != e) {
                    var Q = d.data("timeline").getTweensOf();
                    t.each(Q, function(t, i) {
                        if (i.vars.data != e) {
                            var a = i.vars.data.oldx * l,
                                n = i.vars.data.oldy * l;
                            if (1 != i.progress() && 0 != i.progress()) try {
                                i.vars.x = a, i.vary.y = n
                            } catch (t) {} else 1 == i.progress() && TweenLite.set(i.target, {
                                x: a,
                                y: n
                            })
                        }
                    })
                }
            }), t("body").find("#" + a.container.attr("id")).find(".tp-bannertimer").data("opt", a)
        }

        function O(t, i) {
            t.data("fsize") == e && t.data("fsize", parseInt(t.css("font-size"), 0) || 0), t.data("pt") == e && t.data("pt", parseInt(t.css("paddingTop"), 0) || 0), t.data("pb") == e && t.data("pb", parseInt(t.css("paddingBottom"), 0) || 0), t.data("pl") == e && t.data("pl", parseInt(t.css("paddingLeft"), 0) || 0), t.data("pr") == e && t.data("pr", parseInt(t.css("paddingRight"), 0) || 0), t.data("mt") == e && t.data("mt", parseInt(t.css("marginTop"), 0) || 0), t.data("mb") == e && t.data("mb", parseInt(t.css("marginBottom"), 0) || 0), t.data("ml") == e && t.data("ml", parseInt(t.css("marginLeft"), 0) || 0), t.data("mr") == e && t.data("mr", parseInt(t.css("marginRight"), 0) || 0), t.data("bt") == e && t.data("bt", parseInt(t.css("borderTopWidth"), 0) || 0), t.data("bb") == e && t.data("bb", parseInt(t.css("borderBottomWidth"), 0) || 0), t.data("bl") == e && t.data("bl", parseInt(t.css("borderLeftWidth"), 0) || 0), t.data("br") == e && t.data("br", parseInt(t.css("borderRightWidth"), 0) || 0), t.data("ls") == e && t.data("ls", parseInt(t.css("letterSpacing"), 0) || 0), t.data("lh") == e && t.data("lh", parseInt(t.css("lineHeight"), 0) || 0), t.data("minwidth") == e && t.data("minwidth", parseInt(t.css("minWidth"), 0) || 0), t.data("minheight") == e && t.data("minheight", parseInt(t.css("minHeight"), 0) || 0), t.data("maxwidth") == e && t.data("maxwidth", parseInt(t.css("maxWidth"), 0) || "none"), t.data("maxheight") == e && t.data("maxheight", parseInt(t.css("maxHeight"), 0) || "none"), t.data("wan") == e && t.data("wan", t.css("-webkit-transition")), t.data("moan") == e && t.data("moan", t.css("-moz-animation-transition")), t.data("man") == e && t.data("man", t.css("-ms-animation-transition")), t.data("ani") == e && t.data("ani", t.css("transition")), t.hasClass("tp-splitted") || (t.css("-webkit-transition", "none"), t.css("-moz-transition", "none"), t.css("-ms-transition", "none"), t.css("transition", "none"), TweenLite.set(t, {
                fontSize: Math.round(t.data("fsize") * i.bw) + "px",
                letterSpacing: Math.floor(t.data("ls") * i.bw) + "px",
                paddingTop: Math.round(t.data("pt") * i.bh) + "px",
                paddingBottom: Math.round(t.data("pb") * i.bh) + "px",
                paddingLeft: Math.round(t.data("pl") * i.bw) + "px",
                paddingRight: Math.round(t.data("pr") * i.bw) + "px",
                marginTop: t.data("mt") * i.bh + "px",
                marginBottom: t.data("mb") * i.bh + "px",
                marginLeft: t.data("ml") * i.bw + "px",
                marginRight: t.data("mr") * i.bw + "px",
                borderTopWidth: Math.round(t.data("bt") * i.bh) + "px",
                borderBottomWidth: Math.round(t.data("bb") * i.bh) + "px",
                borderLeftWidth: Math.round(t.data("bl") * i.bw) + "px",
                borderRightWidth: Math.round(t.data("br") * i.bw) + "px",
                lineHeight: Math.round(t.data("lh") * i.bh) + "px",
                minWidth: t.data("minwidth") * i.bw + "px",
                minHeight: t.data("minheight") * i.bh + "px",
                overwrite: "auto"
            }), setTimeout(function() {
                t.css("-webkit-transition", t.data("wan")), t.css("-moz-transition", t.data("moan")), t.css("-ms-transition", t.data("man")), t.css("transition", t.data("ani"))
            }, 30), "none" != t.data("maxheight") && t.css({
                maxHeight: t.data("maxheight") * i.bh + "px"
            }), "none" != t.data("maxwidth") && t.css({
                maxWidth: t.data("maxwidth") * i.bw + "px"
            }))
        }

        function E(t, i, a, n, r, s) {
            var o = t.data("timeline"),
                l = new TimelineLite,
                d = C(),
                h = t.data("endspeed") == e ? t.data("speed") : t.data("endspeed");
            if (d.ease = t.data("endeasing") == e ? Power1.easeInOut : t.data("endeasing"), h /= 1e3, t.hasClass("ltr") || t.hasClass("ltl") || t.hasClass("str") || t.hasClass("stl") || t.hasClass("ltt") || t.hasClass("ltb") || t.hasClass("stt") || t.hasClass("stb") || t.hasClass("skewtoright") || t.hasClass("skewtorightshort") || t.hasClass("skewtoleft") || t.hasClass("skewtoleftshort") || t.hasClass("fadeout") || t.hasClass("randomrotateout")) {
                t.hasClass("skewtoright") || t.hasClass("skewtorightshort") ? d.skewX = 35 : (t.hasClass("skewtoleft") || t.hasClass("skewtoleftshort")) && (d.skewX = -35), t.hasClass("ltr") || t.hasClass("skewtoright") ? d.x = i.width + 60 : t.hasClass("ltl") || t.hasClass("skewtoleft") ? d.x = 0 - (i.width + 60) : t.hasClass("ltt") ? d.y = 0 - (i.height + 60) : t.hasClass("ltb") ? d.y = i.height + 60 : t.hasClass("str") || t.hasClass("skewtorightshort") ? (d.x = 50, d.opacity = 0) : t.hasClass("stl") || t.hasClass("skewtoleftshort") ? (d.x = -50, d.opacity = 0) : t.hasClass("stt") ? (d.y = -50, d.opacity = 0) : t.hasClass("stb") ? (d.y = 50, d.opacity = 0) : t.hasClass("randomrotateout") ? (d.x = Math.random() * i.width, d.y = Math.random() * i.height, d.scale = 2 * Math.random() + .3, d.rotation = 360 * Math.random() - 180, d.opacity = 0) : t.hasClass("fadeout") && (d.opacity = 0), t.hasClass("skewtorightshort") ? d.x = 270 : t.hasClass("skewtoleftshort") && (d.x = -270), d.data = new Object, d.data.oldx = d.x, d.data.oldy = d.y, d.x = d.x * s, d.y = d.y * s, d.overwrite = "auto";
                var p = t;
                p = t;
                "chars" == t.data("splitout") ? p = t.data("mySplitText").chars : "words" == t.data("splitout") ? p = t.data("mySplitText").words : "lines" == t.data("splitout") && (p = t.data("mySplitText").lines);
                var c = t.data("endelementdelay") == e ? 0 : t.data("endelementdelay");
                o.add(l.staggerTo(p, h, d, c), a)
            } else if (t.hasClass("customout")) {
                d = P(d, t.data("customout"));
                p = t;
                "chars" == t.data("splitout") ? p = t.data("mySplitText").chars : "words" == t.data("splitout") ? p = t.data("mySplitText").words : "lines" == t.data("splitout") && (p = t.data("mySplitText").lines);
                c = t.data("endelementdelay") == e ? 0 : t.data("endelementdelay");
                d.onStart = function() {
                    TweenLite.set(t, {
                        transformPerspective: d.transformPerspective,
                        transformOrigin: d.transformOrigin,
                        overwrite: "auto"
                    })
                }, d.data = new Object, d.data.oldx = d.x, d.data.oldy = d.y, d.x = d.x * s, d.y = d.y * s, o.add(l.staggerTo(p, h, d, c), a)
            } else n.delay = 0, o.add(TweenLite.to(t, h, n), a);
            o.addLabel(r, a), t.data("timeline", o)
        }

        function S(i, a) {
            if (a.cd = 0, a.loop = 0, a.stopAfterLoops != e && a.stopAfterLoops > -1 ? a.looptogo = a.stopAfterLoops : a.looptogo = 9999999, a.stopAtSlide != e && a.stopAtSlide > -1 ? a.lastslidetoshow = a.stopAtSlide : a.lastslidetoshow = 999, a.stopLoop = "off", 0 == a.looptogo && (a.stopLoop = "on"), a.slideamount > 1 && (0 != a.stopAfterLoops || 1 != a.stopAtSlide)) {
                var r = i.find(".tp-bannertimer");

                function s() {
                    0 == t("body").find(i).length && (! function(e, i) {
                        e.children().each(function() {
                            try {
                                t(this).die("click")
                            } catch (t) {}
                            try {
                                t(this).die("mouseenter")
                            } catch (t) {}
                            try {
                                t(this).die("mouseleave")
                            } catch (t) {}
                            try {
                                t(this).unbind("hover")
                            } catch (t) {}
                        });
                        try {
                            e.die("click", "mouseenter", "mouseleave")
                        } catch (t) {}
                        clearInterval(i.cdint), e = null
                    }(i, a), clearInterval(a.cdint)), 1 == i.data("conthover-changed") && (a.conthover = i.data("conthover"), i.data("conthover-changed", 0)), a.act = a.next, a.next = a.next + 1, a.next > i.find(">ul >li").length - 1 && (a.next = 0, a.looptogo = a.looptogo - 1, a.looptogo <= 0 && (a.stopLoop = "on")), "on" == a.stopLoop && a.next == a.lastslidetoshow - 1 ? (i.find(".tp-bannertimer").css({
                        visibility: "hidden"
                    }), i.trigger("revolution.slide.onstop")) : r.data("tween").restart(), v(i, a)
                }
                i.on("stoptimer", function() {
                    r.data("tween").pause(), "on" == a.hideTimerBar && r.css({
                        visibility: "hidden"
                    })
                }), i.on("starttimer", function() {
                    1 != a.conthover && 1 != a.videoplaying && a.width > a.hideSliderAtLimit && 1 != a.bannertimeronpause && 1 != a.overnav && ("on" == a.stopLoop && a.next == a.lastslidetoshow - 1 || (r.css({
                        visibility: "visible"
                    }), r.data("tween").play())), "on" == a.hideTimerBar && r.css({
                        visibility: "hidden"
                    })
                }), i.on("restarttimer", function() {
                    "on" == a.stopLoop && a.next == a.lastslidetoshow - 1 || (r.css({
                        visibility: "visible"
                    }), r.data("tween", TweenLite.fromTo(r, a.delay / 1e3, {
                        width: "0%"
                    }, {
                        width: "100%",
                        ease: Linear.easeNone,
                        onComplete: s,
                        delay: 1
                    }))), "on" == a.hideTimerBar && r.css({
                        visibility: "hidden"
                    })
                }), i.on("nulltimer", function() {
                    r.data("tween").pause(0), "on" == a.hideTimerBar && r.css({
                        visibility: "hidden"
                    })
                }), r.data("tween", TweenLite.fromTo(r, a.delay / 1e3, {
                    width: "0%"
                }, {
                    width: "100%",
                    ease: Linear.easeNone,
                    onComplete: s,
                    delay: 1
                })), r.data("opt", a), i.hover(function() {
                    "on" != a.onHoverStop || n() || (i.trigger("stoptimer"), i.trigger("revolution.slide.onpause"), i.find(">ul >li:eq(" + a.next + ") .slotholder").find(".defaultimg").each(function() {
                        var i = t(this);
                        i.data("kenburn") != e && i.data("kenburn").pause()
                    }))
                }, function() {
                    1 != i.data("conthover") && (i.trigger("revolution.slide.onresume"), i.trigger("starttimer"), i.find(">ul >li:eq(" + a.next + ") .slotholder").find(".defaultimg").each(function() {
                        var i = t(this);
                        i.data("kenburn") != e && i.data("kenburn").play()
                    }))
                })
            }
        }
        t.fn.extend({
            revolution: function(i) {
                return t.fn.revolution.defaults = {
                    delay: 9e3,
                    startheight: 500,
                    startwidth: 960,
                    fullScreenAlignForce: "off",
                    autoHeight: "off",
                    hideTimerBar: "off",
                    hideThumbs: 200,
                    hideNavDelayOnMobile: 1500,
                    thumbWidth: 100,
                    thumbHeight: 50,
                    thumbAmount: 3,
                    navigationType: "bullet",
                    navigationArrows: "solo",
                    hideThumbsOnMobile: "off",
                    hideBulletsOnMobile: "off",
                    hideArrowsOnMobile: "off",
                    hideThumbsUnderResoluition: 0,
                    navigationStyle: "round",
                    navigationHAlign: "center",
                    navigationVAlign: "bottom",
                    navigationHOffset: 0,
                    navigationVOffset: 20,
                    soloArrowLeftHalign: "left",
                    soloArrowLeftValign: "center",
                    soloArrowLeftHOffset: 20,
                    soloArrowLeftVOffset: 0,
                    soloArrowRightHalign: "right",
                    soloArrowRightValign: "center",
                    soloArrowRightHOffset: 20,
                    soloArrowRightVOffset: 0,
                    keyboardNavigation: "on",
                    touchenabled: "on",
                    onHoverStop: "on",
                    stopAtSlide: -1,
                    stopAfterLoops: -1,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLimit: 0,
                    hideSliderAtLimit: 0,
                    shadow: 0,
                    fullWidth: "off",
                    fullScreen: "off",
                    minFullScreenHeight: 0,
                    fullScreenOffsetContainer: "",
                    dottedOverlay: "none",
                    forceFullWidth: "off",
                    spinner: "spinner0",
                    swipe_velocity: .4,
                    swipe_max_touches: 1,
                    swipe_min_touches: 1,
                    drag_block_vertical: !1,
                    isJoomla: !1,
                    parallax: "off",
                    parallaxLevels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85]
                }, i = t.extend({}, t.fn.revolution.defaults, i), this.each(function() {
                    var p = i;
                    p.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), "on" != p.fullWidth && "on" != p.fullScreen && (p.autoHeight = "off"), "on" == p.fullScreen && (p.autoHeight = "on"), "on" != p.fullWidth && "on" != p.fullScreen && (forceFulWidth = "off");
                    var c, f, u, m, g, _, w = t(this);
                    if ("on" == p.fullWidth && "off" == p.autoHeight && w.css({
                            maxHeight: p.startheight + "px"
                        }), n() && "on" == p.hideThumbsOnMobile && "thumb" == p.navigationType && (p.navigationType = "none"), n() && "on" == p.hideBulletsOnMobile && "bullet" == p.navigationType && (p.navigationType = "none"), n() && "on" == p.hideBulletsOnMobile && "both" == p.navigationType && (p.navigationType = "none"), n() && "on" == p.hideArrowsOnMobile && (p.navigationArrows = "none"), "on" == p.forceFullWidth) {
                        var y = w.parent().offset().left,
                            b = w.parent().css("marginBottom"),
                            x = w.parent().css("marginTop");
                        b == e && (b = 0), x == e && (x = 0), w.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:' + x + ";margin-bottom:" + b + '" class="forcefullwidth_wrapper_tp_banner"></div>'), w.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + w.height() + 'px"></div>'), w.css({
                            backgroundColor: w.parent().css("backgroundColor"),
                            backgroundImage: w.parent().css("backgroundImage")
                        }), w.parent().css({
                            left: 0 - y + "px",
                            position: "absolute",
                            width: t(window).width()
                        }), p.width = t(window).width()
                    }
                    try {
                        p.hideThumbsUnderResolution > t(window).width() && 0 != p.hideThumbsUnderResolution ? w.parent().find(".tp-bullets.tp-thumbs").css({
                            display: "none"
                        }) : w.parent().find(".tp-bullets.tp-thumbs").css({
                            display: "block"
                        })
                    } catch (t) {}
                    if (!w.hasClass("revslider-initialised")) {
                        w.addClass("revslider-initialised"), w.attr("id") == e && w.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), p.firefox13 = !1, p.ie = !t.support.opacity, p.ie9 = 9 == document.documentMode, p.origcd = p.delay;
                        var T = t.fn.jquery.split("."),
                            C = parseFloat(T[0]),
                            P = parseFloat(T[1]);
                        parseFloat(T[2] || "0");
                        1 == C && P < 7 && w.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + T + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), C > 1 && (p.ie = !1), t.support.transition || (t.fn.transition = t.fn.animate), w.find(".caption").each(function() {
                            t(this).addClass("tp-caption")
                        }), n() && w.find(".tp-caption").each(function() {
                            1 == t(this).data("autoplay") && t(this).data("autoplay", !1)
                        });
                        var k = 0,
                            O = 0,
                            E = "http";
                        if ("https:" === location.protocol && (E = "https"), w.find(".tp-caption iframe").each(function(e) {
                                try {
                                    if (t(this).attr("src").indexOf("you") > 0 && 0 == k) {
                                        k = 1;
                                        var i = document.createElement("script");
                                        i.src = "https://www.youtube.com/iframe_api";
                                        var a = document.getElementsByTagName("script")[0],
                                            n = !0;
                                        t("head").find("*").each(function() {
                                            "https://www.youtube.com/iframe_api" == t(this).attr("src") && (n = !1)
                                        }), n && a.parentNode.insertBefore(i, a)
                                    }
                                } catch (t) {}
                            }), w.find(".tp-caption iframe").each(function(e) {
                                try {
                                    if (t(this).attr("src").indexOf("vim") > 0 && 0 == O) {
                                        O = 1;
                                        var i = document.createElement("script");
                                        i.src = E + "://a.vimeocdn.com/js/froogaloop2.min.js";
                                        var a = document.getElementsByTagName("script")[0],
                                            n = !0;
                                        t("head").find("*").each(function() {
                                            t(this).attr("src") == E + "://a.vimeocdn.com/js/froogaloop2.min.js" && (n = !1)
                                        }), n && a.parentNode.insertBefore(i, a)
                                    }
                                } catch (t) {}
                            }), w.find(".tp-caption video").each(function(e) {
                                t(this).removeClass("video-js").removeClass("vjs-default-skin"), t(this).attr("preload", ""), t(this).css({
                                    display: "none"
                                })
                            }), "on" == p.shuffle)
                            for (var A = 0; A < w.find(">ul:first-child >li").length; A++) {
                                var L = Math.round(Math.random() * w.find(">ul:first-child >li").length);
                                w.find(">ul:first-child >li:eq(" + L + ")").prependTo(w.find(">ul:first-child"))
                            }
                        p.slots = 4, p.act = -1, p.next = 0, p.startWithSlide != e && (p.next = p.startWithSlide);
                        var M = function(t) {
                            for (var e, i = [], a = window.location.href.slice(window.location.href.indexOf(t) + 1).split("_"), n = 0; n < a.length; n++) a[n] = a[n].replace("%3D", "="), e = a[n].split("="), i.push(e[0]), i[e[0]] = e[1];
                            return i
                        }("#")[0];
                        if (M.length < 9 && M.split("slide").length > 1) {
                            var I = parseInt(M.split("slide")[1], 0);
                            I < 1 && (I = 1), I > w.find(">ul:first >li").length && (I = w.find(">ul:first >li").length), p.next = I - 1
                        }
                        p.firststart = 1, p.navigationHOffset == e && (p.navOffsetHorizontal = 0), p.navigationVOffset == e && (p.navOffsetVertical = 0), w.append('<div class="tp-loader ' + p.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), 0 == w.find(".tp-bannertimer").length && w.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
                        var z = w.find(".tp-bannertimer");
                        if (z.length > 0 && z.css({
                                width: "0%"
                            }), w.addClass("tp-simpleresponsive"), p.container = w, p.slideamount = w.find(">ul:first >li").length, 0 == w.height() && w.height(p.startheight), p.startwidth != e && 0 != p.startwidth || (p.startwidth = w.width()), p.startheight != e && 0 != p.startheight || (p.startheight = w.height()), p.width = w.width(), p.height = w.height(), p.bw = p.startwidth / w.width(), p.bh = p.startheight / w.height(), p.width != p.startwidth && (p.height = Math.round(p.startheight * (p.width / p.startwidth)), w.height(p.height)), 0 != p.shadow) {
                            w.parent().append('<div class="tp-bannershadow tp-shadow' + p.shadow + '"></div>');
                            y = 0;
                            "on" == p.forceFullWidth && (y = 0 - p.container.parent().offset().left), w.parent().find(".tp-bannershadow").css({
                                width: p.width,
                                left: y
                            })
                        }
                        w.find("ul").css({
                            display: "none"
                        });
                        w.find("ul").css({
                                display: "block"
                            }), _ = p, (g = w).find(".tp-caption").each(function() {
                                t(this).addClass(t(this).data("transition")), t(this).addClass("start")
                            }), g.find(">ul:first").css({
                                overflow: "hidden",
                                width: "100%",
                                height: "100%",
                                maxHeight: g.parent().css("maxHeight")
                            }), "on" == _.autoHeight && (g.find(">ul:first").css({
                                overflow: "hidden",
                                width: "100%",
                                height: "100%",
                                maxHeight: "none"
                            }), g.css({
                                maxHeight: "none"
                            }), g.parent().css({
                                maxHeight: "none"
                            })), g.find(">ul:first >li").each(function(i) {
                                var a = t(this);
                                if (a.css({
                                        width: "100%",
                                        height: "100%",
                                        overflow: "hidden"
                                    }), a.data("link") != e) {
                                    var n = a.data("link"),
                                        r = "_self",
                                        s = 60;
                                    "back" == a.data("slideindex") && (s = 0);
                                    var o = a.data("linktoslide");
                                    a.data("target") != e && (r = a.data("target")), "slide" == n ? a.append('<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + s + ';" data-x="0" data-y="0" data-linktoslide="' + o + '" data-start="0"><a style="width:100%;height:100%;display:block"><span style="width:100%;height:100%;display:block"></span></a></div>') : (o = "no", a.append('<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + s + ';" data-x="0" data-y="0" data-linktoslide="' + o + '" data-start="0"><a style="width:100%;height:100%;display:block" target="' + r + '" href="' + n + '"><span style="width:100%;height:100%;display:block"></span></a></div>'))
                                }
                            }), g.parent().css({
                                overflow: "visible"
                            }), g.find(">ul:first >li >img").each(function(i) {
                                var a = t(this);
                                a.addClass("defaultimg"), a.data("lazyload") != e && 1 != a.data("lazydone") || h(a, _), a.wrap('<div class="slotholder" style="width:100%;height:100%;"data-duration="' + a.data("duration") + '"data-zoomstart="' + a.data("zoomstart") + '"data-zoomend="' + a.data("zoomend") + '"data-rotationstart="' + a.data("rotationstart") + '"data-rotationend="' + a.data("rotationend") + '"data-ease="' + a.data("ease") + '"data-duration="' + a.data("duration") + '"data-bgpositionend="' + a.data("bgpositionend") + '"data-bgposition="' + a.data("bgposition") + '"data-duration="' + a.data("duration") + '"data-kenburns="' + a.data("kenburns") + '"data-easeme="' + a.data("ease") + '"data-bgfit="' + a.data("bgfit") + '"data-bgfitend="' + a.data("bgfitend") + '"data-owidth="' + a.data("owidth") + '"data-oheight="' + a.data("oheight") + '"></div>'), "none" != _.dottedOverlay && _.dottedOverlay != e && a.closest(".slotholder").append('<div class="tp-dottedoverlay ' + _.dottedOverlay + '"></div>');
                                var n = a.attr("src"),
                                    s = a.data("bgfit"),
                                    o = a.data("bgrepeat"),
                                    l = a.data("bgposition");
                                s == e && (s = "cover"), o == e && (o = "no-repeat"), l == e && (l = "center center");
                                var d = a.closest(".slotholder");
                                a.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="' + a.data("lazyload") + '" data-bgfit="' + s + '"data-bgposition="' + l + '" data-bgrepeat="' + o + '" data-lazydone="' + a.data("lazydone") + '" src="' + n + '" data-src="' + n + '" style="background-color:' + a.css("backgroundColor") + ";background-repeat:" + o + ";background-image:url(" + n + ");background-size:" + s + ";background-position:" + l + ';width:100%;height:100%;"></div>'), r(8) && (d.find(".tp-bgimg").css({
                                    backgroundImage: "none",
                                    "background-image": "none"
                                }), d.find(".tp-bgimg").append('<img class="ieeightfallbackimage defaultimg" src="' + n + '" style="width:100%">')), a.css({
                                    opacity: 0
                                }), a.data("li-id", i)
                            }), "off" != p.parallax && (m = p, (u = w).find(">ul:first-child >li").each(function() {
                                for (var e = t(this), i = 0; i < 10; i++) e.find(".rs-parallaxlevel-" + i).wrapAll('<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;" class="tp-parallax-container" data-parallaxlevel="' + m.parallaxLevels[i] + '"></div>')
                            }), u.on("mousemove.hoverdir, mouseleave.hoverdir", function(e) {
                                switch (console.log("event:" + e.type), e.type) {
                                    case "mousemove":
                                        var i = u.offset().top,
                                            a = u.offset().left,
                                            n = i + u.height() / 2,
                                            r = a + u.width() / 2 - e.pageX,
                                            s = n - e.pageY;
                                        t(".tp-parallax-container").each(function() {
                                            var e = t(this),
                                                i = parseInt(e.data("parallaxlevel"), 0) / 100,
                                                a = r * i,
                                                n = s * i;
                                            TweenLite.to(e, .2, {
                                                x: a,
                                                y: n,
                                                ease: Power3.easeOut
                                            })
                                        });
                                        break;
                                    case "mouseleave":
                                        t(".tp-parallax-container").each(function() {
                                            var e = t(this);
                                            TweenLite.to(e, .4, {
                                                x: 0,
                                                y: 0,
                                                ease: Power3.easeOut
                                            })
                                        })
                                }
                            }), window.ondeviceorientation = function(e) {
                                var i = Math.round(e.beta || 0),
                                    a = Math.round(e.gamma || 0),
                                    n = 360 / u.width() * a,
                                    r = 180 / u.height() * i;
                                t(".tp-parallax-container").each(function() {
                                    var e = t(this),
                                        i = parseInt(e.data("parallaxlevel"), 0) / 100,
                                        a = n * i,
                                        s = r * i;
                                    TweenLite.to(e, .2, {
                                        x: a,
                                        y: s,
                                        ease: Power3.easeOut
                                    })
                                })
                            }, t(window).bind("deviceorientation", {
                                option: m,
                                cont: u
                            }, function(t) {
                                var e = t.data.option;
                                t.data.container, e.desktop || null === t.beta || null === t.gamma || (t.beta, MAGIC_NUMBER, t.gamma, MAGIC_NUMBER, window.innerHeight, window.innerWidth)
                            })), p.slideamount > 1 && function(e, i) {
                                "bullet" != i.navigationType && "both" != i.navigationType || e.parent().append('<div class="tp-bullets simplebullets ' + i.navigationStyle + '"></div>');
                                var a = e.parent().find(".tp-bullets");
                                e.find(">ul:first >li").each(function(t) {
                                    e.find(">ul:first >li:eq(" + t + ") img:first").attr("src"), a.append('<div class="bullet"></div>'), a.find(".bullet:first")
                                }), a.find(".bullet").each(function(a) {
                                    var n = t(this);
                                    a == i.slideamount - 1 && n.addClass("last"), 0 == a && n.addClass("first"), n.click(function() {
                                        var t = !1;
                                        "withbullet" == i.navigationArrows || "nexttobullets" == i.navigationArrows ? n.index() - 1 == i.act && (t = !0) : n.index() == i.act && (t = !0), 0 != i.transition || t || ("withbullet" == i.navigationArrows || "nexttobullets" == i.navigationArrows ? i.next = n.index() - 1 : i.next = n.index(), s(i, e))
                                    })
                                }), a.append('<div class="tpclear"></div>'), d(e, i)
                            }(w, p), p.slideamount > 1 && function(i, a) {
                                var n = i.parent();
                                "thumb" != a.navigationType && "both" != a.navsecond || n.append('<div class="tp-bullets tp-thumbs ' + a.navigationStyle + '"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>');
                                var r = n.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),
                                    d = r.parent();
                                d.width(a.thumbWidth * a.thumbAmount), d.height(a.thumbHeight), d.parent().width(a.thumbWidth * a.thumbAmount), d.parent().height(a.thumbHeight), i.find(">ul:first >li").each(function(t) {
                                    var n = i.find(">ul:first >li:eq(" + t + ")"),
                                        s = n.find(".defaultimg").css("backgroundColor");
                                    if (n.data("thumb") != e) var o = n.data("thumb");
                                    else o = n.find("img:first").attr("src");
                                    r.append('<div class="bullet thumb" style="background-color:' + s + ";position:relative;width:" + a.thumbWidth + "px;height:" + a.thumbHeight + "px;background-image:url(" + o + ') !important;background-size:cover;background-position:center center;"></div>'), r.find(".bullet:first")
                                });
                                var h = 10;
                                r.find(".bullet").each(function(e) {
                                    var n = t(this);
                                    e == a.slideamount - 1 && n.addClass("last"), 0 == e && n.addClass("first"), n.width(a.thumbWidth), n.height(a.thumbHeight), h < n.outerWidth(!0) && (h = n.outerWidth(!0)), n.click(function() {
                                        0 == a.transition && n.index() != a.act && (a.next = n.index(), s(a, i))
                                    })
                                });
                                var p = h * i.find(">ul:first >li").length,
                                    c = r.parent().width();
                                a.thumbWidth = h, c < p && (t(document).mousemove(function(e) {
                                    t("body").data("mousex", e.pageX)
                                }), r.parent().mouseenter(function() {
                                    var e = t(this);
                                    e.addClass("over");
                                    var a = e.offset(),
                                        n = t("body").data("mousex") - a.left,
                                        r = e.width(),
                                        s = e.find(".bullet:first").outerWidth(!0) * i.find(">ul:first >li").length,
                                        o = 0 - (n -= 30) * ((s - r + 15) / r);
                                    o > 0 && (o = 0), o < 0 - s + r && (o = 0 - s + r), l(e, o)
                                }), r.parent().mousemove(function() {
                                    var e = t(this),
                                        a = e.offset(),
                                        n = t("body").data("mousex") - a.left,
                                        r = e.width(),
                                        s = e.find(".bullet:first").outerWidth(!0) * i.find(">ul:first >li").length - 1;
                                    (n -= 3) < 6 && (n = 0), n + 3 > r - 6 && (n = r);
                                    var o = 0 - n * ((s - r + 15) / r);
                                    o > 0 && (o = 0), o < 0 - s + r && (o = 0 - s + r), l(e, o)
                                }), r.parent().mouseleave(function() {
                                    t(this).removeClass("over"), o(i)
                                }))
                            }(w, p), p.slideamount > 1 && function(t, i) {
                                t.find(".tp-bullets");
                                var a = "",
                                    n = i.navigationStyle;
                                "none" == i.navigationArrows && (a = "visibility:hidden;display:none"), i.soloArrowStyle = "default", "none" != i.navigationArrows && "nexttobullets" != i.navigationArrows && (n = i.soloArrowStyle), t.parent().append('<div style="' + a + '" class="tp-leftarrow tparrows ' + n + '"></div>'), t.parent().append('<div style="' + a + '" class="tp-rightarrow tparrows ' + n + '"></div>'), t.parent().find(".tp-rightarrow").click(function() {
                                    0 == i.transition && (t.data("showus") != e && -1 != t.data("showus") ? i.next = t.data("showus") - 1 : i.next = i.next + 1, t.data("showus", -1), i.next >= i.slideamount && (i.next = 0), i.next < 0 && (i.next = 0), i.act != i.next && s(i, t))
                                }), t.parent().find(".tp-leftarrow").click(function() {
                                    0 == i.transition && (i.next = i.next - 1, i.leftarrowpressed = 1, i.next < 0 && (i.next = i.slideamount - 1), s(i, t))
                                }), d(t, i)
                            }(w, p), "on" == p.keyboardNavigation && (c = w, f = p, t(document).keydown(function(t) {
                                0 == f.transition && 39 == t.keyCode && (c.data("showus") != e && -1 != c.data("showus") ? f.next = c.data("showus") - 1 : f.next = f.next + 1, c.data("showus", -1), f.next >= f.slideamount && (f.next = 0), f.next < 0 && (f.next = 0), f.act != f.next && s(f, c)), 0 == f.transition && 37 == t.keyCode && (f.next = f.next - 1, f.leftarrowpressed = 1, f.next < 0 && (f.next = f.slideamount - 1), s(f, c))
                            }), d(c, f)),
                            function(e, i) {
                                if ("on" == i.touchenabled) {
                                    var a = Hammer(e, {
                                        drag_block_vertical: i.drag_block_vertical,
                                        drag_lock_to_axis: !0,
                                        swipe_velocity: i.swipe_velocity,
                                        swipe_max_touches: i.swipe_max_touches,
                                        swipe_min_touches: i.swipe_min_touches,
                                        prevent_default: !1
                                    });
                                    a.on("swipeleft", function() {
                                        0 == i.transition && (i.next = i.next + 1, i.next == i.slideamount && (i.next = 0), s(i, e))
                                    }), a.on("swiperight", function() {
                                        0 == i.transition && (i.next = i.next - 1, i.leftarrowpressed = 1, i.next < 0 && (i.next = i.slideamount - 1), s(i, e))
                                    }), a.on("swipeup", function() {
                                        t("html, body").animate({
                                            scrollTop: e.offset().top + e.height() + "px"
                                        })
                                    }), a.on("swipedown", function() {
                                        t("html, body").animate({
                                            scrollTop: e.offset().top - t(window).height() + "px"
                                        })
                                    })
                                }
                            }(w, p), p.hideThumbs > 0 && function(t, e) {
                                var i = t.parent().find(".tp-bullets"),
                                    a = t.parent().find(".tparrows");
                                null == i && (t.append('<div class=".tp-bullets"></div>'), i = t.parent().find(".tp-bullets"));
                                null == a && (t.append('<div class=".tparrows"></div>'), a = t.parent().find(".tparrows"));
                                t.data("hidethumbs", e.hideThumbs), i.addClass("hidebullets"), a.addClass("hidearrows"), n() ? (t.hammer().on("touch", function() {
                                    t.addClass("hovered"), "on" == e.onHoverStop && t.trigger("stoptimer"), clearTimeout(t.data("hidethumbs")), i.removeClass("hidebullets"), a.removeClass("hidearrows")
                                }), t.hammer().on("release", function() {
                                    t.removeClass("hovered"), t.trigger("playtimer"), t.hasClass("hovered") || i.hasClass("hovered") || t.data("hidethumbs", setTimeout(function() {
                                        i.addClass("hidebullets"), a.addClass("hidearrows"), t.trigger("playtimer")
                                    }, e.hideNavDelayOnMobile))
                                })) : (i.hover(function() {
                                    e.overnav = !0, "on" == e.onHoverStop && t.trigger("stoptimer"), i.addClass("hovered"), clearTimeout(t.data("hidethumbs")), i.removeClass("hidebullets"), a.removeClass("hidearrows")
                                }, function() {
                                    e.overnav = !1, t.trigger("playtimer"), i.removeClass("hovered"), t.hasClass("hovered") || i.hasClass("hovered") || t.data("hidethumbs", setTimeout(function() {
                                        i.addClass("hidebullets"), a.addClass("hidearrows")
                                    }, e.hideThumbs))
                                }), a.hover(function() {
                                    e.overnav = !0, "on" == e.onHoverStop && t.trigger("stoptimer"), i.addClass("hovered"), clearTimeout(t.data("hidethumbs")), i.removeClass("hidebullets"), a.removeClass("hidearrows")
                                }, function() {
                                    e.overnav = !1, t.trigger("playtimer"), i.removeClass("hovered")
                                }), t.on("mouseenter", function() {
                                    t.addClass("hovered"), "on" == e.onHoverStop && t.trigger("stoptimer"), clearTimeout(t.data("hidethumbs")), i.removeClass("hidebullets"), a.removeClass("hidearrows")
                                }), t.on("mouseleave", function() {
                                    t.removeClass("hovered"), t.trigger("playtimer"), t.hasClass("hovered") || i.hasClass("hovered") || t.data("hidethumbs", setTimeout(function() {
                                        i.addClass("hidebullets"), a.addClass("hidearrows")
                                    }, e.hideThumbs))
                                }))
                            }(w, p), v(w, p), p.slideamount > 1 && S(w, p), setTimeout(function() {
                                w.trigger("revolution.slide.onloaded")
                            }, 500), t("body").data("rs-fullScreenMode", !1), t(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() {
                                t("body").data("rs-fullScreenMode", !t("body").data("rs-fullScreenMode")), t("body").data("rs-fullScreenMode") && setTimeout(function() {
                                    t(window).trigger("resize")
                                }, 200)
                            }), t(window).resize(function() {
                                if (0 != t("body").find(w) && "on" == p.forceFullWidth) {
                                    var e = p.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left;
                                    p.container.parent().css({
                                        left: 0 - e + "px",
                                        width: t(window).width()
                                    })
                                }(w.outerWidth(!0) != p.width || w.is(":hidden")) && a(w, p)
                            });
                        try {
                            0 != p.hideThumbsUnderResoluition && "thumb" == p.navigationType && (p.hideThumbsUnderResoluition > t(window).width() ? t(".tp-bullets").css({
                                display: "none"
                            }) : t(".tp-bullets").css({
                                display: "block"
                            }))
                        } catch (t) {}
                        w.find(".tp-scrollbelowslider").on("click", function() {
                            var e = 0;
                            try {
                                e = t("body").find(p.fullScreenOffsetContainer).height()
                            } catch (t) {}
                            try {
                                e -= t(this).data("scrolloffset")
                            } catch (t) {}
                            t("body,html").animate({
                                scrollTop: w.offset().top + w.find(">ul >li").height() - e + "px"
                            }, {
                                duration: 400
                            })
                        });
                        var R = w.parent();
                        t(window).width() < p.hideSliderAtLimit && (w.trigger("stoptimer"), "none" != R.css("display") && R.data("olddisplay", R.css("display")), R.css({
                            display: "none"
                        }))
                    }
                })
            },
            revscroll: function(e) {
                return this.each(function() {
                    var i = t(this);
                    t("body,html").animate({
                        scrollTop: i.offset().top + i.find(">ul >li").height() - e + "px"
                    }, {
                        duration: 400
                    })
                })
            },
            revredraw: function(e) {
                return this.each(function() {
                    var e = t(this);
                    a(e, e.parent().find(".tp-bannertimer").data("opt"))
                })
            },
            revpause: function(e) {
                return this.each(function() {
                    var e = t(this);
                    e.data("conthover", 1), e.data("conthover-changed", 1), e.trigger("revolution.slide.onpause"), e.parent().find(".tp-bannertimer").data("opt").bannertimeronpause = !0, e.trigger("stoptimer")
                })
            },
            revresume: function(e) {
                return this.each(function() {
                    var e = t(this);
                    e.data("conthover", 0), e.data("conthover-changed", 1), e.trigger("revolution.slide.onresume"), e.parent().find(".tp-bannertimer").data("opt").bannertimeronpause = !1, e.trigger("starttimer")
                })
            },
            revnext: function(e) {
                return this.each(function() {
                    t(this).parent().find(".tp-rightarrow").click()
                })
            },
            revprev: function(e) {
                return this.each(function() {
                    t(this).parent().find(".tp-leftarrow").click()
                })
            },
            revmaxslide: function(e) {
                return t(this).find(">ul:first-child >li").length
            },
            revcurrentslide: function(e) {
                return t(this).parent().find(".tp-bannertimer").data("opt").act
            },
            revlastslide: function(e) {
                return t(this).parent().find(".tp-bannertimer").data("opt").lastslide
            },
            revshowslide: function(e) {
                return this.each(function() {
                    var i = t(this);
                    i.data("showus", e), i.parent().find(".tp-rightarrow").click()
                })
            }
        });
        var A = function(i, a, n) {
            m(i, 0);
            var r = setInterval(function() {
                n.bannertimeronpause = !0, n.container.trigger("stoptimer"), n.cd = 0;
                var s = 0;
                i.find("img, .defaultimg").each(function(e) {
                    1 != t(this).data("lazydone") && s++
                }), s > 0 ? m(i, s) : (clearInterval(r), a != e && a())
            }, 100)
        }
    }(jQuery),
    function(t) {
        "use strict";
        var e = t.GreenSockGlobals || t,
            i = function(t) {
                var i, a = t.split("."),
                    n = e;
                for (i = 0; a.length > i; i++) n[a[i]] = n = n[a[i]] || {};
                return n
            }("com.greensock.utils"),
            a = function(t) {
                var e = t.nodeType,
                    i = "";
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += a(t)
                } else if (3 === e || 4 === e) return t.nodeValue;
                return i
            },
            n = document,
            r = n.defaultView ? n.defaultView.getComputedStyle : function() {},
            s = /([A-Z])/g,
            o = function(t, e, i, a) {
                var n;
                return (i = i || r(t, null)) ? n = (t = i.getPropertyValue(e.replace(s, "-$1").toLowerCase())) || i.length ? t : i[e] : t.currentStyle && (n = (i = t.currentStyle)[e]), a ? n : parseInt(n, 10) || 0
            },
            l = function(t) {
                return !!(t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]))
            },
            d = ")eefec303079ad17405c",
            h = /(?:<br>|<br\/>|<br \/>)/gi,
            p = "<div style='position:relative;display:inline-block;" + (n.all && !n.addEventListener ? "*display:inline;*zoom:1;'" : "'"),
            c = function(t) {
                var e = -1 !== (t = t || "").indexOf("++"),
                    i = 1;
                return e && (t = t.split("++").join("")),
                    function() {
                        return p + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">")
                    }
            },
            f = i.SplitText = e.SplitText = function(t, e) {
                if ("string" == typeof t && (t = f.selector(t)), !t) throw "cannot split a null element.";
                this.elements = l(t) ? function(t) {
                    var e, i, a, n = [],
                        r = t.length;
                    for (e = 0; r > e; e++)
                        if (i = t[e], l(i))
                            for (a = i.length, a = 0; i.length > a; a++) n.push(i[a]);
                        else n.push(i);
                    return n
                }(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
            },
            u = function(t, e, i, s, l) {
                h.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(h, d));
                var p, f, u, m, g, v, _, w, y, b, x, T, C, P = a(t),
                    k = e.type || e.split || "chars,words,lines",
                    O = -1 !== k.indexOf("lines") ? [] : null,
                    E = -1 !== k.indexOf("words"),
                    S = -1 !== k.indexOf("chars"),
                    A = "absolute" === e.position || !0 === e.absolute,
                    L = A ? "&#173; " : " ",
                    M = -999,
                    I = r(t),
                    z = o(t, "paddingLeft", I),
                    R = o(t, "borderBottomWidth", I) + o(t, "borderTopWidth", I),
                    N = o(t, "borderLeftWidth", I) + o(t, "borderRightWidth", I),
                    D = o(t, "paddingTop", I) + o(t, "paddingBottom", I),
                    Y = o(t, "paddingLeft", I) + o(t, "paddingRight", I),
                    X = o(t, "textAlign", I, !0),
                    H = t.clientHeight,
                    V = t.clientWidth,
                    F = P.length,
                    W = "</div>",
                    j = c(e.wordsClass),
                    B = c(e.charsClass),
                    U = -1 !== (e.linesClass || "").indexOf("++"),
                    q = e.linesClass;
                for (U && (q = q.split("++").join("")), u = j(), m = 0; F > m; m++) v = P.charAt(m), ")" === v && P.substr(m, 20) === d ? (u += W + "<BR/>", m !== F - 1 && (u += " " + j()), m += 19) : " " === v && " " !== P.charAt(m - 1) && m !== F - 1 ? (u += W, m !== F - 1 && (u += L + j())) : u += S && " " !== v ? B() + v + "</div>" : v;
                for (t.innerHTML = u + W, F = (g = t.getElementsByTagName("*")).length, _ = [], m = 0; F > m; m++) _[m] = g[m];
                if (O || A)
                    for (m = 0; F > m; m++) w = _[m], f = w.parentNode === t, (f || A || S && !E) && (y = w.offsetTop, O && f && y !== M && "BR" !== w.nodeName && (p = [], O.push(p), M = y), A && (w._x = w.offsetLeft, w._y = y, w._w = w.offsetWidth, w._h = w.offsetHeight), O && (E !== f && S || (p.push(w), w._x -= z), f && m && (_[m - 1]._wordEnd = !0)));
                for (m = 0; F > m; m++) w = _[m], f = w.parentNode === t, "BR" !== w.nodeName ? (A && (x = w.style, E || f || (w._x += w.parentNode._x, w._y += w.parentNode._y), x.left = w._x + "px", x.top = w._y + "px", x.position = "absolute", x.display = "block", x.width = w._w + 1 + "px", x.height = w._h + "px"), E ? f ? s.push(w) : S && i.push(w) : f ? (t.removeChild(w), _.splice(m--, 1), F--) : !f && S && (y = !O && !A && w.nextSibling, t.appendChild(w), y || t.appendChild(n.createTextNode(" ")), i.push(w))) : O || A ? (t.removeChild(w), _.splice(m--, 1), F--) : E || t.appendChild(w);
                if (O) {
                    for (A && (b = n.createElement("div"), t.appendChild(b), T = b.offsetWidth + "px", y = b.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(b)), x = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                    for (C = !A || !E && !S, m = 0; O.length > m; m++) {
                        for (p = O[m], (b = n.createElement("div")).style.cssText = "display:block;text-align:" + X + ";position:" + (A ? "absolute;" : "relative;"), q && (b.className = q + (U ? m + 1 : "")), l.push(b), F = p.length, g = 0; F > g; g++) "BR" !== p[g].nodeName && (w = p[g], b.appendChild(w), C && (w._wordEnd || E) && b.appendChild(n.createTextNode(" ")), A && (0 === g && (b.style.top = w._y + "px", b.style.left = z + y + "px"), w.style.top = "0px", y && (w.style.left = w._x - y + "px")));
                        E || S || (b.innerHTML = a(b).split(String.fromCharCode(160)).join(" ")), A && (b.style.width = T, b.style.height = w._h + "px"), t.appendChild(b)
                    }
                    t.style.cssText = x
                }
                A && (H > t.clientHeight && (t.style.height = H - D + "px", H > t.clientHeight && (t.style.height = H + R + "px")), V > t.clientWidth && (t.style.width = V - Y + "px", V > t.clientWidth && (t.style.width = V + N + "px")))
            },
            m = f.prototype;
        m.split = function(t) {
            this.isSplit && this.revert(), this.vars = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
            for (var e = 0; this.elements.length > e; e++) this._originals[e] = this.elements[e].innerHTML, u(this.elements[e], this.vars, this.chars, this.words, this.lines);
            return this.isSplit = !0, this
        }, m.revert = function() {
            if (!this._originals) throw "revert() call wasn't scoped properly.";
            for (var t = this._originals.length; --t > -1;) this.elements[t].innerHTML = this._originals[t];
            return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
        }, f.selector = t.$ || t.jQuery || function(e) {
            return t.$ ? (f.selector = t.$, t.$(e)) : n ? n.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
        }
    }(window || {});