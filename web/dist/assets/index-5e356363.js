function kh(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const a = Object.getOwnPropertyDescriptor(r, i);
          a &&
            Object.defineProperty(
              e,
              i,
              a.get ? a : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const o of a.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = n(i);
    fetch(i.href, a);
  }
})();
function Xf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Jf = { exports: {} },
  qa = {},
  Zf = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fi = Symbol.for("react.element"),
  Eh = Symbol.for("react.portal"),
  _h = Symbol.for("react.fragment"),
  xh = Symbol.for("react.strict_mode"),
  Ch = Symbol.for("react.profiler"),
  Nh = Symbol.for("react.provider"),
  Ph = Symbol.for("react.context"),
  bh = Symbol.for("react.forward_ref"),
  Oh = Symbol.for("react.suspense"),
  Th = Symbol.for("react.memo"),
  Ah = Symbol.for("react.lazy"),
  Yu = Symbol.iterator;
function Rh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Yu && e[Yu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ed = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  td = Object.assign,
  nd = {};
function ir(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = nd),
    (this.updater = n || ed);
}
ir.prototype.isReactComponent = {};
ir.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ir.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function rd() {}
rd.prototype = ir.prototype;
function Os(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = nd),
    (this.updater = n || ed);
}
var Ts = (Os.prototype = new rd());
Ts.constructor = Os;
td(Ts, ir.prototype);
Ts.isPureReactComponent = !0;
var qu = Array.isArray,
  id = Object.prototype.hasOwnProperty,
  As = { current: null },
  ad = { key: !0, ref: !0, __self: !0, __source: !0 };
function od(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      id.call(t, r) && !ad.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: fi,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: As.current,
  };
}
function Lh(e, t) {
  return {
    $$typeof: fi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Rs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fi;
}
function Ih(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ku = /\/+/g;
function Co(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ih("" + e.key)
    : t.toString(36);
}
function Zi(e, t, n, r, i) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (a) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case fi:
          case Eh:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Co(o, 0) : r),
      qu(i)
        ? ((n = ""),
          e != null && (n = e.replace(Ku, "$&/") + "/"),
          Zi(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Rs(i) &&
            (i = Lh(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Ku, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), qu(e)))
    for (var l = 0; l < e.length; l++) {
      a = e[l];
      var s = r + Co(a, l);
      o += Zi(a, t, n, s, i);
    }
  else if (((s = Rh(e)), typeof s == "function"))
    for (e = s.call(e), l = 0; !(a = e.next()).done; )
      (a = a.value), (s = r + Co(a, l++)), (o += Zi(a, t, n, s, i));
  else if (a === "object")
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
function Ci(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Zi(e, r, "", "", function (a) {
      return t.call(n, a, i++);
    }),
    r
  );
}
function Dh(e) {
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
var _e = { current: null },
  ea = { transition: null },
  zh = {
    ReactCurrentDispatcher: _e,
    ReactCurrentBatchConfig: ea,
    ReactCurrentOwner: As,
  };
M.Children = {
  map: Ci,
  forEach: function (e, t, n) {
    Ci(
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
      Ci(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ci(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Rs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
M.Component = ir;
M.Fragment = _h;
M.Profiler = Ch;
M.PureComponent = Os;
M.StrictMode = xh;
M.Suspense = Oh;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zh;
M.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = td({}, e.props),
    i = e.key,
    a = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (o = As.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      id.call(t, s) &&
        !ad.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: fi, type: e.type, key: i, ref: a, props: r, _owner: o };
};
M.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ph,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Nh, _context: e }),
    (e.Consumer = e)
  );
};
M.createElement = od;
M.createFactory = function (e) {
  var t = od.bind(null, e);
  return (t.type = e), t;
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (e) {
  return { $$typeof: bh, render: e };
};
M.isValidElement = Rs;
M.lazy = function (e) {
  return { $$typeof: Ah, _payload: { _status: -1, _result: e }, _init: Dh };
};
M.memo = function (e, t) {
  return { $$typeof: Th, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function (e) {
  var t = ea.transition;
  ea.transition = {};
  try {
    e();
  } finally {
    ea.transition = t;
  }
};
M.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
M.useCallback = function (e, t) {
  return _e.current.useCallback(e, t);
};
M.useContext = function (e) {
  return _e.current.useContext(e);
};
M.useDebugValue = function () {};
M.useDeferredValue = function (e) {
  return _e.current.useDeferredValue(e);
};
M.useEffect = function (e, t) {
  return _e.current.useEffect(e, t);
};
M.useId = function () {
  return _e.current.useId();
};
M.useImperativeHandle = function (e, t, n) {
  return _e.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function (e, t) {
  return _e.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function (e, t) {
  return _e.current.useLayoutEffect(e, t);
};
M.useMemo = function (e, t) {
  return _e.current.useMemo(e, t);
};
M.useReducer = function (e, t, n) {
  return _e.current.useReducer(e, t, n);
};
M.useRef = function (e) {
  return _e.current.useRef(e);
};
M.useState = function (e) {
  return _e.current.useState(e);
};
M.useSyncExternalStore = function (e, t, n) {
  return _e.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function () {
  return _e.current.useTransition();
};
M.version = "18.2.0";
Zf.exports = M;
var _ = Zf.exports;
const Ls = Xf(_),
  pl = kh({ __proto__: null, default: Ls }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fh = _,
  Mh = Symbol.for("react.element"),
  jh = Symbol.for("react.fragment"),
  Uh = Object.prototype.hasOwnProperty,
  $h = Fh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Bh = { key: !0, ref: !0, __self: !0, __source: !0 };
function ld(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Uh.call(t, r) && !Bh.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Mh,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: $h.current,
  };
}
qa.Fragment = jh;
qa.jsx = ld;
qa.jsxs = ld;
Jf.exports = qa;
var sd = Jf.exports;
const h = sd.jsx,
  P = sd.jsxs;
var ml = {},
  ud = { exports: {} },
  De = {},
  cd = { exports: {} },
  fd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, I) {
    var D = A.length;
    A.push(I);
    e: for (; 0 < D; ) {
      var ne = (D - 1) >>> 1,
        fe = A[ne];
      if (0 < i(fe, I)) (A[ne] = I), (A[D] = fe), (D = ne);
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var I = A[0],
      D = A.pop();
    if (D !== I) {
      A[0] = D;
      e: for (var ne = 0, fe = A.length, _i = fe >>> 1; ne < _i; ) {
        var nn = 2 * (ne + 1) - 1,
          xo = A[nn],
          rn = nn + 1,
          xi = A[rn];
        if (0 > i(xo, D))
          rn < fe && 0 > i(xi, xo)
            ? ((A[ne] = xi), (A[rn] = D), (ne = rn))
            : ((A[ne] = xo), (A[nn] = D), (ne = nn));
        else if (rn < fe && 0 > i(xi, D)) (A[ne] = xi), (A[rn] = D), (ne = rn);
        else break e;
      }
    }
    return I;
  }
  function i(A, I) {
    var D = A.sortIndex - I.sortIndex;
    return D !== 0 ? D : A.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var s = [],
    u = [],
    c = 1,
    f = null,
    p = 3,
    y = !1,
    g = !1,
    w = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(A) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= A)
        r(u), (I.sortIndex = I.expirationTime), t(s, I);
      else break;
      I = n(u);
    }
  }
  function k(A) {
    if (((w = !1), v(A), !g))
      if (n(s) !== null) (g = !0), Eo(S);
      else {
        var I = n(u);
        I !== null && _o(k, I.startTime - A);
      }
  }
  function S(A, I) {
    (g = !1), w && ((w = !1), m(R), (R = -1)), (y = !0);
    var D = p;
    try {
      for (
        v(I), f = n(s);
        f !== null && (!(f.expirationTime > I) || (A && !We()));

      ) {
        var ne = f.callback;
        if (typeof ne == "function") {
          (f.callback = null), (p = f.priorityLevel);
          var fe = ne(f.expirationTime <= I);
          (I = e.unstable_now()),
            typeof fe == "function" ? (f.callback = fe) : f === n(s) && r(s),
            v(I);
        } else r(s);
        f = n(s);
      }
      if (f !== null) var _i = !0;
      else {
        var nn = n(u);
        nn !== null && _o(k, nn.startTime - I), (_i = !1);
      }
      return _i;
    } finally {
      (f = null), (p = D), (y = !1);
    }
  }
  var C = !1,
    b = null,
    R = -1,
    $ = 5,
    z = -1;
  function We() {
    return !(e.unstable_now() - z < $);
  }
  function dr() {
    if (b !== null) {
      var A = e.unstable_now();
      z = A;
      var I = !0;
      try {
        I = b(!0, A);
      } finally {
        I ? pr() : ((C = !1), (b = null));
      }
    } else C = !1;
  }
  var pr;
  if (typeof d == "function")
    pr = function () {
      d(dr);
    };
  else if (typeof MessageChannel < "u") {
    var Qu = new MessageChannel(),
      Sh = Qu.port2;
    (Qu.port1.onmessage = dr),
      (pr = function () {
        Sh.postMessage(null);
      });
  } else
    pr = function () {
      N(dr, 0);
    };
  function Eo(A) {
    (b = A), C || ((C = !0), pr());
  }
  function _o(A, I) {
    R = N(function () {
      A(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || y || ((g = !0), Eo(S));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : ($ = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (A) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = p;
      }
      var D = p;
      p = I;
      try {
        return A();
      } finally {
        p = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, I) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var D = p;
      p = A;
      try {
        return I();
      } finally {
        p = D;
      }
    }),
    (e.unstable_scheduleCallback = function (A, I, D) {
      var ne = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? ne + D : ne))
          : (D = ne),
        A)
      ) {
        case 1:
          var fe = -1;
          break;
        case 2:
          fe = 250;
          break;
        case 5:
          fe = 1073741823;
          break;
        case 4:
          fe = 1e4;
          break;
        default:
          fe = 5e3;
      }
      return (
        (fe = D + fe),
        (A = {
          id: c++,
          callback: I,
          priorityLevel: A,
          startTime: D,
          expirationTime: fe,
          sortIndex: -1,
        }),
        D > ne
          ? ((A.sortIndex = D),
            t(u, A),
            n(s) === null &&
              A === n(u) &&
              (w ? (m(R), (R = -1)) : (w = !0), _o(k, D - ne)))
          : ((A.sortIndex = fe), t(s, A), g || y || ((g = !0), Eo(S))),
        A
      );
    }),
    (e.unstable_shouldYield = We),
    (e.unstable_wrapCallback = function (A) {
      var I = p;
      return function () {
        var D = p;
        p = I;
        try {
          return A.apply(this, arguments);
        } finally {
          p = D;
        }
      };
    });
})(fd);
cd.exports = fd;
var Hh = cd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dd = _,
  Ie = Hh;
function x(e) {
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
var pd = new Set(),
  $r = {};
function En(e, t) {
  Kn(e, t), Kn(e + "Capture", t);
}
function Kn(e, t) {
  for ($r[e] = t, e = 0; e < t.length; e++) pd.add(t[e]);
}
var ht = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  hl = Object.prototype.hasOwnProperty,
  Wh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Gu = {},
  Xu = {};
function Vh(e) {
  return hl.call(Xu, e)
    ? !0
    : hl.call(Gu, e)
    ? !1
    : Wh.test(e)
    ? (Xu[e] = !0)
    : ((Gu[e] = !0), !1);
}
function Qh(e, t, n, r) {
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
function Yh(e, t, n, r) {
  if (t === null || typeof t > "u" || Qh(e, t, n, r)) return !0;
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
function xe(e, t, n, r, i, a, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o);
}
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ve[e] = new xe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ve[t] = new xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ve[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ve[e] = new xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ve[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ve[e] = new xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ve[e] = new xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ve[e] = new xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ve[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Is = /[\-:]([a-z])/g;
function Ds(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Is, Ds);
    ve[t] = new xe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Is, Ds);
    ve[t] = new xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Is, Ds);
  ve[t] = new xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ve[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ve.xlinkHref = new xe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ve[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function zs(e, t, n, r) {
  var i = ve.hasOwnProperty(t) ? ve[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Yh(t, n, i, r) && (n = null),
    r || i === null
      ? Vh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _t = dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ni = Symbol.for("react.element"),
  Nn = Symbol.for("react.portal"),
  Pn = Symbol.for("react.fragment"),
  Fs = Symbol.for("react.strict_mode"),
  vl = Symbol.for("react.profiler"),
  md = Symbol.for("react.provider"),
  hd = Symbol.for("react.context"),
  Ms = Symbol.for("react.forward_ref"),
  gl = Symbol.for("react.suspense"),
  yl = Symbol.for("react.suspense_list"),
  js = Symbol.for("react.memo"),
  At = Symbol.for("react.lazy"),
  vd = Symbol.for("react.offscreen"),
  Ju = Symbol.iterator;
function mr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ju && e[Ju]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Z = Object.assign,
  No;
function Cr(e) {
  if (No === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      No = (t && t[1]) || "";
    }
  return (
    `
` +
    No +
    e
  );
}
var Po = !1;
function bo(e, t) {
  if (!e || Po) return "";
  Po = !0;
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
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          a = r.stack.split(`
`),
          o = i.length - 1,
          l = a.length - 1;
        1 <= o && 0 <= l && i[o] !== a[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== a[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== a[l])) {
                var s =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (Po = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Cr(e) : "";
}
function qh(e) {
  switch (e.tag) {
    case 5:
      return Cr(e.type);
    case 16:
      return Cr("Lazy");
    case 13:
      return Cr("Suspense");
    case 19:
      return Cr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = bo(e.type, !1)), e;
    case 11:
      return (e = bo(e.type.render, !1)), e;
    case 1:
      return (e = bo(e.type, !0)), e;
    default:
      return "";
  }
}
function wl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Pn:
      return "Fragment";
    case Nn:
      return "Portal";
    case vl:
      return "Profiler";
    case Fs:
      return "StrictMode";
    case gl:
      return "Suspense";
    case yl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case hd:
        return (e.displayName || "Context") + ".Consumer";
      case md:
        return (e._context.displayName || "Context") + ".Provider";
      case Ms:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case js:
        return (
          (t = e.displayName || null), t !== null ? t : wl(e.type) || "Memo"
        );
      case At:
        (t = e._payload), (e = e._init);
        try {
          return wl(e(t));
        } catch {}
    }
  return null;
}
function Kh(e) {
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
      return wl(t);
    case 8:
      return t === Fs ? "StrictMode" : "Mode";
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
function qt(e) {
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
function gd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Gh(e) {
  var t = gd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), a.call(this, o);
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
function Pi(e) {
  e._valueTracker || (e._valueTracker = Gh(e));
}
function yd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = gd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ga(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Sl(e, t) {
  var n = t.checked;
  return Z({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Zu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = qt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function wd(e, t) {
  (t = t.checked), t != null && zs(e, "checked", t, !1);
}
function kl(e, t) {
  wd(e, t);
  var n = qt(t.value),
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
    ? El(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && El(e, t.type, qt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ec(e, t, n) {
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
function El(e, t, n) {
  (t !== "number" || ga(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Nr = Array.isArray;
function $n(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + qt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function _l(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return Z({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function tc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (Nr(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: qt(n) };
}
function Sd(e, t) {
  var n = qt(t.value),
    r = qt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function nc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function kd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function xl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? kd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var bi,
  Ed = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        bi = bi || document.createElement("div"),
          bi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = bi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Br(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Tr = {
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
  Xh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tr).forEach(function (e) {
  Xh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tr[t] = Tr[e]);
  });
});
function _d(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Tr.hasOwnProperty(e) && Tr[e])
    ? ("" + t).trim()
    : t + "px";
}
function xd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = _d(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Jh = Z(
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
function Cl(e, t) {
  if (t) {
    if (Jh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function Nl(e, t) {
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
var Pl = null;
function Us(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var bl = null,
  Bn = null,
  Hn = null;
function rc(e) {
  if ((e = mi(e))) {
    if (typeof bl != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = Za(t)), bl(e.stateNode, e.type, t));
  }
}
function Cd(e) {
  Bn ? (Hn ? Hn.push(e) : (Hn = [e])) : (Bn = e);
}
function Nd() {
  if (Bn) {
    var e = Bn,
      t = Hn;
    if (((Hn = Bn = null), rc(e), t)) for (e = 0; e < t.length; e++) rc(t[e]);
  }
}
function Pd(e, t) {
  return e(t);
}
function bd() {}
var Oo = !1;
function Od(e, t, n) {
  if (Oo) return e(t, n);
  Oo = !0;
  try {
    return Pd(e, t, n);
  } finally {
    (Oo = !1), (Bn !== null || Hn !== null) && (bd(), Nd());
  }
}
function Hr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Za(n);
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
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var Ol = !1;
if (ht)
  try {
    var hr = {};
    Object.defineProperty(hr, "passive", {
      get: function () {
        Ol = !0;
      },
    }),
      window.addEventListener("test", hr, hr),
      window.removeEventListener("test", hr, hr);
  } catch {
    Ol = !1;
  }
function Zh(e, t, n, r, i, a, o, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ar = !1,
  ya = null,
  wa = !1,
  Tl = null,
  ev = {
    onError: function (e) {
      (Ar = !0), (ya = e);
    },
  };
function tv(e, t, n, r, i, a, o, l, s) {
  (Ar = !1), (ya = null), Zh.apply(ev, arguments);
}
function nv(e, t, n, r, i, a, o, l, s) {
  if ((tv.apply(this, arguments), Ar)) {
    if (Ar) {
      var u = ya;
      (Ar = !1), (ya = null);
    } else throw Error(x(198));
    wa || ((wa = !0), (Tl = u));
  }
}
function _n(e) {
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
function Td(e) {
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
function ic(e) {
  if (_n(e) !== e) throw Error(x(188));
}
function rv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = _n(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === n) return ic(i), e;
        if (a === r) return ic(i), t;
        a = a.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = i), (r = a);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = a);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = a);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = a.child; l; ) {
          if (l === n) {
            (o = !0), (n = a), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = a), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function Ad(e) {
  return (e = rv(e)), e !== null ? Rd(e) : null;
}
function Rd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Rd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ld = Ie.unstable_scheduleCallback,
  ac = Ie.unstable_cancelCallback,
  iv = Ie.unstable_shouldYield,
  av = Ie.unstable_requestPaint,
  ie = Ie.unstable_now,
  ov = Ie.unstable_getCurrentPriorityLevel,
  $s = Ie.unstable_ImmediatePriority,
  Id = Ie.unstable_UserBlockingPriority,
  Sa = Ie.unstable_NormalPriority,
  lv = Ie.unstable_LowPriority,
  Dd = Ie.unstable_IdlePriority,
  Ka = null,
  at = null;
function sv(e) {
  if (at && typeof at.onCommitFiberRoot == "function")
    try {
      at.onCommitFiberRoot(Ka, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ge = Math.clz32 ? Math.clz32 : fv,
  uv = Math.log,
  cv = Math.LN2;
function fv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((uv(e) / cv) | 0)) | 0;
}
var Oi = 64,
  Ti = 4194304;
function Pr(e) {
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
function ka(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = Pr(l)) : ((a &= o), a !== 0 && (r = Pr(a)));
  } else (o = n & ~i), o !== 0 ? (r = Pr(o)) : a !== 0 && (r = Pr(a));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (a = t & -t), i >= a || (i === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ge(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function dv(e, t) {
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
function pv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var o = 31 - Ge(a),
      l = 1 << o,
      s = i[o];
    s === -1
      ? (!(l & n) || l & r) && (i[o] = dv(l, t))
      : s <= t && (e.expiredLanes |= l),
      (a &= ~l);
  }
}
function Al(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function zd() {
  var e = Oi;
  return (Oi <<= 1), !(Oi & 4194240) && (Oi = 64), e;
}
function To(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function di(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ge(t)),
    (e[t] = n);
}
function mv(e, t) {
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
    var i = 31 - Ge(n),
      a = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
  }
}
function Bs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ge(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var B = 0;
function Fd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Md,
  Hs,
  jd,
  Ud,
  $d,
  Rl = !1,
  Ai = [],
  jt = null,
  Ut = null,
  $t = null,
  Wr = new Map(),
  Vr = new Map(),
  Lt = [],
  hv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function oc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      jt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ut = null;
      break;
    case "mouseover":
    case "mouseout":
      $t = null;
      break;
    case "pointerover":
    case "pointerout":
      Wr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vr.delete(t.pointerId);
  }
}
function vr(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [i],
      }),
      t !== null && ((t = mi(t)), t !== null && Hs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function vv(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (jt = vr(jt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Ut = vr(Ut, e, t, n, r, i)), !0;
    case "mouseover":
      return ($t = vr($t, e, t, n, r, i)), !0;
    case "pointerover":
      var a = i.pointerId;
      return Wr.set(a, vr(Wr.get(a) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (a = i.pointerId), Vr.set(a, vr(Vr.get(a) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Bd(e) {
  var t = sn(e.target);
  if (t !== null) {
    var n = _n(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Td(n)), t !== null)) {
          (e.blockedOn = t),
            $d(e.priority, function () {
              jd(n);
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
function ta(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ll(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Pl = r), n.target.dispatchEvent(r), (Pl = null);
    } else return (t = mi(n)), t !== null && Hs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function lc(e, t, n) {
  ta(e) && n.delete(t);
}
function gv() {
  (Rl = !1),
    jt !== null && ta(jt) && (jt = null),
    Ut !== null && ta(Ut) && (Ut = null),
    $t !== null && ta($t) && ($t = null),
    Wr.forEach(lc),
    Vr.forEach(lc);
}
function gr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Rl ||
      ((Rl = !0),
      Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, gv)));
}
function Qr(e) {
  function t(i) {
    return gr(i, e);
  }
  if (0 < Ai.length) {
    gr(Ai[0], e);
    for (var n = 1; n < Ai.length; n++) {
      var r = Ai[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    jt !== null && gr(jt, e),
      Ut !== null && gr(Ut, e),
      $t !== null && gr($t, e),
      Wr.forEach(t),
      Vr.forEach(t),
      n = 0;
    n < Lt.length;
    n++
  )
    (r = Lt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Lt.length && ((n = Lt[0]), n.blockedOn === null); )
    Bd(n), n.blockedOn === null && Lt.shift();
}
var Wn = _t.ReactCurrentBatchConfig,
  Ea = !0;
function yv(e, t, n, r) {
  var i = B,
    a = Wn.transition;
  Wn.transition = null;
  try {
    (B = 1), Ws(e, t, n, r);
  } finally {
    (B = i), (Wn.transition = a);
  }
}
function wv(e, t, n, r) {
  var i = B,
    a = Wn.transition;
  Wn.transition = null;
  try {
    (B = 4), Ws(e, t, n, r);
  } finally {
    (B = i), (Wn.transition = a);
  }
}
function Ws(e, t, n, r) {
  if (Ea) {
    var i = Ll(e, t, n, r);
    if (i === null) Uo(e, t, r, _a, n), oc(e, r);
    else if (vv(i, e, t, n, r)) r.stopPropagation();
    else if ((oc(e, r), t & 4 && -1 < hv.indexOf(e))) {
      for (; i !== null; ) {
        var a = mi(i);
        if (
          (a !== null && Md(a),
          (a = Ll(e, t, n, r)),
          a === null && Uo(e, t, r, _a, n),
          a === i)
        )
          break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else Uo(e, t, r, null, n);
  }
}
var _a = null;
function Ll(e, t, n, r) {
  if (((_a = null), (e = Us(r)), (e = sn(e)), e !== null))
    if (((t = _n(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Td(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (_a = e), null;
}
function Hd(e) {
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
      switch (ov()) {
        case $s:
          return 1;
        case Id:
          return 4;
        case Sa:
        case lv:
          return 16;
        case Dd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Dt = null,
  Vs = null,
  na = null;
function Wd() {
  if (na) return na;
  var e,
    t = Vs,
    n = t.length,
    r,
    i = "value" in Dt ? Dt.value : Dt.textContent,
    a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
  return (na = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ra(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ri() {
  return !0;
}
function sc() {
  return !1;
}
function ze(e) {
  function t(n, r, i, a, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(a) : a[l]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? Ri
        : sc),
      (this.isPropagationStopped = sc),
      this
    );
  }
  return (
    Z(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ri));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ri));
      },
      persist: function () {},
      isPersistent: Ri,
    }),
    t
  );
}
var ar = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Qs = ze(ar),
  pi = Z({}, ar, { view: 0, detail: 0 }),
  Sv = ze(pi),
  Ao,
  Ro,
  yr,
  Ga = Z({}, pi, {
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
    getModifierState: Ys,
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
        : (e !== yr &&
            (yr && e.type === "mousemove"
              ? ((Ao = e.screenX - yr.screenX), (Ro = e.screenY - yr.screenY))
              : (Ro = Ao = 0),
            (yr = e)),
          Ao);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ro;
    },
  }),
  uc = ze(Ga),
  kv = Z({}, Ga, { dataTransfer: 0 }),
  Ev = ze(kv),
  _v = Z({}, pi, { relatedTarget: 0 }),
  Lo = ze(_v),
  xv = Z({}, ar, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cv = ze(xv),
  Nv = Z({}, ar, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Pv = ze(Nv),
  bv = Z({}, ar, { data: 0 }),
  cc = ze(bv),
  Ov = {
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
  Tv = {
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
  Av = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Rv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Av[e]) ? !!t[e] : !1;
}
function Ys() {
  return Rv;
}
var Lv = Z({}, pi, {
    key: function (e) {
      if (e.key) {
        var t = Ov[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ra(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Tv[e.keyCode] || "Unidentified"
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
    getModifierState: Ys,
    charCode: function (e) {
      return e.type === "keypress" ? ra(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ra(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Iv = ze(Lv),
  Dv = Z({}, Ga, {
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
  fc = ze(Dv),
  zv = Z({}, pi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ys,
  }),
  Fv = ze(zv),
  Mv = Z({}, ar, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  jv = ze(Mv),
  Uv = Z({}, Ga, {
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
  $v = ze(Uv),
  Bv = [9, 13, 27, 32],
  qs = ht && "CompositionEvent" in window,
  Rr = null;
ht && "documentMode" in document && (Rr = document.documentMode);
var Hv = ht && "TextEvent" in window && !Rr,
  Vd = ht && (!qs || (Rr && 8 < Rr && 11 >= Rr)),
  dc = String.fromCharCode(32),
  pc = !1;
function Qd(e, t) {
  switch (e) {
    case "keyup":
      return Bv.indexOf(t.keyCode) !== -1;
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
function Yd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var bn = !1;
function Wv(e, t) {
  switch (e) {
    case "compositionend":
      return Yd(t);
    case "keypress":
      return t.which !== 32 ? null : ((pc = !0), dc);
    case "textInput":
      return (e = t.data), e === dc && pc ? null : e;
    default:
      return null;
  }
}
function Vv(e, t) {
  if (bn)
    return e === "compositionend" || (!qs && Qd(e, t))
      ? ((e = Wd()), (na = Vs = Dt = null), (bn = !1), e)
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
      return Vd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qv = {
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
function mc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qv[e.type] : t === "textarea";
}
function qd(e, t, n, r) {
  Cd(r),
    (t = xa(t, "onChange")),
    0 < t.length &&
      ((n = new Qs("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Lr = null,
  Yr = null;
function Yv(e) {
  ap(e, 0);
}
function Xa(e) {
  var t = An(e);
  if (yd(t)) return e;
}
function qv(e, t) {
  if (e === "change") return t;
}
var Kd = !1;
if (ht) {
  var Io;
  if (ht) {
    var Do = "oninput" in document;
    if (!Do) {
      var hc = document.createElement("div");
      hc.setAttribute("oninput", "return;"),
        (Do = typeof hc.oninput == "function");
    }
    Io = Do;
  } else Io = !1;
  Kd = Io && (!document.documentMode || 9 < document.documentMode);
}
function vc() {
  Lr && (Lr.detachEvent("onpropertychange", Gd), (Yr = Lr = null));
}
function Gd(e) {
  if (e.propertyName === "value" && Xa(Yr)) {
    var t = [];
    qd(t, Yr, e, Us(e)), Od(Yv, t);
  }
}
function Kv(e, t, n) {
  e === "focusin"
    ? (vc(), (Lr = t), (Yr = n), Lr.attachEvent("onpropertychange", Gd))
    : e === "focusout" && vc();
}
function Gv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Xa(Yr);
}
function Xv(e, t) {
  if (e === "click") return Xa(t);
}
function Jv(e, t) {
  if (e === "input" || e === "change") return Xa(t);
}
function Zv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Je = typeof Object.is == "function" ? Object.is : Zv;
function qr(e, t) {
  if (Je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!hl.call(t, i) || !Je(e[i], t[i])) return !1;
  }
  return !0;
}
function gc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function yc(e, t) {
  var n = gc(e);
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
    n = gc(n);
  }
}
function Xd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Xd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Jd() {
  for (var e = window, t = ga(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ga(e.document);
  }
  return t;
}
function Ks(e) {
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
function eg(e) {
  var t = Jd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Xd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ks(n)) {
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
        var i = n.textContent.length,
          a = Math.min(r.start, i);
        (r = r.end === void 0 ? a : Math.min(r.end, i)),
          !e.extend && a > r && ((i = r), (r = a), (a = i)),
          (i = yc(n, a));
        var o = yc(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          a > r
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
var tg = ht && "documentMode" in document && 11 >= document.documentMode,
  On = null,
  Il = null,
  Ir = null,
  Dl = !1;
function wc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Dl ||
    On == null ||
    On !== ga(r) ||
    ((r = On),
    "selectionStart" in r && Ks(r)
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
    (Ir && qr(Ir, r)) ||
      ((Ir = r),
      (r = xa(Il, "onSelect")),
      0 < r.length &&
        ((t = new Qs("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = On))));
}
function Li(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Tn = {
    animationend: Li("Animation", "AnimationEnd"),
    animationiteration: Li("Animation", "AnimationIteration"),
    animationstart: Li("Animation", "AnimationStart"),
    transitionend: Li("Transition", "TransitionEnd"),
  },
  zo = {},
  Zd = {};
ht &&
  ((Zd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Tn.animationend.animation,
    delete Tn.animationiteration.animation,
    delete Tn.animationstart.animation),
  "TransitionEvent" in window || delete Tn.transitionend.transition);
function Ja(e) {
  if (zo[e]) return zo[e];
  if (!Tn[e]) return e;
  var t = Tn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Zd) return (zo[e] = t[n]);
  return e;
}
var ep = Ja("animationend"),
  tp = Ja("animationiteration"),
  np = Ja("animationstart"),
  rp = Ja("transitionend"),
  ip = new Map(),
  Sc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Zt(e, t) {
  ip.set(e, t), En(t, [e]);
}
for (var Fo = 0; Fo < Sc.length; Fo++) {
  var Mo = Sc[Fo],
    ng = Mo.toLowerCase(),
    rg = Mo[0].toUpperCase() + Mo.slice(1);
  Zt(ng, "on" + rg);
}
Zt(ep, "onAnimationEnd");
Zt(tp, "onAnimationIteration");
Zt(np, "onAnimationStart");
Zt("dblclick", "onDoubleClick");
Zt("focusin", "onFocus");
Zt("focusout", "onBlur");
Zt(rp, "onTransitionEnd");
Kn("onMouseEnter", ["mouseout", "mouseover"]);
Kn("onMouseLeave", ["mouseout", "mouseover"]);
Kn("onPointerEnter", ["pointerout", "pointerover"]);
Kn("onPointerLeave", ["pointerout", "pointerover"]);
En(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
En(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
En("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
En(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
En(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
En(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var br =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ig = new Set("cancel close invalid load scroll toggle".split(" ").concat(br));
function kc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), nv(r, t, void 0, e), (e.currentTarget = null);
}
function ap(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== a && i.isPropagationStopped())) break e;
          kc(i, l, u), (a = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== a && i.isPropagationStopped())
          )
            break e;
          kc(i, l, u), (a = s);
        }
    }
  }
  if (wa) throw ((e = Tl), (wa = !1), (Tl = null), e);
}
function W(e, t) {
  var n = t[Ul];
  n === void 0 && (n = t[Ul] = new Set());
  var r = e + "__bubble";
  n.has(r) || (op(t, e, 2, !1), n.add(r));
}
function jo(e, t, n) {
  var r = 0;
  t && (r |= 4), op(n, e, r, t);
}
var Ii = "_reactListening" + Math.random().toString(36).slice(2);
function Kr(e) {
  if (!e[Ii]) {
    (e[Ii] = !0),
      pd.forEach(function (n) {
        n !== "selectionchange" && (ig.has(n) || jo(n, !1, e), jo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ii] || ((t[Ii] = !0), jo("selectionchange", !1, t));
  }
}
function op(e, t, n, r) {
  switch (Hd(t)) {
    case 1:
      var i = yv;
      break;
    case 4:
      i = wv;
      break;
    default:
      i = Ws;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ol ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Uo(e, t, n, r, i) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = sn(l)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = a = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Od(function () {
    var u = a,
      c = Us(n),
      f = [];
    e: {
      var p = ip.get(e);
      if (p !== void 0) {
        var y = Qs,
          g = e;
        switch (e) {
          case "keypress":
            if (ra(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Iv;
            break;
          case "focusin":
            (g = "focus"), (y = Lo);
            break;
          case "focusout":
            (g = "blur"), (y = Lo);
            break;
          case "beforeblur":
          case "afterblur":
            y = Lo;
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
            y = uc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Ev;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Fv;
            break;
          case ep:
          case tp:
          case np:
            y = Cv;
            break;
          case rp:
            y = jv;
            break;
          case "scroll":
            y = Sv;
            break;
          case "wheel":
            y = $v;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Pv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = fc;
        }
        var w = (t & 4) !== 0,
          N = !w && e === "scroll",
          m = w ? (p !== null ? p + "Capture" : null) : p;
        w = [];
        for (var d = u, v; d !== null; ) {
          v = d;
          var k = v.stateNode;
          if (
            (v.tag === 5 &&
              k !== null &&
              ((v = k),
              m !== null && ((k = Hr(d, m)), k != null && w.push(Gr(d, k, v)))),
            N)
          )
            break;
          d = d.return;
        }
        0 < w.length &&
          ((p = new y(p, g, null, n, c)), f.push({ event: p, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Pl &&
            (g = n.relatedTarget || n.fromElement) &&
            (sn(g) || g[vt]))
        )
          break e;
        if (
          (y || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          y
            ? ((g = n.relatedTarget || n.toElement),
              (y = u),
              (g = g ? sn(g) : null),
              g !== null &&
                ((N = _n(g)), g !== N || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((y = null), (g = u)),
          y !== g)
        ) {
          if (
            ((w = uc),
            (k = "onMouseLeave"),
            (m = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = fc),
              (k = "onPointerLeave"),
              (m = "onPointerEnter"),
              (d = "pointer")),
            (N = y == null ? p : An(y)),
            (v = g == null ? p : An(g)),
            (p = new w(k, d + "leave", y, n, c)),
            (p.target = N),
            (p.relatedTarget = v),
            (k = null),
            sn(c) === u &&
              ((w = new w(m, d + "enter", g, n, c)),
              (w.target = v),
              (w.relatedTarget = N),
              (k = w)),
            (N = k),
            y && g)
          )
            t: {
              for (w = y, m = g, d = 0, v = w; v; v = Cn(v)) d++;
              for (v = 0, k = m; k; k = Cn(k)) v++;
              for (; 0 < d - v; ) (w = Cn(w)), d--;
              for (; 0 < v - d; ) (m = Cn(m)), v--;
              for (; d--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                (w = Cn(w)), (m = Cn(m));
              }
              w = null;
            }
          else w = null;
          y !== null && Ec(f, p, y, w, !1),
            g !== null && N !== null && Ec(f, N, g, w, !0);
        }
      }
      e: {
        if (
          ((p = u ? An(u) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === "select" || (y === "input" && p.type === "file"))
        )
          var S = qv;
        else if (mc(p))
          if (Kd) S = Jv;
          else {
            S = Gv;
            var C = Kv;
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (S = Xv);
        if (S && (S = S(e, u))) {
          qd(f, S, n, c);
          break e;
        }
        C && C(e, p, u),
          e === "focusout" &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === "number" &&
            El(p, "number", p.value);
      }
      switch (((C = u ? An(u) : window), e)) {
        case "focusin":
          (mc(C) || C.contentEditable === "true") &&
            ((On = C), (Il = u), (Ir = null));
          break;
        case "focusout":
          Ir = Il = On = null;
          break;
        case "mousedown":
          Dl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Dl = !1), wc(f, n, c);
          break;
        case "selectionchange":
          if (tg) break;
        case "keydown":
        case "keyup":
          wc(f, n, c);
      }
      var b;
      if (qs)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        bn
          ? Qd(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (Vd &&
          n.locale !== "ko" &&
          (bn || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && bn && (b = Wd())
            : ((Dt = c),
              (Vs = "value" in Dt ? Dt.value : Dt.textContent),
              (bn = !0))),
        (C = xa(u, R)),
        0 < C.length &&
          ((R = new cc(R, e, null, n, c)),
          f.push({ event: R, listeners: C }),
          b ? (R.data = b) : ((b = Yd(n)), b !== null && (R.data = b)))),
        (b = Hv ? Wv(e, n) : Vv(e, n)) &&
          ((u = xa(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new cc("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = b)));
    }
    ap(f, t);
  });
}
function Gr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function xa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      a = i.stateNode;
    i.tag === 5 &&
      a !== null &&
      ((i = a),
      (a = Hr(e, n)),
      a != null && r.unshift(Gr(e, a, i)),
      (a = Hr(e, t)),
      a != null && r.push(Gr(e, a, i))),
      (e = e.return);
  }
  return r;
}
function Cn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ec(e, t, n, r, i) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((s = Hr(n, a)), s != null && o.unshift(Gr(n, s, l)))
        : i || ((s = Hr(n, a)), s != null && o.push(Gr(n, s, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var ag = /\r\n?/g,
  og = /\u0000|\uFFFD/g;
function _c(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ag,
      `
`
    )
    .replace(og, "");
}
function Di(e, t, n) {
  if (((t = _c(t)), _c(e) !== t && n)) throw Error(x(425));
}
function Ca() {}
var zl = null,
  Fl = null;
function Ml(e, t) {
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
var jl = typeof setTimeout == "function" ? setTimeout : void 0,
  lg = typeof clearTimeout == "function" ? clearTimeout : void 0,
  xc = typeof Promise == "function" ? Promise : void 0,
  sg =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof xc < "u"
      ? function (e) {
          return xc.resolve(null).then(e).catch(ug);
        }
      : jl;
function ug(e) {
  setTimeout(function () {
    throw e;
  });
}
function $o(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Qr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Qr(t);
}
function Bt(e) {
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
function Cc(e) {
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
var or = Math.random().toString(36).slice(2),
  nt = "__reactFiber$" + or,
  Xr = "__reactProps$" + or,
  vt = "__reactContainer$" + or,
  Ul = "__reactEvents$" + or,
  cg = "__reactListeners$" + or,
  fg = "__reactHandles$" + or;
function sn(e) {
  var t = e[nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[vt] || n[nt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Cc(e); e !== null; ) {
          if ((n = e[nt])) return n;
          e = Cc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function mi(e) {
  return (
    (e = e[nt] || e[vt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function An(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function Za(e) {
  return e[Xr] || null;
}
var $l = [],
  Rn = -1;
function en(e) {
  return { current: e };
}
function Q(e) {
  0 > Rn || ((e.current = $l[Rn]), ($l[Rn] = null), Rn--);
}
function H(e, t) {
  Rn++, ($l[Rn] = e.current), (e.current = t);
}
var Kt = {},
  Se = en(Kt),
  Pe = en(!1),
  hn = Kt;
function Gn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Kt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    a;
  for (a in n) i[a] = t[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function be(e) {
  return (e = e.childContextTypes), e != null;
}
function Na() {
  Q(Pe), Q(Se);
}
function Nc(e, t, n) {
  if (Se.current !== Kt) throw Error(x(168));
  H(Se, t), H(Pe, n);
}
function lp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(x(108, Kh(e) || "Unknown", i));
  return Z({}, n, r);
}
function Pa(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Kt),
    (hn = Se.current),
    H(Se, e),
    H(Pe, Pe.current),
    !0
  );
}
function Pc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = lp(e, t, hn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Q(Pe),
      Q(Se),
      H(Se, e))
    : Q(Pe),
    H(Pe, n);
}
var ct = null,
  eo = !1,
  Bo = !1;
function sp(e) {
  ct === null ? (ct = [e]) : ct.push(e);
}
function dg(e) {
  (eo = !0), sp(e);
}
function tn() {
  if (!Bo && ct !== null) {
    Bo = !0;
    var e = 0,
      t = B;
    try {
      var n = ct;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ct = null), (eo = !1);
    } catch (i) {
      throw (ct !== null && (ct = ct.slice(e + 1)), Ld($s, tn), i);
    } finally {
      (B = t), (Bo = !1);
    }
  }
  return null;
}
var Ln = [],
  In = 0,
  ba = null,
  Oa = 0,
  Me = [],
  je = 0,
  vn = null,
  ft = 1,
  dt = "";
function on(e, t) {
  (Ln[In++] = Oa), (Ln[In++] = ba), (ba = e), (Oa = t);
}
function up(e, t, n) {
  (Me[je++] = ft), (Me[je++] = dt), (Me[je++] = vn), (vn = e);
  var r = ft;
  e = dt;
  var i = 32 - Ge(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var a = 32 - Ge(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (ft = (1 << (32 - Ge(t) + i)) | (n << i) | r),
      (dt = a + e);
  } else (ft = (1 << a) | (n << i) | r), (dt = e);
}
function Gs(e) {
  e.return !== null && (on(e, 1), up(e, 1, 0));
}
function Xs(e) {
  for (; e === ba; )
    (ba = Ln[--In]), (Ln[In] = null), (Oa = Ln[--In]), (Ln[In] = null);
  for (; e === vn; )
    (vn = Me[--je]),
      (Me[je] = null),
      (dt = Me[--je]),
      (Me[je] = null),
      (ft = Me[--je]),
      (Me[je] = null);
}
var Re = null,
  Ae = null,
  q = !1,
  qe = null;
function cp(e, t) {
  var n = Ue(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function bc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Re = e), (Ae = Bt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Re = e), (Ae = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = vn !== null ? { id: ft, overflow: dt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ue(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Re = e),
            (Ae = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Bl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Hl(e) {
  if (q) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!bc(e, t)) {
        if (Bl(e)) throw Error(x(418));
        t = Bt(n.nextSibling);
        var r = Re;
        t && bc(e, t)
          ? cp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (q = !1), (Re = e));
      }
    } else {
      if (Bl(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (q = !1), (Re = e);
    }
  }
}
function Oc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Re = e;
}
function zi(e) {
  if (e !== Re) return !1;
  if (!q) return Oc(e), (q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ml(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (Bl(e)) throw (fp(), Error(x(418)));
    for (; t; ) cp(e, t), (t = Bt(t.nextSibling));
  }
  if ((Oc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = Bt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = Re ? Bt(e.stateNode.nextSibling) : null;
  return !0;
}
function fp() {
  for (var e = Ae; e; ) e = Bt(e.nextSibling);
}
function Xn() {
  (Ae = Re = null), (q = !1);
}
function Js(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
var pg = _t.ReactCurrentBatchConfig;
function Qe(e, t) {
  if (e && e.defaultProps) {
    (t = Z({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ta = en(null),
  Aa = null,
  Dn = null,
  Zs = null;
function eu() {
  Zs = Dn = Aa = null;
}
function tu(e) {
  var t = Ta.current;
  Q(Ta), (e._currentValue = t);
}
function Wl(e, t, n) {
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
function Vn(e, t) {
  (Aa = e),
    (Zs = Dn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ne = !0), (e.firstContext = null));
}
function Be(e) {
  var t = e._currentValue;
  if (Zs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Dn === null)) {
      if (Aa === null) throw Error(x(308));
      (Dn = e), (Aa.dependencies = { lanes: 0, firstContext: e });
    } else Dn = Dn.next = e;
  return t;
}
var un = null;
function nu(e) {
  un === null ? (un = [e]) : un.push(e);
}
function dp(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), nu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    gt(e, r)
  );
}
function gt(e, t) {
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
var Rt = !1;
function ru(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function pp(e, t) {
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
function pt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ht(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), U & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      gt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), nu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    gt(e, n)
  );
}
function ia(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Bs(e, n);
  }
}
function Tc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      a = null;
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
        a === null ? (i = a = o) : (a = a.next = o), (n = n.next);
      } while (n !== null);
      a === null ? (i = a = t) : (a = a.next = t);
    } else i = a = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: a,
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
function Ra(e, t, n, r) {
  var i = e.updateQueue;
  Rt = !1;
  var a = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), o === null ? (a = u) : (o.next = u), (o = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = s)));
  }
  if (a !== null) {
    var f = i.baseState;
    (o = 0), (c = u = s = null), (l = a);
    do {
      var p = l.lane,
        y = l.eventTime;
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var g = e,
            w = l;
          switch (((p = t), (y = n), w.tag)) {
            case 1:
              if (((g = w.payload), typeof g == "function")) {
                f = g.call(y, f, p);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = w.payload),
                (p = typeof g == "function" ? g.call(y, f, p) : g),
                p == null)
              )
                break e;
              f = Z({}, f, p);
              break e;
            case 2:
              Rt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [l]) : p.push(l));
      } else
        (y = {
          eventTime: y,
          lane: p,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = y), (s = f)) : (c = c.next = y),
          (o |= p);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (p = l),
          (l = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (s = f),
      (i.baseState = s),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    (yn |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function Ac(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(x(191, i));
        i.call(r);
      }
    }
}
var mp = new dd.Component().refs;
function Vl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Z({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var to = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? _n(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ee(),
      i = Vt(e),
      a = pt(r, i);
    (a.payload = t),
      n != null && (a.callback = n),
      (t = Ht(e, a, i)),
      t !== null && (Xe(t, e, i, r), ia(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ee(),
      i = Vt(e),
      a = pt(r, i);
    (a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = Ht(e, a, i)),
      t !== null && (Xe(t, e, i, r), ia(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ee(),
      r = Vt(e),
      i = pt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Ht(e, i, r)),
      t !== null && (Xe(t, e, r, n), ia(t, e, r));
  },
};
function Rc(e, t, n, r, i, a, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, a, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !qr(n, r) || !qr(i, a)
      : !0
  );
}
function hp(e, t, n) {
  var r = !1,
    i = Kt,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = Be(a))
      : ((i = be(t) ? hn : Se.current),
        (r = t.contextTypes),
        (a = (r = r != null) ? Gn(e, i) : Kt)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = to),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function Lc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && to.enqueueReplaceState(t, t.state, null);
}
function Ql(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = mp), ru(e);
  var a = t.contextType;
  typeof a == "object" && a !== null
    ? (i.context = Be(a))
    : ((a = be(t) ? hn : Se.current), (i.context = Gn(e, a))),
    (i.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (Vl(e, t, a, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && to.enqueueReplaceState(i, i.state, null),
      Ra(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function wr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var i = r,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            l === mp && (l = i.refs = {}),
              o === null ? delete l[a] : (l[a] = o);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function Fi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ic(e) {
  var t = e._init;
  return t(e._payload);
}
function vp(e) {
  function t(m, d) {
    if (e) {
      var v = m.deletions;
      v === null ? ((m.deletions = [d]), (m.flags |= 16)) : v.push(d);
    }
  }
  function n(m, d) {
    if (!e) return null;
    for (; d !== null; ) t(m, d), (d = d.sibling);
    return null;
  }
  function r(m, d) {
    for (m = new Map(); d !== null; )
      d.key !== null ? m.set(d.key, d) : m.set(d.index, d), (d = d.sibling);
    return m;
  }
  function i(m, d) {
    return (m = Qt(m, d)), (m.index = 0), (m.sibling = null), m;
  }
  function a(m, d, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < d ? ((m.flags |= 2), d) : v)
            : ((m.flags |= 2), d))
        : ((m.flags |= 1048576), d)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, d, v, k) {
    return d === null || d.tag !== 6
      ? ((d = Ko(v, m.mode, k)), (d.return = m), d)
      : ((d = i(d, v)), (d.return = m), d);
  }
  function s(m, d, v, k) {
    var S = v.type;
    return S === Pn
      ? c(m, d, v.props.children, k, v.key)
      : d !== null &&
        (d.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === At &&
            Ic(S) === d.type))
      ? ((k = i(d, v.props)), (k.ref = wr(m, d, v)), (k.return = m), k)
      : ((k = ca(v.type, v.key, v.props, null, m.mode, k)),
        (k.ref = wr(m, d, v)),
        (k.return = m),
        k);
  }
  function u(m, d, v, k) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== v.containerInfo ||
      d.stateNode.implementation !== v.implementation
      ? ((d = Go(v, m.mode, k)), (d.return = m), d)
      : ((d = i(d, v.children || [])), (d.return = m), d);
  }
  function c(m, d, v, k, S) {
    return d === null || d.tag !== 7
      ? ((d = mn(v, m.mode, k, S)), (d.return = m), d)
      : ((d = i(d, v)), (d.return = m), d);
  }
  function f(m, d, v) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = Ko("" + d, m.mode, v)), (d.return = m), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Ni:
          return (
            (v = ca(d.type, d.key, d.props, null, m.mode, v)),
            (v.ref = wr(m, null, d)),
            (v.return = m),
            v
          );
        case Nn:
          return (d = Go(d, m.mode, v)), (d.return = m), d;
        case At:
          var k = d._init;
          return f(m, k(d._payload), v);
      }
      if (Nr(d) || mr(d))
        return (d = mn(d, m.mode, v, null)), (d.return = m), d;
      Fi(m, d);
    }
    return null;
  }
  function p(m, d, v, k) {
    var S = d !== null ? d.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return S !== null ? null : l(m, d, "" + v, k);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ni:
          return v.key === S ? s(m, d, v, k) : null;
        case Nn:
          return v.key === S ? u(m, d, v, k) : null;
        case At:
          return (S = v._init), p(m, d, S(v._payload), k);
      }
      if (Nr(v) || mr(v)) return S !== null ? null : c(m, d, v, k, null);
      Fi(m, v);
    }
    return null;
  }
  function y(m, d, v, k, S) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (m = m.get(v) || null), l(d, m, "" + k, S);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Ni:
          return (m = m.get(k.key === null ? v : k.key) || null), s(d, m, k, S);
        case Nn:
          return (m = m.get(k.key === null ? v : k.key) || null), u(d, m, k, S);
        case At:
          var C = k._init;
          return y(m, d, v, C(k._payload), S);
      }
      if (Nr(k) || mr(k)) return (m = m.get(v) || null), c(d, m, k, S, null);
      Fi(d, k);
    }
    return null;
  }
  function g(m, d, v, k) {
    for (
      var S = null, C = null, b = d, R = (d = 0), $ = null;
      b !== null && R < v.length;
      R++
    ) {
      b.index > R ? (($ = b), (b = null)) : ($ = b.sibling);
      var z = p(m, b, v[R], k);
      if (z === null) {
        b === null && (b = $);
        break;
      }
      e && b && z.alternate === null && t(m, b),
        (d = a(z, d, R)),
        C === null ? (S = z) : (C.sibling = z),
        (C = z),
        (b = $);
    }
    if (R === v.length) return n(m, b), q && on(m, R), S;
    if (b === null) {
      for (; R < v.length; R++)
        (b = f(m, v[R], k)),
          b !== null &&
            ((d = a(b, d, R)), C === null ? (S = b) : (C.sibling = b), (C = b));
      return q && on(m, R), S;
    }
    for (b = r(m, b); R < v.length; R++)
      ($ = y(b, m, R, v[R], k)),
        $ !== null &&
          (e && $.alternate !== null && b.delete($.key === null ? R : $.key),
          (d = a($, d, R)),
          C === null ? (S = $) : (C.sibling = $),
          (C = $));
    return (
      e &&
        b.forEach(function (We) {
          return t(m, We);
        }),
      q && on(m, R),
      S
    );
  }
  function w(m, d, v, k) {
    var S = mr(v);
    if (typeof S != "function") throw Error(x(150));
    if (((v = S.call(v)), v == null)) throw Error(x(151));
    for (
      var C = (S = null), b = d, R = (d = 0), $ = null, z = v.next();
      b !== null && !z.done;
      R++, z = v.next()
    ) {
      b.index > R ? (($ = b), (b = null)) : ($ = b.sibling);
      var We = p(m, b, z.value, k);
      if (We === null) {
        b === null && (b = $);
        break;
      }
      e && b && We.alternate === null && t(m, b),
        (d = a(We, d, R)),
        C === null ? (S = We) : (C.sibling = We),
        (C = We),
        (b = $);
    }
    if (z.done) return n(m, b), q && on(m, R), S;
    if (b === null) {
      for (; !z.done; R++, z = v.next())
        (z = f(m, z.value, k)),
          z !== null &&
            ((d = a(z, d, R)), C === null ? (S = z) : (C.sibling = z), (C = z));
      return q && on(m, R), S;
    }
    for (b = r(m, b); !z.done; R++, z = v.next())
      (z = y(b, m, R, z.value, k)),
        z !== null &&
          (e && z.alternate !== null && b.delete(z.key === null ? R : z.key),
          (d = a(z, d, R)),
          C === null ? (S = z) : (C.sibling = z),
          (C = z));
    return (
      e &&
        b.forEach(function (dr) {
          return t(m, dr);
        }),
      q && on(m, R),
      S
    );
  }
  function N(m, d, v, k) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Pn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Ni:
          e: {
            for (var S = v.key, C = d; C !== null; ) {
              if (C.key === S) {
                if (((S = v.type), S === Pn)) {
                  if (C.tag === 7) {
                    n(m, C.sibling),
                      (d = i(C, v.props.children)),
                      (d.return = m),
                      (m = d);
                    break e;
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === At &&
                    Ic(S) === C.type)
                ) {
                  n(m, C.sibling),
                    (d = i(C, v.props)),
                    (d.ref = wr(m, C, v)),
                    (d.return = m),
                    (m = d);
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            v.type === Pn
              ? ((d = mn(v.props.children, m.mode, k, v.key)),
                (d.return = m),
                (m = d))
              : ((k = ca(v.type, v.key, v.props, null, m.mode, k)),
                (k.ref = wr(m, d, v)),
                (k.return = m),
                (m = k));
          }
          return o(m);
        case Nn:
          e: {
            for (C = v.key; d !== null; ) {
              if (d.key === C)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === v.containerInfo &&
                  d.stateNode.implementation === v.implementation
                ) {
                  n(m, d.sibling),
                    (d = i(d, v.children || [])),
                    (d.return = m),
                    (m = d);
                  break e;
                } else {
                  n(m, d);
                  break;
                }
              else t(m, d);
              d = d.sibling;
            }
            (d = Go(v, m.mode, k)), (d.return = m), (m = d);
          }
          return o(m);
        case At:
          return (C = v._init), N(m, d, C(v._payload), k);
      }
      if (Nr(v)) return g(m, d, v, k);
      if (mr(v)) return w(m, d, v, k);
      Fi(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        d !== null && d.tag === 6
          ? (n(m, d.sibling), (d = i(d, v)), (d.return = m), (m = d))
          : (n(m, d), (d = Ko(v, m.mode, k)), (d.return = m), (m = d)),
        o(m))
      : n(m, d);
  }
  return N;
}
var Jn = vp(!0),
  gp = vp(!1),
  hi = {},
  ot = en(hi),
  Jr = en(hi),
  Zr = en(hi);
function cn(e) {
  if (e === hi) throw Error(x(174));
  return e;
}
function iu(e, t) {
  switch ((H(Zr, t), H(Jr, e), H(ot, hi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = xl(t, e));
  }
  Q(ot), H(ot, t);
}
function Zn() {
  Q(ot), Q(Jr), Q(Zr);
}
function yp(e) {
  cn(Zr.current);
  var t = cn(ot.current),
    n = xl(t, e.type);
  t !== n && (H(Jr, e), H(ot, n));
}
function au(e) {
  Jr.current === e && (Q(ot), Q(Jr));
}
var X = en(0);
function La(e) {
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
var Ho = [];
function ou() {
  for (var e = 0; e < Ho.length; e++)
    Ho[e]._workInProgressVersionPrimary = null;
  Ho.length = 0;
}
var aa = _t.ReactCurrentDispatcher,
  Wo = _t.ReactCurrentBatchConfig,
  gn = 0,
  J = null,
  le = null,
  de = null,
  Ia = !1,
  Dr = !1,
  ei = 0,
  mg = 0;
function ge() {
  throw Error(x(321));
}
function lu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Je(e[n], t[n])) return !1;
  return !0;
}
function su(e, t, n, r, i, a) {
  if (
    ((gn = a),
    (J = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (aa.current = e === null || e.memoizedState === null ? yg : wg),
    (e = n(r, i)),
    Dr)
  ) {
    a = 0;
    do {
      if (((Dr = !1), (ei = 0), 25 <= a)) throw Error(x(301));
      (a += 1),
        (de = le = null),
        (t.updateQueue = null),
        (aa.current = Sg),
        (e = n(r, i));
    } while (Dr);
  }
  if (
    ((aa.current = Da),
    (t = le !== null && le.next !== null),
    (gn = 0),
    (de = le = J = null),
    (Ia = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function uu() {
  var e = ei !== 0;
  return (ei = 0), e;
}
function tt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return de === null ? (J.memoizedState = de = e) : (de = de.next = e), de;
}
function He() {
  if (le === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = le.next;
  var t = de === null ? J.memoizedState : de.next;
  if (t !== null) (de = t), (le = e);
  else {
    if (e === null) throw Error(x(310));
    (le = e),
      (e = {
        memoizedState: le.memoizedState,
        baseState: le.baseState,
        baseQueue: le.baseQueue,
        queue: le.queue,
        next: null,
      }),
      de === null ? (J.memoizedState = de = e) : (de = de.next = e);
  }
  return de;
}
function ti(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Vo(e) {
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = le,
    i = r.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = a.next), (a.next = o);
    }
    (r.baseQueue = i = a), (n.pending = null);
  }
  if (i !== null) {
    (a = i.next), (r = r.baseState);
    var l = (o = null),
      s = null,
      u = a;
    do {
      var c = u.lane;
      if ((gn & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((l = s = f), (o = r)) : (s = s.next = f),
          (J.lanes |= c),
          (yn |= c);
      }
      u = u.next;
    } while (u !== null && u !== a);
    s === null ? (o = r) : (s.next = l),
      Je(r, t.memoizedState) || (Ne = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (a = i.lane), (J.lanes |= a), (yn |= a), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Qo(e) {
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (a = e(a, o.action)), (o = o.next);
    while (o !== i);
    Je(a, t.memoizedState) || (Ne = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a);
  }
  return [a, r];
}
function wp() {}
function Sp(e, t) {
  var n = J,
    r = He(),
    i = t(),
    a = !Je(r.memoizedState, i);
  if (
    (a && ((r.memoizedState = i), (Ne = !0)),
    (r = r.queue),
    cu(_p.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (de !== null && de.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ni(9, Ep.bind(null, n, r, i, t), void 0, null),
      pe === null)
    )
      throw Error(x(349));
    gn & 30 || kp(n, t, i);
  }
  return i;
}
function kp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ep(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), xp(t) && Cp(e);
}
function _p(e, t, n) {
  return n(function () {
    xp(t) && Cp(e);
  });
}
function xp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Je(e, n);
  } catch {
    return !0;
  }
}
function Cp(e) {
  var t = gt(e, 1);
  t !== null && Xe(t, e, 1, -1);
}
function Dc(e) {
  var t = tt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ti,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = gg.bind(null, J, e)),
    [t.memoizedState, e]
  );
}
function ni(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Np() {
  return He().memoizedState;
}
function oa(e, t, n, r) {
  var i = tt();
  (J.flags |= e),
    (i.memoizedState = ni(1 | t, n, void 0, r === void 0 ? null : r));
}
function no(e, t, n, r) {
  var i = He();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (le !== null) {
    var o = le.memoizedState;
    if (((a = o.destroy), r !== null && lu(r, o.deps))) {
      i.memoizedState = ni(t, n, a, r);
      return;
    }
  }
  (J.flags |= e), (i.memoizedState = ni(1 | t, n, a, r));
}
function zc(e, t) {
  return oa(8390656, 8, e, t);
}
function cu(e, t) {
  return no(2048, 8, e, t);
}
function Pp(e, t) {
  return no(4, 2, e, t);
}
function bp(e, t) {
  return no(4, 4, e, t);
}
function Op(e, t) {
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
function Tp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), no(4, 4, Op.bind(null, t, e), n)
  );
}
function fu() {}
function Ap(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && lu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Rp(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && lu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Lp(e, t, n) {
  return gn & 21
    ? (Je(n, t) || ((n = zd()), (J.lanes |= n), (yn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ne = !0)), (e.memoizedState = n));
}
function hg(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Wo.transition;
  Wo.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (Wo.transition = r);
  }
}
function Ip() {
  return He().memoizedState;
}
function vg(e, t, n) {
  var r = Vt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Dp(e))
  )
    zp(t, n);
  else if (((n = dp(e, t, n, r)), n !== null)) {
    var i = Ee();
    Xe(n, e, r, i), Fp(n, t, r);
  }
}
function gg(e, t, n) {
  var r = Vt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Dp(e)) zp(t, i);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = a(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Je(l, o))) {
          var s = t.interleaved;
          s === null
            ? ((i.next = i), nu(t))
            : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = dp(e, t, i, r)),
      n !== null && ((i = Ee()), Xe(n, e, r, i), Fp(n, t, r));
  }
}
function Dp(e) {
  var t = e.alternate;
  return e === J || (t !== null && t === J);
}
function zp(e, t) {
  Dr = Ia = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Fp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Bs(e, n);
  }
}
var Da = {
    readContext: Be,
    useCallback: ge,
    useContext: ge,
    useEffect: ge,
    useImperativeHandle: ge,
    useInsertionEffect: ge,
    useLayoutEffect: ge,
    useMemo: ge,
    useReducer: ge,
    useRef: ge,
    useState: ge,
    useDebugValue: ge,
    useDeferredValue: ge,
    useTransition: ge,
    useMutableSource: ge,
    useSyncExternalStore: ge,
    useId: ge,
    unstable_isNewReconciler: !1,
  },
  yg = {
    readContext: Be,
    useCallback: function (e, t) {
      return (tt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Be,
    useEffect: zc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        oa(4194308, 4, Op.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return oa(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return oa(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = tt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = tt();
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
        (e = e.dispatch = vg.bind(null, J, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = tt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Dc,
    useDebugValue: fu,
    useDeferredValue: function (e) {
      return (tt().memoizedState = e);
    },
    useTransition: function () {
      var e = Dc(!1),
        t = e[0];
      return (e = hg.bind(null, e[1])), (tt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = J,
        i = tt();
      if (q) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), pe === null)) throw Error(x(349));
        gn & 30 || kp(r, t, n);
      }
      i.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (i.queue = a),
        zc(_p.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        ni(9, Ep.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = tt(),
        t = pe.identifierPrefix;
      if (q) {
        var n = dt,
          r = ft;
        (n = (r & ~(1 << (32 - Ge(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ei++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = mg++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  wg = {
    readContext: Be,
    useCallback: Ap,
    useContext: Be,
    useEffect: cu,
    useImperativeHandle: Tp,
    useInsertionEffect: Pp,
    useLayoutEffect: bp,
    useMemo: Rp,
    useReducer: Vo,
    useRef: Np,
    useState: function () {
      return Vo(ti);
    },
    useDebugValue: fu,
    useDeferredValue: function (e) {
      var t = He();
      return Lp(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = Vo(ti)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: wp,
    useSyncExternalStore: Sp,
    useId: Ip,
    unstable_isNewReconciler: !1,
  },
  Sg = {
    readContext: Be,
    useCallback: Ap,
    useContext: Be,
    useEffect: cu,
    useImperativeHandle: Tp,
    useInsertionEffect: Pp,
    useLayoutEffect: bp,
    useMemo: Rp,
    useReducer: Qo,
    useRef: Np,
    useState: function () {
      return Qo(ti);
    },
    useDebugValue: fu,
    useDeferredValue: function (e) {
      var t = He();
      return le === null ? (t.memoizedState = e) : Lp(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = Qo(ti)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: wp,
    useSyncExternalStore: Sp,
    useId: Ip,
    unstable_isNewReconciler: !1,
  };
function er(e, t) {
  try {
    var n = "",
      r = t;
    do (n += qh(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (a) {
    i =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Yo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Yl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var kg = typeof WeakMap == "function" ? WeakMap : Map;
function Mp(e, t, n) {
  (n = pt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Fa || ((Fa = !0), (rs = r)), Yl(e, t);
    }),
    n
  );
}
function jp(e, t, n) {
  (n = pt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Yl(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (n.callback = function () {
        Yl(e, t),
          typeof r != "function" &&
            (Wt === null ? (Wt = new Set([this])) : Wt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Fc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new kg();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Dg.bind(null, e, t, n)), t.then(e, e));
}
function Mc(e) {
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
function jc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = pt(-1, 1)), (t.tag = 2), Ht(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Eg = _t.ReactCurrentOwner,
  Ne = !1;
function ke(e, t, n, r) {
  t.child = e === null ? gp(t, null, n, r) : Jn(t, e.child, n, r);
}
function Uc(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return (
    Vn(t, i),
    (r = su(e, t, n, r, a, i)),
    (n = uu()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        yt(e, t, i))
      : (q && n && Gs(t), (t.flags |= 1), ke(e, t, r, i), t.child)
  );
}
function $c(e, t, n, r, i) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" &&
      !wu(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), Up(e, t, a, r, i))
      : ((e = ca(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & i))) {
    var o = a.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : qr), n(o, r) && e.ref === t.ref)
    )
      return yt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Qt(a, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Up(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (qr(a, r) && e.ref === t.ref)
      if (((Ne = !1), (t.pendingProps = r = a), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ne = !0);
      else return (t.lanes = e.lanes), yt(e, t, i);
  }
  return ql(e, t, n, r, i);
}
function $p(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        H(Fn, Te),
        (Te |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          H(Fn, Te),
          (Te |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        H(Fn, Te),
        (Te |= r);
    }
  else
    a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
      H(Fn, Te),
      (Te |= r);
  return ke(e, t, i, n), t.child;
}
function Bp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ql(e, t, n, r, i) {
  var a = be(n) ? hn : Se.current;
  return (
    (a = Gn(t, a)),
    Vn(t, i),
    (n = su(e, t, n, r, a, i)),
    (r = uu()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        yt(e, t, i))
      : (q && r && Gs(t), (t.flags |= 1), ke(e, t, n, i), t.child)
  );
}
function Bc(e, t, n, r, i) {
  if (be(n)) {
    var a = !0;
    Pa(t);
  } else a = !1;
  if ((Vn(t, i), t.stateNode === null))
    la(e, t), hp(t, n, r), Ql(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var s = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Be(u))
      : ((u = be(n) ? hn : Se.current), (u = Gn(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || s !== u) && Lc(t, o, r, u)),
      (Rt = !1);
    var p = t.memoizedState;
    (o.state = p),
      Ra(t, r, o, i),
      (s = t.memoizedState),
      l !== r || p !== s || Pe.current || Rt
        ? (typeof c == "function" && (Vl(t, n, c, r), (s = t.memoizedState)),
          (l = Rt || Rc(t, n, l, r, p, s, u))
            ? (f ||
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
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      pp(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Qe(t.type, l)),
      (o.props = u),
      (f = t.pendingProps),
      (p = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Be(s))
        : ((s = be(n) ? hn : Se.current), (s = Gn(t, s)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== f || p !== s) && Lc(t, o, r, s)),
      (Rt = !1),
      (p = t.memoizedState),
      (o.state = p),
      Ra(t, r, o, i);
    var g = t.memoizedState;
    l !== f || p !== g || Pe.current || Rt
      ? (typeof y == "function" && (Vl(t, n, y, r), (g = t.memoizedState)),
        (u = Rt || Rc(t, n, u, r, p, g, s) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, g, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, g, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (o.props = r),
        (o.state = g),
        (o.context = s),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Kl(e, t, n, r, a, i);
}
function Kl(e, t, n, r, i, a) {
  Bp(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Pc(t, n, !1), yt(e, t, a);
  (r = t.stateNode), (Eg.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Jn(t, e.child, null, a)), (t.child = Jn(t, null, l, a)))
      : ke(e, t, l, a),
    (t.memoizedState = r.state),
    i && Pc(t, n, !0),
    t.child
  );
}
function Hp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Nc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Nc(e, t.context, !1),
    iu(e, t.containerInfo);
}
function Hc(e, t, n, r, i) {
  return Xn(), Js(i), (t.flags |= 256), ke(e, t, n, r), t.child;
}
var Gl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Xl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wp(e, t, n) {
  var r = t.pendingProps,
    i = X.current,
    a = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    H(X, i & 1),
    e === null)
  )
    return (
      Hl(t),
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
          a
            ? ((r = t.mode),
              (a = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = o))
                : (a = ao(o, r, 0, null)),
              (e = mn(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = Xl(n)),
              (t.memoizedState = Gl),
              e)
            : du(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return _g(e, t, o, r, l, i, n);
  if (a) {
    (a = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Qt(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (a = Qt(l, a)) : ((a = mn(a, o, n, null)), (a.flags |= 2)),
      (a.return = t),
      (r.return = t),
      (r.sibling = a),
      (t.child = r),
      (r = a),
      (a = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Xl(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (a.memoizedState = o),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = Gl),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = Qt(a, { mode: "visible", children: r.children })),
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
function du(e, t) {
  return (
    (t = ao({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Mi(e, t, n, r) {
  return (
    r !== null && Js(r),
    Jn(t, e.child, null, n),
    (e = du(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function _g(e, t, n, r, i, a, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Yo(Error(x(422)))), Mi(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = r.fallback),
        (i = t.mode),
        (r = ao({ mode: "visible", children: r.children }, i, 0, null)),
        (a = mn(a, i, o, null)),
        (a.flags |= 2),
        (r.return = t),
        (a.return = t),
        (r.sibling = a),
        (t.child = r),
        t.mode & 1 && Jn(t, e.child, null, o),
        (t.child.memoizedState = Xl(o)),
        (t.memoizedState = Gl),
        a);
  if (!(t.mode & 1)) return Mi(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (a = Error(x(419))), (r = Yo(a, r, void 0)), Mi(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), Ne || l)) {
    if (((r = pe), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== a.retryLane &&
          ((a.retryLane = i), gt(e, i), Xe(r, e, i, -1));
    }
    return yu(), (r = Yo(Error(x(421)))), Mi(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = zg.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (Ae = Bt(i.nextSibling)),
      (Re = t),
      (q = !0),
      (qe = null),
      e !== null &&
        ((Me[je++] = ft),
        (Me[je++] = dt),
        (Me[je++] = vn),
        (ft = e.id),
        (dt = e.overflow),
        (vn = t)),
      (t = du(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Wc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Wl(e.return, t, n);
}
function qo(e, t, n, r, i) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = i));
}
function Vp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    a = r.tail;
  if ((ke(e, t, r.children, n), (r = X.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Wc(e, n, t);
        else if (e.tag === 19) Wc(e, n, t);
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
  if ((H(X, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && La(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          qo(t, !1, i, n, a);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && La(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        qo(t, !0, n, null, a);
        break;
      case "together":
        qo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function la(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (yn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Qt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Qt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function xg(e, t, n) {
  switch (t.tag) {
    case 3:
      Hp(t), Xn();
      break;
    case 5:
      yp(t);
      break;
    case 1:
      be(t.type) && Pa(t);
      break;
    case 4:
      iu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      H(Ta, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (H(X, X.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Wp(e, t, n)
          : (H(X, X.current & 1),
            (e = yt(e, t, n)),
            e !== null ? e.sibling : null);
      H(X, X.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Vp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        H(X, X.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), $p(e, t, n);
  }
  return yt(e, t, n);
}
var Qp, Jl, Yp, qp;
Qp = function (e, t) {
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
Jl = function () {};
Yp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), cn(ot.current);
    var a = null;
    switch (n) {
      case "input":
        (i = Sl(e, i)), (r = Sl(e, r)), (a = []);
        break;
      case "select":
        (i = Z({}, i, { value: void 0 })),
          (r = Z({}, r, { value: void 0 })),
          (a = []);
        break;
      case "textarea":
        (i = _l(e, i)), (r = _l(e, r)), (a = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ca);
    }
    Cl(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            ($r.hasOwnProperty(u)
              ? a || (a = [])
              : (a = a || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                l[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (a || (a = []), a.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (a = a || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (a = a || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              ($r.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && W("scroll", e),
                  a || l === s || (a = []))
                : (a = a || []).push(u, s));
    }
    n && (a = a || []).push("style", n);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
qp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sr(e, t) {
  if (!q)
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
function ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Cg(e, t, n) {
  var r = t.pendingProps;
  switch ((Xs(t), t.tag)) {
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
      return ye(t), null;
    case 1:
      return be(t.type) && Na(), ye(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Zn(),
        Q(Pe),
        Q(Se),
        ou(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (zi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), qe !== null && (os(qe), (qe = null)))),
        Jl(e, t),
        ye(t),
        null
      );
    case 5:
      au(t);
      var i = cn(Zr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Yp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return ye(t), null;
        }
        if (((e = cn(ot.current)), zi(t))) {
          (r = t.stateNode), (n = t.type);
          var a = t.memoizedProps;
          switch (((r[nt] = t), (r[Xr] = a), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              W("cancel", r), W("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              W("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < br.length; i++) W(br[i], r);
              break;
            case "source":
              W("error", r);
              break;
            case "img":
            case "image":
            case "link":
              W("error", r), W("load", r);
              break;
            case "details":
              W("toggle", r);
              break;
            case "input":
              Zu(r, a), W("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!a.multiple }),
                W("invalid", r);
              break;
            case "textarea":
              tc(r, a), W("invalid", r);
          }
          Cl(n, a), (i = null);
          for (var o in a)
            if (a.hasOwnProperty(o)) {
              var l = a[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (a.suppressHydrationWarning !== !0 &&
                      Di(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (a.suppressHydrationWarning !== !0 &&
                      Di(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : $r.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  W("scroll", r);
            }
          switch (n) {
            case "input":
              Pi(r), ec(r, a, !0);
              break;
            case "textarea":
              Pi(r), nc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Ca);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = kd(n)),
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
            (e[nt] = t),
            (e[Xr] = r),
            Qp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Nl(n, r)), n)) {
              case "dialog":
                W("cancel", e), W("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                W("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < br.length; i++) W(br[i], e);
                i = r;
                break;
              case "source":
                W("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                W("error", e), W("load", e), (i = r);
                break;
              case "details":
                W("toggle", e), (i = r);
                break;
              case "input":
                Zu(e, r), (i = Sl(e, r)), W("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Z({}, r, { value: void 0 })),
                  W("invalid", e);
                break;
              case "textarea":
                tc(e, r), (i = _l(e, r)), W("invalid", e);
                break;
              default:
                i = r;
            }
            Cl(n, i), (l = i);
            for (a in l)
              if (l.hasOwnProperty(a)) {
                var s = l[a];
                a === "style"
                  ? xd(e, s)
                  : a === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Ed(e, s))
                  : a === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Br(e, s)
                    : typeof s == "number" && Br(e, "" + s)
                  : a !== "suppressContentEditableWarning" &&
                    a !== "suppressHydrationWarning" &&
                    a !== "autoFocus" &&
                    ($r.hasOwnProperty(a)
                      ? s != null && a === "onScroll" && W("scroll", e)
                      : s != null && zs(e, a, s, o));
              }
            switch (n) {
              case "input":
                Pi(e), ec(e, r, !1);
                break;
              case "textarea":
                Pi(e), nc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + qt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? $n(e, !!r.multiple, a, !1)
                    : r.defaultValue != null &&
                      $n(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ca);
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
      return ye(t), null;
    case 6:
      if (e && t.stateNode != null) qp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = cn(Zr.current)), cn(ot.current), zi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[nt] = t),
            (a = r.nodeValue !== n) && ((e = Re), e !== null))
          )
            switch (e.tag) {
              case 3:
                Di(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Di(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[nt] = t),
            (t.stateNode = r);
      }
      return ye(t), null;
    case 13:
      if (
        (Q(X),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (q && Ae !== null && t.mode & 1 && !(t.flags & 128))
          fp(), Xn(), (t.flags |= 98560), (a = !1);
        else if (((a = zi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(x(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(x(317));
            a[nt] = t;
          } else
            Xn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ye(t), (a = !1);
        } else qe !== null && (os(qe), (qe = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || X.current & 1 ? se === 0 && (se = 3) : yu())),
          t.updateQueue !== null && (t.flags |= 4),
          ye(t),
          null);
    case 4:
      return (
        Zn(), Jl(e, t), e === null && Kr(t.stateNode.containerInfo), ye(t), null
      );
    case 10:
      return tu(t.type._context), ye(t), null;
    case 17:
      return be(t.type) && Na(), ye(t), null;
    case 19:
      if ((Q(X), (a = t.memoizedState), a === null)) return ye(t), null;
      if (((r = (t.flags & 128) !== 0), (o = a.rendering), o === null))
        if (r) Sr(a, !1);
        else {
          if (se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = La(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Sr(a, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (a = n),
                    (e = r),
                    (a.flags &= 14680066),
                    (o = a.alternate),
                    o === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = o.childLanes),
                        (a.lanes = o.lanes),
                        (a.child = o.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = o.memoizedProps),
                        (a.memoizedState = o.memoizedState),
                        (a.updateQueue = o.updateQueue),
                        (a.type = o.type),
                        (e = o.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return H(X, (X.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            ie() > tr &&
            ((t.flags |= 128), (r = !0), Sr(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = La(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Sr(a, !0),
              a.tail === null && a.tailMode === "hidden" && !o.alternate && !q)
            )
              return ye(t), null;
          } else
            2 * ie() - a.renderingStartTime > tr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Sr(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = a.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (a.last = o));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = ie()),
          (t.sibling = null),
          (n = X.current),
          H(X, r ? (n & 1) | 2 : n & 1),
          t)
        : (ye(t), null);
    case 22:
    case 23:
      return (
        gu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Te & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function Ng(e, t) {
  switch ((Xs(t), t.tag)) {
    case 1:
      return (
        be(t.type) && Na(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Zn(),
        Q(Pe),
        Q(Se),
        ou(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return au(t), null;
    case 13:
      if ((Q(X), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        Xn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Q(X), null;
    case 4:
      return Zn(), null;
    case 10:
      return tu(t.type._context), null;
    case 22:
    case 23:
      return gu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ji = !1,
  we = !1,
  Pg = typeof WeakSet == "function" ? WeakSet : Set,
  T = null;
function zn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ee(e, t, r);
      }
    else n.current = null;
}
function Zl(e, t, n) {
  try {
    n();
  } catch (r) {
    ee(e, t, r);
  }
}
var Vc = !1;
function bg(e, t) {
  if (((zl = Ea), (e = Jd()), Ks(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            s = -1,
            u = 0,
            c = 0,
            f = e,
            p = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = o + i),
                f !== a || (r !== 0 && f.nodeType !== 3) || (s = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (p = f), (f = y);
            for (;;) {
              if (f === e) break t;
              if (
                (p === n && ++u === i && (l = o),
                p === a && ++c === r && (s = o),
                (y = f.nextSibling) !== null)
              )
                break;
              (f = p), (p = f.parentNode);
            }
            f = y;
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Fl = { focusedElem: e, selectionRange: n }, Ea = !1, T = t; T !== null; )
    if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (T = e);
    else
      for (; T !== null; ) {
        t = T;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var w = g.memoizedProps,
                    N = g.memoizedState,
                    m = t.stateNode,
                    d = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Qe(t.type, w),
                      N
                    );
                  m.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (k) {
          ee(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (T = e);
          break;
        }
        T = t.return;
      }
  return (g = Vc), (Vc = !1), g;
}
function zr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        (i.destroy = void 0), a !== void 0 && Zl(t, n, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ro(e, t) {
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
function es(e) {
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
function Kp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Kp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[nt], delete t[Xr], delete t[Ul], delete t[cg], delete t[fg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Gp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Qc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Gp(e.return)) return null;
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
function ts(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Ca));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ts(e, t, n), e = e.sibling; e !== null; ) ts(e, t, n), (e = e.sibling);
}
function ns(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ns(e, t, n), e = e.sibling; e !== null; ) ns(e, t, n), (e = e.sibling);
}
var me = null,
  Ye = !1;
function Nt(e, t, n) {
  for (n = n.child; n !== null; ) Xp(e, t, n), (n = n.sibling);
}
function Xp(e, t, n) {
  if (at && typeof at.onCommitFiberUnmount == "function")
    try {
      at.onCommitFiberUnmount(Ka, n);
    } catch {}
  switch (n.tag) {
    case 5:
      we || zn(n, t);
    case 6:
      var r = me,
        i = Ye;
      (me = null),
        Nt(e, t, n),
        (me = r),
        (Ye = i),
        me !== null &&
          (Ye
            ? ((e = me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : me.removeChild(n.stateNode));
      break;
    case 18:
      me !== null &&
        (Ye
          ? ((e = me),
            (n = n.stateNode),
            e.nodeType === 8
              ? $o(e.parentNode, n)
              : e.nodeType === 1 && $o(e, n),
            Qr(e))
          : $o(me, n.stateNode));
      break;
    case 4:
      (r = me),
        (i = Ye),
        (me = n.stateNode.containerInfo),
        (Ye = !0),
        Nt(e, t, n),
        (me = r),
        (Ye = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !we &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var a = i,
            o = a.destroy;
          (a = a.tag),
            o !== void 0 && (a & 2 || a & 4) && Zl(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      Nt(e, t, n);
      break;
    case 1:
      if (
        !we &&
        (zn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          ee(n, t, l);
        }
      Nt(e, t, n);
      break;
    case 21:
      Nt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((we = (r = we) || n.memoizedState !== null), Nt(e, t, n), (we = r))
        : Nt(e, t, n);
      break;
    default:
      Nt(e, t, n);
  }
}
function Yc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Pg()),
      t.forEach(function (r) {
        var i = Fg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ve(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var a = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (me = l.stateNode), (Ye = !1);
              break e;
            case 3:
              (me = l.stateNode.containerInfo), (Ye = !0);
              break e;
            case 4:
              (me = l.stateNode.containerInfo), (Ye = !0);
              break e;
          }
          l = l.return;
        }
        if (me === null) throw Error(x(160));
        Xp(a, o, i), (me = null), (Ye = !1);
        var s = i.alternate;
        s !== null && (s.return = null), (i.return = null);
      } catch (u) {
        ee(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Jp(t, e), (t = t.sibling);
}
function Jp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ve(t, e), et(e), r & 4)) {
        try {
          zr(3, e, e.return), ro(3, e);
        } catch (w) {
          ee(e, e.return, w);
        }
        try {
          zr(5, e, e.return);
        } catch (w) {
          ee(e, e.return, w);
        }
      }
      break;
    case 1:
      Ve(t, e), et(e), r & 512 && n !== null && zn(n, n.return);
      break;
    case 5:
      if (
        (Ve(t, e),
        et(e),
        r & 512 && n !== null && zn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Br(i, "");
        } catch (w) {
          ee(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var a = e.memoizedProps,
          o = n !== null ? n.memoizedProps : a,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === "input" && a.type === "radio" && a.name != null && wd(i, a),
              Nl(l, o);
            var u = Nl(l, a);
            for (o = 0; o < s.length; o += 2) {
              var c = s[o],
                f = s[o + 1];
              c === "style"
                ? xd(i, f)
                : c === "dangerouslySetInnerHTML"
                ? Ed(i, f)
                : c === "children"
                ? Br(i, f)
                : zs(i, c, f, u);
            }
            switch (l) {
              case "input":
                kl(i, a);
                break;
              case "textarea":
                Sd(i, a);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var y = a.value;
                y != null
                  ? $n(i, !!a.multiple, y, !1)
                  : p !== !!a.multiple &&
                    (a.defaultValue != null
                      ? $n(i, !!a.multiple, a.defaultValue, !0)
                      : $n(i, !!a.multiple, a.multiple ? [] : "", !1));
            }
            i[Xr] = a;
          } catch (w) {
            ee(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ve(t, e), et(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (i = e.stateNode), (a = e.memoizedProps);
        try {
          i.nodeValue = a;
        } catch (w) {
          ee(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ve(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Qr(t.containerInfo);
        } catch (w) {
          ee(e, e.return, w);
        }
      break;
    case 4:
      Ve(t, e), et(e);
      break;
    case 13:
      Ve(t, e),
        et(e),
        (i = e.child),
        i.flags & 8192 &&
          ((a = i.memoizedState !== null),
          (i.stateNode.isHidden = a),
          !a ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (hu = ie())),
        r & 4 && Yc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((we = (u = we) || c), Ve(t, e), (we = u)) : Ve(t, e),
        et(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (T = e, c = e.child; c !== null; ) {
            for (f = T = c; T !== null; ) {
              switch (((p = T), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zr(4, p, p.return);
                  break;
                case 1:
                  zn(p, p.return);
                  var g = p.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (w) {
                      ee(r, n, w);
                    }
                  }
                  break;
                case 5:
                  zn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Kc(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = p), (T = y)) : Kc(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((a = i.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((l = f.stateNode),
                      (s = f.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (l.style.display = _d("display", o)));
              } catch (w) {
                ee(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (w) {
                ee(e, e.return, w);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ve(t, e), et(e), r & 4 && Yc(e);
      break;
    case 21:
      break;
    default:
      Ve(t, e), et(e);
  }
}
function et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Gp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Br(i, ""), (r.flags &= -33));
          var a = Qc(e);
          ns(e, a, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = Qc(e);
          ts(e, l, o);
          break;
        default:
          throw Error(x(161));
      }
    } catch (s) {
      ee(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Og(e, t, n) {
  (T = e), Zp(e);
}
function Zp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var i = T,
      a = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || ji;
      if (!o) {
        var l = i.alternate,
          s = (l !== null && l.memoizedState !== null) || we;
        l = ji;
        var u = we;
        if (((ji = o), (we = s) && !u))
          for (T = i; T !== null; )
            (o = T),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Gc(i)
                : s !== null
                ? ((s.return = o), (T = s))
                : Gc(i);
        for (; a !== null; ) (T = a), Zp(a), (a = a.sibling);
        (T = i), (ji = l), (we = u);
      }
      qc(e);
    } else
      i.subtreeFlags & 8772 && a !== null ? ((a.return = i), (T = a)) : qc(e);
  }
}
function qc(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              we || ro(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !we)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Qe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              a !== null && Ac(t, a, r);
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
                Ac(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Qr(f);
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
              throw Error(x(163));
          }
        we || (t.flags & 512 && es(t));
      } catch (p) {
        ee(t, t.return, p);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function Kc(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function Gc(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ro(4, t);
          } catch (s) {
            ee(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ee(t, i, s);
            }
          }
          var a = t.return;
          try {
            es(t);
          } catch (s) {
            ee(t, a, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            es(t);
          } catch (s) {
            ee(t, o, s);
          }
      }
    } catch (s) {
      ee(t, t.return, s);
    }
    if (t === e) {
      T = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (T = l);
      break;
    }
    T = t.return;
  }
}
var Tg = Math.ceil,
  za = _t.ReactCurrentDispatcher,
  pu = _t.ReactCurrentOwner,
  $e = _t.ReactCurrentBatchConfig,
  U = 0,
  pe = null,
  ae = null,
  he = 0,
  Te = 0,
  Fn = en(0),
  se = 0,
  ri = null,
  yn = 0,
  io = 0,
  mu = 0,
  Fr = null,
  Ce = null,
  hu = 0,
  tr = 1 / 0,
  ut = null,
  Fa = !1,
  rs = null,
  Wt = null,
  Ui = !1,
  zt = null,
  Ma = 0,
  Mr = 0,
  is = null,
  sa = -1,
  ua = 0;
function Ee() {
  return U & 6 ? ie() : sa !== -1 ? sa : (sa = ie());
}
function Vt(e) {
  return e.mode & 1
    ? U & 2 && he !== 0
      ? he & -he
      : pg.transition !== null
      ? (ua === 0 && (ua = zd()), ua)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Hd(e.type))),
        e)
    : 1;
}
function Xe(e, t, n, r) {
  if (50 < Mr) throw ((Mr = 0), (is = null), Error(x(185)));
  di(e, n, r),
    (!(U & 2) || e !== pe) &&
      (e === pe && (!(U & 2) && (io |= n), se === 4 && It(e, he)),
      Oe(e, r),
      n === 1 && U === 0 && !(t.mode & 1) && ((tr = ie() + 500), eo && tn()));
}
function Oe(e, t) {
  var n = e.callbackNode;
  pv(e, t);
  var r = ka(e, e === pe ? he : 0);
  if (r === 0)
    n !== null && ac(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ac(n), t === 1))
      e.tag === 0 ? dg(Xc.bind(null, e)) : sp(Xc.bind(null, e)),
        sg(function () {
          !(U & 6) && tn();
        }),
        (n = null);
    else {
      switch (Fd(r)) {
        case 1:
          n = $s;
          break;
        case 4:
          n = Id;
          break;
        case 16:
          n = Sa;
          break;
        case 536870912:
          n = Dd;
          break;
        default:
          n = Sa;
      }
      n = lm(n, em.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function em(e, t) {
  if (((sa = -1), (ua = 0), U & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (Qn() && e.callbackNode !== n) return null;
  var r = ka(e, e === pe ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ja(e, r);
  else {
    t = r;
    var i = U;
    U |= 2;
    var a = nm();
    (pe !== e || he !== t) && ((ut = null), (tr = ie() + 500), pn(e, t));
    do
      try {
        Lg();
        break;
      } catch (l) {
        tm(e, l);
      }
    while (1);
    eu(),
      (za.current = a),
      (U = i),
      ae !== null ? (t = 0) : ((pe = null), (he = 0), (t = se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Al(e)), i !== 0 && ((r = i), (t = as(e, i)))), t === 1)
    )
      throw ((n = ri), pn(e, 0), It(e, r), Oe(e, ie()), n);
    if (t === 6) It(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Ag(i) &&
          ((t = ja(e, r)),
          t === 2 && ((a = Al(e)), a !== 0 && ((r = a), (t = as(e, a)))),
          t === 1))
      )
        throw ((n = ri), pn(e, 0), It(e, r), Oe(e, ie()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          ln(e, Ce, ut);
          break;
        case 3:
          if (
            (It(e, r), (r & 130023424) === r && ((t = hu + 500 - ie()), 10 < t))
          ) {
            if (ka(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ee(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = jl(ln.bind(null, e, Ce, ut), t);
            break;
          }
          ln(e, Ce, ut);
          break;
        case 4:
          if ((It(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Ge(r);
            (a = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~a);
          }
          if (
            ((r = i),
            (r = ie() - r),
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
                : 1960 * Tg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = jl(ln.bind(null, e, Ce, ut), r);
            break;
          }
          ln(e, Ce, ut);
          break;
        case 5:
          ln(e, Ce, ut);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return Oe(e, ie()), e.callbackNode === n ? em.bind(null, e) : null;
}
function as(e, t) {
  var n = Fr;
  return (
    e.current.memoizedState.isDehydrated && (pn(e, t).flags |= 256),
    (e = ja(e, t)),
    e !== 2 && ((t = Ce), (Ce = n), t !== null && os(t)),
    e
  );
}
function os(e) {
  Ce === null ? (Ce = e) : Ce.push.apply(Ce, e);
}
function Ag(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!Je(a(), i)) return !1;
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
function It(e, t) {
  for (
    t &= ~mu,
      t &= ~io,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ge(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Xc(e) {
  if (U & 6) throw Error(x(327));
  Qn();
  var t = ka(e, 0);
  if (!(t & 1)) return Oe(e, ie()), null;
  var n = ja(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Al(e);
    r !== 0 && ((t = r), (n = as(e, r)));
  }
  if (n === 1) throw ((n = ri), pn(e, 0), It(e, t), Oe(e, ie()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    ln(e, Ce, ut),
    Oe(e, ie()),
    null
  );
}
function vu(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    (U = n), U === 0 && ((tr = ie() + 500), eo && tn());
  }
}
function wn(e) {
  zt !== null && zt.tag === 0 && !(U & 6) && Qn();
  var t = U;
  U |= 1;
  var n = $e.transition,
    r = B;
  try {
    if ((($e.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), ($e.transition = n), (U = t), !(U & 6) && tn();
  }
}
function gu() {
  (Te = Fn.current), Q(Fn);
}
function pn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), lg(n)), ae !== null))
    for (n = ae.return; n !== null; ) {
      var r = n;
      switch ((Xs(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Na();
          break;
        case 3:
          Zn(), Q(Pe), Q(Se), ou();
          break;
        case 5:
          au(r);
          break;
        case 4:
          Zn();
          break;
        case 13:
          Q(X);
          break;
        case 19:
          Q(X);
          break;
        case 10:
          tu(r.type._context);
          break;
        case 22:
        case 23:
          gu();
      }
      n = n.return;
    }
  if (
    ((pe = e),
    (ae = e = Qt(e.current, null)),
    (he = Te = t),
    (se = 0),
    (ri = null),
    (mu = io = yn = 0),
    (Ce = Fr = null),
    un !== null)
  ) {
    for (t = 0; t < un.length; t++)
      if (((n = un[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          a = n.pending;
        if (a !== null) {
          var o = a.next;
          (a.next = i), (r.next = o);
        }
        n.pending = r;
      }
    un = null;
  }
  return e;
}
function tm(e, t) {
  do {
    var n = ae;
    try {
      if ((eu(), (aa.current = Da), Ia)) {
        for (var r = J.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ia = !1;
      }
      if (
        ((gn = 0),
        (de = le = J = null),
        (Dr = !1),
        (ei = 0),
        (pu.current = null),
        n === null || n.return === null)
      ) {
        (se = 1), (ri = t), (ae = null);
        break;
      }
      e: {
        var a = e,
          o = n.return,
          l = n,
          s = t;
        if (
          ((t = he),
          (l.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = c.alternate;
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = Mc(o);
          if (y !== null) {
            (y.flags &= -257),
              jc(y, o, l, a, t),
              y.mode & 1 && Fc(a, u, t),
              (t = y),
              (s = u);
            var g = t.updateQueue;
            if (g === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Fc(a, u, t), yu();
              break e;
            }
            s = Error(x(426));
          }
        } else if (q && l.mode & 1) {
          var N = Mc(o);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              jc(N, o, l, a, t),
              Js(er(s, l));
            break e;
          }
        }
        (a = s = er(s, l)),
          se !== 4 && (se = 2),
          Fr === null ? (Fr = [a]) : Fr.push(a),
          (a = o);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var m = Mp(a, s, t);
              Tc(a, m);
              break e;
            case 1:
              l = s;
              var d = a.type,
                v = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Wt === null || !Wt.has(v))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var k = jp(a, l, t);
                Tc(a, k);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      im(n);
    } catch (S) {
      (t = S), ae === n && n !== null && (ae = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function nm() {
  var e = za.current;
  return (za.current = Da), e === null ? Da : e;
}
function yu() {
  (se === 0 || se === 3 || se === 2) && (se = 4),
    pe === null || (!(yn & 268435455) && !(io & 268435455)) || It(pe, he);
}
function ja(e, t) {
  var n = U;
  U |= 2;
  var r = nm();
  (pe !== e || he !== t) && ((ut = null), pn(e, t));
  do
    try {
      Rg();
      break;
    } catch (i) {
      tm(e, i);
    }
  while (1);
  if ((eu(), (U = n), (za.current = r), ae !== null)) throw Error(x(261));
  return (pe = null), (he = 0), se;
}
function Rg() {
  for (; ae !== null; ) rm(ae);
}
function Lg() {
  for (; ae !== null && !iv(); ) rm(ae);
}
function rm(e) {
  var t = om(e.alternate, e, Te);
  (e.memoizedProps = e.pendingProps),
    t === null ? im(e) : (ae = t),
    (pu.current = null);
}
function im(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ng(n, t)), n !== null)) {
        (n.flags &= 32767), (ae = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (se = 6), (ae = null);
        return;
      }
    } else if (((n = Cg(n, t, Te)), n !== null)) {
      ae = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ae = t;
      return;
    }
    ae = t = e;
  } while (t !== null);
  se === 0 && (se = 5);
}
function ln(e, t, n) {
  var r = B,
    i = $e.transition;
  try {
    ($e.transition = null), (B = 1), Ig(e, t, n, r);
  } finally {
    ($e.transition = i), (B = r);
  }
  return null;
}
function Ig(e, t, n, r) {
  do Qn();
  while (zt !== null);
  if (U & 6) throw Error(x(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = n.lanes | n.childLanes;
  if (
    (mv(e, a),
    e === pe && ((ae = pe = null), (he = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ui ||
      ((Ui = !0),
      lm(Sa, function () {
        return Qn(), null;
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    (a = $e.transition), ($e.transition = null);
    var o = B;
    B = 1;
    var l = U;
    (U |= 4),
      (pu.current = null),
      bg(e, n),
      Jp(n, e),
      eg(Fl),
      (Ea = !!zl),
      (Fl = zl = null),
      (e.current = n),
      Og(n),
      av(),
      (U = l),
      (B = o),
      ($e.transition = a);
  } else e.current = n;
  if (
    (Ui && ((Ui = !1), (zt = e), (Ma = i)),
    (a = e.pendingLanes),
    a === 0 && (Wt = null),
    sv(n.stateNode),
    Oe(e, ie()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Fa) throw ((Fa = !1), (e = rs), (rs = null), e);
  return (
    Ma & 1 && e.tag !== 0 && Qn(),
    (a = e.pendingLanes),
    a & 1 ? (e === is ? Mr++ : ((Mr = 0), (is = e))) : (Mr = 0),
    tn(),
    null
  );
}
function Qn() {
  if (zt !== null) {
    var e = Fd(Ma),
      t = $e.transition,
      n = B;
    try {
      if ((($e.transition = null), (B = 16 > e ? 16 : e), zt === null))
        var r = !1;
      else {
        if (((e = zt), (zt = null), (Ma = 0), U & 6)) throw Error(x(331));
        var i = U;
        for (U |= 4, T = e.current; T !== null; ) {
          var a = T,
            o = a.child;
          if (T.flags & 16) {
            var l = a.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (T = u; T !== null; ) {
                  var c = T;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zr(8, c, a);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (T = f);
                  else
                    for (; T !== null; ) {
                      c = T;
                      var p = c.sibling,
                        y = c.return;
                      if ((Kp(c), c === u)) {
                        T = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = y), (T = p);
                        break;
                      }
                      T = y;
                    }
                }
              }
              var g = a.alternate;
              if (g !== null) {
                var w = g.child;
                if (w !== null) {
                  g.child = null;
                  do {
                    var N = w.sibling;
                    (w.sibling = null), (w = N);
                  } while (w !== null);
                }
              }
              T = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) (o.return = a), (T = o);
          else
            e: for (; T !== null; ) {
              if (((a = T), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zr(9, a, a.return);
                }
              var m = a.sibling;
              if (m !== null) {
                (m.return = a.return), (T = m);
                break e;
              }
              T = a.return;
            }
        }
        var d = e.current;
        for (T = d; T !== null; ) {
          o = T;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (T = v);
          else
            e: for (o = d; T !== null; ) {
              if (((l = T), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ro(9, l);
                  }
                } catch (S) {
                  ee(l, l.return, S);
                }
              if (l === o) {
                T = null;
                break e;
              }
              var k = l.sibling;
              if (k !== null) {
                (k.return = l.return), (T = k);
                break e;
              }
              T = l.return;
            }
        }
        if (
          ((U = i), tn(), at && typeof at.onPostCommitFiberRoot == "function")
        )
          try {
            at.onPostCommitFiberRoot(Ka, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), ($e.transition = t);
    }
  }
  return !1;
}
function Jc(e, t, n) {
  (t = er(n, t)),
    (t = Mp(e, t, 1)),
    (e = Ht(e, t, 1)),
    (t = Ee()),
    e !== null && (di(e, 1, t), Oe(e, t));
}
function ee(e, t, n) {
  if (e.tag === 3) Jc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Jc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Wt === null || !Wt.has(r)))
        ) {
          (e = er(n, e)),
            (e = jp(t, e, 1)),
            (t = Ht(t, e, 1)),
            (e = Ee()),
            t !== null && (di(t, 1, e), Oe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Dg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ee()),
    (e.pingedLanes |= e.suspendedLanes & n),
    pe === e &&
      (he & n) === n &&
      (se === 4 || (se === 3 && (he & 130023424) === he && 500 > ie() - hu)
        ? pn(e, 0)
        : (mu |= n)),
    Oe(e, t);
}
function am(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ti), (Ti <<= 1), !(Ti & 130023424) && (Ti = 4194304))
      : (t = 1));
  var n = Ee();
  (e = gt(e, t)), e !== null && (di(e, t, n), Oe(e, n));
}
function zg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), am(e, n);
}
function Fg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), am(e, n);
}
var om;
om = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pe.current) Ne = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ne = !1), xg(e, t, n);
      Ne = !!(e.flags & 131072);
    }
  else (Ne = !1), q && t.flags & 1048576 && up(t, Oa, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      la(e, t), (e = t.pendingProps);
      var i = Gn(t, Se.current);
      Vn(t, n), (i = su(null, t, r, e, i, n));
      var a = uu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            be(r) ? ((a = !0), Pa(t)) : (a = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ru(t),
            (i.updater = to),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ql(t, r, e, n),
            (t = Kl(null, t, r, !0, a, n)))
          : ((t.tag = 0), q && a && Gs(t), ke(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (la(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = jg(r)),
          (e = Qe(r, e)),
          i)
        ) {
          case 0:
            t = ql(null, t, r, e, n);
            break e;
          case 1:
            t = Bc(null, t, r, e, n);
            break e;
          case 11:
            t = Uc(null, t, r, e, n);
            break e;
          case 14:
            t = $c(null, t, r, Qe(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        ql(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        Bc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Hp(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (a = t.memoizedState),
          (i = a.element),
          pp(e, t),
          Ra(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (i = er(Error(x(423)), t)), (t = Hc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = er(Error(x(424)), t)), (t = Hc(e, t, r, n, i));
            break e;
          } else
            for (
              Ae = Bt(t.stateNode.containerInfo.firstChild),
                Re = t,
                q = !0,
                qe = null,
                n = gp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Xn(), r === i)) {
            t = yt(e, t, n);
            break e;
          }
          ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        yp(t),
        e === null && Hl(t),
        (r = t.type),
        (i = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Ml(r, i) ? (o = null) : a !== null && Ml(r, a) && (t.flags |= 32),
        Bp(e, t),
        ke(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Hl(t), null;
    case 13:
      return Wp(e, t, n);
    case 4:
      return (
        iu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Jn(t, null, r, n)) : ke(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        Uc(e, t, r, i, n)
      );
    case 7:
      return ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (a = t.memoizedProps),
          (o = i.value),
          H(Ta, r._currentValue),
          (r._currentValue = o),
          a !== null)
        )
          if (Je(a.value, o)) {
            if (a.children === i.children && !Pe.current) {
              t = yt(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var l = a.dependencies;
              if (l !== null) {
                o = a.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (a.tag === 1) {
                      (s = pt(-1, n & -n)), (s.tag = 2);
                      var u = a.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s);
                      }
                    }
                    (a.lanes |= n),
                      (s = a.alternate),
                      s !== null && (s.lanes |= n),
                      Wl(a.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((o = a.return), o === null)) throw Error(x(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  Wl(o, n, t),
                  (o = a.sibling);
              } else o = a.child;
              if (o !== null) o.return = a;
              else
                for (o = a; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((a = o.sibling), a !== null)) {
                    (a.return = o.return), (o = a);
                    break;
                  }
                  o = o.return;
                }
              a = o;
            }
        ke(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Vn(t, n),
        (i = Be(i)),
        (r = r(i)),
        (t.flags |= 1),
        ke(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Qe(r, t.pendingProps)),
        (i = Qe(r.type, i)),
        $c(e, t, r, i, n)
      );
    case 15:
      return Up(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        la(e, t),
        (t.tag = 1),
        be(r) ? ((e = !0), Pa(t)) : (e = !1),
        Vn(t, n),
        hp(t, r, i),
        Ql(t, r, i, n),
        Kl(null, t, r, !0, e, n)
      );
    case 19:
      return Vp(e, t, n);
    case 22:
      return $p(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function lm(e, t) {
  return Ld(e, t);
}
function Mg(e, t, n, r) {
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
function Ue(e, t, n, r) {
  return new Mg(e, t, n, r);
}
function wu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function jg(e) {
  if (typeof e == "function") return wu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ms)) return 11;
    if (e === js) return 14;
  }
  return 2;
}
function Qt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ue(e.tag, t, e.key, e.mode)),
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
function ca(e, t, n, r, i, a) {
  var o = 2;
  if (((r = e), typeof e == "function")) wu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Pn:
        return mn(n.children, i, a, t);
      case Fs:
        (o = 8), (i |= 8);
        break;
      case vl:
        return (
          (e = Ue(12, n, t, i | 2)), (e.elementType = vl), (e.lanes = a), e
        );
      case gl:
        return (e = Ue(13, n, t, i)), (e.elementType = gl), (e.lanes = a), e;
      case yl:
        return (e = Ue(19, n, t, i)), (e.elementType = yl), (e.lanes = a), e;
      case vd:
        return ao(n, i, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case md:
              o = 10;
              break e;
            case hd:
              o = 9;
              break e;
            case Ms:
              o = 11;
              break e;
            case js:
              o = 14;
              break e;
            case At:
              (o = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ue(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = a), t
  );
}
function mn(e, t, n, r) {
  return (e = Ue(7, e, r, t)), (e.lanes = n), e;
}
function ao(e, t, n, r) {
  return (
    (e = Ue(22, e, r, t)),
    (e.elementType = vd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ko(e, t, n) {
  return (e = Ue(6, e, null, t)), (e.lanes = n), e;
}
function Go(e, t, n) {
  return (
    (t = Ue(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ug(e, t, n, r, i) {
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
    (this.eventTimes = To(0)),
    (this.expirationTimes = To(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = To(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Su(e, t, n, r, i, a, o, l, s) {
  return (
    (e = new Ug(e, t, n, l, s)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = Ue(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ru(a),
    e
  );
}
function $g(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Nn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function sm(e) {
  if (!e) return Kt;
  e = e._reactInternals;
  e: {
    if (_n(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (be(n)) return lp(e, n, t);
  }
  return t;
}
function um(e, t, n, r, i, a, o, l, s) {
  return (
    (e = Su(n, r, !0, e, i, a, o, l, s)),
    (e.context = sm(null)),
    (n = e.current),
    (r = Ee()),
    (i = Vt(n)),
    (a = pt(r, i)),
    (a.callback = t ?? null),
    Ht(n, a, i),
    (e.current.lanes = i),
    di(e, i, r),
    Oe(e, r),
    e
  );
}
function oo(e, t, n, r) {
  var i = t.current,
    a = Ee(),
    o = Vt(i);
  return (
    (n = sm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = pt(a, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ht(i, t, o)),
    e !== null && (Xe(e, i, o, a), ia(e, i, o)),
    o
  );
}
function Ua(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ku(e, t) {
  Zc(e, t), (e = e.alternate) && Zc(e, t);
}
function Bg() {
  return null;
}
var cm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Eu(e) {
  this._internalRoot = e;
}
lo.prototype.render = Eu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  oo(e, t, null, null);
};
lo.prototype.unmount = Eu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    wn(function () {
      oo(null, e, null, null);
    }),
      (t[vt] = null);
  }
};
function lo(e) {
  this._internalRoot = e;
}
lo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ud();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Lt.length && t !== 0 && t < Lt[n].priority; n++);
    Lt.splice(n, 0, e), n === 0 && Bd(e);
  }
};
function _u(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function so(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ef() {}
function Hg(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var u = Ua(o);
        a.call(u);
      };
    }
    var o = um(t, r, e, 0, null, !1, !1, "", ef);
    return (
      (e._reactRootContainer = o),
      (e[vt] = o.current),
      Kr(e.nodeType === 8 ? e.parentNode : e),
      wn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Ua(s);
      l.call(u);
    };
  }
  var s = Su(e, 0, !1, null, null, !1, !1, "", ef);
  return (
    (e._reactRootContainer = s),
    (e[vt] = s.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    wn(function () {
      oo(t, s, n, r);
    }),
    s
  );
}
function uo(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var s = Ua(o);
        l.call(s);
      };
    }
    oo(t, o, e, i);
  } else o = Hg(n, t, e, i, r);
  return Ua(o);
}
Md = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Pr(t.pendingLanes);
        n !== 0 &&
          (Bs(t, n | 1), Oe(t, ie()), !(U & 6) && ((tr = ie() + 500), tn()));
      }
      break;
    case 13:
      wn(function () {
        var r = gt(e, 1);
        if (r !== null) {
          var i = Ee();
          Xe(r, e, 1, i);
        }
      }),
        ku(e, 1);
  }
};
Hs = function (e) {
  if (e.tag === 13) {
    var t = gt(e, 134217728);
    if (t !== null) {
      var n = Ee();
      Xe(t, e, 134217728, n);
    }
    ku(e, 134217728);
  }
};
jd = function (e) {
  if (e.tag === 13) {
    var t = Vt(e),
      n = gt(e, t);
    if (n !== null) {
      var r = Ee();
      Xe(n, e, t, r);
    }
    ku(e, t);
  }
};
Ud = function () {
  return B;
};
$d = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
bl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((kl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var i = Za(r);
            if (!i) throw Error(x(90));
            yd(r), kl(r, i);
          }
        }
      }
      break;
    case "textarea":
      Sd(e, n);
      break;
    case "select":
      (t = n.value), t != null && $n(e, !!n.multiple, t, !1);
  }
};
Pd = vu;
bd = wn;
var Wg = { usingClientEntryPoint: !1, Events: [mi, An, Za, Cd, Nd, vu] },
  kr = {
    findFiberByHostInstance: sn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Vg = {
    bundleType: kr.bundleType,
    version: kr.version,
    rendererPackageName: kr.rendererPackageName,
    rendererConfig: kr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: _t.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ad(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: kr.findFiberByHostInstance || Bg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $i = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$i.isDisabled && $i.supportsFiber)
    try {
      (Ka = $i.inject(Vg)), (at = $i);
    } catch {}
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wg;
De.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!_u(t)) throw Error(x(200));
  return $g(e, t, null, n);
};
De.createRoot = function (e, t) {
  if (!_u(e)) throw Error(x(299));
  var n = !1,
    r = "",
    i = cm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Su(e, 1, !1, null, null, n, !1, r, i)),
    (e[vt] = t.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    new Eu(t)
  );
};
De.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = Ad(t)), (e = e === null ? null : e.stateNode), e;
};
De.flushSync = function (e) {
  return wn(e);
};
De.hydrate = function (e, t, n) {
  if (!so(t)) throw Error(x(200));
  return uo(null, e, t, !0, n);
};
De.hydrateRoot = function (e, t, n) {
  if (!_u(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    a = "",
    o = cm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = um(t, null, e, 1, n ?? null, i, !1, a, o)),
    (e[vt] = t.current),
    Kr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new lo(t);
};
De.render = function (e, t, n) {
  if (!so(t)) throw Error(x(200));
  return uo(null, e, t, !1, n);
};
De.unmountComponentAtNode = function (e) {
  if (!so(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (wn(function () {
        uo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[vt] = null);
        });
      }),
      !0)
    : !1;
};
De.unstable_batchedUpdates = vu;
De.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!so(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return uo(e, t, n, !1, r);
};
De.version = "18.2.0-next-9e3b772b8-20220608";
function fm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fm);
    } catch (e) {
      console.error(e);
    }
}
fm(), (ud.exports = De);
var Qg = ud.exports,
  tf = Qg;
(ml.createRoot = tf.createRoot), (ml.hydrateRoot = tf.hydrateRoot);
/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ii() {
  return (
    (ii = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ii.apply(this, arguments)
  );
}
var Ft;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Ft || (Ft = {}));
const nf = "popstate";
function Yg(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: a, search: o, hash: l } = r.location;
    return ls(
      "",
      { pathname: a, search: o, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : $a(i);
  }
  return Kg(t, n, null, e);
}
function oe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function xu(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function qg() {
  return Math.random().toString(36).substr(2, 8);
}
function rf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ls(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ii(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? lr(t) : t,
      { state: n, key: (t && t.key) || r || qg() }
    )
  );
}
function $a(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function lr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Kg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    l = Ft.Pop,
    s = null,
    u = c();
  u == null && ((u = 0), o.replaceState(ii({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    l = Ft.Pop;
    let N = c(),
      m = N == null ? null : N - u;
    (u = N), s && s({ action: l, location: w.location, delta: m });
  }
  function p(N, m) {
    l = Ft.Push;
    let d = ls(w.location, N, m);
    n && n(d, N), (u = c() + 1);
    let v = rf(d, u),
      k = w.createHref(d);
    try {
      o.pushState(v, "", k);
    } catch {
      i.location.assign(k);
    }
    a && s && s({ action: l, location: w.location, delta: 1 });
  }
  function y(N, m) {
    l = Ft.Replace;
    let d = ls(w.location, N, m);
    n && n(d, N), (u = c());
    let v = rf(d, u),
      k = w.createHref(d);
    o.replaceState(v, "", k),
      a && s && s({ action: l, location: w.location, delta: 0 });
  }
  function g(N) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      d = typeof N == "string" ? N : $a(N);
    return (
      oe(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, m)
    );
  }
  let w = {
    get action() {
      return l;
    },
    get location() {
      return e(i, o);
    },
    listen(N) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(nf, f),
        (s = N),
        () => {
          i.removeEventListener(nf, f), (s = null);
        }
      );
    },
    createHref(N) {
      return t(i, N);
    },
    createURL: g,
    encodeLocation(N) {
      let m = g(N);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: p,
    replace: y,
    go(N) {
      return o.go(N);
    },
  };
  return w;
}
var af;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(af || (af = {}));
function Gg(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? lr(t) : t,
    i = Cu(r.pathname || "/", n);
  if (i == null) return null;
  let a = dm(e);
  Xg(a);
  let o = null;
  for (let l = 0; o == null && l < a.length; ++l) o = oy(a[l], uy(i));
  return o;
}
function dm(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (a, o, l) => {
    let s = {
      relativePath: l === void 0 ? a.path || "" : l,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: o,
      route: a,
    };
    s.relativePath.startsWith("/") &&
      (oe(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = Yt([r, s.relativePath]),
      c = n.concat(s);
    a.children &&
      a.children.length > 0 &&
      (oe(
        a.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      dm(a.children, t, c, u)),
      !(a.path == null && !a.index) &&
        t.push({ path: u, score: iy(u, a.index), routesMeta: c });
  };
  return (
    e.forEach((a, o) => {
      var l;
      if (a.path === "" || !((l = a.path) != null && l.includes("?"))) i(a, o);
      else for (let s of pm(a.path)) i(a, o, s);
    }),
    t
  );
}
function pm(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    a = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [a, ""] : [a];
  let o = pm(r.join("/")),
    l = [];
  return (
    l.push(...o.map((s) => (s === "" ? a : [a, s].join("/")))),
    i && l.push(...o),
    l.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Xg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : ay(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Jg = /^:\w+$/,
  Zg = 3,
  ey = 2,
  ty = 1,
  ny = 10,
  ry = -2,
  of = (e) => e === "*";
function iy(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(of) && (r += ry),
    t && (r += ey),
    n
      .filter((i) => !of(i))
      .reduce((i, a) => i + (Jg.test(a) ? Zg : a === "" ? ty : ny), r)
  );
}
function ay(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function oy(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    a = [];
  for (let o = 0; o < n.length; ++o) {
    let l = n[o],
      s = o === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      c = ly(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let f = l.route;
    a.push({
      params: r,
      pathname: Yt([i, c.pathname]),
      pathnameBase: py(Yt([i, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== "/" && (i = Yt([i, c.pathnameBase]));
  }
  return a;
}
function ly(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = sy(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let a = i[0],
    o = a.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      if (c === "*") {
        let p = l[f] || "";
        o = a.slice(0, a.length - p.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = cy(l[f] || "", c)), u;
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e,
  };
}
function sy(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    xu(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (o, l) => (r.push(l), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function uy(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      xu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function cy(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      xu(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Cu(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function fy(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? lr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : dy(n, t)) : t,
    search: my(r),
    hash: hy(i),
  };
}
function dy(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Xo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function mm(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function hm(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = lr(e))
    : ((i = ii({}, e)),
      oe(
        !i.pathname || !i.pathname.includes("?"),
        Xo("?", "pathname", "search", i)
      ),
      oe(
        !i.pathname || !i.pathname.includes("#"),
        Xo("#", "pathname", "hash", i)
      ),
      oe(!i.search || !i.search.includes("#"), Xo("#", "search", "hash", i)));
  let a = e === "" || i.pathname === "",
    o = a ? "/" : i.pathname,
    l;
  if (r || o == null) l = n;
  else {
    let f = t.length - 1;
    if (o.startsWith("..")) {
      let p = o.split("/");
      for (; p[0] === ".."; ) p.shift(), (f -= 1);
      i.pathname = p.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let s = fy(i, l),
    u = o && o !== "/" && o.endsWith("/"),
    c = (a || o === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || c) && (s.pathname += "/"), s;
}
const Yt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  py = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  my = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  hy = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function vy(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const yy = typeof Object.is == "function" ? Object.is : gy,
  { useState: wy, useEffect: Sy, useLayoutEffect: ky, useDebugValue: Ey } = pl;
function _y(e, t, n) {
  const r = t(),
    [{ inst: i }, a] = wy({ inst: { value: r, getSnapshot: t } });
  return (
    ky(() => {
      (i.value = r), (i.getSnapshot = t), Jo(i) && a({ inst: i });
    }, [e, r, t]),
    Sy(
      () => (
        Jo(i) && a({ inst: i }),
        e(() => {
          Jo(i) && a({ inst: i });
        })
      ),
      [e]
    ),
    Ey(r),
    r
  );
}
function Jo(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !yy(n, r);
  } catch {
    return !0;
  }
}
function xy(e, t, n) {
  return t();
}
const Cy =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ny = !Cy,
  Py = Ny ? xy : _y;
"useSyncExternalStore" in pl && ((e) => e.useSyncExternalStore)(pl);
const vm = _.createContext(null),
  Nu = _.createContext(null),
  vi = _.createContext(null),
  co = _.createContext(null),
  xn = _.createContext({ outlet: null, matches: [] }),
  gm = _.createContext(null);
function ss() {
  return (
    (ss = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ss.apply(this, arguments)
  );
}
function by(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  sr() || oe(!1);
  let { basename: r, navigator: i } = _.useContext(vi),
    { hash: a, pathname: o, search: l } = ym(e, { relative: n }),
    s = o;
  return (
    r !== "/" && (s = o === "/" ? r : Yt([r, o])),
    i.createHref({ pathname: s, search: l, hash: a })
  );
}
function sr() {
  return _.useContext(co) != null;
}
function ur() {
  return sr() || oe(!1), _.useContext(co).location;
}
function fo() {
  sr() || oe(!1);
  let { basename: e, navigator: t } = _.useContext(vi),
    { matches: n } = _.useContext(xn),
    { pathname: r } = ur(),
    i = JSON.stringify(mm(n).map((l) => l.pathnameBase)),
    a = _.useRef(!1);
  return (
    _.useEffect(() => {
      a.current = !0;
    }),
    _.useCallback(
      function (l, s) {
        if ((s === void 0 && (s = {}), !a.current)) return;
        if (typeof l == "number") {
          t.go(l);
          return;
        }
        let u = hm(l, JSON.parse(i), r, s.relative === "path");
        e !== "/" &&
          (u.pathname = u.pathname === "/" ? e : Yt([e, u.pathname])),
          (s.replace ? t.replace : t.push)(u, s.state, s);
      },
      [e, t, i, r]
    )
  );
}
const Oy = _.createContext(null);
function Ty(e) {
  let t = _.useContext(xn).outlet;
  return t && _.createElement(Oy.Provider, { value: e }, t);
}
function ym(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = _.useContext(xn),
    { pathname: i } = ur(),
    a = JSON.stringify(mm(r).map((o) => o.pathnameBase));
  return _.useMemo(() => hm(e, JSON.parse(a), i, n === "path"), [e, a, i, n]);
}
function Ay(e, t) {
  sr() || oe(!1);
  let { navigator: n } = _.useContext(vi),
    r = _.useContext(Nu),
    { matches: i } = _.useContext(xn),
    a = i[i.length - 1],
    o = a ? a.params : {};
  a && a.pathname;
  let l = a ? a.pathnameBase : "/";
  a && a.route;
  let s = ur(),
    u;
  if (t) {
    var c;
    let w = typeof t == "string" ? lr(t) : t;
    l === "/" || ((c = w.pathname) != null && c.startsWith(l)) || oe(!1),
      (u = w);
  } else u = s;
  let f = u.pathname || "/",
    p = l === "/" ? f : f.slice(l.length) || "/",
    y = Gg(e, { pathname: p }),
    g = Dy(
      y &&
        y.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, o, w.params),
            pathname: Yt([
              l,
              n.encodeLocation
                ? n.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? l
                : Yt([
                    l,
                    n.encodeLocation
                      ? n.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      i,
      r || void 0
    );
  return t && g
    ? _.createElement(
        co.Provider,
        {
          value: {
            location: ss(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: Ft.Pop,
          },
        },
        g
      )
    : g;
}
function Ry() {
  let e = jy(),
    t = vy(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    a = null;
  return _.createElement(
    _.Fragment,
    null,
    _.createElement("h2", null, "Unexpected Application Error!"),
    _.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? _.createElement("pre", { style: i }, n) : null,
    a
  );
}
class Ly extends _.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? _.createElement(
          xn.Provider,
          { value: this.props.routeContext },
          _.createElement(gm.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Iy(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = _.useContext(vm);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    _.createElement(xn.Provider, { value: t }, r)
  );
}
function Dy(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    i = n == null ? void 0 : n.errors;
  if (i != null) {
    let a = r.findIndex(
      (o) => o.route.id && (i == null ? void 0 : i[o.route.id])
    );
    a >= 0 || oe(!1), (r = r.slice(0, Math.min(r.length, a + 1)));
  }
  return r.reduceRight((a, o, l) => {
    let s = o.route.id ? (i == null ? void 0 : i[o.route.id]) : null,
      u = null;
    n &&
      (o.route.ErrorBoundary
        ? (u = _.createElement(o.route.ErrorBoundary, null))
        : o.route.errorElement
        ? (u = o.route.errorElement)
        : (u = _.createElement(Ry, null)));
    let c = t.concat(r.slice(0, l + 1)),
      f = () => {
        let p = a;
        return (
          s
            ? (p = u)
            : o.route.Component
            ? (p = _.createElement(o.route.Component, null))
            : o.route.element && (p = o.route.element),
          _.createElement(Iy, {
            match: o,
            routeContext: { outlet: a, matches: c },
            children: p,
          })
        );
      };
    return n && (o.route.ErrorBoundary || o.route.errorElement || l === 0)
      ? _.createElement(Ly, {
          location: n.location,
          component: u,
          error: s,
          children: f(),
          routeContext: { outlet: null, matches: c },
        })
      : f();
  }, null);
}
var lf;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(lf || (lf = {}));
var Ba;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(Ba || (Ba = {}));
function zy(e) {
  let t = _.useContext(Nu);
  return t || oe(!1), t;
}
function Fy(e) {
  let t = _.useContext(xn);
  return t || oe(!1), t;
}
function My(e) {
  let t = Fy(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || oe(!1), n.route.id;
}
function jy() {
  var e;
  let t = _.useContext(gm),
    n = zy(Ba.UseRouteError),
    r = My(Ba.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Uy(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  sr() || oe(!1);
  let a = _.useContext(Nu),
    o = fo();
  return (
    _.useEffect(() => {
      (a && a.navigation.state !== "idle") ||
        o(t, { replace: n, state: r, relative: i });
    }),
    null
  );
}
function $y(e) {
  return Ty(e.context);
}
function st(e) {
  oe(!1);
}
function By(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Ft.Pop,
    navigator: a,
    static: o = !1,
  } = e;
  sr() && oe(!1);
  let l = t.replace(/^\/*/, "/"),
    s = _.useMemo(() => ({ basename: l, navigator: a, static: o }), [l, a, o]);
  typeof r == "string" && (r = lr(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: f = "",
      state: p = null,
      key: y = "default",
    } = r,
    g = _.useMemo(() => {
      let w = Cu(u, l);
      return w == null
        ? null
        : {
            location: { pathname: w, search: c, hash: f, state: p, key: y },
            navigationType: i,
          };
    }, [l, u, c, f, p, y, i]);
  return g == null
    ? null
    : _.createElement(
        vi.Provider,
        { value: s },
        _.createElement(co.Provider, { children: n, value: g })
      );
}
function Hy(e) {
  let { children: t, location: n } = e,
    r = _.useContext(vm),
    i = r && !t ? r.router.routes : us(t);
  return Ay(i, n);
}
var sf;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(sf || (sf = {}));
new Promise(() => {});
function us(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    _.Children.forEach(e, (r, i) => {
      if (!_.isValidElement(r)) return;
      let a = [...t, i];
      if (r.type === _.Fragment) {
        n.push.apply(n, us(r.props.children, a));
        return;
      }
      r.type !== st && oe(!1), !r.props.index || !r.props.children || oe(!1);
      let o = {
        id: r.props.id || a.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = us(r.props.children, a)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function cs() {
  return (
    (cs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    cs.apply(this, arguments)
  );
}
function Wy(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Vy(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Qy(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Vy(e);
}
const Yy = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
];
function qy(e) {
  let { basename: t, children: n, window: r } = e,
    i = _.useRef();
  i.current == null && (i.current = Yg({ window: r, v5Compat: !0 }));
  let a = i.current,
    [o, l] = _.useState({ action: a.action, location: a.location });
  return (
    _.useLayoutEffect(() => a.listen(l), [a]),
    _.createElement(By, {
      basename: t,
      children: n,
      location: o.location,
      navigationType: o.action,
      navigator: a,
    })
  );
}
const Ky =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Gy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  uf = _.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: a,
        replace: o,
        state: l,
        target: s,
        to: u,
        preventScrollReset: c,
      } = t,
      f = Wy(t, Yy),
      { basename: p } = _.useContext(vi),
      y,
      g = !1;
    if (typeof u == "string" && Gy.test(u) && ((y = u), Ky)) {
      let d = new URL(window.location.href),
        v = u.startsWith("//") ? new URL(d.protocol + u) : new URL(u),
        k = Cu(v.pathname, p);
      v.origin === d.origin && k != null
        ? (u = k + v.search + v.hash)
        : (g = !0);
    }
    let w = by(u, { relative: i }),
      N = Xy(u, {
        replace: o,
        state: l,
        target: s,
        preventScrollReset: c,
        relative: i,
      });
    function m(d) {
      r && r(d), d.defaultPrevented || N(d);
    }
    return _.createElement(
      "a",
      cs({}, f, { href: y || w, onClick: g || a ? r : m, ref: n, target: s })
    );
  });
var cf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(cf || (cf = {}));
var ff;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(ff || (ff = {}));
function Xy(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: a,
      relative: o,
    } = t === void 0 ? {} : t,
    l = fo(),
    s = ur(),
    u = ym(e, { relative: o });
  return _.useCallback(
    (c) => {
      if (Qy(c, n)) {
        c.preventDefault();
        let f = r !== void 0 ? r : $a(s) === $a(u);
        l(e, { replace: f, state: i, preventScrollReset: a, relative: o });
      }
    },
    [s, l, u, r, i, n, e, a, o]
  );
}
const Jy = "_navbar_wrfxj_1",
  Zy = "_buttons_wrfxj_19",
  e0 = "_e_wrfxj_32",
  t0 = "_c_wrfxj_36",
  n0 = "_o_wrfxj_40",
  r0 = "_a_wrfxj_44",
  i0 = "_logout_wrfxj_48",
  an = { navbar: Jy, buttons: Zy, e: e0, c: t0, o: n0, a: r0, logout: i0 },
  a0 = "_links_3nhm4_1",
  o0 = "_link_3nhm4_1",
  Zo = { links: a0, link: o0 },
  l0 = () =>
    P("ul", {
      className: Zo.links,
      children: [
        h("li", {
          children: h(uf, {
            to: "/administrator/surveys",
            className: Zo.link,
            children: "Encuestas",
          }),
        }),
        h("li", {
          children: h(uf, {
            to: "/administrator/questions",
            className: Zo.link,
            children: "Preguntas",
          }),
        }),
      ],
    }),
  gi = (e) => {
    const t = e.showLinks,
      n = () => {
        localStorage.removeItem("auth"), (window.location.href = "/login");
      };
    return P("div", {
      className: an.navbar,
      children: [
        P("h1", {
          children: [
            h("span", { className: an.e, children: "E" }),
            h("span", { className: an.c, children: "C" }),
            h("span", { className: an.o, children: "O" }),
            h("span", { className: an.a, children: "A" }),
          ],
        }),
        P("div", {
          className: an.buttons,
          children: [
            t && h(l0, {}),
            !e.isLogin &&
              h("button", {
                className: an.logout,
                onClick: n,
                children: "Cerrar sesión",
              }),
          ],
        }),
      ],
    });
  };
function wm(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: s0 } = Object.prototype,
  { getPrototypeOf: Pu } = Object,
  po = ((e) => (t) => {
    const n = s0.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  xt = (e) => ((e = e.toLowerCase()), (t) => po(t) === e),
  mo = (e) => (t) => typeof t === e,
  { isArray: cr } = Array,
  ai = mo("undefined");
function u0(e) {
  return (
    e !== null &&
    !ai(e) &&
    e.constructor !== null &&
    !ai(e.constructor) &&
    wt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Sm = xt("ArrayBuffer");
function c0(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Sm(e.buffer)),
    t
  );
}
const f0 = mo("string"),
  wt = mo("function"),
  km = mo("number"),
  bu = (e) => e !== null && typeof e == "object",
  d0 = (e) => e === !0 || e === !1,
  fa = (e) => {
    if (po(e) !== "object") return !1;
    const t = Pu(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  p0 = xt("Date"),
  m0 = xt("File"),
  h0 = xt("Blob"),
  v0 = xt("FileList"),
  g0 = (e) => bu(e) && wt(e.pipe),
  y0 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (wt(e.append) &&
          ((t = po(e)) === "formdata" ||
            (t === "object" &&
              wt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  w0 = xt("URLSearchParams"),
  S0 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function yi(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), cr(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = a.length;
    let l;
    for (r = 0; r < o; r++) (l = a[r]), t.call(null, e[l], l, e);
  }
}
function Em(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const _m = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  xm = (e) => !ai(e) && e !== _m;
function fs() {
  const { caseless: e } = (xm(this) && this) || {},
    t = {},
    n = (r, i) => {
      const a = (e && Em(t, i)) || i;
      fa(t[a]) && fa(r)
        ? (t[a] = fs(t[a], r))
        : fa(r)
        ? (t[a] = fs({}, r))
        : cr(r)
        ? (t[a] = r.slice())
        : (t[a] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && yi(arguments[r], n);
  return t;
}
const k0 = (e, t, n, { allOwnKeys: r } = {}) => (
    yi(
      t,
      (i, a) => {
        n && wt(i) ? (e[a] = wm(i, n)) : (e[a] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  E0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  _0 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  x0 = (e, t, n, r) => {
    let i, a, o;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
        (o = i[a]), (!r || r(o, e, t)) && !l[o] && ((t[o] = e[o]), (l[o] = !0));
      e = n !== !1 && Pu(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  C0 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  N0 = (e) => {
    if (!e) return null;
    if (cr(e)) return e;
    let t = e.length;
    if (!km(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  P0 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Pu(Uint8Array)),
  b0 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const a = i.value;
      t.call(e, a[0], a[1]);
    }
  },
  O0 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  T0 = xt("HTMLFormElement"),
  A0 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  df = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  R0 = xt("RegExp"),
  Cm = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    yi(n, (i, a) => {
      t(i, a, e) !== !1 && (r[a] = i);
    }),
      Object.defineProperties(e, r);
  },
  L0 = (e) => {
    Cm(e, (t, n) => {
      if (wt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (wt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  I0 = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((a) => {
          n[a] = !0;
        });
      };
    return cr(e) ? r(e) : r(String(e).split(t)), n;
  },
  D0 = () => {},
  z0 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  el = "abcdefghijklmnopqrstuvwxyz",
  pf = "0123456789",
  Nm = { DIGIT: pf, ALPHA: el, ALPHA_DIGIT: el + el.toUpperCase() + pf },
  F0 = (e = 16, t = Nm.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function M0(e) {
  return !!(
    e &&
    wt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const j0 = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (bu(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const a = cr(r) ? [] : {};
            return (
              yi(r, (o, l) => {
                const s = n(o, i + 1);
                !ai(s) && (a[l] = s);
              }),
              (t[i] = void 0),
              a
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  E = {
    isArray: cr,
    isArrayBuffer: Sm,
    isBuffer: u0,
    isFormData: y0,
    isArrayBufferView: c0,
    isString: f0,
    isNumber: km,
    isBoolean: d0,
    isObject: bu,
    isPlainObject: fa,
    isUndefined: ai,
    isDate: p0,
    isFile: m0,
    isBlob: h0,
    isRegExp: R0,
    isFunction: wt,
    isStream: g0,
    isURLSearchParams: w0,
    isTypedArray: P0,
    isFileList: v0,
    forEach: yi,
    merge: fs,
    extend: k0,
    trim: S0,
    stripBOM: E0,
    inherits: _0,
    toFlatObject: x0,
    kindOf: po,
    kindOfTest: xt,
    endsWith: C0,
    toArray: N0,
    forEachEntry: b0,
    matchAll: O0,
    isHTMLForm: T0,
    hasOwnProperty: df,
    hasOwnProp: df,
    reduceDescriptors: Cm,
    freezeMethods: L0,
    toObjectSet: I0,
    toCamelCase: A0,
    noop: D0,
    toFiniteNumber: z0,
    findKey: Em,
    global: _m,
    isContextDefined: xm,
    ALPHABET: Nm,
    generateString: F0,
    isSpecCompliantForm: M0,
    toJSONObject: j0,
  };
function j(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
E.inherits(j, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: E.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Pm = j.prototype,
  bm = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  bm[e] = { value: e };
});
Object.defineProperties(j, bm);
Object.defineProperty(Pm, "isAxiosError", { value: !0 });
j.from = (e, t, n, r, i, a) => {
  const o = Object.create(Pm);
  return (
    E.toFlatObject(
      e,
      o,
      function (s) {
        return s !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    j.call(o, e.message, t, n, r, i),
    (o.cause = e),
    (o.name = e.name),
    a && Object.assign(o, a),
    o
  );
};
const U0 = null;
function ds(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function Om(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function mf(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, a) {
          return (i = Om(i)), !n && a ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function $0(e) {
  return E.isArray(e) && !e.some(ds);
}
const B0 = E.toFlatObject(E, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ho(e, t, n) {
  if (!E.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = E.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (w, N) {
        return !E.isUndefined(N[w]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || c,
    a = n.dots,
    o = n.indexes,
    s = (n.Blob || (typeof Blob < "u" && Blob)) && E.isSpecCompliantForm(t);
  if (!E.isFunction(i)) throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (E.isDate(g)) return g.toISOString();
    if (!s && E.isBlob(g))
      throw new j("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(g) || E.isTypedArray(g)
      ? s && typeof Blob == "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function c(g, w, N) {
    let m = g;
    if (g && !N && typeof g == "object") {
      if (E.endsWith(w, "{}"))
        (w = r ? w : w.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        (E.isArray(g) && $0(g)) ||
        ((E.isFileList(g) || E.endsWith(w, "[]")) && (m = E.toArray(g)))
      )
        return (
          (w = Om(w)),
          m.forEach(function (v, k) {
            !(E.isUndefined(v) || v === null) &&
              t.append(
                o === !0 ? mf([w], k, a) : o === null ? w : w + "[]",
                u(v)
              );
          }),
          !1
        );
    }
    return ds(g) ? !0 : (t.append(mf(N, w, a), u(g)), !1);
  }
  const f = [],
    p = Object.assign(B0, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: ds,
    });
  function y(g, w) {
    if (!E.isUndefined(g)) {
      if (f.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      f.push(g),
        E.forEach(g, function (m, d) {
          (!(E.isUndefined(m) || m === null) &&
            i.call(t, m, E.isString(d) ? d.trim() : d, w, p)) === !0 &&
            y(m, w ? w.concat(d) : [d]);
        }),
        f.pop();
    }
  }
  if (!E.isObject(e)) throw new TypeError("data must be an object");
  return y(e), t;
}
function hf(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Ou(e, t) {
  (this._pairs = []), e && ho(e, this, t);
}
const Tm = Ou.prototype;
Tm.append = function (t, n) {
  this._pairs.push([t, n]);
};
Tm.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, hf);
      }
    : hf;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function H0(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Am(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || H0,
    i = n && n.serialize;
  let a;
  if (
    (i
      ? (a = i(t, n))
      : (a = E.isURLSearchParams(t) ? t.toString() : new Ou(t, n).toString(r)),
    a)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + a);
  }
  return e;
}
class W0 {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    E.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const vf = W0,
  Rm = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  V0 = typeof URLSearchParams < "u" ? URLSearchParams : Ou,
  Q0 = typeof FormData < "u" ? FormData : null,
  Y0 = typeof Blob < "u" ? Blob : null,
  q0 = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  K0 = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  rt = {
    isBrowser: !0,
    classes: { URLSearchParams: V0, FormData: Q0, Blob: Y0 },
    isStandardBrowserEnv: q0,
    isStandardBrowserWebWorkerEnv: K0,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function G0(e, t) {
  return ho(
    e,
    new rt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, a) {
          return rt.isNode && E.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : a.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function X0(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function J0(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let a;
  for (r = 0; r < i; r++) (a = n[r]), (t[a] = e[a]);
  return t;
}
function Lm(e) {
  function t(n, r, i, a) {
    let o = n[a++];
    const l = Number.isFinite(+o),
      s = a >= n.length;
    return (
      (o = !o && E.isArray(i) ? i.length : o),
      s
        ? (E.hasOwnProp(i, o) ? (i[o] = [i[o], r]) : (i[o] = r), !l)
        : ((!i[o] || !E.isObject(i[o])) && (i[o] = []),
          t(n, r, i[o], a) && E.isArray(i[o]) && (i[o] = J0(i[o])),
          !l)
    );
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {};
    return (
      E.forEachEntry(e, (r, i) => {
        t(X0(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
const Z0 = { "Content-Type": void 0 };
function e1(e, t, n) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const vo = {
  transitional: Rm,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        a = E.isObject(t);
      if ((a && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t)))
        return i && i ? JSON.stringify(Lm(t)) : t;
      if (
        E.isArrayBuffer(t) ||
        E.isBuffer(t) ||
        E.isStream(t) ||
        E.isFile(t) ||
        E.isBlob(t)
      )
        return t;
      if (E.isArrayBufferView(t)) return t.buffer;
      if (E.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (a) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return G0(t, this.formSerializer).toString();
        if ((l = E.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const s = this.env && this.env.FormData;
          return ho(
            l ? { "files[]": t } : t,
            s && new s(),
            this.formSerializer
          );
        }
      }
      return a || i ? (n.setContentType("application/json", !1), e1(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || vo.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (t && E.isString(t) && ((r && !this.responseType) || i)) {
        const o = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (o)
            throw l.name === "SyntaxError"
              ? j.from(l, j.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: rt.classes.FormData, Blob: rt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
E.forEach(["delete", "get", "head"], function (t) {
  vo.headers[t] = {};
});
E.forEach(["post", "put", "patch"], function (t) {
  vo.headers[t] = E.merge(Z0);
});
const Tu = vo,
  t1 = E.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  n1 = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (i = o.indexOf(":")),
              (n = o.substring(0, i).trim().toLowerCase()),
              (r = o.substring(i + 1).trim()),
              !(!n || (t[n] && t1[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  gf = Symbol("internals");
function Er(e) {
  return e && String(e).trim().toLowerCase();
}
function da(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(da) : String(e);
}
function r1(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const i1 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function tl(e, t, n, r, i) {
  if (E.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!E.isString(t))) {
    if (E.isString(r)) return t.indexOf(r) !== -1;
    if (E.isRegExp(r)) return r.test(t);
  }
}
function a1(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function o1(e, t) {
  const n = E.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, a, o) {
        return this[r].call(this, t, i, a, o);
      },
      configurable: !0,
    });
  });
}
class go {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function a(l, s, u) {
      const c = Er(s);
      if (!c) throw new Error("header name must be a non-empty string");
      const f = E.findKey(i, c);
      (!f || i[f] === void 0 || u === !0 || (u === void 0 && i[f] !== !1)) &&
        (i[f || s] = da(l));
    }
    const o = (l, s) => E.forEach(l, (u, c) => a(u, c, s));
    return (
      E.isPlainObject(t) || t instanceof this.constructor
        ? o(t, n)
        : E.isString(t) && (t = t.trim()) && !i1(t)
        ? o(n1(t), n)
        : t != null && a(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Er(t)), t)) {
      const r = E.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return r1(i);
        if (E.isFunction(n)) return n.call(this, i, r);
        if (E.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Er(t)), t)) {
      const r = E.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || tl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function a(o) {
      if (((o = Er(o)), o)) {
        const l = E.findKey(r, o);
        l && (!n || tl(r, r[l], l, n)) && (delete r[l], (i = !0));
      }
    }
    return E.isArray(t) ? t.forEach(a) : a(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || tl(this, this[a], a, t, !0)) && (delete this[a], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      E.forEach(this, (i, a) => {
        const o = E.findKey(r, a);
        if (o) {
          (n[o] = da(i)), delete n[a];
          return;
        }
        const l = t ? a1(a) : String(a).trim();
        l !== a && delete n[a], (n[l] = da(i)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      E.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && E.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[gf] = this[gf] = { accessors: {} }).accessors,
      i = this.prototype;
    function a(o) {
      const l = Er(o);
      r[l] || (o1(i, o), (r[l] = !0));
    }
    return E.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
go.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
E.freezeMethods(go.prototype);
E.freezeMethods(go);
const mt = go;
function nl(e, t) {
  const n = this || Tu,
    r = t || n,
    i = mt.from(r.headers);
  let a = r.data;
  return (
    E.forEach(e, function (l) {
      a = l.call(n, a, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    a
  );
}
function Im(e) {
  return !!(e && e.__CANCEL__);
}
function wi(e, t, n) {
  j.call(this, e ?? "canceled", j.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
E.inherits(wi, j, { __CANCEL__: !0 });
function l1(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new j(
          "Request failed with status code " + n.status,
          [j.ERR_BAD_REQUEST, j.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const s1 = rt.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, i, a, o, l) {
          const s = [];
          s.push(n + "=" + encodeURIComponent(r)),
            E.isNumber(i) && s.push("expires=" + new Date(i).toGMTString()),
            E.isString(a) && s.push("path=" + a),
            E.isString(o) && s.push("domain=" + o),
            l === !0 && s.push("secure"),
            (document.cookie = s.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function u1(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function c1(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Dm(e, t) {
  return e && !u1(t) ? c1(e, t) : t;
}
const f1 = rt.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function i(a) {
        let o = a;
        return (
          t && (n.setAttribute("href", o), (o = n.href)),
          n.setAttribute("href", o),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = i(window.location.href)),
        function (o) {
          const l = E.isString(o) ? i(o) : o;
          return l.protocol === r.protocol && l.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function d1(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function p1(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    a = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const u = Date.now(),
        c = r[a];
      o || (o = u), (n[i] = s), (r[i] = u);
      let f = a,
        p = 0;
      for (; f !== i; ) (p += n[f++]), (f = f % e);
      if (((i = (i + 1) % e), i === a && (a = (a + 1) % e), u - o < t)) return;
      const y = c && u - c;
      return y ? Math.round((p * 1e3) / y) : void 0;
    }
  );
}
function yf(e, t) {
  let n = 0;
  const r = p1(50, 250);
  return (i) => {
    const a = i.loaded,
      o = i.lengthComputable ? i.total : void 0,
      l = a - n,
      s = r(l),
      u = a <= o;
    n = a;
    const c = {
      loaded: a,
      total: o,
      progress: o ? a / o : void 0,
      bytes: l,
      rate: s || void 0,
      estimated: s && o && u ? (o - a) / s : void 0,
      event: i,
    };
    (c[t ? "download" : "upload"] = !0), e(c);
  };
}
const m1 = typeof XMLHttpRequest < "u",
  h1 =
    m1 &&
    function (e) {
      return new Promise(function (n, r) {
        let i = e.data;
        const a = mt.from(e.headers).normalize(),
          o = e.responseType;
        let l;
        function s() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener("abort", l);
        }
        E.isFormData(i) &&
          (rt.isStandardBrowserEnv || rt.isStandardBrowserWebWorkerEnv) &&
          a.setContentType(!1);
        let u = new XMLHttpRequest();
        if (e.auth) {
          const y = e.auth.username || "",
            g = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          a.set("Authorization", "Basic " + btoa(y + ":" + g));
        }
        const c = Dm(e.baseURL, e.url);
        u.open(e.method.toUpperCase(), Am(c, e.params, e.paramsSerializer), !0),
          (u.timeout = e.timeout);
        function f() {
          if (!u) return;
          const y = mt.from(
              "getAllResponseHeaders" in u && u.getAllResponseHeaders()
            ),
            w = {
              data:
                !o || o === "text" || o === "json"
                  ? u.responseText
                  : u.response,
              status: u.status,
              statusText: u.statusText,
              headers: y,
              config: e,
              request: u,
            };
          l1(
            function (m) {
              n(m), s();
            },
            function (m) {
              r(m), s();
            },
            w
          ),
            (u = null);
        }
        if (
          ("onloadend" in u
            ? (u.onloadend = f)
            : (u.onreadystatechange = function () {
                !u ||
                  u.readyState !== 4 ||
                  (u.status === 0 &&
                    !(u.responseURL && u.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(f);
              }),
          (u.onabort = function () {
            u &&
              (r(new j("Request aborted", j.ECONNABORTED, e, u)), (u = null));
          }),
          (u.onerror = function () {
            r(new j("Network Error", j.ERR_NETWORK, e, u)), (u = null);
          }),
          (u.ontimeout = function () {
            let g = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const w = e.transitional || Rm;
            e.timeoutErrorMessage && (g = e.timeoutErrorMessage),
              r(
                new j(
                  g,
                  w.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED,
                  e,
                  u
                )
              ),
              (u = null);
          }),
          rt.isStandardBrowserEnv)
        ) {
          const y =
            (e.withCredentials || f1(c)) &&
            e.xsrfCookieName &&
            s1.read(e.xsrfCookieName);
          y && a.set(e.xsrfHeaderName, y);
        }
        i === void 0 && a.setContentType(null),
          "setRequestHeader" in u &&
            E.forEach(a.toJSON(), function (g, w) {
              u.setRequestHeader(w, g);
            }),
          E.isUndefined(e.withCredentials) ||
            (u.withCredentials = !!e.withCredentials),
          o && o !== "json" && (u.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            u.addEventListener("progress", yf(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            u.upload &&
            u.upload.addEventListener("progress", yf(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (y) => {
              u &&
                (r(!y || y.type ? new wi(null, e, u) : y),
                u.abort(),
                (u = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
        const p = d1(c);
        if (p && rt.protocols.indexOf(p) === -1) {
          r(new j("Unsupported protocol " + p + ":", j.ERR_BAD_REQUEST, e));
          return;
        }
        u.send(i || null);
      });
    },
  pa = { http: U0, xhr: h1 };
E.forEach(pa, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const v1 = {
  getAdapter: (e) => {
    e = E.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (
      let i = 0;
      i < t && ((n = e[i]), !(r = E.isString(n) ? pa[n.toLowerCase()] : n));
      i++
    );
    if (!r)
      throw r === !1
        ? new j(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            E.hasOwnProp(pa, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!E.isFunction(r)) throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: pa,
};
function rl(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new wi(null, e);
}
function wf(e) {
  return (
    rl(e),
    (e.headers = mt.from(e.headers)),
    (e.data = nl.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    v1
      .getAdapter(e.adapter || Tu.adapter)(e)
      .then(
        function (r) {
          return (
            rl(e),
            (r.data = nl.call(e, e.transformResponse, r)),
            (r.headers = mt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            Im(r) ||
              (rl(e),
              r &&
                r.response &&
                ((r.response.data = nl.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = mt.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const Sf = (e) => (e instanceof mt ? e.toJSON() : e);
function nr(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, f) {
    return E.isPlainObject(u) && E.isPlainObject(c)
      ? E.merge.call({ caseless: f }, u, c)
      : E.isPlainObject(c)
      ? E.merge({}, c)
      : E.isArray(c)
      ? c.slice()
      : c;
  }
  function i(u, c, f) {
    if (E.isUndefined(c)) {
      if (!E.isUndefined(u)) return r(void 0, u, f);
    } else return r(u, c, f);
  }
  function a(u, c) {
    if (!E.isUndefined(c)) return r(void 0, c);
  }
  function o(u, c) {
    if (E.isUndefined(c)) {
      if (!E.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function l(u, c, f) {
    if (f in t) return r(u, c);
    if (f in e) return r(void 0, u);
  }
  const s = {
    url: a,
    method: a,
    data: a,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: l,
    headers: (u, c) => i(Sf(u), Sf(c), !0),
  };
  return (
    E.forEach(Object.keys(e).concat(Object.keys(t)), function (c) {
      const f = s[c] || i,
        p = f(e[c], t[c], c);
      (E.isUndefined(p) && f !== l) || (n[c] = p);
    }),
    n
  );
}
const zm = "1.3.6",
  Au = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Au[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const kf = {};
Au.transitional = function (t, n, r) {
  function i(a, o) {
    return (
      "[Axios v" +
      zm +
      "] Transitional option '" +
      a +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (a, o, l) => {
    if (t === !1)
      throw new j(
        i(o, " has been removed" + (n ? " in " + n : "")),
        j.ERR_DEPRECATED
      );
    return (
      n &&
        !kf[o] &&
        ((kf[o] = !0),
        console.warn(
          i(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(a, o, l) : !0
    );
  };
};
function g1(e, t, n) {
  if (typeof e != "object")
    throw new j("options must be an object", j.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const a = r[i],
      o = t[a];
    if (o) {
      const l = e[a],
        s = l === void 0 || o(l, a, e);
      if (s !== !0)
        throw new j("option " + a + " must be " + s, j.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new j("Unknown option " + a, j.ERR_BAD_OPTION);
  }
}
const ps = { assertOptions: g1, validators: Au },
  Pt = ps.validators;
class Ha {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new vf(), response: new vf() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = nr(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: a } = n;
    r !== void 0 &&
      ps.assertOptions(
        r,
        {
          silentJSONParsing: Pt.transitional(Pt.boolean),
          forcedJSONParsing: Pt.transitional(Pt.boolean),
          clarifyTimeoutError: Pt.transitional(Pt.boolean),
        },
        !1
      ),
      i != null &&
        (E.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : ps.assertOptions(
              i,
              { encode: Pt.function, serialize: Pt.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o;
    (o = a && E.merge(a.common, a[n.method])),
      o &&
        E.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (g) => {
            delete a[g];
          }
        ),
      (n.headers = mt.concat(o, a));
    const l = [];
    let s = !0;
    this.interceptors.request.forEach(function (w) {
      (typeof w.runWhen == "function" && w.runWhen(n) === !1) ||
        ((s = s && w.synchronous), l.unshift(w.fulfilled, w.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (w) {
      u.push(w.fulfilled, w.rejected);
    });
    let c,
      f = 0,
      p;
    if (!s) {
      const g = [wf.bind(this), void 0];
      for (
        g.unshift.apply(g, l),
          g.push.apply(g, u),
          p = g.length,
          c = Promise.resolve(n);
        f < p;

      )
        c = c.then(g[f++], g[f++]);
      return c;
    }
    p = l.length;
    let y = n;
    for (f = 0; f < p; ) {
      const g = l[f++],
        w = l[f++];
      try {
        y = g(y);
      } catch (N) {
        w.call(this, N);
        break;
      }
    }
    try {
      c = wf.call(this, y);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, p = u.length; f < p; ) c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = nr(this.defaults, t);
    const n = Dm(t.baseURL, t.url);
    return Am(n, t.params, t.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function (t) {
  Ha.prototype[t] = function (n, r) {
    return this.request(
      nr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
E.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (a, o, l) {
      return this.request(
        nr(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: a,
          data: o,
        })
      );
    };
  }
  (Ha.prototype[t] = n()), (Ha.prototype[t + "Form"] = n(!0));
});
const ma = Ha;
class Ru {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (a) {
      n = a;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let a = r._listeners.length;
      for (; a-- > 0; ) r._listeners[a](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let a;
        const o = new Promise((l) => {
          r.subscribe(l), (a = l);
        }).then(i);
        return (
          (o.cancel = function () {
            r.unsubscribe(a);
          }),
          o
        );
      }),
      t(function (a, o, l) {
        r.reason || ((r.reason = new wi(a, o, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Ru(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
const y1 = Ru;
function w1(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function S1(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const ms = {
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
  NetworkAuthenticationRequired: 511,
};
Object.entries(ms).forEach(([e, t]) => {
  ms[t] = e;
});
const k1 = ms;
function Fm(e) {
  const t = new ma(e),
    n = wm(ma.prototype.request, t);
  return (
    E.extend(n, ma.prototype, t, { allOwnKeys: !0 }),
    E.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return Fm(nr(e, i));
    }),
    n
  );
}
const ue = Fm(Tu);
ue.Axios = ma;
ue.CanceledError = wi;
ue.CancelToken = y1;
ue.isCancel = Im;
ue.VERSION = zm;
ue.toFormData = ho;
ue.AxiosError = j;
ue.Cancel = ue.CanceledError;
ue.all = function (t) {
  return Promise.all(t);
};
ue.spread = w1;
ue.isAxiosError = S1;
ue.mergeConfig = nr;
ue.AxiosHeaders = mt;
ue.formToJSON = (e) => Lm(E.isHTMLForm(e) ? new FormData(e) : e);
ue.HttpStatusCode = k1;
ue.default = ue;
const Le = ue,
  E1 = "_login_1n03e_1",
  _1 = "_heading_1n03e_9",
  x1 = "_form_1n03e_20",
  C1 = "_error_1n03e_26",
  Bi = { login: E1, heading: _1, form: x1, error: C1 };
function Ef(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ef(Object(n), !0).forEach(function (r) {
          ce(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ef(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Wa(e) {
  return (
    (Wa =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Wa(e)
  );
}
function N1(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _f(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function P1(e, t, n) {
  return (
    t && _f(e.prototype, t),
    n && _f(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ce(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Lu(e, t) {
  return O1(e) || A1(e, t) || Mm(e, t) || L1();
}
function Si(e) {
  return b1(e) || T1(e) || Mm(e) || R1();
}
function b1(e) {
  if (Array.isArray(e)) return hs(e);
}
function O1(e) {
  if (Array.isArray(e)) return e;
}
function T1(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function A1(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      i = !0,
      a = !1,
      o,
      l;
    try {
      for (
        n = n.call(e);
        !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t));
        i = !0
      );
    } catch (s) {
      (a = !0), (l = s);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (a) throw l;
      }
    }
    return r;
  }
}
function Mm(e, t) {
  if (e) {
    if (typeof e == "string") return hs(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return hs(e, t);
  }
}
function hs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function R1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function L1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var xf = function () {},
  Iu = {},
  jm = {},
  Um = null,
  $m = { mark: xf, measure: xf };
try {
  typeof window < "u" && (Iu = window),
    typeof document < "u" && (jm = document),
    typeof MutationObserver < "u" && (Um = MutationObserver),
    typeof performance < "u" && ($m = performance);
} catch {}
var I1 = Iu.navigator || {},
  Cf = I1.userAgent,
  Nf = Cf === void 0 ? "" : Cf,
  Gt = Iu,
  Y = jm,
  Pf = Um,
  Hi = $m;
Gt.document;
var Ct =
    !!Y.documentElement &&
    !!Y.head &&
    typeof Y.addEventListener == "function" &&
    typeof Y.createElement == "function",
  Bm = ~Nf.indexOf("MSIE") || ~Nf.indexOf("Trident/"),
  Wi,
  Vi,
  Qi,
  Yi,
  qi,
  St = "___FONT_AWESOME___",
  vs = 16,
  Hm = "fa",
  Wm = "svg-inline--fa",
  Sn = "data-fa-i2svg",
  gs = "data-fa-pseudo-element",
  D1 = "data-fa-pseudo-element-pending",
  Du = "data-prefix",
  zu = "data-icon",
  bf = "fontawesome-i2svg",
  z1 = "async",
  F1 = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  Vm = (function () {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  V = "classic",
  te = "sharp",
  Fu = [V, te];
function ki(e) {
  return new Proxy(e, {
    get: function (n, r) {
      return r in n ? n[r] : n[V];
    },
  });
}
var oi = ki(
    ((Wi = {}),
    ce(Wi, V, {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
      fak: "kit",
      "fa-kit": "kit",
    }),
    ce(Wi, te, {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
    }),
    Wi)
  ),
  li = ki(
    ((Vi = {}),
    ce(Vi, V, {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
      kit: "fak",
    }),
    ce(Vi, te, { solid: "fass", regular: "fasr", light: "fasl" }),
    Vi)
  ),
  si = ki(
    ((Qi = {}),
    ce(Qi, V, {
      fab: "fa-brands",
      fad: "fa-duotone",
      fak: "fa-kit",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    }),
    ce(Qi, te, { fass: "fa-solid", fasr: "fa-regular", fasl: "fa-light" }),
    Qi)
  ),
  M1 = ki(
    ((Yi = {}),
    ce(Yi, V, {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-kit": "fak",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    }),
    ce(Yi, te, {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
    }),
    Yi)
  ),
  j1 = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,
  Qm = "fa-layers-text",
  U1 =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  $1 = ki(
    ((qi = {}),
    ce(qi, V, {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    }),
    ce(qi, te, { 900: "fass", 400: "fasr", 300: "fasl" }),
    qi)
  ),
  Ym = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  B1 = Ym.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  H1 = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  fn = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  ui = new Set();
Object.keys(li[V]).map(ui.add.bind(ui));
Object.keys(li[te]).map(ui.add.bind(ui));
var W1 = []
    .concat(Fu, Si(ui), [
      "2xs",
      "xs",
      "sm",
      "lg",
      "xl",
      "2xl",
      "beat",
      "border",
      "fade",
      "beat-fade",
      "bounce",
      "flip-both",
      "flip-horizontal",
      "flip-vertical",
      "flip",
      "fw",
      "inverse",
      "layers-counter",
      "layers-text",
      "layers",
      "li",
      "pull-left",
      "pull-right",
      "pulse",
      "rotate-180",
      "rotate-270",
      "rotate-90",
      "rotate-by",
      "shake",
      "spin-pulse",
      "spin-reverse",
      "spin",
      "stack-1x",
      "stack-2x",
      "stack",
      "ul",
      fn.GROUP,
      fn.SWAP_OPACITY,
      fn.PRIMARY,
      fn.SECONDARY,
    ])
    .concat(
      Ym.map(function (e) {
        return "".concat(e, "x");
      })
    )
    .concat(
      B1.map(function (e) {
        return "w-".concat(e);
      })
    ),
  jr = Gt.FontAwesomeConfig || {};
function V1(e) {
  var t = Y.querySelector("script[" + e + "]");
  if (t) return t.getAttribute(e);
}
function Q1(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (Y && typeof Y.querySelector == "function") {
  var Y1 = [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ];
  Y1.forEach(function (e) {
    var t = Lu(e, 2),
      n = t[0],
      r = t[1],
      i = Q1(V1(n));
    i != null && (jr[r] = i);
  });
}
var qm = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Hm,
  replacementClass: Wm,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
jr.familyPrefix && (jr.cssPrefix = jr.familyPrefix);
var rr = O(O({}, qm), jr);
rr.autoReplaceSvg || (rr.observeMutations = !1);
var L = {};
Object.keys(qm).forEach(function (e) {
  Object.defineProperty(L, e, {
    enumerable: !0,
    set: function (n) {
      (rr[e] = n),
        Ur.forEach(function (r) {
          return r(L);
        });
    },
    get: function () {
      return rr[e];
    },
  });
});
Object.defineProperty(L, "familyPrefix", {
  enumerable: !0,
  set: function (t) {
    (rr.cssPrefix = t),
      Ur.forEach(function (n) {
        return n(L);
      });
  },
  get: function () {
    return rr.cssPrefix;
  },
});
Gt.FontAwesomeConfig = L;
var Ur = [];
function q1(e) {
  return (
    Ur.push(e),
    function () {
      Ur.splice(Ur.indexOf(e), 1);
    }
  );
}
var bt = vs,
  it = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function K1(e) {
  if (!(!e || !Ct)) {
    var t = Y.createElement("style");
    t.setAttribute("type", "text/css"), (t.innerHTML = e);
    for (var n = Y.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
      var a = n[i],
        o = (a.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (r = a);
    }
    return Y.head.insertBefore(t, r), e;
  }
}
var G1 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ci() {
  for (var e = 12, t = ""; e-- > 0; ) t += G1[(Math.random() * 62) | 0];
  return t;
}
function fr(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function Mu(e) {
  return e.classList
    ? fr(e.classList)
    : (e.getAttribute("class") || "").split(" ").filter(function (t) {
        return t;
      });
}
function Km(e) {
  return ""
    .concat(e)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function X1(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + "".concat(n, '="').concat(Km(e[n]), '" ');
    }, "")
    .trim();
}
function yo(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function ju(e) {
  return (
    e.size !== it.size ||
    e.x !== it.x ||
    e.y !== it.y ||
    e.rotate !== it.rotate ||
    e.flipX ||
    e.flipY
  );
}
function J1(e) {
  var t = e.transform,
    n = e.containerWidth,
    r = e.iconWidth,
    i = { transform: "translate(".concat(n / 2, " 256)") },
    a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
    o = "scale("
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
    l = "rotate(".concat(t.rotate, " 0 0)"),
    s = { transform: "".concat(a, " ").concat(o, " ").concat(l) },
    u = { transform: "translate(".concat((r / 2) * -1, " -256)") };
  return { outer: i, inner: s, path: u };
}
function Z1(e) {
  var t = e.transform,
    n = e.width,
    r = n === void 0 ? vs : n,
    i = e.height,
    a = i === void 0 ? vs : i,
    o = e.startCentered,
    l = o === void 0 ? !1 : o,
    s = "";
  return (
    l && Bm
      ? (s += "translate("
          .concat(t.x / bt - r / 2, "em, ")
          .concat(t.y / bt - a / 2, "em) "))
      : l
      ? (s += "translate(calc(-50% + "
          .concat(t.x / bt, "em), calc(-50% + ")
          .concat(t.y / bt, "em)) "))
      : (s += "translate(".concat(t.x / bt, "em, ").concat(t.y / bt, "em) ")),
    (s += "scale("
      .concat((t.size / bt) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / bt) * (t.flipY ? -1 : 1), ") ")),
    (s += "rotate(".concat(t.rotate, "deg) ")),
    s
  );
}
var ew = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function Gm() {
  var e = Hm,
    t = Wm,
    n = L.cssPrefix,
    r = L.replacementClass,
    i = ew;
  if (n !== e || r !== t) {
    var a = new RegExp("\\.".concat(e, "\\-"), "g"),
      o = new RegExp("\\--".concat(e, "\\-"), "g"),
      l = new RegExp("\\.".concat(t), "g");
    i = i
      .replace(a, ".".concat(n, "-"))
      .replace(o, "--".concat(n, "-"))
      .replace(l, ".".concat(r));
  }
  return i;
}
var Of = !1;
function il() {
  L.autoAddCss && !Of && (K1(Gm()), (Of = !0));
}
var tw = {
    mixout: function () {
      return { dom: { css: Gm, insertCss: il } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          il();
        },
        beforeI2svg: function () {
          il();
        },
      };
    },
  },
  kt = Gt || {};
kt[St] || (kt[St] = {});
kt[St].styles || (kt[St].styles = {});
kt[St].hooks || (kt[St].hooks = {});
kt[St].shims || (kt[St].shims = []);
var Ke = kt[St],
  Xm = [],
  nw = function e() {
    Y.removeEventListener("DOMContentLoaded", e),
      (Va = 1),
      Xm.map(function (t) {
        return t();
      });
  },
  Va = !1;
Ct &&
  ((Va = (Y.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    Y.readyState
  )),
  Va || Y.addEventListener("DOMContentLoaded", nw));
function rw(e) {
  Ct && (Va ? setTimeout(e, 0) : Xm.push(e));
}
function Ei(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    i = e.children,
    a = i === void 0 ? [] : i;
  return typeof e == "string"
    ? Km(e)
    : "<"
        .concat(t, " ")
        .concat(X1(r), ">")
        .concat(a.map(Ei).join(""), "</")
        .concat(t, ">");
}
function Tf(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var iw = function (t, n) {
    return function (r, i, a, o) {
      return t.call(n, r, i, a, o);
    };
  },
  al = function (t, n, r, i) {
    var a = Object.keys(t),
      o = a.length,
      l = i !== void 0 ? iw(n, i) : n,
      s,
      u,
      c;
    for (
      r === void 0 ? ((s = 1), (c = t[a[0]])) : ((s = 0), (c = r));
      s < o;
      s++
    )
      (u = a[s]), (c = l(c, t[u], u, t));
    return c;
  };
function aw(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      var a = e.charCodeAt(n++);
      (a & 64512) == 56320
        ? t.push(((i & 1023) << 10) + (a & 1023) + 65536)
        : (t.push(i), n--);
    } else t.push(i);
  }
  return t;
}
function ys(e) {
  var t = aw(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function ow(e, t) {
  var n = e.length,
    r = e.charCodeAt(t),
    i;
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((i = e.charCodeAt(t + 1)), i >= 56320 && i <= 57343)
    ? (r - 55296) * 1024 + i - 56320 + 65536
    : r;
}
function Af(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n],
      i = !!r.icon;
    return i ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function ws(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    i = r === void 0 ? !1 : r,
    a = Af(t);
  typeof Ke.hooks.addPack == "function" && !i
    ? Ke.hooks.addPack(e, Af(t))
    : (Ke.styles[e] = O(O({}, Ke.styles[e] || {}), a)),
    e === "fas" && ws("fa", t);
}
var Ki,
  Gi,
  Xi,
  Mn = Ke.styles,
  lw = Ke.shims,
  sw =
    ((Ki = {}),
    ce(Ki, V, Object.values(si[V])),
    ce(Ki, te, Object.values(si[te])),
    Ki),
  Uu = null,
  Jm = {},
  Zm = {},
  eh = {},
  th = {},
  nh = {},
  uw =
    ((Gi = {}),
    ce(Gi, V, Object.keys(oi[V])),
    ce(Gi, te, Object.keys(oi[te])),
    Gi);
function cw(e) {
  return ~W1.indexOf(e);
}
function fw(e, t) {
  var n = t.split("-"),
    r = n[0],
    i = n.slice(1).join("-");
  return r === e && i !== "" && !cw(i) ? i : null;
}
var rh = function () {
  var t = function (a) {
    return al(
      Mn,
      function (o, l, s) {
        return (o[s] = al(l, a, {})), o;
      },
      {}
    );
  };
  (Jm = t(function (i, a, o) {
    if ((a[3] && (i[a[3]] = o), a[2])) {
      var l = a[2].filter(function (s) {
        return typeof s == "number";
      });
      l.forEach(function (s) {
        i[s.toString(16)] = o;
      });
    }
    return i;
  })),
    (Zm = t(function (i, a, o) {
      if (((i[o] = o), a[2])) {
        var l = a[2].filter(function (s) {
          return typeof s == "string";
        });
        l.forEach(function (s) {
          i[s] = o;
        });
      }
      return i;
    })),
    (nh = t(function (i, a, o) {
      var l = a[2];
      return (
        (i[o] = o),
        l.forEach(function (s) {
          i[s] = o;
        }),
        i
      );
    }));
  var n = "far" in Mn || L.autoFetchSvg,
    r = al(
      lw,
      function (i, a) {
        var o = a[0],
          l = a[1],
          s = a[2];
        return (
          l === "far" && !n && (l = "fas"),
          typeof o == "string" && (i.names[o] = { prefix: l, iconName: s }),
          typeof o == "number" &&
            (i.unicodes[o.toString(16)] = { prefix: l, iconName: s }),
          i
        );
      },
      { names: {}, unicodes: {} }
    );
  (eh = r.names),
    (th = r.unicodes),
    (Uu = wo(L.styleDefault, { family: L.familyDefault }));
};
q1(function (e) {
  Uu = wo(e.styleDefault, { family: L.familyDefault });
});
rh();
function $u(e, t) {
  return (Jm[e] || {})[t];
}
function dw(e, t) {
  return (Zm[e] || {})[t];
}
function dn(e, t) {
  return (nh[e] || {})[t];
}
function ih(e) {
  return eh[e] || { prefix: null, iconName: null };
}
function pw(e) {
  var t = th[e],
    n = $u("fas", e);
  return (
    t ||
    (n ? { prefix: "fas", iconName: n } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function Xt() {
  return Uu;
}
var Bu = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function wo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    r = n === void 0 ? V : n,
    i = oi[r][e],
    a = li[r][e] || li[r][i],
    o = e in Ke.styles ? e : null;
  return a || o || null;
}
var Rf =
  ((Xi = {}),
  ce(Xi, V, Object.keys(si[V])),
  ce(Xi, te, Object.keys(si[te])),
  Xi);
function So(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = n.skipLookups,
    i = r === void 0 ? !1 : r,
    a =
      ((t = {}),
      ce(t, V, "".concat(L.cssPrefix, "-").concat(V)),
      ce(t, te, "".concat(L.cssPrefix, "-").concat(te)),
      t),
    o = null,
    l = V;
  (e.includes(a[V]) ||
    e.some(function (u) {
      return Rf[V].includes(u);
    })) &&
    (l = V),
    (e.includes(a[te]) ||
      e.some(function (u) {
        return Rf[te].includes(u);
      })) &&
      (l = te);
  var s = e.reduce(function (u, c) {
    var f = fw(L.cssPrefix, c);
    if (
      (Mn[c]
        ? ((c = sw[l].includes(c) ? M1[l][c] : c), (o = c), (u.prefix = c))
        : uw[l].indexOf(c) > -1
        ? ((o = c), (u.prefix = wo(c, { family: l })))
        : f
        ? (u.iconName = f)
        : c !== L.replacementClass &&
          c !== a[V] &&
          c !== a[te] &&
          u.rest.push(c),
      !i && u.prefix && u.iconName)
    ) {
      var p = o === "fa" ? ih(u.iconName) : {},
        y = dn(u.prefix, u.iconName);
      p.prefix && (o = null),
        (u.iconName = p.iconName || y || u.iconName),
        (u.prefix = p.prefix || u.prefix),
        u.prefix === "far" &&
          !Mn.far &&
          Mn.fas &&
          !L.autoFetchSvg &&
          (u.prefix = "fas");
    }
    return u;
  }, Bu());
  return (
    (e.includes("fa-brands") || e.includes("fab")) && (s.prefix = "fab"),
    (e.includes("fa-duotone") || e.includes("fad")) && (s.prefix = "fad"),
    !s.prefix &&
      l === te &&
      (Mn.fass || L.autoFetchSvg) &&
      ((s.prefix = "fass"),
      (s.iconName = dn(s.prefix, s.iconName) || s.iconName)),
    (s.prefix === "fa" || o === "fa") && (s.prefix = Xt() || "fas"),
    s
  );
}
var mw = (function () {
    function e() {
      N1(this, e), (this.definitions = {});
    }
    return (
      P1(e, [
        {
          key: "add",
          value: function () {
            for (
              var n = this, r = arguments.length, i = new Array(r), a = 0;
              a < r;
              a++
            )
              i[a] = arguments[a];
            var o = i.reduce(this._pullDefinitions, {});
            Object.keys(o).forEach(function (l) {
              (n.definitions[l] = O(O({}, n.definitions[l] || {}), o[l])),
                ws(l, o[l]);
              var s = si[V][l];
              s && ws(s, o[l]), rh();
            });
          },
        },
        {
          key: "reset",
          value: function () {
            this.definitions = {};
          },
        },
        {
          key: "_pullDefinitions",
          value: function (n, r) {
            var i = r.prefix && r.iconName && r.icon ? { 0: r } : r;
            return (
              Object.keys(i).map(function (a) {
                var o = i[a],
                  l = o.prefix,
                  s = o.iconName,
                  u = o.icon,
                  c = u[2];
                n[l] || (n[l] = {}),
                  c.length > 0 &&
                    c.forEach(function (f) {
                      typeof f == "string" && (n[l][f] = u);
                    }),
                  (n[l][s] = u);
              }),
              n
            );
          },
        },
      ]),
      e
    );
  })(),
  Lf = [],
  jn = {},
  Yn = {},
  hw = Object.keys(Yn);
function vw(e, t) {
  var n = t.mixoutsTo;
  return (
    (Lf = e),
    (jn = {}),
    Object.keys(Yn).forEach(function (r) {
      hw.indexOf(r) === -1 && delete Yn[r];
    }),
    Lf.forEach(function (r) {
      var i = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(i).forEach(function (o) {
          typeof i[o] == "function" && (n[o] = i[o]),
            Wa(i[o]) === "object" &&
              Object.keys(i[o]).forEach(function (l) {
                n[o] || (n[o] = {}), (n[o][l] = i[o][l]);
              });
        }),
        r.hooks)
      ) {
        var a = r.hooks();
        Object.keys(a).forEach(function (o) {
          jn[o] || (jn[o] = []), jn[o].push(a[o]);
        });
      }
      r.provides && r.provides(Yn);
    }),
    n
  );
}
function Ss(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
    i < n;
    i++
  )
    r[i - 2] = arguments[i];
  var a = jn[e] || [];
  return (
    a.forEach(function (o) {
      t = o.apply(null, [t].concat(r));
    }),
    t
  );
}
function kn(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var i = jn[e] || [];
  i.forEach(function (a) {
    a.apply(null, n);
  });
}
function Et() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return Yn[e] ? Yn[e].apply(null, t) : void 0;
}
function ks(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName,
    n = e.prefix || Xt();
  if (t)
    return (t = dn(n, t) || t), Tf(ah.definitions, n, t) || Tf(Ke.styles, n, t);
}
var ah = new mw(),
  gw = function () {
    (L.autoReplaceSvg = !1), (L.observeMutations = !1), kn("noAuto");
  },
  yw = {
    i2svg: function () {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Ct
        ? (kn("beforeI2svg", t), Et("pseudoElements2svg", t), Et("i2svg", t))
        : Promise.reject("Operation requires a DOM of some kind.");
    },
    watch: function () {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot;
      L.autoReplaceSvg === !1 && (L.autoReplaceSvg = !0),
        (L.observeMutations = !0),
        rw(function () {
          Sw({ autoReplaceSvgRoot: n }), kn("watch", t);
        });
    },
  },
  ww = {
    icon: function (t) {
      if (t === null) return null;
      if (Wa(t) === "object" && t.prefix && t.iconName)
        return {
          prefix: t.prefix,
          iconName: dn(t.prefix, t.iconName) || t.iconName,
        };
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1],
          r = wo(t[0]);
        return { prefix: r, iconName: dn(r, n) || n };
      }
      if (
        typeof t == "string" &&
        (t.indexOf("".concat(L.cssPrefix, "-")) > -1 || t.match(j1))
      ) {
        var i = So(t.split(" "), { skipLookups: !0 });
        return {
          prefix: i.prefix || Xt(),
          iconName: dn(i.prefix, i.iconName) || i.iconName,
        };
      }
      if (typeof t == "string") {
        var a = Xt();
        return { prefix: a, iconName: dn(a, t) || t };
      }
    },
  },
  Fe = {
    noAuto: gw,
    config: L,
    dom: yw,
    parse: ww,
    library: ah,
    findIconDefinition: ks,
    toHtml: Ei,
  },
  Sw = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      r = n === void 0 ? Y : n;
    (Object.keys(Ke.styles).length > 0 || L.autoFetchSvg) &&
      Ct &&
      L.autoReplaceSvg &&
      Fe.dom.i2svg({ node: r });
  };
function ko(e, t) {
  return (
    Object.defineProperty(e, "abstract", { get: t }),
    Object.defineProperty(e, "html", {
      get: function () {
        return e.abstract.map(function (r) {
          return Ei(r);
        });
      },
    }),
    Object.defineProperty(e, "node", {
      get: function () {
        if (Ct) {
          var r = Y.createElement("div");
          return (r.innerHTML = e.html), r.children;
        }
      },
    }),
    e
  );
}
function kw(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    i = e.attributes,
    a = e.styles,
    o = e.transform;
  if (ju(o) && n.found && !r.found) {
    var l = n.width,
      s = n.height,
      u = { x: l / s / 2, y: 0.5 };
    i.style = yo(
      O(
        O({}, a),
        {},
        {
          "transform-origin": ""
            .concat(u.x + o.x / 16, "em ")
            .concat(u.y + o.y / 16, "em"),
        }
      )
    );
  }
  return [{ tag: "svg", attributes: i, children: t }];
}
function Ew(e) {
  var t = e.prefix,
    n = e.iconName,
    r = e.children,
    i = e.attributes,
    a = e.symbol,
    o = a === !0 ? "".concat(t, "-").concat(L.cssPrefix, "-").concat(n) : a;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [
        { tag: "symbol", attributes: O(O({}, i), {}, { id: o }), children: r },
      ],
    },
  ];
}
function Hu(e) {
  var t = e.icons,
    n = t.main,
    r = t.mask,
    i = e.prefix,
    a = e.iconName,
    o = e.transform,
    l = e.symbol,
    s = e.title,
    u = e.maskId,
    c = e.titleId,
    f = e.extra,
    p = e.watchable,
    y = p === void 0 ? !1 : p,
    g = r.found ? r : n,
    w = g.width,
    N = g.height,
    m = i === "fak",
    d = [L.replacementClass, a ? "".concat(L.cssPrefix, "-").concat(a) : ""]
      .filter(function ($) {
        return f.classes.indexOf($) === -1;
      })
      .filter(function ($) {
        return $ !== "" || !!$;
      })
      .concat(f.classes)
      .join(" "),
    v = {
      children: [],
      attributes: O(
        O({}, f.attributes),
        {},
        {
          "data-prefix": i,
          "data-icon": a,
          class: d,
          role: f.attributes.role || "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 ".concat(w, " ").concat(N),
        }
      ),
    },
    k =
      m && !~f.classes.indexOf("fa-fw")
        ? { width: "".concat((w / N) * 16 * 0.0625, "em") }
        : {};
  y && (v.attributes[Sn] = ""),
    s &&
      (v.children.push({
        tag: "title",
        attributes: {
          id: v.attributes["aria-labelledby"] || "title-".concat(c || ci()),
        },
        children: [s],
      }),
      delete v.attributes.title);
  var S = O(
      O({}, v),
      {},
      {
        prefix: i,
        iconName: a,
        main: n,
        mask: r,
        maskId: u,
        transform: o,
        symbol: l,
        styles: O(O({}, k), f.styles),
      }
    ),
    C =
      r.found && n.found
        ? Et("generateAbstractMask", S) || { children: [], attributes: {} }
        : Et("generateAbstractIcon", S) || { children: [], attributes: {} },
    b = C.children,
    R = C.attributes;
  return (S.children = b), (S.attributes = R), l ? Ew(S) : kw(S);
}
function If(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    i = e.transform,
    a = e.title,
    o = e.extra,
    l = e.watchable,
    s = l === void 0 ? !1 : l,
    u = O(
      O(O({}, o.attributes), a ? { title: a } : {}),
      {},
      { class: o.classes.join(" ") }
    );
  s && (u[Sn] = "");
  var c = O({}, o.styles);
  ju(i) &&
    ((c.transform = Z1({
      transform: i,
      startCentered: !0,
      width: n,
      height: r,
    })),
    (c["-webkit-transform"] = c.transform));
  var f = yo(c);
  f.length > 0 && (u.style = f);
  var p = [];
  return (
    p.push({ tag: "span", attributes: u, children: [t] }),
    a &&
      p.push({ tag: "span", attributes: { class: "sr-only" }, children: [a] }),
    p
  );
}
function _w(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    i = O(
      O(O({}, r.attributes), n ? { title: n } : {}),
      {},
      { class: r.classes.join(" ") }
    ),
    a = yo(r.styles);
  a.length > 0 && (i.style = a);
  var o = [];
  return (
    o.push({ tag: "span", attributes: i, children: [t] }),
    n &&
      o.push({ tag: "span", attributes: { class: "sr-only" }, children: [n] }),
    o
  );
}
var ol = Ke.styles;
function Es(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    i = Lu(r, 1),
    a = i[0],
    o = null;
  return (
    Array.isArray(a)
      ? (o = {
          tag: "g",
          attributes: { class: "".concat(L.cssPrefix, "-").concat(fn.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(L.cssPrefix, "-").concat(fn.SECONDARY),
                fill: "currentColor",
                d: a[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(L.cssPrefix, "-").concat(fn.PRIMARY),
                fill: "currentColor",
                d: a[1],
              },
            },
          ],
        })
      : (o = { tag: "path", attributes: { fill: "currentColor", d: a } }),
    { found: !0, width: t, height: n, icon: o }
  );
}
var xw = { found: !1, width: 512, height: 512 };
function Cw(e, t) {
  !Vm &&
    !L.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
    );
}
function _s(e, t) {
  var n = t;
  return (
    t === "fa" && L.styleDefault !== null && (t = Xt()),
    new Promise(function (r, i) {
      if ((Et("missingIconAbstract"), n === "fa")) {
        var a = ih(e) || {};
        (e = a.iconName || e), (t = a.prefix || t);
      }
      if (e && t && ol[t] && ol[t][e]) {
        var o = ol[t][e];
        return r(Es(o));
      }
      Cw(e, t),
        r(
          O(
            O({}, xw),
            {},
            {
              icon:
                L.showMissingIcons && e ? Et("missingIconAbstract") || {} : {},
            }
          )
        );
    })
  );
}
var Df = function () {},
  xs =
    L.measurePerformance && Hi && Hi.mark && Hi.measure
      ? Hi
      : { mark: Df, measure: Df },
  Or = 'FA "6.4.0"',
  Nw = function (t) {
    return (
      xs.mark("".concat(Or, " ").concat(t, " begins")),
      function () {
        return oh(t);
      }
    );
  },
  oh = function (t) {
    xs.mark("".concat(Or, " ").concat(t, " ends")),
      xs.measure(
        "".concat(Or, " ").concat(t),
        "".concat(Or, " ").concat(t, " begins"),
        "".concat(Or, " ").concat(t, " ends")
      );
  },
  Wu = { begin: Nw, end: oh },
  ha = function () {};
function zf(e) {
  var t = e.getAttribute ? e.getAttribute(Sn) : null;
  return typeof t == "string";
}
function Pw(e) {
  var t = e.getAttribute ? e.getAttribute(Du) : null,
    n = e.getAttribute ? e.getAttribute(zu) : null;
  return t && n;
}
function bw(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(L.replacementClass)
  );
}
function Ow() {
  if (L.autoReplaceSvg === !0) return va.replace;
  var e = va[L.autoReplaceSvg];
  return e || va.replace;
}
function Tw(e) {
  return Y.createElementNS("http://www.w3.org/2000/svg", e);
}
function Aw(e) {
  return Y.createElement(e);
}
function lh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    r = n === void 0 ? (e.tag === "svg" ? Tw : Aw) : n;
  if (typeof e == "string") return Y.createTextNode(e);
  var i = r(e.tag);
  Object.keys(e.attributes || []).forEach(function (o) {
    i.setAttribute(o, e.attributes[o]);
  });
  var a = e.children || [];
  return (
    a.forEach(function (o) {
      i.appendChild(lh(o, { ceFn: r }));
    }),
    i
  );
}
function Rw(e) {
  var t = " ".concat(e.outerHTML, " ");
  return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
}
var va = {
  replace: function (t) {
    var n = t[0];
    if (n.parentNode)
      if (
        (t[1].forEach(function (i) {
          n.parentNode.insertBefore(lh(i), n);
        }),
        n.getAttribute(Sn) === null && L.keepOriginalSource)
      ) {
        var r = Y.createComment(Rw(n));
        n.parentNode.replaceChild(r, n);
      } else n.remove();
  },
  nest: function (t) {
    var n = t[0],
      r = t[1];
    if (~Mu(n).indexOf(L.replacementClass)) return va.replace(t);
    var i = new RegExp("".concat(L.cssPrefix, "-.*"));
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      var a = r[0].attributes.class.split(" ").reduce(
        function (l, s) {
          return (
            s === L.replacementClass || s.match(i)
              ? l.toSvg.push(s)
              : l.toNode.push(s),
            l
          );
        },
        { toNode: [], toSvg: [] }
      );
      (r[0].attributes.class = a.toSvg.join(" ")),
        a.toNode.length === 0
          ? n.removeAttribute("class")
          : n.setAttribute("class", a.toNode.join(" "));
    }
    var o = r.map(function (l) {
      return Ei(l);
    }).join(`
`);
    n.setAttribute(Sn, ""), (n.innerHTML = o);
  },
};
function Ff(e) {
  e();
}
function sh(e, t) {
  var n = typeof t == "function" ? t : ha;
  if (e.length === 0) n();
  else {
    var r = Ff;
    L.mutateApproach === z1 && (r = Gt.requestAnimationFrame || Ff),
      r(function () {
        var i = Ow(),
          a = Wu.begin("mutate");
        e.map(i), a(), n();
      });
  }
}
var Vu = !1;
function uh() {
  Vu = !0;
}
function Cs() {
  Vu = !1;
}
var Qa = null;
function Mf(e) {
  if (Pf && L.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? ha : t,
      r = e.nodeCallback,
      i = r === void 0 ? ha : r,
      a = e.pseudoElementsCallback,
      o = a === void 0 ? ha : a,
      l = e.observeMutationsRoot,
      s = l === void 0 ? Y : l;
    (Qa = new Pf(function (u) {
      if (!Vu) {
        var c = Xt();
        fr(u).forEach(function (f) {
          if (
            (f.type === "childList" &&
              f.addedNodes.length > 0 &&
              !zf(f.addedNodes[0]) &&
              (L.searchPseudoElements && o(f.target), n(f.target)),
            f.type === "attributes" &&
              f.target.parentNode &&
              L.searchPseudoElements &&
              o(f.target.parentNode),
            f.type === "attributes" &&
              zf(f.target) &&
              ~H1.indexOf(f.attributeName))
          )
            if (f.attributeName === "class" && Pw(f.target)) {
              var p = So(Mu(f.target)),
                y = p.prefix,
                g = p.iconName;
              f.target.setAttribute(Du, y || c),
                g && f.target.setAttribute(zu, g);
            } else bw(f.target) && i(f.target);
        });
      }
    })),
      Ct &&
        Qa.observe(s, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
}
function Lw() {
  Qa && Qa.disconnect();
}
function Iw(e) {
  var t = e.getAttribute("style"),
    n = [];
  return (
    t &&
      (n = t.split(";").reduce(function (r, i) {
        var a = i.split(":"),
          o = a[0],
          l = a.slice(1);
        return o && l.length > 0 && (r[o] = l.join(":").trim()), r;
      }, {})),
    n
  );
}
function Dw(e) {
  var t = e.getAttribute("data-prefix"),
    n = e.getAttribute("data-icon"),
    r = e.innerText !== void 0 ? e.innerText.trim() : "",
    i = So(Mu(e));
  return (
    i.prefix || (i.prefix = Xt()),
    t && n && ((i.prefix = t), (i.iconName = n)),
    (i.iconName && i.prefix) ||
      (i.prefix &&
        r.length > 0 &&
        (i.iconName =
          dw(i.prefix, e.innerText) || $u(i.prefix, ys(e.innerText))),
      !i.iconName &&
        L.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  );
}
function zw(e) {
  var t = fr(e.attributes).reduce(function (i, a) {
      return (
        i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i
      );
    }, {}),
    n = e.getAttribute("title"),
    r = e.getAttribute("data-fa-title-id");
  return (
    L.autoA11y &&
      (n
        ? (t["aria-labelledby"] = ""
            .concat(L.replacementClass, "-title-")
            .concat(r || ci()))
        : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
    t
  );
}
function Fw() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: it,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function jf(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: !0 },
    n = Dw(e),
    r = n.iconName,
    i = n.prefix,
    a = n.rest,
    o = zw(e),
    l = Ss("parseNodeAttributes", {}, e),
    s = t.styleParser ? Iw(e) : [];
  return O(
    {
      iconName: r,
      title: e.getAttribute("title"),
      titleId: e.getAttribute("data-fa-title-id"),
      prefix: i,
      transform: it,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: a, styles: s, attributes: o },
    },
    l
  );
}
var Mw = Ke.styles;
function ch(e) {
  var t = L.autoReplaceSvg === "nest" ? jf(e, { styleParser: !1 }) : jf(e);
  return ~t.extra.classes.indexOf(Qm)
    ? Et("generateLayersText", e, t)
    : Et("generateSvgReplacementMutation", e, t);
}
var Jt = new Set();
Fu.map(function (e) {
  Jt.add("fa-".concat(e));
});
Object.keys(oi[V]).map(Jt.add.bind(Jt));
Object.keys(oi[te]).map(Jt.add.bind(Jt));
Jt = Si(Jt);
function Uf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Ct) return Promise.resolve();
  var n = Y.documentElement.classList,
    r = function (f) {
      return n.add("".concat(bf, "-").concat(f));
    },
    i = function (f) {
      return n.remove("".concat(bf, "-").concat(f));
    },
    a = L.autoFetchSvg
      ? Jt
      : Fu.map(function (c) {
          return "fa-".concat(c);
        }).concat(Object.keys(Mw));
  a.includes("fa") || a.push("fa");
  var o = [".".concat(Qm, ":not([").concat(Sn, "])")]
    .concat(
      a.map(function (c) {
        return ".".concat(c, ":not([").concat(Sn, "])");
      })
    )
    .join(", ");
  if (o.length === 0) return Promise.resolve();
  var l = [];
  try {
    l = fr(e.querySelectorAll(o));
  } catch {}
  if (l.length > 0) r("pending"), i("complete");
  else return Promise.resolve();
  var s = Wu.begin("onTree"),
    u = l.reduce(function (c, f) {
      try {
        var p = ch(f);
        p && c.push(p);
      } catch (y) {
        Vm || (y.name === "MissingIcon" && console.error(y));
      }
      return c;
    }, []);
  return new Promise(function (c, f) {
    Promise.all(u)
      .then(function (p) {
        sh(p, function () {
          r("active"),
            r("complete"),
            i("pending"),
            typeof t == "function" && t(),
            s(),
            c();
        });
      })
      .catch(function (p) {
        s(), f(p);
      });
  });
}
function jw(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  ch(e).then(function (n) {
    n && sh([n], t);
  });
}
function Uw(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : ks(t || {}),
      i = n.mask;
    return (
      i && (i = (i || {}).icon ? i : ks(i || {})),
      e(r, O(O({}, n), {}, { mask: i }))
    );
  };
}
var $w = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transform,
      i = r === void 0 ? it : r,
      a = n.symbol,
      o = a === void 0 ? !1 : a,
      l = n.mask,
      s = l === void 0 ? null : l,
      u = n.maskId,
      c = u === void 0 ? null : u,
      f = n.title,
      p = f === void 0 ? null : f,
      y = n.titleId,
      g = y === void 0 ? null : y,
      w = n.classes,
      N = w === void 0 ? [] : w,
      m = n.attributes,
      d = m === void 0 ? {} : m,
      v = n.styles,
      k = v === void 0 ? {} : v;
    if (t) {
      var S = t.prefix,
        C = t.iconName,
        b = t.icon;
      return ko(O({ type: "icon" }, t), function () {
        return (
          kn("beforeDOMElementCreation", { iconDefinition: t, params: n }),
          L.autoA11y &&
            (p
              ? (d["aria-labelledby"] = ""
                  .concat(L.replacementClass, "-title-")
                  .concat(g || ci()))
              : ((d["aria-hidden"] = "true"), (d.focusable = "false"))),
          Hu({
            icons: {
              main: Es(b),
              mask: s
                ? Es(s.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: S,
            iconName: C,
            transform: O(O({}, it), i),
            symbol: o,
            title: p,
            maskId: c,
            titleId: g,
            extra: { attributes: d, styles: k, classes: N },
          })
        );
      });
    }
  },
  Bw = {
    mixout: function () {
      return { icon: Uw($w) };
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.treeCallback = Uf), (n.nodeCallback = jw), n;
        },
      };
    },
    provides: function (t) {
      (t.i2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? Y : r,
          a = n.callback,
          o = a === void 0 ? function () {} : a;
        return Uf(i, o);
      }),
        (t.generateSvgReplacementMutation = function (n, r) {
          var i = r.iconName,
            a = r.title,
            o = r.titleId,
            l = r.prefix,
            s = r.transform,
            u = r.symbol,
            c = r.mask,
            f = r.maskId,
            p = r.extra;
          return new Promise(function (y, g) {
            Promise.all([
              _s(i, l),
              c.iconName
                ? _s(c.iconName, c.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then(function (w) {
                var N = Lu(w, 2),
                  m = N[0],
                  d = N[1];
                y([
                  n,
                  Hu({
                    icons: { main: m, mask: d },
                    prefix: l,
                    iconName: i,
                    transform: s,
                    symbol: u,
                    maskId: f,
                    title: a,
                    titleId: o,
                    extra: p,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(g);
          });
        }),
        (t.generateAbstractIcon = function (n) {
          var r = n.children,
            i = n.attributes,
            a = n.main,
            o = n.transform,
            l = n.styles,
            s = yo(l);
          s.length > 0 && (i.style = s);
          var u;
          return (
            ju(o) &&
              (u = Et("generateAbstractTransformGrouping", {
                main: a,
                transform: o,
                containerWidth: a.width,
                iconWidth: a.width,
              })),
            r.push(u || a.icon),
            { children: r, attributes: i }
          );
        });
    },
  },
  Hw = {
    mixout: function () {
      return {
        layer: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.classes,
            a = i === void 0 ? [] : i;
          return ko({ type: "layer" }, function () {
            kn("beforeDOMElementCreation", { assembler: n, params: r });
            var o = [];
            return (
              n(function (l) {
                Array.isArray(l)
                  ? l.map(function (s) {
                      o = o.concat(s.abstract);
                    })
                  : (o = o.concat(l.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(L.cssPrefix, "-layers")]
                      .concat(Si(a))
                      .join(" "),
                  },
                  children: o,
                },
              ]
            );
          });
        },
      };
    },
  },
  Ww = {
    mixout: function () {
      return {
        counter: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.title,
            a = i === void 0 ? null : i,
            o = r.classes,
            l = o === void 0 ? [] : o,
            s = r.attributes,
            u = s === void 0 ? {} : s,
            c = r.styles,
            f = c === void 0 ? {} : c;
          return ko({ type: "counter", content: n }, function () {
            return (
              kn("beforeDOMElementCreation", { content: n, params: r }),
              _w({
                content: n.toString(),
                title: a,
                extra: {
                  attributes: u,
                  styles: f,
                  classes: ["".concat(L.cssPrefix, "-layers-counter")].concat(
                    Si(l)
                  ),
                },
              })
            );
          });
        },
      };
    },
  },
  Vw = {
    mixout: function () {
      return {
        text: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.transform,
            a = i === void 0 ? it : i,
            o = r.title,
            l = o === void 0 ? null : o,
            s = r.classes,
            u = s === void 0 ? [] : s,
            c = r.attributes,
            f = c === void 0 ? {} : c,
            p = r.styles,
            y = p === void 0 ? {} : p;
          return ko({ type: "text", content: n }, function () {
            return (
              kn("beforeDOMElementCreation", { content: n, params: r }),
              If({
                content: n,
                transform: O(O({}, it), a),
                title: l,
                extra: {
                  attributes: f,
                  styles: y,
                  classes: ["".concat(L.cssPrefix, "-layers-text")].concat(
                    Si(u)
                  ),
                },
              })
            );
          });
        },
      };
    },
    provides: function (t) {
      t.generateLayersText = function (n, r) {
        var i = r.title,
          a = r.transform,
          o = r.extra,
          l = null,
          s = null;
        if (Bm) {
          var u = parseInt(getComputedStyle(n).fontSize, 10),
            c = n.getBoundingClientRect();
          (l = c.width / u), (s = c.height / u);
        }
        return (
          L.autoA11y && !i && (o.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            n,
            If({
              content: n.innerHTML,
              width: l,
              height: s,
              transform: a,
              title: i,
              extra: o,
              watchable: !0,
            }),
          ])
        );
      };
    },
  },
  Qw = new RegExp('"', "ug"),
  $f = [1105920, 1112319];
function Yw(e) {
  var t = e.replace(Qw, ""),
    n = ow(t, 0),
    r = n >= $f[0] && n <= $f[1],
    i = t.length === 2 ? t[0] === t[1] : !1;
  return { value: ys(i ? t[0] : t), isSecondary: r || i };
}
function Bf(e, t) {
  var n = "".concat(D1).concat(t.replace(":", "-"));
  return new Promise(function (r, i) {
    if (e.getAttribute(n) !== null) return r();
    var a = fr(e.children),
      o = a.filter(function (b) {
        return b.getAttribute(gs) === t;
      })[0],
      l = Gt.getComputedStyle(e, t),
      s = l.getPropertyValue("font-family").match(U1),
      u = l.getPropertyValue("font-weight"),
      c = l.getPropertyValue("content");
    if (o && !s) return e.removeChild(o), r();
    if (s && c !== "none" && c !== "") {
      var f = l.getPropertyValue("content"),
        p = ~["Sharp"].indexOf(s[2]) ? te : V,
        y = ~[
          "Solid",
          "Regular",
          "Light",
          "Thin",
          "Duotone",
          "Brands",
          "Kit",
        ].indexOf(s[2])
          ? li[p][s[2].toLowerCase()]
          : $1[p][u],
        g = Yw(f),
        w = g.value,
        N = g.isSecondary,
        m = s[0].startsWith("FontAwesome"),
        d = $u(y, w),
        v = d;
      if (m) {
        var k = pw(w);
        k.iconName && k.prefix && ((d = k.iconName), (y = k.prefix));
      }
      if (
        d &&
        !N &&
        (!o || o.getAttribute(Du) !== y || o.getAttribute(zu) !== v)
      ) {
        e.setAttribute(n, v), o && e.removeChild(o);
        var S = Fw(),
          C = S.extra;
        (C.attributes[gs] = t),
          _s(d, y)
            .then(function (b) {
              var R = Hu(
                  O(
                    O({}, S),
                    {},
                    {
                      icons: { main: b, mask: Bu() },
                      prefix: y,
                      iconName: v,
                      extra: C,
                      watchable: !0,
                    }
                  )
                ),
                $ = Y.createElement("svg");
              t === "::before"
                ? e.insertBefore($, e.firstChild)
                : e.appendChild($),
                ($.outerHTML = R.map(function (z) {
                  return Ei(z);
                }).join(`
`)),
                e.removeAttribute(n),
                r();
            })
            .catch(i);
      } else r();
    } else r();
  });
}
function qw(e) {
  return Promise.all([Bf(e, "::before"), Bf(e, "::after")]);
}
function Kw(e) {
  return (
    e.parentNode !== document.head &&
    !~F1.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(gs) &&
    (!e.parentNode || e.parentNode.tagName !== "svg")
  );
}
function Hf(e) {
  if (Ct)
    return new Promise(function (t, n) {
      var r = fr(e.querySelectorAll("*")).filter(Kw).map(qw),
        i = Wu.begin("searchPseudoElements");
      uh(),
        Promise.all(r)
          .then(function () {
            i(), Cs(), t();
          })
          .catch(function () {
            i(), Cs(), n();
          });
    });
}
var Gw = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.pseudoElementsCallback = Hf), n;
        },
      };
    },
    provides: function (t) {
      t.pseudoElements2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? Y : r;
        L.searchPseudoElements && Hf(i);
      };
    },
  },
  Wf = !1,
  Xw = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            uh(), (Wf = !0);
          },
        },
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          Mf(Ss("mutationObserverCallbacks", {}));
        },
        noAuto: function () {
          Lw();
        },
        watch: function (n) {
          var r = n.observeMutationsRoot;
          Wf
            ? Cs()
            : Mf(Ss("mutationObserverCallbacks", { observeMutationsRoot: r }));
        },
      };
    },
  },
  Vf = function (t) {
    var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return t
      .toLowerCase()
      .split(" ")
      .reduce(function (r, i) {
        var a = i.toLowerCase().split("-"),
          o = a[0],
          l = a.slice(1).join("-");
        if (o && l === "h") return (r.flipX = !0), r;
        if (o && l === "v") return (r.flipY = !0), r;
        if (((l = parseFloat(l)), isNaN(l))) return r;
        switch (o) {
          case "grow":
            r.size = r.size + l;
            break;
          case "shrink":
            r.size = r.size - l;
            break;
          case "left":
            r.x = r.x - l;
            break;
          case "right":
            r.x = r.x + l;
            break;
          case "up":
            r.y = r.y - l;
            break;
          case "down":
            r.y = r.y + l;
            break;
          case "rotate":
            r.rotate = r.rotate + l;
            break;
        }
        return r;
      }, n);
  },
  Jw = {
    mixout: function () {
      return {
        parse: {
          transform: function (n) {
            return Vf(n);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-transform");
          return i && (n.transform = Vf(i)), n;
        },
      };
    },
    provides: function (t) {
      t.generateAbstractTransformGrouping = function (n) {
        var r = n.main,
          i = n.transform,
          a = n.containerWidth,
          o = n.iconWidth,
          l = { transform: "translate(".concat(a / 2, " 256)") },
          s = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "),
          u = "scale("
            .concat((i.size / 16) * (i.flipX ? -1 : 1), ", ")
            .concat((i.size / 16) * (i.flipY ? -1 : 1), ") "),
          c = "rotate(".concat(i.rotate, " 0 0)"),
          f = { transform: "".concat(s, " ").concat(u, " ").concat(c) },
          p = { transform: "translate(".concat((o / 2) * -1, " -256)") },
          y = { outer: l, inner: f, path: p };
        return {
          tag: "g",
          attributes: O({}, y.outer),
          children: [
            {
              tag: "g",
              attributes: O({}, y.inner),
              children: [
                {
                  tag: r.icon.tag,
                  children: r.icon.children,
                  attributes: O(O({}, r.icon.attributes), y.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  ll = { x: 0, y: 0, width: "100%", height: "100%" };
function Qf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
  );
}
function Zw(e) {
  return e.tag === "g" ? e.children : [e];
}
var e2 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-mask"),
            a = i
              ? So(
                  i.split(" ").map(function (o) {
                    return o.trim();
                  })
                )
              : Bu();
          return (
            a.prefix || (a.prefix = Xt()),
            (n.mask = a),
            (n.maskId = r.getAttribute("data-fa-mask-id")),
            n
          );
        },
      };
    },
    provides: function (t) {
      t.generateAbstractMask = function (n) {
        var r = n.children,
          i = n.attributes,
          a = n.main,
          o = n.mask,
          l = n.maskId,
          s = n.transform,
          u = a.width,
          c = a.icon,
          f = o.width,
          p = o.icon,
          y = J1({ transform: s, containerWidth: f, iconWidth: u }),
          g = { tag: "rect", attributes: O(O({}, ll), {}, { fill: "white" }) },
          w = c.children ? { children: c.children.map(Qf) } : {},
          N = {
            tag: "g",
            attributes: O({}, y.inner),
            children: [
              Qf(
                O({ tag: c.tag, attributes: O(O({}, c.attributes), y.path) }, w)
              ),
            ],
          },
          m = { tag: "g", attributes: O({}, y.outer), children: [N] },
          d = "mask-".concat(l || ci()),
          v = "clip-".concat(l || ci()),
          k = {
            tag: "mask",
            attributes: O(
              O({}, ll),
              {},
              {
                id: d,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse",
              }
            ),
            children: [g, m],
          },
          S = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: v }, children: Zw(p) },
              k,
            ],
          };
        return (
          r.push(S, {
            tag: "rect",
            attributes: O(
              {
                fill: "currentColor",
                "clip-path": "url(#".concat(v, ")"),
                mask: "url(#".concat(d, ")"),
              },
              ll
            ),
          }),
          { children: r, attributes: i }
        );
      };
    },
  },
  t2 = {
    provides: function (t) {
      var n = !1;
      Gt.matchMedia &&
        (n = Gt.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (t.missingIconAbstract = function () {
          var r = [],
            i = { fill: "currentColor" },
            a = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          r.push({
            tag: "path",
            attributes: O(
              O({}, i),
              {},
              {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
              }
            ),
          });
          var o = O(O({}, a), {}, { attributeName: "opacity" }),
            l = {
              tag: "circle",
              attributes: O(O({}, i), {}, { cx: "256", cy: "364", r: "28" }),
              children: [],
            };
          return (
            n ||
              l.children.push(
                {
                  tag: "animate",
                  attributes: O(
                    O({}, a),
                    {},
                    { attributeName: "r", values: "28;14;28;28;14;28;" }
                  ),
                },
                {
                  tag: "animate",
                  attributes: O(O({}, o), {}, { values: "1;0;1;1;0;1;" }),
                }
              ),
            r.push(l),
            r.push({
              tag: "path",
              attributes: O(
                O({}, i),
                {},
                {
                  opacity: "1",
                  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                }
              ),
              children: n
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: O(O({}, o), {}, { values: "1;0;0;0;0;1;" }),
                    },
                  ],
            }),
            n ||
              r.push({
                tag: "path",
                attributes: O(
                  O({}, i),
                  {},
                  {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                  }
                ),
                children: [
                  {
                    tag: "animate",
                    attributes: O(O({}, o), {}, { values: "0;0;1;1;0;0;" }),
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: r }
          );
        });
    },
  },
  n2 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-symbol"),
            a = i === null ? !1 : i === "" ? !0 : i;
          return (n.symbol = a), n;
        },
      };
    },
  },
  r2 = [tw, Bw, Hw, Ww, Vw, Gw, Xw, Jw, e2, t2, n2];
vw(r2, { mixoutsTo: Fe });
Fe.noAuto;
Fe.config;
Fe.library;
Fe.dom;
var Ns = Fe.parse;
Fe.findIconDefinition;
Fe.toHtml;
var i2 = Fe.icon;
Fe.layer;
Fe.text;
Fe.counter;
var fh = { exports: {} },
  a2 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  o2 = a2,
  l2 = o2;
function dh() {}
function ph() {}
ph.resetWarningCache = dh;
var s2 = function () {
  function e(r, i, a, o, l, s) {
    if (s !== l2) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: ph,
    resetWarningCache: dh,
  };
  return (n.PropTypes = n), n;
};
fh.exports = s2();
var u2 = fh.exports;
const F = Xf(u2);
function Yf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Mt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yf(Object(n), !0).forEach(function (r) {
          Un(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Yf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Ya(e) {
  return (
    (Ya =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ya(e)
  );
}
function Un(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function c2(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function f2(e, t) {
  if (e == null) return {};
  var n = c2(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Ps(e) {
  return d2(e) || p2(e) || m2(e) || h2();
}
function d2(e) {
  if (Array.isArray(e)) return bs(e);
}
function p2(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function m2(e, t) {
  if (e) {
    if (typeof e == "string") return bs(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return bs(e, t);
  }
}
function bs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function h2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function v2(e) {
  var t,
    n = e.beat,
    r = e.fade,
    i = e.beatFade,
    a = e.bounce,
    o = e.shake,
    l = e.flash,
    s = e.spin,
    u = e.spinPulse,
    c = e.spinReverse,
    f = e.pulse,
    p = e.fixedWidth,
    y = e.inverse,
    g = e.border,
    w = e.listItem,
    N = e.flip,
    m = e.size,
    d = e.rotation,
    v = e.pull,
    k =
      ((t = {
        "fa-beat": n,
        "fa-fade": r,
        "fa-beat-fade": i,
        "fa-bounce": a,
        "fa-shake": o,
        "fa-flash": l,
        "fa-spin": s,
        "fa-spin-reverse": c,
        "fa-spin-pulse": u,
        "fa-pulse": f,
        "fa-fw": p,
        "fa-inverse": y,
        "fa-border": g,
        "fa-li": w,
        "fa-flip": N === !0,
        "fa-flip-horizontal": N === "horizontal" || N === "both",
        "fa-flip-vertical": N === "vertical" || N === "both",
      }),
      Un(t, "fa-".concat(m), typeof m < "u" && m !== null),
      Un(t, "fa-rotate-".concat(d), typeof d < "u" && d !== null && d !== 0),
      Un(t, "fa-pull-".concat(v), typeof v < "u" && v !== null),
      Un(t, "fa-swap-opacity", e.swapOpacity),
      t);
  return Object.keys(k)
    .map(function (S) {
      return k[S] ? S : null;
    })
    .filter(function (S) {
      return S;
    });
}
function g2(e) {
  return (e = e - 0), e === e;
}
function mh(e) {
  return g2(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : "";
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var y2 = ["style"];
function w2(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function S2(e) {
  return e
    .split(";")
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, n) {
      var r = n.indexOf(":"),
        i = mh(n.slice(0, r)),
        a = n.slice(r + 1).trim();
      return i.startsWith("webkit") ? (t[w2(i)] = a) : (t[i] = a), t;
    }, {});
}
function hh(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string") return t;
  var r = (t.children || []).map(function (s) {
      return hh(e, s);
    }),
    i = Object.keys(t.attributes || {}).reduce(
      function (s, u) {
        var c = t.attributes[u];
        switch (u) {
          case "class":
            (s.attrs.className = c), delete t.attributes.class;
            break;
          case "style":
            s.attrs.style = S2(c);
            break;
          default:
            u.indexOf("aria-") === 0 || u.indexOf("data-") === 0
              ? (s.attrs[u.toLowerCase()] = c)
              : (s.attrs[mh(u)] = c);
        }
        return s;
      },
      { attrs: {} }
    ),
    a = n.style,
    o = a === void 0 ? {} : a,
    l = f2(n, y2);
  return (
    (i.attrs.style = Mt(Mt({}, i.attrs.style), o)),
    e.apply(void 0, [t.tag, Mt(Mt({}, i.attrs), l)].concat(Ps(r)))
  );
}
var vh = !1;
try {
  vh = !0;
} catch {}
function k2() {
  if (!vh && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function qf(e) {
  if (e && Ya(e) === "object" && e.prefix && e.iconName && e.icon) return e;
  if (Ns.icon) return Ns.icon(e);
  if (e === null) return null;
  if (e && Ya(e) === "object" && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] };
  if (typeof e == "string") return { prefix: "fas", iconName: e };
}
function sl(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? Un({}, e, t)
    : {};
}
var Ze = Ls.forwardRef(function (e, t) {
  var n = e.icon,
    r = e.mask,
    i = e.symbol,
    a = e.className,
    o = e.title,
    l = e.titleId,
    s = e.maskId,
    u = qf(n),
    c = sl("classes", [].concat(Ps(v2(e)), Ps(a.split(" ")))),
    f = sl(
      "transform",
      typeof e.transform == "string" ? Ns.transform(e.transform) : e.transform
    ),
    p = sl("mask", qf(r)),
    y = i2(
      u,
      Mt(
        Mt(Mt(Mt({}, c), f), p),
        {},
        { symbol: i, title: o, titleId: l, maskId: s }
      )
    );
  if (!y) return k2("Could not find icon", u), null;
  var g = y.abstract,
    w = { ref: t };
  return (
    Object.keys(e).forEach(function (N) {
      Ze.defaultProps.hasOwnProperty(N) || (w[N] = e[N]);
    }),
    E2(g[0], w)
  );
});
Ze.displayName = "FontAwesomeIcon";
Ze.propTypes = {
  beat: F.bool,
  border: F.bool,
  beatFade: F.bool,
  bounce: F.bool,
  className: F.string,
  fade: F.bool,
  flash: F.bool,
  mask: F.oneOfType([F.object, F.array, F.string]),
  maskId: F.string,
  fixedWidth: F.bool,
  inverse: F.bool,
  flip: F.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: F.oneOfType([F.object, F.array, F.string]),
  listItem: F.bool,
  pull: F.oneOf(["right", "left"]),
  pulse: F.bool,
  rotation: F.oneOf([0, 90, 180, 270]),
  shake: F.bool,
  size: F.oneOf([
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  spin: F.bool,
  spinPulse: F.bool,
  spinReverse: F.bool,
  symbol: F.oneOfType([F.bool, F.string]),
  title: F.string,
  titleId: F.string,
  transform: F.oneOfType([F.string, F.object]),
  swapOpacity: F.bool,
};
Ze.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1,
};
var E2 = hh.bind(null, Ls.createElement),
  gh = {
    prefix: "fas",
    iconName: "pen-to-square",
    icon: [
      512,
      512,
      ["edit"],
      "f044",
      "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z",
    ],
  },
  _2 = {
    prefix: "fas",
    iconName: "user",
    icon: [
      448,
      512,
      [128100, 62144],
      "f007",
      "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z",
    ],
  },
  yh = {
    prefix: "fas",
    iconName: "trash",
    icon: [
      448,
      512,
      [],
      "f1f8",
      "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z",
    ],
  },
  wh = {
    prefix: "fas",
    iconName: "plus",
    icon: [
      448,
      512,
      [10133, 61543, "add"],
      "2b",
      "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z",
    ],
  };
_.createContext({});
const Kf = (e) => {
    const [r, i] = _.useState(""),
      [a, o] = _.useState(""),
      [l, s] = _.useState(""),
      [u, c] = _.useState({}),
      f = fo();
    _.useEffect(() => {
      const y = window.localStorage.getItem("USER");
      y && c(JSON.parse(y)), console.log("authData", y);
    }, []),
      _.useEffect(() => {
        window.localStorage.setItem("USER", JSON.stringify(u));
      }, [u]);
    const p = async (y) => {
      y.preventDefault();
      try {
        const g = await Le.post("http://localhost:8080/api/login", {
            email: r,
            password: a,
          }),
          w = {
            fullName: g.data.fullName,
            role: g.data.role,
            registration: g.data.registration,
          };
        switch (
          (c({
            fullName: g.data.fullName,
            role: g.data.role,
            registration: g.data.registration,
          }),
          e.handleClick({
            fullName: g.data.fullName,
            role: g.data.role,
            registration: g.data.registration,
          }),
          w.role)
        ) {
          case "STUDENT":
            console.log("student"), f("/student", { state: { dataSubmit: w } });
            break;
          case "TEACHER":
            f("/teacher", { state: { dataSubmit: w } });
            break;
          case "ADMINISTRATOR":
            f("/administrator/surveys", { state: { dataSubmit: w } });
            break;
          default:
            break;
        }
      } catch (g) {
        console.log(g), s(g.response.data);
      }
    };
    return P("div", {
      children: [
        h(gi, { showLinks: !1, isLogin: !0 }),
        P("div", {
          className: Bi.login,
          children: [
            P("div", {
              className: Bi.heading,
              children: [
                h(Ze, { icon: _2, size: "xl" }),
                h("h2", { children: "Ingresa a tu cuenta" }),
              ],
            }),
            P("form", {
              className: Bi.form,
              children: [
                h("label", { htmlFor: "email", children: "Email" }),
                h("input", {
                  required: !0,
                  type: "email",
                  id: "email",
                  name: "email",
                  placeholder: "a00123456@tec.mx",
                  onChange: (y) => {
                    i(y.target.value);
                  },
                }),
                h("label", { htmlFor: "password", children: "Contraseña" }),
                h("input", {
                  required: !0,
                  type: "password",
                  id: "password",
                  name: "password",
                  placeholder: "********",
                  onChange: (y) => {
                    o(y.target.value);
                  },
                }),
                h("button", {
                  type: "submit",
                  onClick: p,
                  children: "Ingresar",
                }),
                l && h("p", { className: Bi.error, children: l }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  x2 = "_noAnswers_kqjp7_1",
  C2 = "_wrapper_kqjp7_8",
  N2 = "_container_kqjp7_15",
  P2 = "_courseTitle_kqjp7_22",
  b2 = "_ammountAnswers_kqjp7_28",
  O2 = "_tableContainer_kqjp7_34",
  T2 = "_table_kqjp7_34",
  A2 = "_tableHead_kqjp7_55",
  R2 = "_tableBody_kqjp7_60",
  lt = {
    noAnswers: x2,
    wrapper: C2,
    container: N2,
    courseTitle: P2,
    ammountAnswers: b2,
    tableContainer: O2,
    table: T2,
    tableHead: A2,
    tableBody: R2,
  };
const L2 = () => {
    const [t, n] = _.useState([]),
      r = ur();
    console.log(r);
    const i = r.state.dataSubmit.registration;
    return (
      _.useEffect(() => {
        (async () => {
          try {
            const o = await Le.get(
              `http://localhost:8080/api/teachers/${i}/info`
            );
            console.log(o), n(o.data);
          } catch (o) {
            console.log(o);
          }
        })();
      }, []),
      console.log("teacherInfo"),
      console.log(t),
      P("div", {
        children: [
          h(gi, { showLinks: !1 }),
          P("h2", {
            children: ["Bienvenido a la ECOA ", r.state.dataSubmit.fullName],
          }),
          t.length == 0
            ? h("h3", {
                className: lt.noAnswers,
                children: "No cuentas con respuestas en este momento",
              })
            : t.map((a) =>
                h("div", {
                  className: lt.wrapper,
                  children: P(
                    "div",
                    {
                      className: lt.container,
                      children: [
                        P("h3", {
                          className: lt.courseTitle,
                          children: [a.courseCode, " - ", a.courseTitle],
                        }),
                        P("h4", {
                          className: lt.ammountAnswers,
                          children: [
                            "Cantidad de respuestas: ",
                            a.answerAmount,
                          ],
                        }),
                        h("div", {
                          className: lt.tableContainer,
                          children: P("table", {
                            className: lt.table,
                            children: [
                              h("thead", {
                                className: lt.tableHead,
                                children: P("tr", {
                                  children: [
                                    h("td", { children: "Pregunta" }),
                                    h("td", {
                                      children: "Promedio Resultados",
                                    }),
                                  ],
                                }),
                              }),
                              P("tbody", {
                                className: lt.tableBody,
                                children: [
                                  P("tr", {
                                    children: [
                                      h("td", {
                                        children:
                                          "El profesor(a) muestra dominio y experiencia en los temas de la Materia:",
                                      }),
                                      h("td", { children: a["01DOM_Prom"] }),
                                    ],
                                  }),
                                  P("tr", {
                                    children: [
                                      h("td", {
                                        children:
                                          "El profesor(a) me retó para dar lo mejor de mi (desarrollar nuevas habilidades,nuevos conceptos e ideas, pensar de manera diferente, etc.):",
                                      }),
                                      h("td", { children: a["02RET_Prom"] }),
                                    ],
                                  }),
                                  P("tr", {
                                    children: [
                                      h("td", {
                                        children:
                                          "En general, mi experiencia de aprendizaje con el profesor(a) fue:",
                                      }),
                                      h("td", { children: a["03REC_Prom"] }),
                                    ],
                                  }),
                                  P("tr", {
                                    children: [
                                      h("td", {
                                        children:
                                          "El profesor(a) promovió un ambiente de confianza y respeto:",
                                      }),
                                      h("td", { children: a["05ASE_Prom"] }),
                                    ],
                                  }),
                                  P("tr", {
                                    children: [
                                      h("td", {
                                        children:
                                          "El acompañamiento que recibí por parte de mi profesor(a) fue adecuado (respuestas a dudas, asesoría, retroalimentación, etc.):",
                                      }),
                                      h("td", { children: a["05MET_Prom"] }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    },
                    a.id
                  ),
                })
              ),
        ],
      })
    );
  },
  I2 = "_container_eq3e2_5",
  D2 = "_game_eq3e2_13",
  Gf = { container: I2, game: D2 },
  z2 = () => {
    const t = ur();
    console.log("location"), console.log(t);
    const n = t.state.dataSubmit.fullName,
      r = `/game?studentRegistration=${t.state.dataSubmit.registration}`;
    return P("div", {
      children: [
        h(gi, { showLinks: !1 }),
        P("h2", {
          children: ["Bienvenido a la ECOA ", h("span", { children: n })],
        }),
        h("div", {
          className: Gf.container,
          children: h("iframe", { className: Gf.game, src: r }),
        }),
      ],
    });
  },
  F2 = "_container_i7mxc_1",
  M2 = "_header_i7mxc_10",
  j2 = "_surveys_i7mxc_18",
  U2 = "_hide_i7mxc_27",
  $2 = "_applyButton_i7mxc_31",
  B2 = "_addButton_i7mxc_41",
  ul = {
    container: F2,
    header: M2,
    surveys: j2,
    hide: U2,
    applyButton: $2,
    addButton: B2,
  },
  H2 = "_survey_12r74_1",
  W2 = "_container_12r74_13",
  V2 = "_buttons_12r74_24",
  Q2 = "_button_12r74_24",
  _r = { survey: H2, container: W2, buttons: V2, button: Q2 },
  Y2 = (e) => {
    const t = async (n) => {
      try {
        const r = await Le.delete(`http://localhost:8080/api/surveys/${n}`);
        console.log(r);
      } catch (r) {
        console.log(r);
      }
    };
    return P("div", {
      className: _r.survey,
      children: [
        h("p", { children: e.data.title }),
        P("div", {
          className: _r.container,
          children: [
            e.data.isActive
              ? h("p", { children: "Activa" })
              : h("p", { children: "Inactiva" }),
            P("p", { children: [e.data.startDate, " - ", e.data.endDate] }),
            P("div", {
              className: _r.buttons,
              children: [
                h("button", {
                  className: _r.button,
                  onClick: () => t(e.data.id),
                  children: h(Ze, { icon: yh }),
                }),
                h("button", {
                  className: _r.button,
                  onClick: (n) => e.handleEdit(e.data.id),
                  children: h(Ze, { icon: gh }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  q2 = "_overlay_bp2t4_9",
  K2 = "_wrapper_bp2t4_25",
  G2 = "_content_bp2t4_35",
  X2 = "_form_bp2t4_55",
  J2 = "_title_bp2t4_65",
  Z2 = "_dates_bp2t4_90",
  eS = "_date_bp2t4_90",
  tS = "_questions_bp2t4_133",
  nS = "_buttons_bp2t4_150",
  rS = "_cancel_bp2t4_157",
  iS = "_save_bp2t4_167",
  aS = "_error_bp2t4_177",
  K = {
    overlay: q2,
    wrapper: K2,
    content: G2,
    form: X2,
    title: J2,
    dates: Z2,
    date: eS,
    questions: tS,
    buttons: nS,
    cancel: rS,
    save: iS,
    error: aS,
  },
  oS = "_question_9qo0i_1",
  lS = "_button_9qo0i_21",
  sS = "_slider_9qo0i_46",
  cl = { question: oS, button: lS, switch: "_switch_9qo0i_30", slider: sS },
  qn = (e) => {
    const [t, n] = _.useState(e.data.isActive),
      [r, i] = _.useState(e.data.id),
      a = () => {
        n(!t), e.toggleActive(e.data.id, !t);
      };
    return P("div", {
      className: cl.question,
      children: [
        h("p", { children: e.title }),
        P("label", {
          className: cl.switch,
          htmlFor: `toggle${r}`,
          children: [
            h("input", {
              type: "checkbox",
              id: `toggle${r}`,
              name: `toggle${r}`,
              defaultChecked: t,
              onClick: () => a(),
            }),
            h("span", { className: cl.slider }),
          ],
        }),
      ],
    });
  },
  uS = (e) => {
    const [t, n] = _.useState([]),
      [r, i] = _.useState({
        title: "",
        questionIds: [],
        startDate: "",
        endDate: "",
      }),
      [a, o] = _.useState(""),
      l = (p) => {
        r.questionIds.includes(p)
          ? i({ ...r, questionIds: r.questionIds.filter((g) => g !== p) })
          : i({ ...r, questionIds: [...r.questionIds, p] });
      },
      s = (p) => {
        i({ ...r, [p.target.name]: p.target.value });
      };
    _.useEffect(() => {
      (async () => {
        try {
          const y = await Le.get("http://localhost:8080/api/questions");
          n(y.data);
        } catch (y) {
          console.log(y);
        }
      })();
    }, []);
    const u = (p) => {
        p.preventDefault(), console.log("cancel add"), e.hideAddSurvey();
      },
      c = async (p) => {
        p.preventDefault(), console.log("save");
        try {
          const y = await Le.post("http://localhost:8080/api/surveys", r);
          console.log(y), e.hideAddSurvey();
        } catch (y) {
          console.log(y), o(y.response.data.error);
        }
      },
      f = (p) => {
        if (p)
          return (
            console.log(p),
            p.includes("must contain at least 1 element")
              ? h("p", {
                  className: K.error,
                  children: "Selecciona por lo menos una pregunta",
                })
              : p == "Could not parse Date string"
              ? h("p", {
                  className: K.error,
                  children: "Recuerda llenar todos los campos",
                })
              : p == "Cannot create survey that overlaps"
              ? h("p", {
                  className: K.error,
                  children: "La encuesta se empalma con otra encuesta",
                })
              : p == "startDate cannot be greater than endDate"
              ? h("p", {
                  className: K.error,
                  children:
                    "La fecha de inicio no puede ser mayor a la fecha de finalización",
                })
              : p == "Cannot create survey with duplicate title"
              ? h("p", {
                  className: K.error,
                  children: "Ya existe una encuesta con ese título",
                })
              : h("p", { className: K.error, children: a })
          );
      };
    return h("div", {
      className: K.overlay,
      children: h("div", {
        className: K.wrapper,
        children: P("div", {
          className: K.content,
          children: [
            h("h2", { children: "Crear Encuesta" }),
            P("form", {
              className: K.form,
              children: [
                P("div", {
                  className: K.title,
                  children: [
                    h("label", { htmlFor: "title", children: "Título" }),
                    h("input", {
                      type: "text",
                      id: "title",
                      name: "title",
                      placeholder: "Ingresa el título de la encuesta...",
                      onChange: s,
                    }),
                  ],
                }),
                P("div", {
                  className: K.dates,
                  children: [
                    P("div", {
                      className: K.date,
                      children: [
                        h("label", {
                          htmlFor: "startDate",
                          children: "Fecha de Inicio",
                        }),
                        h("input", {
                          type: "date",
                          id: "startDate",
                          name: "startDate",
                          onChange: s,
                        }),
                      ],
                    }),
                    P("div", {
                      className: K.date,
                      children: [
                        h("label", {
                          htmlFor: "endDate",
                          children: "Fecha de Finalización",
                        }),
                        h("input", {
                          type: "date",
                          id: "endDate",
                          name: "endDate",
                          onChange: s,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            P("div", {
              className: K.questions,
              children: [
                P("div", {
                  children: [
                    h("h3", { children: "Profesores" }),
                    t.map(
                      (p) =>
                        p.section === "TEACHER" &&
                        h(
                          qn,
                          {
                            title: p.title,
                            data: p,
                            className: K.question,
                            toggleActive: l,
                          },
                          p.id
                        )
                    ),
                  ],
                }),
                P("div", {
                  className: K.questions,
                  children: [
                    h("h3", { children: "Materias" }),
                    t.map(
                      (p) =>
                        p.section === "COURSE" &&
                        h(
                          qn,
                          {
                            title: p.title,
                            data: p,
                            className: K.question,
                            toggleActive: l,
                          },
                          p.id
                        )
                    ),
                  ],
                }),
                P("div", {
                  className: K.questions,
                  children: [
                    h("h3", { children: "Bloques" }),
                    t.map(
                      (p) =>
                        p.section === "BLOCK" &&
                        h(
                          qn,
                          {
                            title: p.title,
                            data: p,
                            className: K.question,
                            toggleActive: l,
                          },
                          p.id
                        )
                    ),
                  ],
                }),
              ],
            }),
            f(a),
            P("div", {
              className: K.buttons,
              children: [
                h("button", {
                  className: K.cancel,
                  type: "submit",
                  onClick: u,
                  children: "Cancelar",
                }),
                h("button", {
                  className: K.save,
                  type: "submit",
                  onClick: c,
                  children: "Guardar",
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  cS = "_overlay_1wmkw_9",
  fS = "_wrapper_1wmkw_25",
  dS = "_content_1wmkw_35",
  pS = "_form_1wmkw_55",
  mS = "_title_1wmkw_65",
  hS = "_dates_1wmkw_90",
  vS = "_date_1wmkw_90",
  gS = "_questions_1wmkw_133",
  yS = "_buttons_1wmkw_150",
  wS = "_cancel_1wmkw_157",
  SS = "_save_1wmkw_167",
  kS = "_error_1wmkw_177",
  G = {
    overlay: cS,
    wrapper: fS,
    content: dS,
    form: pS,
    title: mS,
    dates: hS,
    date: vS,
    questions: gS,
    buttons: yS,
    cancel: wS,
    save: SS,
    error: kS,
  },
  ES = (e) => {
    var d, v, k;
    const [t, n] = _.useState([]),
      [r, i] = _.useState({ ...e.survey, questionIds: [] }),
      [a, o] = _.useState({}),
      [l, s] = _.useState({
        title: a.title,
        questionIds: a.questionIds,
        startDate: a.startDate,
        endDate: a.endDate,
      }),
      [u, c] = _.useState("");
    console.log("props"), console.log(e), fo();
    const f = (S) => {
      s({ ...l, [S.target.name]: S.target.value }),
        i({ ...r, [S.target.name]: S.target.value });
    };
    console.log("questions"), console.log(t);
    const [p, y] = _.useState([]),
      g = (S, C) => {
        y(C ? (b) => [...b, S] : (b) => b.filter((R) => R !== S));
      };
    _.useEffect(() => {
      (async () => {
        try {
          const C = await Le.get("http://localhost:8080/api/questions");
          n(C.data);
        } catch (C) {
          console.log(C);
        }
      })();
    }, [t]),
      _.useEffect(() => {
        (async () => {
          try {
            const C = await Le.get(`http://localhost:8080/api/surveys/${e.id}`);
            o(C.data);
            const b = [];
            C.data.questions.map((R) => {
              R.isActive && b.push(R.id);
            }),
              s({
                title: C.data.title,
                questionIds: b,
                startDate: C.data.startDate,
                endDate: C.data.endDate,
              });
          } catch (C) {
            console.log(C);
          }
        })();
      }, [l]);
    const w = (S) => {
      S.preventDefault(), console.log("cancel update"), e.hideUpdateSurvey();
    };
    _.useEffect(() => {
      i({
        ...r,
        questionIds: [
          ...r.questionIds,
          ...p.filter((S) => !r.questionIds.includes(S)),
        ],
      });
    }, [r]);
    const N = async (S) => {
        S.preventDefault(), console.log("save update");
        try {
          i({ ...r, questionIds: p });
          const C = await Le.put(
            `http://localhost:8080/api/surveys/${e.survey.id}`,
            r
          );
          console.log(C), e.hideUpdateSurvey();
        } catch (C) {
          console.log(C), c(C.response.data.error);
        }
      },
      m = (S) => {
        if (S)
          return (
            console.log(S),
            S.includes("must contain at least 1 element")
              ? h("p", {
                  className: G.error,
                  children: "Selecciona por lo menos una pregunta",
                })
              : S == "Could not parse Date string"
              ? h("p", {
                  className: G.error,
                  children: "Recuerda llenar todos los campos",
                })
              : S == "Cannot update survey that overlaps"
              ? h("p", {
                  className: G.error,
                  children: "La encuesta se empalma con otra encuesta",
                })
              : S == "startDate cannot be greater than endDate"
              ? h("p", {
                  className: G.error,
                  children:
                    "La fecha de inicio no puede ser mayor a la fecha de finalización",
                })
              : S == "Cannot update survey with duplicate title"
              ? h("p", {
                  className: G.error,
                  children: "Ya existe una encuesta con ese título",
                })
              : h("p", { className: G.error, children: u })
          );
      };
    return (
      console.log(e),
      console.log("Send Survey"),
      console.log(l),
      console.log("Survey Data"),
      console.log(r),
      h("div", {
        className: G.overlay,
        children: h("div", {
          className: G.wrapper,
          children: P("div", {
            className: G.content,
            children: [
              h("h2", { children: "Editar Encuesta" }),
              P("form", {
                className: G.form,
                children: [
                  P("div", {
                    className: G.title,
                    children: [
                      h("label", { htmlFor: "title", children: "Título" }),
                      h("input", {
                        type: "text",
                        id: "title",
                        name: "title",
                        placeholder: "Ingresa el título de la encuesta...",
                        onChange: f,
                        defaultValue: a.title,
                      }),
                    ],
                  }),
                  P("div", {
                    className: G.dates,
                    children: [
                      P("div", {
                        className: G.date,
                        children: [
                          h("label", {
                            htmlFor: "startDate",
                            children: "Fecha de Inicio",
                          }),
                          h("input", {
                            type: "date",
                            id: "startDate",
                            name: "startDate",
                            onChange: f,
                            defaultValue: a.startDate,
                          }),
                        ],
                      }),
                      P("div", {
                        className: G.date,
                        children: [
                          h("label", {
                            htmlFor: "endDate",
                            children: "Fecha de Finalización",
                          }),
                          h("input", {
                            type: "date",
                            id: "endDate",
                            name: "endDate",
                            onChange: f,
                            defaultValue: a.endDate,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              P("div", {
                className: G.questions,
                children: [
                  P("div", {
                    children: [
                      h("h3", { children: "Profesores" }),
                      (d = a.questions) == null
                        ? void 0
                        : d.map(
                            (S) =>
                              S.section === "TEACHER" &&
                              h(
                                qn,
                                {
                                  title: S.title,
                                  data: S,
                                  className: G.question,
                                  onChange: f,
                                  toggleActive: g,
                                },
                                S.id
                              )
                          ),
                    ],
                  }),
                  P("div", {
                    className: G.questions,
                    children: [
                      h("h3", { children: "Materias" }),
                      (v = a.questions) == null
                        ? void 0
                        : v.map(
                            (S) =>
                              S.section === "COURSE" &&
                              h(
                                qn,
                                {
                                  title: S.title,
                                  data: S,
                                  className: G.question,
                                  onChange: f,
                                  toggleActive: g,
                                },
                                S.id
                              )
                          ),
                    ],
                  }),
                  P("div", {
                    className: G.questions,
                    children: [
                      h("h3", { children: "Bloques" }),
                      (k = a.questions) == null
                        ? void 0
                        : k.map(
                            (S) =>
                              S.section === "BLOCK" &&
                              h(
                                qn,
                                {
                                  title: S.title,
                                  data: S,
                                  className: G.question,
                                  onChange: f,
                                  toggleActive: g,
                                },
                                S.id
                              )
                          ),
                    ],
                  }),
                ],
              }),
              m(u),
              P("div", {
                className: G.buttons,
                children: [
                  h("button", {
                    className: G.cancel,
                    type: "submit",
                    onClick: w,
                    children: "Cancelar",
                  }),
                  h("button", {
                    className: G.save,
                    type: "submit",
                    onClick: N,
                    children: "Guardar",
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  },
  _S = () => {
    const [t, n] = _.useState([]),
      [r, i] = _.useState(!1),
      [a, o] = _.useState({
        state: !1,
        updateId: null,
        data: {
          id: null,
          title: null,
          startDate: null,
          endDate: null,
          questionIds: [],
        },
      });
    _.useEffect(() => {
      (async () => {
        try {
          const c = await Le.get("http://localhost:8080/api/surveys");
          n(c.data);
        } catch (c) {
          console.log(c);
        }
      })();
    }, [t]);
    const l = () => {
        i(!r);
      },
      s = (u) => {
        console.log(u),
          console.log(a),
          o({ state: !a.state, updateId: u, data: {} }),
          console.log("showUpdateSurvey"),
          console.log(a);
      };
    return P("div", {
      children: [
        h(gi, { showLinks: !0 }),
        h("h2", { children: "Encuestas" }),
        r && h(uS, { hideAddSurvey: l }),
        a.state &&
          h(ES, {
            hideUpdateSurvey: s,
            id: a.updateId,
            data: a.data,
            survey: t.find((u) => u.id === a.updateId),
            updateSurvey: s,
          }),
        h("div", {
          className: ul.container,
          children: h("div", {
            className: ul.surveys,
            children: t.map((u) => h(Y2, { data: u, handleEdit: s }, u.id)),
          }),
        }),
        !r &&
          !a.state &&
          h("button", {
            className: ul.addButton,
            onClick: l,
            children: h(Ze, { icon: wh, size: "2xl" }),
          }),
      ],
    });
  },
  xS = "_container_ve1l0_6",
  CS = "_questions_ve1l0_20",
  NS = "_addButton_ve1l0_37",
  PS = "_addQuestionPage_ve1l0_50",
  xr = { container: xS, questions: CS, addButton: NS, addQuestionPage: PS },
  bS = "_question_1h27w_1",
  OS = "_buttons_1h27w_12",
  TS = "_button_1h27w_12",
  Ji = { question: bS, buttons: OS, button: TS },
  AS = "_overlay_1nv3i_9",
  RS = "_wrapper_1nv3i_24",
  LS = "_content_1nv3i_31",
  IS = "_form_1nv3i_47",
  DS = "_buttons_1nv3i_77",
  zS = "_cancel_1nv3i_84",
  FS = "_save_1nv3i_94",
  MS = "_error_1nv3i_104",
  Ot = {
    overlay: AS,
    wrapper: RS,
    content: LS,
    form: IS,
    buttons: DS,
    cancel: zS,
    save: FS,
    error: MS,
  },
  jS = (e) => {
    const [t, n] = _.useState({
        acronym: "",
        keyAcronym: "",
        title: e.question.title,
        section: e.question.section,
        answerKind: e.question.answerKind,
      }),
      [r, i] = _.useState(""),
      a = (s) => {
        n({ ...t, [s.target.name]: s.target.value });
      },
      o = (s) => {
        s.preventDefault(),
          console.log("cancel update"),
          e.hideUpdateQuestion(),
          document.body.classList.remove("stopScroll");
      },
      l = async (s) => {
        s.preventDefault(), console.log("save update"), console.log(e.id);
        try {
          const u = await Le.put(
            `http://localhost:8080/api/questions/${e.id}`,
            t
          );
          console.log(u),
            e.hideUpdateQuestion(),
            document.body.classList.remove("stopScroll");
        } catch (u) {
          console.log(u), i(u.response.data.error);
        }
      };
    return (
      console.log(t),
      console.log(e.id),
      console.log(e.question),
      h("div", {
        className: Ot.overlay,
        children: h("div", {
          className: Ot.wrapper,
          children: P("div", {
            className: Ot.content,
            children: [
              P("h2", { children: ["Editar Pregunta: ", e.question.title] }),
              P("form", {
                className: Ot.form,
                children: [
                  h("label", { htmlFor: "section", children: "Sección" }),
                  P("select", {
                    id: "section",
                    name: "section",
                    onChange: a,
                    defaultValue: (t.section = t.section),
                    children: [
                      h("option", {
                        value: "DEFAULT",
                        defaultValue: !0,
                        disabled: !0,
                        children: "-- Escoge una sección para la pregunta --",
                      }),
                      h("option", { value: "TEACHER", children: "Profesor" }),
                      h("option", { value: "COURSE", children: "Materia" }),
                      h("option", { value: "BLOCK", children: "Bloque" }),
                    ],
                  }),
                  h("label", {
                    htmlFor: "answerKind",
                    children: "Tipo de Pregunta",
                  }),
                  P("select", {
                    id: "answerKind",
                    name: "answerKind",
                    onChange: a,
                    defaultValue: (t.answerKind = t.answerKind),
                    children: [
                      h("option", {
                        value: "DEFAULT",
                        disabled: !0,
                        children: "-- Ecoge el tipo de la pregunta --",
                      }),
                      h("option", { value: "TEXT", children: "Abierta" }),
                      h("option", { value: "NUMERIC", children: "Cerrada" }),
                    ],
                  }),
                  h("label", { htmlFor: "title", children: "Pregunta" }),
                  h("input", {
                    type: "text",
                    id: "title",
                    name: "title",
                    placeholder: "Escribe la pregunta aquí",
                    onChange: a,
                    defaultValue: t.title,
                  }),
                  P("div", {
                    className: Ot.buttons,
                    children: [
                      h("button", {
                        className: Ot.cancel,
                        type: "submit",
                        onClick: o,
                        children: "Cancelar",
                      }),
                      h("button", {
                        className: Ot.save,
                        type: "submit",
                        onClick: l,
                        children: "Guardar",
                      }),
                    ],
                  }),
                  r &&
                    P("p", {
                      className: Ot.error,
                      children: ["Recuerda llenar todos los campos", r],
                    }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  },
  fl = (e) => {
    const t = async (n) => {
      try {
        const r = await Le.delete(`http://localhost:8080/api/questions/${n}`);
        console.log(r);
      } catch (r) {
        console.log(r);
      }
    };
    return P("div", {
      className: Ji.question,
      children: [
        h("p", { children: e.title }),
        P("div", {
          className: Ji.buttons,
          children: [
            h("button", {
              className: Ji.button,
              onClick: () => t(e.data.id),
              children: h(Ze, { icon: yh }),
            }),
            h("button", {
              className: Ji.button,
              onClick: (n) => e.handleEdit(e.data.id),
              children: h(Ze, { icon: gh }),
            }),
          ],
        }),
      ],
    });
  },
  US = "_overlay_nc7ei_9",
  $S = "_wrapper_nc7ei_24",
  BS = "_content_nc7ei_32",
  HS = "_form_nc7ei_49",
  WS = "_buttons_nc7ei_79",
  VS = "_cancel_nc7ei_86",
  QS = "_save_nc7ei_96",
  YS = "_error_nc7ei_106",
  Tt = {
    overlay: US,
    wrapper: $S,
    content: BS,
    form: HS,
    buttons: WS,
    cancel: VS,
    save: QS,
    error: YS,
  },
  qS = (e) => {
    const [t, n] = _.useState({
        acronym: "",
        keyAcronym: "",
        title: "",
        section: "",
        answerKind: "",
      }),
      [r, i] = _.useState(""),
      a = (s) => {
        n({ ...t, [s.target.name]: s.target.value });
      };
    console.log(t);
    const o = (s) => {
        s.preventDefault(),
          console.log("cancel add"),
          e.hideAddQuestion(),
          document.body.classList.remove("stopScroll");
      },
      l = async (s) => {
        s.preventDefault(), console.log("save");
        try {
          const u = await Le.post("http://localhost:8080/api/questions", t);
          console.log(u),
            e.hideAddQuestion(),
            document.body.classList.remove("stopScroll");
        } catch (u) {
          console.log(u), i(u.response.data.error);
        }
      };
    return h("div", {
      className: Tt.overlay,
      children: h("div", {
        className: Tt.wrapper,
        children: P("div", {
          className: Tt.content,
          children: [
            h("h2", { children: "Crear Pregunta" }),
            P("form", {
              className: Tt.form,
              children: [
                h("label", { htmlFor: "section", children: "Sección" }),
                P("select", {
                  id: "section",
                  name: "section",
                  onChange: a,
                  defaultValue: "DEFAULT",
                  children: [
                    h("option", {
                      value: "DEFAULT",
                      defaultValue: !0,
                      disabled: !0,
                      children: "-- Escoge una sección para la pregunta --",
                    }),
                    h("option", { value: "TEACHER", children: "Profesor" }),
                    h("option", { value: "COURSE", children: "Materia" }),
                    h("option", { value: "BLOCK", children: "Bloque" }),
                  ],
                }),
                h("label", {
                  htmlFor: "answerKind",
                  children: "Tipo de Pregunta",
                }),
                P("select", {
                  id: "answerKind",
                  name: "answerKind",
                  onChange: a,
                  defaultValue: "DEFAULT",
                  children: [
                    h("option", {
                      value: "DEFAULT",
                      disabled: !0,
                      children: "-- Ecoge el tipo de la pregunta --",
                    }),
                    h("option", { value: "TEXT", children: "Abierta" }),
                    h("option", { value: "NUMERIC", children: "Cerrada" }),
                  ],
                }),
                h("label", { htmlFor: "title", children: "Pregunta" }),
                h("input", {
                  type: "text",
                  id: "title",
                  name: "title",
                  placeholder: "Escribe la pregunta aquí",
                  onChange: a,
                }),
                P("div", {
                  className: Tt.buttons,
                  children: [
                    h("button", {
                      className: Tt.cancel,
                      type: "submit",
                      onClick: o,
                      children: "Cancelar",
                    }),
                    h("button", {
                      className: Tt.save,
                      type: "submit",
                      onClick: l,
                      children: "Guardar",
                    }),
                  ],
                }),
                r &&
                  h("p", {
                    className: Tt.error,
                    children: "Recuerda llenar todos los campos",
                  }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  KS = () => {
    const [t, n] = _.useState([]),
      [r, i] = _.useState(!1),
      [a, o] = _.useState({
        state: !1,
        updateId: null,
        acronym: "",
        keyAcronym: "",
        title: "",
        section: "",
        answerKind: "",
      });
    _.useEffect(() => {
      (async () => {
        try {
          const c = await Le.get("http://localhost:8080/api/questions");
          console.log(c), n(c.data);
        } catch (c) {
          console.log(c);
        }
      })();
    }, [t]);
    const l = () => {
        i(!r), document.body.classList.add("stopScroll");
      },
      s = (u) => {
        console.log(u),
          console.log(a),
          o({ state: !a.state, updateId: u }),
          console.log(a),
          document.body.classList.add("stopScroll");
      };
    return P("div", {
      children: [
        h(gi, { showLinks: !0 }),
        h("h2", { children: "Preguntas" }),
        r && h(qS, { hideAddQuestion: l }),
        a.state &&
          h(jS, {
            hideUpdateQuestion: s,
            id: a.updateId,
            question: t.find((u) => u.id === a.updateId),
          }),
        P("div", {
          className: xr.container,
          children: [
            h("h3", { children: "Profesor" }),
            h("div", {
              className: xr.questions,
              children: t.map(
                (u) =>
                  u.section === "TEACHER" &&
                  h(fl, { title: u.title, data: u, handleEdit: s }, u.id)
              ),
            }),
            h("h3", { children: "Materia" }),
            h("div", {
              className: xr.questions,
              children: t.map(
                (u) =>
                  u.section === "COURSE" &&
                  h(fl, { title: u.title, data: u, handleEdit: s }, u.id)
              ),
            }),
            h("h3", { children: "Bloque" }),
            h("div", {
              className: xr.questions,
              children: t.map(
                (u) =>
                  u.section === "BLOCK" &&
                  h(fl, { title: u.title, data: u, handleEdit: s }, u.id)
              ),
            }),
          ],
        }),
        h("button", {
          className: xr.addButton,
          onClick: l,
          children: h(Ze, { icon: wh, size: "2xl" }),
        }),
      ],
    });
  },
  GS = "_container_1ue3t_12",
  XS = "_button_1ue3t_21",
  JS = "_home_1ue3t_27",
  ZS = "_sadMac_1ue3t_61",
  ek = "_srText_1ue3t_74",
  tk = "__0_1ue3t_109",
  nk = "__4_1ue3t_113",
  rk = "_d_1ue3t_117",
  ik = "_e_1ue3t_121",
  ak = "_f_1ue3t_125",
  ok = "_n_1ue3t_129",
  lk = "_o_1ue3t_133",
  sk = "_r_1ue3t_137",
  uk = "_t_1ue3t_141",
  ck = "_u_1ue3t_145",
  re = {
    container: GS,
    button: XS,
    home: JS,
    sadMac: ZS,
    srText: ek,
    _0: tk,
    _4: nk,
    d: rk,
    e: ik,
    f: ak,
    n: ok,
    o: lk,
    r: sk,
    t: uk,
    u: ck,
  },
  fk = () =>
    P("div", {
      className: re.container,
      children: [
        P("figure", {
          children: [
            h("div", { className: re.sadMac }),
            P("figcaption", {
              children: [
                h("span", {
                  className: re.srText,
                  children: "Error 404: Not Found",
                }),
                h("span", { className: re.e }),
                h("span", { className: re.r }),
                h("span", { className: re.r }),
                h("span", { className: re.o }),
                h("span", { className: re.r }),
                h("span", { className: re._4 }),
                h("span", { className: re._0 }),
                h("span", { className: re._4 }),
                h("span", { className: re.n }),
                h("span", { className: re.o }),
                h("span", { className: re.t }),
                h("span", { className: re.f }),
                h("span", { className: re.o }),
                h("span", { className: re.u }),
                h("span", { className: re.n }),
                h("span", { className: re.d }),
              ],
            }),
          ],
        }),
        h("div", {
          className: re.button,
          children: h("button", {
            className: re.home,
            onClick: () => (window.location.href = "/"),
            children: "Ir a la página principal",
          }),
        }),
      ],
    }),
  dl = ({ isAllowed: e, children: t, redirectTo: n = "/login" }) =>
    e ? t || h($y, {}) : h(Uy, { to: n }),
  dk = () => {
    const [e, t] = _.useState(null),
      n = (r) => {
        t(r);
      };
    return (
      console.log("user", e),
      h(qy, {
        children: P(Hy, {
          children: [
            h(st, { index: !0, element: h(Kf, { handleClick: n }) }),
            h(st, { path: "/login", element: h(Kf, { handleClick: n }) }),
            h(st, {
              path: "/student",
              element: h(dl, {
                isAllowed: !!e && e.role == "STUDENT",
                redirectTo: "/login",
                children: h(z2, {}),
              }),
            }),
            h(st, {
              path: "/teacher",
              element: h(dl, {
                isAllowed: !!e && e.role == "TEACHER",
                redirectTo: "/login",
                children: h(L2, {}),
              }),
            }),
            P(st, {
              element: h(dl, {
                isAllowed: !!e && e.role == "ADMINISTRATOR",
                redirectTo: "/login",
              }),
              children: [
                h(st, { path: "/administrator/surveys", element: h(_S, {}) }),
                h(st, { path: "/administrator/questions", element: h(KS, {}) }),
              ],
            }),
            h(st, { path: "*", element: h(fk, {}) }),
          ],
        }),
      })
    );
  };
ml.createRoot(document.getElementById("root")).render(h(dk, {}));
