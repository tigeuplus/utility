 /**
 * Json 데이터를 문자열로 변환합니다
 * 
 * @since v1.0.0
 * @param data 데이터
 * @returns string
 */
export function stringify(
    /**
     * 데이터
     */
    data: any): string
{
    return JSON.stringify(data, (key: string, value: any) => typeof value === 'bigint' ? `${value.toString()}n` : value)
}