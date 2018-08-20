/** Generated: Wednesday, 1st of August 2018, 04:25:13 PM // Powered by AIOM+ (All In One Minify) created by FlipZoom Media Inc. - David Karich (flipzoom.de) **/
/*!
 * VERSION: 1.19.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
        var d = function (a) {
            var b, c = [], d = a.length;
            for (b = 0; b !== d; c.push(a[b++])) ;
            return c
        }, e = function (a, b, c) {
            var d, e, f = a.cycle;
            for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length];
            delete a.cycle
        }, f = function (a, b, d) {
            c.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = f.prototype.render
        }, g = 1e-10, h = c._internals, i = h.isSelector, j = h.isArray, k = f.prototype = c.to({}, .1, {}), l = [];
        f.version = "1.19.1", k.constructor = f, k.kill()._gc = !1, f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf, f.getTweensOf = c.getTweensOf, f.lagSmoothing = c.lagSmoothing, f.ticker = c.ticker, f.render = c.render, k.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), c.prototype.invalidate.call(this)
        }, k.updateTo = function (a, b) {
            var d, e = this.ratio, f = this.vars.immediateRender || a.immediateRender;
            b && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (d in a) this.vars[d] = a[d];
            if (this._initted || f) if (b) this._initted = !1, f && this.render(0, !0, !0); else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var g = this._totalTime;
                this.render(0, !0, !1), this._initted = !1, this.render(g, !0, !1)
            } else if (this._initted = !1, this._init(), this._time > 0 || f) for (var h, i = 1 / (1 - e), j = this._firstPT; j;) h = j.s + j.c, j.c *= i, j.s = h - j.c, j = j._next;
            return this
        }, k.render = function (a, b, c) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var d, e, f, i, j, k, l, m, n = this._dirty ? this.totalDuration() : this._totalDuration, o = this._time,
                p = this._totalTime, q = this._cycle, r = this._duration, s = this._rawPrevTime;
            if (a >= n - 1e-7 && a >= 0 ? (this._totalTime = n, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = r, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === r && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > s || 0 >= a && a >= -1e-7 || s === g && "isPause" !== this.data) && s !== a && (c = !0, s > g && (e = "onReverseComplete")), this._rawPrevTime = m = !b || a || s === a ? a : g)) : 1e-7 > a ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== p || 0 === r && s > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === r && (this._initted || !this.vars.lazy || c) && (s >= 0 && (c = !0), this._rawPrevTime = m = !b || a || s === a ? a : g)), this._initted || (c = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (i = r + this._repeatDelay, this._cycle = this._totalTime / i >> 0, 0 !== this._cycle && this._cycle === this._totalTime / i && a >= p && this._cycle--, this._time = this._totalTime - this._cycle * i, this._yoyo && 0 !== (1 & this._cycle) && (this._time = r - this._time), this._time > r ? this._time = r : this._time < 0 && (this._time = 0)), this._easeType ? (j = this._time / r, k = this._easeType, l = this._easePower, (1 === k || 3 === k && j >= .5) && (j = 1 - j), 3 === k && (j *= 2), 1 === l ? j *= j : 2 === l ? j *= j * j : 3 === l ? j *= j * j * j : 4 === l && (j *= j * j * j * j), 1 === k ? this.ratio = 1 - j : 2 === k ? this.ratio = j : this._time / r < .5 ? this.ratio = j / 2 : this.ratio = 1 - j / 2) : this.ratio = this._ease.getRatio(this._time / r)), o === this._time && !c && q === this._cycle) return void(p !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = o, this._totalTime = p, this._rawPrevTime = s, this._cycle = q, h.lazyTweens.push(this), void(this._lazy = [a, b]);
                this._time && !d ? this.ratio = this._ease.getRatio(this._time / r) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && a >= 0 && (this._active = !0), 0 === p && (2 === this._initted && a > 0 && this._init(), this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === r) && (b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
            this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c), b || (this._totalTime !== p || e) && this._callback("onUpdate")), this._cycle !== q && (b || this._gc || this.vars.onRepeat && this._callback("onRepeat")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === r && this._rawPrevTime === g && m !== g && (this._rawPrevTime = 0))
        }, f.to = function (a, b, c) {
            return new f(a, b, c)
        }, f.from = function (a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new f(a, b, c)
        }, f.fromTo = function (a, b, c, d) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new f(a, b, d)
        }, f.staggerTo = f.allTo = function (a, b, g, h, k, m, n) {
            h = h || 0;
            var o, p, q, r, s = 0, t = [], u = function () {
                g.onComplete && g.onComplete.apply(g.onCompleteScope || this, arguments), k.apply(n || g.callbackScope || this, m || l)
            }, v = g.cycle, w = g.startAt && g.startAt.cycle;
            for (j(a) || ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a))), a = a || [], 0 > h && (a = d(a), a.reverse(), h *= -1), o = a.length - 1, q = 0; o >= q; q++) {
                p = {};
                for (r in g) p[r] = g[r];
                if (v && (e(p, a, q), null != p.duration && (b = p.duration, delete p.duration)), w) {
                    w = p.startAt = {};
                    for (r in g.startAt) w[r] = g.startAt[r];
                    e(p.startAt, a, q)
                }
                p.delay = s + (p.delay || 0), q === o && k && (p.onComplete = u), t[q] = new f(a[q], b, p), s += h
            }
            return t
        }, f.staggerFrom = f.allFrom = function (a, b, c, d, e, g, h) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, f.staggerTo(a, b, c, d, e, g, h)
        }, f.staggerFromTo = f.allFromTo = function (a, b, c, d, e, g, h, i) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, f.staggerTo(a, b, d, e, g, h, i)
        }, f.delayedCall = function (a, b, c, d, e) {
            return new f(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                callbackScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                immediateRender: !1,
                useFrames: e,
                overwrite: 0
            })
        }, f.set = function (a, b) {
            return new f(a, 0, b)
        }, f.isTweening = function (a) {
            return c.getTweensOf(a, !0).length > 0
        };
        var m = function (a, b) {
            for (var d = [], e = 0, f = a._first; f;) f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(m(f, b)), e = d.length), f = f._next;
            return d
        }, n = f.getAllTweens = function (b) {
            return m(a._rootTimeline, b).concat(m(a._rootFramesTimeline, b))
        };
        f.killAll = function (a, c, d, e) {
            null == c && (c = !0), null == d && (d = !0);
            var f, g, h, i = n(0 != e), j = i.length, k = c && d && e;
            for (h = 0; j > h; h++) g = i[h], (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1))
        }, f.killChildTweensOf = function (a, b) {
            if (null != a) {
                var e, g, k, l, m, n = h.tweenLookup;
                if ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a)), j(a)) for (l = a.length; --l > -1;) f.killChildTweensOf(a[l], b); else {
                    e = [];
                    for (k in n) for (g = n[k].target.parentNode; g;) g === a && (e = e.concat(n[k].tweens)), g = g.parentNode;
                    for (m = e.length, l = 0; m > l; l++) b && e[l].totalTime(e[l].totalDuration()), e[l]._enabled(!1, !1)
                }
            }
        };
        var o = function (a, c, d, e) {
            c = c !== !1, d = d !== !1, e = e !== !1;
            for (var f, g, h = n(e), i = c && d && e, j = h.length; --j > -1;) g = h[j], (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a)
        };
        return f.pauseAll = function (a, b, c) {
            o(!0, a, b, c)
        }, f.resumeAll = function (a, b, c) {
            o(!1, a, b, c)
        }, f.globalTimeScale = function (b) {
            var d = a._rootTimeline, e = c.ticker.time;
            return arguments.length ? (b = b || g, d._startTime = e - (e - d._startTime) * d._timeScale / b, d = a._rootFramesTimeline, e = c.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, d._timeScale = a._rootTimeline._timeScale = b, b) : d._timeScale
        }, k.progress = function (a, b) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration()
        }, k.totalProgress = function (a, b) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration()
        }, k.time = function (a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
        }, k.duration = function (b) {
            return arguments.length ? a.prototype.duration.call(this, b) : this._duration
        }, k.totalDuration = function (a) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, k.repeat = function (a) {
            return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
        }, k.repeatDelay = function (a) {
            return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
        }, k.yoyo = function (a) {
            return arguments.length ? (this._yoyo = a, this) : this._yoyo
        }, f
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
        var d = function (a) {
                b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                var c, d, e = this.vars;
                for (d in e) c = e[d], i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
                i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger)
            }, e = 1e-10, f = c._internals, g = d._internals = {}, h = f.isSelector, i = f.isArray, j = f.lazyTweens,
            k = f.lazyRender, l = _gsScope._gsDefine.globals, m = function (a) {
                var b, c = {};
                for (b in a) c[b] = a[b];
                return c
            }, n = function (a, b, c) {
                var d, e, f = a.cycle;
                for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length];
                delete a.cycle
            }, o = g.pauseCallback = function () {
            }, p = function (a) {
                var b, c = [], d = a.length;
                for (b = 0; b !== d; c.push(a[b++])) ;
                return c
            }, q = d.prototype = new b;
        return d.version = "1.19.1", q.constructor = d, q.kill()._gc = q._forcingPlayhead = q._hasPause = !1, q.to = function (a, b, d, e) {
            var f = d.repeat && l.TweenMax || c;
            return b ? this.add(new f(a, b, d), e) : this.set(a, d, e)
        }, q.from = function (a, b, d, e) {
            return this.add((d.repeat && l.TweenMax || c).from(a, b, d), e)
        }, q.fromTo = function (a, b, d, e, f) {
            var g = e.repeat && l.TweenMax || c;
            return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f)
        }, q.staggerTo = function (a, b, e, f, g, i, j, k) {
            var l, o, q = new d({
                onComplete: i,
                onCompleteParams: j,
                callbackScope: k,
                smoothChildTiming: this.smoothChildTiming
            }), r = e.cycle;
            for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], h(a) && (a = p(a)), f = f || 0, 0 > f && (a = p(a), a.reverse(), f *= -1), o = 0; o < a.length; o++) l = m(e), l.startAt && (l.startAt = m(l.startAt), l.startAt.cycle && n(l.startAt, a, o)), r && (n(l, a, o), null != l.duration && (b = l.duration, delete l.duration)), q.to(a[o], b, l, o * f);
            return this.add(q, g)
        }, q.staggerFrom = function (a, b, c, d, e, f, g, h) {
            return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h)
        }, q.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i)
        }, q.call = function (a, b, d, e) {
            return this.add(c.delayedCall(0, a, b, d), e)
        }, q.set = function (a, b, d) {
            return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d)
        }, d.exportRoot = function (a, b) {
            a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
            var e, f, g = new d(a), h = g._timeline;
            for (null == b && (b = !0), h._remove(g, !0), g._startTime = 0, g._rawPrevTime = g._time = g._totalTime = h._time, e = h._first; e;) f = e._next, b && e instanceof c && e.target === e.vars.onComplete || g.add(e, e._startTime - e._delay), e = f;
            return h.add(g, 0), g
        }, q.add = function (e, f, g, h) {
            var j, k, l, m, n, o;
            if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                if (e instanceof Array || e && e.push && i(e)) {
                    for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++) i(m = e[l]) && (m = new d({tweens: m})), this.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), j += h;
                    return this._uncache(!0)
                }
                if ("string" == typeof e) return this.addLabel(e, f);
                if ("function" != typeof e) throw"Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                e = c.delayedCall(0, e)
            }
            if (b.prototype.add.call(this, e, f), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (n = this, o = n.rawTime() > e._startTime; n._timeline;) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline;
            return this
        }, q.remove = function (b) {
            if (b instanceof a) {
                this._remove(b, !1);
                var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;
                return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale, this
            }
            if (b instanceof Array || b && b.push && i(b)) {
                for (var d = b.length; --d > -1;) this.remove(b[d]);
                return this
            }
            return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b)
        }, q._remove = function (a, c) {
            b.prototype._remove.call(this, a, c);
            var d = this._last;
            return d ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, q.append = function (a, b) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
        }, q.insert = q.insertMultiple = function (a, b, c, d) {
            return this.add(a, b || 0, c, d)
        }, q.appendMultiple = function (a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
        }, q.addLabel = function (a, b) {
            return this._labels[a] = this._parseTimeOrLabel(b), this
        }, q.addPause = function (a, b, d, e) {
            var f = c.delayedCall(0, o, d, e || this);
            return f.vars.onComplete = f.vars.onReverseComplete = b, f.data = "isPause", this._hasPause = !0, this.add(f, a)
        }, q.removeLabel = function (a) {
            return delete this._labels[a], this
        }, q.getLabelTime = function (a) {
            return null != this._labels[a] ? this._labels[a] : -1
        }, q._parseTimeOrLabel = function (b, c, d, e) {
            var f;
            if (e instanceof a && e.timeline === this) this.remove(e); else if (e && (e instanceof Array || e.push && i(e))) for (f = e.length; --f > -1;) e[f] instanceof a && e[f].timeline === this && this.remove(e[f]);
            if ("string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - this.duration() : 0, d);
            if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = this.duration()); else {
                if (f = b.indexOf("="), -1 === f) return null == this._labels[b] ? d ? this._labels[b] = this.duration() + c : c : this._labels[b] + c;
                c = parseInt(b.charAt(f - 1) + "1", 10) * Number(b.substr(f + 1)), b = f > 1 ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d) : this.duration()
            }
            return Number(b) + c
        }, q.seek = function (a, b) {
            return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1)
        }, q.stop = function () {
            return this.paused(!0)
        }, q.gotoAndPlay = function (a, b) {
            return this.play(a, b)
        }, q.gotoAndStop = function (a, b) {
            return this.pause(a, b)
        }, q.render = function (a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d, f, g, h, i, l, m, n = this._dirty ? this.totalDuration() : this._totalDuration, o = this._time,
                p = this._startTime, q = this._timeScale, r = this._paused;
            if (a >= n - 1e-7 && a >= 0) this._totalTime = this._time = n, this._reversed || this._hasPausedChild() || (f = !0, h = "onComplete", i = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (i = !0, this._rawPrevTime > e && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, a = n + 1e-4; else if (1e-7 > a) if (this._totalTime = this._time = 0, (0 !== o || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > a && this._rawPrevTime >= 0)) && (h = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (i = f = !0, h = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (i = !0), this._rawPrevTime = a; else {
                if (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f) for (d = this._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;
                a = 0, this._initted || (i = !0)
            } else {
                if (this._hasPause && !this._forcingPlayhead && !b) {
                    if (a >= o) for (d = this._first; d && d._startTime <= a && !l;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (l = d), d = d._next; else for (d = this._last; d && d._startTime >= a && !l;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d), d = d._prev;
                    l && (this._time = a = l._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = a
            }
            if (this._time !== o && this._first || c || i || l) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== o && a > 0 && (this._active = !0), 0 === o && this.vars.onStart && (0 === this._time && this._duration || b || this._callback("onStart")), m = this._time, m >= o) for (d = this._first; d && (g = d._next, m === this._time && (!this._paused || r));) (d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g; else for (d = this._last; d && (g = d._prev, m === this._time && (!this._paused || r));) {
                    if (d._active || d._startTime <= o && !d._paused && !d._gc) {
                        if (l === d) {
                            for (l = d._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), l = l._prev;
                            l = null, this.pause()
                        }
                        d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                    }
                    d = g
                }
                this._onUpdate && (b || (j.length && k(), this._callback("onUpdate"))), h && (this._gc || (p === this._startTime || q !== this._timeScale) && (0 === this._time || n >= this.totalDuration()) && (f && (j.length && k(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[h] && this._callback(h)))
            }
        }, q._hasPausedChild = function () {
            for (var a = this._first; a;) {
                if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                a = a._next
            }
            return !1
        }, q.getChildren = function (a, b, d, e) {
            e = e || -9999999999;
            for (var f = [], g = this._first, h = 0; g;) g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
            return f
        }, q.getTweensOf = function (a, b) {
            var d, e, f = this._gc, g = [], h = 0;
            for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1;) (d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
            return f && this._enabled(!1, !0), g
        }, q.recent = function () {
            return this._recent
        }, q._contains = function (a) {
            for (var b = a.timeline; b;) {
                if (b === this) return !0;
                b = b.timeline
            }
            return !1
        }, q.shiftChildren = function (a, b, c) {
            c = c || 0;
            for (var d, e = this._first, f = this._labels; e;) e._startTime >= c && (e._startTime += a), e = e._next;
            if (b) for (d in f) f[d] >= c && (f[d] += a);
            return this._uncache(!0)
        }, q._kill = function (a, b) {
            if (!a && !b) return this._enabled(!1, !1);
            for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) c[d]._kill(a, b) && (e = !0);
            return e
        }, q.clear = function (a) {
            var b = this.getChildren(!1, !0, !0), c = b.length;
            for (this._time = this._totalTime = 0; --c > -1;) b[c]._enabled(!1, !1);
            return a !== !1 && (this._labels = {}), this._uncache(!0)
        }, q.invalidate = function () {
            for (var b = this._first; b;) b.invalidate(), b = b._next;
            return a.prototype.invalidate.call(this)
        }, q._enabled = function (a, c) {
            if (a === this._gc) for (var d = this._first; d;) d._enabled(a, !0), d = d._next;
            return b.prototype._enabled.call(this, a, c)
        }, q.totalTime = function (b, c, d) {
            this._forcingPlayhead = !0;
            var e = a.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, e
        }, q.duration = function (a) {
            return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
        }, q.totalDuration = function (a) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var b, c, d = 0, e = this._last, f = 999999999999; e;) b = e._prev, e._dirty && e.totalDuration(), e._startTime > f && this._sortChildren && !e._paused ? this.add(e, e._startTime - e._delay) : f = e._startTime, e._startTime < 0 && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale), this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), c = e._startTime + e._totalDuration / e._timeScale, c > d && (d = c), e = b;
                    this._duration = this._totalDuration = d, this._dirty = !1
                }
                return this._totalDuration
            }
            return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this
        }, q.paused = function (b) {
            if (!b) for (var c = this._first, d = this._time; c;) c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0), c = c._next;
            return a.prototype.paused.apply(this, arguments)
        }, q.usesFrames = function () {
            for (var b = this._timeline; b._timeline;) b = b._timeline;
            return b === a._rootFramesTimeline
        }, q.rawTime = function (a) {
            return a && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(a) - this._startTime) * this._timeScale
        }, d
    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (a, b, c) {
        var d = function (b) {
                a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
            }, e = 1e-10, f = b._internals, g = f.lazyTweens, h = f.lazyRender, i = _gsScope._gsDefine.globals,
            j = new c(null, null, 1, 0), k = d.prototype = new a;
        return k.constructor = d, k.kill()._gc = !1, d.version = "1.19.1", k.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this)
        }, k.addCallback = function (a, c, d, e) {
            return this.add(b.delayedCall(0, a, d, e), c)
        }, k.removeCallback = function (a, b) {
            if (a) if (null == b) this._kill(null, a); else for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) c[d]._startTime === e && c[d]._enabled(!1, !1);
            return this
        }, k.removePause = function (b) {
            return this.removeCallback(a._internals.pauseCallback, b)
        }, k.tweenTo = function (a, c) {
            c = c || {};
            var d, e, f, g = {ease: j, useFrames: this.usesFrames(), immediateRender: !1},
                h = c.repeat && i.TweenMax || b;
            for (e in c) g[e] = c[e];
            return g.time = this._parseTimeOrLabel(a), d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001, f = new h(this, d, g), g.onStart = function () {
                f.target.paused(!0), f.vars.time !== f.target.time() && d === f.duration() && f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale), c.onStart && c.onStart.apply(c.onStartScope || c.callbackScope || f, c.onStartParams || [])
            }, f
        }, k.tweenFromTo = function (a, b, c) {
            c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
                onComplete: this.seek,
                onCompleteParams: [a],
                callbackScope: this
            }, c.immediateRender = c.immediateRender !== !1;
            var d = this.tweenTo(b, c);
            return d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001)
        }, k.render = function (a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d, f, i, j, k, l, m, n, o = this._dirty ? this.totalDuration() : this._totalDuration,
                p = this._duration, q = this._time, r = this._totalTime, s = this._startTime, t = this._timeScale,
                u = this._rawPrevTime, v = this._paused, w = this._cycle;
            if (a >= o - 1e-7 && a >= 0) this._locked || (this._totalTime = o, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (f = !0, j = "onComplete", k = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || 0 > u || u === e) && u !== a && this._first && (k = !0, u > e && (j = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = p, a = p + 1e-4); else if (1e-7 > a) if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== q || 0 === p && u !== e && (u > 0 || 0 > a && u >= 0) && !this._locked) && (j = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (k = f = !0, j = "onReverseComplete") : u >= 0 && this._first && (k = !0), this._rawPrevTime = a; else {
                if (this._rawPrevTime = p || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f) for (d = this._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;
                a = 0, this._initted || (k = !0)
            } else if (0 === p && 0 > u && (k = !0), this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (l = p + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && a >= r && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, a = p + 1e-4) : this._time < 0 ? this._time = a = 0 : a = this._time)), this._hasPause && !this._forcingPlayhead && !b && p > a) {
                if (a = this._time, a >= q || this._repeat && w !== this._cycle) for (d = this._first; d && d._startTime <= a && !m;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (m = d), d = d._next; else for (d = this._last; d && d._startTime >= a && !m;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (m = d), d = d._prev;
                m && (this._time = a = m._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== w && !this._locked) {
                var x = this._yoyo && 0 !== (1 & w), y = x === (this._yoyo && 0 !== (1 & this._cycle)),
                    z = this._totalTime, A = this._cycle, B = this._rawPrevTime, C = this._time;
                if (this._totalTime = w * p, this._cycle < w ? x = !x : this._totalTime += p, this._time = q, this._rawPrevTime = 0 === p ? u - 1e-4 : u, this._cycle = w, this._locked = !0, q = x ? 0 : p, this.render(q, b, 0 === p), b || this._gc || this.vars.onRepeat && (this._cycle = A, this._locked = !1, this._callback("onRepeat")), q !== this._time) return;
                if (y && (this._cycle = w, this._locked = !0, q = x ? p + 1e-4 : -1e-4, this.render(q, !0, !1)), this._locked = !1, this._paused && !v) return;
                this._time = C, this._totalTime = z, this._cycle = A, this._rawPrevTime = B
            }
            if (!(this._time !== q && this._first || c || k || m)) return void(r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== r && a > 0 && (this._active = !0), 0 === r && this.vars.onStart && (0 === this._totalTime && this._totalDuration || b || this._callback("onStart")), n = this._time, n >= q) for (d = this._first; d && (i = d._next, n === this._time && (!this._paused || v));) (d._active || d._startTime <= this._time && !d._paused && !d._gc) && (m === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = i; else for (d = this._last; d && (i = d._prev, n === this._time && (!this._paused || v));) {
                if (d._active || d._startTime <= q && !d._paused && !d._gc) {
                    if (m === d) {
                        for (m = d._prev; m && m.endTime() > this._time;) m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), m = m._prev;
                        m = null, this.pause()
                    }
                    d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                }
                d = i
            }
            this._onUpdate && (b || (g.length && h(), this._callback("onUpdate"))), j && (this._locked || this._gc || (s === this._startTime || t !== this._timeScale) && (0 === this._time || o >= this.totalDuration()) && (f && (g.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[j] && this._callback(j)))
        }, k.getActive = function (a, b, c) {
            null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
            var d, e, f = [], g = this.getChildren(a, b, c), h = 0, i = g.length;
            for (d = 0; i > d; d++) e = g[d], e.isActive() && (f[h++] = e);
            return f
        }, k.getLabelAfter = function (a) {
            a || 0 !== a && (a = this._time);
            var b, c = this.getLabelsArray(), d = c.length;
            for (b = 0; d > b; b++) if (c[b].time > a) return c[b].name;
            return null
        }, k.getLabelBefore = function (a) {
            null == a && (a = this._time);
            for (var b = this.getLabelsArray(), c = b.length; --c > -1;) if (b[c].time < a) return b[c].name;
            return null
        }, k.getLabelsArray = function () {
            var a, b = [], c = 0;
            for (a in this._labels) b[c++] = {time: this._labels[a], name: a};
            return b.sort(function (a, b) {
                return a.time - b.time
            }), b
        }, k.invalidate = function () {
            return this._locked = !1, a.prototype.invalidate.call(this)
        }, k.progress = function (a, b) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration()
        }, k.totalProgress = function (a, b) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration()
        }, k.totalDuration = function (b) {
            return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, k.time = function (a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
        }, k.repeat = function (a) {
            return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
        }, k.repeatDelay = function (a) {
            return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
        }, k.yoyo = function (a) {
            return arguments.length ? (this._yoyo = a, this) : this._yoyo
        }, k.currentLabel = function (a) {
            return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8)
        }, d
    }, !0), function () {
        var a = 180 / Math.PI, b = [], c = [], d = [], e = {}, f = _gsScope._gsDefine.globals,
            g = function (a, b, c, d) {
                c === d && (c = d - (d - b) / 1e6), a === b && (b = a + (c - a) / 1e6), this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a
            },
            h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            i = function (a, b, c, d) {
                var e = {a: a}, f = {}, g = {}, h = {c: d}, i = (a + b) / 2, j = (b + c) / 2, k = (c + d) / 2,
                    l = (i + j) / 2, m = (j + k) / 2, n = (m - l) / 8;
                return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h]
            }, j = function (a, e, f, g, h) {
                var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1, x = 0, y = a[0].a;
                for (j = 0; w > j; j++) n = a[x], k = n.a, l = n.d, m = a[x + 1].d, h ? (t = b[j], u = c[j], v = (u + t) * e * .25 / (g ? .5 : d[j] || .5), o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0), p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0), q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - (l - k) * e * .5, p = l + (m - l) * e * .5, q = l - (o + p) / 2), o += q, p += q, n.c = r = o, 0 !== j ? n.b = y : n.b = y = n.a + .6 * (n.c - n.a), n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = i(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++, y = p;
                n = a[x], n.b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, n.ba = y - n.a, f && (s = i(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]))
            }, k = function (a, d, e, f) {
                var h, i, j, k, l, m, n = [];
                if (f) for (a = [f].concat(a), i = a.length; --i > -1;) "string" == typeof(m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
                if (h = a.length - 2, 0 > h) return n[0] = new g(a[0][d], 0, 0, a[-1 > h ? 0 : 1][d]), n;
                for (i = 0; h > i; i++) j = a[i][d], k = a[i + 1][d], n[i] = new g(j, 0, 0, k), e && (l = a[i + 2][d], b[i] = (b[i] || 0) + (k - j) * (k - j), c[i] = (c[i] || 0) + (l - k) * (l - k));
                return n[i] = new g(a[i][d], 0, 0, a[i + 1][d]), n
            }, l = function (a, f, g, i, l, m) {
                var n, o, p, q, r, s, t, u, v = {}, w = [], x = m || a[0];
                l = "string" == typeof l ? "," + l + "," : h, null == f && (f = 1);
                for (o in a[0]) w.push(o);
                if (a.length > 1) {
                    for (u = a[a.length - 1], t = !0, n = w.length; --n > -1;) if (o = w[n], Math.abs(x[o] - u[o]) > .05) {
                        t = !1;
                        break
                    }
                    t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3])
                }
                for (b.length = c.length = d.length = 0, n = w.length; --n > -1;) o = w[n], e[o] = -1 !== l.indexOf("," + o + ","), v[o] = k(a, o, e[o], m);
                for (n = b.length; --n > -1;) b[n] = Math.sqrt(b[n]), c[n] = Math.sqrt(c[n]);
                if (!i) {
                    for (n = w.length; --n > -1;) if (e[o]) for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++) r = p[q + 1].da / c[q] + p[q].da / b[q] || 0, d[q] = (d[q] || 0) + r * r;
                    for (n = d.length; --n > -1;) d[n] = Math.sqrt(d[n])
                }
                for (n = w.length, q = g ? 4 : 1; --n > -1;) o = w[n], p = v[o], j(p, f, g, i, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
                return v
            }, m = function (a, b, c) {
                b = b || "soft";
                var d, e, f, h, i, j, k, l, m, n, o, p = {}, q = "cubic" === b ? 3 : 2, r = "soft" === b, s = [];
                if (r && c && (a = [c].concat(a)), null == a || a.length < q + 1) throw"invalid Bezier data";
                for (m in a[0]) s.push(m);
                for (j = s.length; --j > -1;) {
                    for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++) d = null == c ? a[k][m] : "string" == typeof(o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
                    for (l = n - q + 1, n = 0, k = 0; l > k; k += q) d = i[k], e = i[k + 1], f = i[k + 2], h = 2 === q ? 0 : i[k + 3], i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f);
                    i.length = n
                }
                return p
            }, n = function (a, b, c) {
                for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;) for (m = a[p], f = m.a, g = m.d - f,
                                                                                                       h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++) j = o * k, l = 1 - j, d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j), n = p * c + k - 1, b[n] = (b[n] || 0) + d * d
            }, o = function (a, b) {
                b = b >> 0 || 6;
                var c, d, e, f, g = [], h = [], i = 0, j = 0, k = b - 1, l = [], m = [];
                for (c in a) n(a[c], g, b);
                for (e = g.length, d = 0; e > d; d++) i += Math.sqrt(g[d]), f = d % b, m[f] = i, f === k && (j += i, f = d / b >> 0, l[f] = m, h[f] = j, i = 0, m = []);
                return {length: j, lengths: h, segments: l}
            }, p = _gsScope._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.7",
                API: 2,
                global: !0,
                init: function (a, b, c) {
                    this._target = a, b instanceof Array && (b = {values: b}), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                    var d, e, f, g, h, i = b.values || [], j = {}, k = i[0], n = b.autoRotate || c.vars.orientToBezier;
                    this._autoRotate = n ? n instanceof Array ? n : [["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]] : null;
                    for (d in k) this._props.push(d);
                    for (f = this._props.length; --f > -1;) d = this._props[f], this._overwriteProps.push(d), e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), h || j[d] !== i[0][d] && (h = j);
                    if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j), this._segCount = this._beziers[d].length, this._timeRes) {
                        var p = o(this._beziers, this._timeRes);
                        this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (n = this._autoRotate) for (this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [n]), f = n.length; --f > -1;) {
                        for (g = 0; 3 > g; g++) d = n[f][g], this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1;
                        d = n[f][2], this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0, this._overwriteProps.push(d)
                    }
                    return this._startRatio = c.vars.runBackwards ? 1 : 0, !0
                },
                set: function (b) {
                    var c, d, e, f, g, h, i, j, k, l, m = this._segCount, n = this._func, o = this._target,
                        p = b !== this._startRatio;
                    if (this._timeRes) {
                        if (k = this._lengths, l = this._curSeg, b *= this._length, e = this._li, b > this._l2 && m - 1 > e) {
                            for (j = m - 1; j > e && (this._l2 = k[++e]) <= b;) ;
                            this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0]
                        } else if (b < this._l1 && e > 0) {
                            for (; e > 0 && (this._l1 = k[--e]) >= b;) ;
                            0 === e && b < this._l1 ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si]
                        }
                        if (c = e, b -= this._l1, e = this._si, b > this._s2 && e < l.length - 1) {
                            for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b;) ;
                            this._s1 = l[e - 1], this._si = e
                        } else if (b < this._s1 && e > 0) {
                            for (; e > 0 && (this._s1 = l[--e]) >= b;) ;
                            0 === e && b < this._s1 ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e
                        }
                        h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                    } else c = 0 > b ? 0 : b >= 1 ? m - 1 : m * b >> 0, h = (b - c * (1 / m)) * m;
                    for (d = 1 - h, e = this._props.length; --e > -1;) f = this._props[e], g = this._beziers[f][c], i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : o[f] = i;
                    if (this._autoRotate) {
                        var q, r, s, t, u, v, w, x = this._autoRotate;
                        for (e = x.length; --e > -1;) f = x[e][2], v = x[e][3] || 0, w = x[e][4] === !0 ? 1 : a, g = this._beziers[x[e][0]], q = this._beziers[x[e][1]], g && q && (g = g[c], q = q[c], r = g.a + (g.b - g.a) * h, t = g.b + (g.c - g.b) * h, r += (t - r) * h, t += (g.c + (g.d - g.c) * h - t) * h, s = q.a + (q.b - q.a) * h, u = q.b + (q.c - q.b) * h, s += (u - s) * h, u += (q.c + (q.d - q.c) * h - u) * h, i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e], this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : o[f] = i)
                    }
                }
            }), q = p.prototype;
        p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = !0, p.quadraticToCubic = function (a, b, c) {
            return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
        }, p._cssRegister = function () {
            var a = f.CSSPlugin;
            if (a) {
                var b = a._internals, c = b._parseToProxy, d = b._setPluginRatio, e = b.CSSPropTween;
                b._registerComplexSpecialProp("bezier", {
                    parser: function (a, b, f, g, h, i) {
                        b instanceof Array && (b = {values: b}), i = new p;
                        var j, k, l, m = b.values, n = m.length - 1, o = [], q = {};
                        if (0 > n) return h;
                        for (j = 0; n >= j; j++) l = c(a, m[j], g, h, i, n !== j), o[j] = l.end;
                        for (k in b) q[k] = b[k];
                        return q.values = o, h = new e(a, "bezier", 0, 0, l.pt, 2), h.data = l, h.plugin = i, h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0 ? 0 : Number(q.autoRotate), q.autoRotate = null != l.end.left ? [["left", "top", "rotation", j, !1]] : null != l.end.x ? [["x", "y", "rotation", j, !1]] : !1), q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, g._overwriteProps.push("rotation")), i._onInitTween(l.proxy, q, g._tween), h
                    }
                })
            }
        }, q._mod = function (a) {
            for (var b, c = this._overwriteProps, d = c.length; --d > -1;) b = a[c[d]], b && "function" == typeof b && (this._mod[c[d]] = b)
        }, q._kill = function (a) {
            var b, c, d = this._props;
            for (b in this._beziers) if (b in a) for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;) d[c] === b && d.splice(c, 1);
            if (d = this._autoRotate) for (c = d.length; --c > -1;) a[d[c][2]] && d.splice(c, 1);
            return this._super._kill.call(this, a)
        }
    }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (a, b) {
        var c, d, e, f, g = function () {
            a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio
        }, h = _gsScope._gsDefine.globals, i = {}, j = g.prototype = new a("css");
        j.constructor = g, g.version = "1.19.1", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = {
            top: j,
            right: j,
            bottom: j,
            left: j,
            width: j,
            height: j,
            fontSize: j,
            padding: j,
            margin: j,
            perspective: j,
            lineHeight: ""
        };
        var k, l, m, n, o, p, q, r, s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
            t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            w = /(?:\d|\-|\+|=|#|\.)*/g, x = /opacity *= *([^)]*)/i, y = /opacity:([^;]*)/i,
            z = /alpha\(opacity *=.+?\)/i, A = /^(rgb|hsl)/, B = /([A-Z])/g, C = /-([a-z])/gi,
            D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, E = function (a, b) {
                return b.toUpperCase()
            }, F = /(?:Left|Right|Width)/i, G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, I = /,(?=[^\)]*(?:\(|$))/gi, J = /[\s,\(]/i,
            K = Math.PI / 180, L = 180 / Math.PI, M = {}, N = {style: {}}, O = _gsScope.document || {
                createElement: function () {
                    return N
                }
            }, P = function (a, b) {
                return O.createElementNS ? O.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : O.createElement(a)
            }, Q = P("div"), R = P("img"), S = g._internals = {_specialProps: i},
            T = (_gsScope.navigator || {}).userAgent || "", U = function () {
                var a = T.indexOf("Android"), b = P("a");
                return m = -1 !== T.indexOf("Safari") && -1 === T.indexOf("Chrome") && (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3), o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6, n = -1 !== T.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) && (p = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1
            }(), V = function (a) {
                return x.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, W = function (a) {
                _gsScope.console && console.log(a)
            }, X = "", Y = "", Z = function (a, b) {
                b = b || Q;
                var c, d, e = b.style;
                if (void 0 !== e[a]) return a;
                for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];) ;
                return d >= 0 ? (Y = 3 === d ? "ms" : c[d], X = "-" + Y.toLowerCase() + "-", Y + a) : null
            }, $ = O.defaultView ? O.defaultView.getComputedStyle : function () {
            }, _ = g.getStyle = function (a, b, c, d, e) {
                var f;
                return U || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || $(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(B, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : V(a)
            }, aa = S.convertToPixels = function (a, c, d, e, f) {
                if ("px" === e || !e) return d;
                if ("auto" === e || !d) return 0;
                var h, i, j, k = F.test(c), l = a, m = Q.style, n = 0 > d, o = 1 === d;
                if (n && (d = -d), o && (d *= 100), "%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight); else {
                    if (m.cssText = "border:0 solid red;position:" + _(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e; else {
                        if (l = a.parentNode || O.body, i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
                        m[k ? "width" : "height"] = d + e
                    }
                    l.appendChild(Q), h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(Q), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = aa(a, c, d, e, !0))
                }
                return o && (h /= 100), n ? -h : h
            }, ba = S.calculateOffset = function (a, b, c) {
                if ("absolute" !== _(a, "position", c)) return 0;
                var d = "left" === b ? "Left" : "Top", e = _(a, "margin" + d, c);
                return a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0)
            }, ca = function (a, b) {
                var c, d, e, f = {};
                if (b = b || $(a, null)) if (c = b.length) for (; --c > -1;) e = b[c], (-1 === e.indexOf("-transform") || Da === e) && (f[e.replace(C, E)] = b.getPropertyValue(e)); else for (c in b) (-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]); else if (b = a.currentStyle || a.style) for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(C, E)] = b[c]);
                return U || (f.opacity = V(a)), d = Ra(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Fa && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f
            }, da = function (a, b, c, d, e) {
                var f, g, h, i = {}, j = a.style;
                for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(v, "") ? f : 0 : ba(a, g), void 0 !== j[g] && (h = new sa(j, g, j[g], h)));
                if (d) for (g in d) "className" !== g && (i[g] = d[g]);
                return {difs: i, firstMPT: h}
            }, ea = {width: ["Left", "Right"], height: ["Top", "Bottom"]},
            fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"], ga = function (a, b, c) {
                if ("svg" === (a.nodeName + "").toLowerCase()) return (c || $(a))[b] || 0;
                if (a.getCTM && Oa(a)) return a.getBBox()[b] || 0;
                var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight), e = ea[b], f = e.length;
                for (c = c || $(a, null); --f > -1;) d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0;
                return d
            }, ha = function (a, b) {
                if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
                (null == a || "" === a) && (a = "0 0");
                var c, d = a.split(" "), e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0],
                    f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
                if (d.length > 3 && !b) {
                    for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) a.push(ha(d[c]));
                    return a.join(",")
                }
                return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), a = e + " " + f + (d.length > 2 ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(e.replace(v, "")), b.oy = parseFloat(f.replace(v, "")), b.v = a), b || a
            }, ia = function (a, b) {
                return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0
            }, ja = function (a, b) {
                return "function" == typeof a && (a = a(r, q)), null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0
            }, ka = function (a, b, c, d) {
                var e, f, g, h, i, j = 1e-6;
                return "function" == typeof a && (a = a(r, q)), null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : L) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h
            }, la = {
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
            }, ma = function (a, b, c) {
                return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
            }, na = g.parseColor = function (a, b) {
                var c, d, e, f, g, h, i, j, k, l, m;
                if (a) if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a]; else {
                    if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), la[a]) c = la[a]; else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a]; else if ("hsl" === a.substr(0, 3)) if (c = m = a.match(s), b) {
                        if (-1 !== a.indexOf("=")) return a.match(t)
                    } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(a[3])), c[0] = ma(g + 1 / 3, d, e), c[1] = ma(g, d, e), c[2] = ma(g - 1 / 3, d, e); else c = a.match(s) || la.transparent;
                    c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]))
                } else c = la.black;
                return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c
            }, oa = function (a, b) {
                var c, d, e, f = a.match(pa) || [], g = 0, h = f.length ? "" : a;
                for (c = 0; c < f.length; c++) d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = na(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
                return h + a.substr(g)
            }, pa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (j in la) pa += "|" + j + "\\b";
        pa = new RegExp(pa + ")", "gi"), g.colorStringFilter = function (a) {
            var b, c = a[0] + a[1];
            pa.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = oa(a[0], b), a[1] = oa(a[1], b)), pa.lastIndex = 0
        }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
        var qa = function (a, b, c, d) {
            if (null == a) return function (a) {
                return a
            };
            var e, f = b ? (a.match(pa) || [""])[0] : "", g = a.split(f).join("").match(u) || [],
                h = a.substr(0, a.indexOf(g[0])), i = ")" === a.charAt(a.length - 1) ? ")" : "",
                j = -1 !== a.indexOf(" ") ? " " : ",", k = g.length, l = k > 0 ? g[0].replace(s, "") : "";
            return k ? e = b ? function (a) {
                var b, m, n, o;
                if ("number" == typeof a) a += l; else if (d && I.test(a)) {
                    for (o = a.replace(I, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
                    return o.join(",")
                }
                if (b = (a.match(pa) || [f])[0], m = a.split(b).join("").match(u) || [], n = m.length, k > n--) for (; ++n < k;) m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
                return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
            } : function (a) {
                var b, f, m;
                if ("number" == typeof a) a += l; else if (d && I.test(a)) {
                    for (f = a.replace(I, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
                    return f.join(",")
                }
                if (b = a.match(u) || [], m = b.length, k > m--) for (; ++m < k;) b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
                return h + b.join(j) + i
            } : function (a) {
                return a
            }
        }, ra = function (a) {
            return a = a.split(","), function (b, c, d, e, f, g, h) {
                var i, j = (c + "").split(" ");
                for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                return e.parse(b, h, f, g)
            }
        }, sa = (S._setPluginRatio = function (a) {
            this.plugin.setRatio(a);
            for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;) b = h[i.v], i.r ? b = Math.round(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next;
            if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod(h.rotation, this.t) : h.rotation), 1 === a || 0 === a) for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
                if (c = i.t, c.type) {
                    if (1 === c.type) {
                        for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                        c[f] = e
                    }
                } else c[f] = c.s + c.xs0;
                i = i._next
            }
        }, function (a, b, c, d, e) {
            this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
        }), ta = (S._parseToProxy = function (a, b, c, d, e, f) {
            var g, h, i, j, k, l = d, m = {}, n = {}, o = c._transform, p = M;
            for (c._transform = null, M = b, d = k = c.parse(a, b, d, e), M = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
                if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new sa(d, "s", h, j, d.r), d.c = 0), 1 === d.type)) for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new sa(d, i, h, j, d.rxp[i]));
                d = d._next
            }
            return {proxy: m, end: n, firstMPT: j, pt: k}
        }, S.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
            this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof ta || f.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this)
        }), ua = function (a, b, c, d, e, f) {
            var g = new ta(a, b, c, d - c, e, -1, f);
            return g.b = c, g.e = g.xs0 = d, g
        }, va = g.parseComplex = function (a, b, c, d, e, f, h, i, j, l) {
            c = c || f || "", "function" == typeof d && (d = d(r, q)), h = new ta(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d), d += "", e && pa.test(d + c) && (d = [c, d], g.colorStringFilter(d), c = d[0], d = d[1]);
            var m, n, o, p, u, v, w, x, y, z, A, B, C, D = c.split(", ").join(",").split(" "),
                E = d.split(", ").join(",").split(" "), F = D.length, G = k !== !1;
            for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (D = D.join(" ").replace(I, ", ").split(" "), E = E.join(" ").replace(I, ", ").split(" "), F = D.length), F !== E.length && (D = (f || "").split(" "), F = D.length), h.plugin = j, h.setRatio = l, pa.lastIndex = 0, m = 0; F > m; m++) if (p = D[m], u = E[m], x = parseFloat(p), x || 0 === x) h.appendXtra("", x, ia(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px"), !0); else if (e && pa.test(p)) B = u.indexOf(")") + 1, B = ")" + (B ? u.substr(B) : ""), C = -1 !== u.indexOf("hsl") && U, p = na(p, C), u = na(u, C), y = p.length + u.length > 6, y && !U && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(E[m]).join("transparent")) : (U || (y = !1), C ? h.appendXtra(y ? "hsla(" : "hsl(", p[0], ia(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ia(u[1], p[1]), "%,", !1).appendXtra("", p[2], ia(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(y ? "rgba(" : "rgb(", p[0], u[0] - p[0], ",", !0, !0).appendXtra("", p[1], u[1] - p[1], ",", !0).appendXtra("", p[2], u[2] - p[2], y ? "," : B, !0), y && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))), pa.lastIndex = 0; else if (v = p.match(s)) {
                if (w = u.match(t), !w || w.length !== v.length) return h;
                for (o = 0, n = 0; n < v.length; n++) A = v[n], z = p.indexOf(A, o), h.appendXtra(p.substr(o, z - o), Number(A), ia(w[n], A), "", G && "px" === p.substr(z + A.length, 2), 0 === n), o = z + A.length;
                h["xs" + h.l] += p.substr(o)
            } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
            if (-1 !== d.indexOf("=") && h.data) {
                for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) B += h["xs" + m] + h.data["xn" + m];
                h.e = B + h["xs" + m]
            }
            return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h
        }, wa = 9;
        for (j = ta.prototype, j.l = j.pr = 0; --wa > 0;) j["xn" + wa] = 0, j["xs" + wa] = "";
        j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function (a, b, c, d, e, f) {
            var g = this, h = g.l;
            return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new ta(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {s: b + c}, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
        };
        var xa = function (a, b) {
            b = b || {}, this.p = b.prefix ? Z(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || qa(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
        }, ya = S._registerComplexSpecialProp = function (a, b, c) {
            "object" != typeof b && (b = {parser: c});
            var d, e, f = a.split(","), g = b.defaultValue;
            for (c = c || [g], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new xa(f[d], b)
        }, za = S._registerPluginProp = function (a) {
            if (!i[a]) {
                var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                ya(a, {
                    parser: function (a, c, d, e, f, g, j) {
                        var k = h.com.greensock.plugins[b];
                        return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (W("Error: " + b + " js file not loaded."), f)
                    }
                })
            }
        };
        j = xa.prototype, j.parseComplex = function (a, b, c, d, e, f) {
            var g, h, i, j, k, l, m = this.keyword;
            if (this.multi && (I.test(c) || I.test(b) ? (h = b.replace(I, "|").split("|"), i = c.replace(I, "|").split("|")) : m && (h = [b], i = [c])), i) {
                for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
                b = h.join(", "), c = i.join(", ")
            }
            return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
        }, j.parse = function (a, b, c, d, f, g, h) {
            return this.parseComplex(a.style, this.format(_(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
        }, g.registerSpecialProp = function (a, b, c) {
            ya(a, {
                parser: function (a, d, e, f, g, h, i) {
                    var j = new ta(a, e, 0, 0, g, 2, e, !1, c);
                    return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j
                }, priority: c
            })
        }, g.useSVGTransformAttr = !0;
        var Aa,
            Ba = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
            Ca = Z("transform"), Da = X + "transform", Ea = Z("transformOrigin"), Fa = null !== Z("perspective"),
            Ga = S.Transform = function () {
                this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = g.defaultForce3D !== !1 && Fa ? g.defaultForce3D || "auto" : !1
            }, Ha = _gsScope.SVGElement, Ia = function (a, b, c) {
                var d, e = O.createElementNS("http://www.w3.org/2000/svg", a), f = /([a-z])([A-Z])/g;
                for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
                return b.appendChild(e), e
            }, Ja = O.documentElement || {}, Ka = function () {
                var a, b, c, d = p || /Android/i.test(T) && !_gsScope.chrome;
                return O.createElementNS && !d && (a = Ia("svg", Ja), b = Ia("rect", a, {
                    width: 100,
                    height: 50,
                    x: 100
                }), c = b.getBoundingClientRect().width, b.style[Ea] = "50% 50%", b.style[Ca] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Fa), Ja.removeChild(a)), d
            }(), La = function (a, b, c, d, e, f) {
                var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform, w = Qa(a, !0);
                v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(), 0 === n.x && 0 === n.y && n.width + n.height === 0 && (n = {
                    x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
                    y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
                    width: 0,
                    height: 0
                }), b = ha(b).split(" "), h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]), c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== Pa && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], s = m * p - n * o, s && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, l = c.yOrigin = h[1] = j)), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" "))
            }, Ma = function (a) {
                var b, c = P("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                    d = this.parentNode, e = this.nextSibling, f = this.style.cssText;
                if (Ja.appendChild(c), c.appendChild(this), this.style.display = "block", a) try {
                    b = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ma
                } catch (g) {
                } else this._originalGetBBox && (b = this._originalGetBBox());
                return e ? d.insertBefore(this, e) : d.appendChild(this), Ja.removeChild(c), this.style.cssText = f, b
            }, Na = function (a) {
                try {
                    return a.getBBox()
                } catch (b) {
                    return Ma.call(a, !0)
                }
            }, Oa = function (a) {
                return !(!(Ha && a.getCTM && Na(a)) || a.parentNode && !a.ownerSVGElement)
            }, Pa = [1, 0, 0, 1, 0, 0], Qa = function (a, b) {
                var c, d, e, f, g, h, i = a._gsTransform || new Ga, j = 1e5, k = a.style;
                if (Ca ? d = _(a, Da, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(G), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), i.x || 0, i.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, c && Ca && ((h = "none" === $(a).display) || !a.parentNode) && (h && (f = k.display, k.display = "block"), a.parentNode || (g = 1, Ja.appendChild(a)), d = _(a, Da, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? k.display = f : h && Va(k, "display"), g && Ja.removeChild(a)), (i.svg || a.getCTM && Oa(a)) && (c && -1 !== (k[Ca] + "").indexOf("matrix") && (d = k[Ca], c = 0), e = a.getAttribute("transform"), c && e && (-1 !== e.indexOf("matrix") ? (d = e, c = 0) : -1 !== e.indexOf("translate") && (d = "matrix(1,0,0,1," + e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", c = 0))), c) return Pa;
                for (e = (d || "").match(s) || [], wa = e.length; --wa > -1;) f = Number(e[wa]), e[wa] = (g = f - (f |= 0)) ? (g * j + (0 > g ? -.5 : .5) | 0) / j + f : f;
                return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
            }, Ra = S.getTransform = function (a, c, d, e) {
                if (a._gsTransform && d && !e) return a._gsTransform;
                var f, h, i, j, k, l, m = d ? a._gsTransform || new Ga : new Ga, n = m.scaleX < 0, o = 2e-5, p = 1e5,
                    q = Fa ? parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
                    r = parseFloat(g.defaultTransformPerspective) || 0;
                if (m.svg = !(!a.getCTM || !Oa(a)), m.svg && (La(a, _(a, Ea, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), Aa = g.useSVGTransformAttr || Ka), f = Qa(a), f !== Pa) {
                    if (16 === f.length) {
                        var s, t, u, v, w, x = f[0], y = f[1], z = f[2], A = f[3], B = f[4], C = f[5], D = f[6], E = f[7],
                            F = f[8], G = f[9], H = f[10], I = f[12], J = f[13], K = f[14], M = f[11], N = Math.atan2(D, H);
                        m.zOrigin && (K = -m.zOrigin, I = F * K - f[12], J = G * K - f[13], K = H * K + m.zOrigin - f[14]), m.rotationX = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = B * v + F * w, t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, M = E * -w + M * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = x * v - F * w, t = y * v - G * w, u = z * v - H * w, G = y * w + G * v, H = z * w + H * v, M = A * w + M * v, x = s, y = t, z = u), N = Math.atan2(y, x), m.rotation = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), x = x * v + B * w, t = y * v + C * w, C = y * -w + C * v, D = z * -w + D * v, y = t), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY = 180 - m.rotationY), m.scaleX = (Math.sqrt(x * x + y * y) * p + .5 | 0) / p, m.scaleY = (Math.sqrt(C * C + G * G) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(D * D + H * H) * p + .5 | 0) / p, m.rotationX || m.rotationY ? m.skewX = 0 : (m.skewX = B || C ? Math.atan2(B, C) * L + m.rotation : m.skewX || 0, Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, m.skewX += m.skewX <= 0 ? 180 : -180))), m.perspective = M ? 1 / (0 > M ? -M : M) : 0, m.x = I, m.y = J, m.z = K, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C))
                    } else if (!Fa || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
                        var O = f.length >= 6, P = O ? f[0] : 1, Q = f[1] || 0, R = f[2] || 0, S = O ? f[3] : 1;
                        m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0, l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0, Math.abs(l) > 90 && Math.abs(l) < 270 && (n ? (i *= -1, l += 0 >= k ? 180 : -180, k += 0 >= k ? 180 : -180) : (j *= -1, l += 0 >= l ? 180 : -180)), m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Fa && (m.rotationX = m.rotationY = m.z = 0, m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S))
                    }
                    m.zOrigin = q;
                    for (h in m) m[h] < o && m[h] > -o && (m[h] = 0)
                }
                return d && (a._gsTransform = m, m.svg && (Aa && a.style[Ca] ? b.delayedCall(.001, function () {
                    Va(a.style, Ca)
                }) : !Aa && a.getAttribute("transform") && b.delayedCall(.001, function () {
                    a.removeAttribute("transform")
                }))), m
            }, Sa = function (a) {
                var b, c, d = this.data, e = -d.rotation * K, f = e + d.skewX * K, g = 1e5,
                    h = (Math.cos(e) * d.scaleX * g | 0) / g, i = (Math.sin(e) * d.scaleX * g | 0) / g,
                    j = (Math.sin(f) * -d.scaleY * g | 0) / g, k = (Math.cos(f) * d.scaleY * g | 0) / g, l = this.t.style,
                    m = this.t.currentStyle;
                if (m) {
                    c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                    var n, o, q = this.t.offsetWidth, r = this.t.offsetHeight, s = "absolute" !== m.position,
                        t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
                        u = d.x + q * d.xPercent / 100, v = d.y + r * d.yPercent / 100;
                    if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, u += n - (n * h + o * i), v += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(H, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || x.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
                        var y, z, A, B = 8 > p ? 1 : -1;
                        for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v), wa = 0; 4 > wa; wa++) z = fa[wa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0, A = c !== d[z] ? 2 > wa ? -d.ieOffsetX : -d.ieOffsetY : 2 > wa ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === wa || 2 === wa ? 1 : B))) + "px"
                    }
                }
            }, Ta = S.set3DTransformRatio = S.setTransformRatio = function (a) {
                var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data, A = this.t.style,
                    B = z.rotation, C = z.rotationX, D = z.rotationY, E = z.scaleX, F = z.scaleY, G = z.scaleZ, H = z.x,
                    I = z.y, J = z.z, L = z.svg, M = z.perspective, N = z.force3D, O = z.skewY, P = z.skewX;
                if (O && (P += O, B += O), ((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !J && !M && !D && !C && 1 === G || Aa && L || !Fa) return void(B || P || L ? (B *= K, x = P * K, y = 1e5, c = Math.cos(B) * E, f = Math.sin(B) * E, d = Math.sin(B - x) * -F, g = Math.cos(B - x) * F, x && "simple" === z.skewType && (b = Math.tan(x - O * K), b = Math.sqrt(1 + b * b), d *= b, g *= b, O && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b)), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset, Aa && (z.xPercent || z.yPercent) && (q = this.t.getBBox(), H += .01 * z.xPercent * q.width, I += .01 * z.yPercent * q.height), q = 1e-6, q > H && H > -q && (H = 0), q > I && I > -q && (I = 0)), u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")", L && Aa ? this.t.setAttribute("transform", "matrix(" + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")");
                if (n && (q = 1e-4, q > E && E > -q && (E = G = 2e-5), q > F && F > -q && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P) B *= K, r = c = Math.cos(B), s = f = Math.sin(B), P && (B -= P * K, r = Math.cos(B), s = Math.sin(B), "simple" === z.skewType && (b = Math.tan((P - O) * K), b = Math.sqrt(1 + b * b), r *= b, s *= b, z.skewY && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b))), d = -s, g = r; else {
                    if (!(D || C || 1 !== G || M || L)) return void(A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                    c = g = 1, d = f = 0
                }
                k = 1, e = h = i = j = l = m = 0, o = M ? -1 / M : 0, p = z.zOrigin, q = 1e-6, v = ",", w = "0", B = D * K, B && (r = Math.cos(B), s = Math.sin(B), i = -s, l = o * -s, e = c * s, h = f * s, k = r, o *= r, c *= r, f *= r), B = C * K, B && (r = Math.cos(B), s = Math.sin(B), b = d * r + e * s, t = g * r + h * s, j = k * s, m = o * s, e = d * -s + e * r, h = g * -s + h * r, k *= r, o *= r, d = b, g = t), 1 !== G && (e *= G, h *= G, k *= G, o *= G), 1 !== F && (d *= F, g *= F, j *= F, m *= F), 1 !== E && (c *= E, f *= E, i *= E, l *= E), (p || L) && (p && (H += e * -p, I += h * -p, J += k * -p + p), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset), q > H && H > -q && (H = w), q > I && I > -q && (I = w), q > J && J > -q && (J = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i), u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g), C || D || 1 !== G ? (u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e), u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v) : u += ",0,0,0,0,1,0,", u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")", A[Ca] = u
            };
        j = Ga.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function (a, b, c, d, f, h, i) {
                if (d._lastParsedTransform === i) return f;
                d._lastParsedTransform = i;
                var j, k = i.scale && "function" == typeof i.scale ? i.scale : 0;
                "function" == typeof i[c] && (j = i[c], i[c] = b), k && (i.scale = k(r, a));
                var l, m, n, o, p, s, t, u, v, w = a._gsTransform, x = a.style, y = 1e-6, z = Ba.length, A = i, B = {},
                    C = "transformOrigin", D = Ra(a, e, !0, A.parseTransform),
                    E = A.transform && ("function" == typeof A.transform ? A.transform(r, q) : A.transform);
                if (d._transform = D, E && "string" == typeof E && Ca) m = Q.style, m[Ca] = E, m.display = "block", m.position = "absolute", O.body.appendChild(Q), l = Ra(Q, null, !1), D.svg && (s = D.xOrigin, t = D.yOrigin, l.x -= D.xOffset, l.y -= D.yOffset, (A.transformOrigin || A.svgOrigin) && (E = {}, La(a, ha(A.transformOrigin), E, A.svgOrigin, A.smoothOrigin, !0), s = E.xOrigin, t = E.yOrigin, l.x -= E.xOffset - D.xOffset, l.y -= E.yOffset - D.yOffset), (s || t) && (u = Qa(Q, !0), l.x -= s - (s * u[0] + t * u[2]), l.y -= t - (s * u[1] + t * u[3]))), O.body.removeChild(Q), l.perspective || (l.perspective = D.perspective), null != A.xPercent && (l.xPercent = ja(A.xPercent, D.xPercent)), null != A.yPercent && (l.yPercent = ja(A.yPercent, D.yPercent)); else if ("object" == typeof A) {
                    if (l = {
                        scaleX: ja(null != A.scaleX ? A.scaleX : A.scale, D.scaleX),
                        scaleY: ja(null != A.scaleY ? A.scaleY : A.scale, D.scaleY),
                        scaleZ: ja(A.scaleZ, D.scaleZ),
                        x: ja(A.x, D.x),
                        y: ja(A.y, D.y),
                        z: ja(A.z, D.z),
                        xPercent: ja(A.xPercent, D.xPercent),
                        yPercent: ja(A.yPercent, D.yPercent),
                        perspective: ja(A.transformPerspective, D.perspective)
                    }, p = A.directionalRotation, null != p) if ("object" == typeof p) for (m in p) A[m] = p[m]; else A.rotation = p;
                    "string" == typeof A.x && -1 !== A.x.indexOf("%") && (l.x = 0, l.xPercent = ja(A.x, D.xPercent)), "string" == typeof A.y && -1 !== A.y.indexOf("%") && (l.y = 0, l.yPercent = ja(A.y, D.yPercent)), l.rotation = ka("rotation" in A ? A.rotation : "shortRotation" in A ? A.shortRotation + "_short" : "rotationZ" in A ? A.rotationZ : D.rotation, D.rotation, "rotation", B), Fa && (l.rotationX = ka("rotationX" in A ? A.rotationX : "shortRotationX" in A ? A.shortRotationX + "_short" : D.rotationX || 0, D.rotationX, "rotationX", B), l.rotationY = ka("rotationY" in A ? A.rotationY : "shortRotationY" in A ? A.shortRotationY + "_short" : D.rotationY || 0, D.rotationY, "rotationY", B)), l.skewX = ka(A.skewX, D.skewX), l.skewY = ka(A.skewY, D.skewY)
                }
                for (Fa && null != A.force3D && (D.force3D = A.force3D, o = !0), D.skewType = A.skewType || D.skewType || g.defaultSkewType, n = D.force3D || D.z || D.rotationX || D.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, n || null == A.scale || (l.scaleZ = 1); --z > -1;) v = Ba[z], E = l[v] - D[v], (E > y || -y > E || null != A[v] || null != M[v]) && (o = !0, f = new ta(D, v, D[v], E, f), v in B && (f.e = B[v]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
                return E = A.transformOrigin, D.svg && (E || A.svgOrigin) && (s = D.xOffset, t = D.yOffset, La(a, ha(E), l, A.svgOrigin, A.smoothOrigin), f = ua(D, "xOrigin", (w ? D : l).xOrigin, l.xOrigin, f, C), f = ua(D, "yOrigin", (w ? D : l).yOrigin, l.yOrigin, f, C), (s !== D.xOffset || t !== D.yOffset) && (f = ua(D, "xOffset", w ? s : D.xOffset, D.xOffset, f, C), f = ua(D, "yOffset", w ? t : D.yOffset, D.yOffset, f, C)), E = "0px 0px"), (E || Fa && n && D.zOrigin) && (Ca ? (o = !0, v = Ea, E = (E || _(a, v, e, !1, "50% 50%")) + "", f = new ta(x, v, 0, 0, f, -1, C), f.b = x[v], f.plugin = h, Fa ? (m = D.zOrigin, E = E.split(" "), D.zOrigin = (E.length > 2 && (0 === m || "0px" !== E[2]) ? parseFloat(E[2]) : m) || 0, f.xs0 = f.e = E[0] + " " + (E[1] || "50%") + " 0px", f = new ta(D, "zOrigin", 0, 0, f, -1, f.n), f.b = m, f.xs0 = f.e = D.zOrigin) : f.xs0 = f.e = E) : ha(E + "", D)), o && (d._transformType = D.svg && Aa || !n && 3 !== this._transformType ? 2 : 3), j && (i[c] = j), k && (i.scale = k), f
            }, prefix: !0
        }), ya("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), ya("borderRadius", {
            defaultValue: "0px", parser: function (a, b, c, f, g, h) {
                b = this.format(b);
                var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x,
                    y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    z = a.style;
                for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) this.p.indexOf("border") && (y[j] = Z(y[j])), m = l = _(a, y[j], e, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = aa(a, "borderLeft", o, t), w = aa(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = aa(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
                return g
            }, prefix: !0, formatter: qa("0px 0px 0px 0px", !1, !0)
        }), ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function (a, b, c, d, f, g) {
                return va(a.style, c, this.format(_(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f)
            },
            prefix: !0,
            formatter: qa("0px 0px", !1, !0)
        }), ya("backgroundPosition", {
            defaultValue: "0 0", parser: function (a, b, c, d, f, g) {
                var h, i, j, k, l, m, n = "background-position", o = e || $(a, null),
                    q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                    r = this.format(b);
                if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = _(a, "backgroundImage").replace(D, ""), m && "none" !== m)) {
                    for (h = q.split(" "), i = r.split(" "), R.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - R.width : a.offsetHeight - R.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
                    q = h.join(" ")
                }
                return this.parseComplex(a.style, q, r, f, g)
            }, formatter: ha
        }), ya("backgroundSize", {
            defaultValue: "0 0", formatter: function (a) {
                return a += "", ha(-1 === a.indexOf(" ") ? a + " " + a : a)
            }
        }), ya("perspective", {defaultValue: "0px", prefix: !0}), ya("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), ya("transformStyle", {prefix: !0}), ya("backfaceVisibility", {prefix: !0}), ya("userSelect", {prefix: !0}), ya("margin", {parser: ra("marginTop,marginRight,marginBottom,marginLeft")}), ya("padding", {parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft")}), ya("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (a, b, c, d, f, g) {
                var h, i, j;
                return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(_(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
            }
        }), ya("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), ya("autoRound,strictUnits", {
            parser: function (a, b, c, d, e) {
                return e
            }
        }), ya("border", {
            defaultValue: "0px solid #000", parser: function (a, b, c, d, f, g) {
                var h = _(a, "borderTopWidth", e, !1, "0px"), i = this.format(b).split(" "), j = i[0].replace(w, "");
                return "px" !== j && (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + _(a, "borderTopStyle", e, !1, "solid") + " " + _(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g)
            }, color: !0, formatter: function (a) {
                var b = a.split(" ");
                return b[0] + " " + (b[1] || "solid") + " " + (a.match(pa) || ["#000"])[0]
            }
        }), ya("borderWidth", {parser: ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}), ya("float,cssFloat,styleFloat", {
            parser: function (a, b, c, d, e, f) {
                var g = a.style, h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                return new ta(g, h, 0, 0, e, -1, c, !1, 0, g[h], b)
            }
        });
        var Ua = function (a) {
            var b, c = this.t, d = c.filter || _(this.data, "filter") || "", e = this.s + this.c * a | 0;
            100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !_(this.data, "filter")) : (c.filter = d.replace(z, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(x, "opacity=" + e))
        };
        ya("opacity,alpha,autoAlpha", {
            defaultValue: "1", parser: function (a, b, c, d, f, g) {
                var h = parseFloat(_(a, "opacity", e, !1, "1")), i = a.style, j = "autoAlpha" === c;
                return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === _(a, "visibility", e) && 0 !== b && (h = 0), U ? f = new ta(i, "opacity", h, b - h, f) : (f = new ta(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Ua), j && (f = new ta(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f
            }
        });
        var Va = function (a, b) {
            b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(B, "-$1").toLowerCase())) : a.removeAttribute(b))
        }, Wa = function (a) {
            if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                this.t.setAttribute("class", 0 === a ? this.b : this.e);
                for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Va(c, b.p), b = b._next;
                1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        ya("className", {
            parser: function (a, b, d, f, g, h, i) {
                var j, k, l, m, n, o = a.getAttribute("class") || "", p = a.style.cssText;
                if (g = f._classNamePT = new ta(a, d, 0, 0, g, 2), g.setRatio = Wa, g.pr = -11, c = !0, g.b = o, k = ca(a, e), l = a._gsClassPT) {
                    for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
                    l.setRatio(1)
                }
                return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = da(a, k, ca(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)
            }
        });
        var Xa = function (a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var b, c, d, e, f, g = this.t.style, h = i.transform.parse;
                if ("all" === this.e) g.cssText = "", e = !0; else for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ea : i[c].p), Va(g, c);
                e && (Va(g, Ca), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
            }
        };
        for (ya("clearProps", {
            parser: function (a, b, d, e, f) {
                return f = new ta(a, d, 0, 0, f, 2), f.setRatio = Xa, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
            }
        }), j = "bezier,throwProps,physicsProps,physics2D".split(","), wa = j.length; wa--;) za(j[wa]);
        j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function (a, b, h, j) {
            if (!a.nodeType) return !1;
            this._target = q = a, this._tween = h, this._vars = b, r = j, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = $(a, ""), f = this._overwriteProps;
            var n, p, s, t, u, v, w, x, z, A = a.style;
            if (l && "" === A.zIndex && (n = _(a, "zIndex", e), ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)), "string" == typeof b && (t = A.cssText, n = ca(a, e), A.cssText = t + ";" + b, n = da(a, n, ca(a)).difs, !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)), b = n, A.cssText = t), b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null), this._transformType) {
                for (z = 3 === this._transformType, Ca ? m && (l = !0, "" === A.zIndex && (w = _(a, "zIndex", e), ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)), o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (z ? "visible" : "hidden"))) : A.zoom = 1, s = p; s && s._next;) s = s._next;
                x = new ta(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, s), x.setRatio = Ca ? Ta : Sa, x.data = this._transform || Ra(a, e, !0), x.tween = h, x.pr = -1, f.pop()
            }
            if (c) {
                for (; p;) {
                    for (v = p._next, s = t; s && s.pr > p.pr;) s = s._next;
                    (p._prev = s ? s._prev : u) ? p._prev._next = p : t = p, (p._next = s) ? s._prev = p : u = p, p = v
                }
                this._firstPT = t
            }
            return !0
        }, j.parse = function (a, b, c, f) {
            var g, h, j, l, m, n, o, p, s, t, u = a.style;
            for (g in b) n = b[g], "function" == typeof n && (n = n(r, q)), h = i[g], h ? c = h.parse(a, n, g, this, c, f, b) : (m = _(a, g, e) + "", s = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && A.test(n) ? (s || (n = na(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = va(u, g, m, n, !0, "transparent", c, 0, f)) : s && J.test(n) ? c = va(u, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ga(a, g, e), o = "px") : "left" === g || "top" === g ? (j = ba(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), t = s && "=" === n.charAt(1), t ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(w, "")) : (l = parseFloat(n), p = s ? n.replace(w, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (t ? l + j : l) + p : b[g], o !== p && "" !== p && (l || 0 === l) && j && (j = aa(a, g, j, o), "%" === p ? (j /= aa(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= aa(a, g, 1, p) : "px" !== p && (l = aa(a, g, l, p), p = "px"), t && (l || 0 === l) && (n = l + j + p)), t && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new ta(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : W("invalid " + g + " tween value: " + b[g]) : (c = new ta(u, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p))), f && c && !c.plugin && (c.plugin = f);
            return c
        }, j.setRatio = function (a) {
            var b, c, d, e = this._firstPT, f = 1e-6;
            if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; e;) {
                if (b = e.c * a + e.s, e.r ? b = Math.round(b) : f > b && b > -f && (b = 0), e.type) if (1 === e.type) if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2; else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3; else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4; else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5; else {
                    for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                    e.t[e.p] = c
                } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a); else e.t[e.p] = b + e.xs0;
                e = e._next
            } else for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next; else for (; e;) {
                if (2 !== e.type) if (e.r && -1 !== e.type) if (b = Math.round(e.s + e.c), e.type) {
                    if (1 === e.type) {
                        for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                        e.t[e.p] = c
                    }
                } else e.t[e.p] = b + e.xs0; else e.t[e.p] = e.e; else e.setRatio(a);
                e = e._next
            }
        }, j._enableTransforms = function (a) {
            this._transform = this._transform || Ra(this._target, e, !0), this._transformType = this._transform.svg && Aa || !a && 3 !== this._transformType ? 2 : 3
        };
        var Ya = function (a) {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        j._addLazySet = function (a, b, c) {
            var d = this._firstPT = new ta(a, b, 0, 0, this._firstPT, 2);
            d.e = c, d.setRatio = Ya, d.data = this
        }, j._linkCSSP = function (a, b, c, d) {
            return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a
        }, j._mod = function (a) {
            for (var b = this._firstPT; b;) "function" == typeof a[b.p] && a[b.p] === Math.round && (b.r = 1), b = b._next
        }, j._kill = function (b) {
            var c, d, e, f = b;
            if (b.autoAlpha || b.alpha) {
                f = {};
                for (d in b) f[d] = b[d];
                f.opacity = 1, f.autoAlpha && (f.visibility = 1)
            }
            for (b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), c = this._firstPT; c;) c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), d = c.plugin), c = c._next;
            return a.prototype._kill.call(this, f)
        };
        var Za = function (a, b, c) {
            var d, e, f, g;
            if (a.slice) for (e = a.length; --e > -1;) Za(a[e], b, c); else for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push(ca(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Za(f, b, c)
        };
        return g.cascadeTo = function (a, c, d) {
            var e, f, g, h, i = b.to(a, c, d), j = [i], k = [], l = [], m = [], n = b._internals.reservedProps;
            for (a = i._targets || i.target, Za(a, k, m), i.render(c, !0, !0), Za(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;) if (f = da(m[e], k[e], l[e]), f.firstMPT) {
                f = f.difs;
                for (g in d) n[g] && (f[g] = d[g]);
                h = {};
                for (g in f) h[g] = k[e][g];
                j.push(b.fromTo(m[e], c, h, f))
            }
            return j
        }, a.activate([g]), g
    }, !0), function () {
        var a = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.6.0",
            priority: -1,
            API: 2,
            init: function (a, b, c) {
                return this._tween = c, !0
            }
        }), b = function (a) {
            for (; a;) a.f || a.blob || (a.m = Math.round), a = a._next
        }, c = a.prototype;
        c._onInitAllProps = function () {
            for (var a, c, d, e = this._tween, f = e.vars.roundProps.join ? e.vars.roundProps : e.vars.roundProps.split(","), g = f.length, h = {}, i = e._propLookup.roundProps; --g > -1;) h[f[g]] = Math.round;
            for (g = f.length; --g > -1;) for (a = f[g], c = e._firstPT; c;) d = c._next, c.pg ? c.t._mod(h) : c.n === a && (2 === c.f && c.t ? b(c.t._firstPT) : (this._add(c.t, a, c.s, c.c), d && (d._prev = c._prev), c._prev ? c._prev._next = d : e._firstPT === c && (e._firstPT = d), c._next = c._prev = null, e._propLookup[a] = i)), c = d;
            return !1
        }, c._add = function (a, b, c, d) {
            this._addTween(a, b, c, c + d, b, Math.round), this._overwriteProps.push(b)
        }
    }(), function () {
        _gsScope._gsDefine.plugin({
            propName: "attr", API: 2, version: "0.6.0", init: function (a, b, c, d) {
                var e, f;
                if ("function" != typeof a.setAttribute) return !1;
                for (e in b) f = b[e], "function" == typeof f && (f = f(d, a)), this._addTween(a, "setAttribute", a.getAttribute(e) + "", f + "", e, !1, e), this._overwriteProps.push(e);
                return !0
            }
        })
    }(), _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.0",
        API: 2,
        init: function (a, b, c, d) {
            "object" != typeof b && (b = {rotation: b}), this.finals = {};
            var e, f, g, h, i, j, k = b.useRadians === !0 ? 2 * Math.PI : 360, l = 1e-6;
            for (e in b) "useRadians" !== e && (h = b[e], "function" == typeof h && (h = h(d, a)), j = (h + "").split("_"), f = j[0], g = parseFloat("function" != typeof a[e] ? a[e] : a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]()), h = this.finals[e] = "string" == typeof f && "=" === f.charAt(1) ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0, i = h - g, j.length && (f = j.join("_"), -1 !== f.indexOf("short") && (i %= k, i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)), -1 !== f.indexOf("_cw") && 0 > i ? i = (i + 9999999999 * k) % k - (i / k | 0) * k : -1 !== f.indexOf("ccw") && i > 0 && (i = (i - 9999999999 * k) % k - (i / k | 0) * k)), (i > l || -l > i) && (this._addTween(a, e, g, g + i, e), this._overwriteProps.push(e)));
            return !0
        },
        set: function (a) {
            var b;
            if (1 !== a) this._super.setRatio.call(this, a); else for (b = this._firstPT; b;) b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next
        }
    })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (a) {
        var b, c, d, e = _gsScope.GreenSockGlobals || _gsScope, f = e.com.greensock, g = 2 * Math.PI, h = Math.PI / 2,
            i = f._class, j = function (b, c) {
                var d = i("easing." + b, function () {
                }, !0), e = d.prototype = new a;
                return e.constructor = d, e.getRatio = c, d
            }, k = a.register || function () {
            }, l = function (a, b, c, d, e) {
                var f = i("easing." + a, {easeOut: new b, easeIn: new c, easeInOut: new d}, !0);
                return k(f, a), f
            }, m = function (a, b, c) {
                this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
            }, n = function (b, c) {
                var d = i("easing." + b, function (a) {
                    this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1
                }, !0), e = d.prototype = new a;
                return e.constructor = d, e.getRatio = c, e.config = function (a) {
                    return new d(a)
                }, d
            }, o = l("Back", n("BackOut", function (a) {
                return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
            }), n("BackIn", function (a) {
                return a * a * ((this._p1 + 1) * a - this._p1)
            }), n("BackInOut", function (a) {
                return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
            })), p = i("easing.SlowMo", function (a, b, c) {
                b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0
            }, !0), q = p.prototype = new a;
        return q.constructor = p, q.getRatio = function (a) {
            var b = a + (.5 - a) * this._p;
            return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
        }, p.ease = new p(.7, .7), q.config = p.config = function (a, b, c) {
            return new p(a, b, c)
        }, b = i("easing.SteppedEase", function (a) {
            a = a || 1, this._p1 = 1 / a, this._p2 = a + 1
        }, !0), q = b.prototype = new a, q.constructor = b, q.getRatio = function (a) {
            return 0 > a ? a = 0 : a >= 1 && (a = .999999999), (this._p2 * a >> 0) * this._p1
        }, q.config = b.config = function (a) {
            return new b(a)
        }, c = i("easing.RoughEase", function (b) {
            b = b || {};
            for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), n = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --n > -1;) c = o ? Math.random() : 1 / l * n, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = f * f * .5 * r) : (f = 2 * (1 - c), e = f * f * .5 * r), o ? d += Math.random() * e - .5 * e : n % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
                x: c,
                y: d
            };
            for (j.sort(function (a, b) {
                return a.x - b.x
            }), h = new m(1, 1, null), n = l; --n > -1;) g = j[n], h = new m(g.x, g.y, h);
            this._prev = new m(0, 0, 0 !== h.t ? h : h.next)
        }, !0), q = c.prototype = new a, q.constructor = c, q.getRatio = function (a) {
            var b = this._prev;
            if (a > b.t) {
                for (; b.next && a >= b.t;) b = b.next;
                b = b.prev
            } else for (; b.prev && a <= b.t;) b = b.prev;
            return this._prev = b, b.v + (a - b.t) / b.gap * b.c
        }, q.config = function (a) {
            return new c(a)
        }, c.ease = new c, l("Bounce", j("BounceOut", function (a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        }), j("BounceIn", function (a) {
            return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
        }), j("BounceInOut", function (a) {
            var b = .5 > a;
            return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
        })), l("Circ", j("CircOut", function (a) {
            return Math.sqrt(1 - (a -= 1) * a)
        }), j("CircIn", function (a) {
            return -(Math.sqrt(1 - a * a) - 1)
        }), j("CircInOut", function (a) {
            return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        })), d = function (b, c, d) {
            var e = i("easing." + b, function (a, b) {
                this._p1 = a >= 1 ? a : 1, this._p2 = (b || d) / (1 > a ? a : 1), this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0), this._p2 = g / this._p2
            }, !0), f = e.prototype = new a;
            return f.constructor = e, f.getRatio = c, f.config = function (a, b) {
                return new e(a, b)
            }, e
        }, l("Elastic", d("ElasticOut", function (a) {
            return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1
        }, .3), d("ElasticIn", function (a) {
            return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2))
        }, .3), d("ElasticInOut", function (a) {
            return (a *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1
        }, .45)), l("Expo", j("ExpoOut", function (a) {
            return 1 - Math.pow(2, -10 * a)
        }), j("ExpoIn", function (a) {
            return Math.pow(2, 10 * (a - 1)) - .001
        }), j("ExpoInOut", function (a) {
            return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
        })), l("Sine", j("SineOut", function (a) {
            return Math.sin(a * h)
        }), j("SineIn", function (a) {
            return -Math.cos(a * h) + 1
        }), j("SineInOut", function (a) {
            return -.5 * (Math.cos(Math.PI * a) - 1)
        })), i("easing.EaseLookup", {
            find: function (b) {
                return a.map[b]
            }
        }, !0), k(e.SlowMo, "SlowMo", "ease,"), k(c, "RoughEase", "ease,"), k(b, "SteppedEase", "ease,"), o
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (a, b) {
    "use strict";
    var c = {}, d = a.document, e = a.GreenSockGlobals = a.GreenSockGlobals || a;
    if (!e.TweenLite) {
        var f, g, h, i, j, k = function (a) {
            var b, c = a.split("."), d = e;
            for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
            return d
        }, l = k("com.greensock"), m = 1e-10, n = function (a) {
            var b, c = [], d = a.length;
            for (b = 0; b !== d; c.push(a[b++])) ;
            return c
        }, o = function () {
        }, p = function () {
            var a = Object.prototype.toString, b = a.call([]);
            return function (c) {
                return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
            }
        }(), q = {}, r = function (d, f, g, h) {
            this.sc = q[d] ? q[d].sc : [], q[d] = this, this.gsClass = null, this.func = g;
            var i = [];
            this.check = function (j) {
                for (var l, m, n, o, p, s = f.length, t = s; --s > -1;) (l = q[f[s]] || new r(f[s], [])).gsClass ? (i[s] = l.gsClass, t--) : j && l.sc.push(this);
                if (0 === t && g) {
                    if (m = ("com.greensock." + d).split("."), n = m.pop(), o = k(m.join("."))[n] = this.gsClass = g.apply(g, i), h) if (e[n] = c[n] = o, p = "undefined" != typeof module && module.exports, !p && "function" == typeof define && define.amd) define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function () {
                        return o
                    }); else if (p) if (d === b) {
                        module.exports = c[b] = o;
                        for (s in c) o[s] = c[s]
                    } else c[b] && (c[b][n] = o);
                    for (s = 0; s < this.sc.length; s++) this.sc[s].check()
                }
            }, this.check(!0)
        }, s = a._gsDefine = function (a, b, c, d) {
            return new r(a, b, c, d)
        }, t = l._class = function (a, b, c) {
            return b = b || function () {
            }, s(a, [], function () {
                return b
            }, c), b
        };
        s.globals = e;
        var u = [0, 0, 1, 1], v = t("easing.Ease", function (a, b, c, d) {
            this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? u.concat(b) : u
        }, !0), w = v.map = {}, x = v.register = function (a, b, c, d) {
            for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;) for (f = i[j], e = d ? t("easing." + f, null, !0) : l.easing[f] || {}, g = k.length; --g > -1;) h = k[g], w[f + "." + h] = w[h + f] = e[h] = a.getRatio ? a : a[h] || new a
        };
        for (h = v.prototype, h._calcEnd = !1, h.getRatio = function (a) {
            if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
            var b = this._type, c = this._power, d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
            return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
        }, f = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], g = f.length; --g > -1;) h = f[g] + ",Power" + g, x(new v(null, null, 1, g), h, "easeOut", !0), x(new v(null, null, 2, g), h, "easeIn" + (0 === g ? ",easeNone" : "")), x(new v(null, null, 3, g), h, "easeInOut");
        w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
        var y = t("events.EventDispatcher", function (a) {
            this._listeners = {}, this._eventTarget = a || this
        });
        h = y.prototype, h.addEventListener = function (a, b, c, d, e) {
            e = e || 0;
            var f, g, h = this._listeners[a], k = 0;
            for (this !== i || j || i.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1;) f = h[g], f.c === b && f.s === c ? h.splice(g, 1) : 0 === k && f.pr < e && (k = g + 1);
            h.splice(k, 0, {c: b, s: c, up: d, pr: e})
        }, h.removeEventListener = function (a, b) {
            var c, d = this._listeners[a];
            if (d) for (c = d.length; --c > -1;) if (d[c].c === b) return void d.splice(c, 1)
        }, h.dispatchEvent = function (a) {
            var b, c, d, e = this._listeners[a];
            if (e) for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;) d = e[b], d && (d.up ? d.c.call(d.s || c, {
                type: a,
                target: c
            }) : d.c.call(d.s || c))
        };
        var z = a.requestAnimationFrame, A = a.cancelAnimationFrame, B = Date.now || function () {
            return (new Date).getTime()
        }, C = B();
        for (f = ["ms", "moz", "webkit", "o"], g = f.length; --g > -1 && !z;) z = a[f[g] + "RequestAnimationFrame"], A = a[f[g] + "CancelAnimationFrame"] || a[f[g] + "CancelRequestAnimationFrame"];
        t("Ticker", function (a, b) {
            var c, e, f, g, h, k = this, l = B(), n = b !== !1 && z ? "auto" : !1, p = 500, q = 33, r = "tick",
                s = function (a) {
                    var b, d, i = B() - C;
                    i > p && (l += i - q), C += i, k.time = (C - l) / 1e3, b = k.time - h, (!c || b > 0 || a === !0) && (k.frame++, h += b + (b >= g ? .004 : g - b), d = !0), a !== !0 && (f = e(s)), d && k.dispatchEvent(r)
                };
            y.call(k), k.time = k.frame = 0, k.tick = function () {
                s(!0)
            }, k.lagSmoothing = function (a, b) {
                p = a || 1 / m, q = Math.min(b, p, 0)
            }, k.sleep = function () {
                null != f && (n && A ? A(f) : clearTimeout(f), e = o, f = null, k === i && (j = !1))
            }, k.wake = function (a) {
                null !== f ? k.sleep() : a ? l += -C + (C = B()) : k.frame > 10 && (C = B() - p + 5), e = 0 === c ? o : n && z ? z : function (a) {
                    return setTimeout(a, 1e3 * (h - k.time) + 1 | 0)
                }, k === i && (j = !0), s(2)
            }, k.fps = function (a) {
                return arguments.length ? (c = a, g = 1 / (c || 60), h = this.time + g, void k.wake()) : c
            }, k.useRAF = function (a) {
                return arguments.length ? (k.sleep(), n = a, void k.fps(c)) : n
            }, k.fps(a), setTimeout(function () {
                "auto" === n && k.frame < 5 && "hidden" !== d.visibilityState && k.useRAF(!1)
            }, 1500)
        }), h = l.Ticker.prototype = new l.events.EventDispatcher, h.constructor = l.Ticker;
        var D = t("core.Animation", function (a, b) {
            if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, W) {
                j || i.wake();
                var c = this.vars.useFrames ? V : W;
                c.add(this, c._time), this.vars.paused && this.paused(!0)
            }
        });
        i = D.ticker = new l.Ticker, h = D.prototype, h._dirty = h._gc = h._initted = h._paused = !1, h._totalTime = h._time = 0, h._rawPrevTime = -1, h._next = h._last = h._onUpdate = h._timeline = h.timeline = null, h._paused = !1;
        var E = function () {
            j && B() - C > 2e3 && i.wake(), setTimeout(E, 2e3)
        };
        E(), h.play = function (a, b) {
            return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
        }, h.pause = function (a, b) {
            return null != a && this.seek(a, b), this.paused(!0)
        }, h.resume = function (a, b) {
            return null != a && this.seek(a, b), this.paused(!1)
        }, h.seek = function (a, b) {
            return this.totalTime(Number(a), b !== !1)
        }, h.restart = function (a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
        }, h.reverse = function (a, b) {
            return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
        }, h.render = function (a, b, c) {
        }, h.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, h.isActive = function () {
            var a, b = this._timeline, c = this._startTime;
            return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale
        }, h._enabled = function (a, b) {
            return j || i.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
        }, h._kill = function (a, b) {
            return this._enabled(!1, !1)
        }, h.kill = function (a, b) {
            return this._kill(a, b), this
        }, h._uncache = function (a) {
            for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
            return this
        }, h._swapSelfInParams = function (a) {
            for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
            return c
        }, h._callback = function (a) {
            var b = this.vars, c = b[a], d = b[a + "Params"], e = b[a + "Scope"] || b.callbackScope || this,
                f = d ? d.length : 0;
            switch (f) {
                case 0:
                    c.call(e);
                    break;
                case 1:
                    c.call(e, d[0]);
                    break;
                case 2:
                    c.call(e, d[0], d[1]);
                    break;
                default:
                    c.apply(e, d)
            }
        }, h.eventCallback = function (a, b, c, d) {
            if ("on" === (a || "").substr(0, 2)) {
                var e = this.vars;
                if (1 === arguments.length) return e[a];
                null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = p(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
            }
            return this
        }, h.delay = function (a) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
        }, h.duration = function (a) {
            return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, h.totalDuration = function (a) {
            return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
        }, h.time = function (a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
        }, h.totalTime = function (a, b, c) {
            if (j || i.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var d = this._totalDuration, e = this._timeline;
                    if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline) for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (J.length && Y(), this.render(a, b, !1), J.length && Y())
            }
            return this
        }, h.progress = h.totalProgress = function (a, b) {
            var c = this.duration();
            return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio
        }, h.startTime = function (a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
        }, h.endTime = function (a) {
            return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
        }, h.timeScale = function (a) {
            if (!arguments.length) return this._timeScale;
            if (a = a || m, this._timeline && this._timeline.smoothChildTiming) {
                var b = this._pauseTime, c = b || 0 === b ? b : this._timeline.totalTime();
                this._startTime = c - (c - this._startTime) * this._timeScale / a
            }
            return this._timeScale = a, this._uncache(!1)
        }, h.reversed = function (a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, h.paused = function (a) {
            if (!arguments.length) return this._paused;
            var b, c, d = this._timeline;
            return a != this._paused && d && (j || a || i.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
        };
        var F = t("core.SimpleTimeline", function (a) {
            D.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        h = F.prototype = new D, h.constructor = F, h.kill()._gc = !1, h._first = h._last = h._recent = null, h._sortChildren = !1, h.add = h.insert = function (a, b, c, d) {
            var e, f;
            if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren) for (f = a._startTime; e && e._startTime > f;) e = e._prev;
            return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this
        }, h._remove = function (a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, h.render = function (a, b, c) {
            var d, e = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
        }, h.rawTime = function () {
            return j || i.wake(), this._totalTime
        };
        var G = t("TweenLite", function (b, c, d) {
            if (D.call(this, c, d), this.render = G.prototype.render, null == b) throw"Cannot tween a null target.";
            this.target = b = "string" != typeof b ? b : G.selector(b) || b;
            var e, f, g,
                h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
                i = this.vars.overwrite;
            if (this._overwrite = i = null == i ? U[G.defaultOverwrite] : "number" == typeof i ? i >> 0 : U[i], (h || b instanceof Array || b.push && p(b)) && "number" != typeof b[0]) for (this._targets = g = n(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(n(f))) : (this._siblings[e] = Z(f, this, !1), 1 === i && this._siblings[e].length > 1 && _(f, this, null, 1, this._siblings[e])) : (f = g[e--] = G.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1); else this._propLookup = {}, this._siblings = Z(b, this, !1), 1 === i && this._siblings.length > 1 && _(b, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -m, this.render(Math.min(0, -this._delay)))
        }, !0), H = function (b) {
            return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
        }, I = function (a, b) {
            var c, d = {};
            for (c in a) T[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!Q[c] || Q[c] && Q[c]._autoCSS) || (d[c] = a[c], delete a[c]);
            a.css = d
        };
        h = G.prototype = new D, h.constructor = G, h.kill()._gc = !1, h.ratio = 0, h._firstPT = h._targets = h._overwrittenProps = h._startAt = null, h._notifyPluginsOfEnabled = h._lazy = !1, G.version = "1.19.1", G.defaultEase = h._ease = new v(null, null, 1, 1), G.defaultOverwrite = "auto", G.ticker = i, G.autoSleep = 120, G.lagSmoothing = function (a, b) {
            i.lagSmoothing(a, b)
        }, G.selector = a.$ || a.jQuery || function (b) {
            var c = a.$ || a.jQuery;
            return c ? (G.selector = c, c(b)) : "undefined" == typeof d ? b : d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
        };
        var J = [], K = {}, L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, M = function (a) {
                for (var b, c = this._firstPT, d = 1e-6; c;) b = c.blob ? 1 === a ? this.end : a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m(b, this._target || c.t) : d > b && b > -d && !c.blob && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next
            }, N = function (a, b, c, d) {
                var e, f, g, h, i, j, k, l = [], m = 0, n = "", o = 0;
                for (l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(L) || [], f = b.match(L) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++) k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
                    _next: l._firstPT,
                    t: l,
                    p: l.length - 1,
                    s: g,
                    c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
                    f: 0,
                    m: o && 4 > o ? Math.round : 0
                }), m += k.length;
                return n += b.substr(m), n && l.push(n), l.setRatio = M, l
            }, O = function (a, b, c, d, e, f, g, h, i) {
                "function" == typeof d && (d = d(i || 0, a));
                var j, k = typeof a[b],
                    l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
                    m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b], n = "string" == typeof d && "=" === d.charAt(1),
                    o = {
                        t: a,
                        p: b,
                        s: m,
                        f: "function" === k,
                        pg: 0,
                        n: e || b,
                        m: f ? "function" == typeof f ? f : Math.round : 0,
                        pr: 0,
                        c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0
                    };
                return ("number" != typeof m || "number" != typeof d && !n) && (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g, j = N(m, n ? o.s + o.c : d, h || G.defaultStringFilter, o), o = {
                    t: j,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: e || b,
                    pr: 0,
                    m: 0
                }) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0
            }, P = G._internals = {isArray: p, isSelector: H, lazyTweens: J, blobDif: N}, Q = G._plugins = {},
            R = P.tweenLookup = {}, S = 0, T = P.reservedProps = {
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
                id: 1
            }, U = {none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0},
            V = D._rootFramesTimeline = new F, W = D._rootTimeline = new F, X = 30, Y = P.lazyRender = function () {
                var a, b = J.length;
                for (K = {}; --b > -1;) a = J[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
                J.length = 0
            };
        W._startTime = i.time, V._startTime = i.frame, W._active = V._active = !0, setTimeout(Y, 1), D._updateRoot = G.render = function () {
            var a, b, c;
            if (J.length && Y(), W.render((i.time - W._startTime) * W._timeScale, !1, !1), V.render((i.frame - V._startTime) * V._timeScale, !1, !1), J.length && Y(), i.frame >= X) {
                X = i.frame + (parseInt(G.autoSleep, 10) || 120);
                for (c in R) {
                    for (b = R[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                    0 === b.length && delete R[c]
                }
                if (c = W._first, (!c || c._paused) && G.autoSleep && !V._first && 1 === i._listeners.tick.length) {
                    for (; c && c._paused;) c = c._next;
                    c || i.sleep()
                }
            }
        }, i.addEventListener("tick", D._updateRoot);
        var Z = function (a, b, c) {
            var d, e, f = a._gsTweenID;
            if (R[f || (a._gsTweenID = f = "t" + S++)] || (R[f] = {
                target: a,
                tweens: []
            }), b && (d = R[f].tweens, d[e = d.length] = b, c)) for (; --e > -1;) d[e] === b && d.splice(e, 1);
            return R[f].tweens
        }, $ = function (a, b, c, d) {
            var e, f, g = a.vars.onOverwrite;
            return g && (e = g(a, b, c, d)), g = G.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1
        }, _ = function (a, b, c, d, e) {
            var f, g, h, i;
            if (1 === d || d >= 4) {
                for (i = e.length, f = 0; i > f; f++) if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0); else if (5 === d) break;
                return g
            }
            var j, k = b._startTime + m, l = [], n = 0, o = 0 === b._duration;
            for (f = e.length; --f > -1;) (h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || aa(b, 0, o), 0 === aa(h, j, o) && (l[n++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2e-10 || (l[n++] = h)));
            for (f = n; --f > -1;) if (h = l[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
                if (2 !== d && !$(h, b)) continue;
                h._enabled(!1, !1) && (g = !0)
            }
            return g
        }, aa = function (a, b, c) {
            for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                d = d._timeline
            }
            return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * m > f - b ? m : (f += a.totalDuration() / a._timeScale / e) > b + m ? 0 : f - b - m
        };
        h._init = function () {
            var a, b, c, d, e, f, g = this.vars, h = this._overwrittenProps, i = this._duration,
                j = !!g.immediateRender, k = g.ease;
            if (g.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};
                for (d in g.startAt) e[d] = g.startAt[d];
                if (e.overwrite = !1, e.immediateRender = !0, e.lazy = j && g.lazy !== !1, e.startAt = e.delay = null, this._startAt = G.to(this.target, 0, e), j) if (this._time > 0) this._startAt = null; else if (0 !== i) return
            } else if (g.runBackwards && 0 !== i) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
                0 !== this._time && (j = !1), c = {};
                for (d in g) T[d] && "autoCSS" !== d || (c[d] = g[d]);
                if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && g.lazy !== !1, c.immediateRender = j, this._startAt = G.to(this.target, 0, c), j) {
                    if (0 === this._time) return
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
            }
            if (this._ease = k = k ? k instanceof v ? k : "function" == typeof k ? new v(k, g.easeParams) : w[k] || G.defaultEase : G.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (f = this._targets.length, a = 0; f > a; a++) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0); else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
            if (b && G._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards) for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
            this._onUpdate = g.onUpdate, this._initted = !0
        }, h._initProps = function (b, c, d, e, f) {
            var g, h, i, j, k, l;
            if (null == b) return !1;
            K[b._gsTweenID] && Y(), this.vars.css || b.style && b !== a && b.nodeType && Q.css && this.vars.autoCSS !== !1 && I(this.vars, b);
            for (g in this.vars) if (l = this.vars[g], T[g]) l && (l instanceof Array || l.push && p(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this)); else if (Q[g] && (j = new Q[g])._onInitTween(b, this.vars[g], this, f)) {
                for (this._firstPT = k = {
                    _next: this._firstPT,
                    t: j,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: g,
                    pg: 1,
                    pr: j._priority,
                    m: 0
                }, h = j._overwriteProps.length; --h > -1;) c[j._overwriteProps[h]] = this._firstPT;
                (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k)
            } else c[g] = O.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
            return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && _(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (K[b._gsTweenID] = !0), i)
        }, h.render = function (a, b, c) {
            var d, e, f, g, h = this._time, i = this._duration, j = this._rawPrevTime;
            if (a >= i - 1e-7 && a >= 0) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > j || 0 >= a && a >= -1e-7 || j === m && "isPause" !== this.data) && j !== a && (c = !0, j > m && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : m); else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== m || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : m)), this._initted || (c = !0); else if (this._totalTime = this._time = a, this._easeType) {
                var k = a / i, l = this._easeType, n = this._easePower;
                (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === n ? k *= k : 2 === n ? k *= k * k : 3 === n ? k *= k * k * k : 4 === n && (k *= k * k * k * k), 1 === l ? this.ratio = 1 - k : 2 === l ? this.ratio = k : .5 > a / i ? this.ratio = k / 2 : this.ratio = 1 - k / 2
            } else this.ratio = this._ease.getRatio(a / i);
            if (this._time !== h || c) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, J.push(this), void(this._lazy = [a, b]);
                    this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, b, c), b || (this._time !== h || d || c) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === m && g !== m && (this._rawPrevTime = 0))
            }
        }, h._kill = function (a, b, c) {
            if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            b = "string" != typeof b ? b || this._targets || this.target : G.selector(b) || b;
            var d, e, f, g, h, i, j, k, l,
                m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
            if ((p(b) || H(b)) && "number" != typeof b[0]) for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (i = !0); else {
                if (this._targets) {
                    for (d = this._targets.length; --d > -1;) if (b === this._targets[d]) {
                        h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                        break
                    }
                } else {
                    if (b !== this.target) return !1;
                    h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                }
                if (h) {
                    if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (G.onOverwrite || this.vars.onOverwrite)) {
                        for (f in j) h[f] && (l || (l = []), l.push(f));
                        if ((l || !a) && !$(this, c, b, l)) return !1
                    }
                    for (f in j) (g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return i
        }, h.invalidate = function () {
            return this._notifyPluginsOfEnabled && G._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], D.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -m, this.render(Math.min(0, -this._delay))), this
        }, h._enabled = function (a, b) {
            if (j || i.wake(), a && this._gc) {
                var c, d = this._targets;
                if (d) for (c = d.length; --c > -1;) this._siblings[c] = Z(d[c], this, !0); else this._siblings = Z(this.target, this, !0)
            }
            return D.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? G._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
        }, G.to = function (a, b, c) {
            return new G(a, b, c)
        }, G.from = function (a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new G(a, b, c)
        }, G.fromTo = function (a, b, c, d) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new G(a, b, d)
        }, G.delayedCall = function (a, b, c, d, e) {
            return new G(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                callbackScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                immediateRender: !1,
                lazy: !1,
                useFrames: e,
                overwrite: 0
            })
        }, G.set = function (a, b) {
            return new G(a, 0, b)
        }, G.getTweensOf = function (a, b) {
            if (null == a) return [];
            a = "string" != typeof a ? a : G.selector(a) || a;
            var c, d, e, f;
            if ((p(a) || H(a)) && "number" != typeof a[0]) {
                for (c = a.length, d = []; --c > -1;) d = d.concat(G.getTweensOf(a[c], b));
                for (c = d.length; --c > -1;) for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
            } else for (d = Z(a).concat(), c = d.length; --c > -1;) (d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
            return d
        }, G.killTweensOf = G.killDelayedCallsTo = function (a, b, c) {
            "object" == typeof b && (c = b, b = !1);
            for (var d = G.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
        };
        var ba = t("plugins.TweenPlugin", function (a, b) {
            this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = ba.prototype
        }, !0);
        if (h = ba.prototype, ba.version = "1.19.0", ba.API = 2, h._firstPT = null, h._addTween = O, h.setRatio = M, h._kill = function (a) {
            var b, c = this._overwriteProps, d = this._firstPT;
            if (null != a[this._propName]) this._overwriteProps = []; else for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
            for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
            return !1
        }, h._mod = h._roundProps = function (a) {
            for (var b, c = this._firstPT; c;) b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")], b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next
        }, G._onPluginEvent = function (a, b) {
            var c, d, e, f, g, h = b._firstPT;
            if ("_onInitAllProps" === a) {
                for (; h;) {
                    for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                    (h._prev = d ? d._prev : f) ? h._prev._next = h : e = h, (h._next = d) ? d._prev = h : f = h, h = g
                }
                h = b._firstPT = e
            }
            for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
            return c
        }, ba.activate = function (a) {
            for (var b = a.length; --b > -1;) a[b].API === ba.API && (Q[(new a[b])._propName] = a[b]);
            return !0
        }, s.plugin = function (a) {
            if (!(a && a.propName && a.init && a.API)) throw"illegal plugin definition.";
            var b, c = a.propName, d = a.priority || 0, e = a.overwriteProps, f = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_mod",
                mod: "_mod",
                initAll: "_onInitAllProps"
            }, g = t("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () {
                ba.call(this, c, d), this._overwriteProps = e || []
            }, a.global === !0), h = g.prototype = new ba(c);
            h.constructor = g, g.API = a.API;
            for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
            return g.version = a.version, ba.activate([g]), g
        }, f = a._gsQueue) {
            for (g = 0; g < f.length; g++) f[g]();
            for (h in q) q[h].func || a.console.log("GSAP encountered missing dependency: " + h)
        }
        j = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty,
        k = {}, l = a.document, m = "2.1.4", n = function (a, b) {
            return new n.fn.init(a, b)
        }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
            return d.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        }, pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return n.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(d.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: f, sort: c.sort, splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === n.type(a)
        }, isArray: Array.isArray, isWindow: function (a) {
            return null != a && a === a.window
        }, isNumeric: function (a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
        }, isPlainObject: function (a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        }, isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        }, globalEval: function (a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        }, camelCase: function (a) {
            return a.replace(p, "ms-").replace(q, r)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++) if (d = b.apply(a[e], c), d === !1) break
                } else for (e in a) if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break
            } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(o, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        }, inArray: function (a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h) for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        }, guid: 1, proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        }, now: Date.now, support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = "length" in a && a.length, c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0,
            x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) {
                return a === b && (l = !0), 0
            }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice,
            J = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P),
            W = new RegExp("^" + N + "$"), X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g,
            ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), da = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, ea = function () {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) ;
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode) return d;
                        if (h.id === j) return d.push(h), d
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                } else {
                    if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {
                    } finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = ga.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function (a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {
            }
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [w, n, m];
                                    break
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function (a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }), has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0
                    }
                }), contains: ia(function (a) {
                    return a = a.replace(ca, da), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: ia(function (a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === o
                }, focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return Z.test(a.nodeName)
                }, input: function (a) {
                    return Y.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: oa(function () {
                    return [0]
                }), last: oa(function (a, b) {
                    return [b - 1]
                }), eq: oa(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: oa(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }), odd: oa(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }), lt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }), gt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) d.pseudos[b] = ma(b);
        for (b in{submit: !0, reset: !0}) d.pseudos[b] = na(b);

        function qa() {
        }

        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function sa(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else while (b = b[d]) if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0
                }
            }
        }

        function ta(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c
        }

        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
                return a === b
            }, h, !0), l = sa(function (a) {
                return J(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++) if (c = d.relative[a[i].type]) m = [sa(ta(m), c)]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
                    return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                }
                m.push(c)
            }
            return ta(m)
        }

        function ya(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k),
                    v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++]) if (o(l, g, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++]) o(r, s, g, h);
                    if (f) {
                        if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));
                        s = va(s)
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                }
                return k && (w = v, j = t), r
            };
            return c ? ia(f) : f
        }

        return h = ga.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ja(function (a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return g.call(b, a) >= 0 !== c
        })
    }

    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function (a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
                for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        }, filter: function (a) {
            return this.pushStack(x(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(x(this, a || [], !0))
        }, is: function (a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function (a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
    n.extend({
        dir: function (a, b, c) {
            var d = [], e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
                if (e && n(a).is(c)) break;
                d.push(a)
            }
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function (a) {
            var b = n(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) ;
        return a
    }

    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return n.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return n.dir(a, "parentNode", c)
        }, next: function (a) {
            return D(a, "nextSibling")
        }, prev: function (a) {
            return D(a, "previousSibling")
        }, nextAll: function (a) {
            return n.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return n.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return n.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return n.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return n.sibling(a.firstChild)
        }, contents: function (a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};

    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    n.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
            for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break
            }
            d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
        }, k = {
            add: function () {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function (b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                        })
                    }(arguments), d ? f = h.length : b && (e = c, j(b))
                }
                return this
            }, remove: function () {
                return h && n.each(arguments, function (a, b) {
                    var c;
                    while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                }), this
            }, has: function (a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
            }, empty: function () {
                return h = [], f = 0, this
            }, disable: function () {
                return h = i = b = void 0, this
            }, disabled: function () {
                return !h
            }, lock: function () {
                return i = void 0, b || k.disable(), this
            }, locked: function () {
                return !i
            }, fireWith: function (a, b) {
                return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
            }, fire: function () {
                return k.fireWith(this, arguments), this
            }, fired: function () {
                return !!c
            }
        };
        return k
    }, n.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
                c = "pending", d = {
                    state: function () {
                        return c
                    }, always: function () {
                        return e.done(arguments).fail(arguments), this
                    }, then: function () {
                        var a = arguments;
                        return n.Deferred(function (c) {
                            n.each(b, function (b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    }, promise: function (a) {
                        return null != a ? n.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
                    return function (e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                }, i, j, k;
            if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        }, ready: function (a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    });

    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }

    n.ready.promise = function (b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
            return j.call(n(a), c)
        })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = n.expando + K.uid++
    }

    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function (a) {
            if (!K.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {value: c}, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        }, set: function (a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (n.isEmptyObject(f)) n.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
            return f
        }, get: function (a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        }, access: function (a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        }, remove: function (a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b) this.cache[f] = {}; else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--) delete g[d[c]]
            }
        }, hasData: function (a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        }, discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K, M = new K, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
            } catch (e) {
            }
            M.set(a, b, c)
        } else c = void 0;
        return c
    }

    n.extend({
        hasData: function (a) {
            return M.hasData(a) || L.hasData(a)
        }, data: function (a, b, c) {
            return M.access(a, b, c)
        }, removeData: function (a, b) {
            M.remove(a, b)
        }, _data: function (a, b, c) {
            return L.access(a, b, c)
        }, _removeData: function (a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                M.set(this, a)
            }) : J(this, function (b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c) return c;
                    if (c = M.get(f, d), void 0 !== c) return c;
                    if (c = P(f, d, void 0), void 0 !== c) return c
                } else this.each(function () {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        }, removeData: function (a) {
            return this.each(function () {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function () {
                    L.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function (a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    }, T = /^(?:checkbox|radio)$/i;
    !function () {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return l.activeElement
        } catch (a) {
        }
    }

    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--) if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b,
                r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                d.length && g.push({elem: i, handlers: d})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = n.extend(new n.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $; else if (!d) return this;
            return 1 === e && (f = d, d = function (a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
                n.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
                n.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ba = /<([\w:]+)/,
        ca = /<|&#?\w+;/, da = /<(?:script|style|link)/i, ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fa = /^$|\/(?:java|ecma)script/i, ga = /^true\/(.*)/, ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ia = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;

    function ja(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function ka(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function la(a) {
        var b = ga.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }

    function na(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }

    function oa(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function pa(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    n.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
            if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]); else na(a, h);
            return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) if (e = a[m], e || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e); else if (ca.test(e)) {
                f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];
                while (j--) f = f.lastChild;
                n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++]) if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
                j = 0;
                while (e = f[j++]) fa.test(e.type || "") && c.push(e)
            }
            return k
        }, cleanData: function (a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function (a) {
            return J(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b)
            })
        }, html: function (a) {
            return J(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(aa, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function (c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
                if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qa, ra = {};

    function sa(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f
    }

    function ta(a) {
        var b = l, c = ra[a];
        return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c
    }

    var ua = /^margin/, va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wa = function (b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    };

    function xa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function ya(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    !function () {
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);

            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
            }

            a.getComputedStyle && n.extend(k, {
                pixelPosition: function () {
                    return g(), b
                }, boxSizingReliable: function () {
                    return null == c && g(), c
                }, reliableMarginRight: function () {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
                }
            })
        }
    }(), n.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var za = /^(none|table(?!-c[ea]).+)/, Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
        Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
        Ca = {position: "absolute", visibility: "hidden", display: "block"},
        Da = {letterSpacing: "0", fontWeight: "400"}, Ea = ["Webkit", "O", "Moz", "ms"];

    function Fa(a, b) {
        if (b in a) return b;
        var c = b[0].toUpperCase() + b.slice(1), d = b, e = Ea.length;
        while (e--) if (b = Ea[e] + c, b in a) return b;
        return d
    }

    function Ga(a, b, c) {
        var d = Aa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Ha(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }

    function Ia(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wa(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Ja(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = xa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
                    return Ia(a, b, d)
                }) : Ia(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && wa(a);
                return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
        return b ? n.swap(a, {display: "inline-block"}, xa, [a, "marginRight"]) : void 0
    }), n.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ua.test(a) || (n.cssHooks[a + b].set = Ga)
    }), n.fn.extend({
        css: function (a, b) {
            return J(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return Ja(this, !0)
        }, hide: function () {
            return Ja(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function Ka(a, b, c, d, e) {
        return new Ka.prototype.init(a, b, c, d, e)
    }

    n.Tween = Ka, Ka.prototype = {
        constructor: Ka, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = Ka.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = Ka.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this
        }
    }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Ka.prototype.init, n.fx.step = {};
    var La, Ma, Na = /^(?:toggle|show|hide)$/, Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pa = /queueHooks$/, Qa = [Va], Ra = {
            "*": [function (a, b) {
                var c = this.createTween(a, b), d = c.cur(), e = Oa.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                    g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)), h = 1, i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function Sa() {
        return setTimeout(function () {
            La = void 0
        }), La = n.now()
    }

    function Ta(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ua(a, b, c) {
        for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
    }

    function Va(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b) if (e = b[d], Na.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0
            }
            m[d] = q && q[d] || n.style(a, d)
        } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j); else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
                n(a).hide()
            }), l.done(function () {
                var b;
                L.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Wa(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function Xa(a, b, c) {
        var d, e, f = 0, g = Qa.length, h = n.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e) return !1;
            for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: La || Sa(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (Wa(k, j.opts.specialEasing); g > f; f++) if (d = Qa[f].call(j, a, k, j.opts)) return d;
        return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    n.Animation = n.extend(Xa, {
        tweener: function (a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? Qa.unshift(a) : Qa.push(a)
        }
    }), n.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
                var b = Xa(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: Ta("show"),
        slideUp: Ta("hide"),
        slideToggle: Ta("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function () {
        var a, b = 0, c = n.timers;
        for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), La = void 0
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function () {
        Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function () {
        clearInterval(Ma), Ma = null
    }, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function (a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
        a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
    }();
    var Ya, Za, $a = n.expr.attrHandle;
    n.fn.extend({
        attr: function (a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Za = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = $a[b] || n.find.attr;
        $a[b] = function (a, b, d) {
            var e, f;
            return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e
        }
    });
    var _a = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this
    });
    var ab = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                f = 0;
                while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = n.trim(d), c.className !== g && (c.className = g)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                f = 0;
                while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0, e = n(this), f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var bb = /\r/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f) return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cb = n.now(), db = /\?/;
    n.parseJSON = function (a) {
        return JSON.parse(a + "")
    }, n.parseXML = function (a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var eb = /#.*$/, fb = /([?&])_=[^&]*/, gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ib = /^(?:GET|HEAD)$/, jb = /^\/\//,
        kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lb = {}, mb = {}, nb = "*/".concat("*"),
        ob = a.location.href, pb = kb.exec(ob.toLowerCase()) || [];

    function qb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function rb(a, b, c, d) {
        var e = {}, f = a === mb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function sb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function tb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function ub(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ob,
            type: "GET",
            isLocal: hb.test(pb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
        },
        ajaxPrefilter: qb(lb),
        ajaxTransport: qb(mb),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(),
                p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                    readyState: 0, getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!f) {
                                f = {};
                                while (b = gb.exec(e)) f[b[1].toLowerCase()] = b[2]
                            }
                            b = f[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    }, getAllResponseHeaders: function () {
                        return 2 === t ? e : null
                    }, setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    }, overrideMimeType: function (a) {
                        return t || (k.mimeType = a), this
                    }, statusCode: function (a) {
                        var b;
                        if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                        return this
                    }, abort: function (a) {
                        var b = a || u;
                        return c && c.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (j in{success: 1, error: 1, complete: 1}) v[j](k[j]);
            if (c = rb(mb, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }

            return v
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n._evalUrl = function (a) {
        return n.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, n.fn.extend({
        wrapAll: function (a) {
            var b;
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this)
        }, wrapInner: function (a) {
            return this.each(n.isFunction(a) ? function (b) {
                n(this).wrapInner(a.call(this, b))
            } : function () {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a)
    };
    var vb = /%20/g, wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;

    function Ab(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function (b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
    }

    n.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a) Ab(c, a[c], b, e);
        return d.join("&").replace(vb, "+")
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {name: b.name, value: a.replace(xb, "\r\n")}
                }) : {name: b.name, value: c.replace(xb, "\r\n")}
            }).get()
        }
    }), n.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Bb = 0, Cb = {}, Db = {0: 200, 1223: 204}, Eb = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Cb) Cb[a]()
    }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
        var b;
        return k.cors || Eb && !a.crossDomain ? {
            send: function (c, d) {
                var e, f = a.xhr(), g = ++Bb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function (a) {
                    return function () {
                        b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            }, abort: function () {
                b && b()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                }, abort: function () {
                    c && c()
                }
            }
        }
    });
    var Fb = [], Gb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Fb.pop() || n.expando + "_" + cb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g,
            h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Hb = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem
        }).length
    };
    var Ib = a.document.documentElement;

    function Jb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        }, position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0, left: 0};
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || Ib;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ib
            })
        }
    }), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function (e) {
            return J(this, function (b, e, f) {
                var g = Jb(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
            return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({Height: "height", Width: "width"}, function (a, b) {
        n.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function () {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var Kb = a.jQuery, Lb = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
});
/*! UIkit 3.0.0-beta.22 | http://www.getuikit.com | (c) 2014 - 2017 YOOtheme | MIT License */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
        typeof define === 'function' && define.amd ? define('uikit', ['jquery'], factory) :
            (global.UIkit = factory(global.jQuery));
}(this, (function ($) {
    'use strict';

    var $__default = 'default' in $ ? $['default'] : $;

    var win$$1 = $__default(window);
    var doc$$1 = $__default(document);
    var docElement$$1 = $__default(document.documentElement);

    var isRtl$$1 = $__default('html').attr('dir') === 'rtl';

    function isReady$$1() {
        return document.readyState === 'complete' || document.readyState !== 'loading' && !document.documentElement.doScroll;
    }

    function ready$$1(fn) {

        var handle = function () {
            off$$1(document, 'DOMContentLoaded', handle);
            off$$1(window, 'load', handle);
            fn();
        };

        if (isReady$$1()) {
            fn();
        } else {
            on$$1(document, 'DOMContentLoaded', handle);
            on$$1(window, 'load', handle);
        }

    }

    function on$$1(el, type, listener, useCapture) {
        toNode$$1(el).addEventListener(type, listener, useCapture);
    }

    function off$$1(el, type, listener, useCapture) {
        toNode$$1(el).removeEventListener(type, listener, useCapture);
    }

    function transition$$1(element, props, duration, transition$$1) {
        if (duration === void 0) duration = 400;
        if (transition$$1 === void 0) transition$$1 = 'linear';


        var p = promise$$1(function (resolve, reject) {

            element = $__default(element);

            for (var name in props) {
                element.css(name, element.css(name));
            }

            var timer = setTimeout(function () {
                return element.trigger(transitionend || 'transitionend');
            }, duration);

            element
                .one(transitionend || 'transitionend', function (e, cancel) {

                    e.promise = p;

                    clearTimeout(timer);
                    element.removeClass('uk-transition').css('transition', '');
                    if (!cancel) {
                        resolve();
                    } else {
                        reject();
                    }
                })
                .addClass('uk-transition')
                .css('transition', ("all " + duration + "ms " + transition$$1))
                .css(props);

        }).then(null, function () {
        });

        return p;
    }

    var Transition$$1 = {

        start: transition$$1,

        stop: function stop(element, cancel) {
            var e = $.Event(transitionend || 'transitionend');
            $__default(element).triggerHandler(e, [cancel]);
            return e.promise || promise$$1.resolve();
        },

        cancel: function cancel(element) {
            return this.stop(element, true);
        },

        inProgress: function inProgress(element) {
            return $__default(element).hasClass('uk-transition');
        }

    };

    function animate$$1(element, animation, duration, origin, out) {
        if (duration === void 0) duration = 200;


        var p = promise$$1(function (resolve) {

            var cls = out ? 'uk-animation-leave' : 'uk-animation-enter';

            element = $__default(element);

            if (animation.lastIndexOf('uk-animation-', 0) === 0) {

                if (origin) {
                    animation += " uk-animation-" + origin;
                }

                if (out) {
                    animation += ' uk-animation-reverse';
                }

            }

            reset();

            element
                .one(animationend || 'animationend', function (e) {
                    e.promise = p;
                    p.then(reset);
                    resolve();
                })
                .css('animation-duration', (duration + "ms"))
                .addClass(animation)
                .addClass(cls);


            if (!animationend) {
                requestAnimationFrame(function () {
                    return Animation$$1.cancel(element);
                });
            }

            function reset() {
                element.css('animation-duration', '').removeClass((cls + " " + animation));
            }

        });

        return p;
    }

    var Animation$$1 = {

        in: function in$1(element, animation, duration, origin) {
            return animate$$1(element, animation, duration, origin, false);
        },

        out: function out(element, animation, duration, origin) {
            return animate$$1(element, animation, duration, origin, true);
        },

        inProgress: function inProgress(element) {
            return $__default(element).hasClass('uk-animation-enter') || $__default(element).hasClass('uk-animation-leave');
        },

        cancel: function cancel(element) {
            var e = $.Event(animationend || 'animationend');
            $__default(element).triggerHandler(e);
            return e.promise || promise$$1.resolve();
        }

    };

    function isJQuery$$1(obj) {
        return obj instanceof $__default;
    }

    function isWithin$$1(element, selector) {
        element = $__default(element);
        return element.is(selector) || !!(isString$$1(selector)
            ? element.parents(selector).length
            : $.contains(toNode$$1(selector), element[0]));
    }

    function attrFilter$$1(element, attr, pattern, replacement) {
        element = $__default(element);
        return element.attr(attr, function (i, value) {
            return value ? value.replace(pattern, replacement) : value;
        });
    }

    function removeClass$$1(element, cls) {
        return attrFilter$$1(element, 'class', new RegExp(("(^|\\s)" + cls + "(?!\\S)"), 'g'), '');
    }

    function createEvent$$1(e, bubbles, cancelable, data) {
        if (bubbles === void 0) bubbles = true;
        if (cancelable === void 0) cancelable = false;
        if (data === void 0) data = false;

        if (isString$$1(e)) {
            var event = document.createEvent('Event');
            event.initEvent(e, bubbles, cancelable);
            e = event;
        }

        if (data) {
            $.extend(e, data);
        }

        return e;
    }

    function isInView$$1(element, offsetTop$$1, offsetLeft) {
        if (offsetTop$$1 === void 0) offsetTop$$1 = 0;
        if (offsetLeft === void 0) offsetLeft = 0;


        var rect = toNode$$1(element).getBoundingClientRect();

        return rect.bottom >= -1 * offsetTop$$1
            && rect.right >= -1 * offsetLeft
            && rect.top <= (window.innerHeight || document.documentElement.clientHeight) + offsetTop$$1
            && rect.left <= (window.innerWidth || document.documentElement.clientWidth) + offsetLeft;
    }

    function getIndex$$1(index, elements, current) {
        if (current === void 0) current = 0;


        elements = $__default(elements);

        var length = $__default(elements).length;

        index = (isNumber$$1(index)
                ? index
                : index === 'next'
                    ? current + 1
                    : index === 'previous'
                        ? current - 1
                        : isString$$1(index)
                            ? parseInt(index, 10)
                            : elements.index(index)
        ) % length;

        return index < 0 ? index + length : index;
    }

    var voidElements = {
        area: true,
        base: true,
        br: true,
        col: true,
        embed: true,
        hr: true,
        img: true,
        input: true,
        keygen: true,
        link: true,
        menuitem: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true
    };

    function isVoidElement$$1(element) {
        return voidElements[toNode$$1(element).tagName.toLowerCase()];
    }

    var Dimensions$$1 = {

        ratio: function ratio(dimensions, prop, value) {

            var aProp = prop === 'width' ? 'height' : 'width';

            return (obj = {}, obj[aProp] = Math.round(value * dimensions[aProp] / dimensions[prop]), obj[prop] = value, obj);
            var obj;
        },

        fit: function fit(dimensions, maxDimensions) {
            var this$1 = this;

            dimensions = $.extend({}, dimensions);

            $.each(dimensions, function (prop) {
                return dimensions = dimensions[prop] > maxDimensions[prop] ? this$1.ratio(dimensions, prop, maxDimensions[prop]) : dimensions;
            });

            return dimensions;
        },

        cover: function cover(dimensions, maxDimensions) {
            var this$1 = this;

            dimensions = this.fit(dimensions, maxDimensions);

            $.each(dimensions, function (prop) {
                return dimensions = dimensions[prop] < maxDimensions[prop] ? this$1.ratio(dimensions, prop, maxDimensions[prop]) : dimensions;
            });

            return dimensions;
        }

    };

    function query$$1(selector, context) {
        var selectors = getContextSelectors$$1(selector);
        return selectors ? selectors.reduce(function (context, selector) {
            return toJQuery$$1(selector, context);
        }, context) : toJQuery$$1(selector);
    }

    function bind$$1(fn, context) {
        return function (a) {
            var l = arguments.length;
            return l ? l > 1 ? fn.apply(context, arguments) : fn.call(context, a) : fn.call(context);
        };
    }

    var hasOwnProperty = Object.prototype.hasOwnProperty;

    function hasOwn$$1(obj, key) {
        return hasOwnProperty.call(obj, key);
    }

    function promise$$1(executor) {

        if (hasPromise) {
            return new Promise(executor);
        }

        var def = $__default.Deferred();

        executor(def.resolve, def.reject);

        return def;
    }

    promise$$1.resolve = function (value) {
        return promise$$1(function (resolve) {
            resolve(value);
        });
    };

    promise$$1.reject = function (value) {
        return promise$$1(function (_, reject) {
            reject(value);
        });
    };

    promise$$1.all = function (iterable) {
        return hasPromise
            ? Promise.all(iterable)
            : $__default.when.apply($__default, iterable);
    };

    function classify$$1(str) {
        return str.replace(/(?:^|[-_\/])(\w)/g, function (_, c) {
            return c ? c.toUpperCase() : '';
        });
    }

    function hyphenate$$1(str) {
        return str
            .replace(/([a-z\d])([A-Z])/g, '$1-$2')
            .toLowerCase()
    }

    var camelizeRE = /-(\w)/g;

    function camelize$$1(str) {
        return str.replace(camelizeRE, toUpper)
    }

    function toUpper(_, c) {
        return c ? c.toUpperCase() : ''
    }

    function isString$$1(value) {
        return typeof value === 'string';
    }

    function isNumber$$1(value) {
        return typeof value === 'number';
    }

    function isUndefined$$1(value) {
        return value === undefined;
    }

    function isContextSelector$$1(selector) {
        return isString$$1(selector) && selector.match(/^[!>+-]/);
    }

    function getContextSelectors$$1(selector) {
        return isContextSelector$$1(selector) && selector.split(/(?=\s[!>+-])/g).map(function (value) {
            return value.trim();
        });
    }

    var contextSelectors = {'!': 'closest', '+': 'nextAll', '-': 'prevAll'};

    function toJQuery$$1(element, context) {

        if (element === true) {
            return null;
        }

        try {

            if (context && isContextSelector$$1(element) && element[0] !== '>') {

                var fn = contextSelectors[element[0]], selector = element.substr(1);

                context = $__default(context);

                if (fn === 'closest') {
                    context = context.parent();
                    selector = selector || '*';
                }

                element = context[fn](selector);

            } else {
                element = $__default(element, context);
            }

        } catch (e) {
            return null;
        }

        return element.length ? element : null;
    }

    function toNode$$1(element) {
        return element && (isJQuery$$1(element) ? element[0] : element);
    }

    function toBoolean$$1(value) {
        return typeof value === 'boolean'
            ? value
            : value === 'true' || value === '1' || value === ''
                ? true
                : value === 'false' || value === '0'
                    ? false
                    : value;
    }

    function toNumber$$1(value) {
        var number = Number(value);
        return !isNaN(number) ? number : false;
    }

    function toList$$1(value) {
        return $.isArray(value)
            ? value
            : isString$$1(value)
                ? value.split(',').map(function (value) {
                    return toBoolean$$1(value.trim());
                })
                : [value];
    }

    var vars = {};

    function toMedia$$1(value) {

        if (isString$$1(value)) {
            if (value[0] === '@') {
                var name = "media-" + (value.substr(1));
                value = vars[name] || (vars[name] = parseFloat(getCssVar(name)));
            } else if (value.match(/^\(min-width:/)) {
                return value;
            }
        }

        return value && !isNaN(value) ? ("(min-width: " + value + "px)") : false;
    }

    function coerce$$1(type, value, context) {

        if (type === Boolean) {
            return toBoolean$$1(value);
        } else if (type === Number) {
            return toNumber$$1(value);
        } else if (type === 'jQuery') {
            return query$$1(value, context);
        } else if (type === 'list') {
            return toList$$1(value);
        } else if (type === 'media') {
            return toMedia$$1(value);
        }

        return type ? type(value) : value;
    }

    function toMs$$1(time) {
        return !time
            ? 0
            : time.substr(-2) === 'ms'
                ? parseFloat(time)
                : parseFloat(time) * 1000;
    }

    function swap$$1(value, a, b) {
        return value.replace(new RegExp((a + "|" + b), 'mg'), function (match) {
            return match === a ? b : a
        });
    }

    var Observer = window.MutationObserver || window.WebKitMutationObserver;
    var requestAnimationFrame = window.requestAnimationFrame || function (fn) {
        return setTimeout(fn, 1000 / 60);
    };

    var hasTouchEvents = 'ontouchstart' in window;
    var hasPointerEvents = window.PointerEvent;
    var hasPromise = 'Promise' in window;
    var hasTouch = hasTouchEvents
        || window.DocumentTouch && document instanceof DocumentTouch
        || navigator.msPointerEnabled && navigator.msMaxTouchPoints > 0 // IE 10
        || navigator.pointerEnabled && navigator.maxTouchPoints > 0; // IE >=11

    var pointerDown = !hasTouch ? 'mousedown' : hasTouchEvents ? 'touchstart' : 'pointerdown';
    var pointerMove = !hasTouch ? 'mousemove' : hasTouchEvents ? 'touchmove' : 'pointermove';
    var pointerUp = !hasTouch ? 'mouseup' : hasTouchEvents ? 'touchend' : 'pointerup';
    var pointerEnter = hasTouch && hasPointerEvents ? 'pointerenter' : 'mouseenter';
    var pointerLeave = hasTouch && hasPointerEvents ? 'pointerleave' : 'mouseleave';
    var pointerCancel = hasTouch && hasTouchEvents ? 'touchcancel' : 'pointercancel';

    var transitionend = prefix('transition', 'transition-end');
    var animationstart = prefix('animation', 'animation-start');
    var animationend = prefix('animation', 'animation-end');

    function getStyle(element, property, pseudoElt) {
        return (window.getComputedStyle(element, pseudoElt) || {})[property];
    }

    function getCssVar(name) {

        /* usage in css:  .var-name:before { content:"xyz" } */

        var val, doc = document.documentElement,
            element = doc.appendChild(document.createElement('div'));

        element.classList.add(("var-" + name));

        try {

            val = getStyle(element, 'content', ':before').replace(/^["'](.*)["']$/, '$1');
            val = JSON.parse(val);

        } catch (e) {
        }

        doc.removeChild(element);

        return val || undefined;
    }

    function prefix(name, event) {

        var ucase = classify$$1(name),
            lowered = classify$$1(event).toLowerCase(),
            classified = classify$$1(event),
            element = document.body || document.documentElement,
            names = (obj = {}, obj[("Webkit" + ucase)] = ("webkit" + classified), obj[("Moz" + ucase)] = lowered, obj[("o" + ucase)] = ("o" + classified + " o" + lowered), obj[name] = lowered, obj);
        var obj;

        for (name in names) {
            if (element.style[name] !== undefined) {
                return names[name];
            }
        }
    }

    /*
     Based on:
     Copyright (c) 2016 Wilson Page wilsonpage@me.com
     https://github.com/wilsonpage/fastdom
     */

    var fastdom$$1 = {

        reads: [],
        writes: [],

        measure: function (task) {
            this.reads.push(task);
            scheduleFlush(this);
            return task;
        },

        mutate: function (task) {
            this.writes.push(task);
            scheduleFlush(this);
            return task;
        },

        clear: function (task) {
            return remove(this.reads, task) || remove(this.writes, task);
        }

    };

    function scheduleFlush(fastdom$$1) {
        if (!fastdom$$1.scheduled) {
            fastdom$$1.scheduled = true;
            requestAnimationFrame(flush.bind(null, fastdom$$1));
        }
    }

    function flush(fastdom$$1) {

        runTasks(fastdom$$1.reads);
        runTasks(fastdom$$1.writes.splice(0, fastdom$$1.writes.length));

        fastdom$$1.scheduled = false;

        if (fastdom$$1.reads.length || fastdom$$1.writes.length) {
            scheduleFlush(fastdom$$1);
        }

    }

    function runTasks(tasks) {
        var task;
        while (task = tasks.shift()) {
            task();
        }
    }

    function remove(array, item) {
        var index = array.indexOf(item);
        return !!~index && !!array.splice(index, 1);
    }

    function MouseTracker$$1() {
    }

    MouseTracker$$1.prototype = {

        positions: [],
        position: null,

        init: function init() {
            var this$1 = this;


            this.positions = [];
            this.position = null;

            var ticking = false;
            this.handler = function (e) {

                if (!ticking) {
                    setTimeout(function () {

                        var time = Date.now(), length = this$1.positions.length;
                        if (length && (time - this$1.positions[length - 1].time > 100)) {
                            this$1.positions.splice(0, length);
                        }

                        this$1.positions.push({time: time, x: e.pageX, y: e.pageY});

                        if (this$1.positions.length > 5) {
                            this$1.positions.shift();
                        }

                        ticking = false;
                    }, 5);
                }

                ticking = true;
            };

            doc$$1.on('mousemove', this.handler);

        },

        cancel: function cancel() {
            if (this.handler) {
                doc$$1.off('mousemove', this.handler);
            }
        },

        movesTo: function movesTo(target) {

            if (this.positions.length < 2) {
                return false;
            }

            var p = getDimensions$$1(target),
                position$$1 = this.positions[this.positions.length - 1],
                prevPos = this.positions[0];

            if (p.left <= position$$1.x && position$$1.x <= p.right && p.top <= position$$1.y && position$$1.y <= p.bottom) {
                return false;
            }

            var points = [
                [{x: p.left, y: p.top}, {x: p.right, y: p.bottom}],
                [{x: p.right, y: p.top}, {x: p.left, y: p.bottom}]
            ];

            if (p.right <= position$$1.x) {

            } else if (p.left >= position$$1.x) {
                points[0].reverse();
                points[1].reverse();
            } else if (p.bottom <= position$$1.y) {
                points[0].reverse();
            } else if (p.top >= position$$1.y) {
                points[1].reverse();
            }

            return !!points.reduce(function (result, point) {
                return result + (slope(prevPos, point[0]) < slope(position$$1, point[0]) && slope(prevPos, point[1]) > slope(position$$1, point[1]));
            }, 0);
        }

    };

    function slope(a, b) {
        return (b.y - a.y) / (b.x - a.x);
    }

    var strats = {};

// concat strategy
    strats.args =
        strats.created =
            strats.events =
                strats.init =
                    strats.ready =
                        strats.connected =
                            strats.disconnected =
                                strats.destroy = function (parentVal, childVal) {

                                    parentVal = parentVal && !$.isArray(parentVal) ? [parentVal] : parentVal;

                                    return childVal
                                        ? parentVal
                                            ? parentVal.concat(childVal)
                                            : $.isArray(childVal)
                                                ? childVal
                                                : [childVal]
                                        : parentVal;
                                };

// update strategy
    strats.update = function (parentVal, childVal) {
        return strats.args(parentVal, $.isFunction(childVal) ? {write: childVal} : childVal);
    };

// property strategy
    strats.props = function (parentVal, childVal) {

        if ($.isArray(childVal)) {
            childVal = childVal.reduce(function (value, key) {
                value[key] = String;
                return value;
            }, {});
        }

        return strats.methods(parentVal, childVal);
    };

// extend strategy
    strats.computed =
        strats.defaults =
            strats.methods = function (parentVal, childVal) {
                return childVal
                    ? parentVal
                        ? $.extend(true, {}, parentVal, childVal)
                        : childVal
                    : parentVal;
            };

// default strategy
    var defaultStrat = function (parentVal, childVal) {
        return isUndefined$$1(childVal) ? parentVal : childVal;
    };

    function mergeOptions$$1(parent, child) {

        var options = {}, key;

        if (child.mixins) {
            for (var i = 0, l = child.mixins.length; i < l; i++) {
                parent = mergeOptions$$1(parent, child.mixins[i]);
            }
        }

        for (key in parent) {
            mergeKey(key);
        }

        for (key in child) {
            if (!hasOwn$$1(parent, key)) {
                mergeKey(key);
            }
        }

        function mergeKey(key) {
            options[key] = (strats[key] || defaultStrat)(parent[key], child[key]);
        }

        return options;
    }

    var dirs = {
        x: ['width', 'left', 'right'],
        y: ['height', 'top', 'bottom']
    };

    function position$$1(element, target, attach, targetAttach, offset, targetOffset, flip, boundary) {

        attach = getPos(attach);
        targetAttach = getPos(targetAttach);

        var flipped = {element: attach, target: targetAttach};

        if (!element) {
            return flipped;
        }

        var dim = getDimensions$$1(element),
            targetDim = getDimensions$$1(target),
            position$$1 = targetDim;

        moveTo(position$$1, attach, dim, -1);
        moveTo(position$$1, targetAttach, targetDim, 1);

        offset = getOffsets(offset, dim.width, dim.height);
        targetOffset = getOffsets(targetOffset, targetDim.width, targetDim.height);

        offset['x'] += targetOffset['x'];
        offset['y'] += targetOffset['y'];

        position$$1.left += offset['x'];
        position$$1.top += offset['y'];

        boundary = getDimensions$$1(boundary || window);

        if (flip) {
            $.each(dirs, function (dir, ref) {
                var prop = ref[0];
                var align = ref[1];
                var alignFlip = ref[2];


                if (!(flip === true || ~flip.indexOf(dir))) {
                    return;
                }

                var elemOffset = attach[dir] === align
                    ? -dim[prop]
                    : attach[dir] === alignFlip
                        ? dim[prop]
                        : 0,
                    targetOffset = targetAttach[dir] === align
                        ? targetDim[prop]
                        : targetAttach[dir] === alignFlip
                            ? -targetDim[prop]
                            : 0;

                if (position$$1[align] < boundary[align] || position$$1[align] + dim[prop] > boundary[alignFlip]) {

                    var newVal = position$$1[align] + elemOffset + targetOffset - offset[dir] * 2;

                    if (newVal >= boundary[align] && newVal + dim[prop] <= boundary[alignFlip]) {
                        position$$1[align] = newVal;

                        ['element', 'target'].forEach(function (el) {
                            flipped[el][dir] = !elemOffset
                                ? flipped[el][dir]
                                : flipped[el][dir] === dirs[dir][1]
                                    ? dirs[dir][2]
                                    : dirs[dir][1];
                        });
                    }
                }

            });
        }

        $__default(element).offset({left: position$$1.left, top: position$$1.top});

        return flipped;
    }

    function getDimensions$$1(element) {

        element = toNode$$1(element);

        var window = getWindow(element), top = window.pageYOffset, left = window.pageXOffset;

        if (!element.ownerDocument) {
            return {
                top: top,
                left: left,
                height: window.innerHeight,
                width: window.innerWidth,
                bottom: top + window.innerHeight,
                right: left + window.innerWidth,
            }
        }

        var display = false;
        if (!element.offsetHeight) {
            display = element.style.display;
            element.style.display = 'block';
        }

        var rect = element.getBoundingClientRect();

        if (display !== false) {
            element.style.display = display;
        }

        return {
            height: rect.height,
            width: rect.width,
            top: rect.top + top,
            left: rect.left + left,
            bottom: rect.bottom + top,
            right: rect.right + left,
        }
    }

    function offsetTop$$1(element) {
        element = toNode$$1(element);
        return element.getBoundingClientRect().top + getWindow(element).pageYOffset;
    }

    function getWindow(element) {
        return element && element.ownerDocument ? element.ownerDocument.defaultView : window;
    }

    function moveTo(position$$1, attach, dim, factor) {
        $.each(dirs, function (dir, ref) {
            var prop = ref[0];
            var align = ref[1];
            var alignFlip = ref[2];

            if (attach[dir] === alignFlip) {
                position$$1[align] += dim[prop] * factor;
            } else if (attach[dir] === 'center') {
                position$$1[align] += dim[prop] * factor / 2;
            }
        });
    }

    function getPos(pos) {

        var x = /left|center|right/, y = /top|center|bottom/;

        pos = (pos || '').split(' ');

        if (pos.length === 1) {
            pos = x.test(pos[0])
                ? pos.concat(['center'])
                : y.test(pos[0])
                    ? ['center'].concat(pos)
                    : ['center', 'center'];
        }

        return {
            x: x.test(pos[0]) ? pos[0] : 'center',
            y: y.test(pos[1]) ? pos[1] : 'center'
        };
    }

    function getOffsets(offsets, width, height) {

        offsets = (offsets || '').split(' ');

        return {
            x: offsets[0] ? parseFloat(offsets[0]) * (offsets[0][offsets[0].length - 1] === '%' ? width / 100 : 1) : 0,
            y: offsets[1] ? parseFloat(offsets[1]) * (offsets[1][offsets[1].length - 1] === '%' ? height / 100 : 1) : 0
        };
    }

    function flipPosition$$1(pos) {
        switch (pos) {
            case 'left':
                return 'right';
            case 'right':
                return 'left';
            case 'top':
                return 'bottom';
            case 'bottom':
                return 'top';
            default:
                return pos;
        }
    }

    /*
     Based on:
     Copyright (c) 2010-2016 Thomas Fuchs
     http://zeptojs.com/
     */

    var touch = {};
    var touchTimeout;
    var tapTimeout;
    var swipeTimeout;
    var gesture;
    var clicked;

    function swipeDirection(x1, x2, y1, y2) {
        return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down');
    }

    function cancelAll() {
        if (touchTimeout) {
            clearTimeout(touchTimeout);
        }
        if (tapTimeout) {
            clearTimeout(tapTimeout);
        }
        if (swipeTimeout) {
            clearTimeout(swipeTimeout);
        }
        touchTimeout = tapTimeout = swipeTimeout = null;
        touch = {};
    }

    ready$$1(function () {

        var now, delta, deltaX = 0, deltaY = 0, firstTouch;

        if ('MSGesture' in window) {
            gesture = new MSGesture();
            gesture.target = document.body;
        }

        on$$1(document, 'click', function () {
            return clicked = true;
        }, true);

        var gestureHandler = function (e) {

            var swipeDirectionFromVelocity = e.velocityX > 1 ? 'Right' : e.velocityX < -1 ? 'Left' : e.velocityY > 1 ? 'Down' : e.velocityY < -1 ? 'Up' : null;

            if (swipeDirectionFromVelocity && touch.el !== undefined) {
                touch.el.trigger('swipe');
                touch.el.trigger(("swipe" + swipeDirectionFromVelocity));
            }
        };

        on$$1(document, 'MSGestureEnd', gestureHandler);
        on$$1(document, 'gestureend', gestureHandler);

        on$$1(document, pointerDown, function (e) {

            firstTouch = e.touches ? e.touches[0] : e;

            now = Date.now();
            delta = now - (touch.last || now);
            touch.el = $__default('tagName' in firstTouch.target ? firstTouch.target : firstTouch.target.parentNode);

            if (touchTimeout) {
                clearTimeout(touchTimeout);
            }

            touch.x1 = firstTouch.pageX;
            touch.y1 = firstTouch.pageY;

            if (delta > 0 && delta <= 250) {
                touch.isDoubleTap = true;
            }

            touch.last = now;

            // adds the current touch contact for IE gesture recognition
            if (gesture && (e.type === 'pointerdown' || e.type === 'touchstart')) {
                gesture.addPointer(e.pointerId);
            }

            clicked = e.button > 0;

        });

        on$$1(document, pointerMove, function (e) {

            firstTouch = e.touches ? e.touches[0] : e;

            touch.x2 = firstTouch.pageX;
            touch.y2 = firstTouch.pageY;

            deltaX += Math.abs(touch.x1 - touch.x2);
            deltaY += Math.abs(touch.y1 - touch.y2);
        });

        on$$1(document, pointerUp, function () {

            // swipe
            if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) || (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30)) {

                swipeTimeout = setTimeout(function () {
                    if (touch.el !== undefined) {
                        touch.el.trigger('swipe');
                        touch.el.trigger(("swipe" + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2))));
                    }
                    touch = {};
                }, 0);

                // normal tap
            } else if ('last' in touch) {

                // don't fire tap when delta position changed by more than 30 pixels,
                // for instance when moving to a point and back to origin
                if (isNaN(deltaX) || (deltaX < 30 && deltaY < 30)) {
                    // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
                    // ('tap' fires before 'scroll')
                    tapTimeout = setTimeout(function () {

                        // trigger universal 'tap' with the option to cancelTouch()
                        // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
                        var event = $.Event('tap');
                        event.cancelTouch = cancelAll;

                        if (touch.el !== undefined) {
                            touch.el.trigger(event);
                        }

                        // trigger double tap immediately
                        if (touch.isDoubleTap) {
                            if (touch.el !== undefined) {
                                touch.el.trigger('doubleTap');
                            }
                            touch = {};
                        }

                        // trigger single tap after 300ms of inactivity
                        else {
                            touchTimeout = setTimeout(function () {
                                touchTimeout = null;
                                if (touch.el !== undefined) {
                                    touch.el.trigger('singleTap');

                                    if (!clicked) {
                                        touch.el.trigger('click');
                                    }

                                }
                                touch = {};
                            }, 300);
                        }
                    });
                } else {
                    touch = {};
                }
                deltaX = deltaY = 0;
            }
        });

        // when the browser window loses focus,
        // for example when a modal dialog is shown,
        // cancel all ongoing events
        on$$1(document, pointerCancel, cancelAll);

        // scrolling the window indicates intention of the user
        // to scroll, not tap or swipe, so cancel all ongoing events
        on$$1(window, 'scroll', cancelAll);
    });

    var touching = false;
    on$$1(document, 'touchstart', function () {
        return touching = true;
    }, true);
    on$$1(document, 'click', function () {
        touching = false;
    });
    on$$1(document, 'touchcancel', function () {
        return touching = false;
    }, true);

    function isTouch$$1(e) {
        return touching || (e.originalEvent || e).pointerType === 'touch';
    }


    var util = Object.freeze({
        win: win$$1,
        doc: doc$$1,
        docElement: docElement$$1,
        isRtl: isRtl$$1,
        isReady: isReady$$1,
        ready: ready$$1,
        on: on$$1,
        off: off$$1,
        transition: transition$$1,
        Transition: Transition$$1,
        animate: animate$$1,
        Animation: Animation$$1,
        isJQuery: isJQuery$$1,
        isWithin: isWithin$$1,
        attrFilter: attrFilter$$1,
        removeClass: removeClass$$1,
        createEvent: createEvent$$1,
        isInView: isInView$$1,
        getIndex: getIndex$$1,
        isVoidElement: isVoidElement$$1,
        Dimensions: Dimensions$$1,
        query: query$$1,
        Observer: Observer,
        requestAnimationFrame: requestAnimationFrame,
        hasPromise: hasPromise,
        hasTouch: hasTouch,
        pointerDown: pointerDown,
        pointerMove: pointerMove,
        pointerUp: pointerUp,
        pointerEnter: pointerEnter,
        pointerLeave: pointerLeave,
        pointerCancel: pointerCancel,
        transitionend: transitionend,
        animationstart: animationstart,
        animationend: animationend,
        getStyle: getStyle,
        getCssVar: getCssVar,
        fastdom: fastdom$$1,
        $: $__default,
        bind: bind$$1,
        hasOwn: hasOwn$$1,
        promise: promise$$1,
        classify: classify$$1,
        hyphenate: hyphenate$$1,
        camelize: camelize$$1,
        isString: isString$$1,
        isNumber: isNumber$$1,
        isUndefined: isUndefined$$1,
        isContextSelector: isContextSelector$$1,
        getContextSelectors: getContextSelectors$$1,
        toJQuery: toJQuery$$1,
        toNode: toNode$$1,
        toBoolean: toBoolean$$1,
        toNumber: toNumber$$1,
        toList: toList$$1,
        toMedia: toMedia$$1,
        coerce: coerce$$1,
        toMs: toMs$$1,
        swap: swap$$1,
        ajax: $.ajax,
        contains: $.contains,
        each: $.each,
        Event: $.Event,
        extend: $.extend,
        map: $.map,
        merge: $.merge,
        isArray: $.isArray,
        isNumeric: $.isNumeric,
        isFunction: $.isFunction,
        isPlainObject: $.isPlainObject,
        MouseTracker: MouseTracker$$1,
        mergeOptions: mergeOptions$$1,
        position: position$$1,
        getDimensions: getDimensions$$1,
        offsetTop: offsetTop$$1,
        flipPosition: flipPosition$$1,
        isTouch: isTouch$$1
    });

    var boot = function (UIkit) {

        if (Observer) {

            if (document.body) {

                init();

            } else {

                (new Observer(function () {

                    if (document.body) {
                        this.disconnect();
                        init();
                    }

                })).observe(document.documentElement, {childList: true, subtree: true});

            }

        } else {

            ready$$1(function () {
                apply(document.body, UIkit.connect);
                on$$1(document.documentElement, 'DOMNodeInserted', function (e) {
                    return apply(e.target, UIkit.connect);
                });
                on$$1(document.documentElement, 'DOMNodeRemoved', function (e) {
                    return apply(e.target, UIkit.disconnect);
                });
            });

        }

        function init() {

            apply(document.body, UIkit.connect);

            (new Observer(function (mutations) {
                    return mutations.forEach(function (ref) {
                        var addedNodes = ref.addedNodes;
                        var removedNodes = ref.removedNodes;
                        var target = ref.target;


                        for (var i = 0; i < addedNodes.length; i++) {
                            apply(addedNodes[i], UIkit.connect);
                        }

                        for (i = 0; i < removedNodes.length; i++) {
                            apply(removedNodes[i], UIkit.disconnect);
                        }

                        UIkit.update('update', target, true);

                    });
                }
            )).observe(document.documentElement, {
                childList: true,
                subtree: true,
                characterData: true,
                attributes: true,
                attributeFilter: ['href']
            });

            UIkit._initialized = true;
        }

        function apply(node, fn) {

            if (node.nodeType !== Node.ELEMENT_NODE || node.hasAttribute('uk-no-boot')) {
                return;
            }

            fn(node);
            node = node.firstChild;
            while (node) {
                var next = node.nextSibling;
                apply(node, fn);
                node = next;
            }
        }

    };

    var globalAPI = function (UIkit) {

        var DATA = UIkit.data;

        UIkit.use = function (plugin) {

            if (plugin.installed) {
                return;
            }

            plugin.call(null, this);
            plugin.installed = true;

            return this;
        };

        UIkit.mixin = function (mixin, component) {
            component = (isString$$1(component) ? UIkit.components[component] : component) || this;
            mixin = mergeOptions$$1({}, mixin);
            mixin.mixins = component.options.mixins;
            delete component.options.mixins;
            component.options = mergeOptions$$1(mixin, component.options);
        };

        UIkit.extend = function (options) {

            options = options || {};

            var Super = this, name = options.name || Super.options.name;
            var Sub = createClass(name || 'UIkitComponent');

            Sub.prototype = Object.create(Super.prototype);
            Sub.prototype.constructor = Sub;
            Sub.options = mergeOptions$$1(Super.options, options);

            Sub['super'] = Super;
            Sub.extend = Super.extend;

            return Sub;
        };

        UIkit.update = function (e, element, parents) {
            if (parents === void 0) parents = false;


            e = createEvent$$1(e || 'update');

            if (!element) {

                update(UIkit.instances, e);
                return;

            }

            element = toNode$$1(element);

            if (parents) {

                do {

                    update(element[DATA], e);
                    element = element.parentNode;

                } while (element)

            } else {

                apply(element, function (element) {
                    return update(element[DATA], e);
                });

            }

        };

        var container;
        Object.defineProperty(UIkit, 'container', {

            get: function get() {
                return container || document.body;
            },

            set: function set(element) {
                container = element;
            }

        });

    };

    function createClass(name) {
        return new Function(("return function " + (classify$$1(name)) + " (options) { this._init(options); }"))();
    }

    function apply(node, fn) {

        if (node.nodeType !== Node.ELEMENT_NODE) {
            return;
        }

        fn(node);
        node = node.firstChild;
        while (node) {
            apply(node, fn);
            node = node.nextSibling;
        }
    }

    function update(data, e) {

        if (!data) {
            return;
        }

        for (var name in data) {
            if (data[name]._isReady) {
                data[name]._callUpdate(e);
            }
        }

    }

    var hooksAPI = function (UIkit) {

        UIkit.prototype._callHook = function (hook) {
            var this$1 = this;


            var handlers = this.$options[hook];

            if (handlers) {
                handlers.forEach(function (handler) {
                    return handler.call(this$1);
                });
            }
        };

        UIkit.prototype._callReady = function () {

            if (this._isReady) {
                return;
            }

            this._isReady = true;
            this._callHook('ready');
            this._callUpdate();
        };

        UIkit.prototype._callConnected = function () {
            var this$1 = this;


            if (this._connected) {
                return;
            }

            if (!~UIkit.elements.indexOf(this.$options.el)) {
                UIkit.elements.push(this.$options.el);
            }

            UIkit.instances[this._uid] = this;

            this._initEvents();

            this._callHook('connected');
            this._connected = true;

            this._initObserver();

            if (!this._isReady) {
                ready$$1(function () {
                    return this$1._callReady();
                });
            }

            this._callUpdate();
        };

        UIkit.prototype._callDisconnected = function () {

            if (!this._connected) {
                return;
            }

            if (this._observer) {
                this._observer.disconnect();
                this._observer = null;
            }

            var index = UIkit.elements.indexOf(this.$options.el);

            if (~index) {
                UIkit.elements.splice(index, 1);
            }

            delete UIkit.instances[this._uid];

            this._initEvents(true);
            this._callHook('disconnected');

            this._connected = false;

        };

        UIkit.prototype._callUpdate = function (e) {
            var this$1 = this;


            e = createEvent$$1(e || 'update');

            if (e.type === 'update') {
                this._computeds = {};
            }

            var updates = this.$options.update;

            if (!updates) {
                return;
            }

            updates.forEach(function (update, i) {

                if (e.type !== 'update' && (!update.events || !~update.events.indexOf(e.type))) {
                    return;
                }

                if (e.sync) {

                    if (update.read) {
                        update.read.call(this$1, e);
                    }

                    if (update.write) {
                        update.write.call(this$1, e);
                    }

                    return;

                }

                if (update.read && !~fastdom$$1.reads.indexOf(this$1._frames.reads[i])) {
                    this$1._frames.reads[i] = fastdom$$1.measure(function () {
                        update.read.call(this$1, e);
                        delete this$1._frames.reads[i];
                    });
                }

                if (update.write && !~fastdom$$1.writes.indexOf(this$1._frames.writes[i])) {
                    this$1._frames.writes[i] = fastdom$$1.mutate(function () {
                        update.write.call(this$1, e);
                        delete this$1._frames.writes[i];
                    });
                }

            });

        };

    };

    var stateAPI = function (UIkit) {

        var uid = 0;

        UIkit.prototype.props = {};

        UIkit.prototype._init = function (options) {

            options = options || {};
            options = this.$options = mergeOptions$$1(this.constructor.options, options, this);

            this.$el = null;
            this.$name = UIkit.prefix + hyphenate$$1(this.$options.name);
            this.$props = {};

            this._uid = uid++;
            this._initData();
            this._initMethods();
            this._initComputeds();
            this._callHook('created');

            this._frames = {reads: {}, writes: {}};

            if (options.el) {
                this.$mount(options.el);
            }
        };

        UIkit.prototype._initData = function () {
            var this$1 = this;


            var defaults = $.extend(true, {}, this.$options.defaults),
                data = this.$options.data || {},
                args = this.$options.args || [],
                props = this.$options.props || {};

            if (!defaults) {
                return;
            }

            if (args.length && $.isArray(data)) {
                data = data.slice(0, args.length).reduce(function (data, value, index) {
                    if ($.isPlainObject(value)) {
                        $.extend(data, value);
                    } else {
                        data[args[index]] = value;
                    }
                    return data;
                }, {});
            }

            for (var key in defaults) {
                this$1.$props[key] = this$1[key] = hasOwn$$1(data, key) ? coerce$$1(props[key], data[key], this$1.$options.el) : defaults[key];
            }
        };

        UIkit.prototype._initMethods = function () {
            var this$1 = this;


            var methods = this.$options.methods;

            if (methods) {
                for (var key in methods) {
                    this$1[key] = bind$$1(methods[key], this$1);
                }
            }
        };

        UIkit.prototype._initComputeds = function () {
            var this$1 = this;


            var computed = this.$options.computed;

            this._computeds = {};

            if (computed) {
                for (var key in computed) {
                    registerComputed(this$1, key, computed[key]);
                }
            }
        };

        UIkit.prototype._initProps = function (props) {
            var this$1 = this;


            this._computeds = {};
            $.extend(this.$props, props || this._getProps());

            var exclude = [this.$options.computed, this.$options.methods];
            for (var key in this$1.$props) {
                if (notIn(exclude, key)) {
                    this$1[key] = this$1.$props[key];
                }
            }
        };

        UIkit.prototype._initEvents = function (unbind) {
            var this$1 = this;


            var events = this.$options.events;

            if (events) {

                events.forEach(function (event) {

                    if (!hasOwn$$1(event, 'handler')) {
                        for (var key in event) {
                            registerEvent(this$1, unbind, event[key], key);
                        }
                    } else {
                        registerEvent(this$1, unbind, event);
                    }

                });
            }
        };

        UIkit.prototype._initObserver = function () {
            var this$1 = this;


            if (this._observer || !this.$options.props || !this.$options.attrs || !Observer) {
                return;
            }

            var attrs = ($.isArray(this.$options.attrs)
                    ? this.$options.attrs
                    : Object.keys(this.$options.props).map(function (key) {
                        return hyphenate$$1(key);
                    })
            );

            this._observer = new Observer(function () {

                var data = this$1._getProps();
                if (attrs.some(function (key) {
                    return !equals(data[key], this$1.$props[key]);
                })) {
                    this$1.$reset(data);
                }

            });

            this._observer.observe(this.$options.el, {
                attributes: true,
                attributeFilter: attrs.concat([this.$name, ("data-" + (this.$name))])
            });
        };

        UIkit.prototype._getProps = function () {

            var data = {},
                el = this.$el[0],
                args = this.$options.args || [],
                props = this.$options.props || {},
                options = el.getAttribute(this.$name) || el.getAttribute(("data-" + (this.$name))),
                key, prop;

            if (!props) {
                return data;
            }

            for (key in props) {
                prop = hyphenate$$1(key);
                if (el.hasAttribute(prop)) {

                    var value = coerce$$1(props[key], el.getAttribute(prop), el);

                    if (prop === 'target' && (!value || value.lastIndexOf('_', 0) === 0)) {
                        continue;
                    }

                    data[key] = value;
                }
            }

            if (!options) {
                return data;
            }

            if (options[0] === '{') {
                try {
                    options = JSON.parse(options);
                } catch (e) {
                    console.warn("Invalid JSON.");
                    options = {};
                }
            } else if (args.length && !~options.indexOf(':')) {
                options = ((obj = {}, obj[args[0]] = options, obj));
                var obj;
            } else {
                var tmp = {};
                options.split(';').forEach(function (option) {
                    var ref = option.split(/:(.+)/);
                    var key = ref[0];
                    var value = ref[1];
                    if (key && value) {
                        tmp[key.trim()] = value.trim();
                    }
                });
                options = tmp;
            }

            for (key in options || {}) {
                prop = camelize$$1(key);
                if (props[prop] !== undefined) {
                    data[prop] = coerce$$1(props[prop], options[key], el);
                }
            }

            return data;
        };

    };

    function registerComputed(component, key, cb) {
        Object.defineProperty(component, key, {

            enumerable: true,

            get: function get() {

                if (!hasOwn$$1(component._computeds, key)) {
                    component._computeds[key] = cb.call(component);
                }

                return component._computeds[key];
            },

            set: function set(value) {
                component._computeds[key] = value;
            }

        });
    }

    function registerEvent(component, unbind, event, key) {

        if (!$.isPlainObject(event)) {
            event = ({name: key, handler: event});
        }

        var name = event.name;
        var el = event.el;
        var delegate = event.delegate;
        var self = event.self;
        var filter = event.filter;
        var handler = event.handler;
        var namespace = "." + (component.$options.name) + "." + (component._uid);

        el = el && el.call(component) || component.$el;

        name = name.split(' ').map(function (name) {
            return (name + "." + namespace);
        }).join(' ');

        if (unbind) {

            el.off(name);

        } else {

            if (filter && !filter.call(component)) {
                return;
            }

            handler = isString$$1(handler) ? component[handler] : bind$$1(handler, component);

            if (self) {
                handler = selfFilter(handler, component);
            }

            if (delegate) {
                el.on(name, isString$$1(delegate) ? delegate : delegate.call(component), handler);
            } else {
                el.on(name, handler);
            }
        }

    }

    function selfFilter(handler, context) {
        return function selfHandler(e) {
            if (e.target === e.currentTarget) {
                return handler.call(context, e)
            }
        }
    }

    function notIn(options, key) {
        return options.every(function (arr) {
            return !arr || !hasOwn$$1(arr, key);
        });
    }

    function equals(a, b) {
        return isUndefined$$1(a) || a === b || isJQuery$$1(a) && isJQuery$$1(b) && a.is(b);
    }

    var instanceAPI = function (UIkit) {

        var DATA = UIkit.data;

        UIkit.prototype.$mount = function (el) {

            var name = this.$options.name;

            if (!el[DATA]) {
                el[DATA] = {};
            }

            if (el[DATA][name]) {
                console.warn(("Component \"" + name + "\" is already mounted on element: "), el);
                return;
            }

            el[DATA][name] = this;

            this.$el = $__default(el);

            this._initProps();

            this._callHook('init');

            if (document.documentElement.contains(el)) {
                this._callConnected();
            }
        };

        UIkit.prototype.$emit = function (e) {
            this._callUpdate(e);
        };

        UIkit.prototype.$emitSync = function (e) {
            this._callUpdate(createEvent$$1(e || 'update', true, false, {sync: true}));
        };

        UIkit.prototype.$update = function (e, parents) {
            UIkit.update(e, this.$el, parents);
        };

        UIkit.prototype.$updateSync = function (e, parents) {
            this.$update(createEvent$$1(e || 'update', true, false, {sync: true}), parents);
        };

        UIkit.prototype.$reset = function (data) {
            this._callDisconnected();
            this._initProps(data);
            this._callConnected();
        };

        UIkit.prototype.$destroy = function (remove) {
            if (remove === void 0) remove = false;


            var el = this.$options.el;

            if (el) {
                this._callDisconnected();
            }

            this._callHook('destroy');

            if (!el || !el[DATA]) {
                return;
            }

            delete el[DATA][this.$options.name];

            if (!Object.keys(el[DATA]).length) {
                delete el[DATA];
            }

            if (remove) {
                this.$el.remove();
            }
        };

    };

    var componentAPI = function (UIkit) {

        var DATA = UIkit.data;

        UIkit.components = {};

        UIkit.component = function (id, options) {

            var name = camelize$$1(id);

            if ($.isPlainObject(options)) {
                options.name = name;
                options = UIkit.extend(options);
            } else {
                options.options.name = name;
            }

            UIkit.components[name] = options;

            UIkit[name] = function (element, data) {
                var i = arguments.length, argsArray = Array(i);
                while (i--) argsArray[i] = arguments[i];


                if ($.isPlainObject(element)) {
                    return new UIkit.components[name]({data: element});
                }

                if (UIkit.components[name].options.functional) {
                    return new UIkit.components[name]({data: [].concat(argsArray)});
                }

                return $__default(element).toArray().map(function (element) {
                        return UIkit.getComponent(element, name) || new UIkit.components[name]({
                            el: element,
                            data: data || {}
                        });
                    }
                )[0];
            };

            if (UIkit._initialized && !options.options.functional) {
                fastdom$$1.measure(function () {
                    return UIkit[name](("[uk-" + id + "],[data-uk-" + id + "]"));
                });
            }

            return UIkit.components[name];
        };

        UIkit.getComponents = function (element) {
            return element && (element = isJQuery$$1(element) ? element[0] : element) && element[DATA] || {};
        };
        UIkit.getComponent = function (element, name) {
            return UIkit.getComponents(element)[name];
        };

        UIkit.connect = function (node) {

            var name;

            if (node[DATA]) {
                for (name in node[DATA]) {
                    node[DATA][name]._callConnected();
                }
            }

            for (var i = 0; i < node.attributes.length; i++) {

                name = node.attributes[i].name;

                if (name.lastIndexOf('uk-', 0) === 0 || name.lastIndexOf('data-uk-', 0) === 0) {

                    name = camelize$$1(name.replace('data-uk-', '').replace('uk-', ''));

                    if (UIkit[name]) {
                        UIkit[name](node);
                    }
                }
            }

        };

        UIkit.disconnect = function (node) {
            for (var name in node[DATA]) {
                node[DATA][name]._callDisconnected();
            }
        };

    };

    var UIkit$2 = function (options) {
        this._init(options);
    };

    UIkit$2.util = util;
    UIkit$2.data = '__uikit__';
    UIkit$2.prefix = 'uk-';
    UIkit$2.options = {};
    UIkit$2.instances = {};
    UIkit$2.elements = [];

    globalAPI(UIkit$2);
    hooksAPI(UIkit$2);
    stateAPI(UIkit$2);
    instanceAPI(UIkit$2);
    componentAPI(UIkit$2);

    var Class = {

        init: function init() {
            this.$el.addClass(this.$name);
        }

    };

    var Toggable = {

        props: {
            cls: Boolean,
            animation: 'list',
            duration: Number,
            origin: String,
            transition: String,
            queued: Boolean
        },

        defaults: {
            cls: false,
            animation: [false],
            duration: 200,
            origin: false,
            transition: 'linear',
            queued: false,

            initProps: {
                overflow: '',
                height: '',
                paddingTop: '',
                paddingBottom: '',
                marginTop: '',
                marginBottom: ''
            },

            hideProps: {
                overflow: 'hidden',
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 0,
                marginBottom: 0
            }

        },

        computed: {

            hasAnimation: function hasAnimation() {
                return !!this.animation[0];
            },

            hasTransition: function hasTransition() {
                return this.hasAnimation && this.animation[0] === true;
            }

        },

        methods: {

            toggleElement: function toggleElement(targets, show, animate$$1) {
                var this$1 = this;


                var toggles, body = document.body, scroll = body.scrollTop,
                    all = function (targets) {
                        return promise$$1.all(targets.toArray().map(function (el) {
                            return this$1._toggleElement(el, show, animate$$1);
                        })).then(null, function () {
                        });
                    },
                    delay = function (targets) {
                        var def = all(targets);
                        this$1._queued = null;
                        body.scrollTop = scroll;
                        return def;
                    };

                targets = $__default(targets);

                if (!this.hasAnimation || !this.queued || targets.length < 2) {
                    return all(targets);
                }

                if (this._queued) {
                    return delay(targets.not(this._queued));
                }

                this._queued = targets.not(toggles = targets.filter(function (_, el) {
                    return this$1.isToggled(el);
                }));

                return all(toggles).then(function () {
                    return this$1._queued && delay(this$1._queued);
                });
            },

            toggleNow: function toggleNow(targets, show) {
                var this$1 = this;

                return promise$$1.all($__default(targets).toArray().map(function (el) {
                    return this$1._toggleElement(el, show, false);
                })).then(null, function () {
                });
            },

            isToggled: function isToggled(el) {
                el = el && $__default(el) || this.$el;
                return this.cls ? el.hasClass(this.cls.split(' ')[0]) : !el.attr('hidden');
            },

            updateAria: function updateAria(el) {
                if (this.cls === false) {
                    el.attr('aria-hidden', !this.isToggled(el));
                }
            },

            _toggleElement: function _toggleElement(el, show, animate$$1) {
                var this$1 = this;


                el = $__default(el);

                if (Animation$$1.inProgress(el)) {
                    return Animation$$1.cancel(el).then(function () {
                        return this$1._toggleElement(el, show, animate$$1);
                    });
                }

                show = typeof show === 'boolean' ? show : !this.isToggled(el);

                var event = $.Event(("before" + (show ? 'show' : 'hide')));
                el.trigger(event, [this]);

                if (event.result === false) {
                    return promise$$1.reject();
                }

                var def = (animate$$1 === false || !this.hasAnimation
                        ? this._toggleImmediate
                        : this.hasTransition
                            ? this._toggleHeight
                            : this._toggleAnimation
                )(el, show);

                el.trigger(show ? 'show' : 'hide', [this]);
                return def.then(function () {
                    return el.trigger(show ? 'shown' : 'hidden', [this$1]);
                });
            },

            _toggle: function _toggle(el, toggled) {

                el = $__default(el);

                if (this.cls) {
                    el.toggleClass(this.cls, ~this.cls.indexOf(' ') ? undefined : toggled);
                } else {
                    el.attr('hidden', !toggled);
                }

                el.find('[autofocus]:visible').focus();

                this.updateAria(el);
                UIkit$2.update(null, el);
            },

            _toggleImmediate: function _toggleImmediate(el, show) {
                this._toggle(el, show);
                return promise$$1.resolve();
            },

            _toggleHeight: function _toggleHeight(el, show) {
                var this$1 = this;


                var inProgress = Transition$$1.inProgress(el),
                    inner = parseFloat(el.children().first().css('margin-top')) + parseFloat(el.children().last().css('margin-bottom')),
                    height = el[0].offsetHeight ? el.height() + (inProgress ? 0 : inner) : 0,
                    endHeight;

                return Transition$$1.cancel(el).then(function () {

                    if (!this$1.isToggled(el)) {
                        this$1._toggle(el, true);
                    }

                    el.height('');

                    return promise$$1(function (resolve) {
                            return requestAnimationFrame(function () {

                                endHeight = el.height() + (inProgress ? 0 : inner);
                                el.height(height);

                                (show
                                    ? Transition$$1.start(el, $.extend(this$1.initProps, {
                                        overflow: 'hidden',
                                        height: endHeight
                                    }), Math.round(this$1.duration * (1 - height / endHeight)), this$1.transition)
                                    : Transition$$1.start(el, this$1.hideProps, Math.round(this$1.duration * (height / endHeight)), this$1.transition).then(function () {
                                        this$1._toggle(el, false);
                                        el.css(this$1.initProps);
                                    })).then(resolve);

                            });
                        }
                    );

                });

            },

            _toggleAnimation: function _toggleAnimation(el, show) {
                var this$1 = this;


                if (show) {
                    this._toggle(el, true);
                    return Animation$$1.in(el, this.animation[0], this.duration, this.origin);
                }

                return Animation$$1.out(el, this.animation[1] || this.animation[0], this.duration, this.origin).then(function () {
                    return this$1._toggle(el, false);
                });
            }

        }

    };

    var active;

    var Modal = {

        mixins: [Class, Toggable],

        props: {
            clsPanel: String,
            selClose: String,
            escClose: Boolean,
            bgClose: Boolean,
            stack: Boolean,
            container: Boolean
        },

        defaults: {
            cls: 'uk-open',
            escClose: true,
            bgClose: true,
            overlay: true,
            stack: false,
            container: true
        },

        computed: {

            body: function body() {
                return $__default(document.body);
            },

            panel: function panel() {
                return this.$el.find(("." + (this.clsPanel)));
            },

            container: function container() {
                var container = this.$props.container === true && UIkit$2.container || this.$props.container && toJQuery$$1(this.$props.container);
                return container && toNode$$1(container);
            },

            transitionElement: function transitionElement() {
                return this.panel;
            },

            transitionDuration: function transitionDuration() {
                return toMs$$1(this.transitionElement.css('transition-duration'));
            }

        },

        events: [

            {

                name: 'click',

                delegate: function delegate() {
                    return this.selClose;
                },

                handler: function handler(e) {
                    e.preventDefault();
                    this.hide();
                }

            },

            {

                name: 'toggle',

                handler: function handler(e) {
                    e.preventDefault();
                    this.toggle();
                }

            },

            {

                name: 'beforeshow',

                self: true,

                handler: function handler() {
                    var this$1 = this;


                    if (this.isToggled()) {
                        return false;
                    }

                    var prev = active && active !== this && active;

                    active = this;

                    if (prev) {
                        if (this.stack) {
                            this.prev = prev;
                        } else {
                            prev.hide().then(this.show);
                            return false;
                        }
                    } else {
                        requestAnimationFrame(function () {
                            return register(this$1.$options.name);
                        });
                    }

                    if (!prev) {
                        this.scrollbarWidth = window.innerWidth - docElement$$1[0].offsetWidth;
                        this.body.css('overflow-y', this.scrollbarWidth && this.overlay ? 'scroll' : '');
                    }

                    docElement$$1.addClass(this.clsPage);

                }

            },

            {

                name: 'beforehide',

                self: true,

                handler: function handler() {

                    if (!this.isToggled()) {
                        return false;
                    }

                    active = active && active !== this && active || this.prev;

                    if (!active) {
                        deregister(this.$options.name);
                    }

                }

            },

            {

                name: 'hidden',

                self: true,

                handler: function handler() {
                    if (!active) {
                        docElement$$1.removeClass(this.clsPage);
                        this.body.css('overflow-y', '');
                    }
                }

            }

        ],

        methods: {

            toggle: function toggle() {
                return this.isToggled() ? this.hide() : this.show();
            },

            show: function show() {
                var this$1 = this;

                if (this.container && !this.$el.parent().is(this.container)) {
                    this.container.appendChild(this.$el[0]);
                    return promise$$1(function (resolve) {
                            return requestAnimationFrame(function () {
                                    return resolve(this$1.show());
                                }
                            );
                        }
                    )
                }

                return this.toggleNow(this.$el, true);
            },

            hide: function hide() {
                return this.toggleNow(this.$el, false);
            },

            getActive: function getActive() {
                return active;
            },

            _toggleImmediate: function _toggleImmediate(el, show) {
                var this$1 = this;

                this._toggle(el, show);

                return this.transitionDuration ? promise$$1(function (resolve, reject) {

                    if (this$1._transition) {
                        this$1.transitionElement.off(transitionend, this$1._transition.handler);
                        this$1._transition.reject();
                    }

                    this$1._transition = {
                        reject: reject,
                        handler: function () {
                            resolve();
                            this$1._transition = null;
                        }
                    };

                    this$1.transitionElement.one(transitionend, this$1._transition.handler);

                }) : promise$$1.resolve();
            },
        }

    };

    function register(name) {
        doc$$1.on((obj = {}, obj[("click." + name)] = function (e) {
            if (active && active.bgClose && !e.isDefaultPrevented() && !isWithin$$1(e.target, active.panel)) {
                active.hide();
            }
        }, obj[("keydown." + name)] = function (e) {
            if (e.keyCode === 27 && active && active.escClose) {
                e.preventDefault();
                active.hide();
            }
        }, obj));
        var obj;
    }

    function deregister(name) {
        doc$$1.off(("click." + name)).off(("keydown." + name));
    }

    var Position = {

        props: {
            pos: String,
            offset: null,
            flip: Boolean,
            clsPos: String
        },

        defaults: {
            pos: !isRtl$$1 ? 'bottom-left' : 'bottom-right',
            flip: true,
            offset: false,
            clsPos: ''
        },

        computed: {

            pos: function pos() {
                return (this.$props.pos + (!~this.$props.pos.indexOf('-') ? '-center' : '')).split('-');
            },

            dir: function dir() {
                return this.pos[0];
            },

            align: function align() {
                return this.pos[1];
            }

        },

        methods: {

            positionAt: function positionAt(element, target, boundary) {

                removeClass$$1(element, ((this.clsPos) + "-(top|bottom|left|right)(-[a-z]+)?")).css({
                    top: '',
                    left: ''
                });

                var offset = toNumber$$1(this.offset) || 0,
                    axis = this.getAxis(),
                    flipped = position$$1(
                        element,
                        target,
                        axis === 'x' ? ((flipPosition$$1(this.dir)) + " " + (this.align)) : ((this.align) + " " + (flipPosition$$1(this.dir))),
                        axis === 'x' ? ((this.dir) + " " + (this.align)) : ((this.align) + " " + (this.dir)),
                        axis === 'x' ? ("" + (this.dir === 'left' ? -1 * offset : offset)) : (" " + (this.dir === 'top' ? -1 * offset : offset)),
                        null,
                        this.flip,
                        boundary
                    );

                this.dir = axis === 'x' ? flipped.target.x : flipped.target.y;
                this.align = axis === 'x' ? flipped.target.y : flipped.target.x;

                element.toggleClass(((this.clsPos) + "-" + (this.dir) + "-" + (this.align)), this.offset === false);

            },

            getAxis: function getAxis() {
                return this.dir === 'top' || this.dir === 'bottom' ? 'y' : 'x';
            }

        }

    };

    var mixin = function (UIkit) {

        UIkit.mixin.class = Class;
        UIkit.mixin.modal = Modal;
        UIkit.mixin.position = Position;
        UIkit.mixin.toggable = Toggable;

    };

    var Accordion = function (UIkit) {

        UIkit.component('accordion', {

            mixins: [Class, Toggable],

            props: {
                targets: String,
                active: null,
                collapsible: Boolean,
                multiple: Boolean,
                toggle: String,
                content: String,
                transition: String
            },

            defaults: {
                targets: '> *',
                active: false,
                animation: [true],
                collapsible: true,
                multiple: false,
                clsOpen: 'uk-open',
                toggle: '> .uk-accordion-title',
                content: '> .uk-accordion-content',
                transition: 'ease'
            },

            computed: {

                items: function items() {
                    var this$1 = this;

                    var items = $__default(this.targets, this.$el);
                    this._changed = !this._items || items.length !== this._items.length || items.toArray().some(function (el, i) {
                        return el !== this$1._items.get(i);
                    });
                    return this._items = items;
                }

            },

            connected: function connected() {
                this.$emitSync();
            },

            events: [

                {

                    name: 'click',

                    delegate: function delegate() {
                        return ((this.targets) + " " + (this.$props.toggle));
                    },

                    handler: function handler(e) {
                        e.preventDefault();
                        this.toggle(this.items.find(this.$props.toggle).index(e.currentTarget));
                    }

                }

            ],

            update: function update() {
                var this$1 = this;


                if (!this.items || !this._changed) {
                    return;
                }

                this.items.each(function (i, el) {
                    el = $__default(el);
                    this$1.toggleNow(el.find(this$1.content), el.hasClass(this$1.clsOpen));
                });

                var active = this.active !== false && toJQuery$$1(this.items.eq(Number(this.active))) || !this.collapsible && toJQuery$$1(this.items.eq(0));
                if (active && !active.hasClass(this.clsOpen)) {
                    this.toggle(active, false);
                }

            },

            methods: {

                toggle: function toggle(item, animate$$1) {
                    var this$1 = this;


                    var index = getIndex$$1(item, this.items),
                        active = this.items.filter(("." + (this.clsOpen)));

                    item = this.items.eq(index);

                    item.add(!this.multiple && active).each(function (i, el) {

                        el = $__default(el);

                        var isItem = el.is(item), state = isItem && !el.hasClass(this$1.clsOpen);

                        if (!state && isItem && !this$1.collapsible && active.length < 2) {
                            return;
                        }

                        el.toggleClass(this$1.clsOpen, state);

                        var content = el[0]._wrapper ? el[0]._wrapper.children().first() : el.find(this$1.content);

                        if (!el[0]._wrapper) {
                            el[0]._wrapper = content.wrap('<div>').parent().attr('hidden', state);
                        }

                        this$1._toggleImmediate(content, true);
                        this$1.toggleElement(el[0]._wrapper, state, animate$$1).then(function () {
                            if (el.hasClass(this$1.clsOpen) === state) {

                                if (!state) {
                                    this$1._toggleImmediate(content, false);
                                }

                                el[0]._wrapper = null;
                                content.unwrap();
                            }
                        });

                    });
                }

            }

        });

    };

    var Alert = function (UIkit) {

        UIkit.component('alert', {

            mixins: [Class, Toggable],

            args: 'animation',

            props: {
                close: String
            },

            defaults: {
                animation: [true],
                close: '.uk-alert-close',
                duration: 150,
                hideProps: {opacity: 0}
            },

            events: [

                {

                    name: 'click',

                    delegate: function delegate() {
                        return this.close;
                    },

                    handler: function handler(e) {
                        e.preventDefault();
                        this.closeAlert();
                    }

                }

            ],

            methods: {

                closeAlert: function closeAlert() {
                    var this$1 = this;

                    this.toggleElement(this.$el).then(function () {
                        return this$1.$destroy(true);
                    });
                }

            }

        });

    };

    var Cover = function (UIkit) {

        UIkit.component('cover', {

            mixins: [Class],

            props: {
                automute: Boolean,
                width: Number,
                height: Number
            },

            defaults: {automute: true},

            computed: {

                el: function el() {
                    return this.$el[0];
                },

                parent: function parent() {
                    return this.$el.parent()[0];
                }

            },

            ready: function ready$$1() {

                if (!this.$el.is('iframe')) {
                    return;
                }

                this.$el.css('pointerEvents', 'none');

                if (this.automute) {

                    var src = this.$el.attr('src');

                    this.$el
                        .attr('src', ("" + src + (~src.indexOf('?') ? '&' : '?') + "enablejsapi=1&api=1"))
                        .on('load', function (ref) {
                            var target = ref.target;

                            return target.contentWindow.postMessage('{"event": "command", "func": "mute", "method":"setVolume", "value":0}', '*');
                        });
                }
            },

            update: {

                write: function write() {

                    if (this.el.offsetHeight === 0) {
                        return;
                    }

                    this.$el
                        .css({width: '', height: ''})
                        .css(Dimensions$$1.cover(
                            {width: this.width || this.el.clientWidth, height: this.height || this.el.clientHeight},
                            {width: this.parent.offsetWidth, height: this.parent.offsetHeight}
                        ));

                },

                events: ['load', 'resize']

            },

            events: {

                loadedmetadata: function loadedmetadata() {
                    this.$emit();
                }

            }

        });

    };

    var Drop = function (UIkit) {

        var active;

        UIkit.component('drop', {

            mixins: [Position, Toggable],

            args: 'pos',

            props: {
                mode: 'list',
                toggle: Boolean,
                boundary: 'jQuery',
                boundaryAlign: Boolean,
                delayShow: Number,
                delayHide: Number,
                clsDrop: String
            },

            defaults: {
                mode: ['click', 'hover'],
                toggle: '- :first',
                boundary: window,
                boundaryAlign: false,
                delayShow: 0,
                delayHide: 800,
                clsDrop: false,
                hoverIdle: 200,
                animation: ['uk-animation-fade'],
                cls: 'uk-open'
            },

            init: function init() {
                this.tracker = new MouseTracker$$1();
                this.clsDrop = this.clsDrop || ("uk-" + (this.$options.name));
                this.clsPos = this.clsDrop;

                this.$el.addClass(this.clsDrop);
            },

            ready: function ready$$1() {

                this.updateAria(this.$el);

                if (this.toggle) {
                    this.toggle = UIkit.toggle(query$$1(this.toggle, this.$el), {target: this.$el, mode: this.mode});
                }

            },

            events: [

                {

                    name: 'click',

                    delegate: function delegate() {
                        return ("." + (this.clsDrop) + "-close");
                    },

                    handler: function handler(e) {
                        e.preventDefault();
                        this.hide(false);
                    }

                },

                {

                    name: 'click',

                    delegate: function delegate() {
                        return 'a[href^="#"]';
                    },

                    handler: function handler(e) {

                        if (e.isDefaultPrevented()) {
                            return;
                        }

                        var id = $__default(e.target).attr('href');

                        if (id.length === 1) {
                            e.preventDefault();
                        }

                        if (id.length === 1 || !isWithin$$1(id, this.$el)) {
                            this.hide(false);
                        }
                    }

                },

                {

                    name: 'toggle',

                    handler: function handler(e, toggle) {

                        if (toggle && !this.$el.is(toggle.target)) {
                            return;
                        }

                        e.preventDefault();

                        if (this.isToggled()) {
                            this.hide(false);
                        } else {
                            this.show(toggle, false);
                        }
                    }

                },

                {

                    name: pointerEnter,

                    filter: function filter() {
                        return ~this.mode.indexOf('hover');
                    },

                    handler: function handler(e) {

                        if (isTouch$$1(e)) {
                            return;
                        }

                        if (active
                            && active !== this
                            && active.toggle
                            && ~active.toggle.mode.indexOf('hover')
                            && !isWithin$$1(e.target, active.$el)
                            && !isWithin$$1(e.target, active.toggle.$el)
                        ) {
                            active.hide(false);
                        }

                        e.preventDefault();
                        this.show(this.toggle);
                    }

                },

                {

                    name: 'toggleshow',

                    handler: function handler(e, toggle) {

                        if (toggle && !this.$el.is(toggle.target)) {
                            return;
                        }

                        e.preventDefault();
                        this.show(toggle || this.toggle);
                    }

                },

                {

                    name: ("togglehide " + pointerLeave),

                    handler: function handler(e, toggle) {

                        if (isTouch$$1(e) || toggle && !this.$el.is(toggle.target)) {
                            return;
                        }

                        e.preventDefault();

                        if (this.toggle && ~this.toggle.mode.indexOf('hover')) {
                            this.hide();
                        }
                    }

                },

                {

                    name: 'beforeshow',

                    self: true,

                    handler: function handler() {
                        this.clearTimers();
                    }

                },

                {

                    name: 'show',

                    self: true,

                    handler: function handler() {
                        this.tracker.init();
                        this.toggle.$el.addClass(this.cls).attr('aria-expanded', 'true');
                        registerEvent();
                    }

                },

                {

                    name: 'beforehide',

                    self: true,

                    handler: function handler() {
                        this.clearTimers();
                    }

                },

                {

                    name: 'hide',

                    handler: function handler(ref) {
                        var target = ref.target;


                        if (!this.$el.is(target)) {
                            active = active === null && isWithin$$1(target, this.$el) && this.isToggled() ? this : active;
                            return;
                        }

                        active = this.isActive() ? null : active;
                        this.toggle.$el.removeClass(this.cls).attr('aria-expanded', 'false').blur().find('a, button').blur();
                        this.tracker.cancel();
                    }

                }

            ],

            update: {

                write: function write() {

                    if (this.isToggled() && !Animation$$1.inProgress(this.$el)) {
                        this.position();
                    }

                },

                events: ['resize']

            },

            methods: {

                show: function show(toggle, delay) {
                    var this$1 = this;
                    if (delay === void 0) delay = true;


                    var show = function () {
                            if (!this$1.isToggled()) {
                                this$1.position();
                                this$1.toggleElement(this$1.$el, true);
                            }
                        },
                        tryShow = function () {

                            this$1.toggle = toggle || this$1.toggle;

                            this$1.clearTimers();

                            if (this$1.isActive()) {
                                return;
                            } else if (delay && active && active !== this$1 && active.isDelaying) {
                                this$1.showTimer = setTimeout(this$1.show, 10);
                                return;
                            } else if (this$1.isParentOf(active)) {

                                if (active.hideTimer) {
                                    active.hide(false);
                                } else {
                                    return;
                                }

                            } else if (active && !this$1.isChildOf(active) && !this$1.isParentOf(active)) {
                                var prev;
                                while (active && active !== prev) {
                                    prev = active;
                                    active.hide(false);
                                }
                            }

                            if (delay && this$1.delayShow) {
                                this$1.showTimer = setTimeout(show, this$1.delayShow);
                            } else {
                                show();
                            }

                            active = this$1;
                        };

                    if (toggle && this.toggle && !this.toggle.$el.is(toggle.$el)) {

                        this.$el.one('hide', tryShow);
                        this.hide(false);

                    } else {
                        tryShow();
                    }
                },

                hide: function hide(delay) {
                    var this$1 = this;
                    if (delay === void 0) delay = true;


                    var hide = function () {
                        return this$1.toggleNow(this$1.$el, false);
                    };

                    this.clearTimers();

                    this.isDelaying = this.tracker.movesTo(this.$el);

                    if (delay && this.isDelaying) {
                        this.hideTimer = setTimeout(this.hide, this.hoverIdle);
                    } else if (delay && this.delayHide) {
                        this.hideTimer = setTimeout(hide, this.delayHide);
                    } else {
                        hide();
                    }
                },

                clearTimers: function clearTimers() {
                    clearTimeout(this.showTimer);
                    clearTimeout(this.hideTimer);
                    this.showTimer = null;
                    this.hideTimer = null;
                    this.isDelaying = false;
                },

                isActive: function isActive() {
                    return active === this;
                },

                isChildOf: function isChildOf(drop) {
                    return drop && drop !== this && isWithin$$1(this.$el, drop.$el);
                },

                isParentOf: function isParentOf(drop) {
                    return drop && drop !== this && isWithin$$1(drop.$el, this.$el);
                },

                position: function position$$1() {

                    removeClass$$1(this.$el, ((this.clsDrop) + "-(stack|boundary)")).css({top: '', left: ''});

                    this.$el.show().toggleClass(((this.clsDrop) + "-boundary"), this.boundaryAlign);

                    var boundary = getDimensions$$1(this.boundary),
                        alignTo = this.boundaryAlign ? boundary : getDimensions$$1(this.toggle.$el);

                    if (this.align === 'justify') {
                        var prop = this.getAxis() === 'y' ? 'width' : 'height';
                        this.$el.css(prop, alignTo[prop]);
                    } else if (this.$el.outerWidth() > Math.max(boundary.right - alignTo.left, alignTo.right - boundary.left)) {
                        this.$el.addClass(((this.clsDrop) + "-stack"));
                        this.$el.trigger('stack', [this]);
                    }

                    this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary);

                    this.$el[0].style.display = '';

                }

            }

        });

        UIkit.drop.getActive = function () {
            return active;
        };

        var registered;

        function registerEvent() {

            if (registered) {
                return;
            }

            registered = true;
            doc$$1.on('click', function (e) {
                var prev;
                while (active && active !== prev && !isWithin$$1(e.target, active.$el) && !(active.toggle && isWithin$$1(e.target, active.toggle.$el))) {
                    prev = active;
                    active.hide(false);
                }
            });
        }

    };

    var Dropdown = function (UIkit) {

        UIkit.component('dropdown', UIkit.components.drop.extend({name: 'dropdown'}));

    };

    var FormCustom = function (UIkit) {

        UIkit.component('form-custom', {

            mixins: [Class],

            args: 'target',

            props: {
                target: Boolean
            },

            defaults: {
                target: false
            },

            computed: {

                input: function input() {
                    return this.$el.find(':input:first');
                },

                state: function state() {
                    return this.input.next();
                },

                target: function target() {
                    return this.$props.target && query$$1(this.$props.target === true ? '> :input:first + :first' : this.$props.target, this.$el)
                }

            },

            connected: function connected() {
                this.input.trigger('change');
            },

            events: [

                {

                    name: 'focusin focusout mouseenter mouseleave',

                    delegate: ':input:first',

                    handler: function handler(ref) {
                        var type = ref.type;

                        this.state.toggleClass(("uk-" + (~type.indexOf('focus') ? 'focus' : 'hover')), ~['focusin', 'mouseenter'].indexOf(type));
                    }

                },

                {

                    name: 'change',

                    handler: function handler() {
                        this.target && this.target[this.target.is(':input') ? 'val' : 'text'](
                            this.input[0].files && this.input[0].files[0]
                                ? this.input[0].files[0].name
                                : this.input.is('select')
                                ? this.input.find('option:selected').text()
                                : this.input.val()
                        );
                    }

                }

            ]

        });

    };

    var Gif = function (UIkit) {

        UIkit.component('gif', {

            update: {

                read: function read() {

                    var inview = isInView$$1(this.$el);

                    if (!this.isInView && inview) {
                        this.$el[0].src = this.$el[0].src;
                    }

                    this.isInView = inview;
                },

                events: ['scroll', 'load', 'resize']
            }

        });

    };

    var Grid = function (UIkit) {

        UIkit.component('grid', UIkit.components.margin.extend({

            mixins: [Class],

            name: 'grid',

            defaults: {
                margin: 'uk-grid-margin',
                clsStack: 'uk-grid-stack'
            },

            update: {

                write: function write() {

                    this.$el.toggleClass(this.clsStack, this.stacks);

                },

                events: ['load', 'resize']

            }

        }));

    };

    var HeightMatch = function (UIkit) {

        UIkit.component('height-match', {

            args: 'target',

            props: {
                target: String,
                row: Boolean
            },

            defaults: {
                target: '> *',
                row: true
            },

            computed: {

                elements: function elements() {
                    return $__default(this.target, this.$el);
                }

            },

            update: {

                read: function read() {
                    var this$1 = this;


                    var lastOffset = false;

                    this.elements.css('minHeight', '');

                    this.rows = !this.row
                        ? [this.match(this.elements)]
                        : this.elements.toArray().reduce(function (rows, el) {

                            if (lastOffset !== el.offsetTop) {
                                rows.push([el]);
                            } else {
                                rows[rows.length - 1].push(el);
                            }

                            lastOffset = el.offsetTop;

                            return rows;

                        }, []).map(function (elements) {
                            return this$1.match($__default(elements));
                        });
                },

                write: function write() {

                    this.rows.forEach(function (ref) {
                            var height = ref.height;
                            var elements = ref.elements;

                            return elements && elements.each(function (_, el) {
                                    return el.style.minHeight = height + "px";
                                }
                            );
                        }
                    );

                },

                events: ['resize']

            },

            methods: {

                match: function match(elements) {

                    if (elements.length < 2) {
                        return {};
                    }

                    var max = 0, heights = [];

                    elements = elements
                        .each(function (_, el) {

                            var $el, style, hidden;

                            if (el.offsetHeight === 0) {
                                $el = $__default(el);
                                style = $el.attr('style') || null;
                                hidden = $el.attr('hidden') || null;

                                $el.attr({
                                    style: (style + ";display:block !important;"),
                                    hidden: null
                                });
                            }

                            max = Math.max(max, el.offsetHeight);
                            heights.push(el.offsetHeight);

                            if ($el) {
                                $el.attr({style: style, hidden: hidden});
                            }

                        })
                        .filter(function (i) {
                            return heights[i] < max;
                        });

                    return {height: max, elements: elements};
                }
            }

        });

    };

    var HeightViewport = function (UIkit) {

        UIkit.component('height-viewport', {

            props: {
                expand: Boolean,
                offsetTop: Boolean,
                offsetBottom: Boolean
            },

            defaults: {
                expand: false,
                offsetTop: false,
                offsetBottom: false
            },

            connected: function connected() {
                this.$emitSync();
            },

            update: {

                write: function write() {

                    this.$el.css('boxSizing', 'border-box');

                    var viewport = window.innerHeight, height, offset = 0;

                    if (this.expand) {

                        this.$el.css({height: '', minHeight: ''});

                        var diff = viewport - document.documentElement.offsetHeight;

                        if (diff > 0) {
                            this.$el.css('min-height', height = this.$el.outerHeight() + diff);
                        }

                    } else {

                        var top = offsetTop$$1(this.$el);

                        if (top < viewport && this.offsetTop) {
                            offset += top;
                        }

                        if (this.offsetBottom === true) {

                            offset += this.$el.next().outerHeight() || 0;

                        } else if ($.isNumeric(this.offsetBottom)) {

                            offset += (viewport / 100) * this.offsetBottom;

                        } else if (this.offsetBottom && this.offsetBottom.substr(-2) === 'px') {

                            offset += parseFloat(this.offsetBottom);

                        } else if (isString$$1(this.offsetBottom)) {

                            var el = query$$1(this.offsetBottom, this.$el);
                            offset += el && el.outerHeight() || 0;

                        }

                        this.$el.css('min-height', height = offset ? ("calc(100vh - " + offset + "px)") : '100vh');

                    }

                    // IE 10-11 fix (min-height on a flex container won't apply to its flex items)
                    this.$el.height('');
                    if (height && viewport - offset >= this.$el.outerHeight()) {
                        this.$el.css('height', height);
                    }

                },

                events: ['load', 'resize']

            }

        });

    };

    var Hover = function (UIkit) {

        ready$$1(function () {

            if (!hasTouch) {
                return;
            }

            var cls = 'uk-hover';

            docElement$$1.on('tap', function (ref) {
                var target = ref.target;

                return $__default(("." + cls)).filter(function (_, el) {
                    return !isWithin$$1(target, el);
                }).removeClass(cls);
            });

            Object.defineProperty(UIkit, 'hoverSelector', {

                set: function set(selector) {
                    docElement$$1.on('tap', selector, function (ref) {
                        var currentTarget = ref.currentTarget;

                        return currentTarget.classList.add(cls);
                    });
                }

            });

            UIkit.hoverSelector = '.uk-animation-toggle, .uk-transition-toggle, [uk-hover]';

        });

    };

    var closeIcon = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"1\" y1=\"1\" x2=\"13\" y2=\"13\"></line><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13\" y1=\"1\" x2=\"1\" y2=\"13\"></line></svg>";

    var closeLarge = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"1\" y1=\"1\" x2=\"19\" y2=\"19\"></line><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"19\" y1=\"1\" x2=\"1\" y2=\"19\"></line></svg>";

    var navbarToggleIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"9\" width=\"20\" height=\"2\"></rect><rect y=\"3\" width=\"20\" height=\"2\"></rect><rect y=\"15\" width=\"20\" height=\"2\"></rect></svg>";

    var overlayIcon = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"19\" y=\"0\" width=\"1\" height=\"40\"></rect><rect x=\"0\" y=\"19\" width=\"40\" height=\"1\"></rect></svg>";

    var paginationNext = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 1 6 6 1 11\"></polyline></svg>";

    var paginationPrevious = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"6 1 1 6 6 11\"></polyline></svg>";

    var searchIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\"></circle><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\"></path></svg>";

    var searchLarge = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" cx=\"17.5\" cy=\"17.5\" r=\"16.5\"></circle><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" x1=\"38\" y1=\"39\" x2=\"29\" y2=\"30\"></line></svg>";

    var searchNavbar = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10.5\" cy=\"10.5\" r=\"9.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"23\" y1=\"23\" x2=\"17\" y2=\"17\"/></svg>";

    var slidenavNext = "<svg width=\"11\" height=\"20\" viewBox=\"0 0 11 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 1 10 10 1 19\"></polyline></svg>";

    var slidenavNextLarge = "<svg width=\"18\" height=\"34\" viewBox=\"0 0 18 34\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"1 1 17 17 1 33\"></polyline></svg>";

    var slidenavPrevious = "<svg width=\"11\" height=\"20\" viewBox=\"0 0 11 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"10 1 1 10 10 19\"></polyline></svg>";

    var slidenavPreviousLarge = "<svg width=\"18\" height=\"34\" viewBox=\"0 0 18 34\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"17 1 1 17 17 33\"></polyline></svg>";

    var spinner = "<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" cx=\"15\" cy=\"15\" r=\"14\"></circle></svg>";

    var totop = "<svg width=\"18\" height=\"10\" viewBox=\"0 0 18 10\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 9 9 1 17 9 \"></polyline></svg>";

    var Icon = function (UIkit) {

        var parsed = {},
            icons = {
                spinner: spinner,
                totop: totop,
                'close-icon': closeIcon,
                'close-large': closeLarge,
                'navbar-toggle-icon': navbarToggleIcon,
                'overlay-icon': overlayIcon,
                'pagination-next': paginationNext,
                'pagination-previous': paginationPrevious,
                'search-icon': searchIcon,
                'search-large': searchLarge,
                'search-navbar': searchNavbar,
                'slidenav-next': slidenavNext,
                'slidenav-next-large': slidenavNextLarge,
                'slidenav-previous': slidenavPrevious,
                'slidenav-previous-large': slidenavPreviousLarge
            };

        UIkit.component('icon', UIkit.components.svg.extend({

            attrs: ['icon', 'ratio'],

            mixins: [Class],

            name: 'icon',

            args: 'icon',

            props: ['icon'],

            defaults: {exclude: ['id', 'style', 'class', 'src']},

            init: function init() {
                this.$el.addClass('uk-icon');

                if (isRtl$$1) {
                    this.icon = swap$$1(swap$$1(this.icon, 'left', 'right'), 'previous', 'next');
                }
            },

            update: {

                read: function read() {

                    if (this.delay) {
                        var icon = this.getIcon();

                        if (icon) {
                            this.delay(icon);
                        }
                    }
                },

                events: ['load']

            },

            methods: {

                getSvg: function getSvg() {
                    var this$1 = this;


                    var icon = this.getIcon();

                    if (!icon) {

                        if (document.readyState !== 'complete') {
                            return promise$$1(function (resolve) {
                                this$1.delay = resolve;
                            });
                        }

                        return promise$$1.reject('Icon not found.');

                    }

                    return promise$$1.resolve(icon);
                },

                getIcon: function getIcon() {

                    if (!icons[this.icon]) {
                        return null;
                    }

                    if (!parsed[this.icon]) {
                        parsed[this.icon] = this.parse(icons[this.icon]);
                    }

                    return parsed[this.icon];
                }

            }

        }));

        [
            'navbar-toggle-icon',
            'overlay-icon',
            'pagination-previous',
            'pagination-next',
            'totop'
        ].forEach(function (name) {
            return registerComponent(name);
        });

        [
            'slidenav-previous',
            'slidenav-next'
        ].forEach(function (name) {
            return registerComponent(name, {

                init: function init() {
                    this.$el.addClass('uk-slidenav');

                    if (this.$el.hasClass('uk-slidenav-large')) {
                        this.icon += '-large';
                    }
                }

            });
        });

        registerComponent('search-icon', {

            init: function init() {
                if (this.$el.hasClass('uk-search-icon') && this.$el.parents('.uk-search-large').length) {
                    this.icon = 'search-large';
                } else if (this.$el.parents('.uk-search-navbar').length) {
                    this.icon = 'search-navbar';
                }
            }

        });

        registerComponent('close', {

            init: function init() {
                this.icon = "close-" + (this.$el.hasClass('uk-close-large') ? 'large' : 'icon');
            }

        });

        registerComponent('spinner', {

            connected: function connected() {
                var this$1 = this;


                this.height = this.width = this.$el.width();

                this.svg.then(function (svg) {

                    var circle = $__default(svg).find('circle'),
                        diameter = Math.floor(this$1.width / 2);

                    svg.setAttribute('viewBox', ("0 0 " + (this$1.width) + " " + (this$1.width)));

                    circle.attr({
                        cx: diameter,
                        cy: diameter,
                        r: diameter - parseFloat(circle.css('stroke-width') || 0)
                    });
                });
            }

        });

        UIkit.icon.add = function (added) {
            return $.extend(icons, added);
        };

        function registerComponent(name, mixin) {

            UIkit.component(name, UIkit.components.icon.extend({

                name: name,

                mixins: mixin ? [mixin] : [],

                defaults: {
                    icon: name
                }

            }));
        }

    };

    var Margin = function (UIkit) {

        UIkit.component('margin', {

            props: {
                margin: String,
                firstColumn: Boolean
            },

            defaults: {
                margin: 'uk-margin-small-top',
                firstColumn: 'uk-first-column'
            },

            update: {

                read: function read() {
                    var this$1 = this;


                    if (this.$el[0].offsetHeight === 0) {
                        this.hidden = true;
                        return;
                    }

                    this.hidden = false;
                    this.stacks = true;

                    var columns = this.$el.children().filter(function (_, el) {
                        return el.offsetHeight > 0;
                    });

                    this.rows = [[columns.get(0)]];

                    columns.slice(1).each(function (_, el) {

                        var top = Math.ceil(el.offsetTop), bottom = top + el.offsetHeight;

                        for (var index = this$1.rows.length - 1; index >= 0; index--) {
                            var row = this$1.rows[index], rowTop = Math.ceil(row[0].offsetTop);

                            if (top >= rowTop + row[0].offsetHeight) {
                                this$1.rows.push([el]);
                                break;
                            }

                            if (bottom > rowTop) {

                                this$1.stacks = false;

                                if (el.offsetLeft < row[0].offsetLeft) {
                                    row.unshift(el);
                                    break;
                                }

                                row.push(el);
                                break;
                            }

                            if (index === 0) {
                                this$1.rows.splice(index, 0, [el]);
                                break;
                            }

                        }

                    });

                },

                write: function write() {
                    var this$1 = this;


                    if (this.hidden) {
                        return;
                    }

                    this.rows.forEach(function (row, i) {
                            return row.forEach(function (el, j) {
                                    return $__default(el)
                                        .toggleClass(this$1.margin, i !== 0)
                                        .toggleClass(this$1.firstColumn, j === 0);
                                }
                            );
                        }
                    );

                },

                events: ['load', 'resize']

            }

        });

    };

    var Modal$1 = function (UIkit) {

        UIkit.component('modal', {

            mixins: [Modal],

            props: {
                center: Boolean
            },

            defaults: {
                center: false,
                clsPage: 'uk-modal-page',
                clsPanel: 'uk-modal-dialog',
                selClose: '.uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full'
            },

            update: {

                write: function write() {

                    if (this.$el.css('display') === 'block' && this.center) {
                        this.$el
                            .removeClass('uk-flex uk-flex-center uk-flex-middle')
                            .css('display', 'block')
                            .toggleClass('uk-flex uk-flex-center uk-flex-middle', window.innerHeight > this.panel.outerHeight(true))
                            .css('display', this.$el.hasClass('uk-flex') ? '' : 'block');
                    }

                },

                events: ['resize']

            },

            events: [

                {
                    name: 'beforeshow',

                    self: true,

                    handler: function handler() {
                        this.$el.css('display', 'block').height();
                    }
                },

                {
                    name: 'hidden',

                    self: true,

                    handler: function handler() {
                        this.$el.css('display', '').removeClass('uk-flex uk-flex-center uk-flex-middle');
                    }
                }

            ]

        });

        UIkit.component('overflow-auto', {

            mixins: [Class],

            computed: {

                panel: function panel() {
                    return this.$el.closest('.uk-modal-dialog');
                }

            },

            connected: function connected() {
                this.$el.css('min-height', 150);
            },

            update: {

                write: function write() {
                    var current = this.$el.css('max-height');
                    this.$el.css('max-height', 150).css('max-height', Math.max(150, 150 - (this.panel.outerHeight(true) - window.innerHeight)));
                    if (current !== this.$el.css('max-height')) {
                        this.$el.trigger('resize');
                    }
                },

                events: ['load', 'resize']

            }

        });

        UIkit.modal.dialog = function (content, options) {

            var dialog = UIkit.modal(
                ("<div class=\"uk-modal\">\n                <div class=\"uk-modal-dialog\">" + content + "</div>\n             </div>")
                , options);

            dialog.$el.on('hidden', function (e) {
                if (e.target === e.currentTarget) {
                    dialog.$destroy(true);
                }
            });
            dialog.show();

            return dialog;
        };

        UIkit.modal.alert = function (message, options) {

            options = $.extend({bgClose: false, escClose: false, labels: UIkit.modal.labels}, options);

            return promise$$1(
                function (resolve) {
                    return UIkit.modal.dialog(("\n                <div class=\"uk-modal-body\">" + (isString$$1(message) ? message : $__default(message).html()) + "</div>\n                <div class=\"uk-modal-footer uk-text-right\">\n                    <button class=\"uk-button uk-button-primary uk-modal-close\" autofocus>" + (options.labels.ok) + "</button>\n                </div>\n            "), options).$el.on('hide', resolve);
                }
            );
        };

        UIkit.modal.confirm = function (message, options) {

            options = $.extend({bgClose: false, escClose: false, labels: UIkit.modal.labels}, options);

            return promise$$1(
                function (resolve, reject) {
                    return UIkit.modal.dialog(("\n                <div class=\"uk-modal-body\">" + (isString$$1(message) ? message : $__default(message).html()) + "</div>\n                <div class=\"uk-modal-footer uk-text-right\">\n                    <button class=\"uk-button uk-button-default uk-modal-close\">" + (options.labels.cancel) + "</button>\n                    <button class=\"uk-button uk-button-primary uk-modal-close\" autofocus>" + (options.labels.ok) + "</button>\n                </div>\n            "), options).$el.on('click', '.uk-modal-footer button', function (e) {
                        return $__default(e.target).index() === 0 ? reject() : resolve();
                    });
                }
            );
        };

        UIkit.modal.prompt = function (message, value, options) {

            options = $.extend({bgClose: false, escClose: false, labels: UIkit.modal.labels}, options);

            return promise$$1(function (resolve) {

                var resolved = false,
                    prompt = UIkit.modal.dialog(("\n                <form class=\"uk-form-stacked\">\n                    <div class=\"uk-modal-body\">\n                        <label>" + (isString$$1(message) ? message : $__default(message).html()) + "</label>\n                        <input class=\"uk-input\" type=\"text\" autofocus>\n                    </div>\n                    <div class=\"uk-modal-footer uk-text-right\">\n                        <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" + (options.labels.cancel) + "</button>\n                        <button class=\"uk-button uk-button-primary\" type=\"submit\">" + (options.labels.ok) + "</button>\n                    </div>\n                </form>\n            "), options),
                    input = prompt.$el.find('input').val(value);

                prompt.$el
                    .on('submit', 'form', function (e) {
                        e.preventDefault();
                        resolve(input.val());
                        resolved = true;
                        prompt.hide();
                    })
                    .on('hide', function () {
                        if (!resolved) {
                            resolve(null);
                        }
                    });

            });
        };

        UIkit.modal.labels = {
            ok: 'Ok',
            cancel: 'Cancel'
        };

    };

    var Nav = function (UIkit) {

        UIkit.component('nav', UIkit.components.accordion.extend({

            name: 'nav',

            defaults: {
                targets: '> .uk-parent',
                toggle: '> a',
                content: 'ul:first'
            }

        }));

    };

    var Navbar = function (UIkit) {

        UIkit.component('navbar', {

            mixins: [Class],

            props: {
                dropdown: String,
                mode: 'list',
                align: String,
                offset: Number,
                boundary: Boolean,
                boundaryAlign: Boolean,
                clsDrop: String,
                delayShow: Number,
                delayHide: Number,
                dropbar: Boolean,
                dropbarMode: String,
                dropbarAnchor: 'jQuery',
                duration: Number
            },

            defaults: {
                dropdown: '.uk-navbar-nav > li',
                align: !isRtl$$1 ? 'left' : 'right',
                clsDrop: 'uk-navbar-dropdown',
                mode: undefined,
                offset: undefined,
                delayShow: undefined,
                delayHide: undefined,
                boundaryAlign: undefined,
                flip: 'x',
                boundary: true,
                dropbar: false,
                dropbarMode: 'slide',
                dropbarAnchor: false,
                duration: 200,
            },

            computed: {

                boundary: function boundary() {
                    return (this.$props.boundary === true || this.boundaryAlign) ? this.$el : this.$props.boundary
                },

                pos: function pos() {
                    return ("bottom-" + (this.align));
                }

            },

            ready: function ready$$1() {

                if (this.dropbar) {
                    UIkit.navbarDropbar(
                        query$$1(this.dropbar, this.$el) || $__default('<div></div>').insertAfter(this.dropbarAnchor || this.$el),
                        {clsDrop: this.clsDrop, mode: this.dropbarMode, duration: this.duration, navbar: this}
                    );
                }

            },

            update: function update() {

                UIkit.drop($__default(((this.dropdown) + " ." + (this.clsDrop)), this.$el), $.extend({}, this));

            },

            events: [

                {
                    name: pointerEnter,

                    delegate: function delegate() {
                        return this.dropdown;
                    },

                    handler: function handler(ref) {
                        var currentTarget = ref.currentTarget;

                        var active = this.getActive();
                        if (active && active.toggle && !isWithin$$1(active.toggle.$el, currentTarget) && !active.tracker.movesTo(active.$el)) {
                            active.hide(false);
                        }
                    }

                }

            ],

            methods: {

                getActive: function getActive() {
                    var active = UIkit.drop.getActive();
                    return active && active.mode !== 'click' && isWithin$$1(active.toggle.$el, this.$el) && active;
                }

            }

        });

        UIkit.component('navbar-dropbar', {

            mixins: [Class],

            defaults: {
                clsDrop: '',
                mode: 'slide',
                navbar: null,
                duration: 200
            },

            init: function init() {

                if (this.mode === 'slide') {
                    this.$el.addClass('uk-navbar-dropbar-slide');
                }

            },

            events: [

                {
                    name: 'beforeshow',

                    el: function el() {
                        return this.navbar.$el;
                    },

                    handler: function handler(_, drop) {
                        var $el = drop.$el;
                        var dir = drop.dir;
                        if (dir === 'bottom' && !isWithin$$1($el, this.$el)) {
                            $el.appendTo(this.$el);
                            drop.show();
                            return false;
                        }
                    }
                },

                {
                    name: 'mouseleave',

                    handler: function handler() {
                        var active = this.navbar.getActive();

                        if (active && !this.$el.is(':hover')) {
                            active.hide();
                        }
                    }
                },

                {
                    name: 'beforeshow',

                    handler: function handler(e, ref) {
                        var $el = ref.$el;

                        this.clsDrop && $el.addClass(((this.clsDrop) + "-dropbar"));
                        this.transitionTo($el.outerHeight(true));
                    }
                },

                {
                    name: 'beforehide',

                    handler: function handler(e, ref) {
                        var $el = ref.$el;


                        var active = this.navbar.getActive();

                        if (this.$el.is(':hover') && active && active.$el.is($el)) {
                            return false;
                        }
                    }
                },

                {
                    name: 'hide',

                    handler: function handler(e, ref) {
                        var $el = ref.$el;


                        var active = this.navbar.getActive();

                        if (!active || active && active.$el.is($el)) {
                            this.transitionTo(0);
                        }
                    }
                }

            ],

            methods: {

                transitionTo: function transitionTo(height) {
                    var this$1 = this;

                    this.$el.height(this.$el[0].offsetHeight ? this.$el.height() : 0);
                    return Transition$$1.cancel(this.$el).then(function () {
                        return Transition$$1.start(this$1.$el, {height: height}, this$1.duration);
                    });
                }

            }

        });

    };

    var scroll;

    var Offcanvas = function (UIkit) {

        UIkit.component('offcanvas', {

            mixins: [Modal],

            args: 'mode',

            props: {
                content: String,
                mode: String,
                flip: Boolean,
                overlay: Boolean
            },

            defaults: {
                content: '.uk-offcanvas-content:first',
                mode: 'slide',
                flip: false,
                overlay: false,
                clsPage: 'uk-offcanvas-page',
                clsContainer: 'uk-offcanvas-container',
                clsPanel: 'uk-offcanvas-bar',
                clsFlip: 'uk-offcanvas-flip',
                clsContent: 'uk-offcanvas-content',
                clsContentAnimation: 'uk-offcanvas-content-animation',
                clsSidebarAnimation: 'uk-offcanvas-bar-animation',
                clsMode: 'uk-offcanvas',
                clsOverlay: 'uk-offcanvas-overlay',
                selClose: '.uk-offcanvas-close'
            },

            computed: {

                content: function content() {
                    return $__default(query$$1(this.$props.content, this.$el));
                },

                clsFlip: function clsFlip() {
                    return this.flip ? this.$props.clsFlip : '';
                },

                clsOverlay: function clsOverlay() {
                    return this.overlay ? this.$props.clsOverlay : '';
                },

                clsMode: function clsMode() {
                    return ((this.$props.clsMode) + "-" + (this.mode));
                },

                clsSidebarAnimation: function clsSidebarAnimation() {
                    return this.mode === 'none' || this.mode === 'reveal' ? '' : this.$props.clsSidebarAnimation;
                },

                clsContentAnimation: function clsContentAnimation() {
                    return this.mode !== 'push' && this.mode !== 'reveal' ? '' : this.$props.clsContentAnimation
                },

                transitionElement: function transitionElement() {
                    return this.mode === 'reveal' ? this.panel.parent() : this.panel;
                }

            },

            update: {

                write: function write() {

                    if (this.isToggled()) {

                        if (this.overlay || this.clsContentAnimation) {
                            this.content.width(window.innerWidth - this.scrollbarWidth);
                        }

                        if (this.overlay) {
                            this.content.height(window.innerHeight);
                            scroll && this.content.scrollTop(scroll.y);
                        }


                    }

                },

                events: ['resize']

            },

            events: [

                {
                    name: 'beforeshow',

                    self: true,

                    handler: function handler() {

                        scroll = scroll || {x: window.pageXOffset, y: window.pageYOffset};

                        if (this.mode === 'reveal' && !this.panel.parent().hasClass(this.clsMode)) {
                            this.panel.wrap('<div>').parent().addClass(this.clsMode);
                        }

                        docElement$$1.css('overflow-y', (!this.clsContentAnimation || this.flip) && this.scrollbarWidth && this.overlay ? 'scroll' : '');

                        this.body.addClass(((this.clsContainer) + " " + (this.clsFlip) + " " + (this.clsOverlay))).height();
                        this.content.addClass(this.clsContentAnimation);
                        this.panel.addClass(((this.clsSidebarAnimation) + " " + (this.mode !== 'reveal' ? this.clsMode : '')));
                        this.$el.addClass(this.clsOverlay).css('display', 'block').height();

                    }
                },

                {
                    name: 'beforehide',

                    self: true,

                    handler: function handler() {
                        this.content.removeClass(this.clsContentAnimation);

                        if (this.mode === 'none' || this.getActive() && this.getActive() !== this) {
                            this.panel.trigger(transitionend);
                        }
                    }
                },

                {
                    name: 'hidden',

                    self: true,

                    handler: function handler() {

                        if (this.mode === 'reveal') {
                            this.panel.unwrap();
                        }

                        if (!this.overlay) {
                            scroll = {x: window.pageXOffset, y: window.pageYOffset};
                        }

                        this.panel.removeClass(((this.clsSidebarAnimation) + " " + (this.clsMode)));
                        this.$el.removeClass(this.clsOverlay).css('display', '');
                        this.body.removeClass(((this.clsContainer) + " " + (this.clsFlip) + " " + (this.clsOverlay))).scrollTop(scroll.y);

                        docElement$$1.css('overflow-y', '');
                        this.content.width('').height('');

                        window.scrollTo(scroll.x, scroll.y);

                        scroll = null;

                    }
                },

                {
                    name: 'swipeLeft swipeRight',

                    handler: function handler(e) {

                        if (this.isToggled() && isTouch$$1(e) && (e.type === 'swipeLeft' && !this.flip || e.type === 'swipeRight' && this.flip)) {
                            this.hide();
                        }

                    }
                }

            ]

        });

    };

    var Responsive = function (UIkit) {

        UIkit.component('responsive', {

            props: ['width', 'height'],

            init: function init() {
                this.$el.addClass('uk-responsive-width');
            },

            update: {

                write: function write() {
                    if (this.$el.is(':visible') && this.width && this.height) {
                        this.$el.height(Dimensions$$1.fit(
                            {height: this.height, width: this.width},
                            {width: this.$el.parent().width(), height: this.height || this.$el.height()}
                        )['height']);
                    }
                },

                events: ['load', 'resize']

            }

        });

    };

    var Scroll = function (UIkit) {

        UIkit.component('scroll', {

            props: {
                duration: Number,
                transition: String,
                offset: Number
            },

            defaults: {
                duration: 1000,
                transition: 'easeOutExpo',
                offset: 0
            },

            methods: {

                scrollToElement: function scrollToElement(el) {
                    var this$1 = this;


                    el = $__default(el);

                    // get / set parameters
                    var target = offsetTop$$1(el) - this.offset,
                        docHeight = document.documentElement.offsetHeight,
                        winHeight = window.innerHeight;

                    if (target + winHeight > docHeight) {
                        target = docHeight - winHeight;
                    }

                    // animate to target, fire callback when done
                    $__default('html,body')
                        .stop()
                        .animate({scrollTop: Math.round(target)}, this.duration, this.transition)
                        .promise()
                        .then(function () {
                            return this$1.$el.trigger('scrolled', [this$1]);
                        });

                }

            },

            events: {

                click: function click(e) {

                    if (e.isDefaultPrevented()) {
                        return;
                    }

                    e.preventDefault();
                    this.scrollToElement($__default(this.$el[0].hash).length ? this.$el[0].hash : 'body');
                }

            }

        });

        if (!$__default.easing.easeOutExpo) {
            $__default.easing.easeOutExpo = function (x, t, b, c, d) {
                return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
            };
        }

    };

    var Scrollspy = function (UIkit) {

        UIkit.component('scrollspy', {

            args: 'cls',

            props: {
                cls: 'list',
                target: String,
                hidden: Boolean,
                offsetTop: Number,
                offsetLeft: Number,
                repeat: Boolean,
                delay: Number
            },

            defaults: {
                cls: ['uk-scrollspy-inview'],
                target: false,
                hidden: true,
                offsetTop: 0,
                offsetLeft: 0,
                repeat: false,
                delay: 0,
                inViewClass: 'uk-scrollspy-inview'
            },

            init: function init() {
                this.$emitSync();
            },

            computed: {

                elements: function elements() {
                    return this.target && $__default(this.target, this.$el) || this.$el;
                }

            },

            update: [

                {

                    write: function write() {
                        if (this.hidden) {
                            this.elements.filter((":not(." + (this.inViewClass) + ")")).css('visibility', 'hidden');
                        }
                    }

                },

                {

                    read: function read() {
                        var this$1 = this;

                        this.elements.each(function (_, el) {

                            if (!el._scrollspy) {
                                var cls = $__default(el).attr('uk-scrollspy-class');
                                el._scrollspy = {toggles: cls && cls.split(',') || this$1.cls};
                            }

                            el._scrollspy.show = isInView$$1(el, this$1.offsetTop, this$1.offsetLeft);

                        });
                    },

                    write: function write() {
                        var this$1 = this;


                        var index = this.elements.length === 1 ? 1 : 0;

                        this.elements.each(function (_, el) {

                            var $el = $__default(el);

                            var data = el._scrollspy;

                            if (data.show) {

                                if (!data.inview && !data.timer) {

                                    data.timer = setTimeout(function () {

                                        $el.css('visibility', '')
                                            .addClass(this$1.inViewClass)
                                            .toggleClass(data.toggles[0])
                                            .trigger('inview');

                                        data.inview = true;
                                        delete data.timer;

                                    }, this$1.delay * index++);

                                }

                            } else {

                                if (data.inview && this$1.repeat) {

                                    if (data.timer) {
                                        clearTimeout(data.timer);
                                        delete data.timer;
                                    }

                                    $el.removeClass(this$1.inViewClass)
                                        .toggleClass(data.toggles[0])
                                        .css('visibility', this$1.hidden ? 'hidden' : '')
                                        .trigger('outview');

                                    data.inview = false;
                                }

                            }

                            data.toggles.reverse();

                        });

                    },

                    events: ['scroll', 'load', 'resize']

                }

            ]

        });

    };

    var ScrollspyNav = function (UIkit) {

        UIkit.component('scrollspy-nav', {

            props: {
                cls: String,
                closest: String,
                scroll: Boolean,
                overflow: Boolean,
                offset: Number
            },

            defaults: {
                cls: 'uk-active',
                closest: false,
                scroll: false,
                overflow: true,
                offset: 0
            },

            computed: {

                links: function links() {
                    return this.$el.find('a[href^="#"]').filter(function (i, el) {
                        return el.hash;
                    });
                },

                elements: function elements() {
                    return this.closest ? this.links.closest(this.closest) : this.links;
                },

                targets: function targets() {
                    return $__default(this.links.toArray().map(function (el) {
                        return el.hash;
                    }).join(','));
                }

            },

            update: [

                {

                    read: function read() {
                        if (this.scroll) {
                            UIkit.scroll(this.links, {offset: this.offset || 0});
                        }
                    }

                },

                {

                    read: function read() {
                        var this$1 = this;


                        var scroll = window.pageYOffset + this.offset,
                            max = document.documentElement.scrollHeight - window.innerHeight + this.offset;

                        this.active = false;

                        this.targets.each(function (i, el) {

                            el = $__default(el);

                            var top = offsetTop$$1(el), last = i + 1 === this$1.targets.length;
                            if (!this$1.overflow && (i === 0 && top > scroll || last && top + el[0].offsetTop < scroll)) {
                                return false;
                            }

                            if (!last && offsetTop$$1(this$1.targets.eq(i + 1)) <= scroll) {
                                return;
                            }

                            if (scroll >= max) {
                                for (var j = this$1.targets.length - 1; j > i; j--) {
                                    if (isInView$$1(this$1.targets.eq(j))) {
                                        el = this$1.targets.eq(j);
                                        break;
                                    }
                                }
                            }

                            return !(this$1.active = toJQuery$$1(this$1.links.filter(("[href=\"#" + (el.attr('id')) + "\"]"))));

                        });

                    },

                    write: function write() {

                        this.links.blur();
                        this.elements.removeClass(this.cls);

                        if (this.active) {
                            this.$el.trigger('active', [
                                this.active,
                                (this.closest ? this.active.closest(this.closest) : this.active).addClass(this.cls)
                            ]);
                        }

                    },

                    events: ['scroll', 'load', 'resize']

                }

            ]

        });

    };

    var Sticky = function (UIkit) {

        UIkit.component('sticky', {

            mixins: [Class],

            attrs: true,

            props: {
                top: null,
                bottom: Boolean,
                offset: Number,
                animation: String,
                clsActive: String,
                clsInactive: String,
                clsFixed: String,
                widthElement: 'jQuery',
                showOnUp: Boolean,
                media: 'media',
                target: Number
            },

            defaults: {
                top: 0,
                bottom: false,
                offset: 0,
                animation: '',
                clsActive: 'uk-active',
                clsInactive: '',
                clsFixed: 'uk-sticky-fixed',
                widthElement: false,
                showOnUp: false,
                media: false,
                target: false
            },

            connected: function connected() {

                this.placeholder = $__default('<div class="uk-sticky-placeholder"></div>');
                this.widthElement = this.$props.widthElement || this.placeholder;

                if (!this.isActive) {
                    this.$el.addClass(this.clsInactive);
                }
            },

            disconnected: function disconnected() {

                if (this.isActive) {
                    this.isActive = false;
                    this.hide();
                    this.$el.removeClass(this.clsInactive);
                }

                this.placeholder.remove();
                this.placeholder = null;
                this.widthElement = null;
            },

            ready: function ready$$1() {
                var this$1 = this;


                if (!(this.target && location.hash && window.pageYOffset > 0)) {
                    return;
                }

                var target = query$$1(location.hash);

                if (target) {
                    requestAnimationFrame(function () {

                        var top = offsetTop$$1(target),
                            elTop = offsetTop$$1(this$1.$el),
                            elHeight = this$1.$el[0].offsetHeight,
                            elBottom = elTop + elHeight;

                        if (elBottom >= top && elTop <= top + target[0].offsetHeight) {
                            window.scrollTo(0, top - elHeight - this$1.target - this$1.offset);
                        }

                    });
                }

            },

            update: [

                {

                    write: function write() {
                        var this$1 = this;


                        var outerHeight = this.$el[0].offsetHeight, el;

                        this.placeholder
                            .css('height', this.$el.css('position') !== 'absolute' ? outerHeight : '')
                            .css(this.$el.css(['marginTop', 'marginBottom', 'marginLeft', 'marginRight']));

                        if (!document.documentElement.contains(this.placeholder[0])) {
                            this.placeholder.insertAfter(this.$el).attr('hidden', true);
                        }

                        this.width = this.widthElement.attr('hidden', null)[0].offsetWidth;
                        this.widthElement.attr('hidden', !this.isActive);

                        this.topOffset = offsetTop$$1(this.isActive ? this.placeholder : this.$el);
                        this.bottomOffset = this.topOffset + outerHeight;

                        ['top', 'bottom'].forEach(function (prop) {

                            this$1[prop] = this$1.$props[prop];

                            if (!this$1[prop]) {
                                return;
                            }

                            if ($.isNumeric(this$1[prop])) {

                                this$1[prop] = this$1[(prop + "Offset")] + parseFloat(this$1[prop]);

                            } else {

                                if (isString$$1(this$1[prop]) && this$1[prop].match(/^-?\d+vh$/)) {
                                    this$1[prop] = window.innerHeight * parseFloat(this$1[prop]) / 100;
                                } else {

                                    el = this$1[prop] === true ? this$1.$el.parent() : query$$1(this$1[prop], this$1.$el);

                                    if (el) {
                                        this$1[prop] = offsetTop$$1(el) + el[0].offsetHeight;
                                    }

                                }

                            }

                        });

                        this.top = Math.max(parseFloat(this.top), this.topOffset) - this.offset;
                        this.bottom = this.bottom && this.bottom - outerHeight;
                        this.inactive = this.media && !window.matchMedia(this.media).matches;

                        if (this.isActive) {
                            this.update();
                        }
                    },

                    events: ['load', 'resize']

                },

                {

                    read: function read() {
                        this.offsetTop = offsetTop$$1(this.$el);
                    },

                    write: function write(ref) {
                        var this$1 = this;
                        if (ref === void 0) ref = {};
                        var dir = ref.dir;


                        var scroll = window.pageYOffset;

                        if (scroll < 0 || !this.$el.is(':visible') || this.disabled || this.showOnUp && !dir) {
                            return;
                        }

                        if (this.inactive
                            || scroll < this.top
                            || this.showOnUp && (scroll <= this.top || dir === 'down' || dir === 'up' && !this.isActive && scroll <= this.bottomOffset)
                        ) {

                            if (!this.isActive) {
                                return;
                            }

                            this.isActive = false;

                            if (this.animation && this.bottomOffset < this.offsetTop) {
                                Animation$$1.cancel(this.$el).then(function () {
                                    return Animation$$1.out(this$1.$el, this$1.animation).then(function () {
                                        return this$1.hide();
                                    });
                                });
                            } else {
                                this.hide();
                            }

                        } else if (this.isActive) {

                            this.update();

                        } else if (this.animation) {

                            Animation$$1.cancel(this.$el).then(function () {
                                this$1.show();
                                Animation$$1.in(this$1.$el, this$1.animation);
                            });

                        } else {
                            this.show();
                        }

                    },

                    events: ['scroll']

                }],

            methods: {

                show: function show() {

                    this.isActive = true;
                    this.update();
                    this.$el.trigger('active');
                    this.placeholder.attr('hidden', null);

                },

                hide: function hide() {

                    this.$el
                        .addClass(this.clsInactive)
                        .removeClass(this.clsFixed)
                        .removeClass(this.clsActive)
                        .css({position: '', top: '', width: ''})
                        .trigger('inactive');

                    this.placeholder.attr('hidden', true);

                },

                update: function update() {

                    var top = Math.max(0, this.offset), scroll = window.pageYOffset, active = scroll > this.top;

                    if (this.bottom && scroll > this.bottom - this.offset) {
                        top = this.bottom - scroll;
                    }

                    this.$el
                        .css({
                            position: 'fixed',
                            top: (top + "px"),
                            width: this.width
                        })
                        .addClass(this.clsFixed)
                        .toggleClass(this.clsActive, active)
                        .toggleClass(this.clsInactive, !active);

                }

            }

        });

    };

    var svgs = {};
    var parser = new DOMParser();

    var Svg = function (UIkit) {

        UIkit.component('svg', {

            attrs: true,

            props: {
                id: String,
                icon: String,
                src: String,
                style: String,
                width: Number,
                height: Number,
                ratio: Number,
                'class': String
            },

            defaults: {
                ratio: 1,
                id: false,
                exclude: ['src'],
                'class': ''
            },

            init: function init() {
                this.class += ' uk-svg';
            },

            connected: function connected() {
                var this$1 = this;


                if (!this.icon && this.src && ~this.src.indexOf('#')) {

                    var parts = this.src.split('#');

                    if (parts.length > 1) {
                        this.src = parts[0];
                        this.icon = parts[1];
                    }
                }

                this.width = this.$props.width;
                this.height = this.$props.height;

                this.svg = this.getSvg().then(function (doc$$1) {
                    return promise$$1(function (resolve, reject) {
                        return fastdom$$1.mutate(function () {

                            var svg, el;

                            if (!doc$$1) {
                                reject('SVG not found.');
                                return;
                            }

                            if (!this$1.icon) {
                                el = doc$$1.documentElement.cloneNode(true);
                            } else {
                                svg = doc$$1.getElementById(this$1.icon);

                                if (!svg) {

                                    // fallback if SVG has no symbols
                                    if (!doc$$1.querySelector('symbol')) {
                                        el = doc$$1.documentElement.cloneNode(true);
                                    }

                                } else {

                                    var html = svg.outerHTML;

                                    // IE workaround
                                    if (!html) {
                                        var div = document.createElement('div');
                                        div.appendChild(svg.cloneNode(true));
                                        html = div.innerHTML;
                                    }

                                    html = html
                                        .replace(/<symbol/g, ("<svg" + (!~html.indexOf('xmlns') ? ' xmlns="http://www.w3.org/2000/svg"' : '')))
                                        .replace(/symbol>/g, 'svg>');

                                    el = parser.parseFromString(html, 'image/svg+xml').documentElement;
                                }

                            }

                            if (!el) {
                                reject('SVG not found.');
                                return;
                            }

                            var dimensions = el.getAttribute('viewBox'); // jQuery workaround, el.attr('viewBox')

                            if (dimensions) {
                                dimensions = dimensions.split(' ');
                                this$1.width = this$1.width || dimensions[2];
                                this$1.height = this$1.height || dimensions[3];
                            }

                            this$1.width *= this$1.ratio;
                            this$1.height *= this$1.ratio;

                            for (var prop in this$1.$options.props) {
                                if (this$1[prop] && !~this$1.exclude.indexOf(prop)) {
                                    el.setAttribute(prop, this$1[prop]);
                                }
                            }

                            if (!this$1.id) {
                                el.removeAttribute('id');
                            }

                            if (this$1.width && !this$1.height) {
                                el.removeAttribute('height');
                            }

                            if (this$1.height && !this$1.width) {
                                el.removeAttribute('width');
                            }

                            var root = this$1.$el[0];
                            if (isVoidElement$$1(root) || root.tagName === 'CANVAS') {
                                this$1.$el.attr({hidden: true, id: null});
                                if (root.nextSibling) {
                                    root.parentNode.insertBefore(el, root.nextSibling);
                                } else {
                                    root.parentNode.appendChild(el);
                                }
                            } else {
                                root.appendChild(el);
                            }

                            resolve(el);

                        });
                    });
                }).then(null, function () {
                });

                if (!this._isReady) {
                    this.$emitSync();
                }
            },

            disconnected: function disconnected() {

                if (isVoidElement$$1(this.$el)) {
                    this.$el.attr({hidden: null, id: this.id || null});
                }

                if (this.svg) {
                    this.svg.then(function (svg) {
                        return svg && svg.parentNode && svg.parentNode.removeChild(svg);
                    });
                    this.svg = null;
                }
            },

            methods: {

                getSvg: function getSvg() {
                    var this$1 = this;


                    if (!this.src) {
                        return promise$$1.reject();
                    }

                    if (svgs[this.src]) {
                        return svgs[this.src];
                    }

                    svgs[this.src] = promise$$1(function (resolve, reject) {

                        if (this$1.src.lastIndexOf('data:', 0) === 0) {
                            resolve(this$1.parse(decodeURIComponent(this$1.src.split(',')[1])));
                        } else {

                            $.ajax(this$1.src, {dataType: 'html'}).then(function (doc$$1) {
                                resolve(this$1.parse(doc$$1));
                            }, function () {
                                reject('SVG not found.');
                            });

                        }

                    });

                    return svgs[this.src];

                },

                parse: function parse(doc$$1) {
                    var parsed = parser.parseFromString(doc$$1, 'image/svg+xml');
                    return parsed.documentElement && parsed.documentElement.nodeName === 'svg' ? parsed : null;
                }

            }

        });

    };

    var Switcher = function (UIkit) {

        UIkit.component('switcher', {

            mixins: [Toggable],

            args: 'connect',

            props: {
                connect: String,
                toggle: String,
                active: Number,
                swiping: Boolean
            },

            defaults: {
                connect: false,
                toggle: ' > *',
                active: 0,
                swiping: true,
                cls: 'uk-active',
                clsContainer: 'uk-switcher',
                attrItem: 'uk-switcher-item',
                queued: true
            },

            connected: function connected() {
                this.$emitSync();
            },

            computed: {

                connects: function connects() {
                    return query$$1(this.connect, this.$el) || $__default(this.$el.next(("." + (this.clsContainer))));
                },

                toggles: function toggles() {
                    return $__default(this.toggle, this.$el);
                }

            },

            events: [

                {

                    name: 'click',

                    delegate: function delegate() {
                        return ((this.toggle) + ":not(.uk-disabled)");
                    },

                    handler: function handler(e) {
                        e.preventDefault();
                        this.show(e.currentTarget);
                    }

                },

                {
                    name: 'click',

                    el: function el() {
                        return this.connects;
                    },

                    delegate: function delegate() {
                        return ("[" + (this.attrItem) + "],[data-" + (this.attrItem) + "]");
                    },

                    handler: function handler(e) {
                        e.preventDefault();
                        this.show($__default(e.currentTarget)[e.currentTarget.hasAttribute(this.attrItem) ? 'attr' : 'data'](this.attrItem));
                    }
                },

                {
                    name: 'swipeRight swipeLeft',

                    filter: function filter() {
                        return this.swiping;
                    },

                    el: function el() {
                        return this.connects;
                    },

                    handler: function handler(e) {
                        if (!isTouch$$1(e)) {
                            return;
                        }

                        e.preventDefault();
                        if (!window.getSelection().toString()) {
                            this.show(e.type === 'swipeLeft' ? 'next' : 'previous');
                        }
                    }
                }

            ],

            update: function update() {

                this.updateAria(this.connects.children());
                this.show(toJQuery$$1(this.toggles.filter(("." + (this.cls) + ":first"))) || toJQuery$$1(this.toggles.eq(this.active)) || this.toggles.first());

            },

            methods: {

                show: function show(item) {
                    var this$1 = this;


                    var length = this.toggles.length,
                        prev = this.connects.children(("." + (this.cls))).index(),
                        hasPrev = prev >= 0,
                        index = getIndex$$1(item, this.toggles, prev),
                        dir = item === 'previous' ? -1 : 1,
                        toggle;

                    for (var i = 0; i < length; i++, index = (index + dir + length) % length) {
                        if (!this$1.toggles.eq(index).is('.uk-disabled, [disabled]')) {
                            toggle = this$1.toggles.eq(index);
                            break;
                        }
                    }

                    if (!toggle || prev >= 0 && toggle.hasClass(this.cls) || prev === index) {
                        return;
                    }

                    this.toggles.removeClass(this.cls).attr('aria-expanded', false);
                    toggle.addClass(this.cls).attr('aria-expanded', true);

                    if (!hasPrev) {
                        this.toggleNow(this.connects.children((":nth-child(" + (index + 1) + ")")));
                    } else {
                        this.toggleElement(this.connects.children((":nth-child(" + (prev + 1) + "),:nth-child(" + (index + 1) + ")")));
                    }
                }

            }

        });

    };

    var Tab = function (UIkit) {

        UIkit.component('tab', UIkit.components.switcher.extend({

            mixins: [Class],

            name: 'tab',

            props: {
                media: 'media'
            },

            defaults: {
                media: 960,
                attrItem: 'uk-tab-item'
            },

            init: function init() {

                var cls = this.$el.hasClass('uk-tab-left') && 'uk-tab-left' || this.$el.hasClass('uk-tab-right') && 'uk-tab-right';

                if (cls) {
                    UIkit.toggle(this.$el, {cls: cls, mode: 'media', media: this.media});
                }
            }

        }));

    };

    var Toggle = function (UIkit) {

        UIkit.component('toggle', {

            mixins: [UIkit.mixin.toggable],

            args: 'target',

            props: {
                href: String,
                target: null,
                mode: 'list',
                media: 'media'
            },

            defaults: {
                href: false,
                target: false,
                mode: 'click',
                queued: true,
                media: false
            },

            computed: {

                target: function target() {
                    return query$$1(this.$props.target || this.href, this.$el) || this.$el;
                }

            },

            events: [

                {

                    name: (pointerEnter + " " + pointerLeave),

                    filter: function filter() {
                        return ~this.mode.indexOf('hover');
                    },

                    handler: function handler(e) {
                        if (!isTouch$$1(e)) {
                            this.toggle(("toggle" + (e.type === pointerEnter ? 'show' : 'hide')));
                        }
                    }

                },

                {

                    name: 'click',

                    filter: function filter() {
                        return ~this.mode.indexOf('click') || hasTouch;
                    },

                    handler: function handler(e) {

                        if (!isTouch$$1(e) && !~this.mode.indexOf('click')) {
                            return;
                        }

                        // TODO better isToggled handling
                        var link = $__default(e.target).closest('a[href]');
                        if ($__default(e.target).closest('a[href="#"], button').length
                            || link.length && (
                                this.cls
                                || !this.target.is(':visible')
                                || link.attr('href')[0] === '#' && this.target.is(link.attr('href'))
                            )
                        ) {
                            e.preventDefault();
                        }

                        this.toggle();
                    }

                }
            ],

            update: {

                write: function write() {

                    if (!~this.mode.indexOf('media') || !this.media) {
                        return;
                    }

                    var toggled = this.isToggled(this.target);
                    if (window.matchMedia(this.media).matches ? !toggled : toggled) {
                        this.toggle();
                    }

                },

                events: ['load', 'resize']

            },

            methods: {

                toggle: function toggle(type) {

                    var event = $.Event(type || 'toggle');
                    this.target.triggerHandler(event, [this]);

                    if (!event.isDefaultPrevented()) {
                        this.toggleElement(this.target);
                    }
                }

            }

        });

    };

    var Leader = function (UIkit) {

        UIkit.component('leader', {

            mixins: [Class],

            props: {
                fill: String,
                media: 'media'
            },

            defaults: {
                fill: '',
                media: false,
                clsWrapper: 'uk-leader-fill',
                clsHide: 'uk-leader-hide',
                attrFill: 'data-fill'
            },

            computed: {

                fill: function fill() {
                    return this.$props.fill || getCssVar('leader-fill');
                }

            },

            connected: function connected() {
                this.wrapper = this.$el.wrapInner(("<span class=\"" + (this.clsWrapper) + "\">")).children().first();
            },

            disconnected: function disconnected() {
                this.wrapper.contents().unwrap();
            },

            update: [

                {

                    read: function read() {
                        var prev = this._width;
                        this._width = Math.floor(this.$el[0].offsetWidth / 2);
                        this._changed = prev !== this._width;
                        this._hide = this.media && !window.matchMedia(this.media).matches;
                    },

                    write: function write() {

                        this.wrapper.toggleClass(this.clsHide, this._hide);

                        if (this._changed) {
                            this.wrapper.attr(this.attrFill, Array(this._width).join(this.fill));
                        }

                    },

                    events: ['load', 'resize']

                }
            ]
        });

    };

    var core = function (UIkit) {

        var scroll = null, dir, ticking, resizing, started = 0;

        win$$1
            .on('load', UIkit.update)
            .on('resize', function (e) {
                if (!resizing) {
                    requestAnimationFrame(function () {
                        UIkit.update(e);
                        resizing = false;
                    });
                    resizing = true;
                }
            })
            .on('scroll', function (e) {

                if (scroll === null) {
                    scroll = 0;
                }

                if (scroll === window.pageYOffset) {
                    return;
                }

                dir = scroll < window.pageYOffset;
                scroll = window.pageYOffset;
                if (!ticking) {
                    requestAnimationFrame(function () {
                        e.dir = dir ? 'down' : 'up';
                        UIkit.update(e);
                        ticking = false;
                    });
                    ticking = true;
                }
            });

        on$$1(document, animationstart, function (ref) {
            var target = ref.target;

            if ((getStyle(target, 'animationName') || '').match(/^uk-.*(left|right)/)) {
                started++;
                document.body.style.overflowX = 'hidden';
                setTimeout(function () {
                    if (!--started) {
                        document.body.style.overflowX = '';
                    }
                }, toMs$$1(getStyle(target, 'animationDuration')) + 100);
            }
        }, true);

        // core components
        UIkit.use(Toggle);
        UIkit.use(Accordion);
        UIkit.use(Alert);
        UIkit.use(Cover);
        UIkit.use(Drop);
        UIkit.use(Dropdown);
        UIkit.use(FormCustom);
        UIkit.use(HeightMatch);
        UIkit.use(HeightViewport);
        UIkit.use(Hover);
        UIkit.use(Margin);
        UIkit.use(Gif);
        UIkit.use(Grid);
        UIkit.use(Leader);
        UIkit.use(Modal$1);
        UIkit.use(Nav);
        UIkit.use(Navbar);
        UIkit.use(Offcanvas);
        UIkit.use(Responsive);
        UIkit.use(Scroll);
        UIkit.use(Scrollspy);
        UIkit.use(ScrollspyNav);
        UIkit.use(Sticky);
        UIkit.use(Svg);
        UIkit.use(Icon);
        UIkit.use(Switcher);
        UIkit.use(Tab);

    };

    UIkit$2.version = '3.0.0-beta.22';

    mixin(UIkit$2);
    core(UIkit$2);

    function plugin(UIkit) {

        if (plugin.installed) {
            return;
        }

        var util = UIkit.util;
        var mixin = UIkit.mixin;
        var $$$1 = util.$;

        UIkit.component('countdown', {

            mixins: [mixin.class],

            args: 'date',

            attrs: true,

            props: {
                date: String,
                clsWrapper: String
            },

            defaults: {
                date: '',
                clsWrapper: '.uk-countdown-%unit%'
            },

            computed: {

                date: function date() {
                    return Date.parse(this.$props.date);
                },

                days: function days() {
                    return this.$el.find(this.clsWrapper.replace('%unit%', 'days'));
                },

                hours: function hours() {
                    return this.$el.find(this.clsWrapper.replace('%unit%', 'hours'));
                },

                minutes: function minutes() {
                    return this.$el.find(this.clsWrapper.replace('%unit%', 'minutes'));
                },

                seconds: function seconds() {
                    return this.$el.find(this.clsWrapper.replace('%unit%', 'seconds'));
                },

                units: function units() {
                    var this$1 = this;

                    return ['days', 'hours', 'minutes', 'seconds'].filter(function (unit) {
                        return this$1[unit].length;
                    });
                }

            },

            connected: function connected() {
                this.start();
            },

            disconnected: function disconnected() {
                this.stop();
            },

            methods: {

                start: function start() {

                    this.stop();

                    if (this.date && this.units.length) {
                        this.update();
                        this.timer = setInterval(this.update, 1000);
                    }

                },

                stop: function stop() {

                    if (this.timer) {
                        clearInterval(this.timer);
                        this.timer = null;
                    }

                },

                update: function update() {
                    var this$1 = this;


                    var timespan = getTimeSpan(this.date);

                    if (timespan.total <= 0) {

                        this.stop();

                        timespan.days
                            = timespan.hours
                            = timespan.minutes
                            = timespan.seconds
                            = 0;
                    }

                    this.units.forEach(function (unit) {

                        var digits = String(Math.floor(timespan[unit]));

                        digits = digits.length < 2 ? ("0" + digits) : digits;

                        if (this$1[unit].text() !== digits) {
                            this$1[unit].html(digits.split('').map(function (digit) {
                                return ("<span>" + digit + "</span>");
                            }).join(''));
                        }

                    });

                }

            }

        });

        function getTimeSpan(date) {

            var total = date - Date.now();

            return {
                total: total,
                seconds: total / 1000 % 60,
                minutes: total / 1000 / 60 % 60,
                hours: total / 1000 / 60 / 60 % 24,
                days: total / 1000 / 60 / 60 / 24
            };
        }

    }

    if (!true && typeof window !== 'undefined' && window.UIkit) {
        window.UIkit.use(plugin);
    }

    function plugin$1(UIkit) {

        if (plugin$1.installed) {
            return;
        }

        var ref = UIkit.util;
        var $$$1 = ref.$;
        var ajax$$1 = ref.ajax;
        var doc = ref.doc;
        var Event$$1 = ref.Event;
        var extend$$1 = ref.extend;
        var Dimensions = ref.Dimensions;
        var getIndex = ref.getIndex;
        var Transition = ref.Transition;

        UIkit.component('lightbox', {

            name: 'lightbox',

            props: {
                toggle: String,
                duration: Number,
                inverse: Boolean
            },

            defaults: {
                toggle: 'a',
                duration: 400,
                dark: false,
                attrItem: 'uk-lightbox-item',
                items: [],
                index: 0
            },

            computed: {

                toggles: function toggles() {
                    var this$1 = this;

                    return $$$1(this.toggle, this.$el).each(function (_, el) {
                        return this$1.items.push({
                            source: el.getAttribute('href'),
                            title: el.getAttribute('title'),
                            type: el.getAttribute('type')
                        });
                    });
                }

            },

            events: [

                {

                    name: 'click',

                    delegate: function delegate() {
                        return ((this.toggle) + ":not(.uk-disabled)");
                    },

                    handler: function handler(e) {
                        e.preventDefault();
                        this.show(this.toggles.index(e.currentTarget));
                    }

                },

                {

                    name: 'showitem',

                    handler: function handler(e) {

                        var item = this.getItem();

                        if (item.content) {
                            this.$update();
                            e.stopImmediatePropagation();
                        }
                    }

                }

            ],

            update: {

                write: function write() {
                    var this$1 = this;


                    var item = this.getItem();

                    if (!this.modal || !item.content) {
                        return;
                    }

                    var panel = this.modal.panel,
                        dim = {width: panel.width(), height: panel.height()},
                        max = {
                            width: window.innerWidth - (panel.outerWidth(true) - dim.width),
                            height: window.innerHeight - (panel.outerHeight(true) - dim.height)
                        },
                        newDim = Dimensions.fit({width: item.width, height: item.height}, max);

                    Transition.stop(panel);
                    Transition.stop(this.modal.content);

                    if (this.modal.content) {
                        this.modal.content.remove();
                    }

                    this.modal.content = $$$1(item.content).css('opacity', 0).appendTo(panel);
                    panel.css(dim);

                    Transition.start(panel, newDim, this.duration).then(function () {
                        Transition.start(this$1.modal.content, {opacity: 1}, 400).then(function () {
                            panel.find('[uk-transition-hide]').show();
                            panel.find('[uk-transition-show]').hide();
                        });
                    });

                },

                events: ['resize']

            },

            methods: {

                show: function show(index) {
                    var this$1 = this;


                    this.index = getIndex(index, this.items, this.index);

                    if (!this.modal) {
                        this.modal = UIkit.modal.dialog("\n                        <button class=\"uk-modal-close-outside\" uk-transition-hide type=\"button\" uk-close></button>\n                        <span class=\"uk-position-center\" uk-transition-show uk-spinner></span>\n                    ", {center: true});
                        this.modal.$el.css('overflow', 'hidden').addClass('uk-modal-lightbox');
                        this.modal.panel.css({width: 200, height: 200});
                        this.modal.caption = $$$1('<div class="uk-modal-caption" uk-transition-hide></div>').appendTo(this.modal.panel);

                        if (this.items.length > 1) {
                            $$$1(("<div class=\"" + (this.dark ? 'uk-dark' : 'uk-light') + "\" uk-transition-hide>\n                                <a href=\"#\" class=\"uk-position-center-left\" uk-slidenav-previous uk-lightbox-item=\"previous\"></a>\n                                <a href=\"#\" class=\"uk-position-center-right\" uk-slidenav-next uk-lightbox-item=\"next\"></a>\n                            </div>\n                        ")).appendTo(this.modal.panel.addClass('uk-slidenav-position'));
                        }

                        this.modal.$el
                            .on('hidden', this.hide)
                            .on('click', ("[" + (this.attrItem) + "]"), function (e) {
                                e.preventDefault();
                                this$1.show($$$1(e.currentTarget).attr(this$1.attrItem));
                            }).on('swipeRight swipeLeft', function (e) {
                            e.preventDefault();
                            if (!window.getSelection().toString()) {
                                this$1.show(e.type === 'swipeLeft' ? 'next' : 'previous');
                            }
                        });
                    }

                    this.modal.panel.find('[uk-transition-hide]').hide();
                    this.modal.panel.find('[uk-transition-show]').show();

                    this.modal.content && this.modal.content.remove();
                    this.modal.caption.text(this.getItem().title);

                    var event = Event$$1('showitem');
                    this.$el.trigger(event);
                    if (!event.isImmediatePropagationStopped()) {
                        this.setError(this.getItem());
                    }

                    doc.on(("keydown." + (this.$options.name)), function (e) {
                        switch (e.keyCode) {
                            case 37:
                                this$1.show('previous');
                                break;
                            case 39:
                                this$1.show('next');
                                break;
                        }
                    });
                },

                hide: function hide() {
                    var this$1 = this;


                    doc.off(("keydown." + (this.$options.name)));

                    this.modal.hide().then(function () {
                        this$1.modal.$destroy(true);
                        this$1.modal = null;
                    });
                },

                getItem: function getItem() {
                    return this.items[this.index] || {source: '', title: '', type: ''};
                },

                setItem: function setItem(item, content, width, height) {
                    if (width === void 0) width = 200;
                    if (height === void 0) height = 200;

                    extend$$1(item, {content: content, width: width, height: height});
                    this.$update();
                },

                setError: function setError(item) {
                    this.setItem(item, '<div class="uk-position-cover uk-flex uk-flex-middle uk-flex-center"><strong>Loading resource failed!</strong></div>', 400, 300);
                }

            }

        });

        UIkit.mixin({

            events: {

                showitem: function showitem(e) {
                    var this$1 = this;


                    var item = this.getItem();

                    if (item.type !== 'image' && item.source && !item.source.match(/\.(jp(e)?g|png|gif|svg)$/i)) {
                        return;
                    }

                    var img = new Image();

                    img.onerror = function () {
                        return this$1.setError(item);
                    };
                    img.onload = function () {
                        return this$1.setItem(item, ("<img class=\"uk-responsive-width\" width=\"" + (img.width) + "\" height=\"" + (img.height) + "\" src =\"" + (item.source) + "\">"), img.width, img.height);
                    };

                    img.src = item.source;

                    e.stopImmediatePropagation();
                }

            }

        }, 'lightbox');

        UIkit.mixin({

            events: {

                showitem: function showitem(e) {
                    var this$1 = this;


                    var item = this.getItem();

                    if (item.type !== 'video' && item.source && !item.source.match(/\.(mp4|webm|ogv)$/i)) {
                        return;
                    }

                    var video = $$$1('<video class="uk-responsive-width" controls></video>')
                        .on('loadedmetadata', function () {
                            return this$1.setItem(item, video.attr({
                                width: video[0].videoWidth,
                                height: video[0].videoHeight
                            }), video[0].videoWidth, video[0].videoHeight);
                        })
                        .attr('src', item.source);

                    e.stopImmediatePropagation();
                }

            }

        }, 'lightbox');

        UIkit.mixin({

            events: {

                showitem: function showitem(e) {
                    var this$1 = this;


                    var item = this.getItem(), matches;

                    if (!(matches = item.source.match(/\/\/.*?youtube\.[a-z]+\/watch\?v=([^&]+)&?(.*)/)) && !(item.source.match(/youtu\.be\/(.*)/))) {
                        return;
                    }

                    var id = matches[1],
                        img = new Image(),
                        lowres = false,
                        setIframe = function (width, height) {
                            return this$1.setItem(item, ("<iframe src=\"//www.youtube.com/embed/" + id + "\" width=\"" + width + "\" height=\"" + height + "\" style=\"max-width:100%;box-sizing:border-box;\"></iframe>"), width, height);
                        };

                    img.onerror = function () {
                        return setIframe(640, 320);
                    };
                    img.onload = function () {
                        //youtube default 404 thumb, fall back to lowres
                        if (img.width === 120 && img.height === 90) {
                            if (!lowres) {
                                lowres = true;
                                img.src = "//img.youtube.com/vi/" + id + "/0.jpg";
                            } else {
                                setIframe(640, 320);
                            }
                        } else {
                            setIframe(img.width, img.height);
                        }
                    };

                    img.src = "//img.youtube.com/vi/" + id + "/maxresdefault.jpg";

                    e.stopImmediatePropagation();
                }

            }

        }, 'lightbox');

        UIkit.mixin({

            events: {

                showitem: function showitem(e) {
                    var this$1 = this;


                    var item = this.getItem(), matches;

                    if (!(matches = item.source.match(/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/))) {
                        return;
                    }

                    var id = matches[2],
                        setIframe = function (width, height) {
                            return this$1.setItem(item, ("<iframe src=\"//player.vimeo.com/video/" + id + "\" width=\"" + width + "\" height=\"" + height + "\" style=\"max-width:100%;box-sizing:border-box;\"></iframe>"), width, height);
                        };

                    ajax$$1({
                        type: 'GET',
                        url: ("http://vimeo.com/api/oembed.json?url=" + (encodeURI(item.source))),
                        jsonp: 'callback',
                        dataType: 'jsonp'
                    }).then(function (res) {
                        return setIframe(res.width, res.height);
                    });

                    e.stopImmediatePropagation();
                }

            }

        }, 'lightbox');

    }

    if (!true && typeof window !== 'undefined' && window.UIkit) {
        window.UIkit.use(plugin$1);
    }

    function plugin$2(UIkit) {

        if (plugin$2.installed) {
            return;
        }

        var ref = UIkit.util;
        var $$$1 = ref.$;
        var each$$1 = ref.each;
        var pointerEnter = ref.pointerEnter;
        var pointerLeave = ref.pointerLeave;
        var Transition = ref.Transition;
        var containers = {};

        UIkit.component('notification', {

            functional: true,

            args: ['message', 'status'],

            defaults: {
                message: '',
                status: '',
                timeout: 5000,
                group: null,
                pos: 'top-center',
                onClose: null,
                clsClose: 'uk-notification-close'
            },

            created: function created() {

                if (!containers[this.pos]) {
                    containers[this.pos] = $$$1(("<div class=\"uk-notification uk-notification-" + (this.pos) + "\"></div>")).appendTo(UIkit.container);
                }

                this.$mount($$$1(
                    ("<div class=\"uk-notification-message" + (this.status ? (" uk-notification-message-" + (this.status)) : '') + "\">\n                    <a href=\"#\" class=\"" + (this.clsClose) + "\" data-uk-close></a>\n                    <div>" + (this.message) + "</div>\n                </div>")
                ).appendTo(containers[this.pos].show())[0]);

            },

            ready: function ready() {
                var this$1 = this;


                var marginBottom = parseInt(this.$el.css('margin-bottom'), 10);

                Transition.start(
                    this.$el.css({opacity: 0, marginTop: -1 * this.$el.outerHeight(), marginBottom: 0}),
                    {opacity: 1, marginTop: 0, marginBottom: marginBottom}
                ).then(function () {
                    if (this$1.timeout) {
                        this$1.timer = setTimeout(this$1.close, this$1.timeout);
                        this$1.$el
                            .on(pointerEnter, function () {
                                return clearTimeout(this$1.timer);
                            })
                            .on(pointerLeave, function () {
                                return this$1.timer = setTimeout(this$1.close, this$1.timeout);
                            });
                    }
                });

            },

            events: {

                click: function click(e) {
                    if ($$$1(e.target).closest('a[href="#"]').length) {
                        e.preventDefault();
                    }
                    this.close();
                }

            },

            methods: {

                close: function close(immediate) {
                    var this$1 = this;


                    var remove = function () {

                        this$1.onClose && this$1.onClose();
                        this$1.$el.trigger('close', [this$1]).remove();

                        if (!containers[this$1.pos].children().length) {
                            containers[this$1.pos].hide();
                        }

                    };

                    if (this.timer) {
                        clearTimeout(this.timer);
                    }

                    if (immediate) {
                        remove();
                    } else {
                        Transition.start(this.$el, {
                            opacity: 0,
                            marginTop: -1 * this.$el.outerHeight(),
                            marginBottom: 0
                        }).then(remove);
                    }
                }

            }

        });

        UIkit.notification.closeAll = function (group, immediate) {
            each$$1(UIkit.instances, function (_, component) {
                if (component.$options.name === 'notification' && (!group || group === component.group)) {
                    component.close(immediate);
                }
            });
        };

    }

    if (!true && typeof window !== 'undefined' && window.UIkit) {
        window.UIkit.use(plugin$2);
    }

    function plugin$3(UIkit) {

        if (plugin$3.installed) {
            return;
        }

        var mixin = UIkit.mixin;
        var util = UIkit.util;
        var $$$1 = util.$;
        var doc = util.docElement;
        var extend$$1 = util.extend;
        var getDimensions = util.getDimensions;
        var isWithin = util.isWithin;
        var on = util.on;
        var off = util.off;
        var offsetTop = util.offsetTop;
        var pointerDown = util.pointerDown;
        var pointerMove = util.pointerMove;
        var pointerUp = util.pointerUp;
        var promise = util.promise;
        var win = util.win;

        UIkit.component('sortable', {

            mixins: [mixin.class],

            props: {
                group: String,
                animation: Number,
                threshold: Number,
                clsItem: String,
                clsPlaceholder: String,
                clsDrag: String,
                clsDragState: String,
                clsBase: String,
                clsNoDrag: String,
                clsEmpty: String,
                clsCustom: String,
                handle: String
            },

            defaults: {
                group: false,
                animation: 150,
                threshold: 5,
                clsItem: 'uk-sortable-item',
                clsPlaceholder: 'uk-sortable-placeholder',
                clsDrag: 'uk-sortable-drag',
                clsDragState: 'uk-drag',
                clsBase: 'uk-sortable',
                clsNoDrag: 'uk-sortable-nodrag',
                clsEmpty: 'uk-sortable-empty',
                clsCustom: '',
                handle: false
            },

            init: function init() {
                var this$1 = this;

                ['init', 'start', 'move', 'end'].forEach(function (key) {
                    var fn = this$1[key];
                    this$1[key] = function (e) {
                        e = e.originalEvent || e;
                        this$1.scrollY = window.scrollY;
                        var ref = e.touches && e.touches[0] || e;
                        var pageX = ref.pageX;
                        var pageY = ref.pageY;
                        this$1.pos = {x: pageX, y: pageY};

                        fn(e);
                    };
                });
            },

            events: (obj = {}, obj[pointerDown] = 'init', obj),

            update: {

                write: function write() {
                    var this$1 = this;


                    if (this.clsEmpty) {
                        this.$el.toggleClass(this.clsEmpty, !this.$el.children().length);
                    }

                    if (!this.drag) {
                        return;
                    }

                    this.drag.offset({top: this.pos.y + this.origin.top, left: this.pos.x + this.origin.left});

                    var top = offsetTop(this.drag), bottom = top + this.drag[0].offsetHeight;

                    if (top > 0 && top < this.scrollY) {
                        setTimeout(function () {
                            return win.scrollTop(this$1.scrollY - 5);
                        }, 5);
                    } else if (bottom < doc[0].offsetHeight && bottom > window.innerHeight + this.scrollY) {
                        setTimeout(function () {
                            return win.scrollTop(this$1.scrollY + 5);
                        }, 5);
                    }

                }

            },

            methods: {

                init: function init(e) {

                    var target = $$$1(e.target), placeholder = this.$el.children().filter(function (i, el) {
                        return isWithin(e.target, el);
                    });

                    if (!placeholder.length
                        || target.is(':input')
                        || this.handle && !isWithin(target, this.handle)
                        || e.button && e.button !== 0
                        || isWithin(target, ("." + (this.clsNoDrag)))
                    ) {
                        return;
                    }

                    e.preventDefault();
                    e.stopPropagation();

                    this.touched = [this];
                    this.placeholder = placeholder;
                    this.origin = extend$$1({target: target, index: this.placeholder.index()}, this.pos);

                    doc.on(pointerMove, this.move);
                    doc.on(pointerUp, this.end);
                    win.on('scroll', this.scroll);

                    if (!this.threshold) {
                        this.start(e);
                    }

                },

                start: function start(e) {

                    this.drag = $$$1(this.placeholder[0].outerHTML.replace(/^<li/i, '<div').replace(/li>$/i, 'div>'))
                        .attr('uk-no-boot', '')
                        .addClass(((this.clsDrag) + " " + (this.clsCustom)))
                        .css({
                            boxSizing: 'border-box',
                            width: this.placeholder.outerWidth(),
                            height: this.placeholder.outerHeight()
                        })
                        .css(this.placeholder.css(['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom']))
                        .appendTo(UIkit.container);

                    this.drag.children().first().height(this.placeholder.children().height());

                    var ref = getDimensions(this.placeholder);
                    var left = ref.left;
                    var top = ref.top;
                    extend$$1(this.origin, {left: left - this.pos.x, top: top - this.pos.y});

                    this.placeholder.addClass(this.clsPlaceholder);
                    this.$el.children().addClass(this.clsItem);
                    doc.addClass(this.clsDragState);

                    this.$el.trigger('start', [this, this.placeholder, this.drag]);

                    this.move(e);
                },

                move: function move(e) {

                    if (!this.drag) {

                        if (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) {
                            this.start(e);
                        }

                        return;
                    }

                    this.$emit();

                    var target = e.type === 'mousemove' ? e.target : document.elementFromPoint(this.pos.x - document.body.scrollLeft, this.pos.y - document.body.scrollTop),
                        sortable = getSortable(target),
                        previous = getSortable(this.placeholder[0]),
                        move = sortable !== previous;

                    if (!sortable || isWithin(target, this.placeholder) || move && (!sortable.group || sortable.group !== previous.group)) {
                        return;
                    }

                    target = sortable.$el.is(target.parentNode) && $$$1(target) || sortable.$el.children().has(target);

                    if (move) {
                        previous.remove(this.placeholder);
                    } else if (!target.length) {
                        return;
                    }

                    sortable.insert(this.placeholder, target);

                    if (!~this.touched.indexOf(sortable)) {
                        this.touched.push(sortable);
                    }

                },

                scroll: function scroll() {
                    var scroll = window.scrollY;
                    if (scroll !== this.scrollY) {
                        this.pos.y += scroll - this.scrollY;
                        this.scrollY = scroll;
                        this.$emit();
                    }
                },

                end: function end(e) {

                    doc.off(pointerMove, this.move);
                    doc.off(pointerUp, this.end);
                    win.off('scroll', this.scroll);

                    if (!this.drag) {

                        if (e.type !== 'mouseup' && isWithin(e.target, 'a[href]')) {
                            location.href = $$$1(e.target).closest('a[href]').attr('href');
                        }

                        return;
                    }

                    preventClick();

                    var sortable = getSortable(this.placeholder[0]);

                    if (this === sortable) {
                        if (this.origin.index !== this.placeholder.index()) {
                            this.$el.trigger('change', [this, this.placeholder, 'moved']);
                        }
                    } else {
                        sortable.$el.trigger('change', [sortable, this.placeholder, 'added']);
                        this.$el.trigger('change', [this, this.placeholder, 'removed']);
                    }

                    this.$el.trigger('stop', [this]);

                    this.drag.remove();
                    this.drag = null;

                    this.touched.forEach(function (sortable) {
                        return sortable.$el.children().removeClass(((sortable.clsPlaceholder) + " " + (sortable.clsItem)));
                    });

                    doc.removeClass(this.clsDragState);

                },

                insert: function insert(element, target) {
                    var this$1 = this;


                    this.$el.children().addClass(this.clsItem);

                    var insert = function () {

                        if (target.length) {

                            if (!this$1.$el.has(element).length || element.prevAll().filter(target).length) {
                                element.insertBefore(target);
                            } else {
                                element.insertAfter(target);
                            }

                        } else {
                            this$1.$el.append(element);
                        }

                    };

                    if (this.animation) {
                        this.animate(insert);
                    } else {
                        insert();
                    }

                },

                remove: function remove(element) {

                    if (!this.$el.has(element).length) {
                        return;
                    }

                    if (this.animation) {
                        this.animate(function () {
                            return element.detach();
                        });
                    } else {
                        element.detach();
                    }

                },

                animate: function animate(action) {
                    var this$1 = this;


                    var props = [],
                        children = this.$el.children().toArray().map(function (el) {
                            el = $$$1(el);
                            props.push(extend$$1({
                                position: 'absolute',
                                pointerEvents: 'none',
                                width: el.outerWidth(),
                                height: el.outerHeight()
                            }, el.position()));
                            return el;
                        }),
                        reset = {position: '', width: '', height: '', pointerEvents: '', top: '', left: ''};

                    action();

                    children.forEach(function (el) {
                        return el.stop();
                    });
                    this.$el.children().css(reset);
                    this.$updateSync('update', true);

                    this.$el.css('min-height', this.$el.height());

                    var positions = children.map(function (el) {
                        return el.position();
                    });
                    promise.all(children.map(function (el, i) {
                        return el.css(props[i]).animate(positions[i], this$1.animation).promise();
                    }))
                        .then(function () {
                            this$1.$el.css('min-height', '').children().css(reset);
                            this$1.$updateSync('update', true);
                        });

                }

            }

        });
        var obj;

        function getSortable(element) {
            return UIkit.getComponent(element, 'sortable') || element.parentNode && getSortable(element.parentNode);
        }

        function preventClick() {
            var timer = setTimeout(function () {
                    return doc.trigger('click');
                }, 0),
                listener = function (e) {

                    e.preventDefault();
                    e.stopPropagation();

                    clearTimeout(timer);
                    off(doc, 'click', listener, true);
                };

            on(doc, 'click', listener, true);
        }

    }

    if (!true && typeof window !== 'undefined' && window.UIkit) {
        window.UIkit.use(plugin$3);
    }

    function plugin$4(UIkit) {

        if (plugin$4.installed) {
            return;
        }

        var util = UIkit.util;
        var mixin = UIkit.mixin;
        var $$$1 = util.$;
        var doc = util.doc;
        var fastdom = util.fastdom;
        var flipPosition = util.flipPosition;
        var isTouch = util.isTouch;
        var isWithin = util.isWithin;
        var pointerDown = util.pointerDown;
        var pointerEnter = util.pointerEnter;
        var pointerLeave = util.pointerLeave;
        var toJQuery = util.toJQuery;

        var active;

        UIkit.component('tooltip', {

            attrs: true,

            mixins: [mixin.toggable, mixin.position],

            props: {
                delay: Number,
                container: Boolean,
                title: String
            },

            defaults: {
                pos: 'top',
                title: '',
                delay: 0,
                animation: ['uk-animation-scale-up'],
                duration: 100,
                cls: 'uk-active',
                clsPos: 'uk-tooltip',
                container: true,
            },

            computed: {

                container: function container() {
                    return toJQuery(this.$props.container === true && UIkit.container || this.$props.container || UIkit.container);
                }

            },

            connected: function connected() {
                var this$1 = this;

                fastdom.mutate(function () {
                    return this$1.$el.removeAttr('title').attr('aria-expanded', false);
                });
            },

            disconnected: function disconnected() {
                this.hide();
            },

            methods: {

                show: function show() {
                    var this$1 = this;


                    if (active === this) {
                        return;
                    }

                    if (active) {
                        active.hide();
                    }

                    active = this;

                    doc.on(("click." + (this.$options.name)), function (e) {
                        if (!isWithin(e.target, this$1.$el)) {
                            this$1.hide();
                        }
                    });

                    clearTimeout(this.showTimer);

                    this.tooltip = $$$1(("<div class=\"" + (this.clsPos) + "\" aria-hidden=\"true\"><div class=\"" + (this.clsPos) + "-inner\">" + (this.title) + "</div></div>")).appendTo(this.container);

                    this.$el.attr('aria-expanded', true);

                    this.positionAt(this.tooltip, this.$el);
                    this.origin = this.getAxis() === 'y' ? ((flipPosition(this.dir)) + "-" + (this.align)) : ((this.align) + "-" + (flipPosition(this.dir)));

                    this.showTimer = setTimeout(function () {
                        this$1.toggleElement(this$1.tooltip, true);

                        this$1.hideTimer = setInterval(function () {
                            if (!this$1.$el.is(':visible')) {
                                this$1.hide();
                            }
                        }, 150);

                    }, this.delay);
                },

                hide: function hide() {

                    if (this.$el.is('input') && this.$el[0] === document.activeElement) {
                        return;
                    }

                    active = active !== this && active || false;

                    clearTimeout(this.showTimer);
                    clearInterval(this.hideTimer);
                    this.$el.attr('aria-expanded', false);
                    this.toggleElement(this.tooltip, false);
                    this.tooltip && this.tooltip.remove();
                    this.tooltip = false;
                    doc.off(("click." + (this.$options.name)));

                }

            },

            events: (obj = {

                'blur': 'hide'

            }, obj[("focus " + pointerEnter + " " + pointerDown)] = function (e) {
                if (e.type !== pointerDown || !isTouch(e)) {
                    this.show();
                }
            }, obj[pointerLeave] = function (e) {
                if (!isTouch(e)) {
                    this.hide();
                }
            }, obj)

        });
        var obj;

    }

    if (!true && typeof window !== 'undefined' && window.UIkit) {
        window.UIkit.use(plugin$4);
    }

    function plugin$5(UIkit) {

        if (plugin$5.installed) {
            return;
        }

        var ref = UIkit.util;
        var $$$1 = ref.$;
        var ajax$$1 = ref.ajax;
        var on = ref.on;

        UIkit.component('upload', {

            props: {
                allow: String,
                clsDragover: String,
                concurrent: Number,
                dataType: String,
                mime: String,
                msgInvalidMime: String,
                msgInvalidName: String,
                multiple: Boolean,
                name: String,
                params: Object,
                type: String,
                url: String
            },

            defaults: {
                allow: false,
                clsDragover: 'uk-dragover',
                concurrent: 1,
                dataType: undefined,
                mime: false,
                msgInvalidMime: 'Invalid File Type: %s',
                msgInvalidName: 'Invalid File Name: %s',
                multiple: false,
                name: 'files[]',
                params: {},
                type: 'POST',
                url: '',
                abort: null,
                beforeAll: null,
                beforeSend: null,
                complete: null,
                completeAll: null,
                error: null,
                fail: function fail(msg) {
                    alert(msg);
                },
                load: null,
                loadEnd: null,
                loadStart: null,
                progress: null
            },

            events: {

                change: function change(e) {

                    if (!$$$1(e.target).is('input[type="file"]')) {
                        return;
                    }

                    e.preventDefault();

                    if (e.target.files) {
                        this.upload(e.target.files);
                    }

                    e.target.value = '';
                },

                drop: function drop(e) {
                    e.preventDefault();
                    e.stopPropagation();

                    var transfer = e.originalEvent.dataTransfer;

                    if (!transfer || !transfer.files) {
                        return;
                    }

                    this.$el.removeClass(this.clsDragover);

                    this.upload(transfer.files);
                },

                dragenter: function dragenter(e) {
                    e.preventDefault();
                    e.stopPropagation();
                },

                dragover: function dragover(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.$el.addClass(this.clsDragover);
                },

                dragleave: function dragleave(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.$el.removeClass(this.clsDragover);
                }

            },

            methods: {

                upload: function upload(files) {
                    var this$1 = this;


                    if (!files.length) {
                        return;
                    }

                    this.$el.trigger('upload', [files]);

                    for (var i = 0; i < files.length; i++) {

                        if (this$1.allow) {
                            if (!match(this$1.allow, files[i].name)) {
                                this$1.fail(this$1.msgInvalidName.replace(/%s/, this$1.allow));
                                return;
                            }
                        }

                        if (this$1.mime) {
                            if (!match(this$1.mime, files[i].type)) {
                                this$1.fail(this$1.msgInvalidMime.replace(/%s/, this$1.mime));
                                return;
                            }
                        }

                    }

                    if (!this.multiple) {
                        files = [files[0]];
                    }

                    this.beforeAll && this.beforeAll(this, files);

                    var chunks = chunk(files, this.concurrent),
                        upload = function (files) {

                            var data = new FormData();

                            files.forEach(function (file) {
                                return data.append(this$1.name, file);
                            });

                            for (var key in this$1.params) {
                                data.append(key, this$1.params[key]);
                            }

                            ajax$$1({
                                data: data,
                                url: this$1.url,
                                type: this$1.type,
                                dataType: this$1.dataType,
                                beforeSend: this$1.beforeSend,
                                complete: [this$1.complete, function (xhr, status) {
                                    if (chunks.length) {
                                        upload(chunks.shift());
                                    } else {
                                        this$1.completeAll && this$1.completeAll(xhr);
                                    }

                                    if (status === 'abort') {
                                        this$1.abort && this$1.abort(xhr);
                                    }
                                }],
                                cache: false,
                                contentType: false,
                                processData: false,
                                xhr: function () {
                                    var xhr = $$$1.ajaxSettings.xhr();
                                    xhr.upload && this$1.progress && on(xhr.upload, 'progress', this$1.progress);
                                    ['loadStart', 'load', 'loadEnd', 'error', 'abort'].forEach(function (type) {
                                        return this$1[type] && on(xhr, type.toLowerCase(), this$1[type]);
                                    });
                                    return xhr;
                                }
                            });

                        };

                    upload(chunks.shift());

                }

            }

        });

        function match(pattern, path) {
            return path.match(new RegExp(("^" + (pattern.replace(/\//g, '\\/').replace(/\*\*/g, '(\\/[^\\/]+)*').replace(/\*/g, '[^\\/]+').replace(/((?!\\))\?/g, '$1.')) + "$"), 'i'));
        }

        function chunk(files, size) {
            var chunks = [];
            for (var i = 0; i < files.length; i += size) {
                var chunk = [];
                for (var j = 0; j < size; j++) {
                    chunk.push(files[i + j]);
                }
                chunks.push(chunk);
            }
            return chunks;
        }

    }

    if (!true && typeof window !== 'undefined' && window.UIkit) {
        window.UIkit.use(plugin$5);
    }

    UIkit$2.use(plugin);
    UIkit$2.use(plugin$1);
    UIkit$2.use(plugin$2);
    UIkit$2.use(plugin$3);
    UIkit$2.use(plugin$4);
    UIkit$2.use(plugin$5);

    {
        boot(UIkit$2);
    }

    return UIkit$2;

})));
/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.2
 */
;(function (f) {
    "use strict";
    "function" === typeof define && define.amd ? define(["jquery"], f) : "undefined" !== typeof module && module.exports ? module.exports = f(require("jquery")) : f(jQuery)
})(function ($) {
    "use strict";

    function n(a) {
        return !a.nodeName || -1 !== $.inArray(a.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
    }

    function h(a) {
        return $.isFunction(a) || $.isPlainObject(a) ? a : {top: a, left: a}
    }

    var p = $.scrollTo = function (a, d, b) {
        return $(window).scrollTo(a, d, b)
    };
    p.defaults = {axis: "xy", duration: 0, limit: !0};
    $.fn.scrollTo = function (a, d, b) {
        "object" === typeof d && (b = d, d = 0);
        "function" === typeof b && (b = {onAfter: b});
        "max" === a && (a = 9E9);
        b = $.extend({}, p.defaults, b);
        d = d || b.duration;
        var u = b.queue && 1 < b.axis.length;
        u && (d /= 2);
        b.offset = h(b.offset);
        b.over = h(b.over);
        return this.each(function () {
            function k(a) {
                var k = $.extend({}, b, {
                    queue: !0, duration: d, complete: a && function () {
                        a.call(q, e, b)
                    }
                });
                r.animate(f, k)
            }

            if (null !== a) {
                var l = n(this), q = l ? this.contentWindow || window : this, r = $(q), e = a, f = {}, t;
                switch (typeof e) {
                    case "number":
                    case "string":
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)) {
                            e = h(e);
                            break
                        }
                        e = l ? $(e) : $(e, q);
                    case "object":
                        if (e.length === 0) return;
                        if (e.is || e.style) t = (e = $(e)).offset()
                }
                var v = $.isFunction(b.offset) && b.offset(q, e) || b.offset;
                $.each(b.axis.split(""), function (a, c) {
                    var d = "x" === c ? "Left" : "Top", m = d.toLowerCase(), g = "scroll" + d, h = r[g](),
                        n = p.max(q, c);
                    t ? (f[g] = t[m] + (l ? 0 : h - r.offset()[m]), b.margin && (f[g] -= parseInt(e.css("margin" + d), 10) || 0, f[g] -= parseInt(e.css("border" + d + "Width"), 10) || 0), f[g] += v[m] || 0, b.over[m] && (f[g] += e["x" === c ? "width" : "height"]() * b.over[m])) : (d = e[m], f[g] = d.slice && "%" === d.slice(-1) ? parseFloat(d) / 100 * n : d);
                    b.limit && /^\d+$/.test(f[g]) && (f[g] = 0 >= f[g] ? 0 : Math.min(f[g], n));
                    !a && 1 < b.axis.length && (h === f[g] ? f = {} : u && (k(b.onAfterFirst), f = {}))
                });
                k(b.onAfter)
            }
        })
    };
    p.max = function (a, d) {
        var b = "x" === d ? "Width" : "Height", h = "scroll" + b;
        if (!n(a)) return a[h] - $(a)[b.toLowerCase()]();
        var b = "client" + b, k = a.ownerDocument || a.document, l = k.documentElement, k = k.body;
        return Math.max(l[h], k[h]) - Math.min(l[b], k[b])
    };
    $.Tween.propHooks.scrollLeft = $.Tween.propHooks.scrollTop = {
        get: function (a) {
            return $(a.elem)[a.prop]()
        }, set: function (a) {
            var d = this.get(a);
            if (a.options.interrupt && a._last && a._last !== d) return $(a.elem).stop();
            var b = Math.round(a.now);
            d !== b && ($(a.elem)[a.prop](b), a._last = this.get(a))
        }
    };
    return p
});
!function () {
    "use strict";

    function e(n) {
        return "undefined" == typeof this || Object.getPrototypeOf(this) !== e.prototype ? new e(n) : (O = this, O.version = "3.3.6", O.tools = new E, O.isSupported() ? (O.tools.extend(O.defaults, n || {}), O.defaults.container = t(O.defaults), O.store = {
            elements: {},
            containers: []
        }, O.sequences = {}, O.history = [], O.uid = 0, O.initialized = !1) : "undefined" != typeof console && null !== console, O)
    }

    function t(e) {
        if (e && e.container) {
            if ("string" == typeof e.container) return window.document.documentElement.querySelector(e.container);
            if (O.tools.isNode(e.container)) return e.container
        }
        return O.defaults.container
    }

    function n(e, t) {
        return "string" == typeof e ? Array.prototype.slice.call(t.querySelectorAll(e)) : O.tools.isNode(e) ? [e] : O.tools.isNodeList(e) ? Array.prototype.slice.call(e) : []
    }

    function i() {
        return ++O.uid
    }

    function o(e, t, n) {
        t.container && (t.container = n), e.config ? e.config = O.tools.extendClone(e.config, t) : e.config = O.tools.extendClone(O.defaults, t), "top" === e.config.origin || "bottom" === e.config.origin ? e.config.axis = "Y" : e.config.axis = "X"
    }

    function r(e) {
        var t = window.getComputedStyle(e.domEl);
        e.styles || (e.styles = {
            transition: {},
            transform: {},
            computed: {}
        }, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" !== t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = s(e, 0), e.styles.transition.delayed = s(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", a(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", a(e)
    }

    function s(e, t) {
        var n = e.config;
        return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; "
    }

    function a(e) {
        var t, n = e.config, i = e.styles.transform;
        t = "top" === n.origin || "left" === n.origin ? /^-/.test(n.distance) ? n.distance.substr(1) : "-" + n.distance : n.distance, parseInt(n.distance) && (i.initial += " translate" + n.axis + "(" + t + ")", i.target += " translate" + n.axis + "(0)"), n.scale && (i.initial += " scale(" + n.scale + ")", i.target += " scale(1)"), n.rotate.x && (i.initial += " rotateX(" + n.rotate.x + "deg)", i.target += " rotateX(0)"), n.rotate.y && (i.initial += " rotateY(" + n.rotate.y + "deg)", i.target += " rotateY(0)"), n.rotate.z && (i.initial += " rotateZ(" + n.rotate.z + "deg)", i.target += " rotateZ(0)"), i.initial += "; opacity: " + n.opacity + ";", i.target += "; opacity: " + e.styles.computed.opacity + ";"
    }

    function l(e) {
        var t = e.config.container;
        t && O.store.containers.indexOf(t) === -1 && O.store.containers.push(e.config.container), O.store.elements[e.id] = e
    }

    function c(e, t, n) {
        var i = {target: e, config: t, interval: n};
        O.history.push(i)
    }

    function f() {
        if (O.isSupported()) {
            y();
            for (var e = 0; e < O.store.containers.length; e++) O.store.containers[e].addEventListener("scroll", d), O.store.containers[e].addEventListener("resize", d);
            O.initialized || (window.addEventListener("scroll", d), window.addEventListener("resize", d), O.initialized = !0)
        }
        return O
    }

    function d() {
        T(y)
    }

    function u() {
        var e, t, n, i;
        O.tools.forOwn(O.sequences, function (o) {
            i = O.sequences[o], e = !1;
            for (var r = 0; r < i.elemIds.length; r++) n = i.elemIds[r], t = O.store.elements[n], q(t) && !e && (e = !0);
            i.active = e
        })
    }

    function y() {
        var e, t;
        u(), O.tools.forOwn(O.store.elements, function (n) {
            t = O.store.elements[n], e = w(t), g(t) ? (t.config.beforeReveal(t.domEl), e ? t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.delayed) : t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.instant), p("reveal", t, e), t.revealing = !0, t.seen = !0, t.sequence && m(t, e)) : v(t) && (t.config.beforeReset(t.domEl), t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.initial + t.styles.transition.instant), p("reset", t), t.revealing = !1)
        })
    }

    function m(e, t) {
        var n = 0, i = 0, o = O.sequences[e.sequence.id];
        o.blocked = !0, t && "onload" === e.config.useDelay && (i = e.config.delay), e.sequence.timer && (n = Math.abs(e.sequence.timer.started - new Date), window.clearTimeout(e.sequence.timer)), e.sequence.timer = {started: new Date}, e.sequence.timer.clock = window.setTimeout(function () {
            o.blocked = !1, e.sequence.timer = null, d()
        }, Math.abs(o.interval) + i - n)
    }

    function p(e, t, n) {
        var i = 0, o = 0, r = "after";
        switch (e) {
            case"reveal":
                o = t.config.duration, n && (o += t.config.delay), r += "Reveal";
                break;
            case"reset":
                o = t.config.duration, r += "Reset"
        }
        t.timer && (i = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = {started: new Date}, t.timer.clock = window.setTimeout(function () {
            t.config[r](t.domEl), t.timer = null
        }, o - i)
    }

    function g(e) {
        if (e.sequence) {
            var t = O.sequences[e.sequence.id];
            return t.active && !t.blocked && !e.revealing && !e.disabled
        }
        return q(e) && !e.revealing && !e.disabled
    }

    function w(e) {
        var t = e.config.useDelay;
        return "always" === t || "onload" === t && !O.initialized || "once" === t && !e.seen
    }

    function v(e) {
        if (e.sequence) {
            var t = O.sequences[e.sequence.id];
            return !t.active && e.config.reset && e.revealing && !e.disabled
        }
        return !q(e) && e.config.reset && e.revealing && !e.disabled
    }

    function b(e) {
        return {width: e.clientWidth, height: e.clientHeight}
    }

    function h(e) {
        if (e && e !== window.document.documentElement) {
            var t = x(e);
            return {x: e.scrollLeft + t.left, y: e.scrollTop + t.top}
        }
        return {x: window.pageXOffset, y: window.pageYOffset}
    }

    function x(e) {
        var t = 0, n = 0, i = e.offsetHeight, o = e.offsetWidth;
        do isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft), e = e.offsetParent; while (e);
        return {top: t, left: n, height: i, width: o}
    }

    function q(e) {
        function t() {
            var t = c + a * s, n = f + l * s, i = d - a * s, y = u - l * s, m = r.y + e.config.viewOffset.top,
                p = r.x + e.config.viewOffset.left, g = r.y - e.config.viewOffset.bottom + o.height,
                w = r.x - e.config.viewOffset.right + o.width;
            return t < g && i > m && n < w && y > p
        }

        function n() {
            return "fixed" === window.getComputedStyle(e.domEl).position
        }

        var i = x(e.domEl), o = b(e.config.container), r = h(e.config.container), s = e.config.viewFactor, a = i.height,
            l = i.width, c = i.top, f = i.left, d = c + a, u = f + l;
        return t() || n()
    }

    function E() {
    }

    var O, T;
    e.prototype.defaults = {
        origin: "bottom",
        distance: "20px",
        duration: 500,
        delay: 0,
        rotate: {x: 0, y: 0, z: 0},
        opacity: 0,
        scale: .9,
        easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
        container: window.document.documentElement,
        mobile: !0,
        reset: !1,
        useDelay: "always",
        viewFactor: .2,
        viewOffset: {top: 0, right: 0, bottom: 0, left: 0},
        beforeReveal: function (e) {
        },
        beforeReset: function (e) {
        },
        afterReveal: function (e) {
        },
        afterReset: function (e) {
        }
    }, e.prototype.isSupported = function () {
        var e = document.documentElement.style;
        return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e
    }, e.prototype.reveal = function (e, s, a, d) {
        var u, y, m, p, g, w;
        if (void 0 !== s && "number" == typeof s ? (a = s, s = {}) : void 0 !== s && null !== s || (s = {}), u = t(s), y = n(e, u), !y.length) return O;
        a && "number" == typeof a && (w = i(), g = O.sequences[w] = {id: w, interval: a, elemIds: [], active: !1});
        for (var v = 0; v < y.length; v++) p = y[v].getAttribute("data-sr-id"), p ? m = O.store.elements[p] : (m = {
            id: i(),
            domEl: y[v],
            seen: !1,
            revealing: !1
        }, m.domEl.setAttribute("data-sr-id", m.id)), g && (m.sequence = {
            id: g.id,
            index: g.elemIds.length
        }, g.elemIds.push(m.id)), o(m, s, u), r(m), l(m), O.tools.isMobile() && !m.config.mobile || !O.isSupported() ? (m.domEl.setAttribute("style", m.styles.inline), m.disabled = !0) : m.revealing || m.domEl.setAttribute("style", m.styles.inline + m.styles.transform.initial);
        return !d && O.isSupported() && (c(e, s, a), O.initTimeout && window.clearTimeout(O.initTimeout), O.initTimeout = window.setTimeout(f, 0)), O
    }, e.prototype.sync = function () {
        if (O.history.length && O.isSupported()) {
            for (var e = 0; e < O.history.length; e++) {
                var t = O.history[e];
                O.reveal(t.target, t.config, t.interval, !0)
            }
            f()
        }
        return O
    }, E.prototype.isObject = function (e) {
        return null !== e && "object" == typeof e && e.constructor === Object
    }, E.prototype.isNode = function (e) {
        return "object" == typeof window.Node ? e instanceof window.Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
    }, E.prototype.isNodeList = function (e) {
        var t = Object.prototype.toString.call(e), n = /^\[object (HTMLCollection|NodeList|Object)\]$/;
        return "object" == typeof window.NodeList ? e instanceof window.NodeList : e && "object" == typeof e && n.test(t) && "number" == typeof e.length && (0 === e.length || this.isNode(e[0]))
    }, E.prototype.forOwn = function (e, t) {
        if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".');
        for (var n in e) e.hasOwnProperty(n) && t(n)
    }, E.prototype.extend = function (e, t) {
        return this.forOwn(t, function (n) {
            this.isObject(t[n]) ? (e[n] && this.isObject(e[n]) || (e[n] = {}), this.extend(e[n], t[n])) : e[n] = t[n]
        }.bind(this)), e
    }, E.prototype.extendClone = function (e, t) {
        return this.extend(this.extend({}, e), t)
    }, E.prototype.isMobile = function () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }, T = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
        window.setTimeout(e, 1e3 / 60)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return e
    }) : "undefined" != typeof module && module.exports ? module.exports = e : window.ScrollReveal = e
}();
window.onload = function () {
    TweenMax.to('.bg-mask', 1, {opacity: 0, delay: 0.5, ease: Power2.easeIn});
    $('.bg-mask').css({"z-index": 0});
};
$(document).ready(function () {
    if ($('body').attr('id') === "template-project-single") {
        $('html').animate({scrollTop: 0}, 1);
        $('body').animate({scrollTop: 0}, 1);
        TweenMax.set('.nav-wrapper', {y: "-80px", opacity: 0});
        TweenMax.set('.hero p', {y: "40px", opacity: 0});
        TweenMax.set('.hero h1', {y: "40px", opacity: 0});
        var heroHeight = $('.hero').outerHeight();
        var bgStart = $('.hero').attr('data-bgColorStart');
        var bgEnd = $('.hero').attr('data-bgColorEnd');
        $('.trans-layer').css({
            "background": "linear-gradient(40deg, rgba(" + bgStart + ",1) 0%, rgba(" + bgEnd + ",1) 100%)",
            "opacity": 1,
            "z-index": 9999999,
            "top": 0,
        });
        $('.hero').css({"opacity": 0});
        $('.bg-mask').css({
            "background": "linear-gradient(40deg, rgba(" + bgStart + ",1) 0%, rgba(" + bgEnd + ",1) 100%)",
            "z-index": 999999
        });
        TweenMax.to('.trans-layer', 1, {
            height: heroHeight, ease: Power3.easeIn, onComplete: function () {
                var bgImage = $('.hero').attr('data-bgImage');
                var bgPosition = $('.hero').attr('data-bgPosition');
                var bg = 'url(' + bgImage + ') center ' + bgPosition + ' no-repeat / cover';
                $('.hero').css({"background": bg});
            }
        });
        TweenMax.to('.hero', 0.01, {
            opacity: 1, delay: 0.99, onComplete: function () {
                TweenMax.to('.nav-wrapper', 0.5, {y: "0px", opacity: 1, ease: Power1.easeOut});
                TweenMax.to('.hero p', 0.4, {y: "-40px", opacity: 1, ease: Power1.easeOut});
                TweenMax.to('.hero h1', 0.2, {y: "-40px", opacity: 1, delay: 0.1, ease: Power1.easeOut});
            }
        });
        TweenMax.to('.trans-layer', 1, {
            opacity: 0, delay: 1, onComplete: function () {
                TweenMax.set('.trans-layer', {height: 0, zIndex: 1});
            }
        });
        $('.trans-link a').click(function () {
            TweenMax.to('.hero', 0.6, {opacity: 0, ease: Power1.easeOut});
            TweenMax.to('footer, section:not(.hero)', 0.6, {y: "150px", opacity: 0, ease: Power1.easeOut});
        });
    } else {
        TweenMax.set('.nav-wrapper', {y: "-80px", opacity: 0});
        TweenMax.to('.nav-wrapper', 1, {y: "0px", opacity: 1, ease: Power1.easeOut});
        $('.trans-link a, .trans-a').click(function () {
            TweenMax.to('main', 0.5, {y: "100px", opacity: 0, ease: Power1.easeOut});
        });
    }
    $('.project-link').click(function (e) {
        e.preventDefault();
        var url = $(this).attr('data-url');
        var bg = "#2ca9e0";
        $('.trans-layer').css({"bottom": 0, "background": bg, "opacity": 1, "z-index": 99999999999999999});
        TweenMax.to('#site-nav', 0.2, {y: "-85px", ease: Power1.easeIn});
        TweenMax.to('.trans-layer', 0.5, {
            height: "100%", top: "0", ease: Power1.easeOut, onComplete: function () {
                $('#page-wrapper').css({"opacity": 0});
                window.location.href = url;
            }
        });
    });
    hoverInit();
    if ($('body').attr("id") === "template-contact" || $('body').attr("id") === "template-career-single") {
        formInit();
    }
    var modal = UIkit.modal("#overlay-menu");
    $('.burger-icon').click(function () {
        var links = $(".page-links ul li ");
        $(links).each(function (i, element) {
            TweenMax.set(element, {y: 40, opacity: 0});
            TweenMax.to(element, 0.5, {
                onStart: removeFadeBottom(element),
                y: 0,
                delay: 0.3 + i * 0.05,
                opacity: 1,
                ease: Power2.easeOut
            });
        });

        function removeFadeBottom(e) {
            $(e).removeClass("fade-from-bottom-slow");
        }

        TweenMax.set(".social-links", {y: 30, opacity: 0});
        TweenMax.to(".social-links", 0.6, {y: 0, opacity: 1, delay: 0.6, ease: Power3.easeOut});
        modal.show();
    });
    $('#overlay-menu-close').click(function () {
        modal.hide(200);
    });
    $('.page-links a').click(function () {
        modal.hide(200);
    });
    // $('#site-nav a, .menu li a, .trans-link a').click(function () {
    //     TweenMax.to('#site-nav', 0.2, {y: "-90px", ease: Power1.easeIn});
    // });
    $('form').on('click', 'input[type=checkbox]', function () {
        $(this).parent().toggleClass("checked");
    });
    $('form').on('click', 'input[type=radio]', function () {
        $('input[type=radio]').parent().removeClass("checked");
        $(this).parent().addClass("checked");
    });
    $('#template-careers .btn-scrolldown').click(function () {
        $(window).stop(true).scrollTo($('#open-positions'), {duration: 600, offset: -40});
    });

    function hoverInit() {
        $('.project, .ways .block').hover(function () {
            $(this).find('.btn-view').addClass('is-hover');
        }, function () {
            $(this).find('.btn-view').removeClass('is-hover');
        });
    }

    window.sr = ScrollReveal({easing: 'ease-out', scale: 1, distance: '40px', duration: 500, viewFactor: 0.1});
    sr.reveal('.top-nav', {delay: 350}, 0);
    sr.reveal('.hero h1', {duration: 500}, 100);
    sr.reveal('.hero p, .btn-scrolldown', {delay: 300, duration: 400}, 0);
    sr.reveal('.position, .career-contact', {delay: 200}, 50);
    sr.reveal('article h4, article ul, article p', {delay: 200}, 50);
    sr.reveal('.sub-section h2, .sub-section .text, .name, .sub-section h5', {delay: 200}, 0);
    sr.reveal('.member', {delay: 200}, 50);
    sr.reveal('.item', {delay: 200}, 50);
    sr.reveal('.standards h5', {delay: 200}, 50);
    sr.reveal('.post', {delay: 200}, 50);
    sr.reveal('.uk-legend, .uk-input, .btn-browse, .input-wrap, textarea, .btn-submit', {delay: 200}, 50);
    sr.reveal('#template-home .service-item', {delay: 200}, 50);
    sr.reveal('#template-about .service-item', {delay: 200}, 80);
    sr.reveal('.client', {delay: 200}, 50);
    sr.reveal('.info', {delay: 200}, 50);
    sr.reveal('.gains', {delay: 200}, 50);
    sr.reveal('.img-sr', {delay: 200}, 50);
    sr.reveal('.ways h2, .ways h3, .ways p', {delay: 200}, 50);
    sr.reveal('#template-services .hero p, #template-services .hero h1', {delay: 250}, 200);
    sr.reveal('#template-archive .projects', {delay: 150}, 100);
    sr.reveal('#template-services .model p', {delay: 200}, 100);
    sr.reveal('#template-services h4, #template-services .benefits-list li, #template-services .btn-view', {delay: 200}, 100);
    sr.reveal('.block', {delay: 200}, 300);
    sr.reveal('.project', {delay: 200}, 300);
    sr.reveal('h2', {delay: 80}, 0);
    sr.reveal('h1', {delay: 100}, 0);
    sr.reveal('.contact-us .h1, .contact-us p', {delay: 100}, 100);
    sr.reveal('.footer-logo', {delay: 100}, 0);
    sr.reveal('.img-sr', {delay: 200}, 50);
    sr.reveal('#template-services .service-block', {delay: 0, duration: 2000, opacity: 0, distance: '0px'}, 0);
    sr.reveal('#template-services .service-item', {distance: '50%', duration: 700, opacity: 1}, 0);
    sr.reveal('#template-services .service-item h2', {delay: 600, duration: 600}, 0);
    sr.reveal('#template-services .service-item .list', {delay: 700, duration: 600}, 0);
});