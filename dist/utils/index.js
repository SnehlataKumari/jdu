"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOTP = exports.removeSpecialChar = exports.sanitizeJson = exports.getJsonFromCSV = exports.success = void 0;
const csv = require("csv-parser");
const fs = require("fs");
const lodash_1 = require("lodash");
exports.success = async (message = 'Success', data) => {
    return ({
        message,
        data: await data,
    });
};
exports.getJsonFromCSV = async (file) => {
    const results = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(file.path)
            .pipe(csv())
            .on('data', (data) => results.push(exports.sanitizeJson(data)))
            .on('end', () => {
            resolve(results);
        });
    });
};
exports.sanitizeJson = (json) => {
    if (lodash_1.isObject(json)) {
        return Reflect.ownKeys(json).reduce((obj, key) => {
            obj[exports.removeSpecialChar(key)] = exports.removeSpecialChar(json[key]);
            return obj;
        }, {});
    }
};
exports.removeSpecialChar = (stringVal) => {
    return stringVal.trim();
};
exports.generateOTP = () => Math.floor(1000 + Math.random() * 9000);
//# sourceMappingURL=index.js.map