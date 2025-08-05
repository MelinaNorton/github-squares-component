import { jsx as _jsx } from "react/jsx-runtime";
import { CarouselContainer } from "./caroselContainer";
//exposed component for download
var CaroselComponent = function (_a) {
    var days = _a.days, username = _a.username;
    return (_jsx("div", { children: _jsx(CarouselContainer, { days: days, username: username }) }));
};
// pages/index.tsx
export { CaroselComponent as default };
