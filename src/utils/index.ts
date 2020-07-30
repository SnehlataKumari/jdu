import * as csv from 'csv-parser';
import * as fs from 'fs';

import {isObject} from 'lodash';

export const success = async (message = 'Success', data: any) => {
  return ({
    message,
    data: await data,
  })
};

export const getJsonFromCSV = async (file) => {
  const results = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(file.path)
      .pipe(csv())
      .on('data', (data) => results.push(sanitizeJson(data)))
      .on('end', () => {
        resolve(results)
      });
  });
}

export const sanitizeJson = (json) => {
  if (isObject(json)) {
    return Reflect.ownKeys(json).reduce((obj, key) => {
      obj[removeSpecialChar(key)] = removeSpecialChar(json[key]);
      return obj;
    }, {});
  }
}

export const removeSpecialChar = (stringVal) => {
  return stringVal.trim();
}

export const generateOTP = () => Math.floor(1000 + Math.random() * 9000);