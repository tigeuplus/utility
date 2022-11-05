"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSHA256 = void 0;
const crypto_1 = require("crypto");
/**
 * SHA256 해시를 계산합니다
 *
 * @since v1.0.0
 * @param data 데이터
 * @returns string
 */
function calculateSHA256(
/**
 * 데이터
 */
data) {
    return (0, crypto_1.createHash)('sha256').update(data).digest('hex');
}
exports.calculateSHA256 = calculateSHA256;
//# sourceMappingURL=index.js.map