import { Model } from "mongoose";
export declare class DBService {
    private model;
    constructor(model: Model<any>);
    findAll(where?: {}): import("mongoose").DocumentQuery<any[], any, {}>;
    delete(query: any): import("mongoose").Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
    create(userObject: any): Promise<any>;
    findByIdAndDelete(userId: any): import("mongoose").DocumentQuery<any, any, {}>;
    findByIdAndUpdate(userId: any, userObject: any, options?: {
        new: boolean;
    }): import("mongoose").DocumentQuery<any, any, {}>;
    findById(id: any): import("mongoose").DocumentQuery<any, any, {}>;
    findOne(query: any): import("mongoose").DocumentQuery<any, any, {}>;
    find(query?: {}): import("mongoose").DocumentQuery<any[], any, {}>;
    insertMany(values: any): Promise<any>;
    update(model: any, updateObject: any): Promise<any>;
}
