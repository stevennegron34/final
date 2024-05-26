"use strict";
(self.webpackChunkNxStreaming = self.webpackChunkNxStreaming || []).push([
    [230], {
        3369: (e, t, r) => {
            (function () {
                var e = r(7418),
                    n = 60103,
                    o = 60106;
                t.Fragment = 60107, t.StrictMode = 60108, t.Profiler = 60114;
                var a = 60109,
                    i = 60110,
                    u = 60112;
                t.Suspense = 60113;
                var s = 60120,
                    c = 60115,
                    l = 60116,
                    f = 60121,
                    p = 60122,
                    d = 60117,
                    y = 60129,
                    m = 60131;
                if ("function" == typeof Symbol && Symbol.for) {
                    var v = Symbol.for;
                    n = v("react.element"), o = v("react.portal"), t.Fragment = v("react.fragment"), t.StrictMode = v("react.strict_mode"), t.Profiler = v("react.profiler"), a = v("react.provider"), i = v("react.context"), u = v("react.forward_ref"), t.Suspense = v("react.suspense"), s = v("react.suspense_list"), c = v("react.memo"), l = v("react.lazy"), f = v("react.block"), p = v("react.server.block"), d = v("react.fundamental"), v("react.scope"), v("react.opaque.id"), y = v("react.debug_trace_mode"), v("react.offscreen"), m = v("react.legacy_hidden")
                }
                var h = "function" == typeof Symbol && Symbol.iterator,
                    g = "@@iterator";

                function b(e) {
                    if (null === e || "object" != typeof e) return null;
                    var t = h && e[h] || e[g];
                    return "function" == typeof t ? t : null
                }
                var _ = {
                        current: null
                    },
                    w = {
                        current: null
                    },
                    k = {},
                    C = null;

                function R(e) {
                    C = e
                }
                k.setExtraStackFrame = function (e) {
                    C = e
                }, k.getCurrentStack = null, k.getStackAddendum = function () {
                    var e = "";
                    C && (e += C);
                    var t = k.getCurrentStack;
                    return t && (e += t() || ""), e
                };
                var j = {
                    ReactCurrentDispatcher: _,
                    ReactCurrentBatchConfig: {
                        transition: 0
                    },
                    ReactCurrentOwner: w,
                    IsSomeRendererActing: {
                        current: !1
                    },
                    assign: e
                };

                function P(e) {
                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                    O("warn", e, r)
                }

                function S(e) {
                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                    O("error", e, r)
                }

                function O(e, t, r) {
                    var n = j.ReactDebugCurrentFrame.getStackAddendum();
                    "" !== n && (t += "%s", r = r.concat([n]));
                    var o = r.map((function (e) {
                        return "" + e
                    }));
                    o.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, o)
                }
                j.ReactDebugCurrentFrame = k;
                var E = {};

                function x(e, t) {
                    var r = e.constructor,
                        n = r && (r.displayName || r.name) || "ReactClass",
                        o = n + "." + t;
                    E[o] || (S("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, n), E[o] = !0)
                }
                var $ = {
                        isMounted: function (e) {
                            return !1
                        },
                        enqueueForceUpdate: function (e, t, r) {
                            x(e, "forceUpdate")
                        },
                        enqueueReplaceState: function (e, t, r, n) {
                            x(e, "replaceState")
                        },
                        enqueueSetState: function (e, t, r, n) {
                            x(e, "setState")
                        }
                    },
                    T = {};

                function D(e, t, r) {
                    this.props = e, this.context = t, this.refs = T, this.updater = r || $
                }
                Object.freeze(T), D.prototype.isReactComponent = {}, D.prototype.setState = function (e, t) {
                    if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, D.prototype.forceUpdate = function (e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                };
                var F = {
                        isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
                        replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
                    },
                    N = function (e, t) {
                        Object.defineProperty(D.prototype, e, {
                            get: function () {
                                P("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1])
                            }
                        })
                    };
                for (var I in F) F.hasOwnProperty(I) && N(I, F[I]);

                function A() {}

                function M(e, t, r) {
                    this.props = e, this.context = t, this.refs = T, this.updater = r || $
                }
                A.prototype = D.prototype;
                var z = M.prototype = new A;

                function U(e) {
                    return e.displayName || "Context"
                }

                function L(e) {
                    if (null == e) return null;
                    if ("number" == typeof e.tag && S("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), "function" == typeof e) return e.displayName || e.name || null;
                    if ("string" == typeof e) return e;
                    switch (e) {
                        case t.Fragment:
                            return "Fragment";
                        case o:
                            return "Portal";
                        case t.Profiler:
                            return "Profiler";
                        case t.StrictMode:
                            return "StrictMode";
                        case t.Suspense:
                            return "Suspense";
                        case s:
                            return "SuspenseList"
                    }
                    if ("object" == typeof e) switch (e.$$typeof) {
                        case i:
                            return U(e) + ".Consumer";
                        case a:
                            return U(e._context) + ".Provider";
                        case u:
                            return d = e, y = e.render, m = "ForwardRef", v = y.displayName || y.name || "", d.displayName || ("" !== v ? m + "(" + v + ")" : m);
                        case c:
                            return L(e.type);
                        case f:
                            return L(e._render);
                        case l:
                            var r = e,
                                n = r._payload,
                                p = r._init;
                            try {
                                return L(p(n))
                            } catch (e) {
                                return null
                            }
                    }
                    var d, y, m, v;
                    return null
                }
                z.constructor = M, e(z, D.prototype), z.isPureReactComponent = !0;
                var V, q, W, Y = Object.prototype.hasOwnProperty,
                    B = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function H(e) {
                    if (Y.call(e, "ref")) {
                        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
                        if (t && t.isReactWarning) return !1
                    }
                    return void 0 !== e.ref
                }

                function J(e) {
                    if (Y.call(e, "key")) {
                        var t = Object.getOwnPropertyDescriptor(e, "key").get;
                        if (t && t.isReactWarning) return !1
                    }
                    return void 0 !== e.key
                }
                W = {};
                var X = function (e, t, r, o, a, i, u) {
                    var s = {
                        $$typeof: n,
                        type: e,
                        key: t,
                        ref: r,
                        props: u,
                        _owner: i,
                        _store: {}
                    };
                    return Object.defineProperty(s._store, "validated", {
                        configurable: !1,
                        enumerable: !1,
                        writable: !0,
                        value: !1
                    }), Object.defineProperty(s, "_self", {
                        configurable: !1,
                        enumerable: !1,
                        writable: !1,
                        value: o
                    }), Object.defineProperty(s, "_source", {
                        configurable: !1,
                        enumerable: !1,
                        writable: !1,
                        value: a
                    }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s
                };

                function G(e, t, r) {
                    var n, o = {},
                        a = null,
                        i = null,
                        u = null,
                        s = null;
                    if (null != t)
                        for (n in H(t) && (i = t.ref, function (e) {
                                if ("string" == typeof e.ref && w.current && e.__self && w.current.stateNode !== e.__self) {
                                    var t = L(w.current.type);
                                    W[t] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', t, e.ref), W[t] = !0)
                                }
                            }(t)), J(t) && (a = "" + t.key), u = void 0 === t.__self ? null : t.__self, s = void 0 === t.__source ? null : t.__source, t) Y.call(t, n) && !B.hasOwnProperty(n) && (o[n] = t[n]);
                    var c = arguments.length - 2;
                    if (1 === c) o.children = r;
                    else if (c > 1) {
                        for (var l = Array(c), f = 0; f < c; f++) l[f] = arguments[f + 2];
                        Object.freeze && Object.freeze(l), o.children = l
                    }
                    if (e && e.defaultProps) {
                        var p = e.defaultProps;
                        for (n in p) void 0 === o[n] && (o[n] = p[n])
                    }
                    if (a || i) {
                        var d = "function" == typeof e ? e.displayName || e.name || "Unknown" : e;
                        a && function (e, t) {
                            var r = function () {
                                V || (V = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t))
                            };
                            r.isReactWarning = !0, Object.defineProperty(e, "key", {
                                get: r,
                                configurable: !0
                            })
                        }(o, d), i && function (e, t) {
                            var r = function () {
                                q || (q = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t))
                            };
                            r.isReactWarning = !0, Object.defineProperty(e, "ref", {
                                get: r,
                                configurable: !0
                            })
                        }(o, d)
                    }
                    return X(e, a, i, u, s, w.current, o)
                }

                function K(t, r, n) {
                    if (null == t) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
                    var o, a, i = e({}, t.props),
                        u = t.key,
                        s = t.ref,
                        c = t._self,
                        l = t._source,
                        f = t._owner;
                    if (null != r)
                        for (o in H(r) && (s = r.ref, f = w.current), J(r) && (u = "" + r.key), t.type && t.type.defaultProps && (a = t.type.defaultProps), r) Y.call(r, o) && !B.hasOwnProperty(o) && (void 0 === r[o] && void 0 !== a ? i[o] = a[o] : i[o] = r[o]);
                    var p = arguments.length - 2;
                    if (1 === p) i.children = n;
                    else if (p > 1) {
                        for (var d = Array(p), y = 0; y < p; y++) d[y] = arguments[y + 2];
                        i.children = d
                    }
                    return X(t.type, u, s, c, l, f, i)
                }

                function Q(e) {
                    return "object" == typeof e && null !== e && e.$$typeof === n
                }
                var Z = ".",
                    ee = ":";
                var te = !1,
                    re = /\/+/g;

                function ne(e) {
                    return e.replace(re, "$&/")
                }

                function oe(e, t) {
                    return "object" == typeof e && null !== e && null != e.key ? (r = "" + e.key, n = {
                        "=": "=0",
                        ":": "=2"
                    }, "$" + r.replace(/[=:]/g, (function (e) {
                        return n[e]
                    }))) : t.toString(36);
                    var r, n
                }

                function ae(e, t, r, a, i) {
                    var u = typeof e;
                    "undefined" !== u && "boolean" !== u || (e = null);
                    var s, c, l, f = !1;
                    if (null === e) f = !0;
                    else switch (u) {
                        case "string":
                        case "number":
                            f = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case n:
                                case o:
                                    f = !0
                            }
                    }
                    if (f) {
                        var p = e,
                            d = i(p),
                            y = "" === a ? Z + oe(p, 0) : a;
                        if (Array.isArray(d)) {
                            var m = "";
                            null != y && (m = ne(y) + "/"), ae(d, t, m, "", (function (e) {
                                return e
                            }))
                        } else null != d && (Q(d) && (s = d, c = r + (!d.key || p && p.key === d.key ? "" : ne("" + d.key) + "/") + y, d = X(s.type, c, s.ref, s._self, s._source, s._owner, s.props)), t.push(d));
                        return 1
                    }
                    var v = 0,
                        h = "" === a ? Z : a + ee;
                    if (Array.isArray(e))
                        for (var g = 0; g < e.length; g++) v += ae(l = e[g], t, r, h + oe(l, g), i);
                    else {
                        var _ = b(e);
                        if ("function" == typeof _) {
                            var w = e;
                            _ === w.entries && (te || P("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), te = !0);
                            for (var k, C = _.call(w), R = 0; !(k = C.next()).done;) v += ae(l = k.value, t, r, h + oe(l, R++), i)
                        } else if ("object" === u) {
                            var j = "" + e;
                            throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === j ? "object with keys {" + Object.keys(e).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.")
                        }
                    }
                    return v
                }

                function ie(e, t, r) {
                    if (null == e) return e;
                    var n = [],
                        o = 0;
                    return ae(e, n, "", "", (function (e) {
                        return t.call(r, e, o++)
                    })), n
                }
                var ue = -1,
                    se = 0,
                    ce = 1,
                    le = 2;

                function fe(e) {
                    if (e._status === ue) {
                        var t = (0, e._result)(),
                            r = e;
                        r._status = se, r._result = t, t.then((function (t) {
                            if (e._status === se) {
                                var r = t.default;
                                void 0 === r && S("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", t);
                                var n = e;
                                n._status = ce, n._result = r
                            }
                        }), (function (t) {
                            if (e._status === se) {
                                var r = e;
                                r._status = le, r._result = t
                            }
                        }))
                    }
                    if (e._status === ce) return e._result;
                    throw e._result
                }
                var pe = !1;

                function de(e) {
                    return "string" == typeof e || "function" == typeof e || (!(e !== t.Fragment && e !== t.Profiler && e !== y && e !== t.StrictMode && e !== t.Suspense && e !== s && e !== m && !pe) || "object" == typeof e && null !== e && (e.$$typeof === l || e.$$typeof === c || e.$$typeof === a || e.$$typeof === i || e.$$typeof === u || e.$$typeof === d || e.$$typeof === f || e[0] === p))
                }

                function ye() {
                    var e = _.current;
                    if (null === e) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
                    return e
                }
                var me, ve, he, ge, be, _e, we, ke = 0;

                function Ce() {}
                Ce.__reactDisabledLog = !0;
                var Re, je = j.ReactCurrentDispatcher;

                function Pe(e, t, r) {
                    if (void 0 === Re) try {
                        throw Error()
                    } catch (e) {
                        var n = e.stack.trim().match(/\n( *(at )?)/);
                        Re = n && n[1] || ""
                    }
                    return "\n" + Re + e
                }
                var Se, Oe = !1,
                    Ee = "function" == typeof WeakMap ? WeakMap : Map;

                function xe(t, r) {
                    if (!t || Oe) return "";
                    var n, o = Se.get(t);
                    if (void 0 !== o) return o;
                    Oe = !0;
                    var a, i = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0, a = je.current, je.current = null,
                        function () {
                            if (0 === ke) {
                                me = console.log, ve = console.info, he = console.warn, ge = console.error, be = console.group, _e = console.groupCollapsed, we = console.groupEnd;
                                var e = {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: Ce,
                                    writable: !0
                                };
                                Object.defineProperties(console, {
                                    info: e,
                                    log: e,
                                    warn: e,
                                    error: e,
                                    group: e,
                                    groupCollapsed: e,
                                    groupEnd: e
                                })
                            }
                            ke++
                        }();
                    try {
                        if (r) {
                            var u = function () {
                                throw Error()
                            };
                            if (Object.defineProperty(u.prototype, "props", {
                                    set: function () {
                                        throw Error()
                                    }
                                }), "object" == typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(u, [])
                                } catch (e) {
                                    n = e
                                }
                                Reflect.construct(t, [], u)
                            } else {
                                try {
                                    u.call()
                                } catch (e) {
                                    n = e
                                }
                                t.call(u.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (e) {
                                n = e
                            }
                            t()
                        }
                    } catch (e) {
                        if (e && n && "string" == typeof e.stack) {
                            for (var s = e.stack.split("\n"), c = n.stack.split("\n"), l = s.length - 1, f = c.length - 1; l >= 1 && f >= 0 && s[l] !== c[f];) f--;
                            for (; l >= 1 && f >= 0; l--, f--)
                                if (s[l] !== c[f]) {
                                    if (1 !== l || 1 !== f)
                                        do {
                                            if (l--, --f < 0 || s[l] !== c[f]) {
                                                var p = "\n" + s[l].replace(" at new ", " at ");
                                                return "function" == typeof t && Se.set(t, p), p
                                            }
                                        } while (l >= 1 && f >= 0);
                                    break
                                }
                        }
                    } finally {
                        Oe = !1, je.current = a,
                            function () {
                                if (0 == --ke) {
                                    var t = {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0
                                    };
                                    Object.defineProperties(console, {
                                        log: e({}, t, {
                                            value: me
                                        }),
                                        info: e({}, t, {
                                            value: ve
                                        }),
                                        warn: e({}, t, {
                                            value: he
                                        }),
                                        error: e({}, t, {
                                            value: ge
                                        }),
                                        group: e({}, t, {
                                            value: be
                                        }),
                                        groupCollapsed: e({}, t, {
                                            value: _e
                                        }),
                                        groupEnd: e({}, t, {
                                            value: we
                                        })
                                    })
                                }
                                ke < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.")
                            }(), Error.prepareStackTrace = i
                    }
                    var d = t ? t.displayName || t.name : "",
                        y = d ? Pe(d) : "";
                    return "function" == typeof t && Se.set(t, y), y
                }

                function $e(e, t, r) {
                    return xe(e, !1)
                }

                function Te(e, r, n) {
                    if (null == e) return "";
                    if ("function" == typeof e) return xe(e, function (e) {
                        var t = e.prototype;
                        return !(!t || !t.isReactComponent)
                    }(e));
                    if ("string" == typeof e) return Pe(e);
                    switch (e) {
                        case t.Suspense:
                            return Pe("Suspense");
                        case s:
                            return Pe("SuspenseList")
                    }
                    if ("object" == typeof e) switch (e.$$typeof) {
                        case u:
                            return $e(e.render);
                        case c:
                            return Te(e.type, r, n);
                        case f:
                            return $e(e._render);
                        case l:
                            var o = e,
                                a = o._payload,
                                i = o._init;
                            try {
                                return Te(i(a), r, n)
                            } catch (e) {}
                    }
                    return ""
                }
                Se = new Ee;
                var De, Fe = {},
                    Ne = j.ReactDebugCurrentFrame;

                function Ie(e) {
                    if (e) {
                        var t = e._owner,
                            r = Te(e.type, e._source, t ? t.type : null);
                        Ne.setExtraStackFrame(r)
                    } else Ne.setExtraStackFrame(null)
                }

                function Ae(e) {
                    if (e) {
                        var t = e._owner;
                        R(Te(e.type, e._source, t ? t.type : null))
                    } else R(null)
                }

                function Me() {
                    if (w.current) {
                        var e = L(w.current.type);
                        if (e) return "\n\nCheck the render method of `" + e + "`."
                    }
                    return ""
                }
                De = !1;
                var ze = {};

                function Ue(e, t) {
                    if (e._store && !e._store.validated && null == e.key) {
                        e._store.validated = !0;
                        var r = function (e) {
                            var t = Me();
                            if (!t) {
                                var r = "string" == typeof e ? e : e.displayName || e.name;
                                r && (t = "\n\nCheck the top-level render call using <" + r + ">.")
                            }
                            return t
                        }(t);
                        if (!ze[r]) {
                            ze[r] = !0;
                            var n = "";
                            e && e._owner && e._owner !== w.current && (n = " It was passed a child from " + L(e._owner.type) + "."), Ae(e), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', r, n), Ae(null)
                        }
                    }
                }

                function Le(e, t) {
                    if ("object" == typeof e)
                        if (Array.isArray(e))
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                Q(n) && Ue(n, t)
                            } else if (Q(e)) e._store && (e._store.validated = !0);
                            else if (e) {
                        var o = b(e);
                        if ("function" == typeof o && o !== e.entries)
                            for (var a, i = o.call(e); !(a = i.next()).done;) Q(a.value) && Ue(a.value, t)
                    }
                }

                function Ve(e) {
                    var t, r = e.type;
                    if (null != r && "string" != typeof r) {
                        if ("function" == typeof r) t = r.propTypes;
                        else {
                            if ("object" != typeof r || r.$$typeof !== u && r.$$typeof !== c) return;
                            t = r.propTypes
                        }
                        if (t) {
                            var n = L(r);
                            ! function (e, t, r, n, o) {
                                var a = Function.call.bind(Object.prototype.hasOwnProperty);
                                for (var i in e)
                                    if (a(e, i)) {
                                        var u = void 0;
                                        try {
                                            if ("function" != typeof e[i]) {
                                                var s = Error((n || "React class") + ": " + r + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                                                throw s.name = "Invariant Violation", s
                                            }
                                            u = e[i](t, i, n, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")
                                        } catch (e) {
                                            u = e
                                        }!u || u instanceof Error || (Ie(o), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", r, i, typeof u), Ie(null)), u instanceof Error && !(u.message in Fe) && (Fe[u.message] = !0, Ie(o), S("Failed %s type: %s", r, u.message), Ie(null))
                                    }
                            }(t, e.props, "prop", n, e)
                        } else if (void 0 !== r.PropTypes && !De) {
                            De = !0, S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", L(r) || "Unknown")
                        }
                        "function" != typeof r.getDefaultProps || r.getDefaultProps.isReactClassApproved || S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")
                    }
                }

                function qe(e, r, o) {
                    var a, i, u = de(e);
                    if (!u) {
                        var s = "";
                        (void 0 === e || "object" == typeof e && null !== e && 0 === Object.keys(e).length) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                        var c, l = null != (a = r) && void 0 !== (i = a.__source) ? "\n\nCheck your code at " + i.fileName.replace(/^.*[\\\/]/, "") + ":" + i.lineNumber + "." : "";
                        s += l || Me(), null === e ? c = "null" : Array.isArray(e) ? c = "array" : void 0 !== e && e.$$typeof === n ? (c = "<" + (L(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, S("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, s)
                    }
                    var f = G.apply(this, arguments);
                    if (null == f) return f;
                    if (u)
                        for (var p = 2; p < arguments.length; p++) Le(arguments[p], e);
                    return e === t.Fragment ? function (e) {
                        for (var t = Object.keys(e.props), r = 0; r < t.length; r++) {
                            var n = t[r];
                            if ("children" !== n && "key" !== n) {
                                Ae(e), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), Ae(null);
                                break
                            }
                        }
                        null !== e.ref && (Ae(e), S("Invalid attribute `ref` supplied to `React.Fragment`."), Ae(null))
                    }(f) : Ve(f), f
                }
                var We = !1;
                try {
                    var Ye = Object.freeze({});
                    new Map([
                        [Ye, null]
                    ]), new Set([Ye])
                } catch (e) {}
                var Be = qe,
                    He = function (e, t, r) {
                        for (var n = K.apply(this, arguments), o = 2; o < arguments.length; o++) Le(arguments[o], n.type);
                        return Ve(n), n
                    },
                    Je = function (e) {
                        var t = qe.bind(null, e);
                        return t.type = e, We || (We = !0, P("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(t, "type", {
                            enumerable: !1,
                            get: function () {
                                return P("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
                                    value: e
                                }), e
                            }
                        }), t
                    },
                    Xe = {
                        map: ie,
                        forEach: function (e, t, r) {
                            ie(e, (function () {
                                t.apply(this, arguments)
                            }), r)
                        },
                        count: function (e) {
                            var t = 0;
                            return ie(e, (function () {
                                t++
                            })), t
                        },
                        toArray: function (e) {
                            return ie(e, (function (e) {
                                return e
                            })) || []
                        },
                        only: function (e) {
                            if (!Q(e)) throw Error("React.Children.only expected to receive a single React element child.");
                            return e
                        }
                    };
                t.Children = Xe, t.Component = D, t.PureComponent = M, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j, t.cloneElement = He, t.createContext = function (e, t) {
                    void 0 === t ? t = null : null !== t && "function" != typeof t && S("createContext: Expected the optional second argument to be a function. Instead received: %s", t);
                    var r = {
                        $$typeof: i,
                        _calculateChangedBits: t,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null
                    };
                    r.Provider = {
                        $$typeof: a,
                        _context: r
                    };
                    var n = !1,
                        o = !1,
                        u = !1,
                        s = {
                            $$typeof: i,
                            _context: r,
                            _calculateChangedBits: r._calculateChangedBits
                        };
                    return Object.defineProperties(s, {
                        Provider: {
                            get: function () {
                                return o || (o = !0, S("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider
                            },
                            set: function (e) {
                                r.Provider = e
                            }
                        },
                        _currentValue: {
                            get: function () {
                                return r._currentValue
                            },
                            set: function (e) {
                                r._currentValue = e
                            }
                        },
                        _currentValue2: {
                            get: function () {
                                return r._currentValue2
                            },
                            set: function (e) {
                                r._currentValue2 = e
                            }
                        },
                        _threadCount: {
                            get: function () {
                                return r._threadCount
                            },
                            set: function (e) {
                                r._threadCount = e
                            }
                        },
                        Consumer: {
                            get: function () {
                                return n || (n = !0, S("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer
                            }
                        },
                        displayName: {
                            get: function () {
                                return r.displayName
                            },
                            set: function (e) {
                                u || (P("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", e), u = !0)
                            }
                        }
                    }), r.Consumer = s, r._currentRenderer = null, r._currentRenderer2 = null, r
                }, t.createElement = Be, t.createFactory = Je, t.createRef = function () {
                    var e = {
                        current: null
                    };
                    return Object.seal(e), e
                }, t.forwardRef = function (e) {
                    null != e && e.$$typeof === c ? S("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : "function" != typeof e ? S("forwardRef requires a render function but was given %s.", null === e ? "null" : typeof e) : 0 !== e.length && 2 !== e.length && S("forwardRef render functions accept exactly two parameters: props and ref. %s", 1 === e.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), null != e && (null == e.defaultProps && null == e.propTypes || S("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"));
                    var t, r = {
                        $$typeof: u,
                        render: e
                    };
                    return Object.defineProperty(r, "displayName", {
                        enumerable: !1,
                        configurable: !0,
                        get: function () {
                            return t
                        },
                        set: function (r) {
                            t = r, null == e.displayName && (e.displayName = r)
                        }
                    }), r
                }, t.isValidElement = Q, t.lazy = function (e) {
                    var t, r, n = {
                        $$typeof: l,
                        _payload: {
                            _status: -1,
                            _result: e
                        },
                        _init: fe
                    };
                    return Object.defineProperties(n, {
                        defaultProps: {
                            configurable: !0,
                            get: function () {
                                return t
                            },
                            set: function (e) {
                                S("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), t = e, Object.defineProperty(n, "defaultProps", {
                                    enumerable: !0
                                })
                            }
                        },
                        propTypes: {
                            configurable: !0,
                            get: function () {
                                return r
                            },
                            set: function (e) {
                                S("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), r = e, Object.defineProperty(n, "propTypes", {
                                    enumerable: !0
                                })
                            }
                        }
                    }), n
                }, t.memo = function (e, t) {
                    de(e) || S("memo: The first argument must be a component. Instead received: %s", null === e ? "null" : typeof e);
                    var r, n = {
                        $$typeof: c,
                        type: e,
                        compare: void 0 === t ? null : t
                    };
                    return Object.defineProperty(n, "displayName", {
                        enumerable: !1,
                        configurable: !0,
                        get: function () {
                            return r
                        },
                        set: function (t) {
                            r = t, null == e.displayName && (e.displayName = t)
                        }
                    }), n
                }, t.useCallback = function (e, t) {
                    return ye().useCallback(e, t)
                }, t.useContext = function (e, t) {
                    var r = ye();
                    if (void 0 !== t && S("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", t, "number" == typeof t && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks" : ""), void 0 !== e._context) {
                        var n = e._context;
                        n.Consumer === e ? S("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : n.Provider === e && S("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")
                    }
                    return r.useContext(e, t)
                }, t.useDebugValue = function (e, t) {
                    return ye().useDebugValue(e, t)
                }, t.useEffect = function (e, t) {
                    return ye().useEffect(e, t)
                }, t.useImperativeHandle = function (e, t, r) {
                    return ye().useImperativeHandle(e, t, r)
                }, t.useLayoutEffect = function (e, t) {
                    return ye().useLayoutEffect(e, t)
                }, t.useMemo = function (e, t) {
                    return ye().useMemo(e, t)
                }, t.useReducer = function (e, t, r) {
                    return ye().useReducer(e, t, r)
                }, t.useRef = function (e) {
                    return ye().useRef(e)
                }, t.useState = function (e) {
                    return ye().useState(e)
                }, t.version = "17.0.2"
            })()
        }
    }
]);
//# sourceMappingURL=commons-main-react.development.js.bundle.js.map