"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hash = void 0;
const SHA256_1 = require("./SHA256");
/**
 * 해시
 *
 * @since v1.0.0
 */
class Hash {
    constructor() { }
    /**
     * SHA256 해시를 계산합니다
     *
     * @since v1.0.0
     * @param data 데이터
     * @returns string
     */
    sha256(
    /**
     * 데이터
     */
    data) {
        return (0, SHA256_1.calculateSHA256)(data);
    }
}
exports.Hash = Hash;
//# sourceMappingURL=index.js.map