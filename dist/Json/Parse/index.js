"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
function parse(data) {
    return JSON.parse(data, (key, value) => {
        if (typeof value === 'string' && /^\d+n$/.test(value))
            return BigInt(value.slice(0, value.length - 1));
        return value;
    });
}
exports.parse = parse;
//# sourceMappingURL=index.js.map