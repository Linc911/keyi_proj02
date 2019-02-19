import $ from "./index"
export default (function () {
    var domain = "http://localhost:8001";
    return {
        //用户模块
        user_login(params){
            var def = $.Deferred();
            $.get( domain + "/user/login",params).done( res => {
                def.resolve(res)
            }).fail(err => {})
            return def.promise();
        },
        //header        
        fetchUserInfo(){
            var def = $.Deferred();
            setTimeout(() => {
                def.resolve({
                    data:{ nickname: '', sex: 0 }
                })
            }, 0);
            return def.promise();
        },
        //aside
        getMenu(){
            var def = $.Deferred();
            setTimeout(() => {
                def.resolve({
                    "msg": "success",
                    "data": [{
                        "id": 24,
                        "parentId": 0,
                        "name": "平台用户查询",
                        "css": "fa-users",
                        "url": "",
                        "sort": 1,
                        "createTime": 1542613355000,
                        "updateTime": 1546587828000,
                        "child": [{
                            "id": 25,
                            "parentId": 24,
                            "name": "用户列表查询",
                            "css": "fa-search",
                            "url": "/users/list",
                            "sort": 1,
                            "createTime": 1542613400000,
                            "updateTime": 1547633891000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 30,
                            "parentId": 24,
                            "name": "用户日志列表",
                            "css": "fa-file-text",
                            "url": "/users/logs",
                            "sort": 6,
                            "createTime": 1542613950000,
                            "updateTime": 1547633953000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 21,
                            "parentId": 24,
                            "name": "用户分组设置",
                            "css": "fa-sitemap",
                            "url": "/system/group",
                            "sort": 8,
                            "createTime": 1542613104000,
                            "updateTime": 1546500328000,
                            "child": null,
                            "self": 0
                        }],
                        "self": 0
                    }, {
                        "id": 43,
                        "parentId": 0,
                        "name": "平台财务管理",
                        "css": "fa-bandcamp",
                        "url": "",
                        "sort": 2,
                        "createTime": 1542614496000,
                        "updateTime": 1546587824000,
                        "child": [{
                            "id": 47,
                            "parentId": 43,
                            "name": "提款 - 客户提款审批",
                            "css": "fa-sign-out",
                            "url": "/finance/withdraw/apply",
                            "sort": 0,
                            "createTime": 1542614652000,
                            "updateTime": 1547634689000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 45,
                            "parentId": 43,
                            "name": "存款 - 客户汇款管理",
                            "css": "fa-sign-in",
                            "url": "/finance/deposit/form",
                            "sort": 1,
                            "createTime": 1542614615000,
                            "updateTime": 1547634677000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 46,
                            "parentId": 43,
                            "name": "存款 - 客户在线存款",
                            "css": "fa-sign-in",
                            "url": "/finance/deposit/online",
                            "sort": 2,
                            "createTime": 1542614632000,
                            "updateTime": 1547634651000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 44,
                            "parentId": 43,
                            "name": "人工 - 给客户加减款",
                            "css": "fa-user-plus",
                            "url": "/finance/balance/manipulation",
                            "sort": 3,
                            "createTime": 1542614597000,
                            "updateTime": 1547634424000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 50,
                            "parentId": 43,
                            "name": "存/取款记录查询",
                            "css": "fa-search",
                            "url": "/finance/depositwithdraw/list",
                            "sort": 4,
                            "createTime": 1542614766000,
                            "updateTime": 1547634389000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 48,
                            "parentId": 43,
                            "name": "额度转换记录查询",
                            "css": "fa-retweet",
                            "url": "/finance/limitation/transfer",
                            "sort": 5,
                            "createTime": 1542614674000,
                            "updateTime": 1547634590000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 49,
                            "parentId": 43,
                            "name": "会员资金管理",
                            "css": "fa-line-chart",
                            "url": "/finance/user/asset",
                            "sort": 6,
                            "createTime": 1542614725000,
                            "updateTime": 1547634243000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 51,
                            "parentId": 43,
                            "name": "会员财务报表",
                            "css": "fa-area-chart",
                            "url": "/finance/balance/sheet",
                            "sort": 8,
                            "createTime": 1542614797000,
                            "updateTime": 1547634232000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 52,
                            "parentId": 43,
                            "name": "平台收支汇总",
                            "css": "fa-pie-chart",
                            "url": "/finance/statistics",
                            "sort": 9,
                            "createTime": 1542614821000,
                            "updateTime": 1547634213000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 53,
                            "parentId": 43,
                            "name": "加减款类型配置",
                            "css": "fa-gears",
                            "url": "/finance/setting",
                            "sort": 10,
                            "createTime": 1542614837000,
                            "updateTime": 1547634181000,
                            "child": null,
                            "self": 0
                        }],
                        "self": 0
                    }, {
                        "id": 32,
                        "parentId": 0,
                        "name": "自营彩票管理",
                        "css": "fa-trophy",
                        "url": "",
                        "sort": 3,
                        "createTime": 1542614042000,
                        "updateTime": 1546499999000,
                        "child": [{
                            "id": 34,
                            "parentId": 32,
                            "name": "彩票开奖记录",
                            "css": "fa-braille",
                            "url": "/lottery/results",
                            "sort": 1,
                            "createTime": 1542614208000,
                            "updateTime": 1547635553000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 36,
                            "parentId": 32,
                            "name": "客户注单查询",
                            "css": "fa-search",
                            "url": "/lottery/bets",
                            "sort": 2,
                            "createTime": 1542614277000,
                            "updateTime": 1547635444000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 35,
                            "parentId": 32,
                            "name": "未结彩票撤单",
                            "css": "fa-reply-all",
                            "url": "/lottery/bill/cancel",
                            "sort": 5,
                            "createTime": 1542614241000,
                            "updateTime": 1547635182000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 38,
                            "parentId": 32,
                            "name": "彩票赔率设置",
                            "css": "fa-gear",
                            "url": "/lottery/odds",
                            "sort": 6,
                            "createTime": 1542614325000,
                            "updateTime": 1543194935000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 33,
                            "parentId": 32,
                            "name": "彩票开盘配置",
                            "css": "fa-wrench",
                            "url": "/lottery/open",
                            "sort": 7,
                            "createTime": 1542614107000,
                            "updateTime": 1547635508000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 118,
                            "parentId": 32,
                            "name": "彩票游戏规则",
                            "css": "fa-gears",
                            "url": "/lottery/rules",
                            "sort": 7,
                            "createTime": 1545981314000,
                            "updateTime": 1547635486000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 40,
                            "parentId": 32,
                            "name": "彩票会员报表",
                            "css": "fa-line-chart",
                            "url": "/lottery/statistics/users",
                            "sort": 8,
                            "createTime": 1542614430000,
                            "updateTime": 1547635340000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 42,
                            "parentId": 32,
                            "name": "平台盈亏报表",
                            "css": "fa-bar-chart",
                            "url": "/lottery/statistics",
                            "sort": 8,
                            "createTime": 1542614475000,
                            "updateTime": 1548062692000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 41,
                            "parentId": 32,
                            "name": "彩票注单报表",
                            "css": "fa-area-chart",
                            "url": "/lottery/statistics/bets",
                            "sort": 10,
                            "createTime": 1542614456000,
                            "updateTime": 1547635075000,
                            "child": null,
                            "self": 0
                        }],
                        "self": 0
                    }, {
                        "id": 119,
                        "parentId": 0,
                        "name": "六合彩管理查询",
                        "css": "fa-futbol-o",
                        "url": "",
                        "sort": 4,
                        "createTime": 1547517008000,
                        "updateTime": 1548065004000,
                        "child": [{
                            "id": 120,
                            "parentId": 119,
                            "name": "六合彩开盘开奖",
                            "css": "fa-braille",
                            "url": "/six/results",
                            "sort": 1,
                            "createTime": 1547517171000,
                            "updateTime": 1547634996000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 121,
                            "parentId": 119,
                            "name": "六合彩注单查询",
                            "css": "fa-search",
                            "url": "/six/bets",
                            "sort": 2,
                            "createTime": 1547517205000,
                            "updateTime": 1547634769000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 122,
                            "parentId": 119,
                            "name": "六合彩赔率设置",
                            "css": "fa-wrench",
                            "url": "/six/odds",
                            "sort": 3,
                            "createTime": 1547517222000,
                            "updateTime": 1547634861000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 123,
                            "parentId": 119,
                            "name": "六合彩基础设置",
                            "css": "fa-gears",
                            "url": "/six/setting",
                            "sort": 4,
                            "createTime": 1547517284000,
                            "updateTime": 1547634785000,
                            "child": null,
                            "self": 0
                        }],
                        "self": 0
                    }, {
                        "id": 54,
                        "parentId": 0,
                        "name": "收款出款配置",
                        "css": "fa-exchange",
                        "url": "",
                        "sort": 5,
                        "createTime": 1542614910000,
                        "updateTime": 1546500179000,
                        "child": [{
                            "id": 59,
                            "parentId": 54,
                            "name": "配置汇款账户",
                            "css": "fa-gear",
                            "url": "/transaction/remittance/user",
                            "sort": 1,
                            "createTime": 1542615066000,
                            "updateTime": 1542629090000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 55,
                            "parentId": 54,
                            "name": "支付类型配置",
                            "css": "fa-gear",
                            "url": "/transaction/payment/type",
                            "sort": 2,
                            "createTime": 1542614986000,
                            "updateTime": 1542629072000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 56,
                            "parentId": 54,
                            "name": "支付接口配置",
                            "css": "fa-gear",
                            "url": "/transaction/payment/port",
                            "sort": 2,
                            "createTime": 1542615004000,
                            "updateTime": 1542615004000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 57,
                            "parentId": 54,
                            "name": "支付路线配置",
                            "css": "fa-gear",
                            "url": "/transaction/payment/line",
                            "sort": 3,
                            "createTime": 1542615021000,
                            "updateTime": 1542615021000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 93,
                            "parentId": 54,
                            "name": "出款商户类型",
                            "css": "fa-gear",
                            "url": "/transaction/withdraw/type",
                            "sort": 4,
                            "createTime": 1545029090000,
                            "updateTime": 1545029090000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 58,
                            "parentId": 54,
                            "name": "出款商户配置",
                            "css": "fa-gear",
                            "url": "/transaction/withdraw/account",
                            "sort": 5,
                            "createTime": 1542615045000,
                            "updateTime": 1544603317000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 60,
                            "parentId": 54,
                            "name": "汇款快捷设置",
                            "css": "fa-gear",
                            "url": "/transaction/remittance/shortcut",
                            "sort": 6,
                            "createTime": 1542615087000,
                            "updateTime": 1542615087000,
                            "child": null,
                            "self": 0
                        }],
                        "self": 0
                    }, {
                        "id": 61,
                        "parentId": 0,
                        "name": "返水管理",
                        "css": "fa-reply-all",
                        "url": "",
                        "sort": 6,
                        "createTime": 1542615117000,
                        "updateTime": 1545903759000,
                        "child": [{
                            "id": 62,
                            "parentId": 61,
                            "name": "设置返水计划",
                            "css": "fa-gear",
                            "url": "/rebate/plan",
                            "sort": 1,
                            "createTime": 1542615154000,
                            "updateTime": 1548666953000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 63,
                            "parentId": 61,
                            "name": "查看返水记录",
                            "css": "fa-gear",
                            "url": "/rebate/record",
                            "sort": 2,
                            "createTime": 1542615169000,
                            "updateTime": 1548666962000,
                            "child": null,
                            "self": 0
                        }],
                        "self": 0
                    }, {
                        "id": 64,
                        "parentId": 0,
                        "name": "代理管理",
                        "css": "fa-handshake-o",
                        "url": "",
                        "sort": 7,
                        "createTime": 1542785368000,
                        "updateTime": 1545903666000,
                        "child": [{
                            "id": 73,
                            "parentId": 64,
                            "name": "创建代理会员",
                            "css": "fa-plus",
                            "url": "/agent/create",
                            "sort": 0,
                            "createTime": 1543888287000,
                            "updateTime": 1547719254000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 72,
                            "parentId": 64,
                            "name": "代理会员列表",
                            "css": "fa-list-ol",
                            "url": "/agent/account/list",
                            "sort": 1,
                            "createTime": 1543888250000,
                            "updateTime": 1547719315000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 74,
                            "parentId": 64,
                            "name": "邀请号码管理",
                            "css": "fa-gear",
                            "url": "/agent/invitationcode",
                            "sort": 3,
                            "createTime": 1543888342000,
                            "updateTime": 1543888342000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 65,
                            "parentId": 64,
                            "name": "代理线条业绩",
                            "css": "fa-bar-chart",
                            "url": "/agent/performance/linear",
                            "sort": 5,
                            "createTime": 1542786133000,
                            "updateTime": 1547719205000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 94,
                            "parentId": 64,
                            "name": "游戏分润基数",
                            "css": "fa-gamepad",
                            "url": "/agent/interest/game",
                            "sort": 6,
                            "createTime": 1545275739000,
                            "updateTime": 1547719226000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 95,
                            "parentId": 64,
                            "name": "会员分润设置",
                            "css": "fa-wrench",
                            "url": "/agent/interest/setting",
                            "sort": 7,
                            "createTime": 1545377672000,
                            "updateTime": 1547719330000,
                            "child": null,
                            "self": 0
                        }],
                        "self": 0
                    }, {
                        "id": 80,
                        "parentId": 0,
                        "name": "优惠活动",
                        "css": "fa-modx",
                        "url": null,
                        "sort": 8,
                        "createTime": 1544075421000,
                        "updateTime": 1546587853000,
                        "child": [{
                            "id": 81,
                            "parentId": 80,
                            "name": "图片管理",
                            "css": "fa-image",
                            "url": "/activity/list",
                            "sort": 1,
                            "createTime": 1544075444000,
                            "updateTime": 1547719130000,
                            "child": null,
                            "self": 0
                        }],
                        "self": 0
                    }, {
                        "id": 82,
                        "parentId": 0,
                        "name": "网站管理",
                        "css": "fa-internet-explorer",
                        "url": null,
                        "sort": 9,
                        "createTime": 1544174751000,
                        "updateTime": 1547718834000,
                        "child": [{
                            "id": 83,
                            "parentId": 82,
                            "name": "备用网站管理",
                            "css": "fa-firefox",
                            "url": "/website/standby",
                            "sort": 1,
                            "createTime": 1544174792000,
                            "updateTime": 1547718964000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 84,
                            "parentId": 82,
                            "name": "会员注册配置",
                            "css": "fa-wrench",
                            "url": "/website/registry",
                            "sort": 2,
                            "createTime": 1544174820000,
                            "updateTime": 1547719035000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 85,
                            "parentId": 82,
                            "name": "手机首页图片",
                            "css": "fa-mobile",
                            "url": "/website/image",
                            "sort": 3,
                            "createTime": 1544174883000,
                            "updateTime": 1547719003000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 86,
                            "parentId": 82,
                            "name": "网站菜单管理",
                            "css": "fa-window-restore",
                            "url": "/website/menu",
                            "sort": 4,
                            "createTime": 1544254379000,
                            "updateTime": 1547719102000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 87,
                            "parentId": 82,
                            "name": "问题反馈管理",
                            "css": "fa-quora",
                            "url": "/website/feedback",
                            "sort": 5,
                            "createTime": 1544254417000,
                            "updateTime": 1547718914000,
                            "child": null,
                            "self": 0
                        }],
                        "self": 0
                    }, {
                        "id": 88,
                        "parentId": 0,
                        "name": "公告管理",
                        "css": "fa-bell-o",
                        "url": null,
                        "sort": 10,
                        "createTime": 1544409106000,
                        "updateTime": 1547718843000,
                        "child": [{
                            "id": 89,
                            "parentId": 88,
                            "name": "公告",
                            "css": "fa-flag-o",
                            "url": "/notice/list",
                            "sort": 1,
                            "createTime": 1544409158000,
                            "updateTime": 1547718650000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 90,
                            "parentId": 88,
                            "name": "系统公告",
                            "css": "fa-flag-checkered",
                            "url": "/notice/system/notice",
                            "sort": 2,
                            "createTime": 1544409224000,
                            "updateTime": 1547718690000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 91,
                            "parentId": 88,
                            "name": "系统消息",
                            "css": "fa-commenting",
                            "url": "/notice/system/message",
                            "sort": 3,
                            "createTime": 1544409252000,
                            "updateTime": 1547718394000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 92,
                            "parentId": 88,
                            "name": "公告类型配置",
                            "css": "fa-gears",
                            "url": "/notice/setting/type",
                            "sort": 9,
                            "createTime": 1544508997000,
                            "updateTime": 1547718401000,
                            "child": null,
                            "self": 0
                        }],
                        "self": 0
                    }, {
                        "id": 1,
                        "parentId": 0,
                        "name": "后台系统设置",
                        "css": "fa-gears",
                        "url": "",
                        "sort": 11,
                        "createTime": 1516674030000,
                        "updateTime": 1546587142000,
                        "child": [{
                            "id": 2,
                            "parentId": 1,
                            "name": "后台菜单配置",
                            "css": "fa-wrench",
                            "url": "/system/menu",
                            "sort": 1,
                            "createTime": 1516687480000,
                            "updateTime": 1547635643000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 3,
                            "parentId": 1,
                            "name": "设置角色权限",
                            "css": "fa-user-secret",
                            "url": "/system/roles",
                            "sort": 2,
                            "createTime": 1516687480000,
                            "updateTime": 1546496499000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 22,
                            "parentId": 1,
                            "name": "后台用户列表",
                            "css": "fa-user",
                            "url": "/system/users",
                            "sort": 3,
                            "createTime": 1542613187000,
                            "updateTime": 1546496526000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 4,
                            "parentId": 1,
                            "name": "权限",
                            "css": "fa-shield",
                            "url": "/system/permissions",
                            "sort": 4,
                            "createTime": 1516687480000,
                            "updateTime": 1546496532000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 23,
                            "parentId": 1,
                            "name": "彩票",
                            "css": "fa-trophy",
                            "url": "/system/lottery",
                            "sort": 6,
                            "createTime": 1542613233000,
                            "updateTime": 1545904315000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 68,
                            "parentId": 1,
                            "name": "地区",
                            "css": "fa-location-arrow",
                            "url": "/system/area",
                            "sort": 7,
                            "createTime": 1543656840000,
                            "updateTime": 1545904185000,
                            "child": null,
                            "self": 0
                        }, {
                            "id": 67,
                            "parentId": 1,
                            "name": "银行",
                            "css": "fa-cc-visa",
                            "url": "/system/bank",
                            "sort": 8,
                            "createTime": 1543651767000,
                            "updateTime": 1545904034000,
                            "child": null,
                            "self": 0
                        }],
                        "self": 0
                    }],
                    "time": 1550548612807,
                    "status": 200
                })
            }, 0);
            return def.promise();
        },
        getTest(){
            var def = $.Deferred();
            $.get( domain + "/user/list").done( res => {
                def.resolve(res)
            }).fail(err => {})
            return def.promise();
        },
        getSchedulerUrl: domain + "/scheduler/list", //1.查询模型列表
        getScheduler: function () {
            var deferred = $.Deferred();
            $.get(this.getSchedulerUrl, {

            }).done(function (resData) {
                deferred.resolve(resData)
            }).fail(function (err) {

            });
            return deferred.promise();
        },
        addSchedulerUrl: domain + "/scheduler/add", //1.查询模型列表
        addScheduler: function (params) {
            var deferred = $.Deferred();
            $.get(this.addSchedulerUrl, params).done(function (resData) {
                deferred.resolve(resData)
            }).fail(function (err) {

            });
            return deferred.promise();
        },
        updateSchedulerUrl: domain + "/scheduler/update", //1.查询模型列表
        updateScheduler: function (condition,newObj) {
            var deferred = $.Deferred();
            $.get(this.updateSchedulerUrl, {
                condition,newObj
            }).done(function (resData) {
                deferred.resolve(resData)
            }).fail(function (err) {

            });
            return deferred.promise();
        },
        delSchedulerByIdUrl: domain + "/scheduler/removeById", //1.查询模型列表
        delSchedulerById: function (_id) {
            var deferred = $.Deferred();
            $.get(this.delSchedulerByIdUrl, {_id}).done(function (resData) {
                deferred.resolve(resData)
            }).fail(function (err) {

            });
            return deferred.promise();
        },
    }
})()