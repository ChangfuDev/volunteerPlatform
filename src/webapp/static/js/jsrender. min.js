/*! JsRender v1.0.0-rc.70 (Beta - Release Candidate): http://jsviews.com/#jsrender */
/*! **VERSION FOR WEB** (For NODE.JS see http://jsviews.com/download/jsrender-node.js) */
!function (e) {
    var t = (0, eval)("this"),
        n = t.jQuery;
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = n ? e(n) : function (t) {
        if (t && !t.fn) throw "Provide jQuery or null";
        return e(t)
    } : e(!1)
}(function (e) {
    "use strict";

    function t(e, t) {
        return function () {
            var n, r = this,
                i = r.base;
            return r.base = e, n = t.apply(r, arguments), r.base = i, n
        }
    }

    function n(e, n) {
        return z(n) && (n = t(e ? e._d ? e : t(a, e) : a, n), n._d = 1), n
    }

    function r(e, t) {
        for (var r in t.props) xe.test(r) && (e[r] = n(e[r], t.props[r]))
    }

    function i(e) {
        return e
    }

    function a() {
        return ""
    }

    function s(e) {
        try {
            throw "dbg breakpoint"
        } catch (t) {
        }
        return this.base ? this.baseApply(arguments) : e
    }

    function o(e) {
        ne._dbgMode = e !== !1
    }

    function d(t) {
        this.name = (e.link ? "JsViews" : "JsRender") + " Error", this.message = t || this.name
    }

    function p(e, t) {
        var n;
        for (n in t) e[n] = t[n];
        return e
    }

    function l(e, t, n) {
        return (0 !== this || e) && (ae = e ? e.charAt(0) : ae, se = e ? e.charAt(1) : se, oe = t ? t.charAt(0) : oe, de = t ? t.charAt(1) : de, pe = n || pe, e = "\\" + ae + "(\\" + pe + ")?\\" + se, t = "\\" + oe + "\\" + de, H = "(?:(?:(\\w+(?=[\\/\\s\\" + oe + "]))|(?:(\\w+)?(:)|(>)|!--((?:[^-]|-(?!-))*)--|(\\*)))\\s*((?:[^\\" + oe + "]|\\" + oe + "(?!\\" + de + "))*?)", te.rTag = H + ")", H = new RegExp(e + H + "(\\/)?|(?:\\/(\\w+)))" + t, "g"), D = new RegExp("<.*>|([^\\\\]|^)[{}]|" + e + ".*" + t)), [ae, se, oe, de, pe]
    }

    function u(e, t) {
        t || (t = e, e = void 0);
        var n, r, i, a, s = this,
            o = !t || "root" === t;
        if (e) {
            if (a = s.type === t ? s : void 0, !a)
                if (n = s.views, s._.useKey) {
                    for (r in n)
                        if (a = n[r].get(e, t)) break
                } else
                    for (r = 0, i = n.length; !a && i > r; r++) a = n[r].get(e, t)
        } else if (o)
            for (; s.parent.parent;) a = s = s.parent;
        else
            for (; s && !a;) a = s.type === t ? s : void 0, s = s.parent;
        return a
    }

    function c() {
        var e = this.get("item");
        return e ? e.index : void 0
    }

    function f() {
        return this.index
    }

    function g(e) {
        var t, n = this,
            r = n.linkCtx,
            i = (n.ctx || {})[e];
        return void 0 === i && r && r.ctx && (i = r.ctx[e]), void 0 === i && (i = Y[e]), i && z(i) && !i._wrp && (t = function () {
            return i.apply(this && this !== B ? this : n, arguments)
        }, t._wrp = !0, p(t, i)), t || i
    }

    function v(e, t, n, i) {
        var a, s, o = "number" == typeof n && t.tmpl.bnds[n - 1],
            d = t.linkCtx;
        return void 0 !== i ? n = i = {
            props: {},
            args: [i]
        } : o && (n = o(t.data, t, Z)), s = n.args[0], (e || o) && (a = d && d.tag, a || (a = p(new te._tg, {
            _: {
                inline: !d,
                bnd: o,
                unlinked: !0
            },
            tagName: ":",
            cvt: e,
            flow: !0,
            tagCtx: n
        }), d && (d.tag = a, a.linkCtx = d), n.ctx = U(n.ctx, (d ? d.view : t).ctx)), a._er = i && s, r(a, n), n.view = t, a.ctx = n.ctx || {}, n.ctx = void 0, t._.tag = a, s = a.cvtArgs(a.convert || "true" !== e && e)[0], s = o && t._.onRender ? t._.onRender(s, t, o) : s, t._.tag = void 0), void 0 != s ? s : ""
    }

    function m(e) {
        var t = this,
            n = t.tagCtx,
            r = n.view,
            i = n.args;
        return e = t.convert || e, e = e && ("" + e === e ? r.getRsc("converters", e) || V("Unknown converter: '" + e + "'") : e), i = i.length || n.index ? e ? i.slice() : i : [r.data], e && (e.depends && (t.depends = te.getDeps(t.depends, t, e.depends, e)), i[0] = e.apply(t, i)), i
    }

    function h(e, t) {
        for (var n, r, i = this; void 0 === n && i;) r = i.tmpl && i.tmpl[e], n = r && r[t], i = i.parent;
        return n || Z[e][t]
    }

    function w(e, t, n, i, a, s) {
        t = t || P;
        var o, d, p, l, u, c, f, g, v, m, h, w, b, x, _, y, k, j, C, A = "",
            R = t.linkCtx || 0,
            M = t.ctx,
            $ = n || t.tmpl,
            N = "number" == typeof i && t.tmpl.bnds[i - 1];
        for ("tag" === e._is ? (o = e, e = o.tagName, i = o.tagCtxs, p = o.template) : (d = t.getRsc("tags", e) || V("Unknown tag: {{" + e + "}} "), p = d.template), void 0 !== s ? (A += s, i = s = [{
            props: {},
            args: []
        }]) : N && (i = N(t.data, t, Z)), g = i.length, f = 0; g > f; f++) m = i[f], (!R || !R.tag || f && !R.tag._.inline || o._er) && ((w = m.tmpl) && (w = m.content = $.tmpls[w - 1]), m.index = f, m.tmpl = p || w, m.render = T, m.view = t, m.ctx = U(m.ctx, M)), (n = m.props.tmpl) && (n = "" + n === n ? t.getRsc("templates", n) || W(n) : n, m.tmpl = n), o || (o = new d._ctr, b = !!o.init, o.parent = c = M && M.tag, o.tagCtxs = i, C = o.dataMap, R && (o._.inline = !1, R.tag = o, o.linkCtx = R), (o._.bnd = N || R.fn) ? o._.arrVws = {} : o.dataBoundOnly && V("{^{" + e + "}} tag must be data-bound")), i = o.tagCtxs, C = o.dataMap, m.tag = o, C && i && (m.map = i[f].map), o.flow || (h = m.ctx = m.ctx || {}, l = o.parents = h.parentTags = M && U(h.parentTags, M.parentTags) || {}, c && (l[c.tagName] = c), l[o.tagName] = h.tag = o);
        if ((N || R) && (t._.tag = o), !(o._er = s)) {
            for (r(o, i[0]), o.rendering = {}, f = 0; g > f; f++) m = o.tagCtx = i[f], k = m.props, y = o.cvtArgs(), (x = k.dataMap || C) && (y.length || k.dataMap) && (_ = m.map, (!_ || _.src !== y[0] || a) && (_ && _.src && _.unmap(), _ = m.map = x.map(y[0], k, void 0, !o._.bnd)), y = [_.tgt]), o.ctx = m.ctx, f || (b && (j = o.template, o.init(m, R, o.ctx), b = void 0, o.template !== j && (o._.tmpl = o.template)), R && (R.attr = o.attr = R.attr || o.attr), u = o.attr, o._.noVws = u && u !== je), v = void 0, o.render && (v = o.render.apply(o, y)), y.length || (y = [t]), void 0 === v && (v = m.render(y.length ? y[0] : t, !0) || (a ? void 0 : "")), A = A ? A + (v || "") : v;
            o.rendering = void 0
        }
        return o.tagCtx = i[0], o.ctx = o.tagCtx.ctx, o._.noVws && o._.inline && (A = "text" === u ? X.html(A) : ""), N && t._.onRender ? t._.onRender(A, t, N) : A
    }

    function b(e, t, n, r, i, a, s, o) {
        var d, p, l, u, f = this,
            g = "array" === t;
        f.content = s, f.views = g ? [] : {}, f.parent = n, f.type = t || "top", f.data = r, f.tmpl = i, u = f._ = {
            key: 0,
            useKey: g ? 0 : 1,
            id: "" + ye++,
            onRender: o,
            bnds: {}
        }, f.linked = !!o, n ? (d = n.views, p = n._, p.useKey ? (d[u.key = "_" + p.useKey++] = f, f.index = Re, f.getIndex = c, l = p.tag, u.bnd = g && (!l || !!l._.bnd && l)) : d.length === (u.key = f.index = a) ? d.push(f) : d.splice(a, 0, f), f.ctx = e || n.ctx) : f.ctx = e
    }

    function x(e) {
        var t, n, r, i, a, s, o;
        for (t in Ne)
            if (a = Ne[t], (s = a.compile) && (n = e[t + "s"]))
                for (r in n) i = n[r] = s(r, n[r], e, 0), i._is = t, i && (o = te.onStore[t]) && o(r, i, s)
    }

    function _(e, t, r) {
        function i() {
            var t = this;
            t._ = {
                inline: !0,
                unlinked: !0
            }, t.tagName = e
        }

        var a, s, o, d = new te._tg;
        if (z(t) ? t = {
            depends: t.depends,
            render: t
        } : "" + t === t && (t = {
            template: t
        }), s = t.baseTag) {
            t.flow = !!t.flow, t.baseTag = s = "" + s === s ? r && r.tags[s] || ee[s] : s, d = p(d, s);
            for (o in t) d[o] = n(s[o], t[o])
        } else d = p(d, t);
        return void 0 !== (a = d.template) && (d.template = "" + a === a ? W[a] || W(a) : a), d.init !== !1 && ((i.prototype = d).constructor = d._ctr = i), r && (d._parentTmpl = r), d
    }

    function y(e) {
        return this.base.apply(this, e)
    }

    function k(t, n, r, i) {
        function a(n) {
            var a, o;
            if ("" + n === n || n.nodeType > 0 && (s = n)) {
                if (!s)
                    if (/^\.\/[^\\:*?"<>]*$/.test(n)) (o = W[t = t || n]) ? n = o : s = document.getElementById(n);
                    else if (e.fn && !D.test(n)) try {
                        s = e(document).find(n)[0]
                    } catch (d) {
                    }
                s && (i ? n = s.innerHTML : (a = s.getAttribute(Ae), a ? a !== Te ? (n = W[a], delete W[a]) : e.fn && (n = e.data(s)[Te]) : (t = t || (e.fn ? Te : n), n = k(t, s.innerHTML, r, i)), n.tmplName = t = t || a, t !== Te && (W[t] = n), s.setAttribute(Ae, t), e.fn && e.data(s, Te, n))), s = void 0
            } else n.fn || (n = void 0);
            return n
        }

        var s, o, d = n = n || "";
        return 0 === i && (i = void 0, d = a(d)), i = i || (n.markup ? n : {}), i.tmplName = t, r && (i._parentTmpl = r), !d && n.markup && (d = a(n.markup)) && d.fn && (d = d.markup), void 0 !== d ? (d.fn || n.fn ? d.fn && (o = d) : (n = C(d, i), $(d.replace(ge, "\\$&"), n)), o || (x(i), o = p(function () {
            return n.render.apply(n, arguments)
        }, n)), t && !r && t !== Te && (Ve[t] = o), o) : void 0
    }

    function j(e) {
        function t(t, n) {
            this.tgt = e.getTgt(t, n)
        }

        return z(e) && (e = {
            getTgt: e
        }), e.baseMap && (e = p(p({}, e.baseMap), e)), e.map = function (e, n) {
            return new t(e, n)
        }, e
    }

    function C(t, n) {
        var r, i = ne.wrapMap || {},
            a = p({
                tmpls: [],
                links: {},
                bnds: [],
                _is: "template",
                render: T
            }, n);
        return a.markup = t, n.htmlTag || (r = he.exec(t), a.htmlTag = r ? r[1].toLowerCase() : ""), r = i[a.htmlTag], r && r !== i.div && (a.markup = e.trim(a.markup)), a
    }

    function A(e, t) {
        function n(i, a, s) {
            var o, d, p, l;
            if (i && typeof i === Ce && !i.nodeType && !i.markup && !i.getTgt) {
                for (p in i) n(p, i[p], a);
                return Z
            }
            return void 0 === a && (a = i, i = void 0), i && "" + i !== i && (s = a, a = i, i = void 0), l = s ? s[r] = s[r] || {} : n, d = t.compile, null === a ? i && delete l[i] : (a = d ? d(i, a, s, 0) : a, i && (l[i] = a)), d && a && (a._is = e), a && (o = te.onStore[e]) && o(i, a, d), a
        }

        var r = e + "s";
        Z[r] = n
    }

    function T(e, t, n, r, i, a) {
        var s, o, d, p, l, u, c, f, g = r,
            v = "";
        if (t === !0 ? (n = t, t = void 0) : typeof t !== Ce && (t = void 0), (d = this.tag) ? (l = this, p = d._.tmpl || l.tmpl, g = g || l.view, arguments.length || (e = g)) : p = this, p) {
            if (!g && e && "view" === e._is && (g = e), g && e === g && (e = g.data), p.fn || (p = d._.tmpl = W[p] || W(p)), u = !g, re = re || u, g || ((t = t || {}).root = e), !re || ne.useViews || p.useViews || g && g !== P) v = R(p, e, t, n, g, i, a, d);
            else {
                if (g ? (c = g.data, f = g.index, g.index = Re) : (g = P, g.data = e, g.ctx = t), G(e) && !n)
                    for (s = 0, o = e.length; o > s; s++) g.index = s, g.data = e[s], v += p.fn(e[s], g, Z);
                else v += p.fn(e, g, Z);
                g.data = c, g.index = f
            }
            u && (re = void 0)
        }
        return v
    }

    function R(e, t, n, r, i, a, s, o) {
        function d(e) {
            _ = p({}, n), _[x] = e
        }

        var l, u, c, f, g, v, m, h, w, x, _, y, k = "";
        if (o && (w = o.tagName, y = o.tagCtx, n = n ? U(n, o.ctx) : o.ctx, m = y.content, y.props.link === !1 && (n = n || {}, n.link = !1), (x = y.props.itemVar) && ("~" !== x.charAt(0) && M("Use itemVar='~myItem'"), x = x.slice(1))), i && (m = m || i.content, s = s || i._.onRender, n = U(n, i.ctx)), a === !0 && (v = !0, a = 0), s && (n && n.link === !1 || o && o._.noVws) && (s = void 0), h = s, s === !0 && (h = void 0, s = i._.onRender), n = e.helpers ? U(e.helpers, n) : n, _ = n, G(t) && !r)
            for (c = v ? i : void 0 !== a && i || new b(n, "array", i, t, e, a, m, s), x && (c.it = x), x = c.it, l = 0, u = t.length; u > l; l++) x && d(t[l]), f = new b(_, "item", c, t[l], e, (a || 0) + l, m, s), g = e.fn(t[l], f, Z), k += c._.onRender ? c._.onRender(g, f) : g;
        else x && d(t), c = v ? i : new b(_, w || "data", i, t, e, a, m, s), o && !o.flow && (c.tag = o), k += e.fn(t, c, Z);
        return h ? h(k, c) : k
    }

    function V(e, t, n) {
        var r = ne.onError(e, t, n);
        if ("" + e === e) throw new te.Err(r);
        return !t.linkCtx && t.linked ? X.html(r) : r
    }

    function M(e) {
        V("Syntax error\n" + e)
    }

    function $(e, t, n, r, i) {
        function a(t) {
            t -= f, t && v.push(e.substr(f, t).replace(ce, "\\n"))
        }

        function s(t, n) {
            t && (t += "}}", M((n ? "{{" + n + "}} block has {{/" + t + " without {{" + t : "Unmatched or missing {{/" + t) + ", in template:\n" + e))
        }

        function o(o, d, c, h, w, b, x, _, y, k, j, C) {
            b && (w = ":", h = je), k = k || n && !i;
            var A = (d || n) && [
                    []
                ],
                T = "",
                R = "",
                V = "",
                $ = "",
                N = "",
                F = "",
                I = "",
                U = "",
                J = !k && !w && !x;
            c = c || (y = y || "#data", w), a(C), f = C + o.length, _ ? u && v.push(["*", "\n" + y.replace(/^:/, "ret+= ").replace(fe, "$1") + ";\n"]) : c ? ("else" === c && (me.test(y) && M('for "{{else if expr}}" use "{{else expr}}"'), A = m[7] && [
                []
            ], m[8] = e.substring(m[8], C), m = g.pop(), v = m[2], J = !0), y && S(y.replace(ce, " "), A, t).replace(ve, function (e, t, n, r, i, a, s, o) {
                return r = "'" + i + "':", s ? (R += a + ",", $ += "'" + o + "',") : n ? (V += r + a + ",", F += r + "'" + o + "',") : t ? I += a : ("trigger" === i && (U += a), T += r + a + ",", N += r + "'" + o + "',", l = l || xe.test(i)), ""
            }).slice(0, -1), A && A[0] && A.pop(), p = [c, h || !!r || l || "", J && [], E($, N, F), E(R, T, V), I, U, A || 0], v.push(p), J && (g.push(m), m = p, m[8] = f)) : j && (s(j !== m[0] && "else" !== m[0] && j, m[0]), m[8] = e.substring(m[8], C), m = g.pop()), s(!m && j), v = m[2]
        }

        var d, p, l, u = ne.allowCode || t && t.allowCode,
            c = [],
            f = 0,
            g = [],
            v = c,
            m = [, , c];
        return u && (t.allowCode = u), n && (e = ae + e + de), s(g[0] && g[0][2].pop()[0]), e.replace(H, o), a(e.length), (f = c[c.length - 1]) && s("" + f !== f && +f[8] === f[8] && f[0]), n ? (d = I(c, e, n), N(d, [c[0][7]])) : d = I(c, t), d
    }

    function N(e, t) {
        var n, r, i = 0,
            a = t.length;
        for (e.deps = []; a > i; i++) {
            r = t[i];
            for (n in r) "_jsvto" !== n && r[n].length && (e.deps = e.deps.concat(r[n]))
        }
        e.paths = r
    }

    function E(e, t, n) {
        return [e.slice(0, -1), t.slice(0, -1), n.slice(0, -1)]
    }

    function F(e, t) {
        return "\n	" + (t ? t + ":{" : "") + "args:[" + e[0] + "]" + (e[1] || !t ? ",\n	props:{" + e[1] + "}" : "") + (e[2] ? ",\n	ctx:{" + e[2] + "}" : "")
    }

    function S(e, t, n) {
        function r(r, h, w, b, x, _, y, k, j, C, A, T, R, V, N, E, F, S, I, U) {
            function J(e, n, r, s, o, d, u, c) {
                var f = "." === r;
                if (r && (x = x.slice(n.length), f || (e = (s ? 'view.hlp("' + s + '")' : o ? "view" : "data") + (c ? (d ? "." + d : s ? "" : o ? "" : "." + r) + (u || "") : (c = s ? "" : o ? d || "" : r, "")), e += c ? "." + c : "", e = n + ("view.data" === e.slice(0, 9) ? e.slice(5) : e)), p)) {
                    if (q = "linkTo" === i ? a = t._jsvto = t._jsvto || [] : l.bd, B = f && q[q.length - 1]) {
                        if (B._jsv) {
                            for (; B.sb;) B = B.sb;
                            B.bnd && (x = "^" + x.slice(1)), B.sb = x, B.bnd = B.bnd || "^" === x.charAt(0)
                        }
                    } else q.push(x);
                    m[g] = I + (f ? 1 : 0)
                }
                return e
            }

            b = p && b, b && !k && (x = b + x), _ = _ || "", w = w || h || T, x = x || j, C = C || F || "";
            var K, O, q, B, L;
            if (!y || d || o) {
                if (p && E && !d && !o && (!i || s || a) && (K = m[g - 1], U.length - 1 > I - (K || 0))) {
                    if (K = U.slice(K, I + r.length), O !== !0)
                        if (q = a || u[g - 1].bd, B = q[q.length - 1], B && B.prm) {
                            for (; B.sb && B.sb.prm;) B = B.sb;
                            L = B.sb = {
                                path: B.sb,
                                bnd: B.bnd
                            }
                        } else q.push(L = {
                            path: q.pop()
                        });
                    E = se + ":" + K + " onerror=''" + oe, O = f[E], O || (f[E] = !0, f[E] = O = $(E, n, !0)), O !== !0 && L && (L._jsv = O, L.prm = l.bd, L.bnd = L.bnd || L.path && L.path.indexOf("^") >= 0)
                }
                return d ? (d = !R, d ? r : T + '"') : o ? (o = !V, o ? r : T + '"') : (w ? (m[g] = I++, l = u[++g] = {
                    bd: []
                }, w) : "") + (S ? g ? "" : (c = U.slice(c, I), (i ? (i = s = a = !1, "\b") : "\b,") + c + (c = I + r.length, p && t.push(l.bd = []), "\b")) : k ? (g && M(e), p && t.pop(), i = x, s = b, c = I + r.length, b && (p = l.bd = t[i] = []), x + ":") : x ? x.split("^").join(".").replace(le, J) + (C ? (l = u[++g] = {
                    bd: []
                }, v[g] = !0, C) : _) : _ ? _ : N ? (v[g] = !1, l = u[--g], N + (C ? (l = u[++g], v[g] = !0, C) : "")) : A ? (v[g] || M(e), ",") : h ? "" : (d = R, o = V, '"'))
            }
            M(e)
        }

        var i, a, s, o, d, p = t && t[0],
            l = {
                bd: p
            },
            u = {
                0: l
            },
            c = 0,
            f = n ? n.links : p && (p.links = p.links || {}),
            g = 0,
            v = {},
            m = {},
            h = (e + (n ? " " : "")).replace(ue, r);
        return !g && h || M(e)
    }

    function I(e, t, n) {
        var r, i, a, s, o, d, p, l, u, c, f, g, v, m, h, w, b, x, _, y, k, j, A, T, R, V, $, E, S, U, J = 0,
            K = ne.useViews || t.useViews || t.tags || t.templates || t.helpers || t.converters,
            O = "",
            q = {},
            B = e.length;
        for ("" + t === t ? (x = n ? 'data-link="' + t.replace(ce, " ").slice(1, -1) + '"' : t, t = 0) : (x = t.tmplName || "unnamed", t.allowCode && (q.allowCode = !0), t.debug && (q.debug = !0), f = t.bnds, b = t.tmpls), r = 0; B > r; r++)
            if (i = e[r], "" + i === i) O += '\n+"' + i + '"';
            else if (a = i[0], "*" === a) O += ";\n" + i[1] + "\nret=ret";
            else {
                if (s = i[1], k = !n && i[2], o = F(i[3], "params") + "}," + F(v = i[4]), E = i[5], U = i[6], j = i[8] && i[8].replace(fe, "$1"), (R = "else" === a) ? g && g.push(i[7]) : (J = 0, f && (g = i[7]) && (g = [g], J = f.push(1))), K = K || v[1] || v[2] || g || /view.(?!index)/.test(v[0]), (V = ":" === a) ? s && (a = s === je ? ">" : s + a) : (k && (_ = C(j, q), _.tmplName = x + "/" + a, _.useViews = _.useViews || K, I(k, _), K = _.useViews, b.push(_)), R || (y = a, K = K || a && (!ee[a] || !ee[a].flow), T = O, O = ""), A = e[r + 1], A = A && "else" === A[0]), S = E ? ";\ntry{\nret+=" : "\n+", m = "", h = "", V && (g || U || s && s !== je)) {
                    if ($ = "return {" + o + "};", w = 'c("' + s + '",view,', $ = new Function("data,view,j,u", " // " + x + " " + J + " " + a + "\n" + $), $._er = E, m = w + J + ",", h = ")", $._tag = a, n) return $;
                    N($, g), c = !0
                }
                if (O += V ? (n ? (E ? "\ntry{\n" : "") + "return " : S) + (c ? (c = void 0, K = u = !0, w + (g ? (f[J - 1] = $, J) : "{" + o + "}") + ")") : ">" === a ? (p = !0, "h(" + v[0] + ")") : (l = !0, "((v=" + (v[0] || "data") + ')!=null?v:"")')) : (d = !0, "\n{view:view,tmpl:" + (k ? b.length : "0") + "," + o + "},"), y && !A) {
                    if (O = "[" + O.slice(0, -1) + "]", w = 't("' + y + '",view,this,', n || g) {
                        if (O = new Function("data,view,j,u", " // " + x + " " + J + " " + y + "\nreturn " + O + ";"), O._er = E, O._tag = y, g && N(f[J - 1] = O, g), n) return O;
                        m = w + J + ",undefined,", h = ")"
                    }
                    O = T + S + w + (J || O) + ")", g = 0, y = 0
                }
                E && (K = !0, O += ";\n}catch(e){ret" + (n ? "urn " : "+=") + m + "j._err(e,view," + E + ")" + h + ";}\n" + (n ? "" : "ret=ret"))
            }
        O = "// " + x + "\nvar v" + (d ? ",t=j._tag" : "") + (u ? ",c=j._cnvt" : "") + (p ? ",h=j.converters.html" : "") + (n ? ";\n" : ',ret=""\n') + (q.debug ? "debugger;" : "") + O + (n ? "\n" : ";\nreturn ret;"), ne._dbgMode && (O = "try {\n" + O + "\n}catch(e){\nreturn j._err(e, view);\n}");
        try {
            O = new Function("data,view,j,u", O)
        } catch (L) {
            M("Compiled template code:\n\n" + O + '\n: "' + L.message + '"')
        }
        return t && (t.fn = O, t.useViews = !!K), O
    }

    function U(e, t) {
        return e && e !== t ? t ? p(p({}, t), e) : e : t && p({}, t)
    }

    function J(e) {
        return ke[e] || (ke[e] = "&#" + e.charCodeAt(0) + ";")
    }

    function K(e) {
        var t, n, r = [];
        if (typeof e === Ce)
            for (t in e) n = e[t], n && n.toJSON && !n.toJSON() || z(n) || r.push({
                key: t,
                prop: n
            });
        return r
    }

    function O(t, n, r) {
        var i = this.jquery && (this[0] || V('Unknown template: "' + this.selector + '"')),
            a = i.getAttribute(Ae);
        return T.call(a ? e.data(i)[Te] : W(i), t, n, r)
    }

    function q(e) {
        return void 0 != e ? be.test(e) && ("" + e).replace(_e, J) || e : ""
    }

    var B = (0, eval)("this"),
        L = e === !1;
    e = e && e.fn ? e : B.jQuery;
    var Q, H, D, P, Z, z, G, W, X, Y, ee, te, ne, re, ie = "v1.0.0-beta",
        ae = "{",
        se = "{",
        oe = "}",
        de = "}",
        pe = "^",
        le = /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
        ue = /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*[.^]|\s*$|[^\(\[])|[)\]])([([]?))|(\s+)/g,
        ce = /[ \t]*(\r\n|\n|\r)/g,
        fe = /\\(['"])/g,
        ge = /['"\\]/g,
        ve = /(?:\x08|^)(onerror:)?(?:(~?)(([\w$_\.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,
        me = /^if\s/,
        he = /<(\w+)[>\s]/,
        we = /[\x00`><"'&]/g,
        be = /[\x00`><\"'&]/,
        xe = /^on[A-Z]|^convert(Back)?$/,
        _e = we,
        ye = 0,
        ke = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "\x00": "&#0;",
            "'": "&#39;",
            '"': "&#34;",
            "`": "&#96;"
        },
        je = "html",
        Ce = "object",
        Ae = "data-jsv-tmpl",
        Te = "jsvTmpl",
        Re = "For #index in nested block use #getIndex().",
        Ve = {},
        Me = B.jsrender,
        $e = Me && e && !e.render,
        Ne = {
            template: {
                compile: k
            },
            tag: {
                compile: _
            },
            helper: {},
            converter: {}
        };
    if (Z = {
        jsviews: ie,
        settings: function (e) {
            p(ne, e), o(ne._dbgMode), ne.jsv && ne.jsv()
        },
        sub: {
            View: b,
            Err: d,
            tmplFn: $,
            parse: S,
            extend: p,
            extendCtx: U,
            syntaxErr: M,
            onStore: {},
            _ths: r,
            _tg: function () {
            }
        },
        map: j,
        _cnvt: v,
        _tag: w,
        _err: V
    }, (d.prototype = new Error).constructor = d, c.depends = function () {
        return [this.get("item"), "index"]
    }, f.depends = "index", b.prototype = {
        get: u,
        getIndex: f,
        getRsc: h,
        hlp: g,
        _is: "view"
    }, !(Me || e && e.render)) {
        for (Q in Ne) A(Q, Ne[Q]);
        W = Z.templates, X = Z.converters, Y = Z.helpers, ee = Z.tags, te = Z.sub, ne = Z.settings, te._tg.prototype = {
            baseApply: y,
            cvtArgs: m
        }, P = te.topView = new b, e ? (e.fn.render = O, e.observable && (p(te, e.views.sub), Z.map = e.views.map)) : (e = {}, L && (B.jsrender = e), e.renderFile = e.__express = e.compile = function () {
            throw "Node.js: use npm jsrender, or jsrender-node.js"
        }, e.isFunction = function (e) {
            return "function" == typeof e
        }, e.isArray = Array.isArray || function (e) {
            return "[object Array]" === {}.toString.call(e)
        }, te._jq = function (t) {
            t !== e && (p(t, e), e = t, e.fn.render = O, delete e.jsrender)
        }, e.jsrender = ie), z = e.isFunction, G = e.isArray, e.render = Ve, e.views = Z, e.templates = W = Z.templates, ne({
            debugMode: o,
            delimiters: l,
            onError: function (e, t, n) {
                return t && (e = void 0 === n ? "{Error: " + (e.message || e) + "}" : z(n) ? n(e, t) : n), void 0 == e ? "" : e
            },
            _dbgMode: !1
        }), ee({
            "if": {
                render: function (e) {
                    var t = this,
                        n = t.tagCtx,
                        r = t.rendering.done || !e && (arguments.length || !n.index) ? "" : (t.rendering.done = !0, t.selected = n.index, n.render(n.view, !0));
                    return r
                },
                flow: !0
            },
            "for": {
                render: function (e) {
                    var t, n = !arguments.length,
                        r = this,
                        i = r.tagCtx,
                        a = "",
                        s = 0;
                    return r.rendering.done || (t = n ? i.view.data : e, void 0 !== t && (a += i.render(t, n), s += G(t) ? t.length : 1), (r.rendering.done = s) && (r.selected = i.index)), a
                },
                flow: !0
            },
            props: {
                baseTag: "for",
                dataMap: j(K),
                flow: !0
            },
            include: {
                flow: !0
            },
            "*": {
                render: i,
                flow: !0
            },
            ":*": {
                render: i,
                flow: !0
            },
            dbg: Y.dbg = X.dbg = s
        }), X({
            html: q,
            attr: q,
            url: function (e) {
                return void 0 != e ? encodeURI("" + e) : null === e ? e : ""
            }
        }), l()
    }
    return $e && Me.views.sub._jq(e), e || Me
});
//# sourceMappingURL=jsrender.min.js.map