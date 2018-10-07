"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var Div = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n\n  > div {\n    height: 100%;\n    position: absolute;\n    width: 100%;\n\n    &.push,\n    &.pop {\n      transition: ", "ms;\n    }\n  }\n"], ["\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n\n  > div {\n    height: 100%;\n    position: absolute;\n    width: 100%;\n\n    &.push,\n    &.pop {\n      transition: ",
    "ms;\n    }\n  }\n"])), function (_a) {
    var duration = _a.duration;
    return duration === undefined ? 0 : duration;
});
var getCloneElement = function (_a) {
    var children = _a.children, location = _a.location, match = _a.match;
    var computedMatch = null;
    var child = React.createElement(React.Fragment, null);
    React.Children.forEach(children, function (element) {
        if (computedMatch !== null || !React.isValidElement(element)) {
            return;
        }
        var props = element.props;
        child = element;
        computedMatch = react_router_dom_1.matchPath(location.pathname, props, match);
    });
    return computedMatch
        ? React.cloneElement(child, { location: location, computedMatch: computedMatch })
        : null;
};
var TransitionSwitch = /** @class */ (function (_super) {
    __extends(TransitionSwitch, _super);
    function TransitionSwitch(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            action: '',
            currentDom: getCloneElement(props),
            nextDom: null
        };
        return _this;
    }
    TransitionSwitch.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        if (prevProps.location.pathname === this.props.location.pathname) {
            return;
        }
        var _a = this.props, duration = _a.duration, action = _a.history.action;
        this.setState({
            action: action.toLowerCase(),
            nextDom: getCloneElement(this.props)
        }, function () {
            setTimeout(function () {
                var _a = _this.state, action = _a.action, nextDom = _a.nextDom;
                _this.setState({
                    action: action + " do"
                }, function () {
                    setTimeout(function () {
                        _this.setState({
                            action: '',
                            currentDom: nextDom,
                            nextDom: null
                        });
                    }, duration === undefined ? 0 : duration);
                });
            }, 100); // HELP ME!: want to remove...
        });
        return;
    };
    TransitionSwitch.prototype.render = function () {
        var _a = this.props, className = _a.className, props = __rest(_a, ["className"]);
        var _b = this.state, action = _b.action, currentDom = _b.currentDom, nextDom = _b.nextDom;
        return (React.createElement(Div, __assign({}, props, { className: "transition-switch " + (className || '') + " " + action }),
            React.createElement("div", { className: "next " + action }, nextDom),
            React.createElement("div", { className: "current " + action }, currentDom)));
    };
    return TransitionSwitch;
}(React.Component));
exports.default = react_router_dom_1.withRouter(TransitionSwitch);
var templateObject_1;
