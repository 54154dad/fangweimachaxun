webpackJsonp([0, 9, 470, 607, 612, 613, 749], {
    "/9xl": function(t, o, s) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = s("//Fk")
            , a = s.n(n)
            , r = s("Xxa5")
            , i = s.n(r)
            , u = s("Gu7T")
            , l = s.n(u)
            , p = s("mvHQ")
            , c = s.n(p)
            , d = s("exGp")
            , g = s.n(d)
            , f = s("pFYg")
            , h = s.n(f)
            , m = s("ZiwW")
            , y = (s("7+uW"),
            s("d8/S"),
            s("28Ma"))
            , v = (s("BWyX"),
            s("ENRU"))
            , x = s("NivA")
            , b = s("SeEW")
            , T = s("aCc6")
            , w = s("KvKp")
            , S = s("Au9i")
            , C = s("fxnj")
            , P = s.n(C)
            , I = {
            name: "RunEnv",
            data: function() {
                return {
                    cfg: {},
                    selectedPage: void 0,
                    homePage: {},
                    loading: !1,
                    history: [],
                    errCode: ["200101", "200102", "200201", "200202", "200203", "200204", "200205", "200206", "300101"],
                    browserBack: void 0,
                    jsSDKReady: !1,
                    intercept: !0,
                    mainContainerStyle: {},
                    mainContainerStyle_paddingBottom: 0,
                    runState: 1
                }
            },
            components: {
                loading: s("ZjuW").default
            },
            methods: {
                subscribe: function() {
                    var e = this;
                    T.default.$on(T.default.eventKey.updataMainContainerStyle, function(t) {
                        t.paddingBottom && (e.mainContainerStyle_paddingBottom += t.paddingBottom,
                            e.mainContainerStyle.paddingBottom = e.mainContainerStyle_paddingBottom + "px"),
                            e.$forceUpdate()
                    }),
                        T.default.$on(T.default.eventKey.hasNavList, function(t) {
                            t.paddingBottom && (e.mainContainerStyle_paddingBottom += t.paddingBottom,
                                e.mainContainerStyle.paddingBottom = e.mainContainerStyle_paddingBottom + "px"),
                                e.$forceUpdate()
                        }),
                        T.default.$on("reload", function(t) {
                            e.sup8.urlparams.ptype = void 0;
                            var o = t;
                            "object" === (void 0 === t ? "undefined" : h()(t)) && (e.sup8.urlparams.ptype = t.ptype,
                                o = t.code),
                                e.sup8.context.isreload = !0,
                                e.getImportConfigByUrl(o),
                                e.$forceUpdate()
                        })
                },
                initWxJsSdk: function() {
                    var e = this;
                    if (!e.sup8.$utils.isWechat())
                        return e.jsSDKReady = !1,
                            void e.getGPS();
                    var t = location.href.split("#")[0];
                    void 0 !== window.wechaturl && (t = window.wechaturl),
                        v.default.getWxJsSdkConfig(e.sup8.context.eno, t, 1, function(t) {
                            console.log(112),
                                t.flag ? (t = t.data,
                                    e.sup8.context.wx_user = t,
                                    P.a.config({
                                        debug: !1,
                                        appId: t.appId,
                                        timestamp: t.timestamp,
                                        nonceStr: t.nonceStr,
                                        signature: t.signature,
                                        jsApiList: ["scanQRCode", "getLocation", "chooseImage", "previewImage", "uploadImage", "downloadImage", "getLocalImgData", "hideAllNonBaseMenuItem", "showMenuItems", "onMenuShareTimeline", "onMenuShareAppMessage", "updateAppMessageShareData", "updateTimelineShareData", "setFontSizeCallback"],
                                        openTagList: ["wx-open-launch-weapp"]
                                    }),
                                    P.a.ready(function() {
                                        console.log(113),
                                            e.jsSDKReady = !0,
                                            e.getGPS()
                                    }),
                                    P.a.error(function(e) {
                                        console.log(114),
                                            console.log(e)
                                    })) : (e.jsSDKReady = !1,
                                    e.getGPS())
                        }, function(t) {
                            e.jsSDKReady = !1,
                                e.getGPS()
                        })
                },
                onClickSheet: function(e) {
                    this.selectedPage = e
                },
                changeData: function(e) {
                    this._data = _.assign(this._data, e),
                        this.$forceUpdate()
                },
                changeSelectedPage: function(e) {
                    var t = _.find(this.cfg.pages, {
                        type: e
                    });
                    t && (this.selectedPage = t,
                        this.$forceUpdate())
                },
                gotoErrorPage: function(e, t) {
                    this.sup8.gotoError = !0,
                        this.sup8.msg = t,
                        this.sup8.error = e,
                        this.$router.push("/error")
                },
                gotoWxSubscribePage: function() {
                    var e = this;
                    this.sup8.context.follow ? (_.forEach(e.cfg.pages, function(t, o) {
                        _.forEach(t.components, function(t, o) {
                            t.props = e.convertCompProps(t.props)
                        })
                    }),
                        this.changeSelectedPage(this.sup8.context.follow)) : window.location.href = "/wxsubscribe"
                },
                getCodeInfo: function() {
                    var e = this;
                    return g()(i.a.mark(function t() {
                        var o, s, n, a, r, u, p, d, g;
                        return i.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                    case 0:
                                        return o = e,
                                            s = "0",
                                            t.next = 4,
                                            e.getWechatConfigInfoByEnterpriseNo();
                                    case 4:
                                        if ((n = t.sent).flag && n.data ? (o.sup8.WechatConfig = n.data,
                                            s = n.data.WxType,
                                            sessionStorage.WechatConfig = c()(n.data)) : s = 0,
                                            console.log(s),
                                            a = location.href,
                                            r = a,
                                            u = !1,
                                            ["3", "4", "5", "6", "7", "99"].includes(e.sup8.$utils.ssg("channel")) ? a = "" : (u = a.includes("&"),
                                            e.intercept && u && (a = a.split("&")[0],
                                                r = a)),
                                        e.sup8.$utils.ssg("from_businesstype") && (e.sup8.context.businesstype = e.sup8.$utils.ssg("from_businesstype")),
                                            p = e.sup8.context.businesstype ? e.sup8.context.businesstype : "",
                                            d = "",
                                            d = 2 == e.sup8.urlparams.channel && 7 == e.sup8.urlparams.businesstype ? e.sup8.urlparams.entrytempid : "",
                                        o.sup8.context.externalurl && (d = o.sup8.context.externalurl),
                                            a = d ? "" : a,
                                        "1" == e.sup8.urlparams.reload) {
                                            if (o.sup8.codeInfo)
                                                a || (a = o.sup8.codeInfo.Code);
                                            else if (g = sessionStorage.getItem("configByUrl")) {
                                                try {
                                                    g = JSON.parse(g)
                                                } catch (e) {
                                                    g = void 0
                                                }
                                                g && (o.sup8.codeInfo = g.data.codeBase,
                                                a || (a = o.sup8.codeInfo.Code))
                                            }
                                        } else
                                            a = e.intercept && u ? r : ["3", "4", "5", "6", "7", "99"].includes(e.sup8.$utils.ssg("channel")) ? "" : location.href;
                                        sessionStorage.removeItem("configByUrl"),
                                            v.default.getUrlCodeInfo(a, o.sup8.context.eno, d || o.sup8.context.externalurl, p, "", w.default.getOSlanguage(), function(e) {
                                                if (1 == e.flag && null != e.data) {
                                                    if (o.sup8.context.decodestatus = e.errorCode || "",
                                                        !e.data.config.id)
                                                        return o.loading = !1,
                                                            void o.gotoErrorPage("", "当前没有可参与活动");
                                                    if (o.errCode.includes(o.sup8.context.decodestatus))
                                                        return void o.getReply();
                                                    o.sup8.context.activitycode = e.data.config.activitycode;
                                                    var t = e.data.config
                                                        , n = [];
                                                    if (!t || !e.flag)
                                                        return void o.gotoErrorPage(m.default.fail, e.msg);
                                                    t.pages.forEach(function(e) {
                                                        "3-2" == e.type && (o.sup8.context.activityRegister = e.type),
                                                        "10-2" == e.type && (o.sup8.context.follow = e.type),
                                                            n = [].concat(l()(n), l()(e.components))
                                                    }),
                                                        o.sup8._baseComponentList = e.data.baseComponent;
                                                    var a = o.$parent.filterComponentList(t.pages, n);
                                                    o.cfg = t,
                                                    o.sup8.$utils.ssg("from_subscibe") && (o.cfg.needSubscibe = o.sup8.$utils.ssg("from_subscibe"));
                                                    var r = {
                                                        NavigatingData: t.id,
                                                        PortalType: 0
                                                    };
                                                    if (o.sup8.portalInfo = r,
                                                        o.sup8.$utils.updateContext(o.sup8.context, {
                                                            tid: r.NavigatingData
                                                        }),
                                                        o.$parent.registComponent(a),
                                                    o.cfg.entryType === o.sup8._def.entryType.wechat.code) {
                                                        if (!o.sup8.$utils.isWechat())
                                                            return o.loading = !1,
                                                                void o.gotoErrorPage(m.default.entryTypeErro1);
                                                        var i = null != o.sup8.h5Template.NeedSubscibe ? o.sup8.h5Template.NeedSubscibe : o.cfg.needSubscibe;
                                                        if ("1" == s) {
                                                            var u = o.sup8.$utils.ssg("wxUser") ? o.sup8.$utils.ssg("wxUser") : {
                                                                subscribe: ""
                                                            };
                                                            if ("2" != o.sup8.urlparams.channel && 1 != u.subscribe && 1 == i && "0" !== w.default.ssg("wx_subscibe"))
                                                                return o.loading = !1,
                                                                    void o.gotoWxSubscribePage()
                                                        } else if ("2" != o.sup8.urlparams.channel && 1 == i && "0" !== w.default.ssg("wx_subscibe"))
                                                            return o.loading = !1,
                                                                void o.gotoWxSubscribePage()
                                                    }
                                                    o.goPage(),
                                                        o.loading = !1
                                                } else
                                                    Object(S.Toast)({
                                                        message: e.msg,
                                                        position: "bottom",
                                                        duration: 2e3
                                                    })
                                            }, function(e) {});
                                    case 20:
                                    case "end":
                                        return t.stop()
                                }
                        }, t, e)
                    }))()
                },
                thirdLink: function(e) {
                    var t = this.sup8.context.code
                        , o = (new Date).getTime();
                    e = e + "&timestamp=" + o + "&sign=" + Object(x.sign)("super8", {
                        code: t,
                        timestamp: o
                    }),
                        location.href = e
                },
                goPage: function() {
                    var e = this;
                    console.log("gopage.urlparams" + c()(e.sup8.urlparams)),
                        _.forEach(e.cfg.pages, function(t, o) {
                            _.forEach(t.components, function(t, o) {
                                t.props = e.convertCompProps(t.props),
                                    e.mergeCompProps(t)
                            })
                        }),
                        e.sup8.urlparams.pageid && e.sup8.urlparams.pageid.length > 0 ? e.selectedPage = _.find(e.cfg.pages, {
                            id: e.sup8.urlparams.pageid
                        }) : e.sup8.urlparams.ptype && e.sup8.urlparams.ptype.length > 0 ? e.selectedPage = _.find(e.cfg.pages, {
                            type: e.sup8.urlparams.ptype
                        }) : (e.selectedPage = _.find(e.cfg.pages, {
                            isHome: !0
                        }),
                        e.selectedPage || (e.selectedPage = e.cfg.pages[0]))
                },
                afterGetPortal: function(e) {
                    if (e.NavigatingData || (this.sup8.gotoError = !0,
                        this.sup8.msg = res.msg),
                        this.sup8.portalInfo = e,
                        !e)
                        return this.sup8.gotoError = !0,
                            this.sup8.msg = y.default.notFountTemplate,
                            void this.$router.push("/error");
                    switch (e.PortalType) {
                        case this.sup8._def.portalType.third.code:
                            window.open(e.NavigatingData, "_parent");
                            break;
                        default:
                            this.sup8.$utils.updateContext(this.sup8.context, {
                                tid: e.NavigatingData
                            })
                    }
                    this.sup8.gotoError && this.$router.push("/error")
                },
                getReply: function() {
                    var e = this;
                    v.default.getReply(e.sup8.context.eno, e.sup8.context.decodestatus, "", e.sup8.context.code, w.default.getOSlanguage(), function(t) {
                        t.flag && void 0 !== t.data ? (e.sup8.msg = t.data,
                            e.$router.push("/error")) : (e.sup8.msg = "查询出现错误",
                            e.$router.push("/error"))
                    }, function(t) {
                        e.sup8.msg = "查询出现错误",
                            e.$router.push("/error")
                    })
                },
                getGeo: function(e) {
                    var t = this
                        , o = new b.default;
                    if ("bmap" == e)
                        o.getGeo(function(e) {
                            t.sup8.UA.geo = e;
                            var o = e.latitude + "," + e.longitude;
                            sessionStorage.setItem("gps", o),
                                t.sup8.context.channel = o,
                                t.sup8.context.geo = e,
                                T.default.publish("gpsDone", !0),
                                t.$sup8Sdk.eventHelper.publish("gpsDone", "1定位结束")
                        });
                    else if (t.sup8.$utils.isWechat() && !t.sup8.$utils.isWechatdevtools())
                        console.log("微信定位.."),
                            console.time("tengxunmappp"),
                            P.a.getLocation({
                                type: "wgs84",
                                success: function(e) {
                                    console.log("微信定位：成功:", e),
                                        sessionStorage.wxLocation = c()(e);
                                    var o = e.latitude
                                        , s = e.longitude;
                                    t.wgs84TransformBM(s, o)
                                },
                                cancel: function(e) {
                                    console.log("拒绝:" + c()(e)),
                                        o.getGeo(function(e) {
                                            t.sup8.UA.geo = e;
                                            var o = e.latitude + "," + e.longitude;
                                            sessionStorage.setItem("gps", o),
                                                t.sup8.context.channel = o,
                                                t.sup8.context.geo = e,
                                                T.default.publish("gpsDone", !0),
                                                t.$sup8Sdk.eventHelper.publish("gpsDone", "2定位结束")
                                        })
                                },
                                fail: function(e) {
                                    console.log("失败:" + c()(e)),
                                        o.getGeo(function(e) {
                                            t.sup8.UA.geo = e;
                                            var o = e.latitude + "," + e.longitude;
                                            sessionStorage.setItem("gps", o),
                                                t.sup8.context.channel = o,
                                                t.sup8.context.geo = e,
                                                T.default.publish("gpsDone", !0),
                                                t.$sup8Sdk.eventHelper.publish("gpsDone", "3定位结束")
                                        })
                                }
                            });
                    else if (t.sup8._appConf.debug) {
                        t.sup8.UA = {};
                        var s = {
                            latitude: "31.86694226",
                            longitude: "117.28269909"
                        };
                        t.sup8.UA.geo = s,
                            sessionStorage.gps = s.latitude + "," + s.longitude
                    } else
                        o.getGeo(function(e) {
                            var o = e.latitude + "," + e.longitude;
                            e.channel = o,
                                t.sup8.UA.geo = e,
                                sessionStorage.setItem("gps", o),
                                t.sup8.context.channel = o,
                                t.sup8.context.geo = e,
                                T.default.publish("gpsDone", !0),
                                t.$sup8Sdk.eventHelper.publish("gpsDone", "4定位结束")
                        })
                },
                wgs84TransformBM: function(t, o) {
                    var s = this
                        , n = new BMap.Point(t,o)
                        , a = new BMap.Convertor
                        , r = [];
                    r.push(n),
                        a.translate(r, 1, 5, function(t) {
                            console.log(t, 597),
                                0 === t.status ? $.ajax({
                                    url: "https://api.map.baidu.com/geocoder/v2/?ak=DAkHeza7GMvAuA5FL2p8GAZxC84WoMLh&location=" + t.points[0].lat + "," + t.points[0].lng + "&output=json&pois=1",
                                    dataType: "jsonp",
                                    callback: "BMap._rd._cbk43398",
                                    success: function(e) {
                                        console.log(603),
                                            console.log(c()(e)),
                                            S.Indicator.close();
                                        var o = t.points[0].lat + "," + t.points[0].lng
                                            , n = {
                                            latitude: t.points[0].lat,
                                            longitude: t.points[0].lng,
                                            channel: o,
                                            map: "baidu",
                                            addressComponent: e.result.addressComponent,
                                            address: e.result.formatted_address
                                        };
                                        sessionStorage.setItem("gps", o),
                                            s.sup8.context.channel = o,
                                            s.sup8.context.geo = n,
                                            s.sup8.UA.geo = n,
                                            T.default.publish("gpsDone"),
                                            s.$sup8Sdk.eventHelper.publish("gpsDone", "5定位结束")
                                    },
                                    error: function(e) {
                                        S.Indicator.close(),
                                            console.log("百度经坐标转地址:error", e),
                                            T.default.publish("gpsDone"),
                                            s.$sup8Sdk.eventHelper.publish("gpsDone", "6定位结束")
                                    }
                                }) : (console.log("百度经坐标转地址:error", e),
                                    S.Indicator.close(),
                                    T.default.publish("gpsDone"),
                                    s.$sup8Sdk.eventHelper.publish("gpsDone", "7定位结束"))
                        })
                },
                getImportConfigByUrl: function(e, t, o, s, n, a, r, i) {
                    console.log(e);
                    var u = this;
                    if (void 0 == e) {
                        var l = location.href;
                        this.intercept && l.includes("&") && (l = l.split("&")[0]),
                            e = l
                    }
                    t = t || u.sup8.context.eno || "",
                        v.default.getImportConfigByUrl(e, t, o, s, n, a, r, i, function(e) {
                            if (e.flag && e.data.h5Template) {
                                var t = function() {
                                    u.sup8.context.wxUser ? u.getUserMemberType() : (u.sup8.$utils.sss("configByUrl", e),
                                        u.weixinAuthorization(e))
                                };
                                if (1 == u.sup8.$utils.ssg("from_scan") && e.data.codeBase.EnterpriseNo != u.sup8.$utils.ssg("from_scanEno"))
                                    return u.loading = !1,
                                        void u.gotoErrorPage(m.default.codeENoNotMatch);
                                var o = _.get(e, "data.h5Template.MultiTargetPeople")
                                    , s = sessionStorage.getItem("destbt");
                                if (s)
                                    if (setTimeout(function() {
                                        sessionStorage.removeItem("destbt")
                                    }, 1e4),
                                    _.get(e, "data.h5Template.BusinessType") != s) {
                                        var n = _.find(o, {
                                            BusinessType: s
                                        });
                                        n ? (e.data.h5Template = _.assign(e.data.h5Template, n),
                                            e.data.h5Template.MultiTargetPeople = []) : (e.data.h5Template.ExternalUrl = "",
                                            e.data.h5Template.MultiTargetPeople = [])
                                    } else
                                        e.data.h5Template.MultiTargetPeople = [];
                                if (o = _.get(e, "data.h5Template.MultiTargetPeople"),
                                !e.data.h5Template.ExternalUrl && (!o || o.length <= 0))
                                    return u.sup8.msg = m.default.notFoundTemplate.msg,
                                        void u.$router.push("/error");
                                if (u.sup8.h5Template = u.sup8.context.h5Template = e.data.h5Template,
                                    u.sup8.codeInfo = u.sup8.context.codeInfo = e.data.codeBase || {},
                                    u.sup8.$utils.updateContext(u.sup8.context, u.sup8.codeInfo),
                                    u.sup8.$utils.updateContext(u.sup8.context, e.data.h5Template),
                                e.data.h5Template.PortalType == u.sup8._def.portalType.third.code)
                                    return void u.thirdLink(e.data.h5Template.ExternalUrl);
                                if (1 != u.sup8.$utils.ssg("loadingFirst") && (u.loading = !0,
                                    u.sup8.$utils.sss("loadingFirst", 1)),
                                !o || o.length <= 0)
                                    ["1", "0"].includes(e.data.h5Template.WeChatAuthorized) ? (console.log("hs1"),
                                        t()) : (console.log("hs2"),
                                        u.decode());
                                else {
                                    var a = _.find(e.data.h5Template.MultiTargetPeople, function(e) {
                                        return ["3", "8", "9", "10"].includes(e.BusinessType)
                                    });
                                    a ? (console.log("hs3", a),
                                        t()) : (e.data.h5Template = _.orderBy(e.data.h5Template.MultiTargetPeople, ["Row_Ver"], ["desc"])[0],
                                        u.sup8.$utils.updateContext(u.sup8.context, e.data.h5Template),
                                        u.decode())
                                }
                            } else
                                u.errCode.includes(e.errorCode) ? (u.sup8.context.decodestatus = e.errorCode,
                                    u.getReply()) : (u.sup8.msg = e.msg || "网络异常",
                                    u.$router.push("/error"))
                        }, function(e) {
                            u.sup8.msg = "网络异常",
                                u.$router.push("/error")
                        })
                },
                weixinAuthorization: function(e, t) {
                    var o = this;
                    return g()(i.a.mark(function e() {
                        var s, n, a, r, u, l, p;
                        return i.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                    case 0:
                                        return console.log("1:企业公众号，2:中商公众号"),
                                        o.sup8.$utils.isWechat() || (o.sup8.msg = "请使用微信扫码访问",
                                            o.$router.push("/error")),
                                        o.sup8.context.isreload && (s = o.sup8.context.eno || o.sup8.codeInfo.EnterpriseNo || "",
                                            n = o.sup8.h5Template.ExternalUrl,
                                            a = o.sup8.urlparams.ptype || "",
                                            o.sup8.context.wxRedirectUrl = location.origin + "?eno=" + s + "&reload=1&entrytempid=" + n + "&ptype=" + a,
                                            o.sup8.context.isreload = !1),
                                            e.next = 5,
                                            o.getWeChatEnterpriseParam();
                                    case 5:
                                        r = e.sent,
                                            u = 1 == r.data ? "getWxUserInfo" : "getWxUserInfoByCCN",
                                        2 != o.sup8.h5Template.WeChatAuthorized && (o.sup8.context.wxUser && o.sup8.$utils.ssg("wxUser") ? ("1" === o.sup8.urlparams.authtimes && (l = o.sup8.context.wxUser.unionid,
                                            (p = JSON.parse(o.sup8.urlparams.userInfo)).firstuser = o.sup8.context.wxUser,
                                        0 == o.sup8.urlparams.scope && (p.unionid = l),
                                            o.sup8.context.wxUser = p,
                                            w.default.sss("wxUser", p)),
                                            o.getUserMemberType()) : t ? o.$parent[u](o.getUserMemberType) : o.$parent[u](o.decode));
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                        }, e, o)
                    }))()
                },
                getCaching: function() {
                    var e = this.sup8.$utils.ssg("configByUrl");
                    if (console.log("今天星期三"),
                    e.flag && e.data.h5Template) {
                        if (1 == this.sup8.$utils.ssg("from_scan") && e.data.codeBase.EnterpriseNo != this.sup8.$utils.ssg("from_scanEno"))
                            return void this.gotoErrorPage(m.default.codeENoNotMatch);
                        if (!e.data.h5Template.ExternalUrl)
                            return this.sup8.msg = m.default.notFoundTemplate.msg,
                                void this.$router.push("/error");
                        if (this.sup8.context.h5Template = this.sup8.h5Template = e.data.h5Template,
                            this.sup8.context.codeInfo = this.sup8.codeInfo = e.data.codeBase || {},
                            this.sup8.$utils.updateContext(this.sup8.context, this.sup8.codeInfo),
                            this.sup8.$utils.updateContext(this.sup8.context, e.data.h5Template),
                        e.data.h5Template.PortalType == this.sup8._def.portalType.third.code)
                            return void this.thirdLink(e.data.h5Template.ExternalUrl);
                        1 != this.sup8.$utils.ssg("loadingFirst") && (this.loading = !0,
                            this.sup8.$utils.sss("loadingFirst", 1)),
                            null != e.data.h5Template.MultiTargetPeople && e.data.h5Template.MultiTargetPeople.length > 0 ? this.weixinAuthorization(e, !0) : ["1", "0"].includes(e.data.h5Template.WeChatAuthorized) ? this.weixinAuthorization(e, !0) : this.decode()
                    } else
                        this.errCode.includes(e.errorCode) ? (this.sup8.context.decodestatus = e.errorCode,
                            this.getReply()) : (this.sup8.msg = e.msg || "网络异常",
                            this.$router.push("/error"))
                },
                getUserMemberType: function() {
                    var e = this;
                    console.log("[hs]4"),
                        ["3", "4", "10"].includes(this.sup8.h5Template.BusinessType) ? v.default.getUserMemberType(this.sup8.context.wxUser.openid, this.sup8.context.eno, this.sup8.context.wxUser.unionid, function(t) {
                            if (t.flag) {
                                e.sup8.memberType = t.data,
                                    e.sup8.context.userId = t.data.UserId;
                                var o = e.sup8.h5Template.MultiTargetPeople
                                    , s = t.data.MemberType
                                    , n = t.data.UserLabelId
                                    , a = t.data.DealerLevel
                                    , r = !0
                                    , i = []
                                    , u = [];
                                if (o.length > 0) {
                                    for (var l = 0; l < o.length; l++)
                                        o[l].TargetPeople == s && i.push(o[l]);
                                    if (i.length >= 1) {
                                        for (var p = 0; p < i.length; p++)
                                            "3" == i[p].BusinessType ? i[p].PeopleLabel != n && "0" != i[p].PeopleLabel || u.push(i[p]) : "10" == i[p].BusinessType && "3" == i[p].TargetPeople ? i[p].TargetPeopleValue.includes(a) && u.push(i[p]) : u.push(i[p]);
                                        if (0 == u.length)
                                            return void e.gotoErrorPage("", "当前没有可参与活动");
                                        var c = {};
                                        c = (u = _.sortBy(u, "CreateDate")).length > 1 ? u[u.length - 1] : u[0],
                                            e.sup8.$utils.updateContext(e.sup8.context, c),
                                            e.sup8.h5Template = c,
                                            r = !1
                                    }
                                } else
                                    "4" == e.sup8.h5Template.BusinessType ? r = !1 : e.sup8.h5Template.TargetPeople == s && ("3" == e.sup8.h5Template.BusinessType ? e.sup8.h5Template.PeopleLabel != n && "0" != e.sup8.h5Template.PeopleLabel || (r = !1) : "10" == e.sup8.h5Template.BusinessType ? ("3" != e.sup8.h5Template.TargetPeople && (r = !1),
                                    "3" == e.sup8.h5Template.TargetPeople && e.sup8.h5Template.TargetPeopleValue.includes(a) && (r = !1)) : r = !1);
                                if (r)
                                    return e.loading = !1,
                                        void e.gotoErrorPage("", "当前没有可参与活动");
                                e.decode()
                            } else
                                e.loading = !1,
                                    e.gotoErrorPage("", "当前没有可参与活动")
                        }, function(t) {
                            e.loading = !1,
                                e.gotoErrorPage("", "当前没有可参与活动")
                        }) : this.decode()
                },
                getWeChatEnterpriseParam: function() {
                    var e = this;
                    return new a.a(function(t, o) {
                            v.default.getWeChatEnterpriseParam(e.sup8.context.eno, function(e) {
                                t(e)
                            }, function(e) {
                                o(e)
                            })
                        }
                    )
                },
                decode: function() {
                    var e = this.sup8.urlparams;
                    "0" === this.sup8.urlparams.authtimes && 1 == e.systype && !w.default.ssg("wx_authorize2") && ["3", "4", "10"].includes(this.sup8.h5Template.BusinessType) ? (w.default.sss("wx_authorize2", !0),
                        this.getUserInfoForSecondAuth()) : (this.getCodeInfo(),
                    "wechat_work" !== this.$route.query.entrance && this.initWxJsSdk())
                },
                getUserInfoForSecondAuth: function() {
                    var e = this
                        , t = {
                        UnionId: this.sup8.context.wxUser.unionid,
                        AppId: this.sup8.context.wxUser.appid,
                        OpenId: this.sup8.context.wxUser.openid
                    }
                        , o = {
                        UnionId: "",
                        AppId: this.sup8.context.appid,
                        OpenId: ""
                    }
                        , s = this.sup8.urlparams;
                    v.default.getUserInfoForSecondAuth(this.sup8.context.eno, s.scope, c()(t), c()(o), function(t) {
                        e.twoAuthorize(t)
                    }, function(e) {
                        console.log(e)
                    })
                },
                twoAuthorize: function(e) {
                    var t = this.sup8.urlparams
                        , o = this.sup8.context.appid
                        , s = !!e.flag;
                    if (1 == t.systype && 1 != t.authtimes && (1 == t.scope ? o != w.default.ssg("wxUser").appid && !s : !s))
                        this.$parent.getWxUserInfoTwo();
                    else {
                        if (s) {
                            var n = this.sup8.context.wxUser;
                            n.unionid = e.data.UnionId,
                                n.appid = e.data.AppId,
                                n.openid = e.data.OpenId,
                                this.sup8.context.wxUser = n,
                                w.default.sss("wxUser", n)
                        }
                        this.getCodeInfo(),
                            this.initWxJsSdk()
                    }
                },
                getGPS: function() {
                    if (this.sup8.context.geo)
                        setTimeout(function() {
                            S.Indicator.close()
                        }, 0);
                    else {
                        if ("0" == this.sup8.h5Template.IsGPS)
                            return this.sup8.context.channel = "",
                                console.log("Indicator.close"),
                                void setTimeout(function() {
                                    S.Indicator.close()
                                }, 0);
                        this.sup8.$utils.isWechat() && this.jsSDKReady ? this.getGeo() : this.getGeo("bmap")
                    }
                },
                geoFormWeixin: function() {
                    this.getGeo()
                },
                geoFormBaidu: function() {
                    this.getGeo("bmap")
                },
                getWechatConfigInfoByEnterpriseNo: function() {
                    var e = this;
                    return new a.a(function(t, o) {
                            v.default.getWechatConfigInfoByEnterpriseNo(e.sup8.context.eno, e.sup8.h5Template.AppId, function(e) {
                                t(e)
                            }, function(e) {
                                o(e)
                            })
                        }
                    )
                },
                setWinXinFontSize: function() {
                    var e = function() {
                        console.log("handleFontSize 2"),
                            WeixinJSBridge.invoke("setFontSizeCallback", {
                                fontSize: "2"
                            }, function(e) {
                                console.log("setFontSizeCallback 1", e)
                            }),
                            WeixinJSBridge.on("menu:setfont", function() {
                                WeixinJSBridge.invoke("setFontSizeCallback", {
                                    fontSize: "2"
                                }, function(e) {
                                    console.log("setFontSizeCallback 2", e)
                                })
                            })
                    };
                    try {
                        console.log("handleFontSize 1"),
                            "object" == ("undefined" == typeof WeixinJSBridge ? "undefined" : h()(WeixinJSBridge)) && "function" == typeof WeixinJSBridge.invoke ? (console.log("handleFontSize 1.1"),
                                e()) : (console.log("handleFontSize 1.2"),
                                document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", e, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", e),
                                    document.attachEvent("onWeixinJSBridgeReady", e)))
                    } catch (e) {
                        console.log("handleFontSize 1.3", e)
                    }
                }
            },
            watch: {
                selectedPage: function(e, t) {
                    if (document.title = e.name,
                        this.browserBack)
                        return this.browserBack = void 0,
                            void (this.history = _.dropRight(this.history));
                    e.historyIndex = this.history.length,
                        this.history.push(e);
                    var o = location.href;
                    window.history.pushState({
                        title: document.title + e.id,
                        url: o
                    }, document.title + e.id, o)
                }
            },
            beforeCreate: function() {
                this.sup8.env = this.sup8._def.env.run
            },
            created: function() {
                var e = this;
                if (console.log("this.sup8.urlparams---:"),
                    console.log(this.sup8.urlparams),
                    e.sup8.urlparams.userInfo) {
                    var t = JSON.parse(e.sup8.urlparams.userInfo);
                    t = this.$sup8Sdk.wxHelper.convertWxUser(t),
                        sessionStorage.setItem("wxUser", c()(t)),
                        e.sup8.context.wxUser = t
                } else
                    e.sup8.$utils.ssg("wxUser") && (e.sup8.context.wxUser = e.sup8.$utils.ssg("wxUser"));
                if (["3", "4", "5", "6", "7", "99"].includes(this.sup8.urlparams.channel)) {
                    var o = this.sup8.urlparams
                        , s = w.default.ssg("appConfig")
                        , n = o.sign
                        , a = "";
                    switch (o.channel) {
                        case "3":
                            a = s.jintouzu_token;
                            break;
                        case "4":
                            a = s.heiqiao_token;
                            break;
                        case "5":
                            a = "zz202010221514signsalt";
                            break;
                        case "6":
                            a = "JPHQBC202101251551signsalt";
                            break;
                        case "7":
                            a = s.heiqiao_token;
                            break;
                        case "99":
                            a = "common202108131512signsalt"
                    }
                    var r = this.sup8.urlparams
                        , i = r.sign
                        , u = r.eno
                        , l = r.channel
                        , p = r.digit
                        , d = r.pid
                        , g = r.labelno
                        , f = r.batchId
                        , h = r.timestamp;
                    if (["5", "99"].includes(l)) {
                        var m = [u, l, p, d, g, f, h, a];
                        if (i != Object(x.md5)(m.sort().join("")).toUpperCase())
                            return void this.gotoErrorPage("", "URL无效")
                    } else if (3 == this.sup8.urlparams.channel) {
                        if (!w.default.checkCcnSign(n, a, p, h))
                            return void this.gotoErrorPage("", "URL无效")
                    } else if (6 == this.sup8.urlparams.channel) {
                        if (!w.default.checkDMUrlSign(a, n, this.sup8.urlparams))
                            return void this.gotoErrorPage("", "URL无效")
                    } else if (delete o.sign,
                        !w.default.checkSup8Sign(n, a, o))
                        return void this.gotoErrorPage("", "URL无效");
                    w.default.sss("channel", this.sup8.urlparams.channel),
                        this.getImportConfigByUrl("", this.sup8.urlparams.eno, this.sup8.urlparams.digit, this.sup8.urlparams.pid, this.sup8.urlparams.labelno, this.sup8.urlparams.batchId, this.sup8.urlparams.productioncodebatchid, this.sup8.urlparams.codesegmentbatchid)
                } else
                    this.sup8.urlparams.scan ? (this.sup8.$utils.sss("from_scanEno", this.sup8.urlparams.eno),
                        this.sup8.$utils.sss("from_scan", this.sup8.urlparams.scan),
                        this.sup8.$utils.sss("from_subscibe", this.sup8.urlparams.subscibe),
                        this.sup8.$utils.sss("from_businesstype", this.sup8.urlparams.businesstype),
                        this.getImportConfigByUrl()) : "2" == this.sup8.urlparams.channel && this.sup8.urlparams.eno ? (this.intercept = !1,
                        this.sup8.context.eno = this.sup8.urlparams.eno,
                        this.loading = !0,
                        this.sup8.h5Template = {
                            IsGPS: "0"
                        },
                        this.decode()) : this.sup8.$utils.ssg("configByUrl") ? this.getCaching() : this.getImportConfigByUrl();
                e.sup8.UA = {
                    ua: navigator.userAgent,
                    geo: {}
                },
                "pushState"in window.history && setTimeout(function() {
                    window.addEventListener("popstate", function(t) {
                        if (e.history.length > 1 && e.selectedPage.historyIndex > 0) {
                            var o = void 0;
                            try {
                                (o = e.selectedPage.historyIndex ? _.cloneDeep(e.history[e.selectedPage.historyIndex - 1]) : _.cloneDeep(e.history[e.selectedPage.length - 2])).back = !0,
                                    e.browserBack = !0,
                                    e.selectedPage = o
                            } catch (e) {}
                            return !1
                        }
                        return !0
                    })
                }, 1e3)
            },
            mounted: function() {
                this.subscribe()
            }
        }
            , U = {
            render: function() {
                var e = this
                    , t = e.$createElement
                    , o = e._self._c || t;
                return o("div", {
                    staticClass: "env-run"
                }, [e.loading ? o("loading") : e._e(), e._v(" "), e.selectedPage && e.selectedPage.components ? o("div", {
                    staticClass: "main",
                    style: e.mainContainerStyle,
                    attrs: {
                        id: "mainx"
                    }
                }, e._l(e.selectedPage.components, function(t) {
                    return o(t.bundleName && t.bundleName.indexOf("@sup8") >= 0 ? t.componentViewName : t.componentViewName + t.baseCompId, {
                        key: t.id,
                        tag: "component",
                        attrs: {
                            id: t.id,
                            comp: t,
                            cfg: e.cfg,
                            selectedPage: e.selectedPage
                        },
                        on: {
                            clickSheet: e.onClickSheet,
                            changeData: e.changeData
                        }
                    })
                }), 1) : e._e()], 1)
            },
            staticRenderFns: []
        };
        var k = s("VU/8")(I, U, !1, function(e) {
            s("0ZmA"),
                s("spx8")
        }, "data-v-3d89a5f5", null);
        o.default = k.exports
    },
    "/IGi": function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = {
                success: {
                    code: 1e3,
                    msg: "请求成功"
                },
                faild: {
                    code: 1001,
                    msg: "请求失败"
                },
                invalidCode: {
                    code: 1002,
                    msg: "无效的数码"
                }
            }
    },
    "00tY": function(e, t) {},
    "0ZmA": function(e, t) {},
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
    "9uBv": function(e, t, o) {
        "use strict";
        var s = o("HOHu")
            , n = o("afKD")
            , a = o("1nrb")
            , r = o("zr/P")
            , i = o("zWVo")
            , u = o("Oz2a")
            , l = o("1yV6");
        n(n.S + n.F * !o("72/i")(function(e) {
            Array.from(e)
        }), "Array", {
            from: function(e) {
                var t, o, n, p, c = a(e), d = "function" == typeof this ? this : Array, g = arguments, f = g.length, h = f > 1 ? g[1] : void 0, m = void 0 !== h, y = 0, v = l(c);
                if (m && (h = s(h, f > 2 ? g[2] : void 0, 2)),
                void 0 == v || d == Array && i(v))
                    for (o = new d(t = u(c.length)); t > y; y++)
                        o[y] = m ? h(c[y], y) : c[y];
                else
                    for (p = v.call(c),
                             o = new d; !(n = p.next()).done; y++)
                        o[y] = m ? r(p, h, [n.value, y], !0) : n.value;
                return o.length = y,
                    o
            }
        })
    },
    BWyX: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        o("7+uW"),
            o("/IGi");
        var s = o("jqXp")
            , n = o("mw3O")
            , a = (o.n(n),
            o("NivA"));
        t.default = {
            getPortal: function(e) {
                var t = {}
                    , o = {
                    appkey: sessionStorage.appkey,
                    accesstoken: sessionStorage.accesstoken,
                    enterpriseno: e.EnterpriseNo || e.EnterPriseNo,
                    productid: e.ProductId,
                    orderno: e.OrderNo,
                    businessType: e.businessType,
                    targetPeople: e.TargetPeople,
                    dealerlevel: e.dealerlevel
                };
                return o.timestamp = (new Date).getTime(),
                    o.sign = Object(a.sign)(s.default.sign.key, o),
                    $.ajax({
                        url: s.default.apiUrl.getPortal,
                        data: o,
                        type: "POST",
                        async: !1,
                        dataType: "json",
                        success: function(e) {
                            (t = e).flag && t.data.PortalType
                        },
                        error: function() {}
                    }),
                    t
            },
            getPortalAppId: function(e) {
                var t = {}
                    , o = {
                    appkey: sessionStorage.appkey,
                    accesstoken: sessionStorage.accesstoken,
                    enterpriseno: e.EnterpriseNo || e.EnterPriseNo,
                    productid: e.ProductId,
                    orderno: e.OrderNo,
                    businessType: e.businessType,
                    targetPeople: e.TargetPeople,
                    dealerlevel: e.dealerlevel
                };
                return o.timestamp = (new Date).getTime(),
                    o.sign = Object(a.sign)(s.default.sign.key, o),
                    $.ajax({
                        url: s.default.apiUrl.getPortalAppId,
                        data: o,
                        type: "POST",
                        async: !1,
                        dataType: "json",
                        success: function(e) {
                            (t = e).flag && t.data.PortalType
                        },
                        error: function() {}
                    }),
                    t
            }
        }
    },
    CwSZ: function(e, t, o) {
        "use strict";
        var s = o("p8xL")
            , n = o("XgCd")
            , a = {
            brackets: function(e) {
                return e + "[]"
            },
            indices: function(e, t) {
                return e + "[" + t + "]"
            },
            repeat: function(e) {
                return e
            }
        }
            , r = Array.isArray
            , i = Array.prototype.push
            , u = function(e, t) {
            i.apply(e, r(t) ? t : [t])
        }
            , l = Date.prototype.toISOString
            , p = {
            delimiter: "&",
            encode: !0,
            encoder: s.encode,
            encodeValuesOnly: !1,
            serializeDate: function(e) {
                return l.call(e)
            },
            skipNulls: !1,
            strictNullHandling: !1
        }
            , c = function e(t, o, n, a, i, l, c, d, g, f, h, m) {
            var y = t;
            if ("function" == typeof c ? y = c(o, y) : y instanceof Date && (y = f(y)),
            null === y) {
                if (a)
                    return l && !m ? l(o, p.encoder) : o;
                y = ""
            }
            if ("string" == typeof y || "number" == typeof y || "boolean" == typeof y || s.isBuffer(y))
                return l ? [h(m ? o : l(o, p.encoder)) + "=" + h(l(y, p.encoder))] : [h(o) + "=" + h(String(y))];
            var v, x = [];
            if (void 0 === y)
                return x;
            if (r(c))
                v = c;
            else {
                var b = Object.keys(y);
                v = d ? b.sort(d) : b
            }
            for (var T = 0; T < v.length; ++T) {
                var w = v[T];
                i && null === y[w] || (r(y) ? u(x, e(y[w], n(o, w), n, a, i, l, c, d, g, f, h, m)) : u(x, e(y[w], o + (g ? "." + w : "[" + w + "]"), n, a, i, l, c, d, g, f, h, m)))
            }
            return x
        };
        e.exports = function(e, t) {
            var o = e
                , i = t ? s.assign({}, t) : {};
            if (null !== i.encoder && void 0 !== i.encoder && "function" != typeof i.encoder)
                throw new TypeError("Encoder has to be a function.");
            var l = void 0 === i.delimiter ? p.delimiter : i.delimiter
                , d = "boolean" == typeof i.strictNullHandling ? i.strictNullHandling : p.strictNullHandling
                , g = "boolean" == typeof i.skipNulls ? i.skipNulls : p.skipNulls
                , f = "boolean" == typeof i.encode ? i.encode : p.encode
                , h = "function" == typeof i.encoder ? i.encoder : p.encoder
                , m = "function" == typeof i.sort ? i.sort : null
                , y = void 0 !== i.allowDots && i.allowDots
                , v = "function" == typeof i.serializeDate ? i.serializeDate : p.serializeDate
                , x = "boolean" == typeof i.encodeValuesOnly ? i.encodeValuesOnly : p.encodeValuesOnly;
            if (void 0 === i.format)
                i.format = n.default;
            else if (!Object.prototype.hasOwnProperty.call(n.formatters, i.format))
                throw new TypeError("Unknown format option provided.");
            var b, T, w = n.formatters[i.format];
            "function" == typeof i.filter ? o = (T = i.filter)("", o) : r(i.filter) && (b = T = i.filter);
            var S, C = [];
            if ("object" != typeof o || null === o)
                return "";
            S = i.arrayFormat in a ? i.arrayFormat : "indices"in i ? i.indices ? "indices" : "repeat" : "indices";
            var P = a[S];
            b || (b = Object.keys(o)),
            m && b.sort(m);
            for (var I = 0; I < b.length; ++I) {
                var _ = b[I];
                g && null === o[_] || u(C, c(o[_], _, P, d, g, f ? h : null, T, m, y, v, w, x))
            }
            var U = C.join(l)
                , k = !0 === i.addQueryPrefix ? "?" : "";
            return U.length > 0 ? k + U : ""
        }
    },
    DDCP: function(e, t, o) {
        "use strict";
        var s = o("p8xL")
            , n = Object.prototype.hasOwnProperty
            , a = {
            allowDots: !1,
            allowPrototypes: !1,
            arrayLimit: 20,
            decoder: s.decode,
            delimiter: "&",
            depth: 5,
            parameterLimit: 1e3,
            plainObjects: !1,
            strictNullHandling: !1
        }
            , r = function(e, t, o) {
            if (e) {
                var s = o.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e
                    , a = /(\[[^[\]]*])/g
                    , r = /(\[[^[\]]*])/.exec(s)
                    , i = r ? s.slice(0, r.index) : s
                    , u = [];
                if (i) {
                    if (!o.plainObjects && n.call(Object.prototype, i) && !o.allowPrototypes)
                        return;
                    u.push(i)
                }
                for (var l = 0; null !== (r = a.exec(s)) && l < o.depth; ) {
                    if (l += 1,
                    !o.plainObjects && n.call(Object.prototype, r[1].slice(1, -1)) && !o.allowPrototypes)
                        return;
                    u.push(r[1])
                }
                return r && u.push("[" + s.slice(r.index) + "]"),
                    function(e, t, o) {
                        for (var s = t, n = e.length - 1; n >= 0; --n) {
                            var a, r = e[n];
                            if ("[]" === r && o.parseArrays)
                                a = [].concat(s);
                            else {
                                a = o.plainObjects ? Object.create(null) : {};
                                var i = "[" === r.charAt(0) && "]" === r.charAt(r.length - 1) ? r.slice(1, -1) : r
                                    , u = parseInt(i, 10);
                                o.parseArrays || "" !== i ? !isNaN(u) && r !== i && String(u) === i && u >= 0 && o.parseArrays && u <= o.arrayLimit ? (a = [])[u] = s : "__proto__" !== i && (a[i] = s) : a = {
                                    0: s
                                }
                            }
                            s = a
                        }
                        return s
                    }(u, t, o)
            }
        };
        e.exports = function(e, t) {
            var o = t ? s.assign({}, t) : {};
            if (null !== o.decoder && void 0 !== o.decoder && "function" != typeof o.decoder)
                throw new TypeError("Decoder has to be a function.");
            if (o.ignoreQueryPrefix = !0 === o.ignoreQueryPrefix,
                o.delimiter = "string" == typeof o.delimiter || s.isRegExp(o.delimiter) ? o.delimiter : a.delimiter,
                o.depth = "number" == typeof o.depth ? o.depth : a.depth,
                o.arrayLimit = "number" == typeof o.arrayLimit ? o.arrayLimit : a.arrayLimit,
                o.parseArrays = !1 !== o.parseArrays,
                o.decoder = "function" == typeof o.decoder ? o.decoder : a.decoder,
                o.allowDots = "boolean" == typeof o.allowDots ? o.allowDots : a.allowDots,
                o.plainObjects = "boolean" == typeof o.plainObjects ? o.plainObjects : a.plainObjects,
                o.allowPrototypes = "boolean" == typeof o.allowPrototypes ? o.allowPrototypes : a.allowPrototypes,
                o.parameterLimit = "number" == typeof o.parameterLimit ? o.parameterLimit : a.parameterLimit,
                o.strictNullHandling = "boolean" == typeof o.strictNullHandling ? o.strictNullHandling : a.strictNullHandling,
            "" === e || null === e || void 0 === e)
                return o.plainObjects ? Object.create(null) : {};
            for (var i = "string" == typeof e ? function(e, t) {
                for (var o = {}, s = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, r = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, i = s.split(t.delimiter, r), u = 0; u < i.length; ++u) {
                    var l, p, c = i[u], d = c.indexOf("]="), g = -1 === d ? c.indexOf("=") : d + 1;
                    -1 === g ? (l = t.decoder(c, a.decoder),
                        p = t.strictNullHandling ? null : "") : (l = t.decoder(c.slice(0, g), a.decoder),
                        p = t.decoder(c.slice(g + 1), a.decoder)),
                        n.call(o, l) ? o[l] = [].concat(o[l]).concat(p) : o[l] = p
                }
                return o
            }(e, o) : e, u = o.plainObjects ? Object.create(null) : {}, l = Object.keys(i), p = 0; p < l.length; ++p) {
                var c = l[p]
                    , d = r(c, i[c], o);
                u = s.merge(u, d, o)
            }
            return s.compact(u)
        }
    },
    Gu7T: function(e, t, o) {
        "use strict";
        t.__esModule = !0;
        var s, n = o("c/Tr"), a = (s = n) && s.__esModule ? s : {
            default: s
        };
        t.default = function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, o = Array(e.length); t < e.length; t++)
                    o[t] = e[t];
                return o
            }
            return (0,
                a.default)(e)
        }
    },
    XgCd: function(e, t, o) {
        "use strict";
        var s = String.prototype.replace
            , n = /%20/g;
        e.exports = {
            default: "RFC3986",
            formatters: {
                RFC1738: function(e) {
                    return s.call(e, n, "+")
                },
                RFC3986: function(e) {
                    return String(e)
                }
            },
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        }
    },
    ZjuW: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = o("ENRU")
            , n = (o("Ya8g"),
            {
                name: "loading",
                data: function() {
                    return {
                        loadInfo: {
                            TipTxt: {
                                TxtInfo: "",
                                FontSize: 16,
                                YAxis: 180,
                                Color: ""
                            },
                            Logo: {
                                Url: "",
                                YAxis: 70,
                                ShowLogo: !1
                            },
                            Background: {
                                Url: "",
                                ShowBg: !1
                            },
                            Copyright: {
                                TxtInfo: "",
                                Color: ""
                            }
                        },
                        loadInfoDef: {
                            TipTxt: {
                                TxtInfo: "",
                                FontSize: 16,
                                YAxis: 180,
                                Color: ""
                            },
                            Logo: {
                                Url: "",
                                YAxis: 70,
                                ShowLogo: !1
                            },
                            Background: {
                                Url: "",
                                ShowBg: !1
                            },
                            Copyright: {
                                TxtInfo: "",
                                Color: ""
                            }
                        }
                    }
                },
                created: function() {
                    "iframe" !== this.sup8.urlparams.enter && (console.log("enter:" + this.sup8.urlparams.enter),
                        this.getLoadingConfig())
                },
                mounted: function() {
                    var e = this;
                    window.addEventListener("message", function(t) {
                        console.log(t.data),
                        "update" == t.data.type && (e.loadInfo = t.data.data,
                            e.loadInfo.Background.ShowBg ? $("#loadingBox").css("background-image", "url(" + e.loadInfo.Background.Url + ")") : $("#loadingBox").css("background-image", ""))
                    }, !1)
                },
                methods: {
                    getLoadingConfig: function() {
                        var e = this;
                        s.default.getLoadingConfig(this.sup8.urlparams.eno || this.sup8.context.eno, this.sup8.urlparams.isPreview, function(t) {
                            console.log(t),
                            t.flag && (e.loadInfo = t.data,
                                e.loadInfo.Background.ShowBg ? $("#loadingBox").css("background-image", "url(" + e.loadInfo.Background.Url + ")") : $("#loadingBox").css("background-image", ""))
                        }, function(t) {
                            e.loadInfo = e.loadInfoDef
                        })
                    }
                }
            })
            , a = {
            render: function() {
                var e = this
                    , t = e.$createElement
                    , o = e._self._c || t;
                return o("div", {
                    staticClass: "loading",
                    attrs: {
                        id: "loadingBox"
                    }
                }, [o("div", {
                    staticClass: "img-box",
                    style: {
                        top: e.loadInfo.Logo.YAxis + "px"
                    }
                }, [o("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.loadInfo.Logo.ShowLogo,
                        expression: "loadInfo.Logo.ShowLogo"
                    }],
                    staticClass: "logo-img",
                    attrs: {
                        src: e.loadInfo.Logo.Url,
                        alt: ""
                    }
                })]), e._v(" "), o("p", {
                    staticClass: "logo-txt",
                    style: {
                        top: e.loadInfo.TipTxt.YAxis + "px",
                        "font-Size": e.loadInfo.TipTxt.FontSize + "px",
                        color: e.loadInfo.TipTxt.Color
                    }
                }, [e._v(e._s(e.loadInfo.TipTxt.TxtInfo))]), e._v(" "), o("p", {
                    staticClass: "foot-txt",
                    style: {
                        color: e.loadInfo.Copyright.Color
                    }
                }, [e._v(e._s(e.loadInfo.Copyright.TxtInfo))])])
            },
            staticRenderFns: []
        };
        var r = o("VU/8")(n, a, !1, function(e) {
            o("00tY")
        }, "data-v-0cc22dbd", null);
        t.default = r.exports
    },
    aCc6: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = new (o("7+uW").default)({
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
        t.default = s
    },
    "c/Tr": function(e, t, o) {
        e.exports = {
            default: o("fRJi"),
            __esModule: !0
        }
    },
    "d8/S": function(e, t) {},
    fRJi: function(e, t, o) {
        o("tz60"),
            o("9uBv"),
            e.exports = o("kQRy").Array.from
    },
    mw3O: function(e, t, o) {
        "use strict";
        var s = o("CwSZ")
            , n = o("DDCP")
            , a = o("XgCd");
        e.exports = {
            formats: a,
            parse: n,
            stringify: s
        }
    },
    p8xL: function(e, t, o) {
        "use strict";
        var s = Object.prototype.hasOwnProperty
            , n = function() {
            for (var e = [], t = 0; t < 256; ++t)
                e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e
        }()
            , a = function(e, t) {
            for (var o = t && t.plainObjects ? Object.create(null) : {}, s = 0; s < e.length; ++s)
                void 0 !== e[s] && (o[s] = e[s]);
            return o
        };
        e.exports = {
            arrayToObject: a,
            assign: function(e, t) {
                return Object.keys(t).reduce(function(e, o) {
                    return e[o] = t[o],
                        e
                }, e)
            },
            compact: function(e) {
                for (var t = [{
                    obj: {
                        o: e
                    },
                    prop: "o"
                }], o = [], s = 0; s < t.length; ++s)
                    for (var n = t[s], a = n.obj[n.prop], r = Object.keys(a), i = 0; i < r.length; ++i) {
                        var u = r[i]
                            , l = a[u];
                        "object" == typeof l && null !== l && -1 === o.indexOf(l) && (t.push({
                            obj: a,
                            prop: u
                        }),
                            o.push(l))
                    }
                return function(e) {
                    for (var t; e.length; ) {
                        var o = e.pop();
                        if (t = o.obj[o.prop],
                            Array.isArray(t)) {
                            for (var s = [], n = 0; n < t.length; ++n)
                                void 0 !== t[n] && s.push(t[n]);
                            o.obj[o.prop] = s
                        }
                    }
                    return t
                }(t)
            },
            decode: function(e) {
                try {
                    return decodeURIComponent(e.replace(/\+/g, " "))
                } catch (t) {
                    return e
                }
            },
            encode: function(e) {
                if (0 === e.length)
                    return e;
                for (var t = "string" == typeof e ? e : String(e), o = "", s = 0; s < t.length; ++s) {
                    var a = t.charCodeAt(s);
                    45 === a || 46 === a || 95 === a || 126 === a || a >= 48 && a <= 57 || a >= 65 && a <= 90 || a >= 97 && a <= 122 ? o += t.charAt(s) : a < 128 ? o += n[a] : a < 2048 ? o += n[192 | a >> 6] + n[128 | 63 & a] : a < 55296 || a >= 57344 ? o += n[224 | a >> 12] + n[128 | a >> 6 & 63] + n[128 | 63 & a] : (s += 1,
                        a = 65536 + ((1023 & a) << 10 | 1023 & t.charCodeAt(s)),
                        o += n[240 | a >> 18] + n[128 | a >> 12 & 63] + n[128 | a >> 6 & 63] + n[128 | 63 & a])
                }
                return o
            },
            isBuffer: function(e) {
                return null !== e && void 0 !== e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
            },
            isRegExp: function(e) {
                return "[object RegExp]" === Object.prototype.toString.call(e)
            },
            merge: function e(t, o, n) {
                if (!o)
                    return t;
                if ("object" != typeof o) {
                    if (Array.isArray(t))
                        t.push(o);
                    else {
                        if (!t || "object" != typeof t)
                            return [t, o];
                        (n && (n.plainObjects || n.allowPrototypes) || !s.call(Object.prototype, o)) && (t[o] = !0)
                    }
                    return t
                }
                if (!t || "object" != typeof t)
                    return [t].concat(o);
                var r = t;
                return Array.isArray(t) && !Array.isArray(o) && (r = a(t, n)),
                    Array.isArray(t) && Array.isArray(o) ? (o.forEach(function(o, a) {
                        if (s.call(t, a)) {
                            var r = t[a];
                            r && "object" == typeof r && o && "object" == typeof o ? t[a] = e(r, o, n) : t.push(o)
                        } else
                            t[a] = o
                    }),
                        t) : Object.keys(o).reduce(function(t, a) {
                        var r = o[a];
                        return s.call(t, a) ? t[a] = e(t[a], r, n) : t[a] = r,
                            t
                    }, r)
            }
        }
    },
    spx8: function(e, t) {}
});
