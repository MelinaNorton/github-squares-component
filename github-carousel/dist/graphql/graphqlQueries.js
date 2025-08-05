var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
export var CONTRIBUTIONS_QUERY = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query Contributions($login: String!) {\n    user(login: $login) {\n      contributionsCollection {\n        contributionCalendar {\n          weeks {\n            contributionDays {\n              date\n              color\n              contributionCount\n            }\n          }\n        }\n      }\n    }\n  }\n"], ["\n  query Contributions($login: String!) {\n    user(login: $login) {\n      contributionsCollection {\n        contributionCalendar {\n          weeks {\n            contributionDays {\n              date\n              color\n              contributionCount\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
var templateObject_1;
