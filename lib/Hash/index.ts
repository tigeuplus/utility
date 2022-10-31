import { calculateSHA256 } from './SHA256'

/**
 * 해시
 * 
 * @since v1.0.0
 */
export class Hash
{
    constructor() {}

    /**
     * SHA256 해시를 계산합니다
     * 
     * @since v1.0.0
     * @param data 데이터
     * @returns string
     */
    public sha256(
        /**
         * 데이터
         */
        data: string): string
    {
        return calculateSHA256(data)
    }
}