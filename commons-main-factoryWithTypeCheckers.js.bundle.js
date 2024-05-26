"use strict";
(self.webpackChunkNxStreaming = self.webpackChunkNxStreaming || []).push([
    [732], {
        1805: (e, n, r) => {
            var t = r(9864),
                o = r(7418),
                a = r(414),
                i = r(8130),
                u = r(1040),
                f = function () {};

            function c() {
                return null
            }
            f = function (e) {
                var n = "Warning: " + e;
                "undefined" != typeof console && console.error(n);
                try {
                    throw new Error(n)
                } catch (e) {}
            }, e.exports = function (e, n) {
                var r = "function" == typeof Symbol && Symbol.iterator,
                    l = "@@iterator";
                var p = "<<anonymous>>",
                    s = {
                        array: b("array"),
                        bigint: b("bigint"),
                        bool: b("boolean"),
                        func: b("function"),
                        number: b("number"),
                        object: b("object"),
                        string: b("string"),
                        symbol: b("symbol"),
                        any: v(c),
                        arrayOf: function (e) {
                            return v((function (n, r, t, o, i) {
                                if ("function" != typeof e) return new y("Property `" + i + "` of component `" + t + "` has invalid PropType notation inside arrayOf.");
                                var u = n[r];
                                if (!Array.isArray(u)) return new y("Invalid " + o + " `" + i + "` of type `" + h(u) + "` supplied to `" + t + "`, expected an array.");
                                for (var f = 0; f < u.length; f++) {
                                    var c = e(u, f, t, o, i + "[" + f + "]", a);
                                    if (c instanceof Error) return c
                                }
                                return null
                            }))
                        },
                        element: v((function (n, r, t, o, a) {
                            var i = n[r];
                            return e(i) ? null : new y("Invalid " + o + " `" + a + "` of type `" + h(i) + "` supplied to `" + t + "`, expected a single ReactElement.")
                        })),
                        elementType: v((function (e, n, r, o, a) {
                            var i = e[n];
                            return t.isValidElementType(i) ? null : new y("Invalid " + o + " `" + a + "` of type `" + h(i) + "` supplied to `" + r + "`, expected a single ReactElement type.")
                        })),
                        instanceOf: function (e) {
                            return v((function (n, r, t, o, a) {
                                if (!(n[r] instanceof e)) {
                                    var i = e.name || p;
                                    return new y("Invalid " + o + " `" + a + "` of type `" + (((u = n[r]).constructor && u.constructor.name ? u.constructor.name : p) + "` supplied to `") + t + "`, expected instance of `" + i + "`.")
                                }
                                var u;
                                return null
                            }))
                        },
                        node: v((function (e, n, r, t, o) {
                            return g(e[n]) ? null : new y("Invalid " + t + " `" + o + "` supplied to `" + r + "`, expected a ReactNode.")
                        })),
                        objectOf: function (e) {
                            return v((function (n, r, t, o, u) {
                                if ("function" != typeof e) return new y("Property `" + u + "` of component `" + t + "` has invalid PropType notation inside objectOf.");
                                var f = n[r],
                                    c = h(f);
                                if ("object" !== c) return new y("Invalid " + o + " `" + u + "` of type `" + c + "` supplied to `" + t + "`, expected an object.");
                                for (var l in f)
                                    if (i(f, l)) {
                                        var p = e(f, l, t, o, u + "." + l, a);
                                        if (p instanceof Error) return p
                                    } return null
                            }))
                        },
                        oneOf: function (e) {
                            if (!Array.isArray(e)) return f(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), c;
                            return v((function (n, r, t, o, a) {
                                for (var i = n[r], u = 0; u < e.length; u++)
                                    if (d(i, e[u])) return null;
                                var f = JSON.stringify(e, (function (e, n) {
                                    return "symbol" === w(n) ? String(n) : n
                                }));
                                return new y("Invalid " + o + " `" + a + "` of value `" + String(i) + "` supplied to `" + t + "`, expected one of " + f + ".")
                            }))
                        },
                        oneOfType: function (e) {
                            if (!Array.isArray(e)) return f("Invalid argument supplied to oneOfType, expected an instance of array."), c;
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                if ("function" != typeof r) return f("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + x(r) + " at index " + n + "."), c
                            }
                            return v((function (n, r, t, o, u) {
                                for (var f = [], c = 0; c < e.length; c++) {
                                    var l = (0, e[c])(n, r, t, o, u, a);
                                    if (null == l) return null;
                                    l.data && i(l.data, "expectedType") && f.push(l.data.expectedType)
                                }
                                return new y("Invalid " + o + " `" + u + "` supplied to `" + t + "`" + (f.length > 0 ? ", expected one of type [" + f.join(", ") + "]" : "") + ".")
                            }))
                        },
                        shape: function (e) {
                            return v((function (n, r, t, o, i) {
                                var u = n[r],
                                    f = h(u);
                                if ("object" !== f) return new y("Invalid " + o + " `" + i + "` of type `" + f + "` supplied to `" + t + "`, expected `object`.");
                                for (var c in e) {
                                    var l = e[c];
                                    if ("function" != typeof l) return m(t, o, i, c, w(l));
                                    var p = l(u, c, t, o, i + "." + c, a);
                                    if (p) return p
                                }
                                return null
                            }))
                        },
                        exact: function (e) {
                            return v((function (n, r, t, u, f) {
                                var c = n[r],
                                    l = h(c);
                                if ("object" !== l) return new y("Invalid " + u + " `" + f + "` of type `" + l + "` supplied to `" + t + "`, expected `object`.");
                                var p = o({}, n[r], e);
                                for (var s in p) {
                                    var d = e[s];
                                    if (i(e, s) && "function" != typeof d) return m(t, u, f, s, w(d));
                                    if (!d) return new y("Invalid " + u + " `" + f + "` key `" + s + "` supplied to `" + t + "`.\nBad object: " + JSON.stringify(n[r], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
                                    var v = d(c, s, t, u, f + "." + s, a);
                                    if (v) return v
                                }
                                return null
                            }))
                        }
                    };

                function d(e, n) {
                    return e === n ? 0 !== e || 1 / e == 1 / n : e != e && n != n
                }

                function y(e, n) {
                    this.message = e, this.data = n && "object" == typeof n ? n : {}, this.stack = ""
                }

                function v(e) {
                    var r = {},
                        t = 0;

                    function o(o, i, u, c, l, s, d) {
                        if (c = c || p, s = s || u, d !== a) {
                            if (n) {
                                var v = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                                throw v.name = "Invariant Violation", v
                            }
                            if ("undefined" != typeof console) {
                                var b = c + ":" + u;
                                !r[b] && t < 3 && (f("You are manually calling a React.PropTypes validation function for the `" + s + "` prop on `" + c + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), r[b] = !0, t++)
                            }
                        }
                        return null == i[u] ? o ? null === i[u] ? new y("The " + l + " `" + s + "` is marked as required in `" + c + "`, but its value is `null`.") : new y("The " + l + " `" + s + "` is marked as required in `" + c + "`, but its value is `undefined`.") : null : e(i, u, c, l, s)
                    }
                    var i = o.bind(null, !1);
                    return i.isRequired = o.bind(null, !0), i
                }

                function b(e) {
                    return v((function (n, r, t, o, a, i) {
                        var u = n[r];
                        return h(u) !== e ? new y("Invalid " + o + " `" + a + "` of type `" + w(u) + "` supplied to `" + t + "`, expected `" + e + "`.", {
                            expectedType: e
                        }) : null
                    }))
                }

                function m(e, n, r, t, o) {
                    return new y((e || "React class") + ": " + n + " type `" + r + "." + t + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + o + "`.")
                }

                function g(n) {
                    switch (typeof n) {
                        case "number":
                        case "string":
                        case "undefined":
                            return !0;
                        case "boolean":
                            return !n;
                        case "object":
                            if (Array.isArray(n)) return n.every(g);
                            if (null === n || e(n)) return !0;
                            var t = function (e) {
                                var n = e && (r && e[r] || e[l]);
                                if ("function" == typeof n) return n
                            }(n);
                            if (!t) return !1;
                            var o, a = t.call(n);
                            if (t !== n.entries) {
                                for (; !(o = a.next()).done;)
                                    if (!g(o.value)) return !1
                            } else
                                for (; !(o = a.next()).done;) {
                                    var i = o.value;
                                    if (i && !g(i[1])) return !1
                                }
                            return !0;
                        default:
                            return !1
                    }
                }

                function h(e) {
                    var n = typeof e;
                    return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : function (e, n) {
                        return "symbol" === e || !!n && ("Symbol" === n["@@toStringTag"] || "function" == typeof Symbol && n instanceof Symbol)
                    }(n, e) ? "symbol" : n
                }

                function w(e) {
                    if (null == e) return "" + e;
                    var n = h(e);
                    if ("object" === n) {
                        if (e instanceof Date) return "date";
                        if (e instanceof RegExp) return "regexp"
                    }
                    return n
                }

                function x(e) {
                    var n = w(e);
                    switch (n) {
                        case "array":
                        case "object":
                            return "an " + n;
                        case "boolean":
                        case "date":
                        case "regexp":
                            return "a " + n;
                        default:
                            return n
                    }
                }
                return y.prototype = Error.prototype, s.checkPropTypes = u, s.resetWarningCache = u.resetWarningCache, s.PropTypes = s, s
            }
        }
    }
]);
//# sourceMappingURL=commons-main-factoryWithTypeCheckers.js.bundle.js.map