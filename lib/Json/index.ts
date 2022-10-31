import { parse } from './Parse'
import { stringify } from './Stringify'

/**
 * Json
 * 
 * @since v1.0.0
 */
export class Json
{
    constructor() {}

    /**
     * 문자열 데이터를 Json으로 변환합니다
     * 
     * @since v1.0.0
     * @param data 데이터
     * @returns any
     */
    public parse(
        /**
         * 데이터
         */
        data: string): any
    {
        return parse(data)
    }

    /**
     * Json 데이터를 문자열로 변환합니다
     * 
     * @since v1.0.0
     * @param data 데이터
     * @returns string
     */
    public stringify(
        /**
         * 데이터
         */
        data: any): string
    {
        return stringify(data)
    }
}