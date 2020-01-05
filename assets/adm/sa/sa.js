! function(e, t) {
    "use strict";

    function n() {
        function n(e, t) {
            for (var n = 0; n < S.length; n++)
                if (e += t, e === S.length ? e = 0 : -1 === e && (e = S.length - 1), S[e].offsetWidth || S[e].offsetHeight || S[e].getClientRects().length) return void S[e].focus()
        }

        function i(t) {
            var a = t || e.event,
                o = a.keyCode || a.which,
                s = b(f, "visible");
            if (-1 !== [9, 13, 32, 27].indexOf(o)) {
                for (var l = a.target || a.srcElement, r = -1, i = 0; i < S.length; i++)
                    if (l === S[i]) {
                        r = i;
                        break
                    }
                if (9 === o) {
                    if (!s) return;
                    a.shiftKey ? n(r, -1) : n(r, 1), M(a)
                } else 13 === o || 32 === o ? -1 === r && L(k, a) : 27 === o && u.allowEscapeKey === !0 && L(B, a)
            }
        }
        if (void 0 === arguments[0]) return e.console.error("sweetAlert expects at least 1 attribute!"), !1;
        var u = s({}, p);
        switch (typeof arguments[0]) {
            case "string":
                u.title = arguments[0], u.text = arguments[1] || "", u.type = arguments[2] || "";
                break;
            case "object":
                u.title = arguments[0].title || p.title, u.text = arguments[0].text || p.text, u.html = arguments[0].html || p.html, u.type = arguments[0].type || p.type, u.animation = void 0 !== arguments[0].animation ? arguments[0].animation : p.animation, u.customClass = arguments[0].customClass || u.customClass, u.allowOutsideClick = void 0 !== arguments[0].allowOutsideClick ? arguments[0].allowOutsideClick : p.allowOutsideClick, u.allowEscapeKey = void 0 !== arguments[0].allowEscapeKey ? arguments[0].allowEscapeKey : p.allowEscapeKey, u.showConfirmButton = void 0 !== arguments[0].showConfirmButton ? arguments[0].showConfirmButton : p.showConfirmButton, u.showCancelButton = void 0 !== arguments[0].showCancelButton ? arguments[0].showCancelButton : p.showCancelButton, u.closeOnConfirm = void 0 !== arguments[0].closeOnConfirm ? arguments[0].closeOnConfirm : p.closeOnConfirm, u.closeOnCancel = void 0 !== arguments[0].closeOnCancel ? arguments[0].closeOnCancel : p.closeOnCancel, u.timer = parseInt(arguments[0].timer) || p.timer, u.width = parseInt(arguments[0].width) || p.width, u.padding = parseInt(arguments[0].padding) || p.padding, u.background = void 0 !== arguments[0].background ? arguments[0].background : p.background, u.confirmButtonText = arguments[0].confirmButtonText || p.confirmButtonText, u.confirmButtonColor = arguments[0].confirmButtonColor || p.confirmButtonColor, u.confirmButtonClass = arguments[0].confirmButtonClass || u.confirmButtonClass, u.cancelButtonText = arguments[0].cancelButtonText || p.cancelButtonText, u.cancelButtonColor = arguments[0].cancelButtonColor || p.cancelButtonColor, u.cancelButtonClass = arguments[0].cancelButtonClass || u.cancelButtonClass, u.buttonsStyling = void 0 !== arguments[0].buttonsStyling ? arguments[0].buttonsStyling : p.buttonsStyling, u.reverseButtons = void 0 !== arguments[0].reverseButtons ? arguments[0].reverseButtons : p.reverseButtons, u.imageUrl = arguments[0].imageUrl || p.imageUrl, u.imageWidth = arguments[0].imageWidth || p.imageWidth, u.imageHeight = arguments[0].imageHeight || p.imageHeight, u.imageClass = arguments[0].imageClass || p.imageClass, u.callback = arguments[1] || null, e.sweetAlert.callback = e.swal.callback = function(e) {
                    "function" == typeof u.callback && u.callback(e)
                };
                break;
            default:
                return e.console.error('Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]), !1
        }
        a(u), c(), l();
        var f = w();
        u.timer && (f.timeout = setTimeout(function() {
            r(), "function" == typeof u.callback && u.callback()
        }, u.timer));
        var y, C = function(t) {
                var n = t || e.event,
                    a = n.target || n.srcElement,
                    s = b(a, e.swalClasses.confirm),
                    l = b(a, e.swalClasses.cancel),
                    i = b(f, "visible");
                switch (n.type) {
                    case "mouseover":
                    case "mouseup":
                    case "focus":
                        u.buttonsStyling && (s ? a.style.backgroundColor = o(u.confirmButtonColor, -.1) : l && (a.style.backgroundColor = o(u.cancelButtonColor, -.1)));
                        break;
                    case "mouseout":
                    case "blur":
                        u.buttonsStyling && (s ? a.style.backgroundColor = u.confirmButtonColor : l && (a.style.backgroundColor = u.cancelButtonColor));
                        break;
                    case "mousedown":
                        u.buttonsStyling && (s ? a.style.backgroundColor = o(u.confirmButtonColor, -.2) : l && (a.style.backgroundColor = o(u.cancelButtonColor, -.2)));
                        break;
                    case "click":
                        s && u.callback && i ? (u.callback(!0), u.closeOnConfirm && r()) : u.callback && i ? (u.callback.length > 0 && u.callback(!1), u.closeOnCancel && r()) : r()
                }
            },
            h = f.querySelectorAll("button");
        for (y = 0; y < h.length; y++) h[y].onclick = C, h[y].onmouseover = C, h[y].onmouseout = C, h[y].onmousedown = C;
        m = t.onclick, t.onclick = function(t) {
            var n = t || e.event,
                a = n.target || n.srcElement;
            a === v() && u.allowOutsideClick && (r(), "function" == typeof u.callback && u.callback())
        };
        var k = f.querySelector("button." + e.swalClasses.confirm),
            B = f.querySelector("button." + e.swalClasses.cancel),
            S = f.querySelectorAll("button, input:not([type=hidden]), textarea, select");
        for (y = 0; y < S.length; y++) S[y].onfocus = C, S[y].onblur = C;
        u.reverseButtons && k.parentNode.insertBefore(B, k), n(-1, 1), d = e.onkeydown, e.onkeydown = i, u.buttonsStyling && (k.style.borderLeftColor = u.confirmButtonColor, k.style.borderRightColor = u.confirmButtonColor), e.swal.toggleLoading = function() {
            k.disabled = !k.disabled, B.disabled = !B.disabled
        }, e.swal.enableButtons = function() {
            k.disabled = !1, B.disabled = !1
        }, e.swal.disableButtons = function() {
            k.disabled = !0, B.disabled = !0
        }, swal.enableButtons(), e.onfocus = function() {
            e.setTimeout(function() {
                void 0 !== g && (g.focus(), g = void 0)
            }, 0)
        }
    }

    function a(n) {
        var a = w();
        a.style.width = n.width + "px", a.style.padding = n.padding + "px", a.style.marginLeft = -n.width / 2 + "px", a.style.background = n.background;
        var o = t.getElementsByTagName("head")[0],
            s = t.createElement("style");
        s.type = "text/css", s.id = f, s.innerHTML = "@media screen and (max-width: " + n.width + "px) {." + e.swalClasses.modal + " {max-width: 100%;left: 0 !important;margin-left: 0 !important;}}", o.appendChild(s);
        var l = a.querySelector("h2"),
            r = a.querySelector("div.sweet-content"),
            i = a.querySelector("button." + e.swalClasses.confirm),
            c = a.querySelector("button." + e.swalClasses.cancel),
            u = '';
        if (l.innerHTML = k(n.title).split("\n").join("<br>"), e.jQuery ? r = $(r).html(n.html || "<p>" + k(n.text.split("\n").join("<br>")) + "</p>") : (r.innerHTML = n.html || "<p>" + k(n.text.split("\n").join("<br>")) + "</p>", r.innerHTML && S(r)), n.customClass && C(a, n.customClass), E(a.querySelectorAll(".icon")), n.type) {
            for (var m = !1, d = 0; d < y.length; d++)
                if (n.type === y[d]) {
                    m = !0;
                    break
                }
            if (!m) return e.console.error("Unknown alert type: " + n.type), !1;
            var g = a.querySelector(".icon." + n.type);
            switch (S(g), n.type) {
                case "success":
                    C(g, "animate"), C(g.querySelector(".tip"), "animate-success-tip"), C(g.querySelector(".long"), "animate-success-long");
                    break;
                case "error":
                    C(g, "animate-error-icon"), C(g.querySelector(".x-mark"), "animate-x-mark");
                    break;
                case "warning":
                    C(g, "pulse-warning"), C(g.querySelector(".body"), "pulse-warning-ins"), C(g.querySelector(".dot"), "pulse-warning-ins")
            }
        }
        var p = a.querySelector(".sweet-image");
        n.imageUrl ? (p.setAttribute("src", n.imageUrl), S(p), n.imageWidth && p.setAttribute("width", n.imageWidth), n.imageHeight && p.setAttribute("height", n.imageHeight), n.imageClass && C(p, n.imageClass)) : E(p), n.showCancelButton ? c.style.display = "inline-block" : E(c), n.showConfirmButton ? q(i, "display") : E(i), n.showConfirmButton || n.showCancelButton ? S(u) : E(u), i.innerHTML = k(n.confirmButtonText), c.innerHTML = k(n.cancelButtonText), n.buttonsStyling && (i.style.backgroundColor = n.confirmButtonColor, c.style.backgroundColor = n.cancelButtonColor), i.className = e.swalClasses.confirm, C(i, n.confirmButtonClass), c.className = e.swalClasses.cancel, C(c, n.cancelButtonClass), n.buttonsStyling ? (C(i, "styled"), C(c, "styled")) : (h(i, "styled"), h(c, "styled"), i.style.backgroundColor = i.style.borderLeftColor = i.style.borderRightColor = "", c.style.backgroundColor = c.style.borderLeftColor = c.style.borderRightColor = ""), n.animation === !0 ? h(a, "no-animation") : C(a, "no-animation")
    }

    function o(e, t) {
        e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
        for (var n = "#", a = 0; 3 > a; a++) {
            var o = parseInt(e.substr(2 * a, 2), 16);
            o = Math.round(Math.min(Math.max(0, o + o * t), 255)).toString(16), n += ("00" + o).substr(o.length)
        }
        return n
    }

    function s(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }

    function l() {
        var e = w();
        O(v(), 10), S(e), C(e, "show-sweet-alert"), h(e, "hide-sweet-alert"), u = t.activeElement, setTimeout(function() {
            C(e, "visible")
        }, 500)
    }

    function r() {
        var e = w();
        x(v()), x(e), h(e, "showSweetAlert"), C(e, "hideSweetAlert"), h(e, "visible");
        var t = e.querySelector(".icon.success");
        h(t, "animate"), h(t.querySelector(".tip"), "animate-success-tip"), h(t.querySelector(".long"), "animate-success-long");
        var n = e.querySelector(".icon.error");
        h(n, "animate-error-icon"), h(n.querySelector(".x-mark"), "animate-x-mark");
        var a = e.querySelector(".icon.warning");
        h(a, "pulse-warning"), h(a.querySelector(".body"), "pulse-warning-ins"), h(a.querySelector(".dot"), "pulse-warning-ins"), i()
    }

    function i() {
        var n = w();
        e.onkeydown = d, t.onclick = m, u && u.focus(), g = void 0, clearTimeout(n.timeout);
        var a = t.getElementsByTagName("head")[0],
            o = t.getElementById(f);
        o && a.removeChild(o)
    }

    function c() {
        var e = w();
        e.style.marginTop = T(w())
    }
    e.swalClasses = {
        modal: "sweet-alert",
        overlay: "sweet-overlay",
        confirm: "sweet-confirm",
        cancel: "sweet-cancel"
    };
    var u, m, d, g, f = "sweet-alert-mediaquery",
        y = ["error", "warning", "info", "success"],
        p = {
            title: "",
            text: "",
            html: "",
            type: null,
            animation: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            showConfirmButton: !0,
            showCancelButton: !1,
            closeOnConfirm: !0,
            closeOnCancel: !0,
            confirmButtonText: "Ок",
            confirmButtonColor: "#3085d6",
            confirmButtonClass: null,
            cancelButtonText: "Закрыть",
            cancelButtonColor: "#aaa",
            cancelButtonClass: null,
            buttonsStyling: !0,
            reverseButtons: !1,
            imageUrl: null,
            imageWidth: null,
            imageHeight: null,
            imageClass: null,
            timer: null,
            width: 500,
            padding: 20,
            background: "#fff"
        },
        w = function() {
            return t.querySelector("." + e.swalClasses.modal)
        },
        v = function() {
            return t.querySelector("." + e.swalClasses.overlay)
        },
        b = function(e, t) {
            return new RegExp(" " + t + " ").test(" " + e.className + " ")
        },
        C = function(e, t) {
            t && !b(e, t) && (e.className += " " + t)
        },
        h = function(e, t) {
            var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
            if (b(e, t)) {
                for (; n.indexOf(" " + t + " ") >= 0;) n = n.replace(" " + t + " ", " ");
                e.className = n.replace(/^\s+|\s+$/g, "")
            }
        },
        k = function(e) {
            var n = t.createElement("div");
            return n.appendChild(t.createTextNode(e)), n.innerHTML
        },
        B = function(e) {
            e.style.opacity = "", e.style.display = "block"
        },
        S = function(e) {
            if (e && !e.length) return B(e);
            for (var t = 0; t < e.length; ++t) B(e[t])
        },
        x = function(e) {
            e.style.opacity = "", e.style.display = "none"
        },
        E = function(e) {
            if (e && !e.length) return x(e);
            for (var t = 0; t < e.length; ++t) x(e[t])
        },
        q = function(e, t) {
            e.style.removeProperty ? e.style.removeProperty(t) : e.style.removeAttribute(t)
        },
        T = function(e) {
            e.style.left = "-9999px", e.style.display = "block";
            var t, n = e.clientHeight;
            return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding"), 10) : parseInt(e.currentStyle.padding), e.style.left = "", e.style.display = "none", "-" + parseInt(n / 2 + t) + "px"
        },
        O = function(e, t) {
            if (+e.style.opacity < 1) {
                t = t || 16, e.style.opacity = 0, e.style.display = "block";
                var n = +new Date,
                    a = function() {
                        e.style.opacity = +e.style.opacity + (new Date - n) / 100, n = +new Date, +e.style.opacity < 1 && setTimeout(a, t)
                    };
                a()
            }
            e.style.display = "block"
        },
        L = function(n) {
            if ("function" == typeof MouseEvent) {
                var a = new MouseEvent("click", {
                    view: e,
                    bubbles: !1,
                    cancelable: !0
                });
                n.dispatchEvent(a)
            } else if (t.createEvent) {
                var o = t.createEvent("MouseEvents");
                o.initEvent("click", !1, !1), n.dispatchEvent(o)
            } else t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick()
        },
        M = function(t) {
            "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0)
        };
    e.sweetAlert = e.swal = function() {
            var e = arguments,
                t = w();
            if (null !== t) b(t, "visible") && i(), n.apply(this, e);
            else var a = setInterval(function() {
                null !== w() && (clearInterval(a), n.apply(this, e))
            }, 100)
        }, e.sweetAlert.closeModal = e.swal.closeModal = function() {
            r()
        }, e.sweetAlert.clickConfirm = e.swal.clickConfirm = function() {
            var t = w(),
                n = t.querySelector("button." + e.swalClasses.confirm);
            n.click()
        }, e.sweetAlert.clickCancel = e.swal.clickCancel = function() {
            var t = w(),
                n = t.querySelector("button." + e.swalClasses.cancel);
            n.click()
        }, e.swal.init = function() {
            var n = '<div class="' + e.swalClasses.overlay + '" tabIndex="-1"></div><div class="' + e.swalClasses.modal + '" style="display: none" tabIndex="-1"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <img class="sweet-image"> <h2>1</h2><div class="sweet-content">Text</div><button class="' + e.swalClasses.confirm + '">OK</button><button class="' + e.swalClasses.cancel + '">Cancel</button></div>',
                a = t.createElement("div");
            a.className = "sweet-container", a.innerHTML = n, t.body.appendChild(a)
        }, e.swal.setDefaults = function(e) {
            if (!e) throw new Error("userParams is required");
            if ("object" != typeof e) throw new Error("userParams has to be a object");
            s(p, e)
        },
        function() {
            "complete" === t.readyState || "interactive" === t.readyState && t.body ? swal.init() : t.addEventListener ? t.addEventListener("DOMContentLoaded", function e() {
                t.removeEventListener("DOMContentLoaded", e, !1), swal.init()
            }, !1) : t.attachEvent && t.attachEvent("onreadystatechange", function n() {
                "complete" === t.readyState && (t.detachEvent("onreadystatechange", n), swal.init())
            })
        }()
}(window, document);