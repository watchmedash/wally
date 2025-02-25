function _x(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
})();

function pd(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function $x(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(r) {
        var o = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, o.get ? o : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }), n
}
var rg = {
        exports: {}
    },
    Ua = {},
    og = {
        exports: {}
    },
    ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bs = Symbol.for("react.element"),
    Mx = Symbol.for("react.portal"),
    Ax = Symbol.for("react.fragment"),
    Lx = Symbol.for("react.strict_mode"),
    Ix = Symbol.for("react.profiler"),
    Fx = Symbol.for("react.provider"),
    zx = Symbol.for("react.context"),
    Bx = Symbol.for("react.forward_ref"),
    Ux = Symbol.for("react.suspense"),
    Vx = Symbol.for("react.memo"),
    Dx = Symbol.for("react.lazy"),
    fh = Symbol.iterator;

function Hx(e) {
    return e === null || typeof e != "object" ? null : (e = fh && e[fh] || e["@@iterator"], typeof e == "function" ? e : null)
}
var ig = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    sg = Object.assign,
    lg = {};

function di(e, t, n) {
    this.props = e, this.context = t, this.refs = lg, this.updater = n || ig
}
di.prototype.isReactComponent = {};
di.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
di.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function ag() {}
ag.prototype = di.prototype;

function hd(e, t, n) {
    this.props = e, this.context = t, this.refs = lg, this.updater = n || ig
}
var md = hd.prototype = new ag;
md.constructor = hd;
sg(md, di.prototype);
md.isPureReactComponent = !0;
var dh = Array.isArray,
    ug = Object.prototype.hasOwnProperty,
    vd = {
        current: null
    },
    cg = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function fg(e, t, n) {
    var r, o = {},
        i = null,
        s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) ug.call(t, r) && !cg.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) o.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
        o.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: Bs,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: vd.current
    }
}

function Wx(e, t) {
    return {
        $$typeof: Bs,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function gd(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Bs
}

function Qx(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var ph = /\/+/g;

function tc(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Qx("" + e.key) : t.toString(36)
}

function Pl(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Bs:
                case Mx:
                    s = !0
            }
    }
    if (s) return s = e, o = o(s), e = r === "" ? "." + tc(s, 0) : r, dh(o) ? (n = "", e != null && (n = e.replace(ph, "$&/") + "/"), Pl(o, t, n, "", function(u) {
        return u
    })) : o != null && (gd(o) && (o = Wx(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(ph, "$&/") + "/") + e)), t.push(o)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", dh(e))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var a = r + tc(i, l);
            s += Pl(i, t, n, a, o)
        } else if (a = Hx(e), typeof a == "function")
            for (e = a.call(e), l = 0; !(i = e.next()).done;) i = i.value, a = r + tc(i, l++), s += Pl(i, t, n, a, o);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function nl(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return Pl(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }), r
}

function Kx(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var _t = {
        current: null
    },
    Ol = {
        transition: null
    },
    qx = {
        ReactCurrentDispatcher: _t,
        ReactCurrentBatchConfig: Ol,
        ReactCurrentOwner: vd
    };
ce.Children = {
    map: nl,
    forEach: function(e, t, n) {
        nl(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return nl(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return nl(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!gd(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
ce.Component = di;
ce.Fragment = Ax;
ce.Profiler = Ix;
ce.PureComponent = hd;
ce.StrictMode = Lx;
ce.Suspense = Ux;
ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qx;
ce.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = sg({}, e.props),
        o = e.key,
        i = e.ref,
        s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, s = vd.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
        for (a in t) ug.call(t, a) && !cg.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: Bs,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
};
ce.createContext = function(e) {
    return e = {
        $$typeof: zx,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Fx,
        _context: e
    }, e.Consumer = e
};
ce.createElement = fg;
ce.createFactory = function(e) {
    var t = fg.bind(null, e);
    return t.type = e, t
};
ce.createRef = function() {
    return {
        current: null
    }
};
ce.forwardRef = function(e) {
    return {
        $$typeof: Bx,
        render: e
    }
};
ce.isValidElement = gd;
ce.lazy = function(e) {
    return {
        $$typeof: Dx,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Kx
    }
};
ce.memo = function(e, t) {
    return {
        $$typeof: Vx,
        type: e,
        compare: t === void 0 ? null : t
    }
};
ce.startTransition = function(e) {
    var t = Ol.transition;
    Ol.transition = {};
    try {
        e()
    } finally {
        Ol.transition = t
    }
};
ce.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
};
ce.useCallback = function(e, t) {
    return _t.current.useCallback(e, t)
};
ce.useContext = function(e) {
    return _t.current.useContext(e)
};
ce.useDebugValue = function() {};
ce.useDeferredValue = function(e) {
    return _t.current.useDeferredValue(e)
};
ce.useEffect = function(e, t) {
    return _t.current.useEffect(e, t)
};
ce.useId = function() {
    return _t.current.useId()
};
ce.useImperativeHandle = function(e, t, n) {
    return _t.current.useImperativeHandle(e, t, n)
};
ce.useInsertionEffect = function(e, t) {
    return _t.current.useInsertionEffect(e, t)
};
ce.useLayoutEffect = function(e, t) {
    return _t.current.useLayoutEffect(e, t)
};
ce.useMemo = function(e, t) {
    return _t.current.useMemo(e, t)
};
ce.useReducer = function(e, t, n) {
    return _t.current.useReducer(e, t, n)
};
ce.useRef = function(e) {
    return _t.current.useRef(e)
};
ce.useState = function(e) {
    return _t.current.useState(e)
};
ce.useSyncExternalStore = function(e, t, n) {
    return _t.current.useSyncExternalStore(e, t, n)
};
ce.useTransition = function() {
    return _t.current.useTransition()
};
ce.version = "18.2.0";
og.exports = ce;
var E = og.exports;
const ne = pd(E),
    Yl = _x({
        __proto__: null,
        default: ne
    }, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gx = E,
    Xx = Symbol.for("react.element"),
    Yx = Symbol.for("react.fragment"),
    Jx = Object.prototype.hasOwnProperty,
    Zx = Gx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    eb = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function dg(e, t, n) {
    var r, o = {},
        i = null,
        s = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) Jx.call(t, r) && !eb.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: Xx,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Zx.current
    }
}
Ua.Fragment = Yx;
Ua.jsx = dg;
Ua.jsxs = dg;
rg.exports = Ua;
var x = rg.exports,
    Qc = {},
    pg = {
        exports: {}
    },
    en = {},
    hg = {
        exports: {}
    },
    mg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(_, T) {
        var B = _.length;
        _.push(T);
        e: for (; 0 < B;) {
            var X = B - 1 >>> 1,
                q = _[X];
            if (0 < o(q, T)) _[X] = T, _[B] = q, B = X;
            else break e
        }
    }

    function n(_) {
        return _.length === 0 ? null : _[0]
    }

    function r(_) {
        if (_.length === 0) return null;
        var T = _[0],
            B = _.pop();
        if (B !== T) {
            _[0] = B;
            e: for (var X = 0, q = _.length, re = q >>> 1; X < re;) {
                var G = 2 * (X + 1) - 1,
                    J = _[G],
                    he = G + 1,
                    je = _[he];
                if (0 > o(J, B)) he < q && 0 > o(je, J) ? (_[X] = je, _[he] = B, X = he) : (_[X] = J, _[G] = B, X = G);
                else if (he < q && 0 > o(je, B)) _[X] = je, _[he] = B, X = he;
                else break e
            }
        }
        return T
    }

    function o(_, T) {
        var B = _.sortIndex - T.sortIndex;
        return B !== 0 ? B : _.id - T.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date,
            l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = [],
        u = [],
        c = 1,
        f = null,
        h = 3,
        y = !1,
        v = !1,
        d = !1,
        b = typeof setTimeout == "function" ? setTimeout : null,
        m = typeof clearTimeout == "function" ? clearTimeout : null,
        p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function g(_) {
        for (var T = n(u); T !== null;) {
            if (T.callback === null) r(u);
            else if (T.startTime <= _) r(u), T.sortIndex = T.expirationTime, t(a, T);
            else break;
            T = n(u)
        }
    }

    function w(_) {
        if (d = !1, g(_), !v)
            if (n(a) !== null) v = !0, I(C);
            else {
                var T = n(u);
                T !== null && Q(w, T.startTime - _)
            }
    }

    function C(_, T) {
        v = !1, d && (d = !1, m(P), P = -1), y = !0;
        var B = h;
        try {
            for (g(T), f = n(a); f !== null && (!(f.expirationTime > T) || _ && !L());) {
                var X = f.callback;
                if (typeof X == "function") {
                    f.callback = null, h = f.priorityLevel;
                    var q = X(f.expirationTime <= T);
                    T = e.unstable_now(), typeof q == "function" ? f.callback = q : f === n(a) && r(a), g(T)
                } else r(a);
                f = n(a)
            }
            if (f !== null) var re = !0;
            else {
                var G = n(u);
                G !== null && Q(w, G.startTime - T), re = !1
            }
            return re
        } finally {
            f = null, h = B, y = !1
        }
    }
    var S = !1,
        k = null,
        P = -1,
        N = 5,
        O = -1;

    function L() {
        return !(e.unstable_now() - O < N)
    }

    function $() {
        if (k !== null) {
            var _ = e.unstable_now();
            O = _;
            var T = !0;
            try {
                T = k(!0, _)
            } finally {
                T ? W() : (S = !1, k = null)
            }
        } else S = !1
    }
    var W;
    if (typeof p == "function") W = function() {
        p($)
    };
    else if (typeof MessageChannel < "u") {
        var U = new MessageChannel,
            H = U.port2;
        U.port1.onmessage = $, W = function() {
            H.postMessage(null)
        }
    } else W = function() {
        b($, 0)
    };

    function I(_) {
        k = _, S || (S = !0, W())
    }

    function Q(_, T) {
        P = b(function() {
            _(e.unstable_now())
        }, T)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
        _.callback = null
    }, e.unstable_continueExecution = function() {
        v || y || (v = !0, I(C))
    }, e.unstable_forceFrameRate = function(_) {
        0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < _ ? Math.floor(1e3 / _) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return h
    }, e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }, e.unstable_next = function(_) {
        switch (h) {
            case 1:
            case 2:
            case 3:
                var T = 3;
                break;
            default:
                T = h
        }
        var B = h;
        h = T;
        try {
            return _()
        } finally {
            h = B
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(_, T) {
        switch (_) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                _ = 3
        }
        var B = h;
        h = _;
        try {
            return T()
        } finally {
            h = B
        }
    }, e.unstable_scheduleCallback = function(_, T, B) {
        var X = e.unstable_now();
        switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? X + B : X) : B = X, _) {
            case 1:
                var q = -1;
                break;
            case 2:
                q = 250;
                break;
            case 5:
                q = 1073741823;
                break;
            case 4:
                q = 1e4;
                break;
            default:
                q = 5e3
        }
        return q = B + q, _ = {
            id: c++,
            callback: T,
            priorityLevel: _,
            startTime: B,
            expirationTime: q,
            sortIndex: -1
        }, B > X ? (_.sortIndex = B, t(u, _), n(a) === null && _ === n(u) && (d ? (m(P), P = -1) : d = !0, Q(w, B - X))) : (_.sortIndex = q, t(a, _), v || y || (v = !0, I(C))), _
    }, e.unstable_shouldYield = L, e.unstable_wrapCallback = function(_) {
        var T = h;
        return function() {
            var B = h;
            h = T;
            try {
                return _.apply(this, arguments)
            } finally {
                h = B
            }
        }
    }
})(mg);
hg.exports = mg;
var tb = hg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vg = E,
    Jt = tb;

function K(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var gg = new Set,
    fs = {};

function go(e, t) {
    Xo(e, t), Xo(e + "Capture", t)
}

function Xo(e, t) {
    for (fs[e] = t, e = 0; e < t.length; e++) gg.add(t[e])
}
var rr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Kc = Object.prototype.hasOwnProperty,
    nb = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    hh = {},
    mh = {};

function rb(e) {
    return Kc.call(mh, e) ? !0 : Kc.call(hh, e) ? !1 : nb.test(e) ? mh[e] = !0 : (hh[e] = !0, !1)
}

function ob(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function ib(e, t, n, r) {
    if (t === null || typeof t > "u" || ob(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function $t(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s
}
var mt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    mt[e] = new $t(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    mt[t] = new $t(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    mt[e] = new $t(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    mt[e] = new $t(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    mt[e] = new $t(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    mt[e] = new $t(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    mt[e] = new $t(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    mt[e] = new $t(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    mt[e] = new $t(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var yd = /[\-:]([a-z])/g;

function xd(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(yd, xd);
    mt[t] = new $t(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(yd, xd);
    mt[t] = new $t(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(yd, xd);
    mt[t] = new $t(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    mt[e] = new $t(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
mt.xlinkHref = new $t("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    mt[e] = new $t(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function bd(e, t, n, r) {
    var o = mt.hasOwnProperty(t) ? mt[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ib(t, n, o, r) && (n = null), r || o === null ? rb(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var cr = vg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    rl = Symbol.for("react.element"),
    jo = Symbol.for("react.portal"),
    No = Symbol.for("react.fragment"),
    wd = Symbol.for("react.strict_mode"),
    qc = Symbol.for("react.profiler"),
    yg = Symbol.for("react.provider"),
    xg = Symbol.for("react.context"),
    Sd = Symbol.for("react.forward_ref"),
    Gc = Symbol.for("react.suspense"),
    Xc = Symbol.for("react.suspense_list"),
    Ed = Symbol.for("react.memo"),
    vr = Symbol.for("react.lazy"),
    bg = Symbol.for("react.offscreen"),
    vh = Symbol.iterator;

function Ci(e) {
    return e === null || typeof e != "object" ? null : (e = vh && e[vh] || e["@@iterator"], typeof e == "function" ? e : null)
}
var We = Object.assign,
    nc;

function Ui(e) {
    if (nc === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        nc = t && t[1] || ""
    }
    return `
` + nc + e
}
var rc = !1;

function oc(e, t) {
    if (!e || rc) return "";
    rc = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l];) l--;
            for (; 1 <= s && 0 <= l; s--, l--)
                if (o[s] !== i[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--, l--, 0 > l || o[s] !== i[l]) {
                                var a = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
                            } while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        rc = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Ui(e) : ""
}

function sb(e) {
    switch (e.tag) {
        case 5:
            return Ui(e.type);
        case 16:
            return Ui("Lazy");
        case 13:
            return Ui("Suspense");
        case 19:
            return Ui("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = oc(e.type, !1), e;
        case 11:
            return e = oc(e.type.render, !1), e;
        case 1:
            return e = oc(e.type, !0), e;
        default:
            return ""
    }
}

function Yc(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case No:
            return "Fragment";
        case jo:
            return "Portal";
        case qc:
            return "Profiler";
        case wd:
            return "StrictMode";
        case Gc:
            return "Suspense";
        case Xc:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case xg:
            return (e.displayName || "Context") + ".Consumer";
        case yg:
            return (e._context.displayName || "Context") + ".Provider";
        case Sd:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Ed:
            return t = e.displayName || null, t !== null ? t : Yc(e.type) || "Memo";
        case vr:
            t = e._payload, e = e._init;
            try {
                return Yc(e(t))
            } catch {}
    }
    return null
}

function lb(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Yc(t);
        case 8:
            return t === wd ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Lr(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function wg(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function ab(e) {
    var t = wg(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s, i.call(this, s)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function ol(e) {
    e._valueTracker || (e._valueTracker = ab(e))
}

function Sg(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = wg(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Jl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Jc(e, t) {
    var n = t.checked;
    return We({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function gh(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Lr(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Eg(e, t) {
    t = t.checked, t != null && bd(e, "checked", t, !1)
}

function Zc(e, t) {
    Eg(e, t);
    var n = Lr(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ef(e, t.type, n) : t.hasOwnProperty("defaultValue") && ef(e, t.type, Lr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function yh(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function ef(e, t, n) {
    (t !== "number" || Jl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Vi = Array.isArray;

function Vo(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Lr(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function tf(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(K(91));
    return We({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function xh(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(K(92));
            if (Vi(n)) {
                if (1 < n.length) throw Error(K(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Lr(n)
    }
}

function Cg(e, t) {
    var n = Lr(t.value),
        r = Lr(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function bh(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function kg(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function nf(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? kg(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var il, Pg = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (il = il || document.createElement("div"), il.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = il.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function ds(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Gi = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    ub = ["Webkit", "ms", "Moz", "O"];
Object.keys(Gi).forEach(function(e) {
    ub.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Gi[t] = Gi[e]
    })
});

function Og(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Gi.hasOwnProperty(e) && Gi[e] ? ("" + t).trim() : t + "px"
}

function Tg(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = Og(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
        }
}
var cb = We({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function rf(e, t) {
    if (t) {
        if (cb[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(K(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(K(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(K(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(K(62))
    }
}

function of(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var sf = null;

function Cd(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var lf = null,
    Do = null,
    Ho = null;

function wh(e) {
    if (e = Ds(e)) {
        if (typeof lf != "function") throw Error(K(280));
        var t = e.stateNode;
        t && (t = Qa(t), lf(e.stateNode, e.type, t))
    }
}

function Rg(e) {
    Do ? Ho ? Ho.push(e) : Ho = [e] : Do = e
}

function jg() {
    if (Do) {
        var e = Do,
            t = Ho;
        if (Ho = Do = null, wh(e), t)
            for (e = 0; e < t.length; e++) wh(t[e])
    }
}

function Ng(e, t) {
    return e(t)
}

function _g() {}
var ic = !1;

function $g(e, t, n) {
    if (ic) return e(t, n);
    ic = !0;
    try {
        return Ng(e, t, n)
    } finally {
        ic = !1, (Do !== null || Ho !== null) && (_g(), jg())
    }
}

function ps(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Qa(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(K(231, t, typeof n));
    return n
}
var af = !1;
if (rr) try {
    var ki = {};
    Object.defineProperty(ki, "passive", {
        get: function() {
            af = !0
        }
    }), window.addEventListener("test", ki, ki), window.removeEventListener("test", ki, ki)
} catch {
    af = !1
}

function fb(e, t, n, r, o, i, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Xi = !1,
    Zl = null,
    ea = !1,
    uf = null,
    db = {
        onError: function(e) {
            Xi = !0, Zl = e
        }
    };

function pb(e, t, n, r, o, i, s, l, a) {
    Xi = !1, Zl = null, fb.apply(db, arguments)
}

function hb(e, t, n, r, o, i, s, l, a) {
    if (pb.apply(this, arguments), Xi) {
        if (Xi) {
            var u = Zl;
            Xi = !1, Zl = null
        } else throw Error(K(198));
        ea || (ea = !0, uf = u)
    }
}

function yo(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Mg(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Sh(e) {
    if (yo(e) !== e) throw Error(K(188))
}

function mb(e) {
    var t = e.alternate;
    if (!t) {
        if (t = yo(e), t === null) throw Error(K(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i;) {
                if (i === n) return Sh(o), e;
                if (i === r) return Sh(o), t;
                i = i.sibling
            }
            throw Error(K(188))
        }
        if (n.return !== r.return) n = o, r = i;
        else {
            for (var s = !1, l = o.child; l;) {
                if (l === n) {
                    s = !0, n = o, r = i;
                    break
                }
                if (l === r) {
                    s = !0, r = o, n = i;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = i.child; l;) {
                    if (l === n) {
                        s = !0, n = i, r = o;
                        break
                    }
                    if (l === r) {
                        s = !0, r = i, n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!s) throw Error(K(189))
            }
        }
        if (n.alternate !== r) throw Error(K(190))
    }
    if (n.tag !== 3) throw Error(K(188));
    return n.stateNode.current === n ? e : t
}

function Ag(e) {
    return e = mb(e), e !== null ? Lg(e) : null
}

function Lg(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Lg(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Ig = Jt.unstable_scheduleCallback,
    Eh = Jt.unstable_cancelCallback,
    vb = Jt.unstable_shouldYield,
    gb = Jt.unstable_requestPaint,
    Xe = Jt.unstable_now,
    yb = Jt.unstable_getCurrentPriorityLevel,
    kd = Jt.unstable_ImmediatePriority,
    Fg = Jt.unstable_UserBlockingPriority,
    ta = Jt.unstable_NormalPriority,
    xb = Jt.unstable_LowPriority,
    zg = Jt.unstable_IdlePriority,
    Va = null,
    Vn = null;

function bb(e) {
    if (Vn && typeof Vn.onCommitFiberRoot == "function") try {
        Vn.onCommitFiberRoot(Va, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var jn = Math.clz32 ? Math.clz32 : Eb,
    wb = Math.log,
    Sb = Math.LN2;

function Eb(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (wb(e) / Sb | 0) | 0
}
var sl = 64,
    ll = 4194304;

function Di(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function na(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var l = s & ~o;
        l !== 0 ? r = Di(l) : (i &= s, i !== 0 && (r = Di(i)))
    } else s = n & ~o, s !== 0 ? r = Di(s) : i !== 0 && (r = Di(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - jn(t), o = 1 << n, r |= e[n], t &= ~o;
    return r
}

function Cb(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function kb(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var s = 31 - jn(i),
            l = 1 << s,
            a = o[s];
        a === -1 ? (!(l & n) || l & r) && (o[s] = Cb(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l
    }
}

function cf(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Bg() {
    var e = sl;
    return sl <<= 1, !(sl & 4194240) && (sl = 64), e
}

function sc(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function Us(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - jn(t), e[t] = n
}

function Pb(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - jn(n),
            i = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
    }
}

function Pd(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - jn(n),
            o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}
var Pe = 0;

function Ug(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Vg, Od, Dg, Hg, Wg, ff = !1,
    al = [],
    Tr = null,
    Rr = null,
    jr = null,
    hs = new Map,
    ms = new Map,
    xr = [],
    Ob = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Ch(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Tr = null;
            break;
        case "dragenter":
        case "dragleave":
            Rr = null;
            break;
        case "mouseover":
        case "mouseout":
            jr = null;
            break;
        case "pointerover":
        case "pointerout":
            hs.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ms.delete(t.pointerId)
    }
}

function Pi(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    }, t !== null && (t = Ds(t), t !== null && Od(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function Tb(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return Tr = Pi(Tr, e, t, n, r, o), !0;
        case "dragenter":
            return Rr = Pi(Rr, e, t, n, r, o), !0;
        case "mouseover":
            return jr = Pi(jr, e, t, n, r, o), !0;
        case "pointerover":
            var i = o.pointerId;
            return hs.set(i, Pi(hs.get(i) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return i = o.pointerId, ms.set(i, Pi(ms.get(i) || null, e, t, n, r, o)), !0
    }
    return !1
}

function Qg(e) {
    var t = Yr(e.target);
    if (t !== null) {
        var n = yo(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Mg(n), t !== null) {
                    e.blockedOn = t, Wg(e.priority, function() {
                        Dg(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Tl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = df(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            sf = r, n.target.dispatchEvent(r), sf = null
        } else return t = Ds(n), t !== null && Od(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function kh(e, t, n) {
    Tl(e) && n.delete(t)
}

function Rb() {
    ff = !1, Tr !== null && Tl(Tr) && (Tr = null), Rr !== null && Tl(Rr) && (Rr = null), jr !== null && Tl(jr) && (jr = null), hs.forEach(kh), ms.forEach(kh)
}

function Oi(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ff || (ff = !0, Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority, Rb)))
}

function vs(e) {
    function t(o) {
        return Oi(o, e)
    }
    if (0 < al.length) {
        Oi(al[0], e);
        for (var n = 1; n < al.length; n++) {
            var r = al[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Tr !== null && Oi(Tr, e), Rr !== null && Oi(Rr, e), jr !== null && Oi(jr, e), hs.forEach(t), ms.forEach(t), n = 0; n < xr.length; n++) r = xr[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < xr.length && (n = xr[0], n.blockedOn === null);) Qg(n), n.blockedOn === null && xr.shift()
}
var Wo = cr.ReactCurrentBatchConfig,
    ra = !0;

function jb(e, t, n, r) {
    var o = Pe,
        i = Wo.transition;
    Wo.transition = null;
    try {
        Pe = 1, Td(e, t, n, r)
    } finally {
        Pe = o, Wo.transition = i
    }
}

function Nb(e, t, n, r) {
    var o = Pe,
        i = Wo.transition;
    Wo.transition = null;
    try {
        Pe = 4, Td(e, t, n, r)
    } finally {
        Pe = o, Wo.transition = i
    }
}

function Td(e, t, n, r) {
    if (ra) {
        var o = df(e, t, n, r);
        if (o === null) vc(e, t, r, oa, n), Ch(e, r);
        else if (Tb(o, e, t, n, r)) r.stopPropagation();
        else if (Ch(e, r), t & 4 && -1 < Ob.indexOf(e)) {
            for (; o !== null;) {
                var i = Ds(o);
                if (i !== null && Vg(i), i = df(e, t, n, r), i === null && vc(e, t, r, oa, n), i === o) break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else vc(e, t, r, null, n)
    }
}
var oa = null;

function df(e, t, n, r) {
    if (oa = null, e = Cd(r), e = Yr(e), e !== null)
        if (t = yo(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Mg(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return oa = e, null
}

function Kg(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (yb()) {
                case kd:
                    return 1;
                case Fg:
                    return 4;
                case ta:
                case xb:
                    return 16;
                case zg:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Sr = null,
    Rd = null,
    Rl = null;

function qg() {
    if (Rl) return Rl;
    var e, t = Rd,
        n = t.length,
        r, o = "value" in Sr ? Sr.value : Sr.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
    return Rl = o.slice(e, 1 < r ? 1 - r : void 0)
}

function jl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function ul() {
    return !0
}

function Ph() {
    return !1
}

function tn(e) {
    function t(n, r, o, i, s) {
        this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
        for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ul : Ph, this.isPropagationStopped = Ph, this
    }
    return We(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ul)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ul)
        },
        persist: function() {},
        isPersistent: ul
    }), t
}
var pi = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    jd = tn(pi),
    Vs = We({}, pi, {
        view: 0,
        detail: 0
    }),
    _b = tn(Vs),
    lc, ac, Ti, Da = We({}, Vs, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Nd,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Ti && (Ti && e.type === "mousemove" ? (lc = e.screenX - Ti.screenX, ac = e.screenY - Ti.screenY) : ac = lc = 0, Ti = e), lc)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : ac
        }
    }),
    Oh = tn(Da),
    $b = We({}, Da, {
        dataTransfer: 0
    }),
    Mb = tn($b),
    Ab = We({}, Vs, {
        relatedTarget: 0
    }),
    uc = tn(Ab),
    Lb = We({}, pi, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Ib = tn(Lb),
    Fb = We({}, pi, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    zb = tn(Fb),
    Bb = We({}, pi, {
        data: 0
    }),
    Th = tn(Bb),
    Ub = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    Vb = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    Db = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Hb(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Db[e]) ? !!t[e] : !1
}

function Nd() {
    return Hb
}
var Wb = We({}, Vs, {
        key: function(e) {
            if (e.key) {
                var t = Ub[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = jl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Vb[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Nd,
        charCode: function(e) {
            return e.type === "keypress" ? jl(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? jl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    Qb = tn(Wb),
    Kb = We({}, Da, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Rh = tn(Kb),
    qb = We({}, Vs, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Nd
    }),
    Gb = tn(qb),
    Xb = We({}, pi, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Yb = tn(Xb),
    Jb = We({}, Da, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Zb = tn(Jb),
    ew = [9, 13, 27, 32],
    _d = rr && "CompositionEvent" in window,
    Yi = null;
rr && "documentMode" in document && (Yi = document.documentMode);
var tw = rr && "TextEvent" in window && !Yi,
    Gg = rr && (!_d || Yi && 8 < Yi && 11 >= Yi),
    jh = " ",
    Nh = !1;

function Xg(e, t) {
    switch (e) {
        case "keyup":
            return ew.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Yg(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var _o = !1;

function nw(e, t) {
    switch (e) {
        case "compositionend":
            return Yg(t);
        case "keypress":
            return t.which !== 32 ? null : (Nh = !0, jh);
        case "textInput":
            return e = t.data, e === jh && Nh ? null : e;
        default:
            return null
    }
}

function rw(e, t) {
    if (_o) return e === "compositionend" || !_d && Xg(e, t) ? (e = qg(), Rl = Rd = Sr = null, _o = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Gg && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var ow = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function _h(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ow[e.type] : t === "textarea"
}

function Jg(e, t, n, r) {
    Rg(r), t = ia(t, "onChange"), 0 < t.length && (n = new jd("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Ji = null,
    gs = null;

function iw(e) {
    uy(e, 0)
}

function Ha(e) {
    var t = Ao(e);
    if (Sg(t)) return e
}

function sw(e, t) {
    if (e === "change") return t
}
var Zg = !1;
if (rr) {
    var cc;
    if (rr) {
        var fc = "oninput" in document;
        if (!fc) {
            var $h = document.createElement("div");
            $h.setAttribute("oninput", "return;"), fc = typeof $h.oninput == "function"
        }
        cc = fc
    } else cc = !1;
    Zg = cc && (!document.documentMode || 9 < document.documentMode)
}

function Mh() {
    Ji && (Ji.detachEvent("onpropertychange", ey), gs = Ji = null)
}

function ey(e) {
    if (e.propertyName === "value" && Ha(gs)) {
        var t = [];
        Jg(t, gs, e, Cd(e)), $g(iw, t)
    }
}

function lw(e, t, n) {
    e === "focusin" ? (Mh(), Ji = t, gs = n, Ji.attachEvent("onpropertychange", ey)) : e === "focusout" && Mh()
}

function aw(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ha(gs)
}

function uw(e, t) {
    if (e === "click") return Ha(t)
}

function cw(e, t) {
    if (e === "input" || e === "change") return Ha(t)
}

function fw(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var $n = typeof Object.is == "function" ? Object.is : fw;

function ys(e, t) {
    if ($n(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Kc.call(t, o) || !$n(e[o], t[o])) return !1
    }
    return !0
}

function Ah(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Lh(e, t) {
    var n = Ah(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Ah(n)
    }
}

function ty(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ty(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function ny() {
    for (var e = window, t = Jl(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Jl(e.document)
    }
    return t
}

function $d(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function dw(e) {
    var t = ny(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ty(n.ownerDocument.documentElement, n)) {
        if (r !== null && $d(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Lh(n, i);
                var s = Lh(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var pw = rr && "documentMode" in document && 11 >= document.documentMode,
    $o = null,
    pf = null,
    Zi = null,
    hf = !1;

function Ih(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    hf || $o == null || $o !== Jl(r) || (r = $o, "selectionStart" in r && $d(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Zi && ys(Zi, r) || (Zi = r, r = ia(pf, "onSelect"), 0 < r.length && (t = new jd("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = $o)))
}

function cl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Mo = {
        animationend: cl("Animation", "AnimationEnd"),
        animationiteration: cl("Animation", "AnimationIteration"),
        animationstart: cl("Animation", "AnimationStart"),
        transitionend: cl("Transition", "TransitionEnd")
    },
    dc = {},
    ry = {};
rr && (ry = document.createElement("div").style, "AnimationEvent" in window || (delete Mo.animationend.animation, delete Mo.animationiteration.animation, delete Mo.animationstart.animation), "TransitionEvent" in window || delete Mo.transitionend.transition);

function Wa(e) {
    if (dc[e]) return dc[e];
    if (!Mo[e]) return e;
    var t = Mo[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in ry) return dc[e] = t[n];
    return e
}
var oy = Wa("animationend"),
    iy = Wa("animationiteration"),
    sy = Wa("animationstart"),
    ly = Wa("transitionend"),
    ay = new Map,
    Fh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function zr(e, t) {
    ay.set(e, t), go(t, [e])
}
for (var pc = 0; pc < Fh.length; pc++) {
    var hc = Fh[pc],
        hw = hc.toLowerCase(),
        mw = hc[0].toUpperCase() + hc.slice(1);
    zr(hw, "on" + mw)
}
zr(oy, "onAnimationEnd");
zr(iy, "onAnimationIteration");
zr(sy, "onAnimationStart");
zr("dblclick", "onDoubleClick");
zr("focusin", "onFocus");
zr("focusout", "onBlur");
zr(ly, "onTransitionEnd");
Xo("onMouseEnter", ["mouseout", "mouseover"]);
Xo("onMouseLeave", ["mouseout", "mouseover"]);
Xo("onPointerEnter", ["pointerout", "pointerover"]);
Xo("onPointerLeave", ["pointerout", "pointerover"]);
go("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
go("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
go("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
go("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
go("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
go("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Hi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    vw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hi));

function zh(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, hb(r, t, void 0, e), e.currentTarget = null
}

function uy(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s],
                        a = l.instance,
                        u = l.currentTarget;
                    if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
                    zh(o, l, u), i = a
                } else
                    for (s = 0; s < r.length; s++) {
                        if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
                        zh(o, l, u), i = a
                    }
        }
    }
    if (ea) throw e = uf, ea = !1, uf = null, e
}

function Ae(e, t) {
    var n = t[xf];
    n === void 0 && (n = t[xf] = new Set);
    var r = e + "__bubble";
    n.has(r) || (cy(t, e, 2, !1), n.add(r))
}

function mc(e, t, n) {
    var r = 0;
    t && (r |= 4), cy(n, e, r, t)
}
var fl = "_reactListening" + Math.random().toString(36).slice(2);

function xs(e) {
    if (!e[fl]) {
        e[fl] = !0, gg.forEach(function(n) {
            n !== "selectionchange" && (vw.has(n) || mc(n, !1, e), mc(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[fl] || (t[fl] = !0, mc("selectionchange", !1, t))
    }
}

function cy(e, t, n, r) {
    switch (Kg(t)) {
        case 1:
            var o = jb;
            break;
        case 4:
            o = Nb;
            break;
        default:
            o = Td
    }
    n = o.bind(null, t, n, e), o = void 0, !af || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}

function vc(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var l = r.stateNode.containerInfo;
            if (l === o || l.nodeType === 8 && l.parentNode === o) break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var a = s.tag;
                    if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
                    s = s.return
                }
            for (; l !== null;) {
                if (s = Yr(l), s === null) return;
                if (a = s.tag, a === 5 || a === 6) {
                    r = i = s;
                    continue e
                }
                l = l.parentNode
            }
        }
        r = r.return
    }
    $g(function() {
        var u = i,
            c = Cd(n),
            f = [];
        e: {
            var h = ay.get(e);
            if (h !== void 0) {
                var y = jd,
                    v = e;
                switch (e) {
                    case "keypress":
                        if (jl(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = Qb;
                        break;
                    case "focusin":
                        v = "focus", y = uc;
                        break;
                    case "focusout":
                        v = "blur", y = uc;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = uc;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = Oh;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = Mb;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = Gb;
                        break;
                    case oy:
                    case iy:
                    case sy:
                        y = Ib;
                        break;
                    case ly:
                        y = Yb;
                        break;
                    case "scroll":
                        y = _b;
                        break;
                    case "wheel":
                        y = Zb;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = zb;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = Rh
                }
                var d = (t & 4) !== 0,
                    b = !d && e === "scroll",
                    m = d ? h !== null ? h + "Capture" : null : h;
                d = [];
                for (var p = u, g; p !== null;) {
                    g = p;
                    var w = g.stateNode;
                    if (g.tag === 5 && w !== null && (g = w, m !== null && (w = ps(p, m), w != null && d.push(bs(p, w, g)))), b) break;
                    p = p.return
                }
                0 < d.length && (h = new y(h, v, null, n, c), f.push({
                    event: h,
                    listeners: d
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", h && n !== sf && (v = n.relatedTarget || n.fromElement) && (Yr(v) || v[or])) break e;
                if ((y || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, y ? (v = n.relatedTarget || n.toElement, y = u, v = v ? Yr(v) : null, v !== null && (b = yo(v), v !== b || v.tag !== 5 && v.tag !== 6) && (v = null)) : (y = null, v = u), y !== v)) {
                    if (d = Oh, w = "onMouseLeave", m = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (d = Rh, w = "onPointerLeave", m = "onPointerEnter", p = "pointer"), b = y == null ? h : Ao(y), g = v == null ? h : Ao(v), h = new d(w, p + "leave", y, n, c), h.target = b, h.relatedTarget = g, w = null, Yr(c) === u && (d = new d(m, p + "enter", v, n, c), d.target = g, d.relatedTarget = b, w = d), b = w, y && v) t: {
                        for (d = y, m = v, p = 0, g = d; g; g = So(g)) p++;
                        for (g = 0, w = m; w; w = So(w)) g++;
                        for (; 0 < p - g;) d = So(d),
                        p--;
                        for (; 0 < g - p;) m = So(m),
                        g--;
                        for (; p--;) {
                            if (d === m || m !== null && d === m.alternate) break t;
                            d = So(d), m = So(m)
                        }
                        d = null
                    }
                    else d = null;
                    y !== null && Bh(f, h, y, d, !1), v !== null && b !== null && Bh(f, b, v, d, !0)
                }
            }
            e: {
                if (h = u ? Ao(u) : window, y = h.nodeName && h.nodeName.toLowerCase(), y === "select" || y === "input" && h.type === "file") var C = sw;
                else if (_h(h))
                    if (Zg) C = cw;
                    else {
                        C = aw;
                        var S = lw
                    }
                else(y = h.nodeName) && y.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (C = uw);
                if (C && (C = C(e, u))) {
                    Jg(f, C, n, c);
                    break e
                }
                S && S(e, h, u),
                e === "focusout" && (S = h._wrapperState) && S.controlled && h.type === "number" && ef(h, "number", h.value)
            }
            switch (S = u ? Ao(u) : window, e) {
                case "focusin":
                    (_h(S) || S.contentEditable === "true") && ($o = S, pf = u, Zi = null);
                    break;
                case "focusout":
                    Zi = pf = $o = null;
                    break;
                case "mousedown":
                    hf = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    hf = !1, Ih(f, n, c);
                    break;
                case "selectionchange":
                    if (pw) break;
                case "keydown":
                case "keyup":
                    Ih(f, n, c)
            }
            var k;
            if (_d) e: {
                switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                }
                P = void 0
            }
            else _o ? Xg(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");P && (Gg && n.locale !== "ko" && (_o || P !== "onCompositionStart" ? P === "onCompositionEnd" && _o && (k = qg()) : (Sr = c, Rd = "value" in Sr ? Sr.value : Sr.textContent, _o = !0)), S = ia(u, P), 0 < S.length && (P = new Th(P, e, null, n, c), f.push({
                event: P,
                listeners: S
            }), k ? P.data = k : (k = Yg(n), k !== null && (P.data = k)))),
            (k = tw ? nw(e, n) : rw(e, n)) && (u = ia(u, "onBeforeInput"), 0 < u.length && (c = new Th("onBeforeInput", "beforeinput", null, n, c), f.push({
                event: c,
                listeners: u
            }), c.data = k))
        }
        uy(f, t)
    })
}

function bs(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function ia(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 && i !== null && (o = i, i = ps(e, n), i != null && r.unshift(bs(e, i, o)), i = ps(e, t), i != null && r.push(bs(e, i, o))), e = e.return
    }
    return r
}

function So(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Bh(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r;) {
        var l = n,
            a = l.alternate,
            u = l.stateNode;
        if (a !== null && a === r) break;
        l.tag === 5 && u !== null && (l = u, o ? (a = ps(n, i), a != null && s.unshift(bs(n, a, l))) : o || (a = ps(n, i), a != null && s.push(bs(n, a, l)))), n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var gw = /\r\n?/g,
    yw = /\u0000|\uFFFD/g;

function Uh(e) {
    return (typeof e == "string" ? e : "" + e).replace(gw, `
`).replace(yw, "")
}

function dl(e, t, n) {
    if (t = Uh(t), Uh(e) !== t && n) throw Error(K(425))
}

function sa() {}
var mf = null,
    vf = null;

function gf(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var yf = typeof setTimeout == "function" ? setTimeout : void 0,
    xw = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Vh = typeof Promise == "function" ? Promise : void 0,
    bw = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vh < "u" ? function(e) {
        return Vh.resolve(null).then(e).catch(ww)
    } : yf;

function ww(e) {
    setTimeout(function() {
        throw e
    })
}

function gc(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8)
            if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), vs(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    vs(t)
}

function Nr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Dh(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var hi = Math.random().toString(36).slice(2),
    Bn = "__reactFiber$" + hi,
    ws = "__reactProps$" + hi,
    or = "__reactContainer$" + hi,
    xf = "__reactEvents$" + hi,
    Sw = "__reactListeners$" + hi,
    Ew = "__reactHandles$" + hi;

function Yr(e) {
    var t = e[Bn];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[or] || n[Bn]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Dh(e); e !== null;) {
                    if (n = e[Bn]) return n;
                    e = Dh(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Ds(e) {
    return e = e[Bn] || e[or], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Ao(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(K(33))
}

function Qa(e) {
    return e[ws] || null
}
var bf = [],
    Lo = -1;

function Br(e) {
    return {
        current: e
    }
}

function Le(e) {
    0 > Lo || (e.current = bf[Lo], bf[Lo] = null, Lo--)
}

function Ne(e, t) {
    Lo++, bf[Lo] = e.current, e.current = t
}
var Ir = {},
    Et = Br(Ir),
    Ft = Br(!1),
    lo = Ir;

function Yo(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ir;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function zt(e) {
    return e = e.childContextTypes, e != null
}

function la() {
    Le(Ft), Le(Et)
}

function Hh(e, t, n) {
    if (Et.current !== Ir) throw Error(K(168));
    Ne(Et, t), Ne(Ft, n)
}

function fy(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t)) throw Error(K(108, lb(e) || "Unknown", o));
    return We({}, n, r)
}

function aa(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ir, lo = Et.current, Ne(Et, e), Ne(Ft, Ft.current), !0
}

function Wh(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(K(169));
    n ? (e = fy(e, t, lo), r.__reactInternalMemoizedMergedChildContext = e, Le(Ft), Le(Et), Ne(Et, e)) : Le(Ft), Ne(Ft, n)
}
var Xn = null,
    Ka = !1,
    yc = !1;

function dy(e) {
    Xn === null ? Xn = [e] : Xn.push(e)
}

function Cw(e) {
    Ka = !0, dy(e)
}

function Ur() {
    if (!yc && Xn !== null) {
        yc = !0;
        var e = 0,
            t = Pe;
        try {
            var n = Xn;
            for (Pe = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Xn = null, Ka = !1
        } catch (o) {
            throw Xn !== null && (Xn = Xn.slice(e + 1)), Ig(kd, Ur), o
        } finally {
            Pe = t, yc = !1
        }
    }
    return null
}
var Io = [],
    Fo = 0,
    ua = null,
    ca = 0,
    an = [],
    un = 0,
    ao = null,
    Yn = 1,
    Jn = "";

function Qr(e, t) {
    Io[Fo++] = ca, Io[Fo++] = ua, ua = e, ca = t
}

function py(e, t, n) {
    an[un++] = Yn, an[un++] = Jn, an[un++] = ao, ao = e;
    var r = Yn;
    e = Jn;
    var o = 32 - jn(r) - 1;
    r &= ~(1 << o), n += 1;
    var i = 32 - jn(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Yn = 1 << 32 - jn(t) + o | n << o | r, Jn = i + e
    } else Yn = 1 << i | n << o | r, Jn = e
}

function Md(e) {
    e.return !== null && (Qr(e, 1), py(e, 1, 0))
}

function Ad(e) {
    for (; e === ua;) ua = Io[--Fo], Io[Fo] = null, ca = Io[--Fo], Io[Fo] = null;
    for (; e === ao;) ao = an[--un], an[un] = null, Jn = an[--un], an[un] = null, Yn = an[--un], an[un] = null
}
var Xt = null,
    Gt = null,
    ze = !1,
    Rn = null;

function hy(e, t) {
    var n = fn(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Qh(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Xt = e, Gt = Nr(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Xt = e, Gt = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ao !== null ? {
                id: Yn,
                overflow: Jn
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = fn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Xt = e, Gt = null, !0) : !1;
        default:
            return !1
    }
}

function wf(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Sf(e) {
    if (ze) {
        var t = Gt;
        if (t) {
            var n = t;
            if (!Qh(e, t)) {
                if (wf(e)) throw Error(K(418));
                t = Nr(n.nextSibling);
                var r = Xt;
                t && Qh(e, t) ? hy(r, n) : (e.flags = e.flags & -4097 | 2, ze = !1, Xt = e)
            }
        } else {
            if (wf(e)) throw Error(K(418));
            e.flags = e.flags & -4097 | 2, ze = !1, Xt = e
        }
    }
}

function Kh(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Xt = e
}

function pl(e) {
    if (e !== Xt) return !1;
    if (!ze) return Kh(e), ze = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !gf(e.type, e.memoizedProps)), t && (t = Gt)) {
        if (wf(e)) throw my(), Error(K(418));
        for (; t;) hy(e, t), t = Nr(t.nextSibling)
    }
    if (Kh(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(K(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Gt = Nr(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Gt = null
        }
    } else Gt = Xt ? Nr(e.stateNode.nextSibling) : null;
    return !0
}

function my() {
    for (var e = Gt; e;) e = Nr(e.nextSibling)
}

function Jo() {
    Gt = Xt = null, ze = !1
}

function Ld(e) {
    Rn === null ? Rn = [e] : Rn.push(e)
}
var kw = cr.ReactCurrentBatchConfig;

function On(e, t) {
    if (e && e.defaultProps) {
        t = We({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var fa = Br(null),
    da = null,
    zo = null,
    Id = null;

function Fd() {
    Id = zo = da = null
}

function zd(e) {
    var t = fa.current;
    Le(fa), e._currentValue = t
}

function Ef(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Qo(e, t) {
    da = e, Id = zo = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Lt = !0), e.firstContext = null)
}

function vn(e) {
    var t = e._currentValue;
    if (Id !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, zo === null) {
            if (da === null) throw Error(K(308));
            zo = e, da.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else zo = zo.next = e;
    return t
}
var Jr = null;

function Bd(e) {
    Jr === null ? Jr = [e] : Jr.push(e)
}

function vy(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, Bd(t)) : (n.next = o.next, o.next = n), t.interleaved = n, ir(e, r)
}

function ir(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var gr = !1;

function Ud(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function gy(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function tr(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function _r(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, ge & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, ir(e, n)
    }
    return o = r.interleaved, o === null ? (t.next = t, Bd(r)) : (t.next = o.next, o.next = t), r.interleaved = t, ir(e, n)
}

function Nl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Pd(e, n)
    }
}

function qh(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var o = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s, n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function pa(e, t, n, r) {
    var o = e.updateQueue;
    gr = !1;
    var i = o.firstBaseUpdate,
        s = o.lastBaseUpdate,
        l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var a = l,
            u = a.next;
        a.next = null, s === null ? i = u : s.next = u, s = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = a))
    }
    if (i !== null) {
        var f = o.baseState;
        s = 0, c = u = a = null, l = i;
        do {
            var h = l.lane,
                y = l.eventTime;
            if ((r & h) === h) {
                c !== null && (c = c.next = {
                    eventTime: y,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var v = e,
                        d = l;
                    switch (h = t, y = n, d.tag) {
                        case 1:
                            if (v = d.payload, typeof v == "function") {
                                f = v.call(y, f, h);
                                break e
                            }
                            f = v;
                            break e;
                        case 3:
                            v.flags = v.flags & -65537 | 128;
                        case 0:
                            if (v = d.payload, h = typeof v == "function" ? v.call(y, f, h) : v, h == null) break e;
                            f = We({}, f, h);
                            break e;
                        case 2:
                            gr = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64, h = o.effects, h === null ? o.effects = [l] : h.push(l))
            } else y = {
                eventTime: y,
                lane: h,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
            }, c === null ? (u = c = y, a = f) : c = c.next = y, s |= h;
            if (l = l.next, l === null) {
                if (l = o.shared.pending, l === null) break;
                h = l, l = h.next, h.next = null, o.lastBaseUpdate = h, o.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = f), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
            o = t;
            do s |= o.lane, o = o.next; while (o !== t)
        } else i === null && (o.shared.lanes = 0);
        co |= s, e.lanes = s, e.memoizedState = f
    }
}

function Gh(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(K(191, o));
                o.call(r)
            }
        }
}
var yy = new vg.Component().refs;

function Cf(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : We({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var qa = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? yo(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Rt(),
            o = Mr(e),
            i = tr(r, o);
        i.payload = t, n != null && (i.callback = n), t = _r(e, i, o), t !== null && (Nn(t, e, o, r), Nl(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Rt(),
            o = Mr(e),
            i = tr(r, o);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = _r(e, i, o), t !== null && (Nn(t, e, o, r), Nl(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Rt(),
            r = Mr(e),
            o = tr(n, r);
        o.tag = 2, t != null && (o.callback = t), t = _r(e, o, r), t !== null && (Nn(t, e, r, n), Nl(t, e, r))
    }
};

function Xh(e, t, n, r, o, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !ys(n, r) || !ys(o, i) : !0
}

function xy(e, t, n) {
    var r = !1,
        o = Ir,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = vn(i) : (o = zt(t) ? lo : Et.current, r = t.contextTypes, i = (r = r != null) ? Yo(e, o) : Ir), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = qa, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function Yh(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && qa.enqueueReplaceState(t, t.state, null)
}

function kf(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = yy, Ud(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = vn(i) : (i = zt(t) ? lo : Et.current, o.context = Yo(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Cf(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && qa.enqueueReplaceState(o, o.state, null), pa(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function Ri(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(K(309));
                var r = n.stateNode
            }
            if (!r) throw Error(K(147, e));
            var o = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var l = o.refs;
                l === yy && (l = o.refs = {}), s === null ? delete l[i] : l[i] = s
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(K(284));
        if (!n._owner) throw Error(K(290, e))
    }
    return e
}

function hl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(K(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Jh(e) {
    var t = e._init;
    return t(e._payload)
}

function by(e) {
    function t(m, p) {
        if (e) {
            var g = m.deletions;
            g === null ? (m.deletions = [p], m.flags |= 16) : g.push(p)
        }
    }

    function n(m, p) {
        if (!e) return null;
        for (; p !== null;) t(m, p), p = p.sibling;
        return null
    }

    function r(m, p) {
        for (m = new Map; p !== null;) p.key !== null ? m.set(p.key, p) : m.set(p.index, p), p = p.sibling;
        return m
    }

    function o(m, p) {
        return m = Ar(m, p), m.index = 0, m.sibling = null, m
    }

    function i(m, p, g) {
        return m.index = g, e ? (g = m.alternate, g !== null ? (g = g.index, g < p ? (m.flags |= 2, p) : g) : (m.flags |= 2, p)) : (m.flags |= 1048576, p)
    }

    function s(m) {
        return e && m.alternate === null && (m.flags |= 2), m
    }

    function l(m, p, g, w) {
        return p === null || p.tag !== 6 ? (p = kc(g, m.mode, w), p.return = m, p) : (p = o(p, g), p.return = m, p)
    }

    function a(m, p, g, w) {
        var C = g.type;
        return C === No ? c(m, p, g.props.children, w, g.key) : p !== null && (p.elementType === C || typeof C == "object" && C !== null && C.$$typeof === vr && Jh(C) === p.type) ? (w = o(p, g.props), w.ref = Ri(m, p, g), w.return = m, w) : (w = Il(g.type, g.key, g.props, null, m.mode, w), w.ref = Ri(m, p, g), w.return = m, w)
    }

    function u(m, p, g, w) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation ? (p = Pc(g, m.mode, w), p.return = m, p) : (p = o(p, g.children || []), p.return = m, p)
    }

    function c(m, p, g, w, C) {
        return p === null || p.tag !== 7 ? (p = oo(g, m.mode, w, C), p.return = m, p) : (p = o(p, g), p.return = m, p)
    }

    function f(m, p, g) {
        if (typeof p == "string" && p !== "" || typeof p == "number") return p = kc("" + p, m.mode, g), p.return = m, p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case rl:
                    return g = Il(p.type, p.key, p.props, null, m.mode, g), g.ref = Ri(m, null, p), g.return = m, g;
                case jo:
                    return p = Pc(p, m.mode, g), p.return = m, p;
                case vr:
                    var w = p._init;
                    return f(m, w(p._payload), g)
            }
            if (Vi(p) || Ci(p)) return p = oo(p, m.mode, g, null), p.return = m, p;
            hl(m, p)
        }
        return null
    }

    function h(m, p, g, w) {
        var C = p !== null ? p.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number") return C !== null ? null : l(m, p, "" + g, w);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case rl:
                    return g.key === C ? a(m, p, g, w) : null;
                case jo:
                    return g.key === C ? u(m, p, g, w) : null;
                case vr:
                    return C = g._init, h(m, p, C(g._payload), w)
            }
            if (Vi(g) || Ci(g)) return C !== null ? null : c(m, p, g, w, null);
            hl(m, g)
        }
        return null
    }

    function y(m, p, g, w, C) {
        if (typeof w == "string" && w !== "" || typeof w == "number") return m = m.get(g) || null, l(p, m, "" + w, C);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case rl:
                    return m = m.get(w.key === null ? g : w.key) || null, a(p, m, w, C);
                case jo:
                    return m = m.get(w.key === null ? g : w.key) || null, u(p, m, w, C);
                case vr:
                    var S = w._init;
                    return y(m, p, g, S(w._payload), C)
            }
            if (Vi(w) || Ci(w)) return m = m.get(g) || null, c(p, m, w, C, null);
            hl(p, w)
        }
        return null
    }

    function v(m, p, g, w) {
        for (var C = null, S = null, k = p, P = p = 0, N = null; k !== null && P < g.length; P++) {
            k.index > P ? (N = k, k = null) : N = k.sibling;
            var O = h(m, k, g[P], w);
            if (O === null) {
                k === null && (k = N);
                break
            }
            e && k && O.alternate === null && t(m, k), p = i(O, p, P), S === null ? C = O : S.sibling = O, S = O, k = N
        }
        if (P === g.length) return n(m, k), ze && Qr(m, P), C;
        if (k === null) {
            for (; P < g.length; P++) k = f(m, g[P], w), k !== null && (p = i(k, p, P), S === null ? C = k : S.sibling = k, S = k);
            return ze && Qr(m, P), C
        }
        for (k = r(m, k); P < g.length; P++) N = y(k, m, P, g[P], w), N !== null && (e && N.alternate !== null && k.delete(N.key === null ? P : N.key), p = i(N, p, P), S === null ? C = N : S.sibling = N, S = N);
        return e && k.forEach(function(L) {
            return t(m, L)
        }), ze && Qr(m, P), C
    }

    function d(m, p, g, w) {
        var C = Ci(g);
        if (typeof C != "function") throw Error(K(150));
        if (g = C.call(g), g == null) throw Error(K(151));
        for (var S = C = null, k = p, P = p = 0, N = null, O = g.next(); k !== null && !O.done; P++, O = g.next()) {
            k.index > P ? (N = k, k = null) : N = k.sibling;
            var L = h(m, k, O.value, w);
            if (L === null) {
                k === null && (k = N);
                break
            }
            e && k && L.alternate === null && t(m, k), p = i(L, p, P), S === null ? C = L : S.sibling = L, S = L, k = N
        }
        if (O.done) return n(m, k), ze && Qr(m, P), C;
        if (k === null) {
            for (; !O.done; P++, O = g.next()) O = f(m, O.value, w), O !== null && (p = i(O, p, P), S === null ? C = O : S.sibling = O, S = O);
            return ze && Qr(m, P), C
        }
        for (k = r(m, k); !O.done; P++, O = g.next()) O = y(k, m, P, O.value, w), O !== null && (e && O.alternate !== null && k.delete(O.key === null ? P : O.key), p = i(O, p, P), S === null ? C = O : S.sibling = O, S = O);
        return e && k.forEach(function($) {
            return t(m, $)
        }), ze && Qr(m, P), C
    }

    function b(m, p, g, w) {
        if (typeof g == "object" && g !== null && g.type === No && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case rl:
                    e: {
                        for (var C = g.key, S = p; S !== null;) {
                            if (S.key === C) {
                                if (C = g.type, C === No) {
                                    if (S.tag === 7) {
                                        n(m, S.sibling), p = o(S, g.props.children), p.return = m, m = p;
                                        break e
                                    }
                                } else if (S.elementType === C || typeof C == "object" && C !== null && C.$$typeof === vr && Jh(C) === S.type) {
                                    n(m, S.sibling), p = o(S, g.props), p.ref = Ri(m, S, g), p.return = m, m = p;
                                    break e
                                }
                                n(m, S);
                                break
                            } else t(m, S);
                            S = S.sibling
                        }
                        g.type === No ? (p = oo(g.props.children, m.mode, w, g.key), p.return = m, m = p) : (w = Il(g.type, g.key, g.props, null, m.mode, w), w.ref = Ri(m, p, g), w.return = m, m = w)
                    }
                    return s(m);
                case jo:
                    e: {
                        for (S = g.key; p !== null;) {
                            if (p.key === S)
                                if (p.tag === 4 && p.stateNode.containerInfo === g.containerInfo && p.stateNode.implementation === g.implementation) {
                                    n(m, p.sibling), p = o(p, g.children || []), p.return = m, m = p;
                                    break e
                                } else {
                                    n(m, p);
                                    break
                                }
                            else t(m, p);
                            p = p.sibling
                        }
                        p = Pc(g, m.mode, w),
                        p.return = m,
                        m = p
                    }
                    return s(m);
                case vr:
                    return S = g._init, b(m, p, S(g._payload), w)
            }
            if (Vi(g)) return v(m, p, g, w);
            if (Ci(g)) return d(m, p, g, w);
            hl(m, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, p !== null && p.tag === 6 ? (n(m, p.sibling), p = o(p, g), p.return = m, m = p) : (n(m, p), p = kc(g, m.mode, w), p.return = m, m = p), s(m)) : n(m, p)
    }
    return b
}
var Zo = by(!0),
    wy = by(!1),
    Hs = {},
    Dn = Br(Hs),
    Ss = Br(Hs),
    Es = Br(Hs);

function Zr(e) {
    if (e === Hs) throw Error(K(174));
    return e
}

function Vd(e, t) {
    switch (Ne(Es, t), Ne(Ss, e), Ne(Dn, Hs), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : nf(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = nf(t, e)
    }
    Le(Dn), Ne(Dn, t)
}

function ei() {
    Le(Dn), Le(Ss), Le(Es)
}

function Sy(e) {
    Zr(Es.current);
    var t = Zr(Dn.current),
        n = nf(t, e.type);
    t !== n && (Ne(Ss, e), Ne(Dn, n))
}

function Dd(e) {
    Ss.current === e && (Le(Dn), Le(Ss))
}
var De = Br(0);

function ha(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var xc = [];

function Hd() {
    for (var e = 0; e < xc.length; e++) xc[e]._workInProgressVersionPrimary = null;
    xc.length = 0
}
var _l = cr.ReactCurrentDispatcher,
    bc = cr.ReactCurrentBatchConfig,
    uo = 0,
    He = null,
    it = null,
    at = null,
    ma = !1,
    es = !1,
    Cs = 0,
    Pw = 0;

function yt() {
    throw Error(K(321))
}

function Wd(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!$n(e[n], t[n])) return !1;
    return !0
}

function Qd(e, t, n, r, o, i) {
    if (uo = i, He = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, _l.current = e === null || e.memoizedState === null ? jw : Nw, e = n(r, o), es) {
        i = 0;
        do {
            if (es = !1, Cs = 0, 25 <= i) throw Error(K(301));
            i += 1, at = it = null, t.updateQueue = null, _l.current = _w, e = n(r, o)
        } while (es)
    }
    if (_l.current = va, t = it !== null && it.next !== null, uo = 0, at = it = He = null, ma = !1, t) throw Error(K(300));
    return e
}

function Kd() {
    var e = Cs !== 0;
    return Cs = 0, e
}

function In() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return at === null ? He.memoizedState = at = e : at = at.next = e, at
}

function gn() {
    if (it === null) {
        var e = He.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = it.next;
    var t = at === null ? He.memoizedState : at.next;
    if (t !== null) at = t, it = e;
    else {
        if (e === null) throw Error(K(310));
        it = e, e = {
            memoizedState: it.memoizedState,
            baseState: it.baseState,
            baseQueue: it.baseQueue,
            queue: it.queue,
            next: null
        }, at === null ? He.memoizedState = at = e : at = at.next = e
    }
    return at
}

function ks(e, t) {
    return typeof t == "function" ? t(e) : t
}

function wc(e) {
    var t = gn(),
        n = t.queue;
    if (n === null) throw Error(K(311));
    n.lastRenderedReducer = e;
    var r = it,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next, i.next = s
        }
        r.baseQueue = o = i, n.pending = null
    }
    if (o !== null) {
        i = o.next, r = r.baseState;
        var l = s = null,
            a = null,
            u = i;
        do {
            var c = u.lane;
            if ((uo & c) === c) a !== null && (a = a.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = f, s = r) : a = a.next = f, He.lanes |= c, co |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        a === null ? s = r : a.next = l, $n(r, t.memoizedState) || (Lt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        o = e;
        do i = o.lane, He.lanes |= i, co |= i, o = o.next; while (o !== e)
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Sc(e) {
    var t = gn(),
        n = t.queue;
    if (n === null) throw Error(K(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do i = e(i, s.action), s = s.next; while (s !== o);
        $n(i, t.memoizedState) || (Lt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function Ey() {}

function Cy(e, t) {
    var n = He,
        r = gn(),
        o = t(),
        i = !$n(r.memoizedState, o);
    if (i && (r.memoizedState = o, Lt = !0), r = r.queue, qd(Oy.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || at !== null && at.memoizedState.tag & 1) {
        if (n.flags |= 2048, Ps(9, Py.bind(null, n, r, o, t), void 0, null), ut === null) throw Error(K(349));
        uo & 30 || ky(n, t, o)
    }
    return o
}

function ky(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = He.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, He.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Py(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Ty(t) && Ry(e)
}

function Oy(e, t, n) {
    return n(function() {
        Ty(t) && Ry(e)
    })
}

function Ty(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !$n(e, n)
    } catch {
        return !0
    }
}

function Ry(e) {
    var t = ir(e, 1);
    t !== null && Nn(t, e, 1, -1)
}

function Zh(e) {
    var t = In();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ks,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Rw.bind(null, He, e), [t.memoizedState, e]
}

function Ps(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = He.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, He.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function jy() {
    return gn().memoizedState
}

function $l(e, t, n, r) {
    var o = In();
    He.flags |= e, o.memoizedState = Ps(1 | t, n, void 0, r === void 0 ? null : r)
}

function Ga(e, t, n, r) {
    var o = gn();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (it !== null) {
        var s = it.memoizedState;
        if (i = s.destroy, r !== null && Wd(r, s.deps)) {
            o.memoizedState = Ps(t, n, i, r);
            return
        }
    }
    He.flags |= e, o.memoizedState = Ps(1 | t, n, i, r)
}

function em(e, t) {
    return $l(8390656, 8, e, t)
}

function qd(e, t) {
    return Ga(2048, 8, e, t)
}

function Ny(e, t) {
    return Ga(4, 2, e, t)
}

function _y(e, t) {
    return Ga(4, 4, e, t)
}

function $y(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function My(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ga(4, 4, $y.bind(null, t, e), n)
}

function Gd() {}

function Ay(e, t) {
    var n = gn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wd(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Ly(e, t) {
    var n = gn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wd(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Iy(e, t, n) {
    return uo & 21 ? ($n(n, t) || (n = Bg(), He.lanes |= n, co |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Lt = !0), e.memoizedState = n)
}

function Ow(e, t) {
    var n = Pe;
    Pe = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = bc.transition;
    bc.transition = {};
    try {
        e(!1), t()
    } finally {
        Pe = n, bc.transition = r
    }
}

function Fy() {
    return gn().memoizedState
}

function Tw(e, t, n) {
    var r = Mr(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, zy(e)) By(t, n);
    else if (n = vy(e, t, n, r), n !== null) {
        var o = Rt();
        Nn(n, e, r, o), Uy(n, t, r)
    }
}

function Rw(e, t, n) {
    var r = Mr(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (zy(e)) By(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var s = t.lastRenderedState,
                l = i(s, n);
            if (o.hasEagerState = !0, o.eagerState = l, $n(l, s)) {
                var a = t.interleaved;
                a === null ? (o.next = o, Bd(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
                return
            }
        } catch {} finally {}
        n = vy(e, t, o, r), n !== null && (o = Rt(), Nn(n, e, r, o), Uy(n, t, r))
    }
}

function zy(e) {
    var t = e.alternate;
    return e === He || t !== null && t === He
}

function By(e, t) {
    es = ma = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Uy(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Pd(e, n)
    }
}
var va = {
        readContext: vn,
        useCallback: yt,
        useContext: yt,
        useEffect: yt,
        useImperativeHandle: yt,
        useInsertionEffect: yt,
        useLayoutEffect: yt,
        useMemo: yt,
        useReducer: yt,
        useRef: yt,
        useState: yt,
        useDebugValue: yt,
        useDeferredValue: yt,
        useTransition: yt,
        useMutableSource: yt,
        useSyncExternalStore: yt,
        useId: yt,
        unstable_isNewReconciler: !1
    },
    jw = {
        readContext: vn,
        useCallback: function(e, t) {
            return In().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: vn,
        useEffect: em,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, $l(4194308, 4, $y.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return $l(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return $l(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = In();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = In();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Tw.bind(null, He, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = In();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: Zh,
        useDebugValue: Gd,
        useDeferredValue: function(e) {
            return In().memoizedState = e
        },
        useTransition: function() {
            var e = Zh(!1),
                t = e[0];
            return e = Ow.bind(null, e[1]), In().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = He,
                o = In();
            if (ze) {
                if (n === void 0) throw Error(K(407));
                n = n()
            } else {
                if (n = t(), ut === null) throw Error(K(349));
                uo & 30 || ky(r, t, n)
            }
            o.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return o.queue = i, em(Oy.bind(null, r, i, e), [e]), r.flags |= 2048, Ps(9, Py.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = In(),
                t = ut.identifierPrefix;
            if (ze) {
                var n = Jn,
                    r = Yn;
                n = (r & ~(1 << 32 - jn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Cs++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Pw++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Nw = {
        readContext: vn,
        useCallback: Ay,
        useContext: vn,
        useEffect: qd,
        useImperativeHandle: My,
        useInsertionEffect: Ny,
        useLayoutEffect: _y,
        useMemo: Ly,
        useReducer: wc,
        useRef: jy,
        useState: function() {
            return wc(ks)
        },
        useDebugValue: Gd,
        useDeferredValue: function(e) {
            var t = gn();
            return Iy(t, it.memoizedState, e)
        },
        useTransition: function() {
            var e = wc(ks)[0],
                t = gn().memoizedState;
            return [e, t]
        },
        useMutableSource: Ey,
        useSyncExternalStore: Cy,
        useId: Fy,
        unstable_isNewReconciler: !1
    },
    _w = {
        readContext: vn,
        useCallback: Ay,
        useContext: vn,
        useEffect: qd,
        useImperativeHandle: My,
        useInsertionEffect: Ny,
        useLayoutEffect: _y,
        useMemo: Ly,
        useReducer: Sc,
        useRef: jy,
        useState: function() {
            return Sc(ks)
        },
        useDebugValue: Gd,
        useDeferredValue: function(e) {
            var t = gn();
            return it === null ? t.memoizedState = e : Iy(t, it.memoizedState, e)
        },
        useTransition: function() {
            var e = Sc(ks)[0],
                t = gn().memoizedState;
            return [e, t]
        },
        useMutableSource: Ey,
        useSyncExternalStore: Cy,
        useId: Fy,
        unstable_isNewReconciler: !1
    };

function ti(e, t) {
    try {
        var n = "",
            r = t;
        do n += sb(r), r = r.return; while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}

function Ec(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function Pf(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var $w = typeof WeakMap == "function" ? WeakMap : Map;

function Vy(e, t, n) {
    n = tr(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        ya || (ya = !0, Lf = r), Pf(e, t)
    }, n
}

function Dy(e, t, n) {
    n = tr(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }, n.callback = function() {
            Pf(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Pf(e, t), typeof r != "function" && ($r === null ? $r = new Set([this]) : $r.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }), n
}

function tm(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new $w;
        var o = new Set;
        r.set(t, o)
    } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = Kw.bind(null, e, t, n), t.then(e, e))
}

function nm(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function rm(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = tr(-1, 1), t.tag = 2, _r(n, t, 1))), n.lanes |= 1), e)
}
var Mw = cr.ReactCurrentOwner,
    Lt = !1;

function Tt(e, t, n, r) {
    t.child = e === null ? wy(t, null, n, r) : Zo(t, e.child, n, r)
}

function om(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Qo(t, o), r = Qd(e, t, n, r, i, o), n = Kd(), e !== null && !Lt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, sr(e, t, o)) : (ze && n && Md(t), t.flags |= 1, Tt(e, t, r, o), t.child)
}

function im(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !rp(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Hy(e, t, i, r, o)) : (e = Il(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : ys, n(s, r) && e.ref === t.ref) return sr(e, t, o)
    }
    return t.flags |= 1, e = Ar(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function Hy(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (ys(i, r) && e.ref === t.ref)
            if (Lt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Lt = !0);
            else return t.lanes = e.lanes, sr(e, t, o)
    }
    return Of(e, t, n, r, o)
}

function Wy(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, Ne(Uo, Kt), Kt |= n;
        else {
            if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, Ne(Uo, Kt), Kt |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : n, Ne(Uo, Kt), Kt |= r
        }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ne(Uo, Kt), Kt |= r;
    return Tt(e, t, o, n), t.child
}

function Qy(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Of(e, t, n, r, o) {
    var i = zt(n) ? lo : Et.current;
    return i = Yo(t, i), Qo(t, o), n = Qd(e, t, n, r, i, o), r = Kd(), e !== null && !Lt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, sr(e, t, o)) : (ze && r && Md(t), t.flags |= 1, Tt(e, t, n, o), t.child)
}

function sm(e, t, n, r, o) {
    if (zt(n)) {
        var i = !0;
        aa(t)
    } else i = !1;
    if (Qo(t, o), t.stateNode === null) Ml(e, t), xy(t, n, r), kf(t, n, r, o), r = !0;
    else if (e === null) {
        var s = t.stateNode,
            l = t.memoizedProps;
        s.props = l;
        var a = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = vn(u) : (u = zt(n) ? lo : Et.current, u = Yo(t, u));
        var c = n.getDerivedStateFromProps,
            f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && Yh(t, s, r, u), gr = !1;
        var h = t.memoizedState;
        s.state = h, pa(t, r, s, o), a = t.memoizedState, l !== r || h !== a || Ft.current || gr ? (typeof c == "function" && (Cf(t, n, c, r), a = t.memoizedState), (l = gr || Xh(t, n, l, r, h, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, gy(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : On(t.type, l), s.props = u, f = t.pendingProps, h = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = vn(a) : (a = zt(n) ? lo : Et.current, a = Yo(t, a));
        var y = n.getDerivedStateFromProps;
        (c = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || h !== a) && Yh(t, s, r, a), gr = !1, h = t.memoizedState, s.state = h, pa(t, r, s, o);
        var v = t.memoizedState;
        l !== f || h !== v || Ft.current || gr ? (typeof y == "function" && (Cf(t, n, y, r), v = t.memoizedState), (u = gr || Xh(t, n, u, r, h, v, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), s.props = r, s.state = v, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Tf(e, t, n, r, i, o)
}

function Tf(e, t, n, r, o, i) {
    Qy(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && Wh(t, n, !1), sr(e, t, i);
    r = t.stateNode, Mw.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Zo(t, e.child, null, i), t.child = Zo(t, null, l, i)) : Tt(e, t, l, i), t.memoizedState = r.state, o && Wh(t, n, !0), t.child
}

function Ky(e) {
    var t = e.stateNode;
    t.pendingContext ? Hh(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Hh(e, t.context, !1), Vd(e, t.containerInfo)
}

function lm(e, t, n, r, o) {
    return Jo(), Ld(o), t.flags |= 256, Tt(e, t, n, r), t.child
}
var Rf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function jf(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function qy(e, t, n) {
    var r = t.pendingProps,
        o = De.current,
        i = !1,
        s = (t.flags & 128) !== 0,
        l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Ne(De, o & 1), e === null) return Sf(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Ja(s, r, 0, null), e = oo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = jf(n), t.memoizedState = Rf, e) : Xd(t, s));
    if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return Aw(e, t, s, r, l, o, n);
    if (i) {
        i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Ar(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Ar(l, i) : (i = oo(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? jf(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Rf, r
    }
    return i = e.child, e = i.sibling, r = Ar(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Xd(e, t) {
    return t = Ja({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function ml(e, t, n, r) {
    return r !== null && Ld(r), Zo(t, e.child, null, n), e = Xd(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Aw(e, t, n, r, o, i, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Ec(Error(K(422))), ml(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Ja({
        mode: "visible",
        children: r.children
    }, o, 0, null), i = oo(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Zo(t, e.child, null, s), t.child.memoizedState = jf(s), t.memoizedState = Rf, i);
    if (!(t.mode & 1)) return ml(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
        return r = l, i = Error(K(419)), r = Ec(i, r, void 0), ml(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0, Lt || l) {
        if (r = ut, r !== null) {
            switch (s & -s) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, ir(e, o), Nn(r, e, o, -1))
        }
        return np(), r = Ec(Error(K(421))), ml(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = qw.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Gt = Nr(o.nextSibling), Xt = t, ze = !0, Rn = null, e !== null && (an[un++] = Yn, an[un++] = Jn, an[un++] = ao, Yn = e.id, Jn = e.overflow, ao = t), t = Xd(t, r.children), t.flags |= 4096, t)
}

function am(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ef(e.return, t, n)
}

function Cc(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
}

function Gy(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if (Tt(e, t, r.children, n), r = De.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && am(e, n, t);
            else if (e.tag === 19) am(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (Ne(De, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && ha(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Cc(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && ha(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            Cc(t, !0, n, null, i);
            break;
        case "together":
            Cc(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Ml(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function sr(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), co |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(K(153));
    if (t.child !== null) {
        for (e = t.child, n = Ar(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Ar(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Lw(e, t, n) {
    switch (t.tag) {
        case 3:
            Ky(t), Jo();
            break;
        case 5:
            Sy(t);
            break;
        case 1:
            zt(t.type) && aa(t);
            break;
        case 4:
            Vd(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            Ne(fa, r._currentValue), r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Ne(De, De.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? qy(e, t, n) : (Ne(De, De.current & 1), e = sr(e, t, n), e !== null ? e.sibling : null);
            Ne(De, De.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Gy(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ne(De, De.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Wy(e, t, n)
    }
    return sr(e, t, n)
}
var Xy, Nf, Yy, Jy;
Xy = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Nf = function() {};
Yy = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, Zr(Dn.current);
        var i = null;
        switch (n) {
            case "input":
                o = Jc(e, o), r = Jc(e, r), i = [];
                break;
            case "select":
                o = We({}, o, {
                    value: void 0
                }), r = We({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                o = tf(e, o), r = tf(e, r), i = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = sa)
        }
        rf(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (fs.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s])
                    } else n || (i || (i = []), i.push(u, n)), n = a;
            else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (fs.hasOwnProperty(u) ? (a != null && u === "onScroll" && Ae("scroll", e), i || l === a || (i = [])) : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
Jy = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function ji(e, t) {
    if (!ze) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function xt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Iw(e, t, n) {
    var r = t.pendingProps;
    switch (Ad(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return xt(t), null;
        case 1:
            return zt(t.type) && la(), xt(t), null;
        case 3:
            return r = t.stateNode, ei(), Le(Ft), Le(Et), Hd(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (pl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Rn !== null && (zf(Rn), Rn = null))), Nf(e, t), xt(t), null;
        case 5:
            Dd(t);
            var o = Zr(Es.current);
            if (n = t.type, e !== null && t.stateNode != null) Yy(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(K(166));
                    return xt(t), null
                }
                if (e = Zr(Dn.current), pl(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[Bn] = t, r[ws] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            Ae("cancel", r), Ae("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Ae("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < Hi.length; o++) Ae(Hi[o], r);
                            break;
                        case "source":
                            Ae("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Ae("error", r), Ae("load", r);
                            break;
                        case "details":
                            Ae("toggle", r);
                            break;
                        case "input":
                            gh(r, i), Ae("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, Ae("invalid", r);
                            break;
                        case "textarea":
                            xh(r, i), Ae("invalid", r)
                    }
                    rf(n, i), o = null;
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var l = i[s];
                            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && dl(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && dl(r.textContent, l, e), o = ["children", "" + l]) : fs.hasOwnProperty(s) && l != null && s === "onScroll" && Ae("scroll", r)
                        } switch (n) {
                        case "input":
                            ol(r), yh(r, i, !0);
                            break;
                        case "textarea":
                            ol(r), bh(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = sa)
                    }
                    r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = kg(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                        is: r.is
                    }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Bn] = t, e[ws] = r, Xy(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (s = of(n, r), n) {
                            case "dialog":
                                Ae("cancel", e), Ae("close", e), o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Ae("load", e), o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < Hi.length; o++) Ae(Hi[o], e);
                                o = r;
                                break;
                            case "source":
                                Ae("error", e), o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Ae("error", e), Ae("load", e), o = r;
                                break;
                            case "details":
                                Ae("toggle", e), o = r;
                                break;
                            case "input":
                                gh(e, r), o = Jc(e, r), Ae("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, o = We({}, r, {
                                    value: void 0
                                }), Ae("invalid", e);
                                break;
                            case "textarea":
                                xh(e, r), o = tf(e, r), Ae("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        rf(n, o),
                        l = o;
                        for (i in l)
                            if (l.hasOwnProperty(i)) {
                                var a = l[i];
                                i === "style" ? Tg(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Pg(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && ds(e, a) : typeof a == "number" && ds(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (fs.hasOwnProperty(i) ? a != null && i === "onScroll" && Ae("scroll", e) : a != null && bd(e, i, a, s))
                            } switch (n) {
                            case "input":
                                ol(e), yh(e, r, !1);
                                break;
                            case "textarea":
                                ol(e), bh(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Lr(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? Vo(e, !!r.multiple, i, !1) : r.defaultValue != null && Vo(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = sa)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return xt(t), null;
        case 6:
            if (e && t.stateNode != null) Jy(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(K(166));
                if (n = Zr(Es.current), Zr(Dn.current), pl(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Bn] = t, (i = r.nodeValue !== n) && (e = Xt, e !== null)) switch (e.tag) {
                        case 3:
                            dl(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && dl(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Bn] = t, t.stateNode = r
            }
            return xt(t), null;
        case 13:
            if (Le(De), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (ze && Gt !== null && t.mode & 1 && !(t.flags & 128)) my(), Jo(), t.flags |= 98560, i = !1;
                else if (i = pl(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(K(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(K(317));
                        i[Bn] = t
                    } else Jo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    xt(t), i = !1
                } else Rn !== null && (zf(Rn), Rn = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || De.current & 1 ? st === 0 && (st = 3) : np())), t.updateQueue !== null && (t.flags |= 4), xt(t), null);
        case 4:
            return ei(), Nf(e, t), e === null && xs(t.stateNode.containerInfo), xt(t), null;
        case 10:
            return zd(t.type._context), xt(t), null;
        case 17:
            return zt(t.type) && la(), xt(t), null;
        case 19:
            if (Le(De), i = t.memoizedState, i === null) return xt(t), null;
            if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
                if (r) ji(i, !1);
                else {
                    if (st !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = ha(e), s !== null) {
                                for (t.flags |= 128, ji(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return Ne(De, De.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && Xe() > ni && (t.flags |= 128, r = !0, ji(i, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = ha(s), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ji(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !ze) return xt(t), null
                    } else 2 * Xe() - i.renderingStartTime > ni && n !== 1073741824 && (t.flags |= 128, r = !0, ji(i, !1), t.lanes = 4194304);
                i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Xe(), t.sibling = null, n = De.current, Ne(De, r ? n & 1 | 2 : n & 1), t) : (xt(t), null);
        case 22:
        case 23:
            return tp(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Kt & 1073741824 && (xt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xt(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(K(156, t.tag))
}

function Fw(e, t) {
    switch (Ad(t), t.tag) {
        case 1:
            return zt(t.type) && la(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return ei(), Le(Ft), Le(Et), Hd(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Dd(t), null;
        case 13:
            if (Le(De), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(K(340));
                Jo()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return Le(De), null;
        case 4:
            return ei(), null;
        case 10:
            return zd(t.type._context), null;
        case 22:
        case 23:
            return tp(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var vl = !1,
    St = !1,
    zw = typeof WeakSet == "function" ? WeakSet : Set,
    ee = null;

function Bo(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            qe(e, t, r)
        } else n.current = null
}

function _f(e, t, n) {
    try {
        n()
    } catch (r) {
        qe(e, t, r)
    }
}
var um = !1;

function Bw(e, t) {
    if (mf = ra, e = ny(), $d(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0,
                    l = -1,
                    a = -1,
                    u = 0,
                    c = 0,
                    f = e,
                    h = null;
                t: for (;;) {
                    for (var y; f !== n || o !== 0 && f.nodeType !== 3 || (l = s + o), f !== i || r !== 0 && f.nodeType !== 3 || (a = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (y = f.firstChild) !== null;) h = f, f = y;
                    for (;;) {
                        if (f === e) break t;
                        if (h === n && ++u === o && (l = s), h === i && ++c === r && (a = s), (y = f.nextSibling) !== null) break;
                        f = h, h = f.parentNode
                    }
                    f = y
                }
                n = l === -1 || a === -1 ? null : {
                    start: l,
                    end: a
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (vf = {
            focusedElem: e,
            selectionRange: n
        }, ra = !1, ee = t; ee !== null;)
        if (t = ee, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ee = e;
        else
            for (; ee !== null;) {
                t = ee;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var d = v.memoizedProps,
                                    b = v.memoizedState,
                                    m = t.stateNode,
                                    p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? d : On(t.type, d), b);
                                m.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(K(163))
                    }
                } catch (w) {
                    qe(t, t.return, w)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, ee = e;
                    break
                }
                ee = t.return
            }
    return v = um, um = !1, v
}

function ts(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0, i !== void 0 && _f(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}

function Xa(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function $f(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Zy(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Zy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Bn], delete t[ws], delete t[xf], delete t[Sw], delete t[Ew])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function e0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function cm(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || e0(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Mf(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = sa));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Mf(e, t, n), e = e.sibling; e !== null;) Mf(e, t, n), e = e.sibling
}

function Af(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Af(e, t, n), e = e.sibling; e !== null;) Af(e, t, n), e = e.sibling
}
var dt = null,
    Tn = !1;

function dr(e, t, n) {
    for (n = n.child; n !== null;) t0(e, t, n), n = n.sibling
}

function t0(e, t, n) {
    if (Vn && typeof Vn.onCommitFiberUnmount == "function") try {
        Vn.onCommitFiberUnmount(Va, n)
    } catch {}
    switch (n.tag) {
        case 5:
            St || Bo(n, t);
        case 6:
            var r = dt,
                o = Tn;
            dt = null, dr(e, t, n), dt = r, Tn = o, dt !== null && (Tn ? (e = dt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : dt.removeChild(n.stateNode));
            break;
        case 18:
            dt !== null && (Tn ? (e = dt, n = n.stateNode, e.nodeType === 8 ? gc(e.parentNode, n) : e.nodeType === 1 && gc(e, n), vs(e)) : gc(dt, n.stateNode));
            break;
        case 4:
            r = dt, o = Tn, dt = n.stateNode.containerInfo, Tn = !0, dr(e, t, n), dt = r, Tn = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!St && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                o = r = r.next;
                do {
                    var i = o,
                        s = i.destroy;
                    i = i.tag, s !== void 0 && (i & 2 || i & 4) && _f(n, t, s), o = o.next
                } while (o !== r)
            }
            dr(e, t, n);
            break;
        case 1:
            if (!St && (Bo(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (l) {
                qe(n, t, l)
            }
            dr(e, t, n);
            break;
        case 21:
            dr(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (St = (r = St) || n.memoizedState !== null, dr(e, t, n), St = r) : dr(e, t, n);
            break;
        default:
            dr(e, t, n)
    }
}

function fm(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new zw), t.forEach(function(r) {
            var o = Gw.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        })
    }
}

function kn(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    s = t,
                    l = s;
                e: for (; l !== null;) {
                    switch (l.tag) {
                        case 5:
                            dt = l.stateNode, Tn = !1;
                            break e;
                        case 3:
                            dt = l.stateNode.containerInfo, Tn = !0;
                            break e;
                        case 4:
                            dt = l.stateNode.containerInfo, Tn = !0;
                            break e
                    }
                    l = l.return
                }
                if (dt === null) throw Error(K(160));
                t0(i, s, o), dt = null, Tn = !1;
                var a = o.alternate;
                a !== null && (a.return = null), o.return = null
            } catch (u) {
                qe(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) n0(t, e), t = t.sibling
}

function n0(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (kn(t, e), An(e), r & 4) {
                try {
                    ts(3, e, e.return), Xa(3, e)
                } catch (d) {
                    qe(e, e.return, d)
                }
                try {
                    ts(5, e, e.return)
                } catch (d) {
                    qe(e, e.return, d)
                }
            }
            break;
        case 1:
            kn(t, e), An(e), r & 512 && n !== null && Bo(n, n.return);
            break;
        case 5:
            if (kn(t, e), An(e), r & 512 && n !== null && Bo(n, n.return), e.flags & 32) {
                var o = e.stateNode;
                try {
                    ds(o, "")
                } catch (d) {
                    qe(e, e.return, d)
                }
            }
            if (r & 4 && (o = e.stateNode, o != null)) {
                var i = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : i,
                    l = e.type,
                    a = e.updateQueue;
                if (e.updateQueue = null, a !== null) try {
                    l === "input" && i.type === "radio" && i.name != null && Eg(o, i), of(l, s);
                    var u = of(l, i);
                    for (s = 0; s < a.length; s += 2) {
                        var c = a[s],
                            f = a[s + 1];
                        c === "style" ? Tg(o, f) : c === "dangerouslySetInnerHTML" ? Pg(o, f) : c === "children" ? ds(o, f) : bd(o, c, f, u)
                    }
                    switch (l) {
                        case "input":
                            Zc(o, i);
                            break;
                        case "textarea":
                            Cg(o, i);
                            break;
                        case "select":
                            var h = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple;
                            var y = i.value;
                            y != null ? Vo(o, !!i.multiple, y, !1) : h !== !!i.multiple && (i.defaultValue != null ? Vo(o, !!i.multiple, i.defaultValue, !0) : Vo(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[ws] = i
                } catch (d) {
                    qe(e, e.return, d)
                }
            }
            break;
        case 6:
            if (kn(t, e), An(e), r & 4) {
                if (e.stateNode === null) throw Error(K(162));
                o = e.stateNode, i = e.memoizedProps;
                try {
                    o.nodeValue = i
                } catch (d) {
                    qe(e, e.return, d)
                }
            }
            break;
        case 3:
            if (kn(t, e), An(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                vs(t.containerInfo)
            } catch (d) {
                qe(e, e.return, d)
            }
            break;
        case 4:
            kn(t, e), An(e);
            break;
        case 13:
            kn(t, e), An(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Zd = Xe())), r & 4 && fm(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (St = (u = St) || c, kn(t, e), St = u) : kn(t, e), An(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (ee = e, c = e.child; c !== null;) {
                        for (f = ee = c; ee !== null;) {
                            switch (h = ee, y = h.child, h.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    ts(4, h, h.return);
                                    break;
                                case 1:
                                    Bo(h, h.return);
                                    var v = h.stateNode;
                                    if (typeof v.componentWillUnmount == "function") {
                                        r = h, n = h.return;
                                        try {
                                            t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount()
                                        } catch (d) {
                                            qe(r, n, d)
                                        }
                                    }
                                    break;
                                case 5:
                                    Bo(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        pm(f);
                                        continue
                                    }
                            }
                            y !== null ? (y.return = h, ee = y) : pm(f)
                        }
                        c = c.sibling
                    }
                e: for (c = null, f = e;;) {
                    if (f.tag === 5) {
                        if (c === null) {
                            c = f;
                            try {
                                o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = f.stateNode, a = f.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Og("display", s))
                            } catch (d) {
                                qe(e, e.return, d)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (c === null) try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (d) {
                            qe(e, e.return, d)
                        }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue
                    }
                    if (f === e) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === e) break e;
                        c === f && (c = null), f = f.return
                    }
                    c === f && (c = null), f.sibling.return = f.return, f = f.sibling
                }
            }
            break;
        case 19:
            kn(t, e), An(e), r & 4 && fm(e);
            break;
        case 21:
            break;
        default:
            kn(t, e), An(e)
    }
}

function An(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (e0(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(K(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (ds(o, ""), r.flags &= -33);
                    var i = cm(e);
                    Af(e, i, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        l = cm(e);
                    Mf(e, l, s);
                    break;
                default:
                    throw Error(K(161))
            }
        }
        catch (a) {
            qe(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Uw(e, t, n) {
    ee = e, r0(e)
}

function r0(e, t, n) {
    for (var r = (e.mode & 1) !== 0; ee !== null;) {
        var o = ee,
            i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || vl;
            if (!s) {
                var l = o.alternate,
                    a = l !== null && l.memoizedState !== null || St;
                l = vl;
                var u = St;
                if (vl = s, (St = a) && !u)
                    for (ee = o; ee !== null;) s = ee, a = s.child, s.tag === 22 && s.memoizedState !== null ? hm(o) : a !== null ? (a.return = s, ee = a) : hm(o);
                for (; i !== null;) ee = i, r0(i), i = i.sibling;
                ee = o, vl = l, St = u
            }
            dm(e)
        } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, ee = i) : dm(e)
    }
}

function dm(e) {
    for (; ee !== null;) {
        var t = ee;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        St || Xa(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !St)
                            if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : On(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var i = t.updateQueue;
                        i !== null && Gh(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Gh(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case "img":
                                    a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && vs(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(K(163))
                }
                St || t.flags & 512 && $f(t)
            } catch (h) {
                qe(t, t.return, h)
            }
        }
        if (t === e) {
            ee = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, ee = n;
            break
        }
        ee = t.return
    }
}

function pm(e) {
    for (; ee !== null;) {
        var t = ee;
        if (t === e) {
            ee = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, ee = n;
            break
        }
        ee = t.return
    }
}

function hm(e) {
    for (; ee !== null;) {
        var t = ee;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Xa(4, t)
                    } catch (a) {
                        qe(t, n, a)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            qe(t, o, a)
                        }
                    }
                    var i = t.return;
                    try {
                        $f(t)
                    } catch (a) {
                        qe(t, i, a)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        $f(t)
                    } catch (a) {
                        qe(t, s, a)
                    }
            }
        } catch (a) {
            qe(t, t.return, a)
        }
        if (t === e) {
            ee = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return, ee = l;
            break
        }
        ee = t.return
    }
}
var Vw = Math.ceil,
    ga = cr.ReactCurrentDispatcher,
    Yd = cr.ReactCurrentOwner,
    dn = cr.ReactCurrentBatchConfig,
    ge = 0,
    ut = null,
    tt = null,
    ht = 0,
    Kt = 0,
    Uo = Br(0),
    st = 0,
    Os = null,
    co = 0,
    Ya = 0,
    Jd = 0,
    ns = null,
    At = null,
    Zd = 0,
    ni = 1 / 0,
    Gn = null,
    ya = !1,
    Lf = null,
    $r = null,
    gl = !1,
    Er = null,
    xa = 0,
    rs = 0,
    If = null,
    Al = -1,
    Ll = 0;

function Rt() {
    return ge & 6 ? Xe() : Al !== -1 ? Al : Al = Xe()
}

function Mr(e) {
    return e.mode & 1 ? ge & 2 && ht !== 0 ? ht & -ht : kw.transition !== null ? (Ll === 0 && (Ll = Bg()), Ll) : (e = Pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Kg(e.type)), e) : 1
}

function Nn(e, t, n, r) {
    if (50 < rs) throw rs = 0, If = null, Error(K(185));
    Us(e, n, r), (!(ge & 2) || e !== ut) && (e === ut && (!(ge & 2) && (Ya |= n), st === 4 && br(e, ht)), Bt(e, r), n === 1 && ge === 0 && !(t.mode & 1) && (ni = Xe() + 500, Ka && Ur()))
}

function Bt(e, t) {
    var n = e.callbackNode;
    kb(e, t);
    var r = na(e, e === ut ? ht : 0);
    if (r === 0) n !== null && Eh(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Eh(n), t === 1) e.tag === 0 ? Cw(mm.bind(null, e)) : dy(mm.bind(null, e)), bw(function() {
            !(ge & 6) && Ur()
        }), n = null;
        else {
            switch (Ug(r)) {
                case 1:
                    n = kd;
                    break;
                case 4:
                    n = Fg;
                    break;
                case 16:
                    n = ta;
                    break;
                case 536870912:
                    n = zg;
                    break;
                default:
                    n = ta
            }
            n = f0(n, o0.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function o0(e, t) {
    if (Al = -1, Ll = 0, ge & 6) throw Error(K(327));
    var n = e.callbackNode;
    if (Ko() && e.callbackNode !== n) return null;
    var r = na(e, e === ut ? ht : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ba(e, r);
    else {
        t = r;
        var o = ge;
        ge |= 2;
        var i = s0();
        (ut !== e || ht !== t) && (Gn = null, ni = Xe() + 500, ro(e, t));
        do try {
            Ww();
            break
        } catch (l) {
            i0(e, l)
        }
        while (!0);
        Fd(), ga.current = i, ge = o, tt !== null ? t = 0 : (ut = null, ht = 0, t = st)
    }
    if (t !== 0) {
        if (t === 2 && (o = cf(e), o !== 0 && (r = o, t = Ff(e, o))), t === 1) throw n = Os, ro(e, 0), br(e, r), Bt(e, Xe()), n;
        if (t === 6) br(e, r);
        else {
            if (o = e.current.alternate, !(r & 30) && !Dw(o) && (t = ba(e, r), t === 2 && (i = cf(e), i !== 0 && (r = i, t = Ff(e, i))), t === 1)) throw n = Os, ro(e, 0), br(e, r), Bt(e, Xe()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(K(345));
                case 2:
                    Kr(e, At, Gn);
                    break;
                case 3:
                    if (br(e, r), (r & 130023424) === r && (t = Zd + 500 - Xe(), 10 < t)) {
                        if (na(e, 0) !== 0) break;
                        if (o = e.suspendedLanes, (o & r) !== r) {
                            Rt(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = yf(Kr.bind(null, e, At, Gn), t);
                        break
                    }
                    Kr(e, At, Gn);
                    break;
                case 4:
                    if (br(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var s = 31 - jn(r);
                        i = 1 << s, s = t[s], s > o && (o = s), r &= ~i
                    }
                    if (r = o, r = Xe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Vw(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = yf(Kr.bind(null, e, At, Gn), r);
                        break
                    }
                    Kr(e, At, Gn);
                    break;
                case 5:
                    Kr(e, At, Gn);
                    break;
                default:
                    throw Error(K(329))
            }
        }
    }
    return Bt(e, Xe()), e.callbackNode === n ? o0.bind(null, e) : null
}

function Ff(e, t) {
    var n = ns;
    return e.current.memoizedState.isDehydrated && (ro(e, t).flags |= 256), e = ba(e, t), e !== 2 && (t = At, At = n, t !== null && zf(t)), e
}

function zf(e) {
    At === null ? At = e : At.push.apply(At, e)
}

function Dw(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!$n(i(), o)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function br(e, t) {
    for (t &= ~Jd, t &= ~Ya, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - jn(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function mm(e) {
    if (ge & 6) throw Error(K(327));
    Ko();
    var t = na(e, 0);
    if (!(t & 1)) return Bt(e, Xe()), null;
    var n = ba(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = cf(e);
        r !== 0 && (t = r, n = Ff(e, r))
    }
    if (n === 1) throw n = Os, ro(e, 0), br(e, t), Bt(e, Xe()), n;
    if (n === 6) throw Error(K(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Kr(e, At, Gn), Bt(e, Xe()), null
}

function ep(e, t) {
    var n = ge;
    ge |= 1;
    try {
        return e(t)
    } finally {
        ge = n, ge === 0 && (ni = Xe() + 500, Ka && Ur())
    }
}

function fo(e) {
    Er !== null && Er.tag === 0 && !(ge & 6) && Ko();
    var t = ge;
    ge |= 1;
    var n = dn.transition,
        r = Pe;
    try {
        if (dn.transition = null, Pe = 1, e) return e()
    } finally {
        Pe = r, dn.transition = n, ge = t, !(ge & 6) && Ur()
    }
}

function tp() {
    Kt = Uo.current, Le(Uo)
}

function ro(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, xw(n)), tt !== null)
        for (n = tt.return; n !== null;) {
            var r = n;
            switch (Ad(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && la();
                    break;
                case 3:
                    ei(), Le(Ft), Le(Et), Hd();
                    break;
                case 5:
                    Dd(r);
                    break;
                case 4:
                    ei();
                    break;
                case 13:
                    Le(De);
                    break;
                case 19:
                    Le(De);
                    break;
                case 10:
                    zd(r.type._context);
                    break;
                case 22:
                case 23:
                    tp()
            }
            n = n.return
        }
    if (ut = e, tt = e = Ar(e.current, null), ht = Kt = t, st = 0, Os = null, Jd = Ya = co = 0, At = ns = null, Jr !== null) {
        for (t = 0; t < Jr.length; t++)
            if (n = Jr[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o, r.next = s
                }
                n.pending = r
            } Jr = null
    }
    return e
}

function i0(e, t) {
    do {
        var n = tt;
        try {
            if (Fd(), _l.current = va, ma) {
                for (var r = He.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null), r = r.next
                }
                ma = !1
            }
            if (uo = 0, at = it = He = null, es = !1, Cs = 0, Yd.current = null, n === null || n.return === null) {
                st = 1, Os = t, tt = null;
                break
            }
            e: {
                var i = e,
                    s = n.return,
                    l = n,
                    a = t;
                if (t = ht, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a,
                        c = l,
                        f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var h = c.alternate;
                        h ? (c.updateQueue = h.updateQueue, c.memoizedState = h.memoizedState, c.lanes = h.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var y = nm(s);
                    if (y !== null) {
                        y.flags &= -257, rm(y, s, l, i, t), y.mode & 1 && tm(i, u, t), t = y, a = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var d = new Set;
                            d.add(a), t.updateQueue = d
                        } else v.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            tm(i, u, t), np();
                            break e
                        }
                        a = Error(K(426))
                    }
                } else if (ze && l.mode & 1) {
                    var b = nm(s);
                    if (b !== null) {
                        !(b.flags & 65536) && (b.flags |= 256), rm(b, s, l, i, t), Ld(ti(a, l));
                        break e
                    }
                }
                i = a = ti(a, l),
                st !== 4 && (st = 2),
                ns === null ? ns = [i] : ns.push(i),
                i = s;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var m = Vy(i, a, t);
                            qh(i, m);
                            break e;
                        case 1:
                            l = a;
                            var p = i.type,
                                g = i.stateNode;
                            if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && ($r === null || !$r.has(g)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var w = Dy(i, l, t);
                                qh(i, w);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            a0(n)
        } catch (C) {
            t = C, tt === n && n !== null && (tt = n = n.return);
            continue
        }
        break
    } while (!0)
}

function s0() {
    var e = ga.current;
    return ga.current = va, e === null ? va : e
}

function np() {
    (st === 0 || st === 3 || st === 2) && (st = 4), ut === null || !(co & 268435455) && !(Ya & 268435455) || br(ut, ht)
}

function ba(e, t) {
    var n = ge;
    ge |= 2;
    var r = s0();
    (ut !== e || ht !== t) && (Gn = null, ro(e, t));
    do try {
        Hw();
        break
    } catch (o) {
        i0(e, o)
    }
    while (!0);
    if (Fd(), ge = n, ga.current = r, tt !== null) throw Error(K(261));
    return ut = null, ht = 0, st
}

function Hw() {
    for (; tt !== null;) l0(tt)
}

function Ww() {
    for (; tt !== null && !vb();) l0(tt)
}

function l0(e) {
    var t = c0(e.alternate, e, Kt);
    e.memoizedProps = e.pendingProps, t === null ? a0(e) : tt = t, Yd.current = null
}

function a0(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = Fw(n, t), n !== null) {
                n.flags &= 32767, tt = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                st = 6, tt = null;
                return
            }
        } else if (n = Iw(n, t, Kt), n !== null) {
            tt = n;
            return
        }
        if (t = t.sibling, t !== null) {
            tt = t;
            return
        }
        tt = t = e
    } while (t !== null);
    st === 0 && (st = 5)
}

function Kr(e, t, n) {
    var r = Pe,
        o = dn.transition;
    try {
        dn.transition = null, Pe = 1, Qw(e, t, n, r)
    } finally {
        dn.transition = o, Pe = r
    }
    return null
}

function Qw(e, t, n, r) {
    do Ko(); while (Er !== null);
    if (ge & 6) throw Error(K(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(K(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Pb(e, i), e === ut && (tt = ut = null, ht = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || gl || (gl = !0, f0(ta, function() {
            return Ko(), null
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = dn.transition, dn.transition = null;
        var s = Pe;
        Pe = 1;
        var l = ge;
        ge |= 4, Yd.current = null, Bw(e, n), n0(n, e), dw(vf), ra = !!mf, vf = mf = null, e.current = n, Uw(n), gb(), ge = l, Pe = s, dn.transition = i
    } else e.current = n;
    if (gl && (gl = !1, Er = e, xa = o), i = e.pendingLanes, i === 0 && ($r = null), bb(n.stateNode), Bt(e, Xe()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
    if (ya) throw ya = !1, e = Lf, Lf = null, e;
    return xa & 1 && e.tag !== 0 && Ko(), i = e.pendingLanes, i & 1 ? e === If ? rs++ : (rs = 0, If = e) : rs = 0, Ur(), null
}

function Ko() {
    if (Er !== null) {
        var e = Ug(xa),
            t = dn.transition,
            n = Pe;
        try {
            if (dn.transition = null, Pe = 16 > e ? 16 : e, Er === null) var r = !1;
            else {
                if (e = Er, Er = null, xa = 0, ge & 6) throw Error(K(331));
                var o = ge;
                for (ge |= 4, ee = e.current; ee !== null;) {
                    var i = ee,
                        s = i.child;
                    if (ee.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (ee = u; ee !== null;) {
                                    var c = ee;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ts(8, c, i)
                                    }
                                    var f = c.child;
                                    if (f !== null) f.return = c, ee = f;
                                    else
                                        for (; ee !== null;) {
                                            c = ee;
                                            var h = c.sibling,
                                                y = c.return;
                                            if (Zy(c), c === u) {
                                                ee = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = y, ee = h;
                                                break
                                            }
                                            ee = y
                                        }
                                }
                            }
                            var v = i.alternate;
                            if (v !== null) {
                                var d = v.child;
                                if (d !== null) {
                                    v.child = null;
                                    do {
                                        var b = d.sibling;
                                        d.sibling = null, d = b
                                    } while (d !== null)
                                }
                            }
                            ee = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null) s.return = i, ee = s;
                    else e: for (; ee !== null;) {
                        if (i = ee, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                ts(9, i, i.return)
                        }
                        var m = i.sibling;
                        if (m !== null) {
                            m.return = i.return, ee = m;
                            break e
                        }
                        ee = i.return
                    }
                }
                var p = e.current;
                for (ee = p; ee !== null;) {
                    s = ee;
                    var g = s.child;
                    if (s.subtreeFlags & 2064 && g !== null) g.return = s, ee = g;
                    else e: for (s = p; ee !== null;) {
                        if (l = ee, l.flags & 2048) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Xa(9, l)
                            }
                        } catch (C) {
                            qe(l, l.return, C)
                        }
                        if (l === s) {
                            ee = null;
                            break e
                        }
                        var w = l.sibling;
                        if (w !== null) {
                            w.return = l.return, ee = w;
                            break e
                        }
                        ee = l.return
                    }
                }
                if (ge = o, Ur(), Vn && typeof Vn.onPostCommitFiberRoot == "function") try {
                    Vn.onPostCommitFiberRoot(Va, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            Pe = n, dn.transition = t
        }
    }
    return !1
}

function vm(e, t, n) {
    t = ti(n, t), t = Vy(e, t, 1), e = _r(e, t, 1), t = Rt(), e !== null && (Us(e, 1, t), Bt(e, t))
}

function qe(e, t, n) {
    if (e.tag === 3) vm(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                vm(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && ($r === null || !$r.has(r))) {
                    e = ti(n, e), e = Dy(t, e, 1), t = _r(t, e, 1), e = Rt(), t !== null && (Us(t, 1, e), Bt(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Kw(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Rt(), e.pingedLanes |= e.suspendedLanes & n, ut === e && (ht & n) === n && (st === 4 || st === 3 && (ht & 130023424) === ht && 500 > Xe() - Zd ? ro(e, 0) : Jd |= n), Bt(e, t)
}

function u0(e, t) {
    t === 0 && (e.mode & 1 ? (t = ll, ll <<= 1, !(ll & 130023424) && (ll = 4194304)) : t = 1);
    var n = Rt();
    e = ir(e, t), e !== null && (Us(e, t, n), Bt(e, n))
}

function qw(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), u0(e, n)
}

function Gw(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(K(314))
    }
    r !== null && r.delete(t), u0(e, n)
}
var c0;
c0 = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ft.current) Lt = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Lt = !1, Lw(e, t, n);
            Lt = !!(e.flags & 131072)
        }
    else Lt = !1, ze && t.flags & 1048576 && py(t, ca, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Ml(e, t), e = t.pendingProps;
            var o = Yo(t, Et.current);
            Qo(t, n), o = Qd(null, t, r, e, o, n);
            var i = Kd();
            return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, zt(r) ? (i = !0, aa(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Ud(t), o.updater = qa, t.stateNode = o, o._reactInternals = t, kf(t, r, e, n), t = Tf(null, t, r, !0, i, n)) : (t.tag = 0, ze && i && Md(t), Tt(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Ml(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Yw(r), e = On(r, e), o) {
                    case 0:
                        t = Of(null, t, r, e, n);
                        break e;
                    case 1:
                        t = sm(null, t, r, e, n);
                        break e;
                    case 11:
                        t = om(null, t, r, e, n);
                        break e;
                    case 14:
                        t = im(null, t, r, On(r.type, e), n);
                        break e
                }
                throw Error(K(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : On(r, o), Of(e, t, r, o, n);
        case 1:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : On(r, o), sm(e, t, r, o, n);
        case 3:
            e: {
                if (Ky(t), e === null) throw Error(K(387));r = t.pendingProps,
                i = t.memoizedState,
                o = i.element,
                gy(e, t),
                pa(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, i.isDehydrated)
                    if (i = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        o = ti(Error(K(423)), t), t = lm(e, t, r, n, o);
                        break e
                    } else if (r !== o) {
                    o = ti(Error(K(424)), t), t = lm(e, t, r, n, o);
                    break e
                } else
                    for (Gt = Nr(t.stateNode.containerInfo.firstChild), Xt = t, ze = !0, Rn = null, n = wy(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (Jo(), r === o) {
                        t = sr(e, t, n);
                        break e
                    }
                    Tt(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Sy(t), e === null && Sf(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, gf(r, o) ? s = null : i !== null && gf(r, i) && (t.flags |= 32), Qy(e, t), Tt(e, t, s, n), t.child;
        case 6:
            return e === null && Sf(t), null;
        case 13:
            return qy(e, t, n);
        case 4:
            return Vd(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Zo(t, null, r, n) : Tt(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : On(r, o), om(e, t, r, o, n);
        case 7:
            return Tt(e, t, t.pendingProps, n), t.child;
        case 8:
            return Tt(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Tt(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, Ne(fa, r._currentValue), r._currentValue = s, i !== null)
                    if ($n(i.value, s)) {
                        if (i.children === o.children && !Ft.current) {
                            t = sr(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var l = i.dependencies;
                            if (l !== null) {
                                s = i.child;
                                for (var a = l.firstContext; a !== null;) {
                                    if (a.context === r) {
                                        if (i.tag === 1) {
                                            a = tr(-1, n & -n), a.tag = 2;
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a
                                            }
                                        }
                                        i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Ef(i.return, n, t), l.lanes |= n;
                                        break
                                    }
                                    a = a.next
                                }
                            } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (s = i.return, s === null) throw Error(K(341));
                                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Ef(s, n, t), s = i.sibling
                            } else s = i.child;
                            if (s !== null) s.return = i;
                            else
                                for (s = i; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (i = s.sibling, i !== null) {
                                        i.return = s.return, s = i;
                                        break
                                    }
                                    s = s.return
                                }
                            i = s
                        }
                Tt(e, t, o.children, n),
                t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, Qo(t, n), o = vn(o), r = r(o), t.flags |= 1, Tt(e, t, r, n), t.child;
        case 14:
            return r = t.type, o = On(r, t.pendingProps), o = On(r.type, o), im(e, t, r, o, n);
        case 15:
            return Hy(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : On(r, o), Ml(e, t), t.tag = 1, zt(r) ? (e = !0, aa(t)) : e = !1, Qo(t, n), xy(t, r, o), kf(t, r, o, n), Tf(null, t, r, !0, e, n);
        case 19:
            return Gy(e, t, n);
        case 22:
            return Wy(e, t, n)
    }
    throw Error(K(156, t.tag))
};

function f0(e, t) {
    return Ig(e, t)
}

function Xw(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function fn(e, t, n, r) {
    return new Xw(e, t, n, r)
}

function rp(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Yw(e) {
    if (typeof e == "function") return rp(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Sd) return 11;
        if (e === Ed) return 14
    }
    return 2
}

function Ar(e, t) {
    var n = e.alternate;
    return n === null ? (n = fn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Il(e, t, n, r, o, i) {
    var s = 2;
    if (r = e, typeof e == "function") rp(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case No:
            return oo(n.children, o, i, t);
        case wd:
            s = 8, o |= 8;
            break;
        case qc:
            return e = fn(12, n, t, o | 2), e.elementType = qc, e.lanes = i, e;
        case Gc:
            return e = fn(13, n, t, o), e.elementType = Gc, e.lanes = i, e;
        case Xc:
            return e = fn(19, n, t, o), e.elementType = Xc, e.lanes = i, e;
        case bg:
            return Ja(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case yg:
                    s = 10;
                    break e;
                case xg:
                    s = 9;
                    break e;
                case Sd:
                    s = 11;
                    break e;
                case Ed:
                    s = 14;
                    break e;
                case vr:
                    s = 16, r = null;
                    break e
            }
            throw Error(K(130, e == null ? e : typeof e, ""))
    }
    return t = fn(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}

function oo(e, t, n, r) {
    return e = fn(7, e, r, t), e.lanes = n, e
}

function Ja(e, t, n, r) {
    return e = fn(22, e, r, t), e.elementType = bg, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function kc(e, t, n) {
    return e = fn(6, e, null, t), e.lanes = n, e
}

function Pc(e, t, n) {
    return t = fn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Jw(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = sc(0), this.expirationTimes = sc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = sc(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function op(e, t, n, r, o, i, s, l, a) {
    return e = new Jw(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = fn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Ud(i), e
}

function Zw(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: jo,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function d0(e) {
    if (!e) return Ir;
    e = e._reactInternals;
    e: {
        if (yo(e) !== e || e.tag !== 1) throw Error(K(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (zt(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(K(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (zt(n)) return fy(e, n, t)
    }
    return t
}

function p0(e, t, n, r, o, i, s, l, a) {
    return e = op(n, r, !0, e, o, i, s, l, a), e.context = d0(null), n = e.current, r = Rt(), o = Mr(n), i = tr(r, o), i.callback = t ?? null, _r(n, i, o), e.current.lanes = o, Us(e, o, r), Bt(e, r), e
}

function Za(e, t, n, r) {
    var o = t.current,
        i = Rt(),
        s = Mr(o);
    return n = d0(n), t.context === null ? t.context = n : t.pendingContext = n, t = tr(i, s), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = _r(o, t, s), e !== null && (Nn(e, o, s, i), Nl(e, o, s)), s
}

function wa(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function gm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function ip(e, t) {
    gm(e, t), (e = e.alternate) && gm(e, t)
}

function e2() {
    return null
}
var h0 = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function sp(e) {
    this._internalRoot = e
}
eu.prototype.render = sp.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(K(409));
    Za(e, t, null, null)
};
eu.prototype.unmount = sp.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        fo(function() {
            Za(null, e, null, null)
        }), t[or] = null
    }
};

function eu(e) {
    this._internalRoot = e
}
eu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Hg();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < xr.length && t !== 0 && t < xr[n].priority; n++);
        xr.splice(n, 0, e), n === 0 && Qg(e)
    }
};

function lp(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function tu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function ym() {}

function t2(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = wa(s);
                i.call(u)
            }
        }
        var s = p0(t, r, e, 0, null, !1, !1, "", ym);
        return e._reactRootContainer = s, e[or] = s.current, xs(e.nodeType === 8 ? e.parentNode : e), fo(), s
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = wa(a);
            l.call(u)
        }
    }
    var a = op(e, 0, !1, null, null, !1, !1, "", ym);
    return e._reactRootContainer = a, e[or] = a.current, xs(e.nodeType === 8 ? e.parentNode : e), fo(function() {
        Za(t, a, n, r)
    }), a
}

function nu(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var a = wa(s);
                l.call(a)
            }
        }
        Za(t, s, e, o)
    } else s = t2(n, t, e, o, r);
    return wa(s)
}
Vg = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Di(t.pendingLanes);
                n !== 0 && (Pd(t, n | 1), Bt(t, Xe()), !(ge & 6) && (ni = Xe() + 500, Ur()))
            }
            break;
        case 13:
            fo(function() {
                var r = ir(e, 1);
                if (r !== null) {
                    var o = Rt();
                    Nn(r, e, 1, o)
                }
            }), ip(e, 1)
    }
};
Od = function(e) {
    if (e.tag === 13) {
        var t = ir(e, 134217728);
        if (t !== null) {
            var n = Rt();
            Nn(t, e, 134217728, n)
        }
        ip(e, 134217728)
    }
};
Dg = function(e) {
    if (e.tag === 13) {
        var t = Mr(e),
            n = ir(e, t);
        if (n !== null) {
            var r = Rt();
            Nn(n, e, t, r)
        }
        ip(e, t)
    }
};
Hg = function() {
    return Pe
};
Wg = function(e, t) {
    var n = Pe;
    try {
        return Pe = e, t()
    } finally {
        Pe = n
    }
};
lf = function(e, t, n) {
    switch (t) {
        case "input":
            if (Zc(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = Qa(r);
                        if (!o) throw Error(K(90));
                        Sg(r), Zc(r, o)
                    }
                }
            }
            break;
        case "textarea":
            Cg(e, n);
            break;
        case "select":
            t = n.value, t != null && Vo(e, !!n.multiple, t, !1)
    }
};
Ng = ep;
_g = fo;
var n2 = {
        usingClientEntryPoint: !1,
        Events: [Ds, Ao, Qa, Rg, jg, ep]
    },
    Ni = {
        findFiberByHostInstance: Yr,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    r2 = {
        bundleType: Ni.bundleType,
        version: Ni.version,
        rendererPackageName: Ni.rendererPackageName,
        rendererConfig: Ni.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: cr.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Ag(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Ni.findFiberByHostInstance || e2,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var yl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!yl.isDisabled && yl.supportsFiber) try {
        Va = yl.inject(r2), Vn = yl
    } catch {}
}
en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = n2;
en.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!lp(t)) throw Error(K(200));
    return Zw(e, t, null, n)
};
en.createRoot = function(e, t) {
    if (!lp(e)) throw Error(K(299));
    var n = !1,
        r = "",
        o = h0;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = op(e, 1, !1, null, null, n, !1, r, o), e[or] = t.current, xs(e.nodeType === 8 ? e.parentNode : e), new sp(t)
};
en.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(K(188)) : (e = Object.keys(e).join(","), Error(K(268, e)));
    return e = Ag(t), e = e === null ? null : e.stateNode, e
};
en.flushSync = function(e) {
    return fo(e)
};
en.hydrate = function(e, t, n) {
    if (!tu(t)) throw Error(K(200));
    return nu(null, e, t, !0, n)
};
en.hydrateRoot = function(e, t, n) {
    if (!lp(e)) throw Error(K(405));
    var r = n != null && n.hydratedSources || null,
        o = !1,
        i = "",
        s = h0;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = p0(t, null, e, 1, n ?? null, o, !1, i, s), e[or] = t.current, xs(e), r)
        for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new eu(t)
};
en.render = function(e, t, n) {
    if (!tu(t)) throw Error(K(200));
    return nu(null, e, t, !1, n)
};
en.unmountComponentAtNode = function(e) {
    if (!tu(e)) throw Error(K(40));
    return e._reactRootContainer ? (fo(function() {
        nu(null, null, e, !1, function() {
            e._reactRootContainer = null, e[or] = null
        })
    }), !0) : !1
};
en.unstable_batchedUpdates = ep;
en.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!tu(n)) throw Error(K(200));
    if (e == null || e._reactInternals === void 0) throw Error(K(38));
    return nu(e, t, n, !1, r)
};
en.version = "18.2.0-next-9e3b772b8-20220608";

function m0() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m0)
    } catch (e) {
        console.error(e)
    }
}
m0(), pg.exports = en;
var ru = pg.exports;
const Wi = pd(ru);
var xm = ru;
Qc.createRoot = xm.createRoot, Qc.hydrateRoot = xm.hydrateRoot;
/**
 * @remix-run/router v1.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ts() {
    return Ts = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Ts.apply(this, arguments)
}
var Cr;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Cr || (Cr = {}));
const bm = "popstate";

function o2(e) {
    e === void 0 && (e = {});

    function t(r, o) {
        let {
            pathname: i,
            search: s,
            hash: l
        } = r.location;
        return Bf("", {
            pathname: i,
            search: s,
            hash: l
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }

    function n(r, o) {
        return typeof o == "string" ? o : v0(o)
    }
    return s2(t, n, null, e)
}

function lt(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function ap(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function i2() {
    return Math.random().toString(36).substr(2, 8)
}

function wm(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function Bf(e, t, n, r) {
    return n === void 0 && (n = null), Ts({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? mi(t) : t, {
        state: n,
        key: t && t.key || r || i2()
    })
}

function v0(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function mi(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function s2(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: o = document.defaultView,
        v5Compat: i = !1
    } = r, s = o.history, l = Cr.Pop, a = null, u = c();
    u == null && (u = 0, s.replaceState(Ts({}, s.state, {
        idx: u
    }), ""));

    function c() {
        return (s.state || {
            idx: null
        }).idx
    }

    function f() {
        l = Cr.Pop;
        let b = c(),
            m = b == null ? null : b - u;
        u = b, a && a({
            action: l,
            location: d.location,
            delta: m
        })
    }

    function h(b, m) {
        l = Cr.Push;
        let p = Bf(d.location, b, m);
        n && n(p, b), u = c() + 1;
        let g = wm(p, u),
            w = d.createHref(p);
        try {
            s.pushState(g, "", w)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError") throw C;
            o.location.assign(w)
        }
        i && a && a({
            action: l,
            location: d.location,
            delta: 1
        })
    }

    function y(b, m) {
        l = Cr.Replace;
        let p = Bf(d.location, b, m);
        n && n(p, b), u = c();
        let g = wm(p, u),
            w = d.createHref(p);
        s.replaceState(g, "", w), i && a && a({
            action: l,
            location: d.location,
            delta: 0
        })
    }

    function v(b) {
        let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
            p = typeof b == "string" ? b : v0(b);
        return lt(m, "No window.location.(origin|href) available to create URL for href: " + p), new URL(p, m)
    }
    let d = {
        get action() {
            return l
        },
        get location() {
            return e(o, s)
        },
        listen(b) {
            if (a) throw new Error("A history only accepts one active listener");
            return o.addEventListener(bm, f), a = b, () => {
                o.removeEventListener(bm, f), a = null
            }
        },
        createHref(b) {
            return t(o, b)
        },
        createURL: v,
        encodeLocation(b) {
            let m = v(b);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: h,
        replace: y,
        go(b) {
            return s.go(b)
        }
    };
    return d
}
var Sm;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(Sm || (Sm = {}));

function l2(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? mi(t) : t,
        o = x0(r.pathname || "/", n);
    if (o == null) return null;
    let i = g0(e);
    a2(i);
    let s = null;
    for (let l = 0; s == null && l < i.length; ++l) s = g2(i[l], b2(o));
    return s
}

function g0(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let o = (i, s, l) => {
        let a = {
            relativePath: l === void 0 ? i.path || "" : l,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        a.relativePath.startsWith("/") && (lt(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
        let u = io([r, a.relativePath]),
            c = n.concat(a);
        i.children && i.children.length > 0 && (lt(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), g0(i.children, t, c, u)), !(i.path == null && !i.index) && t.push({
            path: u,
            score: m2(u, i.index),
            routesMeta: c
        })
    };
    return e.forEach((i, s) => {
        var l;
        if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, s);
        else
            for (let a of y0(i.path)) o(i, s, a)
    }), t
}

function y0(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, o = n.endsWith("?"), i = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [i, ""] : [i];
    let s = y0(r.join("/")),
        l = [];
    return l.push(...s.map(a => a === "" ? i : [i, a].join("/"))), o && l.push(...s), l.map(a => e.startsWith("/") && a === "" ? "/" : a)
}

function a2(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : v2(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const u2 = /^:\w+$/,
    c2 = 3,
    f2 = 2,
    d2 = 1,
    p2 = 10,
    h2 = -2,
    Em = e => e === "*";

function m2(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(Em) && (r += h2), t && (r += f2), n.filter(o => !Em(o)).reduce((o, i) => o + (u2.test(i) ? c2 : i === "" ? d2 : p2), r)
}

function v2(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function g2(e, t) {
    let {
        routesMeta: n
    } = e, r = {}, o = "/", i = [];
    for (let s = 0; s < n.length; ++s) {
        let l = n[s],
            a = s === n.length - 1,
            u = o === "/" ? t : t.slice(o.length) || "/",
            c = y2({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: a
            }, u);
        if (!c) return null;
        Object.assign(r, c.params);
        let f = l.route;
        i.push({
            params: r,
            pathname: io([o, c.pathname]),
            pathnameBase: O2(io([o, c.pathnameBase])),
            route: f
        }), c.pathnameBase !== "/" && (o = io([o, c.pathnameBase]))
    }
    return i
}

function y2(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = x2(e.path, e.caseSensitive, e.end), o = t.match(n);
    if (!o) return null;
    let i = o[0],
        s = i.replace(/(.)\/+$/, "$1"),
        l = o.slice(1);
    return {
        params: r.reduce((u, c, f) => {
            let {
                paramName: h,
                isOptional: y
            } = c;
            if (h === "*") {
                let d = l[f] || "";
                s = i.slice(0, i.length - d.length).replace(/(.)\/+$/, "$1")
            }
            const v = l[f];
            return y && !v ? u[h] = void 0 : u[h] = w2(v || "", h), u
        }, {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}

function x2(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), ap(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:(\w+)(\?)?/g, (s, l, a) => (r.push({
            paramName: l,
            isOptional: a != null
        }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r]
}

function b2(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return ap(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function w2(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (n) {
        return ap(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e
    }
}

function x0(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function S2(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: o = ""
    } = typeof e == "string" ? mi(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : E2(n, t) : t,
        search: T2(r),
        hash: R2(o)
    }
}

function E2(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }), n.length > 1 ? n.join("/") : "/"
}

function Oc(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function C2(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function k2(e, t) {
    let n = C2(e);
    return t ? n.map((r, o) => o === e.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function P2(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = mi(e) : (o = Ts({}, e), lt(!o.pathname || !o.pathname.includes("?"), Oc("?", "pathname", "search", o)), lt(!o.pathname || !o.pathname.includes("#"), Oc("#", "pathname", "hash", o)), lt(!o.search || !o.search.includes("#"), Oc("#", "search", "hash", o)));
    let i = e === "" || o.pathname === "",
        s = i ? "/" : o.pathname,
        l;
    if (s == null) l = n;
    else if (r) {
        let f = t.length === 0 ? [] : t[t.length - 1].replace(/^\//, "").split("/");
        if (s.startsWith("..")) {
            let h = s.split("/");
            for (; h[0] === "..";) h.shift(), f.pop();
            o.pathname = h.join("/")
        }
        l = "/" + f.join("/")
    } else {
        let f = t.length - 1;
        if (s.startsWith("..")) {
            let h = s.split("/");
            for (; h[0] === "..";) h.shift(), f -= 1;
            o.pathname = h.join("/")
        }
        l = f >= 0 ? t[f] : "/"
    }
    let a = S2(o, l),
        u = s && s !== "/" && s.endsWith("/"),
        c = (i || s === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a
}
const io = e => e.join("/").replace(/\/\/+/g, "/"),
    O2 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    T2 = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    R2 = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function j2(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const b0 = ["post", "put", "patch", "delete"];
new Set(b0);
const N2 = ["get", ...b0];
new Set(N2);
/**
 * React Router v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Rs() {
    return Rs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Rs.apply(this, arguments)
}
const up = E.createContext(null),
    _2 = E.createContext(null),
    ou = E.createContext(null),
    iu = E.createContext(null),
    xo = E.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    w0 = E.createContext(null);

function su() {
    return E.useContext(iu) != null
}

function cp() {
    return su() || lt(!1), E.useContext(iu).location
}

function S0(e) {
    E.useContext(ou).static || E.useLayoutEffect(e)
}

function Ht() {
    let {
        isDataRoute: e
    } = E.useContext(xo);
    return e ? W2() : $2()
}

function $2() {
    su() || lt(!1);
    let e = E.useContext(up),
        {
            basename: t,
            future: n,
            navigator: r
        } = E.useContext(ou),
        {
            matches: o
        } = E.useContext(xo),
        {
            pathname: i
        } = cp(),
        s = JSON.stringify(k2(o, n.v7_relativeSplatPath)),
        l = E.useRef(!1);
    return S0(() => {
        l.current = !0
    }), E.useCallback(function(u, c) {
        if (c === void 0 && (c = {}), !l.current) return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let f = P2(u, JSON.parse(s), i, c.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : io([t, f.pathname])), (c.replace ? r.replace : r.push)(f, c.state, c)
    }, [t, r, s, i, e])
}

function E0() {
    let {
        matches: e
    } = E.useContext(xo), t = e[e.length - 1];
    return t ? t.params : {}
}

function M2(e, t) {
    return A2(e, t)
}

function A2(e, t, n, r) {
    su() || lt(!1);
    let {
        navigator: o
    } = E.useContext(ou), {
        matches: i
    } = E.useContext(xo), s = i[i.length - 1], l = s ? s.params : {};
    s && s.pathname;
    let a = s ? s.pathnameBase : "/";
    s && s.route;
    let u = cp(),
        c;
    if (t) {
        var f;
        let b = typeof t == "string" ? mi(t) : t;
        a === "/" || (f = b.pathname) != null && f.startsWith(a) || lt(!1), c = b
    } else c = u;
    let h = c.pathname || "/",
        y = a === "/" ? h : h.slice(a.length) || "/",
        v = l2(e, {
            pathname: y
        }),
        d = B2(v && v.map(b => Object.assign({}, b, {
            params: Object.assign({}, l, b.params),
            pathname: io([a, o.encodeLocation ? o.encodeLocation(b.pathname).pathname : b.pathname]),
            pathnameBase: b.pathnameBase === "/" ? a : io([a, o.encodeLocation ? o.encodeLocation(b.pathnameBase).pathname : b.pathnameBase])
        })), i, n, r);
    return t && d ? E.createElement(iu.Provider, {
        value: {
            location: Rs({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Cr.Pop
        }
    }, d) : d
}

function L2() {
    let e = H2(),
        t = j2(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        o = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        },
        i = null;
    return E.createElement(E.Fragment, null, E.createElement("h2", null, "Unexpected Application Error!"), E.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? E.createElement("pre", {
        style: o
    }, n) : null, i)
}
const I2 = E.createElement(L2, null);
class F2 extends E.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? E.createElement(xo.Provider, {
            value: this.props.routeContext
        }, E.createElement(w0.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function z2(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, o = E.useContext(up);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), E.createElement(xo.Provider, {
        value: t
    }, r)
}

function B2(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var i;
        if ((i = n) != null && i.errors) e = n.matches;
        else return null
    }
    let s = e,
        l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
        let c = s.findIndex(f => f.route.id && (l == null ? void 0 : l[f.route.id]));
        c >= 0 || lt(!1), s = s.slice(0, Math.min(s.length, c + 1))
    }
    let a = !1,
        u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < s.length; c++) {
            let f = s[c];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c), f.route.loader && f.route.id && n.loaderData[f.route.id] === void 0 && (!n.errors || n.errors[f.route.id] === void 0)) {
                a = !0, u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                break
            }
        }
    return s.reduceRight((c, f, h) => {
        let y, v = !1,
            d = null,
            b = null;
        n && (y = l && f.route.id ? l[f.route.id] : void 0, d = f.route.errorElement || I2, a && (u < 0 && h === 0 ? (Q2("route-fallback", !1), v = !0, b = null) : u === h && (v = !0, b = f.route.hydrateFallbackElement || null)));
        let m = t.concat(s.slice(0, h + 1)),
            p = () => {
                let g;
                return y ? g = d : v ? g = b : f.route.Component ? g = E.createElement(f.route.Component, null) : f.route.element ? g = f.route.element : g = c, E.createElement(z2, {
                    match: f,
                    routeContext: {
                        outlet: c,
                        matches: m,
                        isDataRoute: n != null
                    },
                    children: g
                })
            };
        return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0) ? E.createElement(F2, {
            location: n.location,
            revalidation: n.revalidation,
            component: d,
            error: y,
            children: p(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : p()
    }, null)
}
var C0 = function(e) {
        return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
    }(C0 || {}),
    Sa = function(e) {
        return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
    }(Sa || {});

function U2(e) {
    let t = E.useContext(up);
    return t || lt(!1), t
}

function V2(e) {
    let t = E.useContext(_2);
    return t || lt(!1), t
}

function D2(e) {
    let t = E.useContext(xo);
    return t || lt(!1), t
}

function k0(e) {
    let t = D2(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || lt(!1), n.route.id
}

function H2() {
    var e;
    let t = E.useContext(w0),
        n = V2(Sa.UseRouteError),
        r = k0(Sa.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function W2() {
    let {
        router: e
    } = U2(C0.UseNavigateStable), t = k0(Sa.UseNavigateStable), n = E.useRef(!1);
    return S0(() => {
        n.current = !0
    }), E.useCallback(function(o, i) {
        i === void 0 && (i = {}), n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Rs({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
const Cm = {};

function Q2(e, t, n) {
    !t && !Cm[e] && (Cm[e] = !0)
}

function Ln(e) {
    lt(!1)
}

function K2(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = Cr.Pop,
        navigator: i,
        static: s = !1,
        future: l
    } = e;
    su() && lt(!1);
    let a = t.replace(/^\/*/, "/"),
        u = E.useMemo(() => ({
            basename: a,
            navigator: i,
            static: s,
            future: Rs({
                v7_relativeSplatPath: !1
            }, l)
        }), [a, l, i, s]);
    typeof r == "string" && (r = mi(r));
    let {
        pathname: c = "/",
        search: f = "",
        hash: h = "",
        state: y = null,
        key: v = "default"
    } = r, d = E.useMemo(() => {
        let b = x0(c, a);
        return b == null ? null : {
            location: {
                pathname: b,
                search: f,
                hash: h,
                state: y,
                key: v
            },
            navigationType: o
        }
    }, [a, c, f, h, y, v, o]);
    return d == null ? null : E.createElement(ou.Provider, {
        value: u
    }, E.createElement(iu.Provider, {
        children: n,
        value: d
    }))
}

function q2(e) {
    let {
        children: t,
        location: n
    } = e;
    return M2(Uf(t), n)
}
new Promise(() => {});

function Uf(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return E.Children.forEach(e, (r, o) => {
        if (!E.isValidElement(r)) return;
        let i = [...t, o];
        if (r.type === E.Fragment) {
            n.push.apply(n, Uf(r.props.children, i));
            return
        }
        r.type !== Ln && lt(!1), !r.props.index || !r.props.children || lt(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = Uf(r.props.children, i)), n.push(s)
    }), n
}
/**
 * React Router DOM v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const G2 = "startTransition",
    km = Yl[G2];

function X2(e) {
    let {
        basename: t,
        children: n,
        future: r,
        window: o
    } = e, i = E.useRef();
    i.current == null && (i.current = o2({
        window: o,
        v5Compat: !0
    }));
    let s = i.current,
        [l, a] = E.useState({
            action: s.action,
            location: s.location
        }),
        {
            v7_startTransition: u
        } = r || {},
        c = E.useCallback(f => {
            u && km ? km(() => a(f)) : a(f)
        }, [a, u]);
    return E.useLayoutEffect(() => s.listen(c), [s, c]), E.createElement(K2, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s,
        future: r
    })
}
var Pm;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(Pm || (Pm = {}));
var Om;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(Om || (Om = {}));
var Y2 = {
    VITE_SERVER_URL: "https://api-consumet-org-gamma-sage.vercel.app",
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1
};
const Tm = e => {
        let t;
        const n = new Set,
            r = (a, u) => {
                const c = typeof a == "function" ? a(t) : a;
                if (!Object.is(c, t)) {
                    const f = t;
                    t = u ?? (typeof c != "object" || c === null) ? c : Object.assign({}, t, c), n.forEach(h => h(t, f))
                }
            },
            o = () => t,
            l = {
                setState: r,
                getState: o,
                subscribe: a => (n.add(a), () => n.delete(a)),
                destroy: () => {
                    (Y2 ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), n.clear()
                }
            };
        return t = e(r, o, l), l
    },
    J2 = e => e ? Tm(e) : Tm;
var P0 = {
        exports: {}
    },
    O0 = {},
    T0 = {
        exports: {}
    },
    R0 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ri = E;

function Z2(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var eS = typeof Object.is == "function" ? Object.is : Z2,
    tS = ri.useState,
    nS = ri.useEffect,
    rS = ri.useLayoutEffect,
    oS = ri.useDebugValue;

function iS(e, t) {
    var n = t(),
        r = tS({
            inst: {
                value: n,
                getSnapshot: t
            }
        }),
        o = r[0].inst,
        i = r[1];
    return rS(function() {
        o.value = n, o.getSnapshot = t, Tc(o) && i({
            inst: o
        })
    }, [e, n, t]), nS(function() {
        return Tc(o) && i({
            inst: o
        }), e(function() {
            Tc(o) && i({
                inst: o
            })
        })
    }, [e]), oS(n), n
}

function Tc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !eS(e, n)
    } catch {
        return !0
    }
}

function sS(e, t) {
    return t()
}
var lS = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? sS : iS;
R0.useSyncExternalStore = ri.useSyncExternalStore !== void 0 ? ri.useSyncExternalStore : lS;
T0.exports = R0;
var aS = T0.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lu = E,
    uS = aS;

function cS(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var fS = typeof Object.is == "function" ? Object.is : cS,
    dS = uS.useSyncExternalStore,
    pS = lu.useRef,
    hS = lu.useEffect,
    mS = lu.useMemo,
    vS = lu.useDebugValue;
O0.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
    var i = pS(null);
    if (i.current === null) {
        var s = {
            hasValue: !1,
            value: null
        };
        i.current = s
    } else s = i.current;
    i = mS(function() {
        function a(y) {
            if (!u) {
                if (u = !0, c = y, y = r(y), o !== void 0 && s.hasValue) {
                    var v = s.value;
                    if (o(v, y)) return f = v
                }
                return f = y
            }
            if (v = f, fS(c, y)) return v;
            var d = r(y);
            return o !== void 0 && o(v, d) ? v : (c = y, f = d)
        }
        var u = !1,
            c, f, h = n === void 0 ? null : n;
        return [function() {
            return a(t())
        }, h === null ? void 0 : function() {
            return a(h())
        }]
    }, [t, n, r, o]);
    var l = dS(e, i[0], i[1]);
    return hS(function() {
        s.hasValue = !0, s.value = l
    }, [l]), vS(l), l
};
P0.exports = O0;
var gS = P0.exports;
const yS = pd(gS);
var j0 = {
    VITE_SERVER_URL: "https://api-consumet-org-gamma-sage.vercel.app",
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1
};
const {
    useDebugValue: xS
} = ne, {
    useSyncExternalStoreWithSelector: bS
} = yS;
let Rm = !1;

function wS(e, t = e.getState, n) {
    (j0 ? "production" : void 0) !== "production" && n && !Rm && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"), Rm = !0);
    const r = bS(e.subscribe, e.getState, e.getServerState || e.getState, t, n);
    return xS(r), r
}
const jm = e => {
        (j0 ? "production" : void 0) !== "production" && typeof e != "function" && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
        const t = typeof e == "function" ? J2(e) : e,
            n = (r, o) => wS(t, r, o);
        return Object.assign(n, t), n
    },
    fp = e => e ? jm(e) : jm;
var SS = {
    VITE_SERVER_URL: "https://api-consumet-org-gamma-sage.vercel.app",
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1
};

function dp(e, t) {
    let n;
    try {
        n = e()
    } catch {
        return
    }
    return {
        getItem: o => {
            var i;
            const s = a => a === null ? null : JSON.parse(a, t == null ? void 0 : t.reviver),
                l = (i = n.getItem(o)) != null ? i : null;
            return l instanceof Promise ? l.then(s) : s(l)
        },
        setItem: (o, i) => n.setItem(o, JSON.stringify(i, t == null ? void 0 : t.replacer)),
        removeItem: o => n.removeItem(o)
    }
}
const js = e => t => {
        try {
            const n = e(t);
            return n instanceof Promise ? n : {
                then(r) {
                    return js(r)(n)
                },
                catch (r) {
                    return this
                }
            }
        } catch (n) {
            return {
                then(r) {
                    return this
                },
                catch (r) {
                    return js(r)(n)
                }
            }
        }
    },
    ES = (e, t) => (n, r, o) => {
        let i = {
                getStorage: () => localStorage,
                serialize: JSON.stringify,
                deserialize: JSON.parse,
                partialize: b => b,
                version: 0,
                merge: (b, m) => ({
                    ...m,
                    ...b
                }),
                ...t
            },
            s = !1;
        const l = new Set,
            a = new Set;
        let u;
        try {
            u = i.getStorage()
        } catch {}
        if (!u) return e((...b) => {
            console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`), n(...b)
        }, r, o);
        const c = js(i.serialize),
            f = () => {
                const b = i.partialize({
                    ...r()
                });
                let m;
                const p = c({
                    state: b,
                    version: i.version
                }).then(g => u.setItem(i.name, g)).catch(g => {
                    m = g
                });
                if (m) throw m;
                return p
            },
            h = o.setState;
        o.setState = (b, m) => {
            h(b, m), f()
        };
        const y = e((...b) => {
            n(...b), f()
        }, r, o);
        let v;
        const d = () => {
            var b;
            if (!u) return;
            s = !1, l.forEach(p => p(r()));
            const m = ((b = i.onRehydrateStorage) == null ? void 0 : b.call(i, r())) || void 0;
            return js(u.getItem.bind(u))(i.name).then(p => {
                if (p) return i.deserialize(p)
            }).then(p => {
                if (p)
                    if (typeof p.version == "number" && p.version !== i.version) {
                        if (i.migrate) return i.migrate(p.state, p.version);
                        console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                    } else return p.state
            }).then(p => {
                var g;
                return v = i.merge(p, (g = r()) != null ? g : y), n(v, !0), f()
            }).then(() => {
                m == null || m(v, void 0), s = !0, a.forEach(p => p(v))
            }).catch(p => {
                m == null || m(void 0, p)
            })
        };
        return o.persist = {
            setOptions: b => {
                i = {
                    ...i,
                    ...b
                }, b.getStorage && (u = b.getStorage())
            },
            clearStorage: () => {
                u == null || u.removeItem(i.name)
            },
            getOptions: () => i,
            rehydrate: () => d(),
            hasHydrated: () => s,
            onHydrate: b => (l.add(b), () => {
                l.delete(b)
            }),
            onFinishHydration: b => (a.add(b), () => {
                a.delete(b)
            })
        }, d(), v || y
    },
    CS = (e, t) => (n, r, o) => {
        let i = {
                storage: dp(() => localStorage),
                partialize: d => d,
                version: 0,
                merge: (d, b) => ({
                    ...b,
                    ...d
                }),
                ...t
            },
            s = !1;
        const l = new Set,
            a = new Set;
        let u = i.storage;
        if (!u) return e((...d) => {
            console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`), n(...d)
        }, r, o);
        const c = () => {
                const d = i.partialize({
                    ...r()
                });
                return u.setItem(i.name, {
                    state: d,
                    version: i.version
                })
            },
            f = o.setState;
        o.setState = (d, b) => {
            f(d, b), c()
        };
        const h = e((...d) => {
            n(...d), c()
        }, r, o);
        let y;
        const v = () => {
            var d, b;
            if (!u) return;
            s = !1, l.forEach(p => {
                var g;
                return p((g = r()) != null ? g : h)
            });
            const m = ((b = i.onRehydrateStorage) == null ? void 0 : b.call(i, (d = r()) != null ? d : h)) || void 0;
            return js(u.getItem.bind(u))(i.name).then(p => {
                if (p)
                    if (typeof p.version == "number" && p.version !== i.version) {
                        if (i.migrate) return i.migrate(p.state, p.version);
                        console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                    } else return p.state
            }).then(p => {
                var g;
                return y = i.merge(p, (g = r()) != null ? g : h), n(y, !0), c()
            }).then(() => {
                m == null || m(y, void 0), y = r(), s = !0, a.forEach(p => p(y))
            }).catch(p => {
                m == null || m(void 0, p)
            })
        };
        return o.persist = {
            setOptions: d => {
                i = {
                    ...i,
                    ...d
                }, d.storage && (u = d.storage)
            },
            clearStorage: () => {
                u == null || u.removeItem(i.name)
            },
            getOptions: () => i,
            rehydrate: () => v(),
            hasHydrated: () => s,
            onHydrate: d => (l.add(d), () => {
                l.delete(d)
            }),
            onFinishHydration: d => (a.add(d), () => {
                a.delete(d)
            })
        }, i.skipHydration || v(), y || h
    },
    kS = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? ((SS ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."), ES(e, t)) : CS(e, t),
    N0 = kS,
    vt = fp()(e => ({
        isCheckedTheme: !0,
        setisCheckedTheme: t => e({
            isCheckedTheme: t
        }),
        fetchCategory: "",
        setFetchCategory: t => e({
            fetchCategory: t
        })
    })),
    pp = fp()(N0(e => ({
        animeDetails: [],
        setAnimeDetails: t => e({
            animeDetails: t
        })
    }), {
        name: "AnimeData",
        storage: dp(() => localStorage)
    })),
    hp = fp()(N0(e => ({
        myListDetails: [],
        setMyListDetails: t => e({
            myListDetails: t
        })
    }), {
        name: "MyList",
        storage: dp(() => localStorage)
    }));

function Vf(e, t) {
    return Vf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
        return r.__proto__ = o, r
    }, Vf(e, t)
}

function bo(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Vf(e, t)
}
var Ws = function() {
    function e() {
        this.listeners = []
    }
    var t = e.prototype;
    return t.subscribe = function(r) {
        var o = this,
            i = r || function() {};
        return this.listeners.push(i), this.onSubscribe(),
            function() {
                o.listeners = o.listeners.filter(function(s) {
                    return s !== i
                }), o.onUnsubscribe()
            }
    }, t.hasListeners = function() {
        return this.listeners.length > 0
    }, t.onSubscribe = function() {}, t.onUnsubscribe = function() {}, e
}();

function j() {
    return j = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, j.apply(this, arguments)
}
var Ea = typeof window > "u";

function wt() {}

function PS(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Df(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function Ca(e) {
    return Array.isArray(e) ? e : [e]
}

function _0(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function Fl(e, t, n) {
    return au(e) ? typeof t == "function" ? j({}, n, {
        queryKey: e,
        queryFn: t
    }) : j({}, t, {
        queryKey: e
    }) : e
}

function yr(e, t, n) {
    return au(e) ? [j({}, t, {
        queryKey: e
    }), n] : [e || {}, t]
}

function OS(e, t) {
    if (e === !0 && t === !0 || e == null && t == null) return "all";
    if (e === !1 && t === !1) return "none";
    var n = e ?? !t;
    return n ? "active" : "inactive"
}

function Nm(e, t) {
    var n = e.active,
        r = e.exact,
        o = e.fetching,
        i = e.inactive,
        s = e.predicate,
        l = e.queryKey,
        a = e.stale;
    if (au(l)) {
        if (r) {
            if (t.queryHash !== mp(l, t.options)) return !1
        } else if (!ka(t.queryKey, l)) return !1
    }
    var u = OS(n, i);
    if (u === "none") return !1;
    if (u !== "all") {
        var c = t.isActive();
        if (u === "active" && !c || u === "inactive" && c) return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || typeof o == "boolean" && t.isFetching() !== o || s && !s(t))
}

function _m(e, t) {
    var n = e.exact,
        r = e.fetching,
        o = e.predicate,
        i = e.mutationKey;
    if (au(i)) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (eo(t.options.mutationKey) !== eo(i)) return !1
        } else if (!ka(t.options.mutationKey, i)) return !1
    }
    return !(typeof r == "boolean" && t.state.status === "loading" !== r || o && !o(t))
}

function mp(e, t) {
    var n = (t == null ? void 0 : t.queryKeyHashFn) || eo;
    return n(e)
}

function eo(e) {
    var t = Ca(e);
    return TS(t)
}

function TS(e) {
    return JSON.stringify(e, function(t, n) {
        return Hf(n) ? Object.keys(n).sort().reduce(function(r, o) {
            return r[o] = n[o], r
        }, {}) : n
    })
}

function ka(e, t) {
    return $0(Ca(e), Ca(t))
}

function $0(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(function(n) {
        return !$0(e[n], t[n])
    }) : !1
}

function Pa(e, t) {
    if (e === t) return e;
    var n = Array.isArray(e) && Array.isArray(t);
    if (n || Hf(e) && Hf(t)) {
        for (var r = n ? e.length : Object.keys(e).length, o = n ? t : Object.keys(t), i = o.length, s = n ? [] : {}, l = 0, a = 0; a < i; a++) {
            var u = n ? a : o[a];
            s[u] = Pa(e[u], t[u]), s[u] === e[u] && l++
        }
        return r === i && l === r ? e : s
    }
    return t
}

function RS(e, t) {
    if (e && !t || t && !e) return !1;
    for (var n in e)
        if (e[n] !== t[n]) return !1;
    return !0
}

function Hf(e) {
    if (!$m(e)) return !1;
    var t = e.constructor;
    if (typeof t > "u") return !0;
    var n = t.prototype;
    return !(!$m(n) || !n.hasOwnProperty("isPrototypeOf"))
}

function $m(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function au(e) {
    return typeof e == "string" || Array.isArray(e)
}

function jS(e) {
    return new Promise(function(t) {
        setTimeout(t, e)
    })
}

function Mm(e) {
    Promise.resolve().then(e).catch(function(t) {
        return setTimeout(function() {
            throw t
        })
    })
}

function M0() {
    if (typeof AbortController == "function") return new AbortController
}
var NS = function(e) {
        bo(t, e);

        function t() {
            var r;
            return r = e.call(this) || this, r.setup = function(o) {
                var i;
                if (!Ea && ((i = window) != null && i.addEventListener)) {
                    var s = function() {
                        return o()
                    };
                    return window.addEventListener("visibilitychange", s, !1), window.addEventListener("focus", s, !1),
                        function() {
                            window.removeEventListener("visibilitychange", s), window.removeEventListener("focus", s)
                        }
                }
            }, r
        }
        var n = t.prototype;
        return n.onSubscribe = function() {
            this.cleanup || this.setEventListener(this.setup)
        }, n.onUnsubscribe = function() {
            if (!this.hasListeners()) {
                var o;
                (o = this.cleanup) == null || o.call(this), this.cleanup = void 0
            }
        }, n.setEventListener = function(o) {
            var i, s = this;
            this.setup = o, (i = this.cleanup) == null || i.call(this), this.cleanup = o(function(l) {
                typeof l == "boolean" ? s.setFocused(l) : s.onFocus()
            })
        }, n.setFocused = function(o) {
            this.focused = o, o && this.onFocus()
        }, n.onFocus = function() {
            this.listeners.forEach(function(o) {
                o()
            })
        }, n.isFocused = function() {
            return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState)
        }, t
    }(Ws),
    os = new NS,
    _S = function(e) {
        bo(t, e);

        function t() {
            var r;
            return r = e.call(this) || this, r.setup = function(o) {
                var i;
                if (!Ea && ((i = window) != null && i.addEventListener)) {
                    var s = function() {
                        return o()
                    };
                    return window.addEventListener("online", s, !1), window.addEventListener("offline", s, !1),
                        function() {
                            window.removeEventListener("online", s), window.removeEventListener("offline", s)
                        }
                }
            }, r
        }
        var n = t.prototype;
        return n.onSubscribe = function() {
            this.cleanup || this.setEventListener(this.setup)
        }, n.onUnsubscribe = function() {
            if (!this.hasListeners()) {
                var o;
                (o = this.cleanup) == null || o.call(this), this.cleanup = void 0
            }
        }, n.setEventListener = function(o) {
            var i, s = this;
            this.setup = o, (i = this.cleanup) == null || i.call(this), this.cleanup = o(function(l) {
                typeof l == "boolean" ? s.setOnline(l) : s.onOnline()
            })
        }, n.setOnline = function(o) {
            this.online = o, o && this.onOnline()
        }, n.onOnline = function() {
            this.listeners.forEach(function(o) {
                o()
            })
        }, n.isOnline = function() {
            return typeof this.online == "boolean" ? this.online : typeof navigator > "u" || typeof navigator.onLine > "u" ? !0 : navigator.onLine
        }, t
    }(Ws),
    zl = new _S;

function $S(e) {
    return Math.min(1e3 * Math.pow(2, e), 3e4)
}

function Oa(e) {
    return typeof(e == null ? void 0 : e.cancel) == "function"
}
var A0 = function(t) {
    this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent
};

function Bl(e) {
    return e instanceof A0
}
var L0 = function(t) {
        var n = this,
            r = !1,
            o, i, s, l;
        this.abort = t.abort, this.cancel = function(h) {
            return o == null ? void 0 : o(h)
        }, this.cancelRetry = function() {
            r = !0
        }, this.continueRetry = function() {
            r = !1
        }, this.continue = function() {
            return i == null ? void 0 : i()
        }, this.failureCount = 0, this.isPaused = !1, this.isResolved = !1, this.isTransportCancelable = !1, this.promise = new Promise(function(h, y) {
            s = h, l = y
        });
        var a = function(y) {
                n.isResolved || (n.isResolved = !0, t.onSuccess == null || t.onSuccess(y), i == null || i(), s(y))
            },
            u = function(y) {
                n.isResolved || (n.isResolved = !0, t.onError == null || t.onError(y), i == null || i(), l(y))
            },
            c = function() {
                return new Promise(function(y) {
                    i = y, n.isPaused = !0, t.onPause == null || t.onPause()
                }).then(function() {
                    i = void 0, n.isPaused = !1, t.onContinue == null || t.onContinue()
                })
            },
            f = function h() {
                if (!n.isResolved) {
                    var y;
                    try {
                        y = t.fn()
                    } catch (v) {
                        y = Promise.reject(v)
                    }
                    o = function(d) {
                        if (!n.isResolved && (u(new A0(d)), n.abort == null || n.abort(), Oa(y))) try {
                            y.cancel()
                        } catch {}
                    }, n.isTransportCancelable = Oa(y), Promise.resolve(y).then(a).catch(function(v) {
                        var d, b;
                        if (!n.isResolved) {
                            var m = (d = t.retry) != null ? d : 3,
                                p = (b = t.retryDelay) != null ? b : $S,
                                g = typeof p == "function" ? p(n.failureCount, v) : p,
                                w = m === !0 || typeof m == "number" && n.failureCount < m || typeof m == "function" && m(n.failureCount, v);
                            if (r || !w) {
                                u(v);
                                return
                            }
                            n.failureCount++, t.onFail == null || t.onFail(n.failureCount, v), jS(g).then(function() {
                                if (!os.isFocused() || !zl.isOnline()) return c()
                            }).then(function() {
                                r ? u(v) : h()
                            })
                        }
                    })
                }
            };
        f()
    },
    MS = function() {
        function e() {
            this.queue = [], this.transactions = 0, this.notifyFn = function(n) {
                n()
            }, this.batchNotifyFn = function(n) {
                n()
            }
        }
        var t = e.prototype;
        return t.batch = function(r) {
            var o;
            this.transactions++;
            try {
                o = r()
            } finally {
                this.transactions--, this.transactions || this.flush()
            }
            return o
        }, t.schedule = function(r) {
            var o = this;
            this.transactions ? this.queue.push(r) : Mm(function() {
                o.notifyFn(r)
            })
        }, t.batchCalls = function(r) {
            var o = this;
            return function() {
                for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
                o.schedule(function() {
                    r.apply(void 0, s)
                })
            }
        }, t.flush = function() {
            var r = this,
                o = this.queue;
            this.queue = [], o.length && Mm(function() {
                r.batchNotifyFn(function() {
                    o.forEach(function(i) {
                        r.notifyFn(i)
                    })
                })
            })
        }, t.setNotifyFunction = function(r) {
            this.notifyFn = r
        }, t.setBatchNotifyFunction = function(r) {
            this.batchNotifyFn = r
        }, e
    }(),
    Ge = new MS,
    I0 = console;

function Ta() {
    return I0
}

function AS(e) {
    I0 = e
}
var LS = function() {
        function e(n) {
            this.abortSignalConsumed = !1, this.hadObservers = !1, this.defaultOptions = n.defaultOptions, this.setOptions(n.options), this.observers = [], this.cache = n.cache, this.queryKey = n.queryKey, this.queryHash = n.queryHash, this.initialState = n.state || this.getDefaultState(this.options), this.state = this.initialState, this.meta = n.meta, this.scheduleGc()
        }
        var t = e.prototype;
        return t.setOptions = function(r) {
            var o;
            this.options = j({}, this.defaultOptions, r), this.meta = r == null ? void 0 : r.meta, this.cacheTime = Math.max(this.cacheTime || 0, (o = this.options.cacheTime) != null ? o : 5 * 60 * 1e3)
        }, t.setDefaultOptions = function(r) {
            this.defaultOptions = r
        }, t.scheduleGc = function() {
            var r = this;
            this.clearGcTimeout(), Df(this.cacheTime) && (this.gcTimeout = setTimeout(function() {
                r.optionalRemove()
            }, this.cacheTime))
        }, t.clearGcTimeout = function() {
            this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0)
        }, t.optionalRemove = function() {
            this.observers.length || (this.state.isFetching ? this.hadObservers && this.scheduleGc() : this.cache.remove(this))
        }, t.setData = function(r, o) {
            var i, s, l = this.state.data,
                a = PS(r, l);
            return (i = (s = this.options).isDataEqual) != null && i.call(s, l, a) ? a = l : this.options.structuralSharing !== !1 && (a = Pa(l, a)), this.dispatch({
                data: a,
                type: "success",
                dataUpdatedAt: o == null ? void 0 : o.updatedAt
            }), a
        }, t.setState = function(r, o) {
            this.dispatch({
                type: "setState",
                state: r,
                setStateOptions: o
            })
        }, t.cancel = function(r) {
            var o, i = this.promise;
            return (o = this.retryer) == null || o.cancel(r), i ? i.then(wt).catch(wt) : Promise.resolve()
        }, t.destroy = function() {
            this.clearGcTimeout(), this.cancel({
                silent: !0
            })
        }, t.reset = function() {
            this.destroy(), this.setState(this.initialState)
        }, t.isActive = function() {
            return this.observers.some(function(r) {
                return r.options.enabled !== !1
            })
        }, t.isFetching = function() {
            return this.state.isFetching
        }, t.isStale = function() {
            return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(function(r) {
                return r.getCurrentResult().isStale
            })
        }, t.isStaleByTime = function(r) {
            return r === void 0 && (r = 0), this.state.isInvalidated || !this.state.dataUpdatedAt || !_0(this.state.dataUpdatedAt, r)
        }, t.onFocus = function() {
            var r, o = this.observers.find(function(i) {
                return i.shouldFetchOnWindowFocus()
            });
            o && o.refetch(), (r = this.retryer) == null || r.continue()
        }, t.onOnline = function() {
            var r, o = this.observers.find(function(i) {
                return i.shouldFetchOnReconnect()
            });
            o && o.refetch(), (r = this.retryer) == null || r.continue()
        }, t.addObserver = function(r) {
            this.observers.indexOf(r) === -1 && (this.observers.push(r), this.hadObservers = !0, this.clearGcTimeout(), this.cache.notify({
                type: "observerAdded",
                query: this,
                observer: r
            }))
        }, t.removeObserver = function(r) {
            this.observers.indexOf(r) !== -1 && (this.observers = this.observers.filter(function(o) {
                return o !== r
            }), this.observers.length || (this.retryer && (this.retryer.isTransportCancelable || this.abortSignalConsumed ? this.retryer.cancel({
                revert: !0
            }) : this.retryer.cancelRetry()), this.cacheTime ? this.scheduleGc() : this.cache.remove(this)), this.cache.notify({
                type: "observerRemoved",
                query: this,
                observer: r
            }))
        }, t.getObserversCount = function() {
            return this.observers.length
        }, t.invalidate = function() {
            this.state.isInvalidated || this.dispatch({
                type: "invalidate"
            })
        }, t.fetch = function(r, o) {
            var i = this,
                s, l, a;
            if (this.state.isFetching) {
                if (this.state.dataUpdatedAt && (o != null && o.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (this.promise) {
                    var u;
                    return (u = this.retryer) == null || u.continueRetry(), this.promise
                }
            }
            if (r && this.setOptions(r), !this.options.queryFn) {
                var c = this.observers.find(function(p) {
                    return p.options.queryFn
                });
                c && this.setOptions(c.options)
            }
            var f = Ca(this.queryKey),
                h = M0(),
                y = {
                    queryKey: f,
                    pageParam: void 0,
                    meta: this.meta
                };
            Object.defineProperty(y, "signal", {
                enumerable: !0,
                get: function() {
                    if (h) return i.abortSignalConsumed = !0, h.signal
                }
            });
            var v = function() {
                    return i.options.queryFn ? (i.abortSignalConsumed = !1, i.options.queryFn(y)) : Promise.reject("Missing queryFn")
                },
                d = {
                    fetchOptions: o,
                    options: this.options,
                    queryKey: f,
                    state: this.state,
                    fetchFn: v,
                    meta: this.meta
                };
            if ((s = this.options.behavior) != null && s.onFetch) {
                var b;
                (b = this.options.behavior) == null || b.onFetch(d)
            }
            if (this.revertState = this.state, !this.state.isFetching || this.state.fetchMeta !== ((l = d.fetchOptions) == null ? void 0 : l.meta)) {
                var m;
                this.dispatch({
                    type: "fetch",
                    meta: (m = d.fetchOptions) == null ? void 0 : m.meta
                })
            }
            return this.retryer = new L0({
                fn: d.fetchFn,
                abort: h == null || (a = h.abort) == null ? void 0 : a.bind(h),
                onSuccess: function(g) {
                    i.setData(g), i.cache.config.onSuccess == null || i.cache.config.onSuccess(g, i), i.cacheTime === 0 && i.optionalRemove()
                },
                onError: function(g) {
                    Bl(g) && g.silent || i.dispatch({
                        type: "error",
                        error: g
                    }), Bl(g) || (i.cache.config.onError == null || i.cache.config.onError(g, i), Ta().error(g)), i.cacheTime === 0 && i.optionalRemove()
                },
                onFail: function() {
                    i.dispatch({
                        type: "failed"
                    })
                },
                onPause: function() {
                    i.dispatch({
                        type: "pause"
                    })
                },
                onContinue: function() {
                    i.dispatch({
                        type: "continue"
                    })
                },
                retry: d.options.retry,
                retryDelay: d.options.retryDelay
            }), this.promise = this.retryer.promise, this.promise
        }, t.dispatch = function(r) {
            var o = this;
            this.state = this.reducer(this.state, r), Ge.batch(function() {
                o.observers.forEach(function(i) {
                    i.onQueryUpdate(r)
                }), o.cache.notify({
                    query: o,
                    type: "queryUpdated",
                    action: r
                })
            })
        }, t.getDefaultState = function(r) {
            var o = typeof r.initialData == "function" ? r.initialData() : r.initialData,
                i = typeof r.initialData < "u",
                s = i ? typeof r.initialDataUpdatedAt == "function" ? r.initialDataUpdatedAt() : r.initialDataUpdatedAt : 0,
                l = typeof o < "u";
            return {
                data: o,
                dataUpdateCount: 0,
                dataUpdatedAt: l ? s ?? Date.now() : 0,
                error: null,
                errorUpdateCount: 0,
                errorUpdatedAt: 0,
                fetchFailureCount: 0,
                fetchMeta: null,
                isFetching: !1,
                isInvalidated: !1,
                isPaused: !1,
                status: l ? "success" : "idle"
            }
        }, t.reducer = function(r, o) {
            var i, s;
            switch (o.type) {
                case "failed":
                    return j({}, r, {
                        fetchFailureCount: r.fetchFailureCount + 1
                    });
                case "pause":
                    return j({}, r, {
                        isPaused: !0
                    });
                case "continue":
                    return j({}, r, {
                        isPaused: !1
                    });
                case "fetch":
                    return j({}, r, {
                        fetchFailureCount: 0,
                        fetchMeta: (i = o.meta) != null ? i : null,
                        isFetching: !0,
                        isPaused: !1
                    }, !r.dataUpdatedAt && {
                        error: null,
                        status: "loading"
                    });
                case "success":
                    return j({}, r, {
                        data: o.data,
                        dataUpdateCount: r.dataUpdateCount + 1,
                        dataUpdatedAt: (s = o.dataUpdatedAt) != null ? s : Date.now(),
                        error: null,
                        fetchFailureCount: 0,
                        isFetching: !1,
                        isInvalidated: !1,
                        isPaused: !1,
                        status: "success"
                    });
                case "error":
                    var l = o.error;
                    return Bl(l) && l.revert && this.revertState ? j({}, this.revertState) : j({}, r, {
                        error: l,
                        errorUpdateCount: r.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: r.fetchFailureCount + 1,
                        isFetching: !1,
                        isPaused: !1,
                        status: "error"
                    });
                case "invalidate":
                    return j({}, r, {
                        isInvalidated: !0
                    });
                case "setState":
                    return j({}, r, o.state);
                default:
                    return r
            }
        }, e
    }(),
    IS = function(e) {
        bo(t, e);

        function t(r) {
            var o;
            return o = e.call(this) || this, o.config = r || {}, o.queries = [], o.queriesMap = {}, o
        }
        var n = t.prototype;
        return n.build = function(o, i, s) {
            var l, a = i.queryKey,
                u = (l = i.queryHash) != null ? l : mp(a, i),
                c = this.get(u);
            return c || (c = new LS({
                cache: this,
                queryKey: a,
                queryHash: u,
                options: o.defaultQueryOptions(i),
                state: s,
                defaultOptions: o.getQueryDefaults(a),
                meta: i.meta
            }), this.add(c)), c
        }, n.add = function(o) {
            this.queriesMap[o.queryHash] || (this.queriesMap[o.queryHash] = o, this.queries.push(o), this.notify({
                type: "queryAdded",
                query: o
            }))
        }, n.remove = function(o) {
            var i = this.queriesMap[o.queryHash];
            i && (o.destroy(), this.queries = this.queries.filter(function(s) {
                return s !== o
            }), i === o && delete this.queriesMap[o.queryHash], this.notify({
                type: "queryRemoved",
                query: o
            }))
        }, n.clear = function() {
            var o = this;
            Ge.batch(function() {
                o.queries.forEach(function(i) {
                    o.remove(i)
                })
            })
        }, n.get = function(o) {
            return this.queriesMap[o]
        }, n.getAll = function() {
            return this.queries
        }, n.find = function(o, i) {
            var s = yr(o, i),
                l = s[0];
            return typeof l.exact > "u" && (l.exact = !0), this.queries.find(function(a) {
                return Nm(l, a)
            })
        }, n.findAll = function(o, i) {
            var s = yr(o, i),
                l = s[0];
            return Object.keys(l).length > 0 ? this.queries.filter(function(a) {
                return Nm(l, a)
            }) : this.queries
        }, n.notify = function(o) {
            var i = this;
            Ge.batch(function() {
                i.listeners.forEach(function(s) {
                    s(o)
                })
            })
        }, n.onFocus = function() {
            var o = this;
            Ge.batch(function() {
                o.queries.forEach(function(i) {
                    i.onFocus()
                })
            })
        }, n.onOnline = function() {
            var o = this;
            Ge.batch(function() {
                o.queries.forEach(function(i) {
                    i.onOnline()
                })
            })
        }, t
    }(Ws),
    FS = function() {
        function e(n) {
            this.options = j({}, n.defaultOptions, n.options), this.mutationId = n.mutationId, this.mutationCache = n.mutationCache, this.observers = [], this.state = n.state || zS(), this.meta = n.meta
        }
        var t = e.prototype;
        return t.setState = function(r) {
            this.dispatch({
                type: "setState",
                state: r
            })
        }, t.addObserver = function(r) {
            this.observers.indexOf(r) === -1 && this.observers.push(r)
        }, t.removeObserver = function(r) {
            this.observers = this.observers.filter(function(o) {
                return o !== r
            })
        }, t.cancel = function() {
            return this.retryer ? (this.retryer.cancel(), this.retryer.promise.then(wt).catch(wt)) : Promise.resolve()
        }, t.continue = function() {
            return this.retryer ? (this.retryer.continue(), this.retryer.promise) : this.execute()
        }, t.execute = function() {
            var r = this,
                o, i = this.state.status === "loading",
                s = Promise.resolve();
            return i || (this.dispatch({
                type: "loading",
                variables: this.options.variables
            }), s = s.then(function() {
                r.mutationCache.config.onMutate == null || r.mutationCache.config.onMutate(r.state.variables, r)
            }).then(function() {
                return r.options.onMutate == null ? void 0 : r.options.onMutate(r.state.variables)
            }).then(function(l) {
                l !== r.state.context && r.dispatch({
                    type: "loading",
                    context: l,
                    variables: r.state.variables
                })
            })), s.then(function() {
                return r.executeMutation()
            }).then(function(l) {
                o = l, r.mutationCache.config.onSuccess == null || r.mutationCache.config.onSuccess(o, r.state.variables, r.state.context, r)
            }).then(function() {
                return r.options.onSuccess == null ? void 0 : r.options.onSuccess(o, r.state.variables, r.state.context)
            }).then(function() {
                return r.options.onSettled == null ? void 0 : r.options.onSettled(o, null, r.state.variables, r.state.context)
            }).then(function() {
                return r.dispatch({
                    type: "success",
                    data: o
                }), o
            }).catch(function(l) {
                return r.mutationCache.config.onError == null || r.mutationCache.config.onError(l, r.state.variables, r.state.context, r), Ta().error(l), Promise.resolve().then(function() {
                    return r.options.onError == null ? void 0 : r.options.onError(l, r.state.variables, r.state.context)
                }).then(function() {
                    return r.options.onSettled == null ? void 0 : r.options.onSettled(void 0, l, r.state.variables, r.state.context)
                }).then(function() {
                    throw r.dispatch({
                        type: "error",
                        error: l
                    }), l
                })
            })
        }, t.executeMutation = function() {
            var r = this,
                o;
            return this.retryer = new L0({
                fn: function() {
                    return r.options.mutationFn ? r.options.mutationFn(r.state.variables) : Promise.reject("No mutationFn found")
                },
                onFail: function() {
                    r.dispatch({
                        type: "failed"
                    })
                },
                onPause: function() {
                    r.dispatch({
                        type: "pause"
                    })
                },
                onContinue: function() {
                    r.dispatch({
                        type: "continue"
                    })
                },
                retry: (o = this.options.retry) != null ? o : 0,
                retryDelay: this.options.retryDelay
            }), this.retryer.promise
        }, t.dispatch = function(r) {
            var o = this;
            this.state = BS(this.state, r), Ge.batch(function() {
                o.observers.forEach(function(i) {
                    i.onMutationUpdate(r)
                }), o.mutationCache.notify(o)
            })
        }, e
    }();

function zS() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        isPaused: !1,
        status: "idle",
        variables: void 0
    }
}

function BS(e, t) {
    switch (t.type) {
        case "failed":
            return j({}, e, {
                failureCount: e.failureCount + 1
            });
        case "pause":
            return j({}, e, {
                isPaused: !0
            });
        case "continue":
            return j({}, e, {
                isPaused: !1
            });
        case "loading":
            return j({}, e, {
                context: t.context,
                data: void 0,
                error: null,
                isPaused: !1,
                status: "loading",
                variables: t.variables
            });
        case "success":
            return j({}, e, {
                data: t.data,
                error: null,
                status: "success",
                isPaused: !1
            });
        case "error":
            return j({}, e, {
                data: void 0,
                error: t.error,
                failureCount: e.failureCount + 1,
                isPaused: !1,
                status: "error"
            });
        case "setState":
            return j({}, e, t.state);
        default:
            return e
    }
}
var US = function(e) {
    bo(t, e);

    function t(r) {
        var o;
        return o = e.call(this) || this, o.config = r || {}, o.mutations = [], o.mutationId = 0, o
    }
    var n = t.prototype;
    return n.build = function(o, i, s) {
        var l = new FS({
            mutationCache: this,
            mutationId: ++this.mutationId,
            options: o.defaultMutationOptions(i),
            state: s,
            defaultOptions: i.mutationKey ? o.getMutationDefaults(i.mutationKey) : void 0,
            meta: i.meta
        });
        return this.add(l), l
    }, n.add = function(o) {
        this.mutations.push(o), this.notify(o)
    }, n.remove = function(o) {
        this.mutations = this.mutations.filter(function(i) {
            return i !== o
        }), o.cancel(), this.notify(o)
    }, n.clear = function() {
        var o = this;
        Ge.batch(function() {
            o.mutations.forEach(function(i) {
                o.remove(i)
            })
        })
    }, n.getAll = function() {
        return this.mutations
    }, n.find = function(o) {
        return typeof o.exact > "u" && (o.exact = !0), this.mutations.find(function(i) {
            return _m(o, i)
        })
    }, n.findAll = function(o) {
        return this.mutations.filter(function(i) {
            return _m(o, i)
        })
    }, n.notify = function(o) {
        var i = this;
        Ge.batch(function() {
            i.listeners.forEach(function(s) {
                s(o)
            })
        })
    }, n.onFocus = function() {
        this.resumePausedMutations()
    }, n.onOnline = function() {
        this.resumePausedMutations()
    }, n.resumePausedMutations = function() {
        var o = this.mutations.filter(function(i) {
            return i.state.isPaused
        });
        return Ge.batch(function() {
            return o.reduce(function(i, s) {
                return i.then(function() {
                    return s.continue().catch(wt)
                })
            }, Promise.resolve())
        })
    }, t
}(Ws);

function VS() {
    return {
        onFetch: function(t) {
            t.fetchFn = function() {
                var n, r, o, i, s, l, a = (n = t.fetchOptions) == null || (r = n.meta) == null ? void 0 : r.refetchPage,
                    u = (o = t.fetchOptions) == null || (i = o.meta) == null ? void 0 : i.fetchMore,
                    c = u == null ? void 0 : u.pageParam,
                    f = (u == null ? void 0 : u.direction) === "forward",
                    h = (u == null ? void 0 : u.direction) === "backward",
                    y = ((s = t.state.data) == null ? void 0 : s.pages) || [],
                    v = ((l = t.state.data) == null ? void 0 : l.pageParams) || [],
                    d = M0(),
                    b = d == null ? void 0 : d.signal,
                    m = v,
                    p = !1,
                    g = t.options.queryFn || function() {
                        return Promise.reject("Missing queryFn")
                    },
                    w = function(U, H, I, Q) {
                        return m = Q ? [H].concat(m) : [].concat(m, [H]), Q ? [I].concat(U) : [].concat(U, [I])
                    },
                    C = function(U, H, I, Q) {
                        if (p) return Promise.reject("Cancelled");
                        if (typeof I > "u" && !H && U.length) return Promise.resolve(U);
                        var _ = {
                                queryKey: t.queryKey,
                                signal: b,
                                pageParam: I,
                                meta: t.meta
                            },
                            T = g(_),
                            B = Promise.resolve(T).then(function(q) {
                                return w(U, I, q, Q)
                            });
                        if (Oa(T)) {
                            var X = B;
                            X.cancel = T.cancel
                        }
                        return B
                    },
                    S;
                if (!y.length) S = C([]);
                else if (f) {
                    var k = typeof c < "u",
                        P = k ? c : Am(t.options, y);
                    S = C(y, k, P)
                } else if (h) {
                    var N = typeof c < "u",
                        O = N ? c : DS(t.options, y);
                    S = C(y, N, O, !0)
                } else(function() {
                    m = [];
                    var W = typeof t.options.getNextPageParam > "u",
                        U = a && y[0] ? a(y[0], 0, y) : !0;
                    S = U ? C([], W, v[0]) : Promise.resolve(w([], v[0], y[0]));
                    for (var H = function(_) {
                            S = S.then(function(T) {
                                var B = a && y[_] ? a(y[_], _, y) : !0;
                                if (B) {
                                    var X = W ? v[_] : Am(t.options, T);
                                    return C(T, W, X)
                                }
                                return Promise.resolve(w(T, v[_], y[_]))
                            })
                        }, I = 1; I < y.length; I++) H(I)
                })();
                var L = S.then(function(W) {
                        return {
                            pages: W,
                            pageParams: m
                        }
                    }),
                    $ = L;
                return $.cancel = function() {
                    p = !0, d == null || d.abort(), Oa(S) && S.cancel()
                }, L
            }
        }
    }
}

function Am(e, t) {
    return e.getNextPageParam == null ? void 0 : e.getNextPageParam(t[t.length - 1], t)
}

function DS(e, t) {
    return e.getPreviousPageParam == null ? void 0 : e.getPreviousPageParam(t[0], t)
}
var HS = function() {
        function e(n) {
            n === void 0 && (n = {}), this.queryCache = n.queryCache || new IS, this.mutationCache = n.mutationCache || new US, this.defaultOptions = n.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = []
        }
        var t = e.prototype;
        return t.mount = function() {
            var r = this;
            this.unsubscribeFocus = os.subscribe(function() {
                os.isFocused() && zl.isOnline() && (r.mutationCache.onFocus(), r.queryCache.onFocus())
            }), this.unsubscribeOnline = zl.subscribe(function() {
                os.isFocused() && zl.isOnline() && (r.mutationCache.onOnline(), r.queryCache.onOnline())
            })
        }, t.unmount = function() {
            var r, o;
            (r = this.unsubscribeFocus) == null || r.call(this), (o = this.unsubscribeOnline) == null || o.call(this)
        }, t.isFetching = function(r, o) {
            var i = yr(r, o),
                s = i[0];
            return s.fetching = !0, this.queryCache.findAll(s).length
        }, t.isMutating = function(r) {
            return this.mutationCache.findAll(j({}, r, {
                fetching: !0
            })).length
        }, t.getQueryData = function(r, o) {
            var i;
            return (i = this.queryCache.find(r, o)) == null ? void 0 : i.state.data
        }, t.getQueriesData = function(r) {
            return this.getQueryCache().findAll(r).map(function(o) {
                var i = o.queryKey,
                    s = o.state,
                    l = s.data;
                return [i, l]
            })
        }, t.setQueryData = function(r, o, i) {
            var s = Fl(r),
                l = this.defaultQueryOptions(s);
            return this.queryCache.build(this, l).setData(o, i)
        }, t.setQueriesData = function(r, o, i) {
            var s = this;
            return Ge.batch(function() {
                return s.getQueryCache().findAll(r).map(function(l) {
                    var a = l.queryKey;
                    return [a, s.setQueryData(a, o, i)]
                })
            })
        }, t.getQueryState = function(r, o) {
            var i;
            return (i = this.queryCache.find(r, o)) == null ? void 0 : i.state
        }, t.removeQueries = function(r, o) {
            var i = yr(r, o),
                s = i[0],
                l = this.queryCache;
            Ge.batch(function() {
                l.findAll(s).forEach(function(a) {
                    l.remove(a)
                })
            })
        }, t.resetQueries = function(r, o, i) {
            var s = this,
                l = yr(r, o, i),
                a = l[0],
                u = l[1],
                c = this.queryCache,
                f = j({}, a, {
                    active: !0
                });
            return Ge.batch(function() {
                return c.findAll(a).forEach(function(h) {
                    h.reset()
                }), s.refetchQueries(f, u)
            })
        }, t.cancelQueries = function(r, o, i) {
            var s = this,
                l = yr(r, o, i),
                a = l[0],
                u = l[1],
                c = u === void 0 ? {} : u;
            typeof c.revert > "u" && (c.revert = !0);
            var f = Ge.batch(function() {
                return s.queryCache.findAll(a).map(function(h) {
                    return h.cancel(c)
                })
            });
            return Promise.all(f).then(wt).catch(wt)
        }, t.invalidateQueries = function(r, o, i) {
            var s, l, a, u = this,
                c = yr(r, o, i),
                f = c[0],
                h = c[1],
                y = j({}, f, {
                    active: (s = (l = f.refetchActive) != null ? l : f.active) != null ? s : !0,
                    inactive: (a = f.refetchInactive) != null ? a : !1
                });
            return Ge.batch(function() {
                return u.queryCache.findAll(f).forEach(function(v) {
                    v.invalidate()
                }), u.refetchQueries(y, h)
            })
        }, t.refetchQueries = function(r, o, i) {
            var s = this,
                l = yr(r, o, i),
                a = l[0],
                u = l[1],
                c = Ge.batch(function() {
                    return s.queryCache.findAll(a).map(function(h) {
                        return h.fetch(void 0, j({}, u, {
                            meta: {
                                refetchPage: a == null ? void 0 : a.refetchPage
                            }
                        }))
                    })
                }),
                f = Promise.all(c).then(wt);
            return u != null && u.throwOnError || (f = f.catch(wt)), f
        }, t.fetchQuery = function(r, o, i) {
            var s = Fl(r, o, i),
                l = this.defaultQueryOptions(s);
            typeof l.retry > "u" && (l.retry = !1);
            var a = this.queryCache.build(this, l);
            return a.isStaleByTime(l.staleTime) ? a.fetch(l) : Promise.resolve(a.state.data)
        }, t.prefetchQuery = function(r, o, i) {
            return this.fetchQuery(r, o, i).then(wt).catch(wt)
        }, t.fetchInfiniteQuery = function(r, o, i) {
            var s = Fl(r, o, i);
            return s.behavior = VS(), this.fetchQuery(s)
        }, t.prefetchInfiniteQuery = function(r, o, i) {
            return this.fetchInfiniteQuery(r, o, i).then(wt).catch(wt)
        }, t.cancelMutations = function() {
            var r = this,
                o = Ge.batch(function() {
                    return r.mutationCache.getAll().map(function(i) {
                        return i.cancel()
                    })
                });
            return Promise.all(o).then(wt).catch(wt)
        }, t.resumePausedMutations = function() {
            return this.getMutationCache().resumePausedMutations()
        }, t.executeMutation = function(r) {
            return this.mutationCache.build(this, r).execute()
        }, t.getQueryCache = function() {
            return this.queryCache
        }, t.getMutationCache = function() {
            return this.mutationCache
        }, t.getDefaultOptions = function() {
            return this.defaultOptions
        }, t.setDefaultOptions = function(r) {
            this.defaultOptions = r
        }, t.setQueryDefaults = function(r, o) {
            var i = this.queryDefaults.find(function(s) {
                return eo(r) === eo(s.queryKey)
            });
            i ? i.defaultOptions = o : this.queryDefaults.push({
                queryKey: r,
                defaultOptions: o
            })
        }, t.getQueryDefaults = function(r) {
            var o;
            return r ? (o = this.queryDefaults.find(function(i) {
                return ka(r, i.queryKey)
            })) == null ? void 0 : o.defaultOptions : void 0
        }, t.setMutationDefaults = function(r, o) {
            var i = this.mutationDefaults.find(function(s) {
                return eo(r) === eo(s.mutationKey)
            });
            i ? i.defaultOptions = o : this.mutationDefaults.push({
                mutationKey: r,
                defaultOptions: o
            })
        }, t.getMutationDefaults = function(r) {
            var o;
            return r ? (o = this.mutationDefaults.find(function(i) {
                return ka(r, i.mutationKey)
            })) == null ? void 0 : o.defaultOptions : void 0
        }, t.defaultQueryOptions = function(r) {
            if (r != null && r._defaulted) return r;
            var o = j({}, this.defaultOptions.queries, this.getQueryDefaults(r == null ? void 0 : r.queryKey), r, {
                _defaulted: !0
            });
            return !o.queryHash && o.queryKey && (o.queryHash = mp(o.queryKey, o)), o
        }, t.defaultQueryObserverOptions = function(r) {
            return this.defaultQueryOptions(r)
        }, t.defaultMutationOptions = function(r) {
            return r != null && r._defaulted ? r : j({}, this.defaultOptions.mutations, this.getMutationDefaults(r == null ? void 0 : r.mutationKey), r, {
                _defaulted: !0
            })
        }, t.clear = function() {
            this.queryCache.clear(), this.mutationCache.clear()
        }, e
    }(),
    WS = function(e) {
        bo(t, e);

        function t(r, o) {
            var i;
            return i = e.call(this) || this, i.client = r, i.options = o, i.trackedProps = [], i.selectError = null, i.bindMethods(), i.setOptions(o), i
        }
        var n = t.prototype;
        return n.bindMethods = function() {
            this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
        }, n.onSubscribe = function() {
            this.listeners.length === 1 && (this.currentQuery.addObserver(this), Lm(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
        }, n.onUnsubscribe = function() {
            this.listeners.length || this.destroy()
        }, n.shouldFetchOnReconnect = function() {
            return Wf(this.currentQuery, this.options, this.options.refetchOnReconnect)
        }, n.shouldFetchOnWindowFocus = function() {
            return Wf(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
        }, n.destroy = function() {
            this.listeners = [], this.clearTimers(), this.currentQuery.removeObserver(this)
        }, n.setOptions = function(o, i) {
            var s = this.options,
                l = this.currentQuery;
            if (this.options = this.client.defaultQueryObserverOptions(o), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean") throw new Error("Expected enabled to be a boolean");
            this.options.queryKey || (this.options.queryKey = s.queryKey), this.updateQuery();
            var a = this.hasListeners();
            a && Im(this.currentQuery, l, this.options, s) && this.executeFetch(), this.updateResult(i), a && (this.currentQuery !== l || this.options.enabled !== s.enabled || this.options.staleTime !== s.staleTime) && this.updateStaleTimeout();
            var u = this.computeRefetchInterval();
            a && (this.currentQuery !== l || this.options.enabled !== s.enabled || u !== this.currentRefetchInterval) && this.updateRefetchInterval(u)
        }, n.getOptimisticResult = function(o) {
            var i = this.client.defaultQueryObserverOptions(o),
                s = this.client.getQueryCache().build(this.client, i);
            return this.createResult(s, i)
        }, n.getCurrentResult = function() {
            return this.currentResult
        }, n.trackResult = function(o, i) {
            var s = this,
                l = {},
                a = function(c) {
                    s.trackedProps.includes(c) || s.trackedProps.push(c)
                };
            return Object.keys(o).forEach(function(u) {
                Object.defineProperty(l, u, {
                    configurable: !1,
                    enumerable: !0,
                    get: function() {
                        return a(u), o[u]
                    }
                })
            }), (i.useErrorBoundary || i.suspense) && a("error"), l
        }, n.getNextResult = function(o) {
            var i = this;
            return new Promise(function(s, l) {
                var a = i.subscribe(function(u) {
                    u.isFetching || (a(), u.isError && (o != null && o.throwOnError) ? l(u.error) : s(u))
                })
            })
        }, n.getCurrentQuery = function() {
            return this.currentQuery
        }, n.remove = function() {
            this.client.getQueryCache().remove(this.currentQuery)
        }, n.refetch = function(o) {
            return this.fetch(j({}, o, {
                meta: {
                    refetchPage: o == null ? void 0 : o.refetchPage
                }
            }))
        }, n.fetchOptimistic = function(o) {
            var i = this,
                s = this.client.defaultQueryObserverOptions(o),
                l = this.client.getQueryCache().build(this.client, s);
            return l.fetch().then(function() {
                return i.createResult(l, s)
            })
        }, n.fetch = function(o) {
            var i = this;
            return this.executeFetch(o).then(function() {
                return i.updateResult(), i.currentResult
            })
        }, n.executeFetch = function(o) {
            this.updateQuery();
            var i = this.currentQuery.fetch(this.options, o);
            return o != null && o.throwOnError || (i = i.catch(wt)), i
        }, n.updateStaleTimeout = function() {
            var o = this;
            if (this.clearStaleTimeout(), !(Ea || this.currentResult.isStale || !Df(this.options.staleTime))) {
                var i = _0(this.currentResult.dataUpdatedAt, this.options.staleTime),
                    s = i + 1;
                this.staleTimeoutId = setTimeout(function() {
                    o.currentResult.isStale || o.updateResult()
                }, s)
            }
        }, n.computeRefetchInterval = function() {
            var o;
            return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (o = this.options.refetchInterval) != null ? o : !1
        }, n.updateRefetchInterval = function(o) {
            var i = this;
            this.clearRefetchInterval(), this.currentRefetchInterval = o, !(Ea || this.options.enabled === !1 || !Df(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(function() {
                (i.options.refetchIntervalInBackground || os.isFocused()) && i.executeFetch()
            }, this.currentRefetchInterval))
        }, n.updateTimers = function() {
            this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
        }, n.clearTimers = function() {
            this.clearStaleTimeout(), this.clearRefetchInterval()
        }, n.clearStaleTimeout = function() {
            this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0)
        }, n.clearRefetchInterval = function() {
            this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0)
        }, n.createResult = function(o, i) {
            var s = this.currentQuery,
                l = this.options,
                a = this.currentResult,
                u = this.currentResultState,
                c = this.currentResultOptions,
                f = o !== s,
                h = f ? o.state : this.currentQueryInitialState,
                y = f ? this.currentResult : this.previousQueryResult,
                v = o.state,
                d = v.dataUpdatedAt,
                b = v.error,
                m = v.errorUpdatedAt,
                p = v.isFetching,
                g = v.status,
                w = !1,
                C = !1,
                S;
            if (i.optimisticResults) {
                var k = this.hasListeners(),
                    P = !k && Lm(o, i),
                    N = k && Im(o, s, i, l);
                (P || N) && (p = !0, d || (g = "loading"))
            }
            if (i.keepPreviousData && !v.dataUpdateCount && (y != null && y.isSuccess) && g !== "error") S = y.data, d = y.dataUpdatedAt, g = y.status, w = !0;
            else if (i.select && typeof v.data < "u")
                if (a && v.data === (u == null ? void 0 : u.data) && i.select === this.selectFn) S = this.selectResult;
                else try {
                    this.selectFn = i.select, S = i.select(v.data), i.structuralSharing !== !1 && (S = Pa(a == null ? void 0 : a.data, S)), this.selectResult = S, this.selectError = null
                } catch ($) {
                    Ta().error($), this.selectError = $
                } else S = v.data;
            if (typeof i.placeholderData < "u" && typeof S > "u" && (g === "loading" || g === "idle")) {
                var O;
                if (a != null && a.isPlaceholderData && i.placeholderData === (c == null ? void 0 : c.placeholderData)) O = a.data;
                else if (O = typeof i.placeholderData == "function" ? i.placeholderData() : i.placeholderData, i.select && typeof O < "u") try {
                    O = i.select(O), i.structuralSharing !== !1 && (O = Pa(a == null ? void 0 : a.data, O)), this.selectError = null
                } catch ($) {
                    Ta().error($), this.selectError = $
                }
                typeof O < "u" && (g = "success", S = O, C = !0)
            }
            this.selectError && (b = this.selectError, S = this.selectResult, m = Date.now(), g = "error");
            var L = {
                status: g,
                isLoading: g === "loading",
                isSuccess: g === "success",
                isError: g === "error",
                isIdle: g === "idle",
                data: S,
                dataUpdatedAt: d,
                error: b,
                errorUpdatedAt: m,
                failureCount: v.fetchFailureCount,
                errorUpdateCount: v.errorUpdateCount,
                isFetched: v.dataUpdateCount > 0 || v.errorUpdateCount > 0,
                isFetchedAfterMount: v.dataUpdateCount > h.dataUpdateCount || v.errorUpdateCount > h.errorUpdateCount,
                isFetching: p,
                isRefetching: p && g !== "loading",
                isLoadingError: g === "error" && v.dataUpdatedAt === 0,
                isPlaceholderData: C,
                isPreviousData: w,
                isRefetchError: g === "error" && v.dataUpdatedAt !== 0,
                isStale: vp(o, i),
                refetch: this.refetch,
                remove: this.remove
            };
            return L
        }, n.shouldNotifyListeners = function(o, i) {
            if (!i) return !0;
            var s = this.options,
                l = s.notifyOnChangeProps,
                a = s.notifyOnChangePropsExclusions;
            if (!l && !a || l === "tracked" && !this.trackedProps.length) return !0;
            var u = l === "tracked" ? this.trackedProps : l;
            return Object.keys(o).some(function(c) {
                var f = c,
                    h = o[f] !== i[f],
                    y = u == null ? void 0 : u.some(function(d) {
                        return d === c
                    }),
                    v = a == null ? void 0 : a.some(function(d) {
                        return d === c
                    });
                return h && !v && (!u || y)
            })
        }, n.updateResult = function(o) {
            var i = this.currentResult;
            if (this.currentResult = this.createResult(this.currentQuery, this.options), this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, !RS(this.currentResult, i)) {
                var s = {
                    cache: !0
                };
                (o == null ? void 0 : o.listeners) !== !1 && this.shouldNotifyListeners(this.currentResult, i) && (s.listeners = !0), this.notify(j({}, s, o))
            }
        }, n.updateQuery = function() {
            var o = this.client.getQueryCache().build(this.client, this.options);
            if (o !== this.currentQuery) {
                var i = this.currentQuery;
                this.currentQuery = o, this.currentQueryInitialState = o.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (i == null || i.removeObserver(this), o.addObserver(this))
            }
        }, n.onQueryUpdate = function(o) {
            var i = {};
            o.type === "success" ? i.onSuccess = !0 : o.type === "error" && !Bl(o.error) && (i.onError = !0), this.updateResult(i), this.hasListeners() && this.updateTimers()
        }, n.notify = function(o) {
            var i = this;
            Ge.batch(function() {
                o.onSuccess ? (i.options.onSuccess == null || i.options.onSuccess(i.currentResult.data), i.options.onSettled == null || i.options.onSettled(i.currentResult.data, null)) : o.onError && (i.options.onError == null || i.options.onError(i.currentResult.error), i.options.onSettled == null || i.options.onSettled(void 0, i.currentResult.error)), o.listeners && i.listeners.forEach(function(s) {
                    s(i.currentResult)
                }), o.cache && i.client.getQueryCache().notify({
                    query: i.currentQuery,
                    type: "observerResultsUpdated"
                })
            })
        }, t
    }(Ws);

function QS(e, t) {
    return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1)
}

function Lm(e, t) {
    return QS(e, t) || e.state.dataUpdatedAt > 0 && Wf(e, t, t.refetchOnMount)
}

function Wf(e, t, n) {
    if (t.enabled !== !1) {
        var r = typeof n == "function" ? n(e) : n;
        return r === "always" || r !== !1 && vp(e, t)
    }
    return !1
}

function Im(e, t, n, r) {
    return n.enabled !== !1 && (e !== t || r.enabled === !1) && (!n.suspense || e.state.status !== "error") && vp(e, n)
}

function vp(e, t) {
    return e.isStaleByTime(t.staleTime)
}
var KS = Wi.unstable_batchedUpdates;
Ge.setBatchNotifyFunction(KS);
var qS = console;
AS(qS);
var Fm = ne.createContext(void 0),
    F0 = ne.createContext(!1);

function z0(e) {
    return e && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Fm), window.ReactQueryClientContext) : Fm
}
var GS = function() {
        var t = ne.useContext(z0(ne.useContext(F0)));
        if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return t
    },
    XS = function(t) {
        var n = t.client,
            r = t.contextSharing,
            o = r === void 0 ? !1 : r,
            i = t.children;
        ne.useEffect(function() {
            return n.mount(),
                function() {
                    n.unmount()
                }
        }, [n]);
        var s = z0(o);
        return ne.createElement(F0.Provider, {
            value: o
        }, ne.createElement(s.Provider, {
            value: n
        }, i))
    };

function YS() {
    var e = !1;
    return {
        clearReset: function() {
            e = !1
        },
        reset: function() {
            e = !0
        },
        isReset: function() {
            return e
        }
    }
}
var JS = ne.createContext(YS()),
    ZS = function() {
        return ne.useContext(JS)
    };

function eE(e, t, n) {
    return typeof t == "function" ? t.apply(void 0, n) : typeof t == "boolean" ? t : !!e
}

function tE(e, t) {
    var n = ne.useRef(!1),
        r = ne.useState(0),
        o = r[1],
        i = GS(),
        s = ZS(),
        l = i.defaultQueryObserverOptions(e);
    l.optimisticResults = !0, l.onError && (l.onError = Ge.batchCalls(l.onError)), l.onSuccess && (l.onSuccess = Ge.batchCalls(l.onSuccess)), l.onSettled && (l.onSettled = Ge.batchCalls(l.onSettled)), l.suspense && (typeof l.staleTime != "number" && (l.staleTime = 1e3), l.cacheTime === 0 && (l.cacheTime = 1)), (l.suspense || l.useErrorBoundary) && (s.isReset() || (l.retryOnMount = !1));
    var a = ne.useState(function() {
            return new t(i, l)
        }),
        u = a[0],
        c = u.getOptimisticResult(l);
    if (ne.useEffect(function() {
            n.current = !0, s.clearReset();
            var f = u.subscribe(Ge.batchCalls(function() {
                n.current && o(function(h) {
                    return h + 1
                })
            }));
            return u.updateResult(),
                function() {
                    n.current = !1, f()
                }
        }, [s, u]), ne.useEffect(function() {
            u.setOptions(l, {
                listeners: !1
            })
        }, [l, u]), l.suspense && c.isLoading) throw u.fetchOptimistic(l).then(function(f) {
        var h = f.data;
        l.onSuccess == null || l.onSuccess(h), l.onSettled == null || l.onSettled(h, null)
    }).catch(function(f) {
        s.clearReset(), l.onError == null || l.onError(f), l.onSettled == null || l.onSettled(void 0, f)
    });
    if (c.isError && !s.isReset() && !c.isFetching && eE(l.suspense, l.useErrorBoundary, [c.error, u.getCurrentQuery()])) throw c.error;
    return l.notifyOnChangeProps === "tracked" && (c = u.trackResult(c, l)), c
}

function Ns(e, t, n) {
    var r = Fl(e, t, n);
    return tE(r, WS)
}
var B0 = {
    exports: {}
};
(() => {
    var e = {
            296: (o, i, s) => {
                var l = /^\s+|\s+$/g,
                    a = /^[-+]0x[0-9a-f]+$/i,
                    u = /^0b[01]+$/i,
                    c = /^0o[0-7]+$/i,
                    f = parseInt,
                    h = typeof s.g == "object" && s.g && s.g.Object === Object && s.g,
                    y = typeof self == "object" && self && self.Object === Object && self,
                    v = h || y || Function("return this")(),
                    d = Object.prototype.toString,
                    b = Math.max,
                    m = Math.min,
                    p = function() {
                        return v.Date.now()
                    };

                function g(C) {
                    var S = typeof C;
                    return !!C && (S == "object" || S == "function")
                }

                function w(C) {
                    if (typeof C == "number") return C;
                    if (function(P) {
                            return typeof P == "symbol" || function(N) {
                                return !!N && typeof N == "object"
                            }(P) && d.call(P) == "[object Symbol]"
                        }(C)) return NaN;
                    if (g(C)) {
                        var S = typeof C.valueOf == "function" ? C.valueOf() : C;
                        C = g(S) ? S + "" : S
                    }
                    if (typeof C != "string") return C === 0 ? C : +C;
                    C = C.replace(l, "");
                    var k = u.test(C);
                    return k || c.test(C) ? f(C.slice(2), k ? 2 : 8) : a.test(C) ? NaN : +C
                }
                o.exports = function(C, S, k) {
                    var P, N, O, L, $, W, U = 0,
                        H = !1,
                        I = !1,
                        Q = !0;
                    if (typeof C != "function") throw new TypeError("Expected a function");

                    function _(re) {
                        var G = P,
                            J = N;
                        return P = N = void 0, U = re, L = C.apply(J, G)
                    }

                    function T(re) {
                        var G = re - W;
                        return W === void 0 || G >= S || G < 0 || I && re - U >= O
                    }

                    function B() {
                        var re = p();
                        if (T(re)) return X(re);
                        $ = setTimeout(B, function(G) {
                            var J = S - (G - W);
                            return I ? m(J, O - (G - U)) : J
                        }(re))
                    }

                    function X(re) {
                        return $ = void 0, Q && P ? _(re) : (P = N = void 0, L)
                    }

                    function q() {
                        var re = p(),
                            G = T(re);
                        if (P = arguments, N = this, W = re, G) {
                            if ($ === void 0) return function(J) {
                                return U = J, $ = setTimeout(B, S), H ? _(J) : L
                            }(W);
                            if (I) return $ = setTimeout(B, S), _(W)
                        }
                        return $ === void 0 && ($ = setTimeout(B, S)), L
                    }
                    return S = w(S) || 0, g(k) && (H = !!k.leading, O = (I = "maxWait" in k) ? b(w(k.maxWait) || 0, S) : O, Q = "trailing" in k ? !!k.trailing : Q), q.cancel = function() {
                        $ !== void 0 && clearTimeout($), U = 0, P = W = N = $ = void 0
                    }, q.flush = function() {
                        return $ === void 0 ? L : X(p())
                    }, q
                }
            },
            96: (o, i, s) => {
                var l = "Expected a function",
                    a = NaN,
                    u = "[object Symbol]",
                    c = /^\s+|\s+$/g,
                    f = /^[-+]0x[0-9a-f]+$/i,
                    h = /^0b[01]+$/i,
                    y = /^0o[0-7]+$/i,
                    v = parseInt,
                    d = typeof s.g == "object" && s.g && s.g.Object === Object && s.g,
                    b = typeof self == "object" && self && self.Object === Object && self,
                    m = d || b || Function("return this")(),
                    p = Object.prototype.toString,
                    g = Math.max,
                    w = Math.min,
                    C = function() {
                        return m.Date.now()
                    };

                function S(P) {
                    var N = typeof P;
                    return !!P && (N == "object" || N == "function")
                }

                function k(P) {
                    if (typeof P == "number") return P;
                    if (function(L) {
                            return typeof L == "symbol" || function($) {
                                return !!$ && typeof $ == "object"
                            }(L) && p.call(L) == u
                        }(P)) return a;
                    if (S(P)) {
                        var N = typeof P.valueOf == "function" ? P.valueOf() : P;
                        P = S(N) ? N + "" : N
                    }
                    if (typeof P != "string") return P === 0 ? P : +P;
                    P = P.replace(c, "");
                    var O = h.test(P);
                    return O || y.test(P) ? v(P.slice(2), O ? 2 : 8) : f.test(P) ? a : +P
                }
                o.exports = function(P, N, O) {
                    var L = !0,
                        $ = !0;
                    if (typeof P != "function") throw new TypeError(l);
                    return S(O) && (L = "leading" in O ? !!O.leading : L, $ = "trailing" in O ? !!O.trailing : $),
                        function(W, U, H) {
                            var I, Q, _, T, B, X, q = 0,
                                re = !1,
                                G = !1,
                                J = !0;
                            if (typeof W != "function") throw new TypeError(l);

                            function he(me) {
                                var Ie = I,
                                    oe = Q;
                                return I = Q = void 0, q = me, T = W.apply(oe, Ie)
                            }

                            function je(me) {
                                var Ie = me - X;
                                return X === void 0 || Ie >= U || Ie < 0 || G && me - q >= _
                            }

                            function fe() {
                                var me = C();
                                if (je(me)) return ye(me);
                                B = setTimeout(fe, function(Ie) {
                                    var oe = U - (Ie - X);
                                    return G ? w(oe, _ - (Ie - q)) : oe
                                }(me))
                            }

                            function ye(me) {
                                return B = void 0, J && I ? he(me) : (I = Q = void 0, T)
                            }

                            function Be() {
                                var me = C(),
                                    Ie = je(me);
                                if (I = arguments, Q = this, X = me, Ie) {
                                    if (B === void 0) return function(oe) {
                                        return q = oe, B = setTimeout(fe, U), re ? he(oe) : T
                                    }(X);
                                    if (G) return B = setTimeout(fe, U), he(X)
                                }
                                return B === void 0 && (B = setTimeout(fe, U)), T
                            }
                            return U = k(U) || 0, S(H) && (re = !!H.leading, _ = (G = "maxWait" in H) ? g(k(H.maxWait) || 0, U) : _, J = "trailing" in H ? !!H.trailing : J), Be.cancel = function() {
                                B !== void 0 && clearTimeout(B), q = 0, I = X = Q = B = void 0
                            }, Be.flush = function() {
                                return B === void 0 ? T : ye(C())
                            }, Be
                        }(P, N, {
                            leading: L,
                            maxWait: N,
                            trailing: $
                        })
                }
            },
            703: (o, i, s) => {
                var l = s(414);

                function a() {}

                function u() {}
                u.resetWarningCache = a, o.exports = function() {
                    function c(y, v, d, b, m, p) {
                        if (p !== l) {
                            var g = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw g.name = "Invariant Violation", g
                        }
                    }

                    function f() {
                        return c
                    }
                    c.isRequired = c;
                    var h = {
                        array: c,
                        bigint: c,
                        bool: c,
                        func: c,
                        number: c,
                        object: c,
                        string: c,
                        symbol: c,
                        any: c,
                        arrayOf: f,
                        element: c,
                        elementType: c,
                        instanceOf: f,
                        node: c,
                        objectOf: f,
                        oneOf: f,
                        oneOfType: f,
                        shape: f,
                        exact: f,
                        checkPropTypes: u,
                        resetWarningCache: a
                    };
                    return h.PropTypes = h, h
                }
            },
            697: (o, i, s) => {
                o.exports = s(703)()
            },
            414: o => {
                o.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            }
        },
        t = {};

    function n(o) {
        var i = t[o];
        if (i !== void 0) return i.exports;
        var s = t[o] = {
            exports: {}
        };
        return e[o](s, s.exports, n), s.exports
    }
    n.n = o => {
        var i = o && o.__esModule ? () => o.default : () => o;
        return n.d(i, {
            a: i
        }), i
    }, n.d = (o, i) => {
        for (var s in i) n.o(i, s) && !n.o(o, s) && Object.defineProperty(o, s, {
            enumerable: !0,
            get: i[s]
        })
    }, n.g = function() {
        if (typeof globalThis == "object") return globalThis;
        try {
            return this || new Function("return this")()
        } catch {
            if (typeof window == "object") return window
        }
    }(), n.o = (o, i) => Object.prototype.hasOwnProperty.call(o, i), n.r = o => {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(o, "__esModule", {
            value: !0
        })
    };
    var r = {};
    (() => {
        n.r(r), n.d(r, {
            LazyLoadComponent: () => Se,
            LazyLoadImage: () => Mt,
            trackWindowScroll: () => X
        });
        const o = E;
        var i = n.n(o),
            s = n(697);
        const l = ru;
        var a = n.n(l);

        function u() {
            return typeof window < "u" && "IntersectionObserver" in window && "isIntersecting" in window.IntersectionObserverEntry.prototype
        }

        function c(V) {
            return c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(R) {
                return typeof R
            } : function(R) {
                return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R
            }, c(V)
        }

        function f(V, R) {
            var M = Object.keys(V);
            if (Object.getOwnPropertySymbols) {
                var D = Object.getOwnPropertySymbols(V);
                R && (D = D.filter(function(se) {
                    return Object.getOwnPropertyDescriptor(V, se).enumerable
                })), M.push.apply(M, D)
            }
            return M
        }

        function h(V, R, M) {
            return (R = v(R)) in V ? Object.defineProperty(V, R, {
                value: M,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : V[R] = M, V
        }

        function y(V, R) {
            for (var M = 0; M < R.length; M++) {
                var D = R[M];
                D.enumerable = D.enumerable || !1, D.configurable = !0, "value" in D && (D.writable = !0), Object.defineProperty(V, v(D.key), D)
            }
        }

        function v(V) {
            var R = function(M, D) {
                if (c(M) !== "object" || M === null) return M;
                var se = M[Symbol.toPrimitive];
                if (se !== void 0) {
                    var ie = se.call(M, "string");
                    if (c(ie) !== "object") return ie;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(M)
            }(V);
            return c(R) === "symbol" ? R : String(R)
        }

        function d(V, R) {
            return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(M, D) {
                return M.__proto__ = D, M
            }, d(V, R)
        }

        function b(V) {
            return b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(R) {
                return R.__proto__ || Object.getPrototypeOf(R)
            }, b(V)
        }
        var m = function(V) {
                V.forEach(function(R) {
                    R.isIntersecting && R.target.onVisible()
                })
            },
            p = {},
            g = function(V) {
                (function(A, F) {
                    if (typeof F != "function" && F !== null) throw new TypeError("Super expression must either be null or a function");
                    A.prototype = Object.create(F && F.prototype, {
                        constructor: {
                            value: A,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(A, "prototype", {
                        writable: !1
                    }), F && d(A, F)
                })(de, V);
                var R, M, D, se, ie = (D = de, se = function() {
                    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                    if (typeof Proxy == "function") return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch {
                        return !1
                    }
                }(), function() {
                    var A, F = b(D);
                    if (se) {
                        var te = b(this).constructor;
                        A = Reflect.construct(F, arguments, te)
                    } else A = F.apply(this, arguments);
                    return function(Z, Y) {
                        if (Y && (c(Y) === "object" || typeof Y == "function")) return Y;
                        if (Y !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(ae) {
                            if (ae === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return ae
                        }(Z)
                    }(this, A)
                });

                function de(A) {
                    var F;
                    if (function(Z, Y) {
                            if (!(Z instanceof Y)) throw new TypeError("Cannot call a class as a function")
                        }(this, de), (F = ie.call(this, A)).supportsObserver = !A.scrollPosition && A.useIntersectionObserver && u(), F.supportsObserver) {
                        var te = A.threshold;
                        F.observer = function(Z) {
                            return p[Z] = p[Z] || new IntersectionObserver(m, {
                                rootMargin: Z + "px"
                            }), p[Z]
                        }(te)
                    }
                    return F
                }
                return R = de, M = [{
                    key: "componentDidMount",
                    value: function() {
                        this.placeholder && this.observer && (this.placeholder.onVisible = this.props.onVisible, this.observer.observe(this.placeholder)), this.supportsObserver || this.updateVisibility()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.observer && this.placeholder && this.observer.unobserve(this.placeholder)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.supportsObserver || this.updateVisibility()
                    }
                }, {
                    key: "getPlaceholderBoundingBox",
                    value: function() {
                        var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props.scrollPosition,
                            F = this.placeholder.getBoundingClientRect(),
                            te = a().findDOMNode(this.placeholder).style,
                            Z = parseInt(te.getPropertyValue("margin-left"), 10) || 0,
                            Y = parseInt(te.getPropertyValue("margin-top"), 10) || 0;
                        return {
                            bottom: A.y + F.bottom + Y,
                            left: A.x + F.left + Z,
                            right: A.x + F.right + Z,
                            top: A.y + F.top + Y
                        }
                    }
                }, {
                    key: "isPlaceholderInViewport",
                    value: function() {
                        if (typeof window > "u" || !this.placeholder) return !1;
                        var A = this.props,
                            F = A.scrollPosition,
                            te = A.threshold,
                            Z = this.getPlaceholderBoundingBox(F),
                            Y = F.y + window.innerHeight,
                            ae = F.x,
                            _e = F.x + window.innerWidth,
                            $e = F.y;
                        return $e - te <= Z.bottom && Y + te >= Z.top && ae - te <= Z.right && _e + te >= Z.left
                    }
                }, {
                    key: "updateVisibility",
                    value: function() {
                        this.isPlaceholderInViewport() && this.props.onVisible()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var A = this,
                            F = this.props,
                            te = F.className,
                            Z = F.height,
                            Y = F.placeholder,
                            ae = F.style,
                            _e = F.width;
                        if (Y && typeof Y.type != "function") return i().cloneElement(Y, {
                            ref: function(Te) {
                                return A.placeholder = Te
                            }
                        });
                        var $e = function(Te) {
                            for (var Ze = 1; Ze < arguments.length; Ze++) {
                                var Ve = arguments[Ze] != null ? arguments[Ze] : {};
                                Ze % 2 ? f(Object(Ve), !0).forEach(function(ot) {
                                    h(Te, ot, Ve[ot])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Te, Object.getOwnPropertyDescriptors(Ve)) : f(Object(Ve)).forEach(function(ot) {
                                    Object.defineProperty(Te, ot, Object.getOwnPropertyDescriptor(Ve, ot))
                                })
                            }
                            return Te
                        }({
                            display: "inline-block"
                        }, ae);
                        return _e !== void 0 && ($e.width = _e), Z !== void 0 && ($e.height = Z), i().createElement("span", {
                            className: te,
                            ref: function(Te) {
                                return A.placeholder = Te
                            },
                            style: $e
                        }, Y)
                    }
                }], M && y(R.prototype, M), Object.defineProperty(R, "prototype", {
                    writable: !1
                }), de
            }(i().Component);
        g.propTypes = {
            onVisible: s.PropTypes.func.isRequired,
            className: s.PropTypes.string,
            height: s.PropTypes.oneOfType([s.PropTypes.number, s.PropTypes.string]),
            placeholder: s.PropTypes.element,
            threshold: s.PropTypes.number,
            useIntersectionObserver: s.PropTypes.bool,
            scrollPosition: s.PropTypes.shape({
                x: s.PropTypes.number.isRequired,
                y: s.PropTypes.number.isRequired
            }),
            width: s.PropTypes.oneOfType([s.PropTypes.number, s.PropTypes.string])
        }, g.defaultProps = {
            className: "",
            placeholder: null,
            threshold: 100,
            useIntersectionObserver: !0
        };
        const w = g;
        var C = n(296),
            S = n.n(C),
            k = n(96),
            P = n.n(k),
            N = function(V) {
                var R = getComputedStyle(V, null);
                return R.getPropertyValue("overflow") + R.getPropertyValue("overflow-y") + R.getPropertyValue("overflow-x")
            };
        const O = function(V) {
            if (!(V instanceof HTMLElement)) return window;
            for (var R = V; R && R instanceof HTMLElement;) {
                if (/(scroll|auto)/.test(N(R))) return R;
                R = R.parentNode
            }
            return window
        };

        function L(V) {
            return L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(R) {
                return typeof R
            } : function(R) {
                return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R
            }, L(V)
        }
        var $ = ["delayMethod", "delayTime"];

        function W() {
            return W = Object.assign ? Object.assign.bind() : function(V) {
                for (var R = 1; R < arguments.length; R++) {
                    var M = arguments[R];
                    for (var D in M) Object.prototype.hasOwnProperty.call(M, D) && (V[D] = M[D])
                }
                return V
            }, W.apply(this, arguments)
        }

        function U(V, R) {
            for (var M = 0; M < R.length; M++) {
                var D = R[M];
                D.enumerable = D.enumerable || !1, D.configurable = !0, "value" in D && (D.writable = !0), Object.defineProperty(V, (se = function(ie, de) {
                    if (L(ie) !== "object" || ie === null) return ie;
                    var A = ie[Symbol.toPrimitive];
                    if (A !== void 0) {
                        var F = A.call(ie, "string");
                        if (L(F) !== "object") return F;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(ie)
                }(D.key), L(se) === "symbol" ? se : String(se)), D)
            }
            var se
        }

        function H(V, R) {
            return H = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(M, D) {
                return M.__proto__ = D, M
            }, H(V, R)
        }

        function I(V, R) {
            if (R && (L(R) === "object" || typeof R == "function")) return R;
            if (R !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
            return Q(V)
        }

        function Q(V) {
            if (V === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return V
        }

        function _(V) {
            return _ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(R) {
                return R.__proto__ || Object.getPrototypeOf(R)
            }, _(V)
        }
        var T = function() {
                return typeof window > "u" ? 0 : window.scrollX || window.pageXOffset
            },
            B = function() {
                return typeof window > "u" ? 0 : window.scrollY || window.pageYOffset
            };
        const X = function(V) {
            var R = function(M) {
                (function(te, Z) {
                    if (typeof Z != "function" && Z !== null) throw new TypeError("Super expression must either be null or a function");
                    te.prototype = Object.create(Z && Z.prototype, {
                        constructor: {
                            value: te,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(te, "prototype", {
                        writable: !1
                    }), Z && H(te, Z)
                })(F, M);
                var D, se, ie, de, A = (ie = F, de = function() {
                    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                    if (typeof Proxy == "function") return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch {
                        return !1
                    }
                }(), function() {
                    var te, Z = _(ie);
                    if (de) {
                        var Y = _(this).constructor;
                        te = Reflect.construct(Z, arguments, Y)
                    } else te = Z.apply(this, arguments);
                    return I(this, te)
                });

                function F(te) {
                    var Z;
                    if (function(ae, _e) {
                            if (!(ae instanceof _e)) throw new TypeError("Cannot call a class as a function")
                        }(this, F), (Z = A.call(this, te)).useIntersectionObserver = te.useIntersectionObserver && u(), Z.useIntersectionObserver) return I(Z);
                    var Y = Z.onChangeScroll.bind(Q(Z));
                    return te.delayMethod === "debounce" ? Z.delayedScroll = S()(Y, te.delayTime) : te.delayMethod === "throttle" && (Z.delayedScroll = P()(Y, te.delayTime)), Z.state = {
                        scrollPosition: {
                            x: T(),
                            y: B()
                        }
                    }, Z.baseComponentRef = i().createRef(), Z
                }
                return D = F, (se = [{
                    key: "componentDidMount",
                    value: function() {
                        this.addListeners()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.removeListeners()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        typeof window > "u" || this.useIntersectionObserver || O(a().findDOMNode(this.baseComponentRef.current)) !== this.scrollElement && (this.removeListeners(), this.addListeners())
                    }
                }, {
                    key: "addListeners",
                    value: function() {
                        typeof window > "u" || this.useIntersectionObserver || (this.scrollElement = O(a().findDOMNode(this.baseComponentRef.current)), this.scrollElement.addEventListener("scroll", this.delayedScroll, {
                            passive: !0
                        }), window.addEventListener("resize", this.delayedScroll, {
                            passive: !0
                        }), this.scrollElement !== window && window.addEventListener("scroll", this.delayedScroll, {
                            passive: !0
                        }))
                    }
                }, {
                    key: "removeListeners",
                    value: function() {
                        typeof window > "u" || this.useIntersectionObserver || (this.scrollElement.removeEventListener("scroll", this.delayedScroll), window.removeEventListener("resize", this.delayedScroll), this.scrollElement !== window && window.removeEventListener("scroll", this.delayedScroll))
                    }
                }, {
                    key: "onChangeScroll",
                    value: function() {
                        this.useIntersectionObserver || this.setState({
                            scrollPosition: {
                                x: T(),
                                y: B()
                            }
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var te = this.props,
                            Z = (te.delayMethod, te.delayTime, function(ae, _e) {
                                if (ae == null) return {};
                                var $e, Te, Ze = function(ot, qn) {
                                    if (ot == null) return {};
                                    var Mn, wo, el = {},
                                        tl = Object.keys(ot);
                                    for (wo = 0; wo < tl.length; wo++) Mn = tl[wo], qn.indexOf(Mn) >= 0 || (el[Mn] = ot[Mn]);
                                    return el
                                }(ae, _e);
                                if (Object.getOwnPropertySymbols) {
                                    var Ve = Object.getOwnPropertySymbols(ae);
                                    for (Te = 0; Te < Ve.length; Te++) $e = Ve[Te], _e.indexOf($e) >= 0 || Object.prototype.propertyIsEnumerable.call(ae, $e) && (Ze[$e] = ae[$e])
                                }
                                return Ze
                            }(te, $)),
                            Y = this.useIntersectionObserver ? null : this.state.scrollPosition;
                        return i().createElement(V, W({
                            forwardRef: this.baseComponentRef,
                            scrollPosition: Y
                        }, Z))
                    }
                }]) && U(D.prototype, se), Object.defineProperty(D, "prototype", {
                    writable: !1
                }), F
            }(i().Component);
            return R.propTypes = {
                delayMethod: s.PropTypes.oneOf(["debounce", "throttle"]),
                delayTime: s.PropTypes.number,
                useIntersectionObserver: s.PropTypes.bool
            }, R.defaultProps = {
                delayMethod: "throttle",
                delayTime: 300,
                useIntersectionObserver: !0
            }, R
        };

        function q(V) {
            return q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(R) {
                return typeof R
            } : function(R) {
                return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R
            }, q(V)
        }

        function re(V, R) {
            for (var M = 0; M < R.length; M++) {
                var D = R[M];
                D.enumerable = D.enumerable || !1, D.configurable = !0, "value" in D && (D.writable = !0), Object.defineProperty(V, (se = function(ie, de) {
                    if (q(ie) !== "object" || ie === null) return ie;
                    var A = ie[Symbol.toPrimitive];
                    if (A !== void 0) {
                        var F = A.call(ie, "string");
                        if (q(F) !== "object") return F;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(ie)
                }(D.key), q(se) === "symbol" ? se : String(se)), D)
            }
            var se
        }

        function G(V, R) {
            return G = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(M, D) {
                return M.__proto__ = D, M
            }, G(V, R)
        }

        function J(V) {
            return J = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(R) {
                return R.__proto__ || Object.getPrototypeOf(R)
            }, J(V)
        }
        var he = function(V) {
            (function(A, F) {
                if (typeof F != "function" && F !== null) throw new TypeError("Super expression must either be null or a function");
                A.prototype = Object.create(F && F.prototype, {
                    constructor: {
                        value: A,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(A, "prototype", {
                    writable: !1
                }), F && G(A, F)
            })(de, V);
            var R, M, D, se, ie = (D = de, se = function() {
                if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch {
                    return !1
                }
            }(), function() {
                var A, F = J(D);
                if (se) {
                    var te = J(this).constructor;
                    A = Reflect.construct(F, arguments, te)
                } else A = F.apply(this, arguments);
                return function(Z, Y) {
                    if (Y && (q(Y) === "object" || typeof Y == "function")) return Y;
                    if (Y !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(ae) {
                        if (ae === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return ae
                    }(Z)
                }(this, A)
            });

            function de(A) {
                return function(F, te) {
                    if (!(F instanceof te)) throw new TypeError("Cannot call a class as a function")
                }(this, de), ie.call(this, A)
            }
            return R = de, (M = [{
                key: "render",
                value: function() {
                    return i().createElement(w, this.props)
                }
            }]) && re(R.prototype, M), Object.defineProperty(R, "prototype", {
                writable: !1
            }), de
        }(i().Component);
        const je = X(he);

        function fe(V) {
            return fe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(R) {
                return typeof R
            } : function(R) {
                return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R
            }, fe(V)
        }

        function ye(V, R) {
            for (var M = 0; M < R.length; M++) {
                var D = R[M];
                D.enumerable = D.enumerable || !1, D.configurable = !0, "value" in D && (D.writable = !0), Object.defineProperty(V, (se = function(ie, de) {
                    if (fe(ie) !== "object" || ie === null) return ie;
                    var A = ie[Symbol.toPrimitive];
                    if (A !== void 0) {
                        var F = A.call(ie, "string");
                        if (fe(F) !== "object") return F;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(ie)
                }(D.key), fe(se) === "symbol" ? se : String(se)), D)
            }
            var se
        }

        function Be(V, R) {
            return Be = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(M, D) {
                return M.__proto__ = D, M
            }, Be(V, R)
        }

        function me(V) {
            if (V === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return V
        }

        function Ie(V) {
            return Ie = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(R) {
                return R.__proto__ || Object.getPrototypeOf(R)
            }, Ie(V)
        }
        var oe = function(V) {
            (function(A, F) {
                if (typeof F != "function" && F !== null) throw new TypeError("Super expression must either be null or a function");
                A.prototype = Object.create(F && F.prototype, {
                    constructor: {
                        value: A,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(A, "prototype", {
                    writable: !1
                }), F && Be(A, F)
            })(de, V);
            var R, M, D, se, ie = (D = de, se = function() {
                if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch {
                    return !1
                }
            }(), function() {
                var A, F = Ie(D);
                if (se) {
                    var te = Ie(this).constructor;
                    A = Reflect.construct(F, arguments, te)
                } else A = F.apply(this, arguments);
                return function(Z, Y) {
                    if (Y && (fe(Y) === "object" || typeof Y == "function")) return Y;
                    if (Y !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                    return me(Z)
                }(this, A)
            });

            function de(A) {
                var F;
                (function(_e, $e) {
                    if (!(_e instanceof $e)) throw new TypeError("Cannot call a class as a function")
                })(this, de), F = ie.call(this, A);
                var te = A.afterLoad,
                    Z = A.beforeLoad,
                    Y = A.scrollPosition,
                    ae = A.visibleByDefault;
                return F.state = {
                    visible: ae
                }, ae && (Z(), te()), F.onVisible = F.onVisible.bind(me(F)), F.isScrollTracked = !!(Y && Number.isFinite(Y.x) && Y.x >= 0 && Number.isFinite(Y.y) && Y.y >= 0), F
            }
            return R = de, (M = [{
                key: "componentDidUpdate",
                value: function(A, F) {
                    F.visible !== this.state.visible && this.props.afterLoad()
                }
            }, {
                key: "onVisible",
                value: function() {
                    this.props.beforeLoad(), this.setState({
                        visible: !0
                    })
                }
            }, {
                key: "render",
                value: function() {
                    if (this.state.visible) return this.props.children;
                    var A = this.props,
                        F = A.className,
                        te = A.delayMethod,
                        Z = A.delayTime,
                        Y = A.height,
                        ae = A.placeholder,
                        _e = A.scrollPosition,
                        $e = A.style,
                        Te = A.threshold,
                        Ze = A.useIntersectionObserver,
                        Ve = A.width;
                    return this.isScrollTracked || Ze && u() ? i().createElement(w, {
                        className: F,
                        height: Y,
                        onVisible: this.onVisible,
                        placeholder: ae,
                        scrollPosition: _e,
                        style: $e,
                        threshold: Te,
                        useIntersectionObserver: Ze,
                        width: Ve
                    }) : i().createElement(je, {
                        className: F,
                        delayMethod: te,
                        delayTime: Z,
                        height: Y,
                        onVisible: this.onVisible,
                        placeholder: ae,
                        style: $e,
                        threshold: Te,
                        width: Ve
                    })
                }
            }]) && ye(R.prototype, M), Object.defineProperty(R, "prototype", {
                writable: !1
            }), de
        }(i().Component);
        oe.propTypes = {
            afterLoad: s.PropTypes.func,
            beforeLoad: s.PropTypes.func,
            useIntersectionObserver: s.PropTypes.bool,
            visibleByDefault: s.PropTypes.bool
        }, oe.defaultProps = {
            afterLoad: function() {
                return {}
            },
            beforeLoad: function() {
                return {}
            },
            useIntersectionObserver: !0,
            visibleByDefault: !1
        };
        const Se = oe;

        function ve(V) {
            return ve = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(R) {
                return typeof R
            } : function(R) {
                return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R
            }, ve(V)
        }
        var Wt = ["afterLoad", "beforeLoad", "delayMethod", "delayTime", "effect", "placeholder", "placeholderSrc", "scrollPosition", "threshold", "useIntersectionObserver", "visibleByDefault", "wrapperClassName", "wrapperProps"];

        function gt(V, R) {
            var M = Object.keys(V);
            if (Object.getOwnPropertySymbols) {
                var D = Object.getOwnPropertySymbols(V);
                R && (D = D.filter(function(se) {
                    return Object.getOwnPropertyDescriptor(V, se).enumerable
                })), M.push.apply(M, D)
            }
            return M
        }

        function rt(V) {
            for (var R = 1; R < arguments.length; R++) {
                var M = arguments[R] != null ? arguments[R] : {};
                R % 2 ? gt(Object(M), !0).forEach(function(D) {
                    En(V, D, M[D])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(V, Object.getOwnPropertyDescriptors(M)) : gt(Object(M)).forEach(function(D) {
                    Object.defineProperty(V, D, Object.getOwnPropertyDescriptor(M, D))
                })
            }
            return V
        }

        function En(V, R, M) {
            return (R = Pt(R)) in V ? Object.defineProperty(V, R, {
                value: M,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : V[R] = M, V
        }

        function Ue() {
            return Ue = Object.assign ? Object.assign.bind() : function(V) {
                for (var R = 1; R < arguments.length; R++) {
                    var M = arguments[R];
                    for (var D in M) Object.prototype.hasOwnProperty.call(M, D) && (V[D] = M[D])
                }
                return V
            }, Ue.apply(this, arguments)
        }

        function kt(V, R) {
            for (var M = 0; M < R.length; M++) {
                var D = R[M];
                D.enumerable = D.enumerable || !1, D.configurable = !0, "value" in D && (D.writable = !0), Object.defineProperty(V, Pt(D.key), D)
            }
        }

        function Pt(V) {
            var R = function(M, D) {
                if (ve(M) !== "object" || M === null) return M;
                var se = M[Symbol.toPrimitive];
                if (se !== void 0) {
                    var ie = se.call(M, "string");
                    if (ve(ie) !== "object") return ie;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(M)
            }(V);
            return ve(R) === "symbol" ? R : String(R)
        }

        function Ot(V, R) {
            return Ot = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(M, D) {
                return M.__proto__ = D, M
            }, Ot(V, R)
        }

        function Ee(V) {
            return Ee = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(R) {
                return R.__proto__ || Object.getPrototypeOf(R)
            }, Ee(V)
        }
        var ft = function(V) {
            (function(A, F) {
                if (typeof F != "function" && F !== null) throw new TypeError("Super expression must either be null or a function");
                A.prototype = Object.create(F && F.prototype, {
                    constructor: {
                        value: A,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(A, "prototype", {
                    writable: !1
                }), F && Ot(A, F)
            })(de, V);
            var R, M, D, se, ie = (D = de, se = function() {
                if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch {
                    return !1
                }
            }(), function() {
                var A, F = Ee(D);
                if (se) {
                    var te = Ee(this).constructor;
                    A = Reflect.construct(F, arguments, te)
                } else A = F.apply(this, arguments);
                return function(Z, Y) {
                    if (Y && (ve(Y) === "object" || typeof Y == "function")) return Y;
                    if (Y !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(ae) {
                        if (ae === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return ae
                    }(Z)
                }(this, A)
            });

            function de(A) {
                var F;
                return function(te, Z) {
                    if (!(te instanceof Z)) throw new TypeError("Cannot call a class as a function")
                }(this, de), (F = ie.call(this, A)).state = {
                    loaded: !1
                }, F
            }
            return R = de, (M = [{
                key: "onImageLoad",
                value: function() {
                    var A = this;
                    return this.state.loaded ? null : function(F) {
                        A.props.onLoad(F), A.props.afterLoad(), A.setState({
                            loaded: !0
                        })
                    }
                }
            }, {
                key: "getImg",
                value: function() {
                    var A = this.props,
                        F = (A.afterLoad, A.beforeLoad, A.delayMethod, A.delayTime, A.effect, A.placeholder, A.placeholderSrc, A.scrollPosition, A.threshold, A.useIntersectionObserver, A.visibleByDefault, A.wrapperClassName, A.wrapperProps, function(te, Z) {
                            if (te == null) return {};
                            var Y, ae, _e = function(Te, Ze) {
                                if (Te == null) return {};
                                var Ve, ot, qn = {},
                                    Mn = Object.keys(Te);
                                for (ot = 0; ot < Mn.length; ot++) Ve = Mn[ot], Ze.indexOf(Ve) >= 0 || (qn[Ve] = Te[Ve]);
                                return qn
                            }(te, Z);
                            if (Object.getOwnPropertySymbols) {
                                var $e = Object.getOwnPropertySymbols(te);
                                for (ae = 0; ae < $e.length; ae++) Y = $e[ae], Z.indexOf(Y) >= 0 || Object.prototype.propertyIsEnumerable.call(te, Y) && (_e[Y] = te[Y])
                            }
                            return _e
                        }(A, Wt));
                    return i().createElement("img", Ue({}, F, {
                        onLoad: this.onImageLoad()
                    }))
                }
            }, {
                key: "getLazyLoadImage",
                value: function() {
                    var A = this.props,
                        F = A.beforeLoad,
                        te = A.className,
                        Z = A.delayMethod,
                        Y = A.delayTime,
                        ae = A.height,
                        _e = A.placeholder,
                        $e = A.scrollPosition,
                        Te = A.style,
                        Ze = A.threshold,
                        Ve = A.useIntersectionObserver,
                        ot = A.visibleByDefault,
                        qn = A.width;
                    return i().createElement(Se, {
                        beforeLoad: F,
                        className: te,
                        delayMethod: Z,
                        delayTime: Y,
                        height: ae,
                        placeholder: _e,
                        scrollPosition: $e,
                        style: Te,
                        threshold: Ze,
                        useIntersectionObserver: Ve,
                        visibleByDefault: ot,
                        width: qn
                    }, this.getImg())
                }
            }, {
                key: "getWrappedLazyLoadImage",
                value: function(A) {
                    var F = this.props,
                        te = F.effect,
                        Z = F.height,
                        Y = F.placeholderSrc,
                        ae = F.width,
                        _e = F.wrapperClassName,
                        $e = F.wrapperProps,
                        Te = this.state.loaded,
                        Ze = Te ? " lazy-load-image-loaded" : "",
                        Ve = Te || !Y ? {} : {
                            backgroundImage: "url(".concat(Y, ")"),
                            backgroundSize: "100% 100%"
                        };
                    return i().createElement("span", Ue({
                        className: _e + " lazy-load-image-background " + te + Ze,
                        style: rt(rt({}, Ve), {}, {
                            color: "transparent",
                            display: "inline-block",
                            height: Z,
                            width: ae
                        })
                    }, $e), A)
                }
            }, {
                key: "render",
                value: function() {
                    var A = this.props,
                        F = A.effect,
                        te = A.placeholderSrc,
                        Z = A.visibleByDefault,
                        Y = A.wrapperClassName,
                        ae = A.wrapperProps,
                        _e = this.getLazyLoadImage();
                    return (F || te) && !Z || Y || ae ? this.getWrappedLazyLoadImage(_e) : _e
                }
            }]) && kt(R.prototype, M), Object.defineProperty(R, "prototype", {
                writable: !1
            }), de
        }(i().Component);
        ft.propTypes = {
            onLoad: s.PropTypes.func,
            afterLoad: s.PropTypes.func,
            beforeLoad: s.PropTypes.func,
            delayMethod: s.PropTypes.string,
            delayTime: s.PropTypes.number,
            effect: s.PropTypes.string,
            placeholderSrc: s.PropTypes.string,
            threshold: s.PropTypes.number,
            useIntersectionObserver: s.PropTypes.bool,
            visibleByDefault: s.PropTypes.bool,
            wrapperClassName: s.PropTypes.string,
            wrapperProps: s.PropTypes.object
        }, ft.defaultProps = {
            onLoad: function() {},
            afterLoad: function() {
                return {}
            },
            beforeLoad: function() {
                return {}
            },
            delayMethod: "throttle",
            delayTime: 300,
            effect: "",
            placeholderSrc: null,
            threshold: 100,
            useIntersectionObserver: !0,
            visibleByDefault: !1,
            wrapperClassName: ""
        };
        const Mt = ft
    })(), B0.exports = r
})();
var uu = B0.exports;
const nE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAAD6AQMAAAAx5vFFAAAABlBMVEUGDBIHDBNhmjCQAAAAAXRSTlN/gFy0ywAAACtJREFUWMPtyTENAAAMAjD8m95+Ehy0b3NLlFJKKaWUUkoppZRSSimllKp6pplS/9qyCfkAAAAASUVORK5CYII=",
    cu = e => {
        const t = e.target;
        t.onerror = null, t.src = nE
    },
    rE = ({
        id: e,
        title: t,
        image: n,
        genres: r,
        episodeNumber: o,
        releaseDate: i
    }) => {
        const {
            isCheckedTheme: s
        } = vt(), l = Ht(), [a, u] = E.useState(!1);
        return x.jsx("div", {
            className: `w-full max-w-[17rem] sm:max-w-none mx-auto sm:mx-0 cursor-pointer hover:${s?"opacity-80":"opacity-95"}`,
            onClick: () => l(`/Anime/${e}`),
            children: x.jsxs("div", {
                children: [x.jsx(uu.LazyLoadImage, {
                    onLoad: () => u(!0),
                    wrapperClassName: a ? "" : "blur-up",
                    className: `rounded-2xl w-full h-[20rem] 1220size:h-[17rem] 2xl:h-[20rem] object-cover ${!s&&"custom-shadow-button"}`,
                    alt: "Anime Image",
                    src: n,
                    onError: cu
                }), x.jsx("p", {
                    className: `text-base font-semibold mt-2 custom-transition-duration text-center
                sm:text-left ${s?"text-white":"text-custom-dark-1"}`,
                    children: t
                }), x.jsx("div", {
                    className: "mt-1 flex gap-x-2 flex-wrap justify-center sm:justify-start text-custom-gray-1",
                    children: r ? r.map((c, f) => f < 3 && x.jsxs("p", {
                        className: "text-sm",
                        children: ["• ", c]
                    }, f)) : o ? x.jsxs("p", {
                        className: "text-sm",
                        children: ["• ", o, " ", o === 1 ? "episode" : "episodes"]
                    }) : i && x.jsxs("p", {
                        className: "text-sm",
                        children: ["• ", i]
                    })
                })]
            })
        })
    };

function U0(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {
    toString: oE
} = Object.prototype, {
    getPrototypeOf: gp
} = Object, fu = (e => t => {
    const n = oE.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
})(Object.create(null)), Kn = e => (e = e.toLowerCase(), t => fu(t) === e), du = e => t => typeof t === e, {
    isArray: vi
} = Array, _s = du("undefined");

function iE(e) {
    return e !== null && !_s(e) && e.constructor !== null && !_s(e.constructor) && pn(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const V0 = Kn("ArrayBuffer");

function sE(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && V0(e.buffer), t
}
const lE = du("string"),
    pn = du("function"),
    D0 = du("number"),
    pu = e => e !== null && typeof e == "object",
    aE = e => e === !0 || e === !1,
    Ul = e => {
        if (fu(e) !== "object") return !1;
        const t = gp(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    },
    uE = Kn("Date"),
    cE = Kn("File"),
    fE = Kn("Blob"),
    dE = Kn("FileList"),
    pE = e => pu(e) && pn(e.pipe),
    hE = e => {
        let t;
        return e && (typeof FormData == "function" && e instanceof FormData || pn(e.append) && ((t = fu(e)) === "formdata" || t === "object" && pn(e.toString) && e.toString() === "[object FormData]"))
    },
    mE = Kn("URLSearchParams"),
    vE = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function Qs(e, t, {
    allOwnKeys: n = !1
} = {}) {
    if (e === null || typeof e > "u") return;
    let r, o;
    if (typeof e != "object" && (e = [e]), vi(e))
        for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
    else {
        const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            s = i.length;
        let l;
        for (r = 0; r < s; r++) l = i[r], t.call(null, e[l], l, e)
    }
}

function H0(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length,
        o;
    for (; r-- > 0;)
        if (o = n[r], t === o.toLowerCase()) return o;
    return null
}
const W0 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
    Q0 = e => !_s(e) && e !== W0;

function Qf() {
    const {
        caseless: e
    } = Q0(this) && this || {}, t = {}, n = (r, o) => {
        const i = e && H0(t, o) || o;
        Ul(t[i]) && Ul(r) ? t[i] = Qf(t[i], r) : Ul(r) ? t[i] = Qf({}, r) : vi(r) ? t[i] = r.slice() : t[i] = r
    };
    for (let r = 0, o = arguments.length; r < o; r++) arguments[r] && Qs(arguments[r], n);
    return t
}
const gE = (e, t, n, {
        allOwnKeys: r
    } = {}) => (Qs(t, (o, i) => {
        n && pn(o) ? e[i] = U0(o, n) : e[i] = o
    }, {
        allOwnKeys: r
    }), e),
    yE = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    xE = (e, t, n, r) => {
        e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
            value: t.prototype
        }), n && Object.assign(e.prototype, n)
    },
    bE = (e, t, n, r) => {
        let o, i, s;
        const l = {};
        if (t = t || {}, e == null) return t;
        do {
            for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0;) s = o[i], (!r || r(s, e, t)) && !l[s] && (t[s] = e[s], l[s] = !0);
            e = n !== !1 && gp(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t
    },
    wE = (e, t, n) => {
        e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
        const r = e.indexOf(t, n);
        return r !== -1 && r === n
    },
    SE = e => {
        if (!e) return null;
        if (vi(e)) return e;
        let t = e.length;
        if (!D0(t)) return null;
        const n = new Array(t);
        for (; t-- > 0;) n[t] = e[t];
        return n
    },
    EE = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && gp(Uint8Array)),
    CE = (e, t) => {
        const r = (e && e[Symbol.iterator]).call(e);
        let o;
        for (;
            (o = r.next()) && !o.done;) {
            const i = o.value;
            t.call(e, i[0], i[1])
        }
    },
    kE = (e, t) => {
        let n;
        const r = [];
        for (;
            (n = e.exec(t)) !== null;) r.push(n);
        return r
    },
    PE = Kn("HTMLFormElement"),
    OE = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
        return r.toUpperCase() + o
    }),
    zm = (({
        hasOwnProperty: e
    }) => (t, n) => e.call(t, n))(Object.prototype),
    TE = Kn("RegExp"),
    K0 = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            r = {};
        Qs(n, (o, i) => {
            let s;
            (s = t(o, i, e)) !== !1 && (r[i] = s || o)
        }), Object.defineProperties(e, r)
    },
    RE = e => {
        K0(e, (t, n) => {
            if (pn(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
            const r = e[n];
            if (pn(r)) {
                if (t.enumerable = !1, "writable" in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + n + "'")
                })
            }
        })
    },
    jE = (e, t) => {
        const n = {},
            r = o => {
                o.forEach(i => {
                    n[i] = !0
                })
            };
        return vi(e) ? r(e) : r(String(e).split(t)), n
    },
    NE = () => {},
    _E = (e, t) => (e = +e, Number.isFinite(e) ? e : t),
    Rc = "abcdefghijklmnopqrstuvwxyz",
    Bm = "0123456789",
    q0 = {
        DIGIT: Bm,
        ALPHA: Rc,
        ALPHA_DIGIT: Rc + Rc.toUpperCase() + Bm
    },
    $E = (e = 16, t = q0.ALPHA_DIGIT) => {
        let n = "";
        const {
            length: r
        } = t;
        for (; e--;) n += t[Math.random() * r | 0];
        return n
    };

function ME(e) {
    return !!(e && pn(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const AE = e => {
        const t = new Array(10),
            n = (r, o) => {
                if (pu(r)) {
                    if (t.indexOf(r) >= 0) return;
                    if (!("toJSON" in r)) {
                        t[o] = r;
                        const i = vi(r) ? [] : {};
                        return Qs(r, (s, l) => {
                            const a = n(s, o + 1);
                            !_s(a) && (i[l] = a)
                        }), t[o] = void 0, i
                    }
                }
                return r
            };
        return n(e, 0)
    },
    LE = Kn("AsyncFunction"),
    IE = e => e && (pu(e) || pn(e)) && pn(e.then) && pn(e.catch),
    z = {
        isArray: vi,
        isArrayBuffer: V0,
        isBuffer: iE,
        isFormData: hE,
        isArrayBufferView: sE,
        isString: lE,
        isNumber: D0,
        isBoolean: aE,
        isObject: pu,
        isPlainObject: Ul,
        isUndefined: _s,
        isDate: uE,
        isFile: cE,
        isBlob: fE,
        isRegExp: TE,
        isFunction: pn,
        isStream: pE,
        isURLSearchParams: mE,
        isTypedArray: EE,
        isFileList: dE,
        forEach: Qs,
        merge: Qf,
        extend: gE,
        trim: vE,
        stripBOM: yE,
        inherits: xE,
        toFlatObject: bE,
        kindOf: fu,
        kindOfTest: Kn,
        endsWith: wE,
        toArray: SE,
        forEachEntry: CE,
        matchAll: kE,
        isHTMLForm: PE,
        hasOwnProperty: zm,
        hasOwnProp: zm,
        reduceDescriptors: K0,
        freezeMethods: RE,
        toObjectSet: jE,
        toCamelCase: OE,
        noop: NE,
        toFiniteNumber: _E,
        findKey: H0,
        global: W0,
        isContextDefined: Q0,
        ALPHABET: q0,
        generateString: $E,
        isSpecCompliantForm: ME,
        toJSONObject: AE,
        isAsyncFn: LE,
        isThenable: IE
    };

function pe(e, t, n, r, o) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o)
}
z.inherits(pe, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: z.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const G0 = pe.prototype,
    X0 = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    X0[e] = {
        value: e
    }
});
Object.defineProperties(pe, X0);
Object.defineProperty(G0, "isAxiosError", {
    value: !0
});
pe.from = (e, t, n, r, o, i) => {
    const s = Object.create(G0);
    return z.toFlatObject(e, s, function(a) {
        return a !== Error.prototype
    }, l => l !== "isAxiosError"), pe.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s
};
const FE = null;

function Kf(e) {
    return z.isPlainObject(e) || z.isArray(e)
}

function Y0(e) {
    return z.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function Um(e, t, n) {
    return e ? e.concat(t).map(function(o, i) {
        return o = Y0(o), !n && i ? "[" + o + "]" : o
    }).join(n ? "." : "") : t
}

function zE(e) {
    return z.isArray(e) && !e.some(Kf)
}
const BE = z.toFlatObject(z, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});

function hu(e, t, n) {
    if (!z.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData, n = z.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(d, b) {
        return !z.isUndefined(b[d])
    });
    const r = n.metaTokens,
        o = n.visitor || c,
        i = n.dots,
        s = n.indexes,
        a = (n.Blob || typeof Blob < "u" && Blob) && z.isSpecCompliantForm(t);
    if (!z.isFunction(o)) throw new TypeError("visitor must be a function");

    function u(v) {
        if (v === null) return "";
        if (z.isDate(v)) return v.toISOString();
        if (!a && z.isBlob(v)) throw new pe("Blob is not supported. Use a Buffer instead.");
        return z.isArrayBuffer(v) || z.isTypedArray(v) ? a && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v
    }

    function c(v, d, b) {
        let m = v;
        if (v && !b && typeof v == "object") {
            if (z.endsWith(d, "{}")) d = r ? d : d.slice(0, -2), v = JSON.stringify(v);
            else if (z.isArray(v) && zE(v) || (z.isFileList(v) || z.endsWith(d, "[]")) && (m = z.toArray(v))) return d = Y0(d), m.forEach(function(g, w) {
                !(z.isUndefined(g) || g === null) && t.append(s === !0 ? Um([d], w, i) : s === null ? d : d + "[]", u(g))
            }), !1
        }
        return Kf(v) ? !0 : (t.append(Um(b, d, i), u(v)), !1)
    }
    const f = [],
        h = Object.assign(BE, {
            defaultVisitor: c,
            convertValue: u,
            isVisitable: Kf
        });

    function y(v, d) {
        if (!z.isUndefined(v)) {
            if (f.indexOf(v) !== -1) throw Error("Circular reference detected in " + d.join("."));
            f.push(v), z.forEach(v, function(m, p) {
                (!(z.isUndefined(m) || m === null) && o.call(t, m, z.isString(p) ? p.trim() : p, d, h)) === !0 && y(m, d ? d.concat(p) : [p])
            }), f.pop()
        }
    }
    if (!z.isObject(e)) throw new TypeError("data must be an object");
    return y(e), t
}

function Vm(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}

function yp(e, t) {
    this._pairs = [], e && hu(e, this, t)
}
const J0 = yp.prototype;
J0.append = function(t, n) {
    this._pairs.push([t, n])
};
J0.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, Vm)
    } : Vm;
    return this._pairs.map(function(o) {
        return n(o[0]) + "=" + n(o[1])
    }, "").join("&")
};

function UE(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function Z0(e, t, n) {
    if (!t) return e;
    const r = n && n.encode || UE,
        o = n && n.serialize;
    let i;
    if (o ? i = o(t, n) : i = z.isURLSearchParams(t) ? t.toString() : new yp(t, n).toString(r), i) {
        const s = e.indexOf("#");
        s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i
    }
    return e
}
class VE {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }), this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        z.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const Dm = VE,
    e1 = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    DE = typeof URLSearchParams < "u" ? URLSearchParams : yp,
    HE = typeof FormData < "u" ? FormData : null,
    WE = typeof Blob < "u" ? Blob : null,
    QE = {
        isBrowser: !0,
        classes: {
            URLSearchParams: DE,
            FormData: HE,
            Blob: WE
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    t1 = typeof window < "u" && typeof document < "u",
    KE = (e => t1 && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product),
    qE = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
    GE = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: t1,
        hasStandardBrowserEnv: KE,
        hasStandardBrowserWebWorkerEnv: qE
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Un = {
        ...GE,
        ...QE
    };

function XE(e, t) {
    return hu(e, new Un.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, o, i) {
            return Un.isNode && z.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments)
        }
    }, t))
}

function YE(e) {
    return z.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function JE(e) {
    const t = {},
        n = Object.keys(e);
    let r;
    const o = n.length;
    let i;
    for (r = 0; r < o; r++) i = n[r], t[i] = e[i];
    return t
}

function n1(e) {
    function t(n, r, o, i) {
        let s = n[i++];
        const l = Number.isFinite(+s),
            a = i >= n.length;
        return s = !s && z.isArray(o) ? o.length : s, a ? (z.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !l) : ((!o[s] || !z.isObject(o[s])) && (o[s] = []), t(n, r, o[s], i) && z.isArray(o[s]) && (o[s] = JE(o[s])), !l)
    }
    if (z.isFormData(e) && z.isFunction(e.entries)) {
        const n = {};
        return z.forEachEntry(e, (r, o) => {
            t(YE(r), o, n, 0)
        }), n
    }
    return null
}

function ZE(e, t, n) {
    if (z.isString(e)) try {
        return (t || JSON.parse)(e), z.trim(e)
    } catch (r) {
        if (r.name !== "SyntaxError") throw r
    }
    return (n || JSON.stringify)(e)
}
const xp = {
    transitional: e1,
    adapter: ["xhr", "http"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || "",
            o = r.indexOf("application/json") > -1,
            i = z.isObject(t);
        if (i && z.isHTMLForm(t) && (t = new FormData(t)), z.isFormData(t)) return o && o ? JSON.stringify(n1(t)) : t;
        if (z.isArrayBuffer(t) || z.isBuffer(t) || z.isStream(t) || z.isFile(t) || z.isBlob(t)) return t;
        if (z.isArrayBufferView(t)) return t.buffer;
        if (z.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
        let l;
        if (i) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1) return XE(t, this.formSerializer).toString();
            if ((l = z.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const a = this.env && this.env.FormData;
                return hu(l ? {
                    "files[]": t
                } : t, a && new a, this.formSerializer)
            }
        }
        return i || o ? (n.setContentType("application/json", !1), ZE(t)) : t
    }],
    transformResponse: [function(t) {
        const n = this.transitional || xp.transitional,
            r = n && n.forcedJSONParsing,
            o = this.responseType === "json";
        if (t && z.isString(t) && (r && !this.responseType || o)) {
            const s = !(n && n.silentJSONParsing) && o;
            try {
                return JSON.parse(t)
            } catch (l) {
                if (s) throw l.name === "SyntaxError" ? pe.from(l, pe.ERR_BAD_RESPONSE, this, null, this.response) : l
            }
        }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Un.classes.FormData,
        Blob: Un.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
z.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    xp.headers[e] = {}
});
const bp = xp,
    eC = z.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    tC = e => {
        const t = {};
        let n, r, o;
        return e && e.split(`
`).forEach(function(s) {
            o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && eC[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
        }), t
    },
    Hm = Symbol("internals");

function _i(e) {
    return e && String(e).trim().toLowerCase()
}

function Vl(e) {
    return e === !1 || e == null ? e : z.isArray(e) ? e.map(Vl) : String(e)
}

function nC(e) {
    const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e);) t[r[1]] = r[2];
    return t
}
const rC = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function jc(e, t, n, r, o) {
    if (z.isFunction(r)) return r.call(this, t, n);
    if (o && (t = n), !!z.isString(t)) {
        if (z.isString(r)) return t.indexOf(r) !== -1;
        if (z.isRegExp(r)) return r.test(t)
    }
}

function oC(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}

function iC(e, t) {
    const n = z.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(o, i, s) {
                return this[r].call(this, t, o, i, s)
            },
            configurable: !0
        })
    })
}
class mu {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const o = this;

        function i(l, a, u) {
            const c = _i(a);
            if (!c) throw new Error("header name must be a non-empty string");
            const f = z.findKey(o, c);
            (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (o[f || a] = Vl(l))
        }
        const s = (l, a) => z.forEach(l, (u, c) => i(u, c, a));
        return z.isPlainObject(t) || t instanceof this.constructor ? s(t, n) : z.isString(t) && (t = t.trim()) && !rC(t) ? s(tC(t), n) : t != null && i(n, t, r), this
    }
    get(t, n) {
        if (t = _i(t), t) {
            const r = z.findKey(this, t);
            if (r) {
                const o = this[r];
                if (!n) return o;
                if (n === !0) return nC(o);
                if (z.isFunction(n)) return n.call(this, o, r);
                if (z.isRegExp(n)) return n.exec(o);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = _i(t), t) {
            const r = z.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || jc(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let o = !1;

        function i(s) {
            if (s = _i(s), s) {
                const l = z.findKey(r, s);
                l && (!n || jc(r, r[l], l, n)) && (delete r[l], o = !0)
            }
        }
        return z.isArray(t) ? t.forEach(i) : i(t), o
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length,
            o = !1;
        for (; r--;) {
            const i = n[r];
            (!t || jc(this, this[i], i, t, !0)) && (delete this[i], o = !0)
        }
        return o
    }
    normalize(t) {
        const n = this,
            r = {};
        return z.forEach(this, (o, i) => {
            const s = z.findKey(r, i);
            if (s) {
                n[s] = Vl(o), delete n[i];
                return
            }
            const l = t ? oC(i) : String(i).trim();
            l !== i && delete n[i], n[l] = Vl(o), r[l] = !0
        }), this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return z.forEach(this, (r, o) => {
            r != null && r !== !1 && (n[o] = t && z.isArray(r) ? r.join(", ") : r)
        }), n
    } [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(o => r.set(o)), r
    }
    static accessor(t) {
        const r = (this[Hm] = this[Hm] = {
                accessors: {}
            }).accessors,
            o = this.prototype;

        function i(s) {
            const l = _i(s);
            r[l] || (iC(o, s), r[l] = !0)
        }
        return z.isArray(t) ? t.forEach(i) : i(t), this
    }
}
mu.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
z.reduceDescriptors(mu.prototype, ({
    value: e
}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
});
z.freezeMethods(mu);
const nr = mu;

function Nc(e, t) {
    const n = this || bp,
        r = t || n,
        o = nr.from(r.headers);
    let i = r.data;
    return z.forEach(e, function(l) {
        i = l.call(n, i, o.normalize(), t ? t.status : void 0)
    }), o.normalize(), i
}

function r1(e) {
    return !!(e && e.__CANCEL__)
}

function Ks(e, t, n) {
    pe.call(this, e ?? "canceled", pe.ERR_CANCELED, t, n), this.name = "CanceledError"
}
z.inherits(Ks, pe, {
    __CANCEL__: !0
});

function sC(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new pe("Request failed with status code " + n.status, [pe.ERR_BAD_REQUEST, pe.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}
const lC = Un.hasStandardBrowserEnv ? {
    write(e, t, n, r, o, i) {
        const s = [e + "=" + encodeURIComponent(t)];
        z.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), z.isString(r) && s.push("path=" + r), z.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};

function aC(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function uC(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
}

function o1(e, t) {
    return e && !aC(t) ? uC(e, t) : t
}
const cC = Un.hasStandardBrowserEnv ? function() {
    const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
    let r;

    function o(i) {
        let s = i;
        return t && (n.setAttribute("href", s), s = n.href), n.setAttribute("href", s), {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return r = o(window.location.href),
        function(s) {
            const l = z.isString(s) ? o(s) : s;
            return l.protocol === r.protocol && l.host === r.host
        }
}() : function() {
    return function() {
        return !0
    }
}();

function fC(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}

function dC(e, t) {
    e = e || 10;
    const n = new Array(e),
        r = new Array(e);
    let o = 0,
        i = 0,
        s;
    return t = t !== void 0 ? t : 1e3,
        function(a) {
            const u = Date.now(),
                c = r[i];
            s || (s = u), n[o] = a, r[o] = u;
            let f = i,
                h = 0;
            for (; f !== o;) h += n[f++], f = f % e;
            if (o = (o + 1) % e, o === i && (i = (i + 1) % e), u - s < t) return;
            const y = c && u - c;
            return y ? Math.round(h * 1e3 / y) : void 0
        }
}

function Wm(e, t) {
    let n = 0;
    const r = dC(50, 250);
    return o => {
        const i = o.loaded,
            s = o.lengthComputable ? o.total : void 0,
            l = i - n,
            a = r(l),
            u = i <= s;
        n = i;
        const c = {
            loaded: i,
            total: s,
            progress: s ? i / s : void 0,
            bytes: l,
            rate: a || void 0,
            estimated: a && s && u ? (s - i) / a : void 0,
            event: o
        };
        c[t ? "download" : "upload"] = !0, e(c)
    }
}
const pC = typeof XMLHttpRequest < "u",
    hC = pC && function(e) {
        return new Promise(function(n, r) {
            let o = e.data;
            const i = nr.from(e.headers).normalize();
            let {
                responseType: s,
                withXSRFToken: l
            } = e, a;

            function u() {
                e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a)
            }
            let c;
            if (z.isFormData(o)) {
                if (Un.hasStandardBrowserEnv || Un.hasStandardBrowserWebWorkerEnv) i.setContentType(!1);
                else if ((c = i.getContentType()) !== !1) {
                    const [d, ...b] = c ? c.split(";").map(m => m.trim()).filter(Boolean) : [];
                    i.setContentType([d || "multipart/form-data", ...b].join("; "))
                }
            }
            let f = new XMLHttpRequest;
            if (e.auth) {
                const d = e.auth.username || "",
                    b = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                i.set("Authorization", "Basic " + btoa(d + ":" + b))
            }
            const h = o1(e.baseURL, e.url);
            f.open(e.method.toUpperCase(), Z0(h, e.params, e.paramsSerializer), !0), f.timeout = e.timeout;

            function y() {
                if (!f) return;
                const d = nr.from("getAllResponseHeaders" in f && f.getAllResponseHeaders()),
                    m = {
                        data: !s || s === "text" || s === "json" ? f.responseText : f.response,
                        status: f.status,
                        statusText: f.statusText,
                        headers: d,
                        config: e,
                        request: f
                    };
                sC(function(g) {
                    n(g), u()
                }, function(g) {
                    r(g), u()
                }, m), f = null
            }
            if ("onloadend" in f ? f.onloadend = y : f.onreadystatechange = function() {
                    !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(y)
                }, f.onabort = function() {
                    f && (r(new pe("Request aborted", pe.ECONNABORTED, e, f)), f = null)
                }, f.onerror = function() {
                    r(new pe("Network Error", pe.ERR_NETWORK, e, f)), f = null
                }, f.ontimeout = function() {
                    let b = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                    const m = e.transitional || e1;
                    e.timeoutErrorMessage && (b = e.timeoutErrorMessage), r(new pe(b, m.clarifyTimeoutError ? pe.ETIMEDOUT : pe.ECONNABORTED, e, f)), f = null
                }, Un.hasStandardBrowserEnv && (l && z.isFunction(l) && (l = l(e)), l || l !== !1 && cC(h))) {
                const d = e.xsrfHeaderName && e.xsrfCookieName && lC.read(e.xsrfCookieName);
                d && i.set(e.xsrfHeaderName, d)
            }
            o === void 0 && i.setContentType(null), "setRequestHeader" in f && z.forEach(i.toJSON(), function(b, m) {
                f.setRequestHeader(m, b)
            }), z.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials), s && s !== "json" && (f.responseType = e.responseType), typeof e.onDownloadProgress == "function" && f.addEventListener("progress", Wm(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && f.upload && f.upload.addEventListener("progress", Wm(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = d => {
                f && (r(!d || d.type ? new Ks(null, e, f) : d), f.abort(), f = null)
            }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
            const v = fC(h);
            if (v && Un.protocols.indexOf(v) === -1) {
                r(new pe("Unsupported protocol " + v + ":", pe.ERR_BAD_REQUEST, e));
                return
            }
            f.send(o || null)
        })
    },
    qf = {
        http: FE,
        xhr: hC
    };
z.forEach(qf, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
});
const Qm = e => `- ${e}`,
    mC = e => z.isFunction(e) || e === null || e === !1,
    i1 = {
        getAdapter: e => {
            e = z.isArray(e) ? e : [e];
            const {
                length: t
            } = e;
            let n, r;
            const o = {};
            for (let i = 0; i < t; i++) {
                n = e[i];
                let s;
                if (r = n, !mC(n) && (r = qf[(s = String(n)).toLowerCase()], r === void 0)) throw new pe(`Unknown adapter '${s}'`);
                if (r) break;
                o[s || "#" + i] = r
            }
            if (!r) {
                const i = Object.entries(o).map(([l, a]) => `adapter ${l} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build"));
                let s = t ? i.length > 1 ? `since :
` + i.map(Qm).join(`
`) : " " + Qm(i[0]) : "as no adapter specified";
                throw new pe("There is no suitable adapter to dispatch the request " + s, "ERR_NOT_SUPPORT")
            }
            return r
        },
        adapters: qf
    };

function _c(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Ks(null, e)
}

function Km(e) {
    return _c(e), e.headers = nr.from(e.headers), e.data = Nc.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), i1.getAdapter(e.adapter || bp.adapter)(e).then(function(r) {
        return _c(e), r.data = Nc.call(e, e.transformResponse, r), r.headers = nr.from(r.headers), r
    }, function(r) {
        return r1(r) || (_c(e), r && r.response && (r.response.data = Nc.call(e, e.transformResponse, r.response), r.response.headers = nr.from(r.response.headers))), Promise.reject(r)
    })
}
const qm = e => e instanceof nr ? e.toJSON() : e;

function oi(e, t) {
    t = t || {};
    const n = {};

    function r(u, c, f) {
        return z.isPlainObject(u) && z.isPlainObject(c) ? z.merge.call({
            caseless: f
        }, u, c) : z.isPlainObject(c) ? z.merge({}, c) : z.isArray(c) ? c.slice() : c
    }

    function o(u, c, f) {
        if (z.isUndefined(c)) {
            if (!z.isUndefined(u)) return r(void 0, u, f)
        } else return r(u, c, f)
    }

    function i(u, c) {
        if (!z.isUndefined(c)) return r(void 0, c)
    }

    function s(u, c) {
        if (z.isUndefined(c)) {
            if (!z.isUndefined(u)) return r(void 0, u)
        } else return r(void 0, c)
    }

    function l(u, c, f) {
        if (f in t) return r(u, c);
        if (f in e) return r(void 0, u)
    }
    const a = {
        url: i,
        method: i,
        data: i,
        baseURL: s,
        transformRequest: s,
        transformResponse: s,
        paramsSerializer: s,
        timeout: s,
        timeoutMessage: s,
        withCredentials: s,
        withXSRFToken: s,
        adapter: s,
        responseType: s,
        xsrfCookieName: s,
        xsrfHeaderName: s,
        onUploadProgress: s,
        onDownloadProgress: s,
        decompress: s,
        maxContentLength: s,
        maxBodyLength: s,
        beforeRedirect: s,
        transport: s,
        httpAgent: s,
        httpsAgent: s,
        cancelToken: s,
        socketPath: s,
        responseEncoding: s,
        validateStatus: l,
        headers: (u, c) => o(qm(u), qm(c), !0)
    };
    return z.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
        const f = a[c] || o,
            h = f(e[c], t[c], c);
        z.isUndefined(h) && f !== l || (n[c] = h)
    }), n
}
const s1 = "1.6.2",
    wp = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    wp[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
const Gm = {};
wp.transitional = function(t, n, r) {
    function o(i, s) {
        return "[Axios v" + s1 + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "")
    }
    return (i, s, l) => {
        if (t === !1) throw new pe(o(s, " has been removed" + (n ? " in " + n : "")), pe.ERR_DEPRECATED);
        return n && !Gm[s] && (Gm[s] = !0, console.warn(o(s, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(i, s, l) : !0
    }
};

function vC(e, t, n) {
    if (typeof e != "object") throw new pe("options must be an object", pe.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let o = r.length;
    for (; o-- > 0;) {
        const i = r[o],
            s = t[i];
        if (s) {
            const l = e[i],
                a = l === void 0 || s(l, i, e);
            if (a !== !0) throw new pe("option " + i + " must be " + a, pe.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0) throw new pe("Unknown option " + i, pe.ERR_BAD_OPTION)
    }
}
const Gf = {
        assertOptions: vC,
        validators: wp
    },
    pr = Gf.validators;
class Ra {
    constructor(t) {
        this.defaults = t, this.interceptors = {
            request: new Dm,
            response: new Dm
        }
    }
    request(t, n) {
        typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = oi(this.defaults, n);
        const {
            transitional: r,
            paramsSerializer: o,
            headers: i
        } = n;
        r !== void 0 && Gf.assertOptions(r, {
            silentJSONParsing: pr.transitional(pr.boolean),
            forcedJSONParsing: pr.transitional(pr.boolean),
            clarifyTimeoutError: pr.transitional(pr.boolean)
        }, !1), o != null && (z.isFunction(o) ? n.paramsSerializer = {
            serialize: o
        } : Gf.assertOptions(o, {
            encode: pr.function,
            serialize: pr.function
        }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let s = i && z.merge(i.common, i[n.method]);
        i && z.forEach(["delete", "get", "head", "post", "put", "patch", "common"], v => {
            delete i[v]
        }), n.headers = nr.concat(s, i);
        const l = [];
        let a = !0;
        this.interceptors.request.forEach(function(d) {
            typeof d.runWhen == "function" && d.runWhen(n) === !1 || (a = a && d.synchronous, l.unshift(d.fulfilled, d.rejected))
        });
        const u = [];
        this.interceptors.response.forEach(function(d) {
            u.push(d.fulfilled, d.rejected)
        });
        let c, f = 0,
            h;
        if (!a) {
            const v = [Km.bind(this), void 0];
            for (v.unshift.apply(v, l), v.push.apply(v, u), h = v.length, c = Promise.resolve(n); f < h;) c = c.then(v[f++], v[f++]);
            return c
        }
        h = l.length;
        let y = n;
        for (f = 0; f < h;) {
            const v = l[f++],
                d = l[f++];
            try {
                y = v(y)
            } catch (b) {
                d.call(this, b);
                break
            }
        }
        try {
            c = Km.call(this, y)
        } catch (v) {
            return Promise.reject(v)
        }
        for (f = 0, h = u.length; f < h;) c = c.then(u[f++], u[f++]);
        return c
    }
    getUri(t) {
        t = oi(this.defaults, t);
        const n = o1(t.baseURL, t.url);
        return Z0(n, t.params, t.paramsSerializer)
    }
}
z.forEach(["delete", "get", "head", "options"], function(t) {
    Ra.prototype[t] = function(n, r) {
        return this.request(oi(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
z.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(i, s, l) {
            return this.request(oi(l || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: i,
                data: s
            }))
        }
    }
    Ra.prototype[t] = n(), Ra.prototype[t + "Form"] = n(!0)
});
const Dl = Ra;
class Sp {
    constructor(t) {
        if (typeof t != "function") throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(i) {
            n = i
        });
        const r = this;
        this.promise.then(o => {
            if (!r._listeners) return;
            let i = r._listeners.length;
            for (; i-- > 0;) r._listeners[i](o);
            r._listeners = null
        }), this.promise.then = o => {
            let i;
            const s = new Promise(l => {
                r.subscribe(l), i = l
            }).then(o);
            return s.cancel = function() {
                r.unsubscribe(i)
            }, s
        }, t(function(i, s, l) {
            r.reason || (r.reason = new Ks(i, s, l), n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t;
        return {
            token: new Sp(function(o) {
                t = o
            }),
            cancel: t
        }
    }
}
const gC = Sp;

function yC(e) {
    return function(n) {
        return e.apply(null, n)
    }
}

function xC(e) {
    return z.isObject(e) && e.isAxiosError === !0
}
const Xf = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Xf).forEach(([e, t]) => {
    Xf[t] = e
});
const bC = Xf;

function l1(e) {
    const t = new Dl(e),
        n = U0(Dl.prototype.request, t);
    return z.extend(n, Dl.prototype, t, {
        allOwnKeys: !0
    }), z.extend(n, t, null, {
        allOwnKeys: !0
    }), n.create = function(o) {
        return l1(oi(e, o))
    }, n
}
const nt = l1(bp);
nt.Axios = Dl;
nt.CanceledError = Ks;
nt.CancelToken = gC;
nt.isCancel = r1;
nt.VERSION = s1;
nt.toFormData = hu;
nt.AxiosError = pe;
nt.Cancel = nt.CanceledError;
nt.all = function(t) {
    return Promise.all(t)
};
nt.spread = yC;
nt.isAxiosError = xC;
nt.mergeConfig = oi;
nt.AxiosHeaders = nr;
nt.formToJSON = e => n1(z.isHTMLForm(e) ? new FormData(e) : e);
nt.getAdapter = i1.getAdapter;
nt.HttpStatusCode = bC;
nt.default = nt;
const Ep = nt,
    Xm = async (e, t) => {
        try {
            return (await Ep.get(`https://api-consumet-org-gamma-sage.vercel.app/anime/gogoanime/${e}`, {
                params: {
                    page: t
                },
                headers: {
                    "Content-Type": "application/json"
                }
            })).data
        } catch (n) {
            throw typeof n == "string" ? new Error(n) : n instanceof Error ? n : new Error("An unknown error occurred.")
        }
    }, a1 = async e => {
        try {
            return (await Ep.get(`https://api-consumet-org-gamma-sage.vercel.app/anime/gogoanime/info/${e}`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })).data
        } catch (t) {
            throw typeof t == "string" ? new Error(t) : t instanceof Error ? t : new Error("An unknown error occurred.")
        }
    }, wC = async e => {
        try {
            return (await Ep.get(`https://api-consumet-org-gamma-sage.vercel.app/anime/gogoanime/servers/${e}`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })).data
        } catch (t) {
            throw typeof t == "string" ? new Error(t) : t instanceof Error ? t : new Error("An unknown error occurred.")
        }
    };

function xe(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        o, i;
    for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}

function u1(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++) e[t] && (n = u1(e[t])) && (r && (r += " "), r += n);
        else
            for (t in e) e[t] && (r && (r += " "), r += t);
    return r
}

function ke() {
    for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = u1(e)) && (r && (r += " "), r += t);
    return r
}

function wr(e) {
    return e !== null && typeof e == "object" && e.constructor === Object
}

function c1(e) {
    if (!wr(e)) return e;
    const t = {};
    return Object.keys(e).forEach(n => {
        t[n] = c1(e[n])
    }), t
}

function _n(e, t, n = {
    clone: !0
}) {
    const r = n.clone ? j({}, e) : e;
    return wr(e) && wr(t) && Object.keys(t).forEach(o => {
        o !== "__proto__" && (wr(t[o]) && o in e && wr(e[o]) ? r[o] = _n(e[o], t[o], n) : n.clone ? r[o] = wr(t[o]) ? c1(t[o]) : t[o] : r[o] = t[o])
    }), r
}

function ii(e) {
    let t = "https://mui.com/production-error/?code=" + e;
    for (let n = 1; n < arguments.length; n += 1) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified MUI error #" + e + "; visit " + t + " for the full message."
}
var Re = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cp = Symbol.for("react.element"),
    kp = Symbol.for("react.portal"),
    vu = Symbol.for("react.fragment"),
    gu = Symbol.for("react.strict_mode"),
    yu = Symbol.for("react.profiler"),
    xu = Symbol.for("react.provider"),
    bu = Symbol.for("react.context"),
    SC = Symbol.for("react.server_context"),
    wu = Symbol.for("react.forward_ref"),
    Su = Symbol.for("react.suspense"),
    Eu = Symbol.for("react.suspense_list"),
    Cu = Symbol.for("react.memo"),
    ku = Symbol.for("react.lazy"),
    EC = Symbol.for("react.offscreen"),
    f1;
f1 = Symbol.for("react.module.reference");

function bn(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case Cp:
                switch (e = e.type, e) {
                    case vu:
                    case yu:
                    case gu:
                    case Su:
                    case Eu:
                        return e;
                    default:
                        switch (e = e && e.$$typeof, e) {
                            case SC:
                            case bu:
                            case wu:
                            case ku:
                            case Cu:
                            case xu:
                                return e;
                            default:
                                return t
                        }
                }
            case kp:
                return t
        }
    }
}
Re.ContextConsumer = bu;
Re.ContextProvider = xu;
Re.Element = Cp;
Re.ForwardRef = wu;
Re.Fragment = vu;
Re.Lazy = ku;
Re.Memo = Cu;
Re.Portal = kp;
Re.Profiler = yu;
Re.StrictMode = gu;
Re.Suspense = Su;
Re.SuspenseList = Eu;
Re.isAsyncMode = function() {
    return !1
};
Re.isConcurrentMode = function() {
    return !1
};
Re.isContextConsumer = function(e) {
    return bn(e) === bu
};
Re.isContextProvider = function(e) {
    return bn(e) === xu
};
Re.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Cp
};
Re.isForwardRef = function(e) {
    return bn(e) === wu
};
Re.isFragment = function(e) {
    return bn(e) === vu
};
Re.isLazy = function(e) {
    return bn(e) === ku
};
Re.isMemo = function(e) {
    return bn(e) === Cu
};
Re.isPortal = function(e) {
    return bn(e) === kp
};
Re.isProfiler = function(e) {
    return bn(e) === yu
};
Re.isStrictMode = function(e) {
    return bn(e) === gu
};
Re.isSuspense = function(e) {
    return bn(e) === Su
};
Re.isSuspenseList = function(e) {
    return bn(e) === Eu
};
Re.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === vu || e === yu || e === gu || e === Su || e === Eu || e === EC || typeof e == "object" && e !== null && (e.$$typeof === ku || e.$$typeof === Cu || e.$$typeof === xu || e.$$typeof === bu || e.$$typeof === wu || e.$$typeof === f1 || e.getModuleId !== void 0)
};
Re.typeOf = bn;

function hn(e) {
    if (typeof e != "string") throw new Error(ii(7));
    return e.charAt(0).toUpperCase() + e.slice(1)
}

function Yf(...e) {
    return e.reduce((t, n) => n == null ? t : function(...o) {
        t.apply(this, o), n.apply(this, o)
    }, () => {})
}

function d1(e, t = 166) {
    let n;

    function r(...o) {
        const i = () => {
            e.apply(this, o)
        };
        clearTimeout(n), n = setTimeout(i, t)
    }
    return r.clear = () => {
        clearTimeout(n)
    }, r
}

function CC(e, t) {
    return () => null
}

function kC(e, t) {
    var n, r;
    return E.isValidElement(e) && t.indexOf((n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName) !== -1
}

function jt(e) {
    return e && e.ownerDocument || document
}

function si(e) {
    return jt(e).defaultView || window
}

function PC(e, t) {
    return () => null
}

function ja(e, t) {
    typeof e == "function" ? e(t) : e && (e.current = t)
}
const OC = typeof window < "u" ? E.useLayoutEffect : E.useEffect,
    Fr = OC;
let Ym = 0;

function TC(e) {
    const [t, n] = E.useState(e), r = e || t;
    return E.useEffect(() => {
        t == null && (Ym += 1, n(`mui-${Ym}`))
    }, [t]), r
}
const Jm = Yl.useId;

function p1(e) {
    if (Jm !== void 0) {
        const t = Jm();
        return e ?? t
    }
    return TC(e)
}

function RC(e, t, n, r, o) {
    return null
}

function h1({
    controlled: e,
    default: t,
    name: n,
    state: r = "value"
}) {
    const {
        current: o
    } = E.useRef(e !== void 0), [i, s] = E.useState(t), l = o ? e : i, a = E.useCallback(u => {
        o || s(u)
    }, []);
    return [l, a]
}

function kr(e) {
    const t = E.useRef(e);
    return Fr(() => {
        t.current = e
    }), E.useRef((...n) => (0, t.current)(...n)).current
}

function Nt(...e) {
    return E.useMemo(() => e.every(t => t == null) ? null : t => {
        e.forEach(n => {
            ja(n, t)
        })
    }, e)
}
let Pu = !0,
    Jf = !1,
    Zm;
const jC = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    "datetime-local": !0
};

function NC(e) {
    const {
        type: t,
        tagName: n
    } = e;
    return !!(n === "INPUT" && jC[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable)
}

function _C(e) {
    e.metaKey || e.altKey || e.ctrlKey || (Pu = !0)
}

function $c() {
    Pu = !1
}

function $C() {
    this.visibilityState === "hidden" && Jf && (Pu = !0)
}

function MC(e) {
    e.addEventListener("keydown", _C, !0), e.addEventListener("mousedown", $c, !0), e.addEventListener("pointerdown", $c, !0), e.addEventListener("touchstart", $c, !0), e.addEventListener("visibilitychange", $C, !0)
}

function AC(e) {
    const {
        target: t
    } = e;
    try {
        return t.matches(":focus-visible")
    } catch {}
    return Pu || NC(t)
}

function Pp() {
    const e = E.useCallback(o => {
            o != null && MC(o.ownerDocument)
        }, []),
        t = E.useRef(!1);

    function n() {
        return t.current ? (Jf = !0, window.clearTimeout(Zm), Zm = window.setTimeout(() => {
            Jf = !1
        }, 100), t.current = !1, !0) : !1
    }

    function r(o) {
        return AC(o) ? (t.current = !0, !0) : !1
    }
    return {
        isFocusVisibleRef: t,
        onFocus: r,
        onBlur: n,
        ref: e
    }
}

function m1(e) {
    const t = e.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t)
}

function v1(e, t) {
    const n = j({}, t);
    return Object.keys(e).forEach(r => {
        if (r.toString().match(/^(components|slots)$/)) n[r] = j({}, e[r], n[r]);
        else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
            const o = e[r] || {},
                i = t[r];
            n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = j({}, i), Object.keys(o).forEach(s => {
                n[r][s] = v1(o[s], i[s])
            }))
        } else n[r] === void 0 && (n[r] = e[r])
    }), n
}

function wn(e, t, n = void 0) {
    const r = {};
    return Object.keys(e).forEach(o => {
        r[o] = e[o].reduce((i, s) => {
            if (s) {
                const l = t(s);
                l !== "" && i.push(l), n && n[s] && i.push(n[s])
            }
            return i
        }, []).join(" ")
    }), r
}
const ev = e => e,
    LC = () => {
        let e = ev;
        return {
            configure(t) {
                e = t
            },
            generate(t) {
                return e(t)
            },
            reset() {
                e = ev
            }
        }
    },
    IC = LC(),
    g1 = IC,
    FC = {
        active: "active",
        checked: "checked",
        completed: "completed",
        disabled: "disabled",
        error: "error",
        expanded: "expanded",
        focused: "focused",
        focusVisible: "focusVisible",
        open: "open",
        readOnly: "readOnly",
        required: "required",
        selected: "selected"
    };

function nn(e, t, n = "Mui") {
    const r = FC[t];
    return r ? `${n}-${r}` : `${g1.generate(e)}-${t}`
}

function Ct(e, t, n = "Mui") {
    const r = {};
    return t.forEach(o => {
        r[o] = nn(e, o, n)
    }), r
}

function y1(e) {
    var t = Object.create(null);
    return function(n) {
        return t[n] === void 0 && (t[n] = e(n)), t[n]
    }
}
var zC = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    BC = y1(function(e) {
        return zC.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91
    });

function UC(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
        if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}

function VC(e) {
    var t = document.createElement("style");
    return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t
}
var DC = function() {
        function e(n) {
            var r = this;
            this._insertTag = function(o) {
                var i;
                r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o)
            }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null
        }
        var t = e.prototype;
        return t.hydrate = function(r) {
            r.forEach(this._insertTag)
        }, t.insert = function(r) {
            this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(VC(this));
            var o = this.tags[this.tags.length - 1];
            if (this.isSpeedy) {
                var i = UC(o);
                try {
                    i.insertRule(r, i.cssRules.length)
                } catch {}
            } else o.appendChild(document.createTextNode(r));
            this.ctr++
        }, t.flush = function() {
            this.tags.forEach(function(r) {
                return r.parentNode && r.parentNode.removeChild(r)
            }), this.tags = [], this.ctr = 0
        }, e
    }(),
    bt = "-ms-",
    Na = "-moz-",
    be = "-webkit-",
    x1 = "comm",
    Op = "rule",
    Tp = "decl",
    HC = "@import",
    b1 = "@keyframes",
    WC = "@layer",
    QC = Math.abs,
    Ou = String.fromCharCode,
    KC = Object.assign;

function qC(e, t) {
    return pt(e, 0) ^ 45 ? (((t << 2 ^ pt(e, 0)) << 2 ^ pt(e, 1)) << 2 ^ pt(e, 2)) << 2 ^ pt(e, 3) : 0
}

function w1(e) {
    return e.trim()
}

function GC(e, t) {
    return (e = t.exec(e)) ? e[0] : e
}

function we(e, t, n) {
    return e.replace(t, n)
}

function Zf(e, t) {
    return e.indexOf(t)
}

function pt(e, t) {
    return e.charCodeAt(t) | 0
}

function $s(e, t, n) {
    return e.slice(t, n)
}

function Fn(e) {
    return e.length
}

function Rp(e) {
    return e.length
}

function xl(e, t) {
    return t.push(e), e
}

function XC(e, t) {
    return e.map(t).join("")
}
var Tu = 1,
    li = 1,
    S1 = 0,
    Dt = 0,
    et = 0,
    gi = "";

function Ru(e, t, n, r, o, i, s) {
    return {
        value: e,
        root: t,
        parent: n,
        type: r,
        props: o,
        children: i,
        line: Tu,
        column: li,
        length: s,
        return: ""
    }
}

function $i(e, t) {
    return KC(Ru("", null, null, "", null, null, 0), e, {
        length: -e.length
    }, t)
}

function YC() {
    return et
}

function JC() {
    return et = Dt > 0 ? pt(gi, --Dt) : 0, li--, et === 10 && (li = 1, Tu--), et
}

function Yt() {
    return et = Dt < S1 ? pt(gi, Dt++) : 0, li++, et === 10 && (li = 1, Tu++), et
}

function Hn() {
    return pt(gi, Dt)
}

function Hl() {
    return Dt
}

function qs(e, t) {
    return $s(gi, e, t)
}

function Ms(e) {
    switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1
    }
    return 0
}

function E1(e) {
    return Tu = li = 1, S1 = Fn(gi = e), Dt = 0, []
}

function C1(e) {
    return gi = "", e
}

function Wl(e) {
    return w1(qs(Dt - 1, ed(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}

function ZC(e) {
    for (;
        (et = Hn()) && et < 33;) Yt();
    return Ms(e) > 2 || Ms(et) > 3 ? "" : " "
}

function ek(e, t) {
    for (; --t && Yt() && !(et < 48 || et > 102 || et > 57 && et < 65 || et > 70 && et < 97););
    return qs(e, Hl() + (t < 6 && Hn() == 32 && Yt() == 32))
}

function ed(e) {
    for (; Yt();) switch (et) {
        case e:
            return Dt;
        case 34:
        case 39:
            e !== 34 && e !== 39 && ed(et);
            break;
        case 40:
            e === 41 && ed(e);
            break;
        case 92:
            Yt();
            break
    }
    return Dt
}

function tk(e, t) {
    for (; Yt() && e + et !== 57;)
        if (e + et === 84 && Hn() === 47) break;
    return "/*" + qs(t, Dt - 1) + "*" + Ou(e === 47 ? e : Yt())
}

function nk(e) {
    for (; !Ms(Hn());) Yt();
    return qs(e, Dt)
}

function rk(e) {
    return C1(Ql("", null, null, null, [""], e = E1(e), 0, [0], e))
}

function Ql(e, t, n, r, o, i, s, l, a) {
    for (var u = 0, c = 0, f = s, h = 0, y = 0, v = 0, d = 1, b = 1, m = 1, p = 0, g = "", w = o, C = i, S = r, k = g; b;) switch (v = p, p = Yt()) {
        case 40:
            if (v != 108 && pt(k, f - 1) == 58) {
                Zf(k += we(Wl(p), "&", "&\f"), "&\f") != -1 && (m = -1);
                break
            }
        case 34:
        case 39:
        case 91:
            k += Wl(p);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            k += ZC(v);
            break;
        case 92:
            k += ek(Hl() - 1, 7);
            continue;
        case 47:
            switch (Hn()) {
                case 42:
                case 47:
                    xl(ok(tk(Yt(), Hl()), t, n), a);
                    break;
                default:
                    k += "/"
            }
            break;
        case 123 * d:
            l[u++] = Fn(k) * m;
        case 125 * d:
        case 59:
        case 0:
            switch (p) {
                case 0:
                case 125:
                    b = 0;
                case 59 + c:
                    m == -1 && (k = we(k, /\f/g, "")), y > 0 && Fn(k) - f && xl(y > 32 ? nv(k + ";", r, n, f - 1) : nv(we(k, " ", "") + ";", r, n, f - 2), a);
                    break;
                case 59:
                    k += ";";
                default:
                    if (xl(S = tv(k, t, n, u, c, o, l, g, w = [], C = [], f), i), p === 123)
                        if (c === 0) Ql(k, t, S, S, w, i, f, l, C);
                        else switch (h === 99 && pt(k, 3) === 110 ? 100 : h) {
                            case 100:
                            case 108:
                            case 109:
                            case 115:
                                Ql(e, S, S, r && xl(tv(e, S, S, 0, 0, o, l, g, o, w = [], f), C), o, C, f, l, r ? w : C);
                                break;
                            default:
                                Ql(k, S, S, S, [""], C, 0, l, C)
                        }
            }
            u = c = y = 0, d = m = 1, g = k = "", f = s;
            break;
        case 58:
            f = 1 + Fn(k), y = v;
        default:
            if (d < 1) {
                if (p == 123) --d;
                else if (p == 125 && d++ == 0 && JC() == 125) continue
            }
            switch (k += Ou(p), p * d) {
                case 38:
                    m = c > 0 ? 1 : (k += "\f", -1);
                    break;
                case 44:
                    l[u++] = (Fn(k) - 1) * m, m = 1;
                    break;
                case 64:
                    Hn() === 45 && (k += Wl(Yt())), h = Hn(), c = f = Fn(g = k += nk(Hl())), p++;
                    break;
                case 45:
                    v === 45 && Fn(k) == 2 && (d = 0)
            }
    }
    return i
}

function tv(e, t, n, r, o, i, s, l, a, u, c) {
    for (var f = o - 1, h = o === 0 ? i : [""], y = Rp(h), v = 0, d = 0, b = 0; v < r; ++v)
        for (var m = 0, p = $s(e, f + 1, f = QC(d = s[v])), g = e; m < y; ++m)(g = w1(d > 0 ? h[m] + " " + p : we(p, /&\f/g, h[m]))) && (a[b++] = g);
    return Ru(e, t, n, o === 0 ? Op : l, a, u, c)
}

function ok(e, t, n) {
    return Ru(e, t, n, x1, Ou(YC()), $s(e, 2, -2), 0)
}

function nv(e, t, n, r) {
    return Ru(e, t, n, Tp, $s(e, 0, r), $s(e, r + 1, -1), r)
}

function qo(e, t) {
    for (var n = "", r = Rp(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
    return n
}

function ik(e, t, n, r) {
    switch (e.type) {
        case WC:
            if (e.children.length) break;
        case HC:
        case Tp:
            return e.return = e.return || e.value;
        case x1:
            return "";
        case b1:
            return e.return = e.value + "{" + qo(e.children, r) + "}";
        case Op:
            e.value = e.props.join(",")
    }
    return Fn(n = qo(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
}

function sk(e) {
    var t = Rp(e);
    return function(n, r, o, i) {
        for (var s = "", l = 0; l < t; l++) s += e[l](n, r, o, i) || "";
        return s
    }
}

function lk(e) {
    return function(t) {
        t.root || (t = t.return) && e(t)
    }
}
var ak = function(t, n, r) {
        for (var o = 0, i = 0; o = i, i = Hn(), o === 38 && i === 12 && (n[r] = 1), !Ms(i);) Yt();
        return qs(t, Dt)
    },
    uk = function(t, n) {
        var r = -1,
            o = 44;
        do switch (Ms(o)) {
            case 0:
                o === 38 && Hn() === 12 && (n[r] = 1), t[r] += ak(Dt - 1, n, r);
                break;
            case 2:
                t[r] += Wl(o);
                break;
            case 4:
                if (o === 44) {
                    t[++r] = Hn() === 58 ? "&\f" : "", n[r] = t[r].length;
                    break
                }
            default:
                t[r] += Ou(o)
        }
        while (o = Yt());
        return t
    },
    ck = function(t, n) {
        return C1(uk(E1(t), n))
    },
    rv = new WeakMap,
    fk = function(t) {
        if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
            for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule";)
                if (r = r.parent, !r) return;
            if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !rv.get(r)) && !o) {
                rv.set(t, !0);
                for (var i = [], s = ck(n, i), l = r.props, a = 0, u = 0; a < s.length; a++)
                    for (var c = 0; c < l.length; c++, u++) t.props[u] = i[a] ? s[a].replace(/&\f/g, l[c]) : l[c] + " " + s[a]
            }
        }
    },
    dk = function(t) {
        if (t.type === "decl") {
            var n = t.value;
            n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && (t.return = "", t.value = "")
        }
    };

function k1(e, t) {
    switch (qC(e, t)) {
        case 5103:
            return be + "print-" + e + e;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return be + e + e;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return be + e + Na + e + bt + e + e;
        case 6828:
        case 4268:
            return be + e + bt + e + e;
        case 6165:
            return be + e + bt + "flex-" + e + e;
        case 5187:
            return be + e + we(e, /(\w+).+(:[^]+)/, be + "box-$1$2" + bt + "flex-$1$2") + e;
        case 5443:
            return be + e + bt + "flex-item-" + we(e, /flex-|-self/, "") + e;
        case 4675:
            return be + e + bt + "flex-line-pack" + we(e, /align-content|flex-|-self/, "") + e;
        case 5548:
            return be + e + bt + we(e, "shrink", "negative") + e;
        case 5292:
            return be + e + bt + we(e, "basis", "preferred-size") + e;
        case 6060:
            return be + "box-" + we(e, "-grow", "") + be + e + bt + we(e, "grow", "positive") + e;
        case 4554:
            return be + we(e, /([^-])(transform)/g, "$1" + be + "$2") + e;
        case 6187:
            return we(we(we(e, /(zoom-|grab)/, be + "$1"), /(image-set)/, be + "$1"), e, "") + e;
        case 5495:
        case 3959:
            return we(e, /(image-set\([^]*)/, be + "$1$`$1");
        case 4968:
            return we(we(e, /(.+:)(flex-)?(.*)/, be + "box-pack:$3" + bt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + be + e + e;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return we(e, /(.+)-inline(.+)/, be + "$1$2") + e;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if (Fn(e) - 1 - t > 6) switch (pt(e, t + 1)) {
                case 109:
                    if (pt(e, t + 4) !== 45) break;
                case 102:
                    return we(e, /(.+:)(.+)-([^]+)/, "$1" + be + "$2-$3$1" + Na + (pt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
                case 115:
                    return ~Zf(e, "stretch") ? k1(we(e, "stretch", "fill-available"), t) + e : e
            }
            break;
        case 4949:
            if (pt(e, t + 1) !== 115) break;
        case 6444:
            switch (pt(e, Fn(e) - 3 - (~Zf(e, "!important") && 10))) {
                case 107:
                    return we(e, ":", ":" + be) + e;
                case 101:
                    return we(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + be + (pt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + be + "$2$3$1" + bt + "$2box$3") + e
            }
            break;
        case 5936:
            switch (pt(e, t + 11)) {
                case 114:
                    return be + e + bt + we(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                case 108:
                    return be + e + bt + we(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                case 45:
                    return be + e + bt + we(e, /[svh]\w+-[tblr]{2}/, "lr") + e
            }
            return be + e + bt + e + e
    }
    return e
}
var pk = function(t, n, r, o) {
        if (t.length > -1 && !t.return) switch (t.type) {
            case Tp:
                t.return = k1(t.value, t.length);
                break;
            case b1:
                return qo([$i(t, {
                    value: we(t.value, "@", "@" + be)
                })], o);
            case Op:
                if (t.length) return XC(t.props, function(i) {
                    switch (GC(i, /(::plac\w+|:read-\w+)/)) {
                        case ":read-only":
                        case ":read-write":
                            return qo([$i(t, {
                                props: [we(i, /:(read-\w+)/, ":" + Na + "$1")]
                            })], o);
                        case "::placeholder":
                            return qo([$i(t, {
                                props: [we(i, /:(plac\w+)/, ":" + be + "input-$1")]
                            }), $i(t, {
                                props: [we(i, /:(plac\w+)/, ":" + Na + "$1")]
                            }), $i(t, {
                                props: [we(i, /:(plac\w+)/, bt + "input-$1")]
                            })], o)
                    }
                    return ""
                })
        }
    },
    hk = [pk],
    mk = function(t) {
        var n = t.key;
        if (n === "css") {
            var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
            Array.prototype.forEach.call(r, function(d) {
                var b = d.getAttribute("data-emotion");
                b.indexOf(" ") !== -1 && (document.head.appendChild(d), d.setAttribute("data-s", ""))
            })
        }
        var o = t.stylisPlugins || hk,
            i = {},
            s, l = [];
        s = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function(d) {
            for (var b = d.getAttribute("data-emotion").split(" "), m = 1; m < b.length; m++) i[b[m]] = !0;
            l.push(d)
        });
        var a, u = [fk, dk];
        {
            var c, f = [ik, lk(function(d) {
                    c.insert(d)
                })],
                h = sk(u.concat(o, f)),
                y = function(b) {
                    return qo(rk(b), h)
                };
            a = function(b, m, p, g) {
                c = p, y(b ? b + "{" + m.styles + "}" : m.styles), g && (v.inserted[m.name] = !0)
            }
        }
        var v = {
            key: n,
            sheet: new DC({
                key: n,
                container: s,
                nonce: t.nonce,
                speedy: t.speedy,
                prepend: t.prepend,
                insertionPoint: t.insertionPoint
            }),
            nonce: t.nonce,
            inserted: i,
            registered: {},
            insert: a
        };
        return v.sheet.hydrate(l), v
    },
    P1 = {
        exports: {}
    },
    Oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ct = typeof Symbol == "function" && Symbol.for,
    jp = ct ? Symbol.for("react.element") : 60103,
    Np = ct ? Symbol.for("react.portal") : 60106,
    ju = ct ? Symbol.for("react.fragment") : 60107,
    Nu = ct ? Symbol.for("react.strict_mode") : 60108,
    _u = ct ? Symbol.for("react.profiler") : 60114,
    $u = ct ? Symbol.for("react.provider") : 60109,
    Mu = ct ? Symbol.for("react.context") : 60110,
    _p = ct ? Symbol.for("react.async_mode") : 60111,
    Au = ct ? Symbol.for("react.concurrent_mode") : 60111,
    Lu = ct ? Symbol.for("react.forward_ref") : 60112,
    Iu = ct ? Symbol.for("react.suspense") : 60113,
    vk = ct ? Symbol.for("react.suspense_list") : 60120,
    Fu = ct ? Symbol.for("react.memo") : 60115,
    zu = ct ? Symbol.for("react.lazy") : 60116,
    gk = ct ? Symbol.for("react.block") : 60121,
    yk = ct ? Symbol.for("react.fundamental") : 60117,
    xk = ct ? Symbol.for("react.responder") : 60118,
    bk = ct ? Symbol.for("react.scope") : 60119;

function rn(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case jp:
                switch (e = e.type, e) {
                    case _p:
                    case Au:
                    case ju:
                    case _u:
                    case Nu:
                    case Iu:
                        return e;
                    default:
                        switch (e = e && e.$$typeof, e) {
                            case Mu:
                            case Lu:
                            case zu:
                            case Fu:
                            case $u:
                                return e;
                            default:
                                return t
                        }
                }
            case Np:
                return t
        }
    }
}

function O1(e) {
    return rn(e) === Au
}
Oe.AsyncMode = _p;
Oe.ConcurrentMode = Au;
Oe.ContextConsumer = Mu;
Oe.ContextProvider = $u;
Oe.Element = jp;
Oe.ForwardRef = Lu;
Oe.Fragment = ju;
Oe.Lazy = zu;
Oe.Memo = Fu;
Oe.Portal = Np;
Oe.Profiler = _u;
Oe.StrictMode = Nu;
Oe.Suspense = Iu;
Oe.isAsyncMode = function(e) {
    return O1(e) || rn(e) === _p
};
Oe.isConcurrentMode = O1;
Oe.isContextConsumer = function(e) {
    return rn(e) === Mu
};
Oe.isContextProvider = function(e) {
    return rn(e) === $u
};
Oe.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === jp
};
Oe.isForwardRef = function(e) {
    return rn(e) === Lu
};
Oe.isFragment = function(e) {
    return rn(e) === ju
};
Oe.isLazy = function(e) {
    return rn(e) === zu
};
Oe.isMemo = function(e) {
    return rn(e) === Fu
};
Oe.isPortal = function(e) {
    return rn(e) === Np
};
Oe.isProfiler = function(e) {
    return rn(e) === _u
};
Oe.isStrictMode = function(e) {
    return rn(e) === Nu
};
Oe.isSuspense = function(e) {
    return rn(e) === Iu
};
Oe.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === ju || e === Au || e === _u || e === Nu || e === Iu || e === vk || typeof e == "object" && e !== null && (e.$$typeof === zu || e.$$typeof === Fu || e.$$typeof === $u || e.$$typeof === Mu || e.$$typeof === Lu || e.$$typeof === yk || e.$$typeof === xk || e.$$typeof === bk || e.$$typeof === gk)
};
Oe.typeOf = rn;
P1.exports = Oe;
var wk = P1.exports,
    T1 = wk,
    Sk = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    },
    Ek = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    },
    R1 = {};
R1[T1.ForwardRef] = Sk;
R1[T1.Memo] = Ek;
var Ck = !0;

function kk(e, t, n) {
    var r = "";
    return n.split(" ").forEach(function(o) {
        e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " "
    }), r
}
var j1 = function(t, n, r) {
        var o = t.key + "-" + n.name;
        (r === !1 || Ck === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles)
    },
    Pk = function(t, n, r) {
        j1(t, n, r);
        var o = t.key + "-" + n.name;
        if (t.inserted[n.name] === void 0) {
            var i = n;
            do t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next; while (i !== void 0)
        }
    };

function Ok(e) {
    for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4) n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    switch (o) {
        case 3:
            t ^= (e.charCodeAt(r + 2) & 255) << 16;
        case 2:
            t ^= (e.charCodeAt(r + 1) & 255) << 8;
        case 1:
            t ^= e.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16)
    }
    return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36)
}
var Tk = {
        animationIterationCount: 1,
        aspectRatio: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
    },
    Rk = /[A-Z]|^ms/g,
    jk = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    N1 = function(t) {
        return t.charCodeAt(1) === 45
    },
    ov = function(t) {
        return t != null && typeof t != "boolean"
    },
    Mc = y1(function(e) {
        return N1(e) ? e : e.replace(Rk, "-$&").toLowerCase()
    }),
    iv = function(t, n) {
        switch (t) {
            case "animation":
            case "animationName":
                if (typeof n == "string") return n.replace(jk, function(r, o, i) {
                    return zn = {
                        name: o,
                        styles: i,
                        next: zn
                    }, o
                })
        }
        return Tk[t] !== 1 && !N1(t) && typeof n == "number" && n !== 0 ? n + "px" : n
    };

function As(e, t, n) {
    if (n == null) return "";
    if (n.__emotion_styles !== void 0) return n;
    switch (typeof n) {
        case "boolean":
            return "";
        case "object": {
            if (n.anim === 1) return zn = {
                name: n.name,
                styles: n.styles,
                next: zn
            }, n.name;
            if (n.styles !== void 0) {
                var r = n.next;
                if (r !== void 0)
                    for (; r !== void 0;) zn = {
                        name: r.name,
                        styles: r.styles,
                        next: zn
                    }, r = r.next;
                var o = n.styles + ";";
                return o
            }
            return Nk(e, t, n)
        }
        case "function": {
            if (e !== void 0) {
                var i = zn,
                    s = n(e);
                return zn = i, As(e, t, s)
            }
            break
        }
    }
    if (t == null) return n;
    var l = t[n];
    return l !== void 0 ? l : n
}

function Nk(e, t, n) {
    var r = "";
    if (Array.isArray(n))
        for (var o = 0; o < n.length; o++) r += As(e, t, n[o]) + ";";
    else
        for (var i in n) {
            var s = n[i];
            if (typeof s != "object") t != null && t[s] !== void 0 ? r += i + "{" + t[s] + "}" : ov(s) && (r += Mc(i) + ":" + iv(i, s) + ";");
            else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
                for (var l = 0; l < s.length; l++) ov(s[l]) && (r += Mc(i) + ":" + iv(i, s[l]) + ";");
            else {
                var a = As(e, t, s);
                switch (i) {
                    case "animation":
                    case "animationName": {
                        r += Mc(i) + ":" + a + ";";
                        break
                    }
                    default:
                        r += i + "{" + a + "}"
                }
            }
        }
    return r
}
var sv = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    zn, _1 = function(t, n, r) {
        if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0) return t[0];
        var o = !0,
            i = "";
        zn = void 0;
        var s = t[0];
        s == null || s.raw === void 0 ? (o = !1, i += As(r, n, s)) : i += s[0];
        for (var l = 1; l < t.length; l++) i += As(r, n, t[l]), o && (i += s[l]);
        sv.lastIndex = 0;
        for (var a = "", u;
            (u = sv.exec(i)) !== null;) a += "-" + u[1];
        var c = Ok(i) + a;
        return {
            name: c,
            styles: i,
            next: zn
        }
    },
    _k = function(t) {
        return t()
    },
    $k = Yl.useInsertionEffect ? Yl.useInsertionEffect : !1,
    Mk = $k || _k,
    $1 = E.createContext(typeof HTMLElement < "u" ? mk({
        key: "css"
    }) : null);
$1.Provider;
var Ak = function(t) {
        return E.forwardRef(function(n, r) {
            var o = E.useContext($1);
            return t(n, o, r)
        })
    },
    M1 = E.createContext({});

function td() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return _1(t)
}
var Gs = function() {
        var t = td.apply(void 0, arguments),
            n = "animation-" + t.name;
        return {
            name: n,
            styles: "@keyframes " + n + "{" + t.styles + "}",
            anim: 1,
            toString: function() {
                return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
            }
        }
    },
    Lk = BC,
    Ik = function(t) {
        return t !== "theme"
    },
    lv = function(t) {
        return typeof t == "string" && t.charCodeAt(0) > 96 ? Lk : Ik
    },
    av = function(t, n, r) {
        var o;
        if (n) {
            var i = n.shouldForwardProp;
            o = t.__emotion_forwardProp && i ? function(s) {
                return t.__emotion_forwardProp(s) && i(s)
            } : i
        }
        return typeof o != "function" && r && (o = t.__emotion_forwardProp), o
    },
    Fk = function(t) {
        var n = t.cache,
            r = t.serialized,
            o = t.isStringTag;
        return j1(n, r, o), Mk(function() {
            return Pk(n, r, o)
        }), null
    },
    zk = function e(t, n) {
        var r = t.__emotion_real === t,
            o = r && t.__emotion_base || t,
            i, s;
        n !== void 0 && (i = n.label, s = n.target);
        var l = av(t, n, r),
            a = l || lv(o),
            u = !a("as");
        return function() {
            var c = arguments,
                f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
            if (i !== void 0 && f.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0) f.push.apply(f, c);
            else {
                f.push(c[0][0]);
                for (var h = c.length, y = 1; y < h; y++) f.push(c[y], c[0][y])
            }
            var v = Ak(function(d, b, m) {
                var p = u && d.as || o,
                    g = "",
                    w = [],
                    C = d;
                if (d.theme == null) {
                    C = {};
                    for (var S in d) C[S] = d[S];
                    C.theme = E.useContext(M1)
                }
                typeof d.className == "string" ? g = kk(b.registered, w, d.className) : d.className != null && (g = d.className + " ");
                var k = _1(f.concat(w), b.registered, C);
                g += b.key + "-" + k.name, s !== void 0 && (g += " " + s);
                var P = u && l === void 0 ? lv(p) : a,
                    N = {};
                for (var O in d) u && O === "as" || P(O) && (N[O] = d[O]);
                return N.className = g, N.ref = m, E.createElement(E.Fragment, null, E.createElement(Fk, {
                    cache: b,
                    serialized: k,
                    isStringTag: typeof p == "string"
                }), E.createElement(p, N))
            });
            return v.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = f, v.__emotion_forwardProp = l, Object.defineProperty(v, "toString", {
                value: function() {
                    return "." + s
                }
            }), v.withComponent = function(d, b) {
                return e(d, j({}, n, b, {
                    shouldForwardProp: av(v, b, !0)
                })).apply(void 0, f)
            }, v
        }
    },
    Bk = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"],
    nd = zk.bind();
Bk.forEach(function(e) {
    nd[e] = nd(e)
});

function Uk(e, t) {
    return nd(e, t)
}
const Vk = (e, t) => {
        Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles))
    },
    Dk = ["values", "unit", "step"],
    Hk = e => {
        const t = Object.keys(e).map(n => ({
            key: n,
            val: e[n]
        })) || [];
        return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => j({}, n, {
            [r.key]: r.val
        }), {})
    };

function Wk(e) {
    const {
        values: t = {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        },
        unit: n = "px",
        step: r = 5
    } = e, o = xe(e, Dk), i = Hk(t), s = Object.keys(i);

    function l(h) {
        return `@media (min-width:${typeof t[h]=="number"?t[h]:h}${n})`
    }

    function a(h) {
        return `@media (max-width:${(typeof t[h]=="number"?t[h]:h)-r/100}${n})`
    }

    function u(h, y) {
        const v = s.indexOf(y);
        return `@media (min-width:${typeof t[h]=="number"?t[h]:h}${n}) and (max-width:${(v!==-1&&typeof t[s[v]]=="number"?t[s[v]]:y)-r/100}${n})`
    }

    function c(h) {
        return s.indexOf(h) + 1 < s.length ? u(h, s[s.indexOf(h) + 1]) : l(h)
    }

    function f(h) {
        const y = s.indexOf(h);
        return y === 0 ? l(s[1]) : y === s.length - 1 ? a(s[y]) : u(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and")
    }
    return j({
        keys: s,
        values: i,
        up: l,
        down: a,
        between: u,
        only: c,
        not: f,
        unit: n
    }, o)
}
const Qk = {
        borderRadius: 4
    },
    Kk = Qk;

function is(e, t) {
    return t ? _n(e, t, {
        clone: !1
    }) : e
}
const $p = {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
    },
    uv = {
        keys: ["xs", "sm", "md", "lg", "xl"],
        up: e => `@media (min-width:${$p[e]}px)`
    };

function lr(e, t, n) {
    const r = e.theme || {};
    if (Array.isArray(t)) {
        const i = r.breakpoints || uv;
        return t.reduce((s, l, a) => (s[i.up(i.keys[a])] = n(t[a]), s), {})
    }
    if (typeof t == "object") {
        const i = r.breakpoints || uv;
        return Object.keys(t).reduce((s, l) => {
            if (Object.keys(i.values || $p).indexOf(l) !== -1) {
                const a = i.up(l);
                s[a] = n(t[l], l)
            } else {
                const a = l;
                s[a] = t[a]
            }
            return s
        }, {})
    }
    return n(t)
}

function qk(e = {}) {
    var t;
    return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
        const i = e.up(o);
        return r[i] = {}, r
    }, {})) || {}
}

function Gk(e, t) {
    return e.reduce((n, r) => {
        const o = n[r];
        return (!o || Object.keys(o).length === 0) && delete n[r], n
    }, t)
}

function Bu(e, t, n = !0) {
    if (!t || typeof t != "string") return null;
    if (e && e.vars && n) {
        const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
        if (r != null) return r
    }
    return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e)
}

function _a(e, t, n, r = n) {
    let o;
    return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Bu(e, n) || r, t && (o = t(o, r, e)), o
}

function Ye(e) {
    const {
        prop: t,
        cssProperty: n = e.prop,
        themeKey: r,
        transform: o
    } = e, i = s => {
        if (s[t] == null) return null;
        const l = s[t],
            a = s.theme,
            u = Bu(a, r) || {};
        return lr(s, l, f => {
            let h = _a(u, o, f);
            return f === h && typeof f == "string" && (h = _a(u, o, `${t}${f==="default"?"":hn(f)}`, f)), n === !1 ? h : {
                [n]: h
            }
        })
    };
    return i.propTypes = {}, i.filterProps = [t], i
}

function Xk(e) {
    const t = {};
    return n => (t[n] === void 0 && (t[n] = e(n)), t[n])
}
const Yk = {
        m: "margin",
        p: "padding"
    },
    Jk = {
        t: "Top",
        r: "Right",
        b: "Bottom",
        l: "Left",
        x: ["Left", "Right"],
        y: ["Top", "Bottom"]
    },
    cv = {
        marginX: "mx",
        marginY: "my",
        paddingX: "px",
        paddingY: "py"
    },
    Zk = Xk(e => {
        if (e.length > 2)
            if (cv[e]) e = cv[e];
            else return [e];
        const [t, n] = e.split(""), r = Yk[t], o = Jk[n] || "";
        return Array.isArray(o) ? o.map(i => r + i) : [r + o]
    }),
    Mp = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"],
    Ap = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Mp, ...Ap];

function Xs(e, t, n, r) {
    var o;
    const i = (o = Bu(e, t, !1)) != null ? o : n;
    return typeof i == "number" ? s => typeof s == "string" ? s : i * s : Array.isArray(i) ? s => typeof s == "string" ? s : i[s] : typeof i == "function" ? i : () => {}
}

function A1(e) {
    return Xs(e, "spacing", 8)
}

function Ys(e, t) {
    if (typeof t == "string" || t == null) return t;
    const n = Math.abs(t),
        r = e(n);
    return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`
}

function eP(e, t) {
    return n => e.reduce((r, o) => (r[o] = Ys(t, n), r), {})
}

function tP(e, t, n, r) {
    if (t.indexOf(n) === -1) return null;
    const o = Zk(n),
        i = eP(o, r),
        s = e[n];
    return lr(e, s, i)
}

function L1(e, t) {
    const n = A1(e.theme);
    return Object.keys(e).map(r => tP(e, t, r, n)).reduce(is, {})
}

function Qe(e) {
    return L1(e, Mp)
}
Qe.propTypes = {};
Qe.filterProps = Mp;

function Ke(e) {
    return L1(e, Ap)
}
Ke.propTypes = {};
Ke.filterProps = Ap;

function nP(e = 8) {
    if (e.mui) return e;
    const t = A1({
            spacing: e
        }),
        n = (...r) => (r.length === 0 ? [1] : r).map(i => {
            const s = t(i);
            return typeof s == "number" ? `${s}px` : s
        }).join(" ");
    return n.mui = !0, n
}

function Uu(...e) {
    const t = e.reduce((r, o) => (o.filterProps.forEach(i => {
            r[i] = o
        }), r), {}),
        n = r => Object.keys(r).reduce((o, i) => t[i] ? is(o, t[i](r)) : o, {});
    return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n
}

function cn(e) {
    return typeof e != "number" ? e : `${e}px solid`
}

function Sn(e, t) {
    return Ye({
        prop: e,
        themeKey: "borders",
        transform: t
    })
}
const rP = Sn("border", cn),
    oP = Sn("borderTop", cn),
    iP = Sn("borderRight", cn),
    sP = Sn("borderBottom", cn),
    lP = Sn("borderLeft", cn),
    aP = Sn("borderColor"),
    uP = Sn("borderTopColor"),
    cP = Sn("borderRightColor"),
    fP = Sn("borderBottomColor"),
    dP = Sn("borderLeftColor"),
    pP = Sn("outline", cn),
    hP = Sn("outlineColor"),
    Vu = e => {
        if (e.borderRadius !== void 0 && e.borderRadius !== null) {
            const t = Xs(e.theme, "shape.borderRadius", 4),
                n = r => ({
                    borderRadius: Ys(t, r)
                });
            return lr(e, e.borderRadius, n)
        }
        return null
    };
Vu.propTypes = {};
Vu.filterProps = ["borderRadius"];
Uu(rP, oP, iP, sP, lP, aP, uP, cP, fP, dP, Vu, pP, hP);
const Du = e => {
    if (e.gap !== void 0 && e.gap !== null) {
        const t = Xs(e.theme, "spacing", 8),
            n = r => ({
                gap: Ys(t, r)
            });
        return lr(e, e.gap, n)
    }
    return null
};
Du.propTypes = {};
Du.filterProps = ["gap"];
const Hu = e => {
    if (e.columnGap !== void 0 && e.columnGap !== null) {
        const t = Xs(e.theme, "spacing", 8),
            n = r => ({
                columnGap: Ys(t, r)
            });
        return lr(e, e.columnGap, n)
    }
    return null
};
Hu.propTypes = {};
Hu.filterProps = ["columnGap"];
const Wu = e => {
    if (e.rowGap !== void 0 && e.rowGap !== null) {
        const t = Xs(e.theme, "spacing", 8),
            n = r => ({
                rowGap: Ys(t, r)
            });
        return lr(e, e.rowGap, n)
    }
    return null
};
Wu.propTypes = {};
Wu.filterProps = ["rowGap"];
const mP = Ye({
        prop: "gridColumn"
    }),
    vP = Ye({
        prop: "gridRow"
    }),
    gP = Ye({
        prop: "gridAutoFlow"
    }),
    yP = Ye({
        prop: "gridAutoColumns"
    }),
    xP = Ye({
        prop: "gridAutoRows"
    }),
    bP = Ye({
        prop: "gridTemplateColumns"
    }),
    wP = Ye({
        prop: "gridTemplateRows"
    }),
    SP = Ye({
        prop: "gridTemplateAreas"
    }),
    EP = Ye({
        prop: "gridArea"
    });
Uu(Du, Hu, Wu, mP, vP, gP, yP, xP, bP, wP, SP, EP);

function Go(e, t) {
    return t === "grey" ? t : e
}
const CP = Ye({
        prop: "color",
        themeKey: "palette",
        transform: Go
    }),
    kP = Ye({
        prop: "bgcolor",
        cssProperty: "backgroundColor",
        themeKey: "palette",
        transform: Go
    }),
    PP = Ye({
        prop: "backgroundColor",
        themeKey: "palette",
        transform: Go
    });
Uu(CP, kP, PP);

function qt(e) {
    return e <= 1 && e !== 0 ? `${e*100}%` : e
}
const OP = Ye({
        prop: "width",
        transform: qt
    }),
    Lp = e => {
        if (e.maxWidth !== void 0 && e.maxWidth !== null) {
            const t = n => {
                var r, o;
                const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || $p[n];
                return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
                    maxWidth: `${i}${e.theme.breakpoints.unit}`
                } : {
                    maxWidth: i
                } : {
                    maxWidth: qt(n)
                }
            };
            return lr(e, e.maxWidth, t)
        }
        return null
    };
Lp.filterProps = ["maxWidth"];
const TP = Ye({
        prop: "minWidth",
        transform: qt
    }),
    RP = Ye({
        prop: "height",
        transform: qt
    }),
    jP = Ye({
        prop: "maxHeight",
        transform: qt
    }),
    NP = Ye({
        prop: "minHeight",
        transform: qt
    });
Ye({
    prop: "size",
    cssProperty: "width",
    transform: qt
});
Ye({
    prop: "size",
    cssProperty: "height",
    transform: qt
});
const _P = Ye({
    prop: "boxSizing"
});
Uu(OP, Lp, TP, RP, jP, NP, _P);
const $P = {
        border: {
            themeKey: "borders",
            transform: cn
        },
        borderTop: {
            themeKey: "borders",
            transform: cn
        },
        borderRight: {
            themeKey: "borders",
            transform: cn
        },
        borderBottom: {
            themeKey: "borders",
            transform: cn
        },
        borderLeft: {
            themeKey: "borders",
            transform: cn
        },
        borderColor: {
            themeKey: "palette"
        },
        borderTopColor: {
            themeKey: "palette"
        },
        borderRightColor: {
            themeKey: "palette"
        },
        borderBottomColor: {
            themeKey: "palette"
        },
        borderLeftColor: {
            themeKey: "palette"
        },
        outline: {
            themeKey: "borders",
            transform: cn
        },
        outlineColor: {
            themeKey: "palette"
        },
        borderRadius: {
            themeKey: "shape.borderRadius",
            style: Vu
        },
        color: {
            themeKey: "palette",
            transform: Go
        },
        bgcolor: {
            themeKey: "palette",
            cssProperty: "backgroundColor",
            transform: Go
        },
        backgroundColor: {
            themeKey: "palette",
            transform: Go
        },
        p: {
            style: Ke
        },
        pt: {
            style: Ke
        },
        pr: {
            style: Ke
        },
        pb: {
            style: Ke
        },
        pl: {
            style: Ke
        },
        px: {
            style: Ke
        },
        py: {
            style: Ke
        },
        padding: {
            style: Ke
        },
        paddingTop: {
            style: Ke
        },
        paddingRight: {
            style: Ke
        },
        paddingBottom: {
            style: Ke
        },
        paddingLeft: {
            style: Ke
        },
        paddingX: {
            style: Ke
        },
        paddingY: {
            style: Ke
        },
        paddingInline: {
            style: Ke
        },
        paddingInlineStart: {
            style: Ke
        },
        paddingInlineEnd: {
            style: Ke
        },
        paddingBlock: {
            style: Ke
        },
        paddingBlockStart: {
            style: Ke
        },
        paddingBlockEnd: {
            style: Ke
        },
        m: {
            style: Qe
        },
        mt: {
            style: Qe
        },
        mr: {
            style: Qe
        },
        mb: {
            style: Qe
        },
        ml: {
            style: Qe
        },
        mx: {
            style: Qe
        },
        my: {
            style: Qe
        },
        margin: {
            style: Qe
        },
        marginTop: {
            style: Qe
        },
        marginRight: {
            style: Qe
        },
        marginBottom: {
            style: Qe
        },
        marginLeft: {
            style: Qe
        },
        marginX: {
            style: Qe
        },
        marginY: {
            style: Qe
        },
        marginInline: {
            style: Qe
        },
        marginInlineStart: {
            style: Qe
        },
        marginInlineEnd: {
            style: Qe
        },
        marginBlock: {
            style: Qe
        },
        marginBlockStart: {
            style: Qe
        },
        marginBlockEnd: {
            style: Qe
        },
        displayPrint: {
            cssProperty: !1,
            transform: e => ({
                "@media print": {
                    display: e
                }
            })
        },
        display: {},
        overflow: {},
        textOverflow: {},
        visibility: {},
        whiteSpace: {},
        flexBasis: {},
        flexDirection: {},
        flexWrap: {},
        justifyContent: {},
        alignItems: {},
        alignContent: {},
        order: {},
        flex: {},
        flexGrow: {},
        flexShrink: {},
        alignSelf: {},
        justifyItems: {},
        justifySelf: {},
        gap: {
            style: Du
        },
        rowGap: {
            style: Wu
        },
        columnGap: {
            style: Hu
        },
        gridColumn: {},
        gridRow: {},
        gridAutoFlow: {},
        gridAutoColumns: {},
        gridAutoRows: {},
        gridTemplateColumns: {},
        gridTemplateRows: {},
        gridTemplateAreas: {},
        gridArea: {},
        position: {},
        zIndex: {
            themeKey: "zIndex"
        },
        top: {},
        right: {},
        bottom: {},
        left: {},
        boxShadow: {
            themeKey: "shadows"
        },
        width: {
            transform: qt
        },
        maxWidth: {
            style: Lp
        },
        minWidth: {
            transform: qt
        },
        height: {
            transform: qt
        },
        maxHeight: {
            transform: qt
        },
        minHeight: {
            transform: qt
        },
        boxSizing: {},
        fontFamily: {
            themeKey: "typography"
        },
        fontSize: {
            themeKey: "typography"
        },
        fontStyle: {
            themeKey: "typography"
        },
        fontWeight: {
            themeKey: "typography"
        },
        letterSpacing: {},
        textTransform: {},
        lineHeight: {},
        textAlign: {},
        typography: {
            cssProperty: !1,
            themeKey: "typography"
        }
    },
    Ip = $P;

function MP(...e) {
    const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
        n = new Set(t);
    return e.every(r => n.size === Object.keys(r).length)
}

function AP(e, t) {
    return typeof e == "function" ? e(t) : e
}

function LP() {
    function e(n, r, o, i) {
        const s = {
                [n]: r,
                theme: o
            },
            l = i[n];
        if (!l) return {
            [n]: r
        };
        const {
            cssProperty: a = n,
            themeKey: u,
            transform: c,
            style: f
        } = l;
        if (r == null) return null;
        if (u === "typography" && r === "inherit") return {
            [n]: r
        };
        const h = Bu(o, u) || {};
        return f ? f(s) : lr(s, r, v => {
            let d = _a(h, c, v);
            return v === d && typeof v == "string" && (d = _a(h, c, `${n}${v==="default"?"":hn(v)}`, v)), a === !1 ? d : {
                [a]: d
            }
        })
    }

    function t(n) {
        var r;
        const {
            sx: o,
            theme: i = {}
        } = n || {};
        if (!o) return null;
        const s = (r = i.unstable_sxConfig) != null ? r : Ip;

        function l(a) {
            let u = a;
            if (typeof a == "function") u = a(i);
            else if (typeof a != "object") return a;
            if (!u) return null;
            const c = qk(i.breakpoints),
                f = Object.keys(c);
            let h = c;
            return Object.keys(u).forEach(y => {
                const v = AP(u[y], i);
                if (v != null)
                    if (typeof v == "object")
                        if (s[y]) h = is(h, e(y, v, i, s));
                        else {
                            const d = lr({
                                theme: i
                            }, v, b => ({
                                [y]: b
                            }));
                            MP(d, v) ? h[y] = t({
                                sx: v,
                                theme: i
                            }) : h = is(h, d)
                        }
                else h = is(h, e(y, v, i, s))
            }), Gk(f, h)
        }
        return Array.isArray(o) ? o.map(l) : l(o)
    }
    return t
}
const I1 = LP();
I1.filterProps = ["sx"];
const Fp = I1,
    IP = ["breakpoints", "palette", "spacing", "shape"];

function zp(e = {}, ...t) {
    const {
        breakpoints: n = {},
        palette: r = {},
        spacing: o,
        shape: i = {}
    } = e, s = xe(e, IP), l = Wk(n), a = nP(o);
    let u = _n({
        breakpoints: l,
        direction: "ltr",
        components: {},
        palette: j({
            mode: "light"
        }, r),
        spacing: a,
        shape: j({}, Kk, i)
    }, s);
    return u = t.reduce((c, f) => _n(c, f), u), u.unstable_sxConfig = j({}, Ip, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(f) {
        return Fp({
            sx: f,
            theme: this
        })
    }, u
}

function FP(e) {
    return Object.keys(e).length === 0
}

function F1(e = null) {
    const t = E.useContext(M1);
    return !t || FP(t) ? e : t
}
const zP = zp();

function z1(e = zP) {
    return F1(e)
}
const BP = ["variant"];

function fv(e) {
    return e.length === 0
}

function B1(e) {
    const {
        variant: t
    } = e, n = xe(e, BP);
    let r = t || "";
    return Object.keys(n).sort().forEach(o => {
        o === "color" ? r += fv(r) ? e[o] : hn(e[o]) : r += `${fv(r)?o:hn(o)}${hn(e[o].toString())}`
    }), r
}
const UP = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];

function VP(e) {
    return Object.keys(e).length === 0
}

function DP(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96
}
const HP = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null,
    $a = e => {
        const t = {};
        return e && e.forEach(n => {
            const r = B1(n.props);
            t[r] = n.style
        }), t
    },
    WP = (e, t) => {
        let n = [];
        return t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants), $a(n)
    },
    Ma = (e, t, n) => {
        const {
            ownerState: r = {}
        } = e, o = [];
        return n && n.forEach(i => {
            let s = !0;
            Object.keys(i.props).forEach(l => {
                r[l] !== i.props[l] && e[l] !== i.props[l] && (s = !1)
            }), s && o.push(t[B1(i.props)])
        }), o
    },
    QP = (e, t, n, r) => {
        var o;
        const i = n == null || (o = n.components) == null || (o = o[r]) == null ? void 0 : o.variants;
        return Ma(e, t, i)
    };

function Kl(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as"
}
const KP = zp(),
    qP = e => e && e.charAt(0).toLowerCase() + e.slice(1);

function ql({
    defaultTheme: e,
    theme: t,
    themeId: n
}) {
    return VP(t) ? e : t[n] || t
}

function GP(e) {
    return e ? (t, n) => n[e] : null
}
const dv = ({
    styledArg: e,
    props: t,
    defaultTheme: n,
    themeId: r
}) => {
    const o = e(j({}, t, {
        theme: ql(j({}, t, {
            defaultTheme: n,
            themeId: r
        }))
    }));
    let i;
    if (o && o.variants && (i = o.variants, delete o.variants), i) {
        const s = Ma(t, $a(i), i);
        return [o, ...s]
    }
    return o
};

function XP(e = {}) {
    const {
        themeId: t,
        defaultTheme: n = KP,
        rootShouldForwardProp: r = Kl,
        slotShouldForwardProp: o = Kl
    } = e, i = s => Fp(j({}, s, {
        theme: ql(j({}, s, {
            defaultTheme: n,
            themeId: t
        }))
    }));
    return i.__mui_systemSx = !0, (s, l = {}) => {
        Vk(s, w => w.filter(C => !(C != null && C.__mui_systemSx)));
        const {
            name: a,
            slot: u,
            skipVariantsResolver: c,
            skipSx: f,
            overridesResolver: h = GP(qP(u))
        } = l, y = xe(l, UP), v = c !== void 0 ? c : u && u !== "Root" && u !== "root" || !1, d = f || !1;
        let b, m = Kl;
        u === "Root" || u === "root" ? m = r : u ? m = o : DP(s) && (m = void 0);
        const p = Uk(s, j({
                shouldForwardProp: m,
                label: b
            }, y)),
            g = (w, ...C) => {
                const S = C ? C.map(O => {
                    if (typeof O == "function" && O.__emotion_real !== O) return L => dv({
                        styledArg: O,
                        props: L,
                        defaultTheme: n,
                        themeId: t
                    });
                    if (wr(O)) {
                        let L = O,
                            $;
                        return O && O.variants && ($ = O.variants, delete L.variants, L = W => {
                            let U = O;
                            return Ma(W, $a($), $).forEach(I => {
                                U = _n(U, I)
                            }), U
                        }), L
                    }
                    return O
                }) : [];
                let k = w;
                if (wr(w)) {
                    let O;
                    w && w.variants && (O = w.variants, delete k.variants, k = L => {
                        let $ = w;
                        return Ma(L, $a(O), O).forEach(U => {
                            $ = _n($, U)
                        }), $
                    })
                } else typeof w == "function" && w.__emotion_real !== w && (k = O => dv({
                    styledArg: w,
                    props: O,
                    defaultTheme: n,
                    themeId: t
                }));
                a && h && S.push(O => {
                    const L = ql(j({}, O, {
                            defaultTheme: n,
                            themeId: t
                        })),
                        $ = HP(a, L);
                    if ($) {
                        const W = {};
                        return Object.entries($).forEach(([U, H]) => {
                            W[U] = typeof H == "function" ? H(j({}, O, {
                                theme: L
                            })) : H
                        }), h(O, W)
                    }
                    return null
                }), a && !v && S.push(O => {
                    const L = ql(j({}, O, {
                        defaultTheme: n,
                        themeId: t
                    }));
                    return QP(O, WP(a, L), L, a)
                }), d || S.push(i);
                const P = S.length - C.length;
                if (Array.isArray(w) && P > 0) {
                    const O = new Array(P).fill("");
                    k = [...w, ...O], k.raw = [...w.raw, ...O]
                }
                const N = p(k, ...S);
                return s.muiName && (N.muiName = s.muiName), N
            };
        return p.withConfig && (g.withConfig = p.withConfig), g
    }
}

function YP(e) {
    const {
        theme: t,
        name: n,
        props: r
    } = e;
    return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : v1(t.components[n].defaultProps, r)
}

function JP({
    props: e,
    name: t,
    defaultTheme: n,
    themeId: r
}) {
    let o = z1(n);
    return r && (o = o[r] || o), YP({
        theme: o,
        name: t,
        props: e
    })
}

function Bp(e, t = 0, n = 1) {
    return Math.min(Math.max(t, e), n)
}

function ZP(e) {
    e = e.slice(1);
    const t = new RegExp(`.{1,${e.length>=6?2:1}}`, "g");
    let n = e.match(t);
    return n && n[0].length === 1 && (n = n.map(r => r + r)), n ? `rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})` : ""
}

function po(e) {
    if (e.type) return e;
    if (e.charAt(0) === "#") return po(ZP(e));
    const t = e.indexOf("("),
        n = e.substring(0, t);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1) throw new Error(ii(9, e));
    let r = e.substring(t + 1, e.length - 1),
        o;
    if (n === "color") {
        if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1) throw new Error(ii(10, o))
    } else r = r.split(",");
    return r = r.map(i => parseFloat(i)), {
        type: n,
        values: r,
        colorSpace: o
    }
}

function Qu(e) {
    const {
        type: t,
        colorSpace: n
    } = e;
    let {
        values: r
    } = e;
    return t.indexOf("rgb") !== -1 ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`
}

function e5(e) {
    e = po(e);
    const {
        values: t
    } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, c = (u + n / 30) % 12) => o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
    let l = "rgb";
    const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
    return e.type === "hsla" && (l += "a", a.push(t[3])), Qu({
        type: l,
        values: a
    })
}

function pv(e) {
    e = po(e);
    let t = e.type === "hsl" || e.type === "hsla" ? po(e5(e)).values : e.values;
    return t = t.map(n => (e.type !== "color" && (n /= 255), n <= .03928 ? n / 12.92 : ((n + .055) / 1.055) ** 2.4)), Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3))
}

function t5(e, t) {
    const n = pv(e),
        r = pv(t);
    return (Math.max(n, r) + .05) / (Math.min(n, r) + .05)
}

function Zn(e, t) {
    return e = po(e), t = Bp(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Qu(e)
}

function n5(e, t) {
    if (e = po(e), t = Bp(t), e.type.indexOf("hsl") !== -1) e.values[2] *= 1 - t;
    else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
        for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
    return Qu(e)
}

function r5(e, t) {
    if (e = po(e), t = Bp(t), e.type.indexOf("hsl") !== -1) e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.indexOf("rgb") !== -1)
        for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
    else if (e.type.indexOf("color") !== -1)
        for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
    return Qu(e)
}
const Up = "$$material";

function o5(e, t) {
    return j({
        toolbar: {
            minHeight: 56,
            [e.up("xs")]: {
                "@media (orientation: landscape)": {
                    minHeight: 48
                }
            },
            [e.up("sm")]: {
                minHeight: 64
            }
        }
    }, t)
}
const i5 = {
        black: "#000",
        white: "#fff"
    },
    Ls = i5,
    s5 = {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
        A100: "#f5f5f5",
        A200: "#eeeeee",
        A400: "#bdbdbd",
        A700: "#616161"
    },
    l5 = s5,
    a5 = {
        50: "#f3e5f5",
        100: "#e1bee7",
        200: "#ce93d8",
        300: "#ba68c8",
        400: "#ab47bc",
        500: "#9c27b0",
        600: "#8e24aa",
        700: "#7b1fa2",
        800: "#6a1b9a",
        900: "#4a148c",
        A100: "#ea80fc",
        A200: "#e040fb",
        A400: "#d500f9",
        A700: "#aa00ff"
    },
    Eo = a5,
    u5 = {
        50: "#ffebee",
        100: "#ffcdd2",
        200: "#ef9a9a",
        300: "#e57373",
        400: "#ef5350",
        500: "#f44336",
        600: "#e53935",
        700: "#d32f2f",
        800: "#c62828",
        900: "#b71c1c",
        A100: "#ff8a80",
        A200: "#ff5252",
        A400: "#ff1744",
        A700: "#d50000"
    },
    Co = u5,
    c5 = {
        50: "#fff3e0",
        100: "#ffe0b2",
        200: "#ffcc80",
        300: "#ffb74d",
        400: "#ffa726",
        500: "#ff9800",
        600: "#fb8c00",
        700: "#f57c00",
        800: "#ef6c00",
        900: "#e65100",
        A100: "#ffd180",
        A200: "#ffab40",
        A400: "#ff9100",
        A700: "#ff6d00"
    },
    Mi = c5,
    f5 = {
        50: "#e3f2fd",
        100: "#bbdefb",
        200: "#90caf9",
        300: "#64b5f6",
        400: "#42a5f5",
        500: "#2196f3",
        600: "#1e88e5",
        700: "#1976d2",
        800: "#1565c0",
        900: "#0d47a1",
        A100: "#82b1ff",
        A200: "#448aff",
        A400: "#2979ff",
        A700: "#2962ff"
    },
    ko = f5,
    d5 = {
        50: "#e1f5fe",
        100: "#b3e5fc",
        200: "#81d4fa",
        300: "#4fc3f7",
        400: "#29b6f6",
        500: "#03a9f4",
        600: "#039be5",
        700: "#0288d1",
        800: "#0277bd",
        900: "#01579b",
        A100: "#80d8ff",
        A200: "#40c4ff",
        A400: "#00b0ff",
        A700: "#0091ea"
    },
    Po = d5,
    p5 = {
        50: "#e8f5e9",
        100: "#c8e6c9",
        200: "#a5d6a7",
        300: "#81c784",
        400: "#66bb6a",
        500: "#4caf50",
        600: "#43a047",
        700: "#388e3c",
        800: "#2e7d32",
        900: "#1b5e20",
        A100: "#b9f6ca",
        A200: "#69f0ae",
        A400: "#00e676",
        A700: "#00c853"
    },
    Oo = p5,
    h5 = ["mode", "contrastThreshold", "tonalOffset"],
    hv = {
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.6)",
            disabled: "rgba(0, 0, 0, 0.38)"
        },
        divider: "rgba(0, 0, 0, 0.12)",
        background: {
            paper: Ls.white,
            default: Ls.white
        },
        action: {
            active: "rgba(0, 0, 0, 0.54)",
            hover: "rgba(0, 0, 0, 0.04)",
            hoverOpacity: .04,
            selected: "rgba(0, 0, 0, 0.08)",
            selectedOpacity: .08,
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(0, 0, 0, 0.12)",
            disabledOpacity: .38,
            focus: "rgba(0, 0, 0, 0.12)",
            focusOpacity: .12,
            activatedOpacity: .12
        }
    },
    Ac = {
        text: {
            primary: Ls.white,
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)",
            icon: "rgba(255, 255, 255, 0.5)"
        },
        divider: "rgba(255, 255, 255, 0.12)",
        background: {
            paper: "#121212",
            default: "#121212"
        },
        action: {
            active: Ls.white,
            hover: "rgba(255, 255, 255, 0.08)",
            hoverOpacity: .08,
            selected: "rgba(255, 255, 255, 0.16)",
            selectedOpacity: .16,
            disabled: "rgba(255, 255, 255, 0.3)",
            disabledBackground: "rgba(255, 255, 255, 0.12)",
            disabledOpacity: .38,
            focus: "rgba(255, 255, 255, 0.12)",
            focusOpacity: .12,
            activatedOpacity: .24
        }
    };

function mv(e, t, n, r) {
    const o = r.light || r,
        i = r.dark || r * 1.5;
    e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = r5(e.main, o) : t === "dark" && (e.dark = n5(e.main, i)))
}

function m5(e = "light") {
    return e === "dark" ? {
        main: ko[200],
        light: ko[50],
        dark: ko[400]
    } : {
        main: ko[700],
        light: ko[400],
        dark: ko[800]
    }
}

function v5(e = "light") {
    return e === "dark" ? {
        main: Eo[200],
        light: Eo[50],
        dark: Eo[400]
    } : {
        main: Eo[500],
        light: Eo[300],
        dark: Eo[700]
    }
}

function g5(e = "light") {
    return e === "dark" ? {
        main: Co[500],
        light: Co[300],
        dark: Co[700]
    } : {
        main: Co[700],
        light: Co[400],
        dark: Co[800]
    }
}

function y5(e = "light") {
    return e === "dark" ? {
        main: Po[400],
        light: Po[300],
        dark: Po[700]
    } : {
        main: Po[700],
        light: Po[500],
        dark: Po[900]
    }
}

function x5(e = "light") {
    return e === "dark" ? {
        main: Oo[400],
        light: Oo[300],
        dark: Oo[700]
    } : {
        main: Oo[800],
        light: Oo[500],
        dark: Oo[900]
    }
}

function b5(e = "light") {
    return e === "dark" ? {
        main: Mi[400],
        light: Mi[300],
        dark: Mi[700]
    } : {
        main: "#ed6c02",
        light: Mi[500],
        dark: Mi[900]
    }
}

function w5(e) {
    const {
        mode: t = "light",
        contrastThreshold: n = 3,
        tonalOffset: r = .2
    } = e, o = xe(e, h5), i = e.primary || m5(t), s = e.secondary || v5(t), l = e.error || g5(t), a = e.info || y5(t), u = e.success || x5(t), c = e.warning || b5(t);

    function f(d) {
        return t5(d, Ac.text.primary) >= n ? Ac.text.primary : hv.text.primary
    }
    const h = ({
            color: d,
            name: b,
            mainShade: m = 500,
            lightShade: p = 300,
            darkShade: g = 700
        }) => {
            if (d = j({}, d), !d.main && d[m] && (d.main = d[m]), !d.hasOwnProperty("main")) throw new Error(ii(11, b ? ` (${b})` : "", m));
            if (typeof d.main != "string") throw new Error(ii(12, b ? ` (${b})` : "", JSON.stringify(d.main)));
            return mv(d, "light", p, r), mv(d, "dark", g, r), d.contrastText || (d.contrastText = f(d.main)), d
        },
        y = {
            dark: Ac,
            light: hv
        };
    return _n(j({
        common: j({}, Ls),
        mode: t,
        primary: h({
            color: i,
            name: "primary"
        }),
        secondary: h({
            color: s,
            name: "secondary",
            mainShade: "A400",
            lightShade: "A200",
            darkShade: "A700"
        }),
        error: h({
            color: l,
            name: "error"
        }),
        warning: h({
            color: c,
            name: "warning"
        }),
        info: h({
            color: a,
            name: "info"
        }),
        success: h({
            color: u,
            name: "success"
        }),
        grey: l5,
        contrastThreshold: n,
        getContrastText: f,
        augmentColor: h,
        tonalOffset: r
    }, y[t]), o)
}
const S5 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];

function E5(e) {
    return Math.round(e * 1e5) / 1e5
}
const vv = {
        textTransform: "uppercase"
    },
    gv = '"Roboto", "Helvetica", "Arial", sans-serif';

function C5(e, t) {
    const n = typeof t == "function" ? t(e) : t,
        {
            fontFamily: r = gv,
            fontSize: o = 14,
            fontWeightLight: i = 300,
            fontWeightRegular: s = 400,
            fontWeightMedium: l = 500,
            fontWeightBold: a = 700,
            htmlFontSize: u = 16,
            allVariants: c,
            pxToRem: f
        } = n,
        h = xe(n, S5),
        y = o / 14,
        v = f || (m => `${m/u*y}rem`),
        d = (m, p, g, w, C) => j({
            fontFamily: r,
            fontWeight: m,
            fontSize: v(p),
            lineHeight: g
        }, r === gv ? {
            letterSpacing: `${E5(w/p)}em`
        } : {}, C, c),
        b = {
            h1: d(i, 96, 1.167, -1.5),
            h2: d(i, 60, 1.2, -.5),
            h3: d(s, 48, 1.167, 0),
            h4: d(s, 34, 1.235, .25),
            h5: d(s, 24, 1.334, 0),
            h6: d(l, 20, 1.6, .15),
            subtitle1: d(s, 16, 1.75, .15),
            subtitle2: d(l, 14, 1.57, .1),
            body1: d(s, 16, 1.5, .15),
            body2: d(s, 14, 1.43, .15),
            button: d(l, 14, 1.75, .4, vv),
            caption: d(s, 12, 1.66, .4),
            overline: d(s, 12, 2.66, 1, vv),
            inherit: {
                fontFamily: "inherit",
                fontWeight: "inherit",
                fontSize: "inherit",
                lineHeight: "inherit",
                letterSpacing: "inherit"
            }
        };
    return _n(j({
        htmlFontSize: u,
        pxToRem: v,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: s,
        fontWeightMedium: l,
        fontWeightBold: a
    }, b), h, {
        clone: !1
    })
}
const k5 = .2,
    P5 = .14,
    O5 = .12;

function Fe(...e) {
    return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${k5})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${P5})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${O5})`].join(",")
}
const T5 = ["none", Fe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Fe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Fe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Fe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Fe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Fe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Fe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Fe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Fe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Fe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Fe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Fe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Fe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Fe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Fe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Fe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Fe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Fe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Fe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Fe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Fe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Fe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Fe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Fe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)],
    R5 = T5,
    j5 = ["duration", "easing", "delay"],
    N5 = {
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
    },
    _5 = {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195
    };

function yv(e) {
    return `${Math.round(e)}ms`
}

function $5(e) {
    if (!e) return 0;
    const t = e / 36;
    return Math.round((4 + 15 * t ** .25 + t / 5) * 10)
}

function M5(e) {
    const t = j({}, N5, e.easing),
        n = j({}, _5, e.duration);
    return j({
        getAutoHeightDuration: $5,
        create: (o = ["all"], i = {}) => {
            const {
                duration: s = n.standard,
                easing: l = t.easeInOut,
                delay: a = 0
            } = i;
            return xe(i, j5), (Array.isArray(o) ? o : [o]).map(u => `${u} ${typeof s=="string"?s:yv(s)} ${l} ${typeof a=="string"?a:yv(a)}`).join(",")
        }
    }, e, {
        easing: t,
        duration: n
    })
}
const A5 = {
        mobileStepper: 1e3,
        fab: 1050,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500
    },
    L5 = A5,
    I5 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];

function F5(e = {}, ...t) {
    const {
        mixins: n = {},
        palette: r = {},
        transitions: o = {},
        typography: i = {}
    } = e, s = xe(e, I5);
    if (e.vars) throw new Error(ii(18));
    const l = w5(r),
        a = zp(e);
    let u = _n(a, {
        mixins: o5(a.breakpoints, n),
        palette: l,
        shadows: R5.slice(),
        typography: C5(l, i),
        transitions: M5(o),
        zIndex: j({}, L5)
    });
    return u = _n(u, s), u = t.reduce((c, f) => _n(c, f), u), u.unstable_sxConfig = j({}, Ip, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(f) {
        return Fp({
            sx: f,
            theme: this
        })
    }, u
}

function z5(e) {
    return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || ""
}

function B5(e) {
    return parseFloat(e)
}
const U5 = F5(),
    Vp = U5;

function Ku() {
    const e = z1(Vp);
    return e[Up] || e
}

function on({
    props: e,
    name: t
}) {
    return JP({
        props: e,
        name: t,
        defaultTheme: Vp,
        themeId: Up
    })
}
const Dp = e => Kl(e) && e !== "classes",
    V5 = XP({
        themeId: Up,
        defaultTheme: Vp,
        rootShouldForwardProp: Dp
    }),
    Je = V5,
    D5 = e => {
        let t;
        return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2)
    },
    xv = D5;

function H5(e) {
    return nn("MuiSkeleton", e)
}
Ct("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
const W5 = ["animation", "className", "component", "height", "style", "variant", "width"];
let Aa = e => e,
    bv, wv, Sv, Ev;
const Q5 = e => {
        const {
            classes: t,
            variant: n,
            animation: r,
            hasChildren: o,
            width: i,
            height: s
        } = e;
        return wn({
            root: ["root", n, r, o && "withChildren", o && !i && "fitContent", o && !s && "heightAuto"]
        }, H5, t)
    },
    K5 = Gs(bv || (bv = Aa`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),
    q5 = Gs(wv || (wv = Aa`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),
    G5 = Je("span", {
        name: "MuiSkeleton",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: n
            } = e;
            return [t.root, t[n.variant], n.animation !== !1 && t[n.animation], n.hasChildren && t.withChildren, n.hasChildren && !n.width && t.fitContent, n.hasChildren && !n.height && t.heightAuto]
        }
    })(({
        theme: e,
        ownerState: t
    }) => {
        const n = z5(e.shape.borderRadius) || "px",
            r = B5(e.shape.borderRadius);
        return j({
            display: "block",
            backgroundColor: e.vars ? e.vars.palette.Skeleton.bg : Zn(e.palette.text.primary, e.palette.mode === "light" ? .11 : .13),
            height: "1.2em"
        }, t.variant === "text" && {
            marginTop: 0,
            marginBottom: 0,
            height: "auto",
            transformOrigin: "0 55%",
            transform: "scale(1, 0.60)",
            borderRadius: `${r}${n}/${Math.round(r/.6*10)/10}${n}`,
            "&:empty:before": {
                content: '"\\00a0"'
            }
        }, t.variant === "circular" && {
            borderRadius: "50%"
        }, t.variant === "rounded" && {
            borderRadius: (e.vars || e).shape.borderRadius
        }, t.hasChildren && {
            "& > *": {
                visibility: "hidden"
            }
        }, t.hasChildren && !t.width && {
            maxWidth: "fit-content"
        }, t.hasChildren && !t.height && {
            height: "auto"
        })
    }, ({
        ownerState: e
    }) => e.animation === "pulse" && td(Sv || (Sv = Aa`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `), K5), ({
        ownerState: e,
        theme: t
    }) => e.animation === "wave" && td(Ev || (Ev = Aa`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `), q5, (t.vars || t).palette.action.hover)),
    X5 = E.forwardRef(function(t, n) {
        const r = on({
                props: t,
                name: "MuiSkeleton"
            }),
            {
                animation: o = "pulse",
                className: i,
                component: s = "span",
                height: l,
                style: a,
                variant: u = "text",
                width: c
            } = r,
            f = xe(r, W5),
            h = j({}, r, {
                animation: o,
                component: s,
                variant: u,
                hasChildren: !!f.children
            }),
            y = Q5(h);
        return x.jsx(G5, j({
            as: s,
            ref: n,
            className: ke(y.root, i),
            ownerState: h
        }, f, {
            style: j({
                width: c,
                height: l
            }, a)
        }))
    }),
    Lc = X5,
    U1 = ({
        size: e
    }) => {
        const {
            isCheckedTheme: t
        } = vt();
        return x.jsx(x.Fragment, {
            children: Array.from({
                length: e
            }, (n, r) => x.jsx("div", {
                className: "w-full max-w-[17rem] sm:max-w-none mx-auto sm:mx-0",
                children: x.jsxs("div", {
                    children: [x.jsx(Lc, {
                        className: "rounded-2xl custom-transition-duration",
                        sx: {
                            bgcolor: t ? "#222222" : "#ececec"
                        },
                        variant: "rectangular",
                        animation: "wave",
                        width: "100%",
                        height: "20rem"
                    }), x.jsx(Lc, {
                        className: "mt-2 rounded-3xl custom-transition-duration",
                        sx: {
                            bgcolor: t ? "#222222" : "#ececec"
                        },
                        variant: "rectangular",
                        animation: "wave",
                        width: "100%",
                        height: "1rem"
                    }), x.jsx(Lc, {
                        className: "mt-1 rounded-3xl custom-transition-duration",
                        sx: {
                            bgcolor: t ? "#222222" : "#ececec"
                        },
                        variant: "rectangular",
                        animation: "wave",
                        width: "100%",
                        height: "1rem"
                    })]
                })
            }, r))
        })
    };

function V1(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++) e[t] && (n = V1(e[t])) && (r && (r += " "), r += n);
        else
            for (t in e) e[t] && (r && (r += " "), r += t);
    return r
}

function Pr() {
    for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = V1(e)) && (r && (r += " "), r += t);
    return r
}
const ss = e => typeof e == "number" && !isNaN(e),
    ho = e => typeof e == "string",
    It = e => typeof e == "function",
    Gl = e => ho(e) || It(e) ? e : null,
    Ic = e => E.isValidElement(e) || ho(e) || It(e) || ss(e);

function Y5(e, t, n) {
    n === void 0 && (n = 300);
    const {
        scrollHeight: r,
        style: o
    } = e;
    requestAnimationFrame(() => {
        o.minHeight = "initial", o.height = r + "px", o.transition = `all ${n}ms`, requestAnimationFrame(() => {
            o.height = "0", o.padding = "0", o.margin = "0", setTimeout(t, n)
        })
    })
}

function qu(e) {
    let {
        enter: t,
        exit: n,
        appendPosition: r = !1,
        collapse: o = !0,
        collapseDuration: i = 300
    } = e;
    return function(s) {
        let {
            children: l,
            position: a,
            preventExitTransition: u,
            done: c,
            nodeRef: f,
            isIn: h
        } = s;
        const y = r ? `${t}--${a}` : t,
            v = r ? `${n}--${a}` : n,
            d = E.useRef(0);
        return E.useLayoutEffect(() => {
            const b = f.current,
                m = y.split(" "),
                p = g => {
                    g.target === f.current && (b.dispatchEvent(new Event("d")), b.removeEventListener("animationend", p), b.removeEventListener("animationcancel", p), d.current === 0 && g.type !== "animationcancel" && b.classList.remove(...m))
                };
            b.classList.add(...m), b.addEventListener("animationend", p), b.addEventListener("animationcancel", p)
        }, []), E.useEffect(() => {
            const b = f.current,
                m = () => {
                    b.removeEventListener("animationend", m), o ? Y5(b, c, i) : c()
                };
            h || (u ? m() : (d.current = 1, b.className += ` ${v}`, b.addEventListener("animationend", m)))
        }, [h]), ne.createElement(ne.Fragment, null, l)
    }
}

function Cv(e, t) {
    return e != null ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t
    } : {}
}
const sn = {
        list: new Map,
        emitQueue: new Map,
        on(e, t) {
            return this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this
        },
        off(e, t) {
            if (t) {
                const n = this.list.get(e).filter(r => r !== t);
                return this.list.set(e, n), this
            }
            return this.list.delete(e), this
        },
        cancelEmit(e) {
            const t = this.emitQueue.get(e);
            return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this
        },
        emit(e) {
            this.list.has(e) && this.list.get(e).forEach(t => {
                const n = setTimeout(() => {
                    t(...[].slice.call(arguments, 1))
                }, 0);
                this.emitQueue.has(e) || this.emitQueue.set(e, []), this.emitQueue.get(e).push(n)
            })
        }
    },
    bl = e => {
        let {
            theme: t,
            type: n,
            ...r
        } = e;
        return ne.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "100%",
            height: "100%",
            fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
            ...r
        })
    },
    Fc = {
        info: function(e) {
            return ne.createElement(bl, {
                ...e
            }, ne.createElement("path", {
                d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
            }))
        },
        warning: function(e) {
            return ne.createElement(bl, {
                ...e
            }, ne.createElement("path", {
                d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
            }))
        },
        success: function(e) {
            return ne.createElement(bl, {
                ...e
            }, ne.createElement("path", {
                d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
            }))
        },
        error: function(e) {
            return ne.createElement(bl, {
                ...e
            }, ne.createElement("path", {
                d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
            }))
        },
        spinner: function() {
            return ne.createElement("div", {
                className: "Toastify__spinner"
            })
        }
    };

function J5(e) {
    const [, t] = E.useReducer(y => y + 1, 0), [n, r] = E.useState([]), o = E.useRef(null), i = E.useRef(new Map).current, s = y => n.indexOf(y) !== -1, l = E.useRef({
        toastKey: 1,
        displayedToast: 0,
        count: 0,
        queue: [],
        props: e,
        containerId: null,
        isToastActive: s,
        getToast: y => i.get(y)
    }).current;

    function a(y) {
        let {
            containerId: v
        } = y;
        const {
            limit: d
        } = l.props;
        !d || v && l.containerId !== v || (l.count -= l.queue.length, l.queue = [])
    }

    function u(y) {
        r(v => y == null ? [] : v.filter(d => d !== y))
    }

    function c() {
        const {
            toastContent: y,
            toastProps: v,
            staleId: d
        } = l.queue.shift();
        h(y, v, d)
    }

    function f(y, v) {
        let {
            delay: d,
            staleId: b,
            ...m
        } = v;
        if (!Ic(y) || function($) {
                return !o.current || l.props.enableMultiContainer && $.containerId !== l.props.containerId || i.has($.toastId) && $.updateId == null
            }(m)) return;
        const {
            toastId: p,
            updateId: g,
            data: w
        } = m, {
            props: C
        } = l, S = () => u(p), k = g == null;
        k && l.count++;
        const P = {
            ...C,
            style: C.toastStyle,
            key: l.toastKey++,
            ...Object.fromEntries(Object.entries(m).filter($ => {
                let [W, U] = $;
                return U != null
            })),
            toastId: p,
            updateId: g,
            data: w,
            closeToast: S,
            isIn: !1,
            className: Gl(m.className || C.toastClassName),
            bodyClassName: Gl(m.bodyClassName || C.bodyClassName),
            progressClassName: Gl(m.progressClassName || C.progressClassName),
            autoClose: !m.isLoading && (N = m.autoClose, O = C.autoClose, N === !1 || ss(N) && N > 0 ? N : O),
            deleteToast() {
                const $ = Cv(i.get(p), "removed");
                i.delete(p), sn.emit(4, $);
                const W = l.queue.length;
                if (l.count = p == null ? l.count - l.displayedToast : l.count - 1, l.count < 0 && (l.count = 0), W > 0) {
                    const U = p == null ? l.props.limit : 1;
                    if (W === 1 || U === 1) l.displayedToast++, c();
                    else {
                        const H = U > W ? W : U;
                        l.displayedToast = H;
                        for (let I = 0; I < H; I++) c()
                    }
                } else t()
            }
        };
        var N, O;
        P.iconOut = function($) {
            let {
                theme: W,
                type: U,
                isLoading: H,
                icon: I
            } = $, Q = null;
            const _ = {
                theme: W,
                type: U
            };
            return I === !1 || (It(I) ? Q = I(_) : E.isValidElement(I) ? Q = E.cloneElement(I, _) : ho(I) || ss(I) ? Q = I : H ? Q = Fc.spinner() : (T => T in Fc)(U) && (Q = Fc[U](_))), Q
        }(P), It(m.onOpen) && (P.onOpen = m.onOpen), It(m.onClose) && (P.onClose = m.onClose), P.closeButton = C.closeButton, m.closeButton === !1 || Ic(m.closeButton) ? P.closeButton = m.closeButton : m.closeButton === !0 && (P.closeButton = !Ic(C.closeButton) || C.closeButton);
        let L = y;
        E.isValidElement(y) && !ho(y.type) ? L = E.cloneElement(y, {
            closeToast: S,
            toastProps: P,
            data: w
        }) : It(y) && (L = y({
            closeToast: S,
            toastProps: P,
            data: w
        })), C.limit && C.limit > 0 && l.count > C.limit && k ? l.queue.push({
            toastContent: L,
            toastProps: P,
            staleId: b
        }) : ss(d) ? setTimeout(() => {
            h(L, P, b)
        }, d) : h(L, P, b)
    }

    function h(y, v, d) {
        const {
            toastId: b
        } = v;
        d && i.delete(d);
        const m = {
            content: y,
            props: v
        };
        i.set(b, m), r(p => [...p, b].filter(g => g !== d)), sn.emit(4, Cv(m, m.props.updateId == null ? "added" : "updated"))
    }
    return E.useEffect(() => (l.containerId = e.containerId, sn.cancelEmit(3).on(0, f).on(1, y => o.current && u(y)).on(5, a).emit(2, l), () => {
        i.clear(), sn.emit(3, l)
    }), []), E.useEffect(() => {
        l.props = e, l.isToastActive = s, l.displayedToast = n.length
    }), {
        getToastToRender: function(y) {
            const v = new Map,
                d = Array.from(i.values());
            return e.newestOnTop && d.reverse(), d.forEach(b => {
                const {
                    position: m
                } = b.props;
                v.has(m) || v.set(m, []), v.get(m).push(b)
            }), Array.from(v, b => y(b[0], b[1]))
        },
        containerRef: o,
        isToastActive: s
    }
}

function kv(e) {
    return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX
}

function Pv(e) {
    return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY
}

function Z5(e) {
    const [t, n] = E.useState(!1), [r, o] = E.useState(!1), i = E.useRef(null), s = E.useRef({
        start: 0,
        x: 0,
        y: 0,
        delta: 0,
        removalDistance: 0,
        canCloseOnClick: !0,
        canDrag: !1,
        boundingRect: null,
        didMove: !1
    }).current, l = E.useRef(e), {
        autoClose: a,
        pauseOnHover: u,
        closeToast: c,
        onClick: f,
        closeOnClick: h
    } = e;

    function y(w) {
        if (e.draggable) {
            w.nativeEvent.type === "touchstart" && w.nativeEvent.preventDefault(), s.didMove = !1, document.addEventListener("mousemove", m), document.addEventListener("mouseup", p), document.addEventListener("touchmove", m), document.addEventListener("touchend", p);
            const C = i.current;
            s.canCloseOnClick = !0, s.canDrag = !0, s.boundingRect = C.getBoundingClientRect(), C.style.transition = "", s.x = kv(w.nativeEvent), s.y = Pv(w.nativeEvent), e.draggableDirection === "x" ? (s.start = s.x, s.removalDistance = C.offsetWidth * (e.draggablePercent / 100)) : (s.start = s.y, s.removalDistance = C.offsetHeight * (e.draggablePercent === 80 ? 1.5 * e.draggablePercent : e.draggablePercent / 100))
        }
    }

    function v(w) {
        if (s.boundingRect) {
            const {
                top: C,
                bottom: S,
                left: k,
                right: P
            } = s.boundingRect;
            w.nativeEvent.type !== "touchend" && e.pauseOnHover && s.x >= k && s.x <= P && s.y >= C && s.y <= S ? b() : d()
        }
    }

    function d() {
        n(!0)
    }

    function b() {
        n(!1)
    }

    function m(w) {
        const C = i.current;
        s.canDrag && C && (s.didMove = !0, t && b(), s.x = kv(w), s.y = Pv(w), s.delta = e.draggableDirection === "x" ? s.x - s.start : s.y - s.start, s.start !== s.x && (s.canCloseOnClick = !1), C.style.transform = `translate${e.draggableDirection}(${s.delta}px)`, C.style.opacity = "" + (1 - Math.abs(s.delta / s.removalDistance)))
    }

    function p() {
        document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", p), document.removeEventListener("touchmove", m), document.removeEventListener("touchend", p);
        const w = i.current;
        if (s.canDrag && s.didMove && w) {
            if (s.canDrag = !1, Math.abs(s.delta) > s.removalDistance) return o(!0), void e.closeToast();
            w.style.transition = "transform 0.2s, opacity 0.2s", w.style.transform = `translate${e.draggableDirection}(0)`, w.style.opacity = "1"
        }
    }
    E.useEffect(() => {
        l.current = e
    }), E.useEffect(() => (i.current && i.current.addEventListener("d", d, {
        once: !0
    }), It(e.onOpen) && e.onOpen(E.isValidElement(e.children) && e.children.props), () => {
        const w = l.current;
        It(w.onClose) && w.onClose(E.isValidElement(w.children) && w.children.props)
    }), []), E.useEffect(() => (e.pauseOnFocusLoss && (document.hasFocus() || b(), window.addEventListener("focus", d), window.addEventListener("blur", b)), () => {
        e.pauseOnFocusLoss && (window.removeEventListener("focus", d), window.removeEventListener("blur", b))
    }), [e.pauseOnFocusLoss]);
    const g = {
        onMouseDown: y,
        onTouchStart: y,
        onMouseUp: v,
        onTouchEnd: v
    };
    return a && u && (g.onMouseEnter = b, g.onMouseLeave = d), h && (g.onClick = w => {
        f && f(w), s.canCloseOnClick && c()
    }), {
        playToast: d,
        pauseToast: b,
        isRunning: t,
        preventExitTransition: r,
        toastRef: i,
        eventHandlers: g
    }
}

function D1(e) {
    let {
        closeToast: t,
        theme: n,
        ariaLabel: r = "close"
    } = e;
    return ne.createElement("button", {
        className: `Toastify__close-button Toastify__close-button--${n}`,
        type: "button",
        onClick: o => {
            o.stopPropagation(), t(o)
        },
        "aria-label": r
    }, ne.createElement("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 14 16"
    }, ne.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
    })))
}

function eO(e) {
    let {
        delay: t,
        isRunning: n,
        closeToast: r,
        type: o = "default",
        hide: i,
        className: s,
        style: l,
        controlledProgress: a,
        progress: u,
        rtl: c,
        isIn: f,
        theme: h
    } = e;
    const y = i || a && u === 0,
        v = {
            ...l,
            animationDuration: `${t}ms`,
            animationPlayState: n ? "running" : "paused",
            opacity: y ? 0 : 1
        };
    a && (v.transform = `scaleX(${u})`);
    const d = Pr("Toastify__progress-bar", a ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${h}`, `Toastify__progress-bar--${o}`, {
            "Toastify__progress-bar--rtl": c
        }),
        b = It(s) ? s({
            rtl: c,
            type: o,
            defaultClassName: d
        }) : Pr(d, s);
    return ne.createElement("div", {
        role: "progressbar",
        "aria-hidden": y ? "true" : "false",
        "aria-label": "notification timer",
        className: b,
        style: v,
        [a && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: a && u < 1 ? null : () => {
            f && r()
        }
    })
}
const tO = e => {
        const {
            isRunning: t,
            preventExitTransition: n,
            toastRef: r,
            eventHandlers: o
        } = Z5(e), {
            closeButton: i,
            children: s,
            autoClose: l,
            onClick: a,
            type: u,
            hideProgressBar: c,
            closeToast: f,
            transition: h,
            position: y,
            className: v,
            style: d,
            bodyClassName: b,
            bodyStyle: m,
            progressClassName: p,
            progressStyle: g,
            updateId: w,
            role: C,
            progress: S,
            rtl: k,
            toastId: P,
            deleteToast: N,
            isIn: O,
            isLoading: L,
            iconOut: $,
            closeOnClick: W,
            theme: U
        } = e, H = Pr("Toastify__toast", `Toastify__toast-theme--${U}`, `Toastify__toast--${u}`, {
            "Toastify__toast--rtl": k
        }, {
            "Toastify__toast--close-on-click": W
        }), I = It(v) ? v({
            rtl: k,
            position: y,
            type: u,
            defaultClassName: H
        }) : Pr(H, v), Q = !!S || !l, _ = {
            closeToast: f,
            type: u,
            theme: U
        };
        let T = null;
        return i === !1 || (T = It(i) ? i(_) : E.isValidElement(i) ? E.cloneElement(i, _) : D1(_)), ne.createElement(h, {
            isIn: O,
            done: N,
            position: y,
            preventExitTransition: n,
            nodeRef: r
        }, ne.createElement("div", {
            id: P,
            onClick: a,
            className: I,
            ...o,
            style: d,
            ref: r
        }, ne.createElement("div", {
            ...O && {
                role: C
            },
            className: It(b) ? b({
                type: u
            }) : Pr("Toastify__toast-body", b),
            style: m
        }, $ != null && ne.createElement("div", {
            className: Pr("Toastify__toast-icon", {
                "Toastify--animate-icon Toastify__zoom-enter": !L
            })
        }, $), ne.createElement("div", null, s)), T, ne.createElement(eO, {
            ...w && !Q ? {
                key: `pb-${w}`
            } : {},
            rtl: k,
            theme: U,
            delay: l,
            isRunning: t,
            isIn: O,
            closeToast: f,
            hide: c,
            type: u,
            style: g,
            className: p,
            controlledProgress: Q,
            progress: S || 0
        })))
    },
    Gu = function(e, t) {
        return t === void 0 && (t = !1), {
            enter: `Toastify--animate Toastify__${e}-enter`,
            exit: `Toastify--animate Toastify__${e}-exit`,
            appendPosition: t
        }
    },
    nO = qu(Gu("bounce", !0));
qu(Gu("slide", !0));
qu(Gu("zoom"));
qu(Gu("flip"));
const rd = E.forwardRef((e, t) => {
    const {
        getToastToRender: n,
        containerRef: r,
        isToastActive: o
    } = J5(e), {
        className: i,
        style: s,
        rtl: l,
        containerId: a
    } = e;

    function u(c) {
        const f = Pr("Toastify__toast-container", `Toastify__toast-container--${c}`, {
            "Toastify__toast-container--rtl": l
        });
        return It(i) ? i({
            position: c,
            rtl: l,
            defaultClassName: f
        }) : Pr(f, Gl(i))
    }
    return E.useEffect(() => {
        t && (t.current = r.current)
    }, []), ne.createElement("div", {
        ref: r,
        className: "Toastify",
        id: a
    }, n((c, f) => {
        const h = f.length ? {
            ...s
        } : {
            ...s,
            pointerEvents: "none"
        };
        return ne.createElement("div", {
            className: u(c),
            style: h,
            key: `container-${c}`
        }, f.map((y, v) => {
            let {
                content: d,
                props: b
            } = y;
            return ne.createElement(tO, {
                ...b,
                isIn: o(b.toastId),
                style: {
                    ...b.style,
                    "--nth": v + 1,
                    "--len": f.length
                },
                key: `toast-${b.key}`
            }, d)
        }))
    }))
});
rd.displayName = "ToastContainer", rd.defaultProps = {
    position: "top-right",
    transition: nO,
    autoClose: 5e3,
    closeButton: D1,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    closeOnClick: !0,
    draggable: !0,
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light"
};
let zc, qr = new Map,
    Qi = [],
    rO = 1;

function H1() {
    return "" + rO++
}

function oO(e) {
    return e && (ho(e.toastId) || ss(e.toastId)) ? e.toastId : H1()
}

function ls(e, t) {
    return qr.size > 0 ? sn.emit(0, e, t) : Qi.push({
        content: e,
        options: t
    }), t.toastId
}

function La(e, t) {
    return {
        ...t,
        type: t && t.type || e,
        toastId: oO(t)
    }
}

function wl(e) {
    return (t, n) => ls(t, La(e, n))
}

function Ce(e, t) {
    return ls(e, La("default", t))
}
Ce.loading = (e, t) => ls(e, La("default", {
    isLoading: !0,
    autoClose: !1,
    closeOnClick: !1,
    closeButton: !1,
    draggable: !1,
    ...t
})), Ce.promise = function(e, t, n) {
    let r, {
        pending: o,
        error: i,
        success: s
    } = t;
    o && (r = ho(o) ? Ce.loading(o, n) : Ce.loading(o.render, {
        ...n,
        ...o
    }));
    const l = {
            isLoading: null,
            autoClose: null,
            closeOnClick: null,
            closeButton: null,
            draggable: null
        },
        a = (c, f, h) => {
            if (f == null) return void Ce.dismiss(r);
            const y = {
                    type: c,
                    ...l,
                    ...n,
                    data: h
                },
                v = ho(f) ? {
                    render: f
                } : f;
            return r ? Ce.update(r, {
                ...y,
                ...v
            }) : Ce(v.render, {
                ...y,
                ...v
            }), h
        },
        u = It(e) ? e() : e;
    return u.then(c => a("success", s, c)).catch(c => a("error", i, c)), u
}, Ce.success = wl("success"), Ce.info = wl("info"), Ce.error = wl("error"), Ce.warning = wl("warning"), Ce.warn = Ce.warning, Ce.dark = (e, t) => ls(e, La("default", {
    theme: "dark",
    ...t
})), Ce.dismiss = e => {
    qr.size > 0 ? sn.emit(1, e) : Qi = Qi.filter(t => e != null && t.options.toastId !== e)
}, Ce.clearWaitingQueue = function(e) {
    return e === void 0 && (e = {}), sn.emit(5, e)
}, Ce.isActive = e => {
    let t = !1;
    return qr.forEach(n => {
        n.isToastActive && n.isToastActive(e) && (t = !0)
    }), t
}, Ce.update = function(e, t) {
    t === void 0 && (t = {}), setTimeout(() => {
        const n = function(r, o) {
            let {
                containerId: i
            } = o;
            const s = qr.get(i || zc);
            return s && s.getToast(r)
        }(e, t);
        if (n) {
            const {
                props: r,
                content: o
            } = n, i = {
                delay: 100,
                ...r,
                ...t,
                toastId: t.toastId || e,
                updateId: H1()
            };
            i.toastId !== e && (i.staleId = e);
            const s = i.render || o;
            delete i.render, ls(s, i)
        }
    }, 0)
}, Ce.done = e => {
    Ce.update(e, {
        progress: 1
    })
}, Ce.onChange = e => (sn.on(4, e), () => {
    sn.off(4, e)
}), Ce.POSITION = {
    TOP_LEFT: "top-left",
    TOP_RIGHT: "top-right",
    TOP_CENTER: "top-center",
    BOTTOM_LEFT: "bottom-left",
    BOTTOM_RIGHT: "bottom-right",
    BOTTOM_CENTER: "bottom-center"
}, Ce.TYPE = {
    INFO: "info",
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error",
    DEFAULT: "default"
}, sn.on(2, e => {
    zc = e.containerId || e, qr.set(zc, e), Qi.forEach(t => {
        sn.emit(0, t.content, t.options)
    }), Qi = []
}).on(3, e => {
    qr.delete(e.containerId || e), qr.size === 0 && sn.off(0).off(1).off(5)
});
const ar = ({
        fetchCategory: e,
        type: t,
        title: n,
        description: r,
        spacing: o,
        hasSeeAll: i
    }) => {
        var C;
        const {
            isCheckedTheme: s
        } = vt(), l = Ht(), [a, u] = E.useState({
            firstParams: 1,
            secondParams: 2
        }), c = () => {
            w(!0), u(S => ({
                ...S,
                firstParams: S.firstParams + 1,
                secondParams: S.secondParams + 1
            }))
        }, f = () => {
            w(!0), u(S => ({
                ...S,
                firstParams: S.firstParams - 1,
                secondParams: S.secondParams - 1
            }))
        }, {
            data: h,
            isFetched: y,
            isError: v
        } = Ns([t === "Trending" ? "animeDataTrending1" : t === "Latest" ? "animeDataRecent1" : t === "Popular" ? "animeDataPopular1" : t === "Search" ? "animeDataSearch1" : "noKey1", a, e, t], () => Xm(e, a == null ? void 0 : a.firstParams)), {
            data: d,
            isFetched: b,
            isError: m
        } = Ns([t === "Trending" ? "animeDataTrending2" : t === "Latest" ? "animeDataRecent2" : t === "Popular" ? "animeDataPopular2" : t === "Search" ? "animeDataSearch2" : "noKey2", a, e, t], () => Xm(e, a == null ? void 0 : a.secondParams)), p = E.useMemo(() => y && b ? {
            results: ((h == null ? void 0 : h.results) || []).concat((d == null ? void 0 : d.results) || [])
        } : null, [y, b, h, d, a]), [g, w] = E.useState(!0);
        return E.useEffect(() => {
            if (w(!0), y && b && !v && !m) {
                const S = setTimeout(() => {
                    w(!1)
                }, 500);
                return () => clearTimeout(S)
            } else(v || m) && (Ce.error("The request is invalid. Please try again!"), l("/"))
        }, [y, b, a, v, m]), x.jsx("section", {
            className: `min-h-[50rem] w-full custom-transition-duration pb-20 lg:pb-0 ${s?"bg-custom-dark-1":"bg-white"}`,
            children: x.jsxs("div", {
                className: `max-w-[80%] sm:max-w-none w-10/12 mx-auto relative ${o}`,
                children: [x.jsx("h1", {
                    className: `text-4xl font-semibold text-center lg:text-left pt-10 lg:pt-0
              custom-transition-duration ${s?"text-custom-gray-4 ":"text-custom-dark-1"}`,
                    children: n
                }), x.jsxs("div", {
                    className: "flex flex-col lg:flex-row justify-between items-center border-b-2 border-custom-blue-1 pb-5 gap-x-10 mt-4 lg:mt-0",
                    children: [x.jsx("p", {
                        className: `text-base  text-center lg:text-left custom-transition-duration ${s?"text-custom-gray-1":"text-custom-dark-2"}`,
                        children: r
                    }), i ? x.jsx("button", {
                        className: `mt-4 lg:mt-[-.50rem] whitespace-nowrap active:scale-95
                    border-2 px-5 py-2 rounded-full disable-highlight custom-transition-duration
                    ${s?"hover:border-custom-blue-1 hover:text-custom-blue-1 text-custom-gray-1 border-custom-gray-1":"hover:border-custom-dark-1 hover:text-custom-dark-1 text-custom-blue-1 border-custom-blue-1"}`,
                        onClick: () => l(`/${t}`),
                        children: "See All >"
                    }) : x.jsxs("div", {
                        className: "flex gap-x-3 mt-4 lg:mt-[-.50rem]",
                        children: [x.jsx("button", {
                            className: `text-white bg-custom-dark-2 px-5 py-2 rounded-md
                        disable-highlight custom-transition-duration md:hover:bg-custom-blue-1
                        active:scale-95 whitespace-nowrap ${(a==null?void 0:a.firstParams)===1&&"opacity-30 pointer-events-none"}`,
                            onClick: f,
                            children: "← Prev"
                        }), x.jsx("button", {
                            className: `text-white bg-custom-dark-2 px-5 py-2 rounded-md
                        disable-highlight custom-transition-duration md:hover:bg-custom-blue-1
                        active:scale-95 whitespace-nowrap ${!h||!h.hasNextPage||!d||!d.hasNextPage?"opacity-30 pointer-events-none":""}`,
                            onClick: c,
                            children: "Next →"
                        })]
                    })]
                }), x.jsx("div", {
                    className: "mt-10 grid gap-x-7 gap-y-10 grid-cols-1 sm:grid-cols-2 870size:grid-cols-3 1220size:grid-cols-5 1920size:grid-cols-6",
                    children: g ? x.jsx(U1, {
                        size: 18
                    }) : (p == null ? void 0 : p.results.length) === 0 ? x.jsx("div", {
                        className: "w-full absolute",
                        children: x.jsxs("p", {
                            className: `text-base ${s?"text-custom-gray-4 ":"text-custom-dark-2"}`,
                            children: ['No data found for "', e, '".']
                        })
                    }) : (C = p == null ? void 0 : p.results) == null ? void 0 : C.map(S => x.jsx(rE, {
                        id: S == null ? void 0 : S.id,
                        title: S == null ? void 0 : S.title,
                        image: S == null ? void 0 : S.image,
                        genres: S == null ? void 0 : S.genres,
                        episodeNumber: S == null ? void 0 : S.episodeNumber,
                        releaseDate: S == null ? void 0 : S.releaseDate
                    }, S == null ? void 0 : S.id))
                }), !i && (p == null ? void 0 : p.results.length) !== 0 && x.jsxs("div", {
                    className: "flex flex-wrap justify-center md:justify-end gap-3 mt-10",
                    children: [x.jsx("button", {
                        className: `text-white bg-custom-blue-1 px-5 py-2 rounded-md
                        disable-highlight custom-transition-duration hover:bg-custom-dark-2
                        active:scale-95 whitespace-nowrap ${(a==null?void 0:a.firstParams)===1&&"opacity-30 pointer-events-none"}`,
                        onClick: f,
                        children: "← Prev"
                    }), x.jsx("button", {
                        className: `text-white bg-custom-blue-1 px-5 py-2 rounded-md
                      disable-highlight custom-transition-duration hover:bg-custom-dark-2
                      active:scale-95 whitespace-nowrap ${!h||!h.hasNextPage||!d||!d.hasNextPage?"opacity-30 pointer-events-none":""}`,
                        onClick: c,
                        children: "Next →"
                    })]
                })]
            })
        })
    },
    Vr = () => {
        const {
            isCheckedTheme: e
        } = vt();
        return x.jsx("footer", {
            className: `py-14 custom-transition-duration
        border-t-2 border-custom-blue-1
        ${e?"bg-custom-dark-1":"bg-custom-dark-2"}`,
            children: x.jsxs("div", {
                className: "max-w-[80%] sm:max-w-none w-10/12 mx-auto flex flex-col items-center",
                children: [x.jsxs("p", {
                    className: `text-xl 360size:text-3xl custom-font-moonrocks tracking-wide text-white
                disable-highlight cursor-pointer active:scale-95 custom-transition-duration`,
                    children: ["ANIME-", x.jsx("span", {
                        className: "text-xl 360size:text-3xl custom-transition-duration text-custom-blue-1",
                        children: "X"
                    })]
                }), x.jsx("p", {
                    className: "text-base text-white text-center mt-3",
                    children: "Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties."
                }), x.jsxs("p", {
                    className: "mt-3 text-base text-white",
                    children: [new Date().getFullYear(), " - Anime-x. All rights reserved."]
                })]
            })
        })
    };

function W1(e) {
    return typeof e == "string"
}

function Ki(e, t, n) {
    return e === void 0 || W1(e) ? t : j({}, t, {
        ownerState: j({}, t.ownerState, n)
    })
}
const iO = {
        disableDefaultClasses: !1
    },
    sO = E.createContext(iO);

function lO(e) {
    const {
        disableDefaultClasses: t
    } = E.useContext(sO);
    return n => t ? "" : e(n)
}

function Q1(e, t = []) {
    if (e === void 0) return {};
    const n = {};
    return Object.keys(e).filter(r => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach(r => {
        n[r] = e[r]
    }), n
}

function aO(e, t, n) {
    return typeof e == "function" ? e(t, n) : e
}

function Ov(e) {
    if (e === void 0) return {};
    const t = {};
    return Object.keys(e).filter(n => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach(n => {
        t[n] = e[n]
    }), t
}

function uO(e) {
    const {
        getSlotProps: t,
        additionalProps: n,
        externalSlotProps: r,
        externalForwardedProps: o,
        className: i
    } = e;
    if (!t) {
        const y = ke(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className),
            v = j({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style),
            d = j({}, n, o, r);
        return y.length > 0 && (d.className = y), Object.keys(v).length > 0 && (d.style = v), {
            props: d,
            internalRef: void 0
        }
    }
    const s = Q1(j({}, o, r)),
        l = Ov(r),
        a = Ov(o),
        u = t(s),
        c = ke(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className),
        f = j({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style),
        h = j({}, u, n, a, l);
    return c.length > 0 && (h.className = c), Object.keys(f).length > 0 && (h.style = f), {
        props: h,
        internalRef: u.ref
    }
}
const cO = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];

function mo(e) {
    var t;
    const {
        elementType: n,
        externalSlotProps: r,
        ownerState: o,
        skipResolvingSlotProps: i = !1
    } = e, s = xe(e, cO), l = i ? {} : aO(r, o), {
        props: a,
        internalRef: u
    } = uO(j({}, s, {
        externalSlotProps: l
    })), c = Nt(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
    return Ki(n, j({}, a, {
        ref: c
    }), o)
}
const fO = E.createContext({}),
    od = fO;

function dO(e) {
    return nn("MuiList", e)
}
Ct("MuiList", ["root", "padding", "dense", "subheader"]);
const pO = ["children", "className", "component", "dense", "disablePadding", "subheader"],
    hO = e => {
        const {
            classes: t,
            disablePadding: n,
            dense: r,
            subheader: o
        } = e;
        return wn({
            root: ["root", !n && "padding", r && "dense", o && "subheader"]
        }, dO, t)
    },
    mO = Je("ul", {
        name: "MuiList",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: n
            } = e;
            return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader]
        }
    })(({
        ownerState: e
    }) => j({
        listStyle: "none",
        margin: 0,
        padding: 0,
        position: "relative"
    }, !e.disablePadding && {
        paddingTop: 8,
        paddingBottom: 8
    }, e.subheader && {
        paddingTop: 0
    })),
    vO = E.forwardRef(function(t, n) {
        const r = on({
                props: t,
                name: "MuiList"
            }),
            {
                children: o,
                className: i,
                component: s = "ul",
                dense: l = !1,
                disablePadding: a = !1,
                subheader: u
            } = r,
            c = xe(r, pO),
            f = E.useMemo(() => ({
                dense: l
            }), [l]),
            h = j({}, r, {
                component: s,
                dense: l,
                disablePadding: a
            }),
            y = hO(h);
        return x.jsx(od.Provider, {
            value: f,
            children: x.jsxs(mO, j({
                as: s,
                className: ke(y.root, i),
                ref: n,
                ownerState: h
            }, c, {
                children: [u, o]
            }))
        })
    }),
    gO = vO,
    yO = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];

function Bc(e, t, n) {
    return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild
}

function Tv(e, t, n) {
    return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild
}

function K1(e, t) {
    if (t === void 0) return !0;
    let n = e.innerText;
    return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0
}

function Ai(e, t, n, r, o, i) {
    let s = !1,
        l = o(e, t, t ? n : !1);
    for (; l;) {
        if (l === e.firstChild) {
            if (s) return !1;
            s = !0
        }
        const a = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
        if (!l.hasAttribute("tabindex") || !K1(l, i) || a) l = o(e, l, n);
        else return l.focus(), !0
    }
    return !1
}
const xO = E.forwardRef(function(t, n) {
        const {
            actions: r,
            autoFocus: o = !1,
            autoFocusItem: i = !1,
            children: s,
            className: l,
            disabledItemsFocusable: a = !1,
            disableListWrap: u = !1,
            onKeyDown: c,
            variant: f = "selectedMenu"
        } = t, h = xe(t, yO), y = E.useRef(null), v = E.useRef({
            keys: [],
            repeating: !0,
            previousKeyMatched: !0,
            lastTime: null
        });
        Fr(() => {
            o && y.current.focus()
        }, [o]), E.useImperativeHandle(r, () => ({
            adjustStyleForScrollbar: (g, w) => {
                const C = !y.current.style.width;
                if (g.clientHeight < y.current.clientHeight && C) {
                    const S = `${m1(jt(g))}px`;
                    y.current.style[w.direction === "rtl" ? "paddingLeft" : "paddingRight"] = S, y.current.style.width = `calc(100% + ${S})`
                }
                return y.current
            }
        }), []);
        const d = g => {
                const w = y.current,
                    C = g.key,
                    S = jt(w).activeElement;
                if (C === "ArrowDown") g.preventDefault(), Ai(w, S, u, a, Bc);
                else if (C === "ArrowUp") g.preventDefault(), Ai(w, S, u, a, Tv);
                else if (C === "Home") g.preventDefault(), Ai(w, null, u, a, Bc);
                else if (C === "End") g.preventDefault(), Ai(w, null, u, a, Tv);
                else if (C.length === 1) {
                    const k = v.current,
                        P = C.toLowerCase(),
                        N = performance.now();
                    k.keys.length > 0 && (N - k.lastTime > 500 ? (k.keys = [], k.repeating = !0, k.previousKeyMatched = !0) : k.repeating && P !== k.keys[0] && (k.repeating = !1)), k.lastTime = N, k.keys.push(P);
                    const O = S && !k.repeating && K1(S, k);
                    k.previousKeyMatched && (O || Ai(w, S, !1, a, Bc, k)) ? g.preventDefault() : k.previousKeyMatched = !1
                }
                c && c(g)
            },
            b = Nt(y, n);
        let m = -1;
        E.Children.forEach(s, (g, w) => {
            if (!E.isValidElement(g)) {
                m === w && (m += 1, m >= s.length && (m = -1));
                return
            }
            g.props.disabled || (f === "selectedMenu" && g.props.selected || m === -1) && (m = w), m === w && (g.props.disabled || g.props.muiSkipListHighlight || g.type.muiSkipListHighlight) && (m += 1, m >= s.length && (m = -1))
        });
        const p = E.Children.map(s, (g, w) => {
            if (w === m) {
                const C = {};
                return i && (C.autoFocus = !0), g.props.tabIndex === void 0 && f === "selectedMenu" && (C.tabIndex = 0), E.cloneElement(g, C)
            }
            return g
        });
        return x.jsx(gO, j({
            role: "menu",
            ref: b,
            className: l,
            onKeyDown: d,
            tabIndex: o ? 0 : -1
        }, h, {
            children: p
        }))
    }),
    bO = xO,
    wO = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");

function SO(e) {
    const t = parseInt(e.getAttribute("tabindex") || "", 10);
    return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t
}

function EO(e) {
    if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
    const t = r => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
    let n = t(`[name="${e.name}"]:checked`);
    return n || (n = t(`[name="${e.name}"]`)), n !== e
}

function CO(e) {
    return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || EO(e))
}

function kO(e) {
    const t = [],
        n = [];
    return Array.from(e.querySelectorAll(wO)).forEach((r, o) => {
        const i = SO(r);
        i === -1 || !CO(r) || (i === 0 ? t.push(r) : n.push({
            documentOrder: o,
            tabIndex: i,
            node: r
        }))
    }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map(r => r.node).concat(t)
}

function PO() {
    return !0
}

function OO(e) {
    const {
        children: t,
        disableAutoFocus: n = !1,
        disableEnforceFocus: r = !1,
        disableRestoreFocus: o = !1,
        getTabbable: i = kO,
        isEnabled: s = PO,
        open: l
    } = e, a = E.useRef(!1), u = E.useRef(null), c = E.useRef(null), f = E.useRef(null), h = E.useRef(null), y = E.useRef(!1), v = E.useRef(null), d = Nt(t.ref, v), b = E.useRef(null);
    E.useEffect(() => {
        !l || !v.current || (y.current = !n)
    }, [n, l]), E.useEffect(() => {
        if (!l || !v.current) return;
        const g = jt(v.current);
        return v.current.contains(g.activeElement) || (v.current.hasAttribute("tabIndex") || v.current.setAttribute("tabIndex", "-1"), y.current && v.current.focus()), () => {
            o || (f.current && f.current.focus && (a.current = !0, f.current.focus()), f.current = null)
        }
    }, [l]), E.useEffect(() => {
        if (!l || !v.current) return;
        const g = jt(v.current),
            w = k => {
                b.current = k, !(r || !s() || k.key !== "Tab") && g.activeElement === v.current && k.shiftKey && (a.current = !0, c.current && c.current.focus())
            },
            C = () => {
                const k = v.current;
                if (k === null) return;
                if (!g.hasFocus() || !s() || a.current) {
                    a.current = !1;
                    return
                }
                if (k.contains(g.activeElement) || r && g.activeElement !== u.current && g.activeElement !== c.current) return;
                if (g.activeElement !== h.current) h.current = null;
                else if (h.current !== null) return;
                if (!y.current) return;
                let P = [];
                if ((g.activeElement === u.current || g.activeElement === c.current) && (P = i(v.current)), P.length > 0) {
                    var N, O;
                    const L = !!((N = b.current) != null && N.shiftKey && ((O = b.current) == null ? void 0 : O.key) === "Tab"),
                        $ = P[0],
                        W = P[P.length - 1];
                    typeof $ != "string" && typeof W != "string" && (L ? W.focus() : $.focus())
                } else k.focus()
            };
        g.addEventListener("focusin", C), g.addEventListener("keydown", w, !0);
        const S = setInterval(() => {
            g.activeElement && g.activeElement.tagName === "BODY" && C()
        }, 50);
        return () => {
            clearInterval(S), g.removeEventListener("focusin", C), g.removeEventListener("keydown", w, !0)
        }
    }, [n, r, o, s, l, i]);
    const m = g => {
            f.current === null && (f.current = g.relatedTarget), y.current = !0, h.current = g.target;
            const w = t.props.onFocus;
            w && w(g)
        },
        p = g => {
            f.current === null && (f.current = g.relatedTarget), y.current = !0
        };
    return x.jsxs(E.Fragment, {
        children: [x.jsx("div", {
            tabIndex: l ? 0 : -1,
            onFocus: p,
            ref: u,
            "data-testid": "sentinelStart"
        }), E.cloneElement(t, {
            ref: d,
            onFocus: m
        }), x.jsx("div", {
            tabIndex: l ? 0 : -1,
            onFocus: p,
            ref: c,
            "data-testid": "sentinelEnd"
        })]
    })
}
var Ut = "top",
    yn = "bottom",
    xn = "right",
    Vt = "left",
    Hp = "auto",
    Js = [Ut, yn, xn, Vt],
    ai = "start",
    Is = "end",
    TO = "clippingParents",
    q1 = "viewport",
    Li = "popper",
    RO = "reference",
    Rv = Js.reduce(function(e, t) {
        return e.concat([t + "-" + ai, t + "-" + Is])
    }, []),
    G1 = [].concat(Js, [Hp]).reduce(function(e, t) {
        return e.concat([t, t + "-" + ai, t + "-" + Is])
    }, []),
    jO = "beforeRead",
    NO = "read",
    _O = "afterRead",
    $O = "beforeMain",
    MO = "main",
    AO = "afterMain",
    LO = "beforeWrite",
    IO = "write",
    FO = "afterWrite",
    zO = [jO, NO, _O, $O, MO, AO, LO, IO, FO];

function Qn(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}

function Zt(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}

function vo(e) {
    var t = Zt(e).Element;
    return e instanceof t || e instanceof Element
}

function mn(e) {
    var t = Zt(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement
}

function Wp(e) {
    if (typeof ShadowRoot > "u") return !1;
    var t = Zt(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}

function BO(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
        var r = t.styles[n] || {},
            o = t.attributes[n] || {},
            i = t.elements[n];
        !mn(i) || !Qn(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
            var l = o[s];
            l === !1 ? i.removeAttribute(s) : i.setAttribute(s, l === !0 ? "" : l)
        }))
    })
}

function UO(e) {
    var t = e.state,
        n = {
            popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
            },
            arrow: {
                position: "absolute"
            },
            reference: {}
        };
    return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
        function() {
            Object.keys(t.elements).forEach(function(r) {
                var o = t.elements[r],
                    i = t.attributes[r] || {},
                    s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
                    l = s.reduce(function(a, u) {
                        return a[u] = "", a
                    }, {});
                !mn(o) || !Qn(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(a) {
                    o.removeAttribute(a)
                }))
            })
        }
}
const VO = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: BO,
    effect: UO,
    requires: ["computeStyles"]
};

function Wn(e) {
    return e.split("-")[0]
}
var so = Math.max,
    Ia = Math.min,
    ui = Math.round;

function id() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
        return t.brand + "/" + t.version
    }).join(" ") : navigator.userAgent
}

function X1() {
    return !/^((?!chrome|android).)*safari/i.test(id())
}

function ci(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    var r = e.getBoundingClientRect(),
        o = 1,
        i = 1;
    t && mn(e) && (o = e.offsetWidth > 0 && ui(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && ui(r.height) / e.offsetHeight || 1);
    var s = vo(e) ? Zt(e) : window,
        l = s.visualViewport,
        a = !X1() && n,
        u = (r.left + (a && l ? l.offsetLeft : 0)) / o,
        c = (r.top + (a && l ? l.offsetTop : 0)) / i,
        f = r.width / o,
        h = r.height / i;
    return {
        width: f,
        height: h,
        top: c,
        right: u + f,
        bottom: c + h,
        left: u,
        x: u,
        y: c
    }
}

function Qp(e) {
    var t = ci(e),
        n = e.offsetWidth,
        r = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: n,
        height: r
    }
}

function Y1(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && Wp(n)) {
        var r = t;
        do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host
        } while (r)
    }
    return !1
}

function ur(e) {
    return Zt(e).getComputedStyle(e)
}

function DO(e) {
    return ["table", "td", "th"].indexOf(Qn(e)) >= 0
}

function Dr(e) {
    return ((vo(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function Xu(e) {
    return Qn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Wp(e) ? e.host : null) || Dr(e)
}

function jv(e) {
    return !mn(e) || ur(e).position === "fixed" ? null : e.offsetParent
}

function HO(e) {
    var t = /firefox/i.test(id()),
        n = /Trident/i.test(id());
    if (n && mn(e)) {
        var r = ur(e);
        if (r.position === "fixed") return null
    }
    var o = Xu(e);
    for (Wp(o) && (o = o.host); mn(o) && ["html", "body"].indexOf(Qn(o)) < 0;) {
        var i = ur(o);
        if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none") return o;
        o = o.parentNode
    }
    return null
}

function Zs(e) {
    for (var t = Zt(e), n = jv(e); n && DO(n) && ur(n).position === "static";) n = jv(n);
    return n && (Qn(n) === "html" || Qn(n) === "body" && ur(n).position === "static") ? t : n || HO(e) || t
}

function Kp(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}

function as(e, t, n) {
    return so(e, Ia(t, n))
}

function WO(e, t, n) {
    var r = as(e, t, n);
    return r > n ? n : r
}

function J1() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
}

function Z1(e) {
    return Object.assign({}, J1(), e)
}

function ex(e, t) {
    return t.reduce(function(n, r) {
        return n[r] = e, n
    }, {})
}
var QO = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
        placement: n.placement
    })) : t, Z1(typeof t != "number" ? t : ex(t, Js))
};

function KO(e) {
    var t, n = e.state,
        r = e.name,
        o = e.options,
        i = n.elements.arrow,
        s = n.modifiersData.popperOffsets,
        l = Wn(n.placement),
        a = Kp(l),
        u = [Vt, xn].indexOf(l) >= 0,
        c = u ? "height" : "width";
    if (!(!i || !s)) {
        var f = QO(o.padding, n),
            h = Qp(i),
            y = a === "y" ? Ut : Vt,
            v = a === "y" ? yn : xn,
            d = n.rects.reference[c] + n.rects.reference[a] - s[a] - n.rects.popper[c],
            b = s[a] - n.rects.reference[a],
            m = Zs(i),
            p = m ? a === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
            g = d / 2 - b / 2,
            w = f[y],
            C = p - h[c] - f[v],
            S = p / 2 - h[c] / 2 + g,
            k = as(w, S, C),
            P = a;
        n.modifiersData[r] = (t = {}, t[P] = k, t.centerOffset = k - S, t)
    }
}

function qO(e) {
    var t = e.state,
        n = e.options,
        r = n.element,
        o = r === void 0 ? "[data-popper-arrow]" : r;
    o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Y1(t.elements.popper, o) && (t.elements.arrow = o))
}
const GO = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: KO,
    effect: qO,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
};

function fi(e) {
    return e.split("-")[1]
}
var XO = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};

function YO(e, t) {
    var n = e.x,
        r = e.y,
        o = t.devicePixelRatio || 1;
    return {
        x: ui(n * o) / o || 0,
        y: ui(r * o) / o || 0
    }
}

function Nv(e) {
    var t, n = e.popper,
        r = e.popperRect,
        o = e.placement,
        i = e.variation,
        s = e.offsets,
        l = e.position,
        a = e.gpuAcceleration,
        u = e.adaptive,
        c = e.roundOffsets,
        f = e.isFixed,
        h = s.x,
        y = h === void 0 ? 0 : h,
        v = s.y,
        d = v === void 0 ? 0 : v,
        b = typeof c == "function" ? c({
            x: y,
            y: d
        }) : {
            x: y,
            y: d
        };
    y = b.x, d = b.y;
    var m = s.hasOwnProperty("x"),
        p = s.hasOwnProperty("y"),
        g = Vt,
        w = Ut,
        C = window;
    if (u) {
        var S = Zs(n),
            k = "clientHeight",
            P = "clientWidth";
        if (S === Zt(n) && (S = Dr(n), ur(S).position !== "static" && l === "absolute" && (k = "scrollHeight", P = "scrollWidth")), S = S, o === Ut || (o === Vt || o === xn) && i === Is) {
            w = yn;
            var N = f && S === C && C.visualViewport ? C.visualViewport.height : S[k];
            d -= N - r.height, d *= a ? 1 : -1
        }
        if (o === Vt || (o === Ut || o === yn) && i === Is) {
            g = xn;
            var O = f && S === C && C.visualViewport ? C.visualViewport.width : S[P];
            y -= O - r.width, y *= a ? 1 : -1
        }
    }
    var L = Object.assign({
            position: l
        }, u && XO),
        $ = c === !0 ? YO({
            x: y,
            y: d
        }, Zt(n)) : {
            x: y,
            y: d
        };
    if (y = $.x, d = $.y, a) {
        var W;
        return Object.assign({}, L, (W = {}, W[w] = p ? "0" : "", W[g] = m ? "0" : "", W.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + d + "px)" : "translate3d(" + y + "px, " + d + "px, 0)", W))
    }
    return Object.assign({}, L, (t = {}, t[w] = p ? d + "px" : "", t[g] = m ? y + "px" : "", t.transform = "", t))
}

function JO(e) {
    var t = e.state,
        n = e.options,
        r = n.gpuAcceleration,
        o = r === void 0 ? !0 : r,
        i = n.adaptive,
        s = i === void 0 ? !0 : i,
        l = n.roundOffsets,
        a = l === void 0 ? !0 : l,
        u = {
            placement: Wn(t.placement),
            variation: fi(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: o,
            isFixed: t.options.strategy === "fixed"
        };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Nv(Object.assign({}, u, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: s,
        roundOffsets: a
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Nv(Object.assign({}, u, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: a
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
    })
}
const ZO = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: JO,
    data: {}
};
var Sl = {
    passive: !0
};

function eT(e) {
    var t = e.state,
        n = e.instance,
        r = e.options,
        o = r.scroll,
        i = o === void 0 ? !0 : o,
        s = r.resize,
        l = s === void 0 ? !0 : s,
        a = Zt(t.elements.popper),
        u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return i && u.forEach(function(c) {
            c.addEventListener("scroll", n.update, Sl)
        }), l && a.addEventListener("resize", n.update, Sl),
        function() {
            i && u.forEach(function(c) {
                c.removeEventListener("scroll", n.update, Sl)
            }), l && a.removeEventListener("resize", n.update, Sl)
        }
}
const tT = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {},
    effect: eT,
    data: {}
};
var nT = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};

function Xl(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
        return nT[t]
    })
}
var rT = {
    start: "end",
    end: "start"
};

function _v(e) {
    return e.replace(/start|end/g, function(t) {
        return rT[t]
    })
}

function qp(e) {
    var t = Zt(e),
        n = t.pageXOffset,
        r = t.pageYOffset;
    return {
        scrollLeft: n,
        scrollTop: r
    }
}

function Gp(e) {
    return ci(Dr(e)).left + qp(e).scrollLeft
}

function oT(e, t) {
    var n = Zt(e),
        r = Dr(e),
        o = n.visualViewport,
        i = r.clientWidth,
        s = r.clientHeight,
        l = 0,
        a = 0;
    if (o) {
        i = o.width, s = o.height;
        var u = X1();
        (u || !u && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: l + Gp(e),
        y: a
    }
}

function iT(e) {
    var t, n = Dr(e),
        r = qp(e),
        o = (t = e.ownerDocument) == null ? void 0 : t.body,
        i = so(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
        s = so(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
        l = -r.scrollLeft + Gp(e),
        a = -r.scrollTop;
    return ur(o || n).direction === "rtl" && (l += so(n.clientWidth, o ? o.clientWidth : 0) - i), {
        width: i,
        height: s,
        x: l,
        y: a
    }
}

function Xp(e) {
    var t = ur(e),
        n = t.overflow,
        r = t.overflowX,
        o = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + o + r)
}

function tx(e) {
    return ["html", "body", "#document"].indexOf(Qn(e)) >= 0 ? e.ownerDocument.body : mn(e) && Xp(e) ? e : tx(Xu(e))
}

function us(e, t) {
    var n;
    t === void 0 && (t = []);
    var r = tx(e),
        o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
        i = Zt(r),
        s = o ? [i].concat(i.visualViewport || [], Xp(r) ? r : []) : r,
        l = t.concat(s);
    return o ? l : l.concat(us(Xu(s)))
}

function sd(e) {
    return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height
    })
}

function sT(e, t) {
    var n = ci(e, !1, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
}

function $v(e, t, n) {
    return t === q1 ? sd(oT(e, n)) : vo(t) ? sT(t, n) : sd(iT(Dr(e)))
}

function lT(e) {
    var t = us(Xu(e)),
        n = ["absolute", "fixed"].indexOf(ur(e).position) >= 0,
        r = n && mn(e) ? Zs(e) : e;
    return vo(r) ? t.filter(function(o) {
        return vo(o) && Y1(o, r) && Qn(o) !== "body"
    }) : []
}

function aT(e, t, n, r) {
    var o = t === "clippingParents" ? lT(e) : [].concat(t),
        i = [].concat(o, [n]),
        s = i[0],
        l = i.reduce(function(a, u) {
            var c = $v(e, u, r);
            return a.top = so(c.top, a.top), a.right = Ia(c.right, a.right), a.bottom = Ia(c.bottom, a.bottom), a.left = so(c.left, a.left), a
        }, $v(e, s, r));
    return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l
}

function nx(e) {
    var t = e.reference,
        n = e.element,
        r = e.placement,
        o = r ? Wn(r) : null,
        i = r ? fi(r) : null,
        s = t.x + t.width / 2 - n.width / 2,
        l = t.y + t.height / 2 - n.height / 2,
        a;
    switch (o) {
        case Ut:
            a = {
                x: s,
                y: t.y - n.height
            };
            break;
        case yn:
            a = {
                x: s,
                y: t.y + t.height
            };
            break;
        case xn:
            a = {
                x: t.x + t.width,
                y: l
            };
            break;
        case Vt:
            a = {
                x: t.x - n.width,
                y: l
            };
            break;
        default:
            a = {
                x: t.x,
                y: t.y
            }
    }
    var u = o ? Kp(o) : null;
    if (u != null) {
        var c = u === "y" ? "height" : "width";
        switch (i) {
            case ai:
                a[u] = a[u] - (t[c] / 2 - n[c] / 2);
                break;
            case Is:
                a[u] = a[u] + (t[c] / 2 - n[c] / 2);
                break
        }
    }
    return a
}

function Fs(e, t) {
    t === void 0 && (t = {});
    var n = t,
        r = n.placement,
        o = r === void 0 ? e.placement : r,
        i = n.strategy,
        s = i === void 0 ? e.strategy : i,
        l = n.boundary,
        a = l === void 0 ? TO : l,
        u = n.rootBoundary,
        c = u === void 0 ? q1 : u,
        f = n.elementContext,
        h = f === void 0 ? Li : f,
        y = n.altBoundary,
        v = y === void 0 ? !1 : y,
        d = n.padding,
        b = d === void 0 ? 0 : d,
        m = Z1(typeof b != "number" ? b : ex(b, Js)),
        p = h === Li ? RO : Li,
        g = e.rects.popper,
        w = e.elements[v ? p : h],
        C = aT(vo(w) ? w : w.contextElement || Dr(e.elements.popper), a, c, s),
        S = ci(e.elements.reference),
        k = nx({
            reference: S,
            element: g,
            strategy: "absolute",
            placement: o
        }),
        P = sd(Object.assign({}, g, k)),
        N = h === Li ? P : S,
        O = {
            top: C.top - N.top + m.top,
            bottom: N.bottom - C.bottom + m.bottom,
            left: C.left - N.left + m.left,
            right: N.right - C.right + m.right
        },
        L = e.modifiersData.offset;
    if (h === Li && L) {
        var $ = L[o];
        Object.keys(O).forEach(function(W) {
            var U = [xn, yn].indexOf(W) >= 0 ? 1 : -1,
                H = [Ut, yn].indexOf(W) >= 0 ? "y" : "x";
            O[W] += $[H] * U
        })
    }
    return O
}

function uT(e, t) {
    t === void 0 && (t = {});
    var n = t,
        r = n.placement,
        o = n.boundary,
        i = n.rootBoundary,
        s = n.padding,
        l = n.flipVariations,
        a = n.allowedAutoPlacements,
        u = a === void 0 ? G1 : a,
        c = fi(r),
        f = c ? l ? Rv : Rv.filter(function(v) {
            return fi(v) === c
        }) : Js,
        h = f.filter(function(v) {
            return u.indexOf(v) >= 0
        });
    h.length === 0 && (h = f);
    var y = h.reduce(function(v, d) {
        return v[d] = Fs(e, {
            placement: d,
            boundary: o,
            rootBoundary: i,
            padding: s
        })[Wn(d)], v
    }, {});
    return Object.keys(y).sort(function(v, d) {
        return y[v] - y[d]
    })
}

function cT(e) {
    if (Wn(e) === Hp) return [];
    var t = Xl(e);
    return [_v(e), t, _v(t)]
}

function fT(e) {
    var t = e.state,
        n = e.options,
        r = e.name;
    if (!t.modifiersData[r]._skip) {
        for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, a = n.fallbackPlacements, u = n.padding, c = n.boundary, f = n.rootBoundary, h = n.altBoundary, y = n.flipVariations, v = y === void 0 ? !0 : y, d = n.allowedAutoPlacements, b = t.options.placement, m = Wn(b), p = m === b, g = a || (p || !v ? [Xl(b)] : cT(b)), w = [b].concat(g).reduce(function(G, J) {
                return G.concat(Wn(J) === Hp ? uT(t, {
                    placement: J,
                    boundary: c,
                    rootBoundary: f,
                    padding: u,
                    flipVariations: v,
                    allowedAutoPlacements: d
                }) : J)
            }, []), C = t.rects.reference, S = t.rects.popper, k = new Map, P = !0, N = w[0], O = 0; O < w.length; O++) {
            var L = w[O],
                $ = Wn(L),
                W = fi(L) === ai,
                U = [Ut, yn].indexOf($) >= 0,
                H = U ? "width" : "height",
                I = Fs(t, {
                    placement: L,
                    boundary: c,
                    rootBoundary: f,
                    altBoundary: h,
                    padding: u
                }),
                Q = U ? W ? xn : Vt : W ? yn : Ut;
            C[H] > S[H] && (Q = Xl(Q));
            var _ = Xl(Q),
                T = [];
            if (i && T.push(I[$] <= 0), l && T.push(I[Q] <= 0, I[_] <= 0), T.every(function(G) {
                    return G
                })) {
                N = L, P = !1;
                break
            }
            k.set(L, T)
        }
        if (P)
            for (var B = v ? 3 : 1, X = function(J) {
                    var he = w.find(function(je) {
                        var fe = k.get(je);
                        if (fe) return fe.slice(0, J).every(function(ye) {
                            return ye
                        })
                    });
                    if (he) return N = he, "break"
                }, q = B; q > 0; q--) {
                var re = X(q);
                if (re === "break") break
            }
        t.placement !== N && (t.modifiersData[r]._skip = !0, t.placement = N, t.reset = !0)
    }
}
const dT = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: fT,
    requiresIfExists: ["offset"],
    data: {
        _skip: !1
    }
};

function Mv(e, t, n) {
    return n === void 0 && (n = {
        x: 0,
        y: 0
    }), {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x
    }
}

function Av(e) {
    return [Ut, xn, yn, Vt].some(function(t) {
        return e[t] >= 0
    })
}

function pT(e) {
    var t = e.state,
        n = e.name,
        r = t.rects.reference,
        o = t.rects.popper,
        i = t.modifiersData.preventOverflow,
        s = Fs(t, {
            elementContext: "reference"
        }),
        l = Fs(t, {
            altBoundary: !0
        }),
        a = Mv(s, r),
        u = Mv(l, o, i),
        c = Av(a),
        f = Av(u);
    t.modifiersData[n] = {
        referenceClippingOffsets: a,
        popperEscapeOffsets: u,
        isReferenceHidden: c,
        hasPopperEscaped: f
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": c,
        "data-popper-escaped": f
    })
}
const hT = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: pT
};

function mT(e, t, n) {
    var r = Wn(e),
        o = [Vt, Ut].indexOf(r) >= 0 ? -1 : 1,
        i = typeof n == "function" ? n(Object.assign({}, t, {
            placement: e
        })) : n,
        s = i[0],
        l = i[1];
    return s = s || 0, l = (l || 0) * o, [Vt, xn].indexOf(r) >= 0 ? {
        x: l,
        y: s
    } : {
        x: s,
        y: l
    }
}

function vT(e) {
    var t = e.state,
        n = e.options,
        r = e.name,
        o = n.offset,
        i = o === void 0 ? [0, 0] : o,
        s = G1.reduce(function(c, f) {
            return c[f] = mT(f, t.rects, i), c
        }, {}),
        l = s[t.placement],
        a = l.x,
        u = l.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s
}
const gT = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: vT
};

function yT(e) {
    var t = e.state,
        n = e.name;
    t.modifiersData[n] = nx({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
    })
}
const xT = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: yT,
    data: {}
};

function bT(e) {
    return e === "x" ? "y" : "x"
}

function wT(e) {
    var t = e.state,
        n = e.options,
        r = e.name,
        o = n.mainAxis,
        i = o === void 0 ? !0 : o,
        s = n.altAxis,
        l = s === void 0 ? !1 : s,
        a = n.boundary,
        u = n.rootBoundary,
        c = n.altBoundary,
        f = n.padding,
        h = n.tether,
        y = h === void 0 ? !0 : h,
        v = n.tetherOffset,
        d = v === void 0 ? 0 : v,
        b = Fs(t, {
            boundary: a,
            rootBoundary: u,
            padding: f,
            altBoundary: c
        }),
        m = Wn(t.placement),
        p = fi(t.placement),
        g = !p,
        w = Kp(m),
        C = bT(w),
        S = t.modifiersData.popperOffsets,
        k = t.rects.reference,
        P = t.rects.popper,
        N = typeof d == "function" ? d(Object.assign({}, t.rects, {
            placement: t.placement
        })) : d,
        O = typeof N == "number" ? {
            mainAxis: N,
            altAxis: N
        } : Object.assign({
            mainAxis: 0,
            altAxis: 0
        }, N),
        L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
        $ = {
            x: 0,
            y: 0
        };
    if (S) {
        if (i) {
            var W, U = w === "y" ? Ut : Vt,
                H = w === "y" ? yn : xn,
                I = w === "y" ? "height" : "width",
                Q = S[w],
                _ = Q + b[U],
                T = Q - b[H],
                B = y ? -P[I] / 2 : 0,
                X = p === ai ? k[I] : P[I],
                q = p === ai ? -P[I] : -k[I],
                re = t.elements.arrow,
                G = y && re ? Qp(re) : {
                    width: 0,
                    height: 0
                },
                J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : J1(),
                he = J[U],
                je = J[H],
                fe = as(0, k[I], G[I]),
                ye = g ? k[I] / 2 - B - fe - he - O.mainAxis : X - fe - he - O.mainAxis,
                Be = g ? -k[I] / 2 + B + fe + je + O.mainAxis : q + fe + je + O.mainAxis,
                me = t.elements.arrow && Zs(t.elements.arrow),
                Ie = me ? w === "y" ? me.clientTop || 0 : me.clientLeft || 0 : 0,
                oe = (W = L == null ? void 0 : L[w]) != null ? W : 0,
                Se = Q + ye - oe - Ie,
                ve = Q + Be - oe,
                Wt = as(y ? Ia(_, Se) : _, Q, y ? so(T, ve) : T);
            S[w] = Wt, $[w] = Wt - Q
        }
        if (l) {
            var gt, rt = w === "x" ? Ut : Vt,
                En = w === "x" ? yn : xn,
                Ue = S[C],
                kt = C === "y" ? "height" : "width",
                Pt = Ue + b[rt],
                Ot = Ue - b[En],
                Ee = [Ut, Vt].indexOf(m) !== -1,
                ft = (gt = L == null ? void 0 : L[C]) != null ? gt : 0,
                Mt = Ee ? Pt : Ue - k[kt] - P[kt] - ft + O.altAxis,
                V = Ee ? Ue + k[kt] + P[kt] - ft - O.altAxis : Ot,
                R = y && Ee ? WO(Mt, Ue, V) : as(y ? Mt : Pt, Ue, y ? V : Ot);
            S[C] = R, $[C] = R - Ue
        }
        t.modifiersData[r] = $
    }
}
const ST = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: wT,
    requiresIfExists: ["offset"]
};

function ET(e) {
    return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    }
}

function CT(e) {
    return e === Zt(e) || !mn(e) ? qp(e) : ET(e)
}

function kT(e) {
    var t = e.getBoundingClientRect(),
        n = ui(t.width) / e.offsetWidth || 1,
        r = ui(t.height) / e.offsetHeight || 1;
    return n !== 1 || r !== 1
}

function PT(e, t, n) {
    n === void 0 && (n = !1);
    var r = mn(t),
        o = mn(t) && kT(t),
        i = Dr(t),
        s = ci(e, o, n),
        l = {
            scrollLeft: 0,
            scrollTop: 0
        },
        a = {
            x: 0,
            y: 0
        };
    return (r || !r && !n) && ((Qn(t) !== "body" || Xp(i)) && (l = CT(t)), mn(t) ? (a = ci(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = Gp(i))), {
        x: s.left + l.scrollLeft - a.x,
        y: s.top + l.scrollTop - a.y,
        width: s.width,
        height: s.height
    }
}

function OT(e) {
    var t = new Map,
        n = new Set,
        r = [];
    e.forEach(function(i) {
        t.set(i.name, i)
    });

    function o(i) {
        n.add(i.name);
        var s = [].concat(i.requires || [], i.requiresIfExists || []);
        s.forEach(function(l) {
            if (!n.has(l)) {
                var a = t.get(l);
                a && o(a)
            }
        }), r.push(i)
    }
    return e.forEach(function(i) {
        n.has(i.name) || o(i)
    }), r
}

function TT(e) {
    var t = OT(e);
    return zO.reduce(function(n, r) {
        return n.concat(t.filter(function(o) {
            return o.phase === r
        }))
    }, [])
}

function RT(e) {
    var t;
    return function() {
        return t || (t = new Promise(function(n) {
            Promise.resolve().then(function() {
                t = void 0, n(e())
            })
        })), t
    }
}

function jT(e) {
    var t = e.reduce(function(n, r) {
        var o = n[r.name];
        return n[r.name] = o ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data)
        }) : r, n
    }, {});
    return Object.keys(t).map(function(n) {
        return t[n]
    })
}
var Lv = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};

function Iv() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function(r) {
        return !(r && typeof r.getBoundingClientRect == "function")
    })
}

function NT(e) {
    e === void 0 && (e = {});
    var t = e,
        n = t.defaultModifiers,
        r = n === void 0 ? [] : n,
        o = t.defaultOptions,
        i = o === void 0 ? Lv : o;
    return function(l, a, u) {
        u === void 0 && (u = i);
        var c = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Lv, i),
                modifiersData: {},
                elements: {
                    reference: l,
                    popper: a
                },
                attributes: {},
                styles: {}
            },
            f = [],
            h = !1,
            y = {
                state: c,
                setOptions: function(m) {
                    var p = typeof m == "function" ? m(c.options) : m;
                    d(), c.options = Object.assign({}, i, c.options, p), c.scrollParents = {
                        reference: vo(l) ? us(l) : l.contextElement ? us(l.contextElement) : [],
                        popper: us(a)
                    };
                    var g = TT(jT([].concat(r, c.options.modifiers)));
                    return c.orderedModifiers = g.filter(function(w) {
                        return w.enabled
                    }), v(), y.update()
                },
                forceUpdate: function() {
                    if (!h) {
                        var m = c.elements,
                            p = m.reference,
                            g = m.popper;
                        if (Iv(p, g)) {
                            c.rects = {
                                reference: PT(p, Zs(g), c.options.strategy === "fixed"),
                                popper: Qp(g)
                            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(O) {
                                return c.modifiersData[O.name] = Object.assign({}, O.data)
                            });
                            for (var w = 0; w < c.orderedModifiers.length; w++) {
                                if (c.reset === !0) {
                                    c.reset = !1, w = -1;
                                    continue
                                }
                                var C = c.orderedModifiers[w],
                                    S = C.fn,
                                    k = C.options,
                                    P = k === void 0 ? {} : k,
                                    N = C.name;
                                typeof S == "function" && (c = S({
                                    state: c,
                                    options: P,
                                    name: N,
                                    instance: y
                                }) || c)
                            }
                        }
                    }
                },
                update: RT(function() {
                    return new Promise(function(b) {
                        y.forceUpdate(), b(c)
                    })
                }),
                destroy: function() {
                    d(), h = !0
                }
            };
        if (!Iv(l, a)) return y;
        y.setOptions(u).then(function(b) {
            !h && u.onFirstUpdate && u.onFirstUpdate(b)
        });

        function v() {
            c.orderedModifiers.forEach(function(b) {
                var m = b.name,
                    p = b.options,
                    g = p === void 0 ? {} : p,
                    w = b.effect;
                if (typeof w == "function") {
                    var C = w({
                            state: c,
                            name: m,
                            instance: y,
                            options: g
                        }),
                        S = function() {};
                    f.push(C || S)
                }
            })
        }

        function d() {
            f.forEach(function(b) {
                return b()
            }), f = []
        }
        return y
    }
}
var _T = [tT, xT, ZO, VO, gT, dT, ST, GO, hT],
    $T = NT({
        defaultModifiers: _T
    });

function MT(e) {
    return typeof e == "function" ? e() : e
}
const rx = E.forwardRef(function(t, n) {
    const {
        children: r,
        container: o,
        disablePortal: i = !1
    } = t, [s, l] = E.useState(null), a = Nt(E.isValidElement(r) ? r.ref : null, n);
    if (Fr(() => {
            i || l(MT(o) || document.body)
        }, [o, i]), Fr(() => {
            if (s && !i) return ja(n, s), () => {
                ja(n, null)
            }
        }, [n, s, i]), i) {
        if (E.isValidElement(r)) {
            const u = {
                ref: a
            };
            return E.cloneElement(r, u)
        }
        return x.jsx(E.Fragment, {
            children: r
        })
    }
    return x.jsx(E.Fragment, {
        children: s && ru.createPortal(r, s)
    })
});

function AT(e) {
    return nn("MuiPopper", e)
}
Ct("MuiPopper", ["root"]);
const LT = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"],
    IT = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];

function FT(e, t) {
    if (t === "ltr") return e;
    switch (e) {
        case "bottom-end":
            return "bottom-start";
        case "bottom-start":
            return "bottom-end";
        case "top-end":
            return "top-start";
        case "top-start":
            return "top-end";
        default:
            return e
    }
}

function ld(e) {
    return typeof e == "function" ? e() : e
}

function zT(e) {
    return e.nodeType !== void 0
}
const BT = () => wn({
        root: ["root"]
    }, lO(AT)),
    UT = {},
    VT = E.forwardRef(function(t, n) {
        var r;
        const {
            anchorEl: o,
            children: i,
            direction: s,
            disablePortal: l,
            modifiers: a,
            open: u,
            placement: c,
            popperOptions: f,
            popperRef: h,
            slotProps: y = {},
            slots: v = {},
            TransitionProps: d
        } = t, b = xe(t, LT), m = E.useRef(null), p = Nt(m, n), g = E.useRef(null), w = Nt(g, h), C = E.useRef(w);
        Fr(() => {
            C.current = w
        }, [w]), E.useImperativeHandle(h, () => g.current, []);
        const S = FT(c, s),
            [k, P] = E.useState(S),
            [N, O] = E.useState(ld(o));
        E.useEffect(() => {
            g.current && g.current.forceUpdate()
        }), E.useEffect(() => {
            o && O(ld(o))
        }, [o]), Fr(() => {
            if (!N || !u) return;
            const H = _ => {
                P(_.placement)
            };
            let I = [{
                name: "preventOverflow",
                options: {
                    altBoundary: l
                }
            }, {
                name: "flip",
                options: {
                    altBoundary: l
                }
            }, {
                name: "onUpdate",
                enabled: !0,
                phase: "afterWrite",
                fn: ({
                    state: _
                }) => {
                    H(_)
                }
            }];
            a != null && (I = I.concat(a)), f && f.modifiers != null && (I = I.concat(f.modifiers));
            const Q = $T(N, m.current, j({
                placement: S
            }, f, {
                modifiers: I
            }));
            return C.current(Q), () => {
                Q.destroy(), C.current(null)
            }
        }, [N, l, a, u, f, S]);
        const L = {
            placement: k
        };
        d !== null && (L.TransitionProps = d);
        const $ = BT(),
            W = (r = v.root) != null ? r : "div",
            U = mo({
                elementType: W,
                externalSlotProps: y.root,
                externalForwardedProps: b,
                additionalProps: {
                    role: "tooltip",
                    ref: p
                },
                ownerState: t,
                className: $.root
            });
        return x.jsx(W, j({}, U, {
            children: typeof i == "function" ? i(L) : i
        }))
    }),
    DT = E.forwardRef(function(t, n) {
        const {
            anchorEl: r,
            children: o,
            container: i,
            direction: s = "ltr",
            disablePortal: l = !1,
            keepMounted: a = !1,
            modifiers: u,
            open: c,
            placement: f = "bottom",
            popperOptions: h = UT,
            popperRef: y,
            style: v,
            transition: d = !1,
            slotProps: b = {},
            slots: m = {}
        } = t, p = xe(t, IT), [g, w] = E.useState(!0), C = () => {
            w(!1)
        }, S = () => {
            w(!0)
        };
        if (!a && !c && (!d || g)) return null;
        let k;
        if (i) k = i;
        else if (r) {
            const O = ld(r);
            k = O && zT(O) ? jt(O).body : jt(null).body
        }
        const P = !c && a && (!d || g) ? "none" : void 0,
            N = d ? {
                in: c,
                onEnter: C,
                onExited: S
            } : void 0;
        return x.jsx(rx, {
            disablePortal: l,
            container: k,
            children: x.jsx(VT, j({
                anchorEl: r,
                direction: s,
                disablePortal: l,
                modifiers: u,
                ref: n,
                open: d ? !g : c,
                placement: f,
                popperOptions: h,
                popperRef: y,
                slotProps: b,
                slots: m
            }, p, {
                style: j({
                    position: "fixed",
                    top: 0,
                    left: 0,
                    display: P
                }, v),
                TransitionProps: N,
                children: o
            }))
        })
    });

function HT(e) {
    const t = jt(e);
    return t.body === e ? si(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight
}

function cs(e, t) {
    t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden")
}

function Fv(e) {
    return parseInt(si(e).getComputedStyle(e).paddingRight, 10) || 0
}

function WT(e) {
    const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1,
        r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
    return n || r
}

function zv(e, t, n, r, o) {
    const i = [t, n, ...r];
    [].forEach.call(e.children, s => {
        const l = i.indexOf(s) === -1,
            a = !WT(s);
        l && a && cs(s, o)
    })
}

function Uc(e, t) {
    let n = -1;
    return e.some((r, o) => t(r) ? (n = o, !0) : !1), n
}

function QT(e, t) {
    const n = [],
        r = e.container;
    if (!t.disableScrollLock) {
        if (HT(r)) {
            const s = m1(jt(r));
            n.push({
                value: r.style.paddingRight,
                property: "padding-right",
                el: r
            }), r.style.paddingRight = `${Fv(r)+s}px`;
            const l = jt(r).querySelectorAll(".mui-fixed");
            [].forEach.call(l, a => {
                n.push({
                    value: a.style.paddingRight,
                    property: "padding-right",
                    el: a
                }), a.style.paddingRight = `${Fv(a)+s}px`
            })
        }
        let i;
        if (r.parentNode instanceof DocumentFragment) i = jt(r).body;
        else {
            const s = r.parentElement,
                l = si(r);
            i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r
        }
        n.push({
            value: i.style.overflow,
            property: "overflow",
            el: i
        }, {
            value: i.style.overflowX,
            property: "overflow-x",
            el: i
        }, {
            value: i.style.overflowY,
            property: "overflow-y",
            el: i
        }), i.style.overflow = "hidden"
    }
    return () => {
        n.forEach(({
            value: i,
            el: s,
            property: l
        }) => {
            i ? s.style.setProperty(l, i) : s.style.removeProperty(l)
        })
    }
}

function KT(e) {
    const t = [];
    return [].forEach.call(e.children, n => {
        n.getAttribute("aria-hidden") === "true" && t.push(n)
    }), t
}
class qT {
    constructor() {
        this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = []
    }
    add(t, n) {
        let r = this.modals.indexOf(t);
        if (r !== -1) return r;
        r = this.modals.length, this.modals.push(t), t.modalRef && cs(t.modalRef, !1);
        const o = KT(n);
        zv(n, t.mount, t.modalRef, o, !0);
        const i = Uc(this.containers, s => s.container === n);
        return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
            modals: [t],
            container: n,
            restore: null,
            hiddenSiblings: o
        }), r)
    }
    mount(t, n) {
        const r = Uc(this.containers, i => i.modals.indexOf(t) !== -1),
            o = this.containers[r];
        o.restore || (o.restore = QT(o, n))
    }
    remove(t, n = !0) {
        const r = this.modals.indexOf(t);
        if (r === -1) return r;
        const o = Uc(this.containers, s => s.modals.indexOf(t) !== -1),
            i = this.containers[o];
        if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0) i.restore && i.restore(), t.modalRef && cs(t.modalRef, n), zv(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
        else {
            const s = i.modals[i.modals.length - 1];
            s.modalRef && cs(s.modalRef, !1)
        }
        return r
    }
    isTopModal(t) {
        return this.modals.length > 0 && this.modals[this.modals.length - 1] === t
    }
}

function GT(e) {
    return typeof e == "function" ? e() : e
}

function XT(e) {
    return e ? e.props.hasOwnProperty("in") : !1
}
const YT = new qT;

function JT(e) {
    const {
        container: t,
        disableEscapeKeyDown: n = !1,
        disableScrollLock: r = !1,
        manager: o = YT,
        closeAfterTransition: i = !1,
        onTransitionEnter: s,
        onTransitionExited: l,
        children: a,
        onClose: u,
        open: c,
        rootRef: f
    } = e, h = E.useRef({}), y = E.useRef(null), v = E.useRef(null), d = Nt(v, f), [b, m] = E.useState(!c), p = XT(a);
    let g = !0;
    (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (g = !1);
    const w = () => jt(y.current),
        C = () => (h.current.modalRef = v.current, h.current.mount = y.current, h.current),
        S = () => {
            o.mount(C(), {
                disableScrollLock: r
            }), v.current && (v.current.scrollTop = 0)
        },
        k = kr(() => {
            const I = GT(t) || w().body;
            o.add(C(), I), v.current && S()
        }),
        P = E.useCallback(() => o.isTopModal(C()), [o]),
        N = kr(I => {
            y.current = I, I && (c && P() ? S() : v.current && cs(v.current, g))
        }),
        O = E.useCallback(() => {
            o.remove(C(), g)
        }, [g, o]);
    E.useEffect(() => () => {
        O()
    }, [O]), E.useEffect(() => {
        c ? k() : (!p || !i) && O()
    }, [c, O, p, i, k]);
    const L = I => Q => {
            var _;
            (_ = I.onKeyDown) == null || _.call(I, Q), !(Q.key !== "Escape" || Q.which === 229 || !P()) && (n || (Q.stopPropagation(), u && u(Q, "escapeKeyDown")))
        },
        $ = I => Q => {
            var _;
            (_ = I.onClick) == null || _.call(I, Q), Q.target === Q.currentTarget && u && u(Q, "backdropClick")
        };
    return {
        getRootProps: (I = {}) => {
            const Q = Q1(e);
            delete Q.onTransitionEnter, delete Q.onTransitionExited;
            const _ = j({}, Q, I);
            return j({
                role: "presentation"
            }, _, {
                onKeyDown: L(_),
                ref: d
            })
        },
        getBackdropProps: (I = {}) => {
            const Q = I;
            return j({
                "aria-hidden": !0
            }, Q, {
                onClick: $(Q),
                open: c
            })
        },
        getTransitionProps: () => {
            const I = () => {
                    m(!1), s && s()
                },
                Q = () => {
                    m(!0), l && l(), i && O()
                };
            return {
                onEnter: Yf(I, a == null ? void 0 : a.props.onEnter),
                onExited: Yf(Q, a == null ? void 0 : a.props.onExited)
            }
        },
        rootRef: d,
        portalRef: N,
        isTopModal: P,
        exited: b,
        hasTransition: p
    }
}
const Bv = {
        disabled: !1
    },
    Fa = ne.createContext(null);
var ZT = function(t) {
        return t.scrollTop
    },
    qi = "unmounted",
    Gr = "exited",
    Xr = "entering",
    Ro = "entered",
    ad = "exiting",
    fr = function(e) {
        bo(t, e);

        function t(r, o) {
            var i;
            i = e.call(this, r, o) || this;
            var s = o,
                l = s && !s.isMounting ? r.enter : r.appear,
                a;
            return i.appearStatus = null, r.in ? l ? (a = Gr, i.appearStatus = Xr) : a = Ro : r.unmountOnExit || r.mountOnEnter ? a = qi : a = Gr, i.state = {
                status: a
            }, i.nextCallback = null, i
        }
        t.getDerivedStateFromProps = function(o, i) {
            var s = o.in;
            return s && i.status === qi ? {
                status: Gr
            } : null
        };
        var n = t.prototype;
        return n.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus)
        }, n.componentDidUpdate = function(o) {
            var i = null;
            if (o !== this.props) {
                var s = this.state.status;
                this.props.in ? s !== Xr && s !== Ro && (i = Xr) : (s === Xr || s === Ro) && (i = ad)
            }
            this.updateStatus(!1, i)
        }, n.componentWillUnmount = function() {
            this.cancelNextCallback()
        }, n.getTimeouts = function() {
            var o = this.props.timeout,
                i, s, l;
            return i = s = l = o, o != null && typeof o != "number" && (i = o.exit, s = o.enter, l = o.appear !== void 0 ? o.appear : s), {
                exit: i,
                enter: s,
                appear: l
            }
        }, n.updateStatus = function(o, i) {
            if (o === void 0 && (o = !1), i !== null)
                if (this.cancelNextCallback(), i === Xr) {
                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                        var s = this.props.nodeRef ? this.props.nodeRef.current : Wi.findDOMNode(this);
                        s && ZT(s)
                    }
                    this.performEnter(o)
                } else this.performExit();
            else this.props.unmountOnExit && this.state.status === Gr && this.setState({
                status: qi
            })
        }, n.performEnter = function(o) {
            var i = this,
                s = this.props.enter,
                l = this.context ? this.context.isMounting : o,
                a = this.props.nodeRef ? [l] : [Wi.findDOMNode(this), l],
                u = a[0],
                c = a[1],
                f = this.getTimeouts(),
                h = l ? f.appear : f.enter;
            if (!o && !s || Bv.disabled) {
                this.safeSetState({
                    status: Ro
                }, function() {
                    i.props.onEntered(u)
                });
                return
            }
            this.props.onEnter(u, c), this.safeSetState({
                status: Xr
            }, function() {
                i.props.onEntering(u, c), i.onTransitionEnd(h, function() {
                    i.safeSetState({
                        status: Ro
                    }, function() {
                        i.props.onEntered(u, c)
                    })
                })
            })
        }, n.performExit = function() {
            var o = this,
                i = this.props.exit,
                s = this.getTimeouts(),
                l = this.props.nodeRef ? void 0 : Wi.findDOMNode(this);
            if (!i || Bv.disabled) {
                this.safeSetState({
                    status: Gr
                }, function() {
                    o.props.onExited(l)
                });
                return
            }
            this.props.onExit(l), this.safeSetState({
                status: ad
            }, function() {
                o.props.onExiting(l), o.onTransitionEnd(s.exit, function() {
                    o.safeSetState({
                        status: Gr
                    }, function() {
                        o.props.onExited(l)
                    })
                })
            })
        }, n.cancelNextCallback = function() {
            this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null)
        }, n.safeSetState = function(o, i) {
            i = this.setNextCallback(i), this.setState(o, i)
        }, n.setNextCallback = function(o) {
            var i = this,
                s = !0;
            return this.nextCallback = function(l) {
                s && (s = !1, i.nextCallback = null, o(l))
            }, this.nextCallback.cancel = function() {
                s = !1
            }, this.nextCallback
        }, n.onTransitionEnd = function(o, i) {
            this.setNextCallback(i);
            var s = this.props.nodeRef ? this.props.nodeRef.current : Wi.findDOMNode(this),
                l = o == null && !this.props.addEndListener;
            if (!s || l) {
                setTimeout(this.nextCallback, 0);
                return
            }
            if (this.props.addEndListener) {
                var a = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback],
                    u = a[0],
                    c = a[1];
                this.props.addEndListener(u, c)
            }
            o != null && setTimeout(this.nextCallback, o)
        }, n.render = function() {
            var o = this.state.status;
            if (o === qi) return null;
            var i = this.props,
                s = i.children;
            i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
            var l = xe(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
            return ne.createElement(Fa.Provider, {
                value: null
            }, typeof s == "function" ? s(o, l) : ne.cloneElement(ne.Children.only(s), l))
        }, t
    }(ne.Component);
fr.contextType = Fa;
fr.propTypes = {};

function To() {}
fr.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: To,
    onEntering: To,
    onEntered: To,
    onExit: To,
    onExiting: To,
    onExited: To
};
fr.UNMOUNTED = qi;
fr.EXITED = Gr;
fr.ENTERING = Xr;
fr.ENTERED = Ro;
fr.EXITING = ad;
const ox = fr;

function e3(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Yp(e, t) {
    var n = function(i) {
            return t && E.isValidElement(i) ? t(i) : i
        },
        r = Object.create(null);
    return e && E.Children.map(e, function(o) {
        return o
    }).forEach(function(o) {
        r[o.key] = n(o)
    }), r
}

function t3(e, t) {
    e = e || {}, t = t || {};

    function n(c) {
        return c in t ? t[c] : e[c]
    }
    var r = Object.create(null),
        o = [];
    for (var i in e) i in t ? o.length && (r[i] = o, o = []) : o.push(i);
    var s, l = {};
    for (var a in t) {
        if (r[a])
            for (s = 0; s < r[a].length; s++) {
                var u = r[a][s];
                l[r[a][s]] = n(u)
            }
        l[a] = n(a)
    }
    for (s = 0; s < o.length; s++) l[o[s]] = n(o[s]);
    return l
}

function to(e, t, n) {
    return n[t] != null ? n[t] : e.props[t]
}

function n3(e, t) {
    return Yp(e.children, function(n) {
        return E.cloneElement(n, {
            onExited: t.bind(null, n),
            in: !0,
            appear: to(n, "appear", e),
            enter: to(n, "enter", e),
            exit: to(n, "exit", e)
        })
    })
}

function r3(e, t, n) {
    var r = Yp(e.children),
        o = t3(t, r);
    return Object.keys(o).forEach(function(i) {
        var s = o[i];
        if (E.isValidElement(s)) {
            var l = i in t,
                a = i in r,
                u = t[i],
                c = E.isValidElement(u) && !u.props.in;
            a && (!l || c) ? o[i] = E.cloneElement(s, {
                onExited: n.bind(null, s),
                in: !0,
                exit: to(s, "exit", e),
                enter: to(s, "enter", e)
            }) : !a && l && !c ? o[i] = E.cloneElement(s, {
                in: !1
            }) : a && l && E.isValidElement(u) && (o[i] = E.cloneElement(s, {
                onExited: n.bind(null, s),
                in: u.props.in,
                exit: to(s, "exit", e),
                enter: to(s, "enter", e)
            }))
        }
    }), o
}
var o3 = Object.values || function(e) {
        return Object.keys(e).map(function(t) {
            return e[t]
        })
    },
    i3 = {
        component: "div",
        childFactory: function(t) {
            return t
        }
    },
    Jp = function(e) {
        bo(t, e);

        function t(r, o) {
            var i;
            i = e.call(this, r, o) || this;
            var s = i.handleExited.bind(e3(i));
            return i.state = {
                contextValue: {
                    isMounting: !0
                },
                handleExited: s,
                firstRender: !0
            }, i
        }
        var n = t.prototype;
        return n.componentDidMount = function() {
            this.mounted = !0, this.setState({
                contextValue: {
                    isMounting: !1
                }
            })
        }, n.componentWillUnmount = function() {
            this.mounted = !1
        }, t.getDerivedStateFromProps = function(o, i) {
            var s = i.children,
                l = i.handleExited,
                a = i.firstRender;
            return {
                children: a ? n3(o, l) : r3(o, s, l),
                firstRender: !1
            }
        }, n.handleExited = function(o, i) {
            var s = Yp(this.props.children);
            o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(l) {
                var a = j({}, l.children);
                return delete a[o.key], {
                    children: a
                }
            }))
        }, n.render = function() {
            var o = this.props,
                i = o.component,
                s = o.childFactory,
                l = xe(o, ["component", "childFactory"]),
                a = this.state.contextValue,
                u = o3(this.state.children).map(s);
            return delete l.appear, delete l.enter, delete l.exit, i === null ? ne.createElement(Fa.Provider, {
                value: a
            }, u) : ne.createElement(Fa.Provider, {
                value: a
            }, ne.createElement(i, l, u))
        }, t
    }(ne.Component);
Jp.propTypes = {};
Jp.defaultProps = i3;
const s3 = Jp,
    ix = e => e.scrollTop;

function za(e, t) {
    var n, r;
    const {
        timeout: o,
        easing: i,
        style: s = {}
    } = e;
    return {
        duration: (n = s.transitionDuration) != null ? n : typeof o == "number" ? o : o[t.mode] || 0,
        easing: (r = s.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
        delay: s.transitionDelay
    }
}
const l3 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];

function ud(e) {
    return `scale(${e}, ${e**2})`
}
const a3 = {
        entering: {
            opacity: 1,
            transform: ud(1)
        },
        entered: {
            opacity: 1,
            transform: "none"
        }
    },
    Vc = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
    sx = E.forwardRef(function(t, n) {
        const {
            addEndListener: r,
            appear: o = !0,
            children: i,
            easing: s,
            in: l,
            onEnter: a,
            onEntered: u,
            onEntering: c,
            onExit: f,
            onExited: h,
            onExiting: y,
            style: v,
            timeout: d = "auto",
            TransitionComponent: b = ox
        } = t, m = xe(t, l3), p = E.useRef(), g = E.useRef(), w = Ku(), C = E.useRef(null), S = Nt(C, i.ref, n), k = H => I => {
            if (H) {
                const Q = C.current;
                I === void 0 ? H(Q) : H(Q, I)
            }
        }, P = k(c), N = k((H, I) => {
            ix(H);
            const {
                duration: Q,
                delay: _,
                easing: T
            } = za({
                style: v,
                timeout: d,
                easing: s
            }, {
                mode: "enter"
            });
            let B;
            d === "auto" ? (B = w.transitions.getAutoHeightDuration(H.clientHeight), g.current = B) : B = Q, H.style.transition = [w.transitions.create("opacity", {
                duration: B,
                delay: _
            }), w.transitions.create("transform", {
                duration: Vc ? B : B * .666,
                delay: _,
                easing: T
            })].join(","), a && a(H, I)
        }), O = k(u), L = k(y), $ = k(H => {
            const {
                duration: I,
                delay: Q,
                easing: _
            } = za({
                style: v,
                timeout: d,
                easing: s
            }, {
                mode: "exit"
            });
            let T;
            d === "auto" ? (T = w.transitions.getAutoHeightDuration(H.clientHeight), g.current = T) : T = I, H.style.transition = [w.transitions.create("opacity", {
                duration: T,
                delay: Q
            }), w.transitions.create("transform", {
                duration: Vc ? T : T * .666,
                delay: Vc ? Q : Q || T * .333,
                easing: _
            })].join(","), H.style.opacity = 0, H.style.transform = ud(.75), f && f(H)
        }), W = k(h), U = H => {
            d === "auto" && (p.current = setTimeout(H, g.current || 0)), r && r(C.current, H)
        };
        return E.useEffect(() => () => {
            clearTimeout(p.current)
        }, []), x.jsx(b, j({
            appear: o,
            in: l,
            nodeRef: C,
            onEnter: N,
            onEntered: O,
            onEntering: P,
            onExit: $,
            onExited: W,
            onExiting: L,
            addEndListener: U,
            timeout: d === "auto" ? null : d
        }, m, {
            children: (H, I) => E.cloneElement(i, j({
                style: j({
                    opacity: 0,
                    transform: ud(.75),
                    visibility: H === "exited" && !l ? "hidden" : void 0
                }, a3[H], v, i.props.style),
                ref: S
            }, I))
        }))
    });
sx.muiSupportAuto = !0;
const cd = sx,
    u3 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"],
    c3 = {
        entering: {
            opacity: 1
        },
        entered: {
            opacity: 1
        }
    },
    f3 = E.forwardRef(function(t, n) {
        const r = Ku(),
            o = {
                enter: r.transitions.duration.enteringScreen,
                exit: r.transitions.duration.leavingScreen
            },
            {
                addEndListener: i,
                appear: s = !0,
                children: l,
                easing: a,
                in: u,
                onEnter: c,
                onEntered: f,
                onEntering: h,
                onExit: y,
                onExited: v,
                onExiting: d,
                style: b,
                timeout: m = o,
                TransitionComponent: p = ox
            } = t,
            g = xe(t, u3),
            w = E.useRef(null),
            C = Nt(w, l.ref, n),
            S = U => H => {
                if (U) {
                    const I = w.current;
                    H === void 0 ? U(I) : U(I, H)
                }
            },
            k = S(h),
            P = S((U, H) => {
                ix(U);
                const I = za({
                    style: b,
                    timeout: m,
                    easing: a
                }, {
                    mode: "enter"
                });
                U.style.webkitTransition = r.transitions.create("opacity", I), U.style.transition = r.transitions.create("opacity", I), c && c(U, H)
            }),
            N = S(f),
            O = S(d),
            L = S(U => {
                const H = za({
                    style: b,
                    timeout: m,
                    easing: a
                }, {
                    mode: "exit"
                });
                U.style.webkitTransition = r.transitions.create("opacity", H), U.style.transition = r.transitions.create("opacity", H), y && y(U)
            }),
            $ = S(v),
            W = U => {
                i && i(w.current, U)
            };
        return x.jsx(p, j({
            appear: s,
            in: u,
            nodeRef: w,
            onEnter: P,
            onEntered: N,
            onEntering: k,
            onExit: L,
            onExited: $,
            onExiting: O,
            addEndListener: W,
            timeout: m
        }, g, {
            children: (U, H) => E.cloneElement(l, j({
                style: j({
                    opacity: 0,
                    visibility: U === "exited" && !u ? "hidden" : void 0
                }, c3[U], b, l.props.style),
                ref: C
            }, H))
        }))
    }),
    d3 = f3;

function p3(e) {
    return nn("MuiBackdrop", e)
}
Ct("MuiBackdrop", ["root", "invisible"]);
const h3 = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"],
    m3 = e => {
        const {
            classes: t,
            invisible: n
        } = e;
        return wn({
            root: ["root", n && "invisible"]
        }, p3, t)
    },
    v3 = Je("div", {
        name: "MuiBackdrop",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: n
            } = e;
            return [t.root, n.invisible && t.invisible]
        }
    })(({
        ownerState: e
    }) => j({
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        WebkitTapHighlightColor: "transparent"
    }, e.invisible && {
        backgroundColor: "transparent"
    })),
    g3 = E.forwardRef(function(t, n) {
        var r, o, i;
        const s = on({
                props: t,
                name: "MuiBackdrop"
            }),
            {
                children: l,
                className: a,
                component: u = "div",
                components: c = {},
                componentsProps: f = {},
                invisible: h = !1,
                open: y,
                slotProps: v = {},
                slots: d = {},
                TransitionComponent: b = d3,
                transitionDuration: m
            } = s,
            p = xe(s, h3),
            g = j({}, s, {
                component: u,
                invisible: h
            }),
            w = m3(g),
            C = (r = v.root) != null ? r : f.root;
        return x.jsx(b, j({
            in: y,
            timeout: m
        }, p, {
            children: x.jsx(v3, j({
                "aria-hidden": !0
            }, C, {
                as: (o = (i = d.root) != null ? i : c.Root) != null ? o : u,
                className: ke(w.root, a, C == null ? void 0 : C.className),
                ownerState: j({}, g, C == null ? void 0 : C.ownerState),
                classes: w,
                ref: n,
                children: l
            }))
        }))
    }),
    y3 = g3;

function x3(e) {
    return nn("MuiModal", e)
}
Ct("MuiModal", ["root", "hidden", "backdrop"]);
const b3 = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"],
    w3 = e => {
        const {
            open: t,
            exited: n,
            classes: r
        } = e;
        return wn({
            root: ["root", !t && n && "hidden"],
            backdrop: ["backdrop"]
        }, x3, r)
    },
    S3 = Je("div", {
        name: "MuiModal",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: n
            } = e;
            return [t.root, !n.open && n.exited && t.hidden]
        }
    })(({
        theme: e,
        ownerState: t
    }) => j({
        position: "fixed",
        zIndex: (e.vars || e).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0
    }, !t.open && t.exited && {
        visibility: "hidden"
    })),
    E3 = Je(y3, {
        name: "MuiModal",
        slot: "Backdrop",
        overridesResolver: (e, t) => t.backdrop
    })({
        zIndex: -1
    }),
    C3 = E.forwardRef(function(t, n) {
        var r, o, i, s, l, a;
        const u = on({
                name: "MuiModal",
                props: t
            }),
            {
                BackdropComponent: c = E3,
                BackdropProps: f,
                className: h,
                closeAfterTransition: y = !1,
                children: v,
                container: d,
                component: b,
                components: m = {},
                componentsProps: p = {},
                disableAutoFocus: g = !1,
                disableEnforceFocus: w = !1,
                disableEscapeKeyDown: C = !1,
                disablePortal: S = !1,
                disableRestoreFocus: k = !1,
                disableScrollLock: P = !1,
                hideBackdrop: N = !1,
                keepMounted: O = !1,
                onBackdropClick: L,
                open: $,
                slotProps: W,
                slots: U
            } = u,
            H = xe(u, b3),
            I = j({}, u, {
                closeAfterTransition: y,
                disableAutoFocus: g,
                disableEnforceFocus: w,
                disableEscapeKeyDown: C,
                disablePortal: S,
                disableRestoreFocus: k,
                disableScrollLock: P,
                hideBackdrop: N,
                keepMounted: O
            }),
            {
                getRootProps: Q,
                getBackdropProps: _,
                getTransitionProps: T,
                portalRef: B,
                isTopModal: X,
                exited: q,
                hasTransition: re
            } = JT(j({}, I, {
                rootRef: n
            })),
            G = j({}, I, {
                exited: q
            }),
            J = w3(G),
            he = {};
        if (v.props.tabIndex === void 0 && (he.tabIndex = "-1"), re) {
            const {
                onEnter: oe,
                onExited: Se
            } = T();
            he.onEnter = oe, he.onExited = Se
        }
        const je = (r = (o = U == null ? void 0 : U.root) != null ? o : m.Root) != null ? r : S3,
            fe = (i = (s = U == null ? void 0 : U.backdrop) != null ? s : m.Backdrop) != null ? i : c,
            ye = (l = W == null ? void 0 : W.root) != null ? l : p.root,
            Be = (a = W == null ? void 0 : W.backdrop) != null ? a : p.backdrop,
            me = mo({
                elementType: je,
                externalSlotProps: ye,
                externalForwardedProps: H,
                getSlotProps: Q,
                additionalProps: {
                    ref: n,
                    as: b
                },
                ownerState: G,
                className: ke(h, ye == null ? void 0 : ye.className, J == null ? void 0 : J.root, !G.open && G.exited && (J == null ? void 0 : J.hidden))
            }),
            Ie = mo({
                elementType: fe,
                externalSlotProps: Be,
                additionalProps: f,
                getSlotProps: oe => _(j({}, oe, {
                    onClick: Se => {
                        L && L(Se), oe != null && oe.onClick && oe.onClick(Se)
                    }
                })),
                className: ke(Be == null ? void 0 : Be.className, f == null ? void 0 : f.className, J == null ? void 0 : J.backdrop),
                ownerState: G
            });
        return !O && !$ && (!re || q) ? null : x.jsx(rx, {
            ref: B,
            container: d,
            disablePortal: S,
            children: x.jsxs(je, j({}, me, {
                children: [!N && c ? x.jsx(fe, j({}, Ie)) : null, x.jsx(OO, {
                    disableEnforceFocus: w,
                    disableAutoFocus: g,
                    disableRestoreFocus: k,
                    isEnabled: X,
                    open: $,
                    children: E.cloneElement(v, he)
                })]
            }))
        })
    }),
    k3 = C3;

function P3(e) {
    return nn("MuiPaper", e)
}
Ct("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const O3 = ["className", "component", "elevation", "square", "variant"],
    T3 = e => {
        const {
            square: t,
            elevation: n,
            variant: r,
            classes: o
        } = e, i = {
            root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
        };
        return wn(i, P3, o)
    },
    R3 = Je("div", {
        name: "MuiPaper",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: n
            } = e;
            return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]]
        }
    })(({
        theme: e,
        ownerState: t
    }) => {
        var n;
        return j({
            backgroundColor: (e.vars || e).palette.background.paper,
            color: (e.vars || e).palette.text.primary,
            transition: e.transitions.create("box-shadow")
        }, !t.square && {
            borderRadius: e.shape.borderRadius
        }, t.variant === "outlined" && {
            border: `1px solid ${(e.vars||e).palette.divider}`
        }, t.variant === "elevation" && j({
            boxShadow: (e.vars || e).shadows[t.elevation]
        }, !e.vars && e.palette.mode === "dark" && {
            backgroundImage: `linear-gradient(${Zn("#fff",xv(t.elevation))}, ${Zn("#fff",xv(t.elevation))})`
        }, e.vars && {
            backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
        }))
    }),
    j3 = E.forwardRef(function(t, n) {
        const r = on({
                props: t,
                name: "MuiPaper"
            }),
            {
                className: o,
                component: i = "div",
                elevation: s = 1,
                square: l = !1,
                variant: a = "elevation"
            } = r,
            u = xe(r, O3),
            c = j({}, r, {
                component: i,
                elevation: s,
                square: l,
                variant: a
            }),
            f = T3(c);
        return x.jsx(R3, j({
            as: i,
            ownerState: c,
            className: ke(f.root, o),
            ref: n
        }, u))
    }),
    N3 = j3;

function _3(e) {
    return nn("MuiPopover", e)
}
Ct("MuiPopover", ["root", "paper"]);
const $3 = ["onEntering"],
    M3 = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"],
    A3 = ["slotProps"];

function Uv(e, t) {
    let n = 0;
    return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n
}

function Vv(e, t) {
    let n = 0;
    return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n
}

function Dv(e) {
    return [e.horizontal, e.vertical].map(t => typeof t == "number" ? `${t}px` : t).join(" ")
}

function Dc(e) {
    return typeof e == "function" ? e() : e
}
const L3 = e => {
        const {
            classes: t
        } = e;
        return wn({
            root: ["root"],
            paper: ["paper"]
        }, _3, t)
    },
    I3 = Je(k3, {
        name: "MuiPopover",
        slot: "Root",
        overridesResolver: (e, t) => t.root
    })({}),
    lx = Je(N3, {
        name: "MuiPopover",
        slot: "Paper",
        overridesResolver: (e, t) => t.paper
    })({
        position: "absolute",
        overflowY: "auto",
        overflowX: "hidden",
        minWidth: 16,
        minHeight: 16,
        maxWidth: "calc(100% - 32px)",
        maxHeight: "calc(100% - 32px)",
        outline: 0
    }),
    F3 = E.forwardRef(function(t, n) {
        var r, o, i;
        const s = on({
                props: t,
                name: "MuiPopover"
            }),
            {
                action: l,
                anchorEl: a,
                anchorOrigin: u = {
                    vertical: "top",
                    horizontal: "left"
                },
                anchorPosition: c,
                anchorReference: f = "anchorEl",
                children: h,
                className: y,
                container: v,
                elevation: d = 8,
                marginThreshold: b = 16,
                open: m,
                PaperProps: p = {},
                slots: g,
                slotProps: w,
                transformOrigin: C = {
                    vertical: "top",
                    horizontal: "left"
                },
                TransitionComponent: S = cd,
                transitionDuration: k = "auto",
                TransitionProps: {
                    onEntering: P
                } = {},
                disableScrollLock: N = !1
            } = s,
            O = xe(s.TransitionProps, $3),
            L = xe(s, M3),
            $ = (r = w == null ? void 0 : w.paper) != null ? r : p,
            W = E.useRef(),
            U = Nt(W, $.ref),
            H = j({}, s, {
                anchorOrigin: u,
                anchorReference: f,
                elevation: d,
                marginThreshold: b,
                externalPaperSlotProps: $,
                transformOrigin: C,
                TransitionComponent: S,
                transitionDuration: k,
                TransitionProps: O
            }),
            I = L3(H),
            Q = E.useCallback(() => {
                if (f === "anchorPosition") return c;
                const oe = Dc(a),
                    ve = (oe && oe.nodeType === 1 ? oe : jt(W.current).body).getBoundingClientRect();
                return {
                    top: ve.top + Uv(ve, u.vertical),
                    left: ve.left + Vv(ve, u.horizontal)
                }
            }, [a, u.horizontal, u.vertical, c, f]),
            _ = E.useCallback(oe => ({
                vertical: Uv(oe, C.vertical),
                horizontal: Vv(oe, C.horizontal)
            }), [C.horizontal, C.vertical]),
            T = E.useCallback(oe => {
                const Se = {
                        width: oe.offsetWidth,
                        height: oe.offsetHeight
                    },
                    ve = _(Se);
                if (f === "none") return {
                    top: null,
                    left: null,
                    transformOrigin: Dv(ve)
                };
                const Wt = Q();
                let gt = Wt.top - ve.vertical,
                    rt = Wt.left - ve.horizontal;
                const En = gt + Se.height,
                    Ue = rt + Se.width,
                    kt = si(Dc(a)),
                    Pt = kt.innerHeight - b,
                    Ot = kt.innerWidth - b;
                if (b !== null && gt < b) {
                    const Ee = gt - b;
                    gt -= Ee, ve.vertical += Ee
                } else if (b !== null && En > Pt) {
                    const Ee = En - Pt;
                    gt -= Ee, ve.vertical += Ee
                }
                if (b !== null && rt < b) {
                    const Ee = rt - b;
                    rt -= Ee, ve.horizontal += Ee
                } else if (Ue > Ot) {
                    const Ee = Ue - Ot;
                    rt -= Ee, ve.horizontal += Ee
                }
                return {
                    top: `${Math.round(gt)}px`,
                    left: `${Math.round(rt)}px`,
                    transformOrigin: Dv(ve)
                }
            }, [a, f, Q, _, b]),
            [B, X] = E.useState(m),
            q = E.useCallback(() => {
                const oe = W.current;
                if (!oe) return;
                const Se = T(oe);
                Se.top !== null && (oe.style.top = Se.top), Se.left !== null && (oe.style.left = Se.left), oe.style.transformOrigin = Se.transformOrigin, X(!0)
            }, [T]);
        E.useEffect(() => (N && window.addEventListener("scroll", q), () => window.removeEventListener("scroll", q)), [a, N, q]);
        const re = (oe, Se) => {
                P && P(oe, Se), q()
            },
            G = () => {
                X(!1)
            };
        E.useEffect(() => {
            m && q()
        }), E.useImperativeHandle(l, () => m ? {
            updatePosition: () => {
                q()
            }
        } : null, [m, q]), E.useEffect(() => {
            if (!m) return;
            const oe = d1(() => {
                    q()
                }),
                Se = si(a);
            return Se.addEventListener("resize", oe), () => {
                oe.clear(), Se.removeEventListener("resize", oe)
            }
        }, [a, m, q]);
        let J = k;
        k === "auto" && !S.muiSupportAuto && (J = void 0);
        const he = v || (a ? jt(Dc(a)).body : void 0),
            je = (o = g == null ? void 0 : g.root) != null ? o : I3,
            fe = (i = g == null ? void 0 : g.paper) != null ? i : lx,
            ye = mo({
                elementType: fe,
                externalSlotProps: j({}, $, {
                    style: B ? $.style : j({}, $.style, {
                        opacity: 0
                    })
                }),
                additionalProps: {
                    elevation: d,
                    ref: U
                },
                ownerState: H,
                className: ke(I.paper, $ == null ? void 0 : $.className)
            }),
            Be = mo({
                elementType: je,
                externalSlotProps: (w == null ? void 0 : w.root) || {},
                externalForwardedProps: L,
                additionalProps: {
                    ref: n,
                    slotProps: {
                        backdrop: {
                            invisible: !0
                        }
                    },
                    container: he,
                    open: m
                },
                ownerState: H,
                className: ke(I.root, y)
            }),
            {
                slotProps: me
            } = Be,
            Ie = xe(Be, A3);
        return x.jsx(je, j({}, Ie, !W1(je) && {
            slotProps: me,
            disableScrollLock: N
        }, {
            children: x.jsx(S, j({
                appear: !0,
                in: m,
                onEntering: re,
                onExited: G,
                timeout: J
            }, O, {
                children: x.jsx(fe, j({}, ye, {
                    children: h
                }))
            }))
        }))
    }),
    z3 = F3;

function B3(e) {
    return nn("MuiMenu", e)
}
Ct("MuiMenu", ["root", "paper", "list"]);
const U3 = ["onEntering"],
    V3 = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"],
    D3 = {
        vertical: "top",
        horizontal: "right"
    },
    H3 = {
        vertical: "top",
        horizontal: "left"
    },
    W3 = e => {
        const {
            classes: t
        } = e;
        return wn({
            root: ["root"],
            paper: ["paper"],
            list: ["list"]
        }, B3, t)
    },
    Q3 = Je(z3, {
        shouldForwardProp: e => Dp(e) || e === "classes",
        name: "MuiMenu",
        slot: "Root",
        overridesResolver: (e, t) => t.root
    })({}),
    K3 = Je(lx, {
        name: "MuiMenu",
        slot: "Paper",
        overridesResolver: (e, t) => t.paper
    })({
        maxHeight: "calc(100% - 96px)",
        WebkitOverflowScrolling: "touch"
    }),
    q3 = Je(bO, {
        name: "MuiMenu",
        slot: "List",
        overridesResolver: (e, t) => t.list
    })({
        outline: 0
    }),
    G3 = E.forwardRef(function(t, n) {
        var r, o;
        const i = on({
                props: t,
                name: "MuiMenu"
            }),
            {
                autoFocus: s = !0,
                children: l,
                className: a,
                disableAutoFocusItem: u = !1,
                MenuListProps: c = {},
                onClose: f,
                open: h,
                PaperProps: y = {},
                PopoverClasses: v,
                transitionDuration: d = "auto",
                TransitionProps: {
                    onEntering: b
                } = {},
                variant: m = "selectedMenu",
                slots: p = {},
                slotProps: g = {}
            } = i,
            w = xe(i.TransitionProps, U3),
            C = xe(i, V3),
            S = Ku(),
            k = S.direction === "rtl",
            P = j({}, i, {
                autoFocus: s,
                disableAutoFocusItem: u,
                MenuListProps: c,
                onEntering: b,
                PaperProps: y,
                transitionDuration: d,
                TransitionProps: w,
                variant: m
            }),
            N = W3(P),
            O = s && !u && h,
            L = E.useRef(null),
            $ = (T, B) => {
                L.current && L.current.adjustStyleForScrollbar(T, S), b && b(T, B)
            },
            W = T => {
                T.key === "Tab" && (T.preventDefault(), f && f(T, "tabKeyDown"))
            };
        let U = -1;
        E.Children.map(l, (T, B) => {
            E.isValidElement(T) && (T.props.disabled || (m === "selectedMenu" && T.props.selected || U === -1) && (U = B))
        });
        const H = (r = p.paper) != null ? r : K3,
            I = (o = g.paper) != null ? o : y,
            Q = mo({
                elementType: p.root,
                externalSlotProps: g.root,
                ownerState: P,
                className: [N.root, a]
            }),
            _ = mo({
                elementType: H,
                externalSlotProps: I,
                ownerState: P,
                className: N.paper
            });
        return x.jsx(Q3, j({
            onClose: f,
            anchorOrigin: {
                vertical: "bottom",
                horizontal: k ? "right" : "left"
            },
            transformOrigin: k ? D3 : H3,
            slots: {
                paper: H,
                root: p.root
            },
            slotProps: {
                root: Q,
                paper: _
            },
            open: h,
            ref: n,
            transitionDuration: d,
            TransitionProps: j({
                onEntering: $
            }, w),
            ownerState: P
        }, C, {
            classes: v,
            children: x.jsx(q3, j({
                onKeyDown: W,
                actions: L,
                autoFocus: s && (U === -1 || u),
                autoFocusItem: O,
                variant: m
            }, c, {
                className: ke(N.list, c.className),
                children: l
            }))
        }))
    }),
    X3 = G3;

function Y3(e) {
    const {
        className: t,
        classes: n,
        pulsate: r = !1,
        rippleX: o,
        rippleY: i,
        rippleSize: s,
        in: l,
        onExited: a,
        timeout: u
    } = e, [c, f] = E.useState(!1), h = ke(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), y = {
        width: s,
        height: s,
        top: -(s / 2) + i,
        left: -(s / 2) + o
    }, v = ke(n.child, c && n.childLeaving, r && n.childPulsate);
    return !l && !c && f(!0), E.useEffect(() => {
        if (!l && a != null) {
            const d = setTimeout(a, u);
            return () => {
                clearTimeout(d)
            }
        }
    }, [a, l, u]), x.jsx("span", {
        className: h,
        style: y,
        children: x.jsx("span", {
            className: v
        })
    })
}
const J3 = Ct("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]),
    ln = J3,
    Z3 = ["center", "classes", "className"];
let Yu = e => e,
    Hv, Wv, Qv, Kv;
const fd = 550,
    eR = 80,
    tR = Gs(Hv || (Hv = Yu`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),
    nR = Gs(Wv || (Wv = Yu`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),
    rR = Gs(Qv || (Qv = Yu`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),
    oR = Je("span", {
        name: "MuiTouchRipple",
        slot: "Root"
    })({
        overflow: "hidden",
        pointerEvents: "none",
        position: "absolute",
        zIndex: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: "inherit"
    }),
    iR = Je(Y3, {
        name: "MuiTouchRipple",
        slot: "Ripple"
    })(Kv || (Kv = Yu`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), ln.rippleVisible, tR, fd, ({
        theme: e
    }) => e.transitions.easing.easeInOut, ln.ripplePulsate, ({
        theme: e
    }) => e.transitions.duration.shorter, ln.child, ln.childLeaving, nR, fd, ({
        theme: e
    }) => e.transitions.easing.easeInOut, ln.childPulsate, rR, ({
        theme: e
    }) => e.transitions.easing.easeInOut),
    sR = E.forwardRef(function(t, n) {
        const r = on({
                props: t,
                name: "MuiTouchRipple"
            }),
            {
                center: o = !1,
                classes: i = {},
                className: s
            } = r,
            l = xe(r, Z3),
            [a, u] = E.useState([]),
            c = E.useRef(0),
            f = E.useRef(null);
        E.useEffect(() => {
            f.current && (f.current(), f.current = null)
        }, [a]);
        const h = E.useRef(!1),
            y = E.useRef(0),
            v = E.useRef(null),
            d = E.useRef(null);
        E.useEffect(() => () => {
            y.current && clearTimeout(y.current)
        }, []);
        const b = E.useCallback(w => {
                const {
                    pulsate: C,
                    rippleX: S,
                    rippleY: k,
                    rippleSize: P,
                    cb: N
                } = w;
                u(O => [...O, x.jsx(iR, {
                    classes: {
                        ripple: ke(i.ripple, ln.ripple),
                        rippleVisible: ke(i.rippleVisible, ln.rippleVisible),
                        ripplePulsate: ke(i.ripplePulsate, ln.ripplePulsate),
                        child: ke(i.child, ln.child),
                        childLeaving: ke(i.childLeaving, ln.childLeaving),
                        childPulsate: ke(i.childPulsate, ln.childPulsate)
                    },
                    timeout: fd,
                    pulsate: C,
                    rippleX: S,
                    rippleY: k,
                    rippleSize: P
                }, c.current)]), c.current += 1, f.current = N
            }, [i]),
            m = E.useCallback((w = {}, C = {}, S = () => {}) => {
                const {
                    pulsate: k = !1,
                    center: P = o || C.pulsate,
                    fakeElement: N = !1
                } = C;
                if ((w == null ? void 0 : w.type) === "mousedown" && h.current) {
                    h.current = !1;
                    return
                }(w == null ? void 0 : w.type) === "touchstart" && (h.current = !0);
                const O = N ? null : d.current,
                    L = O ? O.getBoundingClientRect() : {
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    };
                let $, W, U;
                if (P || w === void 0 || w.clientX === 0 && w.clientY === 0 || !w.clientX && !w.touches) $ = Math.round(L.width / 2), W = Math.round(L.height / 2);
                else {
                    const {
                        clientX: H,
                        clientY: I
                    } = w.touches && w.touches.length > 0 ? w.touches[0] : w;
                    $ = Math.round(H - L.left), W = Math.round(I - L.top)
                }
                if (P) U = Math.sqrt((2 * L.width ** 2 + L.height ** 2) / 3), U % 2 === 0 && (U += 1);
                else {
                    const H = Math.max(Math.abs((O ? O.clientWidth : 0) - $), $) * 2 + 2,
                        I = Math.max(Math.abs((O ? O.clientHeight : 0) - W), W) * 2 + 2;
                    U = Math.sqrt(H ** 2 + I ** 2)
                }
                w != null && w.touches ? v.current === null && (v.current = () => {
                    b({
                        pulsate: k,
                        rippleX: $,
                        rippleY: W,
                        rippleSize: U,
                        cb: S
                    })
                }, y.current = setTimeout(() => {
                    v.current && (v.current(), v.current = null)
                }, eR)) : b({
                    pulsate: k,
                    rippleX: $,
                    rippleY: W,
                    rippleSize: U,
                    cb: S
                })
            }, [o, b]),
            p = E.useCallback(() => {
                m({}, {
                    pulsate: !0
                })
            }, [m]),
            g = E.useCallback((w, C) => {
                if (clearTimeout(y.current), (w == null ? void 0 : w.type) === "touchend" && v.current) {
                    v.current(), v.current = null, y.current = setTimeout(() => {
                        g(w, C)
                    });
                    return
                }
                v.current = null, u(S => S.length > 0 ? S.slice(1) : S), f.current = C
            }, []);
        return E.useImperativeHandle(n, () => ({
            pulsate: p,
            start: m,
            stop: g
        }), [p, m, g]), x.jsx(oR, j({
            className: ke(ln.root, i.root, s),
            ref: d
        }, l, {
            children: x.jsx(s3, {
                component: null,
                exit: !0,
                children: a
            })
        }))
    }),
    lR = sR;

function aR(e) {
    return nn("MuiButtonBase", e)
}
const uR = Ct("MuiButtonBase", ["root", "disabled", "focusVisible"]),
    cR = uR,
    fR = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"],
    dR = e => {
        const {
            disabled: t,
            focusVisible: n,
            focusVisibleClassName: r,
            classes: o
        } = e, s = wn({
            root: ["root", t && "disabled", n && "focusVisible"]
        }, aR, o);
        return n && r && (s.root += ` ${r}`), s
    },
    pR = Je("button", {
        name: "MuiButtonBase",
        slot: "Root",
        overridesResolver: (e, t) => t.root
    })({
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "transparent",
        outline: 0,
        border: 0,
        margin: 0,
        borderRadius: 0,
        padding: 0,
        cursor: "pointer",
        userSelect: "none",
        verticalAlign: "middle",
        MozAppearance: "none",
        WebkitAppearance: "none",
        textDecoration: "none",
        color: "inherit",
        "&::-moz-focus-inner": {
            borderStyle: "none"
        },
        [`&.${cR.disabled}`]: {
            pointerEvents: "none",
            cursor: "default"
        },
        "@media print": {
            colorAdjust: "exact"
        }
    }),
    hR = E.forwardRef(function(t, n) {
        const r = on({
                props: t,
                name: "MuiButtonBase"
            }),
            {
                action: o,
                centerRipple: i = !1,
                children: s,
                className: l,
                component: a = "button",
                disabled: u = !1,
                disableRipple: c = !1,
                disableTouchRipple: f = !1,
                focusRipple: h = !1,
                LinkComponent: y = "a",
                onBlur: v,
                onClick: d,
                onContextMenu: b,
                onDragLeave: m,
                onFocus: p,
                onFocusVisible: g,
                onKeyDown: w,
                onKeyUp: C,
                onMouseDown: S,
                onMouseLeave: k,
                onMouseUp: P,
                onTouchEnd: N,
                onTouchMove: O,
                onTouchStart: L,
                tabIndex: $ = 0,
                TouchRippleProps: W,
                touchRippleRef: U,
                type: H
            } = r,
            I = xe(r, fR),
            Q = E.useRef(null),
            _ = E.useRef(null),
            T = Nt(_, U),
            {
                isFocusVisibleRef: B,
                onFocus: X,
                onBlur: q,
                ref: re
            } = Pp(),
            [G, J] = E.useState(!1);
        u && G && J(!1), E.useImperativeHandle(o, () => ({
            focusVisible: () => {
                J(!0), Q.current.focus()
            }
        }), []);
        const [he, je] = E.useState(!1);
        E.useEffect(() => {
            je(!0)
        }, []);
        const fe = he && !c && !u;
        E.useEffect(() => {
            G && h && !c && he && _.current.pulsate()
        }, [c, h, G, he]);

        function ye(M, D, se = f) {
            return kr(ie => (D && D(ie), !se && _.current && _.current[M](ie), !0))
        }
        const Be = ye("start", S),
            me = ye("stop", b),
            Ie = ye("stop", m),
            oe = ye("stop", P),
            Se = ye("stop", M => {
                G && M.preventDefault(), k && k(M)
            }),
            ve = ye("start", L),
            Wt = ye("stop", N),
            gt = ye("stop", O),
            rt = ye("stop", M => {
                q(M), B.current === !1 && J(!1), v && v(M)
            }, !1),
            En = kr(M => {
                Q.current || (Q.current = M.currentTarget), X(M), B.current === !0 && (J(!0), g && g(M)), p && p(M)
            }),
            Ue = () => {
                const M = Q.current;
                return a && a !== "button" && !(M.tagName === "A" && M.href)
            },
            kt = E.useRef(!1),
            Pt = kr(M => {
                h && !kt.current && G && _.current && M.key === " " && (kt.current = !0, _.current.stop(M, () => {
                    _.current.start(M)
                })), M.target === M.currentTarget && Ue() && M.key === " " && M.preventDefault(), w && w(M), M.target === M.currentTarget && Ue() && M.key === "Enter" && !u && (M.preventDefault(), d && d(M))
            }),
            Ot = kr(M => {
                h && M.key === " " && _.current && G && !M.defaultPrevented && (kt.current = !1, _.current.stop(M, () => {
                    _.current.pulsate(M)
                })), C && C(M), d && M.target === M.currentTarget && Ue() && M.key === " " && !M.defaultPrevented && d(M)
            });
        let Ee = a;
        Ee === "button" && (I.href || I.to) && (Ee = y);
        const ft = {};
        Ee === "button" ? (ft.type = H === void 0 ? "button" : H, ft.disabled = u) : (!I.href && !I.to && (ft.role = "button"), u && (ft["aria-disabled"] = u));
        const Mt = Nt(n, re, Q),
            V = j({}, r, {
                centerRipple: i,
                component: a,
                disabled: u,
                disableRipple: c,
                disableTouchRipple: f,
                focusRipple: h,
                tabIndex: $,
                focusVisible: G
            }),
            R = dR(V);
        return x.jsxs(pR, j({
            as: Ee,
            className: ke(R.root, l),
            ownerState: V,
            onBlur: rt,
            onClick: d,
            onContextMenu: me,
            onFocus: En,
            onKeyDown: Pt,
            onKeyUp: Ot,
            onMouseDown: Be,
            onMouseLeave: Se,
            onMouseUp: oe,
            onDragLeave: Ie,
            onTouchEnd: Wt,
            onTouchMove: gt,
            onTouchStart: ve,
            ref: Mt,
            tabIndex: u ? -1 : $,
            type: H
        }, ft, I, {
            children: [s, fe ? x.jsx(lR, j({
                ref: T,
                center: i
            }, W)) : null]
        }))
    }),
    mR = hR,
    vR = Ct("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]),
    qv = vR,
    gR = Ct("MuiListItemIcon", ["root", "alignItemsFlexStart"]),
    Gv = gR,
    yR = Ct("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]),
    Xv = yR;

function xR(e) {
    return nn("MuiMenuItem", e)
}
const bR = Ct("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]),
    Ii = bR,
    wR = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"],
    SR = (e, t) => {
        const {
            ownerState: n
        } = e;
        return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters]
    },
    ER = e => {
        const {
            disabled: t,
            dense: n,
            divider: r,
            disableGutters: o,
            selected: i,
            classes: s
        } = e, a = wn({
            root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
        }, xR, s);
        return j({}, s, a)
    },
    CR = Je(mR, {
        shouldForwardProp: e => Dp(e) || e === "classes",
        name: "MuiMenuItem",
        slot: "Root",
        overridesResolver: SR
    })(({
        theme: e,
        ownerState: t
    }) => j({}, e.typography.body1, {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        minHeight: 48,
        paddingTop: 6,
        paddingBottom: 6,
        boxSizing: "border-box",
        whiteSpace: "nowrap"
    }, !t.disableGutters && {
        paddingLeft: 16,
        paddingRight: 16
    }, t.divider && {
        borderBottom: `1px solid ${(e.vars||e).palette.divider}`,
        backgroundClip: "padding-box"
    }, {
        "&:hover": {
            textDecoration: "none",
            backgroundColor: (e.vars || e).palette.action.hover,
            "@media (hover: none)": {
                backgroundColor: "transparent"
            }
        },
        [`&.${Ii.selected}`]: {
            backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Zn(e.palette.primary.main, e.palette.action.selectedOpacity),
            [`&.${Ii.focusVisible}`]: {
                backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Zn(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            }
        },
        [`&.${Ii.selected}:hover`]: {
            backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Zn(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
            "@media (hover: none)": {
                backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Zn(e.palette.primary.main, e.palette.action.selectedOpacity)
            }
        },
        [`&.${Ii.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus
        },
        [`&.${Ii.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity
        },
        [`& + .${qv.root}`]: {
            marginTop: e.spacing(1),
            marginBottom: e.spacing(1)
        },
        [`& + .${qv.inset}`]: {
            marginLeft: 52
        },
        [`& .${Xv.root}`]: {
            marginTop: 0,
            marginBottom: 0
        },
        [`& .${Xv.inset}`]: {
            paddingLeft: 36
        },
        [`& .${Gv.root}`]: {
            minWidth: 36
        }
    }, !t.dense && {
        [e.breakpoints.up("sm")]: {
            minHeight: "auto"
        }
    }, t.dense && j({
        minHeight: 32,
        paddingTop: 4,
        paddingBottom: 4
    }, e.typography.body2, {
        [`& .${Gv.root} svg`]: {
            fontSize: "1.25rem"
        }
    }))),
    kR = E.forwardRef(function(t, n) {
        const r = on({
                props: t,
                name: "MuiMenuItem"
            }),
            {
                autoFocus: o = !1,
                component: i = "li",
                dense: s = !1,
                divider: l = !1,
                disableGutters: a = !1,
                focusVisibleClassName: u,
                role: c = "menuitem",
                tabIndex: f,
                className: h
            } = r,
            y = xe(r, wR),
            v = E.useContext(od),
            d = E.useMemo(() => ({
                dense: s || v.dense || !1,
                disableGutters: a
            }), [v.dense, s, a]),
            b = E.useRef(null);
        Fr(() => {
            o && b.current && b.current.focus()
        }, [o]);
        const m = j({}, r, {
                dense: d.dense,
                divider: l,
                disableGutters: a
            }),
            p = ER(r),
            g = Nt(b, n);
        let w;
        return r.disabled || (w = f !== void 0 ? f : -1), x.jsx(od.Provider, {
            value: d,
            children: x.jsx(CR, j({
                ref: g,
                role: c,
                tabIndex: w,
                component: i,
                focusVisibleClassName: ke(p.focusVisible, u),
                className: ke(p.root, h)
            }, y, {
                ownerState: m,
                classes: p
            }))
        })
    }),
    Wr = kR;
var Zp = {},
    ax = {
        exports: {}
    };
(function(e) {
    function t(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
})(ax);
var yi = ax.exports,
    Hc = {};

function PR(e) {
    return nn("MuiSvgIcon", e)
}
Ct("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const OR = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"],
    TR = e => {
        const {
            color: t,
            fontSize: n,
            classes: r
        } = e, o = {
            root: ["root", t !== "inherit" && `color${hn(t)}`, `fontSize${hn(n)}`]
        };
        return wn(o, PR, r)
    },
    RR = Je("svg", {
        name: "MuiSvgIcon",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: n
            } = e;
            return [t.root, n.color !== "inherit" && t[`color${hn(n.color)}`], t[`fontSize${hn(n.fontSize)}`]]
        }
    })(({
        theme: e,
        ownerState: t
    }) => {
        var n, r, o, i, s, l, a, u, c, f, h, y, v;
        return {
            userSelect: "none",
            width: "1em",
            height: "1em",
            display: "inline-block",
            fill: t.hasSvgAsChild ? void 0 : "currentColor",
            flexShrink: 0,
            transition: (n = e.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", {
                duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
            }),
            fontSize: {
                inherit: "inherit",
                small: ((i = e.typography) == null || (s = i.pxToRem) == null ? void 0 : s.call(i, 20)) || "1.25rem",
                medium: ((l = e.typography) == null || (a = l.pxToRem) == null ? void 0 : a.call(l, 24)) || "1.5rem",
                large: ((u = e.typography) == null || (c = u.pxToRem) == null ? void 0 : c.call(u, 35)) || "2.1875rem"
            } [t.fontSize],
            color: (f = (h = (e.vars || e).palette) == null || (h = h[t.color]) == null ? void 0 : h.main) != null ? f : {
                action: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.active,
                disabled: (v = (e.vars || e).palette) == null || (v = v.action) == null ? void 0 : v.disabled,
                inherit: void 0
            } [t.color]
        }
    }),
    ux = E.forwardRef(function(t, n) {
        const r = on({
                props: t,
                name: "MuiSvgIcon"
            }),
            {
                children: o,
                className: i,
                color: s = "inherit",
                component: l = "svg",
                fontSize: a = "medium",
                htmlColor: u,
                inheritViewBox: c = !1,
                titleAccess: f,
                viewBox: h = "0 0 24 24"
            } = r,
            y = xe(r, OR),
            v = E.isValidElement(o) && o.type === "svg",
            d = j({}, r, {
                color: s,
                component: l,
                fontSize: a,
                instanceFontSize: t.fontSize,
                inheritViewBox: c,
                viewBox: h,
                hasSvgAsChild: v
            }),
            b = {};
        c || (b.viewBox = h);
        const m = TR(d);
        return x.jsxs(RR, j({
            as: l,
            className: ke(m.root, i),
            focusable: "false",
            color: u,
            "aria-hidden": f ? void 0 : !0,
            role: f ? "img" : void 0,
            ref: n
        }, b, y, v && o.props, {
            ownerState: d,
            children: [v ? o.props.children : o, f ? x.jsx("title", {
                children: f
            }) : null]
        }))
    });
ux.muiName = "SvgIcon";
const Yv = ux;

function jR(e, t) {
    function n(r, o) {
        return x.jsx(Yv, j({
            "data-testid": `${t}Icon`,
            ref: o
        }, r, {
            children: e
        }))
    }
    return n.muiName = Yv.muiName, E.memo(E.forwardRef(n))
}
const NR = {
        configure: e => {
            g1.configure(e)
        }
    },
    _R = Object.freeze(Object.defineProperty({
        __proto__: null,
        capitalize: hn,
        createChainedFunction: Yf,
        createSvgIcon: jR,
        debounce: d1,
        deprecatedPropType: CC,
        isMuiElement: kC,
        ownerDocument: jt,
        ownerWindow: si,
        requirePropFactory: PC,
        setRef: ja,
        unstable_ClassNameGenerator: NR,
        unstable_useEnhancedEffect: Fr,
        unstable_useId: p1,
        unsupportedProp: RC,
        useControlled: h1,
        useEventCallback: kr,
        useForkRef: Nt,
        useIsFocusVisible: Pp
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    $R = $x(_R);
var Jv;

function xi() {
    return Jv || (Jv = 1, function(e) {
        "use client";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return t.createSvgIcon
            }
        });
        var t = $R
    }(Hc)), Hc
}
var MR = yi;
Object.defineProperty(Zp, "__esModule", {
    value: !0
});
var cx = Zp.default = void 0,
    AR = MR(xi()),
    LR = x,
    IR = (0, AR.default)((0, LR.jsx)("path", {
        d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
    }), "Home");
cx = Zp.default = IR;
var eh = {},
    FR = yi;
Object.defineProperty(eh, "__esModule", {
    value: !0
});
var fx = eh.default = void 0,
    zR = FR(xi()),
    Zv = x,
    BR = (0, zR.default)([(0, Zv.jsx)("path", {
        d: "m12 12.9-2.13 2.09c-.56.56-.87 1.29-.87 2.07C9 18.68 10.35 20 12 20s3-1.32 3-2.94c0-.78-.31-1.52-.87-2.07L12 12.9z"
    }, "0"), (0, Zv.jsx)("path", {
        d: "m16 6-.44.55C14.38 8.02 12 7.19 12 5.3V2S4 6 4 13c0 2.92 1.56 5.47 3.89 6.86-.56-.79-.89-1.76-.89-2.8 0-1.32.52-2.56 1.47-3.5L12 10.1l3.53 3.47c.95.93 1.47 2.17 1.47 3.5 0 1.02-.31 1.96-.85 2.75 1.89-1.15 3.29-3.06 3.71-5.3.66-3.55-1.07-6.9-3.86-8.52z"
    }, "1")], "LocalFireDepartment");
fx = eh.default = BR;
var th = {},
    UR = yi;
Object.defineProperty(th, "__esModule", {
    value: !0
});
var dx = th.default = void 0,
    VR = UR(xi()),
    DR = x,
    HR = (0, VR.default)((0, DR.jsx)("path", {
        d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5v6zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4v1.26zm7 3.74c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25v5z"
    }), "FiberNew");
dx = th.default = HR;
var nh = {},
    WR = yi;
Object.defineProperty(nh, "__esModule", {
    value: !0
});
var px = nh.default = void 0,
    QR = WR(xi()),
    KR = x,
    qR = (0, QR.default)((0, KR.jsx)("path", {
        d: "m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"
    }), "TrendingUp");
px = nh.default = qR;
var rh = {},
    GR = yi;
Object.defineProperty(rh, "__esModule", {
    value: !0
});
var hx = rh.default = void 0,
    XR = GR(xi()),
    YR = x,
    JR = (0, XR.default)((0, YR.jsx)("path", {
        d: "M22 7h-9v2h9V7zm0 8h-9v2h9v-2zM5.54 11 2 7.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L5.54 11zm0 8L2 15.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L5.54 19z"
    }), "Checklist");
hx = rh.default = JR;
var oh = {},
    ZR = yi;
Object.defineProperty(oh, "__esModule", {
    value: !0
});
var ih = oh.default = void 0,
    e4 = ZR(xi()),
    t4 = x,
    n4 = (0, e4.default)((0, t4.jsx)("path", {
        d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
    }), "Search");
ih = oh.default = n4;
const mx = () => {
        const {
            isCheckedTheme: e,
            setisCheckedTheme: t
        } = vt(), n = () => {
            const r = !e;
            t(r), localStorage.setItem("theme", r.toString())
        };
        return E.useEffect(() => {
            const r = localStorage.getItem("theme") || "true";
            t(r === "true")
        }, []), x.jsxs("label", {
            className: "theme-switch",
            children: [x.jsx("input", {
                type: "checkbox",
                className: "theme-switch__checkbox",
                checked: e,
                onChange: n
            }), x.jsxs("div", {
                className: "theme-switch__container",
                children: [x.jsx("div", {
                    className: "theme-switch__clouds"
                }), x.jsx("div", {
                    className: "theme-switch__stars-container",
                    children: x.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 144 55",
                        fill: "none",
                        children: x.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z",
                            fill: "currentColor"
                        })
                    })
                }), x.jsx("div", {
                    className: "theme-switch__circle-container",
                    children: x.jsx("div", {
                        className: "theme-switch__sun-moon-container",
                        children: x.jsxs("div", {
                            className: "theme-switch__moon",
                            children: [x.jsx("div", {
                                className: "theme-switch__spot"
                            }), x.jsx("div", {
                                className: "theme-switch__spot"
                            }), x.jsx("div", {
                                className: "theme-switch__spot"
                            })]
                        })
                    })
                })]
            })]
        })
    },
    r4 = ({
        anchorEl: e,
        open: t,
        handleClose: n
    }) => {
        const r = Ht();
        return x.jsxs(X3, {
            id: "basic-menu",
            anchorEl: e,
            open: t,
            onClose: n,
            MenuListProps: {
                "aria-labelledby": "basic-button"
            },
            children: [x.jsx("div", {}), x.jsx(Wr, {
                onClick: () => {
                    n(), r("/")
                },
                children: x.jsxs("div", {
                    className: "text-base font-semibold text-custom-dark-2 min-w-[13rem] flex items-center gap-x-3",
                    children: [x.jsx(cx, {
                        sx: {
                            fontSize: "25px"
                        }
                    }), "Home"]
                })
            }), x.jsx(Wr, {
                onClick: () => {
                    n(), r("/Trending")
                },
                children: x.jsxs("div", {
                    className: "text-base font-semibold text-custom-dark-2 min-w-[13rem] flex items-center gap-x-3",
                    children: [x.jsx(fx, {
                        sx: {
                            fontSize: "25px"
                        }
                    }), "Trending"]
                })
            }), x.jsx(Wr, {
                onClick: () => {
                    n(), r("/Latest")
                },
                children: x.jsxs("div", {
                    className: "text-base font-semibold text-custom-dark-2 min-w-[13rem] flex items-center gap-x-3",
                    children: [x.jsx(dx, {
                        sx: {
                            fontSize: "25px"
                        }
                    }), "Latest"]
                })
            }), x.jsx(Wr, {
                onClick: () => {
                    n(), r("/Popular")
                },
                children: x.jsxs("div", {
                    className: "text-base font-semibold text-custom-dark-2 min-w-[13rem] flex items-center gap-x-3",
                    children: [x.jsx(px, {
                        sx: {
                            fontSize: "25px"
                        }
                    }), "Popular"]
                })
            }), x.jsx(Wr, {
                onClick: () => {
                    n(), r("/MyList")
                },
                children: x.jsxs("div", {
                    className: "text-base font-semibold text-custom-dark-2 min-w-[13rem] flex items-center gap-x-3",
                    children: [x.jsx(hx, {
                        sx: {
                            fontSize: "25px"
                        }
                    }), "My List"]
                })
            }), x.jsx("br", {}), x.jsx("hr", {}), x.jsx(Wr, {
                onClick: () => {
                    n(), r("/Search")
                },
                children: x.jsxs("div", {
                    className: "text-base font-semibold text-custom-dark-2 min-w-[13rem] flex items-center gap-x-3",
                    children: [x.jsx(ih, {
                        sx: {
                            fontSize: "25px"
                        }
                    }), "Search for Anime"]
                })
            }), x.jsx(Wr, {
                children: x.jsx(mx, {})
            })]
        })
    },
    o4 = () => {
        const {
            isCheckedTheme: e
        } = vt(), [t, n] = E.useState(!1), r = u => {
            n(u.target.checked)
        }, [o, i] = E.useState(null), s = !!o, l = u => {
            i(u.currentTarget)
        }, a = () => {
            n(!1), i(null)
        };
        return x.jsxs("div", {
            className: "flex lg:hidden",
            children: [x.jsxs("label", {
                className: "hamburger",
                "aria-controls": s ? "basic-menu" : void 0,
                "aria-haspopup": "true",
                "aria-expanded": s ? "true" : void 0,
                onClick: l,
                children: [x.jsx("input", {
                    type: "checkbox",
                    checked: t,
                    onChange: r
                }), x.jsxs("svg", {
                    viewBox: "0 0 32 32",
                    children: [x.jsx("path", {
                        className: `line line-top-bottom ${e?"stroke-[white]":"stroke-[black]"}`,
                        d: "M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    }), x.jsx("path", {
                        className: `line ${e?"stroke-[white]":"stroke-[black]"}`,
                        d: "M7 16 27 16"
                    })]
                })]
            }), x.jsx(r4, {
                anchorEl: o,
                open: s,
                handleClose: a
            })]
        })
    },
    i4 = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"],
    s4 = Je(DT, {
        name: "MuiPopper",
        slot: "Root",
        overridesResolver: (e, t) => t.root
    })({}),
    l4 = E.forwardRef(function(t, n) {
        var r;
        const o = F1(),
            i = on({
                props: t,
                name: "MuiPopper"
            }),
            {
                anchorEl: s,
                component: l,
                components: a,
                componentsProps: u,
                container: c,
                disablePortal: f,
                keepMounted: h,
                modifiers: y,
                open: v,
                placement: d,
                popperOptions: b,
                popperRef: m,
                transition: p,
                slots: g,
                slotProps: w
            } = i,
            C = xe(i, i4),
            S = (r = g == null ? void 0 : g.root) != null ? r : a == null ? void 0 : a.Root,
            k = j({
                anchorEl: s,
                container: c,
                disablePortal: f,
                keepMounted: h,
                modifiers: y,
                open: v,
                placement: d,
                popperOptions: b,
                popperRef: m,
                transition: p
            }, C);
        return x.jsx(s4, j({
            as: l,
            direction: o == null ? void 0 : o.direction,
            slots: {
                root: S
            },
            slotProps: w ?? u
        }, k, {
            ref: n
        }))
    }),
    vx = l4;

function a4(e) {
    return nn("MuiTooltip", e)
}
const u4 = Ct("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]),
    er = u4,
    c4 = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];

function f4(e) {
    return Math.round(e * 1e5) / 1e5
}
const d4 = e => {
        const {
            classes: t,
            disableInteractive: n,
            arrow: r,
            touch: o,
            placement: i
        } = e, s = {
            popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
            tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${hn(i.split("-")[0])}`],
            arrow: ["arrow"]
        };
        return wn(s, a4, t)
    },
    p4 = Je(vx, {
        name: "MuiTooltip",
        slot: "Popper",
        overridesResolver: (e, t) => {
            const {
                ownerState: n
            } = e;
            return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose]
        }
    })(({
        theme: e,
        ownerState: t,
        open: n
    }) => j({
        zIndex: (e.vars || e).zIndex.tooltip,
        pointerEvents: "none"
    }, !t.disableInteractive && {
        pointerEvents: "auto"
    }, !n && {
        pointerEvents: "none"
    }, t.arrow && {
        [`&[data-popper-placement*="bottom"] .${er.arrow}`]: {
            top: 0,
            marginTop: "-0.71em",
            "&::before": {
                transformOrigin: "0 100%"
            }
        },
        [`&[data-popper-placement*="top"] .${er.arrow}`]: {
            bottom: 0,
            marginBottom: "-0.71em",
            "&::before": {
                transformOrigin: "100% 0"
            }
        },
        [`&[data-popper-placement*="right"] .${er.arrow}`]: j({}, t.isRtl ? {
            right: 0,
            marginRight: "-0.71em"
        } : {
            left: 0,
            marginLeft: "-0.71em"
        }, {
            height: "1em",
            width: "0.71em",
            "&::before": {
                transformOrigin: "100% 100%"
            }
        }),
        [`&[data-popper-placement*="left"] .${er.arrow}`]: j({}, t.isRtl ? {
            left: 0,
            marginLeft: "-0.71em"
        } : {
            right: 0,
            marginRight: "-0.71em"
        }, {
            height: "1em",
            width: "0.71em",
            "&::before": {
                transformOrigin: "0 0"
            }
        })
    })),
    h4 = Je("div", {
        name: "MuiTooltip",
        slot: "Tooltip",
        overridesResolver: (e, t) => {
            const {
                ownerState: n
            } = e;
            return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${hn(n.placement.split("-")[0])}`]]
        }
    })(({
        theme: e,
        ownerState: t
    }) => j({
        backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Zn(e.palette.grey[700], .92),
        borderRadius: (e.vars || e).shape.borderRadius,
        color: (e.vars || e).palette.common.white,
        fontFamily: e.typography.fontFamily,
        padding: "4px 8px",
        fontSize: e.typography.pxToRem(11),
        maxWidth: 300,
        margin: 2,
        wordWrap: "break-word",
        fontWeight: e.typography.fontWeightMedium
    }, t.arrow && {
        position: "relative",
        margin: 0
    }, t.touch && {
        padding: "8px 16px",
        fontSize: e.typography.pxToRem(14),
        lineHeight: `${f4(16/14)}em`,
        fontWeight: e.typography.fontWeightRegular
    }, {
        [`.${er.popper}[data-popper-placement*="left"] &`]: j({
            transformOrigin: "right center"
        }, t.isRtl ? j({
            marginLeft: "14px"
        }, t.touch && {
            marginLeft: "24px"
        }) : j({
            marginRight: "14px"
        }, t.touch && {
            marginRight: "24px"
        })),
        [`.${er.popper}[data-popper-placement*="right"] &`]: j({
            transformOrigin: "left center"
        }, t.isRtl ? j({
            marginRight: "14px"
        }, t.touch && {
            marginRight: "24px"
        }) : j({
            marginLeft: "14px"
        }, t.touch && {
            marginLeft: "24px"
        })),
        [`.${er.popper}[data-popper-placement*="top"] &`]: j({
            transformOrigin: "center bottom",
            marginBottom: "14px"
        }, t.touch && {
            marginBottom: "24px"
        }),
        [`.${er.popper}[data-popper-placement*="bottom"] &`]: j({
            transformOrigin: "center top",
            marginTop: "14px"
        }, t.touch && {
            marginTop: "24px"
        })
    })),
    m4 = Je("span", {
        name: "MuiTooltip",
        slot: "Arrow",
        overridesResolver: (e, t) => t.arrow
    })(({
        theme: e
    }) => ({
        overflow: "hidden",
        position: "absolute",
        width: "1em",
        height: "0.71em",
        boxSizing: "border-box",
        color: e.vars ? e.vars.palette.Tooltip.bg : Zn(e.palette.grey[700], .9),
        "&::before": {
            content: '""',
            margin: "auto",
            display: "block",
            width: "100%",
            height: "100%",
            backgroundColor: "currentColor",
            transform: "rotate(45deg)"
        }
    }));
let El = !1,
    Wc = null,
    Fi = {
        x: 0,
        y: 0
    };

function Cl(e, t) {
    return n => {
        t && t(n), e(n)
    }
}
const v4 = E.forwardRef(function(t, n) {
        var r, o, i, s, l, a, u, c, f, h, y, v, d, b, m, p, g, w, C;
        const S = on({
                props: t,
                name: "MuiTooltip"
            }),
            {
                arrow: k = !1,
                children: P,
                components: N = {},
                componentsProps: O = {},
                describeChild: L = !1,
                disableFocusListener: $ = !1,
                disableHoverListener: W = !1,
                disableInteractive: U = !1,
                disableTouchListener: H = !1,
                enterDelay: I = 100,
                enterNextDelay: Q = 0,
                enterTouchDelay: _ = 700,
                followCursor: T = !1,
                id: B,
                leaveDelay: X = 0,
                leaveTouchDelay: q = 1500,
                onClose: re,
                onOpen: G,
                open: J,
                placement: he = "bottom",
                PopperComponent: je,
                PopperProps: fe = {},
                slotProps: ye = {},
                slots: Be = {},
                title: me,
                TransitionComponent: Ie = cd,
                TransitionProps: oe
            } = S,
            Se = xe(S, c4),
            ve = E.isValidElement(P) ? P : x.jsx("span", {
                children: P
            }),
            Wt = Ku(),
            gt = Wt.direction === "rtl",
            [rt, En] = E.useState(),
            [Ue, kt] = E.useState(null),
            Pt = E.useRef(!1),
            Ot = U || T,
            Ee = E.useRef(),
            ft = E.useRef(),
            Mt = E.useRef(),
            V = E.useRef(),
            [R, M] = h1({
                controlled: J,
                default: !1,
                name: "Tooltip",
                state: "open"
            });
        let D = R;
        const se = p1(B),
            ie = E.useRef(),
            de = E.useCallback(() => {
                ie.current !== void 0 && (document.body.style.WebkitUserSelect = ie.current, ie.current = void 0), clearTimeout(V.current)
            }, []);
        E.useEffect(() => () => {
            clearTimeout(Ee.current), clearTimeout(ft.current), clearTimeout(Mt.current), de()
        }, [de]);
        const A = ue => {
                clearTimeout(Wc), El = !0, M(!0), G && !D && G(ue)
            },
            F = kr(ue => {
                clearTimeout(Wc), Wc = setTimeout(() => {
                    El = !1
                }, 800 + X), M(!1), re && D && re(ue), clearTimeout(Ee.current), Ee.current = setTimeout(() => {
                    Pt.current = !1
                }, Wt.transitions.duration.shortest)
            }),
            te = ue => {
                Pt.current && ue.type !== "touchstart" || (rt && rt.removeAttribute("title"), clearTimeout(ft.current), clearTimeout(Mt.current), I || El && Q ? ft.current = setTimeout(() => {
                    A(ue)
                }, El ? Q : I) : A(ue))
            },
            Z = ue => {
                clearTimeout(ft.current), clearTimeout(Mt.current), Mt.current = setTimeout(() => {
                    F(ue)
                }, X)
            },
            {
                isFocusVisibleRef: Y,
                onBlur: ae,
                onFocus: _e,
                ref: $e
            } = Pp(),
            [, Te] = E.useState(!1),
            Ze = ue => {
                ae(ue), Y.current === !1 && (Te(!1), Z(ue))
            },
            Ve = ue => {
                rt || En(ue.currentTarget), _e(ue), Y.current === !0 && (Te(!0), te(ue))
            },
            ot = ue => {
                Pt.current = !0;
                const Qt = ve.props;
                Qt.onTouchStart && Qt.onTouchStart(ue)
            },
            qn = te,
            Mn = Z,
            wo = ue => {
                ot(ue), clearTimeout(Mt.current), clearTimeout(Ee.current), de(), ie.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", V.current = setTimeout(() => {
                    document.body.style.WebkitUserSelect = ie.current, te(ue)
                }, _)
            },
            el = ue => {
                ve.props.onTouchEnd && ve.props.onTouchEnd(ue), de(), clearTimeout(Mt.current), Mt.current = setTimeout(() => {
                    F(ue)
                }, q)
            };
        E.useEffect(() => {
            if (!D) return;

            function ue(Qt) {
                (Qt.key === "Escape" || Qt.key === "Esc") && F(Qt)
            }
            return document.addEventListener("keydown", ue), () => {
                document.removeEventListener("keydown", ue)
            }
        }, [F, D]);
        const tl = Nt(ve.ref, $e, En, n);
        !me && me !== 0 && (D = !1);
        const Ju = E.useRef(),
            Px = ue => {
                const Qt = ve.props;
                Qt.onMouseMove && Qt.onMouseMove(ue), Fi = {
                    x: ue.clientX,
                    y: ue.clientY
                }, Ju.current && Ju.current.update()
            },
            wi = {},
            Zu = typeof me == "string";
        L ? (wi.title = !D && Zu && !W ? me : null, wi["aria-describedby"] = D ? se : null) : (wi["aria-label"] = Zu ? me : null, wi["aria-labelledby"] = D && !Zu ? se : null);
        const Cn = j({}, wi, Se, ve.props, {
                className: ke(Se.className, ve.props.className),
                onTouchStart: ot,
                ref: tl
            }, T ? {
                onMouseMove: Px
            } : {}),
            Si = {};
        H || (Cn.onTouchStart = wo, Cn.onTouchEnd = el), W || (Cn.onMouseOver = Cl(qn, Cn.onMouseOver), Cn.onMouseLeave = Cl(Mn, Cn.onMouseLeave), Ot || (Si.onMouseOver = qn, Si.onMouseLeave = Mn)), $ || (Cn.onFocus = Cl(Ve, Cn.onFocus), Cn.onBlur = Cl(Ze, Cn.onBlur), Ot || (Si.onFocus = Ve, Si.onBlur = Ze));
        const Ox = E.useMemo(() => {
                var ue;
                let Qt = [{
                    name: "arrow",
                    enabled: !!Ue,
                    options: {
                        element: Ue,
                        padding: 4
                    }
                }];
                return (ue = fe.popperOptions) != null && ue.modifiers && (Qt = Qt.concat(fe.popperOptions.modifiers)), j({}, fe.popperOptions, {
                    modifiers: Qt
                })
            }, [Ue, fe]),
            Ei = j({}, S, {
                isRtl: gt,
                arrow: k,
                disableInteractive: Ot,
                placement: he,
                PopperComponentProp: je,
                touch: Pt.current
            }),
            ec = d4(Ei),
            lh = (r = (o = Be.popper) != null ? o : N.Popper) != null ? r : p4,
            ah = (i = (s = (l = Be.transition) != null ? l : N.Transition) != null ? s : Ie) != null ? i : cd,
            uh = (a = (u = Be.tooltip) != null ? u : N.Tooltip) != null ? a : h4,
            ch = (c = (f = Be.arrow) != null ? f : N.Arrow) != null ? c : m4,
            Tx = Ki(lh, j({}, fe, (h = ye.popper) != null ? h : O.popper, {
                className: ke(ec.popper, fe == null ? void 0 : fe.className, (y = (v = ye.popper) != null ? v : O.popper) == null ? void 0 : y.className)
            }), Ei),
            Rx = Ki(ah, j({}, oe, (d = ye.transition) != null ? d : O.transition), Ei),
            jx = Ki(uh, j({}, (b = ye.tooltip) != null ? b : O.tooltip, {
                className: ke(ec.tooltip, (m = (p = ye.tooltip) != null ? p : O.tooltip) == null ? void 0 : m.className)
            }), Ei),
            Nx = Ki(ch, j({}, (g = ye.arrow) != null ? g : O.arrow, {
                className: ke(ec.arrow, (w = (C = ye.arrow) != null ? C : O.arrow) == null ? void 0 : w.className)
            }), Ei);
        return x.jsxs(E.Fragment, {
            children: [E.cloneElement(ve, Cn), x.jsx(lh, j({
                as: je ?? vx,
                placement: he,
                anchorEl: T ? {
                    getBoundingClientRect: () => ({
                        top: Fi.y,
                        left: Fi.x,
                        right: Fi.x,
                        bottom: Fi.y,
                        width: 0,
                        height: 0
                    })
                } : rt,
                popperRef: Ju,
                open: rt ? D : !1,
                id: se,
                transition: !0
            }, Si, Tx, {
                popperOptions: Ox,
                children: ({
                    TransitionProps: ue
                }) => x.jsx(ah, j({
                    timeout: Wt.transitions.duration.shorter
                }, ue, Rx, {
                    children: x.jsxs(uh, j({}, jx, {
                        children: [me, k ? x.jsx(ch, j({}, Nx, {
                            ref: kt
                        })) : null]
                    }))
                }))
            }))]
        })
    }),
    g4 = v4,
    y4 = ({
        active: e
    }) => {
        const {
            isCheckedTheme: t
        } = vt(), n = Ht();
        return x.jsxs("div", {
            className: `hidden lg:flex gap-x-10  ${t?"text-custom-gray-1":"text-custom-dark-1 "}`,
            children: [x.jsx("li", {
                className: `text-base list-none cursor-pointer hover:text-custom-blue-1
                custom-transition-duration disable-highlight active:scale-95 font-normal
                ${e==="Home"&&t?"text-white font-semibold":e==="Home"&&!t?"font-semibold":"font-normal"}`,
                onClick: () => n("/"),
                children: "Home"
            }), x.jsx("li", {
                className: `text-base list-none cursor-pointer hover:text-custom-blue-1
                custom-transition-duration disable-highlight active:scale-95 font-normal
                ${e==="Trending"&&t?"text-white font-semibold":e==="Trending"&&!t?"font-semibold":"font-normal"}`,
                onClick: () => n("/Trending"),
                children: "Trending"
            }), x.jsx("li", {
                className: `text-base list-none cursor-pointer hover:text-custom-blue-1
                custom-transition-duration disable-highlight active:scale-95 font-normal
                ${e==="Latest"&&t?"text-white font-semibold":e==="Latest"&&!t?"font-semibold":"font-normal"}`,
                onClick: () => n("/Latest"),
                children: "Latest"
            }), x.jsx("li", {
                className: `text-base list-none cursor-pointer hover:text-custom-blue-1
                custom-transition-duration disable-highlight active:scale-95 font-normal
                ${e==="Popular"&&t?"text-white font-semibold":e==="Popular"&&!t?"font-semibold":"font-normal"}`,
                onClick: () => n("/Popular"),
                children: "Popular"
            }), x.jsx("li", {
                className: `text-base list-none cursor-pointer hover:text-custom-blue-1
                custom-transition-duration disable-highlight active:scale-95 font-normal
                ${e==="My List"&&t?"text-white font-semibold":e==="My List"&&!t?"font-semibold":"font-normal"}`,
                onClick: () => n("/MyList"),
                children: "My List"
            })]
        })
    },
    x4 = Je(({
        className: e,
        ...t
    }) => x.jsx(g4, {
        ...t,
        classes: {
            popper: e
        }
    }))(({
        theme: e
    }) => ({
        [`& .${er.tooltip}`]: {
            backgroundColor: e.palette.common.white,
            color: "rgba(0, 0, 0, 0.87)",
            boxShadow: e.shadows[1],
            fontSize: "1rem"
        }
    })),
    Hr = ({
        active: e
    }) => {
        const {
            isCheckedTheme: t
        } = vt(), n = Ht();
        return x.jsxs("nav", {
            className: `px-7 lg:px-12 py-5 flex items-center justify-between z-10
            sticky inset-0 custom-shaddow-bottom custom-transition-duration
            ${t?"bg-custom-dark-1":"bg-white"}`,
            children: [x.jsxs("div", {
                className: "flex items-center gap-x-14",
                children: [x.jsxs("p", {
                    className: `text-xl 360size:text-2xl custom-font-moonrocks tracking-wide
                disable-highlight cursor-pointer active:scale-95 custom-transition-duration
                ${t?"text-white":"text-custom-dark-1"}`,
                    onClick: () => n("/"),
                    children: ["ANIME-", x.jsx("span", {
                        className: "text-xl 360size:text-2xl text-custom-blue-1",
                        children: "X"
                    })]
                }), x.jsx(y4, {
                    active: e
                })]
            }), x.jsxs("div", {
                className: "hidden lg:flex items-center gap-x-5",
                children: [x.jsx(x4, {
                    title: "Click here to search",
                    children: x.jsx(ih, {
                        sx: {
                            fontSize: "30px"
                        },
                        className: `cursor-pointer hover:opacity-80 active:scale-y-95 disable-highlight
                    scale-x-[-1] ${t?"text-white":"text-custom-dark-1 "}`,
                        onClick: () => n("/Search")
                    })
                }), x.jsx(mx, {})]
            }), x.jsx(o4, {})]
        })
    },
    b4 = "/assets/sololeveling-DS-5V6cE.jpg",
    w4 = "/assets/naruto-f-jHZ4u4.png",
    S4 = "/assets/demonSlayer-Amb0deXZ.png",
    eg = [{
        id: "ore-dake-level-up-na-ken",
        title: "Solo Leveling",
        description: 'Ten years ago, "the Gate" appeared and connected the real world with the realm of magic and monsters. To combat these vile beasts, ordinary people received superhuman powers and became known as "Hunters." Twenty-year-old Sung Jin-Woo is one such Hunter, but he is known as the "Worlds Weakest," owing to his pathetic power compared to even a measly E-Rank. Still, he hunts monsters tirelessly in low-rank Gates to pay for his mothers medical bills. However, this miserable lifestyle changes when Jin-Woo—believing himself to be the only one left to die in a mission gone terribly wrong—awakens in a hospital three days later to find a mysterious screen floating in front of him. This "Quest Log" demands that Jin-Woo completes an unrealistic and intense training program, or face an appropriate penalty. Initially reluctant to comply because of the quests rigor, Jin-Woo soon finds that it may just transform him into one of the worlds most fearsome Hunters.',
        backgroundImage: b4,
        image: "https://gogocdn.net/cover/ore-dake-level-up-na-ken-1704247746.png",
        rating: 9.5,
        releaseDate: 2024,
        type: "Series",
        totalEpisodes: 1,
        genres: ["Action", "Adventure", "Fantasy"]
    }, {
        id: "naruto-shippuden",
        title: "Naruto Shippuden",
        description: `Naruto Shippuden is a continuation of original series Naruto. After 2 and a half years of training with his master, Naruto finally returns to his village of Konoha. Naruto is now older and more mature than before. With his new trained ability, his goal of searching for long lost friend, Uchiha Sasuke, is set for a stronger determination than before.

Naruto Shippuden is a continuation of original series Naruto. After 2 and a half years of training with his master, Naruto finally returns to his village of Konoha. Naruto is now older and more mature than before. With his new trained ability, his goal of searching for long lost friend, Uchiha Sasuke, is set for a stronger determination than before.
He is putting his ambitions to work along with the help of his many friends, though with so many obstacles ahead of him. Now, he will face even more dangerous enemies, especially the Akatsuki.`,
        backgroundImage: w4,
        image: "https://gogocdn.net/images/anime/naruto_shippuden.jpg",
        rating: 8.9,
        releaseDate: 2007,
        type: "Series",
        totalEpisodes: 500,
        genres: ["Action", "Comedy", "Martial Arts", "Shounen", "Super Power"]
    }, {
        id: "kimetsu-no-yaiba",
        title: "Kimetsu no Yaiba",
        description: `Since ancient times, rumors have abounded of man-eating demons lurking in the woods. Because of this, the local townsfolk never venture outside at night. Legend has it that a demon slayer also roams the night, hunting down these bloodthirsty demons. For young Tanjirou, these rumors will soon to become his harsh reality...

Ever since the death of his father, Tanjirou has taken it upon himself to support his family. Although their lives may be hardened by tragedy, they've found happiness. But that ephemeral warmth is shattered one day when Tanjirou finds his family slaughtered and the lone survivor, his sister Nezuko, turned into a demon. To his surprise, however, Nezuko still shows signs of human emotion and thought...

Thus begins Tanjirou's quest to fight demons and turn his sister human again.`,
        backgroundImage: S4,
        image: "https://gogocdn.net/cover/kimetsu-no-yaiba.png",
        rating: 8.4,
        releaseDate: 2019,
        type: "Series",
        totalEpisodes: 26,
        genres: ["Action", "Demons", "Historical", "Shounen", "Supernatural"]
    }],
    Ba = ({
        value: e,
        bgColor: t,
        shadeColor: n,
        icon: r,
        onClick: o
    }) => x.jsxs("button", {
        className: `text-white text-base rounded-3xl custom-shadow-button
        disable-highlight flex items-center justify-center sm:justify-start gap-x-3 pl-6 pr-2 py-1 ${t}
        custom-transition-duration hover:opacity-80`,
        onClick: o,
        children: [e, x.jsx("div", {
            className: `${n} py-3 w-14 flex justify-center rounded-3xl`,
            children: x.jsx("img", {
                src: r,
                alt: "Button Icon",
                className: "h-4"
            })
        })]
    }),
    gx = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAXVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9RKvvlAAAAHnRSTlMA/PZZCJnr4NvOyLytpoJ8ZUMzHxTwxb2JREElIhCUT5VBAAAAaUlEQVQoz43RORaAIBAEUUFQEQXFfeP+x5SOm4AfVsCbGSpr7orFKMaFayK9ogpdzRX2QBWEXqlCM3EFc1EFMbxUQTqFStoalZ3ZqgtfkO7LTPbwZP2c21jRxjJ3nSOUXX3zqug3bZqG/FC6HvwsayrkAAAAAElFTkSuQmCC",
    yx = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYCAMAAADEfo0+AAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMA5Vfov4x0KRYK9fTW1KakQT5+HAX6AAAARUlEQVQY0+XIyRWAIBDA0DDs7k7/xfoUFbEFcstHjH4yQvkq6K8+IYQGBgEZK9gNYLcPTJGrOBdwibvkTlgyb3lVPE3+AEaPFplZxROZAAAAAElFTkSuQmCC",
    zs = (e, t) => {
        const {
            animeDetails: n,
            setAnimeDetails: r
        } = pp.getState();
        let o = !1;
        const i = n.map(s => {
            if (s.animeId === e) {
                o = !0;
                const l = s.watchedEpisode.filter(a => a !== t);
                return {
                    ...s,
                    watchedEpisode: [...l, t]
                }
            }
            return s
        });
        r(o ? i : [...n, {
            animeId: e,
            watchedEpisode: [t]
        }])
    },
    xx = (e, t, n, r) => {
        const {
            myListDetails: o,
            setMyListDetails: i
        } = hp.getState();
        let s = !1;
        const l = o.map(a => a.animeId === e ? (s = !0, {
            ...a,
            totalEpisodes: r
        }) : a);
        s ? (i(l), Ce.info("This anime is already in your list")) : (i([...o, {
            animeId: e,
            animeName: t,
            animeImage: n,
            totalEpisodes: r
        }]), Ce.success("Added to the list succesfully"))
    },
    E4 = e => {
        const {
            myListDetails: t,
            setMyListDetails: n
        } = hp.getState(), r = t.filter(o => o.animeId !== e);
        r.length !== t.length ? (n(r), Ce.success("Anime removed from the list successfully")) : Ce.error("Anime not found in your list")
    },
    C4 = () => {
        var v, d, b;
        const {
            isCheckedTheme: e
        } = vt(), t = Ht(), [n, r] = E.useState();
        E.useEffect(() => {
            const m = Math.random() * eg.length;
            r(eg[Math.floor(m)])
        }, []);
        const [o, i] = E.useState(!1), [s, l] = E.useState(!1), a = () => {
            i(!o), l(!s)
        }, u = 420, c = ((v = n == null ? void 0 : n.description) == null ? void 0 : v.length) && ((d = n == null ? void 0 : n.description) == null ? void 0 : d.length) > u && !o, f = c ? `${(b=n==null?void 0:n.description)==null?void 0:b.slice(0,u)}.....` : n == null ? void 0 : n.description, [h, y] = E.useState(!1);
        return x.jsx("div", {
            className: "lg:pb-[26rem] custom-gradient-bg-dark flex",
            style: {
                background: `radial-gradient(40.56% 36.62% at 63.93% 48.85%,
              rgba(149, 149, 149, 0.00) 0%, rgba(0, 0, 0, 0.20) 100%),
              linear-gradient(0deg, ${e?"rgba(7, 13, 17, 0.95)":"rgba(255, 255, 255, 0.90)"} 0%,
              ${e?"rgba(7, 13, 17, 0.95)":"rgba(255, 255, 255, 0.90)"} 100%),
              url(${n==null?void 0:n.backgroundImage}) no-repeat lightgray 70% / cover`
            },
            children: x.jsxs("div", {
                className: "max-w-[80%] sm:max-w-none w-10/12 mx-auto mt-[5rem] lg:mt-[11rem] lg:flex gap-x-20",
                children: [x.jsx(uu.LazyLoadImage, {
                    onLoad: () => y(!0),
                    wrapperClassName: h ? "" : "blur-up",
                    className: "max-w-[85%] lg:min-w-[20rem] max-h-[26rem] sm:max-w-md mx-auto lg:mx-0 object-cover rounded-3xl",
                    alt: "Anime Image",
                    src: n == null ? void 0 : n.image,
                    onError: cu
                }), x.jsxs("div", {
                    className: "mt-0 lg:mt-4",
                    children: [x.jsx("p", {
                        className: `text-2xl sm:text-3xl md:text-4xl text-center
                    lg:text-left mt-10 lg:mt-0 custom-font-rocksalt custom-transition-duration
                    ${e?"text-white":"text-custom-dark-1"}`,
                        children: n == null ? void 0 : n.title
                    }), x.jsx("p", {
                        className: `text-center lg:text-left text-base mt-5 max-w-[60rem] custom-transition-duration
                        ${e?"text-custom-gray-2":"text-custom-dark-2"}`,
                        children: f
                    }), f && f.length && f.length >= 420 && x.jsx("p", {
                        onClick: a,
                        className: `mt-5 lg:mt-3 text-base text-center mx-auto lg:mx-0 lg:text-left
                        w-[7.2rem] cursor-pointer custom-transition-duration hover:sm:text-custom-blue-1
                        hover:sm:underline active:scale-95 ${e?"text-custom-gray-3":"text-custom-dark-2"}`,
                        children: c && !o && !s ? "Read more" : "See less"
                    }), x.jsxs("div", {
                        className: "clear-both mt-10 lg:mt-12 flex flex-col sm:flex-row sm:justify-center gap-5 lg:float-left",
                        children: [x.jsx(Ba, {
                            value: "Watch",
                            bgColor: "bg-custom-blue-1",
                            shadeColor: "bg-[#141D2B]",
                            icon: gx,
                            onClick: () => t(`Anime/${n==null?void 0:n.id}`)
                        }), x.jsx(Ba, {
                            value: "Add to list",
                            bgColor: "bg-[#111111]",
                            shadeColor: "bg-[#141D2B]",
                            icon: yx,
                            onClick: () => xx((n == null ? void 0 : n.id) || "", (n == null ? void 0 : n.title) || "", n != null && n.realImage ? n == null ? void 0 : n.realImage : (n == null ? void 0 : n.image) || "", (n == null ? void 0 : n.totalEpisodes) || 0)
                        })]
                    }), x.jsxs("div", {
                        className: "clear-both mt-14 mb-28 lg:mb-0 lg:mt-[9rem] flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-2",
                        children: [x.jsxs("p", {
                            className: `text-base custom-transition-duration
                            ${e?"text-custom-gray-1":"text-custom-dark-1"}`,
                            children: ["Rating : ", x.jsx("span", {
                                className: `text-lg font-medium custom-transition-duration  ${e?"text-white":"text-custom-dark-2"}`,
                                children: n == null ? void 0 : n.rating
                            })]
                        }), x.jsxs("p", {
                            className: `text-base custom-transition-duration
                            ${e?"text-custom-gray-1":"text-custom-dark-1"}`,
                            children: ["Year : ", x.jsx("span", {
                                className: `text-lg font-medium custom-transition-duration  ${e?"text-white":"text-custom-dark-2"}`,
                                children: n == null ? void 0 : n.releaseDate
                            })]
                        }), x.jsxs("p", {
                            className: `text-base custom-transition-duration
                            ${e?"text-custom-gray-1":"text-custom-dark-1"}`,
                            children: ["Type : ", x.jsx("span", {
                                className: `text-lg font-medium custom-transition-duration  ${e?"text-white":"text-custom-dark-2"}`,
                                children: n == null ? void 0 : n.type
                            })]
                        }), x.jsxs("p", {
                            className: `text-base custom-transition-duration
                            ${e?"text-custom-gray-1":"text-custom-dark-1"} text-center lg:text-left`,
                            children: ["Genres :  ", (n == null ? void 0 : n.genres) && (n == null ? void 0 : n.genres.map((m, p) => x.jsxs("span", {
                                className: `text-lg font-medium custom-transition-duration  ${e?"text-white":"text-custom-dark-2"}`,
                                children: [m, p !== (n == null ? void 0 : n.genres.length) - 1 && ", "]
                            }, p)))]
                        })]
                    })]
                })]
            })
        })
    },
    k4 = () => {
        const {
            isCheckedTheme: e
        } = vt();
        return x.jsxs(x.Fragment, {
            children: [x.jsx(Hr, {
                active: "Home"
            }), x.jsx(C4, {}), x.jsx("div", {
                className: "w-full h-20 absolute mt-[-2.5rem] left-0 custom-transition-duration",
                style: {
                    backgroundImage: `linear-gradient(180deg, transparent, ${e?"#070c13, #070c13":"#ffff, #ffff"})`
                }
            }), x.jsx(ar, {
                fetchCategory: "top-airing",
                type: "Trending",
                title: "Trending Now",
                description: "Dive into the captivating world of the latest and most popular anime series available!",
                spacing: "lg:top-[-12rem]",
                hasSeeAll: !0
            }), x.jsx(ar, {
                fetchCategory: "recent-episodes",
                type: "Latest",
                title: "Latest Release",
                description: "Stay ahead of the curve with the newest and most exciting releases!",
                spacing: "lg:top-[-8rem]",
                hasSeeAll: !0
            }), x.jsx(Vr, {})]
        })
    },
    P4 = () => x.jsxs(x.Fragment, {
        children: [x.jsx(Hr, {
            active: "Trending"
        }), x.jsx(ar, {
            fetchCategory: "top-airing",
            type: "Trending",
            title: "Trending Now",
            description: "Dive into the captivating world of the latest and most popular anime series available!",
            spacing: "lg:pt-10 lg:pb-20"
        }), x.jsx(Vr, {})]
    }),
    O4 = () => x.jsxs(x.Fragment, {
        children: [x.jsx(Hr, {
            active: "Latest"
        }), x.jsx(ar, {
            fetchCategory: "recent-episodes",
            type: "Latest",
            title: "Latest Release",
            description: "Stay ahead of the curve with the newest and most exciting releases!",
            spacing: "lg:pt-10 lg:pb-20"
        }), x.jsx(Vr, {})]
    }),
    T4 = () => x.jsxs(x.Fragment, {
        children: [x.jsx(Hr, {
            active: "Popular"
        }), x.jsx(ar, {
            fetchCategory: "popular",
            type: "Popular",
            title: "Popular Now",
            description: "Stay updated and connected with the latest trends by immersing in the most popular shows available!",
            spacing: "lg:pt-10 lg:pb-20"
        }), x.jsx(Vr, {})]
    }),
    R4 = () => {
        const {
            isCheckedTheme: e
        } = vt(), t = Ht(), [n, r] = E.useState(!1), [o, i] = E.useState(""), s = c => i(c.target.value), [l, a] = E.useState(""), u = c => {
            c.preventDefault(), a(o), r(!0)
        };
        return x.jsxs(x.Fragment, {
            children: [x.jsx(Hr, {}), x.jsx("div", {
                className: `py-20 w-full custom-transition-duration ${e?"bg-custom-dark-1":"bg-white"}`,
                children: x.jsx("div", {
                    className: "max-w-[80%] sm:max-w-none w-10/12 mx-auto",
                    children: x.jsxs("div", {
                        className: "p-y-5",
                        children: [x.jsx("div", {
                            className: "mx-auto rounded-lg bg-gray-200 p-5 w-full max-w-[40rem]",
                            children: x.jsx("form", {
                                onSubmit: u,
                                children: x.jsxs("div", {
                                    className: "flex",
                                    children: [x.jsx("div", {
                                        className: "flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5",
                                        children: x.jsx("svg", {
                                            viewBox: "0 0 20 20",
                                            "aria-hidden": "true",
                                            className: "pointer-events-none absolute w-5 fill-gray-500 transition",
                                            children: x.jsx("path", {
                                                d: "M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"
                                            })
                                        })
                                    }), x.jsx("input", {
                                        autoFocus: !0,
                                        type: "text",
                                        className: "w-full bg-white pl-2 text-base outline-0",
                                        value: o,
                                        onChange: s
                                    }), x.jsx("input", {
                                        type: "submit",
                                        value: "Search",
                                        className: "bg-custom-blue-1 py-2 px-4 rounded-tr-lg rounded-br-lg text-white sm:hover:bg-blue-800 transition-colors cursor-pointer"
                                    })]
                                })
                            })
                        }), x.jsxs("div", {
                            className: "mt-3 mx-auto w-full max-w-[40rem] flex gap-3 justify-end",
                            children: [x.jsx("button", {
                                className: `text-white bg-custom-dark-2 px-5 py-2 rounded-md
                                disable-highlight custom-transition-duration sm:hover:bg-custom-blue-1
                                active:scale-95 whitespace-nowrap`,
                                onClick: () => t(-1),
                                children: "← Go Back"
                            }), x.jsx("button", {
                                className: `text-white bg-custom-dark-2 px-5 py-2 rounded-md
                                disable-highlight custom-transition-duration sm:hover:bg-custom-blue-1
                                active:scale-95 whitespace-nowrap`,
                                onClick: () => {
                                    i(""), r(!1)
                                },
                                children: "Reset"
                            })]
                        })]
                    })
                })
            }), n ? x.jsx(ar, {
                fetchCategory: l,
                type: "Search",
                title: "Results:",
                description: `Explore anime related to the word : ${l}`,
                spacing: "lg:pt-10 lg:pb-20"
            }) : x.jsx(ar, {
                fetchCategory: "top-airing",
                type: "Trending",
                title: "Top Searches",
                description: "Here are the list of most frequently searched anime series, reflecting widespread interest across platforms worldwide",
                spacing: "lg:pt-10 lg:pb-20"
            }), x.jsx(Vr, {})]
        })
    },
    sh = "-";

function j4(e) {
    const t = _4(e),
        {
            conflictingClassGroups: n,
            conflictingClassGroupModifiers: r
        } = e;

    function o(s) {
        const l = s.split(sh);
        return l[0] === "" && l.length !== 1 && l.shift(), bx(l, t) || N4(s)
    }

    function i(s, l) {
        const a = n[s] || [];
        return l && r[s] ? [...a, ...r[s]] : a
    }
    return {
        getClassGroupId: o,
        getConflictingClassGroupIds: i
    }
}

function bx(e, t) {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
        r = t.nextPart.get(n),
        o = r ? bx(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(sh);
    return (s = t.validators.find(({
        validator: l
    }) => l(i))) == null ? void 0 : s.classGroupId
}
const tg = /^\[(.+)\]$/;

function N4(e) {
    if (tg.test(e)) {
        const t = tg.exec(e)[1],
            n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n) return "arbitrary.." + n
    }
}

function _4(e) {
    const {
        theme: t,
        prefix: n
    } = e, r = {
        nextPart: new Map,
        validators: []
    };
    return M4(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        dd(s, r, i, t)
    }), r
}

function dd(e, t, n, r) {
    e.forEach(o => {
        if (typeof o == "string") {
            const i = o === "" ? t : ng(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if ($4(o)) {
                dd(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach(([i, s]) => {
            dd(s, ng(t, i), n, r)
        })
    })
}

function ng(e, t) {
    let n = e;
    return t.split(sh).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }), n = n.nextPart.get(r)
    }), n
}

function $4(e) {
    return e.isThemeGetter
}

function M4(e, t) {
    return t ? e.map(([n, r]) => {
        const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, l]) => [t + s, l])) : i);
        return [n, o]
    }) : e
}

function A4(e) {
    if (e < 1) return {
        get: () => {},
        set: () => {}
    };
    let t = 0,
        n = new Map,
        r = new Map;

    function o(i, s) {
        n.set(i, s), t++, t > e && (t = 0, r = n, n = new Map)
    }
    return {
        get(i) {
            let s = n.get(i);
            if (s !== void 0) return s;
            if ((s = r.get(i)) !== void 0) return o(i, s), s
        },
        set(i, s) {
            n.has(i) ? n.set(i, s) : o(i, s)
        }
    }
}
const wx = "!";

function L4(e) {
    const t = e.separator,
        n = t.length === 1,
        r = t[0],
        o = t.length;
    return function(s) {
        const l = [];
        let a = 0,
            u = 0,
            c;
        for (let d = 0; d < s.length; d++) {
            let b = s[d];
            if (a === 0) {
                if (b === r && (n || s.slice(d, d + o) === t)) {
                    l.push(s.slice(u, d)), u = d + o;
                    continue
                }
                if (b === "/") {
                    c = d;
                    continue
                }
            }
            b === "[" ? a++ : b === "]" && a--
        }
        const f = l.length === 0 ? s : s.substring(u),
            h = f.startsWith(wx),
            y = h ? f.substring(1) : f,
            v = c && c > u ? c - u : void 0;
        return {
            modifiers: l,
            hasImportantModifier: h,
            baseClassName: y,
            maybePostfixModifierPosition: v
        }
    }
}

function I4(e) {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r)
    }), t.push(...n.sort()), t
}

function F4(e) {
    return {
        cache: A4(e.cacheSize),
        splitModifiers: L4(e),
        ...j4(e)
    }
}
const z4 = /\s+/;

function B4(e, t) {
    const {
        splitModifiers: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o
    } = t, i = new Set;
    return e.trim().split(z4).map(s => {
        const {
            modifiers: l,
            hasImportantModifier: a,
            baseClassName: u,
            maybePostfixModifierPosition: c
        } = n(s);
        let f = r(c ? u.substring(0, c) : u),
            h = !!c;
        if (!f) {
            if (!c) return {
                isTailwindClass: !1,
                originalClassName: s
            };
            if (f = r(u), !f) return {
                isTailwindClass: !1,
                originalClassName: s
            };
            h = !1
        }
        const y = I4(l).join(":");
        return {
            isTailwindClass: !0,
            modifierId: a ? y + wx : y,
            classGroupId: f,
            originalClassName: s,
            hasPostfixModifier: h
        }
    }).reverse().filter(s => {
        if (!s.isTailwindClass) return !0;
        const {
            modifierId: l,
            classGroupId: a,
            hasPostfixModifier: u
        } = s, c = l + a;
        return i.has(c) ? !1 : (i.add(c), o(a, u).forEach(f => i.add(l + f)), !0)
    }).reverse().map(s => s.originalClassName).join(" ")
}

function U4() {
    let e = 0,
        t, n, r = "";
    for (; e < arguments.length;)(t = arguments[e++]) && (n = Sx(t)) && (r && (r += " "), r += n);
    return r
}

function Sx(e) {
    if (typeof e == "string") return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = Sx(e[r])) && (n && (n += " "), n += t);
    return n
}

function V4(e, ...t) {
    let n, r, o, i = s;

    function s(a) {
        const u = t.reduce((c, f) => f(c), e());
        return n = F4(u), r = n.cache.get, o = n.cache.set, i = l, l(a)
    }

    function l(a) {
        const u = r(a);
        if (u) return u;
        const c = B4(a, n);
        return o(a, c), c
    }
    return function() {
        return i(U4.apply(null, arguments))
    }
}

function Me(e) {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0, t
}
const Ex = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    D4 = /^\d+\/\d+$/,
    H4 = new Set(["px", "full", "screen"]),
    W4 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    Q4 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    K4 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    q4 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;

function Pn(e) {
    return no(e) || H4.has(e) || D4.test(e)
}

function hr(e) {
    return bi(e, "length", nj)
}

function no(e) {
    return !!e && !Number.isNaN(Number(e))
}

function kl(e) {
    return bi(e, "number", no)
}

function zi(e) {
    return !!e && Number.isInteger(Number(e))
}

function G4(e) {
    return e.endsWith("%") && no(e.slice(0, -1))
}

function le(e) {
    return Ex.test(e)
}

function mr(e) {
    return W4.test(e)
}
const X4 = new Set(["length", "size", "percentage"]);

function Y4(e) {
    return bi(e, X4, Cx)
}

function J4(e) {
    return bi(e, "position", Cx)
}
const Z4 = new Set(["image", "url"]);

function ej(e) {
    return bi(e, Z4, oj)
}

function tj(e) {
    return bi(e, "", rj)
}

function Bi() {
    return !0
}

function bi(e, t, n) {
    const r = Ex.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}

function nj(e) {
    return Q4.test(e)
}

function Cx() {
    return !1
}

function rj(e) {
    return K4.test(e)
}

function oj(e) {
    return q4.test(e)
}

function ij() {
    const e = Me("colors"),
        t = Me("spacing"),
        n = Me("blur"),
        r = Me("brightness"),
        o = Me("borderColor"),
        i = Me("borderRadius"),
        s = Me("borderSpacing"),
        l = Me("borderWidth"),
        a = Me("contrast"),
        u = Me("grayscale"),
        c = Me("hueRotate"),
        f = Me("invert"),
        h = Me("gap"),
        y = Me("gradientColorStops"),
        v = Me("gradientColorStopPositions"),
        d = Me("inset"),
        b = Me("margin"),
        m = Me("opacity"),
        p = Me("padding"),
        g = Me("saturate"),
        w = Me("scale"),
        C = Me("sepia"),
        S = Me("skew"),
        k = Me("space"),
        P = Me("translate"),
        N = () => ["auto", "contain", "none"],
        O = () => ["auto", "hidden", "clip", "visible", "scroll"],
        L = () => ["auto", le, t],
        $ = () => [le, t],
        W = () => ["", Pn, hr],
        U = () => ["auto", no, le],
        H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
        I = () => ["solid", "dashed", "dotted", "double", "none"],
        Q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"],
        _ = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
        T = () => ["", "0", le],
        B = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
        X = () => [no, kl],
        q = () => [no, le];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Bi],
            spacing: [Pn, hr],
            blur: ["none", "", mr, le],
            brightness: X(),
            borderColor: [e],
            borderRadius: ["none", "", "full", mr, le],
            borderSpacing: $(),
            borderWidth: W(),
            contrast: X(),
            grayscale: T(),
            hueRotate: q(),
            invert: T(),
            gap: $(),
            gradientColorStops: [e],
            gradientColorStopPositions: [G4, hr],
            inset: L(),
            margin: L(),
            opacity: X(),
            padding: $(),
            saturate: X(),
            scale: X(),
            sepia: T(),
            skew: q(),
            space: $(),
            translate: $()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", le]
            }],
            container: ["container"],
            columns: [{
                columns: [mr]
            }],
            "break-after": [{
                "break-after": B()
            }],
            "break-before": [{
                "break-before": B()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...H(), le]
            }],
            overflow: [{
                overflow: O()
            }],
            "overflow-x": [{
                "overflow-x": O()
            }],
            "overflow-y": [{
                "overflow-y": O()
            }],
            overscroll: [{
                overscroll: N()
            }],
            "overscroll-x": [{
                "overscroll-x": N()
            }],
            "overscroll-y": [{
                "overscroll-y": N()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [d]
            }],
            "inset-x": [{
                "inset-x": [d]
            }],
            "inset-y": [{
                "inset-y": [d]
            }],
            start: [{
                start: [d]
            }],
            end: [{
                end: [d]
            }],
            top: [{
                top: [d]
            }],
            right: [{
                right: [d]
            }],
            bottom: [{
                bottom: [d]
            }],
            left: [{
                left: [d]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", zi, le]
            }],
            basis: [{
                basis: L()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", le]
            }],
            grow: [{
                grow: T()
            }],
            shrink: [{
                shrink: T()
            }],
            order: [{
                order: ["first", "last", "none", zi, le]
            }],
            "grid-cols": [{
                "grid-cols": [Bi]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", zi, le]
                }, le]
            }],
            "col-start": [{
                "col-start": U()
            }],
            "col-end": [{
                "col-end": U()
            }],
            "grid-rows": [{
                "grid-rows": [Bi]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [zi, le]
                }, le]
            }],
            "row-start": [{
                "row-start": U()
            }],
            "row-end": [{
                "row-end": U()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", le]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", le]
            }],
            gap: [{
                gap: [h]
            }],
            "gap-x": [{
                "gap-x": [h]
            }],
            "gap-y": [{
                "gap-y": [h]
            }],
            "justify-content": [{
                justify: ["normal", ..._()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ..._(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [..._(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [p]
            }],
            px: [{
                px: [p]
            }],
            py: [{
                py: [p]
            }],
            ps: [{
                ps: [p]
            }],
            pe: [{
                pe: [p]
            }],
            pt: [{
                pt: [p]
            }],
            pr: [{
                pr: [p]
            }],
            pb: [{
                pb: [p]
            }],
            pl: [{
                pl: [p]
            }],
            m: [{
                m: [b]
            }],
            mx: [{
                mx: [b]
            }],
            my: [{
                my: [b]
            }],
            ms: [{
                ms: [b]
            }],
            me: [{
                me: [b]
            }],
            mt: [{
                mt: [b]
            }],
            mr: [{
                mr: [b]
            }],
            mb: [{
                mb: [b]
            }],
            ml: [{
                ml: [b]
            }],
            "space-x": [{
                "space-x": [k]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [k]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", le, t]
            }],
            "min-w": [{
                "min-w": ["min", "max", "fit", le, Pn]
            }],
            "max-w": [{
                "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
                    screen: [mr]
                }, mr, le]
            }],
            h: [{
                h: [le, t, "auto", "min", "max", "fit"]
            }],
            "min-h": [{
                "min-h": ["min", "max", "fit", Pn, le]
            }],
            "max-h": [{
                "max-h": [le, t, "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", mr, hr]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", kl]
            }],
            "font-family": [{
                font: [Bi]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", le]
            }],
            "line-clamp": [{
                "line-clamp": ["none", no, kl]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Pn, le]
            }],
            "list-image": [{
                "list-image": ["none", le]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", le]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [m]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [m]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...I(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Pn, hr]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Pn, le]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            indent: [{
                indent: $()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", le]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", le]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [m]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...H(), J4]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", Y4]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, ej]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [v]
            }],
            "gradient-via-pos": [{
                via: [v]
            }],
            "gradient-to-pos": [{
                to: [v]
            }],
            "gradient-from": [{
                from: [y]
            }],
            "gradient-via": [{
                via: [y]
            }],
            "gradient-to": [{
                to: [y]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [l]
            }],
            "border-w-x": [{
                "border-x": [l]
            }],
            "border-w-y": [{
                "border-y": [l]
            }],
            "border-w-s": [{
                "border-s": [l]
            }],
            "border-w-e": [{
                "border-e": [l]
            }],
            "border-w-t": [{
                "border-t": [l]
            }],
            "border-w-r": [{
                "border-r": [l]
            }],
            "border-w-b": [{
                "border-b": [l]
            }],
            "border-w-l": [{
                "border-l": [l]
            }],
            "border-opacity": [{
                "border-opacity": [m]
            }],
            "border-style": [{
                border: [...I(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [l]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [l]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [m]
            }],
            "divide-style": [{
                divide: I()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...I()]
            }],
            "outline-offset": [{
                "outline-offset": [Pn, le]
            }],
            "outline-w": [{
                outline: [Pn, hr]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: W()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [m]
            }],
            "ring-offset-w": [{
                "ring-offset": [Pn, hr]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", mr, tj]
            }],
            "shadow-color": [{
                shadow: [Bi]
            }],
            opacity: [{
                opacity: [m]
            }],
            "mix-blend": [{
                "mix-blend": Q()
            }],
            "bg-blend": [{
                "bg-blend": Q()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [a]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", mr, le]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [f]
            }],
            saturate: [{
                saturate: [g]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [a]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [f]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [m]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [g]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", le]
            }],
            duration: [{
                duration: q()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", le]
            }],
            delay: [{
                delay: q()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", le]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [w]
            }],
            "scale-x": [{
                "scale-x": [w]
            }],
            "scale-y": [{
                "scale-y": [w]
            }],
            rotate: [{
                rotate: [zi, le]
            }],
            "translate-x": [{
                "translate-x": [P]
            }],
            "translate-y": [{
                "translate-y": [P]
            }],
            "skew-x": [{
                "skew-x": [S]
            }],
            "skew-y": [{
                "skew-y": [S]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", le]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: ["appearance-none"],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", le]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": $()
            }],
            "scroll-mx": [{
                "scroll-mx": $()
            }],
            "scroll-my": [{
                "scroll-my": $()
            }],
            "scroll-ms": [{
                "scroll-ms": $()
            }],
            "scroll-me": [{
                "scroll-me": $()
            }],
            "scroll-mt": [{
                "scroll-mt": $()
            }],
            "scroll-mr": [{
                "scroll-mr": $()
            }],
            "scroll-mb": [{
                "scroll-mb": $()
            }],
            "scroll-ml": [{
                "scroll-ml": $()
            }],
            "scroll-p": [{
                "scroll-p": $()
            }],
            "scroll-px": [{
                "scroll-px": $()
            }],
            "scroll-py": [{
                "scroll-py": $()
            }],
            "scroll-ps": [{
                "scroll-ps": $()
            }],
            "scroll-pe": [{
                "scroll-pe": $()
            }],
            "scroll-pt": [{
                "scroll-pt": $()
            }],
            "scroll-pr": [{
                "scroll-pr": $()
            }],
            "scroll-pb": [{
                "scroll-pb": $()
            }],
            "scroll-pl": [{
                "scroll-pl": $()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", le]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Pn, hr, kl]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
const sj = V4(ij);

function lj(...e) {
    return sj(ke(e))
}

function Or({
    className: e,
    ...t
}) {
    return x.jsx("div", {
        className: lj("animate-pulse rounded-md bg-slate-100 dark:bg-slate-800", e),
        ...t
    })
}
const aj = ({
        animeData: e,
        fakeRating: t,
        isLoading: n
    }) => {
        var p, g, w;
        const {
            isCheckedTheme: r
        } = vt(), o = Ht(), [i, s] = E.useState(!1), [l, a] = E.useState(!1), u = () => {
            s(!i), a(!l)
        }, c = 420, f = ((p = e == null ? void 0 : e.description) == null ? void 0 : p.length) && ((g = e == null ? void 0 : e.description) == null ? void 0 : g.length) > c && !i, h = f ? `${(w=e==null?void 0:e.description)==null?void 0:w.slice(0,c)}.....` : e == null ? void 0 : e.description, [y, v] = E.useState(!1), {
            animeDetails: d
        } = pp(), [b, m] = E.useState(1);
        return E.useEffect(() => {
            var S;
            const C = (S = d.filter(k => k.animeId === (e == null ? void 0 : e.id)).pop()) == null ? void 0 : S.watchedEpisode;
            m(C ? C[(C == null ? void 0 : C.length) - 1] : 1)
        }, [e, d]), x.jsxs("div", {
            className: "pb-[8rem] pt-[5rem] rounded-b-[5rem] custom-gradient-bg-dark",
            style: {
                background: `radial-gradient(40.56% 36.62% at 63.93% 48.85%,
              rgba(149, 149, 149, 0.00) 0%, rgba(0, 0, 0, 0.20) 100%),
              linear-gradient(0deg, ${r?"rgba(7, 13, 17, 0.95)":"rgba(255, 255, 255, 0.90)"} 0%,
              ${r?"rgba(7, 13, 17, 0.95)":"rgba(255, 255, 255, 0.90)"} 100%),
              url(${e==null?void 0:e.image}) no-repeat lightgray 70% / cover`
            },
            children: [x.jsx("div", {
                className: "mb-16 max-w-[80%] sm:max-w-none w-10/12 mx-auto",
                children: x.jsx("p", {
                    className: `text-lg float-left cursor-pointer ${r?"text-white":"text-custom-dark-1"}
                hover:underline hover:text-custom-blue-1 disable-highlight active:scale-95 custom-transition-duration`,
                    onClick: () => o(-1),
                    children: "← Go Back"
                })
            }), x.jsxs("div", {
                className: "max-w-[80%] sm:max-w-none w-10/12 mx-auto lg:flex gap-x-20",
                children: [n ? x.jsx(Or, {
                    className: "max-w-[85%] lg:min-w-[20rem] h-[23rem] lg:h-[26rem] sm:max-w-md mx-auto lg:mx-0 object-cover rounded-3xl"
                }) : x.jsx(uu.LazyLoadImage, {
                    onLoad: () => v(!0),
                    wrapperClassName: y ? "" : "blur-up",
                    className: "max-w-[85%] lg:min-w-[20rem] max-h-[26rem] sm:max-w-md mx-auto lg:mx-0 object-cover rounded-3xl",
                    alt: "Anime Image",
                    src: e == null ? void 0 : e.image,
                    onError: cu
                }), n ? x.jsxs("div", {
                    className: "w-full",
                    children: [x.jsx(Or, {
                        className: "mb-10 mt-10 lg:mt-4 rounded-3xl custom-transition-duration w-full h-[2rem]"
                    }), Array.from({
                        length: 10
                    }, (C, S) => x.jsx(Or, {
                        className: "mt-4 rounded-3xl custom-transition-duration w-full h-[1rem]"
                    }, S))]
                }) : x.jsxs("div", {
                    className: "mt-0 lg:mt-4",
                    children: [x.jsx("p", {
                        className: `text-2xl sm:text-3xl md:text-4xl text-center
                        lg:text-left mt-10 lg:mt-0 custom-font-rocksalt custom-transition-duration
                        ${r?"text-white":"text-custom-dark-1"}`,
                        children: e == null ? void 0 : e.title
                    }), x.jsxs("div", {
                        className: "clear-both mt-10 flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-2",
                        children: [x.jsxs("p", {
                            className: `text-base custom-transition-duration ${r?"text-custom-gray-1":"text-custom-dark-1"}`,
                            children: ["Rating : ", x.jsx("span", {
                                className: `text-lg font-medium custom-transition-duration  ${r?"text-white":"text-custom-dark-2"}`,
                                children: t
                            })]
                        }), x.jsxs("p", {
                            className: `text-base custom-transition-duration ${r?"text-custom-gray-1":"text-custom-dark-1"}`,
                            children: ["Year : ", x.jsx("span", {
                                className: `text-lg font-medium custom-transition-duration  ${r?"text-white":"text-custom-dark-2"}`,
                                children: e == null ? void 0 : e.releaseDate
                            })]
                        }), x.jsxs("p", {
                            className: `text-base custom-transition-duration ${r?"text-custom-gray-1":"text-custom-dark-1"}`,
                            children: [(e == null ? void 0 : e.type) !== "MOVIE" ? "Total Episodes" : "Type", " : ", x.jsx("span", {
                                className: `text-lg font-medium custom-transition-duration ${r?"text-white":"text-custom-dark-2"}`,
                                children: (e == null ? void 0 : e.type) !== "MOVIE" ? e == null ? void 0 : e.totalEpisodes : (e == null ? void 0 : e.type.charAt(0)) + (e == null ? void 0 : e.type.slice(1).toLowerCase())
                            })]
                        }), x.jsxs("p", {
                            className: `text-base custom-transition-duration ${r?"text-custom-gray-1":"text-custom-dark-1"}`,
                            children: ["Status : ", x.jsx("span", {
                                className: `text-lg font-medium custom-transition-duration  ${r?"text-white":"text-custom-dark-2"}`,
                                children: e == null ? void 0 : e.status
                            })]
                        })]
                    }), x.jsxs("p", {
                        className: `text-base custom-transition-duration mt-2 ${r?"text-custom-gray-1":"text-custom-dark-1"} text-center lg:text-left`,
                        children: ["Genres :  ", (e == null ? void 0 : e.genres) && (e == null ? void 0 : e.genres.map((C, S) => x.jsxs("span", {
                            className: `text-lg font-medium custom-transition-duration  ${r?"text-white":"text-custom-dark-2"}`,
                            children: [C, S !== (e == null ? void 0 : e.genres.length) - 1 && ", "]
                        }, S)))]
                    }), x.jsxs("div", {
                        className: "clear-both mt-10 mb-7 flex flex-col sm:flex-row sm:justify-center gap-5 lg:float-left",
                        children: [x.jsx(Ba, {
                            value: "Watch",
                            bgColor: "bg-custom-blue-1",
                            shadeColor: "bg-[#141D2B]",
                            icon: gx,
                            onClick: () => {
                                zs(e == null ? void 0 : e.id, b), o(`/watch/${e==null?void 0:e.id}/${e==null?void 0:e.id}-episode-${b}`)
                            }
                        }), x.jsx(Ba, {
                            value: "Add to list",
                            bgColor: "bg-[#111111]",
                            shadeColor: "bg-[#141D2B]",
                            icon: yx,
                            onClick: () => xx((e == null ? void 0 : e.id) || "", (e == null ? void 0 : e.title) || "", (e == null ? void 0 : e.image) || "", (e == null ? void 0 : e.totalEpisodes) || 0)
                        })]
                    }), x.jsx("p", {
                        className: `text-center lg:text-left text-base max-w-[60rem] custom-transition-duration
                            clear-both ${r?"text-custom-gray-2":"text-custom-dark-2"}`,
                        children: h
                    }), h && h.length && h.length >= 420 && x.jsx("p", {
                        onClick: u,
                        className: `mt-5 lg:mt-3 text-base text-center mx-auto lg:mx-0 lg:text-left
                            w-[7.2rem] cursor-pointer custom-transition-duration hover:sm:text-custom-blue-1
                            hover:sm:underline active:scale-95 ${r?"text-custom-gray-3":"text-custom-dark-2"}`,
                        children: f && !i && !l ? "Read more" : "See less"
                    })]
                })]
            })]
        })
    },
    kx = ({
        animeData: e,
        isLoading: t,
        myEpisodeId: n
    }) => {
        var C;
        const r = Ht(),
            {
                isCheckedTheme: o
            } = vt(),
            {
                animeDetails: i
            } = pp(),
            [s, l] = E.useState({
                startPage: 1,
                endPage: 100
            }),
            u = (n || "").split("-"),
            c = parseInt(u[(u == null ? void 0 : u.length) - 1]),
            [f, h] = E.useState([]),
            [y, v] = E.useState(""),
            [d, b] = E.useState("Oldest");
        E.useEffect(() => {
            m()
        }, [e == null ? void 0 : e.totalEpisodes]), E.useEffect(() => {
            v(p(c)), n && zs(e == null ? void 0 : e.id, c);
            const S = p(c);
            if (S !== "") {
                const [k, P] = S.split("-"), N = parseInt(k, 10), O = parseInt(P, 10);
                l(L => ({
                    ...L,
                    startPage: N,
                    endPage: O
                }))
            } else l(k => ({
                ...k,
                startPage: 1,
                endPage: 100
            }))
        }, [c, t]);
        const m = () => {
                const S = Math.ceil((e == null ? void 0 : e.totalEpisodes) / 100),
                    k = Array.from({
                        length: S
                    }, (P, N) => {
                        const O = N * 100 + 1,
                            L = Math.min((N + 1) * 100, e == null ? void 0 : e.totalEpisodes);
                        return `${O}-${L}`
                    });
                h(k)
            },
            p = S => {
                let k = "";
                return f.forEach(P => {
                    const [N, O] = P.split("-"), L = parseInt(N, 10), $ = parseInt(O, 10);
                    S >= L && S <= $ && (k = P)
                }), k
            },
            g = S => {
                const k = S.target.value;
                if (v(S.target.value), k !== "") {
                    const [P, N] = k.split("-"), O = parseInt(P, 10), L = parseInt(N, 10);
                    l($ => ({
                        ...$,
                        startPage: O,
                        endPage: L
                    }))
                } else l(P => ({
                    ...P,
                    startPage: 1,
                    endPage: 100
                }))
            },
            w = S => {
                if (S.target.value === "Oldest") {
                    b(S.target.value), v(f[0]);
                    const [k, P] = f[0].split("-"), N = parseInt(k, 10), O = parseInt(P, 10);
                    l(L => ({
                        ...L,
                        startPage: N,
                        endPage: O
                    }))
                } else {
                    b(S.target.value), v(f[f.length - 1]);
                    const [k, P] = f[f.length - 1].split("-"), N = parseInt(k, 10), O = parseInt(P, 10);
                    l(L => ({
                        ...L,
                        startPage: N,
                        endPage: O
                    }))
                }
            };
        return x.jsxs("section", {
            className: `min-h-[14rem] w-full custom-transition-duration pb-10 lg:pb-14 ${o?"bg-custom-dark-1":"bg-white"}`,
            children: [x.jsxs("div", {
                className: "max-w-[80%] sm:max-w-none w-10/12 mx-auto mt-16",
                children: [x.jsx("h1", {
                    className: `text-4xl font-semibold text-center lg:text-left pt-0
              custom-transition-duration ${o?"text-custom-gray-4 ":"text-custom-dark-1"}`,
                    children: "All Episodes"
                }), x.jsxs("div", {
                    className: "flex flex-col lg:flex-row justify-between items-center border-b-2 border-custom-blue-1 pb-5 gap-x-10 mt-4 lg:mt-2",
                    children: [x.jsx("p", {
                        className: `text-base  text-center lg:text-left custom-transition-duration ${o?"text-custom-gray-1":"text-custom-dark-2"}`,
                        children: "Unwind and savor the pleasure of watching your favorite shows for a relaxing and enjoyable experience."
                    }), x.jsxs("div", {
                        className: "flex flex-wrap gap-3 mt-4 lg:mt-[-.50rem]",
                        children: [(e == null ? void 0 : e.totalEpisodes) && (e == null ? void 0 : e.totalEpisodes) >= 100 && x.jsx("select", {
                            value: y,
                            onChange: g,
                            className: "text-white bg-custom-dark-2 px-5 py-2 rounded-md disable-highlight cursor-pointer whitespace-nowrap outline-none w-full 330size:w-auto",
                            children: f.map((S, k) => x.jsx("option", {
                                value: S,
                                children: S
                            }, k))
                        }), (e == null ? void 0 : e.totalEpisodes) && (e == null ? void 0 : e.totalEpisodes) >= 100 && x.jsxs("select", {
                            value: d,
                            onChange: w,
                            className: "text-white bg-custom-dark-2 px-5 py-2 rounded-md disable-highlight cursor-pointer whitespace-nowrap outline-none w-full 330size:w-auto",
                            children: [x.jsx("option", {
                                value: "Oldest",
                                children: "Oldest"
                            }), x.jsx("option", {
                                value: "Latest",
                                children: "Latest"
                            })]
                        })]
                    })]
                }), x.jsxs("div", {
                    className: "mt-7",
                    children: [x.jsx("p", {
                        className: `text-base custom-transition-duration ${o?"text-white":"text-custom-dark-2"}`,
                        children: "Color Legends"
                    }), x.jsxs("div", {
                        className: "flex flex-wrap gap-x-5 gap-y-3 mt-2",
                        children: [x.jsxs("div", {
                            className: "flex items-center gap-x-2",
                            children: [x.jsx("div", {
                                className: "h-[20px] w-[20px] bg-[#122532] rounded-sm"
                            }), x.jsx("p", {
                                className: `text-sm custom-transition-duration ${o?"text-custom-gray-1":"text-custom-dark-2"}`,
                                children: "- Not watch"
                            })]
                        }), x.jsxs("div", {
                            className: "flex items-center gap-x-2",
                            children: [x.jsx("div", {
                                className: "h-[20px] w-[20px] bg-[#f50c0c] rounded-sm"
                            }), x.jsx("p", {
                                className: `text-sm custom-transition-duration ${o?"text-custom-gray-1":"text-custom-dark-2"}`,
                                children: "- Already watched"
                            })]
                        }), x.jsxs("div", {
                            className: "flex items-center gap-x-2",
                            children: [x.jsx("div", {
                                className: "h-[20px] w-[20px] bg-[#cac9c9] rounded-sm"
                            }), x.jsx("p", {
                                className: `text-sm custom-transition-duration ${o?"text-custom-gray-1":"text-custom-dark-2"}`,
                                children: "- Last watched"
                            })]
                        })]
                    })]
                })]
            }), x.jsx("div", {
                className: `\`max-w-[80%] sm:max-w-none w-10/12 mx-auto mt-10 grid gap-5
            grid-cols-2 400size:grid-cols-3 sm:grid-cols-4 800size:grid-cols-5 lg:grid-cols-6
            1220size:grid-cols-7 xl:grid-cols-8 2xl:grid-cols-9 1700size:grid-cols-10`,
                children: t ? Array.from({
                    length: 100
                }, (S, k) => x.jsx(Or, {
                    className: "rounded w-full h-[2rem]"
                }, k)) : (C = e == null ? void 0 : e.episodes) == null ? void 0 : C.map(S => {
                    var k;
                    if (S != null && S.number && (s == null ? void 0 : s.startPage) <= S.number && S.number <= (s == null ? void 0 : s.endPage)) {
                        const P = i.find(O => O.animeId === (e == null ? void 0 : e.id) && O.watchedEpisode.includes(S == null ? void 0 : S.number)),
                            N = (k = i.find(O => O.animeId === (e == null ? void 0 : e.id))) == null ? void 0 : k.watchedEpisode.slice(-1)[0];
                        return x.jsxs("div", {
                            className: `rounded text-xs 400size:text-sm py-2 flex justify-center
                          disable-highlight cursor-pointer hover:opacity-90 active:scale-95
                          ${P&&N!==(S==null?void 0:S.number)?"bg-[#0063F2] text-white":N===(S==null?void 0:S.number)?"bg-[#cac9c9] text-custom-dark-1 font-medium":"bg-[#122532] text-custom-gray-1"}
                          `,
                            onClick: () => {
                                zs(e == null ? void 0 : e.id, S == null ? void 0 : S.number), r(`/watch/${e==null?void 0:e.id}/${S==null?void 0:S.id}`)
                            },
                            children: ["EP ", S == null ? void 0 : S.number, "  ", x.jsxs("span", {
                                className: `text-xs 400size:text-sm uppercase
                          ${P&&N!==(S==null?void 0:S.number)?"text-white":N===(S==null?void 0:S.number)?"text-custom-dark-1":"text-custom-gray-1"}`,
                                children: ["| ", e == null ? void 0 : e.subOrDub]
                            })]
                        }, S == null ? void 0 : S.id)
                    }
                })
            })]
        })
    },
    uj = () => {
        const {
            dataId: e
        } = E0(), t = e || "", n = Ht(), {
            data: r,
            isFetched: o,
            isError: i
        } = Ns(["animeDataKey", t], () => a1(t)), s = [9.9, 9.8, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8, 8.7, 8.6, 8.5, 8.4, 8.3, 8.2, 8.1, 8, 7.9, 7.8, 7.7, 7.6, 7.5, 7.4, 7.3, 7.2, 7.1, 7], [l, a] = E.useState();
        E.useEffect(() => {
            const f = Math.random() * s.length;
            a(s[Math.floor(f)])
        }, []);
        const [u, c] = E.useState(!0);
        return E.useEffect(() => {
            if (c(!0), o && !i) {
                const f = setTimeout(() => {
                    c(!1)
                }, 500);
                return () => clearTimeout(f)
            } else i && (Ce.error("The request is invalid. Please try again!"), n("/"))
        }, [o, i, e]), x.jsxs(x.Fragment, {
            children: [x.jsx(Hr, {}), x.jsx(aj, {
                animeData: r,
                fakeRating: l,
                isLoading: u
            }), (r == null ? void 0 : r.type) !== "MOVIE" && x.jsx(kx, {
                animeData: r,
                isLoading: u
            }), x.jsx(ar, {
                fetchCategory: "popular",
                type: "Popular",
                title: "Popular Now",
                description: "Stay updated and connected with the latest trends by immersing in the most popular shows available!",
                spacing: "lg:pt-10 lg:pb-20",
                hasSeeAll: !0
            }), x.jsx(Vr, {})]
        })
    },
    cj = ({
        dataUrl: e,
        serverName: t,
        iframeRef: n,
        frameStyle: r
    }) => {
        E.useEffect(() => {
            const i = s => {
                n.current && s.data && s.data.type === "iframeHeight" && (n.current.style.height = `${s.data.height}px`)
            };
            return window.addEventListener("message", i), () => {
                window.removeEventListener("message", i)
            }
        }, []);
        const o = {
            allowFullScreen: !0,
            scrolling: "no",
            ref: n,
            title: "Video Player",
            className: `w-[100%] xl:max-w-[45rem] h-auto min-h-[16.5rem] 580size:min-h-[17rem]
                600size:min-h-[21rem] 700size:min-h-[24rem] 800size:min-h-[27rem]
                900size:min-h-[30rem] 1000size:min-h-[32rem] 1100size:min-h-[36rem]
                1220size:min-h-[38rem] xl:min-h-0 ${r}
                ${t==="Filelions"||t==="Streamwish"&&"rounded-xl"}`
        };
        return x.jsx(x.Fragment, {
            children: x.jsx("iframe", {
                src: e,
                ...o,
                sandbox: t === "Filelions" || t === "Streamwish" ? "allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-top-navigation allow-forms" : void 0
            })
        })
    },
    fj = ({
        animeData: e,
        episodeData: t,
        fakeRating: n,
        isLoading: r,
        dataId: o,
        myEpisodeId: i
    }) => {
        var I, Q, _;
        const {
            isCheckedTheme: s
        } = vt(), l = Ht(), u = i.split("-"), c = parseInt(u[(u == null ? void 0 : u.length) - 1]), [f, h] = E.useState(!1), [y, v] = E.useState(!1), d = () => {
            h(!f), v(!y)
        }, b = 420, m = ((I = e == null ? void 0 : e.description) == null ? void 0 : I.length) && ((Q = e == null ? void 0 : e.description) == null ? void 0 : Q.length) > b && !f, p = m ? `${(_=e==null?void 0:e.description)==null?void 0:_.slice(0,b)}.....` : e == null ? void 0 : e.description, [g, w] = E.useState(""), [C, S] = E.useState(""), [k, P] = E.useState("");
        E.useEffect(() => {
            const T = t == null ? void 0 : t.find(G => (G == null ? void 0 : G.name) === "Streamwish"),
                B = t == null ? void 0 : t.find(G => (G == null ? void 0 : G.name) === "Filelions"),
                X = t == null ? void 0 : t.find(G => (G == null ? void 0 : G.name) === "Vidstreaming"),
                q = t == null ? void 0 : t.find(G => (G == null ? void 0 : G.name) === "Gogo server"),
                re = t == null ? void 0 : t.find(G => (G == null ? void 0 : G.name) === "Mp4Upload");
            T ? (P("Streamwish"), w((T == null ? void 0 : T.url) || "")) : B ? (P("Filelions"), w((B == null ? void 0 : B.url) || "")) : X ? (P("Vidstreaming"), w((X == null ? void 0 : X.url) || "")) : q ? (P("Gogo server"), w((q == null ? void 0 : q.url) || "")) : re ? (P("Mp4Upload"), w((re == null ? void 0 : re.url) || "")) : P("Other Server")
        }, [t, c]), E.useEffect(() => {
            var G;
            const T = t == null ? void 0 : t.find(J => (J == null ? void 0 : J.name) === "Streamwish"),
                B = t == null ? void 0 : t.find(J => (J == null ? void 0 : J.name) === "Filelions"),
                X = t == null ? void 0 : t.find(J => (J == null ? void 0 : J.name) === "Vidstreaming"),
                q = t == null ? void 0 : t.find(J => (J == null ? void 0 : J.name) === "Gogo server"),
                re = t == null ? void 0 : t.find(J => (J == null ? void 0 : J.name) === "Mp4Upload");
            (T == null ? void 0 : T.name) === k ? (P("Streamwish"), w((T == null ? void 0 : T.url) || "")) : (B == null ? void 0 : B.name) === k ? (P("Filelions"), w((B == null ? void 0 : B.url) || "")) : (X == null ? void 0 : X.name) === k ? (P("Vidstreaming"), w((X == null ? void 0 : X.url) || "")) : (q == null ? void 0 : q.name) === k ? (P("Gogo server"), w((q == null ? void 0 : q.url) || "")) : (re == null ? void 0 : re.name) === k ? (P("Mp4Upload"), w((re == null ? void 0 : re.url) || "")) : w(t && ((G = t[0]) == null ? void 0 : G.url))
        }, [t, C, r, k]);
        const [N, O] = E.useState(!0);
        E.useEffect(() => {
            if (r || N) {
                const T = setTimeout(() => {
                    O(!1)
                }, 1e3);
                return () => clearTimeout(T)
            }
        }, [N, r]);
        const L = E.useRef(null),
            $ = () => {
                if (L.current) {
                    const T = L.current;
                    T.requestFullscreen ? T.requestFullscreen() : T.webkitRequestFullscreen ? T.webkitRequestFullscreen() : T.mozRequestFullScreen ? T.mozRequestFullScreen() : T.msRequestFullscreen && T.msRequestFullscreen()
                }
            },
            W = navigator.platform,
            U = () => {
                O(!0), zs(o || "", c + 1), l(`/watch/${o}/${o}-episode-${c+1}`)
            },
            H = () => {
                O(!0), zs(o || "", c - 1), l(`/watch/${o}/${o}-episode-${c-1}`)
            };
        return x.jsxs("div", {
            className: "pb-[8rem] pt-[5rem] rounded-b-[5rem] custom-gradient-bg-dark",
            style: {
                background: `radial-gradient(40.56% 36.62% at 63.93% 48.85%,
              rgba(149, 149, 149, 0.00) 0%, rgba(0, 0, 0, 0.20) 100%),
              linear-gradient(0deg, ${s?"rgba(7, 13, 17, 0.95)":"rgba(255, 255, 255, 0.90)"} 0%,
              ${s?"rgba(7, 13, 17, 0.95)":"rgba(255, 255, 255, 0.90)"} 100%),
              url(${e==null?void 0:e.image}) no-repeat lightgray 70% / cover`
            },
            children: [x.jsxs("div", {
                className: "mb-10 max-w-[80%] sm:max-w-none w-10/12 mx-auto",
                children: [x.jsx("p", {
                    className: `text-lg float-left mb-4 cursor-pointer ${s?"text-white":"text-custom-dark-1"}
                hover:underline hover:text-custom-blue-1 disable-highlight active:scale-95 custom-transition-duration`,
                    onClick: () => l(-1),
                    children: "← Go Back"
                }), x.jsxs("div", {
                    className: "flex flex-wrap sm:justify-between xl:justify-start 1460size:justify-between gap-3 w-[100%] 1460size:max-w-[45rem] clear-both",
                    children: [W.includes("Win") && x.jsx("button", {
                        onClick: $,
                        className: `text-white bg-custom-dark-2 py-2 rounded-md w-full 500size:w-[10rem]
                            disable-highlight custom-transition-duration sm:hover:bg-custom-dark-1
                            active:scale-95 whitespace-nowrap ${r?"invisible":"visible"}`,
                        children: "Allow Fullscreen"
                    }), x.jsxs("div", {
                        className: "flex flex-wrap sm:justify-end gap-3 w-full 500size:w-auto",
                        children: [c !== 1 && x.jsx("button", {
                            className: `text-white bg-custom-blue-1 py-2 rounded-md w-full 500size:w-[10rem]
                                disable-highlight custom-transition-duration sm:hover:bg-custom-dark-2
                                active:scale-95 whitespace-nowrap ${r&&"pointer-events-none opacity-80"}`,
                            onClick: H,
                            children: "← Prev Episode"
                        }), (e == null ? void 0 : e.totalEpisodes) !== c && x.jsx("button", {
                            className: `text-white bg-custom-blue-1 py-2 rounded-md w-full 500size:w-[10rem]
                              disable-highlight custom-transition-duration sm:hover:bg-custom-dark-2
                              active:scale-95 whitespace-nowrap ${r&&"pointer-events-none opacity-80"}`,
                            onClick: U,
                            children: "Next Episode →"
                        })]
                    })]
                })]
            }), x.jsxs("div", {
                className: "max-w-[80%] sm:max-w-none w-10/12 mx-auto xl:flex gap-x-20",
                children: [x.jsx(Or, {
                    className: `w-[100%] xl:max-w-[45rem]
                        h-auto min-h-[16.5rem] 580size:min-h-[17rem]
                        600size:min-h-[21rem] 700size:min-h-[24rem] 800size:min-h-[27rem]
                        900size:min-h-[30rem] 1000size:min-h-[32rem] 1100size:min-h-[36rem]
                        1220size:min-h-[38rem] xl:min-h-0
                        mx-auto xl:mx-0 object-cover rounded-3xl ${r||N?"block":"hidden"}`
                }), x.jsx(cj, {
                    dataUrl: g,
                    serverName: k,
                    iframeRef: L,
                    frameStyle: r || N ? "hidden" : "block"
                }), r ? x.jsxs("div", {
                    className: "w-full",
                    children: [x.jsx(Or, {
                        className: "mb-10 mt-10 xl:mt-4 rounded-3xl custom-transition-duration w-full h-[2rem]"
                    }), Array.from({
                        length: 15
                    }, (T, B) => x.jsx(Or, {
                        className: "mt-4 rounded-3xl custom-transition-duration w-full h-[1rem]"
                    }, B))]
                }) : x.jsxs("div", {
                    className: "mt-5 xl:mt-0 xl:mb-4",
                    children: [(e == null ? void 0 : e.type) !== "MOVIE" && x.jsxs("p", {
                        className: `text-xl font-semibold custom-transition-duration ${s?"text-white":"text-custom-dark-2"}`,
                        children: ["Episode ", c]
                    }), x.jsx("p", {
                        className: `text-2xl sm:text-3xl md:text-4xl mt-4 custom-font-rocksalt custom-transition-duration
                        ${s?"text-white":"text-custom-dark-1"}`,
                        children: e == null ? void 0 : e.title
                    }), x.jsxs("div", {
                        className: "clear-both mt-10 flex flex-col gap-y-5",
                        children: [x.jsxs("p", {
                            className: `text-base custom-transition-duration ${s?"text-custom-gray-1":"text-custom-dark-1"}`,
                            children: ["Rating : ", x.jsx("span", {
                                className: `text-lg font-medium custom-transition-duration  ${s?"text-white":"text-custom-dark-2"}`,
                                children: n
                            })]
                        }), x.jsxs("p", {
                            className: `text-base custom-transition-duration ${s?"text-custom-gray-1":"text-custom-dark-1"}`,
                            children: ["Year : ", x.jsx("span", {
                                className: `text-lg font-medium custom-transition-duration  ${s?"text-white":"text-custom-dark-2"}`,
                                children: e == null ? void 0 : e.releaseDate
                            })]
                        }), x.jsxs("p", {
                            className: `text-base custom-transition-duration ${s?"text-custom-gray-1":"text-custom-dark-1"}`,
                            children: [(e == null ? void 0 : e.type) !== "MOVIE" ? "Total Episodes" : "Type", " : ", x.jsx("span", {
                                className: `text-lg font-medium custom-transition-duration  ${s?"text-white":"text-custom-dark-2"}`,
                                children: (e == null ? void 0 : e.type) !== "MOVIE" ? e == null ? void 0 : e.totalEpisodes : (e == null ? void 0 : e.type.charAt(0)) + (e == null ? void 0 : e.type.slice(1).toLowerCase())
                            })]
                        }), x.jsxs("p", {
                            className: `text-base custom-transition-duration ${s?"text-custom-gray-1":"text-custom-dark-1"}`,
                            children: ["Status : ", x.jsx("span", {
                                className: `text-lg font-medium custom-transition-duration  ${s?"text-white":"text-custom-dark-2"}`,
                                children: e == null ? void 0 : e.status
                            })]
                        }), x.jsxs("p", {
                            className: `text-base custom-transition-duration ${s?"text-custom-gray-1":"text-custom-dark-1"}`,
                            children: ["Genres :  ", (e == null ? void 0 : e.genres) && (e == null ? void 0 : e.genres.map((T, B) => x.jsxs("span", {
                                className: `text-lg font-medium custom-transition-duration  ${s?"text-white":"text-custom-dark-2"}`,
                                children: [T, B !== (e == null ? void 0 : e.genres.length) - 1 && ", "]
                            }, B)))]
                        }), x.jsxs("div", {
                            className: "mt-6",
                            children: [x.jsx("p", {
                                className: `text-lg font-bold custom-transition-duration ${s?"text-white":"text-custom-dark-2"}`,
                                children: "Available Servers"
                            }), x.jsx("div", {
                                className: "flex flex-wrap mt-4 gap-5",
                                children: t && t.map((T, B) => x.jsxs("div", {
                                    className: `rounded text-xs 400size:text-sm py-2 px-5 flex justify-center disable-highlight
                                        cursor-pointer hover:opacity-90 active:scale-95 text-white
                                        ${k===(T==null?void 0:T.name)?"bg-custom-blue-1":"bg-[#141D2B]"}
                                        `,
                                    onClick: () => {
                                        P(T == null ? void 0 : T.name), S(T == null ? void 0 : T.url), O(!N)
                                    },
                                    children: [T == null ? void 0 : T.name, (T == null ? void 0 : T.name) === "Streamwish" ? x.jsx("span", {
                                        className: "text-xs 400size:text-sm"
                                    }) : (T == null ? void 0 : T.name) === "Filelions" && x.jsx("span", {
                                        className: "text-xs 400size:text-sm"
                                    })]
                                }, B))
                            })]
                        })]
                    })]
                })]
            }), x.jsx("div", {
                className: "max-w-[80%] sm:max-w-none ite w-10/12 mx-auto mt-16",
                children: r ? x.jsx("div", {
                    className: "w-full",
                    children: Array.from({
                        length: 4
                    }, (T, B) => x.jsx(Or, {
                        className: "mt-4 rounded-3xl custom-transition-duration w-full h-[1rem]"
                    }, B))
                }) : x.jsxs(x.Fragment, {
                    children: [x.jsx("p", {
                        className: `text-base custom-transition-duration clear-both
                            ${s?"text-custom-gray-2":"text-custom-dark-2"}`,
                        children: p
                    }), p && p.length && p.length >= 420 && x.jsx("p", {
                        onClick: d,
                        className: `mt-5 xl:mt-3 text-base custom-transition-duration
                            w-[7.2rem] cursor-pointer hover:sm:text-custom-blue-1 hover:sm:underline
                            active:scale-95 ${s?"text-custom-gray-3":"text-custom-dark-2"}`,
                        children: m && !f && !y ? "Read more" : "See less"
                    })]
                })
            })]
        })
    },
    dj = () => {
        const {
            dataId: e,
            episodeId: t
        } = E0(), n = e || "", r = t || "", o = Ht(), {
            data: i,
            isFetched: s,
            isError: l
        } = Ns(["animeDataKey", n, r], () => a1(n)), {
            data: a,
            isFetched: u,
            isError: c
        } = Ns(["episodeDataKey", n, r], () => wC(r)), f = [9.9, 9.8, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8, 8.7, 8.6, 8.5, 8.4, 8.3, 8.2, 8.1, 8, 7.9, 7.8, 7.7, 7.6, 7.5, 7.4, 7.3, 7.2, 7.1, 7], [h, y] = E.useState();
        E.useEffect(() => {
            const b = Math.random() * f.length;
            y(f[Math.floor(b)])
        }, []);
        const [v, d] = E.useState(!0);
        return E.useEffect(() => {
            if (d(!0), s && u && !l && !c) {
                const b = setTimeout(() => {
                    d(!1)
                }, 500);
                return () => clearTimeout(b)
            } else(l || c) && (Ce.error("The request is invalid. Please try again!"), o("/"))
        }, [s, u, e]), x.jsxs(x.Fragment, {
            children: [x.jsx(Hr, {}), x.jsx(fj, {
                animeData: i,
                episodeData: a,
                fakeRating: h,
                isLoading: v,
                dataId: e,
                myEpisodeId: r
            }), (i == null ? void 0 : i.type) !== "MOVIE" && x.jsx(kx, {
                animeData: i,
                isLoading: v,
                myEpisodeId: r
            }), x.jsx(ar, {
                fetchCategory: "recent-episodes",
                type: "Latest",
                title: "Latest Release",
                description: "Stay ahead of the curve with the newest and most exciting releases!",
                spacing: "lg:pt-10 lg:pb-20",
                hasSeeAll: !0
            }), x.jsx(Vr, {})]
        })
    },
    pj = () => {
        const {
            pathname: e
        } = cp();
        return E.useEffect(() => {
            window.scrollTo(0, 0)
        }, [e]), null
    },
    hj = ({
        id: e,
        title: t,
        image: n,
        episodeNumber: r
    }) => {
        const {
            isCheckedTheme: o
        } = vt(), i = Ht(), [s, l] = E.useState(!1);
        return x.jsxs("div", {
            children: [x.jsx("div", {
                className: `w-full max-w-[17rem] sm:max-w-none mx-auto sm:mx-0 cursor-pointer hover:${o?"opacity-80":"opacity-95"}`,
                onClick: () => i(`/Anime/${e}`),
                children: x.jsxs("div", {
                    children: [x.jsx(uu.LazyLoadImage, {
                        onLoad: () => l(!0),
                        wrapperClassName: s ? "" : "blur-up",
                        className: `rounded-2xl w-full h-[20rem] 1220size:h-[17rem] 2xl:h-[20rem] object-cover ${!o&&"custom-shadow-button"}`,
                        alt: "Anime Image",
                        src: n,
                        onError: cu
                    }), x.jsx("p", {
                        className: `text-base font-semibold mt-2 custom-transition-duration text-center
                    sm:text-left ${o?"text-white":"text-custom-dark-1"}`,
                        children: t
                    }), x.jsxs("p", {
                        className: "text-sm text-custom-gray-1 text-center sm:text-left mt-1",
                        children: ["• ", r, " ", r === 1 ? "episode" : "episodes"]
                    })]
                })
            }), x.jsx("p", {
                className: "text-center sm:text-left text-sm text-custom-gray-1 mt-1 cursor-pointer hover:underline hover:text-custom-blue-1",
                onClick: () => E4(e),
                children: "Remove from list"
            })]
        })
    },
    mj = ({
        title: e,
        description: t,
        spacing: n
    }) => {
        const {
            isCheckedTheme: r
        } = vt(), {
            myListDetails: o
        } = hp(), [i, s] = E.useState(!0);
        return E.useEffect(() => {
            if (s(!0), o) {
                const l = setTimeout(() => {
                    s(!1)
                }, 500);
                return () => clearTimeout(l)
            }
        }, []), x.jsx("section", {
            className: `min-h-[50rem] w-full custom-transition-duration pb-20 lg:pb-0 ${r?"bg-custom-dark-1":"bg-white"}`,
            children: x.jsxs("div", {
                className: `max-w-[80%] sm:max-w-none w-10/12 mx-auto relative ${n}`,
                children: [x.jsx("h1", {
                    className: `text-4xl font-semibold text-center lg:text-left pt-10 lg:pt-0
              custom-transition-duration ${r?"text-custom-gray-4 ":"text-custom-dark-1"}`,
                    children: e
                }), x.jsx("div", {
                    className: "flex flex-col lg:flex-row justify-between items-center border-b-2 border-custom-blue-1 pb-5 gap-x-10 mt-4 lg:mt-0",
                    children: x.jsx("p", {
                        className: `text-base  text-center lg:text-left custom-transition-duration ${r?"text-custom-gray-1":"text-custom-dark-2"}`,
                        children: t
                    })
                }), x.jsx("div", {
                    className: "mt-10 grid gap-x-7 gap-y-10 grid-cols-1 sm:grid-cols-2 870size:grid-cols-3 1220size:grid-cols-5 1920size:grid-cols-6",
                    children: i ? x.jsx(U1, {
                        size: 12
                    }) : o.length === 0 ? x.jsx("div", {
                        className: "w-full absolute",
                        children: x.jsx("p", {
                            className: `text-base ${r?"text-custom-gray-4 ":"text-custom-dark-2"}`,
                            children: "You have no item in your list."
                        })
                    }) : o.map(l => x.jsx(hj, {
                        id: l == null ? void 0 : l.animeId,
                        title: l == null ? void 0 : l.animeName,
                        image: l == null ? void 0 : l.animeImage,
                        episodeNumber: l == null ? void 0 : l.totalEpisodes
                    }, l == null ? void 0 : l.animeId))
                })]
            })
        })
    },
    vj = () => x.jsxs(x.Fragment, {
        children: [x.jsx(Hr, {
            active: "My List"
        }), x.jsx(mj, {
            title: "My List",
            description: "Check out the collection of an anime you've added!",
            spacing: "lg:pt-10 lg:pb-20"
        }), x.jsx(Vr, {})]
    }),
    gj = () => {
        const e = Ht();
        return x.jsx("div", {
            className: "min-h-screen flex items-center justify-center",
            children: x.jsxs("div", {
                className: "text-center mx-auto max-w-[90%]",
                children: [x.jsx("h1", {
                    className: "mb-4 text-5xl font-semibold text-custom-blue-1",
                    children: "Page not found"
                }), x.jsx("p", {
                    className: "mb-10 text-lg text-custom-gray-1",
                    children: "Sorry, the page you're looking for doesn't exist."
                }), x.jsx("div", {
                    className: "animate-bounce",
                    children: x.jsx("svg", {
                        className: "mx-auto h-16 w-16 text-custom-blue-1",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: x.jsx("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        })
                    })
                }), x.jsxs("p", {
                    className: "mt-4 text-custom-gray-1",
                    children: ["Let's get you back ", x.jsx("span", {
                        className: "text-custom-blue-1 cursor-pointer hover:underline",
                        onClick: () => e("/"),
                        children: "home"
                    }), "."]
                })]
            })
        })
    };

function yj() {
    const {
        isCheckedTheme: e
    } = vt();
    return x.jsxs("div", {
        className: `custom-transition-duration ${e?"bg-custom-dark-1":"bg-white"}`,
        children: [x.jsx(pj, {}), x.jsxs(q2, {
            children: [x.jsx(Ln, {
                path: "/",
                element: x.jsx(k4, {})
            }), x.jsx(Ln, {
                path: "/Trending",
                element: x.jsx(P4, {})
            }), x.jsx(Ln, {
                path: "/Latest",
                element: x.jsx(O4, {})
            }), x.jsx(Ln, {
                path: "/Popular",
                element: x.jsx(T4, {})
            }), x.jsx(Ln, {
                path: "/MyList",
                element: x.jsx(vj, {})
            }), x.jsx(Ln, {
                path: "/Anime/:dataId",
                element: x.jsx(uj, {})
            }), x.jsx(Ln, {
                path: "/Watch/:dataId/:episodeId",
                element: x.jsx(dj, {})
            }), x.jsx(Ln, {
                path: "/Search",
                element: x.jsx(R4, {})
            }), x.jsx(Ln, {
                path: "*",
                element: x.jsx(gj, {})
            })]
        }), x.jsx(rd, {
            position: "bottom-left",
            autoClose: 3e3,
            hideProgressBar: !0,
            newestOnTop: !1,
            closeOnClick: !0,
            rtl: !1,
            pauseOnFocusLoss: !1,
            draggable: !1,
            pauseOnHover: !1,
            theme: "colored"
        })]
    })
}
const xj = new HS({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1
        }
    }
});
Qc.createRoot(document.getElementById("root")).render(x.jsx(ne.StrictMode, {
    children: x.jsx(X2, {
        children: x.jsx(XS, {
            client: xj,
            children: x.jsx(yj, {})
        })
    })
}));
