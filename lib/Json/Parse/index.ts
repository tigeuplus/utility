export function parse(data: any): any
{
    return JSON.parse(data, (key: string, value: any) =>
    {
        if (typeof value === 'string' && /^\d+n$/.test(value)) 
            return BigInt(value.slice(0, value.length - 1))

        return value
    })
}