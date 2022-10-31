"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSHA256 = void 0;
const crypto_1 = require("crypto");
function calculateSHA256(data) {
    return (0, crypto_1.createHash)('sha256').update(data).digest('hex');
}
exports.calculateSHA256 = calculateSHA256;
//# sourceMappingURL=index.js.map