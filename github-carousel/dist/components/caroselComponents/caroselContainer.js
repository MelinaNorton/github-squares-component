// CarouselContainer.tsx
'use client';
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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import GithubSquare from "./githubSquare";
export var CarouselContainer = function (_a) {
    var days = _a.days;
    return (_jsx("div", { className: "overflow-hidden w-full h-40 opacity-40", children: _jsxs("div", { tabIndex: 0, className: "inline-flex animate-marquee space-x-1 h-full", children: [_jsx("div", { className: "grid grid-rows-3 sm:grid-rows-5 md:grid-rows-7 grid-flow-col gap-1", children: days.map(function (day) { return (_jsx(GithubSquare, __assign({}, day), day.date)); }) }), _jsx("div", { "aria-hidden": true, className: "grid grid-rows-3 sm:grid-rows-5 md:grid-rows-7 grid-flow-col gap-1", children: days.map(function (day) { return (_jsx(GithubSquare, __assign({}, day), day.date + "-dup")); }) })] }) }));
};
