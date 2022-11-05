"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
/**
 * 문자열 데이터를 Json으로 변환합니다
 *
 * @since v1.0.0
 * @param data 데이터
 * @returns any
 */
function parse(
/**
 * 데이터
 */
data) {
    return JSON.parse(data, (key, value) => {
        if (typeof value === 'string' && /^\d+n$/.test(value))
            return BigInt(value.slice(0, value.length - 1));
        return value;
    });
}
exports.parse = parse;
//# sourceMappingURL=index.js.map