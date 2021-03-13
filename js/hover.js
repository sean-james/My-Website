! function(a) {
	var b = navigator.userAgent;
	a.HTMLPictureElement && /ecko/.test(b) && b.match(/rv\:(\d+)/) && RegExp.$1 < 41 && addEventListener("resize", function() {
		var b, c = document.createElement("source"),
			d = function(a) {
				var b, d, e = a.parentNode;
				"PICTURE" === e.nodeName.toUpperCase() ? (b = c.cloneNode(), e.insertBefore(b, e.firstElementChild), setTimeout(function() {
					e.removeChild(b)
				})) : (!a._pfLastSize || a.offsetWidth > a._pfLastSize) && (a._pfLastSize = a.offsetWidth, d = a.sizes, a.sizes += ",100vw", setTimeout(function() {
					a.sizes = d
				}))
			},
			e = function() {
				var a, b = document.querySelectorAll("picture > img, img[srcset][sizes]");
				for (a = 0; a < b.length; a++) d(b[a])
			},
			f = function() {
				clearTimeout(b), b = setTimeout(e, 99)
			},
			g = a.matchMedia && matchMedia("(orientation: landscape)"),
			h = function() {
				f(), g && g.addListener && g.addListener(f)
			};
		return c.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? h() : document.addEventListener("DOMContentLoaded", h), f
	}())
}(window),
function(a, b, c) {
	"use strict";

	function d(a) {
		return " " === a || "	" === a || "\n" === a || "\f" === a || "\r" === a
	}

	function e(b, c) {
		var d = new a.Image;
		return d.onerror = function() {
			z[b] = !1, aa()
		}, d.onload = function() {
			z[b] = 1 === d.width, aa()
		}, d.src = c, "pending"
	}

	function f() {
		L = !1, O = a.devicePixelRatio, M = {}, N = {}, s.DPR = O || 1, P.width = Math.max(a.innerWidth || 0, y.clientWidth), P.height = Math.max(a.innerHeight || 0, y.clientHeight), P.vw = P.width / 100, P.vh = P.height / 100, r = [P.height, P.width, O].join("-"), P.em = s.getEmValue(), P.rem = P.em
	}

	function g(a, b, c, d) {
		var e, f, g, h;
		return "saveData" === A.algorithm ? a > 2.7 ? h = c + 1 : (f = b - c, e = Math.pow(a - .6, 1.5), g = f * e, d && (g += .1 * e), h = a + g) : h = c > 1 ? Math.sqrt(a * b) : a, h > c
	}

	function h(a) {
		var b, c = s.getSet(a),
			d = !1;
		"pending" !== c && (d = r, c && (b = s.setRes(c), s.applySetCandidate(b, a))), a[s.ns].evaled = d
	}

	function i(a, b) {
		return a.res - b.res
	}

	function j(a, b, c) {
		var d;
		return !c && b && (c = a[s.ns].sets, c = c && c[c.length - 1]), d = k(b, c), d && (b = s.makeUrl(b), a[s.ns].curSrc = b, a[s.ns].curCan = d, d.res || _(d, d.set.sizes)), d
	}

	function k(a, b) {
		var c, d, e;
		if (a && b)
			for (e = s.parseSet(b), a = s.makeUrl(a), c = 0; c < e.length; c++)
				if (a === s.makeUrl(e[c].url)) {
					d = e[c];
					break
				}
		return d
	}

	function l(a, b) {
		var c, d, e, f, g = a.getElementsByTagName("source");
		for (c = 0, d = g.length; d > c; c++) e = g[c], e[s.ns] = !0, f = e.getAttribute("srcset"), f && b.push({
			srcset: f,
			media: e.getAttribute("media"),
			type: e.getAttribute("type"),
			sizes: e.getAttribute("sizes")
		})
	}

	function m(a, b) {
		function c(b) {
			var c, d = b.exec(a.substring(m));
			return d ? (c = d[0], m += c.length, c) : void 0
		}

		function e() {
			var a, c, d, e, f, i, j, k, l, m = !1,
				o = {};
			for (e = 0; e < h.length; e++) f = h[e], i = f[f.length - 1], j = f.substring(0, f.length - 1), k = parseInt(j, 10), l = parseFloat(j), W.test(j) && "w" === i ? ((a || c) && (m = !0), 0 === k ? m = !0 : a = k) : X.test(j) && "x" === i ? ((a || c || d) && (m = !0), 0 > l ? m = !0 : c = l) : W.test(j) && "h" === i ? ((d || c) && (m = !0), 0 === k ? m = !0 : d = k) : m = !0;
			m || (o.url = g, a && (o.w = a), c && (o.d = c), d && (o.h = d), d || c || a || (o.d = 1), 1 === o.d && (b.has1x = !0), o.set = b, n.push(o))
		}

		function f() {
			for (c(S), i = "", j = "in descriptor";;) {
				if (k = a.charAt(m), "in descriptor" === j)
					if (d(k)) i && (h.push(i), i = "", j = "after descriptor");
					else {
						if ("," === k) return m += 1, i && h.push(i), void e();
						if ("(" === k) i += k, j = "in parens";
						else {
							if ("" === k) return i && h.push(i), void e();
							i += k
						}
					}
				else if ("in parens" === j)
					if (")" === k) i += k, j = "in descriptor";
					else {
						if ("" === k) return h.push(i), void e();
						i += k
					}
				else if ("after descriptor" === j)
					if (d(k));
					else {
						if ("" === k) return void e();
						j = "in descriptor", m -= 1
					}
				m += 1
			}
		}
		for (var g, h, i, j, k, l = a.length, m = 0, n = [];;) {
			if (c(T), m >= l) return n;
			g = c(U), h = [], "," === g.slice(-1) ? (g = g.replace(V, ""), e()) : f()
		}
	}

	function n(a) {
		function b(a) {
			function b() {
				f && (g.push(f), f = "")
			}

			function c() {
				g[0] && (h.push(g), g = [])
			}
			for (var e, f = "", g = [], h = [], i = 0, j = 0, k = !1;;) {
				if (e = a.charAt(j), "" === e) return b(), c(), h;
				if (k) {
					if ("*" === e && "/" === a[j + 1]) {
						k = !1, j += 2, b();
						continue
					}
					j += 1
				} else {
					if (d(e)) {
						if (a.charAt(j - 1) && d(a.charAt(j - 1)) || !f) {
							j += 1;
							continue
						}
						if (0 === i) {
							b(), j += 1;
							continue
						}
						e = " "
					} else if ("(" === e) i += 1;
					else if (")" === e) i -= 1;
					else {
						if ("," === e) {
							b(), c(), j += 1;
							continue
						}
						if ("/" === e && "*" === a.charAt(j + 1)) {
							k = !0, j += 2;
							continue
						}
					}
					f += e, j += 1
				}
			}
		}

		function c(a) {
			return k.test(a) && parseFloat(a) >= 0 ? !0 : l.test(a) ? !0 : "0" === a || "-0" === a || "+0" === a ? !0 : !1
		}
		var e, f, g, h, i, j, k = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
			l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
		for (f = b(a), g = f.length, e = 0; g > e; e++)
			if (h = f[e], i = h[h.length - 1], c(i)) {
				if (j = i, h.pop(), 0 === h.length) return j;
				if (h = h.join(" "), s.matchesMedia(h)) return j
			}
		return "100vw"
	}
	b.createElement("picture");
	var o, p, q, r, s = {},
		t = function() {},
		u = b.createElement("img"),
		v = u.getAttribute,
		w = u.setAttribute,
		x = u.removeAttribute,
		y = b.documentElement,
		z = {},
		A = {
			algorithm: ""
		},
		B = "data-pfsrc",
		C = B + "set",
		D = navigator.userAgent,
		E = /rident/.test(D) || /ecko/.test(D) && D.match(/rv\:(\d+)/) && RegExp.$1 > 35,
		F = "currentSrc",
		G = /\s+\+?\d+(e\d+)?w/,
		H = /(\([^)]+\))?\s*(.+)/,
		I = a.picturefillCFG,
		J = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
		K = "font-size:100%!important;",
		L = !0,
		M = {},
		N = {},
		O = a.devicePixelRatio,
		P = {
			px: 1,
			"in": 96
		},
		Q = b.createElement("a"),
		R = !1,
		S = /^[ \t\n\r\u000c]+/,
		T = /^[, \t\n\r\u000c]+/,
		U = /^[^ \t\n\r\u000c]+/,
		V = /[,]+$/,
		W = /^\d+$/,
		X = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
		Y = function(a, b, c, d) {
			a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
		},
		Z = function(a) {
			var b = {};
			return function(c) {
				return c in b || (b[c] = a(c)), b[c]
			}
		},
		$ = function() {
			var a = /^([\d\.]+)(em|vw|px)$/,
				b = function() {
					for (var a = arguments, b = 0, c = a[0]; ++b in a;) c = c.replace(a[b], a[++b]);
					return c
				},
				c = Z(function(a) {
					return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
				});
			return function(b, d) {
				var e;
				if (!(b in M))
					if (M[b] = !1, d && (e = b.match(a))) M[b] = e[1] * P[e[2]];
					else try {
						M[b] = new Function("e", c(b))(P)
					} catch (f) {}
				return M[b]
			}
		}(),
		_ = function(a, b) {
			return a.w ? (a.cWidth = s.calcListLength(b || "100vw"), a.res = a.w / a.cWidth) : a.res = a.d, a
		},
		aa = function(a) {
			var c, d, e, f = a || {};
			if (f.elements && 1 === f.elements.nodeType && ("IMG" === f.elements.nodeName.toUpperCase() ? f.elements = [f.elements] : (f.context = f.elements, f.elements = null)), c = f.elements || s.qsa(f.context || b, f.reevaluate || f.reselect ? s.sel : s.selShort), e = c.length) {
				for (s.setupRun(f), R = !0, d = 0; e > d; d++) s.fillImg(c[d], f);
				s.teardownRun(f)
			}
		};
	o = a.console && console.warn ? function(a) {
		console.warn(a)
	} : t, F in u || (F = "src"), z["image/jpeg"] = !0, z["image/gif"] = !0, z["image/png"] = !0, z["image/svg+xml"] = b.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image", "1.1"), s.ns = ("pf" + (new Date).getTime()).substr(0, 9), s.supSrcset = "srcset" in u, s.supSizes = "sizes" in u, s.supPicture = !!a.HTMLPictureElement, s.supSrcset && s.supPicture && !s.supSizes && ! function(a) {
		u.srcset = "data:,a", a.src = "data:,a", s.supSrcset = u.complete === a.complete, s.supPicture = s.supSrcset && s.supPicture
	}(b.createElement("img")), s.selShort = "picture>img,img[srcset]", s.sel = s.selShort, s.cfg = A, s.supSrcset && (s.sel += ",img[" + C + "]"), s.DPR = O || 1, s.u = P, s.types = z, q = s.supSrcset && !s.supSizes, s.setSize = t, s.makeUrl = Z(function(a) {
		return Q.href = a, Q.href
	}), s.qsa = function(a, b) {
		return a.querySelectorAll(b)
	}, s.matchesMedia = function() {
		return a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? s.matchesMedia = function(a) {
			return !a || matchMedia(a).matches
		} : s.matchesMedia = s.mMQ, s.matchesMedia.apply(this, arguments)
	}, s.mMQ = function(a) {
		return a ? $(a) : !0
	}, s.calcLength = function(a) {
		var b = $(a, !0) || !1;
		return 0 > b && (b = !1), b
	}, s.supportsType = function(a) {
		return a ? z[a] : !0
	}, s.parseSize = Z(function(a) {
		var b = (a || "").match(H);
		return {
			media: b && b[1],
			length: b && b[2]
		}
	}), s.parseSet = function(a) {
		return a.cands || (a.cands = m(a.srcset, a)), a.cands
	}, s.getEmValue = function() {
		var a;
		if (!p && (a = b.body)) {
			var c = b.createElement("div"),
				d = y.style.cssText,
				e = a.style.cssText;
			c.style.cssText = J, y.style.cssText = K, a.style.cssText = K, a.appendChild(c), p = c.offsetWidth, a.removeChild(c), p = parseFloat(p, 10), y.style.cssText = d, a.style.cssText = e
		}
		return p || 16
	}, s.calcListLength = function(a) {
		if (!(a in N) || A.uT) {
			var b = s.calcLength(n(a));
			N[a] = b ? b : P.width
		}
		return N[a]
	}, s.setRes = function(a) {
		var b;
		if (a) {
			b = s.parseSet(a);
			for (var c = 0, d = b.length; d > c; c++) _(b[c], a.sizes)
		}
		return b
	}, s.setRes.res = _, s.applySetCandidate = function(a, b) {
		if (a.length) {
			var c, d, e, f, h, k, l, m, n, o = b[s.ns],
				p = s.DPR;
			if (k = o.curSrc || b[F], l = o.curCan || j(b, k, a[0].set), l && l.set === a[0].set && (n = E && !b.complete && l.res - .1 > p, n || (l.cached = !0, l.res >= p && (h = l))), !h)
				for (a.sort(i), f = a.length, h = a[f - 1], d = 0; f > d; d++)
					if (c = a[d], c.res >= p) {
						e = d - 1, h = a[e] && (n || k !== s.makeUrl(c.url)) && g(a[e].res, c.res, p, a[e].cached) ? a[e] : c;
						break
					}
			h && (m = s.makeUrl(h.url), o.curSrc = m, o.curCan = h, m !== k && s.setSrc(b, h), s.setSize(b))
		}
	}, s.setSrc = function(a, b) {
		var c;
		a.src = b.url, "image/svg+xml" === b.set.type && (c = a.style.width, a.style.width = a.offsetWidth + 1 + "px", a.offsetWidth + 1 && (a.style.width = c))
	}, s.getSet = function(a) {
		var b, c, d, e = !1,
			f = a[s.ns].sets;
		for (b = 0; b < f.length && !e; b++)
			if (c = f[b], c.srcset && s.matchesMedia(c.media) && (d = s.supportsType(c.type))) {
				"pending" === d && (c = d), e = c;
				break
			}
		return e
	}, s.parseSets = function(a, b, d) {
		var e, f, g, h, i = b && "PICTURE" === b.nodeName.toUpperCase(),
			j = a[s.ns];
		(j.src === c || d.src) && (j.src = v.call(a, "src"), j.src ? w.call(a, B, j.src) : x.call(a, B)), (j.srcset === c || d.srcset || !s.supSrcset || a.srcset) && (e = v.call(a, "srcset"), j.srcset = e, h = !0), j.sets = [], i && (j.pic = !0, l(b, j.sets)), j.srcset ? (f = {
			srcset: j.srcset,
			sizes: v.call(a, "sizes")
		}, j.sets.push(f), g = (q || j.src) && G.test(j.srcset || ""), g || !j.src || k(j.src, f) || f.has1x || (f.srcset += ", " + j.src, f.cands.push({
			url: j.src,
			d: 1,
			set: f
		}))) : j.src && j.sets.push({
			srcset: j.src,
			sizes: null
		}), j.curCan = null, j.curSrc = c, j.supported = !(i || f && !s.supSrcset || g), h && s.supSrcset && !j.supported && (e ? (w.call(a, C, e), a.srcset = "") : x.call(a, C)), j.supported && !j.srcset && (!j.src && a.src || a.src !== s.makeUrl(j.src)) && (null === j.src ? a.removeAttribute("src") : a.src = j.src), j.parsed = !0
	}, s.fillImg = function(a, b) {
		var c, d = b.reselect || b.reevaluate;
		a[s.ns] || (a[s.ns] = {}), c = a[s.ns], (d || c.evaled !== r) && ((!c.parsed || b.reevaluate) && s.parseSets(a, a.parentNode, b), c.supported ? c.evaled = r : h(a))
	}, s.setupRun = function() {
		(!R || L || O !== a.devicePixelRatio) && f()
	}, s.supPicture ? (aa = t, s.fillImg = t) : ! function() {
		var c, d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/,
			e = function() {
				var a = b.readyState || "";
				f = setTimeout(e, "loading" === a ? 200 : 999), b.body && (s.fillImgs(), c = c || d.test(a), c && clearTimeout(f))
			},
			f = setTimeout(e, b.body ? 9 : 99),
			g = function(a, b) {
				var c, d, e = function() {
					var f = new Date - d;
					b > f ? c = setTimeout(e, b - f) : (c = null, a())
				};
				return function() {
					d = new Date, c || (c = setTimeout(e, b))
				}
			},
			h = y.clientHeight,
			i = function() {
				L = Math.max(a.innerWidth || 0, y.clientWidth) !== P.width || y.clientHeight !== h, h = y.clientHeight, L && s.fillImgs()
			};
		Y(a, "resize", g(i, 99)), Y(b, "readystatechange", e)
	}(), s.picturefill = aa, s.fillImgs = aa, s.teardownRun = t, aa._ = s, a.picturefillCFG = {
		pf: s,
		push: function(a) {
			var b = a.shift();
			"function" == typeof s[b] ? s[b].apply(s, a) : (A[b] = a[0], R && s.fillImgs({
				reselect: !0
			}))
		}
	};
	for (; I && I.length;) a.picturefillCFG.push(I.shift());
	a.picturefill = aa, "object" == typeof module && "object" == typeof module.exports ? module.exports = aa : "function" == typeof define && define.amd && define("picturefill", function() {
		return aa
	}), s.supPicture || (z["image/webp"] = e("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
}(window, document),
function(a) {
	if ("function" == typeof define && define.amd) {
		var b = "[history" + (new Date).getTime() + "]",
			c = requirejs.onError;
		a.toString = function() {
			return b
		}, requirejs.onError = function(a) {
			-1 === a.message.indexOf(b) && c.call(requirejs, a)
		}, define([], a)
	}
	return "object" != typeof exports || "undefined" == typeof module ? a() : void(module.exports = a())
}(function() {
	function a() {}

	function b(a, c, d) {
		var e = /(?:(\w+\:))?(?:\/\/(?:[^@]*@)?([^\/:\?#]+)(?::([0-9]+))?)?([^\?#]*)(?:(\?[^#]+)|\?)?(?:(#.*))?/;
		if (null == a || "" === a || c) a = c ? a : w.href, (!B || d) && (a = a.replace(/^[^#]*/, "") || "#", a = w.protocol.replace(/:.*$|$/, ":") + "//" + w.host + M.basepath + a.replace(new RegExp("^#[/]?(?:" + M.type + ")?"), ""));
		else {
			var f = b(),
				g = s.getElementsByTagName("base")[0];
			!d && g && g.getAttribute("href") && (g.href = g.href, f = b(g.href, null, !0));
			var h = f._pathname,
				i = f._protocol;
			a = "" + a, a = /^(?:\w+\:)?\/\//.test(a) ? 0 === a.indexOf("/") ? i + a : a : i + "//" + f._host + (0 === a.indexOf("/") ? a : 0 === a.indexOf("?") ? h + a : 0 === a.indexOf("#") ? h + f._search + a : h.replace(/[^\/]+$/g, "") + a)
		}
		O.href = a;
		var j = e.exec(O.href),
			k = j[2] + (j[3] ? ":" + j[3] : ""),
			l = j[4] || "/",
			m = j[5] || "",
			n = "#" === j[6] ? "" : j[6] || "",
			o = l + m + n,
			p = l.replace(new RegExp("^" + M.basepath, "i"), M.type) + m;
		return {
			_href: j[1] + "//" + k + o,
			_protocol: j[1],
			_host: k,
			_hostname: j[2],
			_port: j[3] || "",
			_pathname: l,
			_search: m,
			_hash: n,
			_relative: o,
			_nohash: p,
			_special: p + n
		}
	}

	function c() {
		var a;
		try {
			a = r.sessionStorage, a.setItem(N + "t", "1"), a.removeItem(N + "t")
		} catch (b) {
			a = {
				getItem: function(a) {
					var b = s.cookie.split(a + "=");
					return b.length > 1 && b.pop().split(";").shift() || "null"
				},
				setItem: function(a, b) {
					var c = {};
					(c[w.href] = y.state) && (s.cookie = a + "=" + v.stringify(c))
				}
			}
		}
		try {
			U = v.parse(a.getItem(N)) || {}
		} catch (b) {
			U = {}
		}
		J(F + "unload", function() {
			a.setItem(N, v.stringify(U))
		}, !1)
	}

	function d(b, c, d, e) {
		var f = 0;
		d || (d = {
			set: a
		}, f = 1);
		var g = !d.set,
			h = !d.get,
			i = {
				configurable: !0,
				set: function() {
					g = 1
				},
				get: function() {
					h = 1
				}
			};
		try {
			D(b, c, i), b[c] = b[c], D(b, c, d)
		} catch (j) {}
		if (!(g && h || (b.__defineGetter__ && (b.__defineGetter__(c, i.get), b.__defineSetter__(c, i.set), b[c] = b[c], d.get && b.__defineGetter__(c, d.get), d.set && b.__defineSetter__(c, d.set)), g && h))) {
			if (f) return !1;
			if (b === r) {
				try {
					var k = b[c];
					b[c] = null
				} catch (j) {}
				if ("execScript" in r) r.execScript("Public " + c, "VBScript"), r.execScript("var " + c + ";", "JavaScript");
				else try {
					D(b, c, {
						value: a
					})
				} catch (j) {
					"onpopstate" === c && (J("popstate", d = function() {
						K("popstate", d, !1);
						var a = b.onpopstate;
						b.onpopstate = null, setTimeout(function() {
							b.onpopstate = a
						}, 1)
					}, !1), R = 0)
				}
				b[c] = k
			} else try {
				try {
					var l = u.create(b);
					D(u.getPrototypeOf(l) === b ? l : b, c, d);
					for (var m in b) "function" == typeof b[m] && (l[m] = b[m].bind(b));
					try {
						e.call(l, l, b)
					} catch (j) {}
					b = l
				} catch (j) {
					D(b.constructor.prototype, c, d)
				}
			} catch (j) {
				return !1
			}
		}
		return b
	}

	function e(a, b, c) {
		return c = c || {}, a = a === $ ? w : a, c.set = c.set || function(c) {
			a[b] = c
		}, c.get = c.get || function() {
			return a[b]
		}, c
	}

	function f(a, b, c) {
		a in V ? V[a].push(b) : arguments.length > 3 ? J(a, b, c, arguments[3]) : J(a, b, c)
	}

	function g(a, b, c) {
		var d = V[a];
		if (d) {
			for (var e = d.length; e--;)
				if (d[e] === b) {
					d.splice(e, 1);
					break
				}
		} else K(a, b, c)
	}

	function h(b, c) {
		var e = ("" + ("string" == typeof b ? b : b.type)).replace(/^on/, ""),
			f = V[e];
		if (f) {
			if (c = "string" == typeof b ? c : b, null == c.target)
				for (var g = ["target", "currentTarget", "srcElement", "type"]; b = g.pop();) c = d(c, b, {
					get: "type" === b ? function() {
						return e
					} : function() {
						return r
					}
				});
			R && (("popstate" === e ? r.onpopstate : r.onhashchange) || a).call(r, c);
			for (var h = 0, i = f.length; i > h; h++) f[h].call(r, c);
			return !0
		}
		return L(b, c)
	}

	function i() {
		var a = s.createEvent ? s.createEvent("Event") : s.createEventObject();
		a.initEvent ? a.initEvent("popstate", !1, !1) : a.type = "popstate", a.state = y.state, h(a)
	}

	function j() {
		S && (S = !1, i())
	}

	function k(a, c, d, e) {
		if (B) P = w.href;
		else {
			0 === T && (T = 2);
			var f = b(c, 2 === T && -1 !== ("" + c).indexOf("#"));
			f._relative !== b()._relative && (P = e, d ? w.replace("#" + f._special) : w.hash = f._special)
		}!C && a && (U[w.href] = a), S = !1
	}

	function l(a) {
		var c = P;
		if (P = w.href, c) {
			Q !== w.href && i(), a = a || r.event;
			var d = b(c, !0),
				e = b();
			a.oldURL || (a.oldURL = d._href, a.newURL = e._href), d._hash !== e._hash && h(a)
		}
	}

	function m(a) {
		setTimeout(function() {
			J("popstate", function(a) {
				Q = w.href, C || (a = d(a, "state", {
					get: function() {
						return y.state
					}
				})), h(a)
			}, !1)
		}, 0), !B && a !== !0 && "location" in y && (p(E.hash), j())
	}

	function n(a) {
		for (; a;) {
			if ("A" === a.nodeName) return a;
			a = a.parentNode
		}
	}

	function o(a) {
		var c = a || r.event,
			d = n(c.target || c.srcElement),
			e = "defaultPrevented" in c ? c.defaultPrevented : c.returnValue === !1;
		if (d && "A" === d.nodeName && !e) {
			var f = b(),
				g = b(d.getAttribute("href", 2)),
				h = f._href.split("#").shift() === g._href.split("#").shift();
			h && g._hash && (f._hash !== g._hash && (E.hash = g._hash), p(g._hash), c.preventDefault ? c.preventDefault() : c.returnValue = !1)
		}
	}

	function p(a) {
		var b = s.getElementById(a = (a || "").replace(/^#/, ""));
		if (b && b.id === a && "A" === b.nodeName) {
			var c = b.getBoundingClientRect();
			r.scrollTo(t.scrollLeft || 0, c.top + (t.scrollTop || 0) - (t.clientTop || 0))
		}
	}

	function q() {
		var a = s.getElementsByTagName("script"),
			f = (a[a.length - 1] || {}).src || "",
			g = -1 !== f.indexOf("?") ? f.split("?").pop() : "";
		g.replace(/(\w+)(?:=([^&]*))?/g, function(a, b, c) {
			M[b] = (c || "").replace(/^(0|false)$/, "")
		}), J(F + "hashchange", l, !1);
		var h = [$, E, X, r, Z, y];
		C && delete Z.state;
		for (var i = 0; i < h.length; i += 2)
			for (var j in h[i])
				if (h[i].hasOwnProperty(j))
					if ("function" == typeof h[i][j]) h[i + 1][j] = h[i][j];
					else {
						var k = e(h[i], j, h[i][j]);
						if (!d(h[i + 1], j, k, function(a, b) {
								b === y && (r.history = y = h[i + 1] = a)
							})) return K(F + "hashchange", l, !1), !1;
						h[i + 1] === r && (V[j] = V[j.substr(2)] = [])
					}
		return y.setup(), M.redirect && y.redirect(), M.init && (T = 1), !C && v && c(), B || s[G](F + "click", o, !1), "complete" === s.readyState ? m(!0) : (B || b()._relative === M.basepath || (S = !0), J(F + "load", m, !1)), !0
	}
	var r = ("object" == typeof window ? window : this) || {};
	if (!r.history || "emulate" in r.history) return r.history;
	var s = r.document,
		t = s.documentElement,
		u = r.Object,
		v = r.JSON,
		w = r.location,
		x = r.history,
		y = x,
		z = x.pushState,
		A = x.replaceState,
		B = !!z,
		C = "state" in x,
		D = u.defineProperty,
		E = d({}, "t") ? {} : s.createElement("a"),
		F = "",
		G = r.addEventListener ? "addEventListener" : (F = "on") && "attachEvent",
		H = r.removeEventListener ? "removeEventListener" : "detachEvent",
		I = r.dispatchEvent ? "dispatchEvent" : "fireEvent",
		J = r[G],
		K = r[H],
		L = r[I],
		M = {
			basepath: "/",
			redirect: 0,
			type: "/",
			init: 0
		},
		N = "__historyAPI__",
		O = s.createElement("a"),
		P = w.href,
		Q = "",
		R = 1,
		S = !1,
		T = 0,
		U = {},
		V = {},
		W = s.title,
		X = {
			onhashchange: null,
			onpopstate: null
		},
		Y = function(a, b) {
			var c = r.history !== x;
			c && (r.history = x), a.apply(x, b), c && (r.history = y)
		},
		Z = {
			setup: function(a, b, c) {
				M.basepath = ("" + (null == a ? M.basepath : a)).replace(/(?:^|\/)[^\/]*$/, "/"), M.type = null == b ? M.type : b, M.redirect = null == c ? M.redirect : !!c
			},
			redirect: function(a, c) {
				if (y.setup(c, a), c = M.basepath, r.top == r.self) {
					var d = b(null, !1, !0)._relative,
						e = w.pathname + w.search;
					B ? (e = e.replace(/([^\/])$/, "$1/"), d != c && new RegExp("^" + c + "$", "i").test(e) && w.replace(d)) : e != c && (e = e.replace(/([^\/])\?/, "$1/?"), new RegExp("^" + c, "i").test(e) && w.replace(c + "#" + e.replace(new RegExp("^" + c, "i"), M.type) + w.hash))
				}
			},
			pushState: function(a, b, c) {
				var d = s.title;
				null != W && (s.title = W), z && Y(z, arguments), k(a, c), s.title = d, W = b
			},
			replaceState: function(a, b, c) {
				var d = s.title;
				null != W && (s.title = W), delete U[w.href], A && Y(A, arguments), k(a, c, !0), s.title = d, W = b
			},
			location: {
				set: function(a) {
					0 === T && (T = 1), r.location = a
				},
				get: function() {
					return 0 === T && (T = 1), B ? w : E
				}
			},
			state: {
				get: function() {
					return U[w.href] || null
				}
			}
		},
		$ = {
			assign: function(a) {
				0 === ("" + a).indexOf("#") ? k(null, a) : w.assign(a)
			},
			reload: function() {
				w.reload()
			},
			replace: function(a) {
				0 === ("" + a).indexOf("#") ? k(null, a, !0) : w.replace(a)
			},
			toString: function() {
				return this.href
			},
			href: {
				get: function() {
					return b()._href
				}
			},
			protocol: null,
			host: null,
			hostname: null,
			port: null,
			pathname: {
				get: function() {
					return b()._pathname
				}
			},
			search: {
				get: function() {
					return b()._search
				}
			},
			hash: {
				set: function(a) {
					k(null, ("" + a).replace(/^(#|)/, "#"), !1, P)
				},
				get: function() {
					return b()._hash
				}
			}
		};
	return q() ? (y.emulate = !B, r[G] = f, r[H] = g, r[I] = h, y) : void 0
}); < /script>