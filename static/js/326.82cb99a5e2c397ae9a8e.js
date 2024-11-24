webpackJsonp([326], {
    C4Gn: function(e, t, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = {
            name: "CompSwiper",
            props: ["comp", "cfg", "selectedPage"],
            data: function() {
                return {
                    imgs: [{
                        url: "http://image.supercarrier8.com/product/earphone/1.png"
                    }]
                }
            },
            methods: {
                onClick: function(e) {
                    console.log(e);
                    switch (this.sup8.env) {
                        case this.sup8._def.env.design:
                            break;
                        case this.sup8._def.env.run:
                            switch (e.urlType) {
                                case "1":
                                    e.url && (location.href = e.url);
                                    break;
                                case "2":
                                    e.url && this.$parent.changeSelectedPage(e.url)
                            }
                    }
                }
            },
            watch: {},
            created: function() {
                switch (this.mergeCompProps(this.comp),
                    this.comp.props.items.val = this.comp.props.items.val || [],
                    this.style = {},
                    this.sup8.env) {
                    case this.sup8._def.env.design:
                    case this.sup8._def.env.preview:
                    case this.sup8._def.env.run:
                }
            },
            mounted: function() {
                setTimeout(function() {
                    var e = $(".imgheight").height() > 0 ? $(".imgheight").height() : 160;
                    $(".warp").height(e + "px")
                }, 1100)
            }
        }
            , r = {
            render: function() {
                var e = this
                    , t = e.$createElement
                    , s = e._self._c || t;
                return s("div", {
                    staticClass: "swipe-box",
                    style: {
                        padding: e.comp.props.padding.val
                    }
                }, [s("mt-swipe", {
                    staticClass: "warp",
                    attrs: {
                        auto: 4e3
                    }
                }, e._l(e.comp.props.items.val, function(t, i) {
                    return s("mt-swipe-item", {
                        key: i
                    }, [s("img", {
                        staticClass: "imgheight",
                        style: {
                            "border-radius": e.comp.props.radius.val
                        },
                        attrs: {
                            src: t.imgUrl
                        },
                        on: {
                            click: function(s) {
                                return e.onClick(t)
                            }
                        }
                    })])
                }), 1)], 1)
            },
            staticRenderFns: []
        };
        var n = s("VU/8")(i, r, !1, function(e) {
            s("xMG2")
        }, "data-v-3ede0275", null);
        t.default = n.exports
    },
    xMG2: function(e, t) {}
});
