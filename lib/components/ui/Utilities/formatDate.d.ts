export interface DateOptions {
    weekday?: 'long' | 'short' | 'narrow';
    year?: 'numeric' | '2-digit';
    month?: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit';
    day?: 'numeric' | '2-digit';
}
export declare const formatDate: (dateStr: string, locale?: string, dateOptions?: DateOptions, todayText?: string, yesterdayText?: string) => string;
