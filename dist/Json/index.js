"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Json = void 0;
const Parse_1 = require("./Parse");
const Stringify_1 = require("./Stringify");
/**
 * Json
 *
 * @since v1.0.0
 */
class Json {
    constructor() { }
    /**
     * 문자열 데이터를 Json으로 변환합니다
     *
     * @since v1.0.0
     * @param data 데이터
     * @returns any
     */
    parse(
    /**
     * 데이터
     */
    data) {
        return (0, Parse_1.parse)(data);
    }
    /**
     * Json 데이터를 문자열로 변환합니다
     *
     * @since v1.0.0
     * @param data 데이터
     * @returns string
     */
    stringify(
    /**
     * 데이터
     */
    data) {
        return (0, Stringify_1.stringify)(data);
    }
}
exports.Json = Json;
//# sourceMappingURL=index.js.map