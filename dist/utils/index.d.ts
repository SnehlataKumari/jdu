export declare const success: (message: string, data: any) => Promise<{
    message: string;
    data: any;
}>;
export declare const getJsonFromCSV: (file: any) => Promise<unknown>;
export declare const sanitizeJson: (json: any) => {};
export declare const removeSpecialChar: (stringVal: any) => any;
export declare const generateOTP: () => number;
