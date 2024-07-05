import { Response } from "express";

class ApiResponse {
    data: {} | any[];
    message: string;
    statusCode: number;

    constructor(data: {} | any[] = [], message = "", statusCode: number) {
        this.data = data;
        this.message = message;
        this.statusCode = statusCode;
    }

    static success(data: {} | any[], message: string, statusCode: number = 200) {
        return new ApiResponse(data, message, statusCode);
    }

    static failure(data: {} | any[], message: string, statusCode: number = 500) {
        return new ApiResponse(data, message, statusCode);
    }

    send(res: Response) {
        res.status(this.statusCode).json({
            data: this.data,
            message: this.message,
        });
    }
}

export default ApiResponse;
