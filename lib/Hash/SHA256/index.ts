import { createHash } from 'crypto'

/**
 * SHA256 해시를 계산합니다
 * 
 * @since v1.0.0
 * @param data 데이터
 * @returns string
 */
export function calculateSHA256(
    /**
     * 데이터
     */
    data: string): string
{
    return createHash('sha256').update(data).digest('hex')
}