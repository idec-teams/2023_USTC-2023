function wavify(e, t) {
    function i(e) {
        h = Object.assign({}, h, e)
    }
    function n(e) {
        for (var t = [], i = 0; i <= h.bones; i++) {
            var n = i / h.bones * d
              , r = (e + (i + i % h.bones)) * h.speed * 100
              , o = Math.sin(r / 100) * h.amplitude
              , a = Math.sin(r / 100) * o + h.height;
            t.push({
                x: n,
                y: a
            })
        }
        return t
    }
    function r(e) {
        var t = "M " + e[0].x + " " + e[0].y
          , i = {
            x: (e[1].x - e[0].x) / 2,
            y: e[1].y - e[0].y + e[0].y + (e[1].y - e[0].y)
        };
        t += " C " + i.x + " " + i.y + " " + i.x + " " + i.y + " " + e[1].x + " " + e[1].y;
        for (var n = i, r = -1, o = 1; o < e.length - 1; o++) {
            Math.sqrt(n.x * n.x + n.y * n.y);
            var a = {
                x: e[o].x - n.x + e[o].x,
                y: e[o].y - n.y + e[o].y
            };
            t += " C " + a.x + " " + a.y + " " + a.x + " " + a.y + " " + e[o + 1].x + " " + e[o + 1].y,
            n = a,
            r = -r
        }
        return t += " L " + d + " " + m,
        t += " L 0 " + m + " Z"
    }
    function o() {
        var e = window.Date.now();
        if (f) {
            var t = (e - f) / 1e3;
            f = e;
            var i = (g += t) * Math.PI;
            y = TweenMax.to(p, h.speed, {
                attr: {
                    d: r(n(i))
                },
                ease: Power1.easeInOut
            })
        } else
            f = e;
        v = requestAnimationFrame(o)
    }
    function a(e) {
        c(),
        void 0 !== typeof e && i(e),
        y = TweenMax.set(p, {
            attr: {
                fill: h.color
            }
        }),
        s(),
        window.addEventListener("resize", T)
    }
    function s() {
        v || (v = requestAnimationFrame(o))
    }
    function l() {
        v && (cancelAnimationFrame(v),
        v = !1)
    }
    function u(e) {
        void 0 === typeof e.timing && (e.timing = 1),
        void 0 === typeof e.color && (e.color = h.color),
        y = TweenMax.to(p, parseInt(e.timing), {
            attr: {
                fill: e.color
            },
            onComplete: function() {
                void 0 !== typeof e.onComplete && "[object Function]" === {}.toString.call(e.onComplete) && e.onComplete()
            }
        })
    }
    function c() {
        v && (l(),
        y.kill(),
        y = TweenMax.set(p, {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 0,
            clearProps: "all",
            attr: {
                d: "M0,0",
                fill: ""
            }
        }),
        window.removeEventListener("resize", T),
        v = !1)
    }
    void 0 === t && (t = {});
    var f, h = Object.assign({}, {
        container: t.container ? t.container : "body",
        height: 200,
        amplitude: 100,
        speed: .15,
        bones: 3,
        color: "rgba(255,255,255, 0.20)"
    }, t), p = e, d = document.querySelector(h.container).getBoundingClientRect().width, m = document.querySelector(h.container).getBoundingClientRect().height, _ = [], g = 0, v = !1, y = !1, T = function(e, t, i) {
        var n;
        return function() {
            var r = this
              , o = arguments;
            clearTimeout(n),
            n = setTimeout(function() {
                n = null,
                i || e.apply(r, o)
            }, t),
            i && !n && e.apply(r, o)
        }
    }(function() {
        l(),
        _ = [],
        g = 0,
        d = document.querySelector(h.container).getBoundingClientRect().width,
        m = document.querySelector(h.container).getBoundingClientRect().height,
        f = !1,
        s()
    }, 250);
    return function() {
        v || (y = TweenMax.set(p, {
            attr: {
                fill: h.color
            }
        }),
        s(),
        window.addEventListener("resize", T))
    }(),
    {
        reboot: a,
        play: s,
        pause: l,
        kill: c,
        updateColor: u
    }
}
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
        var n = function(e) {
            var t, i = [], n = e.length;
            for (t = 0; t !== n; i.push(e[t++]))
                ;
            return i
        }
          , r = function(e, t, i) {
            var n, r, o = e.cycle;
            for (n in o)
                r = o[n],
                e[n] = "function" == typeof r ? r(i, t[i], t) : r[i % r.length];
            delete e.cycle
        }
          , o = function(e) {
            if ("function" == typeof e)
                return e;
            var t = "object" == typeof e ? e : {
                each: e
            }
              , i = t.ease
              , n = t.from || 0
              , r = t.base || 0
              , o = {}
              , a = isNaN(n)
              , s = t.axis
              , l = {
                center: .5,
                end: 1
            }[n] || 0;
            return function(e, u, c) {
                var f, h, p, d, m, _, g, v, y, T = (c || t).length, x = o[T];
                if (!x) {
                    if (!(y = "auto" === t.grid ? 0 : (t.grid || [1 / 0])[0])) {
                        for (g = -1 / 0; g < (g = c[y++].getBoundingClientRect().left) && y < T; )
                            ;
                        y--
                    }
                    for (x = o[T] = [],
                    f = a ? Math.min(y, T) * l - .5 : n % y,
                    h = a ? T * l / y - .5 : n / y | 0,
                    g = 0,
                    v = 1 / 0,
                    _ = 0; _ < T; _++)
                        p = _ % y - f,
                        d = h - (_ / y | 0),
                        x[_] = m = s ? Math.abs("y" === s ? d : p) : Math.sqrt(p * p + d * d),
                        m > g && (g = m),
                        m < v && (v = m);
                    x.max = g - v,
                    x.min = v,
                    x.v = T = t.amount || t.each * (y > T ? T - 1 : s ? "y" === s ? T / y : y : Math.max(y, T / y)) || 0,
                    x.b = T < 0 ? r - T : r
                }
                return T = (x[e] - x.min) / x.max,
                x.b + (i ? i.getRatio(T) : T) * x.v
            }
        }
          , a = function(e, t, n) {
            i.call(this, e, t, n),
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._repeat && this._uncache(!0),
            this.render = a.prototype.render
        }
          , s = i._internals
          , l = s.isSelector
          , u = s.isArray
          , c = a.prototype = i.to({}, .1, {})
          , f = [];
        a.version = "2.1.3",
        c.constructor = a,
        c.kill()._gc = !1,
        a.killTweensOf = a.killDelayedCallsTo = i.killTweensOf,
        a.getTweensOf = i.getTweensOf,
        a.lagSmoothing = i.lagSmoothing,
        a.ticker = i.ticker,
        a.render = i.render,
        a.distribute = o,
        c.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._yoyoEase = null,
            this._uncache(!0),
            i.prototype.invalidate.call(this)
        }
        ,
        c.updateTo = function(e, t) {
            var n, r = this, o = r.ratio, a = r.vars.immediateRender || e.immediateRender;
            t && r._startTime < r._timeline._time && (r._startTime = r._timeline._time,
            r._uncache(!1),
            r._gc ? r._enabled(!0, !1) : r._timeline.insert(r, r._startTime - r._delay));
            for (n in e)
                r.vars[n] = e[n];
            if (r._initted || a)
                if (t)
                    r._initted = !1,
                    a && r.render(0, !0, !0);
                else if (r._gc && r._enabled(!0, !1),
                r._notifyPluginsOfEnabled && r._firstPT && i._onPluginEvent("_onDisable", r),
                r._time / r._duration > .998) {
                    var s = r._totalTime;
                    r.render(0, !0, !1),
                    r._initted = !1,
                    r.render(s, !0, !1)
                } else if (r._initted = !1,
                r._init(),
                r._time > 0 || a)
                    for (var l, u = 1 / (1 - o), c = r._firstPT; c; )
                        l = c.s + c.c,
                        c.c *= u,
                        c.s = l - c.c,
                        c = c._next;
            return r
        }
        ,
        c.render = function(e, t, n) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var r, o, a, l, u, c, f, h, p, d = this, m = d._dirty ? d.totalDuration() : d._totalDuration, _ = d._time, g = d._totalTime, v = d._cycle, y = d._duration, T = d._rawPrevTime;
            if (e >= m - 1e-8 && e >= 0 ? (d._totalTime = m,
            d._cycle = d._repeat,
            d._yoyo && 0 != (1 & d._cycle) ? (d._time = 0,
            d.ratio = d._ease._calcEnd ? d._ease.getRatio(0) : 0) : (d._time = y,
            d.ratio = d._ease._calcEnd ? d._ease.getRatio(1) : 1),
            d._reversed || (r = !0,
            o = "onComplete",
            n = n || d._timeline.autoRemoveChildren),
            0 === y && (d._initted || !d.vars.lazy || n) && (d._startTime === d._timeline._duration && (e = 0),
            (T < 0 || e <= 0 && e >= -1e-8 || 1e-8 === T && "isPause" !== d.data) && T !== e && (n = !0,
            T > 1e-8 && (o = "onReverseComplete")),
            d._rawPrevTime = h = !t || e || T === e ? e : 1e-8)) : e < 1e-8 ? (d._totalTime = d._time = d._cycle = 0,
            d.ratio = d._ease._calcEnd ? d._ease.getRatio(0) : 0,
            (0 !== g || 0 === y && T > 0) && (o = "onReverseComplete",
            r = d._reversed),
            e > -1e-8 ? e = 0 : e < 0 && (d._active = !1,
            0 === y && (d._initted || !d.vars.lazy || n) && (T >= 0 && (n = !0),
            d._rawPrevTime = h = !t || e || T === e ? e : 1e-8)),
            d._initted || (n = !0)) : (d._totalTime = d._time = e,
            0 !== d._repeat && (l = y + d._repeatDelay,
            d._cycle = d._totalTime / l >> 0,
            0 !== d._cycle && d._cycle === d._totalTime / l && g <= e && d._cycle--,
            d._time = d._totalTime - d._cycle * l,
            d._yoyo && 0 != (1 & d._cycle) && (d._time = y - d._time,
            (p = d._yoyoEase || d.vars.yoyoEase) && (d._yoyoEase || (!0 !== p || d._initted ? d._yoyoEase = p = !0 === p ? d._ease : p instanceof Ease ? p : Ease.map[p] : (p = d.vars.ease,
            d._yoyoEase = p = p ? p instanceof Ease ? p : "function" == typeof p ? new Ease(p,d.vars.easeParams) : Ease.map[p] || i.defaultEase : i.defaultEase)),
            d.ratio = p ? 1 - p.getRatio((y - d._time) / y) : 0)),
            d._time > y ? d._time = y : d._time < 0 && (d._time = 0)),
            d._easeType && !p ? (u = d._time / y,
            c = d._easeType,
            f = d._easePower,
            (1 === c || 3 === c && u >= .5) && (u = 1 - u),
            3 === c && (u *= 2),
            1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u),
            d.ratio = 1 === c ? 1 - u : 2 === c ? u : d._time / y < .5 ? u / 2 : 1 - u / 2) : p || (d.ratio = d._ease.getRatio(d._time / y))),
            _ !== d._time || n || v !== d._cycle) {
                if (!d._initted) {
                    if (d._init(),
                    !d._initted || d._gc)
                        return;
                    if (!n && d._firstPT && (!1 !== d.vars.lazy && d._duration || d.vars.lazy && !d._duration))
                        return d._time = _,
                        d._totalTime = g,
                        d._rawPrevTime = T,
                        d._cycle = v,
                        s.lazyTweens.push(d),
                        void (d._lazy = [e, t]);
                    !d._time || r || p ? r && this._ease._calcEnd && !p && (d.ratio = d._ease.getRatio(0 === d._time ? 0 : 1)) : d.ratio = d._ease.getRatio(d._time / y)
                }
                for (!1 !== d._lazy && (d._lazy = !1),
                d._active || !d._paused && d._time !== _ && e >= 0 && (d._active = !0),
                0 === g && (2 === d._initted && e > 0 && d._init(),
                d._startAt && (e >= 0 ? d._startAt.render(e, !0, n) : o || (o = "_dummyGS")),
                d.vars.onStart && (0 === d._totalTime && 0 !== y || t || d._callback("onStart"))),
                a = d._firstPT; a; )
                    a.f ? a.t[a.p](a.c * d.ratio + a.s) : a.t[a.p] = a.c * d.ratio + a.s,
                    a = a._next;
                d._onUpdate && (e < 0 && d._startAt && d._startTime && d._startAt.render(e, !0, n),
                t || (d._totalTime !== g || o) && d._callback("onUpdate")),
                d._cycle !== v && (t || d._gc || d.vars.onRepeat && d._callback("onRepeat")),
                o && (d._gc && !n || (e < 0 && d._startAt && !d._onUpdate && d._startTime && d._startAt.render(e, !0, n),
                r && (d._timeline.autoRemoveChildren && d._enabled(!1, !1),
                d._active = !1),
                !t && d.vars[o] && d._callback(o),
                0 === y && 1e-8 === d._rawPrevTime && 1e-8 !== h && (d._rawPrevTime = 0)))
            } else
                g !== d._totalTime && d._onUpdate && (t || d._callback("onUpdate"))
        }
        ,
        a.to = function(e, t, i) {
            return new a(e,t,i)
        }
        ,
        a.from = function(e, t, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new a(e,t,i)
        }
        ,
        a.fromTo = function(e, t, i, n) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            new a(e,t,n)
        }
        ,
        a.staggerTo = a.allTo = function(e, t, s, c, h, p, d) {
            var m, _, g, v, y = [], T = o(s.stagger || c), x = s.cycle, b = (s.startAt || f).cycle;
            for (u(e) || ("string" == typeof e && (e = i.selector(e) || e),
            l(e) && (e = n(e))),
            m = (e = e || []).length - 1,
            g = 0; g <= m; g++) {
                _ = {};
                for (v in s)
                    _[v] = s[v];
                if (x && (r(_, e, g),
                null != _.duration && (t = _.duration,
                delete _.duration)),
                b) {
                    b = _.startAt = {};
                    for (v in s.startAt)
                        b[v] = s.startAt[v];
                    r(_.startAt, e, g)
                }
                _.delay = T(g, e[g], e) + (_.delay || 0),
                g === m && h && (_.onComplete = function() {
                    s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments),
                    h.apply(d || s.callbackScope || this, p || f)
                }
                ),
                y[g] = new a(e[g],t,_)
            }
            return y
        }
        ,
        a.staggerFrom = a.allFrom = function(e, t, i, n, r, o, s) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            a.staggerTo(e, t, i, n, r, o, s)
        }
        ,
        a.staggerFromTo = a.allFromTo = function(e, t, i, n, r, o, s, l) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            a.staggerTo(e, t, n, r, o, s, l)
        }
        ,
        a.delayedCall = function(e, t, i, n, r) {
            return new a(t,0,{
                delay: e,
                onComplete: t,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: t,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        }
        ,
        a.set = function(e, t) {
            return new a(e,0,t)
        }
        ,
        a.isTweening = function(e) {
            return i.getTweensOf(e, !0).length > 0
        }
        ;
        var h = function(e, t) {
            for (var n = [], r = 0, o = e._first; o; )
                o instanceof i ? n[r++] = o : (t && (n[r++] = o),
                r = (n = n.concat(h(o, t))).length),
                o = o._next;
            return n
        }
          , p = a.getAllTweens = function(t) {
            return h(e._rootTimeline, t).concat(h(e._rootFramesTimeline, t))
        }
        ;
        a.killAll = function(e, i, n, r) {
            null == i && (i = !0),
            null == n && (n = !0);
            var o, a, s, l = p(0 != r), u = l.length, c = i && n && r;
            for (s = 0; s < u; s++)
                a = l[s],
                (c || a instanceof t || (o = a.target === a.vars.onComplete) && n || i && !o) && (e ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
        }
        ,
        a.killChildTweensOf = function(e, t) {
            if (null != e) {
                var r, o, c, f, h, p = s.tweenLookup;
                if ("string" == typeof e && (e = i.selector(e) || e),
                l(e) && (e = n(e)),
                u(e))
                    for (f = e.length; --f > -1; )
                        a.killChildTweensOf(e[f], t);
                else {
                    r = [];
                    for (c in p)
                        for (o = p[c].target.parentNode; o; )
                            o === e && (r = r.concat(p[c].tweens)),
                            o = o.parentNode;
                    for (h = r.length,
                    f = 0; f < h; f++)
                        t && r[f].totalTime(r[f].totalDuration()),
                        r[f]._enabled(!1, !1)
                }
            }
        }
        ;
        var d = function(e, i, n, r) {
            i = !1 !== i,
            n = !1 !== n;
            for (var o, a, s = p(r = !1 !== r), l = i && n && r, u = s.length; --u > -1; )
                a = s[u],
                (l || a instanceof t || (o = a.target === a.vars.onComplete) && n || i && !o) && a.paused(e)
        };
        return a.pauseAll = function(e, t, i) {
            d(!0, e, t, i)
        }
        ,
        a.resumeAll = function(e, t, i) {
            d(!1, e, t, i)
        }
        ,
        a.globalTimeScale = function(t) {
            var n = e._rootTimeline
              , r = i.ticker.time;
            return arguments.length ? (t = t || 1e-8,
            n._startTime = r - (r - n._startTime) * n._timeScale / t,
            n = e._rootFramesTimeline,
            r = i.ticker.frame,
            n._startTime = r - (r - n._startTime) * n._timeScale / t,
            n._timeScale = e._rootTimeline._timeScale = t,
            t) : n._timeScale
        }
        ,
        c.progress = function(e, t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this.duration() ? this._time / this._duration : this.ratio
        }
        ,
        c.totalProgress = function(e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
        }
        ,
        c.time = function(e, t) {
            if (!arguments.length)
                return this._time;
            this._dirty && this.totalDuration();
            var i = this._duration
              , n = this._cycle
              , r = n * (i + this._repeatDelay);
            return e > i && (e = i),
            this.totalTime(this._yoyo && 1 & n ? i - e + r : this._repeat ? e + r : e, t)
        }
        ,
        c.duration = function(t) {
            return arguments.length ? e.prototype.duration.call(this, t) : this._duration
        }
        ,
        c.totalDuration = function(e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
            this._dirty = !1),
            this._totalDuration)
        }
        ,
        c.repeat = function(e) {
            return arguments.length ? (this._repeat = e,
            this._uncache(!0)) : this._repeat
        }
        ,
        c.repeatDelay = function(e) {
            return arguments.length ? (this._repeatDelay = e,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        c.yoyo = function(e) {
            return arguments.length ? (this._yoyo = e,
            this) : this._yoyo
        }
        ,
        a
    }, !0),
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
        var n = function(e) {
            t.call(this, e);
            var i, n, r = this, o = r.vars;
            r._labels = {},
            r.autoRemoveChildren = !!o.autoRemoveChildren,
            r.smoothChildTiming = !!o.smoothChildTiming,
            r._sortChildren = !0,
            r._onUpdate = o.onUpdate;
            for (n in o)
                i = o[n],
                s(i) && -1 !== i.join("").indexOf("{self}") && (o[n] = r._swapSelfInParams(i));
            s(o.tweens) && r.add(o.tweens, 0, o.align, o.stagger)
        }
          , r = i._internals
          , o = n._internals = {}
          , a = r.isSelector
          , s = r.isArray
          , l = r.lazyTweens
          , u = r.lazyRender
          , c = _gsScope._gsDefine.globals
          , f = function(e) {
            var t, i = {};
            for (t in e)
                i[t] = e[t];
            return i
        }
          , h = function(e, t, i) {
            var n, r, o = e.cycle;
            for (n in o)
                r = o[n],
                e[n] = "function" == typeof r ? r(i, t[i], t) : r[i % r.length];
            delete e.cycle
        }
          , p = o.pauseCallback = function() {}
          , d = function(e) {
            var t, i = [], n = e.length;
            for (t = 0; t !== n; i.push(e[t++]))
                ;
            return i
        }
          , m = function(e, t, i, n) {
            var r = "immediateRender";
            return r in t || (t[r] = !(i && !1 === i[r] || n)),
            t
        }
          , _ = function(e) {
            if ("function" == typeof e)
                return e;
            var t = "object" == typeof e ? e : {
                each: e
            }
              , i = t.ease
              , n = t.from || 0
              , r = t.base || 0
              , o = {}
              , a = isNaN(n)
              , s = t.axis
              , l = {
                center: .5,
                end: 1
            }[n] || 0;
            return function(e, u, c) {
                var f, h, p, d, m, _, g, v, y, T = (c || t).length, x = o[T];
                if (!x) {
                    if (!(y = "auto" === t.grid ? 0 : (t.grid || [1 / 0])[0])) {
                        for (g = -1 / 0; g < (g = c[y++].getBoundingClientRect().left) && y < T; )
                            ;
                        y--
                    }
                    for (x = o[T] = [],
                    f = a ? Math.min(y, T) * l - .5 : n % y,
                    h = a ? T * l / y - .5 : n / y | 0,
                    g = 0,
                    v = 1 / 0,
                    _ = 0; _ < T; _++)
                        p = _ % y - f,
                        d = h - (_ / y | 0),
                        x[_] = m = s ? Math.abs("y" === s ? d : p) : Math.sqrt(p * p + d * d),
                        m > g && (g = m),
                        m < v && (v = m);
                    x.max = g - v,
                    x.min = v,
                    x.v = T = t.amount || t.each * (y > T ? T - 1 : s ? "y" === s ? T / y : y : Math.max(y, T / y)) || 0,
                    x.b = T < 0 ? r - T : r
                }
                return T = (x[e] - x.min) / x.max,
                x.b + (i ? i.getRatio(T) : T) * x.v
            }
        }
          , g = n.prototype = new t;
        return n.version = "2.1.3",
        n.distribute = _,
        g.constructor = n,
        g.kill()._gc = g._forcingPlayhead = g._hasPause = !1,
        g.to = function(e, t, n, r) {
            var o = n.repeat && c.TweenMax || i;
            return t ? this.add(new o(e,t,n), r) : this.set(e, n, r)
        }
        ,
        g.from = function(e, t, n, r) {
            return this.add((n.repeat && c.TweenMax || i).from(e, t, m(0, n)), r)
        }
        ,
        g.fromTo = function(e, t, n, r, o) {
            var a = r.repeat && c.TweenMax || i;
            return r = m(0, r, n),
            t ? this.add(a.fromTo(e, t, n, r), o) : this.set(e, r, o)
        }
        ,
        g.staggerTo = function(e, t, r, o, s, l, u, c) {
            var p, m, g = new n({
                onComplete: l,
                onCompleteParams: u,
                callbackScope: c,
                smoothChildTiming: this.smoothChildTiming
            }), v = _(r.stagger || o), y = r.startAt, T = r.cycle;
            for ("string" == typeof e && (e = i.selector(e) || e),
            a(e = e || []) && (e = d(e)),
            m = 0; m < e.length; m++)
                p = f(r),
                y && (p.startAt = f(y),
                y.cycle && h(p.startAt, e, m)),
                T && (h(p, e, m),
                null != p.duration && (t = p.duration,
                delete p.duration)),
                g.to(e[m], t, p, v(m, e[m], e));
            return this.add(g, s)
        }
        ,
        g.staggerFrom = function(e, t, i, n, r, o, a, s) {
            return i.runBackwards = !0,
            this.staggerTo(e, t, m(0, i), n, r, o, a, s)
        }
        ,
        g.staggerFromTo = function(e, t, i, n, r, o, a, s, l) {
            return n.startAt = i,
            this.staggerTo(e, t, m(0, n, i), r, o, a, s, l)
        }
        ,
        g.call = function(e, t, n, r) {
            return this.add(i.delayedCall(0, e, t, n), r)
        }
        ,
        g.set = function(e, t, n) {
            return this.add(new i(e,0,m(0, t, null, !0)), n)
        }
        ,
        n.exportRoot = function(e, t) {
            null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
            var r, o, a, s, l = new n(e), u = l._timeline;
            for (null == t && (t = !0),
            u._remove(l, !0),
            l._startTime = 0,
            l._rawPrevTime = l._time = l._totalTime = u._time,
            a = u._first; a; )
                s = a._next,
                t && a instanceof i && a.target === a.vars.onComplete || ((o = a._startTime - a._delay) < 0 && (r = 1),
                l.add(a, o)),
                a = s;
            return u.add(l, 0),
            r && l.totalDuration(),
            l
        }
        ,
        g.add = function(r, o, a, l) {
            var u, c, f, h, p, d, m = this;
            if ("number" != typeof o && (o = m._parseTimeOrLabel(o, 0, !0, r)),
            !(r instanceof e)) {
                if (r instanceof Array || r && r.push && s(r)) {
                    for (a = a || "normal",
                    l = l || 0,
                    u = o,
                    c = r.length,
                    f = 0; f < c; f++)
                        s(h = r[f]) && (h = new n({
                            tweens: h
                        })),
                        m.add(h, u),
                        "string" != typeof h && "function" != typeof h && ("sequence" === a ? u = h._startTime + h.totalDuration() / h._timeScale : "start" === a && (h._startTime -= h.delay())),
                        u += l;
                    return m._uncache(!0)
                }
                if ("string" == typeof r)
                    return m.addLabel(r, o);
                if ("function" != typeof r)
                    throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                r = i.delayedCall(0, r)
            }
            if (t.prototype.add.call(m, r, o),
            (r._time || !r._duration && r._initted) && (u = (m.rawTime() - r._startTime) * r._timeScale,
            (!r._duration || Math.abs(Math.max(0, Math.min(r.totalDuration(), u))) - r._totalTime > 1e-5) && r.render(u, !1, !1)),
            (m._gc || m._time === m._duration) && !m._paused && m._duration < m.duration())
                for (d = (p = m).rawTime() > r._startTime; p._timeline; )
                    d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1),
                    p = p._timeline;
            return m
        }
        ,
        g.remove = function(t) {
            if (t instanceof e) {
                this._remove(t, !1);
                var i = t._timeline = t.vars.useFrames ? e._rootFramesTimeline : e._rootTimeline;
                return t._startTime = (t._paused ? t._pauseTime : i._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale,
                this
            }
            if (t instanceof Array || t && t.push && s(t)) {
                for (var n = t.length; --n > -1; )
                    this.remove(t[n]);
                return this
            }
            return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
        }
        ,
        g._remove = function(e, i) {
            return t.prototype._remove.call(this, e, i),
            this._last ? this._time > this.duration() && (this._time = this._duration,
            this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
            this
        }
        ,
        g.append = function(e, t) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
        }
        ,
        g.insert = g.insertMultiple = function(e, t, i, n) {
            return this.add(e, t || 0, i, n)
        }
        ,
        g.appendMultiple = function(e, t, i, n) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, n)
        }
        ,
        g.addLabel = function(e, t) {
            return this._labels[e] = this._parseTimeOrLabel(t),
            this
        }
        ,
        g.addPause = function(e, t, n, r) {
            var o = i.delayedCall(0, p, n, r || this);
            return o.vars.onComplete = o.vars.onReverseComplete = t,
            o.data = "isPause",
            this._hasPause = !0,
            this.add(o, e)
        }
        ,
        g.removeLabel = function(e) {
            return delete this._labels[e],
            this
        }
        ,
        g.getLabelTime = function(e) {
            return null != this._labels[e] ? this._labels[e] : -1
        }
        ,
        g._parseTimeOrLabel = function(t, i, n, r) {
            var o, a;
            if (r instanceof e && r.timeline === this)
                this.remove(r);
            else if (r && (r instanceof Array || r.push && s(r)))
                for (a = r.length; --a > -1; )
                    r[a]instanceof e && r[a].timeline === this && this.remove(r[a]);
            if (o = "number" != typeof t || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0,
            "string" == typeof i)
                return this._parseTimeOrLabel(i, n && "number" == typeof t && null == this._labels[i] ? t - o : 0, n);
            if (i = i || 0,
            "string" != typeof t || !isNaN(t) && null == this._labels[t])
                null == t && (t = o);
            else {
                if (-1 === (a = t.indexOf("=")))
                    return null == this._labels[t] ? n ? this._labels[t] = o + i : i : this._labels[t] + i;
                i = parseInt(t.charAt(a - 1) + "1", 10) * Number(t.substr(a + 1)),
                t = a > 1 ? this._parseTimeOrLabel(t.substr(0, a - 1), 0, n) : o
            }
            return Number(t) + i
        }
        ,
        g.seek = function(e, t) {
            return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t)
        }
        ,
        g.stop = function() {
            return this.paused(!0)
        }
        ,
        g.gotoAndPlay = function(e, t) {
            return this.play(e, t)
        }
        ,
        g.gotoAndStop = function(e, t) {
            return this.pause(e, t)
        }
        ,
        g.render = function(e, t, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, o, a, s, c, f, h, p = this, d = p._time, m = p._dirty ? p.totalDuration() : p._totalDuration, _ = p._startTime, g = p._timeScale, v = p._paused;
            if (d !== p._time && (e += p._time - d),
            p._hasPause && !p._forcingPlayhead && !t) {
                if (e > d)
                    for (n = p._first; n && n._startTime <= e && !c; )
                        n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === p._rawPrevTime || (c = n),
                        n = n._next;
                else
                    for (n = p._last; n && n._startTime >= e && !c; )
                        n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (c = n),
                        n = n._prev;
                c && (p._time = p._totalTime = e = c._startTime,
                h = p._startTime + (p._reversed ? p._duration - e : e) / p._timeScale)
            }
            if (e >= m - 1e-8 && e >= 0)
                p._totalTime = p._time = m,
                p._reversed || p._hasPausedChild() || (r = !0,
                a = "onComplete",
                s = !!p._timeline.autoRemoveChildren,
                0 === p._duration && (e <= 0 && e >= -1e-8 || p._rawPrevTime < 0 || 1e-8 === p._rawPrevTime) && p._rawPrevTime !== e && p._first && (s = !0,
                p._rawPrevTime > 1e-8 && (a = "onReverseComplete"))),
                p._rawPrevTime = p._duration || !t || e || p._rawPrevTime === e ? e : 1e-8,
                e = m + 1e-4;
            else if (e < 1e-8)
                if (p._totalTime = p._time = 0,
                e > -1e-8 && (e = 0),
                (0 !== d || 0 === p._duration && 1e-8 !== p._rawPrevTime && (p._rawPrevTime > 0 || e < 0 && p._rawPrevTime >= 0)) && (a = "onReverseComplete",
                r = p._reversed),
                e < 0)
                    p._active = !1,
                    p._timeline.autoRemoveChildren && p._reversed ? (s = r = !0,
                    a = "onReverseComplete") : p._rawPrevTime >= 0 && p._first && (s = !0),
                    p._rawPrevTime = e;
                else {
                    if (p._rawPrevTime = p._duration || !t || e || p._rawPrevTime === e ? e : 1e-8,
                    0 === e && r)
                        for (n = p._first; n && 0 === n._startTime; )
                            n._duration || (r = !1),
                            n = n._next;
                    e = 0,
                    p._initted || (s = !0)
                }
            else
                p._totalTime = p._time = p._rawPrevTime = e;
            if (p._time !== d && p._first || i || s || c) {
                if (p._initted || (p._initted = !0),
                p._active || !p._paused && p._time !== d && e > 0 && (p._active = !0),
                0 === d && p.vars.onStart && (0 === p._time && p._duration || t || p._callback("onStart")),
                (f = p._time) >= d)
                    for (n = p._first; n && (o = n._next,
                    f === p._time && (!p._paused || v)); )
                        (n._active || n._startTime <= f && !n._paused && !n._gc) && (c === n && (p.pause(),
                        p._pauseTime = h),
                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)),
                        n = o;
                else
                    for (n = p._last; n && (o = n._prev,
                    f === p._time && (!p._paused || v)); ) {
                        if (n._active || n._startTime <= d && !n._paused && !n._gc) {
                            if (c === n) {
                                for (c = n._prev; c && c.endTime() > p._time; )
                                    c.render(c._reversed ? c.totalDuration() - (e - c._startTime) * c._timeScale : (e - c._startTime) * c._timeScale, t, i),
                                    c = c._prev;
                                c = null,
                                p.pause(),
                                p._pauseTime = h
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)
                        }
                        n = o
                    }
                p._onUpdate && (t || (l.length && u(),
                p._callback("onUpdate"))),
                a && (p._gc || _ !== p._startTime && g === p._timeScale || (0 === p._time || m >= p.totalDuration()) && (r && (l.length && u(),
                p._timeline.autoRemoveChildren && p._enabled(!1, !1),
                p._active = !1),
                !t && p.vars[a] && p._callback(a)))
            }
        }
        ,
        g._hasPausedChild = function() {
            for (var e = this._first; e; ) {
                if (e._paused || e instanceof n && e._hasPausedChild())
                    return !0;
                e = e._next
            }
            return !1
        }
        ,
        g.getChildren = function(e, t, n, r) {
            r = r || -9999999999;
            for (var o = [], a = this._first, s = 0; a; )
                a._startTime < r || (a instanceof i ? !1 !== t && (o[s++] = a) : (!1 !== n && (o[s++] = a),
                !1 !== e && (s = (o = o.concat(a.getChildren(!0, t, n))).length))),
                a = a._next;
            return o
        }
        ,
        g.getTweensOf = function(e, t) {
            var n, r, o = this._gc, a = [], s = 0;
            for (o && this._enabled(!0, !0),
            r = (n = i.getTweensOf(e)).length; --r > -1; )
                (n[r].timeline === this || t && this._contains(n[r])) && (a[s++] = n[r]);
            return o && this._enabled(!1, !0),
            a
        }
        ,
        g.recent = function() {
            return this._recent
        }
        ,
        g._contains = function(e) {
            for (var t = e.timeline; t; ) {
                if (t === this)
                    return !0;
                t = t.timeline
            }
            return !1
        }
        ,
        g.shiftChildren = function(e, t, i) {
            i = i || 0;
            for (var n, r = this._first, o = this._labels; r; )
                r._startTime >= i && (r._startTime += e),
                r = r._next;
            if (t)
                for (n in o)
                    o[n] >= i && (o[n] += e);
            return this._uncache(!0)
        }
        ,
        g._kill = function(e, t) {
            if (!e && !t)
                return this._enabled(!1, !1);
            for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1; )
                i[n]._kill(e, t) && (r = !0);
            return r
        }
        ,
        g.clear = function(e) {
            var t = this.getChildren(!1, !0, !0)
              , i = t.length;
            for (this._time = this._totalTime = 0; --i > -1; )
                t[i]._enabled(!1, !1);
            return !1 !== e && (this._labels = {}),
            this._uncache(!0)
        }
        ,
        g.invalidate = function() {
            for (var t = this._first; t; )
                t.invalidate(),
                t = t._next;
            return e.prototype.invalidate.call(this)
        }
        ,
        g._enabled = function(e, i) {
            if (e === this._gc)
                for (var n = this._first; n; )
                    n._enabled(e, !0),
                    n = n._next;
            return t.prototype._enabled.call(this, e, i)
        }
        ,
        g.totalTime = function(t, i, n) {
            this._forcingPlayhead = !0;
            var r = e.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
            r
        }
        ,
        g.duration = function(e) {
            return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e),
            this) : (this._dirty && this.totalDuration(),
            this._duration)
        }
        ,
        g.totalDuration = function(e) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var t, i, n = 0, r = this, o = r._last, a = 999999999999; o; )
                        t = o._prev,
                        o._dirty && o.totalDuration(),
                        o._startTime > a && r._sortChildren && !o._paused && !r._calculatingDuration ? (r._calculatingDuration = 1,
                        r.add(o, o._startTime - o._delay),
                        r._calculatingDuration = 0) : a = o._startTime,
                        o._startTime < 0 && !o._paused && (n -= o._startTime,
                        r._timeline.smoothChildTiming && (r._startTime += o._startTime / r._timeScale,
                        r._time -= o._startTime,
                        r._totalTime -= o._startTime,
                        r._rawPrevTime -= o._startTime),
                        r.shiftChildren(-o._startTime, !1, -9999999999),
                        a = 0),
                        (i = o._startTime + o._totalDuration / o._timeScale) > n && (n = i),
                        o = t;
                    r._duration = r._totalDuration = n,
                    r._dirty = !1
                }
                return this._totalDuration
            }
            return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this
        }
        ,
        g.paused = function(t) {
            if (!1 === t && this._paused)
                for (var i = this._first; i; )
                    i._startTime === this._time && "isPause" === i.data && (i._rawPrevTime = 0),
                    i = i._next;
            return e.prototype.paused.apply(this, arguments)
        }
        ,
        g.usesFrames = function() {
            for (var t = this._timeline; t._timeline; )
                t = t._timeline;
            return t === e._rootFramesTimeline
        }
        ,
        g.rawTime = function(e) {
            return e && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(e) - this._startTime) * this._timeScale
        }
        ,
        n
    }, !0),
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, t, i) {
        var n = function(t) {
            e.call(this, t),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = !!this.vars.yoyo,
            this._dirty = !0
        }
          , r = t._internals
          , o = r.lazyTweens
          , a = r.lazyRender
          , s = _gsScope._gsDefine.globals
          , l = new i(null,null,1,0)
          , u = n.prototype = new e;
        return u.constructor = n,
        u.kill()._gc = !1,
        n.version = "2.1.3",
        u.invalidate = function() {
            return this._yoyo = !!this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            e.prototype.invalidate.call(this)
        }
        ,
        u.addCallback = function(e, i, n, r) {
            return this.add(t.delayedCall(0, e, n, r), i)
        }
        ,
        u.removeCallback = function(e, t) {
            if (e)
                if (null == t)
                    this._kill(null, e);
                else
                    for (var i = this.getTweensOf(e, !1), n = i.length, r = this._parseTimeOrLabel(t); --n > -1; )
                        i[n]._startTime === r && i[n]._enabled(!1, !1);
            return this
        }
        ,
        u.removePause = function(t) {
            return this.removeCallback(e._internals.pauseCallback, t)
        }
        ,
        u.tweenTo = function(e, i) {
            i = i || {};
            var n, r, o, a = {
                ease: l,
                useFrames: this.usesFrames(),
                immediateRender: !1,
                lazy: !1
            }, u = i.repeat && s.TweenMax || t;
            for (r in i)
                a[r] = i[r];
            return a.time = this._parseTimeOrLabel(e),
            n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001,
            o = new u(this,n,a),
            a.onStart = function() {
                o.target.paused(!0),
                o.vars.time === o.target.time() || n !== o.duration() || o.isFromTo || o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale).render(o.time(), !0, !0),
                i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || o, i.onStartParams || [])
            }
            ,
            o
        }
        ,
        u.tweenFromTo = function(e, t, i) {
            i = i || {},
            e = this._parseTimeOrLabel(e),
            i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [e],
                callbackScope: this
            },
            i.immediateRender = !1 !== i.immediateRender;
            var n = this.tweenTo(t, i);
            return n.isFromTo = 1,
            n.duration(Math.abs(n.vars.time - e) / this._timeScale || .001)
        }
        ,
        u.render = function(e, t, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, s, l, u, c, f, h, p, d = this, m = d._time, _ = d._dirty ? d.totalDuration() : d._totalDuration, g = d._duration, v = d._totalTime, y = d._startTime, T = d._timeScale, x = d._rawPrevTime, b = d._paused, w = d._cycle;
            if (m !== d._time && (e += d._time - m),
            e >= _ - 1e-8 && e >= 0)
                d._locked || (d._totalTime = _,
                d._cycle = d._repeat),
                d._reversed || d._hasPausedChild() || (r = !0,
                l = "onComplete",
                u = !!d._timeline.autoRemoveChildren,
                0 === d._duration && (e <= 0 && e >= -1e-8 || x < 0 || 1e-8 === x) && x !== e && d._first && (u = !0,
                x > 1e-8 && (l = "onReverseComplete"))),
                d._rawPrevTime = d._duration || !t || e || d._rawPrevTime === e ? e : 1e-8,
                d._yoyo && 1 & d._cycle ? d._time = e = 0 : (d._time = g,
                e = g + 1e-4);
            else if (e < 1e-8)
                if (d._locked || (d._totalTime = d._cycle = 0),
                d._time = 0,
                e > -1e-8 && (e = 0),
                (0 !== m || 0 === g && 1e-8 !== x && (x > 0 || e < 0 && x >= 0) && !d._locked) && (l = "onReverseComplete",
                r = d._reversed),
                e < 0)
                    d._active = !1,
                    d._timeline.autoRemoveChildren && d._reversed ? (u = r = !0,
                    l = "onReverseComplete") : x >= 0 && d._first && (u = !0),
                    d._rawPrevTime = e;
                else {
                    if (d._rawPrevTime = g || !t || e || d._rawPrevTime === e ? e : 1e-8,
                    0 === e && r)
                        for (n = d._first; n && 0 === n._startTime; )
                            n._duration || (r = !1),
                            n = n._next;
                    e = 0,
                    d._initted || (u = !0)
                }
            else
                0 === g && x < 0 && (u = !0),
                d._time = d._rawPrevTime = e,
                d._locked || (d._totalTime = e,
                0 !== d._repeat && (c = g + d._repeatDelay,
                d._cycle = d._totalTime / c >> 0,
                d._cycle && d._cycle === d._totalTime / c && v <= e && d._cycle--,
                d._time = d._totalTime - d._cycle * c,
                d._yoyo && 1 & d._cycle && (d._time = g - d._time),
                d._time > g ? (d._time = g,
                e = g + 1e-4) : d._time < 0 ? d._time = e = 0 : e = d._time));
            if (d._hasPause && !d._forcingPlayhead && !t) {
                if ((e = d._time) > m || d._repeat && w !== d._cycle)
                    for (n = d._first; n && n._startTime <= e && !f; )
                        n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === d._rawPrevTime || (f = n),
                        n = n._next;
                else
                    for (n = d._last; n && n._startTime >= e && !f; )
                        n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (f = n),
                        n = n._prev;
                f && (p = d._startTime + (d._reversed ? d._duration - f._startTime : f._startTime) / d._timeScale,
                f._startTime < g && (d._time = d._rawPrevTime = e = f._startTime,
                d._totalTime = e + d._cycle * (d._totalDuration + d._repeatDelay)))
            }
            if (d._cycle !== w && !d._locked) {
                var S = d._yoyo && 0 != (1 & w)
                  , P = S === (d._yoyo && 0 != (1 & d._cycle))
                  , C = d._totalTime
                  , k = d._cycle
                  , R = d._rawPrevTime
                  , O = d._time;
                if (d._totalTime = w * g,
                d._cycle < w ? S = !S : d._totalTime += g,
                d._time = m,
                d._rawPrevTime = 0 === g ? x - 1e-4 : x,
                d._cycle = w,
                d._locked = !0,
                m = S ? 0 : g,
                d.render(m, t, 0 === g),
                t || d._gc || d.vars.onRepeat && (d._cycle = k,
                d._locked = !1,
                d._callback("onRepeat")),
                m !== d._time)
                    return;
                if (P && (d._cycle = w,
                d._locked = !0,
                m = S ? g + 1e-4 : -1e-4,
                d.render(m, !0, !1)),
                d._locked = !1,
                d._paused && !b)
                    return;
                d._time = O,
                d._totalTime = C,
                d._cycle = k,
                d._rawPrevTime = R
            }
            if (d._time !== m && d._first || i || u || f) {
                if (d._initted || (d._initted = !0),
                d._active || !d._paused && d._totalTime !== v && e > 0 && (d._active = !0),
                0 === v && d.vars.onStart && (0 === d._totalTime && d._totalDuration || t || d._callback("onStart")),
                (h = d._time) >= m)
                    for (n = d._first; n && (s = n._next,
                    h === d._time && (!d._paused || b)); )
                        (n._active || n._startTime <= d._time && !n._paused && !n._gc) && (f === n && (d.pause(),
                        d._pauseTime = p),
                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)),
                        n = s;
                else
                    for (n = d._last; n && (s = n._prev,
                    h === d._time && (!d._paused || b)); ) {
                        if (n._active || n._startTime <= m && !n._paused && !n._gc) {
                            if (f === n) {
                                for (f = n._prev; f && f.endTime() > d._time; )
                                    f.render(f._reversed ? f.totalDuration() - (e - f._startTime) * f._timeScale : (e - f._startTime) * f._timeScale, t, i),
                                    f = f._prev;
                                f = null,
                                d.pause(),
                                d._pauseTime = p
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)
                        }
                        n = s
                    }
                d._onUpdate && (t || (o.length && a(),
                d._callback("onUpdate"))),
                l && (d._locked || d._gc || y !== d._startTime && T === d._timeScale || (0 === d._time || _ >= d.totalDuration()) && (r && (o.length && a(),
                d._timeline.autoRemoveChildren && d._enabled(!1, !1),
                d._active = !1),
                !t && d.vars[l] && d._callback(l)))
            } else
                v !== d._totalTime && d._onUpdate && (t || d._callback("onUpdate"))
        }
        ,
        u.getActive = function(e, t, i) {
            var n, r, o = [], a = this.getChildren(e || null == e, t || null == e, !!i), s = 0, l = a.length;
            for (n = 0; n < l; n++)
                (r = a[n]).isActive() && (o[s++] = r);
            return o
        }
        ,
        u.getLabelAfter = function(e) {
            e || 0 !== e && (e = this._time);
            var t, i = this.getLabelsArray(), n = i.length;
            for (t = 0; t < n; t++)
                if (i[t].time > e)
                    return i[t].name;
            return null
        }
        ,
        u.getLabelBefore = function(e) {
            null == e && (e = this._time);
            for (var t = this.getLabelsArray(), i = t.length; --i > -1; )
                if (t[i].time < e)
                    return t[i].name;
            return null
        }
        ,
        u.getLabelsArray = function() {
            var e, t = [], i = 0;
            for (e in this._labels)
                t[i++] = {
                    time: this._labels[e],
                    name: e
                };
            return t.sort(function(e, t) {
                return e.time - t.time
            }),
            t
        }
        ,
        u.invalidate = function() {
            return this._locked = !1,
            e.prototype.invalidate.call(this)
        }
        ,
        u.progress = function(e, t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration() || 0
        }
        ,
        u.totalProgress = function(e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration() || 0
        }
        ,
        u.totalDuration = function(t) {
            return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this),
            this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
            this._totalDuration)
        }
        ,
        u.time = function(e, t) {
            if (!arguments.length)
                return this._time;
            this._dirty && this.totalDuration();
            var i = this._duration
              , n = this._cycle
              , r = n * (i + this._repeatDelay);
            return e > i && (e = i),
            this.totalTime(this._yoyo && 1 & n ? i - e + r : this._repeat ? e + r : e, t)
        }
        ,
        u.repeat = function(e) {
            return arguments.length ? (this._repeat = e,
            this._uncache(!0)) : this._repeat
        }
        ,
        u.repeatDelay = function(e) {
            return arguments.length ? (this._repeatDelay = e,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        u.yoyo = function(e) {
            return arguments.length ? (this._yoyo = e,
            this) : this._yoyo
        }
        ,
        u.currentLabel = function(e) {
            return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
        }
        ,
        n
    }, !0),
    function() {
        var e = 180 / Math.PI
          , t = []
          , i = []
          , n = []
          , r = {}
          , o = _gsScope._gsDefine.globals
          , a = function(e, t, i, n) {
            i === n && (i = n - (n - t) / 1e6),
            e === t && (t = e + (i - e) / 1e6),
            this.a = e,
            this.b = t,
            this.c = i,
            this.d = n,
            this.da = n - e,
            this.ca = i - e,
            this.ba = t - e
        }
          , s = function(e, t, i, n) {
            var r = {
                a: e
            }
              , o = {}
              , a = {}
              , s = {
                c: n
            }
              , l = (e + t) / 2
              , u = (t + i) / 2
              , c = (i + n) / 2
              , f = (l + u) / 2
              , h = (u + c) / 2
              , p = (h - f) / 8;
            return r.b = l + (e - l) / 4,
            o.b = f + p,
            r.c = o.a = (r.b + o.b) / 2,
            o.c = a.a = (f + h) / 2,
            a.b = h - p,
            s.b = c + (n - c) / 4,
            a.c = s.a = (a.b + s.b) / 2,
            [r, o, a, s]
        }
          , l = function(e, r, o, a, l) {
            var u, c, f, h, p, d, m, _, g, v, y, T, x, b = e.length - 1, w = 0, S = e[0].a;
            for (u = 0; u < b; u++)
                c = (p = e[w]).a,
                f = p.d,
                h = e[w + 1].d,
                l ? (y = t[u],
                x = ((T = i[u]) + y) * r * .25 / (a ? .5 : n[u] || .5),
                _ = f - ((d = f - (f - c) * (a ? .5 * r : 0 !== y ? x / y : 0)) + (((m = f + (h - f) * (a ? .5 * r : 0 !== T ? x / T : 0)) - d) * (3 * y / (y + T) + .5) / 4 || 0))) : _ = f - ((d = f - (f - c) * r * .5) + (m = f + (h - f) * r * .5)) / 2,
                d += _,
                m += _,
                p.c = g = d,
                p.b = 0 !== u ? S : S = p.a + .6 * (p.c - p.a),
                p.da = f - c,
                p.ca = g - c,
                p.ba = S - c,
                o ? (v = s(c, S, g, f),
                e.splice(w, 1, v[0], v[1], v[2], v[3]),
                w += 4) : w++,
                S = m;
            (p = e[w]).b = S,
            p.c = S + .4 * (p.d - S),
            p.da = p.d - p.a,
            p.ca = p.c - p.a,
            p.ba = S - p.a,
            o && (v = s(p.a, S, p.c, p.d),
            e.splice(w, 1, v[0], v[1], v[2], v[3]))
        }
          , u = function(e, n, r, o) {
            var s, l, u, c, f, h, p = [];
            if (o)
                for (l = (e = [o].concat(e)).length; --l > -1; )
                    "string" == typeof (h = e[l][n]) && "=" === h.charAt(1) && (e[l][n] = o[n] + Number(h.charAt(0) + h.substr(2)));
            if ((s = e.length - 2) < 0)
                return p[0] = new a(e[0][n],0,0,e[0][n]),
                p;
            for (l = 0; l < s; l++)
                u = e[l][n],
                c = e[l + 1][n],
                p[l] = new a(u,0,0,c),
                r && (f = e[l + 2][n],
                t[l] = (t[l] || 0) + (c - u) * (c - u),
                i[l] = (i[l] || 0) + (f - c) * (f - c));
            return p[l] = new a(e[l][n],0,0,e[l + 1][n]),
            p
        }
          , c = function(e, o, a, s, c, f) {
            var h, p, d, m, _, g, v, y, T = {}, x = [], b = f || e[0];
            c = "string" == typeof c ? "," + c + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            null == o && (o = 1);
            for (p in e[0])
                x.push(p);
            if (e.length > 1) {
                for (y = e[e.length - 1],
                v = !0,
                h = x.length; --h > -1; )
                    if (p = x[h],
                    Math.abs(b[p] - y[p]) > .05) {
                        v = !1;
                        break
                    }
                v && (e = e.concat(),
                f && e.unshift(f),
                e.push(e[1]),
                f = e[e.length - 3])
            }
            for (t.length = i.length = n.length = 0,
            h = x.length; --h > -1; )
                p = x[h],
                r[p] = -1 !== c.indexOf("," + p + ","),
                T[p] = u(e, p, r[p], f);
            for (h = t.length; --h > -1; )
                t[h] = Math.sqrt(t[h]),
                i[h] = Math.sqrt(i[h]);
            if (!s) {
                for (h = x.length; --h > -1; )
                    if (r[p])
                        for (g = (d = T[x[h]]).length - 1,
                        m = 0; m < g; m++)
                            _ = d[m + 1].da / i[m] + d[m].da / t[m] || 0,
                            n[m] = (n[m] || 0) + _ * _;
                for (h = n.length; --h > -1; )
                    n[h] = Math.sqrt(n[h])
            }
            for (h = x.length,
            m = a ? 4 : 1; --h > -1; )
                d = T[p = x[h]],
                l(d, o, a, s, r[p]),
                v && (d.splice(0, m),
                d.splice(d.length - m, m));
            return T
        }
          , f = function(e, t, i) {
            var n, r, o, s, l, u, c, f, h, p, d, m = {}, _ = "cubic" === (t = t || "soft") ? 3 : 2, g = "soft" === t, v = [];
            if (g && i && (e = [i].concat(e)),
            null == e || e.length < _ + 1)
                throw "invalid Bezier data";
            for (h in e[0])
                v.push(h);
            for (u = v.length; --u > -1; ) {
                for (m[h = v[u]] = l = [],
                p = 0,
                f = e.length,
                c = 0; c < f; c++)
                    n = null == i ? e[c][h] : "string" == typeof (d = e[c][h]) && "=" === d.charAt(1) ? i[h] + Number(d.charAt(0) + d.substr(2)) : Number(d),
                    g && c > 1 && c < f - 1 && (l[p++] = (n + l[p - 2]) / 2),
                    l[p++] = n;
                for (f = p - _ + 1,
                p = 0,
                c = 0; c < f; c += _)
                    n = l[c],
                    r = l[c + 1],
                    o = l[c + 2],
                    s = 2 === _ ? 0 : l[c + 3],
                    l[p++] = d = 3 === _ ? new a(n,r,o,s) : new a(n,(2 * r + n) / 3,(2 * r + o) / 3,o);
                l.length = p
            }
            return m
        }
          , h = function(e, t, i) {
            for (var n, r, o, a, s, l, u, c, f, h, p, d = 1 / i, m = e.length; --m > -1; )
                for (o = (h = e[m]).a,
                a = h.d - o,
                s = h.c - o,
                l = h.b - o,
                n = r = 0,
                c = 1; c <= i; c++)
                    n = r - (r = ((u = d * c) * u * a + 3 * (f = 1 - u) * (u * s + f * l)) * u),
                    t[p = m * i + c - 1] = (t[p] || 0) + n * n
        }
          , p = function(e, t) {
            var i, n, r, o, a = [], s = [], l = 0, u = 0, c = (t = t >> 0 || 6) - 1, f = [], p = [];
            for (i in e)
                h(e[i], a, t);
            for (r = a.length,
            n = 0; n < r; n++)
                l += Math.sqrt(a[n]),
                p[o = n % t] = l,
                o === c && (u += l,
                f[o = n / t >> 0] = p,
                s[o] = u,
                l = 0,
                p = []);
            return {
                length: u,
                lengths: s,
                segments: f
            }
        }
          , d = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.9",
            API: 2,
            global: !0,
            init: function(e, t, i) {
                this._target = e,
                t instanceof Array && (t = {
                    values: t
                }),
                this._func = {},
                this._mod = {},
                this._props = [],
                this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                var n, r, o, a, s, l = t.values || [], u = {}, h = l[0], d = t.autoRotate || i.vars.orientToBezier;
                this._autoRotate = d ? d instanceof Array ? d : [["x", "y", "rotation", !0 === d ? 0 : Number(d) || 0]] : null;
                for (n in h)
                    this._props.push(n);
                for (o = this._props.length; --o > -1; )
                    n = this._props[o],
                    this._overwriteProps.push(n),
                    r = this._func[n] = "function" == typeof e[n],
                    u[n] = r ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]),
                    s || u[n] !== l[0][n] && (s = u);
                if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? c(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, s) : f(l, t.type, u),
                this._segCount = this._beziers[n].length,
                this._timeRes) {
                    var m = p(this._beziers, this._timeRes);
                    this._length = m.length,
                    this._lengths = m.lengths,
                    this._segments = m.segments,
                    this._l1 = this._li = this._s1 = this._si = 0,
                    this._l2 = this._lengths[0],
                    this._curSeg = this._segments[0],
                    this._s2 = this._curSeg[0],
                    this._prec = 1 / this._curSeg.length
                }
                if (d = this._autoRotate)
                    for (this._initialRotations = [],
                    d[0]instanceof Array || (this._autoRotate = d = [d]),
                    o = d.length; --o > -1; ) {
                        for (a = 0; a < 3; a++)
                            n = d[o][a],
                            this._func[n] = "function" == typeof e[n] && e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                        n = d[o][2],
                        this._initialRotations[o] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0,
                        this._overwriteProps.push(n)
                    }
                return this._startRatio = i.vars.runBackwards ? 1 : 0,
                !0
            },
            set: function(t) {
                var i, n, r, o, a, s, l, u, c, f, h, p = this._segCount, d = this._func, m = this._target, _ = t !== this._startRatio;
                if (this._timeRes) {
                    if (c = this._lengths,
                    f = this._curSeg,
                    h = t * this._length,
                    r = this._li,
                    h > this._l2 && r < p - 1) {
                        for (u = p - 1; r < u && (this._l2 = c[++r]) <= h; )
                            ;
                        this._l1 = c[r - 1],
                        this._li = r,
                        this._curSeg = f = this._segments[r],
                        this._s2 = f[this._s1 = this._si = 0]
                    } else if (h < this._l1 && r > 0) {
                        for (; r > 0 && (this._l1 = c[--r]) >= h; )
                            ;
                        0 === r && h < this._l1 ? this._l1 = 0 : r++,
                        this._l2 = c[r],
                        this._li = r,
                        this._curSeg = f = this._segments[r],
                        this._s1 = f[(this._si = f.length - 1) - 1] || 0,
                        this._s2 = f[this._si]
                    }
                    if (i = r,
                    h -= this._l1,
                    r = this._si,
                    h > this._s2 && r < f.length - 1) {
                        for (u = f.length - 1; r < u && (this._s2 = f[++r]) <= h; )
                            ;
                        this._s1 = f[r - 1],
                        this._si = r
                    } else if (h < this._s1 && r > 0) {
                        for (; r > 0 && (this._s1 = f[--r]) >= h; )
                            ;
                        0 === r && h < this._s1 ? this._s1 = 0 : r++,
                        this._s2 = f[r],
                        this._si = r
                    }
                    s = 1 === t ? 1 : (r + (h - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else
                    s = (t - (i = t < 0 ? 0 : t >= 1 ? p - 1 : p * t >> 0) * (1 / p)) * p;
                for (n = 1 - s,
                r = this._props.length; --r > -1; )
                    o = this._props[r],
                    l = (s * s * (a = this._beziers[o][i]).da + 3 * n * (s * a.ca + n * a.ba)) * s + a.a,
                    this._mod[o] && (l = this._mod[o](l, m)),
                    d[o] ? m[o](l) : m[o] = l;
                if (this._autoRotate) {
                    var g, v, y, T, x, b, w, S = this._autoRotate;
                    for (r = S.length; --r > -1; )
                        o = S[r][2],
                        b = S[r][3] || 0,
                        w = !0 === S[r][4] ? 1 : e,
                        a = this._beziers[S[r][0]],
                        g = this._beziers[S[r][1]],
                        a && g && (a = a[i],
                        g = g[i],
                        v = a.a + (a.b - a.a) * s,
                        v += ((T = a.b + (a.c - a.b) * s) - v) * s,
                        T += (a.c + (a.d - a.c) * s - T) * s,
                        y = g.a + (g.b - g.a) * s,
                        y += ((x = g.b + (g.c - g.b) * s) - y) * s,
                        x += (g.c + (g.d - g.c) * s - x) * s,
                        l = _ ? Math.atan2(x - y, T - v) * w + b : this._initialRotations[r],
                        this._mod[o] && (l = this._mod[o](l, m)),
                        d[o] ? m[o](l) : m[o] = l)
                }
            }
        })
          , m = d.prototype;
        d.bezierThrough = c,
        d.cubicToQuadratic = s,
        d._autoCSS = !0,
        d.quadraticToCubic = function(e, t, i) {
            return new a(e,(2 * t + e) / 3,(2 * t + i) / 3,i)
        }
        ,
        d._cssRegister = function() {
            var e = o.CSSPlugin;
            if (e) {
                var t = e._internals
                  , i = t._parseToProxy
                  , n = t._setPluginRatio
                  , r = t.CSSPropTween;
                t._registerComplexSpecialProp("bezier", {
                    parser: function(e, t, o, a, s, l) {
                        t instanceof Array && (t = {
                            values: t
                        }),
                        l = new d;
                        var u, c, f, h = t.values, p = h.length - 1, m = [], _ = {};
                        if (p < 0)
                            return s;
                        for (u = 0; u <= p; u++)
                            f = i(e, h[u], a, s, l, p !== u),
                            m[u] = f.end;
                        for (c in t)
                            _[c] = t[c];
                        return _.values = m,
                        s = new r(e,"bezier",0,0,f.pt,2),
                        s.data = f,
                        s.plugin = l,
                        s.setRatio = n,
                        0 === _.autoRotate && (_.autoRotate = !0),
                        !_.autoRotate || _.autoRotate instanceof Array || (u = !0 === _.autoRotate ? 0 : Number(_.autoRotate),
                        _.autoRotate = null != f.end.left ? [["left", "top", "rotation", u, !1]] : null != f.end.x && [["x", "y", "rotation", u, !1]]),
                        _.autoRotate && (a._transform || a._enableTransforms(!1),
                        f.autoRotate = a._target._gsTransform,
                        f.proxy.rotation = f.autoRotate.rotation || 0,
                        a._overwriteProps.push("rotation")),
                        l._onInitTween(f.proxy, _, a._tween),
                        s
                    }
                })
            }
        }
        ,
        m._mod = function(e) {
            for (var t, i = this._overwriteProps, n = i.length; --n > -1; )
                (t = e[i[n]]) && "function" == typeof t && (this._mod[i[n]] = t)
        }
        ,
        m._kill = function(e) {
            var t, i, n = this._props;
            for (t in this._beziers)
                if (t in e)
                    for (delete this._beziers[t],
                    delete this._func[t],
                    i = n.length; --i > -1; )
                        n[i] === t && n.splice(i, 1);
            if (n = this._autoRotate)
                for (i = n.length; --i > -1; )
                    e[n[i][2]] && n.splice(i, 1);
            return this._super._kill.call(this, e)
        }
    }(),
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(e, t) {
        var i, n, r, o, a = function() {
            e.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = a.prototype.setRatio
        }, s = _gsScope._gsDefine.globals, l = {}, u = a.prototype = new e("css");
        u.constructor = a,
        a.version = "2.1.3",
        a.API = 2,
        a.defaultTransformPerspective = 0,
        a.defaultSkewType = "compensated",
        a.defaultSmoothOrigin = !0,
        u = "px",
        a.suffixMap = {
            top: u,
            right: u,
            bottom: u,
            left: u,
            width: u,
            height: u,
            fontSize: u,
            padding: u,
            margin: u,
            perspective: u,
            lineHeight: ""
        };
        var c, f, h, p, d, m, _, g, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g, y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, T = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi, b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, w = /(?:\d|\-|\+|=|#|\.)*/g, S = /opacity *= *([^)]*)/i, P = /opacity:([^;]*)/i, C = /alpha\(opacity *=.+?\)/i, k = /^(rgb|hsl)/, R = /([A-Z])/g, O = /-([a-z])/gi, A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, D = function(e, t) {
            return t.toUpperCase()
        }, E = /(?:Left|Right|Width)/i, M = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, N = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, L = /,(?=[^\)]*(?:\(|$))/gi, F = /[\s,\(]/i, j = Math.PI / 180, I = 180 / Math.PI, z = {}, q = {
            style: {}
        }, B = _gsScope.document || {
            createElement: function() {
                return q
            }
        }, H = function(e, t) {
            var i = B.createElementNS ? B.createElementNS(t || "http://www.w3.org/1999/xhtml", e) : B.createElement(e);
            return i.style ? i : B.createElement(e)
        }, X = H("div"), U = H("img"), W = a._internals = {
            _specialProps: l
        }, $ = (_gsScope.navigator || {}).userAgent || "", Y = function() {
            var e = $.indexOf("Android")
              , t = H("a");
            return h = -1 !== $.indexOf("Safari") && -1 === $.indexOf("Chrome") && (-1 === e || parseFloat($.substr(e + 8, 2)) > 3),
            d = h && parseFloat($.substr($.indexOf("Version/") + 8, 2)) < 6,
            p = -1 !== $.indexOf("Firefox"),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec($) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec($)) && (m = parseFloat(RegExp.$1)),
            !!t && (t.style.cssText = "top:1px;opacity:.55;",
            /^0.55/.test(t.style.opacity))
        }(), G = function(e) {
            return S.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, V = function(e) {
            _gsScope.console && console.log(e)
        }, Q = "", Z = "", J = function(e, t) {
            var i, n, r = (t = t || X).style;
            if (void 0 !== r[e])
                return e;
            for (e = e.charAt(0).toUpperCase() + e.substr(1),
            i = ["O", "Moz", "ms", "Ms", "Webkit"],
            n = 5; --n > -1 && void 0 === r[i[n] + e]; )
                ;
            return n >= 0 ? (Z = 3 === n ? "ms" : i[n],
            Q = "-" + Z.toLowerCase() + "-",
            Z + e) : null
        }, K = "undefined" != typeof window ? window : B.defaultView || {
            getComputedStyle: function() {}
        }, ee = function(e) {
            return K.getComputedStyle(e)
        }, te = a.getStyle = function(e, t, i, n, r) {
            var o;
            return Y || "opacity" !== t ? (!n && e.style[t] ? o = e.style[t] : (i = i || ee(e)) ? o = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(R, "-$1").toLowerCase()) : e.currentStyle && (o = e.currentStyle[t]),
            null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : G(e)
        }
        , ie = W.convertToPixels = function(e, i, n, r, o) {
            if ("px" === r || !r && "lineHeight" !== i)
                return n;
            if ("auto" === r || !n)
                return 0;
            var s, l, u, c = E.test(i), f = e, h = X.style, p = n < 0, d = 1 === n;
            if (p && (n = -n),
            d && (n *= 100),
            "lineHeight" !== i || r)
                if ("%" === r && -1 !== i.indexOf("border"))
                    s = n / 100 * (c ? e.clientWidth : e.clientHeight);
                else {
                    if (h.cssText = "border:0 solid red;position:" + te(e, "position") + ";line-height:0;",
                    "%" !== r && f.appendChild && "v" !== r.charAt(0) && "rem" !== r)
                        h[c ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                    else {
                        if (f = e.parentNode || B.body,
                        -1 !== te(f, "display").indexOf("flex") && (h.position = "absolute"),
                        l = f._gsCache,
                        u = t.ticker.frame,
                        l && c && l.time === u)
                            return l.width * n / 100;
                        h[c ? "width" : "height"] = n + r
                    }
                    f.appendChild(X),
                    s = parseFloat(X[c ? "offsetWidth" : "offsetHeight"]),
                    f.removeChild(X),
                    c && "%" === r && !1 !== a.cacheWidths && ((l = f._gsCache = f._gsCache || {}).time = u,
                    l.width = s / n * 100),
                    0 !== s || o || (s = ie(e, i, n, r, !0))
                }
            else
                l = ee(e).lineHeight,
                e.style.lineHeight = n,
                s = parseFloat(ee(e).lineHeight),
                e.style.lineHeight = l;
            return d && (s /= 100),
            p ? -s : s
        }
        , ne = W.calculateOffset = function(e, t, i) {
            if ("absolute" !== te(e, "position", i))
                return 0;
            var n = "left" === t ? "Left" : "Top"
              , r = te(e, "margin" + n, i);
            return e["offset" + n] - (ie(e, t, parseFloat(r), r.replace(w, "")) || 0)
        }
        , re = function(e, t) {
            var i, n, r, o = {};
            if (t = t || ee(e))
                if (i = t.length)
                    for (; --i > -1; )
                        -1 !== (r = t[i]).indexOf("-transform") && De !== r || (o[r.replace(O, D)] = t.getPropertyValue(r));
                else
                    for (i in t)
                        -1 !== i.indexOf("Transform") && Ae !== i || (o[i] = t[i]);
            else if (t = e.currentStyle || e.style)
                for (i in t)
                    "string" == typeof i && void 0 === o[i] && (o[i.replace(O, D)] = t[i]);
            return Y || (o.opacity = G(e)),
            n = We(e, t, !1),
            o.rotation = n.rotation,
            o.skewX = n.skewX,
            o.scaleX = n.scaleX,
            o.scaleY = n.scaleY,
            o.x = n.x,
            o.y = n.y,
            Me && (o.z = n.z,
            o.rotationX = n.rotationX,
            o.rotationY = n.rotationY,
            o.scaleZ = n.scaleZ),
            o.filters && delete o.filters,
            o
        }, oe = function(e, t, i, n, r) {
            var o, a, s, l = {}, u = e.style;
            for (a in i)
                "cssText" !== a && "length" !== a && isNaN(a) && (t[a] !== (o = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" != typeof o && "string" != typeof o || (l[a] = "auto" !== o || "left" !== a && "top" !== a ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof t[a] || "" === t[a].replace(b, "") ? o : 0 : ne(e, a),
                void 0 !== u[a] && (s = new Te(u,a,u[a],s))));
            if (n)
                for (a in n)
                    "className" !== a && (l[a] = n[a]);
            return {
                difs: l,
                firstMPT: s
            }
        }, ae = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, se = ["marginLeft", "marginRight", "marginTop", "marginBottom"], le = function(e, t, i) {
            if ("svg" === (e.nodeName + "").toLowerCase())
                return (i || ee(e))[t] || 0;
            if (e.getCTM && He(e))
                return e.getBBox()[t] || 0;
            var n = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight)
              , r = ae[t]
              , o = r.length;
            for (i = i || ee(e); --o > -1; )
                n -= parseFloat(te(e, "padding" + r[o], i, !0)) || 0,
                n -= parseFloat(te(e, "border" + r[o] + "Width", i, !0)) || 0;
            return n
        }, ue = function(e, t) {
            if ("contain" === e || "auto" === e || "auto auto" === e)
                return e + " ";
            null != e && "" !== e || (e = "0 0");
            var i, n = e.split(" "), r = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : n[0], o = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : n[1];
            if (n.length > 3 && !t) {
                for (n = e.split(", ").join(",").split(","),
                e = [],
                i = 0; i < n.length; i++)
                    e.push(ue(n[i]));
                return e.join(",")
            }
            return null == o ? o = "center" === r ? "50%" : "0" : "center" === o && (o = "50%"),
            ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"),
            e = r + " " + o + (n.length > 2 ? " " + n[2] : ""),
            t && (t.oxp = -1 !== r.indexOf("%"),
            t.oyp = -1 !== o.indexOf("%"),
            t.oxr = "=" === r.charAt(1),
            t.oyr = "=" === o.charAt(1),
            t.ox = parseFloat(r.replace(b, "")),
            t.oy = parseFloat(o.replace(b, "")),
            t.v = e),
            t || e
        }, ce = function(e, t) {
            return "function" == typeof e && (e = e(g, _)),
            "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
        }, fe = function(e, t) {
            "function" == typeof e && (e = e(g, _));
            var i = "string" == typeof e && "=" === e.charAt(1);
            return "string" == typeof e && "v" === e.charAt(e.length - 2) && (e = (i ? e.substr(0, 2) : 0) + window["inner" + ("vh" === e.substr(-2) ? "Height" : "Width")] * (parseFloat(i ? e.substr(2) : e) / 100)),
            null == e ? t : i ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
        }, he = function(e, t, i, n) {
            var r, o, a, s, l;
            return "function" == typeof e && (e = e(g, _)),
            null == e ? s = t : "number" == typeof e ? s = e : (r = 360,
            o = e.split("_"),
            a = ((l = "=" === e.charAt(1)) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === e.indexOf("rad") ? 1 : I) - (l ? 0 : t),
            o.length && (n && (n[i] = t + a),
            -1 !== e.indexOf("short") && (a %= r) !== a % (r / 2) && (a = a < 0 ? a + r : a - r),
            -1 !== e.indexOf("_cw") && a < 0 ? a = (a + 9999999999 * r) % r - (a / r | 0) * r : -1 !== e.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (a / r | 0) * r)),
            s = t + a),
            s < 1e-6 && s > -1e-6 && (s = 0),
            s
        }, pe = {
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
        }, de = function(e, t, i) {
            return e = e < 0 ? e + 1 : e > 1 ? e - 1 : e,
            255 * (6 * e < 1 ? t + (i - t) * e * 6 : e < .5 ? i : 3 * e < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) + .5 | 0
        }, me = a.parseColor = function(e, t) {
            var i, n, r, o, a, s, l, u, c, f, h;
            if (e)
                if ("number" == typeof e)
                    i = [e >> 16, e >> 8 & 255, 255 & e];
                else {
                    if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)),
                    pe[e])
                        i = pe[e];
                    else if ("#" === e.charAt(0))
                        4 === e.length && (e = "#" + (n = e.charAt(1)) + n + (r = e.charAt(2)) + r + (o = e.charAt(3)) + o),
                        i = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e];
                    else if ("hsl" === e.substr(0, 3))
                        if (i = h = e.match(v),
                        t) {
                            if (-1 !== e.indexOf("="))
                                return e.match(y)
                        } else
                            a = Number(i[0]) % 360 / 360,
                            s = Number(i[1]) / 100,
                            n = 2 * (l = Number(i[2]) / 100) - (r = l <= .5 ? l * (s + 1) : l + s - l * s),
                            i.length > 3 && (i[3] = Number(i[3])),
                            i[0] = de(a + 1 / 3, n, r),
                            i[1] = de(a, n, r),
                            i[2] = de(a - 1 / 3, n, r);
                    else
                        i = e.match(v) || pe.transparent;
                    i[0] = Number(i[0]),
                    i[1] = Number(i[1]),
                    i[2] = Number(i[2]),
                    i.length > 3 && (i[3] = Number(i[3]))
                }
            else
                i = pe.black;
            return t && !h && (n = i[0] / 255,
            r = i[1] / 255,
            o = i[2] / 255,
            l = ((u = Math.max(n, r, o)) + (c = Math.min(n, r, o))) / 2,
            u === c ? a = s = 0 : (f = u - c,
            s = l > .5 ? f / (2 - u - c) : f / (u + c),
            a = u === n ? (r - o) / f + (r < o ? 6 : 0) : u === r ? (o - n) / f + 2 : (n - r) / f + 4,
            a *= 60),
            i[0] = a + .5 | 0,
            i[1] = 100 * s + .5 | 0,
            i[2] = 100 * l + .5 | 0),
            i
        }
        , _e = function(e, t) {
            var i, n, r, o = e.match(ge) || [], a = 0, s = "";
            if (!o.length)
                return e;
            for (i = 0; i < o.length; i++)
                n = o[i],
                a += (r = e.substr(a, e.indexOf(n, a) - a)).length + n.length,
                3 === (n = me(n, t)).length && n.push(1),
                s += r + (t ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
            return s + e.substr(a)
        }, ge = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (u in pe)
            ge += "|" + u + "\\b";
        ge = new RegExp(ge + ")","gi"),
        a.colorStringFilter = function(e) {
            var t, i = e[0] + " " + e[1];
            ge.test(i) && (t = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("),
            e[0] = _e(e[0], t),
            e[1] = _e(e[1], t)),
            ge.lastIndex = 0
        }
        ,
        t.defaultStringFilter || (t.defaultStringFilter = a.colorStringFilter);
        var ve = function(e, t, i, n) {
            if (null == e)
                return function(e) {
                    return e
                }
                ;
            var r, o = t ? (e.match(ge) || [""])[0] : "", a = e.split(o).join("").match(T) || [], s = e.substr(0, e.indexOf(a[0])), l = ")" === e.charAt(e.length - 1) ? ")" : "", u = -1 !== e.indexOf(" ") ? " " : ",", c = a.length, f = c > 0 ? a[0].replace(v, "") : "";
            return c ? r = t ? function(e) {
                var t, h, p, d;
                if ("number" == typeof e)
                    e += f;
                else if (n && L.test(e)) {
                    for (d = e.replace(L, "|").split("|"),
                    p = 0; p < d.length; p++)
                        d[p] = r(d[p]);
                    return d.join(",")
                }
                if (t = (e.match(ge) || [o])[0],
                h = e.split(t).join("").match(T) || [],
                p = h.length,
                c > p--)
                    for (; ++p < c; )
                        h[p] = i ? h[(p - 1) / 2 | 0] : a[p];
                return s + h.join(u) + u + t + l + (-1 !== e.indexOf("inset") ? " inset" : "")
            }
            : function(e) {
                var t, o, h;
                if ("number" == typeof e)
                    e += f;
                else if (n && L.test(e)) {
                    for (o = e.replace(L, "|").split("|"),
                    h = 0; h < o.length; h++)
                        o[h] = r(o[h]);
                    return o.join(",")
                }
                if (t = e.match("," === u ? T : x) || [],
                h = t.length,
                c > h--)
                    for (; ++h < c; )
                        t[h] = i ? t[(h - 1) / 2 | 0] : a[h];
                return (s && "none" !== e ? e.substr(0, e.indexOf(t[0])) || s : s) + t.join(u) + l
            }
            : function(e) {
                return e
            }
        }
          , ye = function(e) {
            return e = e.split(","),
            function(t, i, n, r, o, a, s) {
                var l, u = (i + "").split(" ");
                for (s = {},
                l = 0; l < 4; l++)
                    s[e[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                return r.parse(t, s, o, a)
            }
        }
          , Te = (W._setPluginRatio = function(e) {
            this.plugin.setRatio(e);
            for (var t, i, n, r, o, a = this.data, s = a.proxy, l = a.firstMPT; l; )
                t = s[l.v],
                l.r ? t = l.r(t) : t < 1e-6 && t > -1e-6 && (t = 0),
                l.t[l.p] = t,
                l = l._next;
            if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod.call(this._tween, s.rotation, this.t, this._tween) : s.rotation),
            1 === e || 0 === e)
                for (l = a.firstMPT,
                o = 1 === e ? "e" : "b"; l; ) {
                    if ((i = l.t).type) {
                        if (1 === i.type) {
                            for (r = i.xs0 + i.s + i.xs1,
                            n = 1; n < i.l; n++)
                                r += i["xn" + n] + i["xs" + (n + 1)];
                            i[o] = r
                        }
                    } else
                        i[o] = i.s + i.xs0;
                    l = l._next
                }
        }
        ,
        function(e, t, i, n, r) {
            this.t = e,
            this.p = t,
            this.v = i,
            this.r = r,
            n && (n._prev = this,
            this._next = n)
        }
        )
          , xe = (W._parseToProxy = function(e, t, i, n, r, o) {
            var a, s, l, u, c, f = n, h = {}, p = {}, d = i._transform, m = z;
            for (i._transform = null,
            z = t,
            n = c = i.parse(e, t, n, r),
            z = m,
            o && (i._transform = d,
            f && (f._prev = null,
            f._prev && (f._prev._next = null))); n && n !== f; ) {
                if (n.type <= 1 && (s = n.p,
                p[s] = n.s + n.c,
                h[s] = n.s,
                o || (u = new Te(n,"s",s,u,n.r),
                n.c = 0),
                1 === n.type))
                    for (a = n.l; --a > 0; )
                        l = "xn" + a,
                        p[s = n.p + "_" + l] = n.data[l],
                        h[s] = n[l],
                        o || (u = new Te(n,l,s,u,n.rxp[l]));
                n = n._next
            }
            return {
                proxy: h,
                end: p,
                firstMPT: u,
                pt: c
            }
        }
        ,
        W.CSSPropTween = function(e, t, n, r, a, s, l, u, c, f, h) {
            this.t = e,
            this.p = t,
            this.s = n,
            this.c = r,
            this.n = l || t,
            e instanceof xe || o.push(this.n),
            this.r = u ? "function" == typeof u ? u : Math.round : u,
            this.type = s || 0,
            c && (this.pr = c,
            i = !0),
            this.b = void 0 === f ? n : f,
            this.e = void 0 === h ? n + r : h,
            a && (this._next = a,
            a._prev = this)
        }
        )
          , be = function(e, t, i, n, r, o) {
            var a = new xe(e,t,i,n - i,r,-1,o);
            return a.b = i,
            a.e = a.xs0 = n,
            a
        }
          , we = a.parseComplex = function(e, t, i, n, r, o, s, l, u, f) {
            i = i || o || "",
            "function" == typeof n && (n = n(g, _)),
            s = new xe(e,t,0,0,s,f ? 2 : 1,null,!1,l,i,n),
            n += "",
            r && ge.test(n + i) && (n = [i, n],
            a.colorStringFilter(n),
            i = n[0],
            n = n[1]);
            var h, p, d, m, T, x, b, w, S, P, C, k, R, O = i.split(", ").join(",").split(" "), A = n.split(", ").join(",").split(" "), D = O.length, E = !1 !== c;
            for (-1 === n.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl") ? (O = O.join(" ").replace(L, ", ").split(" "),
            A = A.join(" ").replace(L, ", ").split(" ")) : (O = O.join(" ").split(",").join(", ").split(" "),
            A = A.join(" ").split(",").join(", ").split(" ")),
            D = O.length),
            D !== A.length && (D = (O = (o || "").split(" ")).length),
            s.plugin = u,
            s.setRatio = f,
            ge.lastIndex = 0,
            h = 0; h < D; h++)
                if (m = O[h],
                T = A[h] + "",
                (w = parseFloat(m)) || 0 === w)
                    s.appendXtra("", w, ce(T, w), T.replace(y, ""), !(!E || -1 === T.indexOf("px")) && Math.round, !0);
                else if (r && ge.test(m))
                    k = ")" + ((k = T.indexOf(")") + 1) ? T.substr(k) : ""),
                    R = -1 !== T.indexOf("hsl") && Y,
                    P = T,
                    m = me(m, R),
                    T = me(T, R),
                    (S = m.length + T.length > 6) && !Y && 0 === T[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent",
                    s.e = s.e.split(A[h]).join("transparent")) : (Y || (S = !1),
                    R ? s.appendXtra(P.substr(0, P.indexOf("hsl")) + (S ? "hsla(" : "hsl("), m[0], ce(T[0], m[0]), ",", !1, !0).appendXtra("", m[1], ce(T[1], m[1]), "%,", !1).appendXtra("", m[2], ce(T[2], m[2]), S ? "%," : "%" + k, !1) : s.appendXtra(P.substr(0, P.indexOf("rgb")) + (S ? "rgba(" : "rgb("), m[0], T[0] - m[0], ",", Math.round, !0).appendXtra("", m[1], T[1] - m[1], ",", Math.round).appendXtra("", m[2], T[2] - m[2], S ? "," : k, Math.round),
                    S && (m = m.length < 4 ? 1 : m[3],
                    s.appendXtra("", m, (T.length < 4 ? 1 : T[3]) - m, k, !1))),
                    ge.lastIndex = 0;
                else if (x = m.match(v)) {
                    if (!(b = T.match(y)) || b.length !== x.length)
                        return s;
                    for (d = 0,
                    p = 0; p < x.length; p++)
                        C = x[p],
                        P = m.indexOf(C, d),
                        s.appendXtra(m.substr(d, P - d), Number(C), ce(b[p], C), "", !(!E || "px" !== m.substr(P + C.length, 2)) && Math.round, 0 === p),
                        d = P + C.length;
                    s["xs" + s.l] += m.substr(d)
                } else
                    s["xs" + s.l] += s.l || s["xs" + s.l] ? " " + T : T;
            if (-1 !== n.indexOf("=") && s.data) {
                for (k = s.xs0 + s.data.s,
                h = 1; h < s.l; h++)
                    k += s["xs" + h] + s.data["xn" + h];
                s.e = k + s["xs" + h]
            }
            return s.l || (s.type = -1,
            s.xs0 = s.e),
            s.xfirst || s
        }
          , Se = 9;
        for ((u = xe.prototype).l = u.pr = 0; --Se > 0; )
            u["xn" + Se] = 0,
            u["xs" + Se] = "";
        u.xs0 = "",
        u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null,
        u.appendXtra = function(e, t, i, n, r, o) {
            var a = this
              , s = a.l;
            return a["xs" + s] += o && (s || a["xs" + s]) ? " " + e : e || "",
            i || 0 === s || a.plugin ? (a.l++,
            a.type = a.setRatio ? 2 : 1,
            a["xs" + a.l] = n || "",
            s > 0 ? (a.data["xn" + s] = t + i,
            a.rxp["xn" + s] = r,
            a["xn" + s] = t,
            a.plugin || (a.xfirst = new xe(a,"xn" + s,t,i,a.xfirst || a,0,a.n,r,a.pr),
            a.xfirst.xs0 = 0),
            a) : (a.data = {
                s: t + i
            },
            a.rxp = {},
            a.s = t,
            a.c = i,
            a.r = r,
            a)) : (a["xs" + s] += t + (n || ""),
            a)
        }
        ;
        var Pe = function(e, t) {
            t = t || {},
            this.p = t.prefix ? J(e) || e : e,
            l[e] = l[this.p] = this,
            this.format = t.formatter || ve(t.defaultValue, t.color, t.collapsible, t.multi),
            t.parser && (this.parse = t.parser),
            this.clrs = t.color,
            this.multi = t.multi,
            this.keyword = t.keyword,
            this.dflt = t.defaultValue,
            this.allowFunc = t.allowFunc,
            this.pr = t.priority || 0
        }
          , Ce = W._registerComplexSpecialProp = function(e, t, i) {
            "object" != typeof t && (t = {
                parser: i
            });
            var n, r = e.split(","), o = t.defaultValue;
            for (i = i || [o],
            n = 0; n < r.length; n++)
                t.prefix = 0 === n && t.prefix,
                t.defaultValue = i[n] || o,
                new Pe(r[n],t)
        }
          , ke = W._registerPluginProp = function(e) {
            if (!l[e]) {
                var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                Ce(e, {
                    parser: function(e, i, n, r, o, a, u) {
                        var c = s.com.greensock.plugins[t];
                        return c ? (c._cssRegister(),
                        l[n].parse(e, i, n, r, o, a, u)) : (V("Error: " + t + " js file not loaded."),
                        o)
                    }
                })
            }
        }
        ;
        (u = Pe.prototype).parseComplex = function(e, t, i, n, r, o) {
            var a, s, l, u, c, f, h = this.keyword;
            if (this.multi && (L.test(i) || L.test(t) ? (s = t.replace(L, "|").split("|"),
            l = i.replace(L, "|").split("|")) : h && (s = [t],
            l = [i])),
            l) {
                for (u = l.length > s.length ? l.length : s.length,
                a = 0; a < u; a++)
                    t = s[a] = s[a] || this.dflt,
                    i = l[a] = l[a] || this.dflt,
                    h && (c = t.indexOf(h)) !== (f = i.indexOf(h)) && (-1 === f ? s[a] = s[a].split(h).join("") : -1 === c && (s[a] += " " + h));
                t = s.join(", "),
                i = l.join(", ")
            }
            return we(e, this.p, t, i, this.clrs, this.dflt, n, this.pr, r, o)
        }
        ,
        u.parse = function(e, t, i, n, o, a, s) {
            return this.parseComplex(e.style, this.format(te(e, this.p, r, !1, this.dflt)), this.format(t), o, a)
        }
        ,
        a.registerSpecialProp = function(e, t, i) {
            Ce(e, {
                parser: function(e, n, r, o, a, s, l) {
                    var u = new xe(e,r,0,0,a,2,r,!1,i);
                    return u.plugin = s,
                    u.setRatio = t(e, n, o._tween, r),
                    u
                },
                priority: i
            })
        }
        ,
        a.useSVGTransformAttr = !0;
        var Re, Oe = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Ae = J("transform"), De = Q + "transform", Ee = J("transformOrigin"), Me = null !== J("perspective"), Ne = W.Transform = function() {
            this.perspective = parseFloat(a.defaultTransformPerspective) || 0,
            this.force3D = !(!1 === a.defaultForce3D || !Me) && (a.defaultForce3D || "auto")
        }
        , Le = _gsScope.SVGElement, Fe = function(e, t, i) {
            var n, r = B.createElementNS("http://www.w3.org/2000/svg", e), o = /([a-z])([A-Z])/g;
            for (n in i)
                r.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
            return t.appendChild(r),
            r
        }, je = B.documentElement || {}, Ie = function() {
            var e, t, i, n = m || /Android/i.test($) && !_gsScope.chrome;
            return B.createElementNS && je.appendChild && !n && (e = Fe("svg", je),
            i = (t = Fe("rect", e, {
                width: 100,
                height: 50,
                x: 100
            })).getBoundingClientRect().width,
            t.style[Ee] = "50% 50%",
            t.style[Ae] = "scaleX(0.5)",
            n = i === t.getBoundingClientRect().width && !(p && Me),
            je.removeChild(e)),
            n
        }(), ze = function(e, t, i, n, r, o) {
            var s, l, u, c, f, h, p, d, m, _, g, v, y, T, x = e._gsTransform, b = Ue(e, !0);
            x && (y = x.xOrigin,
            T = x.yOrigin),
            (!n || (s = n.split(" ")).length < 2) && (0 === (p = e.getBBox()).x && 0 === p.y && p.width + p.height === 0 && (p = {
                x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0,
                y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0,
                width: 0,
                height: 0
            }),
            s = [(-1 !== (t = ue(t).split(" "))[0].indexOf("%") ? parseFloat(t[0]) / 100 * p.width : parseFloat(t[0])) + p.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * p.height : parseFloat(t[1])) + p.y]),
            i.xOrigin = c = parseFloat(s[0]),
            i.yOrigin = f = parseFloat(s[1]),
            n && b !== Xe && (h = b[0],
            p = b[1],
            d = b[2],
            m = b[3],
            _ = b[4],
            g = b[5],
            (v = h * m - p * d) && (l = c * (m / v) + f * (-d / v) + (d * g - m * _) / v,
            u = c * (-p / v) + f * (h / v) - (h * g - p * _) / v,
            c = i.xOrigin = s[0] = l,
            f = i.yOrigin = s[1] = u)),
            x && (o && (i.xOffset = x.xOffset,
            i.yOffset = x.yOffset,
            x = i),
            r || !1 !== r && !1 !== a.defaultSmoothOrigin ? (l = c - y,
            u = f - T,
            x.xOffset += l * b[0] + u * b[2] - l,
            x.yOffset += l * b[1] + u * b[3] - u) : x.xOffset = x.yOffset = 0),
            o || e.setAttribute("data-svg-origin", s.join(" "))
        }, qe = function(e) {
            var t, i = H("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = this.parentNode, r = this.nextSibling, o = this.style.cssText;
            if (je.appendChild(i),
            i.appendChild(this),
            this.style.display = "block",
            e)
                try {
                    t = this.getBBox(),
                    this._originalGetBBox = this.getBBox,
                    this.getBBox = qe
                } catch (e) {}
            else
                this._originalGetBBox && (t = this._originalGetBBox());
            return r ? n.insertBefore(this, r) : n.appendChild(this),
            je.removeChild(i),
            this.style.cssText = o,
            t
        }, Be = function(e) {
            try {
                return e.getBBox()
            } catch (t) {
                return qe.call(e, !0)
            }
        }, He = function(e) {
            return !(!Le || !e.getCTM || e.parentNode && !e.ownerSVGElement || !Be(e))
        }, Xe = [1, 0, 0, 1, 0, 0], Ue = function(e, t) {
            var i, n, r, o, a, s, l, u = e._gsTransform || new Ne, c = e.style;
            if (Ae ? n = te(e, De, null, !0) : e.currentStyle && (n = (n = e.currentStyle.filter.match(M)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), u.x || 0, u.y || 0].join(",") : ""),
            i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n,
            Ae && i && !e.offsetParent && e !== je && (o = c.display,
            c.display = "block",
            (l = e.parentNode) && e.offsetParent || (a = 1,
            s = e.nextSibling,
            je.appendChild(e)),
            i = !(n = te(e, De, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n,
            o ? c.display = o : Ve(c, "display"),
            a && (s ? l.insertBefore(e, s) : l ? l.appendChild(e) : je.removeChild(e))),
            (u.svg || e.getCTM && He(e)) && (i && -1 !== (c[Ae] + "").indexOf("matrix") && (n = c[Ae],
            i = 0),
            r = e.getAttribute("transform"),
            i && r && (n = "matrix(" + (r = e.transform.baseVal.consolidate().matrix).a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")",
            i = 0)),
            i)
                return Xe;
            for (r = (n || "").match(v) || [],
            Se = r.length; --Se > -1; )
                o = Number(r[Se]),
                r[Se] = (a = o - (o |= 0)) ? (1e5 * a + (a < 0 ? -.5 : .5) | 0) / 1e5 + o : o;
            return t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
        }, We = W.getTransform = function(e, i, n, r) {
            if (e._gsTransform && n && !r)
                return e._gsTransform;
            var o, s, l, u, c, f, h = n ? e._gsTransform || new Ne : new Ne, p = h.scaleX < 0, d = Me ? parseFloat(te(e, Ee, i, !1, "0 0 0").split(" ")[2]) || h.zOrigin || 0 : 0, m = parseFloat(a.defaultTransformPerspective) || 0;
            if (h.svg = !(!e.getCTM || !He(e)),
            h.svg && (ze(e, te(e, Ee, i, !1, "50% 50%") + "", h, e.getAttribute("data-svg-origin")),
            Re = a.useSVGTransformAttr || Ie),
            (o = Ue(e)) !== Xe) {
                if (16 === o.length) {
                    var _, g, v, y, T, x = o[0], b = o[1], w = o[2], S = o[3], P = o[4], C = o[5], k = o[6], R = o[7], O = o[8], A = o[9], D = o[10], E = o[12], M = o[13], N = o[14], L = o[11], F = Math.atan2(k, D);
                    h.zOrigin && (E = O * (N = -h.zOrigin) - o[12],
                    M = A * N - o[13],
                    N = D * N + h.zOrigin - o[14]),
                    h.rotationX = F * I,
                    F && (_ = P * (y = Math.cos(-F)) + O * (T = Math.sin(-F)),
                    g = C * y + A * T,
                    v = k * y + D * T,
                    O = P * -T + O * y,
                    A = C * -T + A * y,
                    D = k * -T + D * y,
                    L = R * -T + L * y,
                    P = _,
                    C = g,
                    k = v),
                    F = Math.atan2(-w, D),
                    h.rotationY = F * I,
                    F && (g = b * (y = Math.cos(-F)) - A * (T = Math.sin(-F)),
                    v = w * y - D * T,
                    A = b * T + A * y,
                    D = w * T + D * y,
                    L = S * T + L * y,
                    x = _ = x * y - O * T,
                    b = g,
                    w = v),
                    F = Math.atan2(b, x),
                    h.rotation = F * I,
                    F && (_ = x * (y = Math.cos(F)) + b * (T = Math.sin(F)),
                    g = P * y + C * T,
                    v = O * y + A * T,
                    b = b * y - x * T,
                    C = C * y - P * T,
                    A = A * y - O * T,
                    x = _,
                    P = g,
                    O = v),
                    h.rotationX && Math.abs(h.rotationX) + Math.abs(h.rotation) > 359.9 && (h.rotationX = h.rotation = 0,
                    h.rotationY = 180 - h.rotationY),
                    F = Math.atan2(P, C),
                    h.scaleX = (1e5 * Math.sqrt(x * x + b * b + w * w) + .5 | 0) / 1e5,
                    h.scaleY = (1e5 * Math.sqrt(C * C + k * k) + .5 | 0) / 1e5,
                    h.scaleZ = (1e5 * Math.sqrt(O * O + A * A + D * D) + .5 | 0) / 1e5,
                    x /= h.scaleX,
                    P /= h.scaleY,
                    b /= h.scaleX,
                    C /= h.scaleY,
                    Math.abs(F) > 2e-5 ? (h.skewX = F * I,
                    P = 0,
                    "simple" !== h.skewType && (h.scaleY *= 1 / Math.cos(F))) : h.skewX = 0,
                    h.perspective = L ? 1 / (L < 0 ? -L : L) : 0,
                    h.x = E,
                    h.y = M,
                    h.z = N,
                    h.svg && (h.x -= h.xOrigin - (h.xOrigin * x - h.yOrigin * P),
                    h.y -= h.yOrigin - (h.yOrigin * b - h.xOrigin * C))
                } else if (!Me || r || !o.length || h.x !== o[4] || h.y !== o[5] || !h.rotationX && !h.rotationY) {
                    var j = o.length >= 6
                      , z = j ? o[0] : 1
                      , q = o[1] || 0
                      , B = o[2] || 0
                      , H = j ? o[3] : 1;
                    h.x = o[4] || 0,
                    h.y = o[5] || 0,
                    l = Math.sqrt(z * z + q * q),
                    u = Math.sqrt(H * H + B * B),
                    c = z || q ? Math.atan2(q, z) * I : h.rotation || 0,
                    f = B || H ? Math.atan2(B, H) * I + c : h.skewX || 0,
                    h.scaleX = l,
                    h.scaleY = u,
                    h.rotation = c,
                    h.skewX = f,
                    Me && (h.rotationX = h.rotationY = h.z = 0,
                    h.perspective = m,
                    h.scaleZ = 1),
                    h.svg && (h.x -= h.xOrigin - (h.xOrigin * z + h.yOrigin * B),
                    h.y -= h.yOrigin - (h.xOrigin * q + h.yOrigin * H))
                }
                Math.abs(h.skewX) > 90 && Math.abs(h.skewX) < 270 && (p ? (h.scaleX *= -1,
                h.skewX += h.rotation <= 0 ? 180 : -180,
                h.rotation += h.rotation <= 0 ? 180 : -180) : (h.scaleY *= -1,
                h.skewX += h.skewX <= 0 ? 180 : -180)),
                h.zOrigin = d;
                for (s in h)
                    h[s] < 2e-5 && h[s] > -2e-5 && (h[s] = 0)
            }
            return n && (e._gsTransform = h,
            h.svg && (Re && e.style[Ae] ? t.delayedCall(.001, function() {
                Ve(e.style, Ae)
            }) : !Re && e.getAttribute("transform") && t.delayedCall(.001, function() {
                e.removeAttribute("transform")
            }))),
            h
        }
        , $e = function(e) {
            var t, i, n = this.data, r = -n.rotation * j, o = r + n.skewX * j, a = (Math.cos(r) * n.scaleX * 1e5 | 0) / 1e5, s = (Math.sin(r) * n.scaleX * 1e5 | 0) / 1e5, l = (Math.sin(o) * -n.scaleY * 1e5 | 0) / 1e5, u = (Math.cos(o) * n.scaleY * 1e5 | 0) / 1e5, c = this.t.style, f = this.t.currentStyle;
            if (f) {
                i = s,
                s = -l,
                l = -i,
                t = f.filter,
                c.filter = "";
                var h, p, d = this.t.offsetWidth, _ = this.t.offsetHeight, g = "absolute" !== f.position, v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + s + ", M21=" + l + ", M22=" + u, y = n.x + d * n.xPercent / 100, T = n.y + _ * n.yPercent / 100;
                if (null != n.ox && (y += (h = (n.oxp ? d * n.ox * .01 : n.ox) - d / 2) - (h * a + (p = (n.oyp ? _ * n.oy * .01 : n.oy) - _ / 2) * s),
                T += p - (h * l + p * u)),
                v += g ? ", Dx=" + ((h = d / 2) - (h * a + (p = _ / 2) * s) + y) + ", Dy=" + (p - (h * l + p * u) + T) + ")" : ", sizingMethod='auto expand')",
                -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = t.replace(N, v) : c.filter = v + " " + t,
                0 !== e && 1 !== e || 1 === a && 0 === s && 0 === l && 1 === u && (g && -1 === v.indexOf("Dx=0, Dy=0") || S.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && c.removeAttribute("filter")),
                !g) {
                    var x, b, P, C = m < 8 ? 1 : -1;
                    for (h = n.ieOffsetX || 0,
                    p = n.ieOffsetY || 0,
                    n.ieOffsetX = Math.round((d - ((a < 0 ? -a : a) * d + (s < 0 ? -s : s) * _)) / 2 + y),
                    n.ieOffsetY = Math.round((_ - ((u < 0 ? -u : u) * _ + (l < 0 ? -l : l) * d)) / 2 + T),
                    Se = 0; Se < 4; Se++)
                        P = (i = -1 !== (x = f[b = se[Se]]).indexOf("px") ? parseFloat(x) : ie(this.t, b, parseFloat(x), x.replace(w, "")) || 0) !== n[b] ? Se < 2 ? -n.ieOffsetX : -n.ieOffsetY : Se < 2 ? h - n.ieOffsetX : p - n.ieOffsetY,
                        c[b] = (n[b] = Math.round(i - P * (0 === Se || 2 === Se ? 1 : C))) + "px"
                }
            }
        }, Ye = W.set3DTransformRatio = W.setTransformRatio = function(e) {
            var t, i, n, r, o, a, s, l, u, c, f, h, d, m, _, g, v, y, T, x, b, w = this.data, S = this.t.style, P = w.rotation, C = w.rotationX, k = w.rotationY, R = w.scaleX, O = w.scaleY, A = w.scaleZ, D = w.x, E = w.y, M = w.z, N = w.svg, L = w.perspective, F = w.force3D, I = w.skewY, z = w.skewX;
            if (I && (z += I,
            P += I),
            !((1 !== e && 0 !== e || "auto" !== F || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && F || M || L || k || C || 1 !== A) || Re && N || !Me)
                P || z || N ? (P *= j,
                x = z * j,
                b = 1e5,
                i = Math.cos(P) * R,
                o = Math.sin(P) * R,
                n = Math.sin(P - x) * -O,
                a = Math.cos(P - x) * O,
                x && "simple" === w.skewType && (t = Math.tan(x - I * j),
                n *= t = Math.sqrt(1 + t * t),
                a *= t,
                I && (t = Math.tan(I * j),
                i *= t = Math.sqrt(1 + t * t),
                o *= t)),
                N && (D += w.xOrigin - (w.xOrigin * i + w.yOrigin * n) + w.xOffset,
                E += w.yOrigin - (w.xOrigin * o + w.yOrigin * a) + w.yOffset,
                Re && (w.xPercent || w.yPercent) && (_ = this.t.getBBox(),
                D += .01 * w.xPercent * _.width,
                E += .01 * w.yPercent * _.height),
                D < (_ = 1e-6) && D > -_ && (D = 0),
                E < _ && E > -_ && (E = 0)),
                T = (i * b | 0) / b + "," + (o * b | 0) / b + "," + (n * b | 0) / b + "," + (a * b | 0) / b + "," + D + "," + E + ")",
                N && Re ? this.t.setAttribute("transform", "matrix(" + T) : S[Ae] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + T) : S[Ae] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + R + ",0,0," + O + "," + D + "," + E + ")";
            else {
                if (p && (R < (_ = 1e-4) && R > -_ && (R = A = 2e-5),
                O < _ && O > -_ && (O = A = 2e-5),
                !L || w.z || w.rotationX || w.rotationY || (L = 0)),
                P || z)
                    P *= j,
                    g = i = Math.cos(P),
                    v = o = Math.sin(P),
                    z && (P -= z * j,
                    g = Math.cos(P),
                    v = Math.sin(P),
                    "simple" === w.skewType && (t = Math.tan((z - I) * j),
                    g *= t = Math.sqrt(1 + t * t),
                    v *= t,
                    w.skewY && (t = Math.tan(I * j),
                    i *= t = Math.sqrt(1 + t * t),
                    o *= t))),
                    n = -v,
                    a = g;
                else {
                    if (!(k || C || 1 !== A || L || N))
                        return void (S[Ae] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + E + "px," + M + "px)" + (1 !== R || 1 !== O ? " scale(" + R + "," + O + ")" : ""));
                    i = a = 1,
                    n = o = 0
                }
                c = 1,
                r = s = l = u = f = h = 0,
                d = L ? -1 / L : 0,
                m = w.zOrigin,
                _ = 1e-6,
                ",",
                "0",
                (P = k * j) && (g = Math.cos(P),
                l = -(v = Math.sin(P)),
                f = d * -v,
                r = i * v,
                s = o * v,
                c = g,
                d *= g,
                i *= g,
                o *= g),
                (P = C * j) && (t = n * (g = Math.cos(P)) + r * (v = Math.sin(P)),
                y = a * g + s * v,
                u = c * v,
                h = d * v,
                r = n * -v + r * g,
                s = a * -v + s * g,
                c *= g,
                d *= g,
                n = t,
                a = y),
                1 !== A && (r *= A,
                s *= A,
                c *= A,
                d *= A),
                1 !== O && (n *= O,
                a *= O,
                u *= O,
                h *= O),
                1 !== R && (i *= R,
                o *= R,
                l *= R,
                f *= R),
                (m || N) && (m && (D += r * -m,
                E += s * -m,
                M += c * -m + m),
                N && (D += w.xOrigin - (w.xOrigin * i + w.yOrigin * n) + w.xOffset,
                E += w.yOrigin - (w.xOrigin * o + w.yOrigin * a) + w.yOffset),
                D < _ && D > -_ && (D = "0"),
                E < _ && E > -_ && (E = "0"),
                M < _ && M > -_ && (M = 0)),
                T = w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix3d(" : "matrix3d(",
                T += (i < _ && i > -_ ? "0" : i) + "," + (o < _ && o > -_ ? "0" : o) + "," + (l < _ && l > -_ ? "0" : l),
                T += "," + (f < _ && f > -_ ? "0" : f) + "," + (n < _ && n > -_ ? "0" : n) + "," + (a < _ && a > -_ ? "0" : a),
                C || k || 1 !== A ? (T += "," + (u < _ && u > -_ ? "0" : u) + "," + (h < _ && h > -_ ? "0" : h) + "," + (r < _ && r > -_ ? "0" : r),
                T += "," + (s < _ && s > -_ ? "0" : s) + "," + (c < _ && c > -_ ? "0" : c) + "," + (d < _ && d > -_ ? "0" : d) + ",") : T += ",0,0,0,0,1,0,",
                T += D + "," + E + "," + M + "," + (L ? 1 + -M / L : 1) + ")",
                S[Ae] = T
            }
        }
        ;
        (u = Ne.prototype).x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0,
        u.scaleX = u.scaleY = u.scaleZ = 1,
        Ce("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(e, t, i, n, o, s, l) {
                if (n._lastParsedTransform === l)
                    return o;
                n._lastParsedTransform = l;
                var u = l.scale && "function" == typeof l.scale ? l.scale : 0;
                u && (l.scale = u(g, e));
                var c, f, h, p, d, m, v, y, T, x = e._gsTransform, b = e.style, w = Oe.length, S = l, P = {}, C = We(e, r, !0, S.parseTransform), k = S.transform && ("function" == typeof S.transform ? S.transform(g, _) : S.transform);
                if (C.skewType = S.skewType || C.skewType || a.defaultSkewType,
                n._transform = C,
                "rotationZ"in S && (S.rotation = S.rotationZ),
                k && "string" == typeof k && Ae)
                    (f = X.style)[Ae] = k,
                    f.display = "block",
                    f.position = "absolute",
                    -1 !== k.indexOf("%") && (f.width = te(e, "width"),
                    f.height = te(e, "height")),
                    B.body.appendChild(X),
                    c = We(X, null, !1),
                    "simple" === C.skewType && (c.scaleY *= Math.cos(c.skewX * j)),
                    C.svg && (m = C.xOrigin,
                    v = C.yOrigin,
                    c.x -= C.xOffset,
                    c.y -= C.yOffset,
                    (S.transformOrigin || S.svgOrigin) && (k = {},
                    ze(e, ue(S.transformOrigin), k, S.svgOrigin, S.smoothOrigin, !0),
                    m = k.xOrigin,
                    v = k.yOrigin,
                    c.x -= k.xOffset - C.xOffset,
                    c.y -= k.yOffset - C.yOffset),
                    (m || v) && (y = Ue(X, !0),
                    c.x -= m - (m * y[0] + v * y[2]),
                    c.y -= v - (m * y[1] + v * y[3]))),
                    B.body.removeChild(X),
                    c.perspective || (c.perspective = C.perspective),
                    null != S.xPercent && (c.xPercent = fe(S.xPercent, C.xPercent)),
                    null != S.yPercent && (c.yPercent = fe(S.yPercent, C.yPercent));
                else if ("object" == typeof S) {
                    if (c = {
                        scaleX: fe(null != S.scaleX ? S.scaleX : S.scale, C.scaleX),
                        scaleY: fe(null != S.scaleY ? S.scaleY : S.scale, C.scaleY),
                        scaleZ: fe(S.scaleZ, C.scaleZ),
                        x: fe(S.x, C.x),
                        y: fe(S.y, C.y),
                        z: fe(S.z, C.z),
                        xPercent: fe(S.xPercent, C.xPercent),
                        yPercent: fe(S.yPercent, C.yPercent),
                        perspective: fe(S.transformPerspective, C.perspective)
                    },
                    null != (d = S.directionalRotation))
                        if ("object" == typeof d)
                            for (f in d)
                                S[f] = d[f];
                        else
                            S.rotation = d;
                    "string" == typeof S.x && -1 !== S.x.indexOf("%") && (c.x = 0,
                    c.xPercent = fe(S.x, C.xPercent)),
                    "string" == typeof S.y && -1 !== S.y.indexOf("%") && (c.y = 0,
                    c.yPercent = fe(S.y, C.yPercent)),
                    c.rotation = he("rotation"in S ? S.rotation : "shortRotation"in S ? S.shortRotation + "_short" : C.rotation, C.rotation, "rotation", P),
                    Me && (c.rotationX = he("rotationX"in S ? S.rotationX : "shortRotationX"in S ? S.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", P),
                    c.rotationY = he("rotationY"in S ? S.rotationY : "shortRotationY"in S ? S.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", P)),
                    c.skewX = he(S.skewX, C.skewX),
                    c.skewY = he(S.skewY, C.skewY)
                }
                for (Me && null != S.force3D && (C.force3D = S.force3D,
                p = !0),
                (h = C.force3D || C.z || C.rotationX || C.rotationY || c.z || c.rotationX || c.rotationY || c.perspective) || null == S.scale || (c.scaleZ = 1); --w > -1; )
                    ((k = c[T = Oe[w]] - C[T]) > 1e-6 || k < -1e-6 || null != S[T] || null != z[T]) && (p = !0,
                    o = new xe(C,T,C[T],k,o),
                    T in P && (o.e = P[T]),
                    o.xs0 = 0,
                    o.plugin = s,
                    n._overwriteProps.push(o.n));
                return k = "function" == typeof S.transformOrigin ? S.transformOrigin(g, _) : S.transformOrigin,
                C.svg && (k || S.svgOrigin) && (m = C.xOffset,
                v = C.yOffset,
                ze(e, ue(k), c, S.svgOrigin, S.smoothOrigin),
                o = be(C, "xOrigin", (x ? C : c).xOrigin, c.xOrigin, o, "transformOrigin"),
                o = be(C, "yOrigin", (x ? C : c).yOrigin, c.yOrigin, o, "transformOrigin"),
                m === C.xOffset && v === C.yOffset || (o = be(C, "xOffset", x ? m : C.xOffset, C.xOffset, o, "transformOrigin"),
                o = be(C, "yOffset", x ? v : C.yOffset, C.yOffset, o, "transformOrigin")),
                k = "0px 0px"),
                (k || Me && h && C.zOrigin) && (Ae ? (p = !0,
                T = Ee,
                k || (k = (k = (te(e, T, r, !1, "50% 50%") + "").split(" "))[0] + " " + k[1] + " " + C.zOrigin + "px"),
                k += "",
                (o = new xe(b,T,0,0,o,-1,"transformOrigin")).b = b[T],
                o.plugin = s,
                Me ? (f = C.zOrigin,
                k = k.split(" "),
                C.zOrigin = (k.length > 2 ? parseFloat(k[2]) : f) || 0,
                o.xs0 = o.e = k[0] + " " + (k[1] || "50%") + " 0px",
                (o = new xe(C,"zOrigin",0,0,o,-1,o.n)).b = f,
                o.xs0 = o.e = C.zOrigin) : o.xs0 = o.e = k) : ue(k + "", C)),
                p && (n._transformType = C.svg && Re || !h && 3 !== this._transformType ? 2 : 3),
                u && (l.scale = u),
                o
            },
            allowFunc: !0,
            prefix: !0
        }),
        Ce("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        Ce("clipPath", {
            defaultValue: "inset(0%)",
            prefix: !0,
            multi: !0,
            formatter: ve("inset(0% 0% 0% 0%)", !1, !0)
        }),
        Ce("borderRadius", {
            defaultValue: "0px",
            parser: function(e, t, i, o, a, s) {
                t = this.format(t);
                var l, u, c, f, h, p, d, m, _, g, v, y, T, x, b, w, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], P = e.style;
                for (_ = parseFloat(e.offsetWidth),
                g = parseFloat(e.offsetHeight),
                l = t.split(" "),
                u = 0; u < S.length; u++)
                    this.p.indexOf("border") && (S[u] = J(S[u])),
                    -1 !== (h = f = te(e, S[u], r, !1, "0px")).indexOf(" ") && (h = (f = h.split(" "))[0],
                    f = f[1]),
                    p = c = l[u],
                    d = parseFloat(h),
                    y = h.substr((d + "").length),
                    (T = "=" === p.charAt(1)) ? (m = parseInt(p.charAt(0) + "1", 10),
                    p = p.substr(2),
                    m *= parseFloat(p),
                    v = p.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(p),
                    v = p.substr((m + "").length)),
                    "" === v && (v = n[i] || y),
                    v !== y && (x = ie(e, "borderLeft", d, y),
                    b = ie(e, "borderTop", d, y),
                    "%" === v ? (h = x / _ * 100 + "%",
                    f = b / g * 100 + "%") : "em" === v ? (h = x / (w = ie(e, "borderLeft", 1, "em")) + "em",
                    f = b / w + "em") : (h = x + "px",
                    f = b + "px"),
                    T && (p = parseFloat(h) + m + v,
                    c = parseFloat(f) + m + v)),
                    a = we(P, S[u], h + " " + f, p + " " + c, !1, "0px", a);
                return a
            },
            prefix: !0,
            formatter: ve("0px 0px 0px 0px", !1, !0)
        }),
        Ce("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function(e, t, i, n, o, a) {
                return we(e.style, i, this.format(te(e, i, r, !1, "0px 0px")), this.format(t), !1, "0px", o)
            },
            prefix: !0,
            formatter: ve("0px 0px", !1, !0)
        }),
        Ce("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(e, t, i, n, o, a) {
                var s, l, u, c, f, h, p = "background-position", d = r || ee(e), _ = this.format((d ? m ? d.getPropertyValue(p + "-x") + " " + d.getPropertyValue(p + "-y") : d.getPropertyValue(p) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"), g = this.format(t);
                if (-1 !== _.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (h = te(e, "backgroundImage").replace(A, "")) && "none" !== h) {
                    for (s = _.split(" "),
                    l = g.split(" "),
                    U.setAttribute("src", h),
                    u = 2; --u > -1; )
                        (c = -1 !== (_ = s[u]).indexOf("%")) !== (-1 !== l[u].indexOf("%")) && (f = 0 === u ? e.offsetWidth - U.width : e.offsetHeight - U.height,
                        s[u] = c ? parseFloat(_) / 100 * f + "px" : parseFloat(_) / f * 100 + "%");
                    _ = s.join(" ")
                }
                return this.parseComplex(e.style, _, g, o, a)
            },
            formatter: ue
        }),
        Ce("backgroundSize", {
            defaultValue: "0 0",
            formatter: function(e) {
                return e += "",
                "co" === e.substr(0, 2) ? e : ue(-1 === e.indexOf(" ") ? e + " " + e : e)
            }
        }),
        Ce("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        Ce("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        Ce("transformStyle", {
            prefix: !0
        }),
        Ce("backfaceVisibility", {
            prefix: !0
        }),
        Ce("userSelect", {
            prefix: !0
        }),
        Ce("margin", {
            parser: ye("marginTop,marginRight,marginBottom,marginLeft")
        }),
        Ce("padding", {
            parser: ye("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        Ce("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(e, t, i, n, o, a) {
                var s, l, u;
                return m < 9 ? (l = e.currentStyle,
                u = m < 8 ? " " : ",",
                s = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")",
                t = this.format(t).split(",").join(u)) : (s = this.format(te(e, this.p, r, !1, this.dflt)),
                t = this.format(t)),
                this.parseComplex(e.style, s, t, o, a)
            }
        }),
        Ce("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        Ce("autoRound,strictUnits", {
            parser: function(e, t, i, n, r) {
                return r
            }
        }),
        Ce("border", {
            defaultValue: "0px solid #000",
            parser: function(e, t, i, n, o, a) {
                var s = te(e, "borderTopWidth", r, !1, "0px")
                  , l = this.format(t).split(" ")
                  , u = l[0].replace(w, "");
                return "px" !== u && (s = parseFloat(s) / ie(e, "borderTopWidth", 1, u) + u),
                this.parseComplex(e.style, this.format(s + " " + te(e, "borderTopStyle", r, !1, "solid") + " " + te(e, "borderTopColor", r, !1, "#000")), l.join(" "), o, a)
            },
            color: !0,
            formatter: function(e) {
                var t = e.split(" ");
                return t[0] + " " + (t[1] || "solid") + " " + (e.match(ge) || ["#000"])[0]
            }
        }),
        Ce("borderWidth", {
            parser: ye("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        Ce("float,cssFloat,styleFloat", {
            parser: function(e, t, i, n, r, o) {
                var a = e.style
                  , s = "cssFloat"in a ? "cssFloat" : "styleFloat";
                return new xe(a,s,0,0,r,-1,i,!1,0,a[s],t)
            }
        });
        var Ge = function(e) {
            var t, i = this.t, n = i.filter || te(this.data, "filter") || "", r = this.s + this.c * e | 0;
            100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"),
            t = !te(this.data, "filter")) : (i.filter = n.replace(C, ""),
            t = !0)),
            t || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"),
            -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(S, "opacity=" + r))
        };
        Ce("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(e, t, i, n, o, a) {
                var s = parseFloat(te(e, "opacity", r, !1, "1"))
                  , l = e.style
                  , u = "autoAlpha" === i;
                return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + s),
                u && 1 === s && "hidden" === te(e, "visibility", r) && 0 !== t && (s = 0),
                Y ? o = new xe(l,"opacity",s,t - s,o) : ((o = new xe(l,"opacity",100 * s,100 * (t - s),o)).xn1 = u ? 1 : 0,
                l.zoom = 1,
                o.type = 2,
                o.b = "alpha(opacity=" + o.s + ")",
                o.e = "alpha(opacity=" + (o.s + o.c) + ")",
                o.data = e,
                o.plugin = a,
                o.setRatio = Ge),
                u && ((o = new xe(l,"visibility",0,0,o,-1,null,!1,0,0 !== s ? "inherit" : "hidden",0 === t ? "hidden" : "inherit")).xs0 = "inherit",
                n._overwriteProps.push(o.n),
                n._overwriteProps.push(i)),
                o
            }
        });
        var Ve = function(e, t) {
            t && (e.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t),
            e.removeProperty(t.replace(R, "-$1").toLowerCase())) : e.removeAttribute(t))
        }
          , Qe = function(e) {
            if (this.t._gsClassPT = this,
            1 === e || 0 === e) {
                this.t.setAttribute("class", 0 === e ? this.b : this.e);
                for (var t = this.data, i = this.t.style; t; )
                    t.v ? i[t.p] = t.v : Ve(i, t.p),
                    t = t._next;
                1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else
                this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        Ce("className", {
            parser: function(e, t, n, o, a, s, l) {
                var u, c, f, h, p, d = e.getAttribute("class") || "", m = e.style.cssText;
                if (a = o._classNamePT = new xe(e,n,0,0,a,2),
                a.setRatio = Qe,
                a.pr = -11,
                i = !0,
                a.b = d,
                c = re(e, r),
                f = e._gsClassPT) {
                    for (h = {},
                    p = f.data; p; )
                        h[p.p] = 1,
                        p = p._next;
                    f.setRatio(1)
                }
                return e._gsClassPT = a,
                a.e = "=" !== t.charAt(1) ? t : d.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""),
                e.setAttribute("class", a.e),
                u = oe(e, c, re(e), l, h),
                e.setAttribute("class", d),
                a.data = u.firstMPT,
                e.style.cssText !== m && (e.style.cssText = m),
                a = a.xfirst = o.parse(e, u.difs, a, s)
            }
        });
        var Ze = function(e) {
            if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var t, i, n, r, o, a = this.t.style, s = l.transform.parse;
                if ("all" === this.e)
                    a.cssText = "",
                    r = !0;
                else
                    for (n = (t = this.e.split(" ").join("").split(",")).length; --n > -1; )
                        i = t[n],
                        l[i] && (l[i].parse === s ? r = !0 : i = "transformOrigin" === i ? Ee : l[i].p),
                        Ve(a, i);
                r && (Ve(a, Ae),
                (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"),
                this.t.removeAttribute("transform")),
                delete this.t._gsTransform))
            }
        };
        for (Ce("clearProps", {
            parser: function(e, t, n, r, o) {
                return o = new xe(e,n,0,0,o,2),
                o.setRatio = Ze,
                o.e = t,
                o.pr = -10,
                o.data = r._tween,
                i = !0,
                o
            }
        }),
        u = "bezier,throwProps,physicsProps,physics2D".split(","),
        Se = u.length; Se--; )
            ke(u[Se]);
        (u = a.prototype)._firstPT = u._lastParsedTransform = u._transform = null,
        u._onInitTween = function(e, t, s, u) {
            if (!e.nodeType)
                return !1;
            this._target = _ = e,
            this._tween = s,
            this._vars = t,
            g = u,
            c = t.autoRound,
            i = !1,
            n = t.suffixMap || a.suffixMap,
            r = ee(e),
            o = this._overwriteProps;
            var p, m, v, y, T, x, b, w, S, C = e.style;
            if (f && "" === C.zIndex && ("auto" !== (p = te(e, "zIndex", r)) && "" !== p || this._addLazySet(C, "zIndex", 0)),
            "string" == typeof t && (y = C.cssText,
            p = re(e, r),
            C.cssText = y + ";" + t,
            p = oe(e, p, re(e)).difs,
            !Y && P.test(t) && (p.opacity = parseFloat(RegExp.$1)),
            t = p,
            C.cssText = y),
            t.className ? this._firstPT = m = l.className.parse(e, t.className, "className", this, null, null, t) : this._firstPT = m = this.parse(e, t, null),
            this._transformType) {
                for (S = 3 === this._transformType,
                Ae ? h && (f = !0,
                "" === C.zIndex && ("auto" !== (b = te(e, "zIndex", r)) && "" !== b || this._addLazySet(C, "zIndex", 0)),
                d && this._addLazySet(C, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden"))) : C.zoom = 1,
                v = m; v && v._next; )
                    v = v._next;
                w = new xe(e,"transform",0,0,null,2),
                this._linkCSSP(w, null, v),
                w.setRatio = Ae ? Ye : $e,
                w.data = this._transform || We(e, r, !0),
                w.tween = s,
                w.pr = -1,
                o.pop()
            }
            if (i) {
                for (; m; ) {
                    for (x = m._next,
                    v = y; v && v.pr > m.pr; )
                        v = v._next;
                    (m._prev = v ? v._prev : T) ? m._prev._next = m : y = m,
                    (m._next = v) ? v._prev = m : T = m,
                    m = x
                }
                this._firstPT = y
            }
            return !0
        }
        ,
        u.parse = function(e, t, i, o) {
            var a, s, u, f, h, p, d, m, v, y, T = e.style;
            for (a in t) {
                if (p = t[a],
                s = l[a],
                "function" != typeof p || s && s.allowFunc || (p = p(g, _)),
                s)
                    i = s.parse(e, p, a, this, i, o, t);
                else {
                    if ("--" === a.substr(0, 2)) {
                        this._tween._propLookup[a] = this._addTween.call(this._tween, e.style, "setProperty", ee(e).getPropertyValue(a) + "", p + "", a, !1, a);
                        continue
                    }
                    h = te(e, a, r) + "",
                    v = "string" == typeof p,
                    "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || v && k.test(p) ? (v || (p = ((p = me(p)).length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"),
                    i = we(T, a, h, p, !0, "transparent", i, 0, o)) : v && F.test(p) ? i = we(T, a, h, p, !0, null, i, 0, o) : (d = (u = parseFloat(h)) || 0 === u ? h.substr((u + "").length) : "",
                    "" !== h && "auto" !== h || ("width" === a || "height" === a ? (u = le(e, a, r),
                    d = "px") : "left" === a || "top" === a ? (u = ne(e, a, r),
                    d = "px") : (u = "opacity" !== a ? 0 : 1,
                    d = "")),
                    (y = v && "=" === p.charAt(1)) ? (f = parseInt(p.charAt(0) + "1", 10),
                    p = p.substr(2),
                    f *= parseFloat(p),
                    m = p.replace(w, "")) : (f = parseFloat(p),
                    m = v ? p.replace(w, "") : ""),
                    "" === m && (m = a in n ? n[a] : d),
                    p = f || 0 === f ? (y ? f + u : f) + m : t[a],
                    d !== m && ("" === m && "lineHeight" !== a || (f || 0 === f) && u && (u = ie(e, a, u, d),
                    "%" === m ? (u /= ie(e, a, 100, "%") / 100,
                    !0 !== t.strictUnits && (h = u + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? u /= ie(e, a, 1, m) : "px" !== m && (f = ie(e, a, f, m),
                    m = "px"),
                    y && (f || 0 === f) && (p = f + u + m))),
                    y && (f += u),
                    !u && 0 !== u || !f && 0 !== f ? void 0 !== T[a] && (p || p + "" != "NaN" && null != p) ? (i = new xe(T,a,f || u || 0,0,i,-1,a,!1,0,h,p)).xs0 = "none" !== p || "display" !== a && -1 === a.indexOf("Style") ? p : h : V("invalid " + a + " tween value: " + t[a]) : (i = new xe(T,a,u,f - u,i,0,a,!1 !== c && ("px" === m || "zIndex" === a),0,h,p)).xs0 = m)
                }
                o && i && !i.plugin && (i.plugin = o)
            }
            return i
        }
        ,
        u.setRatio = function(e) {
            var t, i, n, r = this._firstPT;
            if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                    for (; r; ) {
                        if (t = r.c * e + r.s,
                        r.r ? t = r.r(t) : t < 1e-6 && t > -1e-6 && (t = 0),
                        r.type)
                            if (1 === r.type)
                                if (2 === (n = r.l))
                                    r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2;
                                else if (3 === n)
                                    r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === n)
                                    r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === n)
                                    r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + t + r.xs1,
                                    n = 1; n < r.l; n++)
                                        i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                }
                            else
                                -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(e);
                        else
                            r.t[r.p] = t + r.xs0;
                        r = r._next
                    }
                else
                    for (; r; )
                        2 !== r.type ? r.t[r.p] = r.b : r.setRatio(e),
                        r = r._next;
            else
                for (; r; ) {
                    if (2 !== r.type)
                        if (r.r && -1 !== r.type)
                            if (t = r.r(r.s + r.c),
                            r.type) {
                                if (1 === r.type) {
                                    for (n = r.l,
                                    i = r.xs0 + t + r.xs1,
                                    n = 1; n < r.l; n++)
                                        i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                }
                            } else
                                r.t[r.p] = t + r.xs0;
                        else
                            r.t[r.p] = r.e;
                    else
                        r.setRatio(e);
                    r = r._next
                }
        }
        ,
        u._enableTransforms = function(e) {
            this._transform = this._transform || We(this._target, r, !0),
            this._transformType = this._transform.svg && Re || !e && 3 !== this._transformType ? 2 : 3
        }
        ;
        var Je = function(e) {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null, !0)
        };
        u._addLazySet = function(e, t, i) {
            var n = this._firstPT = new xe(e,t,0,0,this._firstPT,2);
            n.e = i,
            n.setRatio = Je,
            n.data = this
        }
        ,
        u._linkCSSP = function(e, t, i, n) {
            return e && (t && (t._prev = e),
            e._next && (e._next._prev = e._prev),
            e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next,
            n = !0),
            i ? i._next = e : n || null !== this._firstPT || (this._firstPT = e),
            e._next = t,
            e._prev = i),
            e
        }
        ,
        u._mod = function(e) {
            for (var t = this._firstPT; t; )
                "function" == typeof e[t.p] && (t.r = e[t.p]),
                t = t._next
        }
        ,
        u._kill = function(t) {
            var i, n, r, o = t;
            if (t.autoAlpha || t.alpha) {
                o = {};
                for (n in t)
                    o[n] = t[n];
                o.opacity = 1,
                o.autoAlpha && (o.visibility = 1)
            }
            for (t.className && (i = this._classNamePT) && ((r = i.xfirst) && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next),
            i._next && this._linkCSSP(i._next, i._next._next, r._prev),
            this._classNamePT = null),
            i = this._firstPT; i; )
                i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(t),
                n = i.plugin),
                i = i._next;
            return e.prototype._kill.call(this, o)
        }
        ;
        var Ke = function(e, t, i) {
            var n, r, o, a;
            if (e.slice)
                for (r = e.length; --r > -1; )
                    Ke(e[r], t, i);
            else
                for (r = (n = e.childNodes).length; --r > -1; )
                    a = (o = n[r]).type,
                    o.style && (t.push(re(o)),
                    i && i.push(o)),
                    1 !== a && 9 !== a && 11 !== a || !o.childNodes.length || Ke(o, t, i)
        };
        return a.cascadeTo = function(e, i, n) {
            var r, o, a, s, l = t.to(e, i, n), u = [l], c = [], f = [], h = [], p = t._internals.reservedProps;
            for (e = l._targets || l.target,
            Ke(e, c, h),
            l.render(i, !0, !0),
            Ke(e, f),
            l.render(0, !0, !0),
            l._enabled(!0),
            r = h.length; --r > -1; )
                if ((o = oe(h[r], c[r], f[r])).firstMPT) {
                    o = o.difs;
                    for (a in n)
                        p[a] && (o[a] = n[a]);
                    s = {};
                    for (a in o)
                        s[a] = c[r][a];
                    u.push(t.fromTo(h[r], i, s, o))
                }
            return u
        }
        ,
        e.activate([a]),
        a
    }, !0),
    function() {
        var e = function(e) {
            var t = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
            return function(i) {
                return (Math.round(i / e) * e * t | 0) / t
            }
        }
          , t = function(e, t) {
            for (; e; )
                e.f || e.blob || (e.m = t || Math.round),
                e = e._next
        }
          , i = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.7.0",
            priority: -1,
            API: 2,
            init: function(e, t, i) {
                return this._tween = i,
                !0
            }
        }).prototype;
        i._onInitAllProps = function() {
            var i, n, r, o, a = this._tween, s = a.vars.roundProps, l = {}, u = a._propLookup.roundProps;
            if ("object" != typeof s || s.push)
                for ("string" == typeof s && (s = s.split(",")),
                r = s.length; --r > -1; )
                    l[s[r]] = Math.round;
            else
                for (o in s)
                    l[o] = e(s[o]);
            for (o in l)
                for (i = a._firstPT; i; )
                    n = i._next,
                    i.pg ? i.t._mod(l) : i.n === o && (2 === i.f && i.t ? t(i.t._firstPT, l[o]) : (this._add(i.t, o, i.s, i.c, l[o]),
                    n && (n._prev = i._prev),
                    i._prev ? i._prev._next = n : a._firstPT === i && (a._firstPT = n),
                    i._next = i._prev = null,
                    a._propLookup[o] = u)),
                    i = n;
            return !1
        }
        ,
        i._add = function(e, t, i, n, r) {
            this._addTween(e, t, i, i + n, t, r || Math.round),
            this._overwriteProps.push(t)
        }
    }(),
    function() {
        _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.6.1",
            init: function(e, t, i, n) {
                var r, o;
                if ("function" != typeof e.setAttribute)
                    return !1;
                for (r in t)
                    "function" == typeof (o = t[r]) && (o = o(n, e)),
                    this._addTween(e, "setAttribute", e.getAttribute(r) + "", o + "", r, !1, r),
                    this._overwriteProps.push(r);
                return !0
            }
        })
    }(),
    _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.1",
        API: 2,
        init: function(e, t, i, n) {
            "object" != typeof t && (t = {
                rotation: t
            }),
            this.finals = {};
            var r, o, a, s, l, u, c = !0 === t.useRadians ? 2 * Math.PI : 360;
            for (r in t)
                "useRadians" !== r && ("function" == typeof (s = t[r]) && (s = s(n, e)),
                o = (u = (s + "").split("_"))[0],
                a = parseFloat("function" != typeof e[r] ? e[r] : e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]()),
                l = (s = this.finals[r] = "string" == typeof o && "=" === o.charAt(1) ? a + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0) - a,
                u.length && (-1 !== (o = u.join("_")).indexOf("short") && (l %= c) !== l % (c / 2) && (l = l < 0 ? l + c : l - c),
                -1 !== o.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== o.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)),
                (l > 1e-6 || l < -1e-6) && (this._addTween(e, r, a, a + l, r),
                this._overwriteProps.push(r)));
            return !0
        },
        set: function(e) {
            var t;
            if (1 !== e)
                this._super.setRatio.call(this, e);
            else
                for (t = this._firstPT; t; )
                    t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p],
                    t = t._next
        }
    })._autoCSS = !0,
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(e) {
        var t, i, n, r, o = _gsScope.GreenSockGlobals || _gsScope, a = o.com.greensock, s = 2 * Math.PI, l = Math.PI / 2, u = a._class, c = function(t, i) {
            var n = u("easing." + t, function() {}, !0)
              , r = n.prototype = new e;
            return r.constructor = n,
            r.getRatio = i,
            n
        }, f = e.register || function() {}
        , h = function(e, t, i, n, r) {
            var o = u("easing." + e, {
                easeOut: new t,
                easeIn: new i,
                easeInOut: new n
            }, !0);
            return f(o, e),
            o
        }, p = function(e, t, i) {
            this.t = e,
            this.v = t,
            i && (this.next = i,
            i.prev = this,
            this.c = i.v - t,
            this.gap = i.t - e)
        }, d = function(t, i) {
            var n = u("easing." + t, function(e) {
                this._p1 = e || 0 === e ? e : 1.70158,
                this._p2 = 1.525 * this._p1
            }, !0)
              , r = n.prototype = new e;
            return r.constructor = n,
            r.getRatio = i,
            r.config = function(e) {
                return new n(e)
            }
            ,
            n
        }, m = h("Back", d("BackOut", function(e) {
            return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
        }), d("BackIn", function(e) {
            return e * e * ((this._p1 + 1) * e - this._p1)
        }), d("BackInOut", function(e) {
            return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
        })), _ = u("easing.SlowMo", function(e, t, i) {
            t = t || 0 === t ? t : .7,
            null == e ? e = .7 : e > 1 && (e = 1),
            this._p = 1 !== e ? t : 0,
            this._p1 = (1 - e) / 2,
            this._p2 = e,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = !0 === i
        }, !0), g = _.prototype = new e;
        return g.constructor = _,
        g.getRatio = function(e) {
            var t = e + (.5 - e) * this._p;
            return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 === e ? 0 : 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
        }
        ,
        _.ease = new _(.7,.7),
        g.config = _.config = function(e, t, i) {
            return new _(e,t,i)
        }
        ,
        t = u("easing.SteppedEase", function(e, t) {
            e = e || 1,
            this._p1 = 1 / e,
            this._p2 = e + (t ? 0 : 1),
            this._p3 = t ? 1 : 0
        }, !0),
        g = t.prototype = new e,
        g.constructor = t,
        g.getRatio = function(e) {
            return e < 0 ? e = 0 : e >= 1 && (e = .999999999),
            ((this._p2 * e | 0) + this._p3) * this._p1
        }
        ,
        g.config = t.config = function(e, i) {
            return new t(e,i)
        }
        ,
        i = u("easing.ExpoScaleEase", function(e, t, i) {
            this._p1 = Math.log(t / e),
            this._p2 = t - e,
            this._p3 = e,
            this._ease = i
        }, !0),
        g = i.prototype = new e,
        g.constructor = i,
        g.getRatio = function(e) {
            return this._ease && (e = this._ease.getRatio(e)),
            (this._p3 * Math.exp(this._p1 * e) - this._p3) / this._p2
        }
        ,
        g.config = i.config = function(e, t, n) {
            return new i(e,t,n)
        }
        ,
        n = u("easing.RoughEase", function(t) {
            for (var i, n, r, o, a, s, l = (t = t || {}).taper || "none", u = [], c = 0, f = 0 | (t.points || 20), h = f, d = !1 !== t.randomize, m = !0 === t.clamp, _ = t.template instanceof e ? t.template : null, g = "number" == typeof t.strength ? .4 * t.strength : .4; --h > -1; )
                i = d ? Math.random() : 1 / f * h,
                n = _ ? _.getRatio(i) : i,
                r = "none" === l ? g : "out" === l ? (o = 1 - i) * o * g : "in" === l ? i * i * g : i < .5 ? (o = 2 * i) * o * .5 * g : (o = 2 * (1 - i)) * o * .5 * g,
                d ? n += Math.random() * r - .5 * r : h % 2 ? n += .5 * r : n -= .5 * r,
                m && (n > 1 ? n = 1 : n < 0 && (n = 0)),
                u[c++] = {
                    x: i,
                    y: n
                };
            for (u.sort(function(e, t) {
                return e.x - t.x
            }),
            s = new p(1,1,null),
            h = f; --h > -1; )
                a = u[h],
                s = new p(a.x,a.y,s);
            this._prev = new p(0,0,0 !== s.t ? s : s.next)
        }, !0),
        g = n.prototype = new e,
        g.constructor = n,
        g.getRatio = function(e) {
            var t = this._prev;
            if (e > t.t) {
                for (; t.next && e >= t.t; )
                    t = t.next;
                t = t.prev
            } else
                for (; t.prev && e <= t.t; )
                    t = t.prev;
            return this._prev = t,
            t.v + (e - t.t) / t.gap * t.c
        }
        ,
        g.config = function(e) {
            return new n(e)
        }
        ,
        n.ease = new n,
        h("Bounce", c("BounceOut", function(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }), c("BounceIn", function(e) {
            return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : e < 2 / 2.75 ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }), c("BounceInOut", function(e) {
            var t = e < .5;
            return e = t ? 1 - 2 * e : 2 * e - 1,
            e < 1 / 2.75 ? e *= 7.5625 * e : e = e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375,
            t ? .5 * (1 - e) : .5 * e + .5
        })),
        h("Circ", c("CircOut", function(e) {
            return Math.sqrt(1 - (e -= 1) * e)
        }), c("CircIn", function(e) {
            return -(Math.sqrt(1 - e * e) - 1)
        }), c("CircInOut", function(e) {
            return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        })),
        r = function(t, i, n) {
            var r = u("easing." + t, function(e, t) {
                this._p1 = e >= 1 ? e : 1,
                this._p2 = (t || n) / (e < 1 ? e : 1),
                this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0),
                this._p2 = s / this._p2
            }, !0)
              , o = r.prototype = new e;
            return o.constructor = r,
            o.getRatio = i,
            o.config = function(e, t) {
                return new r(e,t)
            }
            ,
            r
        }
        ,
        h("Elastic", r("ElasticOut", function(e) {
            return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
        }, .3), r("ElasticIn", function(e) {
            return -this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)
        }, .3), r("ElasticInOut", function(e) {
            return (e *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
        }, .45)),
        h("Expo", c("ExpoOut", function(e) {
            return 1 - Math.pow(2, -10 * e)
        }), c("ExpoIn", function(e) {
            return Math.pow(2, 10 * (e - 1)) - .001
        }), c("ExpoInOut", function(e) {
            return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        })),
        h("Sine", c("SineOut", function(e) {
            return Math.sin(e * l)
        }), c("SineIn", function(e) {
            return 1 - Math.cos(e * l)
        }), c("SineInOut", function(e) {
            return -.5 * (Math.cos(Math.PI * e) - 1)
        })),
        u("easing.EaseLookup", {
            find: function(t) {
                return e.map[t]
            }
        }, !0),
        f(o.SlowMo, "SlowMo", "ease,"),
        f(n, "RoughEase", "ease,"),
        f(t, "SteppedEase", "ease,"),
        m
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(e, t) {
    "use strict";
    var i = {}
      , n = e.document
      , r = e.GreenSockGlobals = e.GreenSockGlobals || e
      , o = r.TweenMax;
    if (o)
        return "undefined" != typeof module && module.exports && (module.exports = o),
        o;
    var a, s, l, u, c, f = function(e) {
        var t, i = e.split("."), n = r;
        for (t = 0; t < i.length; t++)
            n[i[t]] = n = n[i[t]] || {};
        return n
    }, h = f("com.greensock"), p = function(e) {
        var t, i = [], n = e.length;
        for (t = 0; t !== n; i.push(e[t++]))
            ;
        return i
    }, d = function() {}, m = function() {
        var e = Object.prototype.toString
          , t = e.call([]);
        return function(i) {
            return null != i && (i instanceof Array || "object" == typeof i && !!i.push && e.call(i) === t)
        }
    }(), _ = {}, g = function(t, n, o, a) {
        this.sc = _[t] ? _[t].sc : [],
        _[t] = this,
        this.gsClass = null,
        this.func = o;
        var s = [];
        this.check = function(l) {
            for (var u, c, h, p, d = n.length, m = d; --d > -1; )
                (u = _[n[d]] || new g(n[d],[])).gsClass ? (s[d] = u.gsClass,
                m--) : l && u.sc.push(this);
            if (0 === m && o) {
                if (c = ("com.greensock." + t).split("."),
                h = c.pop(),
                p = f(c.join("."))[h] = this.gsClass = o.apply(o, s),
                a)
                    if (r[h] = i[h] = p,
                    "undefined" != typeof module && module.exports)
                        if ("TweenMax" === t) {
                            module.exports = i.TweenMax = p;
                            for (d in i)
                                p[d] = i[d]
                        } else
                            i.TweenMax && (i.TweenMax[h] = p);
                    else
                        "function" == typeof define && define.amd && define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + t.split(".").pop(), [], function() {
                            return p
                        });
                for (d = 0; d < this.sc.length; d++)
                    this.sc[d].check()
            }
        }
        ,
        this.check(!0)
    }, v = e._gsDefine = function(e, t, i, n) {
        return new g(e,t,i,n)
    }
    , y = h._class = function(e, t, i) {
        return t = t || function() {}
        ,
        v(e, [], function() {
            return t
        }, i),
        t
    }
    ;
    v.globals = r;
    var T = [0, 0, 1, 1]
      , x = y("easing.Ease", function(e, t, i, n) {
        this._func = e,
        this._type = i || 0,
        this._power = n || 0,
        this._params = t ? T.concat(t) : T
    }, !0)
      , b = x.map = {}
      , w = x.register = function(e, t, i, n) {
        for (var r, o, a, s, l = t.split(","), u = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1; )
            for (o = l[u],
            r = n ? y("easing." + o, null, !0) : h.easing[o] || {},
            a = c.length; --a > -1; )
                s = c[a],
                b[o + "." + s] = b[s + o] = r[s] = e.getRatio ? e : e[s] || new e
    }
    ;
    for ((l = x.prototype)._calcEnd = !1,
    l.getRatio = function(e) {
        if (this._func)
            return this._params[0] = e,
            this._func.apply(null, this._params);
        var t = this._type
          , i = this._power
          , n = 1 === t ? 1 - e : 2 === t ? e : e < .5 ? 2 * e : 2 * (1 - e);
        return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n),
        1 === t ? 1 - n : 2 === t ? n : e < .5 ? n / 2 : 1 - n / 2
    }
    ,
    s = (a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --s > -1; )
        l = a[s] + ",Power" + s,
        w(new x(null,null,1,s), l, "easeOut", !0),
        w(new x(null,null,2,s), l, "easeIn" + (0 === s ? ",easeNone" : "")),
        w(new x(null,null,3,s), l, "easeInOut");
    b.linear = h.easing.Linear.easeIn,
    b.swing = h.easing.Quad.easeInOut;
    var S = y("events.EventDispatcher", function(e) {
        this._listeners = {},
        this._eventTarget = e || this
    });
    (l = S.prototype).addEventListener = function(e, t, i, n, r) {
        r = r || 0;
        var o, a, s = this._listeners[e], l = 0;
        for (this !== u || c || u.wake(),
        null == s && (this._listeners[e] = s = []),
        a = s.length; --a > -1; )
            (o = s[a]).c === t && o.s === i ? s.splice(a, 1) : 0 === l && o.pr < r && (l = a + 1);
        s.splice(l, 0, {
            c: t,
            s: i,
            up: n,
            pr: r
        })
    }
    ,
    l.removeEventListener = function(e, t) {
        var i, n = this._listeners[e];
        if (n)
            for (i = n.length; --i > -1; )
                if (n[i].c === t)
                    return void n.splice(i, 1)
    }
    ,
    l.dispatchEvent = function(e) {
        var t, i, n, r = this._listeners[e];
        if (r)
            for ((t = r.length) > 1 && (r = r.slice(0)),
            i = this._eventTarget; --t > -1; )
                (n = r[t]) && (n.up ? n.c.call(n.s || i, {
                    type: e,
                    target: i
                }) : n.c.call(n.s || i))
    }
    ;
    var P = e.requestAnimationFrame
      , C = e.cancelAnimationFrame
      , k = Date.now || function() {
        return (new Date).getTime()
    }
      , R = k();
    for (s = (a = ["ms", "moz", "webkit", "o"]).length; --s > -1 && !P; )
        P = e[a[s] + "RequestAnimationFrame"],
        C = e[a[s] + "CancelAnimationFrame"] || e[a[s] + "CancelRequestAnimationFrame"];
    y("Ticker", function(e, t) {
        var i, r, o, a, s, l = this, f = k(), h = !(!1 === t || !P) && "auto", p = 500, m = 33, _ = function(e) {
            var t, n, u = k() - R;
            u > p && (f += u - m),
            R += u,
            l.time = (R - f) / 1e3,
            t = l.time - s,
            (!i || t > 0 || !0 === e) && (l.frame++,
            s += t + (t >= a ? .004 : a - t),
            n = !0),
            !0 !== e && (o = r(_)),
            n && l.dispatchEvent("tick")
        };
        S.call(l),
        l.time = l.frame = 0,
        l.tick = function() {
            _(!0)
        }
        ,
        l.lagSmoothing = function(e, t) {
            if (!arguments.length)
                return p < 1e8;
            p = e || 1e8,
            m = Math.min(t, p, 0)
        }
        ,
        l.sleep = function() {
            null != o && (h && C ? C(o) : clearTimeout(o),
            r = d,
            o = null,
            l === u && (c = !1))
        }
        ,
        l.wake = function(e) {
            null !== o ? l.sleep() : e ? f += -R + (R = k()) : l.frame > 10 && (R = k() - p + 5),
            r = 0 === i ? d : h && P ? P : function(e) {
                return setTimeout(e, 1e3 * (s - l.time) + 1 | 0)
            }
            ,
            l === u && (c = !0),
            _(2)
        }
        ,
        l.fps = function(e) {
            if (!arguments.length)
                return i;
            a = 1 / ((i = e) || 60),
            s = this.time + a,
            l.wake()
        }
        ,
        l.useRAF = function(e) {
            if (!arguments.length)
                return h;
            l.sleep(),
            h = e,
            l.fps(i)
        }
        ,
        l.fps(e),
        setTimeout(function() {
            "auto" === h && l.frame < 5 && "hidden" !== (n || {}).visibilityState && l.useRAF(!1)
        }, 1500)
    }),
    (l = h.Ticker.prototype = new h.events.EventDispatcher).constructor = h.Ticker;
    var O = y("core.Animation", function(e, t) {
        if (this.vars = t = t || {},
        this._duration = this._totalDuration = e || 0,
        this._delay = Number(t.delay) || 0,
        this._timeScale = 1,
        this._active = !!t.immediateRender,
        this.data = t.data,
        this._reversed = !!t.reversed,
        Q) {
            c || u.wake();
            var i = this.vars.useFrames ? V : Q;
            i.add(this, i._time),
            this.vars.paused && this.paused(!0)
        }
    });
    u = O.ticker = new h.Ticker,
    (l = O.prototype)._dirty = l._gc = l._initted = l._paused = !1,
    l._totalTime = l._time = 0,
    l._rawPrevTime = -1,
    l._next = l._last = l._onUpdate = l._timeline = l.timeline = null,
    l._paused = !1;
    var A = function() {
        c && k() - R > 2e3 && ("hidden" !== (n || {}).visibilityState || !u.lagSmoothing()) && u.wake();
        var e = setTimeout(A, 2e3);
        e.unref && e.unref()
    };
    A(),
    l.play = function(e, t) {
        return null != e && this.seek(e, t),
        this.reversed(!1).paused(!1)
    }
    ,
    l.pause = function(e, t) {
        return null != e && this.seek(e, t),
        this.paused(!0)
    }
    ,
    l.resume = function(e, t) {
        return null != e && this.seek(e, t),
        this.paused(!1)
    }
    ,
    l.seek = function(e, t) {
        return this.totalTime(Number(e), !1 !== t)
    }
    ,
    l.restart = function(e, t) {
        return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, !1 !== t, !0)
    }
    ,
    l.reverse = function(e, t) {
        return null != e && this.seek(e || this.totalDuration(), t),
        this.reversed(!0).paused(!1)
    }
    ,
    l.render = function(e, t, i) {}
    ,
    l.invalidate = function() {
        return this._time = this._totalTime = 0,
        this._initted = this._gc = !1,
        this._rawPrevTime = -1,
        !this._gc && this.timeline || this._enabled(!0),
        this
    }
    ,
    l.isActive = function() {
        var e, t = this._timeline, i = this._startTime;
        return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime(!0)) >= i && e < i + this.totalDuration() / this._timeScale - 1e-8
    }
    ,
    l._enabled = function(e, t) {
        return c || u.wake(),
        this._gc = !e,
        this._active = this.isActive(),
        !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)),
        !1
    }
    ,
    l._kill = function(e, t) {
        return this._enabled(!1, !1)
    }
    ,
    l.kill = function(e, t) {
        return this._kill(e, t),
        this
    }
    ,
    l._uncache = function(e) {
        for (var t = e ? this : this.timeline; t; )
            t._dirty = !0,
            t = t.timeline;
        return this
    }
    ,
    l._swapSelfInParams = function(e) {
        for (var t = e.length, i = e.concat(); --t > -1; )
            "{self}" === e[t] && (i[t] = this);
        return i
    }
    ,
    l._callback = function(e) {
        var t = this.vars
          , i = t[e]
          , n = t[e + "Params"]
          , r = t[e + "Scope"] || t.callbackScope || this;
        switch (n ? n.length : 0) {
        case 0:
            i.call(r);
            break;
        case 1:
            i.call(r, n[0]);
            break;
        case 2:
            i.call(r, n[0], n[1]);
            break;
        default:
            i.apply(r, n)
        }
    }
    ,
    l.eventCallback = function(e, t, i, n) {
        if ("on" === (e || "").substr(0, 2)) {
            var r = this.vars;
            if (1 === arguments.length)
                return r[e];
            null == t ? delete r[e] : (r[e] = t,
            r[e + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i,
            r[e + "Scope"] = n),
            "onUpdate" === e && (this._onUpdate = t)
        }
        return this
    }
    ,
    l.delay = function(e) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay),
        this._delay = e,
        this) : this._delay
    }
    ,
    l.duration = function(e) {
        return arguments.length ? (this._duration = this._totalDuration = e,
        this._uncache(!0),
        this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0),
        this) : (this._dirty = !1,
        this._duration)
    }
    ,
    l.totalDuration = function(e) {
        return this._dirty = !1,
        arguments.length ? this.duration(e) : this._totalDuration
    }
    ,
    l.time = function(e, t) {
        return arguments.length ? (this._dirty && this.totalDuration(),
        this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
    }
    ,
    l.totalTime = function(e, t, i) {
        if (c || u.wake(),
        !arguments.length)
            return this._totalTime;
        if (this._timeline) {
            if (e < 0 && !i && (e += this.totalDuration()),
            this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var n = this._totalDuration
                  , r = this._timeline;
                if (e > n && !i && (e = n),
                this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - e : e) / this._timeScale,
                r._dirty || this._uncache(!1),
                r._timeline)
                    for (; r._timeline; )
                        r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0),
                        r = r._timeline
            }
            this._gc && this._enabled(!0, !1),
            this._totalTime === e && 0 !== this._duration || (L.length && J(),
            this.render(e, t, !1),
            L.length && J())
        }
        return this
    }
    ,
    l.progress = l.totalProgress = function(e, t) {
        var i = this.duration();
        return arguments.length ? this.totalTime(i * e, t) : i ? this._time / i : this.ratio
    }
    ,
    l.startTime = function(e) {
        return arguments.length ? (e !== this._startTime && (this._startTime = e,
        this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)),
        this) : this._startTime
    }
    ,
    l.endTime = function(e) {
        return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
    }
    ,
    l.timeScale = function(e) {
        if (!arguments.length)
            return this._timeScale;
        var t, i;
        for (e = e || 1e-8,
        this._timeline && this._timeline.smoothChildTiming && (i = (t = this._pauseTime) || 0 === t ? t : this._timeline.totalTime(),
        this._startTime = i - (i - this._startTime) * this._timeScale / e),
        this._timeScale = e,
        i = this.timeline; i && i.timeline; )
            i._dirty = !0,
            i.totalDuration(),
            i = i.timeline;
        return this
    }
    ,
    l.reversed = function(e) {
        return arguments.length ? (e != this._reversed && (this._reversed = e,
        this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
        this) : this._reversed
    }
    ,
    l.paused = function(e) {
        if (!arguments.length)
            return this._paused;
        var t, i, n = this._timeline;
        return e != this._paused && n && (c || e || u.wake(),
        i = (t = n.rawTime()) - this._pauseTime,
        !e && n.smoothChildTiming && (this._startTime += i,
        this._uncache(!1)),
        this._pauseTime = e ? t : null,
        this._paused = e,
        this._active = this.isActive(),
        !e && 0 !== i && this._initted && this.duration() && (t = n.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale,
        this.render(t, t === this._totalTime, !0))),
        this._gc && !e && this._enabled(!0, !1),
        this
    }
    ;
    var D = y("core.SimpleTimeline", function(e) {
        O.call(this, 0, e),
        this.autoRemoveChildren = this.smoothChildTiming = !0
    });
    (l = D.prototype = new O).constructor = D,
    l.kill()._gc = !1,
    l._first = l._last = l._recent = null,
    l._sortChildren = !1,
    l.add = l.insert = function(e, t, i, n) {
        var r, o;
        if (e._startTime = Number(t || 0) + e._delay,
        e._paused && this !== e._timeline && (e._pauseTime = this.rawTime() - (e._timeline.rawTime() - e._pauseTime)),
        e.timeline && e.timeline._remove(e, !0),
        e.timeline = e._timeline = this,
        e._gc && e._enabled(!0, !0),
        r = this._last,
        this._sortChildren)
            for (o = e._startTime; r && r._startTime > o; )
                r = r._prev;
        return r ? (e._next = r._next,
        r._next = e) : (e._next = this._first,
        this._first = e),
        e._next ? e._next._prev = e : this._last = e,
        e._prev = r,
        this._recent = e,
        this._timeline && this._uncache(!0),
        this
    }
    ,
    l._remove = function(e, t) {
        return e.timeline === this && (t || e._enabled(!1, !0),
        e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next),
        e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev),
        e._next = e._prev = e.timeline = null,
        e === this._recent && (this._recent = this._last),
        this._timeline && this._uncache(!0)),
        this
    }
    ,
    l.render = function(e, t, i) {
        var n, r = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = e; r; )
            n = r._next,
            (r._active || e >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)),
            r = n
    }
    ,
    l.rawTime = function() {
        return c || u.wake(),
        this._totalTime
    }
    ;
    var E = y("TweenLite", function(t, i, n) {
        if (O.call(this, i, n),
        this.render = E.prototype.render,
        null == t)
            throw "Cannot tween a null target.";
        this.target = t = "string" != typeof t ? t : E.selector(t) || t;
        var r, o, a, s = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType), l = this.vars.overwrite;
        if (this._overwrite = l = null == l ? G[E.defaultOverwrite] : "number" == typeof l ? l >> 0 : G[l],
        (s || t instanceof Array || t.push && m(t)) && "number" != typeof t[0])
            for (this._targets = a = p(t),
            this._propLookup = [],
            this._siblings = [],
            r = 0; r < a.length; r++)
                (o = a[r]) ? "string" != typeof o ? o.length && o !== e && o[0] && (o[0] === e || o[0].nodeType && o[0].style && !o.nodeType) ? (a.splice(r--, 1),
                this._targets = a = a.concat(p(o))) : (this._siblings[r] = K(o, this, !1),
                1 === l && this._siblings[r].length > 1 && te(o, this, null, 1, this._siblings[r])) : "string" == typeof (o = a[r--] = E.selector(o)) && a.splice(r + 1, 1) : a.splice(r--, 1);
        else
            this._propLookup = {},
            this._siblings = K(t, this, !1),
            1 === l && this._siblings.length > 1 && te(t, this, null, 1, this._siblings);
        (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-8,
        this.render(Math.min(0, -this._delay)))
    }, !0)
      , M = function(t) {
        return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
    }
      , N = function(e, t) {
        var i, n = {};
        for (i in e)
            Y[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!U[i] || U[i] && U[i]._autoCSS) || (n[i] = e[i],
            delete e[i]);
        e.css = n
    };
    (l = E.prototype = new O).constructor = E,
    l.kill()._gc = !1,
    l.ratio = 0,
    l._firstPT = l._targets = l._overwrittenProps = l._startAt = null,
    l._notifyPluginsOfEnabled = l._lazy = !1,
    E.version = "2.1.3",
    E.defaultEase = l._ease = new x(null,null,1,1),
    E.defaultOverwrite = "auto",
    E.ticker = u,
    E.autoSleep = 120,
    E.lagSmoothing = function(e, t) {
        u.lagSmoothing(e, t)
    }
    ,
    E.selector = e.$ || e.jQuery || function(t) {
        var i = e.$ || e.jQuery;
        return i ? (E.selector = i,
        i(t)) : (n || (n = e.document),
        n ? n.querySelectorAll ? n.querySelectorAll(t) : n.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t)
    }
    ;
    var L = []
      , F = {}
      , j = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
      , I = /[\+-]=-?[\.\d]/
      , z = function(e) {
        for (var t, i = this._firstPT; i; )
            t = i.blob ? 1 === e && null != this.end ? this.end : e ? this.join("") : this.start : i.c * e + i.s,
            i.m ? t = i.m.call(this._tween, t, this._target || i.t, this._tween) : t < 1e-6 && t > -1e-6 && !i.blob && (t = 0),
            i.f ? i.fp ? i.t[i.p](i.fp, t) : i.t[i.p](t) : i.t[i.p] = t,
            i = i._next
    }
      , q = function(e) {
        return (1e3 * e | 0) / 1e3 + ""
    }
      , B = function(e, t, i, n) {
        var r, o, a, s, l, u, c, f = [], h = 0, p = "", d = 0;
        for (f.start = e,
        f.end = t,
        e = f[0] = e + "",
        t = f[1] = t + "",
        i && (i(f),
        e = f[0],
        t = f[1]),
        f.length = 0,
        r = e.match(j) || [],
        o = t.match(j) || [],
        n && (n._next = null,
        n.blob = 1,
        f._firstPT = f._applyPT = n),
        l = o.length,
        s = 0; s < l; s++)
            c = o[s],
            p += (u = t.substr(h, t.indexOf(c, h) - h)) || !s ? u : ",",
            h += u.length,
            d ? d = (d + 1) % 5 : "rgba(" === u.substr(-5) && (d = 1),
            c === r[s] || r.length <= s ? p += c : (p && (f.push(p),
            p = ""),
            a = parseFloat(r[s]),
            f.push(a),
            f._firstPT = {
                _next: f._firstPT,
                t: f,
                p: f.length - 1,
                s: a,
                c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - a) || 0,
                f: 0,
                m: d && d < 4 ? Math.round : q
            }),
            h += c.length;
        return (p += t.substr(h)) && f.push(p),
        f.setRatio = z,
        I.test(t) && (f.end = null),
        f
    }
      , H = function(e, t, i, n, r, o, a, s, l) {
        "function" == typeof n && (n = n(l || 0, e));
        var u = typeof e[t]
          , c = "function" !== u ? "" : t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3)
          , f = "get" !== i ? i : c ? a ? e[c](a) : e[c]() : e[t]
          , h = "string" == typeof n && "=" === n.charAt(1)
          , p = {
            t: e,
            p: t,
            s: f,
            f: "function" === u,
            pg: 0,
            n: r || t,
            m: o ? "function" == typeof o ? o : Math.round : 0,
            pr: 0,
            c: h ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - f || 0
        };
        if (("number" != typeof f || "number" != typeof n && !h) && (a || isNaN(f) || !h && isNaN(n) || "boolean" == typeof f || "boolean" == typeof n ? (p.fp = a,
        p = {
            t: B(f, h ? parseFloat(p.s) + p.c + (p.s + "").replace(/[0-9\-\.]/g, "") : n, s || E.defaultStringFilter, p),
            p: "setRatio",
            s: 0,
            c: 1,
            f: 2,
            pg: 0,
            n: r || t,
            pr: 0,
            m: 0
        }) : (p.s = parseFloat(f),
        h || (p.c = parseFloat(n) - p.s || 0))),
        p.c)
            return (p._next = this._firstPT) && (p._next._prev = p),
            this._firstPT = p,
            p
    }
      , X = E._internals = {
        isArray: m,
        isSelector: M,
        lazyTweens: L,
        blobDif: B
    }
      , U = E._plugins = {}
      , W = X.tweenLookup = {}
      , $ = 0
      , Y = X.reservedProps = {
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
        autoCSS: 1,
        lazy: 1,
        onOverwrite: 1,
        callbackScope: 1,
        stringFilter: 1,
        id: 1,
        yoyoEase: 1,
        stagger: 1
    }
      , G = {
        none: 0,
        all: 1,
        auto: 2,
        concurrent: 3,
        allOnStart: 4,
        preexisting: 5,
        true: 1,
        false: 0
    }
      , V = O._rootFramesTimeline = new D
      , Q = O._rootTimeline = new D
      , Z = 30
      , J = X.lazyRender = function() {
        var e, t, i = L.length;
        for (F = {},
        e = 0; e < i; e++)
            (t = L[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0),
            t._lazy = !1);
        L.length = 0
    }
    ;
    Q._startTime = u.time,
    V._startTime = u.frame,
    Q._active = V._active = !0,
    setTimeout(J, 1),
    O._updateRoot = E.render = function() {
        var e, t, i;
        if (L.length && J(),
        Q.render((u.time - Q._startTime) * Q._timeScale, !1, !1),
        V.render((u.frame - V._startTime) * V._timeScale, !1, !1),
        L.length && J(),
        u.frame >= Z) {
            Z = u.frame + (parseInt(E.autoSleep, 10) || 120);
            for (i in W) {
                for (e = (t = W[i].tweens).length; --e > -1; )
                    t[e]._gc && t.splice(e, 1);
                0 === t.length && delete W[i]
            }
            if ((!(i = Q._first) || i._paused) && E.autoSleep && !V._first && 1 === u._listeners.tick.length) {
                for (; i && i._paused; )
                    i = i._next;
                i || u.sleep()
            }
        }
    }
    ,
    u.addEventListener("tick", O._updateRoot);
    var K = function(e, t, i) {
        var n, r, o = e._gsTweenID;
        if (W[o || (e._gsTweenID = o = "t" + $++)] || (W[o] = {
            target: e,
            tweens: []
        }),
        t && (n = W[o].tweens,
        n[r = n.length] = t,
        i))
            for (; --r > -1; )
                n[r] === t && n.splice(r, 1);
        return W[o].tweens
    }
      , ee = function(e, t, i, n) {
        var r, o, a = e.vars.onOverwrite;
        return a && (r = a(e, t, i, n)),
        (a = E.onOverwrite) && (o = a(e, t, i, n)),
        !1 !== r && !1 !== o
    }
      , te = function(e, t, i, n, r) {
        var o, a, s, l;
        if (1 === n || n >= 4) {
            for (l = r.length,
            o = 0; o < l; o++)
                if ((s = r[o]) !== t)
                    s._gc || s._kill(null, e, t) && (a = !0);
                else if (5 === n)
                    break;
            return a
        }
        var u, c = t._startTime + 1e-8, f = [], h = 0, p = 0 === t._duration;
        for (o = r.length; --o > -1; )
            (s = r[o]) === t || s._gc || s._paused || (s._timeline !== t._timeline ? (u = u || ie(t, 0, p),
            0 === ie(s, u, p) && (f[h++] = s)) : s._startTime <= c && s._startTime + s.totalDuration() / s._timeScale > c && ((p || !s._initted) && c - s._startTime <= 2e-8 || (f[h++] = s)));
        for (o = h; --o > -1; )
            if (s = f[o],
            l = s._firstPT,
            2 === n && s._kill(i, e, t) && (a = !0),
            2 !== n || !s._firstPT && s._initted && l) {
                if (2 !== n && !ee(s, t))
                    continue;
                s._enabled(!1, !1) && (a = !0)
            }
        return a
    }
      , ie = function(e, t, i) {
        for (var n = e._timeline, r = n._timeScale, o = e._startTime; n._timeline; ) {
            if (o += n._startTime,
            r *= n._timeScale,
            n._paused)
                return -100;
            n = n._timeline
        }
        return o /= r,
        o > t ? o - t : i && o === t || !e._initted && o - t < 2e-8 ? 1e-8 : (o += e.totalDuration() / e._timeScale / r) > t + 1e-8 ? 0 : o - t - 1e-8
    };
    l._init = function() {
        var e, t, i, n, r, o, a = this.vars, s = this._overwrittenProps, l = this._duration, u = !!a.immediateRender, c = a.ease, f = this._startAt;
        if (a.startAt) {
            f && (f.render(-1, !0),
            f.kill()),
            r = {};
            for (n in a.startAt)
                r[n] = a.startAt[n];
            if (r.data = "isStart",
            r.overwrite = !1,
            r.immediateRender = !0,
            r.lazy = u && !1 !== a.lazy,
            r.startAt = r.delay = null,
            r.onUpdate = a.onUpdate,
            r.onUpdateParams = a.onUpdateParams,
            r.onUpdateScope = a.onUpdateScope || a.callbackScope || this,
            this._startAt = E.to(this.target || {}, 0, r),
            u)
                if (this._time > 0)
                    this._startAt = null;
                else if (0 !== l)
                    return
        } else if (a.runBackwards && 0 !== l)
            if (f)
                f.render(-1, !0),
                f.kill(),
                this._startAt = null;
            else {
                0 !== this._time && (u = !1),
                i = {};
                for (n in a)
                    Y[n] && "autoCSS" !== n || (i[n] = a[n]);
                if (i.overwrite = 0,
                i.data = "isFromStart",
                i.lazy = u && !1 !== a.lazy,
                i.immediateRender = u,
                this._startAt = E.to(this.target, 0, i),
                u) {
                    if (0 === this._time)
                        return
                } else
                    this._startAt._init(),
                    this._startAt._enabled(!1),
                    this.vars.immediateRender && (this._startAt = null)
            }
        if (this._ease = c = c ? c instanceof x ? c : "function" == typeof c ? new x(c,a.easeParams) : b[c] || E.defaultEase : E.defaultEase,
        a.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, a.easeParams)),
        this._easeType = this._ease._type,
        this._easePower = this._ease._power,
        this._firstPT = null,
        this._targets)
            for (o = this._targets.length,
            e = 0; e < o; e++)
                this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], s ? s[e] : null, e) && (t = !0);
        else
            t = this._initProps(this.target, this._propLookup, this._siblings, s, 0);
        if (t && E._onPluginEvent("_onInitAllProps", this),
        s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
        a.runBackwards)
            for (i = this._firstPT; i; )
                i.s += i.c,
                i.c = -i.c,
                i = i._next;
        this._onUpdate = a.onUpdate,
        this._initted = !0
    }
    ,
    l._initProps = function(t, i, n, r, o) {
        var a, s, l, u, c, f;
        if (null == t)
            return !1;
        F[t._gsTweenID] && J(),
        this.vars.css || t.style && t !== e && t.nodeType && U.css && !1 !== this.vars.autoCSS && N(this.vars, t);
        for (a in this.vars)
            if (f = this.vars[a],
            Y[a])
                f && (f instanceof Array || f.push && m(f)) && -1 !== f.join("").indexOf("{self}") && (this.vars[a] = f = this._swapSelfInParams(f, this));
            else if (U[a] && (u = new U[a])._onInitTween(t, this.vars[a], this, o)) {
                for (this._firstPT = c = {
                    _next: this._firstPT,
                    t: u,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: a,
                    pg: 1,
                    pr: u._priority,
                    m: 0
                },
                s = u._overwriteProps.length; --s > -1; )
                    i[u._overwriteProps[s]] = this._firstPT;
                (u._priority || u._onInitAllProps) && (l = !0),
                (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0),
                c._next && (c._next._prev = c)
            } else
                i[a] = H.call(this, t, a, "get", f, a, 0, null, this.vars.stringFilter, o);
        return r && this._kill(r, t) ? this._initProps(t, i, n, r, o) : this._overwrite > 1 && this._firstPT && n.length > 1 && te(t, this, i, this._overwrite, n) ? (this._kill(i, t),
        this._initProps(t, i, n, r, o)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (F[t._gsTweenID] = !0),
        l)
    }
    ,
    l.render = function(e, t, i) {
        var n, r, o, a, s = this, l = s._time, u = s._duration, c = s._rawPrevTime;
        if (e >= u - 1e-8 && e >= 0)
            s._totalTime = s._time = u,
            s.ratio = s._ease._calcEnd ? s._ease.getRatio(1) : 1,
            s._reversed || (n = !0,
            r = "onComplete",
            i = i || s._timeline.autoRemoveChildren),
            0 === u && (s._initted || !s.vars.lazy || i) && (s._startTime === s._timeline._duration && (e = 0),
            (c < 0 || e <= 0 && e >= -1e-8 || 1e-8 === c && "isPause" !== s.data) && c !== e && (i = !0,
            c > 1e-8 && (r = "onReverseComplete")),
            s._rawPrevTime = a = !t || e || c === e ? e : 1e-8);
        else if (e < 1e-8)
            s._totalTime = s._time = 0,
            s.ratio = s._ease._calcEnd ? s._ease.getRatio(0) : 0,
            (0 !== l || 0 === u && c > 0) && (r = "onReverseComplete",
            n = s._reversed),
            e > -1e-8 ? e = 0 : e < 0 && (s._active = !1,
            0 === u && (s._initted || !s.vars.lazy || i) && (c >= 0 && (1e-8 !== c || "isPause" !== s.data) && (i = !0),
            s._rawPrevTime = a = !t || e || c === e ? e : 1e-8)),
            (!s._initted || s._startAt && s._startAt.progress()) && (i = !0);
        else if (s._totalTime = s._time = e,
        s._easeType) {
            var f = e / u
              , h = s._easeType
              , p = s._easePower;
            (1 === h || 3 === h && f >= .5) && (f = 1 - f),
            3 === h && (f *= 2),
            1 === p ? f *= f : 2 === p ? f *= f * f : 3 === p ? f *= f * f * f : 4 === p && (f *= f * f * f * f),
            s.ratio = 1 === h ? 1 - f : 2 === h ? f : e / u < .5 ? f / 2 : 1 - f / 2
        } else
            s.ratio = s._ease.getRatio(e / u);
        if (s._time !== l || i) {
            if (!s._initted) {
                if (s._init(),
                !s._initted || s._gc)
                    return;
                if (!i && s._firstPT && (!1 !== s.vars.lazy && s._duration || s.vars.lazy && !s._duration))
                    return s._time = s._totalTime = l,
                    s._rawPrevTime = c,
                    L.push(s),
                    void (s._lazy = [e, t]);
                s._time && !n ? s.ratio = s._ease.getRatio(s._time / u) : n && s._ease._calcEnd && (s.ratio = s._ease.getRatio(0 === s._time ? 0 : 1))
            }
            for (!1 !== s._lazy && (s._lazy = !1),
            s._active || !s._paused && s._time !== l && e >= 0 && (s._active = !0),
            0 === l && (s._startAt && (e >= 0 ? s._startAt.render(e, !0, i) : r || (r = "_dummyGS")),
            s.vars.onStart && (0 === s._time && 0 !== u || t || s._callback("onStart"))),
            o = s._firstPT; o; )
                o.f ? o.t[o.p](o.c * s.ratio + o.s) : o.t[o.p] = o.c * s.ratio + o.s,
                o = o._next;
            s._onUpdate && (e < 0 && s._startAt && -1e-4 !== e && s._startAt.render(e, !0, i),
            t || (s._time !== l || n || i) && s._callback("onUpdate")),
            r && (s._gc && !i || (e < 0 && s._startAt && !s._onUpdate && -1e-4 !== e && s._startAt.render(e, !0, i),
            n && (s._timeline.autoRemoveChildren && s._enabled(!1, !1),
            s._active = !1),
            !t && s.vars[r] && s._callback(r),
            0 === u && 1e-8 === s._rawPrevTime && 1e-8 !== a && (s._rawPrevTime = 0)))
        }
    }
    ,
    l._kill = function(e, t, i) {
        if ("all" === e && (e = null),
        null == e && (null == t || t === this.target))
            return this._lazy = !1,
            this._enabled(!1, !1);
        t = "string" != typeof t ? t || this._targets || this.target : E.selector(t) || t;
        var n, r, o, a, s, l, u, c, f, h = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline, p = this._firstPT;
        if ((m(t) || M(t)) && "number" != typeof t[0])
            for (n = t.length; --n > -1; )
                this._kill(e, t[n], i) && (l = !0);
        else {
            if (this._targets) {
                for (n = this._targets.length; --n > -1; )
                    if (t === this._targets[n]) {
                        s = this._propLookup[n] || {},
                        this._overwrittenProps = this._overwrittenProps || [],
                        r = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all";
                        break
                    }
            } else {
                if (t !== this.target)
                    return !1;
                s = this._propLookup,
                r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
            }
            if (s) {
                if (u = e || s,
                c = e !== r && "all" !== r && e !== s && ("object" != typeof e || !e._tempKill),
                i && (E.onOverwrite || this.vars.onOverwrite)) {
                    for (o in u)
                        s[o] && (f || (f = []),
                        f.push(o));
                    if ((f || !e) && !ee(this, i, t, f))
                        return !1
                }
                for (o in u)
                    (a = s[o]) && (h && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s,
                    l = !0),
                    a.pg && a.t._kill(u) && (l = !0),
                    a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next),
                    a._next && (a._next._prev = a._prev),
                    a._next = a._prev = null),
                    delete s[o]),
                    c && (r[o] = 1);
                !this._firstPT && this._initted && p && this._enabled(!1, !1)
            }
        }
        return l
    }
    ,
    l.invalidate = function() {
        this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this);
        var e = this._time;
        return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
        this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
        this._propLookup = this._targets ? {} : [],
        O.prototype.invalidate.call(this),
        this.vars.immediateRender && (this._time = -1e-8,
        this.render(e, !1, !1 !== this.vars.lazy)),
        this
    }
    ,
    l._enabled = function(e, t) {
        if (c || u.wake(),
        e && this._gc) {
            var i, n = this._targets;
            if (n)
                for (i = n.length; --i > -1; )
                    this._siblings[i] = K(n[i], this, !0);
            else
                this._siblings = K(this.target, this, !0)
        }
        return O.prototype._enabled.call(this, e, t),
        !(!this._notifyPluginsOfEnabled || !this._firstPT) && E._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
    }
    ,
    E.to = function(e, t, i) {
        return new E(e,t,i)
    }
    ,
    E.from = function(e, t, i) {
        return i.runBackwards = !0,
        i.immediateRender = 0 != i.immediateRender,
        new E(e,t,i)
    }
    ,
    E.fromTo = function(e, t, i, n) {
        return n.startAt = i,
        n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
        new E(e,t,n)
    }
    ,
    E.delayedCall = function(e, t, i, n, r) {
        return new E(t,0,{
            delay: e,
            onComplete: t,
            onCompleteParams: i,
            callbackScope: n,
            onReverseComplete: t,
            onReverseCompleteParams: i,
            immediateRender: !1,
            lazy: !1,
            useFrames: r,
            overwrite: 0
        })
    }
    ,
    E.set = function(e, t) {
        return new E(e,0,t)
    }
    ,
    E.getTweensOf = function(e, t) {
        if (null == e)
            return [];
        e = "string" != typeof e ? e : E.selector(e) || e;
        var i, n, r, o;
        if ((m(e) || M(e)) && "number" != typeof e[0]) {
            for (i = e.length,
            n = []; --i > -1; )
                n = n.concat(E.getTweensOf(e[i], t));
            for (i = n.length; --i > -1; )
                for (o = n[i],
                r = i; --r > -1; )
                    o === n[r] && n.splice(i, 1)
        } else if (e._gsTweenID)
            for (i = (n = K(e).concat()).length; --i > -1; )
                (n[i]._gc || t && !n[i].isActive()) && n.splice(i, 1);
        return n || []
    }
    ,
    E.killTweensOf = E.killDelayedCallsTo = function(e, t, i) {
        "object" == typeof t && (i = t,
        t = !1);
        for (var n = E.getTweensOf(e, t), r = n.length; --r > -1; )
            n[r]._kill(i, e)
    }
    ;
    var ne = y("plugins.TweenPlugin", function(e, t) {
        this._overwriteProps = (e || "").split(","),
        this._propName = this._overwriteProps[0],
        this._priority = t || 0,
        this._super = ne.prototype
    }, !0);
    if (l = ne.prototype,
    ne.version = "1.19.0",
    ne.API = 2,
    l._firstPT = null,
    l._addTween = H,
    l.setRatio = z,
    l._kill = function(e) {
        var t, i = this._overwriteProps, n = this._firstPT;
        if (null != e[this._propName])
            this._overwriteProps = [];
        else
            for (t = i.length; --t > -1; )
                null != e[i[t]] && i.splice(t, 1);
        for (; n; )
            null != e[n.n] && (n._next && (n._next._prev = n._prev),
            n._prev ? (n._prev._next = n._next,
            n._prev = null) : this._firstPT === n && (this._firstPT = n._next)),
            n = n._next;
        return !1
    }
    ,
    l._mod = l._roundProps = function(e) {
        for (var t, i = this._firstPT; i; )
            (t = e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")]) && "function" == typeof t && (2 === i.f ? i.t._applyPT.m = t : i.m = t),
            i = i._next
    }
    ,
    E._onPluginEvent = function(e, t) {
        var i, n, r, o, a, s = t._firstPT;
        if ("_onInitAllProps" === e) {
            for (; s; ) {
                for (a = s._next,
                n = r; n && n.pr > s.pr; )
                    n = n._next;
                (s._prev = n ? n._prev : o) ? s._prev._next = s : r = s,
                (s._next = n) ? n._prev = s : o = s,
                s = a
            }
            s = t._firstPT = r
        }
        for (; s; )
            s.pg && "function" == typeof s.t[e] && s.t[e]() && (i = !0),
            s = s._next;
        return i
    }
    ,
    ne.activate = function(e) {
        for (var t = e.length; --t > -1; )
            e[t].API === ne.API && (U[(new e[t])._propName] = e[t]);
        return !0
    }
    ,
    v.plugin = function(e) {
        if (!(e && e.propName && e.init && e.API))
            throw "illegal plugin definition.";
        var t, i = e.propName, n = e.priority || 0, r = e.overwriteProps, o = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_mod",
            mod: "_mod",
            initAll: "_onInitAllProps"
        }, a = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
            ne.call(this, i, n),
            this._overwriteProps = r || []
        }, !0 === e.global), s = a.prototype = new ne(i);
        s.constructor = a,
        a.API = e.API;
        for (t in o)
            "function" == typeof e[t] && (s[o[t]] = e[t]);
        return a.version = e.version,
        ne.activate([a]),
        a
    }
    ,
    a = e._gsQueue) {
        for (s = 0; s < a.length; s++)
            a[s]();
        for (l in _)
            _[l].func || e.console.log("GSAP encountered missing dependency: " + l)
    }
    c = !1
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window),
function(e) {
    e.fn.wavify = function(e) {
        if ("function" != typeof wavify)
            throw console.error("wavify is not a function. Be sure to include 'wavify.js' before you include 'jquery.wavify.js'."),
            "Error: wavify is not a function";
        return wavify(this, e)
    }
}(jQuery),
function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
}(this, function() {
    "use strict";
    var e = function() {
        n.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")
    };
    e.version = "2.0.7",
    window.addEventListener("mousewheel", function() {});
    e.Controller = function(i) {
        var r, o, a = "ScrollMagic.Controller", s = t.defaults, l = this, u = n.extend({}, s, i), c = [], f = !1, h = 0, p = "PAUSED", d = !0, m = 0, _ = !0, g = function() {
            u.refreshInterval > 0 && (o = window.setTimeout(S, u.refreshInterval))
        }, v = function() {
            return u.vertical ? n.get.scrollTop(u.container) : n.get.scrollLeft(u.container)
        }, y = function() {
            return u.vertical ? n.get.height(u.container) : n.get.width(u.container)
        }, T = this._setScrollPos = function(e) {
            u.vertical ? d ? window.scrollTo(n.get.scrollLeft(), e) : u.container.scrollTop = e : d ? window.scrollTo(e, n.get.scrollTop()) : u.container.scrollLeft = e
        }
        , x = function() {
            if (_ && f) {
                var e = n.type.Array(f) ? f : c.slice(0);
                f = !1;
                var t = h
                  , i = (h = l.scrollPos()) - t;
                0 !== i && (p = i > 0 ? "FORWARD" : "REVERSE"),
                "REVERSE" === p && e.reverse(),
                e.forEach(function(t, i) {
                    P(3, "updating Scene " + (i + 1) + "/" + e.length + " (" + c.length + " total)"),
                    t.update(!0)
                }),
                0 === e.length && u.loglevel >= 3 && P(3, "updating 0 Scenes (nothing added to controller)")
            }
        }, b = function() {
            r = n.rAF(x)
        }, w = function(e) {
            P(3, "event fired causing an update:", e.type),
            "resize" == e.type && (m = y(),
            p = "PAUSED"),
            !0 !== f && (f = !0,
            b())
        }, S = function() {
            if (!d && m != y()) {
                var e;
                try {
                    e = new Event("resize",{
                        bubbles: !1,
                        cancelable: !1
                    })
                } catch (t) {
                    (e = document.createEvent("Event")).initEvent("resize", !1, !1)
                }
                u.container.dispatchEvent(e)
            }
            c.forEach(function(e, t) {
                e.refresh()
            }),
            g()
        }, P = this._log = function(e, t) {
            u.loglevel >= e && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"),
            n.log.apply(window, arguments))
        }
        ;
        this._options = u;
        var C = function(e) {
            if (e.length <= 1)
                return e;
            var t = e.slice(0);
            return t.sort(function(e, t) {
                return e.scrollOffset() > t.scrollOffset() ? 1 : -1
            }),
            t
        };
        return this.addScene = function(t) {
            if (n.type.Array(t))
                t.forEach(function(e, t) {
                    l.addScene(e)
                });
            else if (t instanceof e.Scene) {
                if (t.controller() !== l)
                    t.addTo(l);
                else if (c.indexOf(t) < 0) {
                    c.push(t),
                    c = C(c),
                    t.on("shift.controller_sort", function() {
                        c = C(c)
                    });
                    for (var i in u.globalSceneOptions)
                        t[i] && t[i].call(t, u.globalSceneOptions[i]);
                    P(3, "adding Scene (now " + c.length + " total)")
                }
            } else
                P(1, "ERROR: invalid argument supplied for '.addScene()'");
            return l
        }
        ,
        this.removeScene = function(e) {
            if (n.type.Array(e))
                e.forEach(function(e, t) {
                    l.removeScene(e)
                });
            else {
                var t = c.indexOf(e);
                t > -1 && (e.off("shift.controller_sort"),
                c.splice(t, 1),
                P(3, "removing Scene (now " + c.length + " left)"),
                e.remove())
            }
            return l
        }
        ,
        this.updateScene = function(t, i) {
            return n.type.Array(t) ? t.forEach(function(e, t) {
                l.updateScene(e, i)
            }) : i ? t.update(!0) : !0 !== f && t instanceof e.Scene && (-1 == (f = f || []).indexOf(t) && f.push(t),
            f = C(f),
            b()),
            l
        }
        ,
        this.update = function(e) {
            return w({
                type: "resize"
            }),
            e && x(),
            l
        }
        ,
        this.scrollTo = function(t, i) {
            if (n.type.Number(t))
                T.call(u.container, t, i);
            else if (t instanceof e.Scene)
                t.controller() === l ? l.scrollTo(t.scrollOffset(), i) : P(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", t);
            else if (n.type.Function(t))
                T = t;
            else {
                var r = n.get.elements(t)[0];
                if (r) {
                    for (; r.parentNode.hasAttribute("data-scrollmagic-pin-spacer"); )
                        r = r.parentNode;
                    var o = u.vertical ? "top" : "left"
                      , a = n.get.offset(u.container)
                      , s = n.get.offset(r);
                    d || (a[o] -= l.scrollPos()),
                    l.scrollTo(s[o] - a[o], i)
                } else
                    P(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", t)
            }
            return l
        }
        ,
        this.scrollPos = function(e) {
            return arguments.length ? (n.type.Function(e) ? v = e : P(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."),
            l) : v.call(l)
        }
        ,
        this.info = function(e) {
            var t = {
                size: m,
                vertical: u.vertical,
                scrollPos: h,
                scrollDirection: p,
                container: u.container,
                isDocument: d
            };
            return arguments.length ? void 0 !== t[e] ? t[e] : void P(1, 'ERROR: option "' + e + '" is not available') : t
        }
        ,
        this.loglevel = function(e) {
            return arguments.length ? (u.loglevel != e && (u.loglevel = e),
            l) : u.loglevel
        }
        ,
        this.enabled = function(e) {
            return arguments.length ? (_ != e && (_ = !!e,
            l.updateScene(c, !0)),
            l) : _
        }
        ,
        this.destroy = function(e) {
            window.clearTimeout(o);
            for (var t = c.length; t--; )
                c[t].destroy(e);
            return u.container.removeEventListener("resize", w),
            u.container.removeEventListener("scroll", w),
            n.cAF(r),
            P(3, "destroyed " + a + " (reset: " + (e ? "true" : "false") + ")"),
            null
        }
        ,
        function() {
            for (var t in u)
                s.hasOwnProperty(t) || (P(2, 'WARNING: Unknown option "' + t + '"'),
                delete u[t]);
            if (u.container = n.get.elements(u.container)[0],
            !u.container)
                throw P(1, "ERROR creating object " + a + ": No valid scroll container supplied"),
                a + " init failed.";
            (d = u.container === window || u.container === document.body || !document.body.contains(u.container)) && (u.container = window),
            m = y(),
            u.container.addEventListener("resize", w),
            u.container.addEventListener("scroll", w);
            var i = parseInt(u.refreshInterval, 10);
            u.refreshInterval = n.type.Number(i) ? i : s.refreshInterval,
            g(),
            P(3, "added new " + a + " controller (v" + e.version + ")")
        }(),
        l
    }
    ;
    var t = {
        defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
        }
    };
    e.Controller.addOption = function(e, i) {
        t.defaults[e] = i
    }
    ,
    e.Controller.extend = function(t) {
        var i = this;
        e.Controller = function() {
            return i.apply(this, arguments),
            this.$super = n.extend({}, this),
            t.apply(this, arguments) || this
        }
        ,
        n.extend(e.Controller, i),
        e.Controller.prototype = i.prototype,
        e.Controller.prototype.constructor = e.Controller
    }
    ,
    e.Scene = function(t) {
        var r, o, a = "ScrollMagic.Scene", s = i.defaults, l = this, u = n.extend({}, s, t), c = "BEFORE", f = 0, h = {
            start: 0,
            end: 0
        }, p = 0, d = !0, m = {};
        this.on = function(e, t) {
            return n.type.Function(t) ? (e = e.trim().split(" ")).forEach(function(e) {
                var i = e.split(".")
                  , n = i[0]
                  , r = i[1];
                "*" != n && (m[n] || (m[n] = []),
                m[n].push({
                    namespace: r || "",
                    callback: t
                }))
            }) : _(1, "ERROR when calling '.on()': Supplied callback for '" + e + "' is not a valid function!"),
            l
        }
        ,
        this.off = function(e, t) {
            return e ? ((e = e.trim().split(" ")).forEach(function(e, i) {
                var n = e.split(".")
                  , r = n[0]
                  , o = n[1] || "";
                ("*" === r ? Object.keys(m) : [r]).forEach(function(e) {
                    for (var i = m[e] || [], n = i.length; n--; ) {
                        var r = i[n];
                        !r || o !== r.namespace && "*" !== o || t && t != r.callback || i.splice(n, 1)
                    }
                    i.length || delete m[e]
                })
            }),
            l) : (_(1, "ERROR: Invalid event name supplied."),
            l)
        }
        ,
        this.trigger = function(t, i) {
            if (t) {
                var n = t.trim().split(".")
                  , r = n[0]
                  , o = n[1]
                  , a = m[r];
                _(3, "event fired:", r, i ? "->" : "", i || ""),
                a && a.forEach(function(t, n) {
                    o && o !== t.namespace || t.callback.call(l, new e.Event(r,t.namespace,l,i))
                })
            } else
                _(1, "ERROR: Invalid event name supplied.");
            return l
        }
        ,
        l.on("change.internal", function(e) {
            "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? y() : "reverse" === e.what && l.update())
        }).on("shift.internal", function(e) {
            g(),
            l.update()
        });
        var _ = this._log = function(e, t) {
            u.loglevel >= e && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"),
            n.log.apply(window, arguments))
        }
        ;
        this.addTo = function(t) {
            return t instanceof e.Controller ? o != t && (o && o.removeScene(l),
            o = t,
            b(),
            v(!0),
            y(!0),
            g(),
            o.info("container").addEventListener("resize", T),
            t.addScene(l),
            l.trigger("add", {
                controller: o
            }),
            _(3, "added " + a + " to controller"),
            l.update()) : _(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),
            l
        }
        ,
        this.enabled = function(e) {
            return arguments.length ? (d != e && (d = !!e,
            l.update(!0)),
            l) : d
        }
        ,
        this.remove = function() {
            if (o) {
                o.info("container").removeEventListener("resize", T);
                var e = o;
                o = void 0,
                e.removeScene(l),
                l.trigger("remove"),
                _(3, "removed " + a + " from controller")
            }
            return l
        }
        ,
        this.destroy = function(e) {
            return l.trigger("destroy", {
                reset: e
            }),
            l.remove(),
            l.off("*.*"),
            _(3, "destroyed " + a + " (reset: " + (e ? "true" : "false") + ")"),
            null
        }
        ,
        this.update = function(e) {
            if (o)
                if (e)
                    if (o.enabled() && d) {
                        var t, i = o.info("scrollPos");
                        t = u.duration > 0 ? (i - h.start) / (h.end - h.start) : i >= h.start ? 1 : 0,
                        l.trigger("update", {
                            startPos: h.start,
                            endPos: h.end,
                            scrollPos: i
                        }),
                        l.progress(t)
                    } else
                        P && "DURING" === c && k(!0);
                else
                    o.updateScene(l, !1);
            return l
        }
        ,
        this.refresh = function() {
            return v(),
            y(),
            l
        }
        ,
        this.progress = function(e) {
            if (arguments.length) {
                var t = !1
                  , i = c
                  , n = o ? o.info("scrollDirection") : "PAUSED"
                  , r = u.reverse || e >= f;
                if (0 === u.duration ? (t = f != e,
                c = 0 === (f = e < 1 && r ? 0 : 1) ? "BEFORE" : "DURING") : e < 0 && "BEFORE" !== c && r ? (f = 0,
                c = "BEFORE",
                t = !0) : e >= 0 && e < 1 && r ? (f = e,
                c = "DURING",
                t = !0) : e >= 1 && "AFTER" !== c ? (f = 1,
                c = "AFTER",
                t = !0) : "DURING" !== c || r || k(),
                t) {
                    var a = {
                        progress: f,
                        state: c,
                        scrollDirection: n
                    }
                      , s = c != i
                      , h = function(e) {
                        l.trigger(e, a)
                    };
                    s && "DURING" !== i && (h("enter"),
                    h("BEFORE" === i ? "start" : "end")),
                    h("progress"),
                    s && "DURING" !== c && (h("BEFORE" === c ? "start" : "end"),
                    h("leave"))
                }
                return l
            }
            return f
        }
        ;
        var g = function() {
            h = {
                start: p + u.offset
            },
            o && u.triggerElement && (h.start -= o.info("size") * u.triggerHook),
            h.end = h.start + u.duration
        }
          , v = function(e) {
            if (r) {
                w("duration", r.call(l)) && !e && (l.trigger("change", {
                    what: "duration",
                    newval: u.duration
                }),
                l.trigger("shift", {
                    reason: "duration"
                }))
            }
        }
          , y = function(e) {
            var t = 0
              , i = u.triggerElement;
            if (o && (i || p > 0)) {
                if (i)
                    if (i.parentNode) {
                        for (var r = o.info(), a = n.get.offset(r.container), s = r.vertical ? "top" : "left"; i.parentNode.hasAttribute("data-scrollmagic-pin-spacer"); )
                            i = i.parentNode;
                        var c = n.get.offset(i);
                        r.isDocument || (a[s] -= o.scrollPos()),
                        t = c[s] - a[s]
                    } else
                        _(2, "WARNING: triggerElement was removed from DOM and will be reset to", void 0),
                        l.triggerElement(void 0);
                var f = t != p;
                p = t,
                f && !e && l.trigger("shift", {
                    reason: "triggerElementPosition"
                })
            }
        }
          , T = function(e) {
            u.triggerHook > 0 && l.trigger("shift", {
                reason: "containerResize"
            })
        }
          , x = n.extend(i.validate, {
            duration: function(e) {
                if (n.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                    var t = parseFloat(e) / 100;
                    e = function() {
                        return o ? o.info("size") * t : 0
                    }
                }
                if (n.type.Function(e)) {
                    r = e;
                    try {
                        e = parseFloat(r.call(l))
                    } catch (t) {
                        e = -1
                    }
                }
                if (e = parseFloat(e),
                !n.type.Number(e) || e < 0)
                    throw r ? (r = void 0,
                    ['Invalid return value of supplied function for option "duration":', e]) : ['Invalid value for option "duration":', e];
                return e
            }
        })
          , b = function(e) {
            (e = arguments.length ? [e] : Object.keys(x)).forEach(function(e, t) {
                var i;
                if (x[e])
                    try {
                        i = x[e](u[e])
                    } catch (t) {
                        i = s[e];
                        var r = n.type.String(t) ? [t] : t;
                        n.type.Array(r) ? (r[0] = "ERROR: " + r[0],
                        r.unshift(1),
                        _.apply(this, r)) : _(1, "ERROR: Problem executing validation callback for option '" + e + "':", t.message)
                    } finally {
                        u[e] = i
                    }
            })
        }
          , w = function(e, t) {
            var i = !1
              , n = u[e];
            return u[e] != t && (u[e] = t,
            b(e),
            i = n != u[e]),
            i
        }
          , S = function(e) {
            l[e] || (l[e] = function(t) {
                return arguments.length ? ("duration" === e && (r = void 0),
                w(e, t) && (l.trigger("change", {
                    what: e,
                    newval: u[e]
                }),
                i.shifts.indexOf(e) > -1 && l.trigger("shift", {
                    reason: e
                })),
                l) : u[e]
            }
            )
        };
        this.controller = function() {
            return o
        }
        ,
        this.state = function() {
            return c
        }
        ,
        this.scrollOffset = function() {
            return h.start
        }
        ,
        this.triggerPosition = function() {
            var e = u.offset;
            return o && (u.triggerElement ? e += p : e += o.info("size") * l.triggerHook()),
            e
        }
        ;
        var P, C;
        l.on("shift.internal", function(e) {
            var t = "duration" === e.reason;
            ("AFTER" === c && t || "DURING" === c && 0 === u.duration) && k(),
            t && R()
        }).on("progress.internal", function(e) {
            k()
        }).on("add.internal", function(e) {
            R()
        }).on("destroy.internal", function(e) {
            l.removePin(e.reset)
        });
        var k = function(e) {
            if (P && o) {
                var t = o.info()
                  , i = C.spacer.firstChild;
                if (e || "DURING" !== c) {
                    var r = {
                        position: C.inFlow ? "relative" : "absolute",
                        top: 0,
                        left: 0
                    }
                      , a = n.css(i, "position") != r.position;
                    C.pushFollowers ? u.duration > 0 && ("AFTER" === c && 0 === parseFloat(n.css(C.spacer, "padding-top")) ? a = !0 : "BEFORE" === c && 0 === parseFloat(n.css(C.spacer, "padding-bottom")) && (a = !0)) : r[t.vertical ? "top" : "left"] = u.duration * f,
                    n.css(i, r),
                    a && R()
                } else {
                    "fixed" != n.css(i, "position") && (n.css(i, {
                        position: "fixed"
                    }),
                    R());
                    var s = n.get.offset(C.spacer, !0)
                      , l = u.reverse || 0 === u.duration ? t.scrollPos - h.start : Math.round(f * u.duration * 10) / 10;
                    s[t.vertical ? "top" : "left"] += l,
                    n.css(C.spacer.firstChild, {
                        top: s.top,
                        left: s.left
                    })
                }
            }
        }
          , R = function() {
            if (P && o && C.inFlow) {
                var e = "DURING" === c
                  , t = o.info("vertical")
                  , i = C.spacer.firstChild
                  , r = n.isMarginCollapseType(n.css(C.spacer, "display"))
                  , a = {};
                C.relSize.width || C.relSize.autoFullWidth ? e ? n.css(P, {
                    width: n.get.width(C.spacer)
                }) : n.css(P, {
                    width: "100%"
                }) : (a["min-width"] = n.get.width(t ? P : i, !0, !0),
                a.width = e ? a["min-width"] : "auto"),
                C.relSize.height ? e ? n.css(P, {
                    height: n.get.height(C.spacer) - (C.pushFollowers ? u.duration : 0)
                }) : n.css(P, {
                    height: "100%"
                }) : (a["min-height"] = n.get.height(t ? i : P, !0, !r),
                a.height = e ? a["min-height"] : "auto"),
                C.pushFollowers && (a["padding" + (t ? "Top" : "Left")] = u.duration * f,
                a["padding" + (t ? "Bottom" : "Right")] = u.duration * (1 - f)),
                n.css(C.spacer, a)
            }
        }
          , O = function() {
            o && P && "DURING" === c && !o.info("isDocument") && k()
        }
          , A = function() {
            o && P && "DURING" === c && ((C.relSize.width || C.relSize.autoFullWidth) && n.get.width(window) != n.get.width(C.spacer.parentNode) || C.relSize.height && n.get.height(window) != n.get.height(C.spacer.parentNode)) && R()
        }
          , D = function(e) {
            o && P && "DURING" === c && !o.info("isDocument") && (e.preventDefault(),
            o._setScrollPos(o.info("scrollPos") - ((e.wheelDelta || e[o.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
        };
        this.setPin = function(e, t) {
            var i = {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
            }
              , r = t && t.hasOwnProperty("pushFollowers");
            if (t = n.extend({}, i, t),
            !(e = n.get.elements(e)[0]))
                return _(1, "ERROR calling method 'setPin()': Invalid pin element supplied."),
                l;
            if ("fixed" === n.css(e, "position"))
                return _(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),
                l;
            if (P) {
                if (P === e)
                    return l;
                l.removePin()
            }
            var o = (P = e).parentNode.style.display
              , a = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            P.parentNode.style.display = "none";
            var s = "absolute" != n.css(P, "position")
              , c = n.css(P, a.concat(["display"]))
              , f = n.css(P, ["width", "height"]);
            P.parentNode.style.display = o,
            !s && t.pushFollowers && (_(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),
            t.pushFollowers = !1),
            window.setTimeout(function() {
                P && 0 === u.duration && r && t.pushFollowers && _(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.")
            }, 0);
            var h = P.parentNode.insertBefore(document.createElement("div"), P)
              , p = n.extend(c, {
                position: s ? "relative" : "absolute",
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            });
            if (s || n.extend(p, n.css(P, ["width", "height"])),
            n.css(h, p),
            h.setAttribute("data-scrollmagic-pin-spacer", ""),
            n.addClass(h, t.spacerClass),
            C = {
                spacer: h,
                relSize: {
                    width: "%" === f.width.slice(-1),
                    height: "%" === f.height.slice(-1),
                    autoFullWidth: "auto" === f.width && s && n.isMarginCollapseType(c.display)
                },
                pushFollowers: t.pushFollowers,
                inFlow: s
            },
            !P.___origStyle) {
                P.___origStyle = {};
                var d = P.style;
                a.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function(e) {
                    P.___origStyle[e] = d[e] || ""
                })
            }
            return C.relSize.width && n.css(h, {
                width: f.width
            }),
            C.relSize.height && n.css(h, {
                height: f.height
            }),
            h.appendChild(P),
            n.css(P, {
                position: s ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }),
            (C.relSize.width || C.relSize.autoFullWidth) && n.css(P, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }),
            window.addEventListener("scroll", O),
            window.addEventListener("resize", O),
            window.addEventListener("resize", A),
            P.addEventListener("mousewheel", D),
            P.addEventListener("DOMMouseScroll", D),
            _(3, "added pin"),
            k(),
            l
        }
        ,
        this.removePin = function(e) {
            if (P) {
                if ("DURING" === c && k(!0),
                e || !o) {
                    var t = C.spacer.firstChild;
                    if (t.hasAttribute("data-scrollmagic-pin-spacer")) {
                        var i = C.spacer.style
                          , r = {};
                        ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function(e) {
                            r[e] = i[e] || ""
                        }),
                        n.css(t, r)
                    }
                    C.spacer.parentNode.insertBefore(t, C.spacer),
                    C.spacer.parentNode.removeChild(C.spacer),
                    P.parentNode.hasAttribute("data-scrollmagic-pin-spacer") || (n.css(P, P.___origStyle),
                    delete P.___origStyle)
                }
                window.removeEventListener("scroll", O),
                window.removeEventListener("resize", O),
                window.removeEventListener("resize", A),
                P.removeEventListener("mousewheel", D),
                P.removeEventListener("DOMMouseScroll", D),
                P = void 0,
                _(3, "removed pin (reset: " + (e ? "true" : "false") + ")")
            }
            return l
        }
        ;
        var E, M = [];
        return l.on("destroy.internal", function(e) {
            l.removeClassToggle(e.reset)
        }),
        this.setClassToggle = function(e, t) {
            var i = n.get.elements(e);
            return 0 !== i.length && n.type.String(t) ? (M.length > 0 && l.removeClassToggle(),
            E = t,
            M = i,
            l.on("enter.internal_class leave.internal_class", function(e) {
                var t = "enter" === e.type ? n.addClass : n.removeClass;
                M.forEach(function(e, i) {
                    t(e, E)
                })
            }),
            l) : (_(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === i.length ? "element" : "classes") + " supplied."),
            l)
        }
        ,
        this.removeClassToggle = function(e) {
            return e && M.forEach(function(e, t) {
                n.removeClass(e, E)
            }),
            l.off("start.internal_class end.internal_class"),
            E = void 0,
            M = [],
            l
        }
        ,
        function() {
            for (var e in u)
                s.hasOwnProperty(e) || (_(2, 'WARNING: Unknown option "' + e + '"'),
                delete u[e]);
            for (var t in s)
                S(t);
            b()
        }(),
        l
    }
    ;
    var i = {
        defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: .5,
            reverse: !0,
            loglevel: 2
        },
        validate: {
            offset: function(e) {
                if (e = parseFloat(e),
                !n.type.Number(e))
                    throw ['Invalid value for option "offset":', e];
                return e
            },
            triggerElement: function(e) {
                if (e = e || void 0) {
                    var t = n.get.elements(e)[0];
                    if (!t || !t.parentNode)
                        throw ['Element defined in option "triggerElement" was not found:', e];
                    e = t
                }
                return e
            },
            triggerHook: function(e) {
                var t = {
                    onCenter: .5,
                    onEnter: 1,
                    onLeave: 0
                };
                if (n.type.Number(e))
                    e = Math.max(0, Math.min(parseFloat(e), 1));
                else {
                    if (!(e in t))
                        throw ['Invalid value for option "triggerHook": ', e];
                    e = t[e]
                }
                return e
            },
            reverse: function(e) {
                return !!e
            },
            loglevel: function(e) {
                if (e = parseInt(e),
                !n.type.Number(e) || e < 0 || e > 3)
                    throw ['Invalid value for option "loglevel":', e];
                return e
            }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    e.Scene.addOption = function(t, n, r, o) {
        t in i.defaults ? e._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + t + "', because it already exists.") : (i.defaults[t] = n,
        i.validate[t] = r,
        o && i.shifts.push(t))
    }
    ,
    e.Scene.extend = function(t) {
        var i = this;
        e.Scene = function() {
            return i.apply(this, arguments),
            this.$super = n.extend({}, this),
            t.apply(this, arguments) || this
        }
        ,
        n.extend(e.Scene, i),
        e.Scene.prototype = i.prototype,
        e.Scene.prototype.constructor = e.Scene
    }
    ,
    e.Event = function(e, t, i, n) {
        n = n || {};
        for (var r in n)
            this[r] = n[r];
        return this.type = e,
        this.target = this.currentTarget = i,
        this.namespace = t || "",
        this.timeStamp = this.timestamp = Date.now(),
        this
    }
    ;
    var n = e._util = function(e) {
        var t, i = {}, n = function(e) {
            return parseFloat(e) || 0
        }, r = function(t) {
            return t.currentStyle ? t.currentStyle : e.getComputedStyle(t)
        }, o = function(t, i, o, a) {
            if ((i = i === document ? e : i) === e)
                a = !1;
            else if (!d.DomElement(i))
                return 0;
            t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
            var s = (o ? i["offset" + t] || i["outer" + t] : i["client" + t] || i["inner" + t]) || 0;
            if (o && a) {
                var l = r(i);
                s += "Height" === t ? n(l.marginTop) + n(l.marginBottom) : n(l.marginLeft) + n(l.marginRight)
            }
            return s
        }, a = function(e) {
            return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
                return e[1].toUpperCase()
            })
        };
        i.extend = function(e) {
            for (e = e || {},
            t = 1; t < arguments.length; t++)
                if (arguments[t])
                    for (var i in arguments[t])
                        arguments[t].hasOwnProperty(i) && (e[i] = arguments[t][i]);
            return e
        }
        ,
        i.isMarginCollapseType = function(e) {
            return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1
        }
        ;
        var s = 0
          , l = ["ms", "moz", "webkit", "o"]
          , u = e.requestAnimationFrame
          , c = e.cancelAnimationFrame;
        for (t = 0; !u && t < l.length; ++t)
            u = e[l[t] + "RequestAnimationFrame"],
            c = e[l[t] + "CancelAnimationFrame"] || e[l[t] + "CancelRequestAnimationFrame"];
        u || (u = function(t) {
            var i = (new Date).getTime()
              , n = Math.max(0, 16 - (i - s))
              , r = e.setTimeout(function() {
                t(i + n)
            }, n);
            return s = i + n,
            r
        }
        ),
        c || (c = function(t) {
            e.clearTimeout(t)
        }
        ),
        i.rAF = u.bind(e),
        i.cAF = c.bind(e);
        var f = ["error", "warn", "log"]
          , h = e.console || {};
        for (h.log = h.log || function() {}
        ,
        t = 0; t < f.length; t++) {
            var p = f[t];
            h[p] || (h[p] = h.log)
        }
        i.log = function(e) {
            (e > f.length || e <= 0) && (e = f.length);
            var t = new Date
              , i = ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2) + ":" + ("0" + t.getSeconds()).slice(-2) + ":" + ("00" + t.getMilliseconds()).slice(-3)
              , n = f[e - 1]
              , r = Array.prototype.splice.call(arguments, 1)
              , o = Function.prototype.bind.call(h[n], h);
            r.unshift(i),
            o.apply(h, r)
        }
        ;
        var d = i.type = function(e) {
            return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        }
        ;
        d.String = function(e) {
            return "string" === d(e)
        }
        ,
        d.Function = function(e) {
            return "function" === d(e)
        }
        ,
        d.Array = function(e) {
            return Array.isArray(e)
        }
        ,
        d.Number = function(e) {
            return !d.Array(e) && e - parseFloat(e) + 1 >= 0
        }
        ,
        d.DomElement = function(e) {
            return "object" == typeof HTMLElement || "function" == typeof HTMLElement ? e instanceof HTMLElement || e instanceof SVGElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
        }
        ;
        var m = i.get = {};
        return m.elements = function(t) {
            var i = [];
            if (d.String(t))
                try {
                    t = document.querySelectorAll(t)
                } catch (e) {
                    return i
                }
            if ("nodelist" === d(t) || d.Array(t) || t instanceof NodeList)
                for (var n = 0, r = i.length = t.length; n < r; n++) {
                    var o = t[n];
                    i[n] = d.DomElement(o) ? o : m.elements(o)
                }
            else
                (d.DomElement(t) || t === document || t === e) && (i = [t]);
            return i
        }
        ,
        m.scrollTop = function(t) {
            return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0
        }
        ,
        m.scrollLeft = function(t) {
            return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0
        }
        ,
        m.width = function(e, t, i) {
            return o("width", e, t, i)
        }
        ,
        m.height = function(e, t, i) {
            return o("height", e, t, i)
        }
        ,
        m.offset = function(e, t) {
            var i = {
                top: 0,
                left: 0
            };
            if (e && e.getBoundingClientRect) {
                var n = e.getBoundingClientRect();
                i.top = n.top,
                i.left = n.left,
                t || (i.top += m.scrollTop(),
                i.left += m.scrollLeft())
            }
            return i
        }
        ,
        i.addClass = function(e, t) {
            t && (e.classList ? e.classList.add(t) : e.className += " " + t)
        }
        ,
        i.removeClass = function(e, t) {
            t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)","gi"), " "))
        }
        ,
        i.css = function(e, t) {
            if (d.String(t))
                return r(e)[a(t)];
            if (d.Array(t)) {
                var i = {}
                  , n = r(e);
                return t.forEach(function(e, t) {
                    i[e] = n[a(e)]
                }),
                i
            }
            for (var o in t) {
                var s = t[o];
                s == parseFloat(s) && (s += "px"),
                e.style[a(o)] = s
            }
        }
        ,
        i
    }(window || {});
    return e.Scene.prototype.addIndicators = function() {
        return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),
        this
    }
    ,
    e.Scene.prototype.removeIndicators = function() {
        return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),
        this
    }
    ,
    e.Scene.prototype.setTween = function() {
        return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),
        this
    }
    ,
    e.Scene.prototype.removeTween = function() {
        return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),
        this
    }
    ,
    e.Scene.prototype.setVelocity = function() {
        return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),
        this
    }
    ,
    e.Scene.prototype.removeVelocity = function() {
        return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),
        this
    }
    ,
    e
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], t) : "object" == typeof exports ? (require("gsap"),
    t(require("scrollmagic"), TweenMax, TimelineMax)) : t(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.TweenMax || e.TweenLite, e.TimelineMax || e.TimelineLite)
}(this, function(e, t, i) {
    "use strict";
    var n = window.console || {}
      , r = Function.prototype.bind.call(n.error || n.log || function() {}
    , n);
    e || r("(animation.gsap) -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."),
    t || r("(animation.gsap) -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."),
    e.Scene.addOption("tweenChanges", !1, function(e) {
        return !!e
    }),
    e.Scene.extend(function() {
        var e, n = this, r = function() {
            n._log && (Array.prototype.splice.call(arguments, 1, 0, "(animation.gsap)", "->"),
            n._log.apply(this, arguments))
        };
        n.on("progress.plugin_gsap", function() {
            o()
        }),
        n.on("destroy.plugin_gsap", function(e) {
            n.removeTween(e.reset)
        });
        var o = function() {
            if (e) {
                var t = n.progress()
                  , i = n.state();
                e.repeat && -1 === e.repeat() ? "DURING" === i && e.paused() ? e.play() : "DURING" === i || e.paused() || e.pause() : t != e.progress() && (0 === n.duration() ? t > 0 ? e.play() : e.reverse() : n.tweenChanges() && e.tweenTo ? e.tweenTo(t * e.duration()) : e.progress(t).pause())
            }
        };
        n.setTween = function(a, s, l) {
            var u;
            arguments.length > 1 && (arguments.length < 3 && (l = s,
            s = 1),
            a = t.to(a, s, l));
            try {
                (u = i ? new i({
                    smoothChildTiming: !0
                }).add(a) : a).pause()
            } catch (e) {
                return r(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"),
                n
            }
            if (e && n.removeTween(),
            e = u,
            a.repeat && -1 === a.repeat() && (e.repeat(-1),
            e.yoyo(a.yoyo())),
            n.tweenChanges() && !e.tweenTo && r(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."),
            e && n.controller() && n.triggerElement() && n.loglevel() >= 2) {
                var c = t.getTweensOf(n.triggerElement())
                  , f = n.controller().info("vertical");
                c.forEach(function(e, t) {
                    var i = e.vars.css || e.vars;
                    if (f ? void 0 !== i.top || void 0 !== i.bottom : void 0 !== i.left || void 0 !== i.right)
                        return r(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"),
                        !1
                })
            }
            if (parseFloat(TweenLite.version) >= 1.14)
                for (var h, p, d = e.getChildren ? e.getChildren(!0, !0, !1) : [e], m = function() {
                    r(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")
                }, _ = 0; _ < d.length; _++)
                    h = d[_],
                    p !== m && (p = h.vars.onOverwrite,
                    h.vars.onOverwrite = function() {
                        p && p.apply(this, arguments),
                        m.apply(this, arguments)
                    }
                    );
            return r(3, "added tween"),
            o(),
            n
        }
        ,
        n.removeTween = function(t) {
            return e && (t && e.progress(0).pause(),
            e.kill(),
            e = void 0,
            r(3, "removed tween (reset: " + (t ? "true" : "false") + ")")),
            n
        }
    })
}),
function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    function i(e, t, i) {
        var n, r, o = (i = i || J).createElement("script");
        if (o.text = e,
        t)
            for (n in he)
                (r = t[n] || t.getAttribute && t.getAttribute(n)) && o.setAttribute(n, r);
        i.head.appendChild(o).parentNode.removeChild(o)
    }
    function n(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? re[oe.call(e)] || "object" : typeof e
    }
    function r(e) {
        var t = !!e && "length"in e && e.length
          , i = n(e);
        return !ce(e) && !fe(e) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    function o(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    function a(e, t, i) {
        return ce(t) ? de.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== i
        }) : t.nodeType ? de.grep(e, function(e) {
            return e === t !== i
        }) : "string" != typeof t ? de.grep(e, function(e) {
            return -1 < ne.call(t, e) !== i
        }) : de.filter(t, e, i)
    }
    function s(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function l(e) {
        return e
    }
    function u(e) {
        throw e
    }
    function c(e, t, i, n) {
        var r;
        try {
            e && ce(r = e.promise) ? r.call(e).done(t).fail(i) : e && ce(r = e.then) ? r.call(e, t, i) : t.apply(void 0, [e].slice(n))
        } catch (e) {
            i.apply(void 0, [e])
        }
    }
    function f() {
        J.removeEventListener("DOMContentLoaded", f),
        e.removeEventListener("load", f),
        de.ready()
    }
    function h(e, t) {
        return t.toUpperCase()
    }
    function p(e) {
        return e.replace(Oe, "ms-").replace(Ae, h)
    }
    function d() {
        this.expando = de.expando + d.uid++
    }
    function m(e, t, i) {
        var n, r;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(Le, "-$&").toLowerCase(),
            "string" == typeof (i = e.getAttribute(n))) {
                try {
                    i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Ne.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                Me.set(e, t, i)
            } else
                i = void 0;
        return i
    }
    function _(e, t, i, n) {
        var r, o, a = 20, s = n ? function() {
            return n.cur()
        }
        : function() {
            return de.css(e, t, "")
        }
        , l = s(), u = i && i[3] || (de.cssNumber[t] ? "" : "px"), c = e.nodeType && (de.cssNumber[t] || "px" !== u && +l) && je.exec(de.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2,
            u = u || c[3],
            c = +l || 1; a--; )
                de.style(e, t, c + u),
                (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            de.style(e, t, c + u),
            i = i || []
        }
        return i && (c = +c || +l || 0,
        r = i[1] ? c + (i[1] + 1) * i[2] : +i[2],
        n && (n.unit = u,
        n.start = c,
        n.end = r)),
        r
    }
    function g(e, t) {
        for (var i, n, r, o, a, s, l, u = [], c = 0, f = e.length; c < f; c++)
            (n = e[c]).style && (i = n.style.display,
            t ? ("none" === i && (u[c] = Ee.get(n, "display") || null,
            u[c] || (n.style.display = "")),
            "" === n.style.display && He(n) && (u[c] = (l = a = o = void 0,
            a = (r = n).ownerDocument,
            s = r.nodeName,
            (l = Ue[s]) || (o = a.body.appendChild(a.createElement(s)),
            l = de.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === l && (l = "block"),
            Ue[s] = l)))) : "none" !== i && (u[c] = "none",
            Ee.set(n, "display", i)));
        for (c = 0; c < f; c++)
            null != u[c] && (e[c].style.display = u[c]);
        return e
    }
    function v(e, t) {
        var i;
        return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && o(e, t) ? de.merge([e], i) : i
    }
    function y(e, t) {
        for (var i = 0, n = e.length; i < n; i++)
            Ee.set(e[i], "globalEval", !t || Ee.get(t[i], "globalEval"))
    }
    function T(e, t, i, r, o) {
        for (var a, s, l, u, c, f, h = t.createDocumentFragment(), p = [], d = 0, m = e.length; d < m; d++)
            if ((a = e[d]) || 0 === a)
                if ("object" === n(a))
                    de.merge(p, a.nodeType ? [a] : a);
                else if (Ze.test(a)) {
                    for (s = s || h.appendChild(t.createElement("div")),
                    l = ($e.exec(a) || ["", ""])[1].toLowerCase(),
                    u = Ge[l] || Ge._default,
                    s.innerHTML = u[1] + de.htmlPrefilter(a) + u[2],
                    f = u[0]; f--; )
                        s = s.lastChild;
                    de.merge(p, s.childNodes),
                    (s = h.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(a));
        for (h.textContent = "",
        d = 0; a = p[d++]; )
            if (r && -1 < de.inArray(a, r))
                o && o.push(a);
            else if (c = qe(a),
            s = v(h.appendChild(a), "script"),
            c && y(s),
            i)
                for (f = 0; a = s[f++]; )
                    Ye.test(a.type || "") && i.push(a);
        return h
    }
    function x() {
        return !0
    }
    function b() {
        return !1
    }
    function w(e, t) {
        return e === function() {
            try {
                return J.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function S(e, t, i, n, r, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof i && (n = n || i,
            i = void 0),
            t)
                S(e, s, i, n, t[s], o);
            return e
        }
        if (null == n && null == r ? (r = i,
        n = i = void 0) : null == r && ("string" == typeof i ? (r = n,
        n = void 0) : (r = n,
        n = i,
        i = void 0)),
        !1 === r)
            r = b;
        else if (!r)
            return e;
        return 1 === o && (a = r,
        (r = function(e) {
            return de().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = de.guid++)),
        e.each(function() {
            de.event.add(this, t, r, n, i)
        })
    }
    function P(e, t, i) {
        i ? (Ee.set(e, t, !1),
        de.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var n, r, o = Ee.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (o.length)
                        (de.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (o = ee.call(arguments),
                    Ee.set(this, t, o),
                    n = i(this, t),
                    this[t](),
                    o !== (r = Ee.get(this, t)) || n ? Ee.set(this, t, !1) : r = {},
                    o !== r)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        r.value
                } else
                    o.length && (Ee.set(this, t, {
                        value: de.event.trigger(de.extend(o[0], de.Event.prototype), o.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Ee.get(e, t) && de.event.add(e, t, x)
    }
    function C(e, t) {
        return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") && de(e).children("tbody")[0] || e
    }
    function k(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function R(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function O(e, t) {
        var i, n, r, o, a, s, l, u;
        if (1 === t.nodeType) {
            if (Ee.hasData(e) && (o = Ee.access(e),
            a = Ee.set(t, o),
            u = o.events))
                for (r in delete a.handle,
                a.events = {},
                u)
                    for (i = 0,
                    n = u[r].length; i < n; i++)
                        de.event.add(t, r, u[r][i]);
            Me.hasData(e) && (s = Me.access(e),
            l = de.extend({}, s),
            Me.set(t, l))
        }
    }
    function A(e, t, n, r) {
        t = te.apply([], t);
        var o, a, s, l, u, c, f = 0, h = e.length, p = h - 1, d = t[0], m = ce(d);
        if (m || 1 < h && "string" == typeof d && !ue.checkClone && nt.test(d))
            return e.each(function(i) {
                var o = e.eq(i);
                m && (t[0] = d.call(this, i, o.html())),
                A(o, t, n, r)
            });
        if (h && (a = (o = T(t, e[0].ownerDocument, !1, e, r)).firstChild,
        1 === o.childNodes.length && (o = a),
        a || r)) {
            for (l = (s = de.map(v(o, "script"), k)).length; f < h; f++)
                u = o,
                f !== p && (u = de.clone(u, !0, !0),
                l && de.merge(s, v(u, "script"))),
                n.call(e[f], u, f);
            if (l)
                for (c = s[s.length - 1].ownerDocument,
                de.map(s, R),
                f = 0; f < l; f++)
                    u = s[f],
                    Ye.test(u.type || "") && !Ee.access(u, "globalEval") && de.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? de._evalUrl && !u.noModule && de._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }) : i(u.textContent.replace(rt, ""), u, c))
        }
        return e
    }
    function D(e, t, i) {
        for (var n, r = t ? de.filter(t, e) : e, o = 0; null != (n = r[o]); o++)
            i || 1 !== n.nodeType || de.cleanData(v(n)),
            n.parentNode && (i && qe(n) && y(v(n, "script")),
            n.parentNode.removeChild(n));
        return e
    }
    function E(e, t, i) {
        var n, r, o, a, s = e.style;
        return (i = i || at(e)) && ("" !== (a = i.getPropertyValue(t) || i[t]) || qe(e) || (a = de.style(e, t)),
        !ue.pixelBoxStyles() && ot.test(a) && st.test(t) && (n = s.width,
        r = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = i.width,
        s.width = n,
        s.minWidth = r,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function M(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    function N(e) {
        return de.cssProps[e] || ct[e] || (e in ut ? e : ct[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), i = lt.length; i--; )
                if ((e = lt[i] + t)in ut)
                    return e
        }(e) || e)
    }
    function L(e, t, i) {
        var n = je.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }
    function F(e, t, i, n, r, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , l = 0;
        if (i === (n ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === i && (l += de.css(e, i + Ie[a], !0, r)),
            n ? ("content" === i && (l -= de.css(e, "padding" + Ie[a], !0, r)),
            "margin" !== i && (l -= de.css(e, "border" + Ie[a] + "Width", !0, r))) : (l += de.css(e, "padding" + Ie[a], !0, r),
            "padding" !== i ? l += de.css(e, "border" + Ie[a] + "Width", !0, r) : s += de.css(e, "border" + Ie[a] + "Width", !0, r));
        return !n && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0),
        l
    }
    function j(e, t, i) {
        var n = at(e)
          , r = (!ue.boxSizingReliable() || i) && "border-box" === de.css(e, "boxSizing", !1, n)
          , o = r
          , a = E(e, t, n)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (ot.test(a)) {
            if (!i)
                return a;
            a = "auto"
        }
        return (!ue.boxSizingReliable() && r || "auto" === a || !parseFloat(a) && "inline" === de.css(e, "display", !1, n)) && e.getClientRects().length && (r = "border-box" === de.css(e, "boxSizing", !1, n),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + F(e, t, i || (r ? "border" : "content"), o, n, a) + "px"
    }
    function I(e, t, i, n, r) {
        return new I.prototype.init(e,t,i,n,r)
    }
    function z() {
        _t && (!1 === J.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(z) : e.setTimeout(z, de.fx.interval),
        de.fx.tick())
    }
    function q() {
        return e.setTimeout(function() {
            mt = void 0
        }),
        mt = Date.now()
    }
    function B(e, t) {
        var i, n = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; n < 4; n += 2 - t)
            r["margin" + (i = Ie[n])] = r["padding" + i] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function H(e, t, i) {
        for (var n, r = (X.tweeners[t] || []).concat(X.tweeners["*"]), o = 0, a = r.length; o < a; o++)
            if (n = r[o].call(i, t, e))
                return n
    }
    function X(e, t, i) {
        var n, r, o = 0, a = X.prefilters.length, s = de.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (r)
                return !1;
            for (var t = mt || q(), i = Math.max(0, u.startTime + u.duration - t), n = 1 - (i / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++)
                u.tweens[o].run(n);
            return s.notifyWith(e, [u, n, i]),
            n < 1 && a ? i : (a || s.notifyWith(e, [u, 1, 0]),
            s.resolveWith(e, [u]),
            !1)
        }, u = s.promise({
            elem: e,
            props: de.extend({}, t),
            opts: de.extend(!0, {
                specialEasing: {},
                easing: de.easing._default
            }, i),
            originalProperties: t,
            originalOptions: i,
            startTime: mt || q(),
            duration: i.duration,
            tweens: [],
            createTween: function(t, i) {
                var n = de.Tween(e, u.opts, t, i, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(n),
                n
            },
            stop: function(t) {
                var i = 0
                  , n = t ? u.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; i < n; i++)
                    u.tweens[i].run(1);
                return t ? (s.notifyWith(e, [u, 1, 0]),
                s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]),
                this
            }
        }), c = u.props;
        for ((!function(e, t) {
            var i, n, r, o, a;
            for (i in e)
                if (r = t[n = p(i)],
                o = e[i],
                Array.isArray(o) && (r = o[1],
                o = e[i] = o[0]),
                i !== n && (e[n] = o,
                delete e[i]),
                (a = de.cssHooks[n]) && "expand"in a)
                    for (i in o = a.expand(o),
                    delete e[n],
                    o)
                        i in e || (e[i] = o[i],
                        t[i] = r);
                else
                    t[n] = r
        }(c, u.opts.specialEasing)); o < a; o++)
            if (n = X.prefilters[o].call(u, e, c, u.opts))
                return ce(n.stop) && (de._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)),
                n;
        return de.map(c, H, u),
        ce(u.opts.start) && u.opts.start.call(e, u),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
        de.fx.timer(de.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u
    }
    function U(e) {
        return (e.match(Pe) || []).join(" ")
    }
    function W(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function $(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(Pe) || []
    }
    function Y(e, t, i, r) {
        var o;
        if (Array.isArray(t))
            de.each(t, function(t, n) {
                i || Dt.test(e) ? r(e, n) : Y(e + "[" + ("object" == typeof n && null != n ? t : "") + "]", n, i, r)
            });
        else if (i || "object" !== n(t))
            r(e, t);
        else
            for (o in t)
                Y(e + "[" + o + "]", t[o], i, r)
    }
    function G(e) {
        return function(t, i) {
            "string" != typeof t && (i = t,
            t = "*");
            var n, r = 0, o = t.toLowerCase().match(Pe) || [];
            if (ce(i))
                for (; n = o[r++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }
    function V(e, t, i, n) {
        function r(s) {
            var l;
            return o[s] = !0,
            de.each(e[s] || [], function(e, s) {
                var u = s(t, i, n);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u),
                r(u),
                !1)
            }),
            l
        }
        var o = {}
          , a = e === Ht;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }
    function Q(e, t) {
        var i, n, r = de.ajaxSettings.flatOptions || {};
        for (i in t)
            void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && de.extend(!0, e, n),
        e
    }
    var Z = []
      , J = e.document
      , K = Object.getPrototypeOf
      , ee = Z.slice
      , te = Z.concat
      , ie = Z.push
      , ne = Z.indexOf
      , re = {}
      , oe = re.toString
      , ae = re.hasOwnProperty
      , se = ae.toString
      , le = se.call(Object)
      , ue = {}
      , ce = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , fe = function(e) {
        return null != e && e === e.window
    }
      , he = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    }
      , pe = "3.4.1"
      , de = function(e, t) {
        return new de.fn.init(e,t)
    }
      , me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    de.fn = de.prototype = {
        jquery: pe,
        constructor: de,
        length: 0,
        toArray: function() {
            return ee.call(this)
        },
        get: function(e) {
            return null == e ? ee.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = de.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return de.each(this, e)
        },
        map: function(e) {
            return this.pushStack(de.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(ee.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , i = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= i && i < t ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ie,
        sort: Z.sort,
        splice: Z.splice
    },
    de.extend = de.fn.extend = function() {
        var e, t, i, n, r, o, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || ce(a) || (a = {}),
        s === l && (a = this,
        s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = e[t],
                    "__proto__" !== t && a !== n && (u && n && (de.isPlainObject(n) || (r = Array.isArray(n))) ? (i = a[t],
                    o = r && !Array.isArray(i) ? [] : r || de.isPlainObject(i) ? i : {},
                    r = !1,
                    a[t] = de.extend(u, o, n)) : void 0 !== n && (a[t] = n));
        return a
    }
    ,
    de.extend({
        expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, i;
            return !(!e || "[object Object]" !== oe.call(e) || (t = K(e)) && ("function" != typeof (i = ae.call(t, "constructor") && t.constructor) || se.call(i) !== le))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t) {
            i(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var i, n = 0;
            if (r(e))
                for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++)
                    ;
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(me, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (r(Object(e)) ? de.merge(i, "string" == typeof e ? [e] : e) : ie.call(i, e)),
            i
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : ne.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, r = e.length; n < i; n++)
                e[r++] = t[n];
            return e.length = r,
            e
        },
        grep: function(e, t, i) {
            for (var n = [], r = 0, o = e.length, a = !i; r < o; r++)
                !t(e[r], r) !== a && n.push(e[r]);
            return n
        },
        map: function(e, t, i) {
            var n, o, a = 0, s = [];
            if (r(e))
                for (n = e.length; a < n; a++)
                    null != (o = t(e[a], a, i)) && s.push(o);
            else
                for (a in e)
                    null != (o = t(e[a], a, i)) && s.push(o);
            return te.apply([], s)
        },
        guid: 1,
        support: ue
    }),
    "function" == typeof Symbol && (de.fn[Symbol.iterator] = Z[Symbol.iterator]),
    de.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        re["[object " + t + "]"] = t.toLowerCase()
    });
    var _e = function(e) {
        function t(e, t, i, n) {
            var r, o, a, s, l, c, h, p = t && t.ownerDocument, d = t ? t.nodeType : 9;
            if (i = i || [],
            "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d)
                return i;
            if (!n && ((t ? t.ownerDocument || t : j) !== O && R(t),
            t = t || O,
            D)) {
                if (11 !== d && (l = me.exec(e)))
                    if (r = l[1]) {
                        if (9 === d) {
                            if (!(a = t.getElementById(r)))
                                return i;
                            if (a.id === r)
                                return i.push(a),
                                i
                        } else if (p && (a = p.getElementById(r)) && L(t, a) && a.id === r)
                            return i.push(a),
                            i
                    } else {
                        if (l[2])
                            return V.apply(i, t.getElementsByTagName(e)),
                            i;
                        if ((r = l[3]) && v.getElementsByClassName && t.getElementsByClassName)
                            return V.apply(i, t.getElementsByClassName(r)),
                            i
                    }
                if (v.qsa && !X[e + " "] && (!E || !E.test(e)) && (1 !== d || "object" !== t.nodeName.toLowerCase())) {
                    if (h = e,
                    p = t,
                    1 === d && se.test(e)) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(ye, Te) : t.setAttribute("id", s = F),
                        o = (c = b(e)).length; o--; )
                            c[o] = "#" + s + " " + f(c[o]);
                        h = c.join(","),
                        p = _e.test(e) && u(t.parentNode) || t
                    }
                    try {
                        return V.apply(i, p.querySelectorAll(h)),
                        i
                    } catch (t) {
                        X(e, !0)
                    } finally {
                        s === F && t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(re, "$1"), t, i, n)
        }
        function i() {
            var e = [];
            return function t(i, n) {
                return e.push(i + " ") > y.cacheLength && delete t[e.shift()],
                t[i + " "] = n
            }
        }
        function n(e) {
            return e[F] = !0,
            e
        }
        function r(e) {
            var t = O.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var i = e.split("|"), n = i.length; n--; )
                y.attrHandle[i[n]] = t
        }
        function a(e, t) {
            var i = t && e
              , n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n)
                return n;
            if (i)
                for (; i = i.nextSibling; )
                    if (i === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && be(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function l(e) {
            return n(function(t) {
                return t = +t,
                n(function(i, n) {
                    for (var r, o = e([], i.length, t), a = o.length; a--; )
                        i[r = o[a]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }
        function u(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        function c() {}
        function f(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++)
                n += e[t].value;
            return n
        }
        function h(e, t, i) {
            var n = t.dir
              , r = t.next
              , o = r || n
              , a = i && "parentNode" === o
              , s = z++;
            return t.first ? function(t, i, r) {
                for (; t = t[n]; )
                    if (1 === t.nodeType || a)
                        return e(t, i, r);
                return !1
            }
            : function(t, i, l) {
                var u, c, f, h = [I, s];
                if (l) {
                    for (; t = t[n]; )
                        if ((1 === t.nodeType || a) && e(t, i, l))
                            return !0
                } else
                    for (; t = t[n]; )
                        if (1 === t.nodeType || a)
                            if (c = (f = t[F] || (t[F] = {}))[t.uniqueID] || (f[t.uniqueID] = {}),
                            r && r === t.nodeName.toLowerCase())
                                t = t[n] || t;
                            else {
                                if ((u = c[o]) && u[0] === I && u[1] === s)
                                    return h[2] = u[2];
                                if ((c[o] = h)[2] = e(t, i, l))
                                    return !0
                            }
                return !1
            }
        }
        function p(e) {
            return 1 < e.length ? function(t, i, n) {
                for (var r = e.length; r--; )
                    if (!e[r](t, i, n))
                        return !1;
                return !0
            }
            : e[0]
        }
        function d(e, t, i, n, r) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
                (o = e[s]) && (i && !i(o, n, r) || (a.push(o),
                u && t.push(s)));
            return a
        }
        function m(e, i, r, o, a, s) {
            return o && !o[F] && (o = m(o)),
            a && !a[F] && (a = m(a, s)),
            n(function(n, s, l, u) {
                var c, f, h, p = [], m = [], _ = s.length, g = n || function(e, i, n) {
                    for (var r = 0, o = i.length; r < o; r++)
                        t(e, i[r], n);
                    return n
                }(i || "*", l.nodeType ? [l] : l, []), v = !e || !n && i ? g : d(g, p, e, l, u), y = r ? a || (n ? e : _ || o) ? [] : s : v;
                if (r && r(v, y, l, u),
                o)
                    for (c = d(y, m),
                    o(c, [], l, u),
                    f = c.length; f--; )
                        (h = c[f]) && (y[m[f]] = !(v[m[f]] = h));
                if (n) {
                    if (a || e) {
                        if (a) {
                            for (c = [],
                            f = y.length; f--; )
                                (h = y[f]) && c.push(v[f] = h);
                            a(null, y = [], c, u)
                        }
                        for (f = y.length; f--; )
                            (h = y[f]) && -1 < (c = a ? Z(n, h) : p[f]) && (n[c] = !(s[c] = h))
                    }
                } else
                    y = d(y === s ? y.splice(_, y.length) : y),
                    a ? a(null, s, y, u) : V.apply(s, y)
            })
        }
        function _(e) {
            for (var t, i, n, r = e.length, o = y.relative[e[0].type], a = o || y.relative[" "], s = o ? 1 : 0, l = h(function(e) {
                return e === t
            }, a, !0), u = h(function(e) {
                return -1 < Z(t, e)
            }, a, !0), c = [function(e, i, n) {
                var r = !o && (n || i !== P) || ((t = i).nodeType ? l(e, i, n) : u(e, i, n));
                return t = null,
                r
            }
            ]; s < r; s++)
                if (i = y.relative[e[s].type])
                    c = [h(p(c), i)];
                else {
                    if ((i = y.filter[e[s].type].apply(null, e[s].matches))[F]) {
                        for (n = ++s; n < r && !y.relative[e[n].type]; n++)
                            ;
                        return m(1 < s && p(c), 1 < s && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(re, "$1"), i, s < n && _(e.slice(s, n)), n < r && _(e = e.slice(n)), n < r && f(e))
                    }
                    c.push(i)
                }
            return p(c)
        }
        var g, v, y, T, x, b, w, S, P, C, k, R, O, A, D, E, M, N, L, F = "sizzle" + 1 * new Date, j = e.document, I = 0, z = 0, q = i(), B = i(), H = i(), X = i(), U = function(e, t) {
            return e === t && (k = !0),
            0
        }, W = {}.hasOwnProperty, $ = [], Y = $.pop, G = $.push, V = $.push, Q = $.slice, Z = function(e, t) {
            for (var i = 0, n = e.length; i < n; i++)
                if (e[i] === t)
                    return i;
            return -1
        }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", ee = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", te = "\\[" + K + "*(" + ee + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ee + "))|)" + K + "*\\]", ie = ":(" + ee + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + te + ")*)|.*)\\)|)", ne = new RegExp(K + "+","g"), re = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$","g"), oe = new RegExp("^" + K + "*," + K + "*"), ae = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), se = new RegExp(K + "|>"), le = new RegExp(ie), ue = new RegExp("^" + ee + "$"), ce = {
            ID: new RegExp("^#(" + ee + ")"),
            CLASS: new RegExp("^\\.(" + ee + ")"),
            TAG: new RegExp("^(" + ee + "|[*])"),
            ATTR: new RegExp("^" + te),
            PSEUDO: new RegExp("^" + ie),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)","i"),
            bool: new RegExp("^(?:" + J + ")$","i"),
            needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)","i")
        }, fe = /HTML$/i, he = /^(?:input|select|textarea|button)$/i, pe = /^h\d$/i, de = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _e = /[+~]/, ge = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)","ig"), ve = function(e, t, i) {
            var n = "0x" + t - 65536;
            return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        }, ye = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Te = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, xe = function() {
            R()
        }, be = h(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            V.apply($ = Q.call(j.childNodes), j.childNodes),
            $[j.childNodes.length].nodeType
        } catch (g) {
            V = {
                apply: $.length ? function(e, t) {
                    G.apply(e, Q.call(t))
                }
                : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++]; )
                        ;
                    e.length = i - 1
                }
            }
        }
        for (g in v = t.support = {},
        x = t.isXML = function(e) {
            var t = e.namespaceURI
              , i = (e.ownerDocument || e).documentElement;
            return !fe.test(t || i && i.nodeName || "HTML")
        }
        ,
        R = t.setDocument = function(e) {
            var t, i, n = e ? e.ownerDocument || e : j;
            return n !== O && 9 === n.nodeType && n.documentElement && (A = (O = n).documentElement,
            D = !x(O),
            j !== O && (i = O.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", xe, !1) : i.attachEvent && i.attachEvent("onunload", xe)),
            v.attributes = r(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            v.getElementsByTagName = r(function(e) {
                return e.appendChild(O.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            v.getElementsByClassName = de.test(O.getElementsByClassName),
            v.getById = r(function(e) {
                return A.appendChild(e).id = F,
                !O.getElementsByName || !O.getElementsByName(F).length
            }),
            v.getById ? (y.filter.ID = function(e) {
                var t = e.replace(ge, ve);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            y.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && D) {
                    var i = t.getElementById(e);
                    return i ? [i] : []
                }
            }
            ) : (y.filter.ID = function(e) {
                var t = e.replace(ge, ve);
                return function(e) {
                    var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }
            ,
            y.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && D) {
                    var i, n, r, o = t.getElementById(e);
                    if (o) {
                        if ((i = o.getAttributeNode("id")) && i.value === e)
                            return [o];
                        for (r = t.getElementsByName(e),
                        n = 0; o = r[n++]; )
                            if ((i = o.getAttributeNode("id")) && i.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            y.find.TAG = v.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : v.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var i, n = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = o[r++]; )
                        1 === i.nodeType && n.push(i);
                    return n
                }
                return o
            }
            ,
            y.find.CLASS = v.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && D)
                    return t.getElementsByClassName(e)
            }
            ,
            M = [],
            E = [],
            (v.qsa = de.test(O.querySelectorAll)) && (r(function(e) {
                A.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && E.push("[*^$]=" + K + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || E.push("\\[" + K + "*(?:value|" + J + ")"),
                e.querySelectorAll("[id~=" + F + "-]").length || E.push("~="),
                e.querySelectorAll(":checked").length || E.push(":checked"),
                e.querySelectorAll("a#" + F + "+*").length || E.push(".#.+[+~]")
            }),
            r(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = O.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && E.push("name" + K + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && E.push(":enabled", ":disabled"),
                A.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && E.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                E.push(",.*:")
            })),
            (v.matchesSelector = de.test(N = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && r(function(e) {
                v.disconnectedMatch = N.call(e, "*"),
                N.call(e, "[s!='']:x"),
                M.push("!=", ie)
            }),
            E = E.length && new RegExp(E.join("|")),
            M = M.length && new RegExp(M.join("|")),
            t = de.test(A.compareDocumentPosition),
            L = t || de.test(A.contains) ? function(e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e
                  , n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            U = t ? function(e, t) {
                if (e === t)
                    return k = !0,
                    0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !v.sortDetached && t.compareDocumentPosition(e) === i ? e === O || e.ownerDocument === j && L(j, e) ? -1 : t === O || t.ownerDocument === j && L(j, t) ? 1 : C ? Z(C, e) - Z(C, t) : 0 : 4 & i ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return k = !0,
                    0;
                var i, n = 0, r = e.parentNode, o = t.parentNode, s = [e], l = [t];
                if (!r || !o)
                    return e === O ? -1 : t === O ? 1 : r ? -1 : o ? 1 : C ? Z(C, e) - Z(C, t) : 0;
                if (r === o)
                    return a(e, t);
                for (i = e; i = i.parentNode; )
                    s.unshift(i);
                for (i = t; i = i.parentNode; )
                    l.unshift(i);
                for (; s[n] === l[n]; )
                    n++;
                return n ? a(s[n], l[n]) : s[n] === j ? -1 : l[n] === j ? 1 : 0
            }
            ),
            O
        }
        ,
        t.matches = function(e, i) {
            return t(e, null, null, i)
        }
        ,
        t.matchesSelector = function(e, i) {
            if ((e.ownerDocument || e) !== O && R(e),
            v.matchesSelector && D && !X[i + " "] && (!M || !M.test(i)) && (!E || !E.test(i)))
                try {
                    var n = N.call(e, i);
                    if (n || v.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    X(i, !0)
                }
            return 0 < t(i, O, null, [e]).length
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== O && R(e),
            L(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== O && R(e);
            var i = y.attrHandle[t.toLowerCase()]
              , n = i && W.call(y.attrHandle, t.toLowerCase()) ? i(e, t, !D) : void 0;
            return void 0 !== n ? n : v.attributes || !D ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }
        ,
        t.escape = function(e) {
            return (e + "").replace(ye, Te)
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, i = [], n = 0, r = 0;
            if (k = !v.detectDuplicates,
            C = !v.sortStable && e.slice(0),
            e.sort(U),
            k) {
                for (; t = e[r++]; )
                    t === e[r] && (n = i.push(r));
                for (; n--; )
                    e.splice(i[n], 1)
            }
            return C = null,
            e
        }
        ,
        T = t.getText = function(e) {
            var t, i = "", n = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        i += T(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[n++]; )
                    i += T(t);
            return i
        }
        ,
        (y = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: ce,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ge, ve),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(ge, ve),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, i = !e[6] && e[2];
                    return ce.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && le.test(i) && (t = b(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t),
                    e[2] = i.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ge, ve).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = q[e + " "];
                    return t || (t = new RegExp("(^|" + K + ")" + e + "(" + K + "|$)")) && q(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, i, n) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === i : !i || (o += "",
                        "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && -1 < o.indexOf(n) : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? -1 < (" " + o.replace(ne, " ") + " ").indexOf(n) : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, i, n, r) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === n && 0 === r ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, i, l) {
                        var u, c, f, h, p, d, m = o !== a ? "nextSibling" : "previousSibling", _ = t.parentNode, g = s && t.nodeName.toLowerCase(), v = !l && !s, y = !1;
                        if (_) {
                            if (o) {
                                for (; m; ) {
                                    for (h = t; h = h[m]; )
                                        if (s ? h.nodeName.toLowerCase() === g : 1 === h.nodeType)
                                            return !1;
                                    d = m = "only" === e && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [a ? _.firstChild : _.lastChild],
                            a && v) {
                                for (y = (p = (u = (c = (f = (h = _)[F] || (h[F] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === I && u[1]) && u[2],
                                h = p && _.childNodes[p]; h = ++p && h && h[m] || (y = p = 0) || d.pop(); )
                                    if (1 === h.nodeType && ++y && h === t) {
                                        c[e] = [I, p, y];
                                        break
                                    }
                            } else if (v && (y = p = (u = (c = (f = (h = t)[F] || (h[F] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === I && u[1]),
                            !1 === y)
                                for (; (h = ++p && h && h[m] || (y = p = 0) || d.pop()) && ((s ? h.nodeName.toLowerCase() !== g : 1 !== h.nodeType) || !++y || (v && ((c = (f = h[F] || (h[F] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] = [I, y]),
                                h !== t)); )
                                    ;
                            return (y -= r) === n || y % n == 0 && 0 <= y / n
                        }
                    }
                },
                PSEUDO: function(e, i) {
                    var r, o = y.pseudos[e] || y.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[F] ? o(i) : 1 < o.length ? (r = [e, e, "", i],
                    y.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
                        for (var n, r = o(e, i), a = r.length; a--; )
                            e[n = Z(e, r[a])] = !(t[n] = r[a])
                    }) : function(e) {
                        return o(e, 0, r)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: n(function(e) {
                    var t = []
                      , i = []
                      , r = w(e.replace(re, "$1"));
                    return r[F] ? n(function(e, t, i, n) {
                        for (var o, a = r(e, null, n, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, n, o) {
                        return t[0] = e,
                        r(t, null, o, i),
                        t[0] = null,
                        !i.pop()
                    }
                }),
                has: n(function(e) {
                    return function(i) {
                        return 0 < t(e, i).length
                    }
                }),
                contains: n(function(e) {
                    return e = e.replace(ge, ve),
                    function(t) {
                        return -1 < (t.textContent || T(t)).indexOf(e)
                    }
                }),
                lang: n(function(e) {
                    return ue.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(ge, ve).toLowerCase(),
                    function(t) {
                        var i;
                        do {
                            if (i = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(e) {
                    return e === A
                },
                focus: function(e) {
                    return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: s(!1),
                disabled: s(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !y.pseudos.empty(e)
                },
                header: function(e) {
                    return pe.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: l(function(e, t) {
                    for (var i = 0; i < t; i += 2)
                        e.push(i);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var i = 1; i < t; i += 2)
                        e.push(i);
                    return e
                }),
                lt: l(function(e, t, i) {
                    for (var n = i < 0 ? i + t : t < i ? t : i; 0 <= --n; )
                        e.push(n);
                    return e
                }),
                gt: l(function(e, t, i) {
                    for (var n = i < 0 ? i + t : i; ++n < t; )
                        e.push(n);
                    return e
                })
            }
        }).pseudos.nth = y.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            y.pseudos[g] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(g);
        for (g in {
            submit: !0,
            reset: !0
        })
            y.pseudos[g] = function(e) {
                return function(t) {
                    var i = t.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && t.type === e
                }
            }(g);
        return c.prototype = y.filters = y.pseudos,
        y.setFilters = new c,
        b = t.tokenize = function(e, i) {
            var n, r, o, a, s, l, u, c = B[e + " "];
            if (c)
                return i ? 0 : c.slice(0);
            for (s = e,
            l = [],
            u = y.preFilter; s; ) {
                for (a in n && !(r = oe.exec(s)) || (r && (s = s.slice(r[0].length) || s),
                l.push(o = [])),
                n = !1,
                (r = ae.exec(s)) && (n = r.shift(),
                o.push({
                    value: n,
                    type: r[0].replace(re, " ")
                }),
                s = s.slice(n.length)),
                y.filter)
                    !(r = ce[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(),
                    o.push({
                        value: n,
                        type: a,
                        matches: r
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return i ? s.length : s ? t.error(e) : B(e, l).slice(0)
        }
        ,
        w = t.compile = function(e, i) {
            var r, o, a, s, l, u, c = [], f = [], h = H[e + " "];
            if (!h) {
                for (i || (i = b(e)),
                r = i.length; r--; )
                    (h = _(i[r]))[F] ? c.push(h) : f.push(h);
                (h = H(e, (o = f,
                s = 0 < (a = c).length,
                l = 0 < o.length,
                u = function(e, i, n, r, u) {
                    var c, f, h, p = 0, m = "0", _ = e && [], g = [], v = P, T = e || l && y.find.TAG("*", u), x = I += null == v ? 1 : Math.random() || .1, b = T.length;
                    for (u && (P = i === O || i || u); m !== b && null != (c = T[m]); m++) {
                        if (l && c) {
                            for (f = 0,
                            i || c.ownerDocument === O || (R(c),
                            n = !D); h = o[f++]; )
                                if (h(c, i || O, n)) {
                                    r.push(c);
                                    break
                                }
                            u && (I = x)
                        }
                        s && ((c = !h && c) && p--,
                        e && _.push(c))
                    }
                    if (p += m,
                    s && m !== p) {
                        for (f = 0; h = a[f++]; )
                            h(_, g, i, n);
                        if (e) {
                            if (0 < p)
                                for (; m--; )
                                    _[m] || g[m] || (g[m] = Y.call(r));
                            g = d(g)
                        }
                        V.apply(r, g),
                        u && !e && 0 < g.length && 1 < p + a.length && t.uniqueSort(r)
                    }
                    return u && (I = x,
                    P = v),
                    _
                }
                ,
                s ? n(u) : u))).selector = e
            }
            return h
        }
        ,
        S = t.select = function(e, t, i, n) {
            var r, o, a, s, l, c = "function" == typeof e && e, h = !n && b(e = c.selector || e);
            if (i = i || [],
            1 === h.length) {
                if (2 < (o = h[0] = h[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && D && y.relative[o[1].type]) {
                    if (!(t = (y.find.ID(a.matches[0].replace(ge, ve), t) || [])[0]))
                        return i;
                    c && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (r = ce.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r],
                !y.relative[s = a.type]); )
                    if ((l = y.find[s]) && (n = l(a.matches[0].replace(ge, ve), _e.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(r, 1),
                        !(e = n.length && f(o)))
                            return V.apply(i, n),
                            i;
                        break
                    }
            }
            return (c || w(e, h))(n, t, !D, i, !t || _e.test(e) && u(t.parentNode) || t),
            i
        }
        ,
        v.sortStable = F.split("").sort(U).join("") === F,
        v.detectDuplicates = !!k,
        R(),
        v.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(O.createElement("fieldset"))
        }),
        r(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, i) {
            if (!i)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        v.attributes && r(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(J, function(e, t, i) {
            var n;
            if (!i)
                return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }),
        t
    }(e);
    de.find = _e,
    de.expr = _e.selectors,
    de.expr[":"] = de.expr.pseudos,
    de.uniqueSort = de.unique = _e.uniqueSort,
    de.text = _e.getText,
    de.isXMLDoc = _e.isXML,
    de.contains = _e.contains,
    de.escapeSelector = _e.escape;
    var ge = function(e, t, i) {
        for (var n = [], r = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (r && de(e).is(i))
                    break;
                n.push(e)
            }
        return n
    }
      , ve = function(e, t) {
        for (var i = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && i.push(e);
        return i
    }
      , ye = de.expr.match.needsContext
      , Te = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    de.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"),
        1 === t.length && 1 === n.nodeType ? de.find.matchesSelector(n, e) ? [n] : [] : de.find.matches(e, de.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    de.fn.extend({
        find: function(e) {
            var t, i, n = this.length, r = this;
            if ("string" != typeof e)
                return this.pushStack(de(e).filter(function() {
                    for (t = 0; t < n; t++)
                        if (de.contains(r[t], this))
                            return !0
                }));
            for (i = this.pushStack([]),
            t = 0; t < n; t++)
                de.find(e, r[t], i);
            return 1 < n ? de.uniqueSort(i) : i
        },
        filter: function(e) {
            return this.pushStack(a(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(a(this, e || [], !0))
        },
        is: function(e) {
            return !!a(this, "string" == typeof e && ye.test(e) ? de(e) : e || [], !1).length
        }
    });
    var xe, be = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (de.fn.init = function(e, t, i) {
        var n, r;
        if (!e)
            return this;
        if (i = i || xe,
        "string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : be.exec(e)) || !n[1] && t)
                return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof de ? t[0] : t,
                de.merge(this, de.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)),
                Te.test(n[1]) && de.isPlainObject(t))
                    for (n in t)
                        ce(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return (r = J.getElementById(n[2])) && (this[0] = r,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : ce(e) ? void 0 !== i.ready ? i.ready(e) : e(de) : de.makeArray(e, this)
    }
    ).prototype = de.fn,
    xe = de(J);
    var we = /^(?:parents|prev(?:Until|All))/
      , Se = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    de.fn.extend({
        has: function(e) {
            var t = de(e, this)
              , i = t.length;
            return this.filter(function() {
                for (var e = 0; e < i; e++)
                    if (de.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var i, n = 0, r = this.length, o = [], a = "string" != typeof e && de(e);
            if (!ye.test(e))
                for (; n < r; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (a ? -1 < a.index(i) : 1 === i.nodeType && de.find.matchesSelector(i, e))) {
                            o.push(i);
                            break
                        }
            return this.pushStack(1 < o.length ? de.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ne.call(de(e), this[0]) : ne.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(de.uniqueSort(de.merge(this.get(), de(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    de.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ge(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return ge(e, "parentNode", i)
        },
        next: function(e) {
            return s(e, "nextSibling")
        },
        prev: function(e) {
            return s(e, "previousSibling")
        },
        nextAll: function(e) {
            return ge(e, "nextSibling")
        },
        prevAll: function(e) {
            return ge(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return ge(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return ge(e, "previousSibling", i)
        },
        siblings: function(e) {
            return ve((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ve(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (o(e, "template") && (e = e.content || e),
            de.merge([], e.childNodes))
        }
    }, function(e, t) {
        de.fn[e] = function(i, n) {
            var r = de.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i),
            n && "string" == typeof n && (r = de.filter(n, r)),
            1 < this.length && (Se[e] || de.uniqueSort(r),
            we.test(e) && r.reverse()),
            this.pushStack(r)
        }
    });
    var Pe = /[^\x20\t\r\n\f]+/g;
    de.Callbacks = function(e) {
        var t, i;
        e = "string" == typeof e ? (t = e,
        i = {},
        de.each(t.match(Pe) || [], function(e, t) {
            i[t] = !0
        }),
        i) : de.extend({}, e);
        var r, o, a, s, l = [], u = [], c = -1, f = function() {
            for (s = s || e.once,
            a = r = !0; u.length; c = -1)
                for (o = u.shift(); ++c < l.length; )
                    !1 === l[c].apply(o[0], o[1]) && e.stopOnFalse && (c = l.length,
                    o = !1);
            e.memory || (o = !1),
            r = !1,
            s && (l = o ? [] : "")
        }, h = {
            add: function() {
                return l && (o && !r && (c = l.length - 1,
                u.push(o)),
                function t(i) {
                    de.each(i, function(i, r) {
                        ce(r) ? e.unique && h.has(r) || l.push(r) : r && r.length && "string" !== n(r) && t(r)
                    })
                }(arguments),
                o && !r && f()),
                this
            },
            remove: function() {
                return de.each(arguments, function(e, t) {
                    for (var i; -1 < (i = de.inArray(t, l, i)); )
                        l.splice(i, 1),
                        i <= c && c--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < de.inArray(e, l) : 0 < l.length
            },
            empty: function() {
                return l && (l = []),
                this
            },
            disable: function() {
                return s = u = [],
                l = o = "",
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return s = u = [],
                o || r || (l = o = ""),
                this
            },
            locked: function() {
                return !!s
            },
            fireWith: function(e, t) {
                return s || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                r || f()),
                this
            },
            fire: function() {
                return h.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!a
            }
        };
        return h
    }
    ,
    de.extend({
        Deferred: function(t) {
            var i = [["notify", "progress", de.Callbacks("memory"), de.Callbacks("memory"), 2], ["resolve", "done", de.Callbacks("once memory"), de.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", de.Callbacks("once memory"), de.Callbacks("once memory"), 1, "rejected"]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return r.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return de.Deferred(function(t) {
                        de.each(i, function(i, n) {
                            var r = ce(e[n[4]]) && e[n[4]];
                            o[n[1]](function() {
                                var e = r && r.apply(this, arguments);
                                e && ce(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, r ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, n, r) {
                    function o(t, i, n, r) {
                        return function() {
                            var s = this
                              , c = arguments
                              , f = function() {
                                var e, f;
                                if (!(t < a)) {
                                    if ((e = n.apply(s, c)) === i.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    f = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    ce(f) ? r ? f.call(e, o(a, i, l, r), o(a, i, u, r)) : (a++,
                                    f.call(e, o(a, i, l, r), o(a, i, u, r), o(a, i, l, i.notifyWith))) : (n !== l && (s = void 0,
                                    c = [e]),
                                    (r || i.resolveWith)(s, c))
                                }
                            }
                              , h = r ? f : function() {
                                try {
                                    f()
                                } catch (e) {
                                    de.Deferred.exceptionHook && de.Deferred.exceptionHook(e, h.stackTrace),
                                    a <= t + 1 && (n !== u && (s = void 0,
                                    c = [e]),
                                    i.rejectWith(s, c))
                                }
                            }
                            ;
                            t ? h() : (de.Deferred.getStackHook && (h.stackTrace = de.Deferred.getStackHook()),
                            e.setTimeout(h))
                        }
                    }
                    var a = 0;
                    return de.Deferred(function(e) {
                        i[0][3].add(o(0, e, ce(r) ? r : l, e.notifyWith)),
                        i[1][3].add(o(0, e, ce(t) ? t : l)),
                        i[2][3].add(o(0, e, ce(n) ? n : u))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? de.extend(e, r) : r
                }
            }
              , o = {};
            return de.each(i, function(e, t) {
                var a = t[2]
                  , s = t[5];
                r[t[1]] = a.add,
                s && a.add(function() {
                    n = s
                }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock),
                a.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = a.fireWith
            }),
            r.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , i = t
              , n = Array(i)
              , r = ee.call(arguments)
              , o = de.Deferred()
              , a = function(e) {
                return function(i) {
                    n[e] = this,
                    r[e] = 1 < arguments.length ? ee.call(arguments) : i,
                    --t || o.resolveWith(n, r)
                }
            };
            if (t <= 1 && (c(e, o.done(a(i)).resolve, o.reject, !t),
            "pending" === o.state() || ce(r[i] && r[i].then)))
                return o.then();
            for (; i--; )
                c(r[i], a(i), o.reject);
            return o.promise()
        }
    });
    var Ce = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    de.Deferred.exceptionHook = function(t, i) {
        e.console && e.console.warn && t && Ce.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    }
    ,
    de.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var ke = de.Deferred();
    de.fn.ready = function(e) {
        return ke.then(e).catch(function(e) {
            de.readyException(e)
        }),
        this
    }
    ,
    de.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --de.readyWait : de.isReady) || (de.isReady = !0) !== e && 0 < --de.readyWait || ke.resolveWith(J, [de])
        }
    }),
    de.ready.then = ke.then,
    "complete" === J.readyState || "loading" !== J.readyState && !J.documentElement.doScroll ? e.setTimeout(de.ready) : (J.addEventListener("DOMContentLoaded", f),
    e.addEventListener("load", f));
    var Re = function(e, t, i, r, o, a, s) {
        var l = 0
          , u = e.length
          , c = null == i;
        if ("object" === n(i))
            for (l in o = !0,
            i)
                Re(e, t, l, i[l], !0, a, s);
        else if (void 0 !== r && (o = !0,
        ce(r) || (s = !0),
        c && (s ? (t.call(e, r),
        t = null) : (c = t,
        t = function(e, t, i) {
            return c.call(de(e), i)
        }
        )),
        t))
            for (; l < u; l++)
                t(e[l], i, s ? r : r.call(e[l], l, t(e[l], i)));
        return o ? e : c ? t.call(e) : u ? t(e[0], i) : a
    }
      , Oe = /^-ms-/
      , Ae = /-([a-z])/g
      , De = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    d.uid = 1,
    d.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            De(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, i) {
            var n, r = this.cache(e);
            if ("string" == typeof t)
                r[p(t)] = i;
            else
                for (n in t)
                    r[p(n)] = t[n];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][p(t)]
        },
        access: function(e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i),
            void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    i = (t = Array.isArray(t) ? t.map(p) : (t = p(t))in n ? [t] : t.match(Pe) || []).length;
                    for (; i--; )
                        delete n[t[i]]
                }
                (void 0 === t || de.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !de.isEmptyObject(t)
        }
    };
    var Ee = new d
      , Me = new d
      , Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Le = /[A-Z]/g;
    de.extend({
        hasData: function(e) {
            return Me.hasData(e) || Ee.hasData(e)
        },
        data: function(e, t, i) {
            return Me.access(e, t, i)
        },
        removeData: function(e, t) {
            Me.remove(e, t)
        },
        _data: function(e, t, i) {
            return Ee.access(e, t, i)
        },
        _removeData: function(e, t) {
            Ee.remove(e, t)
        }
    }),
    de.fn.extend({
        data: function(e, t) {
            var i, n, r, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Me.get(o),
                1 === o.nodeType && !Ee.get(o, "hasDataAttrs"))) {
                    for (i = a.length; i--; )
                        a[i] && 0 === (n = a[i].name).indexOf("data-") && (n = p(n.slice(5)),
                        m(o, n, r[n]));
                    Ee.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                Me.set(this, e)
            }) : Re(this, function(t) {
                var i;
                if (o && void 0 === t)
                    return void 0 !== (i = Me.get(o, e)) ? i : void 0 !== (i = m(o, e)) ? i : void 0;
                this.each(function() {
                    Me.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Me.remove(this, e)
            })
        }
    }),
    de.extend({
        queue: function(e, t, i) {
            var n;
            if (e)
                return t = (t || "fx") + "queue",
                n = Ee.get(e, t),
                i && (!n || Array.isArray(i) ? n = Ee.access(e, t, de.makeArray(i)) : n.push(i)),
                n || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = de.queue(e, t)
              , n = i.length
              , r = i.shift()
              , o = de._queueHooks(e, t);
            "inprogress" === r && (r = i.shift(),
            n--),
            r && ("fx" === t && i.unshift("inprogress"),
            delete o.stop,
            r.call(e, function() {
                de.dequeue(e, t)
            }, o)),
            !n && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return Ee.get(e, i) || Ee.access(e, i, {
                empty: de.Callbacks("once memory").add(function() {
                    Ee.remove(e, [t + "queue", i])
                })
            })
        }
    }),
    de.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            i--),
            arguments.length < i ? de.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var i = de.queue(this, e, t);
                de._queueHooks(this, e),
                "fx" === e && "inprogress" !== i[0] && de.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                de.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1, r = de.Deferred(), o = this, a = this.length, s = function() {
                --n || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (i = Ee.get(o[a], e + "queueHooks")) && i.empty && (n++,
                i.empty.add(s));
            return s(),
            r.promise(t)
        }
    });
    var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , je = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$","i")
      , Ie = ["Top", "Right", "Bottom", "Left"]
      , ze = J.documentElement
      , qe = function(e) {
        return de.contains(e.ownerDocument, e)
    }
      , Be = {
        composed: !0
    };
    ze.getRootNode && (qe = function(e) {
        return de.contains(e.ownerDocument, e) || e.getRootNode(Be) === e.ownerDocument
    }
    );
    var He = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && qe(e) && "none" === de.css(e, "display")
    }
      , Xe = function(e, t, i, n) {
        var r, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        for (o in r = i.apply(e, n || []),
        t)
            e.style[o] = a[o];
        return r
    }
      , Ue = {};
    de.fn.extend({
        show: function() {
            return g(this, !0)
        },
        hide: function() {
            return g(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                He(this) ? de(this).show() : de(this).hide()
            })
        }
    });
    var We = /^(?:checkbox|radio)$/i
      , $e = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , Ye = /^$|^module$|\/(?:java|ecma)script/i
      , Ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Ge.optgroup = Ge.option,
    Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead,
    Ge.th = Ge.td;
    var Ve, Qe, Ze = /<|&#?\w+;/;
    Ve = J.createDocumentFragment().appendChild(J.createElement("div")),
    (Qe = J.createElement("input")).setAttribute("type", "radio"),
    Qe.setAttribute("checked", "checked"),
    Qe.setAttribute("name", "t"),
    Ve.appendChild(Qe),
    ue.checkClone = Ve.cloneNode(!0).cloneNode(!0).lastChild.checked,
    Ve.innerHTML = "<textarea>x</textarea>",
    ue.noCloneChecked = !!Ve.cloneNode(!0).lastChild.defaultValue;
    var Je = /^key/
      , Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , et = /^([^.]*)(?:\.(.+)|)/;
    de.event = {
        global: {},
        add: function(e, t, i, n, r) {
            var o, a, s, l, u, c, f, h, p, d, m, _ = Ee.get(e);
            if (_)
                for (i.handler && (i = (o = i).handler,
                r = o.selector),
                r && de.find.matchesSelector(ze, r),
                i.guid || (i.guid = de.guid++),
                (l = _.events) || (l = _.events = {}),
                (a = _.handle) || (a = _.handle = function(t) {
                    return void 0 !== de && de.event.triggered !== t.type ? de.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                u = (t = (t || "").match(Pe) || [""]).length; u--; )
                    p = m = (s = et.exec(t[u]) || [])[1],
                    d = (s[2] || "").split(".").sort(),
                    p && (f = de.event.special[p] || {},
                    p = (r ? f.delegateType : f.bindType) || p,
                    f = de.event.special[p] || {},
                    c = de.extend({
                        type: p,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && de.expr.match.needsContext.test(r),
                        namespace: d.join(".")
                    }, o),
                    (h = l[p]) || ((h = l[p] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, n, d, a) || e.addEventListener && e.addEventListener(p, a)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = i.guid)),
                    r ? h.splice(h.delegateCount++, 0, c) : h.push(c),
                    de.event.global[p] = !0)
        },
        remove: function(e, t, i, n, r) {
            var o, a, s, l, u, c, f, h, p, d, m, _ = Ee.hasData(e) && Ee.get(e);
            if (_ && (l = _.events)) {
                for (u = (t = (t || "").match(Pe) || [""]).length; u--; )
                    if (p = m = (s = et.exec(t[u]) || [])[1],
                    d = (s[2] || "").split(".").sort(),
                    p) {
                        for (f = de.event.special[p] || {},
                        h = l[p = (n ? f.delegateType : f.bindType) || p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = h.length; o--; )
                            c = h[o],
                            !r && m !== c.origType || i && i.guid !== c.guid || s && !s.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (h.splice(o, 1),
                            c.selector && h.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !h.length && (f.teardown && !1 !== f.teardown.call(e, d, _.handle) || de.removeEvent(e, p, _.handle),
                        delete l[p])
                    } else
                        for (p in l)
                            de.event.remove(e, p + t[u], i, n, !0);
                de.isEmptyObject(l) && Ee.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, i, n, r, o, a, s = de.event.fix(e), l = new Array(arguments.length), u = (Ee.get(this, "events") || {})[s.type] || [], c = de.event.special[s.type] || {};
            for (l[0] = s,
            t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (s.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = de.event.handlers.call(this, s, u),
                t = 0; (r = a[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = r.elem,
                    i = 0; (o = r.handlers[i++]) && !s.isImmediatePropagationStopped(); )
                        s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                        s.data = o.data,
                        void 0 !== (n = ((de.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (s.result = n) && (s.preventDefault(),
                        s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(e, t) {
            var i, n, r, o, a, s = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [],
                        a = {},
                        i = 0; i < l; i++)
                            void 0 === a[r = (n = t[i]).selector + " "] && (a[r] = n.needsContext ? -1 < de(r, this).index(u) : de.find(r, this, null, [u]).length),
                            a[r] && o.push(n);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return u = this,
            l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }),
            s
        },
        addProp: function(e, t) {
            Object.defineProperty(de.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: ce(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[de.expando] ? e : new de.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return We.test(t.type) && t.click && o(t, "input") && P(t, "click", x),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return We.test(t.type) && t.click && o(t, "input") && P(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return We.test(t.type) && t.click && o(t, "input") && Ee.get(t, "click") || o(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    de.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }
    ,
    de.Event = function(e, t) {
        if (!(this instanceof de.Event))
            return new de.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? x : b,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && de.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[de.expando] = !0
    }
    ,
    de.Event.prototype = {
        constructor: de.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = x,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = x,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = x,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    de.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Je.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, de.event.addProp),
    de.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        de.event.special[e] = {
            setup: function() {
                return P(this, e, w),
                !1
            },
            trigger: function() {
                return P(this, e),
                !0
            },
            delegateType: t
        }
    }),
    de.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        de.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || de.contains(this, n)) || (e.type = r.origType,
                i = r.handler.apply(this, arguments),
                e.type = t),
                i
            }
        }
    }),
    de.fn.extend({
        on: function(e, t, i, n) {
            return S(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return S(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, r;
            if (e && e.preventDefault && e.handleObj)
                return n = e.handleObj,
                de(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
                this;
            if ("object" == typeof e) {
                for (r in e)
                    this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (i = t,
            t = void 0),
            !1 === i && (i = b),
            this.each(function() {
                de.event.remove(this, e, i, t)
            })
        }
    });
    var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , it = /<script|<style|<link/i
      , nt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    de.extend({
        htmlPrefilter: function(e) {
            return e.replace(tt, "<$1></$2>")
        },
        clone: function(e, t, i) {
            var n, r, o, a, s, l, u, c = e.cloneNode(!0), f = qe(e);
            if (!(ue.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || de.isXMLDoc(e)))
                for (a = v(c),
                n = 0,
                r = (o = v(e)).length; n < r; n++)
                    s = o[n],
                    l = a[n],
                    "input" === (u = l.nodeName.toLowerCase()) && We.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
            if (t)
                if (i)
                    for (o = o || v(e),
                    a = a || v(c),
                    n = 0,
                    r = o.length; n < r; n++)
                        O(o[n], a[n]);
                else
                    O(e, c);
            return 0 < (a = v(c, "script")).length && y(a, !f && v(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, i, n, r = de.event.special, o = 0; void 0 !== (i = e[o]); o++)
                if (De(i)) {
                    if (t = i[Ee.expando]) {
                        if (t.events)
                            for (n in t.events)
                                r[n] ? de.event.remove(i, n) : de.removeEvent(i, n, t.handle);
                        i[Ee.expando] = void 0
                    }
                    i[Me.expando] && (i[Me.expando] = void 0)
                }
        }
    }),
    de.fn.extend({
        detach: function(e) {
            return D(this, e, !0)
        },
        remove: function(e) {
            return D(this, e)
        },
        text: function(e) {
            return Re(this, function(e) {
                return void 0 === e ? de.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return A(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || C(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return A(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = C(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return A(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return A(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (de.cleanData(v(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return de.clone(this, e, t)
            })
        },
        html: function(e) {
            return Re(this, function(e) {
                var t = this[0] || {}
                  , i = 0
                  , n = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !it.test(e) && !Ge[($e.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = de.htmlPrefilter(e);
                    try {
                        for (; i < n; i++)
                            1 === (t = this[i] || {}).nodeType && (de.cleanData(v(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return A(this, arguments, function(t) {
                var i = this.parentNode;
                de.inArray(this, e) < 0 && (de.cleanData(v(this)),
                i && i.replaceChild(t, this))
            }, e)
        }
    }),
    de.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        de.fn[e] = function(e) {
            for (var i, n = [], r = de(e), o = r.length - 1, a = 0; a <= o; a++)
                i = a === o ? this : this.clone(!0),
                de(r[a])[t](i),
                ie.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var ot = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$","i")
      , at = function(t) {
        var i = t.ownerDocument.defaultView;
        return i && i.opener || (i = e),
        i.getComputedStyle(t)
    }
      , st = new RegExp(Ie.join("|"),"i");
    !function() {
        function t() {
            if (u) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                ze.appendChild(l).appendChild(u);
                var t = e.getComputedStyle(u);
                n = "1%" !== t.top,
                s = 12 === i(t.marginLeft),
                u.style.right = "60%",
                a = 36 === i(t.right),
                r = 36 === i(t.width),
                u.style.position = "absolute",
                o = 12 === i(u.offsetWidth / 3),
                ze.removeChild(l),
                u = null
            }
        }
        function i(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, o, a, s, l = J.createElement("div"), u = J.createElement("div");
        u.style && (u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        ue.clearCloneStyle = "content-box" === u.style.backgroundClip,
        de.extend(ue, {
            boxSizingReliable: function() {
                return t(),
                r
            },
            pixelBoxStyles: function() {
                return t(),
                a
            },
            pixelPosition: function() {
                return t(),
                n
            },
            reliableMarginLeft: function() {
                return t(),
                s
            },
            scrollboxSize: function() {
                return t(),
                o
            }
        }))
    }();
    var lt = ["Webkit", "Moz", "ms"]
      , ut = J.createElement("div").style
      , ct = {}
      , ft = /^(none|table(?!-c[ea]).+)/
      , ht = /^--/
      , pt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , dt = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    de.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = E(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = p(t), l = ht.test(t), u = e.style;
                if (l || (t = N(s)),
                a = de.cssHooks[t] || de.cssHooks[s],
                void 0 === i)
                    return a && "get"in a && void 0 !== (r = a.get(e, !1, n)) ? r : u[t];
                "string" == (o = typeof i) && (r = je.exec(i)) && r[1] && (i = _(e, t, r),
                o = "number"),
                null != i && i == i && ("number" !== o || l || (i += r && r[3] || (de.cssNumber[s] ? "" : "px")),
                ue.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                a && "set"in a && void 0 === (i = a.set(e, i, n)) || (l ? u.setProperty(t, i) : u[t] = i))
            }
        },
        css: function(e, t, i, n) {
            var r, o, a, s = p(t);
            return ht.test(t) || (t = N(s)),
            (a = de.cssHooks[t] || de.cssHooks[s]) && "get"in a && (r = a.get(e, !0, i)),
            void 0 === r && (r = E(e, t, n)),
            "normal" === r && t in dt && (r = dt[t]),
            "" === i || i ? (o = parseFloat(r),
            !0 === i || isFinite(o) ? o || 0 : r) : r
        }
    }),
    de.each(["height", "width"], function(e, t) {
        de.cssHooks[t] = {
            get: function(e, i, n) {
                if (i)
                    return !ft.test(de.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? j(e, t, n) : Xe(e, pt, function() {
                        return j(e, t, n)
                    })
            },
            set: function(e, i, n) {
                var r, o = at(e), a = !ue.scrollboxSize() && "absolute" === o.position, s = (a || n) && "border-box" === de.css(e, "boxSizing", !1, o), l = n ? F(e, t, n, s, o) : 0;
                return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - F(e, t, "border", !1, o) - .5)),
                l && (r = je.exec(i)) && "px" !== (r[3] || "px") && (e.style[t] = i,
                i = de.css(e, t)),
                L(0, i, l)
            }
        }
    }),
    de.cssHooks.marginLeft = M(ue.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(E(e, "marginLeft")) || e.getBoundingClientRect().left - Xe(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    de.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        de.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++)
                    r[e + Ie[n] + t] = o[n] || o[n - 2] || o[0];
                return r
            }
        },
        "margin" !== e && (de.cssHooks[e + t].set = L)
    }),
    de.fn.extend({
        css: function(e, t) {
            return Re(this, function(e, t, i) {
                var n, r, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (n = at(e),
                    r = t.length; a < r; a++)
                        o[t[a]] = de.css(e, t[a], !1, n);
                    return o
                }
                return void 0 !== i ? de.style(e, t, i) : de.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((de.Tween = I).prototype = {
        constructor: I,
        init: function(e, t, i, n, r, o) {
            this.elem = e,
            this.prop = i,
            this.easing = r || de.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = n,
            this.unit = o || (de.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = I.propHooks[this.prop];
            return e && e.get ? e.get(this) : I.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = I.propHooks[this.prop];
            return this.options.duration ? this.pos = t = de.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : I.propHooks._default.set(this),
            this
        }
    }).init.prototype = I.prototype,
    (I.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = de.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                de.fx.step[e.prop] ? de.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !de.cssHooks[e.prop] && null == e.elem.style[N(e.prop)] ? e.elem[e.prop] = e.now : de.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = I.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    de.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    de.fx = I.prototype.init,
    de.fx.step = {};
    var mt, _t, gt, vt, yt = /^(?:toggle|show|hide)$/, Tt = /queueHooks$/;
    de.Animation = de.extend(X, {
        tweeners: {
            "*": [function(e, t) {
                var i = this.createTween(e, t);
                return _(i.elem, e, je.exec(t), i),
                i
            }
            ]
        },
        tweener: function(e, t) {
            ce(e) ? (t = e,
            e = ["*"]) : e = e.match(Pe);
            for (var i, n = 0, r = e.length; n < r; n++)
                i = e[n],
                X.tweeners[i] = X.tweeners[i] || [],
                X.tweeners[i].unshift(t)
        },
        prefilters: [function(e, t, i) {
            var n, r, o, a, s, l, u, c, f = "width"in t || "height"in t, h = this, p = {}, d = e.style, m = e.nodeType && He(e), _ = Ee.get(e, "fxshow");
            for (n in i.queue || (null == (a = de._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            h.always(function() {
                h.always(function() {
                    a.unqueued--,
                    de.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (r = t[n],
                yt.test(r)) {
                    if (delete t[n],
                    o = o || "toggle" === r,
                    r === (m ? "hide" : "show")) {
                        if ("show" !== r || !_ || void 0 === _[n])
                            continue;
                        m = !0
                    }
                    p[n] = _ && _[n] || de.style(e, n)
                }
            if ((l = !de.isEmptyObject(t)) || !de.isEmptyObject(p))
                for (n in f && 1 === e.nodeType && (i.overflow = [d.overflow, d.overflowX, d.overflowY],
                null == (u = _ && _.display) && (u = Ee.get(e, "display")),
                "none" === (c = de.css(e, "display")) && (u ? c = u : (g([e], !0),
                u = e.style.display || u,
                c = de.css(e, "display"),
                g([e]))),
                ("inline" === c || "inline-block" === c && null != u) && "none" === de.css(e, "float") && (l || (h.done(function() {
                    d.display = u
                }),
                null == u && (c = d.display,
                u = "none" === c ? "" : c)),
                d.display = "inline-block")),
                i.overflow && (d.overflow = "hidden",
                h.always(function() {
                    d.overflow = i.overflow[0],
                    d.overflowX = i.overflow[1],
                    d.overflowY = i.overflow[2]
                })),
                l = !1,
                p)
                    l || (_ ? "hidden"in _ && (m = _.hidden) : _ = Ee.access(e, "fxshow", {
                        display: u
                    }),
                    o && (_.hidden = !m),
                    m && g([e], !0),
                    h.done(function() {
                        for (n in m || g([e]),
                        Ee.remove(e, "fxshow"),
                        p)
                            de.style(e, n, p[n])
                    })),
                    l = H(m ? _[n] : 0, n, h),
                    n in _ || (_[n] = l.start,
                    m && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? X.prefilters.unshift(e) : X.prefilters.push(e)
        }
    }),
    de.speed = function(e, t, i) {
        var n = e && "object" == typeof e ? de.extend({}, e) : {
            complete: i || !i && t || ce(e) && e,
            duration: e,
            easing: i && t || t && !ce(t) && t
        };
        return de.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in de.fx.speeds ? n.duration = de.fx.speeds[n.duration] : n.duration = de.fx.speeds._default),
        null != n.queue && !0 !== n.queue || (n.queue = "fx"),
        n.old = n.complete,
        n.complete = function() {
            ce(n.old) && n.old.call(this),
            n.queue && de.dequeue(this, n.queue)
        }
        ,
        n
    }
    ,
    de.fn.extend({
        fadeTo: function(e, t, i, n) {
            return this.filter(He).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function(e, t, i, n) {
            var r = de.isEmptyObject(e)
              , o = de.speed(t, i, n)
              , a = function() {
                var t = X(this, de.extend({}, e), o);
                (r || Ee.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, i) {
            var n = function(e) {
                var t = e.stop;
                delete e.stop,
                t(i)
            };
            return "string" != typeof e && (i = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , r = null != e && e + "queueHooks"
                  , o = de.timers
                  , a = Ee.get(this);
                if (r)
                    a[r] && a[r].stop && n(a[r]);
                else
                    for (r in a)
                        a[r] && a[r].stop && Tt.test(r) && n(a[r]);
                for (r = o.length; r--; )
                    o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(i),
                    t = !1,
                    o.splice(r, 1));
                !t && i || de.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, i = Ee.get(this), n = i[e + "queue"], r = i[e + "queueHooks"], o = de.timers, a = n ? n.length : 0;
                for (i.finish = !0,
                de.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < a; t++)
                    n[t] && n[t].finish && n[t].finish.call(this);
                delete i.finish
            })
        }
    }),
    de.each(["toggle", "show", "hide"], function(e, t) {
        var i = de.fn[t];
        de.fn[t] = function(e, n, r) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(B(t, !0), e, n, r)
        }
    }),
    de.each({
        slideDown: B("show"),
        slideUp: B("hide"),
        slideToggle: B("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        de.fn[e] = function(e, i, n) {
            return this.animate(t, e, i, n)
        }
    }),
    de.timers = [],
    de.fx.tick = function() {
        var e, t = 0, i = de.timers;
        for (mt = Date.now(); t < i.length; t++)
            (e = i[t])() || i[t] !== e || i.splice(t--, 1);
        i.length || de.fx.stop(),
        mt = void 0
    }
    ,
    de.fx.timer = function(e) {
        de.timers.push(e),
        de.fx.start()
    }
    ,
    de.fx.interval = 13,
    de.fx.start = function() {
        _t || (_t = !0,
        z())
    }
    ,
    de.fx.stop = function() {
        _t = null
    }
    ,
    de.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    de.fn.delay = function(t, i) {
        return t = de.fx && de.fx.speeds[t] || t,
        i = i || "fx",
        this.queue(i, function(i, n) {
            var r = e.setTimeout(i, t);
            n.stop = function() {
                e.clearTimeout(r)
            }
        })
    }
    ,
    gt = J.createElement("input"),
    vt = J.createElement("select").appendChild(J.createElement("option")),
    gt.type = "checkbox",
    ue.checkOn = "" !== gt.value,
    ue.optSelected = vt.selected,
    (gt = J.createElement("input")).value = "t",
    gt.type = "radio",
    ue.radioValue = "t" === gt.value;
    var xt, bt = de.expr.attrHandle;
    de.fn.extend({
        attr: function(e, t) {
            return Re(this, de.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                de.removeAttr(this, e)
            })
        }
    }),
    de.extend({
        attr: function(e, t, i) {
            var n, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? de.prop(e, t, i) : (1 === o && de.isXMLDoc(e) || (r = de.attrHooks[t.toLowerCase()] || (de.expr.match.bool.test(t) ? xt : void 0)),
                void 0 !== i ? null === i ? void de.removeAttr(e, t) : r && "set"in r && void 0 !== (n = r.set(e, i, t)) ? n : (e.setAttribute(t, i + ""),
                i) : r && "get"in r && null !== (n = r.get(e, t)) ? n : null == (n = de.find.attr(e, t)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ue.radioValue && "radio" === t && o(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t),
                        i && (e.value = i),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n = 0, r = t && t.match(Pe);
            if (r && 1 === e.nodeType)
                for (; i = r[n++]; )
                    e.removeAttribute(i)
        }
    }),
    xt = {
        set: function(e, t, i) {
            return !1 === t ? de.removeAttr(e, i) : e.setAttribute(i, i),
            i
        }
    },
    de.each(de.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var i = bt[t] || de.find.attr;
        bt[t] = function(e, t, n) {
            var r, o, a = t.toLowerCase();
            return n || (o = bt[a],
            bt[a] = r,
            r = null != i(e, t, n) ? a : null,
            bt[a] = o),
            r
        }
    });
    var wt = /^(?:input|select|textarea|button)$/i
      , St = /^(?:a|area)$/i;
    de.fn.extend({
        prop: function(e, t) {
            return Re(this, de.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[de.propFix[e] || e]
            })
        }
    }),
    de.extend({
        prop: function(e, t, i) {
            var n, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && de.isXMLDoc(e) || (t = de.propFix[t] || t,
                r = de.propHooks[t]),
                void 0 !== i ? r && "set"in r && void 0 !== (n = r.set(e, i, t)) ? n : e[t] = i : r && "get"in r && null !== (n = r.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = de.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wt.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    ue.optSelected || (de.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    de.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        de.propFix[this.toLowerCase()] = this
    }),
    de.fn.extend({
        addClass: function(e) {
            var t, i, n, r, o, a, s, l = 0;
            if (ce(e))
                return this.each(function(t) {
                    de(this).addClass(e.call(this, t, W(this)))
                });
            if ((t = $(e)).length)
                for (; i = this[l++]; )
                    if (r = W(i),
                    n = 1 === i.nodeType && " " + U(r) + " ") {
                        for (a = 0; o = t[a++]; )
                            n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        r !== (s = U(n)) && i.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, r, o, a, s, l = 0;
            if (ce(e))
                return this.each(function(t) {
                    de(this).removeClass(e.call(this, t, W(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = $(e)).length)
                for (; i = this[l++]; )
                    if (r = W(i),
                    n = 1 === i.nodeType && " " + U(r) + " ") {
                        for (a = 0; o = t[a++]; )
                            for (; -1 < n.indexOf(" " + o + " "); )
                                n = n.replace(" " + o + " ", " ");
                        r !== (s = U(n)) && i.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e
              , n = "string" === i || Array.isArray(e);
            return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : ce(e) ? this.each(function(i) {
                de(this).toggleClass(e.call(this, i, W(this), t), t)
            }) : this.each(function() {
                var t, r, o, a;
                if (n)
                    for (r = 0,
                    o = de(this),
                    a = $(e); t = a[r++]; )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                    void 0 !== e && "boolean" !== i || ((t = W(this)) && Ee.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ee.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++]; )
                if (1 === i.nodeType && -1 < (" " + U(W(i)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var Pt = /\r/g;
    de.fn.extend({
        val: function(e) {
            var t, i, n, r = this[0];
            return arguments.length ? (n = ce(e),
            this.each(function(i) {
                var r;
                1 === this.nodeType && (null == (r = n ? e.call(this, i, de(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = de.map(r, function(e) {
                    return null == e ? "" : e + ""
                })),
                (t = de.valHooks[this.type] || de.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = de.valHooks[r.type] || de.valHooks[r.nodeName.toLowerCase()]) && "get"in t && void 0 !== (i = t.get(r, "value")) ? i : "string" == typeof (i = r.value) ? i.replace(Pt, "") : null == i ? "" : i : void 0
        }
    }),
    de.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = de.find.attr(e, "value");
                    return null != t ? t : U(de.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, i, n, r = e.options, a = e.selectedIndex, s = "select-one" === e.type, l = s ? null : [], u = s ? a + 1 : r.length;
                    for (n = a < 0 ? u : s ? a : 0; n < u; n++)
                        if (((i = r[n]).selected || n === a) && !i.disabled && (!i.parentNode.disabled || !o(i.parentNode, "optgroup"))) {
                            if (t = de(i).val(),
                            s)
                                return t;
                            l.push(t)
                        }
                    return l
                },
                set: function(e, t) {
                    for (var i, n, r = e.options, o = de.makeArray(t), a = r.length; a--; )
                        ((n = r[a]).selected = -1 < de.inArray(de.valHooks.option.get(n), o)) && (i = !0);
                    return i || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    de.each(["radio", "checkbox"], function() {
        de.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < de.inArray(de(e).val(), t)
            }
        },
        ue.checkOn || (de.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    ue.focusin = "onfocusin"in e;
    var Ct = /^(?:focusinfocus|focusoutblur)$/
      , kt = function(e) {
        e.stopPropagation()
    };
    de.extend(de.event, {
        trigger: function(t, i, n, r) {
            var o, a, s, l, u, c, f, h, p = [n || J], d = ae.call(t, "type") ? t.type : t, m = ae.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = h = s = n = n || J,
            3 !== n.nodeType && 8 !== n.nodeType && !Ct.test(d + de.event.triggered) && (-1 < d.indexOf(".") && (d = (m = d.split(".")).shift(),
            m.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (t = t[de.expando] ? t : new de.Event(d,"object" == typeof t && t)).isTrigger = r ? 2 : 3,
            t.namespace = m.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = n),
            i = null == i ? [t] : de.makeArray(i, [t]),
            f = de.event.special[d] || {},
            r || !f.trigger || !1 !== f.trigger.apply(n, i))) {
                if (!r && !f.noBubble && !fe(n)) {
                    for (l = f.delegateType || d,
                    Ct.test(l + d) || (a = a.parentNode); a; a = a.parentNode)
                        p.push(a),
                        s = a;
                    s === (n.ownerDocument || J) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = p[o++]) && !t.isPropagationStopped(); )
                    h = a,
                    t.type = 1 < o ? l : f.bindType || d,
                    (c = (Ee.get(a, "events") || {})[t.type] && Ee.get(a, "handle")) && c.apply(a, i),
                    (c = u && a[u]) && c.apply && De(a) && (t.result = c.apply(a, i),
                    !1 === t.result && t.preventDefault());
                return t.type = d,
                r || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), i) || !De(n) || u && ce(n[d]) && !fe(n) && ((s = n[u]) && (n[u] = null),
                de.event.triggered = d,
                t.isPropagationStopped() && h.addEventListener(d, kt),
                n[d](),
                t.isPropagationStopped() && h.removeEventListener(d, kt),
                de.event.triggered = void 0,
                s && (n[u] = s)),
                t.result
            }
        },
        simulate: function(e, t, i) {
            var n = de.extend(new de.Event, i, {
                type: e,
                isSimulated: !0
            });
            de.event.trigger(n, null, t)
        }
    }),
    de.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                de.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            if (i)
                return de.event.trigger(e, t, i, !0)
        }
    }),
    ue.focusin || de.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var i = function(e) {
            de.event.simulate(t, e.target, de.event.fix(e))
        };
        de.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this
                  , r = Ee.access(n, t);
                r || n.addEventListener(e, i, !0),
                Ee.access(n, t, (r || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this
                  , r = Ee.access(n, t) - 1;
                r ? Ee.access(n, t, r) : (n.removeEventListener(e, i, !0),
                Ee.remove(n, t))
            }
        }
    });
    var Rt = e.location
      , Ot = Date.now()
      , At = /\?/;
    de.parseXML = function(t) {
        var i;
        if (!t || "string" != typeof t)
            return null;
        try {
            i = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || de.error("Invalid XML: " + t),
        i
    }
    ;
    var Dt = /\[\]$/
      , Et = /\r?\n/g
      , Mt = /^(?:submit|button|image|reset|file)$/i
      , Nt = /^(?:input|select|textarea|keygen)/i;
    de.param = function(e, t) {
        var i, n = [], r = function(e, t) {
            var i = ce(t) ? t() : t;
            n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !de.isPlainObject(e))
            de.each(e, function() {
                r(this.name, this.value)
            });
        else
            for (i in e)
                Y(i, e[i], t, r);
        return n.join("&")
    }
    ,
    de.fn.extend({
        serialize: function() {
            return de.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = de.prop(this, "elements");
                return e ? de.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !de(this).is(":disabled") && Nt.test(this.nodeName) && !Mt.test(e) && (this.checked || !We.test(e))
            }).map(function(e, t) {
                var i = de(this).val();
                return null == i ? null : Array.isArray(i) ? de.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(Et, "\r\n")
                }
            }).get()
        }
    });
    var Lt = /%20/g
      , Ft = /#.*$/
      , jt = /([?&])_=[^&]*/
      , It = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , zt = /^(?:GET|HEAD)$/
      , qt = /^\/\//
      , Bt = {}
      , Ht = {}
      , Xt = "*/".concat("*")
      , Ut = J.createElement("a");
    Ut.href = Rt.href,
    de.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Rt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": de.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Q(Q(e, de.ajaxSettings), t) : Q(de.ajaxSettings, e)
        },
        ajaxPrefilter: G(Bt),
        ajaxTransport: G(Ht),
        ajax: function(t, i) {
            function n(t, i, n, s) {
                var u, h, p, T, x, b = i;
                c || (c = !0,
                l && e.clearTimeout(l),
                r = void 0,
                a = s || "",
                w.readyState = 0 < t ? 4 : 0,
                u = 200 <= t && t < 300 || 304 === t,
                n && (T = function(e, t, i) {
                    for (var n, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n)
                        for (r in s)
                            if (s[r] && s[r].test(n)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0]in i)
                        o = l[0];
                    else {
                        for (r in i) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            a || (a = r)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== l[0] && l.unshift(o),
                        i[o]
                }(d, w, n)),
                T = function(e, t, i, n) {
                    var r, o, a, s, l, u = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            u[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o; )
                        if (e.responseFields[o] && (i[e.responseFields[o]] = t),
                        !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = o,
                        o = c.shift())
                            if ("*" === o)
                                o = l;
                            else if ("*" !== l && l !== o) {
                                if (!(a = u[l + " " + o] || u["* " + o]))
                                    for (r in u)
                                        if ((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                            !0 === a ? a = u[r] : !0 !== u[r] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + l + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(d, T, w, u),
                u ? (d.ifModified && ((x = w.getResponseHeader("Last-Modified")) && (de.lastModified[o] = x),
                (x = w.getResponseHeader("etag")) && (de.etag[o] = x)),
                204 === t || "HEAD" === d.type ? b = "nocontent" : 304 === t ? b = "notmodified" : (b = T.state,
                h = T.data,
                u = !(p = T.error))) : (p = b,
                !t && b || (b = "error",
                t < 0 && (t = 0))),
                w.status = t,
                w.statusText = (i || b) + "",
                u ? g.resolveWith(m, [h, b, w]) : g.rejectWith(m, [w, b, p]),
                w.statusCode(y),
                y = void 0,
                f && _.trigger(u ? "ajaxSuccess" : "ajaxError", [w, d, u ? h : p]),
                v.fireWith(m, [w, b]),
                f && (_.trigger("ajaxComplete", [w, d]),
                --de.active || de.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (i = t,
            t = void 0),
            i = i || {};
            var r, o, a, s, l, u, c, f, h, p, d = de.ajaxSetup({}, i), m = d.context || d, _ = d.context && (m.nodeType || m.jquery) ? de(m) : de.event, g = de.Deferred(), v = de.Callbacks("once memory"), y = d.statusCode || {}, T = {}, x = {}, b = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (c) {
                        if (!s)
                            for (s = {}; t = It.exec(a); )
                                s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = s[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return c ? a : null
                },
                setRequestHeader: function(e, t) {
                    return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e,
                    T[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == c && (d.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (c)
                            w.always(e[w.status]);
                        else
                            for (t in e)
                                y[t] = [y[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || b;
                    return r && r.abort(t),
                    n(0, t),
                    this
                }
            };
            if (g.promise(w),
            d.url = ((t || d.url || Rt.href) + "").replace(qt, Rt.protocol + "//"),
            d.type = i.method || i.type || d.method || d.type,
            d.dataTypes = (d.dataType || "*").toLowerCase().match(Pe) || [""],
            null == d.crossDomain) {
                u = J.createElement("a");
                try {
                    u.href = d.url,
                    u.href = u.href,
                    d.crossDomain = Ut.protocol + "//" + Ut.host != u.protocol + "//" + u.host
                } catch (t) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = de.param(d.data, d.traditional)),
            V(Bt, d, i, w),
            c)
                return w;
            for (h in (f = de.event && d.global) && 0 == de.active++ && de.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !zt.test(d.type),
            o = d.url.replace(Ft, ""),
            d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Lt, "+")) : (p = d.url.slice(o.length),
            d.data && (d.processData || "string" == typeof d.data) && (o += (At.test(o) ? "&" : "?") + d.data,
            delete d.data),
            !1 === d.cache && (o = o.replace(jt, "$1"),
            p = (At.test(o) ? "&" : "?") + "_=" + Ot++ + p),
            d.url = o + p),
            d.ifModified && (de.lastModified[o] && w.setRequestHeader("If-Modified-Since", de.lastModified[o]),
            de.etag[o] && w.setRequestHeader("If-None-Match", de.etag[o])),
            (d.data && d.hasContent && !1 !== d.contentType || i.contentType) && w.setRequestHeader("Content-Type", d.contentType),
            w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xt + "; q=0.01" : "") : d.accepts["*"]),
            d.headers)
                w.setRequestHeader(h, d.headers[h]);
            if (d.beforeSend && (!1 === d.beforeSend.call(m, w, d) || c))
                return w.abort();
            if (b = "abort",
            v.add(d.complete),
            w.done(d.success),
            w.fail(d.error),
            r = V(Ht, d, i, w)) {
                if (w.readyState = 1,
                f && _.trigger("ajaxSend", [w, d]),
                c)
                    return w;
                d.async && 0 < d.timeout && (l = e.setTimeout(function() {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    c = !1,
                    r.send(T, n)
                } catch (t) {
                    if (c)
                        throw t;
                    n(-1, t)
                }
            } else
                n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, i) {
            return de.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return de.get(e, void 0, t, "script")
        }
    }),
    de.each(["get", "post"], function(e, t) {
        de[t] = function(e, i, n, r) {
            return ce(i) && (r = r || n,
            n = i,
            i = void 0),
            de.ajax(de.extend({
                url: e,
                type: t,
                dataType: r,
                data: i,
                success: n
            }, de.isPlainObject(e) && e))
        }
    }),
    de._evalUrl = function(e, t) {
        return de.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                de.globalEval(e, t)
            }
        })
    }
    ,
    de.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (ce(e) && (e = e.call(this[0])),
            t = de(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return ce(e) ? this.each(function(t) {
                de(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = de(this)
                  , i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ce(e);
            return this.each(function(i) {
                de(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                de(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    de.expr.pseudos.hidden = function(e) {
        return !de.expr.pseudos.visible(e)
    }
    ,
    de.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    de.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Wt = {
        0: 200,
        1223: 204
    }
      , $t = de.ajaxSettings.xhr();
    ue.cors = !!$t && "withCredentials"in $t,
    ue.ajax = $t = !!$t,
    de.ajaxTransport(function(t) {
        var i, n;
        if (ue.cors || $t && !t.crossDomain)
            return {
                send: function(r, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"),
                    r)
                        s.setRequestHeader(a, r[a]);
                    i = function(e) {
                        return function() {
                            i && (i = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Wt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = i(),
                    n = s.onerror = s.ontimeout = i("error"),
                    void 0 !== s.onabort ? s.onabort = n : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            i && n()
                        })
                    }
                    ,
                    i = i("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (r) {
                        if (i)
                            throw r
                    }
                },
                abort: function() {
                    i && i()
                }
            }
    }),
    de.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    de.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return de.globalEval(e),
                e
            }
        }
    }),
    de.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    de.ajaxTransport("script", function(e) {
        var t, i;
        if (e.crossDomain || e.scriptAttrs)
            return {
                send: function(n, r) {
                    t = de("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", i = function(e) {
                        t.remove(),
                        i = null,
                        e && r("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    J.head.appendChild(t[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Yt, Gt = [], Vt = /(=)\?(?=&|$)|\?\?/;
    de.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || de.expando + "_" + Ot++;
            return this[e] = !0,
            e
        }
    }),
    de.ajaxPrefilter("json jsonp", function(t, i, n) {
        var r, o, a, s = !1 !== t.jsonp && (Vt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return r = t.jsonpCallback = ce(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(Vt, "$1" + r) : !1 !== t.jsonp && (t.url += (At.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
            t.converters["script json"] = function() {
                return a || de.error(r + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[r],
            e[r] = function() {
                a = arguments
            }
            ,
            n.always(function() {
                void 0 === o ? de(e).removeProp(r) : e[r] = o,
                t[r] && (t.jsonpCallback = i.jsonpCallback,
                Gt.push(r)),
                a && ce(o) && o(a[0]),
                a = o = void 0
            }),
            "script"
    }),
    ue.createHTMLDocument = ((Yt = J.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Yt.childNodes.length),
    de.parseHTML = function(e, t, i) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t,
        t = !1),
        t || (ue.createHTMLDocument ? ((n = (t = J.implementation.createHTMLDocument("")).createElement("base")).href = J.location.href,
        t.head.appendChild(n)) : t = J),
        o = !i && [],
        (r = Te.exec(e)) ? [t.createElement(r[1])] : (r = T([e], t, o),
        o && o.length && de(o).remove(),
        de.merge([], r.childNodes)));
        var n, r, o
    }
    ,
    de.fn.load = function(e, t, i) {
        var n, r, o, a = this, s = e.indexOf(" ");
        return -1 < s && (n = U(e.slice(s)),
        e = e.slice(0, s)),
        ce(t) ? (i = t,
        t = void 0) : t && "object" == typeof t && (r = "POST"),
        0 < a.length && de.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(n ? de("<div>").append(de.parseHTML(e)).find(n) : e)
        }).always(i && function(e, t) {
            a.each(function() {
                i.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    de.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        de.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    de.expr.pseudos.animated = function(e) {
        return de.grep(de.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    de.offset = {
        setOffset: function(e, t, i) {
            var n, r, o, a, s, l, u = de.css(e, "position"), c = de(e), f = {};
            "static" === u && (e.style.position = "relative"),
            s = c.offset(),
            o = de.css(e, "top"),
            l = de.css(e, "left"),
            ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (a = (n = c.position()).top,
            r = n.left) : (a = parseFloat(o) || 0,
            r = parseFloat(l) || 0),
            ce(t) && (t = t.call(e, i, de.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + r),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    de.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    de.offset.setOffset(this, e, t)
                });
            var t, i, n = this[0];
            return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(),
            i = n.ownerDocument.defaultView,
            {
                top: t.top + i.pageYOffset,
                left: t.left + i.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === de.css(n, "position"))
                    t = n.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    i = n.ownerDocument,
                    e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === de.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== n && 1 === e.nodeType && ((r = de(e).offset()).top += de.css(e, "borderTopWidth", !0),
                    r.left += de.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - de.css(n, "marginTop", !0),
                    left: t.left - r.left - de.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === de.css(e, "position"); )
                    e = e.offsetParent;
                return e || ze
            })
        }
    }),
    de.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var i = "pageYOffset" === t;
        de.fn[e] = function(n) {
            return Re(this, function(e, n, r) {
                var o;
                if (fe(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                void 0 === r)
                    return o ? o[t] : e[n];
                o ? o.scrollTo(i ? o.pageXOffset : r, i ? r : o.pageYOffset) : e[n] = r
            }, e, n, arguments.length)
        }
    }),
    de.each(["top", "left"], function(e, t) {
        de.cssHooks[t] = M(ue.pixelPosition, function(e, i) {
            if (i)
                return i = E(e, t),
                ot.test(i) ? de(e).position()[t] + "px" : i
        })
    }),
    de.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        de.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(i, n) {
            de.fn[n] = function(r, o) {
                var a = arguments.length && (i || "boolean" != typeof r)
                  , s = i || (!0 === r || !0 === o ? "margin" : "border");
                return Re(this, function(t, i, r) {
                    var o;
                    return fe(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? de.css(t, i, s) : de.style(t, i, r, s)
                }, t, a ? r : void 0, a)
            }
        })
    }),
    de.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        de.fn[t] = function(e, i) {
            return 0 < arguments.length ? this.on(t, null, e, i) : this.trigger(t)
        }
    }),
    de.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    de.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }),
    de.proxy = function(e, t) {
        var i, n, r;
        if ("string" == typeof t && (i = e[t],
        t = e,
        e = i),
        ce(e))
            return n = ee.call(arguments, 2),
            (r = function() {
                return e.apply(t || this, n.concat(ee.call(arguments)))
            }
            ).guid = e.guid = e.guid || de.guid++,
            r
    }
    ,
    de.holdReady = function(e) {
        e ? de.readyWait++ : de.ready(!0)
    }
    ,
    de.isArray = Array.isArray,
    de.parseJSON = JSON.parse,
    de.nodeName = o,
    de.isFunction = ce,
    de.isWindow = fe,
    de.camelCase = p,
    de.type = n,
    de.now = Date.now,
    de.isNumeric = function(e) {
        var t = de.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return de
    });
    var Qt = e.jQuery
      , Zt = e.$;
    return de.noConflict = function(t) {
        return e.$ === de && (e.$ = Zt),
        t && e.jQuery === de && (e.jQuery = Qt),
        de
    }
    ,
    t || (e.jQuery = e.$ = de),
    de
}),
((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, t, i) {
        var n = function(t) {
            e.call(this, t),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = !!this.vars.yoyo,
            this._dirty = !0
        }
          , r = t._internals
          , o = r.lazyTweens
          , a = r.lazyRender
          , s = _gsScope._gsDefine.globals
          , l = new i(null,null,1,0)
          , u = n.prototype = new e;
        return u.constructor = n,
        u.kill()._gc = !1,
        n.version = "2.1.3",
        u.invalidate = function() {
            return this._yoyo = !!this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            e.prototype.invalidate.call(this)
        }
        ,
        u.addCallback = function(e, i, n, r) {
            return this.add(t.delayedCall(0, e, n, r), i)
        }
        ,
        u.removeCallback = function(e, t) {
            if (e)
                if (null == t)
                    this._kill(null, e);
                else
                    for (var i = this.getTweensOf(e, !1), n = i.length, r = this._parseTimeOrLabel(t); --n > -1; )
                        i[n]._startTime === r && i[n]._enabled(!1, !1);
            return this
        }
        ,
        u.removePause = function(t) {
            return this.removeCallback(e._internals.pauseCallback, t)
        }
        ,
        u.tweenTo = function(e, i) {
            i = i || {};
            var n, r, o, a = {
                ease: l,
                useFrames: this.usesFrames(),
                immediateRender: !1,
                lazy: !1
            }, u = i.repeat && s.TweenMax || t;
            for (r in i)
                a[r] = i[r];
            return a.time = this._parseTimeOrLabel(e),
            n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001,
            o = new u(this,n,a),
            a.onStart = function() {
                o.target.paused(!0),
                o.vars.time === o.target.time() || n !== o.duration() || o.isFromTo || o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale).render(o.time(), !0, !0),
                i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || o, i.onStartParams || [])
            }
            ,
            o
        }
        ,
        u.tweenFromTo = function(e, t, i) {
            i = i || {},
            e = this._parseTimeOrLabel(e),
            i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [e],
                callbackScope: this
            },
            i.immediateRender = !1 !== i.immediateRender;
            var n = this.tweenTo(t, i);
            return n.isFromTo = 1,
            n.duration(Math.abs(n.vars.time - e) / this._timeScale || .001)
        }
        ,
        u.render = function(e, t, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, s, l, u, c, f, h, p, d = this, m = d._time, _ = d._dirty ? d.totalDuration() : d._totalDuration, g = d._duration, v = d._totalTime, y = d._startTime, T = d._timeScale, x = d._rawPrevTime, b = d._paused, w = d._cycle;
            if (m !== d._time && (e += d._time - m),
            e >= _ - 1e-8 && e >= 0)
                d._locked || (d._totalTime = _,
                d._cycle = d._repeat),
                d._reversed || d._hasPausedChild() || (r = !0,
                l = "onComplete",
                u = !!d._timeline.autoRemoveChildren,
                0 === d._duration && (e <= 0 && e >= -1e-8 || x < 0 || 1e-8 === x) && x !== e && d._first && (u = !0,
                x > 1e-8 && (l = "onReverseComplete"))),
                d._rawPrevTime = d._duration || !t || e || d._rawPrevTime === e ? e : 1e-8,
                d._yoyo && 1 & d._cycle ? d._time = e = 0 : (d._time = g,
                e = g + 1e-4);
            else if (e < 1e-8)
                if (d._locked || (d._totalTime = d._cycle = 0),
                d._time = 0,
                e > -1e-8 && (e = 0),
                (0 !== m || 0 === g && 1e-8 !== x && (x > 0 || e < 0 && x >= 0) && !d._locked) && (l = "onReverseComplete",
                r = d._reversed),
                e < 0)
                    d._active = !1,
                    d._timeline.autoRemoveChildren && d._reversed ? (u = r = !0,
                    l = "onReverseComplete") : x >= 0 && d._first && (u = !0),
                    d._rawPrevTime = e;
                else {
                    if (d._rawPrevTime = g || !t || e || d._rawPrevTime === e ? e : 1e-8,
                    0 === e && r)
                        for (n = d._first; n && 0 === n._startTime; )
                            n._duration || (r = !1),
                            n = n._next;
                    e = 0,
                    d._initted || (u = !0)
                }
            else
                0 === g && x < 0 && (u = !0),
                d._time = d._rawPrevTime = e,
                d._locked || (d._totalTime = e,
                0 !== d._repeat && (c = g + d._repeatDelay,
                d._cycle = d._totalTime / c >> 0,
                d._cycle && d._cycle === d._totalTime / c && v <= e && d._cycle--,
                d._time = d._totalTime - d._cycle * c,
                d._yoyo && 1 & d._cycle && (d._time = g - d._time),
                d._time > g ? (d._time = g,
                e = g + 1e-4) : d._time < 0 ? d._time = e = 0 : e = d._time));
            if (d._hasPause && !d._forcingPlayhead && !t) {
                if ((e = d._time) > m || d._repeat && w !== d._cycle)
                    for (n = d._first; n && n._startTime <= e && !f; )
                        n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === d._rawPrevTime || (f = n),
                        n = n._next;
                else
                    for (n = d._last; n && n._startTime >= e && !f; )
                        n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (f = n),
                        n = n._prev;
                f && (p = d._startTime + (d._reversed ? d._duration - f._startTime : f._startTime) / d._timeScale,
                f._startTime < g && (d._time = d._rawPrevTime = e = f._startTime,
                d._totalTime = e + d._cycle * (d._totalDuration + d._repeatDelay)))
            }
            if (d._cycle !== w && !d._locked) {
                var S = d._yoyo && 0 != (1 & w)
                  , P = S === (d._yoyo && 0 != (1 & d._cycle))
                  , C = d._totalTime
                  , k = d._cycle
                  , R = d._rawPrevTime
                  , O = d._time;
                if (d._totalTime = w * g,
                d._cycle < w ? S = !S : d._totalTime += g,
                d._time = m,
                d._rawPrevTime = 0 === g ? x - 1e-4 : x,
                d._cycle = w,
                d._locked = !0,
                m = S ? 0 : g,
                d.render(m, t, 0 === g),
                t || d._gc || d.vars.onRepeat && (d._cycle = k,
                d._locked = !1,
                d._callback("onRepeat")),
                m !== d._time)
                    return;
                if (P && (d._cycle = w,
                d._locked = !0,
                m = S ? g + 1e-4 : -1e-4,
                d.render(m, !0, !1)),
                d._locked = !1,
                d._paused && !b)
                    return;
                d._time = O,
                d._totalTime = C,
                d._cycle = k,
                d._rawPrevTime = R
            }
            if (d._time !== m && d._first || i || u || f) {
                if (d._initted || (d._initted = !0),
                d._active || !d._paused && d._totalTime !== v && e > 0 && (d._active = !0),
                0 === v && d.vars.onStart && (0 === d._totalTime && d._totalDuration || t || d._callback("onStart")),
                (h = d._time) >= m)
                    for (n = d._first; n && (s = n._next,
                    h === d._time && (!d._paused || b)); )
                        (n._active || n._startTime <= d._time && !n._paused && !n._gc) && (f === n && (d.pause(),
                        d._pauseTime = p),
                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)),
                        n = s;
                else
                    for (n = d._last; n && (s = n._prev,
                    h === d._time && (!d._paused || b)); ) {
                        if (n._active || n._startTime <= m && !n._paused && !n._gc) {
                            if (f === n) {
                                for (f = n._prev; f && f.endTime() > d._time; )
                                    f.render(f._reversed ? f.totalDuration() - (e - f._startTime) * f._timeScale : (e - f._startTime) * f._timeScale, t, i),
                                    f = f._prev;
                                f = null,
                                d.pause(),
                                d._pauseTime = p
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)
                        }
                        n = s
                    }
                d._onUpdate && (t || (o.length && a(),
                d._callback("onUpdate"))),
                l && (d._locked || d._gc || y !== d._startTime && T === d._timeScale || (0 === d._time || _ >= d.totalDuration()) && (r && (o.length && a(),
                d._timeline.autoRemoveChildren && d._enabled(!1, !1),
                d._active = !1),
                !t && d.vars[l] && d._callback(l)))
            } else
                v !== d._totalTime && d._onUpdate && (t || d._callback("onUpdate"))
        }
        ,
        u.getActive = function(e, t, i) {
            var n, r, o = [], a = this.getChildren(e || null == e, t || null == e, !!i), s = 0, l = a.length;
            for (n = 0; n < l; n++)
                (r = a[n]).isActive() && (o[s++] = r);
            return o
        }
        ,
        u.getLabelAfter = function(e) {
            e || 0 !== e && (e = this._time);
            var t, i = this.getLabelsArray(), n = i.length;
            for (t = 0; t < n; t++)
                if (i[t].time > e)
                    return i[t].name;
            return null
        }
        ,
        u.getLabelBefore = function(e) {
            null == e && (e = this._time);
            for (var t = this.getLabelsArray(), i = t.length; --i > -1; )
                if (t[i].time < e)
                    return t[i].name;
            return null
        }
        ,
        u.getLabelsArray = function() {
            var e, t = [], i = 0;
            for (e in this._labels)
                t[i++] = {
                    time: this._labels[e],
                    name: e
                };
            return t.sort(function(e, t) {
                return e.time - t.time
            }),
            t
        }
        ,
        u.invalidate = function() {
            return this._locked = !1,
            e.prototype.invalidate.call(this)
        }
        ,
        u.progress = function(e, t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration() || 0
        }
        ,
        u.totalProgress = function(e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration() || 0
        }
        ,
        u.totalDuration = function(t) {
            return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this),
            this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
            this._totalDuration)
        }
        ,
        u.time = function(e, t) {
            if (!arguments.length)
                return this._time;
            this._dirty && this.totalDuration();
            var i = this._duration
              , n = this._cycle
              , r = n * (i + this._repeatDelay);
            return e > i && (e = i),
            this.totalTime(this._yoyo && 1 & n ? i - e + r : this._repeat ? e + r : e, t)
        }
        ,
        u.repeat = function(e) {
            return arguments.length ? (this._repeat = e,
            this._uncache(!0)) : this._repeat
        }
        ,
        u.repeatDelay = function(e) {
            return arguments.length ? (this._repeatDelay = e,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        u.yoyo = function(e) {
            return arguments.length ? (this._yoyo = e,
            this) : this._yoyo
        }
        ,
        u.currentLabel = function(e) {
            return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
        }
        ,
        n
    }, !0),
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
        var n = function(e) {
            t.call(this, e);
            var i, n, r = this, o = r.vars;
            r._labels = {},
            r.autoRemoveChildren = !!o.autoRemoveChildren,
            r.smoothChildTiming = !!o.smoothChildTiming,
            r._sortChildren = !0,
            r._onUpdate = o.onUpdate;
            for (n in o)
                i = o[n],
                s(i) && -1 !== i.join("").indexOf("{self}") && (o[n] = r._swapSelfInParams(i));
            s(o.tweens) && r.add(o.tweens, 0, o.align, o.stagger)
        }
          , r = i._internals
          , o = n._internals = {}
          , a = r.isSelector
          , s = r.isArray
          , l = r.lazyTweens
          , u = r.lazyRender
          , c = _gsScope._gsDefine.globals
          , f = function(e) {
            var t, i = {};
            for (t in e)
                i[t] = e[t];
            return i
        }
          , h = function(e, t, i) {
            var n, r, o = e.cycle;
            for (n in o)
                r = o[n],
                e[n] = "function" == typeof r ? r(i, t[i], t) : r[i % r.length];
            delete e.cycle
        }
          , p = o.pauseCallback = function() {}
          , d = function(e) {
            var t, i = [], n = e.length;
            for (t = 0; t !== n; i.push(e[t++]))
                ;
            return i
        }
          , m = function(e, t, i, n) {
            var r = "immediateRender";
            return r in t || (t[r] = !(i && !1 === i[r] || n)),
            t
        }
          , _ = function(e) {
            if ("function" == typeof e)
                return e;
            var t = "object" == typeof e ? e : {
                each: e
            }
              , i = t.ease
              , n = t.from || 0
              , r = t.base || 0
              , o = {}
              , a = isNaN(n)
              , s = t.axis
              , l = {
                center: .5,
                end: 1
            }[n] || 0;
            return function(e, u, c) {
                var f, h, p, d, m, _, g, v, y, T = (c || t).length, x = o[T];
                if (!x) {
                    if (!(y = "auto" === t.grid ? 0 : (t.grid || [1 / 0])[0])) {
                        for (g = -1 / 0; g < (g = c[y++].getBoundingClientRect().left) && y < T; )
                            ;
                        y--
                    }
                    for (x = o[T] = [],
                    f = a ? Math.min(y, T) * l - .5 : n % y,
                    h = a ? T * l / y - .5 : n / y | 0,
                    g = 0,
                    v = 1 / 0,
                    _ = 0; _ < T; _++)
                        p = _ % y - f,
                        d = h - (_ / y | 0),
                        x[_] = m = s ? Math.abs("y" === s ? d : p) : Math.sqrt(p * p + d * d),
                        m > g && (g = m),
                        m < v && (v = m);
                    x.max = g - v,
                    x.min = v,
                    x.v = T = t.amount || t.each * (y > T ? T - 1 : s ? "y" === s ? T / y : y : Math.max(y, T / y)) || 0,
                    x.b = T < 0 ? r - T : r
                }
                return T = (x[e] - x.min) / x.max,
                x.b + (i ? i.getRatio(T) : T) * x.v
            }
        }
          , g = n.prototype = new t;
        return n.version = "2.1.3",
        n.distribute = _,
        g.constructor = n,
        g.kill()._gc = g._forcingPlayhead = g._hasPause = !1,
        g.to = function(e, t, n, r) {
            var o = n.repeat && c.TweenMax || i;
            return t ? this.add(new o(e,t,n), r) : this.set(e, n, r)
        }
        ,
        g.from = function(e, t, n, r) {
            return this.add((n.repeat && c.TweenMax || i).from(e, t, m(0, n)), r)
        }
        ,
        g.fromTo = function(e, t, n, r, o) {
            var a = r.repeat && c.TweenMax || i;
            return r = m(0, r, n),
            t ? this.add(a.fromTo(e, t, n, r), o) : this.set(e, r, o)
        }
        ,
        g.staggerTo = function(e, t, r, o, s, l, u, c) {
            var p, m, g = new n({
                onComplete: l,
                onCompleteParams: u,
                callbackScope: c,
                smoothChildTiming: this.smoothChildTiming
            }), v = _(r.stagger || o), y = r.startAt, T = r.cycle;
            for ("string" == typeof e && (e = i.selector(e) || e),
            a(e = e || []) && (e = d(e)),
            m = 0; m < e.length; m++)
                p = f(r),
                y && (p.startAt = f(y),
                y.cycle && h(p.startAt, e, m)),
                T && (h(p, e, m),
                null != p.duration && (t = p.duration,
                delete p.duration)),
                g.to(e[m], t, p, v(m, e[m], e));
            return this.add(g, s)
        }
        ,
        g.staggerFrom = function(e, t, i, n, r, o, a, s) {
            return i.runBackwards = !0,
            this.staggerTo(e, t, m(0, i), n, r, o, a, s)
        }
        ,
        g.staggerFromTo = function(e, t, i, n, r, o, a, s, l) {
            return n.startAt = i,
            this.staggerTo(e, t, m(0, n, i), r, o, a, s, l)
        }
        ,
        g.call = function(e, t, n, r) {
            return this.add(i.delayedCall(0, e, t, n), r)
        }
        ,
        g.set = function(e, t, n) {
            return this.add(new i(e,0,m(0, t, null, !0)), n)
        }
        ,
        n.exportRoot = function(e, t) {
            null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
            var r, o, a, s, l = new n(e), u = l._timeline;
            for (null == t && (t = !0),
            u._remove(l, !0),
            l._startTime = 0,
            l._rawPrevTime = l._time = l._totalTime = u._time,
            a = u._first; a; )
                s = a._next,
                t && a instanceof i && a.target === a.vars.onComplete || ((o = a._startTime - a._delay) < 0 && (r = 1),
                l.add(a, o)),
                a = s;
            return u.add(l, 0),
            r && l.totalDuration(),
            l
        }
        ,
        g.add = function(r, o, a, l) {
            var u, c, f, h, p, d, m = this;
            if ("number" != typeof o && (o = m._parseTimeOrLabel(o, 0, !0, r)),
            !(r instanceof e)) {
                if (r instanceof Array || r && r.push && s(r)) {
                    for (a = a || "normal",
                    l = l || 0,
                    u = o,
                    c = r.length,
                    f = 0; f < c; f++)
                        s(h = r[f]) && (h = new n({
                            tweens: h
                        })),
                        m.add(h, u),
                        "string" != typeof h && "function" != typeof h && ("sequence" === a ? u = h._startTime + h.totalDuration() / h._timeScale : "start" === a && (h._startTime -= h.delay())),
                        u += l;
                    return m._uncache(!0)
                }
                if ("string" == typeof r)
                    return m.addLabel(r, o);
                if ("function" != typeof r)
                    throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                r = i.delayedCall(0, r)
            }
            if (t.prototype.add.call(m, r, o),
            (r._time || !r._duration && r._initted) && (u = (m.rawTime() - r._startTime) * r._timeScale,
            (!r._duration || Math.abs(Math.max(0, Math.min(r.totalDuration(), u))) - r._totalTime > 1e-5) && r.render(u, !1, !1)),
            (m._gc || m._time === m._duration) && !m._paused && m._duration < m.duration())
                for (d = (p = m).rawTime() > r._startTime; p._timeline; )
                    d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1),
                    p = p._timeline;
            return m
        }
        ,
        g.remove = function(t) {
            if (t instanceof e) {
                this._remove(t, !1);
                var i = t._timeline = t.vars.useFrames ? e._rootFramesTimeline : e._rootTimeline;
                return t._startTime = (t._paused ? t._pauseTime : i._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale,
                this
            }
            if (t instanceof Array || t && t.push && s(t)) {
                for (var n = t.length; --n > -1; )
                    this.remove(t[n]);
                return this
            }
            return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
        }
        ,
        g._remove = function(e, i) {
            return t.prototype._remove.call(this, e, i),
            this._last ? this._time > this.duration() && (this._time = this._duration,
            this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
            this
        }
        ,
        g.append = function(e, t) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
        }
        ,
        g.insert = g.insertMultiple = function(e, t, i, n) {
            return this.add(e, t || 0, i, n)
        }
        ,
        g.appendMultiple = function(e, t, i, n) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, n)
        }
        ,
        g.addLabel = function(e, t) {
            return this._labels[e] = this._parseTimeOrLabel(t),
            this
        }
        ,
        g.addPause = function(e, t, n, r) {
            var o = i.delayedCall(0, p, n, r || this);
            return o.vars.onComplete = o.vars.onReverseComplete = t,
            o.data = "isPause",
            this._hasPause = !0,
            this.add(o, e)
        }
        ,
        g.removeLabel = function(e) {
            return delete this._labels[e],
            this
        }
        ,
        g.getLabelTime = function(e) {
            return null != this._labels[e] ? this._labels[e] : -1
        }
        ,
        g._parseTimeOrLabel = function(t, i, n, r) {
            var o, a;
            if (r instanceof e && r.timeline === this)
                this.remove(r);
            else if (r && (r instanceof Array || r.push && s(r)))
                for (a = r.length; --a > -1; )
                    r[a]instanceof e && r[a].timeline === this && this.remove(r[a]);
            if (o = "number" != typeof t || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0,
            "string" == typeof i)
                return this._parseTimeOrLabel(i, n && "number" == typeof t && null == this._labels[i] ? t - o : 0, n);
            if (i = i || 0,
            "string" != typeof t || !isNaN(t) && null == this._labels[t])
                null == t && (t = o);
            else {
                if (-1 === (a = t.indexOf("=")))
                    return null == this._labels[t] ? n ? this._labels[t] = o + i : i : this._labels[t] + i;
                i = parseInt(t.charAt(a - 1) + "1", 10) * Number(t.substr(a + 1)),
                t = a > 1 ? this._parseTimeOrLabel(t.substr(0, a - 1), 0, n) : o
            }
            return Number(t) + i
        }
        ,
        g.seek = function(e, t) {
            return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t)
        }
        ,
        g.stop = function() {
            return this.paused(!0)
        }
        ,
        g.gotoAndPlay = function(e, t) {
            return this.play(e, t)
        }
        ,
        g.gotoAndStop = function(e, t) {
            return this.pause(e, t)
        }
        ,
        g.render = function(e, t, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, o, a, s, c, f, h, p = this, d = p._time, m = p._dirty ? p.totalDuration() : p._totalDuration, _ = p._startTime, g = p._timeScale, v = p._paused;
            if (d !== p._time && (e += p._time - d),
            p._hasPause && !p._forcingPlayhead && !t) {
                if (e > d)
                    for (n = p._first; n && n._startTime <= e && !c; )
                        n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === p._rawPrevTime || (c = n),
                        n = n._next;
                else
                    for (n = p._last; n && n._startTime >= e && !c; )
                        n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (c = n),
                        n = n._prev;
                c && (p._time = p._totalTime = e = c._startTime,
                h = p._startTime + (p._reversed ? p._duration - e : e) / p._timeScale)
            }
            if (e >= m - 1e-8 && e >= 0)
                p._totalTime = p._time = m,
                p._reversed || p._hasPausedChild() || (r = !0,
                a = "onComplete",
                s = !!p._timeline.autoRemoveChildren,
                0 === p._duration && (e <= 0 && e >= -1e-8 || p._rawPrevTime < 0 || 1e-8 === p._rawPrevTime) && p._rawPrevTime !== e && p._first && (s = !0,
                p._rawPrevTime > 1e-8 && (a = "onReverseComplete"))),
                p._rawPrevTime = p._duration || !t || e || p._rawPrevTime === e ? e : 1e-8,
                e = m + 1e-4;
            else if (e < 1e-8)
                if (p._totalTime = p._time = 0,
                e > -1e-8 && (e = 0),
                (0 !== d || 0 === p._duration && 1e-8 !== p._rawPrevTime && (p._rawPrevTime > 0 || e < 0 && p._rawPrevTime >= 0)) && (a = "onReverseComplete",
                r = p._reversed),
                e < 0)
                    p._active = !1,
                    p._timeline.autoRemoveChildren && p._reversed ? (s = r = !0,
                    a = "onReverseComplete") : p._rawPrevTime >= 0 && p._first && (s = !0),
                    p._rawPrevTime = e;
                else {
                    if (p._rawPrevTime = p._duration || !t || e || p._rawPrevTime === e ? e : 1e-8,
                    0 === e && r)
                        for (n = p._first; n && 0 === n._startTime; )
                            n._duration || (r = !1),
                            n = n._next;
                    e = 0,
                    p._initted || (s = !0)
                }
            else
                p._totalTime = p._time = p._rawPrevTime = e;
            if (p._time !== d && p._first || i || s || c) {
                if (p._initted || (p._initted = !0),
                p._active || !p._paused && p._time !== d && e > 0 && (p._active = !0),
                0 === d && p.vars.onStart && (0 === p._time && p._duration || t || p._callback("onStart")),
                (f = p._time) >= d)
                    for (n = p._first; n && (o = n._next,
                    f === p._time && (!p._paused || v)); )
                        (n._active || n._startTime <= f && !n._paused && !n._gc) && (c === n && (p.pause(),
                        p._pauseTime = h),
                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)),
                        n = o;
                else
                    for (n = p._last; n && (o = n._prev,
                    f === p._time && (!p._paused || v)); ) {
                        if (n._active || n._startTime <= d && !n._paused && !n._gc) {
                            if (c === n) {
                                for (c = n._prev; c && c.endTime() > p._time; )
                                    c.render(c._reversed ? c.totalDuration() - (e - c._startTime) * c._timeScale : (e - c._startTime) * c._timeScale, t, i),
                                    c = c._prev;
                                c = null,
                                p.pause(),
                                p._pauseTime = h
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)
                        }
                        n = o
                    }
                p._onUpdate && (t || (l.length && u(),
                p._callback("onUpdate"))),
                a && (p._gc || _ !== p._startTime && g === p._timeScale || (0 === p._time || m >= p.totalDuration()) && (r && (l.length && u(),
                p._timeline.autoRemoveChildren && p._enabled(!1, !1),
                p._active = !1),
                !t && p.vars[a] && p._callback(a)))
            }
        }
        ,
        g._hasPausedChild = function() {
            for (var e = this._first; e; ) {
                if (e._paused || e instanceof n && e._hasPausedChild())
                    return !0;
                e = e._next
            }
            return !1
        }
        ,
        g.getChildren = function(e, t, n, r) {
            r = r || -9999999999;
            for (var o = [], a = this._first, s = 0; a; )
                a._startTime < r || (a instanceof i ? !1 !== t && (o[s++] = a) : (!1 !== n && (o[s++] = a),
                !1 !== e && (s = (o = o.concat(a.getChildren(!0, t, n))).length))),
                a = a._next;
            return o
        }
        ,
        g.getTweensOf = function(e, t) {
            var n, r, o = this._gc, a = [], s = 0;
            for (o && this._enabled(!0, !0),
            r = (n = i.getTweensOf(e)).length; --r > -1; )
                (n[r].timeline === this || t && this._contains(n[r])) && (a[s++] = n[r]);
            return o && this._enabled(!1, !0),
            a
        }
        ,
        g.recent = function() {
            return this._recent
        }
        ,
        g._contains = function(e) {
            for (var t = e.timeline; t; ) {
                if (t === this)
                    return !0;
                t = t.timeline
            }
            return !1
        }
        ,
        g.shiftChildren = function(e, t, i) {
            i = i || 0;
            for (var n, r = this._first, o = this._labels; r; )
                r._startTime >= i && (r._startTime += e),
                r = r._next;
            if (t)
                for (n in o)
                    o[n] >= i && (o[n] += e);
            return this._uncache(!0)
        }
        ,
        g._kill = function(e, t) {
            if (!e && !t)
                return this._enabled(!1, !1);
            for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1; )
                i[n]._kill(e, t) && (r = !0);
            return r
        }
        ,
        g.clear = function(e) {
            var t = this.getChildren(!1, !0, !0)
              , i = t.length;
            for (this._time = this._totalTime = 0; --i > -1; )
                t[i]._enabled(!1, !1);
            return !1 !== e && (this._labels = {}),
            this._uncache(!0)
        }
        ,
        g.invalidate = function() {
            for (var t = this._first; t; )
                t.invalidate(),
                t = t._next;
            return e.prototype.invalidate.call(this)
        }
        ,
        g._enabled = function(e, i) {
            if (e === this._gc)
                for (var n = this._first; n; )
                    n._enabled(e, !0),
                    n = n._next;
            return t.prototype._enabled.call(this, e, i)
        }
        ,
        g.totalTime = function(t, i, n) {
            this._forcingPlayhead = !0;
            var r = e.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
            r
        }
        ,
        g.duration = function(e) {
            return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e),
            this) : (this._dirty && this.totalDuration(),
            this._duration)
        }
        ,
        g.totalDuration = function(e) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var t, i, n = 0, r = this, o = r._last, a = 999999999999; o; )
                        t = o._prev,
                        o._dirty && o.totalDuration(),
                        o._startTime > a && r._sortChildren && !o._paused && !r._calculatingDuration ? (r._calculatingDuration = 1,
                        r.add(o, o._startTime - o._delay),
                        r._calculatingDuration = 0) : a = o._startTime,
                        o._startTime < 0 && !o._paused && (n -= o._startTime,
                        r._timeline.smoothChildTiming && (r._startTime += o._startTime / r._timeScale,
                        r._time -= o._startTime,
                        r._totalTime -= o._startTime,
                        r._rawPrevTime -= o._startTime),
                        r.shiftChildren(-o._startTime, !1, -9999999999),
                        a = 0),
                        (i = o._startTime + o._totalDuration / o._timeScale) > n && (n = i),
                        o = t;
                    r._duration = r._totalDuration = n,
                    r._dirty = !1
                }
                return this._totalDuration
            }
            return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this
        }
        ,
        g.paused = function(t) {
            if (!1 === t && this._paused)
                for (var i = this._first; i; )
                    i._startTime === this._time && "isPause" === i.data && (i._rawPrevTime = 0),
                    i = i._next;
            return e.prototype.paused.apply(this, arguments)
        }
        ,
        g.usesFrames = function() {
            for (var t = this._timeline; t._timeline; )
                t = t._timeline;
            return t === e._rootFramesTimeline
        }
        ,
        g.rawTime = function(e) {
            return e && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(e) - this._startTime) * this._timeScale
        }
        ,
        n
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(e) {
    "use strict";
    var t = function() {
        return (_gsScope.GreenSockGlobals || _gsScope).TimelineMax
    };
    "undefined" != typeof module && module.exports ? (require("./TweenLite.js"),
    module.exports = t()) : "function" == typeof define && define.amd && define(["TweenLite"], t)
}(),
Array.prototype.filter || (Array.prototype.filter = function(e) {
    "use strict";
    if (null == this)
        throw new TypeError;
    var t = Object(this)
      , i = t.length >>> 0;
    if ("function" != typeof e)
        throw new TypeError;
    for (var n = [], r = arguments[1], o = 0; o < i; o++)
        if (o in t) {
            var a = t[o];
            e.call(r, a, o, t) && n.push(a)
        }
    return n
}
),
function(e) {
    function t(e, t, i) {
        var n = t[1] - t[0]
          , r = i[1] - i[0];
        return t[0] - i[0] >= 0 && t[0] - i[0] < r || t[0] - i[0] <= 0 && t[0] + n > i[0]
    }
    var i = {
        spytarget: window,
        scrolltopoffset: 0,
        scrollbehavior: "smooth",
        scrollduration: 500,
        highlightclass: "selected",
        enableprogress: "",
        mincontentheight: 30
    }
      , n = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    e.fn.ddscrollSpy = function(r) {
        var o = e(window)
          , a = e(window.opera ? "CSS1Compat" == document.compatMode ? "html" : "body" : "html,body");
        return this.each(function() {
            function s(t) {
                var i = t.find('a[href^="#"]');
                f = [],
                h = "",
                v = 0,
                i.each(function(t) {
                    var i = e(this)
                      , n = e(i.attr("href"))
                      , r = n.get(0)
                      , o = null;
                    if (0 == n.length)
                        return !0;
                    i.off("click.goto").on("click.goto", function(e) {
                        if (c.spytarget != window || "jump" != c.scrollbehavior && history.pushState || (window.location.hash = i.attr("href")),
                        "smooth" == c.scrollbehavior || 0 != c.scrolltopoffset) {
                            var n = c.spytarget == window ? a : d;
                            "smooth" != c.scrollbehavior || !history.pushState && c.spytarget == window ? n.prop("scrollTop", f[t].offsettop + 1) : n.animate({
                                scrollTop: f[t].offsettop + 1
                            }, c.scrollduration, function() {
                                c.spytarget == window && history.pushState && history.pushState(null, null, i.attr("href"))
                            }),
                            e.preventDefault()
                        }
                    }),
                    c.enableprogress && (0 == i.find("div." + c.enableprogress).length && (i.css({
                        position: "relative",
                        overflow: "hidden"
                    }),
                    e('<div class="' + c.enableprogress + '" style="position:absolute; left: -100%" />').appendTo(i)),
                    o = i.find("div." + c.enableprogress));
                    var s = c.spytarget == window ? n.offset().top : r.offsetParent == c.spytarget ? r.offsetTop : r.offsetTop - c.spytarget.offsetTop;
                    s += c.scrolltopoffset;
                    var l = parseInt(n.data("spyrange")) > 0 ? parseInt(n.data("spyrange")) : n.outerHeight() || c.mincontentheight
                      , u = s + l;
                    -1 == p && u > _ - m && (p = t),
                    f.push({
                        $menuitem: i,
                        $des: n,
                        offsettop: s,
                        height: l,
                        $progress: o,
                        index: t
                    })
                }),
                f.length > 0 && (v = f[f.length - 1].offsettop + f[f.length - 1].height)
            }
            function l() {
                if (0 != f.length) {
                    var e = h
                      , i = d.scrollTop()
                      , n = f.filter(function(e, n) {
                        return t(e, [e.offsettop, e.offsettop + e.height], [i, i + m])
                    });
                    if (n.length > 0) {
                        if (h = n.shift(),
                        e && e != h && e.$menuitem.removeClass(c.highlightclass),
                        h.$menuitem.hasClass(c.highlightclass) || h.$menuitem.addClass(c.highlightclass),
                        h.index >= p && i >= _ - m) {
                            if (c.enableprogress)
                                for (o = 0; o < f.length; o++)
                                    f[o].$menuitem.find("div." + c.enableprogress).css("left", 0);
                            return h.$menuitem.removeClass(c.highlightclass),
                            void ((h = f[f.length - 1]).$menuitem.hasClass(c.highlightclass) || h.$menuitem.addClass(c.highlightclass))
                        }
                        if (c.enableprogress) {
                            var r = (i - h.offsettop) / h.height * 100;
                            h.$menuitem.find("div." + c.enableprogress).css("left", -100 + r + "%");
                            for (o = 0; o < f.length; o++)
                                o < h.index ? f[o].$menuitem.find("div." + c.enableprogress).css("left", 0) : o > h.index && f[o].$menuitem.find("div." + c.enableprogress).css("left", "-100%")
                        }
                    } else if (i > v && c.enableprogress) {
                        h.$menuitem.removeClass(c.highlightclass);
                        for (var o = 0; o < f.length; o++)
                            f[o].$menuitem.find("div." + c.enableprogress).css("left", 0)
                    }
                }
            }
            function u() {
                if (0 != f.length) {
                    f[0].$menu;
                    m = d.outerHeight(),
                    _ = c.spytarget == window ? a.get(0).scrollHeight : d.get(0).scrollHeight,
                    v = 0,
                    p = -1;
                    for (var e = 0; e < f.length; e++) {
                        var t = f[e].$des
                          , i = t.get(0)
                          , n = c.spytarget == window ? t.offset().top : i.offsetParent == c.spytarget ? i.offsetTop : i.offsetTop - c.spytarget.offsetTop;
                        if (n += c.scrolltopoffset,
                        f[e].offsettop = n,
                        f[e].height = parseInt(t.data("spyrange")) > 0 ? parseInt(t.data("spyrange")) : t.outerHeight() || c.mincontentheight,
                        c.enableprogress) {
                            var r = n + f[e].height;
                            -1 == p && r > _ - m && (p = e)
                        }
                    }
                    v = f[f.length - 1].offsettop + f[f.length - 1].height
                }
            }
            var c = e.extend({}, i, r);
            c.enableprogress = n ? "" : c.enableprogress;
            var f = []
              , h = ""
              , p = -1
              , d = e(c.spytarget).eq(0)
              , m = d.outerHeight()
              , _ = c.spytarget == window ? a.get(0).scrollHeight : d.get(0).scrollHeight
              , g = e(this)
              , v = 0;
            s(g),
            g.on("updatespy", function() {
                s(g),
                l()
            }),
            d.on("scroll resize", function() {
                l()
            }),
            l(),
            o.on("load resize", function() {
                u()
            })
        })
    }
}(jQuery);
