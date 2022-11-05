/**
 * 문자열 데이터를 Json으로 변환합니다
 * 
 * @since v1.0.0
 * @param data 데이터
 * @returns any
 */
export function parse(
    /**
     * 데이터 
     */
    data: any): any
{
    return JSON.parse(data, (key: string, value: any) =>
    {
        if (typeof value === 'string' && /^\d+n$/.test(value)) 
            return BigInt(value.slice(0, value.length - 1))

        return value
    })
}