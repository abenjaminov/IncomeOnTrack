export interface ILog {
    error(message: string, context?: any): void;
    info(message: string): void;
}