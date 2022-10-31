export function stringify( data: any): string
{
    return JSON.stringify(data, (key: string, value: any) => typeof value === 'bigint' ? `${value.toString()}n` : value)
}