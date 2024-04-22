(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function mc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ts = { exports: {} },
  pl = {},
  ns = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ur = Symbol.for("react.element"),
  gc = Symbol.for("react.portal"),
  vc = Symbol.for("react.fragment"),
  yc = Symbol.for("react.strict_mode"),
  wc = Symbol.for("react.profiler"),
  kc = Symbol.for("react.provider"),
  xc = Symbol.for("react.context"),
  Sc = Symbol.for("react.forward_ref"),
  Cc = Symbol.for("react.suspense"),
  Ec = Symbol.for("react.memo"),
  _c = Symbol.for("react.lazy"),
  Qo = Symbol.iterator;
function Nc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Qo && e[Qo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var rs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ls = Object.assign,
  is = {};
function yn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = is),
    (this.updater = n || rs);
}
yn.prototype.isReactComponent = {};
yn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
yn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function os() {}
os.prototype = yn.prototype;
function Zi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = is),
    (this.updater = n || rs);
}
var Ji = (Zi.prototype = new os());
Ji.constructor = Zi;
ls(Ji, yn.prototype);
Ji.isPureReactComponent = !0;
var Go = Array.isArray,
  us = Object.prototype.hasOwnProperty,
  qi = { current: null },
  ss = { key: !0, ref: !0, __self: !0, __source: !0 };
function as(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      us.call(t, r) && !ss.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: ur,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: qi.current,
  };
}
function jc(e, t) {
  return {
    $$typeof: ur,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function bi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ur;
}
function Pc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ko = /\/+/g;
function Tl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Pc("" + e.key)
    : t.toString(36);
}
function zr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ur:
          case gc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Tl(o, 0) : r),
      Go(l)
        ? ((n = ""),
          e != null && (n = e.replace(Ko, "$&/") + "/"),
          zr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (bi(l) &&
            (l = jc(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Ko, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Go(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Tl(i, u);
      o += zr(i, t, n, s, l);
    }
  else if (((s = Nc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Tl(i, u++)), (o += zr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function pr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    zr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Tc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = { current: null },
  Lr = { transition: null },
  zc = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: Lr,
    ReactCurrentOwner: qi,
  };
D.Children = {
  map: pr,
  forEach: function (e, t, n) {
    pr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      pr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      pr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!bi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
D.Component = yn;
D.Fragment = vc;
D.Profiler = wc;
D.PureComponent = Zi;
D.StrictMode = yc;
D.Suspense = Cc;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zc;
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ls({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = qi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      us.call(t, s) &&
        !ss.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: ur, type: e.type, key: l, ref: i, props: r, _owner: o };
};
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: xc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: kc, _context: e }),
    (e.Consumer = e)
  );
};
D.createElement = as;
D.createFactory = function (e) {
  var t = as.bind(null, e);
  return (t.type = e), t;
};
D.createRef = function () {
  return { current: null };
};
D.forwardRef = function (e) {
  return { $$typeof: Sc, render: e };
};
D.isValidElement = bi;
D.lazy = function (e) {
  return { $$typeof: _c, _payload: { _status: -1, _result: e }, _init: Tc };
};
D.memo = function (e, t) {
  return { $$typeof: Ec, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function (e) {
  var t = Lr.transition;
  Lr.transition = {};
  try {
    e();
  } finally {
    Lr.transition = t;
  }
};
D.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
D.useCallback = function (e, t) {
  return ce.current.useCallback(e, t);
};
D.useContext = function (e) {
  return ce.current.useContext(e);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
D.useEffect = function (e, t) {
  return ce.current.useEffect(e, t);
};
D.useId = function () {
  return ce.current.useId();
};
D.useImperativeHandle = function (e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function (e, t) {
  return ce.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function (e, t) {
  return ce.current.useLayoutEffect(e, t);
};
D.useMemo = function (e, t) {
  return ce.current.useMemo(e, t);
};
D.useReducer = function (e, t, n) {
  return ce.current.useReducer(e, t, n);
};
D.useRef = function (e) {
  return ce.current.useRef(e);
};
D.useState = function (e) {
  return ce.current.useState(e);
};
D.useSyncExternalStore = function (e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function () {
  return ce.current.useTransition();
};
D.version = "18.2.0";
ns.exports = D;
var M = ns.exports;
const Lc = mc(M);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dc = M,
  Rc = Symbol.for("react.element"),
  Fc = Symbol.for("react.fragment"),
  Mc = Object.prototype.hasOwnProperty,
  Ic = Dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Oc = { key: !0, ref: !0, __self: !0, __source: !0 };
function cs(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Mc.call(t, r) && !Oc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Rc,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Ic.current,
  };
}
pl.Fragment = Fc;
pl.jsx = cs;
pl.jsxs = cs;
ts.exports = pl;
var m = ts.exports,
  ni = {},
  ds = { exports: {} },
  Ee = {},
  fs = { exports: {} },
  ps = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(S, P) {
    var z = S.length;
    S.push(P);
    e: for (; 0 < z; ) {
      var T = (z - 1) >>> 1,
        R = S[T];
      if (0 < l(R, P)) (S[T] = P), (S[z] = R), (z = T);
      else break e;
    }
  }
  function n(S) {
    return S.length === 0 ? null : S[0];
  }
  function r(S) {
    if (S.length === 0) return null;
    var P = S[0],
      z = S.pop();
    if (z !== P) {
      S[0] = z;
      e: for (var T = 0, R = S.length, ue = R >>> 1; T < ue; ) {
        var De = 2 * (T + 1) - 1,
          _t = S[De],
          fe = De + 1,
          Bt = S[fe];
        if (0 > l(_t, z))
          fe < R && 0 > l(Bt, _t)
            ? ((S[T] = Bt), (S[fe] = z), (T = fe))
            : ((S[T] = _t), (S[De] = z), (T = De));
        else if (fe < R && 0 > l(Bt, z)) (S[T] = Bt), (S[fe] = z), (T = fe);
        else break e;
      }
    }
    return P;
  }
  function l(S, P) {
    var z = S.sortIndex - P.sortIndex;
    return z !== 0 ? z : S.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    c = [],
    g = 1,
    h = null,
    p = 3,
    w = !1,
    k = !1,
    x = !1,
    U = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(S) {
    for (var P = n(c); P !== null; ) {
      if (P.callback === null) r(c);
      else if (P.startTime <= S)
        r(c), (P.sortIndex = P.expirationTime), t(s, P);
      else break;
      P = n(c);
    }
  }
  function v(S) {
    if (((x = !1), f(S), !k))
      if (n(s) !== null) (k = !0), xn(E);
      else {
        var P = n(c);
        P !== null && Ht(v, P.startTime - S);
      }
  }
  function E(S, P) {
    (k = !1), x && ((x = !1), d(j), (j = -1)), (w = !0);
    var z = p;
    try {
      for (
        f(P), h = n(s);
        h !== null && (!(h.expirationTime > P) || (S && !we()));

      ) {
        var T = h.callback;
        if (typeof T == "function") {
          (h.callback = null), (p = h.priorityLevel);
          var R = T(h.expirationTime <= P);
          (P = e.unstable_now()),
            typeof R == "function" ? (h.callback = R) : h === n(s) && r(s),
            f(P);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var ue = !0;
      else {
        var De = n(c);
        De !== null && Ht(v, De.startTime - P), (ue = !1);
      }
      return ue;
    } finally {
      (h = null), (p = z), (w = !1);
    }
  }
  var _ = !1,
    N = null,
    j = -1,
    O = 5,
    L = -1;
  function we() {
    return !(e.unstable_now() - L < O);
  }
  function oe() {
    if (N !== null) {
      var S = e.unstable_now();
      L = S;
      var P = !0;
      try {
        P = N(!0, S);
      } finally {
        P ? Qe() : ((_ = !1), (N = null));
      }
    } else _ = !1;
  }
  var Qe;
  if (typeof a == "function")
    Qe = function () {
      a(oe);
    };
  else if (typeof MessageChannel < "u") {
    var nt = new MessageChannel(),
      fr = nt.port2;
    (nt.port1.onmessage = oe),
      (Qe = function () {
        fr.postMessage(null);
      });
  } else
    Qe = function () {
      U(oe, 0);
    };
  function xn(S) {
    (N = S), _ || ((_ = !0), Qe());
  }
  function Ht(S, P) {
    j = U(function () {
      S(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (S) {
      S.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || w || ((k = !0), xn(E));
    }),
    (e.unstable_forceFrameRate = function (S) {
      0 > S || 125 < S
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < S ? Math.floor(1e3 / S) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (S) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = p;
      }
      var z = p;
      p = P;
      try {
        return S();
      } finally {
        p = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (S, P) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var z = p;
      p = S;
      try {
        return P();
      } finally {
        p = z;
      }
    }),
    (e.unstable_scheduleCallback = function (S, P, z) {
      var T = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? T + z : T))
          : (z = T),
        S)
      ) {
        case 1:
          var R = -1;
          break;
        case 2:
          R = 250;
          break;
        case 5:
          R = 1073741823;
          break;
        case 4:
          R = 1e4;
          break;
        default:
          R = 5e3;
      }
      return (
        (R = z + R),
        (S = {
          id: g++,
          callback: P,
          priorityLevel: S,
          startTime: z,
          expirationTime: R,
          sortIndex: -1,
        }),
        z > T
          ? ((S.sortIndex = z),
            t(c, S),
            n(s) === null &&
              S === n(c) &&
              (x ? (d(j), (j = -1)) : (x = !0), Ht(v, z - T)))
          : ((S.sortIndex = R), t(s, S), k || w || ((k = !0), xn(E))),
        S
      );
    }),
    (e.unstable_shouldYield = we),
    (e.unstable_wrapCallback = function (S) {
      var P = p;
      return function () {
        var z = p;
        p = P;
        try {
          return S.apply(this, arguments);
        } finally {
          p = z;
        }
      };
    });
})(ps);
fs.exports = ps;
var Uc = fs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hs = M,
  Ce = Uc;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ms = new Set(),
  Wn = {};
function $t(e, t) {
  dn(e, t), dn(e + "Capture", t);
}
function dn(e, t) {
  for (Wn[e] = t, e = 0; e < t.length; e++) ms.add(t[e]);
}
var Je = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ri = Object.prototype.hasOwnProperty,
  Ac =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Yo = {},
  Xo = {};
function $c(e) {
  return ri.call(Xo, e)
    ? !0
    : ri.call(Yo, e)
    ? !1
    : Ac.test(e)
    ? (Xo[e] = !0)
    : ((Yo[e] = !0), !1);
}
function Vc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Hc(e, t, n, r) {
  if (t === null || typeof t > "u" || Vc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function de(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    te[e] = new de(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  te[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  te[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  te[e] = new de(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    te[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  te[e] = new de(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  te[e] = new de(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  te[e] = new de(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  te[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var eo = /[\-:]([a-z])/g;
function to(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(eo, to);
    te[t] = new de(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(eo, to);
    te[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(eo, to);
  te[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  te[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new de(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  te[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function no(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Hc(t, n, l, r) && (n = null),
    r || l === null
      ? $c(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var tt = hs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  hr = Symbol.for("react.element"),
  Gt = Symbol.for("react.portal"),
  Kt = Symbol.for("react.fragment"),
  ro = Symbol.for("react.strict_mode"),
  li = Symbol.for("react.profiler"),
  gs = Symbol.for("react.provider"),
  vs = Symbol.for("react.context"),
  lo = Symbol.for("react.forward_ref"),
  ii = Symbol.for("react.suspense"),
  oi = Symbol.for("react.suspense_list"),
  io = Symbol.for("react.memo"),
  ot = Symbol.for("react.lazy"),
  ys = Symbol.for("react.offscreen"),
  Zo = Symbol.iterator;
function Sn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Zo && e[Zo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  zl;
function zn(e) {
  if (zl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      zl = (t && t[1]) || "";
    }
  return (
    `
` +
    zl +
    e
  );
}
var Ll = !1;
function Dl(e, t) {
  if (!e || Ll) return "";
  Ll = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Ll = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? zn(e) : "";
}
function Bc(e) {
  switch (e.tag) {
    case 5:
      return zn(e.type);
    case 16:
      return zn("Lazy");
    case 13:
      return zn("Suspense");
    case 19:
      return zn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Dl(e.type, !1)), e;
    case 11:
      return (e = Dl(e.type.render, !1)), e;
    case 1:
      return (e = Dl(e.type, !0)), e;
    default:
      return "";
  }
}
function ui(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Kt:
      return "Fragment";
    case Gt:
      return "Portal";
    case li:
      return "Profiler";
    case ro:
      return "StrictMode";
    case ii:
      return "Suspense";
    case oi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case vs:
        return (e.displayName || "Context") + ".Consumer";
      case gs:
        return (e._context.displayName || "Context") + ".Provider";
      case lo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case io:
        return (
          (t = e.displayName || null), t !== null ? t : ui(e.type) || "Memo"
        );
      case ot:
        (t = e._payload), (e = e._init);
        try {
          return ui(e(t));
        } catch {}
    }
  return null;
}
function Wc(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return ui(t);
    case 8:
      return t === ro ? "StrictMode" : "Mode";
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
      if (typeof t == "string") return t;
  }
  return null;
}
function kt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ws(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Qc(e) {
  var t = ws(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function mr(e) {
  e._valueTracker || (e._valueTracker = Qc(e));
}
function ks(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ws(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Br(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function si(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Jo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = kt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function xs(e, t) {
  (t = t.checked), t != null && no(e, "checked", t, !1);
}
function ai(e, t) {
  xs(e, t);
  var n = kt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ci(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ci(e, t.type, kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function qo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ci(e, t, n) {
  (t !== "number" || Br(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ln = Array.isArray;
function ln(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + kt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function di(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function bo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (Ln(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: kt(n) };
}
function Ss(e, t) {
  var n = kt(t.value),
    r = kt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function eu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Cs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function fi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Cs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var gr,
  Es = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        gr = gr || document.createElement("div"),
          gr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = gr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mn = {
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
    strokeWidth: !0,
  },
  Gc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mn).forEach(function (e) {
  Gc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mn[t] = Mn[e]);
  });
});
function _s(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Mn.hasOwnProperty(e) && Mn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ns(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = _s(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Kc = Q(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function pi(e, t) {
  if (t) {
    if (Kc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function hi(e, t) {
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
      return !0;
  }
}
var mi = null;
function oo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var gi = null,
  on = null,
  un = null;
function tu(e) {
  if ((e = cr(e))) {
    if (typeof gi != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = yl(t)), gi(e.stateNode, e.type, t));
  }
}
function js(e) {
  on ? (un ? un.push(e) : (un = [e])) : (on = e);
}
function Ps() {
  if (on) {
    var e = on,
      t = un;
    if (((un = on = null), tu(e), t)) for (e = 0; e < t.length; e++) tu(t[e]);
  }
}
function Ts(e, t) {
  return e(t);
}
function zs() {}
var Rl = !1;
function Ls(e, t, n) {
  if (Rl) return e(t, n);
  Rl = !0;
  try {
    return Ts(e, t, n);
  } finally {
    (Rl = !1), (on !== null || un !== null) && (zs(), Ps());
  }
}
function Gn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = yl(n);
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var vi = !1;
if (Je)
  try {
    var Cn = {};
    Object.defineProperty(Cn, "passive", {
      get: function () {
        vi = !0;
      },
    }),
      window.addEventListener("test", Cn, Cn),
      window.removeEventListener("test", Cn, Cn);
  } catch {
    vi = !1;
  }
function Yc(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (g) {
    this.onError(g);
  }
}
var In = !1,
  Wr = null,
  Qr = !1,
  yi = null,
  Xc = {
    onError: function (e) {
      (In = !0), (Wr = e);
    },
  };
function Zc(e, t, n, r, l, i, o, u, s) {
  (In = !1), (Wr = null), Yc.apply(Xc, arguments);
}
function Jc(e, t, n, r, l, i, o, u, s) {
  if ((Zc.apply(this, arguments), In)) {
    if (In) {
      var c = Wr;
      (In = !1), (Wr = null);
    } else throw Error(y(198));
    Qr || ((Qr = !0), (yi = c));
  }
}
function Vt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ds(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function nu(e) {
  if (Vt(e) !== e) throw Error(y(188));
}
function qc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Vt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return nu(l), e;
        if (i === r) return nu(l), t;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Rs(e) {
  return (e = qc(e)), e !== null ? Fs(e) : null;
}
function Fs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Fs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ms = Ce.unstable_scheduleCallback,
  ru = Ce.unstable_cancelCallback,
  bc = Ce.unstable_shouldYield,
  ed = Ce.unstable_requestPaint,
  K = Ce.unstable_now,
  td = Ce.unstable_getCurrentPriorityLevel,
  uo = Ce.unstable_ImmediatePriority,
  Is = Ce.unstable_UserBlockingPriority,
  Gr = Ce.unstable_NormalPriority,
  nd = Ce.unstable_LowPriority,
  Os = Ce.unstable_IdlePriority,
  hl = null,
  Be = null;
function rd(e) {
  if (Be && typeof Be.onCommitFiberRoot == "function")
    try {
      Be.onCommitFiberRoot(hl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : od,
  ld = Math.log,
  id = Math.LN2;
function od(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ld(e) / id) | 0)) | 0;
}
var vr = 64,
  yr = 4194304;
function Dn(e) {
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
      return e;
  }
}
function Kr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Dn(u)) : ((i &= o), i !== 0 && (r = Dn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Dn(o)) : i !== 0 && (r = Dn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function ud(e, t) {
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
      return -1;
  }
}
function sd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Oe(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = ud(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function wi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Us() {
  var e = vr;
  return (vr <<= 1), !(vr & 4194240) && (vr = 64), e;
}
function Fl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function sr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n);
}
function ad(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function so(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var I = 0;
function As(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var $s,
  ao,
  Vs,
  Hs,
  Bs,
  ki = !1,
  wr = [],
  ft = null,
  pt = null,
  ht = null,
  Kn = new Map(),
  Yn = new Map(),
  st = [],
  cd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function lu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ft = null;
      break;
    case "dragenter":
    case "dragleave":
      pt = null;
      break;
    case "mouseover":
    case "mouseout":
      ht = null;
      break;
    case "pointerover":
    case "pointerout":
      Kn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yn.delete(t.pointerId);
  }
}
function En(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = cr(t)), t !== null && ao(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function dd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ft = En(ft, e, t, n, r, l)), !0;
    case "dragenter":
      return (pt = En(pt, e, t, n, r, l)), !0;
    case "mouseover":
      return (ht = En(ht, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Kn.set(i, En(Kn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Yn.set(i, En(Yn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ws(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = Vt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ds(n)), t !== null)) {
          (e.blockedOn = t),
            Bs(e.priority, function () {
              Vs(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Dr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (mi = r), n.target.dispatchEvent(r), (mi = null);
    } else return (t = cr(n)), t !== null && ao(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function iu(e, t, n) {
  Dr(e) && n.delete(t);
}
function fd() {
  (ki = !1),
    ft !== null && Dr(ft) && (ft = null),
    pt !== null && Dr(pt) && (pt = null),
    ht !== null && Dr(ht) && (ht = null),
    Kn.forEach(iu),
    Yn.forEach(iu);
}
function _n(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ki ||
      ((ki = !0),
      Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, fd)));
}
function Xn(e) {
  function t(l) {
    return _n(l, e);
  }
  if (0 < wr.length) {
    _n(wr[0], e);
    for (var n = 1; n < wr.length; n++) {
      var r = wr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ft !== null && _n(ft, e),
      pt !== null && _n(pt, e),
      ht !== null && _n(ht, e),
      Kn.forEach(t),
      Yn.forEach(t),
      n = 0;
    n < st.length;
    n++
  )
    (r = st[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < st.length && ((n = st[0]), n.blockedOn === null); )
    Ws(n), n.blockedOn === null && st.shift();
}
var sn = tt.ReactCurrentBatchConfig,
  Yr = !0;
function pd(e, t, n, r) {
  var l = I,
    i = sn.transition;
  sn.transition = null;
  try {
    (I = 1), co(e, t, n, r);
  } finally {
    (I = l), (sn.transition = i);
  }
}
function hd(e, t, n, r) {
  var l = I,
    i = sn.transition;
  sn.transition = null;
  try {
    (I = 4), co(e, t, n, r);
  } finally {
    (I = l), (sn.transition = i);
  }
}
function co(e, t, n, r) {
  if (Yr) {
    var l = xi(e, t, n, r);
    if (l === null) Wl(e, t, r, Xr, n), lu(e, r);
    else if (dd(l, e, t, n, r)) r.stopPropagation();
    else if ((lu(e, r), t & 4 && -1 < cd.indexOf(e))) {
      for (; l !== null; ) {
        var i = cr(l);
        if (
          (i !== null && $s(i),
          (i = xi(e, t, n, r)),
          i === null && Wl(e, t, r, Xr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Wl(e, t, r, null, n);
  }
}
var Xr = null;
function xi(e, t, n, r) {
  if (((Xr = null), (e = oo(r)), (e = zt(e)), e !== null))
    if (((t = Vt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ds(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Xr = e), null;
}
function Qs(e) {
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
      switch (td()) {
        case uo:
          return 1;
        case Is:
          return 4;
        case Gr:
        case nd:
          return 16;
        case Os:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ct = null,
  fo = null,
  Rr = null;
function Gs() {
  if (Rr) return Rr;
  var e,
    t = fo,
    n = t.length,
    r,
    l = "value" in ct ? ct.value : ct.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Rr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Fr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function kr() {
  return !0;
}
function ou() {
  return !1;
}
function _e(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? kr
        : ou),
      (this.isPropagationStopped = ou),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = kr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = kr));
      },
      persist: function () {},
      isPersistent: kr,
    }),
    t
  );
}
var wn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  po = _e(wn),
  ar = Q({}, wn, { view: 0, detail: 0 }),
  md = _e(ar),
  Ml,
  Il,
  Nn,
  ml = Q({}, ar, {
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
    getModifierState: ho,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Nn &&
            (Nn && e.type === "mousemove"
              ? ((Ml = e.screenX - Nn.screenX), (Il = e.screenY - Nn.screenY))
              : (Il = Ml = 0),
            (Nn = e)),
          Ml);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Il;
    },
  }),
  uu = _e(ml),
  gd = Q({}, ml, { dataTransfer: 0 }),
  vd = _e(gd),
  yd = Q({}, ar, { relatedTarget: 0 }),
  Ol = _e(yd),
  wd = Q({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  kd = _e(wd),
  xd = Q({}, wn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Sd = _e(xd),
  Cd = Q({}, wn, { data: 0 }),
  su = _e(Cd),
  Ed = {
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
    MozPrintableKey: "Unidentified",
  },
  _d = {
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
    224: "Meta",
  },
  Nd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function jd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Nd[e]) ? !!t[e] : !1;
}
function ho() {
  return jd;
}
var Pd = Q({}, ar, {
    key: function (e) {
      if (e.key) {
        var t = Ed[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Fr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? _d[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ho,
    charCode: function (e) {
      return e.type === "keypress" ? Fr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Fr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Td = _e(Pd),
  zd = Q({}, ml, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  au = _e(zd),
  Ld = Q({}, ar, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ho,
  }),
  Dd = _e(Ld),
  Rd = Q({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Fd = _e(Rd),
  Md = Q({}, ml, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Id = _e(Md),
  Od = [9, 13, 27, 32],
  mo = Je && "CompositionEvent" in window,
  On = null;
Je && "documentMode" in document && (On = document.documentMode);
var Ud = Je && "TextEvent" in window && !On,
  Ks = Je && (!mo || (On && 8 < On && 11 >= On)),
  cu = " ",
  du = !1;
function Ys(e, t) {
  switch (e) {
    case "keyup":
      return Od.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Xs(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Yt = !1;
function Ad(e, t) {
  switch (e) {
    case "compositionend":
      return Xs(t);
    case "keypress":
      return t.which !== 32 ? null : ((du = !0), cu);
    case "textInput":
      return (e = t.data), e === cu && du ? null : e;
    default:
      return null;
  }
}
function $d(e, t) {
  if (Yt)
    return e === "compositionend" || (!mo && Ys(e, t))
      ? ((e = Gs()), (Rr = fo = ct = null), (Yt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ks && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Vd = {
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
  week: !0,
};
function fu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Vd[e.type] : t === "textarea";
}
function Zs(e, t, n, r) {
  js(r),
    (t = Zr(t, "onChange")),
    0 < t.length &&
      ((n = new po("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Un = null,
  Zn = null;
function Hd(e) {
  ua(e, 0);
}
function gl(e) {
  var t = Jt(e);
  if (ks(t)) return e;
}
function Bd(e, t) {
  if (e === "change") return t;
}
var Js = !1;
if (Je) {
  var Ul;
  if (Je) {
    var Al = "oninput" in document;
    if (!Al) {
      var pu = document.createElement("div");
      pu.setAttribute("oninput", "return;"),
        (Al = typeof pu.oninput == "function");
    }
    Ul = Al;
  } else Ul = !1;
  Js = Ul && (!document.documentMode || 9 < document.documentMode);
}
function hu() {
  Un && (Un.detachEvent("onpropertychange", qs), (Zn = Un = null));
}
function qs(e) {
  if (e.propertyName === "value" && gl(Zn)) {
    var t = [];
    Zs(t, Zn, e, oo(e)), Ls(Hd, t);
  }
}
function Wd(e, t, n) {
  e === "focusin"
    ? (hu(), (Un = t), (Zn = n), Un.attachEvent("onpropertychange", qs))
    : e === "focusout" && hu();
}
function Qd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return gl(Zn);
}
function Gd(e, t) {
  if (e === "click") return gl(t);
}
function Kd(e, t) {
  if (e === "input" || e === "change") return gl(t);
}
function Yd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ae = typeof Object.is == "function" ? Object.is : Yd;
function Jn(e, t) {
  if (Ae(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ri.call(t, l) || !Ae(e[l], t[l])) return !1;
  }
  return !0;
}
function mu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function gu(e, t) {
  var n = mu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = mu(n);
  }
}
function bs(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? bs(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ea() {
  for (var e = window, t = Br(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Br(e.document);
  }
  return t;
}
function go(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Xd(e) {
  var t = ea(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    bs(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && go(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = gu(n, i));
        var o = gu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Zd = Je && "documentMode" in document && 11 >= document.documentMode,
  Xt = null,
  Si = null,
  An = null,
  Ci = !1;
function vu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ci ||
    Xt == null ||
    Xt !== Br(r) ||
    ((r = Xt),
    "selectionStart" in r && go(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (An && Jn(An, r)) ||
      ((An = r),
      (r = Zr(Si, "onSelect")),
      0 < r.length &&
        ((t = new po("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Xt))));
}
function xr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Zt = {
    animationend: xr("Animation", "AnimationEnd"),
    animationiteration: xr("Animation", "AnimationIteration"),
    animationstart: xr("Animation", "AnimationStart"),
    transitionend: xr("Transition", "TransitionEnd"),
  },
  $l = {},
  ta = {};
Je &&
  ((ta = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Zt.animationend.animation,
    delete Zt.animationiteration.animation,
    delete Zt.animationstart.animation),
  "TransitionEvent" in window || delete Zt.transitionend.transition);
function vl(e) {
  if ($l[e]) return $l[e];
  if (!Zt[e]) return e;
  var t = Zt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ta) return ($l[e] = t[n]);
  return e;
}
var na = vl("animationend"),
  ra = vl("animationiteration"),
  la = vl("animationstart"),
  ia = vl("transitionend"),
  oa = new Map(),
  yu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function St(e, t) {
  oa.set(e, t), $t(t, [e]);
}
for (var Vl = 0; Vl < yu.length; Vl++) {
  var Hl = yu[Vl],
    Jd = Hl.toLowerCase(),
    qd = Hl[0].toUpperCase() + Hl.slice(1);
  St(Jd, "on" + qd);
}
St(na, "onAnimationEnd");
St(ra, "onAnimationIteration");
St(la, "onAnimationStart");
St("dblclick", "onDoubleClick");
St("focusin", "onFocus");
St("focusout", "onBlur");
St(ia, "onTransitionEnd");
dn("onMouseEnter", ["mouseout", "mouseover"]);
dn("onMouseLeave", ["mouseout", "mouseover"]);
dn("onPointerEnter", ["pointerout", "pointerover"]);
dn("onPointerLeave", ["pointerout", "pointerover"]);
$t(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
$t(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
$t("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$t(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
$t(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
$t(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Rn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  bd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));
function wu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Jc(r, t, void 0, e), (e.currentTarget = null);
}
function ua(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          wu(l, u, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          wu(l, u, c), (i = s);
        }
    }
  }
  if (Qr) throw ((e = yi), (Qr = !1), (yi = null), e);
}
function $(e, t) {
  var n = t[Pi];
  n === void 0 && (n = t[Pi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (sa(t, e, 2, !1), n.add(r));
}
function Bl(e, t, n) {
  var r = 0;
  t && (r |= 4), sa(n, e, r, t);
}
var Sr = "_reactListening" + Math.random().toString(36).slice(2);
function qn(e) {
  if (!e[Sr]) {
    (e[Sr] = !0),
      ms.forEach(function (n) {
        n !== "selectionchange" && (bd.has(n) || Bl(n, !1, e), Bl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Sr] || ((t[Sr] = !0), Bl("selectionchange", !1, t));
  }
}
function sa(e, t, n, r) {
  switch (Qs(t)) {
    case 1:
      var l = pd;
      break;
    case 4:
      l = hd;
      break;
    default:
      l = co;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !vi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Wl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = zt(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Ls(function () {
    var c = i,
      g = oo(n),
      h = [];
    e: {
      var p = oa.get(e);
      if (p !== void 0) {
        var w = po,
          k = e;
        switch (e) {
          case "keypress":
            if (Fr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Td;
            break;
          case "focusin":
            (k = "focus"), (w = Ol);
            break;
          case "focusout":
            (k = "blur"), (w = Ol);
            break;
          case "beforeblur":
          case "afterblur":
            w = Ol;
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
            w = uu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = vd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Dd;
            break;
          case na:
          case ra:
          case la:
            w = kd;
            break;
          case ia:
            w = Fd;
            break;
          case "scroll":
            w = md;
            break;
          case "wheel":
            w = Id;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Sd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = au;
        }
        var x = (t & 4) !== 0,
          U = !x && e === "scroll",
          d = x ? (p !== null ? p + "Capture" : null) : p;
        x = [];
        for (var a = c, f; a !== null; ) {
          f = a;
          var v = f.stateNode;
          if (
            (f.tag === 5 &&
              v !== null &&
              ((f = v),
              d !== null && ((v = Gn(a, d)), v != null && x.push(bn(a, v, f)))),
            U)
          )
            break;
          a = a.return;
        }
        0 < x.length &&
          ((p = new w(p, k, null, n, g)), h.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          p &&
            n !== mi &&
            (k = n.relatedTarget || n.fromElement) &&
            (zt(k) || k[qe]))
        )
          break e;
        if (
          (w || p) &&
          ((p =
            g.window === g
              ? g
              : (p = g.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          w
            ? ((k = n.relatedTarget || n.toElement),
              (w = c),
              (k = k ? zt(k) : null),
              k !== null &&
                ((U = Vt(k)), k !== U || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((w = null), (k = c)),
          w !== k)
        ) {
          if (
            ((x = uu),
            (v = "onMouseLeave"),
            (d = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = au),
              (v = "onPointerLeave"),
              (d = "onPointerEnter"),
              (a = "pointer")),
            (U = w == null ? p : Jt(w)),
            (f = k == null ? p : Jt(k)),
            (p = new x(v, a + "leave", w, n, g)),
            (p.target = U),
            (p.relatedTarget = f),
            (v = null),
            zt(g) === c &&
              ((x = new x(d, a + "enter", k, n, g)),
              (x.target = f),
              (x.relatedTarget = U),
              (v = x)),
            (U = v),
            w && k)
          )
            t: {
              for (x = w, d = k, a = 0, f = x; f; f = Wt(f)) a++;
              for (f = 0, v = d; v; v = Wt(v)) f++;
              for (; 0 < a - f; ) (x = Wt(x)), a--;
              for (; 0 < f - a; ) (d = Wt(d)), f--;
              for (; a--; ) {
                if (x === d || (d !== null && x === d.alternate)) break t;
                (x = Wt(x)), (d = Wt(d));
              }
              x = null;
            }
          else x = null;
          w !== null && ku(h, p, w, x, !1),
            k !== null && U !== null && ku(h, U, k, x, !0);
        }
      }
      e: {
        if (
          ((p = c ? Jt(c) : window),
          (w = p.nodeName && p.nodeName.toLowerCase()),
          w === "select" || (w === "input" && p.type === "file"))
        )
          var E = Bd;
        else if (fu(p))
          if (Js) E = Kd;
          else {
            E = Qd;
            var _ = Wd;
          }
        else
          (w = p.nodeName) &&
            w.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = Gd);
        if (E && (E = E(e, c))) {
          Zs(h, E, n, g);
          break e;
        }
        _ && _(e, p, c),
          e === "focusout" &&
            (_ = p._wrapperState) &&
            _.controlled &&
            p.type === "number" &&
            ci(p, "number", p.value);
      }
      switch (((_ = c ? Jt(c) : window), e)) {
        case "focusin":
          (fu(_) || _.contentEditable === "true") &&
            ((Xt = _), (Si = c), (An = null));
          break;
        case "focusout":
          An = Si = Xt = null;
          break;
        case "mousedown":
          Ci = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ci = !1), vu(h, n, g);
          break;
        case "selectionchange":
          if (Zd) break;
        case "keydown":
        case "keyup":
          vu(h, n, g);
      }
      var N;
      if (mo)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        Yt
          ? Ys(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (Ks &&
          n.locale !== "ko" &&
          (Yt || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && Yt && (N = Gs())
            : ((ct = g),
              (fo = "value" in ct ? ct.value : ct.textContent),
              (Yt = !0))),
        (_ = Zr(c, j)),
        0 < _.length &&
          ((j = new su(j, e, null, n, g)),
          h.push({ event: j, listeners: _ }),
          N ? (j.data = N) : ((N = Xs(n)), N !== null && (j.data = N)))),
        (N = Ud ? Ad(e, n) : $d(e, n)) &&
          ((c = Zr(c, "onBeforeInput")),
          0 < c.length &&
            ((g = new su("onBeforeInput", "beforeinput", null, n, g)),
            h.push({ event: g, listeners: c }),
            (g.data = N)));
    }
    ua(h, t);
  });
}
function bn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Zr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Gn(e, n)),
      i != null && r.unshift(bn(e, i, l)),
      (i = Gn(e, t)),
      i != null && r.push(bn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Wt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ku(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Gn(n, i)), s != null && o.unshift(bn(n, s, u)))
        : l || ((s = Gn(n, i)), s != null && o.push(bn(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var ef = /\r\n?/g,
  tf = /\u0000|\uFFFD/g;
function xu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ef,
      `
`
    )
    .replace(tf, "");
}
function Cr(e, t, n) {
  if (((t = xu(t)), xu(e) !== t && n)) throw Error(y(425));
}
function Jr() {}
var Ei = null,
  _i = null;
function Ni(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ji = typeof setTimeout == "function" ? setTimeout : void 0,
  nf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Su = typeof Promise == "function" ? Promise : void 0,
  rf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Su < "u"
      ? function (e) {
          return Su.resolve(null).then(e).catch(lf);
        }
      : ji;
function lf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ql(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Xn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Xn(t);
}
function mt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Cu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var kn = Math.random().toString(36).slice(2),
  He = "__reactFiber$" + kn,
  er = "__reactProps$" + kn,
  qe = "__reactContainer$" + kn,
  Pi = "__reactEvents$" + kn,
  of = "__reactListeners$" + kn,
  uf = "__reactHandles$" + kn;
function zt(e) {
  var t = e[He];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[qe] || n[He])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Cu(e); e !== null; ) {
          if ((n = e[He])) return n;
          e = Cu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function cr(e) {
  return (
    (e = e[He] || e[qe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Jt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function yl(e) {
  return e[er] || null;
}
var Ti = [],
  qt = -1;
function Ct(e) {
  return { current: e };
}
function V(e) {
  0 > qt || ((e.current = Ti[qt]), (Ti[qt] = null), qt--);
}
function A(e, t) {
  qt++, (Ti[qt] = e.current), (e.current = t);
}
var xt = {},
  ie = Ct(xt),
  ge = Ct(!1),
  Mt = xt;
function fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return xt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ve(e) {
  return (e = e.childContextTypes), e != null;
}
function qr() {
  V(ge), V(ie);
}
function Eu(e, t, n) {
  if (ie.current !== xt) throw Error(y(168));
  A(ie, t), A(ge, n);
}
function aa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Wc(e) || "Unknown", l));
  return Q({}, n, r);
}
function br(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || xt),
    (Mt = ie.current),
    A(ie, e),
    A(ge, ge.current),
    !0
  );
}
function _u(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = aa(e, t, Mt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      V(ge),
      V(ie),
      A(ie, e))
    : V(ge),
    A(ge, n);
}
var Ke = null,
  wl = !1,
  Gl = !1;
function ca(e) {
  Ke === null ? (Ke = [e]) : Ke.push(e);
}
function sf(e) {
  (wl = !0), ca(e);
}
function Et() {
  if (!Gl && Ke !== null) {
    Gl = !0;
    var e = 0,
      t = I;
    try {
      var n = Ke;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ke = null), (wl = !1);
    } catch (l) {
      throw (Ke !== null && (Ke = Ke.slice(e + 1)), Ms(uo, Et), l);
    } finally {
      (I = t), (Gl = !1);
    }
  }
  return null;
}
var bt = [],
  en = 0,
  el = null,
  tl = 0,
  Ne = [],
  je = 0,
  It = null,
  Ye = 1,
  Xe = "";
function Nt(e, t) {
  (bt[en++] = tl), (bt[en++] = el), (el = e), (tl = t);
}
function da(e, t, n) {
  (Ne[je++] = Ye), (Ne[je++] = Xe), (Ne[je++] = It), (It = e);
  var r = Ye;
  e = Xe;
  var l = 32 - Oe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Oe(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ye = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      (Xe = i + e);
  } else (Ye = (1 << i) | (n << l) | r), (Xe = e);
}
function vo(e) {
  e.return !== null && (Nt(e, 1), da(e, 1, 0));
}
function yo(e) {
  for (; e === el; )
    (el = bt[--en]), (bt[en] = null), (tl = bt[--en]), (bt[en] = null);
  for (; e === It; )
    (It = Ne[--je]),
      (Ne[je] = null),
      (Xe = Ne[--je]),
      (Ne[je] = null),
      (Ye = Ne[--je]),
      (Ne[je] = null);
}
var Se = null,
  xe = null,
  H = !1,
  Ie = null;
function fa(e, t) {
  var n = Pe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Nu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Se = e), (xe = mt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Se = e), (xe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = It !== null ? { id: Ye, overflow: Xe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Pe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Se = e),
            (xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function zi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Li(e) {
  if (H) {
    var t = xe;
    if (t) {
      var n = t;
      if (!Nu(e, t)) {
        if (zi(e)) throw Error(y(418));
        t = mt(n.nextSibling);
        var r = Se;
        t && Nu(e, t)
          ? fa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (Se = e));
      }
    } else {
      if (zi(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (Se = e);
    }
  }
}
function ju(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Se = e;
}
function Er(e) {
  if (e !== Se) return !1;
  if (!H) return ju(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ni(e.type, e.memoizedProps))),
    t && (t = xe))
  ) {
    if (zi(e)) throw (pa(), Error(y(418)));
    for (; t; ) fa(e, t), (t = mt(t.nextSibling));
  }
  if ((ju(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xe = mt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else xe = Se ? mt(e.stateNode.nextSibling) : null;
  return !0;
}
function pa() {
  for (var e = xe; e; ) e = mt(e.nextSibling);
}
function pn() {
  (xe = Se = null), (H = !1);
}
function wo(e) {
  Ie === null ? (Ie = [e]) : Ie.push(e);
}
var af = tt.ReactCurrentBatchConfig;
function Fe(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var nl = Ct(null),
  rl = null,
  tn = null,
  ko = null;
function xo() {
  ko = tn = rl = null;
}
function So(e) {
  var t = nl.current;
  V(nl), (e._currentValue = t);
}
function Di(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function an(e, t) {
  (rl = e),
    (ko = tn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (me = !0), (e.firstContext = null));
}
function ze(e) {
  var t = e._currentValue;
  if (ko !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), tn === null)) {
      if (rl === null) throw Error(y(308));
      (tn = e), (rl.dependencies = { lanes: 0, firstContext: e });
    } else tn = tn.next = e;
  return t;
}
var Lt = null;
function Co(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e);
}
function ha(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Co(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    be(e, r)
  );
}
function be(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ut = !1;
function Eo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ma(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ze(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function gt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      be(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Co(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    be(e, n)
  );
}
function Mr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), so(e, n);
  }
}
function Pu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ll(e, t, n, r) {
  var l = e.updateQueue;
  ut = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var g = e.alternate;
    g !== null &&
      ((g = g.updateQueue),
      (u = g.lastBaseUpdate),
      u !== o &&
        (u === null ? (g.firstBaseUpdate = c) : (u.next = c),
        (g.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (g = c = s = null), (u = i);
    do {
      var p = u.lane,
        w = u.eventTime;
      if ((r & p) === p) {
        g !== null &&
          (g = g.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var k = e,
            x = u;
          switch (((p = t), (w = n), x.tag)) {
            case 1:
              if (((k = x.payload), typeof k == "function")) {
                h = k.call(w, h, p);
                break e;
              }
              h = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = x.payload),
                (p = typeof k == "function" ? k.call(w, h, p) : k),
                p == null)
              )
                break e;
              h = Q({}, h, p);
              break e;
            case 2:
              ut = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (w = {
          eventTime: w,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          g === null ? ((c = g = w), (s = h)) : (g = g.next = w),
          (o |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (g === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = g),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Ut |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function Tu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var ga = new hs.Component().refs;
function Ri(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var kl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = yt(e),
      i = Ze(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = gt(e, i, l)),
      t !== null && (Ue(t, e, l, r), Mr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = yt(e),
      i = Ze(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = gt(e, i, l)),
      t !== null && (Ue(t, e, l, r), Mr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ae(),
      r = yt(e),
      l = Ze(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = gt(e, l, r)),
      t !== null && (Ue(t, e, r, n), Mr(t, e, r));
  },
};
function zu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Jn(n, r) || !Jn(l, i)
      : !0
  );
}
function va(e, t, n) {
  var r = !1,
    l = xt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ze(i))
      : ((l = ve(t) ? Mt : ie.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? fn(e, l) : xt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = kl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Lu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && kl.enqueueReplaceState(t, t.state, null);
}
function Fi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = ga), Eo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = ze(i))
    : ((i = ve(t) ? Mt : ie.current), (l.context = fn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ri(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && kl.enqueueReplaceState(l, l.state, null),
      ll(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function jn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === ga && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function _r(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Du(e) {
  var t = e._init;
  return t(e._payload);
}
function ya(e) {
  function t(d, a) {
    if (e) {
      var f = d.deletions;
      f === null ? ((d.deletions = [a]), (d.flags |= 16)) : f.push(a);
    }
  }
  function n(d, a) {
    if (!e) return null;
    for (; a !== null; ) t(d, a), (a = a.sibling);
    return null;
  }
  function r(d, a) {
    for (d = new Map(); a !== null; )
      a.key !== null ? d.set(a.key, a) : d.set(a.index, a), (a = a.sibling);
    return d;
  }
  function l(d, a) {
    return (d = wt(d, a)), (d.index = 0), (d.sibling = null), d;
  }
  function i(d, a, f) {
    return (
      (d.index = f),
      e
        ? ((f = d.alternate),
          f !== null
            ? ((f = f.index), f < a ? ((d.flags |= 2), a) : f)
            : ((d.flags |= 2), a))
        : ((d.flags |= 1048576), a)
    );
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, a, f, v) {
    return a === null || a.tag !== 6
      ? ((a = bl(f, d.mode, v)), (a.return = d), a)
      : ((a = l(a, f)), (a.return = d), a);
  }
  function s(d, a, f, v) {
    var E = f.type;
    return E === Kt
      ? g(d, a, f.props.children, v, f.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === ot &&
            Du(E) === a.type))
      ? ((v = l(a, f.props)), (v.ref = jn(d, a, f)), (v.return = d), v)
      : ((v = Vr(f.type, f.key, f.props, null, d.mode, v)),
        (v.ref = jn(d, a, f)),
        (v.return = d),
        v);
  }
  function c(d, a, f, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== f.containerInfo ||
      a.stateNode.implementation !== f.implementation
      ? ((a = ei(f, d.mode, v)), (a.return = d), a)
      : ((a = l(a, f.children || [])), (a.return = d), a);
  }
  function g(d, a, f, v, E) {
    return a === null || a.tag !== 7
      ? ((a = Ft(f, d.mode, v, E)), (a.return = d), a)
      : ((a = l(a, f)), (a.return = d), a);
  }
  function h(d, a, f) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = bl("" + a, d.mode, f)), (a.return = d), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case hr:
          return (
            (f = Vr(a.type, a.key, a.props, null, d.mode, f)),
            (f.ref = jn(d, null, a)),
            (f.return = d),
            f
          );
        case Gt:
          return (a = ei(a, d.mode, f)), (a.return = d), a;
        case ot:
          var v = a._init;
          return h(d, v(a._payload), f);
      }
      if (Ln(a) || Sn(a))
        return (a = Ft(a, d.mode, f, null)), (a.return = d), a;
      _r(d, a);
    }
    return null;
  }
  function p(d, a, f, v) {
    var E = a !== null ? a.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return E !== null ? null : u(d, a, "" + f, v);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case hr:
          return f.key === E ? s(d, a, f, v) : null;
        case Gt:
          return f.key === E ? c(d, a, f, v) : null;
        case ot:
          return (E = f._init), p(d, a, E(f._payload), v);
      }
      if (Ln(f) || Sn(f)) return E !== null ? null : g(d, a, f, v, null);
      _r(d, f);
    }
    return null;
  }
  function w(d, a, f, v, E) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (d = d.get(f) || null), u(a, d, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case hr:
          return (d = d.get(v.key === null ? f : v.key) || null), s(a, d, v, E);
        case Gt:
          return (d = d.get(v.key === null ? f : v.key) || null), c(a, d, v, E);
        case ot:
          var _ = v._init;
          return w(d, a, f, _(v._payload), E);
      }
      if (Ln(v) || Sn(v)) return (d = d.get(f) || null), g(a, d, v, E, null);
      _r(a, v);
    }
    return null;
  }
  function k(d, a, f, v) {
    for (
      var E = null, _ = null, N = a, j = (a = 0), O = null;
      N !== null && j < f.length;
      j++
    ) {
      N.index > j ? ((O = N), (N = null)) : (O = N.sibling);
      var L = p(d, N, f[j], v);
      if (L === null) {
        N === null && (N = O);
        break;
      }
      e && N && L.alternate === null && t(d, N),
        (a = i(L, a, j)),
        _ === null ? (E = L) : (_.sibling = L),
        (_ = L),
        (N = O);
    }
    if (j === f.length) return n(d, N), H && Nt(d, j), E;
    if (N === null) {
      for (; j < f.length; j++)
        (N = h(d, f[j], v)),
          N !== null &&
            ((a = i(N, a, j)), _ === null ? (E = N) : (_.sibling = N), (_ = N));
      return H && Nt(d, j), E;
    }
    for (N = r(d, N); j < f.length; j++)
      (O = w(N, d, j, f[j], v)),
        O !== null &&
          (e && O.alternate !== null && N.delete(O.key === null ? j : O.key),
          (a = i(O, a, j)),
          _ === null ? (E = O) : (_.sibling = O),
          (_ = O));
    return (
      e &&
        N.forEach(function (we) {
          return t(d, we);
        }),
      H && Nt(d, j),
      E
    );
  }
  function x(d, a, f, v) {
    var E = Sn(f);
    if (typeof E != "function") throw Error(y(150));
    if (((f = E.call(f)), f == null)) throw Error(y(151));
    for (
      var _ = (E = null), N = a, j = (a = 0), O = null, L = f.next();
      N !== null && !L.done;
      j++, L = f.next()
    ) {
      N.index > j ? ((O = N), (N = null)) : (O = N.sibling);
      var we = p(d, N, L.value, v);
      if (we === null) {
        N === null && (N = O);
        break;
      }
      e && N && we.alternate === null && t(d, N),
        (a = i(we, a, j)),
        _ === null ? (E = we) : (_.sibling = we),
        (_ = we),
        (N = O);
    }
    if (L.done) return n(d, N), H && Nt(d, j), E;
    if (N === null) {
      for (; !L.done; j++, L = f.next())
        (L = h(d, L.value, v)),
          L !== null &&
            ((a = i(L, a, j)), _ === null ? (E = L) : (_.sibling = L), (_ = L));
      return H && Nt(d, j), E;
    }
    for (N = r(d, N); !L.done; j++, L = f.next())
      (L = w(N, d, j, L.value, v)),
        L !== null &&
          (e && L.alternate !== null && N.delete(L.key === null ? j : L.key),
          (a = i(L, a, j)),
          _ === null ? (E = L) : (_.sibling = L),
          (_ = L));
    return (
      e &&
        N.forEach(function (oe) {
          return t(d, oe);
        }),
      H && Nt(d, j),
      E
    );
  }
  function U(d, a, f, v) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Kt &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case hr:
          e: {
            for (var E = f.key, _ = a; _ !== null; ) {
              if (_.key === E) {
                if (((E = f.type), E === Kt)) {
                  if (_.tag === 7) {
                    n(d, _.sibling),
                      (a = l(_, f.props.children)),
                      (a.return = d),
                      (d = a);
                    break e;
                  }
                } else if (
                  _.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === ot &&
                    Du(E) === _.type)
                ) {
                  n(d, _.sibling),
                    (a = l(_, f.props)),
                    (a.ref = jn(d, _, f)),
                    (a.return = d),
                    (d = a);
                  break e;
                }
                n(d, _);
                break;
              } else t(d, _);
              _ = _.sibling;
            }
            f.type === Kt
              ? ((a = Ft(f.props.children, d.mode, v, f.key)),
                (a.return = d),
                (d = a))
              : ((v = Vr(f.type, f.key, f.props, null, d.mode, v)),
                (v.ref = jn(d, a, f)),
                (v.return = d),
                (d = v));
          }
          return o(d);
        case Gt:
          e: {
            for (_ = f.key; a !== null; ) {
              if (a.key === _)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === f.containerInfo &&
                  a.stateNode.implementation === f.implementation
                ) {
                  n(d, a.sibling),
                    (a = l(a, f.children || [])),
                    (a.return = d),
                    (d = a);
                  break e;
                } else {
                  n(d, a);
                  break;
                }
              else t(d, a);
              a = a.sibling;
            }
            (a = ei(f, d.mode, v)), (a.return = d), (d = a);
          }
          return o(d);
        case ot:
          return (_ = f._init), U(d, a, _(f._payload), v);
      }
      if (Ln(f)) return k(d, a, f, v);
      if (Sn(f)) return x(d, a, f, v);
      _r(d, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        a !== null && a.tag === 6
          ? (n(d, a.sibling), (a = l(a, f)), (a.return = d), (d = a))
          : (n(d, a), (a = bl(f, d.mode, v)), (a.return = d), (d = a)),
        o(d))
      : n(d, a);
  }
  return U;
}
var hn = ya(!0),
  wa = ya(!1),
  dr = {},
  We = Ct(dr),
  tr = Ct(dr),
  nr = Ct(dr);
function Dt(e) {
  if (e === dr) throw Error(y(174));
  return e;
}
function _o(e, t) {
  switch ((A(nr, t), A(tr, e), A(We, dr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = fi(t, e));
  }
  V(We), A(We, t);
}
function mn() {
  V(We), V(tr), V(nr);
}
function ka(e) {
  Dt(nr.current);
  var t = Dt(We.current),
    n = fi(t, e.type);
  t !== n && (A(tr, e), A(We, n));
}
function No(e) {
  tr.current === e && (V(We), V(tr));
}
var B = Ct(0);
function il(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Kl = [];
function jo() {
  for (var e = 0; e < Kl.length; e++)
    Kl[e]._workInProgressVersionPrimary = null;
  Kl.length = 0;
}
var Ir = tt.ReactCurrentDispatcher,
  Yl = tt.ReactCurrentBatchConfig,
  Ot = 0,
  W = null,
  X = null,
  J = null,
  ol = !1,
  $n = !1,
  rr = 0,
  cf = 0;
function ne() {
  throw Error(y(321));
}
function Po(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ae(e[n], t[n])) return !1;
  return !0;
}
function To(e, t, n, r, l, i) {
  if (
    ((Ot = i),
    (W = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ir.current = e === null || e.memoizedState === null ? hf : mf),
    (e = n(r, l)),
    $n)
  ) {
    i = 0;
    do {
      if ((($n = !1), (rr = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (J = X = null),
        (t.updateQueue = null),
        (Ir.current = gf),
        (e = n(r, l));
    } while ($n);
  }
  if (
    ((Ir.current = ul),
    (t = X !== null && X.next !== null),
    (Ot = 0),
    (J = X = W = null),
    (ol = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function zo() {
  var e = rr !== 0;
  return (rr = 0), e;
}
function Ve() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? (W.memoizedState = J = e) : (J = J.next = e), J;
}
function Le() {
  if (X === null) {
    var e = W.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = J === null ? W.memoizedState : J.next;
  if (t !== null) (J = t), (X = e);
  else {
    if (e === null) throw Error(y(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      J === null ? (W.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function lr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xl(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      c = i;
    do {
      var g = c.lane;
      if ((Ot & g) === g)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: g,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (o = r)) : (s = s.next = h),
          (W.lanes |= g),
          (Ut |= g);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = u),
      Ae(r, t.memoizedState) || (me = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (W.lanes |= i), (Ut |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Zl(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Ae(i, t.memoizedState) || (me = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function xa() {}
function Sa(e, t) {
  var n = W,
    r = Le(),
    l = t(),
    i = !Ae(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (me = !0)),
    (r = r.queue),
    Lo(_a.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ir(9, Ea.bind(null, n, r, l, t), void 0, null),
      q === null)
    )
      throw Error(y(349));
    Ot & 30 || Ca(n, t, l);
  }
  return l;
}
function Ca(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ea(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Na(t) && ja(e);
}
function _a(e, t, n) {
  return n(function () {
    Na(t) && ja(e);
  });
}
function Na(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ae(e, n);
  } catch {
    return !0;
  }
}
function ja(e) {
  var t = be(e, 1);
  t !== null && Ue(t, e, 1, -1);
}
function Ru(e) {
  var t = Ve();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: lr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = pf.bind(null, W, e)),
    [t.memoizedState, e]
  );
}
function ir(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Pa() {
  return Le().memoizedState;
}
function Or(e, t, n, r) {
  var l = Ve();
  (W.flags |= e),
    (l.memoizedState = ir(1 | t, n, void 0, r === void 0 ? null : r));
}
function xl(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (((i = o.destroy), r !== null && Po(r, o.deps))) {
      l.memoizedState = ir(t, n, i, r);
      return;
    }
  }
  (W.flags |= e), (l.memoizedState = ir(1 | t, n, i, r));
}
function Fu(e, t) {
  return Or(8390656, 8, e, t);
}
function Lo(e, t) {
  return xl(2048, 8, e, t);
}
function Ta(e, t) {
  return xl(4, 2, e, t);
}
function za(e, t) {
  return xl(4, 4, e, t);
}
function La(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Da(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), xl(4, 4, La.bind(null, t, e), n)
  );
}
function Do() {}
function Ra(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Po(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Fa(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Po(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ma(e, t, n) {
  return Ot & 21
    ? (Ae(n, t) || ((n = Us()), (W.lanes |= n), (Ut |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (me = !0)), (e.memoizedState = n));
}
function df(e, t) {
  var n = I;
  (I = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Yl.transition;
  Yl.transition = {};
  try {
    e(!1), t();
  } finally {
    (I = n), (Yl.transition = r);
  }
}
function Ia() {
  return Le().memoizedState;
}
function ff(e, t, n) {
  var r = yt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Oa(e))
  )
    Ua(t, n);
  else if (((n = ha(e, t, n, r)), n !== null)) {
    var l = ae();
    Ue(n, e, r, l), Aa(n, t, r);
  }
}
function pf(e, t, n) {
  var r = yt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Oa(e)) Ua(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ae(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Co(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ha(e, t, l, r)),
      n !== null && ((l = ae()), Ue(n, e, r, l), Aa(n, t, r));
  }
}
function Oa(e) {
  var t = e.alternate;
  return e === W || (t !== null && t === W);
}
function Ua(e, t) {
  $n = ol = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Aa(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), so(e, n);
  }
}
var ul = {
    readContext: ze,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  hf = {
    readContext: ze,
    useCallback: function (e, t) {
      return (Ve().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ze,
    useEffect: Fu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Or(4194308, 4, La.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Or(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Or(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ve();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ve();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ff.bind(null, W, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ve();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ru,
    useDebugValue: Do,
    useDeferredValue: function (e) {
      return (Ve().memoizedState = e);
    },
    useTransition: function () {
      var e = Ru(!1),
        t = e[0];
      return (e = df.bind(null, e[1])), (Ve().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = W,
        l = Ve();
      if (H) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), q === null)) throw Error(y(349));
        Ot & 30 || Ca(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Fu(_a.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ir(9, Ea.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ve(),
        t = q.identifierPrefix;
      if (H) {
        var n = Xe,
          r = Ye;
        (n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = rr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = cf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  mf = {
    readContext: ze,
    useCallback: Ra,
    useContext: ze,
    useEffect: Lo,
    useImperativeHandle: Da,
    useInsertionEffect: Ta,
    useLayoutEffect: za,
    useMemo: Fa,
    useReducer: Xl,
    useRef: Pa,
    useState: function () {
      return Xl(lr);
    },
    useDebugValue: Do,
    useDeferredValue: function (e) {
      var t = Le();
      return Ma(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Xl(lr)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: xa,
    useSyncExternalStore: Sa,
    useId: Ia,
    unstable_isNewReconciler: !1,
  },
  gf = {
    readContext: ze,
    useCallback: Ra,
    useContext: ze,
    useEffect: Lo,
    useImperativeHandle: Da,
    useInsertionEffect: Ta,
    useLayoutEffect: za,
    useMemo: Fa,
    useReducer: Zl,
    useRef: Pa,
    useState: function () {
      return Zl(lr);
    },
    useDebugValue: Do,
    useDeferredValue: function (e) {
      var t = Le();
      return X === null ? (t.memoizedState = e) : Ma(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Zl(lr)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: xa,
    useSyncExternalStore: Sa,
    useId: Ia,
    unstable_isNewReconciler: !1,
  };
function gn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Bc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Jl(e, t, n) {
  return { value: e, source: null, stack: null, digest: t ?? null };
}
function Mi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var vf = typeof WeakMap == "function" ? WeakMap : Map;
function $a(e, t, n) {
  (n = Ze(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      al || ((al = !0), (Qi = r)), Mi(e, t);
    }),
    n
  );
}
function Va(e, t, n) {
  (n = Ze(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Mi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Mi(e, t),
          typeof r != "function" &&
            (vt === null ? (vt = new Set([this])) : vt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Mu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new vf();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Lf.bind(null, e, t, n)), t.then(e, e));
}
function Iu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ou(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ze(-1, 1)), (t.tag = 2), gt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var yf = tt.ReactCurrentOwner,
  me = !1;
function se(e, t, n, r) {
  t.child = e === null ? wa(t, null, n, r) : hn(t, e.child, n, r);
}
function Uu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    an(t, l),
    (r = To(e, t, n, r, i, l)),
    (n = zo()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        et(e, t, l))
      : (H && n && vo(t), (t.flags |= 1), se(e, t, r, l), t.child)
  );
}
function Au(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !$o(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ha(e, t, i, r, l))
      : ((e = Vr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Jn), n(o, r) && e.ref === t.ref)
    )
      return et(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = wt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ha(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Jn(i, r) && e.ref === t.ref)
      if (((me = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (me = !0);
      else return (t.lanes = e.lanes), et(e, t, l);
  }
  return Ii(e, t, n, r, l);
}
function Ba(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        A(rn, ke),
        (ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          A(rn, ke),
          (ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        A(rn, ke),
        (ke |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      A(rn, ke),
      (ke |= r);
  return se(e, t, l, n), t.child;
}
function Wa(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ii(e, t, n, r, l) {
  var i = ve(n) ? Mt : ie.current;
  return (
    (i = fn(t, i)),
    an(t, l),
    (n = To(e, t, n, r, i, l)),
    (r = zo()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        et(e, t, l))
      : (H && r && vo(t), (t.flags |= 1), se(e, t, n, l), t.child)
  );
}
function $u(e, t, n, r, l) {
  if (ve(n)) {
    var i = !0;
    br(t);
  } else i = !1;
  if ((an(t, l), t.stateNode === null))
    Ur(e, t), va(t, n, r), Fi(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = ze(c))
      : ((c = ve(n) ? Mt : ie.current), (c = fn(t, c)));
    var g = n.getDerivedStateFromProps,
      h =
        typeof g == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && Lu(t, o, r, c)),
      (ut = !1);
    var p = t.memoizedState;
    (o.state = p),
      ll(t, r, o, l),
      (s = t.memoizedState),
      u !== r || p !== s || ge.current || ut
        ? (typeof g == "function" && (Ri(t, n, g, r), (s = t.memoizedState)),
          (u = ut || zu(t, n, u, r, p, s, c))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      ma(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Fe(t.type, u)),
      (o.props = c),
      (h = t.pendingProps),
      (p = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = ze(s))
        : ((s = ve(n) ? Mt : ie.current), (s = fn(t, s)));
    var w = n.getDerivedStateFromProps;
    (g =
      typeof w == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== h || p !== s) && Lu(t, o, r, s)),
      (ut = !1),
      (p = t.memoizedState),
      (o.state = p),
      ll(t, r, o, l);
    var k = t.memoizedState;
    u !== h || p !== k || ge.current || ut
      ? (typeof w == "function" && (Ri(t, n, w, r), (k = t.memoizedState)),
        (c = ut || zu(t, n, c, r, p, k, s) || !1)
          ? (g ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, k, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, k, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (o.props = r),
        (o.state = k),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Oi(e, t, n, r, i, l);
}
function Oi(e, t, n, r, l, i) {
  Wa(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && _u(t, n, !1), et(e, t, i);
  (r = t.stateNode), (yf.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = hn(t, e.child, null, i)), (t.child = hn(t, null, u, i)))
      : se(e, t, u, i),
    (t.memoizedState = r.state),
    l && _u(t, n, !0),
    t.child
  );
}
function Qa(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Eu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Eu(e, t.context, !1),
    _o(e, t.containerInfo);
}
function Vu(e, t, n, r, l) {
  return pn(), wo(l), (t.flags |= 256), se(e, t, n, r), t.child;
}
var Ui = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ai(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ga(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    A(B, l & 1),
    e === null)
  )
    return (
      Li(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = El(o, r, 0, null)),
              (e = Ft(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ai(n)),
              (t.memoizedState = Ui),
              e)
            : Ro(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return wf(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = wt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = wt(u, i)) : ((i = Ft(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ai(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ui),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = wt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ro(e, t) {
  return (
    (t = El({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Nr(e, t, n, r) {
  return (
    r !== null && wo(r),
    hn(t, e.child, null, n),
    (e = Ro(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function wf(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Jl(Error(y(422)))), Nr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = El({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Ft(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && hn(t, e.child, null, o),
        (t.child.memoizedState = Ai(o)),
        (t.memoizedState = Ui),
        i);
  if (!(t.mode & 1)) return Nr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(y(419))), (r = Jl(i, r)), Nr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), me || u)) {
    if (((r = q), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), be(e, l), Ue(r, e, l, -1));
    }
    return Ao(), (r = Jl(Error(y(421)))), Nr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Df.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (xe = mt(l.nextSibling)),
      (Se = t),
      (H = !0),
      (Ie = null),
      e !== null &&
        ((Ne[je++] = Ye),
        (Ne[je++] = Xe),
        (Ne[je++] = It),
        (Ye = e.id),
        (Xe = e.overflow),
        (It = t)),
      (t = Ro(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Hu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Di(e.return, t, n);
}
function ql(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Ka(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((se(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Hu(e, n, t);
        else if (e.tag === 19) Hu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((A(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && il(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ql(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && il(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ql(t, !0, n, null, i);
        break;
      case "together":
        ql(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ur(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function et(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ut |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = wt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = wt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function kf(e, t, n) {
  switch (t.tag) {
    case 3:
      Qa(t), pn();
      break;
    case 5:
      ka(t);
      break;
    case 1:
      ve(t.type) && br(t);
      break;
    case 4:
      _o(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      A(nl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (A(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ga(e, t, n)
          : (A(B, B.current & 1),
            (e = et(e, t, n)),
            e !== null ? e.sibling : null);
      A(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ka(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        A(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ba(e, t, n);
  }
  return et(e, t, n);
}
var Ya, $i, Xa, Za;
Ya = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
$i = function () {};
Xa = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Dt(We.current);
    var i = null;
    switch (n) {
      case "input":
        (l = si(e, l)), (r = si(e, r)), (i = []);
        break;
      case "select":
        (l = Q({}, l, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = di(e, l)), (r = di(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Jr);
    }
    pi(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Wn.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Wn.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && $("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Za = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Pn(e, t) {
  if (!H)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function xf(e, t, n) {
  var r = t.pendingProps;
  switch ((yo(t), t.tag)) {
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
      return re(t), null;
    case 1:
      return ve(t.type) && qr(), re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        mn(),
        V(ge),
        V(ie),
        jo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Er(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ie !== null && (Yi(Ie), (Ie = null)))),
        $i(e, t),
        re(t),
        null
      );
    case 5:
      No(t);
      var l = Dt(nr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Xa(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return re(t), null;
        }
        if (((e = Dt(We.current)), Er(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[He] = t), (r[er] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              $("cancel", r), $("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Rn.length; l++) $(Rn[l], r);
              break;
            case "source":
              $("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $("error", r), $("load", r);
              break;
            case "details":
              $("toggle", r);
              break;
            case "input":
              Jo(r, i), $("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                $("invalid", r);
              break;
            case "textarea":
              bo(r, i), $("invalid", r);
          }
          pi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Wn.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  $("scroll", r);
            }
          switch (n) {
            case "input":
              mr(r), qo(r, i, !0);
              break;
            case "textarea":
              mr(r), eu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Jr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Cs(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[He] = t),
            (e[er] = r),
            Ya(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = hi(n, r)), n)) {
              case "dialog":
                $("cancel", e), $("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                $("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Rn.length; l++) $(Rn[l], e);
                l = r;
                break;
              case "source":
                $("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                $("error", e), $("load", e), (l = r);
                break;
              case "details":
                $("toggle", e), (l = r);
                break;
              case "input":
                Jo(e, r), (l = si(e, r)), $("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Q({}, r, { value: void 0 })),
                  $("invalid", e);
                break;
              case "textarea":
                bo(e, r), (l = di(e, r)), $("invalid", e);
                break;
              default:
                l = r;
            }
            pi(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? Ns(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Es(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Qn(e, s)
                    : typeof s == "number" && Qn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Wn.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && $("scroll", e)
                      : s != null && no(e, i, s, o));
              }
            switch (n) {
              case "input":
                mr(e), qo(e, r, !1);
                break;
              case "textarea":
                mr(e), eu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ln(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      ln(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Jr);
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
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) Za(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = Dt(nr.current)), Dt(We.current), Er(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[He] = t),
            (i = r.nodeValue !== n) && ((e = Se), e !== null))
          )
            switch (e.tag) {
              case 3:
                Cr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Cr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[He] = t),
            (t.stateNode = r);
      }
      return re(t), null;
    case 13:
      if (
        (V(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && xe !== null && t.mode & 1 && !(t.flags & 128))
          pa(), pn(), (t.flags |= 98560), (i = !1);
        else if (((i = Er(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[He] = t;
          } else
            pn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          re(t), (i = !1);
        } else Ie !== null && (Yi(Ie), (Ie = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? Z === 0 && (Z = 3) : Ao())),
          t.updateQueue !== null && (t.flags |= 4),
          re(t),
          null);
    case 4:
      return (
        mn(), $i(e, t), e === null && qn(t.stateNode.containerInfo), re(t), null
      );
    case 10:
      return So(t.type._context), re(t), null;
    case 17:
      return ve(t.type) && qr(), re(t), null;
    case 19:
      if ((V(B), (i = t.memoizedState), i === null)) return re(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Pn(i, !1);
        else {
          if (Z !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = il(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Pn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return A(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            K() > vn &&
            ((t.flags |= 128), (r = !0), Pn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = il(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Pn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !H)
            )
              return re(t), null;
          } else
            2 * K() - i.renderingStartTime > vn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Pn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = K()),
          (t.sibling = null),
          (n = B.current),
          A(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (re(t), null);
    case 22:
    case 23:
      return (
        Uo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ke & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function Sf(e, t) {
  switch ((yo(t), t.tag)) {
    case 1:
      return (
        ve(t.type) && qr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        mn(),
        V(ge),
        V(ie),
        jo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return No(t), null;
    case 13:
      if ((V(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        pn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return V(B), null;
    case 4:
      return mn(), null;
    case 10:
      return So(t.type._context), null;
    case 22:
    case 23:
      return Uo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var jr = !1,
  le = !1,
  Cf = typeof WeakSet == "function" ? WeakSet : Set,
  C = null;
function nn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        G(e, t, r);
      }
    else n.current = null;
}
function Vi(e, t, n) {
  try {
    n();
  } catch (r) {
    G(e, t, r);
  }
}
var Bu = !1;
function Ef(e, t) {
  if (((Ei = Yr), (e = ea()), go(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            g = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var w;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (s = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (w = h.firstChild) !== null;

            )
              (p = h), (h = w);
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++c === l && (u = o),
                p === i && ++g === r && (s = o),
                (w = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (_i = { focusedElem: e, selectionRange: n }, Yr = !1, C = t; C !== null; )
    if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (C = e);
    else
      for (; C !== null; ) {
        t = C;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var x = k.memoizedProps,
                    U = k.memoizedState,
                    d = t.stateNode,
                    a = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Fe(t.type, x),
                      U
                    );
                  d.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          G(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (C = e);
          break;
        }
        C = t.return;
      }
  return (k = Bu), (Bu = !1), k;
}
function Vn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Vi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Sl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Hi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ja(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ja(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[He], delete t[er], delete t[Pi], delete t[of], delete t[uf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function qa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Wu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || qa(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Bi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Jr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bi(e, t, n), e = e.sibling; e !== null; ) Bi(e, t, n), (e = e.sibling);
}
function Wi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Wi(e, t, n), e = e.sibling; e !== null; ) Wi(e, t, n), (e = e.sibling);
}
var b = null,
  Me = !1;
function rt(e, t, n) {
  for (n = n.child; n !== null; ) ba(e, t, n), (n = n.sibling);
}
function ba(e, t, n) {
  if (Be && typeof Be.onCommitFiberUnmount == "function")
    try {
      Be.onCommitFiberUnmount(hl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      le || nn(n, t);
    case 6:
      var r = b,
        l = Me;
      (b = null),
        rt(e, t, n),
        (b = r),
        (Me = l),
        b !== null &&
          (Me
            ? ((e = b),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null &&
        (Me
          ? ((e = b),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ql(e.parentNode, n)
              : e.nodeType === 1 && Ql(e, n),
            Xn(e))
          : Ql(b, n.stateNode));
      break;
    case 4:
      (r = b),
        (l = Me),
        (b = n.stateNode.containerInfo),
        (Me = !0),
        rt(e, t, n),
        (b = r),
        (Me = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Vi(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      rt(e, t, n);
      break;
    case 1:
      if (
        !le &&
        (nn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          G(n, t, u);
        }
      rt(e, t, n);
      break;
    case 21:
      rt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), rt(e, t, n), (le = r))
        : rt(e, t, n);
      break;
    default:
      rt(e, t, n);
  }
}
function Qu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Cf()),
      t.forEach(function (r) {
        var l = Rf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Re(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (b = u.stateNode), (Me = !1);
              break e;
            case 3:
              (b = u.stateNode.containerInfo), (Me = !0);
              break e;
            case 4:
              (b = u.stateNode.containerInfo), (Me = !0);
              break e;
          }
          u = u.return;
        }
        if (b === null) throw Error(y(160));
        ba(i, o, l), (b = null), (Me = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        G(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ec(t, e), (t = t.sibling);
}
function ec(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Re(t, e), $e(e), r & 4)) {
        try {
          Vn(3, e, e.return), Sl(3, e);
        } catch (x) {
          G(e, e.return, x);
        }
        try {
          Vn(5, e, e.return);
        } catch (x) {
          G(e, e.return, x);
        }
      }
      break;
    case 1:
      Re(t, e), $e(e), r & 512 && n !== null && nn(n, n.return);
      break;
    case 5:
      if (
        (Re(t, e),
        $e(e),
        r & 512 && n !== null && nn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Qn(l, "");
        } catch (x) {
          G(e, e.return, x);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && xs(l, i),
              hi(u, o);
            var c = hi(u, i);
            for (o = 0; o < s.length; o += 2) {
              var g = s[o],
                h = s[o + 1];
              g === "style"
                ? Ns(l, h)
                : g === "dangerouslySetInnerHTML"
                ? Es(l, h)
                : g === "children"
                ? Qn(l, h)
                : no(l, g, h, c);
            }
            switch (u) {
              case "input":
                ai(l, i);
                break;
              case "textarea":
                Ss(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? ln(l, !!i.multiple, w, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ln(l, !!i.multiple, i.defaultValue, !0)
                      : ln(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[er] = i;
          } catch (x) {
            G(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Re(t, e), $e(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (x) {
          G(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Re(t, e), $e(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Xn(t.containerInfo);
        } catch (x) {
          G(e, e.return, x);
        }
      break;
    case 4:
      Re(t, e), $e(e);
      break;
    case 13:
      Re(t, e),
        $e(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Io = K())),
        r & 4 && Qu(e);
      break;
    case 22:
      if (
        ((g = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (c = le) || g), Re(t, e), (le = c)) : Re(t, e),
        $e(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !g && e.mode & 1)
        )
          for (C = e, g = e.child; g !== null; ) {
            for (h = C = g; C !== null; ) {
              switch (((p = C), (w = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vn(4, p, p.return);
                  break;
                case 1:
                  nn(p, p.return);
                  var k = p.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (k.props = t.memoizedProps),
                        (k.state = t.memoizedState),
                        k.componentWillUnmount();
                    } catch (x) {
                      G(r, n, x);
                    }
                  }
                  break;
                case 5:
                  nn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Ku(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = p), (C = w)) : Ku(h);
            }
            g = g.sibling;
          }
        e: for (g = null, h = e; ; ) {
          if (h.tag === 5) {
            if (g === null) {
              g = h;
              try {
                (l = h.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = _s("display", o)));
              } catch (x) {
                G(e, e.return, x);
              }
            }
          } else if (h.tag === 6) {
            if (g === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (x) {
                G(e, e.return, x);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            g === h && (g = null), (h = h.return);
          }
          g === h && (g = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Re(t, e), $e(e), r & 4 && Qu(e);
      break;
    case 21:
      break;
    default:
      Re(t, e), $e(e);
  }
}
function $e(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (qa(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Qn(l, ""), (r.flags &= -33));
          var i = Wu(e);
          Wi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Wu(e);
          Bi(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      G(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function _f(e, t, n) {
  (C = e), tc(e);
}
function tc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || jr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || le;
        u = jr;
        var c = le;
        if (((jr = o), (le = s) && !c))
          for (C = l; C !== null; )
            (o = C),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Yu(l)
                : s !== null
                ? ((s.return = o), (C = s))
                : Yu(l);
        for (; i !== null; ) (C = i), tc(i), (i = i.sibling);
        (C = l), (jr = u), (le = c);
      }
      Gu(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (C = i)) : Gu(e);
  }
}
function Gu(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || Sl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Fe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Tu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Tu(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                var c = t.alternate;
                if (c !== null) {
                  var g = c.memoizedState;
                  if (g !== null) {
                    var h = g.dehydrated;
                    h !== null && Xn(h);
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
              throw Error(y(163));
          }
        le || (t.flags & 512 && Hi(t));
      } catch (p) {
        G(t, t.return, p);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function Ku(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function Yu(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Sl(4, t);
          } catch (s) {
            G(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              G(t, l, s);
            }
          }
          var i = t.return;
          try {
            Hi(t);
          } catch (s) {
            G(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Hi(t);
          } catch (s) {
            G(t, o, s);
          }
      }
    } catch (s) {
      G(t, t.return, s);
    }
    if (t === e) {
      C = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (C = u);
      break;
    }
    C = t.return;
  }
}
var Nf = Math.ceil,
  sl = tt.ReactCurrentDispatcher,
  Fo = tt.ReactCurrentOwner,
  Te = tt.ReactCurrentBatchConfig,
  F = 0,
  q = null,
  Y = null,
  ee = 0,
  ke = 0,
  rn = Ct(0),
  Z = 0,
  or = null,
  Ut = 0,
  Cl = 0,
  Mo = 0,
  Hn = null,
  he = null,
  Io = 0,
  vn = 1 / 0,
  Ge = null,
  al = !1,
  Qi = null,
  vt = null,
  Pr = !1,
  dt = null,
  cl = 0,
  Bn = 0,
  Gi = null,
  Ar = -1,
  $r = 0;
function ae() {
  return F & 6 ? K() : Ar !== -1 ? Ar : (Ar = K());
}
function yt(e) {
  return e.mode & 1
    ? F & 2 && ee !== 0
      ? ee & -ee
      : af.transition !== null
      ? ($r === 0 && ($r = Us()), $r)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Qs(e.type))),
        e)
    : 1;
}
function Ue(e, t, n, r) {
  if (50 < Bn) throw ((Bn = 0), (Gi = null), Error(y(185)));
  sr(e, n, r),
    (!(F & 2) || e !== q) &&
      (e === q && (!(F & 2) && (Cl |= n), Z === 4 && at(e, ee)),
      ye(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((vn = K() + 500), wl && Et()));
}
function ye(e, t) {
  var n = e.callbackNode;
  sd(e, t);
  var r = Kr(e, e === q ? ee : 0);
  if (r === 0)
    n !== null && ru(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ru(n), t === 1))
      e.tag === 0 ? sf(Xu.bind(null, e)) : ca(Xu.bind(null, e)),
        rf(function () {
          !(F & 6) && Et();
        }),
        (n = null);
    else {
      switch (As(r)) {
        case 1:
          n = uo;
          break;
        case 4:
          n = Is;
          break;
        case 16:
          n = Gr;
          break;
        case 536870912:
          n = Os;
          break;
        default:
          n = Gr;
      }
      n = ac(n, nc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function nc(e, t) {
  if (((Ar = -1), ($r = 0), F & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (cn() && e.callbackNode !== n) return null;
  var r = Kr(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = dl(e, r);
  else {
    t = r;
    var l = F;
    F |= 2;
    var i = lc();
    (q !== e || ee !== t) && ((Ge = null), (vn = K() + 500), Rt(e, t));
    do
      try {
        Tf();
        break;
      } catch (u) {
        rc(e, u);
      }
    while (!0);
    xo(),
      (sl.current = i),
      (F = l),
      Y !== null ? (t = 0) : ((q = null), (ee = 0), (t = Z));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = wi(e)), l !== 0 && ((r = l), (t = Ki(e, l)))), t === 1)
    )
      throw ((n = or), Rt(e, 0), at(e, r), ye(e, K()), n);
    if (t === 6) at(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !jf(l) &&
          ((t = dl(e, r)),
          t === 2 && ((i = wi(e)), i !== 0 && ((r = i), (t = Ki(e, i)))),
          t === 1))
      )
        throw ((n = or), Rt(e, 0), at(e, r), ye(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          jt(e, he, Ge);
          break;
        case 3:
          if (
            (at(e, r), (r & 130023424) === r && ((t = Io + 500 - K()), 10 < t))
          ) {
            if (Kr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ae(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = ji(jt.bind(null, e, he, Ge), t);
            break;
          }
          jt(e, he, Ge);
          break;
        case 4:
          if ((at(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Oe(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Nf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ji(jt.bind(null, e, he, Ge), r);
            break;
          }
          jt(e, he, Ge);
          break;
        case 5:
          jt(e, he, Ge);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return ye(e, K()), e.callbackNode === n ? nc.bind(null, e) : null;
}
function Ki(e, t) {
  var n = Hn;
  return (
    e.current.memoizedState.isDehydrated && (Rt(e, t).flags |= 256),
    (e = dl(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && Yi(t)),
    e
  );
}
function Yi(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function jf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Ae(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function at(e, t) {
  for (
    t &= ~Mo,
      t &= ~Cl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Xu(e) {
  if (F & 6) throw Error(y(327));
  cn();
  var t = Kr(e, 0);
  if (!(t & 1)) return ye(e, K()), null;
  var n = dl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = wi(e);
    r !== 0 && ((t = r), (n = Ki(e, r)));
  }
  if (n === 1) throw ((n = or), Rt(e, 0), at(e, t), ye(e, K()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    jt(e, he, Ge),
    ye(e, K()),
    null
  );
}
function Oo(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((vn = K() + 500), wl && Et());
  }
}
function At(e) {
  dt !== null && dt.tag === 0 && !(F & 6) && cn();
  var t = F;
  F |= 1;
  var n = Te.transition,
    r = I;
  try {
    if (((Te.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (Te.transition = n), (F = t), !(F & 6) && Et();
  }
}
function Uo() {
  (ke = rn.current), V(rn);
}
function Rt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), nf(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((yo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && qr();
          break;
        case 3:
          mn(), V(ge), V(ie), jo();
          break;
        case 5:
          No(r);
          break;
        case 4:
          mn();
          break;
        case 13:
          V(B);
          break;
        case 19:
          V(B);
          break;
        case 10:
          So(r.type._context);
          break;
        case 22:
        case 23:
          Uo();
      }
      n = n.return;
    }
  if (
    ((q = e),
    (Y = e = wt(e.current, null)),
    (ee = ke = t),
    (Z = 0),
    (or = null),
    (Mo = Cl = Ut = 0),
    (he = Hn = null),
    Lt !== null)
  ) {
    for (t = 0; t < Lt.length; t++)
      if (((n = Lt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Lt = null;
  }
  return e;
}
function rc(e, t) {
  do {
    var n = Y;
    try {
      if ((xo(), (Ir.current = ul), ol)) {
        for (var r = W.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ol = !1;
      }
      if (
        ((Ot = 0),
        (J = X = W = null),
        ($n = !1),
        (rr = 0),
        (Fo.current = null),
        n === null || n.return === null)
      ) {
        (Z = 1), (or = t), (Y = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = ee),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            g = u,
            h = g.tag;
          if (!(g.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = g.alternate;
            p
              ? ((g.updateQueue = p.updateQueue),
                (g.memoizedState = p.memoizedState),
                (g.lanes = p.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var w = Iu(o);
          if (w !== null) {
            (w.flags &= -257),
              Ou(w, o, u, i, t),
              w.mode & 1 && Mu(i, c, t),
              (t = w),
              (s = c);
            var k = t.updateQueue;
            if (k === null) {
              var x = new Set();
              x.add(s), (t.updateQueue = x);
            } else k.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Mu(i, c, t), Ao();
              break e;
            }
            s = Error(y(426));
          }
        } else if (H && u.mode & 1) {
          var U = Iu(o);
          if (U !== null) {
            !(U.flags & 65536) && (U.flags |= 256),
              Ou(U, o, u, i, t),
              wo(gn(s, u));
            break e;
          }
        }
        (i = s = gn(s, u)),
          Z !== 4 && (Z = 2),
          Hn === null ? (Hn = [i]) : Hn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var d = $a(i, s, t);
              Pu(i, d);
              break e;
            case 1:
              u = s;
              var a = i.type,
                f = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (vt === null || !vt.has(f))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = Va(i, u, t);
                Pu(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      oc(n);
    } catch (E) {
      (t = E), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function lc() {
  var e = sl.current;
  return (sl.current = ul), e === null ? ul : e;
}
function Ao() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4),
    q === null || (!(Ut & 268435455) && !(Cl & 268435455)) || at(q, ee);
}
function dl(e, t) {
  var n = F;
  F |= 2;
  var r = lc();
  (q !== e || ee !== t) && ((Ge = null), Rt(e, t));
  do
    try {
      Pf();
      break;
    } catch (l) {
      rc(e, l);
    }
  while (!0);
  if ((xo(), (F = n), (sl.current = r), Y !== null)) throw Error(y(261));
  return (q = null), (ee = 0), Z;
}
function Pf() {
  for (; Y !== null; ) ic(Y);
}
function Tf() {
  for (; Y !== null && !bc(); ) ic(Y);
}
function ic(e) {
  var t = sc(e.alternate, e, ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? oc(e) : (Y = t),
    (Fo.current = null);
}
function oc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Sf(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Z = 6), (Y = null);
        return;
      }
    } else if (((n = xf(n, t, ke)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function jt(e, t, n) {
  var r = I,
    l = Te.transition;
  try {
    (Te.transition = null), (I = 1), zf(e, t, n, r);
  } finally {
    (Te.transition = l), (I = r);
  }
  return null;
}
function zf(e, t, n, r) {
  do cn();
  while (dt !== null);
  if (F & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (ad(e, i),
    e === q && ((Y = q = null), (ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Pr ||
      ((Pr = !0),
      ac(Gr, function () {
        return cn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Te.transition), (Te.transition = null);
    var o = I;
    I = 1;
    var u = F;
    (F |= 4),
      (Fo.current = null),
      Ef(e, n),
      ec(n, e),
      Xd(_i),
      (Yr = !!Ei),
      (_i = Ei = null),
      (e.current = n),
      _f(n),
      ed(),
      (F = u),
      (I = o),
      (Te.transition = i);
  } else e.current = n;
  if (
    (Pr && ((Pr = !1), (dt = e), (cl = l)),
    (i = e.pendingLanes),
    i === 0 && (vt = null),
    rd(n.stateNode),
    ye(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (al) throw ((al = !1), (e = Qi), (Qi = null), e);
  return (
    cl & 1 && e.tag !== 0 && cn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Gi ? Bn++ : ((Bn = 0), (Gi = e))) : (Bn = 0),
    Et(),
    null
  );
}
function cn() {
  if (dt !== null) {
    var e = As(cl),
      t = Te.transition,
      n = I;
    try {
      if (((Te.transition = null), (I = 16 > e ? 16 : e), dt === null))
        var r = !1;
      else {
        if (((e = dt), (dt = null), (cl = 0), F & 6)) throw Error(y(331));
        var l = F;
        for (F |= 4, C = e.current; C !== null; ) {
          var i = C,
            o = i.child;
          if (C.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (C = c; C !== null; ) {
                  var g = C;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vn(8, g, i);
                  }
                  var h = g.child;
                  if (h !== null) (h.return = g), (C = h);
                  else
                    for (; C !== null; ) {
                      g = C;
                      var p = g.sibling,
                        w = g.return;
                      if ((Ja(g), g === c)) {
                        C = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = w), (C = p);
                        break;
                      }
                      C = w;
                    }
                }
              }
              var k = i.alternate;
              if (k !== null) {
                var x = k.child;
                if (x !== null) {
                  k.child = null;
                  do {
                    var U = x.sibling;
                    (x.sibling = null), (x = U);
                  } while (x !== null);
                }
              }
              C = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (C = o);
          else
            e: for (; C !== null; ) {
              if (((i = C), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vn(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (C = d);
                break e;
              }
              C = i.return;
            }
        }
        var a = e.current;
        for (C = a; C !== null; ) {
          o = C;
          var f = o.child;
          if (o.subtreeFlags & 2064 && f !== null) (f.return = o), (C = f);
          else
            e: for (o = a; C !== null; ) {
              if (((u = C), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Sl(9, u);
                  }
                } catch (E) {
                  G(u, u.return, E);
                }
              if (u === o) {
                C = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (C = v);
                break e;
              }
              C = u.return;
            }
        }
        if (
          ((F = l), Et(), Be && typeof Be.onPostCommitFiberRoot == "function")
        )
          try {
            Be.onPostCommitFiberRoot(hl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = n), (Te.transition = t);
    }
  }
  return !1;
}
function Zu(e, t, n) {
  (t = gn(n, t)),
    (t = $a(e, t, 1)),
    (e = gt(e, t, 1)),
    (t = ae()),
    e !== null && (sr(e, 1, t), ye(e, t));
}
function G(e, t, n) {
  if (e.tag === 3) Zu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Zu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (vt === null || !vt.has(r)))
        ) {
          (e = gn(n, e)),
            (e = Va(t, e, 1)),
            (t = gt(t, e, 1)),
            (e = ae()),
            t !== null && (sr(t, 1, e), ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Lf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (ee & n) === n &&
      (Z === 4 || (Z === 3 && (ee & 130023424) === ee && 500 > K() - Io)
        ? Rt(e, 0)
        : (Mo |= n)),
    ye(e, t);
}
function uc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = yr), (yr <<= 1), !(yr & 130023424) && (yr = 4194304))
      : (t = 1));
  var n = ae();
  (e = be(e, t)), e !== null && (sr(e, t, n), ye(e, n));
}
function Df(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), uc(e, n);
}
function Rf(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), uc(e, n);
}
var sc;
sc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ge.current) me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (me = !1), kf(e, t, n);
      me = !!(e.flags & 131072);
    }
  else (me = !1), H && t.flags & 1048576 && da(t, tl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ur(e, t), (e = t.pendingProps);
      var l = fn(t, ie.current);
      an(t, n), (l = To(null, t, r, e, l, n));
      var i = zo();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ve(r) ? ((i = !0), br(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Eo(t),
            (l.updater = kl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Fi(t, r, e, n),
            (t = Oi(null, t, r, !0, i, n)))
          : ((t.tag = 0), H && i && vo(t), se(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ur(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Mf(r)),
          (e = Fe(r, e)),
          l)
        ) {
          case 0:
            t = Ii(null, t, r, e, n);
            break e;
          case 1:
            t = $u(null, t, r, e, n);
            break e;
          case 11:
            t = Uu(null, t, r, e, n);
            break e;
          case 14:
            t = Au(null, t, r, Fe(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        Ii(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        $u(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Qa(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          ma(e, t),
          ll(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = gn(Error(y(423)), t)), (t = Vu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = gn(Error(y(424)), t)), (t = Vu(e, t, r, n, l));
            break e;
          } else
            for (
              xe = mt(t.stateNode.containerInfo.firstChild),
                Se = t,
                H = !0,
                Ie = null,
                n = wa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((pn(), r === l)) {
            t = et(e, t, n);
            break e;
          }
          se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ka(t),
        e === null && Li(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Ni(r, l) ? (o = null) : i !== null && Ni(r, i) && (t.flags |= 32),
        Wa(e, t),
        se(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Li(t), null;
    case 13:
      return Ga(e, t, n);
    case 4:
      return (
        _o(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hn(t, null, r, n)) : se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        Uu(e, t, r, l, n)
      );
    case 7:
      return se(e, t, t.pendingProps, n), t.child;
    case 8:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          A(nl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Ae(i.value, o)) {
            if (i.children === l.children && !ge.current) {
              t = et(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Ze(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var g = c.pending;
                        g === null
                          ? (s.next = s)
                          : ((s.next = g.next), (g.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Di(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Di(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        se(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        an(t, n),
        (l = ze(l)),
        (r = r(l)),
        (t.flags |= 1),
        se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Fe(r, t.pendingProps)),
        (l = Fe(r.type, l)),
        Au(e, t, r, l, n)
      );
    case 15:
      return Ha(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        Ur(e, t),
        (t.tag = 1),
        ve(r) ? ((e = !0), br(t)) : (e = !1),
        an(t, n),
        va(t, r, l),
        Fi(t, r, l, n),
        Oi(null, t, r, !0, e, n)
      );
    case 19:
      return Ka(e, t, n);
    case 22:
      return Ba(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function ac(e, t) {
  return Ms(e, t);
}
function Ff(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Pe(e, t, n, r) {
  return new Ff(e, t, n, r);
}
function $o(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Mf(e) {
  if (typeof e == "function") return $o(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === lo)) return 11;
    if (e === io) return 14;
  }
  return 2;
}
function wt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Pe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Vr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) $o(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Kt:
        return Ft(n.children, l, i, t);
      case ro:
        (o = 8), (l |= 8);
        break;
      case li:
        return (
          (e = Pe(12, n, t, l | 2)), (e.elementType = li), (e.lanes = i), e
        );
      case ii:
        return (e = Pe(13, n, t, l)), (e.elementType = ii), (e.lanes = i), e;
      case oi:
        return (e = Pe(19, n, t, l)), (e.elementType = oi), (e.lanes = i), e;
      case ys:
        return El(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case gs:
              o = 10;
              break e;
            case vs:
              o = 9;
              break e;
            case lo:
              o = 11;
              break e;
            case io:
              o = 14;
              break e;
            case ot:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Pe(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Ft(e, t, n, r) {
  return (e = Pe(7, e, r, t)), (e.lanes = n), e;
}
function El(e, t, n, r) {
  return (
    (e = Pe(22, e, r, t)),
    (e.elementType = ys),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function bl(e, t, n) {
  return (e = Pe(6, e, null, t)), (e.lanes = n), e;
}
function ei(e, t, n) {
  return (
    (t = Pe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function If(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Fl(0)),
    (this.expirationTimes = Fl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Fl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Vo(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new If(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Pe(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Eo(i),
    e
  );
}
function Of(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Gt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function cc(e) {
  if (!e) return xt;
  e = e._reactInternals;
  e: {
    if (Vt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ve(n)) return aa(e, n, t);
  }
  return t;
}
function dc(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Vo(n, r, !0, e, l, i, o, u, s)),
    (e.context = cc(null)),
    (n = e.current),
    (r = ae()),
    (l = yt(n)),
    (i = Ze(r, l)),
    (i.callback = t ?? null),
    gt(n, i, l),
    (e.current.lanes = l),
    sr(e, l, r),
    ye(e, r),
    e
  );
}
function _l(e, t, n, r) {
  var l = t.current,
    i = ae(),
    o = yt(l);
  return (
    (n = cc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ze(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = gt(l, t, o)),
    e !== null && (Ue(e, l, o, i), Mr(e, l, o)),
    o
  );
}
function fl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ju(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ho(e, t) {
  Ju(e, t), (e = e.alternate) && Ju(e, t);
}
function Uf() {
  return null;
}
var fc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Bo(e) {
  this._internalRoot = e;
}
Nl.prototype.render = Bo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  _l(e, t, null, null);
};
Nl.prototype.unmount = Bo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    At(function () {
      _l(null, e, null, null);
    }),
      (t[qe] = null);
  }
};
function Nl(e) {
  this._internalRoot = e;
}
Nl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Hs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < st.length && t !== 0 && t < st[n].priority; n++);
    st.splice(n, 0, e), n === 0 && Ws(e);
  }
};
function Wo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function jl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function qu() {}
function Af(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = fl(o);
        i.call(c);
      };
    }
    var o = dc(t, r, e, 0, null, !1, !1, "", qu);
    return (
      (e._reactRootContainer = o),
      (e[qe] = o.current),
      qn(e.nodeType === 8 ? e.parentNode : e),
      At(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = fl(s);
      u.call(c);
    };
  }
  var s = Vo(e, 0, !1, null, null, !1, !1, "", qu);
  return (
    (e._reactRootContainer = s),
    (e[qe] = s.current),
    qn(e.nodeType === 8 ? e.parentNode : e),
    At(function () {
      _l(t, s, n, r);
    }),
    s
  );
}
function Pl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = fl(o);
        u.call(s);
      };
    }
    _l(t, o, e, l);
  } else o = Af(n, t, e, l, r);
  return fl(o);
}
$s = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Dn(t.pendingLanes);
        n !== 0 &&
          (so(t, n | 1), ye(t, K()), !(F & 6) && ((vn = K() + 500), Et()));
      }
      break;
    case 13:
      At(function () {
        var r = be(e, 1);
        if (r !== null) {
          var l = ae();
          Ue(r, e, 1, l);
        }
      }),
        Ho(e, 1);
  }
};
ao = function (e) {
  if (e.tag === 13) {
    var t = be(e, 134217728);
    if (t !== null) {
      var n = ae();
      Ue(t, e, 134217728, n);
    }
    Ho(e, 134217728);
  }
};
Vs = function (e) {
  if (e.tag === 13) {
    var t = yt(e),
      n = be(e, t);
    if (n !== null) {
      var r = ae();
      Ue(n, e, t, r);
    }
    Ho(e, t);
  }
};
Hs = function () {
  return I;
};
Bs = function (e, t) {
  var n = I;
  try {
    return (I = e), t();
  } finally {
    I = n;
  }
};
gi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ai(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = yl(r);
            if (!l) throw Error(y(90));
            ks(r), ai(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ss(e, n);
      break;
    case "select":
      (t = n.value), t != null && ln(e, !!n.multiple, t, !1);
  }
};
Ts = Oo;
zs = At;
var $f = { usingClientEntryPoint: !1, Events: [cr, Jt, yl, js, Ps, Oo] },
  Tn = {
    findFiberByHostInstance: zt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Vf = {
    bundleType: Tn.bundleType,
    version: Tn.version,
    rendererPackageName: Tn.rendererPackageName,
    rendererConfig: Tn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: tt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Rs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Tn.findFiberByHostInstance || Uf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Tr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Tr.isDisabled && Tr.supportsFiber)
    try {
      (hl = Tr.inject(Vf)), (Be = Tr);
    } catch {}
}
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $f;
Ee.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Wo(t)) throw Error(y(200));
  return Of(e, t, null, n);
};
Ee.createRoot = function (e, t) {
  if (!Wo(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = fc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Vo(e, 1, !1, null, null, n, !1, r, l)),
    (e[qe] = t.current),
    qn(e.nodeType === 8 ? e.parentNode : e),
    new Bo(t)
  );
};
Ee.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = Rs(t)), (e = e === null ? null : e.stateNode), e;
};
Ee.flushSync = function (e) {
  return At(e);
};
Ee.hydrate = function (e, t, n) {
  if (!jl(t)) throw Error(y(200));
  return Pl(null, e, t, !0, n);
};
Ee.hydrateRoot = function (e, t, n) {
  if (!Wo(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = fc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = dc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[qe] = t.current),
    qn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Nl(t);
};
Ee.render = function (e, t, n) {
  if (!jl(t)) throw Error(y(200));
  return Pl(null, e, t, !1, n);
};
Ee.unmountComponentAtNode = function (e) {
  if (!jl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (At(function () {
        Pl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[qe] = null);
        });
      }),
      !0)
    : !1;
};
Ee.unstable_batchedUpdates = Oo;
Ee.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!jl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return Pl(e, t, n, !1, r);
};
Ee.version = "18.2.0-next-9e3b772b8-20220608";
function pc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pc);
    } catch (e) {
      console.error(e);
    }
}
pc(), (ds.exports = Ee);
var Hf = ds.exports,
  bu = Hf;
(ni.createRoot = bu.createRoot), (ni.hydrateRoot = bu.hydrateRoot);
let it = null;
if (typeof window < "u" && window.fp) {
  const {
    Finger: e,
    FingerCurl: t,
    FingerDirection: n,
    GestureDescription: r,
  } = window.fp;
  (it = new r("middle_finger_up")),
    it.addCurl(e.Thumb, t.FullCurl, 0.75),
    it.addCurl(e.Index, t.FullCurl, 0.75),
    it.addCurl(e.Middle, t.NoCurl, 0.75),
    it.addDirection(e.Middle, n.VerticalUp, 0.75),
    it.addCurl(e.Ring, t.FullCurl, 0.75),
    it.addCurl(e.Pinky, t.FullCurl, 0.75);
} else
  console.error(
    "mmid finger error: fingerpose is not available on window or script is running on server."
  );
let pe = null;
if (typeof window < "u" && window.fp) {
  const {
    Finger: e,
    FingerCurl: t,
    FingerDirection: n,
    GestureDescription: r,
  } = window.fp;
  (pe = new r("vSign")),
    pe.addCurl(e.Thumb, t.HalfCurl, 0.5),
    pe.addCurl(e.Thumb, t.NoCurl, 0.5),
    pe.addCurl(e.Index, t.NoCurl, 0.75),
    pe.addDirection(e.Index, n.VerticalUp, 0.75),
    pe.addDirection(e.Index, n.DiagonalUpLeft, 0.75),
    pe.addDirection(e.Index, n.DiagonalUpRight, 0.75),
    pe.addCurl(e.Middle, t.NoCurl, 0.75),
    pe.addDirection(e.Middle, n.VerticalUp, 0.75),
    pe.addDirection(e.Middle, n.DiagonalUpLeft, 0.75),
    pe.addDirection(e.Middle, n.DiagonalUpRight, 0.75),
    pe.addCurl(e.Ring, t.FullCurl, 0.75),
    pe.addCurl(e.Pinky, t.FullCurl, 0.75);
}
let Pt = null;
if (typeof window < "u" && window.fp) {
  const {
    Finger: e,
    FingerCurl: t,
    FingerDirection: n,
    GestureDescription: r,
  } = window.fp;
  (Pt = new r("thumbs_up")),
    Pt.addCurl(e.Thumb, t.NoCurl, 0.75),
    Pt.addDirection(e.Thumb, n.VerticalUp, 0.75),
    Pt.addDirection(e.Thumb, n.HorizontalLeft, 0.75),
    Pt.addDirection(e.Thumb, n.HorizontalRight, 0.75);
  for (let l of [e.Index, e.Middle, e.Ring, e.Pinky])
    Pt.addCurl(l, t.FullCurl, 1);
}
let Tt = null;
if (typeof window < "u" && window.fp) {
  const {
    Finger: e,
    FingerCurl: t,
    FingerDirection: n,
    GestureDescription: r,
  } = window.fp;
  (Tt = new r("thumbs_down")),
    Tt.addCurl(e.Thumb, t.NoCurl, 0.75),
    Tt.addDirection(e.Thumb, n.VerticalDown, 0.75),
    Tt.addDirection(e.Thumb, n.DiagonalDownLeft, 0.75),
    Tt.addDirection(e.Thumb, n.DiagonalDownRight, 0.75);
  for (let l of [e.Index, e.Middle, e.Ring, e.Pinky])
    Tt.addCurl(l, t.FullCurl, 1);
}
let Hr = null;
if (typeof window < "u" && window.fp) {
  const { Finger: e, FingerCurl: t, GestureDescription: n } = window.fp;
  (Hr = new n("closed_fist")), Hr.addCurl(e.Thumb, t.FullCurl, 1);
  for (let r of [e.Index, e.Middle, e.Ring, e.Pinky])
    Hr.addCurl(r, t.FullCurl, 1);
}
let Xi = null;
if (typeof window < "u" && window.fp) {
  const { Finger: e, FingerCurl: t, GestureDescription: n } = window.fp;
  Xi = new n("closed_fist_no_fingers");
  for (let r of [e.Thumb, e.Index, e.Middle, e.Ring, e.Pinky])
    Xi.addCurl(r, t.FullCurl, 1);
}
let Qt = null;
if (typeof window < "u" && window.fp) {
  const {
    Finger: e,
    FingerCurl: t,
    FingerDirection: n,
    GestureDescription: r,
  } = window.fp;
  Qt = new r("moutza");
  for (let l of [e.Thumb, e.Index, e.Middle, e.Ring, e.Pinky])
    Qt.addCurl(l, t.NoCurl, 1);
  for (let l of [e.Index, e.Middle, e.Ring, e.Pinky])
    Qt.addDirection(l, n.VerticalUp, 1);
  Qt.addDirection(e.Thumb, n.HorizontalLeft, 1),
    Qt.addDirection(e.Thumb, n.HorizontalRight, 1);
}
let Fn = null;
if (typeof window < "u" && window.fp) {
  const {
    Finger: e,
    FingerCurl: t,
    FingerDirection: n,
    GestureDescription: r,
  } = window.fp;
  Fn = new r("middle_finger_down");
  for (let l of [e.Thumb, e.Index, e.Ring, e.Pinky])
    Fn.addCurl(l, t.NoCurl, 1), Fn.addDirection(l, n.VerticalUp, 1);
  Fn.addCurl(e.Middle, t.FullCurl, 1);
}
const Bf = ({ toggleFaq: e }) => {
    const [t, n] = M.useState({ text: "Clipboard", icon: "content_copy" }),
      r = () => {
        navigator.clipboard
          .writeText("Check out this great site! https://rude-capt.vercel.app")
          .then(() => n({ text: "Copied", icon: "check_circle" }))
          .catch((u) => console.error("Failed to copy text to clipboard", u));
      };
    return m.jsxs("div", {
      className:
        "absolute top-0 left-0 right-0 bottom-0 bg-white z-[1000] flex justify-center p-8 ",
      children: [
        m.jsx("button", {
          onClick: e,
          className: "fixed top-5 right-5",
          children: m.jsx("span", {
            className:
              "material-icons text-red-500 text-2xl md:text-3xl hover:text-red-700 hover:animate-pulse",
            children: "cancel",
          }),
        }),
        m.jsxs("article", {
          className: "prose",
          children: [
            m.jsx("h2", {
              className: "text-blue-500",
              children: "rudeCAPTCHA",
            }),
            m.jsx("h2", { children: "How to use it?" }),
            m.jsx("p", {
              children: "1. Make sure your webcam/ front facing camera is on",
            }),
            m.jsx("p", {
              children:
                "2. Copy the obscene hand gesture in the top right in front of the camera",
            }),
            m.jsx("p", {
              children:
                "3. Sometimes the AI can't detect it straight away so move your hand a bit.",
            }),
            m.jsx("p", {
              children: "4. You will be asked to perform a new gesture",
            }),
            m.jsx("h2", { children: "FAQ" }),
            m.jsx("h4", { children: "Why did you make this?" }),
            m.jsx("p", {
              children:
                "When you complete a CAPTCHA you are performing unpaid labor for a globalized megacorp training an AI that will replace you.",
            }),
            m.jsx("p", { children: "AI can defeat traditional CAPTCHA." }),
            m.jsx("p", { children: "What it can't do is be offensive." }),
            m.jsx("p", { children: "It doesn't work" }),
            m.jsx("p", {
              children:
                "Sometimes it takes a while for the AI model to load. Mobile problems are often solved by turning off low power mode",
            }),
            m.jsx("p", {
              children:
                "it's interesting to break down language barriers and learn how to insult people from all over the world",
            }),
            m.jsx("h4", {
              children: "Do you really think this will replace Captchas?",
            }),
            m.jsx("p", { children: "No" }),
            m.jsx("h4", { children: "How does this work?" }),
            m.jsx("p", {
              children:
                "It uses the Tensorflow.js and the handpose and fingerpose libraries to detect which handgesture you are making. Many thanks to the developers of those libraries.",
            }),
            m.jsx("h2", { children: "Share" }),
            m.jsx("a", {
              href: "https://www.facebook.com/sharer/sharer.php?u=https://rude-capt.vercel.app",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "inline-block px-6 py-2 m-2 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded no-underline hover:underline",
              children: "Share on Facebook",
            }),
            m.jsxs("a", {
              href: "https://twitter.com/intent/tweet?url=https://rude-capt.vercel.app&text=Rude%20captcha%20uses%20AI%20to%20check%20if%20you're%20human",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "inline-block px-6 py-2 m-2 text-white bg-black hover:bg-gray-600 font-medium rounded no-underline hover:underline",
              children: [
                "Share on ",
                m.jsx("span", {
                  className: "font-bold font-serif",
                  children: "X",
                }),
              ],
            }),
            m.jsxs("button", {
              className:
                "inline-block px-6 py-2 m-2 text-white bg-red-500 hover:bg-red-600 font-medium rounded no-underline hover:underline",
              onClick: r,
              children: [
                m.jsx("span", {
                  className: "material-icons text-sm mr-2",
                  children: t.icon,
                }),
                t.text,
              ],
            }),
            m.jsx("h3", { children: "How to share on TikTok/Reels" }),
            m.jsx("p", {
              children: "Please take a screen recording and then share it",
            }),
            m.jsx("h4", { children: "on iOS:" }),
            m.jsxs("p", {
              children: [
                "Go to",
                " ",
                m.jsx("span", {
                  className: "font-semibold",
                  children: "Settings > Control Centre",
                }),
                " ",
                "tap the Add button next to Screen Recording. Open Control Centre on your iPhone, then wait for the three-second countdown. Exit Control Centre to record your screen.",
              ],
            }),
            m.jsx("h2", { children: "Contact" }),
            m.jsx("p", {
              children:
                "Got a question or comment? Contact me via the widget in the bottom right",
            }),
            m.jsx("div", {
              className: " flex items-center justify-center",
              children: m.jsxs("button", {
                onClick: e,
                className:
                  " flex items-center justify-center mb-8 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out",
                children: [
                  m.jsx("span", {
                    className: "text-white material-icons mr-2 text-xl",
                    children: "cancel",
                  }),
                  "CLOSE FAQ",
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  ti = ({ showTick: e, onClick: t, icon: n }) =>
    m.jsx("button", {
      disabled: e,
      className: "text-white font-bold py-2 px-2 rounded hover:bg-blue-50",
      onClick: t,
      children: m.jsx("span", {
        className: `material-icons  text-2xl  ${
          e ? "text-white" : "text-gray-500 hover:bg-blue-50"
        }`,
        children: n,
      }),
    }),
  Wf = ({ toggleModal: e, toggleDetection: t, setShowModal: n }) => {
    const r = () => {
        console.log("clickje"), t(), n(!1);
      },
      [l, i] = M.useState(!1),
      [o, u] = M.useState({ text: "Clipboard", icon: "content_copy" }),
      s = () => {
        navigator.clipboard
          .writeText("Check out this great site! https://rude-capt.vercel.app")
          .then(() => u({ text: "Copied", icon: "check_circle" }))
          .catch((k) => console.error("Failed to copy text to clipboard", k));
      },
      c = () => {
        const p = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          "https://rude-capt.vercel.app"
        )}`;
        window.open(p, "_blank");
      },
      g = () => {
        const h = "https://rude-capt.vercel.app",
          p = encodeURIComponent("Check out this great site!"),
          w = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            h
          )}&text=${p}&via=YourTwitterHandle&hashtags=ExampleHashTag`;
        window.open(w, "_blank");
      };
    return m.jsx("div", {
      className:
        "fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-8",
      onClick: r,
      children: m.jsxs("div", {
        className: "bg-white p-5 rounded-lg shadow-lg relative",
        onClick: (h) => h.stopPropagation(),
        children: [
          m.jsx("button", {
            onClick: r,
            className:
              "absolute top-2 right-2 text-red-500 hover:text-red-600 hover:bg-red-100 rounded-full flex items-center justify-center",
            children: m.jsx("span", {
              className: "material-icons ",
              children: "close",
            }),
          }),
          !l &&
            m.jsxs("div", {
              className: "prose max-w-md",
              children: [
                m.jsx("h2", { children: "Share" }),
                m.jsx("p", {
                  children: "Please share with your friends and followers",
                }),
              ],
            }),
          l
            ? m.jsxs("div", {
                className: "prose pt-4 max-w-md",
                children: [
                  m.jsx("h3", { children: "Share on TikTok/Reels" }),
                  m.jsx("p", {
                    children: "Please take a screen recording and share it",
                  }),
                  m.jsx("h4", { children: "on iOS:" }),
                  m.jsxs("p", {
                    children: [
                      "Go to",
                      " ",
                      m.jsx("span", {
                        className: "font-semibold",
                        children: "Settings > Control Centre",
                      }),
                      " ",
                      "tap the Add button next to Screen Recording. Open Control Centre on your iPhone, then wait for the three-second countdown. Exit Control Centre to record your screen.",
                    ],
                  }),
                  m.jsxs("button", {
                    className:
                      "w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center",
                    onClick: () => i(!1),
                    children: [
                      m.jsx("span", {
                        class: "material-icons text-white text-sm",
                        children: m.jsx("span", {
                          class: "material-symbols-outlined",
                          children: "arrow_back",
                        }),
                      }),
                      " ",
                      "Back to Share",
                    ],
                  }),
                ],
              })
            : m.jsxs("div", {
                className:
                  "flex flex-col items-center justify-center space-y-2 mt-4 w-full px-4",
                children: [
                  m.jsx("button", {
                    className:
                      "w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out",
                    onClick: c,
                    children: "Facebook",
                  }),
                  m.jsx("button", {
                    className:
                      "w-full py-2 bg-black text-white rounded hover:bg-gray-700 transition duration-300 ease-in-out",
                    onClick: g,
                    children: "Share on X",
                  }),
                  m.jsx("button", {
                    className:
                      "w-full py-2 bg-black text-white rounded hover:bg-gray-700 transition duration-300 ease-in-out flex items-center justify-center",
                    onClick: () => i(!0),
                    children: "Share to TikTok",
                  }),
                  m.jsxs("button", {
                    className:
                      "w-full py-2 bg-red-500 text-white rounded hover:bg-pink-700 transition duration-300 ease-in-out flex items-center justify-center",
                    onClick: s,
                    children: [
                      m.jsx("span", {
                        className: "material-icons text-sm mr-2",
                        children: o.icon,
                      }),
                      o.text,
                    ],
                  }),
                ],
              }),
        ],
      }),
    });
  },
  lt = [
    {
      description: "Middle Finger",
      url: "/rc/midfingercar.jpg",
      GestureDescription: "middle_finger_up",
      blurb:
        "Copy the gesture pictured top right. Hint:Make the 🖕 gesture to the webcam. n.b if unresponsive the AI model may be loading",
    },
    {
      description: "V Sign",
      url: "/rc/greekVSign.jpg",
      GestureDescription: "vSign",
      blurb:
        "The obscene V sign, fingers up with palm inward, stems from medieval archers as defiance, now a rude gesture in the UK.",
    },
    {
      description: "V Sign",
      url: "/rc/rikVSign.jpg",
      GestureDescription: "vSign",
      blurb:
        "The obscene V sign, fingers up with palm inward, stems from medieval archers as defiance, now a rude gesture in the UK.",
    },
    {
      description: "V Sign",
      url: "/vSignSanta.jpg",
      GestureDescription: "vSign",
      blurb:
        "The obscene V sign, fingers up with palm inward, stems from medieval archers as defiance, now a rude gesture in the UK.",
    },
    {
      description: "Wanker",
      url: "/rc/markWanker.gif",
      GestureDescription: "closed_fist",
      blurb:
        'The "wanker" gesture, involving a fist-and-forearm motion, originates from British slang, signifying masturbation and used to mock or insult someone.',
    },
    {
      description: "Wanker",
      url: "/rc/jayWanker.gif",
      GestureDescription: "closed_fist",
      blurb:
        'The "wanker" gesture, involving a fist-and-forearm motion, originates from British slang, signifying masturbation and used to mock or insult someone.',
    },
    {
      description: "Wanker",
      url: "/wankerGif.gif",
      GestureDescription: "closed_fist",
      blurb:
        'The "wanker" gesture, involving a fist-and-forearm motion, originates from British slang, signifying masturbation and used to mock or insult someone.',
    },
    {
      description: "V Sign",
      url: "/rc/vSign.png",
      GestureDescription: "vSign",
      blurb:
        "The obscene V sign, fingers up with palm inward, stems from medieval archers as defiance, now a rude gesture in the UK.",
    },
    {
      description: "Thumbs Down",
      url: "/rc/thumbsDown.png",
      GestureDescription: "thumbs_down",
      blurb:
        "The thumbs-down gesture, signifying disapproval or rejection, traces back to ancient Rome's gladiatorial combats, widely recognized across cultures today.",
    },
    {
      description: "Middle finger down",
      url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Fonkos1.jpg",
      GestureDescription: "middle_finger_down",
      blurb:
        "In some Arab countries, e.g Egypt, the middle finger is lowered towards the palm and all other fingers are kept straight.",
    },
    {
      description: "Thumbs Up",
      url: "/rc/thumbsUp.png",
      GestureDescription: "thumbs_up",
      blurb:
        "Traditionally positive, the thumbs-up gesture can be obscene in certain cultures like Iran and Greece, symbolizing a disrespectful insult.",
    },
    {
      description: "Moutza",
      url: "/rc/moutza.jpg",
      GestureDescription: "moutza",
      blurb:
        "The Moutza, spreading open the fingers on one hand, hails from ancient Greece, signifying insult, commonly used in the Balkans.",
    },
    {
      description: "Wanker",
      url: "https://media.istockphoto.com/id/182912888/photo/obscene-anti-social-behaviour.jpg?s=612x612&w=is&k=20&c=esk7pC1fVO4eKPakEatwYi-0wi45cj_mEGPMQ3szERM=",
      GestureDescription: "closed_fist",
      blurb:
        'The "wanker" gesture, involving a fist-and-forearm motion, originates from British slang, signifying masturbation and used to mock or insult someone.',
    },
    {
      description: "Fig",
      url: "/rc/figCartoon.jpg",
      GestureDescription: "closed_fist",
      blurb:
        "Originating from Roman times, the obscene fig gesture, thumb between fingers, signifies contempt, mainly used in Turkey and Russia.",
    },
    {
      description: "Fig",
      url: "/figOldLady.jpg",
      GestureDescription: "closed_fist",
      blurb:
        "Originating from Roman times, the obscene fig gesture, thumb between fingers, signifies contempt, mainly used in Turkey and Russia.",
    },
    {
      description: "Bras d'honneur",
      url: "/rc/french.jpg",
      GestureDescription: "closed_fist",
      blurb:
        "The Bras d'honneur or 'the Italian salute', originated in France, it's an insult akin to up yours with diverse cultural meanings.",
    },
    {
      description: "Fig",
      url: "/figOldMan.jpg",
      GestureDescription: "closed_fist",
      blurb:
        "Originating from Roman times, the obscene fig gesture, thumb between fingers, signifies contempt, mainly used in Turkey and Russia.",
    },
    {
      description: "Middle Finger",
      url: "/midfinger.jpg",
      GestureDescription: "middle_finger_up",
      blurb:
        "The middle finger gesture, dating back to ancient Greece, symbolizes insult or anger, universally recognized as a sign of disrespect.",
    },
    {
      description: "Fig",
      url: "/thumbfist.jpg",
      GestureDescription: "closed_fist",
      blurb:
        "Originating from Roman times, the obscene fig gesture, thumb between fingers, signifies contempt, mainly used in Turkey and Russia.",
    },
    {
      description: "Middle Finger",
      url: "/midfingnews.jpg",
      GestureDescription: "middle_finger_up",
      blurb:
        "The middle finger gesture, dating back to ancient Greece, symbolizes insult or anger, universally recognized as a sign of disrespect.",
    },
  ],
  Qf = () =>
    m.jsx("div", {
      className:
        "fixed inset-0 z-50 flex items-center h-screen flex-col p-8 bg-blue-500",
      children: m.jsxs("div", {
        className: "max-w-md px-12 mt-20 flex justify-between flex-col h-full",
        children: [
          m.jsxs("div", {
            className: "prose",
            children: [
              m.jsx("h1", { className: "text-white", children: "rudeCAPTCHA" }),
              m.jsx("h2", {
                className: "text-gray-100",
                children: "Sick of proving to a robot you are human?",
              }),
            ],
          }),
          m.jsxs("div", {
            className: "flex items-center justify-center flex-col",
            children: [
              m.jsx("div", {
                className:
                  "w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700",
                children: m.jsx("div", {
                  className: "bg-blue-600 h-2.5 rounded-full animate-widthGrow",
                }),
              }),
              m.jsx("div", {
                className: "flex items-baseline",
                children: m.jsxs("p", {
                  className: "text-gray-200 pt-2 ",
                  children: [
                    "Loading",
                    "  ",
                    m.jsx("span", {
                      className:
                        "material-icons text-sm animate-spin text-white",
                      children: "rotate_right",
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  Gf = window.fp;
"tf" in window
  ? window.tf
      .setBackend("webgl")
      .then(() => {
        console.log("WebGL backend set!");
      })
      .catch((e) => {
        console.error("Error setting WebGL backend:", e);
      })
  : console.error("TensorFlow.js is not loaded");
const es = window.handpose;
function Kf() {
  const [e, t] = M.useState(!0),
    [n, r] = M.useState(!1),
    [l, i] = M.useState(!1),
    o = M.useRef(!1),
    [u, s] = M.useState(null),
    [c, g] = M.useState(!1),
    [h, p] = M.useState(!1),
    [w, k] = M.useState(!0),
    [x, U] = M.useState(!0),
    [d, a] = M.useState(!1),
    [f, v] = M.useState(null),
    [E, _] = M.useState(null),
    N = () => {
      g(!c), j();
    },
    j = () => {
      (o.current = !o.current), console.log("Detection toggled to:", o.current);
    },
    O = M.useRef(null);
  M.useEffect(() => {
    async function T() {
      try {
        const R = await navigator.mediaDevices.getUserMedia({
          video: !0,
          frameRate: { ideal: 15, max: 30 },
          width: { ideal: 640 },
          height: { ideal: 1138 },
          aspectRatio: { ideal: 0.5625 },
        });
        O.current.srcObject = R;
        const ue = await es.load();
        s(ue), console.log("Setup complete.");
      } catch (R) {
        console.error("Error setting up webcam or loading models:", R);
      }
    }
    typeof window < "u" && navigator.mediaDevices && T();
  }, []),
    M.useEffect(() => {
      (async () => {
        try {
          const R = await es.load();
          s(R), console.log("Handpose model loaded.");
        } catch (R) {
          console.error("Failed to load the Handpose model:", R);
        }
      })();
    }, []);
  const L = async (T) => {
      console.log("running handpose"),
        setInterval(() => {
          we(T);
        }, 300);
    },
    we = async (T) => {
      if (O.current && T) {
        const R = O.current,
          ue = await T.estimateHands(R);
        if (ue.length > 0) {
          a(!0), console.log("hand");
          const _t = await new Gf.GestureEstimator([
            Fn,
            pe,
            it,
            Pt,
            Tt,
            Hr,
            Xi,
            Qt,
          ]).estimate(ue[0].landmarks, 4);
          if (_t.gestures !== void 0 && _t.gestures.length > 0) {
            const fe = _t.gestures.sort((Bt, hc) => hc.score - Bt.score);
            v(fe[0].name),
              fe.length > 1
                ? (_(fe[1].name), Ht(fe[0].name, fe[1].name))
                : (_("no second answer"), Ht(fe[0].name, "no second answer")),
              console.log("calling");
          } else v("no answer yet"), _("no answer yet");
        } else console.log("no fingerpose yet");
      }
    },
    [oe, Qe] = M.useState(0),
    nt = M.useRef(oe);
  M.useEffect(() => {
    nt.current = oe;
  }, [oe]);
  const [fr, xn] = M.useState(!1),
    Ht = (T, R) => {
      if (
        o.current &&
        (lt[nt.current].GestureDescription === T ||
          lt[nt.current].GestureDescription === R)
      ) {
        j(),
          i(!0),
          console.log("success"),
          setTimeout(() => {
            i(!1), j(), console.log("Detection re-enabled.");
          }, 1500);
        const ue = nt.current < lt.length - 1 ? nt.current + 1 : 0;
        Qe(ue), console.log("Index updated to:", ue);
      }
    },
    S = () => {
      j(), xn(!fr);
    },
    [P, z] = M.useState(!1);
  return (
    M.useEffect(() => {
      const T = O.current;
      if (T) {
        const R = () => {
            t(!1), z(!0), console.log("Video is ready to play.");
          },
          ue = () => {
            z(!0), console.log("Video is playing.");
          },
          De = () => {
            z(!1), console.log("Video is paused.");
          };
        return (
          T.addEventListener("canplay", R),
          T.addEventListener("playing", ue),
          T.addEventListener("pause", De),
          () => {
            T.removeEventListener("canplay", R),
              T.removeEventListener("playing", ue),
              T.removeEventListener("pause", De);
          }
        );
      }
    }, [O, u]),
    M.useEffect(() => {
      const T = setTimeout(() => {
        k(!1), console.log("Timer expired, set showIntro to false");
      }, 5e3);
      return (
        e ||
          (clearTimeout(T),
          k(!1),
          console.log("Webcam finished loading, set showIntro to false")),
        () => clearTimeout(T)
      );
    }, []),
    M.useEffect(() => {
      console.log("videoPlaying", P),
        !n && P && u && (console.log("start detection"), L(u), r(!0));
    }, [P, u]),
    m.jsxs("main", {
      className:
        "h-screen w-full flex flex-col items-center justify-center md:flex-row bg-white p-4 md:p-0 overflow-hidden",
      children: [
        h && m.jsx(Onboard, { setShowOnboard: p }),
        w && m.jsx(Qf, { showIntro: w }),
        fr && m.jsx(Bf, { toggleFaq: S }),
        c && m.jsx(Wf, { toggleModal: N, toggleDetection: j, setShowModal: g }),
        m.jsx("div", {
          className: "flex-1 flex items-center justify-center",
          children: m.jsxs("div", {
            className: "max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden ",
            children: [
              m.jsxs("div", {
                className: "flex justify-between items-center p-4 bg-blue-500",
                style: { minHeight: "4rem" },
                children: [
                  m.jsxs("div", {
                    children: [
                      m.jsx("h4", {
                        className: "text-gray-100 text-sm ",
                        children:
                          e || l
                            ? "Loading..."
                            : x
                            ? "Get Ready"
                            : "Make the Gesture",
                      }),
                      m.jsx("h4", {
                        className: "text-xl font-bold text-white",
                        children:
                          e || x
                            ? "rudeCAPTCHA"
                            : l
                            ? "Correct"
                            : lt[oe].description,
                      }),
                    ],
                  }),
                  e || l
                    ? m.jsx("div", {
                        className: "h-24  flex items-center justify-center",
                        children: m.jsx("div", {
                          className: "pr-4",
                          children: m.jsx("p", {
                            className: "material-icons text-xl animate-spin",
                            children: m.jsx("span", {
                              className:
                                "material-symbols-outlined text-2xl text-white",
                              children: "rotate_right",
                            }),
                          }),
                        }),
                      })
                    : x
                    ? m.jsx("div", {
                        className: "h-24  flex items-center justify-center",
                      })
                    : m.jsx("img", {
                        src: lt[oe].url,
                        alt: lt[oe].description,
                        className: "h-24 border-white border-2",
                      }),
                ],
              }),
              m.jsxs("div", {
                className: "relative h-64 bg-gray-100",
                children: [
                  e &&
                    m.jsxs("div", {
                      className:
                        "h-full flex flex-col items-center justify-center prose",
                      children: [
                        m.jsx("h3", { children: "LOADING..." }),
                        m.jsx("h5", { children: "Initializing webcam..." }),
                        m.jsx("h5", { children: "Loading AI model..." }),
                        m.jsx("p", {
                          className: "material-icons  animate-spin ",
                          children: m.jsx("span", {
                            className: "material-symbols-outlined text-5xl",
                            children: "rotate_right",
                          }),
                        }),
                      ],
                    }),
                  l &&
                    m.jsx("div", {
                      className:
                        "absolute top-0 left-0 w-full h-full bg-transparent flex items-center justify-center  ",
                      style: {
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                      },
                      children: m.jsx("div", {
                        className:
                          "bg-white/50 h-24 w-24 flex items-center justify-center rounded-full  ",
                        children: m.jsx("p", {
                          className: "text-green-500 text-5xl ",
                          children: "✓",
                        }),
                      }),
                    }),
                  m.jsx("video", {
                    ref: O,
                    autoPlay: !0,
                    playsInline: !0,
                    muted: !0,
                    className: "w-full h-full object-cover z-100",
                  }),
                  !e &&
                    m.jsx("div", {
                      className:
                        "absolute top-0 left-0 w-full h-full bg-transparent grid grid-cols-4 grid-rows-4 border border-transparent z-10",
                      children: Array.from({ length: 16 }).map((T, R) =>
                        m.jsx(
                          "div",
                          {
                            className: "border border-white",
                            style: { minHeight: "1px" },
                          },
                          R
                        )
                      ),
                    }),
                ],
              }),
              m.jsx("div", {
                className: "p-4",
                children: m.jsx("p", {
                  className: ` text-base overflow-hidden   ${
                    l ? "text-white" : "text-gray-700"
                  }`,
                  style: {
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                  },
                  children: e
                    ? "Sick of having to prove to a robot you're human? AI isn't allowed to be offensive so won't be able to break this Captcha."
                    : x
                    ? " Make the obscene gesture indicated in the top right. Make sure your hand is visible to the webcam.  Press Start to begin. ↘"
                    : lt[oe].blurb || m.jsx("div", { className: "h-14" }),
                }),
              }),
              m.jsxs("div", {
                className: "px-4 pt-4 pb-2 flex justify-start space-x-3",
                children: [
                  m.jsx(ti, { showTick: l, icon: "help", onClick: S }),
                  m.jsx(ti, { showTick: l, icon: " ios_share", onClick: N }),
                  n &&
                    m.jsx(ti, {
                      showTick: l,
                      icon: "autorenew",
                      onClick: () => {
                        oe > 0 ? Qe(oe - 1) : Qe(lt.length - 1);
                      },
                    }),
                  m.jsx("div", {
                    className: " w-full flex justify-end",
                    children:
                      n &&
                      x &&
                      m.jsx("button", {
                        onClick: () => {
                          j(), U(!1);
                        },
                        type: "button",
                        className:
                          " focus:outline-none hover:underline text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
                        children: "Start",
                      }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
ni.createRoot(document.getElementById("root")).render(
  m.jsx(Lc.StrictMode, { children: m.jsx(Kf, {}) })
);
