"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify = void 0;
/**
* Json 데이터를 문자열로 변환합니다
*
* @since v1.0.0
* @param data 데이터
* @returns string
*/
function stringify(
/**
 * 데이터
 */
data) {
    return JSON.stringify(data, (key, value) => typeof value === 'bigint' ? `${value.toString()}n` : value);
}
exports.stringify = stringify;
//# sourceMappingURL=index.js.map