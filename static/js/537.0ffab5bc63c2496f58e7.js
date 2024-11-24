webpackJsonp([537, 607, 613, 891], {
    "28Ma": function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = {
                antifakeFalse: "未查询到该码信息，谨防假冒。",
                notFountTemplate: "未查询到入口信息"
            }
    },
    "616D": function(e, t) {},
    aCc6: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = new (o("7+uW").default)({
            data: function() {
                return {
                    eventKey: {
                        test: "test",
                        antifakeFalse: "antifake.false",
                        antifakeTrue: "antifake.true",
                        pruductChange: "pruduct.change",
                        previewdataChange: "previewdata.change",
                        hasNavList: "has.navlist",
                        updataMainContainerStyle: "maincontainer.style.updata",
                        configSavePreview: "config.save.preview",
                        DialogAddPageVisible: "dialog.addpage.visible",
                        DesignCompRemove: "deign.comp.remove"
                    }
                }
            },
            methods: {
                publish: function(e, t) {
                    console.log("bus.publish", e),
                        this.$emit(e, t)
                },
                subscribe: function(e, t) {
                    this.$on(e, t)
                }
            }
        });
        t.default = n
    },
    lCIJ: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o("ENRU")
            , a = o("aCc6")
            , i = o("T30w")
            , s = (o("28Ma"),
            o("Au9i"))
            , r = o("MJLE")
            , c = o.n(r)
            , l = {
            name: "CompAntiFake",
            props: ["comp", "cfg", "selectedPage"],
            data: function() {
                return {
                    title: "",
                    code: "",
                    showInput: !1,
                    icons: {
                        query: "http://image.supercarrier8.com/antifaketemplae/%E9%98%B2%E4%BC%AA%E7%BB%93%E6%9E%9C.png"
                    },
                    antifakeInfo: {
                        Result: !0,
                        Content: ""
                    },
                    language: "ZH-CN",
                    codeColor: {},
                    logicColorList: [],
                    fourQuadrantList: [],
                    url: "",
                    codeColorType: 0,
                    afInfo: ""
                }
            },
            methods: {
                search: function() {
                    this.code && /^\d{1,24}$/.test(this.code) ? a.default.publish("reload", this.code) : Object(s.Toast)({
                        message: "请输入1-24位数码",
                        position: "bottom",
                        duration: 2e3
                    })
                },
                continueSearch: function() {
                    var e = _.find(this.cfg.pages, {
                        type: "8"
                    });
                    e && this.$emit("changeData", {
                        selectedPage: e
                    })
                },
                searchAntifake: function(e) {
                    var t = this;
                    if (e) {
                        var o = function() {
                            n.default.getAntifakeInfo(e.EnterpriseNo || t.sup8.context.enterpriseno || t.sup8.context.eno, e.ProductId, e.Code, t.sup8.context.channel, t.sup8.context.decodestatus, t.sup8.codeInfo.LabelNo, t.sup8.codeInfo.SkuLogisticCode || "123", function(e) {
                                !0 === e.flag && !0 === t.antifakeInfo.Result ? (t.afInfo = e.data,
                                    t.sup8.antifakeInfo = _.cloneDeep(e.data),
                                    a.default.publish("event_enable_comp", "防伪查询正确数码"),
                                i && a.default.publish(a.default.eventKey.pruductChange),
                                    a.default.publish(a.default.eventKey.antifakeTrue, {
                                        isNewProduct: i,
                                        msg: "防伪查询正确数码"
                                    }),
                                    t.sup8.context.logiccolor ? t.getLogicColorConvertInfo() : t.antifakeInfo.Content = t.afInfo.Content.replace(new RegExp("\\$logicColor\\$","g"), "").replace(new RegExp("\\$fourQuadrant\\$","g"), "")) : t.antifakeInfo = {
                                    Result: !0,
                                    Content: e.msg || "未查询到该码的信息，谨防假冒"
                                }
                            }, function(e) {
                                t.antifakeInfo = {
                                    Result: !0,
                                    Content: e.msg || "未查询到该码的信息，谨防假冒"
                                }
                            }, t.language)
                        };
                        t.sup8.codeInfo = e;
                        if (!e.Code)
                            return void (t.showInput = !0);
                        var i = t.sup8.codeInfo.ProductId !== e.ProductId;
                        "0" == this.sup8.h5Template.IsGPS ? o() : this.sup8.context.geo ? o() : a.default.subscribe("gpsDone", function(e) {
                            o()
                        })
                    } else
                        ;
                },
                getLogicColorConvertInfo: function() {
                    var e = this
                        , t = location.protocol.substring(0, location.protocol.length - 1)
                        , o = location.host;
                    n.default.getLogicColorConvertInfo(this.sup8.context.eno, this.sup8.context.code, t, o, this.sup8.context.logiccolor, function(t) {
                        t.flag && (e.logicColorList = t.data.LogicColor,
                            e.fourQuadrantList = t.data.FourQuadrant,
                            e.url = t.data.Url,
                            1 == t.data.AntifakeType ? (e.codeColorType = 1,
                                e.creatCodeColor()) : 2 == t.data.AntifakeType ? (e.codeColorType = 2,
                                e.creatCodeColor(),
                                e.creatQuadrant()) : e.antifakeInfo.Content = e.afInfo.Content.replace(new RegExp("\\$logicColor\\$","g"), "").replace(new RegExp("\\$fourQuadrant\\$","g"), ""))
                    }, function(e) {})
                },
                creatCodeColor: function() {
                    var e = this;
                    if (1 == this.codeColorType && (this.afInfo.Content = this.afInfo.Content.replace(new RegExp("\\$fourQuadrant\\$","g"), "")),
                    -1 != this.afInfo.Content.indexOf("$logicColor$")) {
                        var t, o = "";
                        this.logicColorList.forEach(function(t) {
                            var n = "";
                            switch (t.Color) {
                                case "红色":
                                    n = "num-red";
                                    break;
                                case "蓝色":
                                    n = "num-blue";
                                    break;
                                case "绿色":
                                    n = "num-green";
                                    break;
                                case "黑色":
                                default:
                                    n = "num-black"
                            }
                            o += '<div class="code-item ' + n + '">\n\t\t\t\t\t\t<div class="num">' + t.Num + '</div>\n\t\t\t\t\t\t<div class="color">' + e.codeColor[t.Color] + "</div>\n\t\t\t\t\t</div>"
                        }),
                            t = '<div class="num-color cl">' + o + "</div>",
                            1 == this.codeColorType ? this.antifakeInfo.Content = this.afInfo.Content.replace(new RegExp("\\$logicColor\\$","g"), t) : this.afInfo.Content = this.afInfo.Content.replace(new RegExp("\\$logicColor\\$","g"), t)
                    } else
                        this.antifakeInfo.Content = this.afInfo.Content
                },
                creatQuadrant: function() {
                    if (-1 != this.afInfo.Content.indexOf("$fourQuadrant$")) {
                        var e, t = this, o = "", n = 1;
                        this.fourQuadrantList.forEach(function(e) {
                            var t = "";
                            switch (e.Color) {
                                case "红色":
                                    t = "bg-red";
                                    break;
                                case "蓝色":
                                    t = "bg-blue";
                                    break;
                                case "绿色":
                                    t = "bg-green";
                                    break;
                                case "黑色":
                                default:
                                    t = "bg-black"
                            }
                            2 == n ? o = '<span class="' + t + '"></span>' + o : o += '<span class="' + t + '"></span>',
                                n += 1
                        });
                        var a = (new Date).getTime();
                        e = '<div class="four-quadrant"><div class="qrcode-box">' + o + '<div class="qrcode" id="qrcode' + a + '"></div></div></div>',
                            this.antifakeInfo.Content = this.afInfo.Content.replace(new RegExp("\\$fourQuadrant\\$","g"), e),
                            this.$nextTick(function() {
                                new c.a(document.getElementById("qrcode" + a),{
                                    text: t.url,
                                    width: 200,
                                    height: 200,
                                    colorDark: "transparent",
                                    colorLight: "#fff",
                                    correctLevel: c.a.CorrectLevel.H
                                })
                            })
                    } else
                        this.antifakeInfo.Content = this.afInfo.Content
                },
                getOSlanguage: function() {
                    var e = (navigator.browserLanguage || navigator.language).toLowerCase();
                    e.indexOf("zh") > -1 ? (this.language = "ZH-CN",
                        this.codeColor = i.default.codeColor[this.language]) : e.indexOf("en") > -1 ? (this.language = "EN-US",
                        this.codeColor = i.default.codeColor[this.language]) : e.indexOf("ja") > -1 ? (this.language = "JA-JP",
                        this.codeColor = i.default.codeColor[this.language]) : e.indexOf("ko") > -1 ? (this.language = "KO-KR",
                        this.codeColor = i.default.codeColor[this.language]) : e.indexOf("fr") > -1 ? (this.language = "FR-FR",
                        this.codeColor = i.default.codeColor[this.language]) : e.indexOf("de") > -1 ? (this.language = "DE-DE",
                        this.codeColor = i.default.codeColor[this.language]) : e.indexOf("ru") > -1 ? (this.language = "RU-RU",
                        this.codeColor = i.default.codeColor[this.language]) : e.indexOf("ar") > -1 ? (this.language = "AR-SA",
                        this.codeColor = i.default.codeColor[this.language]) : e.indexOf("es") > -1 ? (this.language = "ES-ES",
                        this.codeColor = i.default.codeColor[this.language]) : e.indexOf("hi") > -1 ? (this.language = "HI-IN",
                        this.codeColor = i.default.codeColor[this.language]) : (this.language = "ZH-CN",
                        this.codeColor = i.default.codeColor[this.language])
                }
            },
            created: function() {
                switch (this.mergeCompProps(this.comp),
                    this.title = this.sup8.productInfo && this.sup8.productInfo.name ? this.sup8.productInfo.name + " " + this.sup8.productInfo.code : "商品名称",
                this.comp.props && !this.comp.props.continueText && (this.comp.props.continueText = {
                    val: "继续查询"
                }),
                this.comp.props && !this.comp.props.resultText && (this.comp.props.resultText = {
                    val: "查验结果"
                }),
                this.comp.props && !this.comp.props.queryingText && (this.comp.props.queryingText = {
                    val: ""
                }),
                    this.antifakeInfo.Content = this.comp.props.queryingText.val || "",
                    this.getOSlanguage(),
                    this.sup8.env) {
                    case this.sup8._def.env.design:
                    case this.sup8._def.env.preview:
                        this.antifakeInfo = {
                            Result: !0,
                            Content: "该商品已被查询2次<br>感谢您购买由xxxxxx公司正品授权商品，谨防假冒！"
                        };
                        break;
                    case this.sup8._def.env.run:
                        this.sup8.antifakeInfo && !this.sup8.context.isNewCode ? (this.antifakeInfo = _.cloneDeep(this.sup8.antifakeInfo),
                            this.afInfo = _.cloneDeep(this.sup8.antifakeInfo),
                            this.sup8.context.logiccolor ? this.getLogicColorConvertInfo() : this.antifakeInfo.Content = this.afInfo.Content.replace(new RegExp("\\$logicColor\\$","g"), "").replace(new RegExp("\\$fourQuadrant\\$","g"), "")) : (this.searchAntifake(this.sup8.codeInfo),
                            this.sup8.context.isNewCode = !1)
                }
            },
            mounted: function() {
                console.log("123456")
            }
        }
            , u = {
            render: function() {
                var e = this
                    , t = e.$createElement
                    , o = e._self._c || t;
                return o("div", {
                    staticClass: "root",
                    style: {
                        backgroundColor: e.comp.props.bgColor.val
                    }
                }, [e.antifakeInfo.Result ? e._e() : o("div", {
                    staticClass: "fake"
                }, [o("img", {
                    attrs: {
                        src: e.comp.props.bgImg.val,
                        alt: ""
                    }
                })]), e._v(" "), e.showInput ? e._e() : o("div", {
                    staticClass: "result bg-color"
                }, [o("mt-cell", {
                    staticClass: "bg-color",
                    attrs: {
                        title: e.comp.props.resultText.val
                    }
                }, [o("img", {
                    attrs: {
                        slot: "icon",
                        src: e.icons.query,
                        width: "16",
                        height: "16"
                    },
                    slot: "icon"
                }), e._v(" "), 1 == e.comp.props.visible.val ? o("div", {
                    on: {
                        click: function(t) {
                            return e.continueSearch()
                        }
                    }
                }, [o("span", {
                    staticStyle: {
                        "margin-right": "24px"
                    }
                }, [e._v(e._s(e.comp.props.continueText.val))]), e._v(" "), o("i", {
                    staticClass: "mint-cell-allow-right"
                })]) : e._e()]), e._v(" "), o("div", {
                    staticClass: "bg-color div-break",
                    class: {
                        "reply-true": e.antifakeInfo.Result,
                        "reply-false": !e.antifakeInfo.Result
                    },
                    domProps: {
                        innerHTML: e._s(e.antifakeInfo.Content)
                    }
                })], 1)])
            },
            staticRenderFns: []
        };
        var f = o("VU/8")(l, u, !1, function(e) {
            o("616D")
        }, "data-v-17811c1f", null);
        t.default = f.exports
    }
});
