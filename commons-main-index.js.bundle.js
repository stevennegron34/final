/*! For license information please see commons-main-index.js.bundle.js.LICENSE.txt */
(self.webpackChunkNxStreaming = self.webpackChunkNxStreaming || []).push([
    [19], {
        7210: (e, t, n) => {
            "use strict";
            n.d(t, {
                v0: () => o.o
            });
            var o = n(4733);
            n(4444), n(2238), n(3333), n(8463)
        },
        558: function (e, t, n) {
            var o, r, i, s, a, u, c, l, f, p, d;
            e.exports = (o = n(1966), r = n(3105), i = n(894), s = n(8804), a = n(4486), u = n(2525), c = n(308), l = n(9734), f = n(3493), p = n(3955), d = n(7294), function () {
                "use strict";
                var e = {
                        654: function (e, t, n) {
                            var o, r = this && this.__assign || function () {
                                    return r = Object.assign || function (e) {
                                        for (var t, n = 1, o = arguments.length; n < o; n++)
                                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                        return e
                                    }, r.apply(this, arguments)
                                },
                                i = this && this.__createBinding || (Object.create ? function (e, t, n, o) {
                                    void 0 === o && (o = n);
                                    var r = Object.getOwnPropertyDescriptor(t, n);
                                    r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                                        enumerable: !0,
                                        get: function () {
                                            return t[n]
                                        }
                                    }), Object.defineProperty(e, o, r)
                                } : function (e, t, n, o) {
                                    void 0 === o && (o = n), e[o] = t[n]
                                }),
                                s = this && this.__setModuleDefault || (Object.create ? function (e, t) {
                                    Object.defineProperty(e, "default", {
                                        enumerable: !0,
                                        value: t
                                    })
                                } : function (e, t) {
                                    e.default = t
                                }),
                                a = this && this.__importStar || function (e) {
                                    if (e && e.__esModule) return e;
                                    var t = {};
                                    if (null != e)
                                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                                    return s(t, e), t
                                },
                                u = this && this.__spreadArray || function (e, t, n) {
                                    if (n || 2 === arguments.length)
                                        for (var o, r = 0, i = t.length; r < i; r++) !o && r in t || (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
                                    return e.concat(o || Array.prototype.slice.call(t))
                                },
                                c = this && this.__importDefault || function (e) {
                                    return e && e.__esModule ? e : {
                                        default: e
                                    }
                                };
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.setKeyMap = t.destroy = t.setThrottle = t.init = t.SpatialNavigation = t.ROOT_FOCUS_KEY = void 0;
                            var l = c(n(747)),
                                f = c(n(842)),
                                p = c(n(432)),
                                d = c(n(23)),
                                h = c(n(682)),
                                y = c(n(784)),
                                v = c(n(67)),
                                g = c(n(117)),
                                b = a(n(964)),
                                m = c(n(35)),
                                w = "left",
                                C = "right",
                                F = "up",
                                x = "down",
                                K = "enter",
                                E = ((o = {}).left = [37], o.up = [38], o.right = [39], o.down = [40], o.enter = [13], o);
                            t.ROOT_FOCUS_KEY = "SN:ROOT";
                            var S = ["#0FF", "#FF0", "#F0F"],
                                O = {
                                    leading: !0,
                                    trailing: !1
                                },
                                P = function () {
                                    function e() {
                                        this.focusableComponents = {}, this.focusKey = null, this.parentsHavingFocusedChild = [], this.enabled = !1, this.nativeMode = !1, this.throttle = 0, this.throttleKeypresses = !1, this.useGetBoundingClientRect = !1, this.pressedKeys = {}, this.paused = !1, this.keyDownEventListener = null, this.keyUpEventListener = null, this.keyMap = E, this.onKeyEvent = this.onKeyEvent.bind(this), this.pause = this.pause.bind(this), this.resume = this.resume.bind(this), this.setFocus = this.setFocus.bind(this), this.updateAllLayouts = this.updateAllLayouts.bind(this), this.navigateByDirection = this.navigateByDirection.bind(this), this.init = this.init.bind(this), this.setThrottle = this.setThrottle.bind(this), this.destroy = this.destroy.bind(this), this.setKeyMap = this.setKeyMap.bind(this), this.getCurrentFocusKey = this.getCurrentFocusKey.bind(this), this.debug = !1, this.visualDebugger = null, this.logIndex = 0
                                    }
                                    return e.getCutoffCoordinate = function (e, t, n, o) {
                                        var r = o.left,
                                            i = o.top,
                                            s = o.width,
                                            a = o.height,
                                            u = e ? i : r,
                                            c = e ? a : s;
                                        return t ? n ? u : u + c : n ? u + c : u
                                    }, e.getRefCorners = function (e, t, n) {
                                        var o = n.left,
                                            r = n.top,
                                            i = n.width,
                                            s = n.height,
                                            a = {
                                                a: {
                                                    x: 0,
                                                    y: 0
                                                },
                                                b: {
                                                    x: 0,
                                                    y: 0
                                                }
                                            };
                                        switch (e) {
                                            case F:
                                                var u = t ? r + s : r;
                                                a.a = {
                                                    x: o,
                                                    y: u
                                                }, a.b = {
                                                    x: o + i,
                                                    y: u
                                                };
                                                break;
                                            case x:
                                                u = t ? r : r + s, a.a = {
                                                    x: o,
                                                    y: u
                                                }, a.b = {
                                                    x: o + i,
                                                    y: u
                                                };
                                                break;
                                            case w:
                                                var c = t ? o + i : o;
                                                a.a = {
                                                    x: c,
                                                    y: r
                                                }, a.b = {
                                                    x: c,
                                                    y: r + s
                                                };
                                                break;
                                            case C:
                                                c = t ? o : o + i, a.a = {
                                                    x: c,
                                                    y: r
                                                }, a.b = {
                                                    x: c,
                                                    y: r + s
                                                }
                                        }
                                        return a
                                    }, e.isAdjacentSlice = function (e, t, n) {
                                        var o = e.a,
                                            r = e.b,
                                            i = t.a,
                                            s = t.b,
                                            a = n ? "x" : "y",
                                            u = o[a],
                                            c = r[a],
                                            l = i[a],
                                            f = s[a],
                                            p = .2 * (c - u);
                                        return Math.max(0, Math.min(c, f) - Math.max(u, l)) >= p
                                    }, e.getPrimaryAxisDistance = function (e, t, n) {
                                        var o = e.a,
                                            r = t.a,
                                            i = n ? "y" : "x";
                                        return Math.abs(r[i] - o[i])
                                    }, e.getSecondaryAxisDistance = function (e, t, n) {
                                        var o = e.a,
                                            r = e.b,
                                            i = t.a,
                                            s = t.b,
                                            a = n ? "x" : "y",
                                            u = o[a],
                                            c = r[a],
                                            l = i[a],
                                            f = s[a],
                                            p = [];
                                        return p.push(Math.abs(l - u)), p.push(Math.abs(l - c)), p.push(Math.abs(f - u)), p.push(Math.abs(f - c)), Math.min.apply(Math, p)
                                    }, e.prototype.sortSiblingsByPriority = function (t, n, o, r) {
                                        var i = this,
                                            s = o === x || o === F,
                                            a = e.getRefCorners(o, !1, n);
                                        return (0, p.default)(t, (function (t) {
                                            var n = e.getRefCorners(o, !0, t.layout),
                                                u = e.isAdjacentSlice(a, n, s),
                                                c = u ? e.getPrimaryAxisDistance : e.getSecondaryAxisDistance,
                                                l = u ? e.getSecondaryAxisDistance : e.getPrimaryAxisDistance,
                                                f = c(a, n, s),
                                                p = l(a, n, s),
                                                d = 5 * f + p,
                                                h = (d + 1) / (u ? 5 : 1);
                                            return i.log("smartNavigate", "distance (primary, secondary, total weighted) for ".concat(t.focusKey, " relative to ").concat(r, " is"), f, p, d), i.log("smartNavigate", "priority for ".concat(t.focusKey, " relative to ").concat(r, " is"), h), i.visualDebugger && (i.visualDebugger.drawPoint(n.a.x, n.a.y, "yellow", 6), i.visualDebugger.drawPoint(n.b.x, n.b.y, "yellow", 6)), h
                                        }))
                                    }, e.prototype.init = function (e) {
                                        var t = void 0 === e ? {} : e,
                                            n = t.debug,
                                            o = void 0 !== n && n,
                                            r = t.visualDebug,
                                            i = void 0 !== r && r,
                                            s = t.nativeMode,
                                            a = void 0 !== s && s,
                                            u = t.throttle,
                                            c = void 0 === u ? 0 : u,
                                            l = t.throttleKeypresses,
                                            f = void 0 !== l && l,
                                            p = t.useGetBoundingClientRect,
                                            d = void 0 !== p && p;
                                        this.enabled || (this.enabled = !0, this.nativeMode = a, this.throttleKeypresses = f, this.useGetBoundingClientRect = d, this.debug = o, this.nativeMode || (Number.isInteger(c) && c > 0 && (this.throttle = c), this.bindEventHandlers(), i && (this.visualDebugger = new m.default, this.startDrawLayouts())))
                                    }, e.prototype.setThrottle = function (e) {
                                        var t = void 0 === e ? {} : e,
                                            n = t.throttle,
                                            o = void 0 === n ? 0 : n,
                                            r = t.throttleKeypresses,
                                            i = void 0 !== r && r;
                                        this.throttleKeypresses = i, this.nativeMode || (this.unbindEventHandlers(), Number.isInteger(o) && (this.throttle = o), this.bindEventHandlers())
                                    }, e.prototype.startDrawLayouts = function () {
                                        var e = this,
                                            t = function () {
                                                requestAnimationFrame((function () {
                                                    e.visualDebugger.clearLayouts(), (0, y.default)(e.focusableComponents, (function (t, n) {
                                                        e.visualDebugger.drawLayout(t.layout, n, t.parentFocusKey)
                                                    })), t()
                                                }))
                                            };
                                        t()
                                    }, e.prototype.destroy = function () {
                                        this.enabled && (this.enabled = !1, this.nativeMode = !1, this.throttle = 0, this.throttleKeypresses = !1, this.focusKey = null, this.parentsHavingFocusedChild = [], this.focusableComponents = {}, this.paused = !1, this.keyMap = E, this.unbindEventHandlers())
                                    }, e.prototype.getEventType = function (e) {
                                        return (0, d.default)(this.getKeyMap(), (function (t) {
                                            return t.includes(e)
                                        }))
                                    }, e.prototype.bindEventHandlers = function () {
                                        var e = this;
                                        "undefined" != typeof window && window.addEventListener && (this.keyDownEventListener = function (t) {
                                            if (!0 !== e.paused) {
                                                e.debug && (e.logIndex += 1);
                                                var n = e.getEventType(t.keyCode);
                                                if (n) {
                                                    e.pressedKeys[n] = e.pressedKeys[n] ? e.pressedKeys[n] + 1 : 1, t.preventDefault(), t.stopPropagation();
                                                    var o = {
                                                        pressedKeys: e.pressedKeys
                                                    };
                                                    n === K && e.focusKey ? e.onEnterPress(o) : !1 === e.onArrowPress(n, o) ? (e.log("keyDownEventListener", "default navigation prevented"), e.visualDebugger && e.visualDebugger.clear()) : e.onKeyEvent(t)
                                                }
                                            }
                                        }, this.throttle && (this.keyDownEventListenerThrottled = (0, v.default)(this.keyDownEventListener.bind(this), this.throttle, O)), this.keyUpEventListener = function (t) {
                                            var n = e.getEventType(t.keyCode);
                                            delete e.pressedKeys[n], e.throttle && !e.throttleKeypresses && e.keyDownEventListenerThrottled.cancel(), n === K && e.focusKey && e.onEnterRelease()
                                        }, window.addEventListener("keyup", this.keyUpEventListener), window.addEventListener("keydown", this.throttle ? this.keyDownEventListenerThrottled : this.keyDownEventListener))
                                    }, e.prototype.unbindEventHandlers = function () {
                                        if ("undefined" != typeof window && window.removeEventListener) {
                                            window.removeEventListener("keyup", this.keyUpEventListener), this.keyUpEventListener = null;
                                            var e = this.throttle ? this.keyDownEventListenerThrottled : this.keyDownEventListener;
                                            window.removeEventListener("keydown", e), this.keyDownEventListener = null
                                        }
                                    }, e.prototype.onEnterPress = function (e) {
                                        var t = this.focusableComponents[this.focusKey];
                                        t ? t.focusable ? t.onEnterPress && t.onEnterPress(e) : this.log("onEnterPress", "componentNotFocusable") : this.log("onEnterPress", "noComponent")
                                    }, e.prototype.onEnterRelease = function () {
                                        var e = this.focusableComponents[this.focusKey];
                                        e ? e.focusable ? e.onEnterRelease && e.onEnterRelease() : this.log("onEnterRelease", "componentNotFocusable") : this.log("onEnterRelease", "noComponent")
                                    }, e.prototype.onArrowPress = function (e, t) {
                                        var n = this.focusableComponents[this.focusKey];
                                        if (n) return n && n.onArrowPress && n.onArrowPress(e, t);
                                        this.log("onArrowPress", "noComponent")
                                    }, e.prototype.navigateByDirection = function (e, t) {
                                        if (!0 !== this.paused && !this.nativeMode) {
                                            var n = [x, F, w, C];
                                            n.includes(e) ? (this.log("navigateByDirection", "direction", e), this.smartNavigate(e, null, t)) : this.log("navigateByDirection", "Invalid direction. You passed: `".concat(e, "`, but you can use only these: "), n)
                                        }
                                    }, e.prototype.onKeyEvent = function (e) {
                                        this.visualDebugger && this.visualDebugger.clear();
                                        var t = (0, d.default)(this.getKeyMap(), (function (t) {
                                            return t.includes(e.keyCode)
                                        }));
                                        this.smartNavigate(t, null, {
                                            event: e
                                        })
                                    }, e.prototype.smartNavigate = function (t, n, o) {
                                        var r = this;
                                        if (!this.nativeMode) {
                                            this.log("smartNavigate", "direction", t), this.log("smartNavigate", "fromParentFocusKey", n), this.log("smartNavigate", "this.focusKey", this.focusKey), n || (0, y.default)(this.focusableComponents, (function (e) {
                                                e.layoutUpdated = !1
                                            }));
                                            var i = this.focusableComponents[n || this.focusKey];
                                            if (this.log("smartNavigate", "currentComponent", i ? i.focusKey : void 0, i ? i.node : void 0), i) {
                                                this.updateLayout(i.focusKey);
                                                var s = i.parentFocusKey,
                                                    a = i.focusKey,
                                                    u = i.layout,
                                                    c = t === x || t === F,
                                                    p = t === x || t === C,
                                                    d = e.getCutoffCoordinate(c, p, !1, u),
                                                    h = (0, l.default)(this.focusableComponents, (function (t) {
                                                        if (t.parentFocusKey === s && t.focusable) {
                                                            r.updateLayout(t.focusKey);
                                                            var n = e.getCutoffCoordinate(c, p, !0, t.layout);
                                                            return p ? n >= d : n <= d
                                                        }
                                                        return !1
                                                    }));
                                                if (this.debug && (this.log("smartNavigate", "currentCutoffCoordinate", d), this.log("smartNavigate", "siblings", "".concat(h.length, " elements:"), h.map((function (e) {
                                                        return e.focusKey
                                                    })).join(", "), h.map((function (e) {
                                                        return e.node
                                                    })))), this.visualDebugger) {
                                                    var v = e.getRefCorners(t, !1, u);
                                                    this.visualDebugger.drawPoint(v.a.x, v.a.y), this.visualDebugger.drawPoint(v.b.x, v.b.y)
                                                }
                                                var g = this.sortSiblingsByPriority(h, u, t, a),
                                                    b = (0, f.default)(g);
                                                if (this.log("smartNavigate", "nextComponent", b ? b.focusKey : void 0, b ? b.node : void 0), b) this.setFocus(b.focusKey, o);
                                                else {
                                                    var m = this.focusableComponents[s];
                                                    this.saveLastFocusedChildKey(m, a), m && m.isFocusBoundary || this.smartNavigate(t, s, o)
                                                }
                                            }
                                        }
                                    }, e.prototype.saveLastFocusedChildKey = function (e, t) {
                                        e && (this.log("saveLastFocusedChildKey", "".concat(e.focusKey, " lastFocusedChildKey set"), t), e.lastFocusedChildKey = t)
                                    }, e.prototype.log = function (e, t) {
                                        for (var n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
                                        this.debug && console.log.apply(console, u(["%c".concat(e, "%c").concat(t), "background: ".concat(S[this.logIndex % S.length], "; color: black; padding: 1px 5px;"), "background: #333; color: #BADA55; padding: 1px 5px;"], n, !1))
                                    }, e.prototype.getCurrentFocusKey = function () {
                                        return this.focusKey
                                    }, e.prototype.getNextFocusKey = function (e) {
                                        var t = this,
                                            n = this.focusableComponents[e];
                                        if (!n || this.nativeMode) return e;
                                        var o = (0, l.default)(this.focusableComponents, (function (t) {
                                            return t.parentFocusKey === e && t.focusable
                                        }));
                                        if (o.length > 0) {
                                            var r = n.lastFocusedChildKey,
                                                i = n.preferredChildFocusKey;
                                            if (this.log("getNextFocusKey", "lastFocusedChildKey is", r), this.log("getNextFocusKey", "preferredChildFocusKey is", i), r && n.saveLastFocusedChild && this.isParticipatingFocusableComponent(r)) return this.log("getNextFocusKey", "lastFocusedChildKey will be focused", r), this.getNextFocusKey(r);
                                            if (i && this.isParticipatingFocusableComponent(i)) return this.log("getNextFocusKey", "preferredChildFocusKey will be focused", i), this.getNextFocusKey(i);
                                            o.forEach((function (e) {
                                                return t.updateLayout(e.focusKey)
                                            }));
                                            var s = function (e) {
                                                var t = (0, p.default)(e, (function (e) {
                                                    var t = e.layout;
                                                    return Math.abs(t.left) + Math.abs(t.top)
                                                }));
                                                return (0, f.default)(t)
                                            }(o).focusKey;
                                            return this.log("getNextFocusKey", "childKey will be focused", s), this.getNextFocusKey(s)
                                        }
                                        return this.log("getNextFocusKey", "targetFocusKey", e), e
                                    }, e.prototype.addFocusable = function (e) {
                                        var t = e.focusKey,
                                            n = e.node,
                                            o = e.parentFocusKey,
                                            r = e.onEnterPress,
                                            i = e.onEnterRelease,
                                            s = e.onArrowPress,
                                            a = e.onFocus,
                                            u = e.onBlur,
                                            c = e.saveLastFocusedChild,
                                            l = e.trackChildren,
                                            f = e.onUpdateFocus,
                                            p = e.onUpdateHasFocusedChild,
                                            d = e.preferredChildFocusKey,
                                            h = e.autoRestoreFocus,
                                            y = e.focusable,
                                            v = e.isFocusBoundary;
                                        this.focusableComponents[t] = {
                                            focusKey: t,
                                            node: n,
                                            parentFocusKey: o,
                                            onEnterPress: r,
                                            onEnterRelease: i,
                                            onArrowPress: s,
                                            onFocus: a,
                                            onBlur: u,
                                            onUpdateFocus: f,
                                            onUpdateHasFocusedChild: p,
                                            saveLastFocusedChild: c,
                                            trackChildren: l,
                                            preferredChildFocusKey: d,
                                            focusable: y,
                                            isFocusBoundary: v,
                                            autoRestoreFocus: h,
                                            lastFocusedChildKey: null,
                                            layout: {
                                                x: 0,
                                                y: 0,
                                                width: 0,
                                                height: 0,
                                                left: 0,
                                                top: 0,
                                                node: n
                                            },
                                            layoutUpdated: !1
                                        }, this.nativeMode || (this.updateLayout(t), t === this.focusKey && this.setFocus(t))
                                    }, e.prototype.removeFocusable = function (e) {
                                        var t = e.focusKey,
                                            n = this.focusableComponents[t];
                                        if (n) {
                                            var o = n.parentFocusKey;
                                            delete this.focusableComponents[t];
                                            var r = this.focusableComponents[o],
                                                i = t === this.focusKey;
                                            if (r && r.lastFocusedChildKey === t && (r.lastFocusedChildKey = null), this.nativeMode) return;
                                            (0, h.default)(this.focusableComponents, (function (e) {
                                                e.parentFocusKey === t && e.focusable && (e.parentFocusKey = o)
                                            })), i && r && r.autoRestoreFocus && this.setFocus(o)
                                        }
                                    }, e.prototype.getNodeLayoutByFocusKey = function (e) {
                                        var t = this.focusableComponents[e];
                                        return t ? (this.updateLayout(t.focusKey), t.layout) : null
                                    }, e.prototype.setCurrentFocusedKey = function (e, t) {
                                        if (this.isFocusableComponent(this.focusKey) && e !== this.focusKey) {
                                            var n = this.focusableComponents[this.focusKey],
                                                o = this.focusableComponents[n.parentFocusKey];
                                            this.saveLastFocusedChildKey(o, this.focusKey), n.onUpdateFocus(!1), n.onBlur(this.getNodeLayoutByFocusKey(this.focusKey), t)
                                        }
                                        if (this.focusKey = e, this.isFocusableComponent(this.focusKey)) {
                                            var r = this.focusableComponents[this.focusKey];
                                            r.onUpdateFocus(!0), r.onFocus(this.getNodeLayoutByFocusKey(this.focusKey), t)
                                        }
                                    }, e.prototype.updateParentsHasFocusedChild = function (e, t) {
                                        for (var n = this, o = [], r = this.focusableComponents[e]; r;) {
                                            var i = r.parentFocusKey,
                                                s = this.focusableComponents[i];
                                            if (s) {
                                                var a = s.focusKey;
                                                o.push(a)
                                            }
                                            r = s
                                        }
                                        var u = (0, g.default)(this.parentsHavingFocusedChild, o),
                                            c = (0, g.default)(o, this.parentsHavingFocusedChild);
                                        (0, h.default)(u, (function (e) {
                                            var o = n.focusableComponents[e];
                                            o && o.trackChildren && o.onUpdateHasFocusedChild(!1), n.onIntermediateNodeBecameBlurred(e, t)
                                        })), (0, h.default)(c, (function (e) {
                                            var o = n.focusableComponents[e];
                                            o && o.trackChildren && o.onUpdateHasFocusedChild(!0), n.onIntermediateNodeBecameFocused(e, t)
                                        })), this.parentsHavingFocusedChild = o
                                    }, e.prototype.updateParentsLastFocusedChild = function (e) {
                                        for (var t = this.focusableComponents[e]; t;) {
                                            var n = t.parentFocusKey,
                                                o = this.focusableComponents[n];
                                            o && this.saveLastFocusedChildKey(o, t.focusKey), t = o
                                        }
                                    }, e.prototype.getKeyMap = function () {
                                        return this.keyMap
                                    }, e.prototype.setKeyMap = function (e) {
                                        this.keyMap = r(r({}, this.getKeyMap()), function (e) {
                                            var t = {};
                                            return Object.entries(e).forEach((function (e) {
                                                var n = e[0],
                                                    o = e[1];
                                                "number" == typeof o ? t[n] = [o] : Array.isArray(o) && (t[n] = o)
                                            })), t
                                        }(e))
                                    }, e.prototype.isFocusableComponent = function (e) {
                                        return !!this.focusableComponents[e]
                                    }, e.prototype.isParticipatingFocusableComponent = function (e) {
                                        return this.isFocusableComponent(e) && this.focusableComponents[e].focusable
                                    }, e.prototype.onIntermediateNodeBecameFocused = function (e, t) {
                                        this.isParticipatingFocusableComponent(e) && this.focusableComponents[e].onFocus(this.getNodeLayoutByFocusKey(e), t)
                                    }, e.prototype.onIntermediateNodeBecameBlurred = function (e, t) {
                                        this.isParticipatingFocusableComponent(e) && this.focusableComponents[e].onBlur(this.getNodeLayoutByFocusKey(e), t)
                                    }, e.prototype.pause = function () {
                                        this.paused = !0
                                    }, e.prototype.resume = function () {
                                        this.paused = !1
                                    }, e.prototype.setFocus = function (e, t) {
                                        if (void 0 === t && (t = {}), this.enabled) {
                                            this.log("setFocus", "focusKey", e);
                                            var n = this.focusKey,
                                                o = this.getNextFocusKey(e);
                                            this.log("setFocus", "newFocusKey", o), this.setCurrentFocusedKey(o, t), this.updateParentsHasFocusedChild(o, t), this.updateParentsLastFocusedChild(n)
                                        }
                                    }, e.prototype.updateAllLayouts = function () {
                                        var e = this;
                                        this.nativeMode || (0, y.default)(this.focusableComponents, (function (t, n) {
                                            e.updateLayout(n)
                                        }))
                                    }, e.prototype.updateLayout = function (e) {
                                        var t = this.focusableComponents[e];
                                        if (t && !this.nativeMode && !t.layoutUpdated) {
                                            var n = t.node,
                                                o = this.useGetBoundingClientRect ? (0, b.getBoundingClientRect)(n) : (0, b.default)(n);
                                            t.layout = r(r({}, o), {
                                                node: n
                                            })
                                        }
                                    }, e.prototype.updateFocusable = function (e, t) {
                                        var n = t.node,
                                            o = t.preferredChildFocusKey,
                                            r = t.focusable,
                                            i = t.isFocusBoundary,
                                            s = t.onEnterPress,
                                            a = t.onEnterRelease,
                                            u = t.onArrowPress,
                                            c = t.onFocus,
                                            l = t.onBlur;
                                        if (!this.nativeMode) {
                                            var f = this.focusableComponents[e];
                                            f && (f.preferredChildFocusKey = o, f.focusable = r, f.isFocusBoundary = i, f.onEnterPress = s, f.onEnterRelease = a, f.onArrowPress = u, f.onFocus = c, f.onBlur = l, n && (f.node = n))
                                        }
                                    }, e.prototype.isNativeMode = function () {
                                        return this.nativeMode
                                    }, e
                                }();
                            t.SpatialNavigation = new P, t.init = t.SpatialNavigation.init, t.setThrottle = t.SpatialNavigation.setThrottle, t.destroy = t.SpatialNavigation.destroy, t.setKeyMap = t.SpatialNavigation.setKeyMap
                        },
                        35: function (e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            });
                            var n = "undefined" != typeof window && window.document,
                                o = n ? window.innerWidth : 0,
                                r = n ? window.innerHeight : 0,
                                i = function () {
                                    function e() {
                                        n && (this.debugCtx = e.createCanvas("sn-debug", "1010"), this.layoutsCtx = e.createCanvas("sn-layouts", "1000"))
                                    }
                                    return e.createCanvas = function (e, t) {
                                        var n = document.querySelector("#".concat(e)) || document.createElement("canvas");
                                        n.setAttribute("id", e);
                                        var i = n.getContext("2d");
                                        return n.style.zIndex = t, n.style.position = "fixed", n.style.top = "0", n.style.left = "0", document.body.appendChild(n), n.width = o, n.height = r, i
                                    }, e.prototype.clear = function () {
                                        n && this.debugCtx.clearRect(0, 0, o, r)
                                    }, e.prototype.clearLayouts = function () {
                                        n && this.layoutsCtx.clearRect(0, 0, o, r)
                                    }, e.prototype.drawLayout = function (e, t, o) {
                                        n && (this.layoutsCtx.strokeStyle = "green", this.layoutsCtx.strokeRect(e.left, e.top, e.width, e.height), this.layoutsCtx.font = "8px monospace", this.layoutsCtx.fillStyle = "red", this.layoutsCtx.fillText(t, e.left, e.top + 10), this.layoutsCtx.fillText(o, e.left, e.top + 25), this.layoutsCtx.fillText("left: ".concat(e.left), e.left, e.top + 40), this.layoutsCtx.fillText("top: ".concat(e.top), e.left, e.top + 55))
                                    }, e.prototype.drawPoint = function (e, t, o, r) {
                                        void 0 === o && (o = "blue"), void 0 === r && (r = 10), n && (this.debugCtx.strokeStyle = o, this.debugCtx.lineWidth = 3, this.debugCtx.strokeRect(e - r / 2, t - r / 2, r, r))
                                    }, e
                                }();
                            t.default = i
                        },
                        607: function (e, t, n) {
                            var o = this && this.__createBinding || (Object.create ? function (e, t, n, o) {
                                    void 0 === o && (o = n);
                                    var r = Object.getOwnPropertyDescriptor(t, n);
                                    r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                                        enumerable: !0,
                                        get: function () {
                                            return t[n]
                                        }
                                    }), Object.defineProperty(e, o, r)
                                } : function (e, t, n, o) {
                                    void 0 === o && (o = n), e[o] = t[n]
                                }),
                                r = this && this.__exportStar || function (e, t) {
                                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n)
                                };
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), r(n(79), t), r(n(893), t), r(n(654), t)
                        },
                        964: function (e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.getBoundingClientRect = void 0;
                            var n = function (e) {
                                for (var t = e.offsetParent, n = e.offsetHeight, o = e.offsetWidth, r = e.offsetLeft, i = e.offsetTop; t && 1 === t.nodeType;) r += t.offsetLeft - t.scrollLeft, i += t.offsetTop - t.scrollTop, t = t.offsetParent;
                                return {
                                    height: n,
                                    left: r,
                                    top: i,
                                    width: o
                                }
                            };
                            t.default = function (e) {
                                var t = e && e.parentElement;
                                if (e && t) {
                                    var o = n(t),
                                        r = n(e),
                                        i = r.height,
                                        s = r.left,
                                        a = r.top,
                                        u = r.width;
                                    return {
                                        x: s - o.left,
                                        y: a - o.top,
                                        width: u,
                                        height: i,
                                        left: s,
                                        top: a
                                    }
                                }
                                return {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0,
                                    left: 0,
                                    top: 0
                                }
                            }, t.getBoundingClientRect = function (e) {
                                if (e && e.getBoundingClientRect) {
                                    var t = e.getBoundingClientRect();
                                    return {
                                        x: t.x,
                                        y: t.y,
                                        width: t.width,
                                        height: t.height,
                                        left: t.left,
                                        top: t.top
                                    }
                                }
                                return {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0,
                                    left: 0,
                                    top: 0
                                }
                            }
                        },
                        451: function (e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            });
                            var o = n(156);
                            t.default = function (e) {
                                var t = (0, o.useRef)(e),
                                    n = (0, o.useRef)(),
                                    r = (0, o.useRef)(!1),
                                    i = (0, o.useRef)(!1),
                                    s = (0, o.useState)(0)[1];
                                r.current && (i.current = !0), (0, o.useEffect)((function () {
                                    return r.current || (n.current = t.current(), r.current = !0), s((function (e) {
                                            return e + 1
                                        })),
                                        function () {
                                            i.current && n.current && n.current()
                                        }
                                }), [])
                            }
                        },
                        79: function (e, t, n) {
                            var o = this && this.__importDefault || function (e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                }
                            };
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.useFocusable = void 0;
                            var r = n(156),
                                i = o(n(604)),
                                s = o(n(461)),
                                a = n(654),
                                u = n(893),
                                c = o(n(451));
                            t.useFocusable = function (e) {
                                var t = void 0 === e ? {} : e,
                                    n = t.focusable,
                                    o = void 0 === n || n,
                                    l = t.saveLastFocusedChild,
                                    f = void 0 === l || l,
                                    p = t.trackChildren,
                                    d = void 0 !== p && p,
                                    h = t.autoRestoreFocus,
                                    y = void 0 === h || h,
                                    v = t.isFocusBoundary,
                                    g = void 0 !== v && v,
                                    b = t.focusKey,
                                    m = t.preferredChildFocusKey,
                                    w = t.onEnterPress,
                                    C = void 0 === w ? i.default : w,
                                    F = t.onEnterRelease,
                                    x = void 0 === F ? i.default : F,
                                    K = t.onArrowPress,
                                    E = void 0 === K ? function () {
                                        return !0
                                    } : K,
                                    S = t.onFocus,
                                    O = void 0 === S ? i.default : S,
                                    P = t.onBlur,
                                    L = void 0 === P ? i.default : P,
                                    R = t.extraProps,
                                    k = (0, r.useCallback)((function (e) {
                                        C(R, e)
                                    }), [C, R]),
                                    M = (0, r.useCallback)((function () {
                                        x(R)
                                    }), [x, R]),
                                    j = (0, r.useCallback)((function (e, t) {
                                        return E(e, R, t)
                                    }), [R, E]),
                                    N = (0, r.useCallback)((function (e, t) {
                                        O(e, R, t)
                                    }), [R, O]),
                                    D = (0, r.useCallback)((function (e, t) {
                                        L(e, R, t)
                                    }), [R, L]),
                                    _ = (0, r.useRef)(null),
                                    A = (0, r.useState)(!1),
                                    B = A[0],
                                    T = A[1],
                                    U = (0, r.useState)(!1),
                                    H = U[0],
                                    I = U[1],
                                    q = (0, u.useFocusContext)(),
                                    X = (0, r.useMemo)((function () {
                                        return b || (0, s.default)("sn:focusable-item-")
                                    }), [b]),
                                    $ = (0, r.useCallback)((function (e) {
                                        void 0 === e && (e = {}), a.SpatialNavigation.setFocus(X, e)
                                    }), [X]);
                                return (0, c.default)((function () {
                                    var e = _.current;
                                    return a.SpatialNavigation.addFocusable({
                                            focusKey: X,
                                            node: e,
                                            parentFocusKey: q,
                                            preferredChildFocusKey: m,
                                            onEnterPress: k,
                                            onEnterRelease: M,
                                            onArrowPress: j,
                                            onFocus: N,
                                            onBlur: D,
                                            onUpdateFocus: function (e) {
                                                return void 0 === e && (e = !1), T(e)
                                            },
                                            onUpdateHasFocusedChild: function (e) {
                                                return void 0 === e && (e = !1), I(e)
                                            },
                                            saveLastFocusedChild: f,
                                            trackChildren: d,
                                            isFocusBoundary: g,
                                            autoRestoreFocus: y,
                                            focusable: o
                                        }),
                                        function () {
                                            a.SpatialNavigation.removeFocusable({
                                                focusKey: X
                                            })
                                        }
                                })), (0, r.useEffect)((function () {
                                    var e = _.current;
                                    a.SpatialNavigation.updateFocusable(X, {
                                        node: e,
                                        preferredChildFocusKey: m,
                                        focusable: o,
                                        isFocusBoundary: g,
                                        onEnterPress: k,
                                        onEnterRelease: M,
                                        onArrowPress: j,
                                        onFocus: N,
                                        onBlur: D
                                    })
                                }), [X, m, o, g, k, M, j, N, D]), {
                                    ref: _,
                                    focusSelf: $,
                                    focused: B,
                                    hasFocusedChild: H,
                                    focusKey: X,
                                    setFocus: a.SpatialNavigation.isNativeMode() ? i.default : a.SpatialNavigation.setFocus,
                                    navigateByDirection: a.SpatialNavigation.navigateByDirection,
                                    pause: a.SpatialNavigation.pause,
                                    resume: a.SpatialNavigation.resume,
                                    updateAllLayouts: a.SpatialNavigation.updateAllLayouts,
                                    getCurrentFocusKey: a.SpatialNavigation.getCurrentFocusKey
                                }
                            }
                        },
                        893: function (e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.useFocusContext = t.FocusContext = void 0;
                            var o = n(156),
                                r = n(654);
                            t.FocusContext = (0, o.createContext)(r.ROOT_FOCUS_KEY), t.useFocusContext = function () {
                                return (0, o.useContext)(t.FocusContext)
                            }
                        },
                        117: function (e) {
                            e.exports = o
                        },
                        747: function (e) {
                            e.exports = r
                        },
                        23: function (e) {
                            e.exports = i
                        },
                        842: function (e) {
                            e.exports = s
                        },
                        682: function (e) {
                            e.exports = a
                        },
                        784: function (e) {
                            e.exports = u
                        },
                        604: function (e) {
                            e.exports = c
                        },
                        432: function (e) {
                            e.exports = l
                        },
                        67: function (e) {
                            e.exports = f
                        },
                        461: function (e) {
                            e.exports = p
                        },
                        156: function (e) {
                            e.exports = d
                        }
                    },
                    t = {};
                return function n(o) {
                    var r = t[o];
                    if (void 0 !== r) return r.exports;
                    var i = t[o] = {
                        exports: {}
                    };
                    return e[o].call(i.exports, i, i.exports, n), i.exports
                }(607)
            }())
        },
        9603: (e, t, n) => {
            "use strict";
            var o = n(8908),
                r = n(434),
                i = n(7376);
            u.httpHandler = n(3490);
            var s = function (e) {
                var t = {};
                return e ? (e.trim().split("\n").forEach((function (e) {
                    var n = e.indexOf(":"),
                        o = e.slice(0, n).trim().toLowerCase(),
                        r = e.slice(n + 1).trim();
                    void 0 === t[o] ? t[o] = r : Array.isArray(t[o]) ? t[o].push(r) : t[o] = [t[o], r]
                })), t) : t
            };

            function a(e, t, n) {
                var o = e;
                return i(t) ? (n = t, "string" == typeof e && (o = {
                    uri: e
                })) : o = r({}, t, {
                    uri: e
                }), o.callback = n, o
            }

            function u(e, t, n) {
                return c(t = a(e, t, n))
            }

            function c(e) {
                if (void 0 === e.callback) throw new Error("callback argument missing");
                var t = !1,
                    n = function (n, o, r) {
                        t || (t = !0, e.callback(n, o, r))
                    };

                function o() {
                    var e = void 0;
                    if (e = l.response ? l.response : l.responseText || function (e) {
                            try {
                                if ("document" === e.responseType) return e.responseXML;
                                var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
                                if ("" === e.responseType && !t) return e.responseXML
                            } catch (e) {}
                            return null
                        }(l), g) try {
                        e = JSON.parse(e)
                    } catch (e) {}
                    return e
                }

                function r(e) {
                    return clearTimeout(f), e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))), e.statusCode = 0, n(e, b)
                }

                function i() {
                    if (!c) {
                        var t;
                        clearTimeout(f), t = e.useXDR && void 0 === l.status ? 200 : 1223 === l.status ? 204 : l.status;
                        var r = b,
                            i = null;
                        return 0 !== t ? (r = {
                            body: o(),
                            statusCode: t,
                            method: d,
                            headers: {},
                            url: p,
                            rawRequest: l
                        }, l.getAllResponseHeaders && (r.headers = s(l.getAllResponseHeaders()))) : i = new Error("Internal XMLHttpRequest Error"), n(i, r, r.body)
                    }
                }
                var a, c, l = e.xhr || null;
                l || (l = e.cors || e.useXDR ? new u.XDomainRequest : new u.XMLHttpRequest);
                var f, p = l.url = e.uri || e.url,
                    d = l.method = e.method || "GET",
                    h = e.body || e.data,
                    y = l.headers = e.headers || {},
                    v = !!e.sync,
                    g = !1,
                    b = {
                        body: void 0,
                        headers: {},
                        statusCode: 0,
                        method: d,
                        url: p,
                        rawRequest: l
                    };
                if ("json" in e && !1 !== e.json && (g = !0, y.accept || y.Accept || (y.Accept = "application/json"), "GET" !== d && "HEAD" !== d && (y["content-type"] || y["Content-Type"] || (y["Content-Type"] = "application/json"), h = JSON.stringify(!0 === e.json ? h : e.json))), l.onreadystatechange = function () {
                        4 === l.readyState && setTimeout(i, 0)
                    }, l.onload = i, l.onerror = r, l.onprogress = function () {}, l.onabort = function () {
                        c = !0
                    }, l.ontimeout = r, l.open(d, p, !v, e.username, e.password), v || (l.withCredentials = !!e.withCredentials), !v && e.timeout > 0 && (f = setTimeout((function () {
                        if (!c) {
                            c = !0, l.abort("timeout");
                            var e = new Error("XMLHttpRequest timeout");
                            e.code = "ETIMEDOUT", r(e)
                        }
                    }), e.timeout)), l.setRequestHeader)
                    for (a in y) y.hasOwnProperty(a) && l.setRequestHeader(a, y[a]);
                else if (e.headers && ! function (e) {
                        for (var t in e)
                            if (e.hasOwnProperty(t)) return !1;
                        return !0
                    }(e.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
                return "responseType" in e && (l.responseType = e.responseType), "beforeSend" in e && "function" == typeof e.beforeSend && e.beforeSend(l), l.send(h || null), l
            }
            e.exports = u, e.exports.default = u, u.XMLHttpRequest = o.XMLHttpRequest || function () {}, u.XDomainRequest = "withCredentials" in new u.XMLHttpRequest ? u.XMLHttpRequest : o.XDomainRequest,
                function (e, t) {
                    for (var n = 0; n < e.length; n++) t(e[n])
                }(["get", "put", "post", "patch", "head", "delete"], (function (e) {
                    u["delete" === e ? "del" : e] = function (t, n, o) {
                        return (n = a(t, n, o)).method = e.toUpperCase(), c(n)
                    }
                }))
        },
        3969: (e, t, n) => {
            var o = n(1146);
            o.DOMImplementation, o.XMLSerializer, t.DOMParser = n(6129).DOMParser
        },
        9669: (e, t, n) => {
            e.exports = n(1609)
        },
        7376: e => {
            e.exports = function (e) {
                if (!e) return !1;
                var n = t.call(e);
                return "[object Function]" === n || "function" == typeof e && "[object RegExp]" !== n || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
            };
            var t = Object.prototype.toString
        },
        7537: (e, t) => {
            function n(e) {
                if (e && "object" == typeof e) {
                    var t = e.which || e.keyCode || e.charCode;
                    t && (e = t)
                }
                if ("number" == typeof e) return s[e];
                var n, i = String(e);
                return (n = o[i.toLowerCase()]) ? n : (n = r[i.toLowerCase()]) || (1 === i.length ? i.charCodeAt(0) : void 0)
            }
            n.isEventKey = function (e, t) {
                if (e && "object" == typeof e) {
                    var n = e.which || e.keyCode || e.charCode;
                    if (null == n) return !1;
                    if ("string" == typeof t) {
                        var i;
                        if (i = o[t.toLowerCase()]) return i === n;
                        if (i = r[t.toLowerCase()]) return i === n
                    } else if ("number" == typeof t) return t === n;
                    return !1
                }
            };
            var o = (t = e.exports = n).code = t.codes = {
                    backspace: 8,
                    tab: 9,
                    enter: 13,
                    shift: 16,
                    ctrl: 17,
                    alt: 18,
                    "pause/break": 19,
                    "caps lock": 20,
                    esc: 27,
                    space: 32,
                    "page up": 33,
                    "page down": 34,
                    end: 35,
                    home: 36,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                    insert: 45,
                    delete: 46,
                    command: 91,
                    "left command": 91,
                    "right command": 93,
                    "numpad *": 106,
                    "numpad +": 107,
                    "numpad -": 109,
                    "numpad .": 110,
                    "numpad /": 111,
                    "num lock": 144,
                    "scroll lock": 145,
                    "my computer": 182,
                    "my calculator": 183,
                    ";": 186,
                    "=": 187,
                    ",": 188,
                    "-": 189,
                    ".": 190,
                    "/": 191,
                    "`": 192,
                    "[": 219,
                    "\\": 220,
                    "]": 221,
                    "'": 222
                },
                r = t.aliases = {
                    windows: 91,
                    "⇧": 16,
                    "⌥": 18,
                    "⌃": 17,
                    "⌘": 91,
                    ctl: 17,
                    control: 17,
                    option: 18,
                    pause: 19,
                    break: 19,
                    caps: 20,
                    return: 13,
                    escape: 27,
                    spc: 32,
                    spacebar: 32,
                    pgup: 33,
                    pgdn: 34,
                    ins: 45,
                    del: 46,
                    cmd: 91
                };
            for (i = 97; i < 123; i++) o[String.fromCharCode(i)] = i - 32;
            for (var i = 48; i < 58; i++) o[i - 48] = i;
            for (i = 1; i < 13; i++) o["f" + i] = i + 111;
            for (i = 0; i < 10; i++) o["numpad " + i] = i + 96;
            var s = t.names = t.title = {};
            for (i in o) s[o[i]] = i;
            for (var a in r) o[a] = r[a]
        },
        7418: e => {
            "use strict";
            var t = Object.getOwnPropertySymbols,
                n = Object.prototype.hasOwnProperty,
                o = Object.prototype.propertyIsEnumerable;
            e.exports = function () {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function (e) {
                            return t[e]
                        })).join("")) return !1;
                    var o = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function (e) {
                        o[e] = e
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
                } catch (e) {
                    return !1
                }
            }() ? Object.assign : function (e, r) {
                for (var i, s, a = function (e) {
                        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                        return Object(e)
                    }(e), u = 1; u < arguments.length; u++) {
                    for (var c in i = Object(arguments[u])) n.call(i, c) && (a[c] = i[c]);
                    if (t) {
                        s = t(i);
                        for (var l = 0; l < s.length; l++) o.call(i, s[l]) && (a[s[l]] = i[s[l]])
                    }
                }
                return a
            }
        },
        4779: (e, t, n) => {
            var o = n(6173);
            e.exports = d, e.exports.parse = i, e.exports.compile = function (e, t) {
                return a(i(e, t), t)
            }, e.exports.tokensToFunction = a, e.exports.tokensToRegExp = p;
            var r = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

            function i(e, t) {
                for (var n, o = [], i = 0, s = 0, a = "", l = t && t.delimiter || "/"; null != (n = r.exec(e));) {
                    var f = n[0],
                        p = n[1],
                        d = n.index;
                    if (a += e.slice(s, d), s = d + f.length, p) a += p[1];
                    else {
                        var h = e[s],
                            y = n[2],
                            v = n[3],
                            g = n[4],
                            b = n[5],
                            m = n[6],
                            w = n[7];
                        a && (o.push(a), a = "");
                        var C = null != y && null != h && h !== y,
                            F = "+" === m || "*" === m,
                            x = "?" === m || "*" === m,
                            K = n[2] || l,
                            E = g || b;
                        o.push({
                            name: v || i++,
                            prefix: y || "",
                            delimiter: K,
                            optional: x,
                            repeat: F,
                            partial: C,
                            asterisk: !!w,
                            pattern: E ? c(E) : w ? ".*" : "[^" + u(K) + "]+?"
                        })
                    }
                }
                return s < e.length && (a += e.substr(s)), a && o.push(a), o
            }

            function s(e) {
                return encodeURI(e).replace(/[\/?#]/g, (function (e) {
                    return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                }))
            }

            function a(e, t) {
                for (var n = new Array(e.length), r = 0; r < e.length; r++) "object" == typeof e[r] && (n[r] = new RegExp("^(?:" + e[r].pattern + ")$", f(t)));
                return function (t, r) {
                    for (var i = "", a = t || {}, u = (r || {}).pretty ? s : encodeURIComponent, c = 0; c < e.length; c++) {
                        var l = e[c];
                        if ("string" != typeof l) {
                            var f, p = a[l.name];
                            if (null == p) {
                                if (l.optional) {
                                    l.partial && (i += l.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + l.name + '" to be defined')
                            }
                            if (o(p)) {
                                if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(p) + "`");
                                if (0 === p.length) {
                                    if (l.optional) continue;
                                    throw new TypeError('Expected "' + l.name + '" to not be empty')
                                }
                                for (var d = 0; d < p.length; d++) {
                                    if (f = u(p[d]), !n[c].test(f)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(f) + "`");
                                    i += (0 === d ? l.prefix : l.delimiter) + f
                                }
                            } else {
                                if (f = l.asterisk ? encodeURI(p).replace(/[?#]/g, (function (e) {
                                        return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                                    })) : u(p), !n[c].test(f)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + f + '"');
                                i += l.prefix + f
                            }
                        } else i += l
                    }
                    return i
                }
            }

            function u(e) {
                return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
            }

            function c(e) {
                return e.replace(/([=!:$\/()])/g, "\\$1")
            }

            function l(e, t) {
                return e.keys = t, e
            }

            function f(e) {
                return e && e.sensitive ? "" : "i"
            }

            function p(e, t, n) {
                o(t) || (n = t || n, t = []);
                for (var r = (n = n || {}).strict, i = !1 !== n.end, s = "", a = 0; a < e.length; a++) {
                    var c = e[a];
                    if ("string" == typeof c) s += u(c);
                    else {
                        var p = u(c.prefix),
                            d = "(?:" + c.pattern + ")";
                        t.push(c), c.repeat && (d += "(?:" + p + d + ")*"), s += d = c.optional ? c.partial ? p + "(" + d + ")?" : "(?:" + p + "(" + d + "))?" : p + "(" + d + ")"
                    }
                }
                var h = u(n.delimiter || "/"),
                    y = s.slice(-h.length) === h;
                return r || (s = (y ? s.slice(0, -h.length) : s) + "(?:" + h + "(?=$))?"), s += i ? "$" : r && y ? "" : "(?=" + h + "|$)", l(new RegExp("^" + s, f(n)), t)
            }

            function d(e, t, n) {
                return o(t) || (n = t || n, t = []), n = n || {}, e instanceof RegExp ? function (e, t) {
                    var n = e.source.match(/\((?!\?)/g);
                    if (n)
                        for (var o = 0; o < n.length; o++) t.push({
                            name: o,
                            prefix: null,
                            delimiter: null,
                            optional: !1,
                            repeat: !1,
                            partial: !1,
                            asterisk: !1,
                            pattern: null
                        });
                    return l(e, t)
                }(e, t) : o(e) ? function (e, t, n) {
                    for (var o = [], r = 0; r < e.length; r++) o.push(d(e[r], t, n).source);
                    return l(new RegExp("(?:" + o.join("|") + ")", f(n)), t)
                }(e, t, n) : function (e, t, n) {
                    return p(i(e, n), t, n)
                }(e, t, n)
            }
        },
        6173: e => {
            e.exports = Array.isArray || function (e) {
                return "[object Array]" == Object.prototype.toString.call(e)
            }
        },
        5697: (e, t, n) => {
            var o = n(9864);
            e.exports = n(1805)(o.isElement, !0)
        },
        3935: (e, t, n) => {
            "use strict";
            e.exports = n(3116)
        },
        4529: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            var o = n(4577);
            n(1645);
            const r = o.Z
        },
        6909: e => {
            var t = "undefined" != typeof Element,
                n = "function" == typeof Map,
                o = "function" == typeof Set,
                r = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;

            function i(e, s) {
                if (e === s) return !0;
                if (e && s && "object" == typeof e && "object" == typeof s) {
                    if (e.constructor !== s.constructor) return !1;
                    var a, u, c, l;
                    if (Array.isArray(e)) {
                        if ((a = e.length) != s.length) return !1;
                        for (u = a; 0 != u--;)
                            if (!i(e[u], s[u])) return !1;
                        return !0
                    }
                    if (n && e instanceof Map && s instanceof Map) {
                        if (e.size !== s.size) return !1;
                        for (l = e.entries(); !(u = l.next()).done;)
                            if (!s.has(u.value[0])) return !1;
                        for (l = e.entries(); !(u = l.next()).done;)
                            if (!i(u.value[1], s.get(u.value[0]))) return !1;
                        return !0
                    }
                    if (o && e instanceof Set && s instanceof Set) {
                        if (e.size !== s.size) return !1;
                        for (l = e.entries(); !(u = l.next()).done;)
                            if (!s.has(u.value[0])) return !1;
                        return !0
                    }
                    if (r && ArrayBuffer.isView(e) && ArrayBuffer.isView(s)) {
                        if ((a = e.length) != s.length) return !1;
                        for (u = a; 0 != u--;)
                            if (e[u] !== s[u]) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === s.source && e.flags === s.flags;
                    if (e.valueOf !== Object.prototype.valueOf && "function" == typeof e.valueOf && "function" == typeof s.valueOf) return e.valueOf() === s.valueOf();
                    if (e.toString !== Object.prototype.toString && "function" == typeof e.toString && "function" == typeof s.toString) return e.toString() === s.toString();
                    if ((a = (c = Object.keys(e)).length) !== Object.keys(s).length) return !1;
                    for (u = a; 0 != u--;)
                        if (!Object.prototype.hasOwnProperty.call(s, c[u])) return !1;
                    if (t && e instanceof Element) return !1;
                    for (u = a; 0 != u--;)
                        if (("_owner" !== c[u] && "__v" !== c[u] && "__o" !== c[u] || !e.$$typeof) && !i(e[c[u]], s[c[u]])) return !1;
                    return !0
                }
                return e != e && s != s
            }
            e.exports = function (e, t) {
                try {
                    return i(e, t)
                } catch (e) {
                    if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw e
                }
            }
        },
        246: (e, t, n) => {
            e.exports = n(7761)
        },
        9864: (e, t, n) => {
            "use strict";
            e.exports = n(2201)
        },
        3524: (e, t, n) => {
            "use strict";
            var o, r = n(7294),
                i = (o = r) && "object" == typeof o && "default" in o ? o.default : o;

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var a = !("undefined" == typeof window || !window.document || !window.document.createElement);
            e.exports = function (e, t, n) {
                if ("function" != typeof e) throw new Error("Expected reducePropsToState to be a function.");
                if ("function" != typeof t) throw new Error("Expected handleStateChangeOnClient to be a function.");
                if (void 0 !== n && "function" != typeof n) throw new Error("Expected mapStateOnServer to either be undefined or a function.");
                return function (o) {
                    if ("function" != typeof o) throw new Error("Expected WrappedComponent to be a React component.");
                    var u, c = [];

                    function l() {
                        u = e(c.map((function (e) {
                            return e.props
                        }))), f.canUseDOM ? t(u) : n && (u = n(u))
                    }
                    var f = function (e) {
                        var t, n;

                        function r() {
                            return e.apply(this, arguments) || this
                        }
                        n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, r.peek = function () {
                            return u
                        }, r.rewind = function () {
                            if (r.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                            var e = u;
                            return u = void 0, c = [], e
                        };
                        var s = r.prototype;
                        return s.UNSAFE_componentWillMount = function () {
                            c.push(this), l()
                        }, s.componentDidUpdate = function () {
                            l()
                        }, s.componentWillUnmount = function () {
                            var e = c.indexOf(this);
                            c.splice(e, 1), l()
                        }, s.render = function () {
                            return i.createElement(o, this.props)
                        }, r
                    }(r.PureComponent);
                    return s(f, "displayName", "SideEffect(" + function (e) {
                        return e.displayName || e.name || "Component"
                    }(o) + ")"), s(f, "canUseDOM", a), f
                }
            }
        },
        7294: (e, t, n) => {
            "use strict";
            e.exports = n(3369)
        },
        3840: (e, t, n) => {
            "use strict";
            e.exports = n(2972)
        },
        5449: function (e, t, n) {
            ! function (e) {
                "use strict";
                var t, n = function () {
                        try {
                            if (e.URLSearchParams && "bar" === new e.URLSearchParams("foo=bar").get("foo")) return e.URLSearchParams
                        } catch (e) {}
                        return null
                    }(),
                    o = n && "a=1" === new n({
                        a: 1
                    }).toString(),
                    r = n && "+" === new n("s=%2B").get("s"),
                    i = "__URLSearchParams__",
                    s = !n || ((t = new n).append("s", " &"), "s=+%26" === t.toString()),
                    a = f.prototype,
                    u = !(!e.Symbol || !e.Symbol.iterator);
                if (!(n && o && r && s)) {
                    var c;
                    a.append = function (e, t) {
                        v(this[i], e, t)
                    }, a.delete = function (e) {
                        delete this[i][e]
                    }, a.get = function (e) {
                        var t = this[i];
                        return this.has(e) ? t[e][0] : null
                    }, a.getAll = function (e) {
                        var t = this[i];
                        return this.has(e) ? t[e].slice(0) : []
                    }, a.has = function (e) {
                        return b(this[i], e)
                    }, a.set = function (e, t) {
                        this[i][e] = ["" + t]
                    }, a.toString = function () {
                        var e, t, n, o, r = this[i],
                            s = [];
                        for (t in r)
                            for (n = p(t), e = 0, o = r[t]; e < o.length; e++) s.push(n + "=" + p(o[e]));
                        return s.join("&")
                    }, !!r && n && !o && e.Proxy ? (c = new Proxy(n, {
                        construct: function (e, t) {
                            return new e(new f(t[0]).toString())
                        }
                    })).toString = Function.prototype.toString.bind(f) : c = f, Object.defineProperty(e, "URLSearchParams", {
                        value: c
                    });
                    var l = e.URLSearchParams.prototype;
                    l.polyfill = !0, l.forEach = l.forEach || function (e, t) {
                        var n = y(this.toString());
                        Object.getOwnPropertyNames(n).forEach((function (o) {
                            n[o].forEach((function (n) {
                                e.call(t, n, o, this)
                            }), this)
                        }), this)
                    }, l.sort = l.sort || function () {
                        var e, t, n, o = y(this.toString()),
                            r = [];
                        for (e in o) r.push(e);
                        for (r.sort(), t = 0; t < r.length; t++) this.delete(r[t]);
                        for (t = 0; t < r.length; t++) {
                            var i = r[t],
                                s = o[i];
                            for (n = 0; n < s.length; n++) this.append(i, s[n])
                        }
                    }, l.keys = l.keys || function () {
                        var e = [];
                        return this.forEach((function (t, n) {
                            e.push(n)
                        })), h(e)
                    }, l.values = l.values || function () {
                        var e = [];
                        return this.forEach((function (t) {
                            e.push(t)
                        })), h(e)
                    }, l.entries = l.entries || function () {
                        var e = [];
                        return this.forEach((function (t, n) {
                            e.push([n, t])
                        })), h(e)
                    }, u && (l[e.Symbol.iterator] = l[e.Symbol.iterator] || l.entries)
                }

                function f(e) {
                    ((e = e || "") instanceof URLSearchParams || e instanceof f) && (e = e.toString()), this[i] = y(e)
                }

                function p(e) {
                    var t = {
                        "!": "%21",
                        "'": "%27",
                        "(": "%28",
                        ")": "%29",
                        "~": "%7E",
                        "%20": "+",
                        "%00": "\0"
                    };
                    return encodeURIComponent(e).replace(/[!'\(\)~]|%20|%00/g, (function (e) {
                        return t[e]
                    }))
                }

                function d(e) {
                    return e.replace(/[ +]/g, "%20").replace(/(%[a-f0-9]{2})+/gi, (function (e) {
                        return decodeURIComponent(e)
                    }))
                }

                function h(t) {
                    var n = {
                        next: function () {
                            var e = t.shift();
                            return {
                                done: void 0 === e,
                                value: e
                            }
                        }
                    };
                    return u && (n[e.Symbol.iterator] = function () {
                        return n
                    }), n
                }

                function y(e) {
                    var t = {};
                    if ("object" == typeof e)
                        if (g(e))
                            for (var n = 0; n < e.length; n++) {
                                var o = e[n];
                                if (!g(o) || 2 !== o.length) throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");
                                v(t, o[0], o[1])
                            } else
                                for (var r in e) e.hasOwnProperty(r) && v(t, r, e[r]);
                        else {
                            0 === e.indexOf("?") && (e = e.slice(1));
                            for (var i = e.split("&"), s = 0; s < i.length; s++) {
                                var a = i[s],
                                    u = a.indexOf("="); - 1 < u ? v(t, d(a.slice(0, u)), d(a.slice(u + 1))) : a && v(t, d(a), "")
                            }
                        } return t
                }

                function v(e, t, n) {
                    var o = "string" == typeof n ? n : null != n && "function" == typeof n.toString ? n.toString() : JSON.stringify(n);
                    b(e, t) ? e[t].push(o) : e[t] = [o]
                }

                function g(e) {
                    return !!e && "[object Array]" === Object.prototype.toString.call(e)
                }

                function b(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
            }(void 0 !== n.g ? n.g : "undefined" != typeof window ? window : this)
        },
        6269: (e, t, n) => {
            "use strict";
            n.d(t, {
                X3: () => r
            });
            var o = n(9048);

            function r(e, t, {
                blocked: n,
                upgrade: r,
                blocking: i,
                terminated: s
            } = {}) {
                const a = indexedDB.open(e, t),
                    u = (0, o.w)(a);
                return r && a.addEventListener("upgradeneeded", (e => {
                    r((0, o.w)(a.result), e.oldVersion, e.newVersion, (0, o.w)(a.transaction))
                })), n && a.addEventListener("blocked", (() => n())), u.then((e => {
                    s && e.addEventListener("close", (() => s())), i && e.addEventListener("versionchange", (() => i()))
                })).catch((() => {})), u
            }
            const i = ["get", "getKey", "getAll", "getAllKeys", "count"],
                s = ["put", "add", "delete", "clear"],
                a = new Map;

            function u(e, t) {
                if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
                if (a.get(t)) return a.get(t);
                const n = t.replace(/FromIndex$/, ""),
                    o = t !== n,
                    r = s.includes(n);
                if (!(n in (o ? IDBIndex : IDBObjectStore).prototype) || !r && !i.includes(n)) return;
                const u = async function (e, ...t) {
                    const i = this.transaction(e, r ? "readwrite" : "readonly");
                    let s = i.store;
                    return o && (s = s.index(t.shift())), (await Promise.all([s[n](...t), r && i.done]))[0]
                };
                return a.set(t, u), u
            }(0, o.r)((e => ({
                ...e,
                get: (t, n, o) => u(t, n) || e.get(t, n, o),
                has: (t, n) => !!u(t, n) || e.has(t, n)
            })))
        }
    }
]);
//# sourceMappingURL=commons-main-index.js.bundle.js.map