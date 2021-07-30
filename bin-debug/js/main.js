

var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

var __extends = function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var __assign = Object.assign || function (t) {
for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
}
return t;
};

var __rest = function (s, e) {
var t = {};
for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
    }
return t;
};

var __decorate = function (decorators, target, key, desc) {
var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = function (paramIndex, decorator) {
return function (target, key) { decorator(target, key, paramIndex); }
};

var __metadata = function (metadataKey, metadataValue) {
if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
};

var __awaiter = function (thisArg, _arguments, P, generator) {
function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};

var __generator = function (thisArg, body) {
var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
function verb(n) { return function (v) { return step([n, v]); }; }
function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
            case 0: case 1: t = op; break;
            case 4: _.label++; return { value: op[1], done: false };
            case 5: _.label++; y = op[1]; op = [0]; continue;
            case 7: op = _.ops.pop(); _.trys.pop(); continue;
            default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                if (t[2]) _.ops.pop();
                _.trys.pop(); continue;
        }
        op = body.call(thisArg, _);
    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
}
};

var __exportStar = function(m, exports) {
for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};

var __createBinding = Object.create ? (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
o[k2] = m[k];
});

var __values = function (o) {
var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
if (m) return m.call(o);
if (o && typeof o.length === "number") return {
    next: function () {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
    }
};
throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = function (o, n) {
var m = typeof Symbol === "function" && o[Symbol.iterator];
if (!m) return o;
var i = m.call(o), r, ar = [], e;
try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
}
catch (error) { e = { error: error }; }
finally {
    try {
        if (r && !r.done && (m = i["return"])) m.call(i);
    }
    finally { if (e) throw e.error; }
}
return ar;
};

var __spread = function () {
for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
return ar;
};

var __spreadArrays = function () {
for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
return r;
};

var __await = function (v) {
return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = function (thisArg, _arguments, generator) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var g = generator.apply(thisArg, _arguments || []), i, q = [];
return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
function fulfill(value) { resume("next", value); }
function reject(value) { resume("throw", value); }
function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};

var __asyncDelegator = function (o) {
var i, p;
return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};

var __asyncValues = function (o) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var m = o[Symbol.asyncIterator], i;
return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};

var __makeTemplateObject = function (cooked, raw) {
if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
o["default"] = v;
};

var __importStar = function (mod) {
if (mod && mod.__esModule) return mod;
var result = {};
if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
__setModuleDefault(result, mod);
return result;
};

var __importDefault = function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod };
};

var __classPrivateFieldGet = function (receiver, privateMap) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
}
return privateMap.get(receiver);
};

var __classPrivateFieldSet = function (receiver, privateMap, value) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
}
privateMap.set(receiver, value);
return value;
};

var __reflect = function(p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AssetAdapter.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = /** @class */ (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
window["AssetAdapter"] = AssetAdapter;
__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]); 


/***/ }),

/***/ "./src/LoadingUI.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = /** @class */ (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
window["LoadingUI"] = LoadingUI;
__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]); 


/***/ }),

/***/ "./src/Main.ts":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/AssetAdapter.ts");
__webpack_require__("./src/LoadingUI.ts");
__webpack_require__("./src/Main.ts");
__webpack_require__("./src/Platform.ts");
__webpack_require__("./src/ThemeAdapter.ts");
__webpack_require__("./src/store/index.ts");
__webpack_require__("./src/utils/dispatcher.ts");
__webpack_require__("./src/utils/fnc.ts");
__webpack_require__("./src/views/bg.ts");
__webpack_require__("./src/views/body.ts");
__webpack_require__("./src/views/btn.ts");
__webpack_require__("./src/views/bullet.ts");
__webpack_require__("./src/views/enemy.ts");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fnc = new Fnc();
        _this.dispatcher = new CustomDispatcher();
        _this.store = new Store();
        return _this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        this.startAnimation(result);
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        var sound = RES.getRes("bgm_mp3");
        // sound.play()        
        var bg = new Bg(this.dispatcher);
        this.addChild(bg);
        var btn = new Btn(this.dispatcher, this.store);
        this.addChild(btn);
        var hero = new Body(this.dispatcher, this.store);
        this.addChild(hero);
        var enemy = new Enemy(this.dispatcher, this.store);
        this.addChild(enemy);
        var myPannel = new eui.Panel();
        myPannel.title = "游戏结束";
        myPannel.minWidth = 450;
        myPannel.y = egret.MainContext.instance.stage.stageHeight / 2 - 150;
        myPannel.x = egret.MainContext.instance.stage.stageWidth / 2 - myPannel.width / 2;
        myPannel.closeButton.label = '重新开始';
        // myPannel.anchorOffsetX = myPannel.width/2
        // myPannel.anchorOffsetY = myPannel.height/2
        // myPannel.x = this.stage.stageWidth/2
        // myPannel.y = this.stage.stageHeight/2
        console.log(myPannel.width);
        this.addChild(myPannel);
        /*
        这里不用 egret.startTick 是因为其是60帧的画面 页面会很抖效果不好
       */
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    Main.prototype.startAnimation = function (result) {
        // let parser = new egret.HtmlTextParser();
        // let textflowArr = result.map(text => parser.parse(text));
        // let textfield = this.textfield;
        // let count = -1;
        // let change = () => {
        //     count++;
        //     if (count >= textflowArr.length) {
        //         count = 0;
        //     }
        //     let textFlow = textflowArr[count];
        //     // 切换描述内容
        //     // Switch to described content
        //     textfield.textFlow = textFlow;
        //     let tw = egret.Tween.get(textfield);
        //     tw.to({ "alpha": 1 }, 200);
        //     tw.wait(2000);
        //     tw.to({ "alpha": 0 }, 200);
        //     tw.call(change, this);
        // };
        // change();
    };
    /**
     * 点击按钮
     * Click the button
     */
    Main.prototype.onButtonClick = function (e) {
        var panel = new eui.Panel();
        panel.title = "Title";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
    };
    return Main;
}(eui.UILayer));
window["Main"] = Main;
__reflect(Main.prototype,"Main",[]); 


/***/ }),

/***/ "./src/Platform.ts":
/***/ (function(module, exports) {

var DebugPlatform = /** @class */ (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
window["DebugPlatform"] = DebugPlatform;
__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]); 
if (!window.platform) {
    window.platform = new DebugPlatform();
}


/***/ }),

/***/ "./src/ThemeAdapter.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = /** @class */ (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else if (typeof generateJSON !== 'undefined') {
            if (url.indexOf(".exml") > -1) {
                var dirPath = url.replace(".exml", "_EUI.json");
                if (!generateJSON.paths[url]) {
                    RES.getResByUrl(dirPath, function (data) {
                        window["JSONParseClass"]["setData"](data);
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON.paths[url]);
                        }, _this);
                    }, this, RES.ResourceItem.TYPE_JSON);
                }
                else {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateJSON.paths[url]);
                    }, this);
                }
            }
            else {
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateJSON);
                }, this);
            }
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
window["ThemeAdapter"] = ThemeAdapter;
__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]); 


/***/ }),

/***/ "./src/store/index.ts":
/***/ (function(module, exports) {

var Store = /** @class */ (function () {
    function Store() {
        this.enemyList = [];
        this.that = null; // 存放 创建敌机的 this  因为只有创建敌机的 this 可以调用 removeChild 方法
        this.score = 0;
        this.status = Store.PENDING; //
    }
    Store.prototype.start = function () {
        if (this.status === Store.PENDING || this.status === Store.STOP) {
            this.status = Store.STAR;
        }
    };
    Store.prototype.stop = function () {
        if (this.status === Store.STAR) {
            this.status = Store.STOP;
        }
    };
    Store.prototype.over = function () {
        if (this.status === Store.STAR) {
            this.status = Store.OVER;
        }
    };
    // addEnemy(enemy:egret.Bitmap){
    Store.prototype.addEnemy = function (enemy) {
        this.enemyList.push(enemy);
    };
    // outEnemy(enemy:egret.Bitmap){
    Store.prototype.outEnemy = function (enemy) {
        this.enemyList.splice(this.enemyList.indexOf(enemy), 1);
    };
    Store.prototype.getScore = function () {
        return this.score;
    };
    Store.prototype.addScore = function () {
        this.score++;
    };
    Store.PENDING = 'pending';
    Store.STAR = 'star';
    Store.STOP = 'stop';
    Store.OVER = 'over';
    return Store;
}());
window["Store"] = Store;
__reflect(Store.prototype,"Store",[]); 


/***/ }),

/***/ "./src/utils/dispatcher.ts":
/***/ (function(module, exports) {

var CustomDispatcher = /** @class */ (function (_super) {
    __extends(CustomDispatcher, _super);
    function CustomDispatcher() {
        return _super.call(this) || this;
    }
    CustomDispatcher.prototype.gameOver = function () {
        this.dispatchEventWith(CustomDispatcher.OVER);
    };
    CustomDispatcher.prototype.startGame = function () {
        this.dispatchEventWith(CustomDispatcher.START);
    };
    CustomDispatcher.prototype.gameStop = function () {
        this.dispatchEventWith(CustomDispatcher.STOP);
    };
    CustomDispatcher.prototype.gamecontinue = function () {
        this.dispatchEventWith(CustomDispatcher.CONTINUE);
    };
    CustomDispatcher.prototype.buckleBliid = function () {
        this.dispatchEventWith(CustomDispatcher.BLOOD);
    };
    CustomDispatcher.OVER = "gameover";
    CustomDispatcher.STOP = "gamestop";
    CustomDispatcher.START = "gamestart";
    CustomDispatcher.CONTINUE = "continue";
    CustomDispatcher.BLOOD = "blood"; // 流血
    return CustomDispatcher;
}(egret.EventDispatcher));
window["CustomDispatcher"] = CustomDispatcher;
__reflect(CustomDispatcher.prototype,"CustomDispatcher",[]); 


/***/ }),

/***/ "./src/utils/fnc.ts":
/***/ (function(module, exports) {

var Fnc = /** @class */ (function () {
    function Fnc() {
    }
    Fnc.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    Fnc.prototype.blood = function (ref, that, type) {
        // 扣血动画 虽然和爆炸的操作是一样的 但是后期可能会换不同的图片 音频等 所以不封装在一起写 而拆成两个方法
        var img = this.createBitmapByName('explosion1_png');
        if (type === 'hero') {
            img.x = ref.x - ref.width / 2;
            img.y = ref.y - ref.height / 2;
        }
        else {
            img.x = ref.x;
            img.y = ref.y;
        }
        img.width = 200;
        img.height = 200;
        var imgTimer = new egret.Timer(18);
        var startIndex = 1;
        imgTimer.addEventListener(egret.TimerEvent.TIMER, function () {
            startIndex++;
            img.texture = RES.getRes("explosion" + startIndex + "_png");
            if (startIndex === 9) {
                imgTimer.stop();
                that.removeChild(img);
            }
        }, this);
        that.addChild(img);
        imgTimer.start();
    };
    Fnc.prototype.blast = function (ref, that, type) {
        // 爆炸显示公共方法
        var img = this.createBitmapByName('explosion1_png');
        if (type === 'hero') {
            img.x = ref.x - ref.width / 2;
            img.y = ref.y - ref.height / 2;
        }
        else {
            img.x = ref.x;
            img.y = ref.y;
        }
        img.width = 200;
        img.height = 200;
        var imgTimer = new egret.Timer(18);
        var startIndex = 1;
        imgTimer.addEventListener(egret.TimerEvent.TIMER, function () {
            startIndex++;
            img.texture = RES.getRes("explosion" + startIndex + "_png");
            if (startIndex === 19) {
                imgTimer.stop();
                that.removeChild(img);
            }
        }, this);
        that.addChild(img);
        imgTimer.start();
    };
    return Fnc;
}());
window["Fnc"] = Fnc;
__reflect(Fnc.prototype,"Fnc",[]); 


/***/ }),

/***/ "./src/views/bg.ts":
/***/ (function(module, exports) {

// 继承一个派生类之后才可以 使用 this.addChild() 往canvas中画元素
var Bg = /** @class */ (function (_super) {
    __extends(Bg, _super);
    function Bg(dispatcher) {
        var _this = _super.call(this) || this;
        _this.fnc = new Fnc();
        _this.sky = [];
        _this.speed_bg = 10;
        _this.startTimer = new egret.Timer(18);
        _this.dispatcher = dispatcher;
        if (dispatcher) {
            _this.dispatcher.addEventListener(CustomDispatcher.START, _this.startGame, _this);
            _this.dispatcher.addEventListener(CustomDispatcher.STOP, _this.stopGame, _this);
            _this.dispatcher.addEventListener(CustomDispatcher.CONTINUE, _this.continueGame, _this);
            _this.dispatcher.addEventListener(CustomDispatcher.OVER, _this.gameOver, _this);
        }
        _this.initBg();
        return _this;
    }
    Bg.prototype.initBg = function () {
        var _this = this;
        for (var i = 0; i < 2; i++) {
            this.sky[i] = this.fnc.createBitmapByName("bg_jpg");
            this.sky[i].width = egret.MainContext.instance.stage.stageWidth;
            this.sky[i].height = egret.MainContext.instance.stage.stageHeight;
        }
        this.addChild(this.sky[0]);
        this.addChild(this.sky[1]);
        this.sky[1].y = -egret.MainContext.instance.stage.stageHeight;
        this.startTimer.addEventListener(egret.TimerEvent.TIMER, function () {
            _this.moveBg(_this.sky, _this.speed_bg);
        }, this);
    };
    Bg.prototype.moveBg = function (obj, speed) {
        var _this = this;
        obj.forEach(function (item, index) {
            item.y += _this.speed_bg;
            if (item.y > item.height - _this.speed_bg - 5) {
                item.y = -item.height;
            }
        });
    };
    Bg.prototype.startGame = function () {
        this.startTimer.start();
    };
    Bg.prototype.stopGame = function () {
        this.startTimer.stop();
    };
    Bg.prototype.continueGame = function () {
        this.startTimer.start();
    };
    Bg.prototype.gameOver = function () {
        this.startTimer.stop();
    };
    return Bg;
}(egret.Sprite));
window["Bg"] = Bg;
__reflect(Bg.prototype,"Bg",[]); 


/***/ }),

/***/ "./src/views/body.ts":
/***/ (function(module, exports) {

var Body = /** @class */ (function (_super) {
    __extends(Body, _super);
    function Body(dispatcher, store) {
        var _this = _super.call(this) || this;
        _this.fnc = new Fnc();
        _this.dispatcher = dispatcher;
        _this.store = store;
        if (dispatcher) {
            _this.dispatcher.addEventListener(CustomDispatcher.START, _this.startGame, _this);
            _this.dispatcher.addEventListener(CustomDispatcher.STOP, _this.stopGame, _this);
            _this.dispatcher.addEventListener(CustomDispatcher.CONTINUE, _this.continueGame, _this);
            _this.dispatcher.addEventListener(CustomDispatcher.OVER, _this.gameOver, _this);
        }
        _this.initHero();
        return _this;
    }
    Body.prototype.initHero = function () {
        this.hero = this.fnc.createBitmapByName('hero_png');
        this.hero.width = 150;
        this.hero.height = 100;
        this.hero.x = egret.MainContext.instance.stage.stageWidth / 2;
        this.hero.y = egret.MainContext.instance.stage.stageHeight;
        this.addChild(this.hero);
        this.hero.touchEnabled = true;
        // 这两行非常的重要，等于将这个元素的锚点设置到这个元素的正中心
        this.hero.anchorOffsetX = this.hero.width / 2;
        this.hero.anchorOffsetY = this.hero.height / 2;
        this.hero.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveHero, this);
        this.store.hero = this.hero;
        var bullet = new Bullet(this.dispatcher, this.store, this.hero);
        this.addChild(bullet);
    };
    Body.prototype.moveHero = function (e) {
        if (this.store.status === Store.STOP) {
            return;
        }
        // 移动飞机
        this.hero.x = e.stageX;
        this.hero.y = e.stageY;
    };
    Body.prototype.startGame = function () {
        egret.Tween.get(this.hero).to({ y: egret.MainContext.instance.stage.stageHeight - 200 }, 200);
    };
    Body.prototype.stopGame = function () {
    };
    Body.prototype.continueGame = function () {
    };
    Body.prototype.gameOver = function () {
        this.removeChild(this.hero);
        this.fnc.blast(this.hero, this, 'hero');
    };
    return Body;
}(egret.Sprite));
window["Body"] = Body;
__reflect(Body.prototype,"Body",[]); 


/***/ }),

/***/ "./src/views/btn.ts":
/***/ (function(module, exports) {

// 继承一个派生类之后才可以 使用 this.addChild() 往canvas中画元素
var Btn = /** @class */ (function (_super) {
    __extends(Btn, _super);
    function Btn(dispatcher, store) {
        var _this = _super.call(this) || this;
        _this.fnc = new Fnc();
        _this.lifeArr = [];
        _this.allLift = 3; // 总生命
        _this.nowLift = 3; // 剩余生命
        _this.dispatcher = dispatcher;
        _this.store = store;
        if (dispatcher) {
            _this.dispatcher.addEventListener(CustomDispatcher.START, _this.startGame, _this);
            _this.dispatcher.addEventListener(CustomDispatcher.STOP, _this.stopGame, _this);
            _this.dispatcher.addEventListener(CustomDispatcher.CONTINUE, _this.continueGame, _this);
            _this.dispatcher.addEventListener(CustomDispatcher.BLOOD, _this.buckleBlood, _this);
        }
        _this.init();
        _this.initLift(); // 初始化生命
        return _this;
    }
    Btn.prototype.init = function () {
        var _this = this;
        this.btn = new eui.Button();
        this.btn.label = '开始游戏';
        // console.log(egret.MainContext.instance.stage.stageWidth / 2, this.btn, this.btn.width)
        this.btn.x = egret.MainContext.instance.stage.stageWidth / 2 - 100 / 2;
        this.btn.y = egret.MainContext.instance.stage.stageHeight / 2;
        this.addChild(this.btn);
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.dispatcher.startGame(); // 触发开始游戏
        }, this);
        this.go = this.fnc.createBitmapByName('go_png');
        this.go.width = 60;
        this.go.height = 60;
        this.go.x = egret.MainContext.instance.stage.stageWidth - this.go.width - 10;
        this.go.y = 10;
        this.go.visible = false;
        this.addChild(this.go);
        this.go.touchEnabled = true;
        this.go.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.dispatcher.gamecontinue(); }, this);
        this.stop = this.fnc.createBitmapByName('stop_png');
        this.stop.width = 60;
        this.stop.height = 60;
        this.stop.x = egret.MainContext.instance.stage.stageWidth - this.stop.width - 10;
        this.stop.y = 10;
        this.stop.visible = false;
        this.stop.touchEnabled = true;
        this.stop.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.dispatcher.gameStop(); }, this);
        this.addChild(this.stop);
    };
    Btn.prototype.initLift = function () {
        for (var i = 0; i < this.nowLift; i++) {
            var lift = this.fnc.createBitmapByName('life_png');
            lift.width = 40;
            lift.height = 40;
            lift.y = 10;
            lift.x = i * lift.width + 10;
            lift.visible = false;
            this.lifeArr.push(lift);
            this.addChild(lift);
        }
    };
    Btn.prototype.startGame = function () {
        this.btn.visible = false; // 隐藏
        this.stop.visible = true;
        this.lifeArr.forEach(function (lift) { return lift.visible = true; });
        this.store.start();
    };
    Btn.prototype.stopGame = function () {
        // 暂停游戏
        //  console.log('laile',this.stop,this.go)
        this.stop.visible = false;
        this.go.visible = true;
        // this.dispatcher.gameStop()
        this.store.stop();
    };
    Btn.prototype.continueGame = function () {
        // 继续游戏
        this.stop.visible = true;
        this.go.visible = false;
        this.store.start();
        this.dispatcher.startGame();
    };
    Btn.prototype.buckleBlood = function () {
        var _this = this;
        // 扣血
        this.nowLift--;
        if (this.nowLift === -1) {
            this.dispatcher.gameOver();
            this.store.over();
        }
        this.lifeArr.forEach(function (item, index) { return index + 1 <= _this.nowLift ? '' : item.visible = false; });
    };
    return Btn;
}(egret.Sprite));
window["Btn"] = Btn;
__reflect(Btn.prototype,"Btn",[]); 


/***/ }),

/***/ "./src/views/bullet.ts":
/***/ (function(module, exports) {

var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet(dispatcher, store, hero) {
        var _this = _super.call(this) || this;
        _this.fnc = new Fnc();
        _this.timer_launch = new egret.Timer(500);
        _this.speed_launch = 10; // 子弹的射速
        _this.boomMusic = null;
        _this.bulletMusic = null;
        _this.dispatcher = dispatcher;
        _this.store = store;
        _this.hero = hero;
        if (dispatcher) {
            _this.dispatcher.addEventListener(CustomDispatcher.START, _this.startGame, _this);
            _this.dispatcher.addEventListener(CustomDispatcher.STOP, _this.stopGame, _this);
            _this.dispatcher.addEventListener(CustomDispatcher.CONTINUE, _this.continueGame, _this);
            _this.dispatcher.addEventListener(CustomDispatcher.OVER, _this.gameOver, _this);
        }
        _this.boomMusic = RES.getRes("boom_mp3");
        _this.bulletMusic = RES.getRes("bullet_mp3");
        _this.init_launch();
        return _this;
        // setTimeout(()=>{
        //   console.log('加速发射')
        //   this.timer_launch = new egret.Timer(20)
        // },5000)
    }
    Bullet.prototype.init_launch = function () {
        var _this = this;
        this.timer_launch.addEventListener(egret.TimerEvent.TIMER, function () {
            if (_this.store.status === Store.STOP) {
                _this.timer_launch.stop();
                return;
            }
            _this.createBullet();
            var channel = _this.bulletMusic.play(0, 1);
            setTimeout(function () {
                channel.stop();
            }, 500);
        }, this);
    };
    Bullet.prototype.createBullet = function () {
        var bullet = this.fnc.createBitmapByName('bullet_png');
        bullet.width = 20;
        bullet.height = 20;
        bullet.x = this.hero.x;
        bullet.y = this.hero.y;
        bullet.anchorOffsetX = bullet.width / 2;
        bullet.anchorOffsetY = 70;
        this.addChild(bullet);
        this.moveBullet(bullet);
    };
    Bullet.prototype.moveBullet = function (bullet) {
        var _this = this;
        // 发射出去 -- 这里可能有个优化点 创建了太多的 timer 了  不知道是不是可以使用 setInterval 来做
        var timer = new egret.Timer(1);
        timer.addEventListener(egret.TimerEvent.TIMER, function () {
            if (_this.store.status === Store.STOP) {
                return;
            }
            if (_this.store.status === Store.OVER) {
                // return
                timer.stop();
            }
            bullet.y -= _this.speed_launch;
            _this.store.enemyList.some(function (enemy) {
                var rect1 = bullet.getBounds();
                var rect2 = enemy.value.getBounds();
                rect1.x = bullet.x;
                rect1.y = bullet.y;
                rect2.x = enemy.value.x;
                rect2.y = enemy.value.y;
                if (rect1.intersects(rect2)) {
                    // 子弹打中就可以停了
                    console.log('打中了');
                    _this.store.addScore();
                    _this.fnc.blast(enemy.value, _this);
                    var channel_1 = _this.boomMusic.play(0, 1);
                    setTimeout(function () {
                        channel_1.stop();
                    }, 500);
                    _this.removeChild(bullet);
                    _this.store.that.removeChild(enemy.value);
                    enemy.timer.stop();
                    _this.store.outEnemy(enemy);
                    timer.stop();
                    return true;
                }
            });
            if (bullet.y <= 20) {
                console.log('暂停发射子弹的定时器');
                _this.removeChild(bullet);
                timer.stop();
            }
        }, this);
        timer.start();
    };
    Bullet.prototype.startGame = function () {
        console.log('jixu');
        this.timer_launch.start();
    };
    Bullet.prototype.stopGame = function () {
    };
    Bullet.prototype.continueGame = function () {
    };
    Bullet.prototype.gameOver = function () {
        this.timer_launch.stop();
    };
    return Bullet;
}(egret.Sprite));
window["Bullet"] = Bullet;
__reflect(Bullet.prototype,"Bullet",[]); 


/***/ }),

/***/ "./src/views/enemy.ts":
/***/ (function(module, exports) {

var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy(dispatcher, store) {
        var _this = _super.call(this) || this;
        _this.fnc = new Fnc();
        _this.timer_enemy = new egret.Timer(1000);
        _this.speed_enemy = 15;
        _this.boomMusic = null;
        _this.dispatcher = dispatcher;
        _this.store = store;
        _this.store.that = _this;
        if (dispatcher) {
            _this.dispatcher.addEventListener(CustomDispatcher.START, _this.startGame, _this);
            _this.dispatcher.addEventListener(CustomDispatcher.STOP, _this.stopGame, _this);
            _this.dispatcher.addEventListener(CustomDispatcher.CONTINUE, _this.continueGame, _this);
            _this.dispatcher.addEventListener(CustomDispatcher.OVER, _this.gameOver, _this);
        }
        _this.boomMusic = RES.getRes("boom_mp3");
        _this.initEnemy();
        return _this;
    }
    Enemy.prototype.initEnemy = function () {
        var _this = this;
        this.timer_enemy.addEventListener(egret.TimerEvent.TIMER, function () {
            if (_this.store.status === Store.STOP) {
                _this.timer_enemy.stop();
                return;
            }
            _this.createEnemy();
        }, this);
    };
    Enemy.prototype.createEnemy = function () {
        var enemy = this.fnc.createBitmapByName('enemy_png');
        enemy.width = 100;
        enemy.height = 100;
        var x = Math.floor(Math.random() * (this.stage.stageWidth - enemy.width));
        // enemy.x = 120
        enemy.x = x;
        enemy.y = 0;
        this.addChild(enemy);
        // this.moveEnemy(this.store.enemyList[this.store.enemyList.indexOf(enemy)])
        this.moveEnemy(enemy);
    };
    Enemy.prototype.moveEnemy = function (enemy) {
        var _this = this;
        var timer = new egret.Timer(18);
        var obj = {
            timer: timer,
            value: enemy
        };
        this.store.addEnemy(obj);
        timer.addEventListener(egret.TimerEvent.TIMER, function () {
            enemy.y += _this.speed_enemy;
            var rect1 = enemy.getBounds();
            var rect2 = _this.store.hero.getBounds();
            rect1.x = enemy.x;
            rect1.y = enemy.y;
            rect2.x = _this.store.hero.x - _this.store.hero.width / 2;
            rect2.y = _this.store.hero.y;
            if (rect1.intersects(rect2)) {
                // 主角战机被撞到 游戏结束
                if (_this.store.enemyList.indexOf(obj) !== -1) {
                    // alert('飞机相撞了')
                    console.log('飞机装了');
                    _this.fnc.blood(enemy, _this, 'hero');
                    var channel_1 = _this.boomMusic.play(0, 1);
                    setTimeout(function () {
                        channel_1.stop();
                    }, 500);
                    _this.dispatcher.buckleBliid();
                    _this.store.outEnemy(obj);
                    _this.removeChild(obj.value);
                    timer.stop();
                }
            }
            if (enemy.y >= egret.MainContext.instance.stage.stageHeight) {
                timer.stop();
                // 这里可优化
                _this.store.enemyList.splice(_this.store.enemyList.indexOf(obj), 1); // 有问题看这里
                console.log('暂停飞机飞行的定时器', _this.store.enemyList);
            }
        }, this);
        timer.start();
    };
    Enemy.prototype.startGame = function () {
        // console.log('jixu')
        this.timer_enemy.start();
    };
    Enemy.prototype.stopGame = function () {
        this.store.enemyList.forEach(function (item) { return item.timer.stop(); });
    };
    Enemy.prototype.continueGame = function () {
        this.store.enemyList.forEach(function (item) { return item.timer.start(); });
    };
    Enemy.prototype.gameOver = function () {
        this.timer_enemy.stop();
        this.store.enemyList.forEach(function (item) { return item.timer.stop(); });
    };
    return Enemy;
}(egret.Sprite));
window["Enemy"] = Enemy;
__reflect(Enemy.prototype,"Enemy",[]); 


/***/ })

/******/ });