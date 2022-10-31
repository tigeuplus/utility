"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify = void 0;
function stringify(data) {
    return JSON.stringify(data, (key, value) => typeof value === 'bigint' ? `${value.toString()}n` : value);
}
exports.stringify = stringify;
//# sourceMappingURL=index.js.map