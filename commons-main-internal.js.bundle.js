/*! For license information please see commons-main-internal.js.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkNxStreaming = self.webpackChunkNxStreaming || []).push([
    [209], {
        2727: (n, e, i) => {
            i.d(e, {
                $g: () => t.s,
                A$: () => t.I,
                AP: () => t.i,
                BV: () => t.M,
                Bs: () => t.A,
                C3: () => t.h,
                F6: () => t.f,
                F7: () => t.p,
                GH: () => t.V,
                H0: () => t.C,
                JB: () => t.aa,
                JG: () => t.aq,
                Js: () => t.aG,
                L6: () => t.l,
                LG: () => t.a3,
                LS: () => t.a2,
                Nr: () => t.ac,
                O4: () => t.W,
                Oh: () => t.aK,
                Ov: () => t.ae,
                P6: () => t.ab,
                PQ: () => t.az,
                QT: () => h,
                QZ: () => t.aE,
                R5: () => y,
                RO: () => t.P,
                Rv: () => t.u,
                S$: () => t.H,
                SE: () => t.aC,
                Sn: () => t.au,
                TX: () => t.a6,
                VE: () => t.X,
                WV: () => t.g,
                XB: () => t.Z,
                Xb: () => t.a7,
                ZJ: () => t.$,
                _O: () => t.Q,
                _p: () => t.a1,
                a$: () => t.b,
                aF: () => t.a0,
                aT: () => t.a,
                bX: () => t.a5,
                bc: () => t.e,
                c4: () => t.Y,
                ck: () => t.ah,
                cx: () => t.j,
                e5: () => t.a8,
                ev: () => t.aN,
                gK: () => t.an,
                gQ: () => t.aj,
                hJ: () => t.U,
                iA: () => t.a4,
                jh: () => t.K,
                k9: () => t.d,
                lI: () => t.R,
                n0: () => t.k,
                oo: () => t.a9,
                p2: () => t.ap,
                qB: () => t.am,
                rh: () => t.c,
                s: () => t.ai,
                sB: () => t._,
                vY: () => t.r,
                w$: () => t.ad,
                w9: () => t.N,
                wU: () => t.aB,
                ww: () => t.m,
                xW: () => t.aD
            });
            var t = i(4733),
                o = i(4444);
            i(2238), i(3333), i(8463);

            function a() {
                return window
            }
            async function s(n, e, i) {
                var o;
                const {
                    BuildInfo: s
                } = a();
                (0, t.ar)(e.sessionId, "AuthEvent did not contain a session ID");
                const r = await async function (n) {
                    const e = function (n) {
                            if ((0, t.ar)(/[0-9a-zA-Z]+/.test(n), "Can only convert alpha-numeric strings"), "undefined" != typeof TextEncoder) return (new TextEncoder).encode(n);
                            const e = new ArrayBuffer(n.length),
                                i = new Uint8Array(e);
                            for (let e = 0; e < n.length; e++) i[e] = n.charCodeAt(e);
                            return i
                        }(n),
                        i = await crypto.subtle.digest("SHA-256", e);
                    return Array.from(new Uint8Array(i)).map((n => n.toString(16).padStart(2, "0"))).join("")
                }(e.sessionId), l = {};
                return (0, t.as)() ? l.ibi = s.packageName : (0, t.at)() ? l.apn = s.packageName : (0, t.au)(n, "operation-not-supported-in-this-environment"), s.displayName && (l.appDisplayName = s.displayName), l.sessionId = r, (0, t.av)(n, i, e.type, void 0, null !== (o = e.eventId) && void 0 !== o ? o : void 0, l)
            }
            const r = 20;
            class l extends t.aA {
                constructor() {
                    super(...arguments), this.passiveListeners = new Set, this.initPromise = new Promise((n => {
                        this.resolveInialized = n
                    }))
                }
                addPassiveListener(n) {
                    this.passiveListeners.add(n)
                }
                removePassiveListener(n) {
                    this.passiveListeners.delete(n)
                }
                resetRedirect() {
                    this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1
                }
                onEvent(n) {
                    return this.resolveInialized(), this.passiveListeners.forEach((e => e(n))), super.onEvent(n)
                }
                async initialized() {
                    await this.initPromise
                }
            }
            async function u(n) {
                const e = await v()._get(p(n));
                return e && await v()._remove(p(n)), e
            }

            function d(n, e) {
                var i, o;
                const a = function (n) {
                    const e = f(n),
                        i = e.link ? decodeURIComponent(e.link) : void 0,
                        t = f(i).link,
                        o = e.deep_link_id ? decodeURIComponent(e.deep_link_id) : void 0;
                    return f(o).link || o || t || i || n
                }(e);
                if (a.includes("/__/auth/callback")) {
                    const e = f(a),
                        s = e.firebaseError ? function (n) {
                            try {
                                return JSON.parse(n)
                            } catch (n) {
                                return null
                            }
                        }(decodeURIComponent(e.firebaseError)) : null,
                        r = null === (o = null === (i = null == s ? void 0 : s.code) || void 0 === i ? void 0 : i.split("auth/")) || void 0 === o ? void 0 : o[1],
                        l = r ? (0, t.ay)(r) : null;
                    return l ? {
                        type: n.type,
                        eventId: n.eventId,
                        tenantId: n.tenantId,
                        error: l,
                        urlResponse: null,
                        sessionId: null,
                        postBody: null
                    } : {
                        type: n.type,
                        eventId: n.eventId,
                        tenantId: n.tenantId,
                        sessionId: n.sessionId,
                        urlResponse: a,
                        postBody: null
                    }
                }
                return null
            }

            function c() {
                const n = [],
                    e = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let i = 0; i < r; i++) {
                    const i = Math.floor(Math.random() * e.length);
                    n.push(e.charAt(i))
                }
                return n.join("")
            }

            function v() {
                return (0, t.aB)(t.b)
            }

            function p(n) {
                return (0, t.aC)("authEvent", n.config.apiKey, n.name)
            }

            function f(n) {
                if (!(null == n ? void 0 : n.includes("?"))) return {};
                const [e, ...i] = n.split("?");
                return (0, o.zd)(i.join("?"))
            }
            const h = class {
                constructor() {
                    this._redirectPersistence = t.a, this._shouldInitProactively = !0, this.eventManagers = new Map, this.originValidationPromises = {}, this._completeRedirectFn = t.aD, this._overrideRedirectResult = t.aE
                }
                async _initialize(n) {
                    const e = n._key();
                    let i = this.eventManagers.get(e);
                    return i || (i = new l(n), this.eventManagers.set(e, i), this.attachCallbackListeners(n, i)), i
                }
                _openPopup(n) {
                    (0, t.au)(n, "operation-not-supported-in-this-environment")
                }
                async _openRedirect(n, e, i, o) {
                    ! function (n) {
                        var e, i, o, s, r, l, u, d, c, v;
                        const p = a();
                        (0, t.az)("function" == typeof (null === (e = null == p ? void 0 : p.universalLinks) || void 0 === e ? void 0 : e.subscribe), n, "invalid-cordova-configuration", {
                            missingPlugin: "cordova-universal-links-plugin-fix"
                        }), (0, t.az)(void 0 !== (null === (i = null == p ? void 0 : p.BuildInfo) || void 0 === i ? void 0 : i.packageName), n, "invalid-cordova-configuration", {
                            missingPlugin: "cordova-plugin-buildInfo"
                        }), (0, t.az)("function" == typeof (null === (r = null === (s = null === (o = null == p ? void 0 : p.cordova) || void 0 === o ? void 0 : o.plugins) || void 0 === s ? void 0 : s.browsertab) || void 0 === r ? void 0 : r.openUrl), n, "invalid-cordova-configuration", {
                            missingPlugin: "cordova-plugin-browsertab"
                        }), (0, t.az)("function" == typeof (null === (d = null === (u = null === (l = null == p ? void 0 : p.cordova) || void 0 === l ? void 0 : l.plugins) || void 0 === u ? void 0 : u.browsertab) || void 0 === d ? void 0 : d.isAvailable), n, "invalid-cordova-configuration", {
                            missingPlugin: "cordova-plugin-browsertab"
                        }), (0, t.az)("function" == typeof (null === (v = null === (c = null == p ? void 0 : p.cordova) || void 0 === c ? void 0 : c.InAppBrowser) || void 0 === v ? void 0 : v.open), n, "invalid-cordova-configuration", {
                            missingPlugin: "cordova-plugin-inappbrowser"
                        })
                    }(n);
                    const r = await this._initialize(n);
                    await r.initialized(), r.resetRedirect(), (0, t.aF)(), await this._originValidation(n);
                    const l = function (n, e, i = null) {
                        return {
                            type: e,
                            eventId: i,
                            urlResponse: null,
                            sessionId: c(),
                            postBody: null,
                            tenantId: n.tenantId,
                            error: (0, t.ay)(n, "no-auth-event")
                        }
                    }(n, i, o);
                    await
                    function (n, e) {
                        return v()._set(p(n), e)
                    }(n, l);
                    const u = await s(n, l, e);
                    return async function (n, e, i) {
                        const {
                            cordova: o
                        } = a();
                        let s = () => {};
                        try {
                            await new Promise(((a, r) => {
                                let l = null;

                                function u() {
                                    var n;
                                    a();
                                    const e = null === (n = o.plugins.browsertab) || void 0 === n ? void 0 : n.close;
                                    "function" == typeof e && e(), "function" == typeof (null == i ? void 0 : i.close) && i.close()
                                }

                                function d() {
                                    l || (l = window.setTimeout((() => {
                                        r((0, t.ay)(n, "redirect-cancelled-by-user"))
                                    }), 2e3))
                                }

                                function c() {
                                    "visible" === (null === document || void 0 === document ? void 0 : document.visibilityState) && d()
                                }
                                e.addPassiveListener(u), document.addEventListener("resume", d, !1), (0, t.at)() && document.addEventListener("visibilitychange", c, !1), s = () => {
                                    e.removePassiveListener(u), document.removeEventListener("resume", d, !1), document.removeEventListener("visibilitychange", c, !1), l && window.clearTimeout(l)
                                }
                            }))
                        } finally {
                            s()
                        }
                    }(n, r, await
                        function (n) {
                            const {
                                cordova: e
                            } = a();
                            return new Promise((i => {
                                e.plugins.browsertab.isAvailable((o => {
                                    let a = null;
                                    o ? e.plugins.browsertab.openUrl(n) : a = e.InAppBrowser.open(n, (0, t.ax)() ? "_blank" : "_system", "location=yes"), i(a)
                                }))
                            }))
                        }(u))
                }
                _isIframeWebStorageSupported(n, e) {
                    throw new Error("Method not implemented.")
                }
                _originValidation(n) {
                    const e = n._key();
                    return this.originValidationPromises[e] || (this.originValidationPromises[e] = async function (n) {
                        const {
                            BuildInfo: e
                        } = a(), i = {};
                        (0, t.as)() ? i.iosBundleId = e.packageName: (0, t.at)() ? i.androidPackageName = e.packageName : (0, t.au)(n, "operation-not-supported-in-this-environment"), await (0, t.aw)(n, i)
                    }(n)), this.originValidationPromises[e]
                }
                attachCallbackListeners(n, e) {
                    const {
                        universalLinks: i,
                        handleOpenURL: t,
                        BuildInfo: o
                    } = a(), s = setTimeout((async () => {
                        await u(n), e.onEvent(m())
                    }), 500), r = async i => {
                        clearTimeout(s);
                        const t = await u(n);
                        let o = null;
                        t && (null == i ? void 0 : i.url) && (o = d(t, i.url)), e.onEvent(o || m())
                    };
                    void 0 !== i && "function" == typeof i.subscribe && i.subscribe(null, r);
                    const l = t,
                        c = `${o.packageName.toLowerCase()}://`;
                    a().handleOpenURL = async n => {
                        if (n.toLowerCase().startsWith(c) && r({
                                url: n
                            }), "function" == typeof l) try {
                            l(n)
                        } catch (n) {
                            console.error(n)
                        }
                    }
                }
            };

            function m() {
                return {
                    type: "unknown",
                    eventId: null,
                    sessionId: null,
                    urlResponse: null,
                    postBody: null,
                    tenantId: null,
                    error: (0, t.ay)("no-auth-event")
                }
            }

            function y(n, e) {
                (0, t.aG)(n)._logFramework(e)
            }
        }
    }
]);
//# sourceMappingURL=commons-main-internal.js.bundle.js.map