import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
var NO_ACTIVITY_COLOR = "#ebedf0";
// GithubSquare.tsx
export default function GithubSquare(_a) {
    var color = _a.color, date = _a.date, contributionCount = _a.contributionCount;
    var _b = useState(false), isHovered = _b[0], setHovered = _b[1];
    var isEmpty = color.toLowerCase() === NO_ACTIVITY_COLOR;
    return (_jsxs("div", { className: "relative flex flex-col items-center justify-center w-full h-full", onMouseEnter: function () { return setHovered(true); }, onMouseLeave: function () { return setHovered(false); }, children: [_jsx("div", { style: { backgroundColor: color }, className: "hover:scale-130 transform transition-transform duration-50 rounded-xs h-4 w-4 hover:cursor-pointer ".concat(isEmpty ? "opacity-20" : "opacity-100") }), isHovered && contributionCount != 0 ?
                _jsx("div", { className: "z-10 absolute top-5 left-3 flex flex-col items-center justify-center p-1 bg-gray-600/30 h-4 w-6", children: _jsx("p", { className: "text-white font-bold", children: contributionCount }) })
                :
                    _jsx("p", {})] }));
}
