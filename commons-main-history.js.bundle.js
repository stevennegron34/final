"use strict";
(self.webpackChunkNxStreaming = self.webpackChunkNxStreaming || []).push([
    [986], {
        9731: (t, n, e) => {
            e.d(n, {
                Hp: () => l,
                lX: () => k,
                ob: () => p
            });
            var o = e(7462),
                a = e(8273),
                i = e(5429),
                r = e(5298),
                s = e(8776);

            function c(t) {
                return "/" === t.charAt(0) ? t : "/" + t
            }

            function h(t, n) {
                return 0 === t.toLowerCase().indexOf(n.toLowerCase()) && -1 !== "/?#".indexOf(t.charAt(n.length))
            }

            function u(t, n) {
                return h(t, n) ? t.substr(n.length) : t
            }

            function d(t) {
                return "/" === t.charAt(t.length - 1) ? t.slice(0, -1) : t
            }

            function f(t) {
                var n = t.pathname,
                    e = t.search,
                    o = t.hash,
                    a = n || "/";
                return e && "?" !== e && (a += "?" === e.charAt(0) ? e : "?" + e), o && "#" !== o && (a += "#" === o.charAt(0) ? o : "#" + o), a
            }

            function p(t, n, e, i) {
                var r;
                "string" == typeof t ? (r = function (t) {
                    var n = t || "/",
                        e = "",
                        o = "",
                        a = n.indexOf("#"); - 1 !== a && (o = n.substr(a), n = n.substr(0, a));
                    var i = n.indexOf("?");
                    return -1 !== i && (e = n.substr(i), n = n.substr(0, i)), {
                        pathname: n,
                        search: "?" === e ? "" : e,
                        hash: "#" === o ? "" : o
                    }
                }(t), r.state = n) : (void 0 === (r = (0, o.Z)({}, t)).pathname && (r.pathname = ""), r.search ? "?" !== r.search.charAt(0) && (r.search = "?" + r.search) : r.search = "", r.hash ? "#" !== r.hash.charAt(0) && (r.hash = "#" + r.hash) : r.hash = "", void 0 !== n && void 0 === r.state && (r.state = n));
                try {
                    r.pathname = decodeURI(r.pathname)
                } catch (t) {
                    throw t instanceof URIError ? new URIError('Pathname "' + r.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : t
                }
                return e && (r.key = e), i ? r.pathname ? "/" !== r.pathname.charAt(0) && (r.pathname = (0, a.Z)(r.pathname, i.pathname)) : r.pathname = i.pathname : r.pathname || (r.pathname = "/"), r
            }

            function l(t, n) {
                return t.pathname === n.pathname && t.search === n.search && t.hash === n.hash && t.key === n.key && (0, i.Z)(t.state, n.state)
            }

            function v() {
                var t = null;
                var n = [];
                return {
                    setPrompt: function (n) {
                        return (0, r.Z)(null == t, "A history supports only one prompt at a time"), t = n,
                            function () {
                                t === n && (t = null)
                            }
                    },
                    confirmTransitionTo: function (n, e, o, a) {
                        if (null != t) {
                            var i = "function" == typeof t ? t(n, e) : t;
                            "string" == typeof i ? "function" == typeof o ? o(i, a) : ((0, r.Z)(!1, "A history needs a getUserConfirmation function in order to use a prompt message"), a(!0)) : a(!1 !== i)
                        } else a(!0)
                    },
                    appendListener: function (t) {
                        var e = !0;

                        function o() {
                            e && t.apply(void 0, arguments)
                        }
                        return n.push(o),
                            function () {
                                e = !1, n = n.filter((function (t) {
                                    return t !== o
                                }))
                            }
                    },
                    notifyListeners: function () {
                        for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++) e[o] = arguments[o];
                        n.forEach((function (t) {
                            return t.apply(void 0, e)
                        }))
                    }
                }
            }
            var w = !("undefined" == typeof window || !window.document || !window.document.createElement);

            function m(t, n) {
                n(window.confirm(t))
            }
            var y = "popstate",
                g = "hashchange";

            function b() {
                try {
                    return window.history.state || {}
                } catch (t) {
                    return {}
                }
            }

            function k(t) {
                void 0 === t && (t = {}), w || (0, s.Z)(!1, "Browser history needs a DOM");
                var n, e = window.history,
                    a = (-1 === (n = window.navigator.userAgent).indexOf("Android 2.") && -1 === n.indexOf("Android 4.0") || -1 === n.indexOf("Mobile Safari") || -1 !== n.indexOf("Chrome") || -1 !== n.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
                    i = !(-1 === window.navigator.userAgent.indexOf("Trident")),
                    l = t,
                    k = l.forceRefresh,
                    O = void 0 !== k && k,
                    A = l.getUserConfirmation,
                    x = void 0 === A ? m : A,
                    L = l.keyLength,
                    P = void 0 === L ? 6 : L,
                    T = t.basename ? d(c(t.basename)) : "";

                function Z(t) {
                    var n = t || {},
                        e = n.key,
                        o = n.state,
                        a = window.location,
                        i = a.pathname + a.search + a.hash;
                    return (0, r.Z)(!T || h(i, T), 'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' + i + '" to begin with "' + T + '".'), T && (i = u(i, T)), p(i, o, e)
                }

                function E() {
                    return Math.random().toString(36).substr(2, P)
                }
                var C = v();

                function S(t) {
                    (0, o.Z)(X, t), X.length = e.length, C.notifyListeners(X.location, X.action)
                }

                function U(t) {
                    (function (t) {
                        return void 0 === t.state && -1 === navigator.userAgent.indexOf("CriOS")
                    })(t) || M(Z(t.state))
                }

                function R() {
                    M(Z(b()))
                }
                var H = !1;

                function M(t) {
                    if (H) H = !1, S();
                    else {
                        C.confirmTransitionTo(t, "POP", x, (function (n) {
                            n ? S({
                                action: "POP",
                                location: t
                            }) : function (t) {
                                var n = X.location,
                                    e = B.indexOf(n.key); - 1 === e && (e = 0);
                                var o = B.indexOf(t.key); - 1 === o && (o = 0);
                                var a = e - o;
                                a && (H = !0, Y(a))
                            }(t)
                        }))
                    }
                }
                var j = Z(b()),
                    B = [j.key];

                function I(t) {
                    return T + f(t)
                }

                function Y(t) {
                    e.go(t)
                }
                var D = 0;

                function F(t) {
                    1 === (D += t) && 1 === t ? (window.addEventListener(y, U), i && window.addEventListener(g, R)) : 0 === D && (window.removeEventListener(y, U), i && window.removeEventListener(g, R))
                }
                var W = !1;
                var X = {
                    length: e.length,
                    action: "POP",
                    location: j,
                    createHref: I,
                    push: function (t, n) {
                        (0, r.Z)(!("object" == typeof t && void 0 !== t.state && void 0 !== n), "You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");
                        var o = "PUSH",
                            i = p(t, n, E(), X.location);
                        C.confirmTransitionTo(i, o, x, (function (t) {
                            if (t) {
                                var n = I(i),
                                    s = i.key,
                                    c = i.state;
                                if (a)
                                    if (e.pushState({
                                            key: s,
                                            state: c
                                        }, null, n), O) window.location.href = n;
                                    else {
                                        var h = B.indexOf(X.location.key),
                                            u = B.slice(0, h + 1);
                                        u.push(i.key), B = u, S({
                                            action: o,
                                            location: i
                                        })
                                    }
                                else(0, r.Z)(void 0 === c, "Browser history cannot push state in browsers that do not support HTML5 history"), window.location.href = n
                            }
                        }))
                    },
                    replace: function (t, n) {
                        (0, r.Z)(!("object" == typeof t && void 0 !== t.state && void 0 !== n), "You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");
                        var o = "REPLACE",
                            i = p(t, n, E(), X.location);
                        C.confirmTransitionTo(i, o, x, (function (t) {
                            if (t) {
                                var n = I(i),
                                    s = i.key,
                                    c = i.state;
                                if (a)
                                    if (e.replaceState({
                                            key: s,
                                            state: c
                                        }, null, n), O) window.location.replace(n);
                                    else {
                                        var h = B.indexOf(X.location.key); - 1 !== h && (B[h] = i.key), S({
                                            action: o,
                                            location: i
                                        })
                                    }
                                else(0, r.Z)(void 0 === c, "Browser history cannot replace state in browsers that do not support HTML5 history"), window.location.replace(n)
                            }
                        }))
                    },
                    go: Y,
                    goBack: function () {
                        Y(-1)
                    },
                    goForward: function () {
                        Y(1)
                    },
                    block: function (t) {
                        void 0 === t && (t = !1);
                        var n = C.setPrompt(t);
                        return W || (F(1), W = !0),
                            function () {
                                return W && (W = !1, F(-1)), n()
                            }
                    },
                    listen: function (t) {
                        var n = C.appendListener(t);
                        return F(1),
                            function () {
                                F(-1), n()
                            }
                    }
                };
                return X
            }
        }
    }
]);
//# sourceMappingURL=commons-main-history.js.bundle.js.map