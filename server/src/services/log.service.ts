import { injectable } from "inversify";
import { ILog } from "../types";

@injectable()
export class Log implements ILog{
    constructor() {

    }

    info(message: string) {
        console.info(message);
    }

    error(message: string, context?: any) {
        console.error(message, context);
    }
}