/*! For license information please see commons-main-index.esm2017.js.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkNxStreaming = self.webpackChunkNxStreaming || []).push([
    [59], {
        6243: (e, t, n) => {
            var r = n(8180),
                s = n(2727),
                i = n(8463),
                o = n(4444);

            function a() {
                var e;
                return (null === (e = null === self || void 0 === self ? void 0 : self.location) || void 0 === e ? void 0 : e.protocol) || null
            }

            function c(e = (0, o.z$)()) {
                return !("file:" !== a() && "ionic:" !== a() && "capacitor:" !== a() || !e.toLowerCase().match(/iphone|ipad|ipod|android/))
            }

            function u(e = (0, o.z$)()) {
                return (0, o.w1)() && 11 === (null === document || void 0 === document ? void 0 : document.documentMode) || function (e = (0, o.z$)()) {
                    return /Edge\/\d+/.test(e)
                }(e)
            }

            function l() {
                try {
                    const e = self.localStorage,
                        t = s.Oh();
                    if (e) return e.setItem(t, "1"), e.removeItem(t), !u() || (0, o.hl)()
                } catch (e) {
                    return h() && (0, o.hl)()
                }
                return !1
            }

            function h() {
                return void 0 !== n.g && "WorkerGlobalScope" in n.g && "importScripts" in n.g
            }

            function d() {
                return ("http:" === a() || "https:" === a() || (0, o.ru)() || c()) && !((0, o.b$)() || (0, o.UG)()) && l() && !h()
            }

            function f() {
                return c() && "undefined" != typeof document
            }
            const g = {
                    LOCAL: "local",
                    NONE: "none",
                    SESSION: "session"
                },
                m = s.PQ,
                p = "persistence";
            async function y(e) {
                await e._initializationPromise;
                const t = w(),
                    n = s.SE(p, e.config.apiKey, e.name);
                t && t.setItem(n, e._getPersistence())
            }

            function w() {
                var e;
                try {
                    return (null === (e = "undefined" != typeof window ? window : null) || void 0 === e ? void 0 : e.sessionStorage) || null
                } catch (e) {
                    return null
                }
            }
            const v = s.PQ;
            class b {
                constructor() {
                    this.browserResolver = s.wU(s.n0), this.cordovaResolver = s.wU(s.QT), this.underlyingResolver = null, this._redirectPersistence = s.aT, this._completeRedirectFn = s.xW, this._overrideRedirectResult = s.QZ
                }
                async _initialize(e) {
                    return await this.selectUnderlyingResolver(), this.assertedUnderlyingResolver._initialize(e)
                }
                async _openPopup(e, t, n, r) {
                    return await this.selectUnderlyingResolver(), this.assertedUnderlyingResolver._openPopup(e, t, n, r)
                }
                async _openRedirect(e, t, n, r) {
                    return await this.selectUnderlyingResolver(), this.assertedUnderlyingResolver._openRedirect(e, t, n, r)
                }
                _isIframeWebStorageSupported(e, t) {
                    this.assertedUnderlyingResolver._isIframeWebStorageSupported(e, t)
                }
                _originValidation(e) {
                    return this.assertedUnderlyingResolver._originValidation(e)
                }
                get _shouldInitProactively() {
                    return f() || this.browserResolver._shouldInitProactively
                }
                get assertedUnderlyingResolver() {
                    return v(this.underlyingResolver, "internal-error"), this.underlyingResolver
                }
                async selectUnderlyingResolver() {
                    if (this.underlyingResolver) return;
                    const e = await async function () {
                        return !!f() && new Promise((e => {
                            const t = setTimeout((() => {
                                e(!1)
                            }), 1e3);
                            document.addEventListener("deviceready", (() => {
                                clearTimeout(t), e(!0)
                            }))
                        }))
                    }();
                    this.underlyingResolver = e ? this.cordovaResolver : this.browserResolver
                }
            }

            function I(e) {
                return e.unwrap()
            }

            function _(e) {
                const {
                    _tokenResponse: t
                } = e instanceof o.ZR ? e.customData : e;
                if (!t) return null;
                if (!(e instanceof o.ZR) && "temporaryProof" in t && "phoneNumber" in t) return s.RO.credentialFromResult(e);
                const n = t.providerId;
                if (!n || n === s.F7.PASSWORD) return null;
                let r;
                switch (n) {
                    case s.F7.GOOGLE:
                        r = s.hJ;
                        break;
                    case s.F7.FACEBOOK:
                        r = s._O;
                        break;
                    case s.F7.GITHUB:
                        r = s.GH;
                        break;
                    case s.F7.TWITTER:
                        r = s.c4;
                        break;
                    default:
                        const {
                            oauthIdToken: e, oauthAccessToken: i, oauthTokenSecret: o, pendingToken: a, nonce: c
                        } = t;
                        return i || o || e || a ? a ? n.startsWith("saml.") ? s.ev._create(n, a) : s.jh._fromParams({
                            providerId: n,
                            signInMethod: n,
                            pendingToken: a,
                            idToken: e,
                            accessToken: i
                        }) : new s.O4(n).credential({
                            idToken: e,
                            accessToken: i,
                            rawNonce: c
                        }) : null
                }
                return e instanceof o.ZR ? r.credentialFromError(e) : r.credentialFromResult(e)
            }

            function E(e, t) {
                return t.catch((t => {
                    throw t instanceof o.ZR && function (e, t) {
                        var n;
                        const r = null === (n = t.customData) || void 0 === n ? void 0 : n._tokenResponse;
                        if ("auth/multi-factor-auth-required" === (null == t ? void 0 : t.code)) t.resolver = new S(e, s.p2(e, t));
                        else if (r) {
                            const e = _(t),
                                n = t;
                            e && (n.credential = e, n.tenantId = r.tenantId || void 0, n.email = r.email || void 0, n.phoneNumber = r.phoneNumber || void 0)
                        }
                    }(e, t), t
                })).then((e => {
                    const t = e.operationType,
                        n = e.user;
                    return {
                        operationType: t,
                        credential: (r = e, _(r)),
                        additionalUserInfo: s.gK(e),
                        user: D.getOrCreate(n)
                    };
                    var r
                }))
            }
            async function T(e, t) {
                const n = await t;
                return {
                    verificationId: n.verificationId,
                    confirm: t => E(e, n.confirm(t))
                }
            }
            class S {
                constructor(e, t) {
                    this.resolver = t, this.auth = e.wrapped()
                }
                get session() {
                    return this.resolver.session
                }
                get hints() {
                    return this.resolver.hints
                }
                resolveSignIn(e) {
                    return E(I(this.auth), this.resolver.resolveSignIn(e))
                }
            }
            class D {
                constructor(e) {
                    this._delegate = e, this.multiFactor = s.JG(e)
                }
                static getOrCreate(e) {
                    return D.USER_MAP.has(e) || D.USER_MAP.set(e, new D(e)), D.USER_MAP.get(e)
                }
                delete() {
                    return this._delegate.delete()
                }
                reload() {
                    return this._delegate.reload()
                }
                toJSON() {
                    return this._delegate.toJSON()
                }
                getIdTokenResult(e) {
                    return this._delegate.getIdTokenResult(e)
                }
                getIdToken(e) {
                    return this._delegate.getIdToken(e)
                }
                linkAndRetrieveDataWithCredential(e) {
                    return this.linkWithCredential(e)
                }
                async linkWithCredential(e) {
                    return E(this.auth, s.ZJ(this._delegate, e))
                }
                async linkWithPhoneNumber(e, t) {
                    return T(this.auth, s.L6(this._delegate, e, t))
                }
                async linkWithPopup(e) {
                    return E(this.auth, s.k9(this._delegate, e, b))
                }
                async linkWithRedirect(e) {
                    return await y(s.Js(this.auth)), s.WV(this._delegate, e, b)
                }
                reauthenticateAndRetrieveDataWithCredential(e) {
                    return this.reauthenticateWithCredential(e)
                }
                async reauthenticateWithCredential(e) {
                    return E(this.auth, s.aF(this._delegate, e))
                }
                reauthenticateWithPhoneNumber(e, t) {
                    return T(this.auth, s.vY(this._delegate, e, t))
                }
                reauthenticateWithPopup(e) {
                    return E(this.auth, s.bc(this._delegate, e, b))
                }
                async reauthenticateWithRedirect(e) {
                    return await y(s.Js(this.auth)), s.C3(this._delegate, e, b)
                }
                sendEmailVerification(e) {
                    return s.w$(this._delegate, e)
                }
                async unlink(e) {
                    return await s.qB(this._delegate, e), this
                }
                updateEmail(e) {
                    return s.s(this._delegate, e)
                }
                updatePassword(e) {
                    return s.gQ(this._delegate, e)
                }
                updatePhoneNumber(e) {
                    return s.Rv(this._delegate, e)
                }
                updateProfile(e) {
                    return s.ck(this._delegate, e)
                }
                verifyBeforeUpdateEmail(e, t) {
                    return s.Ov(this._delegate, e, t)
                }
                get emailVerified() {
                    return this._delegate.emailVerified
                }
                get isAnonymous() {
                    return this._delegate.isAnonymous
                }
                get metadata() {
                    return this._delegate.metadata
                }
                get phoneNumber() {
                    return this._delegate.phoneNumber
                }
                get providerData() {
                    return this._delegate.providerData
                }
                get refreshToken() {
                    return this._delegate.refreshToken
                }
                get tenantId() {
                    return this._delegate.tenantId
                }
                get displayName() {
                    return this._delegate.displayName
                }
                get email() {
                    return this._delegate.email
                }
                get photoURL() {
                    return this._delegate.photoURL
                }
                get providerId() {
                    return this._delegate.providerId
                }
                get uid() {
                    return this._delegate.uid
                }
                get auth() {
                    return this._delegate.auth
                }
            }
            D.USER_MAP = new WeakMap;
            const C = s.PQ;
            class A {
                constructor(e, t) {
                    if (this.app = e, t.isInitialized()) return this._delegate = t.getImmediate(), void this.linkUnderlyingAuth();
                    const {
                        apiKey: n
                    } = e.options;
                    C(n, "invalid-api-key", {
                        appName: e.name
                    }), C(n, "invalid-api-key", {
                        appName: e.name
                    });
                    const r = "undefined" != typeof window ? b : void 0;
                    this._delegate = t.initialize({
                        options: {
                            persistence: N(n, e.name),
                            popupRedirectResolver: r
                        }
                    }), this._delegate._updateErrorMap(s.H0), this.linkUnderlyingAuth()
                }
                get emulatorConfig() {
                    return this._delegate.emulatorConfig
                }
                get currentUser() {
                    return this._delegate.currentUser ? D.getOrCreate(this._delegate.currentUser) : null
                }
                get languageCode() {
                    return this._delegate.languageCode
                }
                set languageCode(e) {
                    this._delegate.languageCode = e
                }
                get settings() {
                    return this._delegate.settings
                }
                get tenantId() {
                    return this._delegate.tenantId
                }
                set tenantId(e) {
                    this._delegate.tenantId = e
                }
                useDeviceLanguage() {
                    this._delegate.useDeviceLanguage()
                }
                signOut() {
                    return this._delegate.signOut()
                }
                useEmulator(e, t) {
                    s.S$(this._delegate, e, t)
                }
                applyActionCode(e) {
                    return s.iA(this._delegate, e)
                }
                checkActionCode(e) {
                    return s.bX(this._delegate, e)
                }
                confirmPasswordReset(e, t) {
                    return s.LG(this._delegate, e, t)
                }
                async createUserWithEmailAndPassword(e, t) {
                    return E(this._delegate, s.Xb(this._delegate, e, t))
                }
                fetchProvidersForEmail(e) {
                    return this.fetchSignInMethodsForEmail(e)
                }
                fetchSignInMethodsForEmail(e) {
                    return s.Nr(this._delegate, e)
                }
                isSignInWithEmailLink(e) {
                    return s.JB(this._delegate, e)
                }
                async getRedirectResult() {
                    C(d(), this._delegate, "operation-not-supported-in-this-environment");
                    const e = await s.cx(this._delegate, b);
                    return e ? E(this._delegate, Promise.resolve(e)) : {
                        credential: null,
                        user: null
                    }
                }
                addFrameworkForLogging(e) {
                    s.R5(this._delegate, e)
                }
                onAuthStateChanged(e, t, n) {
                    const {
                        next: r,
                        error: s,
                        complete: i
                    } = x(e, t, n);
                    return this._delegate.onAuthStateChanged(r, s, i)
                }
                onIdTokenChanged(e, t, n) {
                    const {
                        next: r,
                        error: s,
                        complete: i
                    } = x(e, t, n);
                    return this._delegate.onIdTokenChanged(r, s, i)
                }
                sendSignInLinkToEmail(e, t) {
                    return s.oo(this._delegate, e, t)
                }
                sendPasswordResetEmail(e, t) {
                    return s.LS(this._delegate, e, t || void 0)
                }
                async setPersistence(e) {
                    let t;
                    switch (function (e, t) {
                        m(Object.values(g).includes(t), e, "invalid-persistence-type"), (0, o.b$)() ? m(t !== g.SESSION, e, "unsupported-persistence-type") : (0, o.UG)() ? m(t === g.NONE, e, "unsupported-persistence-type") : h() ? m(t === g.NONE || t === g.LOCAL && (0, o.hl)(), e, "unsupported-persistence-type") : m(t === g.NONE || l(), e, "unsupported-persistence-type")
                    }(this._delegate, e), e) {
                        case g.SESSION:
                            t = s.aT;
                            break;
                        case g.LOCAL:
                            t = await s.wU(s.AP)._isAvailable() ? s.AP : s.a$;
                            break;
                        case g.NONE:
                            t = s.BV;
                            break;
                        default:
                            return s.Sn("argument-error", {
                                appName: this._delegate.name
                            })
                    }
                    return this._delegate.setPersistence(t)
                }
                signInAndRetrieveDataWithCredential(e) {
                    return this.signInWithCredential(e)
                }
                signInAnonymously() {
                    return E(this._delegate, s.XB(this._delegate))
                }
                signInWithCredential(e) {
                    return E(this._delegate, s.sB(this._delegate, e))
                }
                signInWithCustomToken(e) {
                    return E(this._delegate, s._p(this._delegate, e))
                }
                signInWithEmailAndPassword(e, t) {
                    return E(this._delegate, s.e5(this._delegate, e, t))
                }
                signInWithEmailLink(e, t) {
                    return E(this._delegate, s.P6(this._delegate, e, t))
                }
                signInWithPhoneNumber(e, t) {
                    return T(this._delegate, s.$g(this._delegate, e, t))
                }
                async signInWithPopup(e) {
                    return C(d(), this._delegate, "operation-not-supported-in-this-environment"), E(this._delegate, s.rh(this._delegate, e, b))
                }
                async signInWithRedirect(e) {
                    return C(d(), this._delegate, "operation-not-supported-in-this-environment"), await y(this._delegate), s.F6(this._delegate, e, b)
                }
                updateCurrentUser(e) {
                    return this._delegate.updateCurrentUser(e)
                }
                verifyPasswordResetCode(e) {
                    return s.TX(this._delegate, e)
                }
                unwrap() {
                    return this._delegate
                }
                _delete() {
                    return this._delegate._delete()
                }
                linkUnderlyingAuth() {
                    this._delegate.wrapped = () => this
                }
            }

            function x(e, t, n) {
                let r = e;
                "function" != typeof e && ({
                    next: r,
                    error: t,
                    complete: n
                } = e);
                const s = r;
                return {
                    next: e => s(e && D.getOrCreate(e)),
                    error: t,
                    complete: n
                }
            }

            function N(e, t) {
                const n = function (e, t) {
                    const n = w();
                    if (!n) return [];
                    const r = s.SE(p, e, t);
                    switch (n.getItem(r)) {
                        case g.NONE:
                            return [s.BV];
                        case g.LOCAL:
                            return [s.AP, s.aT];
                        case g.SESSION:
                            return [s.aT];
                        default:
                            return []
                    }
                }(e, t);
                if ("undefined" == typeof self || n.includes(s.AP) || n.push(s.AP), "undefined" != typeof window)
                    for (const e of [s.a$, s.aT]) n.includes(e) || n.push(e);
                return n.includes(s.BV) || n.push(s.BV), n
            }
            A.Persistence = g;
            class k {
                constructor() {
                    this.providerId = "phone", this._delegate = new s.RO(I(r.Z.auth()))
                }
                static credential(e, t) {
                    return s.RO.credential(e, t)
                }
                verifyPhoneNumber(e, t) {
                    return this._delegate.verifyPhoneNumber(e, t)
                }
                unwrap() {
                    return this._delegate
                }
            }
            k.PHONE_SIGN_IN_METHOD = s.RO.PHONE_SIGN_IN_METHOD, k.PROVIDER_ID = s.RO.PROVIDER_ID;
            const R = s.PQ;
            class O {
                constructor(e, t, n = r.Z.app()) {
                    var i;
                    R(null === (i = n.options) || void 0 === i ? void 0 : i.apiKey, "invalid-api-key", {
                        appName: n.name
                    }), this._delegate = new s.lI(e, t, n.auth()), this.type = this._delegate.type
                }
                clear() {
                    this._delegate.clear()
                }
                render() {
                    return this._delegate.render()
                }
                verify() {
                    return this._delegate.verify()
                }
            }
            var L;
            (L = r.Z).INTERNAL.registerComponent(new i.wA("auth-compat", (e => {
                const t = e.getProvider("app-compat").getImmediate(),
                    n = e.getProvider("auth");
                return new A(t, n)
            }), "PUBLIC").setServiceProps({
                ActionCodeInfo: {
                    Operation: {
                        EMAIL_SIGNIN: s.Bs.EMAIL_SIGNIN,
                        PASSWORD_RESET: s.Bs.PASSWORD_RESET,
                        RECOVER_EMAIL: s.Bs.RECOVER_EMAIL,
                        REVERT_SECOND_FACTOR_ADDITION: s.Bs.REVERT_SECOND_FACTOR_ADDITION,
                        VERIFY_AND_CHANGE_EMAIL: s.Bs.VERIFY_AND_CHANGE_EMAIL,
                        VERIFY_EMAIL: s.Bs.VERIFY_EMAIL
                    }
                },
                EmailAuthProvider: s.w9,
                FacebookAuthProvider: s._O,
                GithubAuthProvider: s.GH,
                GoogleAuthProvider: s.hJ,
                OAuthProvider: s.O4,
                SAMLAuthProvider: s.VE,
                PhoneAuthProvider: k,
                PhoneMultiFactorGenerator: s.ww,
                RecaptchaVerifier: O,
                TwitterAuthProvider: s.c4,
                Auth: A,
                AuthCredential: s.A$,
                Error: o.ZR
            }).setInstantiationMode("LAZY").setMultipleInstances(!1)), L.registerVersion("@firebase/auth-compat", "0.3.7")
        },
        7816: (e, t, n) => {
            var r, s = n(8180),
                i = n(2238),
                o = n(8463),
                a = n(3333),
                c = n(4444),
                u = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {},
                l = {},
                h = h || {},
                d = u || self;

            function f() {}

            function g(e) {
                var t = typeof e;
                return "array" == (t = "object" != t ? t : e ? Array.isArray(e) ? "array" : t : "null") || "object" == t && "number" == typeof e.length
            }

            function m(e) {
                var t = typeof e;
                return "object" == t && null != e || "function" == t
            }
            var p = "closure_uid_" + (1e9 * Math.random() >>> 0),
                y = 0;

            function w(e, t, n) {
                return e.call.apply(e.bind, arguments)
            }

            function v(e, t, n) {
                if (!e) throw Error();
                if (2 < arguments.length) {
                    var r = Array.prototype.slice.call(arguments, 2);
                    return function () {
                        var n = Array.prototype.slice.call(arguments);
                        return Array.prototype.unshift.apply(n, r), e.apply(t, n)
                    }
                }
                return function () {
                    return e.apply(t, arguments)
                }
            }

            function b(e, t, n) {
                return (b = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? w : v).apply(null, arguments)
            }

            function I(e, t) {
                var n = Array.prototype.slice.call(arguments, 1);
                return function () {
                    var t = n.slice();
                    return t.push.apply(t, arguments), e.apply(this, t)
                }
            }

            function _(e, t) {
                function n() {}
                n.prototype = t.prototype, e.X = t.prototype, e.prototype = new n, e.prototype.constructor = e, e.Wb = function (e, n, r) {
                    for (var s = Array(arguments.length - 2), i = 2; i < arguments.length; i++) s[i - 2] = arguments[i];
                    return t.prototype[n].apply(e, s)
                }
            }

            function E() {
                this.s = this.s, this.o = this.o
            }
            E.prototype.s = !1, E.prototype.na = function () {
                var e;
                !this.s && (this.s = !0, this.M(), 0) && (e = this, Object.prototype.hasOwnProperty.call(e, p) && e[p] || (e[p] = ++y))
            }, E.prototype.M = function () {
                if (this.o)
                    for (; this.o.length;) this.o.shift()()
            };
            const T = Array.prototype.indexOf ? function (e, t) {
                return Array.prototype.indexOf.call(e, t, void 0)
            } : function (e, t) {
                if ("string" == typeof e) return "string" != typeof t || 1 != t.length ? -1 : e.indexOf(t, 0);
                for (let n = 0; n < e.length; n++)
                    if (n in e && e[n] === t) return n;
                return -1
            };

            function S(e) {
                const t = e.length;
                if (0 < t) {
                    const n = Array(t);
                    for (let r = 0; r < t; r++) n[r] = e[r];
                    return n
                }
                return []
            }

            function D(e, t) {
                for (let t = 1; t < arguments.length; t++) {
                    const n = arguments[t];
                    if (g(n)) {
                        const t = e.length || 0,
                            r = n.length || 0;
                        e.length = t + r;
                        for (let s = 0; s < r; s++) e[t + s] = n[s]
                    } else e.push(n)
                }
            }

            function C(e, t) {
                this.type = e, this.g = this.target = t, this.defaultPrevented = !1
            }
            C.prototype.h = function () {
                this.defaultPrevented = !0
            };
            var A = function () {
                if (!d.addEventListener || !Object.defineProperty) return !1;
                var e = !1,
                    t = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0
                        }
                    });
                try {
                    d.addEventListener("test", f, t), d.removeEventListener("test", f, t)
                } catch (e) {}
                return e
            }();

            function x(e) {
                return /^[\s\xa0]*$/.test(e)
            }
            var N = String.prototype.trim ? function (e) {
                return e.trim()
            } : function (e) {
                return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]
            };

            function k(e, t) {
                return e < t ? -1 : e > t ? 1 : 0
            }

            function R() {
                var e = d.navigator;
                return e && (e = e.userAgent) ? e : ""
            }

            function O(e) {
                return -1 != R().indexOf(e)
            }

            function L(e) {
                return L[" "](e), e
            }
            L[" "] = f;
            var M, P, F = O("Opera"),
                V = O("Trident") || O("MSIE"),
                U = O("Edge"),
                B = U || V,
                q = O("Gecko") && !(-1 != R().toLowerCase().indexOf("webkit") && !O("Edge")) && !(O("Trident") || O("MSIE")) && !O("Edge"),
                $ = -1 != R().toLowerCase().indexOf("webkit") && !O("Edge");

            function z() {
                var e = d.document;
                return e ? e.documentMode : void 0
            }
            e: {
                var j = "",
                    G = (P = R(), q ? /rv:([^\);]+)(\)|;)/.exec(P) : U ? /Edge\/([\d\.]+)/.exec(P) : V ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(P) : $ ? /WebKit\/(\S+)/.exec(P) : F ? /(?:Version)[ \/]?(\S+)/.exec(P) : void 0);
                if (G && (j = G ? G[1] : ""), V) {
                    var K = z();
                    if (null != K && K > parseFloat(j)) {
                        M = String(K);
                        break e
                    }
                }
                M = j
            }
            var Q, W = {};

            function H() {
                return function (e) {
                    var t = W;
                    return Object.prototype.hasOwnProperty.call(t, 9) ? t[9] : t[9] = e(9)
                }((function () {
                    let e = 0;
                    const t = N(String(M)).split("."),
                        n = N("9").split("."),
                        r = Math.max(t.length, n.length);
                    for (let o = 0; 0 == e && o < r; o++) {
                        var s = t[o] || "",
                            i = n[o] || "";
                        do {
                            if (s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""], i = /(\d*)(\D*)(.*)/.exec(i) || ["", "", "", ""], 0 == s[0].length && 0 == i[0].length) break;
                            e = k(0 == s[1].length ? 0 : parseInt(s[1], 10), 0 == i[1].length ? 0 : parseInt(i[1], 10)) || k(0 == s[2].length, 0 == i[2].length) || k(s[2], i[2]), s = s[3], i = i[3]
                        } while (0 == e)
                    }
                    return 0 <= e
                }))
            }
            if (d.document && V) {
                var Y = z();
                Q = Y || (parseInt(M, 10) || void 0)
            } else Q = void 0;
            var X = Q;

            function J(e, t) {
                if (C.call(this, e ? e.type : ""), this.relatedTarget = this.g = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.state = null, this.pointerId = 0, this.pointerType = "", this.i = null, e) {
                    var n = this.type = e.type,
                        r = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : null;
                    if (this.target = e.target || e.srcElement, this.g = t, t = e.relatedTarget) {
                        if (q) {
                            e: {
                                try {
                                    L(t.nodeName);
                                    var s = !0;
                                    break e
                                } catch (e) {}
                                s = !1
                            }
                            s || (t = null)
                        }
                    } else "mouseover" == n ? t = e.fromElement : "mouseout" == n && (t = e.toElement);
                    this.relatedTarget = t, r ? (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX, this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY, this.screenX = r.screenX || 0, this.screenY = r.screenY || 0) : (this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 0), this.button = e.button, this.key = e.key || "", this.ctrlKey = e.ctrlKey, this.altKey = e.altKey, this.shiftKey = e.shiftKey, this.metaKey = e.metaKey, this.pointerId = e.pointerId || 0, this.pointerType = "string" == typeof e.pointerType ? e.pointerType : Z[e.pointerType] || "", this.state = e.state, this.i = e, e.defaultPrevented && J.X.h.call(this)
                }
            }
            _(J, C);
            var Z = {
                2: "touch",
                3: "pen",
                4: "mouse"
            };
            J.prototype.h = function () {
                J.X.h.call(this);
                var e = this.i;
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            };
            var ee = "closure_listenable_" + (1e6 * Math.random() | 0),
                te = 0;

            function ne(e, t, n, r, s) {
                this.listener = e, this.proxy = null, this.src = t, this.type = n, this.capture = !!r, this.ha = s, this.key = ++te, this.ba = this.ea = !1
            }

            function re(e) {
                e.ba = !0, e.listener = null, e.proxy = null, e.src = null, e.ha = null
            }

            function se(e, t, n) {
                for (const r in e) t.call(n, e[r], r, e)
            }

            function ie(e) {
                const t = {};
                for (const n in e) t[n] = e[n];
                return t
            }
            const oe = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

            function ae(e, t) {
                let n, r;
                for (let t = 1; t < arguments.length; t++) {
                    for (n in r = arguments[t], r) e[n] = r[n];
                    for (let t = 0; t < oe.length; t++) n = oe[t], Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
            }

            function ce(e) {
                this.src = e, this.g = {}, this.h = 0
            }

            function ue(e, t) {
                var n = t.type;
                if (n in e.g) {
                    var r, s = e.g[n],
                        i = T(s, t);
                    (r = 0 <= i) && Array.prototype.splice.call(s, i, 1), r && (re(t), 0 == e.g[n].length && (delete e.g[n], e.h--))
                }
            }

            function le(e, t, n, r) {
                for (var s = 0; s < e.length; ++s) {
                    var i = e[s];
                    if (!i.ba && i.listener == t && i.capture == !!n && i.ha == r) return s
                }
                return -1
            }
            ce.prototype.add = function (e, t, n, r, s) {
                var i = e.toString();
                (e = this.g[i]) || (e = this.g[i] = [], this.h++);
                var o = le(e, t, r, s);
                return -1 < o ? (t = e[o], n || (t.ea = !1)) : ((t = new ne(t, this.src, i, !!r, s)).ea = n, e.push(t)), t
            };
            var he = "closure_lm_" + (1e6 * Math.random() | 0),
                de = {};

            function fe(e, t, n, r, s) {
                if (r && r.once) return me(e, t, n, r, s);
                if (Array.isArray(t)) {
                    for (var i = 0; i < t.length; i++) fe(e, t[i], n, r, s);
                    return null
                }
                return n = _e(n), e && e[ee] ? e.N(t, n, m(r) ? !!r.capture : !!r, s) : ge(e, t, n, !1, r, s)
            }

            function ge(e, t, n, r, s, i) {
                if (!t) throw Error("Invalid event type");
                var o = m(s) ? !!s.capture : !!s,
                    a = be(e);
                if (a || (e[he] = a = new ce(e)), (n = a.add(t, n, r, o, i)).proxy) return n;
                if (r = function () {
                        function e(n) {
                            return t.call(e.src, e.listener, n)
                        }
                        const t = ve;
                        return e
                    }(), n.proxy = r, r.src = e, r.listener = n, e.addEventListener) A || (s = o), void 0 === s && (s = !1), e.addEventListener(t.toString(), r, s);
                else if (e.attachEvent) e.attachEvent(we(t.toString()), r);
                else {
                    if (!e.addListener || !e.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
                    e.addListener(r)
                }
                return n
            }

            function me(e, t, n, r, s) {
                if (Array.isArray(t)) {
                    for (var i = 0; i < t.length; i++) me(e, t[i], n, r, s);
                    return null
                }
                return n = _e(n), e && e[ee] ? e.O(t, n, m(r) ? !!r.capture : !!r, s) : ge(e, t, n, !0, r, s)
            }

            function pe(e, t, n, r, s) {
                if (Array.isArray(t))
                    for (var i = 0; i < t.length; i++) pe(e, t[i], n, r, s);
                else r = m(r) ? !!r.capture : !!r, n = _e(n), e && e[ee] ? (e = e.i, (t = String(t).toString()) in e.g && (-1 < (n = le(i = e.g[t], n, r, s)) && (re(i[n]), Array.prototype.splice.call(i, n, 1), 0 == i.length && (delete e.g[t], e.h--)))) : e && (e = be(e)) && (t = e.g[t.toString()], e = -1, t && (e = le(t, n, r, s)), (n = -1 < e ? t[e] : null) && ye(n))
            }

            function ye(e) {
                if ("number" != typeof e && e && !e.ba) {
                    var t = e.src;
                    if (t && t[ee]) ue(t.i, e);
                    else {
                        var n = e.type,
                            r = e.proxy;
                        t.removeEventListener ? t.removeEventListener(n, r, e.capture) : t.detachEvent ? t.detachEvent(we(n), r) : t.addListener && t.removeListener && t.removeListener(r), (n = be(t)) ? (ue(n, e), 0 == n.h && (n.src = null, t[he] = null)) : re(e)
                    }
                }
            }

            function we(e) {
                return e in de ? de[e] : de[e] = "on" + e
            }

            function ve(e, t) {
                if (e.ba) e = !0;
                else {
                    t = new J(t, this);
                    var n = e.listener,
                        r = e.ha || e.src;
                    e.ea && ye(e), e = n.call(r, t)
                }
                return e
            }

            function be(e) {
                return (e = e[he]) instanceof ce ? e : null
            }
            var Ie = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

            function _e(e) {
                return "function" == typeof e ? e : (e[Ie] || (e[Ie] = function (t) {
                    return e.handleEvent(t)
                }), e[Ie])
            }

            function Ee() {
                E.call(this), this.i = new ce(this), this.P = this, this.I = null
            }

            function Te(e, t) {
                var n, r = e.I;
                if (r)
                    for (n = []; r; r = r.I) n.push(r);
                if (e = e.P, r = t.type || t, "string" == typeof t) t = new C(t, e);
                else if (t instanceof C) t.target = t.target || e;
                else {
                    var s = t;
                    ae(t = new C(r, e), s)
                }
                if (s = !0, n)
                    for (var i = n.length - 1; 0 <= i; i--) {
                        var o = t.g = n[i];
                        s = Se(o, r, !0, t) && s
                    }
                if (s = Se(o = t.g = e, r, !0, t) && s, s = Se(o, r, !1, t) && s, n)
                    for (i = 0; i < n.length; i++) s = Se(o = t.g = n[i], r, !1, t) && s
            }

            function Se(e, t, n, r) {
                if (!(t = e.i.g[String(t)])) return !0;
                t = t.concat();
                for (var s = !0, i = 0; i < t.length; ++i) {
                    var o = t[i];
                    if (o && !o.ba && o.capture == n) {
                        var a = o.listener,
                            c = o.ha || o.src;
                        o.ea && ue(e.i, o), s = !1 !== a.call(c, r) && s
                    }
                }
                return s && !r.defaultPrevented
            }
            _(Ee, E), Ee.prototype[ee] = !0, Ee.prototype.removeEventListener = function (e, t, n, r) {
                pe(this, e, t, n, r)
            }, Ee.prototype.M = function () {
                if (Ee.X.M.call(this), this.i) {
                    var e, t = this.i;
                    for (e in t.g) {
                        for (var n = t.g[e], r = 0; r < n.length; r++) re(n[r]);
                        delete t.g[e], t.h--
                    }
                }
                this.I = null
            }, Ee.prototype.N = function (e, t, n, r) {
                return this.i.add(String(e), t, !1, n, r)
            }, Ee.prototype.O = function (e, t, n, r) {
                return this.i.add(String(e), t, !0, n, r)
            };
            var De = d.JSON.stringify;

            function Ce() {
                var e = Le;
                let t = null;
                return e.g && (t = e.g, e.g = e.g.next, e.g || (e.h = null), t.next = null), t
            }
            var Ae, xe = new class {
                constructor(e, t) {
                    this.i = e, this.j = t, this.h = 0, this.g = null
                }
                get() {
                    let e;
                    return 0 < this.h ? (this.h--, e = this.g, this.g = e.next, e.next = null) : e = this.i(), e
                }
            }((() => new Ne), (e => e.reset()));
            class Ne {
                constructor() {
                    this.next = this.g = this.h = null
                }
                set(e, t) {
                    this.h = e, this.g = t, this.next = null
                }
                reset() {
                    this.next = this.g = this.h = null
                }
            }

            function ke(e) {
                d.setTimeout((() => {
                    throw e
                }), 0)
            }

            function Re(e, t) {
                Ae || function () {
                    var e = d.Promise.resolve(void 0);
                    Ae = function () {
                        e.then(Me)
                    }
                }(), Oe || (Ae(), Oe = !0), Le.add(e, t)
            }
            var Oe = !1,
                Le = new class {
                    constructor() {
                        this.h = this.g = null
                    }
                    add(e, t) {
                        const n = xe.get();
                        n.set(e, t), this.h ? this.h.next = n : this.g = n, this.h = n
                    }
                };

            function Me() {
                for (var e; e = Ce();) {
                    try {
                        e.h.call(e.g)
                    } catch (e) {
                        ke(e)
                    }
                    var t = xe;
                    t.j(e), 100 > t.h && (t.h++, e.next = t.g, t.g = e)
                }
                Oe = !1
            }

            function Pe(e, t) {
                Ee.call(this), this.h = e || 1, this.g = t || d, this.j = b(this.lb, this), this.l = Date.now()
            }

            function Fe(e) {
                e.ca = !1, e.R && (e.g.clearTimeout(e.R), e.R = null)
            }

            function Ve(e, t, n) {
                if ("function" == typeof e) n && (e = b(e, n));
                else {
                    if (!e || "function" != typeof e.handleEvent) throw Error("Invalid listener argument");
                    e = b(e.handleEvent, e)
                }
                return 2147483647 < Number(t) ? -1 : d.setTimeout(e, t || 0)
            }

            function Ue(e) {
                e.g = Ve((() => {
                    e.g = null, e.i && (e.i = !1, Ue(e))
                }), e.j);
                const t = e.h;
                e.h = null, e.m.apply(null, t)
            }
            _(Pe, Ee), (r = Pe.prototype).ca = !1, r.R = null, r.lb = function () {
                if (this.ca) {
                    var e = Date.now() - this.l;
                    0 < e && e < .8 * this.h ? this.R = this.g.setTimeout(this.j, this.h - e) : (this.R && (this.g.clearTimeout(this.R), this.R = null), Te(this, "tick"), this.ca && (Fe(this), this.start()))
                }
            }, r.start = function () {
                this.ca = !0, this.R || (this.R = this.g.setTimeout(this.j, this.h), this.l = Date.now())
            }, r.M = function () {
                Pe.X.M.call(this), Fe(this), delete this.g
            };
            class Be extends E {
                constructor(e, t) {
                    super(), this.m = e, this.j = t, this.h = null, this.i = !1, this.g = null
                }
                l(e) {
                    this.h = arguments, this.g ? this.i = !0 : Ue(this)
                }
                M() {
                    super.M(), this.g && (d.clearTimeout(this.g), this.g = null, this.i = !1, this.h = null)
                }
            }

            function qe(e) {
                E.call(this), this.h = e, this.g = {}
            }
            _(qe, E);
            var $e = [];

            function ze(e, t, n, r) {
                Array.isArray(n) || (n && ($e[0] = n.toString()), n = $e);
                for (var s = 0; s < n.length; s++) {
                    var i = fe(t, n[s], r || e.handleEvent, !1, e.h || e);
                    if (!i) break;
                    e.g[i.key] = i
                }
            }

            function je(e) {
                se(e.g, (function (e, t) {
                    this.g.hasOwnProperty(t) && ye(e)
                }), e), e.g = {}
            }

            function Ge() {
                this.g = !0
            }

            function Ke(e, t, n, r) {
                e.info((function () {
                    return "XMLHTTP TEXT (" + t + "): " + function (e, t) {
                        if (!e.g) return t;
                        if (!t) return null;
                        try {
                            var n = JSON.parse(t);
                            if (n)
                                for (e = 0; e < n.length; e++)
                                    if (Array.isArray(n[e])) {
                                        var r = n[e];
                                        if (!(2 > r.length)) {
                                            var s = r[1];
                                            if (Array.isArray(s) && !(1 > s.length)) {
                                                var i = s[0];
                                                if ("noop" != i && "stop" != i && "close" != i)
                                                    for (var o = 1; o < s.length; o++) s[o] = ""
                                            }
                                        }
                                    } return De(n)
                        } catch (e) {
                            return t
                        }
                    }(e, n) + (r ? " " + r : "")
                }))
            }
            qe.prototype.M = function () {
                qe.X.M.call(this), je(this)
            }, qe.prototype.handleEvent = function () {
                throw Error("EventHandler.handleEvent not implemented")
            }, Ge.prototype.Aa = function () {
                this.g = !1
            }, Ge.prototype.info = function () {};
            var Qe = {},
                We = null;

            function He() {
                return We = We || new Ee
            }

            function Ye(e) {
                C.call(this, Qe.Pa, e)
            }

            function Xe(e) {
                const t = He();
                Te(t, new Ye(t))
            }

            function Je(e, t) {
                C.call(this, Qe.STAT_EVENT, e), this.stat = t
            }

            function Ze(e) {
                const t = He();
                Te(t, new Je(t, e))
            }

            function et(e, t) {
                C.call(this, Qe.Qa, e), this.size = t
            }

            function tt(e, t) {
                if ("function" != typeof e) throw Error("Fn must not be null and must be a function");
                return d.setTimeout((function () {
                    e()
                }), t)
            }
            Qe.Pa = "serverreachability", _(Ye, C), Qe.STAT_EVENT = "statevent", _(Je, C), Qe.Qa = "timingevent", _(et, C);
            var nt = {
                    NO_ERROR: 0,
                    mb: 1,
                    zb: 2,
                    yb: 3,
                    tb: 4,
                    xb: 5,
                    Ab: 6,
                    Ma: 7,
                    TIMEOUT: 8,
                    Db: 9
                },
                rt = {
                    rb: "complete",
                    Nb: "success",
                    Na: "error",
                    Ma: "abort",
                    Fb: "ready",
                    Gb: "readystatechange",
                    TIMEOUT: "timeout",
                    Bb: "incrementaldata",
                    Eb: "progress",
                    ub: "downloadprogress",
                    Vb: "uploadprogress"
                };

            function st() {}

            function it(e) {
                return e.h || (e.h = e.i())
            }

            function ot() {}
            st.prototype.h = null;
            var at, ct = {
                OPEN: "a",
                qb: "b",
                Na: "c",
                Cb: "d"
            };

            function ut() {
                C.call(this, "d")
            }

            function lt() {
                C.call(this, "c")
            }

            function ht() {}

            function dt(e, t, n, r) {
                this.l = e, this.j = t, this.m = n, this.U = r || 1, this.S = new qe(this), this.O = gt, e = B ? 125 : void 0, this.T = new Pe(e), this.H = null, this.i = !1, this.s = this.A = this.v = this.K = this.F = this.V = this.B = null, this.D = [], this.g = null, this.C = 0, this.o = this.u = null, this.Y = -1, this.I = !1, this.N = 0, this.L = null, this.$ = this.J = this.Z = this.P = !1, this.h = new ft
            }

            function ft() {
                this.i = null, this.g = "", this.h = !1
            }
            _(ut, C), _(lt, C), _(ht, st), ht.prototype.g = function () {
                return new XMLHttpRequest
            }, ht.prototype.i = function () {
                return {}
            }, at = new ht;
            var gt = 45e3,
                mt = {},
                pt = {};

            function yt(e, t, n) {
                e.K = 1, e.v = Pt(kt(t)), e.s = n, e.P = !0, wt(e, null)
            }

            function wt(e, t) {
                e.F = Date.now(), _t(e), e.A = kt(e.v);
                var n = e.A,
                    r = e.U;
                Array.isArray(r) || (r = [String(r)]), Ht(n.i, "t", r), e.C = 0, n = e.l.H, e.h = new ft, e.g = Hn(e.l, n ? t : null, !e.s), 0 < e.N && (e.L = new Be(b(e.La, e, e.g), e.N)), ze(e.S, e.g, "readystatechange", e.ib), t = e.H ? ie(e.H) : {}, e.s ? (e.u || (e.u = "POST"), t["Content-Type"] = "application/x-www-form-urlencoded", e.g.da(e.A, e.u, e.s, t)) : (e.u = "GET", e.g.da(e.A, e.u, null, t)), Xe(),
                    function (e, t, n, r, s, i) {
                        e.info((function () {
                            if (e.g)
                                if (i)
                                    for (var o = "", a = i.split("&"), c = 0; c < a.length; c++) {
                                        var u = a[c].split("=");
                                        if (1 < u.length) {
                                            var l = u[0];
                                            u = u[1];
                                            var h = l.split("_");
                                            o = 2 <= h.length && "type" == h[1] ? o + (l + "=") + u + "&" : o + (l + "=redacted&")
                                        }
                                    } else o = null;
                                else o = i;
                            return "XMLHTTP REQ (" + r + ") [attempt " + s + "]: " + t + "\n" + n + "\n" + o
                        }))
                    }(e.j, e.u, e.A, e.m, e.U, e.s)
            }

            function vt(e) {
                return !!e.g && ("GET" == e.u && 2 != e.K && e.l.Da)
            }

            function bt(e, t, n) {
                let r, s = !0;
                for (; !e.I && e.C < n.length;) {
                    if (r = It(e, n), r == pt) {
                        4 == t && (e.o = 4, Ze(14), s = !1), Ke(e.j, e.m, null, "[Incomplete Response]");
                        break
                    }
                    if (r == mt) {
                        e.o = 4, Ze(15), Ke(e.j, e.m, n, "[Invalid Chunk]"), s = !1;
                        break
                    }
                    Ke(e.j, e.m, r, null), Ct(e, r)
                }
                vt(e) && r != pt && r != mt && (e.h.g = "", e.C = 0), 4 != t || 0 != n.length || e.h.h || (e.o = 1, Ze(16), s = !1), e.i = e.i && s, s ? 0 < n.length && !e.$ && (e.$ = !0, (t = e.l).g == e && t.$ && !t.K && (t.j.info("Great, no buffering proxy detected. Bytes received: " + n.length), qn(t), t.K = !0, Ze(11))) : (Ke(e.j, e.m, n, "[Invalid Chunked Response]"), Dt(e), St(e))
            }

            function It(e, t) {
                var n = e.C,
                    r = t.indexOf("\n", n);
                return -1 == r ? pt : (n = Number(t.substring(n, r)), isNaN(n) ? mt : (r += 1) + n > t.length ? pt : (t = t.substr(r, n), e.C = r + n, t))
            }

            function _t(e) {
                e.V = Date.now() + e.O, Et(e, e.O)
            }

            function Et(e, t) {
                if (null != e.B) throw Error("WatchDog timer not null");
                e.B = tt(b(e.gb, e), t)
            }

            function Tt(e) {
                e.B && (d.clearTimeout(e.B), e.B = null)
            }

            function St(e) {
                0 == e.l.G || e.I || jn(e.l, e)
            }

            function Dt(e) {
                Tt(e);
                var t = e.L;
                t && "function" == typeof t.na && t.na(), e.L = null, Fe(e.T), je(e.S), e.g && (t = e.g, e.g = null, t.abort(), t.na())
            }

            function Ct(e, t) {
                try {
                    var n = e.l;
                    if (0 != n.G && (n.g == e || tn(n.h, e)))
                        if (!e.J && tn(n.h, e) && 3 == n.G) {
                            try {
                                var r = n.Fa.g.parse(t)
                            } catch (e) {
                                r = null
                            }
                            if (Array.isArray(r) && 3 == r.length) {
                                var s = r;
                                if (0 == s[0]) {
                                    e: if (!n.u) {
                                        if (n.g) {
                                            if (!(n.g.F + 3e3 < e.F)) break e;
                                            zn(n), On(n)
                                        }
                                        Bn(n), Ze(18)
                                    }
                                }
                                else n.Ba = s[1], 0 < n.Ba - n.T && 37500 > s[2] && n.L && 0 == n.A && !n.v && (n.v = tt(b(n.cb, n), 6e3));
                                if (1 >= en(n.h) && n.ja) {
                                    try {
                                        n.ja()
                                    } catch (e) {}
                                    n.ja = void 0
                                }
                            } else Kn(n, 11)
                        } else if ((e.J || n.g == e) && zn(n), !x(t))
                        for (s = n.Fa.g.parse(t), t = 0; t < s.length; t++) {
                            let u = s[t];
                            if (n.T = u[0], u = u[1], 2 == n.G)
                                if ("c" == u[0]) {
                                    n.I = u[1], n.ka = u[2];
                                    const t = u[3];
                                    null != t && (n.ma = t, n.j.info("VER=" + n.ma));
                                    const s = u[4];
                                    null != s && (n.Ca = s, n.j.info("SVER=" + n.Ca));
                                    const l = u[5];
                                    null != l && "number" == typeof l && 0 < l && (r = 1.5 * l, n.J = r, n.j.info("backChannelRequestTimeoutMs_=" + r)), r = n;
                                    const h = e.g;
                                    if (h) {
                                        const e = h.g ? h.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                                        if (e) {
                                            var i = r.h;
                                            i.g || -1 == e.indexOf("spdy") && -1 == e.indexOf("quic") && -1 == e.indexOf("h2") || (i.j = i.l, i.g = new Set, i.h && (nn(i, i.h), i.h = null))
                                        }
                                        if (r.D) {
                                            const e = h.g ? h.g.getResponseHeader("X-HTTP-Session-Id") : null;
                                            e && (r.za = e, Mt(r.F, r.D, e))
                                        }
                                    }
                                    n.G = 3, n.l && n.l.xa(), n.$ && (n.P = Date.now() - e.F, n.j.info("Handshake RTT: " + n.P + "ms"));
                                    var o = e;
                                    if ((r = n).sa = Wn(r, r.H ? r.ka : null, r.V), o.J) {
                                        rn(r.h, o);
                                        var a = o,
                                            c = r.J;
                                        c && a.setTimeout(c), a.B && (Tt(a), _t(a)), r.g = o
                                    } else Un(r);
                                    0 < n.i.length && Mn(n)
                                } else "stop" != u[0] && "close" != u[0] || Kn(n, 7);
                            else 3 == n.G && ("stop" == u[0] || "close" == u[0] ? "stop" == u[0] ? Kn(n, 7) : Rn(n) : "noop" != u[0] && n.l && n.l.wa(u), n.A = 0)
                        }
                    Xe()
                } catch (e) {}
            }

            function At(e, t) {
                if (e.forEach && "function" == typeof e.forEach) e.forEach(t, void 0);
                else if (g(e) || "string" == typeof e) Array.prototype.forEach.call(e, t, void 0);
                else
                    for (var n = function (e) {
                            if (e.oa && "function" == typeof e.oa) return e.oa();
                            if (!e.W || "function" != typeof e.W) {
                                if ("undefined" != typeof Map && e instanceof Map) return Array.from(e.keys());
                                if (!("undefined" != typeof Set && e instanceof Set)) {
                                    if (g(e) || "string" == typeof e) {
                                        var t = [];
                                        e = e.length;
                                        for (var n = 0; n < e; n++) t.push(n);
                                        return t
                                    }
                                    t = [], n = 0;
                                    for (const r in e) t[n++] = r;
                                    return t
                                }
                            }
                        }(e), r = function (e) {
                            if (e.W && "function" == typeof e.W) return e.W();
                            if ("undefined" != typeof Map && e instanceof Map || "undefined" != typeof Set && e instanceof Set) return Array.from(e.values());
                            if ("string" == typeof e) return e.split("");
                            if (g(e)) {
                                for (var t = [], n = e.length, r = 0; r < n; r++) t.push(e[r]);
                                return t
                            }
                            for (r in t = [], n = 0, e) t[n++] = e[r];
                            return t
                        }(e), s = r.length, i = 0; i < s; i++) t.call(void 0, r[i], n && n[i], e)
            }(r = dt.prototype).setTimeout = function (e) {
                this.O = e
            }, r.ib = function (e) {
                e = e.target;
                const t = this.L;
                t && 3 == Dn(e) ? t.l() : this.La(e)
            }, r.La = function (e) {
                try {
                    if (e == this.g) e: {
                        const l = Dn(this.g);
                        var t = this.g.Ea();this.g.aa();
                        if (!(3 > l) && (3 != l || B || this.g && (this.h.h || this.g.fa() || Cn(this.g)))) {
                            this.I || 4 != l || 7 == t || Xe(), Tt(this);
                            var n = this.g.aa();
                            this.Y = n;
                            t: if (vt(this)) {
                                var r = Cn(this.g);
                                e = "";
                                var s = r.length,
                                    i = 4 == Dn(this.g);
                                if (!this.h.i) {
                                    if ("undefined" == typeof TextDecoder) {
                                        Dt(this), St(this);
                                        var o = "";
                                        break t
                                    }
                                    this.h.i = new d.TextDecoder
                                }
                                for (t = 0; t < s; t++) this.h.h = !0, e += this.h.i.decode(r[t], {
                                    stream: i && t == s - 1
                                });
                                r.splice(0, s), this.h.g += e, this.C = 0, o = this.h.g
                            } else o = this.g.fa();
                            if (this.i = 200 == n, function (e, t, n, r, s, i, o) {
                                    e.info((function () {
                                        return "XMLHTTP RESP (" + r + ") [ attempt " + s + "]: " + t + "\n" + n + "\n" + i + " " + o
                                    }))
                                }(this.j, this.u, this.A, this.m, this.U, l, n), this.i) {
                                if (this.Z && !this.J) {
                                    t: {
                                        if (this.g) {
                                            var a, c = this.g;
                                            if ((a = c.g ? c.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !x(a)) {
                                                var u = a;
                                                break t
                                            }
                                        }
                                        u = null
                                    }
                                    if (!(n = u)) {
                                        this.i = !1, this.o = 3, Ze(12), Dt(this), St(this);
                                        break e
                                    }
                                    Ke(this.j, this.m, n, "Initial handshake response via X-HTTP-Initial-Response"),
                                    this.J = !0,
                                    Ct(this, n)
                                }
                                this.P ? (bt(this, l, o), B && this.i && 3 == l && (ze(this.S, this.T, "tick", this.hb), this.T.start())) : (Ke(this.j, this.m, o, null), Ct(this, o)), 4 == l && Dt(this), this.i && !this.I && (4 == l ? jn(this.l, this) : (this.i = !1, _t(this)))
                            } else 400 == n && 0 < o.indexOf("Unknown SID") ? (this.o = 3, Ze(12)) : (this.o = 0, Ze(13)), Dt(this), St(this)
                        }
                    }
                } catch (e) {}
            }, r.hb = function () {
                if (this.g) {
                    var e = Dn(this.g),
                        t = this.g.fa();
                    this.C < t.length && (Tt(this), bt(this, e, t), this.i && 4 != e && _t(this))
                }
            }, r.cancel = function () {
                this.I = !0, Dt(this)
            }, r.gb = function () {
                this.B = null;
                const e = Date.now();
                0 <= e - this.V ? (function (e, t) {
                    e.info((function () {
                        return "TIMEOUT: " + t
                    }))
                }(this.j, this.A), 2 != this.K && (Xe(), Ze(17)), Dt(this), this.o = 2, St(this)) : Et(this, this.V - e)
            };
            var xt = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

            function Nt(e, t) {
                if (this.g = this.s = this.j = "", this.m = null, this.o = this.l = "", this.h = !1, e instanceof Nt) {
                    this.h = void 0 !== t ? t : e.h, Rt(this, e.j), this.s = e.s, this.g = e.g, Ot(this, e.m), this.l = e.l, t = e.i;
                    var n = new Gt;
                    n.i = t.i, t.g && (n.g = new Map(t.g), n.h = t.h), Lt(this, n), this.o = e.o
                } else e && (n = String(e).match(xt)) ? (this.h = !!t, Rt(this, n[1] || "", !0), this.s = Ft(n[2] || ""), this.g = Ft(n[3] || "", !0), Ot(this, n[4]), this.l = Ft(n[5] || "", !0), Lt(this, n[6] || "", !0), this.o = Ft(n[7] || "")) : (this.h = !!t, this.i = new Gt(null, this.h))
            }

            function kt(e) {
                return new Nt(e)
            }

            function Rt(e, t, n) {
                e.j = n ? Ft(t, !0) : t, e.j && (e.j = e.j.replace(/:$/, ""))
            }

            function Ot(e, t) {
                if (t) {
                    if (t = Number(t), isNaN(t) || 0 > t) throw Error("Bad port number " + t);
                    e.m = t
                } else e.m = null
            }

            function Lt(e, t, n) {
                t instanceof Gt ? (e.i = t, function (e, t) {
                    t && !e.j && (Kt(e), e.i = null, e.g.forEach((function (e, t) {
                        var n = t.toLowerCase();
                        t != n && (Qt(this, t), Ht(this, n, e))
                    }), e)), e.j = t
                }(e.i, e.h)) : (n || (t = Vt(t, zt)), e.i = new Gt(t, e.h))
            }

            function Mt(e, t, n) {
                e.i.set(t, n)
            }

            function Pt(e) {
                return Mt(e, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)), e
            }

            function Ft(e, t) {
                return e ? t ? decodeURI(e.replace(/%25/g, "%2525")) : decodeURIComponent(e) : ""
            }

            function Vt(e, t, n) {
                return "string" == typeof e ? (e = encodeURI(e).replace(t, Ut), n && (e = e.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), e) : null
            }

            function Ut(e) {
                return "%" + ((e = e.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & e).toString(16)
            }
            Nt.prototype.toString = function () {
                var e = [],
                    t = this.j;
                t && e.push(Vt(t, Bt, !0), ":");
                var n = this.g;
                return (n || "file" == t) && (e.push("//"), (t = this.s) && e.push(Vt(t, Bt, !0), "@"), e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.m) && e.push(":", String(n))), (n = this.l) && (this.g && "/" != n.charAt(0) && e.push("/"), e.push(Vt(n, "/" == n.charAt(0) ? $t : qt, !0))), (n = this.i.toString()) && e.push("?", n), (n = this.o) && e.push("#", Vt(n, jt)), e.join("")
            };
            var Bt = /[#\/\?@]/g,
                qt = /[#\?:]/g,
                $t = /[#\?]/g,
                zt = /[#\?@]/g,
                jt = /#/g;

            function Gt(e, t) {
                this.h = this.g = null, this.i = e || null, this.j = !!t
            }

            function Kt(e) {
                e.g || (e.g = new Map, e.h = 0, e.i && function (e, t) {
                    if (e) {
                        e = e.split("&");
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n].indexOf("="),
                                s = null;
                            if (0 <= r) {
                                var i = e[n].substring(0, r);
                                s = e[n].substring(r + 1)
                            } else i = e[n];
                            t(i, s ? decodeURIComponent(s.replace(/\+/g, " ")) : "")
                        }
                    }
                }(e.i, (function (t, n) {
                    e.add(decodeURIComponent(t.replace(/\+/g, " ")), n)
                })))
            }

            function Qt(e, t) {
                Kt(e), t = Yt(e, t), e.g.has(t) && (e.i = null, e.h -= e.g.get(t).length, e.g.delete(t))
            }

            function Wt(e, t) {
                return Kt(e), t = Yt(e, t), e.g.has(t)
            }

            function Ht(e, t, n) {
                Qt(e, t), 0 < n.length && (e.i = null, e.g.set(Yt(e, t), S(n)), e.h += n.length)
            }

            function Yt(e, t) {
                return t = String(t), e.j && (t = t.toLowerCase()), t
            }(r = Gt.prototype).add = function (e, t) {
                Kt(this), this.i = null, e = Yt(this, e);
                var n = this.g.get(e);
                return n || this.g.set(e, n = []), n.push(t), this.h += 1, this
            }, r.forEach = function (e, t) {
                Kt(this), this.g.forEach((function (n, r) {
                    n.forEach((function (n) {
                        e.call(t, n, r, this)
                    }), this)
                }), this)
            }, r.oa = function () {
                Kt(this);
                const e = Array.from(this.g.values()),
                    t = Array.from(this.g.keys()),
                    n = [];
                for (let r = 0; r < t.length; r++) {
                    const s = e[r];
                    for (let e = 0; e < s.length; e++) n.push(t[r])
                }
                return n
            }, r.W = function (e) {
                Kt(this);
                let t = [];
                if ("string" == typeof e) Wt(this, e) && (t = t.concat(this.g.get(Yt(this, e))));
                else {
                    e = Array.from(this.g.values());
                    for (let n = 0; n < e.length; n++) t = t.concat(e[n])
                }
                return t
            }, r.set = function (e, t) {
                return Kt(this), this.i = null, Wt(this, e = Yt(this, e)) && (this.h -= this.g.get(e).length), this.g.set(e, [t]), this.h += 1, this
            }, r.get = function (e, t) {
                return e && 0 < (e = this.W(e)).length ? String(e[0]) : t
            }, r.toString = function () {
                if (this.i) return this.i;
                if (!this.g) return "";
                const e = [],
                    t = Array.from(this.g.keys());
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    const i = encodeURIComponent(String(r)),
                        o = this.W(r);
                    for (r = 0; r < o.length; r++) {
                        var s = i;
                        "" !== o[r] && (s += "=" + encodeURIComponent(String(o[r]))), e.push(s)
                    }
                }
                return this.i = e.join("&")
            };

            function Xt(e) {
                this.l = e || Jt, d.PerformanceNavigationTiming ? e = 0 < (e = d.performance.getEntriesByType("navigation")).length && ("hq" == e[0].nextHopProtocol || "h2" == e[0].nextHopProtocol) : e = !!(d.g && d.g.Ga && d.g.Ga() && d.g.Ga().$b), this.j = e ? this.l : 1, this.g = null, 1 < this.j && (this.g = new Set), this.h = null, this.i = []
            }
            var Jt = 10;

            function Zt(e) {
                return !!e.h || !!e.g && e.g.size >= e.j
            }

            function en(e) {
                return e.h ? 1 : e.g ? e.g.size : 0
            }

            function tn(e, t) {
                return e.h ? e.h == t : !!e.g && e.g.has(t)
            }

            function nn(e, t) {
                e.g ? e.g.add(t) : e.h = t
            }

            function rn(e, t) {
                e.h && e.h == t ? e.h = null : e.g && e.g.has(t) && e.g.delete(t)
            }

            function sn(e) {
                if (null != e.h) return e.i.concat(e.h.D);
                if (null != e.g && 0 !== e.g.size) {
                    let t = e.i;
                    for (const n of e.g.values()) t = t.concat(n.D);
                    return t
                }
                return S(e.i)
            }

            function on() {}

            function an() {
                this.g = new on
            }

            function cn(e, t, n) {
                const r = n || "";
                try {
                    At(e, (function (e, n) {
                        let s = e;
                        m(e) && (s = De(e)), t.push(r + n + "=" + encodeURIComponent(s))
                    }))
                } catch (e) {
                    throw t.push(r + "type=" + encodeURIComponent("_badmap")), e
                }
            }

            function un(e, t, n, r, s) {
                try {
                    t.onload = null, t.onerror = null, t.onabort = null, t.ontimeout = null, s(r)
                } catch (e) {}
            }

            function ln(e) {
                this.l = e.ac || null, this.j = e.jb || !1
            }

            function hn(e, t) {
                Ee.call(this), this.D = e, this.u = t, this.m = void 0, this.readyState = dn, this.status = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.v = new Headers, this.h = null, this.C = "GET", this.B = "", this.g = !1, this.A = this.j = this.l = null
            }
            Xt.prototype.cancel = function () {
                if (this.i = sn(this), this.h) this.h.cancel(), this.h = null;
                else if (this.g && 0 !== this.g.size) {
                    for (const e of this.g.values()) e.cancel();
                    this.g.clear()
                }
            }, on.prototype.stringify = function (e) {
                return d.JSON.stringify(e, void 0)
            }, on.prototype.parse = function (e) {
                return d.JSON.parse(e, void 0)
            }, _(ln, st), ln.prototype.g = function () {
                return new hn(this.l, this.j)
            }, ln.prototype.i = function (e) {
                return function () {
                    return e
                }
            }({}), _(hn, Ee);
            var dn = 0;

            function fn(e) {
                e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))
            }

            function gn(e) {
                e.readyState = 4, e.l = null, e.j = null, e.A = null, mn(e)
            }

            function mn(e) {
                e.onreadystatechange && e.onreadystatechange.call(e)
            }(r = hn.prototype).open = function (e, t) {
                if (this.readyState != dn) throw this.abort(), Error("Error reopening a connection");
                this.C = e, this.B = t, this.readyState = 1, mn(this)
            }, r.send = function (e) {
                if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
                this.g = !0;
                const t = {
                    headers: this.v,
                    method: this.C,
                    credentials: this.m,
                    cache: void 0
                };
                e && (t.body = e), (this.D || d).fetch(new Request(this.B, t)).then(this.Wa.bind(this), this.ga.bind(this))
            }, r.abort = function () {
                this.response = this.responseText = "", this.v = new Headers, this.status = 0, this.j && this.j.cancel("Request was aborted.").catch((() => {})), 1 <= this.readyState && this.g && 4 != this.readyState && (this.g = !1, gn(this)), this.readyState = dn
            }, r.Wa = function (e) {
                if (this.g && (this.l = e, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = e.headers, this.readyState = 2, mn(this)), this.g && (this.readyState = 3, mn(this), this.g)))
                    if ("arraybuffer" === this.responseType) e.arrayBuffer().then(this.Ua.bind(this), this.ga.bind(this));
                    else if (void 0 !== d.ReadableStream && "body" in e) {
                    if (this.j = e.body.getReader(), this.u) {
                        if (this.responseType) throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
                        this.response = []
                    } else this.response = this.responseText = "", this.A = new TextDecoder;
                    fn(this)
                } else e.text().then(this.Va.bind(this), this.ga.bind(this))
            }, r.Ta = function (e) {
                if (this.g) {
                    if (this.u && e.value) this.response.push(e.value);
                    else if (!this.u) {
                        var t = e.value ? e.value : new Uint8Array(0);
                        (t = this.A.decode(t, {
                            stream: !e.done
                        })) && (this.response = this.responseText += t)
                    }
                    e.done ? gn(this) : mn(this), 3 == this.readyState && fn(this)
                }
            }, r.Va = function (e) {
                this.g && (this.response = this.responseText = e, gn(this))
            }, r.Ua = function (e) {
                this.g && (this.response = e, gn(this))
            }, r.ga = function () {
                this.g && gn(this)
            }, r.setRequestHeader = function (e, t) {
                this.v.append(e, t)
            }, r.getResponseHeader = function (e) {
                return this.h && this.h.get(e.toLowerCase()) || ""
            }, r.getAllResponseHeaders = function () {
                if (!this.h) return "";
                const e = [],
                    t = this.h.entries();
                for (var n = t.next(); !n.done;) n = n.value, e.push(n[0] + ": " + n[1]), n = t.next();
                return e.join("\r\n")
            }, Object.defineProperty(hn.prototype, "withCredentials", {
                get: function () {
                    return "include" === this.m
                },
                set: function (e) {
                    this.m = e ? "include" : "same-origin"
                }
            });
            var pn = d.JSON.parse;

            function yn(e) {
                Ee.call(this), this.headers = new Map, this.u = e || null, this.h = !1, this.C = this.g = null, this.H = "", this.m = 0, this.j = "", this.l = this.F = this.v = this.D = !1, this.B = 0, this.A = null, this.J = wn, this.K = this.L = !1
            }
            _(yn, Ee);
            var wn = "",
                vn = /^https?$/i,
                bn = ["POST", "PUT"];

            function In(e, t) {
                e.h = !1, e.g && (e.l = !0, e.g.abort(), e.l = !1), e.j = t, e.m = 5, _n(e), Tn(e)
            }

            function _n(e) {
                e.D || (e.D = !0, Te(e, "complete"), Te(e, "error"))
            }

            function En(e) {
                if (e.h && void 0 !== h && (!e.C[1] || 4 != Dn(e) || 2 != e.aa()))
                    if (e.v && 4 == Dn(e)) Ve(e.Ha, 0, e);
                    else if (Te(e, "readystatechange"), 4 == Dn(e)) {
                    e.h = !1;
                    try {
                        const a = e.aa();
                        e: switch (a) {
                            case 200:
                            case 201:
                            case 202:
                            case 204:
                            case 206:
                            case 304:
                            case 1223:
                                var t = !0;
                                break e;
                            default:
                                t = !1
                        }
                        var n;
                        if (!(n = t)) {
                            var r;
                            if (r = 0 === a) {
                                var s = String(e.H).match(xt)[1] || null;
                                if (!s && d.self && d.self.location) {
                                    var i = d.self.location.protocol;
                                    s = i.substr(0, i.length - 1)
                                }
                                r = !vn.test(s ? s.toLowerCase() : "")
                            }
                            n = r
                        }
                        if (n) Te(e, "complete"), Te(e, "success");
                        else {
                            e.m = 6;
                            try {
                                var o = 2 < Dn(e) ? e.g.statusText : ""
                            } catch (e) {
                                o = ""
                            }
                            e.j = o + " [" + e.aa() + "]", _n(e)
                        }
                    } finally {
                        Tn(e)
                    }
                }
            }

            function Tn(e, t) {
                if (e.g) {
                    Sn(e);
                    const n = e.g,
                        r = e.C[0] ? f : null;
                    e.g = null, e.C = null, t || Te(e, "ready");
                    try {
                        n.onreadystatechange = r
                    } catch (e) {}
                }
            }

            function Sn(e) {
                e.g && e.K && (e.g.ontimeout = null), e.A && (d.clearTimeout(e.A), e.A = null)
            }

            function Dn(e) {
                return e.g ? e.g.readyState : 0
            }

            function Cn(e) {
                try {
                    if (!e.g) return null;
                    if ("response" in e.g) return e.g.response;
                    switch (e.J) {
                        case wn:
                        case "text":
                            return e.g.responseText;
                        case "arraybuffer":
                            if ("mozResponseArrayBuffer" in e.g) return e.g.mozResponseArrayBuffer
                    }
                    return null
                } catch (e) {
                    return null
                }
            }

            function An(e) {
                let t = "";
                return se(e, (function (e, n) {
                    t += n, t += ":", t += e, t += "\r\n"
                })), t
            }

            function xn(e, t, n) {
                e: {
                    for (r in n) {
                        var r = !1;
                        break e
                    }
                    r = !0
                }
                r || (n = An(n), "string" == typeof e ? null != n && encodeURIComponent(String(n)) : Mt(e, t, n))
            }

            function Nn(e, t, n) {
                return n && n.internalChannelParams && n.internalChannelParams[e] || t
            }

            function kn(e) {
                this.Ca = 0, this.i = [], this.j = new Ge, this.ka = this.sa = this.F = this.V = this.g = this.za = this.D = this.ia = this.o = this.S = this.s = null, this.ab = this.U = 0, this.Za = Nn("failFast", !1, e), this.L = this.v = this.u = this.m = this.l = null, this.Y = !0, this.pa = this.Ba = this.T = -1, this.Z = this.A = this.C = 0, this.Xa = Nn("baseRetryDelayMs", 5e3, e), this.bb = Nn("retryDelaySeedMs", 1e4, e), this.$a = Nn("forwardChannelMaxRetries", 2, e), this.ta = Nn("forwardChannelRequestTimeoutMs", 2e4, e), this.ra = e && e.xmlHttpFactory || void 0, this.Da = e && e.Zb || !1, this.J = void 0, this.H = e && e.supportsCrossDomainXhr || !1, this.I = "", this.h = new Xt(e && e.concurrentRequestLimit), this.Fa = new an, this.O = e && e.fastHandshake || !1, this.N = e && e.encodeInitMessageHeaders || !1, this.O && this.N && (this.N = !1), this.Ya = e && e.Xb || !1, e && e.Aa && this.j.Aa(), e && e.forceLongPolling && (this.Y = !1), this.$ = !this.O && this.Y && e && e.detectBufferingProxy || !1, this.ja = void 0, this.P = 0, this.K = !1, this.la = this.B = null
            }

            function Rn(e) {
                if (Ln(e), 3 == e.G) {
                    var t = e.U++,
                        n = kt(e.F);
                    Mt(n, "SID", e.I), Mt(n, "RID", t), Mt(n, "TYPE", "terminate"), Fn(e, n), (t = new dt(e, e.j, t, void 0)).K = 2, t.v = Pt(kt(n)), n = !1, d.navigator && d.navigator.sendBeacon && (n = d.navigator.sendBeacon(t.v.toString(), "")), !n && d.Image && ((new Image).src = t.v, n = !0), n || (t.g = Hn(t.l, null), t.g.da(t.v)), t.F = Date.now(), _t(t)
                }
                Qn(e)
            }

            function On(e) {
                e.g && (qn(e), e.g.cancel(), e.g = null)
            }

            function Ln(e) {
                On(e), e.u && (d.clearTimeout(e.u), e.u = null), zn(e), e.h.cancel(), e.m && ("number" == typeof e.m && d.clearTimeout(e.m), e.m = null)
            }

            function Mn(e) {
                Zt(e.h) || e.m || (e.m = !0, Re(e.Ja, e), e.C = 0)
            }

            function Pn(e, t) {
                var n;
                n = t ? t.m : e.U++;
                const r = kt(e.F);
                Mt(r, "SID", e.I), Mt(r, "RID", n), Mt(r, "AID", e.T), Fn(e, r), e.o && e.s && xn(r, e.o, e.s), n = new dt(e, e.j, n, e.C + 1), null === e.o && (n.H = e.s), t && (e.i = t.D.concat(e.i)), t = Vn(e, n, 1e3), n.setTimeout(Math.round(.5 * e.ta) + Math.round(.5 * e.ta * Math.random())), nn(e.h, n), yt(n, r, t)
            }

            function Fn(e, t) {
                e.ia && se(e.ia, (function (e, n) {
                    Mt(t, n, e)
                })), e.l && At({}, (function (e, n) {
                    Mt(t, n, e)
                }))
            }

            function Vn(e, t, n) {
                n = Math.min(e.i.length, n);
                var r = e.l ? b(e.l.Ra, e.l, e) : null;
                e: {
                    var s = e.i;
                    let t = -1;
                    for (;;) {
                        const e = ["count=" + n]; - 1 == t ? 0 < n ? (t = s[0].h, e.push("ofs=" + t)) : t = 0 : e.push("ofs=" + t);
                        let i = !0;
                        for (let o = 0; o < n; o++) {
                            let n = s[o].h;
                            const a = s[o].g;
                            if (n -= t, 0 > n) t = Math.max(0, s[o].h - 100), i = !1;
                            else try {
                                cn(a, e, "req" + n + "_")
                            } catch (e) {
                                r && r(a)
                            }
                        }
                        if (i) {
                            r = e.join("&");
                            break e
                        }
                    }
                }
                return e = e.i.splice(0, n), t.D = e, r
            }

            function Un(e) {
                e.g || e.u || (e.Z = 1, Re(e.Ia, e), e.A = 0)
            }

            function Bn(e) {
                return !(e.g || e.u || 3 <= e.A) && (e.Z++, e.u = tt(b(e.Ia, e), Gn(e, e.A)), e.A++, !0)
            }

            function qn(e) {
                null != e.B && (d.clearTimeout(e.B), e.B = null)
            }

            function $n(e) {
                e.g = new dt(e, e.j, "rpc", e.Z), null === e.o && (e.g.H = e.s), e.g.N = 0;
                var t = kt(e.sa);
                Mt(t, "RID", "rpc"), Mt(t, "SID", e.I), Mt(t, "CI", e.L ? "0" : "1"), Mt(t, "AID", e.T), Mt(t, "TYPE", "xmlhttp"), Fn(e, t), e.o && e.s && xn(t, e.o, e.s), e.J && e.g.setTimeout(e.J);
                var n = e.g;
                e = e.ka, n.K = 1, n.v = Pt(kt(t)), n.s = null, n.P = !0, wt(n, e)
            }

            function zn(e) {
                null != e.v && (d.clearTimeout(e.v), e.v = null)
            }

            function jn(e, t) {
                var n = null;
                if (e.g == t) {
                    zn(e), qn(e), e.g = null;
                    var r = 2
                } else {
                    if (!tn(e.h, t)) return;
                    n = t.D, rn(e.h, t), r = 1
                }
                if (0 != e.G)
                    if (e.pa = t.Y, t.i)
                        if (1 == r) {
                            n = t.s ? t.s.length : 0, t = Date.now() - t.F;
                            var s = e.C;
                            Te(r = He(), new et(r, n)), Mn(e)
                        } else Un(e);
                else if (3 == (s = t.o) || 0 == s && 0 < e.pa || !(1 == r && function (e, t) {
                        return !(en(e.h) >= e.h.j - (e.m ? 1 : 0) || (e.m ? (e.i = t.D.concat(e.i), 0) : 1 == e.G || 2 == e.G || e.C >= (e.Za ? 0 : e.$a) || (e.m = tt(b(e.Ja, e, t), Gn(e, e.C)), e.C++, 0)))
                    }(e, t) || 2 == r && Bn(e))) switch (n && 0 < n.length && (t = e.h, t.i = t.i.concat(n)), s) {
                    case 1:
                        Kn(e, 5);
                        break;
                    case 4:
                        Kn(e, 10);
                        break;
                    case 3:
                        Kn(e, 6);
                        break;
                    default:
                        Kn(e, 2)
                }
            }

            function Gn(e, t) {
                let n = e.Xa + Math.floor(Math.random() * e.bb);
                return e.l || (n *= 2), n * t
            }

            function Kn(e, t) {
                if (e.j.info("Error code " + t), 2 == t) {
                    var n = null;
                    e.l && (n = null);
                    var r = b(e.kb, e);
                    n || (n = new Nt("//www.google.com/images/cleardot.gif"), d.location && "http" == d.location.protocol || Rt(n, "https"), Pt(n)),
                        function (e, t) {
                            const n = new Ge;
                            if (d.Image) {
                                const r = new Image;
                                r.onload = I(un, n, r, "TestLoadImage: loaded", !0, t), r.onerror = I(un, n, r, "TestLoadImage: error", !1, t), r.onabort = I(un, n, r, "TestLoadImage: abort", !1, t), r.ontimeout = I(un, n, r, "TestLoadImage: timeout", !1, t), d.setTimeout((function () {
                                    r.ontimeout && r.ontimeout()
                                }), 1e4), r.src = e
                            } else t(!1)
                        }(n.toString(), r)
                } else Ze(2);
                e.G = 0, e.l && e.l.va(t), Qn(e), Ln(e)
            }

            function Qn(e) {
                if (e.G = 0, e.la = [], e.l) {
                    const t = sn(e.h);
                    0 == t.length && 0 == e.i.length || (D(e.la, t), D(e.la, e.i), e.h.i.length = 0, S(e.i), e.i.length = 0), e.l.ua()
                }
            }

            function Wn(e, t, n) {
                var r = n instanceof Nt ? kt(n) : new Nt(n, void 0);
                if ("" != r.g) t && (r.g = t + "." + r.g), Ot(r, r.m);
                else {
                    var s = d.location;
                    r = s.protocol, t = t ? t + "." + s.hostname : s.hostname, s = +s.port;
                    var i = new Nt(null, void 0);
                    r && Rt(i, r), t && (i.g = t), s && Ot(i, s), n && (i.l = n), r = i
                }
                return n = e.D, t = e.za, n && t && Mt(r, n, t), Mt(r, "VER", e.ma), Fn(e, r), r
            }

            function Hn(e, t, n) {
                if (t && !e.H) throw Error("Can't create secondary domain capable XhrIo object.");
                return (t = n && e.Da && !e.ra ? new yn(new ln({
                    jb: !0
                })) : new yn(e.ra)).Ka(e.H), t
            }

            function Yn() {}

            function Xn() {
                if (V && !(10 <= Number(X))) throw Error("Environmental error: no available transport.")
            }

            function Jn(e, t) {
                Ee.call(this), this.g = new kn(t), this.l = e, this.h = t && t.messageUrlParams || null, e = t && t.messageHeaders || null, t && t.clientProtocolHeaderRequired && (e ? e["X-Client-Protocol"] = "webchannel" : e = {
                    "X-Client-Protocol": "webchannel"
                }), this.g.s = e, e = t && t.initMessageHeaders || null, t && t.messageContentType && (e ? e["X-WebChannel-Content-Type"] = t.messageContentType : e = {
                    "X-WebChannel-Content-Type": t.messageContentType
                }), t && t.ya && (e ? e["X-WebChannel-Client-Profile"] = t.ya : e = {
                    "X-WebChannel-Client-Profile": t.ya
                }), this.g.S = e, (e = t && t.Yb) && !x(e) && (this.g.o = e), this.A = t && t.supportsCrossDomainXhr || !1, this.v = t && t.sendRawJson || !1, (t = t && t.httpSessionIdParam) && !x(t) && (this.g.D = t, null !== (e = this.h) && t in e && (t in (e = this.h) && delete e[t])), this.j = new tr(this)
            }

            function Zn(e) {
                ut.call(this);
                var t = e.__sm__;
                if (t) {
                    e: {
                        for (const n in t) {
                            e = n;
                            break e
                        }
                        e = void 0
                    }(this.i = e) && (e = this.i, t = null !== t && e in t ? t[e] : void 0),
                    this.data = t
                }
                else this.data = e
            }

            function er() {
                lt.call(this), this.status = 1
            }

            function tr(e) {
                this.g = e
            }(r = yn.prototype).Ka = function (e) {
                this.L = e
            }, r.da = function (e, t, n, r) {
                if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.H + "; newUri=" + e);
                t = t ? t.toUpperCase() : "GET", this.H = e, this.j = "", this.m = 0, this.D = !1, this.h = !0, this.g = this.u ? this.u.g() : at.g(), this.C = this.u ? it(this.u) : it(at), this.g.onreadystatechange = b(this.Ha, this);
                try {
                    this.F = !0, this.g.open(t, String(e), !0), this.F = !1
                } catch (e) {
                    return void In(this, e)
                }
                if (e = n || "", n = new Map(this.headers), r)
                    if (Object.getPrototypeOf(r) === Object.prototype)
                        for (var s in r) n.set(s, r[s]);
                    else {
                        if ("function" != typeof r.keys || "function" != typeof r.get) throw Error("Unknown input type for opt_headers: " + String(r));
                        for (const e of r.keys()) n.set(e, r.get(e))
                    } r = Array.from(n.keys()).find((e => "content-type" == e.toLowerCase())), s = d.FormData && e instanceof d.FormData, !(0 <= T(bn, t)) || r || s || n.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
                for (const [e, t] of n) this.g.setRequestHeader(e, t);
                this.J && (this.g.responseType = this.J), "withCredentials" in this.g && this.g.withCredentials !== this.L && (this.g.withCredentials = this.L);
                try {
                    Sn(this), 0 < this.B && ((this.K = function (e) {
                        return V && H() && "number" == typeof e.timeout && void 0 !== e.ontimeout
                    }(this.g)) ? (this.g.timeout = this.B, this.g.ontimeout = b(this.qa, this)) : this.A = Ve(this.qa, this.B, this)), this.v = !0, this.g.send(e), this.v = !1
                } catch (e) {
                    In(this, e)
                }
            }, r.qa = function () {
                void 0 !== h && this.g && (this.j = "Timed out after " + this.B + "ms, aborting", this.m = 8, Te(this, "timeout"), this.abort(8))
            }, r.abort = function (e) {
                this.g && this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1, this.m = e || 7, Te(this, "complete"), Te(this, "abort"), Tn(this))
            }, r.M = function () {
                this.g && (this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1), Tn(this, !0)), yn.X.M.call(this)
            }, r.Ha = function () {
                this.s || (this.F || this.v || this.l ? En(this) : this.fb())
            }, r.fb = function () {
                En(this)
            }, r.aa = function () {
                try {
                    return 2 < Dn(this) ? this.g.status : -1
                } catch (e) {
                    return -1
                }
            }, r.fa = function () {
                try {
                    return this.g ? this.g.responseText : ""
                } catch (e) {
                    return ""
                }
            }, r.Sa = function (e) {
                if (this.g) {
                    var t = this.g.responseText;
                    return e && 0 == t.indexOf(e) && (t = t.substring(e.length)), pn(t)
                }
            }, r.Ea = function () {
                return this.m
            }, r.Oa = function () {
                return "string" == typeof this.j ? this.j : String(this.j)
            }, (r = kn.prototype).ma = 8, r.G = 1, r.Ja = function (e) {
                if (this.m)
                    if (this.m = null, 1 == this.G) {
                        if (!e) {
                            this.U = Math.floor(1e5 * Math.random()), e = this.U++;
                            const s = new dt(this, this.j, e, void 0);
                            let i = this.s;
                            if (this.S && (i ? (i = ie(i), ae(i, this.S)) : i = this.S), null !== this.o || this.N || (s.H = i, i = null), this.O) e: {
                                for (var t = 0, n = 0; n < this.i.length; n++) {
                                    var r = this.i[n];
                                    if (void 0 === (r = "__data__" in r.g && "string" == typeof (r = r.g.__data__) ? r.length : void 0)) break;
                                    if (4096 < (t += r)) {
                                        t = n;
                                        break e
                                    }
                                    if (4096 === t || n === this.i.length - 1) {
                                        t = n + 1;
                                        break e
                                    }
                                }
                                t = 1e3
                            }
                            else t = 1e3;
                            t = Vn(this, s, t), Mt(n = kt(this.F), "RID", e), Mt(n, "CVER", 22), this.D && Mt(n, "X-HTTP-Session-Id", this.D), Fn(this, n), i && (this.N ? t = "headers=" + encodeURIComponent(String(An(i))) + "&" + t : this.o && xn(n, this.o, i)), nn(this.h, s), this.Ya && Mt(n, "TYPE", "init"), this.O ? (Mt(n, "$req", t), Mt(n, "SID", "null"), s.Z = !0, yt(s, n, null)) : yt(s, n, t), this.G = 2
                        }
                    } else 3 == this.G && (e ? Pn(this, e) : 0 == this.i.length || Zt(this.h) || Pn(this))
            }, r.Ia = function () {
                if (this.u = null, $n(this), this.$ && !(this.K || null == this.g || 0 >= this.P)) {
                    var e = 2 * this.P;
                    this.j.info("BP detection timer enabled: " + e), this.B = tt(b(this.eb, this), e)
                }
            }, r.eb = function () {
                this.B && (this.B = null, this.j.info("BP detection timeout reached."), this.j.info("Buffering proxy detected and switch to long-polling!"), this.L = !1, this.K = !0, Ze(10), On(this), $n(this))
            }, r.cb = function () {
                null != this.v && (this.v = null, On(this), Bn(this), Ze(19))
            }, r.kb = function (e) {
                e ? (this.j.info("Successfully pinged google.com"), Ze(2)) : (this.j.info("Failed to ping google.com"), Ze(1))
            }, (r = Yn.prototype).xa = function () {}, r.wa = function () {}, r.va = function () {}, r.ua = function () {}, r.Ra = function () {}, Xn.prototype.g = function (e, t) {
                return new Jn(e, t)
            }, _(Jn, Ee), Jn.prototype.m = function () {
                this.g.l = this.j, this.A && (this.g.H = !0);
                var e = this.g,
                    t = this.l,
                    n = this.h || void 0;
                Ze(0), e.V = t, e.ia = n || {}, e.L = e.Y, e.F = Wn(e, null, e.V), Mn(e)
            }, Jn.prototype.close = function () {
                Rn(this.g)
            }, Jn.prototype.u = function (e) {
                var t = this.g;
                if ("string" == typeof e) {
                    var n = {};
                    n.__data__ = e, e = n
                } else this.v && ((n = {}).__data__ = De(e), e = n);
                t.i.push(new class {
                    constructor(e, t) {
                        this.h = e, this.g = t
                    }
                }(t.ab++, e)), 3 == t.G && Mn(t)
            }, Jn.prototype.M = function () {
                this.g.l = null, delete this.j, Rn(this.g), delete this.g, Jn.X.M.call(this)
            }, _(Zn, ut), _(er, lt), _(tr, Yn), tr.prototype.xa = function () {
                Te(this.g, "a")
            }, tr.prototype.wa = function (e) {
                Te(this.g, new Zn(e))
            }, tr.prototype.va = function (e) {
                Te(this.g, new er)
            }, tr.prototype.ua = function () {
                Te(this.g, "b")
            }, Xn.prototype.createWebChannel = Xn.prototype.g, Jn.prototype.send = Jn.prototype.u, Jn.prototype.open = Jn.prototype.m, Jn.prototype.close = Jn.prototype.close, nt.NO_ERROR = 0, nt.TIMEOUT = 8, nt.HTTP_ERROR = 6, rt.COMPLETE = "complete", ot.EventType = ct, ct.OPEN = "a", ct.CLOSE = "b", ct.ERROR = "c", ct.MESSAGE = "d", Ee.prototype.listen = Ee.prototype.N, yn.prototype.listenOnce = yn.prototype.O, yn.prototype.getLastError = yn.prototype.Oa, yn.prototype.getLastErrorCode = yn.prototype.Ea, yn.prototype.getStatus = yn.prototype.aa, yn.prototype.getResponseJson = yn.prototype.Sa, yn.prototype.getResponseText = yn.prototype.fa, yn.prototype.send = yn.prototype.da, yn.prototype.setWithCredentials = yn.prototype.Ka;
            var nr = l.createWebChannelTransport = function () {
                    return new Xn
                },
                rr = l.getStatEventTarget = function () {
                    return He()
                },
                sr = l.ErrorCode = nt,
                ir = l.EventType = rt,
                or = l.Event = Qe,
                ar = l.Stat = {
                    sb: 0,
                    vb: 1,
                    wb: 2,
                    Pb: 3,
                    Ub: 4,
                    Rb: 5,
                    Sb: 6,
                    Qb: 7,
                    Ob: 8,
                    Tb: 9,
                    PROXY: 10,
                    NOPROXY: 11,
                    Mb: 12,
                    Ib: 13,
                    Jb: 14,
                    Hb: 15,
                    Kb: 16,
                    Lb: 17,
                    ob: 18,
                    nb: 19,
                    pb: 20
                },
                cr = l.FetchXmlHttpFactory = ln,
                ur = l.WebChannel = ot,
                lr = l.XhrIo = yn;
            const hr = "@firebase/firestore";
            class dr {
                constructor(e) {
                    this.uid = e
                }
                isAuthenticated() {
                    return null != this.uid
                }
                toKey() {
                    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user"
                }
                isEqual(e) {
                    return e.uid === this.uid
                }
            }
            dr.UNAUTHENTICATED = new dr(null), dr.GOOGLE_CREDENTIALS = new dr("google-credentials-uid"), dr.FIRST_PARTY = new dr("first-party-uid"), dr.MOCK_USER = new dr("mock-user");
            let fr = "9.19.0";
            const gr = new a.Yd("@firebase/firestore");

            function mr() {
                return gr.logLevel
            }

            function pr(e, ...t) {
                if (gr.logLevel <= a.in.DEBUG) {
                    const n = t.map(vr);
                    gr.debug(`Firestore (${fr}): ${e}`, ...n)
                }
            }

            function yr(e, ...t) {
                if (gr.logLevel <= a.in.ERROR) {
                    const n = t.map(vr);
                    gr.error(`Firestore (${fr}): ${e}`, ...n)
                }
            }

            function wr(e, ...t) {
                if (gr.logLevel <= a.in.WARN) {
                    const n = t.map(vr);
                    gr.warn(`Firestore (${fr}): ${e}`, ...n)
                }
            }

            function vr(e) {
                if ("string" == typeof e) return e;
                try {
                    return t = e, JSON.stringify(t)
                } catch (t) {
                    return e
                }
                var t
            }

            function br(e = "Unexpected state") {
                const t = `FIRESTORE (${fr}) INTERNAL ASSERTION FAILED: ` + e;
                throw yr(t), new Error(t)
            }

            function Ir(e, t) {
                e || br()
            }

            function _r(e, t) {
                return e
            }
            const Er = {
                OK: "ok",
                CANCELLED: "cancelled",
                UNKNOWN: "unknown",
                INVALID_ARGUMENT: "invalid-argument",
                DEADLINE_EXCEEDED: "deadline-exceeded",
                NOT_FOUND: "not-found",
                ALREADY_EXISTS: "already-exists",
                PERMISSION_DENIED: "permission-denied",
                UNAUTHENTICATED: "unauthenticated",
                RESOURCE_EXHAUSTED: "resource-exhausted",
                FAILED_PRECONDITION: "failed-precondition",
                ABORTED: "aborted",
                OUT_OF_RANGE: "out-of-range",
                UNIMPLEMENTED: "unimplemented",
                INTERNAL: "internal",
                UNAVAILABLE: "unavailable",
                DATA_LOSS: "data-loss"
            };
            class Tr extends c.ZR {
                constructor(e, t) {
                    super(e, t), this.code = e, this.message = t, this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`
                }
            }
            class Sr {
                constructor() {
                    this.promise = new Promise(((e, t) => {
                        this.resolve = e, this.reject = t
                    }))
                }
            }
            class Dr {
                constructor(e, t) {
                    this.user = t, this.type = "OAuth", this.headers = new Map, this.headers.set("Authorization", `Bearer ${e}`)
                }
            }
            class Cr {
                getToken() {
                    return Promise.resolve(null)
                }
                invalidateToken() {}
                start(e, t) {
                    e.enqueueRetryable((() => t(dr.UNAUTHENTICATED)))
                }
                shutdown() {}
            }
            class Ar {
                constructor(e) {
                    this.token = e, this.changeListener = null
                }
                getToken() {
                    return Promise.resolve(this.token)
                }
                invalidateToken() {}
                start(e, t) {
                    this.changeListener = t, e.enqueueRetryable((() => t(this.token.user)))
                }
                shutdown() {
                    this.changeListener = null
                }
            }
            class xr {
                constructor(e) {
                    this.t = e, this.currentUser = dr.UNAUTHENTICATED, this.i = 0, this.forceRefresh = !1, this.auth = null
                }
                start(e, t) {
                    let n = this.i;
                    const r = e => this.i !== n ? (n = this.i, t(e)) : Promise.resolve();
                    let s = new Sr;
                    this.o = () => {
                        this.i++, this.currentUser = this.u(), s.resolve(), s = new Sr, e.enqueueRetryable((() => r(this.currentUser)))
                    };
                    const i = () => {
                            const t = s;
                            e.enqueueRetryable((async () => {
                                await t.promise, await r(this.currentUser)
                            }))
                        },
                        o = e => {
                            pr("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = e, this.auth.addAuthTokenListener(this.o), i()
                        };
                    this.t.onInit((e => o(e))), setTimeout((() => {
                        if (!this.auth) {
                            const e = this.t.getImmediate({
                                optional: !0
                            });
                            e ? o(e) : (pr("FirebaseAuthCredentialsProvider", "Auth not yet detected"), s.resolve(), s = new Sr)
                        }
                    }), 0), i()
                }
                getToken() {
                    const e = this.i,
                        t = this.forceRefresh;
                    return this.forceRefresh = !1, this.auth ? this.auth.getToken(t).then((t => this.i !== e ? (pr("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : t ? (Ir("string" == typeof t.accessToken), new Dr(t.accessToken, this.currentUser)) : null)) : Promise.resolve(null)
                }
                invalidateToken() {
                    this.forceRefresh = !0
                }
                shutdown() {
                    this.auth && this.auth.removeAuthTokenListener(this.o)
                }
                u() {
                    const e = this.auth && this.auth.getUid();
                    return Ir(null === e || "string" == typeof e), new dr(e)
                }
            }
            class Nr {
                constructor(e, t, n) {
                    this.h = e, this.l = t, this.m = n, this.type = "FirstParty", this.user = dr.FIRST_PARTY, this.g = new Map
                }
                p() {
                    return this.m ? this.m() : null
                }
                get headers() {
                    this.g.set("X-Goog-AuthUser", this.h);
                    const e = this.p();
                    return e && this.g.set("Authorization", e), this.l && this.g.set("X-Goog-Iam-Authorization-Token", this.l), this.g
                }
            }
            class kr {
                constructor(e, t, n) {
                    this.h = e, this.l = t, this.m = n
                }
                getToken() {
                    return Promise.resolve(new Nr(this.h, this.l, this.m))
                }
                start(e, t) {
                    e.enqueueRetryable((() => t(dr.FIRST_PARTY)))
                }
                shutdown() {}
                invalidateToken() {}
            }
            class Rr {
                constructor(e) {
                    this.value = e, this.type = "AppCheck", this.headers = new Map, e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value)
                }
            }
            class Or {
                constructor(e) {
                    this.I = e, this.forceRefresh = !1, this.appCheck = null, this.T = null
                }
                start(e, t) {
                    const n = e => {
                        null != e.error && pr("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);
                        const n = e.token !== this.T;
                        return this.T = e.token, pr("FirebaseAppCheckTokenProvider", `Received ${n?"new":"existing"} token.`), n ? t(e.token) : Promise.resolve()
                    };
                    this.o = t => {
                        e.enqueueRetryable((() => n(t)))
                    };
                    const r = e => {
                        pr("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = e, this.appCheck.addTokenListener(this.o)
                    };
                    this.I.onInit((e => r(e))), setTimeout((() => {
                        if (!this.appCheck) {
                            const e = this.I.getImmediate({
                                optional: !0
                            });
                            e ? r(e) : pr("FirebaseAppCheckTokenProvider", "AppCheck not yet detected")
                        }
                    }), 0)
                }
                getToken() {
                    const e = this.forceRefresh;
                    return this.forceRefresh = !1, this.appCheck ? this.appCheck.getToken(e).then((e => e ? (Ir("string" == typeof e.token), this.T = e.token, new Rr(e.token)) : null)) : Promise.resolve(null)
                }
                invalidateToken() {
                    this.forceRefresh = !0
                }
                shutdown() {
                    this.appCheck && this.appCheck.removeTokenListener(this.o)
                }
            }

            function Lr(e) {
                const t = "undefined" != typeof self && (self.crypto || self.msCrypto),
                    n = new Uint8Array(e);
                if (t && "function" == typeof t.getRandomValues) t.getRandomValues(n);
                else
                    for (let t = 0; t < e; t++) n[t] = Math.floor(256 * Math.random());
                return n
            }
            class Mr {
                static A() {
                    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                        t = Math.floor(256 / e.length) * e.length;
                    let n = "";
                    for (; n.length < 20;) {
                        const r = Lr(40);
                        for (let s = 0; s < r.length; ++s) n.length < 20 && r[s] < t && (n += e.charAt(r[s] % e.length))
                    }
                    return n
                }
            }

            function Pr(e, t) {
                return e < t ? -1 : e > t ? 1 : 0
            }

            function Fr(e, t, n) {
                return e.length === t.length && e.every(((e, r) => n(e, t[r])))
            }

            function Vr(e) {
                return e + "\0"
            }
            class Ur {
                constructor(e, t) {
                    if (this.seconds = e, this.nanoseconds = t, t < 0) throw new Tr(Er.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
                    if (t >= 1e9) throw new Tr(Er.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
                    if (e < -62135596800) throw new Tr(Er.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
                    if (e >= 253402300800) throw new Tr(Er.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e)
                }
                static now() {
                    return Ur.fromMillis(Date.now())
                }
                static fromDate(e) {
                    return Ur.fromMillis(e.getTime())
                }
                static fromMillis(e) {
                    const t = Math.floor(e / 1e3),
                        n = Math.floor(1e6 * (e - 1e3 * t));
                    return new Ur(t, n)
                }
                toDate() {
                    return new Date(this.toMillis())
                }
                toMillis() {
                    return 1e3 * this.seconds + this.nanoseconds / 1e6
                }
                _compareTo(e) {
                    return this.seconds === e.seconds ? Pr(this.nanoseconds, e.nanoseconds) : Pr(this.seconds, e.seconds)
                }
                isEqual(e) {
                    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds
                }
                toString() {
                    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"
                }
                toJSON() {
                    return {
                        seconds: this.seconds,
                        nanoseconds: this.nanoseconds
                    }
                }
                valueOf() {
                    const e = this.seconds - -62135596800;
                    return String(e).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0")
                }
            }
            class Br {
                constructor(e) {
                    this.timestamp = e
                }
                static fromTimestamp(e) {
                    return new Br(e)
                }
                static min() {
                    return new Br(new Ur(0, 0))
                }
                static max() {
                    return new Br(new Ur(253402300799, 999999999))
                }
                compareTo(e) {
                    return this.timestamp._compareTo(e.timestamp)
                }
                isEqual(e) {
                    return this.timestamp.isEqual(e.timestamp)
                }
                toMicroseconds() {
                    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
                }
                toString() {
                    return "SnapshotVersion(" + this.timestamp.toString() + ")"
                }
                toTimestamp() {
                    return this.timestamp
                }
            }
            class qr {
                constructor(e, t, n) {
                    void 0 === t ? t = 0 : t > e.length && br(), void 0 === n ? n = e.length - t : n > e.length - t && br(), this.segments = e, this.offset = t, this.len = n
                }
                get length() {
                    return this.len
                }
                isEqual(e) {
                    return 0 === qr.comparator(this, e)
                }
                child(e) {
                    const t = this.segments.slice(this.offset, this.limit());
                    return e instanceof qr ? e.forEach((e => {
                        t.push(e)
                    })) : t.push(e), this.construct(t)
                }
                limit() {
                    return this.offset + this.length
                }
                popFirst(e) {
                    return e = void 0 === e ? 1 : e, this.construct(this.segments, this.offset + e, this.length - e)
                }
                popLast() {
                    return this.construct(this.segments, this.offset, this.length - 1)
                }
                firstSegment() {
                    return this.segments[this.offset]
                }
                lastSegment() {
                    return this.get(this.length - 1)
                }
                get(e) {
                    return this.segments[this.offset + e]
                }
                isEmpty() {
                    return 0 === this.length
                }
                isPrefixOf(e) {
                    if (e.length < this.length) return !1;
                    for (let t = 0; t < this.length; t++)
                        if (this.get(t) !== e.get(t)) return !1;
                    return !0
                }
                isImmediateParentOf(e) {
                    if (this.length + 1 !== e.length) return !1;
                    for (let t = 0; t < this.length; t++)
                        if (this.get(t) !== e.get(t)) return !1;
                    return !0
                }
                forEach(e) {
                    for (let t = this.offset, n = this.limit(); t < n; t++) e(this.segments[t])
                }
                toArray() {
                    return this.segments.slice(this.offset, this.limit())
                }
                static comparator(e, t) {
                    const n = Math.min(e.length, t.length);
                    for (let r = 0; r < n; r++) {
                        const n = e.get(r),
                            s = t.get(r);
                        if (n < s) return -1;
                        if (n > s) return 1
                    }
                    return e.length < t.length ? -1 : e.length > t.length ? 1 : 0
                }
            }
            class $r extends qr {
                construct(e, t, n) {
                    return new $r(e, t, n)
                }
                canonicalString() {
                    return this.toArray().join("/")
                }
                toString() {
                    return this.canonicalString()
                }
                static fromString(...e) {
                    const t = [];
                    for (const n of e) {
                        if (n.indexOf("//") >= 0) throw new Tr(Er.INVALID_ARGUMENT, `Invalid segment (${n}). Paths must not contain // in them.`);
                        t.push(...n.split("/").filter((e => e.length > 0)))
                    }
                    return new $r(t)
                }
                static emptyPath() {
                    return new $r([])
                }
            }
            const zr = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
            class jr extends qr {
                construct(e, t, n) {
                    return new jr(e, t, n)
                }
                static isValidIdentifier(e) {
                    return zr.test(e)
                }
                canonicalString() {
                    return this.toArray().map((e => (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), jr.isValidIdentifier(e) || (e = "`" + e + "`"), e))).join(".")
                }
                toString() {
                    return this.canonicalString()
                }
                isKeyField() {
                    return 1 === this.length && "__name__" === this.get(0)
                }
                static keyField() {
                    return new jr(["__name__"])
                }
                static fromServerFormat(e) {
                    const t = [];
                    let n = "",
                        r = 0;
                    const s = () => {
                        if (0 === n.length) throw new Tr(Er.INVALID_ARGUMENT, `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
                        t.push(n), n = ""
                    };
                    let i = !1;
                    for (; r < e.length;) {
                        const t = e[r];
                        if ("\\" === t) {
                            if (r + 1 === e.length) throw new Tr(Er.INVALID_ARGUMENT, "Path has trailing escape character: " + e);
                            const t = e[r + 1];
                            if ("\\" !== t && "." !== t && "`" !== t) throw new Tr(Er.INVALID_ARGUMENT, "Path has invalid escape sequence: " + e);
                            n += t, r += 2
                        } else "`" === t ? (i = !i, r++) : "." !== t || i ? (n += t, r++) : (s(), r++)
                    }
                    if (s(), i) throw new Tr(Er.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
                    return new jr(t)
                }
                static emptyPath() {
                    return new jr([])
                }
            }
            class Gr {
                constructor(e) {
                    this.path = e
                }
                static fromPath(e) {
                    return new Gr($r.fromString(e))
                }
                static fromName(e) {
                    return new Gr($r.fromString(e).popFirst(5))
                }
                static empty() {
                    return new Gr($r.emptyPath())
                }
                get collectionGroup() {
                    return this.path.popLast().lastSegment()
                }
                hasCollectionId(e) {
                    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e
                }
                getCollectionGroup() {
                    return this.path.get(this.path.length - 2)
                }
                getCollectionPath() {
                    return this.path.popLast()
                }
                isEqual(e) {
                    return null !== e && 0 === $r.comparator(this.path, e.path)
                }
                toString() {
                    return this.path.toString()
                }
                static comparator(e, t) {
                    return $r.comparator(e.path, t.path)
                }
                static isDocumentKey(e) {
                    return e.length % 2 == 0
                }
                static fromSegments(e) {
                    return new Gr(new $r(e.slice()))
                }
            }
            class Kr {
                constructor(e, t, n, r) {
                    this.indexId = e, this.collectionGroup = t, this.fields = n, this.indexState = r
                }
            }

            function Qr(e) {
                return e.fields.find((e => 2 === e.kind))
            }

            function Wr(e) {
                return e.fields.filter((e => 2 !== e.kind))
            }
            Kr.UNKNOWN_ID = -1;
            class Hr {
                constructor(e, t) {
                    this.fieldPath = e, this.kind = t
                }
            }
            class Yr {
                constructor(e, t) {
                    this.sequenceNumber = e, this.offset = t
                }
                static empty() {
                    return new Yr(0, Zr.min())
                }
            }

            function Xr(e, t) {
                const n = e.toTimestamp().seconds,
                    r = e.toTimestamp().nanoseconds + 1,
                    s = Br.fromTimestamp(1e9 === r ? new Ur(n + 1, 0) : new Ur(n, r));
                return new Zr(s, Gr.empty(), t)
            }

            function Jr(e) {
                return new Zr(e.readTime, e.key, -1)
            }
            class Zr {
                constructor(e, t, n) {
                    this.readTime = e, this.documentKey = t, this.largestBatchId = n
                }
                static min() {
                    return new Zr(Br.min(), Gr.empty(), -1)
                }
                static max() {
                    return new Zr(Br.max(), Gr.empty(), -1)
                }
            }

            function es(e, t) {
                let n = e.readTime.compareTo(t.readTime);
                return 0 !== n ? n : (n = Gr.comparator(e.documentKey, t.documentKey), 0 !== n ? n : Pr(e.largestBatchId, t.largestBatchId))
            }
            const ts = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
            class ns {
                constructor() {
                    this.onCommittedListeners = []
                }
                addOnCommittedListener(e) {
                    this.onCommittedListeners.push(e)
                }
                raiseOnCommittedEvent() {
                    this.onCommittedListeners.forEach((e => e()))
                }
            }
            async function rs(e) {
                if (e.code !== Er.FAILED_PRECONDITION || e.message !== ts) throw e;
                pr("LocalStore", "Unexpectedly lost primary lease")
            }
            class ss {
                constructor(e) {
                    this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = !1, this.callbackAttached = !1, e((e => {
                        this.isDone = !0, this.result = e, this.nextCallback && this.nextCallback(e)
                    }), (e => {
                        this.isDone = !0, this.error = e, this.catchCallback && this.catchCallback(e)
                    }))
                } catch (e) {
                    return this.next(void 0, e)
                }
                next(e, t) {
                    return this.callbackAttached && br(), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(t, this.error) : this.wrapSuccess(e, this.result) : new ss(((n, r) => {
                        this.nextCallback = t => {
                            this.wrapSuccess(e, t).next(n, r)
                        }, this.catchCallback = e => {
                            this.wrapFailure(t, e).next(n, r)
                        }
                    }))
                }
                toPromise() {
                    return new Promise(((e, t) => {
                        this.next(e, t)
                    }))
                }
                wrapUserFunction(e) {
                    try {
                        const t = e();
                        return t instanceof ss ? t : ss.resolve(t)
                    } catch (e) {
                        return ss.reject(e)
                    }
                }
                wrapSuccess(e, t) {
                    return e ? this.wrapUserFunction((() => e(t))) : ss.resolve(t)
                }
                wrapFailure(e, t) {
                    return e ? this.wrapUserFunction((() => e(t))) : ss.reject(t)
                }
                static resolve(e) {
                    return new ss(((t, n) => {
                        t(e)
                    }))
                }
                static reject(e) {
                    return new ss(((t, n) => {
                        n(e)
                    }))
                }
                static waitFor(e) {
                    return new ss(((t, n) => {
                        let r = 0,
                            s = 0,
                            i = !1;
                        e.forEach((e => {
                            ++r, e.next((() => {
                                ++s, i && s === r && t()
                            }), (e => n(e)))
                        })), i = !0, s === r && t()
                    }))
                }
                static or(e) {
                    let t = ss.resolve(!1);
                    for (const n of e) t = t.next((e => e ? ss.resolve(e) : n()));
                    return t
                }
                static forEach(e, t) {
                    const n = [];
                    return e.forEach(((e, r) => {
                        n.push(t.call(this, e, r))
                    })), this.waitFor(n)
                }
                static mapArray(e, t) {
                    return new ss(((n, r) => {
                        const s = e.length,
                            i = new Array(s);
                        let o = 0;
                        for (let a = 0; a < s; a++) {
                            const c = a;
                            t(e[c]).next((e => {
                                i[c] = e, ++o, o === s && n(i)
                            }), (e => r(e)))
                        }
                    }))
                }
                static doWhile(e, t) {
                    return new ss(((n, r) => {
                        const s = () => {
                            !0 === e() ? t().next((() => {
                                s()
                            }), r) : n()
                        };
                        s()
                    }))
                }
            }
            class is {
                constructor(e, t) {
                    this.action = e, this.transaction = t, this.aborted = !1, this.R = new Sr, this.transaction.oncomplete = () => {
                        this.R.resolve()
                    }, this.transaction.onabort = () => {
                        t.error ? this.R.reject(new cs(e, t.error)) : this.R.resolve()
                    }, this.transaction.onerror = t => {
                        const n = fs(t.target.error);
                        this.R.reject(new cs(e, n))
                    }
                }
                static open(e, t, n, r) {
                    try {
                        return new is(t, e.transaction(r, n))
                    } catch (e) {
                        throw new cs(t, e)
                    }
                }
                get v() {
                    return this.R.promise
                }
                abort(e) {
                    e && this.R.reject(e), this.aborted || (pr("SimpleDb", "Aborting transaction:", e ? e.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort())
                }
                P() {
                    const e = this.transaction;
                    this.aborted || "function" != typeof e.commit || e.commit()
                }
                store(e) {
                    const t = this.transaction.objectStore(e);
                    return new ls(t)
                }
            }
            class os {
                constructor(e, t, n) {
                    this.name = e, this.version = t, this.V = n, 12.2 === os.S((0, c.z$)()) && yr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")
                }
                static delete(e) {
                    return pr("SimpleDb", "Removing database:", e), hs(window.indexedDB.deleteDatabase(e)).toPromise()
                }
                static D() {
                    if (!(0, c.hl)()) return !1;
                    if (os.C()) return !0;
                    const e = (0, c.z$)(),
                        t = os.S(e),
                        n = 0 < t && t < 10,
                        r = os.N(e),
                        s = 0 < r && r < 4.5;
                    return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0 || n || s)
                }
                static C() {
                    var e;
                    return "undefined" != typeof process && "YES" === (null === (e = "MISSING_ENV_VAR") ? void 0 : e.k)
                }
                static O(e, t) {
                    return e.store(t)
                }
                static S(e) {
                    const t = e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
                        n = t ? t[1].split("_").slice(0, 2).join(".") : "-1";
                    return Number(n)
                }
                static N(e) {
                    const t = e.match(/Android ([\d.]+)/i),
                        n = t ? t[1].split(".").slice(0, 2).join(".") : "-1";
                    return Number(n)
                }
                async $(e) {
                    return this.db || (pr("SimpleDb", "Opening database:", this.name), this.db = await new Promise(((t, n) => {
                        const r = indexedDB.open(this.name, this.version);
                        r.onsuccess = e => {
                            const n = e.target.result;
                            t(n)
                        }, r.onblocked = () => {
                            n(new cs(e, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))
                        }, r.onerror = t => {
                            const r = t.target.error;
                            "VersionError" === r.name ? n(new Tr(Er.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : "InvalidStateError" === r.name ? n(new Tr(Er.FAILED_PRECONDITION, "Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: " + r)) : n(new cs(e, r))
                        }, r.onupgradeneeded = e => {
                            pr("SimpleDb", 'Database "' + this.name + '" requires upgrade from version:', e.oldVersion);
                            const t = e.target.result;
                            this.V.M(t, r.transaction, e.oldVersion, this.version).next((() => {
                                pr("SimpleDb", "Database upgrade to version " + this.version + " complete")
                            }))
                        }
                    }))), this.F && (this.db.onversionchange = e => this.F(e)), this.db
                }
                B(e) {
                    this.F = e, this.db && (this.db.onversionchange = t => e(t))
                }
                async runTransaction(e, t, n, r) {
                    const s = "readonly" === t;
                    let i = 0;
                    for (;;) {
                        ++i;
                        try {
                            this.db = await this.$(e);
                            const t = is.open(this.db, e, s ? "readonly" : "readwrite", n),
                                i = r(t).next((e => (t.P(), e))).catch((e => (t.abort(e), ss.reject(e)))).toPromise();
                            return i.catch((() => {})), await t.v, i
                        } catch (e) {
                            const t = e,
                                n = "FirebaseError" !== t.name && i < 3;
                            if (pr("SimpleDb", "Transaction failed with error:", t.message, "Retrying:", n), this.close(), !n) return Promise.reject(t)
                        }
                    }
                }
                close() {
                    this.db && this.db.close(), this.db = void 0
                }
            }
            class as {
                constructor(e) {
                    this.L = e, this.q = !1, this.U = null
                }
                get isDone() {
                    return this.q
                }
                get K() {
                    return this.U
                }
                set cursor(e) {
                    this.L = e
                }
                done() {
                    this.q = !0
                }
                G(e) {
                    this.U = e
                }
                delete() {
                    return hs(this.L.delete())
                }
            }
            class cs extends Tr {
                constructor(e, t) {
                    super(Er.UNAVAILABLE, `IndexedDB transaction '${e}' failed: ${t}`), this.name = "IndexedDbTransactionError"
                }
            }

            function us(e) {
                return "IndexedDbTransactionError" === e.name
            }
            class ls {
                constructor(e) {
                    this.store = e
                }
                put(e, t) {
                    let n;
                    return void 0 !== t ? (pr("SimpleDb", "PUT", this.store.name, e, t), n = this.store.put(t, e)) : (pr("SimpleDb", "PUT", this.store.name, "<auto-key>", e), n = this.store.put(e)), hs(n)
                }
                add(e) {
                    return pr("SimpleDb", "ADD", this.store.name, e, e), hs(this.store.add(e))
                }
                get(e) {
                    return hs(this.store.get(e)).next((t => (void 0 === t && (t = null), pr("SimpleDb", "GET", this.store.name, e, t), t)))
                }
                delete(e) {
                    return pr("SimpleDb", "DELETE", this.store.name, e), hs(this.store.delete(e))
                }
                count() {
                    return pr("SimpleDb", "COUNT", this.store.name), hs(this.store.count())
                }
                j(e, t) {
                    const n = this.options(e, t);
                    if (n.index || "function" != typeof this.store.getAll) {
                        const e = this.cursor(n),
                            t = [];
                        return this.W(e, ((e, n) => {
                            t.push(n)
                        })).next((() => t))
                    } {
                        const e = this.store.getAll(n.range);
                        return new ss(((t, n) => {
                            e.onerror = e => {
                                n(e.target.error)
                            }, e.onsuccess = e => {
                                t(e.target.result)
                            }
                        }))
                    }
                }
                H(e, t) {
                    const n = this.store.getAll(e, null === t ? void 0 : t);
                    return new ss(((e, t) => {
                        n.onerror = e => {
                            t(e.target.error)
                        }, n.onsuccess = t => {
                            e(t.target.result)
                        }
                    }))
                }
                J(e, t) {
                    pr("SimpleDb", "DELETE ALL", this.store.name);
                    const n = this.options(e, t);
                    n.Y = !1;
                    const r = this.cursor(n);
                    return this.W(r, ((e, t, n) => n.delete()))
                }
                Z(e, t) {
                    let n;
                    t ? n = e : (n = {}, t = e);
                    const r = this.cursor(n);
                    return this.W(r, t)
                }
                X(e) {
                    const t = this.cursor({});
                    return new ss(((n, r) => {
                        t.onerror = e => {
                            const t = fs(e.target.error);
                            r(t)
                        }, t.onsuccess = t => {
                            const r = t.target.result;
                            r ? e(r.primaryKey, r.value).next((e => {
                                e ? r.continue() : n()
                            })) : n()
                        }
                    }))
                }
                W(e, t) {
                    const n = [];
                    return new ss(((r, s) => {
                        e.onerror = e => {
                            s(e.target.error)
                        }, e.onsuccess = e => {
                            const s = e.target.result;
                            if (!s) return void r();
                            const i = new as(s),
                                o = t(s.primaryKey, s.value, i);
                            if (o instanceof ss) {
                                const e = o.catch((e => (i.done(), ss.reject(e))));
                                n.push(e)
                            }
                            i.isDone ? r() : null === i.K ? s.continue() : s.continue(i.K)
                        }
                    })).next((() => ss.waitFor(n)))
                }
                options(e, t) {
                    let n;
                    return void 0 !== e && ("string" == typeof e ? n = e : t = e), {
                        index: n,
                        range: t
                    }
                }
                cursor(e) {
                    let t = "next";
                    if (e.reverse && (t = "prev"), e.index) {
                        const n = this.store.index(e.index);
                        return e.Y ? n.openKeyCursor(e.range, t) : n.openCursor(e.range, t)
                    }
                    return this.store.openCursor(e.range, t)
                }
            }

            function hs(e) {
                return new ss(((t, n) => {
                    e.onsuccess = e => {
                        const n = e.target.result;
                        t(n)
                    }, e.onerror = e => {
                        const t = fs(e.target.error);
                        n(t)
                    }
                }))
            }
            let ds = !1;

            function fs(e) {
                const t = os.S((0, c.z$)());
                if (t >= 12.2 && t < 13) {
                    const t = "An internal error was encountered in the Indexed Database server";
                    if (e.message.indexOf(t) >= 0) {
                        const e = new Tr("internal", `IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);
                        return ds || (ds = !0, setTimeout((() => {
                            throw e
                        }), 0)), e
                    }
                }
                return e
            }
            class gs {
                constructor(e, t) {
                    this.asyncQueue = e, this.tt = t, this.task = null
                }
                start() {
                    this.et(15e3)
                }
                stop() {
                    this.task && (this.task.cancel(), this.task = null)
                }
                get started() {
                    return null !== this.task
                }
                et(e) {
                    pr("IndexBackiller", `Scheduled in ${e}ms`), this.task = this.asyncQueue.enqueueAfterDelay("index_backfill", e, (async () => {
                        this.task = null;
                        try {
                            pr("IndexBackiller", `Documents written: ${await this.tt.nt()}`)
                        } catch (e) {
                            us(e) ? pr("IndexBackiller", "Ignoring IndexedDB error during index backfill: ", e) : await rs(e)
                        }
                        await this.et(6e4)
                    }))
                }
            }
            class ms {
                constructor(e, t) {
                    this.localStore = e, this.persistence = t
                }
                async nt(e = 50) {
                    return this.persistence.runTransaction("Backfill Indexes", "readwrite-primary", (t => this.st(t, e)))
                }
                st(e, t) {
                    const n = new Set;
                    let r = t,
                        s = !0;
                    return ss.doWhile((() => !0 === s && r > 0), (() => this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t => {
                        if (null !== t && !n.has(t)) return pr("IndexBackiller", `Processing collection: ${t}`), this.it(e, t, r).next((e => {
                            r -= e, n.add(t)
                        }));
                        s = !1
                    })))).next((() => t - r))
                }
                it(e, t, n) {
                    return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e, t).next((r => this.localStore.localDocuments.getNextDocuments(e, t, r, n).next((n => {
                        const s = n.changes;
                        return this.localStore.indexManager.updateIndexEntries(e, s).next((() => this.rt(r, n))).next((n => (pr("IndexBackiller", `Updating offset: ${n}`), this.localStore.indexManager.updateCollectionGroup(e, t, n)))).next((() => s.size))
                    }))))
                }
                rt(e, t) {
                    let n = e;
                    return t.changes.forEach(((e, t) => {
                        const r = Jr(t);
                        es(r, n) > 0 && (n = r)
                    })), new Zr(n.readTime, n.documentKey, Math.max(t.batchId, e.largestBatchId))
                }
            }
            class ps {
                constructor(e, t) {
                    this.previousValue = e, t && (t.sequenceNumberHandler = e => this.ot(e), this.ut = e => t.writeSequenceNumber(e))
                }
                ot(e) {
                    return this.previousValue = Math.max(e, this.previousValue), this.previousValue
                }
                next() {
                    const e = ++this.previousValue;
                    return this.ut && this.ut(e), e
                }
            }

            function ys(e) {
                return null == e
            }

            function ws(e) {
                return 0 === e && 1 / e == -1 / 0
            }

            function vs(e) {
                return "number" == typeof e && Number.isInteger(e) && !ws(e) && e <= Number.MAX_SAFE_INTEGER && e >= Number.MIN_SAFE_INTEGER
            }

            function bs(e) {
                let t = "";
                for (let n = 0; n < e.length; n++) t.length > 0 && (t = _s(t)), t = Is(e.get(n), t);
                return _s(t)
            }

            function Is(e, t) {
                let n = t;
                const r = e.length;
                for (let t = 0; t < r; t++) {
                    const r = e.charAt(t);
                    switch (r) {
                        case "\0":
                            n += "";
                            break;
                        case "":
                            n += "";
                            break;
                        default:
                            n += r
                    }
                }
                return n
            }

            function _s(e) {
                return e + ""
            }

            function Es(e) {
                const t = e.length;
                if (Ir(t >= 2), 2 === t) return Ir("" === e.charAt(0) && "" === e.charAt(1)), $r.emptyPath();
                const n = t - 2,
                    r = [];
                let s = "";
                for (let i = 0; i < t;) {
                    const t = e.indexOf("", i);
                    switch ((t < 0 || t > n) && br(), e.charAt(t + 1)) {
                        case "":
                            const n = e.substring(i, t);
                            let o;
                            0 === s.length ? o = n : (s += n, o = s, s = ""), r.push(o);
                            break;
                        case "":
                            s += e.substring(i, t), s += "\0";
                            break;
                        case "":
                            s += e.substring(i, t + 1);
                            break;
                        default:
                            br()
                    }
                    i = t + 2
                }
                return new $r(r)
            }
            ps.ct = -1;
            const Ts = ["userId", "batchId"];

            function Ss(e, t) {
                return [e, bs(t)]
            }

            function Ds(e, t, n) {
                return [e, bs(t), n]
            }
            const Cs = {},
                As = ["prefixPath", "collectionGroup", "readTime", "documentId"],
                xs = ["prefixPath", "collectionGroup", "documentId"],
                Ns = ["collectionGroup", "readTime", "prefixPath", "documentId"],
                ks = ["canonicalId", "targetId"],
                Rs = ["targetId", "path"],
                Os = ["path", "targetId"],
                Ls = ["collectionId", "parent"],
                Ms = ["indexId", "uid"],
                Ps = ["uid", "sequenceNumber"],
                Fs = ["indexId", "uid", "arrayValue", "directionalValue", "orderedDocumentKey", "documentKey"],
                Vs = ["indexId", "uid", "orderedDocumentKey"],
                Us = ["userId", "collectionPath", "documentId"],
                Bs = ["userId", "collectionPath", "largestBatchId"],
                qs = ["userId", "collectionGroup", "largestBatchId"],
                $s = ["mutationQueues", "mutations", "documentMutations", "remoteDocuments", "targets", "owner", "targetGlobal", "targetDocuments", "clientMetadata", "remoteDocumentGlobal", "collectionParents", "bundles", "namedQueries"],
                zs = [...$s, "documentOverlays"],
                js = ["mutationQueues", "mutations", "documentMutations", "remoteDocumentsV14", "targets", "owner", "targetGlobal", "targetDocuments", "clientMetadata", "remoteDocumentGlobal", "collectionParents", "bundles", "namedQueries", "documentOverlays"],
                Gs = js,
                Ks = [...Gs, "indexConfiguration", "indexState", "indexEntries"];
            class Qs extends ns {
                constructor(e, t) {
                    super(), this.at = e, this.currentSequenceNumber = t
                }
            }

            function Ws(e, t) {
                const n = _r(e);
                return os.O(n.at, t)
            }

            function Hs(e) {
                let t = 0;
                for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && t++;
                return t
            }

            function Ys(e, t) {
                for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n])
            }

            function Xs(e) {
                for (const t in e)
                    if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
                return !0
            }
            class Js {
                constructor(e, t) {
                    this.comparator = e, this.root = t || ei.EMPTY
                }
                insert(e, t) {
                    return new Js(this.comparator, this.root.insert(e, t, this.comparator).copy(null, null, ei.BLACK, null, null))
                }
                remove(e) {
                    return new Js(this.comparator, this.root.remove(e, this.comparator).copy(null, null, ei.BLACK, null, null))
                }
                get(e) {
                    let t = this.root;
                    for (; !t.isEmpty();) {
                        const n = this.comparator(e, t.key);
                        if (0 === n) return t.value;
                        n < 0 ? t = t.left : n > 0 && (t = t.right)
                    }
                    return null
                }
                indexOf(e) {
                    let t = 0,
                        n = this.root;
                    for (; !n.isEmpty();) {
                        const r = this.comparator(e, n.key);
                        if (0 === r) return t + n.left.size;
                        r < 0 ? n = n.left : (t += n.left.size + 1, n = n.right)
                    }
                    return -1
                }
                isEmpty() {
                    return this.root.isEmpty()
                }
                get size() {
                    return this.root.size
                }
                minKey() {
                    return this.root.minKey()
                }
                maxKey() {
                    return this.root.maxKey()
                }
                inorderTraversal(e) {
                    return this.root.inorderTraversal(e)
                }
                forEach(e) {
                    this.inorderTraversal(((t, n) => (e(t, n), !1)))
                }
                toString() {
                    const e = [];
                    return this.inorderTraversal(((t, n) => (e.push(`${t}:${n}`), !1))), `{${e.join(", ")}}`
                }
                reverseTraversal(e) {
                    return this.root.reverseTraversal(e)
                }
                getIterator() {
                    return new Zs(this.root, null, this.comparator, !1)
                }
                getIteratorFrom(e) {
                    return new Zs(this.root, e, this.comparator, !1)
                }
                getReverseIterator() {
                    return new Zs(this.root, null, this.comparator, !0)
                }
                getReverseIteratorFrom(e) {
                    return new Zs(this.root, e, this.comparator, !0)
                }
            }
            class Zs {
                constructor(e, t, n, r) {
                    this.isReverse = r, this.nodeStack = [];
                    let s = 1;
                    for (; !e.isEmpty();)
                        if (s = t ? n(e.key, t) : 1, t && r && (s *= -1), s < 0) e = this.isReverse ? e.left : e.right;
                        else {
                            if (0 === s) {
                                this.nodeStack.push(e);
                                break
                            }
                            this.nodeStack.push(e), e = this.isReverse ? e.right : e.left
                        }
                }
                getNext() {
                    let e = this.nodeStack.pop();
                    const t = {
                        key: e.key,
                        value: e.value
                    };
                    if (this.isReverse)
                        for (e = e.left; !e.isEmpty();) this.nodeStack.push(e), e = e.right;
                    else
                        for (e = e.right; !e.isEmpty();) this.nodeStack.push(e), e = e.left;
                    return t
                }
                hasNext() {
                    return this.nodeStack.length > 0
                }
                peek() {
                    if (0 === this.nodeStack.length) return null;
                    const e = this.nodeStack[this.nodeStack.length - 1];
                    return {
                        key: e.key,
                        value: e.value
                    }
                }
            }
            class ei {
                constructor(e, t, n, r, s) {
                    this.key = e, this.value = t, this.color = null != n ? n : ei.RED, this.left = null != r ? r : ei.EMPTY, this.right = null != s ? s : ei.EMPTY, this.size = this.left.size + 1 + this.right.size
                }
                copy(e, t, n, r, s) {
                    return new ei(null != e ? e : this.key, null != t ? t : this.value, null != n ? n : this.color, null != r ? r : this.left, null != s ? s : this.right)
                }
                isEmpty() {
                    return !1
                }
                inorderTraversal(e) {
                    return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e)
                }
                reverseTraversal(e) {
                    return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
                }
                min() {
                    return this.left.isEmpty() ? this : this.left.min()
                }
                minKey() {
                    return this.min().key
                }
                maxKey() {
                    return this.right.isEmpty() ? this.key : this.right.maxKey()
                }
                insert(e, t, n) {
                    let r = this;
                    const s = n(e, r.key);
                    return r = s < 0 ? r.copy(null, null, null, r.left.insert(e, t, n), null) : 0 === s ? r.copy(null, t, null, null, null) : r.copy(null, null, null, null, r.right.insert(e, t, n)), r.fixUp()
                }
                removeMin() {
                    if (this.left.isEmpty()) return ei.EMPTY;
                    let e = this;
                    return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), e = e.copy(null, null, null, e.left.removeMin(), null), e.fixUp()
                }
                remove(e, t) {
                    let n, r = this;
                    if (t(e, r.key) < 0) r.left.isEmpty() || r.left.isRed() || r.left.left.isRed() || (r = r.moveRedLeft()), r = r.copy(null, null, null, r.left.remove(e, t), null);
                    else {
                        if (r.left.isRed() && (r = r.rotateRight()), r.right.isEmpty() || r.right.isRed() || r.right.left.isRed() || (r = r.moveRedRight()), 0 === t(e, r.key)) {
                            if (r.right.isEmpty()) return ei.EMPTY;
                            n = r.right.min(), r = r.copy(n.key, n.value, null, null, r.right.removeMin())
                        }
                        r = r.copy(null, null, null, null, r.right.remove(e, t))
                    }
                    return r.fixUp()
                }
                isRed() {
                    return this.color
                }
                fixUp() {
                    let e = this;
                    return e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()), e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()), e.left.isRed() && e.right.isRed() && (e = e.colorFlip()), e
                }
                moveRedLeft() {
                    let e = this.colorFlip();
                    return e.right.left.isRed() && (e = e.copy(null, null, null, null, e.right.rotateRight()), e = e.rotateLeft(), e = e.colorFlip()), e
                }
                moveRedRight() {
                    let e = this.colorFlip();
                    return e.left.left.isRed() && (e = e.rotateRight(), e = e.colorFlip()), e
                }
                rotateLeft() {
                    const e = this.copy(null, null, ei.RED, null, this.right.left);
                    return this.right.copy(null, null, this.color, e, null)
                }
                rotateRight() {
                    const e = this.copy(null, null, ei.RED, this.left.right, null);
                    return this.left.copy(null, null, this.color, null, e)
                }
                colorFlip() {
                    const e = this.left.copy(null, null, !this.left.color, null, null),
                        t = this.right.copy(null, null, !this.right.color, null, null);
                    return this.copy(null, null, !this.color, e, t)
                }
                checkMaxDepth() {
                    const e = this.check();
                    return Math.pow(2, e) <= this.size + 1
                }
                check() {
                    if (this.isRed() && this.left.isRed()) throw br();
                    if (this.right.isRed()) throw br();
                    const e = this.left.check();
                    if (e !== this.right.check()) throw br();
                    return e + (this.isRed() ? 0 : 1)
                }
            }
            ei.EMPTY = null, ei.RED = !0, ei.BLACK = !1, ei.EMPTY = new class {
                constructor() {
                    this.size = 0
                }
                get key() {
                    throw br()
                }
                get value() {
                    throw br()
                }
                get color() {
                    throw br()
                }
                get left() {
                    throw br()
                }
                get right() {
                    throw br()
                }
                copy(e, t, n, r, s) {
                    return this
                }
                insert(e, t, n) {
                    return new ei(e, t)
                }
                remove(e, t) {
                    return this
                }
                isEmpty() {
                    return !0
                }
                inorderTraversal(e) {
                    return !1
                }
                reverseTraversal(e) {
                    return !1
                }
                minKey() {
                    return null
                }
                maxKey() {
                    return null
                }
                isRed() {
                    return !1
                }
                checkMaxDepth() {
                    return !0
                }
                check() {
                    return 0
                }
            };
            class ti {
                constructor(e) {
                    this.comparator = e, this.data = new Js(this.comparator)
                }
                has(e) {
                    return null !== this.data.get(e)
                }
                first() {
                    return this.data.minKey()
                }
                last() {
                    return this.data.maxKey()
                }
                get size() {
                    return this.data.size
                }
                indexOf(e) {
                    return this.data.indexOf(e)
                }
                forEach(e) {
                    this.data.inorderTraversal(((t, n) => (e(t), !1)))
                }
                forEachInRange(e, t) {
                    const n = this.data.getIteratorFrom(e[0]);
                    for (; n.hasNext();) {
                        const r = n.getNext();
                        if (this.comparator(r.key, e[1]) >= 0) return;
                        t(r.key)
                    }
                }
                forEachWhile(e, t) {
                    let n;
                    for (n = void 0 !== t ? this.data.getIteratorFrom(t) : this.data.getIterator(); n.hasNext();)
                        if (!e(n.getNext().key)) return
                }
                firstAfterOrEqual(e) {
                    const t = this.data.getIteratorFrom(e);
                    return t.hasNext() ? t.getNext().key : null
                }
                getIterator() {
                    return new ni(this.data.getIterator())
                }
                getIteratorFrom(e) {
                    return new ni(this.data.getIteratorFrom(e))
                }
                add(e) {
                    return this.copy(this.data.remove(e).insert(e, !0))
                }
                delete(e) {
                    return this.has(e) ? this.copy(this.data.remove(e)) : this
                }
                isEmpty() {
                    return this.data.isEmpty()
                }
                unionWith(e) {
                    let t = this;
                    return t.size < e.size && (t = e, e = this), e.forEach((e => {
                        t = t.add(e)
                    })), t
                }
                isEqual(e) {
                    if (!(e instanceof ti)) return !1;
                    if (this.size !== e.size) return !1;
                    const t = this.data.getIterator(),
                        n = e.data.getIterator();
                    for (; t.hasNext();) {
                        const e = t.getNext().key,
                            r = n.getNext().key;
                        if (0 !== this.comparator(e, r)) return !1
                    }
                    return !0
                }
                toArray() {
                    const e = [];
                    return this.forEach((t => {
                        e.push(t)
                    })), e
                }
                toString() {
                    const e = [];
                    return this.forEach((t => e.push(t))), "SortedSet(" + e.toString() + ")"
                }
                copy(e) {
                    const t = new ti(this.comparator);
                    return t.data = e, t
                }
            }
            class ni {
                constructor(e) {
                    this.iter = e
                }
                getNext() {
                    return this.iter.getNext().key
                }
                hasNext() {
                    return this.iter.hasNext()
                }
            }

            function ri(e) {
                return e.hasNext() ? e.getNext() : void 0
            }
            class si {
                constructor(e) {
                    this.fields = e, e.sort(jr.comparator)
                }
                static empty() {
                    return new si([])
                }
                unionWith(e) {
                    let t = new ti(jr.comparator);
                    for (const e of this.fields) t = t.add(e);
                    for (const n of e) t = t.add(n);
                    return new si(t.toArray())
                }
                covers(e) {
                    for (const t of this.fields)
                        if (t.isPrefixOf(e)) return !0;
                    return !1
                }
                isEqual(e) {
                    return Fr(this.fields, e.fields, ((e, t) => e.isEqual(t)))
                }
            }
            class ii extends Error {
                constructor() {
                    super(...arguments), this.name = "Base64DecodeError"
                }
            }
            class oi {
                constructor(e) {
                    this.binaryString = e
                }
                static fromBase64String(e) {
                    const t = function (e) {
                        try {
                            return atob(e)
                        } catch (e) {
                            throw "undefined" != typeof DOMException && e instanceof DOMException ? new ii("Invalid base64 string: " + e) : e
                        }
                    }(e);
                    return new oi(t)
                }
                static fromUint8Array(e) {
                    const t = function (e) {
                        let t = "";
                        for (let n = 0; n < e.length; ++n) t += String.fromCharCode(e[n]);
                        return t
                    }(e);
                    return new oi(t)
                } [Symbol.iterator]() {
                    let e = 0;
                    return {
                        next: () => e < this.binaryString.length ? {
                            value: this.binaryString.charCodeAt(e++),
                            done: !1
                        } : {
                            value: void 0,
                            done: !0
                        }
                    }
                }
                toBase64() {
                    return e = this.binaryString, btoa(e);
                    var e
                }
                toUint8Array() {
                    return function (e) {
                        const t = new Uint8Array(e.length);
                        for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
                        return t
                    }(this.binaryString)
                }
                approximateByteSize() {
                    return 2 * this.binaryString.length
                }
                compareTo(e) {
                    return Pr(this.binaryString, e.binaryString)
                }
                isEqual(e) {
                    return this.binaryString === e.binaryString
                }
            }
            oi.EMPTY_BYTE_STRING = new oi("");
            const ai = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

            function ci(e) {
                if (Ir(!!e), "string" == typeof e) {
                    let t = 0;
                    const n = ai.exec(e);
                    if (Ir(!!n), n[1]) {
                        let e = n[1];
                        e = (e + "000000000").substr(0, 9), t = Number(e)
                    }
                    const r = new Date(e);
                    return {
                        seconds: Math.floor(r.getTime() / 1e3),
                        nanos: t
                    }
                }
                return {
                    seconds: ui(e.seconds),
                    nanos: ui(e.nanos)
                }
            }

            function ui(e) {
                return "number" == typeof e ? e : "string" == typeof e ? Number(e) : 0
            }

            function li(e) {
                return "string" == typeof e ? oi.fromBase64String(e) : oi.fromUint8Array(e)
            }

            function hi(e) {
                var t, n;
                return "server_timestamp" === (null === (n = ((null === (t = null == e ? void 0 : e.mapValue) || void 0 === t ? void 0 : t.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue)
            }

            function di(e) {
                const t = e.mapValue.fields.__previous_value__;
                return hi(t) ? di(t) : t
            }

            function fi(e) {
                const t = ci(e.mapValue.fields.__local_write_time__.timestampValue);
                return new Ur(t.seconds, t.nanos)
            }
            class gi {
                constructor(e, t, n, r, s, i, o, a) {
                    this.databaseId = e, this.appId = t, this.persistenceKey = n, this.host = r, this.ssl = s, this.forceLongPolling = i, this.autoDetectLongPolling = o, this.useFetchStreams = a
                }
            }
            class mi {
                constructor(e, t) {
                    this.projectId = e, this.database = t || "(default)"
                }
                static empty() {
                    return new mi("", "")
                }
                get isDefaultDatabase() {
                    return "(default)" === this.database
                }
                isEqual(e) {
                    return e instanceof mi && e.projectId === this.projectId && e.database === this.database
                }
            }
            const pi = {
                    mapValue: {
                        fields: {
                            __type__: {
                                stringValue: "__max__"
                            }
                        }
                    }
                },
                yi = {
                    nullValue: "NULL_VALUE"
                };

            function wi(e) {
                return "nullValue" in e ? 0 : "booleanValue" in e ? 1 : "integerValue" in e || "doubleValue" in e ? 2 : "timestampValue" in e ? 3 : "stringValue" in e ? 5 : "bytesValue" in e ? 6 : "referenceValue" in e ? 7 : "geoPointValue" in e ? 8 : "arrayValue" in e ? 9 : "mapValue" in e ? hi(e) ? 4 : Ri(e) ? 9007199254740991 : 10 : br()
            }

            function vi(e, t) {
                if (e === t) return !0;
                const n = wi(e);
                if (n !== wi(t)) return !1;
                switch (n) {
                    case 0:
                    case 9007199254740991:
                        return !0;
                    case 1:
                        return e.booleanValue === t.booleanValue;
                    case 4:
                        return fi(e).isEqual(fi(t));
                    case 3:
                        return function (e, t) {
                            if ("string" == typeof e.timestampValue && "string" == typeof t.timestampValue && e.timestampValue.length === t.timestampValue.length) return e.timestampValue === t.timestampValue;
                            const n = ci(e.timestampValue),
                                r = ci(t.timestampValue);
                            return n.seconds === r.seconds && n.nanos === r.nanos
                        }(e, t);
                    case 5:
                        return e.stringValue === t.stringValue;
                    case 6:
                        return function (e, t) {
                            return li(e.bytesValue).isEqual(li(t.bytesValue))
                        }(e, t);
                    case 7:
                        return e.referenceValue === t.referenceValue;
                    case 8:
                        return function (e, t) {
                            return ui(e.geoPointValue.latitude) === ui(t.geoPointValue.latitude) && ui(e.geoPointValue.longitude) === ui(t.geoPointValue.longitude)
                        }(e, t);
                    case 2:
                        return function (e, t) {
                            if ("integerValue" in e && "integerValue" in t) return ui(e.integerValue) === ui(t.integerValue);
                            if ("doubleValue" in e && "doubleValue" in t) {
                                const n = ui(e.doubleValue),
                                    r = ui(t.doubleValue);
                                return n === r ? ws(n) === ws(r) : isNaN(n) && isNaN(r)
                            }
                            return !1
                        }(e, t);
                    case 9:
                        return Fr(e.arrayValue.values || [], t.arrayValue.values || [], vi);
                    case 10:
                        return function (e, t) {
                            const n = e.mapValue.fields || {},
                                r = t.mapValue.fields || {};
                            if (Hs(n) !== Hs(r)) return !1;
                            for (const e in n)
                                if (n.hasOwnProperty(e) && (void 0 === r[e] || !vi(n[e], r[e]))) return !1;
                            return !0
                        }(e, t);
                    default:
                        return br()
                }
            }

            function bi(e, t) {
                return void 0 !== (e.values || []).find((e => vi(e, t)))
            }

            function Ii(e, t) {
                if (e === t) return 0;
                const n = wi(e),
                    r = wi(t);
                if (n !== r) return Pr(n, r);
                switch (n) {
                    case 0:
                    case 9007199254740991:
                        return 0;
                    case 1:
                        return Pr(e.booleanValue, t.booleanValue);
                    case 2:
                        return function (e, t) {
                            const n = ui(e.integerValue || e.doubleValue),
                                r = ui(t.integerValue || t.doubleValue);
                            return n < r ? -1 : n > r ? 1 : n === r ? 0 : isNaN(n) ? isNaN(r) ? 0 : -1 : 1
                        }(e, t);
                    case 3:
                        return _i(e.timestampValue, t.timestampValue);
                    case 4:
                        return _i(fi(e), fi(t));
                    case 5:
                        return Pr(e.stringValue, t.stringValue);
                    case 6:
                        return function (e, t) {
                            const n = li(e),
                                r = li(t);
                            return n.compareTo(r)
                        }(e.bytesValue, t.bytesValue);
                    case 7:
                        return function (e, t) {
                            const n = e.split("/"),
                                r = t.split("/");
                            for (let e = 0; e < n.length && e < r.length; e++) {
                                const t = Pr(n[e], r[e]);
                                if (0 !== t) return t
                            }
                            return Pr(n.length, r.length)
                        }(e.referenceValue, t.referenceValue);
                    case 8:
                        return function (e, t) {
                            const n = Pr(ui(e.latitude), ui(t.latitude));
                            return 0 !== n ? n : Pr(ui(e.longitude), ui(t.longitude))
                        }(e.geoPointValue, t.geoPointValue);
                    case 9:
                        return function (e, t) {
                            const n = e.values || [],
                                r = t.values || [];
                            for (let e = 0; e < n.length && e < r.length; ++e) {
                                const t = Ii(n[e], r[e]);
                                if (t) return t
                            }
                            return Pr(n.length, r.length)
                        }(e.arrayValue, t.arrayValue);
                    case 10:
                        return function (e, t) {
                            if (e === pi.mapValue && t === pi.mapValue) return 0;
                            if (e === pi.mapValue) return 1;
                            if (t === pi.mapValue) return -1;
                            const n = e.fields || {},
                                r = Object.keys(n),
                                s = t.fields || {},
                                i = Object.keys(s);
                            r.sort(), i.sort();
                            for (let e = 0; e < r.length && e < i.length; ++e) {
                                const t = Pr(r[e], i[e]);
                                if (0 !== t) return t;
                                const o = Ii(n[r[e]], s[i[e]]);
                                if (0 !== o) return o
                            }
                            return Pr(r.length, i.length)
                        }(e.mapValue, t.mapValue);
                    default:
                        throw br()
                }
            }

            function _i(e, t) {
                if ("string" == typeof e && "string" == typeof t && e.length === t.length) return Pr(e, t);
                const n = ci(e),
                    r = ci(t),
                    s = Pr(n.seconds, r.seconds);
                return 0 !== s ? s : Pr(n.nanos, r.nanos)
            }

            function Ei(e) {
                return Ti(e)
            }

            function Ti(e) {
                return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function (e) {
                    const t = ci(e);
                    return `time(${t.seconds},${t.nanos})`
                }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? li(e.bytesValue).toBase64() : "referenceValue" in e ? (n = e.referenceValue, Gr.fromName(n).toString()) : "geoPointValue" in e ? `geo(${(t=e.geoPointValue).latitude},${t.longitude})` : "arrayValue" in e ? function (e) {
                    let t = "[",
                        n = !0;
                    for (const r of e.values || []) n ? n = !1 : t += ",", t += Ti(r);
                    return t + "]"
                }(e.arrayValue) : "mapValue" in e ? function (e) {
                    const t = Object.keys(e.fields || {}).sort();
                    let n = "{",
                        r = !0;
                    for (const s of t) r ? r = !1 : n += ",", n += `${s}:${Ti(e.fields[s])}`;
                    return n + "}"
                }(e.mapValue) : br();
                var t, n
            }

            function Si(e, t) {
                return {
                    referenceValue: `projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`
                }
            }

            function Di(e) {
                return !!e && "integerValue" in e
            }

            function Ci(e) {
                return !!e && "arrayValue" in e
            }

            function Ai(e) {
                return !!e && "nullValue" in e
            }

            function xi(e) {
                return !!e && "doubleValue" in e && isNaN(Number(e.doubleValue))
            }

            function Ni(e) {
                return !!e && "mapValue" in e
            }

            function ki(e) {
                if (e.geoPointValue) return {
                    geoPointValue: Object.assign({}, e.geoPointValue)
                };
                if (e.timestampValue && "object" == typeof e.timestampValue) return {
                    timestampValue: Object.assign({}, e.timestampValue)
                };
                if (e.mapValue) {
                    const t = {
                        mapValue: {
                            fields: {}
                        }
                    };
                    return Ys(e.mapValue.fields, ((e, n) => t.mapValue.fields[e] = ki(n))), t
                }
                if (e.arrayValue) {
                    const t = {
                        arrayValue: {
                            values: []
                        }
                    };
                    for (let n = 0; n < (e.arrayValue.values || []).length; ++n) t.arrayValue.values[n] = ki(e.arrayValue.values[n]);
                    return t
                }
                return Object.assign({}, e)
            }

            function Ri(e) {
                return "__max__" === (((e.mapValue || {}).fields || {}).__type__ || {}).stringValue
            }

            function Oi(e) {
                return "nullValue" in e ? yi : "booleanValue" in e ? {
                    booleanValue: !1
                } : "integerValue" in e || "doubleValue" in e ? {
                    doubleValue: NaN
                } : "timestampValue" in e ? {
                    timestampValue: {
                        seconds: Number.MIN_SAFE_INTEGER
                    }
                } : "stringValue" in e ? {
                    stringValue: ""
                } : "bytesValue" in e ? {
                    bytesValue: ""
                } : "referenceValue" in e ? Si(mi.empty(), Gr.empty()) : "geoPointValue" in e ? {
                    geoPointValue: {
                        latitude: -90,
                        longitude: -180
                    }
                } : "arrayValue" in e ? {
                    arrayValue: {}
                } : "mapValue" in e ? {
                    mapValue: {}
                } : br()
            }

            function Li(e) {
                return "nullValue" in e ? {
                    booleanValue: !1
                } : "booleanValue" in e ? {
                    doubleValue: NaN
                } : "integerValue" in e || "doubleValue" in e ? {
                    timestampValue: {
                        seconds: Number.MIN_SAFE_INTEGER
                    }
                } : "timestampValue" in e ? {
                    stringValue: ""
                } : "stringValue" in e ? {
                    bytesValue: ""
                } : "bytesValue" in e ? Si(mi.empty(), Gr.empty()) : "referenceValue" in e ? {
                    geoPointValue: {
                        latitude: -90,
                        longitude: -180
                    }
                } : "geoPointValue" in e ? {
                    arrayValue: {}
                } : "arrayValue" in e ? {
                    mapValue: {}
                } : "mapValue" in e ? pi : br()
            }

            function Mi(e, t) {
                const n = Ii(e.value, t.value);
                return 0 !== n ? n : e.inclusive && !t.inclusive ? -1 : !e.inclusive && t.inclusive ? 1 : 0
            }

            function Pi(e, t) {
                const n = Ii(e.value, t.value);
                return 0 !== n ? n : e.inclusive && !t.inclusive ? 1 : !e.inclusive && t.inclusive ? -1 : 0
            }
            class Fi {
                constructor(e) {
                    this.value = e
                }
                static empty() {
                    return new Fi({
                        mapValue: {}
                    })
                }
                field(e) {
                    if (e.isEmpty()) return this.value; {
                        let t = this.value;
                        for (let n = 0; n < e.length - 1; ++n)
                            if (t = (t.mapValue.fields || {})[e.get(n)], !Ni(t)) return null;
                        return t = (t.mapValue.fields || {})[e.lastSegment()], t || null
                    }
                }
                set(e, t) {
                    this.getFieldsMap(e.popLast())[e.lastSegment()] = ki(t)
                }
                setAll(e) {
                    let t = jr.emptyPath(),
                        n = {},
                        r = [];
                    e.forEach(((e, s) => {
                        if (!t.isImmediateParentOf(s)) {
                            const e = this.getFieldsMap(t);
                            this.applyChanges(e, n, r), n = {}, r = [], t = s.popLast()
                        }
                        e ? n[s.lastSegment()] = ki(e) : r.push(s.lastSegment())
                    }));
                    const s = this.getFieldsMap(t);
                    this.applyChanges(s, n, r)
                }
                delete(e) {
                    const t = this.field(e.popLast());
                    Ni(t) && t.mapValue.fields && delete t.mapValue.fields[e.lastSegment()]
                }
                isEqual(e) {
                    return vi(this.value, e.value)
                }
                getFieldsMap(e) {
                    let t = this.value;
                    t.mapValue.fields || (t.mapValue = {
                        fields: {}
                    });
                    for (let n = 0; n < e.length; ++n) {
                        let r = t.mapValue.fields[e.get(n)];
                        Ni(r) && r.mapValue.fields || (r = {
                            mapValue: {
                                fields: {}
                            }
                        }, t.mapValue.fields[e.get(n)] = r), t = r
                    }
                    return t.mapValue.fields
                }
                applyChanges(e, t, n) {
                    Ys(t, ((t, n) => e[t] = n));
                    for (const t of n) delete e[t]
                }
                clone() {
                    return new Fi(ki(this.value))
                }
            }

            function Vi(e) {
                const t = [];
                return Ys(e.fields, ((e, n) => {
                    const r = new jr([e]);
                    if (Ni(n)) {
                        const e = Vi(n.mapValue).fields;
                        if (0 === e.length) t.push(r);
                        else
                            for (const n of e) t.push(r.child(n))
                    } else t.push(r)
                })), new si(t)
            }
            class Ui {
                constructor(e, t, n, r, s, i, o) {
                    this.key = e, this.documentType = t, this.version = n, this.readTime = r, this.createTime = s, this.data = i, this.documentState = o
                }
                static newInvalidDocument(e) {
                    return new Ui(e, 0, Br.min(), Br.min(), Br.min(), Fi.empty(), 0)
                }
                static newFoundDocument(e, t, n, r) {
                    return new Ui(e, 1, t, Br.min(), n, r, 0)
                }
                static newNoDocument(e, t) {
                    return new Ui(e, 2, t, Br.min(), Br.min(), Fi.empty(), 0)
                }
                static newUnknownDocument(e, t) {
                    return new Ui(e, 3, t, Br.min(), Br.min(), Fi.empty(), 2)
                }
                convertToFoundDocument(e, t) {
                    return !this.createTime.isEqual(Br.min()) || 2 !== this.documentType && 0 !== this.documentType || (this.createTime = e), this.version = e, this.documentType = 1, this.data = t, this.documentState = 0, this
                }
                convertToNoDocument(e) {
                    return this.version = e, this.documentType = 2, this.data = Fi.empty(), this.documentState = 0, this
                }
                convertToUnknownDocument(e) {
                    return this.version = e, this.documentType = 3, this.data = Fi.empty(), this.documentState = 2, this
                }
                setHasCommittedMutations() {
                    return this.documentState = 2, this
                }
                setHasLocalMutations() {
                    return this.documentState = 1, this.version = Br.min(), this
                }
                setReadTime(e) {
                    return this.readTime = e, this
                }
                get hasLocalMutations() {
                    return 1 === this.documentState
                }
                get hasCommittedMutations() {
                    return 2 === this.documentState
                }
                get hasPendingWrites() {
                    return this.hasLocalMutations || this.hasCommittedMutations
                }
                isValidDocument() {
                    return 0 !== this.documentType
                }
                isFoundDocument() {
                    return 1 === this.documentType
                }
                isNoDocument() {
                    return 2 === this.documentType
                }
                isUnknownDocument() {
                    return 3 === this.documentType
                }
                isEqual(e) {
                    return e instanceof Ui && this.key.isEqual(e.key) && this.version.isEqual(e.version) && this.documentType === e.documentType && this.documentState === e.documentState && this.data.isEqual(e.data)
                }
                mutableCopy() {
                    return new Ui(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState)
                }
                toString() {
                    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`
                }
            }
            class Bi {
                constructor(e, t) {
                    this.position = e, this.inclusive = t
                }
            }

            function qi(e, t, n) {
                let r = 0;
                for (let s = 0; s < e.position.length; s++) {
                    const i = t[s],
                        o = e.position[s];
                    if (r = i.field.isKeyField() ? Gr.comparator(Gr.fromName(o.referenceValue), n.key) : Ii(o, n.data.field(i.field)), "desc" === i.dir && (r *= -1), 0 !== r) break
                }
                return r
            }

            function $i(e, t) {
                if (null === e) return null === t;
                if (null === t) return !1;
                if (e.inclusive !== t.inclusive || e.position.length !== t.position.length) return !1;
                for (let n = 0; n < e.position.length; n++)
                    if (!vi(e.position[n], t.position[n])) return !1;
                return !0
            }
            class zi {
                constructor(e, t = "asc") {
                    this.field = e, this.dir = t
                }
            }

            function ji(e, t) {
                return e.dir === t.dir && e.field.isEqual(t.field)
            }
            class Gi {}
            class Ki extends Gi {
                constructor(e, t, n) {
                    super(), this.field = e, this.op = t, this.value = n
                }
                static create(e, t, n) {
                    return e.isKeyField() ? "in" === t || "not-in" === t ? this.createKeyFieldInFilter(e, t, n) : new no(e, t, n) : "array-contains" === t ? new oo(e, n) : "in" === t ? new ao(e, n) : "not-in" === t ? new co(e, n) : "array-contains-any" === t ? new uo(e, n) : new Ki(e, t, n)
                }
                static createKeyFieldInFilter(e, t, n) {
                    return "in" === t ? new ro(e, n) : new so(e, n)
                }
                matches(e) {
                    const t = e.data.field(this.field);
                    return "!=" === this.op ? null !== t && this.matchesComparison(Ii(t, this.value)) : null !== t && wi(this.value) === wi(t) && this.matchesComparison(Ii(t, this.value))
                }
                matchesComparison(e) {
                    switch (this.op) {
                        case "<":
                            return e < 0;
                        case "<=":
                            return e <= 0;
                        case "==":
                            return 0 === e;
                        case "!=":
                            return 0 !== e;
                        case ">":
                            return e > 0;
                        case ">=":
                            return e >= 0;
                        default:
                            return br()
                    }
                }
                isInequality() {
                    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0
                }
                getFlattenedFilters() {
                    return [this]
                }
                getFilters() {
                    return [this]
                }
                getFirstInequalityField() {
                    return this.isInequality() ? this.field : null
                }
            }
            class Qi extends Gi {
                constructor(e, t) {
                    super(), this.filters = e, this.op = t, this.ht = null
                }
                static create(e, t) {
                    return new Qi(e, t)
                }
                matches(e) {
                    return Wi(this) ? void 0 === this.filters.find((t => !t.matches(e))) : void 0 !== this.filters.find((t => t.matches(e)))
                }
                getFlattenedFilters() {
                    return null !== this.ht || (this.ht = this.filters.reduce(((e, t) => e.concat(t.getFlattenedFilters())), [])), this.ht
                }
                getFilters() {
                    return Object.assign([], this.filters)
                }
                getFirstInequalityField() {
                    const e = this.lt((e => e.isInequality()));
                    return null !== e ? e.field : null
                }
                lt(e) {
                    for (const t of this.getFlattenedFilters())
                        if (e(t)) return t;
                    return null
                }
            }

            function Wi(e) {
                return "and" === e.op
            }

            function Hi(e) {
                return "or" === e.op
            }

            function Yi(e) {
                return Xi(e) && Wi(e)
            }

            function Xi(e) {
                for (const t of e.filters)
                    if (t instanceof Qi) return !1;
                return !0
            }

            function Ji(e) {
                if (e instanceof Ki) return e.field.canonicalString() + e.op.toString() + Ei(e.value);
                if (Yi(e)) return e.filters.map((e => Ji(e))).join(","); {
                    const t = e.filters.map((e => Ji(e))).join(",");
                    return `${e.op}(${t})`
                }
            }

            function Zi(e, t) {
                return e instanceof Ki ? function (e, t) {
                    return t instanceof Ki && e.op === t.op && e.field.isEqual(t.field) && vi(e.value, t.value)
                }(e, t) : e instanceof Qi ? function (e, t) {
                    return t instanceof Qi && e.op === t.op && e.filters.length === t.filters.length && e.filters.reduce(((e, n, r) => e && Zi(n, t.filters[r])), !0)
                }(e, t) : void br()
            }

            function eo(e, t) {
                const n = e.filters.concat(t);
                return Qi.create(n, e.op)
            }

            function to(e) {
                return e instanceof Ki ? function (e) {
                    return `${e.field.canonicalString()} ${e.op} ${Ei(e.value)}`
                }(e) : e instanceof Qi ? function (e) {
                    return e.op.toString() + " {" + e.getFilters().map(to).join(" ,") + "}"
                }(e) : "Filter"
            }
            class no extends Ki {
                constructor(e, t, n) {
                    super(e, t, n), this.key = Gr.fromName(n.referenceValue)
                }
                matches(e) {
                    const t = Gr.comparator(e.key, this.key);
                    return this.matchesComparison(t)
                }
            }
            class ro extends Ki {
                constructor(e, t) {
                    super(e, "in", t), this.keys = io("in", t)
                }
                matches(e) {
                    return this.keys.some((t => t.isEqual(e.key)))
                }
            }
            class so extends Ki {
                constructor(e, t) {
                    super(e, "not-in", t), this.keys = io("not-in", t)
                }
                matches(e) {
                    return !this.keys.some((t => t.isEqual(e.key)))
                }
            }

            function io(e, t) {
                var n;
                return ((null === (n = t.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((e => Gr.fromName(e.referenceValue)))
            }
            class oo extends Ki {
                constructor(e, t) {
                    super(e, "array-contains", t)
                }
                matches(e) {
                    const t = e.data.field(this.field);
                    return Ci(t) && bi(t.arrayValue, this.value)
                }
            }
            class ao extends Ki {
                constructor(e, t) {
                    super(e, "in", t)
                }
                matches(e) {
                    const t = e.data.field(this.field);
                    return null !== t && bi(this.value.arrayValue, t)
                }
            }
            class co extends Ki {
                constructor(e, t) {
                    super(e, "not-in", t)
                }
                matches(e) {
                    if (bi(this.value.arrayValue, {
                            nullValue: "NULL_VALUE"
                        })) return !1;
                    const t = e.data.field(this.field);
                    return null !== t && !bi(this.value.arrayValue, t)
                }
            }
            class uo extends Ki {
                constructor(e, t) {
                    super(e, "array-contains-any", t)
                }
                matches(e) {
                    const t = e.data.field(this.field);
                    return !(!Ci(t) || !t.arrayValue.values) && t.arrayValue.values.some((e => bi(this.value.arrayValue, e)))
                }
            }
            class lo {
                constructor(e, t = null, n = [], r = [], s = null, i = null, o = null) {
                    this.path = e, this.collectionGroup = t, this.orderBy = n, this.filters = r, this.limit = s, this.startAt = i, this.endAt = o, this.ft = null
                }
            }

            function ho(e, t = null, n = [], r = [], s = null, i = null, o = null) {
                return new lo(e, t, n, r, s, i, o)
            }

            function fo(e) {
                const t = _r(e);
                if (null === t.ft) {
                    let e = t.path.canonicalString();
                    null !== t.collectionGroup && (e += "|cg:" + t.collectionGroup), e += "|f:", e += t.filters.map((e => Ji(e))).join(","), e += "|ob:", e += t.orderBy.map((e => function (e) {
                        return e.field.canonicalString() + e.dir
                    }(e))).join(","), ys(t.limit) || (e += "|l:", e += t.limit), t.startAt && (e += "|lb:", e += t.startAt.inclusive ? "b:" : "a:", e += t.startAt.position.map((e => Ei(e))).join(",")), t.endAt && (e += "|ub:", e += t.endAt.inclusive ? "a:" : "b:", e += t.endAt.position.map((e => Ei(e))).join(",")), t.ft = e
                }
                return t.ft
            }

            function go(e, t) {
                if (e.limit !== t.limit) return !1;
                if (e.orderBy.length !== t.orderBy.length) return !1;
                for (let n = 0; n < e.orderBy.length; n++)
                    if (!ji(e.orderBy[n], t.orderBy[n])) return !1;
                if (e.filters.length !== t.filters.length) return !1;
                for (let n = 0; n < e.filters.length; n++)
                    if (!Zi(e.filters[n], t.filters[n])) return !1;
                return e.collectionGroup === t.collectionGroup && !!e.path.isEqual(t.path) && !!$i(e.startAt, t.startAt) && $i(e.endAt, t.endAt)
            }

            function mo(e) {
                return Gr.isDocumentKey(e.path) && null === e.collectionGroup && 0 === e.filters.length
            }

            function po(e, t) {
                return e.filters.filter((e => e instanceof Ki && e.field.isEqual(t)))
            }

            function yo(e, t, n) {
                let r = yi,
                    s = !0;
                for (const n of po(e, t)) {
                    let e = yi,
                        t = !0;
                    switch (n.op) {
                        case "<":
                        case "<=":
                            e = Oi(n.value);
                            break;
                        case "==":
                        case "in":
                        case ">=":
                            e = n.value;
                            break;
                        case ">":
                            e = n.value, t = !1;
                            break;
                        case "!=":
                        case "not-in":
                            e = yi
                    }
                    Mi({
                        value: r,
                        inclusive: s
                    }, {
                        value: e,
                        inclusive: t
                    }) < 0 && (r = e, s = t)
                }
                if (null !== n)
                    for (let i = 0; i < e.orderBy.length; ++i)
                        if (e.orderBy[i].field.isEqual(t)) {
                            const e = n.position[i];
                            Mi({
                                value: r,
                                inclusive: s
                            }, {
                                value: e,
                                inclusive: n.inclusive
                            }) < 0 && (r = e, s = n.inclusive);
                            break
                        } return {
                    value: r,
                    inclusive: s
                }
            }

            function wo(e, t, n) {
                let r = pi,
                    s = !0;
                for (const n of po(e, t)) {
                    let e = pi,
                        t = !0;
                    switch (n.op) {
                        case ">=":
                        case ">":
                            e = Li(n.value), t = !1;
                            break;
                        case "==":
                        case "in":
                        case "<=":
                            e = n.value;
                            break;
                        case "<":
                            e = n.value, t = !1;
                            break;
                        case "!=":
                        case "not-in":
                            e = pi
                    }
                    Pi({
                        value: r,
                        inclusive: s
                    }, {
                        value: e,
                        inclusive: t
                    }) > 0 && (r = e, s = t)
                }
                if (null !== n)
                    for (let i = 0; i < e.orderBy.length; ++i)
                        if (e.orderBy[i].field.isEqual(t)) {
                            const e = n.position[i];
                            Pi({
                                value: r,
                                inclusive: s
                            }, {
                                value: e,
                                inclusive: n.inclusive
                            }) > 0 && (r = e, s = n.inclusive);
                            break
                        } return {
                    value: r,
                    inclusive: s
                }
            }
            class vo {
                constructor(e, t = null, n = [], r = [], s = null, i = "F", o = null, a = null) {
                    this.path = e, this.collectionGroup = t, this.explicitOrderBy = n, this.filters = r, this.limit = s, this.limitType = i, this.startAt = o, this.endAt = a, this.dt = null, this.wt = null, this.startAt, this.endAt
                }
            }

            function bo(e, t, n, r, s, i, o, a) {
                return new vo(e, t, n, r, s, i, o, a)
            }

            function Io(e) {
                return new vo(e)
            }

            function _o(e) {
                return 0 === e.filters.length && null === e.limit && null == e.startAt && null == e.endAt && (0 === e.explicitOrderBy.length || 1 === e.explicitOrderBy.length && e.explicitOrderBy[0].field.isKeyField())
            }

            function Eo(e) {
                return e.explicitOrderBy.length > 0 ? e.explicitOrderBy[0].field : null
            }

            function To(e) {
                for (const t of e.filters) {
                    const e = t.getFirstInequalityField();
                    if (null !== e) return e
                }
                return null
            }

            function So(e) {
                return null !== e.collectionGroup
            }

            function Do(e) {
                const t = _r(e);
                if (null === t.dt) {
                    t.dt = [];
                    const e = To(t),
                        n = Eo(t);
                    if (null !== e && null === n) e.isKeyField() || t.dt.push(new zi(e)), t.dt.push(new zi(jr.keyField(), "asc"));
                    else {
                        let e = !1;
                        for (const n of t.explicitOrderBy) t.dt.push(n), n.field.isKeyField() && (e = !0);
                        if (!e) {
                            const e = t.explicitOrderBy.length > 0 ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir : "asc";
                            t.dt.push(new zi(jr.keyField(), e))
                        }
                    }
                }
                return t.dt
            }

            function Co(e) {
                const t = _r(e);
                if (!t.wt)
                    if ("F" === t.limitType) t.wt = ho(t.path, t.collectionGroup, Do(t), t.filters, t.limit, t.startAt, t.endAt);
                    else {
                        const e = [];
                        for (const n of Do(t)) {
                            const t = "desc" === n.dir ? "asc" : "desc";
                            e.push(new zi(n.field, t))
                        }
                        const n = t.endAt ? new Bi(t.endAt.position, t.endAt.inclusive) : null,
                            r = t.startAt ? new Bi(t.startAt.position, t.startAt.inclusive) : null;
                        t.wt = ho(t.path, t.collectionGroup, e, t.filters, t.limit, n, r)
                    } return t.wt
            }

            function Ao(e, t) {
                t.getFirstInequalityField(), To(e);
                const n = e.filters.concat([t]);
                return new vo(e.path, e.collectionGroup, e.explicitOrderBy.slice(), n, e.limit, e.limitType, e.startAt, e.endAt)
            }

            function xo(e, t, n) {
                return new vo(e.path, e.collectionGroup, e.explicitOrderBy.slice(), e.filters.slice(), t, n, e.startAt, e.endAt)
            }

            function No(e, t) {
                return go(Co(e), Co(t)) && e.limitType === t.limitType
            }

            function ko(e) {
                return `${fo(Co(e))}|lt:${e.limitType}`
            }

            function Ro(e) {
                return `Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>to(e))).join(", ")}]`),ys(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Ei(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Ei(e))).join(",")),`Target(${t})`}(Co(e))}; limitType=${e.limitType})`
            }

            function Oo(e, t) {
                return t.isFoundDocument() && function (e, t) {
                    const n = t.key.path;
                    return null !== e.collectionGroup ? t.key.hasCollectionId(e.collectionGroup) && e.path.isPrefixOf(n) : Gr.isDocumentKey(e.path) ? e.path.isEqual(n) : e.path.isImmediateParentOf(n)
                }(e, t) && function (e, t) {
                    for (const n of Do(e))
                        if (!n.field.isKeyField() && null === t.data.field(n.field)) return !1;
                    return !0
                }(e, t) && function (e, t) {
                    for (const n of e.filters)
                        if (!n.matches(t)) return !1;
                    return !0
                }(e, t) && function (e, t) {
                    return !(e.startAt && ! function (e, t, n) {
                        const r = qi(e, t, n);
                        return e.inclusive ? r <= 0 : r < 0
                    }(e.startAt, Do(e), t)) && !(e.endAt && ! function (e, t, n) {
                        const r = qi(e, t, n);
                        return e.inclusive ? r >= 0 : r > 0
                    }(e.endAt, Do(e), t))
                }(e, t)
            }

            function Lo(e) {
                return e.collectionGroup || (e.path.length % 2 == 1 ? e.path.lastSegment() : e.path.get(e.path.length - 2))
            }

            function Mo(e) {
                return (t, n) => {
                    let r = !1;
                    for (const s of Do(e)) {
                        const e = Po(s, t, n);
                        if (0 !== e) return e;
                        r = r || s.field.isKeyField()
                    }
                    return 0
                }
            }

            function Po(e, t, n) {
                const r = e.field.isKeyField() ? Gr.comparator(t.key, n.key) : function (e, t, n) {
                    const r = t.data.field(e),
                        s = n.data.field(e);
                    return null !== r && null !== s ? Ii(r, s) : br()
                }(e.field, t, n);
                switch (e.dir) {
                    case "asc":
                        return r;
                    case "desc":
                        return -1 * r;
                    default:
                        return br()
                }
            }
            class Fo {
                constructor(e, t) {
                    this.mapKeyFn = e, this.equalsFn = t, this.inner = {}, this.innerSize = 0
                }
                get(e) {
                    const t = this.mapKeyFn(e),
                        n = this.inner[t];
                    if (void 0 !== n)
                        for (const [t, r] of n)
                            if (this.equalsFn(t, e)) return r
                }
                has(e) {
                    return void 0 !== this.get(e)
                }
                set(e, t) {
                    const n = this.mapKeyFn(e),
                        r = this.inner[n];
                    if (void 0 === r) return this.inner[n] = [
                        [e, t]
                    ], void this.innerSize++;
                    for (let n = 0; n < r.length; n++)
                        if (this.equalsFn(r[n][0], e)) return void(r[n] = [e, t]);
                    r.push([e, t]), this.innerSize++
                }
                delete(e) {
                    const t = this.mapKeyFn(e),
                        n = this.inner[t];
                    if (void 0 === n) return !1;
                    for (let r = 0; r < n.length; r++)
                        if (this.equalsFn(n[r][0], e)) return 1 === n.length ? delete this.inner[t] : n.splice(r, 1), this.innerSize--, !0;
                    return !1
                }
                forEach(e) {
                    Ys(this.inner, ((t, n) => {
                        for (const [t, r] of n) e(t, r)
                    }))
                }
                isEmpty() {
                    return Xs(this.inner)
                }
                size() {
                    return this.innerSize
                }
            }
            const Vo = new Js(Gr.comparator);

            function Uo() {
                return Vo
            }
            const Bo = new Js(Gr.comparator);

            function qo(...e) {
                let t = Bo;
                for (const n of e) t = t.insert(n.key, n);
                return t
            }

            function $o(e) {
                let t = Bo;
                return e.forEach(((e, n) => t = t.insert(e, n.overlayedDocument))), t
            }

            function zo() {
                return Go()
            }

            function jo() {
                return Go()
            }

            function Go() {
                return new Fo((e => e.toString()), ((e, t) => e.isEqual(t)))
            }
            const Ko = new Js(Gr.comparator),
                Qo = new ti(Gr.comparator);

            function Wo(...e) {
                let t = Qo;
                for (const n of e) t = t.add(n);
                return t
            }
            const Ho = new ti(Pr);

            function Yo() {
                return Ho
            }

            function Xo(e, t) {
                if (e.useProto3Json) {
                    if (isNaN(t)) return {
                        doubleValue: "NaN"
                    };
                    if (t === 1 / 0) return {
                        doubleValue: "Infinity"
                    };
                    if (t === -1 / 0) return {
                        doubleValue: "-Infinity"
                    }
                }
                return {
                    doubleValue: ws(t) ? "-0" : t
                }
            }

            function Jo(e) {
                return {
                    integerValue: "" + e
                }
            }

            function Zo(e, t) {
                return vs(t) ? Jo(t) : Xo(e, t)
            }
            class ea {
                constructor() {
                    this._ = void 0
                }
            }

            function ta(e, t, n) {
                return e instanceof sa ? function (e, t) {
                    const n = {
                        fields: {
                            __type__: {
                                stringValue: "server_timestamp"
                            },
                            __local_write_time__: {
                                timestampValue: {
                                    seconds: e.seconds,
                                    nanos: e.nanoseconds
                                }
                            }
                        }
                    };
                    return t && (n.fields.__previous_value__ = t), {
                        mapValue: n
                    }
                }(n, t) : e instanceof ia ? oa(e, t) : e instanceof aa ? ca(e, t) : function (e, t) {
                    const n = ra(e, t),
                        r = la(n) + la(e._t);
                    return Di(n) && Di(e._t) ? Jo(r) : Xo(e.serializer, r)
                }(e, t)
            }

            function na(e, t, n) {
                return e instanceof ia ? oa(e, t) : e instanceof aa ? ca(e, t) : n
            }

            function ra(e, t) {
                return e instanceof ua ? Di(n = t) || function (e) {
                    return !!e && "doubleValue" in e
                }(n) ? t : {
                    integerValue: 0
                } : null;
                var n
            }
            class sa extends ea {}
            class ia extends ea {
                constructor(e) {
                    super(), this.elements = e
                }
            }

            function oa(e, t) {
                const n = ha(t);
                for (const t of e.elements) n.some((e => vi(e, t))) || n.push(t);
                return {
                    arrayValue: {
                        values: n
                    }
                }
            }
            class aa extends ea {
                constructor(e) {
                    super(), this.elements = e
                }
            }

            function ca(e, t) {
                let n = ha(t);
                for (const t of e.elements) n = n.filter((e => !vi(e, t)));
                return {
                    arrayValue: {
                        values: n
                    }
                }
            }
            class ua extends ea {
                constructor(e, t) {
                    super(), this.serializer = e, this._t = t
                }
            }

            function la(e) {
                return ui(e.integerValue || e.doubleValue)
            }

            function ha(e) {
                return Ci(e) && e.arrayValue.values ? e.arrayValue.values.slice() : []
            }
            class da {
                constructor(e, t) {
                    this.field = e, this.transform = t
                }
            }
            class fa {
                constructor(e, t) {
                    this.version = e, this.transformResults = t
                }
            }
            class ga {
                constructor(e, t) {
                    this.updateTime = e, this.exists = t
                }
                static none() {
                    return new ga
                }
                static exists(e) {
                    return new ga(void 0, e)
                }
                static updateTime(e) {
                    return new ga(e)
                }
                get isNone() {
                    return void 0 === this.updateTime && void 0 === this.exists
                }
                isEqual(e) {
                    return this.exists === e.exists && (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime)
                }
            }

            function ma(e, t) {
                return void 0 !== e.updateTime ? t.isFoundDocument() && t.version.isEqual(e.updateTime) : void 0 === e.exists || e.exists === t.isFoundDocument()
            }
            class pa {}

            function ya(e, t) {
                if (!e.hasLocalMutations || t && 0 === t.fields.length) return null;
                if (null === t) return e.isNoDocument() ? new Ca(e.key, ga.none()) : new _a(e.key, e.data, ga.none()); {
                    const n = e.data,
                        r = Fi.empty();
                    let s = new ti(jr.comparator);
                    for (let e of t.fields)
                        if (!s.has(e)) {
                            let t = n.field(e);
                            null === t && e.length > 1 && (e = e.popLast(), t = n.field(e)), null === t ? r.delete(e) : r.set(e, t), s = s.add(e)
                        } return new Ea(e.key, r, new si(s.toArray()), ga.none())
                }
            }

            function wa(e, t, n) {
                e instanceof _a ? function (e, t, n) {
                    const r = e.value.clone(),
                        s = Sa(e.fieldTransforms, t, n.transformResults);
                    r.setAll(s), t.convertToFoundDocument(n.version, r).setHasCommittedMutations()
                }(e, t, n) : e instanceof Ea ? function (e, t, n) {
                    if (!ma(e.precondition, t)) return void t.convertToUnknownDocument(n.version);
                    const r = Sa(e.fieldTransforms, t, n.transformResults),
                        s = t.data;
                    s.setAll(Ta(e)), s.setAll(r), t.convertToFoundDocument(n.version, s).setHasCommittedMutations()
                }(e, t, n) : function (e, t, n) {
                    t.convertToNoDocument(n.version).setHasCommittedMutations()
                }(0, t, n)
            }

            function va(e, t, n, r) {
                return e instanceof _a ? function (e, t, n, r) {
                    if (!ma(e.precondition, t)) return n;
                    const s = e.value.clone(),
                        i = Da(e.fieldTransforms, r, t);
                    return s.setAll(i), t.convertToFoundDocument(t.version, s).setHasLocalMutations(), null
                }(e, t, n, r) : e instanceof Ea ? function (e, t, n, r) {
                    if (!ma(e.precondition, t)) return n;
                    const s = Da(e.fieldTransforms, r, t),
                        i = t.data;
                    return i.setAll(Ta(e)), i.setAll(s), t.convertToFoundDocument(t.version, i).setHasLocalMutations(), null === n ? null : n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e => e.field)))
                }(e, t, n, r) : function (e, t, n) {
                    return ma(e.precondition, t) ? (t.convertToNoDocument(t.version).setHasLocalMutations(), null) : n
                }(e, t, n)
            }

            function ba(e, t) {
                let n = null;
                for (const r of e.fieldTransforms) {
                    const e = t.data.field(r.field),
                        s = ra(r.transform, e || null);
                    null != s && (null === n && (n = Fi.empty()), n.set(r.field, s))
                }
                return n || null
            }

            function Ia(e, t) {
                return e.type === t.type && !!e.key.isEqual(t.key) && !!e.precondition.isEqual(t.precondition) && !! function (e, t) {
                    return void 0 === e && void 0 === t || !(!e || !t) && Fr(e, t, ((e, t) => function (e, t) {
                        return e.field.isEqual(t.field) && function (e, t) {
                            return e instanceof ia && t instanceof ia || e instanceof aa && t instanceof aa ? Fr(e.elements, t.elements, vi) : e instanceof ua && t instanceof ua ? vi(e._t, t._t) : e instanceof sa && t instanceof sa
                        }(e.transform, t.transform)
                    }(e, t)))
                }(e.fieldTransforms, t.fieldTransforms) && (0 === e.type ? e.value.isEqual(t.value) : 1 !== e.type || e.data.isEqual(t.data) && e.fieldMask.isEqual(t.fieldMask))
            }
            class _a extends pa {
                constructor(e, t, n, r = []) {
                    super(), this.key = e, this.value = t, this.precondition = n, this.fieldTransforms = r, this.type = 0
                }
                getFieldMask() {
                    return null
                }
            }
            class Ea extends pa {
                constructor(e, t, n, r, s = []) {
                    super(), this.key = e, this.data = t, this.fieldMask = n, this.precondition = r, this.fieldTransforms = s, this.type = 1
                }
                getFieldMask() {
                    return this.fieldMask
                }
            }

            function Ta(e) {
                const t = new Map;
                return e.fieldMask.fields.forEach((n => {
                    if (!n.isEmpty()) {
                        const r = e.data.field(n);
                        t.set(n, r)
                    }
                })), t
            }

            function Sa(e, t, n) {
                const r = new Map;
                Ir(e.length === n.length);
                for (let s = 0; s < n.length; s++) {
                    const i = e[s],
                        o = i.transform,
                        a = t.data.field(i.field);
                    r.set(i.field, na(o, a, n[s]))
                }
                return r
            }

            function Da(e, t, n) {
                const r = new Map;
                for (const s of e) {
                    const e = s.transform,
                        i = n.data.field(s.field);
                    r.set(s.field, ta(e, i, t))
                }
                return r
            }
            class Ca extends pa {
                constructor(e, t) {
                    super(), this.key = e, this.precondition = t, this.type = 2, this.fieldTransforms = []
                }
                getFieldMask() {
                    return null
                }
            }
            class Aa extends pa {
                constructor(e, t) {
                    super(), this.key = e, this.precondition = t, this.type = 3, this.fieldTransforms = []
                }
                getFieldMask() {
                    return null
                }
            }
            class xa {
                constructor(e, t, n, r) {
                    this.batchId = e, this.localWriteTime = t, this.baseMutations = n, this.mutations = r
                }
                applyToRemoteDocument(e, t) {
                    const n = t.mutationResults;
                    for (let t = 0; t < this.mutations.length; t++) {
                        const r = this.mutations[t];
                        r.key.isEqual(e.key) && wa(r, e, n[t])
                    }
                }
                applyToLocalView(e, t) {
                    for (const n of this.baseMutations) n.key.isEqual(e.key) && (t = va(n, e, t, this.localWriteTime));
                    for (const n of this.mutations) n.key.isEqual(e.key) && (t = va(n, e, t, this.localWriteTime));
                    return t
                }
                applyToLocalDocumentSet(e, t) {
                    const n = jo();
                    return this.mutations.forEach((r => {
                        const s = e.get(r.key),
                            i = s.overlayedDocument;
                        let o = this.applyToLocalView(i, s.mutatedFields);
                        o = t.has(r.key) ? null : o;
                        const a = ya(i, o);
                        null !== a && n.set(r.key, a), i.isValidDocument() || i.convertToNoDocument(Br.min())
                    })), n
                }
                keys() {
                    return this.mutations.reduce(((e, t) => e.add(t.key)), Wo())
                }
                isEqual(e) {
                    return this.batchId === e.batchId && Fr(this.mutations, e.mutations, ((e, t) => Ia(e, t))) && Fr(this.baseMutations, e.baseMutations, ((e, t) => Ia(e, t)))
                }
            }
            class Na {
                constructor(e, t, n, r) {
                    this.batch = e, this.commitVersion = t, this.mutationResults = n, this.docVersions = r
                }
                static from(e, t, n) {
                    Ir(e.mutations.length === n.length);
                    let r = Ko;
                    const s = e.mutations;
                    for (let e = 0; e < s.length; e++) r = r.insert(s[e].key, n[e].version);
                    return new Na(e, t, n, r)
                }
            }
            class ka {
                constructor(e, t) {
                    this.largestBatchId = e, this.mutation = t
                }
                getKey() {
                    return this.mutation.key
                }
                isEqual(e) {
                    return null !== e && this.mutation === e.mutation
                }
                toString() {
                    return `Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`
                }
            }
            class Ra {
                constructor(e) {
                    this.count = e
                }
            }
            var Oa, La;

            function Ma(e) {
                switch (e) {
                    default:
                        return br();
                    case Er.CANCELLED:
                    case Er.UNKNOWN:
                    case Er.DEADLINE_EXCEEDED:
                    case Er.RESOURCE_EXHAUSTED:
                    case Er.INTERNAL:
                    case Er.UNAVAILABLE:
                    case Er.UNAUTHENTICATED:
                        return !1;
                    case Er.INVALID_ARGUMENT:
                    case Er.NOT_FOUND:
                    case Er.ALREADY_EXISTS:
                    case Er.PERMISSION_DENIED:
                    case Er.FAILED_PRECONDITION:
                    case Er.ABORTED:
                    case Er.OUT_OF_RANGE:
                    case Er.UNIMPLEMENTED:
                    case Er.DATA_LOSS:
                        return !0
                }
            }

            function Pa(e) {
                if (void 0 === e) return yr("GRPC error has no .code"), Er.UNKNOWN;
                switch (e) {
                    case Oa.OK:
                        return Er.OK;
                    case Oa.CANCELLED:
                        return Er.CANCELLED;
                    case Oa.UNKNOWN:
                        return Er.UNKNOWN;
                    case Oa.DEADLINE_EXCEEDED:
                        return Er.DEADLINE_EXCEEDED;
                    case Oa.RESOURCE_EXHAUSTED:
                        return Er.RESOURCE_EXHAUSTED;
                    case Oa.INTERNAL:
                        return Er.INTERNAL;
                    case Oa.UNAVAILABLE:
                        return Er.UNAVAILABLE;
                    case Oa.UNAUTHENTICATED:
                        return Er.UNAUTHENTICATED;
                    case Oa.INVALID_ARGUMENT:
                        return Er.INVALID_ARGUMENT;
                    case Oa.NOT_FOUND:
                        return Er.NOT_FOUND;
                    case Oa.ALREADY_EXISTS:
                        return Er.ALREADY_EXISTS;
                    case Oa.PERMISSION_DENIED:
                        return Er.PERMISSION_DENIED;
                    case Oa.FAILED_PRECONDITION:
                        return Er.FAILED_PRECONDITION;
                    case Oa.ABORTED:
                        return Er.ABORTED;
                    case Oa.OUT_OF_RANGE:
                        return Er.OUT_OF_RANGE;
                    case Oa.UNIMPLEMENTED:
                        return Er.UNIMPLEMENTED;
                    case Oa.DATA_LOSS:
                        return Er.DATA_LOSS;
                    default:
                        return br()
                }
            }(La = Oa || (Oa = {}))[La.OK = 0] = "OK", La[La.CANCELLED = 1] = "CANCELLED", La[La.UNKNOWN = 2] = "UNKNOWN", La[La.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", La[La.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", La[La.NOT_FOUND = 5] = "NOT_FOUND", La[La.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", La[La.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", La[La.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", La[La.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", La[La.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", La[La.ABORTED = 10] = "ABORTED", La[La.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", La[La.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", La[La.INTERNAL = 13] = "INTERNAL", La[La.UNAVAILABLE = 14] = "UNAVAILABLE", La[La.DATA_LOSS = 15] = "DATA_LOSS";
            class Fa {
                constructor() {
                    this.onExistenceFilterMismatchCallbacks = new Map
                }
                static get instance() {
                    return Va
                }
                static getOrCreateInstance() {
                    return null === Va && (Va = new Fa), Va
                }
                onExistenceFilterMismatch(e) {
                    const t = Symbol();
                    return this.onExistenceFilterMismatchCallbacks.set(t, e), () => this.onExistenceFilterMismatchCallbacks.delete(t)
                }
                notifyOnExistenceFilterMismatch(e) {
                    this.onExistenceFilterMismatchCallbacks.forEach((t => t(e)))
                }
            }
            let Va = null;
            class Ua {
                constructor(e, t, n, r, s) {
                    this.snapshotVersion = e, this.targetChanges = t, this.targetMismatches = n, this.documentUpdates = r, this.resolvedLimboDocuments = s
                }
                static createSynthesizedRemoteEventForCurrentChange(e, t, n) {
                    const r = new Map;
                    return r.set(e, Ba.createSynthesizedTargetChangeForCurrentChange(e, t, n)), new Ua(Br.min(), r, Yo(), Uo(), Wo())
                }
            }
            class Ba {
                constructor(e, t, n, r, s) {
                    this.resumeToken = e, this.current = t, this.addedDocuments = n, this.modifiedDocuments = r, this.removedDocuments = s
                }
                static createSynthesizedTargetChangeForCurrentChange(e, t, n) {
                    return new Ba(n, t, Wo(), Wo(), Wo())
                }
            }
            class qa {
                constructor(e, t, n, r) {
                    this.It = e, this.removedTargetIds = t, this.key = n, this.Tt = r
                }
            }
            class $a {
                constructor(e, t) {
                    this.targetId = e, this.Et = t
                }
            }
            class za {
                constructor(e, t, n = oi.EMPTY_BYTE_STRING, r = null) {
                    this.state = e, this.targetIds = t, this.resumeToken = n, this.cause = r
                }
            }
            class ja {
                constructor() {
                    this.At = 0, this.Rt = Qa(), this.vt = oi.EMPTY_BYTE_STRING, this.bt = !1, this.Pt = !0
                }
                get current() {
                    return this.bt
                }
                get resumeToken() {
                    return this.vt
                }
                get Vt() {
                    return 0 !== this.At
                }
                get St() {
                    return this.Pt
                }
                Dt(e) {
                    e.approximateByteSize() > 0 && (this.Pt = !0, this.vt = e)
                }
                Ct() {
                    let e = Wo(),
                        t = Wo(),
                        n = Wo();
                    return this.Rt.forEach(((r, s) => {
                        switch (s) {
                            case 0:
                                e = e.add(r);
                                break;
                            case 2:
                                t = t.add(r);
                                break;
                            case 1:
                                n = n.add(r);
                                break;
                            default:
                                br()
                        }
                    })), new Ba(this.vt, this.bt, e, t, n)
                }
                xt() {
                    this.Pt = !1, this.Rt = Qa()
                }
                Nt(e, t) {
                    this.Pt = !0, this.Rt = this.Rt.insert(e, t)
                }
                kt(e) {
                    this.Pt = !0, this.Rt = this.Rt.remove(e)
                }
                Ot() {
                    this.At += 1
                }
                $t() {
                    this.At -= 1
                }
                Mt() {
                    this.Pt = !0, this.bt = !0
                }
            }
            class Ga {
                constructor(e) {
                    this.Ft = e, this.Bt = new Map, this.Lt = Uo(), this.qt = Ka(), this.Ut = new ti(Pr)
                }
                Kt(e) {
                    for (const t of e.It) e.Tt && e.Tt.isFoundDocument() ? this.Gt(t, e.Tt) : this.Qt(t, e.key, e.Tt);
                    for (const t of e.removedTargetIds) this.Qt(t, e.key, e.Tt)
                }
                zt(e) {
                    this.forEachTarget(e, (t => {
                        const n = this.jt(t);
                        switch (e.state) {
                            case 0:
                                this.Wt(t) && n.Dt(e.resumeToken);
                                break;
                            case 1:
                                n.$t(), n.Vt || n.xt(), n.Dt(e.resumeToken);
                                break;
                            case 2:
                                n.$t(), n.Vt || this.removeTarget(t);
                                break;
                            case 3:
                                this.Wt(t) && (n.Mt(), n.Dt(e.resumeToken));
                                break;
                            case 4:
                                this.Wt(t) && (this.Ht(t), n.Dt(e.resumeToken));
                                break;
                            default:
                                br()
                        }
                    }))
                }
                forEachTarget(e, t) {
                    e.targetIds.length > 0 ? e.targetIds.forEach(t) : this.Bt.forEach(((e, n) => {
                        this.Wt(n) && t(n)
                    }))
                }
                Jt(e) {
                    var t;
                    const n = e.targetId,
                        r = e.Et.count,
                        s = this.Yt(n);
                    if (s) {
                        const i = s.target;
                        if (mo(i))
                            if (0 === r) {
                                const e = new Gr(i.path);
                                this.Qt(n, e, Ui.newNoDocument(e, Br.min()))
                            } else Ir(1 === r);
                        else {
                            const s = this.Zt(n);
                            s !== r && (this.Ht(n), this.Ut = this.Ut.add(n), null === (t = Fa.instance) || void 0 === t || t.notifyOnExistenceFilterMismatch({
                                localCacheCount: s,
                                existenceFilterCount: e.Et.count
                            }))
                        }
                    }
                }
                Xt(e) {
                    const t = new Map;
                    this.Bt.forEach(((n, r) => {
                        const s = this.Yt(r);
                        if (s) {
                            if (n.current && mo(s.target)) {
                                const t = new Gr(s.target.path);
                                null !== this.Lt.get(t) || this.te(r, t) || this.Qt(r, t, Ui.newNoDocument(t, e))
                            }
                            n.St && (t.set(r, n.Ct()), n.xt())
                        }
                    }));
                    let n = Wo();
                    this.qt.forEach(((e, t) => {
                        let r = !0;
                        t.forEachWhile((e => {
                            const t = this.Yt(e);
                            return !t || 2 === t.purpose || (r = !1, !1)
                        })), r && (n = n.add(e))
                    })), this.Lt.forEach(((t, n) => n.setReadTime(e)));
                    const r = new Ua(e, t, this.Ut, this.Lt, n);
                    return this.Lt = Uo(), this.qt = Ka(), this.Ut = new ti(Pr), r
                }
                Gt(e, t) {
                    if (!this.Wt(e)) return;
                    const n = this.te(e, t.key) ? 2 : 0;
                    this.jt(e).Nt(t.key, n), this.Lt = this.Lt.insert(t.key, t), this.qt = this.qt.insert(t.key, this.ee(t.key).add(e))
                }
                Qt(e, t, n) {
                    if (!this.Wt(e)) return;
                    const r = this.jt(e);
                    this.te(e, t) ? r.Nt(t, 1) : r.kt(t), this.qt = this.qt.insert(t, this.ee(t).delete(e)), n && (this.Lt = this.Lt.insert(t, n))
                }
                removeTarget(e) {
                    this.Bt.delete(e)
                }
                Zt(e) {
                    const t = this.jt(e).Ct();
                    return this.Ft.getRemoteKeysForTarget(e).size + t.addedDocuments.size - t.removedDocuments.size
                }
                Ot(e) {
                    this.jt(e).Ot()
                }
                jt(e) {
                    let t = this.Bt.get(e);
                    return t || (t = new ja, this.Bt.set(e, t)), t
                }
                ee(e) {
                    let t = this.qt.get(e);
                    return t || (t = new ti(Pr), this.qt = this.qt.insert(e, t)), t
                }
                Wt(e) {
                    const t = null !== this.Yt(e);
                    return t || pr("WatchChangeAggregator", "Detected inactive target", e), t
                }
                Yt(e) {
                    const t = this.Bt.get(e);
                    return t && t.Vt ? null : this.Ft.ne(e)
                }
                Ht(e) {
                    this.Bt.set(e, new ja), this.Ft.getRemoteKeysForTarget(e).forEach((t => {
                        this.Qt(e, t, null)
                    }))
                }
                te(e, t) {
                    return this.Ft.getRemoteKeysForTarget(e).has(t)
                }
            }

            function Ka() {
                return new Js(Gr.comparator)
            }

            function Qa() {
                return new Js(Gr.comparator)
            }
            const Wa = {
                    asc: "ASCENDING",
                    desc: "DESCENDING"
                },
                Ha = {
                    "<": "LESS_THAN",
                    "<=": "LESS_THAN_OR_EQUAL",
                    ">": "GREATER_THAN",
                    ">=": "GREATER_THAN_OR_EQUAL",
                    "==": "EQUAL",
                    "!=": "NOT_EQUAL",
                    "array-contains": "ARRAY_CONTAINS",
                    in: "IN",
                    "not-in": "NOT_IN",
                    "array-contains-any": "ARRAY_CONTAINS_ANY"
                },
                Ya = {
                    and: "AND",
                    or: "OR"
                };
            class Xa {
                constructor(e, t) {
                    this.databaseId = e, this.useProto3Json = t
                }
            }

            function Ja(e, t) {
                return e.useProto3Json ? `${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z` : {
                    seconds: "" + t.seconds,
                    nanos: t.nanoseconds
                }
            }

            function Za(e, t) {
                return e.useProto3Json ? t.toBase64() : t.toUint8Array()
            }

            function ec(e, t) {
                return Ja(e, t.toTimestamp())
            }

            function tc(e) {
                return Ir(!!e), Br.fromTimestamp(function (e) {
                    const t = ci(e);
                    return new Ur(t.seconds, t.nanos)
                }(e))
            }

            function nc(e, t) {
                return function (e) {
                    return new $r(["projects", e.projectId, "databases", e.database])
                }(e).child("documents").child(t).canonicalString()
            }

            function rc(e) {
                const t = $r.fromString(e);
                return Ir(Sc(t)), t
            }

            function sc(e, t) {
                return nc(e.databaseId, t.path)
            }

            function ic(e, t) {
                const n = rc(t);
                if (n.get(1) !== e.databaseId.projectId) throw new Tr(Er.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + e.databaseId.projectId);
                if (n.get(3) !== e.databaseId.database) throw new Tr(Er.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + e.databaseId.database);
                return new Gr(uc(n))
            }

            function oc(e, t) {
                return nc(e.databaseId, t)
            }

            function ac(e) {
                const t = rc(e);
                return 4 === t.length ? $r.emptyPath() : uc(t)
            }

            function cc(e) {
                return new $r(["projects", e.databaseId.projectId, "databases", e.databaseId.database]).canonicalString()
            }

            function uc(e) {
                return Ir(e.length > 4 && "documents" === e.get(4)), e.popFirst(5)
            }

            function lc(e, t, n) {
                return {
                    name: sc(e, t),
                    fields: n.value.mapValue.fields
                }
            }

            function hc(e, t, n) {
                const r = ic(e, t.name),
                    s = tc(t.updateTime),
                    i = t.createTime ? tc(t.createTime) : Br.min(),
                    o = new Fi({
                        mapValue: {
                            fields: t.fields
                        }
                    }),
                    a = Ui.newFoundDocument(r, s, i, o);
                return n && a.setHasCommittedMutations(), n ? a.setHasCommittedMutations() : a
            }

            function dc(e, t) {
                let n;
                if (t instanceof _a) n = {
                    update: lc(e, t.key, t.value)
                };
                else if (t instanceof Ca) n = {
                    delete: sc(e, t.key)
                };
                else if (t instanceof Ea) n = {
                    update: lc(e, t.key, t.data),
                    updateMask: Tc(t.fieldMask)
                };
                else {
                    if (!(t instanceof Aa)) return br();
                    n = {
                        verify: sc(e, t.key)
                    }
                }
                return t.fieldTransforms.length > 0 && (n.updateTransforms = t.fieldTransforms.map((e => function (e, t) {
                    const n = t.transform;
                    if (n instanceof sa) return {
                        fieldPath: t.field.canonicalString(),
                        setToServerValue: "REQUEST_TIME"
                    };
                    if (n instanceof ia) return {
                        fieldPath: t.field.canonicalString(),
                        appendMissingElements: {
                            values: n.elements
                        }
                    };
                    if (n instanceof aa) return {
                        fieldPath: t.field.canonicalString(),
                        removeAllFromArray: {
                            values: n.elements
                        }
                    };
                    if (n instanceof ua) return {
                        fieldPath: t.field.canonicalString(),
                        increment: n._t
                    };
                    throw br()
                }(0, e)))), t.precondition.isNone || (n.currentDocument = function (e, t) {
                    return void 0 !== t.updateTime ? {
                        updateTime: ec(e, t.updateTime)
                    } : void 0 !== t.exists ? {
                        exists: t.exists
                    } : br()
                }(e, t.precondition)), n
            }

            function fc(e, t) {
                const n = t.currentDocument ? function (e) {
                        return void 0 !== e.updateTime ? ga.updateTime(tc(e.updateTime)) : void 0 !== e.exists ? ga.exists(e.exists) : ga.none()
                    }(t.currentDocument) : ga.none(),
                    r = t.updateTransforms ? t.updateTransforms.map((t => function (e, t) {
                        let n = null;
                        if ("setToServerValue" in t) Ir("REQUEST_TIME" === t.setToServerValue), n = new sa;
                        else if ("appendMissingElements" in t) {
                            const e = t.appendMissingElements.values || [];
                            n = new ia(e)
                        } else if ("removeAllFromArray" in t) {
                            const e = t.removeAllFromArray.values || [];
                            n = new aa(e)
                        } else "increment" in t ? n = new ua(e, t.increment) : br();
                        const r = jr.fromServerFormat(t.fieldPath);
                        return new da(r, n)
                    }(e, t))) : [];
                if (t.update) {
                    t.update.name;
                    const s = ic(e, t.update.name),
                        i = new Fi({
                            mapValue: {
                                fields: t.update.fields
                            }
                        });
                    if (t.updateMask) {
                        const e = function (e) {
                            const t = e.fieldPaths || [];
                            return new si(t.map((e => jr.fromServerFormat(e))))
                        }(t.updateMask);
                        return new Ea(s, i, e, n, r)
                    }
                    return new _a(s, i, n, r)
                }
                if (t.delete) {
                    const r = ic(e, t.delete);
                    return new Ca(r, n)
                }
                if (t.verify) {
                    const r = ic(e, t.verify);
                    return new Aa(r, n)
                }
                return br()
            }

            function gc(e, t) {
                return {
                    documents: [oc(e, t.path)]
                }
            }

            function mc(e, t) {
                const n = {
                        structuredQuery: {}
                    },
                    r = t.path;
                null !== t.collectionGroup ? (n.parent = oc(e, r), n.structuredQuery.from = [{
                    collectionId: t.collectionGroup,
                    allDescendants: !0
                }]) : (n.parent = oc(e, r.popLast()), n.structuredQuery.from = [{
                    collectionId: r.lastSegment()
                }]);
                const s = function (e) {
                    if (0 !== e.length) return Ec(Qi.create(e, "and"))
                }(t.filters);
                s && (n.structuredQuery.where = s);
                const i = function (e) {
                    if (0 !== e.length) return e.map((e => function (e) {
                        return {
                            field: Ic(e.field),
                            direction: wc(e.dir)
                        }
                    }(e)))
                }(t.orderBy);
                i && (n.structuredQuery.orderBy = i);
                const o = function (e, t) {
                    return e.useProto3Json || ys(t) ? t : {
                        value: t
                    }
                }(e, t.limit);
                var a;
                return null !== o && (n.structuredQuery.limit = o), t.startAt && (n.structuredQuery.startAt = {
                    before: (a = t.startAt).inclusive,
                    values: a.position
                }), t.endAt && (n.structuredQuery.endAt = function (e) {
                    return {
                        before: !e.inclusive,
                        values: e.position
                    }
                }(t.endAt)), n
            }

            function pc(e) {
                let t = ac(e.parent);
                const n = e.structuredQuery,
                    r = n.from ? n.from.length : 0;
                let s = null;
                if (r > 0) {
                    Ir(1 === r);
                    const e = n.from[0];
                    e.allDescendants ? s = e.collectionId : t = t.child(e.collectionId)
                }
                let i = [];
                n.where && (i = function (e) {
                    const t = yc(e);
                    return t instanceof Qi && Yi(t) ? t.getFilters() : [t]
                }(n.where));
                let o = [];
                n.orderBy && (o = n.orderBy.map((e => function (e) {
                    return new zi(_c(e.field), function (e) {
                        switch (e) {
                            case "ASCENDING":
                                return "asc";
                            case "DESCENDING":
                                return "desc";
                            default:
                                return
                        }
                    }(e.direction))
                }(e))));
                let a = null;
                n.limit && (a = function (e) {
                    let t;
                    return t = "object" == typeof e ? e.value : e, ys(t) ? null : t
                }(n.limit));
                let c = null;
                n.startAt && (c = function (e) {
                    const t = !!e.before,
                        n = e.values || [];
                    return new Bi(n, t)
                }(n.startAt));
                let u = null;
                return n.endAt && (u = function (e) {
                    const t = !e.before,
                        n = e.values || [];
                    return new Bi(n, t)
                }(n.endAt)), bo(t, s, o, i, a, "F", c, u)
            }

            function yc(e) {
                return void 0 !== e.unaryFilter ? function (e) {
                    switch (e.unaryFilter.op) {
                        case "IS_NAN":
                            const t = _c(e.unaryFilter.field);
                            return Ki.create(t, "==", {
                                doubleValue: NaN
                            });
                        case "IS_NULL":
                            const n = _c(e.unaryFilter.field);
                            return Ki.create(n, "==", {
                                nullValue: "NULL_VALUE"
                            });
                        case "IS_NOT_NAN":
                            const r = _c(e.unaryFilter.field);
                            return Ki.create(r, "!=", {
                                doubleValue: NaN
                            });
                        case "IS_NOT_NULL":
                            const s = _c(e.unaryFilter.field);
                            return Ki.create(s, "!=", {
                                nullValue: "NULL_VALUE"
                            });
                        default:
                            return br()
                    }
                }(e) : void 0 !== e.fieldFilter ? function (e) {
                    return Ki.create(_c(e.fieldFilter.field), function (e) {
                        switch (e) {
                            case "EQUAL":
                                return "==";
                            case "NOT_EQUAL":
                                return "!=";
                            case "GREATER_THAN":
                                return ">";
                            case "GREATER_THAN_OR_EQUAL":
                                return ">=";
                            case "LESS_THAN":
                                return "<";
                            case "LESS_THAN_OR_EQUAL":
                                return "<=";
                            case "ARRAY_CONTAINS":
                                return "array-contains";
                            case "IN":
                                return "in";
                            case "NOT_IN":
                                return "not-in";
                            case "ARRAY_CONTAINS_ANY":
                                return "array-contains-any";
                            default:
                                return br()
                        }
                    }(e.fieldFilter.op), e.fieldFilter.value)
                }(e) : void 0 !== e.compositeFilter ? function (e) {
                    return Qi.create(e.compositeFilter.filters.map((e => yc(e))), function (e) {
                        switch (e) {
                            case "AND":
                                return "and";
                            case "OR":
                                return "or";
                            default:
                                return br()
                        }
                    }(e.compositeFilter.op))
                }(e) : br()
            }

            function wc(e) {
                return Wa[e]
            }

            function vc(e) {
                return Ha[e]
            }

            function bc(e) {
                return Ya[e]
            }

            function Ic(e) {
                return {
                    fieldPath: e.canonicalString()
                }
            }

            function _c(e) {
                return jr.fromServerFormat(e.fieldPath)
            }

            function Ec(e) {
                return e instanceof Ki ? function (e) {
                    if ("==" === e.op) {
                        if (xi(e.value)) return {
                            unaryFilter: {
                                field: Ic(e.field),
                                op: "IS_NAN"
                            }
                        };
                        if (Ai(e.value)) return {
                            unaryFilter: {
                                field: Ic(e.field),
                                op: "IS_NULL"
                            }
                        }
                    } else if ("!=" === e.op) {
                        if (xi(e.value)) return {
                            unaryFilter: {
                                field: Ic(e.field),
                                op: "IS_NOT_NAN"
                            }
                        };
                        if (Ai(e.value)) return {
                            unaryFilter: {
                                field: Ic(e.field),
                                op: "IS_NOT_NULL"
                            }
                        }
                    }
                    return {
                        fieldFilter: {
                            field: Ic(e.field),
                            op: vc(e.op),
                            value: e.value
                        }
                    }
                }(e) : e instanceof Qi ? function (e) {
                    const t = e.getFilters().map((e => Ec(e)));
                    return 1 === t.length ? t[0] : {
                        compositeFilter: {
                            op: bc(e.op),
                            filters: t
                        }
                    }
                }(e) : br()
            }

            function Tc(e) {
                const t = [];
                return e.fields.forEach((e => t.push(e.canonicalString()))), {
                    fieldPaths: t
                }
            }

            function Sc(e) {
                return e.length >= 4 && "projects" === e.get(0) && "databases" === e.get(2)
            }
            class Dc {
                constructor(e, t, n, r, s = Br.min(), i = Br.min(), o = oi.EMPTY_BYTE_STRING) {
                    this.target = e, this.targetId = t, this.purpose = n, this.sequenceNumber = r, this.snapshotVersion = s, this.lastLimboFreeSnapshotVersion = i, this.resumeToken = o
                }
                withSequenceNumber(e) {
                    return new Dc(this.target, this.targetId, this.purpose, e, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken)
                }
                withResumeToken(e, t) {
                    return new Dc(this.target, this.targetId, this.purpose, this.sequenceNumber, t, this.lastLimboFreeSnapshotVersion, e)
                }
                withLastLimboFreeSnapshotVersion(e) {
                    return new Dc(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, e, this.resumeToken)
                }
            }
            class Cc {
                constructor(e) {
                    this.se = e
                }
            }

            function Ac(e, t) {
                const n = t.key,
                    r = {
                        prefixPath: n.getCollectionPath().popLast().toArray(),
                        collectionGroup: n.collectionGroup,
                        documentId: n.path.lastSegment(),
                        readTime: xc(t.readTime),
                        hasCommittedMutations: t.hasCommittedMutations
                    };
                if (t.isFoundDocument()) r.document = function (e, t) {
                    return {
                        name: sc(e, t.key),
                        fields: t.data.value.mapValue.fields,
                        updateTime: Ja(e, t.version.toTimestamp()),
                        createTime: Ja(e, t.createTime.toTimestamp())
                    }
                }(e.se, t);
                else if (t.isNoDocument()) r.noDocument = {
                    path: n.path.toArray(),
                    readTime: Nc(t.version)
                };
                else {
                    if (!t.isUnknownDocument()) return br();
                    r.unknownDocument = {
                        path: n.path.toArray(),
                        version: Nc(t.version)
                    }
                }
                return r
            }

            function xc(e) {
                const t = e.toTimestamp();
                return [t.seconds, t.nanoseconds]
            }

            function Nc(e) {
                const t = e.toTimestamp();
                return {
                    seconds: t.seconds,
                    nanoseconds: t.nanoseconds
                }
            }

            function kc(e) {
                const t = new Ur(e.seconds, e.nanoseconds);
                return Br.fromTimestamp(t)
            }

            function Rc(e, t) {
                const n = (t.baseMutations || []).map((t => fc(e.se, t)));
                for (let e = 0; e < t.mutations.length - 1; ++e) {
                    const n = t.mutations[e];
                    if (e + 1 < t.mutations.length && void 0 !== t.mutations[e + 1].transform) {
                        const r = t.mutations[e + 1];
                        n.updateTransforms = r.transform.fieldTransforms, t.mutations.splice(e + 1, 1), ++e
                    }
                }
                const r = t.mutations.map((t => fc(e.se, t))),
                    s = Ur.fromMillis(t.localWriteTimeMs);
                return new xa(t.batchId, s, n, r)
            }

            function Oc(e) {
                const t = kc(e.readTime),
                    n = void 0 !== e.lastLimboFreeSnapshotVersion ? kc(e.lastLimboFreeSnapshotVersion) : Br.min();
                let r;
                var s;
                return void 0 !== e.query.documents ? (Ir(1 === (s = e.query).documents.length), r = Co(Io(ac(s.documents[0])))) : r = function (e) {
                    return Co(pc(e))
                }(e.query), new Dc(r, e.targetId, 0, e.lastListenSequenceNumber, t, n, oi.fromBase64String(e.resumeToken))
            }

            function Lc(e, t) {
                const n = Nc(t.snapshotVersion),
                    r = Nc(t.lastLimboFreeSnapshotVersion);
                let s;
                s = mo(t.target) ? gc(e.se, t.target) : mc(e.se, t.target);
                const i = t.resumeToken.toBase64();
                return {
                    targetId: t.targetId,
                    canonicalId: fo(t.target),
                    readTime: n,
                    resumeToken: i,
                    lastListenSequenceNumber: t.sequenceNumber,
                    lastLimboFreeSnapshotVersion: r,
                    query: s
                }
            }

            function Mc(e) {
                const t = pc({
                    parent: e.parent,
                    structuredQuery: e.structuredQuery
                });
                return "LAST" === e.limitType ? xo(t, t.limit, "L") : t
            }

            function Pc(e, t) {
                return new ka(t.largestBatchId, fc(e.se, t.overlayMutation))
            }

            function Fc(e, t) {
                const n = t.path.lastSegment();
                return [e, bs(t.path.popLast()), n]
            }

            function Vc(e, t, n, r) {
                return {
                    indexId: e,
                    uid: t.uid || "",
                    sequenceNumber: n,
                    readTime: Nc(r.readTime),
                    documentKey: bs(r.documentKey.path),
                    largestBatchId: r.largestBatchId
                }
            }
            class Uc {
                getBundleMetadata(e, t) {
                    return Bc(e).get(t).next((e => {
                        if (e) return {
                            id: (t = e).bundleId,
                            createTime: kc(t.createTime),
                            version: t.version
                        };
                        var t
                    }))
                }
                saveBundleMetadata(e, t) {
                    return Bc(e).put({
                        bundleId: (n = t).id,
                        createTime: Nc(tc(n.createTime)),
                        version: n.version
                    });
                    var n
                }
                getNamedQuery(e, t) {
                    return qc(e).get(t).next((e => {
                        if (e) return {
                            name: (t = e).name,
                            query: Mc(t.bundledQuery),
                            readTime: kc(t.readTime)
                        };
                        var t
                    }))
                }
                saveNamedQuery(e, t) {
                    return qc(e).put(function (e) {
                        return {
                            name: e.name,
                            readTime: Nc(tc(e.readTime)),
                            bundledQuery: e.bundledQuery
                        }
                    }(t))
                }
            }

            function Bc(e) {
                return Ws(e, "bundles")
            }

            function qc(e) {
                return Ws(e, "namedQueries")
            }
            class $c {
                constructor(e, t) {
                    this.serializer = e, this.userId = t
                }
                static ie(e, t) {
                    const n = t.uid || "";
                    return new $c(e, n)
                }
                getOverlay(e, t) {
                    return zc(e).get(Fc(this.userId, t)).next((e => e ? Pc(this.serializer, e) : null))
                }
                getOverlays(e, t) {
                    const n = zo();
                    return ss.forEach(t, (t => this.getOverlay(e, t).next((e => {
                        null !== e && n.set(t, e)
                    })))).next((() => n))
                }
                saveOverlays(e, t, n) {
                    const r = [];
                    return n.forEach(((n, s) => {
                        const i = new ka(t, s);
                        r.push(this.re(e, i))
                    })), ss.waitFor(r)
                }
                removeOverlaysForBatchId(e, t, n) {
                    const r = new Set;
                    t.forEach((e => r.add(bs(e.getCollectionPath()))));
                    const s = [];
                    return r.forEach((t => {
                        const r = IDBKeyRange.bound([this.userId, t, n], [this.userId, t, n + 1], !1, !0);
                        s.push(zc(e).J("collectionPathOverlayIndex", r))
                    })), ss.waitFor(s)
                }
                getOverlaysForCollection(e, t, n) {
                    const r = zo(),
                        s = bs(t),
                        i = IDBKeyRange.bound([this.userId, s, n], [this.userId, s, Number.POSITIVE_INFINITY], !0);
                    return zc(e).j("collectionPathOverlayIndex", i).next((e => {
                        for (const t of e) {
                            const e = Pc(this.serializer, t);
                            r.set(e.getKey(), e)
                        }
                        return r
                    }))
                }
                getOverlaysForCollectionGroup(e, t, n, r) {
                    const s = zo();
                    let i;
                    const o = IDBKeyRange.bound([this.userId, t, n], [this.userId, t, Number.POSITIVE_INFINITY], !0);
                    return zc(e).Z({
                        index: "collectionGroupOverlayIndex",
                        range: o
                    }, ((e, t, n) => {
                        const o = Pc(this.serializer, t);
                        s.size() < r || o.largestBatchId === i ? (s.set(o.getKey(), o), i = o.largestBatchId) : n.done()
                    })).next((() => s))
                }
                re(e, t) {
                    return zc(e).put(function (e, t, n) {
                        const [r, s, i] = Fc(t, n.mutation.key);
                        return {
                            userId: t,
                            collectionPath: s,
                            documentId: i,
                            collectionGroup: n.mutation.key.getCollectionGroup(),
                            largestBatchId: n.largestBatchId,
                            overlayMutation: dc(e.se, n.mutation)
                        }
                    }(this.serializer, this.userId, t))
                }
            }

            function zc(e) {
                return Ws(e, "documentOverlays")
            }
            class jc {
                constructor() {}
                oe(e, t) {
                    this.ue(e, t), t.ce()
                }
                ue(e, t) {
                    if ("nullValue" in e) this.ae(t, 5);
                    else if ("booleanValue" in e) this.ae(t, 10), t.he(e.booleanValue ? 1 : 0);
                    else if ("integerValue" in e) this.ae(t, 15), t.he(ui(e.integerValue));
                    else if ("doubleValue" in e) {
                        const n = ui(e.doubleValue);
                        isNaN(n) ? this.ae(t, 13) : (this.ae(t, 15), ws(n) ? t.he(0) : t.he(n))
                    } else if ("timestampValue" in e) {
                        const n = e.timestampValue;
                        this.ae(t, 20), "string" == typeof n ? t.le(n) : (t.le(`${n.seconds||""}`), t.he(n.nanos || 0))
                    } else if ("stringValue" in e) this.fe(e.stringValue, t), this.de(t);
                    else if ("bytesValue" in e) this.ae(t, 30), t.we(li(e.bytesValue)), this.de(t);
                    else if ("referenceValue" in e) this._e(e.referenceValue, t);
                    else if ("geoPointValue" in e) {
                        const n = e.geoPointValue;
                        this.ae(t, 45), t.he(n.latitude || 0), t.he(n.longitude || 0)
                    } else "mapValue" in e ? Ri(e) ? this.ae(t, Number.MAX_SAFE_INTEGER) : (this.me(e.mapValue, t), this.de(t)) : "arrayValue" in e ? (this.ge(e.arrayValue, t), this.de(t)) : br()
                }
                fe(e, t) {
                    this.ae(t, 25), this.ye(e, t)
                }
                ye(e, t) {
                    t.le(e)
                }
                me(e, t) {
                    const n = e.fields || {};
                    this.ae(t, 55);
                    for (const e of Object.keys(n)) this.fe(e, t), this.ue(n[e], t)
                }
                ge(e, t) {
                    const n = e.values || [];
                    this.ae(t, 50);
                    for (const e of n) this.ue(e, t)
                }
                _e(e, t) {
                    this.ae(t, 37), Gr.fromName(e).path.forEach((e => {
                        this.ae(t, 60), this.ye(e, t)
                    }))
                }
                ae(e, t) {
                    e.he(t)
                }
                de(e) {
                    e.he(2)
                }
            }

            function Gc(e) {
                if (0 === e) return 8;
                let t = 0;
                return e >> 4 == 0 && (t += 4, e <<= 4), e >> 6 == 0 && (t += 2, e <<= 2), e >> 7 == 0 && (t += 1), t
            }

            function Kc(e) {
                const t = 64 - function (e) {
                    let t = 0;
                    for (let n = 0; n < 8; ++n) {
                        const r = Gc(255 & e[n]);
                        if (t += r, 8 !== r) break
                    }
                    return t
                }(e);
                return Math.ceil(t / 8)
            }
            jc.pe = new jc;
            class Qc {
                constructor() {
                    this.buffer = new Uint8Array(1024), this.position = 0
                }
                Ie(e) {
                    const t = e[Symbol.iterator]();
                    let n = t.next();
                    for (; !n.done;) this.Te(n.value), n = t.next();
                    this.Ee()
                }
                Ae(e) {
                    const t = e[Symbol.iterator]();
                    let n = t.next();
                    for (; !n.done;) this.Re(n.value), n = t.next();
                    this.ve()
                }
                be(e) {
                    for (const t of e) {
                        const e = t.charCodeAt(0);
                        if (e < 128) this.Te(e);
                        else if (e < 2048) this.Te(960 | e >>> 6), this.Te(128 | 63 & e);
                        else if (t < "\ud800" || "\udbff" < t) this.Te(480 | e >>> 12), this.Te(128 | 63 & e >>> 6), this.Te(128 | 63 & e);
                        else {
                            const e = t.codePointAt(0);
                            this.Te(240 | e >>> 18), this.Te(128 | 63 & e >>> 12), this.Te(128 | 63 & e >>> 6), this.Te(128 | 63 & e)
                        }
                    }
                    this.Ee()
                }
                Pe(e) {
                    for (const t of e) {
                        const e = t.charCodeAt(0);
                        if (e < 128) this.Re(e);
                        else if (e < 2048) this.Re(960 | e >>> 6), this.Re(128 | 63 & e);
                        else if (t < "\ud800" || "\udbff" < t) this.Re(480 | e >>> 12), this.Re(128 | 63 & e >>> 6), this.Re(128 | 63 & e);
                        else {
                            const e = t.codePointAt(0);
                            this.Re(240 | e >>> 18), this.Re(128 | 63 & e >>> 12), this.Re(128 | 63 & e >>> 6), this.Re(128 | 63 & e)
                        }
                    }
                    this.ve()
                }
                Ve(e) {
                    const t = this.Se(e),
                        n = Kc(t);
                    this.De(1 + n), this.buffer[this.position++] = 255 & n;
                    for (let e = t.length - n; e < t.length; ++e) this.buffer[this.position++] = 255 & t[e]
                }
                Ce(e) {
                    const t = this.Se(e),
                        n = Kc(t);
                    this.De(1 + n), this.buffer[this.position++] = ~(255 & n);
                    for (let e = t.length - n; e < t.length; ++e) this.buffer[this.position++] = ~(255 & t[e])
                }
                xe() {
                    this.Ne(255), this.Ne(255)
                }
                ke() {
                    this.Oe(255), this.Oe(255)
                }
                reset() {
                    this.position = 0
                }
                seed(e) {
                    this.De(e.length), this.buffer.set(e, this.position), this.position += e.length
                }
                $e() {
                    return this.buffer.slice(0, this.position)
                }
                Se(e) {
                    const t = function (e) {
                            const t = new DataView(new ArrayBuffer(8));
                            return t.setFloat64(0, e, !1), new Uint8Array(t.buffer)
                        }(e),
                        n = 0 != (128 & t[0]);
                    t[0] ^= n ? 255 : 128;
                    for (let e = 1; e < t.length; ++e) t[e] ^= n ? 255 : 0;
                    return t
                }
                Te(e) {
                    const t = 255 & e;
                    0 === t ? (this.Ne(0), this.Ne(255)) : 255 === t ? (this.Ne(255), this.Ne(0)) : this.Ne(t)
                }
                Re(e) {
                    const t = 255 & e;
                    0 === t ? (this.Oe(0), this.Oe(255)) : 255 === t ? (this.Oe(255), this.Oe(0)) : this.Oe(e)
                }
                Ee() {
                    this.Ne(0), this.Ne(1)
                }
                ve() {
                    this.Oe(0), this.Oe(1)
                }
                Ne(e) {
                    this.De(1), this.buffer[this.position++] = e
                }
                Oe(e) {
                    this.De(1), this.buffer[this.position++] = ~e
                }
                De(e) {
                    const t = e + this.position;
                    if (t <= this.buffer.length) return;
                    let n = 2 * this.buffer.length;
                    n < t && (n = t);
                    const r = new Uint8Array(n);
                    r.set(this.buffer), this.buffer = r
                }
            }
            class Wc {
                constructor(e) {
                    this.Me = e
                }
                we(e) {
                    this.Me.Ie(e)
                }
                le(e) {
                    this.Me.be(e)
                }
                he(e) {
                    this.Me.Ve(e)
                }
                ce() {
                    this.Me.xe()
                }
            }
            class Hc {
                constructor(e) {
                    this.Me = e
                }
                we(e) {
                    this.Me.Ae(e)
                }
                le(e) {
                    this.Me.Pe(e)
                }
                he(e) {
                    this.Me.Ce(e)
                }
                ce() {
                    this.Me.ke()
                }
            }
            class Yc {
                constructor() {
                    this.Me = new Qc, this.Fe = new Wc(this.Me), this.Be = new Hc(this.Me)
                }
                seed(e) {
                    this.Me.seed(e)
                }
                Le(e) {
                    return 0 === e ? this.Fe : this.Be
                }
                $e() {
                    return this.Me.$e()
                }
                reset() {
                    this.Me.reset()
                }
            }
            class Xc {
                constructor(e, t, n, r) {
                    this.indexId = e, this.documentKey = t, this.arrayValue = n, this.directionalValue = r
                }
                qe() {
                    const e = this.directionalValue.length,
                        t = 0 === e || 255 === this.directionalValue[e - 1] ? e + 1 : e,
                        n = new Uint8Array(t);
                    return n.set(this.directionalValue, 0), t !== e ? n.set([0], this.directionalValue.length) : ++n[n.length - 1], new Xc(this.indexId, this.documentKey, this.arrayValue, n)
                }
            }

            function Jc(e, t) {
                let n = e.indexId - t.indexId;
                return 0 !== n ? n : (n = Zc(e.arrayValue, t.arrayValue), 0 !== n ? n : (n = Zc(e.directionalValue, t.directionalValue), 0 !== n ? n : Gr.comparator(e.documentKey, t.documentKey)))
            }

            function Zc(e, t) {
                for (let n = 0; n < e.length && n < t.length; ++n) {
                    const r = e[n] - t[n];
                    if (0 !== r) return r
                }
                return e.length - t.length
            }
            class eu {
                constructor(e) {
                    this.collectionId = null != e.collectionGroup ? e.collectionGroup : e.path.lastSegment(), this.Ue = e.orderBy, this.Ke = [];
                    for (const t of e.filters) {
                        const e = t;
                        e.isInequality() ? this.Ge = e : this.Ke.push(e)
                    }
                }
                Qe(e) {
                    Ir(e.collectionGroup === this.collectionId);
                    const t = Qr(e);
                    if (void 0 !== t && !this.ze(t)) return !1;
                    const n = Wr(e);
                    let r = 0,
                        s = 0;
                    for (; r < n.length && this.ze(n[r]); ++r);
                    if (r === n.length) return !0;
                    if (void 0 !== this.Ge) {
                        const e = n[r];
                        if (!this.je(this.Ge, e) || !this.We(this.Ue[s++], e)) return !1;
                        ++r
                    }
                    for (; r < n.length; ++r) {
                        const e = n[r];
                        if (s >= this.Ue.length || !this.We(this.Ue[s++], e)) return !1
                    }
                    return !0
                }
                ze(e) {
                    for (const t of this.Ke)
                        if (this.je(t, e)) return !0;
                    return !1
                }
                je(e, t) {
                    if (void 0 === e || !e.field.isEqual(t.fieldPath)) return !1;
                    const n = "array-contains" === e.op || "array-contains-any" === e.op;
                    return 2 === t.kind === n
                }
                We(e, t) {
                    return !!e.field.isEqual(t.fieldPath) && (0 === t.kind && "asc" === e.dir || 1 === t.kind && "desc" === e.dir)
                }
            }

            function tu(e) {
                var t, n;
                if (Ir(e instanceof Ki || e instanceof Qi), e instanceof Ki) {
                    if (e instanceof ao) {
                        const r = (null === (n = null === (t = e.value.arrayValue) || void 0 === t ? void 0 : t.values) || void 0 === n ? void 0 : n.map((t => Ki.create(e.field, "==", t)))) || [];
                        return Qi.create(r, "or")
                    }
                    return e
                }
                const r = e.filters.map((e => tu(e)));
                return Qi.create(r, e.op)
            }

            function nu(e) {
                if (0 === e.getFilters().length) return [];
                const t = ou(tu(e));
                return Ir(iu(t)), ru(t) || su(t) ? [t] : t.getFilters()
            }

            function ru(e) {
                return e instanceof Ki
            }

            function su(e) {
                return e instanceof Qi && Yi(e)
            }

            function iu(e) {
                return ru(e) || su(e) || function (e) {
                    if (e instanceof Qi && Hi(e)) {
                        for (const t of e.getFilters())
                            if (!ru(t) && !su(t)) return !1;
                        return !0
                    }
                    return !1
                }(e)
            }

            function ou(e) {
                if (Ir(e instanceof Ki || e instanceof Qi), e instanceof Ki) return e;
                if (1 === e.filters.length) return ou(e.filters[0]);
                const t = e.filters.map((e => ou(e)));
                let n = Qi.create(t, e.op);
                return n = uu(n), iu(n) ? n : (Ir(n instanceof Qi), Ir(Wi(n)), Ir(n.filters.length > 1), n.filters.reduce(((e, t) => au(e, t))))
            }

            function au(e, t) {
                let n;
                return Ir(e instanceof Ki || e instanceof Qi), Ir(t instanceof Ki || t instanceof Qi), n = e instanceof Ki ? t instanceof Ki ? function (e, t) {
                    return Qi.create([e, t], "and")
                }(e, t) : cu(e, t) : t instanceof Ki ? cu(t, e) : function (e, t) {
                    if (Ir(e.filters.length > 0 && t.filters.length > 0), Wi(e) && Wi(t)) return eo(e, t.getFilters());
                    const n = Hi(e) ? e : t,
                        r = Hi(e) ? t : e,
                        s = n.filters.map((e => au(e, r)));
                    return Qi.create(s, "or")
                }(e, t), uu(n)
            }

            function cu(e, t) {
                if (Wi(t)) return eo(t, e.getFilters()); {
                    const n = t.filters.map((t => au(e, t)));
                    return Qi.create(n, "or")
                }
            }

            function uu(e) {
                if (Ir(e instanceof Ki || e instanceof Qi), e instanceof Ki) return e;
                const t = e.getFilters();
                if (1 === t.length) return uu(t[0]);
                if (Xi(e)) return e;
                const n = t.map((e => uu(e))),
                    r = [];
                return n.forEach((t => {
                    t instanceof Ki ? r.push(t) : t instanceof Qi && (t.op === e.op ? r.push(...t.filters) : r.push(t))
                })), 1 === r.length ? r[0] : Qi.create(r, e.op)
            }
            class lu {
                constructor() {
                    this.He = new hu
                }
                addToCollectionParentIndex(e, t) {
                    return this.He.add(t), ss.resolve()
                }
                getCollectionParents(e, t) {
                    return ss.resolve(this.He.getEntries(t))
                }
                addFieldIndex(e, t) {
                    return ss.resolve()
                }
                deleteFieldIndex(e, t) {
                    return ss.resolve()
                }
                getDocumentsMatchingTarget(e, t) {
                    return ss.resolve(null)
                }
                getIndexType(e, t) {
                    return ss.resolve(0)
                }
                getFieldIndexes(e, t) {
                    return ss.resolve([])
                }
                getNextCollectionGroupToUpdate(e) {
                    return ss.resolve(null)
                }
                getMinOffset(e, t) {
                    return ss.resolve(Zr.min())
                }
                getMinOffsetFromCollectionGroup(e, t) {
                    return ss.resolve(Zr.min())
                }
                updateCollectionGroup(e, t, n) {
                    return ss.resolve()
                }
                updateIndexEntries(e, t) {
                    return ss.resolve()
                }
            }
            class hu {
                constructor() {
                    this.index = {}
                }
                add(e) {
                    const t = e.lastSegment(),
                        n = e.popLast(),
                        r = this.index[t] || new ti($r.comparator),
                        s = !r.has(n);
                    return this.index[t] = r.add(n), s
                }
                has(e) {
                    const t = e.lastSegment(),
                        n = e.popLast(),
                        r = this.index[t];
                    return r && r.has(n)
                }
                getEntries(e) {
                    return (this.index[e] || new ti($r.comparator)).toArray()
                }
            }
            const du = new Uint8Array(0);
            class fu {
                constructor(e, t) {
                    this.user = e, this.databaseId = t, this.Je = new hu, this.Ye = new Fo((e => fo(e)), ((e, t) => go(e, t))), this.uid = e.uid || ""
                }
                addToCollectionParentIndex(e, t) {
                    if (!this.Je.has(t)) {
                        const n = t.lastSegment(),
                            r = t.popLast();
                        e.addOnCommittedListener((() => {
                            this.Je.add(t)
                        }));
                        const s = {
                            collectionId: n,
                            parent: bs(r)
                        };
                        return gu(e).put(s)
                    }
                    return ss.resolve()
                }
                getCollectionParents(e, t) {
                    const n = [],
                        r = IDBKeyRange.bound([t, ""], [Vr(t), ""], !1, !0);
                    return gu(e).j(r).next((e => {
                        for (const r of e) {
                            if (r.collectionId !== t) break;
                            n.push(Es(r.parent))
                        }
                        return n
                    }))
                }
                addFieldIndex(e, t) {
                    const n = pu(e),
                        r = function (e) {
                            return {
                                indexId: e.indexId,
                                collectionGroup: e.collectionGroup,
                                fields: e.fields.map((e => [e.fieldPath.canonicalString(), e.kind]))
                            }
                        }(t);
                    delete r.indexId;
                    const s = n.add(r);
                    if (t.indexState) {
                        const n = yu(e);
                        return s.next((e => {
                            n.put(Vc(e, this.user, t.indexState.sequenceNumber, t.indexState.offset))
                        }))
                    }
                    return s.next()
                }
                deleteFieldIndex(e, t) {
                    const n = pu(e),
                        r = yu(e),
                        s = mu(e);
                    return n.delete(t.indexId).next((() => r.delete(IDBKeyRange.bound([t.indexId], [t.indexId + 1], !1, !0)))).next((() => s.delete(IDBKeyRange.bound([t.indexId], [t.indexId + 1], !1, !0))))
                }
                getDocumentsMatchingTarget(e, t) {
                    const n = mu(e);
                    let r = !0;
                    const s = new Map;
                    return ss.forEach(this.Ze(t), (t => this.Xe(e, t).next((e => {
                        r && (r = !!e), s.set(t, e)
                    })))).next((() => {
                        if (r) {
                            let e = Wo();
                            const r = [];
                            return ss.forEach(s, ((s, i) => {
                                var o;
                                pr("IndexedDbIndexManager", `Using index ${o=s,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${fo(t)}`);
                                const a = function (e, t) {
                                        const n = Qr(t);
                                        if (void 0 === n) return null;
                                        for (const t of po(e, n.fieldPath)) switch (t.op) {
                                            case "array-contains-any":
                                                return t.value.arrayValue.values || [];
                                            case "array-contains":
                                                return [t.value]
                                        }
                                        return null
                                    }(i, s),
                                    c = function (e, t) {
                                        const n = new Map;
                                        for (const r of Wr(t))
                                            for (const t of po(e, r.fieldPath)) switch (t.op) {
                                                case "==":
                                                case "in":
                                                    n.set(r.fieldPath.canonicalString(), t.value);
                                                    break;
                                                case "not-in":
                                                case "!=":
                                                    return n.set(r.fieldPath.canonicalString(), t.value), Array.from(n.values())
                                            }
                                        return null
                                    }(i, s),
                                    u = function (e, t) {
                                        const n = [];
                                        let r = !0;
                                        for (const s of Wr(t)) {
                                            const t = 0 === s.kind ? yo(e, s.fieldPath, e.startAt) : wo(e, s.fieldPath, e.startAt);
                                            n.push(t.value), r && (r = t.inclusive)
                                        }
                                        return new Bi(n, r)
                                    }(i, s),
                                    l = function (e, t) {
                                        const n = [];
                                        let r = !0;
                                        for (const s of Wr(t)) {
                                            const t = 0 === s.kind ? wo(e, s.fieldPath, e.endAt) : yo(e, s.fieldPath, e.endAt);
                                            n.push(t.value), r && (r = t.inclusive)
                                        }
                                        return new Bi(n, r)
                                    }(i, s),
                                    h = this.tn(s, i, u),
                                    d = this.tn(s, i, l),
                                    f = this.en(s, i, c),
                                    g = this.nn(s.indexId, a, h, u.inclusive, d, l.inclusive, f);
                                return ss.forEach(g, (s => n.H(s, t.limit).next((t => {
                                    t.forEach((t => {
                                        const n = Gr.fromSegments(t.documentKey);
                                        e.has(n) || (e = e.add(n), r.push(n))
                                    }))
                                }))))
                            })).next((() => r))
                        }
                        return ss.resolve(null)
                    }))
                }
                Ze(e) {
                    let t = this.Ye.get(e);
                    return t || (t = 0 === e.filters.length ? [e] : nu(Qi.create(e.filters, "and")).map((t => ho(e.path, e.collectionGroup, e.orderBy, t.getFilters(), e.limit, e.startAt, e.endAt))), this.Ye.set(e, t), t)
                }
                nn(e, t, n, r, s, i, o) {
                    const a = (null != t ? t.length : 1) * Math.max(n.length, s.length),
                        c = a / (null != t ? t.length : 1),
                        u = [];
                    for (let l = 0; l < a; ++l) {
                        const a = t ? this.sn(t[l / c]) : du,
                            h = this.rn(e, a, n[l % c], r),
                            d = this.on(e, a, s[l % c], i),
                            f = o.map((t => this.rn(e, a, t, !0)));
                        u.push(...this.createRange(h, d, f))
                    }
                    return u
                }
                rn(e, t, n, r) {
                    const s = new Xc(e, Gr.empty(), t, n);
                    return r ? s : s.qe()
                }
                on(e, t, n, r) {
                    const s = new Xc(e, Gr.empty(), t, n);
                    return r ? s.qe() : s
                }
                Xe(e, t) {
                    const n = new eu(t),
                        r = null != t.collectionGroup ? t.collectionGroup : t.path.lastSegment();
                    return this.getFieldIndexes(e, r).next((e => {
                        let t = null;
                        for (const r of e) n.Qe(r) && (!t || r.fields.length > t.fields.length) && (t = r);
                        return t
                    }))
                }
                getIndexType(e, t) {
                    let n = 2;
                    const r = this.Ze(t);
                    return ss.forEach(r, (t => this.Xe(e, t).next((e => {
                        e ? 0 !== n && e.fields.length < function (e) {
                            let t = new ti(jr.comparator),
                                n = !1;
                            for (const r of e.filters)
                                for (const e of r.getFlattenedFilters()) e.field.isKeyField() || ("array-contains" === e.op || "array-contains-any" === e.op ? n = !0 : t = t.add(e.field));
                            for (const n of e.orderBy) n.field.isKeyField() || (t = t.add(n.field));
                            return t.size + (n ? 1 : 0)
                        }(t) && (n = 1) : n = 0
                    })))).next((() => function (e) {
                        return null !== e.limit
                    }(t) && r.length > 1 && 2 === n ? 1 : n))
                }
                un(e, t) {
                    const n = new Yc;
                    for (const r of Wr(e)) {
                        const e = t.data.field(r.fieldPath);
                        if (null == e) return null;
                        const s = n.Le(r.kind);
                        jc.pe.oe(e, s)
                    }
                    return n.$e()
                }
                sn(e) {
                    const t = new Yc;
                    return jc.pe.oe(e, t.Le(0)), t.$e()
                }
                cn(e, t) {
                    const n = new Yc;
                    return jc.pe.oe(Si(this.databaseId, t), n.Le(function (e) {
                        const t = Wr(e);
                        return 0 === t.length ? 0 : t[t.length - 1].kind
                    }(e))), n.$e()
                }
                en(e, t, n) {
                    if (null === n) return [];
                    let r = [];
                    r.push(new Yc);
                    let s = 0;
                    for (const i of Wr(e)) {
                        const e = n[s++];
                        for (const n of r)
                            if (this.an(t, i.fieldPath) && Ci(e)) r = this.hn(r, i, e);
                            else {
                                const t = n.Le(i.kind);
                                jc.pe.oe(e, t)
                            }
                    }
                    return this.ln(r)
                }
                tn(e, t, n) {
                    return this.en(e, t, n.position)
                }
                ln(e) {
                    const t = [];
                    for (let n = 0; n < e.length; ++n) t[n] = e[n].$e();
                    return t
                }
                hn(e, t, n) {
                    const r = [...e],
                        s = [];
                    for (const e of n.arrayValue.values || [])
                        for (const n of r) {
                            const r = new Yc;
                            r.seed(n.$e()), jc.pe.oe(e, r.Le(t.kind)), s.push(r)
                        }
                    return s
                }
                an(e, t) {
                    return !!e.filters.find((e => e instanceof Ki && e.field.isEqual(t) && ("in" === e.op || "not-in" === e.op)))
                }
                getFieldIndexes(e, t) {
                    const n = pu(e),
                        r = yu(e);
                    return (t ? n.j("collectionGroupIndex", IDBKeyRange.bound(t, t)) : n.j()).next((e => {
                        const t = [];
                        return ss.forEach(e, (e => r.get([e.indexId, this.uid]).next((n => {
                            t.push(function (e, t) {
                                const n = t ? new Yr(t.sequenceNumber, new Zr(kc(t.readTime), new Gr(Es(t.documentKey)), t.largestBatchId)) : Yr.empty(),
                                    r = e.fields.map((([e, t]) => new Hr(jr.fromServerFormat(e), t)));
                                return new Kr(e.indexId, e.collectionGroup, r, n)
                            }(e, n))
                        })))).next((() => t))
                    }))
                }
                getNextCollectionGroupToUpdate(e) {
                    return this.getFieldIndexes(e).next((e => 0 === e.length ? null : (e.sort(((e, t) => {
                        const n = e.indexState.sequenceNumber - t.indexState.sequenceNumber;
                        return 0 !== n ? n : Pr(e.collectionGroup, t.collectionGroup)
                    })), e[0].collectionGroup)))
                }
                updateCollectionGroup(e, t, n) {
                    const r = pu(e),
                        s = yu(e);
                    return this.fn(e).next((e => r.j("collectionGroupIndex", IDBKeyRange.bound(t, t)).next((t => ss.forEach(t, (t => s.put(Vc(t.indexId, this.user, e, n))))))))
                }
                updateIndexEntries(e, t) {
                    const n = new Map;
                    return ss.forEach(t, ((t, r) => {
                        const s = n.get(t.collectionGroup);
                        return (s ? ss.resolve(s) : this.getFieldIndexes(e, t.collectionGroup)).next((s => (n.set(t.collectionGroup, s), ss.forEach(s, (n => this.dn(e, t, n).next((t => {
                            const s = this.wn(r, n);
                            return t.isEqual(s) ? ss.resolve() : this._n(e, r, n, t, s)
                        })))))))
                    }))
                }
                mn(e, t, n, r) {
                    return mu(e).put({
                        indexId: r.indexId,
                        uid: this.uid,
                        arrayValue: r.arrayValue,
                        directionalValue: r.directionalValue,
                        orderedDocumentKey: this.cn(n, t.key),
                        documentKey: t.key.path.toArray()
                    })
                }
                gn(e, t, n, r) {
                    return mu(e).delete([r.indexId, this.uid, r.arrayValue, r.directionalValue, this.cn(n, t.key), t.key.path.toArray()])
                }
                dn(e, t, n) {
                    const r = mu(e);
                    let s = new ti(Jc);
                    return r.Z({
                        index: "documentKeyIndex",
                        range: IDBKeyRange.only([n.indexId, this.uid, this.cn(n, t)])
                    }, ((e, r) => {
                        s = s.add(new Xc(n.indexId, t, r.arrayValue, r.directionalValue))
                    })).next((() => s))
                }
                wn(e, t) {
                    let n = new ti(Jc);
                    const r = this.un(t, e);
                    if (null == r) return n;
                    const s = Qr(t);
                    if (null != s) {
                        const i = e.data.field(s.fieldPath);
                        if (Ci(i))
                            for (const s of i.arrayValue.values || []) n = n.add(new Xc(t.indexId, e.key, this.sn(s), r))
                    } else n = n.add(new Xc(t.indexId, e.key, du, r));
                    return n
                }
                _n(e, t, n, r, s) {
                    pr("IndexedDbIndexManager", "Updating index entries for document '%s'", t.key);
                    const i = [];
                    return function (e, t, n, r, s) {
                        const i = e.getIterator(),
                            o = t.getIterator();
                        let a = ri(i),
                            c = ri(o);
                        for (; a || c;) {
                            let e = !1,
                                t = !1;
                            if (a && c) {
                                const r = n(a, c);
                                r < 0 ? t = !0 : r > 0 && (e = !0)
                            } else null != a ? t = !0 : e = !0;
                            e ? (r(c), c = ri(o)) : t ? (s(a), a = ri(i)) : (a = ri(i), c = ri(o))
                        }
                    }(r, s, Jc, (r => {
                        i.push(this.mn(e, t, n, r))
                    }), (r => {
                        i.push(this.gn(e, t, n, r))
                    })), ss.waitFor(i)
                }
                fn(e) {
                    let t = 1;
                    return yu(e).Z({
                        index: "sequenceNumberIndex",
                        reverse: !0,
                        range: IDBKeyRange.upperBound([this.uid, Number.MAX_SAFE_INTEGER])
                    }, ((e, n, r) => {
                        r.done(), t = n.sequenceNumber + 1
                    })).next((() => t))
                }
                createRange(e, t, n) {
                    n = n.sort(((e, t) => Jc(e, t))).filter(((e, t, n) => !t || 0 !== Jc(e, n[t - 1])));
                    const r = [];
                    r.push(e);
                    for (const s of n) {
                        const n = Jc(s, e),
                            i = Jc(s, t);
                        if (0 === n) r[0] = e.qe();
                        else if (n > 0 && i < 0) r.push(s), r.push(s.qe());
                        else if (i > 0) break
                    }
                    r.push(t);
                    const s = [];
                    for (let e = 0; e < r.length; e += 2) {
                        if (this.yn(r[e], r[e + 1])) return [];
                        const t = [r[e].indexId, this.uid, r[e].arrayValue, r[e].directionalValue, du, []],
                            n = [r[e + 1].indexId, this.uid, r[e + 1].arrayValue, r[e + 1].directionalValue, du, []];
                        s.push(IDBKeyRange.bound(t, n))
                    }
                    return s
                }
                yn(e, t) {
                    return Jc(e, t) > 0
                }
                getMinOffsetFromCollectionGroup(e, t) {
                    return this.getFieldIndexes(e, t).next(wu)
                }
                getMinOffset(e, t) {
                    return ss.mapArray(this.Ze(t), (t => this.Xe(e, t).next((e => e || br())))).next(wu)
                }
            }

            function gu(e) {
                return Ws(e, "collectionParents")
            }

            function mu(e) {
                return Ws(e, "indexEntries")
            }

            function pu(e) {
                return Ws(e, "indexConfiguration")
            }

            function yu(e) {
                return Ws(e, "indexState")
            }

            function wu(e) {
                Ir(0 !== e.length);
                let t = e[0].indexState.offset,
                    n = t.largestBatchId;
                for (let r = 1; r < e.length; r++) {
                    const s = e[r].indexState.offset;
                    es(s, t) < 0 && (t = s), n < s.largestBatchId && (n = s.largestBatchId)
                }
                return new Zr(t.readTime, t.documentKey, n)
            }
            const vu = {
                didRun: !1,
                sequenceNumbersCollected: 0,
                targetsRemoved: 0,
                documentsRemoved: 0
            };
            class bu {
                constructor(e, t, n) {
                    this.cacheSizeCollectionThreshold = e, this.percentileToCollect = t, this.maximumSequenceNumbersToCollect = n
                }
                static withCacheSize(e) {
                    return new bu(e, bu.DEFAULT_COLLECTION_PERCENTILE, bu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)
                }
            }

            function Iu(e, t, n) {
                const r = e.store("mutations"),
                    s = e.store("documentMutations"),
                    i = [],
                    o = IDBKeyRange.only(n.batchId);
                let a = 0;
                const c = r.Z({
                    range: o
                }, ((e, t, n) => (a++, n.delete())));
                i.push(c.next((() => {
                    Ir(1 === a)
                })));
                const u = [];
                for (const e of n.mutations) {
                    const r = Ds(t, e.key.path, n.batchId);
                    i.push(s.delete(r)), u.push(e.key)
                }
                return ss.waitFor(i).next((() => u))
            }

            function _u(e) {
                if (!e) return 0;
                let t;
                if (e.document) t = e.document;
                else if (e.unknownDocument) t = e.unknownDocument;
                else {
                    if (!e.noDocument) throw br();
                    t = e.noDocument
                }
                return JSON.stringify(t).length
            }
            bu.DEFAULT_COLLECTION_PERCENTILE = 10, bu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, bu.DEFAULT = new bu(41943040, bu.DEFAULT_COLLECTION_PERCENTILE, bu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), bu.DISABLED = new bu(-1, 0, 0);
            class Eu {
                constructor(e, t, n, r) {
                    this.userId = e, this.serializer = t, this.indexManager = n, this.referenceDelegate = r, this.pn = {}
                }
                static ie(e, t, n, r) {
                    Ir("" !== e.uid);
                    const s = e.isAuthenticated() ? e.uid : "";
                    return new Eu(s, t, n, r)
                }
                checkEmpty(e) {
                    let t = !0;
                    const n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
                    return Su(e).Z({
                        index: "userMutationsIndex",
                        range: n
                    }, ((e, n, r) => {
                        t = !1, r.done()
                    })).next((() => t))
                }
                addMutationBatch(e, t, n, r) {
                    const s = Du(e),
                        i = Su(e);
                    return i.add({}).next((o => {
                        Ir("number" == typeof o);
                        const a = new xa(o, t, n, r),
                            c = function (e, t, n) {
                                const r = n.baseMutations.map((t => dc(e.se, t))),
                                    s = n.mutations.map((t => dc(e.se, t)));
                                return {
                                    userId: t,
                                    batchId: n.batchId,
                                    localWriteTimeMs: n.localWriteTime.toMillis(),
                                    baseMutations: r,
                                    mutations: s
                                }
                            }(this.serializer, this.userId, a),
                            u = [];
                        let l = new ti(((e, t) => Pr(e.canonicalString(), t.canonicalString())));
                        for (const e of r) {
                            const t = Ds(this.userId, e.key.path, o);
                            l = l.add(e.key.path.popLast()), u.push(i.put(c)), u.push(s.put(t, Cs))
                        }
                        return l.forEach((t => {
                            u.push(this.indexManager.addToCollectionParentIndex(e, t))
                        })), e.addOnCommittedListener((() => {
                            this.pn[o] = a.keys()
                        })), ss.waitFor(u).next((() => a))
                    }))
                }
                lookupMutationBatch(e, t) {
                    return Su(e).get(t).next((e => e ? (Ir(e.userId === this.userId), Rc(this.serializer, e)) : null))
                }
                In(e, t) {
                    return this.pn[t] ? ss.resolve(this.pn[t]) : this.lookupMutationBatch(e, t).next((e => {
                        if (e) {
                            const n = e.keys();
                            return this.pn[t] = n, n
                        }
                        return null
                    }))
                }
                getNextMutationBatchAfterBatchId(e, t) {
                    const n = t + 1,
                        r = IDBKeyRange.lowerBound([this.userId, n]);
                    let s = null;
                    return Su(e).Z({
                        index: "userMutationsIndex",
                        range: r
                    }, ((e, t, r) => {
                        t.userId === this.userId && (Ir(t.batchId >= n), s = Rc(this.serializer, t)), r.done()
                    })).next((() => s))
                }
                getHighestUnacknowledgedBatchId(e) {
                    const t = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]);
                    let n = -1;
                    return Su(e).Z({
                        index: "userMutationsIndex",
                        range: t,
                        reverse: !0
                    }, ((e, t, r) => {
                        n = t.batchId, r.done()
                    })).next((() => n))
                }
                getAllMutationBatches(e) {
                    const t = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
                    return Su(e).j("userMutationsIndex", t).next((e => e.map((e => Rc(this.serializer, e)))))
                }
                getAllMutationBatchesAffectingDocumentKey(e, t) {
                    const n = Ss(this.userId, t.path),
                        r = IDBKeyRange.lowerBound(n),
                        s = [];
                    return Du(e).Z({
                        range: r
                    }, ((n, r, i) => {
                        const [o, a, c] = n, u = Es(a);
                        if (o === this.userId && t.path.isEqual(u)) return Su(e).get(c).next((e => {
                            if (!e) throw br();
                            Ir(e.userId === this.userId), s.push(Rc(this.serializer, e))
                        }));
                        i.done()
                    })).next((() => s))
                }
                getAllMutationBatchesAffectingDocumentKeys(e, t) {
                    let n = new ti(Pr);
                    const r = [];
                    return t.forEach((t => {
                        const s = Ss(this.userId, t.path),
                            i = IDBKeyRange.lowerBound(s),
                            o = Du(e).Z({
                                range: i
                            }, ((e, r, s) => {
                                const [i, o, a] = e, c = Es(o);
                                i === this.userId && t.path.isEqual(c) ? n = n.add(a) : s.done()
                            }));
                        r.push(o)
                    })), ss.waitFor(r).next((() => this.Tn(e, n)))
                }
                getAllMutationBatchesAffectingQuery(e, t) {
                    const n = t.path,
                        r = n.length + 1,
                        s = Ss(this.userId, n),
                        i = IDBKeyRange.lowerBound(s);
                    let o = new ti(Pr);
                    return Du(e).Z({
                        range: i
                    }, ((e, t, s) => {
                        const [i, a, c] = e, u = Es(a);
                        i === this.userId && n.isPrefixOf(u) ? u.length === r && (o = o.add(c)) : s.done()
                    })).next((() => this.Tn(e, o)))
                }
                Tn(e, t) {
                    const n = [],
                        r = [];
                    return t.forEach((t => {
                        r.push(Su(e).get(t).next((e => {
                            if (null === e) throw br();
                            Ir(e.userId === this.userId), n.push(Rc(this.serializer, e))
                        })))
                    })), ss.waitFor(r).next((() => n))
                }
                removeMutationBatch(e, t) {
                    return Iu(e.at, this.userId, t).next((n => (e.addOnCommittedListener((() => {
                        this.En(t.batchId)
                    })), ss.forEach(n, (t => this.referenceDelegate.markPotentiallyOrphaned(e, t))))))
                }
                En(e) {
                    delete this.pn[e]
                }
                performConsistencyCheck(e) {
                    return this.checkEmpty(e).next((t => {
                        if (!t) return ss.resolve();
                        const n = IDBKeyRange.lowerBound([this.userId]),
                            r = [];
                        return Du(e).Z({
                            range: n
                        }, ((e, t, n) => {
                            if (e[0] === this.userId) {
                                const t = Es(e[1]);
                                r.push(t)
                            } else n.done()
                        })).next((() => {
                            Ir(0 === r.length)
                        }))
                    }))
                }
                containsKey(e, t) {
                    return Tu(e, this.userId, t)
                }
                An(e) {
                    return Cu(e).get(this.userId).next((e => e || {
                        userId: this.userId,
                        lastAcknowledgedBatchId: -1,
                        lastStreamToken: ""
                    }))
                }
            }

            function Tu(e, t, n) {
                const r = Ss(t, n.path),
                    s = r[1],
                    i = IDBKeyRange.lowerBound(r);
                let o = !1;
                return Du(e).Z({
                    range: i,
                    Y: !0
                }, ((e, n, r) => {
                    const [i, a, c] = e;
                    i === t && a === s && (o = !0), r.done()
                })).next((() => o))
            }

            function Su(e) {
                return Ws(e, "mutations")
            }

            function Du(e) {
                return Ws(e, "documentMutations")
            }

            function Cu(e) {
                return Ws(e, "mutationQueues")
            }
            class Au {
                constructor(e) {
                    this.Rn = e
                }
                next() {
                    return this.Rn += 2, this.Rn
                }
                static vn() {
                    return new Au(0)
                }
                static bn() {
                    return new Au(-1)
                }
            }
            class xu {
                constructor(e, t) {
                    this.referenceDelegate = e, this.serializer = t
                }
                allocateTargetId(e) {
                    return this.Pn(e).next((t => {
                        const n = new Au(t.highestTargetId);
                        return t.highestTargetId = n.next(), this.Vn(e, t).next((() => t.highestTargetId))
                    }))
                }
                getLastRemoteSnapshotVersion(e) {
                    return this.Pn(e).next((e => Br.fromTimestamp(new Ur(e.lastRemoteSnapshotVersion.seconds, e.lastRemoteSnapshotVersion.nanoseconds))))
                }
                getHighestSequenceNumber(e) {
                    return this.Pn(e).next((e => e.highestListenSequenceNumber))
                }
                setTargetsMetadata(e, t, n) {
                    return this.Pn(e).next((r => (r.highestListenSequenceNumber = t, n && (r.lastRemoteSnapshotVersion = n.toTimestamp()), t > r.highestListenSequenceNumber && (r.highestListenSequenceNumber = t), this.Vn(e, r))))
                }
                addTargetData(e, t) {
                    return this.Sn(e, t).next((() => this.Pn(e).next((n => (n.targetCount += 1, this.Dn(t, n), this.Vn(e, n))))))
                }
                updateTargetData(e, t) {
                    return this.Sn(e, t)
                }
                removeTargetData(e, t) {
                    return this.removeMatchingKeysForTargetId(e, t.targetId).next((() => Nu(e).delete(t.targetId))).next((() => this.Pn(e))).next((t => (Ir(t.targetCount > 0), t.targetCount -= 1, this.Vn(e, t))))
                }
                removeTargets(e, t, n) {
                    let r = 0;
                    const s = [];
                    return Nu(e).Z(((i, o) => {
                        const a = Oc(o);
                        a.sequenceNumber <= t && null === n.get(a.targetId) && (r++, s.push(this.removeTargetData(e, a)))
                    })).next((() => ss.waitFor(s))).next((() => r))
                }
                forEachTarget(e, t) {
                    return Nu(e).Z(((e, n) => {
                        const r = Oc(n);
                        t(r)
                    }))
                }
                Pn(e) {
                    return ku(e).get("targetGlobalKey").next((e => (Ir(null !== e), e)))
                }
                Vn(e, t) {
                    return ku(e).put("targetGlobalKey", t)
                }
                Sn(e, t) {
                    return Nu(e).put(Lc(this.serializer, t))
                }
                Dn(e, t) {
                    let n = !1;
                    return e.targetId > t.highestTargetId && (t.highestTargetId = e.targetId, n = !0), e.sequenceNumber > t.highestListenSequenceNumber && (t.highestListenSequenceNumber = e.sequenceNumber, n = !0), n
                }
                getTargetCount(e) {
                    return this.Pn(e).next((e => e.targetCount))
                }
                getTargetData(e, t) {
                    const n = fo(t),
                        r = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY]);
                    let s = null;
                    return Nu(e).Z({
                        range: r,
                        index: "queryTargetsIndex"
                    }, ((e, n, r) => {
                        const i = Oc(n);
                        go(t, i.target) && (s = i, r.done())
                    })).next((() => s))
                }
                addMatchingKeys(e, t, n) {
                    const r = [],
                        s = Ru(e);
                    return t.forEach((t => {
                        const i = bs(t.path);
                        r.push(s.put({
                            targetId: n,
                            path: i
                        })), r.push(this.referenceDelegate.addReference(e, n, t))
                    })), ss.waitFor(r)
                }
                removeMatchingKeys(e, t, n) {
                    const r = Ru(e);
                    return ss.forEach(t, (t => {
                        const s = bs(t.path);
                        return ss.waitFor([r.delete([n, s]), this.referenceDelegate.removeReference(e, n, t)])
                    }))
                }
                removeMatchingKeysForTargetId(e, t) {
                    const n = Ru(e),
                        r = IDBKeyRange.bound([t], [t + 1], !1, !0);
                    return n.delete(r)
                }
                getMatchingKeysForTargetId(e, t) {
                    const n = IDBKeyRange.bound([t], [t + 1], !1, !0),
                        r = Ru(e);
                    let s = Wo();
                    return r.Z({
                        range: n,
                        Y: !0
                    }, ((e, t, n) => {
                        const r = Es(e[1]),
                            i = new Gr(r);
                        s = s.add(i)
                    })).next((() => s))
                }
                containsKey(e, t) {
                    const n = bs(t.path),
                        r = IDBKeyRange.bound([n], [Vr(n)], !1, !0);
                    let s = 0;
                    return Ru(e).Z({
                        index: "documentTargetsIndex",
                        Y: !0,
                        range: r
                    }, (([e, t], n, r) => {
                        0 !== e && (s++, r.done())
                    })).next((() => s > 0))
                }
                ne(e, t) {
                    return Nu(e).get(t).next((e => e ? Oc(e) : null))
                }
            }

            function Nu(e) {
                return Ws(e, "targets")
            }

            function ku(e) {
                return Ws(e, "targetGlobal")
            }

            function Ru(e) {
                return Ws(e, "targetDocuments")
            }

            function Ou([e, t], [n, r]) {
                const s = Pr(e, n);
                return 0 === s ? Pr(t, r) : s
            }
            class Lu {
                constructor(e) {
                    this.Cn = e, this.buffer = new ti(Ou), this.xn = 0
                }
                Nn() {
                    return ++this.xn
                }
                kn(e) {
                    const t = [e, this.Nn()];
                    if (this.buffer.size < this.Cn) this.buffer = this.buffer.add(t);
                    else {
                        const e = this.buffer.last();
                        Ou(t, e) < 0 && (this.buffer = this.buffer.delete(e).add(t))
                    }
                }
                get maxValue() {
                    return this.buffer.last()[0]
                }
            }
            class Mu {
                constructor(e, t, n) {
                    this.garbageCollector = e, this.asyncQueue = t, this.localStore = n, this.On = null
                }
                start() {
                    -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold && this.$n(6e4)
                }
                stop() {
                    this.On && (this.On.cancel(), this.On = null)
                }
                get started() {
                    return null !== this.On
                }
                $n(e) {
                    pr("LruGarbageCollector", `Garbage collection scheduled in ${e}ms`), this.On = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection", e, (async () => {
                        this.On = null;
                        try {
                            await this.localStore.collectGarbage(this.garbageCollector)
                        } catch (e) {
                            us(e) ? pr("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e) : await rs(e)
                        }
                        await this.$n(3e5)
                    }))
                }
            }
            class Pu {
                constructor(e, t) {
                    this.Mn = e, this.params = t
                }
                calculateTargetCount(e, t) {
                    return this.Mn.Fn(e).next((e => Math.floor(t / 100 * e)))
                }
                nthSequenceNumber(e, t) {
                    if (0 === t) return ss.resolve(ps.ct);
                    const n = new Lu(t);
                    return this.Mn.forEachTarget(e, (e => n.kn(e.sequenceNumber))).next((() => this.Mn.Bn(e, (e => n.kn(e))))).next((() => n.maxValue))
                }
                removeTargets(e, t, n) {
                    return this.Mn.removeTargets(e, t, n)
                }
                removeOrphanedDocuments(e, t) {
                    return this.Mn.removeOrphanedDocuments(e, t)
                }
                collect(e, t) {
                    return -1 === this.params.cacheSizeCollectionThreshold ? (pr("LruGarbageCollector", "Garbage collection skipped; disabled"), ss.resolve(vu)) : this.getCacheSize(e).next((n => n < this.params.cacheSizeCollectionThreshold ? (pr("LruGarbageCollector", `Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`), vu) : this.Ln(e, t)))
                }
                getCacheSize(e) {
                    return this.Mn.getCacheSize(e)
                }
                Ln(e, t) {
                    let n, r, s, i, o, c, u;
                    const l = Date.now();
                    return this.calculateTargetCount(e, this.params.percentileToCollect).next((t => (t > this.params.maximumSequenceNumbersToCollect ? (pr("LruGarbageCollector", `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`), r = this.params.maximumSequenceNumbersToCollect) : r = t, i = Date.now(), this.nthSequenceNumber(e, r)))).next((r => (n = r, o = Date.now(), this.removeTargets(e, n, t)))).next((t => (s = t, c = Date.now(), this.removeOrphanedDocuments(e, n)))).next((e => (u = Date.now(), mr() <= a.in.DEBUG && pr("LruGarbageCollector", `LRU Garbage Collection\n\tCounted targets in ${i-l}ms\n\tDetermined least recently used ${r} in ` + (o - i) + "ms\n" + `\tRemoved ${s} targets in ` + (c - o) + "ms\n" + `\tRemoved ${e} documents in ` + (u - c) + "ms\n" + `Total Duration: ${u-l}ms`), ss.resolve({
                        didRun: !0,
                        sequenceNumbersCollected: r,
                        targetsRemoved: s,
                        documentsRemoved: e
                    }))))
                }
            }
            class Fu {
                constructor(e, t) {
                    this.db = e, this.garbageCollector = function (e, t) {
                        return new Pu(e, t)
                    }(this, t)
                }
                Fn(e) {
                    const t = this.qn(e);
                    return this.db.getTargetCache().getTargetCount(e).next((e => t.next((t => e + t))))
                }
                qn(e) {
                    let t = 0;
                    return this.Bn(e, (e => {
                        t++
                    })).next((() => t))
                }
                forEachTarget(e, t) {
                    return this.db.getTargetCache().forEachTarget(e, t)
                }
                Bn(e, t) {
                    return this.Un(e, ((e, n) => t(n)))
                }
                addReference(e, t, n) {
                    return Vu(e, n)
                }
                removeReference(e, t, n) {
                    return Vu(e, n)
                }
                removeTargets(e, t, n) {
                    return this.db.getTargetCache().removeTargets(e, t, n)
                }
                markPotentiallyOrphaned(e, t) {
                    return Vu(e, t)
                }
                Kn(e, t) {
                    return function (e, t) {
                        let n = !1;
                        return Cu(e).X((r => Tu(e, r, t).next((e => (e && (n = !0), ss.resolve(!e)))))).next((() => n))
                    }(e, t)
                }
                removeOrphanedDocuments(e, t) {
                    const n = this.db.getRemoteDocumentCache().newChangeBuffer(),
                        r = [];
                    let s = 0;
                    return this.Un(e, ((i, o) => {
                        if (o <= t) {
                            const t = this.Kn(e, i).next((t => {
                                if (!t) return s++, n.getEntry(e, i).next((() => (n.removeEntry(i, Br.min()), Ru(e).delete([0, bs(i.path)]))))
                            }));
                            r.push(t)
                        }
                    })).next((() => ss.waitFor(r))).next((() => n.apply(e))).next((() => s))
                }
                removeTarget(e, t) {
                    const n = t.withSequenceNumber(e.currentSequenceNumber);
                    return this.db.getTargetCache().updateTargetData(e, n)
                }
                updateLimboDocument(e, t) {
                    return Vu(e, t)
                }
                Un(e, t) {
                    const n = Ru(e);
                    let r, s = ps.ct;
                    return n.Z({
                        index: "documentTargetsIndex"
                    }, (([e, n], {
                        path: i,
                        sequenceNumber: o
                    }) => {
                        0 === e ? (s !== ps.ct && t(new Gr(Es(r)), s), s = o, r = i) : s = ps.ct
                    })).next((() => {
                        s !== ps.ct && t(new Gr(Es(r)), s)
                    }))
                }
                getCacheSize(e) {
                    return this.db.getRemoteDocumentCache().getSize(e)
                }
            }

            function Vu(e, t) {
                return Ru(e).put(function (e, t) {
                    return {
                        targetId: 0,
                        path: bs(e.path),
                        sequenceNumber: t
                    }
                }(t, e.currentSequenceNumber))
            }
            class Uu {
                constructor() {
                    this.changes = new Fo((e => e.toString()), ((e, t) => e.isEqual(t))), this.changesApplied = !1
                }
                addEntry(e) {
                    this.assertNotApplied(), this.changes.set(e.key, e)
                }
                removeEntry(e, t) {
                    this.assertNotApplied(), this.changes.set(e, Ui.newInvalidDocument(e).setReadTime(t))
                }
                getEntry(e, t) {
                    this.assertNotApplied();
                    const n = this.changes.get(t);
                    return void 0 !== n ? ss.resolve(n) : this.getFromCache(e, t)
                }
                getEntries(e, t) {
                    return this.getAllFromCache(e, t)
                }
                apply(e) {
                    return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(e)
                }
                assertNotApplied() {}
            }
            class Bu {
                constructor(e) {
                    this.serializer = e
                }
                setIndexManager(e) {
                    this.indexManager = e
                }
                addEntry(e, t, n) {
                    return ju(e).put(n)
                }
                removeEntry(e, t, n) {
                    return ju(e).delete(function (e, t) {
                        const n = e.path.toArray();
                        return [n.slice(0, n.length - 2), n[n.length - 2], xc(t), n[n.length - 1]]
                    }(t, n))
                }
                updateMetadata(e, t) {
                    return this.getMetadata(e).next((n => (n.byteSize += t, this.Gn(e, n))))
                }
                getEntry(e, t) {
                    let n = Ui.newInvalidDocument(t);
                    return ju(e).Z({
                        index: "documentKeyIndex",
                        range: IDBKeyRange.only(Gu(t))
                    }, ((e, r) => {
                        n = this.Qn(t, r)
                    })).next((() => n))
                }
                zn(e, t) {
                    let n = {
                        size: 0,
                        document: Ui.newInvalidDocument(t)
                    };
                    return ju(e).Z({
                        index: "documentKeyIndex",
                        range: IDBKeyRange.only(Gu(t))
                    }, ((e, r) => {
                        n = {
                            document: this.Qn(t, r),
                            size: _u(r)
                        }
                    })).next((() => n))
                }
                getEntries(e, t) {
                    let n = Uo();
                    return this.jn(e, t, ((e, t) => {
                        const r = this.Qn(e, t);
                        n = n.insert(e, r)
                    })).next((() => n))
                }
                Wn(e, t) {
                    let n = Uo(),
                        r = new Js(Gr.comparator);
                    return this.jn(e, t, ((e, t) => {
                        const s = this.Qn(e, t);
                        n = n.insert(e, s), r = r.insert(e, _u(t))
                    })).next((() => ({
                        documents: n,
                        Hn: r
                    })))
                }
                jn(e, t, n) {
                    if (t.isEmpty()) return ss.resolve();
                    let r = new ti(Qu);
                    t.forEach((e => r = r.add(e)));
                    const s = IDBKeyRange.bound(Gu(r.first()), Gu(r.last())),
                        i = r.getIterator();
                    let o = i.getNext();
                    return ju(e).Z({
                        index: "documentKeyIndex",
                        range: s
                    }, ((e, t, r) => {
                        const s = Gr.fromSegments([...t.prefixPath, t.collectionGroup, t.documentId]);
                        for (; o && Qu(o, s) < 0;) n(o, null), o = i.getNext();
                        o && o.isEqual(s) && (n(o, t), o = i.hasNext() ? i.getNext() : null), o ? r.G(Gu(o)) : r.done()
                    })).next((() => {
                        for (; o;) n(o, null), o = i.hasNext() ? i.getNext() : null
                    }))
                }
                getDocumentsMatchingQuery(e, t, n, r) {
                    const s = t.path,
                        i = [s.popLast().toArray(), s.lastSegment(), xc(n.readTime), n.documentKey.path.isEmpty() ? "" : n.documentKey.path.lastSegment()],
                        o = [s.popLast().toArray(), s.lastSegment(), [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], ""];
                    return ju(e).j(IDBKeyRange.bound(i, o, !0)).next((e => {
                        let n = Uo();
                        for (const s of e) {
                            const e = this.Qn(Gr.fromSegments(s.prefixPath.concat(s.collectionGroup, s.documentId)), s);
                            e.isFoundDocument() && (Oo(t, e) || r.has(e.key)) && (n = n.insert(e.key, e))
                        }
                        return n
                    }))
                }
                getAllFromCollectionGroup(e, t, n, r) {
                    let s = Uo();
                    const i = Ku(t, n),
                        o = Ku(t, Zr.max());
                    return ju(e).Z({
                        index: "collectionGroupIndex",
                        range: IDBKeyRange.bound(i, o, !0)
                    }, ((e, t, n) => {
                        const i = this.Qn(Gr.fromSegments(t.prefixPath.concat(t.collectionGroup, t.documentId)), t);
                        s = s.insert(i.key, i), s.size === r && n.done()
                    })).next((() => s))
                }
                newChangeBuffer(e) {
                    return new $u(this, !!e && e.trackRemovals)
                }
                getSize(e) {
                    return this.getMetadata(e).next((e => e.byteSize))
                }
                getMetadata(e) {
                    return zu(e).get("remoteDocumentGlobalKey").next((e => (Ir(!!e), e)))
                }
                Gn(e, t) {
                    return zu(e).put("remoteDocumentGlobalKey", t)
                }
                Qn(e, t) {
                    if (t) {
                        const e = function (e, t) {
                            let n;
                            if (t.document) n = hc(e.se, t.document, !!t.hasCommittedMutations);
                            else if (t.noDocument) {
                                const e = Gr.fromSegments(t.noDocument.path),
                                    r = kc(t.noDocument.readTime);
                                n = Ui.newNoDocument(e, r), t.hasCommittedMutations && n.setHasCommittedMutations()
                            } else {
                                if (!t.unknownDocument) return br(); {
                                    const e = Gr.fromSegments(t.unknownDocument.path),
                                        r = kc(t.unknownDocument.version);
                                    n = Ui.newUnknownDocument(e, r)
                                }
                            }
                            return t.readTime && n.setReadTime(function (e) {
                                const t = new Ur(e[0], e[1]);
                                return Br.fromTimestamp(t)
                            }(t.readTime)), n
                        }(this.serializer, t);
                        if (!e.isNoDocument() || !e.version.isEqual(Br.min())) return e
                    }
                    return Ui.newInvalidDocument(e)
                }
            }

            function qu(e) {
                return new Bu(e)
            }
            class $u extends Uu {
                constructor(e, t) {
                    super(), this.Jn = e, this.trackRemovals = t, this.Yn = new Fo((e => e.toString()), ((e, t) => e.isEqual(t)))
                }
                applyChanges(e) {
                    const t = [];
                    let n = 0,
                        r = new ti(((e, t) => Pr(e.canonicalString(), t.canonicalString())));
                    return this.changes.forEach(((s, i) => {
                        const o = this.Yn.get(s);
                        if (t.push(this.Jn.removeEntry(e, s, o.readTime)), i.isValidDocument()) {
                            const a = Ac(this.Jn.serializer, i);
                            r = r.add(s.path.popLast());
                            const c = _u(a);
                            n += c - o.size, t.push(this.Jn.addEntry(e, s, a))
                        } else if (n -= o.size, this.trackRemovals) {
                            const n = Ac(this.Jn.serializer, i.convertToNoDocument(Br.min()));
                            t.push(this.Jn.addEntry(e, s, n))
                        }
                    })), r.forEach((n => {
                        t.push(this.Jn.indexManager.addToCollectionParentIndex(e, n))
                    })), t.push(this.Jn.updateMetadata(e, n)), ss.waitFor(t)
                }
                getFromCache(e, t) {
                    return this.Jn.zn(e, t).next((e => (this.Yn.set(t, {
                        size: e.size,
                        readTime: e.document.readTime
                    }), e.document)))
                }
                getAllFromCache(e, t) {
                    return this.Jn.Wn(e, t).next((({
                        documents: e,
                        Hn: t
                    }) => (t.forEach(((t, n) => {
                        this.Yn.set(t, {
                            size: n,
                            readTime: e.get(t).readTime
                        })
                    })), e)))
                }
            }

            function zu(e) {
                return Ws(e, "remoteDocumentGlobal")
            }

            function ju(e) {
                return Ws(e, "remoteDocumentsV14")
            }

            function Gu(e) {
                const t = e.path.toArray();
                return [t.slice(0, t.length - 2), t[t.length - 2], t[t.length - 1]]
            }

            function Ku(e, t) {
                const n = t.documentKey.path.toArray();
                return [e, xc(t.readTime), n.slice(0, n.length - 2), n.length > 0 ? n[n.length - 1] : ""]
            }

            function Qu(e, t) {
                const n = e.path.toArray(),
                    r = t.path.toArray();
                let s = 0;
                for (let e = 0; e < n.length - 2 && e < r.length - 2; ++e)
                    if (s = Pr(n[e], r[e]), s) return s;
                return s = Pr(n.length, r.length), s || (s = Pr(n[n.length - 2], r[r.length - 2]), s || Pr(n[n.length - 1], r[r.length - 1]))
            }
            class Wu {
                constructor(e, t) {
                    this.overlayedDocument = e, this.mutatedFields = t
                }
            }
            class Hu {
                constructor(e, t, n, r) {
                    this.remoteDocumentCache = e, this.mutationQueue = t, this.documentOverlayCache = n, this.indexManager = r
                }
                getDocument(e, t) {
                    let n = null;
                    return this.documentOverlayCache.getOverlay(e, t).next((r => (n = r, this.remoteDocumentCache.getEntry(e, t)))).next((e => (null !== n && va(n.mutation, e, si.empty(), Ur.now()), e)))
                }
                getDocuments(e, t) {
                    return this.remoteDocumentCache.getEntries(e, t).next((t => this.getLocalViewOfDocuments(e, t, Wo()).next((() => t))))
                }
                getLocalViewOfDocuments(e, t, n = Wo()) {
                    const r = zo();
                    return this.populateOverlays(e, r, t).next((() => this.computeViews(e, t, r, n).next((e => {
                        let t = qo();
                        return e.forEach(((e, n) => {
                            t = t.insert(e, n.overlayedDocument)
                        })), t
                    }))))
                }
                getOverlayedDocuments(e, t) {
                    const n = zo();
                    return this.populateOverlays(e, n, t).next((() => this.computeViews(e, t, n, Wo())))
                }
                populateOverlays(e, t, n) {
                    const r = [];
                    return n.forEach((e => {
                        t.has(e) || r.push(e)
                    })), this.documentOverlayCache.getOverlays(e, r).next((e => {
                        e.forEach(((e, n) => {
                            t.set(e, n)
                        }))
                    }))
                }
                computeViews(e, t, n, r) {
                    let s = Uo();
                    const i = Go(),
                        o = Go();
                    return t.forEach(((e, t) => {
                        const o = n.get(t.key);
                        r.has(t.key) && (void 0 === o || o.mutation instanceof Ea) ? s = s.insert(t.key, t) : void 0 !== o ? (i.set(t.key, o.mutation.getFieldMask()), va(o.mutation, t, o.mutation.getFieldMask(), Ur.now())) : i.set(t.key, si.empty())
                    })), this.recalculateAndSaveOverlays(e, s).next((e => (e.forEach(((e, t) => i.set(e, t))), t.forEach(((e, t) => {
                        var n;
                        return o.set(e, new Wu(t, null !== (n = i.get(e)) && void 0 !== n ? n : null))
                    })), o)))
                }
                recalculateAndSaveOverlays(e, t) {
                    const n = Go();
                    let r = new Js(((e, t) => e - t)),
                        s = Wo();
                    return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e, t).next((e => {
                        for (const s of e) s.keys().forEach((e => {
                            const i = t.get(e);
                            if (null === i) return;
                            let o = n.get(e) || si.empty();
                            o = s.applyToLocalView(i, o), n.set(e, o);
                            const a = (r.get(s.batchId) || Wo()).add(e);
                            r = r.insert(s.batchId, a)
                        }))
                    })).next((() => {
                        const i = [],
                            o = r.getReverseIterator();
                        for (; o.hasNext();) {
                            const r = o.getNext(),
                                a = r.key,
                                c = r.value,
                                u = jo();
                            c.forEach((e => {
                                if (!s.has(e)) {
                                    const r = ya(t.get(e), n.get(e));
                                    null !== r && u.set(e, r), s = s.add(e)
                                }
                            })), i.push(this.documentOverlayCache.saveOverlays(e, a, u))
                        }
                        return ss.waitFor(i)
                    })).next((() => n))
                }
                recalculateAndSaveOverlaysForDocumentKeys(e, t) {
                    return this.remoteDocumentCache.getEntries(e, t).next((t => this.recalculateAndSaveOverlays(e, t)))
                }
                getDocumentsMatchingQuery(e, t, n) {
                    return function (e) {
                        return Gr.isDocumentKey(e.path) && null === e.collectionGroup && 0 === e.filters.length
                    }(t) ? this.getDocumentsMatchingDocumentQuery(e, t.path) : So(t) ? this.getDocumentsMatchingCollectionGroupQuery(e, t, n) : this.getDocumentsMatchingCollectionQuery(e, t, n)
                }
                getNextDocuments(e, t, n, r) {
                    return this.remoteDocumentCache.getAllFromCollectionGroup(e, t, n, r).next((s => {
                        const i = r - s.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(e, t, n.largestBatchId, r - s.size) : ss.resolve(zo());
                        let o = -1,
                            a = s;
                        return i.next((t => ss.forEach(t, ((t, n) => (o < n.largestBatchId && (o = n.largestBatchId), s.get(t) ? ss.resolve() : this.remoteDocumentCache.getEntry(e, t).next((e => {
                            a = a.insert(t, e)
                        }))))).next((() => this.populateOverlays(e, t, s))).next((() => this.computeViews(e, a, t, Wo()))).next((e => ({
                            batchId: o,
                            changes: $o(e)
                        })))))
                    }))
                }
                getDocumentsMatchingDocumentQuery(e, t) {
                    return this.getDocument(e, new Gr(t)).next((e => {
                        let t = qo();
                        return e.isFoundDocument() && (t = t.insert(e.key, e)), t
                    }))
                }
                getDocumentsMatchingCollectionGroupQuery(e, t, n) {
                    const r = t.collectionGroup;
                    let s = qo();
                    return this.indexManager.getCollectionParents(e, r).next((i => ss.forEach(i, (i => {
                        const o = function (e, t) {
                            return new vo(t, null, e.explicitOrderBy.slice(), e.filters.slice(), e.limit, e.limitType, e.startAt, e.endAt)
                        }(t, i.child(r));
                        return this.getDocumentsMatchingCollectionQuery(e, o, n).next((e => {
                            e.forEach(((e, t) => {
                                s = s.insert(e, t)
                            }))
                        }))
                    })).next((() => s))))
                }
                getDocumentsMatchingCollectionQuery(e, t, n) {
                    let r;
                    return this.documentOverlayCache.getOverlaysForCollection(e, t.path, n.largestBatchId).next((s => (r = s, this.remoteDocumentCache.getDocumentsMatchingQuery(e, t, n, r)))).next((e => {
                        r.forEach(((t, n) => {
                            const r = n.getKey();
                            null === e.get(r) && (e = e.insert(r, Ui.newInvalidDocument(r)))
                        }));
                        let n = qo();
                        return e.forEach(((e, s) => {
                            const i = r.get(e);
                            void 0 !== i && va(i.mutation, s, si.empty(), Ur.now()), Oo(t, s) && (n = n.insert(e, s))
                        })), n
                    }))
                }
            }
            class Yu {
                constructor(e) {
                    this.serializer = e, this.Zn = new Map, this.Xn = new Map
                }
                getBundleMetadata(e, t) {
                    return ss.resolve(this.Zn.get(t))
                }
                saveBundleMetadata(e, t) {
                    var n;
                    return this.Zn.set(t.id, {
                        id: (n = t).id,
                        version: n.version,
                        createTime: tc(n.createTime)
                    }), ss.resolve()
                }
                getNamedQuery(e, t) {
                    return ss.resolve(this.Xn.get(t))
                }
                saveNamedQuery(e, t) {
                    return this.Xn.set(t.name, function (e) {
                        return {
                            name: e.name,
                            query: Mc(e.bundledQuery),
                            readTime: tc(e.readTime)
                        }
                    }(t)), ss.resolve()
                }
            }
            class Xu {
                constructor() {
                    this.overlays = new Js(Gr.comparator), this.ts = new Map
                }
                getOverlay(e, t) {
                    return ss.resolve(this.overlays.get(t))
                }
                getOverlays(e, t) {
                    const n = zo();
                    return ss.forEach(t, (t => this.getOverlay(e, t).next((e => {
                        null !== e && n.set(t, e)
                    })))).next((() => n))
                }
                saveOverlays(e, t, n) {
                    return n.forEach(((n, r) => {
                        this.re(e, t, r)
                    })), ss.resolve()
                }
                removeOverlaysForBatchId(e, t, n) {
                    const r = this.ts.get(n);
                    return void 0 !== r && (r.forEach((e => this.overlays = this.overlays.remove(e))), this.ts.delete(n)), ss.resolve()
                }
                getOverlaysForCollection(e, t, n) {
                    const r = zo(),
                        s = t.length + 1,
                        i = new Gr(t.child("")),
                        o = this.overlays.getIteratorFrom(i);
                    for (; o.hasNext();) {
                        const e = o.getNext().value,
                            i = e.getKey();
                        if (!t.isPrefixOf(i.path)) break;
                        i.path.length === s && e.largestBatchId > n && r.set(e.getKey(), e)
                    }
                    return ss.resolve(r)
                }
                getOverlaysForCollectionGroup(e, t, n, r) {
                    let s = new Js(((e, t) => e - t));
                    const i = this.overlays.getIterator();
                    for (; i.hasNext();) {
                        const e = i.getNext().value;
                        if (e.getKey().getCollectionGroup() === t && e.largestBatchId > n) {
                            let t = s.get(e.largestBatchId);
                            null === t && (t = zo(), s = s.insert(e.largestBatchId, t)), t.set(e.getKey(), e)
                        }
                    }
                    const o = zo(),
                        a = s.getIterator();
                    for (; a.hasNext() && (a.getNext().value.forEach(((e, t) => o.set(e, t))), !(o.size() >= r)););
                    return ss.resolve(o)
                }
                re(e, t, n) {
                    const r = this.overlays.get(n.key);
                    if (null !== r) {
                        const e = this.ts.get(r.largestBatchId).delete(n.key);
                        this.ts.set(r.largestBatchId, e)
                    }
                    this.overlays = this.overlays.insert(n.key, new ka(t, n));
                    let s = this.ts.get(t);
                    void 0 === s && (s = Wo(), this.ts.set(t, s)), this.ts.set(t, s.add(n.key))
                }
            }
            class Ju {
                constructor() {
                    this.es = new ti(Zu.ns), this.ss = new ti(Zu.rs)
                }
                isEmpty() {
                    return this.es.isEmpty()
                }
                addReference(e, t) {
                    const n = new Zu(e, t);
                    this.es = this.es.add(n), this.ss = this.ss.add(n)
                }
                os(e, t) {
                    e.forEach((e => this.addReference(e, t)))
                }
                removeReference(e, t) {
                    this.us(new Zu(e, t))
                }
                cs(e, t) {
                    e.forEach((e => this.removeReference(e, t)))
                }
                hs(e) {
                    const t = new Gr(new $r([])),
                        n = new Zu(t, e),
                        r = new Zu(t, e + 1),
                        s = [];
                    return this.ss.forEachInRange([n, r], (e => {
                        this.us(e), s.push(e.key)
                    })), s
                }
                ls() {
                    this.es.forEach((e => this.us(e)))
                }
                us(e) {
                    this.es = this.es.delete(e), this.ss = this.ss.delete(e)
                }
                fs(e) {
                    const t = new Gr(new $r([])),
                        n = new Zu(t, e),
                        r = new Zu(t, e + 1);
                    let s = Wo();
                    return this.ss.forEachInRange([n, r], (e => {
                        s = s.add(e.key)
                    })), s
                }
                containsKey(e) {
                    const t = new Zu(e, 0),
                        n = this.es.firstAfterOrEqual(t);
                    return null !== n && e.isEqual(n.key)
                }
            }
            class Zu {
                constructor(e, t) {
                    this.key = e, this.ds = t
                }
                static ns(e, t) {
                    return Gr.comparator(e.key, t.key) || Pr(e.ds, t.ds)
                }
                static rs(e, t) {
                    return Pr(e.ds, t.ds) || Gr.comparator(e.key, t.key)
                }
            }
            class el {
                constructor(e, t) {
                    this.indexManager = e, this.referenceDelegate = t, this.mutationQueue = [], this.ws = 1, this._s = new ti(Zu.ns)
                }
                checkEmpty(e) {
                    return ss.resolve(0 === this.mutationQueue.length)
                }
                addMutationBatch(e, t, n, r) {
                    const s = this.ws;
                    this.ws++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
                    const i = new xa(s, t, n, r);
                    this.mutationQueue.push(i);
                    for (const t of r) this._s = this._s.add(new Zu(t.key, s)), this.indexManager.addToCollectionParentIndex(e, t.key.path.popLast());
                    return ss.resolve(i)
                }
                lookupMutationBatch(e, t) {
                    return ss.resolve(this.gs(t))
                }
                getNextMutationBatchAfterBatchId(e, t) {
                    const n = t + 1,
                        r = this.ys(n),
                        s = r < 0 ? 0 : r;
                    return ss.resolve(this.mutationQueue.length > s ? this.mutationQueue[s] : null)
                }
                getHighestUnacknowledgedBatchId() {
                    return ss.resolve(0 === this.mutationQueue.length ? -1 : this.ws - 1)
                }
                getAllMutationBatches(e) {
                    return ss.resolve(this.mutationQueue.slice())
                }
                getAllMutationBatchesAffectingDocumentKey(e, t) {
                    const n = new Zu(t, 0),
                        r = new Zu(t, Number.POSITIVE_INFINITY),
                        s = [];
                    return this._s.forEachInRange([n, r], (e => {
                        const t = this.gs(e.ds);
                        s.push(t)
                    })), ss.resolve(s)
                }
                getAllMutationBatchesAffectingDocumentKeys(e, t) {
                    let n = new ti(Pr);
                    return t.forEach((e => {
                        const t = new Zu(e, 0),
                            r = new Zu(e, Number.POSITIVE_INFINITY);
                        this._s.forEachInRange([t, r], (e => {
                            n = n.add(e.ds)
                        }))
                    })), ss.resolve(this.ps(n))
                }
                getAllMutationBatchesAffectingQuery(e, t) {
                    const n = t.path,
                        r = n.length + 1;
                    let s = n;
                    Gr.isDocumentKey(s) || (s = s.child(""));
                    const i = new Zu(new Gr(s), 0);
                    let o = new ti(Pr);
                    return this._s.forEachWhile((e => {
                        const t = e.key.path;
                        return !!n.isPrefixOf(t) && (t.length === r && (o = o.add(e.ds)), !0)
                    }), i), ss.resolve(this.ps(o))
                }
                ps(e) {
                    const t = [];
                    return e.forEach((e => {
                        const n = this.gs(e);
                        null !== n && t.push(n)
                    })), t
                }
                removeMutationBatch(e, t) {
                    Ir(0 === this.Is(t.batchId, "removed")), this.mutationQueue.shift();
                    let n = this._s;
                    return ss.forEach(t.mutations, (r => {
                        const s = new Zu(r.key, t.batchId);
                        return n = n.delete(s), this.referenceDelegate.markPotentiallyOrphaned(e, r.key)
                    })).next((() => {
                        this._s = n
                    }))
                }
                En(e) {}
                containsKey(e, t) {
                    const n = new Zu(t, 0),
                        r = this._s.firstAfterOrEqual(n);
                    return ss.resolve(t.isEqual(r && r.key))
                }
                performConsistencyCheck(e) {
                    return this.mutationQueue.length, ss.resolve()
                }
                Is(e, t) {
                    return this.ys(e)
                }
                ys(e) {
                    return 0 === this.mutationQueue.length ? 0 : e - this.mutationQueue[0].batchId
                }
                gs(e) {
                    const t = this.ys(e);
                    return t < 0 || t >= this.mutationQueue.length ? null : this.mutationQueue[t]
                }
            }
            class tl {
                constructor(e) {
                    this.Ts = e, this.docs = new Js(Gr.comparator), this.size = 0
                }
                setIndexManager(e) {
                    this.indexManager = e
                }
                addEntry(e, t) {
                    const n = t.key,
                        r = this.docs.get(n),
                        s = r ? r.size : 0,
                        i = this.Ts(t);
                    return this.docs = this.docs.insert(n, {
                        document: t.mutableCopy(),
                        size: i
                    }), this.size += i - s, this.indexManager.addToCollectionParentIndex(e, n.path.popLast())
                }
                removeEntry(e) {
                    const t = this.docs.get(e);
                    t && (this.docs = this.docs.remove(e), this.size -= t.size)
                }
                getEntry(e, t) {
                    const n = this.docs.get(t);
                    return ss.resolve(n ? n.document.mutableCopy() : Ui.newInvalidDocument(t))
                }
                getEntries(e, t) {
                    let n = Uo();
                    return t.forEach((e => {
                        const t = this.docs.get(e);
                        n = n.insert(e, t ? t.document.mutableCopy() : Ui.newInvalidDocument(e))
                    })), ss.resolve(n)
                }
                getDocumentsMatchingQuery(e, t, n, r) {
                    let s = Uo();
                    const i = t.path,
                        o = new Gr(i.child("")),
                        a = this.docs.getIteratorFrom(o);
                    for (; a.hasNext();) {
                        const {
                            key: e,
                            value: {
                                document: o
                            }
                        } = a.getNext();
                        if (!i.isPrefixOf(e.path)) break;
                        e.path.length > i.length + 1 || es(Jr(o), n) <= 0 || (r.has(o.key) || Oo(t, o)) && (s = s.insert(o.key, o.mutableCopy()))
                    }
                    return ss.resolve(s)
                }
                getAllFromCollectionGroup(e, t, n, r) {
                    br()
                }
                Es(e, t) {
                    return ss.forEach(this.docs, (e => t(e)))
                }
                newChangeBuffer(e) {
                    return new nl(this)
                }
                getSize(e) {
                    return ss.resolve(this.size)
                }
            }
            class nl extends Uu {
                constructor(e) {
                    super(), this.Jn = e
                }
                applyChanges(e) {
                    const t = [];
                    return this.changes.forEach(((n, r) => {
                        r.isValidDocument() ? t.push(this.Jn.addEntry(e, r)) : this.Jn.removeEntry(n)
                    })), ss.waitFor(t)
                }
                getFromCache(e, t) {
                    return this.Jn.getEntry(e, t)
                }
                getAllFromCache(e, t) {
                    return this.Jn.getEntries(e, t)
                }
            }
            class rl {
                constructor(e) {
                    this.persistence = e, this.As = new Fo((e => fo(e)), go), this.lastRemoteSnapshotVersion = Br.min(), this.highestTargetId = 0, this.Rs = 0, this.vs = new Ju, this.targetCount = 0, this.bs = Au.vn()
                }
                forEachTarget(e, t) {
                    return this.As.forEach(((e, n) => t(n))), ss.resolve()
                }
                getLastRemoteSnapshotVersion(e) {
                    return ss.resolve(this.lastRemoteSnapshotVersion)
                }
                getHighestSequenceNumber(e) {
                    return ss.resolve(this.Rs)
                }
                allocateTargetId(e) {
                    return this.highestTargetId = this.bs.next(), ss.resolve(this.highestTargetId)
                }
                setTargetsMetadata(e, t, n) {
                    return n && (this.lastRemoteSnapshotVersion = n), t > this.Rs && (this.Rs = t), ss.resolve()
                }
                Sn(e) {
                    this.As.set(e.target, e);
                    const t = e.targetId;
                    t > this.highestTargetId && (this.bs = new Au(t), this.highestTargetId = t), e.sequenceNumber > this.Rs && (this.Rs = e.sequenceNumber)
                }
                addTargetData(e, t) {
                    return this.Sn(t), this.targetCount += 1, ss.resolve()
                }
                updateTargetData(e, t) {
                    return this.Sn(t), ss.resolve()
                }
                removeTargetData(e, t) {
                    return this.As.delete(t.target), this.vs.hs(t.targetId), this.targetCount -= 1, ss.resolve()
                }
                removeTargets(e, t, n) {
                    let r = 0;
                    const s = [];
                    return this.As.forEach(((i, o) => {
                        o.sequenceNumber <= t && null === n.get(o.targetId) && (this.As.delete(i), s.push(this.removeMatchingKeysForTargetId(e, o.targetId)), r++)
                    })), ss.waitFor(s).next((() => r))
                }
                getTargetCount(e) {
                    return ss.resolve(this.targetCount)
                }
                getTargetData(e, t) {
                    const n = this.As.get(t) || null;
                    return ss.resolve(n)
                }
                addMatchingKeys(e, t, n) {
                    return this.vs.os(t, n), ss.resolve()
                }
                removeMatchingKeys(e, t, n) {
                    this.vs.cs(t, n);
                    const r = this.persistence.referenceDelegate,
                        s = [];
                    return r && t.forEach((t => {
                        s.push(r.markPotentiallyOrphaned(e, t))
                    })), ss.waitFor(s)
                }
                removeMatchingKeysForTargetId(e, t) {
                    return this.vs.hs(t), ss.resolve()
                }
                getMatchingKeysForTargetId(e, t) {
                    const n = this.vs.fs(t);
                    return ss.resolve(n)
                }
                containsKey(e, t) {
                    return ss.resolve(this.vs.containsKey(t))
                }
            }
            class sl {
                constructor(e, t) {
                    this.Ps = {}, this.overlays = {}, this.Vs = new ps(0), this.Ss = !1, this.Ss = !0, this.referenceDelegate = e(this), this.Ds = new rl(this), this.indexManager = new lu, this.remoteDocumentCache = function (e) {
                        return new tl(e)
                    }((e => this.referenceDelegate.Cs(e))), this.serializer = new Cc(t), this.xs = new Yu(this.serializer)
                }
                start() {
                    return Promise.resolve()
                }
                shutdown() {
                    return this.Ss = !1, Promise.resolve()
                }
                get started() {
                    return this.Ss
                }
                setDatabaseDeletedListener() {}
                setNetworkEnabled() {}
                getIndexManager(e) {
                    return this.indexManager
                }
                getDocumentOverlayCache(e) {
                    let t = this.overlays[e.toKey()];
                    return t || (t = new Xu, this.overlays[e.toKey()] = t), t
                }
                getMutationQueue(e, t) {
                    let n = this.Ps[e.toKey()];
                    return n || (n = new el(t, this.referenceDelegate), this.Ps[e.toKey()] = n), n
                }
                getTargetCache() {
                    return this.Ds
                }
                getRemoteDocumentCache() {
                    return this.remoteDocumentCache
                }
                getBundleCache() {
                    return this.xs
                }
                runTransaction(e, t, n) {
                    pr("MemoryPersistence", "Starting transaction:", e);
                    const r = new il(this.Vs.next());
                    return this.referenceDelegate.Ns(), n(r).next((e => this.referenceDelegate.ks(r).next((() => e)))).toPromise().then((e => (r.raiseOnCommittedEvent(), e)))
                }
                Os(e, t) {
                    return ss.or(Object.values(this.Ps).map((n => () => n.containsKey(e, t))))
                }
            }
            class il extends ns {
                constructor(e) {
                    super(), this.currentSequenceNumber = e
                }
            }
            class ol {
                constructor(e) {
                    this.persistence = e, this.$s = new Ju, this.Ms = null
                }
                static Fs(e) {
                    return new ol(e)
                }
                get Bs() {
                    if (this.Ms) return this.Ms;
                    throw br()
                }
                addReference(e, t, n) {
                    return this.$s.addReference(n, t), this.Bs.delete(n.toString()), ss.resolve()
                }
                removeReference(e, t, n) {
                    return this.$s.removeReference(n, t), this.Bs.add(n.toString()), ss.resolve()
                }
                markPotentiallyOrphaned(e, t) {
                    return this.Bs.add(t.toString()), ss.resolve()
                }
                removeTarget(e, t) {
                    this.$s.hs(t.targetId).forEach((e => this.Bs.add(e.toString())));
                    const n = this.persistence.getTargetCache();
                    return n.getMatchingKeysForTargetId(e, t.targetId).next((e => {
                        e.forEach((e => this.Bs.add(e.toString())))
                    })).next((() => n.removeTargetData(e, t)))
                }
                Ns() {
                    this.Ms = new Set
                }
                ks(e) {
                    const t = this.persistence.getRemoteDocumentCache().newChangeBuffer();
                    return ss.forEach(this.Bs, (n => {
                        const r = Gr.fromPath(n);
                        return this.Ls(e, r).next((e => {
                            e || t.removeEntry(r, Br.min())
                        }))
                    })).next((() => (this.Ms = null, t.apply(e))))
                }
                updateLimboDocument(e, t) {
                    return this.Ls(e, t).next((e => {
                        e ? this.Bs.delete(t.toString()) : this.Bs.add(t.toString())
                    }))
                }
                Cs(e) {
                    return 0
                }
                Ls(e, t) {
                    return ss.or([() => ss.resolve(this.$s.containsKey(t)), () => this.persistence.getTargetCache().containsKey(e, t), () => this.persistence.Os(e, t)])
                }
            }
            class al {
                constructor(e) {
                    this.serializer = e
                }
                M(e, t, n, r) {
                    const s = new is("createOrUpgrade", t);
                    n < 1 && r >= 1 && (function (e) {
                        e.createObjectStore("owner")
                    }(e), function (e) {
                        e.createObjectStore("mutationQueues", {
                            keyPath: "userId"
                        }), e.createObjectStore("mutations", {
                            keyPath: "batchId",
                            autoIncrement: !0
                        }).createIndex("userMutationsIndex", Ts, {
                            unique: !0
                        }), e.createObjectStore("documentMutations")
                    }(e), cl(e), function (e) {
                        e.createObjectStore("remoteDocuments")
                    }(e));
                    let i = ss.resolve();
                    return n < 3 && r >= 3 && (0 !== n && (function (e) {
                        e.deleteObjectStore("targetDocuments"), e.deleteObjectStore("targets"), e.deleteObjectStore("targetGlobal")
                    }(e), cl(e)), i = i.next((() => function (e) {
                        const t = e.store("targetGlobal"),
                            n = {
                                highestTargetId: 0,
                                highestListenSequenceNumber: 0,
                                lastRemoteSnapshotVersion: Br.min().toTimestamp(),
                                targetCount: 0
                            };
                        return t.put("targetGlobalKey", n)
                    }(s)))), n < 4 && r >= 4 && (0 !== n && (i = i.next((() => function (e, t) {
                        return t.store("mutations").j().next((n => {
                            e.deleteObjectStore("mutations"), e.createObjectStore("mutations", {
                                keyPath: "batchId",
                                autoIncrement: !0
                            }).createIndex("userMutationsIndex", Ts, {
                                unique: !0
                            });
                            const r = t.store("mutations"),
                                s = n.map((e => r.put(e)));
                            return ss.waitFor(s)
                        }))
                    }(e, s)))), i = i.next((() => {
                        ! function (e) {
                            e.createObjectStore("clientMetadata", {
                                keyPath: "clientId"
                            })
                        }(e)
                    }))), n < 5 && r >= 5 && (i = i.next((() => this.qs(s)))), n < 6 && r >= 6 && (i = i.next((() => (function (e) {
                        e.createObjectStore("remoteDocumentGlobal")
                    }(e), this.Us(s))))), n < 7 && r >= 7 && (i = i.next((() => this.Ks(s)))), n < 8 && r >= 8 && (i = i.next((() => this.Gs(e, s)))), n < 9 && r >= 9 && (i = i.next((() => {
                        ! function (e) {
                            e.objectStoreNames.contains("remoteDocumentChanges") && e.deleteObjectStore("remoteDocumentChanges")
                        }(e)
                    }))), n < 10 && r >= 10 && (i = i.next((() => this.Qs(s)))), n < 11 && r >= 11 && (i = i.next((() => {
                        ! function (e) {
                            e.createObjectStore("bundles", {
                                keyPath: "bundleId"
                            })
                        }(e),
                        function (e) {
                            e.createObjectStore("namedQueries", {
                                keyPath: "name"
                            })
                        }(e)
                    }))), n < 12 && r >= 12 && (i = i.next((() => {
                        ! function (e) {
                            const t = e.createObjectStore("documentOverlays", {
                                keyPath: Us
                            });
                            t.createIndex("collectionPathOverlayIndex", Bs, {
                                unique: !1
                            }), t.createIndex("collectionGroupOverlayIndex", qs, {
                                unique: !1
                            })
                        }(e)
                    }))), n < 13 && r >= 13 && (i = i.next((() => function (e) {
                        const t = e.createObjectStore("remoteDocumentsV14", {
                            keyPath: As
                        });
                        t.createIndex("documentKeyIndex", xs), t.createIndex("collectionGroupIndex", Ns)
                    }(e))).next((() => this.zs(e, s))).next((() => e.deleteObjectStore("remoteDocuments")))), n < 14 && r >= 14 && (i = i.next((() => this.js(e, s)))), n < 15 && r >= 15 && (i = i.next((() => function (e) {
                        e.createObjectStore("indexConfiguration", {
                            keyPath: "indexId",
                            autoIncrement: !0
                        }).createIndex("collectionGroupIndex", "collectionGroup", {
                            unique: !1
                        }), e.createObjectStore("indexState", {
                            keyPath: Ms
                        }).createIndex("sequenceNumberIndex", Ps, {
                            unique: !1
                        }), e.createObjectStore("indexEntries", {
                            keyPath: Fs
                        }).createIndex("documentKeyIndex", Vs, {
                            unique: !1
                        })
                    }(e)))), i
                }
                Us(e) {
                    let t = 0;
                    return e.store("remoteDocuments").Z(((e, n) => {
                        t += _u(n)
                    })).next((() => {
                        const n = {
                            byteSize: t
                        };
                        return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey", n)
                    }))
                }
                qs(e) {
                    const t = e.store("mutationQueues"),
                        n = e.store("mutations");
                    return t.j().next((t => ss.forEach(t, (t => {
                        const r = IDBKeyRange.bound([t.userId, -1], [t.userId, t.lastAcknowledgedBatchId]);
                        return n.j("userMutationsIndex", r).next((n => ss.forEach(n, (n => {
                            Ir(n.userId === t.userId);
                            const r = Rc(this.serializer, n);
                            return Iu(e, t.userId, r).next((() => {}))
                        }))))
                    }))))
                }
                Ks(e) {
                    const t = e.store("targetDocuments"),
                        n = e.store("remoteDocuments");
                    return e.store("targetGlobal").get("targetGlobalKey").next((e => {
                        const r = [];
                        return n.Z(((n, s) => {
                            const i = new $r(n),
                                o = function (e) {
                                    return [0, bs(e)]
                                }(i);
                            r.push(t.get(o).next((n => n ? ss.resolve() : (n => t.put({
                                targetId: 0,
                                path: bs(n),
                                sequenceNumber: e.highestListenSequenceNumber
                            }))(i))))
                        })).next((() => ss.waitFor(r)))
                    }))
                }
                Gs(e, t) {
                    e.createObjectStore("collectionParents", {
                        keyPath: Ls
                    });
                    const n = t.store("collectionParents"),
                        r = new hu,
                        s = e => {
                            if (r.add(e)) {
                                const t = e.lastSegment(),
                                    r = e.popLast();
                                return n.put({
                                    collectionId: t,
                                    parent: bs(r)
                                })
                            }
                        };
                    return t.store("remoteDocuments").Z({
                        Y: !0
                    }, ((e, t) => {
                        const n = new $r(e);
                        return s(n.popLast())
                    })).next((() => t.store("documentMutations").Z({
                        Y: !0
                    }, (([e, t, n], r) => {
                        const i = Es(t);
                        return s(i.popLast())
                    }))))
                }
                Qs(e) {
                    const t = e.store("targets");
                    return t.Z(((e, n) => {
                        const r = Oc(n),
                            s = Lc(this.serializer, r);
                        return t.put(s)
                    }))
                }
                zs(e, t) {
                    const n = t.store("remoteDocuments"),
                        r = [];
                    return n.Z(((e, n) => {
                        const s = t.store("remoteDocumentsV14"),
                            i = (o = n, o.document ? new Gr($r.fromString(o.document.name).popFirst(5)) : o.noDocument ? Gr.fromSegments(o.noDocument.path) : o.unknownDocument ? Gr.fromSegments(o.unknownDocument.path) : br()).path.toArray();
                        var o;
                        const a = {
                            prefixPath: i.slice(0, i.length - 2),
                            collectionGroup: i[i.length - 2],
                            documentId: i[i.length - 1],
                            readTime: n.readTime || [0, 0],
                            unknownDocument: n.unknownDocument,
                            noDocument: n.noDocument,
                            document: n.document,
                            hasCommittedMutations: !!n.hasCommittedMutations
                        };
                        r.push(s.put(a))
                    })).next((() => ss.waitFor(r)))
                }
                js(e, t) {
                    const n = t.store("mutations"),
                        r = qu(this.serializer),
                        s = new sl(ol.Fs, this.serializer.se);
                    return n.j().next((e => {
                        const n = new Map;
                        return e.forEach((e => {
                            var t;
                            let r = null !== (t = n.get(e.userId)) && void 0 !== t ? t : Wo();
                            Rc(this.serializer, e).keys().forEach((e => r = r.add(e))), n.set(e.userId, r)
                        })), ss.forEach(n, ((e, n) => {
                            const i = new dr(n),
                                o = $c.ie(this.serializer, i),
                                a = s.getIndexManager(i),
                                c = Eu.ie(i, this.serializer, a, s.referenceDelegate);
                            return new Hu(r, c, o, a).recalculateAndSaveOverlaysForDocumentKeys(new Qs(t, ps.ct), e).next()
                        }))
                    }))
                }
            }

            function cl(e) {
                e.createObjectStore("targetDocuments", {
                    keyPath: Rs
                }).createIndex("documentTargetsIndex", Os, {
                    unique: !0
                }), e.createObjectStore("targets", {
                    keyPath: "targetId"
                }).createIndex("queryTargetsIndex", ks, {
                    unique: !0
                }), e.createObjectStore("targetGlobal")
            }
            const ul = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";
            class ll {
                constructor(e, t, n, r, s, i, o, a, c, u, l = 15) {
                    if (this.allowTabSynchronization = e, this.persistenceKey = t, this.clientId = n, this.Ws = s, this.window = i, this.document = o, this.Hs = c, this.Js = u, this.Ys = l, this.Vs = null, this.Ss = !1, this.isPrimary = !1, this.networkEnabled = !0, this.Zs = null, this.inForeground = !1, this.Xs = null, this.ti = null, this.ei = Number.NEGATIVE_INFINITY, this.ni = e => Promise.resolve(), !ll.D()) throw new Tr(Er.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
                    this.referenceDelegate = new Fu(this, r), this.si = t + "main", this.serializer = new Cc(a), this.ii = new os(this.si, this.Ys, new al(this.serializer)), this.Ds = new xu(this.referenceDelegate, this.serializer), this.remoteDocumentCache = qu(this.serializer), this.xs = new Uc, this.window && this.window.localStorage ? this.ri = this.window.localStorage : (this.ri = null, !1 === u && yr("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))
                }
                start() {
                    return this.oi().then((() => {
                        if (!this.isPrimary && !this.allowTabSynchronization) throw new Tr(Er.FAILED_PRECONDITION, ul);
                        return this.ui(), this.ci(), this.ai(), this.runTransaction("getHighestListenSequenceNumber", "readonly", (e => this.Ds.getHighestSequenceNumber(e)))
                    })).then((e => {
                        this.Vs = new ps(e, this.Hs)
                    })).then((() => {
                        this.Ss = !0
                    })).catch((e => (this.ii && this.ii.close(), Promise.reject(e))))
                }
                hi(e) {
                    return this.ni = async t => {
                        if (this.started) return e(t)
                    }, e(this.isPrimary)
                }
                setDatabaseDeletedListener(e) {
                    this.ii.B((async t => {
                        null === t.newVersion && await e()
                    }))
                }
                setNetworkEnabled(e) {
                    this.networkEnabled !== e && (this.networkEnabled = e, this.Ws.enqueueAndForget((async () => {
                        this.started && await this.oi()
                    })))
                }
                oi() {
                    return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (e => dl(e).put({
                        clientId: this.clientId,
                        updateTimeMs: Date.now(),
                        networkEnabled: this.networkEnabled,
                        inForeground: this.inForeground
                    }).next((() => {
                        if (this.isPrimary) return this.li(e).next((e => {
                            e || (this.isPrimary = !1, this.Ws.enqueueRetryable((() => this.ni(!1))))
                        }))
                    })).next((() => this.fi(e))).next((t => this.isPrimary && !t ? this.di(e).next((() => !1)) : !!t && this.wi(e).next((() => !0)))))).catch((e => {
                        if (us(e)) return pr("IndexedDbPersistence", "Failed to extend owner lease: ", e), this.isPrimary;
                        if (!this.allowTabSynchronization) throw e;
                        return pr("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e), !1
                    })).then((e => {
                        this.isPrimary !== e && this.Ws.enqueueRetryable((() => this.ni(e))), this.isPrimary = e
                    }))
                }
                li(e) {
                    return hl(e).get("owner").next((e => ss.resolve(this._i(e))))
                }
                mi(e) {
                    return dl(e).delete(this.clientId)
                }
                async gi() {
                    if (this.isPrimary && !this.yi(this.ei, 18e5)) {
                        this.ei = Date.now();
                        const e = await this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (e => {
                            const t = Ws(e, "clientMetadata");
                            return t.j().next((e => {
                                const n = this.pi(e, 18e5),
                                    r = e.filter((e => -1 === n.indexOf(e)));
                                return ss.forEach(r, (e => t.delete(e.clientId))).next((() => r))
                            }))
                        })).catch((() => []));
                        if (this.ri)
                            for (const t of e) this.ri.removeItem(this.Ii(t.clientId))
                    }
                }
                ai() {
                    this.ti = this.Ws.enqueueAfterDelay("client_metadata_refresh", 4e3, (() => this.oi().then((() => this.gi())).then((() => this.ai()))))
                }
                _i(e) {
                    return !!e && e.ownerId === this.clientId
                }
                fi(e) {
                    return this.Js ? ss.resolve(!0) : hl(e).get("owner").next((t => {
                        if (null !== t && this.yi(t.leaseTimestampMs, 5e3) && !this.Ti(t.ownerId)) {
                            if (this._i(t) && this.networkEnabled) return !0;
                            if (!this._i(t)) {
                                if (!t.allowTabSynchronization) throw new Tr(Er.FAILED_PRECONDITION, ul);
                                return !1
                            }
                        }
                        return !(!this.networkEnabled || !this.inForeground) || dl(e).j().next((e => void 0 === this.pi(e, 5e3).find((e => {
                            if (this.clientId !== e.clientId) {
                                const t = !this.networkEnabled && e.networkEnabled,
                                    n = !this.inForeground && e.inForeground,
                                    r = this.networkEnabled === e.networkEnabled;
                                if (t || n && r) return !0
                            }
                            return !1
                        }))))
                    })).next((e => (this.isPrimary !== e && pr("IndexedDbPersistence", `Client ${e?"is":"is not"} eligible for a primary lease.`), e)))
                }
                async shutdown() {
                    this.Ss = !1, this.Ei(), this.ti && (this.ti.cancel(), this.ti = null), this.Ai(), this.Ri(), await this.ii.runTransaction("shutdown", "readwrite", ["owner", "clientMetadata"], (e => {
                        const t = new Qs(e, ps.ct);
                        return this.di(t).next((() => this.mi(t)))
                    })), this.ii.close(), this.vi()
                }
                pi(e, t) {
                    return e.filter((e => this.yi(e.updateTimeMs, t) && !this.Ti(e.clientId)))
                }
                bi() {
                    return this.runTransaction("getActiveClients", "readonly", (e => dl(e).j().next((e => this.pi(e, 18e5).map((e => e.clientId))))))
                }
                get started() {
                    return this.Ss
                }
                getMutationQueue(e, t) {
                    return Eu.ie(e, this.serializer, t, this.referenceDelegate)
                }
                getTargetCache() {
                    return this.Ds
                }
                getRemoteDocumentCache() {
                    return this.remoteDocumentCache
                }
                getIndexManager(e) {
                    return new fu(e, this.serializer.se.databaseId)
                }
                getDocumentOverlayCache(e) {
                    return $c.ie(this.serializer, e)
                }
                getBundleCache() {
                    return this.xs
                }
                runTransaction(e, t, n) {
                    pr("IndexedDbPersistence", "Starting transaction:", e);
                    const r = "readonly" === t ? "readonly" : "readwrite",
                        s = 15 === (i = this.Ys) ? Ks : 14 === i ? Gs : 13 === i ? js : 12 === i ? zs : 11 === i ? $s : void br();
                    var i;
                    let o;
                    return this.ii.runTransaction(e, r, s, (r => (o = new Qs(r, this.Vs ? this.Vs.next() : ps.ct), "readwrite-primary" === t ? this.li(o).next((e => !!e || this.fi(o))).next((t => {
                        if (!t) throw yr(`Failed to obtain primary lease for action '${e}'.`), this.isPrimary = !1, this.Ws.enqueueRetryable((() => this.ni(!1))), new Tr(Er.FAILED_PRECONDITION, ts);
                        return n(o)
                    })).next((e => this.wi(o).next((() => e)))) : this.Pi(o).next((() => n(o)))))).then((e => (o.raiseOnCommittedEvent(), e)))
                }
                Pi(e) {
                    return hl(e).get("owner").next((e => {
                        if (null !== e && this.yi(e.leaseTimestampMs, 5e3) && !this.Ti(e.ownerId) && !this._i(e) && !(this.Js || this.allowTabSynchronization && e.allowTabSynchronization)) throw new Tr(Er.FAILED_PRECONDITION, ul)
                    }))
                }
                wi(e) {
                    const t = {
                        ownerId: this.clientId,
                        allowTabSynchronization: this.allowTabSynchronization,
                        leaseTimestampMs: Date.now()
                    };
                    return hl(e).put("owner", t)
                }
                static D() {
                    return os.D()
                }
                di(e) {
                    const t = hl(e);
                    return t.get("owner").next((e => this._i(e) ? (pr("IndexedDbPersistence", "Releasing primary lease."), t.delete("owner")) : ss.resolve()))
                }
                yi(e, t) {
                    const n = Date.now();
                    return !(e < n - t || e > n && (yr(`Detected an update time that is in the future: ${e} > ${n}`), 1))
                }
                ui() {
                    null !== this.document && "function" == typeof this.document.addEventListener && (this.Xs = () => {
                        this.Ws.enqueueAndForget((() => (this.inForeground = "visible" === this.document.visibilityState, this.oi())))
                    }, this.document.addEventListener("visibilitychange", this.Xs), this.inForeground = "visible" === this.document.visibilityState)
                }
                Ai() {
                    this.Xs && (this.document.removeEventListener("visibilitychange", this.Xs), this.Xs = null)
                }
                ci() {
                    var e;
                    "function" == typeof (null === (e = this.window) || void 0 === e ? void 0 : e.addEventListener) && (this.Zs = () => {
                        this.Ei();
                        const e = /(?:Version|Mobile)\/1[456]/;
                        (0, c.G6)() && (navigator.appVersion.match(e) || navigator.userAgent.match(e)) && this.Ws.enterRestrictedMode(!0), this.Ws.enqueueAndForget((() => this.shutdown()))
                    }, this.window.addEventListener("pagehide", this.Zs))
                }
                Ri() {
                    this.Zs && (this.window.removeEventListener("pagehide", this.Zs), this.Zs = null)
                }
                Ti(e) {
                    var t;
                    try {
                        const n = null !== (null === (t = this.ri) || void 0 === t ? void 0 : t.getItem(this.Ii(e)));
                        return pr("IndexedDbPersistence", `Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`), n
                    } catch (e) {
                        return yr("IndexedDbPersistence", "Failed to get zombied client id.", e), !1
                    }
                }
                Ei() {
                    if (this.ri) try {
                        this.ri.setItem(this.Ii(this.clientId), String(Date.now()))
                    } catch (e) {
                        yr("Failed to set zombie client id.", e)
                    }
                }
                vi() {
                    if (this.ri) try {
                        this.ri.removeItem(this.Ii(this.clientId))
                    } catch (e) {}
                }
                Ii(e) {
                    return `firestore_zombie_${this.persistenceKey}_${e}`
                }
            }

            function hl(e) {
                return Ws(e, "owner")
            }

            function dl(e) {
                return Ws(e, "clientMetadata")
            }

            function fl(e, t) {
                let n = e.projectId;
                return e.isDefaultDatabase || (n += "." + e.database), "firestore/" + t + "/" + n + "/"
            }
            class gl {
                constructor(e, t, n, r) {
                    this.targetId = e, this.fromCache = t, this.Vi = n, this.Si = r
                }
                static Di(e, t) {
                    let n = Wo(),
                        r = Wo();
                    for (const e of t.docChanges) switch (e.type) {
                        case 0:
                            n = n.add(e.doc.key);
                            break;
                        case 1:
                            r = r.add(e.doc.key)
                    }
                    return new gl(e, t.fromCache, n, r)
                }
            }
            class ml {
                constructor() {
                    this.Ci = !1
                }
                initialize(e, t) {
                    this.xi = e, this.indexManager = t, this.Ci = !0
                }
                getDocumentsMatchingQuery(e, t, n, r) {
                    return this.Ni(e, t).next((s => s || this.ki(e, t, r, n))).next((n => n || this.Oi(e, t)))
                }
                Ni(e, t) {
                    if (_o(t)) return ss.resolve(null);
                    let n = Co(t);
                    return this.indexManager.getIndexType(e, n).next((r => 0 === r ? null : (null !== t.limit && 1 === r && (t = xo(t, null, "F"), n = Co(t)), this.indexManager.getDocumentsMatchingTarget(e, n).next((r => {
                        const s = Wo(...r);
                        return this.xi.getDocuments(e, s).next((r => this.indexManager.getMinOffset(e, n).next((n => {
                            const i = this.$i(t, r);
                            return this.Mi(t, i, s, n.readTime) ? this.Ni(e, xo(t, null, "F")) : this.Fi(e, i, t, n)
                        }))))
                    })))))
                }
                ki(e, t, n, r) {
                    return _o(t) || r.isEqual(Br.min()) ? this.Oi(e, t) : this.xi.getDocuments(e, n).next((s => {
                        const i = this.$i(t, s);
                        return this.Mi(t, i, n, r) ? this.Oi(e, t) : (mr() <= a.in.DEBUG && pr("QueryEngine", "Re-using previous result from %s to execute query: %s", r.toString(), Ro(t)), this.Fi(e, i, t, Xr(r, -1)))
                    }))
                }
                $i(e, t) {
                    let n = new ti(Mo(e));
                    return t.forEach(((t, r) => {
                        Oo(e, r) && (n = n.add(r))
                    })), n
                }
                Mi(e, t, n, r) {
                    if (null === e.limit) return !1;
                    if (n.size !== t.size) return !0;
                    const s = "F" === e.limitType ? t.last() : t.first();
                    return !!s && (s.hasPendingWrites || s.version.compareTo(r) > 0)
                }
                Oi(e, t) {
                    return mr() <= a.in.DEBUG && pr("QueryEngine", "Using full collection scan to execute query:", Ro(t)), this.xi.getDocumentsMatchingQuery(e, t, Zr.min())
                }
                Fi(e, t, n, r) {
                    return this.xi.getDocumentsMatchingQuery(e, n, r).next((e => (t.forEach((t => {
                        e = e.insert(t.key, t)
                    })), e)))
                }
            }
            class pl {
                constructor(e, t, n, r) {
                    this.persistence = e, this.Bi = t, this.serializer = r, this.Li = new Js(Pr), this.qi = new Fo((e => fo(e)), go), this.Ui = new Map, this.Ki = e.getRemoteDocumentCache(), this.Ds = e.getTargetCache(), this.xs = e.getBundleCache(), this.Gi(n)
                }
                Gi(e) {
                    this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e), this.indexManager = this.persistence.getIndexManager(e), this.mutationQueue = this.persistence.getMutationQueue(e, this.indexManager), this.localDocuments = new Hu(this.Ki, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.Ki.setIndexManager(this.indexManager), this.Bi.initialize(this.localDocuments, this.indexManager)
                }
                collectGarbage(e) {
                    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (t => e.collect(t, this.Li)))
                }
            }

            function yl(e, t, n, r) {
                return new pl(e, t, n, r)
            }
            async function wl(e, t) {
                const n = _r(e);
                return await n.persistence.runTransaction("Handle user change", "readonly", (e => {
                    let r;
                    return n.mutationQueue.getAllMutationBatches(e).next((s => (r = s, n.Gi(t), n.mutationQueue.getAllMutationBatches(e)))).next((t => {
                        const s = [],
                            i = [];
                        let o = Wo();
                        for (const e of r) {
                            s.push(e.batchId);
                            for (const t of e.mutations) o = o.add(t.key)
                        }
                        for (const e of t) {
                            i.push(e.batchId);
                            for (const t of e.mutations) o = o.add(t.key)
                        }
                        return n.localDocuments.getDocuments(e, o).next((e => ({
                            Qi: e,
                            removedBatchIds: s,
                            addedBatchIds: i
                        })))
                    }))
                }))
            }

            function vl(e) {
                const t = _r(e);
                return t.persistence.runTransaction("Get last remote snapshot version", "readonly", (e => t.Ds.getLastRemoteSnapshotVersion(e)))
            }

            function bl(e, t, n) {
                let r = Wo(),
                    s = Wo();
                return n.forEach((e => r = r.add(e))), t.getEntries(e, r).next((e => {
                    let r = Uo();
                    return n.forEach(((n, i) => {
                        const o = e.get(n);
                        i.isFoundDocument() !== o.isFoundDocument() && (s = s.add(n)), i.isNoDocument() && i.version.isEqual(Br.min()) ? (t.removeEntry(n, i.readTime), r = r.insert(n, i)) : !o.isValidDocument() || i.version.compareTo(o.version) > 0 || 0 === i.version.compareTo(o.version) && o.hasPendingWrites ? (t.addEntry(i), r = r.insert(n, i)) : pr("LocalStore", "Ignoring outdated watch update for ", n, ". Current version:", o.version, " Watch version:", i.version)
                    })), {
                        zi: r,
                        ji: s
                    }
                }))
            }

            function Il(e, t) {
                const n = _r(e);
                return n.persistence.runTransaction("Get next mutation batch", "readonly", (e => (void 0 === t && (t = -1), n.mutationQueue.getNextMutationBatchAfterBatchId(e, t))))
            }

            function _l(e, t) {
                const n = _r(e);
                return n.persistence.runTransaction("Allocate target", "readwrite", (e => {
                    let r;
                    return n.Ds.getTargetData(e, t).next((s => s ? (r = s, ss.resolve(r)) : n.Ds.allocateTargetId(e).next((s => (r = new Dc(t, s, 0, e.currentSequenceNumber), n.Ds.addTargetData(e, r).next((() => r)))))))
                })).then((e => {
                    const r = n.Li.get(e.targetId);
                    return (null === r || e.snapshotVersion.compareTo(r.snapshotVersion) > 0) && (n.Li = n.Li.insert(e.targetId, e), n.qi.set(t, e.targetId)), e
                }))
            }
            async function El(e, t, n) {
                const r = _r(e),
                    s = r.Li.get(t),
                    i = n ? "readwrite" : "readwrite-primary";
                try {
                    n || await r.persistence.runTransaction("Release target", i, (e => r.persistence.referenceDelegate.removeTarget(e, s)))
                } catch (e) {
                    if (!us(e)) throw e;
                    pr("LocalStore", `Failed to update sequence numbers for target ${t}: ${e}`)
                }
                r.Li = r.Li.remove(t), r.qi.delete(s.target)
            }

            function Tl(e, t, n) {
                const r = _r(e);
                let s = Br.min(),
                    i = Wo();
                return r.persistence.runTransaction("Execute query", "readonly", (e => function (e, t, n) {
                    const r = _r(e),
                        s = r.qi.get(n);
                    return void 0 !== s ? ss.resolve(r.Li.get(s)) : r.Ds.getTargetData(t, n)
                }(r, e, Co(t)).next((t => {
                    if (t) return s = t.lastLimboFreeSnapshotVersion, r.Ds.getMatchingKeysForTargetId(e, t.targetId).next((e => {
                        i = e
                    }))
                })).next((() => r.Bi.getDocumentsMatchingQuery(e, t, n ? s : Br.min(), n ? i : Wo()))).next((e => (Cl(r, Lo(t), e), {
                    documents: e,
                    Wi: i
                })))))
            }

            function Sl(e, t) {
                const n = _r(e),
                    r = _r(n.Ds),
                    s = n.Li.get(t);
                return s ? Promise.resolve(s.target) : n.persistence.runTransaction("Get target data", "readonly", (e => r.ne(e, t).next((e => e ? e.target : null))))
            }

            function Dl(e, t) {
                const n = _r(e),
                    r = n.Ui.get(t) || Br.min();
                return n.persistence.runTransaction("Get new document changes", "readonly", (e => n.Ki.getAllFromCollectionGroup(e, t, Xr(r, -1), Number.MAX_SAFE_INTEGER))).then((e => (Cl(n, t, e), e)))
            }

            function Cl(e, t, n) {
                let r = e.Ui.get(t) || Br.min();
                n.forEach(((e, t) => {
                    t.readTime.compareTo(r) > 0 && (r = t.readTime)
                })), e.Ui.set(t, r)
            }
            async function Al(e, t, n = Wo()) {
                const r = await _l(e, Co(Mc(t.bundledQuery))),
                    s = _r(e);
                return s.persistence.runTransaction("Save named query", "readwrite", (e => {
                    const i = tc(t.readTime);
                    if (r.snapshotVersion.compareTo(i) >= 0) return s.xs.saveNamedQuery(e, t);
                    const o = r.withResumeToken(oi.EMPTY_BYTE_STRING, i);
                    return s.Li = s.Li.insert(o.targetId, o), s.Ds.updateTargetData(e, o).next((() => s.Ds.removeMatchingKeysForTargetId(e, r.targetId))).next((() => s.Ds.addMatchingKeys(e, n, r.targetId))).next((() => s.xs.saveNamedQuery(e, t)))
                }))
            }

            function xl(e, t) {
                return `firestore_clients_${e}_${t}`
            }

            function Nl(e, t, n) {
                let r = `firestore_mutations_${e}_${n}`;
                return t.isAuthenticated() && (r += `_${t.uid}`), r
            }

            function kl(e, t) {
                return `firestore_targets_${e}_${t}`
            }
            class Rl {
                constructor(e, t, n, r) {
                    this.user = e, this.batchId = t, this.state = n, this.error = r
                }
                static Zi(e, t, n) {
                    const r = JSON.parse(n);
                    let s, i = "object" == typeof r && -1 !== ["pending", "acknowledged", "rejected"].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error);
                    return i && r.error && (i = "string" == typeof r.error.message && "string" == typeof r.error.code, i && (s = new Tr(r.error.code, r.error.message))), i ? new Rl(e, t, r.state, s) : (yr("SharedClientState", `Failed to parse mutation state for ID '${t}': ${n}`), null)
                }
                Xi() {
                    const e = {
                        state: this.state,
                        updateTimeMs: Date.now()
                    };
                    return this.error && (e.error = {
                        code: this.error.code,
                        message: this.error.message
                    }), JSON.stringify(e)
                }
            }
            class Ol {
                constructor(e, t, n) {
                    this.targetId = e, this.state = t, this.error = n
                }
                static Zi(e, t) {
                    const n = JSON.parse(t);
                    let r, s = "object" == typeof n && -1 !== ["not-current", "current", "rejected"].indexOf(n.state) && (void 0 === n.error || "object" == typeof n.error);
                    return s && n.error && (s = "string" == typeof n.error.message && "string" == typeof n.error.code, s && (r = new Tr(n.error.code, n.error.message))), s ? new Ol(e, n.state, r) : (yr("SharedClientState", `Failed to parse target state for ID '${e}': ${t}`), null)
                }
                Xi() {
                    const e = {
                        state: this.state,
                        updateTimeMs: Date.now()
                    };
                    return this.error && (e.error = {
                        code: this.error.code,
                        message: this.error.message
                    }), JSON.stringify(e)
                }
            }
            class Ll {
                constructor(e, t) {
                    this.clientId = e, this.activeTargetIds = t
                }
                static Zi(e, t) {
                    const n = JSON.parse(t);
                    let r = "object" == typeof n && n.activeTargetIds instanceof Array,
                        s = Yo();
                    for (let e = 0; r && e < n.activeTargetIds.length; ++e) r = vs(n.activeTargetIds[e]), s = s.add(n.activeTargetIds[e]);
                    return r ? new Ll(e, s) : (yr("SharedClientState", `Failed to parse client data for instance '${e}': ${t}`), null)
                }
            }
            class Ml {
                constructor(e, t) {
                    this.clientId = e, this.onlineState = t
                }
                static Zi(e) {
                    const t = JSON.parse(e);
                    return "object" == typeof t && -1 !== ["Unknown", "Online", "Offline"].indexOf(t.onlineState) && "string" == typeof t.clientId ? new Ml(t.clientId, t.onlineState) : (yr("SharedClientState", `Failed to parse online state: ${e}`), null)
                }
            }
            class Pl {
                constructor() {
                    this.activeTargetIds = Yo()
                }
                tr(e) {
                    this.activeTargetIds = this.activeTargetIds.add(e)
                }
                er(e) {
                    this.activeTargetIds = this.activeTargetIds.delete(e)
                }
                Xi() {
                    const e = {
                        activeTargetIds: this.activeTargetIds.toArray(),
                        updateTimeMs: Date.now()
                    };
                    return JSON.stringify(e)
                }
            }
            class Fl {
                constructor(e, t, n, r, s) {
                    this.window = e, this.Ws = t, this.persistenceKey = n, this.nr = r, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null, this.sr = this.ir.bind(this), this.rr = new Js(Pr), this.started = !1, this.ur = [];
                    const i = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                    this.storage = this.window.localStorage, this.currentUser = s, this.cr = xl(this.persistenceKey, this.nr), this.ar = function (e) {
                        return `firestore_sequence_number_${e}`
                    }(this.persistenceKey), this.rr = this.rr.insert(this.nr, new Pl), this.hr = new RegExp(`^firestore_clients_${i}_([^_]*)$`), this.lr = new RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`), this.dr = new RegExp(`^firestore_targets_${i}_(\\d+)$`), this.wr = function (e) {
                        return `firestore_online_state_${e}`
                    }(this.persistenceKey), this._r = function (e) {
                        return `firestore_bundle_loaded_v2_${e}`
                    }(this.persistenceKey), this.window.addEventListener("storage", this.sr)
                }
                static D(e) {
                    return !(!e || !e.localStorage)
                }
                async start() {
                    const e = await this.syncEngine.bi();
                    for (const t of e) {
                        if (t === this.nr) continue;
                        const e = this.getItem(xl(this.persistenceKey, t));
                        if (e) {
                            const n = Ll.Zi(t, e);
                            n && (this.rr = this.rr.insert(n.clientId, n))
                        }
                    }
                    this.mr();
                    const t = this.storage.getItem(this.wr);
                    if (t) {
                        const e = this.gr(t);
                        e && this.yr(e)
                    }
                    for (const e of this.ur) this.ir(e);
                    this.ur = [], this.window.addEventListener("pagehide", (() => this.shutdown())), this.started = !0
                }
                writeSequenceNumber(e) {
                    this.setItem(this.ar, JSON.stringify(e))
                }
                getAllActiveQueryTargets() {
                    return this.pr(this.rr)
                }
                isActiveQueryTarget(e) {
                    let t = !1;
                    return this.rr.forEach(((n, r) => {
                        r.activeTargetIds.has(e) && (t = !0)
                    })), t
                }
                addPendingMutation(e) {
                    this.Ir(e, "pending")
                }
                updateMutationState(e, t, n) {
                    this.Ir(e, t, n), this.Tr(e)
                }
                addLocalQueryTarget(e) {
                    let t = "not-current";
                    if (this.isActiveQueryTarget(e)) {
                        const n = this.storage.getItem(kl(this.persistenceKey, e));
                        if (n) {
                            const r = Ol.Zi(e, n);
                            r && (t = r.state)
                        }
                    }
                    return this.Er.tr(e), this.mr(), t
                }
                removeLocalQueryTarget(e) {
                    this.Er.er(e), this.mr()
                }
                isLocalQueryTarget(e) {
                    return this.Er.activeTargetIds.has(e)
                }
                clearQueryState(e) {
                    this.removeItem(kl(this.persistenceKey, e))
                }
                updateQueryState(e, t, n) {
                    this.Ar(e, t, n)
                }
                handleUserChange(e, t, n) {
                    t.forEach((e => {
                        this.Tr(e)
                    })), this.currentUser = e, n.forEach((e => {
                        this.addPendingMutation(e)
                    }))
                }
                setOnlineState(e) {
                    this.Rr(e)
                }
                notifyBundleLoaded(e) {
                    this.vr(e)
                }
                shutdown() {
                    this.started && (this.window.removeEventListener("storage", this.sr), this.removeItem(this.cr), this.started = !1)
                }
                getItem(e) {
                    const t = this.storage.getItem(e);
                    return pr("SharedClientState", "READ", e, t), t
                }
                setItem(e, t) {
                    pr("SharedClientState", "SET", e, t), this.storage.setItem(e, t)
                }
                removeItem(e) {
                    pr("SharedClientState", "REMOVE", e), this.storage.removeItem(e)
                }
                ir(e) {
                    const t = e;
                    if (t.storageArea === this.storage) {
                        if (pr("SharedClientState", "EVENT", t.key, t.newValue), t.key === this.cr) return void yr("Received WebStorage notification for local change. Another client might have garbage-collected our state");
                        this.Ws.enqueueRetryable((async () => {
                            if (this.started) {
                                if (null !== t.key)
                                    if (this.hr.test(t.key)) {
                                        if (null == t.newValue) {
                                            const e = this.br(t.key);
                                            return this.Pr(e, null)
                                        } {
                                            const e = this.Vr(t.key, t.newValue);
                                            if (e) return this.Pr(e.clientId, e)
                                        }
                                    } else if (this.lr.test(t.key)) {
                                    if (null !== t.newValue) {
                                        const e = this.Sr(t.key, t.newValue);
                                        if (e) return this.Dr(e)
                                    }
                                } else if (this.dr.test(t.key)) {
                                    if (null !== t.newValue) {
                                        const e = this.Cr(t.key, t.newValue);
                                        if (e) return this.Nr(e)
                                    }
                                } else if (t.key === this.wr) {
                                    if (null !== t.newValue) {
                                        const e = this.gr(t.newValue);
                                        if (e) return this.yr(e)
                                    }
                                } else if (t.key === this.ar) {
                                    const e = function (e) {
                                        let t = ps.ct;
                                        if (null != e) try {
                                            const n = JSON.parse(e);
                                            Ir("number" == typeof n), t = n
                                        } catch (e) {
                                            yr("SharedClientState", "Failed to read sequence number from WebStorage", e)
                                        }
                                        return t
                                    }(t.newValue);
                                    e !== ps.ct && this.sequenceNumberHandler(e)
                                } else if (t.key === this._r) {
                                    const e = this.kr(t.newValue);
                                    await Promise.all(e.map((e => this.syncEngine.Or(e))))
                                }
                            } else this.ur.push(t)
                        }))
                    }
                }
                get Er() {
                    return this.rr.get(this.nr)
                }
                mr() {
                    this.setItem(this.cr, this.Er.Xi())
                }
                Ir(e, t, n) {
                    const r = new Rl(this.currentUser, e, t, n),
                        s = Nl(this.persistenceKey, this.currentUser, e);
                    this.setItem(s, r.Xi())
                }
                Tr(e) {
                    const t = Nl(this.persistenceKey, this.currentUser, e);
                    this.removeItem(t)
                }
                Rr(e) {
                    const t = {
                        clientId: this.nr,
                        onlineState: e
                    };
                    this.storage.setItem(this.wr, JSON.stringify(t))
                }
                Ar(e, t, n) {
                    const r = kl(this.persistenceKey, e),
                        s = new Ol(e, t, n);
                    this.setItem(r, s.Xi())
                }
                vr(e) {
                    const t = JSON.stringify(Array.from(e));
                    this.setItem(this._r, t)
                }
                br(e) {
                    const t = this.hr.exec(e);
                    return t ? t[1] : null
                }
                Vr(e, t) {
                    const n = this.br(e);
                    return Ll.Zi(n, t)
                }
                Sr(e, t) {
                    const n = this.lr.exec(e),
                        r = Number(n[1]),
                        s = void 0 !== n[2] ? n[2] : null;
                    return Rl.Zi(new dr(s), r, t)
                }
                Cr(e, t) {
                    const n = this.dr.exec(e),
                        r = Number(n[1]);
                    return Ol.Zi(r, t)
                }
                gr(e) {
                    return Ml.Zi(e)
                }
                kr(e) {
                    return JSON.parse(e)
                }
                async Dr(e) {
                    if (e.user.uid === this.currentUser.uid) return this.syncEngine.$r(e.batchId, e.state, e.error);
                    pr("SharedClientState", `Ignoring mutation for non-active user ${e.user.uid}`)
                }
                Nr(e) {
                    return this.syncEngine.Mr(e.targetId, e.state, e.error)
                }
                Pr(e, t) {
                    const n = t ? this.rr.insert(e, t) : this.rr.remove(e),
                        r = this.pr(this.rr),
                        s = this.pr(n),
                        i = [],
                        o = [];
                    return s.forEach((e => {
                        r.has(e) || i.push(e)
                    })), r.forEach((e => {
                        s.has(e) || o.push(e)
                    })), this.syncEngine.Fr(i, o).then((() => {
                        this.rr = n
                    }))
                }
                yr(e) {
                    this.rr.get(e.clientId) && this.onlineStateHandler(e.onlineState)
                }
                pr(e) {
                    let t = Yo();
                    return e.forEach(((e, n) => {
                        t = t.unionWith(n.activeTargetIds)
                    })), t
                }
            }
            class Vl {
                constructor() {
                    this.Br = new Pl, this.Lr = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null
                }
                addPendingMutation(e) {}
                updateMutationState(e, t, n) {}
                addLocalQueryTarget(e) {
                    return this.Br.tr(e), this.Lr[e] || "not-current"
                }
                updateQueryState(e, t, n) {
                    this.Lr[e] = t
                }
                removeLocalQueryTarget(e) {
                    this.Br.er(e)
                }
                isLocalQueryTarget(e) {
                    return this.Br.activeTargetIds.has(e)
                }
                clearQueryState(e) {
                    delete this.Lr[e]
                }
                getAllActiveQueryTargets() {
                    return this.Br.activeTargetIds
                }
                isActiveQueryTarget(e) {
                    return this.Br.activeTargetIds.has(e)
                }
                start() {
                    return this.Br = new Pl, Promise.resolve()
                }
                handleUserChange(e, t, n) {}
                setOnlineState(e) {}
                shutdown() {}
                writeSequenceNumber(e) {}
                notifyBundleLoaded(e) {}
            }
            class Ul {
                qr(e) {}
                shutdown() {}
            }
            class Bl {
                constructor() {
                    this.Ur = () => this.Kr(), this.Gr = () => this.Qr(), this.zr = [], this.jr()
                }
                qr(e) {
                    this.zr.push(e)
                }
                shutdown() {
                    window.removeEventListener("online", this.Ur), window.removeEventListener("offline", this.Gr)
                }
                jr() {
                    window.addEventListener("online", this.Ur), window.addEventListener("offline", this.Gr)
                }
                Kr() {
                    pr("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
                    for (const e of this.zr) e(0)
                }
                Qr() {
                    pr("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
                    for (const e of this.zr) e(1)
                }
                static D() {
                    return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener
                }
            }
            let ql = null;

            function $l() {
                return null === ql ? ql = 268435456 + Math.round(2147483648 * Math.random()) : ql++, "0x" + ql.toString(16)
            }
            const zl = {
                BatchGetDocuments: "batchGet",
                Commit: "commit",
                RunQuery: "runQuery",
                RunAggregationQuery: "runAggregationQuery"
            };
            class jl {
                constructor(e) {
                    this.Wr = e.Wr, this.Hr = e.Hr
                }
                Jr(e) {
                    this.Yr = e
                }
                Zr(e) {
                    this.Xr = e
                }
                onMessage(e) {
                    this.eo = e
                }
                close() {
                    this.Hr()
                }
                send(e) {
                    this.Wr(e)
                }
                no() {
                    this.Yr()
                }
                so(e) {
                    this.Xr(e)
                }
                io(e) {
                    this.eo(e)
                }
            }
            const Gl = "WebChannelConnection";
            class Kl extends class {
                constructor(e) {
                    this.databaseInfo = e, this.databaseId = e.databaseId;
                    const t = e.ssl ? "https" : "http";
                    this.ro = t + "://" + e.host, this.oo = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents"
                }
                get uo() {
                    return !1
                }
                co(e, t, n, r, s) {
                    const i = $l(),
                        o = this.ao(e, t);
                    pr("RestConnection", `Sending RPC '${e}' ${i}:`, o, n);
                    const a = {};
                    return this.ho(a, r, s), this.lo(e, o, a, n).then((t => (pr("RestConnection", `Received RPC '${e}' ${i}: `, t), t)), (t => {
                        throw wr("RestConnection", `RPC '${e}' ${i} failed with error: `, t, "url: ", o, "request:", n), t
                    }))
                }
                fo(e, t, n, r, s, i) {
                    return this.co(e, t, n, r, s)
                }
                ho(e, t, n) {
                    e["X-Goog-Api-Client"] = "gl-js/ fire/" + fr, e["Content-Type"] = "text/plain", this.databaseInfo.appId && (e["X-Firebase-GMPID"] = this.databaseInfo.appId), t && t.headers.forEach(((t, n) => e[n] = t)), n && n.headers.forEach(((t, n) => e[n] = t))
                }
                ao(e, t) {
                    const n = zl[e];
                    return `${this.ro}/v1/${t}:${n}`
                }
            } {
                constructor(e) {
                    super(e), this.forceLongPolling = e.forceLongPolling, this.autoDetectLongPolling = e.autoDetectLongPolling, this.useFetchStreams = e.useFetchStreams
                }
                lo(e, t, n, r) {
                    const s = $l();
                    return new Promise(((i, o) => {
                        const a = new lr;
                        a.setWithCredentials(!0), a.listenOnce(ir.COMPLETE, (() => {
                            try {
                                switch (a.getLastErrorCode()) {
                                    case sr.NO_ERROR:
                                        const t = a.getResponseJson();
                                        pr(Gl, `XHR for RPC '${e}' ${s} received:`, JSON.stringify(t)), i(t);
                                        break;
                                    case sr.TIMEOUT:
                                        pr(Gl, `RPC '${e}' ${s} timed out`), o(new Tr(Er.DEADLINE_EXCEEDED, "Request time out"));
                                        break;
                                    case sr.HTTP_ERROR:
                                        const n = a.getStatus();
                                        if (pr(Gl, `RPC '${e}' ${s} failed with status:`, n, "response text:", a.getResponseText()), n > 0) {
                                            let e = a.getResponseJson();
                                            Array.isArray(e) && (e = e[0]);
                                            const t = null == e ? void 0 : e.error;
                                            if (t && t.status && t.message) {
                                                const e = function (e) {
                                                    const t = e.toLowerCase().replace(/_/g, "-");
                                                    return Object.values(Er).indexOf(t) >= 0 ? t : Er.UNKNOWN
                                                }(t.status);
                                                o(new Tr(e, t.message))
                                            } else o(new Tr(Er.UNKNOWN, "Server responded with status " + a.getStatus()))
                                        } else o(new Tr(Er.UNAVAILABLE, "Connection failed."));
                                        break;
                                    default:
                                        br()
                                }
                            } finally {
                                pr(Gl, `RPC '${e}' ${s} completed.`)
                            }
                        }));
                        const c = JSON.stringify(r);
                        pr(Gl, `RPC '${e}' ${s} sending request:`, r), a.send(t, "POST", c, n, 15)
                    }))
                }
                wo(e, t, n) {
                    const r = $l(),
                        s = [this.ro, "/", "google.firestore.v1.Firestore", "/", e, "/channel"],
                        i = nr(),
                        o = rr(),
                        a = {
                            httpSessionIdParam: "gsessionid",
                            initMessageHeaders: {},
                            messageUrlParams: {
                                database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
                            },
                            sendRawJson: !0,
                            supportsCrossDomainXhr: !0,
                            internalChannelParams: {
                                forwardChannelRequestTimeoutMs: 6e5
                            },
                            forceLongPolling: this.forceLongPolling,
                            detectBufferingProxy: this.autoDetectLongPolling
                        };
                    this.useFetchStreams && (a.xmlHttpFactory = new cr({})), this.ho(a.initMessageHeaders, t, n), a.encodeInitMessageHeaders = !0;
                    const c = s.join("");
                    pr(Gl, `Creating RPC '${e}' stream ${r}: ${c}`, a);
                    const u = i.createWebChannel(c, a);
                    let l = !1,
                        h = !1;
                    const d = new jl({
                            Wr: t => {
                                h ? pr(Gl, `Not sending because RPC '${e}' stream ${r} is closed:`, t) : (l || (pr(Gl, `Opening RPC '${e}' stream ${r} transport.`), u.open(), l = !0), pr(Gl, `RPC '${e}' stream ${r} sending:`, t), u.send(t))
                            },
                            Hr: () => u.close()
                        }),
                        f = (e, t, n) => {
                            e.listen(t, (e => {
                                try {
                                    n(e)
                                } catch (e) {
                                    setTimeout((() => {
                                        throw e
                                    }), 0)
                                }
                            }))
                        };
                    return f(u, ur.EventType.OPEN, (() => {
                        h || pr(Gl, `RPC '${e}' stream ${r} transport opened.`)
                    })), f(u, ur.EventType.CLOSE, (() => {
                        h || (h = !0, pr(Gl, `RPC '${e}' stream ${r} transport closed`), d.so())
                    })), f(u, ur.EventType.ERROR, (t => {
                        h || (h = !0, wr(Gl, `RPC '${e}' stream ${r} transport errored:`, t), d.so(new Tr(Er.UNAVAILABLE, "The operation could not be completed")))
                    })), f(u, ur.EventType.MESSAGE, (t => {
                        var n;
                        if (!h) {
                            const s = t.data[0];
                            Ir(!!s);
                            const i = s,
                                o = i.error || (null === (n = i[0]) || void 0 === n ? void 0 : n.error);
                            if (o) {
                                pr(Gl, `RPC '${e}' stream ${r} received error:`, o);
                                const t = o.status;
                                let n = function (e) {
                                        const t = Oa[e];
                                        if (void 0 !== t) return Pa(t)
                                    }(t),
                                    s = o.message;
                                void 0 === n && (n = Er.INTERNAL, s = "Unknown error status: " + t + " with message " + o.message), h = !0, d.so(new Tr(n, s)), u.close()
                            } else pr(Gl, `RPC '${e}' stream ${r} received:`, s), d.io(s)
                        }
                    })), f(o, or.STAT_EVENT, (t => {
                        t.stat === ar.PROXY ? pr(Gl, `RPC '${e}' stream ${r} detected buffering proxy`) : t.stat === ar.NOPROXY && pr(Gl, `RPC '${e}' stream ${r} detected no buffering proxy`)
                    })), setTimeout((() => {
                        d.no()
                    }), 0), d
                }
            }

            function Ql() {
                return "undefined" != typeof window ? window : null
            }

            function Wl() {
                return "undefined" != typeof document ? document : null
            }

            function Hl(e) {
                return new Xa(e, !0)
            }
            class Yl {
                constructor(e, t, n = 1e3, r = 1.5, s = 6e4) {
                    this.Ws = e, this.timerId = t, this._o = n, this.mo = r, this.yo = s, this.po = 0, this.Io = null, this.To = Date.now(), this.reset()
                }
                reset() {
                    this.po = 0
                }
                Eo() {
                    this.po = this.yo
                }
                Ao(e) {
                    this.cancel();
                    const t = Math.floor(this.po + this.Ro()),
                        n = Math.max(0, Date.now() - this.To),
                        r = Math.max(0, t - n);
                    r > 0 && pr("ExponentialBackoff", `Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`), this.Io = this.Ws.enqueueAfterDelay(this.timerId, r, (() => (this.To = Date.now(), e()))), this.po *= this.mo, this.po < this._o && (this.po = this._o), this.po > this.yo && (this.po = this.yo)
                }
                vo() {
                    null !== this.Io && (this.Io.skipDelay(), this.Io = null)
                }
                cancel() {
                    null !== this.Io && (this.Io.cancel(), this.Io = null)
                }
                Ro() {
                    return (Math.random() - .5) * this.po
                }
            }
            class Xl {
                constructor(e, t, n, r, s, i, o, a) {
                    this.Ws = e, this.bo = n, this.Po = r, this.connection = s, this.authCredentialsProvider = i, this.appCheckCredentialsProvider = o, this.listener = a, this.state = 0, this.Vo = 0, this.So = null, this.Do = null, this.stream = null, this.Co = new Yl(e, t)
                }
                xo() {
                    return 1 === this.state || 5 === this.state || this.No()
                }
                No() {
                    return 2 === this.state || 3 === this.state
                }
                start() {
                    4 !== this.state ? this.auth() : this.ko()
                }
                async stop() {
                    this.xo() && await this.close(0)
                }
                Oo() {
                    this.state = 0, this.Co.reset()
                }
                $o() {
                    this.No() && null === this.So && (this.So = this.Ws.enqueueAfterDelay(this.bo, 6e4, (() => this.Mo())))
                }
                Fo(e) {
                    this.Bo(), this.stream.send(e)
                }
                async Mo() {
                    if (this.No()) return this.close(0)
                }
                Bo() {
                    this.So && (this.So.cancel(), this.So = null)
                }
                Lo() {
                    this.Do && (this.Do.cancel(), this.Do = null)
                }
                async close(e, t) {
                    this.Bo(), this.Lo(), this.Co.cancel(), this.Vo++, 4 !== e ? this.Co.reset() : t && t.code === Er.RESOURCE_EXHAUSTED ? (yr(t.toString()), yr("Using maximum backoff delay to prevent overloading the backend."), this.Co.Eo()) : t && t.code === Er.UNAUTHENTICATED && 3 !== this.state && (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), null !== this.stream && (this.qo(), this.stream.close(), this.stream = null), this.state = e, await this.listener.Zr(t)
                }
                qo() {}
                auth() {
                    this.state = 1;
                    const e = this.Uo(this.Vo),
                        t = this.Vo;
                    Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then((([e, n]) => {
                        this.Vo === t && this.Ko(e, n)
                    }), (t => {
                        e((() => {
                            const e = new Tr(Er.UNKNOWN, "Fetching auth token failed: " + t.message);
                            return this.Go(e)
                        }))
                    }))
                }
                Ko(e, t) {
                    const n = this.Uo(this.Vo);
                    this.stream = this.Qo(e, t), this.stream.Jr((() => {
                        n((() => (this.state = 2, this.Do = this.Ws.enqueueAfterDelay(this.Po, 1e4, (() => (this.No() && (this.state = 3), Promise.resolve()))), this.listener.Jr())))
                    })), this.stream.Zr((e => {
                        n((() => this.Go(e)))
                    })), this.stream.onMessage((e => {
                        n((() => this.onMessage(e)))
                    }))
                }
                ko() {
                    this.state = 5, this.Co.Ao((async () => {
                        this.state = 0, this.start()
                    }))
                }
                Go(e) {
                    return pr("PersistentStream", `close with error: ${e}`), this.stream = null, this.close(4, e)
                }
                Uo(e) {
                    return t => {
                        this.Ws.enqueueAndForget((() => this.Vo === e ? t() : (pr("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve())))
                    }
                }
            }
            class Jl extends Xl {
                constructor(e, t, n, r, s, i) {
                    super(e, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", t, n, r, i), this.serializer = s
                }
                Qo(e, t) {
                    return this.connection.wo("Listen", e, t)
                }
                onMessage(e) {
                    this.Co.reset();
                    const t = function (e, t) {
                            let n;
                            if ("targetChange" in t) {
                                t.targetChange;
                                const r = function (e) {
                                        return "NO_CHANGE" === e ? 0 : "ADD" === e ? 1 : "REMOVE" === e ? 2 : "CURRENT" === e ? 3 : "RESET" === e ? 4 : br()
                                    }(t.targetChange.targetChangeType || "NO_CHANGE"),
                                    s = t.targetChange.targetIds || [],
                                    i = function (e, t) {
                                        return e.useProto3Json ? (Ir(void 0 === t || "string" == typeof t), oi.fromBase64String(t || "")) : (Ir(void 0 === t || t instanceof Uint8Array), oi.fromUint8Array(t || new Uint8Array))
                                    }(e, t.targetChange.resumeToken),
                                    o = t.targetChange.cause,
                                    a = o && function (e) {
                                        const t = void 0 === e.code ? Er.UNKNOWN : Pa(e.code);
                                        return new Tr(t, e.message || "")
                                    }(o);
                                n = new za(r, s, i, a || null)
                            } else if ("documentChange" in t) {
                                t.documentChange;
                                const r = t.documentChange;
                                r.document, r.document.name, r.document.updateTime;
                                const s = ic(e, r.document.name),
                                    i = tc(r.document.updateTime),
                                    o = r.document.createTime ? tc(r.document.createTime) : Br.min(),
                                    a = new Fi({
                                        mapValue: {
                                            fields: r.document.fields
                                        }
                                    }),
                                    c = Ui.newFoundDocument(s, i, o, a),
                                    u = r.targetIds || [],
                                    l = r.removedTargetIds || [];
                                n = new qa(u, l, c.key, c)
                            } else if ("documentDelete" in t) {
                                t.documentDelete;
                                const r = t.documentDelete;
                                r.document;
                                const s = ic(e, r.document),
                                    i = r.readTime ? tc(r.readTime) : Br.min(),
                                    o = Ui.newNoDocument(s, i),
                                    a = r.removedTargetIds || [];
                                n = new qa([], a, o.key, o)
                            } else if ("documentRemove" in t) {
                                t.documentRemove;
                                const r = t.documentRemove;
                                r.document;
                                const s = ic(e, r.document),
                                    i = r.removedTargetIds || [];
                                n = new qa([], i, s, null)
                            } else {
                                if (!("filter" in t)) return br(); {
                                    t.filter;
                                    const e = t.filter;
                                    e.targetId;
                                    const r = e.count || 0,
                                        s = new Ra(r),
                                        i = e.targetId;
                                    n = new $a(i, s)
                                }
                            }
                            return n
                        }(this.serializer, e),
                        n = function (e) {
                            if (!("targetChange" in e)) return Br.min();
                            const t = e.targetChange;
                            return t.targetIds && t.targetIds.length ? Br.min() : t.readTime ? tc(t.readTime) : Br.min()
                        }(e);
                    return this.listener.zo(t, n)
                }
                jo(e) {
                    const t = {};
                    t.database = cc(this.serializer), t.addTarget = function (e, t) {
                        let n;
                        const r = t.target;
                        return n = mo(r) ? {
                            documents: gc(e, r)
                        } : {
                            query: mc(e, r)
                        }, n.targetId = t.targetId, t.resumeToken.approximateByteSize() > 0 ? n.resumeToken = Za(e, t.resumeToken) : t.snapshotVersion.compareTo(Br.min()) > 0 && (n.readTime = Ja(e, t.snapshotVersion.toTimestamp())), n
                    }(this.serializer, e);
                    const n = function (e, t) {
                        const n = function (e, t) {
                            switch (t) {
                                case 0:
                                    return null;
                                case 1:
                                    return "existence-filter-mismatch";
                                case 2:
                                    return "limbo-document";
                                default:
                                    return br()
                            }
                        }(0, t.purpose);
                        return null == n ? null : {
                            "goog-listen-tags": n
                        }
                    }(this.serializer, e);
                    n && (t.labels = n), this.Fo(t)
                }
                Wo(e) {
                    const t = {};
                    t.database = cc(this.serializer), t.removeTarget = e, this.Fo(t)
                }
            }
            class Zl extends Xl {
                constructor(e, t, n, r, s, i) {
                    super(e, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", t, n, r, i), this.serializer = s, this.Ho = !1
                }
                get Jo() {
                    return this.Ho
                }
                start() {
                    this.Ho = !1, this.lastStreamToken = void 0, super.start()
                }
                qo() {
                    this.Ho && this.Yo([])
                }
                Qo(e, t) {
                    return this.connection.wo("Write", e, t)
                }
                onMessage(e) {
                    if (Ir(!!e.streamToken), this.lastStreamToken = e.streamToken, this.Ho) {
                        this.Co.reset();
                        const t = function (e, t) {
                                return e && e.length > 0 ? (Ir(void 0 !== t), e.map((e => function (e, t) {
                                    let n = e.updateTime ? tc(e.updateTime) : tc(t);
                                    return n.isEqual(Br.min()) && (n = tc(t)), new fa(n, e.transformResults || [])
                                }(e, t)))) : []
                            }(e.writeResults, e.commitTime),
                            n = tc(e.commitTime);
                        return this.listener.Zo(n, t)
                    }
                    return Ir(!e.writeResults || 0 === e.writeResults.length), this.Ho = !0, this.listener.Xo()
                }
                tu() {
                    const e = {};
                    e.database = cc(this.serializer), this.Fo(e)
                }
                Yo(e) {
                    const t = {
                        streamToken: this.lastStreamToken,
                        writes: e.map((e => dc(this.serializer, e)))
                    };
                    this.Fo(t)
                }
            }
            class eh extends class {} {
                constructor(e, t, n, r) {
                    super(), this.authCredentials = e, this.appCheckCredentials = t, this.connection = n, this.serializer = r, this.eu = !1
                }
                nu() {
                    if (this.eu) throw new Tr(Er.FAILED_PRECONDITION, "The client has already been terminated.")
                }
                co(e, t, n) {
                    return this.nu(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then((([r, s]) => this.connection.co(e, t, n, r, s))).catch((e => {
                        throw "FirebaseError" === e.name ? (e.code === Er.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e) : new Tr(Er.UNKNOWN, e.toString())
                    }))
                }
                fo(e, t, n, r) {
                    return this.nu(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then((([s, i]) => this.connection.fo(e, t, n, s, i, r))).catch((e => {
                        throw "FirebaseError" === e.name ? (e.code === Er.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e) : new Tr(Er.UNKNOWN, e.toString())
                    }))
                }
                terminate() {
                    this.eu = !0
                }
            }
            class th {
                constructor(e, t) {
                    this.asyncQueue = e, this.onlineStateHandler = t, this.state = "Unknown", this.su = 0, this.iu = null, this.ru = !0
                }
                ou() {
                    0 === this.su && (this.uu("Unknown"), this.iu = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, (() => (this.iu = null, this.cu("Backend didn't respond within 10 seconds."), this.uu("Offline"), Promise.resolve()))))
                }
                au(e) {
                    "Online" === this.state ? this.uu("Unknown") : (this.su++, this.su >= 1 && (this.hu(), this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`), this.uu("Offline")))
                }
                set(e) {
                    this.hu(), this.su = 0, "Online" === e && (this.ru = !1), this.uu(e)
                }
                uu(e) {
                    e !== this.state && (this.state = e, this.onlineStateHandler(e))
                }
                cu(e) {
                    const t = `Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
                    this.ru ? (yr(t), this.ru = !1) : pr("OnlineStateTracker", t)
                }
                hu() {
                    null !== this.iu && (this.iu.cancel(), this.iu = null)
                }
            }
            class nh {
                constructor(e, t, n, r, s) {
                    this.localStore = e, this.datastore = t, this.asyncQueue = n, this.remoteSyncer = {}, this.lu = [], this.fu = new Map, this.du = new Set, this.wu = [], this._u = s, this._u.qr((e => {
                        n.enqueueAndForget((async () => {
                            hh(this) && (pr("RemoteStore", "Restarting streams for network reachability change."), await async function (e) {
                                const t = _r(e);
                                t.du.add(4), await sh(t), t.mu.set("Unknown"), t.du.delete(4), await rh(t)
                            }(this))
                        }))
                    })), this.mu = new th(n, r)
                }
            }
            async function rh(e) {
                if (hh(e))
                    for (const t of e.wu) await t(!0)
            }
            async function sh(e) {
                for (const t of e.wu) await t(!1)
            }

            function ih(e, t) {
                const n = _r(e);
                n.fu.has(t.targetId) || (n.fu.set(t.targetId, t), lh(n) ? uh(n) : xh(n).No() && ah(n, t))
            }

            function oh(e, t) {
                const n = _r(e),
                    r = xh(n);
                n.fu.delete(t), r.No() && ch(n, t), 0 === n.fu.size && (r.No() ? r.$o() : hh(n) && n.mu.set("Unknown"))
            }

            function ah(e, t) {
                e.gu.Ot(t.targetId), xh(e).jo(t)
            }

            function ch(e, t) {
                e.gu.Ot(t), xh(e).Wo(t)
            }

            function uh(e) {
                e.gu = new Ga({
                    getRemoteKeysForTarget: t => e.remoteSyncer.getRemoteKeysForTarget(t),
                    ne: t => e.fu.get(t) || null
                }), xh(e).start(), e.mu.ou()
            }

            function lh(e) {
                return hh(e) && !xh(e).xo() && e.fu.size > 0
            }

            function hh(e) {
                return 0 === _r(e).du.size
            }

            function dh(e) {
                e.gu = void 0
            }
            async function fh(e) {
                e.fu.forEach(((t, n) => {
                    ah(e, t)
                }))
            }
            async function gh(e, t) {
                dh(e), lh(e) ? (e.mu.au(t), uh(e)) : e.mu.set("Unknown")
            }
            async function mh(e, t, n) {
                if (e.mu.set("Online"), t instanceof za && 2 === t.state && t.cause) try {
                    await async function (e, t) {
                        const n = t.cause;
                        for (const r of t.targetIds) e.fu.has(r) && (await e.remoteSyncer.rejectListen(r, n), e.fu.delete(r), e.gu.removeTarget(r))
                    }(e, t)
                } catch (n) {
                    pr("RemoteStore", "Failed to remove targets %s: %s ", t.targetIds.join(","), n), await ph(e, n)
                } else if (t instanceof qa ? e.gu.Kt(t) : t instanceof $a ? e.gu.Jt(t) : e.gu.zt(t), !n.isEqual(Br.min())) try {
                    const t = await vl(e.localStore);
                    n.compareTo(t) >= 0 && await
                    function (e, t) {
                        const n = e.gu.Xt(t);
                        return n.targetChanges.forEach(((n, r) => {
                            if (n.resumeToken.approximateByteSize() > 0) {
                                const s = e.fu.get(r);
                                s && e.fu.set(r, s.withResumeToken(n.resumeToken, t))
                            }
                        })), n.targetMismatches.forEach((t => {
                            const n = e.fu.get(t);
                            if (!n) return;
                            e.fu.set(t, n.withResumeToken(oi.EMPTY_BYTE_STRING, n.snapshotVersion)), ch(e, t);
                            const r = new Dc(n.target, t, 1, n.sequenceNumber);
                            ah(e, r)
                        })), e.remoteSyncer.applyRemoteEvent(n)
                    }(e, n)
                } catch (t) {
                    pr("RemoteStore", "Failed to raise snapshot:", t), await ph(e, t)
                }
            }
            async function ph(e, t, n) {
                if (!us(t)) throw t;
                e.du.add(1), await sh(e), e.mu.set("Offline"), n || (n = () => vl(e.localStore)), e.asyncQueue.enqueueRetryable((async () => {
                    pr("RemoteStore", "Retrying IndexedDB access"), await n(), e.du.delete(1), await rh(e)
                }))
            }

            function yh(e, t) {
                return t().catch((n => ph(e, n, t)))
            }
            async function wh(e) {
                const t = _r(e),
                    n = Nh(t);
                let r = t.lu.length > 0 ? t.lu[t.lu.length - 1].batchId : -1;
                for (; vh(t);) try {
                    const e = await Il(t.localStore, r);
                    if (null === e) {
                        0 === t.lu.length && n.$o();
                        break
                    }
                    r = e.batchId, bh(t, e)
                } catch (e) {
                    await ph(t, e)
                }
                Ih(t) && _h(t)
            }

            function vh(e) {
                return hh(e) && e.lu.length < 10
            }

            function bh(e, t) {
                e.lu.push(t);
                const n = Nh(e);
                n.No() && n.Jo && n.Yo(t.mutations)
            }

            function Ih(e) {
                return hh(e) && !Nh(e).xo() && e.lu.length > 0
            }

            function _h(e) {
                Nh(e).start()
            }
            async function Eh(e) {
                Nh(e).tu()
            }
            async function Th(e) {
                const t = Nh(e);
                for (const n of e.lu) t.Yo(n.mutations)
            }
            async function Sh(e, t, n) {
                const r = e.lu.shift(),
                    s = Na.from(r, t, n);
                await yh(e, (() => e.remoteSyncer.applySuccessfulWrite(s))), await wh(e)
            }
            async function Dh(e, t) {
                t && Nh(e).Jo && await async function (e, t) {
                    if (Ma(n = t.code) && n !== Er.ABORTED) {
                        const n = e.lu.shift();
                        Nh(e).Oo(), await yh(e, (() => e.remoteSyncer.rejectFailedWrite(n.batchId, t))), await wh(e)
                    }
                    var n
                }(e, t), Ih(e) && _h(e)
            }
            async function Ch(e, t) {
                const n = _r(e);
                n.asyncQueue.verifyOperationInProgress(), pr("RemoteStore", "RemoteStore received new credentials");
                const r = hh(n);
                n.du.add(3), await sh(n), r && n.mu.set("Unknown"), await n.remoteSyncer.handleCredentialChange(t), n.du.delete(3), await rh(n)
            }
            async function Ah(e, t) {
                const n = _r(e);
                t ? (n.du.delete(2), await rh(n)) : t || (n.du.add(2), await sh(n), n.mu.set("Unknown"))
            }

            function xh(e) {
                return e.yu || (e.yu = function (e, t, n) {
                    const r = _r(e);
                    return r.nu(), new Jl(t, r.connection, r.authCredentials, r.appCheckCredentials, r.serializer, n)
                }(e.datastore, e.asyncQueue, {
                    Jr: fh.bind(null, e),
                    Zr: gh.bind(null, e),
                    zo: mh.bind(null, e)
                }), e.wu.push((async t => {
                    t ? (e.yu.Oo(), lh(e) ? uh(e) : e.mu.set("Unknown")) : (await e.yu.stop(), dh(e))
                }))), e.yu
            }

            function Nh(e) {
                return e.pu || (e.pu = function (e, t, n) {
                    const r = _r(e);
                    return r.nu(), new Zl(t, r.connection, r.authCredentials, r.appCheckCredentials, r.serializer, n)
                }(e.datastore, e.asyncQueue, {
                    Jr: Eh.bind(null, e),
                    Zr: Dh.bind(null, e),
                    Xo: Th.bind(null, e),
                    Zo: Sh.bind(null, e)
                }), e.wu.push((async t => {
                    t ? (e.pu.Oo(), await wh(e)) : (await e.pu.stop(), e.lu.length > 0 && (pr("RemoteStore", `Stopping write stream with ${e.lu.length} pending writes`), e.lu = []))
                }))), e.pu
            }
            class kh {
                constructor(e, t, n, r, s) {
                    this.asyncQueue = e, this.timerId = t, this.targetTimeMs = n, this.op = r, this.removalCallback = s, this.deferred = new Sr, this.then = this.deferred.promise.then.bind(this.deferred.promise), this.deferred.promise.catch((e => {}))
                }
                static createAndSchedule(e, t, n, r, s) {
                    const i = Date.now() + n,
                        o = new kh(e, t, i, r, s);
                    return o.start(n), o
                }
                start(e) {
                    this.timerHandle = setTimeout((() => this.handleDelayElapsed()), e)
                }
                skipDelay() {
                    return this.handleDelayElapsed()
                }
                cancel(e) {
                    null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new Tr(Er.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))))
                }
                handleDelayElapsed() {
                    this.asyncQueue.enqueueAndForget((() => null !== this.timerHandle ? (this.clearTimeout(), this.op().then((e => this.deferred.resolve(e)))) : Promise.resolve()))
                }
                clearTimeout() {
                    null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null)
                }
            }

            function Rh(e, t) {
                if (yr("AsyncQueue", `${t}: ${e}`), us(e)) return new Tr(Er.UNAVAILABLE, `${t}: ${e}`);
                throw e
            }
            class Oh {
                constructor(e) {
                    this.comparator = e ? (t, n) => e(t, n) || Gr.comparator(t.key, n.key) : (e, t) => Gr.comparator(e.key, t.key), this.keyedMap = qo(), this.sortedSet = new Js(this.comparator)
                }
                static emptySet(e) {
                    return new Oh(e.comparator)
                }
                has(e) {
                    return null != this.keyedMap.get(e)
                }
                get(e) {
                    return this.keyedMap.get(e)
                }
                first() {
                    return this.sortedSet.minKey()
                }
                last() {
                    return this.sortedSet.maxKey()
                }
                isEmpty() {
                    return this.sortedSet.isEmpty()
                }
                indexOf(e) {
                    const t = this.keyedMap.get(e);
                    return t ? this.sortedSet.indexOf(t) : -1
                }
                get size() {
                    return this.sortedSet.size
                }
                forEach(e) {
                    this.sortedSet.inorderTraversal(((t, n) => (e(t), !1)))
                }
                add(e) {
                    const t = this.delete(e.key);
                    return t.copy(t.keyedMap.insert(e.key, e), t.sortedSet.insert(e, null))
                }
                delete(e) {
                    const t = this.get(e);
                    return t ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(t)) : this
                }
                isEqual(e) {
                    if (!(e instanceof Oh)) return !1;
                    if (this.size !== e.size) return !1;
                    const t = this.sortedSet.getIterator(),
                        n = e.sortedSet.getIterator();
                    for (; t.hasNext();) {
                        const e = t.getNext().key,
                            r = n.getNext().key;
                        if (!e.isEqual(r)) return !1
                    }
                    return !0
                }
                toString() {
                    const e = [];
                    return this.forEach((t => {
                        e.push(t.toString())
                    })), 0 === e.length ? "DocumentSet ()" : "DocumentSet (\n  " + e.join("  \n") + "\n)"
                }
                copy(e, t) {
                    const n = new Oh;
                    return n.comparator = this.comparator, n.keyedMap = e, n.sortedSet = t, n
                }
            }
            class Lh {
                constructor() {
                    this.Iu = new Js(Gr.comparator)
                }
                track(e) {
                    const t = e.doc.key,
                        n = this.Iu.get(t);
                    n ? 0 !== e.type && 3 === n.type ? this.Iu = this.Iu.insert(t, e) : 3 === e.type && 1 !== n.type ? this.Iu = this.Iu.insert(t, {
                        type: n.type,
                        doc: e.doc
                    }) : 2 === e.type && 2 === n.type ? this.Iu = this.Iu.insert(t, {
                        type: 2,
                        doc: e.doc
                    }) : 2 === e.type && 0 === n.type ? this.Iu = this.Iu.insert(t, {
                        type: 0,
                        doc: e.doc
                    }) : 1 === e.type && 0 === n.type ? this.Iu = this.Iu.remove(t) : 1 === e.type && 2 === n.type ? this.Iu = this.Iu.insert(t, {
                        type: 1,
                        doc: n.doc
                    }) : 0 === e.type && 1 === n.type ? this.Iu = this.Iu.insert(t, {
                        type: 2,
                        doc: e.doc
                    }) : br() : this.Iu = this.Iu.insert(t, e)
                }
                Tu() {
                    const e = [];
                    return this.Iu.inorderTraversal(((t, n) => {
                        e.push(n)
                    })), e
                }
            }
            class Mh {
                constructor(e, t, n, r, s, i, o, a, c) {
                    this.query = e, this.docs = t, this.oldDocs = n, this.docChanges = r, this.mutatedKeys = s, this.fromCache = i, this.syncStateChanged = o, this.excludesMetadataChanges = a, this.hasCachedResults = c
                }
                static fromInitialDocuments(e, t, n, r, s) {
                    const i = [];
                    return t.forEach((e => {
                        i.push({
                            type: 0,
                            doc: e
                        })
                    })), new Mh(e, t, Oh.emptySet(t), i, n, r, !0, !1, s)
                }
                get hasPendingWrites() {
                    return !this.mutatedKeys.isEmpty()
                }
                isEqual(e) {
                    if (!(this.fromCache === e.fromCache && this.hasCachedResults === e.hasCachedResults && this.syncStateChanged === e.syncStateChanged && this.mutatedKeys.isEqual(e.mutatedKeys) && No(this.query, e.query) && this.docs.isEqual(e.docs) && this.oldDocs.isEqual(e.oldDocs))) return !1;
                    const t = this.docChanges,
                        n = e.docChanges;
                    if (t.length !== n.length) return !1;
                    for (let e = 0; e < t.length; e++)
                        if (t[e].type !== n[e].type || !t[e].doc.isEqual(n[e].doc)) return !1;
                    return !0
                }
            }
            class Ph {
                constructor() {
                    this.Eu = void 0, this.listeners = []
                }
            }
            class Fh {
                constructor() {
                    this.queries = new Fo((e => ko(e)), No), this.onlineState = "Unknown", this.Au = new Set
                }
            }
            async function Vh(e, t) {
                const n = _r(e),
                    r = t.query;
                let s = !1,
                    i = n.queries.get(r);
                if (i || (s = !0, i = new Ph), s) try {
                    i.Eu = await n.onListen(r)
                } catch (e) {
                    const n = Rh(e, `Initialization of query '${Ro(t.query)}' failed`);
                    return void t.onError(n)
                }
                n.queries.set(r, i), i.listeners.push(t), t.Ru(n.onlineState), i.Eu && t.vu(i.Eu) && $h(n)
            }
            async function Uh(e, t) {
                const n = _r(e),
                    r = t.query;
                let s = !1;
                const i = n.queries.get(r);
                if (i) {
                    const e = i.listeners.indexOf(t);
                    e >= 0 && (i.listeners.splice(e, 1), s = 0 === i.listeners.length)
                }
                if (s) return n.queries.delete(r), n.onUnlisten(r)
            }

            function Bh(e, t) {
                const n = _r(e);
                let r = !1;
                for (const e of t) {
                    const t = e.query,
                        s = n.queries.get(t);
                    if (s) {
                        for (const t of s.listeners) t.vu(e) && (r = !0);
                        s.Eu = e
                    }
                }
                r && $h(n)
            }

            function qh(e, t, n) {
                const r = _r(e),
                    s = r.queries.get(t);
                if (s)
                    for (const e of s.listeners) e.onError(n);
                r.queries.delete(t)
            }

            function $h(e) {
                e.Au.forEach((e => {
                    e.next()
                }))
            }
            class zh {
                constructor(e, t, n) {
                    this.query = e, this.bu = t, this.Pu = !1, this.Vu = null, this.onlineState = "Unknown", this.options = n || {}
                }
                vu(e) {
                    if (!this.options.includeMetadataChanges) {
                        const t = [];
                        for (const n of e.docChanges) 3 !== n.type && t.push(n);
                        e = new Mh(e.query, e.docs, e.oldDocs, t, e.mutatedKeys, e.fromCache, e.syncStateChanged, !0, e.hasCachedResults)
                    }
                    let t = !1;
                    return this.Pu ? this.Su(e) && (this.bu.next(e), t = !0) : this.Du(e, this.onlineState) && (this.Cu(e), t = !0), this.Vu = e, t
                }
                onError(e) {
                    this.bu.error(e)
                }
                Ru(e) {
                    this.onlineState = e;
                    let t = !1;
                    return this.Vu && !this.Pu && this.Du(this.Vu, e) && (this.Cu(this.Vu), t = !0), t
                }
                Du(e, t) {
                    if (!e.fromCache) return !0;
                    const n = "Offline" !== t;
                    return (!this.options.xu || !n) && (!e.docs.isEmpty() || e.hasCachedResults || "Offline" === t)
                }
                Su(e) {
                    if (e.docChanges.length > 0) return !0;
                    const t = this.Vu && this.Vu.hasPendingWrites !== e.hasPendingWrites;
                    return !(!e.syncStateChanged && !t) && !0 === this.options.includeMetadataChanges
                }
                Cu(e) {
                    e = Mh.fromInitialDocuments(e.query, e.docs, e.mutatedKeys, e.fromCache, e.hasCachedResults), this.Pu = !0, this.bu.next(e)
                }
            }
            class jh {
                constructor(e, t) {
                    this.Nu = e, this.byteLength = t
                }
                ku() {
                    return "metadata" in this.Nu
                }
            }
            class Gh {
                constructor(e) {
                    this.serializer = e
                }
                Hi(e) {
                    return ic(this.serializer, e)
                }
                Ji(e) {
                    return e.metadata.exists ? hc(this.serializer, e.document, !1) : Ui.newNoDocument(this.Hi(e.metadata.name), this.Yi(e.metadata.readTime))
                }
                Yi(e) {
                    return tc(e)
                }
            }
            class Kh {
                constructor(e, t, n) {
                    this.Ou = e, this.localStore = t, this.serializer = n, this.queries = [], this.documents = [], this.collectionGroups = new Set, this.progress = Qh(e)
                }
                $u(e) {
                    this.progress.bytesLoaded += e.byteLength;
                    let t = this.progress.documentsLoaded;
                    if (e.Nu.namedQuery) this.queries.push(e.Nu.namedQuery);
                    else if (e.Nu.documentMetadata) {
                        this.documents.push({
                            metadata: e.Nu.documentMetadata
                        }), e.Nu.documentMetadata.exists || ++t;
                        const n = $r.fromString(e.Nu.documentMetadata.name);
                        this.collectionGroups.add(n.get(n.length - 2))
                    } else e.Nu.document && (this.documents[this.documents.length - 1].document = e.Nu.document, ++t);
                    return t !== this.progress.documentsLoaded ? (this.progress.documentsLoaded = t, Object.assign({}, this.progress)) : null
                }
                Mu(e) {
                    const t = new Map,
                        n = new Gh(this.serializer);
                    for (const r of e)
                        if (r.metadata.queries) {
                            const e = n.Hi(r.metadata.name);
                            for (const n of r.metadata.queries) {
                                const r = (t.get(n) || Wo()).add(e);
                                t.set(n, r)
                            }
                        } return t
                }
                async complete() {
                    const e = await async function (e, t, n, r) {
                        const s = _r(e);
                        let i = Wo(),
                            o = Uo();
                        for (const e of n) {
                            const n = t.Hi(e.metadata.name);
                            e.document && (i = i.add(n));
                            const r = t.Ji(e);
                            r.setReadTime(t.Yi(e.metadata.readTime)), o = o.insert(n, r)
                        }
                        const a = s.Ki.newChangeBuffer({
                                trackRemovals: !0
                            }),
                            c = await _l(s, function (e) {
                                return Co(Io($r.fromString(`__bundle__/docs/${e}`)))
                            }(r));
                        return s.persistence.runTransaction("Apply bundle documents", "readwrite", (e => bl(e, a, o).next((t => (a.apply(e), t))).next((t => s.Ds.removeMatchingKeysForTargetId(e, c.targetId).next((() => s.Ds.addMatchingKeys(e, i, c.targetId))).next((() => s.localDocuments.getLocalViewOfDocuments(e, t.zi, t.ji))).next((() => t.zi))))))
                    }(this.localStore, new Gh(this.serializer), this.documents, this.Ou.id), t = this.Mu(this.documents);
                    for (const e of this.queries) await Al(this.localStore, e, t.get(e.name));
                    return this.progress.taskState = "Success", {
                        progress: this.progress,
                        Fu: this.collectionGroups,
                        Bu: e
                    }
                }
            }

            function Qh(e) {
                return {
                    taskState: "Running",
                    documentsLoaded: 0,
                    bytesLoaded: 0,
                    totalDocuments: e.totalDocuments,
                    totalBytes: e.totalBytes
                }
            }
            class Wh {
                constructor(e) {
                    this.key = e
                }
            }
            class Hh {
                constructor(e) {
                    this.key = e
                }
            }
            class Yh {
                constructor(e, t) {
                    this.query = e, this.Lu = t, this.qu = null, this.hasCachedResults = !1, this.current = !1, this.Uu = Wo(), this.mutatedKeys = Wo(), this.Ku = Mo(e), this.Gu = new Oh(this.Ku)
                }
                get Qu() {
                    return this.Lu
                }
                zu(e, t) {
                    const n = t ? t.ju : new Lh,
                        r = t ? t.Gu : this.Gu;
                    let s = t ? t.mutatedKeys : this.mutatedKeys,
                        i = r,
                        o = !1;
                    const a = "F" === this.query.limitType && r.size === this.query.limit ? r.last() : null,
                        c = "L" === this.query.limitType && r.size === this.query.limit ? r.first() : null;
                    if (e.inorderTraversal(((e, t) => {
                            const u = r.get(e),
                                l = Oo(this.query, t) ? t : null,
                                h = !!u && this.mutatedKeys.has(u.key),
                                d = !!l && (l.hasLocalMutations || this.mutatedKeys.has(l.key) && l.hasCommittedMutations);
                            let f = !1;
                            u && l ? u.data.isEqual(l.data) ? h !== d && (n.track({
                                type: 3,
                                doc: l
                            }), f = !0) : this.Wu(u, l) || (n.track({
                                type: 2,
                                doc: l
                            }), f = !0, (a && this.Ku(l, a) > 0 || c && this.Ku(l, c) < 0) && (o = !0)) : !u && l ? (n.track({
                                type: 0,
                                doc: l
                            }), f = !0) : u && !l && (n.track({
                                type: 1,
                                doc: u
                            }), f = !0, (a || c) && (o = !0)), f && (l ? (i = i.add(l), s = d ? s.add(e) : s.delete(e)) : (i = i.delete(e), s = s.delete(e)))
                        })), null !== this.query.limit)
                        for (; i.size > this.query.limit;) {
                            const e = "F" === this.query.limitType ? i.last() : i.first();
                            i = i.delete(e.key), s = s.delete(e.key), n.track({
                                type: 1,
                                doc: e
                            })
                        }
                    return {
                        Gu: i,
                        ju: n,
                        Mi: o,
                        mutatedKeys: s
                    }
                }
                Wu(e, t) {
                    return e.hasLocalMutations && t.hasCommittedMutations && !t.hasLocalMutations
                }
                applyChanges(e, t, n) {
                    const r = this.Gu;
                    this.Gu = e.Gu, this.mutatedKeys = e.mutatedKeys;
                    const s = e.ju.Tu();
                    s.sort(((e, t) => function (e, t) {
                        const n = e => {
                            switch (e) {
                                case 0:
                                    return 1;
                                case 2:
                                case 3:
                                    return 2;
                                case 1:
                                    return 0;
                                default:
                                    return br()
                            }
                        };
                        return n(e) - n(t)
                    }(e.type, t.type) || this.Ku(e.doc, t.doc))), this.Hu(n);
                    const i = t ? this.Ju() : [],
                        o = 0 === this.Uu.size && this.current ? 1 : 0,
                        a = o !== this.qu;
                    return this.qu = o, 0 !== s.length || a ? {
                        snapshot: new Mh(this.query, e.Gu, r, s, e.mutatedKeys, 0 === o, a, !1, !!n && n.resumeToken.approximateByteSize() > 0),
                        Yu: i
                    } : {
                        Yu: i
                    }
                }
                Ru(e) {
                    return this.current && "Offline" === e ? (this.current = !1, this.applyChanges({
                        Gu: this.Gu,
                        ju: new Lh,
                        mutatedKeys: this.mutatedKeys,
                        Mi: !1
                    }, !1)) : {
                        Yu: []
                    }
                }
                Zu(e) {
                    return !this.Lu.has(e) && !!this.Gu.has(e) && !this.Gu.get(e).hasLocalMutations
                }
                Hu(e) {
                    e && (e.addedDocuments.forEach((e => this.Lu = this.Lu.add(e))), e.modifiedDocuments.forEach((e => {})), e.removedDocuments.forEach((e => this.Lu = this.Lu.delete(e))), this.current = e.current)
                }
                Ju() {
                    if (!this.current) return [];
                    const e = this.Uu;
                    this.Uu = Wo(), this.Gu.forEach((e => {
                        this.Zu(e.key) && (this.Uu = this.Uu.add(e.key))
                    }));
                    const t = [];
                    return e.forEach((e => {
                        this.Uu.has(e) || t.push(new Hh(e))
                    })), this.Uu.forEach((n => {
                        e.has(n) || t.push(new Wh(n))
                    })), t
                }
                Xu(e) {
                    this.Lu = e.Wi, this.Uu = Wo();
                    const t = this.zu(e.documents);
                    return this.applyChanges(t, !0)
                }
                tc() {
                    return Mh.fromInitialDocuments(this.query, this.Gu, this.mutatedKeys, 0 === this.qu, this.hasCachedResults)
                }
            }
            class Xh {
                constructor(e, t, n) {
                    this.query = e, this.targetId = t, this.view = n
                }
            }
            class Jh {
                constructor(e) {
                    this.key = e, this.ec = !1
                }
            }
            class Zh {
                constructor(e, t, n, r, s, i) {
                    this.localStore = e, this.remoteStore = t, this.eventManager = n, this.sharedClientState = r, this.currentUser = s, this.maxConcurrentLimboResolutions = i, this.nc = {}, this.sc = new Fo((e => ko(e)), No), this.ic = new Map, this.rc = new Set, this.oc = new Js(Gr.comparator), this.uc = new Map, this.cc = new Ju, this.ac = {}, this.hc = new Map, this.lc = Au.bn(), this.onlineState = "Unknown", this.fc = void 0
                }
                get isPrimaryClient() {
                    return !0 === this.fc
                }
            }
            async function ed(e, t) {
                const n = Dd(e);
                let r, s;
                const i = n.sc.get(t);
                if (i) r = i.targetId, n.sharedClientState.addLocalQueryTarget(r), s = i.view.tc();
                else {
                    const e = await _l(n.localStore, Co(t));
                    n.isPrimaryClient && ih(n.remoteStore, e);
                    const i = n.sharedClientState.addLocalQueryTarget(e.targetId);
                    r = e.targetId, s = await td(n, t, r, "current" === i, e.resumeToken)
                }
                return s
            }
            async function td(e, t, n, r, s) {
                e.dc = (t, n, r) => async function (e, t, n, r) {
                    let s = t.view.zu(n);
                    s.Mi && (s = await Tl(e.localStore, t.query, !1).then((({
                        documents: e
                    }) => t.view.zu(e, s))));
                    const i = r && r.targetChanges.get(t.targetId),
                        o = t.view.applyChanges(s, e.isPrimaryClient, i);
                    return dd(e, t.targetId, o.Yu), o.snapshot
                }(e, t, n, r);
                const i = await Tl(e.localStore, t, !0),
                    o = new Yh(t, i.Wi),
                    a = o.zu(i.documents),
                    c = Ba.createSynthesizedTargetChangeForCurrentChange(n, r && "Offline" !== e.onlineState, s),
                    u = o.applyChanges(a, e.isPrimaryClient, c);
                dd(e, n, u.Yu);
                const l = new Xh(t, n, o);
                return e.sc.set(t, l), e.ic.has(n) ? e.ic.get(n).push(t) : e.ic.set(n, [t]), u.snapshot
            }
            async function nd(e, t) {
                const n = _r(e),
                    r = n.sc.get(t),
                    s = n.ic.get(r.targetId);
                if (s.length > 1) return n.ic.set(r.targetId, s.filter((e => !No(e, t)))), void n.sc.delete(t);
                n.isPrimaryClient ? (n.sharedClientState.removeLocalQueryTarget(r.targetId), n.sharedClientState.isActiveQueryTarget(r.targetId) || await El(n.localStore, r.targetId, !1).then((() => {
                    n.sharedClientState.clearQueryState(r.targetId), oh(n.remoteStore, r.targetId), ld(n, r.targetId)
                })).catch(rs)) : (ld(n, r.targetId), await El(n.localStore, r.targetId, !0))
            }
            async function rd(e, t) {
                const n = _r(e);
                try {
                    const e = await
                    function (e, t) {
                        const n = _r(e),
                            r = t.snapshotVersion;
                        let s = n.Li;
                        return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (e => {
                            const i = n.Ki.newChangeBuffer({
                                trackRemovals: !0
                            });
                            s = n.Li;
                            const o = [];
                            t.targetChanges.forEach(((i, a) => {
                                const c = s.get(a);
                                if (!c) return;
                                o.push(n.Ds.removeMatchingKeys(e, i.removedDocuments, a).next((() => n.Ds.addMatchingKeys(e, i.addedDocuments, a))));
                                let u = c.withSequenceNumber(e.currentSequenceNumber);
                                t.targetMismatches.has(a) ? u = u.withResumeToken(oi.EMPTY_BYTE_STRING, Br.min()).withLastLimboFreeSnapshotVersion(Br.min()) : i.resumeToken.approximateByteSize() > 0 && (u = u.withResumeToken(i.resumeToken, r)), s = s.insert(a, u),
                                    function (e, t, n) {
                                        return 0 === e.resumeToken.approximateByteSize() || t.snapshotVersion.toMicroseconds() - e.snapshotVersion.toMicroseconds() >= 3e8 || n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size > 0
                                    }(c, u, i) && o.push(n.Ds.updateTargetData(e, u))
                            }));
                            let a = Uo(),
                                c = Wo();
                            if (t.documentUpdates.forEach((r => {
                                    t.resolvedLimboDocuments.has(r) && o.push(n.persistence.referenceDelegate.updateLimboDocument(e, r))
                                })), o.push(bl(e, i, t.documentUpdates).next((e => {
                                    a = e.zi, c = e.ji
                                }))), !r.isEqual(Br.min())) {
                                const t = n.Ds.getLastRemoteSnapshotVersion(e).next((t => n.Ds.setTargetsMetadata(e, e.currentSequenceNumber, r)));
                                o.push(t)
                            }
                            return ss.waitFor(o).next((() => i.apply(e))).next((() => n.localDocuments.getLocalViewOfDocuments(e, a, c))).next((() => a))
                        })).then((e => (n.Li = s, e)))
                    }(n.localStore, t);
                    t.targetChanges.forEach(((e, t) => {
                        const r = n.uc.get(t);
                        r && (Ir(e.addedDocuments.size + e.modifiedDocuments.size + e.removedDocuments.size <= 1), e.addedDocuments.size > 0 ? r.ec = !0 : e.modifiedDocuments.size > 0 ? Ir(r.ec) : e.removedDocuments.size > 0 && (Ir(r.ec), r.ec = !1))
                    })), await md(n, e, t)
                } catch (e) {
                    await rs(e)
                }
            }

            function sd(e, t, n) {
                const r = _r(e);
                if (r.isPrimaryClient && 0 === n || !r.isPrimaryClient && 1 === n) {
                    const e = [];
                    r.sc.forEach(((n, r) => {
                            const s = r.view.Ru(t);
                            s.snapshot && e.push(s.snapshot)
                        })),
                        function (e, t) {
                            const n = _r(e);
                            n.onlineState = t;
                            let r = !1;
                            n.queries.forEach(((e, n) => {
                                for (const e of n.listeners) e.Ru(t) && (r = !0)
                            })), r && $h(n)
                        }(r.eventManager, t), e.length && r.nc.zo(e), r.onlineState = t, r.isPrimaryClient && r.sharedClientState.setOnlineState(t)
                }
            }
            async function id(e, t, n) {
                const r = _r(e);
                r.sharedClientState.updateQueryState(t, "rejected", n);
                const s = r.uc.get(t),
                    i = s && s.key;
                if (i) {
                    let e = new Js(Gr.comparator);
                    e = e.insert(i, Ui.newNoDocument(i, Br.min()));
                    const n = Wo().add(i),
                        s = new Ua(Br.min(), new Map, new ti(Pr), e, n);
                    await rd(r, s), r.oc = r.oc.remove(i), r.uc.delete(t), gd(r)
                } else await El(r.localStore, t, !1).then((() => ld(r, t, n))).catch(rs)
            }
            async function od(e, t) {
                const n = _r(e),
                    r = t.batch.batchId;
                try {
                    const e = await
                    function (e, t) {
                        const n = _r(e);
                        return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (e => {
                            const r = t.batch.keys(),
                                s = n.Ki.newChangeBuffer({
                                    trackRemovals: !0
                                });
                            return function (e, t, n, r) {
                                const s = n.batch,
                                    i = s.keys();
                                let o = ss.resolve();
                                return i.forEach((e => {
                                    o = o.next((() => r.getEntry(t, e))).next((t => {
                                        const i = n.docVersions.get(e);
                                        Ir(null !== i), t.version.compareTo(i) < 0 && (s.applyToRemoteDocument(t, n), t.isValidDocument() && (t.setReadTime(n.commitVersion), r.addEntry(t)))
                                    }))
                                })), o.next((() => e.mutationQueue.removeMutationBatch(t, s)))
                            }(n, e, t, s).next((() => s.apply(e))).next((() => n.mutationQueue.performConsistencyCheck(e))).next((() => n.documentOverlayCache.removeOverlaysForBatchId(e, r, t.batch.batchId))).next((() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e, function (e) {
                                let t = Wo();
                                for (let n = 0; n < e.mutationResults.length; ++n) e.mutationResults[n].transformResults.length > 0 && (t = t.add(e.batch.mutations[n].key));
                                return t
                            }(t)))).next((() => n.localDocuments.getDocuments(e, r)))
                        }))
                    }(n.localStore, t);
                    ud(n, r, null), cd(n, r), n.sharedClientState.updateMutationState(r, "acknowledged"), await md(n, e)
                } catch (e) {
                    await rs(e)
                }
            }
            async function ad(e, t, n) {
                const r = _r(e);
                try {
                    const e = await
                    function (e, t) {
                        const n = _r(e);
                        return n.persistence.runTransaction("Reject batch", "readwrite-primary", (e => {
                            let r;
                            return n.mutationQueue.lookupMutationBatch(e, t).next((t => (Ir(null !== t), r = t.keys(), n.mutationQueue.removeMutationBatch(e, t)))).next((() => n.mutationQueue.performConsistencyCheck(e))).next((() => n.documentOverlayCache.removeOverlaysForBatchId(e, r, t))).next((() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e, r))).next((() => n.localDocuments.getDocuments(e, r)))
                        }))
                    }(r.localStore, t);
                    ud(r, t, n), cd(r, t), r.sharedClientState.updateMutationState(t, "rejected", n), await md(r, e)
                } catch (n) {
                    await rs(n)
                }
            }

            function cd(e, t) {
                (e.hc.get(t) || []).forEach((e => {
                    e.resolve()
                })), e.hc.delete(t)
            }

            function ud(e, t, n) {
                const r = _r(e);
                let s = r.ac[r.currentUser.toKey()];
                if (s) {
                    const e = s.get(t);
                    e && (n ? e.reject(n) : e.resolve(), s = s.remove(t)), r.ac[r.currentUser.toKey()] = s
                }
            }

            function ld(e, t, n = null) {
                e.sharedClientState.removeLocalQueryTarget(t);
                for (const r of e.ic.get(t)) e.sc.delete(r), n && e.nc.wc(r, n);
                e.ic.delete(t), e.isPrimaryClient && e.cc.hs(t).forEach((t => {
                    e.cc.containsKey(t) || hd(e, t)
                }))
            }

            function hd(e, t) {
                e.rc.delete(t.path.canonicalString());
                const n = e.oc.get(t);
                null !== n && (oh(e.remoteStore, n), e.oc = e.oc.remove(t), e.uc.delete(n), gd(e))
            }

            function dd(e, t, n) {
                for (const r of n) r instanceof Wh ? (e.cc.addReference(r.key, t), fd(e, r)) : r instanceof Hh ? (pr("SyncEngine", "Document no longer in limbo: " + r.key), e.cc.removeReference(r.key, t), e.cc.containsKey(r.key) || hd(e, r.key)) : br()
            }

            function fd(e, t) {
                const n = t.key,
                    r = n.path.canonicalString();
                e.oc.get(n) || e.rc.has(r) || (pr("SyncEngine", "New document in limbo: " + n), e.rc.add(r), gd(e))
            }

            function gd(e) {
                for (; e.rc.size > 0 && e.oc.size < e.maxConcurrentLimboResolutions;) {
                    const t = e.rc.values().next().value;
                    e.rc.delete(t);
                    const n = new Gr($r.fromString(t)),
                        r = e.lc.next();
                    e.uc.set(r, new Jh(n)), e.oc = e.oc.insert(n, r), ih(e.remoteStore, new Dc(Co(Io(n.path)), r, 2, ps.ct))
                }
            }
            async function md(e, t, n) {
                const r = _r(e),
                    s = [],
                    i = [],
                    o = [];
                r.sc.isEmpty() || (r.sc.forEach(((e, a) => {
                    o.push(r.dc(a, t, n).then((e => {
                        if ((e || n) && r.isPrimaryClient && r.sharedClientState.updateQueryState(a.targetId, (null == e ? void 0 : e.fromCache) ? "not-current" : "current"), e) {
                            s.push(e);
                            const t = gl.Di(a.targetId, e);
                            i.push(t)
                        }
                    })))
                })), await Promise.all(o), r.nc.zo(s), await async function (e, t) {
                    const n = _r(e);
                    try {
                        await n.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (e => ss.forEach(t, (t => ss.forEach(t.Vi, (r => n.persistence.referenceDelegate.addReference(e, t.targetId, r))).next((() => ss.forEach(t.Si, (r => n.persistence.referenceDelegate.removeReference(e, t.targetId, r)))))))))
                    } catch (e) {
                        if (!us(e)) throw e;
                        pr("LocalStore", "Failed to update sequence numbers: " + e)
                    }
                    for (const e of t) {
                        const t = e.targetId;
                        if (!e.fromCache) {
                            const e = n.Li.get(t),
                                r = e.snapshotVersion,
                                s = e.withLastLimboFreeSnapshotVersion(r);
                            n.Li = n.Li.insert(t, s)
                        }
                    }
                }(r.localStore, i))
            }
            async function pd(e, t) {
                const n = _r(e);
                if (!n.currentUser.isEqual(t)) {
                    pr("SyncEngine", "User change. New user:", t.toKey());
                    const e = await wl(n.localStore, t);
                    n.currentUser = t,
                        function (e, t) {
                            e.hc.forEach((e => {
                                e.forEach((e => {
                                    e.reject(new Tr(Er.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."))
                                }))
                            })), e.hc.clear()
                        }(n), n.sharedClientState.handleUserChange(t, e.removedBatchIds, e.addedBatchIds), await md(n, e.Qi)
                }
            }

            function yd(e, t) {
                const n = _r(e),
                    r = n.uc.get(t);
                if (r && r.ec) return Wo().add(r.key); {
                    let e = Wo();
                    const r = n.ic.get(t);
                    if (!r) return e;
                    for (const t of r) {
                        const r = n.sc.get(t);
                        e = e.unionWith(r.view.Qu)
                    }
                    return e
                }
            }
            async function wd(e, t) {
                const n = _r(e),
                    r = await Tl(n.localStore, t.query, !0),
                    s = t.view.Xu(r);
                return n.isPrimaryClient && dd(n, t.targetId, s.Yu), s
            }
            async function vd(e, t) {
                const n = _r(e);
                return Dl(n.localStore, t).then((e => md(n, e)))
            }
            async function bd(e, t, n, r) {
                const s = _r(e),
                    i = await
                function (e, t) {
                    const n = _r(e),
                        r = _r(n.mutationQueue);
                    return n.persistence.runTransaction("Lookup mutation documents", "readonly", (e => r.In(e, t).next((t => t ? n.localDocuments.getDocuments(e, t) : ss.resolve(null)))))
                }(s.localStore, t);
                null !== i ? ("pending" === n ? await wh(s.remoteStore) : "acknowledged" === n || "rejected" === n ? (ud(s, t, r || null), cd(s, t), function (e, t) {
                    _r(_r(e).mutationQueue).En(t)
                }(s.localStore, t)) : br(), await md(s, i)) : pr("SyncEngine", "Cannot apply mutation batch with id: " + t)
            }
            async function Id(e, t, n) {
                const r = _r(e),
                    s = [],
                    i = [];
                for (const e of t) {
                    let t;
                    const n = r.ic.get(e);
                    if (n && 0 !== n.length) {
                        t = await _l(r.localStore, Co(n[0]));
                        for (const e of n) {
                            const t = r.sc.get(e),
                                n = await wd(r, t);
                            n.snapshot && i.push(n.snapshot)
                        }
                    } else {
                        const n = await Sl(r.localStore, e);
                        t = await _l(r.localStore, n), await td(r, _d(n), e, !1, t.resumeToken)
                    }
                    s.push(t)
                }
                return r.nc.zo(i), s
            }

            function _d(e) {
                return bo(e.path, e.collectionGroup, e.orderBy, e.filters, e.limit, "F", e.startAt, e.endAt)
            }

            function Ed(e) {
                const t = _r(e);
                return _r(_r(t.localStore).persistence).bi()
            }
            async function Td(e, t, n, r) {
                const s = _r(e);
                if (s.fc) return void pr("SyncEngine", "Ignoring unexpected query state notification.");
                const i = s.ic.get(t);
                if (i && i.length > 0) switch (n) {
                    case "current":
                    case "not-current": {
                        const e = await Dl(s.localStore, Lo(i[0])),
                            r = Ua.createSynthesizedRemoteEventForCurrentChange(t, "current" === n, oi.EMPTY_BYTE_STRING);
                        await md(s, e, r);
                        break
                    }
                    case "rejected":
                        await El(s.localStore, t, !0), ld(s, t, r);
                        break;
                    default:
                        br()
                }
            }
            async function Sd(e, t, n) {
                const r = Dd(e);
                if (r.fc) {
                    for (const e of t) {
                        if (r.ic.has(e)) {
                            pr("SyncEngine", "Adding an already active target " + e);
                            continue
                        }
                        const t = await Sl(r.localStore, e),
                            n = await _l(r.localStore, t);
                        await td(r, _d(t), n.targetId, !1, n.resumeToken), ih(r.remoteStore, n)
                    }
                    for (const e of n) r.ic.has(e) && await El(r.localStore, e, !1).then((() => {
                        oh(r.remoteStore, e), ld(r, e)
                    })).catch(rs)
                }
            }

            function Dd(e) {
                const t = _r(e);
                return t.remoteStore.remoteSyncer.applyRemoteEvent = rd.bind(null, t), t.remoteStore.remoteSyncer.getRemoteKeysForTarget = yd.bind(null, t), t.remoteStore.remoteSyncer.rejectListen = id.bind(null, t), t.nc.zo = Bh.bind(null, t.eventManager), t.nc.wc = qh.bind(null, t.eventManager), t
            }

            function Cd(e) {
                const t = _r(e);
                return t.remoteStore.remoteSyncer.applySuccessfulWrite = od.bind(null, t), t.remoteStore.remoteSyncer.rejectFailedWrite = ad.bind(null, t), t
            }
            class Ad {
                constructor() {
                    this.synchronizeTabs = !1
                }
                async initialize(e) {
                    this.serializer = Hl(e.databaseInfo.databaseId), this.sharedClientState = this.createSharedClientState(e), this.persistence = this.createPersistence(e), await this.persistence.start(), this.localStore = this.createLocalStore(e), this.gcScheduler = this.createGarbageCollectionScheduler(e, this.localStore), this.indexBackfillerScheduler = this.createIndexBackfillerScheduler(e, this.localStore)
                }
                createGarbageCollectionScheduler(e, t) {
                    return null
                }
                createIndexBackfillerScheduler(e, t) {
                    return null
                }
                createLocalStore(e) {
                    return yl(this.persistence, new ml, e.initialUser, this.serializer)
                }
                createPersistence(e) {
                    return new sl(ol.Fs, this.serializer)
                }
                createSharedClientState(e) {
                    return new Vl
                }
                async terminate() {
                    this.gcScheduler && this.gcScheduler.stop(), await this.sharedClientState.shutdown(), await this.persistence.shutdown()
                }
            }
            class xd extends Ad {
                constructor(e, t, n) {
                    super(), this.mc = e, this.cacheSizeBytes = t, this.forceOwnership = n, this.synchronizeTabs = !1
                }
                async initialize(e) {
                    await super.initialize(e), await this.mc.initialize(this, e), await Cd(this.mc.syncEngine), await wh(this.mc.remoteStore), await this.persistence.hi((() => (this.gcScheduler && !this.gcScheduler.started && this.gcScheduler.start(), this.indexBackfillerScheduler && !this.indexBackfillerScheduler.started && this.indexBackfillerScheduler.start(), Promise.resolve())))
                }
                createLocalStore(e) {
                    return yl(this.persistence, new ml, e.initialUser, this.serializer)
                }
                createGarbageCollectionScheduler(e, t) {
                    const n = this.persistence.referenceDelegate.garbageCollector;
                    return new Mu(n, e.asyncQueue, t)
                }
                createIndexBackfillerScheduler(e, t) {
                    const n = new ms(t, this.persistence);
                    return new gs(e.asyncQueue, n)
                }
                createPersistence(e) {
                    const t = fl(e.databaseInfo.databaseId, e.databaseInfo.persistenceKey),
                        n = void 0 !== this.cacheSizeBytes ? bu.withCacheSize(this.cacheSizeBytes) : bu.DEFAULT;
                    return new ll(this.synchronizeTabs, t, e.clientId, n, e.asyncQueue, Ql(), Wl(), this.serializer, this.sharedClientState, !!this.forceOwnership)
                }
                createSharedClientState(e) {
                    return new Vl
                }
            }
            class Nd extends xd {
                constructor(e, t) {
                    super(e, t, !1), this.mc = e, this.cacheSizeBytes = t, this.synchronizeTabs = !0
                }
                async initialize(e) {
                    await super.initialize(e);
                    const t = this.mc.syncEngine;
                    this.sharedClientState instanceof Fl && (this.sharedClientState.syncEngine = {
                        $r: bd.bind(null, t),
                        Mr: Td.bind(null, t),
                        Fr: Sd.bind(null, t),
                        bi: Ed.bind(null, t),
                        Or: vd.bind(null, t)
                    }, await this.sharedClientState.start()), await this.persistence.hi((async e => {
                        await async function (e, t) {
                            const n = _r(e);
                            if (Dd(n), Cd(n), !0 === t && !0 !== n.fc) {
                                const e = n.sharedClientState.getAllActiveQueryTargets(),
                                    t = await Id(n, e.toArray());
                                n.fc = !0, await Ah(n.remoteStore, !0);
                                for (const e of t) ih(n.remoteStore, e)
                            } else if (!1 === t && !1 !== n.fc) {
                                const e = [];
                                let t = Promise.resolve();
                                n.ic.forEach(((r, s) => {
                                        n.sharedClientState.isLocalQueryTarget(s) ? e.push(s) : t = t.then((() => (ld(n, s), El(n.localStore, s, !0)))), oh(n.remoteStore, s)
                                    })), await t, await Id(n, e),
                                    function (e) {
                                        const t = _r(e);
                                        t.uc.forEach(((e, n) => {
                                            oh(t.remoteStore, n)
                                        })), t.cc.ls(), t.uc = new Map, t.oc = new Js(Gr.comparator)
                                    }(n), n.fc = !1, await Ah(n.remoteStore, !1)
                            }
                        }(this.mc.syncEngine, e), this.gcScheduler && (e && !this.gcScheduler.started ? this.gcScheduler.start() : e || this.gcScheduler.stop()), this.indexBackfillerScheduler && (e && !this.indexBackfillerScheduler.started ? this.indexBackfillerScheduler.start() : e || this.indexBackfillerScheduler.stop())
                    }))
                }
                createSharedClientState(e) {
                    const t = Ql();
                    if (!Fl.D(t)) throw new Tr(Er.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
                    const n = fl(e.databaseInfo.databaseId, e.databaseInfo.persistenceKey);
                    return new Fl(t, e.asyncQueue, n, e.clientId, e.initialUser)
                }
            }
            class kd {
                async initialize(e, t) {
                    this.localStore || (this.localStore = e.localStore, this.sharedClientState = e.sharedClientState, this.datastore = this.createDatastore(t), this.remoteStore = this.createRemoteStore(t), this.eventManager = this.createEventManager(t), this.syncEngine = this.createSyncEngine(t, !e.synchronizeTabs), this.sharedClientState.onlineStateHandler = e => sd(this.syncEngine, e, 1), this.remoteStore.remoteSyncer.handleCredentialChange = pd.bind(null, this.syncEngine), await Ah(this.remoteStore, this.syncEngine.isPrimaryClient))
                }
                createEventManager(e) {
                    return new Fh
                }
                createDatastore(e) {
                    const t = Hl(e.databaseInfo.databaseId),
                        n = (r = e.databaseInfo, new Kl(r));
                    var r;
                    return function (e, t, n, r) {
                        return new eh(e, t, n, r)
                    }(e.authCredentials, e.appCheckCredentials, n, t)
                }
                createRemoteStore(e) {
                    return t = this.localStore, n = this.datastore, r = e.asyncQueue, s = e => sd(this.syncEngine, e, 0), i = Bl.D() ? new Bl : new Ul, new nh(t, n, r, s, i);
                    var t, n, r, s, i
                }
                createSyncEngine(e, t) {
                    return function (e, t, n, r, s, i, o) {
                        const a = new Zh(e, t, n, r, s, i);
                        return o && (a.fc = !0), a
                    }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, e.initialUser, e.maxConcurrentLimboResolutions, t)
                }
                terminate() {
                    return async function (e) {
                        const t = _r(e);
                        pr("RemoteStore", "RemoteStore shutting down."), t.du.add(5), await sh(t), t._u.shutdown(), t.mu.set("Unknown")
                    }(this.remoteStore)
                }
            }

            function Rd(e, t = 10240) {
                let n = 0;
                return {
                    async read() {
                        if (n < e.byteLength) {
                            const r = {
                                value: e.slice(n, n + t),
                                done: !1
                            };
                            return n += t, r
                        }
                        return {
                            done: !0
                        }
                    },
                    async cancel() {},
                    releaseLock() {},
                    closed: Promise.resolve()
                }
            }
            class Od {
                constructor(e) {
                    this.observer = e, this.muted = !1
                }
                next(e) {
                    this.observer.next && this.gc(this.observer.next, e)
                }
                error(e) {
                    this.observer.error ? this.gc(this.observer.error, e) : yr("Uncaught Error in snapshot listener:", e.toString())
                }
                yc() {
                    this.muted = !0
                }
                gc(e, t) {
                    this.muted || setTimeout((() => {
                        this.muted || e(t)
                    }), 0)
                }
            }
            class Ld {
                constructor(e, t) {
                    this.Ic = e, this.serializer = t, this.metadata = new Sr, this.buffer = new Uint8Array, this.Tc = new TextDecoder("utf-8"), this.Ec().then((e => {
                        e && e.ku() ? this.metadata.resolve(e.Nu.metadata) : this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.Nu)}`))
                    }), (e => this.metadata.reject(e)))
                }
                close() {
                    return this.Ic.cancel()
                }
                async getMetadata() {
                    return this.metadata.promise
                }
                async _c() {
                    return await this.getMetadata(), this.Ec()
                }
                async Ec() {
                    const e = await this.Ac();
                    if (null === e) return null;
                    const t = this.Tc.decode(e),
                        n = Number(t);
                    isNaN(n) && this.Rc(`length string (${t}) is not valid number`);
                    const r = await this.vc(n);
                    return new jh(JSON.parse(r), e.length + n)
                }
                bc() {
                    return this.buffer.findIndex((e => e === "{".charCodeAt(0)))
                }
                async Ac() {
                    for (; this.bc() < 0 && !await this.Pc(););
                    if (0 === this.buffer.length) return null;
                    const e = this.bc();
                    e < 0 && this.Rc("Reached the end of bundle when a length string is expected.");
                    const t = this.buffer.slice(0, e);
                    return this.buffer = this.buffer.slice(e), t
                }
                async vc(e) {
                    for (; this.buffer.length < e;) await this.Pc() && this.Rc("Reached the end of bundle when more is expected.");
                    const t = this.Tc.decode(this.buffer.slice(0, e));
                    return this.buffer = this.buffer.slice(e), t
                }
                Rc(e) {
                    throw this.Ic.cancel(), new Error(`Invalid bundle format: ${e}`)
                }
                async Pc() {
                    const e = await this.Ic.read();
                    if (!e.done) {
                        const t = new Uint8Array(this.buffer.length + e.value.length);
                        t.set(this.buffer), t.set(e.value, this.buffer.length), this.buffer = t
                    }
                    return e.done
                }
            }
            class Md {
                constructor(e) {
                    this.datastore = e, this.readVersions = new Map, this.mutations = [], this.committed = !1, this.lastWriteError = null, this.writtenDocs = new Set
                }
                async lookup(e) {
                    if (this.ensureCommitNotCalled(), this.mutations.length > 0) throw new Tr(Er.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                    const t = await async function (e, t) {
                        const n = _r(e),
                            r = cc(n.serializer) + "/documents",
                            s = {
                                documents: t.map((e => sc(n.serializer, e)))
                            },
                            i = await n.fo("BatchGetDocuments", r, s, t.length),
                            o = new Map;
                        i.forEach((e => {
                            const t = function (e, t) {
                                return "found" in t ? function (e, t) {
                                    Ir(!!t.found), t.found.name, t.found.updateTime;
                                    const n = ic(e, t.found.name),
                                        r = tc(t.found.updateTime),
                                        s = t.found.createTime ? tc(t.found.createTime) : Br.min(),
                                        i = new Fi({
                                            mapValue: {
                                                fields: t.found.fields
                                            }
                                        });
                                    return Ui.newFoundDocument(n, r, s, i)
                                }(e, t) : "missing" in t ? function (e, t) {
                                    Ir(!!t.missing), Ir(!!t.readTime);
                                    const n = ic(e, t.missing),
                                        r = tc(t.readTime);
                                    return Ui.newNoDocument(n, r)
                                }(e, t) : br()
                            }(n.serializer, e);
                            o.set(t.key.toString(), t)
                        }));
                        const a = [];
                        return t.forEach((e => {
                            const t = o.get(e.toString());
                            Ir(!!t), a.push(t)
                        })), a
                    }(this.datastore, e);
                    return t.forEach((e => this.recordVersion(e))), t
                }
                set(e, t) {
                    this.write(t.toMutation(e, this.precondition(e))), this.writtenDocs.add(e.toString())
                }
                update(e, t) {
                    try {
                        this.write(t.toMutation(e, this.preconditionForUpdate(e)))
                    } catch (e) {
                        this.lastWriteError = e
                    }
                    this.writtenDocs.add(e.toString())
                }
                delete(e) {
                    this.write(new Ca(e, this.precondition(e))), this.writtenDocs.add(e.toString())
                }
                async commit() {
                    if (this.ensureCommitNotCalled(), this.lastWriteError) throw this.lastWriteError;
                    const e = this.readVersions;
                    this.mutations.forEach((t => {
                        e.delete(t.key.toString())
                    })), e.forEach(((e, t) => {
                        const n = Gr.fromPath(t);
                        this.mutations.push(new Aa(n, this.precondition(n)))
                    })), await async function (e, t) {
                        const n = _r(e),
                            r = cc(n.serializer) + "/documents",
                            s = {
                                writes: t.map((e => dc(n.serializer, e)))
                            };
                        await n.co("Commit", r, s)
                    }(this.datastore, this.mutations), this.committed = !0
                }
                recordVersion(e) {
                    let t;
                    if (e.isFoundDocument()) t = e.version;
                    else {
                        if (!e.isNoDocument()) throw br();
                        t = Br.min()
                    }
                    const n = this.readVersions.get(e.key.toString());
                    if (n) {
                        if (!t.isEqual(n)) throw new Tr(Er.ABORTED, "Document version changed between two reads.")
                    } else this.readVersions.set(e.key.toString(), t)
                }
                precondition(e) {
                    const t = this.readVersions.get(e.toString());
                    return !this.writtenDocs.has(e.toString()) && t ? t.isEqual(Br.min()) ? ga.exists(!1) : ga.updateTime(t) : ga.none()
                }
                preconditionForUpdate(e) {
                    const t = this.readVersions.get(e.toString());
                    if (!this.writtenDocs.has(e.toString()) && t) {
                        if (t.isEqual(Br.min())) throw new Tr(Er.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
                        return ga.updateTime(t)
                    }
                    return ga.exists(!0)
                }
                write(e) {
                    this.ensureCommitNotCalled(), this.mutations.push(e)
                }
                ensureCommitNotCalled() {}
            }
            class Pd {
                constructor(e, t, n, r, s) {
                    this.asyncQueue = e, this.datastore = t, this.options = n, this.updateFunction = r, this.deferred = s, this.Vc = n.maxAttempts, this.Co = new Yl(this.asyncQueue, "transaction_retry")
                }
                run() {
                    this.Vc -= 1, this.Sc()
                }
                Sc() {
                    this.Co.Ao((async () => {
                        const e = new Md(this.datastore),
                            t = this.Dc(e);
                        t && t.then((t => {
                            this.asyncQueue.enqueueAndForget((() => e.commit().then((() => {
                                this.deferred.resolve(t)
                            })).catch((e => {
                                this.Cc(e)
                            }))))
                        })).catch((e => {
                            this.Cc(e)
                        }))
                    }))
                }
                Dc(e) {
                    try {
                        const t = this.updateFunction(e);
                        return !ys(t) && t.catch && t.then ? t : (this.deferred.reject(Error("Transaction callback must return a Promise")), null)
                    } catch (e) {
                        return this.deferred.reject(e), null
                    }
                }
                Cc(e) {
                    this.Vc > 0 && this.xc(e) ? (this.Vc -= 1, this.asyncQueue.enqueueAndForget((() => (this.Sc(), Promise.resolve())))) : this.deferred.reject(e)
                }
                xc(e) {
                    if ("FirebaseError" === e.name) {
                        const t = e.code;
                        return "aborted" === t || "failed-precondition" === t || "already-exists" === t || !Ma(t)
                    }
                    return !1
                }
            }
            class Fd {
                constructor(e, t, n, r) {
                    this.authCredentials = e, this.appCheckCredentials = t, this.asyncQueue = n, this.databaseInfo = r, this.user = dr.UNAUTHENTICATED, this.clientId = Mr.A(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this.authCredentials.start(n, (async e => {
                        pr("FirestoreClient", "Received user=", e.uid), await this.authCredentialListener(e), this.user = e
                    })), this.appCheckCredentials.start(n, (e => (pr("FirestoreClient", "Received new app check token=", e), this.appCheckCredentialListener(e, this.user))))
                }
                async getConfiguration() {
                    return {
                        asyncQueue: this.asyncQueue,
                        databaseInfo: this.databaseInfo,
                        clientId: this.clientId,
                        authCredentials: this.authCredentials,
                        appCheckCredentials: this.appCheckCredentials,
                        initialUser: this.user,
                        maxConcurrentLimboResolutions: 100
                    }
                }
                setCredentialChangeListener(e) {
                    this.authCredentialListener = e
                }
                setAppCheckTokenChangeListener(e) {
                    this.appCheckCredentialListener = e
                }
                verifyNotTerminated() {
                    if (this.asyncQueue.isShuttingDown) throw new Tr(Er.FAILED_PRECONDITION, "The client has already been terminated.")
                }
                terminate() {
                    this.asyncQueue.enterRestrictedMode();
                    const e = new Sr;
                    return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async () => {
                        try {
                            this._onlineComponents && await this._onlineComponents.terminate(), this._offlineComponents && await this._offlineComponents.terminate(), this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), e.resolve()
                        } catch (t) {
                            const n = Rh(t, "Failed to shutdown persistence");
                            e.reject(n)
                        }
                    })), e.promise
                }
            }
            async function Vd(e, t) {
                e.asyncQueue.verifyOperationInProgress(), pr("FirestoreClient", "Initializing OfflineComponentProvider");
                const n = await e.getConfiguration();
                await t.initialize(n);
                let r = n.initialUser;
                e.setCredentialChangeListener((async e => {
                    r.isEqual(e) || (await wl(t.localStore, e), r = e)
                })), t.persistence.setDatabaseDeletedListener((() => e.terminate())), e._offlineComponents = t
            }
            async function Ud(e, t) {
                e.asyncQueue.verifyOperationInProgress();
                const n = await qd(e);
                pr("FirestoreClient", "Initializing OnlineComponentProvider");
                const r = await e.getConfiguration();
                await t.initialize(n, r), e.setCredentialChangeListener((e => Ch(t.remoteStore, e))), e.setAppCheckTokenChangeListener(((e, n) => Ch(t.remoteStore, n))), e._onlineComponents = t
            }

            function Bd(e) {
                return "FirebaseError" === e.name ? e.code === Er.FAILED_PRECONDITION || e.code === Er.UNIMPLEMENTED : !("undefined" != typeof DOMException && e instanceof DOMException) || 22 === e.code || 20 === e.code || 11 === e.code
            }
            async function qd(e) {
                if (!e._offlineComponents)
                    if (e._uninitializedComponentsProvider) {
                        pr("FirestoreClient", "Using user provided OfflineComponentProvider");
                        try {
                            await Vd(e, e._uninitializedComponentsProvider._offline)
                        } catch (t) {
                            const n = t;
                            if (!Bd(n)) throw n;
                            wr("Error using user provided cache. Falling back to memory cache: " + n), await Vd(e, new Ad)
                        }
                    } else pr("FirestoreClient", "Using default OfflineComponentProvider"), await Vd(e, new Ad);
                return e._offlineComponents
            }
            async function $d(e) {
                return e._onlineComponents || (e._uninitializedComponentsProvider ? (pr("FirestoreClient", "Using user provided OnlineComponentProvider"), await Ud(e, e._uninitializedComponentsProvider._online)) : (pr("FirestoreClient", "Using default OnlineComponentProvider"), await Ud(e, new kd))), e._onlineComponents
            }

            function zd(e) {
                return qd(e).then((e => e.persistence))
            }

            function jd(e) {
                return qd(e).then((e => e.localStore))
            }

            function Gd(e) {
                return $d(e).then((e => e.remoteStore))
            }

            function Kd(e) {
                return $d(e).then((e => e.syncEngine))
            }

            function Qd(e) {
                return $d(e).then((e => e.datastore))
            }
            async function Wd(e) {
                const t = await $d(e),
                    n = t.eventManager;
                return n.onListen = ed.bind(null, t.syncEngine), n.onUnlisten = nd.bind(null, t.syncEngine), n
            }

            function Hd(e, t, n = {}) {
                const r = new Sr;
                return e.asyncQueue.enqueueAndForget((async () => function (e, t, n, r, s) {
                    const i = new Od({
                            next: i => {
                                t.enqueueAndForget((() => Uh(e, o)));
                                const a = i.docs.has(n);
                                !a && i.fromCache ? s.reject(new Tr(Er.UNAVAILABLE, "Failed to get document because the client is offline.")) : a && i.fromCache && r && "server" === r.source ? s.reject(new Tr(Er.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : s.resolve(i)
                            },
                            error: e => s.reject(e)
                        }),
                        o = new zh(Io(n.path), i, {
                            includeMetadataChanges: !0,
                            xu: !0
                        });
                    return Vh(e, o)
                }(await Wd(e), e.asyncQueue, t, n, r))), r.promise
            }

            function Yd(e, t, n = {}) {
                const r = new Sr;
                return e.asyncQueue.enqueueAndForget((async () => function (e, t, n, r, s) {
                    const i = new Od({
                            next: n => {
                                t.enqueueAndForget((() => Uh(e, o))), n.fromCache && "server" === r.source ? s.reject(new Tr(Er.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : s.resolve(n)
                            },
                            error: e => s.reject(e)
                        }),
                        o = new zh(n, i, {
                            includeMetadataChanges: !0,
                            xu: !0
                        });
                    return Vh(e, o)
                }(await Wd(e), e.asyncQueue, t, n, r))), r.promise
            }

            function Xd(e, t, n, r) {
                const s = function (e, t) {
                    let n;
                    return n = "string" == typeof e ? (new TextEncoder).encode(e) : e,
                        function (e, t) {
                            return new Ld(e, t)
                        }(function (e, t) {
                            if (e instanceof Uint8Array) return Rd(e, t);
                            if (e instanceof ArrayBuffer) return Rd(new Uint8Array(e), t);
                            if (e instanceof ReadableStream) return e.getReader();
                            throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")
                        }(n), t)
                }(n, Hl(t));
                e.asyncQueue.enqueueAndForget((async () => {
                    ! function (e, t, n) {
                        const r = _r(e);
                        (async function (e, t, n) {
                            try {
                                const r = await t.getMetadata();
                                if (await
                                    function (e, t) {
                                        const n = _r(e),
                                            r = tc(t.createTime);
                                        return n.persistence.runTransaction("hasNewerBundle", "readonly", (e => n.xs.getBundleMetadata(e, t.id))).then((e => !!e && e.createTime.compareTo(r) >= 0))
                                    }(e.localStore, r)) return await t.close(), n._completeWith(function (e) {
                                    return {
                                        taskState: "Success",
                                        documentsLoaded: e.totalDocuments,
                                        bytesLoaded: e.totalBytes,
                                        totalDocuments: e.totalDocuments,
                                        totalBytes: e.totalBytes
                                    }
                                }(r)), Promise.resolve(new Set);
                                n._updateProgress(Qh(r));
                                const s = new Kh(r, e.localStore, t.serializer);
                                let i = await t._c();
                                for (; i;) {
                                    const e = await s.$u(i);
                                    e && n._updateProgress(e), i = await t._c()
                                }
                                const o = await s.complete();
                                return await md(e, o.Bu, void 0), await
                                function (e, t) {
                                    const n = _r(e);
                                    return n.persistence.runTransaction("Save bundle", "readwrite", (e => n.xs.saveBundleMetadata(e, t)))
                                }(e.localStore, r), n._completeWith(o.progress), Promise.resolve(o.Fu)
                            } catch (e) {
                                return wr("SyncEngine", `Loading bundle failed with ${e}`), n._failWith(e), Promise.resolve(new Set)
                            }
                        })(r, t, n).then((e => {
                            r.sharedClientState.notifyBundleLoaded(e)
                        }))
                    }(await Kd(e), s, r)
                }))
            }
            const Jd = new Map;

            function Zd(e, t, n) {
                if (!n) throw new Tr(Er.INVALID_ARGUMENT, `Function ${e}() cannot be called with an empty ${t}.`)
            }

            function ef(e, t, n, r) {
                if (!0 === t && !0 === r) throw new Tr(Er.INVALID_ARGUMENT, `${e} and ${n} cannot be used together.`)
            }

            function tf(e) {
                if (!Gr.isDocumentKey(e)) throw new Tr(Er.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)
            }

            function nf(e) {
                if (Gr.isDocumentKey(e)) throw new Tr(Er.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)
            }

            function rf(e) {
                if (void 0 === e) return "undefined";
                if (null === e) return "null";
                if ("string" == typeof e) return e.length > 20 && (e = `${e.substring(0,20)}...`), JSON.stringify(e);
                if ("number" == typeof e || "boolean" == typeof e) return "" + e;
                if ("object" == typeof e) {
                    if (e instanceof Array) return "an array"; {
                        const t = function (e) {
                            return e.constructor ? e.constructor.name : null
                        }(e);
                        return t ? `a custom ${t} object` : "an object"
                    }
                }
                return "function" == typeof e ? "a function" : br()
            }

            function sf(e, t) {
                if ("_delegate" in e && (e = e._delegate), !(e instanceof t)) {
                    if (t.name === e.constructor.name) throw new Tr(Er.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"); {
                        const n = rf(e);
                        throw new Tr(Er.INVALID_ARGUMENT, `Expected type '${t.name}', but it was: ${n}`)
                    }
                }
                return e
            }

            function of (e, t) {
                if (t <= 0) throw new Tr(Er.INVALID_ARGUMENT, `Function ${e}() requires a positive number, but it was: ${t}.`)
            }
            class af {
                constructor(e) {
                    var t;
                    if (void 0 === e.host) {
                        if (void 0 !== e.ssl) throw new Tr(Er.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
                        this.host = "firestore.googleapis.com", this.ssl = !0
                    } else this.host = e.host, this.ssl = null === (t = e.ssl) || void 0 === t || t;
                    if (this.credentials = e.credentials, this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties, this.cache = e.localCache, void 0 === e.cacheSizeBytes) this.cacheSizeBytes = 41943040;
                    else {
                        if (-1 !== e.cacheSizeBytes && e.cacheSizeBytes < 1048576) throw new Tr(Er.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
                        this.cacheSizeBytes = e.cacheSizeBytes
                    }
                    this.experimentalForceLongPolling = !!e.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling, this.useFetchStreams = !!e.useFetchStreams, ef("experimentalForceLongPolling", e.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", e.experimentalAutoDetectLongPolling)
                }
                isEqual(e) {
                    return this.host === e.host && this.ssl === e.ssl && this.credentials === e.credentials && this.cacheSizeBytes === e.cacheSizeBytes && this.experimentalForceLongPolling === e.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === e.ignoreUndefinedProperties && this.useFetchStreams === e.useFetchStreams
                }
            }
            class cf {
                constructor(e, t, n, r) {
                    this._authCredentials = e, this._appCheckCredentials = t, this._databaseId = n, this._app = r, this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new af({}), this._settingsFrozen = !1
                }
                get app() {
                    if (!this._app) throw new Tr(Er.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
                    return this._app
                }
                get _initialized() {
                    return this._settingsFrozen
                }
                get _terminated() {
                    return void 0 !== this._terminateTask
                }
                _setSettings(e) {
                    if (this._settingsFrozen) throw new Tr(Er.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
                    this._settings = new af(e), void 0 !== e.credentials && (this._authCredentials = function (e) {
                        if (!e) return new Cr;
                        switch (e.type) {
                            case "firstParty":
                                return new kr(e.sessionIndex || "0", e.iamToken || null, e.authTokenFactory || null);
                            case "provider":
                                return e.client;
                            default:
                                throw new Tr(Er.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type")
                        }
                    }(e.credentials))
                }
                _getSettings() {
                    return this._settings
                }
                _freezeSettings() {
                    return this._settingsFrozen = !0, this._settings
                }
                _delete() {
                    return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask
                }
                toJSON() {
                    return {
                        app: this._app,
                        databaseId: this._databaseId,
                        settings: this._settings
                    }
                }
                _terminate() {
                    return function (e) {
                        const t = Jd.get(e);
                        t && (pr("ComponentProvider", "Removing Datastore"), Jd.delete(e), t.terminate())
                    }(this), Promise.resolve()
                }
            }

            function uf(e, t, n, r = {}) {
                var s;
                const i = (e = sf(e, cf))._getSettings();
                if ("firestore.googleapis.com" !== i.host && i.host !== t && wr("Host has been set in both settings() and useEmulator(), emulator host will be used"), e._setSettings(Object.assign(Object.assign({}, i), {
                        host: `${t}:${n}`,
                        ssl: !1
                    })), r.mockUserToken) {
                    let t, n;
                    if ("string" == typeof r.mockUserToken) t = r.mockUserToken, n = dr.MOCK_USER;
                    else {
                        t = (0, c.Sg)(r.mockUserToken, null === (s = e._app) || void 0 === s ? void 0 : s.options.projectId);
                        const i = r.mockUserToken.sub || r.mockUserToken.user_id;
                        if (!i) throw new Tr(Er.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
                        n = new dr(i)
                    }
                    e._authCredentials = new Ar(new Dr(t, n))
                }
            }
            class lf {
                constructor(e, t, n) {
                    this.converter = t, this._key = n, this.type = "document", this.firestore = e
                }
                get _path() {
                    return this._key.path
                }
                get id() {
                    return this._key.path.lastSegment()
                }
                get path() {
                    return this._key.path.canonicalString()
                }
                get parent() {
                    return new df(this.firestore, this.converter, this._key.path.popLast())
                }
                withConverter(e) {
                    return new lf(this.firestore, e, this._key)
                }
            }
            class hf {
                constructor(e, t, n) {
                    this.converter = t, this._query = n, this.type = "query", this.firestore = e
                }
                withConverter(e) {
                    return new hf(this.firestore, e, this._query)
                }
            }
            class df extends hf {
                constructor(e, t, n) {
                    super(e, t, Io(n)), this._path = n, this.type = "collection"
                }
                get id() {
                    return this._query.path.lastSegment()
                }
                get path() {
                    return this._query.path.canonicalString()
                }
                get parent() {
                    const e = this._path.popLast();
                    return e.isEmpty() ? null : new lf(this.firestore, null, new Gr(e))
                }
                withConverter(e) {
                    return new df(this.firestore, e, this._path)
                }
            }

            function ff(e, t, ...n) {
                if (e = (0, c.m9)(e), Zd("collection", "path", t), e instanceof cf) {
                    const r = $r.fromString(t, ...n);
                    return nf(r), new df(e, null, r)
                } {
                    if (!(e instanceof lf || e instanceof df)) throw new Tr(Er.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
                    const r = e._path.child($r.fromString(t, ...n));
                    return nf(r), new df(e.firestore, null, r)
                }
            }

            function gf(e, t, ...n) {
                if (e = (0, c.m9)(e), 1 === arguments.length && (t = Mr.A()), Zd("doc", "path", t), e instanceof cf) {
                    const r = $r.fromString(t, ...n);
                    return tf(r), new lf(e, null, new Gr(r))
                } {
                    if (!(e instanceof lf || e instanceof df)) throw new Tr(Er.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
                    const r = e._path.child($r.fromString(t, ...n));
                    return tf(r), new lf(e.firestore, e instanceof df ? e.converter : null, new Gr(r))
                }
            }

            function mf(e, t) {
                return e = (0, c.m9)(e), t = (0, c.m9)(t), (e instanceof lf || e instanceof df) && (t instanceof lf || t instanceof df) && e.firestore === t.firestore && e.path === t.path && e.converter === t.converter
            }

            function pf(e, t) {
                return e = (0, c.m9)(e), t = (0, c.m9)(t), e instanceof hf && t instanceof hf && e.firestore === t.firestore && No(e._query, t._query) && e.converter === t.converter
            }
            class yf {
                constructor() {
                    this.Nc = Promise.resolve(), this.kc = [], this.Oc = !1, this.$c = [], this.Mc = null, this.Fc = !1, this.Bc = !1, this.Lc = [], this.Co = new Yl(this, "async_queue_retry"), this.qc = () => {
                        const e = Wl();
                        e && pr("AsyncQueue", "Visibility state changed to " + e.visibilityState), this.Co.vo()
                    };
                    const e = Wl();
                    e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.qc)
                }
                get isShuttingDown() {
                    return this.Oc
                }
                enqueueAndForget(e) {
                    this.enqueue(e)
                }
                enqueueAndForgetEvenWhileRestricted(e) {
                    this.Uc(), this.Kc(e)
                }
                enterRestrictedMode(e) {
                    if (!this.Oc) {
                        this.Oc = !0, this.Bc = e || !1;
                        const t = Wl();
                        t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.qc)
                    }
                }
                enqueue(e) {
                    if (this.Uc(), this.Oc) return new Promise((() => {}));
                    const t = new Sr;
                    return this.Kc((() => this.Oc && this.Bc ? Promise.resolve() : (e().then(t.resolve, t.reject), t.promise))).then((() => t.promise))
                }
                enqueueRetryable(e) {
                    this.enqueueAndForget((() => (this.kc.push(e), this.Gc())))
                }
                async Gc() {
                    if (0 !== this.kc.length) {
                        try {
                            await this.kc[0](), this.kc.shift(), this.Co.reset()
                        } catch (e) {
                            if (!us(e)) throw e;
                            pr("AsyncQueue", "Operation failed with retryable error: " + e)
                        }
                        this.kc.length > 0 && this.Co.Ao((() => this.Gc()))
                    }
                }
                Kc(e) {
                    const t = this.Nc.then((() => (this.Fc = !0, e().catch((e => {
                        this.Mc = e, this.Fc = !1;
                        const t = function (e) {
                            let t = e.message || "";
                            return e.stack && (t = e.stack.includes(e.message) ? e.stack : e.message + "\n" + e.stack), t
                        }(e);
                        throw yr("INTERNAL UNHANDLED ERROR: ", t), e
                    })).then((e => (this.Fc = !1, e))))));
                    return this.Nc = t, t
                }
                enqueueAfterDelay(e, t, n) {
                    this.Uc(), this.Lc.indexOf(e) > -1 && (t = 0);
                    const r = kh.createAndSchedule(this, e, t, n, (e => this.Qc(e)));
                    return this.$c.push(r), r
                }
                Uc() {
                    this.Mc && br()
                }
                verifyOperationInProgress() {}
                async zc() {
                    let e;
                    do {
                        e = this.Nc, await e
                    } while (e !== this.Nc)
                }
                jc(e) {
                    for (const t of this.$c)
                        if (t.timerId === e) return !0;
                    return !1
                }
                Wc(e) {
                    return this.zc().then((() => {
                        this.$c.sort(((e, t) => e.targetTimeMs - t.targetTimeMs));
                        for (const t of this.$c)
                            if (t.skipDelay(), "all" !== e && t.timerId === e) break;
                        return this.zc()
                    }))
                }
                Hc(e) {
                    this.Lc.push(e)
                }
                Qc(e) {
                    const t = this.$c.indexOf(e);
                    this.$c.splice(t, 1)
                }
            }

            function wf(e) {
                return function (e, t) {
                    if ("object" != typeof e || null === e) return !1;
                    const n = e;
                    for (const e of ["next", "error", "complete"])
                        if (e in n && "function" == typeof n[e]) return !0;
                    return !1
                }(e)
            }
            class vf {
                constructor() {
                    this._progressObserver = {}, this._taskCompletionResolver = new Sr, this._lastProgress = {
                        taskState: "Running",
                        totalBytes: 0,
                        totalDocuments: 0,
                        bytesLoaded: 0,
                        documentsLoaded: 0
                    }
                }
                onProgress(e, t, n) {
                    this._progressObserver = {
                        next: e,
                        error: t,
                        complete: n
                    }
                } catch (e) {
                    return this._taskCompletionResolver.promise.catch(e)
                }
                then(e, t) {
                    return this._taskCompletionResolver.promise.then(e, t)
                }
                _completeWith(e) {
                    this._updateProgress(e), this._progressObserver.complete && this._progressObserver.complete(), this._taskCompletionResolver.resolve(e)
                }
                _failWith(e) {
                    this._lastProgress.taskState = "Error", this._progressObserver.next && this._progressObserver.next(this._lastProgress), this._progressObserver.error && this._progressObserver.error(e), this._taskCompletionResolver.reject(e)
                }
                _updateProgress(e) {
                    this._lastProgress = e, this._progressObserver.next && this._progressObserver.next(e)
                }
            }
            class bf extends cf {
                constructor(e, t, n, r) {
                    super(e, t, n, r), this.type = "firestore", this._queue = new yf, this._persistenceKey = (null == r ? void 0 : r.name) || "[DEFAULT]"
                }
                _terminate() {
                    return this._firestoreClient || _f(this), this._firestoreClient.terminate()
                }
            }

            function If(e) {
                return e._firestoreClient || _f(e), e._firestoreClient.verifyNotTerminated(), e._firestoreClient
            }

            function _f(e) {
                var t, n, r;
                const s = e._freezeSettings(),
                    i = function (e, t, n, r) {
                        return new gi(e, t, n, r.host, r.ssl, r.experimentalForceLongPolling, r.experimentalAutoDetectLongPolling, r.useFetchStreams)
                    }(e._databaseId, (null === (t = e._app) || void 0 === t ? void 0 : t.options.appId) || "", e._persistenceKey, s);
                e._firestoreClient = new Fd(e._authCredentials, e._appCheckCredentials, e._queue, i), (null === (n = s.cache) || void 0 === n ? void 0 : n._offlineComponentProvider) && (null === (r = s.cache) || void 0 === r ? void 0 : r._onlineComponentProvider) && (e._firestoreClient._uninitializedComponentsProvider = {
                    _offlineKind: s.cache.kind,
                    _offline: s.cache._offlineComponentProvider,
                    _online: s.cache._onlineComponentProvider
                })
            }

            function Ef(e, t, n) {
                const r = new Sr;
                return e.asyncQueue.enqueue((async () => {
                    try {
                        await Vd(e, n), await Ud(e, t), r.resolve()
                    } catch (e) {
                        const t = e;
                        if (!Bd(t)) throw t;
                        wr("Error enabling indexeddb cache. Falling back to memory cache: " + t), r.reject(t)
                    }
                })).then((() => r.promise))
            }

            function Tf(e) {
                return function (e) {
                    const t = new Sr;
                    return e.asyncQueue.enqueueAndForget((async () => async function (e, t) {
                        const n = _r(e);
                        hh(n.remoteStore) || pr("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");
                        try {
                            const e = await
                            function (e) {
                                const t = _r(e);
                                return t.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (e => t.mutationQueue.getHighestUnacknowledgedBatchId(e)))
                            }(n.localStore);
                            if (-1 === e) return void t.resolve();
                            const r = n.hc.get(e) || [];
                            r.push(t), n.hc.set(e, r)
                        } catch (e) {
                            const n = Rh(e, "Initialization of waitForPendingWrites() operation failed");
                            t.reject(n)
                        }
                    }(await Kd(e), t))), t.promise
                }(If(e = sf(e, bf)))
            }

            function Sf(e) {
                return function (e) {
                    return e.asyncQueue.enqueue((async () => {
                        const t = await zd(e),
                            n = await Gd(e);
                        return t.setNetworkEnabled(!0),
                            function (e) {
                                const t = _r(e);
                                return t.du.delete(0), rh(t)
                            }(n)
                    }))
                }(If(e = sf(e, bf)))
            }

            function Df(e) {
                return function (e) {
                    return e.asyncQueue.enqueue((async () => {
                        const t = await zd(e),
                            n = await Gd(e);
                        return t.setNetworkEnabled(!1), async function (e) {
                            const t = _r(e);
                            t.du.add(0), await sh(t), t.mu.set("Offline")
                        }(n)
                    }))
                }(If(e = sf(e, bf)))
            }

            function Cf(e, t) {
                return function (e, t) {
                    return e.asyncQueue.enqueue((async () => function (e, t) {
                        const n = _r(e);
                        return n.persistence.runTransaction("Get named query", "readonly", (e => n.xs.getNamedQuery(e, t)))
                    }(await jd(e), t)))
                }(If(e = sf(e, bf)), t).then((t => t ? new hf(e, null, t.query) : null))
            }

            function Af(e) {
                if (e._initialized || e._terminated) throw new Tr(Er.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")
            }
            class xf {
                constructor(e) {
                    this._byteString = e
                }
                static fromBase64String(e) {
                    try {
                        return new xf(oi.fromBase64String(e))
                    } catch (e) {
                        throw new Tr(Er.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + e)
                    }
                }
                static fromUint8Array(e) {
                    return new xf(oi.fromUint8Array(e))
                }
                toBase64() {
                    return this._byteString.toBase64()
                }
                toUint8Array() {
                    return this._byteString.toUint8Array()
                }
                toString() {
                    return "Bytes(base64: " + this.toBase64() + ")"
                }
                isEqual(e) {
                    return this._byteString.isEqual(e._byteString)
                }
            }
            class Nf {
                constructor(...e) {
                    for (let t = 0; t < e.length; ++t)
                        if (0 === e[t].length) throw new Tr(Er.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
                    this._internalPath = new jr(e)
                }
                isEqual(e) {
                    return this._internalPath.isEqual(e._internalPath)
                }
            }
            class kf {
                constructor(e) {
                    this._methodName = e
                }
            }
            class Rf {
                constructor(e, t) {
                    if (!isFinite(e) || e < -90 || e > 90) throw new Tr(Er.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + e);
                    if (!isFinite(t) || t < -180 || t > 180) throw new Tr(Er.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + t);
                    this._lat = e, this._long = t
                }
                get latitude() {
                    return this._lat
                }
                get longitude() {
                    return this._long
                }
                isEqual(e) {
                    return this._lat === e._lat && this._long === e._long
                }
                toJSON() {
                    return {
                        latitude: this._lat,
                        longitude: this._long
                    }
                }
                _compareTo(e) {
                    return Pr(this._lat, e._lat) || Pr(this._long, e._long)
                }
            }
            const Of = /^__.*__$/;
            class Lf {
                constructor(e, t, n) {
                    this.data = e, this.fieldMask = t, this.fieldTransforms = n
                }
                toMutation(e, t) {
                    return null !== this.fieldMask ? new Ea(e, this.data, this.fieldMask, t, this.fieldTransforms) : new _a(e, this.data, t, this.fieldTransforms)
                }
            }
            class Mf {
                constructor(e, t, n) {
                    this.data = e, this.fieldMask = t, this.fieldTransforms = n
                }
                toMutation(e, t) {
                    return new Ea(e, this.data, this.fieldMask, t, this.fieldTransforms)
                }
            }

            function Pf(e) {
                switch (e) {
                    case 0:
                    case 2:
                    case 1:
                        return !0;
                    case 3:
                    case 4:
                        return !1;
                    default:
                        throw br()
                }
            }
            class Ff {
                constructor(e, t, n, r, s, i) {
                    this.settings = e, this.databaseId = t, this.serializer = n, this.ignoreUndefinedProperties = r, void 0 === s && this.Jc(), this.fieldTransforms = s || [], this.fieldMask = i || []
                }
                get path() {
                    return this.settings.path
                }
                get Yc() {
                    return this.settings.Yc
                }
                Zc(e) {
                    return new Ff(Object.assign(Object.assign({}, this.settings), e), this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask)
                }
                Xc(e) {
                    var t;
                    const n = null === (t = this.path) || void 0 === t ? void 0 : t.child(e),
                        r = this.Zc({
                            path: n,
                            ta: !1
                        });
                    return r.ea(e), r
                }
                na(e) {
                    var t;
                    const n = null === (t = this.path) || void 0 === t ? void 0 : t.child(e),
                        r = this.Zc({
                            path: n,
                            ta: !1
                        });
                    return r.Jc(), r
                }
                sa(e) {
                    return this.Zc({
                        path: void 0,
                        ta: !0
                    })
                }
                ia(e) {
                    return rg(e, this.settings.methodName, this.settings.ra || !1, this.path, this.settings.oa)
                }
                contains(e) {
                    return void 0 !== this.fieldMask.find((t => e.isPrefixOf(t))) || void 0 !== this.fieldTransforms.find((t => e.isPrefixOf(t.field)))
                }
                Jc() {
                    if (this.path)
                        for (let e = 0; e < this.path.length; e++) this.ea(this.path.get(e))
                }
                ea(e) {
                    if (0 === e.length) throw this.ia("Document fields must not be empty");
                    if (Pf(this.Yc) && Of.test(e)) throw this.ia('Document fields cannot begin and end with "__"')
                }
            }
            class Vf {
                constructor(e, t, n) {
                    this.databaseId = e, this.ignoreUndefinedProperties = t, this.serializer = n || Hl(e)
                }
                ua(e, t, n, r = !1) {
                    return new Ff({
                        Yc: e,
                        methodName: t,
                        oa: n,
                        path: jr.emptyPath(),
                        ta: !1,
                        ra: r
                    }, this.databaseId, this.serializer, this.ignoreUndefinedProperties)
                }
            }

            function Uf(e) {
                const t = e._freezeSettings(),
                    n = Hl(e._databaseId);
                return new Vf(e._databaseId, !!t.ignoreUndefinedProperties, n)
            }

            function Bf(e, t, n, r, s, i = {}) {
                const o = e.ua(i.merge || i.mergeFields ? 2 : 0, t, n, s);
                Zf("Data must be an object, but it was:", o, r);
                const a = Xf(r, o);
                let c, u;
                if (i.merge) c = new si(o.fieldMask), u = o.fieldTransforms;
                else if (i.mergeFields) {
                    const e = [];
                    for (const r of i.mergeFields) {
                        const s = eg(t, r, n);
                        if (!o.contains(s)) throw new Tr(Er.INVALID_ARGUMENT, `Field '${s}' is specified in your field mask but missing from your input data.`);
                        sg(e, s) || e.push(s)
                    }
                    c = new si(e), u = o.fieldTransforms.filter((e => c.covers(e.field)))
                } else c = null, u = o.fieldTransforms;
                return new Lf(new Fi(a), c, u)
            }
            class qf extends kf {
                _toFieldTransform(e) {
                    if (2 !== e.Yc) throw 1 === e.Yc ? e.ia(`${this._methodName}() can only appear at the top level of your update data`) : e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
                    return e.fieldMask.push(e.path), null
                }
                isEqual(e) {
                    return e instanceof qf
                }
            }

            function $f(e, t, n) {
                return new Ff({
                    Yc: 3,
                    oa: t.settings.oa,
                    methodName: e._methodName,
                    ta: n
                }, t.databaseId, t.serializer, t.ignoreUndefinedProperties)
            }
            class zf extends kf {
                _toFieldTransform(e) {
                    return new da(e.path, new sa)
                }
                isEqual(e) {
                    return e instanceof zf
                }
            }
            class jf extends kf {
                constructor(e, t) {
                    super(e), this.ca = t
                }
                _toFieldTransform(e) {
                    const t = $f(this, e, !0),
                        n = this.ca.map((e => Yf(e, t))),
                        r = new ia(n);
                    return new da(e.path, r)
                }
                isEqual(e) {
                    return this === e
                }
            }
            class Gf extends kf {
                constructor(e, t) {
                    super(e), this.ca = t
                }
                _toFieldTransform(e) {
                    const t = $f(this, e, !0),
                        n = this.ca.map((e => Yf(e, t))),
                        r = new aa(n);
                    return new da(e.path, r)
                }
                isEqual(e) {
                    return this === e
                }
            }
            class Kf extends kf {
                constructor(e, t) {
                    super(e), this.aa = t
                }
                _toFieldTransform(e) {
                    const t = new ua(e.serializer, Zo(e.serializer, this.aa));
                    return new da(e.path, t)
                }
                isEqual(e) {
                    return this === e
                }
            }

            function Qf(e, t, n, r) {
                const s = e.ua(1, t, n);
                Zf("Data must be an object, but it was:", s, r);
                const i = [],
                    o = Fi.empty();
                Ys(r, ((e, r) => {
                    const a = ng(t, e, n);
                    r = (0, c.m9)(r);
                    const u = s.na(a);
                    if (r instanceof qf) i.push(a);
                    else {
                        const e = Yf(r, u);
                        null != e && (i.push(a), o.set(a, e))
                    }
                }));
                const a = new si(i);
                return new Mf(o, a, s.fieldTransforms)
            }

            function Wf(e, t, n, r, s, i) {
                const o = e.ua(1, t, n),
                    a = [eg(t, r, n)],
                    u = [s];
                if (i.length % 2 != 0) throw new Tr(Er.INVALID_ARGUMENT, `Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);
                for (let e = 0; e < i.length; e += 2) a.push(eg(t, i[e])), u.push(i[e + 1]);
                const l = [],
                    h = Fi.empty();
                for (let e = a.length - 1; e >= 0; --e)
                    if (!sg(l, a[e])) {
                        const t = a[e];
                        let n = u[e];
                        n = (0, c.m9)(n);
                        const r = o.na(t);
                        if (n instanceof qf) l.push(t);
                        else {
                            const e = Yf(n, r);
                            null != e && (l.push(t), h.set(t, e))
                        }
                    } const d = new si(l);
                return new Mf(h, d, o.fieldTransforms)
            }

            function Hf(e, t, n, r = !1) {
                return Yf(n, e.ua(r ? 4 : 3, t))
            }

            function Yf(e, t) {
                if (Jf(e = (0, c.m9)(e))) return Zf("Unsupported field value:", t, e), Xf(e, t);
                if (e instanceof kf) return function (e, t) {
                    if (!Pf(t.Yc)) throw t.ia(`${e._methodName}() can only be used with update() and set()`);
                    if (!t.path) throw t.ia(`${e._methodName}() is not currently supported inside arrays`);
                    const n = e._toFieldTransform(t);
                    n && t.fieldTransforms.push(n)
                }(e, t), null;
                if (void 0 === e && t.ignoreUndefinedProperties) return null;
                if (t.path && t.fieldMask.push(t.path), e instanceof Array) {
                    if (t.settings.ta && 4 !== t.Yc) throw t.ia("Nested arrays are not supported");
                    return function (e, t) {
                        const n = [];
                        let r = 0;
                        for (const s of e) {
                            let e = Yf(s, t.sa(r));
                            null == e && (e = {
                                nullValue: "NULL_VALUE"
                            }), n.push(e), r++
                        }
                        return {
                            arrayValue: {
                                values: n
                            }
                        }
                    }(e, t)
                }
                return function (e, t) {
                    if (null === (e = (0, c.m9)(e))) return {
                        nullValue: "NULL_VALUE"
                    };
                    if ("number" == typeof e) return Zo(t.serializer, e);
                    if ("boolean" == typeof e) return {
                        booleanValue: e
                    };
                    if ("string" == typeof e) return {
                        stringValue: e
                    };
                    if (e instanceof Date) {
                        const n = Ur.fromDate(e);
                        return {
                            timestampValue: Ja(t.serializer, n)
                        }
                    }
                    if (e instanceof Ur) {
                        const n = new Ur(e.seconds, 1e3 * Math.floor(e.nanoseconds / 1e3));
                        return {
                            timestampValue: Ja(t.serializer, n)
                        }
                    }
                    if (e instanceof Rf) return {
                        geoPointValue: {
                            latitude: e.latitude,
                            longitude: e.longitude
                        }
                    };
                    if (e instanceof xf) return {
                        bytesValue: Za(t.serializer, e._byteString)
                    };
                    if (e instanceof lf) {
                        const n = t.databaseId,
                            r = e.firestore._databaseId;
                        if (!r.isEqual(n)) throw t.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);
                        return {
                            referenceValue: nc(e.firestore._databaseId || t.databaseId, e._key.path)
                        }
                    }
                    throw t.ia(`Unsupported field value: ${rf(e)}`)
                }(e, t)
            }

            function Xf(e, t) {
                const n = {};
                return Xs(e) ? t.path && t.path.length > 0 && t.fieldMask.push(t.path) : Ys(e, ((e, r) => {
                    const s = Yf(r, t.Xc(e));
                    null != s && (n[e] = s)
                })), {
                    mapValue: {
                        fields: n
                    }
                }
            }

            function Jf(e) {
                return !("object" != typeof e || null === e || e instanceof Array || e instanceof Date || e instanceof Ur || e instanceof Rf || e instanceof xf || e instanceof lf || e instanceof kf)
            }

            function Zf(e, t, n) {
                if (!Jf(n) || ! function (e) {
                        return "object" == typeof e && null !== e && (Object.getPrototypeOf(e) === Object.prototype || null === Object.getPrototypeOf(e))
                    }(n)) {
                    const r = rf(n);
                    throw "an object" === r ? t.ia(e + " a custom object") : t.ia(e + " " + r)
                }
            }

            function eg(e, t, n) {
                if ((t = (0, c.m9)(t)) instanceof Nf) return t._internalPath;
                if ("string" == typeof t) return ng(e, t);
                throw rg("Field path arguments must be of type string or ", e, !1, void 0, n)
            }
            const tg = new RegExp("[~\\*/\\[\\]]");

            function ng(e, t, n) {
                if (t.search(tg) >= 0) throw rg(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`, e, !1, void 0, n);
                try {
                    return new Nf(...t.split("."))._internalPath
                } catch (r) {
                    throw rg(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, e, !1, void 0, n)
                }
            }

            function rg(e, t, n, r, s) {
                const i = r && !r.isEmpty(),
                    o = void 0 !== s;
                let a = `Function ${t}() called with invalid data`;
                n && (a += " (via `toFirestore()`)"), a += ". ";
                let c = "";
                return (i || o) && (c += " (found", i && (c += ` in field ${r}`), o && (c += ` in document ${s}`), c += ")"), new Tr(Er.INVALID_ARGUMENT, a + e + c)
            }

            function sg(e, t) {
                return e.some((e => e.isEqual(t)))
            }
            class ig {
                constructor(e, t, n, r, s) {
                    this._firestore = e, this._userDataWriter = t, this._key = n, this._document = r, this._converter = s
                }
                get id() {
                    return this._key.path.lastSegment()
                }
                get ref() {
                    return new lf(this._firestore, this._converter, this._key)
                }
                exists() {
                    return null !== this._document
                }
                data() {
                    if (this._document) {
                        if (this._converter) {
                            const e = new og(this._firestore, this._userDataWriter, this._key, this._document, null);
                            return this._converter.fromFirestore(e)
                        }
                        return this._userDataWriter.convertValue(this._document.data.value)
                    }
                }
                get(e) {
                    if (this._document) {
                        const t = this._document.data.field(ag("DocumentSnapshot.get", e));
                        if (null !== t) return this._userDataWriter.convertValue(t)
                    }
                }
            }
            class og extends ig {
                data() {
                    return super.data()
                }
            }

            function ag(e, t) {
                return "string" == typeof t ? ng(e, t) : t instanceof Nf ? t._internalPath : t._delegate._internalPath
            }

            function cg(e) {
                if ("L" === e.limitType && 0 === e.explicitOrderBy.length) throw new Tr(Er.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause")
            }
            class ug {}
            class lg extends ug {}

            function hg(e, t, ...n) {
                let r = [];
                t instanceof ug && r.push(t), r = r.concat(n),
                    function (e) {
                        const t = e.filter((e => e instanceof fg)).length,
                            n = e.filter((e => e instanceof dg)).length;
                        if (t > 1 || t > 0 && n > 0) throw new Tr(Er.INVALID_ARGUMENT, "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")
                    }(r);
                for (const t of r) e = t._apply(e);
                return e
            }
            class dg extends lg {
                constructor(e, t, n) {
                    super(), this._field = e, this._op = t, this._value = n, this.type = "where"
                }
                static _create(e, t, n) {
                    return new dg(e, t, n)
                }
                _apply(e) {
                    const t = this._parse(e);
                    return Ig(e._query, t), new hf(e.firestore, e.converter, Ao(e._query, t))
                }
                _parse(e) {
                    const t = Uf(e.firestore),
                        n = function (e, t, n, r, s, i, o) {
                            let a;
                            if (s.isKeyField()) {
                                if ("array-contains" === i || "array-contains-any" === i) throw new Tr(Er.INVALID_ARGUMENT, `Invalid Query. You can't perform '${i}' queries on documentId().`);
                                if ("in" === i || "not-in" === i) {
                                    bg(o, i);
                                    const t = [];
                                    for (const n of o) t.push(vg(r, e, n));
                                    a = {
                                        arrayValue: {
                                            values: t
                                        }
                                    }
                                } else a = vg(r, e, o)
                            } else "in" !== i && "not-in" !== i && "array-contains-any" !== i || bg(o, i), a = Hf(n, "where", o, "in" === i || "not-in" === i);
                            return Ki.create(s, i, a)
                        }(e._query, 0, t, e.firestore._databaseId, this._field, this._op, this._value);
                    return n
                }
            }
            class fg extends ug {
                constructor(e, t) {
                    super(), this.type = e, this._queryConstraints = t
                }
                static _create(e, t) {
                    return new fg(e, t)
                }
                _parse(e) {
                    const t = this._queryConstraints.map((t => t._parse(e))).filter((e => e.getFilters().length > 0));
                    return 1 === t.length ? t[0] : Qi.create(t, this._getOperator())
                }
                _apply(e) {
                    const t = this._parse(e);
                    return 0 === t.getFilters().length ? e : (function (e, t) {
                        let n = e;
                        const r = t.getFlattenedFilters();
                        for (const e of r) Ig(n, e), n = Ao(n, e)
                    }(e._query, t), new hf(e.firestore, e.converter, Ao(e._query, t)))
                }
                _getQueryConstraints() {
                    return this._queryConstraints
                }
                _getOperator() {
                    return "and" === this.type ? "and" : "or"
                }
            }
            class gg extends lg {
                constructor(e, t) {
                    super(), this._field = e, this._direction = t, this.type = "orderBy"
                }
                static _create(e, t) {
                    return new gg(e, t)
                }
                _apply(e) {
                    const t = function (e, t, n) {
                        if (null !== e.startAt) throw new Tr(Er.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
                        if (null !== e.endAt) throw new Tr(Er.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
                        const r = new zi(t, n);
                        return function (e, t) {
                            if (null === Eo(e)) {
                                const n = To(e);
                                null !== n && _g(e, n, t.field)
                            }
                        }(e, r), r
                    }(e._query, this._field, this._direction);
                    return new hf(e.firestore, e.converter, function (e, t) {
                        const n = e.explicitOrderBy.concat([t]);
                        return new vo(e.path, e.collectionGroup, n, e.filters.slice(), e.limit, e.limitType, e.startAt, e.endAt)
                    }(e._query, t))
                }
            }
            class mg extends lg {
                constructor(e, t, n) {
                    super(), this.type = e, this._limit = t, this._limitType = n
                }
                static _create(e, t, n) {
                    return new mg(e, t, n)
                }
                _apply(e) {
                    return new hf(e.firestore, e.converter, xo(e._query, this._limit, this._limitType))
                }
            }
            class pg extends lg {
                constructor(e, t, n) {
                    super(), this.type = e, this._docOrFields = t, this._inclusive = n
                }
                static _create(e, t, n) {
                    return new pg(e, t, n)
                }
                _apply(e) {
                    const t = wg(e, this.type, this._docOrFields, this._inclusive);
                    return new hf(e.firestore, e.converter, function (e, t) {
                        return new vo(e.path, e.collectionGroup, e.explicitOrderBy.slice(), e.filters.slice(), e.limit, e.limitType, t, e.endAt)
                    }(e._query, t))
                }
            }
            class yg extends lg {
                constructor(e, t, n) {
                    super(), this.type = e, this._docOrFields = t, this._inclusive = n
                }
                static _create(e, t, n) {
                    return new yg(e, t, n)
                }
                _apply(e) {
                    const t = wg(e, this.type, this._docOrFields, this._inclusive);
                    return new hf(e.firestore, e.converter, function (e, t) {
                        return new vo(e.path, e.collectionGroup, e.explicitOrderBy.slice(), e.filters.slice(), e.limit, e.limitType, e.startAt, t)
                    }(e._query, t))
                }
            }

            function wg(e, t, n, r) {
                if (n[0] = (0, c.m9)(n[0]), n[0] instanceof ig) return function (e, t, n, r, s) {
                    if (!r) throw new Tr(Er.NOT_FOUND, `Can't use a DocumentSnapshot that doesn't exist for ${n}().`);
                    const i = [];
                    for (const n of Do(e))
                        if (n.field.isKeyField()) i.push(Si(t, r.key));
                        else {
                            const e = r.data.field(n.field);
                            if (hi(e)) throw new Tr(Er.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + n.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                            if (null === e) {
                                const e = n.field.canonicalString();
                                throw new Tr(Er.INVALID_ARGUMENT, `Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)
                            }
                            i.push(e)
                        } return new Bi(i, s)
                }(e._query, e.firestore._databaseId, t, n[0]._document, r); {
                    const s = Uf(e.firestore);
                    return function (e, t, n, r, s, i) {
                        const o = e.explicitOrderBy;
                        if (s.length > o.length) throw new Tr(Er.INVALID_ARGUMENT, `Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);
                        const a = [];
                        for (let i = 0; i < s.length; i++) {
                            const c = s[i];
                            if (o[i].field.isKeyField()) {
                                if ("string" != typeof c) throw new Tr(Er.INVALID_ARGUMENT, `Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof c}`);
                                if (!So(e) && -1 !== c.indexOf("/")) throw new Tr(Er.INVALID_ARGUMENT, `Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${c}' contains a slash.`);
                                const n = e.path.child($r.fromString(c));
                                if (!Gr.isDocumentKey(n)) throw new Tr(Er.INVALID_ARGUMENT, `Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);
                                const s = new Gr(n);
                                a.push(Si(t, s))
                            } else {
                                const e = Hf(n, r, c);
                                a.push(e)
                            }
                        }
                        return new Bi(a, i)
                    }(e._query, e.firestore._databaseId, s, t, n, r)
                }
            }

            function vg(e, t, n) {
                if ("string" == typeof (n = (0, c.m9)(n))) {
                    if ("" === n) throw new Tr(Er.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
                    if (!So(t) && -1 !== n.indexOf("/")) throw new Tr(Er.INVALID_ARGUMENT, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);
                    const r = t.path.child($r.fromString(n));
                    if (!Gr.isDocumentKey(r)) throw new Tr(Er.INVALID_ARGUMENT, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);
                    return Si(e, new Gr(r))
                }
                if (n instanceof lf) return Si(e, n._key);
                throw new Tr(Er.INVALID_ARGUMENT, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${rf(n)}.`)
            }

            function bg(e, t) {
                if (!Array.isArray(e) || 0 === e.length) throw new Tr(Er.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)
            }

            function Ig(e, t) {
                if (t.isInequality()) {
                    const n = To(e),
                        r = t.field;
                    if (null !== n && !n.isEqual(r)) throw new Tr(Er.INVALID_ARGUMENT, `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);
                    const s = Eo(e);
                    null !== s && _g(e, r, s)
                }
                const n = function (e, t) {
                    for (const n of e)
                        for (const e of n.getFlattenedFilters())
                            if (t.indexOf(e.op) >= 0) return e.op;
                    return null
                }(e.filters, function (e) {
                    switch (e) {
                        case "!=":
                            return ["!=", "not-in"];
                        case "array-contains-any":
                        case "in":
                            return ["not-in"];
                        case "not-in":
                            return ["array-contains-any", "in", "not-in", "!="];
                        default:
                            return []
                    }
                }(t.op));
                if (null !== n) throw n === t.op ? new Tr(Er.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${t.op.toString()}' filter.`) : new Tr(Er.INVALID_ARGUMENT, `Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)
            }

            function _g(e, t, n) {
                if (!n.isEqual(t)) throw new Tr(Er.INVALID_ARGUMENT, `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)
            }
            class Eg {
                convertValue(e, t = "none") {
                    switch (wi(e)) {
                        case 0:
                            return null;
                        case 1:
                            return e.booleanValue;
                        case 2:
                            return ui(e.integerValue || e.doubleValue);
                        case 3:
                            return this.convertTimestamp(e.timestampValue);
                        case 4:
                            return this.convertServerTimestamp(e, t);
                        case 5:
                            return e.stringValue;
                        case 6:
                            return this.convertBytes(li(e.bytesValue));
                        case 7:
                            return this.convertReference(e.referenceValue);
                        case 8:
                            return this.convertGeoPoint(e.geoPointValue);
                        case 9:
                            return this.convertArray(e.arrayValue, t);
                        case 10:
                            return this.convertObject(e.mapValue, t);
                        default:
                            throw br()
                    }
                }
                convertObject(e, t) {
                    const n = {};
                    return Ys(e.fields, ((e, r) => {
                        n[e] = this.convertValue(r, t)
                    })), n
                }
                convertGeoPoint(e) {
                    return new Rf(ui(e.latitude), ui(e.longitude))
                }
                convertArray(e, t) {
                    return (e.values || []).map((e => this.convertValue(e, t)))
                }
                convertServerTimestamp(e, t) {
                    switch (t) {
                        case "previous":
                            const n = di(e);
                            return null == n ? null : this.convertValue(n, t);
                        case "estimate":
                            return this.convertTimestamp(fi(e));
                        default:
                            return null
                    }
                }
                convertTimestamp(e) {
                    const t = ci(e);
                    return new Ur(t.seconds, t.nanos)
                }
                convertDocumentKey(e, t) {
                    const n = $r.fromString(e);
                    Ir(Sc(n));
                    const r = new mi(n.get(1), n.get(3)),
                        s = new Gr(n.popFirst(5));
                    return r.isEqual(t) || yr(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`), s
                }
            }

            function Tg(e, t, n) {
                let r;
                return r = e ? n && (n.merge || n.mergeFields) ? e.toFirestore(t, n) : e.toFirestore(t) : t, r
            }
            class Sg extends Eg {
                constructor(e) {
                    super(), this.firestore = e
                }
                convertBytes(e) {
                    return new xf(e)
                }
                convertReference(e) {
                    const t = this.convertDocumentKey(e, this.firestore._databaseId);
                    return new lf(this.firestore, null, t)
                }
            }
            class Dg {
                constructor(e, t) {
                    this.hasPendingWrites = e, this.fromCache = t
                }
                isEqual(e) {
                    return this.hasPendingWrites === e.hasPendingWrites && this.fromCache === e.fromCache
                }
            }
            class Cg extends ig {
                constructor(e, t, n, r, s, i) {
                    super(e, t, n, r, i), this._firestore = e, this._firestoreImpl = e, this.metadata = s
                }
                exists() {
                    return super.exists()
                }
                data(e = {}) {
                    if (this._document) {
                        if (this._converter) {
                            const t = new Ag(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, null);
                            return this._converter.fromFirestore(t, e)
                        }
                        return this._userDataWriter.convertValue(this._document.data.value, e.serverTimestamps)
                    }
                }
                get(e, t = {}) {
                    if (this._document) {
                        const n = this._document.data.field(ag("DocumentSnapshot.get", e));
                        if (null !== n) return this._userDataWriter.convertValue(n, t.serverTimestamps)
                    }
                }
            }
            class Ag extends Cg {
                data(e = {}) {
                    return super.data(e)
                }
            }
            class xg {
                constructor(e, t, n, r) {
                    this._firestore = e, this._userDataWriter = t, this._snapshot = r, this.metadata = new Dg(r.hasPendingWrites, r.fromCache), this.query = n
                }
                get docs() {
                    const e = [];
                    return this.forEach((t => e.push(t))), e
                }
                get size() {
                    return this._snapshot.docs.size
                }
                get empty() {
                    return 0 === this.size
                }
                forEach(e, t) {
                    this._snapshot.docs.forEach((n => {
                        e.call(t, new Ag(this._firestore, this._userDataWriter, n.key, n, new Dg(this._snapshot.mutatedKeys.has(n.key), this._snapshot.fromCache), this.query.converter))
                    }))
                }
                docChanges(e = {}) {
                    const t = !!e.includeMetadataChanges;
                    if (t && this._snapshot.excludesMetadataChanges) throw new Tr(Er.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
                    return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === t || (this._cachedChanges = function (e, t) {
                        if (e._snapshot.oldDocs.isEmpty()) {
                            let t = 0;
                            return e._snapshot.docChanges.map((n => {
                                const r = new Ag(e._firestore, e._userDataWriter, n.doc.key, n.doc, new Dg(e._snapshot.mutatedKeys.has(n.doc.key), e._snapshot.fromCache), e.query.converter);
                                return n.doc, {
                                    type: "added",
                                    doc: r,
                                    oldIndex: -1,
                                    newIndex: t++
                                }
                            }))
                        } {
                            let n = e._snapshot.oldDocs;
                            return e._snapshot.docChanges.filter((e => t || 3 !== e.type)).map((t => {
                                const r = new Ag(e._firestore, e._userDataWriter, t.doc.key, t.doc, new Dg(e._snapshot.mutatedKeys.has(t.doc.key), e._snapshot.fromCache), e.query.converter);
                                let s = -1,
                                    i = -1;
                                return 0 !== t.type && (s = n.indexOf(t.doc.key), n = n.delete(t.doc.key)), 1 !== t.type && (n = n.add(t.doc), i = n.indexOf(t.doc.key)), {
                                    type: Ng(t.type),
                                    doc: r,
                                    oldIndex: s,
                                    newIndex: i
                                }
                            }))
                        }
                    }(this, t), this._cachedChangesIncludeMetadataChanges = t), this._cachedChanges
                }
            }

            function Ng(e) {
                switch (e) {
                    case 0:
                        return "added";
                    case 2:
                    case 3:
                        return "modified";
                    case 1:
                        return "removed";
                    default:
                        return br()
                }
            }

            function kg(e, t) {
                return e instanceof Cg && t instanceof Cg ? e._firestore === t._firestore && e._key.isEqual(t._key) && (null === e._document ? null === t._document : e._document.isEqual(t._document)) && e._converter === t._converter : e instanceof xg && t instanceof xg && e._firestore === t._firestore && pf(e.query, t.query) && e.metadata.isEqual(t.metadata) && e._snapshot.isEqual(t._snapshot)
            }
            class Rg extends Eg {
                constructor(e) {
                    super(), this.firestore = e
                }
                convertBytes(e) {
                    return new xf(e)
                }
                convertReference(e) {
                    const t = this.convertDocumentKey(e, this.firestore._databaseId);
                    return new lf(this.firestore, null, t)
                }
            }

            function Og(e) {
                e = sf(e, lf);
                const t = sf(e.firestore, bf),
                    n = If(t),
                    r = new Rg(t);
                return function (e, t) {
                    const n = new Sr;
                    return e.asyncQueue.enqueueAndForget((async () => async function (e, t, n) {
                        try {
                            const r = await
                            function (e, t) {
                                const n = _r(e);
                                return n.persistence.runTransaction("read document", "readonly", (e => n.localDocuments.getDocument(e, t)))
                            }(e, t);
                            r.isFoundDocument() ? n.resolve(r) : r.isNoDocument() ? n.resolve(null) : n.reject(new Tr(Er.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))
                        } catch (e) {
                            const r = Rh(e, `Failed to get document '${t} from cache`);
                            n.reject(r)
                        }
                    }(await jd(e), t, n))), n.promise
                }(n, e._key).then((n => new Cg(t, r, e._key, n, new Dg(null !== n && n.hasLocalMutations, !0), e.converter)))
            }

            function Lg(e) {
                e = sf(e, hf);
                const t = sf(e.firestore, bf),
                    n = If(t),
                    r = new Rg(t);
                return function (e, t) {
                    const n = new Sr;
                    return e.asyncQueue.enqueueAndForget((async () => async function (e, t, n) {
                        try {
                            const r = await Tl(e, t, !0),
                                s = new Yh(t, r.Wi),
                                i = s.zu(r.documents),
                                o = s.applyChanges(i, !1);
                            n.resolve(o.snapshot)
                        } catch (e) {
                            const r = Rh(e, `Failed to execute query '${t} against cache`);
                            n.reject(r)
                        }
                    }(await jd(e), t, n))), n.promise
                }(n, e._query).then((n => new xg(t, r, e, n)))
            }

            function Mg(e, t, n) {
                e = sf(e, lf);
                const r = sf(e.firestore, bf),
                    s = Tg(e.converter, t, n);
                return Ug(r, [Bf(Uf(r), "setDoc", e._key, s, null !== e.converter, n).toMutation(e._key, ga.none())])
            }

            function Pg(e, t, n, ...r) {
                e = sf(e, lf);
                const s = sf(e.firestore, bf),
                    i = Uf(s);
                let o;
                return o = "string" == typeof (t = (0, c.m9)(t)) || t instanceof Nf ? Wf(i, "updateDoc", e._key, t, n, r) : Qf(i, "updateDoc", e._key, t), Ug(s, [o.toMutation(e._key, ga.exists(!0))])
            }

            function Fg(e, ...t) {
                var n, r, s;
                e = (0, c.m9)(e);
                let i = {
                        includeMetadataChanges: !1
                    },
                    o = 0;
                "object" != typeof t[o] || wf(t[o]) || (i = t[o], o++);
                const a = {
                    includeMetadataChanges: i.includeMetadataChanges
                };
                if (wf(t[o])) {
                    const e = t[o];
                    t[o] = null === (n = e.next) || void 0 === n ? void 0 : n.bind(e), t[o + 1] = null === (r = e.error) || void 0 === r ? void 0 : r.bind(e), t[o + 2] = null === (s = e.complete) || void 0 === s ? void 0 : s.bind(e)
                }
                let u, l, h;
                if (e instanceof lf) l = sf(e.firestore, bf), h = Io(e._key.path), u = {
                    next: n => {
                        t[o] && t[o](Bg(l, e, n))
                    },
                    error: t[o + 1],
                    complete: t[o + 2]
                };
                else {
                    const n = sf(e, hf);
                    l = sf(n.firestore, bf), h = n._query;
                    const r = new Rg(l);
                    u = {
                        next: e => {
                            t[o] && t[o](new xg(l, r, n, e))
                        },
                        error: t[o + 1],
                        complete: t[o + 2]
                    }, cg(e._query)
                }
                return function (e, t, n, r) {
                    const s = new Od(r),
                        i = new zh(t, s, n);
                    return e.asyncQueue.enqueueAndForget((async () => Vh(await Wd(e), i))), () => {
                        s.yc(), e.asyncQueue.enqueueAndForget((async () => Uh(await Wd(e), i)))
                    }
                }(If(l), h, a, u)
            }

            function Vg(e, t) {
                return function (e, t) {
                    const n = new Od(t);
                    return e.asyncQueue.enqueueAndForget((async () => function (e, t) {
                        _r(e).Au.add(t), t.next()
                    }(await Wd(e), n))), () => {
                        n.yc(), e.asyncQueue.enqueueAndForget((async () => function (e, t) {
                            _r(e).Au.delete(t)
                        }(await Wd(e), n)))
                    }
                }(If(e = sf(e, bf)), wf(t) ? t : {
                    next: t
                })
            }

            function Ug(e, t) {
                return function (e, t) {
                    const n = new Sr;
                    return e.asyncQueue.enqueueAndForget((async () => async function (e, t, n) {
                        const r = Cd(e);
                        try {
                            const e = await
                            function (e, t) {
                                const n = _r(e),
                                    r = Ur.now(),
                                    s = t.reduce(((e, t) => e.add(t.key)), Wo());
                                let i, o;
                                return n.persistence.runTransaction("Locally write mutations", "readwrite", (e => {
                                    let a = Uo(),
                                        c = Wo();
                                    return n.Ki.getEntries(e, s).next((e => {
                                        a = e, a.forEach(((e, t) => {
                                            t.isValidDocument() || (c = c.add(e))
                                        }))
                                    })).next((() => n.localDocuments.getOverlayedDocuments(e, a))).next((s => {
                                        i = s;
                                        const o = [];
                                        for (const e of t) {
                                            const t = ba(e, i.get(e.key).overlayedDocument);
                                            null != t && o.push(new Ea(e.key, t, Vi(t.value.mapValue), ga.exists(!0)))
                                        }
                                        return n.mutationQueue.addMutationBatch(e, r, o, t)
                                    })).next((t => {
                                        o = t;
                                        const r = t.applyToLocalDocumentSet(i, c);
                                        return n.documentOverlayCache.saveOverlays(e, t.batchId, r)
                                    }))
                                })).then((() => ({
                                    batchId: o.batchId,
                                    changes: $o(i)
                                })))
                            }(r.localStore, t);
                            r.sharedClientState.addPendingMutation(e.batchId),
                                function (e, t, n) {
                                    let r = e.ac[e.currentUser.toKey()];
                                    r || (r = new Js(Pr)), r = r.insert(t, n), e.ac[e.currentUser.toKey()] = r
                                }(r, e.batchId, n), await md(r, e.changes), await wh(r.remoteStore)
                        } catch (e) {
                            const t = Rh(e, "Failed to persist write");
                            n.reject(t)
                        }
                    }(await Kd(e), t, n))), n.promise
                }(If(e), t)
            }

            function Bg(e, t, n) {
                const r = n.docs.get(t._key),
                    s = new Rg(e);
                return new Cg(e, s, t._key, r, new Dg(n.hasPendingWrites, n.fromCache), t.converter)
            }
            const qg = {
                maxAttempts: 5
            };
            class $g {
                constructor(e, t) {
                    this._firestore = e, this._commitHandler = t, this._mutations = [], this._committed = !1, this._dataReader = Uf(e)
                }
                set(e, t, n) {
                    this._verifyNotCommitted();
                    const r = zg(e, this._firestore),
                        s = Tg(r.converter, t, n),
                        i = Bf(this._dataReader, "WriteBatch.set", r._key, s, null !== r.converter, n);
                    return this._mutations.push(i.toMutation(r._key, ga.none())), this
                }
                update(e, t, n, ...r) {
                    this._verifyNotCommitted();
                    const s = zg(e, this._firestore);
                    let i;
                    return i = "string" == typeof (t = (0, c.m9)(t)) || t instanceof Nf ? Wf(this._dataReader, "WriteBatch.update", s._key, t, n, r) : Qf(this._dataReader, "WriteBatch.update", s._key, t), this._mutations.push(i.toMutation(s._key, ga.exists(!0))), this
                }
                delete(e) {
                    this._verifyNotCommitted();
                    const t = zg(e, this._firestore);
                    return this._mutations = this._mutations.concat(new Ca(t._key, ga.none())), this
                }
                commit() {
                    return this._verifyNotCommitted(), this._committed = !0, this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve()
                }
                _verifyNotCommitted() {
                    if (this._committed) throw new Tr(Er.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.")
                }
            }

            function zg(e, t) {
                if ((e = (0, c.m9)(e)).firestore !== t) throw new Tr(Er.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
                return e
            }
            class jg extends class {
                constructor(e, t) {
                    this._firestore = e, this._transaction = t, this._dataReader = Uf(e)
                }
                get(e) {
                    const t = zg(e, this._firestore),
                        n = new Sg(this._firestore);
                    return this._transaction.lookup([t._key]).then((e => {
                        if (!e || 1 !== e.length) return br();
                        const r = e[0];
                        if (r.isFoundDocument()) return new ig(this._firestore, n, r.key, r, t.converter);
                        if (r.isNoDocument()) return new ig(this._firestore, n, t._key, null, t.converter);
                        throw br()
                    }))
                }
                set(e, t, n) {
                    const r = zg(e, this._firestore),
                        s = Tg(r.converter, t, n),
                        i = Bf(this._dataReader, "Transaction.set", r._key, s, null !== r.converter, n);
                    return this._transaction.set(r._key, i), this
                }
                update(e, t, n, ...r) {
                    const s = zg(e, this._firestore);
                    let i;
                    return i = "string" == typeof (t = (0, c.m9)(t)) || t instanceof Nf ? Wf(this._dataReader, "Transaction.update", s._key, t, n, r) : Qf(this._dataReader, "Transaction.update", s._key, t), this._transaction.update(s._key, i), this
                }
                delete(e) {
                    const t = zg(e, this._firestore);
                    return this._transaction.delete(t._key), this
                }
            } {
                constructor(e, t) {
                    super(e, t), this._firestore = e
                }
                get(e) {
                    const t = zg(e, this._firestore),
                        n = new Rg(this._firestore);
                    return super.get(e).then((e => new Cg(this._firestore, n, t._key, e._document, new Dg(!1, !1), t.converter)))
                }
            }! function (e, t = !0) {
                ! function (e) {
                    fr = e
                }(i.SDK_VERSION), (0, i._registerComponent)(new o.wA("firestore", ((e, {
                    instanceIdentifier: n,
                    options: r
                }) => {
                    const s = e.getProvider("app").getImmediate(),
                        i = new bf(new xr(e.getProvider("auth-internal")), new Or(e.getProvider("app-check-internal")), function (e, t) {
                            if (!Object.prototype.hasOwnProperty.apply(e.options, ["projectId"])) throw new Tr(Er.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
                            return new mi(e.options.projectId, t)
                        }(s, n), s);
                    return r = Object.assign({
                        useFetchStreams: t
                    }, r), i._setSettings(r), i
                }), "PUBLIC").setMultipleInstances(!0)), (0, i.registerVersion)(hr, "3.10.0", e), (0, i.registerVersion)(hr, "3.10.0", "esm2017")
            }();

            function Gg(e, t) {
                if (void 0 === t) return {
                    merge: !1
                };
                if (void 0 !== t.mergeFields && void 0 !== t.merge) throw new Tr("invalid-argument", `Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);
                return t
            }

            function Kg() {
                if ("undefined" == typeof Uint8Array) throw new Tr("unimplemented", "Uint8Arrays are not available in this environment.")
            }

            function Qg() {
                if ("undefined" == typeof atob) throw new Tr("unimplemented", "Blobs are unavailable in Firestore in this environment.")
            }
            class Wg {
                constructor(e) {
                    this._delegate = e
                }
                static fromBase64String(e) {
                    return Qg(), new Wg(xf.fromBase64String(e))
                }
                static fromUint8Array(e) {
                    return Kg(), new Wg(xf.fromUint8Array(e))
                }
                toBase64() {
                    return Qg(), this._delegate.toBase64()
                }
                toUint8Array() {
                    return Kg(), this._delegate.toUint8Array()
                }
                isEqual(e) {
                    return this._delegate.isEqual(e._delegate)
                }
                toString() {
                    return "Blob(base64: " + this.toBase64() + ")"
                }
            }

            function Hg(e) {
                return function (e, t) {
                    if ("object" != typeof e || null === e) return !1;
                    const n = e;
                    for (const e of t)
                        if (e in n && "function" == typeof n[e]) return !0;
                    return !1
                }(e, ["next", "error", "complete"])
            }
            class Yg {
                enableIndexedDbPersistence(e, t) {
                    return function (e, t) {
                        Af(e = sf(e, bf));
                        const n = If(e);
                        if (n._uninitializedComponentsProvider) throw new Tr(Er.FAILED_PRECONDITION, "SDK cache is already specified.");
                        wr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");
                        const r = e._freezeSettings(),
                            s = new kd;
                        return Ef(n, s, new xd(s, r.cacheSizeBytes, null == t ? void 0 : t.forceOwnership))
                    }(e._delegate, {
                        forceOwnership: t
                    })
                }
                enableMultiTabIndexedDbPersistence(e) {
                    return function (e) {
                        Af(e = sf(e, bf));
                        const t = If(e);
                        if (t._uninitializedComponentsProvider) throw new Tr(Er.FAILED_PRECONDITION, "SDK cache is already specified.");
                        wr("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");
                        const n = e._freezeSettings(),
                            r = new kd;
                        return Ef(t, r, new Nd(r, n.cacheSizeBytes))
                    }(e._delegate)
                }
                clearIndexedDbPersistence(e) {
                    return function (e) {
                        if (e._initialized && !e._terminated) throw new Tr(Er.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
                        const t = new Sr;
                        return e._queue.enqueueAndForgetEvenWhileRestricted((async () => {
                            try {
                                await async function (e) {
                                    if (!os.D()) return Promise.resolve();
                                    const t = e + "main";
                                    await os.delete(t)
                                }(fl(e._databaseId, e._persistenceKey)), t.resolve()
                            } catch (e) {
                                t.reject(e)
                            }
                        })), t.promise
                    }(e._delegate)
                }
            }
            class Xg {
                constructor(e, t, n) {
                    this._delegate = t, this._persistenceProvider = n, this.INTERNAL = {
                        delete: () => this.terminate()
                    }, e instanceof mi || (this._appCompat = e)
                }
                get _databaseId() {
                    return this._delegate._databaseId
                }
                settings(e) {
                    const t = this._delegate._getSettings();
                    e.merge || t.host === e.host || wr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."), e.merge && delete(e = Object.assign(Object.assign({}, t), e)).merge, this._delegate._setSettings(e)
                }
                useEmulator(e, t, n = {}) {
                    uf(this._delegate, e, t, n)
                }
                enableNetwork() {
                    return Sf(this._delegate)
                }
                disableNetwork() {
                    return Df(this._delegate)
                }
                enablePersistence(e) {
                    let t = !1,
                        n = !1;
                    return e && (t = !!e.synchronizeTabs, n = !!e.experimentalForceOwningTab, ef("synchronizeTabs", t, "experimentalForceOwningTab", n)), t ? this._persistenceProvider.enableMultiTabIndexedDbPersistence(this) : this._persistenceProvider.enableIndexedDbPersistence(this, n)
                }
                clearPersistence() {
                    return this._persistenceProvider.clearIndexedDbPersistence(this)
                }
                terminate() {
                    return this._appCompat && (this._appCompat._removeServiceInstance("firestore-compat"), this._appCompat._removeServiceInstance("firestore")), this._delegate._delete()
                }
                waitForPendingWrites() {
                    return Tf(this._delegate)
                }
                onSnapshotsInSync(e) {
                    return Vg(this._delegate, e)
                }
                get app() {
                    if (!this._appCompat) throw new Tr("failed-precondition", "Firestore was not initialized using the Firebase SDK. 'app' is not available");
                    return this._appCompat
                }
                collection(e) {
                    try {
                        return new hm(this, ff(this._delegate, e))
                    } catch (e) {
                        throw rm(e, "collection()", "Firestore.collection()")
                    }
                }
                doc(e) {
                    try {
                        return new nm(this, gf(this._delegate, e))
                    } catch (e) {
                        throw rm(e, "doc()", "Firestore.doc()")
                    }
                }
                collectionGroup(e) {
                    try {
                        return new cm(this, function (e, t) {
                            if (e = sf(e, cf), Zd("collectionGroup", "collection id", t), t.indexOf("/") >= 0) throw new Tr(Er.INVALID_ARGUMENT, `Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);
                            return new hf(e, null, function (e) {
                                return new vo($r.emptyPath(), e)
                            }(t))
                        }(this._delegate, e))
                    } catch (e) {
                        throw rm(e, "collectionGroup()", "Firestore.collectionGroup()")
                    }
                }
                runTransaction(e) {
                    return function (e, t, n) {
                        e = sf(e, bf);
                        const r = Object.assign(Object.assign({}, qg), n);
                        return function (e) {
                                if (e.maxAttempts < 1) throw new Tr(Er.INVALID_ARGUMENT, "Max attempts must be at least 1")
                            }(r),
                            function (e, t, n) {
                                const r = new Sr;
                                return e.asyncQueue.enqueueAndForget((async () => {
                                    const s = await Qd(e);
                                    new Pd(e.asyncQueue, s, n, t, r).run()
                                })), r.promise
                            }(If(e), (n => t(new jg(e, n))), r)
                    }(this._delegate, (t => e(new Zg(this, t))))
                }
                batch() {
                    return If(this._delegate), new em(new $g(this._delegate, (e => Ug(this._delegate, e))))
                }
                loadBundle(e) {
                    return function (e, t) {
                        const n = If(e = sf(e, bf)),
                            r = new vf;
                        return Xd(n, e._databaseId, t, r), r
                    }(this._delegate, e)
                }
                namedQuery(e) {
                    return Cf(this._delegate, e).then((e => e ? new cm(this, e) : null))
                }
            }
            class Jg extends Eg {
                constructor(e) {
                    super(), this.firestore = e
                }
                convertBytes(e) {
                    return new Wg(new xf(e))
                }
                convertReference(e) {
                    const t = this.convertDocumentKey(e, this.firestore._databaseId);
                    return nm.forKey(t, this.firestore, null)
                }
            }
            class Zg {
                constructor(e, t) {
                    this._firestore = e, this._delegate = t, this._userDataWriter = new Jg(e)
                }
                get(e) {
                    const t = dm(e);
                    return this._delegate.get(t).then((e => new om(this._firestore, new Cg(this._firestore._delegate, this._userDataWriter, e._key, e._document, e.metadata, t.converter))))
                }
                set(e, t, n) {
                    const r = dm(e);
                    return n ? (Gg("Transaction.set", n), this._delegate.set(r, t, n)) : this._delegate.set(r, t), this
                }
                update(e, t, n, ...r) {
                    const s = dm(e);
                    return 2 === arguments.length ? this._delegate.update(s, t) : this._delegate.update(s, t, n, ...r), this
                }
                delete(e) {
                    const t = dm(e);
                    return this._delegate.delete(t), this
                }
            }
            class em {
                constructor(e) {
                    this._delegate = e
                }
                set(e, t, n) {
                    const r = dm(e);
                    return n ? (Gg("WriteBatch.set", n), this._delegate.set(r, t, n)) : this._delegate.set(r, t), this
                }
                update(e, t, n, ...r) {
                    const s = dm(e);
                    return 2 === arguments.length ? this._delegate.update(s, t) : this._delegate.update(s, t, n, ...r), this
                }
                delete(e) {
                    const t = dm(e);
                    return this._delegate.delete(t), this
                }
                commit() {
                    return this._delegate.commit()
                }
            }
            class tm {
                constructor(e, t, n) {
                    this._firestore = e, this._userDataWriter = t, this._delegate = n
                }
                fromFirestore(e, t) {
                    const n = new Ag(this._firestore._delegate, this._userDataWriter, e._key, e._document, e.metadata, null);
                    return this._delegate.fromFirestore(new am(this._firestore, n), null != t ? t : {})
                }
                toFirestore(e, t) {
                    return t ? this._delegate.toFirestore(e, t) : this._delegate.toFirestore(e)
                }
                static getInstance(e, t) {
                    const n = tm.INSTANCES;
                    let r = n.get(e);
                    r || (r = new WeakMap, n.set(e, r));
                    let s = r.get(t);
                    return s || (s = new tm(e, new Jg(e), t), r.set(t, s)), s
                }
            }
            tm.INSTANCES = new WeakMap;
            class nm {
                constructor(e, t) {
                    this.firestore = e, this._delegate = t, this._userDataWriter = new Jg(e)
                }
                static forPath(e, t, n) {
                    if (e.length % 2 != 0) throw new Tr("invalid-argument", `Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);
                    return new nm(t, new lf(t._delegate, n, new Gr(e)))
                }
                static forKey(e, t, n) {
                    return new nm(t, new lf(t._delegate, n, e))
                }
                get id() {
                    return this._delegate.id
                }
                get parent() {
                    return new hm(this.firestore, this._delegate.parent)
                }
                get path() {
                    return this._delegate.path
                }
                collection(e) {
                    try {
                        return new hm(this.firestore, ff(this._delegate, e))
                    } catch (e) {
                        throw rm(e, "collection()", "DocumentReference.collection()")
                    }
                }
                isEqual(e) {
                    return (e = (0, c.m9)(e)) instanceof lf && mf(this._delegate, e)
                }
                set(e, t) {
                    t = Gg("DocumentReference.set", t);
                    try {
                        return t ? Mg(this._delegate, e, t) : Mg(this._delegate, e)
                    } catch (e) {
                        throw rm(e, "setDoc()", "DocumentReference.set()")
                    }
                }
                update(e, t, ...n) {
                    try {
                        return 1 === arguments.length ? Pg(this._delegate, e) : Pg(this._delegate, e, t, ...n)
                    } catch (e) {
                        throw rm(e, "updateDoc()", "DocumentReference.update()")
                    }
                }
                delete() {
                    return function (e) {
                        return Ug(sf(e.firestore, bf), [new Ca(e._key, ga.none())])
                    }(this._delegate)
                }
                onSnapshot(...e) {
                    const t = sm(e),
                        n = im(e, (e => new om(this.firestore, new Cg(this.firestore._delegate, this._userDataWriter, e._key, e._document, e.metadata, this._delegate.converter))));
                    return Fg(this._delegate, t, n)
                }
                get(e) {
                    let t;
                    return t = "cache" === (null == e ? void 0 : e.source) ? Og(this._delegate) : "server" === (null == e ? void 0 : e.source) ? function (e) {
                        e = sf(e, lf);
                        const t = sf(e.firestore, bf);
                        return Hd(If(t), e._key, {
                            source: "server"
                        }).then((n => Bg(t, e, n)))
                    }(this._delegate) : function (e) {
                        e = sf(e, lf);
                        const t = sf(e.firestore, bf);
                        return Hd(If(t), e._key).then((n => Bg(t, e, n)))
                    }(this._delegate), t.then((e => new om(this.firestore, new Cg(this.firestore._delegate, this._userDataWriter, e._key, e._document, e.metadata, this._delegate.converter))))
                }
                withConverter(e) {
                    return new nm(this.firestore, e ? this._delegate.withConverter(tm.getInstance(this.firestore, e)) : this._delegate.withConverter(null))
                }
            }

            function rm(e, t, n) {
                return e.message = e.message.replace(t, n), e
            }

            function sm(e) {
                for (const t of e)
                    if ("object" == typeof t && !Hg(t)) return t;
                return {}
            }

            function im(e, t) {
                var n, r;
                let s;
                return s = Hg(e[0]) ? e[0] : Hg(e[1]) ? e[1] : "function" == typeof e[0] ? {
                    next: e[0],
                    error: e[1],
                    complete: e[2]
                } : {
                    next: e[1],
                    error: e[2],
                    complete: e[3]
                }, {
                    next: e => {
                        s.next && s.next(t(e))
                    },
                    error: null === (n = s.error) || void 0 === n ? void 0 : n.bind(s),
                    complete: null === (r = s.complete) || void 0 === r ? void 0 : r.bind(s)
                }
            }
            class om {
                constructor(e, t) {
                    this._firestore = e, this._delegate = t
                }
                get ref() {
                    return new nm(this._firestore, this._delegate.ref)
                }
                get id() {
                    return this._delegate.id
                }
                get metadata() {
                    return this._delegate.metadata
                }
                get exists() {
                    return this._delegate.exists()
                }
                data(e) {
                    return this._delegate.data(e)
                }
                get(e, t) {
                    return this._delegate.get(e, t)
                }
                isEqual(e) {
                    return kg(this._delegate, e._delegate)
                }
            }
            class am extends om {
                data(e) {
                    const t = this._delegate.data(e);
                    return function (e, t) {
                        e || br()
                    }(void 0 !== t), t
                }
            }
            class cm {
                constructor(e, t) {
                    this.firestore = e, this._delegate = t, this._userDataWriter = new Jg(e)
                }
                where(e, t, n) {
                    try {
                        return new cm(this.firestore, hg(this._delegate, function (e, t, n) {
                            const r = t,
                                s = ag("where", e);
                            return dg._create(s, r, n)
                        }(e, t, n)))
                    } catch (e) {
                        throw rm(e, /(orderBy|where)\(\)/, "Query.$1()")
                    }
                }
                orderBy(e, t) {
                    try {
                        return new cm(this.firestore, hg(this._delegate, function (e, t = "asc") {
                            const n = t,
                                r = ag("orderBy", e);
                            return gg._create(r, n)
                        }(e, t)))
                    } catch (e) {
                        throw rm(e, /(orderBy|where)\(\)/, "Query.$1()")
                    }
                }
                limit(e) {
                    try {
                        return new cm(this.firestore, hg(this._delegate, function (e) {
                            return of("limit", e), mg._create("limit", e, "F")
                        }(e)))
                    } catch (e) {
                        throw rm(e, "limit()", "Query.limit()")
                    }
                }
                limitToLast(e) {
                    try {
                        return new cm(this.firestore, hg(this._delegate, function (e) {
                            return of("limitToLast", e), mg._create("limitToLast", e, "L")
                        }(e)))
                    } catch (e) {
                        throw rm(e, "limitToLast()", "Query.limitToLast()")
                    }
                }
                startAt(...e) {
                    try {
                        return new cm(this.firestore, hg(this._delegate, function (...e) {
                            return pg._create("startAt", e, !0)
                        }(...e)))
                    } catch (e) {
                        throw rm(e, "startAt()", "Query.startAt()")
                    }
                }
                startAfter(...e) {
                    try {
                        return new cm(this.firestore, hg(this._delegate, function (...e) {
                            return pg._create("startAfter", e, !1)
                        }(...e)))
                    } catch (e) {
                        throw rm(e, "startAfter()", "Query.startAfter()")
                    }
                }
                endBefore(...e) {
                    try {
                        return new cm(this.firestore, hg(this._delegate, function (...e) {
                            return yg._create("endBefore", e, !1)
                        }(...e)))
                    } catch (e) {
                        throw rm(e, "endBefore()", "Query.endBefore()")
                    }
                }
                endAt(...e) {
                    try {
                        return new cm(this.firestore, hg(this._delegate, function (...e) {
                            return yg._create("endAt", e, !0)
                        }(...e)))
                    } catch (e) {
                        throw rm(e, "endAt()", "Query.endAt()")
                    }
                }
                isEqual(e) {
                    return pf(this._delegate, e._delegate)
                }
                get(e) {
                    let t;
                    return t = "cache" === (null == e ? void 0 : e.source) ? Lg(this._delegate) : "server" === (null == e ? void 0 : e.source) ? function (e) {
                        e = sf(e, hf);
                        const t = sf(e.firestore, bf),
                            n = If(t),
                            r = new Rg(t);
                        return Yd(n, e._query, {
                            source: "server"
                        }).then((n => new xg(t, r, e, n)))
                    }(this._delegate) : function (e) {
                        e = sf(e, hf);
                        const t = sf(e.firestore, bf),
                            n = If(t),
                            r = new Rg(t);
                        return cg(e._query), Yd(n, e._query).then((n => new xg(t, r, e, n)))
                    }(this._delegate), t.then((e => new lm(this.firestore, new xg(this.firestore._delegate, this._userDataWriter, this._delegate, e._snapshot))))
                }
                onSnapshot(...e) {
                    const t = sm(e),
                        n = im(e, (e => new lm(this.firestore, new xg(this.firestore._delegate, this._userDataWriter, this._delegate, e._snapshot))));
                    return Fg(this._delegate, t, n)
                }
                withConverter(e) {
                    return new cm(this.firestore, e ? this._delegate.withConverter(tm.getInstance(this.firestore, e)) : this._delegate.withConverter(null))
                }
            }
            class um {
                constructor(e, t) {
                    this._firestore = e, this._delegate = t
                }
                get type() {
                    return this._delegate.type
                }
                get doc() {
                    return new am(this._firestore, this._delegate.doc)
                }
                get oldIndex() {
                    return this._delegate.oldIndex
                }
                get newIndex() {
                    return this._delegate.newIndex
                }
            }
            class lm {
                constructor(e, t) {
                    this._firestore = e, this._delegate = t
                }
                get query() {
                    return new cm(this._firestore, this._delegate.query)
                }
                get metadata() {
                    return this._delegate.metadata
                }
                get size() {
                    return this._delegate.size
                }
                get empty() {
                    return this._delegate.empty
                }
                get docs() {
                    return this._delegate.docs.map((e => new am(this._firestore, e)))
                }
                docChanges(e) {
                    return this._delegate.docChanges(e).map((e => new um(this._firestore, e)))
                }
                forEach(e, t) {
                    this._delegate.forEach((n => {
                        e.call(t, new am(this._firestore, n))
                    }))
                }
                isEqual(e) {
                    return kg(this._delegate, e._delegate)
                }
            }
            class hm extends cm {
                constructor(e, t) {
                    super(e, t), this.firestore = e, this._delegate = t
                }
                get id() {
                    return this._delegate.id
                }
                get path() {
                    return this._delegate.path
                }
                get parent() {
                    const e = this._delegate.parent;
                    return e ? new nm(this.firestore, e) : null
                }
                doc(e) {
                    try {
                        return new nm(this.firestore, void 0 === e ? gf(this._delegate) : gf(this._delegate, e))
                    } catch (e) {
                        throw rm(e, "doc()", "CollectionReference.doc()")
                    }
                }
                add(e) {
                    return function (e, t) {
                        const n = sf(e.firestore, bf),
                            r = gf(e),
                            s = Tg(e.converter, t);
                        return Ug(n, [Bf(Uf(e.firestore), "addDoc", r._key, s, null !== e.converter, {}).toMutation(r._key, ga.exists(!1))]).then((() => r))
                    }(this._delegate, e).then((e => new nm(this.firestore, e)))
                }
                isEqual(e) {
                    return mf(this._delegate, e._delegate)
                }
                withConverter(e) {
                    return new hm(this.firestore, e ? this._delegate.withConverter(tm.getInstance(this.firestore, e)) : this._delegate.withConverter(null))
                }
            }

            function dm(e) {
                return sf(e, lf)
            }
            class fm {
                constructor(...e) {
                    this._delegate = new Nf(...e)
                }
                static documentId() {
                    return new fm(jr.keyField().canonicalString())
                }
                isEqual(e) {
                    return (e = (0, c.m9)(e)) instanceof Nf && this._delegate._internalPath.isEqual(e._internalPath)
                }
            }
            class gm {
                constructor(e) {
                    this._delegate = e
                }
                static serverTimestamp() {
                    const e = new zf("serverTimestamp");
                    return e._methodName = "FieldValue.serverTimestamp", new gm(e)
                }
                static delete() {
                    const e = new qf("deleteField");
                    return e._methodName = "FieldValue.delete", new gm(e)
                }
                static arrayUnion(...e) {
                    const t = function (...e) {
                        return new jf("arrayUnion", e)
                    }(...e);
                    return t._methodName = "FieldValue.arrayUnion", new gm(t)
                }
                static arrayRemove(...e) {
                    const t = function (...e) {
                        return new Gf("arrayRemove", e)
                    }(...e);
                    return t._methodName = "FieldValue.arrayRemove", new gm(t)
                }
                static increment(e) {
                    const t = function (e) {
                        return new Kf("increment", e)
                    }(e);
                    return t._methodName = "FieldValue.increment", new gm(t)
                }
                isEqual(e) {
                    return this._delegate.isEqual(e._delegate)
                }
            }
            const mm = {
                Firestore: Xg,
                GeoPoint: Rf,
                Timestamp: Ur,
                Blob: Wg,
                Transaction: Zg,
                WriteBatch: em,
                DocumentReference: nm,
                DocumentSnapshot: om,
                Query: cm,
                QueryDocumentSnapshot: am,
                QuerySnapshot: lm,
                CollectionReference: hm,
                FieldPath: fm,
                FieldValue: gm,
                setLogLevel: function (e) {
                    ! function (e) {
                        gr.setLogLevel(e)
                    }(e)
                },
                CACHE_SIZE_UNLIMITED: -1
            };
            var pm, ym;
            pm = s.Z, ym = (e, t) => new Xg(e, t, new Yg), pm.INTERNAL.registerComponent(new o.wA("firestore-compat", (e => {
                const t = e.getProvider("app-compat").getImmediate(),
                    n = e.getProvider("firestore").getImmediate();
                return ym(t, n)
            }), "PUBLIC").setServiceProps(Object.assign({}, mm))), pm.registerVersion("@firebase/firestore-compat", "0.3.6")
        },
        4444: (e, t, n) => {
            n.d(t, {
                BH: () => g,
                G6: () => E,
                L: () => o,
                LL: () => C,
                Pz: () => f,
                Sg: () => m,
                UG: () => w,
                ZB: () => c,
                ZR: () => D,
                aH: () => d,
                b$: () => I,
                eu: () => S,
                hl: () => T,
                jU: () => v,
                m9: () => U,
                ne: () => P,
                pd: () => M,
                q4: () => h,
                r3: () => x,
                ru: () => b,
                tV: () => a,
                uI: () => y,
                vZ: () => k,
                w1: () => _,
                xO: () => O,
                xb: () => N,
                z$: () => p,
                zd: () => L
            });
            const r = function (e) {
                    const t = [];
                    let n = 0;
                    for (let r = 0; r < e.length; r++) {
                        let s = e.charCodeAt(r);
                        s < 128 ? t[n++] = s : s < 2048 ? (t[n++] = s >> 6 | 192, t[n++] = 63 & s | 128) : 55296 == (64512 & s) && r + 1 < e.length && 56320 == (64512 & e.charCodeAt(r + 1)) ? (s = 65536 + ((1023 & s) << 10) + (1023 & e.charCodeAt(++r)), t[n++] = s >> 18 | 240, t[n++] = s >> 12 & 63 | 128, t[n++] = s >> 6 & 63 | 128, t[n++] = 63 & s | 128) : (t[n++] = s >> 12 | 224, t[n++] = s >> 6 & 63 | 128, t[n++] = 63 & s | 128)
                    }
                    return t
                },
                s = {
                    byteToCharMap_: null,
                    charToByteMap_: null,
                    byteToCharMapWebSafe_: null,
                    charToByteMapWebSafe_: null,
                    ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                    get ENCODED_VALS() {
                        return this.ENCODED_VALS_BASE + "+/="
                    },
                    get ENCODED_VALS_WEBSAFE() {
                        return this.ENCODED_VALS_BASE + "-_."
                    },
                    HAS_NATIVE_SUPPORT: "function" == typeof atob,
                    encodeByteArray(e, t) {
                        if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
                        this.init_();
                        const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                            r = [];
                        for (let t = 0; t < e.length; t += 3) {
                            const s = e[t],
                                i = t + 1 < e.length,
                                o = i ? e[t + 1] : 0,
                                a = t + 2 < e.length,
                                c = a ? e[t + 2] : 0,
                                u = s >> 2,
                                l = (3 & s) << 4 | o >> 4;
                            let h = (15 & o) << 2 | c >> 6,
                                d = 63 & c;
                            a || (d = 64, i || (h = 64)), r.push(n[u], n[l], n[h], n[d])
                        }
                        return r.join("")
                    },
                    encodeString(e, t) {
                        return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(r(e), t)
                    },
                    decodeString(e, t) {
                        return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : function (e) {
                            const t = [];
                            let n = 0,
                                r = 0;
                            for (; n < e.length;) {
                                const s = e[n++];
                                if (s < 128) t[r++] = String.fromCharCode(s);
                                else if (s > 191 && s < 224) {
                                    const i = e[n++];
                                    t[r++] = String.fromCharCode((31 & s) << 6 | 63 & i)
                                } else if (s > 239 && s < 365) {
                                    const i = ((7 & s) << 18 | (63 & e[n++]) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) - 65536;
                                    t[r++] = String.fromCharCode(55296 + (i >> 10)), t[r++] = String.fromCharCode(56320 + (1023 & i))
                                } else {
                                    const i = e[n++],
                                        o = e[n++];
                                    t[r++] = String.fromCharCode((15 & s) << 12 | (63 & i) << 6 | 63 & o)
                                }
                            }
                            return t.join("")
                        }(this.decodeStringToByteArray(e, t))
                    },
                    decodeStringToByteArray(e, t) {
                        this.init_();
                        const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                            r = [];
                        for (let t = 0; t < e.length;) {
                            const s = n[e.charAt(t++)],
                                o = t < e.length ? n[e.charAt(t)] : 0;
                            ++t;
                            const a = t < e.length ? n[e.charAt(t)] : 64;
                            ++t;
                            const c = t < e.length ? n[e.charAt(t)] : 64;
                            if (++t, null == s || null == o || null == a || null == c) throw new i;
                            const u = s << 2 | o >> 4;
                            if (r.push(u), 64 !== a) {
                                const e = o << 4 & 240 | a >> 2;
                                if (r.push(e), 64 !== c) {
                                    const e = a << 6 & 192 | c;
                                    r.push(e)
                                }
                            }
                        }
                        return r
                    },
                    init_() {
                        if (!this.byteToCharMap_) {
                            this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                            for (let e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
                        }
                    }
                };
            class i extends Error {
                constructor() {
                    super(...arguments), this.name = "DecodeBase64StringError"
                }
            }
            const o = function (e) {
                    return function (e) {
                        const t = r(e);
                        return s.encodeByteArray(t, !0)
                    }(e).replace(/\./g, "")
                },
                a = function (e) {
                    try {
                        return s.decodeString(e, !0)
                    } catch (e) {
                        console.error("base64Decode failed: ", e)
                    }
                    return null
                };

            function c(e, t) {
                if (!(t instanceof Object)) return t;
                switch (t.constructor) {
                    case Date:
                        return new Date(t.getTime());
                    case Object:
                        void 0 === e && (e = {});
                        break;
                    case Array:
                        e = [];
                        break;
                    default:
                        return t
                }
                for (const n in t) t.hasOwnProperty(n) && "__proto__" !== n && (e[n] = c(e[n], t[n]));
                return e
            }
            const u = () => function () {
                    if ("undefined" != typeof self) return self;
                    if ("undefined" != typeof window) return window;
                    if (void 0 !== n.g) return n.g;
                    throw new Error("Unable to locate global object.")
                }().__FIREBASE_DEFAULTS__,
                l = () => {
                    try {
                        return u() || (() => {
                            if ("undefined" == typeof process) return;
                            const e = "MISSING_ENV_VAR".__FIREBASE_DEFAULTS__;
                            return e ? JSON.parse(e) : void 0
                        })() || (() => {
                            if ("undefined" == typeof document) return;
                            let e;
                            try {
                                e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
                            } catch (e) {
                                return
                            }
                            const t = e && a(e[1]);
                            return t && JSON.parse(t)
                        })()
                    } catch (e) {
                        return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)
                    }
                },
                h = e => {
                    var t, n;
                    return null === (n = null === (t = l()) || void 0 === t ? void 0 : t.emulatorHosts) || void 0 === n ? void 0 : n[e]
                },
                d = () => {
                    var e;
                    return null === (e = l()) || void 0 === e ? void 0 : e.config
                },
                f = e => {
                    var t;
                    return null === (t = l()) || void 0 === t ? void 0 : t[`_${e}`]
                };
            class g {
                constructor() {
                    this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((e, t) => {
                        this.resolve = e, this.reject = t
                    }))
                }
                wrapCallback(e) {
                    return (t, n) => {
                        t ? this.reject(t) : this.resolve(n), "function" == typeof e && (this.promise.catch((() => {})), 1 === e.length ? e(t) : e(t, n))
                    }
                }
            }

            function m(e, t) {
                if (e.uid) throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
                const n = t || "demo-project",
                    r = e.iat || 0,
                    s = e.sub || e.user_id;
                if (!s) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
                const i = Object.assign({
                    iss: `https://securetoken.google.com/${n}`,
                    aud: n,
                    iat: r,
                    exp: r + 3600,
                    auth_time: r,
                    sub: s,
                    user_id: s,
                    firebase: {
                        sign_in_provider: "custom",
                        identities: {}
                    }
                }, e);
                return [o(JSON.stringify({
                    alg: "none",
                    type: "JWT"
                })), o(JSON.stringify(i)), ""].join(".")
            }

            function p() {
                return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
            }

            function y() {
                return "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p())
            }

            function w() {
                var e;
                const t = null === (e = l()) || void 0 === e ? void 0 : e.forceEnvironment;
                if ("node" === t) return !0;
                if ("browser" === t) return !1;
                try {
                    return "[object process]" === Object.prototype.toString.call(n.g.process)
                } catch (e) {
                    return !1
                }
            }

            function v() {
                return "object" == typeof self && self.self === self
            }

            function b() {
                const e = "object" == typeof chrome ? chrome.runtime : "object" == typeof browser ? browser.runtime : void 0;
                return "object" == typeof e && void 0 !== e.id
            }

            function I() {
                return "object" == typeof navigator && "ReactNative" === navigator.product
            }

            function _() {
                const e = p();
                return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0
            }

            function E() {
                return !w() && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")
            }

            function T() {
                try {
                    return "object" == typeof indexedDB
                } catch (e) {
                    return !1
                }
            }

            function S() {
                return new Promise(((e, t) => {
                    try {
                        let n = !0;
                        const r = "validate-browser-context-for-indexeddb-analytics-module",
                            s = self.indexedDB.open(r);
                        s.onsuccess = () => {
                            s.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0)
                        }, s.onupgradeneeded = () => {
                            n = !1
                        }, s.onerror = () => {
                            var e;
                            t((null === (e = s.error) || void 0 === e ? void 0 : e.message) || "")
                        }
                    } catch (e) {
                        t(e)
                    }
                }))
            }
            class D extends Error {
                constructor(e, t, n) {
                    super(t), this.code = e, this.customData = n, this.name = "FirebaseError", Object.setPrototypeOf(this, D.prototype), Error.captureStackTrace && Error.captureStackTrace(this, C.prototype.create)
                }
            }
            class C {
                constructor(e, t, n) {
                    this.service = e, this.serviceName = t, this.errors = n
                }
                create(e, ...t) {
                    const n = t[0] || {},
                        r = `${this.service}/${e}`,
                        s = this.errors[e],
                        i = s ? function (e, t) {
                            return e.replace(A, ((e, n) => {
                                const r = t[n];
                                return null != r ? String(r) : `<${n}?>`
                            }))
                        }(s, n) : "Error",
                        o = `${this.serviceName}: ${i} (${r}).`;
                    return new D(r, o, n)
                }
            }
            const A = /\{\$([^}]+)}/g;

            function x(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function N(e) {
                for (const t in e)
                    if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
                return !0
            }

            function k(e, t) {
                if (e === t) return !0;
                const n = Object.keys(e),
                    r = Object.keys(t);
                for (const s of n) {
                    if (!r.includes(s)) return !1;
                    const n = e[s],
                        i = t[s];
                    if (R(n) && R(i)) {
                        if (!k(n, i)) return !1
                    } else if (n !== i) return !1
                }
                for (const e of r)
                    if (!n.includes(e)) return !1;
                return !0
            }

            function R(e) {
                return null !== e && "object" == typeof e
            }

            function O(e) {
                const t = [];
                for (const [n, r] of Object.entries(e)) Array.isArray(r) ? r.forEach((e => {
                    t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e))
                })) : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
                return t.length ? "&" + t.join("&") : ""
            }

            function L(e) {
                const t = {};
                return e.replace(/^\?/, "").split("&").forEach((e => {
                    if (e) {
                        const [n, r] = e.split("=");
                        t[decodeURIComponent(n)] = decodeURIComponent(r)
                    }
                })), t
            }

            function M(e) {
                const t = e.indexOf("?");
                if (!t) return "";
                const n = e.indexOf("#", t);
                return e.substring(t, n > 0 ? n : void 0)
            }

            function P(e, t) {
                const n = new F(e, t);
                return n.subscribe.bind(n)
            }
            class F {
                constructor(e, t) {
                    this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then((() => {
                        e(this)
                    })).catch((e => {
                        this.error(e)
                    }))
                }
                next(e) {
                    this.forEachObserver((t => {
                        t.next(e)
                    }))
                }
                error(e) {
                    this.forEachObserver((t => {
                        t.error(e)
                    })), this.close(e)
                }
                complete() {
                    this.forEachObserver((e => {
                        e.complete()
                    })), this.close()
                }
                subscribe(e, t, n) {
                    let r;
                    if (void 0 === e && void 0 === t && void 0 === n) throw new Error("Missing Observer.");
                    r = function (e, t) {
                        if ("object" != typeof e || null === e) return !1;
                        for (const n of t)
                            if (n in e && "function" == typeof e[n]) return !0;
                        return !1
                    }(e, ["next", "error", "complete"]) ? e : {
                        next: e,
                        error: t,
                        complete: n
                    }, void 0 === r.next && (r.next = V), void 0 === r.error && (r.error = V), void 0 === r.complete && (r.complete = V);
                    const s = this.unsubscribeOne.bind(this, this.observers.length);
                    return this.finalized && this.task.then((() => {
                        try {
                            this.finalError ? r.error(this.finalError) : r.complete()
                        } catch (e) {}
                    })), this.observers.push(r), s
                }
                unsubscribeOne(e) {
                    void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
                }
                forEachObserver(e) {
                    if (!this.finalized)
                        for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e)
                }
                sendOne(e, t) {
                    this.task.then((() => {
                        if (void 0 !== this.observers && void 0 !== this.observers[e]) try {
                            t(this.observers[e])
                        } catch (e) {
                            "undefined" != typeof console && console.error && console.error(e)
                        }
                    }))
                }
                close(e) {
                    this.finalized || (this.finalized = !0, void 0 !== e && (this.finalError = e), this.task.then((() => {
                        this.observers = void 0, this.onNoObservers = void 0
                    })))
                }
            }

            function V() {}

            function U(e) {
                return e && e._delegate ? e._delegate : e
            }
        },
        8180: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(4444),
                s = n(8463),
                i = n(2238),
                o = n(3333);
            class a {
                constructor(e, t) {
                    this._delegate = e, this.firebase = t, (0, i._addComponent)(e, new s.wA("app-compat", (() => this), "PUBLIC")), this.container = e.container
                }
                get automaticDataCollectionEnabled() {
                    return this._delegate.automaticDataCollectionEnabled
                }
                set automaticDataCollectionEnabled(e) {
                    this._delegate.automaticDataCollectionEnabled = e
                }
                get name() {
                    return this._delegate.name
                }
                get options() {
                    return this._delegate.options
                }
                delete() {
                    return new Promise((e => {
                        this._delegate.checkDestroyed(), e()
                    })).then((() => (this.firebase.INTERNAL.removeApp(this.name), (0, i.deleteApp)(this._delegate))))
                }
                _getService(e, t = i._DEFAULT_ENTRY_NAME) {
                    var n;
                    this._delegate.checkDestroyed();
                    const r = this._delegate.container.getProvider(e);
                    return r.isInitialized() || "EXPLICIT" !== (null === (n = r.getComponent()) || void 0 === n ? void 0 : n.instantiationMode) || r.initialize(), r.getImmediate({
                        identifier: t
                    })
                }
                _removeServiceInstance(e, t = i._DEFAULT_ENTRY_NAME) {
                    this._delegate.container.getProvider(e).clearInstance(t)
                }
                _addComponent(e) {
                    (0, i._addComponent)(this._delegate, e)
                }
                _addOrOverwriteComponent(e) {
                    (0, i._addOrOverwriteComponent)(this._delegate, e)
                }
                toJSON() {
                    return {
                        name: this.name,
                        automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
                        options: this.options
                    }
                }
            }
            const c = {
                    "no-app": "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
                    "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance."
                },
                u = new r.LL("app-compat", "Firebase", c);
            const l = function e() {
                    const t = function (e) {
                        const t = {},
                            n = {
                                __esModule: !0,
                                initializeApp: function (s, o = {}) {
                                    const a = i.initializeApp(s, o);
                                    if ((0, r.r3)(t, a.name)) return t[a.name];
                                    const c = new e(a, n);
                                    return t[a.name] = c, c
                                },
                                app: s,
                                registerVersion: i.registerVersion,
                                setLogLevel: i.setLogLevel,
                                onLog: i.onLog,
                                apps: null,
                                SDK_VERSION: i.SDK_VERSION,
                                INTERNAL: {
                                    registerComponent: function (t) {
                                        const o = t.name,
                                            a = o.replace("-compat", "");
                                        if (i._registerComponent(t) && "PUBLIC" === t.type) {
                                            const i = (e = s()) => {
                                                if ("function" != typeof e[a]) throw u.create("invalid-app-argument", {
                                                    appName: o
                                                });
                                                return e[a]()
                                            };
                                            void 0 !== t.serviceProps && (0, r.ZB)(i, t.serviceProps), n[a] = i, e.prototype[a] = function (...e) {
                                                return this._getService.bind(this, o).apply(this, t.multipleInstances ? e : [])
                                            }
                                        }
                                        return "PUBLIC" === t.type ? n[a] : null
                                    },
                                    removeApp: function (e) {
                                        delete t[e]
                                    },
                                    useAsService: function (e, t) {
                                        if ("serverAuth" === t) return null;
                                        return t
                                    },
                                    modularAPIs: i
                                }
                            };

                        function s(e) {
                            if (e = e || i._DEFAULT_ENTRY_NAME, !(0, r.r3)(t, e)) throw u.create("no-app", {
                                appName: e
                            });
                            return t[e]
                        }
                        return n.default = n, Object.defineProperty(n, "apps", {
                            get: function () {
                                return Object.keys(t).map((e => t[e]))
                            }
                        }), s.App = e, n
                    }(a);
                    return t.INTERNAL = Object.assign(Object.assign({}, t.INTERNAL), {
                        createFirebaseNamespace: e,
                        extendNamespace: function (e) {
                            (0, r.ZB)(t, e)
                        },
                        createSubscribe: r.ne,
                        ErrorFactory: r.LL,
                        deepExtend: r.ZB
                    }), t
                }(),
                h = new o.Yd("@firebase/app-compat");
            if ((0, r.jU)() && void 0 !== self.firebase) {
                h.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
                const e = self.firebase.SDK_VERSION;
                e && e.indexOf("LITE") >= 0 && h.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")
            }
            const d = l;
            var f;
            (0, i.registerVersion)("@firebase/app-compat", "0.2.7", f)
        },
        2238: (e, t, n) => {
            n.r(t), n.d(t, {
                FirebaseError: () => i.ZR,
                SDK_VERSION: () => T,
                _DEFAULT_ENTRY_NAME: () => h,
                _addComponent: () => m,
                _addOrOverwriteComponent: () => p,
                _apps: () => f,
                _clearComponents: () => b,
                _components: () => g,
                _getProvider: () => w,
                _registerComponent: () => y,
                _removeServiceInstance: () => v,
                deleteApp: () => A,
                getApp: () => D,
                getApps: () => C,
                initializeApp: () => S,
                onLog: () => N,
                registerVersion: () => x,
                setLogLevel: () => k
            });
            var r = n(8463),
                s = n(3333),
                i = n(4444),
                o = n(6269);
            class a {
                constructor(e) {
                    this.container = e
                }
                getPlatformInfoString() {
                    return this.container.getProviders().map((e => {
                        if (function (e) {
                                const t = e.getComponent();
                                return "VERSION" === (null == t ? void 0 : t.type)
                            }(e)) {
                            const t = e.getImmediate();
                            return `${t.library}/${t.version}`
                        }
                        return null
                    })).filter((e => e)).join(" ")
                }
            }
            const c = "@firebase/app",
                u = "0.9.7",
                l = new s.Yd("@firebase/app"),
                h = "[DEFAULT]",
                d = {
                    [c]: "fire-core",
                    "@firebase/app-compat": "fire-core-compat",
                    "@firebase/analytics": "fire-analytics",
                    "@firebase/analytics-compat": "fire-analytics-compat",
                    "@firebase/app-check": "fire-app-check",
                    "@firebase/app-check-compat": "fire-app-check-compat",
                    "@firebase/auth": "fire-auth",
                    "@firebase/auth-compat": "fire-auth-compat",
                    "@firebase/database": "fire-rtdb",
                    "@firebase/database-compat": "fire-rtdb-compat",
                    "@firebase/functions": "fire-fn",
                    "@firebase/functions-compat": "fire-fn-compat",
                    "@firebase/installations": "fire-iid",
                    "@firebase/installations-compat": "fire-iid-compat",
                    "@firebase/messaging": "fire-fcm",
                    "@firebase/messaging-compat": "fire-fcm-compat",
                    "@firebase/performance": "fire-perf",
                    "@firebase/performance-compat": "fire-perf-compat",
                    "@firebase/remote-config": "fire-rc",
                    "@firebase/remote-config-compat": "fire-rc-compat",
                    "@firebase/storage": "fire-gcs",
                    "@firebase/storage-compat": "fire-gcs-compat",
                    "@firebase/firestore": "fire-fst",
                    "@firebase/firestore-compat": "fire-fst-compat",
                    "fire-js": "fire-js",
                    firebase: "fire-js-all"
                },
                f = new Map,
                g = new Map;

            function m(e, t) {
                try {
                    e.container.addComponent(t)
                } catch (n) {
                    l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n)
                }
            }

            function p(e, t) {
                e.container.addOrOverwriteComponent(t)
            }

            function y(e) {
                const t = e.name;
                if (g.has(t)) return l.debug(`There were multiple attempts to register component ${t}.`), !1;
                g.set(t, e);
                for (const t of f.values()) m(t, e);
                return !0
            }

            function w(e, t) {
                const n = e.container.getProvider("heartbeat").getImmediate({
                    optional: !0
                });
                return n && n.triggerHeartbeat(), e.container.getProvider(t)
            }

            function v(e, t, n = h) {
                w(e, t).clearInstance(n)
            }

            function b() {
                g.clear()
            }
            const I = {
                    "no-app": "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
                    "bad-app-name": "Illegal App name: '{$appName}",
                    "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
                    "app-deleted": "Firebase App named '{$appName}' already deleted",
                    "no-options": "Need to provide options, when not being deployed to hosting via source.",
                    "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
                    "invalid-log-argument": "First argument to `onLog` must be null or a function.",
                    "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
                    "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
                    "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
                    "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
                },
                _ = new i.LL("app", "Firebase", I);
            class E {
                constructor(e, t, n) {
                    this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new r.wA("app", (() => this), "PUBLIC"))
                }
                get automaticDataCollectionEnabled() {
                    return this.checkDestroyed(), this._automaticDataCollectionEnabled
                }
                set automaticDataCollectionEnabled(e) {
                    this.checkDestroyed(), this._automaticDataCollectionEnabled = e
                }
                get name() {
                    return this.checkDestroyed(), this._name
                }
                get options() {
                    return this.checkDestroyed(), this._options
                }
                get config() {
                    return this.checkDestroyed(), this._config
                }
                get container() {
                    return this._container
                }
                get isDeleted() {
                    return this._isDeleted
                }
                set isDeleted(e) {
                    this._isDeleted = e
                }
                checkDestroyed() {
                    if (this.isDeleted) throw _.create("app-deleted", {
                        appName: this._name
                    })
                }
            }
            const T = "9.19.1";

            function S(e, t = {}) {
                let n = e;
                if ("object" != typeof t) {
                    t = {
                        name: t
                    }
                }
                const s = Object.assign({
                        name: h,
                        automaticDataCollectionEnabled: !1
                    }, t),
                    o = s.name;
                if ("string" != typeof o || !o) throw _.create("bad-app-name", {
                    appName: String(o)
                });
                if (n || (n = (0, i.aH)()), !n) throw _.create("no-options");
                const a = f.get(o);
                if (a) {
                    if ((0, i.vZ)(n, a.options) && (0, i.vZ)(s, a.config)) return a;
                    throw _.create("duplicate-app", {
                        appName: o
                    })
                }
                const c = new r.H0(o);
                for (const e of g.values()) c.addComponent(e);
                const u = new E(n, s, c);
                return f.set(o, u), u
            }

            function D(e = h) {
                const t = f.get(e);
                if (!t && e === h) return S();
                if (!t) throw _.create("no-app", {
                    appName: e
                });
                return t
            }

            function C() {
                return Array.from(f.values())
            }
            async function A(e) {
                const t = e.name;
                f.has(t) && (f.delete(t), await Promise.all(e.container.getProviders().map((e => e.delete()))), e.isDeleted = !0)
            }

            function x(e, t, n) {
                var s;
                let i = null !== (s = d[e]) && void 0 !== s ? s : e;
                n && (i += `-${n}`);
                const o = i.match(/\s|\//),
                    a = t.match(/\s|\//);
                if (o || a) {
                    const e = [`Unable to register library "${i}" with version "${t}":`];
                    return o && e.push(`library name "${i}" contains illegal characters (whitespace or "/")`), o && a && e.push("and"), a && e.push(`version name "${t}" contains illegal characters (whitespace or "/")`), void l.warn(e.join(" "))
                }
                y(new r.wA(`${i}-version`, (() => ({
                    library: i,
                    version: t
                })), "VERSION"))
            }

            function N(e, t) {
                if (null !== e && "function" != typeof e) throw _.create("invalid-log-argument");
                (0, s.Am)(e, t)
            }

            function k(e) {
                (0, s.Ub)(e)
            }
            const R = "firebase-heartbeat-database",
                O = 1,
                L = "firebase-heartbeat-store";
            let M = null;

            function P() {
                return M || (M = (0, o.X3)(R, O, {
                    upgrade: (e, t) => {
                        if (0 === t) e.createObjectStore(L)
                    }
                }).catch((e => {
                    throw _.create("idb-open", {
                        originalErrorMessage: e.message
                    })
                }))), M
            }
            async function F(e, t) {
                try {
                    const n = (await P()).transaction(L, "readwrite"),
                        r = n.objectStore(L);
                    return await r.put(t, V(e)), n.done
                } catch (e) {
                    if (e instanceof i.ZR) l.warn(e.message);
                    else {
                        const t = _.create("idb-set", {
                            originalErrorMessage: null == e ? void 0 : e.message
                        });
                        l.warn(t.message)
                    }
                }
            }

            function V(e) {
                return `${e.name}!${e.options.appId}`
            }
            class U {
                constructor(e) {
                    this.container = e, this._heartbeatsCache = null;
                    const t = this.container.getProvider("app").getImmediate();
                    this._storage = new q(t), this._heartbeatsCachePromise = this._storage.read().then((e => (this._heartbeatsCache = e, e)))
                }
                async triggerHeartbeat() {
                    const e = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
                        t = B();
                    if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== t && !this._heartbeatsCache.heartbeats.some((e => e.date === t))) return this._heartbeatsCache.heartbeats.push({
                        date: t,
                        agent: e
                    }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((e => {
                        const t = new Date(e.date).valueOf();
                        return Date.now() - t <= 2592e6
                    })), this._storage.overwrite(this._heartbeatsCache)
                }
                async getHeartbeatsHeader() {
                    if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null === this._heartbeatsCache || 0 === this._heartbeatsCache.heartbeats.length) return "";
                    const e = B(),
                        {
                            heartbeatsToSend: t,
                            unsentEntries: n
                        } = function (e, t = 1024) {
                            const n = [];
                            let r = e.slice();
                            for (const s of e) {
                                const e = n.find((e => e.agent === s.agent));
                                if (e) {
                                    if (e.dates.push(s.date), $(n) > t) {
                                        e.dates.pop();
                                        break
                                    }
                                } else if (n.push({
                                        agent: s.agent,
                                        dates: [s.date]
                                    }), $(n) > t) {
                                    n.pop();
                                    break
                                }
                                r = r.slice(1)
                            }
                            return {
                                heartbeatsToSend: n,
                                unsentEntries: r
                            }
                        }(this._heartbeatsCache.heartbeats),
                        r = (0, i.L)(JSON.stringify({
                            version: 2,
                            heartbeats: t
                        }));
                    return this._heartbeatsCache.lastSentHeartbeatDate = e, n.length > 0 ? (this._heartbeatsCache.heartbeats = n, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), r
                }
            }

            function B() {
                return (new Date).toISOString().substring(0, 10)
            }
            class q {
                constructor(e) {
                    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
                }
                async runIndexedDBEnvironmentCheck() {
                    return !!(0, i.hl)() && (0, i.eu)().then((() => !0)).catch((() => !1))
                }
                async read() {
                    if (await this._canUseIndexedDBPromise) {
                        return await async function (e) {
                            try {
                                return (await P()).transaction(L).objectStore(L).get(V(e))
                            } catch (e) {
                                if (e instanceof i.ZR) l.warn(e.message);
                                else {
                                    const t = _.create("idb-get", {
                                        originalErrorMessage: null == e ? void 0 : e.message
                                    });
                                    l.warn(t.message)
                                }
                            }
                        }(this.app) || {
                            heartbeats: []
                        }
                    }
                    return {
                        heartbeats: []
                    }
                }
                async overwrite(e) {
                    var t;
                    if (await this._canUseIndexedDBPromise) {
                        const n = await this.read();
                        return F(this.app, {
                            lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
                            heartbeats: e.heartbeats
                        })
                    }
                }
                async add(e) {
                    var t;
                    if (await this._canUseIndexedDBPromise) {
                        const n = await this.read();
                        return F(this.app, {
                            lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
                            heartbeats: [...n.heartbeats, ...e.heartbeats]
                        })
                    }
                }
            }

            function $(e) {
                return (0, i.L)(JSON.stringify({
                    version: 2,
                    heartbeats: e
                })).length
            }
            var z;
            z = "", y(new r.wA("platform-logger", (e => new a(e)), "PRIVATE")), y(new r.wA("heartbeat", (e => new U(e)), "PRIVATE")), x(c, u, z), x(c, u, "esm2017"), x("fire-js", "")
        },
        8463: (e, t, n) => {
            n.d(t, {
                H0: () => a,
                wA: () => s
            });
            var r = n(4444);
            class s {
                constructor(e, t, n) {
                    this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
                }
                setInstantiationMode(e) {
                    return this.instantiationMode = e, this
                }
                setMultipleInstances(e) {
                    return this.multipleInstances = e, this
                }
                setServiceProps(e) {
                    return this.serviceProps = e, this
                }
                setInstanceCreatedCallback(e) {
                    return this.onInstanceCreated = e, this
                }
            }
            const i = "[DEFAULT]";
            class o {
                constructor(e, t) {
                    this.name = e, this.container = t, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
                }
                get(e) {
                    const t = this.normalizeInstanceIdentifier(e);
                    if (!this.instancesDeferred.has(t)) {
                        const e = new r.BH;
                        if (this.instancesDeferred.set(t, e), this.isInitialized(t) || this.shouldAutoInitialize()) try {
                            const n = this.getOrInitializeService({
                                instanceIdentifier: t
                            });
                            n && e.resolve(n)
                        } catch (e) {}
                    }
                    return this.instancesDeferred.get(t).promise
                }
                getImmediate(e) {
                    var t;
                    const n = this.normalizeInstanceIdentifier(null == e ? void 0 : e.identifier),
                        r = null !== (t = null == e ? void 0 : e.optional) && void 0 !== t && t;
                    if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
                        if (r) return null;
                        throw Error(`Service ${this.name} is not available`)
                    }
                    try {
                        return this.getOrInitializeService({
                            instanceIdentifier: n
                        })
                    } catch (e) {
                        if (r) return null;
                        throw e
                    }
                }
                getComponent() {
                    return this.component
                }
                setComponent(e) {
                    if (e.name !== this.name) throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
                    if (this.component) throw Error(`Component for ${this.name} has already been provided`);
                    if (this.component = e, this.shouldAutoInitialize()) {
                        if (function (e) {
                                return "EAGER" === e.instantiationMode
                            }(e)) try {
                            this.getOrInitializeService({
                                instanceIdentifier: i
                            })
                        } catch (e) {}
                        for (const [e, t] of this.instancesDeferred.entries()) {
                            const n = this.normalizeInstanceIdentifier(e);
                            try {
                                const e = this.getOrInitializeService({
                                    instanceIdentifier: n
                                });
                                t.resolve(e)
                            } catch (e) {}
                        }
                    }
                }
                clearInstance(e = i) {
                    this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
                }
                async delete() {
                    const e = Array.from(this.instances.values());
                    await Promise.all([...e.filter((e => "INTERNAL" in e)).map((e => e.INTERNAL.delete())), ...e.filter((e => "_delete" in e)).map((e => e._delete()))])
                }
                isComponentSet() {
                    return null != this.component
                }
                isInitialized(e = i) {
                    return this.instances.has(e)
                }
                getOptions(e = i) {
                    return this.instancesOptions.get(e) || {}
                }
                initialize(e = {}) {
                    const {
                        options: t = {}
                    } = e, n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
                    if (this.isInitialized(n)) throw Error(`${this.name}(${n}) has already been initialized`);
                    if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
                    const r = this.getOrInitializeService({
                        instanceIdentifier: n,
                        options: t
                    });
                    for (const [e, t] of this.instancesDeferred.entries()) {
                        n === this.normalizeInstanceIdentifier(e) && t.resolve(r)
                    }
                    return r
                }
                onInit(e, t) {
                    var n;
                    const r = this.normalizeInstanceIdentifier(t),
                        s = null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n ? n : new Set;
                    s.add(e), this.onInitCallbacks.set(r, s);
                    const i = this.instances.get(r);
                    return i && e(i, r), () => {
                        s.delete(e)
                    }
                }
                invokeOnInitCallbacks(e, t) {
                    const n = this.onInitCallbacks.get(t);
                    if (n)
                        for (const r of n) try {
                            r(e, t)
                        } catch (e) {}
                }
                getOrInitializeService({
                    instanceIdentifier: e,
                    options: t = {}
                }) {
                    let n = this.instances.get(e);
                    if (!n && this.component && (n = this.component.instanceFactory(this.container, {
                            instanceIdentifier: (r = e, r === i ? void 0 : r),
                            options: t
                        }), this.instances.set(e, n), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(n, e), this.component.onInstanceCreated)) try {
                        this.component.onInstanceCreated(this.container, e, n)
                    } catch (e) {}
                    var r;
                    return n || null
                }
                normalizeInstanceIdentifier(e = i) {
                    return this.component ? this.component.multipleInstances ? e : i : e
                }
                shouldAutoInitialize() {
                    return !!this.component && "EXPLICIT" !== this.component.instantiationMode
                }
            }
            class a {
                constructor(e) {
                    this.name = e, this.providers = new Map
                }
                addComponent(e) {
                    const t = this.getProvider(e.name);
                    if (t.isComponentSet()) throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
                    t.setComponent(e)
                }
                addOrOverwriteComponent(e) {
                    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
                }
                getProvider(e) {
                    if (this.providers.has(e)) return this.providers.get(e);
                    const t = new o(e, this);
                    return this.providers.set(e, t), t
                }
                getProviders() {
                    return Array.from(this.providers.values())
                }
            }
        },
        3333: (e, t, n) => {
            n.d(t, {
                Am: () => h,
                Ub: () => l,
                Yd: () => u,
                in: () => s
            });
            const r = [];
            var s;
            ! function (e) {
                e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT"
            }(s || (s = {}));
            const i = {
                    debug: s.DEBUG,
                    verbose: s.VERBOSE,
                    info: s.INFO,
                    warn: s.WARN,
                    error: s.ERROR,
                    silent: s.SILENT
                },
                o = s.INFO,
                a = {
                    [s.DEBUG]: "log",
                    [s.VERBOSE]: "log",
                    [s.INFO]: "info",
                    [s.WARN]: "warn",
                    [s.ERROR]: "error"
                },
                c = (e, t, ...n) => {
                    if (t < e.logLevel) return;
                    const r = (new Date).toISOString(),
                        s = a[t];
                    if (!s) throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);
                    console[s](`[${r}]  ${e.name}:`, ...n)
                };
            class u {
                constructor(e) {
                    this.name = e, this._logLevel = o, this._logHandler = c, this._userLogHandler = null, r.push(this)
                }
                get logLevel() {
                    return this._logLevel
                }
                set logLevel(e) {
                    if (!(e in s)) throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
                    this._logLevel = e
                }
                setLogLevel(e) {
                    this._logLevel = "string" == typeof e ? i[e] : e
                }
                get logHandler() {
                    return this._logHandler
                }
                set logHandler(e) {
                    if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
                    this._logHandler = e
                }
                get userLogHandler() {
                    return this._userLogHandler
                }
                set userLogHandler(e) {
                    this._userLogHandler = e
                }
                debug(...e) {
                    this._userLogHandler && this._userLogHandler(this, s.DEBUG, ...e), this._logHandler(this, s.DEBUG, ...e)
                }
                log(...e) {
                    this._userLogHandler && this._userLogHandler(this, s.VERBOSE, ...e), this._logHandler(this, s.VERBOSE, ...e)
                }
                info(...e) {
                    this._userLogHandler && this._userLogHandler(this, s.INFO, ...e), this._logHandler(this, s.INFO, ...e)
                }
                warn(...e) {
                    this._userLogHandler && this._userLogHandler(this, s.WARN, ...e), this._logHandler(this, s.WARN, ...e)
                }
                error(...e) {
                    this._userLogHandler && this._userLogHandler(this, s.ERROR, ...e), this._logHandler(this, s.ERROR, ...e)
                }
            }

            function l(e) {
                r.forEach((t => {
                    t.setLogLevel(e)
                }))
            }

            function h(e, t) {
                for (const n of r) {
                    let r = null;
                    t && t.level && (r = i[t.level]), n.userLogHandler = null === e ? null : (t, n, ...i) => {
                        const o = i.map((e => {
                            if (null == e) return null;
                            if ("string" == typeof e) return e;
                            if ("number" == typeof e || "boolean" == typeof e) return e.toString();
                            if (e instanceof Error) return e.message;
                            try {
                                return JSON.stringify(e)
                            } catch (e) {
                                return null
                            }
                        })).filter((e => e)).join(" ");
                        n >= (null != r ? r : t.logLevel) && e({
                            level: s[n].toLowerCase(),
                            message: o,
                            args: i,
                            type: t.name
                        })
                    }
                }
            }
        }
    }
]);
//# sourceMappingURL=commons-main-index.esm2017.js.bundle.js.map